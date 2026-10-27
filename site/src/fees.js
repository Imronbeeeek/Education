/* ---------- Application platforms and fees (checked 9 Oct 2026) ----------
   p = where you apply, f = fee as shown, usd = rough US$ (0 = free), w = how to pay nothing ("" = no known way),
   src = source for a specific figure. Country defaults first, then university overrides. */
const CA_W = "Some universities waive it (e.g. Memorial, Regina; Guelph runs a waiver for international applicants); recruitment webinars often give waiver codes.";
const FEE_C = {
  "USA":{p:"Common App (most) · UC application · MIT and Georgetown own forms", f:"≈ $50–90 per college", usd:75, w:"Common App fee waiver (profile questions, confirmed by a counselor or school official; each college decides). Some colleges waive automatically for international Common App applicants, and 500+ Common App colleges charge nothing (filter in Common App's college search). Many also waive on an honest email request."},
  "Canada":{p:"Each university's portal (Ontario: one OUAC form)", f:"≈ CAD 100–175", usd:110, w:CA_W},
  "Hong Kong":{p:"Each university's non-JUPAS portal", f:"≈ HK$450–780", usd:80, w:""},
  "China":{p:"Each university's portal · Common App for NYU Shanghai and Duke Kunshan · CSC portal for scholarships", f:"≈ RMB 400–800", usd:85, w:"Scholarship routes (CSC) have no university fee at many universities."},
  "Türkiye":{p:"Each university's own portal", f:"≈ $0–50 (Sabancı $30)", usd:30, w:"Many foundation (private) universities charge nothing."},
  "Spain":{p:"Each private university · UNEDasiss for public universities", f:"≈ €0–150 (UNEDasiss charges for accreditation and PCE exams)", usd:90, w:""},
  "France":{p:"Each school's own portal (BBAs)", f:"≈ €0–120", usd:90, w:""},
  "Italy":{p:"Each university's portal · Universitaly pre-enrolment", f:"≈ €0–100", usd:60, w:""},
  "Qatar":{p:"Common App (CMU-Q, Northwestern-Q, VCUarts-Q) · GU-Q own form or Common App", f:"≈ $0–75", usd:70, w:"Common App fee waiver accepted at CMU-Q; Georgetown-Q charges nothing."},
  "Saudi Arabia":{p:"Study in Saudi (one national platform)", f:"Free", usd:0, w:""},
  "Australia":{p:"Directly with the foundation college or an authorised agent", f:"≈ AUD 0–150", usd:60, w:"Many foundation colleges waive the fee, especially through official agents."},
  "Sweden":{p:"universityadmissions.se (one form, up to 4 programmes)", f:"SEK 900 per semester, covers every choice", usd:85, w:"", src:["universityadmissions.se: pay your application fee","https://universityadmissions.se/en/fees-scholarships-residence-permit/pay-your-application-fee/"]},
  "Finland":{p:"Studyinfo.fi (joint application)", f:"€100 once per term, covers every choice", usd:108, w:"", src:["Metropolia: application fee (national €100, no waivers)","https://www.metropolia.fi/en/academics/applying/application-fee"]},
  "Netherlands":{p:"Studielink, then the university", f:"Studielink free; some universities charge €50–100 or a diploma-check fee", usd:50, w:"Many applied-sciences universities charge nothing."},
  "Germany":{p:"uni-assist (most Studienkollegs and universities)", f:"€75 first application, €30 each more (same semester)", usd:80, w:"Some universities pay the uni-assist fee for you.", src:["uni-assist fees (via Expatrio)","https://www.expatrio.com/about-germany/uni-assist"]},
  "Austria":{p:"Each university's portal", f:"Usually free (check)", usd:0, w:""},
  "Belgium":{p:"Each university's portal", f:"≈ €0–100 (check)", usd:40, w:""},
  "Denmark":{p:"optagelse.dk (one national form)", f:"Free", usd:0, w:""},
  "Norway":{p:"Søknadsweb / each university", f:"Free", usd:0, w:""},
  "Portugal":{p:"Each university (International Student Statute)", f:"≈ €50–100", usd:70, w:""},
  "UAE":{p:"Each university's portal", f:"≈ AED 0–500", usd:110, w:""},
  "Hungary":{p:"Each university (often DreamApply) · Stipendium Hungaricum portal", f:"≈ €100–150 self-funded; Stipendium Hungaricum free", usd:110, w:"Apply through Stipendium Hungaricum: the application and entrance exams are free.", src:["Stipendium Hungaricum: is the application free?","https://stipendiumhungaricum.hu/faq/do-stipendium-hungaricum-applicants-have-to-pay-for-their-application"]},
  "Singapore":{p:"Each university's portal", f:"≈ SGD 0–50 (check)", usd:30, w:""},
  "Bahrain":{p:"Each university", f:"Check", usd:50, w:""},
  "Kuwait":{p:"Each university", f:"Check", usd:50, w:""},
  "Malaysia":{p:"Each university · EMGS for the visa", f:"≈ RM 0–200", usd:40, w:"Many private universities waive the fee for online applications."},
  "South Korea":{p:"Each university's portal · Study in Korea portal for GKS", f:"≈ KRW 50,000–150,000", usd:80, w:"GKS applications are free."},
  "Latvia":{p:"Each university (often DreamApply)", f:"≈ €0–200", usd:100, w:"Some institutions charge nothing."},
  "Lithuania":{p:"Each university (often DreamApply)", f:"≈ €100–150", usd:110, w:""},
  "Malta":{p:"University of Malta portal", f:"≈ €100–200 (unofficial)", usd:120, w:""},
  "Iceland":{p:"Each university's portal (Ugla at the University of Iceland)", f:"Check", usd:60, w:""},
  "Luxembourg":{p:"Each university", f:"Check", usd:60, w:""},
  "Uzbekistan":{p:"The centre in Tashkent", f:"Check", usd:30, w:""}
};
const OUAC = {p:"OUAC 105 form (Ontario)", f:"CAD 156 for 3 choices, then CAD 50 each", usd:115, w:"", src:["OUAC 105 fees","https://ouac.on.ca/guide/105-fees"]};
const NOFEE = {f:"No application fee (2026 lists; confirm)", usd:0, w:"", src:["BestColleges: colleges with no application fee","https://www.bestcolleges.com/resources/colleges-without-application-fees/"]};
const UCFEE = {p:"UC application (one form for every campus)", f:"$95 per campus for international applicants", usd:95, w:"", ex:"o", src:["UCLA international admission guide 2026","https://admission.ucla.edu/sites/default/files/documents/UCLA-International-Admission-Guide-2026.pdf"]};
const FEE = {
  hk2:{f:"HK$780", usd:100, src:["HKU General Information NJ 2027","https://admissions.hku.hk/sites/default/files/2026-09/HKU_General_Information_NJ_2027.pdf"]},
  ca3:{p:"UBC's own application", f:"CAD 173.25", usd:125, src:["UBC calendar: application fees","https://okanagan.calendar.ubc.ca/fees/application-and-administrative-fees"]},
  qa1:{p:"Common App", f:"$70 (Common App fee waiver accepted)", usd:70, w:"Request a fee waiver inside the Common App.", src:["CMU-Q: how to apply","https://qatar.cmu.edu/admission/how-to-apply"]},
  qa2:{p:"GU-Q application or Common App", f:"Free (waived for every completed application)", usd:0, w:"", src:["GU-Q: how to apply","https://qatar.georgetown.edu/admissions/how-to-apply"]},
  us5g:{p:"Georgetown's own application", w:"Georgetown accepts fee-waiver requests from international applicants for whom the fee is a burden.", src:["Georgetown: application fee waiver","https://uadmissions.georgetown.edu/?p=45"]},
  us3:{w:"Harvard waives the fee on request (fee-waiver lists); also the Common App waiver."},
  us3b:{w:"Yale waives the fee on request (fee-waiver lists); also the Common App waiver."},
  tr2:{f:"$30, paid once per year", usd:30, src:["Sabancı: undergraduate admissions for international students","https://sabanciuniv.edu/en/undergraduate-admissions-international-students"]},
  kr4:{f:"USD 80", usd:80, w:"KAIST's guideline includes a fee-waiver option: check whether you qualify.", src:["KAIST admission guideline (including fee waiver)","https://admission.kaist.ac.kr/wz/api/admin/files/view/intl-undergraduate/KAIST%20Admission%20Guideline%20for%20International%20Applicants%202025%20(including%20fee%20waiver)_v.2.pdf"]},
  kr6:{p:"Study in Korea portal / the university", f:"Free", usd:0, w:""},
  hu_sh:{p:"Stipendium Hungaricum portal", f:"Free (application and entrance exams)", usd:0, w:""},
  lt1:{f:"€100 per application (up to 3 programmes), via Flywire", usd:110, src:["Vilnius University: apply to bachelor's studies","https://www.vu.lt/en/studies/bachelor-and-integrated-studies"]},
  ae1:{f:"AED 400 + 5% VAT", usd:115},
  i_ru:{f:"ISK 16,000 for non-EU applicants", usd:115},
  cn3b:{p:"Common App", f:"No application fee", usd:0, w:""},
  cn3:{p:"Common App"},
  it3:{p:"Own form or the Common App (confirm)"},
  us5o:NOFEE, u_mac:NOFEE, u_grinnell:NOFEE, u_dayton:NOFEE, u_stolaf:NOFEE, u_carleton:NOFEE, u_cc:NOFEE
};
["ca2","ca5","ca6","ca6b","ca6c","ca6d","ca6h","c_tmu","c_carleton","c_guelph","c_laurier","c_brock","c_windsor","c_ontech","c_trent","c_lakehead","c_laurentian","c_ocad"].forEach(id => { FEE[id] = Object.assign({}, OUAC, FEE[id] || {}); });
["c_mun","c_regina"].forEach(id => { FEE[id] = {f:"No application fee (2026 lists; confirm)", usd:0, w:""}; });

/* University-specific fees found 9 Oct 2026. ex: "o" = official page, "s" = secondary source (confirm). */
const IVY = ["Ivy Coach: Ivy League application fees","https://www.ivycoach.com/the-ivy-coach-blog/ivy-league/ivy-league-application-fee-revenue/"];
const TWEB = ["TransferWeb fee table (fees can differ for first-year applicants)","https://transferweb.com/stats/transfer-deadlines-fees"];
const SFC = ["Saving for College: application fees","https://www.savingforcollege.com/article/how-to-cut-college-admissions-application-fees"];
Object.entries({
  us3:{f:"$85", usd:85, ex:"s", src:IVY}, us3b:{f:"$80", usd:80, ex:"s", src:IVY}, us3c:{f:"$75", usd:75, ex:"s", src:IVY},
  us4:{f:"$75", usd:75, ex:"s", src:IVY}, us4b:{f:"$80", usd:80, ex:"s", src:IVY}, us4c:{f:"$80", usd:80, ex:"s", src:IVY},
  us4d:{f:"$85", usd:85, ex:"s", src:IVY}, us4e:{f:"$85", usd:85, ex:"s", src:IVY},
  us3d:{f:"$90–100 (sources differ)", usd:95, ex:"s", src:SFC}, us2:{f:"$75", usd:75, ex:"s", src:SFC}, us2b:{f:"$75", usd:75, ex:"s", src:TWEB},
  us5:{f:"$75", usd:75, ex:"s", src:TWEB}, us5b:{f:"$75–90 (sources differ)", usd:85, ex:"s", src:TWEB}, us5c:{f:"≈ $65–75", usd:75, ex:"s", src:TWEB},
  us5d:{f:"$70", usd:70, ex:"s", src:TWEB}, us5e:{f:"≈ $65–75", usd:75, ex:"s", src:TWEB}, us5f:{f:"$50", usd:50, ex:"s", src:TWEB},
  us5j:{f:"≈ $55–75", usd:75, ex:"s", src:TWEB}, us5k:{f:"≈ $65–75", usd:75, ex:"s", src:TWEB}, us5l:{f:"≈ $40–75 (sources differ)", usd:75, ex:"s", src:TWEB},
  us5g:{f:"≈ $65–75", usd:75, ex:"s"}, us5h:{f:"≈ $75", usd:75, ex:"s"},
  us6:{f:"$80", usd:80, ex:"s"}, us6d:{f:"$95", usd:95, ex:"s"},
  us6c:{f:"$50", usd:50, w:"Northeastern lets domestic and international applicants opt out of the fee with a short online waiver form.", ex:"s"},
  us10b:{f:"$75", usd:75, ex:"s"}, us10c:{f:"$90 for international applicants", usd:90, ex:"s"}, us10:{f:"≈ $75 for international applicants", usd:75, ex:"s"},
  us11h:{f:"$70 for international applicants", usd:70, ex:"s"}, us11i:{f:"$75", usd:75, ex:"o", src:["Penn State: steps to apply (international)","https://www.psu.edu/resources/international-students/steps-to-apply"]},
  us11f:{f:"$90 for international applicants; no waivers for them", usd:90, w:"", ex:"s", src:["UW Tacoma application fee page","https://applyweb.com/uwt/index.ftl"]},
  us12:{f:"$85 for international applicants", usd:85, ex:"s"},
  u_williams:{f:"$65", usd:65, w:"Williams has its own fee waiver; asking for it does not affect your application.", ex:"o", src:["Williams: application fee waiver","https://www.williams.edu/admission-aid/application-fee-waiver/"]},
  u_amherst:{f:"$65", usd:65, ex:"s"}, u_pomona:{f:"$80", usd:80, w:"Pomona Access Pass form if the fee is a hardship and you apply for aid.", ex:"s", src:["Common App: Pomona College","https://www.commonapp.org/explore/pomona-college"]},
  u_bowdoin:{f:"$65", usd:65, w:"No fee for applicants who apply for financial aid (Bowdoin Orient; confirm).", ex:"s", src:["Bowdoin Orient","https://bowdoinorient.com/bonus/article/11307"]},
  u_colby:{f:"No application fee", usd:0, w:"", ex:"s"},
  hk5:{f:"HK$600 (2026/27 entry)", usd:77, ex:"o", src:["HKUST application notes","https://www.join.hkust.edu.hk/oas/notes.pdf"]},
  hk7:{f:"HK$200 per programme choice", usd:26, ex:"o", src:["CityU: fees and scholarships","https://www.cityu.edu.hk/admo/fees-and-scholarships?kind=local"]},
  hk3:{f:"≈ HK$450 (last published figure; confirm)", usd:58, ex:"s"},
  cn3:{p:"Common App", f:"≈ $80", usd:80, ex:"s"},
  cn7:{f:"No fee in the current portal (confirm)", usd:0, w:"", ex:"s"},
  it1:{f:"€100 per application", usd:108, ex:"o", src:["Bocconi: admissions","https://www.unibocconi.it/en/admissions"]},
  it3:{f:"$50 / €50", usd:50, ex:"o", src:["John Cabot: tuition and fees","https://www.johncabot.edu/admissions/enlus/tuition.aspx"]}
}).forEach(([id,o]) => { FEE[id] = Object.assign({}, FEE[id] || {}, o); });
["hk2","ca3","qa1","qa2","tr2","kr4","kr6","hu_sh","lt1","i_ru","cn3b","us5g"].forEach(id => { if (FEE[id] && !FEE[id].ex) FEE[id].ex = FEE[id].src ? "o" : "s"; });
["c_mun","c_regina","ae1","us5o","u_mac","u_grinnell","u_dayton","u_stolaf","u_carleton","u_cc"].forEach(id => { if (FEE[id]) FEE[id].ex = FEE[id].ex || "s"; });
["ca2","ca5","ca6","ca6b","ca6c","ca6d","ca6h","c_tmu","c_carleton","c_guelph","c_laurier","c_brock","c_windsor","c_ontech","c_trent","c_lakehead","c_laurentian","c_ocad"].forEach(id => { FEE[id].ex = "o"; });

/* Third pass (9 Oct 2026): saved list and one batch per country */
const CFW = ["Common App: application fees and fee waivers","https://www.COMMONAPP.ORG/static/d8d4fe3bc09d9b0a67d715d9bb6b20f9/FY-Apply-College-Application-Fees-Waivers.pdf"];
Object.entries({
  us1:{f:"$80", usd:80, w:"Columbia GS accepts an application fee waiver request.", ex:"o", src:["Columbia GS: how to apply","https://www.gs.columbia.edu/content/how-apply"]},
  us1d:{p:"Minerva's own application", f:"No application fee", usd:0, w:"", ex:"o", src:["Minerva: FAQ","https://minerva.edu/faq"]},
  u_amer:{w:"American University may waive the fee for applicants referred by EducationUSA (ask the EducationUSA centre in Tashkent).", ex:"s"},
  kr3:{f:"₩70,000", usd:50, ex:"s"}, k_yonsei:{f:"₩150,000 (international track)", usd:108, ex:"s"}, k_hanyang:{f:"≈ ₩142,000 (2024 figure)", usd:103, ex:"s"},
  cn2c:{f:"RMB 800", usd:110, ex:"o", src:["ZJU International College: undergraduate guide","https://iczu.zju.edu.cn/admissionsen/2024/1030/c68988a2981659/page.htm"]},
  n_zjui:{f:"RMB 800 (charged only after a successful application)", usd:110, ex:"o"},
  cn1:{f:"RMB 800 (Tsinghua admissions page; confirm it covers undergraduates)", usd:110, ex:"s", src:["Tsinghua: application fee","https://yz.tsinghua.edu.cn/en/Costs/Application_Fee.htm"]},
  cn2:{f:"RMB 400", usd:55, ex:"o", src:["Fudan: tuition and fees","https://iss.fudan.edu.cn/Tuition_Fees/Tuition___Fees.htm"]},
  cn7b:{f:"No application fee (September 2026 entry; confirm for 2027)", usd:0, w:"", ex:"s"},
  es2b:{f:"No application fee; the admission test costs €150", usd:160, ex:"o", src:["Universidad Europea: admission for foreign education systems","https://universidadeuropea.com/en/admission-finance/admissions-process/online-foreign-education-systems/"]},
  es2d:{f:"≈ $100", usd:100, ex:"s"},
  fr1b:{f:"€60–80 (sources differ)", usd:80, ex:"s"}, fr1c:{f:"≈ €50–150", usd:100, ex:"s"}, fr1d:{f:"≈ €120", usd:130, ex:"s"}, fr2b:{f:"≈ €100", usd:108, ex:"s"},
  ae_aud:{f:"AED 420 incl. VAT", usd:114, ex:"s"}, ae_adu:{f:"AED 300–315", usd:85, ex:"s"},
  ae4:{f:"AED 360", usd:98, ex:"o", src:["University of Sharjah: undergraduate admissions","https://sharjah.ac.ae/Admissions/Undergraduate"]},
  ae5:{f:"≈ AED 300", usd:82, ex:"s"}, ae_uowd:{f:"No fee (sources mostly agree; confirm)", usd:0, w:"", ex:"s"}, ae_mdx:{f:"Waived (aggregator listings; confirm)", usd:0, w:"", ex:"s"},
  my_taylors:{f:"≈ RM 650 (the RM 2,800 enrolment fee comes only after an offer)", usd:140, ex:"s"},
  my3:{f:"RM 100 (on Monash Malaysia's form); fee waived at its Application Days", usd:22, w:"Apply during a Monash Malaysia Application Day to have the fee waived.", ex:"s"},
  ca6e:{f:"CAD 145 for international credentials", usd:105, w:"", ex:"o", src:["University of Calgary calendar: application fees","https://calendar.ucalgary.ca/pages/4e09a54142464876bbb6f6605f94d14d"]},
  ca6f:{f:"CAD 130 for international applicants", usd:95, w:"", ex:"o", src:["SFU: tuition and fees","https://www.sfu.ca/students/calendar/fees-and-regulations/tuition-fees.html"]},
  ca4:{f:"≈ CAD 136 (2026–27 guide; confirm)", usd:99, w:"", ex:"s"},
  au1:{f:"Trinity Foundation: no application fee (its form)", usd:0, w:"", ex:"s"}, f2:{f:"No application fee (Trinity's form)", usd:0, w:"", ex:"s"},
  f3:{f:"AUD 100–125, often waived through official agents", usd:75, w:"Monash College waives the fee for many agent applications.", ex:"s"}, f4:{f:"AUD 100–125, often waived through official agents", usd:75, w:"Monash College waives the fee for many agent applications.", ex:"s"}
}).forEach(([id,o]) => { FEE[id] = Object.assign({}, FEE[id] || {}, o); });

/* Fourth pass (9 Oct 2026): the rest of the saved list */
Object.entries({
  ca1:{p:"University of Alberta's own application", f:"CAD 150, non-refundable", usd:110, w:"", ex:"o", src:["University of Alberta: international tuition and fees","https://www.ualberta.ca/en/admissions/tuition-and-scholarships/international-tuition-and-fees.html"]},
  es1:{p:"IE's own application", f:"€150 (covers the admission test and committee review)", usd:162, w:"", ex:"o", src:["IE University: application form","https://www.ie.edu/university/admission/admission-process/application-form/"]},
  hk1:{f:"HK$450 (one application, up to two programme choices)", usd:58, ex:"o", src:["HKBU: guidelines to application (non-JUPAS)","https://iss.hkbu.edu.hk/amsappl_nj/geninfo.jsf"]},
  hk3:{f:"HK$500 (2027 entry)", usd:64, ex:"o", src:["CUHK: fees calculator","https://admission.cuhk.edu.hk/application/overseas-other-qualifications-non-local-international-team/fees-calculator/"]},
  cn6:{f:"Not published (check the application portal)", usd:85, ex:""},
  tr1:{f:"≈ 250 TL (last published, 2022; confirm)", usd:8, ex:"s"},
  tr3:{f:"No application fee (2026–27 cycle)", usd:0, w:"", ex:"s", src:["METU: international students office","https://iso.metu.edu.tr/"]},
  fr1:{p:"ESSEC's online portal", f:"€100 (Cergy and Singapore campuses; Morocco €75)", usd:108, w:"", ex:"o", src:["ESSEC Global BBA: apply with an international diploma","https://www.essec.edu/en/program/global-bba-international/"]}
}).forEach(([id,o]) => { FEE[id] = Object.assign({}, FEE[id] || {}, o); });

/* Fifth pass (9 Oct 2026) */
Object.entries({
  us6e:{f:"$75 (fee waiver available)", usd:75, ex:"s", src:["CollegeData: Tufts admission","https://www.collegedata.com/college-search/Tufts-University/admission"]},
  us5n:{f:"$75 (fee waiver available)", usd:75, ex:"o", src:["Case Western 2026–27 data sheet","https://cdn.ymaws.com/members.aicuo.edu/resource/resmgr/documents/cg/2026-27/individual_pages/casewru.pdf"]},
  us5m:{f:"$50", usd:50, w:"Rochester lets domestic and international applicants opt out of the fee with an online form.", ex:"s", src:["CollegeData: Rochester admission","https://www.collegedata.com/college-search/university-of-rochester/admission"]},
  u_davidson:{f:"No application fee (dropped 31 Jul 2026)", usd:0, w:"", ex:"o", src:["Davidson: application fee dropped","https://www.davidson.edu/news/2026/07/31/davidson-college-drops-application-fee"]},
  u_vassar:{f:"$65", usd:65, ex:"s"},
  u_swat:{w:"Swarthmore waives the fee for qualified applicants (checked through its SwatPass portal).", ex:"s", src:["Common App: Swarthmore College","https://www.commonapp.org/explore/swarthmore-college"]},
  hk6:{f:"HK$450 per application", usd:58, ex:"o", src:["PolyU: non-JUPAS FAQ","https://www.polyu.edu.hk/study/ug/admissions/non-jupas-year-1/non-jupas-year-1-frequently-asked-questions"]},
  hk4:{f:"HK$150 per programme choice (2024–25 schedule; HK$200 late)", usd:19, ex:"o", src:["Lingnan: application fees (non-JUPAS)","https://ln.edu.hk/admissions/ug/financing"]},
  hu1:{f:"€95 self-funded; free for Stipendium Hungaricum", usd:103, ex:"o", src:["Corvinus: admission requirements","https://www.uni-corvinus.hu/post/landing-page/application/admissions-requirements/?lang=en"]},
  hu2:{f:"€155 (Faculty of Economics; varies by faculty); free for Stipendium Hungaricum", usd:168, ex:"o", src:["ELTE GTK: paying the application fee","https://gtk.elte.hu/dstore/document/180389/How%20to%20pay%20the%20application%20fee%20via%20EPAY.pdf"]},
  hu4:{f:"$150 at Debrecen (bank transfer); Szeged and Pécs similar, check; free for Stipendium Hungaricum", usd:150, ex:"s", src:["University of Debrecen: tuition, application and entrance fees","https://www.edu.unideb.hu/p/tuition-fee-application-entrance-fee"]},
  lv1:{f:"≈ €165 (portal, Sept 2026; was €150)", usd:178, ex:"s", src:["RTU international admission","https://international.rtu.lv/admission/"]},
  l_lu:{f:"≈ €170 (the figure on its applications portal)", usd:184, ex:"s", src:["Study in Latvia: application fees","https://studyinlatvia.lv/admission/fees-costs/application-fees"]}
}).forEach(([id,o]) => { FEE[id] = Object.assign({}, FEE[id] || {}, o); });
/* v14 batch: focus universities that still showed a typical fee (Oct 2026 searches) */
const BTAA = ["Big Ten admissions guide (fee table)","https://edge.sitecorecloud.io/michiganstab57e-msustrategi129d-prod9868-7e5e/media/Project/MSU/Admissions/Docs/btaa-admissions-guide.pdf"];
const AUFEE = ["GradRight: Australian application fees and fee-free options","https://gradright.com/australia-university-without-application-fee-options-you-can-apply-to-this-admission-cycle/"];
const AUW = "Usually waived when you apply through an authorised education agent in Uzbekistan; universities also run fee-free application weeks.";
Object.entries({
  us11e:{f:"$80", usd:80, ex:"o", src:["UW System 2026 application form (UW–Madison $80)","https://admin.apply.wisconsin.edu/sites/default/files/2025-08/2026-UWPaperApplication-8.25.pdf"]},
  us11:{f:"$75", usd:75, ex:"s", src:BTAA},
  us9:{f:"$75 for international applicants ($50 domestic)", usd:75, ex:"s", src:BTAA},
  us11u:{f:"$50, plus a one-time $50 foreign-credential evaluation", usd:100, ex:"s", src:["UT Dallas catalog: application fees","https://catalog.utdallas.edu/2022/undergraduate/admission/application-fees-and-deadlines"]},
  us5w:{f:"≈ $75 (aggregator figure; check)", usd:75, ex:"s", src:["Yocket: Illinois Tech","https://yocket.com/universities/illinois-institute-of-technology-1043"]},
  us1b:{f:"$80 (Yale College fee)", usd:80, ex:"s"},
  qa5:{p:"HBKU online application", f:"QAR 250 (≈ $69), non-refundable", usd:69, w:"", ex:"s", src:["HBKU: application fee","https://www.hbku.edu.qa/en/admission-fees-payment"]},
  tr3b:{f:"€100 per programme", usd:108, w:"", ex:"o", src:["Boğaziçi: international undergraduate application","https://intl.bogazici.edu.tr/node/100022535"]},
  au5:{p:"UNSW online or an authorised agent", f:"≈ AUD 150 direct (one source says AUD 108)", usd:98, w:AUW, ex:"s", src:AUFEE},
  au4:{p:"Sydney online or an authorised agent", f:"≈ AUD 150 direct", usd:98, w:"Waived for attendees of official Sydney webinars or interviews, and usually through authorised agents.", ex:"s", src:AUFEE},
  au2:{p:"UQ online or an authorised agent", f:"≈ AUD 150 direct", usd:98, w:"Waived during UQ Application Week, and usually through authorised agents.", ex:"s", src:AUFEE},
  au3:{p:"Monash online or an authorised agent", f:"≈ AUD 125 direct", usd:82, w:AUW, ex:"s", src:AUFEE},
  au7:{p:"UTS online or an authorised agent", f:"≈ AUD 100 direct", usd:65, w:AUW, ex:"s", src:AUFEE},
  pt1:{f:"€70, non-refundable", usd:76, ex:"o", src:["Nova SBE: bachelor fees","https://www.novasbe.unl.pt/en/programs/bachelors/economics/fees"]},
  pt2:{f:"€100 early-bird (rounds 1–3), €175 later", usd:108, ex:"o", src:["Católica Lisbon: international bachelor fees","https://clsbe.lisboa.ucp.pt/node/92176"]},
  es3:{f:"€80 (early admission for non-Spanish school leavers)", usd:87, ex:"s", src:["UC3M international application","https://sigma.uc3m.es/SolicitudEntradaINT.html"]}
}).forEach(([id,o]) => { FEE[id] = Object.assign({}, FEE[id] || {}, o); });
FEE_C["Sweden"].ex = "o"; FEE_C["Finland"].ex = "o"; FEE_C["Germany"].ex = "o"; FEE_C["Saudi Arabia"].ex = "s";
const feeOf = x => {
  if (x._fee) return x._fee;
  const c = FEE_C[x.country] || {p:"Each university", f:"Check", usd:60, w:""};
  let o = Object.assign({}, c, FEE[x.id] || {});
  if (x.country === "USA" && /UC application/.test(x.win || "")) o = Object.assign({}, o, UCFEE);
  else if (x.country === "USA" && /Cal State/.test(x.win || "")) o = Object.assign({}, o, {p:"Cal State Apply", f:"$70 per campus; waivers only for California residents", usd:70, w:"", ex:"o", src:["Cal State: application fee waiver","https://calstate.edu/apply/paying-for-college/pages/fee-waiver.aspx"]});
  o.zero = o.usd === 0 || !!o.w;
  return x._fee = o;
};
