import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/** Schools and learning — intermediate track (teachers, TVET trainers, education officers). */
export const eduIntermediateUnits: CurriculumUnit[] = [
  {
    id: "edu-i-u1",
    titleEn: "How adaptive learning systems work",
    titleSw: "Jinsi mifumo ya ujifunzaji unaojirekebisha inavyofanya kazi",
    cards: [
      note(
        "What an adaptive system actually does",
        "Mfumo unaojirekebisha hufanya nini hasa",
        `An adaptive learning system is software that changes what a learner sees next based on how they answered so far. If a learner keeps getting equivalent fractions right, it moves on; if they keep getting them wrong, it gives easier items, a hint or a short explanation.

It works with three parts. First, an item bank: hundreds of questions, each tagged with the skill it tests and how hard it is. Second, a learner model: a running estimate, for every skill, of how likely it is that this learner has mastered it. Third, a selection rule: pick the next item that is most useful given that estimate, and declare the skill mastered once the estimate passes a threshold such as 0.95.

The key word is estimate. The system never sees what a child knows. It only sees right and wrong answers, and answers are noisy: a learner can guess correctly, or slip on something they know. One well-known method, Bayesian knowledge tracing, handles this by updating a probability of mastery after every answer, allowing for guesses and slips. When a dashboard says "mastered", read it as "the model is fairly confident, based on the items it gave". That is useful evidence, not a verdict. You already know from Foundations that a prediction is not a fact; here the prediction is about a child.`,
        `Mfumo wa ujifunzaji unaojirekebisha (adaptive learning) ni programu inayobadilisha kile mwanafunzi anachoona baadaye kulingana na jinsi alivyojibu hadi sasa. Mwanafunzi akiendelea kupata sehemu sawa (equivalent fractions) sahihi, mfumo unasonga mbele; akiendelea kukosea, unampa maswali rahisi zaidi, kidokezo au maelezo mafupi.

Mfumo huu una sehemu tatu. Kwanza, benki ya maswali: mamia ya maswali, kila moja likiwa na alama ya ujuzi linaopima na ugumu wake. Pili, modeli ya mwanafunzi: makadirio yanayoendelea, kwa kila ujuzi, ya uwezekano kwamba mwanafunzi huyu ameumudu. Tatu, kanuni ya kuchagua: chagua swali linalofuata lenye manufaa zaidi kulingana na makadirio hayo, na utangaze kuwa ujuzi umemudiwa makadirio yanapovuka kiwango fulani, kwa mfano 0.95.

Neno muhimu ni makadirio. Mfumo hauoni kamwe kile mtoto anachojua. Unaona tu majibu sahihi na yasiyo sahihi, na majibu hayo yana kelele: mwanafunzi anaweza kubahatisha akapata, au kuteleza kwenye jambo analolijua. Njia moja inayojulikana, Bayesian knowledge tracing, hushughulikia hili kwa kusasisha uwezekano wa umahiri baada ya kila jibu, ikizingatia kubahatisha na kuteleza. Dashibodi ikisema "amemudu", isome kama "modeli ina uhakika kiasi, kutokana na maswali iliyotoa". Huo ni ushahidi wenye manufaa, si hukumu. Tayari unajua kutoka Misingi kwamba utabiri si ukweli; hapa utabiri unamhusu mtoto.`,
        "/learn/content/edu/collaborative-classroom-ai.jpg"
      ),
      reveal([
        {
          termEn: "Item bank",
          termSw: "Benki ya maswali",
          defEn: "The pool of questions the system draws from, each tagged with a skill and a difficulty.",
          defSw: "Hazina ya maswali ambayo mfumo huchagua kutoka kwayo, kila swali likiwa na alama ya ujuzi na ugumu.",
        },
        {
          termEn: "Learner model",
          termSw: "Modeli ya mwanafunzi",
          defEn: "The system's running estimate of how likely a learner is to have mastered each skill.",
          defSw: "Makadirio ya mfumo yanayoendelea kuhusu uwezekano kwamba mwanafunzi ameumudu kila ujuzi.",
        },
        {
          termEn: "Guess and slip",
          termSw: "Kubahatisha na kuteleza",
          defEn: "A guess is a correct answer without mastery; a slip is a wrong answer despite mastery.",
          defSw: "Kubahatisha ni jibu sahihi bila umahiri; kuteleza ni jibu lisilo sahihi ingawa mwanafunzi ana umahiri.",
        },
        {
          termEn: "Mastery threshold",
          termSw: "Kiwango cha umahiri",
          defEn: "The probability (for example 0.95) above which the system treats a skill as learned and moves on.",
          defSw: "Uwezekano (kwa mfano 0.95) ambao ukivukwa mfumo huchukulia ujuzi umejifunzwa na kusonga mbele.",
        },
      ]),
      note(
        "Worked example: one learner, one skill",
        "Mfano wa kazi: mwanafunzi mmoja, ujuzi mmoja",
        `Imagine a Grade 5 maths app used in a school in Machakos. For the skill "equivalent fractions", the app starts every learner at a 0.30 chance of mastery. It assumes a 0.20 chance of guessing right without mastery, a 0.10 chance of slipping, and a 0.15 chance of learning the skill after each practice item.

Wanjiku answers her first item correctly. The app asks: how likely is a correct answer from someone who has mastered it (0.30 x 0.90 = 0.27) versus someone who has not (0.70 x 0.20 = 0.14)? Her mastery estimate becomes 0.27 / (0.27 + 0.14), about 0.66. Adding the chance that she learned from the item gives about 0.71.

Had she answered wrongly, the same reasoning gives 0.03 / (0.03 + 0.56), about 0.05, rising to about 0.19 after the learning step. One answer moves the estimate a lot; a run of answers settles it.

Where it goes wrong:

- If the items are four-option multiple choice, a real guess rate is closer to 0.25, so the app over-credits lucky learners.
- If Wanjiku shares the tablet with her brother, the model is tracking two children as one.
- If the questions are in English and she reasons better in Kiswahili, wrong answers may measure language, not fractions.
- If an item is tagged with the wrong skill, every answer to it updates the wrong estimate.`,
        `Fikiria programu ya hesabu ya Darasa la 5 inayotumika katika shule moja Machakos. Kwa ujuzi wa "sehemu sawa", programu inaanza kila mwanafunzi na uwezekano wa 0.30 wa umahiri. Inachukulia uwezekano wa 0.20 wa kubahatisha jibu sahihi bila umahiri, 0.10 wa kuteleza, na 0.15 wa kujifunza ujuzi huo baada ya kila swali la mazoezi.

Wanjiku anajibu swali lake la kwanza sahihi. Programu inauliza: jibu sahihi lina uwezekano gani kutoka kwa aliyemudu (0.30 x 0.90 = 0.27) ukilinganisha na asiyemudu (0.70 x 0.20 = 0.14)? Makadirio yake ya umahiri yanakuwa 0.27 / (0.27 + 0.14), takriban 0.66. Ukiongeza uwezekano kwamba amejifunza kutokana na swali hilo, yanafika takriban 0.71.

Kama angejibu vibaya, hoja ileile inatoa 0.03 / (0.03 + 0.56), takriban 0.05, yakipanda hadi takriban 0.19 baada ya hatua ya kujifunza. Jibu moja linasogeza makadirio sana; mfululizo wa majibu ndio unayatuliza.

Mahali inapoharibika:

- Maswali yakiwa ya chaguo nne, kiwango halisi cha kubahatisha kinakaribia 0.25, hivyo programu inawapa sifa zaidi wanafunzi waliobahatika.
- Wanjiku akishiriki kishikwambi na kaka yake, modeli inawafuatilia watoto wawili kana kwamba ni mmoja.
- Maswali yakiwa kwa Kiingereza na yeye anafikiri vizuri zaidi kwa Kiswahili, majibu mabaya yanaweza kupima lugha, si sehemu.
- Swali likiwekewa alama ya ujuzi usio sahihi, kila jibu kwake linasasisha makadirio yasiyo sahihi.`
      ),
      scenario({
        titleEn: "Scenario: the dashboard says mastered",
        titleSw: "Hali: dashibodi inasema amemudu",
        situationEn:
          "The app dashboard shows Amani at 0.96 mastery for equivalent fractions. In your lesson today he could not explain why 2/4 equals 1/2, and he got two of three board questions wrong. He usually does the app at home on his mother's phone.",
        situationSw:
          "Dashibodi ya programu inaonyesha Amani ana umahiri wa 0.96 katika sehemu sawa. Katika somo lako leo hakuweza kueleza kwa nini 2/4 ni sawa na 1/2, na alikosea maswali mawili kati ya matatu ubaoni. Kwa kawaida hufanya mazoezi ya programu nyumbani kwa simu ya mama yake.",
        questionEn: "What is the best next step?",
        questionSw: "Hatua bora inayofuata ni ipi?",
        optionsEn: [
          "Trust the dashboard; he was probably tired today",
          "Check the evidence: look at which items he answered and when, ask him a few short questions yourself, and treat the skill as not yet secure",
          "Stop using the app for the whole class",
          "Ask the supplier to raise the threshold to 0.99 so this never happens",
        ],
        optionsSw: [
          "Amini dashibodi; huenda alikuwa amechoka leo",
          "Kagua ushahidi: angalia maswali aliyojibu na lini, muulize maswali machache mafupi wewe mwenyewe, na uchukulie ujuzi huo bado haujaimarika",
          "Acha kutumia programu kwa darasa zima",
          "Mwombe msambazaji apandishe kiwango hadi 0.99 ili jambo hili lisitokee tena",
        ],
        correctIndex: 1,
        hintsEn: [
          "The dashboard is an estimate built from app answers. Your direct evidence from today counts too, and it disagrees.",
          "Correct. A shared phone, guessing on multiple choice or mis-tagged items can all inflate the estimate. Your own quick check decides what you teach next.",
          "One mismatch is a reason to investigate, not to throw away a tool that may be working for others.",
          "A higher threshold does not fix answers that came from someone else or from lucky guesses; it only asks for more of the same evidence.",
        ],
        hintsSw: [
          "Dashibodi ni makadirio yaliyojengwa kutokana na majibu ya programu. Ushahidi wako wa moja kwa moja wa leo nao una uzito, na unapingana nayo.",
          "Sahihi. Simu inayoshirikiwa, kubahatisha kwenye maswali ya chaguo au maswali yenye alama zisizo sahihi vinaweza kupandisha makadirio. Ukaguzi wako mfupi ndio unaoamua utakachofundisha baadaye.",
          "Tofauti moja ni sababu ya kuchunguza, si ya kutupa zana ambayo huenda inawafaa wengine.",
          "Kiwango cha juu zaidi hakirekebishi majibu yaliyotoka kwa mtu mwingine au kwa kubahatisha; kinaomba tu ushahidi zaidi wa aina ileile.",
        ],
        explainEn:
          "Adaptive systems infer mastery from answers. When the inference and your classroom evidence disagree, find out why before acting on either.",
        explainSw:
          "Mifumo inayojirekebisha hukisia umahiri kutokana na majibu. Makisio hayo yakipingana na ushahidi wako wa darasani, tafuta sababu kabla ya kutenda kwa msingi wa yoyote kati yake.",
      }),
      quiz(
        "Why does one correct answer not prove that a learner has mastered a skill?",
        "Kwa nini jibu moja sahihi halithibitishi kwamba mwanafunzi ameumudu ujuzi?",
        [
          "Because adaptive systems ignore correct answers",
          "Because a learner can guess correctly, so the system raises its estimate but cannot be certain",
          "Because only teachers' tests count as evidence",
          "Because mastery can only be measured at the end of the term",
        ],
        [
          "Kwa sababu mifumo inayojirekebisha hupuuza majibu sahihi",
          "Kwa sababu mwanafunzi anaweza kubahatisha akapata, hivyo mfumo unapandisha makadirio lakini hauwezi kuwa na uhakika",
          "Kwa sababu majaribio ya walimu pekee ndiyo ushahidi",
          "Kwa sababu umahiri unaweza kupimwa mwishoni mwa muhula tu",
        ],
        1,
        "A correct answer is more likely from a learner who has mastered the skill, so the estimate rises, but guesses happen. Confidence builds over a run of answers.",
        "Jibu sahihi lina uwezekano mkubwa zaidi kutoka kwa mwanafunzi aliyemudu ujuzi, hivyo makadirio yanapanda, lakini kubahatisha hutokea. Uhakika hujengeka kupitia mfululizo wa majibu."
      ),
      note(
        "Try it: be the adaptive system on paper",
        "Jaribu: kuwa mfumo unaojirekebisha kwenye karatasi",
        `You can feel how adaptive systems reason without any device.

- Pick one skill you teach this week, for example converting centimetres to metres.
- Write six questions: two easy, two medium, two hard. That is your item bank.
- Choose five learners. Give each an easy question first.
- Rule: two correct in a row moves the learner up one level; one wrong moves them down. Two correct at hard means "mastered".
- Record every answer in a small table: learner, question, right or wrong, level after.

Afterwards, ask yourself: did anyone reach "mastered" by luck? Did a wording problem trip someone who understood? Those are exactly the errors a real system makes at scale.`,
        `Unaweza kuhisi jinsi mifumo inayojirekebisha inavyofikiri bila kifaa chochote.

- Chagua ujuzi mmoja unaoufundisha wiki hii, kwa mfano kubadilisha sentimita kuwa mita.
- Andika maswali sita: mawili rahisi, mawili ya wastani, mawili magumu. Hiyo ndiyo benki yako ya maswali.
- Chagua wanafunzi watano. Mpe kila mmoja swali rahisi kwanza.
- Kanuni: majibu mawili sahihi mfululizo yanampandisha mwanafunzi ngazi moja; jibu moja baya linamshusha. Majibu mawili sahihi katika ngazi ngumu yanamaanisha "amemudu".
- Rekodi kila jibu katika jedwali dogo: mwanafunzi, swali, sahihi au si sahihi, ngazi baada ya jibu.

Baadaye, jiulize: kuna aliyefika "amemudu" kwa bahati? Kuna tatizo la maneno lililomkwamisha mtu aliyeelewa? Hayo ndiyo makosa ambayo mfumo halisi hufanya kwa wingi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Adaptive systems estimate mastery from noisy answers; they never observe it.
- Guesses, slips, shared devices, language and mis-tagged items all distort the estimate.
- Your classroom evidence is part of the picture; investigate disagreements.
- Next unit: the items themselves. A system is only as good as the questions in its bank, so you will learn to design and check them.`,
        `- Mifumo inayojirekebisha hukadiria umahiri kutokana na majibu yenye kelele; haiuoni moja kwa moja.
- Kubahatisha, kuteleza, vifaa vinavyoshirikiwa, lugha na maswali yenye alama zisizo sahihi vyote hupotosha makadirio.
- Ushahidi wako wa darasani ni sehemu ya picha; chunguza tofauti zinapotokea.
- Kitengo kijacho: maswali yenyewe. Mfumo ni mzuri kwa kiwango cha maswali yaliyo kwenye benki yake, hivyo utajifunza kuyabuni na kuyakagua.`
      ),
    ],
  },
  {
    id: "edu-i-u2",
    titleEn: "Designing assessments with AI",
    titleSw: "Kubuni tathmini kwa msaada wa AI",
    cards: [
      note(
        "Bloom's levels and why AI drifts to recall",
        "Ngazi za Bloom na kwa nini AI huelekea kwenye kukumbuka",
        `Bloom's taxonomy sorts thinking into six levels, from simplest to most demanding: remember, understand, apply, analyse, evaluate and create. A good assessment deliberately mixes levels so that it measures more than memory.

A language model can draft twenty questions in a minute. But it produces the most typical text for your request, and the most typical school question is a recall question: "Name...", "State...", "List...". Unless you ask for specific levels, most of what you get will sit at the bottom of the ladder. It can also produce a wrong answer key, two correct options in one multiple-choice item, or distractors (wrong options) so silly that nobody picks them.

So treat AI as a fast drafter and yourself as the examiner. You set the learning outcome from the KICD curriculum design, the level mix and the format; you check every item and every key.

A powerful use at higher levels is error hunting: give learners an AI-written answer that contains mistakes and ask them to find, explain and fix them. That is evaluation-level work, and it teaches the verify-first habit at the same time.`,
        `Ngazi za Bloom (Bloom's taxonomy) hupanga fikra katika ngazi sita, kutoka rahisi hadi ngumu zaidi: kukumbuka, kuelewa, kutumia, kuchanganua, kutathmini na kubuni. Tathmini nzuri huchanganya ngazi kwa makusudi ili ipime zaidi ya kumbukumbu.

Modeli ya lugha inaweza kuandaa maswali ishirini kwa dakika moja. Lakini inatoa maandishi ya kawaida zaidi kwa ombi lako, na swali la kawaida zaidi shuleni ni la kukumbuka: "Taja...", "Eleza kwa ufupi...", "Orodhesha...". Usipoomba ngazi maalum, mengi utakayopata yatakaa chini kabisa ya ngazi. Inaweza pia kutoa ufunguo wa majibu usio sahihi, chaguo mbili sahihi katika swali moja, au machaguo potoshi (distractors) ya kipuuzi kiasi kwamba hakuna anayeyachagua.

Kwa hiyo ichukulie AI kama mwandishi wa rasimu wa haraka, na wewe ndiye mtahini. Wewe unaweka matokeo ya ujifunzaji kutoka kwa muundo wa mtaala wa KICD, mchanganyiko wa ngazi na muundo wa maswali; wewe unakagua kila swali na kila jibu.

Matumizi yenye nguvu katika ngazi za juu ni kuwinda makosa: wape wanafunzi jibu lililoandikwa na AI lenye makosa, kisha waombe wayapate, wayaeleze na wayasahihishe. Hiyo ni kazi ya ngazi ya kutathmini, na inafundisha tabia ya kuthibitisha kwanza wakati huohuo.`
      ),
      reveal([
        {
          termEn: "Bloom's levels",
          termSw: "Ngazi za Bloom",
          defEn: "Remember, understand, apply, analyse, evaluate, create: a ladder for planning the thinking a question demands.",
          defSw: "Kukumbuka, kuelewa, kutumia, kuchanganua, kutathmini, kubuni: ngazi za kupanga fikra ambazo swali linadai.",
        },
        {
          termEn: "Distractor",
          termSw: "Chaguo potoshi (distractor)",
          defEn: "A wrong option in a multiple-choice item; good ones reflect real learner misconceptions.",
          defSw: "Chaguo lisilo sahihi katika swali la kuchagua; zuri huakisi dhana potofu halisi za wanafunzi.",
        },
        {
          termEn: "Answer key",
          termSw: "Ufunguo wa majibu",
          defEn: "The official correct answers and marking points; AI-drafted keys must be checked line by line.",
          defSw: "Majibu sahihi rasmi na hoja za kusahihisha; ufunguo ulioandaliwa na AI lazima ukaguliwe mstari kwa mstari.",
        },
        {
          termEn: "Error hunting",
          termSw: "Kuwinda makosa",
          defEn: "A task where learners find and correct mistakes in a given answer, often one written by AI.",
          defSw: "Kazi ambapo wanafunzi hupata na kusahihisha makosa katika jibu walilopewa, mara nyingi lililoandikwa na AI.",
        },
      ]),
      note(
        "Worked example: reviewing a 10-item quiz",
        "Mfano wa kazi: kukagua jaribio la maswali 10",
        `Imagine Mr Otieno, a Grade 8 science teacher in Kisumu, asks a chatbot for "10 questions on the human circulatory system".

He sorts the draft by Bloom's level: 7 remember, 2 understand, 1 apply, and nothing above apply. He also finds one wrong answer key (it says veins carry blood away from the heart) and two items where the distractors are obviously absurd.

He sets a target mix for the same 10 items: 2 remember, 2 understand, 3 apply or analyse, 3 evaluate or create. That is 2 + 2 + 3 + 3 = 10. He re-prompts with that mix and the learning outcome, then edits by hand. One of the evaluate items becomes an error hunt: a short paragraph "written by a classmate" that confuses arteries and veins twice, and learners must find both errors and justify the fix.

Time check: generating took about 5 minutes and careful review about 25, against roughly an hour writing from scratch. The saving is real only because he did the review. Skipping it would have put a wrong key in front of 48 learners.`,
        `Fikiria Bw. Otieno, mwalimu wa sayansi wa Darasa la 8 mjini Kisumu, anaomba chatbot "maswali 10 kuhusu mfumo wa mzunguko wa damu wa binadamu".

Anapanga rasimu kwa ngazi za Bloom: 7 ya kukumbuka, 2 ya kuelewa, 1 la kutumia, na hakuna lililo juu ya kutumia. Anapata pia ufunguo mmoja usio sahihi (unasema vena hubeba damu kutoka kwa moyo) na maswali mawili yenye machaguo potoshi ya kipuuzi waziwazi.

Anaweka mchanganyiko lengwa kwa maswali yaleyale 10: 2 ya kukumbuka, 2 ya kuelewa, 3 ya kutumia au kuchanganua, 3 ya kutathmini au kubuni. Hiyo ni 2 + 2 + 3 + 3 = 10. Anaomba tena kwa mchanganyiko huo na matokeo ya ujifunzaji, kisha anahariri kwa mkono. Swali moja la kutathmini linakuwa la kuwinda makosa: aya fupi "iliyoandikwa na mwanafunzi mwenzao" inayochanganya ateri na vena mara mbili, na wanafunzi lazima wapate makosa yote mawili na watetee marekebisho.

Ukaguzi wa muda: kuzalisha kulichukua takriban dakika 5 na ukaguzi makini takriban 25, ukilinganisha na saa moja hivi ya kuandika kuanzia mwanzo. Akiba hiyo ni halisi kwa sababu tu alifanya ukaguzi. Kuuruka kungeweka ufunguo usio sahihi mbele ya wanafunzi 48.`
      ),
      scenario({
        titleEn: "Scenario: the test is printed tomorrow",
        titleSw: "Hali: jaribio linachapishwa kesho",
        situationEn:
          "A colleague in your department generated an end-of-topic test with AI and wants to send it to the school printer tonight for 180 learners. She has not checked the answer key because 'the tool is usually right'.",
        situationSw:
          "Mwenzako katika idara yako ametengeneza jaribio la mwisho wa mada kwa AI na anataka kulipeleka kwa mchapishaji wa shule usiku huu kwa wanafunzi 180. Hajakagua ufunguo wa majibu kwa sababu 'zana hii kwa kawaida iko sahihi'.",
        questionEn: "What do you advise?",
        questionSw: "Unamshauri nini?",
        optionsEn: [
          "Print it; the tool is usually right and time is short",
          "Ask the same chatbot to confirm its own answer key, then print",
          "Work through every item and key together, check the level mix against the outcomes, then print",
          "Cancel the test and write a new one by hand next week",
        ],
        optionsSw: [
          "Lichapishe; zana kwa kawaida iko sahihi na muda ni mfupi",
          "Mwombe chatbot ileile ithibitishe ufunguo wake, kisha uchapishe",
          "Pitieni kila swali na kila jibu pamoja, kagueni mchanganyiko wa ngazi dhidi ya matokeo ya ujifunzaji, kisha uchapishe",
          "Futa jaribio na uandike jipya kwa mkono wiki ijayo",
        ],
        correctIndex: 2,
        hintsEn: [
          "'Usually right' across 180 learners means some learners get marked wrong for correct answers. The key is the part you must own.",
          "A model checking itself tends to repeat its own mistake with confidence. Verification needs an independent source: you, the textbook, the syllabus.",
          "Correct. An hour of joint review protects 180 learners' marks, and the level check makes the test measure more than recall.",
          "The draft may be mostly usable. Reviewing it is faster than starting again and keeps the assessment on schedule.",
        ],
        hintsSw: [
          "'Kwa kawaida iko sahihi' kwa wanafunzi 180 inamaanisha baadhi yao watakosolewa kwa majibu sahihi. Ufunguo ndio sehemu unayopaswa kuwajibika nayo.",
          "Modeli inayojikagua huelekea kurudia kosa lake kwa kujiamini. Kuthibitisha kunahitaji chanzo huru: wewe, kitabu cha kiada, mtaala.",
          "Sahihi. Saa moja ya ukaguzi wa pamoja inalinda alama za wanafunzi 180, na ukaguzi wa ngazi unafanya jaribio lipime zaidi ya kukumbuka.",
          "Huenda rasimu inafaa kwa sehemu kubwa. Kuikagua ni haraka kuliko kuanza upya, na tathmini inabaki kwenye ratiba.",
        ],
        explainEn: "AI can draft assessments quickly, but the examiner is accountable for every item and every mark.",
        explainSw: "AI inaweza kuandaa tathmini haraka, lakini mtahini ndiye anayewajibika kwa kila swali na kila alama.",
      }),
      quiz(
        "Which question sits at the 'evaluate' level of Bloom's taxonomy?",
        "Swali lipi liko katika ngazi ya 'kutathmini' ya Bloom?",
        [
          "List the four chambers of the heart.",
          "Explain in your own words what the heart does.",
          "A classmate says veins always carry deoxygenated blood. Judge whether this is correct and justify your answer with an example.",
          "Draw and label the heart.",
        ],
        [
          "Orodhesha vyumba vinne vya moyo.",
          "Eleza kwa maneno yako mwenyewe kazi ya moyo.",
          "Mwanafunzi mwenzako anasema vena daima hubeba damu isiyo na oksijeni. Amua kama hili ni sahihi na utetee jibu lako kwa mfano.",
          "Chora na uweke lebo kwenye moyo.",
        ],
        2,
        "Evaluating means judging a claim against evidence and defending the judgement. The pulmonary vein is the counter-example that makes this item work. Listing and labelling are recall; explaining is understanding.",
        "Kutathmini ni kupima dai dhidi ya ushahidi na kutetea uamuzi. Vena ya mapafu ndiyo mfano pinzani unaolifanya swali hili lifanye kazi. Kuorodhesha na kuweka lebo ni kukumbuka; kueleza ni kuelewa."
      ),
      pb({
        titleEn: "Build an assessment-drafting prompt",
        titleSw: "Jenga maagizo ya kuandaa tathmini",
        introEn:
          "You want a chatbot to draft a short quiz that tests more than memory. Assemble a prompt that fixes the outcome, the level mix and the checks you need.",
        introSw:
          "Unataka chatbot iandae jaribio fupi linalopima zaidi ya kumbukumbu. Unganisha maagizo (prompt) yanayoweka matokeo ya ujifunzaji, mchanganyiko wa ngazi na ukaguzi unaohitaji.",
        goalEn:
          "Your prompt must name the class and learning outcome, give the Bloom's level mix, and ask for an answer key with reasons so you can check it.",
        goalSw:
          "Maagizo yako lazima yataje darasa na matokeo ya ujifunzaji, yatoe mchanganyiko wa ngazi za Bloom, na yaombe ufunguo wa majibu wenye sababu ili uweze kuukagua.",
        blocksEn: [
          "Context: Grade 8 science, learning outcome: describe how blood moves through the heart and lungs",
          "Task: write 10 questions: 2 remember, 2 understand, 3 apply or analyse, 3 evaluate or create",
          "Include one error-hunting item: a short answer with two deliberate mistakes for learners to find",
          "Format: a table with question, Bloom's level, answer key and a one-line reason for each key",
          "Use Kenyan everyday contexts and no real learner names",
          "Flag any item where you are unsure the key is correct",
        ],
        blocksSw: [
          "Muktadha: Darasa la 8 sayansi, matokeo ya ujifunzaji: eleza jinsi damu inavyopita katika moyo na mapafu",
          "Kazi: andika maswali 10: 2 ya kukumbuka, 2 ya kuelewa, 3 ya kutumia au kuchanganua, 3 ya kutathmini au kubuni",
          "Weka swali moja la kuwinda makosa: jibu fupi lenye makosa mawili ya makusudi ili wanafunzi wayapate",
          "Muundo: jedwali lenye swali, ngazi ya Bloom, ufunguo wa jibu na sababu ya mstari mmoja kwa kila jibu",
          "Tumia mazingira ya kila siku ya Kenya na usitumie majina halisi ya wanafunzi",
          "Onyesha swali lolote ambalo huna uhakika ufunguo wake ni sahihi",
        ],
        required: [0, 1, 3],
        sampleEn:
          "Context: Grade 8 science, learning outcome: describe how blood moves through the heart and lungs. Task: write 10 questions: 2 remember, 2 understand, 3 apply or analyse, 3 evaluate or create. Include one error-hunting item: a short answer with two deliberate mistakes for learners to find. Format: a table with question, Bloom's level, answer key and a one-line reason for each key. Use Kenyan everyday contexts and no real learner names. Flag any item where you are unsure the key is correct.",
        sampleSw:
          "Muktadha: Darasa la 8 sayansi, matokeo ya ujifunzaji: eleza jinsi damu inavyopita katika moyo na mapafu. Kazi: andika maswali 10: 2 ya kukumbuka, 2 ya kuelewa, 3 ya kutumia au kuchanganua, 3 ya kutathmini au kubuni. Weka swali moja la kuwinda makosa: jibu fupi lenye makosa mawili ya makusudi ili wanafunzi wayapate. Muundo: jedwali lenye swali, ngazi ya Bloom, ufunguo wa jibu na sababu ya mstari mmoja kwa kila jibu. Tumia mazingira ya kila siku ya Kenya na usitumie majina halisi ya wanafunzi. Onyesha swali lolote ambalo huna uhakika ufunguo wake ni sahihi.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Plan the Bloom's mix first; without it, AI drafts mostly recall questions.
- Check every item and every key yourself; never ask the model to mark its own work.
- Error hunting turns AI's mistakes into evaluation-level practice.
- Next unit: marking open answers, where rubrics keep AI feedback useful and the teacher keeps the marks.`,
        `- Panga mchanganyiko wa ngazi za Bloom kwanza; bila huo, AI huandaa zaidi maswali ya kukumbuka.
- Kagua kila swali na kila jibu wewe mwenyewe; usiiombe modeli isahihishe kazi yake.
- Kuwinda makosa kunageuza makosa ya AI kuwa mazoezi ya ngazi ya kutathmini.
- Kitengo kijacho: kusahihisha majibu ya wazi, ambapo rubriki huweka maoni ya AI yenye manufaa na mwalimu anabaki na alama.`
      ),
    ],
  },
  {
    id: "edu-i-u3",
    titleEn: "Rubrics and AI feedback: the teacher decides marks",
    titleSw: "Rubriki na maoni ya AI: mwalimu ndiye anayeamua alama",
    cards: [
      note(
        "How rubric-based AI feedback works",
        "Jinsi maoni ya AI yanayotegemea rubriki yanavyofanya kazi",
        `A rubric is a marking guide that lists the criteria you are judging (for example content, organisation, language, use of evidence) and describes what each performance level looks like for each criterion. Those descriptions are called descriptors.

A rubric makes AI feedback far more useful. In a sound workflow, you paste your rubric and one learner's work, and ask the model to draft comments for each criterion, quoting the exact words from the work that support each comment. You then read the work yourself, keep, edit or delete each comment, and decide the mark.

Why the teacher keeps the mark:

- Models can reward length and polished style over the criteria, and can be inconsistent between two similar scripts.
- Handwritten work typed or photographed first can carry transcription errors the model cannot see.
- The model does not know the learner, the lesson or what was taught; you do.
- Marks affect progression and reports. Someone accountable must stand behind each one, and learners and parents deserve a human they can question.

Think of AI as a drafting assistant for feedback, and moderation (checking marks against a shared standard) as your job. The teacher remains in the loop for every decision.`,
        `Rubriki ni mwongozo wa kusahihisha unaoorodhesha vigezo unavyopima (kwa mfano maudhui, mpangilio, lugha, matumizi ya ushahidi) na kueleza jinsi kila kiwango cha utendaji kinavyoonekana kwa kila kigezo. Maelezo hayo huitwa vielezo (descriptors).

Rubriki hufanya maoni ya AI kuwa na manufaa zaidi. Katika mtiririko wa kazi ulio imara, unabandika rubriki yako na kazi ya mwanafunzi mmoja, kisha unaiomba modeli iandae maoni kwa kila kigezo, ikinukuu maneno halisi kutoka kwenye kazi yanayounga mkono kila oni. Kisha unasoma kazi hiyo wewe mwenyewe, unabakiza, unahariri au unafuta kila oni, na unaamua alama.

Kwa nini mwalimu anabaki na alama:

- Modeli zinaweza kutuza urefu na mtindo maridadi kuliko vigezo, na zinaweza kutofautiana kati ya kazi mbili zinazofanana.
- Kazi ya mkono iliyochapwa au kupigwa picha kwanza inaweza kubeba makosa ya kunakili ambayo modeli haiwezi kuyaona.
- Modeli haimjui mwanafunzi, somo, wala kilichofundishwa; wewe unajua.
- Alama huathiri kupanda darasa na ripoti. Lazima mtu anayewajibika asimame nyuma ya kila alama, na wanafunzi na wazazi wanastahili binadamu wanayeweza kumhoji.

Ichukulie AI kama msaidizi wa kuandaa rasimu ya maoni, na usawazishaji wa alama (moderation), yaani kukagua alama dhidi ya kiwango cha pamoja, kama kazi yako. Binadamu anabaki kwenye uamuzi kwa kila uamuzi.`
      ),
      reveal([
        {
          termEn: "Rubric",
          termSw: "Rubriki",
          defEn: "A marking guide listing criteria and describing each performance level for each criterion.",
          defSw: "Mwongozo wa kusahihisha unaoorodhesha vigezo na kueleza kila kiwango cha utendaji kwa kila kigezo.",
        },
        {
          termEn: "Descriptor",
          termSw: "Kielezo (descriptor)",
          defEn: "The sentence that says what work at one level of one criterion looks like.",
          defSw: "Sentensi inayoeleza jinsi kazi ya kiwango kimoja cha kigezo kimoja inavyoonekana.",
        },
        {
          termEn: "Evidence quote",
          termSw: "Nukuu ya ushahidi",
          defEn: "The exact words from the learner's work that justify a comment, so you can check it quickly.",
          defSw: "Maneno halisi kutoka kwenye kazi ya mwanafunzi yanayohalalisha kauli ya maoni, ili uweze kuikagua haraka.",
        },
        {
          termEn: "Moderation",
          termSw: "Usawazishaji wa alama (moderation)",
          defEn: "Checking a sample of marks against a shared standard so that marking is fair across scripts and markers.",
          defSw: "Kukagua sampuli ya alama dhidi ya kiwango cha pamoja ili usahihishaji uwe wa haki kwa kazi zote na wasahihishaji wote.",
        },
      ]),
      note(
        "Worked example: 45 compositions",
        "Mfano wa kazi: insha 45",
        `Imagine Ms Chebet teaches English to 45 Grade 9 learners in Eldoret. Her composition rubric has 4 criteria, each marked out of 4, so the total is 16.

Before AI, she spent about 6 minutes per script: 45 x 6 = 270 minutes. She tries a workflow: a chatbot drafts criterion-by-criterion comments with evidence quotes and a suggested level; she reads every script and decides.

To test the tool honestly, she first marks 10 scripts blind, then compares with the AI's suggested levels. That is 10 x 4 = 40 criterion judgements. They disagree on 11 of the 40, about one in four. Most disagreements are the same pattern: the AI gives higher "content" levels to longer scripts even when the argument is thin.

What she does:

- She keeps AI for drafting comments, never for levels. She hides the suggested level column.
- She adds a line to her prompt: "Length is not a criterion. Quote evidence for every comment."
- With drafts ready, her time falls to about 4 minutes per script: 45 x 4 = 180 minutes, a saving of 90 minutes.

The honest result is 90 minutes saved and clearer comments, not "marking done by AI". She also checked that no learner names went into the tool: scripts were labelled by number.`,
        `Fikiria Bi. Chebet anafundisha Kiingereza kwa wanafunzi 45 wa Darasa la 9 mjini Eldoret. Rubriki yake ya insha ina vigezo 4, kila kimoja kikisahihishwa kati ya 4, hivyo jumla ni 16.

Kabla ya AI, alitumia takriban dakika 6 kwa kila insha: 45 x 6 = dakika 270. Anajaribu mtiririko wa kazi: chatbot inaandaa maoni kigezo kwa kigezo yenye nukuu za ushahidi na kiwango kinachopendekezwa; yeye anasoma kila insha na kuamua.

Ili kupima zana kwa uaminifu, kwanza anasahihisha insha 10 bila kuona mapendekezo, kisha analinganisha na viwango vilivyopendekezwa na AI. Hiyo ni maamuzi 10 x 4 = 40 ya vigezo. Wanatofautiana katika 11 kati ya 40, takriban moja kati ya nne. Tofauti nyingi zina mtindo mmoja: AI inatoa viwango vya juu vya "maudhui" kwa insha ndefu hata hoja ikiwa dhaifu.

Anachofanya:

- Anabaki kutumia AI kuandaa maoni tu, kamwe si viwango. Anaficha safu ya viwango vinavyopendekezwa.
- Anaongeza mstari kwenye maagizo yake: "Urefu si kigezo. Nukuu ushahidi kwa kila oni."
- Rasimu zikiwa tayari, muda wake unashuka hadi takriban dakika 4 kwa kila insha: 45 x 4 = dakika 180, akiba ya dakika 90.

Matokeo ya kweli ni dakika 90 zilizookolewa na maoni yaliyo wazi zaidi, si "usahihishaji uliofanywa na AI". Pia alihakikisha hakuna jina la mwanafunzi lililoingizwa kwenye zana: insha ziliwekwa alama kwa namba.`
      ),
      scenario({
        titleEn: "Scenario: 'let the tool finalise the marks'",
        titleSw: "Hali: 'acha zana ikamilishe alama'",
        situationEn:
          "Your deputy principal has seen AI feedback drafts and proposes that, from next term, the tool should set final marks for all continuous assessment compositions, with teachers only reviewing complaints.",
        situationSw:
          "Naibu mkuu wa shule yako ameona rasimu za maoni za AI na anapendekeza kwamba, kuanzia muhula ujao, zana iweke alama za mwisho kwa insha zote za tathmini endelevu, na walimu wakague malalamiko tu.",
        questionEn: "What is the strongest response?",
        questionSw: "Jibu lenye nguvu zaidi ni lipi?",
        optionsEn: [
          "Agree; the tool is faster and more consistent than tired teachers",
          "Agree, but only for learners in Form 4 or Grade 12",
          "Propose that AI drafts comments with evidence quotes while teachers set every mark, and share your blind comparison showing where the tool disagreed",
          "Refuse all AI use in marking and ask for more marking time instead",
        ],
        optionsSw: [
          "Kubali; zana ni ya haraka na thabiti kuliko walimu waliochoka",
          "Kubali, lakini kwa wanafunzi wa Kidato cha 4 au Darasa la 12 tu",
          "Pendekeza AI iandae maoni yenye nukuu za ushahidi huku walimu wakiweka kila alama, na ushiriki ulinganisho wako usioona mapendekezo unaoonyesha mahali zana ilitofautiana",
          "Kataa matumizi yoyote ya AI katika kusahihisha na uombe muda zaidi wa kusahihisha badala yake",
        ],
        correctIndex: 2,
        hintsEn: [
          "Speed is not the test. The blind comparison showed systematic disagreement, such as rewarding length, which would be applied to every learner.",
          "Higher-stakes classes make automated marks riskier, not safer.",
          "Correct. Evidence from your own comparison makes the case, and the workflow keeps the time saving while a human stays accountable for each mark.",
          "Refusing everything loses a real time saving on comments. Offer a safe design instead of a blanket no.",
        ],
        hintsSw: [
          "Kasi si kipimo. Ulinganisho usioona mapendekezo ulionyesha tofauti za kimfumo, kama kutuza urefu, ambazo zingetumika kwa kila mwanafunzi.",
          "Madarasa yenye uzito mkubwa hufanya alama za kiotomatiki kuwa hatari zaidi, si salama zaidi.",
          "Sahihi. Ushahidi kutoka kwa ulinganisho wako mwenyewe unajenga hoja, na mtiririko huu unabakiza akiba ya muda huku binadamu akiwajibika kwa kila alama.",
          "Kukataa kila kitu kunapoteza akiba halisi ya muda kwenye maoni. Toa muundo salama badala ya kukataa kabisa.",
        ],
        explainEn: "Use AI where it saves time without moving accountability: drafting feedback. Marks stay with the teacher.",
        explainSw: "Tumia AI mahali inapookoa muda bila kuhamisha uwajibikaji: kuandaa maoni. Alama zinabaki kwa mwalimu.",
      }),
      quiz(
        "Why ask the model to quote evidence from the learner's work for every comment?",
        "Kwa nini uiombe modeli inukuu ushahidi kutoka kwenye kazi ya mwanafunzi kwa kila oni?",
        [
          "So the feedback looks longer and more impressive to parents",
          "So you can quickly check whether each comment is true of this script, and delete generic or invented praise",
          "Because quotes let the model set the mark more accurately",
          "Because the rubric is not needed once there are quotes",
        ],
        [
          "Ili maoni yaonekane marefu na ya kuvutia zaidi kwa wazazi",
          "Ili uweze kukagua haraka kama kila oni ni kweli kwa insha hii, na ufute sifa za jumla au zilizobuniwa",
          "Kwa sababu nukuu zinaiwezesha modeli kuweka alama kwa usahihi zaidi",
          "Kwa sababu rubriki haihitajiki tena nukuu zikiwepo",
        ],
        1,
        "Evidence quotes make each comment checkable. A comment like 'excellent use of evidence' with no quote behind it is a warning sign.",
        "Nukuu za ushahidi hufanya kila kauli ya maoni iweze kukaguliwa. Kauli kama 'matumizi bora ya ushahidi' bila nukuu nyuma yake ni ishara ya tahadhari."
      ),
      pb({
        titleEn: "Build a rubric-first feedback prompt",
        titleSw: "Jenga maagizo ya maoni yanayoanza na rubriki",
        introEn:
          "You want a chatbot to draft feedback on compositions against your rubric. A good prompt fixes the rubric, the level, the evidence rule and a ban on setting marks.",
        introSw:
          "Unataka chatbot iandae maoni kuhusu insha kwa kutumia rubriki yako. Maagizo mazuri yanaweka rubriki, kiwango cha darasa, kanuni ya ushahidi na marufuku ya kuweka alama.",
        goalEn:
          "Your prompt must include the class level, the rubric, the evidence-quote rule and a rule that the AI must not assign or change marks.",
        goalSw:
          "Maagizo yako lazima yawe na kiwango cha darasa, rubriki, kanuni ya nukuu za ushahidi na kanuni kwamba AI isiweke wala isibadilishe alama.",
        blocksEn: [
          "Context: Grade 9 English composition, about 300 words, script number 17",
          "Rubric: use only the four criteria and descriptors I have pasted below",
          "Task: for each criterion, draft one strength and one next step",
          "Quote the exact words from the script that support each comment",
          "Length is not a criterion; do not reward longer work for being longer",
          "Constraint: never assign or change a mark or level; the teacher decides",
        ],
        blocksSw: [
          "Muktadha: insha ya Kiingereza ya Darasa la 9, takriban maneno 300, insha namba 17",
          "Rubriki: tumia vigezo vinne na vielezo nilivyoweka hapa chini pekee",
          "Kazi: kwa kila kigezo, andaa jambo moja zuri na hatua moja inayofuata",
          "Nukuu maneno halisi kutoka kwenye insha yanayounga mkono kila oni",
          "Urefu si kigezo; usituze kazi ndefu kwa sababu tu ni ndefu",
          "Kikomo: usiweke wala usibadilishe alama au kiwango; mwalimu ndiye anayeamua",
        ],
        required: [0, 1, 3, 5],
        sampleEn:
          "Context: Grade 9 English composition, about 300 words, script number 17. Rubric: use only the four criteria and descriptors I have pasted below. Task: for each criterion, draft one strength and one next step. Quote the exact words from the script that support each comment. Length is not a criterion; do not reward longer work for being longer. Constraint: never assign or change a mark or level; the teacher decides.",
        sampleSw:
          "Muktadha: insha ya Kiingereza ya Darasa la 9, takriban maneno 300, insha namba 17. Rubriki: tumia vigezo vinne na vielezo nilivyoweka hapa chini pekee. Kazi: kwa kila kigezo, andaa jambo moja zuri na hatua moja inayofuata. Nukuu maneno halisi kutoka kwenye insha yanayounga mkono kila oni. Urefu si kigezo; usituze kazi ndefu kwa sababu tu ni ndefu. Kikomo: usiweke wala usibadilishe alama au kiwango; mwalimu ndiye anayeamua.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- A rubric plus evidence quotes turns AI output into checkable feedback.
- Test the tool blind on a sample before trusting its patterns.
- AI drafts comments; the teacher sets every mark and stays accountable.
- Label scripts by number, not name.
- Next unit: using AI to reach every learner, including learners with disabilities and those learning in a second language.`,
        `- Rubriki pamoja na nukuu za ushahidi hugeuza matokeo ya AI kuwa maoni yanayoweza kukaguliwa.
- Pima zana bila kuona mapendekezo yake kwenye sampuli kabla ya kuamini mitindo yake.
- AI inaandaa maoni; mwalimu anaweka kila alama na anabaki kuwajibika.
- Weka alama za namba kwenye insha, si majina.
- Kitengo kijacho: kutumia AI kumfikia kila mwanafunzi, wakiwemo wenye ulemavu na wanaojifunza kwa lugha ya pili.`
      ),
    ],
  },
  {
    id: "edu-i-u4",
    titleEn: "Retrieval from approved notes",
    titleSw: "Utafutaji kutoka maelezo yaliyoidhinishwa",
    cards: [
      note(
        "Answer from the pile the school has approved, or say you cannot",
        "Jibu kutoka rundo ambalo shule imeidhinisha, au sema huwezi",
        `A language model can write a fluent paragraph about photosynthesis from the open internet. That paragraph may not match the KICD curriculum design, the textbook edition on your learners' desks, or the example you used on the board yesterday. For classroom use, fluency is not the requirement. Grounding is.

Retrieval means: before the model writes, a search step pulls short passages from a pile you chose — the curriculum design PDF, the textbook chapter, your own notes, a past paper you own the rights to. The model is then told to answer using only those passages and to quote them. If the search finds nothing relevant, the honest output is "not in the approved material; ask the teacher," not a confident improvisation.

That pipeline is sometimes called retrieval-augmented generation. You do not need to build it to use the idea. You can do the same thing by hand: paste the relevant paragraphs from your notes into the prompt, and add the rule "use only the text I pasted; if the answer is not there, say so."

Why this matters in a Kenyan school:

- CBC strands and sub-strands are specific. A general science essay can still be off-strand.
- Set-book editions change. Open-web summaries mix titles.
- Learners in a crowded class will treat a printed AI worksheet as official. If it came from the wrong pile, you have just taught the wrong thing at scale.

Teachers still review every AI-made quiz and mark scheme drawn from retrieved notes. Retrieval reduces invention. It does not remove the need for an examiner's eye.`,
        `Modeli ya lugha inaweza kuandika aya laini kuhusu usanisinuru kutoka intaneti ya wazi. Aya hiyo huenda hailingani na muundo wa mtaala wa KICD, toleo la kitabu cha kiada mezani mwa wanafunzi, au mfano uliotumia ubaoni jana. Kwa matumizi darasani, ulaini si sharti. Msingi ndio.

Utafutaji (retrieval) unamaanisha: kabla modeli haijaandika, hatua ya kutafuta inatoa vifungu vifupi kutoka rundo ulilochagua — PDF ya muundo wa mtaala, sura ya kitabu cha kiada, maelezo yako, karatasi ya zamani unayomiliki haki zake. Modeli kisha inaambiwa ijibu kwa vifungu hivyo tu na ivinukuu. Utafutaji ukikosa kitu kinachohusika, tokeo la uaminifu ni "haipo kwenye vifaa vilivyoidhinishwa; muulize mwalimu," si kubuni kwa uhakika.

Mtiririko huo wakati mwingine huitwa utafutaji-kisha-uundaji (retrieval-augmented generation). Huhitaji kuujenga ili utumie wazo. Unaweza kufanya hivyo kwa mkono: bandika aya zinazohusika kutoka maelezo yako kwenye maagizo, na uongeze kanuni "tumia tu maandishi niliyobandika; jibu lisipokuwepo, sema hivyo."

Kwa nini hili ni muhimu katika shule ya Kenya:

- Strandi na vistrandu vya CBC ni mahususi. Insha ya sayansi ya jumla bado inaweza kuwa nje ya strandi.
- Matoleo ya vitabu teule yanabadilika. Muhtasari wa intaneti huchanganya vichwa.
- Wanafunzi katika darasa lenye msongamano watachukulia karatasi ya AI iliyochapishwa kama rasmi. Ikitoka rundo lisilo sahihi, umefundisha kosa kwa wingi.

Walimu bado hukagua kila jaribio na ufunguo wa alama uliotolewa na AI kutoka maelezo yaliyopatikana. Utafutaji unapunguza kubuni. Haondoi haja ya jicho la mtahini.`
      ),
      reveal([
        {
          termEn: "Approved corpus",
          termSw: "Hazina iliyoidhinishwa",
          defEn: "The set of documents the school has chosen as sources: curriculum designs, textbooks, teacher notes.",
          defSw: "Seti ya nyaraka ambazo shule imechagua kama vyanzo: miundo ya mtaala, vitabu vya kiada, maelezo ya mwalimu.",
        },
        {
          termEn: "Retrieval",
          termSw: "Utafutaji (retrieval)",
          defEn: "Finding the short passages that are relevant to this question before anyone writes an answer.",
          defSw: "Kupata vifungu vifupi vinavyohusika na swali hili kabla mtu yeyote hajaandika jibu.",
        },
        {
          termEn: "Grounded answer",
          termSw: "Jibu lenye msingi",
          defEn: "An answer that quotes or clearly rests on retrieved passages, with a refusal if none were found.",
          defSw: "Jibu linalonukuu au kukaa wazi kwenye vifungu vilivyopatikana, na kukataa kama hakuna vilivyopatikana.",
        },
        {
          termEn: "Open-web mix",
          termSw: "Mchanganyiko wa intaneti ya wazi",
          defEn: "Fluent content drawn from anywhere, including other syllabuses, old editions and invented citations.",
          defSw: "Maudhui laini yaliyotolewa kutoka popote, yakiwemo mitaala mingine, matoleo ya zamani na rejeleo zilizobuniwa.",
        },
      ]),
      note(
        "Worked example: a Grade 8 science worksheet from the wrong pile",
        "Mfano wa kazi: karatasi ya sayansi ya Gredi ya 8 kutoka rundo lisilo sahihi",
        `Ms Wambui in Machakos asks a chatbot, with no pasted notes, for "10 questions on respiration for Grade 8." The draft includes an item on ATP yields that her CBC design never asks, and an answer key that contradicts the class textbook on where gas exchange happens in the alveoli.

She tries again with retrieval by hand. She pastes: the learning outcome from the KICD design, one textbook page, and her board example using a sufuria lid. She adds: "Write 8 questions: 2 remember, 3 apply, 3 evaluate. Use only the pasted text. Quote the supporting line under each key. If you cannot, write NOT IN SOURCE."

Two of the eight items come back as NOT IN SOURCE. She keeps six, rewrites two herself, and spends 20 minutes checking keys. The worksheet now matches the lesson. The 48 learners who will sit it tomorrow are not being examined on a foreign syllabus.

Where it still fails: if she pastes last year's notes for a strand she has not taught yet, retrieval will faithfully produce items the class cannot answer. The pile has to be this week's pile.`,
        `Bi. Wambui Machakos anaomba chatbot, bila maelezo yaliyobandikwa, "maswali 10 kuhusu uresipireisheni kwa Gredi ya 8." Rasimu inajumuisha swali kuhusu mavuno ya ATP ambalo muundo wake wa CBC hauombi, na ufunguo unaopingana na kitabu cha kiada kuhusu mahali ubadilishanaji wa gesi unapotokea kwenye alveoli.

Anajaribu tena kwa utafutaji wa mkono. Anabandika: matokeo ya ujifunzaji kutoka muundo wa KICD, ukurasa mmoja wa kitabu cha kiada, na mfano wake wa ubaoni wa kifuniko cha sufuria. Anaongeza: "Andika maswali 8: 2 ya kukumbuka, 3 ya kutumia, 3 ya kutathmini. Tumia maandishi yaliyobandikwa tu. Nukuu mstari unaounga mkono chini ya kila ufunguo. Usipoweza, andika HAIPO KATIKA CHANZO."

Maswali mawili kati ya nane yanarudi HAIPO KATIKA CHANZO. Anabakiza sita, anaandika mawili mwenyewe, na anatumia dakika 20 kukagua funguo. Karatasi sasa inalingana na somo. Wanafunzi 48 watakaolifanya kesho hawatachunguzwa kwa mtaala wa nchi nyingine.

Bado inashindwa wapi: akinakili maelezo ya mwaka jana ya strandi ambayo bado hajafundisha, utafutaji utatoa kwa uaminifu maswali darasa haliwezi kujibu. Rundo lazima liwe la wiki hii.`
      ),
      scenario({
        titleEn: "Scenario: the bot that 'knows the set book'",
        titleSw: "Hali: bot 'inayojua kitabu teule'",
        situationEn:
          "A colleague wants to put an unsupervised chatbot on the school computers 'to answer any set-book question'. It is not connected to the approved edition. He says retrieval is too slow for a lunch-hour club.",
        situationSw:
          "Mwenzako anataka kuweka chatbot isiyosimamiwa kwenye kompyuta za shule 'kujibu swali lolote la kitabu teule'. Haijaunganishwa na toleo lililoidhinishwa. Anasema utafutaji ni wa polepole mno kwa klabu ya saa ya chakula.",
        questionEn: "What do you advise?",
        questionSw: "Unamshauri nini?",
        optionsEn: [
          "Launch it; fluency will motivate readers",
          "Do not launch an ungrounded tutor. Either attach the approved edition and force refusal on empty retrieval, or keep the club as reading-and-quiz with a teacher in the room",
          "Launch it but tell learners to 'be careful'",
          "Launch it for English only, because Kiswahili tools are weaker",
        ],
        optionsSw: [
          "Izindue; ulaini utawachochea wasomaji",
          "Usiizindue mkufunzi asiye na msingi. Aidha unganisha toleo lililoidhinishwa na ulazimishe kukataa utafutaji ukiwa tupu, au klabu ibaki kusoma-na-kujaribu na mwalimu chumbani",
          "Izindue lakini uwaambie wanafunzi 'wawe makini'",
          "Izindue kwa Kiingereza tu, kwa sababu zana za Kiswahili ni dhaifu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Motivation that teaches the wrong plot is still harm, especially in a crowded unsupervised lab.",
          "Correct. Grounding or a human-run club. 'Be careful' is not a control.",
          "A poster that says be careful does not stop a fluent wrong answer.",
          "Language of the tool is not the issue. Ungrounded plot is.",
        ],
        hintsSw: [
          "Motisha inayofundisha ploti isiyo sahihi bado ni madhara, hasa katika maabara yenye msongamano isiyosimamiwa.",
          "Sahihi. Msingi au klabu inayoendeshwa na binadamu. 'Kuwa makini' si udhibiti.",
          "Bango linalosema kuwa makini halizuii jibu laini lisilo sahihi.",
          "Lugha ya zana si suala. Ploti isiyo na msingi ndiyo.",
        ],
        explainEn: "A school tutor that cannot point to the approved page should not be left alone with learners.",
        explainSw: "Mkufunzi wa shule asiyeweza kuonyesha ukurasa ulioidhinishwa asiachwe peke yake na wanafunzi.",
      }),
      quiz(
        "You pasted this week's CBC outcome and a textbook page, and asked for questions. Two items return 'NOT IN SOURCE'. You should:",
        "Umebandika matokeo ya CBC ya wiki hii na ukurasa wa kitabu cha kiada, ukaomba maswali. Maswali mawili yanarudi 'HAIPO KATIKA CHANZO'. Unapaswa:",
        [
          "Force the model to invent those two so the quiz has ten items",
          "Treat the refusal as a feature: write those items yourself from the book, or drop them",
          "Paste a Wikipedia page to fill the gap without telling anyone",
          "Delete the retrieval rule because it is slowing you down",
        ],
        [
          "Ilazimishe modeli ibuni hayo mawili ili jaribio liwe na maswali kumi",
          "Chukulia kukataa kama kipengele: andika maswali hayo mwenyewe kutoka kitabu, au uyaache",
          "Bandika ukurasa wa Wikipedia kujaza pengo bila kumwambia mtu",
          "Futa kanuni ya utafutaji kwa sababu inakuchelewesha",
        ],
        1,
        "Refusal on empty retrieval is the point of grounding. Filling from the open web silently returns you to mix-up.",
        "Kukataa utafutaji ukiwa tupu ndiyo maana ya msingi. Kujaza kimya kutoka intaneti ya wazi kunakurudisha kwenye mchanganyiko."
      ),
      pb({
        titleEn: "Build a grounded-quiz prompt",
        titleSw: "Jenga maagizo ya jaribio lenye msingi",
        introEn:
          "You want a chatbot to draft questions from this week's approved notes only. Assemble a prompt that forces retrieval-by-paste and honest refusal.",
        introSw:
          "Unataka chatbot iandae maswali kutoka maelezo yaliyoidhinishwa ya wiki hii tu. Unganisha maagizo yanayolazimisha utafutaji-kwa-kubandika na kukataa kwa uaminifu.",
        goalEn:
          "Your prompt must include the class and outcome, the pasted-source rule, a Bloom mix, an answer key with quotes, and a NOT IN SOURCE refusal.",
        goalSw:
          "Maagizo yako lazima yawe na darasa na matokeo, kanuni ya chanzo kilichobandikwa, mchanganyiko wa Bloom, ufunguo wenye nukuu, na kukataa HAIPO KATIKA CHANZO.",
        blocksEn: [
          "Context: Grade 8 science, this week's outcome: describe gas exchange in the lungs",
          "Sources: use only the three paragraphs I have pasted from the textbook and my board notes",
          "Task: write 8 questions, 2 remember, 3 apply, 3 evaluate, one of them an error hunt",
          "Format: question, level, key, and a quoted supporting line from the pasted text",
          "If a question cannot be supported, write NOT IN SOURCE instead of inventing",
          "Also search the open web for extra challenge items and mix them in",
        ],
        blocksSw: [
          "Muktadha: sayansi Gredi ya 8, matokeo ya wiki hii: eleza ubadilishanaji wa gesi kwenye mapafu",
          "Vyanzo: tumia tu aya tatu niliyobandika kutoka kitabu cha kiada na maelezo yangu ya ubaoni",
          "Kazi: andika maswali 8, 2 ya kukumbuka, 3 ya kutumia, 3 ya kutathmini, moja liwe la kuwinda makosa",
          "Muundo: swali, ngazi, ufunguo, na mstari ulionukuliwa kutoka maandishi yaliyobandikwa",
          "Swali lisiweze kuungwa mkono, andika HAIPO KATIKA CHANZO badala ya kubuni",
          "Tafuta pia intaneti ya wazi kwa maswali ya ziada ya changamoto na uyachanganye",
        ],
        required: [0, 1, 3, 4],
        sampleEn:
          "Context: Grade 8 science, this week's outcome: describe gas exchange in the lungs. Sources: use only the three paragraphs I have pasted from the textbook and my board notes. Task: write 8 questions, 2 remember, 3 apply, 3 evaluate, one of them an error hunt. Format: question, level, key, and a quoted supporting line from the pasted text. If a question cannot be supported, write NOT IN SOURCE instead of inventing.",
        sampleSw:
          "Muktadha: sayansi Gredi ya 8, matokeo ya wiki hii: eleza ubadilishanaji wa gesi kwenye mapafu. Vyanzo: tumia tu aya tatu niliyobandika kutoka kitabu cha kiada na maelezo yangu ya ubaoni. Kazi: andika maswali 8, 2 ya kukumbuka, 3 ya kutumia, 3 ya kutathmini, moja liwe la kuwinda makosa. Muundo: swali, ngazi, ufunguo, na mstari ulionukuliwa kutoka maandishi yaliyobandikwa. Swali lisiweze kuungwa mkono, andika HAIPO KATIKA CHANZO badala ya kubuni.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Ground classroom AI in this week's approved notes. Empty retrieval must refuse.
- Teachers still check every quiz and key.
- Next unit: tools that claim to detect AI writing, and why they cannot prove misconduct.`,
        `- Weka AI ya darasani kwenye maelezo yaliyoidhinishwa ya wiki hii. Utafutaji tupu lazima ukatae.
- Walimu bado hukagua kila jaribio na ufunguo.
- Kitengo kijacho: zana zinazodai kugundua uandishi wa AI, na kwa nini haziwezi kuthibitisha ukiukaji.`
      ),
    ],
  },
  {
    id: "edu-i-u5",
    titleEn: "What detectors cannot prove",
    titleSw: "Kile vichunguzi visivyoweza kuthibitisha",
    cards: [
      note(
        "A percentage is a suspicion, not evidence of cheating",
        "Asilimia ni shaka, si ushahidi wa udanganyifu",
        `AI-writing detectors guess whether a text looks like the patterns they associate with machine output. They output a score. That score is not a recording of what happened on the learner's phone. It is not a witness. It is a noisy classifier.

Known failure modes in Kenyan schools:

- False positives: a careful bilingual learner, a formulaic CBC paragraph, or a short answer with high-frequency academic phrases can look "AI-like". Kiswahili and Sheng confuse detectors trained mainly on English.
- False negatives: a learner who pastes AI text and changes every third word, or who asks the tool to "sound like a 15-year-old in Kakamega", often sails through.
- Inconsistent scores: the same script pasted twice can move 20 points. That is not how proof behaves.
- Vendor secrecy: you rarely get a reliable error rate for your language, your class level, or your set books.

So detectors may be a prompt to look closer. They must not be the sole basis for a misconduct case, a lost mark, or a message home. Process beats score: compare with the learner's previous work, ask them to explain a paragraph with the script closed, check whether the task even allowed AI, and read the disclosure line.

UNESCO's 2023 guidance treats academic integrity as a teaching problem, not only a policing problem. A detector used as a threat in a class of 60, without a clear policy, mostly trains learners to hide.`,
        `Vichunguzi vya uandishi wa AI hukisia kama maandishi yanafanana na mifumo wanayoihusisha na matokeo ya mashine. Vinatoa alama. Alama hiyo si rekodi ya yaliyotokea kwenye simu ya mwanafunzi. Si shahidi. Ni ainishaji wenye kelele.

Njia zinazojulikana za kushindwa katika shule za Kenya:

- Matokeo chanya ya uwongo: mwanafunzi makini wa lugha mbili, aya ya CBC yenye fomula, au jibu fupi lenye misemo ya kitaaluma inayojirudia inaweza kuonekana "kama AI". Kiswahili na Sheng vinachanganya vichunguzi vilivyofunzwa zaidi kwa Kiingereza.
- Matokeo hasi ya uwongo: mwanafunzi anayebandika maandishi ya AI na kubadilisha kila neno la tatu, au anayeomba zana "isikike kama mwenye miaka 15 Kakamega", mara nyingi hupita.
- Alama zisizotulia: kazi ileile ikiwekwa mara mbili inaweza kuhama pointi 20. Ushahidi hautendi hivyo.
- Siri ya muuzaji: mara chache unapata kiwango cha kuaminika cha kosa kwa lugha yako, darasa lako, au vitabu teule.

Kwa hiyo vichunguzi vinaweza kuwa kichocheo cha kutazama karibu. Havisipaswi kuwa msingi pekee wa kesi ya ukiukaji, alama iliyopotea, au ujumbe nyumbani. Mchakato unashinda alama: linganisha na kazi ya awali ya mwanafunzi, muulize aeleze aya maandishi yakiwa yamefungwa, kagua kama kazi iliruhusu AI, na soma sentensi ya kueleza wazi.

Mwongozo wa UNESCO wa 2023 unachukulia uadilifu wa kitaaluma kama suala la kufundisha, si la polisi peke yake. Kichunguzi kinachotumiwa kama tisho katika darasa la 60, bila sera wazi, mara nyingi hunafunza wanafunzi kuficha.`
      ),
      reveal([
        {
          termEn: "False positive",
          termSw: "Chanya ya uwongo",
          defEn: "The detector flags human writing as AI. Common with short, careful, or bilingual work.",
          defSw: "Kichunguzi kinaweka alama kwenye uandishi wa binadamu kama AI. Kawaida kwa kazi fupi, makini, au ya lugha mbili.",
        },
        {
          termEn: "False negative",
          termSw: "Hasi ya uwongo",
          defEn: "The detector misses machine writing that was lightly edited or prompted to sound young.",
          defSw: "Kichunguzi kinakosa uandishi wa mashine uliohaririwa kidogo au kuagizwa usikike wa kijana.",
        },
        {
          termEn: "Process evidence",
          termSw: "Ushahidi wa mchakato",
          defEn: "Drafts, oral explanation, disclosure, and comparison with past work — stronger than a score.",
          defSw: "Rasimu, maelezo kwa mdomo, kueleza wazi, na ulinganisho na kazi ya zamani — imara kuliko alama.",
        },
        {
          termEn: "Sole-score verdict",
          termSw: "Hukumu ya alama pekee",
          defEn: "Punishing a learner using only the detector number. Do not do this.",
          defSw: "Kuadhibu mwanafunzi ukitumia namba ya kichunguzi pekee. Usifanye hivi.",
        },
      ]),
      note(
        "Worked example: 73% and a quiet learner",
        "Mfano wa kazi: asilimia 73 na mwanafunzi kimya",
        `Mr Kariuki runs 45 Grade 9 English scripts through a detector "to save time". One script, labelled only as number 17, scores 73% "AI". He is about to write to the parent.

He stops. He looks at the script. It is short, tidy, and uses "moreover" four times — a word this learner has used since Grade 7. He pulls two older compositions from the file. The voice matches. He asks the learner, privately, to explain the third paragraph with the paper turned over. She does, including a local market detail the detector cannot see.

He also finds that the detector scores his own model answer, which he wrote by hand last year, at 61%.

He does not send the message. He does log that take-home compositions are a weak security design, and he plans one in-class paragraph next week. The 73% was a prompt to talk, not a verdict.

Had he published the score on a class group, he would have humiliated a child for a number that also flags his own writing.`,
        `Bw. Kariuki anapitisha insha 45 za Kiingereza za Gredi ya 9 kwenye kichunguzi "kuokoa muda". Insha moja, yenye namba 17 tu, inapata 73% "AI". Anakwenda kuandika kwa mzazi.

Anasimama. Anaitazama insha. Ni fupi, safi, na inatumia "moreover" mara nne — neno mwanafunzi huyu ametumia tangu Gredi ya 7. Anatoa insha mbili za zamani kwenye faili. Sauti inalingana. Anamuuliza mwanafunzi, faragha, aeleze aya ya tatu karatasi ikiwa imepinduliwa. Anafanya hivyo, akiwemo undani wa soko la eneo ambao kichunguzi hauwezi kuona.

Anapata pia kwamba kichunguzi kinaweka alama kwenye jibu lake mwenyewe la mfano, aliloandika kwa mkono mwaka jana, 61%.

Hatumii ujumbe. Anaandika kwamba insha za nyumbani ni usanifu dhaifu wa usalama, na anapanga aya moja darasani wiki ijayo. 73% ilikuwa kichocheo cha kuongea, si hukumu.

Angechapisha alama kwenye kundi la darasa, angemdhalilisha mtoto kwa namba ambayo pia inaweka alama kwenye uandishi wake mwenyewe.`
      ),
      scenario({
        titleEn: "Scenario: 'zero for anyone over 50%'",
        titleSw: "Hali: 'sifuri kwa yeyote juu ya 50%'",
        situationEn:
          "A head of department proposes a standing rule: any continuous assessment composition scoring over 50% on the school's detector is given zero, no conversation, to 'send a message' before KCSE.",
        situationSw:
          "Mkuu wa idara anapendekeza kanuni ya kudumu: insha yoyote ya tathmini endelevu inayopata zaidi ya 50% kwenye kichunguzi cha shule ipewe sifuri, bila mazungumzo, ili 'tume ujumbe' kabla ya KCSE.",
        questionEn: "What is the defensible position?",
        questionSw: "Nafasi inayoweza kujilinda ni ipi?",
        optionsEn: [
          "Support it; KCSE season needs fear",
          "Reject a sole-score rule. Use detectors only as a prompt for process checks, keep oral explanation, and write a policy that says no mark is changed on a percentage alone",
          "Support it for Kiswahili only, because detectors are sharper there",
          "Support it but lower the threshold to 30%",
        ],
        optionsSw: [
          "Iunge mkono; msimu wa KCSE unahitaji hofu",
          "Kataa kanuni ya alama pekee. Tumia vichunguzi kama kichocheo cha ukaguzi wa mchakato, bakiza maelezo ya mdomo, na andika sera isemayo hakuna alama inayobadilishwa kwa asilimia peke yake",
          "Iunge mkono kwa Kiswahili tu, kwa sababu vichunguzi ni makali zaidi huko",
          "Iunge mkono lakini ushuke kiwango hadi 30%",
        ],
        correctIndex: 1,
        hintsEn: [
          "Fear that punishes honest bilingual writing is not preparation for KCSE. It is injustice with a dashboard.",
          "Correct. Integrity needs a process. A lower threshold is still a sole-score verdict.",
          "Kiswahili is often where detectors are weaker, not sharper.",
          "30% flags even more human writing.",
        ],
        hintsSw: [
          "Hofu inayowaadhibu waandishi waaminifu wa lugha mbili si maandalizi ya KCSE. Ni ukosefu wa haki wenye dashibodi.",
          "Sahihi. Uadilifu unahitaji mchakato. Kiwango cha chini bado ni hukumu ya alama pekee.",
          "Kiswahili mara nyingi ndipo vichunguzi vilivyo dhaifu, si makali.",
          "30% inaweka alama kwenye uandishi wa binadamu zaidi.",
        ],
        explainEn: "Detectors can start a conversation. They cannot finish a misconduct case.",
        explainSw: "Vichunguzi vinaweza kuanza mazungumzo. Haviwezi kumaliza kesi ya ukiukaji.",
      }),
      quiz(
        "A detector flags a Kiswahili insha at 80%. The learner can explain every paragraph orally. You should:",
        "Kichunguzi kinaweka alama kwenye insha ya Kiswahili 80%. Mwanafunzi anaweza kueleza kila aya kwa mdomo. Unapaswa:",
        [
          "Award zero because the tool is scientific",
          "Treat the oral explanation and past work as stronger evidence, and investigate the detector's language limits",
          "Run the insha through two more detectors and average the scores",
          "Post the 80% in the staff WhatsApp as a warning to others",
        ],
        [
          "Toa sifuri kwa sababu zana ni ya kisayansi",
          "Chukulia maelezo ya mdomo na kazi ya zamani kama ushahidi imara zaidi, na uchunguze mipaka ya lugha ya kichunguzi",
          "Pitisha insha kwenye vichunguzi viwili zaidi na wastanisha alama",
          "Chapisha 80% kwenye WhatsApp ya walimu kama onyo kwa wengine",
        ],
        1,
        "Oral retrieval of the work is process evidence. Averaging broken instruments does not make a witness. Public scores humiliate.",
        "Kutoa kazi kwa mdomo ni ushahidi wa mchakato. Wastani wa vyombo vilivyovunjika haufanyi shahidi. Alama za hadhara hudhalilisha."
      ),
      note(
        "Try it: test the detector on your own writing",
        "Jaribu: pima kichunguzi kwenye uandishi wako",
        `If your school has a detector, paste three texts this week, labelled by number, never by learner name:

- A paragraph you wrote by hand last year.
- A paragraph a chatbot wrote on the same topic.
- A bilingual or Kiswahili paragraph from a colleague who volunteered.

Record the three scores. Note false flags. Bring the sheet to the next departmental meeting as evidence against a sole-score rule.

If you have no detector, skip the tool and write a five-line oral-check protocol instead: what you will ask, with the script closed, before you ever talk of misconduct.`,
        `Shule yako ikiwa na kichunguzi, weka maandishi matatu wiki hii, yaliyowekwa namba, kamwe si jina la mwanafunzi:

- Aya uliyoandika kwa mkono mwaka jana.
- Aya chatbot iliandika kuhusu mada ileile.
- Aya ya lugha mbili au Kiswahili kutoka kwa mwenzako aliyejitolea.

Rekodi alama tatu. Andika bendera za uwongo. Leta karatasi kwenye mkutano ujao wa idara kama ushahidi dhidi ya kanuni ya alama pekee.

Kama huna kichunguzi, ruka zana na uandike itifaki ya mistari mitano ya ukaguzi wa mdomo: utakachouliza, maandishi yakiwa yamefungwa, kabla hujawahi kuongea kuhusu ukiukaji.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Detector scores are suspicions. Process evidence decides.
- Never punish on a percentage alone, especially in Kiswahili or bilingual work.
- Next unit: using AI so learners with disabilities and second-language learners are not left out.`,
        `- Alama za vichunguzi ni shaka. Ushahidi wa mchakato ndio unaoamua.
- Usiadhibu kwa asilimia peke yake, hasa katika Kiswahili au kazi ya lugha mbili.
- Kitengo kijacho: kutumia AI ili wanafunzi wenye ulemavu na wanaojifunza kwa lugha ya pili wasiachwe nje.`
      ),
    ],
  },
  {
    id: "edu-i-u6",
    titleEn: "Accessibility and inclusion",
    titleSw: "Ufikivu na ujumuishaji",
    cards: [
      note(
        "A tool that helps only the already-resourced learner is not a school tool",
        "Zana inayosaidia tu mwanafunzi aliye na rasilimali tayari si zana ya shule",
        `AI can widen access: a learner with low vision can hear a textbook page; a learner who is deaf can read a caption; a learner who thinks in Kiswahili can get a second explanation of an English science term; a learner who cannot hold a pen can dictate a draft. Those uses are real.

The same tools can shut people out. A quiz that is only on a phone, a voice tool that fails on Kenyan Sign Language, an image generator that never shows a learner with a disability except as a problem, a "read-aloud" voice that cannot pronounce Kiswahili names, a colour-only chart for a colour-blind learner — each of those is a design choice.

Plan the lesson for the learner who is not the default:

- Always keep a paper path (unit 9 of the beginner track, now as a teacher duty).
- When you generate worksheets with AI, ask for alt text on every figure, large type, and a version that does not rely on colour alone.
- Do not require a private device for a marked task.
- Check Kiswahili and English versions separately. A translation that stumbles (beginner unit 6) is an access failure, not a joke.
- Captions, transcripts and extra time are ordinary accommodations. AI can draft them; you still check names, numbers and tone.

UNESCO's 2024 AI competency ideas for students include a human-centred mindset: tools should serve the learner's dignity. That is inclusion, not a special week.`,
        `AI inaweza kupanua ufikiaji: mwanafunzi mwenye uoni hafifu anaweza kusikia ukurasa wa kitabu cha kiada; mwanafunzi kiziwi anaweza kusoma manukuu; mwanafunzi anayefikiri kwa Kiswahili anaweza kupata maelezo ya pili ya neno la sayansi la Kiingereza; mwanafunzi asiyeweza kushika kalamu anaweza kuamuru rasimu. Matumizi hayo ni halisi.

Zana zilezile zinaweza kuwafunga watu nje. Jaribio lililo kwenye simu tu, zana ya sauti inayoshindwa kwenye Lugha ya Alama ya Kenya, kizalishaji picha ambacho huonyesha mwanafunzi mwenye ulemavu kama tatizo tu, sauti ya "soma kwa sauti" isiyoweza kutamka majina ya Kiswahili, chati ya rangi pekee kwa mwanafunzi asiyeona rangi vizuri — kila kimoja ni uamuzi wa usanifu.

Panga somo kwa mwanafunzi ambaye si wa kawaida:

- Bakiza daima njia ya karatasi (somo la 9 la mfululizo wa mwanzoni, sasa kama wajibu wa mwalimu).
- Unapozalisha karatasi za kazi kwa AI, omba maandishi mbadala kwenye kila mchoro, herufi kubwa, na toleo lisilotegea rangi pekee.
- Usitake kifaa binafsi kwa kazi inayopewa alama.
- Kagua matoleo ya Kiswahili na Kiingereza kando. Tafsiri inayokwama (somo la 6 la mwanzoni) ni kushindwa kwa ufikiaji, si mzaha.
- Manukuu, nakala za maandishi na muda wa ziada ni marekebisho ya kawaida. AI inaweza kuyaandaa; wewe bado unakagua majina, namba na sauti.

Mawazo ya UNESCO ya 2024 kuhusu umahiri wa AI kwa wanafunzi yanajumuisha mwelekeo unaomlenga binadamu: zana zihudumie heshima ya mwanafunzi. Huo ni ujumuishaji, si wiki maalum.`
      ),
      reveal([
        {
          termEn: "Paper path",
          termSw: "Njia ya karatasi",
          defEn: "A complete way to do the task without a personal device or paid tool.",
          defSw: "Njia kamili ya kufanya kazi bila kifaa binafsi au zana ya kulipia.",
        },
        {
          termEn: "Alt text",
          termSw: "Maandishi mbadala (alt text)",
          defEn: "A short description of an image so a screen reader, or a learner who cannot see it, gets the meaning.",
          defSw: "Maelezo mafupi ya picha ili kisoma skrini, au mwanafunzi asiyeweza kuiona, apate maana.",
        },
        {
          termEn: "Caption and transcript",
          termSw: "Manukuu na nakala",
          defEn: "Words that match speech, for learners who cannot hear the audio or who need to re-read.",
          defSw: "Maneno yanayolingana na usemi, kwa wasioweza kusikia sauti au wanaohitaji kusoma tena.",
        },
        {
          termEn: "Default learner",
          termSw: "Mwanafunzi wa kawaida (default)",
          defEn: "The imaginary student a tool was built for: often sighted, hearing, English-first, with a phone.",
          defSw: "Mwanafunzi wa kubuniwa ambaye zana ilijengwa kwa ajili yake: mara nyingi anaona, anasikia, Kiingereza kwanza, na simu.",
        },
      ]),
      note(
        "Worked example: 48 worksheets, one learner who listens",
        "Mfano wa kazi: karatasi 48, mwanafunzi mmoja anayesikiliza",
        `Mr Omondi generates a Grade 6 map worksheet with AI: label five counties. The draft is a colour map with red arrows and no alt text. Amina, who uses a screen reader on the school's one accessible laptop, would hear "image".

He re-prompts: "Describe the same five counties as a numbered list with neighbouring counties named in words. No colour instructions. Add one-line alt text for any map: 'Outline of Kenya with Lake Victoria on the west.'" He prints list copies and one large-type copy. He does not make Amina's version a public exception announced to the class as "the special one".

Time: 12 extra minutes. The AI draft without the access pass would have excluded her from the mark.

He also checks the Kiswahili instructions. The chatbot had written "kaunti" correctly but used a rare verb the class has not met. He replaces it with the verb from the textbook. Access includes language.`,
        `Bw. Omondi anazalisha karatasi ya ramani ya Gredi ya 6 kwa AI: weka majina ya kaunti tano. Rasimu ni ramani ya rangi yenye mishale nyekundu bila maandishi mbadala. Amina, anayetumia kisoma skrini kwenye kompyuta moja ya shule inayofikika, angesikia "picha".

Anaomba tena: "Eleza kaunti zilezile tano kama orodha yenye namba na kaunti jirani zikitajwa kwa maneno. Hakuna maelekezo ya rangi. Ongeza mstari mmoja wa maandishi mbadala kwa ramani yoyote: 'Mchoro wa Kenya na Ziwa Victoria magharibi.'" Anachapisha nakala za orodha na nakala moja ya herufi kubwa. Hafanyi toleo la Amina kuwa tofauti ya hadhara inayotangazwa darasani kama "ya pekee".

Muda: dakika 12 za ziada. Rasimu ya AI bila hatua ya ufikiaji ingemtoa kwenye alama.

Pia anakagua maelekezo ya Kiswahili. Chatbot iliandika "kaunti" sawa lakini ilitumia kitenzi adimu ambacho darasa hajakutana nacho. Anakibadilisha na kitenzi cha kitabu cha kiada. Ufikiaji unajumuisha lugha.`
      ),
      scenario({
        titleEn: "Scenario: homework that lives only in an app",
        titleSw: "Hali: kazi ya nyumbani inayoishi kwenye programu tu",
        situationEn:
          "A vendor demo convinces a deputy that all Grade 7 homework should be submitted in a speech-to-text app 'for inclusion'. Several learners have no smartphone. One learner who is deaf cannot use speech-to-text. The app has no Kenyan Sign Language support.",
        situationSw:
          "Onyesho la muuzaji linamshawishi naibu kwamba kazi zote za nyumbani za Gredi ya 7 ziwasilishwe kwenye programu ya sauti-kuwa-maandishi 'kwa ujumuishaji'. Wanafunzi kadhaa hawana simu ya kisasa. Mwanafunzi mmoja kiziwi hawezi kutumia sauti-kuwa-maandishi. Programu haina msaada wa Lugha ya Alama ya Kenya.",
        questionEn: "What is the inclusive design?",
        questionSw: "Usanifu jumuishi ni upi?",
        optionsEn: [
          "Adopt the app for everyone; families must find phones",
          "Keep paper and in-class oral options as full-mark paths; use the app only as an extra, never as the only gate to the mark",
          "Adopt the app but exempt the deaf learner publicly",
          "Drop homework altogether",
        ],
        optionsSw: [
          "Pitisha programu kwa kila mtu; familia lazima zipate simu",
          "Bakiza karatasi na chaguo la mdomo darasani kama njia za alama kamili; tumia programu kama nyongeza tu, kamwe si lango pekee la alama",
          "Pitisha programu lakini umuachilie mwanafunzi kiziwi hadharani",
          "Acha kazi ya nyumbani kabisa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Forcing phones turns inclusion language into exclusion.",
          "Correct. Extra channels are good. Exclusive channels are not. Public exemption singles the learner out.",
          "A public exemption is a spotlight, not access.",
          "Homework can stay if a paper path exists.",
        ],
        hintsSw: [
          "Kulazimisha simu hugeuza lugha ya ujumuishaji kuwa kutengwa.",
          "Sahihi. Njia za ziada ni nzuri. Njia za kipekee si. Kumuachilia hadharani ni kutoa mwanga, si ufikiaji.",
          "Kumuachilia hadharani ni kutoa mwanga, si ufikiaji.",
          "Kazi ya nyumbani inaweza kubaki njia ya karatasi ikiwepo.",
        ],
        explainEn: "Inclusion is a complete alternative path, not a branded app that some children cannot enter.",
        explainSw: "Ujumuishaji ni njia mbadala kamili, si programu yenye chapa ambayo baadhi ya watoto hawawezi kuingia.",
      }),
      quiz(
        "You asked AI for a chart. It uses red and green only, with no labels. You should:",
        "Umeomba AI chati. Inatumia nyekundu na kijani tu, bila lebo. Unapaswa:",
        [
          "Print it; colour is clear to most learners",
          "Regenerate with labels in words, patterns as well as colour, and alt text, then check it yourself",
          "Tell colour-blind learners to sit with a friend",
          "Use it only on the projector, not on paper",
        ],
        [
          "Ichapishe; rangi iko wazi kwa wanafunzi wengi",
          "Zalisha upya na lebo kwa maneno, mifumo pamoja na rangi, na maandishi mbadala, kisha uikague mwenyewe",
          "Waambie wasioona rangi vizuri wakae na rafiki",
          "Itumie kwenye projekta tu, si kwenye karatasi",
        ],
        1,
        "Most is not all. Labels and patterns are ordinary design. Sitting with a friend is not an accommodation you should require.",
        "Wengi si wote. Lebo na mifumo ni usanifu wa kawaida. Kukaa na rafiki si marekebisho unayopaswa kudai."
      ),
      note(
        "Try it: one worksheet, two paths",
        "Jaribu: karatasi moja, njia mbili",
        `Take next week's worksheet, whether AI-drafted or not.

- Write a paper-only version that a learner with no phone can complete for full credit.
- Add alt text for every figure, and a large-type or list version of any colour chart.
- Check the Kiswahili (or English) instructions against the textbook's usual verbs.
- Note any learner in the class for whom this still fails, and what you will do.

Do not put those learners' names into a public chatbot while you problem-solve.`,
        `Chukua karatasi ya wiki ijayo, iwe rasimu ya AI au la.

- Andika toleo la karatasi tu ambalo mwanafunzi asiye na simu anaweza kukamilisha kwa alama kamili.
- Ongeza maandishi mbadala kwa kila mchoro, na toleo la herufi kubwa au orodha kwa chati yoyote ya rangi.
- Kagua maelekezo ya Kiswahili (au Kiingereza) dhidi ya vitenzi vya kawaida vya kitabu cha kiada.
- Andika mwanafunzi yeyote ambaye hii bado inamshindwa, na utakachofanya.

Usiweke majina ya wanafunzi hao kwenye chatbot ya hadhara unapotafuta suluhisho.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Access is a paper path, alt text, language checks and no device-gated marks.
- AI can draft accommodations; teachers still review them.
- Next unit: teacher workload in a crowded class, and what is worth automating.`,
        `- Ufikiaji ni njia ya karatasi, maandishi mbadala, ukaguzi wa lugha na hakuna alama zinazofungwa na kifaa.
- AI inaweza kuandaa marekebisho; walimu bado huyakagua.
- Kitengo kijacho: mzigo wa mwalimu katika darasa lenye msongamano, na kile kinachostahili otomatiki.`
      ),
    ],
  },
  {
    id: "edu-i-u7",
    titleEn: "Teacher workload in a crowded class",
    titleSw: "Mzigo wa mwalimu katika darasa lenye msongamano",
    cards: [
      note(
        "Time saved is only real after you have reviewed the output",
        "Muda uliokolewa ni wa kweli tu baada ya kukagua matokeo",
        `A teacher with three streams of 50 is already marking, planning, covering absences and meeting parents. AI vendors promise that quizzes, comments and lesson notes will "take minutes". Minutes to generate. The review is the job.

Count honestly:

- Generating 40 items: 5 minutes.
- Checking every item and key against the CBC outcome and the textbook (units 2 and 4): 25 to 40 minutes.
- If you skip review, you have not saved time. You have transferred error to 150 scripts.

So use AI where review is cheaper than drafting from zero: first drafts of worksheets, criterion-level comments with evidence quotes (unit 3), a second explanation of a stuck idea. Do not use it where review is more expensive than the gain: auto-marks on compositions, nightly personalised homework you cannot read, dashboards you will not interrogate.

UNESCO's 2023 guidance is blunt that generative AI should not replace teachers. In a crowded Kenyan class, replacement-by-neglect is the risk: the tool produces, nobody reads, the class still sits it.

Put review on the timetable. If the scheme of work has no slot to check AI drafts, you should not generate them that week. A photocopied textbook exercise you have used before is more professional than an unchecked generated pack.`,
        `Mwalimu mwenye mito mitatu ya 50 tayari anasahihisha, kupanga, kufunika kutokuwepo na kukutana na wazazi. Wauzaji wa AI wanaahidi kwamba majaribio, maoni na maelezo ya somo "yatachukua dakika". Dakika za kuzalisha. Ukaguzi ndio kazi.

Hesabu kwa uaminifu:

- Kuzalisha vipengee 40: dakika 5.
- Kukagua kila kipengee na ufunguo dhidi ya matokeo ya CBC na kitabu cha kiada (vitengo vya 2 na 4): dakika 25 hadi 40.
- Ukiruka ukaguzi, hukuoa muda. Umehamisha kosa kwenye kazi 150.

Kwa hiyo tumia AI pale ukaguzi ulipo rahisi kuliko kuandika kuanzia nchi: rasimu za kwanza za karatasi, maoni ya kigezo yenye nukuu za ushahidi (somo la 3), maelezo ya pili ya wazo lililokwama. Usitumie pale ukaguzi ulipo ghali kuliko faida: alama za kiotomatiki kwenye insha, kazi ya nyumbani ya kila usiku uliyobinafsisha usiyoweza kusoma, dashibodi usizozichunguza.

Mwongozo wa UNESCO wa 2023 uko wazi kwamba AI generative isichukue nafasi ya walimu. Katika darasa la Kenya lenye msongamano, hatari ni kubadilishwa-kwa-kupuuzia: zana inazalisha, hakuna anayesoma, darasa bado linafanya.

Weka ukaguzi kwenye ratiba. Mpango wa kazi usipokuwa na nafasi ya kukagua rasimu za AI, usizizalishe wiki hiyo. Zoezi la kitabu cha kiada ulilowahi kutumia ni la kitaalamu zaidi kuliko pakiti iliyozalishwa isiyokaguliwa.`
      ),
      reveal([
        {
          termEn: "Review time",
          termSw: "Muda wa ukaguzi",
          defEn: "The minutes a teacher spends checking AI drafts before learners see them. This is teaching time.",
          defSw: "Dakika mwalimu anazotumia kukagua rasimu za AI kabla wanafunzi hawajaona. Huu ni muda wa kufundisha.",
        },
        {
          termEn: "False saving",
          termSw: "Akiba ya uwongo",
          defEn: "Counting only generation minutes and ignoring review, reprinting and parent complaints.",
          defSw: "Kuhesabu dakika za kuzalisha tu na kupuuza ukaguzi, kuchapisha upya na malalamiko ya wazazi.",
        },
        {
          termEn: "Stream load",
          termSw: "Mzigo wa mito",
          defEn: "Several parallel classes of the same grade. An error in one worksheet is multiplied.",
          defSw: "Madarasa kadhaa sambamba ya gredi ileile. Kosa katika karatasi moja linazidishwa.",
        },
        {
          termEn: "Timetabled review",
          termSw: "Ukaguzi uliowekwa ratibani",
          defEn: "A planned slot to check AI output. If it is not on the timetable, do not generate that week.",
          defSw: "Nafasi iliyopangwa kukagua matokeo ya AI. Ikiwa haiko ratibani, usizalishe wiki hiyo.",
        },
      ]),
      note(
        "Worked example: three streams, one wrong key",
        "Mfano wa kazi: mito mitatu, ufunguo mmoja usio sahihi",
        `Ms Chepkorir teaches Grade 8 science to streams A, B and C, 52 each, 156 learners. She generates an end-of-strand quiz in 6 minutes and, pressed by a staff meeting, skips the key. One item has two correct options. Another key contradicts the textbook on veins.

She marks stream A herself using the AI key. Eighteen learners lose two marks they deserved. Parents of stream A complain. She then spends 90 minutes re-marking A, and still has B and C unmarked.

Honest recount: generation 6 + meeting 40 + remarking 90 + apology messages 20 = 156 minutes, against about 70 minutes to have written and checked a 10-item quiz from her old file.

The next strand, she generates, then uses the 25-minute tea break with a colleague to work every item (unit 2). They catch the vein error. Marking 156 scripts still takes time, but there is no second wave.

Crowding makes review more valuable, not less. More scripts mean more people inherit one mistake.`,
        `Bi. Chepkorir anafundisha sayansi ya Gredi ya 8 mito A, B na C, 52 kila moja, wanafunzi 156. Anazalisha jaribio la mwisho wa strandi kwa dakika 6 na, akisukumwa na mkutano wa walimu, anaruka ufunguo. Swali moja lina chaguo mbili sahihi. Ufunguo mwingine unapingana na kitabu cha kiada kuhusu vena.

Anasahihisha mto A mwenyewe akitumia ufunguo wa AI. Wanafunzi kumi na nane wanapoteza alama mbili walizostahili. Wazazi wa A wanalalamika. Kisha anatumia dakika 90 kusahihisha A upya, na bado B na C hazijasahihishwa.

Hesabu ya uaminifu: kuzalisha 6 + mkutano 40 + kusahihisha upya 90 + ujumbe wa radhi 20 = dakika 156, dhidi ya takriban dakika 70 kuandika na kukagua jaribio la maswali 10 kutoka faili yake ya zamani.

Strandi inayofuata, anazalisha, kisha anatumia mapumziko ya chai ya dakika 25 na mwenzako kupitia kila swali (somo la 2). Wanapata kosa la vena. Kusahihisha kazi 156 bado kunachukua muda, lakini hakuna wimbi la pili.

Msongamano unafanya ukaguzi kuwa wa thamani zaidi, si pungufu. Kazi nyingi zinamaanisha watu wengi wanarithi kosa moja.`
      ),
      scenario({
        titleEn: "Scenario: 'let it mark the pile'",
        titleSw: "Hali: 'iachie isahihishe rundo'",
        situationEn:
          "Your principal, seeing 150 unread compositions, says the new tool should assign marks overnight so teachers can 'focus on teaching'. Teachers would only handle appeals.",
        situationSw:
          "Mkuu wako, akiona insha 150 zisizosomwa, anasema zana mpya iweke alama usiku ili walimu 'wazingatie kufundisha'. Walimu washughulikie malalamiko tu.",
        questionEn: "What do you propose instead?",
        questionSw: "Unapendekeza nini badala yake?",
        optionsEn: [
          "Agree; 150 scripts are impossible for humans",
          "Keep teacher-set marks. Use AI only to draft comments with evidence quotes on a sample, timetable a marking bee, and reduce the number of high-stakes take-home compositions",
          "Agree for one stream as a pilot without telling parents",
          "Agree, and hide the AI name on the report form",
        ],
        optionsSw: [
          "Kubali; kazi 150 haziwezekani kwa binadamu",
          "Bakiza alama za mwalimu. Tumia AI tu kuandaa maoni yenye nukuu za ushahidi kwenye sampuli, panga pamoja ya kusahihisha, na punguza idadi ya insha kubwa za nyumbani",
          "Kubali kwa mto mmoja kama jaribio bila kuwaambia wazazi",
          "Kubali, na ufice jina la AI kwenye fomu ya ripoti",
        ],
        correctIndex: 1,
        hintsEn: [
          "Impossible is a workload design problem. Auto-marks on unread scripts create a different impossibility: unjust reports.",
          "Correct. Cut volume, share marking, draft comments. Do not move accountability to a model (unit 3).",
          "A secret pilot still writes numbers into records.",
          "Hiding the name is a disclosure failure toward parents.",
        ],
        hintsSw: [
          "Kutowezekana ni tatizo la usanifu wa mzigo. Alama za kiotomatiki kwenye kazi zisizosomwa zinaunda kutowezekana kwa namna nyingine: ripoti zisizo za haki.",
          "Sahihi. Punguza kiasi, gawanya usahihishaji, andaa maoni. Usihamishe uwajibikaji kwa modeli (somo la 3).",
          "Jaribio la siri bado linaandika namba kwenye rekodi.",
          "Kuficha jina ni kushindwa kueleza wazi kwa wazazi.",
        ],
        explainEn: "Workload relief comes from fewer, better-checked tasks — not from unread auto-marks.",
        explainSw: "Punguzo la mzigo linatoka kwenye kazi chache zilizokaguliwa vizuri — si alama za kiotomatiki zisizosomwa.",
      }),
      quiz(
        "When is time saved by AI real in a crowded school?",
        "Muda uliokolewa na AI ni wa kweli lini katika shule yenye msongamano?",
        [
          "As soon as the generate button is clicked",
          "Only after review, when the remaining teacher time is less than writing from scratch and the error risk is owned",
          "Whenever a vendor slide says 70% faster",
          "When learners mark themselves with the chatbot",
        ],
        [
          "Mara kitufe cha kuzalisha kinapobonyezwa",
          "Baada ya ukaguzi tu, wakati muda uliobaki wa mwalimu ni pungufu kuliko kuandika kuanzia mwanzo na hatari ya kosa inamilikiwa",
          "Wakati wowote slaidi ya muuzaji inaposema 70% haraka",
          "Wanafunzi wanapojisahihisha kwa chatbot",
        ],
        1,
        "Generation is the cheap step. Review and accountability are the expensive ones. Skipping them is a false saving.",
        "Kuzalisha ni hatua rahisi. Ukaguzi na uwajibikaji ndivyo vya gharama. Kuviruka ni akiba ya uwongo."
      ),
      note(
        "Try it: a one-week time budget",
        "Jaribu: bajeti ya muda ya wiki moja",
        `On a single page, for next week:

- List every AI use you plan (quiz draft, comments, translation, none).
- Write review minutes next to each, not generation minutes.
- If review minutes do not fit around teaching, cut the AI use, not the review.
- Add one line: "Teachers review all AI-made quizzes and marks before learners or parents see them."

Compare with a colleague who teaches the same grade. If your review estimates differ by a factor of two, the lower one is probably a false saving.`,
        `Kwenye ukurasa mmoja, kwa wiki ijayo:

- Orodhesha kila matumizi ya AI unayopanga (rasimu ya jaribio, maoni, tafsiri, hakuna).
- Andika dakika za ukaguzi kando ya kila moja, si dakika za kuzalisha.
- Dakika za ukaguzi zisipotoshea kufundisha, kata matumizi ya AI, si ukaguzi.
- Ongeza mstari mmoja: "Walimu hukagua majaribio na alama zote zilizotengenezwa na AI kabla wanafunzi au wazazi hawajaona."

Linganisha na mwenzako anayefundisha gredi ileile. Makadirio yenu ya ukaguzi yakitofautiana mara mbili, lile la chini huenda ni akiba ya uwongo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Count review time. Crowding multiplies one unchecked error.
- Cut task volume before you automate marks.
- Next unit: designing lessons that stay fair when only a few devices appear.`,
        `- Hesabu muda wa ukaguzi. Msongamano unazidisha kosa moja lisilokaguliwa.
- Punguza kiasi cha kazi kabla ya kufanya alama kuwa za kiotomatiki.
- Kitengo kijacho: kubuni masomo yanayobaki ya haki simu chache zinapotokea.`
      ),
    ],
  },
  {
    id: "edu-i-u8",
    titleEn: "Fair lessons with mixed devices",
    titleSw: "Masomo ya haki kwa vifaa tofauti",
    cards: [
      note(
        "Design the lesson so the phone is extra, not the gate",
        "Buni somo ili simu iwe nyongeza, si lango",
        `Mixed device access is the default in many Kenyan schools: a lab period once a week, three phones in a class of fifty, a teacher's laptop on a projector that sometimes fails. If the learning outcome can only be met by those who brought data, you have written an equity problem into the scheme of work.

Fair design:

- Teach the idea on paper or board first.
- Use devices, if any, for a short, rotating practice that a paper task already prepared.
- Assess on paper or orally, unless every learner has the same approved device in the room.
- Ban answer dumps in class groups (beginner unit 9, now as a staff rule).
- Do not grade weekend work that required a paid chatbot.

This is slower than a demo in which every child in a vendor video has a tablet. It is the lesson that matches the room you actually have.

Equity of devices will return at advanced level as a procurement and policy question. Here the unit is practical: tomorrow's double lesson, 48 learners, four working tablets.`,
        `Upatikanaji mchanganyiko wa vifaa ndio kawaida katika shule nyingi Kenya: kipindi cha maabara mara moja kwa wiki, simu tatu katika darasa la hamsini, kompyuta ndogo ya mwalimu kwenye projekta ambayo wakati mwingine inashindwa. Matokeo ya ujifunzaji yakiweza kufikiwa tu na walioleta data, umeandika tatizo la usawa kwenye mpango wa kazi.

Usanifu wa haki:

- Fundisha wazo kwenye karatasi au ubaoni kwanza.
- Tumia vifaa, kama vipo, kwa mazoezi mafupi yanayozunguka ambayo kazi ya karatasi tayari imeandaa.
- Tathmini kwenye karatasi au kwa mdomo, isipokuwa kila mwanafunzi ana kifaa kile kile kilichoidhinishwa chumbani.
- Kataza mwagaji wa majibu kwenye makundi ya darasa (somo la 9 la mwanzoni, sasa kama kanuni ya walimu).
- Usitoe alama kwenye kazi ya wikendi iliyohitaji chatbot ya kulipia.

Hii ni ya polepole kuliko onyesho ambalo kila mtoto kwenye video ya muuzaji ana kishikwambi. Ndivyo somo linavyolingana na chumba ulicho nacho.

Usawa wa vifaa utarudi katika ngazi ya juu kama suala la ununuzi na sera. Hapa kitengo ni cha vitendo: kipindi maradufu cha kesho, wanafunzi 48, vishikwambi vinne vinavyofanya kazi.`
      ),
      reveal([
        {
          termEn: "Device as extra",
          termSw: "Kifaa kama nyongeza",
          defEn: "Practice on a phone after the idea is already teachable without one.",
          defSw: "Mazoezi kwenye simu baada ya wazo tayari kufundishika bila kifaa.",
        },
        {
          termEn: "Device as gate",
          termSw: "Kifaa kama lango",
          defEn: "When the only way to the mark or the explanation is a gadget some children do not have.",
          defSw: "Njia pekee ya alama au maelezo ikiwa kifaa ambacho baadhi ya watoto hawana.",
        },
        {
          termEn: "Rotation",
          termSw: "Mzunguko",
          defEn: "Short turns on the few working devices, with a complete paper task running in parallel.",
          defSw: "Nafasi fupi kwenye vifaa vichache vinavyofanya kazi, na kazi kamili ya karatasi ikienda sambamba.",
        },
        {
          termEn: "Same-device assessment",
          termSw: "Tathmini ya kifaa kimoja",
          defEn: "Testing with devices only when the school provides the same tool to every candidate in the room.",
          defSw: "Kujaribu kwa vifaa tu shule inapotoa zana ileile kwa kila mtahiniwa chumbani.",
        },
      ]),
      note(
        "Worked example: four tablets, 48 learners, one double lesson",
        "Mfano wa kazi: vishikwambi vinne, wanafunzi 48, kipindi maradufu kimoja",
        `Mr Hassan in Garissa has 80 minutes. Outcome: convert mixed numbers to improper fractions.

Minutes 0–25: board and paper. Everyone attempts four items. This is the learning.

Minutes 25–55: four tablets at the teacher's desk, groups of four, three-minute turns, prompt on a card: "Do not give the answer. Tell me which step is wrong in this sum I already tried." The other groups continue paper, using a photocopied error-hunt he reviewed (units 2 and 4).

Minutes 55–80: paper exit ticket, books closed, five items. No tablet in the assessment.

Twelve learners touched a tablet. Forty-eight sat the same exit ticket. The mark does not encode who brought data.

If the projector had failed, the 0–25 and 55–80 blocks would still have stood. That is the test of the design.`,
        `Bw. Hassan Garissa ana dakika 80. Matokeo: badilisha namba mchanganyiko kuwa sehemu zisizo kamili.

Dakika 0–25: ubaoni na karatasi. Kila mtu anajaribu vipengee vinne. Huku ndiko kujifunza.

Dakika 25–55: vishikwambi vinne mezani mwa mwalimu, vikundi vya wanne, zamu za dakika tatu, maagizo kwenye kadi: "Usinipe jibu. Niambie ni hatua ipi nimekosea katika hesabu hii niliyojaribu." Vikundi vingine vinaendelea na karatasi, wakitumia uwindaji wa makosa ulionakiliwa alioukagua (vitengo vya 2 na 4).

Dakika 55–80: tiketi ya kutoka ya karatasi, vitabu vimefungwa, vipengee vitano. Hakuna kishikwambi katika tathmini.

Wanafunzi kumi na wawili waligusa kishikwambi. Arobaini na nane walifanya tiketi ileile. Alama haijumuishi nani alileta data.

Projekta ingeshindwa, vipande vya 0–25 na 55–80 bado vingesimama. Hicho ndicho kipimo cha usanifu.`
      ),
      scenario({
        titleEn: "Scenario: weekend chatbot homework",
        titleSw: "Hali: kazi ya nyumbani ya chatbot ya wikendi",
        situationEn:
          "A colleague sets: 'Ask any chatbot to generate 20 revision questions on the topic and bring printed answers on Monday.' About a third of the class has no home data. A few will buy questions at a cyber cafe.",
        situationSw:
          "Mwenzako anaweka: 'Omba chatbot yoyote izalishe maswali 20 ya marudio kuhusu mada na ulete majibu yaliyochapishwa Jumatatu.' Takriban theluthi ya darasa haina data nyumbani. Baadhi watanunua maswali kwenye cyber cafe.",
        questionEn: "What should you say in the departmental chat?",
        questionSw: "Useme nini kwenye gumzo la idara?",
        optionsEn: [
          "Support it; resourceful families will cope",
          "Replace it with a paper revision sheet issued on Friday, optional extra chatbot practice for those who have access, unmarked",
          "Keep it, but lend school tablets over the weekend without a register",
          "Keep it, and award extra marks to those who used AI, to encourage technology",
        ],
        optionsSw: [
          "Iunge mkono; familia zenye ujanja zitahimili",
          "Ibadilishe na karatasi ya marudio ya karatasi itolewayo Ijumaa, mazoezi ya ziada ya chatbot kwa walio na ufikiaji, yasiyo na alama",
          "Ibaki, lakini azime vishikwambi vya shule wikendi bila daftari",
          "Ibaki, na utoe alama za ziada kwa walioitumia AI, ili kuhimiza teknolojia",
        ],
        correctIndex: 1,
        hintsEn: [
          "Coping by paying a cafe is not equity. It is a hidden fee.",
          "Correct. The common path is paper. Optional extras must not carry the mark. Unregistered loans lose devices and data.",
          "Tablets leaving without a register is a different failure.",
          "Extra marks for access reward money, not learning.",
        ],
        hintsSw: [
          "Kuhimili kwa kulipa cafe si usawa. Ni ada iliyofichwa.",
          "Sahihi. Njia ya pamoja ni karatasi. Nyongeza za hiari zisibebe alama. Mikopo isiyosajiliwa inapoteza vifaa na data.",
          "Vishikwambi vinavyotoka bila daftari ni kushindwa kwa namna nyingine.",
          "Alama za ziada kwa ufikiaji zinatuza pesa, si kujifunza.",
        ],
        explainEn: "The assessed path must be available to every learner in the class as it actually is.",
        explainSw: "Njia inayotathminiwa lazima ipatikane kwa kila mwanafunzi katika darasa kama lilivyo.",
      }),
      quiz(
        "Four tablets work. You need an end-of-lesson check of mastery. Best option:",
        "Vishikwambi vinne vinafanya kazi. Unahitaji ukaguzi wa umahiri mwisho wa somo. Chaguo bora:",
        [
          "Adaptive app on the four tablets, others get no check",
          "The same five paper items for everyone, tablets already used only for optional practice",
          "Those with phones sit the app; those without copy from them",
          "Cancel the check",
        ],
        [
          "Programu inayojirekebisha kwenye vishikwambi vinne, wengine wasipate ukaguzi",
          "Vipengee vitano vilevile vya karatasi kwa kila mtu, vishikwambi vilitumika kwa mazoezi ya hiari tu",
          "Wenye simu wafanye programu; wasio nazo wanakili kutoka kwao",
          "Futa ukaguzi",
        ],
        1,
        "Mastery evidence should not depend on who touched a tablet. Adaptive apps are extra in this room, not the test.",
        "Ushahidi wa umahiri haupaswi kutegemea nani aligusa kishikwambi. Programu zinazojirekebisha ni nyongeza katika chumba hiki, si jaribio."
      ),
      note(
        "Try it: storyboard tomorrow's lesson",
        "Jaribu: chora somo la kesho",
        `On one page, three boxes: without any device; with the devices you actually have; the assessment.

- If the third box needs a gadget the first box did not teach, rewrite.
- Write the rotation rule in one sentence.
- Write the group-chat rule: no answer dumps.

Keep the page. You will attach it to the policy draft in unit 10.`,
        `Kwenye ukurasa mmoja, visanduku vitatu: bila kifaa chochote; na vifaa ulivyo navyo kweli; tathmini.

- Kisanduku cha tatu kikihitaji kifaa ambacho cha kwanza hakikufundisha, andika upya.
- Andika kanuni ya mzunguko kwa sentensi moja.
- Andika kanuni ya kundi: hakuna mwagaji wa majibu.

Iweke ukurasa. Utaambatanisha na rasimu ya sera katika somo la 10.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Devices are extra. Assessment matches the common path.
- Next unit: learner data, the Data Protection Act, 2019, and why biometrics stay out of casual apps.`,
        `- Vifaa ni nyongeza. Tathmini inalingana na njia ya pamoja.
- Kitengo kijacho: data ya mwanafunzi, Sheria ya Ulinzi wa Data, 2019, na kwa nini kibayometriki kinakaa nje ya programu za mchezo.`
      ),
    ],
  },
  {
    id: "edu-i-u9",
    titleEn: "Learner data and the Data Protection Act, 2019",
    titleSw: "Data ya mwanafunzi na Sheria ya Ulinzi wa Data, 2019",
    cards: [
      note(
        "The school remains responsible, even when a vendor hosts the app",
        "Shule inabaki kuwajibika, hata muuzaji akiendesha programu",
        `The Data Protection Act, 2019 treats information that can identify a person as personal data. A name plus a mark, a photo, an admission number, a parent's phone, a disability note — each of those is in scope. Children's data needs extra care. Biometric data (fingerprints, face templates, iris) is sensitive. Do not store it in an unvetted app.

In school language:

- The school is usually the data controller: it chose the purpose (attendance, reports, fees).
- The app company is often a processor: it must follow the school's instructions, not invent new uses such as training a commercial model on children's insha.
- Purpose limitation: data collected for fees should not quietly become an "AI behaviour score" on a parent dashboard.
- Minimisation: collect what you need. A revision app does not need a fingerprint.
- Cross-border storage: ask where the servers are. "The cloud" is not an answer.
- Parents and older learners should be able to ask what is held and who can see it.

Teachers: do not paste class lists, named scripts or photos into public chatbots (beginner unit 5). Label scripts by number when you draft feedback (unit 3). If a free tool is not in the school's register of systems, it is unvetted.

The Office of the Data Protection Commissioner is the national regulator. You do not need to quote sections in the staffroom. You need a named person in the school who can answer the questions above before a tablet is rolled out.`,
        `Sheria ya Ulinzi wa Data, 2019, inachukulia taarifa inayoweza kumtambulisha mtu kama data binafsi. Jina pamoja na alama, picha, namba ya kujiunga, simu ya mzazi, maelezo ya ulemavu — kila kimoja kiko ndani ya wigo. Data ya watoto inahitaji uangalifu zaidi. Data ya kibayometriki (alama za vidole, violezo vya uso, iris) ni nyeti. Usihifadhi kwenye programu ambayo haijakaguliwa.

Kwa lugha ya shule:

- Shule kwa kawaida ndiye mdhibiti wa data: ilichagua madhumuni (mahudhurio, ripoti, karo).
- Kampuni ya programu mara nyingi ni msindikaji: lazima ifuate maelekezo ya shule, si kubuni matumizi mapya kama kufunza modeli ya kibiashara kwa insha za watoto.
- Kikomo cha madhumuni: data iliyokusanywa kwa karo isigeuke kimya kuwa "alama ya tabia ya AI" kwenye dashibodi ya mzazi.
- Kupunguza: kusanya unachohitaji. Programu ya marudio haihitaji alama ya kidole.
- Hifadhi kuvuka mpaka: uliza seva ziko wapi. "Wingu" si jibu.
- Wazazi na wanafunzi wakubwa wanapaswa kuweza kuuliza nini kinashikiliwa na nani anaweza kuona.

Walimu: msibandike orodha za darasa, kazi zenye majina au picha kwenye chatbot za hadhara (somo la 5 la mwanzoni). Weka namba kwenye kazi mnaandaapo maoni (somo la 3). Zana ya bure isipokuwa kwenye daftari la mifumo ya shule, haijakaguliwa.

Ofisi ya Kamishna wa Ulinzi wa Data ndiye mdhibiti wa taifa. Huhitaji kunukuu vifungu katika chumba cha walimu. Unahitaji mtu aliye na jina shuleni anayeweza kujibu maswali yaliyo juu kabla kishikwambi hakijatolewa.`
      ),
      reveal([
        {
          termEn: "Data controller",
          termSw: "Mdhibiti wa data",
          defEn: "The organisation that decides why and how personal data is used. Usually the school.",
          defSw: "Taasisi inayoamua kwa nini na jinsi data binafsi inavyotumika. Kwa kawaida shule.",
        },
        {
          termEn: "Processor",
          termSw: "Msindikaji",
          defEn: "A vendor that handles data on the school's instructions, not for its own new purposes.",
          defSw: "Muuzaji anayeshughulikia data kwa maelekezo ya shule, si kwa madhumuni yake mapya.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kikomo cha madhumuni",
          defEn: "Using data only for the reason it was collected, unless a new, lawful reason is explained.",
          defSw: "Kutumia data tu kwa sababu iliyokusanywa, isipokuwa sababu mpya halali imeelezwa.",
        },
        {
          termEn: "Sensitive biometric data",
          termSw: "Data nyeti ya kibayometriki",
          defEn: "Fingerprints, face or iris templates. Not for casual attendance gadgets or revision games.",
          defSw: "Alama za vidole, violezo vya uso au iris. Si kwa vifaa vya mchezo vya mahudhurio au marudio.",
        },
      ]),
      note(
        "Worked example: fees data that became an 'effort score'",
        "Mfano wa kazi: data ya karo iliyokuwa 'alama ya juhudi'",
        `A secondary school in Nakuru already stores payment dates in a vendor app. Mid-year the vendor switches on, without a new letter to parents, an "AI effort score" built from login time, keystrokes and how often fees were late. The score appears on a parent dashboard next to academic comments. Some parents compare children in a WhatsApp group. One learner is humiliated.

What broke:

- Purpose: fees data and login timestamps were collected for administration, not for ranking character.
- Transparency: no new explanation, no opt-out that still allows learning.
- Minimisation: keystrokes were not needed for fees.
- Vendor drift: the processor invented a purpose.

The repair: switch the score off, write to parents, ask the vendor in writing whether children's keystrokes trained a model, and put any analytics through the school's data person and the Board. Academic comments go back to teachers (unit 3).

The lesson is not "never use an app". It is "new AI features are new data uses".`,
        `Shule ya upili Nakuru tayari inahifadhi tarehe za malipo kwenye programu ya muuzaji. Katikati ya mwaka muuzaji anawasha, bila barua mpya kwa wazazi, "alama ya juhudi ya AI" iliyojengwa kutoka muda wa kuingia, bonyezo na mara ngapi karo ilichelewa. Alama inaonekana kwenye dashibodi ya mzazi kando ya maoni ya kitaaluma. Baadhi ya wazazi wanalinganisha watoto kwenye kundi la WhatsApp. Mwanafunzi mmoja anadhalilishwa.

Kilichovunjika:

- Madhumuni: data ya karo na muda wa kuingia zilikusanywa kwa utawala, si kupanga tabia.
- Uwazi: hakuna maelezo mapya, hakuna kujitoa ambako bado kunaruhusu kujifunza.
- Kupunguza: bonyezo hazikuhitajika kwa karo.
- Mchepuko wa muuzaji: msindikaji alibuni madhumuni.

Marekebisho: zima alama, andika kwa wazazi, muulize muuzaji kwa maandishi kama bonyezo za watoto zilifunza modeli, na pitisha uchambuzi wowote kwa mtu wa data wa shule na Bodi. Maoni ya kitaaluma yarudi kwa walimu (somo la 3).

Funzo si "usitumie programu kamwe". Ni "vipengele vipya vya AI ni matumizi mapya ya data".`
      ),
      scenario({
        titleEn: "Scenario: fingerprint for the lunch queue",
        titleSw: "Hali: kidole kwa foleni ya chakula",
        situationEn:
          "A supplier offers a free fingerprint reader 'to stop learners eating twice'. There is no contract on deletion, no alternative for a child with a damaged finger, and the reader is a different company from the school information system.",
        situationSw:
          "Msambazaji anatoa kisoma alama za vidole cha bure 'kuzuia wanafunzi kula mara mbili'. Hakuna mkataba wa kufuta, hakuna mbadala kwa mtoto mwenye kidole kilichoharibika, na kisoma ni kampuni tofauti na mfumo wa taarifa wa shule.",
        questionEn: "What is the lawful, decent response?",
        questionSw: "Jibu halali na la heshima ni lipi?",
        optionsEn: [
          "Install it this week; lunch loss is expensive",
          "Refuse until there is a written necessity test, a non-biometric alternative, a deletion clause, and Board plus parent explanation; use tickets or class lists in the meantime",
          "Install for boarding learners only, without writing to parents",
          "Install and store copies of fingerprints on a teacher's laptop 'just in case'",
        ],
        optionsSw: [
          "Isakinishe wiki hii; hasara ya chakula ni ghali",
          "Kataa hadi kuwe na jaribio la maandishi la ulazima, mbadala usio wa kibayometriki, kifungu cha kufuta, na maelezo ya Bodi pamoja na wazazi; tumia tiketi au orodha za darasa kwa sasa",
          "Isakinishe kwa wanafunzi wa bweni tu, bila kuandika kwa wazazi",
          "Isakinishe na uhifadhi nakala za alama za vidole kwenye kompyuta ndogo ya mwalimu 'kwa tahadhari'",
        ],
        correctIndex: 1,
        hintsEn: [
          "Food loss is real. So is sensitive data on a free gadget with no exit. Tickets are a known control.",
          "Correct. Biometrics need necessity, an alternative, and a contract. Teacher laptops are not a safe store.",
          "Boarding children still have parents and still have rights.",
          "A laptop copy multiplies the leak.",
        ],
        hintsSw: [
          "Hasara ya chakula ni halisi. Kadhalika data nyeti kwenye kifaa cha bure kisicho na njia ya kutoka. Tiketi ni udhibiti unaojulikana.",
          "Sahihi. Kibayometriki kinahitaji ulazima, mbadala, na mkataba. Kompyuta ndogo za walimu si hifadhi salama.",
          "Watoto wa bweni bado wana wazazi na bado wana haki.",
          "Nakala kwenye kompyuta inazidisha uvujaji.",
        ],
        explainEn: "Do not store biometrics in unvetted apps. Free hardware is not a legal basis.",
        explainSw: "Usihifadhi data ya kibayometriki kwenye programu ambazo hazijakaguliwa. Vifaa vya bure si msingi wa kisheria.",
      }),
      quiz(
        "A public chatbot is not in the school's system register. A teacher wants to paste 40 named compositions for comments. You should:",
        "Chatbot ya hadhara haiko kwenye daftari la mifumo ya shule. Mwalimu anataka kubandika insha 40 zenye majina kwa maoni. Unapaswa:",
        [
          "Allow it; comments are for learning",
          "Stop it. Use numbers not names, only approved tools, and keep marks with the teacher",
          "Allow Kiswahili scripts only",
          "Allow if the teacher deletes the chat afterwards",
        ],
        [
          "Ruhusu; maoni ni ya kujifunza",
          "Simamisha. Tumia namba si majina, zana zilizoidhinishwa tu, na alama zibaki kwa mwalimu",
          "Ruhusu kazi za Kiswahili tu",
          "Ruhusu mwalimu akifuta gumzo baadaye",
        ],
        1,
        "Named scripts in an unvetted public tool are a data-protection failure. Deleting your screen does not delete the vendor copy.",
        "Kazi zenye majina kwenye zana ya hadhara ambayo haijakaguliwa ni kushindwa kwa ulinzi wa data. Kufuta skrini hakufuti nakala ya muuzaji."
      ),
      pb({
        titleEn: "Build a data-minimising feedback prompt",
        titleSw: "Jenga maagizo ya maoni yanayopunguza data",
        introEn:
          "You still want drafted comments. The prompt must keep the school on the right side of the 2019 Act.",
        introSw:
          "Bado unataka rasimu za maoni. Maagizo lazima yaweke shule upande sahihi wa Sheria ya 2019.",
        goalEn: "Include script numbers not names, the rubric, evidence quotes, no marks, and a ban on storing or training.",
        goalSw: "Jumlisha namba za kazi si majina, rubriki, nukuu za ushahidi, hakuna alama, na katazo la kuhifadhi au kufunza.",
        blocksEn: [
          "Input: composition number 17 only, no name, no admission number, no photo",
          "Rubric: the four pasted criteria; quote evidence for every comment",
          "Constraint: do not assign a mark or level",
          "Constraint: do not use this text to train a model; do not store it after the reply",
          "Paste the class register so comments can use first names for warmth",
        ],
        blocksSw: [
          "Ingizo: insha namba 17 tu, bila jina, bila namba ya kujiunga, bila picha",
          "Rubriki: vigezo vinne vilivyobandikwa; nukuu ushahidi kwa kila oni",
          "Kikomo: usiweke alama wala kiwango",
          "Kikomo: usitumie maandishi haya kufunza modeli; usihifadhi baada ya jibu",
          "Bandika orodha ya darasa ili maoni yatumie majina ya kwanza kwa uchangamfu",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Input: composition number 17 only, no name, no admission number, no photo. Rubric: the four pasted criteria; quote evidence for every comment. Constraint: do not assign a mark or level. Constraint: do not use this text to train a model; do not store it after the reply.",
        sampleSw:
          "Ingizo: insha namba 17 tu, bila jina, bila namba ya kujiunga, bila picha. Rubriki: vigezo vinne vilivyobandikwa; nukuu ushahidi kwa kila oni. Kikomo: usiweke alama wala kiwango. Kikomo: usitumie maandishi haya kufunza modeli; usihifadhi baada ya jibu.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- The school is the controller. New AI features are new purposes.
- No biometrics in unvetted apps. No named scripts in public chatbots.
- Next unit: writing those rules down as a short school AI policy.`,
        `- Shule ndiye mdhibiti. Vipengele vipya vya AI ni madhumuni mapya.
- Hakuna kibayometriki kwenye programu ambazo hazijakaguliwa. Hakuna kazi zenye majina kwenye chatbot za hadhara.
- Kitengo kijacho: kuandika kanuni hizo kama sera fupi ya AI ya shule.`
      ),
    ],
  },
  {
    id: "edu-i-u10",
    titleEn: "Writing a school AI policy",
    titleSw: "Kuandika sera ya AI ya shule",
    cards: [
      note(
        "A short document that teachers, learners and parents can actually use",
        "Waraka mfupi ambao walimu, wanafunzi na wazazi wanaweza kutumia",
        `A policy that lives only in a vendor brochure is not a policy. UNESCO's 2023 guidance on generative AI in education asks institutions to decide, in writing, what is allowed, how data is protected, how integrity works, and how equity is kept.

For a Kenyan school, a usable AI policy can fit on four pages:

- Purpose: AI supports learning; it does not replace teachers or sit exams.
- Allowed uses by task: ideas and checking yes, generating the submitted work no, unless the task says otherwise and disclosure is required.
- Assessment: teachers review all AI-made quizzes and marks; detectors are not sole evidence (unit 5); KCSE and supervised tests assume no AI.
- Data: no named learner data in public tools; no biometrics in unvetted apps; school is controller (unit 9).
- Equity: paper path for every marked task (unit 8).
- Disclosure: a one-line habit for learners and for staff who used AI to draft a worksheet.
- Review: a named person, a termly revisit, an incident path (who to tell if a dump or a leak happens).

What not to write: a 40-page copy of another country's university statute, or "AI is banned" when staff already use it to draft notes. A ban that is not true trains hiding.

You will specify a fuller institutional policy in the advanced track. Here you draft the staffroom version that can be read in a Monday briefing.`,
        `Sera inayoishi tu kwenye kijitabu cha muuzaji si sera. Mwongozo wa UNESCO wa 2023 kuhusu AI generative katika elimu unaomba taasisi ziamue, kwa maandishi, nini kinaruhusiwa, data inalindwa vipi, uadilifu unafanya kazi vipi, na usawa unahifadhiwa vipi.

Kwa shule ya Kenya, sera ya AI inayoweza kutumika inaweza kuingia kurasa nne:

- Madhumuni: AI inasaidia kujifunza; haichukui nafasi ya walimu wala haikai mitihani.
- Matumizi yanayoruhusiwa kwa kazi: mawazo na ukaguzi ndiyo, kuzalisha kazi inayowasilishwa hapana, isipokuwa kazi inasema vinginevyo na kueleza wazi kunahitajika.
- Tathmini: walimu hukagua majaribio na alama zote zilizotengenezwa na AI; vichunguzi si ushahidi pekee (somo la 5); KCSE na majaribio yanayosimamiwa huchukulia hakuna AI.
- Data: hakuna data ya mwanafunzi yenye jina kwenye zana za hadhara; hakuna kibayometriki kwenye programu ambazo hazijakaguliwa; shule ndiye mdhibiti (somo la 9).
- Usawa: njia ya karatasi kwa kila kazi yenye alama (somo la 8).
- Kueleza wazi: tabia ya mstari mmoja kwa wanafunzi na kwa walimu walioitumia AI kuandaa karatasi.
- Ukaguzi: mtu aliye na jina, kurejea kila muhula, njia ya tukio (waambie nani mwagaji au uvujaji ukitokea).

Usichoandika: nakala ya kurasa 40 ya sheria ya chuo cha nchi nyingine, au "AI imekatazwa" wakati walimu tayari wanaitumia kuandaa maelezo. Marufuku ambayo si kweli inafunza kuficha.

Utabainisha sera kamili zaidi ya taasisi katika mfululizo wa juu. Hapa unaandaa toleo la chumba cha walimu linaloweza kusomwa katika mkutano wa Jumatatu.`
      ),
      reveal([
        {
          termEn: "Usable policy",
          termSw: "Sera inayoweza kutumika",
          defEn: "Short enough to read in a briefing, specific enough to settle an argument.",
          defSw: "Fupi kutosha kusomwa katika mkutano, mahususi kutosha kumaliza mzozo.",
        },
        {
          termEn: "Task-level permission",
          termSw: "Ruhusa kwa kila kazi",
          defEn: "What this assignment allows, written on the task sheet, not only in a distant handbook.",
          defSw: "Kile kazi hii inachoruhusu, kimeandikwa kwenye karatasi ya kazi, si kwenye kitabu cha mbali tu.",
        },
        {
          termEn: "Staff disclosure",
          termSw: "Kueleza wazi kwa walimu",
          defEn: "Teachers also say when a quiz or letter was AI-drafted and then reviewed.",
          defSw: "Walimu nao husema jaribio au barua ilipoandaliwa na AI kisha ikakaguliwa.",
        },
        {
          termEn: "Incident path",
          termSw: "Njia ya tukio",
          defEn: "Who is told, on the same day, if a class dump or a data leak happens.",
          defSw: "Nani anaambiwa, siku ileile, mwagaji wa darasa au uvujaji wa data ukitokea.",
        },
      ]),
      note(
        "Worked example: one page that ended a staff-room split",
        "Mfano wa kazi: ukurasa mmoja uliomaliza mgawanyiko wa chumba cha walimu",
        `A mixed day-and-boarding school in Eldoret had two camps: ban everything, or allow everything. The principal asked two HODs to draft one page, not a booklet.

They wrote seven bullets, tested them on three real tasks (a set-book essay, a maths homework, a lab report), and read them in briefing. The "allow everything" camp lost unsupervised set-book chatbots. The "ban everything" camp lost the ban on spelling checks with disclosure.

They added one line that both had skipped: "Teachers review all AI-made quizzes and marks before use." That line prevented a prefect-generated Kiswahili quiz from circulating as if it were official.

The page went to the Board the same month, with a parent summary of half a page. It will be wrong in places by next year. The named review date is the last Friday of each term. That is a living policy, not a poster.`,
        `Shule mchanganyiko ya mchana na bweni Eldoret ilikuwa na kambi mbili: kataza kila kitu, au ruhusu kila kitu. Mkuu aliwaomba wakuu wawili wa idara waandae ukurasa mmoja, si kijitabu.

Waliandika vifungu saba, wakavipima kwenye kazi tatu halisi (insha ya kitabu teule, kazi ya hisabati, ripoti ya maabara), na wakavisoma katika mkutano. Kambi ya "ruhusu kila kitu" ilipoteza chatbot za vitabu teule zisizosimamiwa. Kambi ya "kataza kila kitu" ilipoteza marufuku ya ukaguzi wa tahajia wenye kueleza wazi.

Waliongeza mstari mmoja ambao wote walikuwa wameruka: "Walimu hukagua majaribio na alama zote zilizotengenezwa na AI kabla ya matumizi." Mstari huo ulizuia jaribio la Kiswahili lililozalishwa na mkuu wa darasa lisizunguke kama rasmi.

Ukurasa ulikwenda kwa Bodi mwezi uleule, na muhtasari wa nusu ukurasa kwa wazazi. Utakuwa na makosa sehemu mwaka ujao. Tarehe ya ukaguzi yenye jina ni Ijumaa ya mwisho ya kila muhula. Hiyo ni sera hai, si bango.`
      ),
      scenario({
        titleEn: "Scenario: paste the university policy",
        titleSw: "Hali: bandika sera ya chuo",
        situationEn:
          "A board member emails a 30-page overseas university AI statute and asks you to 'put our logo on it by Friday' so inspectors see a document.",
        situationSw:
          "Mwanachama wa Bodi anatumia barua pepe sheria ya kurasa 30 ya AI ya chuo cha nje na kukuomba 'weke nembo yetu kufikia Ijumaa' ili wakaguzi waone waraka.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Paste the logo; inspectors want length",
          "Thank them, extract only the principles that match your school, write four pages in plain English and Kiswahili, test on three local tasks, and table that",
          "Refuse all policy to avoid blame",
          "Adopt the statute and ban phones in Form 1 only",
        ],
        optionsSw: [
          "Bandika nembo; wakaguzi wanataka urefu",
          "Washukuru, toa tu kanuni zinazolingana na shule yako, andika kurasa nne kwa Kiingereza na Kiswahili rahisi, pima kwenye kazi tatu za eneo, na uwasilishe hiyo",
          "Kataa sera yoyote ili uepuke lawama",
          "Pitisha sheria na ukataze simu Kidato cha 1 tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A logo on another country's rules will not settle a WhatsApp dump in Form 3.",
          "Correct. Local, short, bilingual, tested. Inspectors can be given the four pages plus a note that the statute was a source, not a copy.",
          "No policy is already a policy of chaos.",
          "A Form 1 phone ban does not answer integrity or data.",
        ],
        hintsSw: [
          "Nembo kwenye kanuni za nchi nyingine haitamaliza mwagaji wa WhatsApp Kidato cha 3.",
          "Sahihi. Ya eneo, fupi, lugha mbili, iliyopimwa. Wakaguzi wanaweza kupewa kurasa nne pamoja na maelezo kwamba sheria ilikuwa chanzo, si nakala.",
          "Kutokuwa na sera tayari ni sera ya vurugu.",
          "Marufuku ya simu Kidato cha 1 hajibu uadilifu wala data.",
        ],
        explainEn: "Policy is a local agreement in readable language, tested on real tasks.",
        explainSw: "Sera ni makubaliano ya eneo kwa lugha inayosomeka, yaliyopimwa kwenye kazi halisi.",
      }),
      quiz(
        "Which line must appear in a school AI policy if teachers generate quizzes with a chatbot?",
        "Mstari upi lazima uonekane katika sera ya AI ya shule walimu wakizalisha majaribio kwa chatbot?",
        [
          "Learners may not use calculators",
          "Teachers review all AI-made quizzes and marks before learners see them",
          "All staff must use the same brand of chatbot",
          "Detectors will assign the final score",
        ],
        [
          "Wanafunzi wasitumie vikokotoo",
          "Walimu hukagua majaribio na alama zote zilizotengenezwa na AI kabla wanafunzi hawajaona",
          "Wafanyakazi wote watumie chapa ileile ya chatbot",
          "Vichunguzi vitaweka alama ya mwisho",
        ],
        1,
        "Review is the accountability line. Brand loyalty and detector verdicts are not substitutes.",
        "Ukaguzi ndio mstari wa uwajibikaji. Uaminifu wa chapa na hukumu za vichunguzi si mbadala."
      ),
      pb({
        titleEn: "Build a prompt that drafts a four-page policy from your facts",
        titleSw: "Jenga maagizo yanayoandaa sera ya kurasa nne kutoka ukweli wako",
        introEn:
          "AI can draft, not decide. Force it to use only the facts you supply, in plain language, bilingual.",
        introSw:
          "AI inaweza kuandaa, si kuamua. Ilazimishe itumie ukweli ulioutoa tu, kwa lugha rahisi, lugha mbili.",
        goalEn: "Supply facts, demand the seven sections, ban invented Kenyan law citations, require a termly review date.",
        goalSw: "Toa ukweli, omba sehemu saba, kataza nukuu za sheria za Kenya zilizobuniwa, taka tarehe ya ukaguzi wa muhula.",
        blocksEn: [
          "Facts: mixed day school, 900 learners, crowded classes, few devices, CBC and KCSE",
          "Sections: purpose, allowed uses, assessment, data (DPA 2019), equity, disclosure, incident path",
          "Rule: use only these facts; if a legal detail is missing write 'to be confirmed with the school data person'",
          "Language: plain English and Kiswahili, four pages, no vendor names",
          "Invent a list of banned apps and a fine schedule from another country",
        ],
        blocksSw: [
          "Ukweli: shule ya mchana mchanganyiko, wanafunzi 900, madarasa yenye msongamano, vifaa vichache, CBC na KCSE",
          "Sehemu: madhumuni, matumizi yanayoruhusiwa, tathmini, data (Sheria ya 2019), usawa, kueleza wazi, njia ya tukio",
          "Kanuni: tumia ukweli huu tu; undani wa kisheria ukikosekana andika 'thibitishwa na mtu wa data wa shule'",
          "Lugha: Kiingereza na Kiswahili rahisi, kurasa nne, bila majina ya wauzaji",
          "Buni orodha ya programu zilizokatazwa na ratiba ya faini kutoka nchi nyingine",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Facts: mixed day school, 900 learners, crowded classes, few devices, CBC and KCSE. Sections: purpose, allowed uses, assessment, data (DPA 2019), equity, disclosure, incident path. Rule: use only these facts; if a legal detail is missing write 'to be confirmed with the school data person'. Language: plain English and Kiswahili, four pages, no vendor names.",
        sampleSw:
          "Ukweli: shule ya mchana mchanganyiko, wanafunzi 900, madarasa yenye msongamano, vifaa vichache, CBC na KCSE. Sehemu: madhumuni, matumizi yanayoruhusiwa, tathmini, data (Sheria ya 2019), usawa, kueleza wazi, njia ya tukio. Kanuni: tumia ukweli huu tu; undani wa kisheria ukikosekana andika 'thibitishwa na mtu wa data wa shule'. Lugha: Kiingereza na Kiswahili rahisi, kurasa nne, bila majina ya wauzaji.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        `- Four readable pages beat a copied statute.
- Put review of AI quizzes, paper paths, disclosure and DPA into the same sheet.
- Next unit: UNESCO's 2023 and 2024 education AI texts, in staffroom language.`,
        `- Kurasa nne zinazosomeka zinashinda sheria iliyonakiliwa.
- Weka ukaguzi wa majaribio ya AI, njia za karatasi, kueleza wazi na Sheria ya Data kwenye karatasi ileile.
- Kitengo kijacho: maandishi ya UNESCO ya 2023 na 2024 kuhusu AI katika elimu, kwa lugha ya chumba cha walimu.`
      ),
    ],
  },
  {
    id: "edu-i-u11",
    titleEn: "UNESCO frameworks in the staffroom",
    titleSw: "Mifumo ya UNESCO katika chumba cha walimu",
    cards: [
      note(
        "What the 2023 guidance and the 2024 competency texts ask of a school",
        "Mwongozo wa 2023 na maandishi ya umahiri ya 2024 yanaomba nini kwa shule",
        `You do not need to teach the acronyms. You need the duties in plain language.

UNESCO's 2023 guidance on generative AI in education and research says, among other things: keep humans in charge; protect data; do not let tools sit assessment alone; write institutional rules; age-appropriate use; watch equity so those without devices are not shut out. That is already this track.

In 2024 UNESCO published AI competency frameworks for teachers and for students. In staffroom language:

- Teachers: a human-centred stance (dignity, agency); ethics (bias, data, integrity); enough technical understanding to not be sold magic; pedagogy (when a tool helps this CBC outcome); and using AI for your own professional learning without handing your class to it.
- Students: the same human-centred and ethics spine, plus enough understanding of how tools guess to check them, and, at older ages, some sense of how systems are designed.

Progression in those frameworks is roughly: understand, apply, create. A Grade 4 child is in understand-and-apply with an adult nearby. A teacher on TPD is not done when they can open a chatbot. They are done when they can refuse a bad use and design a paper path.

Kenya's CBC and TSC professional development can carry this without a new subject called "UNESCO". Attach one competency to an existing TPD slot: this term, every teacher reviews one AI-drafted quiz against the textbook.`,
        `Huhitaji kufundisha vifupisho. Unahitaji wajibu kwa lugha rahisi.

Mwongozo wa UNESCO wa 2023 kuhusu AI generative katika elimu na utafiti unasema, miongoni mwa mambo: binadamu abaki msimamizi; linda data; zana zisikae tathmini peke yake; andika kanuni za taasisi; matumizi yanayofaa umri; angalia usawa ili wasio na vifaa wasifungwe nje. Huo tayari ni mfululizo huu.

Mwaka 2024 UNESCO ilichapisha mifumo ya umahiri wa AI kwa walimu na kwa wanafunzi. Kwa lugha ya chumba cha walimu:

- Walimu: msimamo unaomlenga binadamu (heshima, uwezo wa kuamua); maadili (upendeleo, data, uadilifu); uelewa wa kutosha wa kiufundi ili usiuzwe miujiza; ufundishaji (zana inaposaidia matokeo haya ya CBC); na kutumia AI kwa kujifunza kwako kitaaluma bila kukabidhi darasa.
- Wanafunzi: uti uleule wa binadamu na maadili, pamoja na uelewa wa kutosha wa jinsi zana zinavyokisia ili kuzikagua, na, katika umri mkubwa, uelewa wa jinsi mifumo inavyobuniwa.

Maendeleo katika mifumo hiyo ni takriban: elewa, tumia, buni. Mtoto wa Gredi ya 4 yuko katika elewa-na-tumia akiwa na mtu mzima karibu. Mwalimu kwenye TPD hajakamilika anapoweza kufungua chatbot. Amekamilika anapoweza kukataa matumizi mabaya na kubuni njia ya karatasi.

CBC ya Kenya na maendeleo ya kitaaluma ya TSC yanaweza kubeba hili bila somo jipya liitwalo "UNESCO". Ambatanisha umahiri mmoja kwenye nafasi iliyopo ya TPD: muhula huu, kila mwalimu akague jaribio moja lililoandaliwa na AI dhidi ya kitabu cha kiada.`
      ),
      reveal([
        {
          termEn: "Human-centred stance",
          termSw: "Msimamo unaomlenga binadamu",
          defEn: "The learner's dignity and the teacher's judgement stay above the tool's speed.",
          defSw: "Heshima ya mwanafunzi na uamuzi wa mwalimu vinakaa juu ya kasi ya zana.",
        },
        {
          termEn: "Teacher AI competency",
          termSw: "Umahiri wa AI wa mwalimu",
          defEn: "Ethics, enough technical sense, pedagogy, and professional learning — not prompt tricks alone.",
          defSw: "Maadili, uelewa wa kutosha wa kiufundi, ufundishaji, na kujifunza kitaaluma — si ujanja wa maagizo peke yake.",
        },
        {
          termEn: "Student AI competency",
          termSw: "Umahiri wa AI wa mwanafunzi",
          defEn: "Honesty, checking, privacy, and later some understanding of how systems are built.",
          defSw: "Uaminifu, kukagua, faragha, na baadaye uelewa wa jinsi mifumo inavyojengwa.",
        },
        {
          termEn: "Understand, apply, create",
          termSw: "Elewa, tumia, buni",
          defEn: "A simple progression: know what the tool is, use it under rules, then design a safe classroom use.",
          defSw: "Maendeleo rahisi: jua zana ni nini, itumie chini ya kanuni, kisha buni matumizi salama darasani.",
        },
      ]),
      note(
        "Worked example: one TPD hour that was not a vendor demo",
        "Mfano wa kazi: saa moja ya TPD ambayo haikuwa onyesho la muuzaji",
        `A sub-county TPD slot in Kisii had been a chatbot showcase. This term the HOD of languages redesigns the hour.

- 15 minutes: the 2023 duties on a flip chart — human in charge, data, integrity, equity — in Kiswahili.
- 20 minutes: each teacher brings one AI-drafted quiz. Pairs check keys against the textbook (units 2 and 4). Three keys fail.
- 15 minutes: they write one student competency they will teach this term, at the right age: Grade 5 privacy; Form 2 disclosure; Form 4 "AI will not sit KCSE".
- 10 minutes: they refuse a request to collect fingerprints for a "UNESCO-aligned" attendance app.

No vendor name. No certificates of prompt engineering. The hour produced three safer quizzes and a list of student habits. That is competency as practice.`,
        `Nafasi ya TPD ya kaunti ndogo Kisii ilikuwa onyesho la chatbot. Muhula huu mkuu wa idara ya lugha anabuni saa upya.

- Dakika 15: wajibu wa 2023 kwenye chati — binadamu msimamizi, data, uadilifu, usawa — kwa Kiswahili.
- Dakika 20: kila mwalimu analeta jaribio moja lililoandaliwa na AI. Jozi zinakagua funguo dhidi ya kitabu cha kiada (vitengo vya 2 na 4). Funguo tatu zinashindwa.
- Dakika 15: wanaandika umahiri mmoja wa mwanafunzi watakaofundisha muhula huu, kwa umri sahihi: faragha Gredi ya 5; kueleza wazi Kidato cha 2; "AI haitakaa KCSE" Kidato cha 4.
- Dakika 10: wanakataa ombi la kukusanya alama za vidole kwa programu ya mahudhurio "inayolingana na UNESCO".

Hakuna jina la muuzaji. Hakuna vyeti vya uhandisi wa maagizo. Saa ilizalisha majaribio matatu salama zaidi na orodha ya tabia za wanafunzi. Huo ni umahiri kama mazoezi.`
      ),
      scenario({
        titleEn: "Scenario: the certificate that replaced the class",
        titleSw: "Hali: cheti kilichochukua nafasi ya darasa",
        situationEn:
          "A teacher completes an online 'AI educator' badge in a weekend and asks to be excused from reviewing quizzes, 'because UNESCO says teachers should use AI'. The badge was a vendor marketing page.",
        situationSw:
          "Mwalimu anakamilisha beji ya mtandaoni ya 'mwalimu wa AI' wikendi na anaomba aachiliwe kukagua majaribio, 'kwa sababu UNESCO inasema walimu watumie AI'. Beji ilikuwa ukurasa wa masoko wa muuzaji.",
        questionEn: "What does the 2024 teacher framework actually require here?",
        questionSw: "Mfumo wa mwalimu wa 2024 unahitaji nini hasa hapa?",
        optionsEn: [
          "That badge-holders skip review",
          "That pedagogy and ethics include reviewing outputs and refusing unsafe uses; a marketing badge is not competency",
          "That only teachers without badges may review",
          "That UNESCO requires a named commercial tool",
        ],
        optionsSw: [
          "Kwamba wenye beji waruke ukaguzi",
          "Kwamba ufundishaji na maadili vinajumuisha kukagua matokeo na kukataa matumizi yasiyo salama; beji ya masoko si umahiri",
          "Kwamba walimu wasio na beji tu wanaweza kukagua",
          "Kwamba UNESCO inahitaji zana ya kibiashara yenye jina",
        ],
        correctIndex: 1,
        hintsEn: [
          "Using AI includes checking it. The guidance does not outsource the examiner.",
          "Correct. Competency is judgement in the classroom, not a weekend badge.",
          "Review is every teacher's duty, badge or not.",
          "UNESCO documents are tool-agnostic on purpose.",
        ],
        hintsSw: [
          "Kutumia AI kunajumuisha kuikagua. Mwongozo haukabidhi mtahini.",
          "Sahihi. Umahiri ni uamuzi darasani, si beji ya wikendi.",
          "Ukaguzi ni wajibu wa kila mwalimu, beji au la.",
          "Nyaraka za UNESCO hazibandiki zana kwa makusudi.",
        ],
        explainEn: "Frameworks describe judgement. They do not replace review or name a vendor.",
        explainSw: "Mifumo inaeleza uamuzi. Haichukui nafasi ya ukaguzi wala haitaji muuzaji.",
      }),
      quiz(
        "Which staff-room action best matches 'understand, apply, create' for teachers this term?",
        "Hatua ipi ya chumba cha walimu inalingana zaidi na 'elewa, tumia, buni' kwa walimu muhula huu?",
        [
          "Watching a demo, using an unchecked quiz, calling it innovation",
          "Explaining that AI guesses, using it to draft one quiz they then check, and designing a paper path for learners without phones",
          "Creating a new school subject called UNESCO",
          "Banning discussion of the 2024 texts because they are international",
        ],
        [
          "Kutazama onyesho, kutumia jaribio lisilokaguliwa, kukiita uvumbuzi",
          "Kueleza kwamba AI hukisia, kuitumia kuandaa jaribio moja ambalo kisha wanakagua, na kubuni njia ya karatasi kwa wasio na simu",
          "Kubuni somo jipya liitwalo UNESCO",
          "Kukataza majadiliano ya maandishi ya 2024 kwa sababu ni ya kimataifa",
        ],
        1,
        "Understand the guess, apply with review, create a fair path. That is the progression. A new subject is unnecessary.",
        "Elewa makisio, tumia kwa ukaguzi, buni njia ya haki. Huo ndio maendeleo. Somo jipya si la lazima."
      ),
      note(
        "Try it: one competency on the scheme of work",
        "Jaribu: umahiri mmoja kwenye mpango wa kazi",
        `Open this term's scheme.

- Add one student line at the right age band, in Kiswahili or English: privacy (8–10), disclosure (11–13), KCSE honesty (14–17).
- Add one teacher line for yourself: review one AI draft per week, or none if you generate none.
- Write which 2023 duty it serves: human in charge, data, integrity, or equity.

Bring both lines to the checkpoint unit. Do not paste learner names into a tool while you plan.`,
        `Fungua mpango wa muhula huu.

- Ongeza mstari mmoja wa mwanafunzi kwa kundi sahihi la umri, kwa Kiswahili au Kiingereza: faragha (8–10), kueleza wazi (11–13), uaminifu wa KCSE (14–17).
- Ongeza mstari mmoja wa mwalimu kwako: kagua rasimu moja ya AI kwa wiki, au hakuna usipozalisha.
- Andika wajibu upi wa 2023 unaohudumia: binadamu msimamizi, data, uadilifu, au usawa.

Leta mistari yote miwili kwenye somo la kituo cha kukagua. Usibandike majina ya wanafunzi kwenye zana unapopanga.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- 2023: humans, data, integrity, equity, written rules.
- 2024: teacher and student competencies as judgement, not badges.
- Next unit: checkpoint — a term of honest practice on one page.`,
        `- 2023: binadamu, data, uadilifu, usawa, kanuni za maandishi.
- 2024: umahiri wa mwalimu na mwanafunzi kama uamuzi, si beji.
- Kitengo kijacho: kituo cha kukagua — muhula wa mazoezi ya uaminifu kwenye ukurasa mmoja.`
      ),
    ],
  },
  {
    id: "edu-i-u12",
    titleEn: "Checkpoint: a term of honest practice",
    titleSw: "Kituo cha kukagua: muhula wa mazoezi ya uaminifu",
    cards: [
      note(
        "One page that a head of department can audit",
        "Ukurasa mmoja ambao mkuu wa idara anaweza kukagua",
        `This checkpoint asks you to run the intermediate track as a term protocol, not as a set of slogans.

On one page, dated, with your name and class:

- Adaptive tools: I treated mastery dashboards as estimates (unit 1).
- Assessments: I reviewed every AI-made quiz and key (unit 2).
- Rubrics: I set every mark (unit 3).
- Retrieval: classroom answers came from approved notes or I refused (unit 4).
- Detectors: no sole-score punishment (unit 5).
- Access: a paper path existed for every marked task (unit 6, unit 8).
- Workload: review minutes were on my plan; I cut volume rather than auto-mark (unit 7).
- Data: no named scripts in public tools; no biometrics in unvetted apps (unit 9).
- Policy: I can point to the four-page draft or the hole where it should be (unit 10).
- UNESCO: one student competency and one teacher habit were on the scheme (unit 11).

If a line is not true, write the miss and the repair. A page of ticks with a WhatsApp dump still running is a failed checkpoint.

Heads of department: audit a sample of quizzes, not a sample of speeches.`,
        `Kituo hiki kinakuomba uendeshe mfululizo wa kati kama itifaki ya muhula, si seti ya kauli.

Kwenye ukurasa mmoja, wenye tarehe, jina lako na darasa:

- Zana zinazojirekebisha: nilichukulia dashibodi za umahiri kama makadirio (somo la 1).
- Tathmini: nilikagua kila jaribio na ufunguo vilivyotengenezwa na AI (somo la 2).
- Rubriki: niliweka kila alama (somo la 3).
- Utafutaji: majibu darasani yalitoka maelezo yaliyoidhinishwa au nilikataa (somo la 4).
- Vichunguzi: hakuna adhabu ya alama pekee (somo la 5).
- Ufikiaji: njia ya karatasi ilikuwepo kwa kila kazi yenye alama (masomo ya 6 na 8).
- Mzigo: dakika za ukaguzi zilikuwa kwenye mpango wangu; nilipunguza kiasi badala ya alama za kiotomatiki (somo la 7).
- Data: hakuna kazi zenye majina kwenye zana za hadhara; hakuna kibayometriki kwenye programu ambazo hazijakaguliwa (somo la 9).
- Sera: naweza kuonyesha rasimu ya kurasa nne au pengo linapopaswa kuwa (somo la 10).
- UNESCO: umahiri mmoja wa mwanafunzi na tabia moja ya mwalimu vilikuwa kwenye mpango (somo la 11).

Mstari usiokuwa wa kweli, andika kosa na marekebisho. Ukurasa wa alama za vema na mwagaji wa WhatsApp bado ukiendelea ni kituo kilichoshindwa.

Wakuu wa idara: kaguenini sampuli ya majaribio, si sampuli ya hotuba.`
      ),
      reveal([
        {
          termEn: "Term protocol",
          termSw: "Itifaki ya muhula",
          defEn: "The habits you will actually keep until the next break, written so someone else can check.",
          defSw: "Tabia utakazoshika hadi mapumziko yajayo, zilizoandikwa ili mtu mwingine aweze kukagua.",
        },
        {
          termEn: "Audit sample",
          termSw: "Sampuli ya ukaguzi",
          defEn: "A few real quizzes, scripts and dashboards, not the policy poster.",
          defSw: "Majaribio, kazi na dashibodi chache halisi, si bango la sera.",
        },
        {
          termEn: "Miss and repair",
          termSw: "Kosa na marekebisho",
          defEn: "Naming what broke and what you will stop, redo or tell.",
          defSw: "Kutaja kilichovunjika na utakachosimamisha, kufanya upya au kusema.",
        },
        {
          termEn: "Ready for advanced",
          termSw: "Tayari kwa ngazi ya juu",
          defEn: "If you specify systems, train teachers or buy tools, continue to the advanced track.",
          defSw: "Ukibainisha mifumo, kufunza walimu au kununua zana, endelea kwenye mfululizo wa juu.",
        },
      ]),
      note(
        "Worked example: three ticks that hid a dump",
        "Mfano wa kazi: alama tatu za vema zilizoficha mwagaji",
        `Ms Atieno ticks retrieval, review and equity on her checkpoint page. In the same week, her Form 2 WhatsApp group carries a prefect's AI answer dump for Agriculture. She did not start it. She also did not stop it.

An HOD samples the homework. Eighteen near-identical paragraphs. The checkpoint page is false.

Repair: she tells the class the dump is invalid, sets a new paper task in lesson time, writes to the principal using the incident path in the draft policy, and adds a group-chat rule to the four pages. She changes her tick to a miss.

The advanced track will ask how to specify that policy for a whole school and how to question vendors. This checkpoint only asks that the page match the week.`,
        `Bi. Atieno anaweka vema utafutaji, ukaguzi na usawa kwenye ukurasa wake wa kituo. Katika wiki ileile, kundi la WhatsApp la Kidato cha 2 lina mwagaji wa majibu ya AI wa Kilimo kutoka mkuu wa darasa. Hakuuanza. Pia hakuusimamisha.

Mkuu wa idara anachukua sampuli ya kazi ya nyumbani. Aya kumi na nane zinazofanana. Ukurasa wa kituo ni wa uwongo.

Marekebisho: anaiambia darasa mwagaji si halali, anaweka kazi mpya ya karatasi katika muda wa somo, anaandika kwa mkuu akitumia njia ya tukio kwenye rasimu ya sera, na anaongeza kanuni ya kundi kwenye kurasa nne. Anabadilisha alama ya vema kuwa kosa.

Mfululizo wa juu utauliza jinsi ya kubainisha sera hiyo kwa shule nzima na jinsi ya kuwahoji wauzaji. Kituo hiki vinaomba tu ukurasa ufanane na wiki.`
      ),
      scenario({
        titleEn: "Scenario: the inspector wants the poster",
        titleSw: "Hali: mkaguzi anataka bango",
        situationEn:
          "An inspector asks for evidence of AI literacy. A colleague wants to print the UNESCO logos and this course's titles on a wall chart, without sampling any quiz keys or data practices.",
        situationSw:
          "Mkaguzi anaomba ushahidi wa ustadi wa AI. Mwenzako anataka kuchapisha nembo za UNESCO na vichwa vya kozi hii kwenye chati ya ukuta, bila kuchukua sampuli ya funguo za majaribio au mazoea ya data.",
        questionEn: "What evidence should you table?",
        questionSw: "Ushahidi upi unapaswa kuwasilisha?",
        optionsEn: [
          "The wall chart only; logos impress",
          "The four-page policy, one reviewed quiz with a signed key, the checkpoint page with a miss if any, and a paper-path lesson plan",
          "A vendor certificate",
          "Detector scores for the whole of Form 3",
        ],
        optionsSw: [
          "Chati ya ukuta tu; nembo zinavutia",
          "Sera ya kurasa nne, jaribio moja lililokaguliwa lenye ufunguo uliotiwa saini, ukurasa wa kituo wenye kosa kama lipo, na mpango wa somo wa njia ya karatasi",
          "Cheti cha muuzaji",
          "Alama za kichunguzi kwa Kidato cha 3 kizima",
        ],
        correctIndex: 1,
        hintsEn: [
          "Logos are not practice. Inspectors can be shown practice.",
          "Correct. Documents plus one real reviewed artefact plus honesty about misses.",
          "A vendor certificate is marketing.",
          "Class-wide detector scores are a data and integrity failure.",
        ],
        hintsSw: [
          "Nembo si mazoezi. Wakaguzi wanaweza kuonyeshwa mazoezi.",
          "Sahihi. Nyaraka pamoja na kitu kimoja halisi kilichokaguliwa pamoja na uaminifu kuhusu makosa.",
          "Cheti cha muuzaji ni masoko.",
          "Alama za kichunguzi za darasa zima ni kushindwa kwa data na uadilifu.",
        ],
        explainEn: "Evidence is a reviewed artefact and a policy people use, not a poster of names.",
        explainSw: "Ushahidi ni kitu kilichokaguliwa na sera watu wanayotumia, si bango la majina.",
      }),
      quiz(
        "A checkpoint page is full of ticks, but AI-made quizzes still go to the printer unreviewed. The page is:",
        "Ukurasa wa kituo umejaa alama za vema, lakini majaribio yaliyotengenezwa na AI bado yanaenda kwa printa yasiyokaguliwa. Ukurasa ni:",
        [
          "A success, because intention counts",
          "A failed checkpoint; repair is stopping the printer and reviewing, then changing the ticks",
          "Fine if UNESCO is cited at the bottom",
          "Fine if the quizzes are in Kiswahili",
        ],
        [
          "Mafanikio, kwa sababu nia inahesabiwa",
          "Kituo kilichoshindwa; marekebisho ni kusimamisha printa na kukagua, kisha kubadilisha alama",
          "Sawa UNESCO ikinukuliwa chini",
          "Sawa majaribio yakiwa ya Kiswahili",
        ],
        1,
        "The protocol is the printer queue, not the ticks. Citation and language do not replace review.",
        "Itifaki ni foleni ya printa, si alama za vema. Kunukuu na lugha havichukui nafasi ya ukaguzi."
      ),
      note(
        "Try it: write the page this week",
        "Jaribu: andika ukurasa wiki hii",
        `One side of a foolscap.

- Ten lines from the list above, tick or miss.
- One artefact attached: a quiz key you signed, or a lesson storyboard with a paper path.
- One sentence for the Board: what you need them to decide (policy, devices, or a named data person).

If you train teachers or buy systems, the advanced track is next: grounded tutors, analytics consent, Mkabala wa TPACK, specifying policy, vendor questions, and equity of devices.`,
        `Upande mmoja wa foolscap.

- Mistari kumi kutoka orodha iliyo juu, vema au kosa.
- Kitu kimoja kilichounganishwa: ufunguo wa jaribio uliotia saini, au mchoro wa somo wenye njia ya karatasi.
- Sentensi moja kwa Bodi: wanachohitaji kuamua (sera, vifaa, au mtu wa data aliye na jina).

Ukifunza walimu au kununua mifumo, mfululizo wa juu ndio unaofuata: wakufunzi wenye msingi, idhini ya uchambuzi, Mkabala wa TPACK, kubainisha sera, maswali kwa wauzaji, na usawa wa vifaa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A term protocol is true of the printer queue, the marking pile and the WhatsApp group.
- Repair a miss in writing.
- Advanced track: systems, teacher education, procurement and institutional policy.`,
        `- Itifaki ya muhula ni kweli kwa foleni ya printa, rundo la kusahihisha na kundi la WhatsApp.
- Rekibi kosa kwa maandishi.
- Mfululizo wa juu: mifumo, elimu ya walimu, ununuzi na sera ya taasisi.`
      ),
    ],
  },
];
