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

export const beginnerModules: ModuleSpec[] = [
  {
    titleEn: "What AI is, and what it is not",
    titleSw: "AI ni nini, na si nini",
    descEn: "People built it, examples taught it, and a guess is not a fact.",
    descSw: "Watu waliijenga, mifano iliifundisha, na makisio si ukweli.",
    units: [
      {
        notesEn: [
          "AI is software made by people. It is not a person, and it is not magic.",
          "Some programs follow rules someone wrote (a calculator, a fixed SMS menu). Some learn patterns from examples (a photo sorted as ripe or unripe).",
          "A model is the result of that learning. It guesses from patterns. A guess is not a fact.",
          "You will meet AI that recommends, sorts, listens, translates, or creates new text and pictures. Creating new things is called generative AI.",
        ],
        notesSw: [
          "AI ni programu iliyotengenezwa na watu. Si mtu, wala si uchawi.",
          "Programu nyingine hufuata kanuni alizoandika mtu (kikokotoo, menyu ya SMS isiyobadilika). Nyingine hujifunza ruwaza kutoka mifano (picha iliyopangwa kuwa mbivu au mbichi).",
          "Modeli ni matokeo ya ujifunzaji huo. Inakisia kutoka ruwaza. Makisio si ukweli.",
          "Utakutana na AI inayopendekeza, kupanga, kusikiliza, kutafsiri, au kuunda maandishi na picha mpya. Kuunda vitu vipya huitwa AI zalishi (generative AI).",
        ],
      },
      {
        notesEn: [
          "Basic AI learns from many examples, a bit like practice. It can still be wrong at first.",
          "Generative AI is trained on a huge mix of internet material. It can write or draw something new. It does not know if that new thing is true, kind, or copied.",
          "Your job starts here: notice what the tool is good at, and what it is not.",
        ],
        notesSw: [
          "AI ya msingi hujifunza kutoka mifano mingi, kama mazoezi. Bado inaweza kukosea mwanzoni.",
          "AI zalishi hufunzwa kwa mchanganyiko mkubwa wa nyenzo za mtandaoni. Inaweza kuandika au kuchora kitu kipya. Haijui kama kitu hicho ni kweli, ni cha adabu, au kimenakiliwa.",
          "Kazi yako inaanza hapa: tambua zana inafaa kwa nini, na haifai kwa nini.",
        ],
        video: {
          id: "b0KaGBOU4Ys",
          titleEn: "What is AI?",
          titleSw: "AI ni nini?",
          channel: "Common Sense Education",
          checks: [
            {
              t: "00:06",
              qEn: "What does this video say AI is?",
              qSw: "Video hii inasema AI ni nini?",
              ...opt(
                "Teaching computers to do things that usually need human intelligence, such as identifying an object, understanding speech, or talking.",
                [
                  "A person living inside the phone who already knows every fact.",
                  "A calculator that only follows one fixed menu someone typed.",
                  "A magic switch that is never wrong.",
                ],
                "Kufundisha kompyuta kufanya mambo yanayohitaji akili ya binadamu, kama kutambua kitu, kuelewa usemi, au kuzungumza.",
                [
                  "Mtu anayeishi ndani ya simu na anayejua kila ukweli.",
                  "Kikokotoo kinachofuata menyu moja tu aliyoandika mtu.",
                  "Swichi ya uchawi isiyokosea kamwe.",
                ],
                0
              ),
            },
            {
              t: "01:07",
              qEn: "How does the video say basic AI learns, using the robot-dog example?",
              qSw: "Video inasemaje AI ya msingi hujifunza, kwa mfano wa mbwa-roboti?",
              ...opt(
                "By analysing lots of data. In the example, pictures of dog toys and how to play fetch.",
                [
                  "By a person typing every single rule for every toy.",
                  "By guessing once, with no examples.",
                  "By copying one photo and calling that the whole lesson.",
                ],
                "Kwa kuchanganua data nyingi. Katika mfano, picha za vitu vya kuchezea vya mbwa na jinsi ya kucheza fetch.",
                [
                  "Kwa mtu kuandika kila kanuni ya kila kitu cha kuchezea.",
                  "Kwa kukisia mara moja, bila mifano.",
                  "Kwa kunakili picha moja na kuiita somo zima.",
                ],
                1
              ),
            },
            {
              t: "01:55",
              qEn: "What can generative AI fail to tell apart?",
              qSw: "AI zalishi inaweza kushindwa kutofautisha nini?",
              ...opt(
                "Facts from fiction. It also does not know if what it creates is helpful or hurtful, or where its information comes from.",
                [
                  "Only the difference between a photo and a video file.",
                  "Nothing. It always knows what is true and kind.",
                  "Only the battery level of the phone.",
                ],
                "Ukweli na kubuni. Pia haijui kama kilichoundwa kinasaidia au kinaumiza, wala habari yake inatoka wapi.",
                [
                  "Tofauti ya picha na faili ya video pekee.",
                  "Hakuna. Daima inajua kilicho kweli na cha adabu.",
                  "Kiwango cha chaji ya simu pekee.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Sort eight tools you know into two lists: follows fixed rules, or learned from examples. Ideas: M-Pesa menu, autocorrect, a weather app, a map route to a matatu stage, a calculator, a photo filter that names objects.",
          "Three ways machines learn have different jobs. None is always smarter. People still check the result, especially for health and safety.",
        ],
        notesSw: [
          "Panga zana nane unazozijua katika orodha mbili: hufuata kanuni zisizobadilika, au zilijifunza kutoka mifano. Mawazo: menyu ya M-Pesa, usahihishaji wa herufi, programu ya hali ya hewa, ramani ya kituo cha matatu, kikokotoo, kichujio cha picha kinachotaja vitu.",
          "Njia tatu mashine hujifunza zina kazi tofauti. Hakuna iliyo nadhifu kila wakati. Watu bado hukagua matokeo, hasa kwa afya na usalama.",
        ],
        video: {
          id: "0yCJMt9Mx9c",
          titleEn: "How does artificial intelligence learn?",
          titleSw: "Akili bandia hujifunzaje?",
          channel: "TED-Ed",
          checks: [
            {
              t: "00:46",
              qEn: "Which three types of machine learning does the video name?",
              qSw: "Video inataja aina gani tatu za ujifunzaji wa mashine?",
              ...opt(
                "Unsupervised learning, supervised learning, and reinforcement learning.",
                [
                  "Copying, guessing, and magic.",
                  "Typing, printing, and saving.",
                  "Only supervised learning, used three times.",
                ],
                "Ujifunzaji usiosimamiwa, ujifunzaji unaosimamiwa, na ujifunzaji wa kuimarisha.",
                [
                  "Kunakili, kukisia, na uchawi.",
                  "Kuandika, kuchapisha, na kuhifadhi.",
                  "Ujifunzaji unaosimamiwa pekee, mara tatu.",
                ],
                3
              ),
            },
            {
              t: "02:24",
              qEn: "What does the video call the hands-on approach where people check the prediction and adjust the program?",
              qSw: "Video inaita nini njia ya vitendo ambapo watu hukagua utabiri na kurekebisha programu?",
              ...opt(
                "Supervised learning.",
                ["Unsupervised learning.", "Reinforcement learning only.", "Generative copying."],
                "Ujifunzaji unaosimamiwa.",
                ["Ujifunzaji usiosimamiwa.", "Ujifunzaji wa kuimarisha pekee.", "Kunakili kwa uzalishaji."],
                0
              ),
            },
            {
              t: "03:52",
              qEn: "What does the video say artificial neural networks are built to mimic, and which tasks does it name?",
              qSw: "Video inasema mitandao ya neva bandia imejengwa kuiga nini, na inataja kazi zipi?",
              ...opt(
                "The relationship between neurons in the brain. Tasks named: image recognition, speech recognition, and language translation.",
                [
                  "A paper filing cabinet. Tasks named: printing, stapling, and posting letters.",
                  "A calculator keypad. Tasks named: addition only.",
                  "A radio mast. Tasks named: weather, traffic, and music.",
                ],
                "Uhusiano kati ya neva kwenye ubongo. Kazi zilizotajwa: utambuzi wa picha, utambuzi wa usemi, na tafsiri ya lugha.",
                [
                  "Kabati la karatasi. Kazi: kuchapisha, kuunganisha, na kutuma barua.",
                  "Kibodi ya kikokotoo. Kazi: kujumlisha pekee.",
                  "Mnara wa redio. Kazi: hali ya hewa, trafiki, na muziki.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Remember: people built it, examples taught it, and it can be wrong.",
          "Next module: how a chatbot writes, how you ask, and how you check.",
        ],
        notesSw: [
          "Kumbuka: watu waliijenga, mifano iliifundisha, na inaweza kukosea.",
          "Moduli inayofuata: jinsi chatbot inavyoandika, jinsi unavyouliza, na jinsi unavyokagua.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "Which sentence is true?",
        qSw: "Ni sentensi ipi iliyo kweli?",
        ...opt(
          "AI is a tool made by people. It learns patterns and can still be wrong.",
          [
            "AI is a person, so its guess is always a fact.",
            "AI is magic that cannot be wrong.",
            "AI only works when nobody checks it.",
          ],
          "AI ni zana iliyotengenezwa na watu. Hujifunza ruwaza na bado inaweza kukosea.",
          [
            "AI ni mtu, kwa hiyo makisio yake daima ni ukweli.",
            "AI ni uchawi usioweza kukosea.",
            "AI hufanya kazi tu mtu asipokagua.",
          ],
          1
        ),
        answerEn: "AI is a tool made by people. It learns patterns and can still be wrong.",
        answerSw: "AI ni zana iliyotengenezwa na watu. Hujifunza ruwaza na bado inaweza kukosea.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "In What is AI?, basic AI learns by analysing what?",
        qSw: "Katika What is AI?, AI ya msingi hujifunza kwa kuchanganua nini?",
        ...opt(
          "Lots of data (in the example, pictures and the steps of a task).",
          [
            "One secret rule typed by hand for every case.",
            "The learner's national ID number.",
            "Nothing. It is born already finished.",
          ],
          "Data nyingi (katika mfano, picha na hatua za kazi).",
          [
            "Kanuni moja ya siri iliyoandikwa kwa mkono kwa kila kesi.",
            "Nambari ya kitambulisho cha taifa cha mwanafunzi.",
            "Hakuna. Inazaliwa ikiwa imekamilika.",
          ],
          0
        ),
        answerEn: "Lots of data (in the example, pictures and the steps of a task).",
        answerSw: "Data nyingi (katika mfano, picha na hatua za kazi).",
        restudy: { unit: "specific", videoTitle: "What is AI?", times: ["01:07"] },
      },
      {
        qEn: "Generative AI can always tell facts from fiction. True or false?",
        qSw: "AI zalishi daima inaweza kutofautisha ukweli na kubuni. Kweli au si kweli?",
        ...opt(
          "False. The Common Sense video says it cannot always tell facts from fiction.",
          [
            "True. If the sentence sounds smooth, it is a fact.",
            "True, but only when the answer is long.",
            "False, because generative AI cannot create anything new.",
          ],
          "Si kweli. Video ya Common Sense inasema haiwezi daima kutofautisha ukweli na kubuni.",
          [
            "Kweli. Sentensi ikiwa laini, ni ukweli.",
            "Kweli, lakini tu jibu likiwa refu.",
            "Si kweli, kwa sababu AI zalishi haiwezi kuunda kitu kipya.",
          ],
          2
        ),
        answerEn: "False. The Common Sense video says it cannot always tell facts from fiction.",
        answerSw: "Si kweli. Video ya Common Sense inasema haiwezi daima kutofautisha ukweli na kubuni.",
        restudy: { unit: "specific", videoTitle: "What is AI?", times: ["01:55"] },
      },
      {
        qEn: "Name the three types of machine learning from the TED-Ed video.",
        qSw: "Taja aina tatu za ujifunzaji wa mashine kutoka video ya TED-Ed.",
        ...opt(
          "Unsupervised, supervised, and reinforcement.",
          [
            "Reading, writing, and arithmetic.",
            "Prompt, password, and payment.",
            "Only generative AI, used three ways.",
          ],
          "Usiosimamiwa, unaosimamiwa, na wa kuimarisha.",
          [
            "Kusoma, kuandika, na hesabu.",
            "Maagizo, nenosiri, na malipo.",
            "AI zalishi pekee, kwa njia tatu.",
          ],
          3
        ),
        answerEn: "Unsupervised, supervised, and reinforcement.",
        answerSw: "Usiosimamiwa, unaosimamiwa, na wa kuimarisha.",
        restudy: {
          unit: "application",
          videoTitle: "How does artificial intelligence learn?",
          times: ["00:46"],
        },
      },
      {
        qEn: "A weather app says 70% chance of rain in Kisumu. What should you treat that number as?",
        qSw: "Programu ya hali ya hewa inasema uwezekano wa mvua wa 70% Kisumu. Unapaswa kuichukulia nambari hiyo kuwa nini?",
        ...opt(
          "A prediction, not a promise. Check before you make a costly decision.",
          [
            "A promise that it will rain, so you can skip every check.",
            "A fact about yesterday's rainfall.",
            "An order to spray crops immediately.",
          ],
          "Utabiri, si ahadi. Kagua kabla ya uamuzi wa gharama.",
          [
            "Ahadi kwamba mvua itanyesha, kwa hiyo usikague.",
            "Ukweli kuhusu mvua ya jana.",
            "Amri ya kunyunyizia mazao mara moja.",
          ],
          1
        ),
        answerEn: "A prediction, not a promise. Check before you make a costly decision.",
        answerSw: "Utabiri, si ahadi. Kagua kabla ya uamuzi wa gharama.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "Ask clearly, then check the answer",
    titleSw: "Uliza wazi, kisha kagua jibu",
    descEn: "A chatbot predicts words. A clear prompt and a real source keep you in charge.",
    descSw: "Chatbot hutabiri maneno. Maagizo wazi na chanzo halisi vinakuacha na uamuzi.",
    units: [
      {
        notesEn: [
          "A chatbot does not look up a book of facts in its head. It predicts likely next words. That is why it can sound sure and still be wrong.",
          "A good prompt has five parts: role, task, context, format, limits. Example: 'You are a patient tutor. Make 5 short quiz questions on photosynthesis for Grade 7. Use simple English. Do not write the essay for me.'",
          "If the first answer is vague, add the missing detail and ask again. That is iteration, not failure.",
        ],
        notesSw: [
          "Chatbot haitaangalia kitabu cha ukweli kichwani. Inatabiri maneno yanayofuata yanayowezekana. Ndiyo maana inaweza kusikika na uhakika na bado ikose.",
          "Maagizo mazuri yana sehemu tano: nafasi, kazi, muktadha, muundo, mipaka. Mfano: 'Wewe ni mwalimu mvumilivu. Tengeneza maswali 5 mafupi ya usanisinuru kwa Darasa la 7. Tumia Kiingereza rahisi. Usiniandikie insha.'",
          "Jibu la kwanza likiwa wazi kidogo, ongeza undani uliokosekana na uliza tena. Hiyo ni kurudia, si kushindwa.",
        ],
      },
      {
        notesEn: [
          "Recommendation tools predict what will keep you watching. Generative tools create text, images, audio, or video from instructions.",
          "If the training data is wrong or unfair, the output can be wrong or unfair. Bias means favouring or discriminating unfairly.",
          "The video speaks to caregivers. Use the ideas yourself: AI is a program, data can be flawed, and a fluent answer still needs a check.",
        ],
        notesSw: [
          "Zana za mapendekezo hutabiri kitakachokuweka ukitazama. Zana zalishi huunda maandishi, picha, sauti, au video kutoka maagizo.",
          "Data ya mafunzo ikiwa na makosa au isiyo ya haki, matokeo yanaweza kuwa na makosa au yasiyo ya haki. Upendeleo ni kupendelea au kubagua isivyo haki.",
          "Video inazungumza na walezi. Tumia mawazo mwenyewe: AI ni programu, data inaweza kuwa na dosari, na jibu laini bado linahitaji ukaguzi.",
        ],
        video: {
          id: "x7iRWjV8Tuc",
          titleEn: "What is AI? A Guide for Parents",
          titleSw: "AI ni nini? Mwongozo kwa wazazi",
          channel: "Common Sense Education",
          checks: [
            {
              t: "00:20",
              qEn: "How does the video define artificial intelligence?",
              qSw: "Video inafafanuaje akili bandia?",
              ...opt(
                "A program made by people that makes computers do things that seem intelligent or smart in a human way.",
                [
                  "A living teacher inside the device.",
                  "A printed textbook that cannot change.",
                  "A password manager for the school.",
                ],
                "Programu iliyotengenezwa na watu inayofanya kompyuta ifanye mambo yanayoonekana na akili kwa njia ya binadamu.",
                [
                  "Mwalimu hai ndani ya kifaa.",
                  "Kitabu kilichochapishwa kisichobadilika.",
                  "Kidhibiti cha manenosiri ya shule.",
                ],
                2
              ),
            },
            {
              t: "01:14",
              qEn: "What do the recommendation programs in the video use to predict what you will watch?",
              qSw: "Programu za mapendekezo kwenye video zinatumia nini kutabiri utakachotazama?",
              ...opt(
                "Information such as browsing history and interests, to predict posts or videos that keep someone engaged and online.",
                [
                  "Only the time of day, with no history.",
                  "A teacher's mark sheet.",
                  "A random page from a dictionary, once.",
                ],
                "Habari kama historia ya kuvinjari na mambo unayopenda, kutabiri machapisho au video zinazomfanya mtu abaki mtandaoni.",
                [
                  "Saa ya siku pekee, bila historia.",
                  "Orodha ya alama ya mwalimu.",
                  "Ukurasa wa nasibu wa kamusi, mara moja.",
                ],
                0
              ),
            },
            {
              t: "01:51",
              qEn: "When can AI make mistakes or show bias, according to the video?",
              qSw: "AI inaweza kufanya makosa au kuonyesha upendeleo lini, kwa video hii?",
              ...opt(
                "If the data it learns from is incorrect or unfair. Bias means favouring or discriminating unfairly against a person, group, or idea.",
                [
                  "Only when the screen is bright.",
                  "Never. Training data cannot affect the answer.",
                  "Only if the learner types in capital letters.",
                ],
                "Data inayojifunza ikiwa si sahihi au si ya haki. Upendeleo ni kupendelea au kubagua isivyo haki mtu, kundi, au wazo.",
                [
                  "Skrini ikiwa angavu tu.",
                  "Kamwe. Data ya mafunzo haiwezi kuathiri jibu.",
                  "Mwanfunzi akiandika kwa herufi kubwa tu.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "School use that builds skill: ask for an explanation in simpler words, a practice quiz, or feedback on your own paragraph. Then close the tool and answer once yourself.",
          "School use that skips learning: pasting the assignment and handing in the reply as yours. That is cheating. Follow your school's AI rules and say when a tool helped.",
          "Check surprising answers against your textbook, your teacher, or an official site (KICD, KNEC, a county page), not against a second chatbot.",
        ],
        notesSw: [
          "Matumizi ya shule yanayojenga ujuzi: omba maelezo kwa maneno rahisi, jaribio la mazoezi, au maoni kuhusu aya yako. Kisha funga zana na ujibu mwenyewe.",
          "Matumizi yanayoruka kujifunza: kubandika kazi na kuwasilisha jibu kama lako. Hiyo ni kudanganya. Fuata kanuni za AI za shule yako na useme zana iliposaidia.",
          "Kagua majibu ya kushangaza kwa kitabu, mwalimu, au tovuti rasmi (KICD, KNEC, ukurasa wa kaunti), si kwa chatbot nyingine.",
        ],
        video: {
          id: "9x7srNK_i1Q",
          titleEn: "Using AI Wisely for School Success",
          titleSw: "Kutumia AI kwa busara kwa mafanikio ya shule",
          channel: "Common Sense Education",
          checks: [
            {
              t: "00:16",
              qEn: "Which kinds of school help does the video say chatbots can give?",
              qSw: "Video inasema chatbot zinaweza kutoa msaada gani wa shule?",
              ...opt(
                "Explain difficult concepts, help brainstorm ideas, give feedback on writing, and create study guides.",
                [
                  "Sit the exam and hand in the paper as the student.",
                  "Change the official KNEC timetable.",
                  "Replace the teacher for the whole term.",
                ],
                "Kueleza dhana ngumu, kusaidia kutafakari mawazo, kutoa maoni ya uandishi, na kutengeneza miongozo ya kusoma.",
                [
                  "Kufanya mtihani na kuwasilisha karatasi kama mwanafunzi.",
                  "Kubadilisha ratiba rasmi ya KNEC.",
                  "Kuchukua nafasi ya mwalimu muhula mzima.",
                ],
                0
              ),
            },
            {
              t: "01:32",
              qEn: "What does tip one say students should do about AI help on schoolwork?",
              qSw: "Dokezo la kwanza linasema wanafunzi wafanye nini kuhusu msaada wa AI kwenye kazi ya shule?",
              ...opt(
                "Know the school policy, including how to cite or acknowledge AI help, and the consequences of inappropriate use.",
                [
                  "Hide every use of a tool, even when the school asks.",
                  "Paste the whole assignment and submit the reply.",
                  "Ignore the school rules if the answer sounds fluent.",
                ],
                "Jua sera ya shule, ikiwa ni pamoja na jinsi ya kutaja msaada wa AI, na matokeo ya matumizi yasiyofaa.",
                [
                  "Ficha kila matumizi, hata shule ikipouliza.",
                  "Bandika kazi nzima na uwasilishe jibu.",
                  "Puuza kanuni za shule jibu likisikika laini.",
                ],
                3
              ),
            },
            {
              t: "02:48",
              qEn: "What is the GPS comparison teaching?",
              qSw: "Mfano wa GPS unafundisha nini?",
              ...opt(
                "If you rely completely on GPS you do not build a mental map. In the same way, relying too heavily on AI means you may miss building thinking skills.",
                [
                  "GPS is always wrong, so AI is always wrong.",
                  "You should never use a map or a study guide.",
                  "The phone should sit the test for you.",
                ],
                "Ukitumia GPS kabisa, hujengi ramani ya akilini. Vivyo hivyo, kutegemea AI kupita kiasi kunamaanisha unaweza kukosa kujenga ujuzi wa kufikiri.",
                [
                  "GPS daima ni mbaya, kwa hiyo AI daima ni mbaya.",
                  "Usitumie ramani wala mwongozo wa kusoma.",
                  "Simu ifanye mtihani kwa ajili yako.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Predict, don't worship. Prompt with role, task, context, format, and limits. Check with a real source.",
          "A fluent answer can still be invented. That habit is called verify-first.",
        ],
        notesSw: [
          "Tabiri, usiabudu. Tumia nafasi, kazi, muktadha, muundo, na mipaka. Kagua kwa chanzo halisi.",
          "Jibu laini bado linaweza kuwa limebuniwa. Tabia hiyo huitwa thibitisha-kwanza.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "A chatbot sounds sure. Does that mean the answer is a fact?",
        qSw: "Chatbot inasikika na uhakika. Je, hilo linamaanisha jibu ni ukweli?",
        ...opt(
          "No. It predicts likely words. Fluency is not proof.",
          [
            "Yes. A confident tone means the sentence was looked up in a book of facts.",
            "Yes, if the answer is longer than one sentence.",
            "Only on weekends.",
          ],
          "Hapana. Inatabiri maneno yanayowezekana. Usahihi wa sauti si uthibitisho.",
          [
            "Ndiyo. Sauti ya uhakika inamaanisha sentensi ilitafutwa kwenye kitabu cha ukweli.",
            "Ndiyo, jibu likiwa refu kuliko sentensi moja.",
            "Wikendi tu.",
          ],
          0
        ),
        answerEn: "No. It predicts likely words. Fluency is not proof.",
        answerSw: "Hapana. Inatabiri maneno yanayowezekana. Usahihi wa sauti si uthibitisho.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "Name the five parts of a clear prompt used in this module.",
        qSw: "Taja sehemu tano za maagizo wazi zinazotumika kwenye moduli hii.",
        ...opt(
          "Role, task, context, format, limits.",
          [
            "Password, PIN, ID, photo, and location.",
            "Title, emoji, colour, font, and logo.",
            "Only the task, repeated five times.",
          ],
          "Nafasi, kazi, muktadha, muundo, mipaka.",
          [
            "Nenosiri, PIN, kitambulisho, picha, na mahali.",
            "Kichwa, emoji, rangi, fonti, na nembo.",
            "Kazi pekee, ikirudiwa mara tano.",
          ],
          2
        ),
        answerEn: "Role, task, context, format, limits.",
        answerSw: "Nafasi, kazi, muktadha, muundo, mipaka.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From the parents' guide, what is bias?",
        qSw: "Kutoka mwongozo wa wazazi, upendeleo ni nini?",
        ...opt(
          "Favouring or discriminating unfairly against a person, group, or idea.",
          [
            "A bright screen.",
            "A correct fact from an official textbook.",
            "The five parts of a prompt.",
          ],
          "Kupendelea au kubagua isivyo haki mtu, kundi, au wazo.",
          [
            "Skrini angavu.",
            "Ukweli sahihi kutoka kitabu rasmi.",
            "Sehemu tano za maagizo.",
          ],
          1
        ),
        answerEn: "Favouring or discriminating unfairly against a person, group, or idea.",
        answerSw: "Kupendelea au kubagua isivyo haki mtu, kundi, au wazo.",
        restudy: { unit: "specific", videoTitle: "What is AI? A Guide for Parents", times: ["01:51"] },
      },
      {
        qEn: "Which school use matches the study-partner rule?",
        qSw: "Ni matumizi gani ya shule yanayolingana na kanuni ya mshirika wa kusoma?",
        ...opt(
          "Ask for practice questions or an explanation, then do the work yourself.",
          [
            "Paste the assignment and hand in the reply as yours.",
            "Let the tool sit the test.",
            "Check a national exam rule with a second chatbot only.",
          ],
          "Omba maswali ya mazoezi au maelezo, kisha fanya kazi mwenyewe.",
          [
            "Bandika kazi na uwasilishe jibu kama lako.",
            "Acha zana ifanye mtihani.",
            "Kagua kanuni ya mtihani wa taifa kwa chatbot nyingine pekee.",
          ],
          3
        ),
        answerEn: "Ask for practice questions or an explanation, then do the work yourself.",
        answerSw: "Omba maswali ya mazoezi au maelezo, kisha fanya kazi mwenyewe.",
        restudy: {
          unit: "application",
          videoTitle: "Using AI Wisely for School Success",
          times: ["00:16", "02:48"],
        },
      },
      {
        qEn: "Where should you check a claim about a national exam rule?",
        qSw: "Unapaswa kukagua wapi dai kuhusu kanuni ya mtihani wa taifa?",
        ...opt(
          "An official source such as KNEC or your teacher, not a second chatbot.",
          [
            "Whichever chatbot answers fastest.",
            "A comment under a random video.",
            "Only your own memory of last year.",
          ],
          "Chanzo rasmi kama KNEC au mwalimu wako, si chatbot nyingine.",
          [
            "Chatbot yoyote inayojibu haraka.",
            "Maoni chini ya video ya nasibu.",
            "Kumbukumbu yako ya mwaka uliopita pekee.",
          ],
          0
        ),
        answerEn: "An official source such as KNEC or your teacher, not a second chatbot.",
        answerSw: "Chanzo rasmi kama KNEC au mwalimu wako, si chatbot nyingine.",
        restudy: { unit: "application", extra: "notes only, no video" },
      },
    ],
  },
  {
    titleEn: "Privacy, scams, and fairness",
    titleSw: "Faragha, utapeli, na usawa",
    descEn: "Keep PINs and ID out of public tools. Pause, check a trusted source, and notice who the data left out.",
    descSw: "Weka PIN na kitambulisho nje ya zana za umma. Simama, kagua chanzo unachokiamini, na uone nani data ilimwacha nje.",
    units: [
      {
        notesEn: [
          "Never type these into a public chatbot or an unknown app: national ID number, M-Pesa PIN, KRA PIN, passwords, health details, or children's photos.",
          "Kenya's Data Protection Act, 2019 protects personal data. You have rights to be informed, to access your data, to correct it, and to ask for deletion. The Office of the Data Protection Commissioner (ODPC) handles complaints.",
          "Stop, Check, Tell. Stop before you pay or share a PIN. Check with the person or company by a number you already trust. Tell a trusted adult or report the scam.",
        ],
        notesSw: [
          "Usiandike hivi kwenye chatbot ya umma au programu usiyoijua: nambari ya kitambulisho, PIN ya M-Pesa, PIN ya KRA, manenosiri, maelezo ya afya, au picha za watoto.",
          "Sheria ya Ulinzi wa Data ya Kenya, 2019 inalinda data binafsi. Una haki ya kufahamishwa, kufikia data yako, kuirekebisha, na kuomba ifutwe. Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) hushughulikia malalamiko.",
          "Simama, Kagua, Eleza. Simama kabla ya kulipa au kutoa PIN. Kagua na mtu au kampuni kwa nambari unayoiamini tayari. Mwambie mtu mzima unayemwamini au ripoti utapeli.",
        ],
      },
      {
        notesEn: [
          "What you click teaches a recommender what to show you next. That can hide other views.",
          "What you type into a chatbot may be stored and later used to train another version. Do not share secrets.",
          "If a model only sees one kind of example, it fails on everyone else. Unfair data makes unfair results. Languages and accents can be left out too.",
        ],
        notesSw: [
          "Unachobofya hufundisha kipendekezi kikuonyeshe nini kinachofuata. Hilo linaweza kuficha maoni mengine.",
          "Unachoandika kwenye chatbot kinaweza kuhifadhiwa na kutumika kufunza toleo lingine. Usishiriki siri.",
          "Modeli ikiona aina moja tu ya mifano, inashindwa kwa wengine. Data isiyo ya haki huleta matokeo yasiyo ya haki. Lugha na lafudhi pia zinaweza kuachwa nje.",
        ],
        video: {
          id: "_uDxfVBMrxM",
          titleEn: "Talking to Kids About AI: Privacy, Fairness, and Responsibility",
          titleSw: "Kuzungumza na watoto kuhusu AI: faragha, usawa, na uwajibikaji",
          channel: "Common Sense Education",
          checks: [
            {
              t: "00:40",
              qEn: "What is an algorithm, in this video's words?",
              qSw: "Algoriti ni nini, kwa maneno ya video hii?",
              ...opt(
                "Step-by-step instructions a computer follows to do tasks such as sorting data, finding patterns, and making predictions or decisions.",
                [
                  "A person who checks every answer by hand.",
                  "A PIN you type into M-Pesa.",
                  "A law that bans all software.",
                ],
                "Maelekezo hatua kwa hatua ambayo kompyuta hufuata kufanya kazi kama kupanga data, kupata ruwaza, na kutabiri au kuamua.",
                [
                  "Mtu anayekagua kila jibu kwa mkono.",
                  "PIN unayoandika kwenye M-Pesa.",
                  "Sheria inayopiga marufuku programu zote.",
                ],
                1
              ),
            },
            {
              t: "01:38",
              qEn: "What can happen to things you ask or tell a generative AI chatbot?",
              qSw: "Ni nini kinaweza kutokea kwa mambo unayouliza au kumwambia chatbot ya AI zalishi?",
              ...opt(
                "They may be stored and used to help train future versions, and may show up later in responses to other users.",
                [
                  "They are deleted the moment you close the tab, always.",
                  "They stay only on a paper notebook in your house.",
                  "They become a private diary that nobody can train on.",
                ],
                "Yanaweza kuhifadhiwa na kutumika kusaidia kufunza matoleo ya baadaye, na kuonekana baadaye katika majibu kwa watumiaji wengine.",
                [
                  "Yanafuta mara tu unapofunga ukurasa, daima.",
                  "Yanakaa tu kwenye daftari la karatasi nyumbani.",
                  "Yanakuwa shajara ya faragha ambayo hakuna anayeweza kufunza.",
                ],
                0
              ),
            },
            {
              t: "03:06",
              qEn: "What goes wrong in the cat example?",
              qSw: "Ni nini kinakwenda vibaya katika mfano wa paka?",
              ...opt(
                "If the AI only learns from fluffy white cats, it may struggle to recognise cats that look different, such as a short-haired grey cat. Unfair training data leads to unfair outputs.",
                [
                  "The cat example shows that every model already knows every animal.",
                  "A grey cat is always labelled correctly if the screen is bright.",
                  "The problem is the volume of the video, not the examples.",
                ],
                "AI ikijifunza paka weupe laini pekee, inaweza kushindwa kutambua paka wanaoonekana tofauti, kama paka kijivu wa manyoya mafupi. Data ya mafunzo isiyo ya haki huleta matokeo yasiyo ya haki.",
                [
                  "Mfano wa paka unaonyesha kila modeli tayari inajua kila mnyama.",
                  "Paka kijivu daima hutambulika skrini ikiwa angavu.",
                  "Tatizo ni sauti ya video, si mifano.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "A cloned voice note from a 'relative' asking for money is a known scam pattern. Hang up. Call them back on the number saved in your phone.",
          "You often cannot spot AI text by eye. Do not share it until you have a reason to trust the source. For voting, school fees, or a job offer, use the official office.",
          "Emergency health or safety: call 999 or 112. Do not wait for a chatbot.",
        ],
        notesSw: [
          "Ujumbe wa sauti ulionakiliwa kutoka 'ndugu' akiomba pesa ni mtindo unaojulikana wa utapeli. Kata. Mpigie kwa nambari iliyohifadhiwa kwenye simu yako.",
          "Mara nyingi huwezi kutambua maandishi ya AI kwa jicho. Usishiriki hadi uwe na sababu ya kuamini chanzo. Kwa kura, ada ya shule, au ofa ya kazi, tumia ofisi rasmi.",
          "Dharura ya afya au usalama: piga 999 au 112. Usisubiri chatbot.",
        ],
        video: {
          id: "uEPqf7fLgTM",
          titleEn: "How to spot AI and misinformation online",
          titleSw: "Jinsi ya kutambua AI na habari potofu mtandaoni",
          channel: "PBS NewsHour",
          checks: [
            {
              t: "02:17",
              qEn: "What should you do before you reshare something on social media?",
              qSw: "Unapaswa kufanya nini kabla ya kushiriki tena kitu kwenye mitandao ya kijamii?",
              ...opt(
                "Stop and think whether you are reasonably sure it is accurate and whether it seems plausible. Look for accuracy, not only for signs of AI.",
                [
                  "Share it immediately if it looks emotional.",
                  "Only check whether the font looks human.",
                  "Ask a second chatbot and then share either answer.",
                ],
                "Simama na ufikiri kama una uhakika wa kutosha kuwa ni sahihi na kama inawezekana. Tafuta usahihi, si dalili za AI pekee.",
                [
                  "Shiriki mara moja likiwa na hisia.",
                  "Kagua tu kama fonti inaonekana ya binadamu.",
                  "Uliza chatbot nyingine kisha ushiriki jibu lolote.",
                ],
                0
              ),
            },
            {
              t: "03:01",
              qEn: "What is a large language model doing when it helps you type?",
              qSw: "Modeli kubwa ya lugha inafanya nini inapokusaidia kuandika?",
              ...opt(
                "Predicting the next word. A chatbot mimics human writing by predicting words that form a coherent sentence, based on data it was taught.",
                [
                  "Opening an official government file for every word.",
                  "Calling your relative to confirm the sentence.",
                  "Storing the sentence only on paper.",
                ],
                "Kutabiri neno linalofuata. Chatbot huiga uandishi wa binadamu kwa kutabiri maneno yanayounda sentensi inayoeleweka, kutokana na data iliyofundishwa.",
                [
                  "Kufungua faili rasmi ya serikali kwa kila neno.",
                  "Kumpigia ndugu wako kuthibitisha sentensi.",
                  "Kuhifadhi sentensi kwenye karatasi pekee.",
                ],
                3
              ),
            },
            {
              t: "05:04",
              qEn: "Where do the experts in the video say people should turn to avoid bad AI information?",
              qSw: "Wataalamu kwenye video wanasema watu wageukie wapi kuepuka habari mbaya za AI?",
              ...opt(
                "Trusted sources such as a vetted news source or local government officials, and higher media literacy and scepticism.",
                [
                  "Any account that posts fastest.",
                  "A second generated paragraph that agrees with the first.",
                  "Only the number of likes.",
                ],
                "Vyanzo unavyoviamini kama chanzo cha habari kilichochunguzwa au maafisa wa serikali za mitaa, pamoja na ujuzi wa habari na mashaka.",
                [
                  "Akaunti yoyote inayochapisha haraka.",
                  "Aya nyingine iliyozalishwa inayokubaliana na ya kwanza.",
                  "Idadi ya vipendwa pekee.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Your PIN and ID are not prompt details. A scary or lucky message is a reason to pause, not to pay.",
          "Fairness: if the examples leave people out, the tool will leave them out.",
        ],
        notesSw: [
          "PIN na kitambulisho chako si undani wa maagizo. Ujumbe wa kutisha au wa bahati ni sababu ya kusimama, si ya kulipa.",
          "Usawa: mifano ikiwaacha watu nje, zana itawaacha nje.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "Which of these is safe to paste into a public chatbot?",
        qSw: "Ni kipi kati ya hivi ni salama kubandika kwenye chatbot ya umma?",
        ...opt(
          "None of these: ID number, M-Pesa PIN, KRA PIN, password, health details, children's photos.",
          [
            "Your M-Pesa PIN, if you also ask nicely.",
            "A child's photo plus their school name.",
            "Your national ID and KRA PIN together.",
          ],
          "Hakuna kati ya hivi: nambari ya kitambulisho, PIN ya M-Pesa, PIN ya KRA, nenosiri, maelezo ya afya, picha za watoto.",
          [
            "PIN yako ya M-Pesa, ukiuliza kwa adabu.",
            "Picha ya mtoto pamoja na jina la shule.",
            "Kitambulisho chako na PIN ya KRA pamoja.",
          ],
          2
        ),
        answerEn: "None of these: ID number, M-Pesa PIN, KRA PIN, password, health details, children's photos.",
        answerSw: "Hakuna kati ya hivi: nambari ya kitambulisho, PIN ya M-Pesa, PIN ya KRA, nenosiri, maelezo ya afya, picha za watoto.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From the privacy video, why should you be careful what you tell a chatbot?",
        qSw: "Kutoka video ya faragha, kwa nini uwe mwangalifu na unachomwambia chatbot?",
        ...opt(
          "What you share may be stored and used to train future versions, and may appear in later replies.",
          [
            "Because the chatbot forgets everything immediately.",
            "Because a PIN makes the answer more accurate.",
            "Because chat text cannot be stored.",
          ],
          "Unachoshiriki kinaweza kuhifadhiwa na kutumika kufunza matoleo ya baadaye, na kuonekana katika majibu ya baadaye.",
          [
            "Kwa sababu chatbot husahau kila kitu mara moja.",
            "Kwa sababu PIN hufanya jibu kuwa sahihi zaidi.",
            "Kwa sababu maandishi ya mazungumzo hayawezi kuhifadhiwa.",
          ],
          0
        ),
        answerEn: "What you share may be stored and used to train future versions, and may appear in later replies.",
        answerSw: "Unachoshiriki kinaweza kuhifadhiwa na kutumika kufunza matoleo ya baadaye, na kuonekana katika majibu ya baadaye.",
        restudy: {
          unit: "specific",
          videoTitle: "Talking to Kids About AI: Privacy, Fairness, and Responsibility",
          times: ["01:38"],
          extra: "chat data can be stored",
        },
      },
      {
        qEn: "The cat example teaches what?",
        qSw: "Mfano wa paka unafundisha nini?",
        ...opt(
          "A model trained on only one kind of example can fail on others. That is how bias shows up.",
          [
            "White cats are the only cats a model should name.",
            "More of the same photo removes every bias.",
            "The example is about volume, not training data.",
          ],
          "Modeli iliyofunzwa kwa aina moja tu ya mifano inaweza kushindwa kwa nyingine. Ndivyo upendeleo unavyoonekana.",
          [
            "Paka weupe ndio paka pekee modeli inapaswa kutaja.",
            "Picha ile ile zaidi huondoa kila upendeleo.",
            "Mfano unahusu sauti, si data ya mafunzo.",
          ],
          3
        ),
        answerEn: "A model trained on only one kind of example can fail on others. That is how bias shows up.",
        answerSw: "Modeli iliyofunzwa kwa aina moja tu ya mifano inaweza kushindwa kwa nyingine. Ndivyo upendeleo unavyoonekana.",
        restudy: {
          unit: "specific",
          videoTitle: "Talking to Kids About AI: Privacy, Fairness, and Responsibility",
          times: ["03:06"],
        },
      },
      {
        qEn: "From the PBS video, is 'it looks human' a good test that a post is true?",
        qSw: "Kutoka video ya PBS, je 'inaonekana ya binadamu' ni kipimo kizuri kwamba chapisho ni kweli?",
        ...opt(
          "No. Experts say you often cannot tell AI text by looking. Check whether it is accurate, using a trusted source.",
          [
            "Yes. If it looks human, it is true.",
            "Yes, if many people have already shared it.",
            "Only when the post is about sport.",
          ],
          "Hapana. Wataalamu wanasema mara nyingi huwezi kutambua maandishi ya AI kwa kuangalia. Kagua kama ni sahihi, kwa chanzo unachokiamini.",
          [
            "Ndiyo. Ikiwa inaonekana ya binadamu, ni kweli.",
            "Ndiyo, watu wengi wakiwa wameshiriki.",
            "Michezo tu.",
          ],
          1
        ),
        answerEn: "No. Experts say you often cannot tell AI text by looking. Check whether it is accurate, using a trusted source.",
        answerSw: "Hapana. Wataalamu wanasema mara nyingi huwezi kutambua maandishi ya AI kwa kuangalia. Kagua kama ni sahihi, kwa chanzo unachokiamini.",
        restudy: {
          unit: "application",
          videoTitle: "How to spot AI and misinformation online",
          times: ["02:17", "05:04"],
          extra: "slow down; use a trusted source",
        },
      },
      {
        qEn: "A voice note that sounds like your uncle asks for urgent M-Pesa. What is Stop, Check, Tell?",
        qSw: "Ujumbe wa sauti unaosikika kama mjomba wako unaomba M-Pesa ya dharura. Simama, Kagua, Eleza ni nini?",
        ...opt(
          "Stop. Call him on a saved number. Tell a trusted adult if it was fake.",
          [
            "Send the money first, then call.",
            "Reply with your PIN so he can confirm it is you.",
            "Ask a public chatbot whether the voice is real, and pay if it says yes.",
          ],
          "Simama. Mpigie kwa nambari iliyohifadhiwa. Mwambie mtu mzima unayemwamini ikiwa ulikuwa bandia.",
          [
            "Tuma pesa kwanza, kisha piga.",
            "Jibu kwa PIN yako ili athibitishe ni wewe.",
            "Uliza chatbot ya umma kama sauti ni halisi, na ulipe ikisema ndiyo.",
          ],
          2
        ),
        answerEn: "Stop. Call him on a saved number. Tell a trusted adult if it was fake.",
        answerSw: "Simama. Mpigie kwa nambari iliyohifadhiwa. Mwambie mtu mzima unayemwamini ikiwa ulikuwa bandia.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "AI for school, shop, farm, and health",
    titleSw: "AI kwa shule, duka, shamba, na afya",
    descEn: "The same rule in every place: AI drafts or flags. A person decides.",
    descSw: "Kanuni ile ile kila mahali: AI huandaa rasimu au huashiria. Mtu anaamua.",
    units: [
      {
        notesEn: [
          "Same rule in every place: AI drafts or flags. A person decides.",
          "School: explain and quiz you. It does not sit the test.",
          "Shop or hustle: it can draft a customer SMS or sort a sales book. You check the price, the promise, and the till.",
          "Farm: a photo app is not an extension officer. Check with the afisa wa ugani, an agrovet, or the pesticide label before you spray.",
          "Health: a chatbot is not a doctor, nurse, or pharmacist. Emergencies: 999 or 112. Never paste a patient's name, HIV status, or ID into a public tool.",
        ],
        notesSw: [
          "Kanuni ile ile kila mahali: AI huandaa rasimu au huashiria. Mtu anaamua.",
          "Shule: inakueleza na kukupa mazoezi. Haifanyi mtihani.",
          "Duka au kazi ndogo: inaweza kuandaa SMS ya mteja au kupanga daftari la mauzo. Wewe hukagua bei, ahadi, na till.",
          "Shamba: programu ya picha si afisa wa ugani. Kagua na afisa wa ugani, agrovet, au lebo ya dawa kabla ya kunyunyizia.",
          "Afya: chatbot si daktari, muuguzi, wala mfamasia. Dharura: 999 au 112. Usibandike jina la mgonjwa, hali ya VVU, au kitambulisho kwenye zana ya umma.",
        ],
      },
      {
        notesEn: [
          "In care, a tool may watch live signals and warn a professional early. The professional still decides.",
          "Image tools may help spot disease sooner. They do not replace the clinician, and they must be designed so care stays respectful.",
          "Kenya note the video does not cover: Community Health Promoters and clinic staff keep patient secrets under the Data Protection Act and the Health Act.",
        ],
        notesSw: [
          "Katika huduma, zana inaweza kuangalia ishara za moja kwa moja na kumwonya mtaalamu mapema. Mtaalamu bado anaamua.",
          "Zana za picha zinaweza kusaidia kuona ugonjwa mapema. Hazichukui nafasi ya mtaalamu, na lazima ziundwe ili huduma ibaki yenye heshima.",
          "Dokezo la Kenya ambalo video haifundishi: Wahamasishaji wa Afya ya Jamii na wafanyakazi wa kliniki huhifadhi siri za wagonjwa chini ya Sheria ya Ulinzi wa Data na Sheria ya Afya.",
        ],
        video: {
          id: "aohQ4QSKsTU",
          titleEn: "AI in health: empowering patients, enhancing care",
          titleSw: "AI katika afya: kuwawezesha wagonjwa, kuboresha huduma",
          channel: "WHO European Region",
          checks: [
            {
              t: "00:15",
              qEn: "How can AI support healthcare, in the opening of the video?",
              qSw: "AI inawezaje kusaidia huduma ya afya, mwanzoni mwa video?",
              ...opt(
                "It can monitor and interpret health status in real time to predict and detect possible complications so health professionals can intervene early.",
                [
                  "It replaces the doctor and writes the prescription alone.",
                  "It decides the dose without a clinician.",
                  "It stores patient names in a public chatbot.",
                ],
                "Inaweza kufuatilia na kufasiri hali ya afya kwa wakati halisi ili kutabiri na kugundua matatizo yanayowezekana ili wataalamu wa afya waingilie mapema.",
                [
                  "Inachukua nafasi ya daktari na kuandika dawa peke yake.",
                  "Inaamua dozi bila mtaalamu.",
                  "Inahifadhi majina ya wagonjwa kwenye chatbot ya umma.",
                ],
                0
              ),
            },
            {
              t: "00:56",
              qEn: "What can AI help doctors do with images and data?",
              qSw: "AI inaweza kuwasaidia madaktari kufanya nini kwa picha na data?",
              ...opt(
                "Analyse images and data to detect disease earlier and start appropriate treatment.",
                [
                  "Replace the scan with a guess from a public chat.",
                  "Skip the clinician and message the patient a dose.",
                  "Delete the image so nobody reviews it.",
                ],
                "Kuchanganua picha na data ili kugundua ugonjwa mapema na kuanza matibabu yanayofaa.",
                [
                  "Kubadilisha skani na makisio kutoka mazungumzo ya umma.",
                  "Kuruka mtaalamu na kumtumia mgonjwa dozi.",
                  "Kufuta picha ili mtu asikague.",
                ],
                2
              ),
            },
            {
              t: "01:49",
              qEn: "What does the video say responsible, ethical AI in healthcare should strengthen?",
              qSw: "Video inasema AI yenye uwajibikaji na maadili katika afya inapaswa kuimarisha nini?",
              ...opt(
                "Independence, dignity, and well-being, and compassionate care.",
                [
                  "Speed only, even if the patient is left out of the decision.",
                  "Replacing every nurse on the ward.",
                  "Publishing patient photos for training.",
                ],
                "Uhuru, hadhi, na ustawi, na huduma yenye huruma.",
                [
                  "Kasi pekee, hata mgonjwa akiachwa nje ya uamuzi.",
                  "Kuondoa kila muuguzi wodi.",
                  "Kuchapisha picha za wagonjwa kwa mafunzo.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Pick one place you know. Write one way AI could help and one way it could hurt.",
          "Farm example: a leaf photo might confuse fall armyworm with poor soil. Do not spray from the app alone.",
          "Shop example: do not paste a customer list into a chatbot to 'write better ads'.",
          "The short video below only names sectors. Your notes do the Kenya detail.",
        ],
        notesSw: [
          "Chagua sehemu moja unayoijua. Andika njia moja AI inaweza kusaidia na njia moja inaweza kudhuru.",
          "Mfano wa shamba: picha ya jani inaweza kuchanganya viwavijeshi vamizi na udongo duni. Usinyunyizie kutokana na programu peke yake.",
          "Mfano wa duka: usibandike orodha ya wateja kwenye chatbot ili 'kuandika matangazo bora'.",
          "Video fupi hapa chini inataja sekta tu. Maelezo yako ndiyo yanayotoa undani wa Kenya.",
        ],
        video: {
          id: "Ok-xpKjKp2g",
          titleEn: "How AI Works",
          titleSw: "Jinsi AI inavyofanya kazi",
          channel: "CodeAI",
          checks: [
            {
              t: "00:05",
              qEn: "Which everyday areas does the speaker name as places AI is already used?",
              qSw: "Mzungumzaji anataja maeneo gani ya kila siku ambapo AI tayari inatumika?",
              ...opt(
                "Precision agriculture, precision medicine, personalised e-commerce, personalised education, connected cars, and connected homes.",
                [
                  "Only video games.",
                  "Only printing and stapling.",
                  "Only radio weather at the top of the hour.",
                ],
                "Kilimo cha usahihi, tiba ya usahihi, biashara ya mtandaoni ya kibinafsi, elimu ya kibinafsi, magari yaliyounganishwa, na nyumba zilizounganishwa.",
                [
                  "Michezo ya video pekee.",
                  "Kuchapisha na kuunganisha karatasi pekee.",
                  "Hali ya hewa ya redio pekee.",
                ],
                0
              ),
            },
            {
              t: "00:24",
              qEn: "What does the speaker say we can use to train computers?",
              qSw: "Mzungumzaji anasema tunaweza kutumia nini kufunza kompyuta?",
              ...opt(
                "Data. With AI we can use data to train computers on just about anything.",
                [
                  "Only a handwritten rule for each customer.",
                  "Hope, with no examples.",
                  "A single photo of one room.",
                ],
                "Data. Kwa AI tunaweza kutumia data kufunza kompyuta kuhusu karibu chochote.",
                [
                  "Kanuni iliyoandikwa kwa mkono kwa kila mteja pekee.",
                  "Matumaini, bila mifano.",
                  "Picha moja ya chumba kimoja.",
                ],
                3
              ),
            },
            {
              t: "01:04",
              qEn: "What question does the speaker say we must ask, beyond what computers can do?",
              qSw: "Mzungumzaji anasema ni swali gani lazima tuulize, zaidi ya kompyuta zinaweza kufanya nini?",
              ...opt(
                "Not only what computers can do, but what computers should do.",
                [
                  "Only how fast the model can answer.",
                  "Only which brand name is on the screen.",
                  "Whether we can skip every human check.",
                ],
                "Si tu kompyuta zinaweza kufanya nini, bali kompyuta zinapaswa kufanya nini.",
                [
                  "Modeli inajibu kwa kasi gani pekee.",
                  "Jina la chapa lililo kwenye skrini pekee.",
                  "Kama tunaweza kuruka kila ukaguzi wa binadamu.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "One line for each part of life: school, shop, farm, clinic. Help is welcome. The human still signs off.",
          "If money, medicine, or safety is involved, verify with the responsible person or official label.",
        ],
        notesSw: [
          "Mstari mmoja kwa kila sehemu ya maisha: shule, duka, shamba, kliniki. Msaada unakaribishwa. Binadamu bado anatia saini.",
          "Pesa, dawa, au usalama vikihusika, thibitisha na mtu mwenye dhamana au lebo rasmi.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "A leaf-photo app names a pest. What do you do before you spray?",
        qSw: "Programu ya picha ya jani inataja mdudu. Unafanya nini kabla ya kunyunyizia?",
        ...opt(
          "Check with an extension officer, an agrovet, or the official product label. Do not treat the app as final.",
          [
            "Spray the dose the app printed, the same afternoon.",
            "Paste the farm's finances into a public chatbot first.",
            "Ignore the label because the app sounded sure.",
          ],
          "Kagua na afisa wa ugani, agrovet, au lebo rasmi ya bidhaa. Usichukulie programu kuwa uamuzi wa mwisho.",
          [
            "Nyunyizia dozi programu iliyochapisha, alasiri hiyo.",
            "Bandika fedha za shamba kwenye chatbot ya umma kwanza.",
            "Puuza lebo kwa sababu programu ilisikika na uhakika.",
          ],
          0
        ),
        answerEn: "Check with an extension officer, an agrovet, or the official product label. Do not treat the app as final.",
        answerSw: "Kagua na afisa wa ugani, agrovet, au lebo rasmi ya bidhaa. Usichukulie programu kuwa uamuzi wa mwisho.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From the WHO video, who acts when AI flags a possible complication?",
        qSw: "Kutoka video ya WHO, nani huchukua hatua AI inapoashiria tatizo linalowezekana?",
        ...opt(
          "Health professionals. AI predicts so they can intervene early.",
          [
            "The chatbot, which sends the dose itself.",
            "Nobody. The flag is the treatment.",
            "A public comment thread.",
          ],
          "Wataalamu wa afya. AI inatabiri ili waweze kuingilia mapema.",
          [
            "Chatbot, inayotuma dozi yenyewe.",
            "Hakuna. Alama ndiyo matibabu.",
            "Uzi wa maoni ya umma.",
          ],
          2
        ),
        answerEn: "Health professionals. AI predicts so they can intervene early.",
        answerSw: "Wataalamu wa afya. AI inatabiri ili waweze kuingilia mapema.",
        restudy: {
          unit: "specific",
          videoTitle: "AI in health: empowering patients, enhancing care",
          times: ["00:15"],
        },
      },
      {
        qEn: "Is it acceptable to paste a patient's name and diagnosis into a public chatbot to 'explain it'?",
        qSw: "Je, inakubalika kubandika jina na utambuzi wa mgonjwa kwenye chatbot ya umma ili 'kuieleza'?",
        ...opt(
          "No. Health details and names stay out of public tools.",
          [
            "Yes, if you delete the chat afterwards.",
            "Yes, if the chatbot sounds medical.",
            "Yes, for any learner who is curious.",
          ],
          "Hapana. Maelezo ya afya na majina yanabaki nje ya zana za umma.",
          [
            "Ndiyo, ukifuta mazungumzo baadaye.",
            "Ndiyo, chatbot ikisikika ya kitabibu.",
            "Ndiyo, kwa mwanafunzi yeyote mwenye udadisi.",
          ],
          1
        ),
        answerEn: "No. Health details and names stay out of public tools.",
        answerSw: "Hapana. Maelezo ya afya na majina yanabaki nje ya zana za umma.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From How AI Works, what question sits beside 'what can computers do'?",
        qSw: "Kutoka How AI Works, ni swali gani linakaa kando ya 'kompyuta zinaweza kufanya nini'?",
        ...opt(
          "What should computers do.",
          [
            "Which brand is fastest.",
            "How to skip the human signature.",
            "How many likes the demo got.",
          ],
          "Kompyuta zinapaswa kufanya nini.",
          [
            "Chapa ipi ni ya haraka zaidi.",
            "Jinsi ya kuruka saini ya binadamu.",
            "Onyesho lilipata vipendwa vingapi.",
          ],
          0
        ),
        answerEn: "What should computers do.",
        answerSw: "Kompyuta zinapaswa kufanya nini.",
        restudy: { unit: "application", videoTitle: "How AI Works", times: ["01:04"] },
      },
      {
        qEn: "A chatbot drafts a price SMS for your duka. What must you check before you send it?",
        qSw: "Chatbot inaandaa SMS ya bei kwa duka lako. Lazima ukague nini kabla ya kuituma?",
        ...opt(
          "The real price, the promise, and that you did not expose customer data.",
          [
            "Only whether the sentence sounds friendly.",
            "Nothing. A draft is ready to send.",
            "The customer's PIN, so the till can match it.",
          ],
          "Bei halisi, ahadi, na kwamba hukufichua data ya mteja.",
          [
            "Kama sentensi inasikika ya kirafiki pekee.",
            "Hakuna. Rasimu iko tayari kutumwa.",
            "PIN ya mteja, ili till ilingane.",
          ],
          3
        ),
        answerEn: "The real price, the promise, and that you did not expose customer data.",
        answerSw: "Bei halisi, ahadi, na kwamba hukufichua data ya mteja.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "A small community idea",
    titleSw: "Wazo dogo la jamii",
    descEn: "Start with a real problem. Name one help, one risk, and the person who stays responsible.",
    descSw: "Anza na tatizo halisi. Taja msaada mmoja, hatari moja, na mtu anayebaki na dhamana.",
    units: [
      {
        notesEn: [
          "Start with a problem people actually have, not with a gadget. Talk to them and ask before you record anyone.",
          "Ask: could a notebook, a poster, or a phone call solve this without AI? If yes, do that.",
          "If you still use AI, name one way it helps and one risk (a wrong guess, or private data). Write how you will manage that risk.",
          "Who is left out if the idea needs a smartphone, data bundles, or English only?",
        ],
        notesSw: [
          "Anza na tatizo watu wanacho kweli, si na kifaa. Zungumza nao na uombe ruhusa kabla ya kumrekodi mtu.",
          "Uliza: je daftari, bango, au simu vinaweza kutatua hili bila AI? Kama ndiyo, fanya hivyo.",
          "Ikiwa bado unatumia AI, taja njia moja inasaidia na hatari moja (makisio mabaya, au data ya faragha). Andika jinsi utakavyodhibiti hatari hiyo.",
          "Nani anaachwa nje wazo likihitaji simu janja, kifurushi cha data, au Kiingereza pekee?",
        ],
      },
      {
        notesEn: [
          "You can train a small model without writing code: collect examples of each class, then train.",
          "Classes are the categories you want recognised. Add variety. Samples can stay on the device.",
          "A class can be images, sounds, or body poses. For a community idea, start on paper before you record anyone's face or voice.",
        ],
        notesSw: [
          "Unaweza kufunza modeli ndogo bila kuandika msimbo: kusanya mifano ya kila kundi, kisha funza.",
          "Makundi ni makundi unayotaka yatambulike. Ongeza utofauti. Sampuli zinaweza kubaki kwenye kifaa.",
          "Kundi linaweza kuwa picha, sauti, au mkao wa mwili. Kwa wazo la jamii, anza kwenye karatasi kabla ya kurekodi uso au sauti ya mtu.",
        ],
        video: {
          id: "DFBbSTvtpy4",
          titleEn: "Teachable Machine Tutorial 1: Gather",
          titleSw: "Mafunzo ya Teachable Machine 1: Kusanya",
          channel: "Experiments with Google",
          checks: [
            {
              t: "00:07",
              qEn: "What does the speaker say every machine-learning workflow starts with, and what is a class?",
              qSw: "Mzungumzaji anasema kila mtiririko wa ujifunzaji wa mashine unaanza na nini, na kundi ni nini?",
              ...opt(
                "Gathering data. A class is a category you want the computer to recognise.",
                [
                  "Publishing the model. A class is a school classroom.",
                  "Buying a server. A class is a price list.",
                  "Writing code first. A class is a programming file.",
                ],
                "Kukusanya data. Kundi ni kundi unalotaka kompyuta ilitambue.",
                [
                  "Kuchapisha modeli. Kundi ni darasa la shule.",
                  "Kununua seva. Kundi ni orodha ya bei.",
                  "Kuandika msimbo kwanza. Kundi ni faili ya programu.",
                ],
                0
              ),
            },
            {
              t: "01:10",
              qEn: "For an audio model, how long is the background class they say you need?",
              qSw: "Kwa modeli ya sauti, kundi la mandhari wanasema unahitaji liwe refu kiasi gani?",
              ...opt(
                "One really long background class, 20 seconds.",
                [
                  "One short beep, under one second.",
                  "No background class at all.",
                  "Twenty minutes of someone else's private voice notes.",
                ],
                "Kundi moja refu sana la mandhari, sekunde 20.",
                [
                  "Mlio mfupi, chini ya sekunde moja.",
                  "Hakuna kundi la mandhari.",
                  "Dakika ishirini za ujumbe wa sauti wa faragha wa mtu mwingine.",
                ],
                1
              ),
            },
            {
              t: "02:02",
              qEn: "While you capture data in this tool, where does the speaker say it stays?",
              qSw: "Unapokusanya data kwenye zana hii, mzungumzaji anasema inakaa wapi?",
              ...opt(
                "On the device. It is not being sent to a server. You can download samples or save them to Drive if you want to keep them.",
                [
                  "It is sent straight to a company server as you record.",
                  "It is posted publicly the moment you press record.",
                  "It is stored only in someone else's account.",
                ],
                "Kwenye kifaa. Haitumwi kwa seva. Unaweza kupakua sampuli au kuzihifadhi kwenye Drive ukitaka kuzibakiza.",
                [
                  "Inatumwa moja kwa moja kwa seva ya kampuni unaporekodi.",
                  "Inachapishwa hadharani mara unapobonyeza rekodi.",
                  "Inahifadhiwa tu kwenye akaunti ya mtu mwingine.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Test with two or three people. If the tool is unsure, that is information, not a failure. Add clearer examples or decide AI is the wrong fix.",
          "One class is not enough. A model needs contrasting examples or everything looks like the only thing it has seen.",
          "Project card, six lines: problem, who it is for, one help, one risk, how you will check, who you will show it to (school, clinic, chief, SACCO, or CBO).",
        ],
        notesSw: [
          "Jaribu na watu wawili au watatu. Zana ikiwa haina uhakika, hiyo ni habari, si kushindwa. Ongeza mifano iliyo wazi zaidi au amua AI si suluhisho sahihi.",
          "Kundi moja halitoshi. Modeli inahitaji mifano inayotofautiana, la sivyo kila kitu kinaonekana kama kile kimoja ilichokiona.",
          "Kadi ya mradi, mistari sita: tatizo, ni kwa nani, msaada mmoja, hatari moja, jinsi utakavyokagua, na utamwonyesha nani (shule, kliniki, chifu, SACCO, au CBO).",
        ],
        video: {
          id: "3BhkeY974Rg",
          titleEn: "A.I. Experiments: Teachable Machine",
          titleSw: "Majaribio ya A.I.: Teachable Machine",
          channel: "Experiments with Google",
          checks: [
            {
              t: "00:11",
              qEn: "What does this experiment let you do without coding?",
              qSw: "Jaribio hili linakuruhusu kufanya nini bila kuandika msimbo?",
              ...opt(
                "Explore how machine learning works, live in the browser.",
                [
                  "Diagnose a patient.",
                  "Send money from a till.",
                  "Replace a community meeting.",
                ],
                "Kuchunguza jinsi ujifunzaji wa mashine unavyofanya kazi, moja kwa moja kwenye kivinjari.",
                [
                  "Kumtambua mgonjwa.",
                  "Kutuma pesa kutoka till.",
                  "Kuchukua nafasi ya mkutano wa jamii.",
                ],
                0
              ),
            },
            {
              t: "01:09",
              qEn: "Why is the green class high no matter what, after only one class is trained?",
              qSw: "Kwa nini kundi la kijani liko juu hata iweje, baada ya kundi moja tu kufunzwa?",
              ...opt(
                "The machine picks the class the input is most similar to. With only one class, everything looks most similar to that one.",
                [
                  "Green is always the correct colour in real life.",
                  "The browser adds a second class in secret.",
                  "One class is enough to tell every difference.",
                ],
                "Mashine huchagua kundi ambalo ingizo linafanana nalo zaidi. Kukiwa na kundi moja, kila kitu kinafanana zaidi na hilo.",
                [
                  "Kijani daima ni rangi sahihi maishani.",
                  "Kivinjari huongeza kundi la pili kwa siri.",
                  "Kundi moja linatosha kutofautisha kila tofauti.",
                ],
                3
              ),
            },
            {
              t: "01:46",
              qEn: "What happens when the hand is only raised a little, and why?",
              qSw: "Nini hutokea mkono unapoinuliwa kidogo tu, na kwa nini?",
              ...opt(
                "The bars wriggle because the model is not sure whether it is the green class or the purple class.",
                [
                  "The model becomes certain and should be trusted as a fact.",
                  "The bars freeze because uncertainty is impossible.",
                  "The tool sends the pose to a public server and announces a diagnosis.",
                ],
                "Mistari inatetemeka kwa sababu modeli haina uhakika kama ni kundi la kijani au la zambarau.",
                [
                  "Modeli inakuwa na uhakika na inapaswa kuaminiwa kama ukweli.",
                  "Mistari inaganda kwa sababu kutokuwa na uhakika haiwezekani.",
                  "Zana hutuma mkao kwa seva ya umma na kutangaza utambuzi.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "A good project is small, consented, and honest about the risk.",
          "You do not need a perfect model. You need a clear problem and a person who remains responsible.",
        ],
        notesSw: [
          "Mradi mzuri ni mdogo, una ridhaa, na ni wa uaminifu kuhusu hatari.",
          "Huhitaji modeli kamili. Unahitaji tatizo lililo wazi na mtu anayebaki na dhamana.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "What must every beginner project name?",
        qSw: "Kila mradi wa mwanzoni lazima utaje nini?",
        ...opt(
          "One way AI helps and one risk, plus how that risk is managed.",
          [
            "Only the gadget you want to buy.",
            "A promise that the model will be perfect.",
            "The national ID numbers of everyone you recorded.",
          ],
          "Njia moja AI inasaidia na hatari moja, pamoja na jinsi hatari hiyo inadhibitiwa.",
          [
            "Kifaa unachotaka kununua pekee.",
            "Ahadi kwamba modeli itakuwa kamili.",
            "Nambari za vitambulisho vya kila mtu uliyemrekodi.",
          ],
          0
        ),
        answerEn: "One way AI helps and one risk, plus how that risk is managed.",
        answerSw: "Njia moja AI inasaidia na hatari moja, pamoja na jinsi hatari hiyo inadhibitiwa.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "In Teachable Machine Tutorial 1, what do you gather before you train?",
        qSw: "Katika Teachable Machine Tutorial 1, unakusanya nini kabla ya kufunza?",
        ...opt(
          "Data, organised into classes (categories to recognise).",
          [
            "Other people's faces, without asking.",
            "A finished model from a stranger.",
            "Only a slogan.",
          ],
          "Data, iliyopangwa katika makundi (makundi ya kutambua).",
          [
            "Nyuso za watu wengine, bila kuomba.",
            "Modeli iliyokamilika kutoka kwa mgeni.",
            "Kauli mbiu pekee.",
          ],
          2
        ),
        answerEn: "Data, organised into classes (categories to recognise).",
        answerSw: "Data, iliyopangwa katika makundi (makundi ya kutambua).",
        restudy: {
          unit: "specific",
          videoTitle: "Teachable Machine Tutorial 1: Gather",
          times: ["00:07"],
        },
      },
      {
        qEn: "The tutorial says captured samples are sent straight to a company server. True or false?",
        qSw: "Mafunzo yanasema sampuli zilizonaswa hutumwa moja kwa moja kwa seva ya kampuni. Kweli au si kweli?",
        ...opt(
          "False. The speaker says the data stays on the device and is not sent to a server.",
          [
            "True. Every sample is uploaded as you record.",
            "True, unless you close your eyes.",
            "False, because the tool cannot capture anything.",
          ],
          "Si kweli. Mzungumzaji anasema data inakaa kwenye kifaa na haitumwi kwa seva.",
          [
            "Kweli. Kila sampuli hupakiwa unaporekodi.",
            "Kweli, isipokuwa ukifunga macho.",
            "Si kweli, kwa sababu zana haiwezi kunasa chochote.",
          ],
          1
        ),
        answerEn: "False. The speaker says the data stays on the device and is not sent to a server.",
        answerSw: "Si kweli. Mzungumzaji anasema data inakaa kwenye kifaa na haitumwi kwa seva.",
        restudy: {
          unit: "specific",
          videoTitle: "Teachable Machine Tutorial 1: Gather",
          times: ["02:02"],
        },
      },
      {
        qEn: "From A.I. Experiments: Teachable Machine, why must you teach a second class?",
        qSw: "Kutoka A.I. Experiments: Teachable Machine, kwa nini lazima ufundishe kundi la pili?",
        ...opt(
          "With only one class, every input looks most similar to that class, so the model cannot tell differences.",
          [
            "A second class makes the first class illegal.",
            "One class is already enough to separate every pose.",
            "The second class is only for decoration.",
          ],
          "Kukiwa na kundi moja, kila ingizo linafanana zaidi na kundi hilo, kwa hiyo modeli haiwezi kutofautisha.",
          [
            "Kundi la pili hufanya kundi la kwanza kuwa kinyume cha sheria.",
            "Kundi moja tayari linatosha kutenganisha kila mkao.",
            "Kundi la pili ni mapambo tu.",
          ],
          0
        ),
        answerEn: "With only one class, every input looks most similar to that class, so the model cannot tell differences.",
        answerSw: "Kukiwa na kundi moja, kila ingizo linafanana zaidi na kundi hilo, kwa hiyo modeli haiwezi kutofautisha.",
        restudy: {
          unit: "application",
          videoTitle: "A.I. Experiments: Teachable Machine",
          times: ["01:09"],
        },
      },
      {
        qEn: "Your idea needs a smartphone and English. Who might be left out?",
        qSw: "Wazo lako linahitaji simu janja na Kiingereza. Nani anaweza kuachwa nje?",
        ...opt(
          "People without a smartphone, without data bundles, or who are more comfortable in Kiswahili or another language. Name them on the project card.",
          [
            "Nobody. A smartphone project includes everyone.",
            "Only people who already own the newest phone.",
            "Only the person who built the demo.",
          ],
          "Watu wasio na simu janja, wasio na vifurushi vya data, au walio rahisi zaidi kwa Kiswahili au lugha nyingine. Wataje kwenye kadi ya mradi.",
          [
            "Hakuna. Mradi wa simu janja unawajumuisha wote.",
            "Watu walio na simu mpya zaidi pekee.",
            "Mtu aliyejenga onyesho pekee.",
          ],
          3
        ),
        answerEn:
          "People without a smartphone, without data bundles, or who are more comfortable in Kiswahili or another language. Name them on the project card.",
        answerSw:
          "Watu wasio na simu janja, wasio na vifurushi vya data, au walio rahisi zaidi kwa Kiswahili au lugha nyingine. Wataje kwenye kadi ya mradi.",
        restudy: { unit: "basics" },
      },
    ],
  },
];
