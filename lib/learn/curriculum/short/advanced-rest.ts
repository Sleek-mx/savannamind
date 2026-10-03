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

export const advancedRest: ModuleSpec[] = [
  {
    titleEn: "Language tools, retrieval, and local languages",
    titleSw: "Zana za lugha, urejeshaji, na lugha za nyumbani",
    descEn: "Attention gives context. Retrieval gives a source. Temperature is a dial, not a fact-checker.",
    descSw: "Attention hutoa muktadha. Urejeshaji hutoa chanzo. Temperature ni kipimo, si mkaguzi wa ukweli.",
    units: [
      {
        notesEn: [
          "GPT means Generative Pre-trained Transformer. A transformer is a neural network that turns tokens into vectors and lets those vectors update each other.",
          "Attention decides which other tokens should change a word's vector. 'Model' in 'machine learning model' is not 'fashion model'.",
          "Temperature zero always picks the most probable next token. Higher temperature can be more varied, and more nonsense.",
          "An application is more than a prompt. A serious build chunks documents, embeds them, retrieves, then generates. Log the cost per thousand requests in shillings.",
        ],
        notesSw: [
          "GPT inamaanisha Generative Pre-trained Transformer. Transformer ni mtandao wa neva unaogeuza tokeni kuwa vekta na kuruhusu vekta hizo zisasishane.",
          "Attention huamua tokeni gani nyingine zibadilishe vekta ya neno. 'Modeli' katika 'modeli ya ujifunzaji wa mashine' si 'modeli wa mavazi'.",
          "Temperature sifuri daima huchagua tokeni inayofuata inayowezekana zaidi. Temperature ya juu inaweza kuwa na utofauti zaidi, na upuuzi zaidi.",
          "Programu ni zaidi ya maagizo. Jengo zito hugawanya hati, huzipachika, hurejesha, kisha huzalisha. Andika gharama kwa maombi elfu moja kwa shilingi.",
        ],
      },
      {
        notesEn: [
          "Tokens are the pieces the model reads. A language with fewer training texts, or a different script pattern, can take more tokens to say the same thing. Budget Kiswahili and local languages on purpose.",
          "Fine-tuning changes weights with your examples. RAG leaves the weights and adds documents. Often try RAG first. LoRA is a lighter way to adapt a model when you do fine-tune.",
          "Masakhane is a real African NLP research community. Cite it as a community, not as a dataset you pretend to have downloaded.",
        ],
        notesSw: [
          "Tokeni ni vipande modeli inavyosoma. Lugha yenye maandishi machache ya mafunzo, au muundo tofauti wa hati, inaweza kutumia tokeni zaidi kusema kitu kile kile. Weka bajeti ya Kiswahili na lugha za nyumbani kwa makusudi.",
          "Fine-tuning hubadilisha uzito kwa mifano yako. RAG huacha uzito na kuongeza hati. Mara nyingi jaribu RAG kwanza. LoRA ni njia nyepesi ya kuibadilisha modeli unapofanya fine-tune.",
          "Masakhane ni jumuiya halisi ya utafiti wa NLP ya Afrika. Itaje kama jumuiya, si kama seti unayojifanya umepakua.",
        ],
        video: {
          id: "wjZofJX0v4M",
          titleEn: "Transformers, the tech behind LLMs",
          titleSw: "Transformers, teknolojia nyuma ya LLM",
          channel: "3Blue1Brown",
          checks: [
            {
              t: "00:00",
              qEn: "What do the initials GPT stand for?",
              qSw: "Herufi GPT zinawakilisha nini?",
              ...opt(
                "Generative Pretrained Transformer.",
                [
                  "General Purpose Toolkit.",
                  "Government Prompt Template.",
                  "Grouped Probability Table.",
                ],
                "Generative Pretrained Transformer.",
                ["General Purpose Toolkit.", "Government Prompt Template.", "Grouped Probability Table."],
                0
              ),
            },
            {
              t: "04:12",
              qEn: "What is the attention block responsible for?",
              qSw: "Kizuizi cha attention kinawajibika kwa nini?",
              ...opt(
                "Figuring out which words in the context are relevant to updating the meanings of which other words, and how those meanings should be updated.",
                [
                  "Always picking a random next word.",
                  "Storing the county bylaw on its own.",
                  "Setting temperature to zero.",
                ],
                "Kubaini maneno gani katika muktadha yanahusiana na kusasisha maana za maneno mengine, na maana hizo zisasishwe vipi.",
                [
                  "Kuchagua neno la nasibu kila wakati.",
                  "Kuhifadhi sheria ndogo ya kaunti peke yake.",
                  "Kuweka temperature kuwa sifuri.",
                ],
                1
              ),
            },
            {
              t: "24:43",
              qEn: "What does temperature zero mean for the next word?",
              qSw: "Temperature sifuri inamaanisha nini kwa neno linalofuata?",
              ...opt(
                "The model always goes with the most predictable word.",
                [
                  "The model refuses every answer.",
                  "The model invents a source.",
                  "The model always picks the least likely word.",
                ],
                "Modeli daima huchagua neno linalotabirika zaidi.",
                [
                  "Modeli hukataa kila jibu.",
                  "Modeli hubuni chanzo.",
                  "Modeli daima huchagua neno lisilowezekana zaidi.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Build sketch for a KRA-style or extension FAQ, not a medical diagnosis bot: chunk the official pages, embed them, store vectors, retrieve similar chunks, add them to the prompt, generate, cite.",
          "Tell the model to answer only from those chunks. If retrieval is weak, the honest output is 'not in the documents'.",
          "Evaluate in the languages people will type, including Kiswahili. An English-only test set hides the failure.",
        ],
        notesSw: [
          "Mchoro wa FAQ ya mtindo wa KRA au ugani, si boti ya utambuzi wa kitabibu: gawanya kurasa rasmi, zipachike, hifadhi vekta, rejesha vipande vinavyofanana, viongeze kwenye maagizo, zalisha, dondoa.",
          "Iambie modeli ijibu kutoka vipande hivyo pekee. Urejeshaji ukiwa dhaifu, matokeo ya uaminifu ni 'haiko kwenye hati'.",
          "Tathmini katika lugha watu wataandika, ikiwa ni pamoja na Kiswahili. Seti ya majaribio ya Kiingereza pekee huficha kushindwa.",
        ],
        video: {
          id: "oVtlp72f9NQ",
          titleEn: "How to use Retrieval Augmented Generation (RAG)",
          titleSw: "Jinsi ya kutumia RAG",
          channel: "Google Cloud Tech",
          checks: [
            {
              t: "01:31",
              qEn: "What pre-processing step does the video say a RAG app needs?",
              qSw: "Video inasema programu ya RAG inahitaji hatua gani ya maandalizi?",
              ...opt(
                "Create embeddings for the data you will use to ground responses.",
                [
                  "Fine-tune every weight before you have documents.",
                  "Skip the store and answer from memory.",
                  "Translate nothing and test in English only.",
                ],
                "Unda embeddings za data utakayotumia kuweka msingi wa majibu.",
                [
                  "Fine-tune kila uzito kabla ya kuwa na hati.",
                  "Ruka hifadhi na ujibu kutoka kumbukumbu.",
                  "Usitafsiri chochote na ujaribu kwa Kiingereza pekee.",
                ],
                0
              ),
            },
            {
              t: "01:56",
              qEn: "Where should those chunks and embeddings be stored, in their chatbot example?",
              qSw: "Vipande na embeddings hivyo vihifadhiwe wapi, katika mfano wao wa chatbot?",
              ...opt(
                "In a vector database.",
                ["In a public social feed.", "Only inside the prompt with no store.", "On a paper poster."],
                "Katika hifadhidata ya vekta.",
                ["Katika mlisho wa umma.", "Ndani ya maagizo pekee bila hifadhi.", "Kwenye bango la karatasi."],
                3
              ),
            },
            {
              t: "02:39",
              qEn: "What do you add to the user's prompt after retrieval, and what does the video call that step?",
              qSw: "Unaongeza nini kwenye maagizo ya mtumiaji baada ya urejeshaji, na video inaita hatua hiyo nini?",
              ...opt(
                "The related information. Adding it augments the prompt. That is the A in RAG. They also add an instruction such as basing the answer on the documents.",
                [
                  "A new set of random weights. They call it fine-tuning.",
                  "Nothing. The A stands for accuracy.",
                  "The user's national ID, so the store can personalise.",
                ],
                "Habari inayohusiana. Kuiongeza huongeza maagizo. Hiyo ndiyo A katika RAG. Pia huongeza agizo kama kuweka jibu juu ya hati.",
                [
                  "Seti mpya ya uzito wa nasibu. Wanaiita fine-tuning.",
                  "Hakuna. A inawakilisha usahihi.",
                  "Kitambulisho cha taifa cha mtumiaji, ili hifadhi ibinafsishe.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Attention gives context. Retrieval gives a source. Temperature is a dial, not a fact-checker.",
          "For Kiswahili and local languages, test on purpose. Do not fine-tune on data you had no right to collect.",
        ],
        notesSw: [
          "Attention hutoa muktadha. Urejeshaji hutoa chanzo. Temperature ni kipimo, si mkaguzi wa ukweli.",
          "Kwa Kiswahili na lugha za nyumbani, jaribu kwa makusudi. Usifanye fine-tune kwa data hukukuwa na haki ya kukusanya.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "What does GPT stand for, from the transformer video?",
        qSw: "GPT inawakilisha nini, kutoka video ya transformer?",
        ...opt(
          "Generative Pretrained Transformer.",
          ["General Public Transcript.", "Grouped Prompt Tokens.", "Guided Probability Test."],
          "Generative Pretrained Transformer.",
          ["General Public Transcript.", "Grouped Prompt Tokens.", "Guided Probability Test."],
          0
        ),
        answerEn: "Generative Pretrained Transformer.",
        answerSw: "Generative Pretrained Transformer.",
        restudy: { unit: "specific", videoTitle: "Transformers, the tech behind LLMs", times: ["00:00"] },
      },
      {
        qEn: "What does attention do to word meanings?",
        qSw: "Attention inafanya nini kwa maana za maneno?",
        ...opt(
          "It uses context to decide which words should update which other meanings.",
          [
            "It always picks the least likely next word.",
            "It stores the bylaw without retrieval.",
            "It sets the cost in shillings.",
          ],
          "Inatumia muktadha kuamua maneno gani yasasishe maana gani nyingine.",
          [
            "Daima huchagua neno lisilowezekana zaidi.",
            "Huhifadhi sheria ndogo bila urejeshaji.",
            "Huweka gharama kwa shilingi.",
          ],
          2
        ),
        answerEn: "It uses context to decide which words should update which other meanings.",
        answerSw: "Inatumia muktadha kuamua maneno gani yasasishe maana gani nyingine.",
        restudy: { unit: "specific", videoTitle: "Transformers, the tech behind LLMs", times: ["04:12"] },
      },
      {
        qEn: "What is temperature zero?",
        qSw: "Temperature sifuri ni nini?",
        ...opt(
          "Always choosing the most predictable next word.",
          [
            "Always choosing the least likely word.",
            "Refusing to answer.",
            "Retraining the weights.",
          ],
          "Kuchagua daima neno linalofuata linalotabirika zaidi.",
          [
            "Kuchagua daima neno lisilowezekana zaidi.",
            "Kukataa kujibu.",
            "Kufunza upya uzito.",
          ],
          1
        ),
        answerEn: "Always choosing the most predictable next word.",
        answerSw: "Kuchagua daima neno linalofuata linalotabirika zaidi.",
        restudy: { unit: "specific", videoTitle: "Transformers, the tech behind LLMs", times: ["24:43"] },
      },
      {
        qEn: "From the Google Cloud RAG video, what is the A in RAG?",
        qSw: "Kutoka video ya RAG ya Google Cloud, A katika RAG ni nini?",
        ...opt(
          "Augmenting the original prompt with the related information you retrieved.",
          [
            "Accuracy, measured only in English.",
            "A full retrain of every weight.",
            "Asking the model to ignore the documents.",
          ],
          "Kuongeza maagizo asilia kwa habari inayohusiana uliyorejesha.",
          [
            "Usahihi, ukipimwa kwa Kiingereza pekee.",
            "Mafunzo kamili upya ya kila uzito.",
            "Kuomba modeli ipuuze hati.",
          ],
          0
        ),
        answerEn: "Augmenting the original prompt with the related information you retrieved.",
        answerSw: "Kuongeza maagizo asilia kwa habari inayohusiana uliyorejesha.",
        restudy: {
          unit: "application",
          videoTitle: "How to use Retrieval Augmented Generation (RAG)",
          times: ["02:39"],
        },
      },
      {
        qEn: "You need answers from a county bylaw that changes. RAG or a full retrain first?",
        qSw: "Unahitaji majibu kutoka sheria ndogo ya kaunti inayobadilika. RAG au mafunzo kamili upya kwanza?",
        ...opt(
          "Update the document store and retrieve (RAG) first. Retrain only if you have a lawful, sufficient set and a reason RAG cannot carry.",
          [
            "Full retrain first, even with no right to the data.",
            "Neither. Temperature zero is enough.",
            "Fine-tune on English only and skip Kiswahili.",
          ],
          "Sasisha hifadhi ya hati na urejeshe (RAG) kwanza. Funza upya tu ukiwa na seti ya kisheria na ya kutosha na sababu RAG haiwezi kubeba.",
          [
            "Mafunzo kamili upya kwanza, hata bila haki ya data.",
            "Wala si moja. Temperature sifuri inatosha.",
            "Fine-tune kwa Kiingereza pekee na uruke Kiswahili.",
          ],
          3
        ),
        answerEn: "Update the document store and retrieve (RAG) first. Retrain only if you have a lawful, sufficient set and a reason RAG cannot carry.",
        answerSw: "Sasisha hifadhi ya hati na urejeshe (RAG) kwanza. Funza upya tu ukiwa na seti ya kisheria na ya kutosha na sababu RAG haiwezi kubeba.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "Evaluate, deploy, and govern",
    titleSw: "Tathmini, weka kazini, na tawala",
    descEn: "Slice the score, attack your own prompt, and name the Kenyan duty the videos do not teach.",
    descSw: "Gawanya alama, shambulia maagizo yako, na taja wajibu wa Kenya ambao video hazifundishi.",
    units: [
      {
        notesEn: [
          "Slice the score. An average can hide failure for a county, a gender, a language, or a phone that is often offline.",
          "Red-team the prompt: try to make the tool ignore its rules or leak data. Log what got through.",
          "Kenyan deploy constraints: cost in shillings, data bundles, power cuts, low-end Android, and a path that still works by SMS, USSD, or WhatsApp when the internet drops.",
          "Law to name in a brief: Data Protection Act, 2019; ODPC registration where it applies; a data protection impact assessment for high-risk processing; alignment with the Kenya National AI Strategy 2025-2030. This video set does not teach that law. These notes do.",
        ],
        notesSw: [
          "Gawanya alama. Wastani unaweza kuficha kushindwa kwa kaunti, jinsia, lugha, au simu iliyo nje ya mtandao mara nyingi.",
          "Jaribu maagizo kwa ukali: jaribu kuifanya zana ipuuze kanuni zake au ivuje data. Andika kilichopita.",
          "Vikwazo vya kuweka kazini Kenya: gharama kwa shilingi, vifurushi, kukatika kwa umeme, Android ya bei nafuu, na njia inayofanya kazi kwa SMS, USSD, au WhatsApp mtandao ukishuka.",
          "Sheria ya kutaja katika muhtasari: Sheria ya Ulinzi wa Data, 2019; usajili wa ODPC inapohitajika; tathmini ya athari ya ulinzi wa data kwa uchakataji wa hatari kubwa; ulinganifu na Mkakati wa Kitaifa wa AI wa Kenya 2025-2030. Seti hii ya video haifundishi sheria hiyo. Maelezo haya ndiyo yanafanya.",
        ],
      },
      {
        notesEn: [
          "Bias in the world can be copied and exaggerated by a model. Leaving out a group is a data failure, not a neutral default.",
          "A famous failure mode: face tools trained on many more white faces, then failing on other people. Do not copy that pattern with Kenyan faces, languages, or farms.",
          "More representative data can be part of the fix, including data about groups you must not discriminate against. Collect it lawfully. Transparency means you can explain inputs and outputs, which is hard for deep models. A human still reviews high-stakes decisions.",
        ],
        notesSw: [
          "Upendeleo ulimwenguni unaweza kunakiliwa na kuzidishwa na modeli. Kuacha kundi nje ni kushindwa kwa data, si chaguo-msingi lisilo na upande.",
          "Namna maarufu ya kushindwa: zana za uso zilizofunzwa kwa nyuso nyingi zaidi za wazungu, kisha kushindwa kwa watu wengine. Usinakili mtindo huo kwa nyuso, lugha, au mashamba ya Kenya.",
          "Data yenye uwakilishi zaidi inaweza kuwa sehemu ya suluhisho, ikiwa ni pamoja na data kuhusu makundi usiyopaswa kubagua. Ikusanye kisheria. Uwazi unamaanisha unaweza kueleza ingizo na matokeo, jambo gumu kwa modeli za kina. Binadamu bado hukagua maamuzi ya hatari kubwa.",
        ],
        video: {
          id: "gV0_raKR2UQ",
          titleEn: "Algorithmic Bias and Fairness: Crash Course AI #18",
          titleSw: "Upendeleo na usawa wa algoriti: Crash Course AI #18",
          channel: "CrashCourse",
          checks: [
            {
              t: "00:08",
              qEn: "What can AI systems do with biases that already exist?",
              qSw: "Mifumo ya AI inaweza kufanya nini na upendeleo uliopo tayari?",
              ...opt(
                "Mimic them or even exaggerate them.",
                [
                  "Erase them automatically.",
                  "Ignore them because an average looks fine.",
                  "Turn them into a neutral default.",
                ],
                "Kuziiga au hata kuzizidisha.",
                [
                  "Kuzifuta kiotomatiki.",
                  "Kuzipuuza kwa sababu wastani unaonekana mzuri.",
                  "Kuzigeuza kuwa chaguo-msingi lisilo na upande.",
                ],
                0
              ),
            },
            {
              t: "02:38",
              qEn: "What training imbalance does the video describe in many facial-recognition systems?",
              qSw: "Video inaeleza kukosekana kwa usawa gani wa mafunzo katika mifumo mingi ya utambuzi wa uso?",
              ...opt(
                "Training data with way more examples of white people's faces than other races. One example: a passport photo checker that had trouble with photos of people of Asian descent.",
                [
                  "Equal photos of every group, and no failures.",
                  "Only Kenyan languages, which the video covers in full.",
                  "More data about protected classes collected without any lawful basis, presented as the fix.",
                ],
                "Data ya mafunzo yenye mifano mingi zaidi ya nyuso za wazungu kuliko jamii nyingine. Mfano mmoja: kikaguzi cha picha ya pasipoti kilichokuwa na shida na picha za watu wa asili ya Asia.",
                [
                  "Picha sawa za kila kundi, na hakuna kushindwa.",
                  "Lugha za Kenya pekee, ambazo video inazifundisha kikamilifu.",
                  "Data zaidi kuhusu makundi yaliyolindwa iliyokusanywa bila msingi wa kisheria, ikiwasilishwa kama suluhisho.",
                ],
                1
              ),
            },
            {
              t: "09:23",
              qEn: "What is the video's second suggestion if we want less biased algorithms?",
              qSw: "Pendekezo la pili la video ni nini tukitaka algoriti zenye upendeleo mdogo?",
              ...opt(
                "We may need more training data on protected classes such as race, gender, or age. It also says to be critical of recommendations rather than accepting 'the computer said so'.",
                [
                  "Delete every record about groups you might miss.",
                  "Accept the computer because the average is fine.",
                  "Train only on the group that is already easiest.",
                ],
                "Tunaweza kuhitaji data zaidi ya mafunzo kuhusu makundi yaliyolindwa kama rangi, jinsia, au umri. Pia inasema uwe mkosoaji wa mapendekezo badala ya kukubali 'kompyuta ilisema hivyo'.",
                [
                  "Futa kila kumbukumbu kuhusu makundi unayoweza kukosa.",
                  "Kubali kompyuta kwa sababu wastani ni mzuri.",
                  "Funza kundi lililo rahisi tayari pekee.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Dirty or thin training data is one cause of nonsense or misleading text. A prompt constrains the output. It does not wash bad data.",
          "A production path needs three tools in spirit, whatever the product is called: train, deploy, monitor. Monitor for drift after a shock such as a fuel-price jump.",
          "Incident card: what broke, who was affected, what you turned off, what you told users.",
          "The video names Google products. Treat those names as examples of the three jobs, not as the required stack.",
        ],
        notesSw: [
          "Data chafu au nyembamba ya mafunzo ni sababu moja ya maandishi ya upuuzi au ya kupotosha. Maagizo huzuia matokeo. Hayasafishi data mbaya.",
          "Njia ya uzalishaji inahitaji zana tatu kwa roho, chochote bidhaa inavyoitwa: funza, weka kazini, fuatilia. Fuatilia mkengeuko baada ya mshtuko kama kuruka kwa bei ya mafuta.",
          "Kadi ya tukio: kilichovunjika, nani aliathirika, ulizima nini, uliwaambia watumiaji nini.",
          "Video inataja bidhaa za Google. Chukulia majina hayo kuwa mifano ya kazi tatu, si rundo linalotakiwa.",
        ],
        video: {
          id: "G2fqAlgmoPo",
          titleEn: "Introduction to Generative AI",
          titleSw: "Utangulizi wa AI zalishi",
          channel: "Google Cloud Tech",
          checks: [
            {
              t: "14:21",
              qEn: "Name one cause of hallucinations given in the video.",
              qSw: "Taja sababu moja ya kubuni majibu iliyotolewa katika video.",
              ...opt(
                "The model is trained on noisy or dirty data. Other causes stated: not enough data, not enough context, or not enough constraints.",
                [
                  "Temperature zero, which forces nonsense.",
                  "A sliced score that is reported in full.",
                  "An incident card that names who was affected.",
                ],
                "Modeli inafunzwa kwa data yenye kelele au chafu. Sababu nyingine zilizotajwa: data haitoshi, muktadha hautoshi, au vikwazo havitoshi.",
                [
                  "Temperature sifuri, inayolazimisha upuuzi.",
                  "Alama iliyogawanywa inayoripotiwa kamili.",
                  "Kadi ya tukio inayotaja nani aliathirika.",
                ],
                0
              ),
            },
            {
              t: "14:59",
              qEn: "What is prompt design?",
              qSw: "Ubunifu wa maagizo ni nini?",
              ...opt(
                "The process of creating a prompt that will generate the desired output from a large language model.",
                [
                  "Washing dirty training data so the model cannot hallucinate.",
                  "Registering with the ODPC.",
                  "The monitoring tool after a fuel-price shock.",
                ],
                "Mchakato wa kuunda maagizo yatakayozalisha matokeo unayotaka kutoka modeli kubwa ya lugha.",
                [
                  "Kusafisha data chafu ya mafunzo ili modeli isiweze kubuni.",
                  "Kusajili kwa ODPC.",
                  "Zana ya ufuatiliaji baada ya mshtuko wa bei ya mafuta.",
                ],
                3
              ),
            },
            {
              t: "21:25",
              qEn: "Which three tools does the video say the suite includes?",
              qSw: "Video inasema seti inajumuisha zana gani tatu?",
              ...opt(
                "A model training tool, a model deployment tool, and a model monitoring tool.",
                [
                  "A PIN vault, a till, and a poster.",
                  "Only a chatbot with no monitor.",
                  "A law lecture, a court, and a fine.",
                ],
                "Zana ya kufunza modeli, zana ya kuweka modeli kazini, na zana ya kuifuata modeli.",
                [
                  "Hifadhi ya PIN, till, na bango.",
                  "Chatbot pekee bila ufuatiliaji.",
                  "Somo la sheria, mahakama, na faini.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Audit by slice, attack your own prompt, deploy for the network you really have, and name the Kenyan duty.",
          "A model card: purpose, data, limits, languages, who to call when it fails.",
        ],
        notesSw: [
          "Kagua kwa kipande, shambulia maagizo yako, weka kazini kwa mtandao ulio nao kweli, na taja wajibu wa Kenya.",
          "Kadi ya modeli: madhumuni, data, vikomo, lugha, nani wa kumpiga inaposhindwa.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "An overall accuracy looks fine, but rural Kiswahili queries fail. What did the average hide?",
        qSw: "Usahihi wa jumla unaonekana mzuri, lakini maswali ya Kiswahili ya vijijini yanashindwa. Wastani ulificha nini?",
        ...opt(
          "A slice failure. Report the slice, do not only report the average.",
          [
            "Nothing. An average is the audit.",
            "A successful deploy with no language gap.",
            "That Kiswahili queries are out of scope.",
          ],
          "Kushindwa kwa kipande. Ripoti kipande, usiripoti wastani pekee.",
          [
            "Hakuna. Wastani ndiyo ukaguzi.",
            "Uwekaji kazini uliofanikiwa bila pengo la lugha.",
            "Kwamba maswali ya Kiswahili yako nje ya wigo.",
          ],
          0
        ),
        answerEn: "A slice failure. Report the slice, do not only report the average.",
        answerSw: "Kushindwa kwa kipande. Ripoti kipande, usiripoti wastani pekee.",
        restudy: { unit: "basics", extra: "notes on sliced scores (no video on this unit)" },
      },
      {
        qEn: "From Crash Course AI #18, what can a model do with existing bias?",
        qSw: "Kutoka Crash Course AI #18, modeli inaweza kufanya nini na upendeleo uliopo?",
        ...opt(
          "Mimic it or exaggerate it.",
          ["Erase it by averaging.", "Ignore it because the computer said so.", "Turn it into Kenyan law."],
          "Kuiiga au kuizidisha.",
          ["Kuifuta kwa wastani.", "Kuipuuza kwa sababu kompyuta ilisema hivyo.", "Kuigeuza kuwa sheria ya Kenya."],
          1
        ),
        answerEn: "Mimic it or exaggerate it.",
        answerSw: "Kuiiga au kuizidisha.",
        restudy: { unit: "specific", videoTitle: "Algorithmic Bias and Fairness: Crash Course AI #18", times: ["00:08"] },
      },
      {
        qEn: "What went wrong in the video's facial-recognition example?",
        qSw: "Nini kilikwenda vibaya katika mfano wa utambuzi wa uso wa video?",
        ...opt(
          "Training sets with far more white faces, so tools failed on other people, including a passport checker that struggled with photos of people of Asian descent.",
          [
            "The tools had equal data and still failed only on white faces.",
            "The video was teaching the Data Protection Act.",
            "The checker failed because the photos were too recent.",
          ],
          "Seti za mafunzo zenye nyuso nyingi zaidi za wazungu, kwa hiyo zana zilishindwa kwa watu wengine, ikiwa ni pamoja na kikaguzi cha pasipoti kilichotatizika na picha za watu wa asili ya Asia.",
          [
            "Zana zilikuwa na data sawa na kushindwa kwa nyuso za wazungu pekee.",
            "Video ilikuwa inafundisha Sheria ya Ulinzi wa Data.",
            "Kikaguzi kilishindwa kwa sababu picha zilikuwa za hivi karibuni.",
          ],
          2
        ),
        answerEn: "Training sets with far more white faces, so tools failed on other people, including a passport checker that struggled with photos of people of Asian descent.",
        answerSw: "Seti za mafunzo zenye nyuso nyingi zaidi za wazungu, kwa hiyo zana zilishindwa kwa watu wengine, ikiwa ni pamoja na kikaguzi cha pasipoti kilichotatizika na picha za watu wa asili ya Asia.",
        restudy: { unit: "specific", videoTitle: "Algorithmic Bias and Fairness: Crash Course AI #18", times: ["02:38"] },
      },
      {
        qEn: "From Introduction to Generative AI, how can dirty data show up in generated text?",
        qSw: "Kutoka Introduction to Generative AI, data chafu inawezaje kuonekana katika maandishi yaliyozalishwa?",
        ...opt(
          "As hallucinations: output that is nonsensical or misleading. Noisy or dirty training data is one stated cause.",
          [
            "It cannot. A prompt washes the data.",
            "Only as a higher accuracy average.",
            "As a model card that lists the limits.",
          ],
          "Kama kubuni majibu: matokeo yasiyo na maana au yanayopotosha. Data ya mafunzo yenye kelele au chafu ni sababu moja iliyotajwa.",
          [
            "Haiwezi. Maagizo husafisha data.",
            "Kama wastani wa juu wa usahihi pekee.",
            "Kama kadi ya modeli inayoorodhesha vikomo.",
          ],
          0
        ),
        answerEn: "As hallucinations: output that is nonsensical or misleading. Noisy or dirty training data is one stated cause.",
        answerSw: "Kama kubuni majibu: matokeo yasiyo na maana au yanayopotosha. Data ya mafunzo yenye kelele au chafu ni sababu moja iliyotajwa.",
        restudy: { unit: "application", videoTitle: "Introduction to Generative AI", times: ["14:21"] },
      },
      {
        qEn: "Name two Kenyan constraints the notes require on a deploy plan.",
        qSw: "Taja vikwazo viwili vya Kenya ambavyo maelezo yanahitaji kwenye mpango wa kuweka kazini.",
        ...opt(
          "Any two: cost in shillings, bundles, power cuts, low-end phones, offline or SMS/USSD/WhatsApp fallback, Data Protection Act duties, ODPC, a DPIA where risk is high.",
          [
            "Only the vendor logo and the average accuracy.",
            "A longer video, and nothing about law or cost.",
            "English-only testing and a promise the internet never drops.",
          ],
          "Vyovyote viwili: gharama kwa shilingi, vifurushi, kukatika kwa umeme, simu za bei nafuu, mbadala wa nje ya mtandao au SMS/USSD/WhatsApp, wajibu wa Sheria ya Ulinzi wa Data, ODPC, DPIA hatari ikiwa kubwa.",
          [
            "Nembo ya muuzaji na usahihi wa wastani pekee.",
            "Video ndefu, na hakuna kuhusu sheria au gharama.",
            "Majaribio ya Kiingereza pekee na ahadi mtandao haushuki.",
          ],
          3
        ),
        answerEn: "Any two: cost in shillings, bundles, power cuts, low-end phones, offline or SMS/USSD/WhatsApp fallback, Data Protection Act duties, ODPC, a DPIA where risk is high.",
        answerSw: "Vyovyote viwili: gharama kwa shilingi, vifurushi, kukatika kwa umeme, simu za bei nafuu, mbadala wa nje ya mtandao au SMS/USSD/WhatsApp, wajibu wa Sheria ya Ulinzi wa Data, ODPC, DPIA hatari ikiwa kubwa.",
        restudy: { unit: "basics", extra: "notes on Kenyan deploy limits and the Data Protection Act (the videos do not teach Kenyan law)" },
      },
    ],
  },
  {
    titleEn: "Sector builds: farm, health, school, business",
    titleSw: "Majengo ya sekta: shamba, afya, shule, biashara",
    descEn: "The sector changes the harm and the law. It does not change the duty to test on people you did not train on.",
    descSw: "Sekta hubadilisha madhara na sheria. Haibadilishi wajibu wa kujaribu kwa watu hukufunza nao.",
    units: [
      {
        notesEn: [
          "Farm: validate on fields you did not train on. Satellite series break under cloud. Women farmers and marginal counties are often missing from the data. Say so. A data co-op shares benefits, not only files.",
          "Health: calibrate a risk model. External validation means a new site, not the same ward twice. Follow reporting norms (TRIPOD-AI, CONSORT-AI) when a study is real research. A hallucinated finding in a note is a safety incident.",
          "School: retrieval over approved materials, with a licence to use them, and age-appropriate limits. An essay score model needs a fairness check. The teacher remains the assessor.",
          "Business: a demand model and a customer grouping are decision support. A credit decline needs a reason a person can challenge. Prompt injection and fake-boss payments are security issues under the Computer Misuse and Cybercrimes Act.",
        ],
        notesSw: [
          "Shamba: thibitisha kwa mashamba hukufunza. Mfululizo wa setilaiti huvunjika chini ya mawingu. Wanawake wakulima na kaunti za pembezoni mara nyingi wanakosekana kwenye data. Sema hivyo. Ushirika wa data hushiriki faida, si faili pekee.",
          "Afya: rekebisha modeli ya hatari. Uthibitisho wa nje unamaanisha eneo jipya, si wadi ile ile mara mbili. Fuata kanuni za kuripoti (TRIPOD-AI, CONSORT-AI) utafiti ukiwa halisi. Ugunduzi uliobuniwa katika dokezo ni tukio la usalama.",
          "Shule: urejeshaji juu ya nyenzo zilizoidhinishwa, kwa leseni ya kuzitumia, na mipaka inayofaa umri. Modeli ya alama ya insha inahitaji ukaguzi wa usawa. Mwalimu anabaki mkaguzi.",
          "Biashara: modeli ya mahitaji na ukundi wa wateja ni msaada wa uamuzi. Kukataliwa mkopo kunahitaji sababu mtu anayeweza kuipinga. Prompt injection na malipo ya bosi bandia ni masuala ya usalama chini ya Sheria ya Matumizi Mabaya ya Kompyuta na Uhalifu wa Mtandaoni.",
        ],
      },
      {
        notesEn: [
          "Reuse the bias lesson on sector data. A crop model trained on large farms can fail for a one-acre shamba. A clinical model trained on one skin tone or one language can fail in a Kenyan clinic.",
          "Protected characteristics are not optional colour. If you collect them to audit fairness, you need a lawful basis.",
          "The computer said so is not a clinical, credit, or exam decision.",
        ],
        notesSw: [
          "Tumia tena somo la upendeleo kwa data ya sekta. Modeli ya mazao iliyofunzwa kwa mashamba makubwa inaweza kushindwa kwa shamba la ekari moja. Modeli ya kitabibu iliyofunzwa kwa rangi moja ya ngozi au lugha moja inaweza kushindwa katika kliniki ya Kenya.",
          "Sifa zinazolindwa si rangi ya hiari. Ukizikusanya kukagua usawa, unahitaji msingi wa kisheria.",
          "Kompyuta ilisema hivyo si uamuzi wa kitabibu, wa mkopo, au wa mtihani.",
        ],
        video: {
          id: "gV0_raKR2UQ",
          titleEn: "Algorithmic Bias and Fairness: Crash Course AI #18",
          titleSw: "Upendeleo na usawa wa algoriti: Crash Course AI #18",
          channel: "CrashCourse",
          checks: [
            {
              t: "01:08",
              qEn: "How many types of algorithmic bias does the video say we should pay attention to, at least?",
              qSw: "Video inasema tuzingatie aina ngapi za upendeleo wa algoriti, angalau?",
              ...opt(
                "At least five.",
                ["One.", "Zero, if the average looks fine.", "Only the type that helps the demo."],
                "Angalau tano.",
                ["Moja.", "Sifuri, wastani ukionekana mzuri.", "Aina inayosaidia onyesho pekee."],
                0
              ),
            },
            {
              t: "09:00",
              qEn: "What does the video say about accepting an AI recommendation because the computer said so?",
              qSw: "Video inasema nini kuhusu kukubali pendekezo la AI kwa sababu kompyuta ilisema hivyo?",
              ...opt(
                "Be critical about AI recommendations instead of just accepting that the computer said so.",
                [
                  "Accept it. The computer is the audit.",
                  "Accept it in clinic, credit, and exams.",
                  "Accept it when the slice was not reported.",
                ],
                "Kuwa mkosoaji kuhusu mapendekezo ya AI badala ya kukubali tu kwamba kompyuta ilisema hivyo.",
                [
                  "Kubali. Kompyuta ndiyo ukaguzi.",
                  "Kubali katika kliniki, mkopo, na mitihani.",
                  "Kubali kipande hakijaripotiwa.",
                ],
                1
              ),
            },
            {
              t: "09:06",
              qEn: "What does the video mean by transparency in algorithms?",
              qSw: "Video inamaanisha nini kwa uwazi katika algoriti?",
              ...opt(
                "The ability to examine inputs and outputs to understand why an algorithm is giving certain recommendations. It notes this is harder for deep learning, because hidden layers are tricky to interpret.",
                [
                  "Publishing patient names so anyone can check.",
                  "Hiding the inputs so the score looks clean.",
                  "A slogan on the slide, with no way to inspect the result.",
                ],
                "Uwezo wa kuchunguza ingizo na matokeo kuelewa kwa nini algoriti inatoa mapendekezo fulani. Inabainisha hili ni gumu zaidi kwa ujifunzaji wa kina, kwa sababu tabaka zilizofichwa ni ngumu kufasiri.",
                [
                  "Kuchapisha majina ya wagonjwa ili yeyote akague.",
                  "Kuficha ingizo ili alama ionekane safi.",
                  "Kauli mbiu kwenye slaidi, bila njia ya kukagua matokeo.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Pick one sector brief, one page: user, decision, data you are allowed to hold, human override, language, offline path, and the harm if the guess is wrong.",
          "Health brief stops at decision support. It does not output a dose.",
          "Business brief includes a person who can reverse an automated action.",
          "Farm brief names who owns the farmer's data after the pilot.",
        ],
        notesSw: [
          "Chagua muhtasari mmoja wa sekta, ukurasa mmoja: mtumiaji, uamuzi, data unayoruhusiwa kushikilia, ubatilishaji wa binadamu, lugha, njia ya nje ya mtandao, na madhara makisio yakiwa mabaya.",
          "Muhtasari wa afya unaishia kwa msaada wa uamuzi. Hautoi dozi.",
          "Muhtasari wa biashara unajumuisha mtu anayeweza kubatilisha kitendo cha otomatiki.",
          "Muhtasari wa shamba unataja nani anamiliki data ya mkulima baada ya majaribio.",
        ],
        video: {
          id: "aohQ4QSKsTU",
          titleEn: "AI in health: empowering patients, enhancing care",
          titleSw: "AI katika afya: kuwawezesha wagonjwa, kuboresha huduma",
          channel: "WHO European Region",
          checks: [
            {
              t: "00:29",
              qEn: "In the maternity example, what do doctors and nurses still do while AI looks at live data?",
              qSw: "Katika mfano wa uzazi, madaktari na wauguzi bado hufanya nini AI ikitazama data ya moja kwa moja?",
              ...opt(
                "They spend time with patients. AI may recommend hospital attention and support timely decisions, including precautionary ones.",
                [
                  "They leave the ward because the model is the clinician.",
                  "They publish the live data in a public chatbot.",
                  "They let the model output a dose.",
                ],
                "Hulala muda na wagonjwa. AI inaweza kupendekeza uangalizi wa hospitali na kusaidia maamuzi ya wakati, ikiwa ni pamoja na ya tahadhari.",
                [
                  "Huondoka wodi kwa sababu modeli ndiye mtaalamu.",
                  "Huchapisha data ya moja kwa moja kwenye chatbot ya umma.",
                  "Huiruhusu modeli itoe dozi.",
                ],
                0
              ),
            },
            {
              t: "01:25",
              qEn: "What does the video say AI can do for care after analysing health data with practitioners?",
              qSw: "Video inasema AI inaweza kufanya nini kwa huduma baada ya kuchanganua data ya afya na wataalamu?",
              ...opt(
                "Help deliver care tailored to the needs of every patient.",
                [
                  "Replace the time clinicians spend with patients.",
                  "Decide a dose with no human.",
                  "Skip external validation.",
                ],
                "Kusaidia kutoa huduma inayolingana na mahitaji ya kila mgonjwa.",
                [
                  "Kuchukua nafasi ya muda wataalamu wanaka na wagonjwa.",
                  "Kuamua dozi bila binadamu.",
                  "Kuruka uthibitisho wa nje.",
                ],
                3
              ),
            },
            {
              t: "01:49",
              qEn: "Which values does the closing line say responsible AI should uphold?",
              qSw: "Mstari wa mwisho unasema AI yenye uwajibikaji inapaswa kudumisha thamani zipi?",
              ...opt(
                "Independence, dignity, and well-being, and compassionate care.",
                [
                  "Speed, secrecy, and a public photo set.",
                  "Replacement of the clinician.",
                  "A dose written by the model.",
                ],
                "Uhuru, hadhi, na ustawi, na huduma yenye huruma.",
                [
                  "Kasi, usiri, na seti ya picha za umma.",
                  "Kuchukua nafasi ya mtaalamu.",
                  "Dozi iliyoandikwa na modeli.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "The sector changes the harm and the law. It does not change the duty to test on people you did not train on.",
          "One page is enough to see if a build is responsible. A longer paper can wait.",
        ],
        notesSw: [
          "Sekta hubadilisha madhara na sheria. Haibadilishi wajibu wa kujaribu kwa watu hukufunza nao.",
          "Ukurasa mmoja unatosha kuona kama jengo lina uwajibikaji. Karatasi ndefu inaweza kungoja.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "A maize model is trained on large farms in one county. What must you test before you trust it for smallholders elsewhere?",
        qSw: "Modeli ya mahindi inafunzwa kwa mashamba makubwa katika kaunti moja. Lazima ujaribu nini kabla ya kuiamini kwa wakulima wadogo mahali pengine?",
        ...opt(
          "New fields and the groups who were missing, including smaller farms. Do not assume the first score travels.",
          [
            "Nothing. A large-farm score travels.",
            "Only the same county, twice.",
            "A public post of the farmers' names.",
          ],
          "Mashamba mapya na makundi yaliyokosekana, ikiwa ni pamoja na mashamba madogo. Usidhani alama ya kwanza inasafiri.",
          [
            "Hakuna. Alama ya shamba kubwa husafiri.",
            "Kaunti ile ile, mara mbili.",
            "Chapisho la umma la majina ya wakulima.",
          ],
          0
        ),
        answerEn: "New fields and the groups who were missing, including smaller farms. Do not assume the first score travels.",
        answerSw: "Mashamba mapya na makundi yaliyokosekana, ikiwa ni pamoja na mashamba madogo. Usidhani alama ya kwanza inasafiri.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From the bias video, why is 'the computer said so' not an audit?",
        qSw: "Kutoka video ya upendeleo, kwa nini 'kompyuta ilisema hivyo' si ukaguzi?",
        ...opt(
          "You must be critical of the recommendation. Transparency means you can examine inputs and outputs, which deep models make hard.",
          [
            "Because the computer is always the last word in clinic and credit.",
            "Because an average replaces the slice.",
            "Because hidden layers are easy, so no review is needed.",
          ],
          "Lazima uwe mkosoaji wa pendekezo. Uwazi unamaanisha unaweza kuchunguza ingizo na matokeo, jambo modeli za kina hulifanya kuwa gumu.",
          [
            "Kwa sababu kompyuta daima ndiyo neno la mwisho katika kliniki na mkopo.",
            "Kwa sababu wastani huchukua nafasi ya kipande.",
            "Kwa sababu tabaka zilizofichwa ni rahisi, kwa hiyo hakuna ukaguzi unaohitajika.",
          ],
          1
        ),
        answerEn: "You must be critical of the recommendation. Transparency means you can examine inputs and outputs, which deep models make hard.",
        answerSw: "Lazima uwe mkosoaji wa pendekezo. Uwazi unamaanisha unaweza kuchunguza ingizo na matokeo, jambo modeli za kina hulifanya kuwa gumu.",
        restudy: { unit: "specific", videoTitle: "Algorithmic Bias and Fairness: Crash Course AI #18", times: ["09:00"] },
      },
      {
        qEn: "From the WHO video, does AI replace the time clinicians spend with patients?",
        qSw: "Kutoka video ya WHO, je AI inachukua nafasi ya muda wataalamu wanaka na wagonjwa?",
        ...opt(
          "No. In the example, clinicians still spend time with patients while AI monitors data and may recommend attention.",
          [
            "Yes. That is the point of the maternity example.",
            "Yes, once the model can write a dose.",
            "Yes, if dignity is listed on a slide.",
          ],
          "Hapana. Katika mfano, wataalamu bado hutumia muda na wagonjwa AI ikifuatilia data na ikiweza kupendekeza uangalizi.",
          [
            "Ndiyo. Hiyo ndiyo hoja ya mfano wa uzazi.",
            "Ndiyo, modeli ikiweza kuandika dozi.",
            "Ndiyo, hadhi ikiandikwa kwenye slaidi.",
          ],
          2
        ),
        answerEn: "No. In the example, clinicians still spend time with patients while AI monitors data and may recommend attention.",
        answerSw: "Hapana. Katika mfano, wataalamu bado hutumia muda na wagonjwa AI ikifuatilia data na ikiweza kupendekeza uangalizi.",
        restudy: { unit: "application", videoTitle: "AI in health: empowering patients, enhancing care", times: ["00:29"] },
      },
      {
        qEn: "A credit model declines a trader. What must a responsible design allow?",
        qSw: "Modeli ya mkopo inamkataa mfanyabiashara. Muundo wenye uwajibikaji lazima uruhusu nini?",
        ...opt(
          "A human review and a reason the person can challenge. A score is not the last word.",
          [
            "An automatic decline with no reason and no appeal.",
            "A cluster used as a secret judgement.",
            "A prompt that moves the till with no person.",
          ],
          "Ukaguzi wa binadamu na sababu mtu anayeweza kuipinga. Alama si neno la mwisho.",
          [
            "Kukataliwa kiotomatiki bila sababu wala rufaa.",
            "Kundi linalotumika kama hukumu ya siri.",
            "Maagizo yanayosogeza till bila mtu.",
          ],
          0
        ),
        answerEn: "A human review and a reason the person can challenge. A score is not the last word.",
        answerSw: "Ukaguzi wa binadamu na sababu mtu anayeweza kuipinga. Alama si neno la mwisho.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "A school tutor may only use which materials?",
        qSw: "Mwalimu wa shule wa AI anaweza kutumia nyenzo zipi tu?",
        ...opt(
          "Approved materials you have a licence to use, with age-appropriate limits. The teacher still assesses.",
          [
            "Any page on the internet, including other learners' private work.",
            "The essay itself, scored with no fairness check and no teacher.",
            "A public chatbot paste of the class register.",
          ],
          "Nyenzo zilizoidhinishwa unazo leseni ya kuzitumia, kwa mipaka inayofaa umri. Mwalimu bado anatathmini.",
          [
            "Ukurasa wowote mtandaoni, ikiwa ni pamoja na kazi ya faragha ya wanafunzi wengine.",
            "Insha yenyewe, ikipewa alama bila ukaguzi wa usawa na bila mwalimu.",
            "Ubandikaji wa daftari la darasa kwenye chatbot ya umma.",
          ],
          3
        ),
        answerEn: "Approved materials you have a licence to use, with age-appropriate limits. The teacher still assesses.",
        answerSw: "Nyenzo zilizoidhinishwa unazo leseni ya kuzitumia, kwa mipaka inayofaa umri. Mwalimu bado anatathmini.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "Lead a community AI project",
    titleSw: "Ongoza mradi wa AI wa jamii",
    descEn: "Leave a model card, a data owner, a monitor, and a way to switch the tool off.",
    descSw: "Acha kadi ya modeli, mmiliki wa data, ufuatiliaji, na njia ya kuzima zana.",
    units: [
      {
        notesEn: [
          "Theory of change, in one chain: who has the problem, what you will change, how you will know, and what you will stop if the signal is bad.",
          "If the work is research on people, plan for ethics review and a NACOSTI licence where the rules require it. A class demo is not a stealth study.",
          "DPIA: what personal data, why, how long, who sees it, what harm if it leaks, and the safeguard.",
          "Defence, ten minutes: problem, data rights, model or RAG choice, metric, slice you worry about, cost in shillings, and who owns it after you leave.",
        ],
        notesSw: [
          "Nadharia ya mabadiliko, katika mnyororo mmoja: nani ana tatizo, utabadilisha nini, utajuaje, na utasimamisha nini ishara ikiwa mbaya.",
          "Kazi ikiwa utafiti kwa watu, panga ukaguzi wa maadili na leseni ya NACOSTI kanuni zinapohitaji. Onyesho la darasa si utafiti wa siri.",
          "DPIA: data binafsi gani, kwa nini, kwa muda gani, nani anaiona, madhara gani ikivuja, na kinga.",
          "Utetezi, dakika kumi: tatizo, haki za data, chaguo la modeli au RAG, kipimo, kipande unachohofia, gharama kwa shilingi, na nani anamiliki ukiondoka.",
        ],
      },
      {
        notesEn: [
          "Loss on the training file is not the community result. Hold out new cases. Simpler models overfit less.",
          "Say in advance which mistake is worse, and which feature you will refuse to use because it only encodes a proxy for a protected attribute.",
          "Write the incident path: who is called, what is switched off, what the community is told.",
        ],
        notesSw: [
          "Hasara kwenye faili ya mafunzo si matokeo ya jamii. Weka kando kesi mpya. Modeli rahisi hufanya overfitting kidogo.",
          "Sema mapema kosa lipi ni baya zaidi, na sifa ipi utakataa kutumia kwa sababu inawakilisha tu kiwakilishi cha sifa inayolindwa.",
          "Andika njia ya tukio: nani anapigiwa, nini kinazimwa, jamii inaambiwa nini.",
        ],
        video: {
          id: "lgKrup5oi_A",
          titleEn: "Training Neural Networks: Crash Course AI #4",
          titleSw: "Kufunza mitandao ya neva: Crash Course AI #4",
          channel: "CrashCourse",
          checks: [
            {
              t: "05:21",
              qEn: "After you see the loss, what does the video say you adjust?",
              qSw: "Baada ya kuona hasara, video inasema unarekebisha nini?",
              ...opt(
                "The network's weights, so the next similar inputs produce a more accurate output.",
                [
                  "The community's consent form, to hide the loss.",
                  "Only the poster slogan.",
                  "The grant end date, so the loss disappears.",
                ],
                "Uzito wa mtandao, ili ingizo linalofuata linalofanana litoe matokeo sahihi zaidi.",
                [
                  "Fomu ya ridhaa ya jamii, kuficha hasara.",
                  "Kauli mbiu ya bango pekee.",
                  "Tarehe ruzuku inaisha, ili hasara ipotee.",
                ],
                0
              ),
            },
            {
              t: "11:35",
              qEn: "What does the swimming-pool example suggest you do with features like grass length if accuracy does not change without them?",
              qSw: "Mfano wa bwawa unapendekeza ufanye nini na sifa kama urefu wa nyasi usahihi usipobadilika bila hizo?",
              ...opt(
                "Leave them out. Ignoring features that do not help is best.",
                [
                  "Keep them, because more features always help.",
                  "Use them as a proxy for a protected attribute.",
                  "Hide them and still train on them.",
                ],
                "Ziache nje. Kupuuza sifa zisizosaidia ndio bora.",
                [
                  "Zibakize, kwa sababu sifa zaidi daima husaidia.",
                  "Zitumie kama kiwakilishi cha sifa inayolindwa.",
                  "Zifiche na bado ufunze nazo.",
                ],
                1
              ),
            },
            {
              t: "11:49",
              qEn: "Besides the maths, what else does training require?",
              qSw: "Kando na hisabati, mafunzo yanahitaji nini kingine?",
              ...opt(
                "Choosing how to represent the problem as features, and thinking carefully about what mistakes the program might make.",
                [
                  "Only lowering the loss on the training file.",
                  "A class demo that interviews patients with no ethics review.",
                  "A utopia slide.",
                ],
                "Kuchagua jinsi ya kuwakilisha tatizo kama sifa, na kufikiria kwa makini makosa programu inaweza kufanya.",
                [
                  "Kupunguza hasara kwenye faili ya mafunzo pekee.",
                  "Onyesho la darasa linalowahoji wagonjwa bila ukaguzi wa maadili.",
                  "Slaidi ya ndoto.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Use the future-of-AI questions as the defence opening, not the closing slide of a demo.",
          "Will this replace someone's livelihood or only take a dull task? What bias may ride along? What does deployment cost when the grant ends?",
          "If the honest answer is 'do not use AI here', that is a pass, not a failed project.",
        ],
        notesSw: [
          "Tumia maswali ya mustakabali wa AI kama ufunguzi wa utetezi, si slaidi ya mwisho ya onyesho.",
          "Je hii itachukua riziki ya mtu au kazi tu ya kuchosha? Upendeleo gani unaweza kupanda pamoja? Kuweka kazini kunagharimu nini ruzuku inapoisha?",
          "Jibu la uaminifu likiwa 'usitumie AI hapa', hiyo ni kupita, si mradi ulioshindwa.",
        ],
        video: {
          id: "T7Rv4tGRlfc",
          titleEn: "The Future of Artificial Intelligence: Crash Course AI #20",
          titleSw: "Mustakabali wa akili bandia: Crash Course AI #20",
          channel: "CrashCourse",
          checks: [
            {
              t: "02:01",
              qEn: "In the video's self-driving levels, what is still true at the lower levels?",
              qSw: "Katika viwango vya kuendesha pekee vya video, nini bado ni kweli katika viwango vya chini?",
              ...opt(
                "A human driver is still responsible. The car does not take over every task at once. Full handover is described as a later level, not today's default.",
                [
                  "The car owns every decision from the first level.",
                  "Lower levels have no human and no cost.",
                  "Trust is easy because bias cannot appear.",
                ],
                "Dereva wa binadamu bado anawajibika. Gari halichukui kila kazi mara moja. Kukabidhi kamili kunaelezwa kama kiwango cha baadaye, si chaguo-msingi cha leo.",
                [
                  "Gari linamiliki kila uamuzi kutoka kiwango cha kwanza.",
                  "Viwango vya chini havina binadamu wala gharama.",
                  "Uaminifu ni rahisi kwa sababu upendeleo hauwezi kuonekana.",
                ],
                0
              ),
            },
            {
              t: "06:42",
              qEn: "What warning does the video give about an AI and human utopia story?",
              qSw: "Video inatoa onyo gani kuhusu hadithi ya ndoto ya AI na binadamu?",
              ...opt(
                "Be realistic. Automation can replace humans, not only enhance their work.",
                [
                  "A utopia slide is a sufficient defence.",
                  "Replacement cannot happen if you say 'helper'.",
                  "Costs end when the grant ends.",
                ],
                "Kuwa halisi. Otomatiki inaweza kuchukua nafasi ya binadamu, si kuboresha kazi yao tu.",
                [
                  "Slaidi ya ndoto inatosha kama utetezi.",
                  "Kuchukua nafasi hakuwezi kutokea ukisema 'msaidizi'.",
                  "Gharama zinaisha ruzuku inapoisha.",
                ],
                3
              ),
            },
            {
              t: "07:36",
              qEn: "Why does the video say trust is hard?",
              qSw: "Kwa nini video inasema uaminifu ni mgumu?",
              ...opt(
                "AI systems often end up with biases you may not want.",
                [
                  "Because people refuse every tool.",
                  "Because a model card is illegal.",
                  "Because switching a tool off is impossible.",
                ],
                "Mifumo ya AI mara nyingi huishia na upendeleo usioutaka.",
                [
                  "Kwa sababu watu hukataa kila zana.",
                  "Kwa sababu kadi ya modeli ni kinyume cha sheria.",
                  "Kwa sababu kuzima zana haiwezekani.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Leaders leave a model card, a data owner, a monitor, and a way to switch the tool off.",
          "The community, not the demo, is the audience of the defence.",
        ],
        notesSw: [
          "Viongozi huacha kadi ya modeli, mmiliki wa data, ufuatiliaji, na njia ya kuzima zana.",
          "Jamii, si onyesho, ndiyo hadhira ya utetezi.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "What belongs on a one-page theory of change?",
        qSw: "Nini kinapaswa kuwa kwenye nadharia ya mabadiliko ya ukurasa mmoja?",
        ...opt(
          "Who is affected, what will change, how you will know, and what you will stop.",
          [
            "Only the demo and the logo.",
            "A promise the tool cannot be switched off.",
            "Patient interviews with no ethics plan.",
          ],
          "Nani anaathirika, nini kitabadilika, utajuaje, na utasimamisha nini.",
          [
            "Onyesho na nembo pekee.",
            "Ahadi zana haiwezi kuzimwa.",
            "Mahojiano ya wagonjwa bila mpango wa maadili.",
          ],
          0
        ),
        answerEn: "Who is affected, what will change, how you will know, and what you will stop.",
        answerSw: "Nani anaathirika, nini kitabadilika, utajuaje, na utasimamisha nini.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From Crash Course AI #4, when should you drop a feature?",
        qSw: "Kutoka Crash Course AI #4, lini uache sifa?",
        ...opt(
          "When accuracy does not change without it. Extra features can feed overfitting.",
          [
            "Never. More features are always safer.",
            "When it is the only lawful field you are allowed to hold.",
            "When the community asked you to keep it.",
          ],
          "Usahihi usipobadilika bila hiyo. Sifa za ziada zinaweza kulisha overfitting.",
          [
            "Kamwe. Sifa zaidi daima ni salama zaidi.",
            "Ikiwa ndilo sehemu pekee ya kisheria unayoruhusiwa kushikilia.",
            "Jamii ilipokuomba uibakize.",
          ],
          1
        ),
        answerEn: "When accuracy does not change without it. Extra features can feed overfitting.",
        answerSw: "Usahihi usipobadilika bila hiyo. Sifa za ziada zinaweza kulisha overfitting.",
        restudy: { unit: "specific", videoTitle: "Training Neural Networks: Crash Course AI #4", times: ["11:35"] },
      },
      {
        qEn: "What does that video add besides adjusting weights?",
        qSw: "Video hiyo inaongeza nini kando na kurekebisha uzito?",
        ...opt(
          "Represent the problem with the right features, and think about the mistakes the program might make.",
          [
            "Nothing. Weights are the whole defence.",
            "A utopia slide.",
            "Permission to skip the incident path.",
          ],
          "Wakilisha tatizo kwa sifa sahihi, na fikiria makosa programu inaweza kufanya.",
          [
            "Hakuna. Uzito ndio utetezi wote.",
            "Slaidi ya ndoto.",
            "Ruhusa ya kuruka njia ya tukio.",
          ],
          2
        ),
        answerEn: "Represent the problem with the right features, and think about the mistakes the program might make.",
        answerSw: "Wakilisha tatizo kwa sifa sahihi, na fikiria makosa programu inaweza kufanya.",
        restudy: { unit: "specific", videoTitle: "Training Neural Networks: Crash Course AI #4", times: ["11:49"] },
      },
      {
        qEn: "From Crash Course AI #20, why is a utopia slide not a defence?",
        qSw: "Kutoka Crash Course AI #20, kwa nini slaidi ya ndoto si utetezi?",
        ...opt(
          "Automation can replace work, systems pick up bias, and deployment has costs. Ask whether AI should be used here.",
          [
            "Because slides are banned.",
            "Because replacement is impossible.",
            "Because trust is easy once the grant is spent.",
          ],
          "Otomatiki inaweza kuchukua kazi, mifumo huchukua upendeleo, na kuweka kazini kuna gharama. Uliza kama AI inapaswa kutumika hapa.",
          [
            "Kwa sababu slaidi zimepigwa marufuku.",
            "Kwa sababu kuchukua nafasi haiwezekani.",
            "Kwa sababu uaminifu ni rahisi ruzuku ikitumika.",
          ],
          0
        ),
        answerEn: "Automation can replace work, systems pick up bias, and deployment has costs. Ask whether AI should be used here.",
        answerSw: "Otomatiki inaweza kuchukua kazi, mifumo huchukua upendeleo, na kuweka kazini kuna gharama. Uliza kama AI inapaswa kutumika hapa.",
        restudy: {
          unit: "application",
          videoTitle: "The Future of Artificial Intelligence: Crash Course AI #20",
          times: ["06:42", "07:36"],
        },
      },
      {
        qEn: "Your project interviews patients. What extra duty do the notes name?",
        qSw: "Mradi wako unawahoji wagonjwa. Maelezo yanataja wajibu gani wa ziada?",
        ...opt(
          "Ethics review and a NACOSTI research licence where the rules require them. Do not treat a research study as a class demo.",
          [
            "None. A class demo covers patient interviews.",
            "Only a longer slide.",
            "Publish the interviews in a public chatbot.",
          ],
          "Ukaguzi wa maadili na leseni ya utafiti ya NACOSTI kanuni zinapohitaji. Usichukulie utafiti kuwa onyesho la darasa.",
          [
            "Hakuna. Onyesho la darasa linatosha kwa mahojiano ya wagonjwa.",
            "Slaidi ndefu pekee.",
            "Chapisha mahojiano kwenye chatbot ya umma.",
          ],
          3
        ),
        answerEn: "Ethics review and a NACOSTI research licence where the rules require them. Do not treat a research study as a class demo.",
        answerSw: "Ukaguzi wa maadili na leseni ya utafiti ya NACOSTI kanuni zinapohitaji. Usichukulie utafiti kuwa onyesho la darasa.",
        restudy: { unit: "basics" },
      },
    ],
  },
];
