# Regenerates ../us_merit.js from ../data/merit.tsv (columns: name, aid type, evidence o/s, note, source label, source URL).
# Usage: python3 -I site/src/tools/mkmerit.py site/src/data/merit.tsv site/src/us_merit.js
import json,sys
rows=[l.rstrip("\n").split("\t") for l in open(sys.argv[1],encoding="utf-8") if l.strip()]
out={}
for r in rows:
    r+=[""]*(6-len(r))
    name,t,ex,n,sl,su=r[:6]
    o={"t":t,"ex":ex,"n":n}
    if su: o["src"]=[sl,su]
    out[name]=o
js="/* v16 · merit scholarships for international students, confirmed one by one (9–10 Oct 2026). Overrides the typical-pattern entries in us_aid.js. */\nconst MERIT_CHECKED = "+json.dumps(out,ensure_ascii=False,indent=0)+";\nObject.entries(MERIT_CHECKED).forEach(([n, o]) => { AID[n] = Object.assign({}, AID[n] || {}, o); if (!o.src) delete AID[n].src; });\n"
open(sys.argv[2],"w",encoding="utf-8").write(js)
print(len(out),"entries")
