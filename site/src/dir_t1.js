/* ---------- Other Tier 1 directories ---------- */
/* rows: [id, name, city, type, band, sel, fields, courses, req, rule, deadline key, segment, website, also] */

/* Canada */
patchRows({
  ca6h:{name:"York University", city:"Toronto", band:"1000", fields:"bus eng soc art cs", courses:"Schulich business (BBA), Lassonde engineering, liberal arts, film", rule:"Assesses the Uzbek Attestat individually. IELTS 6.5 with 6.0 bands is typical.", web:"yorku.ca", also:"", sel:"o"},
  ca7:{name:"More smaller Canadian universities", also:"Nipissing, Algoma, Brandon, Mount Saint Vincent, Royal Roads, University of the Fraser Valley, Université Sainte-Anne (French), Athabasca (online)"}
});
segAll("ca2 ca3 ca4 ca5 ca1 ca6 ca6b ca6c ca6d ca6e ca6g", "u15");
segAll("ca6f ca6h", "comp"); segAll("ca7 ca10", "small"); SEG.ca8 = "coll"; SEG.ca9 = "fr";
const CA_DL = {
  J15:["15 Jan 2027 (equal consideration; OUAC for Ontario)","2026-12-15","2027-01-15",0],
  F1:["~1 Feb 2027","2027-01-15","2027-02-01",0],
  M1:["~1 Mar 2027","2027-02-01","2027-03-01",0],
  R:["Rolling to ~May 2027; many also start in January","2027-02-15","2027-05-01",1],
  _:["Check the university","2027-02-01","2027-03-01",0]
};
const CA_ASK = "Assesses the Uzbek Attestat individually (ask before applying).";
addRows("Canada", CA_DL, [
["c_tmu","Toronto Metropolitan University","Toronto","Public","1000","m","bus cs eng art soc","Ted Rogers business, computer science, engineering, media & journalism","w6","Lists the Uzbek Attestat (Grade 11) on its country page. IELTS 6.5 with 6.0 bands is typical.","F1","comp","torontomu.ca",""],
["c_carleton","Carleton University","Ottawa","Public","1000","o","ir eng cs soc","International affairs, engineering, computer science, journalism","w6",CA_ASK + " IELTS 6.5 with 6.0 bands is typical.","F1","comp","carleton.ca",""],
["c_concordia","Concordia University","Montréal","Public","1000","o","bus eng cs art","John Molson business, engineering, computer science, fine arts (in English)","",CA_ASK + " Québec also needs a CAQ before the study permit.","M1","comp","concordia.ca",""],
["c_guelph","University of Guelph","Guelph, ON","Public","1000","o","sci bus eng","Agriculture & food, biological sciences, business, engineering","w6",CA_ASK,"J15","comp","uoguelph.ca",""],
["c_laurier","Wilfrid Laurier University","Waterloo, ON","Public","?","o","bus eco soc","Lazaridis business & economics (co-op), social sciences","w6",CA_ASK,"J15","comp","wlu.ca",""],
["c_uvic","University of Victoria","Victoria, BC","Public","1000","o","eng cs sci soc","Engineering & computer science with co-op, sciences, social sciences","w6",CA_ASK,"F1","comp","uvic.ca",""],
["c_usask","University of Saskatchewan","Saskatoon, SK","Public","1000","o","eng sci med bus","Engineering, agriculture, health sciences, Edwards business","w6",CA_ASK,"F1","u15","usask.ca",""],
["c_umanitoba","University of Manitoba","Winnipeg, MB","Public","1000","o","eng sci bus med","Engineering, Asper business, sciences, health","w6",CA_ASK + " Country equivalencies via international.applications@umanitoba.ca.","M1","u15","umanitoba.ca",""],
["c_mun","Memorial University of Newfoundland","St. John's, NL","Public","1000","o","eng sci bus","Ocean & naval engineering, business, sciences","",CA_ASK,"M1","comp","mun.ca",""],
["c_unb","University of New Brunswick","Fredericton, NB","Public","?","o","eng cs bus","Engineering, computer science (cyber security), business","",CA_ASK,"M1","comp","unb.ca",""],
["c_winnipeg","University of Winnipeg","Winnipeg, MB","Public","u","o","bus soc sci cs","Business, applied computer science, environmental studies, social sciences","","Lists the Uzbek secondary certificate with a grade of 4 or better (you have 5).","R","small","uwinnipeg.ca",""],
["c_unbc","University of Northern British Columbia","Prince George, BC","Public","u","o","sci soc bus","Environmental science, forestry, business, health sciences","","Publishes an Uzbekistan sheet (2021): a 5 converts to about 85%.","R","small","unbc.ca",""],
["c_brock","Brock University","St. Catharines, ON","Public","?","o","bus soc sci","Goodman business, sport management, sciences","",CA_ASK,"F1","small","brocku.ca",""],
["c_windsor","University of Windsor","Windsor, ON","Public","?","o","eng bus cs","Engineering, Odette business, computer science","",CA_ASK,"R","small","uwindsor.ca",""],
["c_ontech","Ontario Tech University","Oshawa, ON","Public","u","o","eng cs","Engineering, computer science, game development","",CA_ASK,"F1","small","ontariotechu.ca",""],
["c_trent","Trent University","Peterborough, ON","Public","u","o","soc sci","Environmental studies, social sciences","",CA_ASK,"R","small","trentu.ca",""],
["c_lakehead","Lakehead University","Thunder Bay, ON","Public","u","o","eng sci","Engineering, sciences","",CA_ASK,"R","small","lakeheadu.ca",""],
["c_laurentian","Laurentian University","Sudbury, ON","Public","u","o","eng sci","Mining engineering, sciences","",CA_ASK,"R","small","laurentian.ca",""],
["c_lethbridge","University of Lethbridge","Lethbridge, AB","Public","u","o","bus sci soc","Dhillon business, sciences","",CA_ASK,"R","small","ulethbridge.ca",""],
["c_regina","University of Regina","Regina, SK","Public","u","o","eng bus soc","Engineering, business, social work","",CA_ASK,"R","small","uregina.ca",""],
["c_macewan","MacEwan University","Edmonton, AB","Public","u","o","bus art soc","Business, design, social sciences","",CA_ASK,"R","small","macewan.ca",""],
["c_mru","Mount Royal University","Calgary, AB","Public","u","o","bus soc","Business, aviation, communication","",CA_ASK,"R","small","mtroyal.ca",""],
["c_tru","Thompson Rivers University","Kamloops, BC","Public","u","o","bus hos cs","Business, tourism management, computing; flexible intakes","",CA_ASK,"R","small","tru.ca",""],
["c_kpu","Kwantlen Polytechnic University","Surrey, BC (Vancouver)","Public","u","o","bus cs art","Business, design, computing","",CA_ASK,"R","small","kpu.ca",""],
["c_capu","Capilano University","North Vancouver, BC","Public","u","o","bus art hos","Business, film, tourism","",CA_ASK,"R","small","capilanou.ca",""],
["c_viu","Vancouver Island University","Nanaimo, BC","Public","u","o","bus hos sci","Business, tourism, sciences","",CA_ASK,"R","small","viu.ca",""],
["c_smu","Saint Mary's University","Halifax, NS","Public","u","o","bus sci","Sobey business, sciences","",CA_ASK,"R","small","smu.ca",""],
["c_acadia","Acadia University","Wolfville, NS","Public","u","o","bus sci soc","Business, sciences, social sciences","",CA_ASK,"R","small","acadiau.ca",""],
["c_stfx","St. Francis Xavier University","Antigonish, NS","Public","u","o","bus sci soc","Business, sciences, social sciences","",CA_ASK,"R","small","stfx.ca",""],
["c_mta","Mount Allison University","Sackville, NB","Public","u","o","sci soc art","Liberal arts and sciences","",CA_ASK,"R","small","mta.ca",""],
["c_bishops","Bishop's University","Sherbrooke, QC","Public","u","o","bus soc art","Liberal arts, Williams business (English-language, in Québec)","",CA_ASK + " Québec also needs a CAQ.","M1","small","ubishops.ca",""],
["c_upei","University of Prince Edward Island","Charlottetown, PE","Public","u","o","sci bus","Sciences, business","",CA_ASK,"R","small","upei.ca",""],
["c_cbu","Cape Breton University","Sydney, NS","Public","u","o","bus hos eng","Business, hospitality, engineering technology","",CA_ASK,"R","small","cbu.ca",""],
["c_ocad","OCAD University","Toronto","Public","u","m","art","Art and design; portfolio required","",CA_ASK,"F1","small","ocadu.ca",""],
["c_ecuad","Emily Carr University of Art + Design","Vancouver","Public","u","m","art","Art, design and media; portfolio required","",CA_ASK,"F1","small","ecuad.ca",""],
["c_ucw","University Canada West","Vancouver","Private","u","o","bus","BBA with several intakes a year (private university)","",CA_ASK,"R","small","ucanwest.ca",""]
]);

/* Spain */
patchRows({
  es2f:{name:"More private institutions in Spain", also:"Abat Oliba CEU, Universidad Europea de Valencia, Universidad del Atlántico Medio, Universidad Tecnología y Empresa; EU Business School and Schiller are not official Spanish universities (check recognition)"},
  es4:{also:"Cádiz, Córdoba, Jaén, Huelva, Almería, Pablo de Olavide, La Rioja, Pública de Navarra, Las Palmas de Gran Canaria, Extremadura, Burgos, León, Politécnica de Cartagena, UNED (distance)"}
});
segAll("es1 es2 es2b es2c es2d es2e es2f", "priv"); segAll("es3 es3b es3c es4", "pub");
const ES_DL = {
  pub:["Homologation now · PCE registration ~Mar–Apr · exams May–June · pre-enrolment late June–July 2027","2027-04-15","2027-06-30",0],
  priv:["Rolling admission to ~June 2027 (earlier rounds have more places)","2027-02-15","2027-06-30",0]
};
const ES_BASE = {pub:"Public: homologate your Attestat (the filing receipt is enough), sit the UNEDasiss PCE exams, then pre-enrol in the region.", priv:"Private: own admission (grades, a test or an interview); homologation can finish after you enrol."};
const ESL = "hom;lang:Spanish B2 for most degrees";
addRows("Spain", ES_DL, [
["e_ub","Universitat de Barcelona","Barcelona","Public","200","m","eco bus med sci soc","Economics, business, medicine, sciences (Catalan and Spanish)","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","ub.edu",""],
["e_uab","Universitat Autònoma de Barcelona","Bellaterra (Barcelona)","Public","200","m","eco bus sci soc","Economics, business & management, sciences; some degrees in English","hom","Some degrees are taught in English.","pub","pub","uab.cat",""],
["e_ucm","Universidad Complutense de Madrid","Madrid","Public","200","m","med eco soc sci art","Medicine, economics, political science, sciences",ESL,"","pub","pub","ucm.es",""],
["e_upm","Universidad Politécnica de Madrid","Madrid","Public","500","m","eng cs","Engineering, architecture, computer science",ESL,"","pub","pub","upm.es",""],
["e_upc","Universitat Politècnica de Catalunya (BarcelonaTech)","Barcelona","Public","500","m","eng cs","Engineering, architecture, computer science","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","upc.edu",""],
["e_uv","Universitat de València","Valencia","Public","500","o","eco bus sci med soc","Economics, business, sciences, medicine",ESL,"","pub","pub","uv.es",""],
["e_upv","Universitat Politècnica de València","Valencia","Public","500","m","eng cs art","Engineering, computer science, fine arts",ESL,"","pub","pub","upv.es",""],
["e_ugr","Universidad de Granada","Granada","Public","500","o","cs sci soc med","Computer science, translation, sciences, medicine",ESL,"","pub","pub","ugr.es",""],
["e_us","Universidad de Sevilla","Seville","Public","1000","o","eng eco med","Engineering, economics, health sciences",ESL,"","pub","pub","us.es",""],
["e_usal","Universidad de Salamanca","Salamanca","Public","1000","o","soc eco med","Spain's oldest university: law, economics, Spanish studies",ESL,"","pub","pub","usal.es",""],
["e_unizar","Universidad de Zaragoza","Zaragoza","Public","1000","o","eng eco sci","Engineering, economics, sciences",ESL,"","pub","pub","unizar.es",""],
["e_usc","Universidade de Santiago de Compostela","Santiago de Compostela","Public","1000","o","sci med soc","Sciences, medicine, humanities (Spanish and Galician)",ESL,"","pub","pub","usc.gal",""],
["e_ehu","University of the Basque Country (UPV/EHU)","Bilbao","Public","1000","o","eng sci eco","Engineering, sciences, economics (Spanish and Basque)",ESL,"","pub","pub","ehu.eus",""],
["e_urjc","Universidad Rey Juan Carlos","Madrid","Public","?","o","bus cs soc hos","Business, tourism, computer science; some degrees in English","hom","Some degrees are taught in English.","pub","pub","urjc.es",""],
["e_uah","Universidad de Alcalá","Alcalá de Henares (Madrid)","Public","1000","o","eco bus med","Economics, business, health sciences",ESL,"","pub","pub","uah.es",""],
["e_uma","Universidad de Málaga","Málaga","Public","?","o","cs eng hos","Computer science, engineering, tourism",ESL,"","pub","pub","uma.es",""],
["e_umu","Universidad de Murcia","Murcia","Public","?","o","med soc eco","Health sciences, economics, education",ESL,"","pub","pub","um.es",""],
["e_ua","Universidad de Alicante","Alicante","Public","?","o","hos eco cs","Tourism, economics, computer science",ESL,"","pub","pub","ua.es",""],
["e_uniovi","Universidad de Oviedo","Oviedo","Public","?","o","eng sci med","Engineering, sciences, medicine",ESL,"","pub","pub","uniovi.es",""],
["e_uva","Universidad de Valladolid","Valladolid","Public","?","o","eng eco soc","Engineering, economics, humanities",ESL,"","pub","pub","uva.es",""],
["e_unican","Universidad de Cantabria","Santander","Public","?","o","eng sci eco","Civil engineering, sciences, economics",ESL,"","pub","pub","unican.es",""],
["e_urv","Universitat Rovira i Virgili","Tarragona","Public","?","o","eng sci hos","Chemical engineering, sciences, tourism","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","urv.cat",""],
["e_udg","Universitat de Girona","Girona","Public","?","o","hos sci soc","Tourism, sciences, social sciences","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","udg.edu",""],
["e_udl","Universitat de Lleida","Lleida","Public","?","o","sci eng soc","Agri-food engineering, sciences","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","udl.cat",""],
["e_uji","Universitat Jaume I","Castellón","Public","?","o","eng bus soc","Engineering, business, communication",ESL,"","pub","pub","uji.es",""],
["e_umh","Universidad Miguel Hernández","Elche","Public","?","o","med eng bus","Health sciences, engineering, business",ESL,"","pub","pub","umh.es",""],
["e_uclm","Universidad de Castilla-La Mancha","Ciudad Real · Toledo · Albacete","Public","?","o","eng eco soc","Engineering, economics, humanities",ESL,"","pub","pub","uclm.es",""],
["e_uib","Universitat de les Illes Balears","Palma (Mallorca)","Public","?","o","hos eco","Tourism (strong), economics","hom;lang:Spanish or Catalan B2 for most degrees","","pub","pub","uib.eu",""],
["e_ull","Universidad de La Laguna","Tenerife","Public","?","o","sci soc","Astrophysics, sciences, humanities",ESL,"","pub","pub","ull.es",""],
["e_uvigo","Universidade de Vigo","Vigo","Public","?","o","eng sci","Engineering, marine sciences",ESL,"","pub","pub","uvigo.gal",""],
["e_udc","Universidade da Coruña","A Coruña","Public","?","o","eng cs","Engineering, computer science",ESL,"","pub","pub","udc.gal",""],
["e_comillas","Universidad Pontificia Comillas (ICADE · ICAI)","Madrid","Private","?","m","bus eng soc ir","ICADE business & law, ICAI engineering, international relations; some bilingual degrees","","Own admission test.","priv","priv","comillas.edu",""],
["e_cunef","CUNEF Universidad","Madrid","Private","u","m","eco bus cs","Finance, economics, data science; degrees in English","","","priv","priv","cunef.edu",""],
["e_deusto","Universidad de Deusto","Bilbao · San Sebastián","Private","?","m","bus eng soc ir","Deusto Business School, engineering, international relations; some degrees in English","","","priv","priv","deusto.es",""],
["e_ceu","Universidad CEU San Pablo","Madrid","Private","?","o","med bus soc","Medicine, pharmacy, business, journalism; some English tracks","","","priv","priv","uspceu.com",""],
["e_ufv","Universidad Francisco de Vitoria","Madrid","Private","?","o","med bus soc","Medicine, business, communication","","","priv","priv","ufv.es",""],
["e_nebrija","Universidad Nebrija","Madrid","Private","u","o","bus art eng","Business, design, engineering","","","priv","priv","nebrija.com",""],
["e_ucjc","Universidad Camilo José Cela","Madrid","Private","u","o","bus art soc","Business, design, psychology","","","priv","priv","ucjc.edu",""],
["e_uax","Universidad Alfonso X el Sabio","Madrid","Private","u","o","med bus eng","Health sciences, business, engineering","","","priv","priv","uax.com",""],
["e_esic","ESIC University","Madrid · Barcelona · Valencia","Private","u","o","bus","Marketing, business, digital business; some degrees in English","","","priv","priv","esic.edu",""],
["e_uic","UIC Barcelona (Universitat Internacional de Catalunya)","Barcelona","Private","u","o","med bus art","Health sciences, business, architecture","","","priv","priv","uic.es",""],
["e_mondragon","Mondragon Unibertsitatea","Mondragón","Private","u","o","eng bus","Engineering, team-based business programmes","","","priv","priv","mondragon.edu",""],
["e_loyola","Universidad Loyola Andalucía","Seville · Córdoba","Private","u","o","bus eco eng","Business, economics, engineering; bilingual degrees","","","priv","priv","uloyola.es",""],
["e_ucam","UCAM Universidad Católica de Murcia","Murcia","Private","u","o","med bus","Health sciences, sport, business; some degrees in English","","","priv","priv","ucam.edu",""],
["e_uvic","Universitat de Vic – UCC","Vic (Barcelona)","Private","u","o","bus med soc","Business, health sciences, translation","","","priv","priv","uvic.cat",""],
["e_unir","UNIR (online university)","Online (Logroño)","Private","u","o","bus cs soc","Recognised Spanish degrees taught online","","Online only, so there is no student visa and no campus life.","priv","priv","unir.net",""]
], ES_BASE);

/* Hong Kong */
patchRows({hk9:{name:"More self-financing institutions", also:"Gratia Christian College, UOW College Hong Kong, HKU SPACE and CUHK School of Continuing Studies (associate degrees with progression)"}});
segAll("hk2 hk3 hk5 hk6 hk7 hk1 hk4 hk8", "ugc"); SEG.hk9 = "self";
const HK_DL = {self:["Rolling rounds to ~May–June 2027","2027-02-01","2027-05-31",0], ugc:["Rounds from ~Nov 2026 to ~Mar 2027","2026-12-15","2027-03-01",0]};
addRows("Hong Kong", HK_DL, [
["h_hkmu","Hong Kong Metropolitan University","Ho Man Tin","Self-financing","u","o","bus cs art med hos","Business, computing, creative arts, nursing","","Individual review of the Attestat; IELTS ~6.0.","self","self","hkmu.edu.hk",""],
["h_hsu","Hang Seng University of Hong Kong","Sha Tin","Self-financing","u","o","bus eco cs","Business, finance, supply chain, data science","","Individual review of the Attestat.","self","self","hsu.edu.hk",""],
["h_shueyan","Hong Kong Shue Yan University","North Point","Self-financing","u","o","soc art bus","Journalism, psychology, business","","Individual review of the Attestat.","self","self","hksyu.edu",""],
["h_sfu","Saint Francis University","Tseung Kwan O","Self-financing","u","o","med bus soc","Nursing, business, social sciences","","Individual review of the Attestat.","self","self","sfu.edu.hk",""],
["h_twc","Tung Wah College","Kowloon","Self-financing","u","o","med","Nursing and health sciences","","Individual review of the Attestat.","self","self","twc.edu.hk",""],
["h_chuhai","Hong Kong Chu Hai College","Tuen Mun","Self-financing","u","o","eng bus art","Engineering, business, architecture","","Individual review of the Attestat.","self","self","chuhai.edu.hk",""],
["h_thei","Technological and Higher Education Institute (THEi)","Tsing Yi","Public (VTC, self-financed degrees)","u","o","eng art hos","Engineering, design, hospitality (vocational degrees)","","Individual review of the Attestat.","self","self","thei.edu.hk",""],
["h_hkapa","Hong Kong Academy for Performing Arts","Wan Chai","Public","u","m","art","Dance, drama, film & TV, music; audition required","","Individual review of the Attestat; audition decides.","ugc","ugc","hkapa.edu",""]
]);

/* China */
patchRows({cn2d:{name:"More Chinese universities (CSCA)", also:"Dalian University of Technology, East China Normal, Beijing Normal, Renmin (mostly Chinese-taught), Hunan University, Soochow University, Jiangnan University, Nanjing University of Aeronautics & Astronautics, Zhengzhou University, Hohai University, China University of Petroleum, Ocean University of China and many more"}});
segAll("cn3 cn3b cn6 cn7 cn7b cn7c cn4", "jv"); segAll("cn1 cn1b cn2 cn2b cn2c cn2e", "top"); SEG.cn2d = "more"; SEG.cn5 = "sch";
const CN_DL = {
  pub:["~Nov 2026–Apr 2027 (each university sets its own windows)","2027-02-15","2027-04-15",0],
  jv:["Rounds to ~Apr–Jun 2027","2027-02-15","2027-04-30",0],
  gz:["Priority ~25 Nov 2026 · rolling to ~30 Jun 2027 (third-party dates; confirm)","2026-11-25","2027-06-30",0]
};
const CN_BASE = {top:"Chinese university: CSCA required (maths plus physics or chemistry, in English for English-taught programmes). English-taught bachelor's run in selected fields only; Chinese-taught degrees need HSK 4–5. Ages usually 18–25.", more:"Chinese university: CSCA required (maths plus physics or chemistry). English-taught bachelor's in selected fields only; Chinese-taught degrees need HSK 4–5. Ages usually 18–25."};
addRows("China", CN_DL, [
["n_nju","Nanjing University","Nanjing","Public (C9)","200","m","sci eco soc cs","Sciences, economics, international business; mostly Chinese-taught","csca","","pub","top","nju.edu.cn",""],
["n_ustc","University of Science and Technology of China (USTC)","Hefei","Public (C9)","200","h","sci cs eng","Physics, mathematics, computer science; mostly Chinese-taught","csca","","pub","top","ustc.edu.cn",""],
["n_hit","Harbin Institute of Technology","Harbin (also Shenzhen, Weihai)","Public (C9)","500","m","eng cs","Engineering, computer science, aerospace; some English-taught","csca","","pub","top","hit.edu.cn",""],
["n_whu","Wuhan University","Wuhan","Public","500","m","med cs eco","English-taught MBBS and selected programmes","csca","","pub","top","whu.edu.cn",""],
["n_hust","Huazhong University of Science and Technology","Wuhan","Public","500","m","eng cs med","Engineering, computer science, MBBS in English","csca","","pub","top","hust.edu.cn",""],
["n_sysu","Sun Yat-sen University","Guangzhou","Public","500","m","med bus soc","MBBS in English, business, social sciences","csca","","pub","top","sysu.edu.cn",""],
["n_tongji","Tongji University","Shanghai","Public","500","m","eng art bus","Civil engineering, architecture & design, automotive, business; some English-taught","csca","","pub","top","tongji.edu.cn",""],
["n_buaa","Beihang University","Beijing","Public","500","m","eng cs","Aerospace engineering, computer science; some English-taught","csca","","pub","top","buaa.edu.cn",""],
["n_bit","Beijing Institute of Technology","Beijing","Public","500","m","eng cs bus","Mechanical & vehicle engineering, computer science, business; some English-taught","csca","","pub","top","bit.edu.cn",""],
["n_tju","Tianjin University","Tianjin","Public","500","m","eng sci","Engineering, chemistry, architecture","csca","","pub","top","tju.edu.cn",""],
["n_nankai","Nankai University","Tianjin","Public","500","m","eco bus soc","Economics, business, international studies","csca","","pub","top","nankai.edu.cn",""],
["n_sdu","Shandong University","Jinan","Public","500","o","med sci soc","MBBS in English, sciences","csca","","pub","more","sdu.edu.cn",""],
["n_scu","Sichuan University","Chengdu","Public","500","o","med sci eng","MBBS and dentistry in English, engineering","csca","","pub","more","scu.edu.cn",""],
["n_seu","Southeast University","Nanjing","Public","500","m","eng cs med art","Engineering, architecture, MBBS in English","csca","","pub","more","seu.edu.cn",""],
["n_xmu","Xiamen University","Xiamen","Public","500","m","eco bus sci","Economics, international business (English options), chemistry","csca","","pub","more","xmu.edu.cn",""],
["n_jlu","Jilin University","Changchun","Public","1000","o","med eng","MBBS in English, engineering","csca","","pub","more","jlu.edu.cn",""],
["n_scut","South China University of Technology","Guangzhou","Public","1000","o","eng cs","Engineering, computer science","csca","","pub","more","scut.edu.cn",""],
["n_csu","Central South University","Changsha","Public","1000","o","med eng","MBBS in English, metallurgy, engineering","csca","","pub","more","csu.edu.cn",""],
["n_cqu","Chongqing University","Chongqing","Public","1000","o","eng cs","Engineering, computer science","csca","","pub","more","cqu.edu.cn",""],
["n_uestc","University of Electronic Science and Technology of China","Chengdu","Public","1000","m","cs eng","Electronic engineering, computer science, software; English-taught options","csca","","pub","more","uestc.edu.cn",""],
["n_nwpu","Northwestern Polytechnical University","Xi'an","Public","1000","m","eng","Aeronautics, astronautics, marine engineering","csca","","pub","more","nwpu.edu.cn",""],
["n_lzu","Lanzhou University","Lanzhou","Public","1000","o","sci med","Sciences, medicine","csca","","pub","more","lzu.edu.cn",""],
["n_uibe","University of International Business and Economics (UIBE)","Beijing","Public","?","m","bus eco ir","International business, economics, finance; English-taught bachelor's for international students","csca","","pub","more","uibe.edu.cn",""],
["n_swufe","Southwestern University of Finance and Economics (SWUFE)","Chengdu","Public","?","o","bus eco","Finance, economics, international business; English-taught programmes","csca","","pub","more","swufe.edu.cn",""],
["n_bjtu","Beijing Jiaotong University","Beijing","Public","1000","o","eng cs eco","Transport engineering, computer science, economics","csca","","pub","more","bjtu.edu.cn",""],
["n_shu","Shanghai University","Shanghai","Public","1000","o","eng bus art","Engineering, business, fine arts","csca","","pub","more","shu.edu.cn",""],
["n_szu","Shenzhen University","Shenzhen","Public","1000","o","eng cs bus","Engineering, computer science, business","csca","","pub","more","szu.edu.cn",""],
["n_mbbs","English-taught MBBS (medicine) at approved universities","Various","Public","?","m","med","6-year MBBS taught in English plus internship; HSK 4 needed before graduation","csca","Medicine in English at about 45 universities approved by China's Ministry of Education. CSCA maths plus chemistry (or physics). Check that the university is on the approved list; graduates sit licensing exams at home.","pub","med","","Capital Medical, China Medical University, Dalian Medical, Harbin Medical, Nanjing Medical, Soochow, Tianjin Medical, Zhengzhou, Chongqing Medical, Fudan, Zhejiang, Wuhan, Huazhong UST, Sun Yat-sen, Xi'an Jiaotong, Shandong, Sichuan, Southeast, Jilin, Central South, Guangxi Medical, Hebei Medical, Wenzhou Medical, Qingdao, Ningbo, Jiangsu, Fujian Medical, Kunming Medical"],
["n_blcu","Beijing Language and Culture University","Beijing","Public","u","o","soc","Chinese language & culture; most start with a Chinese language year","lang:HSK for degree entry (a Chinese language year can come first)","Chinese-taught: most international students start with a Chinese language year, then the degree. CSCA rules apply to degree entry.","pub","sch","blcu.edu.cn",""],
["n_hkustgz","HKUST (Guangzhou)","Guangzhou","Sino-Hong Kong university","?","m","cs eng sci","Artificial intelligence, smart manufacturing, data science; choose a major after year 2","","Lists the Uzbek general secondary certificate. IELTS 6.5 with 5.5 per section. Ask whether the CSCA applies.","gz","jv","hkust-gz.edu.cn",""],
["n_gtiit","Guangdong Technion–Israel Institute of Technology","Shantou","Sino-foreign university","u","m","eng sci","Chemical engineering, biotechnology, materials, computer science (Technion degree)","","Taught in English; Technion degree. Ask whether the CSCA applies.","jv","jv","gtiit.edu.cn",""],
["n_zjui","ZJU–UIUC Institute (Zhejiang University)","Haining","Sino-foreign institute","50","h","eng cs","Electrical, computer, mechanical and civil engineering in English; Illinois dual degrees","","Band shows Zhejiang University's ranking. Apply through Zhejiang University's international admissions; ask whether the CSCA applies.","jv","jv","zjui.intl.zju.edu.cn",""],
["n_umji","UM–SJTU Joint Institute (Shanghai Jiao Tong)","Shanghai","Sino-foreign institute","50","h","eng cs","Electrical & computer and mechanical engineering in English; dual-degree option with Michigan","","Band shows SJTU's ranking. Apply through SJTU's international admissions; ask whether the CSCA applies.","jv","jv","ji.sjtu.edu.cn",""]
], CN_BASE);

/* Türkiye */
patchRows({
  tr4:{name:"More Turkish public universities", also:"Dicle, Fırat, İnönü, Süleyman Demirel, Mersin, Trakya, Kırıkkale, Sivas Cumhuriyet, Van Yüzüncü Yıl, Muğla Sıtkı Koçman, Manisa Celal Bayar, Kütahya Dumlupınar, Afyon Kocatepe, Bolu Abant İzzet Baysal, Zonguldak Bülent Ecevit, Recep Tayyip Erdoğan and about 90 more"},
  tr5:{name:"More foundation (private) universities", also:"Istanbul Gelişim, Nişantaşı, Fenerbahçe, Istanbul Arel, Istanbul Esenyurt, Maltepe, Doğuş, Haliç, Ankara Medipol, Lokman Hekim, OSTİM Technical, Konya Food & Agriculture, SANKO, Toros, Çağ and about 40 more"}
});
segAll("tr1 tr2 tr2b tr2c tr5 tr5b", "fdn"); segAll("tr3 tr3b tr3c tr3d tr4", "pub"); SEG.tr6 = "sch";
const TR_DL = {pub:["International quota ~Jun–Aug 2027 (each university)","2027-06-15","2027-08-15",0], fdn:["Rolling to ~Aug 2027; many also start in February","2027-03-31","2027-08-15",1]};
const TR_BASE = {pub:"Public: international quota by SAT, TR-YÖS or diploma grade (each university sets its mix). Turkish-taught programmes need TÖMER C1 or a prep year; English-taught ones need English proof or a prep year.", fdn:"Foundation (private): admission mainly on your diploma grade (yours: 100%) or the SAT; English proof or a prep year; partial scholarships are common."};
addRows("Türkiye", TR_DL, [
["t_ankara","Ankara University","Ankara","Public","1000","o","med soc sci eco","Medicine, law, political science, sciences (mostly Turkish)","","","pub","pub","ankara.edu.tr",""],
["t_istanbul","Istanbul University","Istanbul","Public","1000","o","med soc eco sci","Medicine, law, economics, sciences (mostly Turkish)","","","pub","pub","istanbul.edu.tr",""],
["t_iuc","Istanbul University–Cerrahpaşa","Istanbul","Public","?","o","med eng","Medicine, engineering, health sciences","","","pub","pub","iuc.edu.tr",""],
["t_marmara","Marmara University","Istanbul","Public","?","o","bus eco eng med","Business, economics, engineering (many in English)","","","pub","pub","marmara.edu.tr",""],
["t_ytu","Yıldız Technical University","Istanbul","Public","?","o","eng cs","Engineering, architecture (some in English)","","","pub","pub","yildiz.edu.tr",""],
["t_gazi","Gazi University","Ankara","Public","?","o","eng med soc","Engineering, medicine, education","","","pub","pub","gazi.edu.tr",""],
["t_gtu","Gebze Technical University","Gebze (Kocaeli)","Public","?","m","eng sci cs","Engineering and sciences","","","pub","pub","gtu.edu.tr",""],
["t_iyte","İzmir Institute of Technology","İzmir","Public","?","m","eng sci","Engineering and sciences taught in English","","","pub","pub","iyte.edu.tr",""],
["t_ege","Ege University","İzmir","Public","?","o","med sci eng","Medicine, sciences, engineering","","","pub","pub","ege.edu.tr",""],
["t_deu","Dokuz Eylül University","İzmir","Public","?","o","med bus eng","Medicine, business, engineering","","","pub","pub","deu.edu.tr",""],
["t_galatasaray","Galatasaray University","Istanbul","Public","?","m","eco ir soc eng","Economics, international relations, law, engineering, taught in French","lang:French (or the university's prep year)","","pub","pub","gsu.edu.tr",""],
["t_tau","Turkish-German University","Istanbul","Public","?","o","eng bus soc","Engineering, business, law, taught in German","lang:German (or the university's prep year)","","pub","pub","tau.edu.tr",""],
["t_agu","Abdullah Gül University","Kayseri","Public","?","o","eng cs bus","Engineering, computer science, business taught in English","","","pub","pub","agu.edu.tr",""],
["t_ktu","Karadeniz Technical University","Trabzon","Public","?","o","eng med","Engineering, medicine","","","pub","pub","ktu.edu.tr",""],
["t_erciyes","Erciyes University","Kayseri","Public","?","o","med eng","Medicine, engineering","","","pub","pub","erciyes.edu.tr",""],
["t_ataturk","Atatürk University","Erzurum","Public","?","o","med eng soc","Medicine, engineering, social sciences","","","pub","pub","atauni.edu.tr",""],
["t_cukurova","Çukurova University","Adana","Public","?","o","med eng sci","Medicine, engineering, agriculture","","","pub","pub","cu.edu.tr",""],
["t_uludag","Bursa Uludağ University","Bursa","Public","?","o","med eng bus","Medicine, engineering, business","","","pub","pub","uludag.edu.tr",""],
["t_anadolu","Anadolu University","Eskişehir","Public","?","o","soc art bus","Communication, fine arts, business","","","pub","pub","anadolu.edu.tr",""],
["t_estu","Eskişehir Technical University","Eskişehir","Public","?","o","eng","Aviation, engineering","","","pub","pub","eskisehir.edu.tr",""],
["t_sakarya","Sakarya University","Sakarya","Public","?","o","eng bus","Engineering, business","","","pub","pub","sakarya.edu.tr",""],
["t_kocaeli","Kocaeli University","Kocaeli","Public","?","o","eng med","Engineering, medicine","","","pub","pub","kocaeli.edu.tr",""],
["t_akdeniz","Akdeniz University","Antalya","Public","?","o","hos med","Tourism, medicine","","","pub","pub","akdeniz.edu.tr",""],
["t_pau","Pamukkale University","Denizli","Public","?","o","eng med","Engineering, medicine","","","pub","pub","pau.edu.tr",""],
["t_omu","Ondokuz Mayıs University","Samsun","Public","?","o","med eng","Medicine, engineering","","","pub","pub","omu.edu.tr",""],
["t_selcuk","Selçuk University","Konya","Public","?","o","eng med","Engineering, medicine","","","pub","pub","selcuk.edu.tr",""],
["t_aybu","Ankara Yıldırım Beyazıt University","Ankara","Public","?","o","med eng soc","Medicine, engineering, social sciences; some English-taught","","","pub","pub","aybu.edu.tr",""],
["t_medeniyet","Istanbul Medeniyet University","Istanbul","Public","?","o","med soc","Medicine, social sciences","","","pub","pub","medeniyet.edu.tr",""],
["t_yeditepe","Yeditepe University","Istanbul","Private (foundation)","?","o","med eng bus soc","Medicine, dentistry, engineering, business; many in English","","","fdn","fdn","yeditepe.edu.tr",""],
["t_bilgi","Istanbul Bilgi University","Istanbul","Private (foundation)","?","o","bus soc art cs","Business, media, law, computer science; many in English","","","fdn","fdn","bilgi.edu.tr",""],
["t_kadirhas","Kadir Has University","Istanbul","Private (foundation)","?","o","bus eng art","Business, engineering, communication","","","fdn","fdn","khas.edu.tr",""],
["t_mef","MEF University","Istanbul","Private (foundation)","?","o","eng bus","Engineering, business; all in English, flipped learning","","","fdn","fdn","mef.edu.tr",""],
["t_tobb","TOBB University of Economics and Technology","Ankara","Private (foundation)","?","m","eng bus eco","Engineering, business, economics; co-op terms in every programme","","","fdn","fdn","etu.edu.tr",""],
["t_atilim","Atılım University","Ankara","Private (foundation)","?","o","eng bus","Engineering, business","","","fdn","fdn","atilim.edu.tr",""],
["t_cankaya","Çankaya University","Ankara","Private (foundation)","?","o","eng bus","Engineering, business","","","fdn","fdn","cankaya.edu.tr",""],
["t_baskent","Başkent University","Ankara","Private (foundation)","?","o","med eng","Medicine, health sciences, engineering","","","fdn","fdn","baskent.edu.tr",""],
["t_ted","TED University","Ankara","Private (foundation)","?","o","eng bus soc","Engineering, business, social sciences in English","","","fdn","fdn","tedu.edu.tr",""],
["t_ieu","İzmir University of Economics","İzmir","Private (foundation)","?","o","bus eng art","Business, engineering, design","","","fdn","fdn","ieu.edu.tr",""],
["t_yasar","Yaşar University","İzmir","Private (foundation)","?","o","bus eng art","Business, engineering, design","","","fdn","fdn","yasar.edu.tr",""],
["t_altinbas","Altınbaş University","Istanbul","Private (foundation)","?","o","eng med bus","Engineering, medicine, business","","","fdn","fdn","altinbas.edu.tr",""],
["t_aydin","Istanbul Aydın University","Istanbul","Private (foundation)","?","o","eng bus med","Engineering, business, health","","","fdn","fdn","aydin.edu.tr",""],
["t_medipol","Istanbul Medipol University","Istanbul","Private (foundation)","?","o","med eng bus","Medicine, engineering, business","","","fdn","fdn","medipol.edu.tr",""],
["t_istinye","İstinye University","Istanbul","Private (foundation)","?","o","med","Medicine, dentistry, health sciences","","","fdn","fdn","istinye.edu.tr",""],
["t_acibadem","Acıbadem University","Istanbul","Private (foundation)","?","m","med","Medicine and health sciences","","","fdn","fdn","acibadem.edu.tr",""],
["t_biruni","Biruni University","Istanbul","Private (foundation)","?","o","med","Medicine, dentistry, health sciences","","","fdn","fdn","biruni.edu.tr",""],
["t_uskudar","Üsküdar University","Istanbul","Private (foundation)","?","o","med soc","Psychology, health sciences","","","fdn","fdn","uskudar.edu.tr",""],
["t_okan","Istanbul Okan University","Istanbul","Private (foundation)","?","o","bus eng med","Business, engineering, health","","","fdn","fdn","okan.edu.tr",""],
["t_kultur","Istanbul Kültür University","Istanbul","Private (foundation)","?","o","eng bus art","Engineering, business, arts","","","fdn","fdn","iku.edu.tr",""],
["t_beykent","Beykent University","Istanbul","Private (foundation)","?","o","bus eng","Business, engineering","","","fdn","fdn","beykent.edu.tr",""],
["t_isik","Işık University","Istanbul","Private (foundation)","?","o","eng bus","Engineering, business","","","fdn","fdn","isikun.edu.tr",""],
["t_ibnhaldun","Ibn Haldun University","Istanbul","Private (foundation)","?","o","soc eco cs","Social sciences and computer science in English","","","fdn","fdn","ihu.edu.tr",""],
["t_pirireis","Piri Reis University","Istanbul","Private (foundation)","?","o","eng","Maritime and ocean engineering","","","fdn","fdn","pirireis.edu.tr",""],
["t_antalyabilim","Antalya Bilim University","Antalya","Private (foundation)","?","o","hos eng bus","Tourism, engineering, business","","","fdn","fdn","antalya.edu.tr",""],
["t_hku","Hasan Kalyoncu University","Gaziantep","Private (foundation)","?","o","eng med bus","Engineering, health, business","","","fdn","fdn","hku.edu.tr",""]
], TR_BASE);

/* France */
patchRows({
  fr2:{name:"More business schools (Bachelor/BBA)", also:"ESC Clermont, EDC Paris, IPAG, ESCE, ISG, Brest BS, South Champagne BS, IDRAC, EBS Paris"},
  fr4:{name:"More public universities (Licence 1, in French)", also:"Rennes, Lyon 2, Lyon 3, Poitiers, Tours, Caen, Rouen, Dijon, Besançon, Clermont Auvergne, Limoges, Pau, La Rochelle, Le Mans, Angers, Brest, Reims, Amiens, Orléans, Perpignan"},
  fr7:{also:"ESILV, IPSA, ECE Paris, ESTACA, EPF, Albert School"}
});
segAll("fr1 fr1b fr1c fr1d fr2 fr2b", "bba"); SEG.fr7 = "tech"; SEG.fr3 = "us"; SEG.fr4 = "pub"; segAll("fr5 fr6", "cl");
const FR_DL = {bba:["Rounds from ~Nov 2026 to ~Jun 2027","2027-01-15","2027-04-30",0], tech:["Rolling to ~Jun 2027","2027-02-15","2027-05-31",0], pub:["DAP (Études en France) 1 Oct–15 Dec 2026","2026-12-01","2026-12-15",0]};
const FR_BASE = {bba:"Business school: dossier + interview. Check that it accepts 11 years of schooling (SKEMA asks for 12).", tech:"Private school: own admission. Check that the bachelor is state-recognised (visé).", pub:"French-taught licence through the DAP procedure (Campus France Uzbekistan)."};
const FRL = "lang:French B2 (TCF-DAP)";
addRows("France", FR_DL, [
["f_neoma","NEOMA Business School – Global BBA","Reims · Rouen · Paris","Private grande école","u","m","bus","4-year Global BBA in English","","","bba","bba","neoma-bs.com",""],
["f_kedge","KEDGE Business School – International BBA","Marseille · Bordeaux · Paris","Private grande école","u","o","bus","International BBA in English","","","bba","bba","kedge.edu",""],
["f_gem","Grenoble Ecole de Management – Bachelor in International Business","Grenoble · Paris","Private grande école","u","m","bus","Bachelor in International Business in English","","","bba","bba","grenoble-em.com",""],
["f_ieseg","IÉSEG School of Management – Bachelor in International Business","Lille · Paris","Private grande école","u","m","bus","Bachelor in International Business in English","","","bba","bba","ieseg.fr",""],
["f_audencia","Audencia – Bachelor in Management","Nantes","Private grande école","u","m","bus","Bachelor in Management in English","","","bba","bba","audencia.com",""],
["f_tbs","TBS Education – Bachelor in Management","Toulouse · Barcelona","Private grande école","u","m","bus","Bachelor in Management in English","","","bba","bba","tbs-education.com",""],
["f_mbs","Montpellier Business School – Bachelor in International Business","Montpellier","Private grande école","u","o","bus","Bachelor in International Business","","","bba","bba","montpellier-bs.com",""],
["f_rennes","Rennes School of Business – International Bachelor","Rennes","Private grande école","u","o","bus","International bachelor in English","","","bba","bba","rennes-sb.com",""],
["f_essca","ESSCA – Global BBA","Angers · Paris · Lyon · Bordeaux","Private grande école","u","o","bus","Global BBA with an international track","","","bba","bba","essca.eu",""],
["f_psb","Paris School of Business – BBA","Paris","Private","u","o","bus","BBA in English","","","bba","bba","psbedu.paris",""],
["f_emn","EM Normandie – BBA","Caen · Le Havre · Paris","Private grande école","u","o","bus","BBA in English","","","bba","bba","em-normandie.com",""],
["f_excelia","Excelia – Bachelor in International Business","La Rochelle · Tours · Paris","Private grande école","u","o","bus hos","International business, tourism management","","","bba","bba","excelia-group.com",""],
["f_iscp","ISC Paris – Bachelor","Paris","Private","u","o","bus","Bachelor in business","","","bba","bba","iscparis.com",""],
["f_icn","ICN Business School – Bachelor","Nancy · Paris","Private grande école","u","o","bus","Bachelor in management","","","bba","bba","icn-artem.com",""],
["f_inseec","INSEEC – BBA","Paris · Lyon · Bordeaux · Chambéry","Private","u","o","bus","BBA with English tracks","","","bba","bba","inseec.com",""],
["f_bsb","Burgundy School of Business – Bachelor","Dijon · Lyon","Private grande école","u","o","bus","Bachelor in business","","","bba","bba","bsb-education.com",""],
["f_epita","EPITA – International Bachelor of Computer Science","Paris (Le Kremlin-Bicêtre)","Private engineering school","u","o","cs","Computer science in English","","","tech","tech","epita.fr",""],
["f_efrei","EFREI Paris – International bachelor's","Paris (Villejuif)","Private engineering school","u","o","cs eng","Computer science, data & AI, cyber security (English tracks)","","","tech","tech","efrei.fr",""],
["f_isep","ISEP – Bachelor in Digital Engineering","Paris (Issy-les-Moulineaux)","Private engineering school","u","o","cs eng","Digital engineering in English","","","tech","tech","isep.fr",""],
["f_sorbonne","Sorbonne University","Paris","Public","100","m","sci soc art med","Sciences, humanities, medicine (in French)",FRL,"","pub","pub","sorbonne-universite.fr",""],
["f_pariscite","Université Paris Cité","Paris","Public","200","m","med sci soc","Medicine, sciences, social sciences (in French)",FRL,"","pub","pub","u-paris.fr",""],
["f_saclay","Université Paris-Saclay","Saclay (Paris)","Public","20","m","sci eng cs","Sciences, engineering, computer science (in French)",FRL,"","pub","pub","universite-paris-saclay.fr",""],
["f_p1","Université Paris 1 Panthéon-Sorbonne","Paris","Public","500","m","eco soc ir","Economics, law, political science, history (in French)",FRL,"","pub","pub","pantheonsorbonne.fr",""],
["f_dauphine","Université Paris Dauphine–PSL","Paris","Public","50","h","eco bus","Economics, management, applied maths (in French; band shows PSL)",FRL,"Applies through its own international platform; very selective.","pub","pub","dauphine.psl.eu",""],
["f_amu","Aix-Marseille Université","Marseille · Aix-en-Provence","Public","500","o","sci eco soc med","Sciences, economics, humanities, medicine (in French)",FRL,"","pub","pub","univ-amu.fr",""],
["f_unistra","Université de Strasbourg","Strasbourg","Public","500","o","sci med soc","Chemistry, sciences, medicine, humanities (in French)",FRL,"","pub","pub","unistra.fr",""],
["f_ubx","Université de Bordeaux","Bordeaux","Public","500","o","sci med eng","Sciences, health, engineering (in French)",FRL,"","pub","pub","u-bordeaux.fr",""],
["f_uga","Université Grenoble Alpes","Grenoble","Public","500","o","sci eng cs","Sciences, engineering, computer science (in French)",FRL,"","pub","pub","univ-grenoble-alpes.fr",""],
["f_umontp","Université de Montpellier","Montpellier","Public","500","o","sci med","Sciences, health (in French)",FRL,"","pub","pub","umontpellier.fr",""],
["f_lyon1","Université Claude Bernard Lyon 1","Lyon","Public","500","o","sci med eng","Sciences, health, technology (in French)",FRL,"","pub","pub","univ-lyon1.fr",""],
["f_lille","Université de Lille","Lille","Public","1000","o","sci eco soc med","Sciences, economics, humanities, health (in French)",FRL,"","pub","pub","univ-lille.fr",""],
["f_nantes","Nantes Université","Nantes","Public","1000","o","sci eng soc","Sciences, engineering, humanities (in French)",FRL,"","pub","pub","univ-nantes.fr",""],
["f_uca","Université Côte d'Azur","Nice","Public","1000","o","sci eco soc","Sciences, economics, humanities (in French)",FRL,"","pub","pub","univ-cotedazur.fr",""],
["f_lorraine","Université de Lorraine","Nancy · Metz","Public","1000","o","eng sci soc","Engineering, sciences (in French)",FRL,"","pub","pub","univ-lorraine.fr",""],
["f_utc","Université Toulouse Capitole","Toulouse","Public","?","o","eco soc","Economics (Toulouse School of Economics), law (in French)",FRL,"","pub","pub","ut-capitole.fr",""]
], FR_BASE);

/* Italy */
patchRows({it2g:{name:"More Italian public universities", also:"Brescia, Insubria, Ferrara, Udine, Messina, Calabria, Chieti-Pescara, L'Aquila, Sassari, Foggia, Macerata, Urbino, Camerino, Molise, Tuscia, Cassino, Basilicata, Piemonte Orientale"}});
segAll("it3 it3b", "us"); segAll("it2 it2b it2c it2d it2e it2f it2g", "pub"); segAll("it1 it4 it5", "priv");
const IT_DL = {br:["2028 entry after a bridge year (foundation or 1 year of university)",null,null,0]};
const IT_BASE = {pub:"Ministry 12-year rule: a foundation year or one year of university first, then pre-enrolment through Universitaly. Many English-taught bachelor's with entrance tests (TOLC, SAT or the university's own).", priv:"Ministry 12-year rule: a foundation year or one year of university first, then the university's own test.", art:"AFAM art & design institution: the same 12-year rule applies through Universitaly."};
addRows("Italy", IT_DL, [
["i_pisa","University of Pisa","Pisa","Public","500","o","eng cs sci","Engineering, computer science, sciences","br","","br","pub","unipi.it",""],
["i_trento","University of Trento","Trento","Public","500","o","cs eng eco","Computer science, economics & management in English","br","","br","pub","unitn.it",""],
["i_turin","University of Turin","Turin","Public","500","o","eco bus sci","Business & management (English), sciences","br","","br","pub","unito.it",""],
["i_florence","University of Florence","Florence","Public","1000","o","eco art sci","Economics, architecture, sciences","br","","br","pub","unifi.it",""],
["i_pavia","University of Pavia","Pavia","Public","500","o","med eco eng","Medicine in English (IMAT), economics, engineering","br","","br","pub","unipv.it",""],
["i_naples","University of Naples Federico II","Naples","Public","500","o","eng med eco","Engineering, medicine, economics","br","","br","pub","unina.it",""],
["i_torvergata","University of Rome Tor Vergata","Rome","Public","500","o","eco bus med","Global governance, business administration & economics in English, medicine","br","","br","pub","uniroma2.it",""],
["i_roma3","Roma Tre University","Rome","Public","1000","o","eco soc eng","Economics, humanities, engineering","br","","br","pub","uniroma3.it",""],
["i_bicocca","University of Milano-Bicocca","Milan","Public","500","o","eco cs sci","Economics, computer science, sciences","br","","br","pub","unimib.it",""],
["i_genoa","University of Genoa","Genoa","Public","1000","o","eng sci","Engineering, maritime science","br","","br","pub","unige.it",""],
["i_siena","University of Siena","Siena","Public","1000","o","eco med","Economics, medicine","br","","br","pub","unisi.it",""],
["i_cafoscari","Ca' Foscari University of Venice","Venice","Public","1000","o","eco bus soc","Economics & management, international relations in English","br","","br","pub","unive.it",""],
["i_verona","University of Verona","Verona","Public","1000","o","eco med","Economics, medicine","br","","br","pub","univr.it",""],
["i_trieste","University of Trieste","Trieste","Public","1000","o","sci eng","Sciences, engineering","br","","br","pub","units.it",""],
["i_parma","University of Parma","Parma","Public","1000","o","eco sci","Economics, food science","br","","br","pub","unipr.it",""],
["i_unimore","University of Modena and Reggio Emilia","Modena","Public","1000","o","eng eco","Engineering (automotive), economics","br","","br","pub","unimore.it",""],
["i_bergamo","University of Bergamo","Bergamo","Public","?","o","eco eng","Economics, engineering","br","","br","pub","unibg.it",""],
["i_bari","University of Bari","Bari","Public","1000","o","eco med","Economics, medicine","br","","br","pub","uniba.it",""],
["i_catania","University of Catania","Catania","Public","1000","o","eng med","Engineering, medicine","br","","br","pub","unict.it",""],
["i_palermo","University of Palermo","Palermo","Public","1000","o","eng med","Engineering, medicine","br","","br","pub","unipa.it",""],
["i_perugia","University of Perugia","Perugia","Public","1000","o","eco sci","Economics, sciences","br","","br","pub","unipg.it",""],
["i_cagliari","University of Cagliari","Cagliari","Public","1000","o","eng sci","Engineering, sciences","br","","br","pub","unica.it",""],
["i_salerno","University of Salerno","Salerno","Public","1000","o","eng eco","Engineering, economics","br","","br","pub","unisa.it",""],
["i_univpm","Marche Polytechnic University","Ancona","Public","1000","o","eng eco","Engineering, economics","br","","br","pub","univpm.it",""],
["i_unibz","Free University of Bozen-Bolzano","Bolzano","Public (state-recognised)","?","o","eco cs","Trilingual degrees: economics, computer science","br","","br","pub","unibz.it",""],
["i_iulm","IULM University","Milan","Private","?","o","art soc hos","Communication, tourism, fashion","br","","br","priv","iulm.it",""],
["i_humanitas","Humanitas University","Milan","Private","?","h","med","Medicine in English","br","","br","priv","hunimed.eu",""],
["i_sanraffaele","Vita-Salute San Raffaele University","Milan","Private","?","h","med","Medicine in English","br","","br","priv","unisr.it",""],
["i_ucbm","Campus Bio-Medico University of Rome","Rome","Private","?","m","med eng","Medicine, biomedical engineering","br","","br","priv","unicampus.it",""],
["i_liuc","LIUC – Università Cattaneo","Castellanza (Milan)","Private","?","o","bus eng","Business, management engineering","br","","br","priv","liuc.it",""],
["i_unint","UNINT","Rome","Private","?","o","ir bus","International relations, business, languages","br","","br","priv","unint.eu",""],
["i_naba","NABA – Nuova Accademia di Belle Arti","Milan · Rome","Private (AFAM)","u","o","art","Design, fashion, fine arts in English","br","","br","art","naba.it",""],
["i_ied","IED – Istituto Europeo di Design","Milan · Rome · Florence · Turin","Private (AFAM)","u","o","art","Fashion, product, visual and interior design","br","","br","art","ied.edu",""],
["i_domus","Domus Academy","Milan","Private (AFAM)","u","o","art","Design and fashion","br","","br","art","domusacademy.com",""],
["i_marangoni","Istituto Marangoni","Milan · Florence","Private (AFAM)","u","o","art bus","Fashion design and fashion business","br","","br","art","istitutomarangoni.com",""]
], IT_BASE);

/* Qatar */
const QA_DL = {q:["Spring 2027 for fall entry (check)","2027-03-01","2027-06-30",0]};
addRows("Qatar", QA_DL, [
["q_afg","Afg College with the University of Aberdeen","Doha","Private (UK degree)","200","o","bus cs eng","University of Aberdeen degrees in business, computing, engineering; foundation year available","ask:Confirm it admits applicants from abroad (most students are Qatar residents)","Band shows Aberdeen's ranking.","q","","afg-aberdeen.edu.qa",""],
["q_ucalgary","University of Calgary in Qatar","Doha","Branch campus (nursing)","200","m","med","Bachelor of Nursing (University of Calgary degree)","ask:Confirm eligibility for applicants from abroad and how an 11-year certificate is assessed","Band shows Calgary's ranking.","q","","qatar.ucalgary.ca",""],
["q_lusail","Lusail University","Lusail","Private","u","o","bus soc eng","Business, law, engineering (Arabic and English)","ask:Confirm admission of an 11-year certificate","Private Qatari university; check the language of your programme.","q","","lu.edu.qa",""]
]);

/* Saudi Arabia */
patchRows({sa2c:{name:"More Saudi state universities (scholarships)", also:"Jazan, Najran, Al Baha, Bisha, Shaqra, Majmaah, Northern Border, Al Jouf, Hail, Tabuk, Hafr Al Batin, Princess Nourah (women)"}});
segAll("sa1 sa2 sa2b sa2c", "pub"); segAll("sa3 sa4 sa5", "priv");
const SA_DL = {s:["Study in Saudi window ~late Apr–May 2027 (check)","2027-04-25","2027-05-21",0]};
const SA_BASE = {pub:"Study in Saudi scholarship route: ages 17–25 and a certificate under 5 years old; an Arabic preparatory year comes first."};
const SAL = "lang:Arabic (preparatory year)";
addRows("Saudi Arabia", SA_DL, [
["s_uqu","Umm Al-Qura University","Makkah","Public (scholarship)","1000","m","soc sci med","Islamic studies, Arabic, sciences",SAL,"","s","pub","uqu.edu.sa",""],
["s_imamu","Imam Mohammad Ibn Saud Islamic University","Riyadh","Public (scholarship)","?","m","soc","Sharia, Arabic language, social sciences",SAL,"","s","pub","imamu.edu.sa",""],
["s_qu","Qassim University","Buraydah","Public (scholarship)","1000","m","eng sci med","Engineering, sciences, health",SAL,"","s","pub","qu.edu.sa",""],
["s_kku","King Khalid University","Abha","Public (scholarship)","1000","m","eng sci med","Engineering, sciences, medicine",SAL,"","s","pub","kku.edu.sa",""],
["s_taibah","Taibah University","Madinah","Public (scholarship)","?","m","sci soc","Sciences, Islamic studies",SAL,"","s","pub","taibahu.edu.sa",""],
["s_iau","Imam Abdulrahman Bin Faisal University","Dammam","Public (scholarship)","1000","m","med eng","Medicine, engineering, architecture",SAL,"","s","pub","iau.edu.sa",""],
["s_kfu","King Faisal University","Al-Ahsa","Public (scholarship)","1000","m","sci bus","Agriculture, sciences, business",SAL,"","s","pub","kfu.edu.sa",""],
["s_psau","Prince Sattam bin Abdulaziz University","Al-Kharj","Public (scholarship)","1000","m","eng sci","Engineering, sciences",SAL,"","s","pub","psau.edu.sa",""],
["s_uj","University of Jeddah","Jeddah","Public (scholarship)","1000","m","eng bus sci","Engineering, business, sciences",SAL,"","s","pub","uj.edu.sa",""],
["s_tu","Taif University","Taif","Public (scholarship)","?","m","sci med","Sciences, medicine",SAL,"","s","pub","tu.edu.sa",""]
], SA_BASE);
