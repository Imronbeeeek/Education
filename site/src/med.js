/* ---------- v14: no medicine. You are not applying to medicine, dentistry, pharmacy, nursing or health,
   so medicine-only schools go and the field disappears; universities that also teach your fields stay. ---------- */
const MED_CUT = ["l_lsmu"];   /* health-sciences university whose other "sciences" are pharmacy and veterinary */
const MED_RX = /\b(medicine|medical|mbbs|dentistry|pharmacy|nursing|health|pre-?health|pre-?medicine|physiotherapy|imat)\b/i;
const noMed = s => { if (!s || !MED_RX.test(s)) return s;
  const parts = s.split(/(,\s+|;\s+| · )/), keep = [];
  for (let i = 0; i < parts.length; i += 2) {
    const sep = i ? parts[i - 1] : "", sub = parts[i].split(/ and /).filter(t => !MED_RX.test(t) || /biomedical/i.test(t));
    if (sub.length) keep.push([sep, sub.join(" and ")]);
  }
  if (!keep.length) return s;
  const out = keep.map(([sep, t], j) => (j ? sep : "") + t).join("");
  return out.charAt(0).toUpperCase() + out.slice(1);
};
const MED_GONE = [];
for (let i = U_RAW.length - 1; i >= 0; i--) {
  const r = U_RAW[i], f = r[6].split(" ");
  if (MED_CUT.includes(r[0]) || (f.length && f.every(k => k === "med"))) { MED_GONE.unshift([r[0], r[1], r[2]]); U_RAW.splice(i, 1); continue; }
  if (f.includes("med")) r[6] = f.filter(k => k !== "med").join(" ");
  r[7] = noMed(r[7]);
}
for (let i = F_RAW.length - 1; i >= 0; i--) {
  const f = F_RAW[i], fl = (f[19] || "").split(" ");
  if (fl.length && fl.every(k => k === "med")) { MED_GONE.unshift([f[0], f[3], f[1]]); F_RAW.splice(i, 1); continue; }
  if (fl.includes("med")) f[19] = fl.filter(k => k !== "med").join(" ");
}
delete FIELDS.med; delete COURSES.med;
/* Row details that only mattered for medicine */
const MED_PATCH = {hu4:{win:"Rolling (entrance exam per university)"}, a_adelaide:{courses:"Engineering, sciences, business (Adelaide and UniSA merged in 2026)"}, n_whu:{courses:"Selected English-taught programmes; most in Chinese"}};
U_RAW.forEach(r => { const p = MED_PATCH[r[0]]; if (p && p.win) r[10] = p.win; if (p && p.courses) r[7] = p.courses; });
if (SEGS.China) { SEGS.China = SEGS.China.filter(s => s[0] !== "med"); Object.keys(SEG).forEach(id => { if (SEG[id] === "med") SEG[id] = "more"; }); }
Object.values(CI).forEach(c => ["deg","cost"].forEach(k => { if (c[k]) c[k] = c[k].replace(/\s*\((medicine|medical)[^)]*\)|\s*·\s*medicine \d+/gi, ""); }));
if (DEEP.Hungary) { DEEP.Hungary.read = ["Each university runs its own entrance test or interview (maths for engineering and computer science)."]; DEEP.Hungary.risk[0] = "<b>Recognition.</b> Corvinus, ELTE, BME, Debrecen, Szeged and Pécs are ranked; smaller universities need nostrification."; DEEP.Hungary.mix = {m:2, o:2}; }
/* Clean strategy picks and empty countries again */
Object.values(DEEP).forEach(d => Object.keys(d.picks || {}).forEach(k => { d.picks[k] = d.picks[k].filter(id => U_RAW.some(r => r[0] === id) || F_RAW.some(f => f[0] === id)); }));
ORDER.filter(c => !U_RAW.some(r => r[1] === c) && !F_RAW.some(f => f[3] === c)).forEach(c => { ORDER.splice(ORDER.indexOf(c), 1); delete DEEP[c]; delete SCORE[c]; PRUNED_COUNTRIES.push(c); });
