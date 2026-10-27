const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
  const html = require('fs').readFileSync(require('path').join(__dirname,'..','..','index.html'),'utf8');
  const doc = h => '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0">'+html+'</body></html>';
  const res = []; const ok = (c, m) => res.push((c ? "PASS " : "FAIL ") + m);
  for (const [w,h,name] of [[1280,900,'desktop'],[390,844,'phone']]) {
    const ctx = await b.newContext({viewport:{width:w,height:h}});
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.setContent(doc(),{waitUntil:'load'}); await p.waitForTimeout(400);
    const vis = sel => p.evaluate(s => { const e = document.querySelector(s); return !!e && !e.closest('[hidden]') && e.offsetParent !== null; }, sel);
    ok(await vis('[data-panel="home"]'), name+": home is the first view");
    ok((await p.$$('#hNext .hlist li')).length === 3, name+": home shows 3 next tasks");
    ok((await p.$$('#hDead .dlist li')).length > 0, name+": home shows deadlines");
    ok((await p.$$('#hCtry .crow')).length === 5, name+": home shows 5 best countries");
    ok((await p.$$('#hFields .ftile')).length === 9, name+": 9 field tiles (no medicine)");
    ok(await p.evaluate(() => !document.body.innerText.includes("Medicine & health")), name+": no medicine field anywhere");
    ok(await p.evaluate(() => typeof byId.qa4 === "undefined" && typeof byId.hu5 === "undefined" && !!byId.us4), name+": medical-only rows gone, mixed kept");
    // country row -> Countries view
    await p.click('#hCtry .crow >> nth=1'); await p.waitForTimeout(250);
    ok(await vis('#vStrat') && await p.evaluate(() => ui.sub === "strat" && !!document.querySelector('#stratOut .strat')), name+": best-country row opens its country page");
    ok(await p.evaluate(() => !!document.getElementById('sFacts')), name+": country page includes how the system works");
    await p.click('#sysBox summary'); await p.waitForTimeout(200);
    ok((await p.$$('#ctryOut tbody tr')).length >= 30, name+": systems table renders for all countries");
    // field tile -> Browse filtered
    await p.click('.tabbtn[data-tab="home"]'); await p.waitForTimeout(150);
    await p.click('#hFields .ftile[data-fieldgo="cs"]'); await p.waitForTimeout(250);
    ok(await vis('#vProg') && await p.evaluate(() => ui.field === "cs" && ui.lane === "1"), name+": field tile opens Browse filtered to CS in Tier 1");
    ok(await p.evaluate(() => document.querySelector('[data-field="cs"]').getAttribute('aria-pressed') === "true"), name+": CS chip marked active");
    // search + save
    await p.click('[data-field=""]'); await p.fill('#q', 'Koç'); await p.waitForTimeout(250);
    ok((await p.$$('#cGroups .it')).length >= 1, name+": search finds Koç");
    const before = await p.evaluate(() => state.saved.length);
    const id = await p.evaluate(() => { const b = document.querySelector('#cGroups [data-save][aria-pressed="false"]'); return b && b.dataset.save; });
    await p.click(`#cGroups [data-save="${id}"]`); await p.waitForTimeout(200);
    ok(await p.evaluate(n => state.saved.length === n + 1, before), name+": save adds to My list");
    ok(await p.evaluate(n => document.getElementById('bList').textContent.includes(String(n + 1)), before), name+": My list badge updates");
    // My list: status
    await p.click('.tabbtn[data-tab="list"]'); await p.waitForTimeout(200);
    ok(await vis('#shortlist') && (await p.$$('#shortlist .app-row')).length === before + 1, name+": My list shows every saved programme");
    await p.selectOption(`[data-appst="${id}"]`, 'sent'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => /^1 of/.test(document.querySelector('#slSum span').innerText)), name+": status change updates the summary");
    ok(await p.evaluate(() => document.querySelector('#hList .kpis div:nth-child(3) b').textContent === "1"), name+": home counts the submitted application");
    await p.click('#slSort [data-sls="ctry"]'); await p.waitForTimeout(150);
    ok(await p.evaluate(() => ui.sls === "ctry"), name+": list can be ordered by country");
    ok(await vis('#balance .balbar') && await vis('#fees .feegrid'), name+": balance and fees live in My list");
    await p.click('#slSum [data-gofees]'); await p.waitForTimeout(150);
    ok(await vis('#fees'), name+": 'How to pay less' stays in My list");
    // Plan
    await p.click('.tabbtn[data-tab="plan"]'); await p.waitForTimeout(200);
    ok(await vis('#vTasks') && (await p.$$('#next3 .task-card')).length > 0, name+": Plan opens on tasks");
    await p.click('#planNav [data-pv="time"]'); await p.waitForTimeout(200);
    ok(await vis('#gantt') && await vis('#months'), name+": Timeline shows the roadmap");
    await p.click('.tabbtn[data-tab="home"]'); await p.waitForTimeout(150);
    await p.click('#hNext [data-pvgo="tasks"]'); await p.waitForTimeout(150);
    ok(await vis('#vTasks'), name+": home 'All tasks' opens the task list");
    const n0 = await p.evaluate(() => allTasks().filter(t => !isClosed(t)).length);
    await p.click('.tabbtn[data-tab="home"]'); await p.waitForTimeout(150);
    await p.click('#hNext [data-done] >> nth=0'); await p.waitForTimeout(150);
    ok(await p.evaluate(n => allTasks().filter(t => !isClosed(t)).length === n - 1, n0), name+": Done on home completes a task");
    // filters
    await p.click('.tabbtn[data-tab="unis"]'); await p.click('#subnav [data-sub="prog"]'); await p.fill('#q',''); await p.waitForTimeout(150);
    await p.click('#fBtn'); await p.click('[data-tog="free"]'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => ui.free && document.getElementById('fCount').textContent === "1"), name+": free filter counts");
    await p.click('[data-clear]'); await p.waitForTimeout(150);
    // scorecard link
    await p.click('.tabbtn[data-tab="home"]'); await p.click('#hCtry [data-scoreall]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => document.getElementById('scoreBox').open && document.querySelectorAll('#score tbody tr').length >= 30), name+": scorecard link opens the full scorecard");
    // details goto from list
    await p.click('.tabbtn[data-tab="list"]'); await p.click(`#shortlist [data-goto="${id}"]`); await p.waitForTimeout(300);
    ok(await p.evaluate(i => { const d = document.getElementById('it-' + i); return d && d.open && !d.closest('[hidden]'); }, id), name+": name in My list opens its details in Browse");
    const ov = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    ok(ov <= 0, name+": no sideways scroll ("+ov+")");
    ok(!errs.length, name+": no script errors " + errs.join(" | "));
    await ctx.close();
  }
  const ctx = await b.newContext(); const p = await ctx.newPage();
  await p.goto('about:blank'); await p.setContent(doc(),{waitUntil:'load'});
  ok(await p.evaluate(() => document.querySelectorAll('[data-dl]').length === 2), "two download buttons (plan, shortlist)");
  console.log(res.join("\n")); console.log(res.filter(r => r.startsWith("FAIL")).length + " failed of " + res.length);
  await b.close();
})();
