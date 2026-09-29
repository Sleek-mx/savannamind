import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/** Module 0 Foundations — intermediate track (skilled practitioner). */
export const m0IntermediateUnits: CurriculumUnit[] = [
  {
    id: "m0-i-u1",
    titleEn: "The machine learning lifecycle",
    titleSw: "Mzunguko wa maisha wa ujifunzaji wa mashine",
    cards: [
      note(
        "From a question to a working model",
        "Kutoka swali hadi modeli inayofanya kazi",
        `Machine learning is a way of building software that learns patterns from examples, instead of following rules that a person wrote line by line. The pattern it learns is stored in a model. A model is a set of numbers that turns an input (for example, a member's loan history) into an output (for example, "likely to miss a payment" or "likely to repay").

The machine learning lifecycle is the whole life of a model, from the first question to the day it is switched off. It has seven stages:

- Problem: decide exactly what you want to predict, for whom, and what a person will do with the answer.
- Data: collect examples from the past that show the pattern, lawfully and with care.
- Train: let a computer adjust the model's numbers until its outputs match the examples as closely as possible.
- Evaluate: test the model on examples it has never seen, and measure how often and how badly it is wrong.
- Deploy: put the model to work inside a real process, with people who know how to use it.
- Monitor: keep checking its outputs against what really happens, because the world changes.
- Retire: switch the model off, or replace it, when it no longer helps or is no longer safe.

Why does this matter? Many people think machine learning is only the training step. In practice, most failures happen before training (a badly chosen problem or poor data) or after it (nobody watching the model once it is in use). The lifecycle is a loop, not a straight line: what you learn while monitoring sends you back to fix the problem, the data or the model.`,
        `Ujifunzaji wa mashine ni njia ya kujenga programu inayojifunza mifumo kutoka kwa mifano, badala ya kufuata sheria ambazo mtu aliandika moja baada ya nyingine. Kile inachojifunza huhifadhiwa ndani ya modeli (model). Modeli ni seti ya namba zinazogeuza ingizo (kwa mfano, historia ya mikopo ya mwanachama) kuwa tokeo (kwa mfano, "huenda akachelewa kulipa" au "huenda akalipa").

Mzunguko wa maisha wa ujifunzaji wa mashine ni maisha yote ya modeli, tangu swali la kwanza hadi siku inapozimwa. Una hatua saba:

- Tatizo: amua hasa unataka kutabiri nini, kwa ajili ya nani, na mtu atafanya nini na jibu.
- Data: kusanya mifano ya zamani inayoonyesha mfumo huo, kwa njia halali na kwa uangalifu.
- Kufunza: acha kompyuta irekebishe namba za modeli hadi matokeo yake yakaribiane sana na mifano.
- Tathmini: jaribu modeli kwa mifano ambayo haijawahi kuiona, na upime inakosea mara ngapi na kwa kiasi gani.
- Kuweka kazini (deployment): tumia modeli ndani ya kazi halisi, pamoja na watu wanaojua kuitumia.
- Kufuatilia: endelea kulinganisha matokeo yake na kinachotokea kweli, kwa sababu dunia hubadilika.
- Kustaafisha: zima modeli, au weka nyingine mahali pake, inapoacha kusaidia au inapokuwa si salama tena.

Kwa nini hili ni muhimu? Watu wengi hudhani ujifunzaji wa mashine ni hatua ya mafunzo pekee. Kwa kweli, makosa mengi hutokea kabla ya mafunzo (tatizo lililochaguliwa vibaya au data duni) au baada yake (hakuna anayeifuatilia modeli ikishaanza kutumika). Mzunguko huu ni duara, si mstari ulionyooka: unachojifunza wakati wa kufuatilia hukurudisha kurekebisha tatizo, data au modeli.`,
        "/learn/content/m0/neural-lifecycle.jpg"
      ),
      reveal([
        {
          termEn: "Model",
          termSw: "Modeli",
          defEn: "A set of learned numbers that turns an input into an output, such as a risk level or a category.",
          defSw: "Seti ya namba zilizojifunzwa zinazogeuza ingizo kuwa tokeo, kama kiwango cha hatari au kundi.",
        },
        {
          termEn: "Training",
          termSw: "Mafunzo",
          defEn: "The step where a computer adjusts the model's numbers so its outputs match past examples.",
          defSw: "Hatua ambapo kompyuta hurekebisha namba za modeli ili matokeo yake yalingane na mifano ya zamani.",
        },
        {
          termEn: "Evaluation",
          termSw: "Tathmini",
          defEn: "Testing a model on examples it has never seen and measuring its mistakes.",
          defSw: "Kujaribu modeli kwa mifano ambayo haijawahi kuiona na kupima makosa yake.",
        },
        {
          termEn: "Deployment",
          termSw: "Kuweka kazini (deployment)",
          defEn: "Putting a model to work inside a real process, with people, rules and records around it.",
          defSw: "Kutumia modeli ndani ya kazi halisi, ikiwa imezungukwa na watu, kanuni na kumbukumbu.",
        },
        {
          termEn: "Monitoring",
          termSw: "Kufuatilia",
          defEn: "Regularly comparing a deployed model's outputs with what really happened, to catch decline early.",
          defSw: "Kulinganisha mara kwa mara matokeo ya modeli iliyo kazini na kilichotokea kweli, ili kugundua kushuka mapema.",
        },
      ]),
      note(
        "Worked example: a SACCO and loan defaults",
        "Mfano kamili: SACCO na mikopo isiyolipwa",
        `Imagine Umoja SACCO in Nyeri, a fictional SACCO with 3,200 members. Over five years it gave 4,800 loans. Of these, 432 loans were not repaid within 90 days of the due date. That is 432 out of 4,800, or 9%. The board says: "Let us use AI to predict defaults."

Problem. The first idea is "predict who will default so we can refuse them". That is risky: it can shut out members who had one bad season. After discussion, the board chooses a better question: "Each week, list members whose current loan may fall behind in the next 60 days, so a loans officer can call them early and offer rescheduling." The output is a short list. A person makes the decision.

Data. The SACCO uses loan size, loan term, past repayment record, savings balance and months of membership. It leaves out religion, ethnicity and anything members did not agree to share.

Train. The model learns from the loans given in 2020 to 2023: 3,900 loans.

Evaluate. It is tested on the 900 loans from 2024, which it never saw. Of those 900, 81 actually fell behind (9%). The model put 120 loans on its list, and 54 of them really fell behind. So it caught 54 of the 81 (two out of three), and 66 of the 120 people called were fine. The board decides that calling 120 members to reach 54 who need help is worth the officers' time.

Deploy. Every Monday, two loans officers receive the list. They call, listen, and decide. They record what they did.

Monitor. Each month someone compares the list with who actually fell behind. After a sharp rise in fuel prices, the pattern may shift, and the numbers will show it.

Retire. If the SACCO changes its loan products completely, the old model is retrained or switched off.

Where it could go wrong: if the team had tested the model on the same 2020 to 2023 loans it learned from, the score would have looked much better than it really was. You will see why in unit 6.`,
        `Fikiria Umoja SACCO iliyoko Nyeri, SACCO ya kubuni yenye wanachama 3,200. Kwa miaka mitano ilitoa mikopo 4,800. Kati ya hiyo, mikopo 432 haikulipwa ndani ya siku 90 baada ya tarehe ya mwisho. Hiyo ni 432 kati ya 4,800, au asilimia 9. Bodi inasema: "Tutumie AI kutabiri mikopo isiyolipwa."

Tatizo. Wazo la kwanza ni "tabiri nani hatalipa ili tumkatalie". Hilo ni hatari: linaweza kuwafungia nje wanachama waliopata msimu mmoja mbaya. Baada ya majadiliano, bodi inachagua swali bora: "Kila wiki, orodhesha wanachama ambao mkopo wao wa sasa unaweza kuchelewa katika siku 60 zijazo, ili afisa wa mikopo awapigie simu mapema na kuwapa nafasi ya kupanga upya malipo." Tokeo ni orodha fupi. Mtu ndiye anayefanya uamuzi.

Data. SACCO inatumia ukubwa wa mkopo, muda wa mkopo, rekodi ya malipo ya zamani, akiba na miezi ya uanachama. Inaacha dini, kabila na chochote ambacho wanachama hawakukubali kushiriki.

Kufunza. Modeli inajifunza kutoka kwa mikopo iliyotolewa mwaka 2020 hadi 2023: mikopo 3,900.

Tathmini. Inajaribiwa kwa mikopo 900 ya mwaka 2024, ambayo haikuwahi kuiona. Kati ya hiyo 900, mikopo 81 ilichelewa kweli (asilimia 9). Modeli iliweka mikopo 120 kwenye orodha yake, na 54 kati yake ilichelewa kweli. Kwa hiyo ilinasa 54 kati ya 81 (mbili kati ya tatu), na watu 66 kati ya 120 waliopigiwa simu hawakuwa na tatizo. Bodi inaamua kwamba kupiga simu kwa wanachama 120 ili kuwafikia 54 wanaohitaji msaada kunastahili muda wa maafisa.

Kuweka kazini. Kila Jumatatu, maafisa wawili wa mikopo hupokea orodha. Wanapiga simu, wanasikiliza, na wanaamua. Wanaandika walichofanya.

Kufuatilia. Kila mwezi mtu analinganisha orodha na walioshindwa kulipa kweli. Bei ya mafuta ikipanda ghafla, mfumo unaweza kubadilika, na namba zitaonyesha hivyo.

Kustaafisha. SACCO ikibadilisha kabisa aina za mikopo yake, modeli ya zamani hufunzwa upya au huzimwa.

Palipoweza kuharibika: kama timu ingejaribu modeli kwa mikopo ile ile ya 2020 hadi 2023 iliyojifunzia, alama ingeonekana bora zaidi kuliko ilivyo kweli. Utaona sababu katika somo la 6.`
      ),
      quiz(
        "Which order of stages is correct for the SACCO project?",
        "Ni mpangilio upi wa hatua ulio sahihi kwa mradi wa SACCO?",
        [
          "Data, problem, train, deploy, evaluate, monitor, retire",
          "Problem, data, train, evaluate, deploy, monitor, retire",
          "Problem, train, data, evaluate, monitor, deploy, retire",
          "Data, train, evaluate, deploy, problem, monitor, retire",
        ],
        [
          "Data, tatizo, kufunza, kuweka kazini, tathmini, kufuatilia, kustaafisha",
          "Tatizo, data, kufunza, tathmini, kuweka kazini, kufuatilia, kustaafisha",
          "Tatizo, kufunza, data, tathmini, kufuatilia, kuweka kazini, kustaafisha",
          "Data, kufunza, tathmini, kuweka kazini, tatizo, kufuatilia, kustaafisha",
        ],
        1,
        "You must know the problem before you know which data to collect, and you must evaluate before you deploy, or members pay for the model's untested mistakes. Monitoring only makes sense once the model is in use. Starting with data is a common mistake: people collect whatever they have and then look for a question, which often leads to a model nobody needs.",
        "Lazima ujue tatizo kabla ya kujua data ipi ya kukusanya, na lazima ufanye tathmini kabla ya kuweka kazini, la sivyo wanachama ndio watakaolipia makosa ya modeli ambayo haijajaribiwa. Kufuatilia kuna maana tu modeli ikishaanza kutumika. Kuanza na data ni kosa la kawaida: watu hukusanya chochote walicho nacho kisha wanatafuta swali, na mara nyingi hupata modeli ambayo hakuna anayeihitaji."
      ),
      scenario({
        titleEn: "Scenario: the list stops making sense",
        titleSw: "Hali halisi: orodha inaanza kuchanganya",
        situationEn:
          "Six months after deployment, Umoja SACCO launches a new daily-repayment loan for boda boda riders. The loans officers notice that the Monday list now flags many boda riders, but when they call, almost all of these riders are paying on time.",
        situationSw:
          "Miezi sita baada ya kuweka kazini, Umoja SACCO inazindua mkopo mpya wa malipo ya kila siku kwa waendeshaji wa boda boda. Maafisa wa mikopo wanaona kwamba orodha ya Jumatatu sasa inawaweka waendeshaji wengi wa boda, lakini wakipiga simu, karibu wote wanalipa kwa wakati.",
        questionEn: "What is the best next step?",
        questionSw: "Hatua ipi bora inayofuata?",
        optionsEn: [
          "Keep using the list as it is. The model passed its test, so it must still be right.",
          "Compare recent flags with real repayments, report the problem, and retrain or pause the model for the new loan type.",
          "Delete the model and decide never to use data again.",
          "Quietly tell officers to skip boda riders on the list and change nothing else.",
        ],
        optionsSw: [
          "Endelea kutumia orodha kama ilivyo. Modeli ilifaulu jaribio lake, kwa hiyo lazima bado iko sahihi.",
          "Linganisha orodha za karibuni na malipo halisi, ripoti tatizo, kisha funza upya modeli au isimamishe kwa aina hii mpya ya mkopo.",
          "Futa modeli na uamue kutotumia data tena kamwe.",
          "Waambie maafisa kimya kimya waruke waendeshaji wa boda kwenye orodha, bila kubadilisha kitu kingine.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A test result describes the past. The new loan product changed the pattern, and the model never saw examples of it.",
          "Correct. This is the monitor stage doing its job: measure, report, and send the model back to the data and training stages.",
          "Too drastic. The model helped before; the problem is one new product. Fix it, do not throw away the whole approach.",
          "This hides the problem. Nobody learns why it happened, the model stays wrong, and other mistakes may go unnoticed.",
        ],
        hintsSw: [
          "Tokeo la jaribio linaeleza yaliyopita. Aina mpya ya mkopo imebadilisha mfumo, na modeli haikuwahi kuona mifano yake.",
          "Sahihi. Hii ndiyo hatua ya kufuatilia ikifanya kazi yake: pima, ripoti, kisha rudisha modeli kwenye hatua za data na mafunzo.",
          "Ni hatua kali mno. Modeli ilisaidia hapo awali; tatizo ni aina moja mpya ya mkopo. Irekebishe, usitupe mbinu nzima.",
          "Hii inaficha tatizo. Hakuna anayejifunza sababu yake, modeli inabaki na kosa, na makosa mengine yanaweza kupita bila kuonekana.",
        ],
        explainEn:
          "Models learn from the past. When the world changes (a new product, a price shock, a drought), monitoring is how you notice. The fix goes back around the loop: new data, retraining, a fresh evaluation, then redeployment.",
        explainSw:
          "Modeli hujifunza kutoka kwa yaliyopita. Dunia ikibadilika (bidhaa mpya, mshtuko wa bei, ukame), kufuatilia ndiko kunakokusaidia kugundua. Suluhisho linarudi kwenye duara: data mpya, mafunzo upya, tathmini mpya, kisha kuweka kazini tena.",
      }),
      quiz(
        "Which question belongs to the monitoring stage rather than the evaluation stage?",
        "Ni swali lipi ni la hatua ya kufuatilia, si la hatua ya tathmini?",
        [
          "How well does the model do on the 900 loans from 2024 that it never saw?",
          "Which columns should we collect from the loan records?",
          "Do this month's flags still match the members who actually fall behind?",
          "Should the output be a list for officers or an automatic refusal?",
        ],
        [
          "Modeli inafanya vizuri kiasi gani kwa mikopo 900 ya 2024 ambayo haikuwahi kuiona?",
          "Tukusanye safu zipi kutoka kwenye rekodi za mikopo?",
          "Je, orodha za mwezi huu bado zinalingana na wanachama wanaochelewa kulipa kweli?",
          "Tokeo liwe orodha kwa maafisa au kukataa kiotomatiki?",
        ],
        2,
        "Evaluation happens once, before deployment, on held-back past data. Monitoring happens again and again after deployment, on live results. Choosing columns is the data stage, and deciding what the output is used for is the problem stage.",
        "Tathmini hufanyika mara moja, kabla ya kuweka kazini, kwa data ya zamani iliyowekwa kando. Kufuatilia hufanyika tena na tena baada ya kuweka kazini, kwa matokeo halisi. Kuchagua safu ni hatua ya data, na kuamua tokeo litatumikaje ni hatua ya tatizo."
      ),
      note(
        "Try it: map a lifecycle on paper",
        "Jaribu: chora mzunguko kwenye karatasi",
        `Take a sheet of paper and draw seven boxes in a circle: problem, data, train, evaluate, deploy, monitor, retire.

Now pick this example: a school canteen wants to predict how many plates of githeri to cook each day, so less food is wasted. In each box, write one sentence:

- Problem: what number, for which day, and who uses it?
- Data: what past records would help? (For example, daily plates sold, day of the week, exam weeks, rainy days.)
- Train and evaluate: which weeks would you learn from, and which later weeks would you test on?
- Deploy: who sees the number, and when? Can the cook change it?
- Monitor: what would tell you the prediction has gone wrong?
- Retire: when would you stop using it?

Carry forward:
- A model is only one part of a longer process.
- The problem you choose decides everything that follows. Unit 2 shows how to frame it well.`,
        `Chukua karatasi na uchore masanduku saba kwa mduara: tatizo, data, kufunza, tathmini, kuweka kazini, kufuatilia, kustaafisha.

Sasa chagua mfano huu: kantini ya shule inataka kutabiri sahani ngapi za githeri zipikwe kila siku, ili chakula kidogo kipotee. Katika kila sanduku, andika sentensi moja:

- Tatizo: namba ipi, kwa siku ipi, na nani ataitumia?
- Data: rekodi zipi za zamani zingesaidia? (Kwa mfano, sahani zilizouzwa kila siku, siku ya wiki, wiki za mitihani, siku za mvua.)
- Kufunza na tathmini: ungejifunza kutoka wiki zipi, na ungejaribu kwa wiki zipi za baadaye?
- Kuweka kazini: nani anaona namba, na lini? Je, mpishi anaweza kuibadilisha?
- Kufuatilia: nini kingekuonyesha kwamba utabiri umeanza kukosea?
- Kustaafisha: ungeacha kuitumia lini?

Kumbuka:
- Modeli ni sehemu moja tu ya mchakato mrefu.
- Tatizo unalochagua huamua kila kitu kinachofuata. Somo la 2 linaonyesha jinsi ya kulieleza vizuri.`
      ),
    ],
  },
  {
    id: "m0-i-u2",
    titleEn: "Framing a problem",
    titleSw: "Kueleza tatizo kwa usahihi",
    cards: [
      note(
        "Turning a need into a question a model can answer",
        "Kugeuza hitaji kuwa swali ambalo modeli inaweza kujibu",
        `Framing a problem means turning a real need ("we waste too much milk", "farmers lose crops") into a precise question with a clear output. A good frame says what goes in, what comes out, who uses the output and what they will do with it.

Most problems fit one of four kinds:

- Classification: the output is a category chosen from a fixed list. "Is this leaf healthy, or damaged by armyworm?"
- Regression: the output is a number on a scale. "How many passengers will board at this stage tomorrow between 7 and 8 am?"
- Clustering: there are no right answers in the data; the computer finds groups of similar items. "Which chama members have similar saving habits?"
- Generation: the output is new text, images or sound. "Draft a letter to parents in Kiswahili."

Why the kind matters: it decides what data you need. Classification and regression need labels, which are the correct answers for past examples, written down by people. Clustering does not need labels, but a person must decide whether the groups mean anything. Generation needs a person to check every output before it is used.

Sometimes the right frame is "do not use AI". Skip machine learning when a simple, published rule already gives the answer; when you have no past examples; when a wrong answer would be very harmful and nobody can check it; or when the real problem is something else, such as a broken road or a price that is too high.`,
        `Kueleza tatizo kunamaanisha kugeuza hitaji halisi ("tunapoteza maziwa mengi", "wakulima wanapoteza mazao") kuwa swali mahususi lenye tokeo wazi. Maelezo mazuri yanasema nini kinaingia, nini kinatoka, nani anatumia tokeo na atafanya nini nalo.

Matatizo mengi huangukia katika aina moja kati ya nne:

- Uainishaji (classification): tokeo ni kundi linalochaguliwa kutoka orodha maalum. "Je, jani hili ni zima, au limeharibiwa na viwavijeshi?"
- Ukadiriaji wa namba (regression): tokeo ni namba kwenye kipimo. "Abiria wangapi wataingia kwenye kituo hiki kesho kati ya saa moja na saa mbili asubuhi?"
- Upangaji wa makundi (clustering): data haina majibu sahihi; kompyuta inatafuta makundi ya vitu vinavyofanana. "Ni wanachama gani wa chama wenye tabia zinazofanana za kuweka akiba?"
- Uzalishaji wa maudhui (generation): tokeo ni maandishi, picha au sauti mpya. "Andaa rasimu ya barua kwa wazazi kwa Kiswahili."

Kwa nini aina ni muhimu: inaamua data unayohitaji. Uainishaji na ukadiriaji wa namba huhitaji lebo, yaani majibu sahihi ya mifano ya zamani, yaliyoandikwa na watu. Upangaji wa makundi hauhitaji lebo, lakini mtu lazima aamue kama makundi hayo yana maana. Uzalishaji wa maudhui unahitaji mtu akague kila tokeo kabla ya kutumika.

Wakati mwingine maelezo sahihi ni "usitumie AI". Acha ujifunzaji wa mashine wakati kanuni rahisi iliyochapishwa tayari inatoa jibu; wakati huna mifano ya zamani; wakati jibu la kosa lingeleta madhara makubwa na hakuna anayeweza kulikagua; au wakati tatizo halisi ni jambo lingine, kama barabara mbovu au bei iliyo juu mno.`
      ),
      reveal([
        {
          termEn: "Classification",
          termSw: "Uainishaji (classification)",
          defEn: "Predicting a category from a fixed list, such as healthy or diseased.",
          defSw: "Kutabiri kundi kutoka orodha maalum, kama zima au lenye ugonjwa.",
        },
        {
          termEn: "Regression",
          termSw: "Ukadiriaji wa namba (regression)",
          defEn: "Predicting a number, such as litres of milk or passengers per hour.",
          defSw: "Kutabiri namba, kama lita za maziwa au abiria kwa saa.",
        },
        {
          termEn: "Clustering",
          termSw: "Upangaji wa makundi (clustering)",
          defEn: "Finding groups of similar items when the data has no correct answers attached.",
          defSw: "Kutafuta makundi ya vitu vinavyofanana wakati data haina majibu sahihi yaliyoambatishwa.",
        },
        {
          termEn: "Generation",
          termSw: "Uzalishaji wa maudhui (generation)",
          defEn: "Producing new text, images or audio, which a person must check.",
          defSw: "Kutoa maandishi, picha au sauti mpya, ambayo mtu lazima aikague.",
        },
        {
          termEn: "Label",
          termSw: "Lebo",
          defEn: "The correct answer attached to a past example, written by a person.",
          defSw: "Jibu sahihi lililoambatishwa kwa mfano wa zamani, lililoandikwa na mtu.",
        },
      ]),
      note(
        "Worked example: six Kenyan problems, framed",
        "Mfano kamili: matatizo sita ya Kenya, yameelezwa",
        `Here are six needs, and how a practitioner frames each one. Each frame follows one sentence pattern: "Given these inputs, predict this output, so that this person can take this action."

- An agrovet in Kirinyaga: "Given a photo of a maize leaf, predict one of: healthy, armyworm damage, other problem, so that the attendant can advise the farmer or send them to the afisa wa ugani." Classification. Labels: photos checked by an expert.
- A matatu SACCO in Thika: "Given the day, time, weather and last month's counts, predict the number of passengers at the stage in each hour, so that the manager can plan vehicles." Regression. Labels: past passenger counts.
- A chama of 45 members in Machakos: "Given each member's monthly contributions over two years, find groups with similar habits, so that the committee can design two or three savings products." Clustering. No labels; the committee must judge whether the groups make sense.
- A primary school in Kilifi: "Given the event details, draft a Kiswahili letter to parents about sports day, so that the teacher can edit and send it." Generation. The teacher checks every word.
- A county revenue office: "Which permit fee category does this trader fall into?" This is not a machine learning problem. The county's fee schedule is a published table. A lookup table or a simple form gives the exact answer, and a model could only add mistakes.
- A dispensary in Turkana: "Which patients in the queue are most urgent?" A classification model could, at most, support a trained nurse. Triage is a safety decision; the nurse decides, and any tool must be tested very carefully first.

Where framing goes wrong: "predict milk" is too vague. Whose milk? Per cow or per farm? Tomorrow or next month? In litres? A frame is only finished when someone could tell, afterwards, whether the prediction was right.`,
        `Haya ni mahitaji sita, na jinsi mtaalamu anavyoeleza kila moja. Kila maelezo yanafuata sentensi moja: "Kwa kupewa maingizo haya, tabiri tokeo hili, ili mtu huyu achukue hatua hii."

- Duka la agrovet Kirinyaga: "Kwa kupewa picha ya jani la mahindi, tabiri moja kati ya: zima, limeharibiwa na viwavijeshi, tatizo jingine, ili muuzaji amshauri mkulima au amtume kwa afisa wa ugani." Uainishaji. Lebo: picha zilizokaguliwa na mtaalamu.
- SACCO ya matatu Thika: "Kwa kupewa siku, saa, hali ya hewa na hesabu za mwezi uliopita, tabiri idadi ya abiria kituoni kila saa, ili meneja apange magari." Ukadiriaji wa namba. Lebo: hesabu za abiria za zamani.
- Chama cha wanachama 45 Machakos: "Kwa kupewa michango ya kila mwezi ya kila mwanachama kwa miaka miwili, tafuta makundi yenye tabia zinazofanana, ili kamati ibuni aina mbili au tatu za akiba." Upangaji wa makundi. Hakuna lebo; kamati lazima iamue kama makundi yana maana.
- Shule ya msingi Kilifi: "Kwa kupewa maelezo ya tukio, andaa rasimu ya barua ya Kiswahili kwa wazazi kuhusu siku ya michezo, ili mwalimu aihariri na kuituma." Uzalishaji wa maudhui. Mwalimu anakagua kila neno.
- Ofisi ya mapato ya kaunti: "Mfanyabiashara huyu yuko katika kundi gani la ada ya kibali?" Hili si tatizo la ujifunzaji wa mashine. Ratiba ya ada ya kaunti ni jedwali lililochapishwa. Jedwali la kutafuta au fomu rahisi hutoa jibu kamili, na modeli ingeongeza makosa tu.
- Zahanati Turkana: "Ni wagonjwa gani kwenye foleni walio na dharura zaidi?" Modeli ya uainishaji ingeweza, kwa kiwango cha juu kabisa, kumsaidia muuguzi aliyefunzwa. Kupanga wagonjwa kwa dharura ni uamuzi wa usalama; muuguzi ndiye anayeamua, na kifaa chochote lazima kijaribiwe kwa uangalifu mkubwa kwanza.

Maelezo yanapoharibika: "tabiri maziwa" hakueleweki. Maziwa ya nani? Kwa ng'ombe au kwa shamba? Kesho au mwezi ujao? Kwa lita? Maelezo yamekamilika tu wakati mtu angeweza kusema, baadaye, kama utabiri ulikuwa sahihi.`
      ),
      scenario({
        titleEn: "Scenario: AI for bursaries?",
        titleSw: "Hali halisi: AI kwa basari?",
        situationEn:
          "A county education office receives about 4,000 bursary applications each year. An officer suggests: \"Let us use AI to decide who gets a bursary. We have five years of past decisions to train on.\" The county has published criteria: household income, number of dependants, orphan status and school fees balance.",
        situationSw:
          "Ofisi ya elimu ya kaunti inapokea takriban maombi 4,000 ya basari kila mwaka. Afisa mmoja anapendekeza: \"Tutumie AI kuamua nani apate basari. Tuna maamuzi ya miaka mitano ya kufunzia.\" Kaunti imechapisha vigezo: mapato ya kaya, idadi ya wategemezi, hali ya uyatima na salio la karo.",
        questionEn: "What is the best way to frame this?",
        questionSw: "Ni njia ipi bora ya kueleza tatizo hili?",
        optionsEn: [
          "Train a classification model on the five years of past decisions and let it approve or reject.",
          "Score applicants with a clear, published points rule based on the criteria, let a committee decide, and perhaps use a tool only to flag incomplete forms.",
          "Ask a text generator to read each application and write the final decision.",
          "Cluster the applicants into groups and give bursaries to the largest group.",
        ],
        optionsSw: [
          "Funza modeli ya uainishaji kwa maamuzi ya miaka mitano iliyopita na iiache ikubali au ikatae.",
          "Wape waombaji alama kwa kanuni ya pointi iliyo wazi na iliyochapishwa kulingana na vigezo, kamati iamue, na labda chombo kitumike tu kuonyesha fomu zisizokamilika.",
          "Omba kizalishaji cha maandishi kisome kila ombi na kuandika uamuzi wa mwisho.",
          "Panga waombaji katika makundi na upe basari kundi kubwa zaidi.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Past decisions may contain favouritism or mistakes, and the model would copy them. Applicants also deserve a reason they can check, which a learned model cannot easily give.",
          "Correct. When clear criteria exist, a transparent rule is fairer and easier to explain than a model. A narrow tool for checking missing documents can still save time.",
          "A generator writes fluent text, not reliable decisions. It could invent reasons, and nobody could trace why one child was chosen over another.",
          "Clusters are just similar groups; being in the largest group says nothing about need. This frame answers a question nobody asked.",
        ],
        hintsSw: [
          "Maamuzi ya zamani yanaweza kuwa na upendeleo au makosa, na modeli ingeyanakili. Waombaji pia wanastahili sababu wanayoweza kuikagua, jambo ambalo modeli iliyojifunza haiwezi kutoa kwa urahisi.",
          "Sahihi. Vigezo wazi vikiwepo, kanuni iliyo wazi ni ya haki zaidi na ni rahisi kueleza kuliko modeli. Chombo chembamba cha kukagua nyaraka zinazokosekana bado kinaweza kuokoa muda.",
          "Kizalishaji huandika maandishi yanayotiririka, si maamuzi ya kuaminika. Kingeweza kubuni sababu, na hakuna ambaye angeweza kufuatilia kwa nini mtoto mmoja alichaguliwa badala ya mwingine.",
          "Makundi ni vikundi vinavyofanana tu; kuwa katika kundi kubwa zaidi hakusemi chochote kuhusu uhitaji. Maelezo haya yanajibu swali ambalo hakuna aliyeuliza.",
        ],
        explainEn:
          "\"When not to use AI\" is part of framing. Public decisions with published criteria need rules people can read and challenge. Machine learning fits best where the pattern is hard to write as rules and where a person can check the output.",
        explainSw:
          "\"Wakati wa kutotumia AI\" ni sehemu ya kueleza tatizo. Maamuzi ya umma yenye vigezo vilivyochapishwa yanahitaji kanuni ambazo watu wanaweza kusoma na kupinga. Ujifunzaji wa mashine unafaa zaidi pale ambapo mfumo ni mgumu kuandika kama kanuni na pale ambapo mtu anaweza kukagua tokeo.",
      }),
      quiz(
        "A duka owner in Nakuru wants to know how many loaves of bread to order for Saturday. What kind of problem is this?",
        "Mwenye duka Nakuru anataka kujua mikate mingapi aagize kwa Jumamosi. Hili ni tatizo la aina gani?",
        ["Classification", "Regression", "Clustering", "Generation"],
        ["Uainishaji", "Ukadiriaji wa namba", "Upangaji wa makundi", "Uzalishaji wa maudhui"],
        1,
        "The output is a number (loaves), so it is regression. It would become classification only if you reframed it as a category, such as \"order more than usual\" or \"order the usual amount\". Clustering finds groups, and generation writes new content; neither gives a count.",
        "Tokeo ni namba (mikate), kwa hiyo ni ukadiriaji wa namba. Lingekuwa uainishaji tu kama ungelieleza upya kama kundi, kama \"agiza zaidi ya kawaida\" au \"agiza kiasi cha kawaida\". Upangaji wa makundi hutafuta vikundi, na uzalishaji wa maudhui huandika maudhui mapya; hakuna kati ya hivyo kinachotoa idadi."
      ),
      quiz(
        "Which is the strongest reason NOT to use machine learning for a task?",
        "Ni sababu ipi yenye nguvu zaidi ya KUTOTUMIA ujifunzaji wa mashine kwa kazi fulani?",
        [
          "The task involves Kiswahili text.",
          "A simple published rule already gives the exact answer every time.",
          "The data is stored in a spreadsheet rather than a database.",
          "The users live in a rural county.",
        ],
        [
          "Kazi inahusisha maandishi ya Kiswahili.",
          "Kanuni rahisi iliyochapishwa tayari inatoa jibu kamili kila mara.",
          "Data imehifadhiwa kwenye lahajedwali badala ya hifadhidata.",
          "Watumiaji wanaishi katika kaunti ya mashambani.",
        ],
        1,
        "If a rule gives the exact answer, a model can only match it or make mistakes, and it is harder to explain. Kiswahili, spreadsheets and rural users are design considerations, not reasons to avoid machine learning.",
        "Kanuni ikitoa jibu kamili, modeli inaweza tu kulingana nayo au kukosea, na ni vigumu zaidi kuieleza. Kiswahili, lahajedwali na watumiaji wa mashambani ni mambo ya kuzingatia katika muundo, si sababu za kuepuka ujifunzaji wa mashine."
      ),
      note(
        "Try it: frame three problems",
        "Jaribu: eleza matatizo matatu",
        `Pick three problems from your home, school or work. For each, fill in this sentence in your notebook:

"Given [inputs], predict [output], so that [person] can [action]. A wrong answer would cost [what, and for whom]."

Then write which kind it is: classification, regression, clustering, generation, or "not AI". If you chose "not AI", write what would work instead: a rule, a form, a phone call, a better road.

Carry forward:
- The kind of output decides the data you need and how you will measure success.
- Classification and regression need labelled examples. Unit 3 shows how to collect them lawfully.
- "Not AI" is a professional answer, not a failure.`,
        `Chagua matatizo matatu kutoka nyumbani, shuleni au kazini. Kwa kila moja, jaza sentensi hii kwenye daftari lako:

"Kwa kupewa [maingizo], tabiri [tokeo], ili [mtu] aweze [kuchukua hatua]. Jibu la kosa lingegharimu [nini, na kwa nani]."

Kisha andika ni aina gani: uainishaji, ukadiriaji wa namba, upangaji wa makundi, uzalishaji wa maudhui, au "si AI". Ukichagua "si AI", andika kinachoweza kufanya kazi badala yake: kanuni, fomu, simu, barabara bora.

Kumbuka:
- Aina ya tokeo huamua data unayohitaji na jinsi utakavyopima mafanikio.
- Uainishaji na ukadiriaji wa namba huhitaji mifano yenye lebo. Somo la 3 linaonyesha jinsi ya kuikusanya kwa njia halali.
- "Si AI" ni jibu la kitaalamu, si kushindwa.`
      ),
    ],
  },
  {
    id: "m0-i-u3",
    titleEn: "Collecting data lawfully",
    titleSw: "Kukusanya data kwa njia halali",
    cards: [
      note(
        "Who you ask decides what the model learns",
        "Unaowauliza ndio huamua modeli inajifunza nini",
        `A model can only learn from the examples you give it. If your examples come from one kind of person, the model learns about that kind of person and guesses badly about everyone else. So collecting data is two jobs at once: collecting the right examples, and collecting them in a way that respects people and the law.

The right examples. The population is everyone you want your results to be true for, for example all boda boda riders in three counties. You can rarely ask everyone, so you ask a sample: a smaller group chosen from the population. A sample is representative when it looks like the population in the ways that matter, such as county, age, time of work and whether the rider owns the motorbike. The easy mistake is a convenience sample: asking whoever is nearest. That quietly leaves people out.

The right way. Kenya's Data Protection Act, 2019 protects personal data, which is any information that identifies a person. Its principles include:

- Lawfulness: have a proper legal basis, such as consent, for collecting the data.
- Purpose limitation: use the data only for the purpose you explained.
- Data minimisation: collect only what you actually need.
- Accuracy: keep it correct and up to date.
- Storage limitation: do not keep it longer than needed.
- Security: protect it from loss and misuse.

People have the right to be informed, to see their data, to correct it and to ask for it to be deleted. Some data is sensitive personal data and gets extra protection: health, biometrics (such as fingerprints), ethnicity and children's data. The Office of the Data Protection Commissioner (ODPC) registers organisations that handle personal data and deals with complaints.

Consent means the person agrees freely, after you explain clearly what you will collect, why, and what you will do with it, and they can say no or change their mind later. Nobody else can agree on their behalf, except a parent or guardian for a child.`,
        `Modeli inaweza kujifunza tu kutoka kwa mifano unayoipa. Mifano yako ikitoka kwa aina moja ya watu, modeli inajifunza kuhusu aina hiyo ya watu na inakisia vibaya kuhusu wengine wote. Kwa hiyo kukusanya data ni kazi mbili kwa wakati mmoja: kukusanya mifano sahihi, na kuikusanya kwa njia inayoheshimu watu na sheria.

Mifano sahihi. Idadi ya watu wote (population) ni wale wote unaotaka matokeo yako yawe kweli kwao, kwa mfano waendeshaji wote wa boda boda katika kaunti tatu. Mara chache unaweza kumuuliza kila mtu, kwa hiyo unauliza sampuli: kikundi kidogo kilichochaguliwa kutoka kwa idadi yote. Sampuli ni wakilishi inapofanana na idadi yote katika mambo muhimu, kama kaunti, umri, saa za kazi na kama mwendeshaji anamiliki pikipiki. Kosa rahisi ni sampuli ya urahisi: kuuliza yeyote aliye karibu. Hilo huwaacha watu nje bila kuonekana.

Njia sahihi. Sheria ya Kulinda Data ya Kenya ya mwaka 2019 (Data Protection Act) inalinda data binafsi, yaani taarifa yoyote inayomtambulisha mtu. Kanuni zake ni pamoja na:

- Uhalali: kuwa na msingi halali, kama ridhaa, wa kukusanya data.
- Kikomo cha lengo: tumia data kwa lengo ulilolieleza tu.
- Kupunguza data: kusanya tu kile unachohitaji kweli.
- Usahihi: iweke sahihi na ya kisasa.
- Kikomo cha kuhifadhi: usiihifadhi muda mrefu kuliko inavyohitajika.
- Usalama: ilinde isipotee wala kutumiwa vibaya.

Watu wana haki ya kujulishwa, kuona data yao, kuirekebisha na kuomba ifutwe. Baadhi ya data ni data binafsi nyeti na inapata ulinzi zaidi: afya, alama za kibaiolojia (kama alama za vidole), kabila na data ya watoto. Ofisi ya Kamishna wa Kulinda Data (ODPC) husajili mashirika yanayoshughulikia data binafsi na hushughulikia malalamiko.

Ridhaa inamaanisha mtu anakubali kwa hiari, baada ya wewe kueleza wazi utakachokusanya, kwa nini, na utakachofanya nacho, na anaweza kukataa au kubadilisha nia baadaye. Hakuna mtu mwingine anayeweza kukubali kwa niaba yake, isipokuwa mzazi au mlezi kwa mtoto.`
      ),
      reveal([
        {
          termEn: "Population",
          termSw: "Idadi ya watu wote (population)",
          defEn: "Everyone you want your results to be true for.",
          defSw: "Watu wote ambao unataka matokeo yako yawe kweli kwao.",
        },
        {
          termEn: "Sample",
          termSw: "Sampuli",
          defEn: "The smaller group you actually collect data from.",
          defSw: "Kikundi kidogo ambacho kweli unakusanya data kutoka kwake.",
        },
        {
          termEn: "Representative sample",
          termSw: "Sampuli wakilishi",
          defEn: "A sample that matches the population in the ways that matter for your question.",
          defSw: "Sampuli inayolingana na idadi yote katika mambo muhimu kwa swali lako.",
        },
        {
          termEn: "Consent",
          termSw: "Ridhaa",
          defEn: "A person's free, informed agreement, which they can refuse or withdraw.",
          defSw: "Kukubali kwa hiari na kwa ufahamu kwa mtu, ambako anaweza kukataa au kuondoa.",
        },
        {
          termEn: "Data minimisation",
          termSw: "Kupunguza data",
          defEn: "Collecting only the data you truly need for the stated purpose.",
          defSw: "Kukusanya data unayohitaji kweli tu kwa lengo lililoelezwa.",
        },
      ]),
      note(
        "Worked example: surveying boda riders in three counties",
        "Mfano kamili: kuwahoji waendeshaji wa boda katika kaunti tatu",
        `Imagine a fictional research team building a model that estimates a boda rider's weekly income, so a SACCO can design a savings plan that fits real earnings. They plan 600 interviews across Nairobi, Kisumu and Kakamega.

Step 1: split the sample. The team's own estimate (fictional) is that half the riders in the three counties work in Nairobi, 30% in Kisumu and 20% in Kakamega. So they plan 300 interviews in Nairobi, 180 in Kisumu and 120 in Kakamega. That adds up to 600.

Step 2: spread it out. In Nairobi they choose 10 stages, 30 riders at each: some in the CBD, some in estates, some on the edge of town. They visit each stage in the morning, at midday and in the evening, because riders who work at night may be different from riders who work at noon.

Where it went wrong first. In a trial week, one interviewer surveyed 200 riders at three CBD stages at midday. Those riders reported an average of KES 1,500 a day. A second interviewer, at estate stages in the evening, found an average of KES 900 a day. If the team had used only the first group, the savings plan would have asked riders to save money most of them do not earn.

Step 3: ask only what is needed. The questionnaire asks about trips per day, fuel spend, hours worked, whether the rider owns the bike, and county. It does not ask for national ID numbers, M-Pesa PINs or ethnicity. Each rider gets a code, like KSM-041, instead of a name. Phone numbers are collected only from riders who want the results, and are stored in a separate locked file.

Step 4: consent and care. Each rider hears a short script in Kiswahili or English: who the team is, what the questions are, that answers are used only for the savings study, that they can skip any question or stop at any time, and whom to contact. The team decides not to interview anyone under 18. Audio recordings are deleted once the answers are typed up.`,
        `Fikiria timu ya kubuni ya utafiti inayojenga modeli inayokadiria mapato ya wiki ya mwendeshaji wa boda, ili SACCO ibuni mpango wa akiba unaolingana na mapato halisi. Wanapanga mahojiano 600 katika Nairobi, Kisumu na Kakamega.

Hatua ya 1: gawa sampuli. Makadirio ya timu yenyewe (ya kubuni) ni kwamba nusu ya waendeshaji katika kaunti hizo tatu wanafanya kazi Nairobi, asilimia 30 Kisumu na asilimia 20 Kakamega. Kwa hiyo wanapanga mahojiano 300 Nairobi, 180 Kisumu na 120 Kakamega. Jumla ni 600.

Hatua ya 2: sambaza. Nairobi wanachagua vituo 10, waendeshaji 30 kila kimoja: baadhi katikati ya jiji, baadhi mitaani, baadhi pembezoni mwa mji. Wanatembelea kila kituo asubuhi, mchana na jioni, kwa sababu waendeshaji wanaofanya kazi usiku wanaweza kutofautiana na wale wanaofanya kazi mchana.

Palipoharibika kwanza. Katika wiki ya majaribio, mhoji mmoja aliwahoji waendeshaji 200 katika vituo vitatu vya katikati ya jiji saa za mchana. Waendeshaji hao walisema wastani wa KES 1,500 kwa siku. Mhoji wa pili, katika vituo vya mitaani jioni, alipata wastani wa KES 900 kwa siku. Kama timu ingetumia kikundi cha kwanza pekee, mpango wa akiba ungewataka waendeshaji waweke pesa ambazo wengi wao hawazipati.

Hatua ya 3: uliza kinachohitajika tu. Hojaji inauliza kuhusu safari kwa siku, matumizi ya mafuta, saa za kazi, kama mwendeshaji anamiliki pikipiki, na kaunti. Haiulizi namba za kitambulisho, PIN za M-Pesa wala kabila. Kila mwendeshaji anapewa msimbo, kama KSM-041, badala ya jina. Namba za simu zinakusanywa tu kutoka kwa waendeshaji wanaotaka matokeo, na zinahifadhiwa katika faili tofauti lililofungwa.

Hatua ya 4: ridhaa na uangalifu. Kila mwendeshaji anasikia maelezo mafupi kwa Kiswahili au Kiingereza: timu ni nani, maswali ni yapi, kwamba majibu yatatumika kwa utafiti wa akiba pekee, kwamba anaweza kuruka swali lolote au kusimama wakati wowote, na amwone nani akiwa na swali. Timu inaamua kutomhoji yeyote aliye chini ya miaka 18. Sauti zilizorekodiwa zinafutwa mara majibu yakishaandikwa.`
      ),
      scenario({
        titleEn: "Scenario: the stage chairman offers to sign",
        titleSw: "Hali halisi: mwenyekiti wa kituo anajitolea kusaini",
        situationEn:
          "At a stage in Kisumu, the chairman is friendly and busy. He says: \"No need to explain to everyone. I am their chairman. I will sign the consent form for all 30 riders. Just interview them.\"",
        situationSw:
          "Katika kituo kimoja Kisumu, mwenyekiti ni mkarimu na ana shughuli nyingi. Anasema: \"Hakuna haja ya kumweleza kila mtu. Mimi ni mwenyekiti wao. Nitasaini fomu ya ridhaa kwa niaba ya waendeshaji wote 30. Wahojini tu.\"",
        questionEn: "What should the interviewer do?",
        questionSw: "Mhoji afanye nini?",
        optionsEn: [
          "Accept the chairman's signature. He is their leader, so his agreement covers them.",
          "Thank him, then explain the study to each rider and ask each one personally, accepting that some will say no.",
          "Offer each rider KES 500, but only if they answer every question.",
          "Skip the forms and ask the questions casually, as if chatting, so nobody feels pressured.",
        ],
        optionsSw: [
          "Kubali sahihi ya mwenyekiti. Yeye ni kiongozi wao, kwa hiyo kukubali kwake kunawahusu.",
          "Mshukuru, kisha mweleze kila mwendeshaji kuhusu utafiti na umuulize kila mmoja binafsi, ukikubali kwamba baadhi watakataa.",
          "Mpe kila mwendeshaji KES 500, lakini tu kama atajibu kila swali.",
          "Acha fomu na uulize maswali kwa mazungumzo ya kawaida, ili mtu yeyote asihisi kushinikizwa.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Consent is personal. A leader cannot agree on behalf of adults, and riders may feel unable to refuse their chairman.",
          "Correct. Each adult must hear what is collected and why, and must be free to say no. Respecting the chairman and respecting each rider can both happen.",
          "Tying payment to answering everything removes the freedom to skip questions. A small thank-you is fine only if it does not depend on answers.",
          "Collecting data without telling people is deception. It breaks their right to be informed, even if the chat feels relaxed.",
        ],
        hintsSw: [
          "Ridhaa ni ya mtu binafsi. Kiongozi hawezi kukubali kwa niaba ya watu wazima, na waendeshaji wanaweza kuhisi hawawezi kumkatalia mwenyekiti wao.",
          "Sahihi. Kila mtu mzima lazima asikie kinachokusanywa na kwa nini, na lazima awe huru kukataa. Kumheshimu mwenyekiti na kumheshimu kila mwendeshaji kunawezekana kwa pamoja.",
          "Kufunga malipo na kujibu kila swali kunaondoa uhuru wa kuruka maswali. Shukrani ndogo inafaa tu kama haitegemei majibu.",
          "Kukusanya data bila kuwaambia watu ni udanganyifu. Kunavunja haki yao ya kujulishwa, hata kama mazungumzo yanaonekana ya kawaida.",
        ],
        explainEn:
          "Valid consent is free, informed and individual, and it can be withdrawn. Shortcuts that feel efficient on the day create data you may not lawfully use later.",
        explainSw:
          "Ridhaa halali ni ya hiari, ya ufahamu na ya mtu binafsi, na inaweza kuondolewa. Njia za mkato zinazoonekana za haraka siku hiyo huzalisha data ambayo huenda usiweze kuitumia kihalali baadaye.",
      }),
      quiz(
        "The team is building an income model. Which field should they drop under data minimisation?",
        "Timu inajenga modeli ya mapato. Ni safu ipi waiondoe kwa kanuni ya kupunguza data?",
        ["Daily fuel spend", "Hours worked per day", "National ID number", "County of work"],
        ["Matumizi ya mafuta kwa siku", "Saa za kazi kwa siku", "Namba ya kitambulisho", "Kaunti ya kazi"],
        2,
        "Fuel spend and hours help estimate income, and county is needed to check the sample is representative. An ID number adds nothing to the estimate but makes every record identifiable and a target for misuse.",
        "Matumizi ya mafuta na saa za kazi husaidia kukadiria mapato, na kaunti inahitajika kukagua kama sampuli ni wakilishi. Namba ya kitambulisho haiongezi chochote kwenye makadirio lakini inafanya kila rekodi itambulike na kuwa lengo la matumizi mabaya."
      ),
      quiz(
        "The final count is 400 riders in Nairobi, 150 in Kisumu and 50 in Kakamega. The plan was 300, 180 and 120. What is the best judgement?",
        "Hesabu ya mwisho ni waendeshaji 400 Nairobi, 150 Kisumu na 50 Kakamega. Mpango ulikuwa 300, 180 na 120. Uamuzi upi ni bora?",
        [
          "Nothing is wrong, because the total is still 600.",
          "Kakamega riders are too few for reliable conclusions about them; collect more there or report Kakamega results with a clear warning.",
          "Copy each Kakamega answer so there are 120 records.",
          "Delete 100 Nairobi interviews so the numbers look balanced.",
        ],
        [
          "Hakuna kosa, kwa sababu jumla bado ni 600.",
          "Waendeshaji wa Kakamega ni wachache mno kwa hitimisho la kuaminika kuwahusu; kusanya zaidi huko au ripoti matokeo ya Kakamega kwa onyo wazi.",
          "Nakili kila jibu la Kakamega ili kuwe na rekodi 120.",
          "Futa mahojiano 100 ya Nairobi ili namba zionekane zimesawazika.",
        ],
        1,
        "A big total can hide a small group. With only 50 Kakamega riders, a model will be less reliable for them. Copying answers adds no new information, it only makes the same 50 people count more, and deleting good Nairobi data wastes effort without helping Kakamega.",
        "Jumla kubwa inaweza kuficha kikundi kidogo. Kwa waendeshaji 50 tu wa Kakamega, modeli itakuwa na uaminifu mdogo kwao. Kunakili majibu hakuongezi taarifa mpya, kunafanya tu watu wale wale 50 wahesabiwe zaidi, na kufuta data nzuri ya Nairobi kunapoteza juhudi bila kusaidia Kakamega."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        `- A model learns only about the people in its data. Plan the sample before you collect.
- Spread collection across places, times and types of people, not just whoever is nearest.
- Collect only what you need, explain it, and let each person say yes or no for themselves.
- Health, biometrics, ethnicity and children's data need extra protection.
- Next, in unit 4: once you have examples, people must attach correct labels, and labellers often disagree.`,
        `- Modeli hujifunza tu kuhusu watu walio katika data yake. Panga sampuli kabla ya kukusanya.
- Sambaza ukusanyaji katika maeneo, nyakati na aina tofauti za watu, si tu yeyote aliye karibu.
- Kusanya tu unachohitaji, kieleze, na umwache kila mtu akubali au akatae mwenyewe.
- Data ya afya, alama za kibaiolojia, kabila na watoto inahitaji ulinzi zaidi.
- Ifuatayo, katika somo la 4: ukishapata mifano, watu lazima waambatishe lebo sahihi, na mara nyingi waweka lebo hawakubaliani.`
      ),
    ],
  },
  {
    id: "m0-i-u4",
    titleEn: "Training versus using (inference)",
    titleSw: "Kufunza dhidi ya kutumia (inference)",
    cards: [
      note(
        "Two jobs, two bills",
        "Kazi mbili, bili mbili",
        `When people say "we should use AI", they often mix two jobs. Training is the lifecycle stage you already met: a computer looks at many labelled examples and changes the model's numbers until its outputs get closer to those examples. Using a trained model is called inference. You give the finished model a new input it has never seen, and it produces an output. Training happens rarely. Inference happens every time a farmer sends a leaf photo, a loans officer opens a list, or a secretary asks a chatbot to draft a letter.

For most Kenyan teams the bill that actually arrives is the inference bill. A SACCO, a county office, a school or a clinic almost never trains a large model from scratch. They use a model someone else already trained. Each request still costs airtime, a paid server call, electricity, or staff time. Training is a project cost. Inference is a running cost, like fuel or M-Pesa charges. Plan only for the project, and month three will surprise you.

A cook makes this easy. Training is catering college. Inference is plating lunch today. You do not reopen the college for every plate of ugali, and you do not need to own the college. You need a cook who can work in your kitchen, with your ingredients, at a price you can pay when the power is out.

Kenya already has tools on the using side. FarmerAI, from Safaricom and Opportunity International, gives farming advice on SMS and WhatsApp: weather, fertiliser, pests and prices. Agrika is Kenya-built software that reads a crop photo, keeps working on a weak network, and can point to PCPB-registered products paid on M-Pesa. M-Kliniki's Nia assistant works in English and Kiswahili with telemedicine and M-Pesa. In each case the builder trained. The user pays, in money or time, at inference.

Fine-tuning is a middle path: start from an existing model and adjust it with your own examples. That is still training. It still needs lawful data and a person who can tell whether the new behaviour is better. Ask the cheaper question first: can we use a finished tool, with our documents and a person in the loop, without training anything new? Kenya's AI Strategy 2025-2030 wants useful systems in agriculture, health and education. For a practitioner, usefulness starts by knowing which of the two jobs you are actually doing.`,
        `Watu wakisema "tutumie AI", mara nyingi wanachanganya kazi mbili zinazogharimu pesa na ujuzi tofauti. Kufunza ni hatua ya mzunguko ambayo tayari umeiona: kompyuta huangalia mifano mingi yenye lebo na kubadilisha polepole namba za modeli hadi matokeo yake yakaribiane na mifano hiyo. Kutumia modeli iliyofunzwa kunaitwa utumizi (inference). Unaipea modeli iliyokamilika ingizo jipya ambalo haijawahi kuliona, na inatoa tokeo. Kufunza hutokea mara chache. Utumizi hutokea kila mkulima anapotuma picha ya jani, afisa wa mikopo anapofungua orodha, au karani anapomwomba chatbot iandae barua.

Kwa timu nyingi Kenya, bili inayofika kweli ni bili ya utumizi. SACCO, ofisi ya kaunti, shule au kliniki karibu kamwe haifundishi modeli kubwa kuanzia mwanzo. Wanatumia modeli ambayo mtu mwingine alishafunza. Kila ombi bado linagharimu salio la simu, malipo ya seva, umeme, au muda wa mfanyakazi. Kufunza ni gharama ya mradi. Utumizi ni gharama ya kuendesha, kama mafuta au ada za M-Pesa. Ukipanga mradi pekee, mwezi wa tatu utakushangaza.

Mpishi analifanya hili kuwa rahisi. Kufunza ni chuo cha upishi. Utumizi ni kuandaa chakula cha mchana leo. Hufungui chuo kila sahani ya ugali, wala huhitaji kumiliki chuo. Unahitaji mpishi anayeweza kufanya kazi jikoni mwako, kwa viungo vyako, kwa bei unayoweza kulipa umeme ukiwa umekatika.

Kenya tayari ina zana upande wa kutumia. FarmerAI, ya Safaricom na Opportunity International, inatoa ushauri wa kilimo kwa SMS na WhatsApp: hali ya hewa, mbolea, wadudu na bei. Agrika ni programu iliyojengwa Kenya inayosoma picha ya zao, imeundwa kuendelea kufanya kazi mtandao ukiwa dhaifu, na inaweza kuelekeza kwenye bidhaa zilizosajiliwa na PCPB kupitia maduka ya agrovet na M-Pesa. Msaidizi Nia wa M-Kliniki hufanya kazi kwa Kiingereza na Kiswahili pamoja na tiba ya mbali na M-Pesa. Katika kila kesi, mjengaji ndiye aliyefunza. Mtumiaji analipa, kwa pesa au muda, wakati wa utumizi.

Kurekebisha modeli iliyofunzwa (fine-tuning) ni njia ya kati: anzia na modeli iliyopo kisha uibadilishe kidogo kwa mifano yako. Hiyo bado ni mafunzo. Bado inahitaji data halali na mtu anayeweza kusema kama tabia mpya ni bora. Uliza swali rahisi kwanza: je, tunaweza kutumia zana iliyokamilika, pamoja na hati zetu na mtu katika mzunguko, bila kufunza kitu kipya? Mkakati wa AI wa Kenya 2025-2030 unataka mifumo yenye manufaa katika kilimo, afya na elimu. Kwa mtaalamu, manufaa huanza kwa kujua ni kazi ipi kati ya hizo mbili unayofanya kweli.`
      ),
      reveal([
        {
          termEn: "Training",
          termSw: "Mafunzo",
          defEn: "The rare, expensive step that adjusts a model's numbers so its outputs match labelled examples.",
          defSw: "Hatua adimu na ghali inayorekebisha namba za modeli ili matokeo yake yalingane na mifano yenye lebo.",
        },
        {
          termEn: "Inference",
          termSw: "Utumizi (inference)",
          defEn: "Using a finished model on a new input to produce an output. This is the step most Kenyan teams pay for every day.",
          defSw: "Kutumia modeli iliyokamilika kwenye ingizo jipya ili kutoa tokeo. Hii ndiyo hatua ambayo timu nyingi Kenya hulipia kila siku.",
        },
        {
          termEn: "Running cost",
          termSw: "Gharama ya kuendesha",
          defEn: "Money and time that repeat with every request: airtime, server fees, power, and staff waiting.",
          defSw: "Pesa na muda vinavyojirudia kila ombi: salio la simu, ada za seva, umeme, na mfanyakazi anayesubiri.",
        },
        {
          termEn: "Pre-trained model",
          termSw: "Modeli iliyofunzwa tayari",
          defEn: "A model someone else already trained, which you use as-is or point at your own documents.",
          defSw: "Modeli ambayo mtu mwingine alishafunza, ambayo unaitumia kama ilivyo au kuielekeza kwenye hati zako.",
        },
        {
          termEn: "Fine-tuning",
          termSw: "Kurekebisha modeli (fine-tuning)",
          defEn: "A smaller training job: start from an existing model and adjust it with your own examples.",
          defSw: "Kazi ndogo ya mafunzo: anzia na modeli iliyopo kisha uibadilishe kwa mifano yako.",
        },
      ]),
      note(
        "Worked example: 80 leaf photos a day in Kirinyaga",
        "Mfano kamili: picha 80 za majani kwa siku Kirinyaga",
        `Imagine the county agriculture office in Kirinyaga, a fictional county desk. Agrovets send about 80 maize-leaf photos every day during a pest season. An officer says: "Let us train our own AI to read the photos."

What training would actually take. Someone must collect thousands of photos, and a person who can tell armyworm from nutrient burn must label each one. That is weeks of work, lawful consent from farmers, and a specialist to run the training. The county does not have that specialist on staff.

What using looks like. The office can point farmers to a finished photo tool such as Agrika, which is built in Kenya to read crop photos, work when the network is weak, and connect a suggestion to PCPB-registered products and local agrovet stock, paid on M-Pesa. Each of the 80 photos is an inference, not a training run. FarmerAI can sit beside that workflow for weather, fertiliser, pests and prices by SMS or WhatsApp. Neither product is being retrained by the county.

Where the money goes. The county's real costs are: 80 requests a day, airtime for officers in the field, and the half-hour an afisa wa ugani spends checking any chemical advice against the PCPB label and KALRO guidance. After a dry month the photo volume may drop to 20 a day; after a outbreak it may rise to 200. Inference cost follows the season. A training project would not.

Where it could go wrong. If the office budgets only for "building a model" it will wait months and still have no one checking answers. If it uses a tool but treats every output as a prescription, farmers pay for confident mistakes. The professional move is to use a finished tool, keep a person on the chemical step, and count the daily inferences before signing any contract.`,
        `Fikiria ofisi ya kilimo ya kaunti Kirinyaga, ofisi ya kubuni. Maduka ya agrovet yanatuma takriban picha 80 za majani ya mahindi kila siku katika msimu wa wadudu. Afisa anasema: "Tujifunze AI yetu kusoma picha."

Mafunzo yangehitaji nini. Mtu lazima akusanye picha elfu kadhaa, na mtu anayeweza kutofautisha viwavijeshi na kuungua kwa virutubisho lazima aweke lebo kwenye kila moja. Hiyo ni wiki za kazi, ridhaa halali kutoka kwa wakulima, na mtaalamu wa kuendesha mafunzo. Kaunti hana mtaalamu huyo kazini.

Kutumia kunaonekanaje. Ofisi inaweza kuwaelekeza wakulima kwenye zana ya picha iliyokamilika kama Agrika, iliyojengwa Kenya kusoma picha za mazao, kufanya kazi mtandao ukiwa dhaifu, na kuunganisha pendekezo na bidhaa zilizosajiliwa na PCPB na stock ya agrovet, ikilipwa kwa M-Pesa. Kila picha kati ya 80 ni utumizi, si mafunzo. FarmerAI inaweza kukaa kando ya mtiririko huo kwa hali ya hewa, mbolea, wadudu na bei kwa SMS au WhatsApp. Hakuna kati ya bidhaa hizo inayofunzwa upya na kaunti.

Pesa zinaenda wapi. Gharama halisi za kaunti ni: maombi 80 kwa siku, salio la simu kwa maafisa uwanjani, na nusu saa ambayo afisa wa ugani hutumia kukagua ushauri wowote wa kemikali dhidi ya lebo ya PCPB na mwongozo wa KALRO. Baada ya mwezi mkavu idadi ya picha inaweza kushuka hadi 20 kwa siku; mlipuko ukitokea inaweza kupanda hadi 200. Gharama ya utumizi hufuata msimu. Mradi wa mafunzo haungefanya hivyo.

Palipoweza kuharibika. Ofisi ikipanga bajeti ya "kujenga modeli" pekee, itasubiri miezi na bado hakuna anayekagua majibu. Ikitumia zana lakini ikichukulia kila tokeo kama dawa, wakulima ndio wanaolipia makosa yenye uhakika. Hatua ya kitaalamu ni kutumia zana iliyokamilika, kumweka mtu kwenye hatua ya kemikali, na kuhesabu utumizi wa kila siku kabla ya kusaini mkataba.`
      ),
      scenario({
        titleEn: "Scenario: train our own clinic brain?",
        titleSw: "Hali halisi: tujifunze ubongo wetu wa kliniki?",
        situationEn:
          "A dispensary committee in Makueni hears that chatbots can answer health questions. A member says: \"Let us collect five years of patient files, train our own model, and let it advise patients on WhatsApp at night. Then we will not need a clinician on call.\"",
        situationSw:
          "Kamati ya zahanati Makueni inasikia kwamba chatbot zinaweza kujibu maswali ya afya. Mwanachama anasema: \"Tukusanye faili za wagonjwa za miaka mitano, tujifunze modeli yetu, na tuiache iwashauri wagonjwa kwa WhatsApp usiku. Hapo hatutahitaji daktari wa zamu.\"",
        questionEn: "What should the committee do?",
        questionSw: "Kamati ifanye nini?",
        optionsEn: [
          "Train on the patient files. Owning the model is the only way to be independent.",
          "Refuse both training on patient files and unsupervised night advice. Use a finished Kiswahili-capable assistant only to draft notes a clinician reviews, and keep a person on call for anything that touches a body.",
          "Skip training, but let a public chatbot answer patients directly so the clinic saves money.",
          "Fine-tune a public model on the files, then switch the clinician off at 6 pm.",
        ],
        optionsSw: [
          "Funza kwa faili za wagonjwa. Kumiliki modeli ndiyo njia pekee ya kujitegemea.",
          "Kataa mafunzo kwa faili za wagonjwa na ushauri wa usiku bila mtu. Tumia msaidizi aliyekamilika wa Kiswahili tu kuandaa madokezo ambayo daktari hukagua, na mtu abaki zamu kwa lolote linalogusa mwili.",
          "Ruka mafunzo, lakini acha chatbot ya umma iwajibu wagonjwa moja kwa moja ili kliniki iokoe pesa.",
          "Rekebisha modeli ya umma kwa faili, kisha zima daktari saa kumi na mbili jioni.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Those files are sensitive personal data under the Data Protection Act, 2019. Training on them without a clear lawful basis, and then replacing a clinician, puts patients in the path of untested mistakes.",
          "Correct. This clinic needs inference with a human gate, not a training project. M-Kliniki's Nia shows the shape: English and Kiswahili assistance that sits with telemedicine, not instead of it.",
          "A public chatbot was not trained on this dispensary's protocols. It can sound sure while inventing doses. Patients would pay for the error at night, when nobody is watching.",
          "Fine-tuning is still training on health data, and switching the clinician off removes the only person who can refuse a dangerous answer.",
        ],
        hintsSw: [
          "Faili hizo ni data binafsi nyeti chini ya Sheria ya Kulinda Data, 2019. Kuzifundishia bila msingi halali, kisha kuchukua nafasi ya daktari, kunawaweka wagonjwa kwenye makosa ambayo hayajajaribiwa.",
          "Sahihi. Zahanati hii inahitaji utumizi wenye lango la binadamu, si mradi wa mafunzo. Nia ya M-Kliniki inaonyesha umbo: msaada wa Kiingereza na Kiswahili unaokaa pamoja na tiba ya mbali, si badala yake.",
          "Chatbot ya umma haikufunzwa kwa itifaki za zahanati hii. Inaweza kusikika na uhakika huku ikibuni dozi. Wagonjwa ndio wangelipia kosa usiku, wakati hakuna anayetazama.",
          "Kurekebisha modeli bado ni mafunzo kwa data ya afya, na kumzima daktari kunaondoa mtu pekee anayeweza kukataa jibu hatari.",
        ],
        explainEn:
          "Most Kenyan clinics should buy or borrow inference, not train a medical model. Health data is sensitive, and a person must still sign anything that touches a body.",
        explainSw:
          "Zahanati nyingi Kenya zinafaa kununua au kukopa utumizi, si kufunza modeli ya tiba. Data ya afya ni nyeti, na mtu bado lazima asaini lolote linalogusa mwili.",
      }),
      quiz(
        "A SACCO runs a default list every Monday using a model it did not train. Which cost should the manager track first?",
        "SACCO inaendesha orodha ya mikopo inayoweza kuchelewa kila Jumatatu kwa modeli ambayo haikufunza. Ni gharama ipi meneja apime kwanza?",
        [
          "The one-off cost of buying graphics cards to train a larger model.",
          "The repeating cost of each week's inferences, plus the officers' time to call and record.",
          "The cost of labelling every historical loan again from scratch.",
          "The cost of translating the Kenya AI Strategy into Kiswahili.",
        ],
        [
          "Gharama ya mara moja ya kununua kadi za picha ili kufunza modeli kubwa zaidi.",
          "Gharama inayojirudia ya utumizi wa kila wiki, pamoja na muda wa maafisa kupiga simu na kuandika.",
          "Gharama ya kuweka lebo tena kuanzia mwanzo kwenye kila mkopo wa zamani.",
          "Gharama ya kutafsiri Mkakati wa AI wa Kenya kwa Kiswahili.",
        ],
        1,
        "The SACCO is using a finished model. The bill that repeats is inference plus the people who act on the list. Graphics cards and relabelling are training costs they are not paying this Monday.",
        "SACCO inatumia modeli iliyokamilika. Bili inayojirudia ni utumizi pamoja na watu wanaotumia orodha. Kadi za picha na kuweka lebo tena ni gharama za mafunzo ambazo hawalipii Jumatatu hii."
      ),
      note(
        "Try it: label three tools train or use",
        "Jaribu: weka lebo kufunza au kutumia kwenye zana tatu",
        `Draw two columns: TRAIN and USE. Write three tools you already touch, or that your workplace could touch, one per row. For each, answer in one line:

- Who trained it? (you, a Kenyan builder, or someone abroad)
- What is one inference? (one photo, one question, one Monday list)
- What does that inference cost? (airtime, staff minutes, a fee)
- What would extra training require that you do not have?

Examples you may use if your own list is short: FarmerAI on SMS, an Agrika-style leaf photo, a school chatbot drafting a CBC parent letter, M-Kliniki Nia beside a clinician, a SACCO default list.

Carry forward:
- If you cannot name the inference, you cannot budget it.
- Fine-tuning is still training. Use first, train only when use is not enough.
- Next, unit 5: what a chatbot is actually doing in the second it answers you.`,
        `Chora safu mbili: KUFUNZA na KUTUMIA. Andika zana tatu unazogusa tayari, au ambazo kazini zingeweza kuguswa, moja kwa mstari. Kwa kila moja, jibu kwa mstari mmoja:

- Nani aliifundisha? (wewe, mjengaji wa Kenya, au mtu nje)
- Utumizi mmoja ni nini? (picha moja, swali moja, orodha moja ya Jumatatu)
- Utumizi huo unagharimu nini? (salio, dakika za mfanyakazi, ada)
- Mafunzo ya ziada yangehitaji nini ambacho huna?

Mifano unayoweza kutumia orodha yako ikiwa fupi: FarmerAI kwa SMS, picha ya jani ya mtindo wa Agrika, chatbot ya shule inayoandaa barua ya CBC kwa wazazi, Nia ya M-Kliniki kando ya daktari, orodha ya SACCO.

Kumbuka:
- Ukiweza kutaja utumizi, ndipo unaweza kuupangia bajeti.
- Kurekebisha modeli bado ni mafunzo. Tumia kwanza, funza tu utumizi usipotosha.
- Ifuatayo, somo la 5: chatbot inafanya nini hasa katika sekunde inayokujibu.`
      ),
    ],
  },
  {
    id: "m0-i-u5",
    titleEn: "How a chatbot predicts the next word",
    titleSw: "Jinsi chatbot inavyotabiri neno linalofuata",
    cards: [
      note(
        "Fluent is not the same as sure",
        "Ufasaha si uhakika",
        `A chatbot does not look up the truth in a filing cabinet. At inference, it predicts the next token, then the next, very fast. A token is a chunk of text: sometimes a whole word, sometimes a piece of a word. "Nairobi" may be one token. A long chemical name may be several. The model was trained, usually by someone else, on huge amounts of text. When you type a question, it asks again and again: given everything so far, which token is likely next?

The context window is how much text it can keep in view at once: your instructions, any document you pasted, and the reply so far. It is a limited desk, not an infinite memory. Paste a 40-page county circular after a long chat, and the opening pages may fall off the desk. The model then answers as if those pages never existed. People blame "the AI" for forgetting. The window filled up.

Why it sounds sure: the system is built to write fluent sentences. Fluency is a writing skill, not a confidence score. It will type "the Grade 4 lunch fee is KES 2,500" in the same calm voice whether that number sat in your circular or was a lucky guess. You hear certainty. The machine is completing a pattern.

Settings that make answers more or less adventurous change how it samples the next token. They do not add an honest "I do not know". You have to demand that sentence in your instructions, and a person has to notice when it is missing.

When a fluent sentence is not supported by your facts, practitioners call it a hallucination. In plain language it is a confident guess. For a Kenyan team this matters on the shop floor: a school letter with the wrong Saturday, a SACCO SMS with the wrong balance, a pest "recommendation" that was never on a PCPB label. The next units will show how to pin the model to your documents and where a person must refuse.`,
        `Chatbot haitafuti ukweli kwenye kabati la faili. Katika utumizi, inatabiri tokeni inayofuata, kisha inayofuata, kwa kasi. Tokeni ni kipande cha maandishi: wakati mwingine neno zima, wakati mwingine sehemu ya neno. "Nairobi" inaweza kuwa tokeni moja. Jina refu la kemikali linaweza kuwa tokeni kadhaa. Modeli ilifunzwa, kwa kawaida na mtu mwingine, kwa maandishi mengi sana. Unapoandika swali, inauliza tena na tena: kwa kupewa kila kilichotangulia, tokeni ipi ina uwezekano wa kufuata?

Dirisha la muktadha (context window) ni kiasi cha maandishi inachoweza kuweka mbele ya macho kwa wakati mmoja: maagizo yako, hati uliyobandika, na jibu hadi sasa. Ni meza ndogo, si kumbukumbu isiyo na mwisho. Bandika waraka wa kaunti wa kurasa 40 baada ya mazungumzo marefu, na kurasa za mwanzo zinaweza kuanguka mezani. Modeli kisha inajibu kana kwamba kurasa hizo hazikuwepo. Watu hulaumu "AI" kwa kusahau. Dirisha lilijaa.

Kwa nini inasikika na uhakika: mfumo umejengwa kuandika sentensi zinazotiririka. Ufasaha ni ujuzi wa kuandika, si alama ya uhakika. Itaandika "ada ya chakula cha Darasa la 4 ni KES 2,500" kwa sauti ileile tulivu iwe namba hiyo ilikuwa kwenye waraka wako au ilikuwa kisia la bahati. Wewe unasikia uhakika. Mashine inakamilisha ruwaza.

Mipangilio inayofanya majibu kuwa ya ujasiri zaidi au pungufu inabadilisha jinsi inavyochagua tokeni inayofuata. Haiongezi sentensi ya kweli "sijui". Lazima uihitaji katika maagizo yako, na mtu lazima aone inapokosekana.

Sentensi inayotiririka isipoungwa mkono na ukweli wako, wataalamu huita kubuni (hallucination). Kwa lugha rahisi ni kisia chenye uhakika. Kwa timu ya Kenya hili lina maana dukani: barua ya shule yenye Jumamosi isiyo sahihi, SMS ya SACCO yenye salio lisilo sahihi, "pendekezo" la wadudu ambalo halikuwa kwenye lebo ya PCPB. Somo zinazofuata zitaonyesha jinsi ya kuifunga modeli kwenye hati zako na mahali mtu lazima akatae.`
      ),
      reveal([
        {
          termEn: "Token",
          termSw: "Tokeni",
          defEn: "A chunk of text the model reads and writes, often a word or part of a word.",
          defSw: "Kipande cha maandishi ambacho modeli husoma na kuandika, mara nyingi neno au sehemu ya neno.",
        },
        {
          termEn: "Context window",
          termSw: "Dirisha la muktadha",
          defEn: "The limited amount of text a model can keep in view at once. Older pages fall off when the window fills.",
          defSw: "Kiasi kilichopunguzwa cha maandishi ambacho modeli inaweza kuweka mbele ya macho kwa wakati mmoja. Kurasa za zamani zinaanguka dirisha likijaa.",
        },
        {
          termEn: "Next-token prediction",
          termSw: "Utabiri wa tokeni inayofuata",
          defEn: "The basic job of a chatbot: guess the most likely next chunk of text, then the next, very fast.",
          defSw: "Kazi ya msingi ya chatbot: kisia kipande kinachofuata cha maandishi chenye uwezekano mkubwa, kisha kinachofuata, kwa kasi.",
        },
        {
          termEn: "Fluency",
          termSw: "Ufasaha",
          defEn: "How smooth the sentences sound. Fluency is not evidence that the facts are right.",
          defSw: "Jinsi sentensi zinavyotiririka. Ufasaha si ushahidi kwamba ukweli uko sahihi.",
        },
        {
          termEn: "Hallucination",
          termSw: "Kubuni (hallucination)",
          defEn: "A fluent statement that is not supported by your facts. Treat it as a confident guess.",
          defSw: "Kauli inayotiririka ambayo haiungwi mkono na ukweli wako. Ichukulie kama kisia chenye uhakika.",
        },
      ]),
      note(
        "Worked example: the circular that fell off the desk",
        "Mfano kamili: waraka ulioanguka mezani",
        `Imagine St. Joseph's primary school in Kilifi, a fictional school running the Competency Based Curriculum (CBC). The secretary, Halima, wants a Kiswahili letter to Grade 4 parents about the lunch fee. She has a 3-page fee circular. Page 1 says the Grade 4 lunch fee is KES 1,800 a term, due by 15 February.

First try. She pastes only the 3 pages and asks: "What is the Grade 4 lunch fee, and when is it due? Quote the line." The model quotes page 1. She checks. It matches. She drafts the letter herself using that line.

Second try, same morning. A teacher has been chatting with the same chatbot about a 20-page CBC memo. Halima pastes the fee circular into that long chat and asks the same question. The reply is fluent: "The Grade 4 lunch fee is KES 2,500, payable at the start of term." That number is not in this year's circular. It may be last year's rumour, or a pattern from other schools in the training text. The opening of her circular had fallen out of the context window. The tone did not change. Only the facts did.

Where it could go wrong next. If Halima sends the KES 2,500 letter, parents pay the wrong amount, the headteacher spends a week on complaints, and the chatbot still "sounds professional". The professional habit is: one task, one short chat, paste only what is needed, demand a quote, and read the quote against the paper on the desk.`,
        `Fikiria shule ya msingi St. Joseph Kilifi, shule ya kubuni inayofuata Mtaala unaozingatia Umahiri (CBC). Karani, Halima, anataka barua ya Kiswahili kwa wazazi wa Darasa la 4 kuhusu ada ya chakula. Ana waraka wa ada wa kurasa 3. Ukurasa wa 1 unasema ada ya chakula ya Darasa la 4 ni KES 1,800 kwa muhula, ifidiwe kufikia tarehe 15 Februari.

Jaribio la kwanza. Anabandika kurasa 3 tu na kuuliza: "Ada ya chakula ya Darasa la 4 ni kiasi gani, na ifidiwe lini? Nukuu mstari." Modeli inanukuu ukurasa wa 1. Anakagua. Inalingana. Anaandaa barua mwenyewe akitumia mstari huo.

Jaribio la pili, asubuhi ileile. Mwalimu amekuwa akizungumza na chatbot ileile kuhusu memo ya CBC ya kurasa 20. Halima anabandika waraka wa ada kwenye mazungumzo hayo marefu na kuuliza swali lilelile. Jibu linatiririka: "Ada ya chakula ya Darasa la 4 ni KES 2,500, ifidiwe mwanzoni mwa muhula." Namba hiyo haiko kwenye waraka wa mwaka huu. Huenda ni uvumi wa mwaka jana, au ruwaza kutoka shule nyingine kwenye maandishi ya mafunzo. Mwanzo wa waraka wake ulikuwa umeanguka nje ya dirisha la muktadha. Sauti haikubadilika. Ukweli tu ndio uliobadilika.

Palipoweza kuharibika baadaye. Halima akituma barua ya KES 2,500, wazazi wanalipa kiasi kisicho sahihi, mwalimu mkuu anatumia wiki kwenye malalamiko, na chatbot bado "inasikika ya kitaalamu". Tabia ya kitaalamu ni: kazi moja, mazungumzo mafupi, bandika kinachohitajika tu, hitaji nukuu, na isome nukuu dhidi ya karatasi iliyo mezani.`
      ),
      scenario({
        titleEn: "Scenario: a pesticide with a fluent name",
        titleSw: "Hali halisi: dawa ya wadudu yenye jina linalotiririka",
        situationEn:
          "A farmer in Trans Nzoia pastes a description of holes in maize leaves into a public chatbot. The reply names a chemical, gives a mixing ratio, and says \"apply this afternoon\". The agrovet attendant does not recognise the product on the PCPB-registered shelf.",
        situationSw:
          "Mkulima Trans Nzoia anabandika maelezo ya mashimo kwenye majani ya mahindi kwenye chatbot ya umma. Jibu linataja kemikali, linatoa uwiano wa kuchanganya, na linasema \"tumia mchana huu\". Muuzaji wa agrovet hatambui bidhaa hiyo kwenye rafu iliyosajiliwa na PCPB.",
        questionEn: "What should the attendant do?",
        questionSw: "Muuzaji afanye nini?",
        optionsEn: [
          "Sell the nearest looking bottle. The chatbot sounded sure, so the chemistry must be right.",
          "Refuse to sell on the chatbot's word. Treat the name as an unverified guess, check the PCPB label and KALRO guidance, and only then advise.",
          "Ask the chatbot to write a louder, more detailed mixing ratio so the farmer feels safer.",
          "Photograph the chatbot screen and send it to the county as official guidance.",
        ],
        optionsSw: [
          "Uza chupa inayofanana zaidi. Chatbot ilisikika na uhakika, kwa hiyo kemia lazima iwe sahihi.",
          "Kataa kuuza kwa neno la chatbot. Chukulia jina kama kisia ambacho hajathibitishwa, kagua lebo ya PCPB na mwongozo wa KALRO, kisha ushauri.",
          "Iombe chatbot iandike uwiano wa kuchanganya wenye sauti kubwa na maelezo zaidi ili mkulima ahisi salama.",
          "Piga picha ya skrini ya chatbot na uitume kaunti kama mwongozo rasmi.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Fluency is not a PCPB registration. A wrong bottle can damage the crop and the person spraying.",
          "Correct. Next-token prediction can invent a product name that looks local. Licensed labels and KALRO guidance are the facts. FarmerAI or an Agrika-style photo tool can support the question; they still do not replace the label.",
          "More words do not add evidence. A longer invented ratio is still invented.",
          "A screenshot of a guess is not county guidance. It would spread the same fluent error.",
        ],
        hintsSw: [
          "Ufasaha si usajili wa PCPB. Chupa isiyo sahihi inaweza kuharibu zao na mtu anayepulizia.",
          "Sahihi. Utabiri wa tokeni inayofuata unaweza kubuni jina la bidhaa linaloonekana la hapa. Lebo zilizoidhinishwa na mwongozo wa KALRO ndio ukweli. FarmerAI au zana ya picha ya mtindo wa Agrika zinaweza kusaidia swali; bado hazichukui nafasi ya lebo.",
          "Maneno zaidi hayaongezi ushahidi. Uwiano mrefu uliobuniwa bado umebuniwa.",
          "Picha ya skrini ya kisia si mwongozo wa kaunti. Ingesambaza kosa lilelile lenye ufasaha.",
        ],
        explainEn:
          "A chatbot completes patterns. A pesticide decision needs a registered product, a label, and a person who can refuse. Sounding sure is not a source.",
        explainSw:
          "Chatbot inakamilisha ruwaza. Uamuzi wa dawa ya wadudu unahitaji bidhaa iliyosajiliwa, lebo, na mtu anayeweza kukataa. Kusikika na uhakika si chanzo.",
      }),
      quiz(
        "Halima pastes a 3-page circular into a long chat that already holds a 20-page memo. The fee on page 1 of the circular is ignored. What most likely happened?",
        "Halima anabandika waraka wa kurasa 3 kwenye mazungumzo marefu ambayo tayari yana memo ya kurasa 20. Ada iliyo ukurasa wa 1 wa waraka inapuuzwa. Ni nini kilichotokea zaidi?",
        [
          "The model refused to read Kiswahili numbers.",
          "The circular's opening left the context window, so the model completed a fluent guess instead.",
          "Inference was switched off, so the model was training on her circular.",
          "The Data Protection Act, 2019, blocks fee circulars.",
        ],
        [
          "Modeli ilikataa kusoma namba za Kiswahili.",
          "Mwanzo wa waraka ulitoka kwenye dirisha la muktadha, hivyo modeli ilikamilisha kisia chenye ufasaha badala yake.",
          "Utumizi ulizimwa, hivyo modeli ilikuwa inajifunza kwa waraka wake.",
          "Sheria ya Kulinda Data, 2019, inazuia waraka wa ada.",
        ],
        1,
        "The context window is finite. Old text drops off. The model still writes fluent sentences from whatever remains, including guesses.",
        "Dirisha la muktadha lina ukomo. Maandishi ya zamani yanaanguka. Modeli bado huandika sentensi zinazotiririka kutoka kwenye kilichobaki, ikiwemo makisia."
      ),
      note(
        "Try it: watch one confident sentence",
        "Jaribu: tazama sentensi moja yenye uhakika",
        `Take a one-page document you already have: a fee note, a chama constitution, a shop price list, a clinic opening-hours card. Do not use anyone's private file.

Ask a chatbot two questions, in two separate short chats:

1. "Quote the exact line that answers [your question]. If it is not in the text, say it is not in the text."
2. The same question with no document pasted.

Compare the two replies. Circle every number, date and name. Which of those can you tick against the paper?

Carry forward:
- A chatbot predicts tokens. It does not check a register unless you give it one.
- Fluency is not a source. Demand a quote, or demand "not in the text".
- Next, unit 6: even a well-quoted model can still fail the people who were missing from its data.`,
        `Chukua hati ya ukurasa mmoja ambayo tayari unayo: noti ya ada, katiba ya chama, orodha ya bei ya duka, kadi ya saa za kufungua za kliniki. Usitumie faili binafsi ya mtu yeyote.

Uliza chatbot maswali mawili, katika mazungumzo mafupi mawili tofauti:

1. "Nukuu mstari halisi unaojibu [swali lako]. Ikiwa haumo kwenye maandishi, sema haumo."
2. Swali lilelile bila kubandika hati.

Linganisha majibu mawili. Zungushia kila namba, tarehe na jina. Ni yapi unayoweza kutia alama dhidi ya karatasi?

Kumbuka:
- Chatbot inatabiri tokeni. Haikagui rejista usipompa moja.
- Ufasaha si chanzo. Hitaji nukuu, au hitaji "haumo kwenye maandishi".
- Ifuatayo, somo la 6: hata modeli iliyonukuu vizuri bado inaweza kuwakosa watu ambao hawakuwa kwenye data yake.`
      ),
    ],
  },
  {
    id: "m0-i-u6",
    titleEn: "Bias: who is missing from the data",
    titleSw: "Upendeleo: nani hayumo kwenye data",
    cards: [
      note(
        "A model cannot learn a person it never met",
        "Modeli haiwezi kumjifunza mtu ambaye haikumwona",
        `Bias, in this unit, is not a feeling in the machine. It is a pattern in the examples. If the examples come from one kind of person, inference will work better for that person and worse for everyone else. You already saw this in unit 3 with a convenience sample of boda riders. Here the same idea shows up after the model is in use: the people missing from the data become the people the model quietly fails.

Kenya makes the gaps easy to name. There are 47 counties. Tools trained on Nairobi hospital notes will not automatically understand a dispensary in Turkana. Many products are strongest in English, usable in Kiswahili, and weak in Dholuo, Kikamba, Somali, or Sheng. A farmer who describes armyworm in the language she thinks in may get a poorer answer than a farmer who types in English. Phone ownership and SACCO membership are not evenly split by gender. If the photos, voice notes or loan files mostly come from men who own the handset, the model learns men's fields, men's voices, men's cashflow.

Then there is informal work. A large share of Kenyan livelihoods sit in jua kali and cash trading: mechanics in Gikomba, stall holders in Kongowea, welders in Kakamega. Their income arrives in uneven M-Pesa lumps, not a monthly salary. A model trained on salaried payroll looks at those lumps and calls them "risky". It is not seeing crime. It is seeing a life it was never shown.

Kenya's AI Strategy 2025-2030 treats agriculture, health and education as places AI should help, and it treats inclusion as part of that job. Inclusion is not a slogan on a slide. For a practitioner it is a checklist: which counties, which languages, which genders, which kinds of work are in the examples, and who will pay when the model is wrong about the people who are not. Products such as FarmerAI on SMS, Agrika with Kiswahili voice, and M-Kliniki Nia in English and Kiswahili are built to meet people where they already speak and pay. They still cannot represent a county or a language they were not given.`,
        `Upendeleo, katika somo hili, si hisia ndani ya mashine. Ni ruwaza katika mifano. Mifano ikitoka kwa aina moja ya watu, utumizi utafanya vizuri zaidi kwa watu hao na vibaya zaidi kwa wengine wote. Ulishaona hili katika somo la 3 kwa sampuli ya urahisi ya waendeshaji wa boda. Hapa wazo lilelile linaonekana modeli ikishaanza kutumika: watu waliokosekana kwenye data wanakuwa watu ambao modeli inashindwa kimya kimya.

Kenya inafanya pengo kuwa rahisi kutaja. Kuna kaunti 47. Zana zilizofunzwa kwa madokezo ya hospitali ya Nairobi hazitaelewa kiotomatiki zahanati ya Turkana. Bidhaa nyingi ni imara zaidi kwa Kiingereza, zinatumika kwa Kiswahili, na ni dhaifu kwa Dholuo, Kikamba, Kisomali au Sheng. Mkulima anayeeleza viwavijeshi kwa lugha anayofikiria nayo anaweza kupata jibu duni kuliko mkulima anayeandika kwa Kiingereza. Umiliki wa simu na uanachama wa SACCO havijagawanyika sawa kwa jinsia. Picha, sauti au faili za mikopo zikitoka zaidi kwa wanaume wanaomiliki simu, modeli inajifunza mashamba ya wanaume, sauti za wanaume, mtiririko wa pesa wa wanaume.

Kisha kuna kazi isiyo rasmi. Sehemu kubwa ya riziki Kenya iko katika jua kali na biashara ya pesa taslimu: mekanika Gikomba, wauzaji Kongowea, welders Kakamega. Mapato yao yanakuja kwa fungu zisizo sawa za M-Pesa, si mshahara wa kila mwezi. Modeli iliyofunzwa kwa mishahara inaangalia fungu hizo na kuzita "hatari". Haioni uhalifu. Inaona maisha ambayo haikuonyeshwa.

Mkakati wa AI wa Kenya 2025-2030 unachukulia kilimo, afya na elimu kama sehemu AI inapaswa kusaidia, na unachukulia ujumuishaji kama sehemu ya kazi hiyo. Ujumuishaji si kauli kwenye slaidi. Kwa mtaalamu ni orodha ya ukaguzi: kaunti zipi, lugha zipi, jinsia zipi, aina zipi za kazi zimo kwenye mifano, na nani atalipa modeli inapokosea kuhusu watu ambao hawamo. Bidhaa kama FarmerAI kwa SMS, Agrika yenye sauti ya Kiswahili, na Nia ya M-Kliniki kwa Kiingereza na Kiswahili zimejengwa kukutana na watu pale wanapozungumza na kulipa. Bado haziwezi kuwakilisha kaunti au lugha ambayo hazikupewa.`
      ),
      reveal([
        {
          termEn: "Bias",
          termSw: "Upendeleo",
          defEn: "A systematic tilt in outputs caused by who and what was missing, or over-represented, in the examples.",
          defSw: "Mwelekeo wa kimfumo katika matokeo unaosababishwa na nani na nini kilichokosekana, au kuwakilishwa kupita kiasi, katika mifano.",
        },
        {
          termEn: "Representation gap",
          termSw: "Pengo la uwakilishi",
          defEn: "A group you care about, such as a county, a language or a kind of work, that barely appears in the data.",
          defSw: "Kundi unalojali, kama kaunti, lugha au aina ya kazi, ambalo linatokea kidogo tu kwenye data.",
        },
        {
          termEn: "Informal work (jua kali)",
          termSw: "Kazi isiyo rasmi (jua kali)",
          defEn: "Livelihoods paid in cash or irregular M-Pesa, not a monthly salary. Many Kenyan models never see them.",
          defSw: "Riziki zinazolipwa kwa taslimu au M-Pesa isiyo ya kawaida, si mshahara wa kila mwezi. Modeli nyingi za Kenya hazizioni.",
        },
        {
          termEn: "Language gap",
          termSw: "Pengo la lugha",
          defEn: "When a tool works in English, struggles in Kiswahili, and fails in the language the user actually thinks in.",
          defSw: "Wakati zana inafanya kazi kwa Kiingereza, inatatizika kwa Kiswahili, na inashindwa kwa lugha ambayo mtumiaji hufikiria kweli.",
        },
        {
          termEn: "Inclusion check",
          termSw: "Ukaguzi wa ujumuishaji",
          defEn: "Before you deploy, write who is in the examples and who will be harmed if they are not.",
          defSw: "Kabla ya kuweka kazini, andika nani yumo kwenye mifano na nani atadhuriwa ikiwa hayumo.",
        },
      ]),
      note(
        "Worked example: Baraka SACCO meets the market",
        "Mfano kamili: Baraka SACCO inakutana na soko",
        `Imagine Baraka SACCO, a fictional SACCO that trained a late-payment model on 4,000 loans. Almost all of those members were salaried teachers and county staff in Nairobi and Kiambu. Deposits arrived on payday. The model learned: irregular deposits mean trouble.

The board then opens a branch next to the open-air market in Busia. New members are traders and jua kali artisans. Their M-Pesa record is lumpy: a good Saturday, a quiet Tuesday, a school-fees week with almost nothing. On the first Monday the late-payment list flags 70 of the 90 new market members. Loans officers call. Sixty of those 70 are paying as agreed; they simply do not look like teachers.

Who was missing. The training files had almost no cash traders, almost no members whose main language at the stall is Kiswahili mixed with Luhya, and fewer women than men among the salaried group. The model did not "hate" Busia. It had never met Busia.

What a practitioner does. Do not switch the model off for everyone. Stop using it as a reason to refuse market members. Collect a representative sample from the new branch, with consent, and keep a person on every refusal. Report the gap to the board in one sentence: "The list was built on salaried Nairobi lives; it is not yet evidence about Busia traders." Kenya's AI Strategy 2025-2030 is pointing national energy at useful systems. Usefulness here means the market members are in the picture before the model judges them.`,
        `Fikiria Baraka SACCO, SACCO ya kubuni iliyofunza modeli ya malipo yanayochelewa kwa mikopo 4,000. Karibu wanachama wote walikuwa walimu wenye mshahara na watumishi wa kaunti Nairobi na Kiambu. Akiba ilikuwa inafika siku ya malipo. Modeli ilijifunza: akiba isiyo ya kawaida ina maana ya tatizo.

Bodi kisha inafungua tawi kando ya soko la nje Busia. Wanachama wapya ni wafanyabiashara na mafundi wa jua kali. Rekodi yao ya M-Pesa ina fungu: Jumamosi nzuri, Jumanne tulivu, wiki ya karo karibu tupu. Jumatatu ya kwanza orodha ya malipo yanayochelewa inaweka 70 kati ya wanachama 90 wapya wa soko. Maafisa wa mikopo wanapiga simu. Sitini kati ya wale 70 wanalipa kama walivyoahidi; tu hawaonekani kama walimu.

Nani alikosekana. Faili za mafunzo zilikuwa karibu bila wafanyabiashara wa taslimu, karibu bila wanachama ambao lugha yao kuu kwenye duka ni Kiswahili kilichochanganyika na Kiluhya, na wanawake wachache kuliko wanaume katika kundi lenye mshahara. Modeli haikuwa na "chuki" na Busia. Ilikuwa haijawahi kukutana na Busia.

Mtaalamu anafanya nini. Usizime modeli kwa kila mtu. Acha kuitumia kama sababu ya kuwakataa wanachama wa soko. Kusanya sampuli wakilishi kutoka tawi jipya, kwa ridhaa, na mtu abaki kwenye kila kukataa. Ripoti pengo kwa bodi kwa sentensi moja: "Orodha ilijengwa kwa maisha ya Nairobi yenye mshahara; bado si ushahidi kuhusu wafanyabiashara wa Busia." Mkakati wa AI wa Kenya 2025-2030 unaelekeza nguvu za taifa kwenye mifumo yenye manufaa. Manufaa hapa yanamaanisha wanachama wa soko wamo kwenye picha kabla modeli haiwahukumu.`
      ),
      scenario({
        titleEn: "Scenario: a voice bot that only knows HQ",
        titleSw: "Hali halisi: chatbot ya sauti inayojua HQ tu",
        situationEn:
          "A county revenue office wants a voice assistant for market permit questions. The supplier tests it with ten English-speaking staff in the headquarters boardroom. Traders at the market ask in Kiswahili and Sheng. After one week, women stall holders say the bot talks over them and then quotes the wrong fee band.",
        situationSw:
          "Ofisi ya mapato ya kaunti inataka msaidizi wa sauti kwa maswali ya vibali vya soko. Msambazaji anaipima na watumishi kumi wanaozungumza Kiingereza katika chumba cha bodi makao makuu. Wafanyabiashara sokoni wanauliza kwa Kiswahili na Sheng. Baada ya wiki moja, wanawake wenye maduka wanasema bot inazungumza juu yao kisha inataja kundi lisilo sahihi la ada.",
        questionEn: "What is the best next step?",
        questionSw: "Hatua ipi bora inayofuata?",
        optionsEn: [
          "Keep the bot. Headquarters staff liked it, so the model is fine.",
          "Pause market use. Test with traders, in the languages they actually speak, including women stall holders, and compare answers with the published fee table. Fix representation before going live again.",
          "Train the bot on traders' national ID numbers so it can recognise them faster.",
          "Switch the bot to English-only so it stops mixing languages.",
        ],
        optionsSw: [
          "Iache bot. Watumishi wa makao makuu waliipenda, kwa hiyo modeli iko sawa.",
          "Simamisha matumizi sokoni. Pima na wafanyabiashara, kwa lugha wanazozungumza kweli, wakiwemo wanawake wenye maduka, na linganisha majibu na jedwali la ada lililochapishwa. Rekebisha uwakilishi kabla ya kurudi kazini.",
          "Ifunze bot kwa namba za kitambulisho za wafanyabiashara ili iwatambue haraka.",
          "Igeuze bot iwe ya Kiingereza tu ili iachane kuchanganya lugha.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A boardroom sample is a convenience sample. It tells you about headquarters, not the market.",
          "Correct. Language, gender and place were missing from the test. The published fee table is still the source of truth; the bot must be checked against it with the people who pay.",
          "ID numbers do not fix a language or gender gap, and they violate data minimisation from unit 3.",
          "English-only would widen the gap. Traders already told you they ask in Kiswahili and Sheng.",
        ],
        hintsSw: [
          "Sampuli ya chumba cha bodi ni sampuli ya urahisi. Inakuambia kuhusu makao makuu, si soko.",
          "Sahihi. Lugha, jinsia na mahali vilikosekana kwenye jaribio. Jedwali la ada lililochapishwa bado ndilo chanzo cha ukweli; bot lazima ikaguliwe dhidi yake na watu wanaolipa.",
          "Namba za kitambulisho hazirekebishi pengo la lugha au jinsia, na zinavunja kanuni ya kupunguza data kutoka somo la 3.",
          "Kiingereza tu kingeongeza pengo. Wafanyabiashara tayari wamekuambia wanauliza kwa Kiswahili na Sheng.",
        ],
        explainEn:
          "If a group is missing from the test, the live system will fail them. Inclusion is a sample design problem, not a poster.",
        explainSw:
          "Kundi likikosekana kwenye jaribio, mfumo hai utawashindwa. Ujumuishaji ni tatizo la kubuni sampuli, si bango.",
      }),
      quiz(
        "A leaf-photo tool was trained mostly on large farms photographed by men with smartphones. A woman in a dryland county sends a photo from a basic phone. The tool says \"healthy\". An officer later finds armyworm. What is the most likely cause?",
        "Zana ya picha ya majani ilifunzwa zaidi kwa mashamba makubwa yaliyopigwa picha na wanaume wenye simu mahiri. Mwanamke katika kaunti yenye ukame anatuma picha kutoka simu ya kawaida. Zana inasema \"zima\". Afisa baadaye anakuta viwavijeshi. Ni sababu ipi yenye uwezekano mkubwa?",
        [
          "The woman used Kiswahili, and photo tools cannot read Kiswahili.",
          "Her county, crop conditions, phone camera and gender were under-represented, so inference guessed from the lives it knew.",
          "FarmerAI has already solved representation for every Kenyan county.",
          "The Data Protection Act, 2019, forces photo tools to say healthy.",
        ],
        [
          "Mwanamke alitumia Kiswahili, na zana za picha haziwezi kusoma Kiswahili.",
          "Kaunti yake, hali ya zao, kamera ya simu na jinsia hazikuwa zimewakilishwa vya kutosha, hivyo utumizi ulikisia kutoka kwa maisha uliyojua.",
          "FarmerAI tayari imetatua uwakilishi kwa kila kaunti ya Kenya.",
          "Sheria ya Kulinda Data, 2019, inalazimisha zana za picha kusema zima.",
        ],
        1,
        "A photo tool fails the examples it rarely saw: dryland leaves, lower-resolution cameras, fields photographed by people who were not in the training set. Do not invent a claim that any one product has closed that gap nationwide.",
        "Zana ya picha inashindwa kwenye mifano ambayo haikuona mara nyingi: majani ya ukame, kamera zenye ubora wa chini, mashamba yaliyopigwa picha na watu ambao hawakuwa kwenye seti ya mafunzo. Usibuni dai kwamba bidhaa moja imefunga pengo hilo nchini kote."
      ),
      note(
        "Try it: four missing-people boxes",
        "Jaribu: masanduku manne ya watu wanaokosekana",
        `Pick one workflow you care about: SACCO list, school letter, clinic queue, shop stock, or a farming SMS. Draw four boxes and write who could be missing:

- County or place (Nairobi HQ versus a dryland ward)
- Language (English, Kiswahili, Sheng, another language used at the stall or shamba)
- Gender (who owns the phone, who is photographed, who is on the loan file)
- Kind of work (salary, jua kali, unpaid care)

Under each box write one harm if the model is wrong about that group, and who pays. Keep it to one sentence each.

Carry forward:
- Bias is a sampling problem you can write down, not a mystery inside the chip.
- Do not invent success rates for FarmerAI, Agrika or Nia. Ask who was in the test.
- Next, unit 7: even a representative model needs better measures than "it was 90 percent accurate".`,
        `Chagua mtiririko mmoja unaojali: orodha ya SACCO, barua ya shule, foleni ya kliniki, stock ya duka, au SMS ya kilimo. Chora masanduku manne na uandike nani anaweza kukosekana:

- Kaunti au mahali (makao makuu Nairobi dhidi ya wodi yenye ukame)
- Lugha (Kiingereza, Kiswahili, Sheng, lugha nyingine inayotumika kwenye duka au shamba)
- Jinsia (nani anamiliki simu, nani anapigwa picha, nani yumo kwenye faili ya mkopo)
- Aina ya kazi (mshahara, jua kali, malezi yasiyolipwa)

Chini ya kila sanduku andika madhara moja modeli ikikosea kuhusu kundi hilo, na nani analipa. Weka sentensi moja kwa kila moja.

Kumbuka:
- Upendeleo ni tatizo la sampuli unaloweza kuandika, si siri ndani ya chip.
- Usibuni viwango vya mafanikio vya FarmerAI, Agrika au Nia. Uliza nani alikuwa kwenye jaribio.
- Ifuatayo, somo la 7: hata modeli wakilishi inahitaji vipimo bora kuliko "ilikuwa sahihi asilimia 90".`
      ),
    ],
  },
  {
    id: "m0-i-u7",
    titleEn: "Measuring quality: accuracy is not enough",
    titleSw: "Kupima ubora: usahihi hautoshi",
    cards: [
      note(
        "Who pays when the number looks good",
        "Nani analipa namba inapoonekana nzuri",
        `Accuracy is the share of all answers that are correct. It is the number vendors like to put on a slide. It is also easy to game. Go back to Umoja SACCO in unit 1. Nine percent of loans fall behind. A model that never flags anyone is right 91 percent of the time and useless every Monday. The officers need a different pair of questions.

First: of the people we flagged, how many actually needed help? That is the quality of the list, sometimes called precision. If the Monday list has 120 names and 54 really fall behind, 66 flags were false alarms. Each false alarm costs officer time and a member's dignity.

Second: of the people who really needed help, how many did we catch? That is coverage of the real cases, sometimes called recall. Umoja caught 54 of 81, about two out of three. The 27 who were missed still defaulted, and they paid the heavier price.

Those two questions pull in opposite directions. Make the list longer and you catch more real cases, but you also wake more people who were fine. Make it shorter and officers have an easier morning, but more members fall through. There is no single "good" number. There is a choice about who pays for which kind of error.

False alarms and misses do not cost the same in a clinic, a school, a shop or a SACCO. A false malaria alarm at a dispensary burns a rapid test and a CHP's afternoon. A missed malaria case can cost a child's life. A shop that over-orders bread wastes stock. A shop that under-orders turns customers away. Write both costs in shillings and in harm, then decide which error you will tolerate more. Kenya's AI Strategy 2025-2030 wants useful tools in health, agriculture and education. Usefulness is not a 95 percent headline. It is a decision about whose afternoon, whose crop, or whose child absorbs the mistake.`,
        `Usahihi ni sehemu ya majibu yote yaliyo sahihi. Ndiyo namba ambayo wauzaji hupenda kuweka kwenye slaidi. Pia ni rahisi kudanganya. Rudi kwa Umoja SACCO katika somo la 1. Asilimia tisa ya mikopo inachelewa. Modeli ambayo haimweki mtu yeyote kwenye orodha ni sahihi asilimia 91 ya wakati na haina faida kila Jumatatu. Maafisa wanahitaji jozi nyingine ya maswali.

Kwanza: kati ya watu tuliowaweka kwenye orodha, wangapi walikuwa wanahitaji msaada kweli? Huo ni ubora wa orodha, wakati mwingine huitwa precision. Orodha ya Jumatatu ikiwa na majina 120 na 54 wakachelewa kweli, kengele 66 zilikuwa za uwongo. Kila kengele ya uwongo inagharimu muda wa afisa na heshima ya mwanachama.

Pili: kati ya watu waliokuwa wanahitaji msaada kweli, wangapi tuliwanasa? Huo ni ufunikaji wa kesi halisi, wakati mwingine huitwa recall. Umoja ilinasa 54 kati ya 81, takriban mbili kati ya tatu. Wale 27 walioachwa bado walishindwa kulipa, na wao ndio walilipa bei nzito zaidi.

Maswali hayo mawili huvuta pande tofauti. Panua orodha na utanasa kesi halisi zaidi, lakini pia utaamsha watu zaidi ambao walikuwa sawa. Ifupishe na maafisa watakuwa na asubuhi nyepesi, lakini wanachama zaidi wataanguka. Hakuna namba moja "nzuri". Kuna chaguo kuhusu nani analipa aina ipi ya kosa.

Kengele za uwongo na kukosa kugundua hazigharimu sawa katika kliniki, shule, duka au SACCO. Kengele ya uwongo ya malaria kwenye zahanati inachoma jaribio la haraka na mchana wa CHP. Kesi ya malaria iliyokosekana inaweza kugharimu maisha ya mtoto. Duka linaloagiza mikate kupita kiasi linapoteza stock. Duka linaloagiza pungufu linawafukuza wateja. Andika gharama zote mbili kwa shilingi na kwa madhara, kisha uamue kosa lipi utavumilia zaidi. Mkakati wa AI wa Kenya 2025-2030 unataka zana zenye manufaa katika afya, kilimo na elimu. Manufaa si kichwa cha habari cha asilimia 95. Ni uamuzi kuhusu mchana wa nani, zao la nani, au mtoto wa nani anayebeba kosa.`
      ),
      reveal([
        {
          termEn: "Accuracy",
          termSw: "Usahihi",
          defEn: "The share of all answers that are correct. Easy to inflate when the rare event is the one you care about.",
          defSw: "Sehemu ya majibu yote yaliyo sahihi. Rahisi kuongeza tukio adimu likiwa ndilo unalojali.",
        },
        {
          termEn: "False alarm",
          termSw: "Kengele ya uwongo",
          defEn: "The model flagged a case that was actually fine. Officers, patients or parents pay in time and worry.",
          defSw: "Modeli iliweka kesi ambayo kweli ilikuwa sawa. Maafisa, wagonjwa au wazazi hulipa kwa muda na wasiwasi.",
        },
        {
          termEn: "Miss",
          termSw: "Kukosa kugundua",
          defEn: "The model stayed quiet about a case that was actually a problem. The person who needed help pays.",
          defSw: "Modeli ilinyamaza kuhusu kesi ambayo kweli ilikuwa tatizo. Mtu aliyekuwa anahitaji msaada ndiye analipa.",
        },
        {
          termEn: "Precision",
          termSw: "Ubora wa orodha (precision)",
          defEn: "Of the flags, how many were real. High precision means fewer wasted calls.",
          defSw: "Kati ya kengele, ngapi zilikuwa za kweli. Precision ya juu inamaanisha simu chache zilizopotea.",
        },
        {
          termEn: "Recall",
          termSw: "Uwezo wa kunasa (recall)",
          defEn: "Of the real problems, how many the model caught. High recall means fewer people left unseen.",
          defSw: "Kati ya matatizo halisi, modeli ilinasa mangapi. Recall ya juu inamaanisha watu wachache walioachwa bila kuonekana.",
        },
      ]),
      note(
        "Worked example: two errors at a dispensary",
        "Mfano kamili: makosa mawili kwenye zahanati",
        `Imagine a fictional dispensary in Kitui that uses a triage helper. Each morning a CHP types symptoms for people in the queue. The helper says "possible malaria, test" or "unlikely, wait". It is not a diagnosis. A clinician still decides. Over four weeks the helper is compared with the clinic's own rapid tests (fictional numbers):

- 400 patients in the queue.
- 60 actually had a positive rapid test.
- The helper said "test" for 90 people: 48 of those 60 true cases, and 42 people who tested negative.
- It stayed quiet for 12 people who later tested positive.

Accuracy looks decent: most of the 400 were correctly left in the ordinary queue. That number hides the 12 misses. A false alarm cost a test strip and twenty minutes. A miss sent a child home with fever. The committee should not celebrate 90 percent. It should ask: are we willing to test 42 extra people to catch more of those 12, and do we have strips for that?

The CHP's job is the gate. She can refuse the helper's "unlikely" when a child is limp. She records every override. That record is how the clinic measures quality in the real queue, not on a vendor slide. M-Kliniki's Nia sits in a similar shape: English and Kiswahili assistance next to telemedicine, not instead of a clinician. No public product should be treated as a test result.`,
        `Fikiria zahanati ya kubuni Kitui inayotumia msaidizi wa kupanga wagonjwa. Kila asubuhi CHP anaandika dalili za walio kwenye foleni. Msaidizi anasema "huenda malaria, pima" au "si rahisi, subiri". Si utambuzi. Daktari bado anaamua. Kwa wiki nne msaidizi analinganishwa na vipimo vya haraka vya kliniki (namba za kubuni):

- Wagonjwa 400 kwenye foleni.
- 60 walikuwa na kipimo cha haraka chenye tokeo chanya.
- Msaidizi alisema "pima" kwa watu 90: 48 kati ya kesi 60 za kweli, na watu 42 waliojaribiwa wakawa hasi.
- Ilinyamaza kwa watu 12 ambao baadaye walipimwa chanya.

Usahihi unaonekana mzuri: wengi kati ya 400 waliachwa kwa usahihi kwenye foleni ya kawaida. Namba hiyo inaficha kukosa 12. Kengele ya uwongo iligharimu utepe wa kipimo na dakika ishirini. Kukosa kulimrudisha mtoto nyumbani na homa. Kamati isisherehekee asilimia 90. Iulize: je, tuko tayari kuwapima watu 42 zaidi ili kunasa zaidi kati ya wale 12, na je, tuna utepe wa kutosha?

Kazi ya CHP ni lango. Anaweza kukataa "si rahisi" ya msaidizi mtoto anapokuwa mzito. Anaandika kila mara anapopinga. Rekodi hiyo ndiyo jinsi kliniki inavyopima ubora kwenye foleni halisi, si kwenye slaidi ya muuzaji. Nia ya M-Kliniki inakaa katika umbo lilelile: msaada wa Kiingereza na Kiswahili kando ya tiba ya mbali, si badala ya daktari. Hakuna bidhaa ya umma inayopaswa kuchukuliwa kama tokeo la kipimo.`
      ),
      scenario({
        titleEn: "Scenario: forty names on the dropout list",
        titleSw: "Hali halisi: majina arobaini kwenye orodha ya kuacha shule",
        situationEn:
          "A secondary school in Kisii buys a tool that flags learners \"at risk of dropping\". In one term it lists 40 names. Eight of those 40 actually leave. Two other learners leave who were never on the list. The board says the tool is \"80 percent accurate\" because most learners were not flagged and stayed. Parents of the 32 false alarms are angry about home visits.",
        situationSw:
          "Shule ya upili Kisii inanunua zana inayowaweka wanafunzi \"walio katika hatari ya kuacha\". Katika muhula mmoja inaweka majina 40. Nane kati ya hayo 40 wanaondoka kweli. Wanafunzi wengine wawili wanaondoka ambao hawakuwa kwenye orodha. Bodi inasema zana ni \"sahihi asilimia 80\" kwa sababu wanafunzi wengi hawakufungiwa na walibaki. Wazazi wa kengele 32 za uwongo wana hasira kuhusu ziara za nyumbani.",
        questionEn: "How should the principal talk about quality?",
        questionSw: "Mwalimu mkuu azungumzeje kuhusu ubora?",
        optionsEn: [
          "Keep quoting 80 percent. The overall number is what the supplier promised.",
          "Report both errors in plain language: 32 families were visited without need, and 2 leavers were never seen. Then decide, with the board, which error the school will spend people on.",
          "Delete the 32 false alarms from the records so next term's accuracy looks better.",
          "Automatically message all 40 names on the list every week so none of the 8 are missed.",
        ],
        optionsSw: [
          "Endelea kunukuu asilimia 80. Namba ya jumla ndiyo muuzaji aliyoahidi.",
          "Ripoti makosa yote mawili kwa lugha rahisi: familia 32 zilitembelewa bila uhitaji, na walioacha 2 hawakuonekana. Kisha amua, pamoja na bodi, kosa lipi shule itatumia watu kushughulikia.",
          "Futa kengele 32 za uwongo kwenye kumbukumbu ili usahihi wa muhula ujao uonekane bora.",
          "Tuma ujumbe kiotomatiki kwa majina yote 40 kila wiki ili kati ya 8 wasikosekane.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accuracy on the whole school hides the 32 visits and the 2 misses. Parents already know the visits were real costs.",
          "Correct. Quality is a pair of harms, not a single percentage. The school can choose a shorter list, a longer list, or a human filter before any home visit.",
          "Erasing false alarms falsifies monitoring. Next term you will not know if the tool got worse.",
          "Weekly messages to 32 families who were fine would multiply the harm of the false alarms without fixing the 2 misses.",
        ],
        hintsSw: [
          "Usahihi kwa shule nzima unaficha ziara 32 na kukosa 2. Wazazi tayari wanajua ziara zilikuwa gharama halisi.",
          "Sahihi. Ubora ni jozi ya madhara, si asilimia moja. Shule inaweza kuchagua orodha fupi, orodha ndefu, au kichujio cha binadamu kabla ya ziara yoyote ya nyumbani.",
          "Kufuta kengele za uwongo kunapotosha ufuatiliaji. Muhula ujao hutajua kama zana ilizidi kuwa mbaya.",
          "Ujumbe wa kila wiki kwa familia 32 zilizokuwa sawa ungeongeza madhara ya kengele za uwongo bila kurekebisha kukosa 2.",
        ],
        explainEn:
          "Ask two costs: wasted action, and unseen harm. Accuracy is the wrong headline when those costs are unequal.",
        explainSw:
          "Uliza gharama mbili: hatua iliyopotea, na madhara yasiyoonekana. Usahihi ni kichwa kibaya cha habari gharama hizo zisipokuwa sawa.",
      }),
      quiz(
        "Umoja SACCO's model flagged 120 loans and 54 of them really fell behind. 81 loans fell behind in total. Which sentence is true?",
        "Modeli ya Umoja SACCO iliweka mikopo 120 na 54 kati yake ilichelewa kweli. Mikopo 81 ilichelewa kwa jumla. Ni sentensi ipi iliyo kweli?",
        [
          "Accuracy is 54 out of 120, so the model is done.",
          "About two out of three real problems were caught, and 66 flags were false alarms. Both numbers are needed before you decide whether Monday calls are worth it.",
          "Because 54 is more than half of 81, there were no false alarms.",
          "The 27 missed loans do not count because they were not on the list.",
        ],
        [
          "Usahihi ni 54 kati ya 120, kwa hiyo modeli imemaliza.",
          "Takriban mbili kati ya tatu za matatizo halisi zilinasiwa, na kengele 66 zilikuwa za uwongo. Namba zote mbili zinahitajika kabla ya kuamua kama simu za Jumatatu zinafaa.",
          "Kwa sababu 54 ni zaidi ya nusu ya 81, hakukuwa na kengele za uwongo.",
          "Mikopo 27 iliyokosekana haihesabiwi kwa sababu haikuwa kwenye orodha.",
        ],
        1,
        "54 out of 120 is the quality of the list (precision). 54 out of 81 is coverage of real cases (recall). The 66 false alarms and the 27 misses are the two prices the SACCO is paying.",
        "54 kati ya 120 ni ubora wa orodha (precision). 54 kati ya 81 ni ufunikaji wa kesi halisi (recall). Kengele 66 za uwongo na kukosa 27 ndiyo bei mbili ambazo SACCO inalipa."
      ),
      note(
        "Try it: price both errors",
        "Jaribu: weka bei kwa makosa yote mawili",
        `Pick one workflow. Write two columns on paper: FALSE ALARM and MISS.

For a shop: over-ordering milk versus running out on Saturday.
For a school: calling a parent whose child is fine versus missing a child who has stopped coming.
For a clinic: extra test strips versus a sick child sent home.
For a SACCO: a wasted call versus a default.

Under each column write: who acts, time in minutes, money in KES if you can estimate it, and harm that is not money. Then circle which error you will tolerate more, and one sentence why.

Carry forward:
- Accuracy is a headline. Precision and recall are the work.
- The person who pays for a miss is often not the person who bought the tool.
- Next, unit 8: prompts that force a checkable output, so quality is easier to see.`,
        `Chagua mtiririko mmoja. Andika safu mbili kwenye karatasi: KENGELE YA UWONGO na KUKOSA.

Kwa duka: kuagiza maziwa kupita kiasi dhidi ya kuishiwa Jumamosi.
Kwa shule: kumpigia mzazi ambaye mtoto wake yuko sawa dhidi ya kumkosa mtoto ambaye ameacha kuja.
Kwa kliniki: utepe wa ziada dhidi ya mtoto mgonjwa aliyerudishwa nyumbani.
Kwa SACCO: simu iliyopotea dhidi ya mkopo usiolipwa.

Chini ya kila safu andika: nani anachukua hatua, muda kwa dakika, pesa kwa KES ukiweza kukadiria, na madhara ambayo si pesa. Kisha zungushia kosa lipi utavumilia zaidi, na sentensi moja ya sababu.

Kumbuka:
- Usahihi ni kichwa cha habari. Precision na recall ndiyo kazi.
- Mtu anayelipia kukosa mara nyingi si mtu aliyenunua zana.
- Ifuatayo, somo la 8: maagizo yanayolazimisha tokeo linaloweza kukaguliwa, ili ubora uonekane rahisi.`
      ),
    ],
  },
  {
    id: "m0-i-u8",
    titleEn: "Prompt patterns: role, context, constraints, output format",
    titleSw: "Mitindo ya maagizo: nafasi, muktadha, vikomo, umbo la tokeo",
    cards: [
      note(
        "Four blocks that make an answer checkable",
        "Vipande vinne vinavyofanya jibu liweze kukaguliwa",
        `A prompt is the instruction you give a chatbot at inference. A weak prompt is a wish: "write something nice to parents". A strong prompt is a job description. Four blocks, used together, turn next-token guessing into something a colleague can check.

Role says who the model should pretend to be, and just as important, who it is not. "You are a CHP drafting a visit note" is a role. "You are not a clinician and you do not diagnose" belongs in the same block. Without it, the model will happily play doctor because that pattern is common in its training text.

Context is the facts for this one job: the CBC grade, the member code, the date of the visit, the circular you pasted. Keep it short enough to fit the context window. Use codes, not names, when the facts are about a person.

Constraints are the walls: language, length, what must never appear, what must be refused. "Do not invent a fee." "Do not recommend a chemical that is not on the PCPB list I pasted." "If the answer is not in the text, say it is not in the text." Constraints are how you fight fluent guesses.

Output format is the shape of the deliverable: six Kiswahili bullets, a table with three columns, a letter with a subject line and no greeting until the officer adds one. Format makes quality cheap to inspect. A paragraph of warm prose hides a wrong Saturday. A bullet that must quote a line does not.

Write the four blocks before you open the chatbot. Reuse them. A school secretary, a loans officer, a CHP and a shopkeeper can each keep one page of patterns in a notebook. Kenya's AI Strategy 2025-2030 will not write those pages for you. The practitioner who can specify a role, a context, a wall and a shape is already running a workflow, not chatting.`,
        `Maagizo (prompt) ni amri unayompa chatbot wakati wa utumizi. Maagizo dhaifu ni matakwa: "andika kitu kizuri kwa wazazi". Maagizo imara ni maelezo ya kazi. Vipande vinne, vikitumika pamoja, vinageuza kisia cha tokeni inayofuata kuwa kitu ambacho mwenzako anaweza kukagua.

Nafasi inasema modeli ijitolee kuwa nani, na sawa na hilo, isiwe nani. "Wewe ni CHP unayeandaa dokezo la ziara" ni nafasi. "Wewe si daktari na hutambui magonjwa" inakaa kwenye kipande kilekile. Bila hiyo, modeli itacheza daktari kwa furaha kwa sababu ruwaza hiyo ni ya kawaida kwenye maandishi yake ya mafunzo.

Muktadha ni ukweli wa kazi hii moja: darasa la CBC, msimbo wa mwanachama, tarehe ya ziara, waraka uliobandika. Ufupishe vya kutosha kuingia dirisha la muktadha. Tumia misimbo, si majina, ukweli ukihusu mtu.

Vikomo ni kuta: lugha, urefu, kile kisichopaswa kuonekana, kile kinachopaswa kukataliwa. "Usibuni ada." "Usipendekeze kemikali ambayo haiko kwenye orodha ya PCPB niliyobandika." "Jibu lisipokuwa kwenye maandishi, sema halimo." Vikomo ndivyo unavyopambana na makisia yenye ufasaha.

Umbo la tokeo ni sura ya kile unachotaka: vifungu sita vya Kiswahili, jedwali lenye safu tatu, barua yenye kichwa bila salamu hadi afisa aongeze. Umbo linaifanya ubora kuwa rahisi kukaguliwa. Aya yenye maneno ya joto inaficha Jumamosi isiyo sahihi. Nukta ambayo lazima inukuu mstari haifichi.

Andika vipande vinne kabla ya kufungua chatbot. Vitumie tena. Karani wa shule, afisa wa mikopo, CHP na mwenye duka kila mmoja anaweza kuweka ukurasa mmoja wa mitindo kwenye daftari. Mkakati wa AI wa Kenya 2025-2030 hautaandika kurasa hizo kwa ajili yako. Mtaalamu anayeweza kutaja nafasi, muktadha, ukuta na umbo tayari anaendesha mtiririko, si kuzungumza tu.`
      ),
      reveal([
        {
          termEn: "Role",
          termSw: "Nafasi",
          defEn: "Who the model should act as, and who it must not act as, for this job.",
          defSw: "Nani modeli ijitolee kuwa, na nani isijitolee kuwa, kwa kazi hii.",
        },
        {
          termEn: "Context",
          termSw: "Muktadha",
          defEn: "The facts for this one task: documents, dates, codes, and the audience.",
          defSw: "Ukweli wa kazi hii moja: hati, tarehe, misimbo, na hadhira.",
        },
        {
          termEn: "Constraints",
          termSw: "Vikomo",
          defEn: "The walls: language, length, what is banned, and when the model must say it does not know.",
          defSw: "Kuta: lugha, urefu, kilichopigwa marufuku, na lini modeli lazima iseme haijui.",
        },
        {
          termEn: "Output format",
          termSw: "Umbo la tokeo",
          defEn: "The shape of the deliverable, such as bullets, a table, or a letter with a subject line.",
          defSw: "Sura ya kile unachotaka, kama nukta, jedwali, au barua yenye kichwa.",
        },
        {
          termEn: "Checkable output",
          termSw: "Tokeo linaloweza kukaguliwa",
          defEn: "A reply a colleague can tick against a document, a rubric, or a list of banned acts.",
          defSw: "Jibu ambalo mwenzako anaweza kutia alama dhidi ya hati, rubriki, au orodha ya vitendo vilivyopigwa marufuku.",
        },
      ]),
      note(
        "Worked example: a CHP visit note, four blocks",
        "Mfano kamili: dokezo la ziara ya CHP, vipande vinne",
        `Imagine a fictional CHP in Homabay, Achieng, writing up a household visit. She will not type a real name or ID. She uses household code HB-204. The visit was about missed immunisation dates, not a diagnosis.

Weak prompt: "Write a nice summary of my visit." The chatbot returns a warm paragraph that invents a child's age, names a vaccine, and ends with "the child is healthy". Fluency has filled every gap. None of it is checkable. None of it is safe.

Strong prompt, four blocks:

- Role: You are a Community Health Promoter drafting a visit note for a nurse to review. You are not a clinician. You do not diagnose or prescribe.
- Context: Household HB-204, visit 12 March, caregiver said two immunisation dates were missed. No other symptoms were described. Write in Kiswahili the caregiver can hear read aloud.
- Constraints: Do not invent ages, names, vaccine brands or test results. If a fact was not given, write "not recorded". Do not tell the caregiver to buy medicine.
- Output format: Five bullets: what was reported, what was not recorded, one referral line, one privacy line ("no ID in this note"), and "nurse to review before any SMS".

Achieng can tick each bullet against her paper notebook in one minute. If a bullet invents a brand, she deletes the note. That is quality you can see, which is what unit 7 asked for.`,
        `Fikiria CHP wa kubuni Homabay, Achieng, anaandika ziara ya kaya. Hataandika jina halisi wala kitambulisho. Anatumia msimbo wa kaya HB-204. Ziara ilihusu tarehe za chanjo zilizokosekana, si utambuzi.

Maagizo dhaifu: "Andika muhtasari mzuri wa ziara yangu." Chatbot inarudisha aya ya joto inayobuni umri wa mtoto, inataja chanjo, na inaisha na "mtoto yu mzima". Ufasaha umejaza kila pengo. Hakuna kinachoweza kukaguliwa. Hakuna kilicho salama.

Maagizo imara, vipande vinne:

- Nafasi: Wewe ni Mhamasishaji wa Afya ya Jamii unayeandaa dokezo la ziara ili muuguzi akague. Wewe si daktari. Hutambui magonjwa wala kuagiza dawa.
- Muktadha: Kaya HB-204, ziara tarehe 12 Machi, mlezi alisema tarehe mbili za chanjo zilikosekana. Dalili nyingine hazikuelezwa. Andika kwa Kiswahili ambacho mlezi anaweza kusikia kikisomwa.
- Vikomo: Usibuni umri, majina, chapa za chanjo au matokeo ya vipimo. Ukweli usipokuwa umetolewa, andika "haukuandikwa". Usimwambie mlezi anunue dawa.
- Umbo la tokeo: Nukta tano: kilichoripotiwa, kile kisichoandikwa, mstari mmoja wa rufaa, mstari mmoja wa faragha ("hakuna kitambulisho kwenye dokezo hili"), na "muuguzi akague kabla ya SMS yoyote".

Achieng anaweza kutia alama kila nukta dhidi ya daftari lake la karatasi katika dakika moja. Nukta ikibuni chapa, anafuta dokezo. Huo ndio ubora unaoonekana, ambao somo la 7 liliuliza.`
      ),
      scenario({
        titleEn: "Scenario: the intern's one-line prompt",
        titleSw: "Hali halisi: maagizo ya mstari mmoja ya mwanafunzi kazini",
        situationEn:
          "An intern at Umoja SACCO types: \"Write a loan refusal to this member.\" The chatbot returns a stern English letter that names the member, quotes a fake bylaw, and says the decision is final. The intern is about to print it on letterhead.",
        situationSw:
          "Mwanafunzi kazini Umoja SACCO anaandika: \"Andika kukataa mkopo kwa mwanachama huyu.\" Chatbot inarudisha barua kali ya Kiingereza inayomtaja mwanachama, inanukuu kanuni bandia, na inasema uamuzi ni wa mwisho. Mwanafunzi kazini yuko karibu kuichapisha kwenye karatasi yenye kichwa cha ofisi.",
        questionEn: "What should the loans supervisor do first?",
        questionSw: "Msimamizi wa mikopo afanye nini kwanza?",
        optionsEn: [
          "Send the letter. Speed matters, and the tone sounds official.",
          "Stop the print. Rebuild the prompt with a role that cannot decide, the real (coded) context, a ban on invented bylaws, and a format the officer must sign.",
          "Ask the chatbot for an even longer letter so it looks more legal.",
          "Fine-tune the chatbot on last year's refusal letters and try again after lunch.",
        ],
        optionsSw: [
          "Tuma barua. Kasi ni muhimu, na sauti inasikika rasmi.",
          "Simamisha uchapishaji. Jenga upya maagizo yenye nafasi isiyoweza kuamua, muktadha halisi (wenye msimbo), marufuku ya kanuni zilizobuniwa, na umbo ambalo afisa lazima asaini.",
          "Iombe chatbot barua ndefu zaidi ili ionekane ya kisheria zaidi.",
          "Rekebisha chatbot kwa barua za kukataa za mwaka jana kisha ujaribu tena baada ya chakula cha mchana.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Official tone is fluency. A fake bylaw can be challenged, and naming the member in a prompt may already be more personal data than the task needs.",
          "Correct. The four blocks stop the model from playing judge. A person still signs, which unit 10 will make a hard rule.",
          "Length is not law. A longer invented bylaw is still invented.",
          "Fine-tuning is a training project you do not need this afternoon, and last year's letters may copy old bias.",
        ],
        hintsSw: [
          "Sauti rasmi ni ufasaha. Kanuni bandia inaweza kupingwa, na kumtaja mwanachama kwenye maagizo huenda tayari ni data binafsi zaidi kuliko kazi inavyohitaji.",
          "Sahihi. Vipande vinne vinazuia modeli kucheza hakimu. Mtu bado anasaini, jambo ambalo somo la 10 litafanya kuwa kanuni ngumu.",
          "Urefu si sheria. Kanuni ndefu iliyobuniwa bado imebuniwa.",
          "Kurekebisha modeli ni mradi wa mafunzo ambao hauhitajiki mchana huu, na barua za mwaka jana zinaweza kunakili upendeleo wa zamani.",
        ],
        explainEn:
          "A one-line prompt invites the model to invent a decision. Role, context, constraints and format keep the human as the officer.",
        explainSw:
          "Maagizo ya mstari mmoja yanaiomba modeli ibuni uamuzi. Nafasi, muktadha, vikomo na umbo vinamweka binadamu kama afisa.",
      }),
      pb({
        titleEn: "Build a four-block SACCO call prompt",
        titleSw: "Jenga maagizo ya simu ya SACCO yenye vipande vinne",
        introEn:
          "A loans officer needs talking points for a three-minute rescheduling call. A good prompt sets the role (not a judge), the coded context, the walls, and a shape the officer can read aloud.",
        introSw:
          "Afisa wa mikopo anahitaji nukta za mazungumzo kwa simu ya dakika tatu ya kupanga upya malipo. Maagizo mazuri yanaweka nafasi (si hakimu), muktadha wenye msimbo, kuta, na umbo ambalo afisa anaweza kusoma kwa sauti.",
        goalEn:
          "Your prompt must include role, context, at least one constraint, and an output format. Do not let the model refuse the loan.",
        goalSw:
          "Maagizo yako lazima yawe na nafasi, muktadha, kikomo kimoja angalau, na umbo la tokeo. Usiache modeli ikatae mkopo.",
        blocksEn: [
          "Role: You are a loans officer drafting talking points. You do not refuse or approve the loan.",
          "Context: Member code NYR-118, current loan due in 14 days, savings have been regular, fictional file only.",
          "Task: Draft talking points for a 3-minute call that offers rescheduling and listens first.",
          "Constraint: Do not invent a balance, a bylaw or a reason for refusal. If a figure is missing, write \"not in the file\".",
          "Output format: Six Kiswahili bullets the officer can read aloud, then one English line for the notebook, ending with \"officer decides\".",
          "Optional colour: Add a long story about the SACCO's founding so the call feels warm.",
        ],
        blocksSw: [
          "Nafasi: Wewe ni afisa wa mikopo unayeandaa nukta za mazungumzo. Hukatai wala kuidhinisha mkopo.",
          "Muktadha: Msimbo wa mwanachama NYR-118, mkopo wa sasa unakwisha siku 14, akiba imekuwa ya kawaida, faili ya kubuni tu.",
          "Kazi: Andaa nukta za mazungumzo kwa simu ya dakika 3 inayotoa kupanga upya malipo na kusikiliza kwanza.",
          "Kikomo: Usibuni salio, kanuni au sababu ya kukataa. Kiasi kisipokuwepo, andika \"hakiko kwenye faili\".",
          "Umbo la tokeo: Nukta sita za Kiswahili ambazo afisa anaweza kusoma kwa sauti, kisha mstari mmoja wa Kiingereza kwa daftari, ukiisha na \"afisa anaamua\".",
          "Rangi ya hiari: Ongeza hadithi ndefu kuhusu kuanzishwa kwa SACCO ili simu ihisi ya joto.",
        ],
        required: [0, 1, 3, 4],
        sampleEn:
          "Role: You are a loans officer drafting talking points. You do not refuse or approve the loan. Context: Member code NYR-118, current loan due in 14 days, savings have been regular, fictional file only. Task: Draft talking points for a 3-minute call that offers rescheduling and listens first. Constraint: Do not invent a balance, a bylaw or a reason for refusal. If a figure is missing, write \"not in the file\". Output format: Six Kiswahili bullets the officer can read aloud, then one English line for the notebook, ending with \"officer decides\".",
        sampleSw:
          "Nafasi: Wewe ni afisa wa mikopo unayeandaa nukta za mazungumzo. Hukatai wala kuidhinisha mkopo. Muktadha: Msimbo wa mwanachama NYR-118, mkopo wa sasa unakwisha siku 14, akiba imekuwa ya kawaida, faili ya kubuni tu. Kazi: Andaa nukta za mazungumzo kwa simu ya dakika 3 inayotoa kupanga upya malipo na kusikiliza kwanza. Kikomo: Usibuni salio, kanuni au sababu ya kukataa. Kiasi kisipokuwepo, andika \"hakiko kwenye faili\". Umbo la tokeo: Nukta sita za Kiswahili ambazo afisa anaweza kusoma kwa sauti, kisha mstari mmoja wa Kiingereza kwa daftari, ukiisha na \"afisa anaamua\".",
      }),
      note(
        "Try it: write four blocks for your job",
        "Jaribu: andika vipande vinne kwa kazi yako",
        `In your notebook, pick one real task that does not need anyone's private file: a CBC sports-day letter, a shop Saturday bread order note, a chama meeting reminder, a clinic opening-hours SMS.

Write four headings: Role, Context, Constraints, Output format. Fill each in two lines. Then swap with a colleague if you have one. They should be able to tick whether a fake reply obeyed the walls.

Carry forward:
- The four blocks are the job description. Chat is just the printer.
- Codes, not names. Quotes, not vibes.
- Next, unit 9: when the facts live in your documents, make the model search those first.`,
        `Kwenye daftari lako, chagua kazi moja halisi isiyohitaji faili binafsi ya mtu: barua ya siku ya michezo ya CBC, dokezo la kuagiza mikate ya Jumamosi, kikumbusho cha mkutano wa chama, SMS ya saa za kufungua za kliniki.

Andika vichwa vinne: Nafasi, Muktadha, Vikomo, Umbo la tokeo. Jaza kila moja kwa mistari miwili. Kisha badilishana na mwenzako ikiwa yupo. Anapaswa kuweza kutia alama kama jibu bandia lilifuata kuta.

Kumbuka:
- Vipande vinne ndiyo maelezo ya kazi. Mazungumzo ni mashine ya kuchapa tu.
- Misimbo, si majina. Nukuu, si hisia.
- Ifuatayo, somo la 9: ukweli ukikaa kwenye hati zako, fanya modeli itafute hizo kwanza.`
      ),
    ],
  },
  {
    id: "m0-i-u9",
    titleEn: "Answering from YOUR documents",
    titleSw: "Kujibu kutoka kwenye HATI ZAKO",
    cards: [
      note(
        "Search first, then speak",
        "Tafuta kwanza, kisha sema",
        `A chatbot's general knowledge is a pile of patterns from other people's text. Your workplace already has the text that matters: SACCO bylaws, a county bursary circular, a CBC fee note, a clinic standing order, a PCPB label, a shop credit book. Answering from your documents means the model is not allowed to "remember" the fee. It must find the line, then talk only about that line.

The workflow is five short steps, in ordinary language:

1. Keep a small, dated set of files that you actually use. One current circular beats a folder of ten old ones.
2. When a question arrives, search those files first, the way you would search a filing cabinet.
3. Give the chatbot only the matching passages plus the question, not the entire cabinet.
4. Instruct it: answer only from these passages. Quote the line. If the line is not there, say it is not in the documents.
5. A person checks the quote against the paper, then sends, signs, or refuses.

People who sell software sometimes wrap those steps in jargon. You do not need the jargon to run the workflow. You need a cabinet, a search, a short paste, a quote rule, and a human. This also protects the context window: you are no longer dumping 40 pages into a chat and hoping page 1 survives.

The same idea sits behind Agrika pointing at PCPB-registered products instead of inventing a bottle, and behind a county officer looking up a published fee table instead of training a model on last year's decisions. A register beats a guess. Kenya's AI Strategy 2025-2030 can fund tools; it cannot replace your circular.`,
        `Maarifa ya jumla ya chatbot ni lundo la ruwaza kutoka kwa maandishi ya watu wengine. Kazini kwako tayari kuna maandishi yanayohusu: kanuni za SACCO, waraka wa basari wa kaunti, noti ya ada ya CBC, agizo la kudumu la kliniki, lebo ya PCPB, daftari la deni la duka. Kujibu kutoka kwenye hati zako kunamaanisha modeli hairuhusiwi "kukumbuka" ada. Lazima ipate mstari, kisha izungumze kuhusu mstari huo tu.

Mtiririko una hatua tano fupi, kwa lugha ya kawaida:

1. Weka seti ndogo ya faili zenye tarehe ambazo kweli unazitumia. Waraka mmoja wa sasa unashinda folda ya kumi za zamani.
2. Swali linapofika, tafuta faili hizo kwanza, kama ungetafuta kabati la faili.
3. Mpe chatbot vifungu vinavyolingana pamoja na swali, si kabati zima.
4. Iagize: jibu kutoka kwenye vifungu hivi tu. Nukuu mstari. Mstari usipokuwepo, sema haumo kwenye hati.
5. Mtu anakagua nukuu dhidi ya karatasi, kisha anatuma, anasaini, au anakataa.

Watu wanaouza programu wakati mwingine hufunga hatua hizo kwa maneno magumu. Huhitaji maneno hayo kuendesha mtiririko. Unahitaji kabati, utafutaji, kubandika kwa ufupi, kanuni ya nukuu, na binadamu. Hili pia linalinda dirisha la muktadha: huwezi tena kumpa mazungumzo kurasa 40 na kutumaini ukurasa wa 1 utasalia.

Wazo lilelile liko nyuma ya Agrika kuelekeza kwenye bidhaa zilizosajiliwa na PCPB badala ya kubuni chupa, na nyuma ya afisa wa kaunti kutafuta jedwali la ada lililochapishwa badala ya kufunza modeli kwa maamuzi ya mwaka jana. Rejista inashinda kisia. Mkakati wa AI wa Kenya 2025-2030 unaweza kufadhili zana; hauwezi kuchukua nafasi ya waraka wako.`
      ),
      reveal([
        {
          termEn: "Source set",
          termSw: "Seti ya vyanzo",
          defEn: "The small, dated collection of files the answer is allowed to come from.",
          defSw: "Mkusanyiko mdogo wa faili zenye tarehe ambazo jibu linaruhusiwa kutoka kwazo.",
        },
        {
          termEn: "Search then read",
          termSw: "Tafuta kisha soma",
          defEn: "Find the matching passages first, then let the model write only from those passages.",
          defSw: "Pata vifungu vinavyolingana kwanza, kisha acha modeli iandike kutoka kwenye vifungu hivyo tu.",
        },
        {
          termEn: "Quote rule",
          termSw: "Kanuni ya nukuu",
          defEn: "Every factual sentence must carry a line from the documents, or say the line is missing.",
          defSw: "Kila sentensi ya ukweli lazima ibebe mstari kutoka kwenye hati, au iseme mstari haumo.",
        },
        {
          termEn: "Grounded answer",
          termSw: "Jibu lililoungwa mkono",
          defEn: "A reply a person can tick against a page, a label, or a bylaw, not against the model's confidence.",
          defSw: "Jibu ambalo mtu anaweza kutia alama dhidi ya ukurasa, lebo, au kanuni, si dhidi ya uhakika wa modeli.",
        },
        {
          termEn: "Register",
          termSw: "Rejista",
          defEn: "A published list that already holds the answer, such as a fee table or PCPB-registered products.",
          defSw: "Orodha iliyochapishwa ambayo tayari ina jibu, kama jedwali la ada au bidhaa zilizosajiliwa na PCPB.",
        },
      ]),
      note(
        "Worked example: the bursary circular on the desk",
        "Mfano kamili: waraka wa basari mezani",
        `Imagine a fictional county education desk in Kericho. The published bursary circular is 12 pages. Paragraph 4.2 says a learner who is repeating a class may apply once, with a letter from the school. An officer, Chepkoech, is asked: "Can a repeat student apply?"

Without documents. She types the question into a public chatbot. The reply is fluent and kind: "Repeat students are not eligible." That sentence is not in the circular. If she sends it, a child is refused for a rule that does not exist.

With documents. She searches the 12 pages for "repeat". She pastes paragraph 4.2 only, plus the question, plus the constraint "quote the line; if missing, say it is not in the circular". The model quotes 4.2. Chepkoech reads the paper. It matches. She still does not let the model award or refuse. The committee uses the circular. The chatbot saved her a reread, nothing more.

Where it could go wrong. If she pastes all 12 pages into a chat that already holds last year's circular, the window may keep the old rule. If she lets the model "summarise our policy" with no paste, it will summarise someone else's policy. Date the file. Paste the match. Quote. Check.`,
        `Fikiria ofisi ya kubuni ya elimu ya kaunti Kericho. Waraka wa basari uliochapishwa una kurasa 12. Aya 4.2 inasema mwanafunzi anayerudia darasa anaweza kuomba mara moja, akiwa na barua kutoka shuleni. Afisa, Chepkoech, anaulizwa: "Je, mwanafunzi anayerudia anaweza kuomba?"

Bila hati. Anaandika swali kwenye chatbot ya umma. Jibu linatiririka na ni la fadhili: "Wanafunzi wanaorudia hawastahili." Sentensi hiyo haiko kwenye waraka. Akiituma, mtoto anakataliwa kwa kanuni ambayo haipo.

Kwa hati. Anatafuta kurasa 12 kwa neno "rudia". Anabandika aya 4.2 tu, pamoja na swali, pamoja na kikomo "nukuu mstari; ukikosekana, sema haumo kwenye waraka". Modeli inanukuu 4.2. Chepkoech anasoma karatasi. Inalingana. Bado hamwachi modeli itoewau au kukataa. Kamati inatumia waraka. Chatbot ilimwokoa kusoma tena, si zaidi.

Palipoweza kuharibika. Akibandika kurasa zote 12 kwenye mazungumzo ambayo tayari yana waraka wa mwaka jana, dirisha linaweza kushika kanuni ya zamani. Akiiacha modeli "ifupishe sera yetu" bila kubandika, itafupisha sera ya mtu mwingine. Weka tarehe kwenye faili. Bandika kinacholingana. Nukuu. Kagua.`
      ),
      scenario({
        titleEn: "Scenario: sports day without the calendar",
        titleSw: "Hali halisi: siku ya michezo bila kalenda",
        situationEn:
          "A headteacher in Kilifi asks a public chatbot, with no school file attached: \"When is our sports day and what should I tell Grade 6 parents in Kiswahili?\" The reply names Saturday 18 June, invents a KES 200 contribution, and writes a warm letter. The term calendar on her desk says sports day is Friday 10 June, contribution KES 0.",
        situationSw:
          "Mwalimu mkuu Kilifi anauliza chatbot ya umma, bila faili ya shule: \"Siku yetu ya michezo ni lini na niwaambie nini wazazi wa Darasa la 6 kwa Kiswahili?\" Jibu linataja Jumamosi 18 Juni, linabuni mchango wa KES 200, na linaandika barua ya joto. Kalenda ya muhula mezani inasema siku ya michezo ni Ijumaa 10 Juni, mchango KES 0.",
        questionEn: "What should she do?",
        questionSw: "Afanye nini?",
        optionsEn: [
          "Send the letter. Parents like Saturday, and the contribution will help the school.",
          "Throw away the letter. Paste the calendar page, demand quotes, and only then draft Kiswahili that a teacher edits.",
          "Ask the chatbot to make the contribution KES 500 so the letter feels more serious.",
          "Train a school model on five years of old letters so it learns the usual Saturday.",
        ],
        optionsSw: [
          "Tuma barua. Wazazi wanapenda Jumamosi, na mchango utasaidia shule.",
          "Tupa barua. Bandika ukurasa wa kalenda, hitaji nukuu, kisha ndipo uandae Kiswahili ambacho mwalimu anahariri.",
          "Iombe chatbot iweke mchango KES 500 ili barua ihisi nzito zaidi.",
          "Funza modeli ya shule kwa barua za zamani za miaka mitano ili ijifunze Jumamosi ya kawaida.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A fluent Saturday is still the wrong Saturday. Inventing a fee creates a conflict with the calendar and with parents.",
          "Correct. The calendar is the source set. Search, paste, quote, then a person edits. CBC letters are generation with a human check, as unit 2 framed.",
          "A larger invented fee is a larger error, not a more professional letter.",
          "Training on old letters would copy old dates. This is an inference job on this term's one-page calendar.",
        ],
        hintsSw: [
          "Jumamosi inayotiririka bado ni Jumamosi isiyo sahihi. Kubuni ada kunaleta mgongano na kalenda na na wazazi.",
          "Sahihi. Kalenda ndiyo seti ya vyanzo. Tafuta, bandika, nukuu, kisha mtu anahariri. Barua za CBC ni uzalishaji wa maudhui wenye ukaguzi wa binadamu, kama somo la 2 lilivyoeleza.",
          "Ada kubwa iliyobuniwa ni kosa kubwa, si barua ya kitaalamu zaidi.",
          "Kufunza kwa barua za zamani kunenakili tarehe za zamani. Hii ni kazi ya utumizi kwenye kalenda ya ukurasa mmoja ya muhula huu.",
        ],
        explainEn:
          "If the file is not in the prompt, the model will complete a pattern from somewhere else. Your documents have to be in the room.",
        explainSw:
          "Faili isipokuwepo kwenye maagizo, modeli itakamilisha ruwaza kutoka mahali pengine. Hati zako lazima ziwe chumbani.",
      }),
      quiz(
        "Why paste only the matching paragraph, not a 40-page circular plus last year's file?",
        "Kwa nini ubandike aya inayolingana tu, si waraka wa kurasa 40 pamoja na faili ya mwaka jana?",
        [
          "Because models refuse to read more than one sentence.",
          "Because the context window is limited, and old or extra pages can push the real line out and invite a fluent guess.",
          "Because the Data Protection Act, 2019, bans circulars longer than three pages.",
          "Because FarmerAI will send the rest by SMS automatically.",
        ],
        [
          "Kwa sababu modeli zinakataa kusoma zaidi ya sentensi moja.",
          "Kwa sababu dirisha la muktadha lina ukomo, na kurasa za zamani au za ziada zinaweza kutoa mstari halisi nje na kualika kisia chenye ufasaha.",
          "Kwa sababu Sheria ya Kulinda Data, 2019, inakataza waraka mrefu kuliko kurasa tatu.",
          "Kwa sababu FarmerAI itatuma vilivyobaki kwa SMS yenyewe.",
        ],
        1,
        "Search first, paste the match, demand a quote. Extra pages compete for the same window and can resurrect an old rule.",
        "Tafuta kwanza, bandika kinacholingana, hitaji nukuu. Kurasa za ziada zinashindana kwa dirisha lilelile na zinaweza kufufua kanuni ya zamani."
      ),
      note(
        "Try it: one page, one question, one quote",
        "Jaribu: ukurasa mmoja, swali moja, nukuu moja",
        `Take one public page you are allowed to use: a shop price list, a school term calendar, opening hours, a chama constitution. Write one question whose answer is on that page.

On paper, write the five steps: source set, search, paste, quote rule, human check. Then run them with a chatbot, or run them with a colleague playing the chatbot. Tick whether the quote exists on the page. If it does not, the workflow failed, even if the tone was kind.

Carry forward:
- Your documents are the source. The model is the typist.
- A register (fees, PCPB products, bylaws) beats a trained guess.
- Next, unit 10: the moment a person must click, sign, or refuse.`,
        `Chukua ukurasa mmoja wa umma unaoruhusiwa kuutumia: orodha ya bei ya duka, kalenda ya muhula, saa za kufungua, katiba ya chama. Andika swali moja ambalo jibu lake liko kwenye ukurasa huo.

Kwenye karatasi, andika hatua tano: seti ya vyanzo, utafutaji, kubandika, kanuni ya nukuu, ukaguzi wa binadamu. Kisha ziendeshe na chatbot, au na mwenzako anayecheza chatbot. Tia alama kama nukuu ipo kwenye ukurasa. Ikiwa haipo, mtiririko umeshindwa, hata kama sauti ilikuwa ya fadhili.

Kumbuka:
- Hati zako ndizo chanzo. Modeli ni mpiga chapa.
- Rejista (ada, bidhaa za PCPB, kanuni) inashinda kisia kilichofunzwa.
- Ifuatayo, somo la 10: wakati mtu lazima abonyeze, asaini, au akatae.`
      ),
    ],
  },
  {
    id: "m0-i-u10",
    titleEn: "Human-in-the-loop: where the person must click, sign, or refuse",
    titleSw: "Binadamu katika mzunguko: mahali mtu lazima abonyeze, asaini, au akatae",
    cards: [
      note(
        "A gate is not a decoration",
        "Lango si pambo",
        `Human-in-the-loop means a person has a real action at a real moment: click send, sign a letter, take an M-Pesa PIN, refuse a recommendation, or escalate to someone more senior. If the person can only watch a dashboard while the system pays, diagnoses, or messages parents on its own, there is no loop. There is a spectator.

Four places almost always need a gate in Kenyan work:

- Money leaving. An STK push on M-Pesa, a loan disbursement, a bursary payment. The model may draft the amount. A person confirms, and the payer can still refuse.
- A body being treated. A CHP, a nurse, a clinician. M-Kliniki's Nia is built to sit with telemedicine in English and Kiswahili, not to replace the person who sees the patient.
- A child being labelled. CBC comments, dropout flags, discipline letters. The teacher signs. The model does not.
- A chemical being sold. PCPB labels and licensed agrovets exist because a fluent name is not a registration. Agrika can point at a registered product. The attendant still reads the label.

A useful gate has three properties. It is specific: "nurse signs before any SMS", not "staff should be careful". It is recorded: the click, the signature, or the refusal is written down, which is how you monitor after deployment. It can fail closed: if the network drops or the officer is away, the system does not quietly send.

Refusing is part of the job. The professional line is "I will not send this". Unit 5 told you why the tone will still sound sure. Unit 7 told you who pays if you do not refuse.`,
        `Binadamu katika mzunguko kunamaanisha mtu ana hatua halisi wakati halisi: bonyeza tuma, saini barua, chukua PIN ya M-Pesa, kataa pendekezo, au peleka kwa mtu wa juu zaidi. Ikiwa mtu anaweza tu kutazama dashibodi wakati mfumo unalipa, kutambua magonjwa, au kuwatumia wazazi ujumbe peke yake, hakuna mzunguko. Kuna mtazamaji.

Sehemu nne karibu kila mara zinahitaji lango katika kazi ya Kenya:

- Pesa zinazotoka. STK ya M-Pesa, utoaji wa mkopo, malipo ya basari. Modeli inaweza kuandaa kiasi. Mtu anathibitisha, na mlipaji bado anaweza kukataa.
- Mwili unaotibiwa. CHP, muuguzi, daktari. Nia ya M-Kliniki imeundwa kukaa pamoja na tiba ya mbali kwa Kiingereza na Kiswahili, si kuchukua nafasi ya mtu anayemwona mgonjwa.
- Mtoto anayewekewa lebo. Maoni ya CBC, bendera za kuacha shule, barua za nidhamu. Mwalimu anasaini. Modeli haisaini.
- Kemikali inayouzwa. Lebo za PCPB na maduka ya agrovet yaliyoidhinishwa yapo kwa sababu jina linalotiririka si usajili. Agrika inaweza kuelekeza kwenye bidhaa iliyosajiliwa. Muuzaji bado anasoma lebo.

Lango lenye manufaa lina sifa tatu. Ni mahususi: "muuguzi asaini kabla ya SMS yoyote", si "wafanyakazi wawe waangalifu". Linaandikwa: bonyezo, sahihi, au kukataa kunaandikwa, ndivyo unavyofuatilia baada ya kuweka kazini. Linaweza kushindwa likiwa limefungwa: mtandao ukikatika au afisa akiwa hayupo, mfumo hautumi kimya kimya.

Kukataa ni sehemu ya kazi. Mstari wa kitaalamu ni "sitatuma hii". Somo la 5 lilikuambia kwa nini sauti bado itasikika na uhakika. Somo la 7 lilikuambia nani analipa usipokataa.`
      ),
      reveal([
        {
          termEn: "Human-in-the-loop",
          termSw: "Binadamu katika mzunguko",
          defEn: "A person has a required click, signature, or refusal before the action leaves the organisation.",
          defSw: "Mtu ana bonyezo, sahihi, au kukataa kunakohitajika kabla hatua haijatoka katika shirika.",
        },
        {
          termEn: "Gate",
          termSw: "Lango",
          defEn: "The exact moment and person who must act. Vague care is not a gate.",
          defSw: "Wakati halisi na mtu ambaye lazima atende. Uangalifu wa jumla si lango.",
        },
        {
          termEn: "Fail closed",
          termSw: "Kushindwa kwa kufungwa",
          defEn: "If the person is away or the network is down, the system does not send, pay, or treat on its own.",
          defSw: "Mtu akiwa hayupo au mtandao ukiwa umekatika, mfumo hautumi, haulipi, wala hautibi peke yake.",
        },
        {
          termEn: "Override log",
          termSw: "Kumbukumbu ya kupinga",
          defEn: "A written record of every time a person refused or changed the model's output, and why.",
          defSw: "Rekodi iliyoandikwa ya kila mara mtu alipokataa au kubadilisha tokeo la modeli, na kwa nini.",
        },
        {
          termEn: "Spectator system",
          termSw: "Mfumo wa mtazamaji",
          defEn: "People can watch, but money, messages or treatment go out without a required human act.",
          defSw: "Watu wanaweza kutazama, lakini pesa, ujumbe au tiba vinatoka bila hatua ya binadamu inayohitajika.",
        },
      ]),
      note(
        "Worked example: the agrovet till",
        "Mfano kamili: till ya agrovet",
        `Imagine Wekesa's agrovet in Bungoma, a fictional shop. A farmer brings a maize-leaf photo. An Agrika-style tool suggests a PCPB-registered product that is in stock. The tablet lights an M-Pesa amount.

The gates, in order:

1. Is this photo from this farmer's field today? Wekesa looks. If it is a picture from the internet, he refuses the suggestion.
2. Does the bottle on the shelf match the PCPB label the tool named? He reads the label. If it does not match, he refuses.
3. Does the farmer agree on the price and the safety instructions, in a language she uses? She can say no.
4. Only then does Wekesa send the M-Pesa prompt. He does not store her PIN. The sale is his click, not the model's.

If the network is down, the shop still sells from the labelled shelf and writes the sale in a book. The tool failing closed is better than an automatic STK for the wrong bottle. FarmerAI may still help the same farmer by SMS on weather or prices; it does not get to pull money.

Where it could go wrong. Auto-STK on every suggestion turns inference into a payment. A "confirm" button that staff tap without reading is a spectator system with extra colour.`,
        `Fikiria agrovet ya Wekesa Bungoma, duka la kubuni. Mkulima analeta picha ya jani la mahindi. Zana ya mtindo wa Agrika inapendekeza bidhaa iliyosajiliwa na PCPB ambayo ipo stockini. Kishikwambi kinaangaza kiasi cha M-Pesa.

Lango, kwa mpangilio:

1. Je, picha hii ni ya shamba la mkulima huyu leo? Wekesa anatazama. Ikiwa ni picha kutoka mtandaoni, anakataa pendekezo.
2. Je, chupa iliyo rafuni inalingana na lebo ya PCPB ambayo zana ilitaja? Anasoma lebo. Ikingekosa kulingana, anakataa.
3. Je, mkulima anakubali bei na maelekezo ya usalama, kwa lugha anayotumia? Anaweza kusema hapana.
4. Hapo ndipo Wekesa anatumia ombi la M-Pesa. Hahifadhi PIN yake. Uuzaji ni bonyezo lake, si la modeli.

Mtandao ukikatika, duka bado linauza kutoka rafu yenye lebo na kuandika uuzaji kwenye daftari. Zana kushindwa ikiwa imefungwa ni bora kuliko STK ya kiotomatiki kwa chupa isiyo sahihi. FarmerAI bado inaweza kumsaidia mkulima huyu kwa SMS kuhusu hali ya hewa au bei; haipati haki ya kuvuta pesa.

Palipoweza kuharibika. STK ya kiotomatiki kwenye kila pendekezo inageuza utumizi kuwa malipo. Kitufe cha "thibitisha" ambacho wafanyakazi wanabonyeza bila kusoma ni mfumo wa mtazamaji wenye rangi ya ziada.`
      ),
      scenario({
        titleEn: "Scenario: auto-SMS the Monday list",
        titleSw: "Hali halisi: SMS ya kiotomatiki kwa orodha ya Jumatatu",
        situationEn:
          "Umoja SACCO's manager proposes: \"Every Monday the model will SMS members on the late-payment list and start an M-Pesa paybill prompt. Officers can read the log on Friday.\" Two officers currently call, listen, and offer rescheduling.",
        situationSw:
          "Meneja wa Umoja SACCO anapendekeza: \"Kila Jumatatu modeli itatuma SMS kwa wanachama kwenye orodha ya malipo yanayochelewa na kuanzisha ombi la paybill ya M-Pesa. Maafisa wanaweza kusoma kumbukumbu Ijumaa.\" Kwa sasa maafisa wawili wanapiga simu, wanasikiliza, na wanatoa kupanga upya malipo.",
        questionEn: "What should the board do?",
        questionSw: "Bodi ifanye nini?",
        optionsEn: [
          "Approve auto-SMS and auto-pay. It saves two salaries.",
          "Refuse auto-pay and auto-shame. Keep a person on the call and on any M-Pesa request, and log every refusal.",
          "Auto-SMS only the market traders, because they are busy.",
          "Let the model send SMS, but in English so it sounds more official.",
        ],
        optionsSw: [
          "Kubali SMS ya kiotomatiki na malipo ya kiotomatiki. Inaokoa mishahara miwili.",
          "Kataa malipo ya kiotomatiki na aibu ya kiotomatiki. Mtu abaki kwenye simu na kwenye ombi lolote la M-Pesa, na kila kukataa kuandikwe.",
          "Tuma SMS ya kiotomatiki kwa wafanyabiashara wa soko tu, kwa sababu wana shughuli.",
          "Acha modeli itume SMS, lakini kwa Kiingereza ili isikike rasmi zaidi.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Unit 1 framed the list as a call, not a refusal. Auto-pay turns a prediction into money leaving a member's phone. False alarms from unit 7 would now cost cash and dignity.",
          "Correct. The loop is the call and the member's right to refuse. Friday logs are spectators. Market traders in unit 6 were already over-flagged.",
          "Busy traders were the group the model understood least. Auto-SMS would hit them first.",
          "English-only official tone is fluency plus a language gap, not a gate.",
        ],
        hintsSw: [
          "Somo la 1 liliweka orodha kama simu, si kukataa. Malipo ya kiotomatiki yanageuza utabiri kuwa pesa zinazotoka kwenye simu ya mwanachama. Kengele za uwongo kutoka somo la 7 sasa zingegharimu pesa na heshima.",
          "Sahihi. Mzunguko ni simu na haki ya mwanachama kukataa. Kumbukumbu za Ijumaa ni za mtazamaji. Wafanyabiashara wa soko katika somo la 6 tayari walikuwa wakiwekwa kwenye orodha kupita kiasi.",
          "Wafanyabiashara wenye shughuli walikuwa kundi ambalo modeli ilielewa kidogo zaidi. SMS ya kiotomatiki ingewapiga kwanza.",
          "Sauti rasmi ya Kiingereza tu ni ufasaha pamoja na pengo la lugha, si lango.",
        ],
        explainEn:
          "If money or shame can leave without a click, you have deployed a spectator system. Put the person back on the act that cannot be undone.",
        explainSw:
          "Pesa au aibu zikiweza kutoka bila bonyezo, umeweka kazini mfumo wa mtazamaji. Rudisha mtu kwenye hatua isiyoweza kubatilishwa.",
      }),
      quiz(
        "Which of these is a real gate rather than a spectator habit?",
        "Ni lipi kati ya haya ni lango halisi badala ya tabia ya mtazamaji?",
        [
          "A poster in the staff room that says \"use AI responsibly\".",
          "A nurse must sign before any patient-facing SMS is sent, and the system will not send if she is offline.",
          "A dashboard that shows the chatbot's last 100 answers in green.",
          "An intern who reads the log on Friday afternoon.",
        ],
        [
          "Bango katika chumba cha wafanyakazi linalosema \"tumia AI kwa uwajibikaji\".",
          "Muuguzi lazima asaini kabla ya SMS yoyote inayomfikia mgonjwa kutumwa, na mfumo hautatuma ikiwa yuko nje ya mtandao.",
          "Dashibodi inayoonyesha majibu 100 ya mwisho ya chatbot kwa rangi ya kijani.",
          "Mwanafunzi kazini anayesoma kumbukumbu Ijumaa alasiri.",
        ],
        1,
        "A gate names the person, the act, and what happens if they are away. Posters, green dashboards and Friday reading happen after the harm.",
        "Lango linataja mtu, hatua, na nini hutokea akiwa hayupo. Mabango, dashibodi za kijani na kusoma Ijumaa hutokea baada ya madhara."
      ),
      note(
        "Try it: mark the undoable step",
        "Jaribu: tia alama hatua isiyoweza kubatilishwa",
        `Draw your workflow as five boxes. Circle the box that cannot be undone: money leaving, a letter on letterhead, a chemical sold, a child labelled, a diagnosis spoken.

Write under the circle: who clicks or signs, how they refuse, where it is logged, and what happens if that person is sick or the network is down. If you cannot fill those four lines, you do not yet have a loop.

Carry forward:
- Watching is not a gate. Click, sign, or refuse.
- Fail closed when the person is away.
- Next, unit 11: design the same workflow for cost, power, cheap phones, and a dead network.`,
        `Chora mtiririko wako kama masanduku matano. Zungushia sanduku lisiloweza kubatilishwa: pesa zinazotoka, barua yenye kichwa cha ofisi, kemikali iliyouzwa, mtoto aliyewekewa lebo, utambuzi uliosemwa.

Andika chini ya duara: nani anabonyeza au anasaini, jinsi anavyokataa, mahali inapoandikwa, na nini hutokea mtu huyo akiwa mgonjwa au mtandao ukikatika. Usipoweza kujaza mistari hiyo minne, bado huna mzunguko.

Kumbuka:
- Kutazama si lango. Bonyeza, saini, au kataa.
- Shindwa kwa kufungwa mtu akiwa hayupo.
- Ifuatayo, somo la 11: buni mtiririko uleule kwa gharama, umeme, simu rahisi, na mtandao uliokufa.`
      ),
    ],
  },
  {
    id: "m0-i-u11",
    titleEn: "Cost, power, phones, and working when the network drops",
    titleSw: "Gharama, umeme, simu, na kufanya kazi mtandao ukikatika",
    cards: [
      note(
        "Inference has to survive Tuesday afternoon",
        "Utumizi lazima usalie Alasiri ya Jumanne",
        `A workflow that only works on fibre, on a charged laptop, in English, at headquarters, is not a Kenyan workflow. Most of the people you serve will meet the tool on a phone, sometimes a basic phone, sometimes with a dying battery, often with a bundle that ran out at 2 pm.

Cost at inference is not only a server invoice. Count four bills: the paid request (tokens in and out, or a subscription), the airtime or bundle, the staff minutes waiting for a spinning wheel, and the extra trip when the tool failed and someone had to come back tomorrow. Unit 4 told you these costs repeat. Here you design for them.

Power is part of the design. A dispensary on solar with a cloudy week cannot keep a tablet charging all day for cloud-only software. A shop that already runs an M-Pesa till on a small battery can keep a paper backup when the till dies. Write what happens at 20 percent battery.

Phones split the audience. FarmerAI reaches farmers on SMS and WhatsApp, channels they already open, for weather, fertiliser, pests and prices. That is a design choice: meet the handset people have. A glossy app that needs a new smartphone will silently drop the same people unit 6 worried about: women who share a phone, jua kali workers, dryland counties.

When the network drops, decide in advance. Queue the note on the device and send at 6 pm. Switch to a paper form with the same fields. Use an offline-capable photo model, which is how Agrika is built for weak networks. Fail closed on money and treatment, as unit 10 required. Kenya's AI Strategy 2025-2030 treats infrastructure as a real constraint, not a footnote. Your one-page workflow should too.`,
        `Mtiririko unaofanya kazi tu kwenye fibre, kwenye kompyuta ndogo iliyochajiwa, kwa Kiingereza, makao makuu, si mtiririko wa Kenya. Watu wengi unaowahudumia watakutana na zana kwenye simu, wakati mwingine simu ya kawaida, wakati mwingine yenye betri inayokufa, mara nyingi yenye salio lililoisha saa nane.

Gharama ya utumizi si ankara ya seva tu. Hesabu bili nne: ombi linalolipwa (tokeni zinazoingia na kutoka, au usajili), salio au bundle, dakika za mfanyakazi akisubiri gurudumu linalozunguka, na safari ya ziada zana iliposhindwa na mtu akalazimika kurudi kesho. Somo la 4 lilikuambia gharama hizi zinajirudia. Hapa unazibuni.

Umeme ni sehemu ya muundo. Zahanati iliyo kwenye sola yenye wiki ya mawingu haiwezi kuweka kishikwambi kikichajiwa siku nzima kwa programu ya wingu tu. Duka ambalo tayari linaendesha till ya M-Pesa kwenye betri ndogo linaweza kuweka nakala ya karatasi till inapokufa. Andika nini hutokea betri ikiwa asilimia 20.

Simu zinagawanya hadhira. FarmerAI inawafikia wakulima kwa SMS na WhatsApp, njia ambazo tayari wanafungua, kwa hali ya hewa, mbolea, wadudu na bei. Hicho ni chaguo la muundo: kutana na simu waliyo nayo. Programu maridadi inayohitaji simu mahiri mpya itawaacha kimya watu wale wale somo la 6 lililohofia: wanawake wanaoshiriki simu, wafanyakazi wa jua kali, kaunti zenye ukame.

Mtandao ukikatika, amua mapema. Weka dokezo kwenye foleni ya kifaa na utume saa kumi na mbili jioni. Badili kwenda fomu ya karatasi yenye sehemu zilezile. Tumia modeli ya picha inayoweza kufanya kazi nje ya mtandao, ambayo ndivyo Agrika ilivyojengwa kwa mitandao dhaifu. Shindwa kwa kufungwa kwenye pesa na tiba, kama somo la 10 lilivyohitaji. Mkakati wa AI wa Kenya 2025-2030 unachukulia miundombinu kama kizuizi halisi, si tanbihi. Mtiririko wako wa ukurasa mmoja unapaswa kufanya hivyo pia.`
      ),
      reveal([
        {
          termEn: "Four bills",
          termSw: "Bili nne",
          defEn: "Request fees, airtime, waiting time, and the extra trip when the tool failed.",
          defSw: "Ada za ombi, salio la simu, muda wa kusubiri, na safari ya ziada zana iliposhindwa.",
        },
        {
          termEn: "Feature phone",
          termSw: "Simu ya kawaida",
          defEn: "A basic handset that may do SMS but not a heavy app. Design for it or you drop users.",
          defSw: "Simu rahisi inayoweza kufanya SMS lakini si programu nzito. Ibuni au utawaacha watumiaji.",
        },
        {
          termEn: "Offline-capable",
          termSw: "Inayoweza nje ya mtandao",
          defEn: "The core job still runs when there is no signal, then syncs later if needed.",
          defSw: "Kazi ya msingi bado inaendeshwa isipokuwepo mawimbi, kisha inasawazisha baadaye ikihitajika.",
        },
        {
          termEn: "Queue and sync",
          termSw: "Foleni kisha sawazisha",
          defEn: "Save the work on the device now, send it when the network returns.",
          defSw: "Hifadhi kazi kwenye kifaa sasa, itume mtandao unaporudi.",
        },
        {
          termEn: "Paper twin",
          termSw: "Pacha wa karatasi",
          defEn: "The same fields on a form, so the shop, clinic or school still runs at 20 percent battery.",
          defSw: "Sehemu zilezile kwenye fomu, ili duka, kliniki au shule bado iendelee betri ikiwa asilimia 20.",
        },
      ]),
      note(
        "Worked example: the Isiolo dispensary afternoon",
        "Mfano kamili: alasiri ya zahanati Isiolo",
        `Imagine a fictional dispensary in Isiolo. 4G works about four hours a day, usually morning. Power is solar. Two CHPs share one tablet. From 2 pm the network is a rumour.

Design A, cloud-only. Every visit note must reach a server before the CHP can leave the household. At 2:15 pm the spinner runs. She waits ten minutes, battery at 18 percent, then walks back without a note. The nurse at the dispensary has no record. Inference happened; nothing useful was stored. The four bills were all paid: bundle, waiting, a wasted walk, and a missed follow-up.

Design B, built for the drop. The CHP writes five bullets on the tablet using a short prompt (unit 8) and no patient name, only a household code (units 3 and 10). The note saves on the device. At 6 pm, when she is back at the dispensary Wi-Fi, the notes sync. If the tablet is dead, the paper twin has the same five fields. A nurse still signs before any SMS (unit 10). M-Kliniki's Nia, used later beside a clinician, does not need to be online in the manyatta.

The lesson is not "never use the cloud". The lesson is: the job that cannot wait for 4G must run on the device or on paper. Photo tools that keep working on a weak network, in the way Agrika is built, follow the same rule.`,
        `Fikiria zahanati ya kubuni Isiolo. 4G inafanya kazi takriban saa nne kwa siku, kwa kawaida asubuhi. Umeme ni sola. CHP wawili wanashiriki kishikwambi kimoja. Kuanzia saa nane mtandao ni uvumi.

Muundo A, wingu tu. Kila dokezo la ziara lazima lifike seva kabla CHP hajaondoka kwenye kaya. Saa nane na dakika 15 gurudumu linazunguka. Anasubiri dakika kumi, betri asilimia 18, kisha anarudi bila dokezo. Muuguzi kwenye zahanati hana rekodi. Utumizi ulitokea; hakuna kilichohifadhiwa chenye manufaa. Bili nne zililipwa zote: bundle, kusubiri, matembezi yaliyopotea, na ufuatiliaji uliokosekana.

Muundo B, uliojengwa kwa kukatika. CHP anaandika nukta tano kwenye kishikwambi akitumia maagizo mafupi (somo la 8) bila jina la mgonjwa, msimbo wa kaya tu (somo la 3 na 10). Dokezo linahifadhiwa kwenye kifaa. Saa kumi na mbili jioni, akiwa amerudi kwenye Wi-Fi ya zahanati, madokezo yanasawazisha. Kishikwambi kikiwa kimekufa, pacha wa karatasi una sehemu zilezile tano. Muuguzi bado anasaini kabla ya SMS yoyote (somo la 10). Nia ya M-Kliniki, inayotumika baadaye kando ya daktari, haina haja ya kuwa mtandaoni kwenye manyatta.

Funzo si "usitumie wingu kamwe". Funzo ni: kazi isiyoweza kusubiri 4G lazima iendeshwe kwenye kifaa au kwenye karatasi. Zana za picha zinazoendelea kufanya kazi kwenye mtandao dhaifu, jinsi Agrika ilivyojengwa, zinafuata kanuni ileile.`
      ),
      scenario({
        titleEn: "Scenario: market day and a dead till",
        titleSw: "Hali halisi: siku ya soko na till iliyokufa",
        situationEn:
          "A shop in Nakuru uses an online tool to suggest how many loaves to order. On Saturday, market day, the network dies from 10 am. The tool will not open. The owner usually orders 80 loaves. Last Saturday she sold 110 and turned people away. A neighbour says: \"Just guess 150 and hope.\"",
        situationSw:
          "Duka Nakuru linatumia zana ya mtandaoni kupendekeza mikate mingapi iagizwe. Jumamosi, siku ya soko, mtandao unafa kuanzia saa nne. Zana haifunguki. Mwenye duka kwa kawaida huagiza mikate 80. Jumamosi iliyopita aliuza 110 na akawafukuza watu. Jirani anasema: \"Bahatisha 150 na utumaini.\"",
        questionEn: "What is the best design for next Saturday?",
        questionSw: "Ni muundo upi bora kwa Jumamosi ijayo?",
        optionsEn: [
          "Wait for the network. No suggestion means no order.",
          "Keep last week's paper counts on the counter, use a simple rule when the tool is down, and sync the tool later for monitoring.",
          "Buy a second smartphone so one can search for signal on the roof all morning.",
          "Train a new model in the shop every Friday night so it does not need the network.",
        ],
        optionsSw: [
          "Subiri mtandao. Bila pendekezo hakuna agizo.",
          "Weka hesabu za karatasi za wiki iliyopita kwenye kaunta, tumia kanuni rahisi zana ikiwa imezima, na usawazishe zana baadaye kwa ufuatiliaji.",
          "Nunua simu mahiri ya pili ili moja itafute mawimbi paa zima asubuhi.",
          "Funza modeli mpya dukani kila Ijumaa usiku ili isiwe na haja ya mtandao.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Bread still has to be ordered. A tool that holds the shop hostage is not useful under Kenya's AI Strategy test of usefulness.",
          "Correct. A paper twin plus a simple rule (unit 2's \"not AI\" option) keeps Saturday alive. The model, when the network returns, is for checking, not for blocking trade.",
          "Roof signal is luck, not a design. The second phone still needs a bundle and power.",
          "Weekly training is the expensive job from unit 4. A shop needs inference that can pause, not a new model every Friday.",
        ],
        hintsSw: [
          "Mikate bado inapaswa kuagizwa. Zana inayoshikilia duka mateka si yenye manufaa chini ya jaribio la Mkakati wa AI wa Kenya kuhusu manufaa.",
          "Sahihi. Pacha wa karatasi pamoja na kanuni rahisi (chaguo la \"si AI\" la somo la 2) inaweka Jumamosi hai. Modeli, mtandao unaporudi, ni ya kukagua, si ya kuzuia biashara.",
          "Mawimbi ya paa ni bahati, si muundo. Simu ya pili bado inahitaji bundle na umeme.",
          "Mafunzo ya kila wiki ni kazi ghali kutoka somo la 4. Duka linahitaji utumizi unaoweza kusimama, si modeli mpya kila Ijumaa.",
        ],
        explainEn:
          "Design the Tuesday-afternoon failure before you celebrate the Monday demo. Paper, SMS, queue-and-sync, or a simple rule should already be written down.",
        explainSw:
          "Buni kushindwa kwa alasiri ya Jumanne kabla ya kusherehekea onyesho la Jumatatu. Karatasi, SMS, foleni-kisha-sawazisha, au kanuni rahisi inapaswa kuwa tayari imeandikwa.",
      }),
      quiz(
        "A county wants farmers to photograph leaves. Most farmers in the ward have feature phones and SMS. What is the strongest first design?",
        "Kaunti inataka wakulima wapige picha za majani. Wakulima wengi katika wodi wana simu za kawaida na SMS. Ni muundo upi imara zaidi kwanza?",
        [
          "A tablet-only app that must stay online in the shamba.",
          "An SMS path for advice (as FarmerAI already uses for weather, fertiliser, pests and prices), plus a photo path at the agrovet where there is a smartphone and, if possible, an offline-capable checker.",
          "Wait until every farmer owns a new smartphone, then launch.",
          "Train a huge model at headquarters so the farmers' phones do not matter.",
        ],
        [
          "Programu ya kishikwambi tu ambayo lazima ibaki mtandaoni shambani.",
          "Njia ya SMS ya ushauri (kama FarmerAI inavyotumia tayari kwa hali ya hewa, mbolea, wadudu na bei), pamoja na njia ya picha kwenye agrovet palipo na simu mahiri na, ikiwezekana, kichunguzi kinachoweza nje ya mtandao.",
          "Subiri kila mkulima amiliki simu mahiri mpya, kisha zindua.",
          "Funza modeli kubwa makao makuu ili simu za wakulima zisiwe na maana.",
        ],
        1,
        "Meet the handset people have. SMS already works. Photos can live at the agrovet. Headquarters training does not put a network in the ward.",
        "Kutana na simu waliyo nayo watu. SMS tayari inafanya kazi. Picha zinaweza kuwa kwenye agrovet. Mafunzo ya makao makuu hayatoi mtandao kwenye wodi."
      ),
      note(
        "Try it: write the 2 pm failure",
        "Jaribu: andika kushindwa kwa saa nane",
        `Take your workflow. Write four lines for 2 pm on a bad Tuesday:

- Battery: 20 percent. What still runs?
- Network: none. What is queued, what is paper, what is refused?
- Phone: feature phone only. Who is dropped, and what SMS or agrovet path remains?
- Bill: what did this failed hour cost in airtime and staff minutes?

If any line is blank, the workflow is still a headquarters demo.

Carry forward:
- Count four bills, not one invoice.
- Fail closed on money and bodies; fail over to paper and SMS on notes.
- Next, unit 12: put the whole practitioner loop on one checkable page.`,
        `Chukua mtiririko wako. Andika mistari minne kwa saa nane ya Jumanne mbaya:

- Betri: asilimia 20. Nini bado inaenda?
- Mtandao: hakuna. Nini kiko kwenye foleni, nini ni karatasi, nini kimekataliwa?
- Simu: simu ya kawaida tu. Nani ameachwa, na ni njia ipi ya SMS au agrovet iliyobaki?
- Bili: saa hii iliyoshindwa iligharimu nini kwa salio na dakika za mfanyakazi?

Mstari wowote ukiwa tupu, mtiririko bado ni onyesho la makao makuu.

Kumbuka:
- Hesabu bili nne, si ankara moja.
- Shindwa kwa kufungwa kwenye pesa na miili; hamisha kwenye karatasi na SMS kwenye madokezo.
- Ifuatayo, somo la 12: weka mzunguko mzima wa mtaalamu kwenye ukurasa mmoja unaoweza kukaguliwa.`
      ),
    ],
  },
  {
    id: "m0-i-u12",
    titleEn: "Checkpoint: specify a checkable workflow on one page",
    titleSw: "Kituo cha ukaguzi: eleza mtiririko unaoweza kukaguliwa kwenye ukurasa mmoja",
    cards: [
      note(
        "If it does not fit on one page, it cannot be run on a Tuesday",
        "Usipoingia kwenye ukurasa mmoja, hauwezi kuendeshwa Jumanne",
        `You now have the practitioner loop. Unit 12 is not a new theory. It is a one-page test: can another professional, who was not in the meeting, run your AI workflow next week without guessing?

The page has nine lines. Each line is a sentence, not a paragraph.

1. Problem: given these inputs, predict this output, so that this person can take this action. If the true answer is "not AI", write the rule or form instead.
2. Train or use: we are using a finished tool / we are fine-tuning / we are training. If using, name the inference.
3. Lawful data: what we collect, the basis (consent or another lawful basis), what we refuse to collect. DPA 2019 and ODPC still apply.
4. Who is missing: county, language, gender, informal work. One harm if we are wrong about them.
5. Quality: one false-alarm cost, one miss cost, who pays, which error we will tolerate more.
6. Prompt or documents: the four blocks, or the search-then-quote rule, or both.
7. Human gate: who clicks, signs, or refuses, and what fail-closed means.
8. Tuesday 2 pm: phone, power, network drop, four bills.
9. Thirty-day check: which number we will look at, on which date, to decide monitor / retrain / retire.

If a line is a slogan ("be ethical", "leverage AI", "align with the Strategy"), it fails the test. Kenya's AI Strategy 2025-2030 can sit in line 1 as the sector you serve. It cannot replace lines 7 and 8. A consultant's 30-page deck is not a workflow. A SACCO officer's one page is.`,
        `Sasa una mzunguko wa mtaalamu. Somo la 12 si nadharia mpya. Ni jaribio la ukurasa mmoja: je, mtaalamu mwingine, ambaye hakuwa kwenye mkutano, anaweza kuendesha mtiririko wako wa AI wiki ijayo bila kukisia?

Ukurasa una mistari tisa. Kila mstari ni sentensi, si aya.

1. Tatizo: kwa kupewa maingizo haya, tabiri tokeo hili, ili mtu huyu achukue hatua hii. Jibu la kweli likiwa "si AI", andika kanuni au fomu badala yake.
2. Kufunza au kutumia: tunatumia zana iliyokamilika / tunarekebisha / tunafunza. Tukitumia, taja utumizi.
3. Data halali: tunachokusanya, msingi (ridhaa au msingi mwingine halali), tunachokataa kukusanya. DPA 2019 na ODPC bado zinatumika.
4. Nani hayumo: kaunti, lugha, jinsia, kazi isiyo rasmi. Madhara moja tukikosea kuwahusu.
5. Ubora: gharama moja ya kengele ya uwongo, gharama moja ya kukosa, nani analipa, kosa lipi tutavumilia zaidi.
6. Maagizo au hati: vipande vinne, au kanuni ya tafuta-kisha-nukuu, au zote mbili.
7. Lango la binadamu: nani anabonyeza, anasaini, au anakataa, na kushindwa kwa kufungwa kunamaanisha nini.
8. Jumanne saa nane: simu, umeme, kukatika kwa mtandao, bili nne.
9. Ukaguzi wa siku thelathini: namba ipi tutaangalia, tarehe ipi, ili kuamua kufuatilia / kufunza upya / kustaafisha.

Mstari ukiwa kauli ("kuwa na maadili", "tumia AI", "lingana na Mkakati"), unashindwa jaribio. Mkakati wa AI wa Kenya 2025-2030 unaweza kukaa kwenye mstari wa 1 kama sekta unayohudumia. Hauwezi kuchukua nafasi ya mistari ya 7 na 8. Daftari la kurasa 30 la mshauri si mtiririko. Ukurasa mmoja wa afisa wa SACCO ndio mtiririko.`
      ),
      reveal([
        {
          termEn: "Checkable workflow",
          termSw: "Mtiririko unaoweza kukaguliwa",
          defEn: "A description another professional can run next week without guessing what you meant.",
          defSw: "Maelezo ambayo mtaalamu mwingine anaweza kuendesha wiki ijayo bila kukisia ulichomaanisha.",
        },
        {
          termEn: "One-pager",
          termSw: "Ukurasa mmoja",
          defEn: "Nine sentences covering problem, train-or-use, law, inclusion, quality, prompt or documents, gate, Tuesday failure, and a 30-day check.",
          defSw: "Sentensi tisa zinazofunika tatizo, kufunza-au-kutumia, sheria, ujumuishaji, ubora, maagizo au hati, lango, kushindwa kwa Jumanne, na ukaguzi wa siku 30.",
        },
        {
          termEn: "Slogan test",
          termSw: "Jaribio la kauli",
          defEn: "If a line could sit on a poster, it is not yet operational. Replace it with a person, a number, or a refusal.",
          defSw: "Mstari ukiweza kukaa kwenye bango, bado hauko kazini. Ubadilishe na mtu, namba, au kukataa.",
        },
        {
          termEn: "Thirty-day check",
          termSw: "Ukaguzi wa siku thelathini",
          defEn: "The date and the number that will decide whether you monitor, retrain, or retire.",
          defSw: "Tarehe na namba ambazo zitaamua kama utafuatilia, kufunza upya, au kustaafisha.",
        },
        {
          termEn: "Practitioner loop",
          termSw: "Mzunguko wa mtaalamu",
          defEn: "The path from a framed problem to a gated, measurable, offline-tolerant use of someone else's model.",
          defSw: "Njia kutoka tatizo lililoelezwa hadi matumizi yenye lango, yanayopimika, na yanayostahimili kutokuwa mtandaoni ya modeli ya mtu mwingine.",
        },
      ]),
      note(
        "Worked example: one page for the school canteen",
        "Mfano kamili: ukurasa mmoja kwa kantini ya shule",
        `St. Joseph's, the fictional Kilifi school, wants less wasted githeri. Here is a one-pager a cook could actually use.

1. Problem: given weekday, exam week yes/no, and yesterday's leftover plates, predict plates of githeri to cook tomorrow, so the cook can change the number before 7 am.
2. Train or use: use. A simple spreadsheet model trained once on last term's counts; daily use is inference. We are not training a chatbot.
3. Lawful data: plate counts and dates only. No learner names. Cook records are school operations data, stored for one term, then summarised.
4. Who is missing: boarding Saturdays and visitors' days were rare in last term's file. Risk: under-cooking on those days.
5. Quality: false alarm is 20 extra plates (food waste, cook time). Miss is 20 too few (learners miss lunch). We will tolerate extra plates more than hungry learners. Review leftover vs prediction every Friday.
6. Prompt or documents: no chatbot for the number. If we draft a parent SMS about a menu change, four blocks, quote the week's menu card.
7. Human gate: cook may raise or lower the number. Nothing auto-orders food. Headteacher signs any parent SMS.
8. Tuesday 2 pm: the number for tomorrow is written on paper by 1 pm. If the tablet is dead, yesterday's count plus ten plates is the rule. Feature phones are irrelevant; this is a kitchen job.
9. Thirty-day check: on the last Friday of the month, if leftovers exceed 15 percent of plates cooked for two weeks running, pause and rethink the problem.

Every line can be ticked. A new cook can run Tuesday.`,
        `St. Joseph's, shule ya kubuni Kilifi, inataka githeri kidogo kipotee. Huu ni ukurasa mmoja ambao mpishi angeweza kutumia kweli.

1. Tatizo: kwa kupewa siku ya wiki, wiki ya mitihani ndiyo/hapana, na sahani zilizobaki jana, tabiri sahani za githeri zipikwe kesho, ili mpishi abadilishe namba kabla ya saa moja asubuhi.
2. Kufunza au kutumia: tumia. Modeli rahisi ya lahajedwali iliyofunzwa mara moja kwa hesabu za muhula uliopita; matumizi ya kila siku ni utumizi. Hatuifundishi chatbot.
3. Data halali: hesabu za sahani na tarehe tu. Hakuna majina ya wanafunzi. Rekodi za mpishi ni data ya uendeshaji wa shule, huhifadhiwa muhula mmoja, kisha hufupishwa.
4. Nani hayumo: Jumamosi za bweni na siku za wageni zilikuwa chache kwenye faili ya muhula uliopita. Hatari: kupika pungufu siku hizo.
5. Ubora: kengele ya uwongo ni sahani 20 za ziada (chakula kinapotea, muda wa mpishi). Kukosa ni 20 pungufu (wanafunzi wanakosa chakula cha mchana). Tutavumilia sahani za ziada kuliko wanafunzi wenye njaa. Kagua kilichobaki dhidi ya utabiri kila Ijumaa.
6. Maagizo au hati: hakuna chatbot kwa namba. Tukiandaa SMS ya wazazi kuhusu mabadiliko ya menyu, vipande vinne, nukuu kadi ya menyu ya wiki.
7. Lango la binadamu: mpishi anaweza kupandisha au kushusha namba. Hakuna kinachoagiza chakula kiotomatiki. Mwalimu mkuu anasaini SMS yoyote ya wazazi.
8. Jumanne saa nane: namba ya kesho inaandikwa kwenye karatasi kufikia saa saba. Kishikwambi kikiwa kimekufa, hesabu ya jana pamoja na sahani kumi ndiyo kanuni. Simu za kawaida hazihusiki; hii ni kazi ya jikoni.
9. Ukaguzi wa siku thelathini: Ijumaa ya mwisho ya mwezi, vilivyobaki vikizidi asilimia 15 ya sahani zilizopikwa kwa wiki mbili mfululizo, simamisha na ufikirie tatizo upya.

Kila mstari unaweza kutiwa alama. Mpishi mpya anaweza kuendesha Jumanne.`
      ),
      scenario({
        titleEn: "Scenario: a 30-page transformation deck",
        titleSw: "Hali halisi: daftari la kurasa 30 la mabadiliko",
        situationEn:
          "A consultant leaves a 30-page \"AI transformation\" pack at a county office. It names Kenya's AI Strategy 2025-2030, shows stock photos of farmers, and says \"deploy chatbots across health, education and agriculture\". There is no problem sentence, no train-or-use choice, no gate, no Tuesday failure, and no 30-day number. Leadership asks you, the skilled practitioner, to respond by Friday.",
        situationSw:
          "Mshauri anaacha pakiti ya kurasa 30 ya \"mabadiliko ya AI\" katika ofisi ya kaunti. Inataja Mkakati wa AI wa Kenya 2025-2030, inaonyesha picha za wakulima, na inasema \"weka chatbot kazini katika afya, elimu na kilimo\". Hakuna sentensi ya tatizo, hakuna chaguo la kufunza-au-kutumia, hakuna lango, hakuna kushindwa kwa Jumanne, wala namba ya siku 30. Uongozi unakuomba wewe, mtaalamu, ujibu kufikia Ijumaa.",
        questionEn: "What do you send back?",
        questionSw: "Unarudisha nini?",
        optionsEn: [
          "A thank-you note. Thirty pages shows seriousness.",
          "The nine-line one-pager, filled for one real workflow (for example FarmerAI-style SMS advice with a KALRO/PCPB check, or Nia beside a clinician), and a request to stop until those lines exist.",
          "A request to train a county-owned giant model so you are not dependent on anyone.",
          "A Kiswahili translation of the 30 pages, unchanged.",
        ],
        optionsSw: [
          "Barua ya shukrani. Kurasa thelathini zinaonyesha uzito.",
          "Ukurasa mmoja wa mistari tisa, uliojazwa kwa mtiririko mmoja halisi (kwa mfano ushauri wa SMS wa mtindo wa FarmerAI wenye ukaguzi wa KALRO/PCPB, au Nia kando ya daktari), na ombi la kusimama hadi mistari hiyo iwepo.",
          "Ombi la kufunza modeli kubwa inayomilikiwa na kaunti ili usitegemee mtu yeyote.",
          "Tafsiri ya Kiswahili ya kurasa 30, bila kubadilisha.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Length is not operational. The Strategy name on a cover is not a gate, a sample, or a 30-day number.",
          "Correct. One checkable workflow is how a practitioner uses the Strategy. Training a giant model is the expensive job most counties should not start with.",
          "Owning a giant model is unit 4's trap: you still need inference, data rights, power and people. It does not fix a slogan deck.",
          "Translating slogans leaves the same empty lines in another language.",
        ],
        hintsSw: [
          "Urefu si uendeshaji. Jina la Mkakati kwenye jalada si lango, sampuli, wala namba ya siku 30.",
          "Sahihi. Mtiririko mmoja unaoweza kukaguliwa ndivyo mtaalamu anavyotumia Mkakati. Kufunza modeli kubwa ni kazi ghali ambayo kaunti nyingi hazipaswi kuanzia nayo.",
          "Kumiliki modeli kubwa ni mtego wa somo la 4: bado unahitaji utumizi, haki za data, umeme na watu. Hairekebishi daftari la kauli.",
          "Kutafsiri kauli kunaacha mistari ileile tupu kwa lugha nyingine.",
        ],
        explainEn:
          "The checkpoint is the nine lines. Anything that cannot fill them is not yet work.",
        explainSw:
          "Kituo cha ukaguzi ni mistari tisa. Chochote kisichoweza kuyajaza bado si kazi.",
      }),
      quiz(
        "Which line on the one-pager most clearly fails the slogan test?",
        "Ni mstari upi kwenye ukurasa mmoja unashindwa zaidi jaribio la kauli?",
        [
          "\"Cook may raise or lower the number; nothing auto-orders food.\"",
          "\"We will leverage AI to transform feeding in line with the national Strategy.\"",
          "\"On the last Friday of the month, if leftovers exceed 15 percent for two weeks, pause.\"",
          "\"Plate counts and dates only; no learner names.\"",
        ],
        [
          "\"Mpishi anaweza kupandisha au kushusha namba; hakuna kinachoagiza chakula kiotomatiki.\"",
          "\"Tutatumia AI kubadilisha ulishaji kupatana na Mkakati wa taifa.\"",
          "\"Ijumaa ya mwisho ya mwezi, vilivyobaki vikizidi asilimia 15 kwa wiki mbili, simamisha.\"",
          "\"Hesabu za sahani na tarehe tu; hakuna majina ya wanafunzi.\"",
        ],
        1,
        "Leverage and transform name no person, no number, no refusal. The other three lines can be run on a Tuesday.",
        "Tumia na badilisha havitaji mtu, namba, wala kukataa. Mistari mingine mitatu inaweza kuendeshwa Jumanne."
      ),
      note(
        "Try it: fill the nine lines for your place",
        "Jaribu: jaza mistari tisa kwa mahali pako",
        `Choose one real place you know: a SACCO, a county desk, a school, a clinic, a shop, a shamba. Fill the nine lines in a notebook, in English or Kiswahili. Use fictional codes, not real names. If a line stays empty, that is the skill you still need to practise, not a reason to skip the page.

Ask a colleague to try to run Tuesday from your page without calling you. Every question they ask is a line that was still a slogan.

Carry forward:
- You can run a real Kenyan AI workflow without becoming a research scientist.
- Use first, train rarely. Quote your documents. Keep a human on the undoable step. Budget inference, power and the drop.
- The one-pager is the professional deliverable. Keep it. Update it when monitoring says the world moved.`,
        `Chagua mahali pamoja halisi unayojua: SACCO, ofisi ya kaunti, shule, kliniki, duka, shamba. Jaza mistari tisa kwenye daftari, kwa Kiingereza au Kiswahili. Tumia misimbo ya kubuni, si majina halisi. Mstari ukibaki tupu, huo ndio ujuzi bado unahitaji kufanya mazoezi, si sababu ya kuruka ukurasa.

Mwombe mwenzako ajaribu kuendesha Jumanne kutoka kwenye ukurasa wako bila kukupigia. Kila swali analouliza ni mstari ambao bado ulikuwa kauli.

Kumbuka:
- Unaweza kuendesha mtiririko halisi wa AI nchini Kenya bila kuwa mwanasayansi wa utafiti.
- Tumia kwanza, funza mara chache. Nukuu hati zako. Weka binadamu kwenye hatua isiyoweza kubatilishwa. Panga bajeti ya utumizi, umeme na kukatika.
- Ukurasa mmoja ndio tokeo la kitaalamu. Uweke. Usasishe ufuatiliaji unaposema dunia imehamia.`
      ),
    ],
  },
]
