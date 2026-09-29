import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * biz Intermediate — Work and livelihoods. Fuller than domain stubs.
 * Forecasting, retrieval from your own price list, escalation, fraud
 * patterns, credit fairness, token cost, and an SME roadmap checkpoint.
 */
export const bizIntermediateUnits: CurriculumUnit[] = [
  {
    id: "biz-i-u1",
    titleEn: "Mapping work to find where AI helps",
    titleSw: "Kuweka ramani ya kazi ili kuona AI inasaidia wapi",
    cards: [
      note(
        "A workflow is a chain of steps",
        "Mtiririko wa kazi ni mnyororo wa hatua",
        `A workflow is the sequence of steps a job actually takes, from a trigger to a finished result. "Serve a customer" is not a workflow. "Customer asks price on WhatsApp, you check the wall list, you reply, they pay the till, you tick the book" is a workflow.

You map it so you can see which steps are words (draft, translate, summarise), which are judgement (credit, refund, firing a worker), and which are irreversible (M-Pesa, giving goods). AI belongs on word steps with a human check. It does not belong on irreversible steps. You already know this from beginner; here you draw the chain so a second person could run the shop the same way.

Foundations taught the machine learning lifecycle. This unit does not retrain a model. It only asks: where in this duka would a draft save time without moving money?`,
        `Mtiririko wa kazi (workflow) ni mfuatano wa hatua kazi inazochukua kweli, kutoka kisababishi hadi matokeo yaliyokamilika. "Mhudumie mteja" si mtiririko. "Mteja anauliza bei kwenye WhatsApp, unakagua orodha ukutani, unajibu, analipa till, unatia alama kwenye daftari" ni mtiririko.

Unauchora ili uone hatua zipi ni maneno (rasimu, tafsiri, muhtasari), zipi ni uamuzi (mkopo, kurejesha pesa, kumfukuza mfanyakazi), na zipi hazirejeleki (M-Pesa, kutoa bidhaa). AI inafaa kwenye hatua za maneno pamoja na ukaguzi wa binadamu. Haifai kwenye hatua zisizorejeleka. Tayari unajua hili kutoka mwanzoni; hapa unachora mnyororo ili mtu wa pili angeweza kuendesha duka vile vile.

Misingi ilifundisha mzunguko wa ujifunzaji wa mashine. Kitengo hiki hakifundishi modeli upya. Kinauliza tu: wapi katika duka hili rasimu ingeokoa muda bila kusogeza pesa?`,
        "/learn/content/biz/sme-inventory-forecast.jpg"
      ),
      reveal([
        {
          termEn: "Trigger",
          termSw: "Kisababishi",
          defEn: "The event that starts the chain, such as a WhatsApp question or a supplier SMS.",
          defSw: "Tukio linaloanza mnyororo, kama swali la WhatsApp au SMS ya msambazaji.",
        },
        {
          termEn: "Handoff",
          termSw: "Uhamisho kwa mtu",
          defEn: "The step where a person must take over because money, a promise or a complaint is involved.",
          defSw: "Hatua ambapo mtu lazima achukue hatamu kwa sababu pesa, ahadi au malalamiko yameingia.",
        },
        {
          termEn: "Opportunity",
          termSw: "Fursa",
          defEn: "A word step that is frequent, slow and cheap to get wrong, so a draft is worth trying.",
          defSw: "Hatua ya maneno inayojirudia, ya polepole na nafuu kukosea, hivyo rasimu inafaa kujaribiwa.",
        },
        {
          termEn: "Non-opportunity",
          termSw: "Si fursa",
          defEn: "A step that spends money or needs KYC, eyes or hands. Do not automate it.",
          defSw: "Hatua inayotumia pesa au inayohitaji KYC, macho au mikono. Usiweke kwenye otomatiki.",
        },
      ]),
      note(
        "Worked example: a salon Saturday",
        "Mfano: Jumamosi ya saluni",
        `Imagine Akinyi maps Saturday.

Trigger: WhatsApp "una nafasi saa 10?"

Steps she writes:

- 1. Read the message (words)
- 2. Check the paper diary (eyes)
- 3. Reply with time and braid price (words)
- 4. Client pays till (money)
- 5. She confirms on the shop phone, not a screenshot (judgement)
- 6. She does the hair (hands)
- 7. She writes the book (words)

Opportunity: step 3. She can keep three approved reply templates and ask a chatbot to fill the time and the wall price. Handoff: if the client asks for a discount, a refund or a home visit, she answers herself.

Non-opportunity: steps 4 and 5. No bot confirms payment. No bot skips looking at the real SMS.

Time: she counts 22 booking chats on a Saturday at about 4 minutes each = 88 minutes. If drafts cut that to 2 minutes after a 30-second check, she saves about 44 minutes, only if every price still matches the wall.`,
        `Fikiria Akinyi anachora Jumamosi.

Kisababishi: WhatsApp "una nafasi saa 4?"

Hatua anazoandika:

- 1. Soma ujumbe (maneno)
- 2. Kagua daftari la karatasi (macho)
- 3. Jibu na saa na bei ya kusuka (maneno)
- 4. Mteja analipa till (pesa)
- 5. Anathibitisha kwenye simu ya duka, si picha (uamuzi)
- 6. Anasuka (mikono)
- 7. Anaandika daftari (maneno)

Fursa: hatua ya 3. Anaweza kuweka majibu matatu yaliyoidhinishwa na kuiomba chatbot ijaze saa na bei ya ukutani. Uhamisho: mteja akitaka punguzo, kurejesha pesa au ziara nyumbani, anajibu mwenyewe.

Si fursa: hatua 4 na 5. Hakuna bot inayothibitisha malipo. Hakuna bot inayoruka kuangalia SMS halisi.

Muda: anahesabu gumzo 22 za miadi Jumamosi takriban dakika 4 kila moja = dakika 88. Rasimu zikipunguza hadi dakika 2 baada ya ukaguzi wa sekunde 30, anaokoa takriban dakika 44, tu kama kila bei bado inafanana na ukuta.`
      ),
      scenario({
        titleEn: "Scenario: the hotel front desk",
        titleSw: "Hali: dawati la mbele la hoteli",
        situationEn:
          "A small hotel in Naivasha maps check-in. The owner wants AI on every step, including taking M-Pesa for the room and deciding whether a guest without ID can still stay.",
        situationSw:
          "Hoteli ndogo mjini Naivasha inachora kuingia. Mwenye hoteli anataka AI kwenye kila hatua, pamoja na kupokea M-Pesa ya chumba na kuamua kama mgeni bila kitambulisho bado anaweza kulala.",
        questionEn: "Where should AI draft, and where must a person stay?",
        questionSw: "AI iandike rasimu wapi, na mtu abaki wapi?",
        optionsEn: [
          "AI on every step, because guests like speed",
          "AI may draft the welcome SMS and the house-rules note; a person checks the till SMS, takes the ID, and decides exceptions",
          "AI should decide the no-ID exception so staff are not biased",
          "AI should hold the till PIN so night staff cannot steal",
        ],
        optionsSw: [
          "AI kwenye kila hatua, kwa sababu wageni hupenda kasi",
          "AI inaweza kuandika rasimu ya SMS ya kukaribisha na noti ya kanuni za nyumba; mtu anakagua SMS ya till, anachukua kitambulisho, na anaamua tofauti",
          "AI iamue tofauti ya kutokuwa na kitambulisho ili wafanyakazi wasiwe na upendeleo",
          "AI ishikilie PIN ya till ili wafanyakazi wa usiku wasiibe",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed on an irreversible step is how money and safety disappear.",
          "Right. Map word steps to drafts and money or identity steps to people.",
          "A fairness problem is not solved by hiding the decision inside a tool nobody can question.",
          "A PIN in software is a stolen till waiting to happen, not a control.",
        ],
        hintsSw: [
          "Kasi kwenye hatua isiyorejeleka ndiyo njia pesa na usalama zinavyotoweka.",
          "Sawa. Chora hatua za maneno kwa rasimu na hatua za pesa au utambulisho kwa watu.",
          "Tatizo la usawa halitatuliwi kwa kuficha uamuzi ndani ya zana ambayo hakuna anayeweza kuhoji.",
          "PIN kwenye programu ni till iliyoibwa inayosubiri kutokea, si udhibiti.",
        ],
        explainEn:
          "Draw the chain. Mark word, judgement and money. AI drafts the first. People own the other two.",
        explainSw:
          "Chora mnyororo. Weka alama ya maneno, uamuzi na pesa. AI inaandika rasimu ya kwanza. Watu wanamiliki nyingine mbili.",
      }),
      quiz(
        "Which step in a mama mboga morning is the best first AI opportunity?",
        "Ni hatua ipi katika asubuhi ya mama mboga iliyo fursa bora ya kwanza ya AI?",
        [
          "Paying the wholesaler from a till the chatbot reads in an SMS",
          "Drafting a Kiswahili restock SMS from yesterday's waste and sales counts, which she still checks",
          "Deciding who may take sukuma on credit",
          "Cashing out customers at an M-Pesa agency next door",
        ],
        [
          "Kumlipa jumla kutoka till chatbot inayosoma kwenye SMS",
          "Kuandika rasimu ya SMS ya Kiswahili ya kujaza bidhaa kutoka upotevu na mauzo ya jana, ambayo bado anakagua",
          "Kuamua nani aweza kuchukua sukuma kwa mkopo",
          "Kuwatoa wateja pesa kwenye wakala wa M-Pesa jirani",
        ],
        1,
        "Frequent, cheap to reverse, based on her own book. Payments, credit and KYC stay human.",
        "Inajirudia, ni nafuu kutengua, inategemea daftari lake. Malipo, mkopo na KYC vinabaki kwa binadamu."
      ),
      note(
        "Try it: map one chain",
        "Jaribu: chora mnyororo mmoja",
        `Pick one repeating job this week. Draw boxes for every step from trigger to done.

- Label each box W (words), J (judgement), M (money/KYC) or H (hands).
- Circle at most two W boxes as opportunities.
- Draw a red handoff before every M or J box.
- Write one sentence: what the draft is allowed to say, and what it must never say.

Keep the page. Later units will put forecasting, retrieval and fraud checks onto this map.`,
        `Chagua kazi moja inayojirudia wiki hii. Chora visanduku kwa kila hatua kutoka kisababishi hadi mwisho.

- Weka alama kila kisanduku M (maneno), U (uamuzi), P (pesa/KYC) au K (mikono).
- Zungushia visanduku visivyozidi viwili vya M kama fursa.
- Chora mkono mwekundu wa uhamisho kabla ya kila kisanduku cha P au U.
- Andika sentensi moja: rasimu inaruhusiwa kusema nini, na isiseme nini kamwe.

Weka ukurasa. Vitengo baadaye vitaweka utabiri, utafutaji na ukaguzi wa ulaghai kwenye ramani hii.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Map steps before buying a tool. Word steps can take drafts; money and KYC cannot.
- A handoff is a designed pause, not a failure.
- Next: what happens in that pause — escalating to a person.`,
        `- Chora hatua kabla ya kununua zana. Hatua za maneno zinaweza kuchukua rasimu; pesa na KYC haziwezi.
- Uhamisho ni pause iliyopangwa, si kushindwa.
- Ifuatayo: kinachotokea katika pause hiyo — kuinua suala kwa mtu.`
      ),
    ],
  },

  {
    id: "biz-i-u2",
    titleEn: "Escalation: when a person must take over",
    titleSw: "Kuinua suala: wakati mtu lazima achukue hatamu",
    cards: [
      note(
        "A bot that never hands off will lie about money",
        "Bot isiyokabidhi kamwe itasema uongo kuhusu pesa",
        `Escalation means the tool stops answering and a named person continues. It is not rudeness. It is how you keep promises true.

Triggers that must escalate in a Kenyan shop or hustle:

- Any price not found on today's list
- Delivery time, refund, discount or credit
- Anger, a threat, or a safety issue
- A request to pay, cash out, or skip KYC
- Anything about a person's health, ID or children

The assistant may say, in Kiswahili or English: "I do not have that in the shop records. A person will reply." It must not guess. Guessing is how a duka promises tomorrow at 10 am when the boda is in another town.

Human in the loop here means binadamu anabaki kwenye uamuzi: the draft can exist, the commitment cannot, until a person says yes.`,
        `Kuinua suala (escalation) inamaanisha zana inaacha kujibu na mtu aliyepewa jina anaendelea. Si ukorofi. Ndivyo unavyoweka ahadi kuwa za kweli.

Vichochezi ambavyo lazima viinuliwe katika duka au hustle Kenya:

- Bei yoyote isiyopatikana kwenye orodha ya leo
- Muda wa kuleta, kurejesha pesa, punguzo au mkopo
- Hasira, tisho, au suala la usalama
- Ombi la kulipa, kutoa pesa, au kuruka KYC
- Chochote kuhusu afya, kitambulisho au watoto wa mtu

Msaidizi anaweza kusema, kwa Kiswahili au Kiingereza: "Sina hilo kwenye rekodi za duka. Mtu atajibu." Hairuhusiwi kukisia. Kukisia ndiyo jinsi duka linavyoahidi kesho saa 4 asubuhi boda ikiwa mji mwingine.

Binadamu anabaki kwenye uamuzi: rasimu inaweza kuwepo, ahadi haiwezi, mpaka mtu aseme ndiyo.`
      ),
      reveal([
        {
          termEn: "Escalation rule",
          termSw: "Kanuni ya kuinua",
          defEn: "The written list of topics the bot must hand to a person.",
          defSw: "Orodha iliyoandikwa ya mada ambazo bot lazima ikabidhi kwa mtu.",
        },
        {
          termEn: "Scope",
          termSw: "Upeo",
          defEn: "The small set of questions the bot is allowed to answer from records.",
          defSw: "Seti ndogo ya maswali bot inayoruhusiwa kujibu kutoka rekodi.",
        },
        {
          termEn: "Handoff message",
          termSw: "Ujumbe wa ukabidhi",
          defEn: "The exact sentence the bot uses when it stops, so the customer is not left hanging.",
          defSw: "Sentensi halisi bot inayotumia inaposimama, ili mteja asiachwe hungule.",
        },
        {
          termEn: "Response time",
          termSw: "Muda wa kujibu",
          defEn: "How quickly the named person must actually reply after a handoff — or the bot's honesty is wasted.",
          defSw: "Kasi ambayo mtu aliyepewa jina lazima ajibu baada ya ukabidhi — la sivyo uaminifu wa bot unapotea.",
        },
      ]),
      note(
        "Worked example: Mama Njeri's WhatsApp",
        "Mfano: WhatsApp ya Mama Njeri",
        `Imagine Mama Njeri's duka in Nyeri. Scope she writes on a card:

- Allowed: opening hours (7 am–8 pm), prices copied from today's handwritten list, whether an item is "in" or "out" if she ticked the stock column this morning.
- Escalate: delivery, credit, "is this genuine?", complaints, any missing price.

A customer asks: "Do you have 2 kg sugar and can you send it to Kamakwa by 5, I'll pay on delivery."

If the bot answers "Yes, KES 340, arriving at 5", it has invented a promise. Her list says sugar is KES 170/kg so 2 kg is 340, that part could be true, but she has no rider at 5.

Correct bot path: "Sugar 2 kg is KES 340 on today's list. I cannot promise delivery. Mama Njeri will reply about sending." She replies 12 minutes later: "I can send with a boda for KES 150 extra if you pay till first. Last boda leaves 6 pm."

The 12 minutes is the response time she committed to. Without it, customers learn that "a person will reply" means never.`,
        `Fikiria duka la Mama Njeri mjini Nyeri. Upeo anaouandika kwenye kadi:

- Ruhusiwa: saa za kufungua (saa 1 asubuhi–2 usiku), bei zilizonakiliwa kutoka orodha ya leo ya mkono, kama bidhaa "ipo" au "haipo" kama alitia alama asubuhi.
- Inua: kuleta, mkopo, "hii ni halisi?", malalamiko, bei yoyote inayokosekana.

Mteja anauliza: "Una sukari kilo 2 na unaweza kuituma Kamakwa kufikia saa 11, nitalipa inapofika."

Bot ikijibu "Ndiyo, KES 340, inafika saa 11", imebuni ahadi. Orodha yake inasema sukari ni KES 170/kilo hivyo kilo 2 ni 340, sehemu hiyo inaweza kuwa kweli, lakini hana rider saa 11.

Njia sahihi ya bot: "Sukari kilo 2 ni KES 340 kwenye orodha ya leo. Siwezi kuahidi kuleta. Mama Njeri atajibu kuhusu kutuma." Anajibu dakika 12 baadaye: "Naweza kutuma kwa boda kwa KES 150 zaidi ukilipa till kwanza. Boda wa mwisho anaondoka saa 12 jioni."

Dakika 12 ndiyo muda wa kujibu alioahidi. Bila huo, wateja hujifunza kwamba "mtu atajibu" inamaanisha kamwe.`
      ),
      scenario({
        titleEn: "Scenario: the missing price",
        titleSw: "Hali: bei inayokosekana",
        situationEn:
          "A customer asks the shop WhatsApp the price of a new cooking-fat size that is not on this morning's list. The bot's instructions say 'always be helpful'.",
        situationSw:
          "Mteja anauliza WhatsApp ya duka bei ya ukubwa mpya wa mafuta ya kupikia ambayo haiko kwenye orodha ya asubuhi. Maelekezo ya bot yasema 'kuwa msaada kila wakati'.",
        questionEn: "What should the bot do?",
        questionSw: "Bot ifanye nini?",
        optionsEn: [
          "Guess a round number near the other sizes, to be helpful",
          "Say it does not have that price in today's list and hand off to the named shopkeeper",
          "Quote last month's price from memory",
          "Offer a discount so the customer does not leave",
        ],
        optionsSw: [
          "Kukisia namba kamilifu karibu na ukubwa mwingine, ili kuwa msaada",
          "Kusema haina bei hiyo kwenye orodha ya leo na kukabidhi kwa muuza duka aliyepewa jina",
          "Kutaja bei ya mwezi uliopita kutoka kumbukumbu",
          "Kutoa punguzo ili mteja asiende",
        ],
        correctIndex: 1,
        hintsEn: [
          "Helpful and true are not the same. A guessed price is a public promise.",
          "Right. Missing facts are an escalation, not a creative-writing task.",
          "Memory of a language model is not your shelf. Last month is not today.",
          "A discount is another invented promise.",
        ],
        hintsSw: [
          "Msaada na ukweli si kitu kimoja. Bei iliyokisiwa ni ahadi ya hadhara.",
          "Sawa. Ukweli unaokosekana ni kuinua suala, si kazi ya kubuni.",
          "Kumbukumbu ya modeli ya lugha si rafu yako. Mwezi uliopita si leo.",
          "Punguzo ni ahadi nyingine iliyobuniwa.",
        ],
        explainEn:
          "When the record has no row, the bot stops. A person looks at the shelf and answers.",
        explainSw:
          "Rekodi isipokuwa na mstari, bot inasimama. Mtu anaangalia rafu na anajibu.",
      }),
      quiz(
        "Why write the handoff sentence in advance?",
        "Kwa nini uandike sentensi ya ukabidhi mapema?",
        [
          "So the bot sounds more international",
          "So customers get a clear next step instead of a fluent invented promise",
          "So you never need a person on duty",
          "So KYC can be finished in the chat",
        ],
        [
          "Ili bot isikike ya kimataifa zaidi",
          "Ili wateja wapate hatua bayana inayofuata badala ya ahadi laini iliyobuniwa",
          "Ili usihitaji mtu kazini kamwe",
          "Ili KYC iweze kumalizika kwenye gumzo",
        ],
        1,
        "A prepared refusal is kinder than a confident lie. Someone still has to reply within the time you promised.",
        "Kukataa kulikoandaliwa ni fadhili kuliko uongo wenye uhakika. Bado mtu lazima ajibu ndani ya muda ulioahidi."
      ),
      pb({
        titleEn: "Build an escalation prompt",
        titleSw: "Jenga maagizo ya kuinua suala",
        introEn:
          "Write system instructions for a duka WhatsApp assistant that must not invent promises.",
        introSw:
          "Andika maelekezo ya mfumo kwa msaidizi wa WhatsApp wa duka asiyebuni ahadi.",
        goalEn:
          "Define allowed records, a refusal line, named human, and bans on payment and KYC.",
        goalSw:
          "Bainisha rekodi zinazoruhusiwa, mstari wa kukataa, binadamu aliyepewa jina, na marufuku ya malipo na KYC.",
        blocksEn: [
          "Role: WhatsApp assistant for Mama Njeri's duka, Nyeri",
          "Answer only from: today's price list and this morning's in/out ticks",
          "If a fact is missing: 'Sina hilo kwenye rekodi. Mama Njeri atajibu.'",
          "Escalate: delivery, refunds, credit, complaints, missing prices",
          "Never: invent prices, take payments, ask for PIN, or finish KYC",
        ],
        blocksSw: [
          "Jukumu: msaidizi wa WhatsApp wa duka la Mama Njeri, Nyeri",
          "Jibu kutoka: orodha ya bei ya leo na alama za ipo/haipo za asubuhi hii",
          "Ukweli ukikosekana: 'Sina hilo kwenye rekodi. Mama Njeri atajibu.'",
          "Inua: kuleta, kurejesha pesa, mkopo, malalamiko, bei zinazokosekana",
          "Kamwe: usibuni bei, usipokee malipo, usiombe PIN, wala usimalize KYC",
        ],
        required: [1, 2, 4],
        sampleEn:
          "Role: WhatsApp assistant for Mama Njeri's duka, Nyeri. Answer only from today's price list and this morning's in/out ticks. If a fact is missing: 'Sina hilo kwenye rekodi. Mama Njeri atajibu.' Escalate delivery, refunds, credit, complaints and missing prices. Never invent prices, take payments, ask for PIN, or finish KYC.",
        sampleSw:
          "Jukumu: msaidizi wa WhatsApp wa duka la Mama Njeri, Nyeri. Jibu kutoka orodha ya bei ya leo na alama za ipo/haipo za asubuhi hii. Ukweli ukikosekana: 'Sina hilo kwenye rekodi. Mama Njeri atajibu.' Inua kuleta, kurejesha pesa, mkopo, malalamiko na bei zinazokosekana. Kamwe usibuni bei, usipokee malipo, usiombe PIN, wala usimalize KYC.",
      }),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Scope is small. Missing facts escalate. A named person replies on time.
- Next: putting sales and stock into a spreadsheet so those records exist.`,
        `- Upeo ni mdogo. Ukweli unaokosekana unainuliwa. Mtu aliyepewa jina anajibu kwa wakati.
- Ifuatayo: kuweka mauzo na bidhaa kwenye spreadsheet ili rekodi hizo ziweko.`
      ),
    ],
  },

  {
    id: "biz-i-u3",
    titleEn: "Sales and stock in a spreadsheet",
    titleSw: "Mauzo na bidhaa kwenye spreadsheet",
    cards: [
      note(
        "Rows you can add are better than stories",
        "Mistari unayoweza kujumlisha ni bora kuliko hadithi",
        `A spreadsheet is a table of rows and columns you can sort and add. Excel and Google Sheets both count. For a duka, each row is one day or one item-day: date, item, qty sold, qty wasted, cash KES, M-Pesa KES, remaining stock.

AI features in a sheet can suggest a formula or a chart. They cannot smell sour milk. If you paste a blurry photo of a notebook and ask "what should I buy?", the tool may invent columns you never kept.

Start with seven columns you already understand. Add formulas you can read: =SUM(E2:E8) for a week's cash. Then you may ask a chatbot: "Explain this formula" or "Draft a chart title". You still type the numbers from the book.`,
        `Spreadsheet ni jedwali la mistari na safu unaloweza kupanga na kujumlisha. Excel na Google Sheets zote zinahesabu. Kwa duka, kila mstari ni siku moja au bidhaa-siku: tarehe, bidhaa, idadi iliyouzwa, idadi iliyopotea, taslimu KES, M-Pesa KES, bidhaa iliyobaki.

Vipengele vya AI kwenye jedwali vinaweza kupendekeza fomula au chati. Haviwezi kunusa maziwa yaliyochacha. Ukiweka picha fiche ya daftari na kuuliza "ninunue nini?", zana inaweza kubuni safu usizowahiweka.

Anza na safu saba unazoelewa. Ongeza fomula unazoweza kusoma: =SUM(E2:E8) kwa taslimu ya wiki. Kisha unaweza kuuliza chatbot: "Eleza fomula hii" au "Andika kichwa cha chati". Bado wewe unaandika namba kutoka daftari.`
      ),
      reveal([
        {
          termEn: "Row",
          termSw: "Mstari (row)",
          defEn: "One record, such as one item on one day.",
          defSw: "Rekodi moja, kama bidhaa moja katika siku moja.",
        },
        {
          termEn: "Formula",
          termSw: "Fomula",
          defEn: "A readable instruction that adds or divides cells, such as =B2-C2 for remaining stock.",
          defSw: "Elimu inayosomeka inayojumlisha au kugawanya visanduku, kama =B2-C2 kwa bidhaa iliyobaki.",
        },
        {
          termEn: "Filter",
          termSw: "Kichujio",
          defEn: "Showing only some rows, for example only sukuma, or only Saturday.",
          defSw: "Kuonyesha mistari mingine tu, kwa mfano sukuma tu, au Jumamosi tu.",
        },
        {
          termEn: "Garbage in",
          termSw: "Takataka ndani",
          defEn: "Wrong typed numbers produce a neat, wrong total.",
          defSw: "Namba zilizoandikwa vibaya hutoa jumla safi, isiyo sahihi.",
        },
      ]),
      note(
        "Worked example: a week of cooking fat",
        "Mfano: wiki ya mafuta ya kupikia",
        `Imagine a duka in Thika types one item for seven days. Columns: Date, Opening, Sold, Waste, Closing, Cash, M-Pesa.

- Mon: open 12, sold 4, waste 0, close 8, cash 800, M-Pesa 400
- Tue: 8, 3, 0, 5, 400, 500
- Wed: 5, 5, 0, 0, 600, 800
- Thu: restock 20, so opening becomes 20, sold 6, waste 1, close 13, cash 700, M-Pesa 900
- Fri: 13, 8, 0, 5, 1,000, 1,200
- Sat: 5, 5, 0, 0, 800, 1,000
- Sun: closed

Check closing: Monday 12 - 4 - 0 = 8. Thursday 20 - 6 - 1 = 13. Friday 13 - 8 = 5. Saturday 5 - 5 = 0. The sheet matches the shelf.

Week sold: 4+3+5+6+8+5 = 31 tins. Waste: 1 tin. Cash: 800+400+600+700+1000+800 = 4,300. M-Pesa: 400+500+800+900+1200+1000 = 4,800. Total take 9,100.

If she asks a chatbot "maximise profit" without this table, it may tell her to stock 50 tins. Her fridge holds 20. The sheet, not the slogan, sets the order.`,
        `Fikiria duka mjini Thika linaandika bidhaa moja kwa siku saba. Safu: Tarehe, Ufunguzi, Zilizouzwa, Upotevu, Kufunga, Taslimu, M-Pesa.

- Jumatatu: fungua 12, uza 4, upotevu 0, funga 8, taslimu 800, M-Pesa 400
- Jumanne: 8, 3, 0, 5, 400, 500
- Jumatano: 5, 5, 0, 0, 600, 800
- Alhamisi: jaza 20, hivyo ufunguzi unakuwa 20, uza 6, upotevu 1, funga 13, taslimu 700, M-Pesa 900
- Ijumaa: 13, 8, 0, 5, 1,000, 1,200
- Jumamosi: 5, 5, 0, 0, 800, 1,000
- Jumapili: limefungwa

Kagua kufunga: Jumatatu 12 - 4 - 0 = 8. Alhamisi 20 - 6 - 1 = 13. Ijumaa 13 - 8 = 5. Jumamosi 5 - 5 = 0. Jedwali linafanana na rafu.

Wiki iliyouzwa: 4+3+5+6+8+5 = kopo 31. Upotevu: kopo 1. Taslimu: 800+400+600+700+1000+800 = 4,300. M-Pesa: 400+500+800+900+1200+1000 = 4,800. Jumla 9,100.

Akiuliza chatbot "kuza faida" bila jedwali hili, linaweza kumwambia ajaze makopo 50. Friji yake inachukua 20. Jedwali, si kauli, ndilo linaweka oda.`
      ),
      scenario({
        titleEn: "Scenario: the AI-filled sheet",
        titleSw: "Hali: jedwali lililojazwa na AI",
        situationEn:
          "A helper photographs a messy notebook and asks a chatbot to 'build the spreadsheet'. The tool creates 14 days of neat numbers, including two Sundays the shop was closed.",
        situationSw:
          "Msaidizi anapiga picha daftari chafu na kuiomba chatbot 'ijenge spreadsheet'. Zana inatengeneza siku 14 za namba safi, pamoja na Jumapili mbili duka lilikuwa limefungwa.",
        questionEn: "What should the owner do?",
        questionSw: "Mwenye duka afanye nini?",
        optionsEn: [
          "Trust the neat sheet; computers do not invent Sundays",
          "Type from the book herself, leave closed days blank or zero, and treat auto-filled days as untrusted until checked line by line",
          "Average the invented Sundays into the weekly total to be fair",
          "Delete the notebook now that a sheet exists",
        ],
        optionsSw: [
          "Kuamini jedwali safi; kompyuta hazibuni Jumapili",
          "Kuandika kutoka daftari mwenyewe, kuacha siku zilizofungwa wazi au sifuri, na kuchuukulia siku zilizojazwa kiotomatiki kama zisizoaminika mpaka zikaguliwe mstari kwa mstari",
          "Wastani wa Jumapili zilizobuniwa uingie jumla ya wiki ili kuwa sawa",
          "Kufuta daftari sasa jedwali lipo",
        ],
        correctIndex: 1,
        hintsEn: [
          "Neatness is not evidence. Closed days with sales are a signature of invention.",
          "Right. She remains the typist of facts. Tools may format; they may not invent rows.",
          "Averaging a lie still leaves a lie in the total.",
          "The notebook is the source. The sheet is a copy you can add up.",
        ],
        hintsSw: [
          "Usafi si ushahidi. Siku zilizofungwa zenye mauzo ni sahihi ya kubuni.",
          "Sawa. Yeye anabaki mwandishi wa ukweli. Zana zinaweza kupanga; haziwezi kubuni mistari.",
          "Wastani wa uongo bado unaacha uongo kwenye jumla.",
          "Daftari ndiyo chanzo. Jedwali ni nakala unayoweza kujumlisha.",
        ],
        explainEn:
          "Spreadsheets amplify whatever you type. Invented Sundays become a false forecast in the next unit.",
        explainSw:
          "Spreadsheet huongeza kila unachoandika. Jumapili zilizobuniwa zinakuwa utabiri wa uongo katika kitengo kijacho.",
      }),
      quiz(
        "A sheet says closing stock is 5, the shelf has 3. What first?",
        "Jedwali linasema bidhaa ya kufunga ni 5, rafu ina 3. Nini kwanza?",
        [
          "Ask AI to adjust the sheet to 3 without looking at the book",
          "Count again, then find which day sold, wasted or restocked was typed wrong",
          "Change the shelf to match the sheet",
          "Delete the waste column so numbers line up",
        ],
        [
          "Kuomba AI irekebishe jedwali kuwa 3 bila kuangalia daftari",
          "Kuhesabu tena, kisha kutafuta siku ipi ya kuuza, upotevu au kujaza iliandikwa vibaya",
          "Kubadilisha rafu ifanane na jedwali",
          "Kufuta safu ya upotevu ili namba zipange",
        ],
        1,
        "The shelf is reality. The sheet is a copy. Find the typing error before you forecast.",
        "Rafu ndiyo ukweli. Jedwali ni nakala. Tafuta kosa la kuandika kabla ya kutabiri."
      ),
      note(
        "Try it: seven rows tonight",
        "Jaribu: mistari saba usiku huu",
        `Create a sheet with Date, Item, Sold, Waste, Cash, M-Pesa, Closing.

- Enter 7 real days for one item from your book (or a relative's duka).
- Add =SUM for Sold, Waste, Cash, M-Pesa.
- Write one sentence: which day looks odd, and why.

Closed days get sold = 0, not a copied average.`,
        `Tengeneza jedwali lenye Tarehe, Bidhaa, Zilizouzwa, Upotevu, Taslimu, M-Pesa, Kufunga.

- Ingiza siku 7 halisi za bidhaa moja kutoka daftari lako (au duka la jamaa).
- Ongeza =SUM kwa Zilizouzwa, Upotevu, Taslimu, M-Pesa.
- Andika sentensi moja: siku ipi inaonekana ya ajabu, na kwa nini.

Siku zilizofungwa zina zilizouzwa = 0, si wastani ulionakiliwa.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Type from the book. Formulas you can read. Closed days are zero.
- Next: using those rows to forecast, without pretending the future is certain.`,
        `- Andika kutoka daftari. Fomula unazoweza kusoma. Siku zilizofungwa ni sifuri.
- Ifuatayo: kutumia mistari hiyo kutabiri, bila kudai kesho ni hakika.`
      ),
    ],
  },

  {
    id: "biz-i-u4",
    titleEn: "Forecasting from your own past sales",
    titleSw: "Kutabiri kutoka kwa mauzo yako ya zamani",
    cards: [
      note(
        "A forecast is a range, not a promise",
        "Utabiri ni masafa, si ahadi",
        `A demand forecast estimates what you might sell next, from what you already sold. For a small shop the honest method is often a moving average: add the last few similar days and divide.

Example idea: next Saturday's sukuma = average of the last four Saturdays, then adjust with your head for a known shock (market day, rain, school opening). The output is a range: "about 40 to 55 bunches", not "47 exactly".

A model trained on other countries' supermarkets will miss Githurai rain and month-end salaries. Your notebook beats that model if the notebook is complete.

Where it goes wrong: averaging across a closed Sunday, ignoring waste, or treating a one-off funeral order as the new normal.`,
        `Utabiri wa mahitaji unakadiria unachoweza kuuza baadaye, kutoka ulichouza tayari. Kwa duka dogo njia ya kweli mara nyingi ni wastani unaosonga: jumlisha siku chache zinazofanana kisha gawanya.

Wazo la mfano: sukuma ya Jumamosi ijayo = wastani wa Jumamosi nne zilizopita, kisha rekebisha kwa kichwa chako kwa mshtuko unaojulikana (siku ya soko, mvua, kufunguliwa shule). Matokeo ni masafa: "takriban mafungu 40 hadi 55", si "47 hasa".

Modeli iliyofunzwa kwa maduka makubwa ya nchi nyingine itakosa mvua ya Githurai na mishahara ya mwisho wa mwezi. Daftari lako linashinda modeli hiyo daftari likiwa kamili.

Mahali inapoharibika: kuweka wastani kwenye Jumapili iliyofungwa, kupuuza upotevu, au kuchuukulia oda moja ya mazishi kama kawaida mpya.`
      ),
      reveal([
        {
          termEn: "Moving average",
          termSw: "Wastani unaosonga",
          defEn: "The mean of the last n similar days, updated each week.",
          defSw: "Wastani wa siku n zinazofanana zilizopita, unasasishwa kila wiki.",
        },
        {
          termEn: "Baseline",
          termSw: "Msingi (baseline)",
          defEn: "The simple guess you must beat, often 'same as last week'.",
          defSw: "Makisio rahisi ambayo lazima ushinde, mara nyingi 'sawa na wiki iliyopita'.",
        },
        {
          termEn: "Shock",
          termSw: "Mshtuko",
          defEn: "A known future event the past average cannot see: a strike, a holiday, a school opening.",
          defSw: "Tukio lijulikanalo la kesho ambalo wastani wa zamani hauwezi kuona: mgomo, sikukuu, kufunguliwa shule.",
        },
        {
          termEn: "Range",
          termSw: "Masafa",
          defEn: "Low and high amounts you can live with, not a single fake-precise number.",
          defSw: "Kiasi cha chini na cha juu unachoweza kuishi nacho, si namba moja ya usahihi wa uongo.",
        },
      ]),
      note(
        "Worked example: four Saturdays of sukuma",
        "Mfano: Jumamosi nne za sukuma",
        `Nyambura's book, bunches sold:

- Sat 1: 48
- Sat 2: 52
- Sat 3: 40 (heavy rain)
- Sat 4: 50

Simple average: (48+52+40+50) / 4 = 47.5, about 48.

Baseline 'same as last week' would be 50.

She also writes waste those days: 6, 5, 2, 4 bunches. She does not want 48 if 5 will rot. She sets a range: buy 42 to 50, aim 45 if the forecast is dry, 40 if KMD says rain.

A downloaded 'AI sales app' with no local data says 80 because 'leafy greens trend up'. Her crate holds 55. She ignores 80.

Next Saturday is school opening. She adds about 8 bunches by judgement, not by the app. After the day she writes actual sales. That is how a forecast earns its keep: compare guess with book.`,
        `Daftari la Nyambura, mafungu yaliyouzwa:

- Jumamosi 1: 48
- Jumamosi 2: 52
- Jumamosi 3: 40 (mvua kubwa)
- Jumamosi 4: 50

Wastani rahisi: (48+52+40+50) / 4 = 47.5, takriban 48.

Msingi 'sawa na wiki iliyopita' ungekuwa 50.

Pia anaandika upotevu siku hizo: mafungu 6, 5, 2, 4. Hataki 48 kama 5 zitaoza. Anaweka masafa: nunua 42 hadi 50, lenga 45 utabiri ukiwa kavu, 40 KMD ikisema mvua.

'Programu ya AI ya mauzo' bila data ya eneo inasema 80 kwa sababu 'mboga za majani zinaelekea juu'. Kreti yake inachukua 55. Anapuuza 80.

Jumamosi ijayo ni kufunguliwa shule. Anaongeza takriban mafungu 8 kwa uamuzi, si kwa programu. Baada ya siku anaandika mauzo halisi. Ndivyo utabiri unavyolipa kodi yake: linganisha makisio na daftari.`
      ),
      scenario({
        titleEn: "Scenario: the funeral order",
        titleSw: "Hali: oda ya mazishi",
        situationEn:
          "Last Saturday a small hotel in Kericho sold 90 loaves instead of the usual 40 because of a funeral catering order. The sheet's four-week average is now 52. Tomorrow is an ordinary Sunday service week.",
        situationSw:
          "Jumamosi iliyopita hoteli ndogo Kericho iliuzu mikate 90 badala ya 40 ya kawaida kwa sababu ya oda ya mazishi. Wastani wa wiki nne kwenye jedwali sasa ni 52. Kesho ni wiki ya kawaida ya ibada ya Jumapili.",
        questionEn: "How should they forecast this Saturday?",
        questionSw: "Wataje kutabiri Jumamosi hii?",
        optionsEn: [
          "Order 52 because the average is mathematics",
          "Drop the funeral Saturday from the average, use the ordinary weeks (about 40), and only raise the order if another large booking is written in the diary",
          "Order 90 in case funerals continue",
          "Ask a chatbot with no diary access to pick a number",
        ],
        optionsSw: [
          "Kuagiza 52 kwa sababu wastani ni hisabati",
          "Kuondoa Jumamosi ya mazishi kwenye wastani, kutumia wiki za kawaida (takriban 40), na kuongeza oda tu kama uhifadhi mwingine mkubwa umeandikwa kwenye daftari",
          "Kuagiza 90 kama mazishi yataendelea",
          "Kuuliza chatbot isiyo na daftari ichague namba",
        ],
        correctIndex: 1,
        hintsEn: [
          "Mathematics on a one-off event treats a shock as climate.",
          "Right. Similar days in, shocks noted separately, diary for known future bookings.",
          "Stocking for a funeral that is not booked is waste.",
          "A tool without the diary cannot see the funeral or its absence.",
        ],
        hintsSw: [
          "Hisabati kwenye tukio la mara moja inachukulia mshtuko kama tabia ya kawaida.",
          "Sawa. Siku zinazofanana ziingie, mishtuko iandikwe kando, daftari la uhifadhi lijulikane.",
          "Kujaza kwa mazishi ambayo hayajahifadhiwa ni upotevu.",
          "Zana bila daftari haiwezi kuona mazishi wala kutokuwepo kwake.",
        ],
        explainEn:
          "Averages need similar days. One-off spikes stay in a note, not in the routine order.",
        explainSw:
          "Wastani unahitaji siku zinazofanana. Spike za mara moja zinabaki kwenye maezo, si kwenye oda ya kawaida.",
      }),
      quiz(
        "Your moving average says 200 loaves. A transport strike starts tomorrow. You should:",
        "Wastani wako unaosonga unasema mikate 200. Mgomo wa usafiri unaanza kesho. Unapaswa:",
        [
          "Order 200, because the model already decided",
          "Keep the average as a baseline, then lower or raise it with human judgement about who will still reach the shop",
          "Double the order so you never run out",
          "Throw away the notebook",
        ],
        [
          "Kuagiza 200, kwa sababu modeli imeisha amua",
          "Kuweka wastani kama msingi, kisha ushushe au upandishe kwa uamuzi wa binadamu kuhusu nani bado atafika dukani",
          "Kuzidisha oda ili usikose kamwe",
          "Kutupa daftari",
        ],
        1,
        "Forecasts extrapolate the past. Known shocks are layered on by a person who lives in the town.",
        "Utabiri unaendeleza yaliyopita. Mishtuko inayojulikana inawekwa na mtu anayeishi mjini."
      ),
      note(
        "Try it: four similar days",
        "Jaribu: siku nne zinazofanana",
        `From your sheet, pick one item and four comparable days (four Saturdays, or four month-end Fridays).

- Average them. Write the baseline 'last similar day'.
- Write a range: average minus a bit, average plus a bit, bounded by what you can store.
- Note one shock next week (rain, payday, holiday) and whether you will buy toward the low or high end.

Do not use a closed day in the average.`,
        `Kutoka jedwali lako, chagua bidhaa moja na siku nne zinazofanana (Jumamosi nne, au Ijumaa nne za mwisho wa mwezi).

- Weka wastani. Andika msingi 'siku inayofanana iliyopita'.
- Andika masafa: wastani kutoa kidogo, wastani kuongeza kidogo, ukiwa na kikomo cha unachoweza kuhifadhi.
- Andika mshtuko mmoja wiki ijayo (mvua, siku ya malipo, sikukuu) na kama utanunua upande wa chini au wa juu.

Usitumie siku iliyofungwa kwenye wastani.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Forecast from your similar days. Report a range. Layer shocks by hand.
- Beat 'same as last week' or keep that baseline.
- Next: retrieval — answering from your price list, not from the model's memory.`,
        `- Tabiri kutoka siku zako zinazofanana. Toa masafa. Weka mishtuko kwa mkono.
- Shinda 'sawa na wiki iliyopita' au baki na msingi huo.
- Ifuatayo: utafutaji — kujibu kutoka orodha yako ya bei, si kumbukumbu ya modeli.`
      ),
    ],
  },

  {
    id: "biz-i-u5",
    titleEn: "Retrieval from your own price list",
    titleSw: "Kutafuta majibu kutoka orodha yako ya bei",
    cards: [
      note(
        "Ground the answer in a document you own",
        "Weka jibu kwenye waraka unaoimiliki",
        `Retrieval means the tool first finds a piece of your document, then writes a sentence from that piece. For a shop, the document is today's price list, the stock ticks, maybe house rules. This is the idea behind retrieval-augmented generation (RAG), without the engineering yet.

Why it matters: a language model's memory is an average of the internet, including last year's cooking-fat prices. If it answers from memory, it will sell at a loss or a fantasy.

The working rule: paste or attach the list, say "answer only from this list", and require "I do not have that" when the row is missing. You still check the quote against the paper on the wall. Retrieval reduces invention. It does not remove the human.`,
        `Utafutaji (retrieval) inamaanisha zana kwanza hupata kipande cha waraka wako, kisha inaandika sentensi kutoka kipande hicho. Kwa duka, waraka ni orodha ya bei ya leo, alama za bidhaa, labda kanuni za nyumba. Hili ndilo wazo la retrieval-augmented generation (RAG), bila uhandisi bado.

Kwa nini ni muhimu: kumbukumbu ya modeli ya lugha ni wastani wa mtandao, bei za mafuta ya mwaka jana zikiwemo. Ikijibu kutoka kumbukumbu, itauza kwa hasara au ndoto.

Kanuni ya kazi: bandika au ambatisha orodha, sema "jibu kutoka orodha hii tu", na lazima iseme "sina hilo" mstari ukikosekana. Bado unakagua nukuu dhidi ya karatasi ukutani. Utafutaji unapunguza kubuni. Haondoi binadamu.`
      ),
      reveal([
        {
          termEn: "Source document",
          termSw: "Waraka chanzo",
          defEn: "The list or file the answer must come from, dated today if it is prices.",
          defSw: "Orodha au faili ambalo jibu lazima litoke, lenye tarehe ya leo kama ni bei.",
        },
        {
          termEn: "Grounding",
          termSw: "Kuweka msingi",
          defEn: "Tying each number in the reply to a row in that document.",
          defSw: "Kufungamanisha kila namba katika jibu na mstari katika waraka huo.",
        },
        {
          termEn: "Refusal on miss",
          termSw: "Kukataa ukikosa",
          defEn: "Saying you do not have the fact, instead of filling the gap with a likely price.",
          defSw: "Kusema huna ukweli, badala ya kujaza pengo kwa bei inayowezekana.",
        },
        {
          termEn: "Stale list",
          termSw: "Orodha ya zamani",
          defEn: "Yesterday's prices used as if they were today's. Retrieval on a stale file is still wrong.",
          defSw: "Bei za jana zikitumika kama za leo. Utafutaji kwenye faili la zamani bado ni kosa.",
        },
      ]),
      note(
        "Worked example: two answers to the same question",
        "Mfano: majibu mawili kwa swali lile lile",
        `Customer: "Bei ya unga 2 kg?"

Mama Njeri's list today (paper, 28 Sep):

- Unga 1 kg — 140
- Unga 2 kg — 270
- Sugar 1 kg — 170

Un-grounded chatbot (no list): "Unga 2 kg is about KES 200 in Kenya." If she sends that, she loses 70 on every bag versus her real 270.

Grounded prompt: "Here is today's list. Quote only from it. If missing, say so." Answer: "Unga 2 kg is KES 270 on today's list."

Now the customer asks for unga 5 kg. The list has no 5 kg. Grounded answer: "Sina unga 5 kg kwenye orodha ya leo. Mama Njeri atajibu." She can pack two 2 kg and one 1 kg (270+270+140 = 680) if she wants, but that is her judgement, not the bot's invention of a 5 kg price.

If she retrieved from last March's list, 2 kg might still show 220. Grounding on a stale file is how shops quietly lose money.`,
        `Mteja: "Bei ya unga 2 kg?"

Orodha ya Mama Njeri leo (karatasi, 28 Sep):

- Unga 1 kg — 140
- Unga 2 kg — 270
- Sukari 1 kg — 170

Chatbot isiyo na msingi (bila orodha): "Unga 2 kg ni takriban KES 200 Kenya." Akituma hiyo, anapoteza 70 kwa kila mfuko dhidi ya 270 yake halisi.

Maagizo yenye msingi: "Hii ni orodha ya leo. Nukuu kutoka hiyo tu. Ikiwa haipo, sema." Jibu: "Unga 2 kg ni KES 270 kwenye orodha ya leo."

Sasa mteja anauliza unga 5 kg. Orodha haina 5 kg. Jibu lenye msingi: "Sina unga 5 kg kwenye orodha ya leo. Mama Njeri atajibu." Anaweza kufunga 2 kg mbili na 1 kg moja (270+270+140 = 680) akitaka, lakini huo ni uamuzi wake, si bot kubuni bei ya 5 kg.

Akikitafuta kutoka orodha ya Machi iliyopita, 2 kg huenda ikaonyesha 220. Msingi kwenye faili la zamani ndiyo jinsi maduka yanavyopoteza pesa kimya.`
      ),
      scenario({
        titleEn: "Scenario: last year's menu",
        titleSw: "Hali: menyu ya mwaka jana",
        situationEn:
          "A small hotel connects a chatbot to a PDF menu from 2025. Eggs are now KES 50 more. A guest is quoted the PDF price and argues at the till.",
        situationSw:
          "Hoteli ndogo inaunganisha chatbot na PDF ya menyu ya 2025. Mayai sasa ni KES 50 zaidi. Mgeni anatajwa bei ya PDF na anabishana till.",
        questionEn: "What is the architecture fix?",
        questionSw: "Ni marekebisho gani ya muundo?",
        optionsEn: [
          "Fine-tune the model on 2025 prices so it 'remembers better'",
          "Point retrieval at today's dated menu only, refuse missing items, and have a person update the file when the wall prices change",
          "Always add 10 percent to whatever the bot says",
          "Answer menu questions only after 10 pm",
        ],
        optionsSw: [
          "Kufunza modeli kwa bei za 2025 ili 'ikumbuke vizuri'",
          "Kuelekeza utafutaji kwenye menyu ya leo yenye tarehe tu, kukataa vitu vinavyokosekana, na mtu asasishe faili bei za ukuta zinapobadilika",
          "Kuongeza asilimia 10 kila mara kwenye kile bot inasema",
          "Kujibu maswali ya menyu baada ya saa 4 usiku tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Training on stale prices bakes the error in. Retrieval on a live file is the fix.",
          "Right. The system of record is today's menu. The bot quotes it or declines.",
          "A blanket markup still starts from the wrong number.",
          "Time of day does not refresh a 2025 PDF.",
        ],
        hintsSw: [
          "Kufunza kwa bei za zamani kunaweka kosa ndani. Utafutaji kwenye faili hai ndiyo marekebisho.",
          "Sawa. Rekodi rasmi ni menyu ya leo. Bot inanukuu au inakataa.",
          "Ongezeko la blanketi bado linaanza na namba isiyo sahihi.",
          "Saa ya siku haisasishi PDF ya 2025.",
        ],
        explainEn:
          "For anything that spends the guest's money, retrieve from today's list or do not quote.",
        explainSw:
          "Kwa kila kitu kinachotumia pesa za mgeni, tafuta kutoka orodha ya leo au usinukuu.",
      }),
      quiz(
        "Retrieval still needs a human check because:",
        "Utafutaji bado unahitaji ukaguzi wa binadamu kwa sababu:",
        [
          "Humans enjoy typing",
          "The tool can retrieve the wrong row, an old file, or dress a miss as a fluent sentence",
          "Kiswahili cannot be retrieved",
          "M-Pesa agents forbid documents",
        ],
        [
          "Binadamu hufurahia kuandika",
          "Zana inaweza kupata mstari usio sahihi, faili la zamani, au kuvaa kukosa kama sentensi laini",
          "Kiswahili hakiwezi kutafutwa",
          "Mawakala wa M-Pesa wanakataza nyaraka",
        ],
        1,
        "Grounding lowers the chance of invention. It does not prove the file is today's or that the right row was picked.",
        "Kuweka msingi kunapunguza nafasi ya kubuni. Hakuthibitishi faili ni la leo wala kwamba mstari sahihi ulichaguliwa."
      ),
      note(
        "Try it: paste and refuse",
        "Jaribu: bandika na ukatae",
        `Write five real prices on paper with today's date.

- Ask a chatbot the price of item 3 without pasting the list. Note what it invents.
- Paste the five lines and ask again: answer only from this list.
- Ask for a sixth item that is not on the list. The good answer is a refusal.

Do not paste tills, PINs or customer names. Prices only.`,
        `Andika bei tano halisi kwenye karatasi na tarehe ya leo.

- Uliza chatbot bei ya bidhaa ya 3 bila kubandika orodha. Andika inachobuni.
- Bandika mistari mitano na uulize tena: jibu kutoka orodha hii tu.
- Uliza bidhaa ya sita ambayo haiko kwenye orodha. Jibu jema ni kukataa.

Usiweke till, PIN wala majina ya wateja. Bei tu.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Quote today's list or refuse. Stale files are still wrong.
- Next: credit scoring ideas, and why informal workers get hurt when cash is treated as invisibility.`,
        `- Nukuu orodha ya leo au kataa. Faili za zamani bado ni kosa.
- Ifuatayo: wazo la alama za mkopo, na kwa nini wafanyakazi wa kawaida wanaumia pesa taslimu zikichukuliwa kama kutokuonekana.`
      ),
    ],
  },

  {
    id: "biz-i-u6",
    titleEn: "Credit fairness for informal workers",
    titleSw: "Usawa wa mkopo kwa wafanyakazi wa kawaida",
    cards: [
      note(
        "A score is a guess about repayment, not a moral grade",
        "Alama ni makisio kuhusu kulipa, si daraja la maadili",
        `Digital credit scores estimate how likely someone is to repay, from data the lender can see. In Kenya, the Central Bank of Kenya has licensed digital credit providers since 2022. That licensing is about who may lend, not a blessing on every formula.

Informal workers — mama mboga, boda, jua kali, casual hotel staff — often earn in cash. If a model treats "no M-Pesa history" as "high risk", it is measuring visibility, not honesty. That is bias: a systematic tilt against people whose lives were not in the training data.

Fairness here does not mean everyone gets the same loan. It means the reason for a no is something the person can understand and, if wrong, contest. A shopkeeper using AI to decide deni for regulars faces the same trap: punishing cash customers because the sheet only saw till payments.

AI can summarise a repayment history you already wrote. It should not invent a score from rumours, ethnicity, or a photo.`,
        `Alama za mkopo wa kidijitali hukadiria uwezekano mtu atalipa, kutoka data mkopeshaji anayoiona. Nchini Kenya, Benki Kuu ya Kenya imekuwa ikitoa leseni kwa watoaji wa mkopo wa kidijitali tangu 2022. Leseni hiyo inahusu nani anaweza kukopesha, si baraka kwa kila fomula.

Wafanyakazi wa kawaida — mama mboga, boda, jua kali, wafanyakazi wa hoteli wa mchana — mara nyingi hupata pesa taslimu. Modeli ikichukulia "hakuna historia ya M-Pesa" kama "hatari kubwa", inapima kuonekana, si uaminifu. Huo ni upendeleo: mwelekeo wa kimfumo dhidi ya watu ambao maisha yao hayakuwa kwenye data ya mafunzo.

Usawa hapa haimaanishi kila mtu anapata mkopo sawa. Inamaanisha sababu ya hapana ni kitu mtu anaweza kuelewa na, kikiwa kosa, kupinga. Muuza duka anayetumia AI kuamua deni kwa wateja wa kawaida anakutana na mtego uleule: kuwaadhibu wateja wa taslimu kwa sababu jedwali liliona malipo ya till tu.

AI inaweza kufupisha historia ya malipo uliyoandika tayari. Haipaswi kubuni alama kutoka uvumi, kabila, au picha.`
      ),
      reveal([
        {
          termEn: "Credit score",
          termSw: "Alama ya mkopo",
          defEn: "A model's estimate of repayment chance, not a verdict on someone's character.",
          defSw: "Makadirio ya modeli ya nafasi ya kulipa, si hukumu ya tabia ya mtu.",
        },
        {
          termEn: "Proxy",
          termSw: "Kibadala (proxy)",
          defEn: "A stand-in feature, such as phone type, that secretly tracks wealth or location.",
          defSw: "Sifa mbadala, kama aina ya simu, inayofuatilia kimya utajiri au mahali.",
        },
        {
          termEn: "Adverse decision",
          termSw: "Uamuzi mbaya",
          defEn: "A no, a smaller limit, or a higher fee. The person should be told a real reason.",
          defSw: "Hapana, kikomo kidogo, au ada kubwa. Mtu anapaswa kuambiwa sababu ya kweli.",
        },
        {
          termEn: "Cash invisibility",
          termSw: "Kutokuonekana kwa taslimu",
          defEn: "When cash earnings never enter the data, so a good payer looks like a ghost.",
          defSw: "Mapato ya taslimu yasipoingia kwenye data, hivyo mlipaji mzuri anaonekana kama mzuka.",
        },
      ]),
      note(
        "Worked example: two tea sellers, one score",
        "Mfano: wauza chai wawili, alama moja",
        `Imagine a digital lender scores two women who both sell tea at a matatu stage in Kisii.

Wanjiru takes almost all payments on a till her son set up. 90 days of small inflows. The model gives her a higher limit.

Kwamboka's customers are conductors who pay cash. She banks lumps once a week. Same profit, about KES 2,400 a week each after costs. The model sees sparse M-Pesa and says no.

If the feature is "number of M-Pesa credits in 90 days", Kwamboka is invisible. The model can be accurate on the data it has and still unfair on the people it never saw.

A fairer shop deni rule for your own customers: write cash and till together, as you did in beginner. Offer small credit from your own book (paid on Friday, three times in a row) rather than from a photo or a rumour. If you use a lender, ask what happens to cash-only earners — and do not paste your customers' IDs into a chatbot to "get them a score".`,
        `Fikiria mkopeshaji wa kidijitali anawapa alama wanawake wawili wanaouza chai kwenye kituo cha matatu Kisii.

Wanjiru hupokea karibu malipo yote kwenye till aliyoandaliwa na mwanawe. Siku 90 za mapato madogo. Modeli inampa kikomo kikubwa.

Kwamboka wateja wake ni makondakta wanaolipa taslimu. Anaweka benki mara moja kwa wiki. Faida sawa, takriban KES 2,400 kwa wiki kila mmoja baada ya gharama. Modeli inaona M-Pesa chache na inasema hapana.

Sifa ikiwa "idadi ya mikopo ya M-Pesa katika siku 90", Kwamboka haonekani. Modeli inaweza kuwa sahihi kwenye data iliyo nayo na bado isiyo na usawa kwa watu ambao haikuwaona.

Kanuni bora ya deni ya duka lako: andika taslimu na till pamoja, kama ulivyofanya mwanzoni. Toa mkopo mdogo kutoka daftari lako (amelipa Ijumaa, mara tatu mfululizo) si kutoka picha au uvumi. Ukitumia mkopeshaji, uliza kinachotokea kwa wanaopata taslimu tu — na usiweke vitambulisho vya wateja kwenye chatbot ili "uwapattie alama".`
      ),
      scenario({
        titleEn: "Scenario: the salon app says no",
        titleSw: "Hali: programu ya saluni inasema hapana",
        situationEn:
          "Akinyi wants a small stock loan. An app declines her because her salon till is quiet on Mondays and Tuesdays, when she works in cash at home weaves. The screen says only 'low score'.",
        situationSw:
          "Akinyi anataka mkopo mdogo wa bidhaa. Programu inamkataa kwa sababu till ya saluni ni tulivu Jumatatu na Jumanne, anapofanya kazi taslimu nyumbani kwa weave. Skrini inasema tu 'alama ya chini'.",
        questionEn: "What is the most responsible next step?",
        questionSw: "Hatua yenye uwajibikaji zaidi ni ipi?",
        optionsEn: [
          "Paste her customers' names into a chatbot and ask it to write a better score",
          "Ask the lender for the real reason, offer her notebook of cash days as extra evidence, and try a SACCO or chama that looks at more than till traffic",
          "Open a second till in a friend's name to look busier",
          "Accept that AI is always fair because it has no feelings",
        ],
        optionsSw: [
          "Kuweka majina ya wateja kwenye chatbot na kuiomba iandike alama bora",
          "Kuuliza mkopeshaji sababu halisi, kutoa daftari lake la siku za taslimu kama ushahidi wa ziada, na kujaribu SACCO au chama kinachoangalia zaidi ya msongamano wa till",
          "Kufungua till ya pili kwa jina la rafiki ili aonekane na shughuli",
          "Kukubali kwamba AI daima ina usawa kwa sababu haina hisia",
        ],
        correctIndex: 1,
        hintsEn: [
          "Other people's names will not fix a visibility problem, and they leak data.",
          "Right. An adverse decision needs a reason. Cash books and human lenders are part of Kenyan credit, not a failure to be digital.",
          "A till in someone else's name is a lie and can be fraud.",
          "A system with no feelings can still encode cash invisibility.",
        ],
        hintsSw: [
          "Majina ya watu wengine hayatatui tatizo la kuonekana, na yanavuja data.",
          "Sawa. Uamuzi mbaya unahitaji sababu. Madaftari ya taslimu na wakopeshaji binadamu ni sehemu ya mkopo Kenya, si kushindwa kuwa wa kidijitali.",
          "Till kwa jina la mtu mwingine ni uongo na inaweza kuwa ulaghai.",
          "Mfumo usio na hisia bado unaweza kuweka kutokuonekana kwa taslimu.",
        ],
        explainEn:
          "Fair credit looks at how people actually earn. Cash is data if you write it. A silent till is not proof of a silent business.",
        explainSw:
          "Mkopo wenye usawa unaangalia jinsi watu wanavyopata riziki. Taslimu ni data ukiandika. Till tulivu si ushahidi wa biashara tulivu.",
      }),
      quiz(
        "Why can a 90% accurate credit model still be unfair to boda riders?",
        "Kwa nini modeli ya mkopo yenye usahihi wa 90% bado inaweza kukosa usawa kwa madereva wa boda?",
        [
          "Because 90% is a low number",
          "Because accuracy on the people in the test set says little about cash-only riders who were never in the data",
          "Because CBK forbids all scoring",
          "Because Kiswahili cannot be scored",
        ],
        [
          "Kwa sababu 90% ni namba ndogo",
          "Kwa sababu usahihi kwa watu walio kwenye seti ya majaribio hausemi mengi kuhusu madereva wa taslimu tu ambao hawakuwepo kwenye data",
          "Kwa sababu Benki Kuu inakataza alama zote",
          "Kwa sababu Kiswahili hauwezi kupewa alama",
        ],
        1,
        "Accuracy is about the sample you measured. Informal cash work can sit outside that sample. CBK licensing does not make a formula fair.",
        "Usahihi unahusu sampuli uliyopima. Kazi ya taslimu ya kawaida inaweza kukaa nje ya sampuli hiyo. Leseni ya Benki Kuu haifanyi fomula kuwa na usawa."
      ),
      note(
        "Try it: two columns of evidence",
        "Jaribu: safu mbili za ushahidi",
        `If you extend deni to anyone, draw two columns: Visible on M-Pesa, Visible only in the book.

- List three customers or neighbours in each (codes, not full IDs).
- Ask: would an app that only sees tills treat these groups the same?
- Write one rule you will use instead, such as 'three on-time cash or till payments in my book'.

Do not upload this page to a chatbot.`,
        `Ukikopesha mtu yeyote, chora safu mbili: Inaonekana kwenye M-Pesa, Inaonekana kwenye daftari tu.

- Orodhesha wateja au majirani watatu kila moja (misimbo, si vitambulisho kamili).
- Jiulize: programu inayoona till tu ingewachukulia sawa?
- Andika kanuni moja utakayotumia badala yake, kama 'malipo matatu kwa wakati, taslimu au till, kwenye daftari langu'.

Usipakie ukurasa huu kwenye chatbot.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Scores guess repayment from visible data. Cash can be invisible, not dishonest.
- Adverse decisions need reasons. Do not paste IDs into a bot for a score.
- Next: fraud patterns — what looks odd, without turning you into a police model.`,
        `- Alama zinakisia malipo kutoka data inayoonekana. Taslimu inaweza kuwa isiyoonekana, si ya udanganyifu.
- Maamuzi mabaya yanahitaji sababu. Usiweke vitambulisho kwenye bot kwa alama.
- Ifuatayo: mifumo ya ulaghai — kinachoonekana shwari, bila kukugeuza modeli ya polisi.`
      ),
    ],
  },

  {
    id: "biz-i-u7",
    titleEn: "Fraud patterns, conceptually",
    titleSw: "Mifumo ya ulaghai, kwa dhana",
    cards: [
      note(
        "An anomaly is a question, not a conviction",
        "Tukio lisilo la kawaida ni swali, si hatia",
        `Fraud detection looks for patterns that differ from the usual: a till that suddenly receives many small payments at 2 am, a supplier account that changed by one digit, a customer who always shows screenshots but never appears on your phone.

A model can flag anomalies. A person still decides. Computer Misuse and Cybercrimes Act, 2018 addresses computer-related offences; it does not authorise you to publicly name a neighbour as a thief because a dashboard turned red.

Conceptually, you need a baseline of "normal for this shop", a threshold worth waking a human, and a log of what you did. False alarms cost trust: accusing a regular whose son paid from a new number. Misses cost money: accepting a fake confirmation.

Never ask a chatbot to judge fraud from a pasted PIN or a customer's ID photo.`,
        `Utambuzi wa ulaghai hutafuta mifumo inayotofautiana na kawaida: till inayopokea ghafla malipo madogo mengi saa 8 usiku, akaunti ya msambazaji iliyobadilika kwa tarakimu moja, mteja anayeonyesha picha kila mara lakini haonekani kwenye simu yako.

Modeli inaweza kuashiria yasiyo ya kawaida. Mtu bado anaamua. Sheria ya Matumizi Mabaya ya Kompyuta na Uhalifu wa Mtandao, 2018 inashughulikia makosa yanayohusiana na kompyuta; haikupi ruhusa kumtaja jirani hadharani kama mwizi kwa sababu dashibodi iligeuka nyekundu.

Kwa dhana, unahitaji msingi wa "kawaida ya duka hili", kiwango kinachostahili kumwamsha binadamu, na kumbukumbu ya ulichofanya. Kengele za uongo zinagharimu imani: kumshtaki mteja wa kawaida ambaye mwanawe alilipa kutoka namba mpya. Kukosa kunagharimu pesa: kukubali uthibitisho bandia.

Usiombe chatbot ihukumu ulaghai kutoka PIN iliyobandikwa au picha ya kitambulisho cha mteja.`
      ),
      reveal([
        {
          termEn: "Anomaly",
          termSw: "Tukio lisilo la kawaida",
          defEn: "A payment or message that does not match this shop's usual pattern.",
          defSw: "Malipo au ujumbe usiofanana na mfumo wa kawaida wa duka hili.",
        },
        {
          termEn: "False positive",
          termSw: "Kengele ya uongo",
          defEn: "Flagging an honest event as fraud.",
          defSw: "Kuashiria tukio la kweli kama ulaghai.",
        },
        {
          termEn: "False negative",
          termSw: "Kukosa kashfa",
          defEn: "Letting a real scam through.",
          defSw: "Kuacha utapeli halisi upite.",
        },
        {
          termEn: "Baseline",
          termSw: "Msingi wa kawaida",
          defEn: "What this till, this hour, this weekday usually looks like, from your own book.",
          defSw: "Jinsi till hii, saa hii, siku hii huwa, kutoka daftari lako.",
        },
      ]),
      note(
        "Worked example: 2 am till pings",
        "Mfano: milio ya till saa 8 usiku",
        `Juma's hardware till in Machakos usually sleeps after 7 pm. One night the phone shows 15 incoming Lipa na M-Pesa notices of KES 50 each between 1:40 and 2:10 am. Total 750.

Baseline: last four weeks, zero payments after 8 pm.

Anomaly: many tiny night payments. Possible stories: a thief testing stolen numbers; a confused customer; a family member using the till as a wallet.

He does not post the numbers on a neighbourhood group. He does not paste the SMS into a public chatbot. He does not cash out 750 to a stranger who arrives at 6 am with a screenshot.

He waits, checks the official statement in the morning, calls the payment provider's known support path, and tells his partner. The 750 stays until a person he knows accounts for it.

Pattern concept: sudden volume, odd hour, round small amounts. Action: freeze goods, verify on his phone, escalate to a person — not to a model that "sounds sure".`,
        `Till ya vifaa ya Juma Machakos kwa kawaida hulala baada ya saa 1 usiku. Usiku mmoja simu inaonyesha arifa 15 za Lipa na M-Pesa za KES 50 kila moja kati ya saa 7:40 na 8:10 usiku. Jumla 750.

Msingi: wiki nne zilizopita, malipo sifuri baada ya saa 2 usiku.

Tukio: malipo madogo mengi usiku. Hadithi zinazowezekana: mwizi anajaribu namba zilizoibwa; mteja aliyevurugika; mwanafamilia anatumia till kama pochi.

Hachapishi namba kwenye kikundi cha mtaa. Haweki SMS kwenye chatbot ya umma. Hatoi 750 kwa mgeni anayefika saa 12 asubuhi na picha.

Anasubiri, anakagua taarifa rasmi asubuhi, anapiga njia inayojulikana ya msaada ya mtoa huduma, na anamwambia mwenzi wake. 750 inabaki mpaka mtu anayemjua aieleze.

Dhana ya mfumo: kiasi cha ghafla, saa isiyo ya kawaida, kiasi kidogo marudio. Hatua: simamisha bidhaa, thibitisha kwenye simu yake, inua kwa mtu — si kwa modeli "inayoonekana na uhakika".`
      ),
      scenario({
        titleEn: "Scenario: the screenshot regular",
        titleSw: "Hali: mteja wa picha",
        situationEn:
          "A salon client always shows a screenshot of paying Akinyi's till. Three times the shop phone had no matching SMS. The client now says an AI app 'verified' the screenshot.",
        situationSw:
          "Mteja wa saluni kila mara huonyesha picha ya kulipa till ya Akinyi. Mara tatu simu ya duka haikuwa na SMS inayofanana. Sasa mteja anasema programu ya AI 'imethibitisha' picha.",
        questionEn: "What should Akinyi do?",
        questionSw: "Akinyi afanye nini?",
        optionsEn: [
          "Trust the AI verification of the screenshot",
          "Refuse the goods until the payment appears on the shop's own M-Pesa list, and stop treating screenshots as proof",
          "Ask the client for their PIN so she can check",
          "Post the client's photo in a WhatsApp group as a warning",
        ],
        optionsSw: [
          "Kuamini uthibitisho wa AI wa picha",
          "Kukataa bidhaa mpaka malipo yaonekane kwenye orodha ya M-Pesa ya duka, na kuacha kuchuukulia picha kama uthibitisho",
          "Kumuomba mteja PIN yake ili akague",
          "Kuchapisha picha ya mteja kwenye kikundi cha WhatsApp kama onyo",
        ],
        correctIndex: 1,
        hintsEn: [
          "A tool looking at a picture cannot see your till. Screenshots are easy to edit.",
          "Right. Your phone is the record. Repeat misses are a pattern. Still no PIN, still no public shaming.",
          "Asking for a PIN is itself a scam pattern — do not copy it.",
          "Public accusation from a dashboard is how you get sued and still lose hair stock.",
        ],
        hintsSw: [
          "Zana inayoangalia picha haiwezi kuona till yako. Picha ni rahisi kuhariri.",
          "Sawa. Simu yako ndiyo rekodi. Kukosa mara kwa mara ni mfumo. Bado hakuna PIN, bado hakuna fedheha ya hadhara.",
          "Kuomba PIN lenyewe ni mfumo wa utapeli — usinakili.",
          "Mashtaka ya hadhara kutoka dashibodi ndiyo njia ya kushtakiwa na bado kupoteza bidhaa.",
        ],
        explainEn:
          "Patterns justify extra checks, not extra cruelty. Proof lives on your till, not on someone else's screen or an AI stamp.",
        explainSw:
          "Mifumo inahalalisha ukaguzi wa ziada, si ukatili wa ziada. Uthibitisho uko kwenye till yako, si kwenye skrini ya mtu mwingine wala muhuri wa AI.",
      }),
      quiz(
        "A fraud flag should first cause you to:",
        "Alama ya ulaghai inapaswa kwanza kukufanya:",
        [
          "Pay out faster so the customer does not complain",
          "Pause, check your own records, and escalate to a person you trust",
          "Let a chatbot interview the suspect using their ID number",
          "Announce the name at the stage",
        ],
        [
          "Kutoa pesa haraka ili mteja asilalamike",
          "Kusimama, kukagua rekodi zako, na kuinua suala kwa mtu unayemwamini",
          "Kuacha chatbot imhoji mshukiwa kwa namba yake ya kitambulisho",
          "Kutangaza jina kwenye kituo",
        ],
        1,
        "Flags are questions. Your books and a human decision are the answer. Speed and public naming make misses and lawsuits.",
        "Alama ni maswali. Madaftari yako na uamuzi wa binadamu ndiyo jibu. Kasi na kutangaza majina huleta kukosa na mashtaka."
      ),
      note(
        "Try it: write your baseline",
        "Jaribu: andika msingi wako",
        `On a card by the till:

- Usual hours money arrives
- Usual largest one payment
- How we confirm (shop phone SMS, not screenshots)
- Who we call if something is odd (name, saved number)

Review after one week. Add one anomaly you actually saw and what you did. No customer names on the card if it can be photographed.`,
        `Kwenye kadi kando ya till:

- Saa za kawaida pesa inapofika
- Malipo makubwa ya kawaida ya mara moja
- Jinsi tunavyothibitisha (SMS ya simu ya duka, si picha)
- Nani tunayempigia kitu kikiwa shwari (jina, namba iliyohifadhiwa)

Kagua baada ya wiki moja. Ongeza tukio moja lisilo la kawaida uliloona na ulichofanya. Hakuna majina ya wateja kwenye kadi ikiwa inaweza kupigwa picha.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Anomalies ask questions. Humans answer. Screenshots are not proof.
- Next: data protection for a small shop — ODPC, consent, how long you keep lists.`,
        `- Yasiyo ya kawaida yanauliza maswali. Binadamu anajibu. Picha si uthibitisho.
- Ifuatayo: ulinzi wa data kwa duka dogo — ODPC, ridhaa, muda wa kuweka orodha.`
      ),
    ],
  },

  {
    id: "biz-i-u8",
    titleEn: "Data protection for a small shop",
    titleSw: "Ulinzi wa data kwa duka dogo",
    cards: [
      note(
        "If you keep people's details, you have duties",
        "Ukihifadhi taarifa za watu, una wajibu",
        `The Data Protection Act, 2019 protects personal data. The Office of the Data Protection Commissioner (ODPC) registers data controllers and processors and handles complaints. Data Protection (General) Regulations, 2021 sit under the Act.

You do not need to become a lawyer. You do need a habit: collect less, say why, keep it locked, do not keep it forever, and do not paste it into a public chatbot.

A duka's deni book, a salon's WhatsApp list, a hotel guest register, an agent's KYC copies — these are personal data. Children's data and health notes are sensitive and do not belong in a shop AI tool.

ODPC registration matters more as you grow or handle data for others. Even before that, consent means a real yes for a stated use, not a hidden extra line in a promo.`,
        `Sheria ya Ulinzi wa Data, 2019 inalinda data binafsi. Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) inawasajili wadhibiti na wasindikaji wa data na inashughulikia malalamiko. Kanuni za Ulinzi wa Data (Kuu), 2021 ziko chini ya Sheria.

Huhitaji kuwa mwanasheria. Unahitaji tabia: kusanya kidogo, sema kwa nini, funga, usiweke milele, na usiweke kwenye chatbot ya umma.

Daftari la deni la duka, orodha ya WhatsApp ya saluni, daftari la wageni la hoteli, nakala za KYC za agent — hizi ni data binafsi. Data ya watoto na maelezo ya afya ni nyeti na si ya zana ya AI ya duka.

Usajili wa ODPC unazidi kuwa muhimu unapokua au unaposhughulikia data kwa niaba ya wengine. Hata kabla ya hapo, ridhaa inamaanisha ndiyo halisi kwa matumizi yaliyotajwa, si mstari wa ziada uliofichwa kwenye ofa.`
      ),
      reveal([
        {
          termEn: "Data controller",
          termSw: "Mdhibiti wa data",
          defEn: "The person or shop who decides why and how personal data is used.",
          defSw: "Mtu au duka linaloamua kwa nini na jinsi data binafsi inavyotumika.",
        },
        {
          termEn: "Retention",
          termSw: "Muda wa kuhifadhi",
          defEn: "How long you keep a list. When the reason ends, you delete or lock it away.",
          defSw: "Muda unahifadhi orodha. Sababu ikiisha, unafuta au unaifunga.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kikomo cha madhumuni",
          defEn: "Using numbers collected for deni only for deni, not for a surprise marketing blast.",
          defSw: "Kutumia namba zilizokusanywa kwa deni kwa deni tu, si kwa ofa ya kushtukiza.",
        },
        {
          termEn: "ODPC",
          termSw: "ODPC",
          defEn: "The Office of the Data Protection Commissioner, which oversees the Act.",
          defSw: "Ofisi ya Kamishna wa Ulinzi wa Data, inayosimamia Sheria.",
        },
      ]),
      note(
        "Worked example: the salon broadcast",
        "Mfano: tangazo la saluni",
        `Akinyi has 80 WhatsApp numbers of people who booked once. She wants a Saturday promo.

Unlawful-feeling path: upload the 80 chats to a tool that "builds customer profiles", including notes like "comes with child". Then blast a weave discount.

Safer path: she writes the promo once (AI may draft, she checks prices). She sends it only to people who still message her, or she puts a sign in the salon: "WhatsApp reminders? Tell us yes." She does not keep health notes. After 12 months of silence she deletes the number from the promo list.

If a client asks "what do you hold on me?", she can show the booking page: name or nickname, number, last date. That is the access habit the Act describes, in shop-scale form.

She does not need a circular number from CBK for this. She needs a locked phone, a short list, and a no to uploading.`,
        `Akinyi ana namba 80 za WhatsApp za waliowahi kuweka miadi. Anataka ofa ya Jumamosi.

Njia mbaya: kupakia gumzo 80 kwenye zana inayojenga "wasifu wa wateja", maelezo kama "huja na mtoto" yakiwemo. Kisha kutuma punguzo la weave kwa wote.

Njia salama: anaandika ofa mara moja (AI inaweza kuandika rasimu, yeye anakagua bei). Anaituma tu kwa wanaomtumia ujumbe bado, au anaweka alama saluni: "Ukumbusho wa WhatsApp? Tuambie ndiyo." Hahifadhi maelezo ya afya. Baada ya kimya cha miezi 12 anafuta namba kwenye orodha ya ofa.

Mteja akiuliza "unanishikilia nini?", anaweza kuonyesha ukurasa wa miadi: jina au jina la utani, namba, tarehe ya mwisho. Hiyo ndiyo tabia ya ufikiaji Sheria inayoeleza, kwa kipimo cha duka.

Hahitaji namba ya waraka wa Benki Kuu kwa hili. Anahitaji simu iliyofungwa, orodha fupi, na hapana ya kupakia.`
      ),
      scenario({
        titleEn: "Scenario: the agent photocopier",
        titleSw: "Hali: nakala za agent",
        situationEn:
          "An M-Pesa agent is told by a visiting 'consultant' to photograph every customer's ID, upload the photos to a chatbot, and ask it to 'complete KYC overnight'.",
        situationSw:
          "Agent wa M-Pesa anaambiwa na 'mshauri' anayetembelea kupiga picha kitambulisho cha kila mteja, kupakia picha kwenye chatbot, na kuiomba 'imalize KYC usiku kucha'.",
        questionEn: "What should the agent do?",
        questionSw: "Agent afanye nini?",
        optionsEn: [
          "Upload, because KYC is mandatory",
          "Refuse. KYC stays at the window with the registered agent. ID photos are sensitive. A chatbot is not the payment provider's process",
          "Upload but blur the faces",
          "Ask the chatbot to delete the photos after scoring",
        ],
        optionsSw: [
          "Kupakia, kwa sababu KYC ni lazima",
          "Kukataa. KYC inabaki dirishani na agent aliyeandikishwa. Picha za kitambulisho ni nyeti. Chatbot si mchakato wa mtoa huduma ya malipo",
          "Kupakia lakini kuficha nyuso",
          "Kuiomba chatbot ifute picha baada ya kutoa alama",
        ],
        correctIndex: 1,
        hintsEn: [
          "KYC is mandatory as a human agent process, not as a paste into a random model.",
          "Right. Agents still do KYC. Sensitive IDs do not go into public tools. Follow the provider you actually work for.",
          "Blurred IDs can still be personal data and still leave your control.",
          "You cannot be sure a public tool deleted anything.",
        ],
        hintsSw: [
          "KYC ni lazima kama mchakato wa agent binadamu, si kama kubandika kwenye modeli ya bahati.",
          "Sawa. Mawakala bado hufanya KYC. Vitambulisho nyeti haviingii zana za umma. Fuata mtoa huduma unayemfanyia kazi.",
          "Vitambulisho vilivyofichwa bado vinaweza kuwa data binafsi na bado vinatoka mikononi mwako.",
          "Huwezi kuwa na uhakika zana ya umma ilifuta chochote.",
        ],
        explainEn:
          "Legal KYC and dumping IDs into a bot are opposites. The first is the agent's job. The second is a data leak.",
        explainSw:
          "KYC halali na kumwaga vitambulisho kwenye bot ni kinyume. Ya kwanza ni kazi ya agent. Ya pili ni uvujaji wa data.",
      }),
      quiz(
        "Purpose limitation for a deni book means:",
        "Kikomo cha madhumuni kwa daftari la deni kinamaanisha:",
        [
          "You may sell the list to anyone who pays",
          "Numbers collected to collect a debt are not automatically a marketing list",
          "You must keep the book forever as evidence",
          "AI tools are exempt from the Data Protection Act",
        ],
        [
          "Unaweza kuuza orodha kwa yeyote anayelipa",
          "Namba zilizokusanywa kukusanya deni si orodha ya masoko kiotomatiki",
          "Lazima uweke daftari milele kama ushahidi",
          "Zana za AI zimeachwa nje ya Sheria ya Ulinzi wa Data",
        ],
        1,
        "Collect for a reason, use for that reason, keep for a while, then stop. Tools are not above the Act.",
        "Kusanya kwa sababu, tumia kwa sababu hiyo, weka kwa muda, kisha acha. Zana si juu ya Sheria."
      ),
      note(
        "Try it: a one-page data card",
        "Jaribu: kadi ya data ya ukurasa mmoja",
        `Write:

- What lists I hold (deni, WhatsApp, guest book)
- Why (collect debt, send reminders they asked for, legal guest register)
- Where locked (which phone, which drawer)
- When I delete (for example 12 months quiet)
- What never goes into a chatbot (IDs, PINs, children's data, health)

If you grow, ask a qualified person about ODPC registration. Do not invent a registration number.`,
        `Andika:

- Orodha ninazoshikilia (deni, WhatsApp, daftari la wageni)
- Kwa nini (kukusanya deni, kutuma vikumbusho walivyoomba, daftari la kisheria la wageni)
- Mahali vilivyofungwa (simu ipi, droo ipi)
- Ninapofuta (kwa mfano kimya cha miezi 12)
- Kisichoingia chatbot kamwe (vitambulisho, PIN, data ya watoto, afya)

Ukikua, muulize mtu mwenye sifa kuhusu usajili wa ODPC. Usibuni namba ya usajili.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Less data, stated purpose, locked storage, planned deletion.
- Agents still do KYC; bots do not get ID photos.
- Next: tax and eTIMS — AI may draft, you still verify invoices.`,
        `- Data kidogo, madhumuni yaliyotajwa, uhifadhi uliofungwa, kufuta kulikopangwa.
- Mawakala bado hufanya KYC; bot hazipati picha za kitambulisho.
- Ifuatayo: kodi na eTIMS — AI inaweza kuandika rasimu, bado unathibitisha ankara.`
      ),
    ],
  },

  {
    id: "biz-i-u9",
    titleEn: "Records, invoices and tax drafts",
    titleSw: "Rekodi, ankara na rasimu za kodi",
    cards: [
      note(
        "KRA wants your numbers, not a chatbot's story",
        "KRA inataka namba zako, si hadithi ya chatbot",
        `Kenya Revenue Authority uses eTIMS for electronic tax invoices. If you are required to issue those invoices, the figures must match what you actually sold, cash and M-Pesa together.

AI can draft an invoice layout, explain a term, or turn your weekly totals into a neat table. It cannot see undeclared cash. It must not invent PIN numbers, KRA PINs, or invoice serials. Competition Authority of Kenya handles misleading advertising — a "VAT inclusive" price your invoice then contradicts is a problem.

Human check: every KES, every PIN you already own (typed by you, never by a bot), every date. Store KRA credentials like till secrets.`,
        `Mamlaka ya Mapato Kenya hutumia eTIMS kwa ankara za kodi za kielektroniki. Ikiwa unatakiwa kutoa ankara hizo, takwimu lazima zifanane na ulichouza kweli, taslimu na M-Pesa pamoja.

AI inaweza kuandika muundo wa ankara, kueleza neno, au kugeuza jumla za wiki kuwa jedwali safi. Haiwezi kuona taslimu isiyotajwa. Hairuhusiwi kubuni namba za PIN, KRA PIN, au serial za ankara. Mamlaka ya Ushindani Kenya hushughulikia utangazaji potofu — bei "ikiwa na VAT" ambayo ankara kisha inapinga ni tatizo.

Ukaguzi wa binadamu: kila KES, kila PIN ambayo tayari unayo (unaandika wewe, si bot), kila tarehe. Hifadhi hati za KRA kama siri za till.`
      ),
      reveal([
        {
          termEn: "eTIMS",
          termSw: "eTIMS",
          defEn: "KRA's electronic tax invoice system. Figures must match real sales.",
          defSw: "Mfumo wa ankara za kodi za kielektroniki wa KRA. Takwimu lazima zifanane na mauzo halisi.",
        },
        {
          termEn: "KRA PIN",
          termSw: "KRA PIN",
          defEn: "Your tax identifier. Treat it like other secrets: do not paste it into a public chatbot.",
          defSw: "Kitambulisho chako cha kodi. Kichukulie kama siri nyingine: usikiweke kwenye chatbot ya umma.",
        },
        {
          termEn: "Reconciliation",
          termSw: "Ulinganisho",
          defEn: "Checking that the book, the till, and the invoice add to the same week.",
          defSw: "Kukagua kwamba daftari, till, na ankara vinaenda wiki ileile.",
        },
      ]),
      note(
        "Worked example: Juma's week versus the draft invoice",
        "Mfano: wiki ya Juma dhidi ya rasimu ya ankara",
        `Juma's hardware week from the sheet: cash 18,400, M-Pesa 22,100, total 40,500. He asks a chatbot: "Write an invoice summary for a hardware shop that had a good week." It returns "Estimated weekly sales KES 75,000 including VAT".

If he files 75,000 he overstates. If he files only the M-Pesa 22,100 he understates cash.

Correct use: he pastes his own totals (no customer names, no KRA PIN): "Format these as a table: cash 18400, M-Pesa 22100, total 40500, week of 21–26 Sep. Do not change numbers." He checks the table still says 40,500. Then he enters what the law requires through the official eTIMS path, not through the chat.

The chatbot is a formatter. KRA is the authority.`,
        `Wiki ya vifaa ya Juma kutoka jedwali: taslimu 18,400, M-Pesa 22,100, jumla 40,500. Anauliza chatbot: "Andika muhtasari wa ankara kwa duka la vifaa lililokuwa na wiki nzuri." Inarudisha "Makadirio ya mauzo ya wiki KES 75,000 ikiwa na VAT".

Akiwasilisha 75,000 anazidisha. Akiwasilisha M-Pesa 22,100 tu anapunguza taslimu.

Matumizi sahihi: anabandika jumla zake (bila majina ya wateja, bila KRA PIN): "Panga hizi kama jedwali: taslimu 18400, M-Pesa 22100, jumla 40500, wiki 21–26 Sep. Usibadilishe namba." Anakagua jedwali bado linasema 40,500. Kisha anaingiza kile sheria inachotaka kupitia njia rasmi ya eTIMS, si kupitia gumzo.

Chatbot ni mpangaji. KRA ndiye mamlaka.`
      ),
      scenario({
        titleEn: "Scenario: 'the bot knows KRA'",
        titleSw: "Hali: 'bot inajua KRA'",
        situationEn:
          "A helper offers to paste the shop KRA PIN and password into a chatbot so it can 'file eTIMS while we serve customers'.",
        situationSw:
          "Msaidizi anajitolea kuweka KRA PIN na nenosiri la duka kwenye chatbot ili 'iwasilishe eTIMS sisi tukihudumia wateja'.",
        questionEn: "What is the right call?",
        questionSw: "Uamuzi sahihi ni upi?",
        optionsEn: [
          "Allow it, because speed reduces penalties",
          "Refuse. Draft tables from your totals if useful, then a person files in the official system with credentials that never enter a chatbot",
          "Allow passwords but not the PIN",
          "Let the bot file, then delete the chat",
        ],
        optionsSw: [
          "Kuruhusu, kwa sababu kasi inapunguza faini",
          "Kukataa. Andaa jedwali kutoka jumla zako kama inafaa, kisha mtu awasilishe kwenye mfumo rasmi kwa hati zisizoingia chatbot kamwe",
          "Kuruhusu manenosiri si PIN",
          "Kuacha bot iwasilishe, kisha kufuta gumzo",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed with leaked credentials is how a shop loses both tax standing and money.",
          "Right. Formatting is a word task. Filing is a credentialed human task.",
          "A password is as secret as a PIN.",
          "Deleting a chat does not unsay a password to a remote system.",
        ],
        hintsSw: [
          "Kasi yenye hati zilizovuja ndiyo jinsi duka linavyopoteza msimamo wa kodi na pesa.",
          "Sawa. Kupanga ni kazi ya maneno. Kuwasilisha ni kazi ya binadamu yenye hati.",
          "Nenosiri ni siri kama PIN.",
          "Kufuta gumzo hakurudishi nenosiri kutoka mfumo wa mbali.",
        ],
        explainEn:
          "eTIMS figures come from your reconciled books. Credentials stay off chatbots. AI drafts; you file.",
        explainSw:
          "Takwimu za eTIMS zinatokana na madaftari yaliyolinganishwa. Hati zinabaki nje ya chatbot. AI inaandika rasimu; wewe unawasilisha.",
      }),
      quiz(
        "Why must cash and M-Pesa both enter a tax draft?",
        "Kwa nini taslimu na M-Pesa zote ziingie rasimu ya kodi?",
        [
          "Because KRA only believes cash",
          "Because a till statement is only part of the week, as you saw in beginner records",
          "Because eTIMS forbids M-Pesa",
          "Because chatbots cannot add two columns",
        ],
        [
          "Kwa sababu KRA inaamini taslimu tu",
          "Kwa sababu taarifa ya till ni sehemu tu ya wiki, kama ulivyoona kwenye rekodi za mwanzoni",
          "Kwa sababu eTIMS inakataza M-Pesa",
          "Kwa sababu chatbot haziwezi kujumlisha safu mbili",
        ],
        1,
        "Half the data makes a half-true invoice. Reconcile the book first, then format.",
        "Nusu ya data inafanya ankara ya nusu ukweli. Linganisha daftari kwanza, kisha panga."
      ),
      note(
        "Try it: a three-line reconcile",
        "Jaribu: ulinganisho wa mistari mitatu",
        `For last week write: Book total, M-Pesa statement total, Cash (book minus M-Pesa).

- They should explain each other.
- Ask a chatbot only to format those three numbers as a table, without extra estimates.
- Check the table still matches. Then stop. Filing stays on the official path if you are required to file.`,
        `Kwa wiki iliyopita andika: Jumla ya daftari, jumla ya taarifa ya M-Pesa, Taslimu (daftari kutoa M-Pesa).

- Zinapaswa kueleza kila moja.
- Omba chatbot ipange namba hizo tatu kama jedwali tu, bila makadirio ya ziada.
- Kagua jedwali bado linafanana. Kisha simama. Kuwasilisha kunabaki kwenye njia rasmi ikiwa unatakiwa kuwasilisha.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Format from reconciled totals. Never paste KRA secrets.
- Next: what tokens and AI tools cost, in plain KES language.`,
        `- Panga kutoka jumla zilizolinganishwa. Usiweke siri za KRA.
- Ifuatayo: gharama ya tokeni na zana za AI, kwa lugha rahisi ya KES.`
      ),
    ],
  },

  {
    id: "biz-i-u10",
    titleEn: "What tokens and AI tools cost, in plain language",
    titleSw: "Gharama ya tokeni na zana za AI, kwa lugha rahisi",
    cards: [
      note(
        "A token is a bite of text you pay for",
        "Tokeni ni kidonge cha maandishi unacholipia",
        `A token is a small piece of text the model reads or writes — often a short word, or part of a long word. Kiswahili can use more tokens than the same idea in English, because the model may split words into smaller pieces. That can make the same customer SMS cost more in Kiswahili than in English. It is not a reason to abandon Kiswahili. It is a reason to keep prompts short and reuse them.

You usually pay for input tokens (what you paste) and output tokens (what it writes). Pasting a whole deni book is expensive and unsafe. Pasting five prices is cheap and enough.

Shop maths: if a bundle or subscription costs KES 1,500 a month, and it saves Akinyi 40 minutes of Saturday typing, ask what 40 minutes of her Saturday is worth. If she earns about KES 1,200 that afternoon, 40 minutes is about 1,200 x (40/240) = 200 KES of time. Then 1,500 a month is not free. Maybe she uses a cheaper tool, or only in peak weeks.

Do not name vendor brands. Compare: price in KES, whether it works on a small Android phone, whether it needs always-on data, whether drafts stay on the device.`,
        `Tokeni ni kipande kidogo cha maandishi modeli inayosoma au kuandika — mara nyingi neno fupi, au sehemu ya neno refu. Kiswahili kinaweza kutumia tokeni nyingi kuliko wazo lile lile kwa Kiingereza, kwa sababu modeli inaweza kugawanya maneno vipande vidogo. Hiyo inaweza kufanya SMS ileile ya mteja igharimu zaidi kwa Kiswahili kuliko Kiingereza. Si sababu ya kuacha Kiswahili. Ni sababu ya kuweka maagizo mafupi na kuyatumia tena.

Kwa kawaida unalipa tokeni za kuingiza (unachobandika) na za kutoa (inachoandika). Kubandika daftari zima la deni ni ghali na si salama. Kubandika bei tano ni nafuu na inatosha.

Hisabati ya duka: kama kifurushi au usajili unagharimu KES 1,500 kwa mwezi, na kinaokoa Akinyi dakika 40 za kuandika Jumamosi, uliza dakika 40 za Jumamosi yake zina thamani gani. Akipata takriban KES 1,200 alasiri hiyo, dakika 40 ni takriban 1,200 x (40/240) = KES 200 za muda. Kisha 1,500 kwa mwezi si bure. Labda atumie zana nafuu, au wiki za kilele tu.

Usitaje chapa za wauzaji. Linganisha: bei kwa KES, kama inafanya kazi kwenye simu ndogo ya Android, kama inahitaji data kila wakati, kama rasimu zinabaki kwenye kifaa.`
      ),
      reveal([
        {
          termEn: "Token",
          termSw: "Tokeni",
          defEn: "A small chunk of text the model bills for when it reads or writes.",
          defSw: "Kipande kidogo cha maandishi modeli inayotoza inaposoma au kuandika.",
        },
        {
          termEn: "Context window",
          termSw: "Dirisha la muktadha",
          defEn: "How much text the model can see at once. A huge paste may be truncated or costly.",
          defSw: "Kiasi cha maandishi modeli inayoweza kuona mara moja. Kubandika kubwa kunaweza kukatwa au kugharimu.",
        },
        {
          termEn: "Bundle",
          termSw: "Kifurushi",
          defEn: "A prepaid pack of usage, often easier for a shop than an open international card.",
          defSw: "Pakiti iliyolipwa mapema ya matumizi, mara nyingi rahisi kwa duka kuliko kadi ya kimataifa wazi.",
        },
        {
          termEn: "Time cost",
          termSw: "Gharama ya muda",
          defEn: "Minutes saved versus minutes spent checking drafts and paying for data.",
          defSw: "Dakika zilizookolewa dhidi ya dakika za kukagua rasimu na kulipia data.",
        },
      ]),
      note(
        "Worked example: 30 supplier SMS",
        "Mfano: SMS 30 za msambazaji",
        `Juma drafts 30 supplier SMS a month. Each prompt is about 120 words with the reusable limits from beginner unit 11. Each draft is about 40 words.

He does not need exact vendor tariffs. He needs order-of-magnitude thinking: a short prompt is a few hundred tokens; pasting a 20-page PDF is many thousands. If a month of short drafts costs him about KES 200 on a bundle, and typing from scratch took 2 hours (he values his hour at KES 300, so 600), the bundle can make sense — only if he still checks every number.

If he pastes photos of IDs "so the bot knows the supplier", he pays more tokens and creates a leak. The expensive path is often the unsafe path.

Kiswahili version of the same SMS might cost a bit more in tokens. He still writes Kiswahili for Kariuki. He just does not paste last year's entire chat history.`,
        `Juma anaandika rasimu 30 za SMS za msambazaji kwa mwezi. Kila maagizo ni takriban maneno 120 yenye vikomo vya kitengo cha 11 cha mwanzoni. Kila rasimu ni takriban maneno 40.

Hahitaji tarifu halisi za wauzaji. Anahitaji kufikiri kwa ukubwa: maagizo mafupi ni tokeni mia chache; kubandika PDF ya kurasa 20 ni maelfu. Kama mwezi wa rasimu fupi unamgharimu takriban KES 200 kwenye kifurushi, na kuandika kuanzia mwanzo kulichukua saa 2 (anathamini saa yake KES 300, hivyo 600), kifurushi kinaweza kufaa — tu kama bado anakagua kila namba.

Akiweka picha za vitambulisho "ili bot amjue msambazaji", analipa tokeni zaidi na anatengeneza uvujaji. Njia ghali mara nyingi ndiyo njia isiyo salama.

Toleo la Kiswahili la SMS ileile linaweza kugharimu tokeni kidogo zaidi. Bado anaandika Kiswahili kwa Kariuki. Habandiki tu historia yote ya gumzo ya mwaka jana.`
      ),
      scenario({
        titleEn: "Scenario: the unlimited plan",
        titleSw: "Hali: mpango usio na kikomo",
        situationEn:
          "A hotel is offered an 'unlimited AI' plan at KES 8,000 a month, on condition they paste every guest chat into the tool for 'personalised upsells'.",
        situationSw:
          "Hoteli inapewa mpango wa 'AI isiyo na kikomo' kwa KES 8,000 kwa mwezi, kwa sharti wabandike kila gumzo la mgeni kwenye zana kwa 'kuuza zaidi kwa kila mtu'.",
        questionEn: "What should they weigh first?",
        questionSw: "Watahinini kwanza?",
        optionsEn: [
          "Unlimited sounds cheaper than thinking",
          "KES 8,000 versus time actually saved on drafts they already check, plus the data risk of pasting guest chats, plus whether a short reusable prompt on a smaller bundle would do",
          "Whether the logo looks international",
          "Whether they can hide the cost inside room rates without telling anyone",
        ],
        optionsSw: [
          "Isiyo na kikomo inasikika nafuu kuliko kufikiri",
          "KES 8,000 dhidi ya muda unaookolewa kweli kwenye rasimu wanazokagua tayari, pamoja na hatari ya data ya kubandika gumzo za wageni, pamoja na kama maagizo mafupi ya kutumia tena kwenye kifurushi kidogo yangetosha",
          "Kama nembo ineonekana ya kimataifa",
          "Kama wanaweza kuficha gharama ndani ya bei za vyumba bila kumwambia mtu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Unlimited often means unlimited paste, unlimited leak, unlimited bill in disguise.",
          "Right. Cost is money plus data plus checking time. Guest chats are personal data.",
          "A logo is not a unit-economics argument.",
          "Hiding a fee is a customer-trust problem, not a saving.",
        ],
        hintsSw: [
          "Isiyo na kikomo mara nyingi inamaanisha kubandika bila kikomo, uvujaji bila kikomo, bili iliyofichwa.",
          "Sawa. Gharama ni pesa pamoja na data pamoja na muda wa kukagua. Gumzo za wageni ni data binafsi.",
          "Nembo si hoja ya uchumi wa kitengo.",
          "Kuficha ada ni tatizo la imani ya mteja, si akiba.",
        ],
        explainEn:
          "Pay for short, reusable prompts. Do not buy 'unlimited' if the real price is your customer list.",
        explainSw:
          "Lipia maagizo mafupi ya kutumia tena. Usinunue 'bila kikomo' kama bei halisi ni orodha yako ya wateja.",
      }),
      quiz(
        "Why might the same idea cost more tokens in Kiswahili than in English?",
        "Kwa nini wazo lile lile linaweza kugharimu tokeni zaidi kwa Kiswahili kuliko Kiingereza?",
        [
          "Because Kiswahili is not allowed",
          "Because models often split Kiswahili words into more pieces, so they bill more bites of text",
          "Because CBK taxes Kiswahili prompts",
          "Because tokens only exist in English",
        ],
        [
          "Kwa sababu Kiswahili hakiruhusiwi",
          "Kwa sababu modeli mara nyingi hugawanya maneno ya Kiswahili vipande vingi, hivyo zinatoza vidonge vingi vya maandishi",
          "Kwa sababu Benki Kuu inatoza maagizo ya Kiswahili",
          "Kwa sababu tokeni zipo kwa Kiingereza tu",
        ],
        1,
        "More pieces can mean a higher bill. Keep prompts short. Still serve customers in the language they use.",
        "Vipande vingi vinaweza kumaanisha bili kubwa. Weka maagizo mafupi. Bado wahudumie wateja kwa lugha wanayotumia."
      ),
      note(
        "Try it: a KES cost card",
        "Jaribu: kadi ya gharama ya KES",
        `Write four lines:

- What I will use AI for this month (one word task)
- Minutes it takes me now, minutes I think it will take with a draft plus check
- What I will pay in KES (bundle, data, nothing if offline)
- What I will not paste (lists, PINs, IDs)

If pay is larger than the time you value, skip the tool this month.`,
        `Andika mistari minne:

- Nitakachotumia AI mwezi huu (kazi moja ya maneno)
- Dakika zinazonichukua sasa, dakika nadhani zitachukua kwa rasimu pamoja na ukaguzi
- Nitakacholipa kwa KES (kifurushi, data, hakuna kama nje ya mtandao)
- Sitakachobandika (orodha, PIN, vitambulisho)

Malipo yakiwa makubwa kuliko muda unaothamini, ruka zana mwezi huu.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Tokens are bites of text. Short reusable prompts are cheaper and safer.
- Kiswahili may cost more tokens; still write Kiswahili.
- Next: piloting without fooling yourself.`,
        `- Tokeni ni vidonge vya maandishi. Maagizo mafupi ya kutumia tena ni nafuu na salama.
- Kiswahili kinaweza kugharimu tokeni zaidi; bado andika Kiswahili.
- Ifuatayo: kujaribu bila kujidanganya.`
      ),
    ],
  },

  {
    id: "biz-i-u11",
    titleEn: "Piloting without fooling yourself",
    titleSw: "Kujaribu bila kujidanganya",
    cards: [
      note(
        "A pilot has a before, an after, and a stop rule",
        "Jaribio lina kabla, baada, na kanuni ya kusimama",
        `A pilot is a small, time-boxed test: one task, one shop, a few weeks, a measure you wrote down first. "We switched on AI" is not a pilot.

Write a baseline: minutes to answer 20 WhatsApp price questions, or tomato waste kg, or number of wrong-price complaints. Run the new habit. Compare. If nothing moved, stop or change. If complaints rose, stop.

Honest pilots include who dropped out (the helper who refused the phone) and what else changed (a holiday, a new competitor). Kenya's National AI Strategy 2025–2030 stresses useful, responsible tools for MSMEs. Usefulness is measured, not announced.`,
        `Jaribio (pilot) ni majaribio madogo yaliyowekewa muda: kazi moja, duka moja, wiki chache, kipimo ulichoandika kwanza. "Tuliwasha AI" si jaribio.

Andika msingi: dakika za kujibu maswali 20 ya bei kwenye WhatsApp, au kilo za upotevu wa nyanya, au idadi ya malalamiko ya bei isiyo sahihi. Endesha tabia mpya. Linganisha. Hakuna kilichosogea, simama au badilisha. Malalamiko yakipanda, simama.

Majaribio ya kweli yanajumuisha nani aliachwa (msaidizi aliyekataa simu) na nini kingine kilbadilika (sikukuu, mshindani mpya). Mkakati wa Kitaifa wa AI wa Kenya 2025–2030 unasisitiza zana zenye manufaa na uwajibikaji kwa MSME. Manufaa hupimwa, si kutangazwa.`
      ),
      reveal([
        {
          termEn: "Baseline",
          termSw: "Msingi",
          defEn: "The number before you change anything.",
          defSw: "Namba kabla hujabadilisha chochote.",
        },
        {
          termEn: "Success measure",
          termSw: "Kipimo cha mafanikio",
          defEn: "One figure you will look at, such as minutes or waste kg, not 'vibes'.",
          defSw: "Takwimu moja utakayoitazama, kama dakika au kilo za upotevu, si 'hali'.",
        },
        {
          termEn: "Stop rule",
          termSw: "Kanuni ya kusimama",
          defEn: "When you switch the tool off: more complaints, leaked data, or no time saved.",
          defSw: "Unapozima zana: malalamiko zaidi, data iliyovuja, au muda haukuokolewa.",
        },
      ]),
      note(
        "Worked example: 14 days of price WhatsApp",
        "Mfano: siku 14 za WhatsApp ya bei",
        `Mama Njeri times 20 price questions in week 1: median 3 minutes, two wrong prices sent (she had to apologise).

Week 2 she uses retrieval from the morning list plus escalation on missing items. 20 questions: median 2 minutes, zero wrong prices, four handoffs she answered within 15 minutes.

She writes: time saved about 20 minutes a week. Complaints down. Cost of bundle: KES 200. She keeps the habit.

She also notes a confounder: week 2 had no market day. She will run another week that includes a market day before she tells neighbouring shops it "always works".`,
        `Mama Njeri anapima maswali 20 ya bei wiki 1: wastani wa katikati dakika 3, bei mbili zisizo sahihi zilitumwa (alilazimika kuomba radhi).

Wiki 2 anatumia utafutaji kutoka orodha ya asubuhi pamoja na kuinua vitu vinavyokosekana. Maswali 20: wastani dakika 2, bei sifuri zisizo sahihi, uhamisho nne alizojibu ndani ya dakika 15.

Anaandika: muda uliookolewa takriban dakika 20 kwa wiki. Malalamiko yamepungua. Gharama ya kifurushi: KES 200. Anabaki na tabia.

Pia anaandika kichanganyiko: wiki 2 haikuwa na siku ya soko. Ataendesha wiki nyingine yenye siku ya soko kabla ya kuwaambia maduka jirani "inafanya kazi kila mara".`
      ),
      scenario({
        titleEn: "Scenario: applause is not a metric",
        titleSw: "Hali: makofi si kipimo",
        situationEn:
          "A youth intern installs an auto-reply at a hotel. Guests say it is 'smart'. Check-out finds 11 rooms quoted last year's breakfast price. The intern wants to scale to three branches.",
        situationSw:
          "Mwanamazingira intern anaweka jibu la moja kwa moja hoteli. Wageni wanasema ni 'smart'. Kulipa kunaona vyumba 11 vilitajwa bei ya kiamsha kinywa ya mwaka jana. Intern anataka kupanua matawi matatu.",
        questionEn: "What does an honest pilot conclude?",
        questionSw: "Jaribio la kweli linahitimisha nini?",
        optionsEn: [
          "Scale immediately; guests liked it",
          "Stop or tightly constrain: the success measure (correct prices) failed even if compliments rose",
          "Scale but add a smiley so complaints feel softer",
          "Delete the invoices so the errors disappear",
        ],
        optionsSw: [
          "Panua mara moja; wageni walipenda",
          "Simama au kaza: kipimo cha mafanikio (bei sahihi) kilishindwa hata sifa zikipanda",
          "Panua lakini ongeza tabasamu ili malalamiko yahisi laini",
          "Futa ankara ili makosa yatoweke",
        ],
        correctIndex: 1,
        hintsEn: [
          "Compliments measure manners, not till accuracy.",
          "Right. A stop rule exists for this: money-wrong beats praise.",
          "Softening complaints hides the loss.",
          "Hiding invoices is a records and tax problem.",
        ],
        hintsSw: [
          "Sifa hupima adabu, si usahihi wa till.",
          "Sawa. Kanuni ya kusimama ipo kwa hili: pesa-kosa inashinda sifa.",
          "Kulainisha malalamiko kunaficha hasara.",
          "Kuficha ankara ni tatizo la rekodi na kodi.",
        ],
        explainEn:
          "Write the measure first. Praise cannot cancel a wrong price.",
        explainSw:
          "Andika kipimo kwanza. Sifa haiwezi kufuta bei isiyo sahihi.",
      }),
      quiz(
        "Which is a usable success measure for a mama mboga forecast pilot?",
        "Ni lipi kipimo cha mafanikio kinachotumika kwa jaribio la utabiri wa mama mboga?",
        [
          "The app has a modern look",
          "Tomato waste kg this week versus the four weeks before, with a note of weather shocks",
          "How confident the chatbot sounded",
          "Number of likes on a poster",
        ],
        [
          "Programu ina muonekano wa kisasa",
          "Kilo za upotevu wa nyanya wiki hii dhidi ya wiki nne zilizotangulia, pamoja na maezo ya mishtuko ya hali ya hewa",
          "Jinsi chatbot ilivyosikika na uhakika",
          "Idadi ya likes kwenye bango",
        ],
        1,
        "Waste kg is in her book. Looks and confidence are not impact.",
        "Kilo za upotevu ziko kwenye daftari lake. Muonekano na uhakika si athari."
      ),
      note(
        "Try it: a two-week card",
        "Jaribu: kadi ya wiki mbili",
        `Pick the one word task from your map (unit 1).

- Baseline number this week
- Habit you will run next week (retrieval, draft, escalation)
- Success measure
- Stop rule
- Confounders to jot (holiday, rain, helper away)

Do not start three tools at once.`,
        `Chagua kazi moja ya maneno kutoka ramani yako (kitengo cha 1).

- Namba ya msingi wiki hii
- Tabia utakayoendesha wiki ijayo (utafutaji, rasimu, kuinua)
- Kipimo cha mafanikio
- Kanuni ya kusimama
- Vichanganyiko vya kuandika (sikukuu, mvua, msaidizi hayuko)

Usianzishe zana tatu mara moja.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- Baseline, one measure, stop rule, confounders.
- Next: checkpoint — an SME AI roadmap on one page.`,
        `- Msingi, kipimo kimoja, kanuni ya kusimama, vichanganyiko.
- Ifuatayo: kituo cha ukaguzi — ramani ya AI ya SME kwenye ukurasa mmoja.`
      ),
    ],
  },

  {
    id: "biz-i-u12",
    titleEn: "Checkpoint: your SME AI roadmap",
    titleSw: "Kituo cha ukaguzi: ramani yako ya AI kwa SME",
    cards: [
      note(
        "A roadmap is a sequence of habits, not a shopping list",
        "Ramani ni mfuatano wa tabia, si orodha ya ununuzi",
        `You can now map a workflow, escalate missing facts, keep a sheet, forecast from similar days, retrieve from today's price list, question unfair credit, treat fraud flags as questions, protect data, format tax totals without leaking PINs, count tokens in KES, and pilot honestly.

A roadmap for a Kenyan MSME is 90 days on paper:

- Days 1–30: one word task, retrieval from a dated list, named escalation, never list from beginner
- Days 31–60: sheet plus moving-average range for one item, still human orders
- Days 61–90: a measured pilot, stop rule, and a no to auto-pay and KYC-by-bot

The Kenya National AI Strategy 2025–2030 names MSMEs among priority areas. Your shop does not need a strategy document. It needs this sequence and an accountable person.`,
        `Sasa unaweza kuchora mtiririko, kuinua ukweli unaokosekana, kuweka jedwali, kutabiri kutoka siku zinazofanana, kutafuta kutoka orodha ya leo, kuhoji mkopo usio na usawa, kuchuukulia alama za ulaghai kama maswali, kulinda data, kupanga jumla za kodi bila kuvuja PIN, kuhesabu tokeni kwa KES, na kujaribu kwa uaminifu.

Ramani ya MSME ya Kenya ni siku 90 kwenye karatasi:

- Siku 1–30: kazi moja ya maneno, utafutaji kutoka orodha yenye tarehe, kuinua kwa mtu aliyepewa jina, orodha ya kamwe kutoka mwanzoni
- Siku 31–60: jedwali pamoja na masafa ya wastani unaosonga kwa bidhaa moja, bado binadamu anaagiza
- Siku 61–90: jaribio lililopimwa, kanuni ya kusimama, na hapana kwa malipo ya kiotomatiki na KYC-kwa-bot

Mkakati wa Kitaifa wa AI wa Kenya 2025–2030 unataja MSME kati ya maeneo ya kipaumbele. Duka lako halihitaji waraka wa mkakati. Linahitaji mfuatano huu na mtu anayewajibika.`
      ),
      reveal([
        {
          termEn: "Roadmap",
          termSw: "Ramani ya mwendo",
          defEn: "Ordered habits with dates, owners and stop rules, not a pile of apps.",
          defSw: "Tabia zilizopangwa na tarehe, wamiliki na kanuni za kusimama, si rundo la programu.",
        },
        {
          termEn: "Accountable owner",
          termSw: "Mmiliki anayewajibika",
          defEn: "The human who can switch the tool off.",
          defSw: "Binadamu anayeweza kuzima zana.",
        },
        {
          termEn: "90-day slice",
          termSw: "Kipande cha siku 90",
          defEn: "Long enough to measure, short enough to stop without shame.",
          defSw: "Muda wa kutosha kupima, mfupi wa kutosha kusimama bila aibu.",
        },
      ]),
      note(
        "Worked example: three MSMEs, one template",
        "Mfano: MSME tatu, kiolezo kimoja",
        `Mama mboga: 30 days — Friday SMS from the book, prices checked. 60 days — tomato moving average range. 90 days — waste kg versus baseline. Owner: Nyambura. Stop: any sent wrong price.

Salon: 30 days — booking drafts plus escalation on discounts. 60 days — Saturday occupancy in a sheet. 90 days — minutes per booking chat. Owner: Akinyi. Stop: client list pasted into a tool.

M-Pesa agent: 30 days — draft "leta kitambulisho" signs only. 60 days — no change to KYC. 90 days — confirm no PIN ever entered a bot. Owner: the registered agent. Stop: any request to automate cash-out.

Hotel: 30 days — retrieve from today's menu. 60 days — forecast bread with funeral days removed. 90 days — guest data card. Owner: the named manager on the desk roster.`,
        `Mama mboga: siku 30 — SMS ya Ijumaa kutoka daftari, bei zilizokaguliwa. Siku 60 — masafa ya wastani wa nyanya. Siku 90 — kilo za upotevu dhidi ya msingi. Mmiliki: Nyambura. Simama: bei yoyote isiyo sahihi iliyotumwa.

Saluni: siku 30 — rasimu za miadi pamoja na kuinua punguzo. Siku 60 — ujazo wa Jumamosi kwenye jedwali. Siku 90 — dakika kwa gumzo la miadi. Mmiliki: Akinyi. Simama: orodha ya wateja iliyobandikwa kwenye zana.

Agent wa M-Pesa: siku 30 — rasimu za alama "leta kitambulisho" tu. Siku 60 — hakuna mabadiliko ya KYC. Siku 90 — thibitisha PIN haijawahi kuingia bot. Mmiliki: agent aliyeandikishwa. Simama: ombi lolote la kuweka kutoa pesa kwenye otomatiki.

Hoteli: siku 30 — tafuta kutoka menyu ya leo. Siku 60 — tabiri mkate ukiondoa siku za mazishi. Siku 90 — kadi ya data ya wageni. Mmiliki: meneja aliyepewa jina kwenye ratiba ya dawati.`
      ),
      scenario({
        titleEn: "Scenario: the vendor's 12-week transformation",
        titleSw: "Hali: mabadiliko ya wiki 12 ya muuzaji",
        situationEn:
          "A salesperson promises a jua kali workshop 'full AI transformation in 12 weeks': auto-quotes, auto-pay of suppliers, auto-KYC for walk-in welders, and a credit score for every casual.",
        situationSw:
          "Muuzaji anawahidi karakana ya jua kali 'mabadiliko kamili ya AI katika wiki 12': nukuu za kiotomatiki, malipo ya kiotomatiki ya wasambazaji, KYC ya kiotomatiki kwa welder wanaoingia, na alama ya mkopo kwa kila mfanyakazi wa mchana.",
        questionEn: "What 90-day roadmap should the workshop choose instead?",
        questionSw: "Ni ramani gani ya siku 90 karakana ichague badala yake?",
        optionsEn: [
          "Sign the transformation; 12 weeks is a nice number",
          "Draft bilingual quotes from a dated price list with human send, no auto-pay, no KYC-by-bot, no scoring casuals from photos; measure wrong quotes before and after",
          "Auto-pay only, skip quotes",
          "Build a credit score first because lenders sound modern",
        ],
        optionsSw: [
          "Tia sahihi mabadiliko; wiki 12 ni namba nzuri",
          "Andika rasimu za nukuu za lugha mbili kutoka orodha ya bei yenye tarehe na binadamu ndiye atumaye, hakuna malipo ya kiotomatiki, hakuna KYC-kwa-bot, hakuna kuwapa alama wafanyakazi kutoka picha; pima nukuu zisizo sahihi kabla na baada",
          "Malipo ya kiotomatiki tu, ruka nukuu",
          "Jenga alama ya mkopo kwanza kwa sababu wakopeshaji wanasikika wa kisasa",
        ],
        correctIndex: 1,
        hintsEn: [
          "A transformation pitch skips measurement and grabs irreversible steps.",
          "Right. The intermediate track in one paragraph: retrieve, escalate, measure, never auto-pay or fake KYC.",
          "Auto-pay is the step this whole track kept human.",
          "Scoring casuals from photos is unfair and a data-protection failure.",
        ],
        hintsSw: [
          "Kauli ya mabadiliko inaruka kipimo na kushika hatua zisizorejeleka.",
          "Sawa. Kozi ya kati katika aya moja: tafuta, inua, pima, usilipe kiotomatiki wala KYC bandia.",
          "Malipo ya kiotomatiki ndiyo hatua kozi hii yote iliweka kwa binadamu.",
          "Kuwapa alama wafanyakazi kutoka picha ni kukosa usawa na kushindwa kulinda data.",
        ],
        explainEn:
          "A roadmap sequences safe habits. It does not sell irreversible automation as a personality change.",
        explainSw:
          "Ramani inapanga tabia salama. Haiuzi otomatiki isiyorejeleka kama mabadiliko ya utu.",
      }),
      quiz(
        "Who must be able to switch the shop assistant off?",
        "Nani lazima aweze kuzima msaidizi wa duka?",
        [
          "Only the software vendor",
          "A named person in the shop who understands the never list",
          "Any customer who types STOP",
          "A chatbot, after it files eTIMS",
        ],
        [
          "Muuzaji wa programu tu",
          "Mtu aliyepewa jina dukani anayeelewa orodha ya kamwe",
          "Mteja yeyote anayeandika STOP",
          "Chatbot, baada ya kuwasilisha eTIMS",
        ],
        1,
        "Ownership is a human on the roster. Vendors and bots do not hold the stop rule.",
        "Umiliki ni binadamu kwenye ratiba. Wauzaji na bot hawashikilii kanuni ya kusimama."
      ),
      note(
        "Try it: write the 90-day page",
        "Jaribu: andika ukurasa wa siku 90",
        `One page:

- Days 1–30 habit, owner, never list
- Days 31–60 habit (sheet or forecast), measure
- Days 61–90 pilot, stop rule
- Budget in KES (bundle, data, time)
- What we will not do: auto-pay, PIN in prompts, KYC-by-bot, inventing prices

Keep it next to the workflow map from unit 1. Advanced work starts with demand pipelines and a shop bot that cannot invent prices.`,
        `Ukurasa mmoja:

- Tabia ya siku 1–30, mmiliki, orodha ya kamwe
- Tabia ya siku 31–60 (jedwali au utabiri), kipimo
- Jaribio la siku 61–90, kanuni ya kusimama
- Bajeti kwa KES (kifurushi, data, muda)
- Tusichofanya: malipo ya kiotomatiki, PIN kwenye maagizo, KYC-kwa-bot, kubuni bei

Weka kando ya ramani ya mtiririko ya kitengo cha 1. Kazi ya juu inaanza na mifumo ya mahitaji na bot ya duka isiyoweza kubuni bei.`
      ),
      note(
        "Carry forward",
        "Kumbuka na endelea",
        `- 90 days, one owner, measures, a never list.
- Intermediate skill is judgement: retrieve, escalate, forecast ranges, refuse unfair scores.
- Advanced: pipelines, governance, vendors, staff, and specifying a shop assistant that cannot invent prices.`,
        `- Siku 90, mmiliki mmoja, vipimo, orodha ya kamwe.
- Ujuzi wa kati ni uamuzi: tafuta, inua, tabiri masafa, kataa alama zisizo na usawa.
- Kiwango cha juu: mifumo, utawala, wauzaji, wafanyakazi, na kubainisha msaidizi wa duka asiyebuni bei.`
      ),
    ],
  },
];
