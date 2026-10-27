# Handoff: everything a new session needs

Written 27 Oct 2026 at the end of the first long working session (1–10 Oct 2026, plus this handoff). The owner deleted that chat. This file and the repo are now the record.

## 1. Where things stand
- **Research:** 17 strategy notes and 33 country files cover eligibility for an 11-year Uzbek Attestat (2022) in 33 countries, plus a deep dive on the USA.
- **Website:** "Imronbek's Admissions Atlas", version 22, live at https://claude.ai/artifact/9GGSnY86Wd3Dy6C3iCUVTz. It has 1,137 programme entries across the three country tiers. The USA has 441 detailed rows plus an index of 1,434 more colleges.
- **Last task finished:** confirming merit scholarships for international students at 251 US universities (note 17). 211 confirmed, 15 also give need-based aid, 11 give little or no aid, and 14 are still unconfirmed.
- **Saved list (17, unchanged from the default):**
  - USA: Columbia GS (us1), NYU (us6), us12 (a large-public-university row)
  - Canada: Alberta (ca1), Toronto (ca2)
  - Spain: IE (es1)
  - Hong Kong: HKBU (hk1), HKU (hk2), CUHK (hk3)
  - China: NYU Shanghai (cn3), CUHK-Shenzhen (cn6)
  - Türkiye: Koç (tr1), METU (tr3)
  - France: ESSEC Global BBA (fr1)
  - Italy: John Cabot (it3)
  - Qatar: CMU Qatar (qa1), Georgetown Qatar (qa2)
- **Settings saved on the site** (raw values from `saved-list-backup.json`): `satPick` = "dec" (December SAT); situation `fnd` = "no", `hist` = "s1", `sat` = "0", `w` = "5.5". Nothing is ticked as done or skipped. `app.js` (`DEF_SIT`, `SIT`) explains what each situation key means.

## 2. What was done, in order
| Date (2026) | Request | Result | Note |
|---|---|---|---|
| 1–2 Oct | Full eligibility research in 33 countries, categories A–D, roadmap | Dossier and country files | 01–06, `countries/` |
| 1–2 Oct | Build a website: plan, university list, roadmap | First site | — |
| 2 Oct | Better research and UX; include foundation courses | Foundation routes, redesign | 06 |
| 2 Oct | Two main sections plus a checklist that removes done tasks | Checklist with done/skip | — |
| 5 Oct | IELTS retake and passport renewal planned; SAT timing; final deadline + suggested date; three tiers | Tier system, SAT planner, suggested vs final dates; no DTM | 07, 08 |
| 8 Oct | Improve design; more universities; understand systems and courses | Course guide, glossary, country systems, compare | 09 |
| 8 Oct | Deeper Tier 1, especially the USA; not only top-ranked | Chance bands, routes for a 2022 graduate, 45 more US universities | 10 |
| 8 Oct | Include every US university he is eligible for; directories | 926 entries, country scorecard, strategy pages | 11 |
| 8 Oct | Verify Tier 1–2 deadlines; nothing missed | 261 deadlines checked and tagged by source | 12 |
| 8 Oct | Tier 3 deep dive | South Korea, Latvia, Lithuania, Malta, Iceland, Luxembourg | 13 |
| 8 Oct | Make it personal: only eligible or near-eligible; remove near-impossible | Closed entries pruned (`prune.js`); Jordan removed | — |
| 8–9 Oct | Design and UX | Search bar and filter panel | — |
| 9 Oct | Fees and platforms | Application fee, platform and $0 route per university | 14 |
| 9 Oct | Simpler design; remove medicine; more universities and fees | Four sections: Home, Universities, My list, Plan; medicine removed | 15 |
| 9 Oct | USA everything: all eligible US universities, application to visa, what each values, how to stand out, scholarships | 441 US universities, aid category for each, visa steps for Uzbek citizens 2026–27, El-Yurt Umidi | 16 |
| 9–10 Oct | Confirm merit scholarships, then the 42 unconfirmed | 251 universities checked one by one | 17 |
| 27 Oct | Save everything before deleting the chat | `site/src/`, `CLAUDE.md`, this folder | — |

The owner's exact messages are in `request-history.md`.

## 3. Decisions and why
- **No DTM/BMBA result.** The owner has none, so routes that need it (Austria, KU Leuven, VILNIUS TECH, CUHK/PolyU for some tracks) were marked or dropped. See notes 08 and 09.
- **Jordan removed** because it requires 12 years of schooling. **Medicine removed** because he is not applying to medicine: 13 medicine-only entries went, and 207 universities lost the medicine tag (`med.js`, note 15).
- **Personal list only:** entries closed to him because of citizenship, recency rules (e.g. Sciences Po, NYU Abu Dhabi), age (Türkiye Bursları) or 12-year rules were removed (`prune.js`).
- **US evidence levels:** every US aid entry says whether it was checked on the university's own page (`o`), taken from a secondary source (`s`), or is a well-known policy (`k`). No unchecked "typical pattern" entries remain.
- **Dates:** each action has a suggested date and a final deadline, never just one tight date.
- **Design:** simple, plain language, works on a phone with no sideways scrolling, light and dark themes.

## 4. Open items and next steps
1. **Time-sensitive for the owner (as of 27 Oct 2026):**
   - December SAT: register by 20 Nov (late registration 24 Nov).
   - IELTS retake for Writing 6.5+.
   - Renew the passport.
   - US early deadlines from 1 Nov. Houston's Tier One scholarship needs an application by 1 Nov; Towson's priority date is 15 Nov; many early-action and merit dates fall on 1–15 Nov and 1 Dec.
   - GKS-U 2027 (Korea) closes in November.
   - El-Yurt Umidi opens about April 2027.
2. **14 US universities with unconfirmed merit aid:** UIUC, UIC, Georgia State, James Madison, Oakland, Morgan State, Alaska Fairbanks, Florida Gulf Coast, UCCS, Sam Houston State, Prairie View A&M, Tennessee Tech, UTSA, Augusta. The only sure way is to email each admissions office.
3. **Deadlines labelled "2026 pattern" or "typical; confirm"** should be rechecked as universities publish 2027 dates. `ver.js` holds the verified ones.
4. **Possible next work** (not requested yet): the same deep dive for another Tier 1 country (Canada, Hong Kong or Qatar would suit the saved list), essay planning, the CSS Profile and Common App fee-waiver steps.

## 5. How to resume
1. Open this repo in Claude Code. `CLAUDE.md` loads automatically.
2. Run `sh site/src/build.sh` and check that it prints a size and no `STOP` line.
3. Make changes in `site/src/` (never edit `site/index.html` by hand), rebuild, then run the tests in `site/src/README.md`.
4. To update the live link, read the artifact first, then publish `site/index.html` with `url` set to the link (details in `CLAUDE.md`).
5. Write a short strategy note for any substantial research (`strategy/18-...`) and add a row to the README table.

## 6. Environment notes from the cloud sessions
- Many university websites, IPEDS and some government sites refused direct fetches. Web search results were the main source, so citations point at the pages those results came from.
- npm and PyPI were reachable, which is how the `us-colleges` dataset was fetched.
- Chromium for Playwright was at `/opt/pw-browsers/chromium`.

## 7. Deliberately not kept
- **Passport and diploma scans:** the owner has the originals. Keep them out of this repo.
- About 300 screenshots taken while checking designs.
- Older website versions. Their built output is in the git history of `site/index.html`.
