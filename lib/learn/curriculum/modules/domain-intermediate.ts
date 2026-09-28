import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Domain-specific intermediate tracks. These replace the former practice of
 * re-wrapping foundation (m0) intermediate units: every unit here is authored
 * for the domain itself, in the sequence definition → worked example →
 * practice → feedback.
 */

// ---------------------------------------------------------------- AGR (SDG 2)
export const agrIntermediateUnits: CurriculumUnit[] = [
  {
    id: "agr-i-u1",
    titleEn: "Farm data that predicts",
    titleSw: "Data ya shamba inayotabiri",
    cards: [
      note(
        "What a farm prediction actually is",
        "Tabiri la shamba halisi ni nini",
        `A prediction model turns past farm records into estimates about the future: yield, disease risk, or market price. It needs three things — labelled examples (photos or records with known outcomes), relevant features (rainfall, planting date, soil type), and a measure of error. The model does not "know" agronomy; it only repeats patterns in the data you give it.

Worked example: a county extension team trains a maize disease classifier on 2,000 labelled leaf photos from Trans Nzoia. Accuracy there is 88% — but on photos from a drier county it drops to 61%, because leaf appearance changes with climate. The fix is more local data, not a bigger model.`,
        `Mfano wa kutabiri hubadilisha rekodi za zamani za shamba kuwa makadirio: mavuno, hatari ya ugonjwa, au bei ya soko. Unahitaji mambo matatu — mifano yenye lebo (picha au rekodi na matokeo yanayojulikana), sifa muhimu (mvua, tarehe ya kupanda, aina ya udongo), na kipimo cha makosa. Mfano haujui agronomia; unarudia tu mifumo iliyoko kwenye data.

Mfano halisi: timu ya ugavi wa kaunti hunza ainishaji wa magonjwa ya mahindi kwa picha 2,000 zenye lebo kutoka Trans Nzoia. Usahihi huko ni 88% — lakini kwenye picha za kaunti kavu unashuka hadi 61%, kwa sababu muonekano wa majani hubadilika na hali ya hewa. Suluhisho ni data zaidi za eneo hilo, si mfano mkubwa.`
      ),
      quiz(
        "A maize disease model is 88% accurate in one county but 61% in another. The most likely cause is:",
        "Mfano wa magonjwa ya mahindi ni sahihi 88% kaunti moja lakini 61% nyingine. Sababu muhimu zaidi ni:",
        [
          "The second county's farmers are careless",
          "Training photos did not cover the second county's conditions",
          "The model needs a larger screen to run",
          "AI cannot work outside Europe",
        ],
        [
          "Skill of farmers does not change how a trained model sees leaf photos.",
          "Correct — the model only learned patterns from one region's images. Local data is the fix.",
          "Accuracy is about data and patterns, not the size of the display.",
          "AI works everywhere; what changes is whether training data matches local conditions.",
        ],
        1,
        "Models repeat the patterns they were shown. Region mismatch between training photos and deployment photos is the classic cause.",
        "Mifano inarudia mifumo iliyofundishwa. Tofauti ya eneo kati ya picha za mafunzo na picha za matumizi ni sababu ya kawaida."
      ),
    ],
  },
  {
    id: "agr-i-u2",
    titleEn: "From forecast to field action",
    titleSw: "Kutoka tabiri hadi kitendo",
    cards: [
      scenario({
        titleEn: "Scenario: spray or wait?",
        titleSw: "Hali: nyunyiza au subiri?",
        situationEn:
          "An advisory app predicts a fall armyworm outbreak on your maize in 3 days with 72% confidence. Rain is also forecast. Spraying costs money, and a neighbour sprayed early and saw little benefit.",
        situationSw:
          "Programu ya ushauri inatabiri kuwa viwavi vya fall armyworm vitaingia mahindi yako kwa siku 3 kwa uhakika 72%. Mvua nayo inatabiriwa. Kunyunyiza kunagharimu, na jirani aliyonyunyiza mapema hakupata manufaa.",
        questionEn: "What is the most responsible next step?",
        questionSw: "Hatua ipi yenye uwajibikaji ifuatayo?",
        optionsEn: [
          "Spray immediately — the app said so",
          "Ignore it — the neighbour's case proves the app is wrong",
          "Verify the warning: scout the field, check the extension officer's advice, then decide",
          "Ask the app to spray for you",
        ],
        optionsSw: [
          "Nyunyiza mara moja — programu imesema hivyo",
          "Puuza — kesi ya jirani inaonyesha programu si sahihi",
          "Thibitisha onyo: chunguza shamba, uliza afisa wa ugavi, kisha amua",
          "Mwombe programu inyunyize",
        ],
        correctIndex: 2,
        hintsEn: [
          "A 72% confidence score is not a certainty. Acting on one number alone is risky.",
          "One neighbour is an anecdote, not evidence. The forecast could still be right.",
          "Correct — confidence scores guide, they do not decide. Ground truth plus expert advice does.",
          "Apps inform decisions; they cannot act in the physical world.",
        ],
        hintsSw: [
          "Uhakika wa 72% si uhakika kamili. Kutenda kwa namba moja tu ni hatari.",
          "Jirani mmoja ni hadithi, si uthibitisho. Tabiri linaweza kuwa sahihi.",
          "Sahihi — alama za uhakika ni mwongozo, si uamuzi. Ukwenyewe na ushauri wa mtaalamu ndio muhimu.",
          "Programu inatoa taarifa; haiwezi kutenda duniani.",
        ],
        explainEn:
          "AI forecasts raise the priority of checking; they do not replace scouting, local knowledge, or the extension officer.",
        explainSw:
          "Tabiri za AI zinaongeza umuhimu wa kuthibitisha; haziwezi kubadilisha uchunguzi, maarifa ya eneo, au afisa wa ugavi.",
      }),
      pb({
        titleEn: "Build an advisory prompt",
        titleSw: "Jenga prompt ya ushauri",
        introEn:
          "You want a language model to help draft a farm advisory message for your WhatsApp group. A weak prompt gives generic text; a strong prompt gives something you can actually send after checking.",
        introSw:
          "Unataka modeli ya lugha kukusaidia kuandaa ujumbe wa ushauri kwa kikundi chako cha WhatsApp. Prompt dhaifu inatoa maandishi ya jumla; prompt imara inatoa kitu unachoweza kutuma baada ya kuthibitisha.",
        goalEn: "Your prompt must include the crop, the observed symptom, the audience, and a verification step.",
        goalSw: "Prompt yako lazima iwe na zao, dalili uliyoiona, hadhira, na hatua ya uthibitisho.",
        blocksEn: [
          "Crop: maize, 6 weeks after planting",
          "Observed: ragged holes on leaves, moist droppings on whorl",
          "Audience: smallholder farmers in our WhatsApp group",
          "Ask for: 3 low-cost first actions",
          "Require: tell me what to confirm with the local extension officer before acting",
        ],
        blocksSw: [
          "Zao: mahindi, wiki 6 baada ya kupanda",
          "Nilichokiona: mashimo yenye makovu kwenye majani, kinyesi cha majimaji kwenye mstari wa katikati",
          "Hadhira: wakulima wadogo katika kikundi chetu cha WhatsApp",
          "Omba: hatua 3 za kwanza zenye gharama ndogo",
          "Patanisha: niambie nini nthibitishe na afisa wa ugavi kabla ya kutenda",
        ],
        required: [0, 1, 2, 3, 4],
        sampleEn:
          "Crop: maize, 6 weeks after planting. Observed: ragged holes on leaves, moist droppings on whorl. Audience: smallholder farmers in our WhatsApp group. Ask for 3 low-cost first actions. Require: tell me what to confirm with the local extension officer before acting.",
        sampleSw:
          "Zao: mahindi, wiki 6 baada ya kupanda. Nilichokiona: mashimo yenye makovu kwenye majani, kinyesi kwenye mstari wa katikati. Hadhira: wakulima wadogo wa kikundi chetu cha WhatsApp. Omba hatua 3 za gharama ndogo. Patanisha: niambie nini nthibitishe na afisa wa ugavi kabla ya kutenda.",
      }),
    ],
  },
  {
    id: "agr-i-u3",
    titleEn: "Market prices and honest numbers",
    titleSw: "Bei za soko na namba za kweli",
    cards: [
      reveal([
        {
          termEn: "Ground truth",
          termSw: "Ukweli wa shamba",
          defEn: "What is actually happening, checked by direct observation — the standard every prediction is measured against.",
          defSw: "Kinachotokea kweli, kikiwa kimethibitishwa kwa uchunguzi wa moja kwa moja — kipimo cha kila tabiri.",
        },
        {
          termEn: "Price signal",
          termSw: "Ishara ya bei",
          defEn: "A market pattern (like rising broker prices) that a model may amplify or miss depending on its data.",
          defSw: "Mfumo wa soko (kama kupanda kwa bei za mapele) unaoweza kuimarishwa au kupuuzwa na mfano kulingana na data yake.",
        },
        {
          termEn: "Confidence score",
          termSw: "Alama ya uhakika",
          defEn: "The model's own estimate of how sure it is — never a promise that the prediction is correct.",
          defSw: "Makadirio ya mfano kuhusu uhakika wake — si ahadi kuwa tabiri ni sahihi.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the broker's app says tomatoes will peak",
        titleSw: "Hali: programu ya mapele inasema nyanya zitafika kilele",
        situationEn:
          "A market app predicts tomato prices will peak in two weeks and advises selling then, not now. Your tomatoes are already ripe, storage is poor, and last season the same app was wrong.",
        situationSw:
          "Programu ya soko inatabiri bei za nyanya zitafika kilele kwa wiki mbili na inashauri kuuza wakati huo, si sasa. Nyanya zako zimeiva, uhifadhi ni duni, na msimu uliopita programu hiyo ilikosea.",
        questionEn: "How should you treat this advice?",
        questionSw: "Unapaswa kuituniaje ushauri huu?",
        optionsEn: [
          "Follow it exactly — apps know markets better than farmers",
          "Treat it as one input: weigh storage risk and local buyer prices before deciding",
          "Sell everything now and never use the app again",
          "Post the app's prediction online as guaranteed",
        ],
        optionsSw: [
          "Fuata kabisa — programu zinajua soko kuliko wakulima",
          "Ichukuye kama ingizo moja: zania hatari ya uhifadhi na bei za wanunuzi wa eneo kabla ya kuamua",
          "Uza yote sasa na usitumie programu tena",
          "Tangaza tabiri la programu mtandaoni kama uhakika",
        ],
        correctIndex: 1,
        hintsEn: [
          "Price models fail on shocks (rain, transport, festivals). Blind following transfers all risk to you.",
          "Correct — a forecast is one input. Your storage risk and today's real offers are others.",
          "One wrong forecast does not make the tool useless; it makes it imperfect.",
          "Sharing an unverified prediction as guaranteed could mislead other farmers.",
        ],
        hintsSw: [
          "Mifano ya bei inashindwa kwa mabadiliko ya ghafla (mvua, usafiri, sikukuu). Kufuata bila kufikiri inakuweka katika hatari.",
          "Sahihi — tabiri ni ingizo moja. Hatari ya uhifadhi na bei za leo ni mengine.",
          "Kukosea mara moja hakufanyi zana kuwa haina maana; inaifanya kuwa si kamili.",
          "Kutangaza tabiri lisilothibitishwa kama uhakika kunaweza kuwadanganya wakulima wenzako.",
        ],
        explainEn: "Good practice: keep the tool, log when it was right or wrong, and learn its limits from your own records.",
        explainSw: "Mazoea mazuri: endelea na zana, rekodi wakati ilipoonewa au kukosea, na jifunze vikomo vyake kutoka rekodi zako.",
      }),
      quiz(
        "You log every price forecast against the real market price for one season. This is mainly an exercise in:",
        "Unarekodi kila tabiri la bei dhidi ya bei halisi kwa msimu mmoja. Hii ni zoezi la:",
        ["Training the app's servers", "Building your own evidence about the tool's reliability", "Making the forecast illegal", "Replacing your calculator"],
        ["Kufunza seva za programu", "Kujenga uthibitisho wako kuhusu uaminifu wa zana", "Kufanya tabiri kuwa haramu", "Kubadilisha kokotoo lako"],
        1,
        "Personal verification logs are how professionals learn whether a tool deserves trust in their specific context.",
        "Rekodi za uthibitisho wa kibinafsi ndizo jinsi wataalamu wanavyojua kama zana inastahili kuaminiwa katika muktadha wao."
      ),
    ],
  },
];

// ---------------------------------------------------------------- HLT (SDG 3)
export const hltIntermediateUnits: CurriculumUnit[] = [
  {
    id: "hlt-i-u1",
    titleEn: "Prediction in the clinic",
    titleSw: "Utabiri kliniki",
    cards: [
      note(
        "Support tools, not decision makers",
        "Zana za msaada, si waamuzi",
        `Clinical AI tools estimate things like deterioration risk or triage priority from routine data. They are decision support: they surface information a busy clinician might miss, but the clinician owns the decision. A triage model trained in Nairobi hospitals may misjudge patients from a dispensary with different equipment and different recording habits.

Worked example: an early-warning score flags a child as low risk. The nurse notices the child has stopped breastfeeding — a detail the form never captured. The score was computed on incomplete data; the human observation changes the plan. That is the intended division of labour.`,
        `Zana za AI kliniki zinakadiria mambo kama hatari ya kuwa mbaya au kipaumbele cha triage kutoka data za kawaida. Ni msaada wa uamuzi: zinaonyesha taarifa mtaalamu mwenye shughuli nyingi anaweza kupuuza, lakini mtaalamu anao uamuzi. Mfano wa triage uliofunzwa hospitalini Nairobi unaweza kukosea wagonjwa wa dispensari yenye vifaa tofauti na tabia tofauti za kurekodi.

Mfano halisi: alama ya onyo la mapema inaonyesha mtoto ni wa hatari ndogo. Muuguzi anaona mtoto ameacha kunyonya — kipengele fomu haikukusanya. Alama ilikokotwa kwa data isiyokamilika; uchunguzi wa mwanadamu unabadilisha mpango. Ndio mgawanyo sahihi wa kazi.`
      ),
      quiz(
        "An AI triage score says a patient is low priority, but your observation differs. You should:",
        "Alama ya triage ya AI inasema mgonjwa si wa dharura, lakini uchunguzi wako unatofautiana. Unapaswa:",
        [
          "Follow the score — computers do not get tired",
          "Treat your clinical observation as decisive and document the disagreement",
          "Delete the score from the record",
          "Ask the patient to wait for the score to change",
        ],
        [
          "Tiredness is not the risk here — incomplete data and missed context are.",
          "Correct — the human owns the decision; documenting the disagreement also improves future audits.",
          "Hiding the disagreement removes the evidence needed to fix the tool.",
          "Scores do not self-correct while you wait.",
        ],
        1,
        "Decision support is designed to be overridden by justified clinical judgment — and the override should be recorded.",
        "Msaada wa uamuzi umekusudiwa ubadilishwe na uamuzi wa kimatibabu wenye msingi — na mabadiliko yasirekodiwe."
      ),
    ],
  },
  {
    id: "hlt-i-u2",
    titleEn: "Symptom checkers and the community",
    titleSw: "Vikokotoo vya dalili na jamii",
    cards: [
      scenario({
        titleEn: "Scenario: the symptom checker at the pharmacy",
        titleSw: "Hali: kikokotoo cha dalili dukani",
        situationEn:
          "A customer uses a free symptom-checker app which tells her she 'probably has malaria' and suggests a specific medicine. She asks you — the health worker at the counter — whether to trust it.",
        situationSw:
          "Mteja anatumia programu huru ya kukagua dalili inayomwambia kuwa 'pengine ana malaria' na kupendekeza dawa maalum. Anakuuliza — wewe mhudumu wa afya dukani — kama aiamini.",
        questionEn: "What is the soundest guidance?",
        questionSw: "Ushauri sahihi zaidi ni upi?",
        optionsEn: [
          "Yes — the app was trained by doctors",
          "No — never trust any health app",
          "The app can raise useful questions, but diagnosis and dispensing require proper testing and a qualified clinician",
          "Trust it only at night when the clinic is closed",
        ],
        optionsSw: [
          "Ndiyo — programu ilifunzwa na madaktari",
          "Hapana — usiamini programu yoyote ya afya",
          "Programu inaweza kuleta maswali muhimu, lakini utambuzi na kutoa dawa zinahitaji vipimo na mtaalamu mwenye mamlaka",
          "Iamini usiku tu ambapo kliniki imefungwa",
        ],
        correctIndex: 2,
        hintsEn: [
          "Even a well-trained checker cannot run the tests that confirm a diagnosis.",
          "Too absolute — such apps can still be useful for organising questions and urgency.",
          "Correct — useful for triage conversation, never a substitute for testing and a qualified decision.",
          "The time of day does not change what the app can and cannot know.",
        ],
        hintsSw: [
          "Hata kikokotoo kizuri hakiwezi kufanya vipimo vinavyothibitisha ugonjwa.",
          "Mara mno — programu kama hizi zinafaa kupanga maswali na dharura.",
          "Sahihi — nzuri kwa mazungumzo ya triage, si badala ya vipimo na uamuzi wa mtaalamu.",
          "Saa za mchana hazibadilishi uwezo wa programu.",
        ],
        explainEn: "Community health practice: use the app to structure the conversation, then test and refer per standard protocols.",
        explainSw: "Mazoea ya afya ya jamii: tumia programu kupanga mazungumzo, kisha pima na rejelea kwa itifaki za kawaida.",
      }),
      pb({
        titleEn: "Build a patient-education prompt",
        titleSw: "Jenga prompt ya elimu ya mgonjwa",
        introEn:
          "You want plain-language education material for diabetes patients to take home. The prompt must keep it safe: no dosing, no diagnosis, and a clear line to a human.",
        introSw:
          "Unataka nyenzo za elimu kwa lugha rahisi kwa wagonjwa wa kisukari. Prompt lazima ibaki salama: hakuna dozi, hakuna utambuzi, na njia wazi ya kufikia mtaalamu.",
        goalEn: "Your prompt must set the audience, ban dosing advice, and require a referral line to a clinician.",
        goalSw: "Prompt yako lazima iweke hadhira, ikataze ushauri wa dozi, na kuomba mstari wa kurudisha kwa mtaalamu.",
        blocksEn: [
          "Audience: newly diagnosed diabetes patients, plain Kiswahili",
          "Explain: why daily walking and diet tracking matter",
          "Do not include: any medicine doses or diagnosis",
          "End with: advise the patient to confirm their plan with the clinic nurse",
        ],
        blocksSw: [
          "Hadhira: wagonjwa wapya wa kisukari, Kiswahili rahisi",
          "Eleza: kwa nini kutembea kila siku na kufuatilia lishe ni muhimu",
          "Usijumuishe: dozi yoyote ya dawa au utambuzi",
          "Maliza: mshauri mgonjwa apange mpango wake na muuguzi wa kliniki",
        ],
        required: [0, 2, 3],
        sampleEn:
          "Audience: newly diagnosed diabetes patients, plain Kiswahili. Explain why daily walking and diet tracking matter. Do not include any medicine doses or diagnosis. End with: advise the patient to confirm their plan with the clinic nurse.",
        sampleSw:
          "Hadhira: wagonjwa wapya wa kisukari, Kiswahili rahisi. Eleza kwa nini kutembea kila siku na kufuatilia lishe ni muhimu. Usijumuishe dozi yoyote au utambuzi. Maliza: mshauri mgonjwa apange mpango wake na muuguzi wa kliniki.",
      }),
    ],
  },
  {
    id: "hlt-i-u3",
    titleEn: "Privacy in health records",
    titleSw: "Faragha kwenye rekodi za afya",
    cards: [
      reveal([
        {
          termEn: "De-identification",
          termSw: "Kutambulisha bila jina",
          defEn: "Removing names, IDs, and direct identifiers so records can be analysed without exposing people.",
          defSw: "Kuondoa majina, namba za utambulisho, na vitambulisho vya moja kwa moja ili rekodi zichambuliwe bila kufichua watu.",
        },
        {
          termEn: "Data minimisation",
          termSw: "Kupunguza data",
          defEn: "Collecting only the fields the purpose truly needs — fewer fields, fewer risks.",
          defSw: "Kukusanya tu sehemu zinazohitajika kwa lengo — sehemu chache, hatari chache.",
        },
        {
          termEn: "Consent",
          termSw: "Idhini",
          defEn: "A person's informed permission for their data to be used, matching Kenya's Data Protection Act.",
          defSw: "Ruhusa ya mtu aliyeelimishwa kwa data yake kutumika, kulingana na Sheria ya Ulinzi wa Data ya Kenya.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the chatbot that wants everything",
        titleSw: "Hali: chatbot inayotaka kila kitu",
        situationEn:
          "A free AI documentation tool asks the clinic to upload full patient files — including names and phone numbers — because 'the model works better with complete data.'",
        situationSw:
          "Zana huru ya AI ya nyaraka inaomba kliniki ipakie faili kamili za wagonjwa — pamoja na majina na namba za simu — kwa sababu 'mfano hufanya vizuri na data kamili.'",
        questionEn: "What is the responsible response?",
        questionSw: "Jibu lenye uwajibikaji ni lipi?",
        optionsEn: [
          "Upload everything — better accuracy benefits patients",
          "Refuse identifiers: share only de-identified fields the purpose needs, and record the decision",
          "Upload, but promise patients you will delete later",
          "Upload on a personal phone so the clinic is not responsible",
        ],
        optionsSw: [
          "Pakia yote — usahihi bora unawanufaisha wagonjwa",
          "Kataa vitambulisho: toa tu sehemu zisizo na majina zinazohitajika, na rekodi uamuzi",
          "Pakia, lakini waahidi wagonjwa utafuta baadaye",
          "Pakia kwa simu ya kibinafsi ili kliniki isiwajibike",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accuracy gains never justify exposing identifiers without a lawful basis and consent.",
          "Correct — minimisation plus documentation is the professional standard.",
          "'Delete later' promises are unreliable and do not meet consent requirements.",
          "Personal devices increase risk; responsibility does not transfer.",
        ],
        hintsSw: [
          "Manufaa ya usahihi haiwezi kusamehe kufichua vitambulisho bila msingi wa kisheria na idhini.",
          "Sahihi — kupunguza data na kuandika uamuzi ni kiwango cha kitaalamu.",
          "Ahadi ya 'kufuta baadaye' si ya kuaminika na haikidhi masharti ya idhini.",
          "Vifaa vya kibinafsi huongeza hatari; uwajibikaji hahamishwi.",
        ],
        explainEn: "Under Kenya's Data Protection Act, health data is sensitive: minimisation, lawful basis, and documentation are required.",
        explainSw: "Chini ya Sheria ya Ulinzi wa Data ya Kenya, data ya afya ni nyeti: kupunguza data, msingi wa kisheria, na nyaraka vinahitajika.",
      }),
      quiz(
        "Which record set respects data minimisation for a clinic's appointment-reminder tool?",
        "Seti ipi ya rekodi inaheshimu kupunguza data kwa zana ya kukumbusha miadi ya kliniki?",
        ["Full medical history plus home photos", "Name, phone number, appointment time only", "Every field 'just in case'", "Patient ID plus other clinics' records"],
        ["Historia kamili ya matibabu na picha za nyumbani", "Jina, namba ya simu, na saa ya miadi tu", "Kila sehemu 'kwa usalama'", "ID ya mgonjwa na rekodi za kliniki nyingine"],
        1,
        "A reminder needs contact and timing — nothing more. Extra fields create risk without benefit.",
        "Kikumbusho kinahitaji mawasiliano na saa — hakuna zaidi. Sehemu za ziada zinaleta hatari bila manufaa."
      ),
    ],
  },
];

// ---------------------------------------------------------------- EDU (SDG 4)
export const eduIntermediateUnits: CurriculumUnit[] = [
  {
    id: "edu-i-u1",
    titleEn: "Study help that stays honest",
    titleSw: "Msaada wa kusoma unaoenda sawa",
    cards: [
      note(
        "Grounded study support",
        "Msaada wa kusoma uliowekwa msingi",
        `A study assistant is only as trustworthy as the material you anchor it to. Grounding means telling the tool which approved sources to use — the CBC textbook chapter, the teacher's notes — and asking it to cite them. Ungrounded assistants happily invent facts that look scholarly.

Worked example: two students ask about the water cycle. One gets an ungrounded answer with a made-up textbook reference; the other pasted the chapter and asked for answers with page citations. The second answer contained an error too — but the citation made it findable in seconds. Grounding turns errors from traps into checkpoints.`,
        `Msaidizi wa kusoma ni wa kuaminika kwa kiwango cha vyanzo ulivyomwingisha. Kuweka msingi inamaanisha kumwambia zana ipi vyanzo vilivyoidhinishwa vitumie — sura ya kitabu cha CBC, maelezo ya mwalimu — na kuomba aitaje. Wasaidizi wasio na msingi hutenga ukweli unaonekana wa kishirika.

Mfano halisi: wanafunzi wawili wanauliza mzunguko wa maji. Mmoja anapata jibu bila msingi lenye rejeleo la kitabu ambalo halipo; mwingine aliweka sura na kuomba majibu na kurasa. Jibu la pili lina kasoro pia — lakini rejeleo liliifanya ionekane kwa sekunde. Kuweka msingi hubadilisha makosa kuwa vituo vya ukaguzi.`
      ),
      quiz(
        "The fastest way to check an AI study answer with citations is to:",
        "Njia ya haraka ya kukagua jibu la AI lenye rejeleo ni:",
        ["Trust it if the citation looks official", "Open the cited page and confirm the claim exists there", "Count the number of citations", "Ask the same tool if it is correct"],
        ["Iamini kama rejeleo linaonekana rasmi", "Fungua ukurasa uliotajwa na thibitisha kauli ipo", "Hesabu idadi ya marejeleo", "Uulize zana hiyo hiyo kama iko sahihi"],
        1,
        "Citations are pointers, not proof. Opening the source is the check — fabricated references fail it immediately.",
        "Marejeleo ni viola, si uthibitisho. Kufungua chanzo ndio ukaguzi — marejeleo ya kupewa hushindwa mara moja."
      ),
    ],
  },
  {
    id: "edu-i-u2",
    titleEn: "Integrity and the take-home task",
    titleSw: "Uadilifu na kazi ya nyumbani",
    cards: [
      scenario({
        titleEn: "Scenario: the essay that appeared overnight",
        titleSw: "Hali: insha iliyotokea usiku kucha",
        situationEn:
          "A student submits a polished history essay overnight. Their previous work was rougher. The school allows AI for brainstorming and revision but requires disclosure, and the essay has none.",
        situationSw:
          "Mwanafunzi anawasilisha insha safi ya historia kwa siku moja. Kazi zake za awali zilikuwa rahisi zaidi. Shule inaruhusu AI kwa mawazo na ukariri lakini inataka utambulisho, na insha haina.",
        questionEn: "As the teacher, what is the fairest first move?",
        questionSw: "Kama mwalimu, hatua ya kwanza yenye haki ni ipi?",
        optionsEn: [
          "Expel the student — AI use is cheating",
          "Ban all AI in the school",
          "Ask the student to walk you through their sources and drafting process, then apply the disclosure policy",
          "Ignore it — policing AI is impossible",
        ],
        optionsSw: [
          "Mfukuze — matumizi ya AI ni uongo",
          "Kataza AI shuleni",
          "Muomze mwanafunzi akueleze vyanzo na mchakato wake wa kuandika, kisha tumia sera ya utambulisho",
          "Puuza — kudhibiti AI haiwezekani",
        ],
        correctIndex: 2,
        hintsEn: [
          "Punishing without conversation risks punishing a student who simply improved.",
          "Blanket bans push use underground instead of teaching honest use.",
          "Correct — process conversations reveal learning, and policy gives the next step a fair basis.",
          "Ignoring integrity problems abandons every student who followed the rules.",
        ],
        hintsSw: [
          "Kuadhibu bila mazungumzo kunaweza kumdhuru mwanafunzi aliyeboresha kwa jitihada.",
          "Marufuku ya jumla inasukuma matumizi gizani badala ya kufundisha matumizi ya uwazi.",
          "Sahihi — mazungumzo ya mchakato yanaonyesha kujifunza, na sera inapa hatua inayofuata msingi wa haki.",
          "Kupuuza unawanyang'anya wanafunzi waliofuata sheria usawa.",
        ],
        explainEn: "The goal is a culture of disclosure: students can use AI where allowed, and say so.",
        explainSw: "Lengo ni utamaduni wa kutambulisha: wanafunzi wanatumia AI pale inaporuhusiwa, na kusema hivyo.",
      }),
      pb({
        titleEn: "Build a rubric-first marking prompt",
        titleSw: "Jenga prompt ya maswali kwa rubriki",
        introEn:
          "You want AI to draft feedback on essays against your CBC rubric. A good prompt fixes the rubric, the level, and bans changing grades.",
        introSw:
          "Unataka AI iandae maoni za insha kwa rubriki yako ya CBC. Prompt nzuri inaweka rubriki, kiwango, na kukataza kubadilisha alama.",
        goalEn: "Your prompt must include the rubric reference, the class level, and a rule that AI may suggest but not set grades.",
        goalSw: "Prompt yako lazima iwe na rejeleo la rubriki, kiwango cha darasa, na sheria kuwa AI inapendekeza tu, haipi alama.",
        blocksEn: [
          "Context: Grade 8 CBC history essay, 250 words",
          "Rubric: use the four school rubric criteria I paste below",
          "Task: draft two strengths and two improvements per essay",
          "Constraint: never assign or change a final grade — the teacher decides",
        ],
        blocksSw: [
          "Muktadha: Darasa la 8 CBC historia, maneno 250",
          "Rubriki: tumia vigezo vinne vya shule nivyoweka hapa chini",
          "Kazi: andaa nguvu mbili na maboresho mawili kwa kila insha",
          "Kikomo: usiweke wala usibadilishe alama ya mwisho — mwalimu anaamua",
        ],
        required: [0, 1, 3],
        sampleEn:
          "Context: Grade 8 CBC history essay, 250 words. Rubric: use the four school rubric criteria I paste below. Task: draft two strengths and two improvements per essay. Constraint: never assign or change a final grade — the teacher decides.",
        sampleSw:
          "Muktadha: Darasa la 8 CBC historia, maneno 250. Rubriki: tumia vigezo vinne vya shule nivyoweka hapa chini. Kazi: andaa nguvu mbili na maboresho mawili kwa kila insha. Kikomo: usiweke wala usibadilishe alama — mwalimu anaamua.",
      }),
    ],
  },
  {
    id: "edu-i-u3",
    titleEn: "Feedback loops in learning",
    titleSw: "Mizunguko ya maoni kwenye kujifunza",
    cards: [
      reveal([
        {
          termEn: "Formative feedback",
          termSw: "Maoni ya ujenzi",
          defEn: "Feedback given during learning to improve the next attempt — what good AI tutoring should produce.",
          defSw: "Maoni yanayotolewa wakati wa kujifunza kuboresha jaribio lijalo — ndilo matokeo mazuri ya kufundisha kwa AI.",
        },
        {
          termEn: "Scaffolding",
          termSw: "Msingi wa hatua",
          defEn: "Structured support (hints, examples) that is reduced as the learner grows — not answers on demand.",
          defSw: "Msaada uliopangwa (vihint, mifano) unapungua mtakaso mwanafunzi anavyokua — si majibu ya papo hapo.",
        },
        {
          termEn: "Hallucinated source",
          termSw: "Chanzo cha kupewa",
          defEn: "A citation or fact invented by the model that does not exist — the classic study-tool failure.",
          defSw: "Rejeleo au ukweli uliotengenezwa na mfano usilipo — kosa la kawaida la zana za kusoma.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the tutor that gives answers",
        titleSw: "Hali: mkoachie anayetoa majibu",
        situationEn:
          "Two maths apps are available. App A returns the full worked solution instantly. App B asks the learner one guiding question at a time and only confirms the final answer.",
        situationSw:
          "Programu mbili za hesabu zipo. Programu A inatoa suluhisho kamili mara moja. Programu B inauliza swali moja la kuongoza kwa wakati na kuthibitisha jibu la mwisho tu.",
        questionEn: "Which design better supports learning, and why?",
        questionSw: "Mfano upi unaunga mkono kujifunza vizuri, na kwa nini?",
        optionsEn: [
          "App A — speed is everything",
          "App B — guiding questions build the reasoning the exam will test",
          "Both are identical in effect",
          "Neither; only textbooks teach",
        ],
        optionsSw: [
          "Programu A — kasi ndio kila kitu",
          "Programu B — maswali ya kuongoza hujenga utaftaji unaojaribiwa mtihanini",
          "Zote ni sawa",
          "Hakuna; vitabu tu ndivyo vinafundisha",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed of an answer is not the goal of practice; retention and transfer are.",
          "Correct — scaffolding matches how tutoring works: hint, attempt, confirm.",
          "Outcomes differ: copying a solution skips the reasoning step.",
          "Tools and textbooks serve different roles; both can help.",
        ],
        hintsSw: [
          "Kasi ya jibu si lengo la mazoezi; kukumbuka na kuhamisha maarifa ndilo lengo.",
          "Sahihi — msingi wa hatua unalingana na kufundisha: kidokezo, jaribio, uthibitisho.",
          "Matokeo yanatofautiana: kunakili suluhisho kunaruka hatua ya kufikiri.",
          "Zana na vitabu vina majukumu tofauti; vyote vinasaidia.",
        ],
        explainEn: "When choosing tools, ask: does this increase the learner's own thinking, or replace it?",
        explainSw: "Ukichagua zana, uliza: je huongeza fikra za mwanafunzi mwenyewe, au kuzibadilisha?",
      }),
      quiz(
        "A student asks an AI tutor for the answer to every exercise. The best classroom response is:",
        "Mwanafunzi anaomba jibu la kila zoezi kutoka kwa mkoachie wa AI. Jibu bora la darasani ni:",
        ["Confiscate the phone", "Set exercises that require showing reasoning, and teach disclosure of AI help", "Ignore it", "Give the whole class the answers too"],
        ["Chukua simu", "Weka zoezi zinazohitaji kuonyesha hoja, na fundisha kutambulisha msaada wa AI", "Puuza", "Wape darasa lote majibu pia"],
        1,
        "Design the task so reasoning must be visible, and teach honest use — that survives beyond one confiscated phone.",
        "Panga kazi ili hoja ionekane, na fundisha matumizi ya uwazi — hayo yanadumu zaidi ya simu moja iliyochukuliwa."
      ),
    ],
  },
];

// ---------------------------------------------------------------- BIZ (SDG 8)
export const bizIntermediateUnits: CurriculumUnit[] = [
  {
    id: "biz-i-u1",
    titleEn: "Forecasting for a small shop",
    titleSw: "Utabiri kwa duka dogo",
    cards: [
      note(
        "What demand forecasting needs",
        "Utabiri wa mahitaji unachohitaji",
        `A demand forecast estimates what customers will buy next week from what they bought before. Small businesses have an advantage and a weakness: records are simple, but sparse and seasonal. The forecast quality tracks record quality — M-Pesa statements and a simple daily sales log beat a complicated tool fed with guesses.

Worked example: a machinist in Nakuru logs daily sales of school uniforms in a notebook. Two years of data, split by term, lets a simple spreadsheet model forecast January demand within roughly 15% — accurate enough to order fabric. A downloaded 'AI sales app' with no local data did worse than the notebook, because it assumed patterns from other markets.`,
        `Utabiri wa mahitaji unakadiria wateja watanunua nini wiki ijayo kutoka walivyonunua zamani. Biashara ndogo zina faida na udhaifu: rekodi ni rahisi, lakini chache na za misimu ubora wa tabiri unafuata ubora wa rekodi — taarifa za M-Pesa na daftari la mauzo ya kila siku hushinda zana tata iliyojazwa makadirio.

Mfano halisi: mshonaji Nakuru andaandika mauzo ya sare za shule kila siku kwenye daftari. Data ya miaka miwili, imegawanywa kwa mihula, inaruhusu kokotoo rahisi kutabiri mahitaji ya Januari kwa makosa ya takribani 15% — ya kutosha kuagiza kitambaa. 'Programu ya AI ya mauzo' bila data ya eneo ilifanya vibaya kuliko daftari, kwa sababu ilidhani mifumo ya masoko mengine.`
      ),
      quiz(
        "Your shop's forecast says to stock 200 loaves tomorrow. Before ordering, the most important check is:",
        "Tabiri la duka yako linasema agoe mikate 200 kesho. Kabla kuagiza, ukaguzi muhimu zaidi ni:",
        ["Nothing — the machine already decided", "Recent local events: a strike, holiday, or road closure that the data may not include", "The colour of the forecast chart", "Whether the app has five stars"],
        ["Hakuna — mashine imeamua", "Matukio ya karibuni ya eneo: mgomo, sikukuu, au barabara iliyofungwa ambayo data haijajumuisha", "Rangi ya chati ya tabiri", "Kama programu ina nyota tano"],
        1,
        "Forecasts extrapolate the past. Known future shocks — holidays, closures, events — must be layered on by a human.",
        "Tabiri zinaendeleza yaliyopita. Mabadiliko yanayojulikana — sikukuu, kufungwa kwa barabara, matukio — lazima ziwekwe na mwanadamu."
      ),
    ],
  },
  {
    id: "biz-i-u2",
    titleEn: "Customer messaging with limits",
    titleSw: "Ujumbe wa wateja na vikomo",
    cards: [
      scenario({
        titleEn: "Scenario: the auto-reply that promised too much",
        titleSw: "Hali: auto-reply iliyoahidi mno",
        situationEn:
          "You configure an AI auto-reply for your shop's WhatsApp. A customer asks 'Will my couch be delivered tomorrow?' and the bot answers 'Yes, guaranteed tomorrow at 10am.' Delivery is actually managed by a boda rider's schedule.",
        situationSw:
          "Unapanga auto-reply ya AI kwa WhatsApp ya duka lako. Mteja anauliza 'Kitanda changu kitasafirishwa kesho?' na bot inajibu 'Ndiyo, hakika kesho saa 4 asubuhi.' Usafirishaji halisi unategemea ratiba ya rider wa boda.",
        questionEn: "What went wrong, and what is the fix?",
        questionSw: "Kilifanyaje vibaya, na suluhisho ni nini?",
        optionsEn: [
          "Nothing — confident answers attract customers",
          "The bot invented a guarantee it cannot verify; constrain it to share what is known and hand off the rest to a human",
          "Delete WhatsApp entirely",
          "Make the bot promise earlier delivery to look better",
        ],
        optionsSw: [
          "Hakuna — majibu ya kujiamini huvutia wateja",
          "Bot ilitunga ahadi isiyothibitisha; ikatinishe ishare kile kinachojulikana na ihamishishe yaliyobaki kwa mwanadamu",
          "Futa WhatsApp kabisa",
          "Iombe bot iahidi usafiri wa mapema ili ionekane bora",
        ],
        correctIndex: 1,
        hintsEn: [
          "Unverified promises create refunds, anger, and lost trust — expensive 'attractiveness'.",
          "Correct — restrict the bot to known facts, and route commitments to a person.",
          "Messaging channels are valuable; the problem is the bot's permissions, not the channel.",
          "Doubling down on invented promises multiplies the damage.",
        ],
        hintsSw: [
          "Ahadi zisizothibitishwa zinaleta marejesho, hasira, na kupoteza uaminifu — 'uvutaji' wenye gharama.",
          "Sahihi — kikomo bot ishare ukweli tu, na ahadi ziende kwa mtu.",
          "Njia za ujumbe ni muhimu; tatizo ni ruhusa za bot, si njia.",
          "Kuahidi zaidi kunazidisha uharibifu.",
        ],
        explainEn: "Rule for business bots: never let them state facts or make promises the business cannot verify in its records.",
        explainSw: "Kanuni ya bot za biashara: usiwaruhusu kusema ukweli au kuahidi jambo biashara haiwezi kuthibitisha kwenye rekodi zake.",
      }),
      pb({
        titleEn: "Build a bounded support prompt",
        titleSw: "Jenga prompt ya msaada yenye kikomo",
        introEn:
          "Now design the system instructions for that shop's auto-reply so it behaves. The prompt must define scope, tone, and the handoff rule.",
        introSw:
          "Sasa panga maelekezo ya mfumo ya bot ya duka ili itendeke vizuri. Prompt lazima iweke upeo, mtindo, na kanuni ya kuhamisha kwa mwanadamu.",
        goalEn: "Your prompt must state allowed topics, ban inventing delivery times, and require handoff for promises or complaints.",
        goalSw: "Prompt yako lazima iweke mada zinazoruhusiwa, ikataze kutunga saa za usafiri, na kuomba kuhamisha ahadi au malalamiko kwa mwanadamu.",
        blocksEn: [
          "Role: WhatsApp assistant for Mama Njeri's shop",
          "Allowed: opening hours, prices from today's price list, order status from the tracker",
          "Never invent: delivery times, refunds, or discounts not in the records",
          "Handoff: if the customer needs a promise, a refund, or is upset, connect to Mama Njeri",
        ],
        blocksSw: [
          "Jukumu: msaidizi wa WhatsApp wa duka la Mama Njeri",
          "Ruhusiwa: saa za kufungua, bei kutoka orodha ya leo, hali ya oda kutoka kifuatilio",
          "Usitunga kamwe: saa za usafiri, marejesho ya pesa, au punguzo zisizo kwenye rekodi",
          "Hamisha: kama mteja anahitaji ahadi, marejesho, au amechoka,unganisha na Mama Njeri",
        ],
        required: [0, 2, 3],
        sampleEn:
          "Role: WhatsApp assistant for Mama Njeri's shop. Allowed: opening hours, prices from today's price list, order status from the tracker. Never invent delivery times, refunds, or discounts not in the records. Handoff: promises, refunds, or upset customers go to Mama Njeri.",
        sampleSw:
          "Jukumu: msaidizi wa WhatsApp wa duka la Mama Njeri. Ruhusiwa: saa za kufungua, bei kutoka orodha ya leo, hali ya oda kutoka kifuatilio. Usitunga saa za usafiri, marejesho, au punguzo zisizo kwenye rekodi. Ahadi, marejesho, au wateja waliokasirika waende kwa Mama Njeri.",
      }),
    ],
  },
  {
    id: "biz-i-u3",
    titleEn: "Automation with a human checkout",
    titleSw: "Kiotomatiki na ukaguzi wa mwanadamu",
    cards: [
      reveal([
        {
          termEn: "Human-in-the-loop",
          termSw: "Mwanadamu kwenye mzunguko",
          defEn: "A workflow where the AI drafts or sorts, but a person approves anything that spends money or touches customers.",
          defSw: "Mtiririko ambapo AI inaandaa au kupanga, lakini mtu anaidhinisha kitu chochote kinachotumia pesa au kukaa na wateja.",
        },
        {
          termEn: "Fallback path",
          termSw: "Njia mbadala",
          defEn: "The pre-planned route when the tool fails or is offline — vital where networks drop.",
          defSw: "Njia iliyopangwa mapema ikizana ikishindwa au kutokuwa mtandaoni — muhimu ambapo mtandao hupotea.",
        },
        {
          termEn: "Audit log",
          termSw: "Kumbukumbu ya ukaguzi",
          defEn: "A simple record of what the tool did and who approved it, so disputes can be resolved with evidence.",
          defSw: "Kumbukumbu rahisi ya kilichofanyika na aliyeidhinisha, ili migogoro ishindiwe kwa uthibitisho.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the pricing agent and the fuel shortage",
        titleSw: "Hali: wakala wa bei na uhaba wa mafuta",
        situationEn:
          "An automated repricing tool connected to market data raises your grain prices 40% during a transport strike — technically correct, but your village depends on your stock and the county officer asks questions.",
        situationSw:
          "Zana ya kubadilisha bei kiotomatiki iliyounganishwa na data ya soko inapandisha bei za nafaka 40% wakati wa mgomo wa usafiri — kiufundi sahihi, lakini kijiji kinategemea akiba yako na afisa wa kaunti anauliza maswali.",
        questionEn: "What safeguard was missing?",
        questionSw: "Ulinzi gani ulikosekana?",
        optionsEn: [
          "A faster internet connection",
          "A human approval threshold: big changes above a set percentage need a person before going live",
          "More products in the shop",
          "A promise never to use AI again",
        ],
        optionsSw: [
          "Mtandao wa haraka zaidi",
          "Kikomo cha idhini ya mwanadamu: mabadiliko makubwa zaidi ya asilimia fulani yanahitaji mtu kabla ya kutumika",
          "Bidhaa zaidi dukani",
          "Ahadi ya kutotumia AI tena",
        ],
        correctIndex: 1,
        hintsEn: [
          "Network speed does not change what a tool is allowed to do.",
          "Correct — thresholds put community-sensitive judgement back in human hands.",
          "Stock size is unrelated to pricing governance.",
          "The tool is useful; it needed governance, not abandonment.",
        ],
        hintsSw: [
          "Kasi ya mtandao haibadilishi ruhusa za zana.",
          "Sahihi — vikomo vinarejesha uamuzi wenye hisia za jamii mikononi mwa mwanadamu.",
          "Ukubwa wa akiba hauna uhusiano na utawala wa bei.",
          "Zana ni nzuri; ilihitaji utawala, si kutupwa.",
        ],
        explainEn: "Automated decisions that affect a community need limits: thresholds, logs, and a person accountable.",
        explainSw: "Uamuzi wa kiotomatiki unaogusa jamii unahitaji vikomo: vikomo vya asilimia, kumbukumbu, na mtu anayejibu.",
      }),
      quiz(
        "Best first automation for a one-person business using AI is:",
        "Otomatiki bora ya kwanza kwa biashara ya mtu mmoja kwa kutumia AI ni:",
        ["Fully automated pricing with no review", "Drafting customer messages and invoices for human approval", "Automatic legal contracts", "Automatic salary payments"],
        ["Bei ya kiotomatiki bila ukaguzi", "Kuandaa ujumbe wa wateja na viankabu kwa idhini ya mwanadamu", "Mikataba ya kisheria ya kiotomatiki", "Malipo ya mshahara ya kiotomatiki"],
        1,
        "Start where errors are cheap and reversible — drafts reviewed by a human — before automating anything irreversible.",
        "Anza pale makosa ni rahisi na yanayoweza kubadilishwa — rasimu zinazokaguliwa na mtu — kabla ya ku-automate kitu kisichobadilika."
      ),
    ],
  },
];

// ---------------------------------------------------------------- CAP (SDG 17)
export const capIntermediateUnits: CurriculumUnit[] = [
  {
    id: "cap-i-u1",
    titleEn: "Framing a community problem",
    titleSw: "Kuweka tatizo la jamii katika mfumo",
    cards: [
      note(
        "Problem before model",
        "Tatizo kabla ya mfano",
        `A project succeeds when the problem is specific: who is affected, what the current workarounds cost, and what a good outcome looks like in numbers. 'AI for the community' is not a problem; 'reduce the 2-hour daily queue at the water point by predicting peak times' is. Framing also defines what you will NOT do — a boundary that keeps small projects shippable.

Worked example: a youth group in Kisumu chose 'help mama mboga reduce waste.' Too vague to build. Reframed: 'predict next-day vegetable demand per 10 vendors from their own sales notes, so they order less.' Now the data need, the users, and the success measure (less unsold stock) are all concrete.`,
        `Mradi unafanikiwa tatizo likiwa maalum: nani anaathiriwa, kazi ya sasa inagharimu nini, na matokeo mazuri yanaonekanaje kwa namba. 'AI kwa jamii' si tatizo; 'kupunguza foleni ya saa 2 kwenye mtaro wa maji kwa kutabiri saa za msongamano' ni tatizo. Kuweka mfumo kunafafua pia usitakachofanya — kikomo kinachobaki na mradi mdogo kukamilika.

Mfano halisi: kikundi cha vijana Kisumu kilichagua 'saidia mama mboga kupunguza upotevu.' Kigumu kujenga. Kimebadilishwa: 'tabiri mahitaji ya mboga ya kesho kwa wauzaji 10 kutoka kumbukumbu zao za mauzo, ili waagize kidogo.' Sasa haja ya data, watumiaji, na kipimo cha mafanikio (bidhaa isiyouzwa pungufu) ni dhahiri.`
      ),
      quiz(
        "Which is the best-framed project problem?",
        "Ni tatizo lipi la mradi limekaa vizuri zaidi?",
        ["Use AI to help people", "Predict peak hours at the borehole so the committee can adjust opening times", "Make a beautiful app", "Automate everything in the village"],
        ["Tumia AI kuwasaidia watu", "Tabiri saa za msongamano kwenye mtaro ili kamati irekebishe saa za kufungua", "Tengeneza programu ya kupendeza", "Otomatiki yote kijijini"],
        1,
        "A good framing names the users, the action they will change, and a measurable outcome.",
        "Mfamo mzuri unataja watumiaji, hatua watakayobadilisha, na kipimo cha matokeo."
      ),
    ],
  },
  {
    id: "cap-i-u2",
    titleEn: "Data plans and consent",
    titleSw: "Mpango wa data na idhini",
    cards: [
      scenario({
        titleEn: "Scenario: the vendor's sales notebook",
        titleSw: "Hali: daftari la mauzo la muuzaji",
        situationEn:
          "Your project needs ten vendors' daily sales. Two refuse to share — one fears the county will tax them, one fears neighbours will copy their stock choices.",
        situationSw:
          "Mradi wako unahitaji mauzo ya kila siku ya wauzaji kumi. Wawili wanakataa — mmoja anaogopa ushuru wa kaunti, mwingina anaogopa majirani watanakili mchaguo wake wa bidhaa.",
        questionEn: "What is the most responsible design change?",
        questionSw: "Mabadiliko yapi ya muundo yana uwajibikaji zaidi?",
        optionsEn: [
          "Copy their notebooks secretly from the market committee",
          "Redesign: aggregate and anonymise data so no vendor is identifiable, and let anyone opt out without losing access to the tool",
          "Drop the two vendors from the market",
          "Proceed — two refusals are not important",
        ],
        optionsSw: [
          "Nakili daftari zao kwa siri kutoka kamati ya soko",
          "Panga upya: jumlisha na ficha utambulisho wa data ili muuzaji yeyote asitambulike, na ruhusu kila mtu kukataa bila kupoteza zana",
          "Ondoa wauzaji hao wawili sokoni",
          "Endelea — kukataa kwa wawili si jambo kubwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Secret copying is a breach of trust and of data protection law.",
          "Correct — aggregation, anonymisation, and a genuine opt-out protect everyone and often improve participation.",
          "Punishing refusal poisons future projects.",
          "Refusals are signal: they tell you the design needs more protection, not less.",
        ],
        hintsSw: [
          "Unakili wa siri ni uvunaji wa uaminifu na wa sheria ya ulinzi wa data.",
          "Sahihi — kujumlisha, kuficha utambulisho, na ruhusa ya kutotumia yanalinda wote na mara nyingi huongeza ushiriki.",
          "Kuadhibu kukataa kunaharibu miradi ijayo.",
          "Kukataa ni ishara: inaonyesha muundo unahitaji ulinzi zaidi, si pungufu.",
        ],
        explainEn: "Consent that is easy to refuse and easy to withdraw is the difference between a project and an imposition.",
        explainSw: "Idhini inayoweza kukataliwa na kufutwa kwa urahisi ndiyo tofauti kati ya mradi na unywaji wa juu.",
      }),
      pb({
        titleEn: "Build a project pitch prompt",
        titleSw: "Jenga prompt ya kupasha mradi",
        introEn:
          "You want AI to help draft a one-page pitch for the chiefs' baraza. The prompt must force honesty: no invented numbers, no overpromising.",
        introSw:
          "Unataka AI isaidie kuandaa kurasa moja ya kupasha mradi kwa baraza la wachifu. Prompt lazima ilazimishe uwazi: hakuna namba za kutungwa, hakuna kuahidi mno.",
        goalEn: "Your prompt must define the audience, request a problem-solution-metric structure, and ban invented statistics.",
        goalSw: "Prompt yako lazima iweke hadhira, iombe muundo wa tatizo-suluhisho-kipimo, na ikataze takwimu za kutungwa.",
        blocksEn: [
          "Audience: village baraza and the county youth office",
          "Structure: problem, solution, data plan, success metric, risks",
          "Use only: numbers from our vendor pilot; mark anything else as estimate",
          "Tone: plain Kiswahili, one page maximum",
        ],
        blocksSw: [
          "Hadhira: baraza la kijiji na ofisi ya vijana ya kaunti",
          "Muundo: tatizo, suluhisho, mpango wa data, kipimo cha mafanikio, hatari",
          "Tumia tu: namba kutoka jaribio letu la wauzaji; weka alama 'makadirio' kwa nyingine",
          "Mtindo: Kiswahili rahisi, kurasa moja hadi",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Audience: village baraza and the county youth office. Structure: problem, solution, data plan, success metric, risks. Use only numbers from our vendor pilot; mark anything else as estimate. Tone: plain Kiswahili, one page maximum.",
        sampleSw:
          "Hadhira: baraza la kijiji na ofisi ya vijana ya kaunti. Muundo: tatizo, suluhisho, mpango wa data, kipimo cha mafanikio, hatari. Tumia tu namba kutoka jaribio letu la wauzaji; weka alama 'makadirio' kwa nyingine. Mtindo: Kiswahili rahisi, kurasa moja hadi.",
      }),
    ],
  },
  {
    id: "cap-i-u3",
    titleEn: "Pilot and honest evaluation",
    titleSw: "Jaribio na tathmini ya kweli",
    cards: [
      reveal([
        {
          termEn: "Pilot",
          termSw: "Jaribio dogo",
          defEn: "A small, time-boxed real trial with agreed success criteria before wider rollout.",
          defSw: "Jaribio halisi dogo lenye muda na vigezo vya mafanikio vilivyokubaliwa kabla ya kueneza.",
        },
        {
          termEn: "Baseline",
          termSw: "Mstari wa msingi",
          defEn: "The 'before' measurement that lets you prove the project changed anything at all.",
          defSw: "Kipimo cha 'kabla' kinachoruhusu uthibitisho kuwa mradi ulibadilisha chochote.",
        },
        {
          termEn: "Survivorship bias",
          termSw: "Upendeleo wa waliofanikiwa",
          defEn: "Judging a tool only by people who kept using it — ignoring those who quit, often the unhappy ones.",
          defSw: "Kuhukumu zana kwa watu walioendelea kuitumia tu — kupuuza walioacha, mara nyingi waliohofi.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the pilot that 'worked'",
        titleSw: "Hali: jaribio 'lililofanikiwa'",
        situationEn:
          "After your water-point pilot, 6 of 20 users say it saved them time. You are tempted to declare success at the baraza.",
        situationSw:
          "Baada ya jaribio la mtaro wa maji, watumiaji 6 kati ya 20 wanasema liliwapunguzia muda. Unatamani kutangaza mafanikio barazani.",
        questionEn: "What must you check before claiming success?",
        questionSw: "Unachekaje nini kabla ya kudai mafanikio?",
        optionsEn: [
          "Nothing — six positive voices are enough",
          "The baseline, why 14 stopped or saw no change, and whether 6/20 beats the agreed success criterion",
          "Whether the app looks modern",
          "Only the opinion of the chief",
        ],
        optionsSw: [
          "Hakuna — sauti sita chanya zinatosha",
          "Mstari wa msingi, kwa nini 14 waliacha au hawakuona mabadiliko, na kama 6/20 imevuka kigezo kilichokubaliwa",
          "Kama programu inaonekana ya kisasa",
          "Maoni ya mchifu pekee",
        ],
        correctIndex: 1,
        hintsEn: [
          "Selected praise without the missing 14 is survivorship bias.",
          "Correct — honest evaluation compares against baseline and the pre-agreed criterion, including dropouts.",
          "Appearance does not measure community benefit.",
          "One voice — however respected — is not evaluation.",
        ],
        hintsSw: [
          "Sifa za kuchagua bila ishirini walioshapuuza ni upendeleo wa waliofanikiwa.",
          "Sahihi — tathmini ya kweli inalinganisha na msingi na kigezo kilichokubaliwa, ikijumuisha walioacha.",
          "Muonekano haupimi manufaa ya jamii.",
          "Sauti moja — hata ikiwa inaheshimika — si tathmini.",
        ],
        explainEn: "Honest pilots build trust even when results are mixed; inflated claims destroy the next project's credibility.",
        explainSw: "Majaribio ya kweli hujenga uaminifu hata matokeo yakichanganyika; madai yaliyoinuliwa huharibu uaminifu wa mradi ujao.",
      }),
      quiz(
        "The cheapest trustworthy evaluation for a small community project is:",
        "Tathmini ya kuaminika na ya nafuu zaidi kwa mradi mdogo wa jamii ni:",
        ["A university-grade randomised trial", "A clear baseline, a simple before/after measure, and interviews with users who stopped", "Asking friends for compliments", "Screenshotting downloads"],
        ["Jaribio la darasa la chuo kikuu", "Mstari wa msingi wazi, kipimo rahisi cha kabla/baada, na mazungumzo na watumiaji walioacha", "Kuuliza marafiki sifa", "Kupiga picha ya idadi ya kupakuliwa"],
        1,
        "Small projects earn credibility with baselines and drop-out interviews — methods that fit their size and budget.",
        "Miradi midogo hupata uaminifu kwa mstari wa msingi na mazungumzo na walioacha — njia zinazolingana na ukubwa na bajeti yao."
      ),
    ],
  },
];
