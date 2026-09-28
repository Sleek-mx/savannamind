import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/** Food and farming — beginner: using AI safely and usefully on a Kenyan farm. */
export const agrBeginnerUnits: CurriculumUnit[] = [
  {
    id: "agr-b-u1",
    titleEn: "AI on the farm",
    titleSw: "Akili bandia shambani",
    cards: [
      note(
        "What AI can and cannot do on a farm",
        "Kile AI inachoweza na isichoweza kufanya shambani",
        "In Foundations you learned that AI is software that learns patterns from many examples and then makes a guess. On a farm, that guess can be useful.\n\nAI can do some farm jobs well:\n\n- Look at a leaf photo and guess which problem it shows.\n- Estimate the chance of rain for your area.\n- Turn a long advice leaflet into short steps in Kiswahili.\n- Answer a question about a crop in plain words.\n\nHere is how it works. People collect many examples, such as thousands of maize leaf photos, and mark each one with the right answer. The computer studies them and finds patterns: this colour, this shape of hole, this kind of stripe. When you send a new photo, it compares it with those patterns and gives its best guess.\n\nAI cannot do everything. It cannot walk your field or feel your soil. It does not know your budget unless you tell it. It cannot promise a good harvest. It can be wrong, and it cannot take responsibility when it is wrong. That is why the afisa wa ugani (agricultural extension officer), the agrovet and your own eyes stay in charge.",
        "Katika Misingi (Foundations) ulijifunza kwamba akili bandia (AI) ni programu inayojifunza mifumo kutokana na mifano mingi, kisha inakisia jibu. Shambani, makisio hayo yanaweza kusaidia.\n\nAI inaweza kufanya vizuri kazi hizi za shamba:\n\n- Kuangalia picha ya jani na kukisia tatizo lililopo.\n- Kukadiria uwezekano wa mvua katika eneo lako.\n- Kubadilisha kijitabu kirefu cha ushauri kuwa hatua fupi kwa Kiswahili.\n- Kujibu swali kuhusu zao kwa maneno rahisi.\n\nHivi ndivyo inavyofanya kazi. Watu hukusanya mifano mingi, kwa mfano maelfu ya picha za majani ya mahindi, na kila picha huwekewa jibu sahihi. Kompyuta huzichunguza na kupata mifumo: rangi hii, umbo hili la tundu, aina hii ya mstari. Ukituma picha mpya, inailinganisha na mifumo hiyo na kutoa makisio yake bora.\n\nAI haiwezi kufanya kila kitu. Haiwezi kutembea shambani kwako wala kugusa udongo wako. Haijui bajeti yako usipoiambia. Haiwezi kuahidi mavuno mazuri. Inaweza kukosea, na haiwezi kuwajibika inapokosea. Ndiyo sababu afisa wa ugani, duka la pembejeo (agrovet) na macho yako mwenyewe ndio wenye uamuzi.",
        "/learn/content/agr/leaf-detection.jpg"
      ),
      reveal([
        {
          termEn: "Artificial intelligence (AI)",
          termSw: "Akili bandia (AI)",
          defEn: "Software that learns patterns from examples and uses them to make guesses about new cases.",
          defSw: "Programu inayojifunza mifumo kutokana na mifano na kuitumia kukisia kuhusu hali mpya.",
        },
        {
          termEn: "Prediction",
          termSw: "Utabiri",
          defEn: "The guess an AI tool gives, such as 'this leaf probably has fall armyworm damage'. It is not a fact until someone checks it.",
          defSw: "Makisio yanayotolewa na zana ya AI, kama 'jani hili huenda limeharibiwa na viwavijeshi vamizi'. Si ukweli hadi mtu alithibitishe.",
        },
        {
          termEn: "Afisa wa ugani",
          termSw: "Afisa wa ugani",
          defEn: "An agricultural extension officer: a trained adviser from the county or a programme who visits farmers and gives crop and livestock advice.",
          defSw: "Mshauri wa kilimo aliyefunzwa, kutoka kaunti au mradi fulani, anayewatembelea wakulima na kutoa ushauri kuhusu mazao na mifugo.",
        },
        {
          termEn: "Agrovet",
          termSw: "Duka la pembejeo (agrovet)",
          defEn: "A shop that sells farm inputs such as seed, fertiliser, animal feed and farm chemicals, and whose staff can explain product labels.",
          defSw: "Duka linalouza pembejeo za kilimo kama mbegu, mbolea, chakula cha mifugo na dawa za shamba, na wafanyakazi wake wanaweza kueleza lebo za bidhaa.",
        },
      ]),
      note(
        "Worked example: Wanjiku's week with three tools",
        "Mfano: wiki ya Wanjiku na zana tatu",
        "Imagine Wanjiku, who grows 1 acre of maize in Murang'a. In one week she meets three tools.\n\n- Monday: an SMS from an extension service says 'Check your maize for pests this week.' The same SMS went to every maize farmer in her ward on the same day. It follows a simple rule based on the date. It is helpful, but it knows nothing about her field.\n- Wednesday: she photographs a leaf with holes. A photo app says 'Fall armyworm, 64% sure.' This is AI: it learned from labelled photos. 64% means it is not very sure.\n- Thursday: she asks a chatbot what to spray. It names a product and a dose. It sounds confident, but a chatbot can invent product names and numbers.\n\nWhat Wanjiku does next is the important part. She walks the field and checks 20 plants. 7 of the 20 have fresh holes, so about 1 plant in 3 is damaged. On Friday she shows her photos and her count to the afisa wa ugani. He confirms fall armyworm and tells her what to look for at the agrovet. At the agrovet she buys a registered product and follows the label.\n\nWhere it could go wrong: if she had sprayed on Thursday using only the chatbot's answer, she could have bought the wrong product, wasted money, and put herself and her family at risk. The AI tools helped her notice the problem sooner. People confirmed it before she acted.",
        "Fikiria Wanjiku, anayelima ekari 1 ya mahindi huko Murang'a. Katika wiki moja anakutana na zana tatu.\n\n- Jumatatu: anapokea SMS kutoka huduma ya ugani inayosema 'Kagua mahindi yako kuona wadudu wiki hii.' SMS hiyo hiyo ilitumwa kwa kila mkulima wa mahindi katika wadi yake siku moja. Inafuata kanuni rahisi kulingana na tarehe. Inasaidia, lakini haijui chochote kuhusu shamba lake.\n- Jumatano: anapiga picha ya jani lenye matundu. Programu ya picha inasema 'Viwavijeshi vamizi, uhakika 64%.' Hii ni AI: ilijifunza kutokana na picha zenye lebo. 64% inamaanisha haina uhakika mkubwa.\n- Alhamisi: anauliza chatbot anyunyize nini. Inataja bidhaa na kipimo. Inaonekana kuwa na uhakika, lakini chatbot inaweza kubuni majina ya bidhaa na namba.\n\nKile Wanjiku anachofanya baadaye ndicho muhimu. Anatembea shambani na kukagua mimea 20. Mimea 7 kati ya 20 ina matundu mapya, kwa hiyo takriban mmea 1 kati ya 3 umeharibiwa. Ijumaa anamwonyesha afisa wa ugani picha zake na hesabu yake. Afisa anathibitisha kuwa ni viwavijeshi vamizi na kumweleza atafute nini kwenye agrovet. Huko ananunua bidhaa iliyosajiliwa na kufuata maelekezo ya lebo.\n\nMambo yangeweza kuharibika wapi: kama angenyunyiza Alhamisi akitumia jibu la chatbot peke yake, angeweza kununua bidhaa isiyofaa, kupoteza pesa, na kujiweka yeye na familia yake hatarini. Zana za AI zilimsaidia kuona tatizo mapema. Watu walilithibitisha kabla hajachukua hatua.",
        "/learn/content/agr/extension-officer.jpg"
      ),
      scenario({
        titleEn: "Practice: the app says 'healthy'",
        titleSw: "Mazoezi: programu inasema 'mzima'",
        situationEn: "Juma grows beans on half an acre in Kakamega. About half of his plants are wilting and drooping. He takes one photo of a leaf in bright midday sun. The photo app says 'Healthy, 90% sure.'",
        situationSw: "Juma analima maharagwe kwenye nusu ekari huko Kakamega. Takriban nusu ya mimea yake inanyauka na kulegea. Anapiga picha moja ya jani kwenye jua kali la mchana. Programu ya picha inasema 'Mzima, uhakika 90%.'",
        questionEn: "What is the best next step for Juma?",
        questionSw: "Hatua bora inayofuata kwa Juma ni ipi?",
        optionsEn: [
          "Believe the app, because 90% is a high number",
          "Look at several plants, take clearer photos of the whole plant and roots, and show them to the afisa wa ugani",
          "Delete the app and never use any AI tool again",
          "Spray a general chemical on all the beans just in case",
        ],
        optionsSw: [
          "Kuiamini programu, kwa sababu 90% ni namba kubwa",
          "Kukagua mimea kadhaa, kupiga picha zilizo wazi zaidi za mmea mzima na mizizi, na kumwonyesha afisa wa ugani",
          "Kufuta programu na kutotumia zana yoyote ya AI tena",
          "Kunyunyiza dawa ya jumla kwenye maharagwe yote kwa tahadhari tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A high number is the app's confidence, not proof. What Juma sees in the field (half the plants wilting) is stronger evidence than one photo in harsh light.",
          "Right. His own eyes disagree with the app, so he collects better evidence and asks a person who can see the plants. Wilting can start in the roots or stem, which a single leaf photo cannot show.",
          "Too far. The app made one mistake on a poor photo. Better photos and a human check are the fix, not giving up on a useful tool.",
          "Spraying without knowing the problem wastes money and can harm people, animals and bees. Many causes of wilting are not insects at all.",
        ],
        hintsSw: [
          "Namba kubwa ni kiwango cha uhakika wa programu, si ushahidi. Kile Juma anachokiona shambani (nusu ya mimea inanyauka) ni ushahidi wenye nguvu zaidi kuliko picha moja kwenye mwanga mkali.",
          "Sawa. Macho yake yanapingana na programu, kwa hiyo anakusanya ushahidi bora na kumuuliza mtu anayeweza kuiona mimea. Kunyauka kunaweza kuanzia kwenye mizizi au shina, jambo ambalo picha moja ya jani haiwezi kuonyesha.",
          "Umezidi. Programu ilikosea mara moja kwa picha mbaya. Suluhisho ni picha bora na ukaguzi wa mtu, si kuacha zana inayosaidia.",
          "Kunyunyiza bila kujua tatizo ni kupoteza pesa na kunaweza kudhuru watu, wanyama na nyuki. Sababu nyingi za kunyauka si wadudu kabisa.",
        ],
        explainEn: "When an AI answer disagrees with what you can see, trust the evidence in the field, collect better examples and ask a person.",
        explainSw: "Jibu la AI linapopingana na kile unachokiona, amini ushahidi wa shambani, kusanya mifano bora na muulize mtu.",
      }),
      quiz(
        "Which of these farm jobs is an AI tool best suited to?",
        "Ni kazi ipi kati ya hizi za shamba inayofaa zaidi zana ya AI?",
        [
          "Guessing from a photo which leaf problem is most likely",
          "Deciding how much of your savings to spend on inputs this season",
          "Promising that this season's harvest will be good",
          "Replacing the need to walk your field and look at your plants",
        ],
        [
          "Kukisia kutokana na picha tatizo la jani linalowezekana zaidi",
          "Kuamua ni kiasi gani cha akiba yako utumie kwa pembejeo msimu huu",
          "Kuahidi kwamba mavuno ya msimu huu yatakuwa mazuri",
          "Kuondoa haja ya kutembea shambani na kuangalia mimea yako",
        ],
        0,
        "AI is good at comparing a new example with patterns it has learned, like a leaf photo. Spending decisions depend on your whole household, no tool can promise a harvest, and nothing replaces looking at your own field.",
        "AI ni hodari wa kulinganisha mfano mpya na mifumo iliyojifunza, kama picha ya jani. Maamuzi ya matumizi ya pesa yanategemea kaya yako yote, hakuna zana inayoweza kuahidi mavuno, na hakuna kinachochukua nafasi ya kuangalia shamba lako mwenyewe."
      ),
      note(
        "Try it: AI job or people job?",
        "Jaribu: kazi ya AI au kazi ya watu?",
        "Take a piece of paper. Think of your family's shamba, a school garden, or a farm you know.\n\nWrite five decisions made on that farm. For example: when to plant, which seed to buy, what is wrong with a sick plant, where to sell, when to harvest.\n\nNext to each one, write A if an AI tool could help you make a guess, and P if it needs a person who can see the farm or knows your family's money. Many will get both letters: AI makes a guess, a person checks and decides.\n\nKeep this paper. You will add to it as the course goes on.",
        "Chukua karatasi. Fikiria shamba la familia yako, bustani ya shule, au shamba unalolijua.\n\nAndika maamuzi matano yanayofanywa katika shamba hilo. Kwa mfano: lini kupanda, mbegu gani kununua, mmea mgonjwa una tatizo gani, wapi kuuza, lini kuvuna.\n\nKando ya kila moja, andika A kama zana ya AI inaweza kukusaidia kukisia, na W kama linahitaji watu wanaoweza kuliona shamba au wanaojua pesa za familia yako. Mengi yatapata herufi zote mbili: AI inakisia, mtu anakagua na kuamua.\n\nHifadhi karatasi hii. Utaiongezea kadiri kozi inavyoendelea."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- AI on the farm learns from many examples and gives a guess.\n- A guess is not a fact. Your eyes, the afisa wa ugani and the agrovet check it.\n- AI cannot see your field, know your budget or promise a harvest.\n- Next: your own farm records are data, and they are how you check any tool.",
        "- AI shambani hujifunza kutokana na mifano mingi na hutoa makisio.\n- Makisio si ukweli. Macho yako, afisa wa ugani na agrovet huyakagua.\n- AI haiwezi kuona shamba lako, kujua bajeti yako wala kuahidi mavuno.\n- Ifuatayo: rekodi za shamba lako ni data, na ndizo unazotumia kukagua zana yoyote."
      ),
    ],
  },
  {
    id: "agr-b-u2",
    titleEn: "Farm records are data",
    titleSw: "Rekodi za shamba ni data",
    cards: [
      note(
        "Your farm notebook is data",
        "Daftari la shamba lako ni data",
        "Data means facts that are written down or stored so they can be used later. A record is one entry, such as 'Planted maize, 20 March 2026, 1 acre'. When you write records every season, your notebook becomes a dataset: a collection of records about the same kind of thing.\n\nWhy does this matter for AI? A model learns from data. If the data is careless, the model learns careless patterns. The same is true for you. Your own records show you what works on your farm, and they let you check whether an app's advice makes sense.\n\nA good farm record uses the same columns every time:\n\n- Date\n- Field or plot\n- Activity: planting, weeding, spraying, harvesting\n- Amount, with the unit: kg, bags of 90 kg, litres, crates\n- Cost in KES\n- Rain that day: yes or no, or millimetres if you have a rain gauge\n- Notes: what you saw\n\nThe unit is the part people forget. '5 bags' means nothing if one person means 50 kg bags and another means 90 kg bags.",
        "Data ni taarifa zilizoandikwa au kuhifadhiwa ili zitumike baadaye. Rekodi ni ingizo moja, kama 'Nimepanda mahindi, 20 Machi 2026, ekari 1'. Ukiandika rekodi kila msimu, daftari lako linakuwa seti ya data: mkusanyiko wa rekodi kuhusu jambo la aina moja.\n\nKwa nini jambo hili ni muhimu kwa AI? Modeli (model) hujifunza kutokana na data. Data ikiwa ya ovyo, modeli hujifunza mifumo ya ovyo. Ndivyo ilivyo kwako pia. Rekodi zako zinakuonyesha kinachofanya kazi shambani kwako, na zinakuwezesha kukagua kama ushauri wa programu una mantiki.\n\nRekodi nzuri ya shamba hutumia safu zile zile kila mara:\n\n- Tarehe\n- Shamba au kipande\n- Kazi: kupanda, kupalilia, kunyunyiza, kuvuna\n- Kiasi, pamoja na kipimo: kg, magunia ya kg 90, lita, kreti\n- Gharama kwa KES\n- Mvua siku hiyo: ndiyo au hapana, au milimita kama una kipimo cha mvua\n- Maelezo: ulichokiona\n\nKipimo ndicho watu husahau. 'Magunia 5' haimaanishi kitu kama mtu mmoja anamaanisha magunia ya kg 50 na mwingine magunia ya kg 90."
      ),
      reveal([
        {
          termEn: "Data",
          termSw: "Data",
          defEn: "Facts written down or stored so they can be used later, such as dates, amounts and costs.",
          defSw: "Taarifa zilizoandikwa au kuhifadhiwa ili zitumike baadaye, kama tarehe, kiasi na gharama.",
        },
        {
          termEn: "Record",
          termSw: "Rekodi",
          defEn: "One entry in your notebook or spreadsheet: one activity on one date.",
          defSw: "Ingizo moja katika daftari au jedwali lako: kazi moja katika tarehe moja.",
        },
        {
          termEn: "Dataset",
          termSw: "Seti ya data",
          defEn: "Many records of the same kind kept together, such as three seasons of maize records.",
          defSw: "Rekodi nyingi za aina moja zilizowekwa pamoja, kama rekodi za mahindi za misimu mitatu.",
        },
        {
          termEn: "Unit of measure",
          termSw: "Kipimo",
          defEn: "What a number is counted in: kg, litres, acres, 90 kg bags. Without it the number cannot be compared.",
          defSw: "Kile ambacho namba inahesabiwa kwacho: kg, lita, ekari, magunia ya kg 90. Bila kipimo, namba haiwezi kulinganishwa.",
        },
        {
          termEn: "Yield",
          termSw: "Mavuno",
          defEn: "How much you harvest from a given area, for example 15 bags of 90 kg from 1 acre.",
          defSw: "Kiasi unachovuna kutoka eneo fulani, kwa mfano magunia 15 ya kg 90 kutoka ekari 1.",
        },
      ]),
      note(
        "Worked example: Baraka's 1-acre maize record",
        "Mfano: rekodi ya Baraka ya ekari 1 ya mahindi",
        "Imagine Baraka, who grows 1 acre of maize in Trans Nzoia during the long rains. The prices here are made up for the example. His notebook shows these costs:\n\n- Ploughing: KES 4,000\n- Seed, 10 kg: KES 3,000\n- Planting fertiliser, one 50 kg bag: KES 3,500\n- Top-dressing fertiliser, one 50 kg bag: KES 3,000\n- Weeding, two rounds at KES 2,000 each: KES 4,000\n- Harvesting and shelling: KES 3,000\n\nTotal cost: KES 20,500.\n\nHe harvested 15 bags of 90 kg, which is 1,350 kg. He sold 12 bags at KES 3,200 each, which is KES 38,400. He kept 3 bags for the family.\n\nNow the useful sums. Money left from sales after costs: 38,400 minus 20,500 is KES 17,900. Cost per bag: 20,500 divided by 15 bags is about KES 1,367. So if a buyer ever offers less than about KES 1,367 a bag, Baraka is selling below what the maize cost him to grow.\n\nWhere it went wrong at first: Baraka forgot to write down the second weeding. His notebook showed costs of KES 18,500, and he thought he had KES 19,900 left. That missing KES 2,000 would mislead him next season, and it would mislead any app he gave his numbers to. A tool can only be as good as the records you give it.",
        "Fikiria Baraka, anayelima ekari 1 ya mahindi huko Trans Nzoia wakati wa mvua ndefu. Bei hapa ni za kubuni kwa ajili ya mfano. Daftari lake linaonyesha gharama hizi:\n\n- Kulima: KES 4,000\n- Mbegu, kg 10: KES 3,000\n- Mbolea ya kupandia, gunia moja la kg 50: KES 3,500\n- Mbolea ya kukuzia, gunia moja la kg 50: KES 3,000\n- Kupalilia, mara mbili kwa KES 2,000 kila mara: KES 4,000\n- Kuvuna na kupukuchua: KES 3,000\n\nJumla ya gharama: KES 20,500.\n\nAlivuna magunia 15 ya kg 90, yaani kg 1,350. Aliuza magunia 12 kwa KES 3,200 kila moja, yaani KES 38,400. Alibakiza magunia 3 kwa ajili ya familia.\n\nSasa hesabu zenye manufaa. Pesa zilizobaki kutoka mauzo baada ya gharama: 38,400 toa 20,500 ni KES 17,900. Gharama kwa kila gunia: 20,500 gawanya kwa magunia 15 ni takriban KES 1,367. Kwa hiyo mnunuzi akimpa bei chini ya takriban KES 1,367 kwa gunia, Baraka anauza chini ya gharama aliyotumia kuzalisha mahindi hayo.\n\nKosa lilitokea wapi mwanzoni: Baraka alisahau kuandika palizi ya pili. Daftari lake lilionyesha gharama ya KES 18,500, akadhani amebaki na KES 19,900. KES 2,000 hizo zilizokosekana zingempotosha msimu ujao, na zingepotosha programu yoyote ambayo angeipa namba zake. Zana inaweza kuwa bora tu kama rekodi unazoipa."
      ),
      scenario({
        titleEn: "Practice: '20 bags each'",
        titleSw: "Mazoezi: 'magunia 20 kila mmoja'",
        situationEn: "Two neighbours in Nakuru both say, 'I harvested 20 bags of maize from one acre.' Achieng filled 90 kg bags. Kiprono filled 50 kg bags. A farm app asks each of them to type their yield so it can compare farms in the ward.",
        situationSw: "Majirani wawili huko Nakuru wote wanasema, 'Nilivuna magunia 20 ya mahindi kutoka ekari moja.' Achieng alijaza magunia ya kg 90. Kiprono alijaza magunia ya kg 50. Programu ya kilimo inamwomba kila mmoja aandike mavuno yake ili ilinganishe mashamba ya wadi.",
        questionEn: "Which statement is true?",
        questionSw: "Kauli ipi ni ya kweli?",
        optionsEn: [
          "They had the same harvest, because both filled 20 bags",
          "Achieng harvested 1,800 kg and Kiprono 1,000 kg, so she harvested 800 kg more",
          "Their harvests can never be compared, so records are pointless",
          "Kiprono harvested more, because smaller bags are fuller",
        ],
        optionsSw: [
          "Walipata mavuno sawa, kwa sababu wote walijaza magunia 20",
          "Achieng alivuna kg 1,800 na Kiprono kg 1,000, kwa hiyo alivuna kg 800 zaidi",
          "Mavuno yao hayawezi kulinganishwa kamwe, kwa hiyo rekodi hazina maana",
          "Kiprono alivuna zaidi, kwa sababu magunia madogo hujaa zaidi",
        ],
        correctIndex: 1,
        hintsEn: [
          "The count is the same but the unit is different. 20 bags of 90 kg is not the same as 20 bags of 50 kg.",
          "Correct. 20 times 90 is 1,800 kg and 20 times 50 is 1,000 kg. Typing '20 bags' into the app without the bag size would give it wrong data.",
          "They can be compared once both are turned into the same unit, kg. Records are exactly what makes that possible.",
          "Bag size does not change how much maize grew. Multiply bags by kg per bag to compare.",
        ],
        hintsSw: [
          "Idadi ni sawa lakini kipimo ni tofauti. Magunia 20 ya kg 90 si sawa na magunia 20 ya kg 50.",
          "Sahihi. 20 mara 90 ni kg 1,800 na 20 mara 50 ni kg 1,000. Kuandika 'magunia 20' kwenye programu bila ukubwa wa gunia kungeipa data isiyo sahihi.",
          "Yanaweza kulinganishwa yakibadilishwa kuwa kipimo kimoja, kg. Rekodi ndizo zinazowezesha jambo hilo.",
          "Ukubwa wa gunia haubadilishi kiasi cha mahindi kilichoota. Zidisha magunia kwa kg za kila gunia ili kulinganisha.",
        ],
        explainEn: "Always write the unit. Turn everything into the same unit, usually kg, before you compare or give numbers to an app.",
        explainSw: "Andika kipimo kila mara. Badilisha kila kitu kuwa kipimo kimoja, kwa kawaida kg, kabla ya kulinganisha au kuipa programu namba.",
      }),
      quiz(
        "Which of these records would be most useful to you, or to an app, next season?",
        "Ni rekodi ipi kati ya hizi itakayokufaa zaidi wewe, au programu, msimu ujao?",
        [
          "'Sprayed today, used some bottle'",
          "'12 April 2026, plot B, top-dressed maize, one 50 kg bag, KES 3,000, light rain'",
          "'Did a lot of work in the shamba today'",
          "'April: spent money on the farm'",
        ],
        [
          "'Nimenyunyiza leo, nimetumia chupa fulani'",
          "'12 Aprili 2026, kipande B, mbolea ya kukuzia mahindi, gunia moja la kg 50, KES 3,000, mvua kidogo'",
          "'Nimefanya kazi nyingi shambani leo'",
          "'Aprili: nimetumia pesa shambani'",
        ],
        1,
        "A useful record has a date, place, activity, amount with unit, cost and conditions. The others feel like records but cannot be added up or compared.",
        "Rekodi yenye manufaa ina tarehe, mahali, kazi, kiasi pamoja na kipimo, gharama na hali ya hewa. Zingine zinaonekana kama rekodi lakini haziwezi kujumlishwa wala kulinganishwa."
      ),
      note(
        "Try it: start your record today",
        "Jaribu: anza rekodi yako leo",
        "You need a notebook and a pen. No phone is needed.\n\n- Draw seven columns: Date, Plot, Activity, Amount and unit, Cost (KES), Rain, Notes.\n- Fill in the last three things done on your farm or garden, even small ones like watering or weeding.\n- If you do not know a cost, ask an adult or write 'unknown'. Do not guess a number.\n- At the bottom of the page, add up the costs you do know.\n\nIf you are at school, do this for the school garden. Measure harvests with a kitchen scale or count them, and write the unit every time.",
        "Unahitaji daftari na kalamu. Huhitaji simu.\n\n- Chora safu saba: Tarehe, Kipande, Kazi, Kiasi na kipimo, Gharama (KES), Mvua, Maelezo.\n- Jaza mambo matatu ya mwisho yaliyofanywa shambani au bustanini kwenu, hata madogo kama kumwagilia au kupalilia.\n- Kama hujui gharama, muulize mtu mzima au andika 'haijulikani'. Usikisie namba.\n- Chini ya ukurasa, jumlisha gharama unazozijua.\n\nKama uko shuleni, fanya hivi kwa bustani ya shule. Pima mavuno kwa mizani ya jikoni au yahesabu, na uandike kipimo kila mara."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- Your notebook is a dataset. Every record needs a date, amount, unit and cost.\n- Missing or careless records mislead you and any app you use.\n- Cost per bag tells you the lowest price that does not lose money.\n- Next: weather forecasts are predictions made from data, and they come as probabilities.",
        "- Daftari lako ni seti ya data. Kila rekodi inahitaji tarehe, kiasi, kipimo na gharama.\n- Rekodi zilizokosekana au za ovyo hukupotosha wewe na programu yoyote unayotumia.\n- Gharama kwa kila gunia inakuonyesha bei ya chini kabisa isiyokuletea hasara.\n- Ifuatayo: utabiri wa hali ya hewa ni makisio yanayotokana na data, na huja kama uwezekano."
      ),
    ],
  },
  {
    id: "agr-b-u3",
    titleEn: "Weather forecasts and probability",
    titleSw: "Utabiri wa hali ya hewa na uwezekano",
    cards: [
      note(
        "What '60% chance of rain' really means",
        "Maana halisi ya 'uwezekano wa mvua 60%'",
        "A weather forecast is a prediction: a careful guess about what will happen, made from data. Forecasters use measurements such as temperature, wind, clouds and air pressure, and computer models that have learned how weather usually develops.\n\nA forecast rarely says 'it will rain'. It says '60% chance of rain'. Probability is a number from 0% to 100% that says how likely something is. Here is what 60% means. Think of 10 days that had a forecast like today's. On about 6 of them it rained at your place. On about 4 it stayed dry.\n\nSo if the forecast said 60% and your farm stayed dry, the forecast was not necessarily wrong. Your dry day was one of the 4 in 10. You can only judge a forecast over many days. It also does not mean it will rain for 60% of the day.\n\nWhere the forecast comes from matters. The Kenya Meteorological Department (KMD) issues forecasts for Kenya, including seasonal forecasts before the long rains and the short rains. Many phone apps use global models built for the whole world. They can help, but they may not know your hills, lake or valley as well. When KMD and an app disagree, treat that as a sign to be careful, not a reason to pick the one you like.",
        "Utabiri wa hali ya hewa ni makisio ya makini kuhusu kitakachotokea, yanayotokana na data. Watabiri hutumia vipimo kama joto, upepo, mawingu na mgandamizo wa hewa, pamoja na modeli za kompyuta zilizojifunza jinsi hali ya hewa inavyobadilika kwa kawaida.\n\nUtabiri mara chache husema 'mvua itanyesha'. Husema 'uwezekano wa mvua 60%'. Uwezekano ni namba kati ya 0% na 100% inayoonyesha jinsi jambo linavyoweza kutokea. Hii ndiyo maana ya 60%. Fikiria siku 10 zilizokuwa na utabiri kama wa leo. Katika takriban siku 6, mvua ilinyesha mahali pako. Katika takriban siku 4, hakukunyesha.\n\nKwa hiyo kama utabiri ulisema 60% na shamba lako likabaki kavu, hiyo haimaanishi kwamba utabiri ulikosea. Siku yako kavu ilikuwa mojawapo ya zile 4 kati ya 10. Unaweza kupima utabiri kwa siku nyingi tu. Pia haimaanishi mvua itanyesha kwa asilimia 60 ya siku.\n\nChanzo cha utabiri ni muhimu. Idara ya Hali ya Hewa ya Kenya (KMD) hutoa utabiri wa Kenya, ukiwemo utabiri wa msimu kabla ya mvua ndefu na mvua fupi. Programu nyingi za simu hutumia modeli za dunia nzima. Zinaweza kusaidia, lakini huenda hazijui milima, ziwa au bonde lako vizuri hivyo. KMD na programu zikitofautiana, lichukue hilo kama ishara ya kuwa mwangalifu, si sababu ya kuchagua unaoupenda."
      ),
      reveal([
        {
          termEn: "Forecast",
          termSw: "Utabiri wa hali ya hewa",
          defEn: "A prediction of the weather made from measurements and computer models.",
          defSw: "Makisio ya hali ya hewa yanayotokana na vipimo na modeli za kompyuta.",
        },
        {
          termEn: "Probability",
          termSw: "Uwezekano",
          defEn: "How likely something is, from 0% (will not happen) to 100% (certain). 60% means about 6 times in 10.",
          defSw: "Jinsi jambo linavyoweza kutokea, kuanzia 0% (halitatokea) hadi 100% (hakika). 60% inamaanisha takriban mara 6 kati ya 10.",
        },
        {
          termEn: "Seasonal forecast",
          termSw: "Utabiri wa msimu",
          defEn: "KMD's outlook for a whole rainy season: whether rain may be below, near or above normal, and when it may start.",
          defSw: "Mtazamo wa KMD kwa msimu mzima wa mvua: kama mvua inaweza kuwa chini, karibu au juu ya kawaida, na lini inaweza kuanza.",
        },
        {
          termEn: "Onset of the rains",
          termSw: "Kuanza kwa msimu wa mvua",
          defEn: "The time when steady seasonal rain begins, not just one shower.",
          defSw: "Wakati mvua ya msimu inapoanza kunyesha kwa mfululizo, si mvua ya siku moja tu.",
        },
        {
          termEn: "False start",
          termSw: "Mwanzo wa uongo",
          defEn: "A few rainy days followed by a long dry spell, which can dry out seed that was planted too early.",
          defSw: "Siku chache za mvua zinazofuatwa na kipindi kirefu cha ukavu, kinachoweza kukausha mbegu zilizopandwa mapema mno.",
        },
      ]),
      note(
        "Worked example: Otieno decides when to plant",
        "Mfano: Otieno anaamua lini kupanda",
        "Imagine Otieno in Kisumu County. He will plant 1 acre of maize in the long rains. Seed and planting fertiliser will cost him KES 6,500. The figures are made up for the example.\n\nStep 1: he checks the app's forecasts. For 10 days in early March the app said about 60% chance of rain each day. It rained on 5 of those days. 5 in 10 is close to 6 in 10, so the app is behaving about as it says.\n\nStep 2: on 10 March a heavy shower falls. The app now says 70% chance of rain tomorrow. His neighbour says, 'Plant now!'\n\nStep 3: he compares this with the KMD seasonal forecast for his region, which says the steady rains are expected later in March. One shower and one high number for tomorrow do not tell him about the next three weeks.\n\nStep 4: he works out the cost of being wrong. If he plants now and it is a false start, much of the seed may dry out. Replanting would cost about KES 3,000 for new seed plus KES 1,500 for labour: KES 4,500 extra. Waiting a week or two costs him very little.\n\nStep 5: he waits, asks the afisa wa ugani what 'enough rain to plant' means for his area, and checks the soil with his hand. The rain becomes steady around 24 March and he plants on 26 March.\n\nThe lesson: a forecast for tomorrow is not the same as the start of the season. Use the probability, KMD's seasonal outlook and local advice together.",
        "Fikiria Otieno katika Kaunti ya Kisumu. Atapanda ekari 1 ya mahindi wakati wa mvua ndefu. Mbegu na mbolea ya kupandia zitamgharimu KES 6,500. Namba ni za kubuni kwa ajili ya mfano.\n\nHatua ya 1: anaangalia utabiri wa programu. Kwa siku 10 mwanzoni mwa Machi, programu ilisema takriban uwezekano wa mvua 60% kila siku. Mvua ilinyesha siku 5 kati ya hizo. 5 kati ya 10 iko karibu na 6 kati ya 10, kwa hiyo programu inafanya kazi karibu kama inavyosema.\n\nHatua ya 2: tarehe 10 Machi mvua kubwa inanyesha. Sasa programu inasema uwezekano wa mvua kesho ni 70%. Jirani yake anasema, 'Panda sasa hivi!'\n\nHatua ya 3: analinganisha na utabiri wa msimu wa KMD kwa eneo lake, unaosema mvua ya mfululizo inatarajiwa baadaye mwezi Machi. Mvua ya siku moja na namba kubwa ya kesho hazimwambii chochote kuhusu wiki tatu zijazo.\n\nHatua ya 4: anahesabu gharama ya kukosea. Akipanda sasa na ikawa mwanzo wa uongo, mbegu nyingi zinaweza kukauka. Kupanda upya kungegharimu takriban KES 3,000 za mbegu mpya pamoja na KES 1,500 za vibarua: KES 4,500 za ziada. Kusubiri wiki moja au mbili kunamgharimu kidogo sana.\n\nHatua ya 5: anasubiri, anamuuliza afisa wa ugani 'mvua ya kutosha kupanda' inamaanisha nini katika eneo lake, na anakagua udongo kwa mkono. Mvua inaanza kunyesha kwa mfululizo karibu tarehe 24 Machi, naye anapanda tarehe 26 Machi.\n\nFunzo: utabiri wa kesho si sawa na kuanza kwa msimu. Tumia uwezekano, mtazamo wa msimu wa KMD na ushauri wa eneo lako kwa pamoja."
      ),
      scenario({
        titleEn: "Practice: 90% tomorrow, late season ahead",
        titleSw: "Mazoezi: 90% kesho, msimu unaochelewa",
        situationEn: "Amina farms 2 acres in Machakos. After one good shower, her app says 90% chance of rain tomorrow. The KMD seasonal forecast for her county says the rains may start late and be below normal.",
        situationSw: "Amina analima ekari 2 huko Machakos. Baada ya mvua moja nzuri, programu yake inasema uwezekano wa mvua kesho ni 90%. Utabiri wa msimu wa KMD kwa kaunti yake unasema mvua inaweza kuchelewa kuanza na kuwa chini ya kawaida.",
        questionEn: "What is the wisest plan?",
        questionSw: "Mpango wenye busara zaidi ni upi?",
        optionsEn: [
          "Plant both acres tomorrow, because 90% is almost certain",
          "Wait for steady rain, check the soil, and ask the afisa wa ugani which crops and varieties suit a short, weak season",
          "Ignore both forecasts, because forecasts are often wrong",
          "Skip planting for the whole season to avoid any risk",
        ],
        optionsSw: [
          "Kupanda ekari zote mbili kesho, kwa sababu 90% ni karibu hakika",
          "Kusubiri mvua ya mfululizo, kukagua udongo, na kumuuliza afisa wa ugani mazao na aina zipi zinafaa msimu mfupi na dhaifu",
          "Kupuuza utabiri wote, kwa sababu utabiri mara nyingi hukosea",
          "Kuacha kupanda msimu mzima ili kuepuka hatari yoyote",
        ],
        correctIndex: 1,
        hintsEn: [
          "90% is about tomorrow only. The seasonal forecast is about the next few months, and it warns of a late, weak season. One wet day is not the onset.",
          "Right. She uses both forecasts for what each is good at, and adds local advice. A weak season is a reason to plan carefully, not to rush.",
          "Forecasts are uncertain, not useless. Over many days they are much better than guessing. Ignoring them throws away free information.",
          "Too cautious. A below-normal season still has rain. Good planning, not giving up, reduces the risk.",
        ],
        hintsSw: [
          "90% inahusu kesho tu. Utabiri wa msimu unahusu miezi michache ijayo, na unaonya kuhusu msimu unaochelewa na dhaifu. Siku moja ya mvua si kuanza kwa msimu.",
          "Sawa. Anatumia kila utabiri kwa kile unachofaa, na anaongeza ushauri wa eneo lake. Msimu dhaifu ni sababu ya kupanga kwa makini, si kukimbilia.",
          "Utabiri una mashaka, lakini si bure. Kwa siku nyingi ni bora zaidi kuliko kubahatisha. Kuupuuza ni kutupa taarifa za bure.",
          "Tahadhari imezidi. Msimu wa mvua chini ya kawaida bado una mvua. Mpango mzuri, si kukata tamaa, ndio unaopunguza hatari.",
        ],
        explainEn: "Daily forecasts answer 'will it rain tomorrow?'. Seasonal forecasts answer 'what kind of season is coming?'. Planting decisions need both, plus local advice.",
        explainSw: "Utabiri wa kila siku hujibu 'mvua itanyesha kesho?'. Utabiri wa msimu hujibu 'msimu wa aina gani unakuja?'. Maamuzi ya kupanda yanahitaji yote mawili, pamoja na ushauri wa eneo lako.",
      }),
      quiz(
        "For five days the forecast said 60% chance of rain. It rained on 3 of the 5 days. Was the forecast wrong?",
        "Kwa siku tano utabiri ulisema uwezekano wa mvua 60%. Mvua ilinyesha siku 3 kati ya 5. Je, utabiri ulikosea?",
        [
          "Yes, because it failed on 2 days",
          "Not necessarily: 3 in 5 is exactly 60%, and a forecast is judged over many days",
          "Yes, because 60% means it should rain for most of each day",
          "No, because forecasts from any app are always right",
        ],
        [
          "Ndiyo, kwa sababu ulishindwa siku 2",
          "Si lazima: 3 kati ya 5 ni sawa kabisa na 60%, na utabiri hupimwa kwa siku nyingi",
          "Ndiyo, kwa sababu 60% inamaanisha mvua inapaswa kunyesha sehemu kubwa ya kila siku",
          "Hapana, kwa sababu utabiri wa programu yoyote huwa sahihi kila mara",
        ],
        1,
        "3 out of 5 is 60%, which is what the forecast said. A 60% forecast expects some dry days. No forecast is always right, which is why you judge it over many days.",
        "3 kati ya 5 ni 60%, ambayo ndiyo utabiri ulisema. Utabiri wa 60% unatarajia siku kadhaa kavu. Hakuna utabiri ulio sahihi kila mara, ndiyo sababu unaupima kwa siku nyingi."
      ),
      note(
        "Try it: a 10-day forecast diary",
        "Jaribu: shajara ya utabiri ya siku 10",
        "You can do this with any weather forecast: a phone app, the radio, or KMD.\n\n- Each morning, write the date and the chance of rain the forecast gives for your area.\n- Each evening, write whether it rained at your home: yes or no.\n- After 10 days, group the days. For example, how many days had a forecast of 50% or more, and on how many of those did it rain?\n- If the app said around 60% on 10 days and it rained on about 6, it is working as it claims for your place.\n\nThis is how forecasters check their own models. You are doing the same thing with a notebook.",
        "Unaweza kufanya hivi kwa utabiri wowote wa hali ya hewa: programu ya simu, redio, au KMD.\n\n- Kila asubuhi, andika tarehe na uwezekano wa mvua unaotolewa na utabiri kwa eneo lako.\n- Kila jioni, andika kama mvua ilinyesha nyumbani kwenu: ndiyo au hapana.\n- Baada ya siku 10, panga siku katika makundi. Kwa mfano, ni siku ngapi zilikuwa na utabiri wa 50% au zaidi, na ni ngapi kati ya hizo mvua ilinyesha?\n- Kama programu ilisema takriban 60% kwa siku 10 na mvua ikanyesha takriban siku 6, inafanya kazi kama inavyodai mahali pako.\n\nHivi ndivyo watabiri wanavyokagua modeli zao. Unafanya jambo hilo hilo kwa daftari."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- A probability like 60% means about 6 times in 10, not a promise.\n- Judge a forecast over many days, not one.\n- Tomorrow's forecast is not the onset of the season. Check KMD's seasonal forecast and local advice.\n- Work out what it costs you to be wrong before you act.\n- Next: photo apps also give probabilities, and a good photo makes a better guess.",
        "- Uwezekano kama 60% unamaanisha takriban mara 6 kati ya 10, si ahadi.\n- Pima utabiri kwa siku nyingi, si moja.\n- Utabiri wa kesho si kuanza kwa msimu. Angalia utabiri wa msimu wa KMD na ushauri wa eneo lako.\n- Hesabu gharama ya kukosea kabla ya kuchukua hatua.\n- Ifuatayo: programu za picha pia hutoa uwezekano, na picha nzuri huleta makisio bora."
      ),
    ],
  },
  {
    id: "agr-b-u4",
    titleEn: "Photographing a plant so a tool can guess",
    titleSw: "Kupiga picha ya mmea ili zana ikisie",
    cards: [
      note(
        "A photo app only sees what you show it",
        "Programu ya picha inaona tu unachoonyesha",
        "A plant photo app is a classifier: software that puts a new example into a group it already knows, such as 'healthy', 'fall armyworm damage' or 'nutrient shortage'. People first collected many photos and wrote the right name on each one. That name is a label. The software learned patterns: this colour, this shape of hole, this kind of powder. When you send a new photo, it compares it with those patterns and gives a guess, often with a percentage.\n\nThe guess can only be as good as the photo. Three things matter most.\n\nLight. Harsh midday sun on a shiny leaf makes white patches. The app may treat those patches as a disease. Stand so the leaf is in open shade, or wait until morning or late afternoon. Do not use a camera flash. Do not photograph through a plastic bag.\n\nThe whole plant. Some problems start in the roots or stem. A close-up of one leaf cannot show wilting, rot at the base, or a whole row dying. Take one photo of the whole plant, one of the damaged part, and if you can pull a plant, one of the roots.\n\nMany plants. One hole on one leaf is not the same as holes on every third plant. Walk through the field and photograph several plants, not only the worst one. If you send only the ugliest leaf, the app sees a farm that does not exist.\n\nKenyan tools such as Agrika are built to work from leaf photos, including when there is no internet, and they can use Kiswahili. They still need a fair photo. KALRO research and the county afisa wa ugani still need to see what is happening on your farm.",
        "Programu ya picha za mimea ni ainishaji (classifier): programu inayoweka mfano mpya katika kundi ambalo tayari inalijua, kama 'mzima', 'uharibifu wa viwavijeshi vamizi' au 'upungufu wa lishe'. Kwanza watu walikusanya picha nyingi na kuandika jina sahihi kwenye kila moja. Jina hilo ni lebo. Programu ilijifunza mifumo: rangi hii, umbo hili la tundu, aina hii ya unga. Ukituma picha mpya, inailinganisha na mifumo hiyo na kutoa makisio, mara nyingi pamoja na asilimia.\n\nMakisio yanaweza kuwa mazuri tu kama picha ilivyo. Mambo matatu ndiyo muhimu zaidi.\n\nMwanga. Jua kali la mchana kwenye jani lenye mng'ao huleta mabaka meupe. Programu inaweza kuyachukulia mabaka hayo kama ugonjwa. Simama ili jani liwe kwenye kivuli wazi, au subiri asubuhi au jioni. Usitumie mwanga wa kamera. Usipige picha kupitia mfuko wa plastiki.\n\nMmea mzima. Baadhi ya matatizo huanza kwenye mizizi au shina. Picha ya karibu ya jani moja haiwezi kuonyesha kunyauka, kuoza kwenye msingi, au mstari mzima unakufa. Piga picha moja ya mmea mzima, moja ya sehemu iliyoharibika, na kama unaweza kung'oa mmea, moja ya mizizi.\n\nMimea mingi. Tundu moja kwenye jani moja si sawa na matundu kwenye kila mmea wa tatu. Tembea shambani na upige picha za mimea kadhaa, si ile mbaya pekee. Ukituma jani baya pekee, programu inaona shamba ambalo halipo.\n\nZana za Kenya kama Agrika zimeundwa kufanya kazi kutokana na picha za majani, hata pasipokuwa na intaneti, na zinaweza kutumia Kiswahili. Bado zinahitaji picha ya haki. Utafiti wa KALRO na afisa wa ugani wa kaunti bado wanahitaji kuona kinachotokea shambani kwako."
      ),
      reveal([
        {
          termEn: "Classifier",
          termSw: "Ainishaji (classifier)",
          defEn: "Software that puts a new example, such as a leaf photo, into a group it has already learned.",
          defSw: "Programu inayoweka mfano mpya, kama picha ya jani, katika kundi ambalo tayari imelijifunza.",
        },
        {
          termEn: "Label",
          termSw: "Lebo",
          defEn: "The name a person wrote on a training photo, such as 'fall armyworm'. The model can only learn names it was given.",
          defSw: "Jina mtu aliloandika kwenye picha ya mafunzo, kama 'viwavijeshi vamizi'. Modeli inaweza kujifunza majina aliyopewa tu.",
        },
        {
          termEn: "Glare",
          termSw: "Mng'ao mkali",
          defEn: "Bright white patches on a photo from sun or flash. The app may mistake them for disease.",
          defSw: "Mabaka meupe yenye mwanga kwenye picha kutokana na jua au flash. Programu inaweza kuyadhania ni ugonjwa.",
        },
        {
          termEn: "Whole-plant photo",
          termSw: "Picha ya mmea mzima",
          defEn: "A picture that shows leaves, stem and how the plant stands, not only one damaged spot.",
          defSw: "Picha inayoonyesha majani, shina na jinsi mmea ulivyosimama, si sehemu moja iliyoharibika tu.",
        },
        {
          termEn: "Scouting",
          termSw: "Ukaguzi wa shamba",
          defEn: "Walking the field on purpose to count how many plants have a problem, not only looking at the worst one.",
          defSw: "Kutembea shambani kwa makusudi ili kuhesabu mimea mingapi ina tatizo, si kuangalia lile baya pekee.",
        },
      ]),
      note(
        "Worked example: Njeri's three photos of the same maize",
        "Mfano: picha tatu za Njeri za mahindi yale yale",
        "Imagine Njeri, who grows 1 acre of maize in Bungoma. In week six she sees holes on some leaves. She uses a photo app of the kind Agrika builds: it can guess from a picture, work without internet, and use Kiswahili. The names and percentages below are made up for the lesson.\n\nPhoto 1. She stands over one leaf at noon. The photo is white on one side and shows a single hole. The app says 'Nutrient shortage, 71% sure.'\n\nPhoto 2. In open shade she photographs the whole plant. The top is ragged, like window panes, and there is moist frass in the whorl. The app now says 'Fall armyworm damage, 64% sure.'\n\nPhoto 3. She walks a W through the field and photographs four other plants the same way. Three of the five plants show the same damage. The app still says fall armyworm, with similar certainty.\n\nWhat Njeri does not do: she does not spray. Fall armyworm reached Kenya around 2017 and it is a real pest, but a photo guess is not a spray plan. She writes the date, the count (3 of 5 plants) and keeps the photos for the afisa wa ugani.\n\nWhere Photo 1 went wrong: glare hid the pattern, and one hole can be many things. Nitrogen shortage and insect damage can look similar in a bad close-up. Better light, the whole plant, and several plants changed the guess. A person still has to confirm it.",
        "Fikiria Njeri, anayelima ekari 1 ya mahindi huko Bungoma. Wiki ya sita anaona matundu kwenye majani. Anatumia programu ya picha ya aina Agrika inayojenga: inaweza kukisia kutokana na picha, kufanya kazi bila intaneti, na kutumia Kiswahili. Majina na asilimia hapa ni za kubuni kwa somo.\n\nPicha 1. Anasimama juu ya jani moja adhuhuri. Picha ni nyeupe upande mmoja na inaonyesha tundu moja. Programu inasema 'Upungufu wa lishe, uhakika 71%.'\n\nPicha 2. Kwenye kivuli wazi anapiga picha ya mmea mzima. Sehemu ya juu imeraruka kama dirisha, na kuna kinyesi chenye unyevu kwenye kipepeo cha majani. Sasa programu inasema 'Uharibifu wa viwavijeshi vamizi, uhakika 64%.'\n\nPicha 3. Anatembea umbo la W shambani na kupiga picha za mimea mingine minne vivyo hivyo. Mimea 3 kati ya 5 inaonyesha uharibifu uleule. Programu bado inasema viwavijeshi vamizi, kwa uhakika unaofanana.\n\nNjeri hafanyi nini: hanunyiizi. Viwavijeshi vamizi vilifika Kenya karibu 2017 na ni wadudu halisi, lakini makisio ya picha si mpango wa kunyunyiza. Anaandika tarehe, hesabu (mimea 3 kati ya 5) na kuhifadhi picha kwa afisa wa ugani.\n\nPicha 1 ilikosea wapi: mng'ao ulificha muundo, na tundu moja linaweza kuwa vitu vingi. Upungufu wa nitrojeni na uharibifu wa wadudu vinaweza kuonekana sawa kwenye picha mbaya ya karibu. Mwanga bora, mmea mzima, na mimea kadhaa vilabadilisha makisio. Bado mtu anahitaji kuyathibitisha."
      ),
      scenario({
        titleEn: "Practice: one ugly leaf",
        titleSw: "Mazoezi: jani baya moja",
        situationEn: "Kiprono grows potatoes in Nyandarua. One plant at the edge of the plot has yellow spots. He photographs only that leaf, in bright sun, from 5 cm away. The app says 'Late blight, 88% sure.' The rest of the plot looks green from the path.",
        situationSw: "Kiprono analima viazi huko Nyandarua. Mmea mmoja kando ya kipande una mabaka ya manjano. Anapiga picha ya jani hilo tu, kwenye jua kali, kutoka sentimita 5. Programu inasema 'Ugonjwa wa late blight, uhakika 88%.' Kipande kizima kinaonekana kijani kutoka njiani.",
        questionEn: "What should Kiprono do before he treats the whole plot?",
        questionSw: "Kiprono afanye nini kabla ya kutibu kipande kizima?",
        optionsEn: [
          "Treat every plant today, because 88% is almost certain",
          "Take shaded photos of the whole plant and of several other plants, then show them to the afisa wa ugani",
          "Delete the photo, because yellow spots are never a disease",
          "Send the same close-up to a chatbot and spray whatever product it names",
        ],
        optionsSw: [
          "Kutibu kila mmea leo, kwa sababu 88% ni karibu hakika",
          "Kupiga picha zenye kivuli za mmea mzima na za mimea mingine kadhaa, kisha kumwonyesha afisa wa ugani",
          "Kufuta picha, kwa sababu mabaka ya manjano si ugonjwa kamwe",
          "Kutuma picha ileile ya karibu kwa chatbot na kunyunyiza bidhaa yoyote inayoitaja",
        ],
        correctIndex: 1,
        hintsEn: [
          "88% is the app's confidence on one harsh close-up of the worst plant. It is not a count of how many plants are sick, and it is not a spray instruction.",
          "Right. Better photos and a walk of the plot tell you whether this is one plant or a spreading problem. A person still confirms before anyone treats.",
          "Yellow spots can be disease, nutrient shortage, or sun. Deleting the photo throws away evidence. You need more photos, not none.",
          "A chatbot can invent product names. Chemical use is decided with a PCPB label, an agrovet and the afisa wa ugani, never from a chat.",
        ],
        hintsSw: [
          "88% ni uhakika wa programu kwenye picha moja kali ya karibu ya mmea mbaya. Si hesabu ya mimea iliyo mgonjwa, wala si maelekezo ya kunyunyiza.",
          "Sawa. Picha bora na kutembea kipande vinaonyesha kama ni mmea mmoja au tatizo linaenea. Bado mtu anathibitisha kabla ya mtu yeyote kutibu.",
          "Mabaka ya manjano yanaweza kuwa ugonjwa, upungufu wa lishe, au jua. Kufuta picha ni kutupa ushahidi. Unahitaji picha zaidi, si kutokuwa nazo.",
          "Chatbot inaweza kubuni majina ya bidhaa. Matumizi ya dawa yanaamuliwa kwa lebo ya PCPB, agrovet na afisa wa ugani, si kutoka kwenye gumzo.",
        ],
        explainEn: "One close-up of the worst plant in harsh light is a poor sample. Several fair photos plus a person who can see the plot come before any treatment.",
        explainSw: "Picha moja ya karibu ya mmea mbaya kwenye mwanga mkali ni sampuli dhaifu. Picha kadhaa nzuri pamoja na mtu anayeweza kuona kipande zinakuja kabla ya tiba yoyote.",
      }),
      quiz(
        "You want a photo app to make a useful guess about a sick crop. Which set of photos is best?",
        "Unataka programu ya picha itoee makisio yenye manufaa kuhusu zao mgonjwa. Seti ipi ya picha ni bora?",
        [
          "One close-up of the ugliest leaf at midday, with the sun shining on it",
          "The whole plant in open shade, the damaged part, and a few other plants from different parts of the plot",
          "A photo of the empty sky above the field, so the app can see the weather",
          "A photo of the pesticide bottle you might buy",
        ],
        [
          "Picha moja ya karibu ya jani baya zaidi adhuhuri, jua likiangaza juu yake",
          "Mmea mzima kwenye kivuli wazi, sehemu iliyoharibika, na mimea mingine kutoka sehemu tofauti za kipande",
          "Picha ya anga tupu juu ya shamba, ili programu ionne hali ya hewa",
          "Picha ya chupa ya dawa unayoweza kununua",
        ],
        1,
        "The app compares your photo with labelled plant photos. It needs to see the plant clearly, not glare, the sky, or a bottle. Several plants show whether the problem is rare or common.",
        "Programu inalinganisha picha yako na picha za mimea zenye lebo. Inahitaji kuona mmea kwa uwazi, si mng'ao, si anga, wala chupa. Mimea kadhaa inaonyesha kama tatizo ni nadra au la kawaida."
      ),
      note(
        "Try it: three photos of one plant",
        "Jaribu: picha tatu za mmea mmoja",
        "Use any plant you can reach: a farm crop, a school garden, or a potted plant at home. No app is required today.\n\n- Photo A: the whole plant, standing so the light is from the side or the plant is in open shade.\n- Photo B: the leaf, fruit or stem you think looks odd, filling most of the frame, still in shade, in focus.\n- Photo C: two other plants of the same kind from other parts of the plot or garden.\n\nOn paper, write: date, crop, what you noticed, and whether Photo B still looks like a problem after you see Photos A and C.\n\nIf you later use a photo app, send this set, not only Photo B. Do not spray or treat because of the photos. That decision comes in the next unit.",
        "Tumia mmea wowote unaoweza kufikia: zao la shamba, bustani ya shule, au mmea wa saksafoni nyumbani. Leo huhitaji programu.\n\n- Picha A: mmea mzima, ukisimama ili mwanga uwe kutoka pembeni au mmea uwe kwenye kivuli wazi.\n- Picha B: jani, tunda au shina unalodhani linaonekana la ajabu, likijaza sehemu kubwa ya picha, bado kwenye kivuli, likionekana wazi.\n- Picha C: mimea mingine miwili ya aina ileile kutoka sehemu nyingine za kipande au bustani.\n\nKwenye karatasi, andika: tarehe, zao, ulichokiona, na kama Picha B bado inaonekana kuwa tatizo baada ya kuona Picha A na C.\n\nBaadaye ukitumia programu ya picha, tuma seti hii, si Picha B pekee. Usinyunyize wala kutibu kwa sababu ya picha. Uamuzi huo unakuja katika somo linalofuata."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- A photo app guesses from patterns it learned. A bad photo makes a bad guess.\n- Use open shade, show the whole plant, and photograph several plants.\n- A guess is not a spray plan.\n- Next: who you ask before you act — the afisa wa ugani, the agrovet and the PCPB label.",
        "- Programu ya picha hukisia kutokana na mifumo iliyojifunza. Picha mbaya huleta makisio mabaya.\n- Tumia kivuli wazi, onyesha mmea mzima, na piga picha za mimea kadhaa.\n- Makisio si mpango wa kunyunyiza.\n- Ifuatayo: unamuuliza nani kabla ya kuchukua hatua — afisa wa ugani, agrovet na lebo ya PCPB."
      ),
    ],
  },
  {
    id: "agr-b-u5",
    titleEn: "Who you ask before you act",
    titleSw: "Unamuuliza nani kabla ya kuchukua hatua",
    cards: [
      note(
        "A guess is not permission to spray",
        "Makisio si ruhusa ya kunyunyiza",
        "By now you can use a photo app and read a weather percentage. Neither of those is a decision. On a Kenyan farm, chemical use is decided by people using three things together: the afisa wa ugani, the agrovet, and the product label from the Pest Control Products Board (PCPB).\n\nThe afisa wa ugani is a trained adviser from the county or a programme. They can walk the field, look at your photos and your plant count, and tell you whether the problem is a pest, a disease, a nutrient shortage, or too much water. They do not sell the bottle.\n\nThe agrovet is the shop. Staff can show you which products they stock for that crop and pest. They should only sell products that PCPB has registered for use in Kenya.\n\nThe PCPB label on the bottle or packet is the instruction that counts. It says which crop, which pest, how much product in how much water, how long to wait before harvest (the pre-harvest interval), and what to wear. If the crop or pest is not on the label, that product is not for this job.\n\nA chatbot is none of these three. It can invent a product name, copy a dose from another country, or sound sure when it is guessing. Never spray because a chat told you to. Never put your ID number, M-Pesa PIN or the whole of your farm money into an unknown app that 'needs it to advise you'.\n\nThis unit closes the short course for younger learners. The rule to take home: tools help you notice. People and the label decide.",
        "Kufikia sasa unaweza kutumia programu ya picha na kusoma asilimia ya hali ya hewa. Hakuna kati ya hivyo ni uamuzi. Shambani Kenya, matumizi ya dawa yanaamuliwa na watu wakitumia mambo matatu pamoja: afisa wa ugani, agrovet, na lebo ya bidhaa kutoka Bodi ya Kudhibiti Bidhaa za Wadudu (PCPB).\n\nAfisa wa ugani ni mshauri aliyefunzwa kutoka kaunti au mradi. Anaweza kutembea shambani, kuangalia picha zako na hesabu ya mimea, na kukuambia kama tatizo ni wadudu, ugonjwa, upungufu wa lishe, au maji mengi. Hauuzi chupa.\n\nAgrovet ni duka. Wafanyakazi wanaweza kukuonyesha bidhaa wanazouza kwa zao na wadudu hao. Wanapaswa kuuza tu bidhaa ambazo PCPB imesajili kwa matumizi Kenya.\n\nLebo ya PCPB kwenye chupa au pakiti ndiyo maelekezo yanayohesabika. Inasema zao lipi, wadudu gani, kiasi gani cha bidhaa katika kiasi gani cha maji, muda wa kusubiri kabla ya kuvuna (kipindi kabla ya mavuno), na nini uvae. Zao au wadudu wakiwa hawako kwenye lebo, bidhaa hiyo si ya kazi hii.\n\nChatbot si kati ya hivi vitatu. Inaweza kubuni jina la bidhaa, kunakili kipimo kutoka nchi nyingine, au kusikika na uhakika inapokisia. Usinyunyize kwa sababu gumzo limekuambia. Usiweke namba yako ya kitambulisho, PIN ya M-Pesa au pesa zote za shamba kwenye programu isiyojulikana 'inayohitaji hivyo ili kukushauri'.\n\nSomo hili linafunga kozi fupi kwa wanafunzi wadogo. Kanuni ya kubeba nyumbani: zana zinakusaidia kuona. Watu na lebo ndio wanaoamua."
      ),
      reveal([
        {
          termEn: "PCPB",
          termSw: "PCPB",
          defEn: "Pest Control Products Board: the Kenyan body that registers farm chemicals and their labels.",
          defSw: "Bodi ya Kudhibiti Bidhaa za Wadudu: shirika la Kenya linalosajili dawa za shamba na lebo zake.",
        },
        {
          termEn: "Label",
          termSw: "Lebo",
          defEn: "The printed instructions on a registered product: crop, pest, rate, waiting time before harvest, and protective clothing.",
          defSw: "Maelekezo yaliyochapishwa kwenye bidhaa iliyosajiliwa: zao, wadudu, kipimo, muda wa kusubiri kabla ya kuvuna, na mavazi ya kujikinga.",
        },
        {
          termEn: "Pre-harvest interval",
          termSw: "Kipindi kabla ya mavuno",
          defEn: "The number of days you must wait after spraying before it is safe to harvest that crop.",
          defSw: "Idadi ya siku unazopaswa kusubiri baada ya kunyunyiza kabla ya kuvuna zao hilo kwa usalama.",
        },
        {
          termEn: "County extension",
          termSw: "Ugani wa kaunti",
          defEn: "The public agricultural advice service in your county, including the afisa wa ugani.",
          defSw: "Huduma ya umma ya ushauri wa kilimo katika kaunti yako, ikijumuisha afisa wa ugani.",
        },
      ]),
      note(
        "Worked example: the chatbot named a bottle",
        "Mfano: chatbot ilitaja chupa",
        "Imagine Hassan, who grows tomatoes on a quarter acre in Kirinyaga. A photo app said 'possible blight, 58% sure.' He then asked a chatbot, 'What should I spray and how much?' It named a product and a dose in millilitres per litre of water. The figures below are made up for the example.\n\nHassan does not buy that bottle yet. He takes his photos and a count (8 of 30 plants with spots) to the afisa wa ugani at the ward office. She walks the edge of the plot, agrees the pattern looks like a fungal disease, and says: 'Ask the agrovet for a PCPB-registered product labelled for tomatoes and this disease. Follow the label. Do not mix two bottles because a chat said so.'\n\nAt the agrovet, the seller shows two registered products. Hassan reads the tomato line on the first label. It matches the crop. He checks the waiting time before harvest: 7 days. His tomatoes will be picked in 4 days, so that product is the wrong choice this week. The second label allows harvest after 3 days. He buys that one, the smallest pack that covers his quarter acre at the labelled rate, and asks the seller to explain the protective clothing.\n\nWhere it could have gone wrong: the chatbot's product might not be sold in Kenya, might not be registered for tomatoes, or might have used a dose from another country. Hassan would have spent money and put food and family at risk. The chain that kept him safe was people plus the label, not the chat.",
        "Fikiria Hassan, anayelima nyanya kwenye robo ekari huko Kirinyaga. Programu ya picha ilisema 'huenda ni blight, uhakika 58%.' Kisha aliuliza chatbot, 'Ninyunyize nini na kiasi gani?' Ilitaja bidhaa na kipimo kwa mililita kwa kila lita ya maji. Namba hapa ni za kubuni kwa mfano.\n\nHassan hanunui chupa hiyo bado. Anachukua picha zake na hesabu (mimea 8 kati ya 30 yenye mabaka) kwa afisa wa ugani ofisini kwa wadi. Anatembea kando ya kipande, anakubali muundo unafanana na ugonjwa wa kuvu, na anasema: 'Uliza agrovet bidhaa iliyosajiliwa na PCPB yenye lebo ya nyanya na ugonjwa huu. Fuata lebo. Usichanganye chupa mbili kwa sababu gumzo limesema hivyo.'\n\nKwenye agrovet, muuzaji anaonyesha bidhaa mbili zilizosajiliwa. Hassan anasoma mstari wa nyanya kwenye lebo ya kwanza. Inafanana na zao. Anakagua muda wa kusubiri kabla ya kuvuna: siku 7. Nyanya zake zitavunwa kwa siku 4, kwa hiyo bidhaa hiyo si chaguo sawa wiki hii. Lebo ya pili inaruhusu kuvuna baada ya siku 3. Ananunua hiyo, pakiti ndogo zaidi inayotosha robo ekari yake kwa kipimo cha lebo, na anamwomba muuzaji aeleze mavazi ya kujikinga.\n\nMambo yangeweza kuharibika wapi: bidhaa ya chatbot huenda haiuzwi Kenya, haijasajiliwa kwa nyanya, au ilitumia kipimo cha nchi nyingine. Hassan angetumia pesa na kuweka chakula na familia hatarini. Mnyororo uliomlinda ni watu pamoja na lebo, si gumzo."
      ),
      scenario({
        titleEn: "Practice: 'just tell me what to spray'",
        titleSw: "Mazoezi: 'niambie tu ninyunyize nini'",
        situationEn: "A cousin sends Faith a WhatsApp message: 'Ask any chatbot what to spray on your maize. I did that last season.' Faith's photo app said fall armyworm with 61% certainty. She has not walked the field or spoken to anyone.",
        situationSw: "Binamu anamtumia Faith ujumbe wa WhatsApp: 'Uliza chatbot yoyote ninyunyize nini kwenye mahindi yako. Nilifanya hivyo msimu uliopita.' Programu ya picha ya Faith ilisema viwavijeshi vamizi kwa uhakika 61%. Hajatembea shambani wala kuongea na mtu.",
        questionEn: "What is the responsible next step?",
        questionSw: "Hatua yenye uwajibikaji inayofuata ni ipi?",
        optionsEn: [
          "Follow the cousin: the chatbot will name a product and a dose",
          "Scout the field, take the photos and the count to the afisa wa ugani, then buy only a PCPB-registered product the agrovet can show on a label",
          "Mix two leftover bottles from the store so that something is done today",
          "Put her ID number into the app so it can 'register the farm' before it advises",
        ],
        optionsSw: [
          "Kufuata binamu: chatbot itataja bidhaa na kipimo",
          "Kukagua shamba, kuchukua picha na hesabu kwa afisa wa ugani, kisha kununua tu bidhaa iliyosajiliwa na PCPB ambayo agrovet inaweza kuonyesha kwenye lebo",
          "Kuchanganya chupa mbili zilizobaki dukani ili kitu kifanyike leo",
          "Kuweka namba yake ya kitambulisho kwenye programu ili 'isajili shamba' kabla ya kushauri",
        ],
        correctIndex: 1,
        hintsEn: [
          "A cousin's story is one farm, one season. A chatbot can invent names and doses. That is not how chemical use is decided in Kenya.",
          "Correct. Eyes, extension, agrovet and the PCPB label are the chain. The app only helped her notice.",
          "Mixing leftovers can be illegal, unsafe and useless. The label is written for one product, one crop, one pest.",
          "An unknown app does not need your ID to look at a leaf photo. ID numbers and PINs stay with you.",
        ],
        hintsSw: [
          "Hadithi ya binamu ni shamba moja, msimu mmoja. Chatbot inaweza kubuni majina na vipimo. Si hivyo matumizi ya dawa yanavyoamuiliwa Kenya.",
          "Sahihi. Macho, ugani, agrovet na lebo ya PCPB ndio mnyororo. Programu ilimsaidia kuona tu.",
          "Kuchanganya mabaki kunaweza kuwa kinyume cha sheria, hatari na bila faida. Lebo imeandikwa kwa bidhaa moja, zao moja, wadudu mmoja.",
          "Programu isiyojulikana haihitaji kitambulisho chako kuangalia picha ya jani. Namba za kitambulisho na PIN zinabaki kwako.",
        ],
        explainEn: "Notice with tools. Confirm with the afisa wa ugani. Buy with the agrovet and the PCPB label. Never spray from a chat, and never hand over ID or PINs for advice.",
        explainSw: "Ona kwa zana. Thibitisha na afisa wa ugani. Nunua kwa agrovet na lebo ya PCPB. Usinyunyize kutoka kwenye gumzo, wala usitoe kitambulisho au PIN kwa ajili ya ushauri.",
      }),
      quiz(
        "Who has the last word on which farm chemical to use and at what rate?",
        "Nani ana neno la mwisho kuhusu dawa gani ya shamba itumike na kwa kipimo gani?",
        [
          "A chatbot that names a product and a number",
          "The PCPB label, read with the agrovet, after the afisa wa ugani has helped identify the problem",
          "The photo app, if its percentage is above 80%",
          "The neighbour who sprayed yesterday",
        ],
        [
          "Chatbot inayotaja bidhaa na namba",
          "Lebo ya PCPB, ikisomwa pamoja na agrovet, baada ya afisa wa ugani kusaidia kutambua tatizo",
          "Programu ya picha, kama asilimia yake iko juu ya 80%",
          "Jirani aliyenyunyiza jana",
        ],
        1,
        "Kenya registers farm chemicals through PCPB. The label is the instruction. Extension helps you know the problem. A percentage, a chat and a neighbour are not the label.",
        "Kenya inasajili dawa za shamba kupitia PCPB. Lebo ndiyo maelekezo. Ugani unakusaidia kujua tatizo. Asilimia, gumzo na jirani si lebo."
      ),
      note(
        "Try it: find your three people",
        "Jaribu: pata watu wako watatu",
        "On one page of your notebook write three headings: Afisa wa ugani, Agrovet, Label.\n\n- Afisa wa ugani: ask an adult the name of the nearest ward or county extension office, or write 'I will ask at the county agriculture office'. Add a phone number only if an adult gives you the official one.\n- Agrovet: write the name of one shop you actually use, or the nearest one an adult names.\n- Label: the next time someone at home has a farm chemical, look at the label together. Find the crop list, the rate, and the waiting time before harvest. Do not open the bottle. Do not practise spraying.\n\nIf you farm nothing at home, do this as a class using the school garden and a printed sample label from a teacher.",
        "Kwenye ukurasa mmoja wa daftari andika vichwa vitatu: Afisa wa ugani, Agrovet, Lebo.\n\n- Afisa wa ugani: muulize mtu mzima jina la ofisi ya ugani ya wadi au kaunti iliyo karibu, au andika 'Nitauliza ofisi ya kilimo ya kaunti'. Ongeza namba ya simu tu kama mtu mzima akupa ya rasmi.\n- Agrovet: andika jina la duka moja mnayotumia kweli, au lile karibu ambalo mtu mzima anataja.\n- Lebo: wakati ujao mtu nyumbani akiwa na dawa ya shamba, angalieni lebo pamoja. Tafuta orodha ya mazao, kipimo, na muda wa kusubiri kabla ya kuvuna. Usifungue chupa. Usifanye mazoezi ya kunyunyiza.\n\nKama hamlimi kitu nyumbani, fanyeni hivi darasani kwa kutumia bustani ya shule na lebo ya mfano iliyochapishwa na mwalimu."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- Tools help you notice. They do not give permission to spray.\n- Ask the afisa wa ugani, then the agrovet, and follow the PCPB label.\n- Never put ID numbers, PINs or all your farm money into an unknown app.\n- Next: the records you already keep are what any later AI will actually use.",
        "- Zana zinakusaidia kuona. Hazitoi ruhusa ya kunyunyiza.\n- Muulize afisa wa ugani, kisha agrovet, na fuata lebo ya PCPB.\n- Usiweke namba za kitambulisho, PIN au pesa zote za shamba kwenye programu isiyojulikana.\n- Ifuatayo: rekodi unazowahi kuweka ndizo AI yoyote baadaye itakazotumia kweli."
      ),
    ],
  },
  {
    id: "agr-b-u6",
    titleEn: "Farm records as the start of any later AI",
    titleSw: "Rekodi za shamba ndizo mwanzo wa AI yoyote baadaye",
    cards: [
      note(
        "A tool can only use what you can tell it",
        "Zana inaweza kutumia tu unachoweza kuiambia",
        "In Unit 2 you started a notebook: date, plot, activity, amount and unit, cost, rain, notes. That notebook is not extra homework. It is the start of any later AI you might use.\n\nHow? An advisory service on SMS or WhatsApp, such as FarmerAI on DigiFarm (Safaricom and Opportunity International), can only answer from what you type or from data others already stored. If you cannot say which crop, which plot, when you planted, and what you spent, the service fills the gaps with a typical farm that is not yours. A photo app cannot know whether the damaged plants are 3 in 20 or 18 in 20 unless you counted. A price message cannot know whether selling today loses money unless you know your cost per bag.\n\nSo the first AI skill on a farm is boring: the same columns, every time, in units you can add up. When a tool later asks for your yield, you answer in kg or in 90 kg bags, not that it was okay. When it asks when you planted, you have a date, not around the rains.\n\nRecords also let you check the tool. If an app says your ward usually harvests 20 bags an acre and your own three seasons show 12, 14 and 11 bags of 90 kg, you do not throw your farm away. You treat the app as a county average, and your notebook as the farm.\n\nWhat you still do not put in a random app: ID numbers, M-Pesa PINs, or a photo of every page of the notebook. You use the notebook yourself, and you share only the fields a known service needs.",
        "Katika Somo la 2 ulianza daftari: tarehe, kipande, kazi, kiasi na kipimo, gharama, mvua, maelezo. Daftari hilo si kazi ya nyumbani ya ziada. Ndiyo mwanzo wa AI yoyote unayoweza kutumia baadaye.\n\nKwa nini? Huduma ya ushauri kwa SMS au WhatsApp, kama FarmerAI kwenye DigiFarm (Safaricom na Opportunity International), inaweza kujibu tu kutokana na unachoandika au data wengine walizoweka. Huwezi kusema zao gani, kipande kipi, lini ulipanda, na ulichotumia, huduma inajaza pengo kwa shamba la kawaida ambalo si lako. Programu ya picha haiwezi kujua kama mimea iliyoharibika ni 3 kati ya 20 au 18 kati ya 20 usipokuwa umehesabu. Ujumbe wa bei hauwezi kujua kama kuuza leo kunaleta hasara usipojua gharama yako kwa kila gunia.\n\nKwa hiyo stadi ya kwanza ya AI shambani ni ya kuchosha: safu zile zile, kila mara, kwa vipimo unavyoweza kujumlisha. Zana baadaye ikikuuliza mavuno, unajibu kwa kg au magunia ya kg 90, si yalikuwa sawa. Ikiuliza lini ulipanda, una tarehe, si karibu na mvua.\n\nRekodi pia zinakuwezesha kukagua zana. Programu ikisema wadi yako kwa kawaida huvuna magunia 20 kwa ekari na misimu yako mitatu inaonyesha magunia 12, 14 na 11 ya kg 90, hautupi shamba lako. Unachukulia programu kama wastani wa kaunti, na daftari kama shamba.\n\nUsichoweka kwenye programu ovyo: namba za kitambulisho, PIN za M-Pesa, au picha ya kila ukurasa wa daftari. Unatumia daftari wewe mwenyewe, na unashiriki tu sehemu ambazo huduma inayojulikana inahitaji."
      ),
      reveal([
        {
          termEn: "Input to a tool",
          termSw: "Kile unachoweka kwenye zana",
          defEn: "The facts you type or send: crop, date, location, amounts. The output cannot be better than this.",
          defSw: "Taarifa unazoandika au kutuma: zao, tarehe, mahali, kiasi. Matokeo hayawezi kuwa bora kuliko hivi.",
        },
        {
          termEn: "Typical farm",
          termSw: "Shamba la kawaida",
          defEn: "The average example a tool uses when you have not given it your own numbers.",
          defSw: "Mfano wa wastani ambao zana hutumia usipokuwa umeipa namba zako mwenyewe.",
        },
        {
          termEn: "Check against your notebook",
          termSw: "Linganisha na daftari lako",
          defEn: "Compare an app's claim with what you actually recorded on your plots.",
          defSw: "Linganisha dai la programu na ulichorekodi kweli kwenye vipande vyako.",
        },
        {
          termEn: "DigiFarm",
          termSw: "DigiFarm",
          defEn: "A Safaricom service some farmers already use on the phone. FarmerAI was announced as advice through DigiFarm, SMS and WhatsApp.",
          defSw: "Huduma ya Safaricom ambayo wakulima wengine tayari wanaitumia simuni. FarmerAI ilitangazwa kama ushauri kupitia DigiFarm, SMS na WhatsApp.",
        },
      ]),
      note(
        "Worked example: two farmers ask the same service",
        "Mfano: wakulima wawili wanauliza huduma ileile",
        "Imagine a potato advisory on SMS, in the spirit of the FarmerAI potato-cycle pilot (Safaricom and Opportunity International, announced in February 2025 for hundreds of smallholders). Two farmers in Nyandarua write in. The costs are made up.\n\nFarmer A types only that potatoes are not doing well. The service can only answer with general steps for a typical potato plot: check rain, look for blight, ask extension. It cannot know her planting date, seed cost or whether last season paid.\n\nFarmer B opens her notebook first. She types: Nyandarua, 0.5 acre potatoes, planted 3 April 2026, seed KES 8,000, two weeding rounds KES 3,000. Yellow patches on about 6 of 40 plants since yesterday. I have photos. What should I check, and who should confirm? The service can now talk about a half-acre, a young crop, and a small share of plants. It still must not name a spray dose. Farmer B takes the reply to the afisa wa ugani with her photos and her count.\n\nAt the end of the season Farmer B can also see whether advice was worth the time: she knows what she spent and what she harvested. Farmer A cannot. The difference was not a smarter phone. It was a notebook the tool could be fed from, and a person who still decided.",
        "Fikiria ushauri wa viazi kwa SMS, kwa mfano wa majaribio ya mzunguko wa viazi ya FarmerAI (Safaricom na Opportunity International, yaliyotangazwa Februari 2025 kwa mamia ya wakulima wadogo). Wakulima wawili huko Nyandarua wanaandika. Gharama ni za kubuni.\n\nMkulima A anaandika tu kwamba viazi haviendi vizuri. Huduma inaweza kujibu tu kwa hatua za jumla za kipande cha kawaida cha viazi: angalia mvua, tafuta blight, uliza ugani. Haiwezi kujua tarehe yake ya kupanda, gharama ya mbegu wala kama msimu uliopita ulilipa.\n\nMkulima B anafungua daftari kwanza. Anaandika: Nyandarua, ekari 0.5 viazi, nilipanda 3 Aprili 2026, mbegu KES 8,000, palizi mbili KES 3,000. Mabaka ya manjano kwenye takriban mimea 6 kati ya 40 tangu jana. Nina picha. Niangalie nini, na nani athibitishe? Sasa huduma inaweza kuongea kuhusu nusu ekari, zao bichi, na sehemu ndogo ya mimea. Bado hapaswi kutaja kipimo cha kunyunyiza. Mkulima B anachukua jibu kwa afisa wa ugani pamoja na picha na hesabu yake.\n\nMwisho wa msimu Mkulima B anaweza pia kuona kama ushauri ulistahili muda: anajua alichotumia na alichovuna. Mkulima A hawezi. Tofauti haikuwa simu yenye akili zaidi. Ilikuwa daftari ambalo zana inaweza kulishwa kutoka kwayo, na mtu ambaye bado aliamua."
      ),
      scenario({
        titleEn: "Practice: the app wants last season's yield",
        titleSw: "Mazoezi: programu inataka mavuno ya msimu uliopita",
        situationEn: "A new farm app asks Mercy to type last season's maize harvest so it can personalise advice. She remembers about 18 bags but her notebook only says sold some maize in August. She does not know if those were 50 kg or 90 kg bags.",
        situationSw: "Programu mpya ya shamba inamwomba Mercy aandike mavuno ya mahindi ya msimu uliopita ili ibinafsishe ushauri. Anakumbuka karibu magunia 18 lakini daftari lake linasema tu niliuza mahindi kadhaa Agosti. Hajui kama yalikuwa magunia ya kg 50 au kg 90.",
        questionEn: "What should Mercy type?",
        questionSw: "Mercy aandike nini?",
        optionsEn: [
          "18 bags, so the app has a number and can start",
          "Unknown — I did not record bag size. I will start proper records this season rather than invent a yield",
          "30 bags, so the app treats her as a high-yield farmer",
          "Paste a photo of her national ID, because the app asked for verification on the same screen",
        ],
        optionsSw: [
          "Magunia 18, ili programu iwe na namba na ianze",
          "Haijulikani — sikurekodi ukubwa wa gunia. Nitaanza rekodi sahihi msimu huu badala ya kubuni mavuno",
          "Magunia 30, ili programu imchukulie kama mkulima wa mavuno mengi",
          "Kuweka picha ya kitambulisho chake cha taifa, kwa sababu programu iliomba uthibitisho kwenye skrini ileile",
        ],
        correctIndex: 1,
        hintsEn: [
          "A made-up 18 becomes data. The app will treat it as fact and compare her with neighbours who measured. Wrong inputs make wrong advice.",
          "Correct. Honest unknown is better than a false number. This season's notebook is how she becomes someone a tool can actually help.",
          "Inflating yield teaches the app a farm that does not exist, and it may push spending she cannot afford.",
          "An ID photo is not a yield. Do not hand identification to an app that asked for harvest figures.",
        ],
        hintsSw: [
          "18 ya kubuni inakuwa data. Programu itachukulia kama ukweli na kumlilinganisha na majirani waliojipima. Ingizo potovu huleta ushauri potovu.",
          "Sahihi. Haijulikani ya uaminifu ni bora kuliko namba ya uongo. Daftari la msimu huu ndilo litakalomfanya mtu ambaye zana inaweza kumsaidia kweli.",
          "Kukuza mavuno kunafundisha programu shamba lisilokuwepo, na linaweza kumsukuma kutumia pesa asizoweza.",
          "Picha ya kitambulisho si mavuno. Usitoe utambulisho kwa programu iliyoomba namba za mavuno.",
        ],
        explainEn: "AI on the farm starts with records you trust. If you do not know, say you do not know. Invented yields poison every later guess.",
        explainSw: "AI shambani inaanza na rekodi unazoamini. Kama hujui, sema hujui. Mavuno ya kubuni yanaharibu kila makisio baadaye.",
      }),
      quiz(
        "A WhatsApp advisory asks for your planting date. Your notebook is blank. What is the honest input?",
        "Ushauri wa WhatsApp unataka tarehe yako ya kupanda. Daftari lako ni tupu. Ingizo la uaminifu ni lipi?",
        [
          "Pick a date in March, because that is when people here usually plant",
          "Write not recorded and start dating activities from today",
          "Leave the chat and buy whatever the last voice note recommended",
          "Type your ID number instead, so the service can look you up",
        ],
        [
          "Chagua tarehe ya Machi, kwa sababu ndipo watu hapa hupanda kwa kawaida",
          "Andika haijarekodiwa na uanze kuweka tarehe kwenye kazi kuanzia leo",
          "Acha gumzo na ununue kile sauti ya mwisho ilipendekeza",
          "Andika namba ya kitambulisho badala yake, ili huduma ikupate",
        ],
        1,
        "A usual month for the village is not your planting date. The service should work with not recorded. Your ID is not a planting date.",
        "Mwezi wa kawaida wa kijiji si tarehe yako ya kupanda. Huduma inapaswa kufanya kazi na haijarekodiwa. Kitambulisho si tarehe ya kupanda."
      ),
      note(
        "Try it: one page a tool could actually use",
        "Jaribu: ukurasa mmoja zana inayoweza kutumia kweli",
        "Open last week's notebook, or start a new page.\n\nWrite six lines that you could copy into a known advisory service without guessing:\n\n- County and crop\n- Plot size, with the unit (acre, ha, or about 20 m by 30 m)\n- Last planting date, or not recorded\n- Last activity, with amount and cost, or cost unknown\n- What you see today, with a count if you walked the plot\n- Who you will confirm with (name the office or shop, not a chatbot)\n\nCircle any line that is still a guess. Those lines are not ready for a tool. Fill them from today onward.",
        "Fungua daftari la wiki iliyopita, au anza ukurasa mpya.\n\nAndika mistari sita unayoweza kunakili kwenye huduma ya ushauri inayojulikana bila kukisia:\n\n- Kaunti na zao\n- Ukubwa wa kipande, pamoja na kipimo (ekari, ha, au takriban m 20 kwa m 30)\n- Tarehe ya mwisho ya kupanda, au haijarekodiwa\n- Kazi ya mwisho, pamoja na kiasi na gharama, au gharama haijulikani\n- Unachoona leo, pamoja na hesabu kama ulitembea kipande\n- Nani utakayethibitisha naye (taja ofisi au duka, si chatbot)\n\nZungushia mstari wowote ambao bado ni makisio. Mistari hiyo bado haijawa tayari kwa zana. Ijaze kuanzia leo kuendelea."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- Later AI uses the facts you can type. Empty or invented records make a typical farm, not yours.\n- Share only the fields a known service needs. Keep ID and PINs out.\n- Your notebook is how you check any app.\n- Next: weather messages are probabilities too — useful, never a promise.",
        "- AI ya baadaye hutumia taarifa unazoweza kuandika. Rekodi tupu au za kubuni hufanya shamba la kawaida, si lako.\n- Shiriki tu sehemu ambazo huduma inayojulikana inahitaji. Acha kitambulisho na PIN nje.\n- Daftari lako ndilo unalotumia kukagua programu yoyote.\n- Ifuatayo: jumbe za hali ya hewa nazo ni uwezekano — zenye manufaa, si ahadi kamwe."
      ),
    ],
  },
  {
    id: "agr-b-u7",
    titleEn: "Weather as probability, not a promise",
    titleSw: "Hali ya hewa ni uwezekano, si ahadi",
    cards: [
      note(
        "A high number is still not a contract with the sky",
        "Namba kubwa bado si mkataba na anga",
        "Unit 3 showed what 60% chance of rain means: about 6 days in 10 like today were wet. This unit is about how you act when the number is high, when two sources disagree, and when the season itself is shaky.\n\nA probability is not a promise. 80% rain tomorrow still leaves about 2 days in 10 dry. Planting all your seed, hiring oxen you cannot rehire, or skipping a water pan because the rains have come treats an 80 as a 100.\n\nKenya's climate also varies from year to year. The long rains and short rains do not arrive like a bus timetable. KMD issues seasonal forecasts: rain may be below, near or above normal. The National Drought Management Authority (NDMA) publishes early-warning bulletins for counties that often face drought. Those products are still forecasts. They tell you to plan, not that the season has signed a contract.\n\nPhone services, including FarmerAI-style SMS on DigiFarm, may send weather hints. Treat them like any other forecast: write the percentage, watch what actually happens at your place, and keep KMD and NDMA in the mix. When the app and KMD disagree, that disagreement is information. It means be careful, not pick the one that lets you plant today.\n\nPastoralists and rain-fed maize farmers live this every season. The wise move is often a smaller first planting, a second date in mind, and a conversation with the afisa wa ugani about varieties that finish sooner if the rains may be short.",
        "Somo la 3 lilionyesha maana ya uwezekano wa mvua 60%: takriban siku 6 kati ya 10 kama ya leo zilikuwa na mvua. Somo hili linahusu jinsi unavyochukua hatua namba ikiwa kubwa, vyanzo viwili vikitofautiana, na msimu wenyewe ukiwa tete.\n\nUwezekano si ahadi. Mvua 80% kesho bado inaacha takriban siku 2 kati ya 10 kavu. Kupanda mbegu zote, kukodisha ng'ombe usioweza kukodisha tena, au kuacha bwawa la maji kwa sababu mvua zimekuja kunachukulia 80 kama 100.\n\nHali ya hewa ya Kenya pia inabadilika mwaka hadi mwaka. Mvua ndefu na mvua fupi hazifiki kama ratiba ya basi. KMD hutoa utabiri wa msimu: mvua inaweza kuwa chini, karibu au juu ya kawaida. Mamlaka ya Taifa ya Kudhibiti Ukame (NDMA) huchapisha taarifa za onyo la mapema kwa kaunti zinazokumbwa na ukame mara nyingi. Bidhaa hizo bado ni utabiri. Zinakuambia upange, si kwamba msimu umesaini mkataba.\n\nHuduma za simu, zikiwemo vidokezo vya hali ya hewa vya aina ya FarmerAI kwenye DigiFarm, zinaweza kutuma vidokezo. Vichukulie kama utabiri mwingine: andika asilimia, angalia kinachotokea kweli mahali pako, na uweke KMD na NDMA kwenye mchanganyiko. Programu na KMD zikitofautiana, kutofautiana huko ni taarifa. Kunamaanisha kuwa mwangalifu, si chagua inayokuruhusu kupanda leo.\n\nWafugaji na wakulima wa mahindi ya mvua wanaishi hivi kila msimu. Hatua ya busara mara nyingi ni upandaji mdogo wa kwanza, tarehe ya pili akilini, na mazungumzo na afisa wa ugani kuhusu aina zinazokomaa mapema mvua zikiwa fupi."
      ),
      reveal([
        {
          termEn: "Climate variability",
          termSw: "Kubadilika kwa tabianchi",
          defEn: "Year-to-year changes in when rain starts, how much falls, and how long dry spells last.",
          defSw: "Mabadiliko mwaka hadi mwaka ya lini mvua inaanza, kiasi gani hunyesha, na ukame mdogo unadumu muda gani.",
        },
        {
          termEn: "NDMA bulletin",
          termSw: "Taarifa ya NDMA",
          defEn: "A regular drought early-warning note from the National Drought Management Authority for counties at risk.",
          defSw: "Ujumbe wa mara kwa mara wa onyo la mapema la ukame kutoka Mamlaka ya Taifa ya Kudhibiti Ukame kwa kaunti zilizo hatarini.",
        },
        {
          termEn: "Staged planting",
          termSw: "Kupanda kwa hatua",
          defEn: "Planting part of the seed after the first steady rain and holding some for a later date, so one false start does not take everything.",
          defSw: "Kupanda sehemu ya mbegu baada ya mvua ya kwanza ya mfululizo na kubakiza nyingine kwa tarehe ya baadaye, ili mwanzo wa uongo usichukue kila kitu.",
        },
        {
          termEn: "Disagreement between sources",
          termSw: "Kutofautiana kwa vyanzo",
          defEn: "When KMD, an app and a neighbour's sky do not match. Treat that as a reason to go slow, not to pick a favourite.",
          defSw: "KMD, programu na anga la jirani visipolingana. Lichukulie hilo kama sababu ya kwenda polepole, si kuchagua unayopenda.",
        },
      ]),
      note(
        "Worked example: Halima holds half the seed",
        "Mfano: Halima anabakiza nusu ya mbegu",
        "Imagine Halima in Kitui, planning 2 acres of rain-fed maize. Seed for both acres would cost KES 7,000 in this made-up example. An SMS says 75% chance of rain for the next three days. A neighbour planted yesterday after one heavy shower. The KMD seasonal outlook for her region says the rains may start late. The latest NDMA note for the county still warns of a dry spell.\n\nIf she treats 75% as a promise and plants both acres, a false start could cost her most of that KES 7,000 plus labour, and she may not have seed to replant.\n\nWhat she does: she plants 1 acre after the soil has stayed moist for several days, not after one SMS. She holds seed for the second acre. She asks the afisa wa ugani which variety finishes sooner if the season stays short. She keeps a 10-day diary, as in Unit 3, so she can see whether the SMS percentages match rain at her homestead.\n\nThe SMS was not useless. It told her to watch the sky this week. It did not buy the seed or choose the acre. Probability changed her plan. It did not replace it.",
        "Fikiria Halima huko Kitui, akipanga ekari 2 za mahindi ya mvua. Mbegu za ekari zote zingegharimu KES 7,000 katika mfano huu wa kubuni. SMS inasema uwezekano wa mvua 75% kwa siku tatu zijazo. Jirani alipanda jana baada ya mvua moja kubwa. Mtazamo wa msimu wa KMD kwa eneo lake unasema mvua inaweza kuchelewa kuanza. Taarifa ya hivi karibuni ya NDMA kwa kaunti bado inaonya kuhusu kipindi kavu.\n\nAkichukulia 75% kama ahadi na kupanda ekari zote, mwanzo wa uongo unaweza kumgharimu sehemu kubwa ya KES 7,000 pamoja na vibarua, na huenda asipate mbegu za kupanda upya.\n\nAnachofanya: anapanda ekari 1 baada ya udongo kubaki na unyevu kwa siku kadhaa, si baada ya SMS moja. Anabakiza mbegu za ekari ya pili. Anamuuliza afisa wa ugani ni aina ipi inayokomaa mapema msimu ukibaki mfupi. Anaweka shajara ya siku 10, kama Somo la 3, ili aone kama asilimia za SMS zinafanana na mvua nyumbani kwake.\n\nSMS haikuwa bure. Ilimwambia aangalie anga wiki hii. Haikununua mbegu wala kuchagua ekari. Uwezekano ulibadilisha mpango wake. Haukuchukua nafasi yake."
      ),
      scenario({
        titleEn: "Practice: the SMS says the rains have started",
        titleSw: "Mazoezi: SMS inasema mvua zimeanza",
        situationEn: "A DigiFarm-style weather SMS to tea farmers in Kericho says High chance of rain this week — good window to apply fertiliser. Musa has not checked the soil, the KMD weekly forecast, or whether last week's 70% SMS days were actually wet on his shamba.",
        situationSw: "SMS ya hali ya hewa ya aina ya DigiFarm kwa wakulima wa chai huko Kericho inasema Uwezekano mkubwa wa mvua wiki hii — kipindi kizuri cha kuweka mbolea. Musa hajaangalia udongo, utabiri wa kila wiki wa KMD, wala kama siku za SMS ya 70% wiki iliyopita zilikuwa na mvua kweli shambani kwake.",
        questionEn: "How should Musa treat the message?",
        questionSw: "Musa aitumieje jumbe?",
        optionsEn: [
          "Apply fertiliser tomorrow on all tea rows, because the SMS named a good window",
          "Treat it as a prompt to check soil moisture, KMD, and his own rain notes, then decide with what he sees",
          "Ignore every weather SMS from now on, because messages are marketing",
          "Forward it to the village group as a guarantee that the rains have begun",
        ],
        optionsSw: [
          "Kuweka mbolea kesho kwenye mistari yote ya chai, kwa sababu SMS ilitaja kipindi kizuri",
          "Kuichukulia kama kichocheo cha kukagua unyevu wa udongo, KMD, na kumbukumbu zake za mvua, kisha kuamua kwa anachoona",
          "Kupuuza kila SMS ya hali ya hewa kuanzia sasa, kwa sababu jumbe ni utangazaji",
          "Kuitumia kwa kikundi cha kijiji kama dhamana kwamba mvua zimeanza",
        ],
        correctIndex: 1,
        hintsEn: [
          "Fertiliser on dry tea is money on dust. A high chance is not wet soil. The SMS did not walk his field.",
          "Right. The message is a reminder to look, not a work order. His soil, KMD and his diary decide.",
          "Some messages are useful probabilities. Throwing them all away throws away free information. Checking is the middle path.",
          "Forwarding a probability as a guarantee can push neighbours to spend. If you share it, share it as a chance, and say you have not confirmed.",
        ],
        hintsSw: [
          "Mbolea kwenye chai kavu ni pesa kwenye vumbi. Uwezekano mkubwa si udongo wenye unyevu. SMS haikutembea shambani kwake.",
          "Sawa. Ujumbe ni kikumbusho cha kuangalia, si agizo la kazi. Udongo wake, KMD na shajara yake ndio vinaamua.",
          "Jumbe zingine ni uwezekano wenye manufaa. Kuzitupa zote ni kutupa taarifa za bure. Kukagua ndiyo njia ya kati.",
          "Kutuma uwezekano kama dhamana kunaweza kuwasukuma majirani kutumia pesa. Ukishiriki, shiriki kama nafasi, na sema bado hujathibitisha.",
        ],
        explainEn: "Weather SMS can raise your attention. Wet soil, KMD and your notes decide the work. A chance is not a promise.",
        explainSw: "SMS ya hali ya hewa inaweza kuongeza umakini wako. Udongo wenye unyevu, KMD na kumbukumbu zako ndizo zinaamua kazi. Nafasi si ahadi.",
      }),
      quiz(
        "KMD says the season may be below normal. An app says 90% rain tomorrow after one shower. What is true?",
        "KMD inasema msimu unaweza kuwa chini ya kawaida. Programu inasema mvua 90% kesho baada ya mvua moja. Ni nini kweli?",
        [
          "Tomorrow is 90% likely to be wet, and the whole season is still allowed to be weak",
          "90% cancels the seasonal forecast, so you should plant everything",
          "Below-normal means there will be no rain at all, so both forecasts are broken",
          "Apps are always more local than KMD, so KMD can be ignored",
        ],
        [
          "Kesho ina uwezekano wa 90% kuwa na mvua, na msimu mzima bado unaweza kuwa dhaifu",
          "90% inafuta utabiri wa msimu, kwa hiyo unapaswa kupanda kila kitu",
          "Chini ya kawaida inamaanisha hakutakuwa na mvua kabisa, kwa hiyo utabiri wote umevunjika",
          "Programu huwa za eneo zaidi kuliko KMD, kwa hiyo KMD inaweza kupuuzwa",
        ],
        0,
        "Daily and seasonal forecasts answer different questions. A wet tomorrow can sit inside a weak season. Neither is a promise, and neither automatically beats the other.",
        "Utabiri wa kila siku na wa msimu hujibu maswali tofauti. Kesho yenye mvua inaweza kukaa ndani ya msimu dhaifu. Hakuna ulio ahadi, na hakuna unaoshinda mwingine kiotomatiki."
      ),
      note(
        "Try it: write the cost of treating 80% as 100%",
        "Jaribu: andika gharama ya kuchukulia 80% kama 100%",
        "Pick one decision that depends on rain this month: planting, applying fertiliser, moving animals, or harvesting hay.\n\nOn paper write:\n\n- What the latest forecast or SMS actually said, including any percentage.\n- What you would lose in KES, seed or labour if you act fully and the rain does not come.\n- One smaller action that still uses the forecast (for example plant half, wait two more wet days, or ask the afisa wa ugani).\n\nIf you have no farm, do this for the school garden's watering plan.",
        "Chagua uamuzi mmoja unaotegemea mvua mwezi huu: kupanda, kuweka mbolea, kuhamisha wanyama, au kuvuna nyasi.\n\nKwenye karatasi andika:\n\n- Utabiri au SMS ya hivi karibuni ilisema nini hasa, pamoja na asilimia yoyote.\n- Ungepoteza nini kwa KES, mbegu au vibarua ukichukua hatua kamili na mvua isije.\n- Hatua moja ndogo ambayo bado inatumia utabiri (kwa mfano panda nusu, subiri siku mbili zaidi zenye unyevu, au muulize afisa wa ugani).\n\nKama huna shamba, fanya hivi kwa mpango wa kumwagilia bustani ya shule."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- A percentage is a chance, not a contract with the sky.\n- Use KMD, NDMA and your own rain notes together with any SMS.\n- When sources disagree, slow down rather than pick a favourite.\n- Next: market prices and rumours — a bot must not set your price blindly.",
        "- Asilimia ni nafasi, si mkataba na anga.\n- Tumia KMD, NDMA na kumbukumbu zako za mvua pamoja na SMS yoyote.\n- Vyanzo vikitofautiana, punguza kasi badala ya kuchagua unayopenda.\n- Ifuatayo: bei za soko na uvumi — roboti hapaswi kuweka bei yako kwa upofu."
      ),
    ],
  },
  {
    id: "agr-b-u8",
    titleEn: "Market prices and rumours",
    titleSw: "Bei za soko na uvumi",
    cards: [
      note(
        "A price on a screen is one offer, not the market",
        "Bei kwenye skrini ni ofa moja, si soko",
        "Farmers hear prices from many places: the neighbour, the broker at the gate, a WhatsApp group, a radio bulletin, and now apps and chatbots. FarmerAI-style services may also mention prices. None of these is the price. A price is what a real buyer is willing to pay you, today, for your grade, at your location, in your quantity.\n\nWhy tools get this wrong. A model trained on city wholesale markets such as Wakulima in Nairobi may miss the cost of a 40 km boda trip, the fact that your tomatoes will not last three days, or a county cess. A chatbot can average last month's numbers and speak as if they were this morning. A rumour in a group can be one person's wish.\n\nYour notebook from Unit 2 is the brake. If maize cost you about KES 1,367 per 90 kg bag to grow, a message that the market is KES 1,200 is a warning that selling now loses money, not an order to sell. You can wait, look for another buyer, or sell part. You should not let a bot set a number you have not compared with a real offer and with your own cost.\n\nRumours spread faster than invoices. Before you hold or dump a harvest because AI said so, ask: who measured this, in which market, on which day, for which grade, and can I get that offer in writing or at the stall?",
        "Wakulima husikia bei kutoka sehemu nyingi: jirani, dalali langoni, kikundi cha WhatsApp, taarifa ya redio, na sasa programu na chatbot. Huduma za aina ya FarmerAI nazo zinaweza kutaja bei. Hakuna kati ya hizi ni bei ile. Bei ni kile mnunuzi halisi yuko tayari kukulipa, leo, kwa daraja lako, mahali pako, kwa kiasi chako.\n\nKwa nini zana zinakosea. Modeli iliyofunzwa kwa masoko ya jumla mjini kama Wakulima Nairobi inaweza kukosa gharama ya safari ya boda ya km 40, ukweli kwamba nyanya zako hazitadumu siku tatu, au cess ya kaunti. Chatbot inaweza wastanisha namba za mwezi uliopita na kuongea kana kwamba ni za leo asubuhi. Uvumi kwenye kikundi unaweza kuwa matakwa ya mtu mmoja.\n\nDaftari lako la Somo la 2 ndilo breki. Mahindi yakikugharimu takriban KES 1,367 kwa gunia la kg 90 kuzalisha, ujumbe kwamba soko ni KES 1,200 ni onyo kwamba kuuza sasa kunaleta hasara, si agizo la kuuza. Unaweza kusubiri, kutafuta mnunuzi mwingine, au kuuza sehemu. Hapaswi kuacha roboti iweke namba usiyolinganisha na ofa halisi na gharama yako.\n\nUvumi unasambaa haraka kuliko ankara. Kabla ya kushikilia au kumpa mavuno kwa sababu AI imesema, uliza: nani alipima hii, soko gani, siku gani, daraja gani, na ninaweza kupata ofa hiyo kwa maandishi au kwenye stesheni?"
      ),
      reveal([
        {
          termEn: "Offer",
          termSw: "Ofa",
          defEn: "A real buyer's price for your lot, today. Until someone will pay it, a number on a screen is not your price.",
          defSw: "Bei ya mnunuzi halisi kwa mzigo wako, leo. Mpaka mtu atakapoilipa, namba kwenye skrini si bei yako.",
        },
        {
          termEn: "Wholesale vs farm-gate",
          termSw: "Bei ya jumla dhidi ya bei langoni",
          defEn: "City wholesale is not what you receive at the gate after transport, fees and grade checks.",
          defSw: "Bei ya jumla mjini si kile unachopokea langoni baada ya usafiri, ada na ukaguzi wa daraja.",
        },
        {
          termEn: "Rumour",
          termSw: "Uvumi",
          defEn: "A price story with no named market, date or buyer. Treat it as talk until you can check it.",
          defSw: "Hadithi ya bei isiyo na soko, tarehe au mnunuzi aliye tajiwa. Ichukulie kama mazungumzo hadi uweze kuikagua.",
        },
        {
          termEn: "Cost of production",
          termSw: "Gharama ya uzalishaji",
          defEn: "What it cost you to grow one bag or crate. Selling below it loses money even if an app calls the price good.",
          defSw: "Kile kilikugharimu kuzalisha gunia au kreti moja. Kuuzia chini yake kunaleta hasara hata programu ikisema bei ni nzuri.",
        },
      ]),
      note(
        "Worked example: tomatoes, three numbers",
        "Mfano: nyanya, namba tatu",
        "Imagine Achieng in Kiambu with 40 crates of ripe tomatoes. Storage is poor. The numbers are made up.\n\n- A WhatsApp rumour: Nairobi will pay KES 3,500 a crate next week.\n- A chatbot asked for the tomato price: Around KES 3,200 a crate.\n- A buyer at the local market this morning: KES 2,400 a crate, cash, for all 40, with transport on her.\n\nHer notebook: production and transport to the local market come to about KES 1,900 a crate. So KES 2,400 still leaves about KES 500 a crate. Holding for a week risks rotting. A boda plus stall fee to Nairobi would cost about KES 400 a crate in this example, and she has no confirmed stall buyer.\n\nShe sells 25 crates locally today at KES 2,400 and takes 15 to a neighbour who has a regular hotel buyer at KES 2,600. She does not wait for KES 3,500. The rumour had no named stall. The chatbot had no date and no grade. The cash offer did.\n\nWhere it goes wrong: if she had treated the chatbot as her price, she might have refused KES 2,400, watched fruit spoil, and still never seen KES 3,200.",
        "Fikiria Achieng huko Kiambu na kreti 40 za nyanya zilizoiva. Uhifadhi ni dhaifu. Namba ni za kubuni.\n\n- Uvumi wa WhatsApp: Nairobi italipa KES 3,500 kwa kreti wiki ijayo.\n- Chatbot iliyoulizwa bei ya nyanya: Takriban KES 3,200 kwa kreti.\n- Mnunuzi kwenye soko la eneo leo asubuhi: KES 2,400 kwa kreti, pesa taslimu, kwa zote 40, usafiri ni wake.\n\nDaftari lake: uzalishaji na usafiri hadi soko la eneo ni takriban KES 1,900 kwa kreti. Kwa hiyo KES 2,400 bado inaacha takriban KES 500 kwa kreti. Kushikilia wiki moja kuna hatari ya kuoza. Boda pamoja na ada ya stesheni Nairobi ingegharimu takriban KES 400 kwa kreti katika mfano huu, na hana mnunuzi wa stesheni aliyehakikishwa.\n\nAnauza kreti 25 eneo hilo leo kwa KES 2,400 na kuchukua 15 kwa jirani aliye na mnunuzi wa kawaida wa hoteli kwa KES 2,600. Hangoji KES 3,500. Uvumi haukuwa na stesheni iliyotajwa. Chatbot haikuwa na tarehe wala daraja. Ofa ya pesa taslimu ilikuwa nazo.\n\nMahali inapoharibika: kama angechukulia chatbot kama bei yake, angeweza kukataa KES 2,400, akaangalia matunda yakiharibika, na bado asione KES 3,200."
      ),
      scenario({
        titleEn: "Practice: the bot sets a floor",
        titleSw: "Mazoezi: roboti inaweka kiwango cha chini",
        situationEn: "Omondi has 10 bags of 90 kg maize. A chatbot says do not accept less than KES 4,000 a bag. A co-op lorry is at the gate offering KES 3,300, cash today. His notebook shows cost of production about KES 2,800 a bag. Rats are already in the store.",
        situationSw: "Omondi ana magunia 10 ya kg 90 ya mahindi. Chatbot inasema usikubali chini ya KES 4,000 kwa gunia. Lori la co-op liko langoni likitoa KES 3,300, pesa taslimu leo. Daftari lake linaonyesha gharama ya uzalishaji takriban KES 2,800 kwa gunia. Panya tayari wako ghalani.",
        questionEn: "What is the soundest use of the chatbot number?",
        questionSw: "Matumizi yenye busara zaidi ya namba ya chatbot ni yapi?",
        optionsEn: [
          "Refuse the lorry, because the bot set KES 4,000 as the floor",
          "Treat KES 4,000 as a rumour-like figure: compare it with the real offer, his costs, and storage risk, then decide",
          "Sell at KES 2,000 to be safe, since all screen prices are lies",
          "Ask the chatbot to pay the difference between KES 3,300 and KES 4,000",
        ],
        optionsSw: [
          "Kukataa lori, kwa sababu roboti iliweka KES 4,000 kama kiwango cha chini",
          "Kuchukulia KES 4,000 kama namba ya aina ya uvumi: iilinganishe na ofa halisi, gharama zake, na hatari ya uhifadhi, kisha uamue",
          "Kuuza kwa KES 2,000 kuwa salama, kwa sababu bei zote za skrini ni uongo",
          "Kuiomba chatbot ilipe tofauti kati ya KES 3,300 na KES 4,000",
        ],
        correctIndex: 1,
        hintsEn: [
          "KES 4,000 is not an offer sitting at his gate. Holding against rats for a number nobody has bid is how grain is lost.",
          "Correct. The bot can prompt him to ask around. The lorry, the notebook and the rats are the facts of today.",
          "Throwing away every screen number also throws away useful warnings. His own cost of KES 2,800 is still a real floor for not losing money.",
          "A chatbot cannot pay you. Only a buyer can.",
        ],
        hintsSw: [
          "KES 4,000 si ofa iliyoko langoni kwake. Kushikilia dhidi ya panya kwa namba ambayo hakuna aliyezidisha ni jinsi nafaka inavyopotea.",
          "Sahihi. Roboti inaweza kumsukuma kuuliza. Lori, daftari na panya ndio ukweli wa leo.",
          "Kutupa kila namba ya skrini pia hutupa maonyo yenye manufaa. Gharama yake ya KES 2,800 bado ni kiwango halisi cha kutokosa pesa.",
          "Chatbot haiwezi kukulipa. Mnunuzi tu ndiye anayeweza.",
        ],
        explainEn: "Let a bot suggest a number to check. Let a buyer, your costs and your storage risk set the sale. Never hand the floor to a chat.",
        explainSw: "Acha roboti ipendekeze namba ya kukagua. Acha mnunuzi, gharama zako na hatari ya uhifadhi viweke mauzo. Usipe kiwango cha chini kwa gumzo.",
      }),
      quiz(
        "Which question best tests a price you saw on a phone?",
        "Ni swali lipi linalopima vizuri zaidi bei uliyoona simuni?",
        [
          "Does the message use confident language?",
          "Who will buy this grade, today, at this place, and does that beat my cost and my storage risk?",
          "Did the same number appear in three WhatsApp groups?",
          "Is the number higher than last year?",
        ],
        [
          "Je, ujumbe unatumia lugha ya kujiamini?",
          "Nani atanunua daraja hili, leo, mahali hapa, na je hiyo inashinda gharama yangu na hatari ya uhifadhi?",
          "Je, namba ileile ilitokea katika vikundi vitatu vya WhatsApp?",
          "Je, namba iko juu kuliko mwaka jana?",
        ],
        1,
        "Confidence, repeats and last year do not pay you. A named buyer, today, for your grade, compared with your costs, does.",
        "Kujiamini, kurudia na mwaka jana havikulipi. Mnunuzi aliye tajiwa, leo, kwa daraja lako, ikilinganishwa na gharama zako, ndiye hulipa."
      ),
      note(
        "Try it: three prices, one sale",
        "Jaribu: bei tatu, mauzo moja",
        "For one crop or animal product your family sells (or a market you can visit):\n\n- Write a rumour or group message price, if you have one.\n- Write a phone or radio price, if you can find one, including the date and market named.\n- Write a real offer: what a buyer said this week, even if you did not sell.\n\nCircle the one that could actually put KES in a hand. Note whether it is above or below your best guess of cost. If you do not sell, do this with a mama mboga or a school feeding buyer as a class visit.",
        "Kwa zao moja au bidhaa ya mifugo ambayo familia yako inauza (au soko unaloweza kutembelea):\n\n- Andika bei ya uvumi au ujumbe wa kikundi, kama unayo.\n- Andika bei ya simu au redio, kama unaweza kuipata, pamoja na tarehe na soko lililotajwa.\n- Andika ofa halisi: mnunuzi alisema nini wiki hii, hata kama hukuuza.\n\nZungushia ile inayoweza kuweka KES mkononi kweli. Andika kama iko juu au chini ya makisio yako bora ya gharama. Kama hauzi, fanya hivi na mama mboga au mnunuzi wa mlo wa shule kama ziara ya darasa."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- A screen price is one input. A buyer, your costs and storage risk decide the sale.\n- Rumours and chatbots skip market, date and grade.\n- Do not let a bot set your floor blindly.\n- Next: livestock — AI can flag a problem; the vet decides.",
        "- Bei ya skrini ni ingizo moja. Mnunuzi, gharama zako na hatari ya uhifadhi vinaamua mauzo.\n- Uvumi na chatbot huruka soko, tarehe na daraja.\n- Usiache roboti iweke kiwango chako cha chini kwa upofu.\n- Ifuatayo: mifugo — AI inaweza kuashiria tatizo; daktari wa mifugo ndiye anaamua."
      ),
    ],
  },
  {
    id: "agr-b-u9",
    titleEn: "Livestock: AI can flag, the vet decides",
    titleSw: "Mifugo: AI inaweza kuashiria, daktari wa mifugo anaamua",
    cards: [
      note(
        "A flag is not a diagnosis and not a medicine",
        "Ishara si utambuzi wala si dawa",
        "Dairy, poultry, goats and cattle are a big part of Kenyan farming. AI shows up here as well: an app that listens for a cough in a chicken house, a camera that notices a cow lying down too long, a chatbot that lists causes of a swollen udder, or a heat-detection sensor on a collar.\n\nWhat these tools can do well is flag: they say this animal looks different from the pattern, look now. A flag is useful because one person cannot watch 20 cows all night. What they cannot do is examine the animal, feel the udder, take a milk sample, or write a prescription. That is the work of a registered veterinary surgeon or, where the law allows, a veterinary para-professional. County livestock officers and private vets remain in charge.\n\nMastitis on a dairy cow in Nyandarua is a clear example. A sensor or an app may notice a drop in milk or a hotter udder. That is a reason to look this morning, strip the milk, and call the vet if the quarter is hard or the milk is watery. It is not a reason to buy an antibiotic because a chat named one. Animal medicines, like farm chemicals, have rules. Wrong drugs leave residues in milk, waste money, and can make bacteria harder to treat.\n\nThe same chain you used for crops applies: your eyes and records, then a tool's flag, then a professional. Do not send a video of a dying animal to a random chat and follow its dose.",
        "Maziwa, kuku, mbuzi na ng'ombe ni sehemu kubwa ya kilimo Kenya. AI inajitokeza hapa pia: programu inayosikiliza kikohozi kwenye banda la kuku, kamera inayoona ng'ombe amelala muda mrefu mno, chatbot inayoorodhesha visababishi vya titi lililovimba, au kipimo cha kutambua joto la kuzaa kwenye kola.\n\nZana hizi zinaweza kufanya vizuri kuashiria: zinasema mnyama huyu anaonekana tofauti na muundo, angalia sasa. Ishara ina manufaa kwa sababu mtu mmoja hawezi kuangalia ng'ombe 20 usiku kucha. Haziwezi kumchunguza mnyama, kugusa titi, kuchukua sampuli ya maziwa, wala kuandika dawa. Hiyo ni kazi ya daktari wa mifugo aliyeandikishwa au, sheria inaporuhusu, mhudumu wa mifugo. Maafisa wa mifugo wa kaunti na madaktari wa kibinafsi ndio wenye uamuzi.\n\nUvimbe wa titi (mastitis) kwa ng'ombe wa maziwa huko Nyandarua ni mfano wazi. Kipimo au programu inaweza kuona kushuka kwa maziwa au titi yenye joto zaidi. Hiyo ni sababu ya kuangalia asubuhi hii, kukama maziwa, na kumpigia daktari wa mifugo sehemu ikiwa ngumu au maziwa yakiwa majimaji. Si sababu ya kununua antibiotiki kwa sababu gumzo lililitaja moja. Dawa za wanyama, kama dawa za shamba, zina kanuni. Dawa potovu huacha mabaki kwenye maziwa, hupoteza pesa, na zinaweza kufanya bakteria kuwa wagumu kutibiwa.\n\nMnyororo uleule uliotumia kwa mazao unatumika: macho yako na rekodi, kisha ishara ya zana, kisha mtaalamu. Usitume video ya mnyama anayekufa kwa gumzo ovyo na kufuata kipimo chake."
      ),
      reveal([
        {
          termEn: "Flag",
          termSw: "Ishara (flag)",
          defEn: "A tool saying this animal looks unusual. It is a request to look, not a diagnosis.",
          defSw: "Zana inayosema mnyama huyu anaonekana wa kawaida tofauti. Ni ombi la kuangalia, si utambuzi.",
        },
        {
          termEn: "Veterinary surgeon",
          termSw: "Daktari wa mifugo",
          defEn: "A registered professional who examines animals, diagnoses, and decides treatment.",
          defSw: "Mtaalamu aliyeandikishwa anayechunguza wanyama, kutambua, na kuamua tiba.",
        },
        {
          termEn: "Mastitis",
          termSw: "Uvimbe wa titi (mastitis)",
          defEn: "Inflammation of the udder, often with clots or watery milk. Needs examination, not a chat dose.",
          defSw: "Uvimbe wa titi, mara nyingi na donge au maziwa majimaji. Unahitaji uchunguzi, si kipimo cha gumzo.",
        },
        {
          termEn: "Withdrawal period",
          termSw: "Kipindi cha kusubiri",
          defEn: "Time after a medicine when milk or meat must not be sold as food, as written on the product.",
          defSw: "Muda baada ya dawa ambapo maziwa au nyama hapaswi kuuzwa kama chakula, kama ilivyoandikwa kwenye bidhaa.",
        },
      ]),
      note(
        "Worked example: a heat alert and a swollen quarter",
        "Mfano: tahadhari ya joto la kuzaa na sehemu iliyovimba",
        "Imagine Jane, who milks 6 cows in Nyandarua. A collar app flags Cow 4 as in heat. The same week Cow 2's milk drops from 12 litres to 8, and one quarter feels warmer. The numbers are made up.\n\nHeat flag. Jane watches Cow 4 that afternoon. The cow is restless and stands to be mounted. The flag was useful: she might have missed it while at the plot. She still calls the insemination technician she already uses, not a chatbot, to time the service. The app did not inseminate the cow.\n\nMilk drop. Jane strips all four quarters. One is watery with a few clots. She does not search a chat for an antibiotic name. She keeps that cow's milk out of the evening can, writes the date and the 8 litres in her notebook, and phones the vet. The vet comes, confirms mastitis, and decides treatment. Jane follows the withdrawal period on the medicine so milk does not go to the co-op until it is legal.\n\nWhere it could go wrong: treating Cow 2 from a chat could put medicine in the bulk tank, lose the co-op collection, and miss a different disease that looks similar. The flag saved time. The vet owned the decision.",
        "Fikiria Jane, anayekama ng'ombe 6 huko Nyandarua. Programu ya kola inaashiria Ng'ombe 4 yuko kwenye joto la kuzaa. Wiki ileile maziwa ya Ng'ombe 2 yanashuka kutoka lita 12 hadi 8, na sehemu moja inahisi joto zaidi. Namba ni za kubuni.\n\nIshara ya joto. Jane anamwangalia Ng'ombe 4 mchana. Ng'ombe hana utulivu na anasimama kupandwa. Ishara ilisaidia: angeweza kukosa huku akiwa shambani. Bado anampigia fundi wa kumeza mbegu anayemtumia, si chatbot, kuweka muda. Programu haikumemeza ng'ombe.\n\nKushuka kwa maziwa. Jane anakama sehemu zote nne. Moja ni majimaji na donge chache. Hatafuti gumzo la jina la antibiotiki. Anaweka maziwa ya ng'ombe huyo nje ya mtungi wa jioni, anaandika tarehe na lita 8 kwenye daftari, na anampigia daktari wa mifugo. Daktari anakuja, anathibitisha mastitis, na anaamua tiba. Jane anafuata kipindi cha kusubiri kwenye dawa ili maziwa yasiende kwa co-op hadi ni halali.\n\nMahali ingeweza kuharibika: kutibu Ng'ombe 2 kutoka kwenye gumzo kungeweka dawa kwenye tangi, kupoteza ukusanyaji wa co-op, na kukosa ugonjwa mwingine unaofanana. Ishara iliokoa muda. Daktari wa mifugo ndiye alikuwa na uamuzi."
      ),
      scenario({
        titleEn: "Practice: the chicken-house cough app",
        titleSw: "Mazoezi: programu ya kikohozi bandani",
        situationEn: "A cheap microphone app in a 200-bird kienyeji house in Machakos flags unusual coughing overnight. This morning about 15 birds look sleepy. A WhatsApp group says give this powder. No vet has seen the flock.",
        situationSw: "Programu ya mikrofoni nafuu katika banda la kuku 200 wa kienyeji huko Machakos inaashiria kikohozi kisicho kawaida usiku. Asubuhi hii takriban kuku 15 wanaonekana usingizini. Kikundi cha WhatsApp kinasema wape unga huu. Hakuna daktari wa mifugo aliyeona kundi.",
        questionEn: "What should the keeper do first?",
        questionSw: "Mfugaji afanye nini kwanza?",
        optionsEn: [
          "Buy the powder named in the group, because the app already confirmed disease",
          "Separate the sleepy birds if possible, write the count and time, and call a vet or county livestock officer — treat the app as a night watch, not a prescription",
          "Ignore the flag; kienyeji birds always cough",
          "Ask a chatbot for a dose per litre of drinking water and mix it before breakfast",
        ],
        optionsSw: [
          "Kununua unga uliotajwa kwenye kikundi, kwa sababu programu tayari imethibitisha ugonjwa",
          "Kutenga kuku wenye usingizi kama inawezekana, kuandika hesabu na saa, na kumpigia daktari wa mifugo au afisa wa mifugo wa kaunti — ichukulie programu kama mlinzi wa usiku, si dawa",
          "Kupuuza ishara; kuku wa kienyeji hukohowa kila mara",
          "Kuiomba chatbot kipimo kwa kila lita ya maji ya kunywa na kuchanganya kabla ya kifungua kinywa",
        ],
        correctIndex: 1,
        hintsEn: [
          "The app flagged sound. It did not test for Newcastle, mites or a draught. A group powder is not a diagnosis.",
          "Correct. Count, isolate if you can, call a professional. The microphone earned its keep by waking you. It does not choose medicine.",
          "Some coughing is normal; a cluster of sleepy birds after a night flag is not a reason to wait.",
          "Dosing from a chat can kill birds and is not a vet's plan. Water medicine still needs a professional.",
        ],
        hintsSw: [
          "Programu iliashiria sauti. Haikupima Newcastle, chawa wala upepo. Unga wa kikundi si utambuzi.",
          "Sahihi. Hesabu, tenga kama unaweza, piga mtaalamu. Mikrofoni ilifanya kazi kwa kukuamsha. Haichagui dawa.",
          "Kikohozi kingine ni cha kawaida; kundi la kuku wenye usingizi baada ya ishara ya usiku si sababu ya kusubiri.",
          "Kipimo kutoka kwenye gumzo kinaweza kuua kuku na si mpango wa daktari. Dawa ya maji bado inahitaji mtaalamu.",
        ],
        explainEn: "Livestock AI is a night watch or a reminder. Diagnosis and medicine stay with the vet or livestock officer.",
        explainSw: "AI ya mifugo ni mlinzi wa usiku au kikumbusho. Utambuzi na dawa zinabaki kwa daktari wa mifugo au afisa wa mifugo.",
      }),
      quiz(
        "A collar app says a cow is sick. You look and she is chewing calmly. What next?",
        "Programu ya kola inasema ng'ombe ni mgonjwa. Unatazama naye anatafuna kwa utulivu. Ifuatayo nini?",
        [
          "Start the medicine the app suggested, in case the sensors know more than your eyes",
          "Record the flag, watch her through the next milking, and call the vet if signs appear — do not treat a calm cow from a screen",
          "Sell her today before the disease spreads",
          "Turn the collar off so it stops alarming",
        ],
        [
          "Anza dawa programu iliyopendekeza, labda vipimo vinajua zaidi kuliko macho yako",
          "Rekodi ishara, mmwangalie hadi maziwa yajayo, na umpigie daktari wa mifugo dalili zikionekana — usimtoe ng'ombe mtulivu kutoka skrini",
          "Muuze leo kabla ugonjwa haujaenea",
          "Zima kola ili iachane na tahadhari",
        ],
        1,
        "False flags happen. Your eyes overrule a collar. Turning it off or medicating blindly both waste the tool. Logging the false flag also teaches you how often it cries wolf.",
        "Ishara za uongo hutokea. Macho yako yanashinda kola. Kuizima au kutoa dawa kwa upofu vyote vinapoteza zana. Kurekodi ishara ya uongo pia kunakufundisha mara ngapi inalia bure."
      ),
      note(
        "Try it: one animal, two columns",
        "Jaribu: mnyama mmoja, safu mbili",
        "Pick one animal you can observe (a family cow, goat, chicken, or a neighbour's, with permission).\n\nDraw two columns: What I can see and hear, and What a tool might flag.\n\nFill three rows, for example eating, walking, milk or eggs, breathing, dung.\n\nWrite at the bottom: the name or office of the vet or livestock officer you would call, and one thing you would never ask a chatbot to decide (dose, diagnosis, or whether to slaughter).\n\nIf you have no animals, do this as a class using the school livestock project or a photo series from the teacher — still no treating from the photos.",
        "Chagua mnyama mmoja unayeweza kumwangalia (ng'ombe, mbuzi, kuku wa familia, au wa jirani, kwa ruhusa).\n\nChora safu mbili: Ninachoweza kuona na kusikia, na Zana ingeweza kuashiria nini.\n\nJaza mistari mitatu, kwa mfano kula, kutembea, maziwa au mayai, kupumua, kinyesi.\n\nAndika chini: jina au ofisi ya daktari wa mifugo au afisa wa mifugo ungepiga, na jambo moja usingeomba chatbot iamue (kipimo, utambuzi, au kuchinja).\n\nKama huna wanyama, fanya hivi darasani kwa mradi wa mifugo wa shule au mfululizo wa picha kutoka kwa mwalimu — bado hakuna tiba kutoka kwenye picha."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- Livestock AI flags what looks unusual. It does not diagnose or dose.\n- Call the vet or county livestock officer before any medicine.\n- Keep flagged milk or eggs out of the food chain until a professional says otherwise.\n- Next: privacy of farm, location and phone numbers.",
        "- AI ya mifugo inaashiria kinachoonekana visivyo kawaida. Haitambuzi wala kutoa kipimo.\n- Piga daktari wa mifugo au afisa wa mifugo wa kaunti kabla ya dawa yoyote.\n- Weka maziwa au mayai yaliyoashiriwa nje ya mnyororo wa chakula hadi mtaalamu aseme vinginevyo.\n- Ifuatayo: faragha ya shamba, mahali na namba za simu."
      ),
    ],
  },
  {
    id: "agr-b-u10",
    titleEn: "Privacy of farm, location and phone numbers",
    titleSw: "Faragha ya shamba, mahali na namba za simu",
    cards: [
      note(
        "Your farm map is personal data too",
        "Ramani ya shamba lako nayo ni data binafsi",
        "In Foundations you learned not to share ID numbers, M-Pesa PINs, passwords or children's photos with unknown tools. On a farm, three more things need the same care: the exact location of the plot, the phone numbers of family and workers, and records of what you grow and earn.\n\nWhy location matters. A pin on a map can show a thief where the store is. It can show a buyer how much land you have before you negotiate. It can let a company build a list of farmers to sell to, or to score for a loan, without you meaning to join. Kenya's Data Protection Act, 2019 says personal data should be collected for a clear purpose, kept only as long as needed, and used fairly. Location and phone numbers are personal data when they point to you.\n\nPhoto apps such as Agrika need a picture of a leaf, not your homestead GPS and not your ID. Advisory SMS such as FarmerAI on DigiFarm works through a number you already use with Safaricom; that is different from pasting your PIN into a new website. Still ask: who is behind this app, why do they need this field, and can I say no and still get the service?\n\nCo-ops sometimes collect members' yields and numbers for marketing. That can be useful if members agreed, if the list stays with the co-op, and if it is not sold on. Consent means a real choice, explained in a language you speak, not a tick box you cannot read.",
        "Katika Misingi ulijifunza usishiriki namba za kitambulisho, PIN za M-Pesa, nywila au picha za watoto na zana zisizojulikana. Shambani, mambo mengine matatu yanahitaji uangalifu uleule: mahali hasa pa kipande, namba za simu za familia na wafanyakazi, na rekodi za unacholima na unachopata.\n\nKwa nini mahali ni muhimu. Alama kwenye ramani inaweza kumwonyesha mwizi ghalani iko wapi. Inaweza kumwonyesha mnunuzi una ardhi kiasi gani kabla ya kubarghini. Inaweza kuacha kampuni iunde orodha ya wakulima ya kuwauzia, au kuwakadiria mkopo, bila wewe kumaanisha kujiunga. Sheria ya Ulinzi wa Data, 2019 inasema data binafsi ikusanywe kwa lengo wazi, ihifadhiwe muda unaohitajika tu, na itumike kwa haki. Mahali na namba za simu ni data binafsi zinapokuelekeza wewe.\n\nProgramu za picha kama Agrika zinahitaji picha ya jani, si GPS ya nyumbani wala kitambulisho. SMS ya ushauri kama FarmerAI kwenye DigiFarm inafanya kazi kupitia namba unayotumia tayari na Safaricom; hiyo ni tofauti na kuweka PIN yako kwenye tovuti mpya. Bado uliza: nani yuko nyuma ya programu hii, kwanini wanahitaji sehemu hii, na naweza kusema hapana bado nikapata huduma?\n\nCo-op wakati mwingine hukusanya mavuno na namba za wanachama kwa ajili ya masoko. Hiyo inaweza kusaidia wanachama wakikubali, orodha ikibaki kwa co-op, na isipouzwa. Ridhaa inamaanisha chaguo halisi, lililoelezwa kwa lugha unayozungumza, si kisanduku cha tiki usichoweza kusoma."
      ),
      reveal([
        {
          termEn: "Personal data",
          termSw: "Data binafsi",
          defEn: "Information that points to you: name, phone, ID, location of your home or farm, M-Pesa number.",
          defSw: "Taarifa zinazokuelekeza wewe: jina, simu, kitambulisho, mahali pa nyumba au shamba, namba ya M-Pesa.",
        },
        {
          termEn: "Consent",
          termSw: "Ridhaa",
          defEn: "A free, informed yes to a stated use of your data, which you can refuse without losing a service you already paid for.",
          defSw: "Ndiyo ya huru na yenye taarifa kwa matumizi yaliyoelezwa ya data yako, ambayo unaweza kukataa bila kupoteza huduma uliyolipia.",
        },
        {
          termEn: "Data minimisation",
          termSw: "Kupunguza data",
          defEn: "Giving only the fields the job needs: a leaf photo, not your ID; a county, not your homestead pin, if that is enough.",
          defSw: "Kutoa tu sehemu ambazo kazi inahitaji: picha ya jani, si kitambulisho; kaunti, si alama ya nyumbani, kama hiyo inatosha.",
        },
        {
          termEn: "ODPC",
          termSw: "ODPC",
          defEn: "Office of the Data Protection Commissioner: Kenya's watchdog for personal data complaints.",
          defSw: "Ofisi ya Kamishna wa Ulinzi wa Data: mlinzi wa Kenya kwa malalamiko ya data binafsi.",
        },
      ]),
      note(
        "Worked example: the buyer app that wants everything",
        "Mfano: programu ya mnunuzi inayotaka kila kitu",
        "Imagine a new app that says it will find potato buyers in Nyandarua. On sign-up it asks for: full name, national ID photo, M-Pesa PIN to verify you, GPS of the homestead, last three seasons' yields, and phone numbers of two neighbours as referees. The story is fictional.\n\nWambui wants buyers. She still reads the list. Finding a buyer needs a crop, a quantity, a grade and a way to contact her. It does not need her PIN (nobody legitimate asks for a PIN). It does not need neighbours' numbers without their yes. GPS of the store is more than GPS of the ward. ID photo is more than a name.\n\nShe uses the app only after she can skip PIN, skip neighbour numbers, and share ward-level location plus a quantity. She asks the co-op secretary whether the co-op already has a buyer list that does not take PINs. She does not photograph her notebook pages into the chat.\n\nWhere it goes wrong: a PIN in an unknown app is how money leaves the phone. Neighbour numbers shared as referees can get those people spam or worse. A precise pin can be reused for other selling you never agreed to.",
        "Fikiria programu mpya inayosema itatafuta wanunuzi wa viazi Nyandarua. Unapojisajili inaomba: jina kamili, picha ya kitambulisho, PIN ya M-Pesa ili kukuhakikisha, GPS ya nyumbani, mavuno ya misimu mitatu, na namba za simu za majirani wawili kama wadhamini. Hadithi ni ya kubuni.\n\nWambui anataka wanunuzi. Bado anasoma orodha. Kutafuta mnunuzi kunahitaji zao, kiasi, daraja na njia ya kumfikia. Hakuhitaji PIN yake (hakuna wa kuaminika anaomba PIN). Hakuhitaji namba za majirani bila ndiyo yao. GPS ya ghala ni zaidi ya GPS ya wadi. Picha ya kitambulisho ni zaidi ya jina.\n\nAnatumia programu tu baada ya kuweza kuruka PIN, kuruka namba za majirani, na kushiriki mahali pa wadi pamoja na kiasi. Anamuuliza katibu wa co-op kama co-op tayari ina orodha ya wanunuzi isiyochukua PIN. Hapigi picha kurasa za daftari kwenye gumzo.\n\nMahali inapoharibika: PIN kwenye programu isiyojulikana ndivyo pesa zinavyotoka simuni. Namba za majirani zilizotolewa kama wadhamini zinaweza kuwapata watu hao spam au mabaya zaidi. Alama sahihi inaweza kutumika tena kwa mauzo mengine hukukubali."
      ),
      scenario({
        titleEn: "Practice: share the leaf or share the homestead?",
        titleSw: "Mazoezi: shiriki jani au shiriki nyumbani?",
        situationEn: "A photo disease app, similar in idea to Agrika, asks for camera permission (needed) and also wants always-on location, access to all photos, and contacts. Kamau only needs a guess on one maize leaf.",
        situationSw: "Programu ya picha ya magonjwa, yenye wazo linalofanana na Agrika, inaomba ruhusa ya kamera (inahitajika) na pia inataka mahali kila wakati, ufikiaji wa picha zote, na anwani. Kamau anahitaji makisio kwenye jani moja la mahindi tu.",
        questionEn: "What is the privacy-respecting choice?",
        questionSw: "Chaguo linaloheshimu faragha ni lipi?",
        optionsEn: [
          "Allow everything; apps need full access to be accurate",
          "Allow the camera for this photo, deny always-on location and contacts, and refuse if the app will not work without his whole gallery and PIN",
          "Photograph his national ID next to the leaf so the result is official",
          "Post the leaf photo plus the homestead pin to a public group so many people can guess",
        ],
        optionsSw: [
          "Ruhusu kila kitu; programu zinahitaji ufikiaji kamili ili ziwe sahihi",
          "Ruhusu kamera kwa picha hii, kataa mahali kila wakati na anwani, na kataa programu isipofanya kazi bila galeria yake yote na PIN",
          "Piga picha ya kitambulisho chake kando ya jani ili tokeo liwe rasmi",
          "Chapisha picha ya jani pamoja na alama ya nyumbani kwenye kikundi cha umma ili watu wengi wakisie",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accuracy on a leaf comes from a clear photo, not from your contacts. Full access is convenience for the company, not a scientific need.",
          "Correct. Minimisation: camera yes, homestead pin and contacts no. A serious tool such as Agrika is built around photos, offline use, Kiswahili and M-Pesa checkout with PCPB products — not around emptying your phone.",
          "An ID next to a leaf creates a document thieves can use. It does not make a guess official.",
          "A public pin plus a farm photo is a map to your home. Ask a person, do not broadcast the homestead.",
        ],
        hintsSw: [
          "Usahihi kwenye jani unatoka picha wazi, si anwani zako. Ufikiaji kamili ni urahisi kwa kampuni, si hitaji la kisayansi.",
          "Sahihi. Kupunguza data: kamera ndiyo, alama ya nyumbani na anwani hapana. Zana ya makini kama Agrika imejengwa kuzunguka picha, matumizi bila intaneti, Kiswahili na malipo ya M-Pesa na bidhaa za PCPB — si kumwaga simu yako.",
          "Kitambulisho kando ya jani kinaunda waraka wezi wanaoweza kutumia. Hakufanyi makisio kuwa rasmi.",
          "Alama ya umma pamoja na picha ya shamba ni ramani ya nyumbani kwako. Muulize mtu, usitangaze nyumbani.",
        ],
        explainEn: "Give the leaf, not the homestead. Camera for one photo is enough for a guess. PINs, IDs, contacts and always-on GPS are not part of diagnosing a plant.",
        explainSw: "Toa jani, si nyumbani. Kamera kwa picha moja inatosha kwa makisio. PIN, vitambulisho, anwani na GPS ya kila wakati si sehemu ya kutambua mmea.",
      }),
      quiz(
        "Under Kenya's Data Protection Act, which request should you refuse from an unknown farm app?",
        "Chini ya Sheria ya Ulinzi wa Data ya Kenya, ombi lipi unapaswa kukataa kutoka programu isiyojulikana ya shamba?",
        [
          "The county you farm in, so advice can be local",
          "Your M-Pesa PIN, to prove you are a real farmer",
          "The crop name and a planting month",
          "A leaf photo you chose to take",
        ],
        [
          "Kaunti unayolima, ili ushauri uwe wa eneo",
          "PIN yako ya M-Pesa, ili kuthibitisha wewe ni mkulima halisi",
          "Jina la zao na mwezi wa kupanda",
          "Picha ya jani uliyochagua kupiga",
        ],
        1,
        "County, crop and a photo can be needed for advice. A PIN never is. No genuine service proves you are a farmer by taking the key to your money.",
        "Kaunti, zao na picha vinaweza kuhitajika kwa ushauri. PIN haitahitajika kamwe. Hakuna huduma ya kweli inayothibitisha wewe ni mkulima kwa kuchukua ufunguo wa pesa zako."
      ),
      note(
        "Try it: a permission audit of one farm app",
        "Jaribu: ukaguzi wa ruhusa wa programu moja ya shamba",
        "With an adult, open one farm, weather or market app on a phone (or write the permissions from the Play Store page if you cannot install it).\n\nMake a table with three columns: Permission, Needed for the job?, I will allow?\n\nRows might be camera, location, contacts, storage, SMS.\n\nFor each row, write yes only if you can explain the job in one sentence. If you cannot, the answer is no.\n\nWrite one line you would say out loud: I can share a leaf photo. I will not share my PIN or my homestead pin.",
        "Pamoja na mtu mzima, fungua programu moja ya shamba, hali ya hewa au soko kwenye simu (au andika ruhusa kutoka ukurasa wa Play Store kama huwezi kuisakinisha).\n\nTengeneza jedwali lenye safu tatu: Ruhusa, Inahitajika kwa kazi?, Nitaruhusu?\n\nMistari inaweza kuwa kamera, mahali, anwani, hifadhi, SMS.\n\nKwa kila mstari, andika ndiyo tu kama unaweza kueleza kazi kwa sentensi moja. Kama huwezi, jibu ni hapana.\n\nAndika mstari mmoja ungeusema kwa sauti: Naweza kushiriki picha ya jani. Sitashiriki PIN yangu wala alama ya nyumbani."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- Location, phone numbers and farm records can identify you. Treat them as personal data.\n- Give the minimum: a leaf, a county, a crop — not PIN, ID or homestead pin.\n- Consent is a real yes, explained clearly.\n- Next: you will assemble an advice prompt that asks for uncertainty and who to confirm with.",
        "- Mahali, namba za simu na rekodi za shamba vinaweza kukutambulisha. Vichukulie kama data binafsi.\n- Toa kiwango cha chini: jani, kaunti, zao — si PIN, kitambulisho wala alama ya nyumbani.\n- Ridhaa ni ndiyo halisi, iliyoelezwa wazi.\n- Ifuatayo: utaunda maagizo ya ushauri yanayoomba mashaka na nani wa kuthibitisha naye."
      ),
    ],
  },
  {
    id: "agr-b-u11",
    titleEn: "Ask for uncertainty and who should confirm",
    titleSw: "Omba mashaka na nani athibitishe",
    cards: [
      note(
        "A useful farm prompt leaves room for not knowing",
        "Maagizo yenye manufaa ya shamba yanaacha nafasi ya kutokujua",
        "You already know that a chatbot predicts likely words. On a farm, that fluency is dangerous if you ask it to decide. A better prompt does four jobs: it describes your crop and what you see, it asks for possible causes rather than one answer, it demands that the tool say how unsure it is, and it names a person who must confirm before you spend money or spray.\n\nWhat you never ask the chat to do: name a product and a dose, tell you to spray, set your selling price, or diagnose an animal. Those stay with the afisa wa ugani, the agrovet and the PCPB label, or the vet.\n\nA weak prompt: My maize is sick. What do I spray?\n\nA stronger prompt: Crop: maize, 6 weeks, Bungoma, rain-fed, 1 acre. I see ragged holes and moist frass in the whorl on about 7 of 20 plants I counted today. List 3 possible causes. For each, say what would make it more or less likely. Say what you are unsure about. Do not name a chemical or a dose. Tell me what to confirm with the afisa wa ugani and what to read on a PCPB label at the agrovet.\n\nThe second prompt still does not make the chat the expert. It makes the chat a note-taker for a visit you will actually do.",
        "Tayari unajua chatbot hutabiri maneno yanayowezekana. Shambani, ufasaha huo ni hatari ukiiomba iamue. Maagizo bora hufanya kazi nne: yanaeleza zao lako na unachoona, yanaomba visababishi vinavyowezekana badala ya jibu moja, yanataka zana iseme jinsi ilivyo na mashaka, na yanataja mtu ambaye lazima athibitishe kabla hujatumia pesa au kunyunyiza.\n\nUsichoomba gumzo lifanye: kutaja bidhaa na kipimo, kukuambia unyunyize, kuweka bei yako ya kuuza, au kutambua mnyama. Hivyo vinabaki kwa afisa wa ugani, agrovet na lebo ya PCPB, au daktari wa mifugo.\n\nMaagizo dhaifu: Mahindi yangu ni magonjwa. Ninyunyize nini?\n\nMaagizo imara: Zao: mahindi, wiki 6, Bungoma, ya mvua, ekari 1. Naona matundu yaliyoraruka na kinyesi chenye unyevu kwenye kipepeo kwenye takriban mimea 7 kati ya 20 niliyohesabu leo. Orodhesha visababishi 3 vinavyowezekana. Kwa kila kimoja, sema nini kingekifanya kiwe na uwezekano zaidi au chini. Sema unacho mashaka nacho. Usitaje dawa wala kipimo. Niambie nithibitishe nini na afisa wa ugani na nisome nini kwenye lebo ya PCPB kwenye agrovet.\n\nMaagizo ya pili bado hayafanyi gumzo kuwa mtaalamu. Yanayafanya kuwa mwandishi wa kumbukumbu kwa ziara utakayofanya kweli."
      ),
      reveal([
        {
          termEn: "Prompt",
          termSw: "Maagizo (prompt)",
          defEn: "The words you give a chatbot. Clear context and clear limits change the answer.",
          defSw: "Maneno unayompa chatbot. Muktadha wazi na vikomo wazi vinabadilisha jibu.",
        },
        {
          termEn: "Uncertainty",
          termSw: "Mashaka (uncertainty)",
          defEn: "Saying what is not known yet. A useful answer lists doubts instead of hiding them.",
          defSw: "Kusema kisichojulikana bado. Jibu lenye manufaa linaorodhesha mashaka badala ya kuyaficha.",
        },
        {
          termEn: "Confirmation step",
          termSw: "Hatua ya uthibitisho",
          defEn: "Naming who must check before action: afisa wa ugani, agrovet plus PCPB label, or vet.",
          defSw: "Kutaja nani lazima akague kabla ya hatua: afisa wa ugani, agrovet pamoja na lebo ya PCPB, au daktari wa mifugo.",
        },
        {
          termEn: "Out of scope",
          termSw: "Nje ya wigo",
          defEn: "A request the tool must refuse, such as a spray dose or an animal medicine.",
          defSw: "Ombi ambalo zana lazima ikatae, kama kipimo cha kunyunyiza au dawa ya mnyama.",
        },
      ]),
      note(
        "Worked example: from a dangerous question to a visit list",
        "Mfano: kutoka swali hatari hadi orodha ya ziara",
        "Imagine Brian in Trans Nzoia. His first message to a chatbot is: Fall armyworm. Tell me the chemical and how many ml per litre.\n\nThe chat names a product. Brian does not buy it. He rewrites the prompt with his notebook open:\n\n- Place and crop: Trans Nzoia, maize, 5 weeks, 1 acre rain-fed.\n- What I counted: 9 of 25 plants with fresh window-pane damage and frass in the whorl this morning.\n- Ask: 3 possible causes and what would rule each one in or out.\n- Limits: do not name a pesticide, a dose, or a brand. Say what you might be mixing up.\n- Confirm with: afisa wa ugani (show photos and the 9/25 count) and, if a product is later advised by them, the PCPB label at my agrovet.\n\nThe second answer, in this made-up example, says the pattern fits fall armyworm but could also be other caterpillars, and that a nutrient problem would not put frass in the whorl. It lists questions for the officer: how many plants per 50, whether the growing point is alive, whether neighbours are seeing the same. Brian copies those questions into his notebook and goes to the ward office. The prompt did not spray the field. It prepared the visit.",
        "Fikiria Brian huko Trans Nzoia. Ujumbe wake wa kwanza kwa chatbot ni: Viwavijeshi vamizi. Niambie dawa na mililita ngapi kwa lita.\n\nGumzo linataja bidhaa. Brian hanunui. Anaandika maagizo upya daftari likiwa wazi:\n\n- Mahali na zao: Trans Nzoia, mahindi, wiki 5, ekari 1 ya mvua.\n- Niliyohesabu: mimea 9 kati ya 25 yenye uharibifu mpya kama dirisha na kinyesi kwenye kipepeo asubuhi hii.\n- Omba: visababishi 3 vinavyowezekana na nini kingethibitisha au kukataa kila kimoja.\n- Vikomo: usitaje dawa ya wadudu, kipimo, wala chapa. Sema unachoweza kuchanganya.\n- Thibitisha na: afisa wa ugani (onyesha picha na hesabu ya 9/25) na, bidhaa ikishauriwa baadaye nao, lebo ya PCPB kwenye agrovet yangu.\n\nJibu la pili, katika mfano huu wa kubuni, linasema muundo unafanana na viwavijeshi vamizi lakini unaweza kuwa viwavi wengine, na kwamba tatizo la lishe lisingeweka kinyesi kwenye kipepeo. Linaorodhesha maswali kwa afisa: mimea mingapi kati ya 50, kama kituo cha kukua kiko hai, kama majirani wanaona vivyo. Brian anayanakili maswali hayo kwenye daftari na kwenda ofisi ya wadi. Maagizo hayakunyunyiza shamba. Yaliandaa ziara."
      ),
      scenario({
        titleEn: "Practice: the group wants a spray prompt",
        titleSw: "Mazoezi: kikundi kinataka maagizo ya kunyunyiza",
        situationEn: "A village WhatsApp group asks you to paste the perfect prompt so a chatbot will tell everyone what to spray on beans this week.",
        situationSw: "Kikundi cha WhatsApp cha kijiji kinakuomba ubandike maagizo kamili ili chatbot iwaambie kila mtu ninyunyize nini kwenye maharagwe wiki hii.",
        questionEn: "What should you paste instead?",
        questionSw: "Unapaswa kubandika nini badala yake?",
        optionsEn: [
          "A prompt that asks for a product name, dose and mixing order for beans",
          "A prompt that asks for possible causes, uncertainty, and a list of what to confirm with the afisa wa ugani and the PCPB label — and a note that no chat should set the spray",
          "Nothing; never use a chatbot for any farm question",
          "A prompt that asks the bot to pick the cheapest bottle in Kenya",
        ],
        optionsSw: [
          "Maagizo yanayoomba jina la bidhaa, kipimo na mpangilio wa kuchanganya kwa maharagwe",
          "Maagizo yanayoomba visababishi vinavyowezekana, mashaka, na orodha ya kuthibitisha na afisa wa ugani na lebo ya PCPB — pamoja na kumbukumbu kwamba gumzo halipaswi kuweka unyunyizaji",
          "Hakuna; usitumie chatbot kwa swali lolote la shamba",
          "Maagizo yanayoomba roboti ichague chupa nafuu zaidi Kenya",
        ],
        correctIndex: 1,
        hintsEn: [
          "That prompt trains the whole group to spray from a chat. One wrong bottle times 30 farms is a village-sized mistake.",
          "Correct. You can use a language model to prepare questions. You cannot use it as the county agrovet.",
          "Too far. Chatbots can help you list questions and explain a leaflet in Kiswahili. The hard stop is dose and product.",
          "Cheapest is not safest, not labelled, and not confirmed. Price is the last filter, after PCPB and the officer.",
        ],
        hintsSw: [
          "Maagizo hayo yanafundisha kijiji kizima kunyunyiza kutoka kwenye gumzo. Chupa moja potovu mara mashamba 30 ni kosa la kijiji.",
          "Sahihi. Unaweza kutumia modeli ya lugha kuandaa maswali. Huwezi kuitumia kama agrovet ya kaunti.",
          "Umezidi. Chatbot zinaweza kukusaidia kuorodhesha maswali na kueleza kijitabu kwa Kiswahili. Kituo kigumu ni kipimo na bidhaa.",
          "Nafu si salama, si yenye lebo, wala si iliyothibitishwa. Bei ni kichujio cha mwisho, baada ya PCPB na afisa.",
        ],
        explainEn: "A good farm prompt asks for possibilities, doubts and a named person to confirm. It refuses spray recipes.",
        explainSw: "Maagizo mazuri ya shamba yanaomba uwezekano, mashaka na mtu aliye tajiwa wa kuthibitisha. Yanakataa mapishi ya kunyunyiza.",
      }),
      pb({
        titleEn: "Build a farm-advice prompt",
        titleSw: "Jenga maagizo ya ushauri wa shamba",
        introEn: "Assemble a prompt you could send to a chatbot before you walk to the extension office. It must describe the field, ask for uncertainty, and name who confirms. It must not ask for a spray recipe.",
        introSw: "Unda maagizo unayoweza kutuma kwa chatbot kabla ya kwenda ofisi ya ugani. Lazima yaeleze shamba, yaombe mashaka, na yataje nani anathibitisha. Hayapaswi kuomba mapishi ya kunyunyiza.",
        goalEn: "Include crop and place, what you counted, a request for possible causes with uncertainty, a ban on product and dose, and who must confirm.",
        goalSw: "Jumlisha zao na mahali, ulichohesabu, ombi la visababishi vinavyowezekana pamoja na mashaka, marufuku ya bidhaa na kipimo, na nani lazima athibitishe.",
        blocksEn: [
          "Crop and place: maize, 6 weeks after planting, rain-fed, Bungoma, 1 acre",
          "What I counted today: ragged holes and moist frass in the whorl on 7 of 20 plants",
          "Ask for: 3 possible causes, and what would make each more or less likely",
          "Say what you are unsure about; do not pretend to have walked the field",
          "Do not name a pesticide, a dose, a brand, or a mixing recipe",
          "Tell me what to confirm with the afisa wa ugani, and what to read on a PCPB label at the agrovet before anyone sprays",
        ],
        blocksSw: [
          "Zao na mahali: mahindi, wiki 6 baada ya kupanda, ya mvua, Bungoma, ekari 1",
          "Niliyohesabu leo: matundu yaliyoraruka na kinyesi chenye unyevu kwenye kipepeo kwenye mimea 7 kati ya 20",
          "Omba: visababishi 3 vinavyowezekana, na nini kingefanya kila kimoja kiwe na uwezekano zaidi au chini",
          "Sema unacho mashaka nacho; usijifanye ulitembea shambani",
          "Usitaje dawa ya wadudu, kipimo, chapa, wala mapishi ya kuchanganya",
          "Niambie nithibitishe nini na afisa wa ugani, na nisome nini kwenye lebo ya PCPB kwenye agrovet kabla mtu yeyote hajanyunyiza",
        ],
        required: [0, 1, 2, 4, 5],
        sampleEn: "Crop and place: maize, 6 weeks after planting, rain-fed, Bungoma, 1 acre. What I counted today: ragged holes and moist frass in the whorl on 7 of 20 plants. Ask for 3 possible causes, and what would make each more or less likely. Say what you are unsure about; do not pretend to have walked the field. Do not name a pesticide, a dose, a brand, or a mixing recipe. Tell me what to confirm with the afisa wa ugani, and what to read on a PCPB label at the agrovet before anyone sprays.",
        sampleSw: "Zao na mahali: mahindi, wiki 6 baada ya kupanda, ya mvua, Bungoma, ekari 1. Niliyohesabu leo: matundu yaliyoraruka na kinyesi chenye unyevu kwenye kipepeo kwenye mimea 7 kati ya 20. Omba visababishi 3 vinavyowezekana, na nini kingefanya kila kimoja kiwe na uwezekano zaidi au chini. Sema unacho mashaka nacho; usijifanye ulitembea shambani. Usitaje dawa ya wadudu, kipimo, chapa, wala mapishi ya kuchanganya. Niambie nithibitishe nini na afisa wa ugani, na nisome nini kwenye lebo ya PCPB kwenye agrovet kabla mtu yeyote hajanyunyiza.",
      }),
      note(
        "Try it: write the prompt for your own plot",
        "Jaribu: andika maagizo kwa kipande chako",
        "Using your notebook, write one prompt on paper for a real crop, animal or garden problem — or a made-up one if the plot is healthy.\n\nCheck your page against five ticks:\n\n- Crop or animal, place, and a count or amount\n- Ask for more than one possible cause\n- Ask the tool to say what it is unsure about\n- Ban product names and doses\n- Name the afisa wa ugani, agrovet plus PCPB label, or vet\n\nIf any tick is missing, add it. You do not have to send the prompt. The skill is writing it.",
        "Ukitumia daftari lako, andika maagizo moja kwenye karatasi kwa tatizo halisi la zao, mnyama au bustani — au la kubuni kama kipande ni mzima.\n\nKagua ukurasa wako kwa alama tano:\n\n- Zao au mnyama, mahali, na hesabu au kiasi\n- Omba visababishi zaidi ya kimoja\n- Omba zana iseme inacho mashaka nacho\n- Kataza majina ya bidhaa na vipimo\n- Taja afisa wa ugani, agrovet pamoja na lebo ya PCPB, au daktari wa mifugo\n\nAlama ikikosekana, iongeze. Si lazima uyatumie maagizo. Stadi ni kuyaandika."
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- A farm prompt describes the field, asks for several causes, and demands uncertainty.\n- Never ask a chat for a product, a dose or a selling price as a decision.\n- Always name who confirms: extension, agrovet and PCPB label, or vet.\n- Next: a week on the farm with AI as helper, not as boss.",
        "- Maagizo ya shamba yanaeleza shamba, yanaomba visababishi kadhaa, na yanataka mashaka.\n- Usiombe gumzo bidhaa, kipimo au bei ya kuuza kama uamuzi.\n- Taja kila mara nani anathibitisha: ugani, agrovet na lebo ya PCPB, au daktari wa mifugo.\n- Ifuatayo: wiki shambani na AI kama msaidizi, si kama bosi."
      ),
    ],
  },
  {
    id: "agr-b-u12",
    titleEn: "A week on the farm with AI as helper",
    titleSw: "Wiki shambani na AI kama msaidizi",
    cards: [
      note(
        "Put the whole course into seven days",
        "Weka kozi yote katika siku saba",
        "This last unit is a checkpoint. For one week, AI is allowed to notice, translate, summarise and remind. People still walk the field, read the PCPB label, call the vet, and set the price.\n\nYou now have a chain:\n\n- Records in a notebook, with units, so any later tool has honest inputs.\n- Weather as a percentage, checked against KMD, NDMA and your rain notes — never a promise.\n- Photos in open shade, whole plant, several plants, before a classifier guesses.\n- Flags from livestock tools, then a vet.\n- Prices from real buyers, compared with your cost, not from a rumour or a bot floor.\n- Privacy: leaf not homestead, no PIN, no ID.\n- Prompts that ask for uncertainty and a named person to confirm.\n\nKenyan services you may meet — FarmerAI on DigiFarm, SMS and WhatsApp (Safaricom and Opportunity International); Agrika for photos, offline use, Kiswahili, M-Pesa and PCPB-linked products; KALRO knowledge through extension — still sit inside this chain. A pilot is not a proven harvest increase. Your job is to use the helper without handing it the farm.",
        "Somo hili la mwisho ni kituo cha ukaguzi. Kwa wiki moja, AI inaruhusiwa kuona, kutafsiri, kufupisha na kukumbusha. Watu bado wanatembea shambani, kusoma lebo ya PCPB, kumpiga daktari wa mifugo, na kuweka bei.\n\nSasa una mnyororo:\n\n- Rekodi kwenye daftari, zenye vipimo, ili zana yoyote baadaye iwe na ingizo la uaminifu.\n- Hali ya hewa kama asilimia, ikikaguliwa dhidi ya KMD, NDMA na kumbukumbu zako za mvua — si ahadi kamwe.\n- Picha kwenye kivuli wazi, mmea mzima, mimea kadhaa, kabla ainishaji hajakisia.\n- Ishara kutoka zana za mifugo, kisha daktari wa mifugo.\n- Bei kutoka wanunuzi halisi, zikilinganishwa na gharama yako, si kutoka uvumi au kiwango cha roboti.\n- Faragha: jani si nyumbani, hakuna PIN, hakuna kitambulisho.\n- Maagizo yanayoomba mashaka na mtu aliye tajiwa wa kuthibitisha.\n\nHuduma za Kenya unazoweza kukutana nazo — FarmerAI kwenye DigiFarm, SMS na WhatsApp (Safaricom na Opportunity International); Agrika kwa picha, matumizi bila intaneti, Kiswahili, M-Pesa na bidhaa zinazohusiana na PCPB; maarifa ya KALRO kupitia ugani — bado viko ndani ya mnyororo huu. Majaribio si ongezeko la mavuno lililothibitishwa. Kazi yako ni kutumia msaidizi bila kumpa shamba."
      ),
      reveal([
        {
          termEn: "Helper not boss",
          termSw: "Msaidizi si bosi",
          defEn: "AI may draft, flag and guess. You, extension, agrovet, label and vet decide.",
          defSw: "AI inaweza kuandaa, kuashiria na kukisia. Wewe, ugani, agrovet, lebo na daktari wa mifugo ndio mnaamua.",
        },
        {
          termEn: "Checkpoint",
          termSw: "Kituo cha ukaguzi",
          defEn: "A week where you practise every habit in the course on a real plot, garden or animal.",
          defSw: "Wiki ambapo unafanya mazoezi ya kila tabia ya kozi kwenye kipande, bustani au mnyama halisi.",
        },
        {
          termEn: "Pilot",
          termSw: "Majaribio (pilot)",
          defEn: "A small test of a service, such as FarmerAI's early potato-cycle work. It is not proof for every farm.",
          defSw: "Jaribio dogo la huduma, kama kazi ya awali ya mzunguko wa viazi ya FarmerAI. Si uthibitisho kwa kila shamba.",
        },
        {
          termEn: "Season plan",
          termSw: "Mpango wa msimu",
          defEn: "One AI-assisted habit at planting, mid-season, harvest and sale — each with a human check.",
          defSw: "Tabia moja inayosaidiwa na AI wakati wa kupanda, katikati ya msimu, kuvuna na kuuza — kila moja ikiwa na ukaguzi wa binadamu.",
        },
      ]),
      note(
        "Worked example: Wanjiku's helper week",
        "Mfano: wiki ya msaidizi ya Wanjiku",
        "Return to Wanjiku in Murang'a (Unit 1), 1 acre of maize. This week's numbers are made up.\n\nMonday. She writes the date, 1 acre, and last week's weeding cost KES 2,000. An SMS says 60% chance of rain. She copies it into the diary. She does not top-dress yet.\n\nTuesday. She photographs five plants in open shade, whole plant plus damaged leaf. A photo app, used in the spirit of Agrika, says fall armyworm, 62% sure. She writes 8 of 25 plants with fresh damage.\n\nWednesday. She sends a Unit 11 prompt to a chatbot: possible causes, uncertainty, no product names. She takes the printed questions, the photos and the 8/25 count to the afisa wa ugani. He confirms fall armyworm. At the agrovet she reads a PCPB label with him. She buys only what the label covers, at the labelled rate, after he has advised.\n\nThursday. A group rumour says maize will hit KES 4,500 a bag. Her notebook still has no harvest. She ignores the number.\n\nFriday. The collar on her one dairy cow flags heat. She watches the cow, then calls her insemination technician. She does not ask a chat to time the service.\n\nSaturday. A new app wants GPS of the homestead to continue. She refuses and keeps using ward-level weather.\n\nSunday. She lists what the tools did: notice, prepare questions, store a rain percentage. She lists what people did: walk, confirm, read the label, watch the cow. That split is the course.",
        "Rudi kwa Wanjiku huko Murang'a (Somo la 1), ekari 1 ya mahindi. Namba za wiki hii ni za kubuni.\n\nJumatatu. Anaandika tarehe, ekari 1, na gharama ya palizi ya wiki iliyopita KES 2,000. SMS inasema uwezekano wa mvua 60%. Anainakili kwenye shajara. Bado haweki mbolea ya kukuzia.\n\nJumanne. Anapiga picha za mimea mitano kwenye kivuli wazi, mmea mzima pamoja na jani lililoharibika. Programu ya picha, itumiwayo kwa mfano wa Agrika, inasema viwavijeshi vamizi, uhakika 62%. Anaandika mimea 8 kati ya 25 yenye uharibifu mpya.\n\nJumatano. Anatuma maagizo ya Somo la 11 kwa chatbot: visababishi vinavyowezekana, mashaka, bila majina ya bidhaa. Anachukua maswali yaliyochapishwa, picha na hesabu ya 8/25 kwa afisa wa ugani. Anathibitisha viwavijeshi vamizi. Kwenye agrovet anasoma lebo ya PCPB pamoja naye. Ananunua tu kile lebo inachofunika, kwa kipimo cha lebo, baada ya yeye kushauri.\n\nAlhamisi. Uvumi wa kikundi unasema mahindi yatapata KES 4,500 kwa gunia. Daftari lake bado halina mavuno. Anapuuza namba.\n\nIjumaa. Kola ya ng'ombe wake mmoja wa maziwa inaashiria joto la kuzaa. Anamwangalia ng'ombe, kisha anampigia fundi wa kumeza mbegu. Hamwombi gumzo kuweka muda.\n\nJumamosi. Programu mpya inataka GPS ya nyumbani ili iendelee. Anakataa na anaendelea na hali ya hewa ya kiwango cha wadi.\n\nJumapili. Anaorodhesha zana zilizofanya: kuona, kuandaa maswali, kuhifadhi asilimia ya mvua. Anaorodhesha watu waliofanya: kutembea, kuthibitisha, kusoma lebo, kumwangalia ng'ombe. Mgawanyo huo ndio kozi."
      ),
      scenario({
        titleEn: "Practice: the week that went too fast",
        titleSw: "Mazoezi: wiki iliyokwenda haraka mno",
        situationEn: "David tries the helper week on 0.5 acre of potatoes. Day 1 a chatbot names a spray. He buys it. Day 2 an app wants his PIN. He types it. Day 3 a price bot says wait two weeks; the tubers are already cracking. Day 4 he has no notebook entries.",
        situationSw: "David anajaribu wiki ya msaidizi kwenye ekari 0.5 ya viazi. Siku ya 1 chatbot inataja dawa. Anainunua. Siku ya 2 programu inataka PIN yake. Anaandika. Siku ya 3 roboti ya bei inasema subiri wiki mbili; viazi tayari vinapasuka. Siku ya 4 hana ingizo lolote kwenye daftari.",
        questionEn: "Which reset would make the rest of the week match this course?",
        questionSw: "Ni reset ipi ingefanya wiki iliyobaki ifanane na kozi hii?",
        optionsEn: [
          "Keep going; speed means the tools are working",
          "Stop spraying from the chat, change the M-Pesa PIN, start the notebook today, sell or store from real tuber condition and a real buyer, and use tools only to notice and prepare questions",
          "Delete every app and farm only by rumour",
          "Ask the same chatbot to undo the spray and recover the PIN",
        ],
        optionsSw: [
          "Endelea; kasi inamaanisha zana zinafanya kazi",
          "Acha kunyunyiza kutoka kwenye gumzo, badilisha PIN ya M-Pesa, anza daftari leo, uza au hifadhi kutokana na hali halisi ya viazi na mnunuzi halisi, na tumia zana tu kuona na kuandaa maswali",
          "Futa kila programu na lima kwa uvumi tu",
          "Omba chatbot ileile itengue unyunyizaji na irudishe PIN",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed here is four course failures in four days, not success.",
          "Correct. The week can restart at the notebook. The PIN must be changed with the real M-Pesa process, not with a farming chat. Potatoes follow the tuber and the buyer, not a bot calendar.",
          "Tools still have a job: notice, translate, remind. The reset is who decides, not a ban on phones.",
          "A chatbot cannot unspray a field or retrieve a PIN. Those are people and Safaricom jobs.",
        ],
        hintsSw: [
          "Kasi hapa ni kushindwa kwa kozi mara nne kwa siku nne, si mafanikio.",
          "Sahihi. Wiki inaweza kuanza upya kwenye daftari. PIN lazima ibadilishwe kwa mchakato halisi wa M-Pesa, si kwa gumzo la kilimo. Viazi vinafuata kiazi na mnunuzi, si kalenda ya roboti.",
          "Zana bado zina kazi: kuona, kutafsiri, kukumbusha. Reset ni nani anaamua, si marufuku ya simu.",
          "Chatbot haiwezi kufuta unyunyizaji wala kurudisha PIN. Hizo ni kazi za watu na Safaricom.",
        ],
        explainEn: "A helper week that skips records, privacy, labels and real buyers is not this course. Reset those four, then continue.",
        explainSw: "Wiki ya msaidizi inayoruka rekodi, faragha, lebo na wanunuzi halisi si kozi hii. Reset hivyo vinne, kisha endelea.",
      }),
      quiz(
        "Which plan uses AI as a helper for a rain-fed maize season?",
        "Ni mpango upi unatumia AI kama msaidizi kwa msimu wa mahindi ya mvua?",
        [
          "Let a chatbot pick the seed, the spray calendar and the selling week, then follow it",
          "Keep a notebook; use forecasts and photo guesses to notice; confirm with extension, agrovet and PCPB label; sell from real offers and your cost",
          "Photograph the homestead daily so the app learns the farm better",
          "Join every farm WhatsApp bot and do whichever message arrives first",
        ],
        [
          "Acha chatbot ichague mbegu, kalenda ya kunyunyiza na wiki ya kuuza, kisha uifuate",
          "Weka daftari; tumia utabiri na makisio ya picha kuona; thibitisha na ugani, agrovet na lebo ya PCPB; uza kutoka ofa halisi na gharama yako",
          "Piga picha ya nyumbani kila siku ili programu ijifunze shamba vizuri zaidi",
          "Jiunge na kila roboti ya WhatsApp ya shamba na fanya ujumbe wowote unaofika kwanza",
        ],
        1,
        "Helper means notice and prepare. Boss would mean seed, spray and price. Homestead photos and first-message-wins both break privacy and judgement.",
        "Msaidizi inamaanisha kuona na kuandaa. Bosi ingemaanisha mbegu, unyunyizaji na bei. Picha za nyumbani na ujumbe-wa-kwanza-unashinda vyote vinavunja faragha na uamuzi."
      ),
      note(
        "Try it: your seven-day helper card",
        "Jaribu: kadi yako ya msaidizi ya siku saba",
        "Copy this card into your notebook and tick as you go. Use a farm, a school garden, or one animal.\n\n- Day 1: one complete record (date, plot, activity, amount and unit, cost or unknown).\n- Day 2: copy one weather percentage; evening yes/no rain.\n- Day 3: three photos of one plant (whole, close, other plants) — no treatment from the photos.\n- Day 4: write who you would ask (afisa wa ugani, agrovet, vet) and find one official contact with an adult.\n- Day 5: one price check — rumour vs a real offer vs your cost if you know it.\n- Day 6: refuse one unnecessary permission (PIN, ID, homestead pin, contacts).\n- Day 7: write one Unit 11 prompt. Do not send a spray question.\n\nAt the bottom write one sentence: This week AI helped me … and people decided …",
        "Nakili kadi hii kwenye daftari lako na tiki unapoendelea. Tumia shamba, bustani ya shule, au mnyama mmoja.\n\n- Siku 1: rekodi moja kamili (tarehe, kipande, kazi, kiasi na kipimo, gharama au haijulikani).\n- Siku 2: nakili asilimia moja ya hali ya hewa; jioni ndiyo/hapana mvua.\n- Siku 3: picha tatu za mmea mmoja (mzima, karibu, mimea mingine) — hakuna tiba kutoka kwenye picha.\n- Siku 4: andika nani ungeuliza (afisa wa ugani, agrovet, daktari wa mifugo) na pata mwasiliani mmoja rasmi pamoja na mtu mzima.\n- Siku 5: ukaguzi mmoja wa bei — uvumi dhidi ya ofa halisi dhidi ya gharama yako kama unaijua.\n- Siku 6: kataa ruhusa moja isiyohitajika (PIN, kitambulisho, alama ya nyumbani, anwani).\n- Siku 7: andika maagizo moja ya Somo la 11. Usitume swali la kunyunyiza.\n\nChini andika sentensi moja: Wiki hii AI ilinisaidia … na watu waliamua …"
      ),
      note(
        "Carry forward",
        "Kumbuka",
        "- AI on the farm notices, translates and reminds. It does not own spray, dose, PIN or price.\n- Notebook, fair photos, percentages, real buyers and named people are the course.\n- FarmerAI, Agrika, KALRO and county extension are helpers inside that chain, not replacements for it.\n- You are ready to use farm AI as a literate user. Intermediate work begins with prediction versus action.",
        "- AI shambani inaona, inatafsiri na inakumbusha. Haimiliki unyunyizaji, kipimo, PIN wala bei.\n- Daftari, picha za haki, asilimia, wanunuzi halisi na watu waliotajwa ndio kozi.\n- FarmerAI, Agrika, KALRO na ugani wa kaunti ni wasaidizi ndani ya mnyororo huo, si mbadala wake.\n- Uko tayari kutumia AI ya shamba kama mtumiaji mwenye uelewa. Kazi ya kiwango cha kati inaanza na utabiri dhidi ya kitendo."
      ),
    ],
  },
];
