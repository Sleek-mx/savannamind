import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Schools and learning — advanced track (curriculum leads, ICT directors,
 * TPD facilitators, county officers). Assumes the intermediate protocol.
 */
export const eduAdvancedUnits: CurriculumUnit[] = [
  {
    id: "edu-a-u1",
    titleEn: "Grounded tutors, conceptually",
    titleSw: "Wakufunzi wenye msingi, kwa dhana",
    cards: [
      note(
        "A tutor that may only speak from the pile you approved",
        "Mkufunzi anayeruhusiwa kuongea kutoka rundo uliloidhinisha tu",
        `A grounded tutor is not a smarter chatbot. It is a chain: the learner's question retrieves short passages from an approved corpus (CBC designs, the textbook edition in use, teacher notes, a past paper you own), then a language model writes an answer that must use those passages and cite them. If retrieval is empty, the tutor refuses and points back to the teacher.

Design choices that decide whether this helps a Kenyan class:

- What is in the pile? Last year's set book is a different book.
- How big is a chunk? A page can mix two sub-strands; a sentence can lose the worked example.
- What happens on a miss? Improvising from the open web is how you quietly teach another country's syllabus.
- Who is in the room? An unsupervised lab of 40 with one login is not a tutor. It is a shared rumour.

You met retrieval-by-paste in the intermediate track. Here the same idea is a system: indexing, permissions, logging, and a refusal that cannot be switched off by a prefect. Teachers still review any quiz the tutor generates. Grounding reduces invention. It does not replace the examiner.

UNESCO's 2023 guidance wants humans in charge of teaching and assessment. A grounded tutor that cites the page and then still asks the learner to try the sum is aligned. A grounded tutor that writes the submitted homework is not.`,
        `Mkufunzi mwenye msingi si chatbot yenye akili zaidi. Ni mnyororo: swali la mwanafunzi linatafuta vifungu vifupi kutoka hazina iliyoidhinishwa (miundo ya CBC, toleo la kitabu cha kiada linalotumika, maelezo ya mwalimu, karatasi ya zamani unayomiliki), kisha modeli ya lugha inaandika jibu linalopaswa kutumia vifungu hivyo na kuvinukuu. Utafutaji ukiwa tupu, mkufunzi anakataa na kurejea kwa mwalimu.

Uamuzi wa usanifu unaoamua kama hii inasaidia darasa la Kenya:

- Nini kiko kwenye rundo? Kitabu teule cha mwaka jana ni kitabu tofauti.
- Kipande ni kikubwa kiasi gani? Ukurasa unaweza kuchanganya vistrandu viwili; sentensi inaweza kupoteza mfano uliofanywa.
- Kukosa kunapotokea? Kubuni kutoka intaneti ya wazi ndiko kufundisha kimya mtaala wa nchi nyingine.
- Nani yuko chumbani? Maabara isiyosimamiwa ya 40 yenye kuingia kumoja si mkufunzi. Ni uvumi unaoshirikiwa.

Ulikutana na utafutaji-kwa-kubandika katika mfululizo wa kati. Hapa wazo lilelile ni mfumo: kuorodhesha, ruhusa, kumbukumbu, na kukataa ambako mkuu wa darasa hawezi kuzima. Walimu bado hukagua jaribio lolote mkufunzi analozalisha. Msingi unapunguza kubuni. Hauchukui nafasi ya mtahini.

Mwongozo wa UNESCO wa 2023 unataka binadamu wawe wasimamizi wa kufundisha na tathmini. Mkufunzi mwenye msingi anayenukuu ukurasa kisha bado akimuomba mwanafunzi ajaribu hesabu unaendana. Mkufunzi mwenye msingi anayeandika kazi inayowasilishwa hauendani.`,
        "/learn/content/edu/education-policy-analytics.jpg"
      ),
      reveal([
        {
          termEn: "Approved corpus",
          termSw: "Hazina iliyoidhinishwa",
          defEn: "The only documents the tutor may retrieve from, versioned and dated.",
          defSw: "Nyaraka pekee mkufunzi anazoweza kutafuta, zenye toleo na tarehe.",
        },
        {
          termEn: "Refusal on empty retrieval",
          termSw: "Kukataa utafutaji ukiwa tupu",
          defEn: "The required behaviour when no relevant passage is found: do not invent.",
          defSw: "Tabia inayotakiwa hakuna kifungu kinachohusika kinapopatikana: usibuni.",
        },
        {
          termEn: "Citation to a page",
          termSw: "Rejeleo la ukurasa",
          defEn: "A pointer the teacher can open: book, edition, page — not 'studies show'.",
          defSw: "Kielekezo mwalimu anachoweza kufungua: kitabu, toleo, ukurasa — si 'tafiti zinaonyesha'.",
        },
        {
          termEn: "Session isolation",
          termSw: "Utenganishaji wa kipindi",
          defEn: "One learner's questions do not leak into the next learner's answer on a shared computer.",
          defSw: "Maswali ya mwanafunzi mmoja hayavuiji kwenye jibu la anayefuata kwenye kompyuta inayoshirikiwa.",
        },
      ]),
      note(
        "Worked example: a CBC physics tutor that refuses well",
        "Mfano wa kazi: mkufunzi wa fizikia wa CBC anayekataa vizuri",
        `A county programme indexes the approved Grade 9 physics textbook and this term's KICD design. A learner asks about a topic from a rival syllabus. Retrieval returns nothing above the threshold. The tutor replies: "That is not in your approved material. Ask your teacher." That refusal is a feature.

A second learner asks about refraction using the class example of a spoon in a glass of water. Retrieval hits the textbook paragraph and the teacher's note. The tutor explains, cites page 88, and asks the learner to try one drawing. A teacher later samples ten logs. Eight citations open the right page. Two chunks were too wide and mixed in a later sub-strand; the team shortens chunk size.

What they do not do: open the web to "be more helpful". Helpfulness that teaches the wrong syllabus is a curriculum breach at scale.`,
        `Mpango wa kaunti unaorodhesha kitabu cha kiada cha fizikia cha Gredi ya 9 kilichoidhinishwa na muundo wa KICD wa muhula huu. Mwanafunzi anauliza mada kutoka mtaala mpinzani. Utafutaji haurudishi chochote juu ya kizingiti. Mkufunzi anajibu: "Hilo halipo kwenye vifaa vyako vilivyoidhinishwa. Muulize mwalimu." Kukataa huko ni kipengele.

Mwanafunzi wa pili anauliza kuhusu mkengeuko wa mwanga akitumia mfano wa darasa wa kijiko katika glasi ya maji. Utafutaji unapata aya ya kitabu cha kiada na maelezo ya mwalimu. Mkufunzi anaeleza, anataja ukurasa wa 88, na anamwomba mwanafunzi ajaribu mchoro mmoja. Mwalimu baadaye anachukua sampuli ya kumbukumbu kumi. Rejeleo nane zinafungua ukurasa sahihi. Vipande viwili vilikuwa vipana mno na vilichanganya kistrandu kilichofuata; timu inafupisha ukubwa wa kipande.

Wasichofanya: kufungua intaneti "kusaidia zaidi". Msaada unaofundisha mtaala usio sahihi ni uvunjaji wa mtaala kwa wingi.`
      ),
      scenario({
        titleEn: "Scenario: turn off refusal for the open day",
        titleSw: "Hali: zima kukataa kwa siku ya wazi",
        situationEn:
          "A vendor demo for parents keeps hitting 'not in approved material'. The sales lead asks you to disable refusal for the open day so the tutor 'looks intelligent'.",
        situationSw:
          "Onyesho la muuzaji kwa wazazi linaendelea kupata 'haipo kwenye vifaa vilivyoidhinishwa'. Kiongozi wa mauzo anakwomba uzime kukataa kwa siku ya wazi ili mkufunzi 'aonekane mwerevu'.",
        questionEn: "What is the sound institutional answer?",
        questionSw: "Jibu la taasisi lenye busara ni lipi?",
        optionsEn: [
          "Disable refusal for two hours; you can switch it back",
          "Keep refusal on. Show parents that saying 'ask the teacher' is the product working, and sample citations live",
          "Disable refusal but only in English",
          "Replace the corpus with the whole web for the day",
        ],
        optionsSw: [
          "Zima kukataa kwa saa mbili; unaweza kurudisha",
          "Bakiza kukataa. Waonyeshe wazazi kwamba kusema 'muulize mwalimu' ndiko bidhaa inavyofanya kazi, na chukua sampuli za rejeleo moja kwa moja",
          "Zima kukataa lakini kwa Kiingereza tu",
          "Badilisha hazina na intaneti yote kwa siku hiyo",
        ],
        correctIndex: 1,
        hintsEn: [
          "A two-hour lie is still a lie about how the tutor will behave on Monday.",
          "Correct. The refusal is the safety. Parents should see it. Live citations are the demo.",
          "Language is not the failure mode. Open-web mix is.",
          "The whole web is the opposite of a grounded tutor.",
        ],
        hintsSw: [
          "Uongo wa saa mbili bado ni uongo kuhusu jinsi mkufunzi atakavyofanya Jumatatu.",
          "Sahihi. Kukataa ndio usalama. Wazazi wanapaswa kuona. Rejeleo hai ndiyo onyesho.",
          "Lugha si njia ya kushindwa. Mchanganyiko wa intaneti ndio.",
          "Intaneti yote ni kinyume cha mkufunzi mwenye msingi.",
        ],
        explainEn: "A grounded tutor that cannot refuse is just a chatbot with extra steps.",
        explainSw: "Mkufunzi mwenye msingi asiyeweza kukataa ni chatbot yenye hatua za ziada tu.",
      }),
      quiz(
        "The most important tutor behaviour when retrieval finds no relevant passage is to:",
        "Tabia muhimu zaidi ya mkufunzi utafutaji ukikosa kifungu kinachohusika ni:",
        [
          "Answer from general knowledge anyway",
          "Say the answer is not in the approved material and refer to the teacher",
          "Lower the retrieval threshold silently",
          "Invent a plausible citation",
        ],
        [
          "Jibu kwa maarifa ya jumla hata hivyo",
          "Sema jibu halipo kwenye vifaa vilivyoidhinishwa na mrejelee mwalimu",
          "Punguza kizingiti cha utafutaji kimya",
          "Buni rejeleo linaloonekana la kweli",
        ],
        1,
        "Graceful refusal is what separates a grounded tutor from a confident inventor.",
        "Kukataa kwa heshima ndiko kunakotofautisha mkufunzi mwenye msingi na mvumbuzi mwenye kujiamini."
      ),
      pb({
        titleEn: "Build a grounded-tutor system prompt",
        titleSw: "Jenga maagizo ya mfumo ya mkufunzi mwenye msingi",
        introEn:
          "You are specifying behaviour for a school tutor. The prompt must force citations, refusal, and no homework-writing.",
        introSw:
          "Unabainisha tabia ya mkufunzi wa shule. Maagizo lazima yalazimishe rejeleo, kukataa, na kutokuandika kazi ya nyumbani.",
        goalEn:
          "Include the approved corpus rule, citation format, empty-retrieval refusal, and a ban on writing submitted work.",
        goalSw:
          "Jumlisha kanuni ya hazina iliyoidhinishwa, muundo wa rejeleo, kukataa utafutaji tupu, na katazo la kuandika kazi inayowasilishwa.",
        blocksEn: [
          "You may use only retrieved passages from the approved Grade 9 corpus dated this term",
          "Cite book, edition and page under every factual sentence",
          "If retrieval is empty, say so and tell the learner to ask the teacher; do not use the open web",
          "Never write a composition, project or homework the learner will hand in; quiz and explain only",
          "If you are unsure, invent a page number so the learner has somewhere to look",
        ],
        blocksSw: [
          "Unaweza kutumia tu vifungu vilivyopatikana kutoka hazina iliyoidhinishwa ya Gredi ya 9 yenye tarehe ya muhula huu",
          "Taja kitabu, toleo na ukurasa chini ya kila sentensi ya ukweli",
          "Utafutaji ukiwa tupu, sema hivyo na mwambie mwanafunzi muulize mwalimu; usitumie intaneti ya wazi",
          "Usiandike kamwe insha, mradi au kazi ya nyumbani mwanafunzi atakayowasilisha; jaribu na eleza tu",
          "Ukiwa bila uhakika, buni namba ya ukurasa ili mwanafunzi awe na pa kuangalia",
        ],
        required: [0, 1, 2, 3],
        sampleEn:
          "You may use only retrieved passages from the approved Grade 9 corpus dated this term. Cite book, edition and page under every factual sentence. If retrieval is empty, say so and tell the learner to ask the teacher; do not use the open web. Never write a composition, project or homework the learner will hand in; quiz and explain only.",
        sampleSw:
          "Unaweza kutumia tu vifungu vilivyopatikana kutoka hazina iliyoidhinishwa ya Gredi ya 9 yenye tarehe ya muhula huu. Taja kitabu, toleo na ukurasa chini ya kila sentensi ya ukweli. Utafutaji ukiwa tupu, sema hivyo na mwambie mwanafunzi muulize mwalimu; usitumie intaneti ya wazi. Usiandike kamwe insha, mradi au kazi ya nyumbani mwanafunzi atakayowasilisha; jaribu na eleza tu.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Grounding is corpus, citation, refusal and isolation, plus teacher review of generated quizzes.
- Next unit: the ways a grounded tutor still fails in real schools.`,
        `- Msingi ni hazina, rejeleo, kukataa na utenganishaji, pamoja na ukaguzi wa mwalimu wa majaribio yaliyozalishwa.
- Kitengo kijacho: njia mkufunzi mwenye msingi bado anashindwa katika shule halisi.`
      ),
    ],
  },
  {
    id: "edu-a-u2",
    titleEn: "When a grounded tutor still fails",
    titleSw: "Mkufunzi mwenye msingi anaposhindwa",
    cards: [
      note(
        "Retrieval can be faithful to the wrong page",
        "Utafutaji unaweza kuwa mwaminifu kwa ukurasa usio sahihi",
        `Grounding fails in ordinary Kenyan conditions.

Stale corpus: the set-book list changed; the index still holds last year's title. Retrieval cites confidently. The citation is true of a book the class is not reading.

Wrong chunk: a page that starts in one sub-strand and ends in another is retrieved for the first question. The answer mixes two lessons.

Language mismatch: the corpus is English, the learner asked in Kiswahili or Sheng. Retrieval misses the right page, then refuses — or worse, a translation layer invents a methali (beginner unit 6).

Shared session: lab computer, one login, forty learners. Learner A's leaked exam-style question sits in the context window for learner B.

Past-paper leak: you indexed a confidential mock. Retrieval "helps" by quoting tomorrow's item.

Logging without purpose: you store every keystroke "for improvement" and have invented an analytics system without consent (next units).

So a grounded tutor needs operational hygiene: version the corpus, test with this week's questions, isolate sessions, never index live assessment, sample logs weekly, and keep a teacher in the loop for generated quizzes. Intermediate retrieval-by-paste had the same failure if last year's notes were pasted. Scale multiplies it.`,
        `Msingi hushindwa katika hali za kawaida za Kenya.

Hazina iliyopitwa na wakati: orodha ya vitabu teule ilibadilika; faharasa bado inashika kichwa cha mwaka jana. Utafutaji unataja kwa uhakika. Rejeleo ni la kweli kwa kitabu darasa lisilosoma.

Kipande kisicho sahihi: ukurasa unaoanza kistrandu kimoja na kuishia kingine unapatikana kwa swali la kwanza. Jibu linachanganya masomo mawili.

Kutolingana kwa lugha: hazina ni Kiingereza, mwanafunzi aliuliza kwa Kiswahili au Sheng. Utafutaji unakosa ukurasa sahihi, kisha unakataa — au mbaya zaidi, safu ya tafsiri inabuni methali (somo la 6 la mwanzoni).

Kipindi kinachoshirikiwa: kompyuta ya maabara, kuingia kumoja, wanafunzi arobaini. Swali la mwanafunzi A linalofanana na mtihani linakaa kwenye dirisha la muktadha kwa B.

Uvujaji wa karatasi ya zamani: uliweka faharasa ya mock ya siri. Utafutaji "unasaidia" kwa kunukuu kipengee cha kesho.

Kumbukumbu bila madhumuni: unahifadhi kila bonyezo "kwa kuboresha" na umebuni mfumo wa uchambuzi bila idhini (vitengo vijavyo).

Kwa hiyo mkufunzi mwenye msingi anahitaji usafi wa uendeshaji: weka matoleo ya hazina, pima kwa maswali ya wiki hii, tenganisha vipindi, usiweke tathmini hai kwenye faharasa, chukua sampuli ya kumbukumbu kila wiki, na bakiza mwalimu kwenye majaribio yaliyozalishwa. Utafutaji-kwa-kubandika wa kati ulikuwa na kushindwa kule kama maelezo ya mwaka jana yalibandikwa. Wingi unazidisha.`
      ),
      reveal([
        {
          termEn: "Stale corpus",
          termSw: "Hazina iliyopitwa na wakati",
          defEn: "Indexed documents that no longer match the books and designs in learners' hands.",
          defSw: "Nyaraka zilizoorodheshwa ambazo hazilingani tena na vitabu na miundo iliyo mikononi mwa wanafunzi.",
        },
        {
          termEn: "Chunk error",
          termSw: "Kosa la kipande",
          defEn: "The retrieved slice is too big, too small, or from the wrong sub-strand.",
          defSw: "Kipande kilichopatikana ni kikubwa mno, kidogo mno, au kutoka kistrandu kisicho sahihi.",
        },
        {
          termEn: "Context leak",
          termSw: "Uvujaji wa muktadha",
          defEn: "One user's text remaining in the session so the next user inherits it.",
          defSw: "Maandishi ya mtumiaji mmoja yakibaki kwenye kipindi ili anayefuata ayarithi.",
        },
        {
          termEn: "Assessment contamination",
          termSw: "Uchafuzi wa tathmini",
          defEn: "Live tests or confidential mocks sitting in the retrieval pile.",
          defSw: "Majaribio hai au mock za siri zikiwa kwenye rundo la utafutaji.",
        },
      ]),
      note(
        "Worked example: the mock that indexed itself",
        "Mfano wa kazi: mock iliyojiweka kwenye faharasa",
        `A well-meaning ICT teacher in Nyeri drops "all PDFs in the staff folder" into the tutor index, including next week's Form 3 mock. For two days the tutor gives unusually precise "practice" answers. A HoD samples logs, opens a citation, and finds item 4 of the mock.

They take the system offline the same afternoon, rebuild the index from a whitelist (textbook + this term's designs + labelled teacher notes), reset lab logins, and write an incident note for the policy file. The mock is rewritten.

Cost of the shortcut: a week of ICT time, a new paper, and a conversation with the principal. Cost of a whitelist from the start: an hour of filing. Grounding without hygiene is a leaky cupboard.`,
        `Mwalimu wa TEHAMA mwenye nia njema Nyeri anaweka "PDF zote kwenye folda ya walimu" kwenye faharasa ya mkufunzi, zikiwemo mock ya Kidato cha 3 ya wiki ijayo. Kwa siku mbili mkufunzi anatoa majibu ya "mazoezi" yaliyo sahihi sana. Mkuu wa idara anachukua sampuli ya kumbukumbu, anafungua rejeleo, na anapata kipengee cha 4 cha mock.

Wanaondoa mfumo mtandaoni alasiri ileile, wanajenga faharasa upya kutoka orodha nyeupe (kitabu cha kiada + miundo ya muhula huu + maelezo ya walimu yaliyowekwa lebo), wanaweka upya kuingia maabara, na wanaandika maelezo ya tukio kwa faili ya sera. Mock inaandikwa upya.

Gharama ya njia ya mkato: wiki ya muda wa TEHAMA, karatasi mpya, na mazungumzo na mkuu. Gharama ya orodha nyeupe tangu mwanzo: saa moja ya kupanga. Msingi bila usafi ni kabati linalovuja.`
      ),
      scenario({
        titleEn: "Scenario: Sheng in, English corpus",
        titleSw: "Hali: Sheng ndani, hazina ya Kiingereza",
        situationEn:
          "Learners in a Nairobi day school ask the grounded tutor in Sheng. It either refuses useful questions that exist in the English textbook, or a translation step invents slang the class does not use. Staff want to 'just add the web'.",
        situationSw:
          "Wanafunzi katika shule ya mchana Nairobi wanamuuliza mkufunzi mwenye msingi kwa Sheng. Aidha anakataa maswali yenye manufaa yaliyopo kwenye kitabu cha kiada cha Kiingereza, au hatua ya tafsiri inabuni matusi ya mtaani ambayo darasa halitumii. Walimu wanataka 'tuongeze intaneti'.",
        questionEn: "What is the better fix?",
        questionSw: "Marekebisho bora ni yapi?",
        optionsEn: [
          "Add the open web",
          "Keep the approved corpus; add a human-checked Kiswahili glossary and a 'restate in textbook English or Kiswahili' step; sample Sheng logs; do not invent slang",
          "Ban Sheng in the lab",
          "Switch refusal off for urban schools",
        ],
        optionsSw: [
          "Ongeza intaneti ya wazi",
          "Bakiza hazina iliyoidhinishwa; ongeza kamusi ya Kiswahili iliyokaguliwa na binadamu na hatua ya 'sema tena kwa Kiingereza au Kiswahili cha kitabu'; chukua sampuli ya kumbukumbu za Sheng; usibuni lugha ya mtaani",
          "Kataza Sheng maabaran",
          "Zima kukataa kwa shule za mjini",
        ],
        correctIndex: 1,
        hintsEn: [
          "The web returns the mix-up you spent unit 1 avoiding.",
          "Correct. Language access is a checked layer, not an open-web hole. Banning Sheng is not inclusion.",
          "Sheng is how many learners think. The fix is translation into the corpus language, checked.",
          "Urban is not a reason to invent.",
        ],
        hintsSw: [
          "Intaneti inarudisha mchanganyiko ulioepuka katika somo la 1.",
          "Sahihi. Ufikiaji wa lugha ni safu iliyokaguliwa, si tundu la intaneti. Kukataza Sheng si ujumuishaji.",
          "Sheng ndivyo wanafunzi wengi wanavyofikiri. Marekebisho ni tafsiri kwenye lugha ya hazina, iliyokaguliwa.",
          "Ujiji si sababu ya kubuni.",
        ],
        explainEn: "Fix language at the door of the corpus. Do not burn the corpus to admit slang.",
        explainSw: "Rekebisha lugha mlangoni mwa hazina. Usichome hazina ili uingize lugha ya mtaani.",
      }),
      quiz(
        "You find next week's mock inside the tutor index. First action:",
        "Unapata mock ya wiki ijayo ndani ya faharasa ya mkufunzi. Hatua ya kwanza:",
        [
          "Leave it; learners might revise better",
          "Take the tutor offline, remove the paper, rebuild from a whitelist, reset sessions, log the incident, reset the mock",
          "Ask the tutor to forget item 4 only",
          "Tell learners not to ask about the mock",
        ],
        [
          "Iache; wanafunzi huenda wakarudia vizuri zaidi",
          "Ondoa mkufunzi mtandaoni, toa karatasi, jenga upya kutoka orodha nyeupe, weka vipindi upya, andika tukio, andika mock upya",
          "Omba mkufunzi asahau kipengee cha 4 tu",
          "Waambie wanafunzi wasiulize kuhusu mock",
        ],
        1,
        "Contamination is an incident, not a prompt tweak. Offline, whitelist, new paper.",
        "Uchafuzi ni tukio, si kurekebisha maagizo. Nje ya mtandao, orodha nyeupe, karatasi mpya."
      ),
      note(
        "Try it: a hygiene checklist for one corpus",
        "Jaribu: orodha ya usafi kwa hazina moja",
        `For one subject this term, write:

- The exact files in the pile, with edition and date.
- What is forbidden (live tests, named scripts, last year's set book).
- How sessions end on shared lab machines.
- Who samples ten logs each Friday.
- Who reviews any quiz the tutor drafts before it is printed.

If you cannot name the people, you do not yet have a grounded tutor. You have a chatbot in a folder.`,
        `Kwa somo moja muhula huu, andika:

- Faili halisi kwenye rundo, na toleo na tarehe.
- Kilichokatazwa (majaribio hai, kazi zenye majina, kitabu teule cha mwaka jana).
- Jinsi vipindi vinavyoisha kwenye kompyuta zinazoshirikiwa.
- Nani anachukua sampuli ya kumbukumbu kumi kila Ijumaa.
- Nani anakagua jaribio lolote mkufunzi analoandaa kabla halijachapishwa.

Usiweze kuwataja watu, bado huna mkufunzi mwenye msingi. Una chatbot kwenye folda.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Version the corpus, isolate sessions, never index live assessment, sample logs.
- Next unit: learning analytics and consent — logs are personal data.`,
        `- Weka matoleo ya hazina, tenganisha vipindi, usiweke tathmini hai kwenye faharasa, chukua sampuli ya kumbukumbu.
- Kitengo kijacho: uchambuzi wa kujifunza na idhini — kumbukumbu ni data binafsi.`
      ),
    ],
  },
  {
    id: "edu-a-u3",
    titleEn: "Learning analytics and consent",
    titleSw: "Uchambuzi wa kujifunza na idhini",
    cards: [
      note(
        "Inferred scores are new data uses, not a free extra on the same login",
        "Alama zilizokisiwa ni matumizi mapya ya data, si nyongeza ya bure kwenye kuingia kule",
        `Learning analytics turn traces — clicks, time, answers, sometimes keystrokes — into claims: this child is struggling, this child is not trying, this class is behind. Those claims are personal data under the Data Protection Act, 2019, even when they are labelled "insights".

Consent and fairness here are not a tick on a vendor form. They are:

- A purpose you can say in one sentence to a parent ("to group tomorrow's lesson", not "to rank character").
- A lawful basis the school's data person can defend.
- A dashboard audience: teacher, not the class WhatsApp, not a public parent leaderboard.
- A right to an explanation that does not require a statistics degree.
- A way to learn if you say no to the extra analytics — the paper path still exists.

UNESCO's 2023 guidance puts data protection next to pedagogy on purpose. A tutor log that improves chunk size is one purpose. A vendor model trained on children's Kiswahili insha is another. Switching the second on inside the first is purpose creep.

Children cannot meaningfully consent to a fingerprint or a face scan in a queue. Do not store biometrics in unvetted apps. Do not hide new analytics inside a fees login.`,
        `Uchambuzi wa kujifunza hugeuza athari — bonyezo, muda, majibu, wakati mwingine keystrokes — kuwa madai: mtoto huyu anatatizika, huyu hajitahidi, darasa hili limebaki nyuma. Madai hayo ni data binafsi chini ya Sheria ya Ulinzi wa Data, 2019, hata yakiitwa "maelezo".

Idhini na haki hapa si alama kwenye fomu ya muuzaji. Ni:

- Madhumuni unayoweza kusema kwa sentensi moja kwa mzazi ("kupanga somo la kesho", si "kupanga tabia").
- Msingi halali ambao mtu wa data wa shule anaweza kutetea.
- Hadhira ya dashibodi: mwalimu, si WhatsApp ya darasa, si jedwali la hadhara la wazazi.
- Haki ya maelezo yasiyohitaji shahada ya takwimu.
- Njia ya kujifunza ukisema hapana kwa uchambuzi wa ziada — njia ya karatasi bado ipo.

Mwongozo wa UNESCO wa 2023 unaweka ulinzi wa data kando ya ufundishaji kwa makusudi. Kumbukumbu ya mkufunzi inayoboresha ukubwa wa kipande ni madhumuni moja. Modeli ya muuzaji iliyofunzwa kwa insha za Kiswahili za watoto ni mengine. Kuwasha ya pili ndani ya ya kwanza ni mchepuko wa madhumuni.

Watoto hawawezi kutoa idhini yenye maana kwa kidole au skani ya uso kwenye foleni. Usihifadhi data ya kibayometriki kwenye programu ambazo hazijakaguliwa. Usifiche uchambuzi mpya ndani ya kuingia kwa karo.`
      ),
      reveal([
        {
          termEn: "Trace",
          termSw: "Athari (trace)",
          defEn: "A recorded click, time, answer or keystroke. Harmless until it is stored and labelled.",
          defSw: "Bonyezo, muda, jibu au keystroke iliyorekodiwa. Haina madhara hadi inapohifadhiwa na kuwekwa lebo.",
        },
        {
          termEn: "Inferred metric",
          termSw: "Kipimo kilichokisiwa",
          defEn: "A score the system invented, such as 'effort', not a mark a teacher awarded.",
          defSw: "Alama mfumo uliyoibuni, kama 'juhudi', si alama mwalimu aliyotoa.",
        },
        {
          termEn: "Purpose creep",
          termSw: "Mchepuko wa madhumuni",
          defEn: "Using data collected for one job for a new job nobody explained.",
          defSw: "Kutumia data iliyokusanywa kwa kazi moja kwa kazi mpya ambayo hakuna aliyeieleza.",
        },
        {
          termEn: "Meaningful consent",
          termSw: "Idhini yenye maana",
          defEn: "A real choice, in plain language, that does not block ordinary learning if declined.",
          defSw: "Chaguo halisi, kwa lugha rahisi, ambalo halizuii kujifunza kwa kawaida likikataliwa.",
        },
      ]),
      note(
        "Worked example: the 'effort' column that appeared in June",
        "Mfano wa kazi: safu ya 'juhudi' iliyoonekana Juni",
        `A secondary school already had an approved homework app. In June the vendor enabled "effort scores" from time-on-task and late-fee flags, shown to all parents in a class view. No new letter. One child whose parent shares a phone with night-shift work scores "low effort". The class group discusses it.

The data person treats this as a new purpose: stop the column, write to parents, ask whether traces trained a model, and put any later analytics behind a teacher-only view with a minimum group size (next unit). Fees data returns to fees.

The Board learns that "the app we already paid for" is not a blank cheque for new inferences.`,
        `Shule ya upili tayari ilikuwa na programu ya kazi ya nyumbani iliyoidhinishwa. Juni muuzaji aliwezesha "alama za juhudi" kutoka muda wa kazi na bendera za karo zilizochelewa, zikionyesha wazazi wote katika mwonekano wa darasa. Hakuna barua mpya. Mtoto mmoja ambaye mzazi anashiriki simu na kazi ya zamu ya usiku anapata "juhudi ndogo". Kundi la darasa linaizungumzia.

Mtu wa data anachukulia hili kama madhumuni mapya: simamisha safu, andika kwa wazazi, uliza kama athari zilifunza modeli, na weka uchambuzi wowote wa baadaye nyuma ya mwonekano wa mwalimu tu wenye ukubwa wa chini wa kikundi (kitengo kijacho). Data ya karo inarudi kwa karo.

Bodi inajifunza kwamba "programu tuliyokwisha lipia" si hundi tupu ya makisio mapya.`
      ),
      scenario({
        titleEn: "Scenario: the dashboards parents see",
        titleSw: "Hali: dashibodi ambazo wazazi wanaona",
        situationEn:
          "Your school app shows parents an AI 'effort score' per child, derived from keystrokes and time-on-task. Some parents compare scores publicly; one child is humiliated.",
        situationSw:
          "Programu ya shule inaonyesha wazazi 'alama ya juhudi' ya AI kwa kila mtoto, inayokokotwa kutoka bonyezo na muda wa kazi. Baadhi ya wazazi wanalinganisha alama hadharani; mtoto mmoja anadhalilishwa.",
        questionEn: "What went wrong in the design?",
        questionSw: "Kilifanyaje vibaya kwenye usanifu?",
        optionsEn: [
          "Parents should not have phones",
          "A proxy score was exposed for social comparison without consent design, validity evidence, or harm review",
          "The AI was too accurate",
          "Nothing — data is just data",
        ],
        optionsSw: [
          "Wazazi hawapaswi kuwa na simu",
          "Alama ya mbadali ilifichuliwa kwa kulinganisha kijamii bila usanifu wa idhini, uthibitisho wa uhalali, au ukaguzi wa madhara",
          "AI ilikuwa sahihi mno",
          "Hakuna — data ni data tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "The harm came from what the school chose to expose, not from the devices.",
          "Correct. Derived metrics shown publicly need validity, consent and a harm review; most 'effort scores' lack all three.",
          "Accuracy is unrelated to whether the score should exist.",
          "Data always serves a purpose; that purpose is the design decision.",
        ],
        hintsSw: [
          "Madhara yalitoka kwa uamuzi wa shule kufichua, si vifaa.",
          "Sahihi. Vipimo vinavyotokana vinavyoonyeshwa hadharani vinahitaji uhalali, idhini na ukaguzi wa madhara; 'alama za juhudi' nyingi havina hivyo.",
          "Usahihi hauna uhusiano na kama alama inapaswa kuwepo.",
          "Data inahudumia lengo; lengo hilo ni uamuzi wa usanifu.",
        ],
        explainEn: "Learning analytics serve the learner first; visibility to others is a separate, consent-gated decision.",
        explainSw: "Uchambuzi wa kujifunza unahudumia mwanafunzi kwanza; kuonekana kwa wengine ni uamuzi tofauti, unaotegemea idhini.",
      }),
      quiz(
        "A vendor switches on keystroke analytics inside a fees app. This is:",
        "Muuzaji anawasha uchambuzi wa bonyezo ndani ya programu ya karo. Hii ni:",
        [
          "Covered by the original fees consent",
          "A new purpose that needs explanation, a lawful basis, and a way to learn without it",
          "Required by UNESCO 2024",
          "Fine if the column is called 'insights'",
        ],
        [
          "Imefunikwa na idhini ya awali ya karo",
          "Madhumuni mapya yanayohitaji maelezo, msingi halali, na njia ya kujifunza bila hiyo",
          "Inahitajika na UNESCO 2024",
          "Sawa safu ikiitwa 'maelezo'",
        ],
        1,
        "New inferences are new uses. A label does not make a purpose lawful.",
        "Makisio mapya ni matumizi mapya. Lebo haifanyi madhumuni kuwa halali."
      ),
      pb({
        titleEn: "Build a privacy-preserving analytics prompt",
        titleSw: "Jenga maagizo ya uchambuzi yanayolinda faragha",
        introEn:
          "You want pattern-level teaching advice without exposing children. Force aggregation.",
        introSw:
          "Unataka ushauri wa kufundisha wa kiwango cha mifumo bila kufichua watoto. Lazimisha ujumuishaji.",
        goalEn: "Aggregated-only output, minimum group size, no names, no effort scores.",
        goalSw: "Matokeo ya jumla tu, ukubwa wa chini wa kikundi, hakuna majina, hakuna alama za juhudi.",
        blocksEn: [
          "Input: anonymised topic scores by week, no names, no admission numbers",
          "Output: two teaching adjustments per weak topic only",
          "Rule: any group smaller than 5 is merged into 'other'; never rank individuals",
          "Do not invent effort, character or parenting scores",
          "List the five weakest learners by name for the principal",
        ],
        blocksSw: [
          "Ingizo: alama za mada zisizo na majina kwa wiki, bila majina, bila namba za kujiunga",
          "Matokeo: marekebisho mawili ya kufundisha kwa kila mada dhaifu tu",
          "Kanuni: kikundi chini ya 5 kiunganishwe na 'wengine'; usiwahi kupanga watu",
          "Usibuni alama za juhudi, tabia au malezi",
          "Orodhesha wanafunzi watano dhaifu kwa jina kwa mkuu",
        ],
        required: [0, 1, 2, 3],
        sampleEn:
          "Input: anonymised topic scores by week, no names, no admission numbers. Output: two teaching adjustments per weak topic only. Rule: any group smaller than 5 is merged into 'other'; never rank individuals. Do not invent effort, character or parenting scores.",
        sampleSw:
          "Ingizo: alama za mada zisizo na majina kwa wiki, bila majina, bila namba za kujiunga. Matokeo: marekebisho mawili ya kufundisha kwa kila mada dhaifu tu. Kanuni: kikundi chini ya 5 kiunganishwe na 'wengine'; usiwahi kupanga watu. Usibuni alama za juhudi, tabia au malezi.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Inferences are new data uses. Explain them. Keep a paper path if declined.
- Next unit: analytics that do not rank children in public.`,
        `- Makisio ni matumizi mapya ya data. Yaeleze. Bakiza njia ya karatasi yakikataliwa.
- Kitengo kijacho: uchambuzi usiowapanga watoto hadharani.`
      ),
    ],
  },
  {
    id: "edu-a-u4",
    titleEn: "Analytics that do not rank children",
    titleSw: "Uchambuzi usiowapanga watoto",
    cards: [
      note(
        "A teaching dashboard is not a public league table",
        "Dashibodi ya kufundisha si jedwali la ligi la hadhara",
        `Even with consent, a design can still harm. Ranking children by an inferred 'effort' or 'ability' score invites comparison, stigma and gaming. In a crowded Kenyan class, a projector that shows the bottom five names is a public shaming machine.

Safer defaults:

- Show topics, not children, until a teacher drills in on their own device.
- Minimum group size of five before a cell is displayed; smaller groups merge to 'other'.
- No public parent view of anything except their own child, and even then inferred metrics stay off unless validity is documented.
- Teachers already have marks they awarded. Analytics should suggest the next lesson, not a character judgement.

Validity is the adult word for 'does this number mean what the label says?' Time-on-task on a shared family phone does not mean effort. A low score on an English-only adaptive app may mean language, not fractions (intermediate unit 1).

If you cannot defend the metric in a parents' meeting without humiliating a child, do not build the column.`,
        `Hata idhini ikiwepo, usanifu bado unaweza kudhuru. Kupanga watoto kwa alama iliyokisiwa ya 'juhudi' au 'uwezo' kunakaribisha kulinganisha, unyanyapaa na mchezo. Katika darasa la Kenya lenye msongamano, projekta inayoonyesha majina matano ya chini ni mashine ya kuaibisha hadharani.

Chaguo-msingi salama:

- Onyesha mada, si watoto, hadi mwalimu ashuke kwenye kifaa chake.
- Ukubwa wa chini wa kikundi wa watano kabla seli haijaonyeshwa; vikundi vidogo viungane na 'wengine'.
- Hakuna mwonekano wa hadhara wa mzazi wa chochote isipokuwa mtoto wao, na hata hivyo vipimo vilivyokisiwa visikae isipokuwa uhalali umeandikwa.
- Walimu tayari wana alama walizotoa. Uchambuzi unapaswa kupendekeza somo lijalo, si hukumu ya tabia.

Uhalali ni neno la watu wazima la 'namba hii inamaanisha kile lebo inasema?' Muda wa kazi kwenye simu ya familia inayoshirikiwa haimaanishi juhudi. Alama ya chini kwenye programu inayojirekebisha ya Kiingereza tu inaweza kuwa lugha, si sehemu (somo la 1 la kati).

Usiweze kutetea kipimo katika mkutano wa wazazi bila kumdhalilisha mtoto, usijenge safu.`
      ),
      reveal([
        {
          termEn: "Minimum group size",
          termSw: "Ukubwa wa chini wa kikundi",
          defEn: "Do not display a statistic for fewer than about five learners.",
          defSw: "Usionyeshe takwimu kwa wanafunzi pungufu ya takriban watano.",
        },
        {
          termEn: "Topic view",
          termSw: "Mwonekano wa mada",
          defEn: "The default screen: which ideas the class needs, not who is bottom.",
          defSw: "Skrini msingi: ni mawazo gani darasa linahitaji, si nani yuko chini.",
        },
        {
          termEn: "Validity",
          termSw: "Uhalali (validity)",
          defEn: "Evidence that the number measures the thing the label claims, here, in this school.",
          defSw: "Ushahidi kwamba namba inapima kile lebo inadai, hapa, katika shule hii.",
        },
        {
          termEn: "Public ranking",
          termSw: "Upangaji wa hadhara",
          defEn: "Names or identifiable scores shown to the class, the parade, or a parent group.",
          defSw: "Majina au alama zinazotambulika zinazoonyeshwa darasani, gwarideni, au kundi la wazazi.",
        },
      ]),
      note(
        "Worked example: projector on, names off",
        "Mfano wa kazi: projekta washa, majina zima",
        `Ms Njeri projects Friday analytics for Grade 7 mathematics. The vendor default is a leaderboard. She switches to topic view: equivalent fractions 38% of the class still missing; decimals stronger. She plans Monday's starter accordingly. She does not show the six names inside the 38%. She looks at those six on her phone after class, privately, because two share a tablet at home and the model may be tracking the wrong child (intermediate unit 1).

Parents receive their own child's teacher-awarded marks, not an effort bar. The Board had asked for 'healthy competition'. She showed them a mock-up of a named leaderboard and asked who would volunteer their child for the bottom row. The request died.

That is governance as design, not as a speech.`,
        `Bi. Njeri anaonyesha uchambuzi wa Ijumaa wa hisabati ya Gredi ya 7. Chaguo-msingi la muuzaji ni jedwali la ligi. Anabadilisha mwonekano wa mada: sehemu sawa 38% ya darasa bado linakosa; desimali ni imara zaidi. Anapanga kianzishaji cha Jumatatu. Haonyeshi majina sita ndani ya 38%. Anayatazama sita kwenye simu yake baada ya darasa, faragha, kwa sababu wawili wanashiriki kishikwambi nyumbani na modeli huenda inafuatilia mtoto asiyefaa (somo la 1 la kati).

Wazazi hupokea alama za mtoto wao alizotoa mwalimu, si upau wa juhudi. Bodi ilikuwa imeomba 'ushindani wenye afya'. Aliwaonyesha mfano wa jedwali la ligi lenye majina na akauliza nani angejitolea mtoto wao kwa safu ya chini. Ombi lilikufa.

Huo ni utawala kama usanifu, si kama hotuba.`
      ),
      scenario({
        titleEn: "Scenario: parade-ground ranking",
        titleSw: "Hali: upangaji wa gwaride",
        situationEn:
          "A deputy wants the weekly AI 'most improved' and 'least effort' names read at assembly 'for motivation'.",
        situationSw:
          "Naibu anataka majina ya kila wiki ya AI 'aliyeimarika zaidi' na 'juhudi ndogo' yasomwe gwarideni 'kwa motisha'.",
        questionEn: "Your advice?",
        questionSw: "Ushauri wako?",
        optionsEn: [
          "Agree; public shame builds grit",
          "Refuse. Motivation that needs a named bottom row is harm. Keep analytics in teacher topic views",
          "Agree for boarding only",
          "Agree if UNESCO logos are on the banner",
        ],
        optionsSw: [
          "Kubali; aibu ya hadhara inajenga uvumilivu",
          "Kataa. Motisha inayohitaji safu ya chini yenye majina ni madhara. Bakiza uchambuzi katika mwonekano wa mada wa mwalimu",
          "Kubali kwa bweni tu",
          "Kubali nembo za UNESCO zikiwa kwenye bango",
        ],
        correctIndex: 1,
        hintsEn: [
          "Assembly is not a lab. Named inferred scores are humiliation with a soundtrack.",
          "Correct. Teach with topic views. Do not parade children.",
          "Boarding children still have dignity.",
          "Logos do not license harm.",
        ],
        hintsSw: [
          "Gwaride si maabara. Alama zilizokisiwa zenye majina ni dhalilisho lenye sauti.",
          "Sahihi. Fundisha kwa mwonekano wa mada. Usiwaonyeshe watoto gwarideni.",
          "Watoto wa bweni bado wana heshima.",
          "Nembo haziruhusu madhara.",
        ],
        explainEn: "If the metric cannot be shown without naming a child in public, drop the metric.",
        explainSw: "Kipimo kisionyesheke bila kumtaja mtoto hadharani, acha kipimo.",
      }),
      quiz(
        "Time-on-task on a shared family phone is a weak effort metric because:",
        "Muda wa kazi kwenye simu ya familia inayoshirikiwa ni kipimo dhaifu cha juhudi kwa sababu:",
        [
          "Phones cannot record time",
          "The trace may belong to another person, another task, or waiting for data, not to this learner's trying",
          "UNESCO forbids all timing",
          "Only boarding schools have real effort",
        ],
        [
          "Simu haziwezi kurekodi muda",
          "Athari huenda ni ya mtu mwingine, kazi nyingine, au kusubiri data, si ya kujitahidi kwa mwanafunzi huyu",
          "UNESCO inakataza kupima muda wowote",
          "Shule za bweni tu zina juhudi halisi",
        ],
        1,
        "Validity fails when the trace is not the child's attempt. Shared devices are normal. Do not moralise the number.",
        "Uhalali unashindwa athari isipokuwa jaribio la mtoto. Vifaa vinavyoshirikiwa ni vya kawaida. Usiifanye namba kuwa ya maadili."
      ),
      note(
        "Try it: redesign one default screen",
        "Jaribu: buni upya skrini moja msingi",
        `Open any analytics demo you have, or sketch one.

- Circle every name or identifiable rank.
- Replace them with a topic view and a rule: groups under five hide.
- Write one sentence you would say to a parent about what the remaining numbers mean — and what they do not.

If you cannot write that sentence, switch the product off.`,
        `Fungua onyesho lolote la uchambuzi ulilo nalo, au chora.

- Zungushia kila jina au nafasi inayotambulika.
- Badilisha na mwonekano wa mada na kanuni: vikundi chini ya tano vifiche.
- Andika sentensi moja ungesema kwa mzazi kuhusu namba zilizobaki zinamaanisha nini — na hazimaanishi nini.

Usiweze kuiandika sentensi hiyo, zima bidhaa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Topic views, minimum groups, no public inferred ranks.
- Next unit: teaching teachers through Mkabala wa TPACK, not tool demos.`,
        `- Mwonekano wa mada, vikundi vya chini, hakuna nafasi za hadhara zilizokisiwa.
- Kitengo kijacho: kufundisha walimu kupitia Mkabala wa TPACK, si maonyesho ya zana.`
      ),
    ],
  },
  {
    id: "edu-a-u5",
    titleEn: "Teaching teachers: Mkabala wa TPACK",
    titleSw: "Kufundisha walimu: Mkabala wa TPACK",
    cards: [
      note(
        "Technology without pedagogy and content is a demo, not TPD",
        "Teknolojia bila ufundishaji na maudhui ni onyesho, si TPD",
        `TPACK is the knowledge that sits where three circles overlap: technology, pedagogy, and content. In Kiswahili that planning stance is Mkabala wa TPACK — not "Mwanga wa TPACK". The light metaphor misleads. This is an approach to planning, not a glow around a gadget.

A TPD hour that only shows prompts is T without P and C. Teachers leave able to open a chatbot and unable to decide whether this CBC outcome, in this crowded class, with these devices, should use it.

Mkabala wa TPACK asks three questions on one lesson plan:

- Content: which strand, which misconception, which page?
- Pedagogy: retrieval practice, explanation, error hunt, oral check? Who talks?
- Technology: does this tool serve those two, on the devices we actually have, with review time on the timetable?

UNESCO's 2024 teacher AI competency framework is the same spine: human-centred stance, ethics, enough technical sense, pedagogy, and professional learning. Understand, apply, create — not a weekend badge.

If your county TPD still looks like a vendor open day, rewrite the hour using intermediate unit 11's pattern: check a quiz key, write one student habit, refuse one unsafe use.`,
        `TPACK ni maarifa yaliyo kwenye mwingiliano wa duara tatu: teknolojia, ufundishaji, na maudhui. Kwa Kiswahili msimamo huo wa kupanga ni Mkabala wa TPACK — si "Mwanga wa TPACK". Fumbo la mwanga linapotosha. Huu ni mkabala wa kupanga, si mwanga kuzunguka kifaa.

Saa ya TPD inayoonyesha maagizo tu ni T bila P na C. Walimu wanaondoka wakiweza kufungua chatbot na hawawezi kuamua kama matokeo haya ya CBC, katika darasa hili lenye msongamano, kwa vifaa hivi, yanapaswa kuitumia.

Mkabala wa TPACK unauliza maswali matatu kwenye mpango mmoja wa somo:

- Maudhui: strandi ipi, dhana potofu ipi, ukurasa upi?
- Ufundishaji: mazoezi ya kukumbuka, maelezo, uwindaji wa makosa, ukaguzi wa mdomo? Nani anaongea?
- Teknolojia: je zana hii inahudumia hayo mawili, kwenye vifaa tulivyo navyo, na muda wa ukaguzi ukiwa ratibani?

Mfumo wa UNESCO wa 2024 wa umahiri wa AI wa walimu ni uti uleule: msimamo unaomlenga binadamu, maadili, uelewa wa kutosha wa kiufundi, ufundishaji, na kujifunza kitaaluma. Elewa, tumia, buni — si beji ya wikendi.

TPD ya kaunti yako bado ikionekana kama siku ya wazi ya muuzaji, andika saa upya ukitumia mtindo wa somo la 11 la kati: kagua ufunguo wa jaribio, andika tabia moja ya mwanafunzi, kataa matumizi moja yasiyo salama.`
      ),
      reveal([
        {
          termEn: "Mkabala wa TPACK",
          termSw: "Mkabala wa TPACK",
          defEn: "The planning approach at the overlap of technology, pedagogy and content. Not 'Mwanga wa TPACK'.",
          defSw: "Mkabala wa kupanga kwenye mwingiliano wa teknolojia, ufundishaji na maudhui. Si 'Mwanga wa TPACK'.",
        },
        {
          termEn: "Content knowledge",
          termSw: "Maarifa ya maudhui",
          defEn: "The CBC strand, the textbook page, the likely mistake.",
          defSw: "Strandi ya CBC, ukurasa wa kitabu cha kiada, kosa linaloweza kutokea.",
        },
        {
          termEn: "Pedagogical knowledge",
          termSw: "Maarifa ya ufundishaji",
          defEn: "How this class will think: retrieve, discuss, practise, be checked.",
          defSw: "Jinsi darasa hili litakavyofikiri: kukumbuka, kujadili, kufanya mazoezi, kukaguliwa.",
        },
        {
          termEn: "Technological knowledge",
          termSw: "Maarifa ya teknolojia",
          defEn: "What the tool can and cannot do here, including review load and device limits.",
          defSw: "Zana inachoweza na isichoweza hapa, pamoja na mzigo wa ukaguzi na mipaka ya vifaa.",
        },
      ]),
      note(
        "Worked example: the same chatbot, two TPD hours",
        "Mfano wa kazi: chatbot ileile, saa mbili za TPD",
        `Hour A, vendor-led: teachers type 'make a quiz'. They photograph the screen. No key check. Certificates issued. Next Monday, three wrong keys reach 200 learners.

Hour B, Mkabala wa TPACK: teachers bring the strand and the page first (C). They decide the pedagogy — error hunt plus oral check (P). Only then they draft with AI and spend twenty minutes pairing on keys (T in service of P and C). They also write the paper path for learners without phones.

Hour B produces fewer quizzes and safer ones. TSC-style professional learning is Hour B. Hour A is a demo with chairs.`,
        `Saa A, inayoongozwa na muuzaji: walimu wanaandika 'tengeneza jaribio'. Wanapiga picha skrini. Hakuna ukaguzi wa ufunguo. Vyeti vinatolewa. Jumatatu inayofuata, funguo tatu zisizo sahihi zinafikia wanafunzi 200.

Saa B, Mkabala wa TPACK: walimu huleta strandi na ukurasa kwanza (C). Wanaamua ufundishaji — uwindaji wa makosa pamoja na ukaguzi wa mdomo (P). Ndipo tu wanaandaa kwa AI na kutumia dakika ishirini kuoanisha funguo (T ikihudumia P na C). Pia wanaandika njia ya karatasi kwa wasio na simu.

Saa B inazalisha majaribio machache na salama zaidi. Kujifunza kitaaluma kwa mtindo wa TSC ni Saa B. Saa A ni onyesho lenye viti.`
      ),
      scenario({
        titleEn: "Scenario: the staff-room split",
        titleSw: "Hali: mgawanyiko kwenye chumba cha walimu",
        situationEn:
          "Half your colleagues ban AI outright; half allow everything. Both camps cite 'the rules' — which do not exist. You lead the next TPD meeting.",
        situationSw:
          "Nusu ya wenzako wanakataza AI kabisa; nusu inaruhusu yote. Makundi yote yanataja 'kanuni' — zisizoko. Unaoongoza mkutano ujao wa TPD.",
        questionEn: "The most productive proposal is:",
        questionSw: "Pendekezo lenye matokeo zaidi ni:",
        optionsEn: [
          "Keep arguing until one side wins",
          "Run one Mkabala wa TPACK hour: one strand, one pedagogy, one reviewed AI draft, plus a one-page policy of permitted uses and disclosure",
          "Leave it to each teacher forever",
          "Adopt the strictest ban to be safe",
        ],
        optionsSw: [
          "Endelea kubishana mpaka upande mmoja ushinde",
          "Endesha saa moja ya Mkabala wa TPACK: strandi moja, ufundishaji mmoja, rasimu moja ya AI iliyokaguliwa, pamoja na sera ya ukurasa mmoja ya matumizi yanayoruhusiwa na kueleza wazi",
          "Iache kila mwalimu milele",
          "Pitisha marufuku kali zaidi kwa usalama",
        ],
        correctIndex: 1,
        hintsEn: [
          "Argument without artefacts repeats every term.",
          "Correct. Practice plus a short policy beats both extremes.",
          "Per-teacher chaos confuses learners.",
          "A maximal ban drives use out of sight.",
        ],
        hintsSw: [
          "Bila vitu halisi, mzozo unarudi kila muhula.",
          "Sahihi. Mazoezi pamoja na sera fupi vinashinda pande zote mbili.",
          "Vurugu ya kila mwalimu inachanganya wanafunzi.",
          "Marufuku kamili inasukuma matumizi gizani.",
        ],
        explainEn: "Mkabala wa TPACK turns a fight about tools into a plan for one lesson.",
        explainSw: "Mkabala wa TPACK hugeuza mzozo wa zana kuwa mpango wa somo moja.",
      }),
      quiz(
        "Why is 'Mwanga wa TPACK' the wrong Kiswahili for this work?",
        "Kwa nini 'Mwanga wa TPACK' ni Kiswahili kisicho sahihi kwa kazi hii?",
        [
          "Because TPACK cannot be discussed in Kiswahili",
          "Because TPACK is an approach to planning (mkabala), not a light (mwanga) around a device",
          "Because UNESCO forbids Kiswahili terms",
          "Because mwanga is a vendor trademark",
        ],
        [
          "Kwa sababu TPACK haiwezi kujadiliwa kwa Kiswahili",
          "Kwa sababu TPACK ni mkabala wa kupanga, si mwanga kuzunguka kifaa",
          "Kwa sababu UNESCO inakataza maneno ya Kiswahili",
          "Kwa sababu mwanga ni alama ya biashara ya muuzaji",
        ],
        1,
        "Words teach. Calling it a light invites gadget worship. Calling it Mkabala wa TPACK invites a lesson plan.",
        "Maneno hufundisha. Kuiita mwanga kunakaribisha ibada ya kifaa. Kuiita Mkabala wa TPACK kunakaribisha mpango wa somo."
      ),
      note(
        "Try it: one lesson through three circles",
        "Jaribu: somo moja kupitia duara tatu",
        `Pick tomorrow's lesson.

- Write the content in one line (strand, page, likely mistake).
- Write the pedagogy in one line (who thinks, how you will check).
- Write the technology in one line, or write 'none'.
- If technology is present, write the review minutes and the paper path.

Bring this to the policy unit. TPD that cannot fill the three lines is still a demo.`,
        `Chagua somo la kesho.

- Andika maudhui kwa mstari mmoja (strandi, ukurasa, kosa linalowezekana).
- Andika ufundishaji kwa mstari mmoja (nani anafikiri, utakavyokagua).
- Andika teknolojia kwa mstari mmoja, au andika 'hakuna'.
- Teknolojia ikiwepo, andika dakika za ukaguzi na njia ya karatasi.

Leta hii kwenye kitengo cha sera. TPD isiyoweza kujaza mistari mitatu bado ni onyesho.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Say Mkabala wa TPACK. Plan C and P before T.
- Next unit: specifying a school AI policy that a Board can adopt.`,
        `- Sema Mkabala wa TPACK. Panga C na P kabla ya T.
- Kitengo kijacho: kubainisha sera ya AI ya shule ambayo Bodi inaweza kuipitisha.`
      ),
    ],
  },
  {
    id: "edu-a-u6",
    titleEn: "UNESCO AI competency frameworks",
    titleSw: "Mifumo ya UNESCO ya umahiri wa AI",
    cards: [
      note(
        "Institutional adoption without turning a framework into a vendor syllabus",
        "Kupitisha kitaasisi bila kugeuza mfumo kuwa mtaala wa muuzaji",
        `The 2023 UNESCO guidance on generative AI in education is the duty list: human agency, data protection, integrity of assessment, equity of access, age-appropriate use, institutional policy.

The 2024 teacher and student AI competency frameworks add a progression: understand, apply, create — on a spine of human-centred mindset and ethics, then technique, then (for teachers) pedagogy and professional learning, and (for students, later) some sense of system design.

Your job at advanced level is not to reprint the diagrams. It is to map them onto CBC schemes, TSC TPD, and county calendars without selling a branded course.

A workable map:

- Students 8–10: understand that AI guesses; apply check-the-book and privacy (beginner units 1–5).
- Students 11–13: apply disclosure and Kiswahili caution.
- Students 14–17: create honest study routines that will survive KCSE.
- Teachers: apply review of every AI quiz; create one paper-path lesson per strand; refuse one unsafe vendor feature per term.

If a consultant says the school is 'UNESCO-aligned' because logos are on a wall, ask for the mapped scheme and one reviewed artefact. Frameworks describe judgement. They do not name a chatbot.`,
        `Mwongozo wa UNESCO wa 2023 kuhusu AI generative katika elimu ndio orodha ya wajibu: uwezo wa binadamu kuamua, ulinzi wa data, uadilifu wa tathmini, usawa wa ufikiaji, matumizi yanayofaa umri, sera ya taasisi.

Mifumo ya 2024 ya umahiri wa AI wa walimu na wanafunzi inaongeza maendeleo: elewa, tumia, buni — kwenye uti wa mwelekeo unaomlenga binadamu na maadili, kisha mbinu, kisha (kwa walimu) ufundishaji na kujifunza kitaaluma, na (kwa wanafunzi, baadaye) uelewa wa usanifu wa mifumo.

Kazi yako katika ngazi ya juu si kuchapisha michoro upya. Ni kuyaweka kwenye mipango ya CBC, TPD ya TSC, na kalenda za kaunti bila kuuza kozi yenye chapa.

Ramani inayofanya kazi:

- Wanafunzi 8–10: elewa kwamba AI hukisia; tumia kagua-kitabu na faragha (masomo 1–5 ya mwanzoni).
- Wanafunzi 11–13: tumia kueleza wazi na tahadhari ya Kiswahili.
- Wanafunzi 14–17: buni taratibu za kusoma za uaminifu zitakazostahimili KCSE.
- Walimu: tumia ukaguzi wa kila jaribio la AI; buni somo moja la njia ya karatasi kwa strandi; kataa kipengele kimoja kisicho salama cha muuzaji kila muhula.

Mshauri akisema shule 'inalingana na UNESCO' kwa sababu nembo ziko ukutani, omba mpango uliowekwa ramani na kitu kimoja kilichokaguliwa. Mifumo inaeleza uamuzi. Haitaji chatbot.`
      ),
      reveal([
        {
          termEn: "Duty list (2023)",
          termSw: "Orodha ya wajibu (2023)",
          defEn: "Human in charge, data, integrity, equity, age, written policy.",
          defSw: "Binadamu msimamizi, data, uadilifu, usawa, umri, sera ya maandishi.",
        },
        {
          termEn: "Progression (2024)",
          termSw: "Maendeleo (2024)",
          defEn: "Understand, apply, create — judgement that grows with age and role.",
          defSw: "Elewa, tumia, buni — uamuzi unaokua na umri na wajibu.",
        },
        {
          termEn: "Mapped scheme",
          termSw: "Mpango uliowekwa ramani",
          defEn: "Framework lines written onto existing CBC and TPD documents, with owners.",
          defSw: "Mistari ya mfumo iliyoandikwa kwenye nyaraka zilizopo za CBC na TPD, yenye wamiliki.",
        },
        {
          termEn: "Logo alignment",
          termSw: "Ulinganifu wa nembo",
          defEn: "Decorating a wall with UNESCO marks instead of changing a printer queue. Reject this.",
          defSw: "Kupamba ukuta kwa alama za UNESCO badala ya kubadilisha foleni ya printa. Kataa hivi.",
        },
      ]),
      note(
        "Worked example: a county calendar, not a new subject",
        "Mfumo wa kazi: kalenda ya kaunti, si somo jipya",
        `A county director refuses a proposal to timetable 'UNESCO AI' as a weekly subject in Grade 6. Instead, each existing subject scheme adds one student line this year, and each TPD Thursday in the term has one Mkabala wa TPACK hour. Quality assurance samples one signed quiz key per school per month.

Cost: no new subject, no new exam, no vendor curriculum. Effect: the 2023 duties show up in printer queues and in KCSE-season rules. That is adoption.`,
        `Mkurugenzi wa kaunti anakataa pendekezo la kuweka 'UNESCO AI' kama somo la kila wiki Gredi ya 6. Badala yake, kila mpango wa somo uliopo unaongeza mstari mmoja wa mwanafunzi mwaka huu, na kila Alhamisi ya TPD katika muhula ina saa moja ya Mkabala wa TPACK. Uhakikisho wa ubora unachukua sampuli ya ufunguo mmoja uliotiwa saini kwa kila shule kwa mwezi.

Gharama: hakuna somo jipya, hakuna mtihani mpya, hakuna mtaala wa muuzaji. Athari: wajibu wa 2023 unaonekana kwenye foleni za printa na kwenye kanuni za msimu wa KCSE. Huko ndiko kupitisha.`
      ),
      scenario({
        titleEn: "Scenario: 'aligned' because the consultant said so",
        titleSw: "Hali: 'imefanana' kwa sababu mshauri alisema",
        situationEn:
          "A consultant offers a paid stamp: 'UNESCO AI School' in 30 days, mostly posters and a branded chatbot, no mapping to CBC, no data-protection work.",
        situationSw:
          "Mshauri anatoa muhuri wa kulipia: 'Shule ya AI ya UNESCO' kwa siku 30, zaidi mabango na chatbot yenye chapa, bila ramani ya CBC, bila kazi ya ulinzi wa data.",
        questionEn: "What do you buy instead?",
        questionSw: "Unanunua nini badala yake?",
        optionsEn: [
          "The stamp; parents like certificates",
          "Nothing branded. Pay, if at all, for facilitation of mapped schemes, TPD using Mkabala wa TPACK, and a data-protection review",
          "The chatbot only",
          "Posters in Kiswahili only, to localise",
        ],
        optionsSw: [
          "Muhuri; wazazi wanapenda vyeti",
          "Hakuna chenye chapa. Lipa, kama kwote, uwezeshaji wa mipango iliyowekwa ramani, TPD ya Mkabala wa TPACK, na ukaguzi wa ulinzi wa data",
          "Chatbot tu",
          "Mabango kwa Kiswahili tu, ili kuweka eneo",
        ],
        correctIndex: 1,
        hintsEn: [
          "A stamp is marketing. UNESCO documents are public and do not sell seals to schools.",
          "Correct. Buy the work: mapping, TPD, data. Not a label.",
          "A chatbot without mapping is unit 1 without unit 5.",
          "Language of a poster does not localise a framework.",
        ],
        hintsSw: [
          "Muhuri ni masoko. Nyaraka za UNESCO ni za umma na haziuzi mihuri kwa shule.",
          "Sahihi. Nunua kazi: ramani, TPD, data. Si lebo.",
          "Chatbot bila ramani ni somo la 1 bila somo la 5.",
          "Lugha ya bango haiweki mfumo kwenye eneo.",
        ],
        explainEn: "Alignment is mapped practice. It is not a purchased adjective.",
        explainSw: "Ulinganifu ni mazoezi yaliyowekwa ramani. Si kivumishi kilichonunuliwa.",
      }),
      quiz(
        "The 2024 student framework at ages 8–10 is mainly:",
        "Mfumo wa mwanafunzi wa 2024 katika umri wa 8–10 ni hasa:",
        [
          "Building production AI systems",
          "Human-centred habits: guessing, checking, honesty, privacy, with an adult nearby",
          "Passing a detector test",
          "Memorising UNESCO article numbers",
        ],
        [
          "Kujenga mifumo ya AI ya uzalishaji",
          "Tabia zinazomlenga binadamu: kukisia, kukagua, uaminifu, faragha, mtu mzima akiwa karibu",
          "Kupita jaribio la kichunguzi",
          "Kukariri namba za vifungu vya UNESCO",
        ],
        1,
        "Create-level system design is later. Early years are understand and apply, with a person in the room.",
        "Usanifu wa mifumo wa ngazi ya kubuni ni baadaye. Miaka ya mapema ni elewa na tumia, mtu akiwa chumbani."
      ),
      note(
        "Try it: map four lines onto this term",
        "Jaribu: weka mistari minne kwenye muhula huu",
        `On one page: one 2023 duty, one teacher 2024 apply, one student 2024 apply, one owner (name).

- If the owner is 'the ICT intern', rewrite. Interns leave.
- Attach the page to the policy draft in the next unit.`,
        `Kwenye ukurasa mmoja: wajibu mmoja wa 2023, tumia moja ya mwalimu ya 2024, tumia moja ya mwanafunzi ya 2024, mmiliki mmoja (jina).

- Mmiliki akiwa 'mwanafunzi wa TEHAMA', andika upya. Wanafunzi wa ndani wanaondoka.
- Ambatanisha ukurasa na rasimu ya sera katika kitengo kijacho.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Map frameworks onto CBC and TPD. Do not buy logos.
- Next unit: specifying a school AI policy a Board can vote on.`,
        `- Weka mifumo kwenye CBC na TPD. Usinunue nembo.
- Kitengo kijacho: kubainisha sera ya AI ya shule ambayo Bodi inaweza kupigia kura.`
      ),
    ],
  },
  {
    id: "edu-a-u7",
    titleEn: "Specifying a school AI policy",
    titleSw: "Kubainisha sera ya AI ya shule",
    cards: [
      note(
        "Roles, scope, assessment, data, equity, review cycle — in language a Board can vote",
        "Wajibu, wigo, tathmini, data, usawa, mzunguko wa ukaguzi — kwa lugha Bodi inayoweza kupigia kura",
        `Intermediate unit 10 drafted four usable pages. Specifying means those pages can survive a lawyer, a union, a parent, and an inspector without becoming 40 pages of another country's statute.

Specify:

- Scope: which schools, which ages, which tools (including 'any public chatbot').
- Roles: principal (accountable), data person (DPA 2019), HoDs (quiz review), teachers (marks), learners (disclosure).
- Assessment: teachers review all AI-made quizzes and marks; no auto-final; detectors not sole evidence; KCSE season assumes no AI in the room.
- Data: controller is the school; no biometrics in unvetted apps; no named scripts in public tools; new analytics are new purposes.
- Equity: paper path for every marked task; no homework that requires paid tools.
- Integrity: task-level permission printed on the sheet; disclosure lines; incident path same day.
- Review: last Friday of term, named, minuted.
- Procurement hook: no system without answers to unit 9's vendor questions.

Write it in English and Kiswahili. If a Form 2 learner cannot understand the learner page, it is not specified yet.`,
        `Somo la 10 la kati liliandaa kurasa nne zinazoweza kutumika. Kubainisha kunamaanisha kurasa hizo zinaweza kustahimili mwanasheria, chama, mzazi, na mkaguzi bila kuwa kurasa 40 za sheria ya nchi nyingine.

Bainisha:

- Wigo: shule zipi, umri upi, zana zipi (pamoja na 'chatbot yoyote ya hadhara').
- Wajibu: mkuu (anayewajibika), mtu wa data (Sheria ya 2019), wakuu wa idara (ukaguzi wa majaribio), walimu (alama), wanafunzi (kueleza wazi).
- Tathmini: walimu hukagua majaribio na alama zote zilizotengenezwa na AI; hakuna alama za mwisho za kiotomatiki; vichunguzi si ushahidi pekee; msimu wa KCSE huchukulia hakuna AI chumbani.
- Data: mdhibiti ni shule; hakuna kibayometriki kwenye programu ambazo hazijakaguliwa; hakuna kazi zenye majina kwenye zana za hadhara; uchambuzi mpya ni madhumuni mapya.
- Usawa: njia ya karatasi kwa kila kazi yenye alama; hakuna kazi ya nyumbani inayohitaji zana za kulipia.
- Uadilifu: ruhusa ya kila kazi iliyochapishwa kwenye karatasi; sentensi za kueleza wazi; njia ya tukio siku ileile.
- Ukaguzi: Ijumaa ya mwisho ya muhula, yenye jina, yenye kumbukumbu.
- Ncha ya ununuzi: hakuna mfumo bila majibu ya maswali ya muuzaji ya somo la 9.

Iandike kwa Kiingereza na Kiswahili. Mwanafunzi wa Kidato cha 2 asipoweza kuelewa ukurasa wa mwanafunzi, bado haijabainishwa.`
      ),
      reveal([
        {
          termEn: "Accountable role",
          termSw: "Wajibu wa kuwajibika",
          defEn: "A named office, usually the principal, that cannot be 'the intern'.",
          defSw: "Ofisi yenye jina, kwa kawaida mkuu, isiyoweza kuwa 'mwanafunzi wa ndani'.",
        },
        {
          termEn: "Task sheet line",
          termSw: "Mstari wa karatasi ya kazi",
          defEn: "Allowed AI uses printed on this assignment, not only in a handbook.",
          defSw: "Matumizi ya AI yanayoruhusiwa yaliyochapishwa kwenye kazi hii, si kwenye kitabu tu.",
        },
        {
          termEn: "KCSE season rule",
          termSw: "Kanuni ya msimu wa KCSE",
          defEn: "What changes in Term 3 for candidates: usually tighter bans in the exam room and on mocks.",
          defSw: "Kinachobadilika Muhula wa 3 kwa watahiniwa: kwa kawaida marufuku kali zaidi chumbani na kwenye mock.",
        },
        {
          termEn: "Procurement hook",
          termSw: "Ncha ya ununuzi",
          defEn: "A sentence that blocks buying a tool which fails the vendor questions.",
          defSw: "Sentensi inayozuia kununua zana inayoshindwa maswali ya muuzaji.",
        },
      ]),
      note(
        "Worked example: four pages that survived the Board",
        "Mfano wa kazi: kurasa nne zilizostahimili Bodi",
        `A mixed school in Kisumu tables four pages plus a half-page parent summary. A board member wants the overseas 30-page statute. The principal shows three local tasks the four pages already settle: a set-book essay, a maths homework, a lab report. The statute does not mention KNEC, crowded labs, or M-Pesa-shared phones.

They vote the four pages, with a termly review and a procurement hook. Legal counsel adds one sentence on the 2019 Act, not twenty. The learner page is read aloud in assembly in Kiswahili. That is specification.`,
        `Shule mchanganyiko Kisumu inawasilisha kurasa nne pamoja na muhtasari wa nusu ukurasa kwa wazazi. Mwanachama wa Bodi anataka sheria ya kurasa 30 ya nje. Mkuu anaonyesha kazi tatu za eneo ambazo kurasa nne tayari zinazimaliza: insha ya kitabu teule, kazi ya hisabati, ripoti ya maabara. Sheria haitaji KNEC, maabara zenye msongamano, wala simu zinazoshirikiwa kwa M-Pesa.

Wanapigia kura kurasa nne, na ukaguzi wa muhula na ncha ya ununuzi. Mshauri wa kisheria anaongeza sentensi moja kuhusu Sheria ya 2019, si ishirini. Ukurasa wa mwanafunzi unasomwa gwarideni kwa Kiswahili. Huko ndiko kubainisha.`
      ),
      scenario({
        titleEn: "Scenario: policy without owners",
        titleSw: "Hali: sera bila wamiliki",
        situationEn:
          "A beautiful policy names 'the school' 40 times and no person. A leak happens on a Friday. Nobody knows who phones the ODPC contact or the parents.",
        situationSw:
          "Sera nzuri inataja 'shule' mara 40 na hakuna mtu. Uvujaji unatokea Ijumaa. Hakuna anayejua nani anapiga simu kwa mwasiliani wa ODPC au wazazi.",
        questionEn: "What was missing in the specification?",
        questionSw: "Nini kilikosekana katika kubainisha?",
        optionsEn: [
          "More UNESCO diagrams",
          "Named roles with deputies for Friday evenings, and an incident path with clock times",
          "A longer ban list",
          "A detector threshold",
        ],
        optionsSw: [
          "Michoro zaidi ya UNESCO",
          "Wajibu wenye majina na naibu kwa jioni za Ijumaa, na njia ya tukio yenye saa",
          "Orodha ndefu zaidi ya marufuku",
          "Kizingiti cha kichunguzi",
        ],

        correctIndex: 1,
        hintsEn: [
          "Diagrams do not answer a phone.",
          "Correct. Specification is names, deputies and hours — not only principles.",
          "Bans without owners still leave the leak unanswered.",
          "Detectors are not an incident desk.",
        ],
        hintsSw: [
          "Michoro haijibu simu.",
          "Sahihi. Kubainisha ni majina, naibu na saa — si kanuni tu.",
          "Marufuku bila wamiliki bado yanaacha uvujaji bila jibu.",
          "Vichunguzi si dawati la tukio.",
        ],
        explainEn: "A specified policy can be acted on at 18:00 on a Friday. Principles alone cannot.",
        explainSw: "Sera iliyobainishwa inaweza kutendewa saa 12 jioni Ijumaa. Kanuni peke yake haziwezi.",
      }),
      quiz(
        "Which sentence is a procurement hook?",
        "Sentensi ipi ni ncha ya ununuzi?",
        [
          "We love innovation",
          "No information system is purchased or renewed unless vendor questions on data, assessment, equity and exit are answered in writing",
          "Teachers may use any free app",
          "The intern will decide tools",
        ],
        [
          "Tunapenda uvumbuzi",
          "Hakuna mfumo wa taarifa unaonunuliwa au kufanyiwa upya isipokuwa maswali ya muuzaji kuhusu data, tathmini, usawa na kutoka yamejibiwa kwa maandishi",
          "Walimu wanaweza kutumia programu yoyote ya bure",
          "Mwanafunzi wa ndani ataamua zana",
        ],
        1,
        "A hook blocks a purchase. Warm words and intern discretion do not.",
        "Ncha inazuia ununuzi. Maneno ya joto na hiari ya mwanafunzi wa ndani hazizuii."
      ),
      pb({
        titleEn: "Build a prompt that drafts a specified policy from facts only",
        titleSw: "Jenga maagizo yanayoandaa sera iliyobainishwa kutoka ukweli tu",
        introEn: "Force the model to leave blanks rather than invent Kenyan law or staff names.",
        introSw: "Lazimisha modeli iachie mapengo badala ya kubuni sheria ya Kenya au majina ya wafanyakazi.",
        goalEn: "Facts, roles with TODOs, seven sections, bilingual, no invented citations.",
        goalSw: "Ukweli, wajibu wenye TODO, sehemu saba, lugha mbili, hakuna nukuu zilizobuniwa.",
        blocksEn: [
          "Facts: 900 learners, mixed day, crowded rooms, few devices, CBC and KCSE",
          "Sections: scope, roles, assessment, data (DPA 2019), equity, integrity, review and procurement hook",
          "If a name or legal clause is unknown, write TODO for the data person, do not invent",
          "Learner page in Kiswahili at Form 2 reading level; staff page in English and Kiswahili",
          "Copy a UK university fine schedule and list of banned brands",
        ],
        blocksSw: [
          "Ukweli: wanafunzi 900, mchana mchanganyiko, vyumba vyenye msongamano, vifaa vichache, CBC na KCSE",
          "Sehemu: wigo, wajibu, tathmini, data (Sheria ya 2019), usawa, uadilifu, ukaguzi na ncha ya ununuzi",
          "Jina au kifungu cha kisheria kisipojulikana, andika TODO kwa mtu wa data, usibuni",
          "Ukurasa wa mwanafunzi kwa Kiswahili katika kiwango cha Kidato cha 2; ukurasa wa walimu kwa Kiingereza na Kiswahili",
          "Nakili ratiba ya faini ya chuo cha Uingereza na orodha ya chapa zilizokatazwa",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Facts: 900 learners, mixed day, crowded rooms, few devices, CBC and KCSE. Sections: scope, roles, assessment, data (DPA 2019), equity, integrity, review and procurement hook. If a name or legal clause is unknown, write TODO for the data person, do not invent. Learner page in Kiswahili at Form 2 reading level; staff page in English and Kiswahili.",
        sampleSw:
          "Ukweli: wanafunzi 900, mchana mchanganyiko, vyumba vyenye msongamano, vifaa vichache, CBC na KCSE. Sehemu: wigo, wajibu, tathmini, data (Sheria ya 2019), usawa, uadilifu, ukaguzi na ncha ya ununuzi. Jina au kifungu cha kisheria kisipojulikana, andika TODO kwa mtu wa data, usibuni. Ukurasa wa mwanafunzi kwa Kiswahili katika kiwango cha Kidato cha 2; ukurasa wa walimu kwa Kiingereza na Kiswahili.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Specification is roles, hooks, bilingual learner pages, and TODOs rather than invented law.
- Next unit: policy in practice — incidents, appeals, KCSE season.`,
        `- Kubainisha ni wajibu, ncha, kurasa za wanafunzi za lugha mbili, na TODO badala ya sheria iliyobuniwa.
- Kitengo kijacho: sera katika utendaji — matukio, rufaa, msimu wa KCSE.`
      ),
    ],
  },
  {
    id: "edu-a-u8",
    titleEn: "Policy in practice: integrity, assessment, incidents",
    titleSw: "Sera katika utendaji: uadilifu, tathmini, matukio",
    cards: [
      note(
        "A policy that cannot run on a Friday afternoon is still a draft",
        "Sera isiyoweza kuendeshwa Ijumaa alasiri bado ni rasimu",
        `Practice is three clocks.

Integrity: a dump appears in a Form 2 group at 21:10. Who is told, by whom, before 08:00? The work is set aside, a paper task replaced in lesson time, parents of the named child whose script was pasted are informed if needed, and the disclosure rule is taught again — not a detector theatre.

Assessment: KCSE season. Mocks look like the exam: no phone, teacher-set papers, teacher-marked. AI-drafted items still pass a signed key. Appeals against marks go to a human, never to 'the tool said'.

Incidents: a leak, a prefect-generated unofficial quiz, a vendor that switched on analytics. The specified path has a deputy for Friday evening, a note to the Board, and, where personal data left the country without a basis, the data person.

None of this requires a new committee every week. It requires the names from unit 7 to be real, and one rehearsal per year — a tabletop of a dump and a leak, 40 minutes in a HoD meeting.`,
        `Utendaji ni saa tatu.

Uadilifu: mmwagaji unatokea kwenye kundi la Kidato cha 2 saa tatu na dakika kumi usiku. Nani anaambiwa, na nani, kabla ya saa mbili asubuhi? Kazi inawekwa kando, kazi ya karatasi inabadilishwa katika muda wa somo, wazazi wa mtoto aliye na jina ambaye kazi yake ilibandikwa wanaarifiwa inapohitajika, na kanuni ya kueleza wazi inafundishwa tena — si maonyesho ya kichunguzi.

Tathmini: msimu wa KCSE. Mock zinafanana na mtihani: hakuna simu, karatasi za mwalimu, alama za mwalimu. Vipengee vilivyoandaliwa na AI bado vinapita ufunguo uliotiwa saini. Rufaa dhidi ya alama zinaenda kwa binadamu, kamwe si 'zana ilisema'.

Matukio: uvujaji, jaribio lisilo rasmi lililozalishwa na mkuu wa darasa, muuzaji aliyewasha uchambuzi. Njia iliyobainishwa ina naibu wa jioni ya Ijumaa, maelezo kwa Bodi, na, data binafsi ilipotoka nchini bila msingi, mtu wa data.

Hakuna kati ya hivi inayohitaji kamati mpya kila wiki. Inahitaji majina kutoka somo la 7 yawe halisi, na mazoezi moja kwa mwaka — meza ya mmwagaji na uvujaji, dakika 40 katika mkutano wa wakuu wa idara.`
      ),
      reveal([
        {
          termEn: "Same-day incident path",
          termSw: "Njia ya tukio ya siku ileile",
          defEn: "Who is called, in order, before the next school morning.",
          defSw: "Nani anapigiwa, kwa mpangilio, kabla ya asubuhi ijayo ya shule.",
        },
        {
          termEn: "Replacement task",
          termSw: "Kazi mbadala",
          defEn: "A paper task that still measures the outcome after a dump invalidates take-home work.",
          defSw: "Kazi ya karatasi ambayo bado inapima matokeo baada ya mmwagaji kuharibu kazi ya nyumbani.",
        },
        {
          termEn: "Human appeal",
          termSw: "Rufaa ya binadamu",
          defEn: "A teacher or HoD revisits a mark. The model is not the court.",
          defSw: "Mwalimu au mkuu wa idara anarejea alama. Modeli si mahakama.",
        },
        {
          termEn: "Tabletop rehearsal",
          termSw: "Mazoezi ya meza",
          defEn: "Walking a fictional dump and leak once a year so names are not theoretical.",
          defSw: "Kupitia mmwagaji na uvujaji wa kubuni mara moja kwa mwaka ili majina yasiwe ya nadharia.",
        },
      ]),
      note(
        "Worked example: 21:10 dump, 07:40 paper",
        "Mfano wa kazi: mmwagaji saa tatu usiku, karatasi saa moja na dakika arobaini",
        `A prefect pastes AI Agriculture answers. The class teacher sees it at 21:40, messages the HoD named in the policy, and posts in the group: 'Do not copy. Bring books tomorrow.' At 07:40 the class sits a ten-minute paper task already sitting in the HoD's drawer for this purpose. Eighteen near-copies of the dump are not marked. The prefect's device use is a discipline matter separate from the learning evidence.

No detector was involved. No child was ranked. The outcome was still measured. That is policy in practice.`,
        `Mkuu wa darasa anabandika majibu ya AI ya Kilimo. Mwalimu wa darasa anaona saa tatu na dakika arobaini usiku, anatuma ujumbe kwa mkuu wa idara aliye na jina kwenye sera, na anachapisha kwenye kundi: 'Msinakili. Leteni vitabu kesho.' Saa moja na dakika arobaini asubuhi darasa linafanya kazi ya karatasi ya dakika kumi iliyokuwa tayari kwenye droo ya mkuu wa idara kwa madhumuni haya. Nakala kumi na nane za karibu za mmwagaji hazisahihishwi. Matumizi ya kifaa ya mkuu wa darasa ni suala la nidhamu tofauti na ushahidi wa kujifunza.

Hakuna kichunguzi kilichohusika. Hakuna mtoto aliyepangwa. Matokeo bado yalipimwa. Hiyo ni sera katika utendaji.`
      ),
      scenario({
        titleEn: "Scenario: 'the tool awarded 18, I will not change it'",
        titleSw: "Hali: 'zana ilitoa 18, sitabadilisha'",
        situationEn:
          "A parent appeals a composition mark. The teacher says the AI set 18 out of 20 and policy forbids changing machine marks. The policy you specified says the opposite.",
        situationSw:
          "Mzazi anatoa rufaa ya alama ya insha. Mwalimu anasema AI iliweka 18 kati ya 20 na sera inakataza kubadilisha alama za mashine. Sera uliyobainisha inasema kinyume.",
        questionEn: "What happens?",
        questionSw: "Kuna nini?",
        optionsEn: [
          "The 18 stands; machines are consistent",
          "A human rereads the script against the rubric, sets the mark, and the teacher is retrained on the policy line that teachers own marks",
          "A detector score decides the appeal",
          "The principal averages the AI mark and the teacher's first impression",
        ],
        optionsSw: [
          "18 inasimama; mashine ni thabiti",
          "Binadamu anasoma kazi upya dhidi ya rubriki, anaweka alama, na mwalimu anafunzwa tena mstari wa sera kwamba walimu ndio wamiliki wa alama",
          "Alama ya kichunguzi inaamua rufaa",
          "Mkuu anawastanisha alama ya AI na hisia ya kwanza ya mwalimu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Consistency of a biased tool is still bias.",
          "Correct. Appeals are human. Policy that forbids changing machine marks contradicts this whole track.",
          "Detectors are not an appeals board.",
          "Averaging two guesses is not a rubric.",
        ],
        hintsSw: [
          "Uthabiti wa zana yenye upendeleo bado ni upendeleo.",
          "Sahihi. Rufaa ni za binadamu. Sera inayokataza kubadilisha alama za mashine inapingana na mfululizo huu mzima.",
          "Vichunguzi si bodi ya rufaa.",
          "Wastani wa makisio mawili si rubriki.",
        ],
        explainEn: "Teachers own marks. An appeal is a reread, not a negotiation with a model.",
        explainSw: "Walimu ndio wamiliki wa alama. Rufaa ni kusoma upya, si mazungumzo na modeli.",
      }),
      quiz(
        "Why keep a replacement paper task in a drawer before any dump happens?",
        "Kwa nini uweke kazi mbadala ya karatasi kwenye droo kabla mmwagaji haujatokea?",
        [
          "To punish the class in advance",
          "So learning can still be measured the next morning without using the contaminated take-home pile",
          "Because UNESCO requires spare papers",
          "To have something for the detector to eat",
        ],
        [
          "Kuadhibu darasa mapema",
          "Ili kujifunza bado kupimwe asubuhi inayofuata bila kutumia rundo la nyumbani lililochafuliwa",
          "Kwa sababu UNESCO inahitaji karatasi za ziada",
          "Kuwa na kitu kichunguzi kile",
        ],
        1,
        "Incident response is logistics. A drawer beats a speech.",
        "Majibu ya tukio ni usafirishaji. Droo inashinda hotuba."
      ),
      note(
        "Try it: 40-minute tabletop",
        "Jaribu: mazoezi ya meza ya dakika 40",
        `In the next HoD meeting, read two fiction cards: a 21:00 dump; a vendor analytics column that appeared on parents' phones.

- Time who calls whom.
- Name the replacement task.
- Name who speaks to parents.
- Write what you still do not know. Those TODOs go back into unit 7.

Do not use a real child's name on the cards.`,
        `Katika mkutano ujao wa wakuu wa idara, someni kadi mbili za kubuni: mmwagaji saa tatu usiku; safu ya uchambuzi ya muuzaji iliyoonekana kwenye simu za wazazi.

- Pima nani anapigia nani.
- Taja kazi mbadala.
- Taja nani anazungumza na wazazi.
- Andika bado hamjui nini. TODO hizo zirudi somo la 7.

Msitumie jina halisi la mtoto kwenye kadi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Rehearse dumps and leaks. Humans hear appeals. Keep a spare paper task.
- Next unit: questions every vendor must answer before money or data moves.`,
        `- Zoezeni mmwagaji na uvujaji. Binadamu husikia rufaa. Weka kazi ya karatasi ya ziada.
- Kitengo kijacho: maswali kila muuzaji lazima ajibu kabla pesa au data haijahama.`
      ),
    ],
  },
  {
    id: "edu-a-u9",
    titleEn: "Questions for vendors",
    titleSw: "Maswali kwa wasambazaji",
    cards: [
      note(
        "If they cannot answer in writing, they cannot hold children's data",
        "Wasipoweza kujibu kwa maandishi, hawawezi kushika data ya watoto",
        `Free hardware and fast demos hide the contract. Before a school or a county buys, renews, or even pilots, demand written answers:

- Where is personal data stored, in which country, with which subprocessors?
- Will learner work, logs or biometrics train your models? Yes or no. If yes, stop.
- Who is the controller? If they say they are, and the school is not, stop.
- How do we export and delete when we leave? How many days?
- Can teachers review and override every quiz and every mark? If marks are locked to the model, stop.
- What is the paper path for learners without devices?
- Does any feature need fingerprints or face scans? Default no.
- What is the documented error rate on Kenyan English and Kiswahili, at our class levels — not a global marketing number?
- Who audits you, and may the school or ODPC see the report?
- What happens on a Friday when the system is wrong in front of 150 parents?

UNESCO's 2023 guidance expects institutions to govern tools, not to be governed by a terms-of-service tick. Tie this list to the procurement hook from unit 7.`,
        `Vifaa vya bure na maonyesho ya haraka huficha mkataba. Kabla shule au kaunti haijanunua, kufanya upya, au hata kujaribu, taka majibu ya maandishi:

- Data binafsi inahifadhiwa wapi, nchi ipi, wasindikizaji wapi?
- Je kazi ya wanafunzi, kumbukumbu au kibayometriki zitafunza modeli zenu? Ndiyo au hapana. Kama ndiyo, simama.
- Mdhibiti ni nani? Wakisema ni wao, na shule si, simama.
- Tunahamisha na kufuta vipi tunapoondoka? Siku ngapi?
- Je walimu wanaweza kukagua na kubadilisha kila jaribio na kila alama? Alama zikifungwa kwa modeli, simama.
- Njia ya karatasi kwa wasio na vifaa ni ipi?
- Je kipengele chochote kinahitaji alama za vidole au skani za uso? Chaguo-msingi hapana.
- Kiwango cha kosa kilichoandikwa kwenye Kiingereza cha Kenya na Kiswahili, katika madarasa yetu, ni kipi — si namba ya masoko ya dunia?
- Nani anawakagua, na je shule au ODPC inaweza kuona ripoti?
- Kuna nini Ijumaa mfumo ukikosea mbele ya wazazi 150?

Mwongozo wa UNESCO wa 2023 unatarajia taasisi zisimamie zana, si kusimamiwa na alama kwenye masharti ya huduma. Unganisha orodha hii na ncha ya ununuzi kutoka somo la 7.`
      ),
      reveal([
        {
          termEn: "Subprocessor",
          termSw: "Msindikaji msaidizi",
          defEn: "Another company the vendor passes data to. You need the list.",
          defSw: "Kampuni nyingine ambayo muuzaji anapitishia data. Unahitaji orodha.",
        },
        {
          termEn: "Training-on-our-data",
          termSw: "Kufunza-kwa-data-yetu",
          defEn: "Using children's work to improve a commercial model. Default answer must be no.",
          defSw: "Kutumia kazi za watoto kuboresha modeli ya kibiashara. Jibu msingi lazima liwe hapana.",
        },
        {
          termEn: "Exit and deletion",
          termSw: "Kutoka na kufuta",
          defEn: "How you take data with you and how they prove it is gone.",
          defSw: "Jinsi unavyochukua data nawe na jinsi wanavyothibitisha imeenda.",
        },
        {
          termEn: "Locked marks",
          termSw: "Alama zilizofungwa",
          defEn: "A system that will not let a teacher change a score. Do not buy it.",
          defSw: "Mfumo usiomruhusu mwalimu kubadilisha alama. Usinunue.",
        },
      ]),
      note(
        "Worked example: the free tablet that failed ten questions",
        "Mfano wa kazi: kishikwambi cha bure kilichoshindwa maswali kumi",
        `A county is offered 200 free attendance tablets. Written answers: data in another country; subprocessors 'as needed'; biometrics yes; training on data 'to improve the product'; no export format; marks in a linked homework module cannot be overridden; no Kiswahili error study; Friday support is an email queue.

They refuse the gift. The queue stays a paper register. The gift's total cost of ownership was children's fingerprints and a county unable to leave.

A smaller paid tool that answered no, Kenya-hosted, teacher override, paper path, deletion in 30 days, proceeds to a limited pilot with a parent letter.`,
        `Kaunti inapewa vishikwambi 200 vya bure vya mahudhurio. Majibu ya maandishi: data katika nchi nyingine; wasindikizaji 'inapohitajika'; kibayometriki ndiyo; kufunza kwa data 'kuboresha bidhaa'; hakuna muundo wa kuhamisha; alama kwenye moduli ya kazi ya nyumbani haziwezi kubadilishwa; hakuna utafiti wa kosa la Kiswahili; msaada wa Ijumaa ni foleni ya barua pepe.

Wanakataa zawadi. Foleni inabaki daftari la karatasi. Gharama kamili ya umiliki wa zawadi ilikuwa alama za vidole za watoto na kaunti isiyoweza kuondoka.

Zana ndogo ya kulipia iliyojibu hapana, iliyohifadhiwa Kenya, kubadilisha kwa mwalimu, njia ya karatasi, kufuta kwa siku 30, inaendelea kwenye jaribio dogo na barua ya wazazi.`
      ),
      scenario({
        titleEn: "Scenario: 'sign the blanket endorsement'",
        titleSw: "Hali: 'tia saini idhini ya jumla'",
        situationEn:
          "A vendor offers free analytics if the principal signs a letter 'endorsing the AI tool for all school uses.' No local evaluation exists.",
        situationSw:
          "Muuzaji anatoa uchambuzi wa bure mkuu akitia saini barua 'kuunga mkono zana ya AI kwa matumizi yote ya shule.' Hakuna tathmini ya ndani.",
        questionEn: "The defensible position?",
        questionSw: "Nafasi inayoweza kujilinda?",
        optionsEn: [
          "Sign; free helps learners",
          "Refuse blanket endorsement. Run a scoped evaluation with defined uses, document results, endorse only what was tested",
          "Sign but hope nobody checks",
          "Use it quietly without review",
        ],
        optionsSw: [
          "Tia saini; bure inawasaidia wanafunzi",
          "Kataa idhini ya jumla. Fanya tathmini yenye wigo na matumizi yaliyofafanuliwa, andika matokeo, ungaza tu kilichopimwa",
          "Tia saini na uombee hakuna atakayekagua",
          "Tumia kimya bila ukaguzi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Free is a price. Endorsement is a professional claim.",
          "Correct. Scope, test, document, limited yes. Blanket yes is how weak tools enter every classroom.",
          "Hope is not governance.",
          "Quiet use is still a data use.",
        ],
        hintsSw: [
          "Bure ni bei. Idhini ni dai la kitaaluma.",
          "Sahihi. Wigo, pima, andika, ndiyo ndogo. Ndiyo ya jumla ndivyo zana dhaifu zinavyoingia kila darasa.",
          "Kuomba si utawala.",
          "Matumizi ya kimya bado ni matumizi ya data.",
        ],
        explainEn: "Endorse only what you evaluated. Gifts that need a blanket letter are buying your letter, not helping your class.",
        explainSw: "Ungaza tu ulichotathmini. Zawadi zinazohitaji barua ya jumla zinanunua barua yako, si kusaidia darasa lako.",
      }),
      quiz(
        "A vendor will not say whether children's insha train their model. You should:",
        "Muuzaji hasemi kama insha za watoto zinafunza modeli yao. Unapaswa:",
        [
          "Assume no and proceed",
          "Treat silence as an unacceptable risk and do not send learner work there",
          "Send Kiswahili insha only",
          "Ask learners to consent in Sheng",
        ],

[
          "Chukulia hapana na uendelee",
          "Chukulia kimya kama hatari isiyokubalika na usitume kazi ya wanafunzi huko",
          "Tuma insha za Kiswahili tu",
          "Waombe wanafunzi watoe idhini kwa Sheng",
        ],
        1,
        "Silence on training is a yes for risk purposes. Do not route children's work into a black box.",
        "Kimya kuhusu kufunza ni ndiyo kwa madhumuni ya hatari. Usielekeze kazi za watoto kwenye sanduku jeusi."
      ),
      note(
        "Try it: send the ten questions",
        "Jaribu: tuma maswali kumi",
        `Pick one tool in use or on offer. Send the question list in writing. Diary the date.

- No written answer in ten working days: log as failed procurement hygiene.
- Partial answers: list the TODOs for the data person.
- Do not put real learner names in the email thread.

Keep the reply for the checkpoint unit.`,
        `Chagua zana moja inayotumika au inayotolewa. Tuma orodha ya maswali kwa maandishi. Andika tarehe.

- Hakuna jibu la maandishi kwa siku kumi za kazi: andika kama usafi wa ununuzi ulioshindwa.
- Majibu ya sehemu: orodhesha TODO kwa mtu wa data.
- Usiweke majina halisi ya wanafunzi kwenye uzi wa barua pepe.

Iweke jibu kwa somo la kituo cha kukagua.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Written answers or no deal. No training on learner data. No locked marks. No casual biometrics.
- Next unit: equity of devices as a procurement and timetable problem.`,
`- Majibu ya maandishi au hakuna biashara. Hakuna kufunza kwa data ya mwanafunzi. Hakuna alama zilizofungwa. Hakuna kibayometriki cha mchezo.
- Kitengo kijacho: usawa wa vifaa kama tatizo la ununuzi na ratiba.`
      ),
    ],
  },
  {
    id: "edu-a-u10",
    titleEn: "Equity of devices",
    titleSw: "Usawa wa vifaa",
    cards: [
      note(
        "Do not buy a future in which the mark requires a gadget the class does not have",
        "Usinunue siku zijazo ambazo alama inahitaji kifaa darasa lisilo nalo",
        `Equity of devices is not a slogan at the end of a proposal. It is a constraint on every purchase and every homework rule.

Models of provision:

- One-to-one devices: rare, expensive, high theft and repair load, high data bills.
- Shared lab: the Kenyan default. Timetable it. Isolate sessions (unit 2). Paper path on non-lab days.
- Bring-your-own: encodes family money into the mark unless assessment stays on paper.

Total cost of ownership includes data, cases, charging, lost chargers, teacher time, and the learners who still have nothing. A vendor who prices per child per month without a zero-device mode is selling a gate.

UNESCO 2023 is explicit that generative AI must not widen gaps. The operational translation: never grade a task that can only be done with a paid chatbot; never make attendance depend on an unvetted biometric gadget; put lab time into the scheme so sharing is planned rather than improvised.

Count the room as it is: 48 learners, four tablets, one projector that fails. Design from that number, then buy toward a better number — without making this week's marks wait for the purchase.`,
        `Usawa wa vifaa si kauli mwisho wa pendekezo. Ni kikomo kwenye kila ununuzi na kila kanuni ya kazi ya nyumbani.

Mitindo ya utoaji:

- Kifaa kwa kila mtu: adimu, ghali, mzigo mkubwa wa wizi na ukarabati, bili kubwa za data.
- Maabara inayoshirikiwa: kawaida ya Kenya. Iweke ratibani. Tenganisha vipindi (somo la 2). Njia ya karatasi siku zisizo za maabara.
- Lete chako: inaweka pesa za familia kwenye alama isipokuwa tathmini inakaa kwenye karatasi.

Gharama kamili ya umiliki inajumuisha data, koti, chaji, chaji zilizopotea, muda wa mwalimu, na wanafunzi ambao bado hawana chochote. Muuzaji anayepanga bei kwa mtoto kwa mwezi bila hali ya sifuri-kifaa anauza lango.

UNESCO 2023 iko wazi kwamba AI generative isipanue pengo. Tafsiri ya uendeshaji: usitoe alama kwenye kazi inayoweza kufanywa tu kwa chatbot ya kulipia; usifanye mahudhurio yategemee kifaa cha kibayometriki ambacho hakijakaguliwa; weka muda wa maabara kwenye mpango ili kushiriki kupangwe si kubuniwa.

Hesabu chumba kama kilivyo: wanafunzi 48, vishikwambi vinne, projekta moja inayoshindwa. Buni kutoka namba hiyo, kisha nunua kuelekea namba bora — bila kufanya alama za wiki hii zisubiri ununuzi.`
      ),
      reveal([
        {
          termEn: "Zero-device mode",
          termSw: "Hali ya sifuri-kifaa",
          defEn: "The product still lets the school teach and assess if no child has a phone.",
          defSw: "Bidhaa bado inaruhusu shule kufundisha na kutathmini kama hakuna mtoto mwenye simu.",
        },
        {
          termEn: "Total cost of ownership",
          termSw: "Gharama kamili ya umiliki",
          defEn: "Purchase plus data, repair, charging, training, and exclusion costs.",
          defSw: "Ununuzi pamoja na data, ukarabati, chaji, mafunzo, na gharama za kutengwa.",
        },
        {
          termEn: "BYOD penalty",
          termSw: "Adhabu ya lete-chako",
          defEn: "When bring-your-own turns family cash into a silent part of the mark.",
          defSw: "Lete-chako linapogeuza pesa za familia kuwa sehemu kimya ya alama.",
        },
        {
          termEn: "Planned sharing",
          termSw: "Ushiriki uliopangwa",
          defEn: "Rotation on the timetable, not a scramble in minute 35.",
          defSw: "Mzunguko kwenye ratiba, si kinyang'anyiro katika dakika 35.",
        },
      ]),
      note(
        "Worked example: a tender that required home data",
        "Mfano wa kazi: zabuni iliyohitaji data ya nyumbani",
        `A county tender scored vendors on 'AI homework completion rates'. The winner's app only worked with home data. Completion in well-connected estates looked excellent. Completion in the other wards was a row of zeros that the dashboard labelled 'low effort'.

The director cancelled the scoring line, required zero-device mode and a paper pack in the next tender, and stopped sending completion rates to the public dashboard (unit 4). Marks returned to classwork the school could supervise.

The expensive lesson: a KPI can launder inequity if you do not inspect who is missing.`,
        `Zabuni ya kaunti iliwapa alama wauzaji kwa 'viwango vya ukamilishaji wa kazi ya nyumbani ya AI'. Programu ya mshindi ilifanya kazi tu na data ya nyumbani. Ukamilishaji katika mitaa yenye mtandao ulionekana bora. Ukamilishaji katika wadi nyingine ulikuwa safu ya sifuri ambazo dashibodi iliita 'juhudi ndogo'.

Mkurugenzi alifuta mstari wa alama, akahitaji hali ya sifuri-kifaa na pakiti ya karatasi katika zabuni ifuatayo, na akaacha kutuma viwango vya ukamilishaji kwenye dashibodi ya umma (somo la 4). Alama zirudi kwenye kazi ya darasani shule inayoweza kusimamia.

Funzo ghali: kipimo kinaweza kuficha ukosefu wa usawa usipokagua nani anakosekana.`
      ),
      scenario({
        titleEn: "Scenario: wait for 1:1 before teaching",
        titleSw: "Hali: ngoja 1:1 kabla ya kufundisha",
        situationEn:
          "A well-wisher pledges tablets for every Form 1 'next financial year'. Staff want to pause all AI-literate teaching until the boxes arrive, and to set chatbot homework now 'to prepare'.",
        situationSw:
          "Mfadhili anaahidi vishikwambi kwa kila Kidato cha 1 'mwaka ujao wa fedha'. Walimu wanataka kusimamisha kufundisha ustadi wa AI hadi masanduku yafike, na kuweka kazi ya chatbot sasa 'kuandaa'.",
        questionEn: "What do you decide?",
        questionSw: "Unaamua nini?",
        optionsEn: [
          "Pause teaching; gadgets are the curriculum",
          "Teach the paper-first habits now; do not set chatbot-only homework; plan lab rotation if and when devices arrive",
          "Set chatbot homework to motivate donors",
          "Buy on credit against the pledge",
        ],
        optionsSw: [
          "Simamisha kufundisha; vifaa ndio mtaala",
          "Fundisha tabia za karatasi-kwanza sasa; usiweke kazi ya chatbot tu; panga mzunguko wa maabara vifaa vikifika",
          "Weka kazi ya chatbot kuhamasisha wafadhili",
          "Nunua kwa mkopo dhidi ya ahadi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Literacy is habits. Gadgets help later. They are not the syllabus.",
          "Correct. Do not wait, and do not pretend devices already exist in every home.",
          "Homework that needs data now punishes the children the pledge has not reached.",
          "A pledge is not money in the account.",
        ],
        hintsSw: [
          "Ustadi ni tabia. Vifaa vinasaidia baadaye. Si mtaala.",
          "Sahihi. Usingoje, wala usijifanye vifaa tayari viko kila nyumbani.",
          "Kazi ya nyumbani inayohitaji data sasa inawaadhibu watoto ambao ahadi haijawafikia.",
          "Ahadi si pesa kwenye akaunti.",
        ],
        explainEn: "Teach for the room you have. Buy toward the room you want. Do not mark the gap.",
        explainSw: "Fundisha kwa chumba ulicho nacho. Nunua kuelekea chumba unachotaka. Usipime pengo.",
      }),
      quiz(
        "A tool has no zero-device mode. For marked assessment you should:",
        "Zana haina hali ya sifuri-kifaa. Kwa tathmini yenye alama unapaswa:",
        [
          "Use it anyway and call missing scores absent",
          "Keep the mark on a path every learner can take; use the tool only as optional extra",
          "Give extra marks to those with phones",
          "Exempt rural schools from integrity rules",
        ],
        [
          "Itumie hata hivyo na uiite alama zinazokosekana kutokuwepo",
          "Weka alama kwenye njia kila mwanafunzi anayeweza kuchukua; tumia zana kama nyongeza ya hiari tu",
          "Toa alama za ziada kwa wenye simu",
          "Waachilie shule za vijijini kanuni za uadilifu",
        ],
        1,
        "Assessment must be reachable. Optional extras cannot carry the grade.",
        "Tathmini lazima ifikike. Nyongeza za hiari haziwezi kubeba alama."
      ),
      note(
        "Try it: count this week",
        "Jaribu: hesabu wiki hii",
        `For one class, write: number of learners; working school devices; home devices you are sure about (do not survey with named lists in a public tool).

- Circle any marked task this week that needed a gadget.
- Rewrite it as paper, or drop the mark.
- Send the count into the next tender conversation.

This number, not the vendor slide, is the equity case.`,
        `Kwa darasa moja, andika: idadi ya wanafunzi; vifaa vya shule vinavyofanya kazi; vifaa vya nyumbani unavyo na uhakika (usifanye utafiti kwa orodha zenye majina kwenye zana ya hadhara).

- Zungushia kazi yoyote yenye alama wiki hii iliyohitaji kifaa.
- Iandike upya kama karatasi, au acha alama.
- Tuma hesabu kwenye mazungumzo yajayo ya zabuni.

Namba hii, si slaidi ya muuzaji, ndiyo kesi ya usawa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Zero-device mode, planned sharing, no BYOD penalty in the mark.
- Next unit: quality assurance so teachers still own quizzes and marks at scale.`,
        `- Hali ya sifuri-kifaa, ushiriki uliopangwa, hakuna adhabu ya lete-chako kwenye alama.
- Kitengo kijacho: uhakikisho wa ubora ili walimu bado wamiliki majaribio na alama kwa wingi.`
      ),
    ],
  },
  {
    id: "edu-a-u11",
    titleEn: "Teachers own quizzes and marks",
    titleSw: "Walimu ndio wamiliki wa majaribio na alama",
    cards: [
      note(
        "Quality assurance is sampling signed keys, not collecting speeches",
        "Uhakikisho wa ubora ni sampuli ya funguo zilizotiwa saini, si kukusanya hotuba",
        `At institutional scale, 'teachers review all AI-made quizzes and marks' dies unless someone checks that it happened.

A light QA design:

- Every AI-drafted quiz carries a signature line: teacher name, date, 'key checked against textbook page __'.
- HoD samples two quizzes per teacher per month. Wrong keys are withdrawn, not argued with a dashboard.
- Marks: no auto-final. Moderation samples scripts the way you already should for KCSE-style papers.
- Tutors that generate items log the generating teacher, not the learner, as the owner of the item bank.
- County officers sample schools, not logos.

This is slower than a vendor's 'fully automated assessment'. It is the only design that keeps professional accountability when 150 scripts move in a weekend.

UNESCO 2023: generative AI should not sit assessment alone. QA is how a county proves that sentence is true.`,
        `Katika kiwango cha taasisi, 'walimu hukagua majaribio na alama zote zilizotengenezwa na AI' hufa isipokuwa mtu anakagua kuwa ilitokea.

Usanifu mwepesi wa uhakikisho wa ubora:

- Kila jaribio lililoandaliwa na AI lina mstari wa saini: jina la mwalimu, tarehe, 'ufunguo umekaguliwa dhidi ya ukurasa wa kitabu cha kiada __'.
- Mkuu wa idara anachukua sampuli ya majaribio mawili kwa mwalimu kwa mwezi. Funguo zisizo sahihi zinaondolewa, si kubishana na dashibodi.
- Alama: hakuna za mwisho za kiotomatiki. Usawazishaji unachukua sampuli ya kazi kama unavyopaswa kwa karatasi za mtindo wa KCSE.
- Wakufunzi wanaozalisha vipengee wanaweka kumbukumbu ya mwalimu anayezalisha, si mwanafunzi, kama mmiliki wa benki ya maswali.
- Maafisa wa kaunti wanachukua sampuli ya shule, si nembo.

Hii ni ya polepole kuliko 'tathmini kamili ya kiotomatiki' ya muuzaji. Ndivyo usanifu pekee unavyoweka uwajibikaji wa kitaaluma kazi 150 zinapohama wikendi.

UNESCO 2023: AI generative isikae tathmini peke yake. Uhakikisho wa ubora ndivyo kaunti inavyothibitisha sentensi hiyo ni kweli.`
      ),
      reveal([
        {
          termEn: "Signed key",
          termSw: "Ufunguo uliotiwa saini",
          defEn: "A paper or file showing a person checked each answer against a page.",
          defSw: "Karatasi au faili inayoonyesha mtu alikagua kila jibu dhidi ya ukurasa.",
        },
        {
          termEn: "Withdrawal",
          termSw: "Uondoaji",
          defEn: "Pulling a bad quiz before more classes sit it. Faster than a press statement.",
          defSw: "Kutoa jaribio baya kabla madarasa zaidi hayajalifanya. Haraka kuliko taarifa kwa vyombo vya habari.",
        },
        {
          termEn: "Moderation sample",
          termSw: "Sampuli ya usawazishaji",
          defEn: "A second teacher rereads a slice of scripts. Normal examining, with or without AI comments.",
          defSw: "Mwalimu wa pili anasoma upya kipande cha kazi. Usahihishaji wa kawaida, maoni ya AI yakiwepo au la.",
        },
        {
          termEn: "Item ownership",
          termSw: "Umiliki wa kipengee",
          defEn: "The teacher who released the question owns its errors, not 'the system'.",
          defSw: "Mwalimu aliyetoa swali ndiye mmiliki wa makosa yake, si 'mfumo'.",
        },
      ]),
      note(
        "Worked example: two quizzes, one withdrawn",
        "Mfano wa kazi: majaribio mawili, moja lilioondolewa",
        `In a sub-county sample, 12 signed keys are fine. One Kiswahili quiz, unsigned, has two wrong concord keys. It has already been sat by stream A. Stream B has not.

The HoD withdraws it for B, remarks A against a corrected key, and records the generating teacher for TPD (Mkabala wa TPACK, not a public shaming). The unsigned status is itself a QA find: the signature line was missing from the template. They add it.

Without sampling, stream B would have inherited the error. QA is not distrust of teachers. It is how crowding does not multiply one miss.`,
          `Katika sampuli ya kaunti ndogo, funguo 12 zilizotiwa saini ni sawa. Jaribio moja la Kiswahili, lisilo na saini, lina funguo mbili zisizo sahihi za upatano. Tayari limetendwa na mto A. Mto B bado.

Mkuu wa idara analiondoa kwa B, anasahihisha A upya dhidi ya ufunguo uliorekebishwa, na anamwandika mwalimu aliyizalisha kwa TPD (Mkabala wa TPACK, si dhalilisho la hadhara). Kukosa saini yenyewe ni kigunduzi cha uhakikisho: mstari wa saini ulikosekana kwenye kiolezo. Wanaongeza.

Bila sampuli, mto B ungerithi kosa. Uhakikisho wa ubora si kutokuwaamini walimu. Ni jinsi msongamano usivyozidisha kosa moja.`
      ),
      scenario({
        titleEn: "Scenario: county wants fully automated CA",
        titleSw: "Hali: kaunti inataka tathmini endelevu kamili ya kiotomatiki",
        situationEn:
          "A county circular proposes that continuous assessment marks in Grade 9 come only from an adaptive app, with teachers handling complaints. No signature, no moderation.",
        situationSw:
          "Waraka wa kaunti unapendekeza alama za tathmini endelevu Gredi ya 9 zitoke kwenye programu inayojirekebisha tu, walimu wakishughulikia malalamiko. Hakuna saini, hakuna usawazishaji.",
        questionEn: "The professional response?",
        questionSw: "Jibu la kitaaluma?",
        optionsEn: [
          "Agree; volume makes humans impossible",
          "Refuse auto-final CA. Keep teacher-set marks, signed keys, sampled moderation; use the app as practice only",
          "Agree for Kiswahili only",
          "Agree if parents sign a waiver",
        ],
        optionsSw: [
          "Kubali; kiasi kinaifanya binadamu kuwa haiwezekani",
          "Kataa tathmini endelevu ya mwisho ya kiotomatiki. Bakiza alama za mwalimu, funguo zilizotiwa saini, usawazishaji wa sampuli; tumia programu kama mazoezi tu",
          "Kubali kwa Kiswahili tu",
          "Kubali wazazi wakitia saini msamaha",
        ],
        correctIndex: 1,
        hintsEn: [
          "Volume is a reason to cut tasks, not to abandon the examiner.",
          "Correct. Practice apps can stay. CA marks cannot leave the teacher.",
          "Language is not a reason to automate marks.",
          "Parents cannot waive a child's right to a fair mark.",
        ],
        hintsSw: [
          "Kiasi ni sababu ya kupunguza kazi, si kuachana na mtahini.",
          "Sahihi. Programu za mazoezi zinaweza kubaki. Alama za tathmini endelevu haziwezi kuacha mwalimu.",
          "Lugha si sababu ya kufanya alama kuwa za kiotomatiki.",
          "Wazazi hawawezi kuachilia haki ya mtoto ya alama ya haki.",
        ],
        explainEn: "Continuous assessment is still assessment. Ownership stays with the teacher.",
        explainSw: "Tathmini endelevu bado ni tathmini. Umiliki unabaki kwa mwalimu.",
      }),
      quiz(
        "A sampled AI quiz has a wrong key and no signature. First operational step:",
        "Jaribio la AI lililochukuliwa sampuli lina ufunguo usio sahihi na hakuna saini. Hatua ya kwanza ya uendeshaji:",
        [
          "Blame the model in a staff WhatsApp",
          "Withdraw it from classes that have not sat it, remark those that have, fix the template's signature line",
          "Raise the detector threshold",
          "Ban all quizzes for a year",
        ],
        [
          "Laumu modeli kwenye WhatsApp ya walimu",
          "Liondoe kwa madarasa ambayo hayajalifanya, sahihisha upya yaliyolifanya, rekebisha mstari wa saini kwenye kiolezo",
          "Panda kizingiti cha kichunguzi",
          "Kataza majaribio yote kwa mwaka",
        ],
        1,
        "Stop the harm, repair marks, fix the process. Theatre and year-long bans are not QA.",
        "Simamisha madhara, rekebisha alama, rekebisha mchakato. Maonyesho na marufuku ya mwaka si uhakikisho wa ubora."
      ),
      note(
        "Try it: add a signature line this week",
        "Jaribu: ongeza mstari wa saini wiki hii",
        `On every AI-drafted quiz template:

- Teacher name, date, textbook page, 'key checked'.
- HoD sample box, empty until used.

Run one sample in your department before the checkpoint. If you generate no quizzes, write that fact — generating none is also QA.`,
        `Kwenye kiolezo kila jaribio lililoandaliwa na AI:

- Jina la mwalimu, tarehe, ukurasa wa kitabu cha kiada, 'ufunguo umekaguliwa'.
- Kisanduku cha sampuli ya mkuu wa idara, tupu hadi kitumike.

Fanya sampuli moja katika idara yako kabla ya kituo cha kukagua. Huzalishi majaribio, andika ukweli huo — kutozalisha nayo ni uhakikisho wa ubora.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Signed keys, sampled withdrawal, teacher-owned marks.
- Last unit: an institutional programme you can audit in one folder.`,
        `- Funguo zilizotiwa saini, uondoaji wa sampuli, alama zinazomilikiwa na mwalimu.
- Somo la mwisho: mpango wa taasisi unaoweza kukaguliwa katika folda moja.`
      ),
    ],
  },
  {
    id: "edu-a-u12",
    titleEn: "Checkpoint: an institutional AI programme",
    titleSw: "Kituo cha kukagua: mpango wa AI wa taasisi",
    cards: [
      note(
        "One folder a Board, a county officer or an inspector can open",
        "Folda moja ambayo Bodi, afisa wa kaunti au mkaguzi anaweza kufungua",
        `This checkpoint is not a speech. It is a folder — paper or drive — with dated artefacts:

- Grounded tutor: corpus whitelist, refusal on, session isolation, Friday log sample (units 1–2).
- Analytics: purpose statement, no public ranking, minimum group size, no biometrics in unvetted apps (units 3–4).
- TPD: Mkabala wa TPACK hours, not vendor demos (unit 5).
- UNESCO map: four lines on this term's scheme, no purchased logos (unit 6).
- Policy: bilingual specified pages, named roles, procurement hook (unit 7).
- Practice: tabletop notes, replacement task in a drawer, human appeals (unit 8).
- Vendor file: written answers or a logged refusal to buy (unit 9).
- Equity count: learners, devices, zero-device mode (unit 10).
- QA: two signed keys, one withdrawal if needed (unit 11).

If a line is a miss, the folder contains the repair, not a tick. A wall of UNESCO posters with an unsigned wrong key in the printer queue is a failed programme.

You now have a beginner pack for learners, an intermediate protocol for teachers, and this folder for the institution. Keep humans in charge.`,
        `Kituo hiki si hotuba. Ni folda — karatasi au drivu — yenye vitu vyenye tarehe:

- Mkufunzi mwenye msingi: orodha nyeupe ya hazina, kukataa kuwaka, utenganishaji wa vipindi, sampuli ya kumbukumbu ya Ijumaa (masomo 1–2).
- Uchambuzi: taarifa ya madhumuni, hakuna upangaji wa hadhara, ukubwa wa chini wa kikundi, hakuna kibayometriki kwenye programu ambazo hazijakaguliwa (masomo 3–4).
- TPD: masaa ya Mkabala wa TPACK, si maonyesho ya wauzaji (somo la 5).
- Ramani ya UNESCO: mistari minne kwenye mpango wa muhula huu, hakuna nembo zilizonunuliwa (somo la 6).
- Sera: kurasa zilizobainishwa za lugha mbili, wajibu wenye majina, ncha ya ununuzi (somo la 7).
- Utendaji: maelezo ya mazoezi ya meza, kazi mbadala kwenye droo, rufaa za binadamu (somo la 8).
- Faili ya muuzaji: majibu ya maandishi au kataa kununua kilichoandikwa (somo la 9).
- Hesabu ya usawa: wanafunzi, vifaa, hali ya sifuri-kifaa (somo la 10).
- Uhakikisho wa ubora: funguo mbili zilizotiwa saini, uondoaji mmoja ukihitajika (somo la 11).

Mstari ukiwa kosa, folda ina marekebisho, si alama ya vema. Ukuta wa mabango ya UNESCO na ufunguo usio sahihi usio na saini kwenye foleni ya printa ni mpango ulioshindwa.

Sasa una kifurushi cha mwanzoni kwa wanafunzi, itifaki ya kati kwa walimu, na folda hii kwa taasisi. Binadamu wabaki wasimamizi.`
      ),
      reveal([
          {
          termEn: "Programme folder",
          termSw: "Folda ya mpango",
          defEn: "Dated artefacts, not posters, that prove the policy runs.",
          defSw: "Vitu vyenye tarehe, si mabango, vinavyothibitisha sera inafanya kazi.",
        },
        {
          termEn: "Miss with repair",
          termSw: "Kosa lenye marekebisho",
          defEn: "An honest gap plus what you stopped, rewrote or told.",
          defSw: "Pengo la uaminifu pamoja na ulichosimamisha, kuandika upya au kusema.",
        },
        {
          termEn: "Human in charge",
          termSw: "Binadamu msimamizi",
          defEn: "The last line of the whole education track: tools draft, people decide.",
          defSw: "Mstari wa mwisho wa mfululizo wote wa elimu: zana zinaandaa rasimu, watu wanaamua.",
        },
        {
          termEn: "Inspectable",
          termSw: "Inayoweza kukaguliwa",
          defEn: "A stranger can open the folder and see practice, not branding.",
          defSw: "Mgeni anaweza kufungua folda na kuona mazoezi, si chapa.",
        },
      ]),
      note(
        "Worked example: the inspector who asked for the printer queue",
        "Mfano wa kazi: mkaguzi aliyeuliza foleni ya printa",
        `An inspector declines the poster tour. She asks for last week's printed quizzes, the signed keys, the corpus list, and the vendor letter on training-on-our-data. One key is unsigned. The principal shows the withdrawal note from Monday and the repaired template. She records a miss with repair, not a failure of the whole school.

A neighbouring school offers only logos. That folder is empty. The difference is this checkpoint.`,
        `Mkaguzi anakataa ziara ya mabango. Anaomba majaribio yaliyochapishwa wiki iliyopita, funguo zilizotiwa saini, orodha ya hazina, na barua ya muuzaji kuhusu kufunza-kwa-data-yetu. Ufunguo mmoja hauna saini. Mkuu anaonyesha maelezo ya uondoaji kutoka Jumatatu na kiolezo kilichorekebishwa. Anaandika kosa lenye marekebisho, si kushindwa kwa shule nzima.

Shule jirani inatoa nembo tu. Folda hiyo ni tupu. Tofauti ni kituo hiki.`
      ),
      scenario({
        titleEn: "Scenario: empty ticks",
        titleSw: "Hali: alama za vema tupu",
        situationEn:
          "Your folder has ticks beside every unit title and no artefacts. A WhatsApp dump ran yesterday. A colleague says the ticks should still count because the course was completed.",
        situationSw:
          "Folda yako ina alama za vema kando ya kila kichwa cha somo na hakuna vitu. Mwagaji wa WhatsApp uliendelea jana. Mwenzako anasema alama bado zihesabiwe kwa sababu kozi ilikamilika.",
        questionEn: "What is the honest status?",
        questionSw: "Hali ya uaminifu ni ipi?",
        optionsEn: [
          "Complete; intention is evidence",
          "Failed checkpoint until the dump is stopped, a replacement task is sat, and the folder holds those artefacts",
          "Complete if UNESCO is cited",
          "Complete for boarding, failed for day scholars",
        ],
        optionsSw: [
          "Kamili; nia ni ushahidi",
          "Kituo kilichoshindwa hadi mmwagaji usimamishwe, kazi mbadala ifanywe, na folda iwe na vitu hivyo",
          "Kamili UNESCO ikinukuliwa",
          "Kamili kwa bweni, kimeshindwa kwa wanafunzi wa mchana",
        ],
        correctIndex: 1,
        hintsEn: [
          "Ticks are not practice. Yesterday's dump is the evidence.",
          "Correct. Repair, then the folder can tell the truth.",
          "Citation is not an artefact.",
          "Boarding does not launder a dump.",
        ],
        hintsSw: [
          "Alama za vema si mazoezi. Mwagaji wa jana ndio ushahidi.",
          "Sahihi. Rekibi, kisha folda iweze kusema ukweli.",
          "Kunukuu si kitu.",
          "Bweni halifichi mmwagaji.",
        ],
        explainEn: "The programme is the queue, the drawer, the signed key and the vendor letter.",
        explainSw: "Mpango ni foleni, droo, ufunguo uliotiwa saini na barua ya muuzaji.",
      }),
      quiz(
        "Which set is enough evidence of an institutional AI programme?",
        "Seti ipi ni ushahidi wa kutosha wa mpango wa AI wa taasisi?",
        [
          "Posters, a vendor certificate, and detector scores for Form 3",
          "Specified policy, one signed quiz key, equity count, vendor answers or a logged no-buy, and a miss-with-repair if something broke",
          "A completed e-learning badge for the ICT intern",
          "A public effort leaderboard",
        ],
        [
          "Mabango, cheti cha muuzaji, na alama za kichunguzi kwa Kidato cha 3",
          "Sera iliyobainishwa, ufunguo mmoja uliotiwa saini, hesabu ya usawa, majibu ya muuzaji au hapana-ya-kununua iliyoandikwa, na kosa-lenye-marekebisho kama kitu kilivunjika",
          "Beji ya kujifunza mtandaoni iliyokamilika ya mwanafunzi wa TEHAMA",
          "Jedwali la ligi la juhudi la hadhara",
        ],
        1,
        "Artefacts you can open beat branding, badges and public inferred ranks.",
        "Vitu unavyoweza kufungua vinashinda chapa, beji na nafasi za hadhara zilizokisiwa."
      ),
      note(
        "Try it: assemble the folder this month",
        "Jaribu: kusanya folda mwezi huu",
        `Create eleven sections named as the bullets above.

- Put one artefact in each, or a dated miss-and-repair.
- Read the learner page of the policy aloud in Kiswahili to one class.
- Do not store biometrics or named scripts in the folder's cloud copy if that drive is unvetted.

You are done with the education track when the folder is boring and true.`,
        `Tengeneza sehemu kumi na moja zilizoitwa kama vifungu vilivyo juu.

- Weka kitu kimoja katika kila moja, au kosa-na-marekebisho yenye tarehe.
- Soma ukurasa wa mwanafunzi wa sera kwa sauti kwa Kiswahili kwa darasa moja.
- Usihifadhi data ya kibayometriki wala kazi zenye majina kwenye nakala ya wingu ya folda ikiwa drivu hiyo haijakaguliwa.

Umemaliza mfululizo wa elimu folda inapokuwa ya kuchosha na ya kweli.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- The institutional programme is a folder of practice: corpus, consent, Mkabala wa TPACK, specified policy, vendor answers, equity counts, signed keys.
- Tools draft. Teachers mark. Boards own the purpose. Learners keep their names and fingerprints.
- That is academic integrity at school scale.`,
        `- Mpango wa taasisi ni folda ya mazoezi: hazina, idhini, Mkabala wa TPACK, sera iliyobainishwa, majibu ya muuzaji, hesabu za usawa, funguo zilizotiwa saini.
- Zana zinaandaa rasimu. Walimu husahihisha. Bodi inamiliki madhumuni. Wanafunzi wanabaki na majina na alama za vidole.
- Huo ndio uadilifu wa kitaaluma katika kiwango cha shule.`
      ),
    ],
  },
];
