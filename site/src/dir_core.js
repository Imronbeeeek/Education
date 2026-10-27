/* ===================== v7 · DIRECTORIES (8 Oct 2026) =====================
   Compact rows expanded into U_RAW. Each directory row gets a chance band (SEL)
   and a segment (SEG) used to split big countries into sections.
   Directory dates are typical for the institution type: confirm on the website. */
const SEG = {};
const DIRN = {};   /* country -> number of rows added by the directories */
const fitOfSel = s => ({x:3, h:3, m:4, o:4}[s] || 3);
function addRows(country, dlt, rows, base){
  rows.forEach(r => {
    const [id, name, city, type, band, sel, fields, courses, req, rule, dl, seg, web, also, fit] = r;
    const d = dlt[dl] || dlt._;
    const text = [base && base[seg] || "", rule || ""].filter(Boolean).join(" ");
    U_RAW.push([id, country, name, city, type, band, fields, courses, req || "", text, d[0], d[1], d[2], d[3], fit || fitOfSel(sel), web || "", also || ""]);
    if (sel) SEL[id] = sel;
    if (seg) SEG[id] = seg;
    DIRN[country] = (DIRN[country] || 0) + 1;
  });
}
function patchRows(map){
  const C = {name:2, city:3, type:4, band:5, fields:6, courses:7, req:8, rule:9, win:10, sug:11, fin:12, spring:13, fit:14, web:15, also:16};
  U_RAW.forEach(r => { const p = map[r[0]]; if (p) Object.entries(p).forEach(([k,v]) => { if (k === "sel") SEL[r[0]] = v; else if (k === "seg") SEG[r[0]] = v; else r[C[k]] = v; }); });
}
const segAll = (ids, seg) => ids.split(" ").forEach(id => SEG[id] = seg);

/* ---------- USA ---------- */
/* [id, name, city, control, band, sel, fields, strengths, test, IELTS, deadline code, segment, website, note] */
const US_DL = {
  E1:["EA/ED 1 Nov · RD ~1–5 Jan 2027","2026-12-18","2027-01-05",0],
  E15:["EA 1 Nov · RD ~15 Jan 2027","2026-12-18","2027-01-15",0],
  F1:["EA 1 Nov · RD ~1 Feb 2027","2027-01-15","2027-02-01",0],
  D1:["~1 Dec 2026","2026-11-20","2026-12-01",0],
  D15:["EA 1 Nov · RD ~15 Dec 2026","2026-12-05","2026-12-15",0],
  N15:["~15 Nov 2026","2026-11-08","2026-11-15",0],
  M1:["Priority ~1 Dec–15 Jan · final ~1 Mar 2027","2027-01-15","2027-03-01",0],
  R:["Rolling · priority ~1 Dec–1 Feb · international final ~1 Apr–1 Jun 2027 · January starts too","2027-01-15","2027-04-01",1],
  CSU:["Cal State application 1 Oct–1 Dec 2026","2026-11-20","2026-12-01",0],
  UC:["UC application 1–30 Nov 2026","2026-11-20","2026-11-30",0]
};
const US_TESTTXT = {R:"SAT or ACT required.", "R?":"SAT/ACT reported as required (confirm).", O:"Test-optional.", B:"SAT not used (test-blind).", C:"Test-optional for you (scores are required only below a GPA threshold)."};
const US_SATMIN = {x:1450, h:1350, m:1250, o:1100};
const US_DUO = {"6":105, "6.5":115, "7":120, "7.5":130};
function addUS(rows){
  rows.forEach(r => {
    const [id, name, city, ctrl, band, sel, fields, courses, test, eng, dl, seg, web, note] = r;
    const d = US_DL[dl] || US_DL.R;
    const req = test === "R" || test === "R?" ? "sat" + US_SATMIN[sel] : "";
    const rule = [US_TESTTXT[test] || "", eng ? `English: usually IELTS ${eng}+ or Duolingo ${US_DUO[eng] || 115}+ (check section minimums).` : "", note || ""].filter(Boolean).join(" ");
    U_RAW.push([id, "USA", name, city, ctrl, band, fields, courses, req, rule, d[0] + " (typical; confirm)", d[1], d[2], d[3], fitOfSel(sel), web || "", ""]);
    SEL[id] = sel; SEG[id] = seg; DIRN.USA = (DIRN.USA || 0) + 1;
  });
}

/* Segments for big countries (key, label) */
const SEGS = {
  "USA":[["ivy","Most selective"],["spr","Selective private"],["lac","Liberal arts colleges"],["flag","Public flagships & research"],["pub","Other public universities"],["pri","Other private universities"],["route","Special routes"]],
  "Canada":[["u15","Research-intensive"],["comp","Comprehensive"],["small","Smaller & regional"],["coll","Colleges"],["fr","French-language"]],
  "Spain":[["priv","Private (direct admission)"],["pub","Public (homologation + PCE)"]],
  "Hong Kong":[["ugc","Public (UGC-funded)"],["self","Self-financing"]],
  "China":[["jv","Sino-foreign & joint"],["top","Leading universities"],["more","More universities"],["med","Medicine (MBBS)"],["sch","Scholarships & Chinese-taught"]],
  "Türkiye":[["fdn","Foundation (private)"],["pub","Public"],["sch","Scholarships & closed"]],
  "France":[["bba","Business schools"],["tech","Engineering & tech"],["us","American-style"],["pub","Public universities (French)"],["cl","Closed"]],
  "Italy":[["us","US-accredited (2027)"],["pub","Public (after a bridge year)"],["priv","Private (after a bridge year)"],["art","Art & design"]],
  "Saudi Arabia":[["pub","Public (scholarship)"],["priv","Private & closed"]],
  "Australia":[["g8","Group of Eight"],["other","Other universities"]],
  "Netherlands":[["wo","Research universities"],["hbo","Applied sciences (direct)"]],
  "Sweden":[["big","Large universities"],["eng","Smaller, more English"]],
  "Finland":[["uni","Universities"],["uas","Applied sciences"]],
  "Germany":[["pub","Public universities"],["priv","Private universities"]],
  "UAE":[["loc","UAE universities"],["br","Branch campuses"],["cl","Closed"]],
  "Malaysia":[["pub","Public"],["priv","Private & branch campuses"]]
};
