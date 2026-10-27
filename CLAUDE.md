# Imronbek's Admissions Atlas

Personal university-admissions project for **Imronbek Khaydarov** (Uzbekistan). It has two parts:
- research notes in Markdown (`strategy/`, `countries/`, `research/`), indexed in `README.md`;
- a one-file personal website, `site/index.html`, built from the parts in `site/src/`.

Read `handoff/HANDOFF.md` first. It covers the full history, every decision, what is finished and what is still open. `handoff/request-history.md` has every request the owner made, in order.

## The applicant (short)
- Uzbek 11-year Attestat, 5.0/5.0, graduated June 2022. Age 22. No DTM/BMBA national test result.
- IELTS Academic 7.5 overall (L 8.0, R 8.5, **W 5.5**, S 7.5), valid to 2 Sep 2027. A Writing retake is planned.
- SAT planned; the site's chosen sitting is **5 Dec 2026** (registration 20 Nov, late 24 Nov).
- Passport expires 21 Sep 2027, so it must be renewed before any visa.
- Targets: **Fall 2027 first**, Spring 2027 second. Any field except medicine.
- Country tiers: 1 = Qatar, Saudi Arabia, USA, Canada, Spain, Hong Kong, China, Türkiye, France, Italy. 2 = Australia, Sweden, Netherlands, Norway, Portugal, UAE, Austria, Belgium, Denmark, Finland, Germany, Hungary, Jordan, Singapore, Bahrain, Kuwait, Malaysia. 3 = South Korea, Iceland, Latvia, Lithuania, Luxembourg, Malta.

## How the owner wants things done
- Plain, simple language and a simple, organised site. He found earlier versions too complex.
- Personal: only universities he is eligible for or can become eligible for. Drop near-impossible ones.
- No tight deadlines: give a final deadline plus a suggested date for each action.
- Always include fee waivers and free ways to apply.
- Give sources as links for every claim.
- Be careful with usage: batch web searches; use "standard" search mode unless it truly fails.
- He asks for "deep and advanced" research, but the results must stay easy to read.

## Hard rules
- **The passport number must never appear on the website.** It is in the private notes (`README.md`, `strategy/05-documents-and-admin.md`). `site/src/build.sh` refuses to build if a passport-like number (two letters + seven digits) gets into `site/index.html`.
- Never put AI model names or identifiers in commits, docs or the site.
- Commit messages are plain and descriptive. The working branch has been `claude/wizardly-carson-srmdpd`, which is the repo's default branch.

## The website
- Live, private link: https://claude.ai/artifact/9GGSnY86Wd3Dy6C3iCUVTz (a Claude artifact, version 22 on 10 Oct 2026). It is shared as "anyone with the link".
- **To update the same link** from a new session: build, then call the Artifact tool with `action: "read"` on that URL, then publish `site/index.html` with `url` set to that link. Omit `capabilities` so the stored ones (`db`, `downloads`, `user`) carry forward.
- The owner's saved list and progress live in the artifact's database at `data/users/me/atlas` (read or write with the ArtifactData tool). A backup copy is in `handoff/saved-list-backup.json`. Restore it only if the live one is lost.
- If the artifact link is ever gone, publish `site/index.html` as a new artifact with capabilities `{db:{}, downloads:true, user:{}}`, then restore the saved list.

## Build and test
```sh
sh site/src/build.sh                      # writes site/index.html (about 0.9 MB)
# tests need Node + Playwright (npm i -g playwright) and a Chromium
CHROMIUM_PATH=/path/to/chromium NODE_PATH=$(npm root -g) node site/src/tests/t14.js     # 61 UI checks
CHROMIUM_PATH=... NODE_PATH=$(npm root -g) node site/src/tests/uscheck.js               # US data integrity
CHROMIUM_PATH=... NODE_PATH=$(npm root -g) SHOTS=/tmp node site/src/tests/fee_t.js      # fees view
python3 -I site/src/tools/mkmerit.py site/src/data/merit.tsv site/src/us_merit.js      # after editing merit.tsv
```
In a Claude cloud session, Chromium is at `/opt/pw-browsers/chromium`. `site/src/README.md` says what each part does.

## Where things are
| Path | What |
|---|---|
| `README.md` | Applicant snapshot, urgent actions, index of all notes |
| `strategy/01`–`17` | Research and decisions, in date order (01–06 first dossier; 16 USA; 17 US merit check) |
| `countries/` | One file per country: eligibility categories A–D, tables, sources |
| `research/` | Raw research notes and source lists used to build the site |
| `site/src/` | Website parts, build script, generators, data tables, tests |
| `handoff/` | Session handoff, request history, saved-list backup |
