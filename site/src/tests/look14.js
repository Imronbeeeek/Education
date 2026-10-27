const { chromium } = require('playwright');
const SP = (process.env.SHOTS || require('os').tmpdir());
(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
  const html = require('fs').readFileSync(require('path').join(__dirname,'..','..','index.html'),'utf8');
  const doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body style="margin:0">'+html+'</body></html>';
  const errs = [];
  for (const [w,h,name] of [[1280,900,'d'],[390,844,'m']]) {
    const ctx = await b.newContext({viewport:{width:w,height:h}, colorScheme:'dark'});
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(name+': '+e.message)); p.on('console', m => { if (m.type()==='error') errs.push(name+' console: '+m.text()); });
    await p.setContent(doc,{waitUntil:'load'}); await p.waitForTimeout(600);
    await p.screenshot({path:`${SP}/v14-${name}-home.png`});
    if (name==='d') await p.screenshot({path:`${SP}/v14-${name}-homefull.png`, fullPage:true});
    else { await p.evaluate(()=>window.scrollTo(0,700)); await p.waitForTimeout(100); await p.screenshot({path:`${SP}/v14-${name}-home2.png`}); }
    await p.click('.tabbtn[data-tab="unis"]'); await p.waitForTimeout(300);
    await p.screenshot({path:`${SP}/v14-${name}-unis.png`});
    await p.click('#subnav [data-sub="strat"]'); await p.waitForTimeout(300);
    await p.screenshot({path:`${SP}/v14-${name}-ctry.png`});
    await p.click('.tabbtn[data-tab="list"]'); await p.waitForTimeout(300);
    await p.screenshot({path:`${SP}/v14-${name}-list.png`});
    await p.click('.tabbtn[data-tab="plan"]'); await p.waitForTimeout(300);
    await p.screenshot({path:`${SP}/v14-${name}-plan.png`});
    await p.click('#planNav [data-pv="time"]'); await p.waitForTimeout(300);
    await p.screenshot({path:`${SP}/v14-${name}-time.png`});
    const ov = await p.evaluate(()=>document.documentElement.scrollWidth - innerWidth);
    errs.push(name+' overflow '+ov);
    await ctx.close();
  }
  console.log(errs.join('\n'));
  await b.close();
})();
