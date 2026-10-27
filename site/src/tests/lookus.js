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
    const pay = await p.$('#usPay'); await pay.scrollIntoViewIfNeeded(); await p.waitForTimeout(100);
    await p.screenshot({path:`${SP}/us-${name}-pay.png`});
    await p.fill('#ixq','ohio'); await p.waitForTimeout(150);
    const ix = await p.$('#usIndex'); await ix.screenshot({path:`${SP}/us-${name}-index.png`});
    await p.click('[data-aidgo="full"]'); await p.waitForTimeout(300);
    const n = await p.evaluate(() => [document.getElementById('uCount').textContent, ui.aid]);
    await p.evaluate(() => goto('us5b')); await p.waitForTimeout(300);
    const it = await p.$('#it-us5b'); await it.screenshot({path:`${SP}/us-${name}-row.png`});
    console.log(name, n, errs, await p.evaluate(()=>document.documentElement.scrollWidth - innerWidth));
    await ctx.close();
  }
  await b.close();
})();
