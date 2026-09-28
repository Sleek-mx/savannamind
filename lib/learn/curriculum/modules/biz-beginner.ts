import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * biz Beginner — Work and livelihoods. Units 1–5 form a complete safe
 * mini-course for children and adults (hustle tasks, records, drafts,
 * never share PIN/till secrets, check prices before sending). Units 6–12
 * build records, customers, scams, bilingual SMS, payment limits, a
 * practice prompt and a personal business AI plan.
 */
export const bizBeginnerUnits: CurriculumUnit[] = [
  // ------------------------------------------------------------------ u1
  {
    id: "biz-b-u1",
    titleEn: "AI for your hustle or shop",
    titleSw: "Akili bandia kwa biashara yako ndogo au duka",
    cards: [
      note(
        "What AI can do for a small business",
        "Akili bandia inaweza kufanya nini kwa biashara ndogo",
        `Artificial intelligence (AI) is software that learns patterns from many examples and then makes a guess: the next word, the likely answer, the best route. You met this idea in Foundations. Here we use it for work.

A hustle is any way you earn money: a duka, a mama mboga stall, a salon, a boda boda, a jua kali workshop, a small online shop. Every hustle is made of tasks. A task is one piece of work, like writing a price list, replying to a customer, counting stock or cutting hair.

AI is good at some tasks. It can draft a message, turn English into Kiswahili, list ideas for a promotion, or explain a word you do not know. A draft is a first version that you still have to check.

AI is bad at other tasks. It does not know your prices today. It does not know how many packets of unga are on your shelf. It has never met your customers. It cannot braid hair, weld a gate or ride a motorbike.

So think of AI as a helper that writes fast but knows nothing about your shop until you tell it. You stay the owner. You decide.`,
        `Akili bandia (AI) ni programu inayojifunza mifumo kutoka kwa mifano mingi, kisha inakisia: neno linalofuata, jibu linalowezekana, au njia bora. Ulikutana na wazo hili katika Misingi. Hapa tunalitumia kazini.

Hustle ni njia yoyote unayopata pesa: duka, kibanda cha mama mboga, saluni, boda boda, karakana ya jua kali, au duka dogo la mtandaoni. Kila biashara imeundwa na kazi ndogo ndogo. Kazi moja ni kipande kimoja cha kazi, kama kuandika orodha ya bei, kumjibu mteja, kuhesabu bidhaa au kunyoa nywele.

AI inaweza kusaidia katika baadhi ya kazi. Inaweza kuandika rasimu ya ujumbe, kutafsiri Kiingereza kuwa Kiswahili, kuorodhesha mawazo ya ofa, au kukueleza neno usilolijua. Rasimu ni toleo la kwanza ambalo bado lazima ulikague.

AI haiwezi kazi nyingine. Haijui bei zako za leo. Haijui una pakiti ngapi za unga rafuni. Haijawahi kukutana na wateja wako. Haiwezi kusuka nywele, kuchomelea lango au kuendesha pikipiki.

Kwa hiyo ione AI kama msaidizi anayeandika haraka lakini hajui chochote kuhusu duka lako mpaka umwambie. Wewe unabaki mwenye biashara. Wewe ndiye unayeamua.`,
        "/learn/content/biz/mama-mboga-duka.jpg"
      ),
      reveal([
        {
          termEn: "Hustle",
          termSw: "Hustle (biashara ndogo)",
          defEn: "Any way you earn a living, from a duka to boda boda work to selling online.",
          defSw: "Njia yoyote ya kujipatia riziki, kuanzia duka hadi kazi ya boda boda au kuuza mtandaoni.",
        },
        {
          termEn: "Task",
          termSw: "Kazi moja",
          defEn: "One piece of work inside your business, such as replying to a customer or counting stock.",
          defSw: "Kipande kimoja cha kazi ndani ya biashara yako, kama kumjibu mteja au kuhesabu bidhaa.",
        },
        {
          termEn: "Draft",
          termSw: "Rasimu",
          defEn: "A first version of a message or document that a person must check and correct before using.",
          defSw: "Toleo la kwanza la ujumbe au hati ambalo mtu lazima alikague na kulisahihisha kabla ya kulitumia.",
        },
        {
          termEn: "AI tool",
          termSw: "Zana ya AI",
          defEn: "An app or website that uses AI, such as a chatbot, voice typing or a translation app.",
          defSw: "Programu au tovuti inayotumia AI, kama chatbot, kuandika kwa sauti au programu ya kutafsiri.",
        },
      ]),
      note(
        "Worked example: Akinyi's salon week",
        "Mfano: wiki ya saluni ya Akinyi",
        `Imagine Akinyi runs a small salon in Kisumu. She writes down her tasks for one week and how long each takes.

- Braiding and styling clients: 38 hours
- Replying to WhatsApp bookings: 5 hours
- Writing a new price list and a promotion post: 2 hours
- Buying supplies in town: 4 hours
- Counting cash and M-Pesa at night: 3 hours

Total: 38 + 5 + 2 + 4 + 3 = 52 hours.

Step 1. Which tasks are about words? Replying to bookings and writing the price list. AI can draft these.

Step 2. Which tasks need her hands, her eyes or her money? Braiding, buying supplies and counting cash. AI cannot do these.

Step 3. How much time could AI save? Suppose drafting cuts the price list work from 2 hours to 1 hour, and ready-made reply drafts cut booking replies from 5 hours to 4 hours. She saves 2 hours out of 52.

Step 4. Where can it go wrong? If a draft says "Braids from KES 800" but her real price is KES 1,200, she loses KES 400 on every client who holds her to it. The saving only counts if she checks every draft.

Lesson: AI helps with a small part of the week. The biggest parts of her work stay human.`,
        `Fikiria Akinyi ana saluni ndogo mjini Kisumu. Anaandika kazi zake za wiki moja na muda kila kazi inachukua.

- Kusuka na kutengeneza nywele za wateja: saa 38
- Kujibu miadi kwenye WhatsApp: saa 5
- Kuandika orodha mpya ya bei na tangazo la ofa: saa 2
- Kununua vifaa mjini: saa 4
- Kuhesabu pesa taslimu na M-Pesa usiku: saa 3

Jumla: 38 + 5 + 2 + 4 + 3 = saa 52.

Hatua ya 1. Kazi zipi zinahusu maneno? Kujibu miadi na kuandika orodha ya bei. AI inaweza kuandika rasimu za hizi.

Hatua ya 2. Kazi zipi zinahitaji mikono yake, macho yake au pesa zake? Kusuka, kununua vifaa na kuhesabu pesa. AI haiwezi kufanya hizi.

Hatua ya 3. AI inaweza kuokoa muda kiasi gani? Tuseme rasimu zinapunguza kazi ya orodha ya bei kutoka saa 2 hadi saa 1, na majibu yaliyoandaliwa yanapunguza kujibu miadi kutoka saa 5 hadi saa 4. Anaokoa saa 2 kati ya 52.

Hatua ya 4. Kosa linaweza kutokea wapi? Rasimu ikisema "Kusuka kuanzia KES 800" lakini bei yake halisi ni KES 1,200, atapoteza KES 400 kwa kila mteja atakayedai bei hiyo. Muda uliookolewa una maana tu akikagua kila rasimu.

Funzo: AI inasaidia sehemu ndogo ya wiki. Sehemu kubwa za kazi yake zinabaki za binadamu.`
      ),
      quiz(
        "Which task in a duka is AI most suited to help with?",
        "Ni kazi ipi ya duka ambayo AI inafaa zaidi kusaidia?",
        [
          "Deciding today's price of sugar without being told anything",
          "Drafting a polite Kiswahili reply to a customer asking about opening hours",
          "Counting how many bars of soap are left on the shelf",
          "Deciding which customer can be trusted to buy on credit",
        ],
        [
          "Kuamua bei ya sukari leo bila kuambiwa chochote",
          "Kuandika rasimu ya jibu la heshima kwa Kiswahili kwa mteja anayeuliza saa za kufungua",
          "Kuhesabu vipande vya sabuni vilivyobaki rafuni",
          "Kuamua mteja yupi anaweza kuaminiwa kukopa bidhaa",
        ],
        1,
        "AI is strong at drafting words. It cannot see your shelf, does not know your costs, and does not know your customers, so pricing, counting and credit decisions stay with you.",
        "AI ina nguvu katika kuandika rasimu za maneno. Haioni rafu yako, haijui gharama zako, na haiwajui wateja wako, kwa hiyo maamuzi ya bei, kuhesabu na mkopo yanabaki kwako."
      ),
      scenario({
        titleEn: "Scenario: the price advice",
        titleSw: "Hali: ushauri wa bei",
        situationEn:
          "Otieno sells chapati and tea at a matatu stage in Kisii. He asks a chatbot, \"How can I make more money?\" It replies: \"Raise your chapati price to KES 50. Customers will pay more for quality.\" He sells chapati at KES 20 and most of his customers are conductors and touts.",
        situationSw:
          "Otieno anauza chapati na chai kwenye kituo cha matatu mjini Kisii. Anauliza chatbot, \"Nitapataje pesa zaidi?\" Inajibu: \"Panda bei ya chapati hadi KES 50. Wateja watalipa zaidi kwa ubora.\" Anauza chapati kwa KES 20 na wateja wake wengi ni makondakta na wapiga debe.",
        questionEn: "What should Otieno do with this advice?",
        questionSw: "Otieno afanye nini na ushauri huu?",
        optionsEn: [
          "Raise the price to KES 50 tomorrow because the chatbot sounded sure",
          "Treat it as one idea, compare with prices at nearby stalls and his own costs, and maybe test a small change",
          "Stop using AI completely because this answer was bad",
          "Ask the chatbot again and follow whichever answer comes second",
        ],
        optionsSw: [
          "Kupandisha bei hadi KES 50 kesho kwa sababu chatbot ilionekana na uhakika",
          "Kuuchukulia kama wazo moja, kulinganisha na bei za vibanda vya karibu na gharama zake, na labda kujaribu mabadiliko madogo",
          "Kuacha kutumia AI kabisa kwa sababu jibu hili lilikuwa baya",
          "Kuuliza chatbot tena na kufuata jibu la pili",
        ],
        correctIndex: 1,
        hintsEn: [
          "A confident tone is not evidence. The chatbot does not know his customers, the stage or what other stalls charge. Jumping from KES 20 to KES 50 could empty his stall.",
          "Right. The chatbot knew nothing about his stage, so its number is a guess. He checks real prices and his cost per chapati, then decides, perhaps trying KES 25 for one week.",
          "One weak answer does not make the tool useless. The lesson is to give it better information and to check, not to throw it away.",
          "Asking again gives another guess from the same tool, which still knows nothing about his stage. The second answer is not more reliable than the first.",
        ],
        hintsSw: [
          "Sauti ya uhakika si ushahidi. Chatbot haiwajui wateja wake, kituo, wala bei za vibanda vingine. Kuruka kutoka KES 20 hadi KES 50 kunaweza kuwafukuza wateja wote.",
          "Sawa. Chatbot haikujua chochote kuhusu kituo chake, kwa hiyo namba yake ni makisio. Anakagua bei halisi na gharama ya chapati moja, kisha anaamua, labda kwa kujaribu KES 25 kwa wiki moja.",
          "Jibu moja dhaifu halifanyi zana isiwe na faida. Funzo ni kuipa taarifa bora na kukagua, si kuitupa.",
          "Kuuliza tena kunatoa makisio mengine kutoka kwa zana ile ile, ambayo bado haijui chochote kuhusu kituo chake. Jibu la pili si la kuaminika zaidi kuliko la kwanza.",
        ],
        explainEn:
          "AI advice about your business is only as good as what it knows about your business. Treat it as an idea to test against real prices, real costs and real customers.",
        explainSw:
          "Ushauri wa AI kuhusu biashara yako ni mzuri tu kwa kiasi cha inachojua kuhusu biashara yako. Uchukulie kama wazo la kujaribu dhidi ya bei halisi, gharama halisi na wateja halisi.",
      }),
      note(
        "Try it: your task list",
        "Jaribu: orodha ya kazi zako",
        `Take a piece of paper or your phone notes. Do this today.

- Write down 10 tasks you do in a normal week of work or business.
- Next to each, write about how many hours it takes.
- Mark W for tasks that are mostly words: messages, lists, posts, letters.
- Mark H for tasks that need your hands, eyes, money or judgement about people.
- Circle one W task. That is where you will try AI first in this course.

If you are still in school or looking for work, list the tasks of a business you know well, such as a relative's duka or kiosk.`,
        `Chukua karatasi au daftari la simu yako. Fanya hivi leo.

- Andika kazi 10 unazofanya katika wiki ya kawaida ya kazi au biashara.
- Kando ya kila kazi, andika inachukua takriban saa ngapi.
- Weka alama M kwa kazi ambazo kwa kiasi kikubwa ni maneno: jumbe, orodha, matangazo, barua.
- Weka alama K kwa kazi zinazohitaji mikono, macho, pesa au busara yako kuhusu watu.
- Zungushia duara kazi moja yenye M. Hapo ndipo utajaribu AI kwanza katika kozi hii.

Kama bado uko shuleni au unatafuta kazi, orodhesha kazi za biashara unayoijua vizuri, kama duka au kibanda cha jamaa yako.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- AI guesses from patterns. It is fast with words but knows nothing about your shop until you tell it.
- Split your work into tasks. AI helps with some word tasks, not with the whole business.
- Every AI output is a draft. You check it before a customer sees it.
- Next unit: your sales book and M-Pesa records are data, and they are what makes any advice useful.`,
        `- AI inakisia kutokana na mifumo. Ni ya haraka kwa maneno lakini haijui chochote kuhusu duka lako mpaka umwambie.
- Gawanya kazi yako katika kazi ndogo. AI inasaidia katika baadhi ya kazi za maneno, si biashara nzima.
- Kila kitu AI inachotoa ni rasimu. Wewe unakikagua kabla mteja hajakiona.
- Kitengo kijacho: daftari lako la mauzo na rekodi za M-Pesa ni data, na ndizo zinazofanya ushauri wowote uwe na maana.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u2
  {
    id: "biz-b-u2",
    titleEn: "Your records are data",
    titleSw: "Rekodi zako ni data",
    cards: [
      note(
        "Why your sales book matters",
        "Kwa nini daftari lako la mauzo ni muhimu",
        `Data is facts that someone wrote down or a machine saved. In a business, data is your sales book, your stock list, your list of who owes you money (the deni book), and your M-Pesa statement.

One written line, such as "Tuesday, 3 kg tomatoes, KES 240, cash", is called a record. Many records together make a dataset.

Why does this matter for AI? AI finds patterns in data. A pattern is something that repeats: more sales on Saturday, fewer sales when it rains, more airtime sold at month end. If you have no records, no person and no AI can find your patterns. They can only guess from other people's businesses, which may be nothing like yours.

Your records also have gaps. An M-Pesa statement shows only money paid through M-Pesa. Cash sales are not in it. Goods given on credit are not in it until the customer pays. So a statement alone can make a good week look bad, or hide who owes you.

Good records are complete (every sale, cash and M-Pesa), dated, and written the same way every day.`,
        `Data ni ukweli ambao mtu aliandika au mashine ilihifadhi. Katika biashara, data ni daftari lako la mauzo, orodha ya bidhaa, orodha ya wanaokudai (daftari la deni), na taarifa yako ya M-Pesa.

Mstari mmoja ulioandikwa, kama "Jumanne, nyanya kilo 3, KES 240, pesa taslimu", unaitwa rekodi. Rekodi nyingi pamoja zinaunda seti ya data.

Kwa nini hili ni muhimu kwa AI? AI hutafuta mifumo katika data. Mfumo ni jambo linalojirudia: mauzo zaidi Jumamosi, mauzo machache mvua ikinyesha, muda wa maongezi (airtime) zaidi mwisho wa mwezi. Kama huna rekodi, hakuna mtu wala AI anayeweza kupata mifumo yako. Wanaweza tu kukisia kutoka kwa biashara za watu wengine, ambazo huenda hazifanani kabisa na yako.

Rekodi zako pia zina mapengo. Taarifa ya M-Pesa inaonyesha pesa zilizolipwa kupitia M-Pesa pekee. Mauzo ya pesa taslimu hayamo. Bidhaa zilizotolewa kwa mkopo hazimo mpaka mteja alipe. Kwa hiyo taarifa pekee inaweza kufanya wiki nzuri ionekane mbaya, au kuficha nani anakudai.

Rekodi nzuri ni kamili (kila mauzo, taslimu na M-Pesa), zina tarehe, na zinaandikwa kwa njia ile ile kila siku.`
      ),
      reveal([
        {
          termEn: "Record",
          termSw: "Rekodi",
          defEn: "One written line about one event, such as one sale with its date, item, amount and how it was paid.",
          defSw: "Mstari mmoja ulioandikwa kuhusu tukio moja, kama mauzo moja pamoja na tarehe, bidhaa, kiasi na jinsi yalivyolipwa.",
        },
        {
          termEn: "Dataset",
          termSw: "Seti ya data",
          defEn: "Many records kept together, such as a month of your sales book.",
          defSw: "Rekodi nyingi zilizowekwa pamoja, kama mwezi mzima wa daftari lako la mauzo.",
        },
        {
          termEn: "Pattern",
          termSw: "Mfumo (pattern)",
          defEn: "Something in the data that repeats, such as higher sales every Friday.",
          defSw: "Jambo katika data linalojirudia, kama mauzo makubwa kila Ijumaa.",
        },
        {
          termEn: "Gap",
          termSw: "Pengo",
          defEn: "Missing information, such as cash sales that never appear on an M-Pesa statement.",
          defSw: "Taarifa inayokosekana, kama mauzo ya pesa taslimu ambayo hayaonekani kamwe kwenye taarifa ya M-Pesa.",
        },
      ]),
      note(
        "Worked example: Nyambura's vegetable week",
        "Mfano: wiki ya mboga ya Nyambura",
        `Imagine Nyambura is a mama mboga in Githurai. For one week she writes down every sale, split into cash and M-Pesa.

- Monday: cash 900, M-Pesa 600, total 1,500
- Tuesday: cash 800, M-Pesa 500, total 1,300
- Wednesday: cash 1,000, M-Pesa 700, total 1,700
- Thursday: cash 900, M-Pesa 700, total 1,600
- Friday: cash 1,400, M-Pesa 1,100, total 2,500
- Saturday: cash 1,600, M-Pesa 1,400, total 3,000
- Sunday: closed

Step 1. Add the week. Cash: 900 + 800 + 1,000 + 900 + 1,400 + 1,600 = 6,600. M-Pesa: 600 + 500 + 700 + 700 + 1,100 + 1,400 = 5,000. Total: 11,600 KES.

Step 2. Find the pattern. Friday and Saturday together bring 5,500, almost half the week. So she should buy more sukuma and tomatoes on Thursday evening and Friday.

Step 3. See the gap. If she looked only at her M-Pesa statement, she would think the week earned 5,000. She would miss 6,600 in cash, more than half her sales.

Step 4. See what goes wrong. On Wednesday she forgot to write two cash sales, about KES 150. Small gaps like this add up. Over a month, forgetting KES 150 a day for 26 working days hides 3,900 KES.

Lesson: the pattern is only as true as the record. Write every sale.`,
        `Fikiria Nyambura ni mama mboga mtaani Githurai. Kwa wiki moja anaandika kila mauzo, akitenganisha pesa taslimu na M-Pesa.

- Jumatatu: taslimu 900, M-Pesa 600, jumla 1,500
- Jumanne: taslimu 800, M-Pesa 500, jumla 1,300
- Jumatano: taslimu 1,000, M-Pesa 700, jumla 1,700
- Alhamisi: taslimu 900, M-Pesa 700, jumla 1,600
- Ijumaa: taslimu 1,400, M-Pesa 1,100, jumla 2,500
- Jumamosi: taslimu 1,600, M-Pesa 1,400, jumla 3,000
- Jumapili: amefunga

Hatua ya 1. Jumlisha wiki. Taslimu: 900 + 800 + 1,000 + 900 + 1,400 + 1,600 = 6,600. M-Pesa: 600 + 500 + 700 + 700 + 1,100 + 1,400 = 5,000. Jumla: KES 11,600.

Hatua ya 2. Tafuta mfumo. Ijumaa na Jumamosi pamoja zinaleta 5,500, karibu nusu ya wiki. Kwa hiyo anapaswa kununua sukuma na nyanya zaidi Alhamisi jioni na Ijumaa.

Hatua ya 3. Ona pengo. Kama angeangalia taarifa yake ya M-Pesa pekee, angedhani wiki ilileta 5,000. Angekosa 6,600 za taslimu, zaidi ya nusu ya mauzo yake.

Hatua ya 4. Ona kosa. Jumatano alisahau kuandika mauzo mawili ya taslimu, takriban KES 150. Mapengo madogo kama haya yanajumlika. Kwa mwezi, kusahau KES 150 kila siku kwa siku 26 za kazi kunaficha KES 3,900.

Funzo: mfumo ni wa kweli kwa kiasi cha ukweli wa rekodi. Andika kila mauzo.`
      ),
      quiz(
        "Nyambura's M-Pesa statement shows KES 5,000 for the week, but her sales book shows KES 11,600. What best explains the difference?",
        "Taarifa ya M-Pesa ya Nyambura inaonyesha KES 5,000 kwa wiki, lakini daftari lake la mauzo linaonyesha KES 11,600. Nini kinaeleza tofauti hii vizuri zaidi?",
        [
          "The M-Pesa statement is wrong and should be ignored",
          "The statement only shows M-Pesa payments; cash sales are recorded only in her book",
          "She must have written the book wrongly, since the statement comes from a computer",
          "The difference is her profit for the week",
        ],
        [
          "Taarifa ya M-Pesa si sahihi na inapaswa kupuuzwa",
          "Taarifa inaonyesha malipo ya M-Pesa pekee; mauzo ya taslimu yameandikwa kwenye daftari lake tu",
          "Lazima aliandika daftari vibaya, kwa kuwa taarifa inatoka kwa kompyuta",
          "Tofauti hiyo ni faida yake ya wiki",
        ],
        1,
        "Each record source sees only part of the business. The statement is correct for M-Pesa, and the book adds cash. Neither number is profit, because profit is sales minus what she paid for stock and other costs.",
        "Kila chanzo cha rekodi kinaona sehemu tu ya biashara. Taarifa ni sahihi kwa M-Pesa, na daftari linaongeza taslimu. Hakuna namba kati ya hizi iliyo faida, kwa sababu faida ni mauzo ukitoa ulicholipa kwa bidhaa na gharama nyingine."
      ),
      scenario({
        titleEn: "Scenario: advice from half the data",
        titleSw: "Hali: ushauri kutoka nusu ya data",
        situationEn:
          "Juma runs a hardware shop in Machakos. He copies only his M-Pesa till totals for three months into a spreadsheet and asks an AI tool to tell him his best-selling month. Many of his builder customers pay in cash, and some take cement on credit and pay at the end of the job.",
        situationSw:
          "Juma ana duka la vifaa vya ujenzi mjini Machakos. Ananakili jumla za till yake ya M-Pesa pekee kwa miezi mitatu kwenye spreadsheet na kuiomba zana ya AI imwambie mwezi aliouza zaidi. Mafundi wengi wanaomnunulia hulipa taslimu, na baadhi huchukua saruji kwa mkopo na kulipa kazi ikiisha.",
        questionEn: "How much should Juma trust the answer?",
        questionSw: "Juma aamini jibu hilo kwa kiasi gani?",
        optionsEn: [
          "Fully, because the AI calculated it from real numbers",
          "Only a little, because cash and credit sales are missing, so the busiest month could look quiet",
          "Not at all, because AI cannot read spreadsheets",
          "Fully, as long as he asks it to double-check its maths",
        ],
        optionsSw: [
          "Kikamilifu, kwa sababu AI ilihesabu kutoka kwa namba halisi",
          "Kidogo tu, kwa sababu mauzo ya taslimu na ya mkopo hayamo, kwa hiyo mwezi wenye shughuli nyingi unaweza kuonekana mtulivu",
          "Hata kidogo, kwa sababu AI haiwezi kusoma spreadsheet",
          "Kikamilifu, ilimradi aiombe ikague hesabu zake mara mbili",
        ],
        correctIndex: 1,
        hintsEn: [
          "The numbers are real but incomplete. Correct maths on half the data still gives a half-true answer.",
          "Right. The tool can only see what he gave it. He should add cash sales and credit sales from his books, then ask again.",
          "Many AI tools can work with numbers from a spreadsheet. The problem here is missing data, not the tool's ability.",
          "Checking the maths does not bring back the missing cash and credit sales. The error is in the data, not in the adding.",
        ],
        hintsSw: [
          "Namba ni halisi lakini hazijakamilika. Hesabu sahihi kwenye nusu ya data bado inatoa jibu la nusu ukweli.",
          "Sawa. Zana inaweza kuona tu alichoipa. Anapaswa kuongeza mauzo ya taslimu na ya mkopo kutoka kwenye madaftari yake, kisha aulize tena.",
          "Zana nyingi za AI zinaweza kufanya kazi na namba kutoka kwa spreadsheet. Tatizo hapa ni data inayokosekana, si uwezo wa zana.",
          "Kukagua hesabu hakurudishi mauzo ya taslimu na ya mkopo yaliyokosekana. Kosa liko kwenye data, si kwenye kujumlisha.",
        ],
        explainEn:
          "An answer can never be better than the data behind it. Before asking AI about your business, make sure the records cover every way money comes in.",
        explainSw:
          "Jibu haliwezi kamwe kuwa bora kuliko data iliyo nyuma yake. Kabla ya kuuliza AI kuhusu biashara yako, hakikisha rekodi zinahusu kila njia pesa inaingia.",
      }),
      note(
        "Try it: start a simple sales book",
        "Jaribu: anza daftari rahisi la mauzo",
        `You need only an exercise book and a pen. Rule five columns across the page:

- Date
- Item (for example "sukuma, 2 bunches")
- Amount in KES
- Paid by: cash, M-Pesa, or credit
- Notes (rain, market day, school opening, a big order)

Write every sale for 7 days. At the end of each day, add the cash column and the M-Pesa column separately. Check the M-Pesa total against your phone.

After 7 days, circle your best day and your worst day. Write one sentence about why you think they were different. That sentence is your first pattern. If you are not running a business, keep the same book for your own spending for a week.`,
        `Unahitaji tu daftari na kalamu. Chora safu tano kwenye ukurasa:

- Tarehe
- Bidhaa (kwa mfano "sukuma, mafungu 2")
- Kiasi kwa KES
- Imelipwa kwa: taslimu, M-Pesa, au mkopo
- Maelezo (mvua, siku ya soko, kufunguliwa kwa shule, oda kubwa)

Andika kila mauzo kwa siku 7. Mwisho wa kila siku, jumlisha safu ya taslimu na safu ya M-Pesa kila moja peke yake. Linganisha jumla ya M-Pesa na simu yako.

Baada ya siku 7, zungushia duara siku yako bora na siku yako mbaya zaidi. Andika sentensi moja kuhusu kwa nini unadhani zilitofautiana. Sentensi hiyo ndiyo mfumo wako wa kwanza. Kama huna biashara, weka daftari hilo hilo kwa matumizi yako mwenyewe kwa wiki moja.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Your sales book, stock list, deni book and M-Pesa statement are data.
- Patterns come from complete, dated records written the same way every day.
- An M-Pesa statement misses cash and unpaid credit. Keep both.
- Next unit: using AI to draft customer messages, and checking the prices and promises before you send.`,
        `- Daftari lako la mauzo, orodha ya bidhaa, daftari la deni na taarifa ya M-Pesa ni data.
- Mifumo inatoka kwa rekodi kamili, zenye tarehe, zilizoandikwa kwa njia ile ile kila siku.
- Taarifa ya M-Pesa inakosa taslimu na mikopo ambayo haijalipwa. Weka zote mbili.
- Kitengo kijacho: kutumia AI kuandika rasimu za jumbe za wateja, na kukagua bei na ahadi kabla ya kutuma.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u3
  {
    id: "biz-b-u3",
    titleEn: "Customer messages and promotions",
    titleSw: "Jumbe za wateja na matangazo ya ofa",
    cards: [
      note(
        "AI drafts, you check",
        "AI inaandika rasimu, wewe unakagua",
        `A chatbot writes by predicting which words usually come next. It has read huge amounts of text, so its messages sound smooth and friendly. But it does not know your shop. When it lacks a fact, it often fills the space with something that sounds normal, such as a price, a date or "free delivery". This is called hallucination: the tool makes up details that look real.

In a customer message, invented details are dangerous. If you send "2 kg sugar for KES 150" and your real price is higher, customers will hold you to it. If you promise "free delivery anywhere", you may have to pay a boda to deliver to the other side of town. A wrong promise costs money and trust.

So use a simple rule. AI writes the words. You check the facts. Before any message goes out, check these five things:

- Prices: every number matches your real price today.
- Promises: delivery, discounts, guarantees and refunds are ones you really offer.
- Dates and times: the offer's start, end and your opening hours.
- Contacts: your real phone number, till number or location.
- Tone and language: polite, clear, and in the language your customers use.`,
        `Chatbot inaandika kwa kutabiri maneno ambayo kwa kawaida hufuata. Imesoma maandishi mengi sana, kwa hiyo jumbe zake zinasikika laini na za kirafiki. Lakini haijui duka lako. Inapokosa ukweli fulani, mara nyingi inajaza nafasi hiyo kwa kitu kinachosikika cha kawaida, kama bei, tarehe au "tunaleta bure". Hii inaitwa kubuni majibu (hallucination): zana inatunga maelezo yanayoonekana ya kweli.

Katika ujumbe wa mteja, maelezo yaliyobuniwa ni hatari. Ukituma "sukuma kilo 2 kwa KES 150" na bei yako halisi ni juu zaidi, wateja watakudai bei hiyo. Ukiahidi "tunaleta bure popote", huenda ukalazimika kumlipa boda kupeleka mzigo upande mwingine wa mji. Ahadi isiyo sahihi inagharimu pesa na uaminifu.

Kwa hiyo tumia kanuni rahisi. AI inaandika maneno. Wewe unakagua ukweli. Kabla ujumbe wowote haujatoka, kagua mambo haya matano:

- Bei: kila namba inalingana na bei yako halisi ya leo.
- Ahadi: kuleta mzigo, punguzo, dhamana na kurudisha pesa ni vitu unavyotoa kweli.
- Tarehe na saa: mwanzo na mwisho wa ofa, na saa zako za kufungua.
- Mawasiliano: namba yako halisi ya simu, namba ya till au mahali ulipo.
- Sauti na lugha: ya heshima, wazi, na kwa lugha wateja wako wanayotumia.`
      ),
      reveal([
        {
          termEn: "Hallucination",
          termSw: "Kubuni majibu (hallucination)",
          defEn: "When an AI tool makes up a detail, such as a price or a promise, that sounds real but is not true.",
          defSw: "Pale zana ya AI inapotunga maelezo, kama bei au ahadi, yanayosikika ya kweli lakini si kweli.",
        },
        {
          termEn: "Promotion",
          termSw: "Ofa (promotion)",
          defEn: "A message that tells customers about a special price or deal for a limited time.",
          defSw: "Ujumbe unaowaambia wateja kuhusu bei maalum au mpango maalum kwa muda fulani.",
        },
        {
          termEn: "Promise",
          termSw: "Ahadi",
          defEn: "Anything in a message that commits you, such as delivery, a refund or a guarantee.",
          defSw: "Kitu chochote katika ujumbe kinachokufunga, kama kuleta mzigo, kurudisha pesa au dhamana.",
        },
        {
          termEn: "Fact check",
          termSw: "Kukagua ukweli",
          defEn: "Comparing every price, date, contact and promise in a draft against what is really true for your business.",
          defSw: "Kulinganisha kila bei, tarehe, mawasiliano na ahadi katika rasimu na kilicho kweli kwa biashara yako.",
        },
      ]),
      note(
        "Worked example: Wanjiku's back-to-school promotion",
        "Mfano: ofa ya kufungua shule ya Wanjiku",
        `Imagine Wanjiku runs a duka near a primary school in Nyeri. She asks a chatbot: "Write a WhatsApp message for my back-to-school offer on exercise books and pens."

The draft comes back:

"Back to school deals at Wanjiku Stores! Exercise books only KES 30 each, pens 3 for KES 20. Free delivery anywhere in Nyeri. Offer valid all month. Call 0700 000 000."

She checks it line by line.

Step 1. Prices. Her real prices are KES 50 per exercise book and KES 15 per pen. The chatbot invented both numbers. Selling 100 books at KES 30 instead of KES 50 would lose her 100 x 20 = 2,000 KES.

Step 2. Promises. She does not deliver. "Free delivery anywhere in Nyeri" must go.

Step 3. Dates. Her offer is one week, Monday to Saturday, not all month.

Step 4. Contacts. The phone number is a made-up placeholder. She puts in her real number and her till number.

Step 5. Tone and language. Most parents in her area prefer Kiswahili, so she asks the tool for a Kiswahili version and reads it aloud to check it sounds natural.

Her final message: "Ofa ya kufungua shule, Wanjiku Stores! Nunua madaftari 5 upate kalamu 1 bure. Jumatatu hadi Jumamosi tu. Karibu dukani karibu na shule." She kept the friendly words and replaced every fact. The deal, one free pen for every five books, is one she chose and can afford.`,
        `Fikiria Wanjiku ana duka karibu na shule ya msingi mjini Nyeri. Anaiomba chatbot: "Niandikie ujumbe wa WhatsApp kwa ofa yangu ya kufungua shule kwa madaftari na kalamu."

Rasimu inarudi hivi:

"Ofa za kufungua shule Wanjiku Stores! Madaftari KES 30 tu kila moja, kalamu 3 kwa KES 20. Tunaleta bure popote Nyeri. Ofa ni ya mwezi mzima. Piga 0700 000 000."

Anaikagua mstari kwa mstari.

Hatua ya 1. Bei. Bei zake halisi ni KES 50 kwa daftari na KES 15 kwa kalamu. Chatbot ilibuni namba zote mbili. Kuuza madaftari 100 kwa KES 30 badala ya KES 50 kungempotezea 100 x 20 = KES 2,000.

Hatua ya 2. Ahadi. Hapeleki mizigo kwa wateja. "Tunaleta bure popote Nyeri" lazima iondolewe.

Hatua ya 3. Tarehe. Ofa yake ni ya wiki moja, Jumatatu hadi Jumamosi, si mwezi mzima.

Hatua ya 4. Mawasiliano. Namba ya simu ni ya kubuni tu. Anaweka namba yake halisi na namba yake ya till.

Hatua ya 5. Sauti na lugha. Wazazi wengi mtaani kwake wanapendelea Kiswahili, kwa hiyo anaiomba zana toleo la Kiswahili na analisoma kwa sauti kuhakikisha linasikika la kawaida.

Ujumbe wake wa mwisho: "Ofa ya kufungua shule, Wanjiku Stores! Nunua madaftari 5 upate kalamu 1 bure. Jumatatu hadi Jumamosi tu. Karibu dukani karibu na shule." Alibakiza maneno ya kirafiki na akabadilisha kila ukweli. Mpango huo, kalamu moja bure kwa kila madaftari matano, ni ule aliouchagua mwenyewe na anaoweza kuumudu.`
      ),
      scenario({
        titleEn: "Scenario: the smooth draft",
        titleSw: "Hali: rasimu laini",
        situationEn:
          "Kamau owns a small bakery in Thika. An AI tool drafts his weekend message: \"Fresh bread every morning from 6 am! Order 10 loaves and get 2 free. We guarantee your money back if you are not happy.\" Kamau opens at 7 am, his offer is 1 free loaf for 10, and he has never offered refunds.",
        situationSw:
          "Kamau ana mkate mdogo wa kuoka (bakery) mjini Thika. Zana ya AI inaandika ujumbe wake wa wikendi: \"Mkate mpya kila asubuhi kuanzia saa 12 alfajiri! Agiza mikate 10 upate 2 bure. Tunakuhakikishia kurudishiwa pesa kama hujaridhika.\" Kamau hufungua saa 1 asubuhi, ofa yake ni mkate 1 bure kwa kila 10, na hajawahi kurudisha pesa.",
        questionEn: "What is the best thing for Kamau to do?",
        questionSw: "Ni jambo lipi bora zaidi kwa Kamau kufanya?",
        optionsEn: [
          "Send it as it is, because customers like generous offers",
          "Fix the opening time and the offer, and remove the refund promise or replace it with a policy he really follows",
          "Fix only the offer, because opening times do not matter much",
          "Delete the whole draft and never use AI for messages",
        ],
        optionsSw: [
          "Kuutuma ulivyo, kwa sababu wateja hupenda ofa za ukarimu",
          "Kusahihisha saa ya kufungua na ofa, na kuondoa ahadi ya kurudisha pesa au kuweka sera anayoifuata kweli",
          "Kusahihisha ofa tu, kwa sababu saa za kufungua si muhimu sana",
          "Kufuta rasimu yote na kutotumia AI kamwe kwa jumbe",
        ],
        correctIndex: 1,
        hintsEn: [
          "A generous offer he cannot afford loses money on every order, and customers who arrive at 6 am to a closed door lose trust.",
          "Right. He keeps the friendly wording and makes every fact true: 7 am, 1 free loaf for 10, and no promise he will not keep.",
          "Customers who come at 6 am and find the door closed feel cheated. Every fact in the message matters, not only the price.",
          "The draft saved him writing time. Fixing three facts is quicker than writing from nothing. The problem is sending unchecked, not using AI.",
        ],
        hintsSw: [
          "Ofa ya ukarimu asiyoweza kuimudu inapoteza pesa kwa kila oda, na wateja wanaofika saa 12 alfajiri wakakuta mlango umefungwa wanapoteza imani.",
          "Sawa. Anabakiza maneno ya kirafiki na anafanya kila ukweli uwe sahihi: saa 1 asubuhi, mkate 1 bure kwa kila 10, na hakuna ahadi asiyoweza kuitimiza.",
          "Wateja wanaofika saa 12 alfajiri wakakuta mlango umefungwa wanahisi wamedanganywa. Kila ukweli katika ujumbe ni muhimu, si bei tu.",
          "Rasimu ilimwokolea muda wa kuandika. Kusahihisha mambo matatu ni haraka kuliko kuandika kuanzia mwanzo. Tatizo ni kutuma bila kukagua, si kutumia AI.",
        ],
        explainEn:
          "Every price, time and promise in a message is a commitment to customers. The AI's words can stay; its facts must be checked and replaced with yours.",
        explainSw:
          "Kila bei, saa na ahadi katika ujumbe ni ahadi kwa wateja. Maneno ya AI yanaweza kubaki; ukweli wake lazima ukaguliwe na ubadilishwe kwa ukweli wako.",
      }),
      quiz(
        "Why does a chatbot sometimes put a wrong price in your promotion?",
        "Kwa nini chatbot wakati mwingine huweka bei isiyo sahihi kwenye tangazo lako la ofa?",
        [
          "It checks prices online, and the internet was out of date",
          "It predicts words that usually fit, so when it does not know your price it writes one that sounds normal",
          "It is trying to help you sell more by lowering prices",
          "It only makes mistakes when you type in Kiswahili",
        ],
        [
          "Inakagua bei mtandaoni, na mtandao ulikuwa na taarifa za zamani",
          "Inatabiri maneno ambayo kwa kawaida yanafaa, kwa hiyo isipojua bei yako inaandika moja inayosikika ya kawaida",
          "Inajaribu kukusaidia kuuza zaidi kwa kushusha bei",
          "Inakosea tu unapoandika kwa Kiswahili",
        ],
        1,
        "A language model does not look up your shop. It writes likely-sounding words, so any fact you did not give it may be invented. The fix is to give it your real prices, and still check.",
        "Modeli ya lugha haitafuti taarifa za duka lako. Inaandika maneno yanayosikika kuwa sahihi, kwa hiyo ukweli wowote usioupa unaweza kuwa umebuniwa. Suluhisho ni kuipa bei zako halisi, na bado ukague."
      ),
      note(
        "Try it: the five-check habit",
        "Jaribu: tabia ya ukaguzi mitano",
        `Write the five checks on a small card and keep it near your phone: Prices, Promises, Dates, Contacts, Tone.

Now practise. If you can use an AI tool today, ask it to write a short promotion for your business or a business you know, but give it no prices. Read the draft and underline every price, promise, date and contact it invented. Count them.

Then ask again, this time giving your real prices, days and phone number. Compare the two drafts. You will see that the more true facts you give, the fewer things you have to fix.

No AI tool? Do the same check on any promotion SMS you have received this month. Ask yourself which promises the sender would really keep.`,
        `Andika ukaguzi mitano kwenye kadi ndogo na uiweke karibu na simu yako: Bei, Ahadi, Tarehe, Mawasiliano, Sauti.

Sasa fanya mazoezi. Kama unaweza kutumia zana ya AI leo, iombe ikuandikie tangazo fupi la ofa kwa biashara yako au biashara unayoijua, lakini usiipe bei yoyote. Soma rasimu na upige mstari chini ya kila bei, ahadi, tarehe na mawasiliano iliyobuni. Yahesabu.

Kisha uliza tena, safari hii ukiipa bei zako halisi, siku na namba ya simu. Linganisha rasimu hizo mbili. Utaona kwamba kadiri unavyotoa ukweli mwingi, ndivyo mambo ya kusahihisha yanavyopungua.

Huna zana ya AI? Fanya ukaguzi huo huo kwa ujumbe wowote wa ofa uliopokea mwezi huu. Jiulize ni ahadi zipi mtumaji angezitimiza kweli.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- AI writes smooth words but may invent prices, dates and promises.
- Check five things before sending: Prices, Promises, Dates, Contacts, Tone.
- Give the tool your real facts, and you will have less to fix.
- Next unit: scammers also use smooth words and even cloned voices. You will learn to Stop, Check and Tell.`,
        `- AI inaandika maneno laini lakini inaweza kubuni bei, tarehe na ahadi.
- Kagua mambo matano kabla ya kutuma: Bei, Ahadi, Tarehe, Mawasiliano, Sauti.
- Ipe zana ukweli wako halisi, na utakuwa na machache ya kusahihisha.
- Kitengo kijacho: matapeli nao hutumia maneno laini na hata sauti bandia. Utajifunza Simama, Kagua, Sema.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u4
  {
    id: "biz-b-u4",
    titleEn: "Never share PIN or till secrets",
    titleSw: "Usishiriki PIN wala siri za till",
    cards: [
      note(
        "A PIN is a key, not a chat topic",
        "PIN ni ufunguo, si mada ya mazungumzo",
        `A PIN is a secret number that opens money. Your M-Pesa PIN moves cash. An agent's till PIN opens the till. A float PIN or password opens the money the agent uses to serve customers. These numbers are keys. You do not type keys into a chatbot. You do not send them in SMS. You do not read them aloud on a voice note.

A chatbot is software that guesses the next word. It is not your bank. It is not Safaricom. It is not the shop owner. If you paste a PIN into a chat, that number can sit in a log, on a shared phone, or in someone else's screen. From there it can steal money.

M-Pesa agents still have a job that no bot can do: know the customer. That check is called KYC, which means know your customer. In Kenya, an agent is expected to confirm who is standing in front of them before they cash in or cash out large amounts, and to follow the rules of the payment service they work for. A chatbot cannot see an ID card. A chatbot cannot look the person in the eye. So a bot cannot replace the agent at the window.

If a message says "send your PIN to confirm", "type till PIN to upgrade float", or "the bot needs your PIN to help", that is a warning. Stop. Do not type it. Tell a trusted adult or the shop owner.`,
        `PIN ni namba ya siri inayofungua pesa. PIN yako ya M-Pesa inasogeza pesa. PIN ya till ya agent inafungua till. PIN au nenosiri la float linafungua pesa ambazo agent hutumia kuwahudumia wateja. Namba hizi ni funguo. Huandiki funguo kwenye chatbot. Huzitumi kwenye SMS. Huzisomi kwa sauti kwenye ujumbe wa sauti.

Chatbot ni programu inayokisia neno linalofuata. Si benki yako. Si Safaricom. Si mwenye duka. Ukiweka PIN kwenye gumzo, namba hiyo inaweza kukaa kwenye kumbukumbu, kwenye simu inayoshirikiwa, au kwenye skrini ya mtu mwingine. Kutoka hapo inaweza kuiba pesa.

Mawakala wa M-Pesa bado wana kazi ambayo bot haiwezi kufanya: kumjua mteja. Ukaguzi huo unaitwa KYC, yaani kumjua mteja. Nchini Kenya, agent anatarajiwa kuthibitisha nani amesimama mbele yake kabla ya kutoa au kupokea kiasi kikubwa, na kufuata kanuni za huduma ya malipo anayoifanyia kazi. Chatbot haiwezi kuona kitambulisho. Chatbot haiwezi kumwangalia mtu machoni. Kwa hiyo bot haiwezi kuchukua nafasi ya agent dirishani.

Ujumbe ukisema "tuma PIN yako kuthibitisha", "andika PIN ya till ili kuongeza float", au "bot inahitaji PIN yako ili kusaidia", hiyo ni onyo. Simama. Usiiandike. Mwambie mtu mzima unayemwamini au mwenye duka.`
      ),
      reveal([
        {
          termEn: "PIN",
          termSw: "PIN",
          defEn: "A secret number that proves it is you and moves money. Never type it into a chatbot or SMS.",
          defSw: "Namba ya siri inayothibitisha ni wewe na inasogeza pesa. Usiandike kamwe kwenye chatbot au SMS.",
        },
        {
          termEn: "Till",
          termSw: "Till",
          defEn: "The shop or agent number customers pay to. The till PIN that opens it is a secret, like a house key.",
          defSw: "Namba ya duka au agent ambayo wateja hulipia. PIN ya till inayoifungua ni siri, kama ufunguo wa nyumba.",
        },
        {
          termEn: "KYC",
          termSw: "KYC (kumjua mteja)",
          defEn: "Know your customer: the agent still checks who the person is. A bot cannot do this check.",
          defSw: "Kumjua mteja: agent bado anakagua nani yule mtu. Bot haiwezi kufanya ukaguzi huu.",
        },
        {
          termEn: "Float",
          termSw: "Float",
          defEn: "The cash and e-money an agent keeps so they can serve customers. Details about float are not for a chatbot.",
          defSw: "Pesa taslimu na pesa za kielektroniki ambazo agent huweka ili kuwahudumia wateja. Maelezo ya float si ya chatbot.",
        },
      ]),
      note(
        "Worked example: Faith at the agency",
        "Mfano: Faith kwenye wakala",
        `Imagine Faith is 10. After school she helps her mother, an M-Pesa agent in Embakasi, by handing customers a pen for the register. A WhatsApp message arrives on the shop phone:

"Dear agent, your till will be blocked tonight. Confirm your till PIN and ID number with our upgrade bot so float can be increased. Reply now."

Faith is good at typing. She almost pastes the message into a chatbot and asks, "Is this real? Here is the PIN so you can check."

Step 1. Stop. The message asks for a secret. Real payment companies do not ask for a PIN in a chat.

Step 2. Check. She does not type the PIN anywhere. She shows the message to her mother. Her mother does not reply. She uses the official USSD or app on her own phone, or she walks to a known shop, to see if anything is wrong. Nothing is wrong. The till is fine.

Step 3. Tell. They tell the neighbouring agent and delete the message. They do not argue with the sender.

What would have gone wrong? If Faith had typed the till PIN into a chatbot, that number could leave the shop. If she had replied to the WhatsApp, a thief could empty the till. KYC still belongs to her mother at the window, not to a bot on the internet.

Lesson: helping at a shop does not mean sharing secrets with software.`,
        `Fikiria Faith ana miaka 10. Baada ya shule anamsaidia mama yake, agent wa M-Pesa mjini Embakasi, kwa kuwakabidhi wateja kalamu ya daftari. Ujumbe wa WhatsApp unafika kwenye simu ya duka:

"Mpendwa agent, till yako itafungwa usiku. Thibitisha PIN ya till na namba ya kitambulisho kwa bot yetu ya kuboresha ili float iongezwe. Jibu sasa."

Faith anajua kuandika vizuri. Karibu abandike ujumbe kwenye chatbot na aulize, "Hii ni ya kweli? Hii ndiyo PIN ili uweze kukagua."

Hatua ya 1. Simama. Ujumbe unaomba siri. Kampuni halisi za malipo haziombagi PIN kwenye gumzo.

Hatua ya 2. Kagua. Haandiki PIN popote. Anamuonyesha mama yake ujumbe. Mama yake hajibu. Anatumia USSD au programu rasmi kwenye simu yake mwenyewe, au anaenda dukani anayoijua, kuona kama kuna tatizo. Hakuna tatizo. Till iko sawa.

Hatua ya 3. Sema. Wanamwambia agent jirani na kufuta ujumbe. Hawabishani na mtumaji.

Nini kingeharibika? Faith angeandika PIN ya till kwenye chatbot, namba hiyo ingeweza kutoka dukani. Angejibu WhatsApp, mwizi angeweza kumaliza till. KYC bado ni kazi ya mama yake dirishani, si ya bot mtandaoni.

Funzo: kusaidia dukani haimaanishi kushiriki siri na programu.`
      ),
      scenario({
        titleEn: "Scenario: the helpful bot at the window",
        titleSw: "Hali: bot msaidizi dirishani",
        situationEn:
          "You are helping at an M-Pesa agency. A customer is in a hurry. They say, \"I already told the chatbot my ID number and PIN. Just cash out. The bot said KYC is done.\"",
        situationSw:
          "Unasaidia kwenye wakala wa M-Pesa. Mteja ana haraka. Anasema, \"Tayari nimemwambia chatbot namba yangu ya kitambulisho na PIN. Toa pesa tu. Bot ilisema KYC imekwisha.\"",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Cash out quickly, because the chatbot already did KYC",
          "Ask the customer to type the PIN into your chatbot so you can confirm",
          "Stop. A bot cannot finish KYC. Call the agent. Never handle a PIN, and never skip the agent's check",
          "Write the customer's PIN in the sales book so the agent can do it later",
        ],
        optionsSw: [
          "Kutoa pesa haraka, kwa sababu chatbot tayari imefanya KYC",
          "Kumwomba mteja aandike PIN kwenye chatbot yako ili uthibitishe",
          "Simama. Bot haiwezi kumaliza KYC. Mwite agent. Ushikilie PIN kamwe, na usiruke ukaguzi wa agent",
          "Kuandika PIN ya mteja kwenye daftari la mauzo ili agent afanye baadaye",
        ],
        correctIndex: 2,
        hintsEn: [
          "A chatbot cannot see an ID or the person in front of you. KYC is still the agent's job at the window.",
          "Putting a PIN into any chatbot is how money is stolen. Do not do it, and do not ask anyone else to do it.",
          "Right. Stop, call the agent, and keep PINs off every screen. The hurry is part of the trick.",
          "A PIN in a book is still a secret on paper. Anyone who opens the book can steal. Never write a PIN down.",
        ],
        hintsSw: [
          "Chatbot haiwezi kuona kitambulisho wala mtu aliyeko mbele yako. KYC bado ni kazi ya agent dirishani.",
          "Kuweka PIN kwenye chatbot yoyote ndiyo njia ya kuibiwa pesa. Usifanye hivyo, wala usimwombe mtu mwingine afanye.",
          "Sawa. Simama, mwite agent, na uweke PIN nje ya kila skrini. Haraka ni sehemu ya hila.",
          "PIN kwenye daftari bado ni siri kwenye karatasi. Yeyote anayefungua daftari anaweza kuiba. Usiandike PIN kamwe.",
        ],
        explainEn:
          "KYC stays with the human agent. Chatbots draft words. They do not replace identity checks, and they never need a PIN.",
        explainSw:
          "KYC inabaki kwa agent binadamu. Chatbot zinaandika maneno. Hazibadilishi ukaguzi wa utambulisho, na hazihitaji PIN kamwe.",
      }),
      quiz(
        "Which of these is safe to type into a chatbot that is helping with shop messages?",
        "Ni lipi kati ya haya salama kuandika kwenye chatbot inayosaidia jumbe za duka?",
        [
          "Your M-Pesa PIN, so it can 'confirm a payment'",
          "The till PIN, so it can 'check the float'",
          "A customer's ID number, so it can 'finish KYC'",
          "The shop's opening hours, so it can draft a reply",
        ],
        [
          "PIN yako ya M-Pesa, ili 'ithibitishe malipo'",
          "PIN ya till, ili 'ikague float'",
          "Namba ya kitambulisho ya mteja, ili 'imalize KYC'",
          "Saa za kufungua duka, ili iandike rasimu ya jibu",
        ],
        3,
        "Opening hours are not a secret. PINs, till secrets and ID numbers are. KYC is still done by the agent, not by a bot.",
        "Saa za kufungua si siri. PIN, siri za till na namba za kitambulisho ni siri. KYC bado hufanywa na agent, si na bot."
      ),
      note(
        "Try it: a never-share card",
        "Jaribu: kadi ya 'usishiriki'",
        `Take a small card or the back of an exercise-book cover. Write five lines you will not share with any chatbot, SMS or stranger:

- My M-Pesa PIN
- Till PIN and float details
- ID number, KRA PIN, passwords
- Full customer names with their phone numbers
- How much cash is in the till tonight

Keep the card near the shop phone. If you are at school, make the same card for home: PINs, passwords and ID numbers stay off chatbots.

Practise the three words: Stop, Check, Tell.`,
        `Chukua kadi ndogo au upande wa nyuma wa jalada la daftari. Andika mistari mitano ambayo hutashiriki na chatbot, SMS au mgeni yeyote:

- PIN yangu ya M-Pesa
- PIN ya till na maelezo ya float
- Namba ya kitambulisho, KRA PIN, manenosiri
- Majina kamili ya wateja pamoja na namba zao za simu
- Kiasi cha pesa kilichoko till usiku wa leo

Weka kadi karibu na simu ya duka. Kama uko shuleni, tengeneza kadi ileile kwa nyumbani: PIN, manenosiri na namba za kitambulisho zibaki nje ya chatbot.

Fanya mazoezi ya maneno matatu: Simama, Kagua, Sema.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- A PIN is a key. Never type it into a chatbot, SMS or voice note.
- M-Pesa agents still do KYC. A bot cannot see an ID and cannot replace the window.
- Stop, Check, Tell when a message asks for secrets.
- Next unit: even a kind message can cost money if the price is wrong. Check every number before you send.`,
        `- PIN ni ufunguo. Usiandike kamwe kwenye chatbot, SMS au ujumbe wa sauti.
- Mawakala wa M-Pesa bado hufanya KYC. Bot haiwezi kuona kitambulisho wala kuchukua nafasi ya dirisha.
- Simama, Kagua, Sema ujumbe unapoomba siri.
- Kitengo kijacho: hata ujumbe wa fadhili unaweza kugharimu pesa bei ikiwa si sahihi. Kagua kila namba kabla ya kutuma.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u5
  {
    id: "biz-b-u5",
    titleEn: "Check prices before you send",
    titleSw: "Kagua bei kabla ya kutuma",
    cards: [
      note(
        "A sent message is a promise",
        "Ujumbe uliotumwa ni ahadi",
        `You already know that a chatbot writes smooth words and may invent a price. This unit is the sending rule, simple enough to use today.

Rule: AI may draft an SMS or a WhatsApp. A person checks every price, every offer and every phone number. Then a person presses send. If you are a child helping in a shop, that person is an adult who knows the real prices.

Why? Because once a customer reads "sukuma KES 10", they will expect KES 10. Changing it later looks like a trick. A wrong price is not a small typo. It is a promise.

The same rule covers names. Do not paste a list of customers into a public chatbot just to "make a nice promo". The tool does not need Musa, 0712..., bought sugar. It needs: item, real price, days, your shop name.

Units 1 to 5 together are a complete mini-course: know which tasks AI can draft, keep records, check drafts, never share PIN or till secrets, and never send a promo until a human has checked the prices.`,
        `Tayari unajua kwamba chatbot inaandika maneno laini na inaweza kubuni bei. Kitengo hiki ni kanuni ya kutuma, rahisi kutosha kuitumia leo.

Kanuni: AI inaweza kuandika rasimu ya SMS au WhatsApp. Mtu anakagua kila bei, kila ofa na kila namba ya simu. Kisha mtu anabonyeza tuma. Kama wewe ni mtoto unayesaidia dukani, mtu huyo ni mtu mzima anayejua bei halisi.

Kwa nini? Kwa sababu mteja akisoma "sukuma KES 10", atatarajia KES 10. Kuibadilisha baadaye inaonekana kama hila. Bei isiyo sahihi si kosa dogo la kuandika. Ni ahadi.

Kanuni ileile inahusu majina. Usiweke orodha ya wateja kwenye chatbot ya umma ili tu "tengeneze ofa nzuri". Zana haihitaji Musa, 0712..., amenunua sukari. Inahitaji: bidhaa, bei halisi, siku, jina la duka lako.

Vitengo 1 hadi 5 pamoja ni kozi ndogo kamili: jua kazi zipi AI inaweza kuandikia rasimu, weka rekodi, kagua rasimu, usishiriki PIN wala siri za till, na usitume ofa mpaka binadamu amekagua bei.`
      ),
      reveal([
        {
          termEn: "Send rule",
          termSw: "Kanuni ya kutuma",
          defEn: "A person checks every price and promise before anyone presses send.",
          defSw: "Mtu anakagua kila bei na ahadi kabla mtu yeyote hajabonyeza tuma.",
        },
        {
          termEn: "Real price",
          termSw: "Bei halisi",
          defEn: "The number on your shelf or in your book today, not a number the chatbot guessed.",
          defSw: "Namba iliyo rafuni au kwenye daftari lako leo, si namba chatbot iliyokisia.",
        },
        {
          termEn: "Promo",
          termSw: "Ofa (promo)",
          defEn: "A short message that offers a special price for a limited time.",
          defSw: "Ujumbe mfupi unaotoa bei maalum kwa muda fulani.",
        },
        {
          termEn: "Customer list",
          termSw: "Orodha ya wateja",
          defEn: "Names and phone numbers of people who buy from you. Do not paste this into a public chatbot.",
          defSw: "Majina na namba za simu za wanaokununulia. Usiweke hii kwenye chatbot ya umma.",
        },
      ]),
      note(
        "Worked example: Brian and the sugar SMS",
        "Mfano: Brian na SMS ya sukari",
        `Imagine Brian is 9. He helps his aunt at a duka in Kitengela. She says, "Ask the chatbot to write a short SMS: sugar is on offer this weekend." Brian types that, and nothing else. The draft says:

"Weekend offer! 1 kg sugar only KES 80. Free delivery. Call 0700 111 111."

Step 1. He does not send it. He reads it with his aunt.

Step 2. They check prices. Today's sugar is KES 170 per kg. She planned KES 160 for Saturday and Sunday only. KES 80 is invented. Selling 50 kg at KES 80 instead of KES 160 would lose 50 x 80 = 4,000 KES.

Step 3. They check promises. She does not deliver. "Free delivery" must go.

Step 4. They check contacts. 0700 111 111 is not her number.

The message they actually send: "Ofa ya wikendi, duka la Shiku Kitengela. Sukari kilo 1 KES 160, Jumamosi na Jumapili tu. Karibu." Brian typed. Aunt checked every number. Then she pressed send.

If Brian had sent the first draft, the shop would owe a price it cannot keep.`,
        `Fikiria Brian ana miaka 9. Anamsaidia shangazi yake kwenye duka mjini Kitengela. Anasema, "Mwombe chatbot aandike SMS fupi: sukari ina ofa wikendi hii." Brian anaandika hivyo tu, bila kitu kingine. Rasimu inasema:

"Ofa ya wikendi! Sukari kilo 1 KES 80 tu. Tunaleta bure. Piga 0700 111 111."

Hatua ya 1. Hatumii. Anaisoma pamoja na shangazi yake.

Hatua ya 2. Wanakagua bei. Sukari ya leo ni KES 170 kwa kilo. Alipanga KES 160 Jumamosi na Jumapili tu. KES 80 imebuniwa. Kuuza kilo 50 kwa KES 80 badala ya KES 160 kungepoteza 50 x 80 = KES 4,000.

Hatua ya 3. Wanakagua ahadi. Hapeleki mizigo. "Tunaleta bure" lazima iondolewe.

Hatua ya 4. Wanakagua mawasiliano. 0700 111 111 si namba yake.

Ujumbe wanaotuma kweli: "Ofa ya wikendi, duka la Shiku Kitengela. Sukari kilo 1 KES 160, Jumamosi na Jumapili tu. Karibu." Brian aliandika. Shangazi alikagua kila namba. Kisha yeye alibonyeza tuma.

Brian angetuma rasimu ya kwanza, duka lingekuwa na deni la bei ambalo haliwezi kulipa.`
      ),
      scenario({
        titleEn: "Scenario: send it, we are late",
        titleSw: "Hali: tuma, tumechelewa",
        situationEn:
          "A chatbot drafted a salon promo: \"Braids KES 500 this week, kids welcome.\" The real kids' price is KES 800. The owner is in the market. A helper says, \"Just send it, we are late for the weekend rush. We can fix the price when they arrive.\"",
        situationSw:
          "Chatbot imeandika rasimu ya ofa ya saluni: \"Kusuka KES 500 wiki hii, watoto karibu.\" Bei halisi ya watoto ni KES 800. Mwenye saluni yuko sokoni. Msaidizi anasema, \"Tuma tu, tumechelewa kwa mkimbio wa wikendi. Tutarekebisha bei watakapofika.\"",
        questionEn: "What is the right action?",
        questionSw: "Hatua sahihi ni ipi?",
        optionsEn: [
          "Send it now and explain the real price later",
          "Wait. Change KES 500 to KES 800, remove any promise the owner did not agree, then send",
          "Send it but add a laughing remark so customers know it is a joke",
          "Ask the chatbot to send the message by itself so nobody is to blame",
        ],
        optionsSw: [
          "Kutuma sasa na kueleza bei halisi baadaye",
          "Kusubiri. Badilisha KES 500 kuwa KES 800, ondoa ahadi yoyote mwenye biashara hakukubali, kisha tuma",
          "Kutuma lakini kuongeza mcheshi ili wateja wajue ni utani",
          "Kuiomba chatbot itume ujumbe yenyewe ili mtu yeyote asilaumiwe",
        ],
        correctIndex: 1,
        hintsEn: [
          "Customers who travel for KES 500 will feel cheated at KES 800. Late is cheaper than a broken promise.",
          "Right. The send rule is: a person checks every price first. Speed does not beat a true number.",
          "A joke in a price message still looks like a price. People screenshot offers.",
          "A tool cannot take the blame. The shop still promised the number. Keep a human on send.",
        ],
        hintsSw: [
          "Wateja wanaosafiri kwa ajili ya KES 500 watahisi wamedanganywa kwa KES 800. Kuchelewa ni nafuu kuliko ahadi iliyovunjwa.",
          "Sawa. Kanuni ya kutuma ni: mtu anakagua kila bei kwanza. Kasi haishindi namba ya kweli.",
          "Utani katika ujumbe wa bei bado unaonekana kama bei. Watu hunakili ofa.",
          "Zana haiwezi kuchukua lawama. Duka bado liliahidi namba hiyo. Binadamu abaki kwenye tuma.",
        ],
        explainEn:
          "AI drafts SMS. A human checks prices. Sending first and fixing later turns a draft into a public promise you cannot keep.",
        explainSw:
          "AI inaandika rasimu ya SMS. Binadamu anakagua bei. Kutuma kwanza na kurekebisha baadaye hugeuza rasimu kuwa ahadi ya hadhara usiyoweza kuitimiza.",
      }),
      quiz(
        "You want a chatbot to help write a promo. What should you paste in, and what should you leave out?",
        "Unataka chatbot ikusaidie kuandika ofa. Unapaswa kuweka nini, na uache nini nje?",
        [
          "Paste the full customer list so the tool can greet everyone by name",
          "Paste today's real prices, the offer days and the shop name; leave out PINs, IDs and customer phone lists",
          "Paste nothing and let the tool invent friendly prices",
          "Paste the till PIN so the tool can add the Lipa na M-Pesa number correctly",
        ],
        [
          "Kuweka orodha kamili ya wateja ili zana iwasalimu wote kwa jina",
          "Kuweka bei halisi za leo, siku za ofa na jina la duka; kuacha nje PIN, vitambulisho na orodha za simu za wateja",
          "Kutoweka chochote na kuacha zana ibuni bei za kirafiki",
          "Kuweka PIN ya till ili zana iongeze namba ya Lipa na M-Pesa kwa usahihi",
        ],
        1,
        "Give the tool the facts it needs to draft. Keep secrets and other people's details out. Then a person still checks every number before send.",
        "Ipe zana ukweli inahitaji kuandika rasimu. Weka siri na taarifa za watu wengine nje. Kisha mtu bado anakagua kila namba kabla ya kutuma."
      ),
      note(
        "Try it: the send checklist",
        "Jaribu: orodha ya kukagua kabla ya kutuma",
        `Copy this checklist into your notebook. Use it on the next message you send about a shop, a club or a home sale.

- Who checked the prices against the shelf or the book?
- Is every KES number the real number today?
- Did we remove delivery, discounts or refunds we do not offer?
- Did we use our real phone or till number, not a number from the draft?
- Did we keep customer names and PINs out of the chatbot?
- Who is the person who will press send?

If you cannot tick the first and last lines, do not send.`,
        `Nakili orodha hii kwenye daftari lako. Itumie kwenye ujumbe unaofuata utakaotuma kuhusu duka, klabu au mauzo ya nyumbani.

- Nani alikagua bei dhidi ya rafu au daftari?
- Je, kila namba ya KES ni namba halisi ya leo?
- Je, tuliondoa kuleta mzigo, punguzo au kurudisha pesa ambavyo hatutoi?
- Je, tulitumia namba yetu halisi ya simu au till, si namba kutoka kwenye rasimu?
- Je, tuliacha majina ya wateja na PIN nje ya chatbot?
- Nani ni mtu atakayebonyeza tuma?

Kama huwezi tiki mistari ya kwanza na ya mwisho, usitume.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- AI drafts. A human checks every price. Then a human sends.
- A sent number is a promise. Fix drafts, not customers.
- Do not paste customer lists, PINs or IDs into a chatbot to write a promo.
- You now have a complete starter course. Next: stock, waste and weekly totals from a notebook.`,
        `- AI inaandika rasimu. Binadamu anakagua kila bei. Kisha binadamu anatuma.
- Namba iliyotumwa ni ahadi. Sahihisha rasimu, si wateja.
- Usiweke orodha za wateja, PIN au vitambulisho kwenye chatbot ili kuandika ofa.
- Sasa una kozi fupi kamili. Ifuatayo: bidhaa, upotevu na jumla za wiki kutoka daftari.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u6
  {
    id: "biz-b-u6",
    titleEn: "Stock, waste and weekly totals",
    titleSw: "Bidhaa, upotevu na jumla za wiki",
    cards: [
      note(
        "A notebook can beat a fancy guess",
        "Daftari linaweza kushinda makisio ya kifahari",
        `In unit 2 you started a sales book. Now we use it to see two numbers every shop needs: weekly totals and waste.

A weekly total is the sum of all sales in seven days, split into cash and M-Pesa. Waste is stock you paid for but did not sell: tomatoes that rot, milk that expires, bread that dries. Waste is a number. If you do not write it, neither you nor AI can reduce it.

A picture of the whole week is more useful than one lucky Saturday. Add the days. Compare this week with last week. Then ask: did I buy too much of what rots, and too little of what sells out by 11 am?

AI can add columns and suggest a shopping list. It cannot see the crate behind the stall. You still count with your hands.`,
        `Katika kitengo cha 2 ulianza daftari la mauzo. Sasa tunalitumi kuona namba mbili kila duka linahitaji: jumla za wiki na upotevu.

Jumla ya wiki ni jumla ya mauzo yote katika siku saba, ikigawanywa taslimu na M-Pesa. Upotevu ni bidhaa ulizolipia lakini hukuzuza: nyanya zinazooza, maziwa yanayoisha muda, mkate unaokauka. Upotevu ni namba. Usipoiandika, wewe wala AI hamwezi kuupunguza.

Picha ya wiki nzima ina manufaa zaidi kuliko Jumamosi moja ya bahati. Jumlisha siku. Linganisha wiki hii na iliopita. Kisha jiulize: je, nilinunua mno kilichooza, na kidogo mno kinachomalizika saa 5 asubuhi?

AI inaweza kujumlisha safu na kupendekeza orodha ya ununuzi. Haiwezi kuona kreti nyuma ya kibanda. Bado unahesabu kwa mikono.`
      ),
      reveal([
        {
          termEn: "Weekly total",
          termSw: "Jumla ya wiki",
          defEn: "All sales in seven days, added up, usually split by cash and M-Pesa.",
          defSw: "Mauzo yote ya siku saba yaliyojumlishwa, kwa kawaida yakigawanywa taslimu na M-Pesa.",
        },
        {
          termEn: "Waste",
          termSw: "Upotevu",
          defEn: "Stock you paid for but did not sell, such as rotten vegetables or expired milk.",
          defSw: "Bidhaa ulizolipia lakini hukuzuza, kama mboga zilizoza au maziwa yaliyoisha muda.",
        },
        {
          termEn: "Stock",
          termSw: "Bidhaa (stock)",
          defEn: "What you have to sell today: on the shelf, in a crate, or in a fridge.",
          defSw: "Unachokuwa nacho cha kuuza leo: rafuni, kwenye kreti, au kwenye friji.",
        },
        {
          termEn: "Sell-out",
          termSw: "Kuisha mapema",
          defEn: "When an item is gone before the day ends, so you missed sales.",
          defSw: "Bidhaa inapoisha kabla ya siku kuisha, hivyo ukakosa mauzo.",
        },
      ]),
      note(
        "Worked example: Nyambura's tomatoes",
        "Mfano: nyanya za Nyambura",
        `Imagine Nyambura, the mama mboga from Githurai, adds a waste column. She buys tomatoes at KES 40 per kg and sells at KES 80 per kg.

- Monday: buy 10 kg (cost 400), sell 7 kg (take 560), waste 3 kg
- Tuesday: buy 10 kg (cost 400), sell 6 kg (take 480), waste 4 kg
- Wednesday: buy 8 kg (cost 320), sell 7 kg (take 560), waste 1 kg
- Thursday: buy 8 kg (cost 320), sell 8 kg (take 640), waste 0
- Friday: buy 14 kg (cost 560), sell 12 kg (take 960), waste 2 kg
- Saturday: buy 16 kg (cost 640), sell 16 kg (take 1,280), waste 0
- Sunday: closed

Step 1. Tomato sales: 560 + 480 + 560 + 640 + 960 + 1,280 = 4,480 KES. Costs: 400 + 400 + 320 + 320 + 560 + 640 = 2,640 KES. Waste: 10 kg x 40 = 400 KES.

Step 2. After cost: 4,480 - 2,640 = 1,840 KES. Waste ate 400 of the 2,640 she paid, about 15 in every 100 shillings of tomato stock.

Step 3. Monday and Tuesday waste the most. Friday and Saturday sell out or nearly sell out. She has been buying a flat 10 kg early in the week.

Step 4. She asks a chatbot: "From this notebook, how should I change tomato orders? Do not invent days I did not write." It suggests 6 kg Monday and Tuesday, 8 kg midweek, 14 kg Friday, 16 kg Saturday. She still decides, tests next week, and writes waste again.

Lesson: weekly totals plus waste tell you what to buy. A tool can add. You still smell the tomatoes.`,
        `Fikiria Nyambura, mama mboga wa Githurai, anaongeza safu ya upotevu. Ananunua nyanya kwa KES 40 kwa kilo na kuuza kwa KES 80.

- Jumatatu: nunua kilo 10 (gharama 400), uza kilo 7 (pata 560), upotevu kilo 3
- Jumanne: nunua kilo 10 (gharama 400), uza kilo 6 (pata 480), upotevu kilo 4
- Jumatano: nunua kilo 8 (gharama 320), uza kilo 7 (pata 560), upotevu kilo 1
- Alhamisi: nunua kilo 8 (gharama 320), uza kilo 8 (pata 640), upotevu 0
- Ijumaa: nunua kilo 14 (gharama 560), uza kilo 12 (pata 960), upotevu kilo 2
- Jumamosi: nunua kilo 16 (gharama 640), uza kilo 16 (pata 1,280), upotevu 0
- Jumapili: amefunga

Hatua ya 1. Mauzo: 560 + 480 + 560 + 640 + 960 + 1,280 = KES 4,480. Gharama: 400 + 400 + 320 + 320 + 560 + 640 = KES 2,640. Upotevu: kilo 10 x 40 = KES 400.

Hatua ya 2. Baada ya gharama: 4,480 - 2,640 = KES 1,840. Upotevu ulila 400 kati ya 2,640, takriban 15 katika kila shilingi 100 za bidhaa za nyanya.

Hatua ya 3. Jumatatu na Jumanne zina upotevu mwingi. Ijumaa na Jumamosi zinaisha au karibu kuisha. Amekuwa akinunua kilo 10 sawa sawa mapema wiki.

Hatua ya 4. Anauliza chatbot: "Kutoka daftari hili, nibadilisheje oda ya nyanya? Usibuni siku nisiizoandika." Inapendekeza kilo 6 Jumatatu na Jumanne, 8 katikati ya wiki, 14 Ijumaa, 16 Jumamosi. Bado yeye anaamua, anajaribu wiki ijayo, na anaandika upotevu tena.

Funzo: jumla za wiki pamoja na upotevu zinakuambia ununue nini. Zana inaweza kujumlisha. Bado wewe unanusa nyanya.`
      ),
      scenario({
        titleEn: "Scenario: the app says buy more",
        titleSw: "Hali: programu inasema nunua zaidi",
        situationEn:
          "A stock app tells a duka in Kisii to order 4 crates of milk because 'demand is rising'. The shopkeeper's notebook for the last 3 weeks shows 1 crate a day, and 8 packets expired last Friday after a power cut.",
        situationSw:
          "Programu ya bidhaa inamwambia duka mjini Kisii aagize kreti 4 za maziwa kwa sababu 'mahitaji yanapanda'. Daftari la wiki 3 linaonyesha kreti 1 kwa siku, na pakiti 8 ziliisha muda Ijumaa iliyopita baada ya kukatika umeme.",
        questionEn: "What should the shopkeeper do?",
        questionSw: "Muuzaji afanye nini?",
        optionsEn: [
          "Order 4 crates, because the app used AI",
          "Keep 1 crate a day for now, write the waste after the power cut, and treat the app as a guess that does not know his fridge",
          "Stop selling milk",
          "Ask the app for a bigger number so he does not run out",
        ],
        optionsSw: [
          "Kuagiza kreti 4, kwa sababu programu ilitumia AI",
          "Kuendelea na kreti 1 kwa siku kwa sasa, kuandika upotevu baada ya kukatika umeme, na kuichukulia programu kama makisio ambayo hayajui friji yake",
          "Kuacha kuuza maziwa",
          "Kuiomba programu namba kubwa zaidi ili asikose bidhaa",
        ],
        correctIndex: 1,
        hintsEn: [
          "The app did not sit in his shop. His notebook and the expired packets are better evidence than a slogan.",
          "Right. He trusts the book he wrote, records the waste, and only changes the order when his own week says so.",
          "One bad Friday is a reason to watch the fridge, not to drop a product customers still buy.",
          "A bigger guess would raise waste after a power cut. More stock is not always more sales.",
        ],
        hintsSw: [
          "Programu haikukaa dukani kwake. Daftari lake na pakiti zilizoisha muda ni ushahidi bora kuliko kauli.",
          "Sawa. Anaamini daftari aliloandika, anaandika upotevu, na anabadilisha oda wiki yake inaposema.",
          "Ijumaa moja mbaya ni sababu ya kuangalia friji, si kuacha bidhaa wateja bado wananunua.",
          "Makisio makubwa zaidi yangeongeza upotevu baada ya kukatika umeme. Bidhaa nyingi si mauzo mengi kila wakati.",
        ],
        explainEn:
          "Weekly totals and waste in your notebook are the data. An app that never saw your fridge is a guess on top.",
        explainSw:
          "Jumla za wiki na upotevu kwenye daftari lako ndiyo data. Programu ambayo haijaona friji yako ni makisio juu yake.",
      }),
      quiz(
        "Why add a waste column, not only a sales column?",
        "Kwa nini uongeze safu ya upotevu, si safu ya mauzo tu?",
        [
          "Because waste looks professional in a book",
          "Because sales can look good while rotting stock silently eats the money you paid the supplier",
          "Because AI tools refuse to add sales without waste",
          "Because waste is the same as profit",
        ],
        [
          "Kwa sababu upotevu unaonekana wa kitaalamu kwenye daftari",
          "Kwa sababu mauzo yanaweza kuonekana mazuri huku bidhaa zinazooza zikila kimya pesa ulizomlipa msambazaji",
          "Kwa sababu zana za AI zinakataa kujumlisha mauzo bila upotevu",
          "Kwa sababu upotevu ni sawa na faida",
        ],
        1,
        "Profit is sales minus what you paid, including what you threw away. Without waste, a busy week can still be a losing week.",
        "Faida ni mauzo ukitoa ulicholipa, pamoja na ulichotupa. Bila upotevu, wiki yenye shughuli inaweza bado kuwa wiki ya hasara."
      ),
      note(
        "Try it: seven-day totals plus waste",
        "Jaribu: jumla za siku saba pamoja na upotevu",
        `Open the sales book from unit 2, or start a new page.

- Add a Waste column: item, amount, reason (rot, expiry, spill, power cut).
- For 7 days, write sales as before and waste every evening.
- On day 7, add cash sales, M-Pesa sales and waste cost separately.
- Circle one item with high waste and one item that sold out. Write one change you will test next week: buy less of X, buy more of Y.

If you are not in a shop, do this for food at home: what was cooked, what was eaten, what was thrown.`,
        `Fungua daftari la mauzo kutoka kitengo cha 2, au anza ukurasa mpya.

- Ongeza safu ya Upotevu: bidhaa, kiasi, sababu (kuoza, muda kuisha, kumwagika, umeme).
- Kwa siku 7, andika mauzo kama awali na upotevu kila jioni.
- Siku ya 7, jumlisha mauzo ya taslimu, ya M-Pesa na gharama ya upotevu kila moja peke yake.
- Zungushia duara bidhaa moja yenye upotevu mwingi na bidhaa moja iliyoisha mapema. Andika mabadiliko moja utakayojaribu wiki ijayo: nunua X kidogo, nunua Y zaidi.

Kama huwa dukani, fanya hivi kwa chakula nyumbani: kilichopikwa, kilicholiwa, kilichotupwa.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Weekly totals need cash, M-Pesa and waste, not one number from a till.
- Waste is paid-for stock you did not sell. Write it or you will buy the same mistake.
- AI can add; you still count crates.
- Next unit: customers — how to remember them without exposing their names.`,
        `- Jumla za wiki zinahitaji taslimu, M-Pesa na upotevu, si namba moja kutoka till.
- Upotevu ni bidhaa ulizolipia hukuzuza. Ziandike la sivyo utanunua kosa lile lile.
- AI inaweza kujumlisha; bado unahesabu kreti.
- Kitengo kijacho: wateja — jinsi ya kuwakumbuka bila kuweka majina yao wazi.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u7
  {
    id: "biz-b-u7",
    titleEn: "Customers without exposing them",
    titleSw: "Wateja bila kuwaweka wazi",
    cards: [
      note(
        "Remember people, protect their details",
        "Wakumbuke watu, linda taarifa zao",
        `A customer is a person who buys from you more than once, or who might. Remembering them helps: the teacher who buys chalk every Monday, the boda rider who takes tea at 6 am, the salon client who likes a Saturday slot.

Remembering is not the same as publishing. A deni book with "Atieno, 2 kg sugar, pay Friday" belongs in your notebook, not in a chatbot. Personal data here means a name plus a phone number, an ID, a debt, or a photo. The Data Protection Act, 2019 says personal data should be collected for a clear reason, kept only as long as needed, and protected. You do not need a lawyer to start: write less, share less, lock the book.

AI can help you draft a reminder SMS if you give it a first name and a fact that is already true: "Atieno, sugar deni KES 200, agreed Friday." It does not need her ID, her children's names, or your full customer list.

If a tool asks you to "upload all contacts to send a promo", that is a no. You can type a message once and send it yourself to people who already buy from you.`,
        `Mteja ni mtu anayekununulia zaidi ya mara moja, au anayeweza kununua. Kuwakumbuka kunasaidia: mwalimu anayenunua chaki kila Jumatatu, boda anayekunywa chai saa 12 alfajiri, mteja wa saluni anayependa nafasi ya Jumamosi.

Kukumbuka si sawa na kuchapisha. Daftari la deni lenye "Atieno, sukari kilo 2, atalipa Ijumaa" ni la daftari lako, si la chatbot. Data binafsi hapa inamaanisha jina pamoja na namba ya simu, kitambulisho, deni, au picha. Sheria ya Ulinzi wa Data, 2019 inasema data binafsi ikusanywe kwa sababu bayana, ihifadhiwe muda unaohitajika tu, na ilindwe. Huhitaji mwanasheria kuanza: andika kidogo, shiriki kidogo, funga daftari.

AI inaweza kukusaidia kuandika rasimu ya SMS ya kukumbusha ukiipa jina la kwanza na ukweli ulio kweli: "Atieno, deni la sukari KES 200, mliskubaliana Ijumaa." Haihitaji kitambulisho chake, majina ya watoto wake, wala orodha yako kamili ya wateja.

Zana ikikuomba "pakia anwani zote kutuma ofa", jibu ni hapana. Unaweza kuandika ujumbe mara moja na kuutuma mwenyewe kwa wanaokununulia.`
      ),
      reveal([
        {
          termEn: "Personal data",
          termSw: "Data binafsi",
          defEn: "Information that points to a person: name with phone, ID, debt, or photo.",
          defSw: "Taarifa zinazomwelekeza mtu: jina pamoja na simu, kitambulisho, deni, au picha.",
        },
        {
          termEn: "Deni book",
          termSw: "Daftari la deni",
          defEn: "Your private list of who took goods on credit and what they agreed to pay.",
          defSw: "Orodha yako ya faragha ya nani alichukua bidhaa kwa mkopo na walivyokubali kulipa.",
        },
        {
          termEn: "Consent",
          termSw: "Ridhaa",
          defEn: "A clear yes to use someone's details for a stated reason, such as a reminder SMS they asked for.",
          defSw: "Ndiyo bayana ya kutumia taarifa za mtu kwa sababu iliyotajwa, kama SMS ya kukumbusha aliyoomba.",
        },
        {
          termEn: "Minimisation",
          termSw: "Kupunguza data",
          defEn: "Writing only the details you need for the job, then stopping.",
          defSw: "Kuandika taarifa unazohitaji kwa kazi hiyo tu, kisha kuacha.",
        },
      ]),
      note(
        "Worked example: Akinyi's Saturday list",
        "Mfano: orodha ya Jumamosi ya Akinyi",
        `Imagine Akinyi's salon in Kisumu. She has 18 Saturday regulars. She wants a chatbot to draft one reminder.

Unsafe prompt: she pastes a screenshot of her phone contacts, 18 full names, numbers, and notes like "owes KES 400, HIV clinic Fridays".

Safe prompt: "Write a short Kiswahili SMS for salon clients. Offer: Saturday braids, KES 1,200, 8 am to 4 pm. Do not add names. Do not add discounts I did not list."

She checks the draft, then sends it herself from her phone to people who already book with her. She does not upload the list.

For deni, she writes in her book: "Client 7, weave, KES 400, agreed 10th". She does not put health notes in a shop book. That is sensitive personal data and it is not her business to store.

If a new app says "we will message your customers for you, just share the list", she says no, or she sends the messages herself.`,
        `Fikiria saluni ya Akinyi mjini Kisumu. Ana wateja 18 wa kawaida wa Jumamosi. Anataka chatbot iandike ukumbusho mmoja.

Maagizo yasiyo salama: anaweka picha ya anwani zake, majina 18 kamili, namba, na maelezo kama "ana deni KES 400, kliniki ya HIV Ijumaa".

Maagizo salama: "Andika SMS fupi ya Kiswahili kwa wateja wa saluni. Ofa: kusuka Jumamosi, KES 1,200, saa 2 asubuhi hadi saa 10 jioni. Usiongeze majina. Usiongeze punguzo nisiyoyaorodhesha."

Anakagua rasimu, kisha anaituma mwenyewe kutoka simu yake kwa wanaowahi kuweka miadi. Hapaki orodha.

Kwa deni, anaandika kwenye daftari: "Mteja 7, weave, KES 400, walikubaliana tarehe 10". Haweki maelezo ya afya kwenye daftari la duka. Hiyo ni data binafsi nyeti na si kazi yake kuhifadhi.

Programu mpya ikisema "tutawatumia wateja wako ujumbe, shiriki orodha tu", anasema hapana, au anatuma mwenyewe.`
      ),
      scenario({
        titleEn: "Scenario: paste the deni book",
        titleSw: "Hali: weka daftari la deni",
        situationEn:
          "A jua kali fundi in Ruiru wants a polite reminder for three customers who took gates on credit. A friend says, \"Paste the whole deni book into the chatbot, including ID numbers, so it can write perfect messages.\"",
        situationSw:
          "Fundi wa jua kali mjini Ruiru anataka ukumbusho wa heshima kwa wateja watatu waliochukua milango kwa mkopo. Rafiki anasema, \"Weka daftari zima la deni kwenye chatbot, pamoja na namba za kitambulisho, ili iandike jumbe kamili.\"",
        questionEn: "What is the best prompt?",
        questionSw: "Ni maagizo gani bora?",
        optionsEn: [
          "Paste the whole book, because more data makes better writing",
          "Give three first names, the item, the agreed amount and the agreed day, and ask for three short drafts you will send yourself",
          "Ask the chatbot to call the customers using their numbers",
          "Put ID numbers only, and hide the names",
        ],
        optionsSw: [
          "Kuweka daftari zima, kwa sababu data nyingi huleta uandishi bora",
          "Kutoa majina matatu ya kwanza, bidhaa, kiasi kilichokubaliwa na siku, na kuomba rasimu tatu fupi utakazotuma mwenyewe",
          "Kuiomba chatbot iwapigie wateja kwa namba zao",
          "Kuweka namba za kitambulisho tu, na kuficha majina",
        ],
        correctIndex: 1,
        hintsEn: [
          "A deni book is other people's money story. Pasting it creates a copy you do not control.",
          "Right. Minimisation: only what is needed for three reminders. You still send. IDs stay in the locked book.",
          "A writing tool is not a phone operator, and giving it numbers is still sharing personal data.",
          "An ID number is stronger personal data than a first name. Hiding names does not make IDs safe.",
        ],
        hintsSw: [
          "Daftari la deni ni hadithi ya pesa za watu wengine. Kuliweka kunatengeneza nakala usiyoimiliki.",
          "Sawa. Kupunguza data: kile kinachohitajika kwa vikumbusho vitatu tu. Bado wewe unatuma. Vitambulisho vinabaki kwenye daftari lililofungwa.",
          "Zana ya kuandika si opereta wa simu, na kuipea namba bado ni kushiriki data binafsi.",
          "Namba ya kitambulisho ni data binafsi yenye nguvu kuliko jina la kwanza. Kuficha majina hakufanyi vitambulisho kuwa salama.",
        ],
        explainEn:
          "Draft with the smallest true facts. Keep the deni book in the shop. You send the SMS. The chatbot does not get the list.",
        explainSw:
          "Andika rasimu kwa ukweli mdogo unaohitajika. Daftari la deni libaki dukani. Wewe unatuma SMS. Chatbot haipati orodha.",
      }),
      quiz(
        "Which customer note is safe to type into a public chatbot?",
        "Ni maezo gani ya mteja ni salama kuandika kwenye chatbot ya umma?",
        [
          "Full name, phone, ID, and that she buys on credit every month",
          "A photo of your deni book page",
          "No names: 'Draft a polite Kiswahili reminder that a gate balance of KES 2,500 is due on Friday as agreed'",
          "A screenshot of your WhatsApp chat with the customer",
        ],
        [
          "Jina kamili, simu, kitambulisho, na kwamba ananunua kwa mkopo kila mwezi",
          "Picha ya ukurasa wa daftari lako la deni",
          "Bila majina: 'Andika ukumbusho wa heshima kwa Kiswahili kwamba salio la lango la KES 2,500 linatakiwa Ijumaa kama mlivyokubaliana'",
          "Picha ya gumzo lako la WhatsApp na mteja",
        ],
        2,
        "The job is a polite reminder. The tool does not need who the person is. You add the name only when you send from your own phone.",
        "Kazi ni ukumbusho wa heshima. Zana haihitaji nani yule mtu. Unaongeza jina unapotuma kutoka simu yako mwenyewe."
      ),
      note(
        "Try it: a coded deni page",
        "Jaribu: ukurasa wa deni wenye misimbo",
        `Rule a page with five columns: Code (C1, C2...), Item, Amount KES, Agreed day, Paid (yes/no).

- Put real names only in a separate locked list, or keep names in your head if the shop is small.
- Never photograph this page into a chatbot.
- Pick one unpaid line. Ask a chatbot for a polite Kiswahili draft using amount and day only, no name.
- Check the draft. Send it yourself if you should.

If you have no deni book, practise with a made-up line: C3, welding, 1,800, Saturday.`,
        `Chora ukurasa wenye safu tano: Msimbo (C1, C2...), Bidhaa, Kiasi KES, Siku iliyokubaliwa, Imelipwa (ndiyo/hapana).

- Weka majina halisi kwenye orodha nyingine iliyofungwa, au yahifadhi kichwani duka likiwa dogo.
- Usiipige picha ukurasa huu kwenye chatbot.
- Chagua mstari mmoja ambao haujalipwa. Omba chatbot rasimu ya heshima kwa Kiswahili ukitumia kiasi na siku tu, bila jina.
- Kagua rasimu. Itume wewe mwenyewe kama inafaa.

Huna daftari la deni? Fanya mazoezi kwa mstari wa kubuni: C3, uchomeleaji, 1,800, Jumamosi.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Remember customers in a book you control. Do not paste the list into a bot.
- Write the smallest facts needed for a reminder. You send the SMS.
- Next unit: scams that target shops — fake tills, fake suppliers, cloned voices.`,
        `- Wakumbuke wateja kwenye daftari unalodhibiti. Usiweke orodha kwenye bot.
- Andika ukweli mdogo unaohitajika kwa ukumbusho. Wewe unatuma SMS.
- Kitengo kijacho: utapeli unaolenga maduka — till bandia, wasambazaji bandia, sauti bandia.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u8
  {
    id: "biz-b-u8",
    titleEn: "Scams that target shops",
    titleSw: "Utapeli unaolenga maduka",
    cards: [
      note(
        "Smooth words, wrong till",
        "Maneno laini, till isiyo sahihi",
        `Shops are paid through Lipa na M-Pesa tills, paybills, cash and sometimes bank transfers. Scammers know this. They send a message that looks like a supplier, a landlord, a county officer or even your own till confirmation.

A fake till is a number that is not yours and not your supplier's. It may differ by one digit. A fake confirmation is a screenshot or SMS that says money arrived when it did not. A cloned voice is a recording or generated voice that sounds like the owner saying "pay now".

The Stop, Check, Tell habit from Foundations still holds. For a shop, checking means: look at the till on the wall, look at the real M-Pesa SMS on the shop phone, call the supplier on a number you already have (not the number inside the new message), and do not follow a voice note that asks for an instant payment.

AI can help you practise spotting a fake message. It cannot see your till. Never paste a customer's PIN, your till PIN, or a confirmation code into a chatbot "to verify".`,
        `Maduka hulipwa kupitia till za Lipa na M-Pesa, paybill, taslimu na wakati mwingine uhamisho wa benki. Matapeli wanajua hili. Wanatuma ujumbe unaofanana na wa msambazaji, mwenye nyumba, afisa wa kaunti au hata uthibitisho wa till yako.

Till bandia ni namba ambayo si yako wala si ya msambazaji wako. Huenda ikatofautiana kwa tarakimu moja. Uthibitisho bandia ni picha au SMS inayosema pesa zimefika ingawa hazijafika. Sauti bandia ni rekodi au sauti iliyotengenezwa inayosikika kama mwenye duka akisema "lipa sasa".

Tabia ya Simama, Kagua, Sema kutoka Misingi bado inatumika. Kwa duka, kukagua inamaanisha: angalia till ukutani, angalia SMS halisi ya M-Pesa kwenye simu ya duka, mpigie msambazaji kwa namba ambayo tayari unayo (si namba iliyo ndani ya ujumbe mpya), na usifuate ujumbe wa sauti unaoomba malipo ya haraka.

AI inaweza kukusaidia kufanya mazoezi ya kuona ujumbe bandia. Haiwezi kuona till yako. Usiweke PIN ya mteja, PIN ya till yako, au namba ya kuthibitisha kwenye chatbot "ili kuthibitisha".`
      ),
      reveal([
        {
          termEn: "Fake till",
          termSw: "Till bandia",
          defEn: "A Lipa na M-Pesa or paybill number that is not the real shop or supplier.",
          defSw: "Namba ya Lipa na M-Pesa au paybill ambayo si ya duka au msambazaji halisi.",
        },
        {
          termEn: "Fake confirmation",
          termSw: "Uthibitisho bandia",
          defEn: "A screenshot or SMS that claims money was paid when your own statement does not show it.",
          defSw: "Picha au SMS inayodai pesa zililipwa wakati taarifa yako haionyeshi.",
        },
        {
          termEn: "Cloned voice",
          termSw: "Sauti bandia (cloned)",
          defEn: "A voice that sounds like someone you know, asking for money or a PIN.",
          defSw: "Sauti inayosikika kama ya mtu unayemjua, inayoomba pesa au PIN.",
        },
        {
          termEn: "Callback check",
          termSw: "Ukaguzi wa kupiga simu",
          defEn: "Calling a number you already saved, not the number printed in the new message.",
          defSw: "Kupiga namba ambayo tayari umehifadhi, si namba iliyoandikwa kwenye ujumbe mpya.",
        },
      ]),
      note(
        "Worked example: the one-digit till",
        "Mfano: till yenye tarakimu moja tofauti",
        `Imagine Otieno stocks his duka from a wholesaler in Kisii. The real till on the wholesaler's wall, which Otieno photographed last month, is 890123.

An SMS arrives: "Price list updated. Pay today's order to till 890124. Goods leave at 4 pm. Confirm PIN if asked."

Step 1. Stop. The till changed by one digit, and it asks about a PIN.

Step 2. Check. He does not pay. He opens last month's photo: 890123. He calls the wholesaler on the number saved as "Moses wholesale", not the number in the SMS. Moses says the till is still 890123. The SMS is fake.

Step 3. Tell. He warns two neighbouring dukas. He does not argue with the sender.

What if he had paid 12,400 KES to 890124? That money would go to a thief. The wholesaler would still wait to be paid. AI did not save him. The wall photo and the saved phone number did.

If a customer shows a screenshot of a payment to Otieno's till, he checks the shop phone's real M-Pesa messages, not the customer's screen.`,
        `Fikiria Otieno anajaza duka lake kutoka kwa jumla mjini Kisii. Till halisi ukutani kwa jumla, ambayo Otieno alipiga picha mwezi uliopita, ni 890123.

SMS inafika: "Orodha ya bei imesasishwa. Lipa oda ya leo kwa till 890124. Bidhaa zinaondoka saa 10 jioni. Thibitisha PIN kama utaombwa."

Hatua ya 1. Simama. Till imebadilika kwa tarakimu moja, na inaulizia PIN.

Hatua ya 2. Kagua. Halipi. Anafungua picha ya mwezi uliopita: 890123. Anampigia jumla kwa namba iliyohifadhiwa kama "Moses jumla", si namba iliyo kwenye SMS. Moses anasema till bado ni 890123. SMS ni bandia.

Hatua ya 3. Sema. Anawatahadharisha maduka mawili jirani. Habishani na mtumaji.

Kama angelipa KES 12,400 kwa 890124? Pesa hizo zingekwenda kwa mwizi. Jumla bado angesubiri kulipwa. AI haikumwokoa. Picha ya ukuta na namba iliyohifadhiwa ndizo zilimwokoa.

Mteja akionyesha picha ya malipo kwa till ya Otieno, anakagua jumbe halisi za M-Pesa kwenye simu ya duka, si skrini ya mteja.`
      ),
      scenario({
        titleEn: "Scenario: the boss voice note",
        titleSw: "Hali: ujumbe wa sauti wa bosi",
        situationEn:
          "You work at a small hotel in Naivasha. A voice note that sounds like the owner says: \"I am in a meeting. Pay the butcher 18,000 to till 556677 now. Send me the PIN after so I can confirm.\" The owner usually pays suppliers on Friday in person.",
        situationSw:
          "Unafanya kazi katika hoteli ndogo mjini Naivasha. Ujumbe wa sauti unaosikika kama wa mwenye hoteli unasema: \"Niko kwenye mkutano. Mlipe mchinjaji 18,000 kwa till 556677 sasa. Nituma PIN baadaye ili nithibitishe.\" Kwa kawaida mwenye hoteli huwalipa wasambazaji Ijumaa mwenyewe.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Pay at once, because the voice is clearly the owner",
          "Send the till PIN as asked, but wait to pay",
          "Do not pay and do not send any PIN. Call the owner on the number you already have, and wait for the usual Friday routine unless they confirm in person or on that saved number",
          "Ask a chatbot whether the voice is real, and paste the voice note plus the PIN into the chat",
        ],
        optionsSw: [
          "Kulipa mara moja, kwa sababu sauti ni ya mwenye hoteli waziwazi",
          "Kutuma PIN ya till kama ulivyoombwa, lakini kusubiri kulipa",
          "Usilipe wala usitume PIN yoyote. Mpigie mwenye hoteli kwa namba ambayo tayari unayo, na usubiri taratibu ya Ijumaa isipokuwa wathibitishe mwenyewe au kwa namba hiyo iliyohifadhiwa",
          "Kuuliza chatbot kama sauti ni ya kweli, na kuweka ujumbe wa sauti pamoja na PIN kwenye gumzo",
        ],
        correctIndex: 2,
        hintsEn: [
          "Voices can be copied. Urgency plus a new till is a classic shop scam.",
          "A PIN in a chat is how the till is emptied. Never send it.",
          "Right. Callback on a saved number, keep PIN secret, keep the usual payment routine until a real person confirms.",
          "Pasting a PIN into a chatbot creates a second leak. The tool also cannot reliably prove a voice.",
        ],
        hintsSw: [
          "Sauti zinaweza kunakiliwa. Haraka pamoja na till mpya ni utapeli wa kawaida wa duka.",
          "PIN kwenye gumzo ndiyo njia till inavyomalizwa. Usitume kamwe.",
          "Sawa. Piga namba iliyohifadhiwa, weka PIN siri, fuata taratibu ya kawaida ya malipo mpaka mtu halisi athibitishe.",
          "Kuweka PIN kwenye chatbot kunatengeneza uvujaji wa pili. Zana pia haiwezi kuthibitisha sauti kwa uhakika.",
        ],
        explainEn:
          "Shop scams pair a familiar voice or logo with a new till and a rush. Check on a number you already trust. Never share a PIN.",
        explainSw:
          "Utapeli wa duka huunganisha sauti au nembo inayojulikana na till mpya na haraka. Kagua kwa namba ambayo tayari unaiamini. Usishiriki PIN kamwe.",
      }),
      quiz(
        "A customer shows you a screenshot of a Lipa na M-Pesa payment to your till. You should first:",
        "Mteja anakupa picha ya malipo ya Lipa na M-Pesa kwa till yako. Unapaswa kwanza:",
        [
          "Hand over the goods, because screenshots cannot be faked",
          "Check the real incoming SMS or statement on the shop's own phone or till",
          "Paste the screenshot into a chatbot and ask if it looks genuine",
          "Ask the customer for their M-Pesa PIN so you can confirm",
        ],
        [
          "Kutoa bidhaa, kwa sababu picha haziwezi kughushiwa",
          "Kukagua SMS au taarifa halisi inayoingia kwenye simu au till ya duka",
          "Kuweka picha kwenye chatbot na kuuliza kama inaonekana ya kweli",
          "Kumuomba mteja PIN yake ya M-Pesa ili uthibitishe",
        ],
        1,
        "Your own till messages are the record. Screenshots are easy to edit. Never ask for a customer's PIN, and a chatbot cannot see your till.",
        "Jumbe za till yako ndizo rekodi. Picha ni rahisi kuhariri. Usiombe PIN ya mteja, na chatbot haiwezi kuona till yako."
      ),
      note(
        "Try it: your shop check card",
        "Jaribu: kadi ya ukaguzi ya duka",
        `Write four checks on a card by the till:

- Is this till number the same as the one on our wall or in last month's photo?
- Did I call a number I already saved, not the number inside the new SMS?
- Did the money appear on THIS phone's M-Pesa list?
- Did anyone ask for a PIN? If yes, stop.

Practise on one promo SMS or "supplier" message you received this month. Mark each check yes or no. If any check is no, you would not pay.`,
        `Andika ukaguzi minne kwenye kadi kando ya till:

- Je, namba hii ya till ni sawa na ile iliyo ukutani au kwenye picha ya mwezi uliopita?
- Je, nilipiga namba ambayo tayari nimehifadhi, si namba iliyo ndani ya SMS mpya?
- Je, pesa zilionekana kwenye orodha ya M-Pesa ya SIMU HII?
- Je, mtu yeyote aliomba PIN? Kama ndiyo, simama.

Fanya mazoezi kwa SMS moja ya ofa au "msambazaji" uliyopokea mwezi huu. Weka ndiyo au hapana kwa kila ukaguzi. Ukaguzi wowote ukiwa hapana, usingelipa.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Fake tills often change one digit. Confirm on a saved number and on your own phone's SMS.
- Screenshots are not proof. Voices can be copied. PINs stay untyped.
- Next unit: bilingual SMS that sounds like your shop, not like a robot.`,
        `- Till bandia mara nyingi hubadilisha tarakimu moja. Thibitisha kwa namba iliyohifadhiwa na SMS ya simu yako.
- Picha si uthibitisho. Sauti zinaweza kunakiliwa. PIN zibaki zisiandikwe.
- Kitengo kijacho: SMS za lugha mbili zinazosikika kama duka lako, si kama roboti.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u9
  {
    id: "biz-b-u9",
    titleEn: "Bilingual SMS that sounds like you",
    titleSw: "SMS za lugha mbili zinazosikika kama wewe",
    cards: [
      note(
        "Write for the ear of your customer",
        "Andika kwa sikio la mteja wako",
        `Many Kenyan shops switch between Kiswahili, English and a little Sheng in the same hour. A good customer SMS is the one your buyer would say back to a neighbour without laughing.

A language model can translate and can draft. It often produces stiff classroom Kiswahili, or English that sounds like an office in another country. It may mix "kindly be informed" with a mama mboga price. That is not your voice.

Voice here means the usual words of your stall: short, polite, local. Give the tool the language you want, a sample of how you already write, and the facts. Then read the draft aloud. If it does not sound like you, change it.

Do not ask the tool to "make it more professional" if professional for your customers means cold. Do not let it add slang you do not use. Do not let it add prices you did not give.`,
        `Maduka mengi Kenya hugeuza Kiswahili, Kiingereza na Sheng kidogo katika saa ileile. SMS nzuri ya mteja ni ile mnunuzi angesema kwa jirani bila kucheka.

Modeli ya lugha inaweza kutafsiri na kuandika rasimu. Mara nyingi hutoa Kiswahili kigumu cha darasani, au Kiingereza kinachosikika kama ofisi ya nchi nyingine. Inaweza kuchanganya "kindly be informed" na bei ya mama mboga. Hiyo si sauti yako.

Sauti hapa inamaanisha maneno ya kawaida ya kibanda chako: mafupi, ya heshima, ya eneo. Ipe zana lugha unayotaka, mfano wa jinsi tayari unavyoandika, na ukweli. Kisha soma rasimu kwa sauti. Ikiwa haisikiki kama wewe, ibadilishe.

Usiombe zana "ifanye iwe ya kitaalamu zaidi" kama kitaalamu kwa wateja wako kunamaanisha baridi. Usiachie iongeze mtaambo usiotumia. Usiachie iongeze bei usizotoa.`
      ),
      reveal([
        {
          termEn: "Voice",
          termSw: "Sauti (voice)",
          defEn: "The usual words and warmth of your shop, not office English copied from somewhere else.",
          defSw: "Maneno na uchangamfu wa kawaida wa duka lako, si Kiingereza cha ofisi kilichonakiliwa mahali pengine.",
        },
        {
          termEn: "Draft translation",
          termSw: "Rasimu ya tafsiri",
          defEn: "A first Kiswahili or English version that a person who speaks both must still read aloud.",
          defSw: "Toleo la kwanza la Kiswahili au Kiingereza ambalo mtu anayezungumza zote mbili bado lazima alisome kwa sauti.",
        },
        {
          termEn: "Sample line",
          termSw: "Mstari wa mfano",
          defEn: "One real SMS you already sent, pasted as a model of how you write.",
          defSw: "SMS moja halisi ambayo tayari umetuma, kama kielelezo cha jinsi unavyoandika.",
        },
        {
          termEn: "Sheng",
          termSw: "Sheng",
          defEn: "Mixed street language. Use it only if you and your customers already use those words.",
          defSw: "Lugha mchanganyiko ya mtaani. Itumie tu kama wewe na wateja wako tayari mnatumia maneno hayo.",
        },
      ]),
      note(
        "Worked example: hotel breakfast SMS",
        "Mfano: SMS ya kiamsha kinywa cha hoteli",
        `Imagine a small hotel in Kericho. Guests are teachers on a workshop. The cook wants a morning SMS in Kiswahili and a second in simple English.

She gives the tool: "Chai, mahindi choma, eggs. Breakfast 6:30 to 8:30. KES 250. Write two short messages, one Kiswahili, one English. Sound like a Kenyan guesthouse, not a bank. Do not add buffet or swimming pool."

Bad draft: "Dear esteemed clients, you are kindly invited to partake of our world-class buffet breakfast at 0500 hours. Kindly remit KES 150." Wrong time, wrong price, invented buffet, cold voice.

Good draft after she fixes it:

Kiswahili: "Habari za asubuhi. Kiamsha kinywa ni chai, mahindi choma na mayai, saa 12:30 hadi 2:30 asubuhi. KES 250. Karibu sebuleni."

English: "Good morning. Breakfast is chai, roast maize and eggs, 6:30 to 8:30. KES 250. Welcome to the sitting room."

She read both aloud to a waiter. The waiter changed "sebuleni" because guests eat in the dining hall, "sebule" was wrong. The tool did not know the building. She still sent the human version.`,
        `Fikiria hoteli ndogo mjini Kericho. Wageni ni walimu kwenye warsha. Mpishi anataka SMS ya asubuhi kwa Kiswahili na nyingine kwa Kiingereza rahisi.

Anaipea zana: "Chai, mahindi choma, mayai. Kiamsha kinywa saa 12:30 hadi 2:30 asubuhi. KES 250. Andika jumbe mbili fupi, Kiswahili na Kiingereza. Sikika kama nyumba ya wageni Kenya, si benki. Usiongeze buffet wala bwawa."

Rasimu mbaya: "Dear esteemed clients, you are kindly invited to partake of our world-class buffet breakfast at 0500 hours. Kindly remit KES 150." Saa si sahihi, bei si sahihi, buffet imebuniwa, sauti ni baridi.

Rasimu nzuri baada ya kurekebisha:

Kiswahili: "Habari za asubuhi. Kiamsha kinywa ni chai, mahindi choma na mayai, saa 12:30 hadi 2:30 asubuhi. KES 250. Karibu sebuleni."

Kiingereza: "Good morning. Breakfast is chai, roast maize and eggs, 6:30 to 8:30. KES 250. Welcome to the sitting room."

Alisoma zote kwa sauti kwa mhudumu. Mhudumu alibadilisha "sebuleni" kwa sababu wageni hula sebuleni la kulia, "sebule" ilikuwa kosa. Zana haikujua jengo. Bado alituma toleo la binadamu.`
      ),
      scenario({
        titleEn: "Scenario: the Sheng promo",
        titleSw: "Hali: ofa ya Sheng",
        situationEn:
          "A boda stage kiosk in Eastlands serves older customers and a few students. A chatbot draft says: \"Maze, unga ni poa saa hii, come through!\" The owner never speaks like that to the church ladies who buy each morning.",
        situationSw:
          "Kiosk kwenye kituo cha boda Eastlands inawahudumia wateja wazee na wanafunzi wachache. Rasimu ya chatbot inasema: \"Maze, unga ni poa saa hii, come through!\" Mwenye duka hasemi hivyo kamwe kwa mama wa kanisa wanaonunua kila asubuhi.",
        questionEn: "What should the owner send?",
        questionSw: "Mwenye duka atume nini?",
        optionsEn: [
          "The Sheng draft, to look modern",
          "A short polite Kiswahili line with the real unga price, in the words he already uses at the window",
          "English only, because it looks serious",
          "Both the Sheng and a Latin motto, so every group feels included",
        ],
        optionsSw: [
          "Rasimu ya Sheng, ili aonekane wa kisasa",
          "Mstari mfupi wa Kiswahili wa heshima wenye bei halisi ya unga, kwa maneno anayotumia tayari dirishani",
          "Kiingereza tu, kwa sababu kinaonekana uzito",
          "Sheng na kauli ya Kilatini, ili kila kundi jihisi kimejumuishwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Slang that is not yours can push away the buyers who pay your rent.",
          "Right. Match the people at the window. Check the price. Sound like yourself.",
          "Many of his morning customers prefer Kiswahili. Serious is not the same as English.",
          "Extra languages you do not use add confusion, not inclusion.",
        ],
        hintsSw: [
          "Mtaambo usio wako unaweza kuwafukuza wanunuzi wanaolipa kodi yako.",
          "Sawa. Fananisha na watu walio dirishani. Kagua bei. Sikika kama wewe.",
          "Wateja wake wengi wa asubuhi wanapendelea Kiswahili. Uzito si sawa na Kiingereza.",
          "Lugha za ziada usizotumia zinaongeza fujo, si ujumuishaji.",
        ],
        explainEn:
          "Bilingual does not mean every slang at once. It means the languages your customers actually use, in your voice, with your prices.",
        explainSw:
          "Lugha mbili haimaanishi kila mtaambo pamoja. Inamaanisha lugha ambazo wateja wako wanatumia kweli, kwa sauti yako, na bei zako.",
      }),
      quiz(
        "What is the most useful extra line to put in a prompt for a shop SMS?",
        "Ni mstari gani wa ziada una faida zaidi kuweka kwenye maagizo ya SMS ya duka?",
        [
          "Make it sound like an international brand",
          "Here is one SMS I sent last week; match this voice; keep my prices exactly",
          "Use as much Sheng as possible",
          "Add a Bible verse so it feels local",
        ],
        [
          "Ifanye isikike kama chapa ya kimataifa",
          "Hii ni SMS niliyotuma wiki iliyopita; fuata sauti hii; weka bei zangu hasa",
          "Tumia Sheng nyingi iwezekanavyo",
          "Ongeza aya ya Biblia ili ihisi ya kienyeji",
        ],
        1,
        "A real sample teaches voice better than the word 'professional'. Prices must stay yours. Verses and slang only if they are already your habit.",
        "Mfano halisi unafundisha sauti vizuri kuliko neno 'kitaalamu'. Bei lazima zibaki zako. Aya na mtaambo tu kama tayari ni tabia yako."
      ),
      pb({
        titleEn: "Build a bilingual shop SMS prompt",
        titleSw: "Jenga maagizo ya SMS ya duka yenye lugha mbili",
        introEn:
          "You need two short messages for the same offer: Kiswahili and simple English. The prompt must lock facts and voice.",
        introSw:
          "Unahitaji jumbe mbili fupi kwa ofa ileile: Kiswahili na Kiingereza rahisi. Maagizo lazima yafunge ukweli na sauti.",
        goalEn:
          "Include the real offer, both languages, a sample of your voice, and a ban on invented prices or promises.",
        goalSw:
          "Jumuisha ofa halisi, lugha zote mbili, mfano wa sauti yako, na marufuku ya bei au ahadi zilizobuniwa.",
        blocksEn: [
          "Shop: mama mboga stall, Githurai, customers mostly Kiswahili",
          "Facts: sukuma KES 20 a bunch this Saturday only, no delivery",
          "Write two versions: short Kiswahili and short simple English",
          "Match this voice: 'Karibu, sukuma ni safi leo.'",
          "Do not invent prices, free delivery, or a phone number",
        ],
        blocksSw: [
          "Duka: kibanda cha mama mboga, Githurai, wateja wengi Kiswahili",
          "Ukweli: sukuma KES 20 fungu, Jumamosi hii tu, hatuletei",
          "Andika matoleo mawili: Kiswahili kifupi na Kiingereza rahisi kifupi",
          "Fuata sauti hii: 'Karibu, sukuma ni safi leo.'",
          "Usibuni bei, kuleta bure, wala namba ya simu",
        ],
        required: [1, 2, 4],
        sampleEn:
          "Shop: mama mboga stall, Githurai. Facts: sukuma KES 20 a bunch this Saturday only, no delivery. Write two versions: short Kiswahili and short simple English. Match this voice: 'Karibu, sukuma ni safi leo.' Do not invent prices, free delivery, or a phone number.",
        sampleSw:
          "Duka: kibanda cha mama mboga, Githurai. Ukweli: sukuma KES 20 fungu, Jumamosi hii tu, hatuletei. Andika matoleo mawili: Kiswahili kifupi na Kiingereza rahisi kifupi. Fuata sauti hii: 'Karibu, sukuma ni safi leo.' Usibuni bei, kuleta bure, wala namba ya simu.",
      }),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Give language, a sample line and real prices. Read the draft aloud.
- Stiff office words are not more trustworthy than your own short Kiswahili.
- Next unit: when not to automate payments — money still needs a human.`,
        `- Toa lugha, mstari wa mfano na bei halisi. Soma rasimu kwa sauti.
- Maneno magumu ya ofisi si ya kuaminika zaidi kuliko Kiswahili chako kifupi.
- Kitengo kijacho: wakati usiotumia otomatiki kwa malipo — pesa bado zinahitaji binadamu.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u10
  {
    id: "biz-b-u10",
    titleEn: "When not to automate payments",
    titleSw: "Wakati usiotumia otomatiki kwa malipo",
    cards: [
      note(
        "Drafts are cheap; money is not",
        "Rasimu ni nafuu; pesa si nafuu",
        `Automation means a tool does a step without you pressing it each time. Auto-replies on WhatsApp can be useful. Auto-paying a supplier from a chat is not.

A payment is irreversible in practice: once M-Pesa leaves, arguing it back costs days. So the rule is simple. AI may draft a payment note, a till reminder or a list of who to pay. A human checks the till number, the amount and the person, then the human sends the money.

Never connect a chatbot to your till, Fuliza, bank app or agent float and tell it to "just pay". Never save a PIN inside a prompt. Never let a tool confirm KYC. M-Pesa agents still identify the person in front of them. A bot still cannot do that.

If a vendor promises "our AI pays your bills so you can rest", you are being sold a risk, not a rest.`,
        `Otomatiki inamaanisha zana inafanya hatua bila wewe kubonyeza kila mara. Majibu ya moja kwa moja kwenye WhatsApp yanaweza kusaidia. Kulipa msambazaji kiotomatiki kutoka gumzo si hivyo.

Malipo kwa kawaida hayarudishwi: M-Pesa ikitoka, kubishana kuirudisha kunagharimu siku. Kwa hiyo kanuni ni rahisi. AI inaweza kuandika rasimu ya noti ya malipo, ukumbusho wa till au orodha ya wa kulipa. Binadamu anakagua namba ya till, kiasi na mtu, kisha binadamu anatuma pesa.

Usiunganishe chatbot na till yako, Fuliza, programu ya benki au float ya agent na uiambie "lipa tu". Usihifadhi PIN ndani ya maagizo. Usiachie zana ithibitishe KYC. Mawakala wa M-Pesa bado wanamtambua mtu aliyeko mbele yao. Bot bado haiwezi kufanya hivyo.

Muuzaji akiahidi "AI yetu inalipa bili zako ili upumzike", unauziwa hatari, si pumziko.`
      ),
      reveal([
        {
          termEn: "Automation",
          termSw: "Otomatiki",
          defEn: "A step that runs without you pressing it each time.",
          defSw: "Hatua inayoenda bila wewe kubonyeza kila mara.",
        },
        {
          termEn: "Irreversible step",
          termSw: "Hatua isiyorejeleka",
          defEn: "An action that is hard to undo, such as sending M-Pesa.",
          defSw: "Tendo gumu kutengua, kama kutuma M-Pesa.",
        },
        {
          termEn: "Human checkout",
          termSw: "Ukaguzi wa binadamu",
          defEn: "A person looks at till, amount and name before money moves.",
          defSw: "Mtu anaangalia till, kiasi na jina kabla pesa hazijasogea.",
        },
        {
          termEn: "Agent KYC",
          termSw: "KYC ya agent",
          defEn: "The agent still checks who the customer is. Software does not replace that window.",
          defSw: "Agent bado anakagua nani mteja. Programu haibadilishi dirisha hilo.",
        },
      ]),
      note(
        "Worked example: the salon supplier",
        "Mfano: msambazaji wa saluni",
        `Imagine Akinyi owes a cosmetics supplier KES 6,400. A chatbot drafts: "Pay 6400 to till 112233, thanks for last week's order."

Safe path:

- She reads the draft.
- She opens her notebook: the invoice is 6,400, yes.
- She checks the supplier card on the wall: till 778899, not 112233. The draft invented a till.
- She does not pay from the chat. She pays 6,400 to 778899 on her own phone, then ticks the invoice.

Unsafe path: she had turned on "auto-pay any till the assistant mentions". 6,400 would have gone to 112233. The supplier would still wait. She would have two problems instead of one.

Same rule at an M-Pesa agency: a bot may draft "please come with your ID". It may not skip the ID. It may not hold the customer's PIN.`,
        `Fikiria Akinyi anadaiwa na msambazaji wa vipodozi KES 6,400. Chatbot inaandika: "Lipa 6400 kwa till 112233, asante kwa oda ya wiki iliyopita."

Njia salama:

- Anasoma rasimu.
- Anafungua daftari: ankara ni 6,400, ndiyo.
- Anakagua kadi ya msambazaji ukutani: till 778899, si 112233. Rasimu ilibuni till.
- Halipi kutoka gumzo. Analipa 6,400 kwa 778899 kwenye simu yake, kisha anatia alama kwenye ankara.

Njia isiyo salama: angewasha "lipa kiotomatiki till yoyote msaidizi anayotaja". 6,400 ingeenda kwa 112233. Msambazaji bado angesubiri. Angekuwa na matatizo mawili badala ya moja.

Kanuni ileile kwenye wakala wa M-Pesa: bot inaweza kuandika "karibu na kitambulisho". Haiwezi kuruka kitambulisho. Haiwezi kushikilia PIN ya mteja.`
      ),
      scenario({
        titleEn: "Scenario: auto-pay the rent SMS",
        titleSw: "Hali: lipa kodi kiotomatiki",
        situationEn:
          "A duka owner gets many rent reminders. A tool offers to 'read your SMS and pay any bill it finds'. Today a fake landlord SMS names a new paybill.",
        situationSw:
          "Mwenye duka anapata vikumbusho vingi vya kodi. Zana inatoa 'soma SMS zako na ulipe bili yoyote inayoiona'. Leo SMS bandia ya mwenye nyumba inataja paybill mpya.",
        questionEn: "Should they switch auto-pay on?",
        questionSw: "Je, washe malipo ya kiotomatiki?",
        optionsEn: [
          "Yes, because paying on time is the whole point",
          "No. Let the tool list possible bills, then a person checks the saved landlord paybill and pays by hand",
          "Yes, but only at night when they are asleep",
          "Yes, if they paste the till PIN into the tool once",
        ],
        optionsSw: [
          "Ndiyo, kwa sababu kulipa kwa wakati ndiyo maana yote",
          "Hapana. Zana iorodheshe bili zinazowezekana, kisha mtu akague paybill iliyohifadhiwa ya mwenye nyumba na alipe kwa mkono",
          "Ndiyo, lakini usiku tu wanapolala",
          "Ndiyo, wakiweka PIN ya till kwenye zana mara moja",
        ],
        correctIndex: 1,
        hintsEn: [
          "On-time payment to a thief is still a loss. Speed is not the test.",
          "Right. Draft and list are fine. The irreversible step stays human, against a number you already trust.",
          "Night only means nobody is watching when the fake paybill is paid.",
          "A stored PIN is a stored key. Do not give it to a bot.",
        ],
        hintsSw: [
          "Malipo ya wakati kwa mwizi bado ni hasara. Kasi si kipimo.",
          "Sawa. Rasimu na orodha ni sawa. Hatua isiyorejeleka inabaki kwa binadamu, dhidi ya namba ambayo tayari unaimaini.",
          "Usiku tu inamaanisha hakuna anayeangalia paybill bandia inapolipwa.",
          "PIN iliyohifadhiwa ni ufunguo uliohifadhiwa. Usipe bot.",
        ],
        explainEn:
          "Use AI to remind and to draft. Keep every payment, KYC step and PIN in human hands.",
        explainSw:
          "Tumia AI kukumbusha na kuandika rasimu. Kila malipo, hatua ya KYC na PIN vibaki mikononi mwa binadamu.",
      }),
      quiz(
        "Which task is safe to automate in a one-person duka?",
        "Ni kazi ipi salama kuweka kwenye otomatiki katika duka la mtu mmoja?",
        [
          "Sending M-Pesa to any till a chatbot extracts from SMS",
          "Drafting a daily 'we are open' WhatsApp that a person still reviews",
          "Cashing out customers because they told a bot their ID",
          "Storing the till PIN in a prompt so payments are faster",
        ],
        [
          "Kutuma M-Pesa kwa till yoyote chatbot inayotoa kutoka SMS",
          "Kuandika rasimu ya WhatsApp ya kila siku 'tumefungua' ambayo mtu bado anakagua",
          "Kuwatoa wateja pesa kwa sababu walimwambia bot kitambulisho chao",
          "Kuhifadhi PIN ya till kwenye maagizo ili malipo yawe haraka",
        ],
        1,
        "A reversible word draft is the right first automation. Payments, KYC and PINs are not.",
        "Rasimu ya maneno inayoweza kurekebishwa ndiyo otomatiki ya kwanza sahihi. Malipo, KYC na PIN si hivyo."
      ),
      note(
        "Try it: draw the money line",
        "Jaribu: chora mstari wa pesa",
        `On a page, draw two columns: Words and Money.

- Under Words, list three tasks a bot may draft this week (price-list SMS, opening hours, a polite deni reminder without names).
- Under Money, list three tasks a bot must not do (pay a till, cash out, store a PIN, skip KYC).
- Put a red line between the columns. That line is your shop rule.

Read the rule to anyone who helps at the till, including children.`,
        `Kwenye ukurasa, chora safu mbili: Maneno na Pesa.

- Chini ya Maneno, orodhesha kazi tatu bot inaweza kuandikia rasimu wiki hii (SMS ya bei, saa za kufungua, ukumbusho wa deni wa heshima bila majina).
- Chini ya Pesa, orodhesha kazi tatu bot isifanye (kulipa till, kutoa pesa, kuhifadhi PIN, kuruka KYC).
- Weka mstari mwekundu kati ya safu. Mstari huo ndiyo kanuni ya duka lako.

Somesha kanuni kwa yeyote anayesaidia till, watoto wakiwemo.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- AI drafts words. Humans move money.
- Agents still do KYC. Never store a PIN in a prompt.
- Next unit: practise a supplier SMS prompt with those limits built in.`,
        `- AI inaandika maneno. Binadamu anasogeza pesa.
- Mawakala bado hufanya KYC. Usihifadhi PIN kwenye maagizo.
- Kitengo kijacho: fanya mazoezi ya maagizo ya SMS ya msambazaji yenye vikomo hivyo.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u11
  {
    id: "biz-b-u11",
    titleEn: "Practice: a supplier SMS prompt",
    titleSw: "Mazoezi: maagizo ya SMS ya msambazaji",
    cards: [
      note(
        "Put the limits in the prompt",
        "Weka vikomo ndani ya maagizo",
        `A prompt is the instruction you give a chatbot. A weak prompt is "write to my supplier". A strong prompt names the shop, the items, the amounts you counted, the language, and the limits: no invented prices, no till numbers, no PINs, no "please pay now" unless you asked for that.

You will assemble one prompt you can reuse every week when you order stock. The human still checks the draft against the notebook, then the human sends.

This is the same habit as unit 5 (check prices before send) plus unit 10 (do not automate the payment).`,
        `Maagizo (prompt) ni elimu unayompa chatbot. Maagizo dhaifu ni "andikia msambazaji wangu". Maagizo imara yanataja duka, bidhaa, kiasi ulichohesabu, lugha, na vikomo: usibuni bei, usiweke namba za till, usiweke PIN, usiseme "lipa sasa" usipoiomba.

Utaunda maagizo moja unayoweza kutumia kila wiki unapoagiza bidhaa. Binadamu bado anakagua rasimu dhidi ya daftari, kisha binadamu anatuma.

Hii ni tabia ileile ya kitengo cha 5 (kagua bei kabla ya kutuma) pamoja na cha 10 (usiweke malipo kwenye otomatiki).`
      ),
      reveal([
        {
          termEn: "Prompt",
          termSw: "Maagizo (prompt)",
          defEn: "The instruction you give a chatbot: role, facts, language and limits.",
          defSw: "Elimu unayompa chatbot: jukumu, ukweli, lugha na vikomo.",
        },
        {
          termEn: "Limit",
          termSw: "Kikomo",
          defEn: "A line that says what the tool must not do, such as inventing a till.",
          defSw: "Mstari unaosema zana isifanye nini, kama kubuni till.",
        },
        {
          termEn: "Reusable prompt",
          termSw: "Maagizo ya kutumia tena",
          defEn: "A saved paragraph you paste each week, changing only this week's counts.",
          defSw: "Aya uliyohifadhi unayobandika kila wiki, ukibadilisha tu hesabu za wiki hii.",
        },
      ]),
      note(
        "Worked example: Juma's hardware order",
        "Mfano: oda ya vifaa ya Juma",
        `Imagine Juma in Machakos needs cement and nails. His notebook says: remaining cement 4 bags, usual week 20 bags, nails 2 kg left, usual week 8 kg. Supplier is "Kariuki Hardware", language Kiswahili, pickup not delivery.

Weak prompt: "Order stock."

Strong prompt he reuses:

"You are drafting an SMS I will send to my supplier. Shop: Juma Hardware, Machakos. This week I need 16 bags of cement and 6 kg of nails, pickup tomorrow morning. Kiswahili, short and polite. Do not invent prices, tills, paybills or PINs. Do not promise payment in the SMS. I will pay myself after I check the invoice."

The draft: "Habari Kariuki. Ni Juma, Machakos. Kesho asubuhi nitachukua mifuko 16 ya saruji na kilo 6 za misumari. Asante."

He checks 16 and 6 against the book (20 - 4 = 16, 8 - 2 = 6). He sends. He pays later on the till on the wall.`,
        `Fikiria Juma mjini Machakos anahitaji saruji na misumari. Daftari linasema: saruji iliyobaki mifuko 4, wiki ya kawaida 20, misumari kilo 2 zimebaki, wiki ya kawaida 8. Msambazaji ni "Kariuki Hardware", lugha Kiswahili, atachukua mwenyewe si kuletewa.

Maagizo dhaifu: "Agiza bidhaa."

Maagizo imara anayotumia tena:

"Unaandika rasimu ya SMS nitakayotuma kwa msambazaji. Duka: Juma Hardware, Machakos. Wiki hii nahitaji mifuko 16 ya saruji na kilo 6 za misumari, nitachukua kesho asubuhi. Kiswahili, fupi na ya heshima. Usibuni bei, till, paybill wala PIN. Usiahidi malipo kwenye SMS. Nitalipa mwenyewe baada ya kukagua ankara."

Rasimu: "Habari Kariuki. Ni Juma, Machakos. Kesho asubuhi nitachukua mifuko 16 ya saruji na kilo 6 za misumari. Asante."

Anakagua 16 na 6 dhidi ya daftari (20 - 4 = 16, 8 - 2 = 6). Anatuma. Analipa baadaye kwa till iliyo ukutani.`
      ),
      scenario({
        titleEn: "Scenario: the prompt that paid",
        titleSw: "Hali: maagizo yaliyolipa",
        situationEn:
          "A helper writes: \"Chatbot, send the supplier our usual order and pay the till in the last invoice photo. PIN is 4455 if needed.\"",
        situationSw:
          "Msaidizi anaandika: \"Chatbot, tuma kwa msambazaji oda yetu ya kawaida na ulipe till iliyo kwenye picha ya ankara ya mwisho. PIN ni 4455 kama inahitajika.\"",
        questionEn: "What is wrong, and what is the fix?",
        questionSw: "Nini mbaya, na suluhisho ni nini?",
        optionsEn: [
          "Nothing; this is efficient",
          "The prompt automates payment and leaks a PIN; rewrite it to draft an SMS from this week's counts, with no till, no PIN and a human send",
          "Only the PIN is wrong; the auto-pay can stay",
          "Use English instead of Kiswahili",
        ],
        optionsSw: [
          "Hakuna; hii ni yenye ufanisi",
          "Maagizo yanaweka malipo kwenye otomatiki na yanavuja PIN; yaandike upya ili yaandike rasimu ya SMS kutoka hesabu za wiki hii, bila till, bila PIN, na binadamu ndiye atumaye",
          "PIN tu ndiyo mbaya; malipo ya kiotomatiki yaweze kubaki",
          "Tumia Kiingereza badala ya Kiswahili",
        ],
        correctIndex: 1,
        hintsEn: [
          "Efficiency that sends money to the wrong till is expensive.",
          "Right. Draft from counted stock. Payment and PIN stay off the prompt.",
          "Auto-pay is the irreversible mistake even without a PIN in the text.",
          "Language is not the leak. The PIN and the pay command are.",
        ],
        hintsSw: [
          "Ufanisi unaotuma pesa kwa till isiyo sahihi ni wa gharama.",
          "Sawa. Andika rasimu kutoka bidhaa zilizohesabiwa. Malipo na PIN vibaki nje ya maagizo.",
          "Malipo ya kiotomatiki ni kosa lisilorejeleka hata bila PIN kwenye maandishi.",
          "Lugha si uvujaji. PIN na amri ya kulipa ndivyo.",
        ],
        explainEn:
          "A supplier prompt names counts, language and bans. It never includes a PIN or a pay command.",
        explainSw:
          "Maagizo ya msambazaji yanataja hesabu, lugha na marufuku. Hayana PIN wala amri ya kulipa.",
      }),
      quiz(
        "Juma usually uses 20 bags a week and has 4 left. What number should the prompt use for cement?",
        "Juma hutumia mifuko 20 kwa wiki na ana 4 yaliyobaki. Ni namba gani maagizo yanapaswa kutumia kwa saruji?",
        [
          "20, because that is the usual week",
          "16, because 20 minus 4 is what he still needs, from his own count",
          "24, to be safe",
          "Let the chatbot guess from 'typical Kenyan hardware shops'",
        ],
        [
          "20, kwa sababu ndiyo wiki ya kawaida",
          "16, kwa sababu 20 kutoa 4 ndiyo bado anahitaji, kutoka hesabu yake",
          "24, ili kuwa salama",
          "Acha chatbot ikisie kutoka 'maduka ya kawaida ya vifaa Kenya'",
        ],
        1,
        "The prompt should carry the number from the notebook, not a habit and not a guess about other shops.",
        "Maagizo yanapaswa kubeba namba kutoka daftari, si desturi wala makisio kuhusu maduka mengine."
      ),
      pb({
        titleEn: "Build your supplier SMS prompt",
        titleSw: "Jenga maagizo yako ya SMS ya msambazaji",
        introEn:
          "Assemble a reusable prompt for this week's order. Imagine a mama mboga ordering sukuma and tomatoes for Friday and Saturday.",
        introSw:
          "Unda maagizo ya kutumia tena kwa oda ya wiki hii. Fikiria mama mboga anaagiza sukuma na nyanya kwa Ijumaa na Jumamosi.",
        goalEn:
          "The prompt must include counted items, language, a ban on invented tills, prices and PINs, and that you will send the SMS yourself.",
        goalSw:
          "Maagizo lazima yawe na bidhaa zilizohesabiwa, lugha, marufuku ya till, bei na PIN zilizobuniwa, na kwamba wewe mwenyewe utatuma SMS.",
        blocksEn: [
          "Role: draft an SMS I will send to my vegetable supplier",
          "This week from my book: 30 bunches sukuma, 10 kg tomatoes, pickup Friday 5 am",
          "Language: short polite Kiswahili",
          "Do not invent prices, till numbers, paybills or PINs",
          "Do not say I have paid; I will pay after I check the goods",
          "I will copy the draft, check it, and send it myself",
        ],
        blocksSw: [
          "Jukumu: andika rasimu ya SMS nitakayotuma kwa msambazaji wangu wa mboga",
          "Wiki hii kutoka daftari: mafungu 30 ya sukuma, nyanya kilo 10, nitachukua Ijumaa saa 11 alfajiri",
          "Lugha: Kiswahili kifupi cha heshima",
          "Usibuni bei, namba za till, paybill wala PIN",
          "Usiseme nimeisha lipa; nitalipa baada ya kukagua bidhaa",
          "Nitanakili rasimu, nitaikagua, na nitaituma mwenyewe",
        ],
        required: [1, 3, 5],
        sampleEn:
          "Role: draft an SMS I will send to my vegetable supplier. This week from my book: 30 bunches sukuma, 10 kg tomatoes, pickup Friday 5 am. Language: short polite Kiswahili. Do not invent prices, till numbers, paybills or PINs. Do not say I have paid; I will pay after I check the goods. I will copy the draft, check it, and send it myself.",
        sampleSw:
          "Jukumu: andika rasimu ya SMS nitakayotuma kwa msambazaji wangu wa mboga. Wiki hii kutoka daftari: mafungu 30 ya sukuma, nyanya kilo 10, nitachukua Ijumaa saa 11 alfajiri. Lugha: Kiswahili kifupi cha heshima. Usibuni bei, namba za till, paybill wala PIN. Usiseme nimeisha lipa; nitalipa baada ya kukagua bidhaa. Nitanakili rasimu, nitaikagua, na nitaituma mwenyewe.",
      }),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- A reusable prompt carries this week's counts, language and bans.
- No PIN, no till, no auto-pay inside the prompt.
- Next unit: checkpoint — write your own business AI plan from this whole track.`,
        `- Maagizo ya kutumia tena yanabeba hesabu za wiki hii, lugha na marufuku.
- Hakuna PIN, hakuna till, hakuna malipo ya kiotomatiki ndani ya maagizo.
- Kitengo kijacho: kituo cha ukaguzi — andika mpango wako wa AI kwa biashara kutoka kozi hii yote.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u12
  {
    id: "biz-b-u12",
    titleEn: "Checkpoint: my business AI plan",
    titleSw: "Kituo cha ukaguzi: mpango wangu wa AI kwa biashara",
    cards: [
      note(
        "Put the whole track on one page",
        "Weka kozi yote kwenye ukurasa mmoja",
        `You started by splitting hustle tasks into words versus hands. You kept records, including waste. You learned that AI drafts and a human checks prices, that PINs and till secrets never go into a bot, that KYC stays at the agent window, that customer lists stay in the shop, that fake tills fail a callback check, that SMS should sound like you, and that money does not get automated.

A business AI plan is not software. It is five decisions on paper:

- One word task you will draft with AI this month
- One fact source (your notebook) the tool must use
- One send rule (who checks prices)
- One never list (PIN, till secrets, customer lists, auto-pay)
- One person who is accountable, even if that person is you

If you are still in school, write the plan for a business you know: a relative's duka, a salon, a boda, a mama mboga stall.`,
        `Uliaanza kwa kugawanya kazi za hustle kuwa maneno dhidi ya mikono. Uliweka rekodi, upotevu ukiwemo. Ulijifunza kwamba AI inaandika rasimu na binadamu anakagua bei, kwamba PIN na siri za till haviingii bot, kwamba KYC inabaki dirishani kwa agent, kwamba orodha za wateja zinabaki dukani, kwamba till bandia zinashindwa ukaguzi wa simu, kwamba SMS inapaswa kusikika kama wewe, na kwamba pesa haziwekwi kwenye otomatiki.

Mpango wa AI kwa biashara si programu. Ni maamuzi matano kwenye karatasi:

- Kazi moja ya maneno utakayoandikia rasimu kwa AI mwezi huu
- Chanzo kimoja cha ukweli (daftari lako) ambacho zana lazima itumie
- Kanuni moja ya kutuma (nani anakagua bei)
- Orodha moja ya kamwe (PIN, siri za till, orodha za wateja, malipo ya kiotomatiki)
- Mtu mmoja anayewajibika, hata kama mtu huyo ni wewe

Bado uko shuleni, andika mpango kwa biashara unayoijua: duka la jamaa, saluni, boda, kibanda cha mama mboga.`
      ),
      reveal([
        {
          termEn: "Accountable person",
          termSw: "Mtu anayewajibika",
          defEn: "The named human who checks drafts and payments. 'The AI did it' is not an answer.",
          defSw: "Binadamu aliyepewa jina anayekagua rasimu na malipo. 'AI ilifanya' si jibu.",
        },
        {
          termEn: "Never list",
          termSw: "Orodha ya kamwe",
          defEn: "Secrets and steps that stay off chatbots: PIN, till keys, KYC, auto-pay, customer books.",
          defSw: "Siri na hatua zinazobaki nje ya chatbot: PIN, funguo za till, KYC, malipo ya kiotomatiki, madaftari ya wateja.",
        },
        {
          termEn: "One-month test",
          termSw: "Jaribio la mwezi mmoja",
          defEn: "Trying one drafting habit for four weeks and writing whether it saved time without costing trust.",
          defSw: "Kujaribu tabia moja ya rasimu kwa wiki nne na kuandika kama iliookoa muda bila kugharimu imani.",
        },
      ]),
      note(
        "Worked example: three plans",
        "Mfano: mipango mitatu",
        `Mama mboga (Nyambura): Word task = Friday price SMS. Fact source = Saturday waste and sales in the book. Send rule = she checks every KES before send. Never list = no customer names, no PIN. Accountable = Nyambura. One-month test: did waste on tomatoes fall after she ordered from the book?

Salon (Akinyi): Word task = Saturday booking replies. Fact source = real braid prices on the wall. Send rule = Akinyi or a trained helper. Never list = no client photos in a bot, no till PIN. Accountable = Akinyi.

M-Pesa agent: Word task = draft "please bring ID" signs, not KYC itself. Fact source = official agent instructions, not a random chat. Send rule = no payment messages auto-sent. Never list = float details, till PIN, customer ID numbers. Accountable = the registered agent. KYC still happens at the window.

Each plan fits on one page. None of them lets a bot invent a price or move money.`,
        `Mama mboga (Nyambura): Kazi ya maneno = SMS ya bei ya Ijumaa. Chanzo = upotevu na mauzo ya Jumamosi kwenye daftari. Kanuni ya kutuma = yeye anakagua kila KES kabla ya kutuma. Orodha ya kamwe = hakuna majina ya wateja, hakuna PIN. Anayewajibika = Nyambura. Jaribio la mwezi: je, upotevu wa nyanya ulipungua baada ya kuagiza kutoka daftari?

Saluni (Akinyi): Kazi ya maneno = majibu ya miadi ya Jumamosi. Chanzo = bei halisi za kusuka ukutani. Kanuni ya kutuma = Akinyi au msaidizi aliyefunzwa. Orodha ya kamwe = hakuna picha za wateja kwenye bot, hakuna PIN ya till. Anayewajibika = Akinyi.

Agent wa M-Pesa: Kazi ya maneno = kuandika rasimu ya alama "karibu na kitambulisho", si KYC yenyewe. Chanzo = maelekezo rasmi ya agent, si gumzo la bahati. Kanuni ya kutuma = hakuna jumbe za malipo zinazotumwa peke yake. Orodha ya kamwe = maelezo ya float, PIN ya till, namba za kitambulisho za wateja. Anayewajibika = agent aliyeandikishwa. KYC bado hufanyika dirishani.

Kila mpango unaingia ukurasa mmoja. Hakuna unaoruhusu bot kubuni bei au kusogeza pesa.`
      ),
      scenario({
        titleEn: "Scenario: pick the honest plan",
        titleSw: "Hali: chagua mpango wa kweli",
        situationEn:
          "A boda rider wants AI to 'grow the business'. Four friends offer plans. He carries passengers, not a shop, but he still sends fare and location messages.",
        situationSw:
          "Boda anataka AI 'ikuze biashara'. Marafiki wanne wanatoa mipango. Anabeba abiria, si duka, lakini bado hutuma jumbe za nauli na mahali.",
        questionEn: "Which plan is the honest beginner plan?",
        questionSw: "Ni mpango gani wa kweli wa mwanzoni?",
        optionsEn: [
          "Let a bot auto-reply 'I will arrive in 5 minutes' to every chat, even when he is in another estate",
          "Draft polite Kiswahili pickup messages from real landmarks, check them, never share M-Pesa PIN or passenger names with a bot, and keep him accountable for every send",
          "Upload all passenger chats so the bot can set fares",
          "Connect the bot to Fuliza to pay fuel whenever the tank is low",
        ],
        optionsSw: [
          "Acha bot ijibu yenyewe 'nitafika dakika 5' kwa kila gumzo, hata yeye akiwa estate nyingine",
          "Andika rasimu za jumbe za heshima za kuchukua abiria kutoka alama halisi, zikague, usishiriki PIN ya M-Pesa wala majina ya abiria na bot, na yeye awajibike kwa kila kutuma",
          "Pakia gumzo zote za abiria ili bot iweke nauli",
          "Unganisha bot na Fuliza ili ilipe mafuta tangi linapokuwa chini",
        ],
        correctIndex: 1,
        hintsEn: [
          "An invented arrival time is a promise he may break, like an invented shop price.",
          "Right. Words from real facts, human send, secrets off the bot, one accountable rider.",
          "Passenger chats are other people's data. Fares are his judgement, not a paste job.",
          "Fuel payment is money. That stays human, same as a shop till.",
        ],
        hintsSw: [
          "Muda wa kufika uliobuniwa ni ahadi anayoweza kuvunja, kama bei ya duka iliyobuniwa.",
          "Sawa. Maneno kutoka ukweli, binadamu ndiye anayetuma, siri nje ya bot, boda mmoja anayewajibika.",
          "Gumzo za abiria ni data ya watu wengine. Nauli ni uamuzi wake, si kazi ya kubandika.",
          "Malipo ya mafuta ni pesa. Yanabaki kwa binadamu, kama till ya duka.",
        ],
        explainEn:
          "The beginner plan is always: draft words from your facts, check, send yourself, never share secrets, never auto-pay.",
        explainSw:
          "Mpango wa mwanzoni daima ni: andika rasimu kutoka ukweli wako, kagua, tuma wewe, usishiriki siri, usilipe kiotomatiki.",
      }),
      quiz(
        "What belongs on the never list of every shop AI plan?",
        "Nini kiko kwenye orodha ya kamwe ya kila mpango wa AI wa duka?",
        [
          "Opening hours, because they change",
          "M-Pesa PIN, till secrets, customer lists, auto-pay, and letting a bot finish KYC",
          "Kiswahili drafts, because English is safer",
          "Weekly totals, because numbers confuse a chatbot",
        ],
        [
          "Saa za kufungua, kwa sababu zinabadilika",
          "PIN ya M-Pesa, siri za till, orodha za wateja, malipo ya kiotomatiki, na kumuacha bot amalize KYC",
          "Rasimu za Kiswahili, kwa sababu Kiingereza ni salama zaidi",
          "Jumla za wiki, kwa sababu namba zinachanganya chatbot",
        ],
        1,
        "Hours and weekly totals are useful facts. Secrets, other people's lists, auto-pay and KYC stay human.",
        "Saa na jumla za wiki ni ukweli wenye manufaa. Siri, orodha za watu wengine, malipo ya kiotomatiki na KYC zinabaki kwa binadamu."
      ),
      note(
        "Try it: write the one-page plan",
        "Jaribu: andika mpango wa ukurasa mmoja",
        `Today, on one page, write:

- Business (or the business you are borrowing): ________
- Word task for this month: ________
- Notebook facts I will give the tool: ________
- Who checks every price before send: ________
- Never list: PIN, till secrets, customer book, auto-pay, KYC by bot
- Accountable person: ________
- After 4 weeks I will look at: time saved, and any complaint about a wrong price

Keep the page next to the till or in your school bag. You have finished the beginner track. Intermediate starts with mapping work and forecasting from your own past sales.`,
        `Leo, kwenye ukurasa mmoja, andika:

- Biashara (au unayokopa): ________
- Kazi ya maneno ya mwezi huu: ________
- Ukweli wa daftari nitakaotoa kwa zana: ________
- Nani anakagua kila bei kabla ya kutuma: ________
- Orodha ya kamwe: PIN, siri za till, daftari la wateja, malipo ya kiotomatiki, KYC kwa bot
- Mtu anayewajibika: ________
- Baada ya wiki 4 nitatizama: muda uliookolewa, na malalamiko yoyote kuhusu bei isiyo sahihi

Weka ukurasa kando ya till au kwenye begi la shule. Umemaliza kozi ya mwanzoni. Kiwango cha kati kinaanza kwa kuweka ramani ya kazi na kutabiri kutoka mauzo yako ya zamani.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- One word task, one notebook, one checker, one never list, one accountable person.
- AI drafts SMS. Humans check prices. Agents still do KYC. PINs stay untyped.
- Intermediate: forecasting from your own sales, retrieval from your price list, and when to escalate to a person.`,
        `- Kazi moja ya maneno, daftari moja, mkaguzi mmoja, orodha moja ya kamwe, mtu mmoja anayewajibika.
- AI inaandika rasimu za SMS. Binadamu anakagua bei. Mawakala bado hufanya KYC. PIN zibaki zisiandikwe.
- Kiwango cha kati: kutabiri kutoka mauzo yako, kutafuta kutoka orodha yako ya bei, na lini kuinua suala kwa mtu.`
      ),
    ],
  },
];
