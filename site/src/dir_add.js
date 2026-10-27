/* ---------- v8 completeness pass: universities that were missing or only named inside "more" rows ---------- */
US_TESTTXT["?"] = "Test policy for 2027 not yet confirmed: check the international admissions page.";
const USG_R = "University System of Georgia: SAT or ACT required for first-year applicants from Fall 2026.";
addUS([
/* R1 research universities that were only named inside a "more" row */
["u_olemiss","University of Mississippi (Ole Miss)","Oxford, MS","Public","?","o","bus soc sci","Accountancy, business, journalism, pharmacy","?","6","R","flag","olemiss.edu",""],
["u_msstate","Mississippi State University","Starkville, MS","Public","?","o","eng sci bus","Engineering, agriculture, business, veterinary medicine","?","6","R","flag","msstate.edu",""],
["u_montstate","Montana State University","Bozeman, MT","Public","?","o","eng sci cs","Engineering, ecology, computer science","?","6","R","flag","montana.edu",""],
["u_umt","University of Montana","Missoula, MT","Public","?","o","sci bus soc","Forestry, wildlife biology, business, journalism","?","6","R","flag","umt.edu",""],
["u_nmsu","New Mexico State University","Las Cruces, NM","Public","?","o","eng sci bus","Engineering, agriculture, business","?","6","R","flag","nmsu.edu",""],
["u_ndsu","North Dakota State University","Fargo, ND","Public","?","o","eng sci med","Engineering, agriculture, pharmacy","?","6","R","flag","ndsu.edu",""],
["u_und","University of North Dakota","Grand Forks, ND","Public","?","o","eng cs sci","Aviation and unmanned aircraft systems (top-ranked), engineering","?","6","R","flag","und.edu",""],
["u_odu","Old Dominion University","Norfolk, VA","Public","?","o","eng cs bus","Engineering, cyber security, business, maritime and supply chain","O","6","R","flag","odu.edu",""],
["u_maine","University of Maine","Orono, ME","Public","?","o","eng sci","Engineering, marine sciences, forestry","O","6","R","flag","umaine.edu",""],
["u_unr","University of Nevada, Reno","Reno, NV","Public","?","o","eng bus soc","Engineering, business, journalism","?","6","R","flag","unr.edu",""],
["u_uwm","University of Wisconsin–Milwaukee","Milwaukee, WI","Public","?","o","eng art bus sci","Engineering, architecture, business, freshwater sciences","?","6","R","flag","uwm.edu",""],
["u_usu","Utah State University","Logan, UT","Public","?","o","eng sci bus","Engineering, agriculture, business","?","6","R","flag","usu.edu",""],
["u_niu","Northern Illinois University","DeKalb, IL (near Chicago)","Public","?","o","bus eng","Business, accountancy, engineering","?","6","R","flag","niu.edu",""],
["u_txst","Texas State University","San Marcos, TX","Public","?","o","bus eng art","Business, engineering, geography, music","?","6","R","flag","txst.edu",""],
["u_toledo","University of Toledo","Toledo, OH","Public","?","o","eng med bus","Engineering, pharmacy, business","?","6","R","flag","utoledo.edu",""],
["u_uwyo","University of Wyoming","Laramie, WY","Public","?","o","eng sci","Energy and petroleum engineering, geology, agriculture","?","6","R","flag","uwyo.edu",""],
["u_wichita","Wichita State University","Wichita, KS","Public","?","o","eng bus","Aerospace engineering (NIAR research institute), business","?","6","R","flag","wichita.edu",""],
["u_uidaho","University of Idaho","Moscow, ID","Public","?","o","eng sci","Engineering, agriculture, natural resources","?","6","R","flag","uidaho.edu",""],
["u_boise","Boise State University","Boise, ID","Public","?","o","eng bus cs","Engineering, business, computer science","?","6","R","pub","boisestate.edu",""],
/* Research universities that were missing entirely */
["u_uah","University of Alabama in Huntsville","Huntsville, AL","Public","?","o","eng cs sci","Aerospace and systems engineering, computer science, physics (NASA Marshall next door)","?","6","R","flag","uah.edu",""],
["u_ucden","University of Colorado Denver","Denver, CO","Public","?","o","bus eng art","Business, engineering, architecture","O","6.5","R","flag","ucdenver.edu","Colorado public universities are test-optional by law."],
["u_usm","University of Southern Mississippi","Hattiesburg, MS","Public","?","o","sci bus","Polymer science, marine science, business","?","6","R","flag","usm.edu",""],
["u_uncg","University of North Carolina at Greensboro","Greensboro, NC","Public","?","o","bus med art","Business, nursing, music, education","C","6","R","pub","uncg.edu","UNC System: no scores needed with a GPA of 2.8 or higher."],
["u_ull","University of Louisiana at Lafayette","Lafayette, LA","Public","?","o","eng cs","Engineering, computer science, informatics","?","6","R","pub","louisiana.edu",""],
["u_kennesaw","Kennesaw State University","Kennesaw, GA (Atlanta)","Public","?","o","eng cs bus","Engineering, computer science, cyber security, business","R","6","R","pub","kennesaw.edu",USG_R],
["u_gaso","Georgia Southern University","Statesboro, GA","Public","?","o","bus eng","Business, engineering, logistics","R","6","R","pub","georgiasouthern.edu",USG_R],
["u_augusta","Augusta University","Augusta, GA","Public","?","o","med cs","Health sciences, nursing, cyber security","R","6","R","pub","augusta.edu",USG_R],
["u_southal","University of South Alabama","Mobile, AL","Public","?","o","med eng bus","Health sciences, engineering, business","?","6","R","pub","southalabama.edu",""],
["u_oakland","Oakland University","Rochester, MI (Detroit area)","Public","?","o","eng bus med","Engineering, business, health sciences","O","6","R","pub","oakland.edu",""],
["u_famu","Florida A&M University","Tallahassee, FL","Public (HBCU)","?","o","med bus eng","Pharmacy, business, engineering (with Florida State)","R","6","R","pub","famu.edu","Florida rule: SAT, ACT or CLT required."],
["u_tamucc","Texas A&M University–Corpus Christi","Corpus Christi, TX","Public","?","o","sci eng bus","Marine biology, engineering, business","?","6","R","pub","tamucc.edu",""],
["u_byu","Brigham Young University","Provo, UT","Private (Church of Jesus Christ of Latter-day Saints)","?","m","bus eng cs","Marriott business and accounting, engineering, computer science","?","6.5","D15","spr","byu.edu","Every student signs the Honor Code (no alcohol, tobacco, coffee or tea; dress and grooming standards) and needs an ecclesiastical endorsement, whatever their religion. Foreign transcripts evaluated by IERF or SpanTran. Test-optional through Winter 2026; check the 2027 policy."],
["u_cua","Catholic University of America","Washington, DC","Private","?","o","art eng soc med","Architecture, engineering, politics, nursing, music","O","6.5","E15","pri","catholic.edu",""]
]);
patchRows({
  us11b:{also:"South Dakota State, University of Alaska Fairbanks, Ball State, Bowling Green, Wright State, James Madison, Towson, Montclair State, Western Washington, Appalachian State, East Carolina, Southern Illinois, Missouri State, Illinois State, Central Michigan, Western Michigan, Eastern Michigan, Indiana State, Sam Houston State, Middle Tennessee State"},
  us11y:{also:""}
});
const appendAlso = (id, extra) => U_RAW.forEach(r => { if (r[0] === id) r[16] = [r[16], extra].filter(Boolean).join(", "); });

/* Canada */
addRows("Canada", CA_DL, [
["c_twu","Trinity Western University","Langley, BC (Vancouver area)","Private (Christian)","u","o","bus med sci","Business, nursing, sciences","",CA_ASK + " Students agree to a community covenant.","R","small","twu.ca",""],
["c_ukings","University of King's College","Halifax, NS","Public","u","o","soc art","Journalism, Foundation Year Programme, humanities (degrees with Dalhousie)","",CA_ASK,"M1","small","ukings.ca",""],
["c_stu","St. Thomas University","Fredericton, NB","Public","u","o","soc","Criminology, journalism, human rights, liberal arts","",CA_ASK,"R","small","stu.ca",""]
]);
appendAlso("ca7", "Concordia University of Edmonton, The King's University, Ambrose, Redeemer, Tyndale, Crandall, Canadian Mennonite, Booth University College, Yorkville, University of Niagara Falls Canada, Fairleigh Dickinson (Vancouver campus), NYIT (Vancouver campus)");
patchRows({ca9:{name:"French-language universities (Québec and elsewhere)"}});
appendAlso("ca9", "UQAC, UQTR, UQAR, UQO, UQAT, Université de Moncton (NB), Université de Saint-Boniface (MB), Université de l'Ontario français, Université de Hearst");
/* Spain, China, Türkiye, Gulf */
appendAlso("es2f", "Universidad Villanueva, Universidad San Jorge, Universidad Católica de Valencia, CEU Cardenal Herrera, Universidad Pontificia de Salamanca, Universidad Católica de Ávila, Universidad Europea Miguel de Cervantes, Universidad Fernando Pessoa Canarias, Ramon Llull schools (IQS, La Salle, Blanquerna), online: VIU, Isabel I, UDIMA");
appendAlso("es4", "Universitat Oberta de Catalunya (online)");
appendAlso("cn2d", "SUSTech, ShanghaiTech, Shenzhen Technology University (ask each about international undergraduate places)");
appendAlso("tr5", "Bezmialem Vakıf, Istanbul Atlas, Istanbul Topkapı, Istanbul Rumeli, Istanbul Ticaret, Istanbul Sabahattin Zaim, Ankara Bilim, Ufuk, Kapadokya, Avrasya");
appendAlso("tr3", "METU Northern Cyprus Campus (same METU degree, but located in Northern Cyprus, which only Türkiye recognises: check the residence route and recognition in Uzbekistan)");
appendAlso("sa3", "Al Yamamah University, University of Business and Technology (Jeddah), Dar Al Uloom University, Arab Open University, Riyadh Elm University, Batterjee Medical College, Fakeeh College");
appendAlso("sa2c", "Saudi Electronic University");
appendAlso("q_afg", "Oryx Universal College (Liverpool John Moores University degrees)");
patchRows({u_byu:{win:"Priority ~1 Nov · final ~15 Dec 2026 (last cycle's pattern; confirm on apply.byu.edu)", sug:"2026-11-01", fin:"2026-12-15"}});
