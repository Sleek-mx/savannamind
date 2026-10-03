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

export const advancedModules: ModuleSpec[] = [
  {
    titleEn: "How learning works",
    titleSw: "Jinsi kujifunza kunavyofanya kazi",
    descEn: "Weights, bias, cost, a downhill step, then a test on rows you did not fit.",
    descSw: "Uzito, upendeleo wa neva, gharama, hatua ya kushuka, kisha jaribio la mistari hukuilinganisha.",
    units: [
      {
        notesEn: [
          "A neural network is layers of simple units. Each connection has a weight. Each unit has a bias, an extra number that shifts when it turns on.",
          "Learning means searching for weights and biases that make the outputs less wrong. You do not set 13,000 numbers by hand.",
          "The cost (or loss) measures how wrong one example is. Gradient descent steps the weights in the direction that reduces that cost.",
          "Classical tools still matter: logistic regression, trees, forests. Use a neural net when the pattern needs it, not as decoration.",
        ],
        notesSw: [
          "Mtandao wa neva ni tabaka za vitengo rahisi. Kila muunganiko una uzito. Kila kitengo kina bias, nambari ya ziada inayohamisha linapowaka.",
          "Kujifunza ni kutafuta uzito na bias zinazofanya matokeo yasiwe na makosa mengi. Huweki nambari 13,000 kwa mkono.",
          "Gharama (au loss) hupima mfano mmoja ulivyo na makosa. Gradient descent husogeza uzito upande unaopunguza gharama hiyo.",
          "Zana za kawaida bado zina maana: logistic regression, miti, misitu. Tumia mtandao wa neva ruwaza inapoihitaji, si mapambo.",
        ],
      },
      {
        notesEn: [
          "Weights describe the pattern a unit looks for. Bias sets how strong that pattern must be before the unit activates.",
          "The digit-recognition sketch in the video has on the order of 13,000 weights and biases. That number is the point: learning is a search over many knobs.",
          "Watch for the claim, not the artwork. The network does not 'understand' a digit the way you do.",
        ],
        notesSw: [
          "Uzito hueleza ruwaza kitengo kinachotafuta. Bias huweka ruwaza hiyo iwe na nguvu kiasi gani kabla ya kitengo kuwaka.",
          "Mchoro wa kutambua tarakimu katika video una takriban uzito na bias 13,000. Nambari hiyo ndiyo hoja: kujifunza ni utafutaji wa vipini vingi.",
          "Tazama dai, si mchoro. Mtandao 'hauelewi' tarakimu kama wewe unavyoelewa.",
        ],
        video: {
          id: "aircAruvnKk",
          titleEn: "But what is a neural network?",
          titleSw: "Lakini mtandao wa neva ni nini?",
          channel: "3Blue1Brown",
          checks: [
            {
              t: "11:20",
              qEn: "What is the bias, in this video?",
              qSw: "Bias ni nini, katika video hii?",
              ...opt(
                "An extra number added to the weighted sum before the squashing function. It sets how high the weighted sum must be before the neuron becomes meaningfully active.",
                [
                  "The training photo itself.",
                  "A promise the network understands the digit.",
                  "The learning rate of the whole county.",
                ],
                "Nambari ya ziada inayoongezwa kwenye jumla ya uzito kabla ya fomula ya kubana. Huweka jumla ya uzito iwe juu kiasi gani kabla ya neva kuwa hai kwa maana.",
                [
                  "Picha ya mafunzo yenyewe.",
                  "Ahadi mtandao unaelewa tarakimu.",
                  "Kiwango cha kujifunza cha kaunti nzima.",
                ],
                0
              ),
            },
            {
              t: "12:18",
              qEn: "About how many weights and biases does the digit network in the video have?",
              qSw: "Mtandao wa tarakimu katika video una uzito na bias takriban ngapi?",
              ...opt(
                "Almost exactly 13,000.",
                ["Thirteen.", "1,300,000, typed by hand.", "Three, one per layer name."],
                "Karibu 13,000 hasa.",
                ["Kumi na tatu.", "1,300,000, zilizoandikwa kwa mkono.", "Tatu, moja kwa kila jina la tabaka."],
                1
              ),
            },
            {
              t: "12:31",
              qEn: "What does 'learning' refer to here?",
              qSw: "'Kujifunza' kunarejelea nini hapa?",
              ...opt(
                "Getting the computer to find a valid setting for all those weights and biases so the network solves the problem.",
                [
                  "A person setting each of the 13,000 numbers by hand.",
                  "The network understanding a digit the way a person does.",
                  "Scoring the same 30 rows you already fitted.",
                ],
                "Kupata kompyuta ipate mpangilio halali wa uzito na bias hizo zote ili mtandao utatue tatizo.",
                [
                  "Mtu kuweka kila nambari kati ya 13,000 kwa mkono.",
                  "Mtandao kuelewa tarakimu kama mtu anavyoelewa.",
                  "Kupa alama mistari 30 ile ile uliyolinganisha.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Picture a price-versus-rainfall sketch. Each step should move the line toward the points, not away. That downhill step is gradient descent. The size of the step is the learning rate. Too large and you jump past the valley.",
          "The sign of each gradient component says whether to nudge that weight up or down. The size says which nudges matter more.",
          "Practice: change one weight in words. Say whether the cost should rise or fall, and why you would check on new rows, not only the rows you fitted.",
        ],
        notesSw: [
          "Fikiria mchoro wa bei dhidi ya mvua. Kila hatua inapaswa kusogeza mstari kuelekea pointi, si mbali. Hatua hiyo ya kushuka ni gradient descent. Ukubwa wa hatua ni kiwango cha kujifunza. Kikubwa sana unaruka bonde.",
          "Alama ya kila sehemu ya gradient inasema kusogeza uzito huo juu au chini. Ukubwa unasema misogezo ipi ina maana zaidi.",
          "Zoezi: badilisha uzito mmoja kwa maneno. Sema gharama ipande au ishuke, na kwa nini ungekagua mistari mipya, si ile uliyolinganisha pekee.",
        ],
        video: {
          id: "IHZwWFHWa-w",
          titleEn: "Gradient descent, how neural networks learn",
          titleSw: "Gradient descent, jinsi mitandao ya neva inavyojifunza",
          channel: "3Blue1Brown",
          checks: [
            {
              t: "00:13",
              qEn: "What idea does the video say it will introduce first?",
              qSw: "Video inasema itatanguliza wazo gani kwanza?",
              ...opt(
                "Gradient descent.",
                ["A county DPIA.", "A chatbot brand.", "A hand-set list of 13,000 numbers."],
                "Gradient descent.",
                ["DPIA ya kaunti.", "Chapa ya chatbot.", "Orodha ya mkono ya nambari 13,000."],
                0
              ),
            },
            {
              t: "04:01",
              qEn: "What does the video call the cost of a single training example?",
              qSw: "Video inaita nini gharama ya mfano mmoja wa mafunzo?",
              ...opt(
                "The cost of that example: a measure of how wrong the network is on it. The full cost adds those up across examples.",
                [
                  "The learning rate.",
                  "The number of layers, which is the error.",
                  "A promise the line already fits new market days.",
                ],
                "Gharama ya mfano huo: kipimo cha mtandao ulivyo na makosa juu yake. Gharama kamili huongeza hizo kwa mifano yote.",
                [
                  "Kiwango cha kujifunza.",
                  "Idadi ya tabaka, ambayo ndiyo kosa.",
                  "Ahadi mstari tayari unalingana na siku mpya za soko.",
                ],
                3
              ),
            },
            {
              t: "10:49",
              qEn: "What does the sign of a negative-gradient component tell you?",
              qSw: "Alama ya sehemu ya gradient hasi inakuambia nini?",
              ...opt(
                "Whether that part of the input (a weight or bias) should be nudged up or down.",
                [
                  "The final accuracy on the rows you already fitted.",
                  "That the network understands the maize price.",
                  "That you should skip the unseen days.",
                ],
                "Sehemu hiyo ya ingizo (uzito au bias) isogezwe juu au chini.",
                [
                  "Usahihi wa mwisho wa mistari uliyolinganisha tayari.",
                  "Kwamba mtandao unaelewa bei ya mahindi.",
                  "Kwamba uruke siku ambazo hazijaonekana.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Weights, bias, cost, a downhill step, then a test on rows you did not fit.",
          "If you cannot say what the cost is punishing, you cannot defend the model.",
        ],
        notesSw: [
          "Uzito, bias, gharama, hatua ya kushuka, kisha jaribio la mistari hukuilinganisha.",
          "Ikiwa huwezi kusema gharama inaadhibu nini, huwezi kuitetea modeli.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "In the neural-network video, what is a bias?",
        qSw: "Katika video ya mtandao wa neva, bias ni nini?",
        ...opt(
          "An extra number added to the weighted sum that shifts when the neuron activates.",
          [
            "The picture of the digit.",
            "A hand-written list of every weight.",
            "The county where the data was collected.",
          ],
          "Nambari ya ziada inayoongezwa kwenye jumla ya uzito inayohamisha neva inapowaka.",
          [
            "Picha ya tarakimu.",
            "Orodha iliyoandikwa kwa mkono ya kila uzito.",
            "Kaunti data ilikokusanywa.",
          ],
          0
        ),
        answerEn: "An extra number added to the weighted sum that shifts when the neuron activates.",
        answerSw: "Nambari ya ziada inayoongezwa kwenye jumla ya uzito inayohamisha neva inapowaka.",
        restudy: { unit: "specific", videoTitle: "But what is a neural network?", times: ["11:20"] },
      },
      {
        qEn: "What is learning, in that video's terms?",
        qSw: "Kujifunza ni nini, kwa maneno ya video hiyo?",
        ...opt(
          "Finding settings for the many weights and biases that solve the task. The example network has about 13,000 of them.",
          [
            "Typing each number yourself.",
            "Understanding a digit the way a person does.",
            "Fitting only the rows you will score.",
          ],
          "Kupata mipangilio ya uzito na bias nyingi zinazotatua kazi. Mtandao wa mfano una takriban 13,000.",
          [
            "Kuandika kila nambari mwenyewe.",
            "Kuelewa tarakimu kama mtu anavyoelewa.",
            "Kulinganisha mistari utakayoipa alama pekee.",
          ],
          1
        ),
        answerEn: "Finding settings for the many weights and biases that solve the task. The example network has about 13,000 of them.",
        answerSw: "Kupata mipangilio ya uzito na bias nyingi zinazotatua kazi. Mtandao wa mfano una takriban 13,000.",
        restudy: { unit: "specific", videoTitle: "But what is a neural network?", times: ["12:18", "12:31"] },
      },
      {
        qEn: "From the gradient-descent video, what does the cost measure?",
        qSw: "Kutoka video ya gradient descent, gharama hupima nini?",
        ...opt(
          "How wrong the network is on a training example.",
          [
            "How many shillings the server costs.",
            "How many days you already fitted.",
            "The sign of the learning rate only.",
          ],
          "Mtandao ulivyo na makosa kwenye mfano wa mafunzo.",
          [
            "Seva inagharimu shilingi ngapi.",
            "Siku ngapi umelinganisha tayari.",
            "Alama ya kiwango cha kujifunza pekee.",
          ],
          2
        ),
        answerEn: "How wrong the network is on a training example.",
        answerSw: "Mtandao ulivyo na makosa kwenye mfano wa mafunzo.",
        restudy: { unit: "application", videoTitle: "Gradient descent, how neural networks learn", times: ["04:01"] },
      },
      {
        qEn: "What does the sign of a gradient component decide?",
        qSw: "Alama ya sehemu ya gradient inaamua nini?",
        ...opt(
          "Whether to nudge that weight or bias up or down.",
          [
            "The final mark on the fitted rows.",
            "Which brand hosts the model.",
            "That unseen days can be ignored.",
          ],
          "Kusogeza uzito au bias hiyo juu au chini.",
          [
            "Alama ya mwisho ya mistari iliyolinganishwa.",
            "Chapa ipi inahost modeli.",
            "Kwamba siku zisizoonekana zinaweza kupuuzwa.",
          ],
          0
        ),
        answerEn: "Whether to nudge that weight or bias up or down.",
        answerSw: "Kusogeza uzito au bias hiyo juu au chini.",
        restudy: { unit: "application", videoTitle: "Gradient descent, how neural networks learn", times: ["10:49"] },
      },
      {
        qEn: "You fit a maize-price line on 30 market days and score it only on those 30. What is missing?",
        qSw: "Unalinganisha mstari wa bei ya mahindi kwa siku 30 za soko na kuipa alama siku hizo 30 pekee. Nini kinakosekana?",
        ...opt(
          "A check on days you did not fit. Otherwise you may only have memorised the sample.",
          [
            "Nothing. Those 30 days are the proof.",
            "A larger learning rate, and no new rows.",
            "A hand-typed list of all the weights.",
          ],
          "Ukaguzi wa siku hukuilinganisha. La sivyo unaweza kuwa umekariri sampuli tu.",
          [
            "Hakuna. Siku hizo 30 ndizo uthibitisho.",
            "Kiwango kikubwa cha kujifunza, na hakuna mistari mipya.",
            "Orodha iliyoandikwa kwa mkono ya uzito wote.",
          ],
          3
        ),
        answerEn: "A check on days you did not fit. Otherwise you may only have memorised the sample.",
        answerSw: "Ukaguzi wa siku hukuilinganisha. La sivyo unaweza kuwa umekariri sampuli tu.",
        restudy: { unit: "application", extra: "notes only, no video" },
      },
    ],
  },
];
