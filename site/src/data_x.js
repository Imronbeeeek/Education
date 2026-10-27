/* ===================== v6 · DEEPER TIER 1 RESEARCH (8 Oct 2026) =====================
   Loaded after data.js and before app.js. Adds rows, patches existing ones,
   and supplies chance bands, country strategies and the US deep dive. */

/* ---------- New degree rows (same column order as U_RAW) ---------- */
U_RAW.push(
/* USA · routes for adults with a gap */
["us1b","USA","Yale University – Eli Whitney Students Program","New Haven, CT","Private · Ivy League","50","eco ir cs sci soc art","Any Yale College major, in the same classes as every other Yale student","","For adults at least 5 years out of school. You finished in June 2022, so you qualify for Fall 2027. International students are admitted; F-1 students must study full time. SAT optional. Only a handful of places a year, and no university housing.","Transfer Common App opens late Nov · deadline ~1 Mar 2027 · interviews Apr–May · decision mid-May","2027-02-01","2027-03-01",0,4,"admissions.yale.edu/eli-whitney",""],
["us1c","USA","Brown University – Resumed Undergraduate Education (RUE)","Providence, RI","Private · Ivy League","100","cs eng eco ir sci soc art","Any Brown concentration","D","Needs 6+ years since leaving school, so it opens to you only for Fall 2028 entry (apply by ~1 Mar 2028). Keep it in mind if 2027 does not work out.","—",null,null,0,3,"admission.brown.edu",""],
["us1d","USA","Minerva University","San Francisco + 6 cities abroad","Private (global rotation)","u","cs bus soc sci ir","Arts & humanities, business, computational sciences, natural sciences, social sciences; you live in 7 cities over 4 years","","No SAT and no recommendation letters: its own online challenges and essays instead. Admits about 1–3%. Not in global rankings, so the degree would need nostrification in Uzbekistan.","EA 1 Nov 2026 · RD I 5 Jan 2027 · RD II 2 Mar 2027","2026-12-15","2027-03-02",0,3,"minerva.edu",""],
/* USA · selective and mid-selective private universities */
["us5j","USA","Washington University in St. Louis","St. Louis, MO","Private","500","cs eng bus eco sci med soc","Computer science, engineering, Olin business, economics, biology, pre-medicine","","Test-optional (confirm). Very selective; strong merit scholarships.","ED I 1 Nov · ED II / RD 2 Jan 2027","2026-12-18","2027-01-02",0,3,"washu.edu",""],
["us5k","USA","University of Notre Dame","Notre Dame, IN","Private","500","bus eco eng sci soc","Mendoza business, economics, engineering, sciences","","Test-optional (confirm). Very selective.","REA 1 Nov · RD 1 Jan 2027","2026-12-18","2027-01-01",0,3,"nd.edu",""],
["us5l","USA","Emory University","Atlanta, GA","Private","500","bus eco med sci soc cs","Goizueta business, economics, biology, public health, computer science; Oxford College campus option","","Test-optional (confirm). One application covers Emory College and Oxford College.","ED I 1 Nov · ED II / RD 1 Jan 2027","2026-12-18","2027-01-01",0,3,"emory.edu",""],
["us5m","USA","University of Rochester","Rochester, NY","Private","500","cs eng sci eco art","Optics, computer science, engineering, economics, music (Eastman); open curriculum","","Test-optional. International-friendly and often a realistic target for strong students.","ED I 1 Nov · ED II / RD 5 Jan 2027","2026-12-18","2027-01-05",0,4,"rochester.edu",""],
["us5n","USA","Case Western Reserve University","Cleveland, OH","Private","500","eng cs sci med bus","Engineering, computer science, biomedical engineering, nursing, sciences","","Test-optional. Strong in engineering and health.","ED / EA 1 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"case.edu",""],
["us5o","USA","Tulane University","New Orleans, LA","Private","1000","bus eco sci soc med","Freeman business, public health, economics, sciences","","Test-optional. Strongly rewards early applications.","ED / EA 1 Nov · ED II 6 Jan · RD 15 Jan 2027","2026-12-18","2027-01-15",0,3,"tulane.edu",""],
["us5p","USA","Brandeis University","Waltham, MA (Boston)","Private","1000","eco sci soc ir cs","Economics, neuroscience, politics, computer science; small research university","","Test-optional. International-friendly.","ED I 1 Nov · ED II / RD 1 Jan 2027","2026-12-18","2027-01-01",0,4,"brandeis.edu",""],
["us5q","USA","George Washington University","Washington, DC","Private","1000","ir eco bus soc cs","Elliott School of International Affairs, economics, business, political science","","Test-optional. A strong base for international affairs in Washington.","ED I 1 Nov · ED II / RD 5 Jan 2027","2026-12-18","2027-01-05",0,4,"gwu.edu",""],
["us5r","USA","Rensselaer Polytechnic Institute (RPI)","Troy, NY","Private","1000","eng cs sci bus art","Engineering, computer science, game design, physics, business analytics","","Test-optional. Merit scholarships for strong maths.","ED / EA 1 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"rpi.edu",""],
["us5s","USA","Stevens Institute of Technology","Hoboken, NJ (across from Manhattan)","Private","1000","eng cs bus","Engineering, computer science, quantitative finance, business; co-op option","","Test-optional. Strong graduate employment.","ED I 15 Nov · ED II / RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"stevens.edu",""],
["us5t","USA","Worcester Polytechnic Institute (WPI)","Worcester, MA","Private","1000","eng cs sci","Project-based engineering, robotics, computer science, data science","","Test-optional or test-blind (confirm). Project-based learning from year 1.","EA I 1 Nov · EA II / RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"wpi.edu",""],
["us5u","USA","Syracuse University","Syracuse, NY","Private","1000","art bus cs eng soc ir","Newhouse communications, Maxwell public affairs, Whitman business, engineering, information studies","","Test-optional.","ED 15 Nov · RD 5 Jan 2027","2026-12-18","2027-01-05",0,4,"syracuse.edu",""],
["us5v","USA","Drexel University","Philadelphia, PA","Private","1000","eng cs bus med art","Co-op degrees: engineering, computing, business, design, nursing","","Test-optional. Up to 18 months of paid co-op work built into the degree.","EA 1 Nov · RD 15 Jan 2027 · rolling after","2026-12-18","2027-01-15",1,4,"drexel.edu",""],
["us5w","USA","Illinois Institute of Technology","Chicago, IL","Private","1000","eng cs art bus","Engineering, computer science, architecture, business","","Test-optional; admission mainly on grades. Good scholarships for international students.","EA 1 Nov · RD 15 Jan · rolling after","2026-12-18","2027-01-15",1,4,"iit.edu",""],
/* USA · public flagships and large research universities */
["us11c","USA","University of Virginia","Charlottesville, VA","Public","500","bus eco ir cs eng soc","McIntire commerce (apply in year 2), economics, foreign affairs, computer science, engineering","","Test-optional. Places for students from outside Virginia are limited.","ED / EA 1 Nov · RD 5 Jan 2027","2026-12-18","2027-01-05",0,3,"virginia.edu",""],
["us11d","USA","University of North Carolina at Chapel Hill","Chapel Hill, NC","Public","500","bus eco sci soc med","Kenan-Flagler business (apply later), economics, public health, sciences","sat1350","Students from outside North Carolina fill only ~18% of places, so admission is very tight. UNC brought back the SAT/ACT requirement (confirm for 2027). Early action closes 15 Oct, too soon without a score; use regular decision.","EA 15 Oct 2026 · RD 15 Jan 2027","2027-01-05","2027-01-15",0,3,"unc.edu",""],
["us11e","USA","University of Wisconsin–Madison","Madison, WI","Public","200","cs eng bus eco sci soc","Computer science, engineering, Wisconsin School of Business, economics, data science","","Test-optional.","EA 1 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"wisc.edu",""],
["us11f","USA","University of Washington (Seattle)","Seattle, WA","Public","200","cs eng bus sci med","Computer science (direct admission is very hard), engineering, Foster business, sciences, health","","Test-optional. Send official English subscores. Strong links to the tech industry.","15 Nov 2026","2026-11-08","2026-11-15",0,4,"washington.edu",""],
["us11g","USA","University of Maryland, College Park","College Park, MD (near Washington)","Public","500","cs eng bus eco ir sci","Computer science, engineering, Smith business, economics, government","","Test-optional.","EA 1 Nov · RD 20 Jan 2027","2026-12-18","2027-01-20",0,4,"umd.edu",""],
["us11h","USA","Ohio State University","Columbus, OH","Public","500","eng cs bus eco sci med","Engineering, computer science, Fisher business, economics, health sciences","","Test-optional. IELTS 6.5 overall.","EA 1 Nov · RD 1 Feb 2027","2027-01-15","2027-02-01",0,4,"osu.edu",""],
["us11i","USA","Penn State (University Park)","State College, PA","Public","500","eng bus cs sci soc","Engineering, Smeal business, computer science, sciences","","Test-optional. IELTS 6.5 overall. Rolling decisions; the 30 Nov priority date is the safe target.","Priority 30 Nov 2026 · rolling after","2026-11-20","2026-11-30",1,4,"psu.edu",""],
["us11j","USA","Rutgers University–New Brunswick","New Brunswick, NJ (near New York)","Public","500","cs eng bus eco sci","Computer science, engineering, business, economics, pharmacy","","Test-optional. Also has a January start (the Spring 2027 deadline was 1 Oct).","EA 1 Nov · RD 1 Dec 2026","2026-11-25","2026-12-01",1,4,"rutgers.edu",""],
["us11k","USA","University of Minnesota Twin Cities","Minneapolis, MN","Public","500","eng cs bus sci","Engineering, computer science, Carlson business, sciences","","Test-optional.","EA 1 Nov · RD 1 Jan 2027","2026-12-18","2027-01-01",0,4,"umn.edu",""],
["us11l","USA","Indiana University Bloomington","Bloomington, IN","Public","1000","bus cs art soc eco","Kelley business, Luddy computing, Jacobs music, journalism","","Test-optional. High admission rate; direct entry to Kelley needs strong grades.","EA 1 Nov · RD ~1 Feb 2027 (check)","2026-12-18","2027-02-01",0,4,"indiana.edu",""],
["us11m","USA","Michigan State University","East Lansing, MI","Public","500","bus eng cs sci soc","Broad business, supply chain management, engineering, computer science","","Test-optional. Rolling decisions.","EA 1 Nov · rolling to ~1 Feb 2027","2026-12-18","2027-02-01",0,4,"msu.edu",""],
["us11n","USA","University of Pittsburgh","Pittsburgh, PA","Public","500","eng cs med sci bus","Engineering, computer science, health sciences, business","","Test-optional. Rolling decisions, so apply early.","Rolling · apply by ~1 Dec 2026","2026-11-20","2027-01-15",0,4,"pitt.edu",""],
["us11o","USA","Stony Brook University (SUNY)","Stony Brook, NY","Public","1000","cs eng sci med","Computer science, engineering, applied maths, biology, health sciences","","Test-optional.","EA 1 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"stonybrook.edu",""],
["us11p","USA","University at Buffalo (SUNY)","Buffalo, NY","Public","1000","eng cs bus sci","Engineering, computer science, business, pharmacy; large international community","","Test-optional. Rolling decisions; January starts too.","Priority 1 Nov · rolling to ~1 Feb 2027","2026-12-18","2027-02-01",1,5,"buffalo.edu",""],
["us11q","USA","Binghamton University (SUNY)","Binghamton, NY","Public","1000","bus cs eng eco","School of Management, computer science, engineering, economics","","Test-optional.","EA ~15 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"binghamton.edu",""],
["us11r","USA","University of Massachusetts Amherst","Amherst, MA","Public","500","cs eng bus sci soc","Computer science, engineering, Isenberg business, sciences","","Test-optional. The IELTS One Skill Retake is not accepted, so sit a full IELTS.","EA 5 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"umass.edu",""],
["us11s","USA","University of Connecticut","Storrs, CT","Public","1000","bus eng cs sci med","Business, engineering, computer science, nursing, pharmacy","","Test-optional.","EA 1 Dec · RD 15 Jan 2027","2026-12-01","2027-01-15",0,4,"uconn.edu",""],
["us11t","USA","Texas A&M University","College Station, TX","Public","500","eng bus cs sci","Engineering, Mays business, computer science, petroleum engineering","sat1200","SAT/ACT reported as required again (sources conflict; confirm on tamu.edu). The deadline is 1 Dec, so a 5 Dec score may be late: ask whether late scores are accepted, or sit the 7 Nov SAT.","1 Dec 2026","2026-11-20","2026-12-01",0,4,"tamu.edu",""],
["us11u","USA","University of Texas at Dallas","Richardson (Dallas), TX","Public","1000","cs eng bus sci","Computer science, engineering, Jindal business, data science; merit scholarships","","Test-optional (confirm). Admission mainly on grades.","Priority ~1 Dec (scholarships) · final ~1 May 2027 (check)","2026-12-01","2027-05-01",1,5,"utdallas.edu",""],
["us11v","USA","University of Houston · UT Arlington","Houston · Arlington, TX","Public","1000","eng cs bus","Engineering, computer science, business","","Test-optional; admission mainly on grades. January starts too.","Rolling · fall international ~1 Apr–1 May 2027","2027-02-01","2027-04-01",1,5,"uh.edu","University of North Texas, Texas Tech, UT San Antonio"],
["us11w","USA","University of Florida","Gainesville, FL","Public","500","eng cs bus sci soc","Engineering, computer science, Warrington business, sciences","sat1300","SAT, ACT or CLT required (Florida state rule). Very competitive.","EA 1 Nov · RD ~15 Jan 2027 (confirm)","2027-01-05","2027-01-15",0,3,"ufl.edu",""],
["us11x","USA","Other Florida public universities","Tampa · Orlando · Miami · Tallahassee","Public","1000","cs eng bus hos soc","Computer science, engineering, business, hospitality (UCF Rosen College)","sat1100","SAT, ACT or CLT required by Florida law.","Varies: ~1 Nov 2026–1 Mar 2027","2027-01-15","2027-03-01",1,4,"","University of South Florida, University of Central Florida, Florida International University, Florida State University"],
["us11y","USA","University of Georgia","Athens, GA","Public","1000","bus soc sci","Terry business, journalism, sciences","sat1250","SAT or ACT required (University System of Georgia).","EA 15 Oct 2026 · RD 1 Jan 2027","2026-12-18","2027-01-01",0,3,"uga.edu","Georgia State University (also test-required)"],
["us11z","USA","Virginia Tech · NC State · CU Boulder","Blacksburg · Raleigh · Boulder","Public","500","eng cs bus sci","Engineering, computer science, business, sciences","","Test-optional (NC State asks for scores only below a grade threshold; confirm).","EA 1 Nov · RD 15 Jan 2027","2026-12-18","2027-01-15",0,4,"","Clemson (EA 1 Dec), University of Iowa (rolling), Missouri, Kansas, Nebraska"],
["us12b","USA","Arizona · Utah · Iowa State · Oregon State","Tucson · Salt Lake City · Ames · Corvallis","Public","1000","cs eng bus sci","Computer science, engineering, business, sciences","","Admission mainly on grades; test-optional. January starts too.","Rolling · fall international ~1 Apr–1 May 2027","2027-01-31","2027-05-01",1,5,"","Kansas State, Colorado State, Washington State, Utah State, Oklahoma State, Kansas, Missouri, Kentucky, Cincinnati, Nebraska, Louisville, New Mexico, Wichita State"],
["us12c","USA","George Mason University · Temple University","Fairfax (near Washington) · Philadelphia","Public","1000","cs eng bus ir soc","Computer science, cyber security, engineering, business, public policy","","Admission mainly on grades; test-optional. George Mason accepts the IELTS One Skill Retake and offers conditional admission (INTO Mason).","Rolling · fall international ~1 Apr 2027","2027-01-31","2027-04-01",1,5,"","Old Dominion, Virginia Commonwealth, West Chester"],
["us12d","USA","Conditional-admission universities","Various","Public & private","1000","cs eng bus soc","The degree place comes with English classes first if one score falls short","","Useful only if your Writing band blocks a direct offer: you are admitted to the degree and take English first. Your overall IELTS already meets most minimums.","Rolling · fall ~1 May 2027","2027-02-15","2027-05-01",1,3,"","University of Alabama (English Language Institute), University of Tennessee Knoxville, San Diego State (GPA 3.0+), NC State (from IELTS 5.0), Kentucky State, Berkeley College; INTO centres (Oregon State, George Mason, South Florida, Colorado State); Shorelight (American University, Auburn, LSU, UMass Boston, UIC)"],
["us12e","USA","January 2027 (spring) start","Various","Public & private","?","cs eng bus","The same degrees, starting in January","","Few universities still take new international first-years for January, and your visa must be issued by early January (the Tashkent F-1 wait was ~6 weeks in Sep 2026). Treat this as a stretch option.","Typical international spring deadlines 1 Oct–1 Nov 2026 (several already closed)","2026-10-20","2026-11-01",1,2,"","Arizona State, University at Buffalo, Drexel, Illinois Tech, UT Dallas, University of Houston, George Mason, Iowa State, Utah (check each)"],
/* China */
["cn2e","China","Xi'an Jiaotong University – English-taught engineering","Xi'an","Public (C9 League)","500","eng","Electrical engineering & automation, intelligent manufacturing, energy & power, materials science (4-year BEng in English)","csca","CSCA required; IELTS 6.0 / TOEFL 80 / Duolingo 110. Interview. First-year scholarships up to full tuition plus a monthly allowance.","2026 pattern: 1 Nov–31 Dec · 1 Jan–30 Apr · 1 May–30 Jun (check 2027)","2027-02-15","2027-04-30",0,4,"sie.xjtu.edu.cn","Similar English-taught engineering at Tongji, Beihang, Beijing Institute of Technology, Harbin Institute of Technology, Wuhan University, Huazhong University of Science & Technology (check each)"],
/* Türkiye */
["tr5b","Türkiye","Bahçeşehir University (BAU)","Istanbul","Private (foundation)","?","bus cs eng art med soc","English-taught business, computer and software engineering, game design, psychology, medicine","","Admission on your diploma against BAU's country minimum. English proof, or BAU's own prep year. Spring intake starts 18 Jan 2027.","Fall 2026 open to 30 Nov · spring 2027 starts 18 Jan · fall 2027 window ~Jan–Sep","2027-02-15","2027-07-31",1,4,"bau.edu.tr",""],
/* France */
["fr2b","France","SKEMA Business School – Global BBA","Sophia Antipolis · Lille · Paris (plus campuses abroad)","Private grande école","u","bus","4-year Global BBA in English with campuses on several continents","ask:SKEMA asks for 12 years of schooling: confirm your 11-year Attestat qualifies, or enter after 1 year of university","Its stated rule is a diploma equal to the French bac with 12 years of school. Monthly rounds (next deadline on the 15th); September and January intakes.","Monthly rounds to ~Jun 2027","2027-01-15","2027-06-15",1,3,"skema.edu",""],
/* Qatar */
["qa7","Qatar","University of Doha for Science and Technology (UDST)","Doha","Public (applied)","u","eng cs bus med","Bachelor's in engineering technology, computing & IT, business, health sciences (about 80 programmes in all)","ask:Confirm UDST takes applicants from abroad and accepts an 11-year certificate","Qatar's national applied university. Qatari nationals get tuition waivers; international students pay fees.","Fall 2027 cycle likely opens ~Feb 2027 (it did in 2026)","2027-03-01","2027-06-30",0,2,"udst.edu.qa",""]
);

/* ---------- Patches to existing rows (index = U_RAW column) ---------- */
(() => {
  const C = {name:2, city:3, type:4, band:5, fields:6, courses:7, req:8, rule:9, win:10, sug:11, fin:12, spring:13, fit:14, web:15, also:16};
  const P = {
    us1:{rule:"Built for students whose education had a break of a year or more, which fits your 2022–2026 gap. Same Columbia degree and classes. IELTS 7.0 (you meet it), Duolingo 120 or TOEFL 100. F-1 students study full time and are advised to apply by early action. Test-optional for Fall 2027."},
    us4e:{rule:"Test-optional for Fall 2027. English: TOEFL 105 minimum (or SAT reading & writing 700+). Built for students straight from school; Columbia GS fits your profile better."},
    us5i:{name:"Other private universities (selective and mid-selective)", also:"Wake Forest, Lehigh, Fordham, Villanova, American, Santa Clara, SMU, Baylor, Rochester Institute of Technology, University of Miami, Pepperdine, Babson, Bentley, Clark, Hofstra, Pace, Seton Hall, Loyola Chicago, DePaul, Marquette, Creighton, Saint Louis University"},
    us6:{rule:"Test-optional; holistic. No minimum English score (successful applicants usually have TOEFL 100+ / IELTS 7.0+). The IELTS One Skill Retake is not accepted."},
    us6b:{rule:"Test-optional; holistic. The IELTS One Skill Retake is not accepted."},
    us6c:{rule:"Test-optional; paid co-op terms are built into the degree. Admitted students usually show IELTS 7.5–8.0 or Duolingo 130–145, so your Writing band is a weak point."},
    us6d:{rule:"Test-optional; holistic. Expects IELTS 7.0+ with consistent section scores (or Duolingo 125–135). The One Skill Retake is not accepted."},
    us8:{rule:"One UC application covers every campus; SAT not used. IELTS 6.5; the One Skill Retake is not accepted. Places for international students are very limited at Berkeley."},
    us10:{req:"sat1300;w6", rule:"SAT or ACT required. English: usually IELTS 6.5 with at least 6.0 in each section."},
    us10c:{rule:"SAT or ACT required. The deadline is 1 Dec, so a 5 Dec score may be late: ask whether late scores are accepted, or sit the 7 Nov SAT."},
    us11:{req:"w6.5", rule:"Test-optional (confirm). English: IELTS 7.0 overall with 6.5+ in every section, so Writing 5.5 must rise. Duolingo is not accepted."},
    us11b:{name:"Other large public research universities", city:"Various", rule:"Holistic or grade-based; most are test-optional.", win:"Most 1 Nov–1 Feb 2027", also:"Iowa, Missouri, Kansas, Nebraska, Oklahoma, Oregon, South Carolina, Kentucky, Louisiana State, Auburn (test required from 2027), Clemson, Delaware, Vermont, New Hampshire, Rhode Island"},
    us12:{name:"Arizona State University", city:"Tempe · Phoenix, AZ", band:"500", fields:"cs eng bus art soc sci", courses:"Computer science, Fulton engineering, W. P. Carey business, journalism, sustainability", rule:"Admission mainly on grades (yours: 100%); test-optional. IELTS 6.0 for most programmes (6.5 for some engineering, 7.0 for journalism). January starts too.", win:"Rolling · fall international ~1 May 2027", web:"asu.edu", also:""},
    us13:{also:"Cal State campuses (test-blind; apply 1 Oct–1 Dec 2026), SUNY and CUNY campuses, regional public universities in every state"},
    tr1:{rule:"Expects a SAT around 1250+ (admitted middle range is higher). Merit scholarships of 25–100% come with the offer automatically. SAT scores older than 2 years are not accepted.", win:"Applications ~Oct 2026–early Jul 2027; early round ~Jan–Mar (2026 pattern)"},
    fr2:{rule:"Dossier + interview. Some schools state a 12-year schooling rule (SKEMA does): confirm before applying.", also:"NEOMA, KEDGE, Grenoble EM, IÉSEG, Audencia, Rennes SB, TBS, Montpellier BS, ESSCA, PSB, EM Normandie, Excelia, ISC Paris, ICN"},
    sa3:{rule:"Closed for different reasons. Alfaisal admits graduates of the last 2 years (5+ years needs council approval) and needs 12 years of school with Saudi Ministry equivalency. Prince Sultan takes only Saudi or GCC nationals and legal residents of Saudi Arabia."}
  };
  U_RAW.forEach(r => { const p = P[r[0]]; if (p) Object.entries(p).forEach(([k,v]) => { r[C[k]] = v; }); });
})();

/* ---------- Glossary additions ---------- */
GLOSS.push(
  ["Eli Whitney Students Program","Yale's route for adults at least 5 years out of school. You apply through the Transfer Common App (deadline ~1 Mar) and study for a normal Yale degree.",["Eli Whitney"]],
  ["School of General Studies (GS)","Columbia's undergraduate college for students who had a break of a year or more in their education. Same degree and classes as Columbia College.",["General Studies"]],
  ["CLT","Classic Learning Test: an alternative to the SAT/ACT accepted by Florida's and some Georgia public universities.",["CLT"]],
  ["SEVIS fee","The US fee (I-901) every new F-1 student pays after receiving the I-20 and before the visa interview.",["SEVIS"]],
  ["DS-160","The online US visa application form. You complete it before booking the interview at the US Embassy in Tashkent.",["DS-160"]],
  ["Conditional admission","An offer to a degree that starts with English classes because one English score is below the minimum. You join the degree once you pass the English level.",["conditional admission","Conditional admission"]],
  ["Chance band","Our estimate of how hard a place is to win. Long shot: under ~10% admitted. Reach: ~10–25%. Target: ~25–55%. Likely: over ~55%, or admission on published criteria you already meet. Rates for international students are often lower than the overall rate.",["Long shot","Chance band"]]
);

/* ---------- Selectivity: x long shot <10% · h reach 10–25% · m target 25–55% · o likely >55% ---------- */
const SEL = {
  /* USA */
  us1:"h", us1b:"x", us1c:"h", us1d:"x", us2:"x", us2b:"x", us3:"x", us3b:"x", us3c:"x", us3d:"x", us4:"x", us4b:"x", us4c:"x", us4d:"x", us4e:"x",
  us5:"x", us5b:"x", us5c:"x", us5d:"x", us5e:"x", us5f:"x", us5g:"x", us5h:"x", us5i:"m", us5j:"x", us5k:"h", us5l:"h", us5m:"m", us5n:"m", us5o:"h", us5p:"m", us5q:"m", us5r:"m", us5s:"m", us5t:"o", us5u:"m", us5v:"o", us5w:"o",
  us6:"x", us6b:"x", us6c:"x", us6d:"h", us6e:"x", us6f:"h", us7:"h", us8:"x", us8b:"x", us8c:"h", us8d:"m",
  us9:"m", us10:"m", us10b:"h", us10c:"h", us11:"h", us11b:"o", us11c:"h", us11d:"x", us11e:"m", us11f:"m", us11g:"m", us11h:"m", us11i:"o", us11j:"o", us11k:"o", us11l:"o", us11m:"o", us11n:"m", us11o:"m", us11p:"o", us11q:"m", us11r:"o", us11s:"o", us11t:"m", us11u:"o", us11v:"o", us11w:"h", us11x:"m", us11y:"m", us11z:"m",
  us12:"o", us12b:"o", us12c:"o", us12d:"o", us12e:"m", us13:"o", us14:"o",
  /* Canada */
  ca2:"m", ca3:"m", ca4:"m", ca5:"h", ca1:"o", ca6:"m", ca6b:"m", ca6c:"m", ca6d:"o", ca6e:"m", ca6f:"o", ca6g:"o", ca6h:"o", ca7:"o", ca8:"o", ca9:"o",
  /* Spain */
  es1:"m", es2:"m", es2b:"o", es2c:"o", es2d:"m", es2e:"o", es2f:"o", es3:"m", es3b:"m", es3c:"m", es4:"o",
  /* Hong Kong */
  hk2:"h", hk3:"h", hk5:"h", hk6:"m", hk7:"m", hk1:"m", hk4:"o", hk8:"o", hk9:"o",
  /* China */
  cn1:"x", cn1b:"h", cn2:"m", cn2b:"m", cn2c:"m", cn2d:"o", cn2e:"m", cn3:"h", cn3b:"h", cn6:"m", cn7:"o", cn7b:"o", cn7c:"o", cn4:"m", cn5:"h",
  /* Türkiye */
  tr1:"h", tr2:"m", tr2b:"m", tr2c:"o", tr3:"m", tr3b:"h", tr3c:"m", tr3d:"o", tr4:"o", tr5:"o", tr5b:"o",
  /* France */
  fr1:"m", fr1b:"m", fr1c:"m", fr1d:"m", fr2:"o", fr2b:"o", fr7:"o", fr3:"o", fr4:"m",
  /* Italy */
  it1:"h", it2:"m", it2b:"o", it2c:"o", it2d:"o", it2e:"o", it2f:"o", it2g:"o", it4:"o", it5:"m", it3:"o", it3b:"o",
  /* Qatar */
  qa1:"h", qa2:"h", qa3:"h", qa3b:"m", qa4:"x", qa5:"m", qa7:"m",
  /* Saudi Arabia */
  sa1:"m", sa2:"h", sa2b:"h", sa2c:"m"
};

/* ---------- Tier 1 strategies ---------- */
/* mix = recommended applications by chance band; picks = suggested shortlist ids by band */
const DEEP = {
"USA":{
  head:"Your widest door. There is no 12-year rule and no age limit, and two Ivy League routes are built for people with a gap: Columbia GS and Yale's Eli Whitney programme. What holds you back is the SAT at the most selective universities and an IELTS Writing score of 5.5.",
  read:[
    "You apply as a first-year (freshman) applicant, not a transfer, as long as you have not enrolled at a university since 2022. If you took any university courses, you must list them, and many universities would then treat you as a transfer.",
    "A 5.0/5.0 Attestat reads as top grades. Your school sends a translated transcript and a short school report.",
    "Readers will ask what you did between 2022 and 2026. Use the Common App activities list (10 entries) and the additional-information box so that every year is accounted for: work, study, family responsibilities, projects, test preparation.",
    "Selective universities want two teacher letters and a school report. Contact your school now. If teachers have moved on, a school administrator can write the report, and an employer or mentor can add a letter.",
    "Many universities read English scores section by section. Your 7.5 overall is strong, but Writing 5.5 stands out in a file built on essays."
  ],
  edge:["Perfect grades over 11 years","IELTS 7.5 overall already meets most overall minimums (6.5–7.0)","Maturity and work or life experience, which Columbia GS, Yale EWSP and co-op universities value","No SAT needed at University of California campuses (test-blind) or at most mid-tier universities"],
  risk:[
    "<b>Writing 5.5.</b> Retake the full IELTS and aim for Writing 6.5+. The One Skill Retake is not accepted at NYU, BU, UC campuses, USC or UMass Amherst. Duolingo (125+) is an alternative almost everywhere except Michigan.",
    "<b>No SAT yet.</b> Sit it on 5 Dec 2026 (register by 20 Nov); scores arrive about 18 Dec. That reaches every regular-decision deadline and Caltech's 31 Dec cut-off. For 1 Nov early rounds, apply only where the SAT is optional. For UT Austin and Texas A&M (1 Dec), sit the 7 Nov SAT or ask whether late scores count.",
    "<b>Visa.</b> Uzbekistan is not on the 39-country US entry-restriction list (Proclamation 10998, in force since 1 Jan 2026). Check again before paying a deposit. The Tashkent F-1 interview wait was about 6 weeks in September 2026.",
    "<b>Passport.</b> Yours expires on 21 Sep 2027. Renew it before the visa interview, because the visa goes into the new passport.",
    "<b>Very selective universities are a lottery even for perfect applicants.</b> Keep long shots to about a third of your US list."
  ],
  plan:[
    ["Oct 2026","Shortlist 15–20 US universities. Open a Common App account. Order translated transcripts. Ask two teachers and your school for letters."],
    ["Nov 2026","Sit a full IELTS (aim Writing 6.5+). Register for the 5 Dec SAT by 20 Nov. Submit the University of California application by 30 Nov (no SAT)."],
    ["1 Dec 2026","UT Austin and Texas A&M deadlines (SAT required), Rutgers regular decision, Penn State priority date."],
    ["1–15 Jan 2027","Most regular-decision deadlines. Send SAT scores."],
    ["Late Nov–1 Mar 2027","Yale Eli Whitney (Transfer Common App, ~1 Mar). Columbia GS early action 1 Mar (advised for F-1)."],
    ["Jan–May 2027","Rolling admissions as a safety net: Arizona State, Buffalo, Drexel, Illinois Tech, UT Dallas."],
    ["Mar–1 May 2027","Decisions. Commit by 1 May, then I-20 → SEVIS fee → DS-160 → book the Tashkent interview immediately."]
  ],
  mix:{x:3, h:3, m:5, o:4},
  picks:{x:["us1b","us6","us8b"], h:["us1","us11","us8c"], m:["us9","us11e","us11f","us5m","us5n"], o:["us12","us11p","us5w","us11u"]}
},
"Canada":{
  head:"A good academic fit with two country-level hurdles. First, Toronto, McGill and Waterloo do not list the Uzbek Attestat, so they assess it case by case; Alberta does list it. Second, every study permit now needs a provincial attestation letter (PAL) under a national cap.",
  read:[
    "Admission is mostly on grades: your grades for the last two years (10–11), converted to a percentage. A 5.0/5.0 is about 95–100%.",
    "Ontario universities use one application (OUAC). British Columbia, Alberta and Québec universities each have their own.",
    "Most do not ask for the SAT. A few use it as extra evidence for unfamiliar curricula.",
    "Some programmes add forms: Waterloo's AIF, UBC's personal profile, supplementary forms for Toronto's Rotman Commerce and engineering.",
    "Gap years are fine and there is no age limit, but some forms ask what you did."
  ],
  edge:["Perfect grades","IELTS 7.5 overall","Alberta lists the Uzbek certificate and accepts IELTS bands from 5.0"],
  risk:[
    "<b>Writing 5.5.</b> It fails the usual 6.0-per-band rule at Toronto, UBC, McGill, McMaster and Queen's, and Waterloo needs Writing 6.5. Retake.",
    "<b>11-year certificate.</b> Email Toronto, McGill and Waterloo now: ask how they assess the Uzbek Attestat and whether a year of university is needed.",
    "<b>Study permit cap.</b> After an offer, the province issues your PAL. Apply for the permit straight away; approvals have been low (~36% of new post-secondary permits in 2025).",
    "<b>Québec.</b> McGill and Concordia also need a CAQ before the study permit."
  ],
  plan:[
    ["Oct–Nov 2026","Email Toronto, UBC, McGill and Waterloo about the Uzbek certificate. Retake the IELTS."],
    ["By 15 Jan 2027","Apply through OUAC (Toronto, McMaster, Western, Queen's, Ottawa; Waterloo ~1 Feb), and to UBC and McGill."],
    ["By 1 Mar 2027","Alberta, Calgary, Dalhousie."],
    ["Feb–May 2027","Offers arrive. Get your PAL, then apply for the study permit immediately."]
  ],
  mix:{x:0, h:1, m:3, o:2},
  picks:{h:["ca5"], m:["ca2","ca3","ca4"], o:["ca1","ca6f"]}
},
"Spain":{
  head:"Two systems. Private universities (IE, ESADE, Universidad Europea, Navarra) admit you directly and let homologation finish after you enrol. Public universities need your Attestat homologated plus the UNEDasiss PCE exams, and most teach in Spanish.",
  read:[
    "Private universities look at grades, their own test or the SAT, essays and an interview.",
    "Public universities rank you by an admission grade out of 14: your homologated grade (5.0 → 10/10) plus up to 4 points from PCE subject exams. Popular degrees need about 11–13.",
    "Most public degrees need Spanish B2. English-taught public degrees exist at UC3M, UPF and some at UAM."
  ],
  edge:["Homologation turns your 5.0 into 10/10, the top of the scale","Private universities admit in rounds through spring","Many English-taught private degrees"],
  risk:[
    "<b>Homologation takes months.</b> File it now. The receipt (volante) is enough to sit the PCE exams and pre-enrol.",
    "<b>PCE exams in May–June.</b> Prepare maths and 1–2 subjects to lift your admission grade above 12.",
    "<b>Student visa.</b> You need the admission letter, health insurance and proof of funds. Apply 2–3 months ahead."
  ],
  plan:[
    ["Oct 2026","File homologation online with the Ministry of Education (translated, apostilled Attestat)."],
    ["Nov 2026–Jan 2027","IE rounds (6 Nov, 15 Jan), ESADE rounds."],
    ["Mar–Apr 2027","Register for UNEDasiss PCE (~16 Mar–28 Apr)."],
    ["May–Jul 2027","PCE exams, then regional pre-enrolment (Madrid, Catalonia)."]
  ],
  mix:{x:0, h:0, m:3, o:2},
  picks:{m:["es1","es2","es3"], o:["es2b","es2c"]}
},
"Hong Kong":{
  head:"Highly ranked, English-taught, and no 12-year rule at most universities. But your Attestat alone is thin evidence: CUHK, HKUST, PolyU and CityU want a national exam or the SAT. HKBU names the Uzbek Attestat; HKU decides case by case.",
  read:[
    "You apply directly to each university as a non-JUPAS applicant.",
    "They rank you mainly by exam results. Without a national exam, the SAT becomes your exam.",
    "Many programmes interview (Jan–Apr).",
    "Gap years are accepted; some programmes ask about them."
  ],
  edge:["IELTS 7.5 meets most requirements (often 6.0–6.5 overall with 5.5 per band, so Writing 5.5 passes most)","English-medium teaching","Strong scholarships for top applicants"],
  risk:[
    "<b>No SAT yet.</b> Without it your file is weak at CUHK, HKUST, PolyU and CityU. Sit the SAT in December; they take scores into Jan–Feb.",
    "<b>HKU.</b> Ask whether it accepts the Uzbek Attestat for your programme.",
    "<b>Early rounds (mid-Nov) give priority.</b> Apply early and add the SAT score later."
  ],
  plan:[
    ["Oct–Nov 2026","Apply to HKU, CUHK, HKUST, PolyU, CityU and HKBU in the early rounds. You can send the SAT later."],
    ["Dec 2026","Sit the SAT and send scores."],
    ["Jan–Apr 2027","Interviews. Offers from Feb to May."],
    ["May–Jun 2027","Student visa through the university (6–8 weeks)."]
  ],
  mix:{x:0, h:2, m:3, o:1},
  picks:{h:["hk2","hk3","hk5"], m:["hk6","hk7","hk1"], o:["hk4"]}
},
"China":{
  head:"Three doors. Sino-foreign universities (NYU Shanghai, Duke Kunshan, CUHK-Shenzhen, XJTLU, Nottingham Ningbo) admit like Western universities. English-taught programmes at Chinese universities now require the CSCA test. Chinese-taught degrees need HSK.",
  read:[
    "Sino-foreign universities review essays, grades and interviews; NYU Shanghai and Duke Kunshan use the Common App.",
    "Chinese universities look at the CSCA (maths plus physics or chemistry, in English), your grades and an interview. Age limits are usually 18–25, and you qualify.",
    "Scholarships (CSC, university, city) are decided with admission."
  ],
  edge:["You are inside the usual age limits","Your strong maths grades suit the CSCA","Russian helps at Shenzhen MSU-BIT"],
  risk:[
    "<b>CSCA dates.</b> Register on csca.cn early so scores are ready for the Jan–Apr windows.",
    "<b>Each university sets its own window</b>, and some close in December.",
    "<b>Visa.</b> X1 student visa from the embassy in Tashkent, with the admission letter and JW202 form."
  ],
  plan:[
    ["Oct–Nov 2026","Register for the CSCA and shortlist programmes."],
    ["1 Nov / 5 Jan","NYU Shanghai early decision / regular decision. Duke Kunshan regular decision 4 Jan."],
    ["Nov 2026–Apr 2027","XJTU, Fudan, SJTU and Zhejiang windows. CSC scholarship through the embassy."],
    ["To Apr 2027","CUHK-Shenzhen rounds. XJTLU and Nottingham Ningbo rolling."],
    ["Jun–Aug 2027","JW202 + admission letter → X1 visa."]
  ],
  mix:{x:0, h:2, m:2, o:2},
  picks:{h:["cn3","cn3b"], m:["cn6","cn2e"], o:["cn7","cn7b"]}
},
"Türkiye":{
  head:"One of your safest Tier 1 countries. Universities admit international students on the SAT, YÖS or simply the diploma grade. There is no age limit and plenty of English-taught programmes. Koç, Sabancı and Bilkent award merit scholarships automatically.",
  read:[
    "Foundation (private) universities run their own international quota, using the SAT or your diploma grade, plus an English test or a prep year.",
    "State universities (METU, Boğaziçi, ITU) use SAT or YÖS cut-offs. METU wants SAT 1200+ (maths 700+ for engineering).",
    "Koç does not accept SAT scores older than 2 years, so a 2026 sitting is right."
  ],
  edge:["A 5.0 diploma grade counts as 100%","IELTS 7.5 exempts you from the prep year at most universities","January intakes at private universities (Bahçeşehir starts 18 Jan 2027)"],
  risk:[
    "<b>English exemption.</b> Writing 5.5 may miss the exemption rule at METU or Boğaziçi, which would add a prep year.",
    "<b>Paperwork.</b> State universities may ask for diploma equivalence (denklik). Apply for a residence permit after you arrive."
  ],
  plan:[
    ["Dec 2026","Sit the SAT and send scores to Koç, Sabancı, Bilkent and METU."],
    ["Jan–Mar 2027","Koç and Sabancı early rounds; Bilkent rolling."],
    ["1–15 Mar 2027","TR-YÖS registration, if you need it."],
    ["Jun–Jul 2027","METU, Boğaziçi and ITU international quotas."]
  ],
  mix:{x:0, h:1, m:2, o:2},
  picks:{h:["tr1","tr3b"], m:["tr2","tr2b","tr3"], o:["tr2c","tr5"]}
},
"France":{
  head:"Business schools are your main door. ESSEC, ESCP, EDHEC and emlyon run English-taught BBAs with their own admissions in several rounds. Public universities need French B2 and the Campus France DAP route. Sciences Po and Polytechnique's bachelor are closed to 2022 graduates.",
  read:[
    "Business schools look at a dossier, a motivation letter and an interview. Grades and English matter more than the SAT.",
    "Some schools state a 12-year schooling rule (SKEMA does). Confirm with each school before paying a fee."
  ],
  edge:["Several rounds run into spring","IELTS 7.5","Top grades"],
  risk:[
    "<b>12-year wording</b> at some schools: ask first.",
    "<b>Visa.</b> The Études en France procedure through Campus France Uzbekistan (Tashkent), then a long-stay student visa (VLS-TS)."
  ],
  plan:[
    ["Nov 2026–Jan 2027","Early rounds (EDHEC round 2 closes 7 Jan; ESSEC rounds)."],
    ["Feb–Apr 2027","Later rounds."],
    ["After an offer","Études en France, then the VLS-TS visa."]
  ],
  mix:{x:0, h:0, m:3, o:1},
  picks:{m:["fr1","fr1b","fr1c","fr1d"], o:["fr3"]}
},
"Italy":{
  head:"Mostly a 2028 country for you. Italy's ministry rule requires 12 years of schooling, so public universities, Bocconi, Politecnico and LUISS need a foundation year or a year of university first. For 2027, the doors are the US-accredited John Cabot University and American University of Rome.",
  read:[
    "After a bridge year you pre-enrol through Universitaly, then admission is by grades and tests (TOLC, SAT or Bocconi's own test).",
    "US-accredited colleges in Rome admit you now with 11 years."
  ],
  edge:["John Cabot and AUR admit you directly","A foundation year opens Bologna, Padua, Politecnico and Bocconi for 2028"],
  risk:[
    "<b>Recognition.</b> The US-accredited Rome colleges are outside global rankings, so the degree would need nostrification in Uzbekistan.",
    "<b>Universitaly and visa</b> windows run in spring for the following September."
  ],
  plan:[
    ["Jan–Mar 2027","John Cabot (1 Mar) and AUR (rolling) for 2027."],
    ["2027–28","Or take a foundation year, then Bologna, Politecnico or Bocconi for 2028."]
  ],
  mix:{x:0, h:0, m:0, o:2},
  picks:{o:["it3","it3b"]}
},
"Qatar":{
  head:"Education City's US branch campuses (Carnegie Mellon, Georgetown, Northwestern, VCUarts) award US degrees with US-style admission and no 12-year rule, but they are small and selective. Qatar University requires 12 years, and Texas A&M Qatar no longer admits undergraduates.",
  read:[
    "US-style holistic review: grades, essays, recommendations. The SAT is optional at most.",
    "Small entering classes, so every part of the file counts."
  ],
  edge:["US degrees in a Gulf setting","SAT optional","Generous support at Education City"],
  risk:[
    "<b>Few places.</b> Treat each branch campus as a reach.",
    "<b>English.</b> Minimums are around IELTS 6.5–7.0, and the Writing band matters."
  ],
  plan:[
    ["1 Nov 2026","Early rounds (optional)."],
    ["Jan 2027","Regular deadlines via the Common App or each campus's own application."],
    ["Mar–Apr 2027","Decisions. The university sponsors your visa."]
  ],
  mix:{x:0, h:3, m:2, o:0},
  picks:{h:["qa1","qa2","qa3"], m:["qa3b","qa5"]}
},
"Saudi Arabia":{
  head:"Mostly scholarship-based and taught in Arabic. Study in Saudi scholarships (ages 17–25, certificate under 5 years old) fit you only until mid-2027 and start with an Arabic preparatory year. The English-taught private universities (Alfaisal, Prince Sultan, PMU) are closed to you because of recent-graduate or nationality rules.",
  read:[
    "Scholarship admission through the Study in Saudi portal, with an Arabic preparatory year first.",
    "KFUPM and KAUST do not fit: certificate-age rules and no regular international undergraduate route."
  ],
  edge:["Full scholarships","No 12-year issue at the Islamic University of Madinah (confirm)"],
  risk:[
    "<b>Certificate age.</b> Under 5 years means applying before June 2027, so use the first window.",
    "<b>Arabic.</b> Most degrees are taught in Arabic after a preparatory year."
  ],
  plan:[["~May 2027","Study in Saudi window (check the exact dates). Apply as soon as it opens."]],
  mix:{x:0, h:2, m:2, o:0},
  picks:{h:["sa2","sa2b"], m:["sa1","sa2c"]}
}
};

/* ---------- US deep dive ---------- */
const US_EN = [
  ["Michigan","IELTS 7.0 overall and 6.5+ in every section; Duolingo not accepted","Writing must reach 6.5","n"],
  ["UIUC · Purdue","IELTS 6.5 overall with 6.0+ in each section","Writing must reach 6.0","n"],
  ["Columbia College","TOEFL 105 minimum (or SAT reading & writing 700+)","Needs a very strong retake","n"],
  ["Boston University","IELTS 7.0+ with consistent sections; Duolingo 125–135; One Skill Retake not accepted","Retake the full test","n"],
  ["Northeastern","Admitted students usually show IELTS 7.5–8.0 or Duolingo 130–145","Overall fine; Writing is a weak point","y"],
  ["NYU","No minimum (admitted students usually TOEFL 100+); One Skill Retake not accepted","Overall fine; Writing is a weak point","y"],
  ["UC campuses · USC · UMass Amherst","UC: IELTS 6.5. None of the three accepts the One Skill Retake","You meet the overall score","g"],
  ["Columbia GS","IELTS 7.0 · Duolingo 120 · TOEFL 100","You meet it","g"],
  ["Penn State · Ohio State","IELTS 6.5 overall (no published section minimum)","You meet it","g"],
  ["Arizona State","IELTS 6.0 overall (6.5 some engineering, 7.0 journalism)","You meet it","g"],
  ["George Mason · Rowan","Accept the One Skill Retake","A Writing-only retake works here","g"]
];
const US_TEST = [
  ["Required for Fall 2027","Harvard, Yale, Stanford, MIT, Caltech (scores by 31 Dec), Penn, Cornell, Brown, Dartmouth, Johns Hopkins, Georgetown, Carnegie Mellon, Purdue, Georgia Tech, UT Austin, Florida public universities (SAT, ACT or CLT), University of Georgia and Georgia State, Tennessee, Auburn. Texas A&M and UNC Chapel Hill: reported as required, confirm.","n"],
  ["Optional for Fall 2027","Princeton and Columbia (required from 2028), NYU, USC, Boston University, Northeastern, UChicago, Michigan, Wisconsin, Maryland, Ohio State, Penn State, Rutgers, Rochester, Case Western, Arizona State and most mid-tier universities. Alabama asks only below a GPA of 3.0.","y"],
  ["Not used","University of California (all campuses), California State University (including San Diego State), Minerva.","g"]
];
const US_ROUTES = [
  ["Standard first-year (Common App)","Anyone who has not enrolled at a university since school","Every US university","Nov 2026–Jan 2027"],
  ["Columbia School of General Studies","A break of 1+ year in education","Columbia degree, same classes as Columbia College","Early action 1 Mar 2027 (advised for F-1)"],
  ["Yale Eli Whitney Students Program","5+ years since school (you qualify)","Yale degree; tiny intake; F-1 full time","~1 Mar 2027 via the Transfer Common App"],
  ["Brown RUE","6+ years since school","Brown degree; opens to you for Fall 2028","~1 Mar 2028"],
  ["Community college 2+2","Any school certificate","Associate degree, then transfer (e.g. UC TAG)","Rolling"]
];
const US_VISA = [
  "Accept an offer and pay the deposit (usually by 1 May).",
  "The university issues your I-20 (it needs a passport copy and proof of funds).",
  "Pay the SEVIS fee (I-901).",
  "Complete the DS-160 and book an interview at the US Embassy in Tashkent, the only post for Uzbek F-1 applicants. The wait was ~6 weeks in Sep 2026.",
  "Bring your I-20, SEVIS receipt, admission letter, financial documents and Attestat. Since June 2025, F-1 applicants must set their social-media accounts to public.",
  "You may enter the US up to 30 days before the I-20 start date."
];
const US_STORY = [
  "Name the four years plainly, in order, in the activities list. Unexplained time hurts more than an unusual path does.",
  "Show growth: what you learned or built, who relied on you, and what you taught yourself.",
  "Link the gap to the major you choose. For example: worked in a business, so business analytics; taught yourself programming, so computer science.",
  "Use the additional-information box for facts (dates, roles, hours a week). Keep the main essay for your story.",
  "Columbia GS and Yale EWSP ask directly why now. Answer with what changed and why you are ready."
];
