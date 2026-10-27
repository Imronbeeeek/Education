/* ---------- Personal list (v10): keep only what you can apply to now or become eligible for ----------
   Removed: every entry closed to you (citizenship, gender, age or certificate-age limits, 12-year rules,
   DTM results), plus three that are effectively impossible (NUS and KOREATECH state 12 years of school;
   Iceland's small universities teach in Icelandic and need matriculation equivalence). */
const PRUNE_EXTRA = ["sg1", "k_koreatech", "i_more"];
const PRUNED = [];
for (let i = U_RAW.length - 1; i >= 0; i--) {
  const r = U_RAW[i];
  if (r[8].split(";").includes("D") || PRUNE_EXTRA.includes(r[0])) { PRUNED.unshift([r[0], r[1], r[2]]); U_RAW.splice(i, 1); }
}
/* "More" lists: drop names you cannot apply to */
const ALSO_CUT = {lv3:" (closed to you: National Defence Academy)", lt4:" (closed to you: General Jonas Žemaitis Military Academy)", sa2c:"Princess Nourah (women), "};
U_RAW.forEach(r => { const cut = ALSO_CUT[r[0]]; if (cut) r[16] = r[16].replace(cut, ""); });
/* Countries left with nothing you can apply to disappear from the lists */
const PRUNED_COUNTRIES = ORDER.filter(c => !U_RAW.some(r => r[1] === c) && !F_RAW.some(f => f[3] === c));
PRUNED_COUNTRIES.forEach(c => { ORDER.splice(ORDER.indexOf(c), 1); delete DEEP[c]; delete SCORE[c]; });
/* Strategy picks that pointed at removed entries */
Object.values(DEEP).forEach(d => Object.keys(d.picks || {}).forEach(k => { d.picks[k] = d.picks[k].filter(id => U_RAW.some(r => r[0] === id) || F_RAW.some(f => f[0] === id)); }));
