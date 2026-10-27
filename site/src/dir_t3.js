/* ---------- Tier 3 directories (v9): South Korea, Latvia, Lithuania, Malta, Iceland, Luxembourg ---------- */
Object.assign(SEGS, {
  "South Korea":[["sky","Top Seoul universities"],["sci","Science & technology institutes"],["seoul","Other Seoul & capital area"],["nat","National universities"],["reg","Regional & international-focused"],["route","Scholarships, language routes & closed"]]
});

/* South Korea: grouped rows become single universities (ids kept) */
patchRows({
  kr3:{name:"Seoul National University (SNU)", city:"Seoul", type:"Public (national)", band:"50", fields:"eng cs sci eco bus soc", courses:"Engineering, natural sciences, economics, business, social sciences (mostly Korean-taught)", req:"lang:TOPIK 3+ or an English score (most SNU courses are taught in Korean)", rule:"Foreign-national admission (both parents non-Korean). SNU's guidelines have no explicit 12-year clause, but confirm the 11-year Attestat in writing. Very short windows (a few days).", web:"snu.ac.kr", also:"", sel:"h", seg:"sky"},
  kr1:{name:"Hankuk University of Foreign Studies (HUFS)", spring:1, city:"Seoul · Yongin", type:"Private", band:"1000", fields:"ir soc bus eco", courses:"Languages and area studies (incl. Central Asian studies), international studies, business, law", req:"", rule:"Foreign-national admission with Korean or English proof; strong fit for languages and international studies.", web:"hufs.ac.kr", also:"", sel:"o", seg:"sky"},
  kr4:{name:"KAIST", city:"Daejeon", type:"Public (science institute)", band:"100", fields:"eng cs sci bus", courses:"All majors in English: computing, electrical, mechanical and industrial engineering, sciences, business technology", req:"", rule:"English-medium. Maths and science record, essays and two recommendations decide; SAT and olympiad results help. KAIST scholarships (full tuition plus a monthly allowance) go to many admitted international students; confirm the terms.", web:"kaist.ac.kr", also:"", sel:"x", seg:"sci"},
  kr2:{name:"Woosong University – SolBridge International School of Business", city:"Daejeon", type:"Private", band:"u", fields:"bus", courses:"BBA taught fully in English (finance, marketing, digital business)", req:"", rule:"English-only business school with a very international class; spring and fall intakes.", web:"solbridge.ac.kr", also:"", sel:"o", seg:"reg"},
  kr5:{name:"More Korean universities", band:"?", rule:"Same foreign-national route; mostly Korean-taught (TOPIK 3), with spring and fall rounds. Check IEQAS certification first.", also:"Hannam, Daejeon University, Paichai, Hoseo, Kyungsung, Silla, Youngsan, Kyungnam, Daegu University, Daegu Catholic, Wonkwang, Chosun, Soonchunhyang, Sangmyung, Seokyeong, Sungkyul, Kyungil, Tongmyong, Kosin, Kongju National, Kunsan National, Mokpo National, Sunchon National, Andong National, Changwon National, Hanbat National, Korea National University of Transportation", seg:"reg"},
  kr6:{seg:"route", sel:"h"},
  kr7:{seg:"route", also:"Ewha (incl. Scranton College), Sookmyung, Sungshin, Duksung, Dongduk, Seoul Women's; Korea Military Academy, Naval and Air Force Academies, Korean National Police University; national universities of education"}
});
const KR_DL = {
  f:["Fall 2027 foreign-student round ~early Mar–early Apr 2027 (spring 2027 rounds at this level closed Aug–Sep 2026)","2027-03-02","2027-03-26",0],
  n:["Spring 2027 round may still be open (~Oct–Dec 2026) · fall 2027 round ~Mar–May 2027","2027-03-02","2027-04-30",1],
  s:["International rounds ~Oct 2026–Jan 2027 for fall 2027","2026-12-15","2027-01-15",0]
};
const KR_BASE = {
  sky:"Foreign-national admission (both parents non-Korean). Proof of Korean (TOPIK) or English (your IELTS) is required. The Ministry's baseline is 12 years of school and each university decides, so ask in writing whether your 11-year Attestat is accepted.",
  sci:"English-medium science and technology institute: maths and science grades, essays and recommendations decide; SAT and olympiad results help.",
  seoul:"Foreign-national admission; most majors teach in Korean (TOPIK 3–4 or a Korean language year first) with a few English tracks. Confirm the 11-year Attestat in writing.",
  nat:"National university: lower fees, foreign-national rounds in spring and fall, mostly Korean-taught (TOPIK 3 typical) with some English programmes. Confirm the 11-year Attestat in writing.",
  reg:"Private regional university with large international intakes and English options. Check its IEQAS status: universities that fail it cannot issue student visas for a year."
};
const KR_T = "lang:TOPIK 3 (or one of the few English-taught programmes)";
addRows("South Korea", KR_DL, [
["k_yonsei","Yonsei University – Underwood International College (UIC)","Seoul · Songdo","Private","100","h","eco ir cs bus soc art","English-taught liberal arts: economics, international studies, political science, techno-art, applied information engineering","","Yonsei's main colleges teach in Korean; UIC teaches in English.","f","sky","yonsei.ac.kr",""],
["k_korea","Korea University","Seoul","Private","100","h","bus ir eco eng cs","Business (English-heavy), international studies, economics, engineering","","English-taught tracks in international studies and business.","f","sky","korea.ac.kr",""],
["k_skku","Sungkyunkwan University (SKKU)","Seoul · Suwon","Private","200","m","eng cs bus eco","Semiconductors, computer science, engineering, business (Samsung-linked)","","","f","sky","skku.edu",""],
["k_hanyang","Hanyang University","Seoul · Ansan","Private","200","m","eng cs bus","Engineering, computer science, business","","","f","sky","hanyang.ac.kr",""],
["k_sogang","Sogang University","Seoul","Private","500","m","bus eco cs soc","Business, economics, computer science, communication","","Spring round open now.","n","sky","sogang.ac.kr",""],
["k_khu","Kyung Hee University","Seoul · Suwon","Private","500","m","hos ir bus med soc","Hotel & tourism management, international studies, business, Korean medicine","","","f","sky","khu.ac.kr",""],
["k_cau","Chung-Ang University","Seoul · Anseong","Private","500","m","bus soc art cs","Business, media & communication, film & arts, software","","","f","sky","cau.ac.kr",""],
["k_postech","POSTECH","Pohang","Private (science institute)","100","x","sci eng cs","Physics, chemistry, life sciences, engineering, computer science (English-medium)","","International undergraduate track opened for fall 2026.","s","sci","postech.ac.kr",""],
["k_unist","UNIST","Ulsan","Public (science institute)","500","h","eng sci cs bus","Engineering, natural sciences, computer science, technology management (English-medium)","","","s","sci","unist.ac.kr",""],
["k_gist","GIST (Gwangju Institute of Science and Technology)","Gwangju","Public (science institute)","?","h","sci eng cs","Basic sciences and engineering (English-medium; about 15 international places)","","","s","sci","gist.ac.kr",""],
["k_dgist","DGIST","Daegu","Public (science institute)","?","h","sci eng cs","Convergence science and engineering (English-medium)","","","s","sci","dgist.ac.kr",""],
["k_koreatech","KOREATECH (Korea University of Technology and Education)","Cheonan","Public","u","o","eng cs","Mechanical, electrical, computer engineering","ask:KOREATECH lists 12 years of primary and secondary school: confirm it accepts your 11-year Attestat","Its eligibility text states 12 or more years of schooling.","f","sci","koreatech.ac.kr",""],
["k_uos","University of Seoul","Seoul","Public (city)","1000","o","eng soc bus","Urban engineering, public administration, business, tax",KR_T,"City-run university with low fees.","f","seoul","uos.ac.kr",""],
["k_konkuk","Konkuk University","Seoul · Chungju","Private","500","o","bus eng sci art","Business, engineering, biosciences, real estate, design",KR_T,"","n","seoul","konkuk.ac.kr",""],
["k_dongguk","Dongguk University","Seoul · Gyeongju","Private","1000","o","soc bus eng art","Film, police administration, business, engineering",KR_T,"","n","seoul","dongguk.edu",""],
["k_hongik","Hongik University","Seoul · Sejong","Private","?","o","art eng","Art and design (portfolio), architecture, engineering",KR_T,"Art and design need a portfolio.","n","seoul","hongik.ac.kr",""],
["k_kookmin","Kookmin University","Seoul","Private","?","o","art eng cs bus","Automotive engineering, design, software, business",KR_T,"","n","seoul","kookmin.ac.kr",""],
["k_soongsil","Soongsil University","Seoul","Private","?","o","cs eng bus","Software, AI, IT engineering, business",KR_T,"","n","seoul","ssu.ac.kr",""],
["k_sejong","Sejong University","Seoul","Private","1000","o","hos cs eng art","Hospitality & tourism, computer science, animation, engineering",KR_T,"","n","seoul","sejong.ac.kr",""],
["k_kwangwoon","Kwangwoon University","Seoul","Private","?","o","cs eng","Electronics, computer science, robotics",KR_T,"","n","seoul","kw.ac.kr",""],
["k_seoultech","Seoul National University of Science and Technology (SeoulTech)","Seoul","Public (national)","?","o","eng cs art","Engineering, IT, design; some English-taught global programmes",KR_T,"","n","seoul","seoultech.ac.kr",""],
["k_catholic","Catholic University of Korea","Bucheon · Seoul","Private","1000","o","med soc bus","Medicine-related sciences, social sciences, business",KR_T,"","n","seoul","catholic.ac.kr",""],
["k_inha","Inha University","Incheon","Private","500","o","eng cs bus","Engineering, logistics, computer science, business (sister to Inha University in Tashkent)",KR_T,"Close ties to Inha University in Tashkent.","n","seoul","inha.ac.kr",""],
["k_ajou","Ajou University","Suwon","Private","500","o","eng cs bus","Engineering, software, business",KR_T,"","n","seoul","ajou.ac.kr",""],
["k_gachon","Gachon University","Seongnam","Private","?","o","cs med bus","AI and software, health sciences, business",KR_T,"Several spring rounds into January.","n","seoul","gachon.ac.kr",""],
["k_kau","Korea Aerospace University","Goyang","Private","u","o","eng","Aeronautical engineering, aviation, air transport",KR_T,"","n","seoul","kau.ac.kr",""],
["k_dankook","Dankook University","Yongin · Cheonan","Private","?","o","eng cs bus","Engineering, software, business",KR_T,"","n","seoul","dankook.ac.kr",""],
["k_kyonggi","Kyonggi University","Suwon · Seoul","Private","u","o","hos bus art","Tourism, business, arts",KR_T,"","n","seoul","kyonggi.ac.kr",""],
["k_pnu","Pusan National University","Busan","Public (national)","500","o","eng sci bus","Engineering, sciences, business",KR_T,"","n","nat","pusan.ac.kr",""],
["k_knu","Kyungpook National University","Daegu","Public (national)","500","o","eng cs sci","Electronics, computer science, sciences",KR_T,"","n","nat","knu.ac.kr",""],
["k_jnu","Chonnam National University","Gwangju · Yeosu","Public (national)","1000","o","eng sci bus","Engineering, sciences, business",KR_T,"Spring 2027 round open until 23 Oct 2026.","n","nat","jnu.ac.kr",""],
["k_cnu","Chungnam National University","Daejeon","Public (national)","1000","o","eng sci","Engineering, sciences, agriculture",KR_T,"","n","nat","cnu.ac.kr",""],
["k_cbnu","Chungbuk National University","Cheongju","Public (national)","?","o","eng sci","Engineering, sciences",KR_T,"","n","nat","chungbuk.ac.kr",""],
["k_jbnu","Jeonbuk National University","Jeonju","Public (national)","1000","o","eng sci bus","Engineering, sciences, business",KR_T,"","n","nat","jbnu.ac.kr",""],
["k_gnu","Gyeongsang National University","Jinju","Public (national)","?","o","eng sci","Aerospace engineering, sciences, agriculture",KR_T,"","n","nat","gnu.ac.kr",""],
["k_kangwon","Kangwon National University","Chuncheon","Public (national)","?","o","sci eng","Sciences, engineering, forestry",KR_T,"","n","nat","kangwon.ac.kr",""],
["k_jeju","Jeju National University","Jeju","Public (national)","?","o","sci hos","Marine sciences, tourism",KR_T,"","n","nat","jejunu.ac.kr",""],
["k_pknu","Pukyong National University","Busan","Public (national)","?","o","eng sci","Fisheries and marine sciences, engineering",KR_T,"","n","nat","pknu.ac.kr",""],
["k_woosong","Woosong University – Endicott College of International Studies","Daejeon","Private","u","o","bus hos cs","Global business, hospitality, culinary arts, IT (English-taught)","","","n","reg","wsu.ac.kr",""],
["k_handong","Handong Global University","Pohang","Private (Christian)","u","o","cs bus soc","Computer science, global management, international studies (English-heavy)","","Christian university with English-heavy teaching.","n","reg","handong.edu",""],
["k_sunmoon","Sun Moon University","Asan","Private","u","o","eng bus soc","Engineering, business, Korean studies; very international",KR_T,"","n","reg","sunmoon.ac.kr",""],
["k_hanseo","Hanseo University","Seosan","Private","u","o","eng","Aviation (pilot and aircraft maintenance), engineering",KR_T,"","n","reg","hanseo.ac.kr",""],
["k_dongseo","Dongseo University","Busan","Private","u","o","cs art bus","Software, film and digital content, business",KR_T,"","n","reg","dongseo.ac.kr",""],
["k_keimyung","Keimyung University","Daegu","Private","?","o","bus art med","International business (Keimyung Adams College in English), music, health",KR_T,"Keimyung Adams College teaches in English.","n","reg","kmu.ac.kr",""],
["k_yeungnam","Yeungnam University","Gyeongsan","Private","1000","o","eng bus","Engineering, business, Saemaul (development) studies",KR_T,"","n","reg","yu.ac.kr",""],
["k_donga","Dong-A University","Busan","Private","?","o","eng bus","Engineering, business",KR_T,"","n","reg","donga.ac.kr",""],
["k_hallym","Hallym University","Chuncheon","Private","?","o","med cs soc","Health sciences, software, social sciences",KR_T,"","n","reg","hallym.ac.kr",""],
["k_inje","Inje University","Gimhae","Private","?","o","med eng","Health sciences, engineering",KR_T,"","n","reg","inje.ac.kr",""]
], KR_BASE);

/* Latvia */
patchRows({
  lv1:{name:"Riga Technical University (RTU)", city:"Riga", type:"Public", band:"1000", fields:"eng cs bus", courses:"Computer systems, aviation, civil and electrical engineering, RTU Riga Business School (English)", rule:"Lists the Uzbek attestat. Online maths entrance test for every bachelor's plus at least one reference; AIC recognition takes about a month. Some programmes also start in February.", web:"rtu.lv", sel:"o", spring:1},
  lv2:{name:"Rīga Stradiņš University (RSU)", city:"Riga", type:"Public", band:"?", fields:"med soc ir", courses:"Medicine and dentistry (entrance exams), public health, international relations, communication (English)", rule:"Health programmes have entrance exams in biology and chemistry; social sciences admit on documents and interview.", web:"rsu.lv", also:"", sel:"m"},
  lv3:{name:"More Latvian institutions", also:"ISMA, RTU Rēzekne Academy, Art Academy of Latvia, Jāzeps Vītols Latvian Academy of Music, Latvian Academy of Culture, Latvian Academy of Sport Education (closed to you: National Defence Academy)"}
});
const LV_DL = {a:["Autumn 2027: deadlines by citizenship, ~1 May–15 Jul 2027 (Uzbek applicants need a visa, so aim for 1 May); some programmes start in February","2027-04-01","2027-05-01",0]};
const LV_R = "Admits a certificate that opens university at home; AIC recognition (~1 month). Check the programme is accredited before paying.";
addRows("Latvia", LV_DL, [
["l_lu","University of Latvia (LU)","Riga","Public","1000","o","cs bus eco soc","Computer science, business administration, economics, communication (English)","","Names the Uzbek attestat in its country requirements (certified copies in the original language and English).","a","","lu.lv",""],
["l_sse","Stockholm School of Economics in Riga (SSE Riga)","Riga","Private","u","h","eco bus","BSc Economics and Business (English; Swedish degree standards)","","Own admission test in maths, logical reasoning and English; highly selective, strong scholarships.","a","","sseriga.edu",""],
["l_lbtu","Latvia University of Life Sciences and Technologies (LBTU)","Jelgava","Public","?","o","eng sci","Engineering, food technology, IT, agriculture","",LV_R,"a","","lbtu.lv",""],
["l_tsi","Transport and Telecommunication Institute (TSI)","Riga","Private","u","o","cs eng bus","Computer science, aviation, logistics (English; February intake too)","",LV_R,"a","","tsi.lv",""],
["l_riseba","RISEBA University of Applied Sciences","Riga","Private","u","o","bus art soc","Business, media and communication, architecture (English)","",LV_R,"a","","riseba.lv",""],
["l_turiba","Turība University","Riga","Private","u","o","bus hos soc","Business, tourism and hospitality, law, communication (English)","",LV_R,"a","","turiba.lv",""],
["l_eka","EKA University of Applied Sciences","Riga","Private","u","o","bus cs","Business, computer science","",LV_R,"a","","eka.edu.lv",""],
["l_venta","Ventspils University of Applied Sciences","Ventspils","Public","u","o","cs","Computer science, translation","",LV_R,"a","","venta.lv",""],
["l_vidzeme","Vidzeme University of Applied Sciences","Valmiera","Public","u","o","hos cs","Tourism, IT","",LV_R,"a","","va.lv",""],
["l_daugavpils","Daugavpils University","Daugavpils","Public","u","o","sci soc","Sciences, humanities","",LV_R,"a","","du.lv",""],
["l_liepaja","Liepāja University","Liepāja","Public","u","o","art cs","New media art, IT","",LV_R,"a","","liepu.lv",""]
]);

/* Lithuania */
patchRows({
  lt1:{name:"Vilnius University (VU)", city:"Vilnius · Kaunas · Šiauliai", type:"Public", band:"500", fields:"cs bus eco sci med", courses:"Software engineering, business, economics, data science, medicine (English)", rule:"Requires secondary education that opens university at home; recognised in-house. One intake a year.", web:"vu.lt", sel:"o"},
  lt3:{name:"ISM University of Management and Economics", city:"Vilnius", type:"Private", band:"u", fields:"bus eco cs", courses:"International business, economics and data analytics, finance (English)", rule:"Holistic review plus interview; SAT optional.", web:"ism.lt", also:"", sel:"m"},
  lt4:{name:"More Lithuanian institutions", also:"Lithuanian Sports University, Vilnius Academy of Arts, Lithuanian Academy of Music and Theatre, Klaipėda State UAS, Panevėžys UAS, Utena UAS, Alytus UAS, Šiauliai State UAS, Vilnius Business College (closed to you: General Jonas Žemaitis Military Academy)"}
});
const LT_DL = {a:["Autumn 2027: non-EU deadlines ~1 May (Vilnius University) to ~1 Jun (KTU), from ~1 Dec 2026; a few programmes start in February","2027-04-01","2027-05-01",0]};
const LT_R = "Admits a certificate that opens university at home; recognition by SKVC or the university.";
addRows("Lithuania", LT_DL, [
["l_ktu","Kaunas University of Technology (KTU)","Kaunas","Public","1000","o","eng cs bus","Software systems, mechatronics, international business, design (50+ English programmes)","",LT_R,"a","","ktu.edu",""],
["l_vmu","Vytautas Magnus University (VMU)","Kaunas","Public","1000","o","soc bus ir cs","Liberal arts, business, political science, informatics (English)","",LT_R,"a","","vdu.lt",""],
["l_mru","Mykolas Romeris University","Vilnius","Public","?","o","soc bus ir","Law, public security, business, international relations","",LT_R,"a","","mruni.eu",""],
["l_klaipeda","Klaipėda University","Klaipėda","Public","?","o","sci eng","Marine sciences, engineering","",LT_R,"a","","ku.lt",""],
["l_lsmu","Lithuanian University of Health Sciences (LSMU)","Kaunas","Public","1000","m","med sci","Medicine, dentistry, pharmacy, veterinary medicine (English)","","Entrance tests in biology and chemistry for medicine and dentistry.","a","","lsmu.lt",""],
["l_lcc","LCC International University","Klaipėda","Private (US-style)","u","o","bus soc art","International business, psychology, English (liberal arts in English)","",LT_R,"a","","lcc.lt",""],
["l_smk","SMK University of Applied Social Sciences","Vilnius · Klaipėda","Private","u","o","bus hos cs","Business, tourism, IT","",LT_R,"a","","smk.lt",""],
["l_ksu","Kazimieras Simonavičius University","Vilnius","Private","u","o","bus soc art","Business, media, fashion","",LT_R,"a","","ksu.lt",""],
["l_ehu","European Humanities University","Vilnius","Private","u","o","soc art","Humanities, media, design (English and Russian)","",LT_R,"a","","ehu.lt",""],
["l_viko","Vilnius University of Applied Sciences (Vilniaus kolegija)","Vilnius","Public (college)","u","o","bus cs eng","Professional bachelor's: business, IT, engineering","",LT_R,"a","","viko.lt",""],
["l_kauko","Kaunas University of Applied Sciences","Kaunas","Public (college)","u","o","bus eng med","Professional bachelor's: business, engineering, health","",LT_R,"a","","kaunokolegija.lt",""]
]);

/* Malta */
patchRows({
  mt2:{name:"American University of Malta (AUM)", city:"Cospicua (Bormla)", type:"Private (US-style)", band:"u", fields:"cs bus eng", courses:"Computer science, business, engineering (English)", req:"ask:AUM's published rules use Maltese MATSEC or A-levels: confirm how it treats an 11-year certificate", rule:"US-style admission; licensed by the Malta Further and Higher Education Authority (MFHEA).", web:"aum.edu.mt", also:"", sel:"o"}
});
const MT_DL = {o:["October 2027 start · non-EU applicants needing a visa ~1 Jul 2027 (2026: 1 Jul, 14:00)","2027-04-01","2027-07-01",0], p:["Several intakes (October and February); apply ~3 months ahead for the visa","2027-03-01","2027-06-30",1]};
addRows("Malta", MT_DL, [
["m_mcast","Malta College of Arts, Science and Technology (MCAST)","Paola","Public (vocational)","u","o","eng cs bus","Engineering, IT, business (MQF 6 degrees after an MQF 4 diploma)","br","Degree-level entry needs an MQF 4 (A-level-type) qualification first.","o","","mcast.edu.mt",""],
["m_gcm","Global College Malta","Smart City Malta","Private (UK-validated degrees)","u","o","bus cs","Business, computing (foundation available)","ask:Confirm whether you start in its foundation year","Partner-university entry rules.","p","","globalcollege.edu.mt",""],
["m_gbs","GBS Malta","St Julian's","Private","u","o","bus hos","Business, hospitality","ask:Confirm entry with an 11-year certificate","Private admission.","p","","gbs.edu.mt",""],
["m_stmartins","St Martin's Institute of Higher Education","Swatar","Private (University of London degrees)","u","o","bus cs eco","Business, computing, economics (University of London)","ask:University of London rules usually want a foundation after 11-year systems","University of London entry standards.","p","","stmartins.edu",""],
["m_qmul","Queen Mary University of London – Malta Campus","Gozo","UK branch campus","?","x","med","Medicine (MBBS)","D","UK medical-school entry (A-levels or equivalent, UCAT); not open with an 11-year certificate.","o","","qmul.ac.uk/malta",""]
]);

/* Iceland */
patchRows({
  is1:{name:"University of Iceland", city:"Reykjavík", type:"Public", band:"1000", fields:"sci eng soc", courses:"Few English bachelor's (most teach in Icelandic); sciences, engineering, social sciences", rule:"Needs the equivalent of the Icelandic matriculation exam (about 13 years of school), so an 11-year Attestat is expected to fall short. Non-EEA students start in autumn only.", web:"hi.is", also:"", sel:"m"}
});
const IS_DL = {a:["Autumn only for non-EU applicants: ~31 Jan–1 Feb 2027","2027-01-15","2027-02-01",0]};
addRows("Iceland", IS_DL, [
["i_ru","Reykjavík University","Reykjavík","Private (non-profit)","?","m","cs eng bus soc","Computer science, engineering, business, psychology (some English)","br","Needs matriculation-level equivalence; ask for an individual assessment. ISK 16,000 application fee for non-EU applicants.","a","","ru.is",""],
["i_lhi","Iceland University of the Arts","Reykjavík","Private","u","m","art","Fine art, design, music (selected English programmes; portfolio or audition)","br","Portfolio or audition plus matriculation-level equivalence.","a","","lhi.is",""],
["i_more","Other Icelandic universities","Akureyri · Hvanneyri · Hólar · Bifröst","Public and private","u","o","sci bus soc","Mostly Icelandic-taught","br;lang:Icelandic","Taught almost entirely in Icelandic.","a","","","University of Akureyri, Agricultural University of Iceland, Hólar University, Bifröst University"]
]);

/* Luxembourg */
patchRows({
  lu1:{rule:"Third-country diplomas need the Ministry of Education's equivalence before you apply (at least 6 weeks; EUR 125). It requires at least 12 consecutive years of school, so an 11-year Attestat fails. Whether a year of university completes the 12 years is not established: ask the Ministry in writing."},
  lu2:{name:"LUNEX University", city:"Differdange", type:"Private (state-accredited)", band:"u", fields:"med bus", courses:"Physiotherapy, sport and exercise science, international sport management (English)", req:"ask:Confirm LUNEX's own rule for an 11-year certificate (it may also apply the 12-year equivalence)", rule:"Own admission; state-accredited private university.", web:"lunex.lu", also:"", sel:"o"}
});
const LU_DL = {a:["Own calendar; check (University of Luxembourg's non-EU window was 1 Feb–24 Mar 2026)","2027-02-01","2027-03-24",0]};
addRows("Luxembourg", LU_DL, [
["l_ebu","European Business University of Luxembourg","Luxembourg City","Private","u","o","bus","Business administration (English)","ask:Check accreditation and whether the degree is recognised","Own criteria; verify state recognition before paying.","a","","ebu.lu",""],
["l_ubi","United Business Institutes Luxembourg","Luxembourg City","Private","u","o","bus","Business (with foreign validating partners)","ask:Check accreditation and the validating partner's entry rules","Own criteria; verify recognition.","a","","ubi.lu",""]
]);

/* Foundations and language routes */
F_RAW.forEach(f => {
  if (f[0] === "f23") { f[9] = "Non-EU with a visa: ~1 Jul 2027 (2026: 1 Jul, 14:00); apply early"; f[10] = "2027-04-01"; f[11] = "2027-07-01"; }
});
F_RAW.push(["f_yskli","Yonsei University – Korean Language Institute","Seoul","South Korea","Korean-taught degrees after TOPIK 3–4 (any university)","o","Yes","None (from zero)","Spring term from March 2027; quarterly terms","Spring 2026 term: 12 Dec 2025–16 Jan 2026; expect ~Dec 2026–mid Jan 2027","2026-12-20","2027-01-15","10-week terms",1,0,3,"Language route (D-4 visa), not academic credit.","y","","soc","yskli.com"]);

/* Country cards */
Object.assign(CI["South Korea"], {v:"Mostly open, but ask each university: the Ministry's baseline is 12 years and each university decides. KAIST, Yonsei and GKS reportedly accept completed secondary school.", rule:"University by university (12-year baseline)", visa:"D-2: bank deposit, TB test; avoid the universities under visa restrictions (IEQAS)", spring:"Yes: Sogang, Chonnam, Gachon and other mid-tier rounds Oct 2026–Jan 2027"});
Object.assign(CI["Iceland"], {v:"Matriculation-level equivalence needed; non-EU applicants start in autumn only (deadline ~1 Feb)."});
Object.assign(CI["Luxembourg"], {v:"The University of Luxembourg needs a Ministry equivalence that requires 12 consecutive years; only small private options remain."});
