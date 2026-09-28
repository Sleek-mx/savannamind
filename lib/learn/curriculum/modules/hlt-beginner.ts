import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Health and care, Beginner track (AI-literate user).
 * Units 1-5 stand alone as a complete, safe mini-course for learners aged 8-10:
 * AI is a helper, health data is private, emergencies go to 999 / 112 / 719,
 * rumours are checked, and patient details never go into public tools.
 */
export const hltBeginnerUnits: CurriculumUnit[] = [
  // ---------------------------------------------------------------- u1
  {
    id: "hlt-b-u1",
    titleEn: "AI in Kenyan health care: a helper, never the doctor",
    titleSw: "AI katika huduma za afya Kenya: msaidizi, kamwe si daktari",
    cards: [
      note(
        "What AI does in health",
        "AI hufanya nini katika afya",
        `In Foundations you learned that artificial intelligence (AI) is software that learns patterns from many examples and then makes a guess. In health, that guess might be: "this chest X-ray looks unusual", "this patient may miss her next visit", or "this message is asking about a clinic time".

How does it get there? People collect many past examples, such as thousands of X-ray pictures that doctors have already checked. The software studies them and learns which patterns usually go with which answer. When it sees a new example, it compares it with those patterns and gives its best guess.

That is useful, but it is still a guess. The software cannot touch you, listen to your chest, see how you walk, ask your mother what happened last night, or run a blood test. It does not carry responsibility if it is wrong.

So in health care there is one simple rule: AI is a helper. A trained person decides. That person may be a doctor, a clinical officer, a nurse, a pharmacist, or a community health promoter (CHP) who visits your home.`,
        `Katika Misingi ulijifunza kwamba akili bandia (AI) ni programu inayojifunza mifumo kutoka kwa mifano mingi, kisha inakisia. Katika afya, makisio hayo yanaweza kuwa: "picha hii ya X-ray ya kifua inaonekana si ya kawaida", "mgonjwa huyu huenda asije ziara yake ijayo", au "ujumbe huu unauliza saa za kliniki".

Inafikaje hapo? Watu hukusanya mifano mingi ya zamani, kama maelfu ya picha za X-ray ambazo madaktari wameshazikagua. Programu inazisoma na kujifunza ni mifumo ipi kwa kawaida huenda na jibu lipi. Inapoona mfano mpya, inaulinganisha na mifumo hiyo na kutoa makisio yake bora.

Hilo lina manufaa, lakini bado ni makisio. Programu haiwezi kukugusa, kusikiliza kifua chako, kuona unavyotembea, kumuuliza mama yako kilichotokea jana usiku, wala kupima damu. Haibebi jukumu ikikosea.

Kwa hiyo katika huduma za afya kuna kanuni moja rahisi: AI ni msaidizi. Mtu aliyefunzwa ndiye anayeamua. Mtu huyo anaweza kuwa daktari, afisa wa kliniki (clinical officer), muuguzi, mfamasia, au mhamasishaji wa afya ya jamii (CHP) anayetembelea nyumba yako.`,
        "/learn/content/hlt/clinic-helper.jpg"
      ),
      reveal([
        {
          termEn: "Health worker",
          termSw: "Mhudumu wa afya",
          defEn: "A trained person who cares for patients, such as a doctor, clinical officer, nurse, pharmacist or CHP.",
          defSw: "Mtu aliyefunzwa anayehudumia wagonjwa, kama daktari, afisa wa kliniki, muuguzi, mfamasia au CHP.",
        },
        {
          termEn: "Prediction",
          termSw: "Utabiri",
          defEn: "The best guess a model makes from patterns it learned. It can be wrong.",
          defSw: "Makisio bora ambayo modeli hufanya kutokana na mifumo iliyojifunza. Yanaweza kuwa na kosa.",
        },
        {
          termEn: "Diagnosis",
          termSw: "Utambuzi wa ugonjwa",
          defEn: "A health worker's decision about what illness a person has, made after asking, examining and often testing.",
          defSw: "Uamuzi wa mhudumu wa afya kuhusu ugonjwa alio nao mtu, unaofanywa baada ya kuuliza, kuchunguza na mara nyingi kupima.",
        },
        {
          termEn: "Referral",
          termSw: "Rufaa",
          defEn: "Sending a patient to a place or person with more skills or equipment, for example from a CHP to the dispensary.",
          defSw: "Kumpeleka mgonjwa mahali au kwa mtu mwenye ujuzi au vifaa zaidi, kwa mfano kutoka kwa CHP hadi zahanati.",
        },
        {
          termEn: "Community health promoter (CHP)",
          termSw: "Mhamasishaji wa afya ya jamii (CHP)",
          defEn: "A trained community member who visits households, shares health information and refers people to facilities.",
          defSw: "Mwanajamii aliyefunzwa anayetembelea kaya, kutoa elimu ya afya na kuwapa watu rufaa kwenda vituo vya afya.",
        },
      ]),
      note(
        "Worked example: a morning at a dispensary",
        "Mfano: asubuhi moja katika zahanati",
        `Imagine a dispensary in Kitui. One nurse and one clinical officer serve about 60 patients before lunch. The dispensary tries a made-up AI helper that reads SMS messages sent to the clinic phone.

Step 1. Between 7 and 8 am, 25 messages arrive.

Step 2. The helper sorts them into groups: 15 ask about opening hours or clinic days, 7 ask about appointments, and 3 describe someone who is very sick.

Step 3. For the 15 simple questions, the helper suggests a ready reply, such as the clinic days. The nurse reads each suggestion before it is sent.

Step 4. The 3 serious messages are shown to the nurse first. She calls those families herself.

Where can it go wrong? One message says, in Sheng, that a baby "hana nguvu kabisa" and will not feed. The helper sorts it as an appointment question, because it learned mostly from standard Kiswahili and English messages. The nurse catches it only because she reads every message the helper was unsure about.

What did AI do? It saved time on the 15 simple questions. What did it not do? It did not see any patient, make any diagnosis, or decide who was sick. People did that.`,
        `Fikiria zahanati moja huko Kitui. Muuguzi mmoja na afisa wa kliniki mmoja huhudumia wagonjwa takriban 60 kabla ya chakula cha mchana. Zahanati inajaribu msaidizi wa AI wa kubuni anayesoma jumbe za SMS zinazotumwa kwa simu ya kliniki.

Hatua ya 1. Kati ya saa moja na saa mbili asubuhi, jumbe 25 zinafika.

Hatua ya 2. Msaidizi anazipanga katika makundi: 15 zinauliza saa za kufungua au siku za kliniki, 7 zinauliza kuhusu miadi, na 3 zinaeleza mtu aliye mgonjwa sana.

Hatua ya 3. Kwa maswali 15 rahisi, msaidizi anapendekeza jibu lililo tayari, kama siku za kliniki. Muuguzi anasoma kila pendekezo kabla halijatumwa.

Hatua ya 4. Jumbe 3 nzito zinaonyeshwa kwa muuguzi kwanza. Yeye mwenyewe anazipigia familia hizo simu.

Inaweza kukosea wapi? Ujumbe mmoja unasema, kwa Sheng, kwamba mtoto mchanga "hana nguvu kabisa" na hanyonyi. Msaidizi anauweka kama swali la miadi, kwa sababu alijifunza hasa kutoka kwa jumbe za Kiswahili sanifu na Kiingereza. Muuguzi analigundua kosa hilo kwa sababu tu anasoma kila ujumbe ambao msaidizi hakuwa na uhakika nao.

AI ilifanya nini? Iliokoa muda kwenye maswali 15 rahisi. Haikufanya nini? Haikumwona mgonjwa yeyote, haikutambua ugonjwa, wala haikuamua nani ni mgonjwa. Watu ndio walifanya hivyo.`
      ),
      scenario({
        titleEn: "Scenario: the app says it is nothing",
        titleSw: "Hali: programu inasema si kitu",
        situationEn:
          "Your little brother has had a cough for two days. Tonight he is breathing very fast and his chest pulls in with each breath. Your uncle types the symptoms into a free health app. The app says: 'Likely a common cold. Rest at home.'",
        situationSw:
          "Mdogo wako ana kikohozi kwa siku mbili. Leo usiku anapumua haraka sana na kifua chake kinavutika ndani kila anapopumua. Mjomba wako anaandika dalili kwenye programu ya afya ya bure. Programu inasema: 'Huenda ni mafua ya kawaida. Pumzika nyumbani.'",
        questionEn: "What should the family do?",
        questionSw: "Familia inapaswa kufanya nini?",
        optionsEn: [
          "Trust the app and let him sleep, because it studied many cases",
          "Get help from a health worker now, and call 999 or 112 if he gets worse or cannot breathe well",
          "Type the symptoms into a second app and follow whichever answer sounds more serious",
          "Wait until morning and ask the CHP when she next visits the village",
        ],
        optionsSw: [
          "Kuiamini programu na kumwacha alale, kwa sababu ilisoma visa vingi",
          "Kupata msaada wa mhudumu wa afya sasa, na kupiga 999 au 112 akizidi kuwa mbaya au akishindwa kupumua vizuri",
          "Kuandika dalili kwenye programu ya pili na kufuata jibu linaloonekana zito zaidi",
          "Kusubiri hadi asubuhi na kumuuliza CHP atakapotembelea kijiji tena",
        ],
        correctIndex: 1,
        hintsEn: [
          "The app cannot see his chest pulling in. Fast, hard breathing in a child is a danger sign that a person must check now.",
          "Correct. What the family can see matters more than the app's guess. A trained person decides, and emergencies go to 999 or 112.",
          "Two guesses are still guesses. Neither app can examine him, and hunting for an answer wastes time.",
          "The CHP is a good link to care, but a danger sign tonight should not wait for a routine visit.",
        ],
        hintsSw: [
          "Programu haiwezi kuona kifua chake kikivutika ndani. Kupumua haraka na kwa shida kwa mtoto ni dalili ya hatari ambayo mtu lazima aikague sasa.",
          "Sahihi. Kile familia inachoona ni muhimu kuliko makisio ya programu. Mtu aliyefunzwa ndiye anayeamua, na dharura huenda kwa 999 au 112.",
          "Makisio mawili bado ni makisio. Hakuna programu inayoweza kumchunguza, na kutafuta jibu kunapoteza muda.",
          "CHP ni kiungo kizuri cha huduma, lakini dalili ya hatari usiku huu haipaswi kungoja ziara ya kawaida.",
        ],
        explainEn:
          "An app only knows what was typed into it. When what you see in front of you looks dangerous, get a trained person immediately.",
        explainSw:
          "Programu inajua tu kile kilichoandikwa ndani yake. Unachokiona mbele yako kikionekana hatari, pata mtu aliyefunzwa mara moja.",
      }),
      quiz(
        "Which of these is the best job for an AI helper in a health facility?",
        "Ni kazi ipi kati ya hizi inayofaa zaidi msaidizi wa AI katika kituo cha afya?",
        [
          "Deciding which patients may go home without seeing anyone",
          "Sorting incoming messages so a nurse can read the urgent ones first",
          "Telling a mother which illness her child has, so she does not need to travel",
          "Choosing which medicine each patient should take",
        ],
        [
          "Kuamua wagonjwa gani waende nyumbani bila kumwona mtu yeyote",
          "Kupanga jumbe zinazoingia ili muuguzi asome zile za dharura kwanza",
          "Kumwambia mama mtoto wake ana ugonjwa gani, ili asisafiri",
          "Kuchagua dawa ambayo kila mgonjwa anapaswa kutumia",
        ],
        1,
        "Sorting messages saves time while a person still reads them and decides. Sending people home, naming an illness and choosing medicine are decisions that need a trained health worker who can examine the patient.",
        "Kupanga jumbe kunaokoa muda huku mtu bado anazisoma na kuamua. Kuwarudisha watu nyumbani, kutaja ugonjwa na kuchagua dawa ni maamuzi yanayohitaji mhudumu wa afya aliyefunzwa anayeweza kumchunguza mgonjwa."
      ),
      note(
        "Try it: helper or decider?",
        "Jaribu: msaidizi au mwamuzi?",
        `Take a page in your exercise book and draw two columns. Call one "Helper" and the other "Decider".

Now think of health tools you have seen or heard of: an SMS reminder for a clinic visit, a thermometer, a health app on a phone, the nurse at the dispensary, a WhatsApp voice note about a cure, the pharmacist, the CHP who visits your home.

Put each one in a column. Ask yourself one question each time: can this thing examine a person and take responsibility for the decision?

You should find that only trained people belong in the "Decider" column. Everything else is a helper at best. Some things, like an unknown voice note, are not even good helpers.`,
        `Chukua ukurasa katika daftari lako na uchore safu mbili. Iite moja "Msaidizi" na nyingine "Mwamuzi".

Sasa fikiria zana za afya ulizoziona au kuzisikia: kikumbusho cha SMS cha ziara ya kliniki, kipimajoto, programu ya afya kwenye simu, muuguzi wa zahanati, ujumbe wa sauti wa WhatsApp kuhusu tiba, mfamasia, na CHP anayetembelea nyumba yenu.

Weka kila kimoja katika safu. Jiulize swali moja kila mara: je, kitu hiki kinaweza kumchunguza mtu na kubeba jukumu la uamuzi?

Utaona kwamba ni watu waliofunzwa tu wanaofaa safu ya "Mwamuzi". Vingine vyote ni wasaidizi tu. Baadhi, kama ujumbe wa sauti usiojulikana, si hata wasaidizi wazuri.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- AI in health learns patterns from past examples and makes a guess.
- A guess is not a diagnosis. Only a trained person who can examine you makes that decision.
- What you can see in front of you, such as fast breathing, matters more than an app's answer.
- Next: health information is some of the most private information you have. Unit 2 explains why.`,
        `- AI katika afya hujifunza mifumo kutoka kwa mifano ya zamani na kukisia.
- Makisio si utambuzi wa ugonjwa. Ni mtu aliyefunzwa anayeweza kukuchunguza tu anayefanya uamuzi huo.
- Unachoweza kuona mbele yako, kama kupumua haraka, ni muhimu kuliko jibu la programu.
- Ifuatayo: taarifa za afya ni miongoni mwa taarifa zako za siri zaidi. Somo la 2 linaeleza kwa nini.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u2
  {
    id: "hlt-b-u2",
    titleEn: "Health data is sensitive",
    titleSw: "Data za afya ni nyeti",
    cards: [
      note(
        "What health data is, and why it is special",
        "Data za afya ni nini, na kwa nini ni maalum",
        `Health data is any information about a person's body or mind and the care they receive. It includes illnesses, test results, medicines, pregnancy, disability, HIV status, mental health, the clinic a person attends, and even the date of a hospital visit.

Why is it special? Because it can hurt people if the wrong person learns it. Some illnesses carry stigma, which means people are treated badly because of them. A person could be gossiped about, bullied at school, refused a job, or pushed away by family.

There is a second reason. Once health information is copied and sent, you cannot call it back. A screenshot can travel to hundreds of phones in one afternoon.

Kenya's law agrees that health data needs extra care. The Data Protection Act, 2019 calls health data "sensitive personal data" and puts stricter rules on collecting and using it. People have the right to be told how their data is used, to see it, to correct it and to ask for it to be deleted. The Health Act, 2017 says that information about patients must be kept confidential. The Office of the Data Protection Commissioner (ODPC) handles complaints when personal data is misused.

For a child the rule is simple: your health is your own and your family's business. Other people's health is their business. You share it only with the people who care for you, such as your parents or guardians and your health worker.`,
        `Data za afya ni taarifa yoyote kuhusu mwili au akili ya mtu na huduma anayopata. Zinajumuisha magonjwa, majibu ya vipimo, dawa, ujauzito, ulemavu, hali ya VVU, afya ya akili, kliniki anayohudhuria mtu, na hata tarehe ya kwenda hospitalini.

Kwa nini ni maalum? Kwa sababu zinaweza kuwaumiza watu mtu asiyefaa akizijua. Baadhi ya magonjwa yana unyanyapaa, yaani watu hutendewa vibaya kwa sababu yake. Mtu anaweza kusengenywa, kudhulumiwa shuleni, kunyimwa kazi, au kutengwa na familia.

Kuna sababu ya pili. Taarifa za afya zikishanakiliwa na kutumwa, huwezi kuzirudisha. Picha ya skrini inaweza kufika kwenye simu mamia kwa mchana mmoja.

Sheria ya Kenya inakubali kwamba data za afya zinahitaji uangalifu zaidi. Sheria ya Ulinzi wa Data, 2019 inaziita data za afya "data binafsi nyeti" na inaweka kanuni kali zaidi za kuzikusanya na kuzitumia. Watu wana haki ya kuambiwa jinsi data zao zinavyotumiwa, kuziona, kuzirekebisha na kuomba zifutwe. Sheria ya Afya, 2017 inasema taarifa za wagonjwa lazima ziwe siri. Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) hushughulikia malalamiko data binafsi zinapotumiwa vibaya.

Kwa mtoto kanuni ni rahisi: afya yako ni jambo lako na la familia yako. Afya ya watu wengine ni jambo lao. Unaishiriki tu na wanaokutunza, kama wazazi au walezi wako na mhudumu wako wa afya.`
      ),
      reveal([
        {
          termEn: "Personal data",
          termSw: "Data binafsi",
          defEn: "Any information that can identify a person, such as a name, phone number, ID number or photo.",
          defSw: "Taarifa yoyote inayoweza kumtambulisha mtu, kama jina, namba ya simu, namba ya kitambulisho au picha.",
        },
        {
          termEn: "Sensitive personal data",
          termSw: "Data binafsi nyeti",
          defEn: "Personal data the law protects more strictly, including health, biometrics, ethnicity and children's data.",
          defSw: "Data binafsi ambazo sheria inazilinda kwa ukali zaidi, zikiwemo za afya, alama za mwili (biometrics), kabila na data za watoto.",
        },
        {
          termEn: "Confidentiality",
          termSw: "Usiri",
          defEn: "The duty of health workers to keep what they learn about patients private.",
          defSw: "Wajibu wa wahudumu wa afya kuweka siri kile wanachojua kuhusu wagonjwa.",
        },
        {
          termEn: "Consent",
          termSw: "Ridhaa",
          defEn: "A clear, free yes from a person, after they understand what will happen to their information.",
          defSw: "Ndiyo iliyo wazi na huru kutoka kwa mtu, baada ya kuelewa kitakachotokea kwa taarifa zake.",
        },
        {
          termEn: "Stigma",
          termSw: "Unyanyapaa",
          defEn: "Treating people badly or with shame because of an illness or condition.",
          defSw: "Kuwatendea watu vibaya au kuwaaibisha kwa sababu ya ugonjwa au hali fulani.",
        },
      ]),
      note(
        "Worked example: one screenshot, many phones",
        "Mfano: picha moja ya skrini, simu nyingi",
        `Imagine a chama in Nakuru with a WhatsApp group of 40 members. One member, trying to help, posts a photo of a neighbour's lab result and asks, "Does anyone know what this means?" The neighbour's name is on the paper.

Count what happens.

Step 1. 40 people in the group can now see the result.

Step 2. Three members forward it to other groups they belong to, each with about 100 members. That is 3 x 100 = 300 more people.

Step 3. Total: 40 + 300 = 340 people have seen a private test result in one afternoon. The neighbour agreed to none of it.

Step 4. Now imagine one of those people pastes the photo into a public chatbot to ask what it means. The text of the result may now also be stored by the company that runs the tool.

Where did it go wrong? The helper had a kind reason but used the wrong channel. The right person to explain a lab result is the health worker who ordered the test. The neighbour can ask them directly, in private. Nobody else needed to see that paper.`,
        `Fikiria chama kimoja huko Nakuru chenye kikundi cha WhatsApp cha wanachama 40. Mwanachama mmoja, akijaribu kusaidia, anaweka picha ya majibu ya maabara ya jirani yake na kuuliza, "Kuna anayejua hii inamaanisha nini?" Jina la jirani liko kwenye karatasi.

Hesabu kinachotokea.

Hatua ya 1. Watu 40 kwenye kikundi sasa wanaweza kuona majibu.

Hatua ya 2. Wanachama watatu wanaituma kwa vikundi vingine wanavyovijua, kila kimoja chenye takriban wanachama 100. Hiyo ni 3 x 100 = watu 300 zaidi.

Hatua ya 3. Jumla: 40 + 300 = watu 340 wameona majibu ya siri ya kipimo kwa mchana mmoja. Jirani hakukubali lolote kati ya hayo.

Hatua ya 4. Sasa fikiria mmoja wao anabandika picha hiyo kwenye chatbot ya umma kuuliza maana yake. Maandishi ya majibu huenda sasa yamehifadhiwa pia na kampuni inayoendesha zana hiyo.

Kosa lilikuwa wapi? Msaidizi alikuwa na nia njema lakini alitumia njia isiyofaa. Mtu sahihi wa kueleza majibu ya maabara ni mhudumu wa afya aliyeagiza kipimo. Jirani anaweza kumuuliza moja kwa moja, faraghani. Hakuna mwingine aliyehitaji kuiona karatasi hiyo.`
      ),
      scenario({
        titleEn: "Scenario: a question at school",
        titleSw: "Hali: swali shuleni",
        situationEn:
          "Your mother goes to the clinic every month. At school, a classmate says, 'I saw your mum at the clinic. What is she sick with? Tell me, I will not tell anyone.'",
        situationSw:
          "Mama yako huenda kliniki kila mwezi. Shuleni, mwanafunzi mwenzako anasema, 'Nilimwona mama yako kliniki. Anaugua nini? Niambie, sitamwambia mtu.'",
        questionEn: "What is the best reply?",
        questionSw: "Jibu bora ni lipi?",
        optionsEn: [
          "Tell the classmate, because they promised to keep it secret",
          "Say, 'That is my mum's private business,' and change the subject",
          "Make up a different illness so the classmate stops asking",
          "Post in the class group that people should stop asking about your family",
        ],
        optionsSw: [
          "Kumwambia mwenzako, kwa sababu ameahidi kutunza siri",
          "Kusema, 'Hilo ni jambo la faragha la mama yangu,' na kubadilisha mada",
          "Kubuni ugonjwa mwingine ili mwenzako aache kuuliza",
          "Kuandika kwenye kikundi cha darasa kwamba watu waache kuuliza kuhusu familia yako",
        ],
        correctIndex: 1,
        hintsEn: [
          "A promise does not make it your information to share. Once told, you cannot take it back.",
          "Correct. You can be polite and firm. Your mother decides who knows about her health.",
          "Lying spreads false health information and may cause new rumours. You do not owe anyone an answer.",
          "This draws more attention to your mother's visits. A calm private reply is safer.",
        ],
        hintsSw: [
          "Ahadi haifanyi taarifa hiyo kuwa yako kuishiriki. Ukishasema, huwezi kuirudisha.",
          "Sahihi. Unaweza kuwa na adabu na msimamo. Mama yako ndiye anayeamua nani ajue kuhusu afya yake.",
          "Uongo unaeneza taarifa za afya za uongo na unaweza kuzua uvumi mpya. Huna deni la kumpa mtu jibu.",
          "Hii inavuta watu zaidi kuangalia ziara za mama yako. Jibu tulivu la faragha ni salama zaidi.",
        ],
        explainEn:
          "Protecting health information includes other people's information. You can refuse kindly without explaining anything.",
        explainSw:
          "Kulinda taarifa za afya kunajumuisha taarifa za watu wengine. Unaweza kukataa kwa upole bila kueleza chochote.",
      }),
      quiz(
        "Why does the Data Protection Act give health data stronger protection than, for example, the type of phone you own?",
        "Kwa nini Sheria ya Ulinzi wa Data inalinda data za afya kwa nguvu zaidi kuliko, kwa mfano, aina ya simu uliyo nayo?",
        [
          "Because health data is harder for computers to store",
          "Because if it leaks it can lead to stigma, discrimination and serious harm that cannot be undone",
          "Because only doctors are allowed to know anything about health",
          "Because health data is always more accurate than other data",
        ],
        [
          "Kwa sababu data za afya ni ngumu zaidi kwa kompyuta kuhifadhi",
          "Kwa sababu zikivuja zinaweza kuleta unyanyapaa, ubaguzi na madhara makubwa yasiyoweza kurekebishwa",
          "Kwa sababu ni madaktari tu wanaoruhusiwa kujua lolote kuhusu afya",
          "Kwa sababu data za afya daima ni sahihi zaidi kuliko data nyingine",
        ],
        1,
        "The extra protection is about harm. A leaked phone model hurts nobody; a leaked HIV status or pregnancy can change how a person is treated at home, school or work. Storage is not the issue, patients themselves may know and share their own health information, and health records can contain mistakes like any data.",
        "Ulinzi wa ziada unahusu madhara. Aina ya simu ikivuja haimdhuru mtu; hali ya VVU au ujauzito ukivuja unaweza kubadilisha jinsi mtu anavyotendewa nyumbani, shuleni au kazini. Uhifadhi si tatizo, wagonjwa wenyewe wanaweza kujua na kushiriki taarifa zao za afya, na rekodi za afya zinaweza kuwa na makosa kama data yoyote."
      ),
      note(
        "Try it: my three circles",
        "Jaribu: miduara yangu mitatu",
        `Draw three circles, one inside the other.

In the small middle circle write "Me". In the next circle write the people who care for your health: your parents or guardians and your health worker. In the outer circle write "Everyone else": friends, classmates, neighbours, WhatsApp groups, apps and chatbots.

Now take three health facts, for example "I had malaria last term", "My grandfather uses a walking stick", "My friend is afraid of injections". For each one, ask: whose information is this, and which circle may know it?

Notice two things. Information about other people is theirs to share, not yours. And apps and chatbots belong in the outer circle, even when they feel friendly and private.`,
        `Chora miduara mitatu, mmoja ndani ya mwingine.

Katika mduara mdogo wa katikati andika "Mimi". Katika mduara unaofuata andika watu wanaotunza afya yako: wazazi au walezi wako na mhudumu wako wa afya. Katika mduara wa nje andika "Wengine wote": marafiki, wanafunzi wenzako, majirani, vikundi vya WhatsApp, programu na chatbot.

Sasa chukua mambo matatu ya afya, kwa mfano "Niliugua malaria muhula uliopita", "Babu yangu anatumia fimbo kutembea", "Rafiki yangu anaogopa sindano". Kwa kila moja, uliza: taarifa hii ni ya nani, na ni mduara upi unaoruhusiwa kuijua?

Angalia mambo mawili. Taarifa za watu wengine ni zao kuzishiriki, si zako. Na programu na chatbot ziko katika mduara wa nje, hata zinapoonekana za kirafiki na za faragha.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Health data covers illness, tests, medicines, pregnancy, HIV status, mental health and clinic visits.
- The Data Protection Act, 2019 treats it as sensitive personal data; the Health Act, 2017 requires confidentiality.
- Once shared, health information cannot be called back.
- Other people's health is theirs to share, not yours.
- Next: what symptom checkers and chatbots can and cannot do, and when to call 999 or 112.`,
        `- Data za afya zinahusu magonjwa, vipimo, dawa, ujauzito, hali ya VVU, afya ya akili na ziara za kliniki.
- Sheria ya Ulinzi wa Data, 2019 inazichukulia kama data binafsi nyeti; Sheria ya Afya, 2017 inataka usiri.
- Taarifa za afya zikishashirikiwa, haziwezi kurudishwa.
- Afya ya watu wengine ni yao kuishiriki, si yako.
- Ifuatayo: vikagua dalili na chatbot vinaweza na haviwezi kufanya nini, na wakati wa kupiga 999 au 112.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u3
  {
    id: "hlt-b-u3",
    titleEn: "Symptom checkers and chatbots",
    titleSw: "Vikagua dalili na chatbot",
    cards: [
      note(
        "What they are and how they work",
        "Ni nini na vinafanyaje kazi",
        `A symptom checker is an app or website that asks you questions about how you feel, such as "Do you have a fever?" or "How many days?", and then shows a list of possible causes and how urgent it might be. A symptom is something you feel or notice, like pain, cough or itching.

How does it work? Its makers fed it many past cases where the answers and the final diagnosis were known. It learned which patterns of answers often went with which illness. When you answer, it matches your answers to those patterns and shows the closest ones. A health chatbot works differently: it is a language model, which predicts likely words one after another. That is why it can sound very sure even when it is guessing.

What can they do well? Help you put your worries into words. Explain a medical word you heard. Help you prepare questions before you go to the dispensary.

What can they not do? They cannot see you, touch you, listen to your chest or test your blood. They only know what you typed, and people often forget important details. They may have learned mostly from other countries, where illnesses like malaria are less common. And they cannot take responsibility.

Most important: some signs mean "get help now", not "type into an app". If someone cannot breathe well, is unconscious or will not wake up, is having fits (convulsions), is bleeding heavily, has severe chest pain, or suddenly cannot move one side of the body or speak clearly, call 999 or 112 straight away, or get them to the nearest health facility.`,
        `Kikagua dalili (symptom checker) ni programu au tovuti inayokuuliza maswali kuhusu unavyojisikia, kama "Una homa?" au "Ni siku ngapi?", kisha kuonyesha orodha ya visababishi vinavyowezekana na jinsi hali inavyoweza kuwa ya dharura. Dalili ni kitu unachohisi au kukiona, kama maumivu, kikohozi au kuwashwa.

Kinafanyaje kazi? Waliokitengeneza walikipa visa vingi vya zamani ambavyo majibu na utambuzi wa mwisho vilijulikana. Kilijifunza ni mifumo ipi ya majibu mara nyingi huenda na ugonjwa upi. Unapojibu, kinalinganisha majibu yako na mifumo hiyo na kuonyesha iliyo karibu zaidi. Chatbot ya afya hufanya kazi tofauti: ni modeli ya lugha, inayotabiri maneno yanayowezekana moja baada ya jingine. Ndiyo sababu inaweza kusikika na uhakika mkubwa hata inapokisia tu.

Vinaweza kufanya nini vizuri? Kukusaidia kueleza wasiwasi wako kwa maneno. Kueleza neno la kitabibu ulilosikia. Kukusaidia kuandaa maswali kabla ya kwenda zahanati.

Haviwezi kufanya nini? Haviwezi kukuona, kukugusa, kusikiliza kifua chako wala kupima damu yako. Vinajua tu ulichoandika, na mara nyingi watu husahau mambo muhimu. Huenda vilijifunza zaidi kutoka nchi nyingine, ambako magonjwa kama malaria si ya kawaida. Na haviwezi kubeba jukumu.

Muhimu zaidi: baadhi ya dalili zinamaanisha "pata msaada sasa", si "andika kwenye programu". Mtu akishindwa kupumua vizuri, akizirai au asipoamka, akipata degedege (mwili kukakamaa na kutetemeka ghafla), akivuja damu nyingi, akiwa na maumivu makali ya kifua, au ghafla akishindwa kusogeza upande mmoja wa mwili au kuongea vizuri, piga 999 au 112 mara moja, au mpeleke kituo cha afya kilicho karibu.`
      ),
      reveal([
        {
          termEn: "Symptom",
          termSw: "Dalili",
          defEn: "Something a person feels or notices in their body, such as pain, cough or dizziness.",
          defSw: "Kitu mtu anachohisi au kukiona mwilini, kama maumivu, kikohozi au kizunguzungu.",
        },
        {
          termEn: "Symptom checker",
          termSw: "Kikagua dalili",
          defEn: "An app that asks questions and suggests possible causes and urgency. It gives a guess, not a diagnosis.",
          defSw: "Programu inayouliza maswali na kupendekeza visababishi vinavyowezekana na kiwango cha dharura. Inatoa makisio, si utambuzi.",
        },
        {
          termEn: "Danger sign",
          termSw: "Dalili ya hatari",
          defEn: "A sign that means a person needs help immediately, such as trouble breathing, fits or heavy bleeding.",
          defSw: "Dalili inayomaanisha mtu anahitaji msaada mara moja, kama shida ya kupumua, degedege au kuvuja damu nyingi.",
        },
        {
          termEn: "Emergency numbers 999 and 112",
          termSw: "Namba za dharura 999 na 112",
          defEn: "Free numbers to call in Kenya when a life may be in danger.",
          defSw: "Namba za bure za kupiga Kenya maisha yanapokuwa hatarini.",
        },
      ]),
      note(
        "Worked example: two afternoons in Machakos",
        "Mfano: siku mbili huko Machakos",
        `Afternoon one. Grace, 15, has had an itchy rash on her arm for two days. She has no fever and feels fine otherwise. She uses a symptom checker. It lists four possible causes and says "see a health worker within a few days". Grace does not pick a cause herself. She writes down three questions: when did it start, did it spread, is anything new at home such as a soap? She shows her mother, and they go to the dispensary the next day. The clinical officer examines the rash and decides. The checker helped them prepare. It did not decide.

Afternoon two. Grace's grandmother is sitting outside. Suddenly her face droops on one side and her words come out wrong. Grace's cousin picks up his phone to type the symptoms into a chatbot.

Stop. Count the time. Typing the question, reading the answer and asking follow-up questions takes about 5 minutes. Calling 999 or 112 takes less than 1 minute to start getting help. With sudden weakness and trouble speaking, every minute matters.

Grace calls 112, says where they are, and describes what she sees. The cousin sends a message to the nearest CHP so she can help guide them.

The lesson: a checker can help with a question that can wait. It is the wrong tool when a danger sign appears.`,
        `Mchana wa kwanza. Grace, miaka 15, ana upele unaowasha mkononi kwa siku mbili. Hana homa na anajisikia vizuri vinginevyo. Anatumia kikagua dalili. Kinaorodhesha visababishi vinne vinavyowezekana na kusema "mwone mhudumu wa afya ndani ya siku chache". Grace hachagui kisababishi mwenyewe. Anaandika maswali matatu: ulianza lini, umeenea, kuna kitu kipya nyumbani kama sabuni? Anamwonyesha mama yake, na wanaenda zahanati siku inayofuata. Afisa wa kliniki anachunguza upele na kuamua. Kikagua dalili kiliwasaidia kujiandaa. Hakikuamua.

Mchana wa pili. Bibi yake Grace ameketi nje. Ghafla uso wake unalegea upande mmoja na maneno yake yanatoka vibaya. Binamu wa Grace anachukua simu yake kuandika dalili kwenye chatbot.

Simama. Hesabu muda. Kuandika swali, kusoma jibu na kuuliza maswali zaidi kunachukua takriban dakika 5. Kupiga 999 au 112 kunachukua chini ya dakika 1 kuanza kupata msaada. Kwa udhaifu wa ghafla na shida ya kuongea, kila dakika ni muhimu.

Grace anapiga 112, anasema walipo, na kueleza anachokiona. Binamu anamtumia ujumbe CHP aliye karibu ili awasaidie kuwaongoza.

Funzo: kikagua dalili kinaweza kusaidia kwa swali linaloweza kusubiri. Ni zana isiyofaa dalili ya hatari inapoonekana.`
      ),
      scenario({
        titleEn: "Scenario: the confident chatbot",
        titleSw: "Hali: chatbot yenye uhakika",
        situationEn:
          "Brian, 17, has had a headache and fever for three days in Kisumu. A chatbot tells him: 'This is most likely a viral infection. It will pass on its own in a week.' Brian feels relieved and decides to skip the dispensary.",
        situationSw:
          "Brian, miaka 17, amekuwa na maumivu ya kichwa na homa kwa siku tatu huko Kisumu. Chatbot inamwambia: 'Hii huenda ni maambukizi ya virusi. Yatapita yenyewe baada ya wiki.' Brian anapata faraja na anaamua kutokwenda zahanati.",
        questionEn: "What is the main problem with Brian's decision?",
        questionSw: "Tatizo kuu la uamuzi wa Brian ni lipi?",
        optionsEn: [
          "There is no problem; the chatbot gave a clear answer and sounded sure",
          "The chatbot cannot test him, and fever in an area with malaria needs a health worker and often a test",
          "He should have asked the chatbot to name a medicine as well",
          "He should have waited a full week to see if the chatbot was right",
        ],
        optionsSw: [
          "Hakuna tatizo; chatbot ilitoa jibu wazi na ilisikika na uhakika",
          "Chatbot haiwezi kumpima, na homa katika eneo lenye malaria inahitaji mhudumu wa afya na mara nyingi kipimo",
          "Alipaswa kuiomba chatbot itaje dawa pia",
          "Alipaswa kusubiri wiki nzima kuona kama chatbot ilikuwa sahihi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Sounding sure is not the same as being right. Language models are built to produce fluent text, not to be certain.",
          "Correct. Only a test and a trained person can tell what is causing the fever. The chatbot does not know where Brian lives or what is common there.",
          "Asking for medicine makes the risk worse. Medicine choices belong to a clinician or pharmacist.",
          "Waiting to check a guess can let a treatable illness become serious. A fever for three days is a reason to go now.",
        ],
        hintsSw: [
          "Kusikika na uhakika si sawa na kuwa sahihi. Modeli za lugha zimeundwa kutoa maandishi fasaha, si kuwa na uhakika.",
          "Sahihi. Ni kipimo na mtu aliyefunzwa tu wanaoweza kujua kinachosababisha homa. Chatbot haijui Brian anaishi wapi wala kinachotokea mara nyingi huko.",
          "Kuomba dawa kunaongeza hatari. Uchaguzi wa dawa ni kazi ya afisa wa kliniki au mfamasia.",
          "Kusubiri ili kukagua makisio kunaweza kuruhusu ugonjwa unaotibika kuwa mbaya. Homa ya siku tatu ni sababu ya kwenda sasa.",
        ],
        explainEn:
          "A confident answer is not evidence. Use a chatbot to prepare questions, then let a health worker examine and test you.",
        explainSw:
          "Jibu lenye uhakika si ushahidi. Tumia chatbot kuandaa maswali, kisha mwache mhudumu wa afya akuchunguze na kukupima.",
      }),
      quiz(
        "Which is the safest way to use a symptom checker?",
        "Ni njia ipi salama zaidi ya kutumia kikagua dalili?",
        [
          "Use it to pick the most likely illness, then buy medicine for it at the chemist",
          "Use it to write down your symptoms and questions, then take them to a health worker",
          "Use it instead of the clinic when the queue at the dispensary is long",
          "Use it first when someone is having fits, so you can describe the fits correctly",
        ],
        [
          "Kukitumia kuchagua ugonjwa unaowezekana zaidi, kisha kununua dawa yake kwa duka la dawa",
          "Kukitumia kuandika dalili na maswali yako, kisha kuyapeleka kwa mhudumu wa afya",
          "Kukitumia badala ya kliniki foleni ya zahanati ikiwa ndefu",
          "Kukitumia kwanza mtu anapopata degedege, ili ueleze degedege kwa usahihi",
        ],
        1,
        "A checker is good preparation for a visit, not a replacement for one. Buying medicine from its guess skips diagnosis, a long queue does not make the app able to examine you, and fits are a danger sign: call 999 or 112 first.",
        "Kikagua dalili ni maandalizi mazuri ya ziara, si mbadala wake. Kununua dawa kutokana na makisio yake kunaruka utambuzi, foleni ndefu haifanyi programu iweze kukuchunguza, na degedege ni dalili ya hatari: piga 999 au 112 kwanza."
      ),
      note(
        "Try it: make an emergency card",
        "Jaribu: tengeneza kadi ya dharura",
        `With an adult at home, make a small card to keep near the door or in a bag. Write on it:

- Emergency: 999 or 112
- Kenya Red Cross: 1199
- The name of your nearest dispensary or health centre, and how to get there
- The name and phone number of your CHP, if you have one
- The danger signs: trouble breathing, will not wake up, fits, heavy bleeding, severe chest pain, sudden weakness on one side or trouble speaking

Read the card aloud together. Practise saying clearly: who you are, where you are, and what you can see. That short sentence helps the person answering the call send help faster.`,
        `Pamoja na mtu mzima nyumbani, tengeneza kadi ndogo ya kuweka karibu na mlango au kwenye mkoba. Andika juu yake:

- Dharura: 999 au 112
- Shirika la Msalaba Mwekundu Kenya (Kenya Red Cross): 1199
- Jina la zahanati au kituo cha afya kilicho karibu nawe, na jinsi ya kufika huko
- Jina na namba ya simu ya CHP wenu, kama mnaye
- Dalili za hatari: shida ya kupumua, kutoamka, degedege, kuvuja damu nyingi, maumivu makali ya kifua, udhaifu wa ghafla upande mmoja au shida ya kuongea

Soma kadi kwa sauti pamoja. Jizoeze kusema wazi: wewe ni nani, uko wapi, na unaona nini. Sentensi hiyo fupi humsaidia anayepokea simu kutuma msaada haraka zaidi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A symptom checker matches your answers to past patterns. A chatbot predicts words. Both give guesses.
- They only know what you typed. They cannot examine or test you.
- Use them to prepare questions for a health worker, not to choose an illness or a medicine.
- Danger signs mean call 999 or 112 now. Do not type first.
- Next: false health messages on WhatsApp, and how to check them.`,
        `- Kikagua dalili kinalinganisha majibu yako na mifumo ya zamani. Chatbot inatabiri maneno. Vyote vinatoa makisio.
- Vinajua tu ulichoandika. Haviwezi kukuchunguza wala kukupima.
- Vitumie kuandaa maswali kwa mhudumu wa afya, si kuchagua ugonjwa au dawa.
- Dalili za hatari zinamaanisha piga 999 au 112 sasa. Usiandike kwanza.
- Ifuatayo: jumbe za afya za uongo kwenye WhatsApp, na jinsi ya kuzikagua.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u4
  {
    id: "hlt-b-u4",
    titleEn: "Health rumours on WhatsApp",
    titleSw: "Uvumi wa afya kwenye WhatsApp",
    cards: [
      note(
        "Why health rumours travel so fast",
        "Kwa nini uvumi wa afya unasambaa haraka",
        `A health rumour is a claim about illness, medicine, food or a clinic that sounds urgent and is shared before anyone has checked it. On WhatsApp it can reach a whole family group, a church group and a school group in one afternoon.

Why do people forward them? Because they care. A message that says "share with everyone you love" uses that care. It often names no clinic, no date and no Ministry of Health (MOH) page. It may mix one true fact with a false instruction, such as "boil this leaf instead of going to the dispensary".

AI makes this harder, not easier. A language model can write a rumour that sounds like a nurse wrote it. A deepfake can copy a known presenter's face onto a false warning. Sounding official is not the same as being official.

How do you check? Ask four questions. Who wrote this, and can I find them outside this chat? Does a health facility or the MOH say the same thing? Does it tell me to skip a clinic, a vaccine or a medicine I was given? If someone is already sick, should I be calling for help instead of arguing in a group?

If a person cannot breathe well, will not wake, is having fits, is bleeding heavily, has severe chest pain, or suddenly cannot speak or move one side, stop reading the group. Call 999 or 112, or Kenya's ambulance short code 719, or take them to the nearest facility.`,
        `Uvumi wa afya ni dai kuhusu ugonjwa, dawa, chakula au kliniki linalosikika la dharura na linashirikiwa kabla mtu yeyote hajalikagua. Kwenye WhatsApp linaweza kufika kwenye kikundi cha familia, kanisa na shule kwa mchana mmoja.

Kwa nini watu wanatuma? Kwa sababu wanajali. Ujumbe unaosema "shiriki na kila unayempenda" unatumia kujali huko. Mara nyingi hautaji kliniki, tarehe wala ukurasa wa Wizara ya Afya (MOH). Unaweza kuchanganya jambo moja la kweli na maagizo ya uongo, kama "chemsha jani hili badala ya kwenda zahanati".

AI inafanya hili kuwa gumu zaidi, si rahisi. Modeli ya lugha inaweza kuandika uvumi unaosikika kama muuguzi aliouandika. Video au sauti bandia (deepfake) inaweza kuweka uso wa mtangazaji anayejulikana kwenye onyo la uongo. Kusikika rasmi si sawa na kuwa rasmi.

Unakaguaje? Uliza maswali manne. Nani aliandika hili, na ninaweza kumpata nje ya gumzo hili? Je, kituo cha afya au MOH inasema jambo lilelile? Je, linaniambia niruke kliniki, chanjo au dawa niliyopewa? Ikiwa mtu tayari ni mgonjwa, je, napaswa kupiga simu ya msaada badala ya kubishana kwenye kikundi?

Mtu akishindwa kupumua vizuri, asipoamka, akipata degedege, akivuja damu nyingi, akiwa na maumivu makali ya kifua, au ghafla akishindwa kuongea au kusogeza upande mmoja, acha kusoma kikundi. Piga 999 au 112, au namba fupi ya ambulansi nchini Kenya 719, au mpeleke kituo kilicho karibu.`
      ),
      reveal([
        {
          termEn: "Health rumour",
          termSw: "Uvumi wa afya",
          defEn: "A health claim that is shared widely before it has been checked with a facility or the MOH.",
          defSw: "Dai la afya linaloshirikiwa sana kabla halijakaguliwa na kituo cha afya au MOH.",
        },
        {
          termEn: "Forward",
          termSw: "Kutuma mbele",
          defEn: "Sending a message on to other people. Forwarding a rumour is how it grows.",
          defSw: "Kutuma ujumbe kwa watu wengine. Kutuma uvumi mbele ndiko kunakoufanya ukue.",
        },
        {
          termEn: "Official source",
          termSw: "Chanzo rasmi",
          defEn: "A clinic, hospital, CHP, pharmacist, or an MOH or county health notice you can find outside the chat.",
          defSw: "Kliniki, hospitali, CHP, mfamasia, au tangazo la MOH au kaunti unaloweza kulipata nje ya gumzo.",
        },
        {
          termEn: "Deepfake",
          termSw: "Video au sauti bandia (deepfake)",
          defEn: "A video or voice recording that has been altered so a real person appears to say something they did not say.",
          defSw: "Video au sauti iliyobadilishwa ili mtu halisi aonekane anasema kitu asichosema.",
        },
      ]),
      note(
        "Worked example: three messages in one family group",
        "Mfano: jumbe tatu katika kikundi kimoja cha familia",
        `Imagine a family WhatsApp group of 22 people in Nyeri. Three health messages arrive on the same Saturday.

Message A. "Hot lemon water kills malaria. Share before the clinics hide this." No name, no date, no facility. It tells you to skip the dispensary. Do not forward. A fever still needs a health worker, and in many parts of Kenya that includes a malaria test.

Message B. A flyer photo: "Free measles vaccine at Karatina Health Centre, Tuesday 9 am, bring the mother-and-child booklet." The cousin who posted it says she read it on the facility gate. You can check: call the health centre, ask the CHP, or look at the county health page. If it matches, you may share the flyer and the checking step ("I confirmed with the health centre").

Message C. A voice note that sounds like a newsreader: "Do not take children for any injection this month." Checking takes longer than reading. A cloned voice is still a rumour. Ask the CHP or the facility. Vaccines on the MOH schedule are not cancelled by a voice note.

Count the cost of Message A if 10 families follow it. Ten children with fever stay home. Some may have malaria or another illness that needed a test. Checking one message is slower than forwarding. Treating a late illness is slower still.`,
        `Fikiria kikundi cha WhatsApp cha familia chenye watu 22 huko Nyeri. Jumbe tatu za afya zinafika Jumamosi ileile.

Ujumbe A. "Maji ya limau moto yanaua malaria. Shiriki kabla kliniki hazijaficha hili." Hakuna jina, hakuna tarehe, hakuna kituo. Unakuambia uruke zahanati. Usitume mbele. Homa bado inahitaji mhudumu wa afya, na katika sehemu nyingi za Kenya hilo linajumuisha kipimo cha malaria.

Ujumbe B. Picha ya tangazo: "Chanjo ya surua bure katika Kituo cha Afya cha Karatina, Jumanne saa tatu asubuhi, leta kitabu cha mama na mtoto." Binamu aliyeweka anasema aliisoma langoni mwa kituo. Unaweza kukagua: piga simu kituo, muulize CHP, au angalia ukurasa wa afya wa kaunti. Ikiwa inalingana, unaweza kushiriki tangazo na hatua ya kukagua ("Nilithibitisha na kituo cha afya").

Ujumbe C. Ujumbe wa sauti unaosikika kama mtangazaji: "Usiwapeleke watoto sindano yoyote mwezi huu." Kukagua kunachukua muda zaidi kuliko kusoma. Sauti iliyonakiliwa bado ni uvumi. Muulize CHP au kituo. Chanjo zilizo kwenye ratiba ya MOH hazifutwi na ujumbe wa sauti.

Hesabu gharama ya Ujumbe A familia 10 zikifuata. Watoto kumi wenye homa wanabaki nyumbani. Baadhi huenda wana malaria au ugonjwa mwingine uliohitaji kipimo. Kukagua ujumbe mmoja ni polepole kuliko kutuma mbele. Kutibu ugonjwa uliochelewa ni polepole zaidi.`
      ),
      scenario({
        titleEn: "Scenario: 'share this to save a life'",
        titleSw: "Hali: 'shiriki hili kuokoa maisha'",
        situationEn:
          "Your aunt forwards a WhatsApp message to the family group: 'Hospitals are hiding a herb that cures typhoid in two days. Share this to save a life. Do not go to the clinic.' Your cousin is at home with fever and stomach pain.",
        situationSw:
          "Shangazi yako anatumia ujumbe wa WhatsApp kwenye kikundi cha familia: 'Hospitali zinaficha mmea unaotibu homa ya matumbo kwa siku mbili. Shiriki hili kuokoa maisha. Usiende kliniki.' Binamu yako yuko nyumbani na homa na maumivu ya tumbo.",
        questionEn: "What should you do first?",
        questionSw: "Unapaswa kufanya nini kwanza?",
        optionsEn: [
          "Forward the message to two more groups, because it says it will save a life",
          "Help the cousin get to a health worker, and do not forward the herb claim",
          "Ask a chatbot whether the herb works, then follow whatever it says",
          "Wait three days to see if the herb works on your cousin before telling anyone",
        ],
        optionsSw: [
          "Kutuma ujumbe kwa vikundi viwili zaidi, kwa sababu unasema utaokoa maisha",
          "Kumsaidia binamu afike kwa mhudumu wa afya, na usitume dai la mmea mbele",
          "Kuiuliza chatbot kama mmea unafaa, kisha kufuata chochote itakachosema",
          "Kusubiri siku tatu kuona kama mmea unafaa kwa binamu kabla ya kumwambia mtu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A message that tells you to skip the clinic is a warning sign, not a reason to spread it.",
          "Correct. A person with fever and stomach pain needs a trained health worker. The rumour can wait; the cousin cannot.",
          "A chatbot cannot test your cousin and may repeat the same rumour in fluent language.",
          "Waiting to 'see if the rumour is true' on a sick person is an experiment nobody consented to.",
        ],
        hintsSw: [
          "Ujumbe unaokuambia uruke kliniki ni ishara ya tahadhari, si sababu ya kuusambaza.",
          "Sahihi. Mtu mwenye homa na maumivu ya tumbo anahitaji mhudumu wa afya aliyefunzwa. Uvumi unaweza kusubiri; binamu hawezi.",
          "Chatbot haiwezi kumpima binamu na inaweza kurudia uvumi uleule kwa lugha fasaha.",
          "Kusubiri 'kuona kama uvumi ni kweli' kwa mtu mgonjwa ni jaribio ambalo hakuna aliyekubali.",
        ],
        explainEn:
          "Care is not the same as checking. Get the sick person to a health worker. Leave unverified herb claims unforwarded.",
        explainSw:
          "Kujali si sawa na kukagua. Mpeleke mgonjwa kwa mhudumu wa afya. Acha madai ya mimea yasiyokaguliwa yasiondoke kwenye kikundi.",
      }),
      quiz(
        "Which WhatsApp health message is safest to share after you have checked it?",
        "Ni ujumbe upi wa afya wa WhatsApp ulio salama zaidi kushiriki baada ya kuukagua?",
        [
          "A message that names no clinic and tells families to skip vaccines",
          "A facility's immunisation day, after you confirmed the time with the health centre or CHP",
          "A voice note that sounds like a doctor and asks you to forward it to 20 people",
          "A screenshot of a stranger's lab result, so the group can 'help interpret it'",
        ],
        [
          "Ujumbe usiotaja kliniki na unaowaambia familia waruke chanjo",
          "Siku ya chanjo ya kituo, baada ya kuthibitisha saa na kituo cha afya au CHP",
          "Ujumbe wa sauti unaosikika kama daktari na unakuomba uutume kwa watu 20",
          "Picha ya skrini ya majibu ya maabara ya mtu usiyemjua, ili kikundi 'kisaidie kuyaeleza'",
        ],
        1,
        "A checked, dated, local service notice helps people. Messages that skip care, demand forwards, or show someone else's results spread harm.",
        "Tangazo la huduma lililokaguliwa, lenye tarehe na mahali, linawasaidia watu. Jumbe zinazopuuza huduma, zinazodai utumaji, au zinazoonyesha majibu ya mtu mwingine zinasambaza madhara."
      ),
      note(
        "Try it: the pause-and-check card",
        "Jaribu: kadi ya simama-na-kagua",
        `Make a small card for the fridge or the back of a phone cover. Write four lines:

- Who sent this, and can I find them outside the chat?
- Does our CHP, dispensary or the MOH say the same?
- Does it tell anyone to skip a clinic, vaccine or prescribed medicine?
- If someone is very sick, call 999, 112 or 719 first. Do not argue in the group.

The next time a health message arrives, read the card before you tap forward. If you cannot answer the first two questions, do not share it.`,
        `Tengeneza kadi ndogo ya fridge au nyuma ya gamba la simu. Andika mistari minne:

- Nani alituma hili, na ninaweza kumpata nje ya gumzo?
- Je, CHP wetu, zahanati au MOH inasema jambo lilelile?
- Je, linamwambia mtu aruke kliniki, chanjo au dawa aliyopewa?
- Mtu akiwa mgonjwa sana, piga 999, 112 au 719 kwanza. Usibishane kwenye kikundi.

Ujumbe wa afya unapofika tena, soma kadi kabla ya kugusa kutuma mbele. Huwezi ukijibu maswali mawili ya kwanza, usiusambaze.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A health rumour uses care to travel. Forwarding is how it grows.
- Check with a facility, a CHP or the MOH before you share.
- A fluent or official-sounding message can still be false.
- Danger signs mean call 999, 112 or 719, not type in a group.
- Next: even a private-feeling chatbot is not a safe place for family medical details.`,
        `- Uvumi wa afya unatumia kujali kusafiri. Kutuma mbele ndiko kunakoufanya ukue.
- Kagua na kituo, CHP au MOH kabla ya kushiriki.
- Ujumbe fasaha au unaosikika rasmi bado unaweza kuwa wa uongo.
- Dalili za hatari zinamaanisha piga 999, 112 au 719, si kuandika kwenye kikundi.
- Ifuatayo: hata chatbot inayoonekana ya faragha si mahali salama pa taarifa za afya za familia.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u5
  {
    id: "hlt-b-u5",
    titleEn: "Never put family medical details in a public bot",
    titleSw: "Usiweke taarifa za afya za familia kwenye bot ya umma",
    cards: [
      note(
        "Public tools are not a clinic notebook",
        "Zana za umma si daftari la kliniki",
        `A public chatbot is a tool on the open internet that anyone can type into. It may feel like a quiet conversation on your phone. It is not. What you type can be stored by the company that runs the tool, read by staff who check the system, used to train a later model, or seen if someone looks over your shoulder.

Health details that must never go into a public bot include: a person's full name, ID or SHA number, phone number, school or village that would identify them, HIV status, pregnancy if it is not yours to share, mental health notes, lab results, photos of clinic papers, and a child's exact illness.

Why? Kenya's Data Protection Act, 2019 treats health data as sensitive personal data. The Health Act, 2017 says patient information must stay confidential. Once you paste a result into a public tool, you cannot pull it back. A screenshot of the chat can leave your phone the same afternoon.

The safe habit is simple. For your own mild question, you may type general words without names: "What questions should I ask a clinician about a cough that has lasted three days?" You still take the answers to a health worker. For anyone else, including family, you do not paste their details. The right place for those details is the clinic, the CHP's approved register, or a parent talking privately to a clinician.`,
        `Chatbot ya umma ni zana kwenye intaneti wazi ambayo mtu yeyote anaweza kuiandikia. Inaweza kuhisi kama mazungumzo ya kimya kwenye simu yako. Si hivyo. Unachoandika kinaweza kuhifadhiwa na kampuni inayoendesha zana, kusomwa na wafanyakazi wanaokagua mfumo, kutumika kufunza modeli ya baadaye, au kuonekana mtu akiangalia juu ya bega lako.

Taarifa za afya ambazo hazipaswi kuingia kwenye bot ya umma ni pamoja na: jina kamili la mtu, namba ya kitambulisho au SHA, namba ya simu, shule au kijiji kinachoweza kumtambulisha, hali ya VVU, ujauzito ikiwa si wako kushiriki, maelezo ya afya ya akili, majibu ya maabara, picha za karatasi za kliniki, na ugonjwa halisi wa mtoto.

Kwa nini? Sheria ya Ulinzi wa Data, 2019 inachukulia data za afya kama data binafsi nyeti. Sheria ya Afya, 2017 inasema taarifa za wagonjwa lazima ziwe siri. Ukishabandika majibu kwenye zana ya umma, huwezi kuyarudisha. Picha ya skrini ya gumzo inaweza kutoka kwenye simu yako mchana uleule.

Tabia salama ni rahisi. Kwa swali lako mwenyewe lisilo zito, unaweza kuandika maneno ya jumla bila majina: "Ni maswali gani niulize mhudumu wa afya kuhusu kikohozi cha siku tatu?" Bado unapeleka majibu kwa mhudumu wa afya. Kwa mtu mwingine yeyote, pamoja na familia, usibandike taarifa zao. Mahali pazuri pa taarifa hizo ni kliniki, daftari lililoidhinishwa la CHP, au mzazi anayezungumza faraghani na mhudumu.`
      ),
      reveal([
        {
          termEn: "Public chatbot",
          termSw: "Chatbot ya umma",
          defEn: "A chat tool on the open internet. Treat anything you type as able to leave your phone.",
          defSw: "Zana ya gumzo kwenye intaneti wazi. Chukulia chochote unachoandika kinaweza kutoka kwenye simu yako.",
        },
        {
          termEn: "Identifier",
          termSw: "Kitambulishi",
          defEn: "A detail that points to one person, such as a name, ID number, phone number or a very specific address.",
          defSw: "Taarifa inayomwelekea mtu mmoja, kama jina, namba ya kitambulisho, namba ya simu au anwani mahususi sana.",
        },
        {
          termEn: "Approved health tool",
          termSw: "Zana ya afya iliyoidhinishwa",
          defEn: "A system your facility, county or the MOH has chosen, with rules for who may see the data.",
          defSw: "Mfumo ambao kituo chako, kaunti au MOH imechagua, wenye kanuni za nani anaweza kuona data.",
        },
        {
          termEn: "Redact",
          termSw: "Futa vitambulishi",
          defEn: "Remove names, numbers and other identifiers before anyone uses a tool to help with wording.",
          defSw: "Ondoa majina, namba na vitambulishi vingine kabla mtu yeyote hajatumia zana kusaidia maneno.",
        },
      ]),
      note(
        "Worked example: two ways to ask about a cough",
        "Mfano: njia mbili za kuuliza kuhusu kikohozi",
        `Faith, 12, wants help putting her little sister's cough into words before the dispensary visit. She tries two drafts on paper first. That is a good habit: write it, then decide whether any tool should see it.

Draft 1 (unsafe): "My sister Neema Wanjiku, ID waiting card 3847, from Kiamumbi, has had a wet cough for 5 days. Here is a photo of her clinic book and her last test. What medicine should she take?" This has a name, a number, a place, a photo of a record, and it asks a bot to choose medicine.

Draft 2 (safer as a question list, still not a diagnosis): "Please list 5 questions a caregiver can ask a clinician about a child with a cough lasting several days. Do not name an illness or a medicine. I will take the questions to the dispensary." No name, no photo, no ID, no treatment request.

Faith does not paste Draft 1 anywhere. She uses Draft 2 only if an adult agrees, then she still goes to the dispensary. The chatbot, if used, helped her remember questions. It did not see Neema, and it did not treat her.

If Faith is herself unsure whether a detail identifies someone, she leaves it out. When in doubt, go to the clinic without the bot.`,
        `Faith, miaka 12, anataka msaada wa kuweka kikohozi cha dadake mdogo katika maneno kabla ya ziara ya zahanati. Anajaribu rasimu mbili kwenye karatasi kwanza. Hiyo ni tabia nzuri: andika, kisha uamue kama zana yoyote inapaswa kuiona.

Rasimu 1 (si salama): "Dada yangu Neema Wanjiku, kadi ya kusubiria kitambulisho 3847, wa Kiamumbi, ana kikohozi chenye makohozi kwa siku 5. Hapa kuna picha ya kitabu chake cha kliniki na kipimo chake cha mwisho. Achukue dawa gani?" Hii ina jina, namba, mahali, picha ya rekodi, na inaiomba bot ichague dawa.

Rasimu 2 (salama zaidi kama orodha ya maswali, bado si utambuzi): "Tafadhali orodhesha maswali 5 ambayo mlezi anaweza kumuuliza mhudumu wa afya kuhusu mtoto mwenye kikohozi cha siku kadhaa. Usitaje ugonjwa wala dawa. Nitapeleka maswali hayo zahanati." Hakuna jina, hakuna picha, hakuna kitambulisho, hakuna ombi la matibabu.

Faith habandiki Rasimu 1 mahali popote. Anatumia Rasimu 2 tu mtu mzima akikubali, kisha bado anaenda zahanati. Chatbot, ikitumiwa, ilimsaidia kukumbuka maswali. Haikumwona Neema, wala haikumtibu.

Faith akiwa na shaka kama taarifa inamtambulisha mtu, anaiacha nje. Ukiwa na shaka, nenda kliniki bila bot.`
      ),
      scenario({
        titleEn: "Scenario: the lab photo in the chat box",
        titleSw: "Hali: picha ya maabara kwenye kisanduku cha gumzo",
        situationEn:
          "Your uncle shows you a photo of your grandmother's lab printout. Her name and a clinic number are at the top. He says: 'Paste it into the health bot. It will tell us what it means faster than the queue.'",
        situationSw:
          "Mjomba wako anakwonyesha picha ya karatasi ya maabara ya bibi yako. Jina lake na namba ya kliniki viko juu. Anasema: 'Ibandike kwenye bot ya afya. Itatuambia maana yake haraka kuliko foleni.'",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Paste the photo, because speed matters more than privacy for family",
          "Refuse to paste it, cover the name if you must discuss wording, and go back to the clinician who ordered the test",
          "Blur the name with your finger, paste the rest, and ask the bot which medicine to buy",
          "Post the photo in the family WhatsApp group first, so everyone can vote on the meaning",
        ],
        optionsSw: [
          "Kubandika picha, kwa sababu kasi ni muhimu kuliko faragha kwa familia",
          "Kukataa kuibandika, kufunika jina ikiwa lazima muzungumzie maneno, na kurudi kwa mhudumu aliyeagiza kipimo",
          "Kuficha jina kwa kidole, kubandika iliyobaki, na kuiuliza bot dawa gani inunuliwe",
          "Kuweka picha kwenye kikundi cha WhatsApp cha familia kwanza, ili kila mtu apige kura kuhusu maana",
        ],
        correctIndex: 1,
        hintsEn: [
          "Family love does not cancel the Data Protection Act. A public bot is not the clinician who ordered the test.",
          "Correct. The printout belongs in the clinic conversation. A bot does not get to see a name, a clinic number or a result.",
          "Hiding a name with a finger often fails, and asking for medicine is a second unsafe step.",
          "A family group is still many phones. That is how Unit 2's screenshot spread.",
        ],
        hintsSw: [
          "Upendo wa familia haufuti Sheria ya Ulinzi wa Data. Bot ya umma si mhudumu aliyeagiza kipimo.",
          "Sahihi. Karatasi hiyo ni ya mazungumzo ya kliniki. Bot haipaswi kuona jina, namba ya kliniki wala majibu.",
          "Kuficha jina kwa kidole mara nyingi kunashindwa, na kuomba dawa ni hatua ya pili isiyo salama.",
          "Kikundi cha familia bado ni simu nyingi. Hivyo ndivyo picha ya skrini ya Somo la 2 ilivyoenea.",
        ],
        explainEn:
          "Lab results, names and clinic numbers stay with the health worker. Public tools do not interpret family records.",
        explainSw:
          "Majibu ya maabara, majina na namba za kliniki zinabaki kwa mhudumu wa afya. Zana za umma hazifafanui rekodi za familia.",
      }),
      quiz(
        "Which prompt is the only one that belongs in a public chatbot?",
        "Ni maagizo yapi pekee yanayofaa chatbot ya umma?",
        [
          "Here is my brother's full name, school and HIV clinic day. What should he eat?",
          "List questions a person can ask a clinician about a long cough. Do not name a disease or a medicine.",
          "Read this photo of a child's clinic booklet and tell me the diagnosis.",
          "My neighbour's SHA number is… remind her when to refill her medicine.",
        ],
        [
          "Hapa kuna jina kamili la kaka yangu, shule na siku ya kliniki ya VVU. Ale nini?",
          "Orodhesha maswali mtu anaweza kumuuliza mhudumu wa afya kuhusu kikohozi kirefu. Usitaje ugonjwa wala dawa.",
          "Soma picha hii ya kitabu cha kliniki cha mtoto na uniambie utambuzi.",
          "Namba ya SHA ya jirani yangu ni… mkumbushe wakati wa kujazia dawa.",
        ],
        1,
        "General questions with no names, numbers, photos or treatment requests can help you prepare. The other three leak sensitive data and ask a bot to do a clinician's job.",
        "Maswali ya jumla bila majina, namba, picha au maombi ya matibabu yanaweza kukusaidia kujiandaa. Mengine matatu yanavuja data nyeti na kumuliza bot afanye kazi ya mhudumu."
      ),
      note(
        "Try it: the redaction test",
        "Jaribu: jaribio la kufuta vitambulishi",
        `With a parent or guardian, write a pretend clinic note about a made-up neighbour (do not use a real person). Include a name, an age, a village and a medicine.

Now cross out every identifier with a pen until a stranger could not tell who it is. What is left should look like: "An adult with a cough for four days. Questions to ask the clinician: …"

If crossing out leaves almost nothing, that is the lesson: the details belonged in the clinic, not in a bot. Keep this paper at home. Do not photograph a real booklet for this exercise.`,
        `Pamoja na mzazi au mlezi, andika dokezo la kubuni la kliniki kuhusu jirani wa kubuni (usitumie mtu halisi). Weka jina, umri, kijiji na dawa.

Sasa piga mstari kila kitambulishi kwa kalamu hadi mgeni asiweze kujua ni nani. Kilichobaki kifaane na: "Mtu mzima mwenye kikohozi kwa siku nne. Maswali ya kumuuliza mhudumu: …"

Ukipiga mstari ukabaki karibu hakuna, hicho ndicho funzo: taarifa hizo zilikuwa za kliniki, si za bot. Weka karatasi hii nyumbani. Usipige picha kitabu halisi kwa zoezi hili.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Public chatbots can store or reuse what you type. They are not a clinic.
- Never paste names, ID or SHA numbers, HIV status, lab photos or another person's illness.
- You may ask for a question list in general words. A clinician still decides.
- Units 1 to 5 are the child-safe path: helper not doctor, private data, emergencies, rumours, no family details in public bots.
- Next: older learners look harder at what symptom checkers cannot see.`,
        `- Chatbot za umma zinaweza kuhifadhi au kutumia tena unachoandika. Si kliniki.
- Usibandike majina, namba za kitambulisho au SHA, hali ya VVU, picha za maabara au ugonjwa wa mtu mwingine.
- Unaweza kuomba orodha ya maswali kwa maneno ya jumla. Mhudumu bado anaamua.
- Masomo 1 hadi 5 ndiyo njia salama kwa watoto: msaidizi si daktari, data za faragha, dharura, uvumi, hakuna taarifa za familia kwenye bot za umma.
- Ifuatayo: wanafunzi wakubwa wanaangalia kwa kina kile vikagua dalili haviwezi kuona.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u6
  {
    id: "hlt-b-u6",
    titleEn: "What symptom checkers cannot see",
    titleSw: "Kile vikagua dalili haviwezi kuona",
    cards: [
      note(
        "Urgency on a screen is still a guess",
        "Uharaka kwenye skrini bado ni makisio",
        `Unit 3 showed that a symptom checker matches your answers to past patterns. This unit looks at the gaps that remain even when the questions look thorough.

The checker cannot see how hard the person is breathing, the colour of their lips, whether they can stand, or how scared a parent looks. It cannot feel a pulse or decide that a story does not match the face in front of you. Those are the jobs of a person who is there.

It also cannot know what is common where you live. A tool trained mostly on clinics in other countries may rank malaria low. It does not know that the dispensary has no malaria tests today. A score labelled "low urgency" is not permission to send someone home.

Triage means sorting people by how soon they need care. A nurse who triages looks at the person. A checker only looks at the form. If the two disagree, the person in the room wins.

Emergencies still skip the form: trouble breathing, will not wake, fits, heavy bleeding, severe chest pain, sudden weakness or trouble speaking. Call 999, 112 or 719, or go now.`,
        `Somo la 3 lilionyesha kwamba kikagua dalili kinalinganisha majibu yako na mifumo ya zamani. Somo hili linaangalia pengo zinazobaki hata maswali yakionekana kamili.

Kikagua dalili hakiwezi kuona jinsi mtu anavyopumua kwa shida, rangi ya midomo, kama anaweza kusimama, au jinsi mzazi alivyo na hofu. Hakiwezi kuhisi mapigo ya moyo wala kuamua kwamba hadithi hailingani na uso ulio mbele yako. Hizo ni kazi za mtu aliye pale.

Pia haijui kinachotokea mara nyingi unapoishi. Zana iliyofunzwa zaidi katika kliniki za nchi nyingine inaweza kuweka malaria chini. Haijui zahanati haina vipimo vya malaria leo. Alama iliyoandikwa "si ya dharura" si ruhusa ya kumrudisha mtu nyumbani.

Triage ni kuwapanga watu kulingana na jinsi wanavyohitaji huduma haraka. Muuguzi anayefanya triage anamuangalia mtu. Kikagua dalili kinaangalia fomu tu. Zikisema tofauti, mtu aliye chumbani ndiye anayeshinda.

Dharura bado zinaruka fomu: shida ya kupumua, kutoamka, degedege, kuvuja damu nyingi, maumivu makali ya kifua, udhaifu wa ghafla au shida ya kuongea. Piga 999, 112 au 719, au nenda sasa.`
      ),
      reveal([
        {
          termEn: "Triage",
          termSw: "Triage",
          defEn: "Sorting people by how soon they need care. A person who can see the patient should do it.",
          defSw: "Kuwapanga watu kulingana na jinsi wanavyohitaji huduma haraka. Mtu anayeweza kumwona mgonjwa ndiye anayepaswa kuifanya.",
        },
        {
          termEn: "Urgency",
          termSw: "Uharaka",
          defEn: "How soon care is needed. It is not the name of the illness.",
          defSw: "Huduma inahitajika haraka kiasi gani. Si jina la ugonjwa.",
        },
        {
          termEn: "Local pattern",
          termSw: "Mfumo wa eneo",
          defEn: "What illnesses are common here, this season, with the tests this facility actually has.",
          defSw: "Magonjwa yapi ni ya kawaida hapa, msimu huu, pamoja na vipimo ambavyo kituo hiki kina navyo kweli.",
        },
        {
          termEn: "Override",
          termSw: "Ubatilishaji",
          defEn: "When a health worker ignores a tool's suggestion because what they see is more important.",
          defSw: "Mhudumu wa afya anapopuuza pendekezo la zana kwa sababu anachoona ni muhimu zaidi.",
        },
      ]),
      note(
        "Worked example: the form said home care",
        "Mfano: fomu ilisema tiba ya nyumbani",
        `Imagine a busy outpatient queue at a fictional health centre in Homa Bay. A caregiver types a child's symptoms into a checker on the waiting-room tablet: fever two days, some cough, still drinking. The tool prints "likely viral — home care, return if worse".

Step 1. The nurse looks at the child, not only the tablet. The child is quiet, breathing fast, and the chest pulls in. The form never asked anyone to count breaths.

Step 2. The nurse counts a rate well above the usual for that age. That is a danger sign, whatever the tablet printed.

Step 3. The nurse overrides the tool, moves the child to the front, and starts the facility pathway. She writes: "Tool said home care; fast breathing seen; assessed now".

Step 4. Later the in-charge reviews similar overrides and adds "is the chest pulling in?" to the tablet questions. That is how a helper is improved. The helper did not get to send the child home.`,
        `Fikiria foleni ya wagonjwa wa nje katika kituo cha afya cha kubuni huko Homa Bay. Mlezi anaandika dalili za mtoto kwenye kikagua dalili kwenye kibao cha chumba cha kusubiri: homa siku mbili, kikohozi kidogo, bado ananywa. Zana inachapisha "huenda ni virusi — tiba ya nyumbani, rudi ikizidi".

Hatua ya 1. Muuguzi anamwangalia mtoto, si kibao pekee. Mtoto yuko kimya, anapumua haraka, na kifua kinavutika ndani. Fomu haikumwomba mtu ahesabu pumzi.

Hatua ya 2. Muuguzi anahesabu kasi iliyo juu ya kawaida kwa umri huo. Hiyo ni dalili ya hatari, chochote kibao kilichochapisha.

Hatua ya 3. Muuguzi anabatilisha zana, anamsogeza mtoto mbele, na kuanza njia ya kituo. Anaandika: "Zana ilisema tiba ya nyumbani; pumzi ya haraka ilionekana; tathmini sasa".

Hatua ya 4. Baadaye msimamizi anapitia ubatilishaji kama huo na kuongeza "je, kifua kinavutika ndani?" kwenye maswali ya kibao. Hivyo ndivyo msaidizi anavyoboreshwa. Msaidizi hakuruhusiwa kumrudisha mtoto nyumbani.`
      ),
      scenario({
        titleEn: "Scenario: low score, wet rainy season",
        titleSw: "Hali: alama ya chini, msimu wa mvua",
        situationEn:
          "It is the long rains in Kisii. A man has fever, headache and chills. A phone checker, trained mostly on data from another region, says 'low urgency, rest at home'. The nearest dispensary can still do a malaria test this afternoon.",
        situationSw:
          "Ni mvua za masika huko Kisii. Mwanaume ana homa, maumivu ya kichwa na kutetemeka. Kikagua dalili cha simu, kilichofunzwa zaidi kwa data ya eneo lingine, kinasema 'si dharura, pumzika nyumbani'. Zahanati iliyo karibu bado inaweza kufanya kipimo cha malaria mchana huu.",
        questionEn: "What is the sound next step?",
        questionSw: "Hatua inayofuata yenye busara ni ipi?",
        optionsEn: [
          "Follow the low score, because the tool saw thousands of fevers",
          "Go for a malaria test and clinical review; the tool does not know this season or this dispensary",
          "Take malaria medicine from a neighbour just in case",
          "Re-type the symptoms in English in case Kiswahili confused the tool",
        ],
        optionsSw: [
          "Fuata alama ya chini, kwa sababu zana iliona homa elfu nyingi",
          "Nenda kwa kipimo cha malaria na tathmini ya kitabibu; zana haijui msimu huu wala zahanati hii",
          "Chukua dawa ya malaria kutoka kwa jirani tu kwa kuhadhari",
          "Andika dalili tena kwa Kiingereza labda Kiswahili kilichanganya zana",
        ],
        correctIndex: 1,
        hintsEn: [
          "Thousands of other fevers are not this man's test result, and they may not be from this county.",
          "Correct. Local season and a test you can actually get beat a low score from elsewhere.",
          "Medicine chosen without a test can be wrong and can hide a different illness.",
          "Language may matter, but switching language does not give the tool a blood test.",
        ],
        hintsSw: [
          "Homa nyingine elfu si majibu ya kipimo cha mwanaume huyu, na huenda si za kaunti hii.",
          "Sahihi. Msimu wa eneo na kipimo unachoweza kupata vinashinda alama ya chini kutoka mahali pengine.",
          "Dawa iliyochaguliwa bila kipimo inaweza kuwa kosa na inaweza kuficha ugonjwa mwingine.",
          "Lugha inaweza kuwa muhimu, lakini kubadilisha lugha haimpi zana kipimo cha damu.",
        ],
        explainEn:
          "A low urgency score is not a malaria test. Use the facility in front of you, especially in a malaria season.",
        explainSw:
          "Alama ya chini ya uharaka si kipimo cha malaria. Tumia kituo kilicho mbele yako, hasa katika msimu wa malaria.",
      }),
      quiz(
        "A checker says a patient is low urgency, but you can see a danger sign the form did not ask about. What should happen?",
        "Kikagua dalili kinasema mgonjwa si wa dharura, lakini unaona dalili ya hatari ambayo fomu haikuuliza. Nini kifanyike?",
        [
          "Trust the score, because it combined many answers",
          "Act on what you can see, and tell the health worker why the tool was incomplete",
          "Keep adding extra symptoms until the score turns red",
          "Delete the result so nobody knows the tool was wrong",
        ],
        [
          "Iamini alama, kwa sababu ilichanganya majibu mengi",
          "Chukua hatua kulingana na unachoona, na umwambie mhudumu kwa nini zana haikuwa kamili",
          "Endelea kuongeza dalili za ziada hadi alama igeuke nyekundu",
          "Futa matokeo ili mtu asijue zana ilikosea",
        ],
        1,
        "What you can see is data the tool never had. Acting on it is good care. Editing answers to force a score, or hiding a miss, makes the record false.",
        "Unachoweza kuona ni data ambayo zana haikuwa nayo. Kuchukua hatua ni huduma nzuri. Kubadilisha majibu ili kulazimisha alama, au kuficha kosa, kunafanya rekodi kuwa ya uongo."
      ),
      note(
        "Try it: two-column comparison",
        "Jaribu: ulinganisho wa safu mbili",
        `Draw two columns. Label one "What a form can know" and the other "What a person in the room can know".

List at least six items, for example: temperature written down; how the chest moves; a typed list of medicines; whether the person can walk in from the gate; village name; fear on a caregiver's face.

You should find that several of the most important danger signs live only in the second column. That is why a checker is a helper for questions, not a gate that can send people home.`,
        `Chora safu mbili. Iite moja "Fomu inaweza kujua nini" na nyingine "Mtu chumbani anaweza kujua nini".

Orodhesha angalau vitu sita, kwa mfano: joto lililoandikwa; jinsi kifua kinavyosogea; orodha iliyoandikwa ya dawa; kama mtu anaweza kutembea kutoka langoni; jina la kijiji; hofu kwenye uso wa mlezi.

Utaona kwamba baadhi ya dalili muhimu za hatari ziko katika safu ya pili pekee. Ndiyo sababu kikagua dalili ni msaidizi wa maswali, si lango linaloweza kuwarudisha watu nyumbani.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Urgency on a screen is not a diagnosis and not a discharge.
- Local season, available tests and what you can see beat a remote score.
- Override the tool when the person in front of you looks worse than the form.
- Next: clinic records, who may see them, and why they are not WhatsApp material.`,
        `- Uharaka kwenye skrini si utambuzi wala si kuruhusu kwenda nyumbani.
- Msimu wa eneo, vipimo vilivyopo na unachoweza kuona vinashinda alama ya mbali.
- Batilisha zana mtu aliye mbele yako anapoonekana mbaya kuliko fomu.
- Ifuatayo: rekodi za kliniki, nani anaweza kuziona, na kwa nini si mambo ya WhatsApp.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u7
  {
    id: "hlt-b-u7",
    titleEn: "Clinic records stay at the clinic",
    titleSw: "Rekodi za kliniki zinabaki kliniki",
    cards: [
      note(
        "What a clinic record is for",
        "Rekodi ya kliniki ni ya nini",
        `A clinic record is the written or electronic story of a person's care: visits, tests, medicines, allergies and the next appointment. In Kenya, many public facilities send summary data into the Kenya Health Information System (KHIS), which is built on DHIS2. That system helps counties plan vaccines, stock and outbreaks. It is not a family WhatsApp album.

Who may see a record? The people who need it to care for that person, and the people the law allows for public health reporting, usually as counts not gossip. A classmate, a landlord, an employer and a public chatbot are not on that list.

Some facilities now use digital clinic tools. M-Kliniki Nia is one Kenyan service that offers scheduling and records in English and Kiswahili. Naming a real service does not mean every clinic uses it, and it does not mean a chatbot on the open internet is the same thing. An approved clinic system has login rules, a limited list of users, and a duty to keep data inside health work. A public bot has none of those.

Photographing a register, a mother-and-child booklet or a discharge summary "to ask the group" copies confidential care onto many phones. Ask the clinician who wrote it, in private.`,
        `Rekodi ya kliniki ni hadithi iliyoandikwa au ya kielektroniki ya huduma ya mtu: ziara, vipimo, dawa, mizio na miadi inayofuata. Nchini Kenya, vituo vingi vya umma hutuma data ya muhtasari kwenye Mfumo wa Taarifa za Afya wa Kenya (KHIS), uliojengwa juu ya DHIS2. Mfumo huo unasaidia kaunti kupanga chanjo, stoo na milipuko. Si albamu ya WhatsApp ya familia.

Nani anaweza kuona rekodi? Watu wanaoihitaji kumhudumia mtu huyo, na wale ambao sheria inaruhusu kwa taarifa za afya ya umma, kwa kawaida kama idadi si umbea. Mwanafunzi mwenzako, mwenye nyumba, mwajiri na chatbot ya umma hawako kwenye orodha hiyo.

Baadhi ya vituo sasa vinatumia zana za kliniki za kidijitali. M-Kliniki Nia ni huduma moja ya Kenya inayotoa upangaji wa miadi na rekodi kwa Kiingereza na Kiswahili. Kutaja huduma halisi hakumaanishi kila kliniki inaitumia, wala hakumaanishi chatbot kwenye intaneti wazi ni kitu kilekile. Mfumo wa kliniki ulioidhinishwa una kanuni za kuingia, orodha ndogo ya watumiaji, na wajibu wa kuweka data ndani ya kazi ya afya. Bot ya umma haina hayo.

Kupiga picha daftari, kitabu cha mama na mtoto au muhtasari wa kuruhusiwa "kuuliza kikundi" kunanakili huduma ya siri kwenye simu nyingi. Muulize mhudumu aliyeiandika, faraghani.`
      ),
      reveal([
        {
          termEn: "Clinic record",
          termSw: "Rekodi ya kliniki",
          defEn: "The visit-by-visit account of a person's care, on paper or in an approved system.",
          defSw: "Maelezo ya ziara kwa ziara ya huduma ya mtu, kwenye karatasi au mfumo ulioidhinishwa.",
        },
        {
          termEn: "KHIS",
          termSw: "KHIS",
          defEn: "Kenya Health Information System: public facilities report summary health data for planning.",
          defSw: "Mfumo wa Taarifa za Afya wa Kenya: vituo vya umma huripoti data ya muhtasari ya afya kwa ajili ya kupanga.",
        },
        {
          termEn: "Need to know",
          termSw: "Haja ya kujua",
          defEn: "Only people who need a detail for care or lawful reporting should see it.",
          defSw: "Ni watu wanaohitaji taarifa kwa huduma au ripoti halali tu wanaopaswa kuiona.",
        },
        {
          termEn: "Approved system",
          termSw: "Mfumo ulioidhinishwa",
          defEn: "A clinic or county tool with logins, a user list and a duty of confidentiality.",
          defSw: "Zana ya kliniki au kaunti yenye kuingia kwa nenosiri, orodha ya watumiaji na wajibu wa usiri.",
        },
      ]),
      note(
        "Worked example: the register on a tea table",
        "Mfano: daftari juu ya meza ya chai",
        `Imagine a fictional dispensary in Murang'a. The paper register for the morning clinic lists 18 names, ages, villages and diagnoses. At lunch, a volunteer photographs two pages "so we can type them later" and sends the photos to a personal WhatsApp to download on another phone.

Count the copies. The register itself is one copy, locked in the clinic. The volunteer's phone is a second. WhatsApp may keep a third. The other phone is a fourth. If the second phone is borrowed by a relative that evening, a fifth person can scroll 18 people's illnesses with tea.

Where it went wrong: the volunteer had a useful goal, typing, but used a public channel. The right path is an approved computer or a paper process that never leaves the facility, done by a person whose job includes records.

The in-charge's fix is simple and strict: no photos of registers, booklets or lab slips. If the clinic later uses a digital tool such as a scheduling service in English and Kiswahili, staff still sign in as themselves and do not export lists to private chats.`,
        `Fikiria zahanati ya kubuni huko Murang'a. Daftari la karatasi la kliniki ya asubuhi lina majina 18, umri, vijiji na utambuzi. Wakati wa chakula cha mchana, mtu wa kujitolea anapiga picha kurasa mbili "ili tuandike baadaye" na anazituma kwa WhatsApp yake binafsi ili azipakue kwenye simu nyingine.

Hesabu nakala. Daftari lenyewe ni nakala moja, limefungwa kliniki. Simu ya mtu wa kujitolea ni ya pili. WhatsApp huenda ikaweka ya tatu. Simu nyingine ni ya nne. Simu ya pili ikikopwa na ndugu jioni, mtu wa tano anaweza kuvinjari magonjwa ya watu 18 akiwa na chai.

Kosa lilikuwa wapi: mtu wa kujitolea alikuwa na lengo zuri, kuandika, lakini alitumia njia ya umma. Njia sahihi ni kompyuta iliyoidhinishwa au mchakato wa karatasi usiotoka kituoni, unaofanywa na mtu ambaye kazi yake ni rekodi.

Marekebisho ya msimamizi ni rahisi na magumu: hakuna picha za daftari, vitabu au karatasi za maabara. Kliniki baadaye ikitumia zana ya kidijitali kama huduma ya miadi kwa Kiingereza na Kiswahili, wafanyakazi bado wanaingia kama wao wenyewe na hawatoi orodha kwenye gumzo binafsi.`
      ),
      scenario({
        titleEn: "Scenario: 'just type it at home'",
        titleSw: "Hali: 'andika tu nyumbani'",
        situationEn:
          "A clerk is behind on entering today's visits. A friend says: 'Photograph the pages, send them to your phone, and type tonight on the sofa. Faster than staying late.'",
        situationSw:
          "Karani amebaki nyuma kuingiza ziara za leo. Rafiki anasema: 'Piga picha kurasa, uzitume kwenye simu yako, na uandike usiku kwenye sofa. Haraka kuliko kukaa mpaka jioni.'",
        questionEn: "What should the clerk do?",
        questionSw: "Karani afanye nini?",
        optionsEn: [
          "Photograph the register; finishing the work matters more than where it is typed",
          "Stay inside the approved process: type at the facility or ask the in-charge for extra time or help",
          "Send the photos only to a spouse, because family is private",
          "Type the names into a public chatbot and ask it to format a spreadsheet",
        ],
        optionsSw: [
          "Apige picha daftari; kumaliza kazi ni muhimu kuliko mahali inapoandikwa",
          "Akae ndani ya mchakato ulioidhinishwa: aandike kituoni au aombe msimamizi muda au msaada zaidi",
          "Atume picha kwa mwenzi tu, kwa sababu familia ni faragha",
          "Aandike majina kwenye chatbot ya umma na aiombe iunde jedwali",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed does not cancel confidentiality. A sofa is not a clinic, and a personal phone is not KHIS.",
          "Correct. Records stay in the facility's process. Backlogs are a staffing problem, not a WhatsApp problem.",
          "A spouse is still someone the patients did not agree would see their diagnoses.",
          "A public chatbot plus a name list is a leak by design.",
        ],
        hintsSw: [
          "Kasi haifuti usiri. Sofa si kliniki, na simu binafsi si KHIS.",
          "Sahihi. Rekodi zinabaki katika mchakato wa kituo. Msongamano ni tatizo la wafanyakazi, si la WhatsApp.",
          "Mwenzi bado ni mtu ambaye wagonjwa hawakukubali aone utambuzi wao.",
          "Chatbot ya umma pamoja na orodha ya majina ni uvujaji kwa makusudi.",
        ],
        explainEn:
          "Clinic records move through approved systems and people, not through personal chats or public tools.",
        explainSw:
          "Rekodi za kliniki zinapita katika mifumo na watu walioidhinishwa, si gumzo binafsi wala zana za umma.",
      }),
      quiz(
        "Why is an approved clinic system different from a public chatbot?",
        "Kwa nini mfumo wa kliniki ulioidhinishwa ni tofauti na chatbot ya umma?",
        [
          "Because approved systems never make mistakes",
          "Because an approved system has logins, a limited user list and a duty to keep health data inside care",
          "Because public chatbots are illegal in Kenya",
          "Because clinic systems only work in English",
        ],
        [
          "Kwa sababu mifumo iliyoidhinishwa haifanyi makosa kamwe",
          "Kwa sababu mfumo ulioidhinishwa una kuingia kwa nenosiri, orodha ndogo ya watumiaji na wajibu wa kuweka data za afya ndani ya huduma",
          "Kwa sababu chatbot za umma ni kinyume cha sheria Kenya",
          "Kwa sababu mifumo ya kliniki inafanya kazi kwa Kiingereza tu",
        ],
        1,
        "The difference is duty and access, not perfection. Public chatbots are not banned as a class; they are the wrong place for records. Some Kenyan clinic tools work in English and Kiswahili.",
        "Tofauti ni wajibu na ufikiaji, si ukamilifu. Chatbot za umma hazijapigwa marufuku kama aina; ni mahali pabaya pa rekodi. Baadhi ya zana za kliniki Kenya zinafanya kazi kwa Kiingereza na Kiswahili."
      ),
      note(
        "Try it: who is in the circle?",
        "Jaribu: nani yuko kwenye mduara?",
        `Draw a circle labelled "May see this visit". Inside it write: the patient or caregiver, the clinician who saw them, the records clerk on duty, and (if needed) the referral facility.

Outside the circle write people who may not see it: classmates, employers, landlords, family WhatsApp groups, public chatbots.

Tape the drawing inside a homework book. The next time someone asks you to photograph a clinic paper, point to the outside of the circle.`,
        `Chora mduara ulioandikwa "Anaweza kuona ziara hii". Ndani yake andika: mgonjwa au mlezi, mhudumu aliyemwona, karani wa rekodi aliye zamu, na (ikihitajika) kituo cha rufaa.

Nje ya mduara andika watu wasioweza kuiona: wanafunzi wenzako, waajiri, wenye nyumba, vikundi vya WhatsApp vya familia, chatbot za umma.

Bandika mchoro ndani ya daftari la kazi ya nyumbani. Mtu akikwomba upige picha karatasi ya kliniki, nena nje ya mduara.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Clinic records exist for care and lawful planning, not for group chats.
- KHIS holds summary data for the health system; that is not the same as posting a name.
- Approved tools have logins and duties. Public bots do not.
- Next: when the shelf is empty, forecasts can help a person order — they cannot invent stock.`,
        `- Rekodi za kliniki zipo kwa huduma na mipango halali, si kwa gumzo za vikundi.
- KHIS inahifadhi data ya muhtasari kwa mfumo wa afya; hiyo si sawa na kuweka jina mtandaoni.
- Zana zilizoidhinishwa zina kuingia na wajibu. Bot za umma hazina.
- Ifuatayo: rafu ikiwa tupu, utabiri unaweza kusaidia mtu kuagiza — hauwezi kubuni stoo.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u8
  {
    id: "hlt-b-u8",
    titleEn: "When the dispensary is out of stock",
    titleSw: "Zahanati inapokosa dawa",
    cards: [
      note(
        "Forecasts help a person order",
        "Utabiri unasaidia mtu kuagiza",
        `A stock-out is when the shelf is empty of a medicine or supply that patients need. It can happen because the order was late, the rains blocked the road, more people were sick than last month, or the last boxes expired.

AI can look at past months and guess how many packs you might need next month. That guess is a forecast. It does not put boxes on the shelf. A person still checks the cupboard, checks the expiry dates, and sends the order through the county or supply system.

A forecast goes wrong when last year was a quiet malaria season and this year is not, when a nearby facility closed and extra patients arrived, or when the model never saw a campaign week. The pharmacist or nurse in charge still walks the shelf.

There have been reported pilots of pharmacy tools in Kenya, including Zendawa, that try to help chemists watch stock and related credit. "Reported pilot" means people have tried the idea. It does not give you a success rate, and it does not mean every duka la dawa has the tool. Do not invent how well it worked.

If a medicine is missing, AI should not tell a patient to buy a substitute from an unknown shop. The pharmacist or clinician decides the next safe step: wait for stock, use an allowed alternative, or refer.`,
        `Upungufu wa stoo (stock-out) ni rafu ikiwa tupu kwa dawa au kifaa ambacho wagonjwa wanahitaji. Unaweza kutokea kwa sababu agizo lilichelewa, mvua ziliziba barabara, watu wengi zaidi waliugua kuliko mwezi uliopita, au masanduku ya mwisho yaliisha muda.

AI inaweza kuangalia miezi iliyopita na kukisia pakiti ngapi huenda ukahitaji mwezi ujao. Makisio hayo ni utabiri. Hayaweki masanduku rafuni. Mtu bado anakagua kabati, anakagua tarehe za kuisha muda, na anatuma agizo kupitia mfumo wa kaunti au ugavi.

Utabiri unakosea mwaka uliopita ulipokuwa msimu tulivu wa malaria na huu si hivyo, kituo kilicho karibu kilipofungwa na wagonjwa wa ziada wakafika, au modeli ilipokuwa haijaona wiki ya kampeni. Mfamasia au muuguzi mkuu bado anatembea rafu.

Kumekuwa na majaribio yaliyoripotiwa ya zana za duka la dawa nchini Kenya, ikiwemo Zendawa, zinazojaribu kuwasaidia wanaoduka kuangalia stoo na mikopo inayohusiana. "Jaribio lililoripotiwa" linamaanisha watu wamejaribu wazo. Halikupi kiwango cha mafanikio, wala halimaanishi kila duka la dawa lina zana. Usibuni jinsi ilivyofanya kazi.

Dawa ikikosekana, AI isimwambie mgonjwa anunue mbadala kutoka duka lisilojulikana. Mfamasia au mhudumu ndiye anaamua hatua salama inayofuata: subiri stoo, tumia mbadala unaoruhusiwa, au rufaa.`
      ),
      reveal([
        {
          termEn: "Stock-out",
          termSw: "Upungufu wa stoo",
          defEn: "The shelf has none of a needed medicine or supply.",
          defSw: "Rafu haina dawa au kifaa kinachohitajika.",
        },
        {
          termEn: "Forecast",
          termSw: "Utabiri",
          defEn: "A guess about how much you will need, based on past use. It can be wrong.",
          defSw: "Makisio ya kiasi utakachohitaji, kulingana na matumizi ya zamani. Yanaweza kuwa na kosa.",
        },
        {
          termEn: "Lead time",
          termSw: "Muda wa kusubiri agizo",
          defEn: "How long it takes from sending an order to the boxes arriving.",
          defSw: "Muda unaochukua kutoka kutuma agizo hadi masanduku kufika.",
        },
        {
          termEn: "Expiry",
          termSw: "Kuisha muda",
          defEn: "The date after which a medicine should not be used. Extra boxes can still be a problem if they expire.",
          defSw: "Tarehe ambayo baada yake dawa isitumike. Masanduku ya ziada bado yanaweza kuwa tatizo yakisha muda.",
        },
      ]),
      note(
        "Worked example: amoxicillin on a small shelf",
        "Mfano: amoxicillin kwenye rafu ndogo",
        `Imagine a fictional dispensary in Kitui that uses about 40 packs of amoxicillin in a quiet month. A simple tool looks at the last six months and forecasts 42 packs for next month. Lead time from the county store is about two weeks.

Step 1. The nurse in charge counts the cupboard: 18 packs, of which 6 expire in three weeks.

Step 2. She does not order 42. She orders enough to cover two weeks of use plus a small buffer, and she uses the near-expiry packs first. The forecast was a starting number, not the order.

Step 3. That week a school reports many sore throats. Daily use jumps. The forecast, trained on quiet months, is already behind. She phones the county store and a neighbouring facility instead of waiting for the next routine order.

Step 4. A caregiver asks a public chatbot what to buy because the shelf is empty. The bot names a medicine. The nurse's rule stands: no substitute from a chat. The clinician or pharmacist decides, or the patient is referred.

The lesson: counts on the shelf plus a phone call beat a neat number on a screen.`,
        `Fikiria zahanati ya kubuni huko Kitui inayotumia takriban pakiti 40 za amoxicillin katika mwezi tulivu. Zana rahisi inaangalia miezi sita iliyopita na kutabiri pakiti 42 kwa mwezi ujao. Muda wa kusubiri kutoka stoo ya kaunti ni takriban wiki mbili.

Hatua ya 1. Muuguzi mkuu anahesabu kabati: pakiti 18, kati yazo 6 zinaisha muda baada ya wiki tatu.

Hatua ya 2. Haagizi 42. Anaagiza inayotosha wiki mbili pamoja na akiba ndogo, na anatumia pakiti zinazokaribia kuisha muda kwanza. Utabiri ulikuwa namba ya kuanzia, si agizo.

Hatua ya 3. Wiki hiyo shule inaripoti koo nyingi. Matumizi ya kila siku yanapanda. Utabiri, uliofunzwa kwa miezi tulivu, tayari umebaki nyuma. Anapigia stoo ya kaunti na kituo jirani simu badala ya kusubiri agizo la kawaida.

Hatua ya 4. Mlezi anauliza chatbot ya umma anunue nini kwa sababu rafu ni tupu. Bot inataja dawa. Kanuni ya muuguzi inasimama: hakuna mbadala kutoka gumzo. Mhudumu au mfamasia anaamua, au mgonjwa anapewa rufaa.

Funzo: idadi rafuni pamoja na simu vinashinda namba nadhifu kwenye skrini.`
      ),
      scenario({
        titleEn: "Scenario: the empty malaria shelf",
        titleSw: "Hali: rafu tupu ya malaria",
        situationEn:
          "A mother arrives with a child who has fever. The malaria test is positive. The dispensary's malaria medicine is finished. A phone app says 'buy this other pack from any chemist'. The nearest referral health centre is 12 km away and still has stock this morning.",
        situationSw:
          "Mama anafika na mtoto mwenye homa. Kipimo cha malaria ni chanya. Dawa ya malaria ya zahanati imeisha. Programu ya simu inasema 'nunua pakiti hii nyingine katika duka lolote la dawa'. Kituo cha afya cha rufaa kilicho karibu kiko kilomita 12 na bado kina stoo asubuhi hii.",
        questionEn: "What should staff do?",
        questionSw: "Wafanyakazi wafanye nini?",
        optionsEn: [
          "Follow the app and send her to any chemist for the named pack",
          "Start the MOH referral pathway to the health centre that has stock, and do not let the app choose a substitute",
          "Ask a public chatbot for a herbal alternative until next week's delivery",
          "Tell her to wait at home until the county truck arrives sometime this month",
        ],
        optionsSw: [
          "Fuata programu na umpeleke duka lolote la dawa kwa pakiti iliyotajwa",
          "Anza njia ya rufaa ya MOH kuelekea kituo cha afya kilicho na stoo, na usiruhusu programu ichague mbadala",
          "Uliza chatbot ya umma mbadala wa mitishamba hadi delivery ya wiki ijayo",
          "Mwambie asubiri nyumbani hadi lori la kaunti lifike wakati fulani mwezi huu",
        ],
        correctIndex: 1,
        hintsEn: [
          "An unnamed chemist is not the treatment pathway, and the app cannot see what that shop actually sells.",
          "Correct. Confirmed malaria with no stock is a referral problem, not a chatbot shopping problem.",
          "Herbs from a bot are not malaria treatment.",
          "Waiting at home with a positive test wastes the diagnosis you already have.",
        ],
        hintsSw: [
          "Duka lisilotajwa si njia ya tiba, na programu haiwezi kuona duka hilo linauza nini kweli.",
          "Sahihi. Malaria iliyothibitishwa bila stoo ni tatizo la rufaa, si la ununuzi wa chatbot.",
          "Mimea kutoka bot si tiba ya malaria.",
          "Kusubiri nyumbani na kipimo chanya kunapoteza utambuzi ambao tayari unayo.",
        ],
        explainEn:
          "When the shelf is empty, people use the referral pathway. AI does not invent a medicine or a shop.",
        explainSw:
          "Rafu ikiwa tupu, watu wanatumia njia ya rufaa. AI haibuni dawa wala duka.",
      }),
      quiz(
        "What is the honest job of an AI stock forecast in a dispensary?",
        "Kazi ya uaminifu ya utabiri wa stoo wa AI katika zahanati ni ipi?",
        [
          "To guarantee that the shelf will never be empty",
          "To give staff a starting number so a person can count, check expiry and place the order",
          "To tell patients which chemist to visit when stock runs out",
          "To replace the county supply system",
        ],
        [
          "Kuhakikisha rafu haitakuwa tupu kamwe",
          "Kuwapa wafanyakazi namba ya kuanzia ili mtu ahesabu, akague kuisha muda na aagize",
          "Kuwaambia wagonjwa waende duka lipi dawa zinapokwisha",
          "Kubadilisha mfumo wa ugavi wa kaunti",
        ],
        1,
        "A forecast is a guess from the past. People still count, watch expiry, and use the real supply and referral systems.",
        "Utabiri ni makisio kutoka kwa yaliyopita. Watu bado wanahesabu, wanaangalia kuisha muda, na wanatumia mifumo halisi ya ugavi na rufaa."
      ),
      note(
        "Try it: a one-week shelf diary",
        "Jaribu: shajara ya rafu ya wiki moja",
        `If you help at a facility, a chemist, or even a home first-aid box, pick one item (for example gloves, ORS, or paracetamol). For seven days write: starting count, how many were used, any expiry you noticed, and whether you re-ordered.

At the end of the week, compare your notes with what a simple average of the seven days would have guessed for next week. Where did the average miss? That gap is why a person still walks the shelf.`,
        `Ukisaidia kituoni, dukani la dawa, au hata kwenye sanduku la huduma ya kwanza nyumbani, chagua kitu kimoja (kwa mfano glavu, ORS, au paracetamol). Kwa siku saba andika: idadi ya kuanzia, ngapi zilitumika, kuisha muda ulikoona, na kama uliagiza tena.

Mwisho wa wiki, linganisha maelezo yako na wastani rahisi wa siku saba ungekuwa umekisia kwa wiki ijayo. Wastani ulikosa wapi? Pengo hilo ndiyo sababu mtu bado anatembea rafu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A stock forecast is a guess. A person still counts and orders.
- Reported pharmacy pilots, including Zendawa, are not proof of a number.
- Empty shelf plus a sick person means referral or a clinician's alternative, not a chatbot shop.
- Next: health tools work unevenly across English, Kiswahili and Sheng.`,
        `- Utabiri wa stoo ni makisio. Mtu bado anahesabu na kuagiza.
- Majaribio yaliyoripotiwa ya duka la dawa, ikiwemo Zendawa, si uthibitisho wa namba.
- Rafu tupu pamoja na mgonjwa inamaanisha rufaa au mbadala wa mhudumu, si duka la chatbot.
- Ifuatayo: zana za afya hazifanyi kazi sawa katika Kiingereza, Kiswahili na Sheng.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u9
  {
    id: "hlt-b-u9",
    titleEn: "Health tools and language",
    titleSw: "Zana za afya na lugha",
    cards: [
      note(
        "The same body, different words",
        "Mwili uleule, maneno tofauti",
        `A health tool is only as useful as the words it understands. Many models saw far more English medical text than Kiswahili, and almost no Sheng. So the same cough can be typed three ways and get three qualities of answer.

"My child has fast breathing and the chest pulls in" may match training examples well. "Mtoto anapumua haraka na kifua kinavutika ndani" may work if the tool was built for Kenya. "Mtoi hana nguvu kabisa, anadofo" may be sorted as a weak complaint, even when it is an emergency.

That is not because Kiswahili is unclear. It is because the training pile was uneven. M-Kliniki Nia offers English and Kiswahili on purpose: a Kenyan clinic tool should meet people in both. A public chatbot that only sounds fluent in English is not "smarter". It is better stocked with English examples.

Your job as a user is to notice the gap. If a tool ignores a Kiswahili danger sign, believe the person in front of you. If you use a helper to draft a poster, ask for both languages and then have a health worker check both. Never assume a translation is medically correct just because it is grammatical.`,
        `Zana ya afya ina manufaa kadiri maneno inayoyaelewa. Modeli nyingi ziliona maandishi ya kitabibu ya Kiingereza mengi zaidi kuliko Kiswahili, na Sheng karibu hapana. Kwa hiyo kikohozi kilekile kinaweza kuandikwa njia tatu na kupata majibu ya ubora tofauti.

"My child has fast breathing and the chest pulls in" huenda ikalingana vizuri na mifano ya mafunzo. "Mtoto anapumua haraka na kifua kinavutika ndani" huenda ikafanya kazi zana ikiwa ilijengwa kwa Kenya. "Mtoi hana nguvu kabisa, anadofo" huenda ikawekwa kama malalamiko dhaifu, hata ikiwa ni dharura.

Hiyo si kwa sababu Kiswahili si wazi. Ni kwa sababu rundo la mafunzo lilikuwa si sawa. M-Kliniki Nia inatoa Kiingereza na Kiswahili kwa makusudi: zana ya kliniki ya Kenya inapaswa kukutana na watu katika lugha zote mbili. Chatbot ya umma inayosikika fasaha kwa Kiingereza tu si "werevu zaidi". Imejaa mifano ya Kiingereza zaidi.

Kazi yako kama mtumiaji ni kuona pengo. Zana ikipuuza dalili ya hatari ya Kiswahili, mwamini mtu aliye mbele yako. Ukitumia msaidizi kuandaa bango, omba lugha zote mbili kisha mhudumu wa afya akague zote. Usidhani tafsiri ni sahihi kitabibu kwa sababu tu sarufi iko sawa.`
      ),
      reveal([
        {
          termEn: "Language gap",
          termSw: "Pengo la lugha",
          defEn: "When a tool works better in one language than another because of uneven training data.",
          defSw: "Zana inapofanya kazi vizuri zaidi katika lugha moja kuliko nyingine kwa sababu ya data ya mafunzo isiyo sawa.",
        },
        {
          termEn: "Sheng",
          termSw: "Sheng",
          defEn: "A mixed urban Kenyan youth language. Many health models have seen almost none of it.",
          defSw: "Lugha mchanganyiko ya vijana mijini Kenya. Modeli nyingi za afya hazijaiona karibu kabisa.",
        },
        {
          termEn: "Bilingual service",
          termSw: "Huduma ya lugha mbili",
          defEn: "A tool designed to work in English and Kiswahili, such as M-Kliniki Nia, not a bot that only translates at the end.",
          defSw: "Zana iliyoundwa kufanya kazi kwa Kiingereza na Kiswahili, kama M-Kliniki Nia, si bot inayotafsiri mwishoni tu.",
        },
        {
          termEn: "Mother tongue",
          termSw: "Lugha ya mama",
          defEn: "The language a person is most at home in. Care should not wait for English.",
          defSw: "Lugha ambayo mtu yuko nyumbani zaidi. Huduma haipaswi kusubiri Kiingereza.",
        },
      ]),
      note(
        "Worked example: one danger, three phrasings",
        "Mfano: hatari moja, misemo mitatu",
        `A fictional CHP in Kawangware writes three versions of the same household finding about a baby who will not feed and has no energy.

Version A, textbook English: "Infant not feeding, very weak." A public checker flags it as urgent.

Version B, Standard Kiswahili: "Mtoto mchanga hanyonyi, hana nguvu." Some tools flag it. Some ask a vague follow-up because they were built on English templates.

Version C, Sheng mixed into Kiswahili: "Mtoi hana nguvu kabisa, anadofo, hataki maziwa." A tool trained on English forums files it as "tired" and suggests rest.

The baby did not change. The words did. The CHP does not wait for the tool to catch Version C. She refers along the MOH pathway because of what she saw in the home.

When she later drafts a community poster, she asks a helper for English and Kiswahili lines about danger signs, then a nurse reads both. The Sheng version she writes herself, because she knows her streets and the helper does not.`,
        `CHP wa kubuni huko Kawangware anaandika matoleo matatu ya ugunduzi uleule wa kaya kuhusu mtoto mchanga asiyenyonya na asiye na nguvu.

Toleo A, Kiingereza cha kitabu: "Infant not feeding, very weak." Kikagua dalili cha umma kinakiweka kama dharura.

Toleo B, Kiswahili sanifu: "Mtoto mchanga hanyonyi, hana nguvu." Baadhi ya zana zinakiweka. Baadhi zinauliza swali la kufuata lisilo wazi kwa sababu zilijengwa kwa violezo vya Kiingereza.

Toleo C, Sheng iliyochanganywa na Kiswahili: "Mtoi hana nguvu kabisa, anadofo, hataki maziwa." Zana iliyofunzwa kwenye vikao vya Kiingereza inaweka kama "amechoka" na kupendekeza pumziko.

Mtoto hakubadilika. Maneno yalibadilika. CHP hasubiri zana inase Toleo C. Anatoa rufaa kulingana na njia ya MOH kwa sababu ya alichoona nyumbani.

Anapoandaa bango la jamii baadaye, anaiomba msaidizi mistari ya Kiingereza na Kiswahili kuhusu dalili za hatari, kisha muuguzi anasoma zote. Toleo la Sheng anaandika mwenyewe, kwa sababu anajua mitaa yake na msaidizi hajui.`
      ),
      scenario({
        titleEn: "Scenario: the English-only poster",
        titleSw: "Hali: bango la Kiingereza tu",
        situationEn:
          "A youth group uses a chatbot to draft a cholera-prevention poster for a market in Kisumu. The draft is fluent English. Many traders at the market are more comfortable in Kiswahili. The group is proud of how official the English looks.",
        situationSw:
          "Kikundi cha vijana kinatumia chatbot kuandaa bango la kuzuia kipindupindu kwa soko huko Kisumu. Rasimu ni Kiingereza fasaha. Wafanyabiashara wengi sokoni wana Kiswahili vizuri zaidi. Kikundi kinafahari jinsi Kiingereza kinavyoonekana rasmi.",
        questionEn: "What should they do before printing?",
        questionSw: "Wafanye nini kabla ya kuchapisha?",
        optionsEn: [
          "Print the English only, because official health talk is always in English",
          "Produce a checked Kiswahili version as well, have a health worker review both, then print",
          "Let the chatbot translate at the last minute and print without review",
          "Add Sheng slang the chatbot invented, to look closer to the market",
        ],
        optionsSw: [
          "Chapisha Kiingereza pekee, kwa sababu mazungumzo rasmi ya afya daima ni Kiingereza",
          "Tengeneza toleo la Kiswahili lililokaguliwa pia, mhudumu wa afya apitie zote, kisha chapisha",
          "Acha chatbot itafsiri dakika ya mwisho na uchapishe bila ukaguzi",
          "Ongeza Sheng ambayo chatbot ilibuni, ili ionekane karibu na soko",
        ],
        correctIndex: 1,
        hintsEn: [
          "English prestige does not reach a trader who needs the message in Kiswahili.",
          "Correct. Both languages, then a human check. Fluency is not a clinical review.",
          "Instant translation can invent the wrong word for a danger sign.",
          "Invented slang can offend or mislead. If Sheng is needed, a local person writes it.",
        ],
        hintsSw: [
          "Hadhi ya Kiingereza haifiki mfanyabiashara anayehitaji ujumbe kwa Kiswahili.",
          "Sahihi. Lugha zote mbili, kisha ukaguzi wa binadamu. Ufasaha si mapitio ya kitabibu.",
          "Tafsiri ya papo hapo inaweza kubuni neno lisilo sahihi la dalili ya hatari.",
          "Sheng iliyobuniwa inaweza kukera au kupotosha. Sheng ikihitajika, mtu wa eneo anaandika.",
        ],
        explainEn:
          "Health education should meet people in the language they use. AI drafts; a health worker checks every language.",
        explainSw:
          "Elimu ya afya inapaswa kukutana na watu katika lugha wanayotumia. AI inaandaa; mhudumu wa afya anakagua kila lugha.",
      }),
      quiz(
        "A caregiver describes a baby in Sheng. The tool replies 'rest at home'. You can see the baby is very weak. What do you do?",
        "Mlezi anaeleza mtoto mchanga kwa Sheng. Zana inajibu 'pumzika nyumbani'. Unaona mtoto ni dhaifu sana. Unafanya nini?",
        [
          "Follow the tool, because it is consistent",
          "Trust what you see, refer or get emergency help, and treat the Sheng as a language gap not a mild case",
          "Ask the caregiver to repeat in English until the tool agrees it is serious",
          "Correct the caregiver's Sheng so the record looks neater",
        ],
        [
          "Fuata zana, kwa sababu inalingana",
          "Amini unachoona, toa rufaa au pata msaada wa dharura, na chukulia Sheng kama pengo la lugha si kisa chepesi",
          "Mwombe mlezi arudie kwa Kiingereza hadi zana ikubali ni zito",
          "Sahihisha Sheng ya mlezi ili rekodi ionekane nadhifu",
        ],
        1,
        "A weak baby is a danger sign in any language. Do not delay care to please a tool that does not know Sheng.",
        "Mtoto mchanga dhaifu ni dalili ya hatari katika lugha yoyote. Usicheleweshe huduma ili kuipendeza zana isiyojua Sheng."
      ),
      note(
        "Try it: one message, two languages",
        "Jaribu: ujumbe mmoja, lugha mbili",
        `Pick one true, non-personal health fact you already know from school or a clinic talk, for example "wash hands with soap before eating". Write it in English and in Kiswahili on paper.

Read both aloud to a family member. Ask which one they would follow more easily. If they prefer Kiswahili, your English-only poster would have missed them. Do not add names, illnesses of real people, or medicine doses.`,
        `Chagua jambo moja la kweli, lisilo binafsi, la afya ambalo tayari unalijua kutoka shuleni au mazungumzo ya kliniki, kwa mfano "nawa mikono kwa sabuni kabla ya kula". Liandike kwa Kiingereza na Kiswahili kwenye karatasi.

Lisome kwa sauti kwa mwanafamilia. Uliza ni lipi angefuata kwa urahisi zaidi. Akipendelea Kiswahili, bango lako la Kiingereza pekee lingemkosa. Usiongeze majina, magonjwa ya watu halisi, wala dozi za dawa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Tools often work better in English than in Kiswahili or Sheng. That is a data gap, not a person gap.
- M-Kliniki Nia is an example of offering both English and Kiswahili on purpose.
- Believe the patient in front of you when language makes the tool miss.
- Next: practise a CHP education prompt that a health worker must review.`,
        `- Zana mara nyingi hufanya kazi vizuri zaidi kwa Kiingereza kuliko Kiswahili au Sheng. Hilo ni pengo la data, si pengo la mtu.
- M-Kliniki Nia ni mfano wa kutoa Kiingereza na Kiswahili kwa makusudi.
- Mwamini mgonjwa aliye mbele yako lugha inapofanya zana ikose.
- Ifuatayo: fanya mazoezi ya maagizo ya ujumbe wa elimu ya CHP ambayo mhudumu lazima ayakague.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u10
  {
    id: "hlt-b-u10",
    titleEn: "Draft a CHP education message, then review it",
    titleSw: "Andaa ujumbe wa elimu wa CHP, kisha ukague",
    cards: [
      note(
        "AI drafts; a health worker decides the words that go out",
        "AI inaandaa; mhudumu wa afya anaamua maneno yanayotoka",
        `A community health promoter (CHP) visits households under Kenya's universal health coverage (UHC) work. One useful job for AI is drafting a short education message: handwashing, when to bring a child with danger signs, where the immunisation day is. Drafting is not diagnosing, and it is not treating.

A safe draft has four locks.

- No person's name, ID, SHA number, HIV status, house number that points to one family, or photo.
- No emergency diagnosis and no medicine name or dose.
- A clear next step that follows MOH pathways: visit the CHP, go to the dispensary, or call 999, 112 or 719 if it is an emergency.
- A human review line: a clinician, CHP supervisor or health records officer reads it before it is sent or pinned on a tree.

If any lock is missing, the message stays on the paper. Fluency is not permission to publish.`,
        `Mhamasishaji wa afya ya jamii (CHP) anatembelea kaya chini ya kazi ya bima ya afya kwa wote (UHC) nchini Kenya. Kazi moja yenye manufaa kwa AI ni kuandaa ujumbe mfupi wa elimu: kunawa mikono, lini kuleta mtoto mwenye dalili za hatari, siku ya chanjo iko wapi. Kuandaa si kutambua ugonjwa, wala si kutibu.

Rasimu salama ina kufuli nne.

- Hakuna jina la mtu, namba ya kitambulisho, namba ya SHA, hali ya VVU, namba ya nyumba inayoelekea familia moja, wala picha.
- Hakuna utambuzi wa dharura wala jina la dawa au dozi.
- Hatua inayofuata iliyo wazi inayofuata njia za MOH: tembelea CHP, nenda zahanati, au piga 999, 112 au 719 ikiwa ni dharura.
- Mstari wa ukaguzi wa binadamu: mhudumu, msimamizi wa CHP au afisa wa rekodi anasoma kabla haujatumwa au kufungwa mti.

Kufuli yoyote ikikosekana, ujumbe unabaki kwenye karatasi. Ufasaha si ruhusa ya kuchapisha.`
      ),
      reveal([
        {
          termEn: "Education message",
          termSw: "Ujumbe wa elimu",
          defEn: "General health information for many households, not advice about one named patient.",
          defSw: "Taarifa za afya za jumla kwa kaya nyingi, si ushauri kuhusu mgonjwa mmoja aliye na jina.",
        },
        {
          termEn: "Review",
          termSw: "Ukaguzi",
          defEn: "A trained person reads the draft against MOH guidance before it goes out.",
          defSw: "Mtu aliyefunzwa anasoma rasimu kulingana na mwongozo wa MOH kabla haijatoka.",
        },
        {
          termEn: "Scope",
          termSw: "Mipaka ya kazi",
          defEn: "What the message is allowed to talk about, and what it must refuse.",
          defSw: "Ujumbe unaruhusiwa kuzungumzia nini, na nini lazima ukatae.",
        },
        {
          termEn: "Prompt",
          termSw: "Maagizo (prompt)",
          defEn: "The instructions you give a chatbot so the draft stays inside those locks.",
          defSw: "Maelekezo unayompa chatbot ili rasimu ibaki ndani ya kufuli hizo.",
        },
      ]),
      note(
        "Worked example: two prompts, two posters",
        "Mfano: maagizo mawili, mabango mawili",
        `A CHP in a fictional village in Kakamega wants a market-day poster about danger signs in children.

Prompt A (unsafe): "Write a notice that baby Brian Otieno of house 12 has malaria and neighbours should bring herbs. Add his mother's phone." This names a child, claims a diagnosis, recommends unreviewed treatment, and shares a number.

Prompt B (safer): "Draft a 6-line poster in English and Kiswahili for caregivers. Topic: danger signs in children under five, such as fast breathing or not feeding. Do not name any person, house, illness of a real child, or medicine. End with: go to the dispensary today, or call 999, 112 or 719 if the child cannot breathe well. Label the draft 'for CHP supervisor review before printing'."

The helper returns two short paragraphs. The supervisor checks them against the MOH list of danger signs, takes out one extra disease name the model added, and only then allows printing.

Count what Prompt B protected: no child was identified, no medicine was sold, and a person still held the pen.`,
        `CHP katika kijiji cha kubuni huko Kakamega anataka bango la siku ya soko kuhusu dalili za hatari kwa watoto.

Maagizo A (si salama): "Andika tangazo kwamba mtoto Brian Otieno wa nyumba 12 ana malaria na majirani walete mitishamba. Ongeza simu ya mama yake." Haya yanamtaja mtoto, yanadai utambuzi, yanapendekeza tiba isiyokaguliwa, na yanashiriki namba.

Maagizo B (salama zaidi): "Andaa bango la mistari 6 kwa Kiingereza na Kiswahili kwa walezi. Mada: dalili za hatari kwa watoto chini ya miaka mitano, kama kupumua haraka au kutoonyonya. Usitaje mtu, nyumba, ugonjwa wa mtoto halisi, wala dawa. Malizia na: nenda zahanati leo, au piga 999, 112 au 719 mtoto akishindwa kupumua vizuri. Weka alama kwenye rasimu 'kwa ukaguzi wa msimamizi wa CHP kabla ya kuchapisha'."

Msaidizi anarudisha aya mbili fupi. Msimamizi anazikagua kulingana na orodha ya MOH ya dalili za hatari, anaondoa jina moja la ziada la ugonjwa ambalo modeli iliongeza, na ndipo anaruhusu kuchapisha.

Hesabu kile Maagizo B yalilinda: hakuna mtoto aliyetambuliwa, hakuna dawa iliyouzwa, na mtu bado alishika kalamu.`
      ),
      scenario({
        titleEn: "Scenario: the unreviewed voice note",
        titleSw: "Hali: ujumbe wa sauti usiokaguliwa",
        situationEn:
          "A CHP asks a chatbot for a 30-second voice-note script about ORS for diarrhoea. The script names a brand, a dose, and 'share with every mother in your street, including Mama Achieng in plot 4'. The CHP is in a hurry for the afternoon visits.",
        situationSw:
          "CHP anauliza chatbot hati ya sekunde 30 ya ujumbe wa sauti kuhusu ORS kwa kuhara. Hati inataja chapa, dozi, na 'shiriki na kila mama mtaani mwako, pamoja na Mama Achieng wa ploti 4'. CHP ana haraka kwa ziara za mchana.",
        questionEn: "What should the CHP do?",
        questionSw: "CHP afanye nini?",
        optionsEn: [
          "Record and send it now, because diarrhoea education is urgent",
          "Strip the name, house, brand and dose, rewrite as general MOH-aligned advice, and get supervisor review before sending",
          "Send it only to the CHP WhatsApp group of 80 members, which feels internal",
          "Ask the chatbot to swear the dose is correct, then send",
        ],
        optionsSw: [
          "Arekodi na atume sasa, kwa sababu elimu ya kuhara ni ya dharura",
          "Aondoe jina, nyumba, chapa na dozi, aandike upya kama ushauri wa jumla unaolingana na MOH, na apate ukaguzi wa msimamizi kabla ya kutuma",
          "Atume tu kwa kikundi cha WhatsApp cha CHP chenye wanachama 80, kinachoonekana cha ndani",
          "Aiombe chatbot iape kwamba dozi ni sahihi, kisha atume",
        ],
        correctIndex: 1,
        hintsEn: [
          "Urgency does not licence naming a neighbour or issuing a dose from a bot.",
          "Correct. Education can wait one review. A named person and a dose cannot be unsent.",
          "Eighty phones are still a leak, and 'internal' is not the same as approved.",
          "A fluent promise is not a pharmacist.",
        ],
        hintsSw: [
          "Dharura hairuhusu kumtaja jirani wala kutoa dozi kutoka bot.",
          "Sahihi. Elimu inaweza kusubiri ukaguzi mmoja. Mtu aliye na jina na dozi hawawezi kurejeshwa.",
          "Simu themanini bado ni uvujaji, na 'ya ndani' si sawa na iliyoidhinishwa.",
          "Ahadi fasaha si mfamasia.",
        ],
        explainEn:
          "CHP messages are education, reviewed, and anonymous. Names, doses and unreviewed brands stay out.",
        explainSw:
          "Jumbe za CHP ni elimu, zimekaguliwa, na hazina majina. Majina, dozi na chapa zisizokaguliwa zinabaki nje.",
      }),
      pb({
        titleEn: "Build a safe CHP education prompt",
        titleSw: "Jenga maagizo salama ya elimu ya CHP",
        introEn:
          "You want a helper to draft a household education message. Tap the blocks that keep the draft inside the four locks.",
        introSw:
          "Unataka msaidizi aandae ujumbe wa elimu wa kaya. Gusa vipande vinavyoweka rasimu ndani ya kufuli nne.",
        goalEn:
          "The prompt must set the topic, ban identifiers and doses, require English and Kiswahili, point to MOH pathways or 719, and demand human review.",
        goalSw:
          "Maagizo lazima yaweke mada, yakataze vitambulishi na dozi, yahitaji Kiingereza na Kiswahili, yaelekeze njia za MOH au 719, na yahitaji ukaguzi wa binadamu.",
        blocksEn: [
          "Role: you are drafting community health education, not diagnosing anyone",
          "Topic: handwashing with soap after using the latrine and before feeding a child",
          "Languages: give English and Kiswahili side by side, same meaning",
          "Constraint: no names, phone numbers, house numbers, HIV status, photos or ID numbers",
          "Constraint: no medicine names, brands or doses",
          "Close with: if a child is very weak or breathing fast, go to the dispensary or call 999, 112 or 719",
          "Label the output: draft only — CHP supervisor must review before sharing",
          "Also list the families on this street who missed last month's visit",
        ],
        blocksSw: [
          "Wajibu: unaandaa elimu ya afya ya jamii, si kutambua ugonjwa wa mtu",
          "Mada: kunawa mikono kwa sabuni baada ya choo na kabla ya kumlisha mtoto",
          "Lugha: toa Kiingereza na Kiswahili bega kwa bega, maana ileile",
          "Kikomo: hakuna majina, namba za simu, namba za nyumba, hali ya VVU, picha wala namba za kitambulisho",
          "Kikomo: hakuna majina ya dawa, chapa wala dozi",
          "Malizia na: mtoto akiwa dhaifu sana au akipumua haraka, nenda zahanati au piga 999, 112 au 719",
          "Weka alama: rasimu tu — msimamizi wa CHP lazima akague kabla ya kushiriki",
          "Pia orodhesha familia za mtaa huu zilizokosa ziara ya mwezi uliopita",
        ],
        required: [0, 3, 4, 5, 6],
        sampleEn:
          "Role: you are drafting community health education, not diagnosing anyone. Topic: handwashing with soap after using the latrine and before feeding a child. Languages: give English and Kiswahili side by side, same meaning. Constraint: no names, phone numbers, house numbers, HIV status, photos or ID numbers. Constraint: no medicine names, brands or doses. Close with: if a child is very weak or breathing fast, go to the dispensary or call 999, 112 or 719. Label the output: draft only — CHP supervisor must review before sharing.",
        sampleSw:
          "Wajibu: unaandaa elimu ya afya ya jamii, si kutambua ugonjwa wa mtu. Mada: kunawa mikono kwa sabuni baada ya choo na kabla ya kumlisha mtoto. Lugha: toa Kiingereza na Kiswahili bega kwa bega, maana ileile. Kikomo: hakuna majina, namba za simu, namba za nyumba, hali ya VVU, picha wala namba za kitambulisho. Kikomo: hakuna majina ya dawa, chapa wala dozi. Malizia na: mtoto akiwa dhaifu sana au akipumua haraka, nenda zahanati au piga 999, 112 au 719. Weka alama: rasimu tu — msimamizi wa CHP lazima akague kabla ya kushiriki.",
      }),
      quiz(
        "Which line must appear before a CHP education draft is shared?",
        "Ni mstari upi lazima uonekane kabla rasimu ya elimu ya CHP haijashirikiwa?",
        [
          "Generated automatically — no review needed",
          "Draft only — a trained person must review against MOH guidance before sharing",
          "Confidential patient list attached",
          "Diagnosed by AI, treatment below",
        ],
        [
          "Imetolewa kiotomatiki — hakuna ukaguzi unaohitajika",
          "Rasimu tu — mtu aliyefunzwa lazima akague kulingana na mwongozo wa MOH kabla ya kushiriki",
          "Orodha ya siri ya wagonjwa imeambatishwa",
          "Imetambuliwa na AI, tiba iko hapa chini",
        ],
        1,
        "The review line is the lock that keeps AI in the helper role. The other three break privacy or clinical rules.",
        "Mstari wa ukaguzi ndio kufuli inayoweka AI katika nafasi ya msaidizi. Mengine matatu yanavunja faragha au kanuni za kitabibu."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- AI may draft education. A health worker reviews every word that goes out.
- No names, HIV status, IDs, doses or emergency diagnoses in the prompt or the draft.
- Point people to MOH pathways and to 999, 112 or 719 when it is an emergency.
- Next: CHPs refer along those pathways; a bot does not replace the referral.`,
        `- AI inaweza kuandaa elimu. Mhudumu wa afya anakagua kila neno linalotoka.
- Hakuna majina, hali ya VVU, vitambulisho, dozi wala utambuzi wa dharura katika maagizo au rasimu.
- Elekeza watu kwenye njia za MOH na 999, 112 au 719 ikiwa ni dharura.
- Ifuatayo: CHP hutoa rufaa kwenye njia hizo; bot haichukui nafasi ya rufaa.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u11
  {
    id: "hlt-b-u11",
    titleEn: "CHPs refer along MOH pathways",
    titleSw: "CHP hutoa rufaa kwenye njia za MOH",
    cards: [
      note(
        "Trust is the job; diagnosis is not",
        "Imani ndiyo kazi; utambuzi si kazi",
        `A community health promoter (CHP) is a trained community member who visits households as part of Kenya's universal health coverage (UHC) work. CHPs share health information, notice danger signs, keep household records in approved tools, and refer people to the dispensary, health centre or hospital. They are not doctors. They do not invent a new pathway because a chatbot sounded sure.

A referral pathway is the agreed route: household to CHP, CHP to dispensary or health centre, then to hospital when needed, including emergency numbers 999, 112 and the ambulance short code 719. The Ministry of Health (MOH) and the county set those routes. AI must not skip a step, send someone to an unknown chemist, or keep a very sick person at home "because the score was low".

There have been reported pilots of health AI in rural clinics, including AmeriAfriAI, described as trying to help read rapid tests with offline analysis. "Reported pilot" is not a performance number, and it is not permission for a CHP to treat a public chatbot as a diagnostic device.

If the CHP is unsure, the safe move is still the pathway: refer, escort if needed, and write what was seen — not what a bot named.`,
        `Mhamasishaji wa afya ya jamii (CHP) ni mwanajamii aliyefunzwa anayetembelea kaya kama sehemu ya kazi ya bima ya afya kwa wote (UHC) nchini Kenya. CHP hutoa elimu ya afya, huona dalili za hatari, huweka rekodi za kaya katika zana zilizoidhinishwa, na huwapa watu rufaa kwenda zahanati, kituo cha afya au hospitali. Si madaktari. Hawabuni njia mpya kwa sababu chatbot ilisikika na uhakika.

Njia ya rufaa ni njia iliyokubaliwa: kaya hadi CHP, CHP hadi zahanati au kituo cha afya, kisha hospitali inapohitajika, pamoja na namba za dharura 999, 112 na namba fupi ya ambulansi 719. Wizara ya Afya (MOH) na kaunti ndizo zinazoweka njia hizo. AI isiruke hatua, isimpeleke mtu duka la dawa lisilojulikana, wala isimwache mtu mgonjwa sana nyumbani "kwa sababu alama ilikuwa chini".

Kumekuwa na majaribio yaliyoripotiwa ya AI ya afya katika kliniki za vijijini, ikiwemo AmeriAfriAI, yaliyoelezwa kama kujaribu kusaidia kusoma vipimo vya haraka kwa uchambuzi nje ya mtandao. "Jaribio lililoripotiwa" si namba ya utendaji, wala si ruhusa kwa CHP kuchukulia chatbot ya umma kama kifaa cha utambuzi.

CHP akiwa na shaka, hatua salama bado ni njia: rufaa, kusindikiza ikihitajika, na kuandika kilichoonekana — si kile bot ilichotaja.`
      ),
      reveal([
        {
          termEn: "Community health promoter (CHP)",
          termSw: "Mhamasishaji wa afya ya jamii (CHP)",
          defEn: "A trained community member who visits homes, educates, and refers. Not a doctor.",
          defSw: "Mwanajamii aliyefunzwa anayetembelea nyumba, kutoa elimu na kutoa rufaa. Si daktari.",
        },
        {
          termEn: "UHC",
          termSw: "UHC",
          defEn: "Universal health coverage: the national effort to make essential care reachable for everyone.",
          defSw: "Bima ya afya kwa wote: juhudi ya taifa kufanya huduma muhimu ziwafikie kila mtu.",
        },
        {
          termEn: "Referral pathway",
          termSw: "Njia ya rufaa",
          defEn: "The agreed route from home to the right facility, set by MOH and the county.",
          defSw: "Njia iliyokubaliwa kutoka nyumbani hadi kituo sahihi, iliyowekwa na MOH na kaunti.",
        },
        {
          termEn: "719",
          termSw: "719",
          defEn: "Kenya's ambulance short code. Use it, 999 or 112 when a life may be in danger.",
          defSw: "Namba fupi ya ambulansi nchini Kenya. Itumie, 999 au 112 maisha yanapoweza kuwa hatarini.",
        },
      ]),
      note(
        "Worked example: the bot wanted to keep her at home",
        "Mfano: bot ilitaka amwache nyumbani",
        `A CHP in a fictional village in Busia visits a household. A two-year-old has diarrhoea, is sleepy, and has not passed urine since morning. The caregiver has already typed the story into a free app. The app says "oral fluids at home".

Step 1. The CHP looks at the child, not the screen. Sleepy plus no urine is a danger sign for dehydration.

Step 2. She does not debate the app. She starts the referral: explain why they must go now, help them plan the 8 km to the health centre, and send a note through the approved CHP channel so the facility expects them.

Step 3. If the child worsens on the way — becomes unresponsive — they call 719 or 999 rather than re-opening the app.

Step 4. That evening she writes in the approved register what she saw and where she referred. She does not paste the child's name into a public chatbot to "get a second opinion".

The app's sentence did not change the pathway. The child's body did.`,
        `CHP katika kijiji cha kubuni huko Busia anatembelea kaya. Mtoto wa miaka miwili anahara, amelala usingizi, na hajatoka mkojo tangu asubuhi. Mlezi tayari ameandika hadithi kwenye programu ya bure. Programu inasema "majimaji mdomoni nyumbani".

Hatua ya 1. CHP anamwangalia mtoto, si skrini. Usingizi pamoja na kutokutoka mkojo ni dalili ya hatari ya upungufu wa maji mwilini.

Hatua ya 2. Habishani na programu. Anaanza rufaa: anaeleza kwa nini lazima waende sasa, anawasaidia kupanga kilomita 8 hadi kituo cha afya, na anatuma ujumbe kupitia kituo kilichoidhinishwa cha CHP ili kituo kiwatarajie.

Hatua ya 3. Mtoto akizidi kuwa mbaya njiani — asipojibu — wanapiga 719 au 999 badala ya kufungua programu tena.

Hatua ya 4. Jioni hiyo anaandika kwenye daftari lililoidhinishwa alichoona na alikotoa rufaa. Habandiki jina la mtoto kwenye chatbot ya umma "kupata maoni ya pili".

Sentensi ya programu haikubadilisha njia. Mwili wa mtoto ndio uliobadilisha.`
      ),
      scenario({
        titleEn: "Scenario: the shortcut chemist",
        titleSw: "Hali: duka la dawa la mkato",
        situationEn:
          "A CHP finds a pregnant woman with heavy bleeding at home. A neighbour says the chatbot named a medicine 'you can buy at the kiosk while you wait'. The health centre is 15 minutes by boda if they leave now.",
        situationSw:
          "CHP anakuta mama mjamzito anayevuja damu nyingi nyumbani. Jirani anasema chatbot ilitaja dawa 'unaweza kununua kioski ukisubiri'. Kituo cha afya kiko dakika 15 kwa boda wakienda sasa.",
        questionEn: "What is the CHP's pathway?",
        questionSw: "Njia ya CHP ni ipi?",
        optionsEn: [
          "Buy the named kiosk medicine first, then see if bleeding slows",
          "Treat this as an emergency: move her toward the health centre now and call 719, 999 or 112; do not fill a kiosk prescription from a bot",
          "Paste her name and weeks of pregnancy into another chatbot for a 'second opinion'",
          "Wait for the routine CHP supervisor visit next week, because CHPs must not rush",
        ],
        optionsSw: [
          "Nunua dawa ya kioski iliyotajwa kwanza, kisha uone kama damu inapungua",
          "Chukulia hii kama dharura: msogeze kuelekea kituo cha afya sasa na piga 719, 999 au 112; usijaze dawa ya kioski kutoka bot",
          "Bandika jina lake na wiki za ujauzito kwenye chatbot nyingine kwa 'maoni ya pili'",
          "Subiri ziara ya kawaida ya msimamizi wa CHP wiki ijayo, kwa sababu CHP hawapaswi kuharakisha",
        ],
        correctIndex: 1,
        hintsEn: [
          "A kiosk pack named by a bot is not obstetric emergency care.",
          "Correct. Heavy bleeding in pregnancy is an emergency on the MOH pathway, not a shopping task.",
          "A second public bot plus identifiers is a privacy breach and still not an examination.",
          "Routine visits are for routine work. This cannot wait a week.",
        ],
        hintsSw: [
          "Pakiti ya kioski iliyotajwa na bot si huduma ya dharura ya uzazi.",
          "Sahihi. Kuvuja damu nyingi katika ujauzito ni dharura kwenye njia ya MOH, si kazi ya ununuzi.",
          "Bot ya pili ya umma pamoja na vitambulishi ni uvunjaji wa faragha na bado si uchunguzi.",
          "Ziara za kawaida ni kwa kazi ya kawaida. Hii haiwezi kusubiri wiki.",
        ],
        explainEn:
          "CHPs escalate along MOH routes and emergency numbers. Bots do not write kiosk prescriptions.",
        explainSw:
          "CHP wanapandisha kesi kwenye njia za MOH na namba za dharura. Bot haziandiki dawa za kioski.",
      }),
      quiz(
        "What must a CHP never let a public chatbot replace?",
        "CHP asiruhusu chatbot ya umma ichukue nafasi ya nini kamwe?",
        [
          "Drafting a general handwashing reminder for review",
          "The referral pathway, emergency calls, and the clinician's decision",
          "Translating a poster into Kiswahili before a supervisor reads it",
          "Sorting household visit days in a notebook",
        ],
        [
          "Kuandaa kikumbusho cha jumla cha kunawa mikono kwa ukaguzi",
          "Njia ya rufaa, simu za dharura, na uamuzi wa mhudumu",
          "Kutafsiri bango kwa Kiswahili kabla msimamizi hajalisoma",
          "Kupanga siku za ziara za kaya kwenye daftari",
        ],
        1,
        "Education drafts and visit planning can be assisted. Referral, emergencies and treatment cannot be handed to a public bot.",
        "Rasimu za elimu na kupanga ziara vinaweza kusaidiwa. Rufaa, dharura na tiba haviwezi kupewa bot ya umma."
      ),
      note(
        "Try it: map your local pathway",
        "Jaribu: chora njia yako ya eneo",
        `With an adult, draw four boxes in a line: Home / CHP / dispensary or health centre / hospital. Write the real names of the nearest two facilities if you know them, and the numbers 999, 112 and 719 on the page.

Then write one sentence under the Home box: "A chatbot cannot skip these boxes." Keep the map where the family can see it. Do not write anyone's illness on it.`,
        `Pamoja na mtu mzima, chora visanduku vinne kwa mstari: Nyumbani / CHP / zahanati au kituo cha afya / hospitali. Andika majina halisi ya vituo viwili vilivyo karibu ukiyajua, na namba 999, 112 na 719 kwenye ukurasa.

Kisha andika sentensi moja chini ya kisanduku cha Nyumbani: "Chatbot haiwezi kuruka visanduku hivi." Weka ramani mahali familia inaweza kuiona. Usiandike ugonjwa wa mtu yeyote juu yake.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- CHPs work under UHC: educate, notice, refer. They do not diagnose.
- MOH pathways and 999, 112, 719 outrank any app score.
- AmeriAfriAI is a reported rural pilot, not a number you should quote as proof.
- Next: put the whole beginner track into one set of rules you can actually use.`,
        `- CHP wanafanya kazi chini ya UHC: kuelimisha, kuona, kutoa rufaa. Hawatambui magonjwa.
- Njia za MOH na 999, 112, 719 zinashinda alama yoyote ya programu.
- AmeriAfriAI ni jaribio lililoripotiwa la vijijini, si namba unayopaswa kunukuu kama uthibitisho.
- Ifuatayo: weka masomo yote ya mwanzoni katika kanuni moja unazoweza kutumia kweli.`
      ),
    ],
  },

  // ---------------------------------------------------------------- u12
  {
    id: "hlt-b-u12",
    titleEn: "Checkpoint: my health-AI rules",
    titleSw: "Kituo cha kukagua: kanuni zangu za AI ya afya",
    cards: [
      note(
        "Bring the track together",
        "Kusanya somo lote",
        `You now have a complete beginner path for health and AI.

- AI is a helper. A trained person decides (Unit 1).
- Health data is sensitive under the Data Protection Act, 2019 (Unit 2).
- Symptom checkers and chatbots guess; danger signs go to 999, 112 or 719 (Units 3 and 6).
- WhatsApp rumours are checked with a facility or the MOH, not forwarded on trust (Unit 4).
- Family names, HIV status, IDs and lab photos never go into a public bot (Unit 5).
- Clinic records stay in approved systems such as facility registers and KHIS summaries (Unit 7).
- Stock forecasts help a person order; empty shelves lead to referral, not a chatbot shop (Unit 8).
- Language gaps are real; Kiswahili and Sheng can be missed (Unit 9).
- CHP education may be drafted by AI and must be reviewed; CHPs refer along MOH pathways (Units 10 and 11).

This checkpoint asks you to use those rules together, not to name a new product.`,
        `Sasa una njia kamili ya mwanzoni ya afya na AI.

- AI ni msaidizi. Mtu aliyefunzwa ndiye anaamua (Somo la 1).
- Data za afya ni nyeti chini ya Sheria ya Ulinzi wa Data, 2019 (Somo la 2).
- Vikagua dalili na chatbot hunakisia; dalili za hatari huenda kwa 999, 112 au 719 (Masomo 3 na 6).
- Uvumi wa WhatsApp hukaguliwa na kituo au MOH, si kutumwa kwa imani (Somo la 4).
- Majina ya familia, hali ya VVU, vitambulisho na picha za maabara haviingii kwenye bot ya umma (Somo la 5).
- Rekodi za kliniki zinabaki katika mifumo iliyoidhinishwa kama daftari za kituo na muhtasari wa KHIS (Somo la 7).
- Utabiri wa stoo unasaidia mtu kuagiza; rafu tupu zinaelekeza rufaa, si duka la chatbot (Somo la 8).
- Pengo za lugha ni za kweli; Kiswahili na Sheng vinaweza kukosa (Somo la 9).
- Elimu ya CHP inaweza kuandaliwa na AI na lazima ikaguliwe; CHP hutoa rufaa kwenye njia za MOH (Masomo 10 na 11).

Kituo hiki cha kukagua kinakuuliza utumie kanuni hizo pamoja, si kutaja bidhaa mpya.`
      ),
      reveal([
        {
          termEn: "Helper rule",
          termSw: "Kanuni ya msaidizi",
          defEn: "AI drafts and sorts. Clinicians, pharmacists and CHPs decide care.",
          defSw: "AI inaandaa na kupanga. Wahudumu, wafamasia na CHP wanaamua huduma.",
        },
        {
          termEn: "Privacy rule",
          termSw: "Kanuni ya faragha",
          defEn: "No names, HIV status, IDs, SHA numbers or clinic photos in public tools.",
          defSw: "Hakuna majina, hali ya VVU, vitambulisho, namba za SHA wala picha za kliniki kwenye zana za umma.",
        },
        {
          termEn: "Emergency rule",
          termSw: "Kanuni ya dharura",
          defEn: "Danger signs skip the chatbot. Call 999, 112 or 719, or go now.",
          defSw: "Dalili za hatari zinaruka chatbot. Piga 999, 112 au 719, au nenda sasa.",
        },
        {
          termEn: "Review rule",
          termSw: "Kanuni ya ukaguzi",
          defEn: "Education drafts go out only after a trained person reads them.",
          defSw: "Rasimu za elimu zinatoka tu baada ya mtu aliyefunzwa kuzisoma.",
        },
      ]),
      note(
        "Worked example: one afternoon, four decisions",
        "Mfano: mchana mmoja, maamuzi manne",
        `Follow Amina, 16, through a fictional Saturday in Nakuru.

Decision 1. A WhatsApp forward says a herb replaces measles vaccine. She does not share it. She asks the CHP at the market stall. That is Unit 4.

Decision 2. Her little brother breathes fast and his chest pulls in. An uncle opens a checker. Amina says they are going now and someone should call 719 if they cannot get a boda. That is Units 3, 6 and 11.

Decision 3. At the health centre a clerk asks her to photograph the register "to type at home". She refuses and finds the in-charge. That is Unit 7.

Decision 4. In the evening a cousin wants to paste grandmother's lab photo into a public bot. Amina offers to help list questions without names, then they wait for Monday's clinician. That is Unit 5.

None of the four decisions required a performance statistic. They required the rules.`,
        `Fuata Amina, miaka 16, katika Jumamosi ya kubuni huko Nakuru.

Uamuzi 1. Ujumbe wa WhatsApp unasema mmea unachukua nafasi ya chanjo ya surua. Hashiriki. Anamuuliza CHP kwenye stendi ya soko. Hicho ni Somo la 4.

Uamuzi 2. Mdogo wake anapumua haraka na kifua kinavutika ndani. Mjomba anafungua kikagua dalili. Amina anasema wanaenda sasa na mtu apige 719 wasipopata boda. Hicho ni Masomo 3, 6 na 11.

Uamuzi 3. Katika kituo cha afya karani anamwomba apige picha daftari "kuandika nyumbani". Anakataa na anampata msimamizi. Hicho ni Somo la 7.

Uamuzi 4. Jioni binamu anataka kubandika picha ya maabara ya bibi kwenye bot ya umma. Amina anajitolea kusaidia kuorodhesha maswali bila majina, kisha wanasubiri mhudumu wa Jumatatu. Hicho ni Somo la 5.

Hakuna kati ya maamuzi hayo manne yaliyohitaji takwimu ya utendaji. Yalihitaji kanuni.`
      ),
      scenario({
        titleEn: "Scenario: pick the one safe action",
        titleSw: "Hali: chagua hatua moja salama",
        situationEn:
          "You are covering a CHP stall at a school sports day. Four requests arrive at once: (1) paste a named child's clinic photo into a bot, (2) forward an unchecked herb cure, (3) draft a handwashing poster for the supervisor to review, (4) tell a wheezing child to wait while you finish typing.",
        situationSw:
          "Unasimamia stendi ya CHP katika siku ya michezo ya shule. Maombi manne yanafika pamoja: (1) kubandika picha ya kliniki ya mtoto aliye na jina kwenye bot, (2) kutuma tiba ya mitishamba isiyokaguliwa, (3) kuandaa bango la kunawa mikono ili msimamizi akague, (4) kumwambia mtoto anayepumua kwa sauti asubiri umalize kuandika.",
        questionEn: "Which request is the one you may do?",
        questionSw: "Ni ombi lipi pekee unaloweza kufanya?",
        optionsEn: [
          "Paste the clinic photo, because the parent asked",
          "Forward the herb cure, because many parents will see it",
          "Draft the handwashing poster with no names or doses, then wait for supervisor review",
          "Keep typing while the wheezing child waits, because the stall must look busy",
        ],
        optionsSw: [
          "Kubandika picha ya kliniki, kwa sababu mzazi aliomba",
          "Kutuma tiba ya mitishamba, kwa sababu wazazi wengi wataiona",
          "Kuandaa bango la kunawa mikono bila majina wala dozi, kisha kusubiri ukaguzi wa msimamizi",
          "Kuendelea kuandika mtoto anayepumua kwa sauti akisubiri, kwa sababu stendi ionekane na kazi",
        ],
        correctIndex: 2,
        hintsEn: [
          "A parent's request does not make a public bot into a clinic.",
          "A popular rumour is still a rumour.",
          "Correct. Education draft, no identifiers, human review. Then go to the wheezing child.",
          "A wheezing child is a danger sign. Typing is not triage.",
        ],
        hintsSw: [
          "Ombi la mzazi halifanyi bot ya umma kuwa kliniki.",
          "Uvumi maarufu bado ni uvumi.",
          "Sahihi. Rasimu ya elimu, hakuna vitambulishi, ukaguzi wa binadamu. Kisha nenda kwa mtoto anayepumua kwa sauti.",
          "Mtoto anayepumua kwa sauti ni dalili ya hatari. Kuandika si triage.",
        ],
        explainEn:
          "When several asks arrive, take the danger first, then the reviewed education draft. Refuse leaks and rumours.",
        explainSw:
          "Maombi kadhaa yanapofika, chukua hatari kwanza, kisha rasimu ya elimu iliyokaguliwa. Kataa uvujaji na uvumi.",
      }),
      quiz(
        "Which set is the complete beginner health-AI charter?",
        "Ni seti ipi iliyo mkataba kamili wa mwanzoni wa AI ya afya?",
        [
          "Trust fluent tools, share family files for speed, and skip the dispensary if the score is low",
          "Helper not doctor; no identifiers in public bots; check rumours; emergencies to 999, 112 or 719; CHPs refer; drafts are reviewed",
          "Quote AmeriAfriAI and Zendawa accuracy percentages before every visit",
          "Use public bots as the SHA record and as the pharmacy",
        ],
        [
          "Amini zana fasaha, shiriki faili za familia kwa kasi, na ruka zahanati alama ikiwa chini",
          "Msaidizi si daktari; hakuna vitambulishi kwenye bot za umma; kagua uvumi; dharura kwa 999, 112 au 719; CHP hutoa rufaa; rasimu zinakaguliwa",
          "Nukuu asilimia za usahihi za AmeriAfriAI na Zendawa kabla ya kila ziara",
          "Tumia bot za umma kama rekodi ya SHA na kama duka la dawa",
        ],
        1,
        "The charter is about roles, privacy, checking, emergencies and review. Do not invent pilot statistics, and do not replace SHA or pharmacies with public bots.",
        "Mkataba unahusu majukumu, faragha, kukagua, dharura na ukaguzi. Usibuni takwimu za majaribio, wala usibadilishe SHA au maduka ya dawa kwa bot za umma."
      ),
      note(
        "Try it: write your five rules",
        "Jaribu: andika kanuni zako tano",
        `On one page, write five rules in your own words, in English or Kiswahili. Each rule should be one sentence you could say at a family table.

Check that you have covered: helper not doctor; privacy; rumours; emergencies; review or referral.

Read them to a parent, guardian, teacher or CHP. If they can repeat two of them back, the charter is ready to live on the fridge.`,
        `Kwenye ukurasa mmoja, andika kanuni tano kwa maneno yako, kwa Kiingereza au Kiswahili. Kila kanuni iwe sentensi moja unayoweza kusema mezani kwa familia.

Hakikisha umefunika: msaidizi si daktari; faragha; uvumi; dharura; ukaguzi au rufaa.

Zisome kwa mzazi, mlezi, mwalimu au CHP. Wakiweza kukukurudishia mbili, mkataba uko tayari kuishi kwenye fridge.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- You can use AI in health without letting it become the doctor.
- Privacy, rumours, language, stock and records all have the same test: would a clinician still be in charge?
- Intermediate work starts with measuring tools: calibration, pathways and documentation.
- Keep your five rules. They do not expire when the app updates.`,
        `- Unaweza kutumia AI katika afya bila kuiacha iwe daktari.
- Faragha, uvumi, lugha, stoo na rekodi vina kipimo kilekile: je, mhudumu bado yuko madarakani?
- Kazi ya kiwango cha kati inaanza kwa kupima zana: urekebishaji, njia na kumbukumbu.
- Weka kanuni zako tano. Haziishi programu inaposasishwa.`
      ),
    ],
  },
];
