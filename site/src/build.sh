#!/bin/sh
# Builds site/index.html from the parts in this folder. Usage: sh site/src/build.sh
# The order matters: later files patch the data defined by earlier ones; app.js renders the page.
set -e
D=$(cd "$(dirname "$0")" && pwd)
OUT="$D/../index.html"
TMP="${TMPDIR:-/tmp}/atlas_build_$$.js"
cd "$D"
cat data.js data_x.js dir_core.js dir_us.js dir_t1.js dir_t2.js dir_add.js us_more.js dir_t3.js \
    deep2.js deep3.js ver.js prune.js med.js fees.js us_aid.js us_merit.js us_index.js app.js > "$TMP"
node --check "$TMP"
{ cat shell.html; printf '<script>\n'; cat "$TMP"; printf '</script>\n'; } > "$OUT"
rm -f "$TMP"
# Guard: the published page must never contain a passport number (two letters + seven digits).
if grep -qE '\b[A-Z]{2}[0-9]{7}\b' "$OUT"; then echo "STOP: a passport-like number is in site/index.html" >&2; exit 1; fi
if grep -q "$(printf '\357\277\275')" "$OUT"; then echo "STOP: broken character (U+FFFD) in site/index.html" >&2; exit 1; fi
wc -c "$OUT"
