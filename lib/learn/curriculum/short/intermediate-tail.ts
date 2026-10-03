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

export const intermediateTail: ModuleSpec[] = [
  {
    titleEn: "AI in Kenyan work: farm, clinic, classroom, shop",
    titleSw: "AI kazini Kenya: shamba, kliniki, darasa, duka",
    descEn: "One sector, one decision, one human owner, one baseline.",
    descSw: "Sekta moja, uamuzi mmoja, mmiliki mmoja wa binadamu, msingi mmoja.",
    units: [
      {
        notesEn: [
          "Farm: a co-op dataset needs the same fields, consent, and a test the model has not seen. Clouds in the long rains block many satellite photos. Say so.",
          "Clinic: a sensitive test and a rare disease can throw many false alarms. A high accuracy score is not enough. A clinician overrides.",
          "Classroom: the teacher sets the mark. AI detectors are unreliable. Children's data needs a lawful basis and, where required, a parent's consent.",
          "Shop: a forecast is a range, not a promise. Ads must be true. Customer lists are personal data. Digital lenders are regulated; a score is not a verdict.",
        ],
        notesSw: [
          "Shamba: seti ya ushirika inahitaji sehemu zile zile, ridhaa, na jaribio modeli haijaona. Mawingu ya mvua ndefu huzuia picha nyingi za setilaiti. Sema hivyo.",
          "Kliniki: kipimo nyeti na ugonjwa adimu vinaweza kutoa kengele nyingi za uongo. Alama ya juu ya usahihi haitoshi. Mtaalamu anabatilisha.",
          "Darasa: mwalimu ndiye anayeweka alama. Vigunduzi vya AI si vya kuaminika. Data ya watoto inahitaji msingi wa kisheria na, inapohitajika, ridhaa ya mzazi.",
          "Duka: utabiri ni masafa, si ahadi. Matangazo lazima yawe kweli. Orodha za wateja ni data binafsi. Wakopeshaji wa kidijitali wamedhibitiwa; alama si hukumu.",
        ],
      },
      {
        notesEn: [
          "For a leaf or stock photo model: define classes, gather varied examples, include a background class for sound, and keep samples on the device until you have consent to store them.",
          "Image, audio, and pose are three different projects. Do not mix them and call it one model.",
          "Sector rule: the tool suggests. The agrovet, clinician, teacher, or owner decides.",
        ],
        notesSw: [
          "Kwa modeli ya picha ya jani au stoo: fafanua makundi, kusanya mifano mbalimbali, jumuisha kundi la mandhari kwa sauti, na uweke sampuli kwenye kifaa hadi uwe na ridhaa ya kuzihifadhi.",
          "Picha, sauti, na mkao ni miradi mitatu tofauti. Usivichanganye na kuuita modeli moja.",
          "Kanuni ya sekta: zana inapendekeza. Agrovet, mtaalamu, mwalimu, au mmiliki anaamua.",
        ],
        video: {
          id: "DFBbSTvtpy4",
          titleEn: "Teachable Machine Tutorial 1: Gather",
          titleSw: "Mafunzo ya Teachable Machine 1: Kusanya",
          channel: "Experiments with Google",
          checks: [
            {
              t: "00:33",
              qEn: "How does the speaker add variety while collecting the neutral class?",
              qSw: "Mzungumzaji anaongezaje utofauti akikusanya kundi la upande wowote?",
              ...opt(
                "By moving around while recording, so the dataset is not all one pose.",
                [
                  "By standing still in one corner for every sample.",
                  "By copying one photo twenty times.",
                  "By uploading other people's farm records.",
                ],
                "Kwa kuzunguka anaporekodi, ili seti isiwe mkao mmoja.",
                [
                  "Kwa kusimama kona moja kwa kila sampuli.",
                  "Kwa kunakili picha moja mara ishirini.",
                  "Kwa kupakia kumbukumbu za shamba za watu wengine.",
                ],
                0
              ),
            },
            {
              t: "01:04",
              qEn: "What is a spectrogram in this tutorial?",
              qSw: "Spektrogramu ni nini katika mafunzo haya?",
              ...opt(
                "A way of visualising audio. Audio data is shown as a spectrogram and then cut into one-second samples.",
                [
                  "A satellite photo of a maize field.",
                  "A credit score for a trader.",
                  "A teacher's mark sheet.",
                ],
                "Njia ya kuonyesha sauti. Data ya sauti inaonyeshwa kama spektrogramu kisha kukatwa sampuli za sekunde moja.",
                [
                  "Picha ya setilaiti ya shamba la mahindi.",
                  "Alama ya mkopo ya mfanyabiashara.",
                  "Orodha ya alama ya mwalimu.",
                ],
                1
              ),
            },
            {
              t: "01:44",
              qEn: "What is pose estimation, as defined here?",
              qSw: "Ukadiriaji wa mkao ni nini, kama unavyofafanuliwa hapa?",
              ...opt(
                "A technique for tracking key points on the body, so a model can recognise poses such as a tilted head or a raised arm.",
                [
                  "A way to store a customer's PIN.",
                  "A satellite cloud mask.",
                  "A mark the teacher does not check.",
                ],
                "Mbinu ya kufuatilia pointi kuu za mwili, ili modeli itambue mkao kama kichwa kilichoinama au mkono ulioinuliwa.",
                [
                  "Njia ya kuhifadhi PIN ya mteja.",
                  "Kifuniko cha mawingu cha setilaiti.",
                  "Alama mwalimu asiyekagua.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Unsupervised grouping does not need a teacher label. A co-op might group delivery routes. A shop might group busy hours. You choose how many groups, and you check whether the groups mean anything.",
          "Do not use a cluster as a secret score about a person. If the decision affects a loan, a grade, or care, switch to a supervised problem with a lawful purpose and a human review.",
          "Write one baseline: what happens today, with no model, so a later pilot has something honest to beat.",
        ],
        notesSw: [
          "Ukundi usiosimamiwa hauhitaji lebo ya mwalimu. Ushirika unaweza kupanga njia za usafirishaji. Duka linaweza kupanga saa zenye shughuli. Wewe huchagua makundi mangapi, na hukagua kama yana maana.",
          "Usitumie kundi kama alama ya siri kuhusu mtu. Uamuzi ukiathiri mkopo, daraja, au huduma, geukia tatizo linalosimamiwa lenye madhumuni ya kisheria na ukaguzi wa binadamu.",
          "Andika msingi mmoja: kinachotokea leo, bila modeli, ili majaribio ya baadaye yawe na kitu cha uaminifu cha kushinda.",
        ],
        video: {
          id: "JnnaDNNb380",
          titleEn: "Unsupervised Learning: Crash Course AI #6",
          titleSw: "Ujifunzaji usiosimamiwa: Crash Course AI #6",
          channel: "CrashCourse",
          checks: [
            {
              t: "01:22",
              qEn: "Why does the video say unsupervised learning is useful?",
              qSw: "Kwa nini video inasema ujifunzaji usiosimamiwa unafaa?",
              ...opt(
                "Because it does not need labels provided by a teacher. It models the world by guessing from patterns.",
                [
                  "Because a teacher label is required for every row.",
                  "Because it can secretly score a person for a loan.",
                  "Because the groups are always the truth.",
                ],
                "Kwa sababu haihitaji lebo za mwalimu. Huiga ulimwengu kwa kukisia kutoka ruwaza.",
                [
                  "Kwa sababu lebo ya mwalimu inahitajika kwa kila mstari.",
                  "Kwa sababu inaweza kumpa mtu alama ya siri ya mkopo.",
                  "Kwa sababu makundi daima ni ukweli.",
                ],
                0
              ),
            },
            {
              t: "03:45",
              qEn: "What three things does the video say k-means needs?",
              qSw: "Video inasema k-means inahitaji vitu gani vitatu?",
              ...opt(
                "A way to compare observations, a guess of how many clusters are in the data, and a way to calculate averages for each cluster.",
                [
                  "A teacher label, a PIN, and a medical dose.",
                  "Only a slogan and a logo.",
                  "A promise that the groups are people you may score in secret.",
                ],
                "Njia ya kulinganisha uchunguzi, makisio ya makundi mangapi yaliyo kwenye data, na njia ya kukokotoa wastani wa kila kundi.",
                [
                  "Lebo ya mwalimu, PIN, na dozi ya dawa.",
                  "Kauli mbiu na nembo pekee.",
                  "Ahadi kwamba makundi ni watu unaoweza kuwapa alama kwa siri.",
                ],
                3
              ),
            },
            {
              t: "04:16",
              qEn: "What question does the flower example ask the model to predict?",
              qSw: "Mfano wa ua unauliza modeli itabiri swali gani?",
              ...opt(
                "Which flowers should be clustered together because they are the same species.",
                [
                  "Which farmer should be denied a loan.",
                  "Which pupil's grade the cluster replaces.",
                  "Which patient can skip the clinician.",
                ],
                "Maua gani yanapaswa kuwekwa pamoja kwa sababu ni spishi ile ile.",
                [
                  "Mkulima yupi akataliwe mkopo.",
                  "Daraja la mwanafunzi lipi kundi linachukua nafasi.",
                  "Mgonjwa yupi anaweza kumruka mtaalamu.",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "One sector, one decision, one human owner, one baseline.",
          "If you cannot explain the mistake that would hurt a farmer, a patient, a pupil, or a customer, you are not ready to pilot.",
        ],
        notesSw: [
          "Sekta moja, uamuzi mmoja, mmiliki mmoja wa binadamu, msingi mmoja.",
          "Ikiwa huwezi kueleza kosa litakalomdhuru mkulima, mgonjwa, mwanafunzi, au mteja, huuko tayari kujaribu.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "A crop model scores well on the photos used to train it. Is that enough?",
        qSw: "Modeli ya mazao inapata alama nzuri kwa picha zilizotumika kuifunza. Je, hiyo inatosha?",
        ...opt(
          "No. Test on new photos, and remember clouds and look-alike symptoms. A person confirms before anyone sprays or treats.",
          [
            "Yes. The training score is the field result.",
            "Yes, if the photos were taken on a sunny day in one county.",
            "Yes. Clouds do not affect satellite photos.",
          ],
          "Hapana. Jaribu picha mpya, na kumbuka mawingu na dalili zinazofanana. Mtu anathibitisha kabla ya mtu kunyunyizia au kutibu.",
          [
            "Ndiyo. Alama ya mafunzo ndiyo matokeo ya shamba.",
            "Ndiyo, picha zikipigwa siku ya jua katika kaunti moja.",
            "Ndiyo. Mawingu hayaathiri picha za setilaiti.",
          ],
          0
        ),
        answerEn: "No. Test on new photos, and remember clouds and look-alike symptoms. A person confirms before anyone sprays or treats.",
        answerSw: "Hapana. Jaribu picha mpya, na kumbuka mawingu na dalili zinazofanana. Mtu anathibitisha kabla ya mtu kunyunyizia au kutibu.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From the gather tutorial, why move around while recording?",
        qSw: "Kutoka mafunzo ya kukusanya, kwa nini uzunguke unaporekodi?",
        ...opt(
          "To add variety so the class is not a single frozen look.",
          [
            "So the model learns one corner of the room.",
            "So you can skip consent.",
            "So image, audio, and pose become one model.",
          ],
          "Kuongeza utofauti ili kundi lisiwe mwonekano mmoja ulioganda.",
          [
            "Ili modeli ijifunze kona moja ya chumba.",
            "Ili uruke ridhaa.",
            "Ili picha, sauti, na mkao viwe modeli moja.",
          ],
          1
        ),
        answerEn: "To add variety so the class is not a single frozen look.",
        answerSw: "Kuongeza utofauti ili kundi lisiwe mwonekano mmoja ulioganda.",
        restudy: { unit: "specific", videoTitle: "Teachable Machine Tutorial 1: Gather", times: ["00:33"] },
      },
      {
        qEn: "From Crash Course AI #6, what does unsupervised learning not need?",
        qSw: "Kutoka Crash Course AI #6, ujifunzaji usiosimamiwa hauhitaji nini?",
        ...opt(
          "Labels from a teacher.",
          [
            "Any data at all.",
            "A check on whether the groups mean anything.",
            "A human review when the result judges a person.",
          ],
          "Lebo kutoka kwa mwalimu.",
          [
            "Data yoyote.",
            "Ukaguzi kama makundi yana maana.",
            "Ukaguzi wa binadamu matokeo yanapomhukumu mtu.",
          ],
          2
        ),
        answerEn: "Labels from a teacher.",
        answerSw: "Lebo kutoka kwa mwalimu.",
        restudy: { unit: "application", videoTitle: "Unsupervised Learning: Crash Course AI #6", times: ["01:22"] },
      },
      {
        qEn: "When is a cluster the wrong tool?",
        qSw: "Kundi ni zana isiyofaa lini?",
        ...opt(
          "When the result is a hidden judgement about a person, such as a loan, a grade, or care. Those need a clear label, a lawful purpose, and a human decision.",
          [
            "When you are grouping delivery routes and then checking the groups.",
            "When you write down today's baseline.",
            "Whenever the data has no pictures.",
          ],
          "Matokeo yakiwa hukumu iliyofichwa kuhusu mtu, kama mkopo, daraja, au huduma. Hayo yanahitaji lebo wazi, madhumuni ya kisheria, na uamuzi wa binadamu.",
          [
            "Unapopanga njia za usafirishaji kisha kukagua makundi.",
            "Unapoandika msingi wa leo.",
            "Data isipokuwa na picha.",
          ],
          0
        ),
        answerEn: "When the result is a hidden judgement about a person, such as a loan, a grade, or care. Those need a clear label, a lawful purpose, and a human decision.",
        answerSw: "Matokeo yakiwa hukumu iliyofichwa kuhusu mtu, kama mkopo, daraja, au huduma. Hayo yanahitaji lebo wazi, madhumuni ya kisheria, na uamuzi wa binadamu.",
        restudy: { unit: "application", extra: "notes only, no video" },
      },
      {
        qEn: "Who marks a student's work if a tool wrote feedback?",
        qSw: "Nani anaweka alama ya kazi ya mwanafunzi zana ikiandika maoni?",
        ...opt(
          "The teacher. The tool's comment is not the mark.",
          [
            "The tool. The teacher only watches.",
            "An AI detector, with no teacher.",
            "The pupil, if the sentence sounds fluent.",
          ],
          "Mwalimu. Maoni ya zana si alama.",
          [
            "Zana. Mwalimu anatazama tu.",
            "Kigunduzi cha AI, bila mwalimu.",
            "Mwanafunzi, sentensi ikisikika laini.",
          ],
          3
        ),
        answerEn: "The teacher. The tool's comment is not the mark.",
        answerSw: "Mwalimu. Maoni ya zana si alama.",
        restudy: { unit: "basics" },
      },
    ],
  },
  {
    titleEn: "Pilot a community project honestly",
    titleSw: "Jaribu mradi wa jamii kwa uaminifu",
    descEn: "Write the measure before you build. A report is allowed to say it did not help.",
    descSw: "Andika kipimo kabla ya kujenga. Ripoti inaruhusiwa kusema haikusaidia.",
    units: [
      {
        notesEn: [
          "Write the success measure before you build. Example: 'staff finish the form in fewer steps', not 'we used AI'.",
          "Pilot small. Record a baseline. Note who dropped out. A tiny sample cannot prove a county-wide win.",
          "Risk register: wrong guess, leaked data, people without smartphones, English-only prompts, cost of data bundles. Each risk needs an owner.",
          "Budget in Kenyan shillings: airtime, devices, staff time, and what happens when a grant ends.",
        ],
        notesSw: [
          "Andika kipimo cha mafanikio kabla ya kujenga. Mfano: 'wafanyakazi humaliza fomu kwa hatua chache', si 'tulitumia AI'.",
          "Jaribu kidogo. Andika msingi. Tambua nani alijitoa. Sampuli ndogo haiwezi kuthibitisha ushindi wa kaunti nzima.",
          "Daftari la hatari: makisio mabaya, data iliyovuja, watu wasio na simu janja, maagizo ya Kiingereza pekee, gharama ya vifurushi. Kila hatari inahitaji mmiliki.",
          "Bajeti kwa shilingi za Kenya: muda wa maongezi, vifaa, muda wa wafanyakazi, na kinachotokea ruzuku inapoisha.",
        ],
      },
      {
        notesEn: [
          "The error you train against is a loss. Lower loss on the practice set is not the goal if new cases get worse. That trap is overfitting.",
          "The simplest guard in the video: keep the model simpler, and drop features that only add silly correlations.",
          "Report the mistakes you expect, not only the score.",
        ],
        notesSw: [
          "Kosa unalofunza dhidi yake ni hasara (loss). Hasara ndogo kwenye seti ya mazoezi si lengo kesi mpya zikizidi kuwa mbaya. Mtego huo ni overfitting.",
          "Kinga rahisi katika video: weka modeli rahisi, na uache sifa zinazoongeza tu uhusiano wa kipuuzi.",
          "Ripoti makosa unayotarajia, si alama pekee.",
        ],
        video: {
          id: "lgKrup5oi_A",
          titleEn: "Training Neural Networks: Crash Course AI #4",
          titleSw: "Kufunza mitandao ya neva: Crash Course AI #4",
          channel: "CrashCourse",
          checks: [
            {
              t: "05:16",
              qEn: "What does the video call the error when the output is more than one number?",
              qSw: "Video inaita nini kosa matokeo yakiwa zaidi ya nambari moja?",
              ...opt(
                "A loss function.",
                ["A county-wide proof.", "A grant budget.", "A baseline you can skip."],
                "Fomula ya hasara (loss function).",
                ["Uthibitisho wa kaunti nzima.", "Bajeti ya ruzuku.", "Msingi unaoweza kuruka."],
                0
              ),
            },
            {
              t: "10:10",
              qEn: "What kind of problems show whether learning really happened?",
              qSw: "Aina gani ya matatizo yanaonyesha kama kujifunza kulifanyika kweli?",
              ...opt(
                "Problems we have not seen before. Solving only familiar problems is like a test you already studied.",
                [
                  "Only the practice set you trained on.",
                  "A demo for twelve users with no baseline.",
                  "A slogan about using AI.",
                ],
                "Matatizo ambayo hatujayaona. Kutatua matatizo yanayojulikana pekee ni kama mtihani uliosoma tayari.",
                [
                  "Seti ya mazoezi uliyofunza pekee.",
                  "Onyesho la watumiaji kumi na wawili bila msingi.",
                  "Kauli mbiu kuhusu kutumia AI.",
                ],
                1
              ),
            },
            {
              t: "11:30",
              qEn: "What does the video call the danger of fitting silly correlations, and what is the easiest prevention it names?",
              qSw: "Video inaita nini hatari ya kulingana na uhusiano wa kipuuzi, na kinga rahisi inayotaja ni ipi?",
              ...opt(
                "Overfitting. The easiest prevention named is to keep the neural network simple.",
                [
                  "Underfitting. The easiest prevention is a bigger grant.",
                  "Hallucination. The easiest prevention is a longer demo.",
                  "Bias. The easiest prevention is to hide the mistakes.",
                ],
                "Overfitting. Kinga rahisi iliyotajwa ni kuweka mtandao wa neva rahisi.",
                [
                  "Underfitting. Kinga rahisi ni ruzuku kubwa.",
                  "Kubuni majibu. Kinga rahisi ni onyesho refu.",
                  "Upendeleo. Kinga rahisi ni kuficha makosa.",
                ],
                2
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "Ask the video's closing question of your own idea: is this even a place where we want AI?",
          "Automation can replace tasks, not only speed them up. Say who is affected.",
          "Put benefits next to costs: money, errors, bias, and trust. If you cannot name the cost, you are not ready to report back to the community.",
        ],
        notesSw: [
          "Uliza swali la mwisho la video kwa wazo lako: je hapa ni mahali tunataka AI?",
          "Otomatiki inaweza kuchukua nafasi ya kazi, si kuziharakisha tu. Sema nani anaathirika.",
          "Weka faida kando ya gharama: pesa, makosa, upendeleo, na uaminifu. Ikiwa huwezi kutaja gharama, huuko tayari kuripoti kwa jamii.",
        ],
        video: {
          id: "T7Rv4tGRlfc",
          titleEn: "The Future of Artificial Intelligence: Crash Course AI #20",
          titleSw: "Mustakabali wa akili bandia: Crash Course AI #20",
          channel: "CrashCourse",
          checks: [
            {
              t: "06:48",
              qEn: "Besides enhancing human work, what else can automation do, according to the video?",
              qSw: "Kando na kuboresha kazi ya binadamu, otomatiki inaweza kufanya nini kingine, kwa video?",
              ...opt(
                "It can replace humans in many industries.",
                [
                  "It can only speed up work and never replace anyone.",
                  "It removes every cost of deployment.",
                  "It removes bias by being automatic.",
                ],
                "Inaweza kuchukua nafasi ya binadamu katika viwanda vingi.",
                [
                  "Inaweza tu kuharakisha kazi na kutomchukua mtu nafasi.",
                  "Huondoa kila gharama ya kuweka kazini.",
                  "Huondoa upendeleo kwa kuwa otomatiki.",
                ],
                0
              ),
            },
            {
              t: "07:41",
              qEn: "What tradeoff does the video say we have to consider about deploying AI widely?",
              qSw: "Video inasema ni maafikiano gani lazima tuzingatie kuhusu kuweka AI kazini kwa upana?",
              ...opt(
                "The benefits of massive AI deployment alongside the costs. It also warns that systems often pick up biases you may not want.",
                [
                  "Only the benefits. Costs can wait until the grant ends.",
                  "Only the demo. Bias is out of scope.",
                  "A utopia where replacement cannot happen.",
                ],
                "Faida za kuweka AI kazini kwa wingi pamoja na gharama. Pia inaonya mifumo mara nyingi huchukua upendeleo usioutaka.",
                [
                  "Faida pekee. Gharama zinaweza kungoja ruzuku iishe.",
                  "Onyesho pekee. Upendeleo uko nje ya wigo.",
                  "Ndoto ambapo kuchukua nafasi hakuwezi kutokea.",
                ],
                3
              ),
            },
            {
              t: "09:37",
              qEn: "What question does the video ask before helping with AI?",
              qSw: "Video inauliza swali gani kabla ya kusaidia kwa AI?",
              ...opt(
                "Is this even a situation where we want AI to help humans?",
                [
                  "How do we hide the people who are replaced?",
                  "Can twelve users prove a county result?",
                  "Which slogan fits the poster?",
                ],
                "Je hii ni hali tunataka AI iwasaidie binadamu?",
                [
                  "Tuwaficheje watu waliochukuliwa nafasi?",
                  "Watumiaji kumi na wawili wanaweza kuthibitisha matokeo ya kaunti?",
                  "Kauli mbiu ipi inafaa bango?",
                ],
                1
              ),
            },
          ],
        },
      },
      {
        notesEn: [
          "A pilot report is allowed to say 'it did not help'. That is a successful evaluation.",
          "Hand the community the measure, the risks, and the cost. Do not hand them a demo only.",
        ],
        notesSw: [
          "Ripoti ya majaribio inaruhusiwa kusema 'haikusaidia'. Hiyo ni tathmini iliyofanikiwa.",
          "Ipe jamii kipimo, hatari, na gharama. Usiwape onyesho pekee.",
        ],
      },
    ],
    quiz: [
      {
        qEn: "What must you write before you build a pilot?",
        qSw: "Lazima uandike nini kabla ya kujenga majaribio?",
        ...opt(
          "The success measure, and a baseline of how the work is done today.",
          [
            "Only the sentence 'we used AI'.",
            "A county-wide claim from twelve users.",
            "The demo script, and nothing about cost.",
          ],
          "Kipimo cha mafanikio, na msingi wa jinsi kazi inafanywa leo.",
          [
            "Sentensi 'tulitumia AI' pekee.",
            "Dai la kaunti nzima kutoka watumiaji kumi na wawili.",
            "Hati ya onyesho, na hakuna kuhusu gharama.",
          ],
          0
        ),
        answerEn: "The success measure, and a baseline of how the work is done today.",
        answerSw: "Kipimo cha mafanikio, na msingi wa jinsi kazi inafanywa leo.",
        restudy: { unit: "basics" },
      },
      {
        qEn: "From Crash Course AI #4, what is overfitting?",
        qSw: "Kutoka Crash Course AI #4, overfitting ni nini?",
        ...opt(
          "The model fits silly correlations in the training data and then makes strange errors. The video's easiest prevention is a simpler network.",
          [
            "Testing on problems you have not seen.",
            "Writing the success measure before you build.",
            "Saying the pilot did not help.",
          ],
          "Modeli hulingana na uhusiano wa kipuuzi katika data ya mafunzo kisha hufanya makosa ya ajabu. Kinga rahisi ya video ni mtandao rahisi zaidi.",
          [
            "Kujaribu matatizo hujayaona.",
            "Kuandika kipimo cha mafanikio kabla ya kujenga.",
            "Kusema majaribio hayakusaidia.",
          ],
          1
        ),
        answerEn: "The model fits silly correlations in the training data and then makes strange errors. The video's easiest prevention is a simpler network.",
        answerSw: "Modeli hulingana na uhusiano wa kipuuzi katika data ya mafunzo kisha hufanya makosa ya ajabu. Kinga rahisi ya video ni mtandao rahisi zaidi.",
        restudy: {
          unit: "specific",
          videoTitle: "Training Neural Networks: Crash Course AI #4",
          times: ["11:28"],
        },
      },
      {
        qEn: "Why are unseen cases part of an honest pilot?",
        qSw: "Kwa nini kesi ambazo hazijaonekana ni sehemu ya majaribio ya uaminifu?",
        ...opt(
          "Familiar cases are too easy. New cases show whether anything was learned.",
          [
            "Unseen cases are optional if the practice loss fell.",
            "A demo on the training file is enough for the county.",
            "Unseen cases only matter after the grant ends.",
          ],
          "Kesi zinazojulikana ni rahisi sana. Kesi mpya zinaonyesha kama kuna kilichojifunzwa.",
          [
            "Kesi zisizoonekana si lazima hasara ya mazoezi ikishuka.",
            "Onyesho la faili ya mafunzo linatosha kwa kaunti.",
            "Kesi zisizoonekana zina maana ruzuku ikisha tu.",
          ],
          2
        ),
        answerEn: "Familiar cases are too easy. New cases show whether anything was learned.",
        answerSw: "Kesi zinazojulikana ni rahisi sana. Kesi mpya zinaonyesha kama kuna kilichojifunzwa.",
        restudy: {
          unit: "specific",
          videoTitle: "Training Neural Networks: Crash Course AI #4",
          times: ["10:10"],
        },
      },
      {
        qEn: "From Crash Course AI #20, name one cost of treating automation as only a helper.",
        qSw: "Kutoka Crash Course AI #20, taja gharama moja ya kuichukulia otomatiki kuwa msaidizi tu.",
        ...opt(
          "It can replace people, not only enhance their work. Deployment also has costs and can carry bias.",
          [
            "There is no cost if the poster says 'helper'.",
            "Replacement is impossible once you call it enhancement.",
            "Bias disappears when the tool is automatic.",
          ],
          "Inaweza kuchukua nafasi ya watu, si kuboresha kazi yao tu. Kuweka kazini pia kuna gharama na kunaweza kubeba upendeleo.",
          [
            "Hakuna gharama bango likisema 'msaidizi'.",
            "Kuchukua nafasi haiwezekani ukiiita uboreshaji.",
            "Upendeleo hupotea zana ikiwa otomatiki.",
          ],
          0
        ),
        answerEn: "It can replace people, not only enhance their work. Deployment also has costs and can carry bias.",
        answerSw: "Inaweza kuchukua nafasi ya watu, si kuboresha kazi yao tu. Kuweka kazini pia kuna gharama na kunaweza kubeba upendeleo.",
        restudy: {
          unit: "application",
          videoTitle: "The Future of Artificial Intelligence: Crash Course AI #20",
          times: ["06:48", "07:41"],
        },
      },
      {
        qEn: "Your pilot has 12 users and no baseline. Can you claim the tool 'works for the county'?",
        qSw: "Majaribio yako yana watumiaji 12 na hakuna msingi. Je, unaweza kudai zana 'inafanya kazi kwa kaunti'?",
        ...opt(
          "No. Say what you observed, who was missing, and what you did not prove.",
          [
            "Yes. Twelve users are a county.",
            "Yes, if the demo looked smooth.",
            "Yes, if you spent the grant.",
          ],
          "Hapana. Sema ulichokiona, nani alikosekana, na usichothibitisha.",
          [
            "Ndiyo. Watumiaji kumi na wawili ni kaunti.",
            "Ndiyo, onyesho likionekana laini.",
            "Ndiyo, ukitumia ruzuku.",
          ],
          3
        ),
        answerEn: "No. Say what you observed, who was missing, and what you did not prove.",
        answerSw: "Hapana. Sema ulichokiona, nani alikosekana, na usichothibitisha.",
        restudy: { unit: "basics" },
      },
    ],
  },
];
