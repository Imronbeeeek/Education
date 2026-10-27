/* ---------- Tier 2 strategies ---------- */
Object.assign(DEEP, {
"Australia":{
  head:"A strong but slower route. Australian universities want Year 12 level, so you start with a foundation or diploma that accepts your Year 11 Attestat and guarantees progression. Foundation in 2027, degree from 2028 (or a diploma straight into year 2).",
  read:["Foundation colleges (UQ College, Trinity, Monash College, UTS College, Eynesbury, Taylors) read your Attestat grades; a 5.0 average clears every published threshold.","Diplomas (Monash College, UTS College, RMIT UP) teach year 1 of the degree inside the college and move you into year 2 at the university.","The student visa (subclass 500) applies a Genuine Student test: explain why Australia and why now, given 2022–2026."],
  edge:["Grades well above every foundation threshold","IELTS 7.5 overall beats foundation requirements (5.5 with 5.0 bands)","Post-study work rights of 2–4 years"],
  risk:["<b>Time.</b> Foundation plus a 3-year degree is 4 years, like a US degree, but the degree itself starts in 2028.","<b>Visa.</b> The Genuine Student test is strict: document your gap years carefully.","<b>Caps.</b> Australia limits new international enrolments per university, so apply early."],
  plan:[["Jan–Apr 2027","Choose a foundation (UQ College, Monash College or UTS College) and apply."],["Apr–Jun 2027","Offer, then the subclass 500 visa (apply 2–3 months ahead)."],["Jul–Oct 2027","Foundation starts (July or October; February 2028 also works)."],["2028","Degree starts with guaranteed progression at the required grades."]],
  mix:{m:2, o:3}, picks:{m:["au1","au5","au4"], o:["au2","au3","au7"]}
},
"Sweden":{
  head:"Directly open. Sweden accepts the Uzbek Shahodatnoma for general entry, and the national round (16 Oct 2026–15 Jan 2027) fits your timeline. The catch is language: most bachelor's at the big universities are in Swedish, so English options cluster at Jönköping, Linnaeus, Malmö, BTH and other smaller universities.",
  read:["One application on universityadmissions.se for up to 4 programmes; selection by grades or an international quota.","Specific requirements (maths, physics, English 6) are checked from your transcript."],
  edge:["General entry met with your current certificate","IELTS 7.5 meets English 6 (6.5, no band below 5.5)","One simple national round"],
  risk:["<b>Few English bachelor's</b> at Lund, Uppsala, KTH and Chalmers: check the list when the round opens.","<b>Residence permit</b> processing can take 2–3 months, so apply right after admission (April).","<b>Recognition.</b> Smaller universities are outside global rankings (nostrification)."],
  plan:[["16 Oct 2026","Round opens: pick up to 4 English programmes."],["15 Jan 2027","Application deadline; documents by ~1 Feb."],["Late Mar 2027","Results; then the residence permit."]],
  mix:{m:1, o:3}, picks:{m:["se4"], o:["se1","se2","se3","se_mau"]}
},
"Netherlands":{
  head:"Two tiers. Universities of applied sciences admit you directly at HAVO level, and many teach international business, hospitality and IT in English. Research universities (Amsterdam, Leiden, Delft, Groningen and others) need VWO level, so a bridge year first.",
  read:["You apply on Studielink plus the institution's own portal; non-EU deadlines are usually 1 Apr–1 May.","Applied sciences check your diploma level and English (IELTS ~6.0); some programmes add an intake interview."],
  edge:["Direct entry to applied sciences","Many English-taught programmes","IELTS 7.5"],
  risk:["<b>Recognition.</b> Applied-sciences degrees are outside global rankings (nostrification in Uzbekistan).","<b>Housing</b> is scarce: book as soon as you are admitted.","<b>Research universities</b> need a bridge year (Holland ISC) or one year of university."],
  plan:[["Jan–Mar 2027","Apply to 2–3 applied-sciences programmes on Studielink."],["Apr–May 2027","Offers; the institution requests your residence permit."],["Aug 2027","Start, or take Holland ISC in 2027–28 for a research university in 2028."]],
  mix:{m:1, o:3}, picks:{m:["nl_hth"], o:["nl_hhs","nl_hva","nl_saxion"]}
},
"Norway":{
  head:"Closed for 2027 with your current record. Norway's national list requires the Attestat plus one full year of higher education, and a foundation does not count. It becomes realistic after a year of university.",
  read:["Universities apply the national country list first.","Most bachelor's are taught in Norwegian."],
  edge:["Strong universities and English master's later"],
  risk:["<b>Bridge.</b> Only a real university year counts.","<b>Language.</b> Most bachelor's are in Norwegian."],
  plan:[["2027–28","Optional: one year of university to unlock Norway for 2028."]],
  mix:{m:1}, picks:{m:["no1","no_ntnu"]}
},
"Portugal":{
  head:"Open through the International Student Statute. Nova SBE, Católica and ISCTE run international calls through spring 2027 with English options; other public universities mostly teach in Portuguese.",
  read:["Each university runs its own international contest in phases (Jan–May).","Selection on grades plus a motivation letter or entrance requirements; Nova SBE asks for IELTS 6.0 and no SAT."],
  edge:["Several phases into spring","Your IELTS meets Nova SBE"],
  risk:["<b>Visa.</b> Consular and residence-permit processes are slow, so start right after the offer.","<b>Language.</b> Outside Nova, Católica and ISCTE, most bachelor's are in Portuguese."],
  plan:[["Jan–Mar 2027","Nova SBE and Católica first phases."],["Apr–May 2027","Later phases; visa application straight away."]],
  mix:{m:2, o:1}, picks:{m:["pt1","pt2"], o:["pt_iscte"]}
},
"UAE":{
  head:"A practical, English-speaking option. The UAE Ministry accepts the 11-year CIS certificate, the American University of Sharjah takes it explicitly, and branch campuses (Heriot-Watt, Wollongong, Birmingham, Curtin) award foreign degrees. Khalifa University and NYU Abu Dhabi are closed because of their recency rules.",
  read:["Admission on grades and English; some branch campuses start international students in a foundation.","Equivalency through the Ministry of Higher Education."],
  edge:["University-sponsored visas are straightforward","English everywhere","Branch campuses give UK and Australian degrees"],
  risk:["<b>Recognition.</b> Check that the branch-campus degree is the same as the home-campus degree.","<b>Recency rules</b> at Khalifa and NYU Abu Dhabi."],
  plan:[["Jan–Apr 2027","Apply to AUS and two branch campuses."],["May–Jul 2027","Offer, equivalency, university-sponsored visa."]],
  mix:{m:2, o:2}, picks:{m:["ae1","ae_bham"], o:["ae5","ae_uowd"]}
},
"Austria":{
  head:"Public universities want proof that you could enter university in Uzbekistan. Without DTM, that means asking whether an Uzbek university admission letter counts. Most public bachelor's are in German. Private and applied-sciences institutions (Webster, Modul, IMC Krems, MCI) admit on their own terms.",
  read:["Public: home-country access proof plus German C1 for most programmes.","Private and applied sciences: own tests and interviews."],
  edge:["Private English-taught programmes"],
  risk:["<b>Home-access proof</b> without DTM.","<b>German</b> for most public programmes."],
  plan:[["Nov 2026","Ask WU and JKU whether an Uzbek university admission letter counts."],["Jan–Apr 2027","Apply to Webster, Modul or IMC Krems as private options."]],
  mix:{m:1, o:2}, picks:{m:["at1"], o:["at4","at_modul"]}
},
"Belgium":{
  head:"Flemish universities need proof of university access at home, which is hard without DTM; French-community universities need French B2. Applied-sciences colleges assess you individually.",
  read:["Equivalence plus home-access proof; KU Leuven asks for entrance-exam results."],
  edge:["Strong universities and English master's later"],
  risk:["<b>Home-access proof</b> without DTM.","<b>Language.</b> Most bachelor's are in Dutch or French."],
  plan:[["Nov 2026","Email VUB and KU Leuven about the admission-letter route."],["By 1 Mar 2027","Non-EU deadlines."]],
  mix:{m:1, o:1}, picks:{m:["be2"], o:["be1"]}
},
"Denmark":{
  head:"Universities want some higher education or Danish A/B subject levels first, so they are effectively closed for 2027. Business academies (practical AP degrees in English, with a top-up to a bachelor's) may assess you individually.",
  read:["One national portal, optagelse.dk; quota 2 closes 15 March."],
  edge:["Practical English AP degrees with a bachelor's top-up"],
  risk:["<b>Entry level.</b> Universities need one year of higher education.","<b>Business academies</b>: confirm they accept your Attestat."],
  plan:[["Nov 2026–Jan 2027","Email 2–3 business academies about entry."],["15 Mar 2027","optagelse.dk deadline."]],
  mix:{o:2}, picks:{o:["dk_eaaa","dk_cph"]}
},
"Finland":{
  head:"Open. Finnish universities accept a certificate that opens university at home, and the joint application runs 7–21 January 2027. Aalto wants the SAT for your diploma type and Helsinki wants Writing 6.0; applied-sciences universities use the UAS Exam.",
  read:["Selection by entrance exam, SAT or previous grades, depending on the programme.","UAS Exam: an online test plus an interview."],
  edge:["A clear national process","Good English bachelor's at applied-sciences universities","The January round fits your plan"],
  risk:["<b>Writing 5.5</b> blocks Aalto and Helsinki until you retake.","<b>SAT</b> needed for Aalto; the December SAT reaches the 21 January deadline."],
  plan:[["7–21 Jan 2027","Joint application on Studyinfo.fi (up to 6 choices)."],["Feb–May 2027","Entrance exams or the UAS Exam; results by June."]],
  mix:{h:1, m:2, o:3}, picks:{h:["fi1"], m:["fi3","fi_lut"], o:["fi_haagahelia","fi_metropolia","fi_jamk"]}
},
"Germany":{
  head:"Your Attestat gives Studienkolleg access only: a preparatory year ending in the state exam, then the degree from 2028. English-track Studienkollegs exist (FH Aachen, CBS). Most bachelor's are in German, and private English-taught universities need a foundation too.",
  read:["uni-assist checks your certificate; Studienkolleg entrance tests cover maths and German (or English for English tracks)."],
  edge:["Top universities with low fees","18-month job-seeker permit after graduating"],
  risk:["<b>Time.</b> The degree starts in 2028.","<b>German</b> for most degrees.","<b>Visa.</b> Blocked account and appointment waits."],
  plan:[["Jan–Jul 2027","Apply to an English-track Studienkolleg (FH Aachen, CBS) or a German-taught one."],["2027–28","Studienkolleg and the state exam."],["2028","Degree via uni-assist."]],
  mix:{m:2, o:1}, picks:{m:["de_rwth","de_tum"], o:["de2"]}
},
"Hungary":{
  head:"Directly open. Hungarian universities accept a certificate that opens university at home, many teach in English, and the Stipendium Hungaricum scholarship covers Uzbek applicants. Entrance exams or interviews decide.",
  read:["Each university runs its own entrance test or interview (maths for engineering, biology and chemistry for medicine)."],
  edge:["Direct entry","English-taught degrees","A full-scholarship route"],
  risk:["<b>Recognition.</b> Corvinus, ELTE, BME, Debrecen, Szeged, Pécs and Semmelweis are ranked; smaller universities need nostrification.","<b>Stipendium Hungaricum</b> nominations go through Uzbekistan's ministry."],
  plan:[["Nov 2026–15 Jan 2027","Stipendium Hungaricum application."],["Jan–May 2027","Direct applications and entrance exams."]],
  mix:{h:1, m:2, o:2}, picks:{h:["hu5"], m:["hu1","hu3"], o:["hu2","hu4"]}
},
"Jordan":{
  head:"Closed. Equivalency requires proof of 12 years of school, so Jordan opens only after a year of university.",
  read:["Ministry equivalency is the gate for every university."],
  edge:["Arabic-language environment for later study"],
  risk:["<b>12 years</b> required."],
  plan:[["2027","No action for 2027."]],
  mix:{}, picks:{}
},
"Singapore":{
  head:"Not for 2027 at the public universities. NTU, SMU and SUTD do not accept CIS certificates alone and want AP or A-levels plus the SAT (NUS is left out: it requires 12 years of school). Private institutions (SIM, JCU, Curtin, Kaplan) teach partner-university degrees after a foundation.",
  read:["NTU, SMU and SUTD: 3 AP exams at 4–5 or A-levels, plus SAT 1250+."],
  edge:["World-class universities if you add APs for 2028"],
  risk:["<b>AP exams</b> run only in May, so 2028 entry.","<b>Private partner degrees</b> are usually outside global rankings."],
  plan:[["May 2027","Optional: 3 AP exams for 2028 entry to NTU, SMU or SUTD."]],
  mix:{o:1}, picks:{o:["sg2"]}
},
"Bahrain":{
  head:"Uncertain. The University of Bahrain takes only recent graduates, and private universities depend on whether Bahrain's equivalency accepts 11 years, so ask before applying.",
  read:["Equivalency through Bahrain's Higher Education Council."],
  edge:["English-taught private universities"],
  risk:["<b>Equivalency</b> of the 11-year certificate is unconfirmed.","<b>Recognition.</b> Private universities are outside global rankings."],
  plan:[["Nov 2026","Email AUBH and Ahlia about equivalency."]],
  mix:{o:1}, picks:{o:["bh2"]}
},
"Kuwait":{
  head:"Uncertain. Kuwait University scholarships need a certificate under 2 years old, and private universities (AUK, GUST, AUM) depend on Kuwait's equivalency of 11 years.",
  read:["Private universities admit after equivalency."],
  edge:["US-style private universities"],
  risk:["<b>Equivalency</b> unconfirmed.","<b>Recognition.</b> Outside global rankings."],
  plan:[["Nov 2026","Email AUK and GUST about equivalency."]],
  mix:{o:1}, picks:{o:["kw2"]}
},
"Malaysia":{
  head:"Universiti Utara Malaysia admits you directly. Almost every other university wants 12 years, so you start with a foundation (MUFY at Monash, Taylor's). These start several times a year and lead to well-ranked degrees, including UK and Australian branch campuses.",
  read:["Foundation entry on your Attestat, then the degree.","EMGS approves the student pass."],
  edge:["Many intakes a year","English-taught","Branch campuses with UK and Australian degrees"],
  risk:["<b>Time.</b> A foundation first (except at UUM).","<b>Work after study</b> is limited."],
  plan:[["Jan–Apr 2027","UUM directly, or the MUFY or Taylor's foundation."],["Jul–Sep 2027","Start."]],
  mix:{o:3}, picks:{o:["my1","my3","my_taylors"]}
}
});

/* ---------- Country scorecard (1–5; finance ignored) ----------
   a access with your 11-year Attestat in 2027 · o odds of an offer · r recognition in Uzbekistan
   v visa ease · e English-taught supply · t timing fit for 2027 · w work rights after study */
const SCORE_W = {a:25, o:20, r:15, v:15, e:10, t:10, w:5};
const SCORE_L = {a:"Access", o:"Odds", r:"Recognition", v:"Visa", e:"English", t:"Timing", w:"Work after"};
const SCORE_S = {a:"Access", o:"Odds", r:"Recog.", v:"Visa", e:"English", t:"Timing", w:"Work"};
const SCORE = {
  "USA":{a:5,o:4,r:4,v:3,e:5,t:4,w:4, why:"No 12-year rule or age limit and hundreds of open universities; the F-1 interview is the main risk."},
  "Canada":{a:4,o:4,r:5,v:2,e:5,t:4,w:5, why:"Strong ranked universities and work rights, held back by the study-permit cap and case-by-case Attestat checks."},
  "Hong Kong":{a:4,o:3,r:5,v:5,e:5,t:4,w:4, why:"Top-ranked, English-taught and easy visas; the SAT does the work a national exam would."},
  "Türkiye":{a:5,o:5,r:3,v:4,e:4,t:5,w:3, why:"Admission on your diploma grade, rolling deadlines and spring intakes make it the safest Tier 1 country."},
  "China":{a:4,o:4,r:4,v:4,e:3,t:3,w:2, why:"Many ranked universities and scholarships; the CSCA test and university-by-university windows take planning."},
  "Spain":{a:4,o:4,r:3,v:4,e:3,t:3,w:3, why:"Private universities admit directly; public ones need homologation, PCE exams and usually Spanish."},
  "Qatar":{a:3,o:2,r:5,v:5,e:5,t:4,w:3, why:"US degrees from top universities with sponsored visas, but very few places."},
  "France":{a:3,o:4,r:2,v:4,e:3,t:4,w:4, why:"Business-school BBAs admit in rounds; many are outside global rankings, and public universities need French."},
  "Italy":{a:1,o:3,r:2,v:3,e:3,t:2,w:3, why:"The 12-year rule closes almost everything for 2027; only US-accredited Rome colleges are open now."},
  "Saudi Arabia":{a:2,o:3,r:3,v:4,e:1,t:2,w:2, why:"Scholarships taught in Arabic, a certificate-age limit you only just meet, and English privates closed."},
  "Australia":{a:2,o:5,r:5,v:3,e:5,t:4,w:5, why:"Foundation first, but progression is guaranteed and degrees and work rights are excellent."},
  "Sweden":{a:4,o:4,r:4,v:3,e:2,t:5,w:3, why:"Directly eligible in a round that fits your dates; English bachelor's are limited."},
  "Netherlands":{a:3,o:4,r:3,v:4,e:5,t:4,w:4, why:"Applied sciences admit you directly in English; research universities need a bridge year."},
  "Norway":{a:1,o:3,r:4,v:3,e:2,t:2,w:3, why:"Requires one year of university on top of the Attestat."},
  "Portugal":{a:4,o:4,r:3,v:3,e:3,t:4,w:3, why:"International Student Statute calls through spring; slow visas."},
  "UAE":{a:4,o:4,r:3,v:5,e:5,t:4,w:3, why:"Ministry accepts 11 years; English-taught, easy visas, branch-campus degrees."},
  "Austria":{a:2,o:3,r:4,v:3,e:2,t:3,w:3, why:"Home-access proof is hard without DTM; most public degrees in German."},
  "Belgium":{a:2,o:3,r:4,v:3,e:2,t:3,w:3, why:"Home-access proof or French B2; few English bachelor's."},
  "Denmark":{a:1,o:3,r:4,v:3,e:3,t:3,w:3, why:"Universities need extra study first; business academies uncertain."},
  "Finland":{a:4,o:3,r:4,v:4,e:4,t:4,w:4, why:"Eligible now with a clear January round; Aalto and Helsinki need the retake and SAT."},
  "Germany":{a:2,o:3,r:5,v:3,e:2,t:2,w:5, why:"Studienkolleg first and mostly German, but excellent universities and work rights."},
  "Hungary":{a:5,o:4,r:3,v:4,e:4,t:4,w:3, why:"Directly open in English with a scholarship route."},
  "Jordan":{a:1,o:2,r:2,v:4,e:2,t:1,w:2, why:"Closed: 12 years required."},
  "Singapore":{a:1,o:2,r:5,v:4,e:5,t:1,w:3, why:"Public universities need AP exams, so 2028 at the earliest."},
  "Bahrain":{a:2,o:3,r:2,v:4,e:4,t:3,w:2, why:"Equivalency of 11 years unconfirmed."},
  "Kuwait":{a:2,o:3,r:2,v:3,e:4,t:3,w:2, why:"Equivalency of 11 years unconfirmed."},
  "Malaysia":{a:3,o:4,r:4,v:4,e:5,t:4,w:2, why:"UUM direct, others after a short foundation; limited work rights."}
};
const scoreOf = c => { const s = SCORE[c]; if (!s) return null; return Math.round(Object.entries(SCORE_W).reduce((t,[k,w]) => t + w * s[k] / 5, 0)); };

/* US state names for search */
const US_STATES = {AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DC:"Washington DC",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};
