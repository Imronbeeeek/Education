# Website source

`build.sh` joins these files, in this order, into one script inside `shell.html` and writes `../index.html`. Later files add to or patch the data defined by earlier ones. `app.js` renders the page.

| File | What it holds |
|---|---|
| `shell.html` | Page title, all CSS (light and dark), and the HTML skeleton: Home, Universities, My list, Plan |
| `data.js` | Core data: country tiers and order, fields and courses, country facts (`CI`), the main university rows (`U_RAW`: id, country, name, city, type, chance, fields, courses, requirements, rule, deadline text, dates, website), foundation rows (`F_RAW`), glossary (`GLOSS`) |
| `data_x.js` | Deeper Tier 1 research (8 Oct): extra rows and patches |
| `dir_core.js` | Directory helpers: compact rows expanded into `U_RAW`, chance bands (`SEL`), segments |
| `dir_us.js` | USA directory (grouped rows split into single universities; ids kept so saved items stay valid) |
| `dir_t1.js`, `dir_t2.js`, `dir_t3.js` | Directories for the other Tier 1, Tier 2 and Tier 3 countries |
| `dir_add.js` | Completeness pass: universities that were missing |
| `us_more.js` | 132 more US universities (9 Oct), via `addUS([...])` |
| `deep2.js`, `deep3.js` | Country strategy pages for Tier 2 and Tier 3 |
| `ver.js` | Deadlines checked on 8 Oct 2026, with source type (`v` = 2027 date confirmed, `p` = last cycle's pattern) |
| `prune.js` | Removes entries closed to the applicant (personal list only) |
| `med.js` | Removes medicine-only schools and the medicine field |
| `fees.js` | Application platform, fee and how to pay $0 for each university |
| `us_aid.js` | US aid category for every US university (need-blind, full need, merit, none and so on), what each looks for, visa steps, El-Yurt Umidi, guide tables |
| `us_merit.js` | **Generated** from `data/merit.tsv` by `tools/mkmerit.py`. Merit scholarships checked one by one; overrides `us_aid.js` |
| `us_index.js` | **Generated** by `tools/mkindex.py`: 1,434 other four-year US colleges (name, city, state) |
| `app.js` | SAT dates (`SAT_DATES`), plan steps and timeline (`STEPS`, `TL`), the default saved list (`DEFAULT_SAVED`), and all page logic: rendering, filters, saved list (stored in the artifact database), downloads. "Today" is the viewer's real date |

## Data and tools
- `data/merit.tsv`: one line per US university: name, aid type (`mr` merit, `nm` need + merit, `nl` limited need, `no` none, `ck` not confirmed), evidence (`o` the university's own page, `s` secondary), note, source label, source URL.
- `data/p_list.txt`: the 251 universities that were checked for merit aid.
- `tools/mkindex.py`: needs the CSV from the `us-colleges` npm package (`npm pack us-colleges`, then pass `package/data/us-colleges.csv`). It uses `tools/us_rows.txt` to skip universities already in the directory.

## Tests (`tests/`)
Use Playwright with Chromium. Set `CHROMIUM_PATH` to your Chromium binary and `SHOTS` to a folder for screenshots.
- `t14.js`: 61 checks of navigation, Home, filters, phone layout and downloads.
- `uscheck.js`: US rows: count, duplicates, aid names that match no row, aid category counts.
- `excheck.js`: how many US entries come from each evidence level.
- `fee_t.js`: the fees view and the saved-list fee total.
- `look14.js`, `lookus.js`, `lookpriv.js`: screenshots of Home, the USA pages and the private-college awards table.

Before publishing, also confirm that `build.sh` printed a size and no `STOP` line.
