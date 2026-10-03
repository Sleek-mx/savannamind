import type { ModuleSpec } from "./build";

const opt = (
  correct: string,
  wrongs: [string, string, string],
  correctSw: string,
  wrongsSw: [string, string, string],
  correctAt: 0 | 1 | 2 | 3
) => {
  const optionsEn = [wrongs[0], wrongs[1], wrongs[2]] as string[];
  const optionsSw = [wrongsSw[0], wrongsSw[1], wrongsSw[2]] as string[];
  optionsEn.splice(correctAt, 0, correct);
  optionsSw.splice(correctAt, 0, correctSw);
  return {
    optionsEn: optionsEn as [string, string, string, string],
    optionsSw: optionsSw as [string, string, string, string],
    correct: correctAt,
  };
};

export const intermediateRest: ModuleSpec[] = [
  {
    titleEn: "Language models, better prompts, and sources",
    titleSw: "Modeli za lugha, maagizo bora, na vyanzo",
    descEn: "Next word is not a witness. A document you can open is a source.",
    descSw: "Neno linalofuata si shahidi. Hati unayoweza kuifungua ndiyo chanzo.",
    units: [
      {
        notesEn: [
          "A large language model assigns probabilities to the next word. Sampling less likely words is why the same prompt can give different answers.",
          "Training on internet text is not the same as being a careful assistant. Extra training uses human feedback to prefer more helpful answers.",
          "Better prompts: give a few examples (few-shot), ask for steps, demand a table, and tell it what to refuse. Still read the result.",
          "Grounding means the model must use documents you provide, not only its memory. That is retrieval-augmented generation (RAG).",
        ],
        notesSw: [
          "Modeli kubwa ya lugha hugawia uwezekano kwa neno linalofuata. Kuchagua maneno yasiyowezekana zaidi ndiyo sababu maagizo yale yale yanaweza kutoa majibu tofauti.",
          "Kufunza kwa maandishi ya mtandao si sawa na kuwa msaidizi mwangalifu. Mafunzo ya ziada hutumia maoni ya binadamu kupendelea majibu yenye msaada zaidi.",
          "Maagizo bora: toa mifano michache (few-shot), omba hatua, dai jedwali, na uiambie ikatae nini. Bado soma matokeo.",
          "Kuweka msingi kunamaanisha modeli lazima itumie hati unazotoa, si kumbukumbu yake pekee. Hiyo ni uzalishaji ulioongezwa na urejeshaji (RAG).",
        ],
      },
      {
        notesEn: [
          "Parameters, also called weights, are the many numbers that set the model's behaviour. People do not type them one by one. Training adjusts them.",
          "Before 2017, many language models read one word at a time. A transformer takes the passage in parallel and uses attention so words can change meaning with context.",
          "Kiswahili note the video does not cover: a model trained mostly on English can be weaker, and wordier, in Kiswahili, Sheng, or a mother tongue. Budget for that. Do not pretend fluency is accuracy.",
        ],
        notesSw: [
          "Vigezo, pia vinaitwa uzito, ni nambari nyingi zinazoweka tabia ya modeli. Watu haviandiki moja moja. Mafunzo huyarekebisha.",
          "Kabla ya 2017, modeli nyingi za lugha zilisoma neno moja kwa wakati. Transformer huchukua kifungu kwa pamoja na kutumia attention ili maneno yabadili maana kwa muktadha.",
          "Dokezo la Kiswahili ambalo video haifundishi: modeli iliyofunzwa kwa Kiingereza zaidi inaweza kuwa dhaifu, na maneno zaidi, kwa Kiswahili, Sheng, au lugha ya mama. Weka bajeti kwa hilo. Usijifanye ufasaha ni usahihi.",
        ],
        video: {
          id: "LPZh9BOjkQs",
          titleEn: "Large Language Models explained briefly",
          titleSw: "Modeli kubwa za lugha zikifafanuliwa kwa ufupi",
          channel: "3Blue1Brown",
          checks: [
            {
              t: "00:37",
              qEn: "What is a large language model, in the video's words?",
              qSw: "Modeli kubwa ya lugha ni nini, kwa maneno ya video?",
              ...opt(
                "A sophisticated mathematical function that predicts what word comes next for any piece of text. It assigns a probability to possible next words.",
                [
                  "A book of facts it looks up one page at a time.",
                  "A person who checks every sentence.",
                  "A database that only stores yesterday's prices.",
                ],
                "Fomula ya hisabati iliyokomaa inayotabiri neno linalofuata kwa maandishi yoyote. Inagawia uwezekano kwa maneno yanayowezekana.",
                [
                  "Kitabu cha ukweli inachotafuta ukurasa kwa ukurasa.",
                  "Mtu anayekagua kila sentensi.",
                  "Hifadhidata inayohifadhi bei za jana pekee.",
                ],
                0
              ),
            },
            {
              t: "01:20",
              qEn: "Why can the same prompt give a different answer each time, even though the model itself is deterministic?",
              qSw: "Kwa nini maagizo yale yale yanaweza kutoa jibu tofauti kila wakati, ingawa modeli yenyewe ni ya uamuzi thabiti?",
              ...opt(
                "Because the output looks more natural if less likely words are sometimes selected at random.",
                [
                  "Because the weights change on every click.",
                  "Because the model looks up a new web page each time.",
                  "Because two runs must always be identical.",
                ],
                "Kwa sababu matokeo yanaonekana ya asili zaidi maneno yasiyowezekana yakichaguliwa kwa nasibu mara nyingine.",
                [
                  "Kwa sababu uzito hubadilika kila bofya.",
                  "Kwa sababu modeli hutafuta ukurasa mpya kila wakati.",
                  "Kwa sababu mara mbili lazima ziwe sawa kabisa.",
                ],
                2
              ),
            },
            {
              t: "04:36",
              qEn: "How do transformers read text, compared with earlier language models, and who introduced the transformer?",
              qSw: "Transformer husomaje maandishi, ikilinganishwa na modeli za awali, na nani alianzisha transformer?",
              ...opt(
                "Earlier models processed one word at a time. Transformers soak the text in at once, in parallel. A team of researchers at Google introduced the transformer.",
                [
                  "Transformers also read one word at a time, and nobody introduced them.",
                  "They skip attention and only store a dictionary.",
                  "They were introduced as a paper filing system.",
                ],
                "Modeli za awali zilichakata neno moja kwa wakati. Transformer humeza maandishi kwa pamoja, kwa sambamba. Timu ya watafiti wa Google ilianzisha transformer.",
                [
                  "Transformer pia husoma neno moja kwa wakati, na hakuna aliyeianzisha.",
                  "Huruka attention na kuhifadhi kamusi pekee.",
                  "Ilianzishwa kama mfumo wa kuhifadhi karatasi.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "County bylaw helper: only answer from the bylaw PDF. If the clause is not there, say 'not in the document' instead of inventing a fine.",
          "Prompt shape: instruction, retrieved passages, user question. Ask the model to point at the passage it used.",
          "Updating a fact should mean updating the document store, not hoping the model 'knows' last week's fuel price.",
        ],
        notesSw: [
          "Msaidizi wa sheria ndogo za kaunti: jibu kutoka PDF ya sheria ndogo pekee. Kifungu kisipokuwepo, sema 'haiko kwenye hati' badala ya kubuni faini.",
          "Umbo la maagizo: agizo, vifungu vilivyorejeshwa, swali la mtumiaji. Mwombe modeli ionyeshe kifungu ilichotumia.",
          "Kusasisha ukweli kunamaanisha kusasisha hifadhi ya hati, si kutumaini modeli 'inajua' bei ya mafuta ya wiki iliyopita.",
        ],
        video: {
          id: "T-D1OfcDW1M",
          titleEn: "What is Retrieval-Augmented Generation (RAG)?",
          titleSw: "RAG ni nini?",
          channel: "IBM Technology",
          checks: [
            {
              t: "01:26",
              qEn: "Which two problems does the speaker illustrate with the moons answer?",
              qSw: "Mzungumzaji anaonyesha matatizo gani mawili kwa jibu la miezi?",
              ...opt(
                "No source for the claim, and an out-of-date answer (she said Jupiter; a current source said Saturn).",
                [
                  "The answer was too short, and the font was small.",
                  "The model refused to answer, and the store was empty on purpose.",
                  "Both answers named Saturn, so nothing was wrong.",
                ],
                "Hakuna chanzo cha dai, na jibu lililopitwa na wakati (alisema Jupiter; chanzo cha sasa kilisema Saturn).",
                [
                  "Jibu lilikuwa fupi sana, na fonti ndogo.",
                  "Modeli ilikataa kujibu, na hifadhi ilikuwa tupu kwa makusudi.",
                  "Majibu yote mawili yalisema Saturn, kwa hiyo hakuna tatizo.",
                ],
                0
              ),
            },
            {
              t: "03:02",
              qEn: "What does the retrieval step add before the model answers?",
              qSw: "Hatua ya urejeshaji inaongeza nini kabla ya modeli kujibu?",
              ...opt(
                "A content store. The model asks that store for information relevant to the user's question, instead of relying only on what it learned in training.",
                [
                  "A new set of weights typed by hand.",
                  "A promise that memory is already current.",
                  "Nothing. The model still answers only from training.",
                ],
                "Hifadhi ya maudhui. Modeli huomba hifadhi hiyo habari inayohusiana na swali, badala ya kutegemea tu ilichojifunza mafunzoni.",
                [
                  "Seti mpya ya uzito ulioandikwa kwa mkono.",
                  "Ahadi kwamba kumbukumbu tayari ni ya sasa.",
                  "Hakuna. Modeli bado hujibu kutoka mafunzo pekee.",
                ],
                2
              ),
            },
            {
              t: "05:26",
              qEn: "What should the model say if the question cannot be answered from the data store?",
              qSw: "Modeli inapaswa kusema nini swali lisipoweza kujibiwa kutoka hifadhi ya data?",
              ...opt(
                "I don't know. It should not make up something believable.",
                [
                  "A confident fine, even if the clause is missing.",
                  "The most popular guess from training.",
                  "Last week's fuel price from memory.",
                ],
                "Sijui. Haipaswi kubuni kitu kinachoaminika.",
                [
                  "Faini ya uhakika, hata kifungu kikikosekana.",
                  "Makisio maarufu zaidi kutoka mafunzo.",
                  "Bei ya mafuta ya wiki iliyopita kutoka kumbukumbu.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Next word is not a witness. A document you can open is a source.",
          "Few-shot, a table, and a refusal rule make prompts safer. They do not replace reading.",
        ],
        notesSw: [
          "Neno linalofuata si shahidi. Hati unayoweza kuifungua ndiyo chanzo.",
          "Few-shot, jedwali, na kanuni ya kukataa hufanya maagizo kuwa salama zaidi. Hayachukui nafasi ya kusoma.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "From the 3Blue1Brown video, what does a large language model predict?",
        qSw: "Kutoka video ya 3Blue1Brown, modeli kubwa ya lugha inatabiri nini?",
        ...opt(
          "The next word. It gives probabilities, not a single certain fact.",
          [
            "A page number in a law book.",
            "The official fuel price for last week.",
            "A single fact with no probability.",
          ],
          "Neno linalofuata. Inatoa uwezekano, si ukweli mmoja wa uhakika.",
          ["Nambari ya ukurasa katika kitabu cha sheria.", "Bei rasmi ya mafuta ya wiki iliyopita.", "Ukweli mmoja bila uwezekano."],
          0
        ),
        answerEn: "The next word. It gives probabilities, not a single certain fact.",
        answerSw: "Neno linalofuata. Inatoa uwezekano, si ukweli mmoja wa uhakika.",
        restudy: { unit: "specific", videoTitle: "Large Language Models explained briefly", times: ["00:37"] },
      },
      {
        qEn: "Why might two runs of the same prompt differ?",
        qSw: "Kwa nini mara mbili za maagizo yale yale zinaweza kutofautiana?",
        ...opt(
          "Less likely words can be chosen at random so the text sounds more natural.",
          [
            "The weights are rewritten on every run.",
            "Each run opens a new official document.",
            "They cannot differ, because the model is deterministic in every choice.",
          ],
          "Maneno yasiyowezekana yanaweza kuchaguliwa kwa nasibu ili maandishi yasikike ya asili zaidi.",
          [
            "Uzito huandikwa upya kila mara.",
            "Kila mara hufungua hati rasmi mpya.",
            "Haziwezi kutofautiana, kwa sababu kila chaguo ni thabiti.",
          ],
          1
        ),
        answerEn: "Less likely words can be chosen at random so the text sounds more natural.",
        answerSw: "Maneno yasiyowezekana yanaweza kuchaguliwa kwa nasibu ili maandishi yasikike ya asili zaidi.",
        restudy: { unit: "specific", videoTitle: "Large Language Models explained briefly", times: ["01:20"] },
      },
      {
        qEn: "What does RAG add that a plain chatbot does not have?",
        qSw: "RAG inaongeza nini ambacho chatbot ya kawaida haina?",
        ...opt(
          "A retrieval step over a content store, so the answer can be grounded in documents.",
          [
            "A guarantee that training memory is current.",
            "A new personality with no documents.",
            "Permission to invent a fine when the clause is missing.",
          ],
          "Hatua ya urejeshaji juu ya hifadhi ya maudhui, ili jibu liwe na msingi wa hati.",
          [
            "Dhamana kwamba kumbukumbu ya mafunzo ni ya sasa.",
            "Utu mpya bila hati.",
            "Ruhusa ya kubuni faini kifungu kikikosekana.",
          ],
          2
        ),
        answerEn: "A retrieval step over a content store, so the answer can be grounded in documents.",
        answerSw: "Hatua ya urejeshaji juu ya hifadhi ya maudhui, ili jibu liwe na msingi wa hati.",
        restudy: { unit: "application", videoTitle: "What is Retrieval-Augmented Generation (RAG)?", times: ["03:02"] },
      },
      {
        qEn: "When should a grounded assistant say it does not know?",
        qSw: "Msaidizi mwenye msingi anapaswa kusema hajui lini?",
        ...opt(
          "When the data store cannot support a reliable answer.",
          [
            "Never. A fluent sentence is always enough.",
            "Only when the user asks in Kiswahili.",
            "When the training score was high.",
          ],
          "Hifadhi ya data isipoweza kusaidia jibu la kuaminika.",
          [
            "Kamwe. Sentensi laini daima inatosha.",
            "Mtumiaji anapouliza kwa Kiswahili tu.",
            "Alama ya mafunzo ilipokuwa juu.",
          ],
          0
        ),
        answerEn: "When the data store cannot support a reliable answer.",
        answerSw: "Hifadhi ya data isipoweza kusaidia jibu la kuaminika.",
        restudy: { unit: "application", videoTitle: "What is Retrieval-Augmented Generation (RAG)?", times: ["05:26"] },
      },
      {
        qEn: "A model cites a KALRO page that you cannot find. What do you do?",
        qSw: "Modeli inataja ukurasa wa KALRO usioupatikana. Unafanya nini?",
        ...opt(
          "Treat the citation as unverified. Open the real KALRO source or ask a person who holds it.",
          [
            "Trust it, because a citation mark means the page exists.",
            "Ask a second chatbot to confirm the invented page.",
            "Paste the page title into a public tool with your ID.",
          ],
          "Chukulia dondoo kuwa haijathibitishwa. Fungua chanzo halisi cha KALRO au uliza mtu anayeishikilia.",
          [
            "Iamini, kwa sababu alama ya dondoo inamaanisha ukurasa upo.",
            "Uliza chatbot nyingine kuthibitisha ukurasa uliobuniwa.",
            "Bandika kichwa cha ukurasa kwenye zana ya umma na kitambulisho chako.",
          ],
          3
        ),
        answerEn: "Treat the citation as unverified. Open the real KALRO source or ask a person who holds it.",
        answerSw: "Chukulia dondoo kuwa haijathibitishwa. Fungua chanzo halisi cha KALRO au uliza mtu anayeishikilia.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "No-code tools and a human in the loop",
    titleSw: "Zana bila msimbo na binadamu kwenye uamuzi",
    descEn: "Train from examples, test what the model has not seen, and keep the last signature human.",
    descSw: "Funza kutoka mifano, jaribu modeli isiyoona, na uache saini ya mwisho kwa binadamu.",
    units: [
      {
        notesEn: [
          "No-code means you train from examples in a browser: images, sounds, or poses. You still need a test set the model has not seen.",
          "Draw the workflow before the tool. Where does AI draft? Where must a person approve? What is logged? What happens when it fails or the power drops?",
          "A Huduma-style desk can let a tool draft a reply. The officer sends it. Money, identity, and penalties stay with the officer.",
        ],
        notesSw: [
          "Bila msimbo kunamaanisha unafunza kutoka mifano kwenye kivinjari: picha, sauti, au mkao. Bado unahitaji seti ya majaribio modeli haijaona.",
          "Chora mtiririko kabla ya zana. AI inaandaa rasimu wapi? Mtu lazima aidhinishe wapi? Nini kinaandikwa? Nini hutokea inaposhindwa au umeme ukikatika?",
          "Dawati la mtindo wa Huduma linaweza kuruhusu zana kuandaa jibu. Afisa analituma. Pesa, utambulisho, na adhabu vinabaki kwa afisa.",
        ],
      },
      {
        notesEn: [
          "Collect varied examples. If every photo is the same corner of the room, the model may learn the room, not the object. That is overfitting.",
          "Training can run in the browser. Export or host the model only after you have tried to break it.",
          "Do not upload other people's faces, voices, or farm records without consent.",
        ],
        notesSw: [
          "Kusanya mifano mbalimbali. Kila picha ikiwa kona ile ile ya chumba, modeli inaweza kujifunza chumba, si kitu. Huo ni overfitting.",
          "Mafunzo yanaweza kufanyika kwenye kivinjari. Hamisha au uhosti modeli baada ya kujaribu kuivunja.",
          "Usipakie nyuso, sauti, au kumbukumbu za shamba za watu wengine bila ridhaa.",
        ],
        video: {
          id: "i9tjzr1KME0",
          titleEn: "Machine learning without code in the browser",
          titleSw: "Ujifunzaji wa mashine bila msimbo kwenye kivinjari",
          channel: "Google Cloud Tech",
          checks: [
            {
              t: "00:29",
              qEn: "What can you train in the browser without writing code?",
              qSw: "Unaweza kufunza nini kwenye kivinjari bila kuandika msimbo?",
              ...opt(
                "A model for photos, audio, or a pose.",
                ["A medical dose.", "A county law.", "A bank PIN check."],
                "Modeli ya picha, sauti, au mkao.",
                ["Dozi ya dawa.", "Sheria ya kaunti.", "Ukaguzi wa PIN ya benki."],
                0
              ),
            },
            {
              t: "00:53",
              qEn: "What is step 1?",
              qSw: "Hatua ya 1 ni nini?",
              ...opt(
                "Collect training data.",
                ["Export the model first.", "Skip examples and deploy.", "Ask the model to label itself."],
                "Kusanya data ya mafunzo.",
                ["Hamisha modeli kwanza.", "Ruka mifano na uweke kazini.", "Iombe modeli ijiwekee lebo."],
                1
              ),
            },
            {
              t: "01:21",
              qEn: "Why does the speaker say to record from different angles and distances?",
              qSw: "Kwa nini mzungumzaji anasema urekodi kutoka pembe na umbali tofauti?",
              ...opt(
                "To prevent the model from overfitting on the room or the camera angles.",
                [
                  "So the model memorises one corner and calls that success.",
                  "Because variety makes the test set identical to training.",
                  "Only to make the video longer.",
                ],
                "Ili kuzuia modeli kufanya overfitting kwa chumba au pembe za kamera.",
                [
                  "Ili modeli ikariri kona moja na kuiita mafanikio.",
                  "Kwa sababu utofauti hufanya seti ya majaribio iwe sawa na mafunzo.",
                  "Ili kurefusha video tu.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "AI is steady and fast. People are better at insight, context, and social meaning. Put the person on the decision that can harm someone.",
          "Design sketch, four boxes: input, AI draft, human decision, fallback if the tool is down.",
          "Write the sentence staff will see: 'Suggestion only. You decide.'",
        ],
        notesSw: [
          "AI ni thabiti na ya haraka. Watu ni bora kwa ufahamu, muktadha, na maana ya kijamii. Mweke mtu kwenye uamuzi unaoweza kumdhuru mtu.",
          "Mchoro wa muundo, visanduku vinne: ingizo, rasimu ya AI, uamuzi wa binadamu, mbadala zana ikishindwa.",
          "Andika sentensi wafanyakazi wataona: 'Pendekezo tu. Wewe unaamua.'",
        ],
        video: {
          id: "PIAPzioNt9Y",
          titleEn: "Humans and AI working together: Crash Course AI #14",
          titleSw: "Binadamu na AI wakifanya kazi pamoja: Crash Course AI #14",
          channel: "CrashCourse",
          checks: [
            {
              t: "01:10",
              qEn: "What strengths does the video give humans, next to AI's consistency?",
              qSw: "Video inawapa binadamu nguvu zipi, kando ya uthabiti wa AI?",
              ...opt(
                "Insight, creativity, and understanding nuances of language and behaviour, including social signals.",
                [
                  "Only faster arithmetic than a spreadsheet.",
                  "Nothing. The video says people should leave every decision to the model.",
                  "The ability to skip logs.",
                ],
                "Ufahamu, ubunifu, na kuelewa nüansi za lugha na tabia, ikiwa ni pamoja na ishara za kijamii.",
                [
                  "Hesabu ya haraka zaidi kuliko lahajedwali pekee.",
                  "Hakuna. Video inasema watu waache kila uamuzi kwa modeli.",
                  "Uwezo wa kuruka kumbukumbu.",
                ],
                0
              ),
            },
            {
              t: "01:23",
              qEn: "What is one big way the video says AI could support people?",
              qSw: "Ni njia gani kubwa video inasema AI inaweza kuwasaidia watu?",
              ...opt(
                "Amplify decision-making with the right information.",
                [
                  "Own the decision so people can leave.",
                  "Replace the officer who sends the reply.",
                  "Hide the fallback when power drops.",
                ],
                "Kuimarisha uamuzi kwa habari sahihi.",
                [
                  "Kumiliki uamuzi ili watu waondoke.",
                  "Kuchukua nafasi ya afisa anayetuma jibu.",
                  "Kuficha mbadala umeme ukikatika.",
                ],
                3
              ),
            },
            {
              t: "04:59",
              qEn: "In the exosuit and rescue-robot examples, who does the real decision-making?",
              qSw: "Katika mifano ya exosuit na roboti ya uokoaji, nani hufanya uamuzi halisi?",
              ...opt(
                "Humans. The devices still need AI for things like force or navigation, but people make the real decisions.",
                [
                  "The suit, once it is switched on.",
                  "The robot, with no person in the loop.",
                  "The training score.",
                ],
                "Binadamu. Vifaa bado vinahitaji AI kwa nguvu au uelekezi, lakini watu hufanya maamuzi halisi.",
                [
                  "Suti, ikishawashwa.",
                  "Roboti, bila mtu kwenye uamuzi.",
                  "Alama ya mafunzo.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "No-code is still a model. Test it, and do not let it be the last signature.",
          "Log overrides. If staff always ignore the tool, the workflow is wrong.",
        ],
        notesSw: [
          "Bila msimbo bado ni modeli. Ijaribu, wala usiache iwe saini ya mwisho.",
          "Andika ubatilishaji. Wafanyakazi wakipuuza zana kila wakati, mtiririko ni mbaya.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "From the no-code video, why vary the camera angle?",
        qSw: "Kutoka video ya bila msimbo, kwa nini ubadilishe pembe ya kamera?",
        ...opt(
          "So the model does not overfit to the room or the angle.",
          [
            "So it memorises one corner.",
            "So you can skip the test set.",
            "So faces can be uploaded without consent.",
          ],
          "Ili modeli isifanye overfitting kwa chumba au pembe.",
          [
            "Ili ikariri kona moja.",
            "Ili uruke seti ya majaribio.",
            "Ili nyuso zipakiwe bila ridhaa.",
          ],
          0
        ),
        answerEn: "So the model does not overfit to the room or the angle.",
        answerSw: "Ili modeli isifanye overfitting kwa chumba au pembe.",
        restudy: { unit: "specific", videoTitle: "Machine learning without code in the browser", times: ["01:21"] },
      },
      {
        qEn: "Name the four boxes of the workflow sketch.",
        qSw: "Taja visanduku vinne vya mchoro wa mtiririko.",
        ...opt(
          "Input, AI draft, human decision, fallback.",
          [
            "Prompt, password, PIN, and photo.",
            "Train, train, train, and deploy.",
            "Like, share, comment, and post.",
          ],
          "Ingizo, rasimu ya AI, uamuzi wa binadamu, mbadala.",
          [
            "Maagizo, nenosiri, PIN, na picha.",
            "Funza, funza, funza, na weka kazini.",
            "Penda, shiriki, toa maoni, na chapisha.",
          ],
          2
        ),
        answerEn: "Input, AI draft, human decision, fallback.",
        answerSw: "Ingizo, rasimu ya AI, uamuzi wa binadamu, mbadala.",
        restudy: { unit: "application", extra: "notes only, no video" },
      },
      {
        qEn: "From Crash Course AI #14, what are people better at than a tireless model?",
        qSw: "Kutoka Crash Course AI #14, watu ni bora kuliko modeli isiyochoka katika nini?",
        ...opt(
          "Insight, creativity, and the nuances of language and behaviour.",
          [
            "Repeating the same sum faster than a spreadsheet, and nothing else.",
            "Skipping the log.",
            "Letting the tool send penalties.",
          ],
          "Ufahamu, ubunifu, na nüansi za lugha na tabia.",
          [
            "Kurudia jumla ile ile haraka kuliko lahajedwali, na hakuna kingine.",
            "Kuruka kumbukumbu.",
            "Kuruhusu zana itume adhabu.",
          ],
          1
        ),
        answerEn: "Insight, creativity, and the nuances of language and behaviour.",
        answerSw: "Ufahamu, ubunifu, na nüansi za lugha na tabia.",
        restudy: {
          unit: "application",
          videoTitle: "Humans and AI working together: Crash Course AI #14",
          times: ["01:10"],
        },
      },
      {
        qEn: "Who makes the real decision in the video's assistive-machine examples?",
        qSw: "Nani hufanya uamuzi halisi katika mifano ya mashine saidizi ya video?",
        ...opt(
          "Humans.",
          ["The exosuit alone.", "The rescue robot alone.", "The training file."],
          "Binadamu.",
          ["Exosuit peke yake.", "Roboti ya uokoaji peke yake.", "Faili ya mafunzo."],
          0
        ),
        answerEn: "Humans.",
        answerSw: "Binadamu.",
        restudy: {
          unit: "application",
          videoTitle: "Humans and AI working together: Crash Course AI #14",
          times: ["04:59"],
        },
      },
      {
        qEn: "A tool drafts Huduma replies. Which step must stay human?",
        qSw: "Zana inaandaa majibu ya Huduma. Hatua ipi lazima ibaki ya binadamu?",
        ...opt(
          "Sending the reply, and any decision about identity, money, or a penalty.",
          [
            "Nothing. The draft can send itself.",
            "Only choosing the font.",
            "Deleting the log so staff cannot override.",
          ],
          "Kutuma jibu, na uamuzi wowote kuhusu utambulisho, pesa, au adhabu.",
          [
            "Hakuna. Rasimu inaweza kujitumia.",
            "Kuchagua fonti pekee.",
            "Kufuta kumbukumbu ili wafanyakazi wasiweze kubatilisha.",
          ],
          3
        ),
        answerEn: "Sending the reply, and any decision about identity, money, or a penalty.",
        answerSw: "Kutuma jibu, na uamuzi wowote kuhusu utambulisho, pesa, au adhabu.",
        restudy: { unit: "basics" },
      },
    ],
  },
];
