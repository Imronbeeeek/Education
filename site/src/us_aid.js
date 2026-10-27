/* ---------- v15 · USA: aid for international students, what each university looks for, the visa file, El-Yurt Umidi ----------
   ex: "o" checked on the university's own page (Oct 2026) · "s" from a secondary source · "k" well-known policy, not re-checked this round */
const AID_T = {
  nb:["Need-blind, meets full need","Your finances do not affect admission, and the university covers 100% of the need it calculates from your family's documents.","ok"],
  fn:["Meets full need (need-aware)","Asking for aid can count against you at admission, but once admitted the university covers 100% of the need it calculates.","ok"],
  fr:["Free or cut tuition for everyone","Tuition is free or heavily reduced for every admitted student.","ok"],
  nm:["Need-based and merit aid","Some need-based grants plus merit scholarships for international students.","mid"],
  nl:["Limited need-based aid","A small number of international students receive need-based grants; most pay in full.","mid"],
  mr:["Merit scholarships","Partial scholarships for grades, scores or talent; no need-based aid for international students.","mid"],
  no:["Little or no aid","International students pay the full cost; only outside scholarships help.","low"],
  ck:["Not confirmed yet","Check the international aid page, or line H6 of the university's Common Data Set.","low"]
};
const AID = {};
const aidSet = (t, names, ex) => names.split("; ").forEach(n => { AID[n] = Object.assign(AID[n] || {}, {t, ex: ex || "k"}); });
const aidNote = map => Object.entries(map).forEach(([n, o]) => { AID[n] = Object.assign(AID[n] || {t:"ck", ex:"k"}, o); });

/* Need-blind for international applicants and full need (2026-27 lists; Brown and Notre Dame from the Class of 2029) */
aidSet("nb", "Harvard University; Yale University; Princeton University; Massachusetts Institute of Technology (MIT); Amherst College; Dartmouth College; Bowdoin College; Brown University; University of Notre Dame; Washington and Lee University", "s");
/* Need-aware, full need */
aidSet("fn", "Stanford University; University of Pennsylvania; Columbia College & Columbia Engineering; Cornell University; Duke University; University of Chicago; Northwestern University; Johns Hopkins University; California Institute of Technology (Caltech); Washington University in St. Louis; Rice University; Vanderbilt University; Tufts University; Williams College; Swarthmore College; Pomona College; Middlebury College; Wesleyan University; Hamilton College; Vassar College; Bates College; Carleton College; Grinnell College; Macalester College; Davidson College; Haverford College; Colby College; Colgate University; Claremont McKenna College; Colorado College; Reed College; Occidental College; Lafayette College; Franklin & Marshall College; Trinity College; Connecticut College; University of Richmond; Harvey Mudd College; Skidmore College; College of the Atlantic", "k");
/* Limited need-based */
aidSet("nl", "Emory University; Georgetown University; New York University; Lehigh University; Wake Forest University; Villanova University; Bucknell University; Rhode Island School of Design (RISD); Sarah Lawrence College; St. John's College; College of the Holy Cross; Wheaton College (Illinois); The Juilliard School; Minerva University", "k");
/* Need-based and merit */
aidSet("nm", "Brandeis University; University of Rochester; Case Western Reserve University; Columbia University – School of General Studies; Yale University – Eli Whitney Students Program; Union College; Dickinson College; Gettysburg College; Kenyon College; Oberlin College; The College of Wooster; Denison University; Whitman College; Bard College; Sewanee: The University of the South; Rhodes College; Centre College; Furman University; Lawrence University; Beloit College; Knox College; Earlham College; St. Olaf College; Allegheny College; Lake Forest College; Juniata College; Gustavus Adolphus College; Luther College; Augustana College; Hendrix College; Wabash College; Kalamazoo College; DePauw University; Lewis & Clark College; St. Lawrence University; Hobart and William Smith Colleges; Bennington College; Hampshire College; Babson College; Clark University", "k");
/* Merit for international students */
aidSet("mr", "University of Southern California; Northeastern University; Boston University; Tulane University; University of Miami; George Washington University; American University; Fordham University; Syracuse University; Southern Methodist University; Texas Christian University; Baylor University; Drexel University; Rochester Institute of Technology; Stevens Institute of Technology; Rensselaer Polytechnic Institute (RPI); Worcester Polytechnic Institute (WPI); Clarkson University; Kettering University; Rose-Hulman Institute of Technology; Florida Institute of Technology; Embry-Riddle Aeronautical University; Illinois Institute of Technology; Pace University; Hofstra University; Bentley University; University of San Francisco; Santa Clara University; Loyola Marymount University; University of San Diego; Chapman University; Pepperdine University; University of Denver; Creighton University; Marquette University; Saint Louis University; University of Dayton; Gonzaga University; Seattle University; DePaul University; Loyola University Chicago; Elon University; Duquesne University; Fairfield University; Seton Hall University; St. John's University; Catholic University of America; Hult International Business School; Savannah College of Art and Design (SCAD); School of the Art Institute of Chicago; Pratt Institute; The New School (Parsons School of Design); Berklee College of Music; Emerson College; Howard University; University of Tulsa; Arizona State University; University of Arizona; Northern Arizona University; University of Alabama; University of Alabama at Birmingham (UAB); University of Alabama in Huntsville; University of South Alabama; Auburn University; University of Mississippi (Ole Miss); Mississippi State University; University of Southern Mississippi; Louisiana State University; University of Louisiana at Lafayette; University of Arkansas; University of Kentucky; University of Louisville; University of Tennessee, Knoxville; University of Memphis; University of South Carolina; Georgia State University; Kennesaw State University; Georgia Southern University; Augusta University; University of Central Florida; University of South Florida; Florida International University; Florida Atlantic University; Florida A&M University; University of Oklahoma; Oklahoma State University; University of Kansas; Kansas State University; Wichita State University; University of Missouri; Missouri University of Science and Technology; University of Nebraska–Lincoln; Iowa State University; University of Iowa; University of Minnesota Twin Cities; University of North Dakota; North Dakota State University; Montana State University; University of Montana; University of Wyoming; University of Idaho; Boise State University; Utah State University; University of Utah; Colorado State University; Colorado School of Mines; University of Colorado Denver; University of Nevada, Reno; University of Nevada, Las Vegas; University of New Mexico; New Mexico State University; University of Oregon; Oregon State University; Portland State University; Washington State University; Texas Tech University; University of Texas at Dallas; University of Texas at Arlington; University of Texas at San Antonio; University of Texas at El Paso; University of North Texas; University of Houston; Texas State University; Texas A&M University–Corpus Christi; University of Cincinnati; Ohio University; Kent State University; University of Toledo; Miami University (Ohio); Western Michigan University; Wayne State University; Michigan Technological University; Oakland University; Northern Illinois University; Illinois State University; University of Illinois Chicago; University of Wisconsin–Milwaukee; University of Pittsburgh; Temple University; University of Delaware; University of Maryland, Baltimore County (UMBC); George Mason University; Old Dominion University; Virginia Commonwealth University; West Virginia University; University of North Carolina at Charlotte; University of North Carolina at Greensboro; University of Connecticut; University of Massachusetts Amherst; University of Massachusetts Lowell; University of Massachusetts Boston; University of Rhode Island; University of New Hampshire; University of Vermont; University of Maine; University at Buffalo (SUNY); University at Albany (SUNY); New Jersey Institute of Technology; Rowan University; University of Hawaii at Manoa; Purdue University; Indiana University Bloomington; Michigan State University; Ohio State University; Rutgers University–New Brunswick; University of Maryland, College Park; Texas A&M University; University of Illinois Urbana-Champaign", "p");
aidSet("nm", "Soka University of America", "k");
aidSet("mr", "Hampden-Sydney College; Morehouse College; Hope College; Calvin University; University of Puget Sound; Willamette University; Trinity University; Southwestern University; Rollins College; Ursinus College; Muhlenberg College; Wheaton College (Massachusetts); Ohio Wesleyan University; Wofford College; Millsaps College; Washington College; St. Mary's College of Maryland; Cornell College; Coe College; Illinois Wesleyan University; Washington & Jefferson College; Concordia College; Monmouth College; Albion College; Eckerd College; Wentworth Institute of Technology; Milwaukee School of Engineering; New Mexico Tech; South Dakota Mines; Quinnipiac University; Ithaca College; Marist University; Suffolk University; Bryant University; Providence College; Xavier University; Butler University; Drake University; Bradley University; Valparaiso University; University of St. Thomas; University of the Pacific; University of Redlands; Saint Mary's College of California; Mercer University; Belmont University; University of Tampa; Nova Southeastern University; Lynn University; Johnson & Wales University; Saint Joseph's University; Loyola University Maryland; Loyola University New Orleans; University of Portland; Whitworth University; Pacific Lutheran University; Adelphi University; Long Island University; Fairleigh Dickinson University; Stetson University; James Madison University; College of Charleston; East Carolina University; Appalachian State University; UNC Wilmington; North Carolina A&T State University; Towson University; Morgan State University; Marshall University; Western Kentucky University; Middle Tennessee State University; Tennessee Tech University; University of Tennessee at Chattanooga; Louisiana Tech University; University of New Orleans; Arkansas State University; Troy University; University of North Florida; Florida Gulf Coast University; University of West Florida; Bowling Green State University; University of Akron; Wright State University; Cleveland State University; Central Michigan University; Eastern Michigan University; Grand Valley State University; University of Michigan–Dearborn; Ball State University; Indiana University Indianapolis; Southern Illinois University Carbondale; Southern Illinois University Edwardsville; University of Missouri–Kansas City; Missouri State University; Truman State University; University of Northern Iowa; University of Nebraska Omaha; University of South Dakota; South Dakota State University; University of Alaska Fairbanks; University of Colorado Colorado Springs; Southern Utah University; Western Washington University; University of Texas Rio Grande Valley; Sam Houston State University; Lamar University; Prairie View A&M University; East Texas A&M University; University of Massachusetts Dartmouth; SUNY College of Environmental Science and Forestry; SUNY Geneseo; The College of New Jersey", "p");
/* Free or cut tuition for everyone */
aidSet("fr", "Berea College; The Cooper Union; Olin College of Engineering; Curtis Institute of Music", "k");
/* Little or no institutional aid for international undergraduates */
aidSet("no", "University of Michigan; University of California, Berkeley; University of California, Los Angeles (UCLA); University of California, San Diego; University of California, Davis; University of California, Irvine; University of California, Santa Barbara; University of California, Santa Cruz; University of California, Riverside; University of California, Merced; University of Texas at Austin; Georgia Institute of Technology; University of Virginia; University of North Carolina at Chapel Hill; University of Wisconsin–Madison; University of Washington (Seattle); Penn State (University Park); University of Florida; Florida State University; University of Georgia; Virginia Tech; William & Mary; North Carolina State University; Clemson University; Stony Brook University (SUNY); Binghamton University (SUNY); Carnegie Mellon University; Boston College; University of Colorado Boulder; San Diego State University; Cal Poly San Luis Obispo; San José State University; California State University, Long Beach; San Francisco State University; Cal Poly Pomona; California State University, Fullerton; California State University, Northridge; More Cal State campuses; Baruch College (CUNY); City College of New York (CUNY); Hunter College (CUNY); More CUNY colleges; More SUNY campuses; Brigham Young University", "k");

aidNote({
  "Harvard University":{n:"Families earning under about $100,000 a year typically pay nothing. Apply with the CSS Profile (or Harvard's own form) by the admission deadline."},
  "Massachusetts Institute of Technology (MIT)":{n:"Need-blind for everyone; families earning under about $200,000 usually pay no tuition. Own application, EA 1 Nov or RD early Jan."},
  "Dartmouth College":{n:"Need-blind for international applicants since the Class of 2026."},
  "Bowdoin College":{n:"Need-blind for international applicants since the 2022-23 cycle."},
  "Brown University":{n:"Need-blind for international first-year applicants from the Class of 2029 (Fall 2025 entry) onward."},
  "University of Notre Dame":{n:"Need-blind for all applicants, including international students, from the Class of 2029 onward."},
  "Washington and Lee University":{n:"Need-blind for international applicants since the 2024-25 cycle. Also the Johnson Scholarship (full cost; apply by the early deadline)."},
  "Columbia College & Columbia Engineering":{n:"Need is considered at admission for international applicants; the aid request on your application cannot be changed later. Admitted students get 100% of need met.", ex:"o", src:["Columbia: international financial aid","https://undergrad.admissions.columbia.edu/node/1434"]},
  "Columbia University – School of General Studies":{n:"GS scholarships are open to international students through its own financial aid form, but GS does not promise to meet full need (average international package reported at about $32,000 a year).", ex:"s", src:["Columbia GS: international financial aid assessment","https://admissions.gs.columbia.edu/register/intl-assessment-21-22"]},
  "Yale University – Eli Whitney Students Program":{n:"Eli Whitney students apply for Yale's need-based aid; confirm with the programme how it applies to international students."},
  "Cornell University":{n:"Need-aware for international applicants; aid packages meet full need. Submit the CSS Profile by the admission deadline.", ex:"o", src:["Cornell: international first-year aid","https://finaid.cornell.edu/apply-aid/prospective-international-applicants"]},
  "Northwestern University":{n:"Need-aware for international applicants; only first-year applicants can get aid, and Northwestern meets 100% of demonstrated need.", ex:"o", src:["Northwestern: international student aid","https://admissions.northwestern.edu/tuition-aid/international-student-aid"]},
  "Rice University":{n:"Need-aware for international applicants (admission and aid); need met for those funded. International students are not eligible for the Rice Investment.", ex:"s"},
  "California Institute of Technology (Caltech)":{n:"Need-aware for international applicants; admitted students who qualify get packages covering tuition, housing and fees. Apply for aid at the time of admission.", ex:"s"},
  "Vanderbilt University":{n:"Full need for admitted students. Merit: Ingram, Cornelius Vanderbilt and Chancellor's Scholarships (full tuition + summer funding), reported open to international students; apply by about 1 Dec 2026.", ex:"s", src:["Vanderbilt admissions blog: signature scholarships","https://admissions.vanderbilt.edu/vandybloggers/?p=9248"]},
  "Emory University":{n:"A small number of international need-based packages each year. Apply Regular Decision, answer yes to the aid question, and send the CSS Profile in early February. Emory Scholars merit programme also exists.", ex:"o", src:["Emory: undergraduate aid for international students","https://studentaid.emory.edu/undergraduate/apply/new-students/international.html"]},
  "Georgetown University":{n:"A very limited number of need-based scholarships for admitted international applicants who request aid; awards are made only at entry.", ex:"o", src:["Georgetown: financial aid","https://uadmissions.georgetown.edu/?p=1152"]},
  "University of Michigan":{n:"International students are not eligible for financial aid and have very limited scholarship options; College of Engineering awards start after a semester.", ex:"o", src:["U-M: limited financial aid for international students","https://teamdynamix.umich.edu/TDClient/154/Portal/KB/ArticleDet?ID=7451"]},
  "Haverford College":{n:"Limited aid for international students, so admission is especially competitive; 100% of need is met for those admitted. Aid only from the first year. ED I 15 Nov 2026, ED II 5 Jan, RD 10 Jan 2027.", ex:"o", src:["Haverford: international students FAQ","https://www.haverford.edu/node/87986"]},
  "Grinnell College":{n:"Meets 100% of demonstrated need for international students (need-aware); more than $41 million to international students over four years. Merit only if you can cover room and board.", ex:"o", src:["Grinnell: international application","https://www.applyweb.com/grinnell/instructi.html"]},
  "Colby College":{n:"Meets 100% of demonstrated need for all admitted students, including international students.", ex:"o", src:["Colby: international applicants","https://afa.colby.edu/apply/requirements/international-applicants/"]},
  "Colgate University":{n:"Need-aware for all applicants; meets 100% of every international student's demonstrated need.", ex:"o", src:["Colgate: international applicants","https://www.colgate.edu/admission-aid/apply/international-applicants"]},
  "Davidson College":{n:"Meets full need for international students. John M. Belk Scholarship: full cost plus $6,000 stipends, 8 a year, by nomination (counselor or Davidson's own staff); apply by 15 Nov.", ex:"o", src:["Davidson: John M. Belk Scholarship","https://www.davidson.edu/Belk"]},
  "Macalester College":{n:"About 95% of admissions are need-blind; all admitted students get 100% of need met."},
  "Lehigh University":{n:"Limited need-based aid for international students (need-aware). CSS Profile ($25) or the ISAFA form if the fee is a hardship, plus the Certificate of Finances.", ex:"o", src:["Lehigh: international students","https://lehigh.edu/admissions/international-students"]},
  "Brandeis University":{n:"Need-sensitive for international applicants: request aid before admission. Wien International Scholarship for outstanding international students.", ex:"o", src:["Brandeis: international aid 2026-27","https://www.brandeis.edu/student-financial-services/forms-links/guides/international-financial-aid-information-26-27.html"]},
  "Northeastern University":{n:"No need-based aid for international students; first-year international applicants are automatically considered for merit awards such as the International Scholars Award (up to $28,000 a year).", ex:"o", src:["Northeastern: international students","https://studentfinance.northeastern.edu/applying-for-aid/international-students/"]},
  "University of Southern California":{n:"Trustee (full tuition) and Presidential (half tuition) scholarships: international students are eligible with no extra form; apply by Early Action, 1 Nov (1 Dec for portfolio or audition majors).", ex:"o", src:["USC: scholarship grid","https://admission.usc.edu/scholarship-grid"]},
  "University of Miami":{n:"Every applicant is automatically considered for merit; Premier Scholarships go up to the full cost of attendance. Apply by 1 Nov for consideration.", ex:"o", src:["University of Miami: Within Reach","https://www.admissions.miami.edu/undergraduate/financial-aid/um-within-reach/index.html"]},
  "Tulane University":{n:"Merit for international students, including the Paul Tulane Award (full tuition) and up to five Stamps Scholarships for international students.", ex:"s"},
  "George Washington University":{n:"International first-year applicants are automatically considered for the Presidential Academic Scholarship (amount varies).", ex:"o", src:["GW: international student aid","https://undergraduate.admissions.gwu.edu/international-student-aid"]},
  "American University":{n:"Emerging Global Leader Scholarship: full tuition, room and board for international students (competitive; about 1 Dec). Merit awards otherwise.", ex:"s"},
  "Syracuse University":{n:"Several merit awards for international admits, decided at admission with no separate form (reported $5,000–30,000).", ex:"o", src:["Syracuse: merit scholarships for international students","https://financialaid.syr.edu/?p=3114"]},
  "Fordham University":{n:"Presidential (top 1–2% of class) and Dean's (A/A- average) scholarships for international students; renew with a 3.0 GPA.", ex:"o", src:["Fordham: international student scholarships","https://fordham.edu/info/21251/fordham_scholarships_and_grants/8283/international_student_scholarships"]},
  "Baylor University":{n:"International applicants are automatically evaluated for merit awards; renew with a 3.0 GPA.", ex:"s"},
  "University of Rochester":{n:"International merit from $10,000 up to full tuition, plus some need-based aid.", ex:"s"},
  "Case Western Reserve University":{n:"Merit for international students, including full-tuition awards (Squire, A.W. Smith), plus limited need-based aid.", ex:"s"},
  "Rochester Institute of Technology":{n:"Merit for international first-years, reported $14,000–27,000 a year.", ex:"s"},
  "Drexel University":{n:"Merit for international students, reported $10,000–28,000 a year.", ex:"s"},
  "University of San Francisco":{n:"Automatic merit up to $27,000 a year if you apply for Fall 2027 by 15 Jan 2027.", ex:"o"},
  "University of Pittsburgh":{n:"International applicants with a complete file by 1 Feb are reviewed for merit up to $10,000 a year (8 terms).", ex:"o", src:["Pitt: international student scholarships","https://financialaid.pitt.edu/types-of-aid/scholarships/international-student-scholarships/"]},
  "University of Alabama":{n:"International students get the same automatic merit as out-of-state students: 2026 tiers $6,000 (SAT 1200–1250), $8,000 (1260–1290), $10,000 (1300–1320) and more for 1420+; Presidential Elite (4.0 GPA, 1600 SAT) covers tuition. Fall 2027 deadline reported as 4 Dec 2026.", ex:"s", src:["UA: international scholarships","https://afford.ua.edu/scholarships/international/"]},
  "Arizona State University":{n:"New American University scholarships for international first-years (reported up to about $14,500 a year; renewable 8 semesters).", ex:"s", src:["ASU: New American University award","https://admission.asu.edu/namu"]},
  "Iowa State University":{n:"International Merit: Award of Achievement $5,000–10,000 a year, Award of Distinction $2,000–4,000; OneApp by 15 Feb (priority), 1 May (final).", ex:"o", src:["Iowa State: international merit scholarships","https://www.iastate.edu/admission-and-aid/admissions/international-admissions/international-merit-scholarships"]},
  "University of Texas at Dallas":{n:"Academic Excellence Scholarship: automatic if your application is complete by the 1 Dec priority deadline; amounts change each year.", ex:"o", src:["UT Dallas: freshman scholarships","https://enroll.utdallas.edu/affordability/freshman-scholarships"]},
  "Mississippi State University":{n:"Automatic academic scholarships for international students (minimum GPA 3.30; reported $12,000–19,000 a year). Students with agent contracts are not eligible.", ex:"o", src:["MSU: international scholarships","https://www.sfa.msstate.edu/scholarships/international-scholarships"]},
  "University of Minnesota Twin Cities":{n:"Global Excellence Scholarship: every international first-year admitted for fall is considered automatically; covers half or all of the non-resident tuition difference.", ex:"s"},
  "University of Kentucky":{n:"International Ambassador Scholarship, $3,000–16,000 a year (competitive).", ex:"o", src:["UK: international undergraduate scholarships","https://studentsuccess.uky.edu/financial-aid-and-scholarships/international-student-undergraduate-scholarships"]},
  "Oklahoma State University":{n:"International Achievement Freshmen Scholarship, $5,000–15,000 a year, automatic with admission; top tier for a 3.75–4.0 GPA with qualifying scores.", ex:"o", src:["OSU: international scholarships","https://go.okstate.edu/scholarships-financial-aid/types-of-aid/scholarships-and-grants/international-scholarships"]},
  "University of Kansas":{n:"International first-year awards by GPA (reported $8,000–12,000 a year); international deadline 1 May.", ex:"s"},
  "Kansas State University":{n:"International freshman awards around $6,000 a year, renewable with a 3.0 GPA.", ex:"s"},
  "University of Cincinnati":{n:"International Outreach Award, $5,000–15,000 a year at the main campus (applied to the non-resident portion); no full rides or need-based aid for international undergraduates.", ex:"o", src:["UC: international scholarships","https://admissions.uc.edu/information/international/finance/scholarship.html"]},
  "University of Oregon":{n:"Automatic merit for international first-years (reported $15,000–20,000 a year) and the ICSP tuition award ($7,000–27,000, need-based, with cultural service).", ex:"s"},
  "Oregon State University":{n:"Provost's Scholarship for Excellence, $6,000 a year (3.5 GPA).", ex:"s"},
  "Washington State University":{n:"International Academic Award, $2,000–4,000 a year tuition waiver.", ex:"s"},
  "University of Utah":{n:"Only small international awards (for example $4,000 Nagoya-type scholarships).", ex:"s"},
  "Truman State University":{n:"International merit scholarships reported at $1,000–10,000 a year, renewable.", ex:"s"},
  "Sewanee: The University of the South":{n:"Over $500,000 a year in need-based aid to international students, $5,000 up to full cost; 7 Global Scholarships a year.", ex:"o", src:["Sewanee: international aid","https://new.sewanee.edu/admission-aid/application-process/application-review/international-applicant/international-aid/"]},
  "Rhodes College":{n:"$2.4 million to last year's international admits; merit up to $37,000 a year; need-aware.", ex:"o", src:["Rhodes: international student financial aid","https://www.rhodes.edu/admission-aid/international-student-admission/international-student-financial-aid"]},
  "Beloit College":{n:"International merit up to $45,000 a year (average about $35,000); no full rides.", ex:"s"},
  "Berea College":{n:"No tuition for any student; international students' first-year room and board are also covered; everyone works 10–15 hours a week on campus.", ex:"s"},
  "Minerva University":{n:"Tuition $29,800, total cost about $56,200 (Class of 2030); need-based aid from private donors plus work study.", ex:"o", src:["Minerva: financial aid","https://www.minerva.edu/undergraduate/financial-aid"]},
  "University of North Carolina at Chapel Hill":{n:"Little aid for international students, except the Morehead-Cain Scholarship (full cost), which international students can apply for through UNC's 15 Oct Early Action."},
  "Duke University":{n:"Need-aware for international applicants, full need met. The Robertson Scholarship takes a small number of international students."},
  "The Cooper Union":{n:"Every admitted student gets at least a half-tuition scholarship; more is need-based (check international eligibility)."},
  "Olin College of Engineering":{n:"Every admitted student has received the Olin Scholarship (half tuition); limited need-based aid for international students (check)."},
  "Curtis Institute of Music":{n:"Tuition-free for every student; admission by audition."},
  "Soka University of America":{n:"Full tuition for families earning under about $60,000, open to international students; merit and need aid above that."},
  "College of the Atlantic":{n:"Known for meeting a large share of international students' need."}
});
const AID_SEG_DEFAULT = {ivy:"ck", spr:"ck", lac:"ck", flag:"ck", pub:"ck", pri:"ck", route:"ck"};
const aidOf = x => x.country !== "USA" ? null : (AID[x.name] || {t: AID_SEG_DEFAULT[SEG[x.id]] || "ck", ex:"k"});

/* What US universities look for (Common Data Set C7 factors in plain words) */
const VAL_SEG = {
  ivy:"Everything is read: the hardest courses and top grades, test scores where required, two teacher letters, essays that show who you are, and depth in one or two activities. Character and context weigh as much as numbers.",
  spr:"Grades and scores first, then essays and letters. Many also track demonstrated interest (webinars, emails, an interview).",
  lac:"Essays, teacher letters and character matter most; small classes mean they want people who join in. Interviews and demonstrated interest often count.",
  flag:"Grades and the difficulty of your courses decide most of it; essays matter less, except at the most selective public universities.",
  pub:"Admission is mostly by grades (and scores where used). Apply early for scholarships and housing.",
  pri:"Grades, scores and a complete file; merit scholarships follow grades and test scores.",
  route:"Built for applicants whose path is not straight from school: maturity, work and a clear reason for returning to study count most."
};
const VAL = {
  "Massachusetts Institute of Technology (MIT)":"Hands-on making, collaboration, initiative and taking risks; short essays about what you build and how you work with others.",
  "California Institute of Technology (Caltech)":"Deep curiosity in maths and science, research or projects, creativity, and fit with the honour code.",
  "Stanford University":"Intellectual vitality: show what you explore on your own and why.",
  "Harvard University":"Personal qualities and impact on others, as much as academics.",
  "Yale University":"Leadership, community and a 'Why Yale' fit; strong teacher letters.",
  "Princeton University":"Service ('in the nation's service and the service of humanity') and intellectual depth; graded paper required.",
  "Columbia College & Columbia Engineering":"Fit with the Core Curriculum and New York; the 'lists' questions show what you read and watch.",
  "Columbia University – School of General Studies":"A non-traditional path: work, service or other experience since school, maturity, and a clear academic plan. Your 2022–2026 years are the point, not a gap.",
  "Yale University – Eli Whitney Students Program":"At least five years away from formal education, a strong record and a clear reason to study at Yale now.",
  "University of Pennsylvania":"School-specific fit ('Why Penn' for your chosen school) and how you would contribute to the community.",
  "Brown University":"Self-direction for the Open Curriculum: what you would choose to study and why.",
  "Dartmouth College":"Community and the outdoors culture; a peer recommendation is welcome.",
  "Cornell University":"Fit with the specific college you apply to (separate essay for each).",
  "Duke University":"Curiosity and what you would add to the community.",
  "University of Chicago":"Intellectual playfulness: the unusual essay prompts are where you stand out.",
  "Northwestern University":"A specific 'Why Northwestern' and how you take part in communities.",
  "Johns Hopkins University":"Research curiosity and how you would contribute to the Hopkins community.",
  "Rice University":"The 'Rice box' (an image) and fit with the residential colleges.",
  "Vanderbilt University":"Leadership and community engagement; separate merit essays.",
  "Georgetown University":"Its own application, an alumni interview and service to others (Jesuit mission).",
  "Carnegie Mellon University":"Depth in your chosen school: technical projects for CS and engineering, portfolios for arts.",
  "University of Notre Dame":"Character and service; comfort with a Catholic community.",
  "Tufts University":"Civic engagement and intellectual curiosity; short, personal 'Why Tufts'.",
  "New York University":"A global outlook and a specific reason for NYU.",
  "Northeastern University":"Interest in co-op (paid work terms) and experiential learning.",
  "University of Southern California":"Interdisciplinary interests and what you would bring to the 'Trojan Family'.",
  "Minerva University":"Its own challenges and interview, no fees; independence and adaptability across seven cities.",
  "Amherst College":"Intellectual curiosity in an open curriculum; a graded writing sample is optional and helps strong writers.",
  "Williams College":"Love of ideas and the tutorial system: show how you argue and write.",
  "Swarthmore College":"Academic intensity and social responsibility; a strong 'Why Swarthmore'.",
  "Pomona College":"Curiosity and community in a small college inside the Claremont consortium.",
  "Bowdoin College":"The 'common good': how you help others; interview optional.",
  "Middlebury College":"Languages and the environment are signature strengths; interest in either helps.",
  "Wesleyan University":"Independence and creativity; flexible curriculum.",
  "Grinnell College":"Self-directed learning (open curriculum) and social justice.",
  "Macalester College":"Internationalism: a quarter of students are international, so a global perspective fits.",
  "Davidson College":"Character, honour code and service; Belk nominations through your school.",
  "Colby College":"Engagement and a specific interest in Colby's programmes (DavisConnects).",
  "Berea College":"Only students who show financial need are admitted: a family that could pay full cost is not eligible. Labour programme and service matter.",
  "The Cooper Union":"Engineering applicants: maths and science depth; art and architecture: the home test (hometest) and portfolio.",
  "Olin College of Engineering":"Teamwork and making: finalists attend Candidates' Weekend with group design exercises.",
  "The Juilliard School":"The audition decides admission.",
  "Curtis Institute of Music":"The audition decides admission.",
  "Boston University":"Grades and rigour first; Trustee Scholarship has its own essays (1 Dec).",
  "Tulane University":"Demonstrated interest and a specific 'Why Tulane'; Early Action helps for merit.",
  "University of Rochester":"Interviews encouraged; flexible curriculum (no required core).",
  "Worcester Polytechnic Institute (WPI)":"Project-based learning: show projects you started and finished.",
  "Rensselaer Polytechnic Institute (RPI)":"Technical depth and leadership; strong maths.",
  "Georgia Institute of Technology":"Grades, rigour and fit with your chosen major; very selective for out-of-state applicants.",
  "University of Illinois Urbana-Champaign":"Admission is by major: computer science and engineering are far harder than other majors.",
  "Purdue University":"Admission is by major; strong maths for engineering and computer science.",
  "University of Texas at Austin":"Admission is by major; essays and the expanded resume count.",
  "University of California, Berkeley":"Grades in context and four Personal Insight Questions; no SAT.",
  "University of California, Los Angeles (UCLA)":"Grades in context and four Personal Insight Questions; no SAT.",
  "University of Washington (Seattle)":"Grades, rigour and essays; computer science direct admission is very hard.",
  "University of Michigan":"'Why Michigan' essay for your school or college; holistic review.",
  "Wake Forest University":"An interview is recommended; character and curiosity.",
  "Case Western Reserve University":"Interviews and interest; science and engineering depth.",
  "Soka University of America":"Global citizenship and peace; a liberal arts curriculum with study abroad for everyone."
};

/* Visa file strength: our reading, not an official rating. Officers ask whether the school fits your plan and whether you can pay. */
function visaOf(x){
  if (x.country !== "USA") return null;
  const a = aidOf(x), top = ["20","50","100","200"].includes(x.band), known = top || ["500","1000"].includes(x.band);
  if (a && ["nb","fn","fr"].includes(a.t) || ["20","50","100"].includes(x.band)) return {l:"Strong", c:"g", why:"A well-known university, and if you are admitted with aid the I-20 shows most costs covered, which is the hardest part of a visa interview."};
  if (known || a && ["nm","mr"].includes(a.t)) return {l:"Fair", c:"y", why:"A recognised university; your family's documents must show the rest of the yearly cost on the I-20."};
  return {l:"Prepare well", c:"r", why:"Less known abroad: explain clearly why this university and programme fit your plan, and show funds for the full first year."};
}
/* El-Yurt Umidi: QS or THE top 300 (our band is approximate; check the exact rank) */
const eyuOf = x => x.country !== "USA" ? "" : ["20","50","100"].includes(x.band) ? "top100" : x.band === "200" ? "top300" : "";

/* ---------- USA guide content ---------- */
const US_AIDHOW = [
  "<b>Need-blind</b> (10 universities) means your money is not considered at admission. <b>Need-aware</b> means asking for aid can lower your chance, so ask only where you truly need it and keep a few universities where you can pay what the family can.",
  "Need-based aid is calculated from your family's income, savings and property in the <b>CSS Profile</b> ($25 for the first university, $16 for each more; Lehigh and some others accept the free ISAFA form if the fee is a hardship) or the university's own form, with bank statements and income proof.",
  "Most universities give need-based aid to international students <b>only in the first year of entry</b>: if you do not apply for aid now, you cannot later.",
  "Merit scholarships are usually <b>automatic</b> when you apply by the scholarship deadline (often 1 Nov or 1 Dec), and many depend on SAT scores. A higher SAT is worth thousands of dollars a year at public universities.",
  "<b>Early Decision</b> is binding: use it only where the aid estimate (net price calculator or an email to the aid office) is affordable.",
  "The I-20 lists the yearly cost and how it is paid. A scholarship letter plus a family bank statement covering the rest is what the visa officer looks for."
];
const US_FULLRIDES = [
  ["Ten need-blind universities","Harvard, Yale, Princeton, MIT, Amherst, Dartmouth, Bowdoin, Brown, Notre Dame, Washington and Lee","Up to the full cost, based on need","Regular application + CSS Profile"],
  ["Morehead-Cain (UNC Chapel Hill)","Open to international applicants","Full cost for four years plus summer programmes","UNC Early Action, 15 Oct"],
  ["Robertson Scholars (Duke / UNC)","A small number of international students","Full cost plus summers","~November (check)"],
  ["Johnson Scholarship (Washington and Lee)","International students apply too","Full cost","Early in the cycle (check)"],
  ["Vanderbilt signature scholarships","Ingram, Cornelius Vanderbilt, Chancellor's","Full tuition plus summer funding","~1 Dec 2026"],
  ["USC Trustee / Presidential","International students eligible, no extra form","Full / half tuition","Early Action, 1 Nov 2026"],
  ["University of Miami Premier","All applicants considered","Up to the full cost","1 Nov 2026"],
  ["Tulane: Paul Tulane Award, Stamps (international)","International students eligible","Full tuition; Stamps up to 5 a year","Early in the cycle (check)"],
  ["American University: Emerging Global Leader","International students only","Full tuition, room and board","~1 Dec 2026"],
  ["Davidson: John M. Belk","Nominated by your school or by Davidson","Full cost + $6,000","15 Nov 2026"],
  ["Case Western: Squire, A.W. Smith","International students eligible","Full tuition","With the application (check)"],
  ["Berea College","Every student; international places limited","No tuition; first-year room and board for international students","~Dec (check)"],
  ["Curtis · Cooper Union · Olin","Every admitted student","Free tuition (Curtis) or at least half tuition","With the application"],
  ["SMU President's Scholars","Applicants of any citizenship","Full tuition and fees plus a housing award","Early in the cycle (check)"],
  ["University of Houston Tier One","International students eligible","Full tuition and fees plus two years of housing and meals","Apply by 1 Nov 2026"],
  ["Marquette Global Scholar","Up to 2 international students (3.25+ GPA)","Full tuition, housing, food and fees","Apply by 1 Mar 2027"],
  ["Lamar University Presidential","International students with SAT 1330+","Full ride: tuition, fees, room, board, books","Priority 15 Jan 2027"],
  ["SIU Edwardsville Meridian","Open to international students (competitive)","Full tuition, fees, room and board","~1 Dec (check)"],
  ["Clarkson Ignite Presidential · Coe Global Leadership","10 first-years (Clarkson) · 1 a year (Coe)","Full tuition","With the application · ~1 Feb (Coe)"]
];
const US_PRIVMERIT = [
  ["Willamette University","$52,000 International Student Grant a year","Every international applicant, automatic"],
  ["Cornell College (Iowa)","$35,000–40,000 a year (up to $42,000)","Automatic, renewable"],
  ["Coe College","Up to $42,000 a year","By grades and SAT"],
  ["Clarkson University","Up to $40,000 a year","All admitted applicants considered"],
  ["Washington College","$33,000–38,000 a year","Guaranteed for admitted students"],
  ["Ohio Wesleyan University","$37,000 a year (Bashford)","Automatic, no minimum GPA or test"],
  ["Xavier University (Ohio)","$23,000–30,000 a year","Every admitted international student considered, automatic"],
  ["University of Puget Sound","$18,000–33,000 a year","Automatic; Lillis full award by 1 Dec"],
  ["Millsaps College","$21,000–34,000 a year","Automatic on admission"],
  ["Ursinus College","Reported $30,000–40,000 a year","All admitted international students"],
  ["Rollins College","$15,000–33,000 a year","Academic scholarships"],
  ["Trinity University (Texas)","$5,000–30,000 a year","Automatic"],
  ["Eckerd College","Up to $25,000 a year","Automatic"],
  ["Hope College","$15,000–25,000 a year","Mainly academics"],
  ["Washington & Jefferson College","Reported $20,000 grant","Every admitted international student; by 1 Mar"],
  ["Marquette University","Reported $15,000–28,000 a year","Plus the Global Scholar full award"]
];
const US_PUBMERIT = [
  ["University of Alabama","$6,000–10,000+ a year by SAT; full tuition at 1600","Automatic; ~4 Dec 2026"],
  ["Oklahoma State","$5,000–15,000 a year","Automatic with admission"],
  ["University of Kentucky","$3,000–16,000 a year","International Ambassador, competitive"],
  ["University of Cincinnati","$5,000–15,000 a year","Automatic; ~1 Dec"],
  ["Mississippi State","Reported $12,000–19,000 a year","Automatic (GPA 3.30+); not with an agent contract"],
  ["Iowa State","$2,000–10,000 a year","OneApp by 15 Feb"],
  ["University of Minnesota","Half or all of the out-of-state difference","Automatic for fall admits"],
  ["University of Oregon","Reported $15,000–20,000 a year","Automatic"],
  ["Arizona State","Reported up to ~$14,500 a year","Automatic"],
  ["University of Kansas · Kansas State","$6,000–12,000 a year by GPA","1 May (KU international)"],
  ["UT Dallas","Academic Excellence Scholarship (varies)","Complete by 1 Dec"],
  ["University of Pittsburgh","Up to $10,000 a year","Complete by 1 Feb"],
  ["Oregon State · Washington State","$2,000–6,000 a year","By GPA"],
  ["University of Missouri","$10,000 or $20,000 a year","Holistic review"],
  ["Missouri S&T","$15,000 a year","Automatic for F-1 freshmen"],
  ["University of Idaho","Nearly $16,000 a year","Automatic with a 3.0 GPA"],
  ["Middle Tennessee State","$6,000–16,000 a year by GPA or SAT","Automatic, first-come"],
  ["Rowan University","$1,000–19,000 a year","Automatic; priority 1 Mar"],
  ["University of North Florida","$6,000–14,000 a year (tuition waiver)","Admitted by 15 Jan"],
  ["Towson University","$6,000–12,000","Competitive; priority 15 Nov"],
  ["Northern Arizona University","Up to $11,000 a year","Automatic, first-come"],
  ["Western Washington · SUNY Geneseo","Up to $10,000 a year","Automatic"],
  ["Grand Valley State","About $6,000 a year + $2,500 merit","Automatic for every international admit"],
  ["Lamar · East Texas A&M","$2,000+ a year; a $1,000+ competitive award brings in-state tuition","By SAT (Lamar) · myLeo (ETAMU)"]
];
const US_UZFUND = [
  "<b>El-Yurt Umidi Foundation (Uzbekistan).</b> For 2026/27 it offered 500 places, 167 of them for bachelor's degrees, at universities in the QS or THE world top 300 (or on its approved list). It covers tuition, visa, insurance, flights, rent and living costs. Conditions reported: age 30 or under, IELTS 6.0+ (an unconditional offer may replace it), an admission letter, and five years of work in Uzbekistan after the degree. The 2026 round ran 3–24 April; expect the 2027 round about then, after US decisions arrive.",
  "<b>Automatic award:</b> under a 2025 presidential decree, candidates admitted with full tuition covered at a top-100 university get the El-Yurt Umidi scholarship without competing. A full-tuition merit award from a top-100 US university would then cover the rest.",
  "<b>EducationUSA Tashkent</b> (U.S. Embassy) gives free advising on choosing universities, aid and the visa; ask about fee waivers and its scholarship workshops."
];
const US_VISA2 = [
  ["After you accept (by 1 May)","Pay the deposit. Send the university a passport copy and proof of funds: a bank statement or sponsor letter covering the first year's cost minus any scholarship. The university issues your <b>I-20</b>."],
  ["SEVIS fee","Pay the I-901 SEVIS fee, <b>$350</b>, online, and keep the receipt."],
  ["DS-160","Fill in the DS-160. List every social-media account you used in the last five years; since June 2025 student applicants are told to make them public."],
  ["Book the interview","Pay the <b>$185</b> MRV fee and book at the U.S. Embassy in <b>Tashkent</b>, the only post for Uzbek F-1 applicants (interviews must be in your country of nationality or residence). The wait was about 1.5 months in September 2026, so book as soon as you have the I-20."],
  ["The interview","Bring the I-20, SEVIS receipt, admission and scholarship letters, bank statements, Attestat, IELTS/SAT and a short account of 2022–2026. Officers apply section 214(b): you must show you can pay and that you plan to return. Answer in your own words, briefly."],
  ["If approved","Since about May 2026 some embassies also collect a <b>$250 visa integrity fee</b> when the visa is issued. You can enter the U.S. up to 30 days before the I-20 start date."],
  ["If refused","A 214(b) refusal is not permanent. Fix what was weak (funding, explanation of the gap, programme fit) and reapply; there is no limit on attempts."]
];
const US_VISANOW = [
  "<b>Travel ban:</b> Uzbekistan is not on the lists in force since 1 January 2026 (Proclamation 10998: 19 countries fully restricted, 19 partly, including student visas). Turkmenistan's student-visa restriction was lifted.",
  "<b>Length of stay:</b> a DHS rule replacing 'duration of status' with fixed periods (up to four years) was published on 17 July 2026 but blocked by a federal court on 14 September 2026; students are still admitted for the length of their programme.",
  "<b>Refusals:</b> about 35% of F-1 applications worldwide were refused in 2025 (41% in Asia). There is no official F-1 figure for Uzbekistan; 64% of Uzbek visitor (B) visas were refused in FY2024, so expect careful questions about ties and funding.",
  "<b>Work after graduation:</b> OPT (12 months, 36 for STEM) still exists, but the administration has said it wants to restrict it; plan your degree for its value at home too.",
  "<b>Numbers:</b> 1,310 students from Uzbekistan were in the U.S. in 2024/25, 787 of them undergraduates."
];
const US_VISAFILE = [
  "A scholarship letter covering most costs is the strongest single document. Universities that meet full need or give large merit awards make the funding question easy.",
  "A well-known university and a major that follows from your past (school results, work since 2022, self-study) make your plan believable.",
  "Ties to Uzbekistan: family, property, a job offer or plan at home, and the El-Yurt Umidi return obligation if you hold it.",
  "Consistency: the DS-160, I-20, essays and interview answers should tell the same story about 2022–2026.",
  "Be careful with agents: some universities refuse scholarships to students under agent contracts (Mississippi State says so), and officers notice copied answers."
];
const US_STANDOUT = [
  "<b>Turn 2022–2026 into your story.</b> Name each year in the activities list (work, study, projects, family duties) with hours and results. Columbia GS and Yale's Eli Whitney programme exist for applicants like you.",
  "<b>Close the Writing gap.</b> IELTS Writing 6.5–7.0 (or Duolingo 125+) removes the one weak number in your file; the essays then prove you write well.",
  "<b>Score high on the SAT.</b> 1450+ opens most merit awards; 1500+ makes you competitive at the most selective universities, where Uzbek school grades are less familiar.",
  "<b>Rare background, used well.</b> Only 787 Uzbek undergraduates study in the U.S.: a clear picture of your city, languages (Uzbek, Russian, English) and what you would bring back is unusual in most applicant pools.",
  "<b>One deep interest.</b> Show it with something concrete: a project, a certificate course (edX, Coursera), a small business, tutoring, an online portfolio or research you did yourself.",
  "<b>Letters from people who know you now.</b> Two school teachers from 2022 plus, where allowed, a supervisor who has seen your work since then.",
  "<b>Specific 'Why us' essays.</b> Name courses, professors, programmes and student groups; generic praise reads as a copied essay.",
  "<b>Interviews and interest.</b> Take any interview offered (alumni or InitialView); attend virtual sessions at mid-sized and liberal arts colleges, which record your interest.",
  "<b>Apply early where money is.</b> Merit deadlines (1 Nov–1 Dec) come before regular deadlines; your 5 Dec SAT is too late for some, so consider the 7 Nov sitting."
];

/* Every other four-year college in the U.S. (index from a public list of 2,289 institutions, filtered: seminaries,
   medical and health schools, women's colleges and service academies removed; the directory above already covers the rest in detail) */
