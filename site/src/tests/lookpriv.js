const { chromium } = require('playwright');
const SP = (process.env.SHOTS || require('os').tmpdir());
(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
  const html = require('fs').readFileSync(require('path').join(__dirname,'..','..','index.html'),'utf8');
  const doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0">'+html+'</body></html>';
  for (const [w,h,name] of [[1280,900,'d'],[390,844,'m']]) {
    const ctx = await b.newContext({viewport:{width:w,height:h}}); const p = await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
    await p.setContent(doc,{waitUntil:'load'}); await p.waitForTimeout(300);
    await p.evaluate(() => { ui.sc = "USA"; }); await p.click('.tabbtn[data-tab="unis"]'); await p.click('#subnav [data-sub="strat"]'); await p.waitForTimeout(300);
    const sec = await p.evaluateHandle(() => [...document.querySelectorAll('.scard')].find(s => /Largest confirmed awards/.test(s.textContent)));
    await sec.asElement().scrollIntoViewIfNeeded(); await sec.asElement().screenshot({path:`${SP}/priv-${name}.png`});
    console.log(name, errs, await p.evaluate(()=>document.documentElement.scrollWidth - innerWidth));
    await ctx.close();
  }
  await b.close();
})();
