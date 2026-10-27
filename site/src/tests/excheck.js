const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
  const html = require('fs').readFileSync(require('path').join(__dirname,'..','..','index.html'),'utf8');
  const p = await (await b.newContext()).newPage(); const errs=[]; p.on('pageerror', e => errs.push(e.message));
  await p.setContent('<!doctype html><html><body>'+html+'</body></html>',{waitUntil:'load'});
  const out = await p.evaluate(() => {
    const us = U.filter(x => x.country === "USA");
    const names = {}; us.forEach(x => names[x.name] = (names[x.name]||0)+1);
    const dups = Object.entries(names).filter(([n,c]) => c > 1).map(([n]) => n);
    const unmatched = Object.keys(AID).filter(n => !us.some(x => x.name === n));
    const cnt = {}; us.forEach(x => { const t = aidOf(x).t; cnt[t] = (cnt[t]||0)+1; });
    const ck = us.filter(x => aidOf(x).t === "ck").map(x => x.name);
    const seg = {}; us.forEach(x => { const s = SEG[x.id]||"-"; seg[s]=(seg[s]||0)+1; });
    const ex={}, mrx={}; us.forEach(x=>{const a=aidOf(x); ex[a.ex||"-"]=(ex[a.ex||"-"]||0)+1; if(a.t==="mr") mrx[a.ex||"-"]=(mrx[a.ex||"-"]||0)+1;}); const src=us.filter(x=>{const a=aidOf(x); return a.src;}).length; return {ex, mrx, src, checked: Object.keys(MERIT_CHECKED).length};
  });
  console.log(JSON.stringify(out, null, 1)); console.log("errors", errs);
  await b.close();
})();
