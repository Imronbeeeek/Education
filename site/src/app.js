
/* ===================== SAT ===================== */
const SAT_DATES = [
 {id:"nov", test:"2026-11-07", reg:"2026-10-23", late:"2026-10-27", scores:"2026-11-20"},
 {id:"dec", test:"2026-12-05", reg:"2026-11-20", late:"2026-11-24", scores:"2026-12-18"},
 {id:"mar", test:"2027-03-06", reg:"2027-02-19", late:"2027-02-23", scores:"2027-03-19"},
 {id:"may", test:"2027-05-01", reg:"2027-04-16", late:"2027-04-20", scores:"2027-05-14"},
 {id:"jun", test:"2027-06-05", reg:"2027-05-21", late:"2027-05-25", scores:"2027-06-18"}
];
const SAT_USES = [
 ["UT Austin, Texas A&M (1 Dec; or ask about late scores)","2026-12-01","USA"],
 ["Caltech and MIT (scores by ~31 Dec)","2026-12-31","USA"],
 ["US regular decision (1–15 Jan)","2027-01-15","USA"],
 ["Columbia GS early action (1 Mar)","2027-03-01","USA"],
 ["US rolling public universities (~1 May)","2027-05-01","USA"],
 ["CUHK and CityU (7–15 Jan)","2027-01-07","Hong Kong"],
 ["PolyU main round (11 Feb)","2027-02-11","Hong Kong"],
 ["PolyU extended round (14 May)","2027-05-14","Hong Kong"],
 ["HKUST (closes 30 Jun)","2027-06-30","Hong Kong"],
 ["Qatar Education City (15 Jan, optional)","2027-01-15","Qatar"],
 ["NYU Shanghai, Duke Kunshan (4–5 Jan)","2027-01-04","China"],
 ["IE University round 3 (5 Mar)","2027-03-05","Spain"],
 ["John Cabot, Rome (1 Mar, optional)","2027-03-01","Italy"],
 ["Koç, Sabancı, Bilkent (to early Jul)","2027-07-02","Türkiye"],
 ["METU, Boğaziçi, ITU (Jun – 12 Jul)","2027-07-12","Türkiye"],
 ["Aalto, Finland (21 Jan)","2027-01-21","Finland"],
 ["MBZUAI, UAE","2027-01-15","UAE"]
];

/* ===================== TASKS ===================== */
const CORE = [
["a:passport","Renew your passport","A biometric passport for travel abroad takes about 10 working days. Renew it before you book the IELTS, because the test centre checks the same ID you registered with. Your current one expires 21 Sep 2027.","2026-10-31","2027-03-01","admin",1,"Passport"],
["a:shortlist","Settle your shortlist: 8–12 programmes in Tier 1, 3–5 in Tier 2","Save them in Universities. Each saved programme adds its own task here.","2026-10-31","2026-11-30","direct",1,"Applications"],
["a:ieltsbook","Book the computer-delivered IELTS","Use your new passport. Results arrive in 1–5 days.","2026-11-10","2026-12-20","test",1,"IELTS"],
["a:ielts","Sit the IELTS (target: Writing 6.5)","Sit the full test, not only Writing: NYU, Boston University, the UC campuses, USC and UMass Amherst do not accept the One Skill Retake, and Michigan wants 6.5 in every section. Your current 7.5 stays valid until 2 Sep 2027 meanwhile.","2026-11-28","2027-01-16","test",1,"IELTS"],
["a:docs","Translate and apostille your documents","Attestat, supplement and grade 9–11 transcripts. It takes you 2–3 days, so do it two weeks before your first application.","2026-11-10","2026-12-15","admin",2,"Documents & essays"],
["a:recs","Ask two teachers for recommendation letters","Maths or physics plus English. Give them 3–4 weeks.","2026-11-15","2026-12-20","direct",2,"Documents & essays"],
["a:essay","Write your main personal essay","One strong essay you adapt for the US, Qatar, Hong Kong and Europe.","2026-11-30","2026-12-31","direct",2,"Documents & essays"],
["a:gap","Write a short account of 2022–2026","Month by month, with proof. Essays, interviews and visa officers will ask about it.","2026-12-15","2027-01-31","admin",3,"Documents & essays"],
["a:offers","Compare offers and accept one","Weigh visa odds, recognition in Uzbekistan and total years to a degree. US deposits are due 1 May.","2027-04-15","2027-05-01","direct",2,"Offer, visa & departure"],
["a:visa","Apply for your student visa","After you accept: F-1 interview (US), study permit (Canada), Études en France (France), Universitaly + visa (Italy), JW202 + X1 (China), university-sponsored residence (Qatar, Hong Kong). Use the new passport.","2027-05-15","2027-07-15","admin",1,"Offer, visa & departure"],
["a:military","File your study-abroad deferment with the military commissariat","It needs a notarised copy of your enrolment letter, so do it after you accept an offer.","2027-06-01","2027-08-15","admin",3,"Offer, visa & departure"]
];
const STEPS = {
"USA":[
 ["us:english","Choose your English plan for US universities","Full IELTS retake (aim Writing 6.5+) for Michigan, UIUC, Purdue, BU, NYU, UC and USC; Duolingo 125+ is the fallback almost everywhere except Michigan. See Universities › Countries › United States.","2026-10-20","2026-11-10","test",0,null],
 ["us:uc","Submit the University of California application","One form for every UC campus; no SAT. Window 1–30 Nov 2026.","2026-11-20","2026-11-30","direct",0,["us8","us8b","us8c","us8d"]],
 ["us:submit","Submit your US applications","Most regular-decision deadlines are 1–15 Jan 2027. Submit before the holidays.","2026-12-18","2027-01-15","direct",1,null],
 ["us:scores","Send SAT and IELTS scores to US universities","Order them from College Board and IELTS once results are out. Caltech wants scores before 31 Dec.","2026-12-20","2027-01-31","test",0,null]],
"Canada":[
 ["ca:apply","Apply to Toronto, UBC and McGill","All three close on 15 Jan 2027 (OUAC for Toronto).","2026-12-15","2027-01-15","direct",1,null],
 ["ca:docs","Upload transcripts and IELTS to each Canadian portal","Each portal lists its document deadline after you apply.","2027-01-31","2027-03-01","admin",0,null]],
"Spain":[
 ["es:hom","File homologation of your Attestat (Spanish Ministry of Education)","Apostille + sworn translation. Processing takes 9–12 months, but the filing receipt (volante) lets you enrol or sit the PCE meanwhile.","2026-12-15","2027-03-31","admin",0,null],
 ["es:apply","Apply to Spanish universities","IE rounds 15 Jan and 5 Mar 2027; other private universities through spring.","2027-01-15","2027-03-05","direct",1,null],
 ["es:pce","Register for the UNEDasiss PCE exams","For public universities. Registration about 16 Mar–28 Apr 2027 (≈); exams abroad in June.","2027-04-01","2027-04-28","test",0,["es3","es3b","es3c","es4"]],
 ["es:pre","Pre-enrol at Spanish public universities","Usually late June to early July, by region.","2027-06-25","2027-07-10","direct",0,["es3","es3b","es3c","es4"]]],
"Hong Kong":[
 ["hk:apply","Apply to Hong Kong universities","Early rounds: CityU 15 Nov, HKBU ~16 Nov, PolyU 17 Nov, HKUST ~20 Nov, HKU 25 Nov (12:00 HKT, evaluated first). Main rounds: CUHK and HKUST ~8 Jan, CityU 15 Jan, HKBU ~1 Feb, PolyU ~Feb.","2026-11-15","2027-02-11","direct",1,null],
 ["hk:sat","Send your SAT to CUHK, HKUST, PolyU and CityU","It stands in for national-exam results because you have no DTM.","2026-12-20","2027-01-07","test",0,["hk3","hk5","hk6","hk7"]]],
"China":[
 ["cn:apply","Apply in China","Duke Kunshan 4 Jan and NYU Shanghai 5 Jan (Common App); CUHK-Shenzhen to 18 Apr; C9 English programmes ~Jan–Apr.","2027-01-04","2027-04-18","direct",1,null],
 ["cn:csca","Sit the CSCA test (maths + physics or chemistry, in English)","Sessions 14–15 Nov and 19–20 Dec 2026, 23–24 Jan 2027; spring 2027 sessions not yet announced. Sitting by January keeps every scholarship deadline open. Register on csca.cn and check where you can sit it.","2026-12-19","2027-01-23","test",0,["cn2","cn2b","cn2c","cn2d","cn5"]],
 ["cn:csc","Apply for the Chinese Government Scholarship","Through the Chinese Embassy in Tashkent or a university; needs the CSCA.","2027-02-15","2027-03-31","direct",0,["cn5"]]],
"Türkiye":[
 ["tr:apply","Apply in Türkiye","Private universities (Koç, Sabancı, Bilkent) from Jan–Feb; METU, Boğaziçi and ITU in June–July with your SAT.","2027-03-14","2027-07-12","direct",1,null]],
"France":[
 ["fr:apply","Apply to French BBAs","ESSEC Global BBA rounds ~13 Jan, ~11 Mar, ~22 Apr 2027; EDHEC runs four sessions Oct–Mar; ESCP and emlyon run rounds into spring.","2027-01-13","2027-04-22","direct",1,null]],
"Italy":[
 ["it:pick","Decide your Italy route: John Cabot/AUR now, or a foundation for 2028","John Cabot closes 1 Mar 2027. Foundations start Oct 2027 and need Italian B1 for the visa.","2026-12-15","2027-01-31","direct",0,null],
 ["it:fnd","Apply to an Italian foundation year","Pavia (later windows on its calendar), Cattolica, Ca' Foscari, UNINT, Pisa. Check each calendar.","2027-01-31",null,"fnd",1,null],
 ["it:b1","Get an Italian B1 certificate (CILS, CELI or PLIDA)","Required for a foundation-course visa; Pavia accepts it until 30 Jun 2027.","2027-05-31","2027-06-30","test",0,["f16","f39","f17","f40","f41","f18","it1","it2","it2b","it2c","it2d","it2e","it2f","it2g","it4","it5"]],
 ["it:uni","Universitaly pre-enrolment","Needed for Italian foundations and degrees (last year it closed 15 Jul).","2027-06-15","2027-07-15","admin",0,["f16","f39","f17","f40","f41","f18","it1","it2","it2b","it2c","it2d","it2e","it2f","it2g","it4","it5"]]],
"Qatar":[
 ["qa:apply","Apply to Education City (CMU-Q, Georgetown-Q, Northwestern-Q)","Regular decision 15 Jan 2027. Reuse your Common App essay.","2027-01-08","2027-01-15","direct",1,null]],
"Saudi Arabia":[
 ["sa:auth","Authenticate your Attestat for Saudi Arabia","Study in Saudi asks for the certificate authenticated by the Saudi embassy in Tashkent. Ask whether the apostille is enough.","2027-03-15","2027-04-15","admin",0,null],
 ["sa:apply","Apply on Study in Saudi on the first days of the bachelor window","Last year it opened around late April–1 May for about three weeks. Your certificate must be under 5 years old, which holds only until June 2027.","2027-04-25","2027-05-21","direct",1,null]]
};
const EV = [
["2026-10-15","Pavia Foundation 2027/28: window 1 closes (later windows follow)","key","Italy"],
["2026-10-22","KAIST early track closes (18:00 KST)","key","South Korea"],
["2026-10-23","SAT registration closes for 7 Nov","key",""],
["2026-10-23","Chonnam National spring round closes","key","South Korea"],
["2026-10-30","HUFS spring round closes","key","South Korea"],
["2026-11-01","Early rounds: US EA/ED, Qatar Education City, NYU Shanghai ED","key","USA"],
["2026-11-07","SAT sitting","key",""],
["2026-11-12","CUHK advance round · FH Aachen Freshman exam registration","key","Hong Kong"],
["2026-11-16","HKBU early round","key","Hong Kong"],
["2026-11-20","SAT registration closes for 5 Dec · Tsinghua round 1 closes","key",""],
["2026-11-25","HKUST priority round","key","Hong Kong"],
["2026-11-26","HKU first round (noon)","key","Hong Kong"],
["2026-11-20","Sogang spring round closes","key","South Korea"],
["2026-11-30","University of California closes","key","USA"],
["2026-11-30","GKS-U university track: last university deadlines (≈)","key","South Korea"],
["2026-12-01","Columbia GS application opens · UT Austin closes","key","USA"],
["2026-12-05","SAT sitting","key",""],
["2026-12-15","France DAP closes (French-taught public universities)","key","France"],
["2026-12-18","December SAT scores out (≈)","key",""],
["2026-12-31","Caltech: SAT scores due for regular decision","key","USA"],
["2027-01-04","Duke Kunshan regular decision","key","China"],
["2027-01-14","KAIST regular track closes","key","South Korea"],
["2027-01-29","GIST fall round closes","key","South Korea"],
["2027-01-31","Reykjavík University non-EU deadline","key","Iceland"],
["2027-02-01","University of Iceland non-EEA deadline","key","Iceland"],
["2027-01-05","NYU Shanghai, NYU, Stanford, Brown regular decision","key",""],
["2027-01-07","CUHK regular round · EDHEC round 2","key","Hong Kong"],
["2027-01-12","ESSEC Global BBA round 2","key","France"],
["2027-01-15","Toronto · UBC · McGill · CMU-Q · Georgetown-Q · IE round 2 · CityU · Columbia GS priority · Sweden","key",""],
["2027-01-21","Finland joint application closes","key","Finland"],
["2027-01-23","CSCA session (23–24 Jan)","key","China"],
["2027-02-01","HKBU regular round · Michigan","key","Hong Kong"],
["2027-02-11","PolyU main round","key","Hong Kong"],
["2027-02-19","SAT registration closes for 6 Mar","key",""],
["2027-02-28","Tsinghua and Peking University close","key","China"],
["2027-03-01","Columbia GS early action · John Cabot · Alberta","key",""],
["2027-03-05","IE University round 3","key","Spain"],
["2027-03-06","SAT sitting","key",""],
["2027-03-10","ESSEC round 3","key","France"],
["2027-03-13","CSCA session (13–14 Mar)","key","China"],
["2027-03-14","Sabancı early deadline","key","Türkiye"],
["2027-03-15","TR-YÖS registration closes (1–15 Mar)","key","Türkiye"],
["2027-04-18","CUHK-Shenzhen final round","key","China"],
["2027-04-22","ESSEC round 4","key","France"],
["2027-04-24","CSCA session (24–25 Apr)","key","China"],
["2027-04-28","UNEDasiss PCE registration closes (≈)","key","Spain"],
["2027-05-01","US decision and deposit deadline · SAT sitting","key","USA"],
["2027-05-14","PolyU extended round","key","Hong Kong"],
["2027-05-21","Study in Saudi bachelor window closed last year (≈)","key","Saudi Arabia"],
["2027-06-05","SAT sitting","key",""],
["2027-06-08","EDHEC final round","key","France"],
["2027-06-10","PCE exams at international centres (10–13 Jun, ≈)","key","Spain"],
["2027-06-17","Your Attestat turns 5 years old (Saudi limit)","risk","Saudi Arabia"],
["2027-06-30","Italian B1 certificate due for the Pavia visa · HKUST closes","key","Italy"],
["2027-07-02","Koç closes (≈)","key","Türkiye"],
["2027-07-12","METU and Bilkent close (≈)","key","Türkiye"],
["2027-08-21","HKU final deadline","key","Hong Kong"],
["2027-09-02","Your current IELTS expires","risk",""],
["2027-09-21","Your current passport expires","risk",""]
];
const TL = [
["US · Canada · Hong Kong · Qatar","Aug–Sep 2027 → May 2031",null,null,2027.65,2031.4],
["Türkiye with English prep year","Sep 2027 → Jun 2032 (no prep with Writing 6.5)",2027.7,2028.45,2028.7,2032.45],
["Italy: foundation → 3-year degree","Oct 2027 → Jul 2031",2027.75,2028.48,2028.72,2031.55],
["China: Chinese prep year (CSC) → degree","Sep 2027 → Jun 2032",2027.67,2028.45,2028.67,2032.45],
["Australia: UQ College Sep 2027 → UQ","Sep 2027 → Nov 2030",2027.68,2028.05,2028.15,2030.9],
["Spain, France BBA (4 years)","Sep 2027 → Jun 2031",null,null,2027.7,2031.45]
];
const DEFAULT_SAVED = ["us1","us6","us12","ca1","ca2","es1","hk1","hk2","hk3","cn3","cn6","tr1","tr3","fr1","it3","qa1","qa2"];

/* ===================== MODEL ===================== */
const U = U_RAW.map(r => ({kind:"deg", id:r[0], country:r[1], name:r[2], city:r[3], type:r[4], band:r[5], fields:r[6].split(" "), courses:r[7], req:r[8], rule:r[9], win:r[10], sug:r[11], fin:r[12], spring:!!r[13], fit:r[14], web:r[15], also:r[16], ver:VER[r[0]] || null}));
const F = F_RAW.map(f => ({kind:"fnd", id:f[0], name:f[1], city:f[2], country:f[3], feeds:f[4], guar:f[5], accepts:f[6], english:f[7], intakes:f[8], apply:f[9], sug:f[10], fin:f[11], length:f[12], spring:!!f[13], home:!!f[14], fit:f[15], note:f[16], rk:f[17], req:f[18], fields:f[19].split(" "), web:f[20], type:"Foundation", band:"?"}));
const ITEMS = [...U, ...F];
const byId = {}; ITEMS.forEach(x => byId[x.id] = x);

/* ===================== HELPERS ===================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const TODAY = (() => { const d = new Date(); d.setHours(0,0,0,0); return d; })();
const toDate = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y, m-1, d); };
const isoOf = d => d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0");
const TODAY_ISO = isoOf(TODAY);
const addDays = (s, n) => { const d = toDate(s); d.setDate(d.getDate() + n); return isoOf(d); };
const daysTo = s => Math.round((toDate(s) - TODAY) / 864e5);
const fmt = (s, wd) => { const d = toDate(s); return d.toLocaleDateString("en-GB", {weekday: wd ? "short" : undefined, day:"numeric", month:"short", year: d.getFullYear() !== TODAY.getFullYear() ? "numeric" : undefined}); };
const fmtShort = s => toDate(s).toLocaleDateString("en-GB", {day:"numeric", month:"short"});
const STATUS = {ok:["Open now","s-ok","st-ok"], reach:["Needs a score or document","s-reach","st-reach"], bridge:["Bridge year first","s-bridge","st-bridge"], closed:["Closed","s-closed","st-closed"]};
const SORDER = {ok:0, reach:1, bridge:2, closed:3};
const DOT = {ok:"var(--ok)", reach:"var(--reach)", bridge:"var(--bridge)", closed:"var(--closed)"};
const chip = s => `<span class="chip ${STATUS[s][1]}">${STATUS[s][0]}</span>`;
const fitHtml = n => `<span class="fit" title="Fit for your profile: ${n} of 5" aria-label="Fit ${n} of 5">${[1,2,3,4,5].map(i => `<i class="${i <= Math.round(n) ? "on" : ""}"></i>`).join("")}</span>`;
const STAR = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8-4.2-4.1 5.9-.9z"/></svg>`;
const CMPI = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="7" height="14" rx="1.5"/><rect x="14" y="5" width="7" height="14" rx="1.5"/></svg>`;
const BAND = {"20":"QS top 20","50":"QS top 50","100":"QS top 100","200":"QS top 200","500":"QS top 500","1000":"QS top 1000","u":"Not in global rankings","?":""};
const bandNum = b => /^\d+$/.test(b) ? +b : b === "?" ? 5000 : 9000;
const rkOf = x => x.kind === "fnd" ? x.rk : /^\d+$/.test(x.band) ? "y" : x.band === "u" ? "n" : "?";
const RKTAG = {y:'<span class="tag g" title="Global top 1,000: recognised in Uzbekistan without nostrification">Recognised in UZ</span>', n:'<span class="tag y" title="Outside global rankings: nostrification needed in Uzbekistan">Nostrification</span>', "?":""};
const GUAR = {g:"Guaranteed progression", n:"Recognised nationally", o:"Own or case by case"};
const CAT = {admin:"Paperwork", test:"Test", direct:"Application", fnd:"Foundation"};
const fieldNames = fs => fs.map(k => FIELDS[k] ? FIELDS[k].s : "").filter(Boolean).join(" · ");
const webLink = w => w ? `<a class="btn ghost sm" href="https://${esc(w)}" target="_blank" rel="noopener">Official website ↗</a>` : "";
const domId = s => String(s).replace(/[^A-Za-z0-9]+/g, "-");

/* Glossary term links */
const TERM_MAP = {}; GLOSS.forEach(([k,,al]) => al.forEach(a => TERM_MAP[a] = k));
const TERM_RE = new RegExp("(^|[^A-Za-z0-9À-ÿ-])(" + Object.keys(TERM_MAP).sort((a,b) => b.length - a.length).map(escRe).join("|") + ")(?![A-Za-z0-9À-ÿ-])", "g");
const T = s => esc(s).replace(TERM_RE, (m, pre, w) => pre + `<button type="button" class="term" data-term="${esc(TERM_MAP[w])}">${w}</button>`);

/* ===================== STATE & PERSISTENCE ===================== */
const DEF_SIT = {hist:"s1", w:"5.5", sat:"0", fnd:"no"};
function freshState(){ return {v:3, done:{}, skip:{}, custom:[], saved:DEFAULT_SAVED.slice(), sit:Object.assign({}, DEF_SIT), tiers:{}, satPick:"dec", seenIntro:false, apps:{}}; }
function normalise(s){
  const f = freshState(); s = s && typeof s === "object" ? s : {};
  return {v:3, done:s.done && typeof s.done === "object" ? s.done : {}, skip:s.skip && typeof s.skip === "object" ? s.skip : {},
    custom:Array.isArray(s.custom) ? s.custom.filter(c => c && c.id && c.title) : [], saved:Array.isArray(s.saved) ? s.saved.filter(id => byId[id]) : f.saved,
    sit:Object.assign({}, DEF_SIT, s.sit || {}), tiers:s.tiers && typeof s.tiers === "object" ? s.tiers : {}, satPick: typeof s.satPick === "string" ? s.satPick : "dec", seenIntro: !!s.seenIntro, apps:s.apps && typeof s.apps === "object" ? s.apps : {}};
}
const LKEY = "atlas.v4";
function loadLocal(){
  try { const raw = localStorage.getItem(LKEY); if (raw) return normalise(JSON.parse(raw)); } catch(e) {}
  return freshState();
}
let state = loadLocal();
let cloud = null, writing = Promise.resolve(), saveTimer = null, lastWritten = "";
function setSync(on){ const el = $("#sync"); el.classList.toggle("cloud", on); el.lastElementChild.textContent = on ? "Synced to your account" : "Saved in this browser"; }
function persist(){
  const json = JSON.stringify(state);
  try { localStorage.setItem(LKEY, json); } catch(e) {}
  if (!cloud) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    if (json === lastWritten) return;
    writing = writing.then(() => cloud.set(JSON.parse(json)).then(() => { lastWritten = json; }).catch(err => { if (err && ["invalid_argument","revoked","not_granted"].includes(err.code)) { cloud = null; setSync(false); } }));
  }, 700);
}
(async () => {
  try {
    if (!window.claude || typeof window.claude.use !== "function") return;
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (!db || !user) return;
    const uid = await user.id();
    if (!uid) return;
    const ref = db.doc("data/users/" + uid + "/atlas");
    cloud = ref; setSync(true);
    let first = true;
    ref.onSnapshot(snap => {
      if (snap.metadata && snap.metadata.hasPendingWrites) return;
      if (snap.exists) {
        const incoming = normalise(snap.data()), j = JSON.stringify(incoming);
        if (j !== JSON.stringify(state)) { state = incoming; lastWritten = j; try { localStorage.setItem(LKEY, j); } catch(e) {} syncSit(); renderAll(); }
      } else if (first) { persist(); }
      first = false;
    }, () => { cloud = null; setSync(false); });
  } catch(e) { cloud = null; }
})();
let dlApi = null;
(async () => {
  try {
    if (!window.claude || typeof window.claude.use !== "function") return;
    dlApi = await window.claude.use("downloads");
    if (dlApi) $$("[data-dl]").forEach(b => b.hidden = false);
  } catch(e) { dlApi = null; }
})();

/* ===================== TIERS & ELIGIBILITY ===================== */
const tierOf = c => state.tiers[c] || DEFAULT_TIER[c] || 3;
const tierClass = t => "tc" + t;
function parseReq(s){
  const r = {ask:[], lang:[]};
  (s || "").split(";").filter(Boolean).forEach(p => {
    if (["D","br","yr1","ap","csca","hom"].includes(p)) r[p] = true;
    else if (p.startsWith("lang:")) r.lang.push(p.slice(5));
    else if (p.startsWith("ask:")) r.ask.push(p.slice(4));
    else if (p.startsWith("sat")) r.sat = +p.slice(3);
    else if (p.startsWith("w")) r.w = +p.slice(1);
  });
  return r;
}
function evaluateReq(req){
  const r = parseReq(req), miss = [];
  if (r.D) return {s:"closed", miss:[]};
  const st = state.sit, w = +st.w, sat = +st.sat, s2 = st.hist === "s2", fnd = st.fnd === "yes";
  if (r.yr1 && !s2) miss.push(["b","1 year of university (a foundation won't count)"]);
  if (r.br && !s2 && !fnd) miss.push(["b","A foundation year or 1 year of university"]);
  if (r.ap) miss.push(["b","3 AP exams at 4–5 (May 2027, so 2028 entry)"]);
  if (r.w && w < r.w) miss.push(["s",`IELTS Writing ${r.w.toFixed(1)}+ (you: ${w.toFixed(1)})`]);
  if (r.sat && sat < r.sat) miss.push(["s",`SAT ${r.sat}+${sat ? " (you: ~" + sat + ")" : " (not taken yet)"}`]);
  if (r.csca && !state.done["cn:csca"]) miss.push(["s","CSCA test (maths + physics or chemistry, in English)"]);
  if (r.hom && !state.done["es:hom"]) miss.push(["s","Homologation filed (the receipt is enough to continue)"]);
  r.lang.forEach(l => miss.push(["s", l]));
  r.ask.forEach(a => miss.push(["s", a]));
  return {s: miss.some(m => m[0] === "b") ? "bridge" : miss.length ? "reach" : "ok", miss: miss.map(m => m[1])};
}
const evalItem = x => evaluateReq(x.req);

/* Chance bands (selectivity), see SEL in data_x.js */
const CH = {
  x:["Long shot","ch-x","under ~10% admitted","Even perfect applicants are usually refused. Keep these to about a third of your list at most."],
  h:["Reach","ch-h","~10–25% admitted","Strong applicants are often refused. Your grades get you read; essays, letters and scores decide."],
  m:["Target","ch-m","~25–55% admitted","Your grades put you in the competitive range. A complete, well-written application gives a fair chance."],
  o:["Likely","ch-o","over ~55% admitted, or admission on criteria you already meet","Apply on time with complete documents and an offer is likely."]
};
const CH_KEYS = ["x","h","m","o"];
const CHORDER = {o:0, m:1, h:2, x:3};
const CHLVL = {o:4, m:3, h:2, x:1};
const meter = c => `<i class="mt" aria-hidden="true">${[1,2,3,4].map(i => `<b class="${i <= CHLVL[c] ? "on" : ""}"></b>`).join("")}</i>`;
const selOf = x => x.kind === "fnd" ? "o" : SEL[x.id] || ({"20":"h","50":"h","100":"m","200":"m"}[x.band] || "o");
const isEst = x => x.kind === "deg" && !SEL[x.id];
const chanceOf = (x, e) => e.s === "closed" ? null : selOf(x);
function chTag(x, e){
  const c = chanceOf(x, e); if (!c) return "";
  const [l, cls, t] = CH[c];
  const when = e.s === "reach" ? " Once you have what is still missing." : e.s === "bridge" ? " After the bridge year." : "";
  return `<span class="tag chtag ${cls}" title="${esc(`Chance: ${l} (${t}).${when}${isEst(x) ? " Estimated from ranking." : ""}`)}">${meter(c)}${l}</span>`;
}

/* ===================== TASKS ===================== */
const satPick = () => SAT_DATES.find(d => d.id === state.satPick) || null;
function coreTasks(){
  const out = CORE.map(([id,title,detail,suggest,final,cat,pri,row]) => ({id,title,detail,suggest,final,cat,pri,row,country:"",src:"core"}));
  const p = satPick();
  if (p) out.splice(4, 0,
    {id:"a:satreg:" + p.id, title:`Register for the ${fmt(p.test)} SAT`, detail:`Regular deadline ${fmt(p.reg)}; late registration until ${fmt(p.late)} for an extra fee.`, suggest:addDays(p.reg, -10), final:p.reg, cat:"test", pri:1, row:"SAT", country:"", src:"core"},
    {id:"a:sat:" + p.id, title:`Sit the SAT on ${fmt(p.test)}`, detail:`Scores arrive about 13 days later (≈${fmt(p.scores)}). Send them to every school that uses them.`, suggest:p.test, final:p.test, cat:"test", pri:1, row:"SAT", country:"", src:"core"});
  return out;
}
function stepTasks(){
  const out = [];
  ORDER.filter(c => tierOf(c) === 1).forEach(c => {
    const savedHere = state.saved.filter(id => byId[id] && byId[id].country === c);
    const steps = STEPS[c];
    if (steps) {
      steps.forEach(([id,title,detail,suggest,final,cat,applyType,cond]) => {
        if (applyType && savedHere.length) return;
        if (cond && !cond.some(x => state.saved.includes(x))) return;
        out.push({id,title,detail,suggest,final,cat,pri:2,row:c,country:c,src:"step"});
      });
    } else if (!savedHere.length) {
      const open = U.filter(x => x.country === c && evalItem(x).s !== "closed");
      const sugs = open.map(x => x.sug).filter(Boolean).sort(), fins = open.map(x => x.fin).filter(Boolean).sort();
      if (open.length) out.push({id:"g:" + c, title:`Pick programmes in ${DISPLAY(c)} and apply`, detail:"Save the ones you want in Universities; each then gets its own task.", suggest:sugs[0] || null, final:fins[fins.length-1] || null, cat:"direct", pri:2, row:c, country:c, src:"step"});
    }
  });
  return out;
}
function programmeTasks(){
  return state.saved.filter(id => byId[id]).map(id => {
    const x = byId[id], e = evalItem(x);
    const detail = (x.kind === "deg" ? x.win : x.apply) + (e.miss.length ? " · Still needed: " + e.miss.join("; ") : "");
    return {id:"p:" + id, title:"Apply: " + x.name, detail, suggest:x.sug, final:x.fin, cat:x.kind === "deg" ? "direct" : "fnd", pri:2, row:x.country === "Uzbekistan" ? "From Tashkent" : x.country, country:x.country === "Uzbekistan" ? "" : x.country, src:"prog", ref:id};
  });
}
function customTasks(){ return state.custom.map(c => ({id:c.id, title:c.title, detail:"Your own task", suggest:c.suggest || null, final:c.final || null, cat:"admin", pri:2, row:"Your own tasks", country:"", src:"custom"})); }
function allTasks(){ return [...coreTasks(), ...stepTasks(), ...programmeTasks(), ...customTasks()]; }
const isClosed = t => !!(state.done[t.id] || state.skip[t.id]);
const sortKey = t => t.suggest || t.final || "9999-12-31";
const sortTasks = (a,b) => sortKey(a).localeCompare(sortKey(b)) || (a.final || "9999").localeCompare(b.final || "9999") || a.pri - b.pri;
function timing(t){
  const s = t.suggest ? daysTo(t.suggest) : null, f = t.final ? daysTo(t.final) : null;
  if (f !== null && f < 0) return {cls:"late", text:"Final deadline passed"};
  if (f !== null && f <= 7) return {cls:"late", text: f === 0 ? "Final deadline is today" : `Final deadline in ${f} day${f === 1 ? "" : "s"}`};
  if (s !== null && s < 0) return {cls:"soon", text:"Past the suggested date, still in time"};
  if (s !== null && s <= 14) return {cls:"now", text: s === 0 ? "Suggested for today" : `Suggested in ${s} day${s === 1 ? "" : "s"}`};
  if (f !== null) return {cls:"calm", text:`${f} days until the final deadline`};
  return {cls:"calm", text: s !== null ? `Suggested in ${s} days` : "No fixed date"};
}
const whenHtml = t => `<dl class="when"><dt>Suggested</dt><dd class="sg">${t.suggest ? fmt(t.suggest, true) : "Any time"}</dd><dt>Final</dt><dd>${t.final ? fmt(t.final, true) : "Check the calendar"}</dd></dl>`;

/* ===================== NAV ===================== */
const tabs = $$("nav.switch .tabbtn");
function show(id){ tabs.forEach(b => b.setAttribute("aria-selected", b.dataset.tab === id)); $$("[data-panel]").forEach(p => p.hidden = p.dataset.panel !== id); try { localStorage.setItem("atlas.tab", id); } catch(e) {} }
function goTop(){ if (window.scrollY > 4) window.scrollTo({top:0}); }
function go(id){ show(id); goTop(); }
tabs.forEach(b => b.addEventListener("click", () => go(b.dataset.tab)));
document.addEventListener("click", e => { const g = e.target.closest("[data-go]"); if (!g) return; e.preventDefault(); go(g.dataset.go); });
const TAB_ALIAS = {road:"plan", todo:"plan"};
show((() => { const ok = ["home","unis","list","plan"], h = (location.hash || "").slice(1); if (ok.includes(TAB_ALIAS[h] || h)) return TAB_ALIAS[h] || h; try { const t = localStorage.getItem("atlas.tab"); return ok.includes(TAB_ALIAS[t] || t) ? (TAB_ALIAS[t] || t) : "home"; } catch(e) { return "home"; } })());
const smooth = () => matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

/* ===================== SITUATION ===================== */
const SIT = {w:"#sW", sat:"#sSat", hist:"#sHist", fnd:"#sFnd"};
function syncSit(){ Object.entries(SIT).forEach(([k,sel]) => { $(sel).value = state.sit[k]; }); }
function sitSummary(){ const s = state.sit; $("#sitSummary").textContent = ["Writing " + (+s.w).toFixed(1), +s.sat ? "SAT ~" + s.sat : "No SAT yet", s.hist === "s2" ? "1 year of university" : "No university year", s.fnd === "yes" ? "Foundation done" : ""].filter(Boolean).join(" · "); }
Object.entries(SIT).forEach(([k,sel]) => $(sel).addEventListener("change", e => { state.sit[k] = e.target.value; persist(); renderAll(); }));
$("#sReset").addEventListener("click", () => { state.sit = Object.assign({}, DEF_SIT); syncSit(); persist(); renderAll(); });

/* ===================== UNIVERSITIES ===================== */
const ui = {lane:(() => { try { return localStorage.getItem("atlas.lane") || "1"; } catch(e) { return "1"; } })(), sub:"prog", kind:"both", q:"", field:"", sort:"status", hideClosed:true, free:false, saved:false, rank:false, spring:false, cmp:[], cmode:"cards", gq:"", chance:"", aid:"", sc:"USA", seg:{}, more:{}};
const PAGE = 25;
const laneCountries = () => ORDER.filter(c => ui.lane === "all" || String(tierOf(c)) === ui.lane);
const isSaved = id => state.saved.includes(id);
const saveBtn = id => `<button type="button" class="savebtn" data-save="${id}" aria-pressed="${isSaved(id)}">${STAR}<span>${isSaved(id) ? "Saved" : "Save"}</span></button>`;
const cmpBtn = id => `<button type="button" class="cmpbtn" data-cmp="${id}" aria-pressed="${ui.cmp.includes(id)}" title="Add to comparison">${CMPI}<span>${ui.cmp.includes(id) ? "Comparing" : "Compare"}</span></button>`;
function dvTag(x){ const v = x.ver && VER_ST[x.ver.st]; return v ? `<span class="dv ${v[2]}" title="${esc(v[1])}">${v[0]}</span>` : ""; }
function dvLine(x){
  const v = x.ver && VER_ST[x.ver.st];
  if (!v) return /typical|confirm/i.test(x.win || "") ? `<div class="dvl faint">Not yet checked one by one: this is the usual pattern for this kind of university.</div>` : "";
  const src = x.ver.src ? ` · <a href="${esc(x.ver.src[1])}" target="_blank" rel="noopener">${esc(x.ver.src[0])}</a>` : "";
  return `<div class="dvl"><span class="dv ${v[2]}">${v[0]}</span> ${esc(v[1])} (checked 8 Oct 2026)${src}</div>`;
}
function feeLine(x){ const f = feeOf(x); return f.usd === 0 ? `<span class="fee z">Free to apply</span>` : `<span class="fee${f.w ? " w" : ""}">Fee ${esc(f.f.replace(/ \(.*\)$/, ""))}${f.w ? " · can be $0" : ""}</span>`; }
function datesCell(x, closed){
  if (closed) return `<div class="dates"><span>—</span></div>`;
  return `<div class="dates">${x.sug ? `<span class="sg">Suggested <b style="color:inherit">${fmtShort(x.sug)}</b></span>` : `<span>Suggested: any time</span>`}<span>Final <b>${x.fin ? fmt(x.fin) : "check"}</b></span>${feeLine(x)}</div>`;
}
function searchText(x){
  if (x._st) return x._st;
  const st = x.country === "USA" ? (x.city.match(/\b[A-Z]{2}\b/g) || []).map(a => US_STATES[a] || "").join(" ") : "";
  const sg = SEGS[x.country] && SEG[x.id] ? ((SEGS[x.country].find(s => s[0] === SEG[x.id]) || [])[1] || "") : "";
  const ad = x.country === "USA" && x.kind === "deg" ? AID_T[aidOf(x).t][0] : "";
  return x._st = [x.name, x.city, st, sg, feeOf(x).p, x.courses, x.type, x.also, x.feeds, x.country, DISPLAY(x.country), fieldNames(x.fields), ad].join(" ").toLowerCase();
}
function passFilters(x, e){
  const q = ui.q;
  if (q && !searchText(x).includes(q)) return false;
  if (ui.field && !x.fields.includes(ui.field)) return false;
  if (ui.hideClosed && e.s === "closed") return false;
  if (ui.saved && !isSaved(x.id)) return false;
  if (ui.rank && rkOf(x) !== "y") return false;
  if (ui.spring && !x.spring) return false;
  if (ui.free && !feeOf(x).zero) return false;
  if (ui.chance && chanceOf(x, e) !== ui.chance) return false;
  if (ui.aid) { if (x.country !== "USA" || x.kind !== "deg") return false; const t = aidOf(x).t; if (!AID_GROUPS[ui.aid].includes(t)) return false; }
  return true;
}
const AID_GROUPS = {full:["nb","fn","fr"], any:["nb","fn","fr","nm","nl","mr"], merit:["mr","nm"], need:["nb","fn","nm","nl"]};
const aidTag = x => { if (x.country !== "USA" || x.kind !== "deg") return ""; const t = aidOf(x).t; return ["nb","fn","fr"].includes(t) ? `<span class="tag g" title="${esc(AID_T[t][1])}">${t === "nb" ? "Need-blind aid" : t === "fr" ? "Free tuition" : "Full-need aid"}</span>` : ["nm","mr","nl"].includes(t) ? `<span class="tag" title="${esc(AID_T[t][1])}">${t === "mr" ? "Merit aid" : t === "nl" ? "Some need aid" : "Aid + merit"}</span>` : ""; };
function usBlocks(x){
  if (x.country !== "USA" || x.kind !== "deg") return "";
  const a = aidOf(x), t = AID_T[a.t], v = visaOf(x), val = VAL[x.name] || VAL_SEG[SEG[x.id]] || VAL_SEG.pri, ey = eyuOf(x);
  const conf = a.ex === "o" ? "Checked on the university's own page, Oct 2026" : a.ex === "s" ? "From a secondary source: confirm with the university" : a.ex === "p" ? "Typical for this kind of university, not checked for this one: confirm on its international aid page" : "Known policy, not re-checked this round: confirm";
  return `<dl class="full"><dt>Aid for international students</dt><dd><span class="aidl ${t[2]}">${esc(t[0])}</span> ${esc(t[1])}${a.n ? `<div class="aidn">${esc(a.n)}</div>` : ""}<div class="faint small">${conf}${a.src ? ` · <a href="${esc(a.src[1])}" target="_blank" rel="noopener">${esc(a.src[0])}</a>` : ""}</div></dd></dl>
    <dl><dt>What they look for</dt><dd>${esc(val)}</dd></dl>
    <dl><dt>Visa file</dt><dd><span class="tag ${v.c}">${v.l}</span> ${esc(v.why)}</dd></dl>${ey ? `<dl><dt>El-Yurt Umidi</dt><dd>${ey === "top100" ? "Likely in the QS/THE top 100: eligible, and a full-tuition offer here qualifies for the award without competition (check the exact rank)." : "Likely in the QS/THE top 300: eligible for the El-Yurt Umidi competition (check the exact rank)."}</dd></dl>` : ""}`;
}
const SORTS = {
  status:(a,b) => SORDER[a.e.s] - SORDER[b.e.s] || (a.x.kind === b.x.kind ? 0 : a.x.kind === "deg" ? -1 : 1) || b.x.fit - a.x.fit || bandNum(a.x.band) - bandNum(b.x.band),
  fit:(a,b) => b.x.fit - a.x.fit || SORDER[a.e.s] - SORDER[b.e.s],
  chance:(a,b) => (a.e.s === "closed") - (b.e.s === "closed") || CHORDER[selOf(a.x)] - CHORDER[selOf(b.x)] || SORDER[a.e.s] - SORDER[b.e.s] || b.x.fit - a.x.fit,
  rank:(a,b) => bandNum(a.x.band) - bandNum(b.x.band) || SORDER[a.e.s] - SORDER[b.e.s],
  final:(a,b) => (a.x.fin || "9999").localeCompare(b.x.fin || "9999"),
  az:(a,b) => a.x.name.localeCompare(b.x.name)
};
function bodyHtml(x, e){
  const closed = e.s === "closed";
  const need = closed ? `<dl><dt>Why it's closed</dt><dd>${T(x.rule || x.accepts)}</dd></dl>` : `<dl><dt>What you still need</dt><dd>${e.miss.length ? `<div class="miss">${e.miss.map(m => `<span>${T(m)}</span>`).join("")}</div>` : "Nothing. You can apply as you are."}</dd></dl>`;
  const c = chanceOf(x, e);
  const chDl = c ? `<dl><dt>Your chance</dt><dd>${meter(c)}<b class="chw">${CH[c][0]}</b> · ${esc(CH[c][2])}. ${esc(CH[c][3])}${isEst(x) ? ' <span class="faint">Estimated from ranking.</span>' : ""}<span class="fitline">${fitHtml(x.fit)} Fit for your profile: ${Math.round(x.fit)} of 5</span></dd></dl>` : "";
  const body = x.kind === "deg"
    ? `<dl><dt>Courses</dt><dd>${esc(x.courses)}</dd></dl><dl><dt>The rule for you</dt><dd>${T(x.rule)}</dd></dl>${need}${chDl}<dl><dt>Application window</dt><dd>${T(x.win)}${dvLine(x)}</dd></dl>${x.also ? `<dl class="full"><dt>The same rule covers</dt><dd class="small muted">${esc(x.also)}</dd></dl>` : ""}`
    : `<dl><dt>Accepts your Attestat?</dt><dd>${esc(x.accepts)}</dd></dl><dl><dt>English</dt><dd>${esc(x.english)}</dd></dl><dl><dt>Intakes · length</dt><dd>${esc(x.intakes)} · ${esc(x.length)}</dd></dl><dl><dt>How to apply</dt><dd>${T(x.apply)}</dd></dl>${need}${chDl}${x.note ? `<dl><dt>Note</dt><dd>${T(x.note)}</dd></dl>` : ""}`;
  const segName = SEGS[x.country] && SEG[x.id] ? (SEGS[x.country].find(s => s[0] === SEG[x.id]) || [])[1] : "";
  const fo = feeOf(x), feeDl = `<dl><dt>How to apply · fee</dt><dd>${esc(fo.p)}<br><b>${esc(fo.f)}</b>${fo.w ? `<div class="feew"><b>Pay $0:</b> ${esc(fo.w)}</div>` : ""}<div class="faint small">${fo.ex === "o" ? "Exact fee from the university or platform" : fo.ex === "s" ? "Exact fee from a secondary source: confirm before paying" : "Typical range for this country: this university's own fee is not checked yet"}${fo.src ? ` · <a href="${esc(fo.src[1])}" target="_blank" rel="noopener">${esc(fo.src[0])}</a>` : ""}</div></dd></dl>`;
  return `${body}${usBlocks(x)}${feeDl}${segName ? `<dl><dt>Section</dt><dd>${esc(segName)}</dd></dl>` : ""}<div class="acts">${webLink(x.web)}${cmpBtn(x.id)}</div>`;
}
function rowHtml({x, e}){
  const closed = e.s === "closed", band = BAND[x.band] || "";
  const rk = rkOf(x), rkTxt = rk === "y" ? ' · <span class="rk">recognised in Uzbekistan</span>' : rk === "n" ? ' · <span class="nk">needs nostrification</span>' : "";
  const sub = (x.kind === "deg" ? `${esc(x.city)} · ${esc(x.type)}${band ? " · " + band : ""}` : `${esc(x.city)} · leads to ${esc(x.feeds)}`) + (x.kind === "deg" ? rkTxt : "") + (x.spring && !closed ? ' · <span class="sp">spring 2027 start</span>' : "");
  const kindTag = x.kind === "deg" ? "" : '<span class="tag v">Foundation</span>';
  const extra = x.kind === "fnd" ? `<span class="tag ${x.guar === "g" ? "g" : x.guar === "n" ? "a" : ""}">${GUAR[x.guar]}</span>${x.home ? '<span class="tag g">No visa</span>' : ""}` : "";
  return `<details class="it ${STATUS[e.s][2]}" id="it-${x.id}"><summary><div><div class="nm">${esc(x.name)}</div><div class="sub">${sub}</div></div>${datesCell(x, closed)}<div class="meta">${chip(e.s)}${chTag(x, e)}${kindTag}${extra}${closed ? "" : aidTag(x)}</div><div class="meta act">${closed ? "" : saveBtn(x.id)}</div></summary>
    <div class="body" data-lazy="${x.id}"></div></details>`;
}
function fillBody(d){
  const b = d && d.querySelector(".body[data-lazy]"); if (!b || b.dataset.done) return;
  const x = byId[b.dataset.lazy]; if (!x) return;
  b.innerHTML = bodyHtml(x, evalItem(x)); b.dataset.done = "1";
}
document.addEventListener("toggle", ev => { const d = ev.target; if (d && d.classList && d.classList.contains("it") && d.open) fillBody(d); }, true);
function best(list){ return list.map(o => o.e.s).sort((a,b) => SORDER[a] - SORDER[b])[0] || "closed"; }
function renderLanes(){
  const n = {1:0,2:0,3:0}; ORDER.forEach(c => n[tierOf(c)]++);
  const lanes = [["1", TIER_NAME[1], `<span class="lgl">Tier 1 · </span>${n[1]} countries`, "var(--t1)"], ["2", TIER_NAME[2], `<span class="lgl">Tier 2 · </span>${n[2]} countries`, "var(--t2)"], ["3", TIER_NAME[3], `<span class="lgl">Tier 3 · </span>${n[3]} countries`, "var(--t3)"], ["all", "All", `${ORDER.length} countries`, "var(--line-2)"]];
  $("#lanes").innerHTML = lanes.map(([k,name,sub,c]) => `<button type="button" role="tab" class="lane" data-lane="${k}" aria-selected="${ui.lane === k}" style="--tc:${c}"><span class="ln">${name}</span><span class="ls">${sub}</span></button>`).join("");
}
function rowsFor(c){
  return ITEMS.filter(x => x.country === c && (ui.kind === "both" || (ui.kind === "deg" ? x.kind === "deg" : x.kind === "fnd"))).map(x => ({x, e:evalItem(x)}));
}
function renderFieldChips(){
  const cs = new Set(laneCountries());
  const cnt = k => ITEMS.filter(x => cs.has(x.country) && x.fields.includes(k) && evalItem(x).s !== "closed").length;
  $("#fchips").innerHTML = `<button type="button" class="fchip" data-field="" aria-pressed="${!ui.field}">All fields</button>` + Object.keys(FIELDS).map(k => `<button type="button" class="fchip" data-field="${k}" aria-pressed="${ui.field === k}">${FIELDS[k].s} <span class="faint">${cnt(k)}</span></button>`).join("");
}
function segChips(g){
  const segs = SEGS[g.c]; if (!segs || g.visAll.length < 8) return "";
  const btns = segs.map(([k, l]) => { const n = g.visAll.filter(o => SEG[o.x.id] === k).length; return n ? `<button type="button" class="segb" data-seg="${esc(g.c)}|${k}" aria-pressed="${g.sk === k}">${esc(l)} <span>${n}</span></button>` : ""; }).join("");
  return `<div class="segs" role="group" aria-label="Sections in ${esc(DISPLAY(g.c))}"><button type="button" class="segb" data-seg="${esc(g.c)}|" aria-pressed="${!g.sk}">All <span>${g.visAll.length}</span></button>${btns}</div>`;
}
function renderProgrammes(){
  updFCount();
  renderFieldChips();
  const otherFilters = ui.q || ui.saved || ui.rank || ui.spring || ui.field || ui.chance;
  const groups = laneCountries().map(c => {
    const all = rowsFor(c), visAll = all.filter(o => passFilters(o.x, o.e)).sort(SORTS[ui.sort]);
    const sk = SEGS[c] && ui.seg[c] && visAll.some(o => SEG[o.x.id] === ui.seg[c]) ? ui.seg[c] : "";
    const vis = sk ? visAll.filter(o => SEG[o.x.id] === sk) : visAll;
    const onlyClosed = !visAll.length && all.length > 0 && !otherFilters && ui.hideClosed && all.every(o => o.e.s === "closed");
    return {c, all, visAll, vis, sk, onlyClosed};
  });
  const homeAll = ui.kind !== "deg" ? F.filter(f => f.country === "Uzbekistan").map(x => ({x, e:evalItem(x)})) : [];
  const home = {c:"Uzbekistan", all:homeAll, vis:homeAll.filter(o => passFilters(o.x, o.e))};
  const shown = groups.filter(g => g.vis.length || g.onlyClosed);
  if (home.vis.length) shown.push(home);
  $("#cIndex").innerHTML = shown.map(g => `<button type="button" class="cjump" data-jump="${esc(g.c)}" style="--dc:${DOT[best(g.all)]}"><i></i>${esc(g.c === "Uzbekistan" ? "From Tashkent" : DISPLAY(g.c))}<span class="n">${g.onlyClosed ? "closed" : g.vis.length}</span></button>`).join("");
  const nRows = shown.reduce((a,g) => a + g.vis.length, 0), nHidden = groups.reduce((a,g) => a + g.all.filter(o => o.e.s === "closed").length, 0);
  $("#nProg").textContent = nRows;
  $("#uCount").textContent = `${nRows} programme${nRows === 1 ? "" : "s"} in ${shown.length} group${shown.length === 1 ? "" : "s"}${ui.field ? " · " + FIELDS[ui.field].n : ""}${ui.hideClosed && nHidden ? ` · ${nHidden} closed hidden` : ""}`;
  $("#cGroups").innerHTML = shown.map(g => {
    if (g.c === "Uzbekistan") return `<section class="cg" id="cg-Uzbekistan"><div class="cg-head"><div class="cg-title"><h3>From Tashkent</h3><span class="tag g">No visa needed</span></div><p class="cg-verdict">Foundation years you can take at home, with progression to universities abroad. A safety option for 2028 entry.</p></div><div class="list">${g.vis.map(rowHtml).join("")}</div></section>`;
    const t = tierOf(g.c), info = CI[g.c] || {}, cnt = {ok:0,reach:0,bridge:0,closed:0}; g.all.forEach(o => cnt[o.e.s]++);
    const fins = g.all.filter(o => o.e.s !== "closed").map(o => o.x.fin).filter(f => f && daysTo(f) >= 0).sort();
    const closedHidden = ui.hideClosed ? g.all.filter(o => o.e.s === "closed").length : 0, sid = domId(g.c);
    return `<section class="cg" id="cg-${sid}"><div class="cg-head">
      <div class="cg-title"><h3>${esc(DISPLAY(g.c))}</h3><span class="tierpill ${tierClass(t)}">${TIER_NAME[t]}</span></div>
      
      <p class="cg-verdict">${T(info.v || "")}</p>
      <div class="cg-stats">${["ok","reach","bridge","closed"].filter(k => cnt[k]).map(k => `<span class="chip ${STATUS[k][1]}">${cnt[k]} ${STATUS[k][0].toLowerCase()}</span>`).join("")}${fins.length ? `<span class="tag">Next final deadline: ${fmt(fins[0])}</span>` : ""}${DEEP[g.c] ? `<button type="button" class="linkbtn" data-sc="${esc(g.c)}">${esc(DISPLAY(g.c))} country guide</button>` : `<button type="button" class="linkbtn" data-ctrylink="${esc(g.c)}">How studying in ${esc(DISPLAY(g.c))} works</button>`}</div>
      <details class="cg-more"${matchMedia("(min-width: 821px)").matches ? " open" : ""}><summary>How it works here</summary><dl class="facts"><div><dt>Rule for your Attestat</dt><dd>${T(info.rule || "")}</dd></div><div><dt>Apply via</dt><dd>${T(info.apply || "")}</dd></div><div><dt>Degree length</dt><dd>${esc(info.deg || "")}</dd></div><div><dt>Visa</dt><dd>${T(info.visa || "")}</dd></div></dl></details>
    </div>${segChips(g)}${g.vis.length ? `<div class="list">${g.vis.slice(0, ui.more[g.c] ? g.vis.length : PAGE).map(rowHtml).join("")}</div>` : ""}${g.vis.length > PAGE ? `<div class="morebar"><button type="button" class="btn ghost sm" data-more="${esc(g.c)}">${ui.more[g.c] ? "Show fewer" : `Show all ${g.vis.length} (${g.vis.length - PAGE} more)`}</button></div>` : ""}${closedHidden ? `<div class="hiddennote">${g.onlyClosed ? "Every option here is closed to you. " : ""}${closedHidden} closed option${closedHidden === 1 ? "" : "s"} hidden. <button type="button" class="linkbtn" data-showclosed>Show closed</button></div>` : ""}</section>`;
  }).join("") || `<div class="empty">Nothing matches these filters. <button type="button" class="linkbtn" data-clear>Clear filters</button></div>`;
}
function countryFacts(c){
  const i = CI[c] || {};
  return `<dl class="facts"><div><dt>Degree</dt><dd>${esc(i.deg)}</dd></div><div><dt>Language</dt><dd>${esc(i.lang)}</dd></div><div><dt>Apply via</dt><dd>${T(i.apply)}</dd></div><div><dt>Intakes</dt><dd>${esc(i.intake)}</dd></div><div><dt>Admission based on</dt><dd>${T(i.basis)}</dd></div><div><dt>Institutions</dt><dd>${esc(i.types)}</dd></div><div><dt>Rule for your Attestat</dt><dd>${T(i.rule)}</dd></div><div><dt>Foundation</dt><dd>${T(i.fnd)}</dd></div><div><dt>Cost (approx., info only)</dt><dd>${esc(i.cost)}</dd></div><div><dt>Work after graduating</dt><dd>${T(i.work)}</dd></div><div><dt>Visa</dt><dd>${T(i.visa)}</dd></div><div><dt>Spring 2027</dt><dd>${esc(i.spring)}</dd></div></dl>`;
}
function renderCountries(){
  const cs = ORDER.slice();
  const stats = c => { const all = ITEMS.filter(x => x.country === c).map(x => ({x, e:evalItem(x)})); const cnt = {ok:0,reach:0,bridge:0,closed:0}; all.forEach(o => cnt[o.e.s]++); return {all, cnt, b:best(all)}; };
  $("#ctryOut").innerHTML = `<p class="small muted" style="margin:10px 0">How studying works in each country and what it means for your 11-year Attestat. Costs are rough yearly figures, for information only.</p><div class="tablebox"><table style="min-width:1250px"><thead><tr><th>Country</th><th>Tier</th><th>Best status</th><th>Open now</th><th>Degree</th><th>Language</th><th>Apply via</th><th>Intakes</th><th>Rule for your Attestat</th><th>Cost (approx.)</th><th>Work after</th></tr></thead><tbody>${cs.map(c => { const s = stats(c), i = CI[c] || {}; return `<tr><td><button type="button" class="linkbtn" data-sc="${esc(c)}">${esc(DISPLAY(c))}</button></td><td><span class="tierpill ${tierClass(tierOf(c))}">${TIER_NAME[tierOf(c)]}</span></td><td>${chip(s.b)}</td><td class="nums">${s.cnt.ok}</td><td>${esc(i.deg)}</td><td>${esc(i.lang)}</td><td>${T(i.apply)}</td><td>${esc(i.intake)}</td><td>${T(i.rule)}</td><td>${esc(i.cost)}</td><td>${T(i.work)}</td></tr>`; }).join("")}</tbody></table></div>`;
}
function renderCourses(){
  const cs = new Set(laneCountries());
  $("#courseOut").innerHTML = Object.keys(FIELDS).map(k => {
    const c = COURSES[k], list = ITEMS.filter(x => cs.has(x.country) && x.fields.includes(k)).map(x => ({x, e:evalItem(x)})).filter(o => o.e.s !== "closed");
    list.sort((a,b) => SORDER[a.e.s] - SORDER[b.e.s] || b.x.fit - a.x.fit || bandNum(a.x.band) - bandNum(b.x.band));
    return `<article class="course"><div class="toolbar"><h3>${FIELDS[k].n}</h3><span class="tag">${list.length} open in this tier</span></div>
      <dl><div><dt>What you study</dt><dd>${esc(c.what)}</dd></div><div><dt>What admissions look for</dt><dd>${T(c.needs)}</dd></div><div><dt>How it fits you</dt><dd class="you">${esc(c.you)}</dd></div><div><dt>Length</dt><dd>${esc(c.len)}</dd></div><div><dt>Strong options</dt><dd>${esc(c.where)}</dd></div><div><dt>After you graduate</dt><dd>${T(c.after)}</dd></div></dl>
      ${list.length ? `<div class="grid" style="gap:6px"><span class="eyebrow">Best open matches in this tier</span><ul class="picks">${list.slice(0,6).map(o => `<li><span><button type="button" class="linkbtn" data-goto="${o.x.id}">${esc(o.x.name)}</button> <span class="faint">· ${esc(DISPLAY(o.x.country === "Uzbekistan" ? "Tashkent" : o.x.country))}</span></span>${chip(o.e.s)}</li>`).join("")}</ul></div>` : `<p class="small faint">No open options in this tier. Try "All countries".</p>`}
      <div><button type="button" class="btn ghost sm" data-fieldgo="${k}">Show all ${list.length} in Browse</button></div></article>`;
  }).join("");
}
function renderGloss(){
  const q = ui.gq.trim().toLowerCase();
  const list = GLOSS.filter(([k,d,al]) => !q || k.toLowerCase().includes(q) || d.toLowerCase().includes(q) || al.some(a => a.toLowerCase().includes(q))).sort((a,b) => a[0].localeCompare(b[0]));
  $("#nGloss").textContent = GLOSS.length;
  $("#glossOut").innerHTML = list.map(([k,d]) => `<div id="gl-${domId(k)}"><dt>${esc(k)}</dt><dd>${esc(d)}</dd></div>`).join("") || `<div class="empty">No term matches.</div>`;
}
/* ===================== STRATEGY ===================== */
const TR = s => T(s).replace(/&lt;(\/?)b&gt;/g, "<$1b>");
const deepCountries = () => Object.keys(DEEP).sort((a,b) => tierOf(a) - tierOf(b) || ORDER.indexOf(a) - ORDER.indexOf(b));
const chCount = list => { const n = {x:0,h:0,m:0,o:0}; list.forEach(o => { const c = chanceOf(o.x, o.e); if (c) n[c]++; }); return n; };
function balBar(n){
  const tot = CH_KEYS.reduce((a,k) => a + n[k], 0);
  if (!tot) return `<div class="balbar empty"><span style="width:100%"></span></div>`;
  return `<div class="balbar" role="img" aria-label="${CH_KEYS.map(k => `${n[k]} ${CH[k][0].toLowerCase()}`).join(", ")}">${CH_KEYS.filter(k => n[k]).map(k => `<span class="${CH[k][1]}" style="width:${(n[k] / tot * 100).toFixed(1)}%" title="${n[k]} ${CH[k][0]}">${n[k]}</span>`).join("")}</div>`;
}
const pickLinks = list => list.map(o => `<button type="button" class="linkbtn" data-goto="${o.x.id}">${esc(o.x.name.split(" – ")[0])}</button>${o.x.country !== "USA" ? ` <span class="faint">(${esc(DISPLAY(o.x.country))})</span>` : ""}`).join(", ");
function suggestOpen(band, n){
  const t1 = new Set(ORDER.filter(c => tierOf(c) === 1));
  return U.filter(x => t1.has(x.country) && !isSaved(x.id)).map(x => ({x, e:evalItem(x)})).filter(o => o.e.s !== "closed" && chanceOf(o.x, o.e) === band)
    .sort((a,b) => SORDER[a.e.s] - SORDER[b.e.s] || b.x.fit - a.x.fit || bandNum(a.x.band) - bandNum(b.x.band)).slice(0, n);
}
function renderBalance(){
  const saved = state.saved.filter(id => byId[id]).map(id => ({x:byId[id], e:evalItem(byId[id])}));
  const live = saved.filter(o => o.e.s !== "closed"), n = chCount(live), tot = live.length;
  const tips = [];
  if (!tot) tips.push("Save universities in Browse or from the suggested lists below to see your balance.");
  else {
    const top = n.x + n.h;
    if (n.o < 2) { const s = suggestOpen("o", 3); tips.push(`<b>Add at least two likely options</b> so a place is close to certain.${s.length ? " Strong open ones: " + pickLinks(s) + "." : ""}`); }
    if (n.m < 3) { const s = suggestOpen("m", 3); tips.push(`<b>Add targets.</b> They decide most outcomes.${s.length ? " Good fits: " + pickLinks(s) + "." : ""}`); }
    if (top / tot > 0.5) tips.push(`<b>${top} of ${tot} are long shots or reaches.</b> That is fine as ambition, but balance it with targets and likely options.`);
    if (n.x > 6) tips.push("<b>More than six long shots.</b> Each needs tailored essays. Keep the ones you would truly choose.");
    if (!tips.length) tips.push(`<b>Balanced.</b> ${n.o} likely, ${n.m} target and ${top} ambitious choices is a healthy spread.`);
  }
  const t1 = ORDER.filter(c => DEEP[c]);
  const rows = t1.map(c => {
    const mine = live.filter(o => o.x.country === c), cn = chCount(mine), d = DEEP[c], rec = d ? CH_KEYS.reduce((a,k) => a + (d.mix[k] || 0), 0) : 0;
    return `<tr><td><button type="button" class="linkbtn" data-sc="${esc(c)}">${esc(DISPLAY(c))}</button></td>${CH_KEYS.map(k => `<td class="nums ${cn[k] ? "" : "faint"}">${cn[k]}</td>`).join("")}<td class="nums"><b>${mine.length}</b></td><td class="nums faint">${rec || "—"}</td></tr>`;
  }).join("");
  const otherN = live.filter(o => !t1.includes(o.x.country)).length;
  $("#balance").innerHTML = `<div class="toolbar"><div><span class="eyebrow">Your shortlist balance</span><h3 style="margin-top:4px">${tot} saved option${tot === 1 ? "" : "s"} still open to you</h3></div><div class="legend">${CH_KEYS.map(k => `<span><i class="lg ${CH[k][1]}"></i>${CH[k][0]} ${n[k]}</span>`).join("")}</div></div>
    ${balBar(n)}
    <ul class="tips">${tips.map(t => `<li>${t}</li>`).join("")}</ul>
    <p class="small muted">Suggested for 2027: 20–28 applications in total. About 12–15 in the USA (one Common App) and 2–4 in each of 4–5 other Tier 1 countries. Aim for roughly a quarter long shots and reaches, 40% targets and a third likely options.</p>
    <details class="small"><summary class="faint" style="cursor:pointer">Breakdown by country</summary><div class="tablebox" style="margin-top:8px"><table><thead><tr><th>Country</th>${CH_KEYS.map(k => `<th>${CH[k][0]}</th>`).join("")}<th>Saved</th><th>Suggested</th></tr></thead><tbody>${rows}</tbody></table></div>${otherN ? `<p class="faint" style="margin-top:6px">${otherN} more saved in Tier 3 or from Tashkent.</p>` : ""}</details>`;
}
function stratPickCard(id){
  const x = byId[id]; if (!x) return "";
  const e = evalItem(x);
  return `<li class="pk"><div style="min-width:0"><button type="button" class="linkbtn pkn" data-goto="${id}">${esc(x.name)}</button><div class="faint small">${esc(x.city)}${x.fin ? " · final " + fmt(x.fin) : ""}</div></div><div class="pkm">${chip(e.s)}${e.s !== "closed" ? saveBtn(id) : ""}</div></li>`;
}
function renderScore(){
  const keys = Object.keys(SCORE_W), cs = ORDER.filter(c => SCORE[c]).sort((a,b) => scoreOf(b) - scoreOf(a));
  $("#score").innerHTML = `<div class="toolbar"><div><span class="eyebrow">Country scorecard · all three tiers</span><h3 style="margin-top:4px">Where your 2027 chances are strongest</h3></div></div>
    <p class="small muted">Each factor is scored 1–5 for your profile (11-year Attestat, 2022 graduate, IELTS 7.5 with Writing 5.5, SAT planned; finance ignored), then weighted: ${keys.map(k => `${SCORE_L[k]} ${SCORE_W[k]}%`).join(", ")}. It ranks countries, not single universities; use it to decide where to spend applications.</p>
    <div class="tablebox"><table class="stack score"><thead><tr><th>#</th><th>Country</th>${keys.map(k => `<th>${SCORE_L[k]}</th>`).join("")}<th>Score</th><th>Why</th></tr></thead><tbody>${cs.map((c,i) => { const s = SCORE[c], tot = scoreOf(c), t = tierOf(c); return `<tr><td class="nums faint rk">${i + 1}</td><td class="cn"><button type="button" class="linkbtn" data-sc="${esc(c)}">${esc(DISPLAY(c))}</button> <span class="tierpill ${tierClass(t)}">${TIER_NAME[t]}</span></td>${keys.map(k => `<td class="f" data-l="${SCORE_L[k]}" data-s="${SCORE_S[k]}"><span class="sc s${s[k]}" title="${SCORE_L[k]}: ${s[k]} of 5">${s[k]}</span></td>`).join("")}<td class="tt" data-l="Score"><span class="tot"><b>${tot}</b><i><u style="width:${tot}%"></u></i></span></td><td class="small muted why" data-l="Why">${esc(s.why)}</td></tr>`; }).join("")}</tbody></table></div>`;
}
function renderFees(){
  const el = $("#fees"); if (!el) return;
  const sl = state.saved.filter(id => byId[id]), sum = sl.reduce((t,id) => { const f = feeOf(byId[id]); t.all += f.usd; if (f.zero) t.save += f.usd; return t; }, {all:0, save:0});
  const cs = ORDER.filter(c => FEE_C[c]);
  el.innerHTML = `<div class="toolbar"><div><span class="eyebrow">Application fees</span><h3 style="margin-top:4px">${sl.length ? `Your ${sl.length} saved applications cost about $${sum.all.toLocaleString("en-US")} in fees; $${sum.save.toLocaleString("en-US")} of that can be $0` : "What applying costs, and how to pay nothing"}</h3></div><button type="button" class="btn ghost sm" data-freeonly>Show free or waivable programmes</button></div>
    <div class="feegrid">
      <div><h4>One form, many universities</h4><p class="small muted">Common App covers the US, Qatar's Education City, NYU Shanghai and Duke Kunshan. OUAC covers every Ontario university. universityadmissions.se takes up to four Swedish programmes for SEK 900; Studyinfo takes all Finnish choices for €100. optagelse.dk (Denmark) and Study in Saudi are free.</p></div>
      <div><h4>Free routes</h4><p class="small muted">Georgetown-Qatar, Duke Kunshan, Stipendium Hungaricum, GKS (Korea), Study in Saudi, Denmark, Norway, most of Austria, many Turkish private universities, and US colleges with no fee such as Tulane, Macalester, Grinnell, Carleton, St. Olaf, Colorado College and Dayton. Australian universities (AUD 100–150) usually waive the fee when you apply through an authorised agent.</p></div>
      <div><h4>The Common App fee waiver</h4><p class="small muted">In your Common App profile, answer the fee-waiver questions; a counselor or official at your school confirms them. Each college decides whether to accept it, and one that refuses asks for the fee after you submit. You can also email a college for its own waiver: explain your situation honestly and briefly.</p></div>
      <div><h4>Fees with no way around them</h4><p class="small muted">Finland €100 (no waivers), Sweden SEK 900, HKU HK$780, UBC CAD 173.25, OUAC CAD 156, the UC application (≈ $95 per campus), Vilnius University €100, AUS AED 400, Boğaziçi €100 per programme, Católica Lisbon €100–175, Nova SBE €70.</p></div>
    </div>
    <details class="small"><summary class="faint" style="cursor:pointer">Every country: where you apply, the fee, and how to pay $0</summary><div class="tablebox" style="margin-top:8px"><table class="stack"><thead><tr><th>Country</th><th>Where you apply</th><th>Fee</th><th>Pay $0</th></tr></thead><tbody>${cs.map(c => { const f = FEE_C[c]; return `<tr><td data-l="Country"><b>${esc(DISPLAY(c))}</b></td><td data-l="Where you apply">${esc(f.p)}</td><td data-l="Fee" class="nums">${esc(f.f)}</td><td data-l="Pay $0">${f.usd === 0 ? "Already free" : f.w ? esc(f.w) : '<span class="faint">No known way</span>'}</td></tr>`; }).join("")}</tbody></table></div></details>`;
}
function usGuide(){
  const us = U.filter(x => x.country === "USA"), cnt = {}; us.forEach(x => { const t = aidOf(x).t; cnt[t] = (cnt[t] || 0) + 1; });
  const tbl = (head, rows) => `<div class="tablebox"><table class="stack"><thead><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((v,i) => i ? `<td data-l="${head[i]}">${esc(v)}</td>` : `<td><b>${esc(v)}</b></td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return `<section class="scard" id="usPay"><div class="toolbar"><span class="eyebrow">Paying for it: aid for international students</span><div class="toolbar" style="gap:6px"><button type="button" class="btn sm" data-aidgo="full">Show the ${(cnt.nb || 0) + (cnt.fn || 0) + (cnt.fr || 0)} with full-need or free tuition</button><button type="button" class="btn ghost sm" data-aidgo="merit">Show the ${(cnt.mr || 0) + (cnt.nm || 0)} with merit aid</button></div></div>
      <div class="aidsum">${["nb","fn","fr","nm","nl","mr","no","ck"].filter(k => cnt[k]).map(k => `<span><b>${cnt[k]}</b> ${esc(AID_T[k][0].toLowerCase())}</span>`).join("")}</div>
      <ul class="sl">${US_AIDHOW.map(t => `<li>${TR(t)}</li>`).join("")}</ul></section>
    <section class="scard"><span class="eyebrow">Full-ride and full-tuition scholarships open to you</span>${tbl(["Scholarship","Who","Value","How / when"], US_FULLRIDES)}<p class="small faint">Values and deadlines change each year: confirm on each university's scholarship page before you plan around them.</p></section>
    <section class="scard"><span class="eyebrow">Merit scholarships at public universities</span>${tbl(["University","Award","How"], US_PUBMERIT)}</section>
    <section class="scard"><span class="eyebrow">Largest confirmed awards at private colleges</span>${tbl(["College","Award","How"], US_PRIVMERIT)}<p class="small faint">Checked one by one, 9–10 Oct 2026. Most of these colleges list a full cost of roughly $55,000–85,000 a year before the award.</p></section>
    <section class="scard"><span class="eyebrow">Funding from Uzbekistan</span><ul class="sl">${US_UZFUND.map(t => `<li>${TR(t)}</li>`).join("")}</ul></section>
    <section class="scard"><span class="eyebrow">From offer to F-1 visa, 2026–27</span><ol class="tline">${US_VISA2.map(([w, t]) => `<li><span class="w">${esc(w)}</span><span>${TR(t)}</span></li>`).join("")}</ol></section>
    <div class="sgrid">
      <section class="scard"><span class="eyebrow">What makes a strong visa file</span><ul class="sl ok">${US_VISAFILE.map(t => `<li>${TR(t)}</li>`).join("")}</ul><p class="small faint">Each university row shows a visa-file reading (strong, fair, prepare well). It is our judgement from the university's profile and aid, not an official rating.</p></section>
      <section class="scard"><span class="eyebrow">How to stand out among other applicants</span><ul class="sl">${US_STANDOUT.map(t => `<li>${TR(t)}</li>`).join("")}</ul></section>
    </div>
    <section class="scard" id="usIndex"><div class="toolbar"><span class="eyebrow">Every other U.S. college (${US_INDEX.length.toLocaleString("en-US")})</span><span class="small faint">All are open to your Attestat; check aid and recognition before applying</span></div>
      <div class="filters"><div class="ctl"><label for="ixq">Search by name, city or state</label><input type="search" id="ixq" placeholder="e.g. Wesleyan, Ohio, TX" value="${esc(ui.ixq || "")}"></div></div>
      <div id="ixOut">${usIndexHtml()}</div></section>`;
}
function usIndexHtml(){
  const q = (ui.ixq || "").trim().toLowerCase();
  if (q.length < 2) return `<p class="small muted">Type at least two letters. The universities in the directory above have full details; this index lists the other four-year colleges (seminaries, medical schools, women's colleges, service academies and branch campuses of listed universities are left out).</p>`;
  const hits = US_INDEX.filter(([n, c, st]) => (n + " " + c + " " + st + " " + (US_STATES[st] || "")).toLowerCase().includes(q));
  return hits.length ? `<ul class="ixlist">${hits.slice(0, 60).map(([n, c, st]) => `<li><b>${esc(n)}</b> <span class="faint">${esc(c)}, ${esc(st)}</span></li>`).join("")}</ul>${hits.length > 60 ? `<p class="small faint">${hits.length - 60} more: type more letters.</p>` : ""}` : `<p class="small muted">No other college matches. Try the directory search in Browse.</p>`;
}
document.addEventListener("input", e => { if (e.target.id !== "ixq") return; ui.ixq = e.target.value; $("#ixOut").innerHTML = usIndexHtml(); });
document.addEventListener("click", e => { const b = e.target.closest("[data-aidgo]"); if (!b) return; ui.aid = b.dataset.aidgo; $("#aidSel").value = ui.aid; ui.lane = "1"; go("unis"); setSub("prog"); setTimeout(() => scrollToEl(document.getElementById("cg-USA")), 30); });
function renderStrategy(){
  renderScore();
  const cs = deepCountries();
  if (!DEEP[ui.sc]) ui.sc = cs[0];
  $("#sChips").innerHTML = [1,2,3].map(t => { const l = cs.filter(c => tierOf(c) === t); return l.length ? `<div class="schrow"><span class="schl">${TIER_NAME[t]}</span>${l.map(c => `<button type="button" role="tab" class="schip ${tierClass(t)}" data-sc="${esc(c)}" aria-selected="${ui.sc === c}"><i></i>${esc(DISPLAY(c))}${SCORE[c] ? `<span class="faint">${scoreOf(c)}</span>` : ""}</button>`).join("")}</div>` : ""; }).join("");
  const c = ui.sc, d = DEEP[c], t = tierOf(c);
  const all = U.filter(x => x.country === c).map(x => ({x, e:evalItem(x)})), open = all.filter(o => o.e.s !== "closed");
  const nOpen = chCount(open);
  const mySaved = open.filter(o => isSaved(o.x.id)), myN = chCount(mySaved);
  const pickIds = CH_KEYS.flatMap(k => d.picks[k] || []);
  const unsavedPicks = pickIds.filter(id => byId[id] && !isSaved(id) && evalItem(byId[id]).s !== "closed");
  const cols = CH_KEYS.slice().reverse().map(k => {
    const list = open.filter(o => chanceOf(o.x, o.e) === k).sort((a,b) => SORDER[a.e.s] - SORDER[b.e.s] || b.x.fit - a.x.fit || bandNum(a.x.band) - bandNum(b.x.band));
    return `<div class="bandcol"><div class="bh"><span class="tag chtag ${CH[k][1]}">${meter(k)}${CH[k][0]}</span><span class="faint small">${list.length}</span></div>${list.length ? `<ul>${list.map(o => `<li><i style="background:${DOT[o.e.s]}" title="${STATUS[o.e.s][0]}"></i><button type="button" class="linkbtn" data-goto="${o.x.id}">${esc(o.x.name)}</button>${isSaved(o.x.id) ? ' <span class="sv" title="Saved">★</span>' : ""}</li>`).join("")}</ul>` : `<p class="faint small">None open.</p>`}</div>`;
  }).join("");
  const mixTxt = CH_KEYS.filter(k => d.mix[k]).map(k => `${d.mix[k]} ${CH[k][0].toLowerCase()}`).join(" · ");
  let html = `<article class="strat" style="--tc:var(--t${t})">
    <header class="sh"><div class="cg-title"><h3>${esc(DISPLAY(c))}</h3><span class="tierpill ${tierClass(t)}">${TIER_NAME[t]}</span></div><p>${T(d.head)}</p>
      <div class="cg-stats">${CH_KEYS.slice().reverse().filter(k => nOpen[k]).map(k => `<span class="tag chtag ${CH[k][1]}">${meter(k)}${nOpen[k]} ${CH[k][0].toLowerCase()}</span>`).join("")}<span class="tag">${open.length} open of ${all.length}</span><button type="button" class="linkbtn" data-showc="${esc(c)}">See them in Browse</button></div></header>
    <div class="sgrid">
      <section class="scard"><span class="eyebrow">How they will read your file</span><ul class="sl">${d.read.map(s => `<li>${TR(s)}</li>`).join("")}</ul></section>
      <section class="scard"><span class="eyebrow">Your strengths here</span><ul class="sl ok">${d.edge.map(s => `<li>${TR(s)}</li>`).join("")}</ul><span class="eyebrow" style="margin-top:6px">Risks and how to fix them</span><ul class="sl warn">${d.risk.map(s => `<li>${TR(s)}</li>`).join("")}</ul></section>
    </div>
    <section class="scard"><div class="toolbar"><div><span class="eyebrow">Suggested shortlist</span><p class="small muted" style="margin-top:4px">Suggested mix: ${mixTxt}. You have saved ${mySaved.length} open option${mySaved.length === 1 ? "" : "s"} here${mySaved.length ? ` (${CH_KEYS.filter(k => myN[k]).map(k => `${myN[k]} ${CH[k][0].toLowerCase()}`).join(", ")})` : ""}.</p></div>${unsavedPicks.length ? `<button type="button" class="btn sm" data-saveall="${esc(unsavedPicks.join(","))}">Save all ${unsavedPicks.length} suggested</button>` : `<span class="tag g">All suggested saved</span>`}</div>
      <div class="pgrid">${CH_KEYS.filter(k => (d.picks[k] || []).length).map(k => `<div><div class="bh"><span class="tag chtag ${CH[k][1]}">${meter(k)}${CH[k][0]}</span><span class="faint small">${CH[k][2]}</span></div><ul class="pks">${d.picks[k].map(stratPickCard).join("")}</ul></div>`).join("")}</div></section>
    <section class="scard"><span class="eyebrow">Timeline</span><ol class="tline">${d.plan.map(([w, s]) => `<li><span class="w">${esc(w)}</span><span>${T(s)}</span></li>`).join("")}</ol></section>
    ${CI[c] ? `<section class="scard" id="sFacts"><div class="toolbar"><span class="eyebrow">How studying in ${esc(DISPLAY(c))} works</span><label class="small faint">Tier <select aria-label="Tier for ${esc(DISPLAY(c))}" data-tierset="${esc(c)}" style="width:auto;padding:4px 8px;font-size:12.5px">${[1,2,3].map(k => `<option value="${k}" ${k === t ? "selected" : ""}>${k} · ${TIER_NAME[k]}</option>`).join("")}</select></label></div><p class="small">${T(CI[c].v)}</p>${countryFacts(c)}</section>` : ""}`;
  if (c === "USA") html += `
    <section class="scard"><span class="eyebrow">English test strategy</span><p class="small muted">Your IELTS is 7.5 overall with Writing 5.5. Many US universities read section scores, and several do not accept the One Skill Retake.</p>
      <div class="tablebox"><table class="stack"><thead><tr><th>University</th><th>What they ask</th><th>For you</th></tr></thead><tbody>${US_EN.map(([u, r, v, k]) => `<tr><td><b>${esc(u)}</b></td><td data-l="What they ask">${T(r)}</td><td data-l="For you"><span class="tag ${k === "g" ? "g" : k === "y" ? "y" : "r"}">${esc(v)}</span></td></tr>`).join("")}</tbody></table></div>
      <p class="small"><b>Plan:</b> sit one full IELTS in November aiming for Writing 6.5–7.0. If Writing is still below 6.5, try the Duolingo English Test (125+) for universities that accept it, and keep the One Skill Retake only for universities that take it.</p></section>
    <section class="scard"><span class="eyebrow">SAT and ACT policies for Fall 2027</span><div class="tgrid">${US_TEST.map(([h, s, k]) => `<div class="tp ${k}"><b>${esc(h)}</b><p class="small">${esc(s)}</p></div>`).join("")}</div><p class="small faint">Policies change often; confirm on each university's site. A strong SAT (1400+) still helps at test-optional universities, because US readers know the Uzbek system less well.</p></section>
    <section class="scard"><span class="eyebrow">Routes for applicants with a gap</span><div class="tablebox"><table class="stack"><thead><tr><th>Route</th><th>Who it is for</th><th>What you get</th><th>When</th></tr></thead><tbody>${US_ROUTES.map(r => `<tr>${r.map((v,i) => i ? `<td data-l="${["","Who it is for","What you get","When"][i]}">${T(v)}</td>` : `<td><b>${esc(v)}</b></td>`).join("")}</tr>`).join("")}</tbody></table></div></section>
    <div class="sgrid">
      <section class="scard"><span class="eyebrow">Telling the 2022–2026 story</span><ul class="sl">${US_STORY.map(s => `<li>${T(s)}</li>`).join("")}</ul></section>
      <section class="scard"><span class="eyebrow">What changed in 2026</span><ul class="sl">${US_VISANOW.map(t => `<li>${TR(t)}</li>`).join("")}</ul></section>
    </div>`;;
  if (c === "USA") html += usGuide();
  html += `<section class="scard"><div class="toolbar"><span class="eyebrow">Every open option in ${esc(DISPLAY(c))}, by chance</span><span class="legend"><span><i class="lg" style="background:var(--ok)"></i>Open now</span><span><i class="lg" style="background:var(--reach)"></i>Needs a score</span><span><i class="lg" style="background:var(--bridge)"></i>Bridge first</span></span></div><div class="bandcols">${cols}</div></section></article>`;
  $("#stratOut").innerHTML = html;
}

function renderUnis(){
  renderLanes();
  $$("#subnav button").forEach(b => b.setAttribute("aria-selected", b.dataset.sub === ui.sub));
  if (ui.sub === "ctry") ui.sub = "strat";
  $("#vProg").hidden = ui.sub !== "prog"; $("#vStrat").hidden = ui.sub !== "strat"; $("#vCourse").hidden = ui.sub !== "guide"; $("#vGloss").hidden = ui.sub !== "guide";
  $("#nStrat").textContent = Object.keys(DEEP).length;
  $("#lanes").hidden = ui.sub === "strat";
  if (ui.sub === "strat") renderStrategy();
  renderProgrammes();
  if (ui.sub === "strat" && $("#sysBox").open) renderCountries();
  if (ui.sub === "guide") renderCourses();
  if (ui.sub === "guide" || !$("#nGloss").textContent) renderGloss();
  renderCmpBar();
}
function setSub(s){ ui.sub = s; renderUnis(); }
$("#subnav").addEventListener("click", e => { const b = e.target.closest("[data-sub]"); if (b) setSub(b.dataset.sub); });
$("#lanes").addEventListener("click", e => { const b = e.target.closest("[data-lane]"); if (!b) return; ui.lane = b.dataset.lane; try { localStorage.setItem("atlas.lane", ui.lane); } catch(err) {} renderUnis(); });
$$("#kindSeg button").forEach(b => b.addEventListener("click", () => { ui.kind = b.dataset.kind; $$("#kindSeg button").forEach(x => x.setAttribute("aria-pressed", x === b)); renderUnis(); }));
$("#q").addEventListener("input", e => { ui.q = e.target.value.trim().toLowerCase(); renderProgrammes(); });
$("#sortSel").addEventListener("change", e => { ui.sort = e.target.value; renderProgrammes(); });
$("#chSel").addEventListener("change", e => { ui.chance = e.target.value; renderProgrammes(); });
$("#aidSel").addEventListener("change", e => { ui.aid = e.target.value; renderProgrammes(); });
$("#gq").addEventListener("input", e => { ui.gq = e.target.value; renderGloss(); });
$$("[data-tog]").forEach(b => b.addEventListener("click", () => { const k = b.dataset.tog; ui[k] = !ui[k]; b.setAttribute("aria-pressed", ui[k]); renderProgrammes(); }));
$("#sysBox").addEventListener("toggle", () => { if ($("#sysBox").open) renderCountries(); });
function clearFilters(){ ui.q = ""; $("#q").value = ""; ui.field = ""; ui.chance = ""; $("#chSel").value = ""; ui.aid = ""; $("#aidSel").value = ""; ui.hideClosed = true; ui.saved = ui.rank = ui.spring = ui.free = false; $$("[data-tog]").forEach(b => b.setAttribute("aria-pressed", ui[b.dataset.tog])); renderProgrammes(); }
function scrollToEl(el){ if (el) el.scrollIntoView({behavior:smooth(), block:"start"}); }
function goto(id){
  const x = byId[id]; if (!x) return;
  go("unis"); ui.sub = "prog"; ui.q = ""; $("#q").value = ""; ui.field = ""; ui.chance = ""; $("#chSel").value = ""; ui.saved = ui.rank = ui.spring = false;
  if (evalItem(x).s === "closed") ui.hideClosed = false;
  if (x.country !== "Uzbekistan" && ui.lane !== "all" && String(tierOf(x.country)) !== ui.lane) ui.lane = String(tierOf(x.country));
  if (ui.kind === "deg" && x.kind === "fnd" || ui.kind === "fnd" && x.kind === "deg") { ui.kind = "both"; $$("#kindSeg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.kind === "both")); }
  $$("[data-tog]").forEach(b => b.setAttribute("aria-pressed", ui[b.dataset.tog]));
  ui.seg[x.country] = ""; ui.more[x.country] = true;
  renderUnis();
  const el = document.getElementById("it-" + id); if (el) { el.open = true; fillBody(el); scrollToEl(el); }
}
document.addEventListener("click", e => {
  const cv = e.target.closest(".cg-verdict"); if (cv && !e.target.closest(".term")) cv.classList.toggle("open");
  if (e.target.closest("[data-clear]")) clearFilters();
  if (e.target.closest("[data-showclosed]")) { ui.hideClosed = false; $('[data-tog="hideClosed"]')?.setAttribute("aria-pressed", "false"); renderProgrammes(); }
  const f = e.target.closest("[data-field]"); if (f) { ui.field = f.dataset.field; renderProgrammes(); }
  const j = e.target.closest("[data-jump]"); if (j) scrollToEl(document.getElementById("cg-" + domId(j.dataset.jump)));
  const cl = e.target.closest("[data-ctrylink]"); if (cl) { ui.sc = cl.dataset.ctrylink; show("unis"); setSub("strat"); scrollToEl($("#sFacts") || $("#stratOut")); }
  const sc = e.target.closest("[data-showc]"); if (sc) { setSub("prog"); scrollToEl(document.getElementById("cg-" + domId(sc.dataset.showc))); }
  const g = e.target.closest("[data-goto]"); if (g) goto(g.dataset.goto);
  const fg = e.target.closest("[data-fieldgo]"); if (fg) { ui.field = fg.dataset.fieldgo; if (fg.dataset.lane) { ui.lane = fg.dataset.lane; try { localStorage.setItem("atlas.lane", ui.lane); } catch(err) {} } go("unis"); setSub("prog"); }
  const sg = e.target.closest("[data-seg]"); if (sg) { const [c, k] = sg.dataset.seg.split("|"); ui.seg[c] = k; ui.more[c] = false; renderProgrammes(); const h = document.getElementById("cg-" + domId(c)); if (h && h.getBoundingClientRect().top < 0) scrollToEl(h); }
  const mo = e.target.closest("[data-more]"); if (mo) { const c = mo.dataset.more; ui.more[c] = !ui.more[c]; renderProgrammes(); if (!ui.more[c]) scrollToEl(document.getElementById("cg-" + domId(c))); }
});
document.addEventListener("click", e => {
  if (e.target.closest("[data-gofees]")) { show("list"); setTimeout(() => scrollToEl($("#fees")), 30); return; }
  if (e.target.closest("[data-freeonly]")) { ui.free = true; $$("[data-tog]").forEach(b => b.setAttribute("aria-pressed", ui[b.dataset.tog])); go("unis"); setSub("prog"); return; }
  const sc = e.target.closest("[data-sc]");
  if (sc) { ui.sc = sc.dataset.sc; const away = $('[data-panel="unis"]').hidden || ui.sub !== "strat"; show("unis"); if (ui.sub !== "strat") setSub("strat"); else renderStrategy(); if (away) goTop(); else if (!sc.closest("#sChips")) scrollToEl($("#sChips")); return; }
  const sa = e.target.closest("[data-saveall]");
  if (sa) {
    const ids = sa.dataset.saveall.split(",").filter(id => byId[id] && !isSaved(id)); if (!ids.length) return;
    state.saved = [...state.saved, ...ids]; persist(); renderAll();
    toast(`Saved ${ids.length}. Each one added a task to your plan`, () => { state.saved = state.saved.filter(x => !ids.includes(x)); persist(); renderAll(); });
  }
});
document.addEventListener("change", e => {
  const ap = e.target.closest("[data-appst]");
  if (ap) { if (ap.value) state.apps[ap.dataset.appst] = ap.value; else delete state.apps[ap.dataset.appst]; persist(); renderList(); renderHome(); return; }
  const s = e.target.closest("[data-tierset]"); if (!s) return;
  const c = s.dataset.tierset, v = +s.value, was = tierOf(c);
  if (v === DEFAULT_TIER[c]) delete state.tiers[c]; else state.tiers[c] = v;
  persist(); renderAll();
  toast(`${DISPLAY(c)} moved to ${TIER_NAME[v]}`, () => { if (was === DEFAULT_TIER[c]) delete state.tiers[c]; else state.tiers[c] = was; persist(); renderAll(); });
});
document.addEventListener("click", e => {
  const b = e.target.closest("[data-save]"); if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const id = b.dataset.save, was = isSaved(id);
  state.saved = was ? state.saved.filter(x => x !== id) : [...state.saved, id];
  persist(); renderAll();
  toast(was ? "Removed from your shortlist" : "Saved. A task was added to your checklist", () => { state.saved = was ? [...state.saved, id] : state.saved.filter(x => x !== id); persist(); renderAll(); });
});

/* Compare */
function renderCmpBar(){
  const n = ui.cmp.length;
  $("#cmpBar").hidden = !n;
  if (!n) return;
  $("#cmpTxt").textContent = `Comparing ${n} of 3: ` + ui.cmp.map(id => byId[id].name.split(" – ")[0]).join(", ");
  $("#cmpOpen").disabled = n < 2; $("#cmpOpen").style.opacity = n < 2 ? .5 : 1;
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-cmp]"); if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const id = b.dataset.cmp;
  if (ui.cmp.includes(id)) ui.cmp = ui.cmp.filter(x => x !== id);
  else if (ui.cmp.length >= 3) { toast("You can compare up to 3 at a time"); return; }
  else ui.cmp.push(id);
  $$(`[data-cmp="${id}"]`).forEach(x => { const on = ui.cmp.includes(id); x.setAttribute("aria-pressed", on); x.lastElementChild.textContent = on ? "Comparing" : "Compare"; });
  renderCmpBar();
});
$("#cmpClear").addEventListener("click", () => { ui.cmp = []; renderProgrammes(); renderCmpBar(); });
$("#cmpOpen").addEventListener("click", () => {
  if (ui.cmp.length < 2) return;
  const xs = ui.cmp.map(id => byId[id]), es = xs.map(evalItem);
  const row = (label, fn) => `<tr><td>${label}</td>${xs.map((x,i) => `<td>${fn(x, es[i])}</td>`).join("")}</tr>`;
  $("#cmpTable").innerHTML = `<thead><tr><th></th>${xs.map(x => `<th style="white-space:normal;text-transform:none;letter-spacing:0;font:700 14px var(--f-body);color:var(--ink)">${esc(x.name)}</th>`).join("")}</tr></thead><tbody>` +
    row("Country", x => esc(x.country === "Uzbekistan" ? "Uzbekistan (Tashkent)" : DISPLAY(x.country)) + (x.country !== "Uzbekistan" ? ` <span class="tierpill ${tierClass(tierOf(x.country))}">${TIER_NAME[tierOf(x.country)]}</span>` : "")) +
    row("City", x => esc(x.city)) + row("Type", x => esc(x.kind === "deg" ? x.type : "Foundation · " + GUAR[x.guar])) +
    row("Ranking", x => (BAND[x.band] || "—") + " " + RKTAG[rkOf(x)]) + row("Status", (x,e) => chip(e.s)) + row("Chance", (x,e) => { const c = chanceOf(x, e); return c ? `${chTag(x, e)} <span class="small muted">${esc(CH[c][2])}</span>` : "—"; }) +
    row("Still needed", (x,e) => e.s === "closed" ? T(x.rule || x.accepts) : e.miss.length ? e.miss.map(T).join("<br>") : "Nothing") +
    row("Fields", x => esc(fieldNames(x.fields))) + row("Courses", x => esc(x.kind === "deg" ? x.courses : "Leads to " + x.feeds)) +
    row("Rule for you", x => T(x.kind === "deg" ? x.rule : x.accepts)) + row("Window", x => T(x.kind === "deg" ? x.win : x.intakes + " · " + x.apply)) +
    row("Suggested", x => x.sug ? fmt(x.sug, true) : "Any time") + row("Final deadline", x => x.fin ? fmt(x.fin, true) : "Check") +
    row("Fit", x => fitHtml(x.fit)) + row("Website", x => x.web ? `<a href="https://${esc(x.web)}" target="_blank" rel="noopener">${esc(x.web)} ↗</a>` : "—") + `</tbody>`;
  $("#cmpOverlay").hidden = false; $("#cmpClose").focus();
});
$("#cmpClose").addEventListener("click", () => { $("#cmpOverlay").hidden = true; });
$("#cmpOverlay").addEventListener("click", e => { if (e.target.id === "cmpOverlay") $("#cmpOverlay").hidden = true; });

/* Term popover */
let popTerm = "";
document.addEventListener("click", e => {
  const t = e.target.closest(".term");
  if (t) { e.preventDefault(); e.stopPropagation(); const g = GLOSS.find(x => x[0] === t.dataset.term); if (!g) return; popTerm = g[0]; $("#popT").textContent = g[0]; $("#popD").textContent = g[1]; $("#pop").hidden = false; return; }
  if (!e.target.closest("#pop") && !$("#pop").hidden) $("#pop").hidden = true;
}, true);
$("#popClose").addEventListener("click", () => { $("#pop").hidden = true; });
$("#popMore").addEventListener("click", () => {
  $("#pop").hidden = true; show("unis"); ui.gq = ""; $("#gq").value = ""; setSub("guide");
  const el = document.getElementById("gl-" + domId(popTerm)); if (el) { $$(".gloss .hit").forEach(x => x.classList.remove("hit")); el.classList.add("hit"); scrollToEl(el); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { $("#pop").hidden = true; $("#cmpOverlay").hidden = true; }
  if (e.key === "/" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); show("unis"); setSub("prog"); $("#q").focus(); }
});

/* ===================== ROADMAP ===================== */
const AX0 = "2026-10-01", AX1 = "2027-09-30";
const axPct = s => { const a = toDate(AX0), b = toDate(AX1), d = Math.min(Math.max(toDate(s), a), b); return ((d - a) / (b - a) * 100).toFixed(2) + "%"; };
const ROW_ORDER = ["Passport","IELTS","SAT","Documents & essays","Applications"];
function renderGantt(){
  const tasks = allTasks(), rows = new Map();
  tasks.forEach(t => { const k = t.row || "Other"; if (!rows.has(k)) rows.set(k, []); rows.get(k).push(t); });
  const rank = k => { const i = ROW_ORDER.indexOf(k); if (i >= 0) return i; if (k === "Offer, visa & departure") return 900; if (k === "Your own tasks") return 950; if (k === "From Tashkent") return 850; const j = ORDER.indexOf(k); return j >= 0 ? 100 + (tierOf(k) * 50) + j : 800; };
  const keys = [...rows.keys()].sort((a,b) => rank(a) - rank(b));
  let months = "", gl = "";
  for (let i = 0; i < 12; i++) { const d = new Date(2026, 9 + i, 1), s = isoOf(d); months += `<span class="${i % 2 ? "odd" : ""}" style="left:${axPct(s)}">${d.toLocaleDateString("en-GB",{month:"short"})}${d.getMonth() === 0 ? " ’" + String(d.getFullYear()).slice(2) : ""}</span>`; gl += `<i class="g-grid" style="left:${axPct(s)}"></i>`; }
  const todayLine = daysTo(AX0) <= 0 && daysTo(AX1) >= 0 ? `<i class="g-today" style="left:${axPct(TODAY_ISO)}" title="Today"></i>` : "";
  const html = keys.map(k => {
    const list = rows.get(k), open = list.filter(t => !isClosed(t)), use = open.length ? open : list;
    const sugs = use.map(t => t.suggest).filter(Boolean).sort(), fins = use.map(t => t.final).filter(Boolean).sort();
    const starts = use.map(t => t.suggest || t.final).filter(Boolean).sort();
    if (!starts.length) return "";
    const start = starts[0], end = fins.length ? fins[fins.length-1] : (sugs.length ? sugs[sugs.length-1] : start), sug = sugs[0] || null, fin = fins.length ? fins[fins.length-1] : null;
    const done = !open.length, t1 = ORDER.includes(k) && tierOf(k) === 1, label = ORDER.includes(k) ? DISPLAY(k) : k;
    const sub = done ? `<span class="dn">Done ✓</span>` : `<span>${sug ? "Suggested " + fmtShort(sug) : "Any time"} · Final ${fin ? fmtShort(fin) : "check"}</span>`;
    const left = axPct(start), right = axPct(end);
    return `<div class="g-row ${done ? "done" : ""} ${t1 ? "t1" : ""}" title="${open.length} open of ${list.length} task${list.length === 1 ? "" : "s"}"><div class="g-lab"><b>${esc(label)}</b>${sub}</div><div class="g-track" role="img" aria-label="${esc(label)}: suggested ${sug ? fmt(sug) : "any time"}, final ${fin ? fmt(fin) : "check"}">${gl}${todayLine}<i class="g-win" style="left:${left};width:max(6px,calc(${right} - ${left}))"></i>${fin ? `<i class="g-fin" style="left:${axPct(fin)}" title="Final ${fmt(fin)}"></i>` : ""}${sug ? `<i class="g-sug" style="left:${axPct(sug)}" title="Suggested ${fmt(sug)}"></i>` : ""}</div></div>`;
  }).join("");
  $("#gantt").innerHTML = `<div class="g-axis"><div></div><div class="g-months">${months}</div></div>` + html;
}
function renderSat(){
  const uses = SAT_USES.filter(u => tierOf(u[2]) <= 2);
  $("#satGrid").innerHTML = SAT_DATES.map(d => {
    const past = daysTo(d.test) < 0, ready = addDays(d.scores, 5);
    const ok = uses.filter(u => ready <= u[1]), no = uses.filter(u => ready > u[1]);
    const cur = state.satPick === d.id, all = ok.length === uses.length;
    return `<div class="satc ${past ? "past" : ""}" aria-current="${cur}">${d.id === "dec" ? '<span class="tag a rec">Recommended</span>' : ""}<div class="dt">${fmt(d.test, true)}</div><div class="meta">Register by ${fmt(d.reg)}<br>Scores ≈ ${fmt(d.scores)}</div><div class="reach">${all ? `Reaches all ${uses.length} deadlines` : `Reaches ${ok.length} of ${uses.length} deadlines`}</div>${all ? `<p class="small muted">Every Tier 1–2 deadline that uses the SAT.</p>` : `<ul>${ok.map(u => `<li class="y">${esc(u[0])}</li>`).join("")}</ul><details class="small"><summary class="faint" style="cursor:pointer">Too late for ${no.length}</summary><ul style="margin-top:6px">${no.map(u => `<li class="n">${esc(u[0])}</li>`).join("")}</ul></details>`}${past ? "" : `<button type="button" class="btn ${cur ? "" : "ghost"} sm" data-sat="${d.id}" aria-pressed="${cur}">${cur ? "Planned ✓" : "Plan this sitting"}</button>`}</div>`;
  }).join("");
  const p = satPick();
  $("#satAdvice").textContent = p ? `Recommended: 5 December (register by 20 November). Its scores reach every main-goal deadline that uses the SAT, including Caltech's 31 December cut-off, except UT Austin and Texas A&M (1 December): for those two, sit 7 November (register by 23 October) or ask whether they accept later scores. Keep 6 March as a retake for Türkiye, Hong Kong's later rounds and US rolling admissions. Your plan: ${fmt(p.test)}.` : "No SAT planned. CUHK, HKUST, PolyU and CityU then lack national-exam evidence, and most Ivies, METU, Koç and Aalto need it.";
  $("#passSat .s").textContent = p ? "Planned sitting: " + fmt(p.test) : "Not planned";
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-sat]"); if (!b) return;
  const prev = state.satPick; state.satPick = b.dataset.sat; persist(); renderAll();
  toast("SAT plan updated: " + fmt(satPick().test), () => { state.satPick = prev; persist(); renderAll(); });
});
$("#satNone").addEventListener("click", () => { const prev = state.satPick; state.satPick = "none"; persist(); renderAll(); toast("SAT removed from your plan", () => { state.satPick = prev; persist(); renderAll(); }); });
function renderChart(){
  const x0 = 2027.5, x1 = 2032.6, pct = v => ((v - x0) / (x1 - x0) * 100).toFixed(2) + "%";
  $("#tchart").innerHTML = TL.map(([l,sub,fs,fe,ds,de]) => `<div class="trow"><div class="lab"><b>${esc(l)}</b><span class="muted small">${esc(sub)}</span></div><div class="track" role="img" aria-label="${esc(l)}: ${esc(sub)}">${fs !== null ? `<div class="seg-f" style="left:${pct(fs)};width:calc(${pct(fe)} - ${pct(fs)})"></div>` : ""}<div class="seg-d" style="left:${pct(ds)};width:calc(${pct(de)} - ${pct(ds)})"></div></div></div>`).join("") + `<div class="axis">${[2028,2029,2030,2031,2032].map(y => `<span style="left:${pct(y)}">${y}</span>`).join("")}</div>`;
}
let mf = "both", mPast = false;
$$("#mFilter button").forEach(b => b.addEventListener("click", () => { mf = b.dataset.mf; $$("#mFilter button").forEach(x => x.setAttribute("aria-pressed", x === b)); renderMonths(); }));
$("#mPast").addEventListener("click", e => { mPast = !mPast; e.currentTarget.setAttribute("aria-pressed", mPast); renderMonths(); });
function monthItems(includePast){
  const items = [];
  if (mf !== "keys") allTasks().forEach(t => {
    const done = isClosed(t);
    if (t.suggest && t.suggest !== t.final) items.push({date:t.suggest, kind:"sug", title:t.title, tag:"Suggested", done, country:t.country, detail:t.detail});
    if (t.final) items.push({date:t.final, kind:"fin", title:t.title, tag:"Final deadline", done, country:t.country, detail:t.detail});
  });
  if (mf !== "tasks") EV.forEach(([date,title,kind,c]) => { if (!c || tierOf(c) <= 3) items.push({date, kind:kind === "risk" ? "risk" : "key", title, tag:kind === "risk" ? "Hard limit" : "Key date", done:false, country:c, detail:""}); });
  return items.filter(i => includePast || daysTo(i.date) >= 0).sort((a,b) => a.date.localeCompare(b.date) || (a.kind === "fin" ? -1 : 1));
}
function renderMonths(){
  const months = {}; monthItems(mPast).forEach(i => (months[i.date.slice(0,7)] ||= []).push(i));
  $("#months").innerHTML = Object.keys(months).sort().map(k => {
    const its = months[k], d = toDate(k + "-01"), nf = its.filter(i => i.kind === "fin" && !i.done).length, ns = its.filter(i => i.kind === "sug" && !i.done).length;
    return `<div class="month"><div><h3>${d.toLocaleDateString("en-GB",{month:"long", year:"numeric"})}</h3><div class="sub">${ns} suggested · ${nf} final</div></div><ul class="evs">${its.map(i => `<li class="ev k-${i.kind} ${i.done ? "done" : ""} ${daysTo(i.date) < 0 ? "past" : ""}"><span class="d">${fmtShort(i.date)}</span><span><span class="t">${esc(i.title)}</span>${i.country ? `<div class="x">${esc(DISPLAY(i.country))} · ${TIER_NAME[tierOf(i.country)] || ""}</div>` : ""}</span><span class="tg"><span class="tag ${i.kind === "fin" ? "y" : i.kind === "sug" ? "a" : ""}">${i.done ? "Done" : i.tag}</span></span></li>`).join("")}</ul></div>`;
  }).join("") || `<div class="empty">Nothing to show for this filter.</div>`;
}
function renderRoadmap(){ renderGantt(); renderSat(); renderMonths(); }

/* ===================== CHECKLIST ===================== */
let tf = "all";
$$("#tFilter button").forEach(b => b.addEventListener("click", () => { tf = b.dataset.tf; $$("#tFilter button").forEach(x => x.setAttribute("aria-pressed", x === b)); renderChecklist(); }));
const tfPass = t => tf === "all" || (tf === "t1" && t.country && tierOf(t.country) === 1) || (tf === "prep" && (t.cat === "admin" || t.cat === "test")) || (tf === "apps" && (t.cat === "direct" || t.cat === "fnd"));
function taskTags(t){ const tm = timing(t); return `<div class="tags"><span class="tag">${CAT[t.cat] || "Task"}</span>${t.country ? `<span class="tierpill ${tierClass(tierOf(t.country))}">${esc(DISPLAY(t.country))}</span>` : ""}${t.ref ? `<button type="button" class="linkbtn" data-goto="${t.ref}">Details</button>` : ""}<span class="state ${tm.cls}">${tm.text}</span></div>`; }
function taskRow(t){
  return `<div class="task"><input type="checkbox" data-done="${esc(t.id)}" aria-label="Mark done: ${esc(t.title)}"><div><div class="t">${esc(t.title)}</div>${t.detail ? `<div class="x">${T(t.detail)}</div>` : ""}${taskTags(t)}</div><div class="side">${whenHtml(t)}<div><button type="button" class="iconbtn" data-skip="${esc(t.id)}">Not relevant</button>${t.src === "custom" ? `<button type="button" class="iconbtn" data-del="${esc(t.id)}">Delete</button>` : ""}</div></div></div>`;
}
function renderChecklist(){
  const tasks = allTasks(), openAll = tasks.filter(t => !isClosed(t)).sort(sortTasks), closed = tasks.filter(isClosed);
  const open = openAll.filter(tfPass);
  const pct = tasks.length ? Math.round(closed.length / tasks.length * 100) : 0;
  $("#pDone").textContent = closed.length; $("#pOpen").textContent = openAll.length; $("#pPct").textContent = pct + "% complete"; $("#pBar").style.width = pct + "%";
  const top = open.slice(0, 3);
  $("#next3").innerHTML = top.length ? top.map((t,i) => `<div class="task-card"><span class="eyebrow">Next ${i+1} · ${CAT[t.cat] || "Task"}${t.country ? " · " + esc(DISPLAY(t.country)) : ""}</span><h3>${esc(t.title)}</h3>${t.detail ? `<p class="small muted">${T(t.detail)}</p>` : ""}${whenHtml(t)}<span class="state ${timing(t).cls}">${timing(t).text}</span><div class="acts"><button type="button" class="btn sm" data-done="${esc(t.id)}">Mark done</button><button type="button" class="btn ghost sm" data-skip="${esc(t.id)}">Not relevant</button>${t.ref ? `<button type="button" class="btn ghost sm" data-goto="${t.ref}">Details</button>` : ""}</div></div>`).join("") : `<div class="empty">Nothing here. Save more programmes, change the filter, or add your own task below.</div>`;
  const rest = open.slice(3), d = t => t.suggest ? daysTo(t.suggest) : t.final ? daysTo(t.final) : null;
  const groups = [
    ["Next two weeks", "Suggested within 14 days, or the suggested date has passed", t => d(t) !== null && d(t) <= 14],
    ["Within two months", "", t => d(t) !== null && d(t) > 14 && d(t) <= 60],
    ["Later in the year", "", t => d(t) !== null && d(t) > 60],
    ["Any time", "No fixed date", t => d(t) === null]
  ];
  $("#tGroups").innerHTML = groups.map(([name, sub, fn]) => { const its = rest.filter(fn); return its.length ? `<div class="tgroup"><h3>${name} <span class="n">${its.length}</span></h3>${sub ? `<div class="gs">${sub}</div>` : ""}${its.map(taskRow).join("")}</div>` : ""; }).join("");
  $("#doneCount").textContent = `(${closed.length})`;
  $("#doneList").innerHTML = closed.length ? closed.map(t => `<div class="task" style="grid-template-columns:auto minmax(0,1fr) auto"><span class="tag ${state.done[t.id] ? "g" : ""}">${state.done[t.id] ? "Done" : "Skipped"}</span><div><div class="t" style="color:var(--muted)">${esc(t.title)}</div>${state.done[t.id] ? `<div class="x">Completed ${fmt(state.done[t.id])}</div>` : ""}</div><div><button type="button" class="iconbtn" data-reopen="${esc(t.id)}">Reopen</button></div></div>`).join("") : `<p class="small muted">Nothing completed yet.</p>`;
  $("#nTasks").textContent = openAll.length;
  $("#bPlan").innerHTML = openAll.length + '<span class="lgl"> to do</span>';
}
document.addEventListener("click", e => {
  const dn = e.target.closest("button[data-done]"), sk = e.target.closest("[data-skip]"), ro = e.target.closest("[data-reopen]"), dl = e.target.closest("[data-del]");
  if (dn) { const id = dn.dataset.done; state.done[id] = TODAY_ISO; persist(); renderAll(); toast("Done. Moved to Completed", () => { delete state.done[id]; persist(); renderAll(); }); }
  else if (sk) { const id = sk.dataset.skip; state.skip[id] = TODAY_ISO; persist(); renderAll(); toast("Marked not relevant", () => { delete state.skip[id]; persist(); renderAll(); }); }
  else if (ro) { const id = ro.dataset.reopen; delete state.done[id]; delete state.skip[id]; persist(); renderAll(); }
  else if (dl) { const id = dl.dataset.del, old = state.custom.slice(); state.custom = state.custom.filter(c => c.id !== id); persist(); renderAll(); toast("Task deleted", () => { state.custom = old; persist(); renderAll(); }); }
});
document.addEventListener("change", e => {
  const cb = e.target.closest("input[data-done]"); if (!cb) return;
  const id = cb.dataset.done;
  if (cb.checked) { state.done[id] = TODAY_ISO; toast("Done. Moved to Completed", () => { delete state.done[id]; persist(); renderAll(); }); } else delete state.done[id];
  persist(); renderAll();
});
$("#addForm").addEventListener("submit", e => {
  e.preventDefault(); const t = $("#aText").value.trim(); if (!t) return;
  let s = $("#aSug").value || null, f = $("#aFin").value || null; if (s && f && s > f) [s, f] = [f, s];
  state.custom.push({id:"c:" + Date.now().toString(36), title:t, suggest:s, final:f});
  $("#aText").value = ""; $("#aSug").value = ""; $("#aFin").value = ""; persist(); renderAll(); toast("Task added");
});
$("#goUnis").addEventListener("click", () => { go("unis"); setSub("prog"); });
let resetArmed = null;
$("#resetAll").addEventListener("click", e => {
  const b = e.currentTarget;
  if (!resetArmed) { b.textContent = "Press again to erase your ticks, tiers and shortlist"; resetArmed = setTimeout(() => { resetArmed = null; b.textContent = "Start over"; }, 5000); return; }
  clearTimeout(resetArmed); resetArmed = null; b.textContent = "Start over";
  const old = JSON.stringify(state); state = freshState(); state.seenIntro = true; syncSit(); persist(); renderAll();
  toast("Everything was reset", () => { state = normalise(JSON.parse(old)); syncSit(); persist(); renderAll(); });
});

/* ===================== DOWNLOADS ===================== */
const csvCell = v => `"${String(v ?? "").replace(/"/g, '""')}"`;
const usDate = s => { const [y,m,d] = s.split("-"); return `${m}/${d}/${y}`; };
function planCSV(){
  const rows = [["Subject","Start Date","All Day Event","Description"]];
  allTasks().filter(t => !isClosed(t)).sort(sortTasks).forEach(t => {
    if (t.suggest && t.suggest !== t.final && daysTo(t.suggest) >= -1) rows.push(["Suggested: " + t.title, usDate(t.suggest), "True", (t.detail || "") + (t.final ? " | Final deadline " + fmt(t.final) : "")]);
    if (t.final && daysTo(t.final) >= -1) rows.push(["FINAL deadline: " + t.title, usDate(t.final), "True", t.detail || ""]);
  });
  EV.forEach(([date,title,kind,c]) => { if (daysTo(date) >= -1 && (!c || tierOf(c) <= 3)) rows.push([(kind === "risk" ? "Hard limit: " : "Key date: ") + title, usDate(date), "True", c ? DISPLAY(c) : ""]); });
  return rows.map(r => r.map(csvCell).join(",")).join("\r\n");
}
function shortlistCSV(){
  const rows = [["Name","Kind","Country","City","Status","Chance","Still needed","Suggested","Final deadline","Application window","Website"]];
  state.saved.filter(id => byId[id]).forEach(id => { const x = byId[id], e = evalItem(x); rows.push([x.name, x.kind === "deg" ? "Degree" : "Foundation", x.country === "Uzbekistan" ? "Uzbekistan" : DISPLAY(x.country), x.city, STATUS[e.s][0], chanceOf(x, e) ? CH[chanceOf(x, e)][0] : "", e.miss.join("; "), x.sug || "", x.fin || "", x.kind === "deg" ? x.win : x.apply, x.web ? "https://" + x.web : ""]); });
  return "﻿" + rows.map(r => r.map(csvCell).join(",")).join("\r\n");
}
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-dl]"); if (!b || !dlApi) return;
  const kind = b.dataset.dl;
  try {
    await dlApi.save(kind === "plan" ? {filename:"admissions-plan-google-calendar.csv", data:planCSV()} : {filename:"admissions-shortlist.csv", data:shortlistCSV()});
    toast(kind === "plan" ? "Saved. In Google Calendar: Settings › Import & export › Import" : "Shortlist saved");
  } catch(err) {
    const code = err && err.code;
    if (code === "declined") toast("Download cancelled");
    else if (code === "rate_limited") toast("Another download prompt is already open");
    else { toast("Downloads aren't available here"); $$("[data-dl]").forEach(x => x.hidden = true); dlApi = null; }
  }
});

/* ===================== TOAST ===================== */
let toastTimer = null, undoFn = null;
function toast(msg, undo){ $("#toastMsg").textContent = msg; undoFn = undo || null; $("#toastUndo").hidden = !undo; $("#toast").hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { $("#toast").hidden = true; undoFn = null; }, 5000); }
$("#toastUndo").addEventListener("click", () => { if (undoFn) undoFn(); undoFn = null; $("#toast").hidden = true; });

/* ===================== MY LIST ===================== */
const APPST = [["","Not started"],["prep","Preparing"],["sent","Submitted"],["offer","Offer"],["wait","Waitlisted"],["no","Refused"]];
const SENT = ["sent","offer","wait","no"];
const daysLeft = f => { const n = daysTo(f); return n < 0 ? "passed" : n === 0 ? "today" : `${n} day${n === 1 ? "" : "s"} left`; };
const usd = n => "$" + n.toLocaleString("en-US");
const feeSumOf = list => list.reduce((t,x) => { const f = feeOf(x); t.all += f.usd; if (f.zero) t.save += f.usd; return t; }, {all:0, save:0});
ui.sls = (() => { try { return localStorage.getItem("atlas.sls") || "fin"; } catch(e) { return "fin"; } })();
function renderList(){
  renderBalance(); renderFees();
  const byC = (a,b) => tierOf(a.country) - tierOf(b.country) || ORDER.indexOf(a.country) - ORDER.indexOf(b.country) || a.name.localeCompare(b.name);
  const byF = (a,b) => (a.fin || "9999").localeCompare(b.fin || "9999") || byC(a,b);
  const sl = state.saved.filter(id => byId[id]).map(id => byId[id]).sort(ui.sls === "ctry" ? byC : byF);
  $$("#slSort button").forEach(b => b.setAttribute("aria-pressed", b.dataset.sls === ui.sls));
  $("#slCount").textContent = sl.length ? `(${sl.length})` : "";
  const fee = feeSumOf(sl), nSent = sl.filter(x => SENT.includes(state.apps[x.id])).length, nOffer = sl.filter(x => state.apps[x.id] === "offer").length;
  $("#slSum").innerHTML = sl.length ? `<span><b>${nSent}</b> of ${sl.length} submitted</span>${nOffer ? `<span><b>${nOffer}</b> offer${nOffer === 1 ? "" : "s"}</span>` : ""}<span>Fees ≈ <b>${usd(fee.all)}</b>${fee.save ? ` · ${usd(fee.save)} of it can be $0` : ""}</span><button type="button" class="linkbtn" data-gofees>How to pay less</button>` : "";
  $("#shortlist").innerHTML = sl.length ? sl.map(x => {
    const id = x.id, e = evalItem(x), f = feeOf(x), st = state.apps[id] || "", soon = x.fin && daysTo(x.fin) >= 0 && daysTo(x.fin) <= 21 && !SENT.includes(st);
    return `<div class="task app-row" data-st="${st}"><div class="app-main">
      <div class="app-top"><button type="button" class="linkbtn app-name" data-goto="${id}">${esc(x.name)}</button>${chTag(x, e)}${aidTag(x)}</div>
      <div class="x">${x.country === "Uzbekistan" ? "Tashkent" : esc(DISPLAY(x.country))}${x.city ? " · " + esc(x.city) : ""}${x.web ? ` · <a href="https://${esc(x.web)}" target="_blank" rel="noopener">${esc(x.web)}</a>` : ""}</div>
      <div class="app-facts"><span class="${soon ? "hot" : ""}"><i>Final</i>${x.fin ? `${fmt(x.fin)} <span class="faint">· ${daysLeft(x.fin)}</span>` : "Rolling or not set"}</span><span><i>Fee</i>${f.usd === 0 ? '<span class="okc">Free</span>' : esc(f.f.replace(/ \(.*\)$/, "")) + (f.w ? ' <span class="okc">· can be $0</span>' : "")}</span>${e.s === "closed" ? "" : e.miss.length ? `<span class="need"><i>Still needed</i>${esc(e.miss.join(" · "))}</span>` : `<span><i>Eligibility</i><span class="okc">Nothing missing</span></span>`}</div>
    </div><div class="app-side">${chip(e.s)}<select class="appst" data-appst="${id}" aria-label="Application status for ${esc(x.name)}">${APPST.map(([k,l]) => `<option value="${k}" ${k === st ? "selected" : ""}>${l}</option>`).join("")}</select><button type="button" class="iconbtn" data-save="${id}">Remove</button></div></div>`;
  }).join("") : `<div class="empty">No saved programmes yet. <button type="button" class="linkbtn" data-go="unis">Browse universities</button> and press Save on the ones you like, or save a country's suggested shortlist in Countries.</div>`;
  $("#bList").textContent = sl.length ? "★ " + sl.length : "";
}
$("#slSort").addEventListener("click", e => { const b = e.target.closest("[data-sls]"); if (!b) return; ui.sls = b.dataset.sls; try { localStorage.setItem("atlas.sls", ui.sls); } catch(err) {} renderList(); });

/* ===================== HOME ===================== */
const dayBox = d => { const x = toDate(d); return `<span class="dd"><b>${x.getDate()}</b><span>${x.toLocaleDateString("en-GB", {month:"short"})}</span></span>`; };
function renderHome(){
  $("#hDate").textContent = TODAY.toLocaleDateString("en-GB", {weekday:"long", day:"numeric", month:"long", year:"numeric"});
  const tasks = allTasks().filter(t => !isClosed(t)).sort(sortTasks), top = tasks.slice(0, 3);
  $("#hNext").innerHTML = `<div class="hh"><h3>Up next</h3><button type="button" class="linkbtn" data-go="plan" data-pvgo="tasks">All ${tasks.length} tasks</button></div>` + (top.length ? `<ol class="hlist">${top.map(t => { const tm = timing(t); return `<li><div class="hl"><b>${esc(t.title)}</b><span class="faint small">Suggested ${t.suggest ? fmt(t.suggest) : "any time"} · final ${t.final ? fmt(t.final) : "not set"}</span><span class="state ${tm.cls}">${tm.text}</span></div><button type="button" class="btn ghost sm" data-done="${esc(t.id)}">Done</button></li>`; }).join("")}</ol>` : `<p class="muted small">Nothing to do right now.</p>`);
  const sl = state.saved.filter(id => byId[id]).map(id => byId[id]);
  const dl = sl.filter(x => x.fin && daysTo(x.fin) >= 0 && !SENT.includes(state.apps[x.id]) && evalItem(x).s !== "closed").sort((a,b) => a.fin.localeCompare(b.fin)).slice(0, 5).map(x => [x.fin, x.name, DISPLAY(x.country), x.id]);
  const ev = EV.filter(([d,,,c]) => daysTo(d) >= 0 && (!c || tierOf(c) <= 2)).sort((a,b) => a[0].localeCompare(b[0])).slice(0, 5).map(([d,t,,c]) => [d, t, c ? DISPLAY(c) : "", ""]);
  const rows = dl.length ? dl : ev;
  $("#hDead").innerHTML = `<div class="hh"><h3>${dl.length ? "Your next deadlines" : "Key dates ahead"}</h3><button type="button" class="linkbtn" data-go="plan" data-pvgo="time">Timeline</button></div><ul class="dlist">${rows.map(([d,t,c,id]) => `<li>${dayBox(d)}<span class="dm">${id ? `<button type="button" class="linkbtn" data-goto="${id}">${esc(t)}</button>` : `<span>${esc(t)}</span>`}<span class="faint small">${esc(c)}${c ? " · " : ""}${daysLeft(d)}</span></span></li>`).join("")}</ul>${dl.length ? "" : `<p class="faint small">Save universities to see their own deadlines here.</p>`}`;
  const live = sl.filter(x => evalItem(x).s !== "closed").map(x => ({x, e:evalItem(x)})), n = chCount(live), fee = feeSumOf(sl);
  const nst = k => sl.filter(x => (k === "sent" ? SENT.includes(state.apps[x.id]) : state.apps[x.id] === k)).length;
  $("#hList").innerHTML = `<div class="hh"><h3>My list</h3><button type="button" class="linkbtn" data-go="list">Open My list</button></div>` + (sl.length ? `<div class="kpis"><div><b>${sl.length}</b><span>saved</span></div><div><b>${nst("prep")}</b><span>preparing</span></div><div><b>${nst("sent")}</b><span>submitted</span></div><div><b>${usd(fee.all)}</b><span>fees${fee.save ? ` · ${usd(fee.save)} waivable` : ""}</span></div></div>${balBar(n)}<div class="legend small">${CH_KEYS.slice().reverse().map(k => `<span><i class="lg ${CH[k][1]}"></i>${CH[k][0]} ${n[k]}</span>`).join("")}</div>` : `<p class="muted small">Nothing saved yet. Save universities while browsing, or a country's suggested shortlist.</p><button type="button" class="btn sm" data-go="unis" style="justify-self:start">Browse universities</button>`);
  const cs = ORDER.filter(c => SCORE[c]).sort((a,b) => scoreOf(b) - scoreOf(a)).slice(0, 5);
  $("#hCtry").innerHTML = `<div class="hh"><h3>Best countries for you</h3><button type="button" class="linkbtn" data-scoreall>Scorecard</button></div><ol class="clist">${cs.map((c,i) => `<li><button type="button" class="crow" data-sc="${esc(c)}"><span class="rk">${i + 1}</span><span class="cn"><b>${esc(DISPLAY(c))}</b><span class="faint small">${esc(SCORE[c].why)}</span></span><span class="tot"><b>${scoreOf(c)}</b><i><u style="width:${scoreOf(c)}%"></u></i></span></button></li>`).join("")}</ol>`;
  const t1 = new Set(ORDER.filter(c => tierOf(c) === 1));
  $("#hFields").innerHTML = `<div class="hh"><h3>Explore by field</h3><span class="faint small">Programmes open to you in your main-goal countries</span></div><div class="ftiles">${Object.keys(FIELDS).map(k => { const m = ITEMS.filter(x => t1.has(x.country) && x.fields.includes(k) && evalItem(x).s !== "closed").length; return `<button type="button" class="ftile" data-fieldgo="${k}" data-lane="1"><b>${FIELDS[k].s}</b><span>${m} open</span></button>`; }).join("")}</div>`;
}
document.addEventListener("click", e => { if (!e.target.closest("[data-scoreall]")) return; show("unis"); setSub("strat"); $("#scoreBox").open = true; setTimeout(() => scrollToEl($("#scoreBox")), 30); });

/* ===================== PLAN VIEWS ===================== */
ui.pv = (() => { if (location.hash === "#road") return "time"; try { return localStorage.getItem("atlas.pv") || "tasks"; } catch(e) { return "tasks"; } })();
function setPv(v){ ui.pv = v === "time" ? "time" : "tasks"; try { localStorage.setItem("atlas.pv", ui.pv); } catch(e) {} $$("#planNav button").forEach(b => b.setAttribute("aria-selected", b.dataset.pv === ui.pv)); $("#vTasks").hidden = ui.pv !== "tasks"; $("#vTime").hidden = ui.pv !== "time"; }
$("#planNav").addEventListener("click", e => { const b = e.target.closest("[data-pv]"); if (b) setPv(b.dataset.pv); });
document.addEventListener("click", e => { const b = e.target.closest("[data-pvgo]"); if (b) setPv(b.dataset.pvgo); });
setPv(ui.pv);

/* ===================== BOOT ===================== */
(function(){ const n = {v:0,p:0,s:0}; U.forEach(x => { if (x.ver && n[x.ver.st] !== undefined) n[x.ver.st]++; }); ["v","p","s"].forEach(k => { const el = document.getElementById("nDv" + k.toUpperCase()); if (el) el.textContent = n[k]; }); })();
(function(){ const el = document.getElementById("lede"); if (el) el.textContent = `${U.length.toLocaleString("en-US")} universities and ${F.length} foundation routes in ${ORDER.length} countries, all open to you now or after one step: a score, a document or a bridge year. Each has a suggested date and a final deadline.`; })();
(function(){ const b = document.getElementById("toTop"); if (!b) return; let raf = 0; const upd = () => { raf = 0; b.hidden = window.scrollY < 1400 || !document.getElementById("cmpBar").hidden; }; window.addEventListener("scroll", () => { if (!raf) raf = requestAnimationFrame(upd); }, {passive:true}); b.addEventListener("click", () => window.scrollTo({top:0, behavior: smooth()})); })();
(function(){ const b = $("#fBtn"), p = $("#fPanel"); if (!b) return;
  b.addEventListener("click", () => { p.hidden = !p.hidden; b.setAttribute("aria-expanded", !p.hidden); });
  $("#fDone").addEventListener("click", () => { p.hidden = true; b.setAttribute("aria-expanded", "false"); scrollToEl($("#cIndex")); }); })();
function updFCount(){ const n = (ui.kind !== "both") + !!ui.chance + !!ui.aid + ["saved","rank","spring","free"].filter(k => ui[k]).length, el = $("#fCount"); if (!el) return; el.hidden = !n; el.textContent = n; }
function renderAll(){ sitSummary(); renderUnis(); renderRoadmap(); renderChecklist(); renderList(); renderHome(); }
syncSit(); renderChart(); renderAll();
