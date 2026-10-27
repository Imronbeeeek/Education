# Rebuilds ../us_index.js from the us-colleges npm package CSV (npm pack us-colleges; data/us-colleges.csv).
# Usage: python3 -I site/src/tools/mkindex.py <path to us-colleges.csv>
import csv,re,json,unicodedata,sys,os
H=os.path.dirname(os.path.abspath(__file__))
rows=list(csv.DictReader(open(sys.argv[1],encoding="utf-8")))
excl=re.compile(r"(seminary|theolog|rabbin|yeshiva|talmud|bible|biblical|divinity|medicine|medical|health science|osteopath|pharmacy|nursing|chiropract|podiatr|optometr|naturopath|acupunct|law school|school of law|college of law|military academy|naval academy|air force academy|coast guard|merchant marine|webb institute|college of the ozarks|alice lloyd|graduate|professional psychology|culinary|cosmetology|mortuary|\bdental\b|veterinary|church of god|pentecostal|apostolic)",re.I)
women={"wellesley college","smith college","bryn mawr college","mount holyoke college","barnard college","scripps college","spelman college","agnes scott college","hollins university","sweet briar college","meredith college","salem college","wesleyan college","cottey college","saint mary's college","college of saint benedict","st. catherine university","alverno college","brenau university","bennett college","stephens college","mills college","notre dame of maryland university","trinity washington university","ursuline college","moore college of art and design","cedar crest college","mount saint mary's university","columbia college","judson college","simmons university","simmons college","texas woman's university","mississippi university for women","russell sage college"}
coed_keep={"texas woman's university","mississippi university for women","russell sage college","columbia college","simmons university","simmons college"}  # coed or coed undergrad now / ambiguous names
def norm(n):
  n=unicodedata.normalize("NFKD",n).encode("ascii","ignore").decode().lower()
  n=re.sub(r"\(.*?\)","",n); n=n.replace("&","and")
  n=re.sub(r"[^a-z0-9 ]"," ",n); n=re.sub(r"\b(the|of|at|main campus|campus)\b"," ",n)
  return re.sub(r"\s+"," ",n).strip()
have=set(norm(l.split(" | ")[2]) for l in open(os.path.join(H,"us_rows.txt"),encoding="utf-8").read().split("\n") if l.count(" | ")>=2)
have|=set(norm(n) for n in re.findall(r'\["u_[a-z0-9]+","([^"]+)"',open(os.path.join(H,"..","us_more.js"),encoding="utf-8").read()))
out=[];sk=[];dup=0
for r in rows:
  n=r["name"].strip().replace("\ufffd\ufffd\ufffd","\u2019").replace("\ufffd","\u2019"); ln=n.lower()
  if excl.search(n) or (ln in women and ln not in coed_keep): sk.append(n); continue
  if norm(n) in have: dup+=1; continue
  nn=norm(n)
  if re.search(r"campus|-[A-Z][a-z]+$| at [A-Z]",n) and any(nn.startswith(h+" ") for h in have if len(h)>8): dup+=1; continue
  out.append([n, r["city"].strip(), r["state_abbreviation"].strip()])
out.sort(key=lambda a:a[0])
open(os.path.join(H,"..","us_index.js"),"w",encoding="utf-8").write("/* Every other four-year US college: public list of 2,289 institutions minus seminaries, medical and health schools, women's colleges, service academies, the universities already in the directory and their branch campuses */\nconst US_INDEX = "+json.dumps(out,ensure_ascii=False,separators=(",",":"))+";\n")
print("kept",len(out),"skipped",len(sk),"dup",dup)
print("sample skipped:", [s for s in sk if not re.search("seminar|theolog|bible|rabbin|yeshiva|medic|nursing|pharm|health|osteo|chiro|law|divinity|talmud",s,re.I)][:40])
