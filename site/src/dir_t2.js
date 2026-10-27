/* ---------- Tier 2 directories ---------- */
Object.assign(SEL, {au1:"m", au2:"o", au3:"o", au4:"m", au5:"m", au6:"o", au7:"o", au8:"o", se1:"o", se2:"o", se3:"o", se4:"m", se5:"h", nl1:"o", nl2:"o", nl3:"m", nl4:"o", nl5:"m", no1:"m", pt1:"m", pt2:"m", pt3:"o", ae1:"m", ae3:"x", ae8:"m", ae4:"o", ae5:"o", ae6:"o", at1:"m", at2:"o", at3:"m", at4:"o", at5:"o", be1:"o", be2:"m", be3:"o", be4:"o", dk1:"m", dk2:"o", fi1:"h", fi2:"h", fi3:"m", fi4:"o", de1:"m", de2:"o", de3:"o", hu1:"m", hu2:"o", hu3:"m", hu4:"o", hu5:"h", hu6:"o", sg1:"x", sg2:"o", bh2:"o", kw2:"o", my1:"o", my2:"o", my3:"o", my4:"o"});

/* Australia */
patchRows({
  au6:{name:"Australian National University (ANU)", city:"Canberra", band:"50", courses:"Sciences, economics, international relations, computer science", rule:"Direct entry needs Year 12 level: start with ANU College's foundation (accepts Year 11).", web:"anu.edu.au", also:""},
  au7:{name:"University of Technology Sydney (UTS)", city:"Sydney", band:"100", courses:"Engineering, IT, business, design", rule:"UTS College Foundation (designed for Year 11; IELTS 5.5, Writing 5.0) or a diploma into year 2.", web:"uts.edu.au", also:""},
  au8:{name:"More Australian universities", also:"Charles Darwin, James Cook, Murdoch, Edith Cowan, Southern Cross, CQUniversity, Federation, Charles Sturt, UniSQ, New England, Sunshine Coast, Canberra, Victoria University, ACU, Notre Dame Australia, Torrens"}
});
segAll("au1 au2 au3 au4 au5 au6", "g8"); segAll("au7 au8 au9", "other");
const AU_DL = {f:["Foundation intakes Feb–Oct 2027 → degree from 2028 (Feb or Jul)","2027-04-01","2027-08-15",0]};
const AU_BASE = {g8:"Direct entry needs Year 12 level: start with the university's foundation or diploma (Year 11 accepted), with guaranteed progression at the set grades.", other:"Direct entry needs Year 12 level: start with the university's foundation or diploma (Year 11 accepted), with guaranteed progression at the set grades."};
addRows("Australia", AU_DL, [
["a_adelaide","Adelaide University","Adelaide","Public","100","o","eng sci bus med","Engineering, sciences, business, health (Adelaide and UniSA merged in 2026)","br;w6","Eynesbury foundation (Year 11, IELTS 5.5/5.0).","f","g8","adelaide.edu.au",""],
["a_uwa","University of Western Australia","Perth","Public","100","o","eng sci bus","Engineering, sciences, business","br;w6","Taylors College Perth foundation.","f","g8","uwa.edu.au",""],
["a_rmit","RMIT University","Melbourne","Public","200","o","eng cs art bus","Engineering, IT, design, business","br","RMIT foundation or UP diploma (an NCUK partner).","f","other","rmit.edu.au",""],
["a_deakin","Deakin University","Melbourne · Geelong","Public","500","o","bus cs med sci","Business, IT, health, sciences","br","Deakin College foundation or diploma.","f","other","deakin.edu.au",""],
["a_macq","Macquarie University","Sydney","Public","200","o","bus cs eco","Business, actuarial studies, IT, economics","br","Macquarie University College foundation.","f","other","mq.edu.au",""],
["a_griffith","Griffith University","Brisbane · Gold Coast","Public","500","o","hos bus med","Tourism & hospitality, business, health","br","Griffith College foundation or diploma.","f","other","griffith.edu.au",""],
["a_curtin","Curtin University","Perth","Public","200","o","eng bus sci","Mining & engineering, business, sciences","br","Curtin College diploma or foundation.","f","other","curtin.edu.au",""],
["a_qut","Queensland University of Technology (QUT)","Brisbane","Public","200","o","eng bus cs art","Engineering, business, IT, creative industries","br","QUT International College foundation.","f","other","qut.edu.au",""],
["a_uow","University of Wollongong","Wollongong","Public","200","o","eng bus cs","Engineering, business, computer science","br","UOW College foundation.","f","other","uow.edu.au",""],
["a_newc","University of Newcastle","Newcastle","Public","200","o","eng med bus","Engineering, medicine, business","br","Foundation through the university's college.","f","other","newcastle.edu.au",""],
["a_latrobe","La Trobe University","Melbourne","Public","500","o","bus sci med","Business, sciences, health","br","La Trobe College foundation or diploma.","f","other","latrobe.edu.au",""],
["a_swin","Swinburne University of Technology","Melbourne","Public","500","o","eng cs art","Engineering, IT, design","br","Swinburne foundation or diploma.","f","other","swinburne.edu.au",""],
["a_wsu","Western Sydney University","Sydney","Public","500","o","bus cs med","Business, IT, health","br","Western Sydney University International College.","f","other","westernsydney.edu.au",""],
["a_utas","University of Tasmania","Hobart","Public","500","o","sci bus","Marine & Antarctic science, business","br","Foundation through the university.","f","other","utas.edu.au",""],
["a_flinders","Flinders University","Adelaide","Public","500","o","med sci","Health, sciences","br","Flinders foundation.","f","other","flinders.edu.au",""],
["a_bond","Bond University","Gold Coast","Private","?","o","bus soc med","Business, law, health; 2-year accelerated degrees","br","Bond College foundation.","f","other","bond.edu.au",""]
], AU_BASE);

/* Netherlands */
patchRows({
  nl2:{name:"Vrije Universiteit Amsterdam", city:"Amsterdam", rule:"Research university: VWO level needed, so a bridge year first (the Holland ISC foundation is accepted).", web:"vu.nl", also:""},
  nl3:{name:"Erasmus University Rotterdam", city:"Rotterdam", rule:"Needs one year of university; independent foundation certificates are not accepted.", web:"eur.nl", also:""},
  nl5:{name:"University of Amsterdam", city:"Amsterdam", rule:"VWO level needed: UvA asks for an Attestat-type certificate plus one year of university.", web:"uva.nl", also:""},
  nl1:{name:"More universities of applied sciences", also:"Hogeschool Utrecht, Wittenborg, Codarts, Van Hall Larenstein, Aeres"}
});
segAll("nl2 nl3 nl4 nl5", "wo"); SEG.nl1 = "hbo";
const NL_DL = {wo:["Studielink + university · non-EU deadlines ~1 Feb–1 Apr (for entry after a bridge year)","2027-02-15","2027-04-01",0], hbo:["Studielink · non-EU deadline usually ~1 Apr–1 May 2027","2027-02-15","2027-04-01",0]};
const NL_BASE = {hbo:"Applied sciences: entry at HAVO level, which your Attestat meets; IELTS ~6.0. Degrees are outside global rankings (nostrification in Uzbekistan).", wo:"Research university: VWO level needed, so a bridge year first."};
addRows("Netherlands", NL_DL, [
["nl_rug","University of Groningen","Groningen","Public","200","o","eco bus sci soc","Economics & business, sciences, international relations","br;w6","The Holland ISC foundation is accepted.","wo","wo","rug.nl",""],
["nl_tilburg","Tilburg University","Tilburg","Public","500","m","eco bus soc","Economics, business, social sciences","yr1;w6","Needs one year of university.","wo","wo","tilburguniversity.edu",""],
["nl_leiden","Leiden University","Leiden · The Hague","Public","200","m","ir soc sci","International studies, political science, sciences","br;w6","","wo","wo","universiteitleiden.nl",""],
["nl_utrecht","Utrecht University","Utrecht","Public","200","m","sci soc eco","Sciences, social sciences, economics","br;w6","","wo","wo","uu.nl",""],
["nl_maastricht","Maastricht University","Maastricht","Public","500","m","bus eco med soc","Business, economics, health, European studies (problem-based learning)","br;w6","","wo","wo","maastrichtuniversity.nl",""],
["nl_radboud","Radboud University","Nijmegen","Public","500","o","soc sci bus","Psychology, sciences, business","br;w6","","wo","wo","ru.nl",""],
["nl_tud","Delft University of Technology","Delft","Public","100","m","eng cs","Engineering, aerospace, computer science (mostly Dutch at bachelor level)","br;w6","","wo","wo","tudelft.nl",""],
["nl_tue","Eindhoven University of Technology","Eindhoven","Public","200","m","eng cs","Engineering, computer science","br;w6","","wo","wo","tue.nl",""],
["nl_wur","Wageningen University & Research","Wageningen","Public","200","o","sci","Food, agriculture, environmental sciences","br;w6","","wo","wo","wur.nl",""],
["nl_ucs","University colleges (liberal arts & sciences)","Amsterdam · Utrecht · The Hague · Rotterdam · Maastricht · Groningen","Public (honours colleges)","200","m","soc sci eco","Liberal arts & sciences BA/BSc in English","br;w6","VWO level needed.","wo","wo","","Amsterdam University College, University College Utrecht, Leiden University College, Erasmus University College, University College Maastricht, University College Groningen"],
["nl_hhs","The Hague University of Applied Sciences","The Hague","Public (applied sciences)","u","o","bus ir soc","International business, European studies, international communication","","","hbo","hbo","thehagueuniversity.com",""],
["nl_hva","Amsterdam University of Applied Sciences","Amsterdam","Public (applied sciences)","u","o","bus cs","International business, software engineering","","","hbo","hbo","amsterdamuas.com",""],
["nl_hr","Rotterdam University of Applied Sciences","Rotterdam","Public (applied sciences)","u","o","bus eng","International business, logistics, engineering","","","hbo","hbo","rotterdamuas.com",""],
["nl_saxion","Saxion University of Applied Sciences","Enschede · Deventer","Public (applied sciences)","u","o","bus hos cs","International business, hospitality, ICT","","","hbo","hbo","saxion.edu",""],
["nl_hanze","Hanze University of Applied Sciences","Groningen","Public (applied sciences)","u","o","bus soc art","International business, communication, music","","","hbo","hbo","hanze.nl",""],
["nl_fontys","Fontys University of Applied Sciences","Eindhoven · Venlo","Public (applied sciences)","u","o","cs bus eng","ICT & software, international business, engineering","","","hbo","hbo","fontys.nl",""],
["nl_buas","Breda University of Applied Sciences","Breda","Public (applied sciences)","u","o","hos art cs","Games, tourism, hospitality, media","","","hbo","hbo","buas.nl",""],
["nl_han","HAN University of Applied Sciences","Arnhem · Nijmegen","Public (applied sciences)","u","o","bus eng","International business, engineering","","","hbo","hbo","hanuniversity.com",""],
["nl_avans","Avans University of Applied Sciences","Breda · 's-Hertogenbosch","Public (applied sciences)","u","o","bus","International business","","","hbo","hbo","avans.nl",""],
["nl_windesheim","Windesheim University of Applied Sciences","Zwolle","Public (applied sciences)","u","o","bus","International business, global project management","","","hbo","hbo","windesheim.com",""],
["nl_inholland","Inholland University of Applied Sciences","Amsterdam · Haarlem · Rotterdam","Public (applied sciences)","u","o","bus soc","International business, creative business","","","hbo","hbo","inholland.nl",""],
["nl_nhlstenden","NHL Stenden University of Applied Sciences","Leeuwarden","Public (applied sciences)","u","o","hos bus","Hospitality, international business, tourism","","","hbo","hbo","nhlstenden.com",""],
["nl_zuyd","Zuyd University of Applied Sciences","Maastricht","Public (applied sciences)","u","o","hos bus","Hotel management, international business","","","hbo","hbo","zuyd.nl",""],
["nl_hz","HZ University of Applied Sciences","Vlissingen","Public (applied sciences)","u","o","eng bus","Engineering, water management, international business","","","hbo","hbo","hz.nl",""],
["nl_hth","Hotelschool The Hague","The Hague · Amsterdam","Public (applied sciences)","u","m","hos","International hospitality management","","","hbo","hbo","hotelschool.nl",""]
], NL_BASE);

/* Sweden */
patchRows({
  se3:{name:"Linnaeus University", city:"Växjö · Kalmar", rule:"Your Shahodatnoma meets general entry; maths checked per programme. Several English-taught bachelor's.", web:"lnu.se", also:""},
  se4:{name:"Lund University", city:"Lund", band:"100", rule:"Most bachelor's are taught in Swedish; a few English-taught ones each year.", web:"lunduniversity.lu.se", also:""}
});
segAll("se4", "big"); segAll("se1 se2 se3 se5", "eng");
const SE_DL = {s:["universityadmissions.se national round 16 Oct 2026–15 Jan 2027 (documents ~1 Feb)","2026-12-15","2027-01-15",0]};
const SE_BASE = {big:"Your Shahodatnoma meets general entry. Most bachelor's at large universities are taught in Swedish; check the English list each October.", eng:"Your Shahodatnoma meets general entry, and your IELTS meets English 6 (6.5, no band below 5.5). Maths and physics checked per programme."};
addRows("Sweden", SE_DL, [
["se_uu","Uppsala University","Uppsala","Public","100","m","sci soc eco","Sciences, social sciences, economics","","","s","big","uu.se",""],
["se_su","Stockholm University","Stockholm","Public","200","m","soc sci eco","Social sciences, sciences, economics","","","s","big","su.se",""],
["se_gu","University of Gothenburg","Gothenburg","Public","200","m","bus soc sci","School of Business, Economics and Law; social sciences","","","s","big","gu.se",""],
["se_kth","KTH Royal Institute of Technology","Stockholm","Public","100","h","eng cs","Engineering, computer science (bachelor's mostly in Swedish)","","","s","big","kth.se",""],
["se_chalmers","Chalmers University of Technology","Gothenburg","Public","200","h","eng cs","Engineering (bachelor's mostly in Swedish)","","","s","big","chalmers.se",""],
["se_liu","Linköping University","Linköping","Public","500","m","eng cs med","Engineering, computer science, medicine","","","s","big","liu.se",""],
["se_umu","Umeå University","Umeå","Public","500","o","sci soc","Sciences, social sciences","","","s","big","umu.se",""],
["se_oru","Örebro University","Örebro","Public","1000","o","bus soc med","Business, social sciences, medicine","","","s","big","oru.se",""],
["se_kau","Karlstad University","Karlstad","Public","?","o","bus eng","Business, engineering","","","s","big","kau.se",""],
["se_ltu","Luleå University of Technology","Luleå","Public","1000","o","eng","Engineering, mining, space science","","","s","big","ltu.se",""],
["se_mau","Malmö University","Malmö","Public","u","o","bus soc cs","International business, media, computer science; several English bachelor's","","","s","eng","mau.se",""],
["se_bth","Blekinge Institute of Technology","Karlskrona","Public","u","o","cs eng","Software engineering, game development","","","s","eng","bth.se",""],
["se_hh","Halmstad University","Halmstad","Public","u","o","bus eng","International business, engineering","","","s","eng","hh.se",""],
["se_mdu","Mälardalen University","Västerås · Eskilstuna","Public","u","o","eng bus","Engineering, business","","","s","eng","mdu.se",""],
["se_hig","University of Gävle","Gävle","Public","u","o","eng bus","Engineering, business","","","s","eng","hig.se",""],
["se_his","University of Skövde","Skövde","Public","u","o","cs art","Computer game development, informatics","","","s","eng","his.se",""],
["se_du","Dalarna University","Falun · Borlänge","Public","u","o","bus soc","Business, tourism, social sciences","","","s","eng","du.se",""],
["se_hkr","Kristianstad University","Kristianstad","Public","u","o","bus","International business & marketing","","","s","eng","hkr.se",""],
["se_hb","University of Borås","Borås","Public","u","o","art eng","Textile design and engineering","","","s","eng","hb.se",""],
["se_miun","Mid Sweden University","Sundsvall · Östersund","Public","u","o","eng bus","Engineering, business, tourism","","","s","eng","miun.se",""],
["se_sh","Södertörn University","Stockholm","Public","u","o","soc","Social sciences, international studies","","","s","eng","sh.se",""]
], SE_BASE);

/* Finland */
patchRows({
  fi3:{name:"Tampere University", city:"Tampere", band:"500", rule:"Eligible through home-country access; entrance exam or SAT depending on the programme. IELTS 6.5, no section below 5.5.", web:"tuni.fi", also:""},
  fi4:{name:"More universities of applied sciences", also:"Kajaani, Lapland UAS, Satakunta (SAMK), Seinäjoki, Häme (HAMK), Humak, Diaconia"}
});
segAll("fi1 fi2 fi3", "uni"); SEG.fi4 = "uas";
const FI_DL = {j:["Joint application 7–21 Jan 2027 (Studyinfo.fi); entrance exams or the UAS Exam follow","2027-01-14","2027-01-21",0]};
const FI_BASE = {uni:"Eligible if your certificate opens university at home; entrance exam, SAT or prior grades depending on the programme. IELTS 6.5 typical.", uas:"Applied sciences: UAS Exam (online + interview); IELTS usually 6.0 with 5.5 bands."};
addRows("Finland", FI_DL, [
["fi_lut","LUT University","Lappeenranta · Lahti","Public","500","m","eng bus","Energy & electrical engineering, software, business","","","j","uni","lut.fi",""],
["fi_vaasa","University of Vaasa","Vaasa","Public","?","o","bus","International business, economics","","","j","uni","uwasa.fi",""],
["fi_oulu","University of Oulu","Oulu","Public","500","m","eng cs","Engineering, computer science","","","j","uni","oulu.fi",""],
["fi_turku","University of Turku","Turku","Public","500","m","sci bus","Sciences, business","","","j","uni","utu.fi",""],
["fi_jyu","University of Jyväskylä","Jyväskylä","Public","500","m","cs soc","Information technology, social sciences","","","j","uni","jyu.fi",""],
["fi_abo","Åbo Akademi University","Turku","Public","?","o","sci bus","Sciences, business (Swedish and English)","","","j","uni","abo.fi",""],
["fi_uef","University of Eastern Finland","Joensuu · Kuopio","Public","500","o","sci bus","Sciences, business, forestry","","","j","uni","uef.fi",""],
["fi_metropolia","Metropolia University of Applied Sciences","Helsinki","Public (applied sciences)","u","o","eng cs","Engineering, ICT","","","j","uas","metropolia.fi",""],
["fi_haagahelia","Haaga-Helia University of Applied Sciences","Helsinki","Public (applied sciences)","u","o","bus hos cs","International business, hospitality, IT","","","j","uas","haaga-helia.fi",""],
["fi_laurea","Laurea University of Applied Sciences","Espoo · Vantaa","Public (applied sciences)","u","o","bus cs","Business, IT","","","j","uas","laurea.fi",""],
["fi_arcada","Arcada University of Applied Sciences","Helsinki","Public (applied sciences)","u","o","bus eng","International business, engineering","","","j","uas","arcada.fi",""],
["fi_tamk","Tampere University of Applied Sciences (TAMK)","Tampere","Public (applied sciences)","u","o","eng bus","Engineering, international business","","","j","uas","tamk.fi",""],
["fi_turkuamk","Turku University of Applied Sciences","Turku","Public (applied sciences)","u","o","eng bus","Engineering, business","","","j","uas","turkuamk.fi",""],
["fi_jamk","JAMK University of Applied Sciences","Jyväskylä","Public (applied sciences)","u","o","bus hos cs","International business, hospitality, IT","","","j","uas","jamk.fi",""],
["fi_lab","LAB University of Applied Sciences","Lahti · Lappeenranta","Public (applied sciences)","u","o","bus eng","Business, engineering","","","j","uas","lab.fi",""],
["fi_savonia","Savonia University of Applied Sciences","Kuopio","Public (applied sciences)","u","o","eng med","Engineering, nursing","","","j","uas","savonia.fi",""],
["fi_karelia","Karelia University of Applied Sciences","Joensuu","Public (applied sciences)","u","o","bus","International business","","","j","uas","karelia.fi",""],
["fi_xamk","South-Eastern Finland University of Applied Sciences (XAMK)","Kouvola · Mikkeli","Public (applied sciences)","u","o","bus eng","Business, logistics, engineering","","","j","uas","xamk.fi",""],
["fi_centria","Centria University of Applied Sciences","Kokkola","Public (applied sciences)","u","o","eng bus","Engineering, business","","","j","uas","centria.fi",""],
["fi_novia","Novia University of Applied Sciences","Vaasa · Turku","Public (applied sciences)","u","o","eng","Engineering, maritime studies","","","j","uas","novia.fi",""],
["fi_vamk","Vaasa University of Applied Sciences (VAMK)","Vaasa","Public (applied sciences)","u","o","eng bus","Energy engineering, business","","","j","uas","vamk.fi",""]
], FI_BASE);

/* Germany */
patchRows({
  de1:{name:"More German public universities", also:"Göttingen, Münster, Frankfurt, Stuttgart, Darmstadt, Hanover, Würzburg, Erlangen-Nuremberg, Jena, Leipzig, Bremen, Kiel, Bochum, Duisburg-Essen, Dortmund, Paderborn, Siegen and about 80 more"},
  de3:{name:"Constructor University", city:"Bremen", rule:"Private English-taught university with its own International Foundation Year, which leads mainly to Constructor itself.", web:"constructor.university", also:""}
});
segAll("de1 de2", "pub"); SEG.de3 = "priv";
const DE_DL = {pub:["Studienkolleg intakes (apply ~Jan–Jul 2027) → degree from 2028",null,null,0], priv:["Own foundation or a Studienkolleg first; apply ~spring 2027","2027-03-01","2027-06-30",0]};
const DE_BASE = {pub:"Your Attestat gives Studienkolleg access only: a preparatory year ending in the state exam (FSP), then the degree. Most bachelor's are taught in German (C1); English bachelor's are few.", priv:"Private universities also need a German university entrance qualification: their own foundation year or a Studienkolleg first."};
addRows("Germany", DE_DL, [
["de_tum","Technical University of Munich (TUM)","Munich","Public","50","h","eng cs sci bus","Engineering, computer science, management (some English bachelor's)","br","","pub","pub","tum.de",""],
["de_lmu","LMU Munich","Munich","Public","100","m","sci eco soc","Sciences, economics, social sciences (mostly German)","br","","pub","pub","lmu.de",""],
["de_heidelberg","Heidelberg University","Heidelberg","Public","100","m","sci med soc","Sciences, medicine, humanities (mostly German)","br","","pub","pub","uni-heidelberg.de",""],
["de_rwth","RWTH Aachen University","Aachen","Public","200","m","eng cs","Engineering, computer science (FH Aachen's English Studienkolleg is nearby)","br","","pub","pub","rwth-aachen.de",""],
["de_kit","Karlsruhe Institute of Technology (KIT)","Karlsruhe","Public","200","m","eng cs sci","Engineering, computer science, physics","br","","pub","pub","kit.edu",""],
["de_hu","Humboldt University of Berlin","Berlin","Public","200","m","soc sci eco","Humanities, sciences, economics (German)","br","","pub","pub","hu-berlin.de",""],
["de_fu","Freie Universität Berlin","Berlin","Public","200","m","soc sci ir","Political science, sciences, area studies (German)","br","","pub","pub","fu-berlin.de",""],
["de_tub","Technische Universität Berlin","Berlin","Public","200","m","eng cs","Engineering, computer science","br","","pub","pub","tu.berlin",""],
["de_hamburg","University of Hamburg","Hamburg","Public","200","m","eco sci soc","Economics, sciences, social sciences","br","","pub","pub","uni-hamburg.de",""],
["de_tud","TU Dresden","Dresden","Public","500","m","eng cs sci","Engineering, computer science, sciences","br","","pub","pub","tu-dresden.de",""],
["de_freiburg","University of Freiburg","Freiburg","Public","200","m","sci soc","Sciences, humanities, liberal arts college (English)","br","","pub","pub","uni-freiburg.de",""],
["de_mannheim","University of Mannheim","Mannheim","Public","500","m","bus eco","Business administration, economics","br","","pub","pub","uni-mannheim.de",""],
["de_cologne","University of Cologne","Cologne","Public","500","m","eco bus soc","Economics, management, social sciences (CBS Studienkolleg nearby)","br","","pub","pub","uni-koeln.de",""],
["de_fs","Frankfurt School of Finance & Management","Frankfurt","Private","u","m","bus eco","Business administration, finance (English)","br","","priv","priv","frankfurt-school.de",""],
["de_whu","WHU – Otto Beisheim School of Management","Vallendar · Düsseldorf","Private","u","h","bus","International business administration","br","","priv","priv","whu.edu",""],
["de_klu","Kühne Logistics University","Hamburg","Private","u","o","bus","Management, logistics (English)","br","","priv","priv","the-klu.org",""],
["de_mbs","Munich Business School","Munich","Private","u","o","bus","International business (English)","br","","priv","priv","munich-business-school.de",""],
["de_iu","IU International University of Applied Sciences","Berlin and other cities (also online)","Private","u","o","bus cs","Business, IT, data science (English options)","br","","priv","priv","iu.org",""],
["de_srh","SRH University","Berlin · Heidelberg and other cities","Private","u","o","bus cs eng","Business, IT, engineering (English options)","br","","priv","priv","srh.de",""],
["de_cbs","CBS International Business School","Cologne · Mainz · Potsdam","Private","u","o","bus","International business (English); runs its own Studienkolleg","br","","priv","priv","cbs.de",""]
], DE_BASE);

/* Austria */
patchRows({
  at2:{name:"Johannes Kepler University Linz (JKU)", city:"Linz", web:"jku.at", also:""},
  at4:{name:"Webster Vienna Private University", city:"Vienna", rule:"US-style private university; own admission.", web:"webster.ac.at", also:""},
  at5:{name:"University of Vienna", city:"Vienna", web:"univie.ac.at", also:""}
});
const AT_DL = {a:["University portals · apply by ~Mar 2027 for October","2027-03-01","2027-04-30",0]};
addRows("Austria", AT_DL, [
["at_klu","University of Klagenfurt","Klagenfurt","Public","1000","o","cs bus","Informatics, business (some English)","ask:Proof of university access in Uzbekistan (no DTM: ask about an admission letter)","Proof of home-country university access.","a","","aau.at",""],
["at_tuw","TU Wien","Vienna","Public","200","m","eng cs","Engineering, computer science (German)","ask:Proof of university access in Uzbekistan;lang:German C1","Proof of home-country university access plus German C1.","a","","tuwien.at",""],
["at_graz","University of Graz","Graz","Public","500","o","eco sci soc","Economics, sciences, humanities (German)","ask:Proof of university access in Uzbekistan;lang:German C1","Proof of home-country university access plus German C1.","a","","uni-graz.at",""],
["at_uibk","University of Innsbruck","Innsbruck","Public","500","o","sci eco","Sciences, economics (German; some English)","ask:Proof of university access in Uzbekistan;lang:German C1","Proof of home-country university access plus German C1.","a","","uibk.ac.at",""],
["at_modul","Modul University Vienna","Vienna","Private","u","o","hos bus","Tourism & hospitality, international management (English)","","Own admission.","a","","modul.ac.at",""],
["at_imc","IMC Krems University of Applied Sciences","Krems","Public (applied sciences)","u","o","bus med","International business, tourism, health (English options)","","Own admission tests; check how they assess your Attestat.","a","","imc.ac.at",""],
["at_mci","MCI Innsbruck (Management Center Innsbruck)","Innsbruck","Private (applied sciences)","u","o","bus eng","Business, management & IT, engineering (English options)","","Own admission tests; check how they assess your Attestat.","a","","mci.edu",""],
["at_technikum","FH Technikum Wien","Vienna","Public (applied sciences)","u","o","cs eng","Computer science, electronics (some English)","","Own admission tests; check how they assess your Attestat.","a","","technikum-wien.at",""]
]);

/* Belgium */
patchRows({be2:{name:"KU Leuven", city:"Leuven", web:"kuleuven.be", also:"", rule:"Asks for entrance-exam results from the home country; ask whether an Uzbek university admission letter counts."}});
const BE_DL = {b:["University portals · non-EU deadline ~1 Mar 2027","2027-02-01","2027-03-01",0]};
addRows("Belgium", BE_DL, [
["be_ugent","Ghent University","Ghent","Public","200","m","sci eng eco","Sciences, engineering, economics (mostly Dutch; few English bachelor's)","ask:Proof of university access in Uzbekistan (no DTM: ask about an admission letter)","Assesses foreign certificates individually.","b","","ugent.be",""],
["be_uantwerp","University of Antwerp","Antwerp","Public","500","o","eco bus sci","Economics, business, sciences","ask:Proof of university access in Uzbekistan (no DTM: ask about an admission letter)","Needs proof of university access at home.","b","","uantwerpen.be",""],
["be_uhasselt","Hasselt University","Hasselt","Public","?","o","bus eng","Business, engineering","ask:Proof of university access in Uzbekistan (no DTM: ask about an admission letter)","Needs proof of university access at home.","b","","uhasselt.be",""]
]);

/* Denmark */
patchRows({
  dk1:{name:"Copenhagen Business School (CBS)", city:"Copenhagen", band:"?", web:"cbs.dk", also:""},
  dk2:{name:"More business academies & university colleges", req:"ask:Confirm the academy accepts your Attestat for AP entry", also:"Zealand, UC SYD, KP, Absalon, UCN, UCL, EAMV, EASJ"}
});
const DK_DL = {d:["optagelse.dk · 15 Mar 2027 (quota 2)","2027-02-28","2027-03-15",0]};
const DKY = "yr1";
addRows("Denmark", DK_DL, [
["dk_ku","University of Copenhagen","Copenhagen","Public","100","m","sci soc eco","Sciences, social sciences, economics (bachelor's mostly Danish)",DKY,"Needs higher-education study or Danish A/B subject levels; a foundation is unlikely to count.","d","","ku.dk",""],
["dk_au","Aarhus University","Aarhus","Public","200","m","bus eco sci eng","Business, economics, sciences, engineering",DKY,"Needs higher-education study or Danish A/B subject levels.","d","","au.dk",""],
["dk_dtu","Technical University of Denmark (DTU)","Lyngby (Copenhagen)","Public","200","m","eng cs","Engineering (bachelor's mostly Danish; a few in English)",DKY,"Needs higher-education study or Danish A/B subject levels.","d","","dtu.dk",""],
["dk_itu","IT University of Copenhagen","Copenhagen","Public","?","m","cs","Software development, data science, digital design (English)",DKY,"Needs higher-education study or Danish A/B subject levels.","d","","itu.dk",""],
["dk_sdu","University of Southern Denmark","Odense · Sønderborg","Public","500","o","eng bus","Engineering, business (English options)",DKY,"Needs higher-education study or Danish A/B subject levels.","d","","sdu.dk",""],
["dk_aau","Aalborg University","Aalborg · Copenhagen","Public","500","o","eng cs bus","Engineering, computer science (problem-based learning; English options)",DKY,"Needs higher-education study or Danish A/B subject levels.","d","","aau.dk",""],
["dk_eaaa","Business Academy Aarhus","Aarhus","Public (business academy)","u","o","bus cs","Marketing management, computer science (AP degrees in English)","ask:Confirm the academy accepts your Attestat for AP entry","Business academy: practical AP degree in English; a top-up year leads to a bachelor's.","d","","eaaa.dk",""],
["dk_cph","Copenhagen Business Academy","Copenhagen","Public (business academy)","u","o","bus cs","Marketing, IT, international sales (English)","ask:Confirm the academy accepts your Attestat for AP entry","Business academy: practical AP degree in English; a top-up year leads to a bachelor's.","d","","cphbusiness.dk",""],
["dk_kea","KEA – Copenhagen School of Design and Technology","Copenhagen","Public (business academy)","u","o","cs art eng","Computer science, design, construction (English)","ask:Confirm the academy accepts your Attestat for AP entry","Business academy: practical AP degree in English; a top-up year leads to a bachelor's.","d","","kea.dk",""],
["dk_iba","IBA Kolding","Kolding","Public (business academy)","u","o","bus art","International business, design (English)","ask:Confirm the academy accepts your Attestat for AP entry","Business academy: practical AP degree in English; a top-up year leads to a bachelor's.","d","","iba.dk",""],
["dk_via","VIA University College","Aarhus · Horsens","Public (university college)","u","o","eng bus art","Engineering, business, design (English options)","ask:Confirm the college accepts your Attestat","University college: practical degrees in English; ask how your Attestat is assessed.","d","","via.dk",""]
]);

/* Norway */
patchRows({no1:{name:"BI Norwegian Business School", city:"Oslo", band:"?", web:"bi.edu", also:""}});
const NO_DL = {n:["University portals · international deadlines ~1 Dec 2026–1 Mar 2027","2026-12-01","2027-03-01",0]};
const NOY = "yr1", NOR = "Official list: Attestat + 1 year of higher education. A foundation does not count.";
addRows("Norway", NO_DL, [
["no_ntnu","NTNU – Norwegian University of Science and Technology","Trondheim","Public","500","m","eng cs","Engineering, technology (bachelor's mostly Norwegian)",NOY,NOR,"n","","ntnu.edu",""],
["no_uio","University of Oslo","Oslo","Public","200","m","sci soc","Sciences, social sciences (bachelor's mostly Norwegian)",NOY,NOR,"n","","uio.no",""],
["no_uib","University of Bergen","Bergen","Public","500","o","sci soc","Sciences, social sciences",NOY,NOR,"n","","uib.no",""],
["no_uia","University of Agder","Kristiansand","Public","?","o","bus eng","Business, engineering",NOY,NOR,"n","","uia.no",""],
["no_uit","UiT The Arctic University of Norway","Tromsø","Public","1000","o","sci","Sciences, Arctic studies",NOY,NOR,"n","","uit.no",""],
["no_uis","University of Stavanger","Stavanger","Public","?","o","eng hos","Petroleum engineering, hospitality",NOY,NOR,"n","","uis.no",""],
["no_usn","University of South-Eastern Norway","Kongsberg and other campuses","Public","?","o","eng","Engineering, maritime",NOY,NOR,"n","","usn.no",""],
["no_oslomet","OsloMet – Oslo Metropolitan University","Oslo","Public","?","o","cs med","IT, health sciences",NOY,NOR,"n","","oslomet.no",""],
["no_nord","Nord University","Bodø","Public","?","o","bus","Business, aquaculture",NOY,NOR,"n","","nord.no",""],
["no_nmbu","Norwegian University of Life Sciences (NMBU)","Ås","Public","?","o","sci","Life sciences, environment",NOY,NOR,"n","","nmbu.no",""],
["no_kristiania","Kristiania University College","Oslo","Private","u","o","bus art","Business, creative industries",NOY,NOR,"n","","kristiania.no",""]
]);

/* Portugal */
patchRows({
  pt2:{name:"Católica Lisbon School of Business & Economics", city:"Lisbon", band:"?", web:"clsbe.lisboa.ucp.pt", also:""},
  pt3:{name:"University of Porto", city:"Porto", band:"500", web:"up.pt", also:""}
});
const PT_DL = {p:["International Student Statute calls ~Jan–May 2027 (several phases)","2027-02-15","2027-05-31",0]};
const PTL = "lang:Portuguese B2";
addRows("Portugal", PT_DL, [
["pt_iscte","ISCTE – University Institute of Lisbon","Lisbon","Public","?","o","bus cs eco","Management, IT, economics; some English degrees","","International Student Statute.","p","","iscte-iul.pt",""],
["pt_ulisboa","University of Lisbon","Lisbon","Public","500","o","eng eco sci","Engineering (Técnico), economics (ISEG), sciences (mostly Portuguese)",PTL,"International contest plus entrance requirements.","p","","ulisboa.pt",""],
["pt_coimbra","University of Coimbra","Coimbra","Public","500","o","sci soc med","Sciences, law, medicine (Portuguese)",PTL,"International contest plus entrance requirements.","p","","uc.pt",""],
["pt_minho","University of Minho","Braga · Guimarães","Public","1000","o","eng bus","Engineering, business (Portuguese)",PTL,"International contest plus entrance requirements.","p","","uminho.pt",""],
["pt_aveiro","University of Aveiro","Aveiro","Public","1000","o","eng sci","Engineering, sciences (Portuguese)",PTL,"International contest plus entrance requirements.","p","","ua.pt",""],
["pt_europeia","Universidade Europeia","Lisbon","Private","u","o","bus hos art","Business, tourism, design (English options)","","International Student Statute.","p","","europeia.pt",""],
["pt_lusofona","Universidade Lusófona","Lisbon · Porto","Private","u","o","bus art cs","Business, film, computer science (English options)","","International Student Statute.","p","","ulusofona.pt",""]
]);

/* UAE */
patchRows({
  ae4:{name:"University of Sharjah", city:"Sharjah", band:"500", web:"sharjah.ac.ae", also:""},
  ae5:{name:"Heriot-Watt University Dubai", city:"Dubai", band:"500", rule:"May place you in its own foundation first (IELTS 5.5; January/September).", web:"hw.ac.uk/dubai", also:""},
  ae6:{name:"More private universities in the UAE", also:"Emirates Aviation University, Amity Dubai, Manipal Dubai, BITS Pilani Dubai, Westford, Hamdan Bin Mohammed Smart University"}
});
segAll("ae1 ae3 ae4 ae6 ae8", "loc"); SEG.ae5 = "br"; segAll("ae2 ae7", "cl");
const AE_DL = {u:["University portals · fall intake; apply by ~spring 2027","2027-03-01","2027-06-30",0]};
const AE_BASE = {loc:"UAE Ministry equivalency accepts the 11-year CIS certificate; English and grades decide.", br:"UAE branch campus: degree from the home university; it may start you in a foundation."};
addRows("UAE", AE_DL, [
["ae_adu","Abu Dhabi University","Abu Dhabi","Private","1000","o","bus eng cs","Business, engineering, IT","","","u","loc","adu.ac.ae",""],
["ae_ajman","Ajman University","Ajman","Private","1000","o","eng med bus","Engineering, dentistry, business","","","u","loc","ajman.ac.ae",""],
["ae_aud","American University in Dubai","Dubai","Private","?","o","bus art eng","Business, design, engineering (US-accredited)","","","u","loc","aud.edu",""],
["ae_cud","Canadian University Dubai","Dubai","Private","?","o","bus eng cs","Business, engineering, IT","","","u","loc","cud.ac.ae",""],
["ae_ud","University of Dubai","Dubai","Private","?","o","bus cs","Business, IT","","","u","loc","ud.ac.ae",""],
["ae_aau","Al Ain University","Al Ain · Abu Dhabi","Private","?","o","bus eng med","Business, engineering, pharmacy","","","u","loc","aau.ac.ae",""],
["ae_aurak","American University of Ras Al Khaimah (AURAK)","Ras Al Khaimah","Private","?","o","eng bus","Engineering, business (US-style)","","","u","loc","aurak.ac.ae",""],
["ae_skyline","Skyline University College","Sharjah","Private","u","o","bus hos","Business, tourism","","","u","loc","skylineuniversity.ac.ae",""],
["ae_zu","Zayed University","Abu Dhabi · Dubai","Public","1000","m","bus soc cs","Business, communication, technological innovation","ask:Confirm places for international applicants","","u","loc","zu.ac.ae",""],
["ae_uaeu","United Arab Emirates University","Al Ain","Public","500","h","eng sci bus","Engineering, sciences, business","ask:Confirm places for international applicants and the 12-year requirement","Mostly for Emirati students.","u","loc","uaeu.ac.ae",""],
["ae_uowd","University of Wollongong in Dubai","Dubai","Branch campus","200","o","bus cs eng","Business, IT, engineering (Australian degree)","","","u","br","uowdubai.ac.ae",""],
["ae_mdx","Middlesex University Dubai","Dubai","Branch campus","?","o","bus cs art","Business, IT, media (UK degree)","","","u","br","mdx.ac.ae",""],
["ae_bham","University of Birmingham Dubai","Dubai","Branch campus","100","m","bus cs eng","Business, computer science, engineering (UK degree)","","Likely to start you with its foundation year.","u","br","birmingham.ac.uk/dubai",""],
["ae_murdoch","Murdoch University Dubai","Dubai","Branch campus","?","o","bus cs","Business, IT (Australian degree)","","","u","br","murdochuniversitydubai.com",""],
["ae_curtin","Curtin University Dubai","Dubai","Branch campus","200","o","bus eng","Business, engineering (Australian degree)","","","u","br","curtindubai.ac.ae",""],
["ae_rit","RIT Dubai","Dubai","Branch campus","?","o","eng cs bus","Engineering, computing, business (US degree)","","","u","br","rit.edu/dubai",""]
], AE_BASE);

/* Hungary */
patchRows({hu6:{name:"More Hungarian universities", also:"Eszterházy, John von Neumann, Sopron, Nyíregyháza, Dunaújváros"}});
const HU_DL = {h:["University portals · ~Jan–May 2027 (each university)","2027-03-31","2027-05-15",0], sh:["Online application ~Nov 2026–15 Jan 2027 (check)","2027-01-05","2027-01-15",0]};
addRows("Hungary", HU_DL, [
["hu_bge","Budapest Business University","Budapest","Public","u","o","bus hos","Business, commerce, tourism (English)","","Accepts a certificate that opens university at home.","h","","uni-bge.hu",""],
["hu_obuda","Óbuda University","Budapest","Public","?","o","eng cs","Engineering, informatics (English)","","Accepts a certificate that opens university at home.","h","","uni-obuda.hu",""],
["hu_mate","Hungarian University of Agriculture and Life Sciences (MATE)","Gödöllő · Budapest","Public","?","o","sci eng","Agriculture, food science, environmental engineering (English)","","Accepts a certificate that opens university at home.","h","","uni-mate.hu",""],
["hu_miskolc","University of Miskolc","Miskolc","Public","?","o","eng","Engineering, materials (English)","","Accepts a certificate that opens university at home.","h","","uni-miskolc.hu",""],
["hu_sze","Széchenyi István University","Győr","Public","?","o","eng bus","Vehicle engineering, business (English)","","Accepts a certificate that opens university at home.","h","","sze.hu",""],
["hu_pannon","University of Pannonia","Veszprém","Public","?","o","eng cs bus","Engineering, IT, business (English)","","Accepts a certificate that opens university at home.","h","","uni-pannon.hu",""],
["hu_sh","Stipendium Hungaricum scholarship","Budapest and other cities","Government scholarship","?","h","eng cs bus med sci","Full scholarship at Hungarian universities","","Uzbekistan is a partner country (confirm this year's quota and the Uzbek ministry's nomination rules).","sh","","stipendiumhungaricum.hu",""]
]);

/* Singapore */
patchRows({
  sg1:{name:"National University of Singapore (NUS)", city:"Singapore", web:"nus.edu.sg", also:""},
  sg2:{name:"SIM Global Education", city:"Singapore", web:"sim.edu.sg", also:""}
});
const SG_DL = {s:["Applications ~Oct 2026–Feb 2027",null,"2027-01-20",0], p:["Several intakes a year","2027-04-01",null,0]};
const SGR = "CIS certificates (Uzbek included) are not accepted alone: 3 AP exams at 4–5 or A-levels, plus SAT 1250+.";
addRows("Singapore", SG_DL, [
["sg_ntu","Nanyang Technological University (NTU)","Singapore","Public","20","x","eng cs bus sci","Engineering, computer science, business","ap;sat1250",SGR,"s","","ntu.edu.sg",""],
["sg_smu","Singapore Management University (SMU)","Singapore","Public","?","h","bus eco cs","Business, economics, information systems","ap;sat1250",SGR,"s","","smu.edu.sg",""],
["sg_sutd","Singapore University of Technology and Design (SUTD)","Singapore","Public","?","h","eng cs art","Engineering, architecture, computing","ap;sat1250",SGR,"s","","sutd.edu.sg",""],
["sg_jcu","James Cook University Singapore","Singapore","Private (Australian degree)","?","o","bus cs","Business, IT, psychology","br","Partner-university rules.","p","","jcu.edu.sg",""],
["sg_curtin","Curtin Singapore","Singapore","Private (Australian degree)","?","o","bus","Business, communication","br","Partner-university rules.","p","","curtin.edu.sg",""],
["sg_kaplan","Kaplan Singapore","Singapore","Private (partner degrees)","u","o","bus cs","Business, IT (UK and Australian partner degrees)","br","Partner-university rules.","p","","kaplan.com.sg",""],
["sg_psb","PSB Academy","Singapore","Private (partner degrees)","u","o","bus eng","Business, engineering (partner degrees)","br","Partner-university rules.","p","","psb-academy.edu.sg",""]
]);

/* Bahrain */
patchRows({bh2:{name:"American University of Bahrain (AUBH)", web:"aubh.edu.bh", also:""}});
const BH_DL = {b:["University portals · fall intake","2027-03-01",null,0]};
const BHQ = "ask:Bahrain equivalency of 11 years is unconfirmed";
addRows("Bahrain", BH_DL, [
["bh_ahlia","Ahlia University","Manama","Private","?","o","bus eng cs","Business, engineering, IT",BHQ,"Private admission after equivalency.","b","","ahlia.edu.bh",""],
["bh_asu","Applied Science University","Manama","Private","?","o","bus soc","Business, law",BHQ,"Private admission after equivalency.","b","","asu.edu.bh",""],
["bh_gu","Gulf University","Manama","Private","u","o","eng bus","Engineering, business",BHQ,"Private admission after equivalency.","b","","gulfuniversity.edu.bh",""],
["bh_ucb","University College of Bahrain","Manama","Private","u","o","bus cs","Business, IT",BHQ,"Private admission after equivalency.","b","","ucb.edu.bh",""],
["bh_bub","British University of Bahrain","Saar","Private (UK degrees)","u","o","bus eng","Business, engineering (UK partner degrees)",BHQ,"Private admission after equivalency.","b","","bub.bh",""],
["bh_rcsi","RCSI Bahrain","Busaiteen","Private (Irish medical school)","?","m","med","Medicine, nursing",BHQ,"Medical school with its own entry tests.","b","","rcsi.com/bahrain",""]
]);

/* Kuwait */
patchRows({kw2:{name:"American University of Kuwait (AUK)", web:"auk.edu.kw", also:""}});
const KW_DL = {k:["University portals · fall intake","2027-03-01",null,0]};
const KWQ = "ask:Kuwait equivalency of 11 years is unconfirmed";
addRows("Kuwait", KW_DL, [
["kw_gust","Gulf University for Science and Technology (GUST)","Kuwait City","Private","?","o","bus cs","Business, computer science",KWQ,"Private admission after equivalency.","k","","gust.edu.kw",""],
["kw_aum","American University of the Middle East (AUM)","Egaila","Private","?","o","eng bus","Engineering, business",KWQ,"Private admission after equivalency.","k","","aum.edu.kw",""],
["kw_au","Australian University (Kuwait)","Kuwait City","Private","u","o","eng bus","Engineering, business, aviation",KWQ,"Private admission after equivalency.","k","","au.edu.kw",""],
["kw_acm","American College of the Middle East","Egaila","Private","u","o","eng bus","Engineering, business",KWQ,"Private admission after equivalency.","k","","acm.edu.kw",""]
]);

/* Malaysia */
patchRows({
  my2:{name:"Universiti Malaya (UM)", city:"Kuala Lumpur", band:"100", web:"um.edu.my", also:""},
  my3:{name:"Monash University Malaysia", city:"Subang Jaya (Kuala Lumpur)", band:"50", rule:"Monash University Foundation Year (MUFY) accepts you now; IELTS 5.5. Band shows Monash's ranking.", web:"monash.edu.my", also:""},
  my4:{name:"More private universities in Malaysia", also:"HELP, INTI, SEGi, UNITEN, UTP, MSU, Limkokwing, UTAR, Lincoln, City University"}
});
segAll("my1 my2 my5", "pub"); segAll("my3 my4", "priv");
const MY_DL = {m:["Several intakes a year (Jan–Feb, Jul, Sep); foundation first, then degree","2027-04-01","2027-07-31",1]};
const MY_BASE = {pub:"Public universities require 12 years, so a foundation (or matriculation-level) year first.", priv:"Requires 12 years, so start with the university's own foundation; EMGS visa approval needed."};
addRows("Malaysia", MY_DL, [
["my_ukm","Universiti Kebangsaan Malaysia (UKM)","Bangi","Public","200","o","eng sci med","Engineering, sciences, medicine","br","","m","pub","ukm.my",""],
["my_upm","Universiti Putra Malaysia (UPM)","Serdang","Public","200","o","sci eng","Agriculture, sciences, engineering","br","","m","pub","upm.edu.my",""],
["my_usm","Universiti Sains Malaysia (USM)","Penang","Public","200","o","sci eng med","Sciences, engineering, medicine","br","","m","pub","usm.my",""],
["my_utm","Universiti Teknologi Malaysia (UTM)","Johor Bahru · Kuala Lumpur","Public","200","o","eng cs","Engineering, computing","br","","m","pub","utm.my",""],
["my_iium","International Islamic University Malaysia (IIUM)","Gombak (Kuala Lumpur)","Public","500","o","soc eng med ir","Law, engineering, medicine, international relations (English and Arabic)","br","","m","pub","iium.edu.my",""],
["my_taylors","Taylor's University","Subang Jaya","Private","500","o","bus hos cs med","Hospitality, business, computing, medicine","br","Taylor's foundation programmes accept you now.","m","priv","taylors.edu.my",""],
["my_nottingham","University of Nottingham Malaysia","Semenyih","Branch campus","200","o","eng bus sci","Engineering, business, sciences (UK degree)","br","","m","priv","nottingham.edu.my",""],
["my_sunway","Sunway University","Subang Jaya","Private","500","o","bus cs hos","Business, computing, hospitality; Lancaster dual degrees","br","","m","priv","sunway.edu.my",""],
["my_hw","Heriot-Watt University Malaysia","Putrajaya","Branch campus","500","o","eng bus","Engineering, business (UK degree)","br","","m","priv","hw.ac.uk/malaysia",""],
["my_xmum","Xiamen University Malaysia","Sepang","Branch campus","500","o","eng bus cs","Engineering, business, computing (Chinese university campus)","br","","m","priv","xmu.edu.my",""],
["my_soton","University of Southampton Malaysia","Johor Bahru","Branch campus","100","o","eng cs","Engineering, computer science (UK degree)","br","","m","priv","southampton.ac.uk/my",""],
["my_curtin","Curtin University Malaysia","Miri (Sarawak)","Branch campus","200","o","eng bus","Engineering, business (Australian degree)","br","","m","priv","curtin.edu.my",""],
["my_swin","Swinburne University of Technology Sarawak","Kuching","Branch campus","500","o","eng cs","Engineering, IT (Australian degree)","br","","m","priv","swinburne.edu.my",""],
["my_apu","Asia Pacific University (APU)","Kuala Lumpur","Private","u","o","cs bus","Computing, cyber security, business","br","Check whether APU accepts 11 years directly.","m","priv","apu.edu.my",""],
["my_ucsi","UCSI University","Kuala Lumpur","Private","500","o","med bus art","Medicine, business, music","br","","m","priv","ucsiuniversity.edu.my",""],
["my_mmu","Multimedia University (MMU)","Cyberjaya · Melaka","Private","1000","o","cs eng art","Computing, engineering, creative multimedia","br","","m","priv","mmu.edu.my",""]
], MY_BASE);
