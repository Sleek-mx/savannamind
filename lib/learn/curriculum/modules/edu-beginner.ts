import { note, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Schools and learning — beginner (AI-literate learner, parent and teacher).
 * Units 1–5 are a complete mini-course for ages 8–10: what AI is at school,
 * study-partner use, honesty, checking the textbook, and classmates' privacy.
 */
export const eduBeginnerUnits: CurriculumUnit[] = [
  {
    id: "edu-b-u1",
    titleEn: "AI in school and learning",
    titleSw: "Akili bandia shuleni na katika kujifunza",
    cards: [
      note(
        "What AI means for a learner",
        "Akili bandia inamaanisha nini kwa mwanafunzi",
        `Artificial intelligence (AI) is software that has learned patterns from many examples, so it can make a good guess about something new. Foundations covered this in depth. Here we ask one question: what does AI mean for you as a learner?

You may already use AI without calling it that. When your phone suggests the next word in an SMS, that is AI. When you speak Kiswahili into your phone and it types the words, that is AI. When a video app shows you "more like this", that is AI. When you type a question into a chatbot and it writes a full answer, that is AI too.

How does it work? The tool was trained on huge numbers of examples: sentences, pictures, recordings. It found patterns in them. When you ask it something, it does not look up the one true answer. It builds the answer that best fits the patterns it learned. Most of the time that answer is useful. Sometimes it is wrong, and it looks just as confident when it is wrong.

So AI in school is like a very fast helper who has read a lot but has never sat in your class, has not read your teacher's notes, and sometimes makes things up. It can help you learn. It cannot learn for you.`,
        `Akili bandia (AI) ni programu iliyojifunza mifumo kutoka kwa mifano mingi, ili iweze kukisia vizuri kuhusu jambo jipya. Somo la Misingi lilieleza hili kwa kina. Hapa tunauliza swali moja: AI ina maana gani kwako kama mwanafunzi?

Huenda tayari unatumia AI bila kuiita hivyo. Simu yako inapopendekeza neno linalofuata kwenye SMS, hiyo ni AI. Unapoongea Kiswahili kwenye simu nayo ikaandika maneno, hiyo ni AI. Programu ya video inapokuonyesha "zaidi kama hii", hiyo ni AI. Unapoandika swali kwa chatbot nayo ikaandika jibu zima, hiyo pia ni AI.

Inafanyaje kazi? Zana hiyo ilifunzwa kwa mifano mingi sana: sentensi, picha, sauti. Ilipata mifumo ndani yake. Ukiiuliza kitu, haitafuti jibu moja la kweli. Inaunda jibu linalolingana zaidi na mifumo iliyojifunza. Mara nyingi jibu hilo lina manufaa. Wakati mwingine lina kosa, na huonekana na uhakika uleule hata likiwa na kosa.

Kwa hiyo AI shuleni ni kama msaidizi mwepesi sana aliyesoma mengi, lakini hajawahi kukaa darasani mwenu, hajasoma maelezo ya mwalimu wako, na wakati mwingine hubuni mambo. Inaweza kukusaidia kujifunza. Haiwezi kujifunza badala yako.`,
        "/learn/content/edu/learner-classroom.jpg"
      ),
      reveal([
        {
          termEn: "Artificial intelligence (AI)",
          termSw: "Akili bandia (AI)",
          defEn: "Software that learns patterns from examples and uses them to guess, sort, suggest or write.",
          defSw: "Programu inayojifunza mifumo kutoka kwa mifano na kuitumia kukisia, kupanga, kupendekeza au kuandika.",
        },
        {
          termEn: "Chatbot",
          termSw: "Chatbot / roboti ya mazungumzo",
          defEn: "A program you type or speak to, which answers in sentences like a person would.",
          defSw: "Programu unayoiandikia au kuiongelesha, nayo hujibu kwa sentensi kama mtu.",
        },
        {
          termEn: "Pattern",
          termSw: "Mfumo (pattern)",
          defEn: "Something that repeats in many examples, such as 'habari' often being followed by 'yako' or 'za asubuhi'.",
          defSw: "Kitu kinachojirudia katika mifano mingi, kama 'habari' mara nyingi kufuatwa na 'yako' au 'za asubuhi'.",
        },
        {
          termEn: "Tool, not teacher",
          termSw: "Zana, si mwalimu",
          defEn: "AI can support your learning, but your teacher, your textbook and your own thinking stay in charge.",
          defSw: "AI inaweza kusaidia kujifunza kwako, lakini mwalimu, kitabu cha kiada na fikra zako ndivyo vinavyoongoza.",
        },
      ]),
      note(
        "Worked example: one evening, four AI tools",
        "Mfano: jioni moja, zana nne za AI",
        `Imagine Wanjiku, a Grade 6 learner in Nyeri. In one evening she meets AI four times.

- 6:00 pm: she types an SMS to her aunt and the phone suggests "sawa" after "Asante". That is next-word guessing.
- 6:30 pm: her brother in Form 3 uses voice typing to write his Biology notes. It types "photo synthesis" as two words. He fixes it. The tool guessed from sound and got it slightly wrong.
- 7:00 pm: a video app shows Wanjiku three more cartoons after she watched one. It learned what keeps children watching, not what helps them with homework.
- 8:00 pm: her homework asks for 5 examples of living things. She asks a chatbot. It gives 5, but one is "a rock". She knows a rock is not living, so she crosses it out and thinks of her own: a goat.

Notice what Wanjiku did at 8:00 pm. She did not copy. She read, she checked with what she already knew, and she fixed the mistake. That is the habit this whole track builds.`,
        `Fikiria Wanjiku, mwanafunzi wa Gredi ya 6 huko Nyeri. Katika jioni moja anakutana na AI mara nne.

- Saa kumi na mbili jioni: anaandika SMS kwa shangazi yake na simu inapendekeza "sawa" baada ya "Asante". Huo ni ukisiaji wa neno linalofuata.
- Saa kumi na mbili na nusu: kaka yake wa Kidato cha Tatu anatumia kuandika kwa sauti kuandika maelezo ya Biolojia. Inaandika "photo synthesis" kama maneno mawili. Anarekebisha. Zana ilikisia kutokana na sauti ikakosea kidogo.
- Saa moja usiku: programu ya video inamwonyesha Wanjiku katuni tatu zaidi baada ya kutazama moja. Ilijifunza kinachowafanya watoto waendelee kutazama, si kinachowasaidia na kazi ya nyumbani.
- Saa mbili usiku: kazi yake ya nyumbani inaomba mifano 5 ya viumbe hai. Anauliza chatbot. Inatoa mifano 5, lakini mmoja ni "jiwe". Anajua jiwe si kiumbe hai, kwa hiyo analifuta na kufikiria wake mwenyewe: mbuzi.

Angalia alichofanya Wanjiku saa mbili usiku. Hakunakili. Alisoma, akalinganisha na anachojua tayari, na akarekebisha kosa. Hiyo ndiyo tabia ambayo somo hili zima linajenga.`
      ),
      scenario({
        titleEn: "Scenario: the living-things list",
        titleSw: "Hali: orodha ya viumbe hai",
        situationEn:
          "Baraka is in Grade 5. He asks a chatbot for 6 examples of living things for homework. The answer is: cow, maize plant, mosquito, fish, car, mango tree. The homework is due tomorrow.",
        situationSw:
          "Baraka yuko Gredi ya 5. Anaomba chatbot mifano 6 ya viumbe hai kwa kazi ya nyumbani. Jibu ni: ng'ombe, mmea wa mahindi, mbu, samaki, gari, mwembe. Kazi inatakiwa kesho.",
        questionEn: "What should Baraka do?",
        questionSw: "Baraka afanye nini?",
        optionsEn: [
          "Copy all six into his book, because the chatbot answered quickly and clearly",
          "Read each one, ask 'does it grow, feed and breathe?', remove the car and write his own sixth example",
          "Delete the whole answer and never use AI again",
          "Ask the chatbot 'are you sure?' and copy whatever it says next",
        ],
        optionsSw: [
          "Anakili zote sita kwenye daftari, kwa sababu chatbot ilijibu haraka na wazi",
          "Asome kila mfano, aulize 'je, kinakua, kinakula na kupumua?', aondoe gari na aandike mfano wake wa sita",
          "Afute jibu lote na asitumie AI tena",
          "Aiulize chatbot 'una uhakika?' na anakili chochote itakachosema",
        ],
        correctIndex: 1,
        hintsEn: [
          "A quick, clear answer can still contain a mistake. A car does not grow or feed, so copying puts a wrong answer in your book with your name on it.",
          "Correct. You used what you learned in class to test each example, caught the mistake, and added your own thinking.",
          "One mistake does not make a tool useless. The skill is checking, not running away. Five of the six were right.",
          "The chatbot may change its answer or repeat it, but it has no way to 'know' it was wrong. Your own check is what matters.",
        ],
        hintsSw: [
          "Jibu la haraka na wazi bado linaweza kuwa na kosa. Gari halikui wala halili, kwa hiyo kunakili kunaweka jibu la kosa kwenye daftari lenye jina lako.",
          "Sahihi. Ulitumia ulichojifunza darasani kupima kila mfano, ukagundua kosa, na ukaongeza fikra zako.",
          "Kosa moja halifanyi zana isiwe na maana. Ujuzi ni kukagua, si kukimbia. Mifano mitano kati ya sita ilikuwa sahihi.",
          "Chatbot inaweza kubadilisha jibu au kulirudia, lakini haina njia ya 'kujua' kuwa ilikosea. Ukaguzi wako ndio muhimu.",
        ],
        explainEn:
          "AI answers are guesses built from patterns. Your job is to read, test each part against what you know, and fix what is wrong.",
        explainSw:
          "Majibu ya AI ni makisio yaliyojengwa kutokana na mifumo. Kazi yako ni kusoma, kupima kila sehemu kwa unachojua, na kurekebisha penye kosa.",
      }),
      quiz(
        "Why can a chatbot give a wrong answer that sounds completely sure?",
        "Kwa nini chatbot inaweza kutoa jibu la kosa linalosikika kuwa na uhakika kamili?",
        [
          "Because it builds the answer that best fits patterns it learned, and it writes in the same confident style whether it is right or wrong",
          "Because someone typed the wrong answer into it on purpose",
          "Because it only makes mistakes when the internet is slow",
          "Because it checks your textbook first, and textbooks are often wrong",
        ],
        [
          "Kwa sababu inaunda jibu linalolingana zaidi na mifumo iliyojifunza, na huandika kwa mtindo uleule wa uhakika iwe sahihi au ina kosa",
          "Kwa sababu mtu aliandika jibu la kosa ndani yake kwa makusudi",
          "Kwa sababu hukosea tu intaneti ikiwa ya polepole",
          "Kwa sababu hukagua kitabu chako cha kiada kwanza, na vitabu mara nyingi vina makosa",
        ],
        0,
        "A chatbot does not look up one true answer. It predicts words that fit, so confidence in its tone tells you nothing about whether it is correct.",
        "Chatbot haitafuti jibu moja la kweli. Inatabiri maneno yanayofaa, kwa hiyo uhakika katika sauti yake haukuambii chochote kuhusu usahihi wake."
      ),
      note(
        "Try it: spot the AI in your day",
        "Jaribu: tambua AI katika siku yako",
        `Today, without any internet, make a list in your exercise book with two columns: "Tool" and "What it guessed".

- Write every time a phone, radio app, TV or computer seemed to guess something for you or your family: the next word, a song, a video, a translation, a route.
- For each one, write one time it guessed wrong, if you remember one.
- Ask a parent, guardian or older sibling which AI tools they use at work. A teacher, a boda rider and a shopkeeper will give very different answers.

Bring the list to class. You will use it again in the last unit.`,
        `Leo, bila intaneti, tengeneza orodha kwenye daftari lako yenye safu mbili: "Zana" na "Ilikisia nini".

- Andika kila mara simu, programu ya redio, TV au kompyuta ilionekana kukukisia kitu wewe au familia yako: neno linalofuata, wimbo, video, tafsiri, njia ya kufuata.
- Kwa kila moja, andika wakati mmoja ilikosea, kama unakumbuka.
- Muulize mzazi, mlezi au ndugu mkubwa ni zana zipi za AI wanazotumia kazini. Mwalimu, mwendesha boda na mwenye duka watatoa majibu tofauti sana.

Leta orodha darasani. Utaitumia tena katika somo la mwisho.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- AI learns patterns from examples and then guesses. It does not "know" your lesson.
- You already meet AI in phones, voice typing, video apps and chatbots.
- A confident answer can still be wrong, so read and check it.
- Next unit: how to use AI as a study partner that makes you think, not one that thinks for you.`,
        `- AI hujifunza mifumo kutoka kwa mifano kisha hukisia. "Haijui" somo lako.
- Tayari unakutana na AI kwenye simu, kuandika kwa sauti, programu za video na chatbot.
- Jibu lenye uhakika bado linaweza kuwa na kosa, kwa hiyo lisome na ulikague.
- Somo linalofuata: jinsi ya kutumia AI kama mwenzi wa kusoma anayekufanya ufikiri, si anayefikiri badala yako.`
      ),
    ],
  },
  {
    id: "edu-b-u2",
    titleEn: "AI as a study partner",
    titleSw: "AI kama mwenzi wa kusoma",
    cards: [
      note(
        "Explain and quiz me, not do it for me",
        "Nieleze na unijaribu, si unifanyie",
        `A study partner is someone who helps you understand and remember, while you still do the thinking. A good study partner asks you questions, explains a hard idea in a new way, and tells you where you went wrong. A bad study partner just hands you their answers.

AI can be either kind. It depends on what you ask it to do.

Why does this matter so much? Your brain learns by working. When you try to remember something, get it a bit wrong, and then fix it, the memory becomes stronger. This is called retrieval practice: pulling knowledge out of your own head. When AI writes the answer for you, your brain skips that work. The homework is finished, but you learned almost nothing, and in the exam room there is no chatbot.

So there are two ways to use the same tool:

- "Do it for me": "Write my answer on the water cycle." You get an answer. You learn little.
- "Help me learn it": "Explain the water cycle using a sufuria of boiling water, then ask me 3 questions and tell me which ones I got wrong." You do the work. You learn.

The second way takes a few more minutes. It is the only way that helps you on exam day.`,
        `Mwenzi wa kusoma ni mtu anayekusaidia kuelewa na kukumbuka, huku wewe bado ukifanya kazi ya kufikiri. Mwenzi mzuri wa kusoma hukuuliza maswali, hueleza wazo gumu kwa njia mpya, na hukuambia ulipokosea. Mwenzi mbaya hukupa tu majibu yake.

AI inaweza kuwa aina yoyote kati ya hizi mbili. Inategemea unaiomba ifanye nini.

Kwa nini hili ni muhimu sana? Ubongo wako hujifunza kwa kufanya kazi. Unapojaribu kukumbuka kitu, ukakosea kidogo, kisha ukarekebisha, kumbukumbu hiyo huimarika. Hili huitwa mazoezi ya kukumbuka (retrieval practice): kutoa maarifa kutoka kichwani mwako mwenyewe. AI inapokuandikia jibu, ubongo wako unaruka kazi hiyo. Kazi ya nyumbani imekamilika, lakini hujajifunza karibu chochote, na katika chumba cha mtihani hakuna chatbot.

Kwa hiyo kuna njia mbili za kutumia zana ileile:

- "Nifanyie": "Niandikie jibu kuhusu mzunguko wa maji." Unapata jibu. Unajifunza kidogo.
- "Nisaidie kujifunza": "Nieleze mzunguko wa maji ukitumia sufuria ya maji yanayochemka, kisha niulize maswali 3 na uniambie ni yapi nimekosea." Wewe unafanya kazi. Unajifunza.

Njia ya pili huchukua dakika chache zaidi. Ndiyo njia pekee inayokusaidia siku ya mtihani.`
      ),
      reveal([
        {
          termEn: "Study partner",
          termSw: "Mwenzi wa kusoma",
          defEn: "A helper who explains, asks you questions and points out mistakes, while you do the thinking.",
          defSw: "Msaidizi anayeeleza, anakuuliza maswali na kuonyesha makosa, huku wewe ukifanya kazi ya kufikiri.",
        },
        {
          termEn: "Retrieval practice",
          termSw: "Mazoezi ya kukumbuka (retrieval practice)",
          defEn: "Learning by pulling an answer out of your own memory, for example answering questions with your book closed.",
          defSw: "Kujifunza kwa kutoa jibu kutoka kumbukumbu yako mwenyewe, kwa mfano kujibu maswali kitabu kikiwa kimefungwa.",
        },
        {
          termEn: "Explain it another way",
          termSw: "Nieleze kwa njia nyingine",
          defEn: "Asking for a new example or comparison when the textbook explanation did not make sense to you.",
          defSw: "Kuomba mfano mpya au ulinganisho pale ambapo maelezo ya kitabu hayakueleweka kwako.",
        },
        {
          termEn: "Shortcut trap",
          termSw: "Mtego wa njia ya mkato",
          defEn: "When AI finishes the task for you, so the work looks done but nothing stays in your head.",
          defSw: "AI inapokukamilishia kazi, hivyo kazi inaonekana imefanyika lakini hakuna kinachobaki kichwani mwako.",
        },
      ]),
      note(
        "Worked example: two ways to revise fractions",
        "Mfano: njia mbili za kurudia sehemu (fractions)",
        `Imagine two Grade 7 learners in Kakamega, Otieno and Njeri. Both have 10 fraction sums for homework, like 3/4 + 1/2.

Otieno types all 10 sums into a chatbot and copies the answers. It takes 5 minutes. The next day in class, the teacher gives a short test of 5 sums with no phones. Otieno gets 1 out of 5. He never practised finding a common denominator.

Njeri does sum 1 herself. She gets 4/6, which is wrong. She asks the chatbot: "Do not give me the answer. Tell me which step I got wrong in 3/4 + 1/2 = 4/6." It replies that she added the tops and the bottoms, and that she needs the same denominator first: 3/4 + 2/4 = 5/4, which is 1 and 1/4. She checks this with the worked example in her textbook, and it matches. She does the other 9 on her own and asks the chatbot to check only the 2 she was unsure of. It takes 35 minutes. In the test she gets 4 out of 5.

Where can this still go wrong? The chatbot's correction could itself be wrong. That is why Njeri compared it with her textbook before trusting it. You will practise that check in unit 4.`,
        `Fikiria wanafunzi wawili wa Gredi ya 7 huko Kakamega, Otieno na Njeri. Wote wana hesabu 10 za sehemu kama kazi ya nyumbani, kama 3/4 + 1/2.

Otieno anaandika hesabu zote 10 kwenye chatbot na kunakili majibu. Inachukua dakika 5. Siku inayofuata darasani, mwalimu anatoa jaribio fupi la hesabu 5 bila simu. Otieno anapata 1 kati ya 5. Hakuwahi kufanya mazoezi ya kutafuta kiasili cha pamoja (common denominator).

Njeri anafanya hesabu ya 1 mwenyewe. Anapata 4/6, ambalo ni kosa. Anaiuliza chatbot: "Usinipe jibu. Niambie ni hatua ipi nimekosea katika 3/4 + 1/2 = 4/6." Inajibu kuwa alijumlisha nambari za juu na za chini, na kwamba anahitaji kiasili cha pamoja kwanza: 3/4 + 2/4 = 5/4, yaani 1 na 1/4. Analinganisha hili na mfano uliofanywa katika kitabu chake cha kiada, na unalingana. Anafanya hesabu 9 zilizobaki peke yake na kuiomba chatbot ikague 2 tu alizokuwa na shaka nazo. Inachukua dakika 35. Kwenye jaribio anapata 4 kati ya 5.

Je, bado kosa linaweza kutokea wapi hapa? Marekebisho ya chatbot yenyewe yangeweza kuwa na kosa. Ndiyo sababu Njeri aliyalinganisha na kitabu chake kabla ya kuyaamini. Utafanya mazoezi ya ukaguzi huo katika somo la 4.`
      ),
      scenario({
        titleEn: "Scenario: the set book summary",
        titleSw: "Hali: muhtasari wa kitabu teule",
        situationEn:
          "Amina is in Form 3. Her English teacher asked the class to read two chapters of a set book and write down the three most important events. Amina is tired and has a chatbot open on her phone.",
        situationSw:
          "Amina yuko Kidato cha Tatu. Mwalimu wake wa Kiingereza aliiomba darasa lisome sura mbili za kitabu teule na kuandika matukio matatu muhimu zaidi. Amina amechoka na ana chatbot wazi kwenye simu yake.",
        questionEn: "Which use of AI actually helps Amina learn the set book?",
        questionSw: "Ni matumizi yapi ya AI yanamsaidia kweli Amina kujifunza kitabu teule?",
        optionsEn: [
          "Ask the chatbot for a summary of the two chapters and copy its three events",
          "Read the chapters, write her own three events, then ask the chatbot to quiz her with 5 questions about those chapters",
          "Ask the chatbot to write a full essay on the whole book so she is ready for any question",
          "Skip the reading, because the chatbot has probably read the book already",
        ],
        optionsSw: [
          "Aiombe chatbot muhtasari wa sura mbili na anakili matukio yake matatu",
          "Asome sura, aandike matukio yake matatu, kisha aiombe chatbot imjaribu kwa maswali 5 kuhusu sura hizo",
          "Aiombe chatbot iandike insha kamili kuhusu kitabu kizima ili awe tayari kwa swali lolote",
          "Aruke kusoma, kwa sababu huenda chatbot imeshasoma kitabu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A chatbot summary may mix up characters or invent events, and Amina would not notice because she has not read the chapters. She also skips the thinking the teacher asked for.",
          "Correct. Amina does the reading and the choosing, and the chatbot's questions give her retrieval practice. If a question seems wrong, she can check it in the book.",
          "A long essay she did not write teaches her little and may contain invented details. It also moves her further from what the teacher asked.",
          "A chatbot may have seen text about a book, but it often gets details of specific chapters wrong. Only reading gives Amina the real story.",
        ],
        hintsSw: [
          "Muhtasari wa chatbot unaweza kuchanganya wahusika au kubuni matukio, na Amina hangegundua kwa sababu hajasoma sura hizo. Pia anaruka kazi ya kufikiri ambayo mwalimu aliomba.",
          "Sahihi. Amina anafanya kusoma na kuchagua, na maswali ya chatbot yanampa mazoezi ya kukumbuka. Swali likionekana na kosa, anaweza kulikagua kitabuni.",
          "Insha ndefu ambayo hakuiandika inamfundisha kidogo na inaweza kuwa na maelezo ya kubuni. Pia inamweka mbali zaidi na alichoomba mwalimu.",
          "Chatbot huenda iliona maandishi kuhusu kitabu, lakini mara nyingi hukosea maelezo ya sura mahususi. Kusoma pekee ndiko kunakompa Amina hadithi halisi.",
        ],
        explainEn:
          "Use AI after you have done the first round of thinking: to test you, explain a part you missed, or check your work. Not instead of the reading.",
        explainSw:
          "Tumia AI baada ya kufanya awamu ya kwanza ya kufikiri: ikujaribu, ikueleze sehemu uliyokosa, au ikague kazi yako. Si badala ya kusoma.",
      }),
      quiz(
        "Njeri asked: 'Do not give me the answer. Tell me which step I got wrong.' Why is this a strong way to ask?",
        "Njeri aliuliza: 'Usinipe jibu. Niambie ni hatua ipi nimekosea.' Kwa nini hii ni njia nzuri ya kuuliza?",
        [
          "It makes the chatbot faster, because short answers use less data",
          "It keeps Njeri doing the thinking and shows her exactly where her method broke, so she can fix it herself next time",
          "It guarantees the chatbot's reply will be correct",
          "It hides her AI use from the teacher",
        ],
        [
          "Inaifanya chatbot iwe ya haraka zaidi, kwa sababu majibu mafupi hutumia data kidogo",
          "Inamfanya Njeri aendelee kufikiri na inamwonyesha hasa mahali mbinu yake ilipoharibika, ili ajirekebishe mwenyewe wakati ujao",
          "Inahakikisha jibu la chatbot litakuwa sahihi",
          "Inaficha matumizi yake ya AI kwa mwalimu",
        ],
        1,
        "Asking about your own mistake turns AI into feedback on your thinking. It does not make the reply automatically correct, which is why Njeri still checked her textbook.",
        "Kuuliza kuhusu kosa lako mwenyewe kunageuza AI kuwa maoni kuhusu fikra zako. Hakufanyi jibu kuwa sahihi moja kwa moja, ndiyo sababu Njeri bado alikagua kitabu chake."
      ),
      note(
        "Try it: be your own study partner first",
        "Jaribu: kuwa mwenzi wako wa kusoma kwanza",
        `You do not need a phone for the most powerful study habit. Try this tonight with any topic from today's lessons.

- Close your book. On a piece of paper, write everything you remember about the topic in 5 minutes.
- Open the book. Tick what you got right. Circle what you missed or got wrong.
- Write 3 questions about the circled parts, and answer them tomorrow morning with the book closed.

If you do have a chatbot, add one step at the end: ask it to explain one circled idea in a different way, using an example from your home or village. Then check that explanation against your book.`,
        `Huhitaji simu kwa tabia yenye nguvu zaidi ya kusoma. Jaribu hili leo usiku na mada yoyote kutoka masomo ya leo.

- Funga kitabu chako. Kwenye karatasi, andika kila kitu unachokumbuka kuhusu mada hiyo kwa dakika 5.
- Fungua kitabu. Weka alama ya vema kwa ulichopata sahihi. Zungushia duara ulichosahau au kukosea.
- Andika maswali 3 kuhusu sehemu ulizozungushia, na uyajibu kesho asubuhi kitabu kikiwa kimefungwa.

Kama una chatbot, ongeza hatua moja mwishoni: iombe ikueleze wazo moja ulilozungushia kwa njia tofauti, ikitumia mfano kutoka nyumbani au kijijini kwenu. Kisha linganisha maelezo hayo na kitabu chako.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Your brain learns by doing the work: remembering, getting it wrong, fixing it.
- Ask AI to explain, quiz you or find your mistake, not to write your answer.
- Do your own first try before you open the chatbot.
- Next unit: why handing in AI work as your own is cheating, and what the rules mean for you.`,
        `- Ubongo wako hujifunza kwa kufanya kazi: kukumbuka, kukosea, kurekebisha.
- Iombe AI ikueleze, ikujaribu au ikutafutie kosa, si ikuandikie jibu.
- Fanya jaribio lako la kwanza kabla ya kufungua chatbot.
- Somo linalofuata: kwa nini kuwasilisha kazi ya AI kama yako ni udanganyifu, na sheria zina maana gani kwako.`
      ),
    ],
  },
  {
    id: "edu-b-u3",
    titleEn: "Honesty and integrity",
    titleSw: "Uaminifu na uadilifu",
    cards: [
      note(
        "Why AI work handed in as yours is cheating",
        "Kwa nini kazi ya AI ikiwasilishwa kama yako ni udanganyifu",
        `Academic integrity means being honest about your schoolwork: the work you hand in shows what you can really do, and you say clearly where you got help.

When a teacher marks your homework, project or composition, they are measuring your learning. They use it to decide what to teach next, who needs extra help, and what goes into your report. If a chatbot wrote the work and you put your name on it, the teacher is measuring the chatbot, not you. That is cheating, in the same way that copying a classmate's book is cheating. It is also unfair to classmates who did the work themselves.

Cheating also hurts you. If AI writes your Kiswahili composition every week, you never practise building sentences, choosing methali, or organising ideas. Then in a supervised exam, where no AI is allowed, you face the task alone for the first time.

Honest use of AI looks different:

- You follow your school's rules and your teacher's instructions for each task. Some tasks allow AI for ideas or checking; some do not allow it at all.
- In any exam or test, you use only what the invigilator allows. Assume AI is not allowed unless you are clearly told it is.
- When AI helped, you say so, for example: "I used a chatbot to quiz me and to check my spelling."
- The words and ideas you hand in are your own.`,
        `Uadilifu wa kitaaluma (academic integrity) ni kuwa mwaminifu kuhusu kazi yako ya shule: kazi unayowasilisha inaonyesha unachoweza kufanya kweli, na unaeleza wazi ulipopata msaada.

Mwalimu anaposahihisha kazi yako ya nyumbani, mradi au insha, anapima kujifunza kwako. Hutumia matokeo hayo kuamua afundishe nini baadaye, nani anahitaji msaada zaidi, na nini kiingie kwenye ripoti yako. Kama chatbot iliandika kazi nawe ukaweka jina lako, mwalimu anaipima chatbot, si wewe. Huo ni udanganyifu, sawa na kunakili daftari la mwenzako. Pia si haki kwa wenzako waliofanya kazi wenyewe.

Udanganyifu pia unakuumiza wewe. Kama AI inaandika insha yako ya Kiswahili kila wiki, hufanyi mazoezi ya kujenga sentensi, kuchagua methali, au kupanga mawazo. Kisha katika mtihani unaosimamiwa, ambapo AI hairuhusiwi, unakabili kazi hiyo peke yako kwa mara ya kwanza.

Matumizi ya uaminifu ya AI yanaonekana tofauti:

- Unafuata sheria za shule yako na maelekezo ya mwalimu kwa kila kazi. Kazi zingine zinaruhusu AI kwa mawazo au ukaguzi; zingine haziruhusu kabisa.
- Katika mtihani au jaribio lolote, unatumia tu kile msimamizi anachoruhusu. Chukulia kuwa AI hairuhusiwi isipokuwa umeambiwa wazi kuwa inaruhusiwa.
- AI ilipokusaidia, unasema hivyo, kwa mfano: "Nilitumia chatbot kunijaribu na kukagua tahajia yangu."
- Maneno na mawazo unayowasilisha ni yako mwenyewe.`
      ),
      reveal([
        {
          termEn: "Academic integrity",
          termSw: "Uadilifu wa kitaaluma",
          defEn: "Being honest in schoolwork: your work shows your own learning, and you are open about any help.",
          defSw: "Kuwa mwaminifu katika kazi ya shule: kazi yako inaonyesha kujifunza kwako, na uko wazi kuhusu msaada wowote.",
        },
        {
          termEn: "Plagiarism",
          termSw: "Wizi wa kazi ya wengine (plagiarism)",
          defEn: "Handing in someone else's words or ideas, including a chatbot's, as if they were yours.",
          defSw: "Kuwasilisha maneno au mawazo ya mtu mwingine, yakiwemo ya chatbot, kana kwamba ni yako.",
        },
        {
          termEn: "Disclosure",
          termSw: "Kueleza wazi (disclosure)",
          defEn: "Telling your teacher plainly how you used AI on a task, for example 'to quiz me' or 'to check spelling'.",
          defSw: "Kumwambia mwalimu waziwazi jinsi ulivyotumia AI katika kazi, kwa mfano 'kunijaribu' au 'kukagua tahajia'.",
        },
        {
          termEn: "Supervised assessment",
          termSw: "Tathmini inayosimamiwa",
          defEn: "A test or exam watched by a teacher or invigilator, where you may use only what they allow.",
          defSw: "Jaribio au mtihani unaosimamiwa na mwalimu au msimamizi, ambapo unaweza kutumia tu kile wanachoruhusu.",
        },
      ]),
      note(
        "Worked example: a Kiswahili composition, three ways",
        "Mfano: insha ya Kiswahili, kwa njia tatu",
        `Imagine a Grade 8 class in Machakos. The teacher sets an insha of about 250 words titled "Siku Nisiyoisahau". The teacher has said: "You may use AI to find ideas or check spelling, but you must write every sentence yourself and say how you used AI."

Learner A types the title into a chatbot and hands in the 250-word result. The teacher notices it uses words the class has never met and does not sound like Learner A. This breaks the teacher's rule twice: AI wrote the sentences, and there is no disclosure.

Learner B asks a chatbot for 5 ideas for a memorable day. She picks one of her own instead, the day her goat gave birth to twins, and writes the insha herself. At the bottom she writes: "Nilitumia chatbot kupata mawazo, lakini nilichagua tukio langu mwenyewe." This is honest and within the rule.

Learner C writes the insha himself, then asks a chatbot to underline spelling mistakes only. It flags 6 words. He checks 2 of them in his dictionary and finds that one "mistake" was actually correct. He fixes 5 and discloses the check. This is honest, and he learned that AI can be wrong about Kiswahili spelling too.

The same tool, three outcomes. What changed was the learner's choice, not the technology.`,
        `Fikiria darasa la Gredi ya 8 huko Machakos. Mwalimu anatoa insha ya takriban maneno 250 yenye kichwa "Siku Nisiyoisahau". Mwalimu amesema: "Mnaweza kutumia AI kupata mawazo au kukagua tahajia, lakini lazima muandike kila sentensi wenyewe na mseme mlivyotumia AI."

Mwanafunzi A anaandika kichwa kwenye chatbot na kuwasilisha matokeo ya maneno 250. Mwalimu anagundua inatumia maneno ambayo darasa halijawahi kukutana nayo na haisikiki kama Mwanafunzi A. Hii inavunja sheria ya mwalimu mara mbili: AI iliandika sentensi, na hakuna maelezo ya wazi.

Mwanafunzi B anaiomba chatbot mawazo 5 ya siku isiyosahaulika. Anachagua lake mwenyewe badala yake, siku mbuzi wake alipozaa mapacha, na anaandika insha mwenyewe. Chini anaandika: "Nilitumia chatbot kupata mawazo, lakini nilichagua tukio langu mwenyewe." Huu ni uaminifu na uko ndani ya sheria.

Mwanafunzi C anaandika insha mwenyewe, kisha anaiomba chatbot ipigie mstari makosa ya tahajia tu. Inaonyesha maneno 6. Anakagua 2 kati yake katika kamusi yake na kugundua kuwa "kosa" moja kwa kweli lilikuwa sahihi. Anarekebisha 5 na anaeleza wazi ukaguzi huo. Huu ni uaminifu, na amejifunza kuwa AI inaweza kukosea hata tahajia ya Kiswahili.

Zana ileile, matokeo matatu. Kilichobadilika ni uamuzi wa mwanafunzi, si teknolojia.`
      ),
      scenario({
        titleEn: "Scenario: the project due on Monday",
        titleSw: "Hali: mradi unaotakiwa Jumatatu",
        situationEn:
          "Kevin is in Grade 9. His teacher has not said anything about AI for a science project on soil erosion. A friend says: 'Just get a chatbot to write it. Teachers cannot prove anything.'",
        situationSw:
          "Kevin yuko Gredi ya 9. Mwalimu wake hajasema chochote kuhusu AI kwa mradi wa sayansi kuhusu mmomonyoko wa udongo. Rafiki anasema: 'Ipe chatbot iuandike tu. Walimu hawawezi kuthibitisha chochote.'",
        questionEn: "What is the most honest and sensible step?",
        questionSw: "Hatua ya uaminifu na busara zaidi ni ipi?",
        optionsEn: [
          "Use the chatbot to write it, because nobody said AI was banned",
          "Ask the teacher what AI use is allowed for this project, then do the work himself and disclose any AI help",
          "Have the chatbot write it, then change a few words so it sounds like him",
          "Avoid the question and copy a classmate's project instead",
        ],
        optionsSw: [
          "Atumie chatbot kuuandika, kwa sababu hakuna aliyesema AI imekatazwa",
          "Amuulize mwalimu ni matumizi gani ya AI yanaruhusiwa kwa mradi huu, kisha afanye kazi mwenyewe na aeleze wazi msaada wowote wa AI",
          "Aiache chatbot iuandike, kisha abadilishe maneno machache ili usikike kama wake",
          "Aepuke swali na anakili mradi wa mwanafunzi mwenzake badala yake",
        ],
        correctIndex: 1,
        hintsEn: [
          "Silence is not permission. Handing in work a chatbot wrote under your name is still plagiarism, whether or not a rule mentions AI.",
          "Correct. When the rule is unclear, ask. Doing the work yourself and saying how AI helped keeps you honest whatever the answer is.",
          "Changing a few words does not make the ideas or the work yours. It is still plagiarism, just hidden.",
          "Copying a classmate is the same problem with a different source, and it can get your classmate into trouble too.",
        ],
        hintsSw: [
          "Kunyamaza si ruhusa. Kuwasilisha kazi iliyoandikwa na chatbot kwa jina lako bado ni wizi wa kazi, iwe sheria inataja AI au la.",
          "Sahihi. Sheria isipokuwa wazi, uliza. Kufanya kazi mwenyewe na kueleza jinsi AI ilivyosaidia kunakuweka mwaminifu jibu liwe lolote.",
          "Kubadilisha maneno machache hakufanyi mawazo au kazi kuwa yako. Bado ni wizi wa kazi, umefichwa tu.",
          "Kunakili mwenzako ni tatizo lilelile kwa chanzo tofauti, na linaweza kumwingiza mwenzako matatani pia.",
        ],
        explainEn:
          "The test of honesty is simple: does the work show your own learning, and have you been open about any help? When in doubt, ask before you start.",
        explainSw:
          "Kipimo cha uaminifu ni rahisi: je, kazi inaonyesha kujifunza kwako, na umekuwa wazi kuhusu msaada wowote? Ukiwa na shaka, uliza kabla ya kuanza.",
      }),
      quiz(
        "Which of these is honest use of AI on a take-home composition where the teacher allows AI for ideas only?",
        "Ni lipi kati ya haya ni matumizi ya uaminifu ya AI katika insha ya nyumbani ambapo mwalimu anaruhusu AI kwa mawazo tu?",
        [
          "Asking AI for a full draft and then copying it out by hand so it is in your handwriting",
          "Asking AI for a list of ideas, choosing or adapting one, writing every sentence yourself, and noting that you used AI for ideas",
          "Asking AI to rewrite your composition in better Kiswahili and handing that in without saying so",
          "Using AI for the introduction only, since it is a small part",
        ],
        [
          "Kuiomba AI rasimu kamili kisha kuinakili kwa mkono ili iwe kwa mwandiko wako",
          "Kuiomba AI orodha ya mawazo, kuchagua au kurekebisha moja, kuandika kila sentensi mwenyewe, na kueleza kuwa ulitumia AI kwa mawazo",
          "Kuiomba AI iandike upya insha yako kwa Kiswahili bora na kuiwasilisha bila kusema",
          "Kutumia AI kwa utangulizi pekee, kwa kuwa ni sehemu ndogo",
        ],
        1,
        "Handwriting does not make words yours, and 'just a small part' still breaks an ideas-only rule. Staying inside the teacher's rule and disclosing is what makes use honest.",
        "Mwandiko haufanyi maneno kuwa yako, na 'sehemu ndogo tu' bado inavunja sheria ya mawazo pekee. Kukaa ndani ya sheria ya mwalimu na kueleza wazi ndiko kunakofanya matumizi kuwa ya uaminifu."
      ),
      note(
        "Try it: write your disclosure line",
        "Jaribu: andika sentensi yako ya kueleza wazi",
        `Pick one piece of homework from this week. Even if you did not use AI, practise writing the line you would add at the bottom.

- If you used AI: say what for, in one sentence. "I asked a chatbot to quiz me on chapter 4 and to check 3 spellings."
- If you did not use AI: "No AI was used in this work."
- Then ask yourself: would I be comfortable if my teacher saw exactly how I used it? If the answer is no, the use was probably not honest.

Parents and guardians can help here. Ask your child to show you one piece of work and explain, in their own words, how they did it.`,
        `Chagua kazi moja ya nyumbani ya wiki hii. Hata kama hukutumia AI, fanya mazoezi ya kuandika sentensi ambayo ungeongeza chini.

- Kama ulitumia AI: sema ilikuwa kwa ajili ya nini, kwa sentensi moja. "Niliiomba chatbot inijaribu kuhusu sura ya 4 na ikague tahajia za maneno 3."
- Kama hukutumia AI: "Hakuna AI iliyotumika katika kazi hii."
- Kisha jiulize: je, ningejisikia vizuri kama mwalimu wangu angeona hasa jinsi nilivyoitumia? Jibu likiwa hapana, matumizi hayo huenda hayakuwa ya uaminifu.

Wazazi na walezi wanaweza kusaidia hapa. Mwombe mtoto wako akuonyeshe kazi moja na akueleze, kwa maneno yake mwenyewe, jinsi alivyoifanya.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Schoolwork measures your learning. AI-written work under your name is cheating.
- Follow each teacher's rule for each task. In exams, assume no AI unless clearly allowed.
- When AI helped, say how in one plain sentence.
- Next unit: even honest AI help can be wrong, so you will learn to check it against your textbook and teacher.`,
        `- Kazi ya shule inapima kujifunza kwako. Kazi iliyoandikwa na AI kwa jina lako ni udanganyifu.
- Fuata sheria ya kila mwalimu kwa kila kazi. Katika mitihani, chukulia hakuna AI isipokuwa imeruhusiwa wazi.
- AI iliposaidia, sema jinsi ilivyosaidia kwa sentensi moja rahisi.
- Somo linalofuata: hata msaada wa uaminifu wa AI unaweza kuwa na kosa, kwa hiyo utajifunza kuukagua kwa kitabu cha kiada na mwalimu.`
      ),
    ],
  },
  {
    id: "edu-b-u4",
    titleEn: "Check it against your textbook",
    titleSw: "Linganisha na kitabu chako cha kiada",
    cards: [
      note(
        "Your book is the source of truth for class",
        "Kitabu chako ndicho chanzo cha ukweli darasani",
        `A chatbot has read many pages from many countries. It has not sat in your CBC class. It has not opened the KICD-approved textbook on your desk. When it explains a topic, it may mix a Kenyan lesson with a syllabus from somewhere else, or it may invent a fact that sounds like it belongs in your book.

That is why every useful AI answer must be checked against a source your teacher trusts: the textbook, the teacher's notes on the board, or a worksheet the school gave you. Checking is not a lack of trust in the tool. It is how you keep your own book honest.

How to check, in four small steps:

- Read the AI answer slowly. Put a tick beside each sentence that is a fact (a name, a number, a process, a date).
- Open the matching page in your textbook. Look for the same fact.
- If the book agrees, keep the sentence. If the book disagrees, the book wins. Cross the sentence out.
- If the book is silent, do not guess. Ask your teacher before you write it in your homework.

Parents and guardians can sit with a younger learner and do this check together. You do not need a second phone. You need the book and a pencil.`,
        `Chatbot imesoma kurasa nyingi kutoka nchi nyingi. Haijakaa darasani mwenu cha CBC. Haijafungua kitabu cha kiada kilichoidhinishwa na KICD kilicho mezani mwako. Inapoeleza mada, inaweza kuchanganya somo la Kenya na mtaala wa mahali pengine, au inaweza kubuni ukweli unaosikika kama wa kitabu chako.

Ndiyo sababu kila jibu la AI lenye manufaa lazima likaguliwe kwa chanzo ambacho mwalimu wako anaamini: kitabu cha kiada, maelezo ya mwalimu ubaoni, au karatasi ya kazi ambayo shule ilikupa. Kukagua si kukosa imani na zana. Ni jinsi unavyoweka daftari lako kuwa la kweli.

Jinsi ya kukagua, kwa hatua nne ndogo:

- Soma jibu la AI polepole. Weka alama ya vema kando ya kila sentensi iliyo ukweli (jina, namba, mchakato, tarehe).
- Fungua ukurasa unaolingana kwenye kitabu chako cha kiada. Tafuta ukweli uleule.
- Kitabu kikiunga mkono, bakiza sentensi. Kitabu kikipinga, kitabu kinashinda. Piga mstari sentensi.
- Kitabu kikinayamaza, usikisie. Muulize mwalimu kabla ya kuiandika kwenye kazi ya nyumbani.

Wazazi na walezi wanaweza kukaa na mwanafunzi mdogo na kufanya ukaguzi huu pamoja. Huhitaji simu ya pili. Unahitaji kitabu na kalamu.`
      ),
      reveal([
        {
          termEn: "Source of truth",
          termSw: "Chanzo cha ukweli",
          defEn: "The book, notes or worksheet your teacher has approved for this lesson. AI is not that source.",
          defSw: "Kitabu, maelezo au karatasi ya kazi ambayo mwalimu ameidhinisha kwa somo hili. AI si chanzo hicho.",
        },
        {
          termEn: "Curriculum mix-up",
          termSw: "Mchanganyiko wa mitaala",
          defEn: "When an AI answer blends Kenya's CBC with another country's syllabus, so a fact is true somewhere else but not in your class.",
          defSw: "Jibu la AI linapochanganya CBC ya Kenya na mtaala wa nchi nyingine, hivyo ukweli uko mahali pengine lakini si darasani mwako.",
        },
        {
          termEn: "Check then keep",
          termSw: "Kagua kisha bakiza",
          defEn: "The habit of testing each AI sentence against the textbook before it goes into your exercise book.",
          defSw: "Tabia ya kupima kila sentensi ya AI dhidi ya kitabu cha kiada kabla haijaingia kwenye daftari lako.",
        },
        {
          termEn: "Silent page",
          termSw: "Ukurasa kimya",
          defEn: "When the textbook does not mention the AI's claim at all. Silence is not agreement. Ask the teacher.",
          defSw: "Kitabu cha kiada kisipotaja dai la AI kabisa. Kunyamaza si kukubali. Muulize mwalimu.",
        },
      ]),
      note(
        "Worked example: eight provinces or 47 counties?",
        "Mfano: majimbo nane au kaunti 47?",
        `Imagine Mwende, a Grade 5 learner in Embu. Her Social Studies homework asks: "How is Kenya divided for government today?" She asks a chatbot. It answers, confidently: "Kenya has eight provinces. Name them: Central, Coast, Eastern, Nairobi, North Eastern, Nyanza, Rift Valley and Western."

The sentences are clear. The list is neat. It would be easy to copy.

Mwende opens her textbook to the unit on counties. The page says Kenya has 47 counties, and that provinces were used in the past. The chatbot has mixed an old fact with a current question. If she copies, her homework is wrong, and her name is on a wrong answer.

She writes: "Kenya is divided into 47 counties." She adds one sentence of her own from the map in the book: "Embu County is in the former Eastern Province." At the bottom she writes that a chatbot first said eight provinces, and she corrected it using page 41.

Where it still goes wrong: if her book were at school, she might be tempted to trust the neat list. The rule does not change. No book, no keep. She waits and checks tomorrow, or she asks a parent to help find the fact in another approved book.`,
        `Fikiria Mwende, mwanafunzi wa Gredi ya 5 huko Embu. Kazi yake ya nyumbani ya Masomo ya Jamii inauliza: "Kenya imegawanywa vipi kwa serikali leo?" Anauliza chatbot. Inajibu, kwa uhakika: "Kenya ina majimbo nane. Yataje: Kati, Pwani, Mashariki, Nairobi, Kaskazini Mashariki, Nyanza, Bonde la Ufa na Magharibi."

Sentensi ni wazi. Orodha ni safi. Ingekuwa rahisi kunakili.

Mwende anafungua kitabu chake cha kiada kwenye mada ya kaunti. Ukurasa unasema Kenya ina kaunti 47, na kwamba majimbo yalitumiwa zamani. Chatbot imechanganya ukweli wa zamani na swali la sasa. Akinakili, kazi yake ina kosa, na jina lake liko kwenye jibu lisilo sahihi.

Anaandika: "Kenya imegawanywa katika kaunti 47." Anaongeza sentensi moja yake kutoka ramani katika kitabu: "Kaunti ya Embu ilikuwa katika Jimbo la Mashariki." Chini anaandika kuwa chatbot kwanza ilisema majimbo nane, na alirekebisha kwa kutumia ukurasa wa 41.

Bado kosa linaweza kutokea wapi: kitabu kikiwa shuleni, anaweza kujaribiwa kuamini orodha safi. Kanuni haibadiliki. Hakuna kitabu, hakuna kubakiza. Anangoja akague kesho, au anamwomba mzazi amsaidie kutafuta ukweli katika kitabu kingine kilichoidhinishwa.`
      ),
      scenario({
        titleEn: "Scenario: the water-cycle paragraph",
        titleSw: "Hali: aya ya mzunguko wa maji",
        situationEn:
          "Brian is in Grade 4. A chatbot writes: 'Water vapour cools and becomes rain inside a refrigerator. That is condensation. Kenya has twelve months of rainy season.' His Science textbook is on the table, open at the water cycle.",
        situationSw:
          "Brian yuko Gredi ya 4. Chatbot inaandika: 'Mvuke wa maji hupoa na kuwa mvua ndani ya friji. Huo ni mgandamizo. Kenya ina miezi kumi na miwili ya masika.' Kitabu chake cha Sayansi kiko mezani, kimefunguliwa kwenye mzunguko wa maji.",
        questionEn: "What should Brian do with this paragraph?",
        questionSw: "Brian afanye nini na aya hii?",
        optionsEn: [
          "Copy it, because condensation is a real science word and the paragraph looks complete",
          "Keep the idea that cooling vapour can become liquid, drop the refrigerator-as-rain claim and the twelve-month rainy season, and match the rest to the textbook page",
          "Throw the textbook away, because the chatbot is more up to date",
          "Ask the chatbot 'is this in my Grade 4 book?' and copy whatever it says next",
        ],
        optionsSw: [
          "Ainakili, kwa sababu mgandamizo ni neno halisi la sayansi na aya inaonekana kamili",
          "Abakize wazo kwamba mvuke unaopoa unaweza kuwa maji, aondoe dai la mvua ndani ya friji na masika ya miezi kumi na miwili, na alinganishe yaliyobaki na ukurasa wa kitabu",
          "Atupe kitabu, kwa sababu chatbot ni ya kisasa zaidi",
          "Aiulize chatbot 'hii iko kwenye kitabu changu cha Gredi ya 4?' na anakili chochote itakachosema",
        ],
        correctIndex: 1,
        hintsEn: [
          "A real science word can sit next to a wrong example. A refrigerator can show condensation on a cold bottle, but it is not how rain forms, and Kenya does not rain for twelve months everywhere.",
          "Correct. Brian used the book to keep the true idea and drop the invented details. That is check-then-keep.",
          "The textbook is the source of truth for this homework. Newer-sounding sentences are not automatically more correct.",
          "The chatbot cannot see his page. Asking it to confirm itself is not a check.",
        ],
        hintsSw: [
          "Neno halisi la sayansi linaweza kukaa kando ya mfano usio sahihi. Friji inaweza kuonyesha mgandamizo kwenye chupa baridi, lakini si jinsi mvua inavyoundwa, na Kenya hainyeshi miezi kumi na miwili kila mahali.",
          "Sahihi. Brian alitumia kitabu kubakiza wazo la kweli na kuacha maelezo yaliyobuniwa. Huo ni kagua-kisha-bakiza.",
          "Kitabu cha kiada ndicho chanzo cha ukweli kwa kazi hii. Sentensi zinazosikika mpya si sahihi moja kwa moja.",
          "Chatbot haiwezi kuona ukurasa wake. Kuuliza ithibitishe yenyewe si ukaguzi.",
        ],
        explainEn:
          "Check each claim. Keep what the textbook supports. Drop what it contradicts. Ask the teacher about silence.",
        explainSw:
          "Kagua kila dai. Bakiza kile kitabu kinachokubali. Ondoa kile kinachopinga. Muulize mwalimu kuhusu ukimya.",
      }),
      quiz(
        "Why should the textbook win when it disagrees with a chatbot?",
        "Kwa nini kitabu cha kiada kinapaswa kushinda kinapopingana na chatbot?",
        [
          "Because books never contain mistakes",
          "Because this homework is marked against what your class was taught, and the chatbot has not read your lesson",
          "Because teachers dislike new tools",
          "Because chatbots only work in English",
        ],
        [
          "Kwa sababu vitabu havina makosa kamwe",
          "Kwa sababu kazi hii inasahihishwa kulingana na mlivyofundishwa darasani, na chatbot hajasoma somo lenu",
          "Kwa sababu walimu hawapendi zana mpya",
          "Kwa sababu chatbot hufanya kazi kwa Kiingereza tu",
        ],
        1,
        "Your mark is for the CBC lesson you were taught. A confident paragraph from another syllabus is still the wrong answer in your book.",
        "Alama yako ni kwa somo la CBC mlilofundishwa. Aya yenye uhakika kutoka mtaala mwingine bado ni jibu lisilo sahihi kwenye daftari lako."
      ),
      note(
        "Try it: three ticks, three crosses",
        "Jaribu: alama tatu za vema, misalaba mitatu",
        `Tonight, with your textbook open:

- If you have a chatbot, ask it to explain one topic from today's lesson in five sentences. If you have no chatbot, copy five sentences from a revision guide, a poster, or an older sibling's notes.
- Number the sentences 1 to 5.
- For each one, write TICK if the textbook supports it, CROSS if the textbook disagrees, or ASK if the book is silent.
- Bring the page to class. You will need this habit in every later unit.

Parents: sit with a Grade 3 to 5 child for ten minutes and do the ticks together. Ask the child to point at the matching line in the book. That pointing is the skill.`,
        `Leo usiku, kitabu cha kiada kikiwa wazi:

- Kama una chatbot, iombe ieleze mada moja ya somo la leo kwa sentensi tano. Kama huna chatbot, nakili sentensi tano kutoka mwongozo wa marudio, bango, au maelezo ya ndugu mkubwa.
- Weka namba sentensi 1 hadi 5.
- Kwa kila moja, andika VEMA kitabu kikikubali, MSHALABA kitabu kikikataa, au ULIZA kitabu kikiwa kimya.
- Leta ukurasa darasani. Utahitaji tabia hii katika kila somo lijalo.

Wazazi: kaeni na mtoto wa Gredi ya 3 hadi 5 kwa dakika kumi na fanyeni alama pamoja. Mwombe mtoto aonyeshe mstari unaolingana kitabuni. Kuonyesha huko ndiko ujuzi.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- AI has not read your CBC textbook. Your book and your teacher are the source of truth for class.
- Check each fact. Keep, cross out, or ask. Silence is not agreement.
- A neat, confident list can still be from the wrong year or the wrong country.
- Next unit: classmates have privacy too. Names, photos and marks do not belong in a public tool.`,
        `- AI hajasoma kitabu chako cha kiada cha CBC. Kitabu chako na mwalimu wako ndivyo chanzo cha ukweli darasani.
- Kagua kila ukweli. Bakiza, piga mstari, au uliza. Ukimya si kukubali.
- Orodha safi yenye uhakika bado inaweza kuwa ya mwaka usio sahihi au nchi isiyo sahihi.
- Somo linalofuata: wanafunzi wenzako nao wana faragha. Majina, picha na alama si vya kuweka kwenye zana ya hadhara.`
      ),
    ],
  },
  {
    id: "edu-b-u5",
    titleEn: "Your classmates' privacy",
    titleSw: "Faragha ya wanafunzi wenzako",
    cards: [
      note(
        "Their names, photos and marks are not yours to paste",
        "Majina, picha na alama zao si vyako kuweka kwenye zana",
        `In Foundations you learned that what you type into a public chatbot can be stored and seen by people you do not know. At school, that rule has a second person in it: your classmate.

Personal data is any information that can point to a real person: a name, a photo, a voice recording, a home village, a mark, a medical note, a parent's phone number. Kenya's Data Protection Act, 2019 says this kind of information should be collected for a clear reason and kept safely. You do not need to memorise the Act. You need one classroom habit: do not put a classmate's data into a tool the school has not approved.

That includes:

- Pasting the class list so a chatbot can "write birthday cards for everyone".
- Uploading a photo of the class to get a funny caption.
- Typing "explain why Mercy got 12 out of 50 in maths" with her real name.
- Recording a classmate's voice and asking a tool to copy it.

Biometric data is even more sensitive: fingerprints, face scans, iris scans. Do not enrol your finger or face in a game, a homework app or a visitor book unless a parent or guardian and the school have both agreed, in writing, why it is needed and where it will be stored. A free app that "only wants your fingerprint for fun" is not a school system.

If this is your last unit for now, you already have five habits: know that AI guesses, use it as a study partner, stay honest, check the textbook, and protect classmates. Those five are enough for ages 8 to 10 to use AI safely at school.`,
        `Katika Misingi ulijifunza kwamba unachoandika kwenye chatbot ya hadhara kinaweza kuhifadhiwa na kuonekana na watu usiowajua. Shuleni, kanuni hiyo ina mtu wa pili: mwanafunzi mwenzako.

Data binafsi ni taarifa yoyote inayoweza kuelekeza kwa mtu halisi: jina, picha, rekodi ya sauti, kijiji cha nyumbani, alama, maelezo ya kiafya, namba ya simu ya mzazi. Sheria ya Ulinzi wa Data, 2019, inasema taarifa ya namna hii inapaswa kukusanywa kwa sababu wazi na kuhifadhiwa salama. Huhitaji kukariri sheria. Unahitaji tabia moja darasani: usiweke data ya mwenzako kwenye zana ambayo shule haijaidhinisha.

Hiyo inajumuisha:

- Kuweka orodha ya darasa ili chatbot "iandike kadi za siku ya kuzaliwa kwa kila mtu".
- Kupakia picha ya darasa ili upate maelezo ya kuchekesha.
- Kuandika "eleza kwa nini Mercy alipata 12 kati ya 50 katika hisabati" na jina lake halisi.
- Kurekodi sauti ya mwenzako na kuiomba zana iiga.

Data ya kibayometriki ni nyeti zaidi: alama za vidole, skani za uso, skani za iris. Usijiandikishe kidole au uso kwenye mchezo, programu ya kazi ya nyumbani au daftari la wageni isipokuwa mzazi au mlezi na shule wamekubali wote, kwa maandishi, kwa nini inahitajika na itahifadhiwa wapi. Programu ya bure inayotaka "kidole chako kwa mchezo tu" si mfumo wa shule.

Hiki kikiwa somo lako la mwisho kwa sasa, tayari una tabia tano: jua AI hukisia, itumie kama mwenzi wa kusoma, kuwa mwaminifu, kagua kitabu cha kiada, na linda wanafunzi wenzako. Tabia hizo tano zinatosha kwa umri wa miaka 8 hadi 10 kutumia AI salama shuleni.`
      ),
      reveal([
        {
          termEn: "Personal data",
          termSw: "Data binafsi",
          defEn: "Information that can point to a real person, such as a name, photo, mark, home or phone number.",
          defSw: "Taarifa inayoweza kuelekeza kwa mtu halisi, kama jina, picha, alama, nyumbani au namba ya simu.",
        },
        {
          termEn: "Classmate's data",
          termSw: "Data ya mwanafunzi mwenzako",
          defEn: "Personal data about someone in your class. It is theirs. You do not give it away.",
          defSw: "Data binafsi kuhusu mtu darasani mwako. Ni yake. Hupeani.",
        },
        {
          termEn: "Public chatbot",
          termSw: "Chatbot ya hadhara",
          defEn: "A tool on the open internet that may store what you type. Treat it like a noticeboard.",
          defSw: "Zana kwenye intaneti ya wazi ambayo inaweza kuhifadhi unachoandika. Ichukulie kama ubao wa matangazo.",
        },
        {
          termEn: "Biometric data",
          termSw: "Data ya kibayometriki",
          defEn: "A body measurement used to recognise you, such as a fingerprint or a face scan. Do not store it in an unvetted app.",
          defSw: "Kipimo cha mwili kinachotumiwa kukutambua, kama alama ya kidole au skani ya uso. Usihifadhi kwenye programu ambayo haijakaguliwa.",
        },
      ]),
      note(
        "Worked example: birthday cards from the class list",
        "Mfano: kadi za siku ya kuzaliwa kutoka orodha ya darasa",
        `Imagine Otieno, in Grade 5 in Kisii. He wants to make birthday cards for the class. He photographs the class register, which has full names and dates of birth, and pastes the picture into a public chatbot: "Write a kind card for each child."

The tool writes 42 cards. It also now has 42 children's names and birthdays. Otieno cannot see where that copy went. He cannot delete it later. One card uses a nickname that will embarrass a classmate when it is read aloud.

What he should have done:

- Ask the teacher whether cards are allowed, and whether any tool is approved.
- Use first names only, on paper, without dates of birth.
- Write the sentences himself, or ask a chatbot with made-up names: "Write one kind birthday sentence for a Grade 5 classmate, no real names."
- Let the teacher check the wording before anyone receives a card.

The kind idea was good. The class list was the mistake. Kindness does not need a register in a public tool.`,
        `Fikiria Otieno, Gredi ya 5 Kisii. Anataka kutengeneza kadi za siku ya kuzaliwa kwa darasa. Anapiga picha daftari la majina, lenye majina kamili na tarehe za kuzaliwa, na anaweka picha kwenye chatbot ya hadhara: "Andika kadi ya fadhili kwa kila mtoto."

Zana inaandika kadi 42. Sasa pia ina majina na siku za kuzaliwa za watoto 42. Otieno haoni nakala hiyo ilienda wapi. Hwezi kuifuta baadaye. Kadi moja inatumia jina la utani ambalo litamwudhi mwenzake lisomwapo kwa sauti.

Alichopaswa kufanya:

- Amuulize mwalimu kama kadi zinaruhusiwa, na kama zana yoyote imeidhinishwa.
- Atumie majina ya kwanza tu, kwenye karatasi, bila tarehe za kuzaliwa.
- Aandike sentensi mwenyewe, au aombe chatbot kwa majina ya kubuni: "Andika sentensi moja ya fadhili ya siku ya kuzaliwa kwa mwanafunzi mwenza wa Gredi ya 5, bila majina halisi."
- Mwalimu akague maneno kabla ya mtu yeyote kupokea kadi.

Wazo la fadhili lilikuwa zuri. Orodha ya darasa ndiyo kosa. Fadhili haihitaji daftari kwenye zana ya hadhara.`
      ),
      scenario({
        titleEn: "Scenario: the marked test on the phone",
        titleSw: "Hali: jaribio lililosahihishwa kwenye simu",
        situationEn:
          "A friend in Grade 4 photographs Zawadi's marked English test, including her name and the teacher's comments, and wants to paste it into a chatbot: 'Explain every red mark so she can improve.' Zawadi is in the latrine and has not been asked.",
        situationSw:
          "Rafiki wa Gredi ya 4 anapiga picha jaribio la Kiingereza la Zawadi lililosahihishwa, likiwa na jina lake na maoni ya mwalimu, na anataka kuliweka kwenye chatbot: 'Eleza kila alama nyekundu ili aendelee.' Zawadi yuko chooni na hajaulizwa.",
        questionEn: "What should you tell the friend?",
        questionSw: "Umweleze nini rafiki?",
        optionsEn: [
          "Paste it quickly before Zawadi comes back, because the goal is to help her",
          "Do not paste it. Cover the name, ask Zawadi first, and better: copy the questions without her name and marks, or ask the teacher to explain in class",
          "Paste it, then delete the chat, because deletion makes the copy disappear everywhere",
          "Upload her face as well, so the tool knows who to help",
        ],
        optionsSw: [
          "Aliweke haraka Zawadi hajaja, kwa sababu lengo ni kumsaidia",
          "Usiweke. Funika jina, mwulize Zawadi kwanza, na bora zaidi: nakili maswali bila jina na alama zake, au muulize mwalimu aeleze darasani",
          "Aliweke, kisha futa gumzo, kwa sababu kufuta kunafanya nakala itoweke kila mahali",
          "Pakia uso wake pia, ili zana ijue nani wa kusaidia",
        ],
        correctIndex: 1,
        hintsEn: [
          "Helping without consent, with her name and marks in a public tool, is still a privacy harm. The red marks can be discussed without the register details.",
          "Correct. Ask first, hide identity, and prefer the teacher. Improvement does not require a named script in a public chatbot.",
          "Deleting your screen does not delete copies the tool may already have stored.",
          "A face is biometric and personal data. Adding it makes the harm worse.",
        ],
        hintsSw: [
          "Kusaidia bila idhini, na jina na alama zake kwenye zana ya hadhara, bado ni madhara ya faragha. Alama nyekundu zinaweza kujadiliwa bila maelezo ya daftari.",
          "Sahihi. Uliza kwanza, ficha utambulisho, na pendelea mwalimu. Kuendelea hakuhitaji kazi yenye jina kwenye chatbot ya hadhara.",
          "Kufuta skrini yako hakufuti nakala ambazo zana huenda tayari imehifadhi.",
          "Uso ni data ya kibayometriki na data binafsi. Kuongeza kunazidisha madhara.",
        ],
        explainEn:
          "Help with the questions, not with a named, marked script. Ask the person first. Prefer the teacher.",
        explainSw:
          "Saidia kwa maswali, si kwa kazi yenye jina na alama. Muulize mtu kwanza. Pendelea mwalimu.",
      }),
      quiz(
        "Which of these is acceptable to type into a public chatbot?",
        "Ni lipi kati ya haya linakubalika kuandika kwenye chatbot ya hadhara?",
        [
          "The full class list with dates of birth",
          "A maths problem copied without anyone's name: 'A farmer has 24 goats. Half are sold. How many remain?'",
          "A photo of a classmate's face so the tool can 'guess her mood'",
          "Your friend's report-form marks, so the tool can 'rank the class'",
        ],
        [
          "Orodha kamili ya darasa na tarehe za kuzaliwa",
          "Swali la hisabati lililonakiliwa bila jina la mtu: 'Mkulima ana mbuzi 24. Nusu wanauzwa. Wangapi wanabaki?'",
          "Picha ya uso wa mwanafunzi mwenzako ili zana 'ikisie hisia zake'",
          "Alama za fomu ya ripoti ya rafiki yako, ili zana 'ipange darasa'",
        ],
        1,
        "A problem without a person's identity can be a study question. Lists, faces, marks and rankings of real children are personal data.",
        "Swali lisilo na utambulisho wa mtu linaweza kuwa swali la kusoma. Orodha, nyuso, alama na upangaji wa watoto halisi ni data binafsi."
      ),
      note(
        "Try it: circle what is not yours",
        "Jaribu: zungushia visivyo vyako",
        `Take one page from this week's homework or classwork.

- Circle every name, photo, mark, phone number or home detail that belongs to someone else.
- Put a square around anything that is only yours.
- Write one sentence: "I will not type circled things into a public tool."
- If you are 8 to 10 and this is your last lesson in the track, read your five habits aloud to a parent or teacher: AI guesses; I think first; I stay honest; I check the book; I protect my classmates.

Parents: ask your child to show you the circled page. Praise the circling. That is the skill, not a perfect essay.`,
        `Chukua ukurasa mmoja wa kazi ya nyumbani au ya darasani ya wiki hii.

- Zungushia kila jina, picha, alama, namba ya simu au maelezo ya nyumbani yaliyo ya mtu mwingine.
- Weka mraba kwenye chochote kilicho chako tu.
- Andika sentensi moja: "Sitaandika vitu vilivyozungushiwa kwenye zana ya hadhara."
- Kama una miaka 8 hadi 10 na hili ni somo lako la mwisho katika mfululizo, somea mzazi au mwalimu tabia zako tano: AI hukisia; nifikiri kwanza; nina uaminifu; ninakagua kitabu; ninalinda wanafunzi wenzangu.

Wazazi: mwombe mtoto wako akuonyeshe ukurasa uliozungushiwa. Sifu kuzungushia. Huo ndio ujuzi, si insha kamili.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Classmates' names, photos, marks and voices are not material for a public chatbot.
- Kenya's Data Protection Act, 2019 protects personal data, including children's data.
- Do not store fingerprints or face scans in unvetted apps.
- If you continue: next unit is why Kiswahili tools can stumble, even when English looks fine.`,
        `- Majina, picha, alama na sauti za wanafunzi wenzako si vifaa vya chatbot ya hadhara.
- Sheria ya Ulinzi wa Data, 2019, inalinda data binafsi, ikiwemo data ya watoto.
- Usihifadhi alama za vidole au skani za uso kwenye programu ambazo hazijakaguliwa.
- Ukiendelea: somo linalofuata ni kwa nini zana za Kiswahili zinaweza kukwama, hata Kiingereza kikionekana sawa.`
      ),
    ],
  },
  {
    id: "edu-b-u6",
    titleEn: "When Kiswahili tools stumble",
    titleSw: "Zana za Kiswahili zinapokwama",
    cards: [
      note(
        "English-looking confidence is not Kiswahili accuracy",
        "Uhakika unaofanana na Kiingereza si usahihi wa Kiswahili",
        `Many chatbots were trained on far more English than Kiswahili. They can still write Kiswahili that looks smooth. Smooth is not the same as correct.

Kiswahili builds long words from small parts: ni-na-ku-saidia. A tool that guesses the next piece can drop a part, mix up concord (a- against ki-), or pick a word that exists but does not fit the sentence. Methali are a special trap. The tool has seen "Haraka haraka haina baraka" many times, so it drops the proverb into an insha where the meaning does not belong.

Sheng, the mix of Kiswahili, English and other languages that many learners speak in town, is another trap. A tool may "correct" Sheng into stiff textbook Kiswahili that is not what you meant, or it may invent a Sheng word that your class does not use.

So treat Kiswahili output the way you treat any AI answer, only more slowly:

- Read it aloud. If your mouth trips, the sentence may be wrong.
- Check spelling in a kamusi or your class word list, not only in the chatbot.
- Check methali in the book or with your Kiswahili teacher before you keep them.
- Do not let the tool replace your own sentences in an insha. Unit 3 still applies.

A teacher should review any AI-made Kiswahili quiz or mark scheme before it reaches the class. Learners should not be marked against a key the teacher has not read.`,
        `Chatbot nyingi zilifunzwa kwa Kiingereza kingi kuliko Kiswahili. Bado zinaweza kuandika Kiswahili kinachoonekana laini. Laini si sawa na sahihi.

Kiswahili hujenga maneno marefu kutoka sehemu ndogo: ni-na-ku-saidia. Zana inayokisia kipande kinachofuata inaweza kuacha sehemu, kuchanganya upatano (a- dhidi ya ki-), au kuchagua neno lililopo lakini lisilofaa sentensi. Methali ni mtego maalum. Zana imeona "Haraka haraka haina baraka" mara nyingi, kwa hiyo inaiweka kwenye insha ambapo maana haifai.

Sheng, mchanganyiko wa Kiswahili, Kiingereza na lugha nyingine ambao wanafunzi wengi huongea mjini, ni mtego mwingine. Zana inaweza "kurekebisha" Sheng kuwa Kiswahili kigumu cha kitabu ambacho si ulichomaanisha, au inaweza kubuni neno la Sheng ambalo darasa lenu halitumii.

Kwa hiyo chukulia matokeo ya Kiswahili kama unavyochukulia jibu lolote la AI, kwa utulivu zaidi:

- Yasome kwa sauti. Mdomo ukikwama, sentensi huenda ina kosa.
- Kagua tahajia katika kamusi au orodha ya maneno ya darasa, si kwenye chatbot tu.
- Kagua methali kitabuni au kwa mwalimu wa Kiswahili kabla ya kuzibakiza.
- Usiache zana ichukue nafasi ya sentensi zako katika insha. Somo la 3 bado linafaa.

Mwalimu anapaswa kukagua jaribio au ufunguo wa alama wa Kiswahili uliotengenezwa na AI kabla haujafika darasani. Wanafunzi wasisahihishwe kwa ufunguo ambao mwalimu hajasoma.`
      ),
      reveal([
        {
          termEn: "Concord",
          termSw: "Upatano",
          defEn: "The agreement of prefixes in Kiswahili, such as m-tu a-na-soma versus ki-tabu ki-na-somwa.",
          defSw: "Ulingano wa viambishi katika Kiswahili, kama m-tu a-na-soma dhidi ya ki-tabu ki-na-somwa.",
        },
        {
          termEn: "Methali trap",
          termSw: "Mtego wa methali",
          defEn: "When a tool inserts a famous proverb because it is common, not because it fits your story.",
          defSw: "Zana inapoingiza methali maarufu kwa sababu ni ya kawaida, si kwa sababu inafaa hadithi yako.",
        },
        {
          termEn: "Sheng",
          termSw: "Sheng",
          defEn: "A changing mix of Kiswahili, English and other languages used especially in towns. Tools often mishandle it.",
          defSw: "Mchanganyiko unaobadilika wa Kiswahili, Kiingereza na lugha nyingine unaotumika hasa mjini. Zana mara nyingi huzikosea.",
        },
        {
          termEn: "Kamusi check",
          termSw: "Ukaguzi wa kamusi",
          defEn: "Looking up a word in a dictionary or class list instead of trusting the chatbot's spelling.",
          defSw: "Kutafuta neno katika kamusi au orodha ya darasa badala ya kuamini tahajia ya chatbot.",
        },
      ]),
      note(
        "Worked example: an insha that sounds 'too smart'",
        "Mfano: insha inayosikika 'werevu mno'",
        `Imagine Aisha, in Grade 8 in Mombasa. She drafts her own insha, "Siku Nisiyoisahau", about the day the ferry was late. She then asks a chatbot to "improve the Kiswahili".

The returned text is longer. It adds "Haraka haraka haina baraka" in a paragraph about waiting, where the proverb fights the story: she was not rushing, the ferry was late. It changes "mvulana" agreement in one sentence. It replaces a word she learned in class with a rare word her teacher has never taught. It also "corrects" a Sheng greeting she had quoted from her brother, and the quote no longer sounds like him.

Aisha prints the two versions side by side. She keeps her own structure. She accepts two spelling fixes she confirms in the kamusi. She throws away the proverb and the rare word. She discloses: "Nilitumia chatbot kukagua tahajia; methali na maneno magumu niliyaacha."

The lesson: 'better Kiswahili' from a tool can be fluent and still wrong for your class. Your teacher marks the language you were taught, not a university essay.`,
        `Fikiria Aisha, Gredi ya 8 Mombasa. Anaandika rasimu yake ya insha, "Siku Nisiyoisahau", kuhusu siku feri ilipochelewa. Kisha anaiomba chatbot "iboreshe Kiswahili".

Maandishi yaliyorudi ni marefu. Yanaongeza "Haraka haraka haina baraka" katika aya kuhusu kusubiri, ambapo methali inapigana na hadithi: yeye hakuwa na haraka, feri ndiyo ilichelewa. Yanabadilisha upatano wa "mvulana" katika sentensi moja. Yanabadilisha neno alilojifunza darasani na neno adimu ambalo mwalimu hajawahi kufundisha. Pia "yanarekebisha" salamu ya Sheng aliyoinukuu kutoka kwa kaka yake, na nukuu haionekani tena kama yake.

Aisha anachapisha matoleo mawili kando kando. Anabaki na mpangilio wake. Anakubali marekebisho mawili ya tahajia anayothibitisha kamusini. Anatupa methali na neno adimu. Anaeleza wazi: "Nilitumia chatbot kukagua tahajia; methali na maneno magumu niliyaacha."

Funzo: 'Kiswahili bora' kutoka zana kinaweza kuwa laini na bado si sahihi kwa darasa lako. Mwalimu anasahihisha lugha mlivyofundishwa, si insha ya chuo.`
      ),
      scenario({
        titleEn: "Scenario: the quiz the teacher did not read",
        titleSw: "Hali: jaribio ambalo mwalimu hajasoma",
        situationEn:
          "A prefect generates a 10-question Kiswahili quiz on noun classes with a chatbot and shares it in the class WhatsApp group 'for revision'. Two answers in the key mark correct concord as wrong. The teacher has not seen the quiz.",
        situationSw:
          "Mkuu wa darasa anatengeneza jaribio la maswali 10 ya Kiswahili kuhusu ngeli kwa chatbot na kulisambaza kwenye kundi la WhatsApp la darasa 'kwa marudio'. Majibu mawili kwenye ufunguo yanaweka upatano sahihi kama kosa. Mwalimu hajaliona jaribio.",
        questionEn: "What should a learner in that group do?",
        questionSw: "Mwanafunzi katika kundi hilo afanye nini?",
        optionsEn: [
          "Memorise the key, because a digital quiz must be right",
          "Use the questions for practice, check doubtful items in the textbook, and show the teacher the two suspect keys before anyone treats the marks as real",
          "Forward the quiz to other classes so more people can benefit",
          "Ask the same chatbot to mark the key, then trust the second answer",
        ],
        optionsSw: [
          "Akariri ufunguo, kwa sababu jaribio la kidijitali lazima liwe sahihi",
          "Atumie maswali kwa mazoezi, akague vitu vyenye shaka kwenye kitabu cha kiada, na amwonyeshe mwalimu funguo mbili zenye shaka kabla ya mtu yeyote kuchukulia alama kuwa halisi",
          "Apeleke jaribio kwa madarasa mengine ili watu wengi wanufaike",
          "Aiombe chatbot ileile isahihishe ufunguo, kisha aamini jibu la pili",
        ],
        correctIndex: 1,
        hintsEn: [
          "Digital is not a guarantee. A wrong key trains the class to fail the real test.",
          "Correct. Practice is useful; unverified marks are not. Teachers review AI-made quizzes before they count.",
          "Spreading an unchecked key spreads the error.",
          "A model checking itself often repeats the same mistake.",
        ],
        hintsSw: [
          "Kidijitali si dhamana. Ufunguo usio sahihi unafundisha darasa kushindwa jaribio halisi.",
          "Sahihi. Mazoezi yana manufaa; alama zisizokaguliwa si. Walimu hukagua majaribio yaliyotengenezwa na AI kabla hayajahesabiwa.",
          "Kusambaza ufunguo usiokaguliwa ni kusambaza kosa.",
          "Modeli inayojikagua mara nyingi hurudia kosa lilelile.",
        ],
        explainEn:
          "AI-made Kiswahili quizzes need a teacher’s eye. Use them as drafts for practice, never as unofficial exams.",
        explainSw:
          "Majaribio ya Kiswahili yaliyotengenezwa na AI yanahitaji jicho la mwalimu. Yatumie kama rasimu za mazoezi, si kama mitihani isiyo rasmi.",
      }),
      quiz(
        "A chatbot 'improves' your insha and adds a methali you did not choose. What is the honest next step?",
        "Chatbot 'inaboresha' insha yako na inaongeza methali ambayo hukuchagua. Hatua ya uaminifu inayofuata ni ipi?",
        [
          "Keep the methali, because famous proverbs always raise the mark",
          "Read whether the methali fits your story, check it with book or teacher, and keep it only if it is yours to say",
          "Add two more methali from the chatbot to look even stronger",
          "Submit the chatbot version without reading it, to save time",
        ],
        [
          "Bakiza methali, kwa sababu methali maarufu daima hupandisha alama",
          "Soma kama methali inafaa hadithi yako, ikague kwa kitabu au mwalimu, na uibakize tu kama ni yako kusema",
          "Ongeza methali mbili zaidi kutoka chatbot ili ionekane imara zaidi",
          "Wasilisha toleo la chatbot bila kulisoma, ili uokoe muda",
        ],
        1,
        "A proverb is a claim about your meaning. If you cannot explain why it is there, it is not your writing.",
        "Methali ni dai kuhusu maana yako. Usipoweza kueleza kwa nini iko, si uandishi wako."
      ),
      note(
        "Try it: five words, two columns",
        "Jaribu: maneno matano, safu mbili",
        `You do not need a chatbot for the first half.

- Pick five Kiswahili words from this week's lesson.
- Column A: copy the spelling from your kamusi or class list.
- Column B: if you have a tool, ask it to use each word in a sentence. If you do not, ask an older sibling or neighbour.
- Mark any sentence where concord, meaning or a methali looks wrong.
- Bring one marked sentence to the Kiswahili teacher.

If you speak Sheng at home, write one Sheng sentence and one standard Kiswahili sentence for the same idea. Notice what a tool might flatten.`,
        `Huhitaji chatbot kwa nusu ya kwanza.

- Chagua maneno matano ya Kiswahili kutoka somo la wiki hii.
- Safu A: nakili tahajia kutoka kamusi au orodha ya darasa.
- Safu B: kama una zana, iombe itumie kila neno katika sentensi. Kama huna, muulize ndugu mkubwa au jirani.
- Weka alama kwenye sentensi yoyote ambapo upatano, maana au methali inaonekana na kosa.
- Leta sentensi moja yenye alama kwa mwalimu wa Kiswahili.

Ukiongea Sheng nyumbani, andika sentensi moja ya Sheng na moja ya Kiswahili sanifu kwa wazo lilelile. Angalia kile zana ingeweza kulainisha kimakosa.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Kiswahili tools can be fluent and still wrong: concord, methali, Sheng.
- Check with kamusi, book and teacher. Teachers review AI-made quizzes before they count.
- Next unit: how parents and guardians can help without doing the work for you.`,
        `- Zana za Kiswahili zinaweza kuwa laini na bado na kosa: upatano, methali, Sheng.
- Kagua kwa kamusi, kitabu na mwalimu. Walimu hukagua majaribio yaliyotengenezwa na AI kabla hayajahesabiwa.
- Somo linalofuata: jinsi wazazi na walezi wanavyoweza kusaidia bila kukufanyia kazi.`
      ),
    ],
  },
  {
    id: "edu-b-u7",
    titleEn: "Parents and guardians",
    titleSw: "Wazazi na walezi",
    cards: [
      note(
        "Help that still leaves the thinking to the learner",
        "Msaada unaobakiza kazi ya kufikiri kwa mwanafunzi",
        `A parent or guardian is not a second chatbot. Their job is to keep you safe, honest and on time, not to produce the homework.

Useful help looks like this:

- Sit nearby while you use the family phone, the way you would sit nearby while you cook with a hot sufuria.
- Ask you to explain the task in your own words before any tool is opened.
- Help you check the textbook (unit 4) and hide classmates' names (unit 5).
- Ask, "Would you be comfortable if your teacher saw exactly how you used this?"
- Stop the session if the task is an exam-style test the teacher said must be done alone.

Unhelpful help looks like this:

- Generating the whole project at 10 pm because tomorrow is the deadline.
- Typing the prompt yourself so the work 'sounds grown-up'.
- Paying a cyber cafe to print AI essays with the child's name.
- Sharing the child's marks, photo or fingerprint with a free app a neighbour recommended.

UNESCO's 2023 guidance on generative AI in education is plain on this point: AI should support learning, not replace the learner, and use should be age-appropriate. A Grade 4 child needs a person in the room. A Form 4 student still needs a person who will not sit the KCSE for them.

If you are the learner, you can invite this help: "Tafadhali kaa nami. Mimi nitaandika. Wewe nisaidie kukagua kitabu." If you are the parent, that sentence is the whole method.`,
        `Mzazi au mlezi si chatbot ya pili. Kazi yake ni kukulinda, kukuweka mwaminifu na kwa wakati, si kuzalisha kazi ya nyumbani.

Msaada wenye manufaa unaonekana hivi:

- Kukaa karibu unapotumia simu ya familia, kama unavyokaa karibu unapopika kwa sufuria moto.
- Kukuuliza ueleze kazi kwa maneno yako kabla zana yoyote haijafunguliwa.
- Kukusaidia kukagua kitabu cha kiada (somo la 4) na kuficha majina ya wanafunzi wenzako (somo la 5).
- Kuuliza, "Je, ungekuwa huru kama mwalimu angeona hasa jinsi ulivyotumia hii?"
- Kusimamisha kipindi kama kazi ni ya aina ya mtihani ambayo mwalimu alisema ifanywe peke yake.

Msaada usiossaidia unaonekana hivi:

- Kuzalisha mradi mzima saa nne usiku kwa sababu kesho ni tarehe ya mwisho.
- Kuandika prompt mwenyewe ili kazi 'isikike ya watu wazima'.
- Kulipa cyber cafe ichapishe insha za AI zenye jina la mtoto.
- Kushiriki alama, picha au alama ya kidole ya mtoto na programu ya bure aliyopendekezwa na jirani.

Mwongozo wa UNESCO wa 2023 kuhusu AI generative katika elimu uko wazi: AI inapaswa kusaidia kujifunza, si kuchukua nafasi ya mwanafunzi, na matumizi yawe yanayofaa umri. Mtoto wa Gredi ya 4 anahitaji mtu chumbani. Mwanafunzi wa Kidato cha 4 bado anahitaji mtu ambaye hatakaa KCSE badala yake.

Ukiwa mwanafunzi, unaweza kuualika msaada huu: "Tafadhali kaa nami. Mimi nitaandika. Wewe nisaidie kukagua kitabu." Ukiwa mzazi, sentensi hiyo ndiyo mbinu yote.`
      ),
      reveal([
        {
          termEn: "Guardian",
          termSw: "Mlezi",
          defEn: "The adult who is responsible for you at home if that person is not your parent.",
          defSw: "Mtu mzima anayewajibika kwako nyumbani kama si mzazi wako.",
        },
        {
          termEn: "Homework help",
          termSw: "Msaada wa kazi ya nyumbani",
          defEn: "Sitting with you, asking questions, checking the book. You still write the sentences.",
          defSw: "Kukaa nawe, kuuliza maswali, kukagua kitabu. Wewe bado unaandika sentensi.",
        },
        {
          termEn: "Homework done for you",
          termSw: "Kazi iliyokufanyiwa",
          defEn: "When an adult or a tool produces the work that will carry your name. That is not help.",
          defSw: "Mtu mzima au zana inapozalisha kazi itakayobeba jina lako. Huo si msaada.",
        },
        {
          termEn: "Age-appropriate use",
          termSw: "Matumizi yanayofaa umri",
          defEn: "Younger learners use AI only with an adult nearby, on small tasks, never for tests.",
          defSw: "Wanafunzi wadogo hutumia AI wakiwa na mtu mzima karibu, kwa kazi ndogo, kamwe si kwa majaribio.",
        },
      ]),
      note(
        "Worked example: Mama Achieng and the Grade 5 map",
        "Mfano: Mama Achieng na ramani ya Gredi ya 5",
        `Mama Achieng in Kisumu has one smartphone. At 8 pm she gives it to her son, Kevin, for 20 minutes. His task is a CBC map: label five counties that border Lake Victoria.

She does not open the chatbot first. She asks Kevin to name any three counties he already knows. He names Kisumu, Siaya and Homa Bay. She then lets him ask the chatbot: "List counties that touch Lake Victoria. Do not write an essay." It lists eight names. Two are wrong: it includes Nakuru, which does not touch the lake.

Together they open the atlas in his bag. They tick five that match the map, including his three. They cross Nakuru. Kevin writes the five names in his own handwriting. Mama writes nothing in his book. At the bottom Kevin writes: "Nilitumia chatbot kupata orodha; ramani ilithibitisha tano."

Time used: 20 minutes. Learning kept: Kevin still has to find the counties on a map in class tomorrow. Help given: an adult who made the check happen.

If Mama had pasted the chatbot list into his book while he washed utensils, the map would be 'finished' and Kevin would fail the board question.`,
        `Mama Achieng Kisumu ana simu moja ya kisasa. Saa mbili usiku anampa mwanawe, Kevin, kwa dakika 20. Kazi yake ni ramani ya CBC: weka majina ya kaunti tano zinazopakana na Ziwa Victoria.

Hafungui chatbot kwanza. Anamwomba Kevin ataje kaunti zozote tatu anazozijua. Anataja Kisumu, Siaya na Homa Bay. Kisha anamwacha aulize chatbot: "Orodhesha kaunti zinazogusa Ziwa Victoria. Usiandike insha." Inaorodhesha majina nane. Mawili yana kosa: inajumuisha Nakuru, ambayo haigusi ziwa.

Pamoja wanafungua atlas kwenye begi lake. Wanaweka vema tano zinazolingana na ramani, zikiwemo tatu zake. Wanapiga mstari Nakuru. Kevin anaandika majina matano kwa mwandiko wake. Mama haandiki chochote kwenye daftari lake. Chini Kevin anaandika: "Nilitumia chatbot kupata orodha; ramani ilithibitisha tano."

Muda: dakika 20. Kujifunza kulikobaki: Kevin bado atatafuta kaunti ubaoni kesho. Msaada: mtu mzima aliyefanya ukaguzi ufanyike.

Kama Mama angeweka orodha ya chatbot kwenye daftari Kevin akiosha vyombo, ramani ingekuwa 'imekamilika' na Kevin angeshindwa swali la ubaoni.`
      ),
      scenario({
        titleEn: "Scenario: 'I will just generate it'",
        titleSw: "Hali: 'Nitaizalisha tu'",
        situationEn:
          "It is 9:30 pm. A Form 2 project on soil erosion is due at 7:30 am. A guardian offers: 'Give me the heading. I will generate the whole project on the phone so you can sleep.'",
        situationSw:
          "Ni saa tatu na nusu usiku. Mradi wa Kidato cha 2 kuhusu mmomonyoko wa udongo unatakiwa saa moja na nusu asubuhi. Mlezi anasema: 'Nipe kichwa. Nitazalisha mradi mzima kwenye simu ili ulale.'",
        questionEn: "What is the honest choice?",
        questionSw: "Chaguo la uaminifu ni lipi?",
        optionsEn: [
          "Accept, because sleep matters and the teacher will never know",
          "Decline the generated project. Sleep. In the morning tell the teacher the work is late and ask what can still be handed in that is the learner's own",
          "Accept, then rewrite three sentences so it 'counts as yours'",
          "Accept, and add a disclosure line that says the learner wrote it",
        ],
        optionsSw: [
          "Kubali, kwa sababu usingizi ni muhimu na mwalimu hatajua",
          "Kataa mradi uliozalishwa. Lala. Asubuhi mwambie mwalimu kazi imechelewa na uuulize nini bado inaweza kuwasilishwa ambayo ni ya mwanafunzi mwenyewe",
          "Kubali, kisha andika upya sentensi tatu ili 'ihesabike kama yako'",
          "Kubali, na uongeze sentensi ya kueleza wazi inayosema mwanafunzi ndiye aliandika",
        ],
        correctIndex: 1,
        hintsEn: [
          "Sleep is real. Honesty is also real. A generated project with the child's name is still cheating, and it teaches nothing for the next deadline.",
          "Correct. Late original work is better than on-time plagiarism. The teacher can then decide a fair consequence.",
          "Three rewritten sentences do not make the ideas yours.",
          "A disclosure that contradicts the truth is a second lie.",
        ],
        hintsSw: [
          "Usingizi ni wa kweli. Uaminifu nao ni wa kweli. Mradi uliozalishwa wenye jina la mtoto bado ni udanganyifu, na haufundishi chochote kwa tarehe inayofuata.",
          "Sahihi. Kazi asilia iliyochelewa ni bora kuliko wizi wa kazi wa kwa wakati. Mwalimu kisha anaweza kuamua adhabu ya haki.",
          "Sentensi tatu zilizoandikwa upya hazifanyi mawazo kuwa yako.",
          "Maelezo ya wazi yanayopingana na ukweli ni uongo wa pili.",
        ],
        explainEn:
          "Guardians protect sleep and safety. They do not sit the assignment. Late and honest beats on time and false.",
        explainSw:
          "Walezi hulinda usingizi na usalama. Hawakai kazi. Kuchelewa na kuwa mwaminifu ni bora kuliko kwa wakati na uongo.",
      }),
      quiz(
        "Which parent action best matches age-appropriate use for a Grade 4 child?",
        "Hatua ipi ya mzazi inalingana zaidi na matumizi yanayofaa umri kwa mtoto wa Gredi ya 4?",
        [
          "Leaving the child alone on a public chatbot until midnight",
          "Sitting with the child, hearing the task, limiting time, and checking the textbook together",
          "Enrolling the child's fingerprint in a free revision app a neighbour sent",
          "Buying a ready-made AI composition from a kiosk",
        ],
        [
          "Kumwacha mtoto peke yake kwenye chatbot ya hadhara hadi usiku wa manane",
          "Kukaa na mtoto, kusikia kazi, kuweka kikomo cha muda, na kukagua kitabu cha kiada pamoja",
          "Kumsajili kidole cha mtoto kwenye programu ya bure ya marudio aliyotumwa na jirani",
          "Kununua insha tayari ya AI kutoka kioski",
        ],
        1,
        "Presence, a time limit and a book check are the method. Biometrics in unvetted apps and purchased essays are not help.",
        "Uwepo, kikomo cha muda na ukaguzi wa kitabu ndiyo mbinu. Data ya kibayometriki kwenye programu ambazo hazijakaguliwa na insha zilizonunuliwa si msaada."
      ),
      note(
        "Try it: a five-minute conversation",
        "Jaribu: mazungumzo ya dakika tano",
        `Learners: tonight, read this list to a parent or guardian.

- This is the task.
- This is what I already know.
- This is the one thing I want the tool to do, if we use it at all.
- We will check the book before anything is copied.
- We will not type anyone else's name.

Parents: answer with one of these: "I will sit with you," "This task should be done without AI," or "We will ask the teacher tomorrow." Write the answer in the homework book.

If no adult is available, write the five lines anyway. Show a teacher the next day.`,
        `Wanafunzi: leo usiku, somea mzazi au mlezi orodha hii.

- Hii ndiyo kazi.
- Hiki ndicho ninachojua tayari.
- Hiki ndicho kitu kimoja nataka zana ifanye, tukiamua kuitumia.
- Tutakagua kitabu kabla ya kunakili chochote.
- Hatuandiki jina la mtu mwingine.

Wazazi: jibu kwa moja ya hizi: "Nitakaa nawe," "Kazi hii ifanywe bila AI," au "Tutamuuliza mwalimu kesho." Andika jibu kwenye daftari la kazi.

Kama hakuna mtu mzima, andika mistari mitano hata hivyo. Mwonyeshe mwalimu siku inayofuata.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Parents and guardians sit with you and check. They do not generate the work that carries your name.
- Age-appropriate use means younger learners are never alone with a public tool.
- Next unit: practise the one-sentence disclosure you will put at the bottom of real work.`,
        `- Wazazi na walezi hukaa nawe na kukagua. Hawazalishi kazi inayobeba jina lako.
- Matumizi yanayofaa umri yanamaanisha wanafunzi wadogo hawako peke yao na zana ya hadhara.
- Somo linalofuata: fanya mazoezi ya sentensi moja ya kueleza wazi ambayo utaweka chini ya kazi halisi.`
      ),
    ],
  },
  {
    id: "edu-b-u8",
    titleEn: "Practise your disclosure line",
    titleSw: "Fanya mazoezi ya sentensi ya kueleza wazi",
    cards: [
      note(
        "One plain sentence at the bottom of the work",
        "Sentensi moja wazi chini ya kazi",
        `Disclosure is a habit, not a confession after you are caught. It is the same honesty as writing "I used a calculator" on a maths paper when the teacher asked you to say so.

A good disclosure line is specific and short:

- "I used a chatbot to quiz me on chapter 4. I wrote the answers myself."
- "I used a chatbot to list ideas. I chose my own story and wrote every sentence."
- "I used a chatbot to check three spellings. I confirmed two in the kamusi."
- "No AI was used in this work."

A weak line hides the truth:

- "I used AI a bit." (A bit to write the whole insha?)
- "Helped by technology." (Which tool, to do what?)
- "Teacher said we could." (Allowed for ideas is not allowed for the full draft.)

If your school has not published a rule yet, still disclose. Silence is not permission (unit 3). The line also protects you: if a detector later flags your work, you already said what you did.

Different tasks need different lines. A supervised test usually needs "No AI was used," because none should have been. A take-home project might allow a quiz. Copy the teacher's instruction into the line if you can.

Practise when the stakes are low, on homework that did not use AI, so the sentence is ready when the stakes are high.`,
        `Kueleza wazi ni tabia, si kukiri baada ya kukamatwa. Ni uaminifu uleule wa kuandika "Nilitumia kikokotoo" kwenye karatasi ya hisabati mwalimu alipokuomba useme.

Sentensi nzuri ya kueleza wazi ni mahususi na fupi:

- "Nilitumia chatbot kunijaribu kuhusu sura ya 4. Niliandika majibu mwenyewe."
- "Nilitumia chatbot kuorodhesha mawazo. Nilichagua hadithi yangu na nikaandika kila sentensi."
- "Nilitumia chatbot kukagua tahajia tatu. Nilithibitisha mbili kamusini."
- "Hakuna AI iliyotumika katika kazi hii."

Sentensi dhaifu inaficha ukweli:

- "Nilitumia AI kidogo." (Kidogo kuandika insha yote?)
- "Nilisaidiwa na teknolojia." (Zana ipi, kufanya nini?)
- "Mwalimu alisema tunaweza." (Kuruhusiwa kwa mawazo si kuruhusiwa kwa rasimu kamili.)

Shule yako isipokuwa imechapisha sheria bado, bado eleza wazi. Kunyamaza si ruhusa (somo la 3). Sentensi pia inakulinda: kichunguzi kikionyesha kazi yako baadaye, tayari umesema ulichofanya.

Kazi tofauti zinahitaji sentensi tofauti. Jaribio linalosimamiwa kwa kawaida linahitaji "Hakuna AI iliyotumika," kwa sababu haipaswi kuwa na yoyote. Mradi wa nyumbani unaweza kuruhusu jaribio. Nakili maelekezo ya mwalimu kwenye sentensi kama unaweza.

Fanya mazoezi hatari ikiwa ndogo, kwenye kazi ambayo haitumia AI, ili sentensi iwe tayari hatari inapokuwa kubwa.`
      ),
      reveal([
        {
          termEn: "Disclosure line",
          termSw: "Sentensi ya kueleza wazi",
          defEn: "One sentence at the bottom of work that says whether AI was used and what for.",
          defSw: "Sentensi moja chini ya kazi inayosema kama AI ilitumiwa na kwa ajili ya nini.",
        },
        {
          termEn: "Specific disclosure",
          termSw: "Maelezo mahususi",
          defEn: "Names the tool's job: quiz, ideas, spelling. Not just 'I used AI'.",
          defSw: "Inataja kazi ya zana: kujaribu, mawazo, tahajia. Si 'nilitumia AI' tu.",
        },
        {
          termEn: "False disclosure",
          termSw: "Maelezo ya uwongo",
          defEn: "A line that says you wrote the work when a tool or another person did.",
          defSw: "Sentensi inayosema uliandika kazi wakati zana au mtu mwingine ndiye aliifanya.",
        },
        {
          termEn: "Task rule",
          termSw: "Sheria ya kazi",
          defEn: "What this teacher allowed for this piece of work. The disclosure must match it.",
          defSw: "Kile mwalimu huyu alichoruhusu kwa kazi hii. Maelezo lazima yalingane nayo.",
        },
      ]),
      note(
        "Worked example: three books, three lines",
        "Mfano: daftari tatu, sentensi tatu",
        `Imagine three pieces of work in one week for Njoki, Grade 9, Nyeri.

Monday, Kiswahili insha, teacher said: ideas only. Njoki asked for five ideas, chose her own market-day story, wrote every sentence, checked two spellings in the kamusi. Line: "Nilitumia chatbot kupata mawazo matano; nilichagua tukio langu na nikaandika kila sentensi. Tahajia mbili nilizikagua kamusini."

Wednesday, Mathematics, ten sums, teacher said no AI. She used only her notebook. Line: "Hakuna AI iliyotumika."

Friday, Biology, teacher allowed a chatbot to quiz her. She answered aloud, then wrote notes from memory. Line: "Nilitumia chatbot kunijaribu maswali 8 kuhusu mzunguko wa damu. Niliandika maelezo kutoka kumbukumbu yangu."

Three lines, three truths. A classmate who used the same chatbot to write the insha and then wrote "Hakuna AI" has added a false disclosure on top of plagiarism.

Njoki's lines take 30 seconds. They are easier than arguing later.`,
        `Fikiria kazi tatu katika wiki moja kwa Njoki, Gredi ya 9, Nyeri.

Jumatatu, insha ya Kiswahili, mwalimu alisema: mawazo tu. Njoki aliomba mawazo matano, akachagua hadithi yake ya siku ya soko, akaandika kila sentensi, akakagua tahajia mbili kamusini. Sentensi: "Nilitumia chatbot kupata mawazo matano; nilichagua tukio langu na nikaandika kila sentensi. Tahajia mbili nilizikagua kamusini."

Jumatano, Hisabati, hesabu kumi, mwalimu alisema hakuna AI. Alitumia daftari lake tu. Sentensi: "Hakuna AI iliyotumika."

Ijumaa, Biolojia, mwalimu aliruhusu chatbot imjaribu. Alijibu kwa sauti, kisha akaandika maelezo kutoka kumbukumbu. Sentensi: "Nilitumia chatbot kunijaribu maswali 8 kuhusu mzunguko wa damu. Niliandika maelezo kutoka kumbukumbu yangu."

Sentensi tatu, ukweli tatu. Mwanafunzi mwenzake aliyetumia chatbot ileile kuandika insha kisha akaandika "Hakuna AI" ameongeza maelezo ya uwongo juu ya wizi wa kazi.

Sentensi za Njoki zinachukua sekunde 30. Ni rahisi kuliko kubishana baadaye.`
      ),
      scenario({
        titleEn: "Scenario: 'the teacher never reads the bottom'",
        titleSw: "Hali: 'mwalimu hasomi chini kamwe'",
        situationEn:
          "A classmate used a chatbot to write most of a take-home History paragraph. He says he will skip the disclosure line because 'Sir never looks at the last line, and detectors are random.'",
        situationSw:
          "Mwanafunzi mwenzako alitumia chatbot kuandika sehemu kubwa ya aya ya Historia ya nyumbani. Anasema ataruka sentensi ya kueleza wazi kwa sababu 'Mwalimu haangalii mstari wa mwisho, na vichunguzi ni bahati.'",
        questionEn: "What is the honest response?",
        questionSw: "Jibu la uaminifu ni lipi?",
        optionsEn: [
          "Agree; honesty is only needed when someone is watching",
          "Do not skip it. If AI wrote the paragraph, the honest acts are to redo the work in his own words or to disclose fully and accept the teacher's rule, not to hide",
          "Write a false line that says no AI was used, to be extra safe",
          "Put the disclosure in Sheng so the teacher cannot read it",
        ],
        optionsSw: [
          "Kubali; uaminifu unahitajika tu mtu anapowekewa jicho",
          "Usiruke. AI ikiandika aya, vitendo vya uaminifu ni kuandika kazi upya kwa maneno yake au kueleza wazi kabisa na kukubali sheria ya mwalimu, si kuficha",
          "Andika sentensi ya uwongo isemayo hakuna AI, ili uwe salama zaidi",
          "Weka maelezo kwa Sheng ili mwalimu asisome",
        ],
        correctIndex: 1,
        hintsEn: [
          "Integrity is about the work, not the audience. A mark that measures a chatbot still cheats the next test.",
          "Correct. Disclosure cannot launder a ghost-written paragraph. Either redo it or tell the whole truth and take the rule.",
          "A false line is a second integrity failure.",
          "Hiding the line in slang is still hiding.",
        ],
        hintsSw: [
          "Uadilifu unahusu kazi, si hadhira. Alama inayopima chatbot bado inadanganya jaribio lijalo.",
          "Sahihi. Kueleza wazi hakuwezi kuficha aya iliyoandikwa na zana. Aidha iandikwe upya au ukweli wote usemwe na sheria ifuatwe.",
          "Sentensi ya uwongo ni kosa la pili la uadilifu.",
          "Kuficha sentensi kwa lugha ya mtaani bado ni kuficha.",
        ],
        explainEn:
          "The disclosure line tells the truth. It does not make dishonest work honest. Redo, or tell the teacher.",
        explainSw:
          "Sentensi ya kueleza wazi inasema ukweli. Haifanyi kazi ya udanganyifu kuwa ya uaminifu. Andika upya, au mwambie mwalimu.",
      }),
      quiz(
        "The teacher allowed AI for spelling checks only. Which disclosure is honest?",
        "Mwalimu aliruhusu AI kwa ukaguzi wa tahajia tu. Maelezo yapi ni ya uaminifu?",
        [
          "'I used AI' after the chatbot rewrote every paragraph",
          "'I asked a chatbot to underline spelling only; I wrote the composition and confirmed flagged words in a dictionary'",
          "'No AI was used' because spelling feels small",
          "'Used technology' with no other detail",
        ],
        [
          "'Nilitumia AI' baada ya chatbot kuandika upya kila aya",
          "'Niliomba chatbot ipigie mstari tahajia tu; niliandika insha na nikathibitisha maneno yaliyoonyeshwa katika kamusi'",
          "'Hakuna AI iliyotumika' kwa sababu tahajia inaonekana ndogo",
          "'Nilitumia teknolojia' bila maelezo mengine",
        ],
        1,
        "Honest disclosure matches the rule and the facts. A rewrite is not a spelling check, and 'technology' is too vague.",
        "Maelezo ya uaminifu yanalingana na sheria na ukweli. Kuandika upya si ukaguzi wa tahajia, na 'teknolojia' ni tupu mno."
      ),
      note(
        "Try it: three lines for three tasks",
        "Jaribu: sentensi tatu kwa kazi tatu",
        `Open this week's timetable. Pick three pieces of work: one test-like, one composition-like, one project-like.

- Write the disclosure line you would use for each, even if you used no AI.
- Read them to a parent, guardian or classmate. Ask: "If a teacher saw only this line, would they know what I did?"
- If the answer is no, add the missing job: quiz, ideas, spelling, or none.
- Keep the three lines in the back of your exercise book as templates.

You will need them again in the checkpoint unit.`,
        `Fungua ratiba ya wiki hii. Chagua kazi tatu: moja kama jaribio, moja kama insha, moja kama mradi.

- Andika sentensi ya kueleza wazi ambayo ungetumia kwa kila moja, hata kama hukutumia AI.
- Zisome kwa mzazi, mlezi au mwanafunzi mwenzako. Uliza: "Mwalimu akiona sentensi hii tu, je, angejua nilichofanya?"
- Jibu likiwa hapana, ongeza kazi iliyokosekana: kujaribu, mawazo, tahajia, au hakuna.
- Weka sentensi tatu nyuma ya daftari lako kama mifano.

Utazihitaji tena katika somo la kituo cha kukagua.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- A disclosure line is specific, short and true. "No AI" is also a disclosure.
- It cannot turn ghost-written work into honest work.
- Next unit: many learners share one phone. Fair study still has to happen.`,
        `- Sentensi ya kueleza wazi ni mahususi, fupi na ya kweli. "Hakuna AI" nayo ni maelezo.
- Haiwezi kugeuza kazi iliyoandikwa na zana kuwa ya uaminifu.
- Somo linalofuata: wanafunzi wengi hushiriki simu moja. Kusoma kwa haki bado kunapaswa kufanyika.`
      ),
    ],
  },
  {
    id: "edu-b-u9",
    titleEn: "One phone, many learners",
    titleSw: "Simu moja, wanafunzi wengi",
    cards: [
      note(
        "Fair study when devices are few",
        "Kusoma kwa haki vifaa vikiwa vichache",
        `Many Kenyan classrooms are crowded. One teacher may face 50 or 70 learners. A computer lab may be open one period a week. At home there may be one smartphone, and it belongs to a parent who needs it for M-Pesa after 8 pm. Mixed device access is normal. It is not a reason to skip learning, and it is not a reason to copy from the one classmate who has data.

UNESCO's 2023 guidance on generative AI in education says equity matters: tools should not widen the gap between learners who have devices and learners who do not. In practice that means:

- The habits in units 2 and 4 (think first, check the book) work on paper. They do not need a phone.
- When a phone is available, share time, not answers. Five minutes of your own questioning is better than a screenshot of someone else's chatbot paragraph.
- WhatsApp groups that dump AI answers for the whole class turn one device into 60 copies of the same cheating.
- Teachers should not set homework that can only be done with a paid chatbot. If they do, say so politely and ask for a paper option.

A crowded classroom also means noise and speed. Slow checking still beats fast copying. The learner without a phone can still be the one who understands the topic tomorrow, if they used the book.`,
        `Madarasa mengi Kenya yana msongamano. Mwalimu mmoja anaweza kukabili wanafunzi 50 au 70. Maabara ya kompyuta inaweza kufunguliwa kipindi kimoja kwa wiki. Nyumbani huenda kuna simu moja ya kisasa, na ni ya mzazi anayehitaji kwa M-Pesa baada ya saa mbili usiku. Upatikanaji mchanganyiko wa vifaa ni wa kawaida. Si sababu ya kuruka kujifunza, wala si sababu ya kunakili kutoka kwa mwanafunzi mmoja aliye na data.

Mwongozo wa UNESCO wa 2023 kuhusu AI generative katika elimu unasema usawa ni muhimu: zana zisipanue pengo kati ya wenye vifaa na wasio navyo. Katika utendaji hiyo inamaanisha:

- Tabia katika masomo ya 2 na 4 (fikiri kwanza, kagua kitabu) zinafanya kazi kwenye karatasi. Hazihitaji simu.
- Simu inapopatikana, gawanya muda, si majibu. Dakika tano za kuuliza kwako ni bora kuliko picha ya skrini ya aya ya chatbot ya mtu mwingine.
- Makundi ya WhatsApp yanayomwaga majibu ya AI kwa darasa zima hugeuza kifaa kimoja kuwa nakala 60 za udanganyifu uleule.
- Walimu wasitoe kazi ya nyumbani inayoweza kufanywa tu kwa chatbot ya kulipia. Wakitofanya hivyo, sema kwa heshima na uombe chaguo la karatasi.

Darasa lenye msongamano pia lina kelele na kasi. Ukaguzi wa polepole bado unashinda unakili wa haraka. Mwanafunzi asiye na simu bado anaweza kuwa ndiye anayeelewa mada kesho, kama alitumia kitabu.`
      ),
      reveal([
        {
          termEn: "Mixed device access",
          termSw: "Upatikanaji mchanganyiko wa vifaa",
          defEn: "A class or family where some people have a phone or computer and others do not, or not at the same time.",
          defSw: "Darasa au familia ambapo baadhi wana simu au kompyuta na wengine hawana, au hawana wakati mmoja.",
        },
        {
          termEn: "Shared device",
          termSw: "Kifaa kinachoshirikiwa",
          defEn: "One phone or tablet used by several people. The history on it is not private to you.",
          defSw: "Simu au kishikwambi kimoja kinachotumiwa na watu kadhaa. Historia yake si faragha yako.",
        },
        {
          termEn: "Answer dump",
          termSw: "Mwagaji wa majibu",
          defEn: "Pasting AI answers into a group so everyone copies. That is cheating at class scale.",
          defSw: "Kuweka majibu ya AI kwenye kundi ili kila mtu anakili. Huo ni udanganyifu kwa kiwango cha darasa.",
        },
        {
          termEn: "Paper-first study",
          termSw: "Kusoma kwa karatasi kwanza",
          defEn: "Closing the book in your head, writing, then checking, before any device is opened.",
          defSw: "Kufunga kitabu kichwani, kuandika, kisha kukagua, kabla kifaa chochote hakijafunguliwa.",
        },
      ]),
      note(
        "Worked example: three phones in a class of 48",
        "Mfano: simu tatu katika darasa la 48",
        `Imagine a Grade 7 class in Kitui. The teacher allows 15 minutes of optional chatbot practice on fractions, then a paper quiz. Three learners brought phones. The rest have none.

Unfair plan: the three generate answers, photograph them, and send them to the class group. Forty-five people copy. The paper quiz looks strong. Next week's test, without phones, collapses.

Fair plan the teacher sets:

- The three phones stay on the teacher's desk. Groups of four rotate: two minutes to ask "do not give the answer, tell me which step is wrong" on one sum they already tried on paper.
- Everyone else keeps working on paper. The rotation is extra, not the only path.
- No screenshots leave the room.
- The quiz is still on paper, books closed.

Time maths: 15 minutes, groups of 4, three phones: about 12 learners get a turn, 36 do paper only. That is not equal access. It is equal opportunity to learn, because the paper path was complete. The teacher notes that next time she will photocopy a worked example instead of depending on phones.

The point is not to pretend every child has a device. The point is not to make the device the gate to the mark.`,
        `Fikiria darasa la Gredi ya 7 Kitui. Mwalimu anaruhusu dakika 15 za mazoezi ya hiari ya chatbot kuhusu sehemu, kisha jaribio la karatasi. Wanafunzi watatu walileta simu. Wengine hawana.

Mpango usio wa haki: watatu wanazalisha majibu, wanapiga picha, na wanatuma kwenye kundi la darasa. Watu 45 wananakili. Jaribio la karatasi linaonekana imara. Jaribio la wiki ijayo, bila simu, linaporomoka.

Mpango wa haki ambao mwalimu anaweka:

- Simu tatu zinakaa mezani mwa mwalimu. Vikundi vya wanne vinazunguka: dakika mbili kuuliza "usinipe jibu, niambie ni hatua ipi nimekosea" kwenye hesabu moja waliyojaribu tayari kwenye karatasi.
- Wengine wote wanaendelea kwenye karatasi. Mzunguko ni nyongeza, si njia pekee.
- Hakuna picha za skrini zinazotoka chumbani.
- Jaribio bado ni kwenye karatasi, vitabu vimefungwa.

Hesabu ya muda: dakika 15, vikundi vya 4, simu tatu: takriban wanafunzi 12 wanapata nafasi, 36 wanafanya karatasi tu. Huo si ufikiaji sawa. Ni nafasi sawa ya kujifunza, kwa sababu njia ya karatasi ilikuwa kamili. Mwalimu anaandika kwamba wakati ujao atachapisha mfano uliofanywa badala ya kutegemea simu.

Lengo si kujifanya kila mtoto ana kifaa. Lengo si kufanya kifaa kiwe lango la alama.`
      ),
      scenario({
        titleEn: "Scenario: the group that pastes everything",
        titleSw: "Hali: kundi linalobandika kila kitu",
        situationEn:
          "Your class WhatsApp group, 52 members, receives a message: 'AI answers for tomorrow's Agriculture homework, copy fast, delete after.' You do not have a phone of your own. A cousin shows you the message.",
        situationSw:
          "Kundi la WhatsApp la darasa lenu, wanachama 52, linapokea ujumbe: 'Majibu ya AI ya kazi ya nyumbani ya Kilimo ya kesho, nakili haraka, futa baadaye.' Huna simu yako. Binamu anakuonyesha ujumbe.",
        questionEn: "What should you do?",
        questionSw: "Ufanye nini?",
        optionsEn: [
          "Copy quickly; everyone else will, and you have no other device",
          "Refuse the copy, do the homework from the notes and textbook, and tell a teacher that answers were dumped in the group",
          "Copy, but change the order of sentences so it looks different",
          "Forward the dump to another class so the unfairness is shared",
        ],
        optionsSw: [
          "Nakili haraka; kila mtu atafanya hivyo, na huna kifaa kingine",
          "Kataa nakala, fanya kazi kutoka maelezo na kitabu cha kiada, na mwambie mwalimu majibu yalimwagwa kwenye kundi",
          "Nakili, lakini ubadilishe mpangilio wa sentensi ili ionekane tofauti",
          "Peleka mwagaji kwa darasa jingine ili kukosa haki kushirikiwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Lack of a phone is not permission to paste. It is a reason to use the book, which you do have.",
          "Correct. You keep your integrity and you warn the teacher, because 52 people are about to hand in one chatbot.",
          "Reordering is still plagiarism.",
          "Spreading the dump spreads the cheating.",
        ],
        hintsSw: [
          "Kukosa simu si ruhusa ya kubandika. Ni sababu ya kutumia kitabu, ambacho unacho.",
          "Sahihi. Unabaki na uadilifu na unamwonya mwalimu, kwa sababu watu 52 wanakaribia kuwasilisha chatbot moja.",
          "Kubadilisha mpangilio bado ni wizi wa kazi.",
          "Kusambaza mwagaji ni kusambaza udanganyifu.",
        ],
        explainEn:
          "Equity means a paper path remains valid. It does not mean everyone must copy the one AI answer.",
        explainSw:
          "Usawa unamaanisha njia ya karatasi inabaki halali. Haimaanishi kila mtu lazima anakili jibu moja la AI.",
      }),
      quiz(
        "Why should a teacher avoid homework that can only be finished with a paid chatbot?",
        "Kwa nini mwalimu aepuke kazi ya nyumbani inayoweza kukamilishwa tu kwa chatbot ya kulipia?",
        [
          "Because chatbots are always wrong",
          "Because learners without money or data cannot complete it honestly, so the mark starts measuring access, not learning",
          "Because parents dislike phones",
          "Because UNESCO banned all AI in primary school",
        ],
        [
          "Kwa sababu chatbot daima zina kosa",
          "Kwa sababu wanafunzi wasio na pesa au data hawawezi kuikamilisha kwa uaminifu, hivyo alama inaanza kupima ufikiaji, si kujifunza",
          "Kwa sababu wazazi hawapendi simu",
          "Kwa sababu UNESCO ilikataza AI yote shule ya msingi",
        ],
        1,
        "If the only honest path needs money and data, the assessment is unfair. Offer a paper path. UNESCO asks for equity, not a blanket ban.",
        "Njia pekee ya uaminifu ikihitaji pesa na data, tathmini si ya haki. Toa njia ya karatasi. UNESCO inaomba usawa, si marufuku kamili."
      ),
      note(
        "Try it: a no-phone study hour",
        "Jaribu: saa moja ya kusoma bila simu",
        `Tonight, pick one subject.

- Close every device for 40 minutes.
- Use only the textbook, your notes and a blank page: write what you remember, then check (unit 2).
- If a family phone becomes free later, use 10 minutes only to quiz yourself or to check one confusion against the book, then stop.
- Write how many marks-worth of work you did on paper versus on the phone.

Bring the note to class. Learners with no phone at all should still complete the 40 minutes. That is the point.`,
        `Leo usiku, chagua somo moja.

- Funga kifaa kila kimoja kwa dakika 40.
- Tumia kitabu cha kiada, maelezo yako na ukurasa tupu tu: andika unachokumbuka, kisha kagua (somo la 2).
- Simu ya familia ikipatikana baadaye, tumia dakika 10 tu kujijaribu au kukagua mkanganyiko mmoja dhidi ya kitabu, kisha simama.
- Andika kazi yenye thamani gani uliyofanya kwenye karatasi ukilinganisha na simu.

Leta maelezo darasani. Wanafunzi wasio na simu kabisa bado wakamilishe dakika 40. Hilo ndilo lengo.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Mixed devices are normal. Paper-first study stays fair.
- Share time on a phone, not AI answers in a group.
- Next unit: set books, CBC projects and KCSE. AI cannot sit the exam for you.`,
        `- Vifaa mchanganyiko ni vya kawaida. Kusoma kwa karatasi kwanza kunabaki kuwa haki.
- Gawanya muda kwenye simu, si majibu ya AI kwenye kundi.
- Somo linalofuata: vitabu teule, miradi ya CBC na KCSE. AI haiwezi kukaa mtihani badala yako.`
      ),
    ],
  },
  {
    id: "edu-b-u10",
    titleEn: "Set books, CBC projects and KCSE",
    titleSw: "Vitabu teule, miradi ya CBC na KCSE",
    cards: [
      note(
        "AI has not sat in your literature class, and it will not sit KCSE",
        "AI haijakaa darasa lenu la fasihi, wala haitakaa KCSE",
        `Set books are specific. A chatbot may have seen summaries, old editions, or a different title with a similar name. It can mix characters, invent a scene, or describe a film instead of the pages you were told to read. If you have not read the chapters, you cannot catch the mix-up (unit 2).

CBC asks you to show evidence of learning: a project, a portfolio, an oral explanation, a practical. A printed AI report that you cannot explain to the teacher is not evidence. The teacher is allowed to ask you, with the work closed, "show me the part you did on Wednesday." If you cannot, the work was not yours.

KCSE and other supervised KNEC exams are taken in a room with an invigilator. No phone, no chatbot. Every shortcut you took in Form 2 and Form 3 becomes a hole in Form 4. Integrity in small homework is training for that room.

Honest uses still exist around set books:

- After you read, ask a tool to quiz you, then check answers in the book.
- Ask for a second explanation of a theme you already found on the page.
- Never ask it to write the essay you will hand in.

Teachers must review any AI-made quiz on a set book before it is used for marks. Plot keys go wrong in the same confident tone as everything else.`,
        `Vitabu teule ni mahususi. Chatbot huenda iliona muhtasari, matoleo ya zamani, au kichwa tofauti chenye jina linalofanana. Inaweza kuchanganya wahusika, kubuni tukio, au kueleza filamu badala ya kurasa ulizoambiwa usome. Usipokuwa umesoma sura, huwezi kugundua mchanganyiko (somo la 2).

CBC inakuomba uonyeshe ushahidi wa kujifunza: mradi, portfolio, maelezo kwa mdomo, kazi ya vitendo. Ripoti ya AI iliyochapishwa usiyoweza kumweleza mwalimu si ushahidi. Mwalimu anaruhusiwa kukuuliza, kazi ikiwa imefungwa, "nionyeshe sehemu uliyofanya Jumatano." Usipoweza, kazi haikuwa yako.

KCSE na mitihani mingine ya KNEC inayosimamiwa hufanywa katika chumba chenye msimamizi. Hakuna simu, hakuna chatbot. Kila njia ya mkato uliyochukua Kidato cha 2 na 3 inakuwa tundu Kidato cha 4. Uadilifu katika kazi ndogo za nyumbani ni mazoezi kwa chumba hicho.

Matumizi ya uaminifu bado yapo kuhusu vitabu teule:

- Baada ya kusoma, omba zana ikujaribu, kisha kagua majibu kitabuni.
- Omba maelezo ya pili ya dhamira uliyokwisha pata ukurasani.
- Usiombe iandike insha utakayowasilisha.

Walimu lazima wakague jaribio lolote kuhusu kitabu teule lililotengenezwa na AI kabla halijatumika kwa alama. Funguo za ploti hukosea kwa sauti ileile ya uhakika.`
      ),
      reveal([
        {
          termEn: "Set book",
          termSw: "Kitabu teule",
          defEn: "The literature title your class is required to study for the course or exam.",
          defSw: "Kichwa cha fasihi ambacho darasa lenu linatakiwa kusoma kwa kozi au mtihani.",
        },
        {
          termEn: "Evidence of learning",
          termSw: "Ushahidi wa kujifunza",
          defEn: "Something you can show and explain: a process, a piece you made, an answer in your own words.",
          defSw: "Kitu unachoweza kuonyesha na kueleza: mchakato, kazi uliyotengeneza, jibu kwa maneno yako.",
        },
        {
          termEn: "Supervised exam",
          termSw: "Mtihani unaosimamiwa",
          defEn: "KCSE or similar: an invigilator, no unauthorised device, your brain only.",
          defSw: "KCSE au sawa: msimamizi, hakuna kifaa kisichoruhusiwa, ubongo wako tu.",
        },
        {
          termEn: "Edition mix-up",
          termSw: "Mchanganyiko wa matoleo",
          defEn: "When a tool describes a different version, a film, or another book with a similar name.",
          defSw: "Zana inapoeleza toleo tofauti, filamu, au kitabu kingine chenye jina linalofanana.",
        },
      ]),
      note(
        "Worked example: two characters from two books",
        "Mfano: wahusika wawili kutoka vitabu viwili",
        `Imagine Farida, Form 3, Nakuru. She has not finished chapter 6 of the set book. She asks a chatbot for "the three most important events in chapter 6 and a paragraph on the main character's choice."

The answer names a character who does not appear in chapter 6, and it describes a court scene from a different title that used to be on an older list. The paragraph is fluent. Farida cannot see the error because she has not read the chapter.

She would have handed in a confident, wrong essay.

The fix she uses the next day: she reads the six pages, writes three events on paper, then asks the chatbot only: "Quiz me with five questions on a chapter where X does Y. Do not summarise." Two of the five questions are about a scene that is not in her edition. She discards those two, answers the other three from memory, and checks the book. She discloses the quiz.

Time: 40 minutes of reading plus 10 minutes of quiz, instead of 8 minutes of copying. In a oral check, she can now point to the page.`,
        `Fikiria Farida, Kidato cha 3, Nakuru. Hajamaliza sura ya 6 ya kitabu teule. Anaomba chatbot "matukio matatu muhimu zaidi katika sura ya 6 na aya kuhusu chaguo la mhusika mkuu."

Jibu linataja mhusika asiyetokea katika sura ya 6, na linaeleza tukio la mahakama kutoka kichwa tofauti kilichokuwa kwenye orodha ya zamani. Aya ni laini. Farida haoni kosa kwa sababu hajasoma sura.

Angeliwasilisha insha yenye uhakika, yenye kosa.

Marekebisho anayotumia siku inayofuata: anasoma kurasa sita, anaandika matukio matatu kwenye karatasi, kisha anaiomba chatbot tu: "Nijaribu kwa maswali 5 kuhusu sura ambapo X anafanya Y. Usifupishe." Maswali mawili kati ya matano ni kuhusu tukio lisilo katika toleo lake. Anayaacha hayo mawili, anajibu mengine matatu kutoka kumbukumbu, na anakagua kitabu. Anaeleza wazi jaribio.

Muda: dakika 40 za kusoma pamoja na dakika 10 za jaribio, badala ya dakika 8 za kunakili. Katika ukaguzi wa mdomo, sasa anaweza kuonyesha ukurasa.`
      ),
      scenario({
        titleEn: "Scenario: 'AI for mocks, real study later'",
        titleSw: "Hali: 'AI kwa mock, kusoma kweli baadaye'",
        situationEn:
          "A Form 4 classmate says: 'We will use chatbots to write all take-home mocks this term. In July we will start reading. KCSE is still months away.'",
        situationSw:
          "Mwanafunzi mwenzako wa Kidato cha 4 anasema: 'Tutatumia chatbot kuandika mock zote za nyumbani muhula huu. Julai tutaanza kusoma. KCSE bado ni miezi.'",
        questionEn: "What is the sound reply?",
        questionSw: "Jibu lenye busara ni lipi?",
        optionsEn: [
          "Agree; resting the brain now will make July more powerful",
          "Disagree: mocks exist to show gaps now. AI-written mocks hide the gaps, so July is too late to build the reading and writing KCSE will demand",
          "Agree for literature only, because set books are long",
          "Agree if they disclose the chatbot on the mock paper",
        ],
        optionsSw: [
          "Kubali; kupumzisha ubongo sasa kutafanya Julai iwe na nguvu zaidi",
          "Kataa: mock zipo kuonyesha mapengo sasa. Mock zilizoandikwa na AI zinaficha mapengo, hivyo Julai ni kuchelewa kujenga usomaji na uandishi ambao KCSE itadai",
          "Kubali kwa fasihi tu, kwa sababu vitabu teule ni marefu",
          "Kubali wakiweleza wazi chatbot kwenye karatasi ya mock",
        ],
        correctIndex: 1,
        hintsEn: [
          "Rest is not the same as skipping practice. KCSE will not wait for a hidden gap to close in one month.",
          "Correct. A mock that a chatbot sat is not a mock. Disclosure would make the paper invalid as practice, not valid as a shortcut.",
          "Literature is the subject where unread pages hurt most.",
          "Telling the truth that you did not sit the mock does not turn it into practice.",
        ],
        hintsSw: [
          "Kupumzika si sawa na kuruka mazoezi. KCSE haitangoja pengo lililofichwa lifungwe kwa mwezi mmoja.",
          "Sahihi. Mock aliyokaa chatbot si mock. Kueleza wazi kungefanya karatasi isiwe mazoezi, si kuifanya njia ya mkato kuwa halali.",
          "Fasihi ndiyo somo ambalo kurasa zisizosomwa zinaumiza zaidi.",
          "Kusema ukweli kwamba hukukaa mock hakuigeuzi kuwa mazoezi.",
        ],
        explainEn:
          "Practice must look like the exam: your brain, the book, the clock. AI cannot sit KCSE, and it should not sit the mock either.",
        explainSw:
          "Mazoezi yanapaswa kufanana na mtihani: ubongo wako, kitabu, saa. AI haiwezi kukaa KCSE, wala isikae mock.",
      }),
      quiz(
        "A teacher asks you to explain a CBC project with the folder closed. You cannot. What does that show?",
        "Mwalimu anakwomba ueleze mradi wa CBC folda ikiwa imefungwa. Huwezi. Hiyo inaonyesha nini?",
        [
          "That you are shy, so the project should still get full marks",
          "That the folder is not yet evidence of your learning, because you cannot retrieve the work from your own head",
          "That oral checks are unfair to everyone",
          "That the chatbot should be invited to speak for you",
        ],
        [
          "Kwamba una aibu, kwa hiyo mradi bado upate alama kamili",
          "Kwamba folda bado si ushahidi wa kujifunza kwako, kwa sababu huwezi kutoa kazi kutoka kichwani mwako",
          "Kwamba ukaguzi wa mdomo si haki kwa kila mtu",
          "Kwamba chatbot ialikwe iongee badala yako",
        ],
        1,
        "CBC evidence is what you can show and explain. A folder you cannot talk about is a product, not your learning.",
        "Ushahidi wa CBC ni kile unachoweza kuonyesha na kueleza. Folda usiyoweza kuongea kuihusu ni bidhaa, si kujifunza kwako."
      ),
      note(
        "Try it: one page, three events, then a quiz",
        "Jaribu: ukurasa mmoja, matukio matatu, kisha jaribio",
        `Choose a set book, a class reader, or any chapter you are actually reading.

- Read one page. Close the book. Write three events or facts.
- Open the book. Tick what is there. Cross what you invented.
- If you have a chatbot, ask for five quiz questions on that page only, and discard any question the page does not support.
- Write a disclosure line.

If you have no set book yet, do the same with a CBC textbook page. The habit is identical.`,
        `Chagua kitabu teule, kitabu cha kusoma darasani, au sura yoyote unayosoma kweli.

- Soma ukurasa mmoja. Funga kitabu. Andika matukio au ukweli tatu.
- Fungua kitabu. Weka vema vilivyoko. Piga mstari ulivyobuni.
- Kama una chatbot, omba maswali 5 ya jaribio kuhusu ukurasa huo tu, na uache swali lolote ambalo ukurasa hauungi mkono.
- Andika sentensi ya kueleza wazi.

Kama bado huna kitabu teule, fanya vivyo hivyo kwa ukurasa wa kitabu cha kiada cha CBC. Tabia ni ileile.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- Read first. AI summaries mix books, editions and films.
- CBC evidence is what you can explain. KCSE is your brain in a supervised room.
- Next unit: school apps, marks and your data, including fingerprints.`,
        `- Soma kwanza. Muhtasari wa AI huchanganya vitabu, matoleo na filamu.
- Ushahidi wa CBC ni kile unachoweza kueleza. KCSE ni ubongo wako katika chumba kinachosimamiwa.
- Somo linalofuata: programu za shule, alama na data yako, pamoja na alama za vidole.`
      ),
    ],
  },
  {
    id: "edu-b-u11",
    titleEn: "School apps and learner data",
    titleSw: "Programu za shule na data ya mwanafunzi",
    cards: [
      note(
        "Who can see your marks, and where your fingerprint goes",
        "Nani anaona alama zako, na alama ya kidole chako inaenda wapi",
        `Schools now use apps for attendance, fees, reports and sometimes "AI insights". Those apps hold personal data: your name, your photo, your marks, sometimes your location. Under the Data Protection Act, 2019, the school is responsible for why that data is collected, who can see it, and whether it is sent outside Kenya.

You have a right to a plain explanation. A parent or guardian can ask:

- What data is this app taking?
- Who inside the school can see it?
- Is it stored in Kenya or abroad?
- Will the company train its AI on our children's work?
- How do we delete it when the learner leaves?

Biometric shortcuts are a special no unless the school has a written, necessary reason and a safe store. A visitor tablet that wants every child's fingerprint "to mark attendance faster", or a free revision app that wants a face scan, is not automatically allowed. Do not enrol a finger or face in an unvetted app, even if a prefect is collecting "for the school".

Marks on a parent dashboard can also harm. If an app ranks children publicly, or lets other parents see more than their own child, that is a design failure, not a motivation tool. Tell a teacher.

Teachers must still review AI-generated comments on report forms before parents see them. A generated sentence about a child the model has never met is a guess, the same as unit 1.`,
        `Shule sasa hutumia programu kwa mahudhurio, karo, ripoti na wakati mwingine "maelezo ya AI". Programu hizo zinahifadhi data binafsi: jina lako, picha yako, alama zako, wakati mwingine mahali ulipo. Chini ya Sheria ya Ulinzi wa Data, 2019, shule inawajibika kwa nini data hiyo inakusanywa, nani anaweza kuiona, na kama inatumwa nje ya Kenya.

Una haki ya maelezo wazi. Mzazi au mlezi anaweza kuuliza:

- Programu hii inachukua data gani?
- Nani ndani ya shule anaweza kuiona?
- Inahifadhiwa Kenya au nje?
- Je, kampuni itafunza AI yake kwa kazi za watoto wetu?
- Tunaifuta vipi mwanafunzi anapoondoka?

Njia za mkato za kibayometriki ni hapana maalum isipokuwa shule ina sababu ya maandishi, ya lazima, na hifadhi salama. Kishikwambi cha wageni kinachotaka kidole cha kila mtoto "kuweka mahudhurio haraka", au programu ya bure ya marudio inayotaka skani ya uso, hairuhusiwi moja kwa moja. Usijiandikishe kidole au uso kwenye programu ambayo haijakaguliwa, hata mkuu wa darasa akikusanya "kwa shule".

Alama kwenye dashibodi ya mzazi zinaweza pia kudhuru. Programu ikipanga watoto hadharani, au ikiruhusu wazazi wengine kuona zaidi ya mtoto wao, huo ni uhaba wa usanifu, si zana ya motisha. Mwambie mwalimu.

Walimu bado wanapaswa kukagua maoni yaliyozalishwa na AI kwenye fomu za ripoti kabla wazazi hawajaona. Sentensi iliyozalishwa kuhusu mtoto ambaye modeli haijawahi kukutana naye ni makisio, sawa na somo la 1.`
      ),
      reveal([
        {
          termEn: "Data controller",
          termSw: "Mdhibiti wa data",
          defEn: "The organisation that decides why your data is collected. For school apps, that is usually the school.",
          defSw: "Taasisi inayoamua kwa nini data yako inakusanywa. Kwa programu za shule, kwa kawaida ni shule.",
        },
        {
          termEn: "Dashboard",
          termSw: "Dashibodi",
          defEn: "A screen of numbers and comments about learners. Who can open it is a privacy decision.",
          defSw: "Skrini ya namba na maoni kuhusu wanafunzi. Nani anayeweza kuifungua ni uamuzi wa faragha.",
        },
        {
          termEn: "Unvetted app",
          termSw: "Programu ambayo haijakaguliwa",
          defEn: "Software the school has not checked for data use, storage and safety.",
          defSw: "Programu ambayo shule haijakagua matumizi ya data, hifadhi na usalama.",
        },
        {
          termEn: "Attendance biometrics",
          termSw: "Kibayometriki cha mahudhurio",
          defEn: "Finger or face used to mark who is present. High risk if stored in a casual app.",
          defSw: "Kidole au uso unaotumiwa kuonyesha nani yupo. Hatari kubwa ukihifadhiwa kwenye programu ya mchezo.",
        },
      ]),
      note(
        "Worked example: the free attendance tablet",
        "Mfano: kishikwambi cha bure cha mahudhurio",
        `A salesperson at a parents' day in Thika offers the school a "free AI attendance tablet". Every learner presses a finger each morning. The company keeps the fingerprints "in the cloud for backup". There is no contract on the table, no explanation of deletion, and the tablet also wants a class photo every week "for the yearbook AI".

The deputy principal is tempted: assembly queues are long.

The honest pause:

- Fingerprints are biometric data. They are not a fair trade for a free gadget.
- "The cloud" is not a place you can visit. Ask which country, which company, which subprocessors.
- Weekly class photos are more personal data, possibly including children whose parents did not consent to a yearbook.
- The school can keep using a paper register or an ID-number app without bodies.

They decline the tablet until the Board, the data protection contact, and parents have a written proposal. The queue stays long. The children's fingerprints stay on their fingers.

Learners in the queue can still say no if a prefect appears with a "trial" tablet the next week. "My parent has not agreed" is a complete sentence.`,
        `Muuzaji katika siku ya wazazi Thika anatoa shule "kishikwambi cha bure cha mahudhurio ya AI". Kila mwanafunzi anabonyeza kidole kila asubuhi. Kampuni inahifadhi alama za vidole "kwenye wingu kwa chelezo". Hakuna mkataba mezani, hakuna maelezo ya kufuta, na kishikwambi pia kinataka picha ya darasa kila wiki "kwa AI ya kitabu cha mwaka".

Naibu mkuu anajaribiwa: foleni za mkutano ni ndefu.

Pumziko la uaminifu:

- Alama za vidole ni data ya kibayometriki. Si biashara ya haki kwa kifaa cha bure.
- "Wingu" si mahali unapoweza kutembelea. Uliza nchi ipi, kampuni ipi, wasindikizaji wapi.
- Picha za darasa kila wiki ni data binafsi zaidi, huenda zikiwemo watoto ambao wazazi wao hawakukubali kitabu cha mwaka.
- Shule inaweza kuendelea na daftari la karatasi au programu ya namba ya kitambulisho bila miili.

Wanakataa kishikwambi hadi Bodi, mwasiliani wa ulinzi wa data, na wazazi wamekuwa na pendekezo la maandishi. Foleni inabaki ndefu. Alama za vidole za watoto zinabaki kwenye vidole vyao.

Wanafunzi kwenye foleni bado wanaweza kusema hapana mkuu wa darasa akitokea na kishikwambi cha "majaribio" wiki inayofuata. "Mzazi wangu hakukubali" ni sentensi kamili.`
      ),
      scenario({
        titleEn: "Scenario: the neighbour's revision app",
        titleSw: "Hali: programu ya marudio ya jirani",
        situationEn:
          "A neighbour tells your parent that a free revision app raised their child's marks. The install screen asks for the child's full name, school, photo, and optional fingerprint 'to stop siblings sharing the account'. Your parent is about to tap Allow.",
        situationSw:
          "Jirani anamwambia mzazi wako kwamba programu ya bure ya marudio ilipandisha alama za mtoto wao. Skrini ya kusakinisha inaomba jina kamili la mtoto, shule, picha, na kidole cha hiari 'kuzuia ndugu kushiriki akaunti'. Mzazi wako anakaribia kubonyeza Ruhusu.",
        questionEn: "What should you suggest?",
        questionSw: "Unashauri nini?",
        optionsEn: [
          "Tap Allow; free and popular means safe",
          "Skip fingerprint and photo, use a nickname if the app allows, and ask the class teacher whether the school has approved this app; if not, use the textbook",
          "Enter a classmate's name so your data is hidden",
          "Give the fingerprint only, because marks matter more than fingers",
        ],
        optionsSw: [
          "Bonyeza Ruhusu; bure na maarufu inamaanisha salama",
          "Ruka kidole na picha, tumia jina la utani programu ikiruhusu, na muulize mwalimu wa darasa kama shule imeidhinisha programu hii; kama sivyo, tumia kitabu cha kiada",
          "Weka jina la mwanafunzi mwenzako ili data yako ifichike",
          "Toa kidole tu, kwa sababu alama ni muhimu kuliko vidole",
        ],
        correctIndex: 1,
        hintsEn: [
          "Popular and free is a business model, not a safety certificate.",
          "Correct. Minimise what you give, skip biometrics, and prefer school-approved tools or the book.",
          "Entering a classmate's name moves the harm onto them.",
          "A fingerprint is hard to change if the company leaks it. Marks can be raised with a book.",
        ],
        hintsSw: [
          "Maarufu na bure ni mtindo wa biashara, si cheti cha usalama.",
          "Sahihi. Punguza unachotoa, ruka kibayometriki, na pendelea zana zilizoidhinishwa na shule au kitabu.",
          "Kuweka jina la mwenzako kunahamisha madhara kwake.",
          "Alama ya kidole ni ngumu kubadilisha kampuni ikivuja. Alama za mtihani zinaweza kupanda kwa kitabu.",
        ],
        explainEn:
          "Do not store biometrics in unvetted apps. Give the least data you can. Ask the school.",
        explainSw:
          "Usihifadhi data ya kibayometriki kwenye programu ambazo hazijakaguliwa. Toa data ndogo unayoweza. Uliza shule.",
      }),
      quiz(
        "Under Kenya's Data Protection Act, 2019, who should be able to explain why a school app holds your marks?",
        "Chini ya Sheria ya Ulinzi wa Data, 2019, nani anapaswa kuweza kueleza kwa nini programu ya shule inashika alama zako?",
        [
          "Only the app company, because they built it",
          "The school, as the organisation that chose the app and is responsible for the learners' data",
          "Only UNESCO",
          "No one; marks are not personal data",
        ],
        [
          "Kampuni ya programu tu, kwa sababu ndiyo iliyoitengeneza",
          "Shule, kama taasisi iliyochagua programu na inayowajibika kwa data ya wanafunzi",
          "UNESCO tu",
          "Hakuna; alama si data binafsi",
        ],
        1,
        "Marks with a name are personal data. The school remains responsible even when a vendor runs the software.",
        "Alama zenye jina ni data binafsi. Shule inabaki kuwajibika hata muuzaji akitumia programu."
      ),
      note(
        "Try it: what does the school already hold?",
        "Jaribu: shule inashika nini tayari?",
        `With a parent, guardian or class teacher, list four things the school already stores about you: for example a photo, a report, an attendance book, a medical note.

- For each one, write who is allowed to see it.
- Put a question mark beside anything you are not sure about.
- Add one line: "We will not add fingerprints or face scans unless the school explains in writing."

Bring the list to the checkpoint unit. You do not need the app's legal policy. You need the habit of asking.`,
        `Pamoja na mzazi, mlezi au mwalimu wa darasa, orodhesha vitu vinne ambavyo shule tayari inahifadhi kukuhusu: kwa mfano picha, ripoti, daftari la mahudhurio, maelezo ya kiafya.

- Kwa kila kimoja, andika nani anayeruhusiwa kukiona.
- Weka alama ya swali kando ya chochote usicho na uhakika nacho.
- Ongeza mstari mmoja: "Hatuongezi alama za vidole wala skani za uso isipokuwa shule inaeleza kwa maandishi."

Leta orodha kwenye somo la kituo cha kukagua. Huhitaji sera ya kisheria ya programu. Unahitaji tabia ya kuuliza.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- School apps hold personal data. The school must explain why.
- No fingerprints or face scans in unvetted apps.
- Next unit: checkpoint. You will put the whole beginner track into one honest week.`,
        `- Programu za shule zinahifadhi data binafsi. Shule lazima ieleze kwa nini.
- Hakuna alama za vidole wala skani za uso kwenye programu ambazo hazijakaguliwa.
- Somo linalofuata: kituo cha kukagua. Utaweka mfululizo wote wa mwanzoni katika wiki moja ya uaminifu.`
      ),
    ],
  },
  {
    id: "edu-b-u12",
    titleEn: "Checkpoint: an honest week with AI",
    titleSw: "Kituo cha kukagua: wiki ya uaminifu na AI",
    cards: [
      note(
        "Put the habits in one week, on purpose",
        "Weka tabia katika wiki moja, kwa makusudi",
        `This unit does not add a new tool. It asks you to live the previous eleven for seven days.

An honest week looks like this:

- You meet AI in ordinary places (unit 1) and you still name it.
- You think first, then ask for a quiz or an explanation, not a finished answer (unit 2).
- You follow the teacher's rule and you disclose (units 3 and 8).
- You check the textbook (unit 4).
- You type no classmate's name, photo, mark or voice into a public tool (unit 5).
- You read Kiswahili slowly, with a kamusi (unit 6).
- A parent or guardian sits with younger learners (unit 7).
- You share time, not answer dumps (unit 9).
- You read set-book pages before any summary (unit 10).
- You refuse casual biometrics and you ask who sees your marks (unit 11).

UNESCO's 2023 guidance is the adult version of the same list: keep a human in charge, protect data, stay honest, and do not let tools widen the gap between those with phones and those without.

If you are 8 to 10 and you only completed units 1 to 5, your checkpoint is smaller and still complete: guess, think, honesty, book, privacy. Add the rest as you grow.`,
        `Somo hili haliongezi zana mpya. Linakuomba uishi yale kumi na moja yaliyopita kwa siku saba.

Wiki ya uaminifu inaonekana hivi:

- Unakutana na AI mahali pa kawaida (somo la 1) na bado unaitaja.
- Unafikiri kwanza, kisha unaomba jaribio au maelezo, si jibu lililokamilika (somo la 2).
- Unafuata sheria ya mwalimu na unaeleza wazi (masomo ya 3 na 8).
- Unakagua kitabu cha kiada (somo la 4).
- Huandiki jina, picha, alama wala sauti ya mwenzako kwenye zana ya hadhara (somo la 5).
- Unasoma Kiswahili polepole, na kamusi (somo la 6).
- Mzazi au mlezi hukaa na wanafunzi wadogo (somo la 7).
- Unagawanya muda, si mwagaji wa majibu (somo la 9).
- Unasoma kurasa za kitabu teule kabla ya muhtasari wowote (somo la 10).
- Unakataa kibayometriki cha mchezo na unauliza nani anaona alama zako (somo la 11).

Mwongozo wa UNESCO wa 2023 ni toleo la watu wazima la orodha ileile: binadamu abaki msimamizi, linda data, kuwa mwaminifu, na usiruhusu zana zipanue pengo kati ya wenye simu na wasio nazo.

Ukiwa na miaka 8 hadi 10 na umekamilisha masomo ya 1 hadi 5 tu, kituo chako ni kidogo na bado kamili: makisio, fikira, uaminifu, kitabu, faragha. Ongeza yaliyobaki unapokua.`
      ),
      reveal([
        {
          termEn: "Checkpoint",
          termSw: "Kituo cha kukagua",
          defEn: "A pause to practise the whole set of habits on real work, not to learn a new slogan.",
          defSw: "Pumziko la kufanya mazoezi ya seti nzima ya tabia kwenye kazi halisi, si kujifunza kauli mpya.",
        },
        {
          termEn: "Human in charge",
          termSw: "Binadamu msimamizi",
          defEn: "You, your teacher or your parent decides. The tool drafts or guesses.",
          defSw: "Wewe, mwalimu au mzazi ndiye anaamua. Zana inaandaa rasimu au hukisia.",
        },
        {
          termEn: "Integrity pack",
          termSw: "Kifurushi cha uadilifu",
          defEn: "Rule plus disclosure plus textbook check plus no one else's data.",
          defSw: "Sheria pamoja na kueleza wazi pamoja na ukaguzi wa kitabu pamoja na bila data ya mtu mwingine.",
        },
        {
          termEn: "Ready for more",
          termSw: "Tayari kwa zaidi",
          defEn: "If you teach or design school AI, the intermediate track comes next.",
          defSw: "Ukifundisha au kubuni AI ya shule, mfululizo wa kati ndio unaofuata.",
        },
      ]),
      note(
        "Worked example: Amina's seven days in Nyeri",
        "Mfano: siku saba za Amina Nyeri",
        `Amina is in Grade 8. She keeps a tiny table.

Monday: SMS suggestions on her mother's phone. She names them as AI in her list from unit 1.

Tuesday: fractions. She tries two sums on paper, asks the chatbot which step is wrong, checks the textbook, discloses.

Wednesday: a classmate wants to paste the marked Kiswahili insha into a group. Amina refuses and offers to study from the book together.

Thursday: she writes a disclosure line on a task that used no AI: "Hakuna AI iliyotumika."

Friday: computer lab, 40 minutes, 40 learners, 10 machines. She uses her turn to quiz herself, not to generate an essay for the weekend.

Saturday: her uncle offers a free app that wants a face scan. She and her mother say no.

Sunday: she reads two pages of a class reader, writes three events, and only then looks at any summary.

None of the days is dramatic. That is a successful checkpoint. Integrity is a week of small refusals and small checks, not a speech.`,
        `Amina yuko Gredi ya 8. Anaweka jedwali dogo.

Jumatatu: mapendekezo ya SMS kwenye simu ya mama. Anayataja kama AI kwenye orodha yake ya somo la 1.

Jumanne: sehemu. Anajaribu hesabu mbili kwenye karatasi, anauliza chatbot ni hatua ipi imeharibika, anakagua kitabu cha kiada, anaeleza wazi.

Jumatano: mwanafunzi mwenzako anataka kuweka insha ya Kiswahili iliyosahihishwa kwenye kundi. Amina anakataa na anatoa kusoma kutoka kitabu pamoja.

Alhamisi: anaandika sentensi ya kueleza wazi kwenye kazi isiyotumia AI: "Hakuna AI iliyotumika."

Ijumaa: maabara ya kompyuta, dakika 40, wanafunzi 40, mashine 10. Anatumia nafasi yake kujijaribu, si kuzalisha insha ya wikendi.

Jumamosi: mjomba anatoa programu ya bure inayotaka skani ya uso. Yeye na mama wanasema hapana.

Jumapili: anasoma kurasa mbili za kitabu cha darasa, anaandika matukio matatu, na ndipo tu anatazama muhtasari wowote.

Hakuna siku iliyo ya kushangaza. Hicho ni kituo chenye mafanikio. Uadilifu ni wiki ya kukataa vidogo na kukagua vidogo, si hotuba.`
      ),
      scenario({
        titleEn: "Scenario: the week goes wrong in one hour",
        titleSw: "Hali: wiki inaharibika kwa saa moja",
        situationEn:
          "On Friday, tired, Amina pastes a classmate's named, marked composition into a chatbot 'just to see the feedback', copies two improved paragraphs into her own book, and writes nothing at the bottom. Saturday she remembers this unit.",
        situationSw:
          "Ijumaa, amechoka, Amina anaweka insha ya mwenzake yenye jina na alama kwenye chatbot 'kuona maoni tu', ananakili aya mbili zilizoboreshwa kwenye daftari lake, na haandiki chochote chini. Jumamosi anakumbuka somo hili.",
        questionEn: "What is the honest repair?",
        questionSw: "Marekebisho ya uaminifu ni yapi?",
        optionsEn: [
          "Pretend Friday did not happen, because the rest of the week was good",
          "Stop using the copied paragraphs, tell the teacher what she typed and whose work it was, and redo her own composition without the classmate's script",
          "Add a disclosure now that says she only checked spelling",
          "Ask the classmate to say it was a joint project",
        ],
        optionsSw: [
          "Jifanye Ijumaa haikutokea, kwa sababu wiki nyingine ilikuwa nzuri",
          "Acha kutumia aya zilizonakiliwa, mwambie mwalimu alichoandika na kazi ya nani ilikuwa, na aandike insha yake upya bila maandishi ya mwenzake",
          "Ongeza sasa maelezo yasemayo alikagua tahajia tu",
          "Mwombe mwenzake aseme ilikuwa mradi wa pamoja",
        ],
        correctIndex: 1,
        hintsEn: [
          "A good week does not cancel a privacy harm and plagiarism in one hour.",
          "Correct. Repair is stopping the use, telling the teacher, and doing her own work. That is integrity after a miss, not a cover story.",
          "A false disclosure makes the miss worse.",
          "Asking the classmate to lie spreads the harm.",
        ],
        hintsSw: [
          "Wiki nzuri haifuti madhara ya faragha na wizi wa kazi katika saa moja.",
          "Sahihi. Marekebisho ni kuacha matumizi, kumwambia mwalimu, na kufanya kazi yake. Huo ni uadilifu baada ya kukosa, si kisa cha kuficha.",
          "Maelezo ya uwongo yanazidisha kosa.",
          "Kumwomba mwenzake danganya ni kusambaza madhara.",
        ],
        explainEn:
          "A checkpoint includes repair. Name the miss, stop the harm, redo the work, tell the teacher.",
        explainSw:
          "Kituo cha kukagua kinajumuisha marekebisho. Taja kosa, simamisha madhara, fanya kazi upya, mwambie mwalimu.",
      }),
      quiz(
        "Which list is the integrity pack for any piece of schoolwork?",
        "Orodha ipi ni kifurushi cha uadilifu kwa kazi yoyote ya shule?",
        [
          "Use the fastest tool, hide it, hope the detector misses you",
          "Follow the teacher's rule, think first, check the textbook, disclose, and keep classmates' data out",
          "Only disclose if you are in Form 4",
          "Trust any school app that says AI-powered",
        ],
        [
          "Tumia zana ya haraka zaidi, ifiche, uombee kichunguzi kikukose",
          "Fuata sheria ya mwalimu, fikiri kwanza, kagua kitabu cha kiada, eleza wazi, na uache data ya wanafunzi wenzako nje",
          "Eleza wazi tu ukiwa Kidato cha 4",
          "Amini programu yoyote ya shule inayosema ina AI",
        ],
        1,
        "The pack is the whole beginner track in one line. Speed, hiding, age exceptions and shiny apps are how weeks go wrong.",
        "Kifurushi ni mfululizo wote wa mwanzoni katika mstari mmoja. Kasi, kuficha, kutokuwa na umri na programu zenye mng'ao ndivyo wiki zinavyoharibika."
      ),
      note(
        "Try it: live the week, then fill the table",
        "Jaribu: ishi wiki, kisha jaza jedwali",
        `Draw a table with seven rows (days) and five columns: Task; AI used? (yes/no/what for); Book check; Anyone else's data?; Disclosure line.

- Fill it for the next seven days. If you used no AI, still write the disclosure you would have used.
- Bring the table and the unit 1 "spot the AI" list to a parent, guardian or teacher.
- Circle one miss, if there was one, and write the repair.

Teachers: do not mark this table for style. Look for honesty. A table full of "no AI" can be true in a school with no devices. A table that hides a dump from WhatsApp is the failure.`,
        `Chora jedwali lenye safu saba (siku) na nguzo tano: Kazi; AI ilitumiwa? (ndiyo/hapana/kwa nini); Ukaguzi wa kitabu; Data ya mtu mwingine?; Sentensi ya kueleza wazi.

- Jaza kwa siku saba zijazo. Hukutumia AI, bado andika maelezo ungetumia.
- Leta jedwali na orodha ya somo la 1 ya "tambua AI" kwa mzazi, mlezi au mwalimu.
- Zungushia kosa moja, kama lilikuwa, na uandike marekebisho.

Walimu: msisahihishe jedwali hili kwa mtindo. Tafuteni uaminifu. Jedwali lenye "hakuna AI" linaweza kuwa la kweli katika shule isiyo na vifaa. Jedwali linaloficha mwagaji wa WhatsApp ndilo kushindwa.`
      ),
      note(
        "Carry forward",
        "Beba hili mbele",
        `- The beginner track is a pack: guess, think, honesty, book, privacy, Kiswahili care, adults, disclosure, fairness, set books, school data.
- Repair a miss; do not rewrite the week as perfect.
- If you teach, set tests or write school rules, continue on the intermediate track: adaptive tools, assessments, rubrics, retrieval, detectors, accessibility, workload and policy.`,
        `- Mfululizo wa mwanzoni ni kifurushi: makisio, fikira, uaminifu, kitabu, faragha, uangalifu wa Kiswahili, watu wazima, kueleza wazi, haki, vitabu teule, data ya shule.
- Rekibi kosa; usiandike wiki upya kama kamili.
- Ukifundisha, kutoa majaribio au kuandika sheria za shule, endelea kwenye mfululizo wa kati: zana zinazojirekebisha, tathmini, rubriki, utafutaji, vichunguzi, ufikivu, mzigo na sera.`
      ),
    ],
  },
];
