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

export const intermediateModules: ModuleSpec[] = [
  {
    titleEn: "Build and measure a model honestly",
    titleSw: "Jenga na upime modeli kwa uaminifu",
    descEn: "Frame the problem, label the data, test on new cases, and name which mistake costs more.",
    descSw: "Weka tatizo vizuri, weka lebo, jaribu kesi mpya, na utaje kosa gani linagharimu zaidi.",
    units: [
      {
        notesEn: [
          "Lifecycle: problem, data, train, evaluate, deploy, monitor, retire. Skip a step and the '99%' score is theatre.",
          "Frame the problem first. Classification sorts into boxes. Regression predicts a number. Clustering groups without labels. Generation creates new content. Some problems should not use AI at all.",
          "Collect data lawfully: purpose, consent, and only what you need. A label guide must be clear enough that two people would mostly agree.",
        ],
        notesSw: [
          "Mzunguko: tatizo, data, funza, tathmini, weka kazini, fuatilia, staafu. Ukiruka hatua, alama ya '99%' ni tamthilia.",
          "Weka tatizo kwanza. Uainishaji hupanga katika visanduku. Urejeshaji hutabiri nambari. Ukundi hupanga bila lebo. Uzalishaji huunda maudhui mapya. Matatizo mengine hayafai AI kabisa.",
          "Kusanya data kisheria: madhumuni, ridhaa, na kile unachohitaji tu. Mwongozo wa lebo lazima uwe wazi kiasi kwamba watu wawili wengi wakubaliane.",
        ],
      },
      {
        notesEn: [
          "Supervised learning means the training examples have labels.",
          "After training, test on new examples the model did not study. A high score on the training set alone is not honesty.",
          "Precision: when the model says 'yes', how often is it right? Recall: of all the real 'yes' cases, how many did it find? A fraud flag and a missed disease do not have the same cost.",
        ],
        notesSw: [
          "Ujifunzaji unaosimamiwa unamaanisha mifano ya mafunzo ina lebo.",
          "Baada ya mafunzo, jaribu mifano mipya modeli haikusoma. Alama ya juu kwenye seti ya mafunzo pekee si uaminifu.",
          "Usahihi maalumu (precision): modeli ikisema 'ndiyo', mara ngapi iko sahihi? Ukumbusho (recall): kati ya kesi halisi za 'ndiyo', ilipata ngapi? Alama ya utapeli na ugonjwa uliokosekana hazina gharama sawa.",
        ],
        video: {
          id: "4qVRBYAdLAo",
          titleEn: "Supervised Learning: Crash Course AI #2",
          titleSw: "Ujifunzaji unaosimamiwa: Crash Course AI #2",
          channel: "CrashCourse",
          checks: [
            {
              t: "01:37",
              qEn: "What is supervised learning, as stated in the video?",
              qSw: "Ujifunzaji unaosimamiwa ni nini, kama video inavyosema?",
              ...opt(
                "The process of learning with training labels.",
                [
                  "Grouping with no labels at all.",
                  "Writing every rule by hand and never testing.",
                  "Generating a story from a prompt.",
                ],
                "Mchakato wa kujifunza kwa lebo za mafunzo.",
                [
                  "Kupanga bila lebo kabisa.",
                  "Kuandika kila kanuni kwa mkono na kutojaribu.",
                  "Kuunda hadithi kutoka maagizo.",
                ],
                0
              ),
            },
            {
              t: "11:02",
              qEn: "What must you do with the perceptron after training?",
              qSw: "Lazima ufanye nini na perseptroni baada ya mafunzo?",
              ...opt(
                "Test it on new data.",
                [
                  "Score it only on the examples it already studied.",
                  "Publish the training score as the final proof.",
                  "Delete the labels and call that honesty.",
                ],
                "Ijaribu kwa data mpya.",
                [
                  "Ipe alama kwa mifano iliyoisoma tayari pekee.",
                  "Chapisha alama ya mafunzo kama uthibitisho wa mwisho.",
                  "Futa lebo na uiite uaminifu.",
                ],
                1
              ),
            },
            {
              t: "12:50",
              qEn: "What does recall tell you, and what was John Green-bot's donut recall in the example?",
              qSw: "Recall inakuambia nini, na recall ya donati ya John Green-bot ilikuwa ngapi katika mfano?",
              ...opt(
                "Recall is how much of the thing you are looking for the program can find. He found 8 of 25 donuts, so recall was 32%.",
                [
                  "Recall is how often a 'yes' is right. It was about 90%.",
                  "Recall is the training score. It was 99%.",
                  "Recall means the program found every donut.",
                ],
                "Recall ni kiasi gani cha kitu unachotafuta programu inaweza kupata. Alipata 8 kati ya donati 25, kwa hiyo recall ilikuwa 32%.",
                [
                  "Recall ni mara ngapi 'ndiyo' iko sahihi. Ilikuwa karibu 90%.",
                  "Recall ni alama ya mafunzo. Ilikuwa 99%.",
                  "Recall inamaanisha programu ilipata kila donati.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Imagine a SACCO wants to flag loans that may not be repaid. Write: what is the label, what would a false alarm cost, and what would a miss cost?",
          "A photo model needs people who can label reliably. The video's point: humans still do that careful labelling.",
          "Do not invent a percentage for a real clinic or bank. If you use numbers, label them as a practice example.",
        ],
        notesSw: [
          "Fikiria SACCO inataka kuashiria mikopo isiyolipwa. Andika: lebo ni nini, kengele ya uongo inagharimu nini, na kukosa kunagharimu nini?",
          "Modeli ya picha inahitaji watu wanaoweza kuweka lebo kwa uaminifu. Hoja ya video: binadamu bado hufanya uwekaji huo wa makini.",
          "Usibuni asilimia kwa kliniki au benki halisi. Ukitumia nambari, ziandike kuwa mfano wa mazoezi.",
        ],
        video: {
          id: "oV3ZY6tJiA0",
          titleEn: "Neural Networks and Deep Learning: Crash Course AI #3",
          titleSw: "Mitandao ya neva na ujifunzaji wa kina: Crash Course AI #3",
          channel: "CrashCourse",
          checks: [
            {
              t: "01:33",
              qEn: "What was the first step the video describes for the image challenge?",
              qSw: "Hatua ya kwanza video inaeleza kwa changamoto ya picha ilikuwa nini?",
              ...opt(
                "Create a huge public dataset of labelled real-world photos.",
                [
                  "Deploy a model before any labels exist.",
                  "Skip data and start with a slogan.",
                  "Score the model only on the pictures used to train it.",
                ],
                "Unda seti kubwa ya umma ya picha halisi zenye lebo.",
                [
                  "Weka modeli kazini kabla ya lebo yoyote.",
                  "Ruka data na uanze na kauli mbiu.",
                  "Ipe modeli alama kwa picha zilizotumika kuifunza pekee.",
                ],
                0
              ),
            },
            {
              t: "01:59",
              qEn: "Who does the video say is best at reliably labelling data?",
              qSw: "Video inasema nani ni bora katika kuweka lebo kwa uaminifu?",
              ...opt(
                "Humans.",
                ["The model itself, with no review.", "A random number generator.", "The training score."],
                "Binadamu.",
                ["Modeli yenyewe, bila ukaguzi.", "Kizalishaji cha nambari za nasibu.", "Alama ya mafunzo."],
                3
              ),
            },
            {
              t: "10:50",
              qEn: "What job does the video give a neural network in the Pap test example?",
              qSw: "Video inapa mtandao wa neva kazi gani katika mfano wa kipimo cha Pap?",
              ...opt(
                "Look at an image of cells under a microscope and decide whether there is a risk of cancer.",
                [
                  "Prescribe a dose with no clinician.",
                  "Replace the laboratory entirely.",
                  "Publish the patient's name.",
                ],
                "Kuangalia picha ya seli chini ya hadubini na kuamua kama kuna hatari ya saratani.",
                [
                  "Kuandika dozi bila mtaalamu.",
                  "Kuchukua nafasi ya maabara yote.",
                  "Kuchapisha jina la mgonjwa.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Label it, split it, test it on new cases, and say which mistake hurts more.",
          "A single accuracy number hides that choice. Ask for precision and recall.",
        ],
        notesSw: [
          "Weka lebo, gawanya, jaribu kesi mpya, na useme kosa gani linaumiza zaidi.",
          "Nambari moja ya usahihi huficha chaguo hilo. Uliza precision na recall.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "Put the lifecycle in order: deploy, problem, train, evaluate, data.",
        qSw: "Panga mzunguko: weka kazini, tatizo, funza, tathmini, data.",
        ...opt(
          "Problem, data, train, evaluate, deploy. Then monitor, and retire when it fails.",
          [
            "Deploy, then invent the problem.",
            "Train, deploy, and skip evaluate.",
            "Data, retire, then problem.",
          ],
          "Tatizo, data, funza, tathmini, weka kazini. Kisha fuatilia, na istaafu inaposhindwa.",
          [
            "Weka kazini, kisha buni tatizo.",
            "Funza, weka kazini, na uruke tathmini.",
            "Data, staafu, kisha tatizo.",
          ],
          0
        ),
        answerEn: "Problem, data, train, evaluate, deploy. Then monitor, and retire when it fails.",
        answerSw: "Tatizo, data, funza, tathmini, weka kazini. Kisha fuatilia, na istaafu inaposhindwa.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From Crash Course AI #2, what makes learning supervised?",
        qSw: "Kutoka Crash Course AI #2, nini hufanya ujifunzaji kuwa unaosimamiwa?",
        ...opt(
          "It learns with training labels.",
          [
            "It has no labels and no test.",
            "It only copies the training score.",
            "It generates new text.",
          ],
          "Hujifunza kwa lebo za mafunzo.",
          ["Haina lebo wala jaribio.", "Hunakili alama ya mafunzo pekee.", "Huunda maandishi mapya."],
          1
        ),
        answerEn: "It learns with training labels.",
        answerSw: "Hujifunza kwa lebo za mafunzo.",
        restudy: {
          unit: "specific",
          videoTitle: "Supervised Learning: Crash Course AI #2",
          times: ["01:37"],
        },
      },
      {
        qEn: "Why test on new data?",
        qSw: "Kwa nini ujaribu kwa data mpya?",
        ...opt(
          "A model can memorise the examples it studied. New data shows whether it actually learned.",
          [
            "New data is optional if the training score is high.",
            "Testing on the same rows proves honesty.",
            "A 99% training score is the deployment proof.",
          ],
          "Modeli inaweza kukariri mifano iliyosoma. Data mpya inaonyesha kama ilijifunza kweli.",
          [
            "Data mpya si lazima alama ya mafunzo ikiwa juu.",
            "Kujaribu mistari ile ile kuthibitisha uaminifu.",
            "Alama ya mafunzo ya 99% ndiyo uthibitisho wa kuweka kazini.",
          ],
          2
        ),
        answerEn: "A model can memorise the examples it studied. New data shows whether it actually learned.",
        answerSw: "Modeli inaweza kukariri mifano iliyosoma. Data mpya inaonyesha kama ilijifunza kweli.",
        restudy: {
          unit: "specific",
          videoTitle: "Supervised Learning: Crash Course AI #2",
          times: ["11:02"],
        },
      },
      {
        qEn: "In the donut count, precision was about trusting a 'yes'. Recall was what percent, and what does recall mean?",
        qSw: "Katika hesabu ya donati, precision ilikuwa kuhusu kuamini 'ndiyo'. Recall ilikuwa asilimia ngapi, na recall inamaanisha nini?",
        ...opt(
          "32%. Recall is how much of the real target the program finds.",
          [
            "92%. Recall means every 'yes' was correct.",
            "8%. Recall means the training score.",
            "100%. Recall means nothing was missed.",
          ],
          "32%. Recall ni kiasi gani cha lengo halisi programu inapata.",
          [
            "92%. Recall inamaanisha kila 'ndiyo' ilikuwa sahihi.",
            "8%. Recall inamaanisha alama ya mafunzo.",
            "100%. Recall inamaanisha hakuna kilichokosekana.",
          ],
          0
        ),
        answerEn: "32%. Recall is how much of the real target the program finds.",
        answerSw: "32%. Recall ni kiasi gani cha lengo halisi programu inapata.",
        restudy: {
          unit: "specific",
          videoTitle: "Supervised Learning: Crash Course AI #2",
          times: ["12:50"],
          extra: "recall",
        },
      },
      {
        qEn: "From Crash Course AI #3, why does labelling quality matter?",
        qSw: "Kutoka Crash Course AI #3, kwa nini ubora wa lebo una maana?",
        ...opt(
          "The dataset of labels is the first step, and humans are the reliable labellers. Bad labels become bad predictions.",
          [
            "Labels do not affect predictions.",
            "A model should label itself and skip people.",
            "Quality matters only after deployment.",
          ],
          "Seti ya lebo ndiyo hatua ya kwanza, na binadamu ndio wawekaji wa uaminifu. Lebo mbaya huwa utabiri mbaya.",
          [
            "Lebo haziathiri utabiri.",
            "Modeli ijipangie lebo na kuwaruka watu.",
            "Ubora una maana baada ya kuweka kazini tu.",
          ],
          3
        ),
        answerEn: "The dataset of labels is the first step, and humans are the reliable labellers. Bad labels become bad predictions.",
        answerSw: "Seti ya lebo ndiyo hatua ya kwanza, na binadamu ndio wawekaji wa uaminifu. Lebo mbaya huwa utabiri mbaya.",
        restudy: {
          unit: "application",
          videoTitle: "Neural Networks and Deep Learning: Crash Course AI #3",
          times: ["01:33", "01:59"],
        },
      },
    ],
  },
];
