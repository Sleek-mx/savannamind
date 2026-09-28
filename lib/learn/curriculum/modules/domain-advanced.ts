import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Domain-specific advanced tracks — authored per domain (not re-wrapped
 * foundation content), assuming learners who build or teach with AI.
 */

// ---------------------------------------------------------------- AGR (SDG 2)
export const agrAdvancedUnits: CurriculumUnit[] = [
  {
    id: "agr-a-u1",
    titleEn: "Imaging pipelines for the field",
    titleSw: "Mifumo ya picha shambani",
    cards: [
      note(
        "From photo to decision, end to end",
        "Kutoka picha hadi uamuzi, mwanzo hadi mwisho",
        `A field imaging pipeline is: capture (phone or drone, with lighting and distance discipline), preprocessing (crop, resize, colour correction), inference (on-device or via API), and decision support (a ranked result the agronomist confirms). Most field failures live in capture and preprocessing, not the model — glare, shadow, and inconsistent distance silently destroy accuracy.

Worked example: a cassava-disease model scores 91% on station photos. On-farm it drops to 70% until the team standardises capture: same hand position, indirect light, one leaf per frame. Accuracy recovers to 85% without retraining. Pipeline discipline beat model complexity.`,
        `Mfumo wa picha shambani ni: kupiga (simu au drone, kwa nidhamu ya mwanga na umbali), maandalizi (kukata, kubadilisha ukubwa, kurekebisha rangi), utabiri (kifaa au API), na msaada wa uamuzi (matokeo yaliyopangwa agronomi anayathibitisha). Kushindwa mara nyingi kiko kwenye kupiga na maandalizi, si mfano — kung'aa, kivuli, na umbali usiolingana huharibu usahihi kimya.

Mfano halisi: mfano wa magonjwa ya muhogo unapata 91% kwenye picha za kituo. Shambani unashuka 70% mpaka timu ipange kupiga: mkono uleule, mwanga wa kawaida, jani moja kwa picha. Unarudi 85% bila kufunza upya. Nidhamu ya mfumo ilishinda utata wa mfano.`
      ),
      quiz(
        "On-farm accuracy drops despite a strong model. The first thing to audit is:",
        "Usahihi shambani unashuka licha ya mfano imara. Jambo la kwanza kukaguliwa ni:",
        ["The model's licence", "Capture conditions: light, distance, framing across real users", "The programming language", "The colour of the app icon"],
        ["Leseni ya mfano", "Masharti ya kupiga: mwanga, umbali, umbo kwa watumiaji halisi", "Lugha ya programu", "Rangi ya ikoni ya programu"],
        1,
        "Distribution shift between station capture and field capture is the top suspect; audit the pipeline before the model.",
        "Tofauti ya data kati ya kituo na shamba ndiyo shaka kuu; kagua mfumo kabla ya mfano."
      ),
    ],
  },
  {
    id: "agr-a-u2",
    titleEn: "Deployment where networks fail",
    titleSw: "Kutekeleza ambapo mtandao hupatikana",
    cards: [
      scenario({
        titleEn: "Scenario: the offline demo",
        titleSw: "Hali: onyesho bila mtandao",
        situationEn:
          "You demo a cloud-only crop advisory at a field day in a ward with intermittent 2G. It fails live. A farmer asks why you brought a tool that needs what her village does not have.",
        situationSw:
          "Unaonyesha ushauri wa mazao wa wingu kwenye siku ya shamba kwenye kata yenye mtandao wa 2G unaokatika. Unashindwa live. Mkulima anauliza kwa nini ulileta zana inayohitaji jambo kijiji chake hachipati.",
        questionEn: "What is the sound engineering response?",
        questionSw: "Jibu sahihi la uhandisi ni lipi?",
        optionsEn: [
          "Blame the network provider",
          "Design for the environment: on-device or cached inference, offline-first data capture, sync when connected",
          "Cancel the project",
          "Tell farmers to move to town",
        ],
        optionsSw: [
          "Laumu mtoa huduma wa mtandao",
          "Panga kwa mazingira: utabiri kwenye kifaa au kwenye kumbukumbu, kukusanya data bila mtandao, kusawazisha ukirejea",
          "Futa mradi",
          "Waambie wakulima waende mjini",
        ],
        correctIndex: 1,
        hintsEn: [
          "The provider is not the design constraint you control; your architecture is.",
          "Correct — offline-first is a requirement, not a nicety, for rural East African deployment.",
          "The problem was solvable; abandoning helps nobody.",
          "Technology serves people where they are, not the reverse.",
        ],
        hintsSw: [
          "Mtoa huduma si kikomo unachodhibiti; usanifu wako ndio.",
          "Sahihi — offline-first ni sharti, si pupa, kwa utekelezaji vijijini Afrika Mashariki.",
          "Tatizo lilikuwa na suluhisho; kufuta hakusaidii.",
          "Teknolojia inawatumikia watu walipo, si kinyume.",
        ],
        explainEn: "Offline-first, sync-later is the default architecture for most Kenyan field deployments.",
        explainSw: "Offline-first, kusawazisha baadaye ni usanifu wa kawaida kwa utekelezaji wa mashambani Kenya.",
      }),
      pb({
        titleEn: "Build a model-card prompt",
        titleSw: "Jenga prompt ya model card",
        introEn:
          "A model card documents a model honestly for its deployers. Draft one with AI — but the prompt must force it to use only facts you supply.",
        introSw:
          "Model card inaandika ukweli wa mfano kwa watekelezaji wake. Iandae kwa AI — lakini prompt lazima ilazimishe kutumia ukweli ulioutoa wewe tu.",
        goalEn: "Your prompt must supply the facts, demand sections (intended use, limits, data, evaluation), and ban invented numbers.",
        goalSw: "Prompt yako lazima itoe ukweli, iombe sehemu (matumizi, vikomo, data, tathmini), na ikataze namba za kutungwa.",
        blocksEn: [
          "Facts: maize disease classifier, trained on 8,000 photos from 3 counties, 85% field accuracy",
          "Sections: intended use, out-of-scope uses, known limits, evaluation summary",
          "Rule: use only the facts above; if a section lacks data, write 'not yet evaluated'",
          "Audience: agronomy extension officers, plain language",
        ],
        blocksSw: [
          "Ukweli: ainishaji wa magonjwa ya mahindi, uliofunzwa kwa picha 8,000 kutoka kaunti 3, usahihi shambani 85%",
          "Sehemu: matumizi yaliyokusudiwa, matumizi yasiyo ya kawaida, vikomo vinavyojulikana, muhtasari wa tathmini",
          "Kanuni: tumia ukweli uliotajwa tu; kama sehemu haina data, andika 'haijatathminiwa'",
          "Hadhira: maafisa wa ugavi, lugha rahisi",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Facts: maize disease classifier, trained on 8,000 photos from 3 counties, 85% field accuracy. Sections: intended use, out-of-scope uses, known limits, evaluation summary. Rule: use only the facts above; if a section lacks data, write 'not yet evaluated'. Audience: agronomy extension officers, plain language.",
        sampleSw:
          "Ukweli: ainishaji wa magonjwa ya mahindi, picha 8,000 kutoka kaunti 3, usahihi 85%. Sehemu: matumizi, matumizi yasiyo ya kawaida, vikomo, muhtasari wa tathmini. Kanuni: tumia ukweli uliotajwa tu; kama sehemu haina data, andika 'haijatathminiwa'. Hadhira: maafisa wa ugavi, lugha rahisi.",
      }),
    ],
  },
  {
    id: "agr-a-u3",
    titleEn: "Monitoring drift between seasons",
    titleSw: "Kufuatilia mabadiliko kati ya misimu",
    cards: [
      reveal([
        {
          termEn: "Data drift",
          termSw: "Mabadiliko ya data",
          defEn: "Input patterns shift over time (new weather, new variants) so yesterday's accuracy no longer holds.",
          defSw: "Mifumo ya ingizo inabadilika (hali ya hewa mpya, aina mpya) hivi kwamba usahihi wa jana hautoshi leo.",
        },
        {
          termEn: "Feedback loop",
          termSw: "Mzunguko wa maoni",
          defEn: "Model outputs influence future data (advisories change planting), which can silently retrain the system on its own advice.",
          defSw: "Matokeo ya mfano yanaathiri data ijayo (mashauri hubadilisha kupanda), na kunaweza kufunza mfumo kwa ushauri wake mwenyewe.",
        },
        {
          termEn: "Champion–challenger",
          termSw: "Bingwa–mchangani",
          defEn: "Keeping a new candidate model running quietly beside the live one, promoting it only when it beats the current model on real data.",
          defSw: "Kuweka mfano mpya ufanye kazi kwa kimya pembeni ya uhai, na kuutangaza tu ukipita wa sasa kwenye data halisi.",
        },
      ]),
      quiz(
        "After one rainy season your disease classifier's field accuracy falls. The most likely cause is:",
        "Baada ya msimu mmoja wa mvua, usahihi wa ainishaji wako unashuka. Sababu yenye uwezekano mkubwa ni:",
        ["Users became lazier", "Data drift: new weather and disease patterns the training set never saw", "The API key expired", "Farmers deleted the app"],
        ["Watumiaji wamelegea", "Mabadiliko ya data: hali ya hewa na magonjwa mapya seti ya mafunzo haijawahi kuona", "Ufunguo wa API uliisha", "Wakulima walifuta programu"],
        1,
        "Agriculture is seasonal by nature — plan periodic retraining with fresh local samples as routine maintenance, not emergency.",
        "Kilimo ni cha misimu — panga kufunza upya kwa mifano mipya ya eneo kama matunzo ya kawaida, si dharura."
      ),
    ],
  },
];

// ---------------------------------------------------------------- HLT (SDG 3)
export const hltAdvancedUnits: CurriculumUnit[] = [
  {
    id: "hlt-a-u1",
    titleEn: "Imaging support and its limits",
    titleSw: "Msaada wa picha na vikomo vyake",
    cards: [
      note(
        "What imaging models can and cannot carry",
        "Mifano ya picha inayoweza na isiyoweza kubeba",
        `Retinal, skin, and chest-imaging models can rank findings and prioritise queues, but sensitivity and specificity trade off against each other: tune for catching every possible case (high sensitivity) and false alarms rise; tune for precision and you will miss cases. Which setting is right is a clinical policy decision, not a technical one — screening camps tolerate false alarms better than busy referral clinics do.

Worked example: a TB-screening model set to high sensitivity flags 30% of a camp's X-rays for human review. Reviewers are angry about the workload — but the setting is why missed cases approached zero. The governance meeting, not the engineer, owns that dial.`,
        `Mifano ya retinal, ngozi, na kifua inaweza kupanga matokeo na kipaumbele cha foleni, lakini uwezo wa kugundua na usahihi hubadilishana: ukilenga kugundua kila kesi (sensitivity ya juu) vikoso vya uyani huongezeka; ukilenga usahihi unakosa kesi. Ipasiweje ni uamuzi wa sera ya kliniki, si wa kiufundi — kambi za uchunguzi vinavyovumilia uyani zaidi kuliko kliniki za rufaa zenye shughuli.

Mfano halisi: mfano wa uchunguzi wa TB uliowekwa sensitivity ya juu unaonyesha 30% ya eksirei za kambi kwa ukaguzi wa mwanadamu. Wakaguzi wanakasirika kwa kazi — lakini mpangilio huo ndio uliofanya kesi zilizopotea kufikia sifuri. Mkutano wa utawala, si mhandisi, anaoumiza kipenyo hicho.`
      ),
      quiz(
        "Raising a screening model's sensitivity will:",
        "Kupandisha sensitivity ya mfano wa uchunguzi kutafanya:",
        ["Catch more true cases and raise false alarms", "Make the model 100% correct", "Reduce the need for clinicians", "Lower data-privacy risks"],
        ["Gundua kesi halisi zaidi na ongeza vikoso vya uyani", "Fanya mfano kuwa sahihi 100%", "Punguza haja ya wataalamu", "Punguza hatari za faragha"],
        0,
        "Sensitivity and specificity pull in opposite directions; the operating point is a clinical-governance choice.",
        "Sensitivity na specificity hivutana; kiwango cha kufanya kazi ni uamuzi wa utawala wa kliniki."
      ),
    ],
  },
  {
    id: "hlt-a-u2",
    titleEn: "Clinical governance for AI tools",
    titleSw: "Utawala wa kliniki kwa zana za AI",
    cards: [
      scenario({
        titleEn: "Scenario: the vendor asks for a blanket endorsement",
        titleSw: "Hali: muuzaji anataka idhini ya jumla",
        situationEn:
          "A vendor offers your facility free analytics software if the medical superintendent signs a letter 'endorsing the AI tool for all clinical uses.' No local validation study exists.",
        situationSw:
          "Muuzaji anatoa programu huru ya uchambuzi kama msimamizi wa matibabu atiasini barua 'kuunga mkono zana ya AI kwa matumizi yote ya kliniki.' Hakuna tathmini ya ndani iliyofanywa.",
        questionEn: "What is the defensible position?",
        questionSw: "Nafasi inayoweza kujilinda ni ipi?",
        optionsEn: [
          "Sign — free software helps patients",
          "Refuse blanket endorsement: run a scoped local evaluation with defined use cases, document results, then endorse only what was tested",
          "Sign but hope nobody checks",
          "Use it quietly without any review",
        ],
        optionsSw: [
          "Signia — programu huru inawanufaisha wagonjwa",
          "Kataa idhini ya jumla: fanya tathmini ya ndani yenye matumizi yaliyofafanuliwa, andika matokeo, kisha ungaza tu kilichopimwa",
          "Signia na kuomba hakuna atakayekagua",
          "Tumia kimya bila ukaguzi wowote",
        ],
        correctIndex: 1,
        hintsEn: [
          "Uncosted endorsement can cost credibility — and patients — when the tool errs outside tested use.",
          "Correct — scoped evaluation then scoped endorsement is the governance standard.",
          "Undocumented use transfers all liability to the facility and its leaders.",
          "Quiet use is the worst option: no evaluation, no oversight, no recourse.",
        ],
        hintsSw: [
          "Idhini isiyopimwa inaweza kugharamia uaminifu — na wagonjwa — zana ikikosea nje ya matumizi yaliyopimwa.",
          "Sahihi — tathmini ya wigo kisha idhini ya wigo ni kiwango cha utawala.",
          "Matumizi bila nyaraka yanaelekeza uwajibikaji wote kwa kituo na viongozi vyake.",
          "Matumizi kimya ni mbaya zaidi: hakuna tathmini, hakuna usimamizi, hakuna suluhisho.",
        ],
        explainEn: "Endorsement should mirror evidence: a tool is endorsed for the uses and populations actually evaluated.",
        explainSw: "Uunga mkono unapaswa kulingana na uthibitisho: zana inaungwa mkono kwa matumizi na watu waliopimwa.",
      }),
      pb({
        titleEn: "Build an incident-report prompt",
        titleSw: "Jenga prompt ya kuripoti tukio",
        introEn:
          "When an AI tool misleads a clinician, the incident must be documented so patterns emerge. Draft the reporting prompt.",
        introSw:
          "Zana ya AI ikimwepua mtaalamu, tukio lazima liandikwe ili mifumo ionekane. Andaa prompt ya kuripoti.",
        goalEn: "Your prompt must capture what the tool claimed, what the clinician observed, the patient-safety impact class, and must exclude patient identifiers.",
        goalSw: "Prompt yako lazima ikamate alidai la zana, lilionekana na mtaalamu, daraja la athari kwa mgonjwa, na lisijumuishe vitambulisho vya mgonjwa.",
        blocksEn: [
          "Capture: tool name and version, what it output, what the clinician observed",
          "Classify impact: no harm / near-miss / harm reached patient",
          "Exclude: patient names, IDs, phone numbers, or any identifier",
          "End with: three questions for the vendor and a suggested review date",
        ],
        blocksSw: [
          "Kamate: jina na toleo la zana, ilichotoa, mtaalamu aliliona",
          "Panga athari: hakuna madhara / karibu kosa / madhara yalimfika mgonjwa",
          "Usijumuishe: majina ya wagonjwa, ID, namba za simu, au kitambulisho chochote",
          "Maliza: maswali matatu kwa muuzaji na tarehe ya kupendekeza ya ukaguzi",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Capture: tool name and version, what it output, what the clinician observed. Classify impact: no harm / near-miss / harm reached patient. Exclude patient names, IDs, phone numbers, or any identifier. End with: three questions for the vendor and a suggested review date.",
        sampleSw:
          "Kamate: jina na toleo la zana, ilichotoa, mtaalamu aliliona. Panga athari: hakuna madhara / karibu kosa / madhara yalimfika mgonjwa. Usijumuishe vitambulisho vya mgonjwa. Maliza: maswali matatu kwa muuzaji na tarehe ya ukaguzi.",
      }),
    ],
  },
  {
    id: "hlt-a-u3",
    titleEn: "Equity in health AI",
    titleSw: "Usawa kwenye AI ya afya",
    cards: [
      reveal([
        {
          termEn: "Dataset skew",
          termSw: "Upendeleo wa data",
          defEn: "Training data that under-represents some populations (rural, older, darker skin tones) and performs worse for them.",
          defSw: "Data ya mafunzo isiyoiwakilisha baadhi ya makundi (vijijini, wazee, rangi za ngozi za giza) na kufanya vibaya kwao.",
        },
        {
          termEn: "Access gap",
          termSw: "Pengo la ufikiaji",
          defEn: "A tool that assumes smartphones, literacy, or English excludes the patients who need it most.",
          defSw: "Zana inayodhani simu janja, uwezo wa kusoma, au Kiingereza inawatenga wagonjwa wanaohitaji zaidi.",
        },
        {
          termEn: "Subgroup evaluation",
          termSw: "Tathmini kwa makundi",
          defEn: "Measuring performance separately per age, sex, region, and device — averages hide harm.",
          defSw: "Kupima utendaji kwa kila kikoo (umri, jinsia, eneo, kifaa) — wastani huficha madhara.",
        },
      ]),
      scenario({
        titleEn: "Scenario: great averages, failing subgroups",
        titleSw: "Hali: wastani mzuri, makundi yanashindwa",
        situationEn:
          "A maternal-risk model reports 86% average accuracy countywide. A nurse from a remote ward reports it 'never works for our mothers.' County records show most training data came from two urban hospitals.",
        situationSw:
          "Mfano wa hatari ya uzazi unaripoti usahihi wa wastani 86% kauntini. Muuguzi wa kata ya mbali anaripoti 'haifanyi kazi kwa akina mama wetu.' Rekodi za kaunti zinaonyesha data ya mafunzo kutoka hospitali mbili za mjini.",
        questionEn: "First corrective step?",
        questionSw: "Hatua ya kwanza ya kurekebisha?",
        optionsEn: [
          "Tell the nurse the average is 86%",
          "Run subgroup evaluation by region and facility type; restrict or retrain where performance fails",
          "Rename the model",
          "Collect more data from urban hospitals",
        ],
        optionsSw: [
          "Mwambie muuguzi wastani ni 86%",
          "Fanya tathmini kwa kikoo (eneo, aina ya kituo); kikomoisha au funza upya pale utendaji unaposhindwa",
          "Ipe jina jipya mfano",
          "Kusanya data zaidi kutoka hospitali za mjini",
        ],
        correctIndex: 1,
        hintsEn: [
          "Quoting the average to a failing ward dismisses real evidence.",
          "Correct — subgroup evaluation converts the complaint into a measurable finding, then scope or retrain follows.",
          "Renaming changes nothing about performance.",
          "More urban data widens the skew instead of closing it.",
        ],
        hintsSw: [
          "Kumtabiri muuguzi wastani wakati kata inashindwa ni kupuuza uthibitisho halisi.",
          "Sahihi — tathmini kwa kikoo hubadilisha malalamiko kuwa matokeo yanayopimwa, kisha kikomo au kufunza upya kunafuata.",
          "Jina hakibadilishi utendaji.",
          "Data zaidi ya mjini inaongeza upendeleo, haufugi.",
        ],
        explainEn: "Report and act per subgroup; an average that hides a failing ward is an unsafe average.",
        explainSw: "Ripoti na tenda kwa kikoo; wastani unaoziba kata inayoshindwa si wastani salama.",
      }),
      quiz(
        "The most equitable deployment choice for a rural facility with low literacy is:",
        "Utekelezaji wenye usawa zaidi kwa kituo cha vijijini wenye uwezo mdogo wa kusoma ni:",
        ["An English-only dashboard", "Voice or icon-driven output in the local language with clinician confirmation", "No tool at all", "A printed manual in English"],
        ["Dashibodi ya Kiingereza tu", "Sauti au ikoni kwa lugha ya eneo na uthibitisho wa mtaalamu", "Hakuna zana kabisa", "Mwongozo wa kuchapishwa wa Kiingereza"],
        1,
        "Access design — language, modality, and who confirms — is as much an equity decision as the model itself.",
        "Usanifu wa ufikiaji — lugha, njia, na nani anayethibitisha — ni uamuzi wa usawa kama mfano mwenyewe."
      ),
    ],
  },
];

// ---------------------------------------------------------------- EDU (SDG 4)
export const eduAdvancedUnits: CurriculumUnit[] = [
  {
    id: "edu-a-u1",
    titleEn: "Building grounded tutors",
    titleSw: "Kujenga wakooachie wenye msingi",
    cards: [
      note(
        "RAG for the classroom",
        "RAG darasani",
        `A grounded tutor chains retrieval with generation: approved material is chunked and indexed; the student's question retrieves the relevant chunks; the model answers using only those chunks and cites them. Design decisions that matter: chunk size (a paragraph vs a page), which documents are approved, and what happens when retrieval finds nothing — a good tutor says 'not in the approved material' instead of improvising.

Worked example: a CBC revision bot answers physics questions from the approved textbook only. When asked about content from a rival syllabus, it replies 'not covered in your approved material.' That refusal is a feature: it protects learners from out-of-scope teaching.`,
        `Mkooachie wenye msingi hunachanganya utafutaji na utengenezaji: vifaa vilivyoidhinishwa hugawanywa na kuorodheshwa; swali la mwanafunzi linapata vipande vinavyohusika; mfano hujibu kwa vipande hivyo tu na kuvitaja. Uamuzi muhimu: ukubwa wa kipande (aya au ukurasa), nyaraka zipye zilizoidhinishwa, na kinachotokea utafutaji ukikosa — mkooachie mzuri anasema 'haipo kwenye vifaa vilivyoidhinishwa' badala ya kutunga.

Mfano halisi: bot ya marudio ya CBC inajibu maswali ya fizikia kutoka kitabu kilichoidhinishwa tu. Ikiulizwa mada ya mtaala mwingine, inajibu 'haipatikani kwenye vifaa vyako.' Ukanushi huo ni kipengele: unalinda wanafunzi kutoka kufundishwa nje ya wigo.`
      ),
      quiz(
        "The most important tutor behaviour when retrieval finds no relevant passage is to:",
        "Tabia muhimu zaidi ya mkooachie utafutaji ukikosa kifungu ni:",
        ["Answer from general knowledge anyway", "Say the answer is not in the approved material and refer to the teacher", "Lower the retrieval threshold silently", "Invent a plausible citation"],
        ["Jibu kwa maarifa ya jumla hata hivyo", "Sema jibu halipo kwenye vifaa vilivyoidhinishwa na mrejelea mwalimu", "Punguza kikomo cha utafutaji kimya", "Tenga rejeleo linaloonekana la kweli"],
        1,
        "Graceful refusal is what separates a grounded tutor from a confident hallucinator.",
        "Ukanushi wa heshima ndio unatofautisha mkooachie wenye msingi na mtungaji mwenye kujiamini."
      ),
    ],
  },
  {
    id: "edu-a-u2",
    titleEn: "Learning analytics and consent",
    titleSw: "Uchambuzi wa kujifunza na idhini",
    cards: [
      scenario({
        titleEn: "Scenario: the dashboards parents see",
        titleSw: "Hali: dashibodi ambazo wazazi wanaona",
        situationEn:
          "Your school app shows parents an AI 'effort score' per child, derived from keystrokes and time-on-task. Some parents compare scores publicly; one child is humiliated.",
        situationSw:
          "Programu ya shule inaonyesha wazazi 'alama ya juhudi' ya AI kwa kila mtoto, inayokokotwa kwa uchunguzi wa kubonyeza na muda wa kazi. Baadhi ya wazazi wanalinganisha alama hadharani; mtoto mmoja anadharauliwa.",
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
          "Correct — derived metrics shown publicly need validity evidence, consent, and a harm review; most 'effort scores' lack all three.",
          "Accuracy is unrelated to whether the score should exist.",
          "Data always serves some purpose; that purpose is the design decision.",
        ],
        hintsSw: [
          "Madhara yalitoka kwa uamuzi wa shule kufichua, si vifaa.",
          "Sahihi — vipimo vinavyotokana vinavyoonyeshwa hadharani vinahitaji uthibitisho, idhini, na ukaguzi wa madhara; 'alama za juhudi' nyingi havina hivyo.",
          "Usahihi hauna uhusiano na kama alama inapaswa kuwepo.",
          "Data inahudumia lengo fulani; lengo hilo ni uamuzi wa usanifu.",
        ],
        explainEn: "Learning analytics serve the learner first; visibility to others is a separate, consent-gated decision.",
        explainSw: "Uchambuzi wa kujifunza unahudumia mwanafunzi kwanza; kuonekana kwa wengine ni uamuzi tofauti, unaotegemea idhini.",
      }),
      pb({
        titleEn: "Build a privacy-preserving analytics prompt",
        titleSw: "Jenga prompt ya uchambuzi bila faragha",
        introEn:
          "You want AI help analysing class performance patterns without exposing individual learners. Design the prompt.",
        introSw:
          "Unataka AI isaidie kuchambua mifumo ya utendaji wa darasa bila kufichua wanafunzi binafsi. Panga prompt.",
        goalEn: "Your prompt must require aggregated-only output, define minimum group size, and exclude names or identifiers.",
        goalSw: "Prompt yako lazima iombe matokeo ya jumla tu, iweke idadi ndogo ya kikundi, na itoe majina au vitambulisho.",
        blocksEn: [
          "Input: anonymised scores by topic and week (no names)",
          "Output: patterns per topic only — never rank or identify individuals",
          "Rule: any group smaller than 5 learners is merged into 'other'",
          "Ask for: two teaching adjustments per weak topic",
        ],
        blocksSw: [
          "Ingizo: alama zisizo na majina kwa mada na wiki",
          "Matokeo: mifumo kwa mada tu — usiwahi kupanga wala kutambulisha mtu",
          "Kanuni: kikundi kidogo ya wanafunzi 5 kiunganishwe na 'wengine'",
          "Omba: marekebisho mawili ya kufundisha kwa kila mada dhaifu",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Input: anonymised scores by topic and week (no names). Output: patterns per topic only — never rank or identify individuals. Rule: any group smaller than 5 learners is merged into 'other'. Ask for two teaching adjustments per weak topic.",
        sampleSw:
          "Ingizo: alama zisizo na majina kwa mada na wiki. Matokeo: mifumo kwa mada tu — usiwahi kupanga wala kutambulisha mtu. Kanuni: kikundi chini ya wanafunzi 5 kiunganishwe na 'wengine'. Omba marekebisho mawili kwa kila mada dhaifu.",
      }),
    ],
  },
  {
    id: "edu-a-u3",
    titleEn: "Teaching teachers",
    titleSw: "Kufundisha walimu",
    cards: [
      reveal([
        {
          termEn: "TPACK lens",
          termSw: "Mwanga wa TPACK",
          defEn: "Planning tool use at the crossing of technology, pedagogy, and content — not technology alone.",
          defSw: "Kupanga matumizi ya zana kwenye mchanganyiko wa teknolojia, ufundishaji, na maudhui — si teknolojia pekee.",
        },
        {
          termEn: "Critical evaluation habit",
          termSw: "Tabia ya tathmini ya makusudi",
          defEn: "The trained reflex of asking: what source, what evidence, who benefits — before accepting any AI output.",
          defSw: "Mazoea yaliyofunzwa ya kuuliza: chanzo gani, uthibitisho gani, nani ananufaika — kabla kukubali matokeo ya AI.",
        },
        {
          termEn: "Disclosure norm",
          termSw: "Kanuni ya kutambulisha",
          defEn: "A shared classroom rule that AI use is named openly, with permitted uses defined in advance.",
          defSw: "Kanuni ya darasa kuwa matumizi ya AI yanajulikana wazi, na matumizi yaliyoruhusiwa yamefafanuliwa mapema.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the staff-room split",
        titleSw: "Hali: mgawanyo kwenye ofisi ya walimu",
        situationEn:
          "Half your teacher colleagues ban AI outright; half allow everything. Both camps cite 'the rules' — which do not exist. You lead the next staff meeting.",
        situationSw:
          "Nusu ya walimu wanakataza AI kabisa; nusu inaruhusu yote. Makundi yote yanataja 'kanuni' — zisizoko. Unaoongoza mkutano ujao.",
        questionEn: "The most productive proposal is:",
        questionSw: "Pendekezo lenye matokeo zaidi ni:",
        optionsEn: [
          "Keep arguing until one side wins",
          "Draft a shared disclosure policy: permitted uses per subject, a standard citation line for AI help, and one CPD session on verification",
          "Leave it to each teacher forever",
          "Adopt the strictest ban to be safe",
        ],
        optionsSw: [
          "Endelea kupigania mpaka upande mmoja ushinde",
          "Andaa sera ya pamoja ya kutambulisha: matumizi yaliyoruhusiwa kwa kila somo, mstari mmoja wa rejeleo kwa msaada wa AI, na kipindi kimoja cha mazoezi ya uthibitisho",
          "Iache kila mwalimu milele",
          "Pitisha marufuku kali zaidi kwa usalama",
        ],
        correctIndex: 1,
        hintsEn: [
          "Argument without artefacts repeats every term; policy converts the fight into a document.",
          "Correct — clarity, citation, and training beat both extremes.",
          "Per-teacher rules confuse students who face different standards daily.",
          "A maximal ban ignores real study value and drives use out of sight.",
        ],
        hintsSw: [
          "Bila nyaraka, ugomvi unarudi kila mihula; sera hubadilisha ugomvi kuwa waraka.",
          "Sahihi — uwazi, rejeleo, na mafunzo ni bora kuliko pande zote mbili za mwisho.",
          "Kanuni za kila mwalimu zinachanganya wanafunzi wanaokutana na viwango tofauti kila siku.",
          "Marufuku kamili inapuuza thamani halisi ya kusoma na kusukuma matumizi gizani.",
        ],
        explainEn: "Durable policy is short: what is allowed, how to disclose, and how to verify — reviewed each term.",
        explainSw: "Sera ya kudumu ni fupi: kinachoruhusiwa, jinsi ya kutambulisha, na jinsi ya kuthibitisha — inapitiwakwa kila muhula.",
      }),
      quiz(
        "The best verification exercise to train students on AI output is:",
        "Zoezi bora la kuthibitisha kufundisha wanafunzi matokeo ya AI ni:",
        ["Memorise the AI's answers", "Have students fact-check one AI claim per week against approved sources and present findings", "Ban questions in class", "Ask AI to grade itself"],
        ["Kukariri majibu ya AI", "Wafundishe wanafunzi kukagua kauli moja ya AI kwa wiki dhidi ya vyanzo vilivyoidhinishwa na kuwasilisha matokeo", "Kataza maswali darasani", "Muombe AI ijipime yenyewe"],
        1,
        "Verification is a skill built by repeated practice, not by rules alone — one claim per week makes it sustainable.",
        "Uthibitisho ni ujuzi unaojengwa kwa mazoezi ya kurudia, si kanuni pekee — kauli moja kwa wiki unaifanya endeleea."
      ),
    ],
  },
];

// ---------------------------------------------------------------- BIZ (SDG 8)
export const bizAdvancedUnits: CurriculumUnit[] = [
  {
    id: "biz-a-u1",
    titleEn: "Demand pipelines beyond the notebook",
    titleSw: "Mifumo ya mahitaji ngazi ya juu",
    cards: [
      note(
        "Signals worth automating",
        "Ishara zinafaa ku-automate",
        `Advanced demand work layers multiple signals: sales history, calendar events (holidays, school terms, market days), weather where relevant, and price changes. The discipline is holdout evaluation: train on months 1–10, test on 11–12, and compare against a naive baseline ('same as last week'). If your model cannot beat the naive baseline on holdout weeks, it is not earning its complexity.

Worked example: a Mombasa kiosk chain beats its baseline by 12% after adding school-term calendars to the model. Adding weather data improved it by only 1% — not worth the plumbing. Measure each signal's marginal value before wiring it in.`,
        `Kazi ya mahitaji ya kiwango cha juu hunachanganya ishara nyingi: historia ya mauzo, kalenda (sikukuu, mihula, siku za soko), hali ya hewa inapofaa, na mabadiliko ya bei. Nidhamu ni tathmini ya holdout: funza kwa miezi 1–10, jaribu 11–12, linganisha na msingi wa kawaida ('sawa na wiki iliyopita'). Mfano usiopita msingi huo kwenye wiki za majaribio haukupati utata wake.

Mfano halisi: mtandao wa kioski Mombasa unashinda msingi wake kwa 12% baada ya kuongeza kalenda ya mihula. Kuongeza data ya hali ya hewa kuliongeza 1% tu — si thamani ya mabomba. Pima thamani ya kila ishara kabla kuunganisha.`
      ),
      quiz(
        "Your fancy model scores worse than 'same as last week' on holdout data. You should:",
        "Mfano wako tata unafanya vibaya kuliko 'sawa na wiki iliyopita' kwenye data ya majaribio. Unapaswa:",
        ["Deploy it anyway — it looks advanced", "Simplify until it beats the naive baseline, or keep the baseline", "Change the test data", "Report only the training accuracy"],
        ["Tekeleza hata hivyo — inaonekana ya kisasa", "Rahisisha mpaka ishinde msingi wa kawaida, au ubaki na msingi", "Badilisha data ya majaribio", "Ripoti usahihi wa mafunzo tu"],
        1,
        "The naive baseline is the honest judge. A model that loses to it adds cost and error, not intelligence.",
        "Msingi wa kawaida ndio jaji wa kweli. Mfano unaoshindwa nao unaongeza gharama na makosa, si akili."
      ),
    ],
  },
  {
    id: "biz-a-u2",
    titleEn: "RAG for business knowledge",
    titleSw: "RAG kwa maarifa ya biashara",
    cards: [
      scenario({
        titleEn: "Scenario: the chatbot that quoted last year's prices",
        titleSw: "Hali: bot iliyouza bei za mwaka jana",
        situationEn:
          "A customer-facing assistant answered price questions from its training memory instead of the shop's current price list, selling an item at a 30% loss. The owner now distrusts all automation.",
        situationSw:
          "Msaidizi anayekabiliana na wateja alijibu bei kutoka kumbukumbu zake za mafunzo badala ya orodha ya sasa, akimuuza kifaa kwa hasara ya 30%. Mmiliki sasa hataamini otomatiki yote.",
        questionEn: "The correct architecture fix is:",
        questionSw: "Urekebishaji sahihi wa usanifu ni:",
        optionsEn: [
          "Fine-tune the model on last year's prices",
          "Retrieval-ground every price answer in the live price list, and make the bot decline when the lookup fails",
          "Add a bigger discount to compensate",
          "Answer prices only at night",
        ],
        optionsSw: [
          "Fine-tune mfano kwa bei za mwaka jana",
          "Weka kila jibu la bei kwenye orodha hai ya bei, na uwe bot inakataa utafutaji ukikosa",
          "Ongeza punguzo kubwa kulipa fidia",
          "Jibu bei usiku tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Fine-tuning on stale data bakes yesterday's errors into the model — worse, not better.",
          "Correct — retrieval from the system of record, with refusal on miss, is the design that prevents this class of failure.",
          "Discounts treat the symptom and teach the bot nothing.",
          "Time-of-day rules do not fix a grounding problem.",
        ],
        hintsSw: [
          "Fine-tune kwa data ya zamani huweka makosa ya jana ndani ya mfano — hali mbaya zaidi.",
          "Sahihi — utafutaji kutoka rekodi rasmi, na ukanushi ukikosea, ndio usanifu unaozuia kosa hili.",
          "Punguzo hutibu dalili na haifundishi bot chochote.",
          "Kanuni za saa hazirekebishi tatizo la msingi.",
        ],
        explainEn: "For anything that spends money, the model must quote the live record — or decline to quote at all.",
        explainSw: "Kwa kila kitu kinachogharimu pesa, mfano lazima atupee rekodi hai — au ukatae kutoa bei kabisa.",
      }),
      pb({
        titleEn: "Build a grounded FAQ prompt",
        titleSw: "Jenga prompt ya FAQ yenye msingi",
        introEn:
          "Rebuild that assistant's instructions so every factual answer is grounded and refusal is expected behaviour.",
        introSw:
          "Jenga upya maelekezo ya msaidizi huyo ili kila jibu la ukweli liwe na msingi na ukanushi utarajiwe.",
        goalEn: "Your prompt must require answering from supplied documents only, marking unknowns, and logging every answer given.",
        goalSw: "Prompt yako lazima iombe kujibu kutoka nyaraka zilizotolewa tu, kuweka alama ya 'sijui', na kurekodi kila jibu.",
        blocksEn: [
          "Answer only from: today's price list and stock tracker provided in each request",
          "If the document lacks the answer: say 'I do not have that — the shopkeeper will reply'",
          "Never quote: memory, training data, or estimates as facts",
          "Log: every answer with timestamp for the weekly review",
        ],
        blocksSw: [
          "Jibu kutoka: orodha ya bei ya leo na kifuatilio cha akiba vilivyotolewa kila ombi",
          "Kama waraka hana jibu: sema 'Sijapata hilo — mmiliki atajibu'",
          "Usiweke kamwe: kumbukumbu, data ya mafunzo, au makadirio kama ukweli",
          "Rekodi: kila jibu na saa kwa ukaguzi wa wiki",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Answer only from today's price list and stock tracker provided in each request. If the document lacks the answer, say 'I do not have that — the shopkeeper will reply'. Never quote memory, training data, or estimates as facts. Log every answer with timestamp for the weekly review.",
        sampleSw:
          "Jibu kutoka orodha ya bei ya leo na kifuatilio cha akiba vilivyotolewa kila ombi. Kama waraka hana jibu, sema 'Sijapata hilo — mmiliki atajibu'. Usiwahi kutaja kumbukumbu, data ya mafunzo, au makadirio kama ukweli. Rekodi kila jibu na saa kwa ukaguzi wa wiki.",
      }),
    ],
  },
  {
    id: "biz-a-u3",
    titleEn: "Governance for business automation",
    titleSw: "Utawala wa otomatiki ya biashara",
    cards: [
      reveal([
        {
          termEn: "Change window",
          termSw: "Dirisha la mabadiliko",
          defEn: "A scheduled, reviewed slot for deploying automation changes — never live-editing customer-facing rules on a Friday evening.",
          defSw: "Muda uliopangwa na ukaguzi wa kutekeleza mabadiliko ya otomatiki — kamwe kubadilisha kanuni za wateja Ijumaa jioni.",
        },
        {
          termEn: "Rollback plan",
          termSw: "Mpango wa kurejea",
          defEn: "The tested way back to the previous behaviour when a change misfires.",
          defSw: "Njia iliyopimwa ya kurudisha tabia ya awali mabadiliko yakikosea.",
        },
        {
          termEn: "Owner",
          termSw: "Mmiliki",
          defEn: "The named person accountable for each automated decision class — 'the AI did it' is not an answer.",
          defSw: "Mtu aliyepewa jina anayejibu kila aina ya uamuzi wa otomatiki — 'AI ilifanya' si jibu.",
        },
      ]),
      scenario({
        titleEn: "Scenario: Friday evening update",
        titleSw: "Hali: sasisho la Ijumaa jioni",
        situationEn:
          "Your developer pushes an updated auto-discount rule to all channels on Friday 6pm, then travels upcountry. By Monday, 400 orders were discounted 50% by mistake, and there is no rollback plan.",
        situationSw:
          "Msanidi programu anatuma kanuni mpya ya punguzo kwa njia zote Ijumaa saa 12 jioni, kisha asafiri ushago. Jumatatu, oda 400 zimepunguzwa 50% kwa makosa, na hakuna mpango wa kurejea.",
        questionEn: "Which governance gap is the root cause?",
        questionSw: "Pengo lipi la utawala ni chanzo?",
        optionsEn: ["Slow internet", "No change window, no rollback plan, and no accountable owner for pricing rules", "Too many customers", "The developer's bus fare"],
        optionsSw: ["Mtandao wa pole", "Hakuna dirisha la mabadiliko, hakuna mpango wa kurejea, na hakuna mmiliki wa kanuni za bei", "Wateja wengi mno", "Nauli ya msanidi"],
        correctIndex: 1,
        hintsEn: [
          "Network speed did not deploy the wrong rule; process did.",
          "Correct — change windows, tested rollbacks, and named owners are the minimum for money-touching automation.",
          "Customer volume amplifies process gaps; it does not cause them.",
          "Travel happens; governance exists precisely for when the owner is away.",
        ],
        hintsSw: [
          "Kasi ya mtandao haikutuma kanuni mbaya; mchakato ulifanya.",
          "Sahihi — dirisha la mabadiliko, kurejea kuliopimwa, na mmiliki mwenye jina ni kiwango cha chini kwa otomatiki inayogusa pesa.",
          "Idadi ya wateja huongeza pengo la mchakato; hailisababishi.",
          "Safari hutokea; utawala upo hasa mmiliki alipozunguka.",
        ],
        explainEn: "Money-touching automation needs process before power: window, rollback, owner — reviewed after every incident.",
        explainSw: "Otomatiki inayogusa pesa inahitaji mchakato kabla ya nguvu: dirisha, kurejea, mmiliki — ukaguzi baada ya kila tukio.",
      }),
      quiz(
        "The first document to write before automating any money-touching decision is:",
        "Waraka wa kwanza kuandika kabla ya ku-automate uamuzi unaojihusisha na pesa ni:",
        ["A marketing plan", "A one-page rule sheet: what the automation may do, limits, owner, and rollback steps", "A logo redesign", "A letter to competitors"],
        ["Mpango wa masoko", "Karatasi moja ya kanuni: kitu otomatiki inachoruhusiwa, vikomo, mmiliki, na hatua za kurejea", "Kubadilisha logoshati", "Barua kwa washindani"],
        1,
        "One page of constraints beats a hundred pages of hindsight — and it is cheap enough for any small business to write today.",
        "Karatasi moja ya vikomo ni bora kuliko kurasa mia za majuto — na ni nafuu kwa biashara yoyote kuandika leo."
      ),
    ],
  },
];

// ---------------------------------------------------------------- CAP (SDG 17)
export const capAdvancedUnits: CurriculumUnit[] = [
  {
    id: "cap-a-u1",
    titleEn: "Evaluation design that survives scrutiny",
    titleSw: "Tathmini inayostahili ukaguzi",
    cards: [
      note(
        "Comparison, not applause",
        "Ulinganisho, si makofi",
        `Credible community-project evaluation compares two states: with the tool and without it, or before and after with a fixed measure. The weakest designs measure satisfaction after deployment only — everyone praises the gift they were given. Stronger designs pre-register a metric ('queue time at noon, measured for 2 weeks'), a threshold ('reduce by 20%'), and a reviewer who does not benefit from success.

Worked example: a water-point predictor runs with a sign-in sheet as its baseline. Noon queue times fall 24% over the trial weeks — but the evaluators also log that the pump was repaired mid-trial, a confounder they disclose. Honest disclosure made the 24% more believable, not less.`,
        `Tathmini inayoaminika ya mradi wa jamii inalinganisha hali mbili: na zana na bila, au kabla na baada kwa kipimo fikito. Usanifu dhaifu zaidi unapima kuridhika baada ya kutekeleza tu — kila mtu husifu zawadi aliyoipewa. Usanifu imara huweka kipimo mapema ('muda wa foleni saa sita, kipimo kwa wiki 2'), kikomo ('punguza kwa 20%'), na mtathminaji asiyanufaika na mafanikio.

Mfano halisi: kitabiri cha mtaro wa maji kinafanya kazi na daftari la kuingia kama msingi. Foleni za saa sita zinapungua 24% kwa majaribio — lakini watathmini pia wanaandika pampu ilirekebishwa katikati ya jaribio, kchanganyiko wanaofichua. Uwazi huo ulifanya 24% kuaminiwa zaidi, si pungufu.`
      ),
      quiz(
        "A confounder in your pilot results is:",
        "Kchanganyiko (confounder) kwenye matokeo ya jaribio lako ni:",
        ["A factor that also changed during the trial and could explain the result", "The community leader's approval", "Your laptop model", "The number of volunteers"],
        ["Kipengele kilichobadilika wakati wa jaribio ambacho kinaweza kueleza matokeo", "Idhini ya kiongozi wa jamii", "Mfano wa kompyuta yako", "Idadi ya wajitolea"],
        0,
        "Confounders (like the repaired pump) are disclosed, measured where possible, and never silently ignored.",
        "Vichanganyiko (kama pampu iliyorekebishwa) hufichuliwa, kupimwa pale inapowezekana, na kamwe kupuuzwa kimya."
      ),
    ],
  },
  {
    id: "cap-a-u2",
    titleEn: "Handover and maintenance",
    titleSw: "Kuhamisha na kutunza",
    cards: [
      scenario({
        titleEn: "Scenario: the project that left with the volunteer",
        titleSw: "Hali: mradi ulioondoka na mjitoleaji",
        situationEn:
          "A volunteer builds a market-price dashboard the community loves. After six months they relocate; the API key they personal-owned expires, the data entry stops, and the dashboard dies.",
        situationSw:
          "Mjitoleaji anajenga dashibodi ya bei za soko jamii inayoipenda. Miezi sita baadaye anahamia; ufunguo wa API alioumiliki binafsi unaisha, kuingiza data inaacha, dashibodi inakufa.",
        questionEn: "What should have been designed from day one?",
        questionSw: "Nini kilipaswa kupangwa kutoka siku ya kwanza?",
        optionsEn: [
          "A better laptop",
          "Shared ownership: organisational accounts, documented data flow, two trained people, and a simple monthly maintenance checklist",
          "More volunteers",
          "No documentation — keep it secret",
        ],
        optionsSw: [
          "Kompyuta bora",
          "Umiliki wa pamoja: akaunti za shirika, mtiririko wa data ulioandikwa, watu wawili waliofunzwa, na orodha rahisi ya matunzo ya mwezi",
          "Wajitoleaji zaidi",
          "Hakuna nyaraka — ifiche",
        ],
        correctIndex: 1,
        hintsEn: [
          "Hardware was not the failure point; concentration of knowledge and access was.",
          "Correct — continuity is designed: shared accounts, docs, and redundancy in trained people.",
          "More volunteers without structure multiplies the same single point of failure.",
          "Secrecy guarantees the death of community tools.",
        ],
        hintsSw: [
          "Vifaa vilikuwa si sehemu ya kushindwa; kukusanya maarifa na ufunguo mikononi mwa mtu mmoja ndipo.",
          "Sahihi — endelevu hupangwa: akaunti za pamoja, nyaraka, na watu wawili waliofunzwa.",
          "Wajitoleaji zaidi bila muundo huongeza tatizo hilo hilo.",
          "Siri huhakikisha kifo cha zana za jamii.",
        ],
        explainEn: "A community tool's lifespan equals the community's access to it — design handover before launch.",
        explainSw: "Maisha ya zana ya jamii ni sawa na ufikiaji wa jamii — panga kuhamisha kabla ya kuanzisha.",
      }),
      pb({
        titleEn: "Build a handover-pack prompt",
        titleSw: "Jenga prompt ya mfuko wa kuhamisha",
        introEn:
          "Draft the handover pack with AI. The prompt must force completeness and honesty about what is fragile.",
        introSw:
          "Andaa mfuko wa kuhamisha kwa AI. Prompt lazima ilazimishe ukamilifu na uwazi kuhusu kile dhaifu.",
        goalEn: "Your prompt must list required sections (accounts, data flow, costs, risks) and require marking anything that depends on one person.",
        goalSw: "Prompt yako lazima iorodheshe sehemu (akaunti, mtiririko wa data, gharama, hatari) na iombe kuweka alama kwa kila kitu kinategemea mtu mmoja.",
        blocksEn: [
          "Sections: accounts and keys (no secrets in the doc), data flow diagram, monthly cost, known risks",
          "Rule: mark every single-person dependency as 'RISK: one owner'",
          "Audience: the community committee, not developers",
          "Keep: two pages maximum, plain language",
        ],
        blocksSw: [
          "Sehemu: akaunti na funguo (hakuna siri kwenye waraka), mchoro wa mtiririko wa data, gharama ya mwezi, hatari zinazojulikana",
          "Kanuni: weka alama kwa kila utegemeo wa mtu mmoja kama 'HATARI: mmiliki mmoja'",
          "Hadhira: kamati ya jamii, si wasanidi",
          "Weka: kurasa mbili hadi, lugha rahisi",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Sections: accounts and keys (no secrets in the doc), data flow diagram, monthly cost, known risks. Rule: mark every single-person dependency as 'RISK: one owner'. Audience: the community committee, not developers. Keep: two pages maximum, plain language.",
        sampleSw:
          "Sehemu: akaunti na funguo (hakuna siri kwenye waraka), mchoro wa mtiririko wa data, gharama ya mwezi, hatari zinazojulikana. Kanuni: alama 'HATARI: mmiliki mmoja' kwa kila utegemeo. Hadhira: kamati ya jamii, si wasanidi. Weka: kurasa mbili hadi, lugha rahisi.",
      }),
    ],
  },
  {
    id: "cap-a-u3",
    titleEn: "Responsible scaling decisions",
    titleSw: "Uamuzi wa kueneza kwa uwajibikaji",
    cards: [
      reveal([
        {
          termEn: "Scale readiness",
          termSw: "Utayari wa kueneza",
          defEn: "Support, data flow, and maintenance proven at current size — not assumed to appear after growth.",
          defSw: "Msaada, mtiririko wa data, na matunzo yaliyothibitishwa kwa ukubwa wa sasa — si kutarajiwa baada ya kuongezeka.",
        },
        {
          termEn: "Sunset criteria",
          termSw: "Vigezo vya kufunga",
          defEn: "Pre-agreed conditions under which you stop or pause the tool — decided before attachment grows.",
          defSw: "Masharti yaliyokubaliwa mapema ya kusimamisha au kupumzisha zana — yamewekwa kabla upendo kuongezeka.",
        },
        {
          termEn: "Cost per beneficiary",
          termSw: "Gharama kwa mnufaika",
          defEn: "Total running cost divided by people actually served — the honest efficiency number for funders.",
          defSw: "Gharama ya jumla ya kuendesha ikigawanywa na watu wanaohudumiwa — namba ya ufanisi ya kweli kwa wafadhili.",
        },
      ]),
      scenario({
        titleEn: "Scenario: the funder wants ten counties",
        titleSw: "Hali: mfadhili anataka kaunti kumi",
        situationEn:
          "A funder offers to scale your borehole predictor to ten counties within three months. Your support is currently two volunteers, one phone line, and no maintenance budget.",
        situationSw:
          "Mfadhili anapenda kueneza kitabiri chako cha mtaro kaunti kumi ndani ya miezi mitatu. Msaada wako ni wajitoleaji wawili, mstari mmoja wa simu, na hakuna bajeti ya matunzo.",
        questionEn: "The responsible reply is:",
        questionSw: "Jibu lenye uwajibikaji ni:",
        optionsEn: [
          "Accept — reject nothing offered to communities",
          "Counter-propose: fund the support structure first (staffing, maintenance budget, sunset criteria), then scale in two phases with evaluation between",
          "Accept and hope",
          "Refuse all funding forever",
        ],
        optionsSw: [
          "Kubali — kataa chochote kinachotolewa kwa jamii",
          "Pendekeza tofauti: ufadhili muundo wa msaada kwanza (wafanyakazi, bajeti ya matunzo, vigezo vya kufunga), kisha kueneza kwa hatua mbili na tathmini katikati",
          "Kubali na kutarajia",
          "Kataa ufadhili wote milele",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accepting without capacity creates a wider failure — worse for communities than a polite delay.",
          "Correct — support capacity precedes scale; phased growth with evaluation protects both funder and community.",
          "Hope is not an operations plan.",
          "Refusing everything abandons real opportunity; the skill is shaping the terms.",
        ],
        hintsSw: [
          "Kukubali bila uwezo huunda kushindwa kwa upana zaidi — hali mbaya kwa jamii kuliko subiri ya heshima.",
          "Sahihi — uwezo wa msaada hutokea kabla ya kueneza; ukuaji wa hatua na tathmini unalinda mfadhili na jamii.",
          "Kutarajia si mpango wa shughuli.",
          "Kukataa yote huacha fursa halisi; ujuzi ni kuunda masharti.",
        ],
        explainEn: "Scaling multiplies whatever exists — including gaps. Fund the structure, then the reach.",
        explainSw: "Kueneza huzidisha kilichopo — pamoja na mapengo. Fadhili muundo, kisha uenezi.",
      }),
      quiz(
        "Sunset criteria are best decided:",
        "Vigezo vya kufunga ni bora kuamuliwa:",
        ["After the tool becomes popular", "Before launch, by the people accountable for it", "Never — tools should live forever", "By the funder alone"],
        ["Zana ikiwa maarufu", "Kabla ya kuanzisha, na watu wanaowajibika kwake", "Kamwe — zana zisife", "Na mfadhili pekee"],
        1,
        "Deciding stop-conditions before attachment grows keeps the decision professional instead of emotional.",
        "Kuamua masharti ya kusimamisha kabla upendo huongezeka kunabaki uamuzi kuwa wa kitaalamu, si wa hisia."
      ),
    ],
  },
];
