import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Module 0 Foundations — advanced track.
 * Expert practitioner: specify, evaluate, govern, and handover an AI system
 * for a real Kenyan organisation. Not frontier-model training.
 */
export const m0AdvancedUnits: CurriculumUnit[] = [
  {
    id: "m0-a-u1",
    titleEn: "Choosing the right kind of system",
    titleSw: "Kuchagua aina sahihi ya mfumo",
    cards: [
      note(
        "The first expert decision is not which model",
        "Uamuzi wa kwanza wa mtaalamu si modeli ipi",
        `You already know the machine learning lifecycle. This track is about a decision that comes before that lifecycle: whether a learning system is the right object at all.

Kenya launched the National Artificial Intelligence Strategy 2025–2030 on 27 March 2025 at KICC in Nairobi. The strategy ties AI to Vision 2030 and to the Digital Master Plan 2022–2032, and it names priority sectors: agriculture, health, education, public services, finance, and MSMEs. That launch does not mean every office must buy a chatbot. It means organisations need people who can choose a tool that actually fits the job.

Five kinds of system cover almost every request you will hear. Learn to name them out loud, because vendors will try to sell you the fifth one for jobs that belong to the first.

- Written rules. A person writes the steps. "If the member has missed two payments, send an SMS. If they have missed four, book a visit." The answer is the same every time. You can print the rule and show it to a board.
- A person with a spreadsheet. Someone looks up a row, sorts a list, or checks a total. The computer stores and calculates; the person judges. This is still the right design for many county, SACCO, school and clinic jobs.
- A retrieval system. The computer finds the right page in a set of documents you already trust (a KALRO leaflet, a PCPB product label, a clinic protocol) and shows it to a person. It does not invent a new answer. It fetches.
- A machine-learning model. The computer learned a pattern from labelled examples: this leaf was diseased, that loan was repaid. It outputs a category or a number. It is silent unless you ask it a question of the same kind it was trained on.
- A chatbot (a generative assistant). It writes new text. It can draft, summarise and translate. It does not look up a source unless you attach retrieval. It can sound sure while being wrong.

Use rules when the policy is already written and must not drift. Use a spreadsheet-plus-person when the volume is small, the judgement is local, or a wrong automated answer would be hard to undo. Use retrieval when the truth already lives in documents you control. Use machine learning when you have enough labelled past examples, a clear output, and a person who will act on a score. Use a chatbot when the job is drafting or answering in language — and only with a human check for anything that touches money, health, discipline or legal status.

A useful test: if you cannot say in one sentence what goes in, what comes out, who uses the output, and what they will do when it is wrong, you are not ready to buy or build anything. You are still at the problem, not at the tool.`,
        `Tayari unajua mzunguko wa maisha wa ujifunzaji wa mashine. Mfululizo huu unahusu uamuzi unaokuja kabla ya mzunguko huo: je, mfumo unaojifunza ndio kitu sahihi hata kidogo.

Kenya ilizindua Mkakati wa Kitaifa wa Akili Bandia 2025–2030 tarehe 27 Machi 2025 katika KICC, Nairobi. Mkakati huo unaunganisha AI na Vision 2030 na Mpango Mkuu wa Kidijitali 2022–2032, na unataja sekta za kipaumbele: kilimo, afya, elimu, huduma za umma, fedha, na biashara ndogo na za kati. Uzinduzi huo haimaanishi kila ofisi inapaswa kununua chatbot. Inamaanisha mashirika yanahitaji watu wanaoweza kuchagua zana inayofaa kazi hasa.

Aina tano za mfumo zinashughulikia karibu kila ombi utakalosikia. Jifunze kuzitaja kwa sauti, kwa sababu wauzaji watajaribu kukuuza ya tano kwa kazi zinazostahili ya kwanza.

- Sheria zilizoandikwa. Mtu anaandika hatua. "Mwanachama akikosa malipo mawili, tuma SMS. Akikosa manne, panga ziara." Jibu ni lilelile kila mara. Unaweza kuchapisha sheria na kuionyesha bodi.
- Mtu na jedwali (spreadsheet). Mtu anatafuta mstari, kupanga orodha, au kukagua jumla. Kompyuta inahifadhi na kuhesabu; mtu ndiye anayeamua. Hii bado ni muundo sahihi kwa kazi nyingi za kaunti, SACCO, shule na kliniki.
- Mfumo wa urejeshaji (retrieval). Kompyuta inapata ukurasa sahihi katika seti ya nyaraka ambazo tayari mnaziamini (kijitabu cha KALRO, lebo ya bidhaa ya PCPB, itifaki ya kliniki) na kumwonyesha mtu. Haiumbi jibu jipya. Inaleta.
- Modeli ya ujifunzaji wa mashine. Kompyuta ilijifunza ruwaza kutoka kwa mifano yenye lebo: jani hili lilikuwa na ugonjwa, mkopo ule ulilipwa. Inatoa kundi au namba. Inanyamaza usipoiuliza swali la aina ileile iliyofunzwa.
- Chatbot (msaada unaozalisha maandishi). Inaandika maandishi mapya. Inaweza kuandaa rasimu, kufupisha na kutafsiri. Haitafuti chanzo usipounganisha urejeshaji. Inaweza kuonekana na uhakika huku ikiwa na kosa.

Tumia sheria sera ikiwa tayari imeandikwa na isipaswi kubadilika yenyewe. Tumia jedwali-na-mtu kiasi kikiwa kidogo, uamuzi ukiwa wa eneo, au jibu la kosa la kiotomatiki likiwa gumu kubatilisha. Tumia urejeshaji ukweli ukiishaishi katika nyaraka mnazodhibiti. Tumia ujifunzaji wa mashine mnapokuwa na mifano ya kutosha yenye lebo, tokeo wazi, na mtu atakayetenda kwa alama. Tumia chatbot kazi ikiwa ni kuandaa rasimu au kujibu kwa lugha — na tu kwa ukaguzi wa mwanadamu kwa chochote kinachogusa pesa, afya, nidhamu au hali ya kisheria.

Jaribio lenye manufaa: ikiwa huwezi kusema kwa sentensi moja nini kinaingia, nini kinatoka, nani anatumia tokeo, na atafanya nini linapokuwa na kosa, bado hujaiva kununua au kujenga chochote. Bado uko kwenye tatizo, si kwenye zana.`,
        "/learn/content/m0/ai-architecture-lab.jpg"
      ),
      reveal([
        {
          termEn: "Rule-based system",
          termSw: "Mfumo wa sheria",
          defEn: "Software that follows steps a person wrote. Same input, same output. You can print the rule.",
          defSw: "Programu inayofuata hatua alizoandika mtu. Ingizo lilelile, tokeo lilelile. Unaweza kuchapisha sheria.",
        },
        {
          termEn: "Spreadsheet-plus-person",
          termSw: "Jedwali pamoja na mtu",
          defEn: "A person uses a table or list to look up, sort or total, then makes the judgement themselves.",
          defSw: "Mtu anatumia jedwali au orodha kutafuta, kupanga au kufanya jumla, kisha anafanya uamuzi mwenyewe.",
        },
        {
          termEn: "Retrieval",
          termSw: "Urejeshaji (retrieval)",
          defEn: "Finding the right passage in documents you already trust, and showing it, rather than inventing a new answer.",
          defSw: "Kupata kifungu sahihi katika nyaraka mnazoziamini, na kukionyesha, badala ya kuumba jibu jipya.",
        },
        {
          termEn: "Predictive model",
          termSw: "Modeli ya utabiri",
          defEn: "A model that outputs a category or a number learned from labelled past examples.",
          defSw: "Modeli inayotoa kundi au namba iliyojifunzwa kutoka kwa mifano ya zamani yenye lebo.",
        },
        {
          termEn: "Generative assistant",
          termSw: "Msaada unaozalisha maudhui",
          defEn: "A system that writes new text (or similar). Useful for drafts; unsafe as a sole source of truth.",
          defSw: "Mfumo unaoandika maandishi mapya (au sawa). Una faida kwa rasimu; si salama kama chanzo pekee cha ukweli.",
        },
      ]),
      note(
        "Worked example: Kilifi clinic appointments",
        "Mfano kamili: miadi ya kliniki Kilifi",
        `Imagine Bahari Clinic, a fictional public clinic in Kilifi Town. Nurses spend Tuesday mornings calling patients who missed antiretroviral appointments. A donor offers "an AI that will remind patients and answer their questions."

Write the job in one sentence: "By 7 a.m. on clinic days, send each booked patient an SMS in Kiswahili with the time and the clinic phone number, and flag the names of people who have missed two visits in a row for a nurse to call."

Now match kinds of system to parts of that job.

- The reminder itself is a written rule. The booking list already exists. The message is a template. No model is required.
- The "missed two visits" flag is also a rule, or a filter in a spreadsheet. Count visits. If the count is two or more, put the name on a list.
- A chatbot that "answers questions about HIV" would generate new text. That is a different, higher-risk job: medical advice, children's data if anyone under 18 is on the register, and language. It is not what the nurses asked for.
- Retrieval could help later: if a patient asks "what do I bring?", the system could fetch the clinic's own one-page instruction, not invent one.

Bahari Clinic should say no to the chatbot for this job, implement SMS reminders and a missed-visit list this month, and write a one-page note that the donor offer did not match the problem. That note is expert work. Choosing "AI" because a strategy document exists is not.`,
        `Fikiria Bahari Clinic, kliniki ya umma ya kubuni mjini Kilifi. Wauguzi hutumia asubuhi za Jumanne kupigia simu wagonjwa waliokosa miadi ya dawa za kurefusha maisha. Mfadhili anatoa "AI itakayowakumbusha wagonjwa na kujibu maswali yao."

Andika kazi kwa sentensi moja: "Kufikia saa moja asubuhi siku za kliniki, tuma kila mgonjwa aliyehifadhiwa SMS kwa Kiswahili yenye saa na namba ya kliniki, na orodhesha majina ya waliokosa ziara mbili mfululizo ili muuguzi awapigie."

Sasa linganisha aina za mfumo na sehemu za kazi hiyo.

- Kikumbusho chenyewe ni sheria iliyoandikwa. Orodha ya miadi tayari ipo. Ujumbe ni kiolezo. Hakuna modeli inayohitajika.
- Alama ya "amekosa ziara mbili" pia ni sheria, au kichujio katika jedwali. Hesabu ziara. Hesabu ikiwa mbili au zaidi, weka jina kwenye orodha.
- Chatbot inay "ojibu maswali kuhusu VVU" ingezalisha maandishi mapya. Hiyo ni kazi tofauti, yenye hatari kubwa: ushauri wa afya, data ya watoto ikiwa yeyote aliye chini ya miaka 18 yuko kwenye daftari, na lugha. Si kile wauguzi waliomba.
- Urejeshaji unaweza kusaidia baadaye: mgonjwa akiuliza "nilete nini?", mfumo ungeleta maelekezo ya ukurasa mmoja ya kliniki yenyewe, si kuyaumba.

Bahari Clinic inapaswa kukataa chatbot kwa kazi hii, kuweka vikumbusho vya SMS na orodha ya waliokosa ziara mwezi huu, na kuandika dokezo la ukurasa mmoja kwamba ofa ya mfadhili haikulingana na tatizo. Dokezo hilo ni kazi ya mtaalamu. Kuchagua "AI" kwa sababu waraka wa mkakati upo si hivyo.`
      ),
      quiz(
        "A SACCO board wants to stop members missing loan meetings. Which design fits first?",
        "Bodi ya SACCO inataka kuzuia wanachama kukosa mikutano ya mikopo. Muundo upi unafaa kwanza?",
        [
          "A chatbot that gives financial advice in Sheng, with no human check.",
          "An SMS on the meeting morning plus a spreadsheet of who missed the last two meetings, reviewed by an officer.",
          "A large remote model that scores every member's character.",
          "A system that automatically expels anyone the model flags.",
        ],
        [
          "Chatbot inayotoa ushauri wa fedha kwa Sheng, bila ukaguzi wa mwanadamu.",
          "SMS asubuhi ya mkutano pamoja na jedwali la waliokosa mikutano miwili iliyopita, linalokaguliwa na afisa.",
          "Modeli kubwa ya mbali inayotoa alama ya tabia ya kila mwanachama.",
          "Mfumo unaowafukuza kiotomatiki wote ambao modeli inawaweka alama.",
        ],
        1,
        "The job is attendance, not character scoring. A template message and a counted list are rules and a spreadsheet. A generative assistant and an automatic expulsion add harm without solving the stated problem.",
        "Kazi ni mahudhurio, si kupima tabia. Ujumbe wa kiolezo na orodha iliyohesabiwa ni sheria na jedwali. Msaada unaozalisha maandishi na kufukuza kiotomatiki vinaongeza madhara bila kutatua tatizo lililotajwa."
      ),
      scenario({
        titleEn: "Scenario: the county wants 'an AI'",
        titleSw: "Hali halisi: kaunti inataka 'AI'",
        situationEn:
          "A county director of agriculture asks you to 'put AI on the extension service' before a national visitors' day. Officers already have KALRO leaflets on armyworm and a WhatsApp group. Farmers ask the same ten questions after every briefing.",
        situationSw:
          "Mkurugenzi wa kilimo wa kaunti anakwomba 'weka AI kwenye huduma ya ugani' kabla ya siku ya wageni wa kitaifa. Maafisa tayari wana vijitabu vya KALRO kuhusu viwavijeshi na kundi la WhatsApp. Wakulima huuliza maswali kumi yale yale baada ya kila mafunzo.",
        questionEn: "What should you recommend for the next 90 days?",
        questionSw: "Unapendekeza nini kwa siku 90 zijazo?",
        optionsEn: [
          "Buy a general chatbot immediately so the visitors' day has something to demo.",
          "Write the ten answers as a short retrieval pack from the KALRO leaflets, serve them on the channels officers already use, and keep a person in the loop for anything the pack does not cover.",
          "Hire a team to train a new model from scratch on a specialised computer cluster.",
          "Tell the director that the Kenya AI Strategy forbids anything except chatbots.",
        ],
        optionsSw: [
          "Nunua chatbot ya jumla mara moja ili siku ya wageni iwe na kitu cha kuonyesha.",
          "Andika majibu kumi kama pakiti fupi ya urejeshaji kutoka vijitabu vya KALRO, yatumie kwenye njia ambazo maafisa tayari wanatumia, na uache mtu kwenye mzunguko kwa chochote ambacho pakiti haifunikii.",
          "Aajiri timu ifunze modeli mpya kutoka mwanzo kwenye kundi la kompyuta maalum.",
          "Mwambie mkurugenzi kwamba Mkakati wa AI wa Kenya unakataza kila kitu isipokuwa chatbot.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A demo for visitors is not a specification. You would be buying a kind of system the farmers did not ask for.",
          "Correct. The truth already lives in trusted documents. Retrieval plus a person matches the job. You can still plan a later model if labelled field photos exist.",
          "Training a large model from scratch is not a 90-day county task, and it does not answer the ten repeated questions.",
          "The strategy names agriculture as a priority. It does not require a chatbot, and it does not forbid rules or retrieval.",
        ],
        hintsSw: [
          "Onyesho kwa wageni si maelezo ya kazi. Ungekuwa unanunua aina ya mfumo ambayo wakulima hawakuiomba.",
          "Sahihi. Ukweli tayari upo katika nyaraka zinazoaminika. Urejeshaji pamoja na mtu unaendana na kazi. Bado unaweza kupanga modeli baadaye ikiwa picha za shambani zenye lebo zipo.",
          "Kufunza modeli kubwa kutoka mwanzo si kazi ya kaunti ya siku 90, na haijibu maswali kumi yanayojirudia.",
          "Mkakati unataja kilimo kama kipaumbele. Hauhitaji chatbot, na haukatazi sheria au urejeshaji.",
        ],
        explainEn:
          "Expert work is matching the kind of system to the job. Repeated questions with trusted source documents are a retrieval problem first. A visitors' day is not an evaluation.",
        explainSw:
          "Kazi ya mtaalamu ni kulinganisha aina ya mfumo na kazi. Maswali yanayojirudia yenye nyaraka zinazoaminika ni tatizo la urejeshaji kwanza. Siku ya wageni si tathmini.",
      }),
      note(
        "Try it: name the system before you name the vendor",
        "Jaribu: taja aina ya mfumo kabla ya taja muuzaji",
        `Take a real request from your workplace or a fictional one you know well. Write four lines:

1. The job in one sentence (input, output, who acts, what happens when it is wrong).
2. Which of the five kinds of system should do the core of that job, and why the other four are worse.
3. What you would still keep as a person-plus-spreadsheet even if a model is added later.
4. One sentence you would say to a director who says "just add AI".

Carry forward:
- Kind of system is a specification decision, not a branding decision.
- Unit 2 asks where the chosen system should run: a small local model, a large remote one, or no model at all.`,
        `Chukua ombi halisi kutoka kazini kwako au la kubuni unalolijua vizuri. Andika mistari minne:

1. Kazi kwa sentensi moja (ingizo, tokeo, nani anafanya, nini hutokea kunapokuwa na kosa).
2. Ni aina ipi kati ya tano inayostahili kufanya kiini cha kazi hiyo, na kwa nini nne nyingine ni mbaya zaidi.
3. Ungeendelea kuweka nini kama mtu-na-jedwali hata modeli ikiongezwa baadaye.
4. Sentensi moja unayoweza kumwambia mkurugenzi anayesema "ongeza AI tu".

Kumbuka:
- Aina ya mfumo ni uamuzi wa maelezo ya kazi, si uamuzi wa chapa.
- Somo la 2 linauliza mfumo uliochaguliwa uendeshwe wapi: modeli ndogo ya ndani, kubwa ya mbali, au bila modeli kabisa.`
      ),
    ],
  },
  {
    id: "m0-a-u2",
    titleEn: "Small local models versus large remote ones",
    titleSw: "Modeli ndogo za ndani dhidi ya kubwa za mbali",
    cards: [
      note(
        "Where the computer lives decides cost, data and downtime",
        "Mahali kompyuta ilipo huamua gharama, data na kukatika",
        `Once you have chosen a kind of system that actually needs a model, you still have to choose where it runs.

A large remote model lives in a data centre, often outside Kenya. You send a question over the network. Specialised chips (GPUs) do the work. You usually pay per question or per month. The answer can be fluent. The bill, the delay, and the data path are not under your roof.

A small local or specialised model lives closer to the work: on a clinic laptop, a phone, a county server, or a vendor machine in Nairobi. It is trained or adapted for a narrow job (this crop, this form, this language pair). It cannot discuss every topic. It can often run when the mast is down.

Four questions decide the split. Write them on the specification, not on a slide.

- Cost. What is the year-two bill if every CHP, teacher or teller uses it daily? A remote model that looks free in a pilot can become a line item the county cannot pay. A small model has an upfront cost (a machine, a licence, someone's time) and a lower per-use cost.
- Data path. Does a patient's note, a pupil's essay, or a member's loan history leave Kenya when someone presses send? The Data Protection Act, 2019 treats personal data leaving the country as a transfer that needs a lawful basis and safeguards. "The vendor's cloud is convenient" is not a basis.
- Offline work. A farm in Trans Nzoia and a dispensary in Turkana do not have the network of a Westlands demo. Agrika is a Kenya-built example of photo-based crop-disease tools designed to work with offline-capable models, not only while a visitor's phone has full bars.
- Specialisation. A model that only classifies maize-leaf photos can beat a general remote assistant on that one job, using less power and no open-ended chatter. FarmerAI (Safaricom and Opportunity International, announced 6 February 2025) reaches smallholders through DigiFarm, SMS and WhatsApp for weather, fertiliser, pests and prices — channels that already work in the field, rather than a data-centre demo.

You may still use a large remote model for drafting in the office, with no personal data in the prompt. You should not use it as the only engine of a clinic, exam office or loan desk unless you have answered cost, data path, offline use and specialisation in writing.

Compute, briefly: GPUs are expensive to buy and to rent. Most Kenyan organisations will never train a huge model from scratch. They will buy inference (answers) or adapt a smaller model. Your expert skill is choosing that shape, not running a training cluster.`,
        `Ukishachagua aina ya mfumo inayohitaji modeli, bado unapaswa kuchagua inakoendeshwa.

Modeli kubwa ya mbali inaishi katika kituo cha data, mara nyingi nje ya Kenya. Unatuma swali kupitia mtandao. Chipsi maalum (GPU) ndizo zinazofanya kazi. Kwa kawaida unalipa kwa kila swali au kwa mwezi. Jibu linaweza kuwa laini. Bili, ucheleweshaji, na njia ya data si chini ya paa lako.

Modeli ndogo ya ndani au maalum inaishi karibu na kazi: kwenye kompyuta ndogo ya kliniki, simu, seva ya kaunti, au mashine ya muuzaji Nairobi. Imefunzwa au kurekebishwa kwa kazi nyembamba (zao hili, fomu hii, jozi hii ya lugha). Haiwezi kujadili kila mada. Mara nyingi inaweza kuendesha mnara ukiwa umezima.

Maswali manne yanaamua mgawanyo. Yaandike kwenye maelezo ya kazi, si kwenye slaidi.

- Gharama. Bili ya mwaka wa pili ni nini kila CHP, mwalimu au karani akitumia kila siku? Modeli ya mbali inayoonekana bure kwenye majaribio inaweza kuwa kipengele kaunti haiwezi kulipa. Modeli ndogo ina gharama ya awali (mashine, leseni, muda wa mtu) na gharama ndogo kwa kila matumizi.
- Njia ya data. Je, dokezo la mgonjwa, insha ya mwanafunzi, au historia ya mkopo ya mwanachama inaondoka Kenya mtu anapobonyeza tuma? Sheria ya Ulinzi wa Data, 2019 inachukulia data binafsi inayoondoka nchini kama uhamisho unaohitaji msingi halali na ulinzi. "Wingu la muuzaji ni rahisi" si msingi.
- Kazi bila mtandao. Shamba Trans Nzoia na zahanati Turkana hazina mtandao wa onyesho la Westlands. Agrika ni mfano uliojengwa Kenya wa zana za magonjwa ya mazao kwa picha zilizopangwa kufanya kazi na modeli zinazoweza kutumika bila mtandao, si tu simu ya mgeni ikiwa na mtandao mzuri.
- Umaalumu. Modeli inayopanga picha za majani ya mahindi tu inaweza kushinda msaada mkubwa wa mbali kwenye kazi hiyo moja, kwa nishati ndogo na bila mazungumzo yasiyo na kikomo. FarmerAI (Safaricom na Opportunity International, iliyotangazwa 6 Februari 2025) inawafikia wakulima wadogo kupitia DigiFarm, SMS na WhatsApp kwa hali ya hewa, mbolea, wadudu na bei — njia ambazo tayari zinafanya kazi shambani, si onyesho la kituo cha data.

Bado unaweza kutumia modeli kubwa ya mbali kuandaa rasimu ofisini, bila data binafsi kwenye prompt. Usingeitumia kama injini pekee ya kliniki, ofisi ya mitihani au dawati la mikopo hadi umejibu gharama, njia ya data, matumizi bila mtandao na umaalumu kwa maandishi.

Kuhusu compute, kwa ufupi: GPU ni ghali kununua na kukodi. Mashirika mengi Kenya hayatowahi kufunza modeli kubwa kutoka mwanzo. Yatanunua majibu (inference) au kurekebisha modeli ndogo. Ujuzi wako wa mtaalamu ni kuchagua umbo hilo, si kuendesha kundi la mafunzo.`
      ),
      reveal([
        {
          termEn: "Remote inference",
          termSw: "Utabiri wa mbali (inference)",
          defEn: "Sending a question to a model that runs in someone else's data centre and getting an answer back.",
          defSw: "Kutuma swali kwa modeli inayoendeshwa katika kituo cha data cha mtu mwingine na kupata jibu.",
        },
        {
          termEn: "On-device / local model",
          termSw: "Modeli kwenye kifaa / ya ndani",
          defEn: "A model that runs on a phone, laptop or local server, so work can continue with a weak network.",
          defSw: "Modeli inayoendeshwa kwenye simu, kompyuta ndogo au seva ya ndani, ili kazi iendelee mtandao ukiwa dhaifu.",
        },
        {
          termEn: "Specialised model",
          termSw: "Modeli maalum",
          defEn: "A model built or adapted for one job (one crop, one form, one language pair), not for every topic.",
          defSw: "Modeli iliyojengwa au kurekebishwa kwa kazi moja (zao moja, fomu moja, jozi moja ya lugha), si kwa kila mada.",
        },
        {
          termEn: "Cross-border transfer",
          termSw: "Uhamisho kuvuka mpaka",
          defEn: "Personal data leaving Kenya. The Data Protection Act, 2019 requires a lawful basis and safeguards, not convenience alone.",
          defSw: "Data binafsi inayoondoka Kenya. Sheria ya Ulinzi wa Data, 2019 inahitaji msingi halali na ulinzi, si urahisi peke yake.",
        },
        {
          termEn: "Year-two cost",
          termSw: "Gharama ya mwaka wa pili",
          defEn: "What you will pay when the pilot gift ends and every staff member uses the tool daily.",
          defSw: "Utakalolipa zawadi ya majaribio ikishaisha na kila mfanyakazi akitumia zana kila siku.",
        },
      ]),
      note(
        "Worked example: a CHP kit in West Pokot",
        "Mfano kamili: kifurushi cha CHP West Pokot",
        `Imagine Kacheliba Ward, a fictional community health unit. Twelve CHPs walk long distances with paper registers. A vendor demos a large remote assistant that "talks like a doctor" on a projector in Kapenguria. The signal in the demo room is strong. Two of the twelve CHPs have smartphones that drop to 2G after the river.

Specify the real constraints: many households are offline during the visit; notes include children's ages and symptoms; the CHP must not wait for a spinner; year-two airtime and API bills must fit a ward budget.

A responsible design for this kit is mixed, not "all remote" or "all local":

- Data capture is offline-first on the phone: tick boxes and short text, stored on the device, synced when the CHP reaches a mast. No personal notes are typed into a foreign chatbot.
- If a model is used at all for "which households to visit first", it should be a small specialised ranking model that can run on the phone or a county server, trained on the unit's own (lawful) visit history — and a person still decides the route.
- A large remote model, if used at all, stays in the office for drafting health-education posters in Kiswahili, using no names.

M-Kliniki Nia is a real Kenyan health assistant designed to work in English and Kiswahili and to sit with telemedicine and M-Pesa rails. Use it as a reminder that health tools must fit language and payment systems people already have — not as a licence to paste a CHP register into any remote box.

The handover sentence for the county health management team: "We declined the projector demo as the production system because it fails the offline and data-path tests. We specified offline capture plus optional on-device ranking, with office-only drafting."`,
        `Fikiria Wadi ya Kacheliba, kitengo cha afya ya jamii cha kubuni. CHP kumi na wawili hutembea umbali mrefu na daftari za karatasi. Muuzaji anaonyesha msaada mkubwa wa mbali "unaoongea kama daktari" kwenye projekta Kapenguria. Mawimbi katika chumba cha onyesho ni mazuri. Wawili kati ya kumi na wawili wana simu mahiri zinazoshuka 2G baada ya mto.

Eleza vikwazo halisi: kaya nyingi hazina mtandao wakati wa ziara; dokezo zinajumuisha umri na dalili za watoto; CHP hapaswi kusubiri spinner; bili za mwaka wa pili za airtime na API lazima zitoshe bajeti ya wadi.

Muundo unaowajibika kwa kifurushi hiki ni mchanganyiko, si "mbali yote" wala "ndani yote":

- Ukusanyaji wa data ni offline-first kwenye simu: visanduku vya alama na maandishi mafupi, kwenye kifaa, vinasawazishwa CHP anapofika mnara. Hakuna dokezo binafsi vinavyochapishwa kwenye chatbot ya nje.
- Ikiwa modeli itatumika kabisa kwa "ni kaya zipi za kutembelea kwanza", iwe modeli ndogo maalum ya kupanga inayoweza kuendeshwa kwenye simu au seva ya kaunti, iliyofunzwa kwa historia halali ya ziara za kitengo — na mtu bado anaamua njia.
- Modeli kubwa ya mbali, ikitumika, inabaki ofisini kuandaa mabango ya elimu ya afya kwa Kiswahili, bila majina.

M-Kliniki Nia ni msaada halisi wa afya wa Kenya uliopangwa kufanya kazi kwa Kiingereza na Kiswahili na kukaa pamoja na telemedicine na njia za M-Pesa. Uitumie kama kikumbusho kwamba zana za afya lazima zilingane na lugha na malipo ambayo watu tayari wanayo — si kama leseni ya kubandika daftari la CHP kwenye kisanduku chochote cha mbali.

Sentensi ya kukabidhi kwa timu ya usimamizi wa afya ya kaunti: "Tulikataa onyesho la projekta kama mfumo wa kazi kwa sababu linashindwa majaribio ya kutokuwa na mtandao na njia ya data. Tulieleza ukusanyaji wa offline pamoja na upangaji wa hiari kwenye kifaa, na uandaaji rasimu ofisini tu."`
      ),
      quiz(
        "A clinic wants leaf-style photo checks for a skin-clinic triage photo. Network is intermittent. What is the sound default?",
        "Kliniki inataka ukaguzi wa picha kwa triage. Mtandao unakatika. Chaguo-msingi sahihi ni lipi?",
        [
          "Send every photo to a large remote model so the answer is 'smarter'.",
          "Prefer on-device or local inference, store photos under a retention rule, and keep a clinician as the decision-maker.",
          "Print the photos and post them on the staff WhatsApp group with names.",
          "Wait until the county buys a GPU cluster and trains a frontier model.",
        ],
        [
          "Tuma kila picha kwa modeli kubwa ya mbali ili jibu liwe 'la akili zaidi'.",
          "Pendelea utabiri kwenye kifaa au wa ndani, hifadhi picha chini ya kanuni ya uhifadhi, na muache daktari ndiye aamue.",
          "Chapisha picha na uzibanike kwenye kundi la WhatsApp la wafanyakazi pamoja na majina.",
          "Subiri kaunti inunue kundi la GPU na ifunze modeli ya mbele.",
        ],
        1,
        "Intermittent network plus health photos means data path and downtime dominate. Local inference and a human decision match the constraints. WhatsApp-with-names is a leak. A training cluster is not a clinic procurement.",
        "Mtandao unaokatika pamoja na picha za afya unamaanisha njia ya data na kukatika ndivyo vinavyotawala. Utabiri wa ndani na uamuzi wa mwanadamu vinaendana na vikwazo. WhatsApp-na-majina ni uvujaji. Kundi la mafunzo si ununuzi wa kliniki."
      ),
      scenario({
        titleEn: "Scenario: the free pilot in the boardroom",
        titleSw: "Hali halisi: majaribio ya bure katika bodi",
        situationEn:
          "A vendor offers Umoja Dairy, a fictional co-operative in Nyandarua, three months of a large remote assistant 'free'. It would read members' delivery SMS and draft replies. After month three, billing is per message. Milk collection happens at 5 a.m. in areas with weak signal.",
        situationSw:
          "Muuzaji anapa Umoja Dairy, ushirika wa kubuni Nyandarua, miezi mitatu ya msaada mkubwa wa mbali 'bure'. Ungesoma SMS za uwasilishaji wa wanachama na kuandaa majibu. Baada ya mwezi wa tatu, malipo ni kwa kila ujumbe. Ukusanyaji wa maziwa hufanyika saa kumi na moja asubuhi katika maeneo yenye mawimbi dhaifu.",
        questionEn: "What should the co-operative write in the specification?",
        questionSw: "Ushirika uandike nini katika maelezo ya kazi?",
        optionsEn: [
          "Accept the free months; year-two cost can be discussed later if farmers like the replies.",
          "Refuse any tool that reads member SMS until data location, year-two cost, offline collection hours, and a local or template-based alternative are written down.",
          "Train a huge model on GPUs this week so data never leaves.",
          "Put every member's national ID in the prompt so replies feel personal.",
        ],
        optionsSw: [
          "Kubali miezi ya bure; gharama ya mwaka wa pili inaweza kujadiliwa baadaye wakulima wakipenda majibu.",
          "Kataa zana yoyote inayosoma SMS za wanachama hadi mahali pa data, gharama ya mwaka wa pili, saa za ukusanyaji bila mtandao, na mbadala wa ndani au wa kiolezo viandikwe.",
          "Funza modeli kubwa kwenye GPU wiki hii ili data isiondoke kamwe.",
          "Weka kitambulisho cha kila mwanachama kwenye prompt ili majibu yahisi ya kibinafsi.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A gift that creates a habit is how year-two bills arrive. Liking fluent replies is not an evaluation of cost or data path.",
          "Correct. Specification before pilot. SMS is personal data; 5 a.m. collection fails a remote-only design; IDs in prompts make it worse.",
          "You do not spin up a training cluster to avoid a contract question. Template SMS or a small local tool may be enough.",
          "Personal identifiers in prompts increase harm if the remote system stores or leaks them. Personalisation is not an ID dump.",
        ],
        hintsSw: [
          "Zawadi inayounda desturi ndiyo njia bili za mwaka wa pili zinavyofika. Kupenda majibu laini si tathmini ya gharama au njia ya data.",
          "Sahihi. Maelezo ya kazi kabla ya majaribio. SMS ni data binafsi; ukusanyaji saa kumi na moja asubuhi unashindwa muundo wa mbali pekee; vitambulisho kwenye prompt vinafanya kuwa mbaya zaidi.",
          "Huendi kundi la mafunzo ili kuepuka swali la mkataba. SMS za kiolezo au zana ndogo ya ndani zinaweza kutoshana.",
          "Vitambulisho binafsi kwenye prompt vinaongeza madhara mfumo wa mbali ukihifadhi au kuvuja. Kubinafsisha si kumpa kitambulisho.",
        ],
        explainEn:
          "Free remote inference is a pricing shape, not a gift. For field hours and member messages, local templates or a small specialised tool usually beat a large remote model.",
        explainSw:
          "Utabiri wa mbali wa bure ni umbo la bei, si zawadi. Kwa saa za shambani na ujumbe wa wanachama, violezo vya ndani au zana ndogo maalum huwa bora kuliko modeli kubwa ya mbali.",
      }),
      note(
        "Try it: four-line placement memo",
        "Jaribu: dokezo la mistari minne kuhusu mahali",
        `Pick one tool your organisation uses or is being offered. Write:

- Cost: who pays in month 13, and for what unit (per SMS, per photo, per staff seat)?
- Data path: does any name, phone, photo, mark, or health note leave Kenya?
- Offline: what happens at 5 a.m. or in a ward with 2G?
- Specialisation: is this job narrow enough for a small local model or a template?

Carry forward:
- Placement is part of the specification: local, remote, or mixed.
- Unit 3 covers how you adapt a chosen model: prompting, retrieval, or fine-tuning — in that order of cost and risk.`,
        `Chagua zana moja ambayo shirika lako linatumia au inayotolewa. Andika:

- Gharama: nani analipa mwezi wa 13, na kwa kipimo gani (kwa SMS, kwa picha, kwa kiti cha mfanyakazi)?
- Njia ya data: je, jina, simu, picha, alama, au dokezo la afya linaondoka Kenya?
- Bila mtandao: nini hutokea saa kumi na moja asubuhi au katika wadi yenye 2G?
- Umaalumu: je, kazi hii ni nyembamba vya kutosha kwa modeli ndogo ya ndani au kiolezo?

Kumbuka:
- Mahali pa kuendesha ni sehemu ya maelezo ya kazi: ndani, mbali, au mchanganyiko.
- Somo la 3 linaeleza jinsi unavyorekebisha modeli iliyochaguliwa: prompt, urejeshaji, au fine-tuning — kwa mpangilio huo wa gharama na hatari.`
      ),
    ],
  },
  {
    id: "m0-a-u3",
    titleEn: "Prompting, retrieval, and fine-tuning",
    titleSw: "Prompt, urejeshaji, na urekebishaji wa modeli",
    cards: [
      note(
        "Three tools, one order of try-first",
        "Zana tatu, mpangilio mmoja wa kujaribu kwanza",
        `When people say they need to "train the AI", they often need something cheaper and safer. You already know a model stores a pattern. This unit is about three ways to get useful behaviour out of a language model without pretending you are a data centre.

Prompting. You write instructions and examples in the request itself: who the assistant is, what it must not do, the format of the answer, and a few samples. The model's stored weights do not change. You can improve a prompt in an afternoon. You cannot make a prompt contain a 200-page PCPB register. You also cannot stop the model inventing a product that is not in the prompt.

Retrieval. You keep the source of truth in your documents. At question time, the system finds the relevant passages (a KALRO leaflet section, a clinic protocol, a SACCO by-law) and pastes them into the prompt, then asks the model to answer only from those passages. If the passage is missing, the system must say "not in our documents" instead of sounding helpful. Retrieval is how FarmerAI-style agronomy advice stays tied to local guidance rather than to whatever a general model once read on the open internet. Agrika's lookup of PCPB-registered products is the same idea in a shop: the register is the truth, the model is not.

Fine-tuning. You take a base model and continue training it on your labelled examples so its default behaviour shifts: it always outputs your form, it prefers your Kiswahili register, it classifies your ticket types. Fine-tuning needs a clean set of examples, a held-out test (unit 5), a place to run the new model, and a way to roll back (unit 11). It is the right tool when the task is narrow and frequent, prompting is not stable, and retrieval has nothing to fetch because the skill is a format or a classification, not a fact in a PDF.

Try them in this order: prompt, then retrieval, then fine-tune. That order is cost, time, and risk. Fine-tuning is not a prize. It is a commitment to data rights (unit 4), evaluation (unit 5), and operations (unit 11).

A fourth option remains from unit 1: do not use a language model. A drop-down of PCPB products in a spreadsheet may beat all three.`,
        `Watu wakisema wanahitaji "kufunza AI", mara nyingi wanahitaji kitu cha bei nafuu na salama zaidi. Tayari unajua modeli inahifadhi ruwaza. Somo hili linahusu njia tatu za kupata tabia yenye manufaa kutoka kwa modeli ya lugha bila kujifanya wewe ni kituo cha data.

Prompt. Unaandika maelekezo na mifano ndani ya ombi lenyewe: msaada ni nani, asichofanya, muundo wa jibu, na sampuli chache. Uzito uliohifadhiwa wa modeli haubadiliki. Unaweza kuboresha prompt mchana mmoja. Huwezi kufanya prompt iwe na daftari la kurasa 200 la PCPB. Pia huwezi kuzuia modeli kuumba bidhaa ambayo haiko kwenye prompt.

Urejeshaji. Unahifadhi chanzo cha ukweli katika nyaraka zako. Wakati wa swali, mfumo unapata vifungu husika (sehemu ya kijitabu cha KALRO, itifaki ya kliniki, kanuni za SACCO) na kuvipachika kwenye prompt, kisha inaomba modeli ijibu kutoka vifungu hivyo tu. Kifungu kikikosekana, mfumo lazima useme "haiko kwenye nyaraka zetu" badala ya kuonekana msaada. Urejeshaji ndiyo jinsi ushauri wa kilimo wa mtindo wa FarmerAI unavyobaki umefungwa na mwongozo wa ndani badala ya kile modeli ya jumla iliwahi kusoma mtandaoni. Utafutaji wa Agrika wa bidhaa zilizosajiliwa na PCPB ni wazo lilelile dukani: daftari ndilo ukweli, modeli si hivyo.

Urekebishaji wa modeli (fine-tuning). Unachukua modeli msingi na kuendelea kuifunza kwa mifano yako yenye lebo ili tabia yake ya kawaida ibadilike: inatoa fomu yako kila mara, inapendelea Kiswahili chako, inaainisha aina za tiketi zako. Fine-tuning inahitaji seti safi ya mifano, jaribio lililowekwa kando (somo la 5), mahali pa kuendesha modeli mpya, na njia ya kurudi nyuma (somo la 11). Ni zana sahihi kazi ikiwa nyembamba na ya mara kwa mara, prompt isipokuwa imara, na urejeshaji usipokuwa na kitu cha kuleta kwa sababu ujuzi ni muundo au uainishaji, si ukweli katika PDF.

Zijaribu kwa mpangilio huu: prompt, kisha urejeshaji, kisha fine-tune. Mpangilio huo ni gharama, muda, na hatari. Fine-tuning si tuzo. Ni ahadi ya haki za data (somo la 4), tathmini (somo la 5), na uendeshaji (somo la 11).

Chaguo la nne linabaki kutoka somo la 1: usitumie modeli ya lugha. Orodha ya kushuka ya bidhaa za PCPB kwenye jedwali inaweza kushinda zote tatu.`
      ),
      reveal([
        {
          termEn: "Prompting",
          termSw: "Prompt",
          defEn: "Steering a model with instructions and examples in the request. Weights do not change. Fast to try, easy to outgrow.",
          defSw: "Kuongoza modeli kwa maelekezo na mifano katika ombi. Uzito haubadiliki. Haraka kujaribu, rahisi kuizidi.",
        },
        {
          termEn: "Retrieval",
          termSw: "Urejeshaji",
          defEn: "Fetching trusted passages at question time and requiring the model to answer from them, or admit they are missing.",
          defSw: "Kuleta vifungu vinavyoaminika wakati wa swali na kuhitaji modeli ijibu kutoka hivyo, au ikubali havipo.",
        },
        {
          termEn: "Fine-tuning",
          termSw: "Urekebishaji wa modeli (fine-tuning)",
          defEn: "Further training a base model on your labelled examples so its default behaviour changes. Needs tests and rollback.",
          defSw: "Kuendelea kufunza modeli msingi kwa mifano yako yenye lebo ili tabia yake ya kawaida ibadilike. Inahitaji majaribio na kurudi nyuma.",
        },
        {
          termEn: "Source of truth",
          termSw: "Chanzo cha ukweli",
          defEn: "The document or register you will stand behind in a meeting (KALRO, PCPB, your by-laws) — not the model's fluency.",
          defSw: "Waraka au daftari ambalo utasimama nalo katika mkutano (KALRO, PCPB, kanuni zenu) — si ulaini wa modeli.",
        },
        {
          termEn: "Abstain",
          termSw: "Kukataa kujibu",
          defEn: "The required behaviour when retrieval finds nothing: say so, do not invent.",
          defSw: "Tabia inayohitajika urejeshaji usipopata kitu: sema hivyo, usiumbe.",
        },
      ]),
      note(
        "Worked example: Baraka Agrovet in Eldoret",
        "Mfano kamili: Baraka Agrovet Eldoret",
        `Baraka Agrovet is fictional. Counter staff are asked, many times a day, "Is this spray registered, and what is on the label?" A well-meaning owner pastes a prompt into a large remote assistant: "You are an expert agronomist. Recommend a chemical for this pest." The assistant names products with confidence. Some names are not on the PCPB register the shop is allowed to sell.

Specify the job again: "Given a pest name and a crop, show the matching PCPB-registered products this shop stocks, quote the label warnings, and refuse if nothing matches."

- Prompting alone fails: the model will fill gaps. A better prompt can require "only from the list below", but the list will not fit, and it will go stale when stock changes.
- Retrieval (or a plain database search) fits. The source of truth is the shop's stock file joined to PCPB-registered products. The assistant, if used, must quote the fetched row or say "we do not stock a registered match; ask the agronomist."
- Fine-tuning does not fix a missing register. It might later help classify blurry label photos into product codes, after a held-out set of Kenyan photos exists. That is a different job.

Agrika, a Kenya-built tool, combines photo-based disease detection with agrovet stock search tied to PCPB-registered products and M-Pesa checkout. The lesson for your spec is the join: vision or chat is not the product; the regulated register and the payment rail are.

Handover line: "We will not ship a free-text chemical recommender. We will ship lookup against the register, with a person for no-match cases."`,
        `Baraka Agrovet ni ya kubuni. Wafanyakazi wa kaunta wanaulizwa, mara nyingi kwa siku, "Je, dawa hii imesajiliwa, na lebo inasema nini?" Mwenye duka mwenye nia nzuri anapachika prompt kwenye msaada mkubwa wa mbali: "Wewe ni mtaalamu wa kilimo. Pendekeza kemikali kwa wadudu huyu." Msaada unataja bidhaa kwa uhakika. Baadhi ya majina hayako kwenye daftari la PCPB ambalo duka linaruhusiwa kuuza.

Eleza kazi tena: "Ukipewa jina la wadudu na zao, onyesha bidhaa zilizosajiliwa na PCPB ambazo duka hili lina, nukuu maonyo ya lebo, na kataa kama hakuna inayolingana."

- Prompt peke yake inashindwa: modeli itajaza pengo. Prompt bora inaweza kuhitaji "kutoka orodha iliyo hapa chini tu", lakini orodha haitatosha, na itapitwa na wakati hisa inapobadilika.
- Urejeshaji (au utafutaji wa kawaida wa hifadhidata) unafaa. Chanzo cha ukweli ni faili ya hisa ya duka iliyounganishwa na bidhaa zilizosajiliwa na PCPB. Msaada, ukitumiwa, lazima unukuu mstari ulioletwa au useme "hatuna mechi iliyosajiliwa; uliza mtaalamu wa kilimo."
- Fine-tuning haitengenezi daftari linalokosekana. Baadaye inaweza kusaidia kuainisha picha ficahari za lebo kuwa misimbo ya bidhaa, baada ya seti ya picha za Kenya iliyowekwa kando kuwepo. Hiyo ni kazi tofauti.

Agrika, zana iliyojengwa Kenya, inaunganisha utambuzi wa magonjwa kwa picha na utafutaji wa hisa za agrovet uliofungwa na bidhaa zilizosajiliwa na PCPB na malipo ya M-Pesa. Funzo kwa maelezo yako ni muunganisho: maono au gumzo si bidhaa; daftari linalodhibitiwa na njia ya malipo ndivyo.

Mstari wa kukabidhi: "Hatutatuma mpendekezaji wa kemikali wa maandishi huru. Tutatuma utafutaji dhidi ya daftari, pamoja na mtu kwa kesi zisizo na mechi."`
      ),
      quiz(
        "A county wants a bot that quotes its own bursary policy. Staff keep catching invented clauses. What should you do first?",
        "Kaunti inataka bot inayonukuu sera yake ya bursary. Wafanyakazi wanaendelea kupata vifungu vilivyoumbwa. Unafanya nini kwanza?",
        [
          "Fine-tune immediately on last year's emails.",
          "Put the approved policy into retrieval, require answers only from fetched passages, and log abstentions.",
          "Add the words 'be accurate' to the prompt and ship.",
          "Let the bot pay bursaries directly through M-Pesa so speed improves.",
        ],
        [
          "Fanya fine-tune mara moja kwa barua pepe za mwaka jana.",
          "Weka sera iliyoidhinishwa kwenye urejeshaji, hitaji majibu kutoka vifungu vilivyoletwa tu, na rekodi pale inapokataa kujibu.",
          "Ongeza maneno 'kuwa sahihi' kwenye prompt na uzindue.",
          "Acha bot ilipe bursary moja kwa moja kupitia M-Pesa ili kasi iongezeke.",
        ],
        1,
        "Invented clauses mean the source of truth is not in the loop. Retrieval plus abstain is the fix. Fine-tuning on emails can bake in old mistakes. 'Be accurate' does not attach a document. Paying through M-Pesa would automate harm.",
        "Vifungu vilivyoumbwa vinaonyesha chanzo cha ukweli si katika mzunguko. Urejeshaji pamoja na kukataa kujibu ndiyo marekebisho. Fine-tuning kwa barua pepe inaweza kuganda makosa ya zamani. 'Kuwa sahihi' haiambatanishi waraka. Kulipa kupitia M-Pesa kungeongeza madhara kiotomatiki."
      ),
      scenario({
        titleEn: "Scenario: 'just fine-tune it'",
        titleSw: "Hali halisi: 'fanya fine-tune tu'",
        situationEn:
          "A school wants a homework explainer aligned to CBC. A vendor says the only professional path is fine-tuning a large model on pupils' past essays. Teachers have a folder of approved notes. Some pupils are under 18.",
        situationSw:
          "Shule inataka kielelezo cha kazi za nyumbani kinacholingana na CBC. Muuzaji anasema njia pekee ya kitaalamu ni fine-tuning ya modeli kubwa kwa insha za zamani za wanafunzi. Walimu wana folda ya dokezo yaliyoidhinishwa. Baadhi ya wanafunzi wana umri chini ya miaka 18.",
        questionEn: "What is the expert recommendation?",
        questionSw: "Pendekezo la mtaalamu ni lipi?",
        optionsEn: [
          "Fine-tune on the essays this week so the bot 'sounds like our pupils'.",
          "Start with prompting plus retrieval over the approved teacher notes; do not put children's essays into a training set until lawful basis, guardian consent where required, and a held-out evaluation exist — and maybe never, if retrieval is enough.",
          "Upload the essays to any remote model because CBC requires AI.",
          "Skip documents; a general chatbot already knows the Kenyan curriculum.",
        ],
        optionsSw: [
          "Fanya fine-tune kwa insha wiki hii ili bot 'iongee kama wanafunzi wetu'.",
          "Anza na prompt pamoja na urejeshaji juu ya dokezo yaliyoidhinishwa ya walimu; usiweke insha za watoto kwenye seti ya mafunzo hadi msingi halali, ridhaa ya mlezi inapohitajika, na tathmini iliyowekwa kando viwepo — na labda kamwe, urejeshaji ukitosha.",
          "Pakia insha kwenye modeli yoyote ya mbali kwa sababu CBC inahitaji AI.",
          "Ruka nyaraka; chatbot ya jumla tayari inajua mtaala wa Kenya.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Children's essays are children's data. Fine-tuning as a first move mixes rights, evaluation and vanity. 'Sounds like our pupils' is not a learning outcome.",
          "Correct. Order of try-first, plus unit 4 constraints. UNESCO's 2024 AI competency frameworks for teachers and students are orientation for what people should learn to do with AI — they are not a requirement to train on pupil work.",
          "CBC is a curriculum. It does not authorise uploading minors' work to a remote model.",
          "A general model is not your scheme of work. Retrieval over approved notes is how you stay aligned.",
        ],
        hintsSw: [
          "Insha za watoto ni data ya watoto. Fine-tuning kama hatua ya kwanza inachanganya haki, tathmini na majivuno. 'Kuongea kama wanafunzi wetu' si tokeo la kujifunza.",
          "Sahihi. Mpangilio wa kujaribu kwanza, pamoja na vikwazo vya somo la 4. Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi ni mwongozo wa kile watu wanapaswa kujifunza kufanya na AI — si sharti la kufunza kwa kazi ya wanafunzi.",
          "CBC ni mtaala. Hauruhusu kupakia kazi ya watoto kwenye modeli ya mbali.",
          "Modeli ya jumla si mpango wenu wa kazi. Urejeshaji juu ya dokezo yaliyoidhinishwa ndiyo njia ya kubaki sawa.",
        ],
        explainEn:
          "Fine-tuning is last, not first, and children's work is a data-rights problem before it is a modelling problem. Approved notes plus retrieval usually meet a CBC explainer job.",
        explainSw:
          "Fine-tuning ni ya mwisho, si ya kwanza, na kazi ya watoto ni tatizo la haki za data kabla ya kuwa tatizo la modeli. Dokezo yaliyoidhinishwa pamoja na urejeshaji mara nyingi yanatosheleza kazi ya kielelezo cha CBC.",
      }),
      note(
        "Try it: pick the cheapest tool that can be true",
        "Jaribu: chagua zana ya bei nafuu zaidi inayoweza kuwa kweli",
        `Write three columns on paper: Prompt / Retrieval / Fine-tune. For each job below, tick one column and one sentence of why.

- Quote the clinic's own opening hours.
- Classify 8,000 agrovet tickets into five stock categories, daily, in a fixed format.
- Draft a polite Kiswahili SMS from a template the SACCO already approved.
- Recommend a pesticide.

Carry forward:
- Prompt, retrieve, then fine-tune. Facts live in documents you control.
- Unit 4: none of these tools is lawful until consent, purpose, retention and children's data are specified.`,
        `Andika safu tatu kwenye karatasi: Prompt / Urejeshaji / Fine-tune. Kwa kila kazi hapa chini, tiki safu moja na sentensi moja ya sababu.

- Nukuu saa za kufungua za kliniki yenyewe.
- Ainisha tiketi 8,000 za agrovet katika makundi matano ya hisa, kila siku, kwa muundo maalum.
- Andaa SMS ya Kiswahili ya adabu kutoka kiolezo SACCO iliyoidhinisha tayari.
- Pendekeza dawa ya wadudu.

Kumbuka:
- Prompt, rejelea, kisha fine-tune. Ukweli unaishi katika nyaraka mnazodhibiti.
- Somo la 4: hakuna kati ya zana hizi iliyo halali hadi ridhaa, madhumuni, uhifadhi na data ya watoto vielezwe.`
      ),
    ],
  },
  {
    id: "m0-a-u4",
    titleEn: "Data rights in practice",
    titleSw: "Haki za data katika kazi halisi",
    cards: [
      note(
        "The Data Protection Act is a specification constraint",
        "Sheria ya Ulinzi wa Data ni kikwazo cha maelezo ya kazi",
        `You cannot specify an AI system for a Kenyan organisation without specifying data rights. The Data Protection Act, 2019 is the statute. The Office of the Data Protection Commissioner (ODPC) is the regulator. This unit is not legal advice and not a compliance certificate. It is the set of questions an expert must write into a one-page spec and then take to counsel.

Four duties show up in almost every AI pilot.

Consent. People must know what you collect, why, and who else will see it, in a language they use. They must be able to say no without losing a service they are entitled to, unless another lawful basis really applies and you can name it. A chief, a headteacher, or a SACCO chair cannot consent for every adult in the room. Consent can be withdrawn; your spec must say how.

Purpose limitation. You collected clinic visit dates to remind patients. You do not get to reuse them to train a marketing chatbot, or to score who is "difficult". If you want a new purpose, you go back to the people or you stop. Vendors love "we'll also use it to improve the model". That sentence is a new purpose. Write it down or strike it out.

Retention. How long do logs, prompts, photos and scores live? "Forever, in case we need it" fails this duty. Write a period, a responsible owner, and a deletion method. If a vendor stores prompts on servers abroad, retention is no longer only your filing cabinet.

Children's data. Anyone under 18 needs extra care. School homework tools, clinic registers, and CBC classroom assistants often process children's data. You need an appropriate lawful basis, guardian involvement where required, data minimisation (do not collect location, photos or full names if a class code will do), and a design that does not put a child's essay into a remote model "for fine-tuning". UNESCO's 2024 AI competency frameworks for teachers and for students are orientation for what people should learn about AI in education. They are not a quote you can paste as permission to process pupil files.

Also write: who is the data controller (usually the school, county, SACCO or clinic, not "the app"); who is a processor (the vendor); whether any personal data leaves Kenya; and what a person does to access, correct or complain. Then have Kenyan counsel review it. Expert handover includes that review, not a slide that says "we take privacy seriously".`,
        `Huwezi kueleza mfumo wa AI kwa shirika la Kenya bila kueleza haki za data. Sheria ya Ulinzi wa Data, 2019 ndiyo sheria. Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) ndiye mdhibiti. Somo hili si ushauri wa kisheria wala cheti cha utiifu. Ni seti ya maswali mtaalamu lazima ayaandike kwenye maelezo ya ukurasa mmoja kisha ayapeleke kwa wakili.

Wajibu nne vinaonekana karibu kila majaribio ya AI.

Ridhaa. Watu lazima wajue unachokusanya, kwa nini, na nani mwingine ataona, kwa lugha wanayotumia. Lazima waweze kukataa bila kupoteza huduma wanayostahili, isipokuwa msingi mwingine halali unatumika kweli na unaweza kuutaja. Mchifu, mwalimu mkuu, au mwenyekiti wa SACCO hawezi kutoa ridhaa kwa kila mtu mzima katika chumba. Ridhaa inaweza kuondolewa; maelezo yako lazima yaseme jinsi.

Kikomo cha madhumuni. Ulikusanya tarehe za ziara za kliniki ili kuwakumbusha wagonjwa. Hupati ruhusa kuziendesha tena kufunza chatbot ya masoko, au kutoa alama ya nani ni "mgumu". Unataka madhumuni mapya, urudi kwa watu au usimame. Wauzaji hupenda "pia tutaitumia kuboresha modeli". Sentensi hiyo ni madhumuni mapya. Iandike au ifute.

Uhifadhi. Logi, prompt, picha na alama zinaishi kwa muda gani? "Milele, tukihitaji" inashindwa wajibu huu. Andika kipindi, mwenye wajibu, na njia ya kufuta. Muuzaji akhifadhi prompt kwenye seva nje ya nchi, uhifadhi si kabati lako tu.

Data ya watoto. Yeyote aliye chini ya miaka 18 anahitaji uangalifu zaidi. Zana za kazi za nyumbani, daftari za kliniki, na wasaidizi wa darasa la CBC mara nyingi huchakata data ya watoto. Unahitaji msingi halali unaofaa, ushiriki wa mlezi inapohitajika, kupunguza data (usikusanye eneo, picha au majina kamili kama msimbo wa darasa unatosha), na muundo usiouweka insha ya mtoto kwenye modeli ya mbali "kwa fine-tuning". Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi ni mwongozo wa kile watu wanapaswa kujifunza kuhusu AI katika elimu. Si nukuu unayoweza kubandika kama ruhusa ya kuchakata faili za wanafunzi.

Pia andika: mdhibiti wa data ni nani (kwa kawaida shule, kaunti, SACCO au kliniki, si "programu"); mchakataji ni nani (muuzaji); kama data binafsi yoyote inaondoka Kenya; na mtu anafanya nini kufikia, kusahihisha au kulalamika. Kisha wakili wa Kenya akague. Kukabidhi kwa mtaalamu kunajumuisha ukaguzi huo, si slaidi inayosema "tunaheshimu faragha".`
      ),
      reveal([
        {
          termEn: "Data controller",
          termSw: "Mdhibiti wa data",
          defEn: "The organisation that decides why and how personal data is processed — usually the school, clinic, SACCO or county, not the vendor's logo.",
          defSw: "Shirika linaloamua kwa nini na jinsi data binafsi inavyochakatwa — kwa kawaida shule, kliniki, SACCO au kaunti, si nembo ya muuzaji.",
        },
        {
          termEn: "Data processor",
          termSw: "Mchakataji wa data",
          defEn: "A vendor that processes personal data on the controller's instructions. Needs a written agreement, not a handshake.",
          defSw: "Muuzaji anayechakata data binafsi kwa maelekezo ya mdhibiti. Anahitaji makubaliano yaliyoandikwa, si kupeana mkono.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kikomo cha madhumuni",
          defEn: "Use personal data only for the purpose you stated when you collected it, unless you have a new lawful basis.",
          defSw: "Tumia data binafsi kwa madhumuni uliyotaja ulipokusanya tu, isipokuwa una msingi mpya halali.",
        },
        {
          termEn: "Retention",
          termSw: "Uhifadhi",
          defEn: "A written period after which prompts, logs, photos and scores are deleted or irreversibly anonymised.",
          defSw: "Kipindi kilichoandikwa baada ya hapo prompt, logi, picha na alama zinafutwa au kutengwa kabisa na utambulisho.",
        },
        {
          termEn: "Children's data",
          termSw: "Data ya watoto",
          defEn: "Personal data of anyone under 18. Extra care: lawful basis, guardian involvement where required, minimisation, no casual remote training.",
          defSw: "Data binafsi ya yeyote aliye chini ya miaka 18. Uangalifu zaidi: msingi halali, mlezi inapohitajika, kupunguza, bila mafunzo ya mbali kwa uzembe.",
        },
      ]),
      note(
        "Worked example: CBC homework helper at Rehema School",
        "Mfano kamili: kisaidizi cha kazi za nyumbani cha CBC shule ya Rehema",
        `Rehema School is a fictional public primary in Kakamega. A vendor offers a homework helper that stores every pupil prompt "to personalise learning" and to "improve the model". Pupils are 9 to 13. Teachers like the Kiswahili explanations.

Write the rights block of the spec before anyone logs in.

- Controller: Rehema School (Board of Management). Processor: the vendor, named, with a data-processing agreement.
- Purpose: help a pupil understand this week's teacher-approved notes. Not: build the vendor's next model. Not: marketing to parents. Strike "improve our model" unless counsel and guardians agree a separate purpose.
- Data: class code, week number, the question, the approved-note passage retrieved. Not: home location, photo of the child, full name in the prompt, sibling names.
- Lawful basis and guardians: children's data. Explain in Kiswahili and English at a parents' meeting. Do not hide the remote server in a footnote. If the tool cannot run without sending prompts abroad, say so plainly and expect some families to refuse.
- Retention: pupil prompts deleted after 30 days unless a teacher flagged a safeguarding issue through the school's existing process, not through the vendor.
- Access: a parent can ask what was stored. The school must be able to answer without waiting six weeks for a foreign vendor.

UNESCO's 2024 teacher and student AI competency frameworks can orient the staff training: teachers learn to design tasks and to check outputs; pupils learn that a helper can be wrong. That orientation is not the same as putting Rehema's essays into a training set.

If the vendor will not sign purpose limitation and deletion, you do not have a school tool. You have a data harvest with a lesson skin.`,
        `Shule ya Rehema ni shule ya msingi ya umma ya kubuni Kakamega. Muuzaji anatoa kisaidizi cha kazi za nyumbani kinachohifadhi kila prompt ya mwanafunzi "kubinafsisha kujifunza" na "kuboresha modeli". Wanafunzi wana miaka 9 hadi 13. Walimu wanapenda maelezo ya Kiswahili.

Andika sehemu ya haki ya maelezo ya kazi kabla ya mtu yeyote kuingia.

- Mdhibiti: Shule ya Rehema (Bodi ya Usimamizi). Mchakataji: muuzaji, kwa jina, pamoja na makubaliano ya uchakataji wa data.
- Madhumuni: kumsaidia mwanafunzi kuelewa dokezo za wiki hii zilizoidhinishwa na mwalimu. Si: kujenga modeli inayofuata ya muuzaji. Si: masoko kwa wazazi. Futa "boresha modeli yetu" isipokuwa wakili na walezi wanakubali madhumuni tofauti.
- Data: msimbo wa darasa, namba ya wiki, swali, kifungu cha dokezo kilicholetwa. Si: eneo la nyumbani, picha ya mtoto, jina kamili kwenye prompt, majina ya ndugu.
- Msingi halali na walezi: data ya watoto. Eleza kwa Kiswahili na Kiingereza katika mkutano wa wazazi. Usifiche seva ya mbali katika tanbihi. Zana isipoweza kuendesha bila kutuma prompt nje ya nchi, sema wazi na tarajia familia fulani zitakataa.
- Uhifadhi: prompt za wanafunzi zinafutwa baada ya siku 30 isipokuwa mwalimu aliweka alama ya suala la usalama kupitia mchakato uliopo wa shule, si kupitia muuzaji.
- Ufikiaji: mzazi anaweza kuuliza kilichohifadhiwa. Shule lazima iweze kujibu bila kusubiri wiki sita muuzaji wa nje.

Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi inaweza kuelekeza mafunzo ya wafanyakazi: walimu hujifunza kubuni kazi na kukagua matokeo; wanafunzi hujifunza kwamba kisaidizi kinaweza kukosea. Mwongozo huo si sawa na kuweka insha za Rehema kwenye seti ya mafunzo.

Muuzaji asipotia saini kikomo cha madhumuni na kufuta, huna zana ya shule. Una uvunaji wa data wenye ngozi ya somo.`
      ),
      quiz(
        "A county clinic wants to reuse old HIV appointment numbers to train a new marketing chatbot. What is the expert move?",
        "Kliniki ya kaunti inataka kutumia tena namba za zamani za miadi ya VVU kufunza chatbot mpya ya masoko. Hatua ya mtaalamu ni ipi?",
        [
          "Go ahead; the clinic already has the numbers, so purpose has been met.",
          "Stop. That is a new purpose on sensitive health data. Do not proceed without a lawful basis, a fresh explanation to patients, and usually a decision that marketing is the wrong use.",
          "Anonymise by removing names but keeping phone numbers, then train.",
          "Ask the CHP coordinator to sign one consent form for the whole ward.",
        ],
        [
          "Endelea; kliniki tayari ina namba, kwa hiyo madhumuni yametimizwa.",
          "Simama. Hiyo ni madhumuni mapya juu ya data nyeti ya afya. Usiendelee bila msingi halali, maelezo mapya kwa wagonjwa, na kwa kawaida uamuzi kwamba masoko ni matumizi mabaya.",
          "Ondoa majina lakini acha namba za simu, kisha funza.",
          "Mwombe mratibu wa CHP asaini fomu moja ya ridhaa kwa wadi nzima.",
        ],
        1,
        "Purpose limitation is the point. Appointment data was collected to deliver care. Marketing is a new purpose. Phone numbers still identify people. A coordinator cannot consent for a ward.",
        "Kikomo cha madhumuni ndicho kiini. Data ya miadi ilikusanywa kutoa huduma. Masoko ni madhumuni mapya. Namba za simu bado zinawatambua watu. Mratibu hawezi kutoa ridhaa kwa wadi."
      ),
      scenario({
        titleEn: "Scenario: 'parents will never read the policy'",
        titleSw: "Hali halisi: 'wazazi hawatowahi kusoma sera'",
        situationEn:
          "A headteacher likes the Rehema homework helper. The vendor's terms are ten pages in English only. The PTA meeting is on Saturday. The vendor says: tick a box on enrolment day and start Monday.",
        situationSw:
          "Mwalimu mkuu anapenda kisaidizi cha kazi za nyumbani cha Rehema. Masharti ya muuzaji ni kurasa kumi kwa Kiingereza tu. Mkutano wa wazazi ni Jumamosi. Muuzaji anasema: tiki kisanduku siku ya kujiandikisha na anza Jumatatu.",
        questionEn: "What should you advise the school to do?",
        questionSw: "Unashauri shule ifanye nini?",
        optionsEn: [
          "Tick the box. Speed matters more than comprehension.",
          "Translate the real practices (what is sent, where, how long, how to refuse) into a one-page Kiswahili and English note, discuss it at the PTA, allow refusal without losing ordinary teaching, and delay go-live until that is done.",
          "Put the ten pages on the noticeboard in English; that counts as informed consent.",
          "Collect children's photos 'for the yearbook' and reuse them to train the helper, because the school already takes photos.",
        ],
        optionsSw: [
          "Tiki kisanduku. Kasi ni muhimu kuliko uelewa.",
          "Tafsiri mazoea halisi (ninachotumwa, wapi, kwa muda gani, jinsi ya kukataa) kuwa dokezo la ukurasa mmoja kwa Kiswahili na Kiingereza, lijadili kwenye mkutano wa wazazi, ruhusu kukataa bila kupoteza ufundishaji wa kawaida, na chelewesha kuanza hadi hilo limefanyika.",
          "Bandika kurasa kumi kwenye ubao kwa Kiingereza; hicho ni ridhaa ya ufahamu.",
          "Kusanya picha za watoto 'kwa kitabu cha mwaka' na uzitumie tena kufunza kisaidizi, kwa sababu shule tayari hupiga picha.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A tick without understanding is not informed. Children's data makes this worse, not better.",
          "Correct. Informed, specific, withdrawable, in a language people use. Ordinary teaching must not become the punishment for saying no.",
          "English-only legal text on a board does not meet the duty to explain.",
          "Yearbook photos, if lawfully taken, still have a purpose. Reuse for training is a new purpose and extra children's data.",
        ],
        hintsSw: [
          "Tiki bila uelewa si ya ufahamu. Data ya watoto inafanya hili kuwa mbaya zaidi, si bora.",
          "Sahihi. Ya ufahamu, mahususi, inayoweza kuondolewa, kwa lugha watu wanayotumia. Ufundishaji wa kawaida usiwe adhabu ya kusema hapana.",
          "Maandishi ya kisheria ya Kiingereza pekee kwenye ubao hayatimizi wajibu wa kueleza.",
          "Picha za kitabu cha mwaka, zikipigwa kihalali, bado zina madhumuni. Kuzitumia tena kwa mafunzo ni madhumuni mapya na data zaidi ya watoto.",
        ],
        explainEn:
          "Consent theatre (a tick, a wall of English) is not consent. Expert governance is a one-page explanation people can refuse, and a vendor contract that matches that page.",
        explainSw:
          "Maonyesho ya ridhaa (tiki, ukuta wa Kiingereza) si ridhaa. Utawala wa mtaalamu ni maelezo ya ukurasa mmoja ambayo watu wanaweza kukataa, na mkataba wa muuzaji unaolingana na ukurasa huo.",
      }),
      note(
        "Try it: write the rights block",
        "Jaribu: andika sehemu ya haki",
        `For a system you care about (clinic, SACCO, school, or county), fill this block in six lines:

1. Controller and processor.
2. Purpose in one sentence, plus one reuse you refuse.
3. Data fields you will collect, and one field you will not.
4. Where the data lives (Kenya / abroad / device).
5. Retention period and who deletes.
6. How a person says no, including if they are 12 years old.

Carry forward:
- Rights belong in the spec, not in a footer.
- Unit 5: even lawful data can produce a model that looks good on demo day and harms people who were not in the test.`,
        `Kwa mfumo unaoujali (kliniki, SACCO, shule, au kaunti), jaza sehemu hii kwa mistari sita:

1. Mdhibiti na mchakataji.
2. Madhumuni kwa sentensi moja, pamoja na matumizi moja unayokataa.
3. Sehemu za data utakazokusanya, na sehemu moja usiyokusanya.
4. Data inaishi wapi (Kenya / nje / kifaa).
5. Kipindi cha uhifadhi na nani anayefuta.
6. Mtu anasemaje hapana, ikiwa ni pamoja na ikiwa ana miaka 12.

Kumbuka:
- Haki ziko kwenye maelezo ya kazi, si kwenye kijachini.
- Somo la 5: hata data halali inaweza kutoa modeli inayoonekana vizuri siku ya onyesho na kuwadhuru watu ambao hawakuwa kwenye jaribio.`
      ),
    ],
  },
  {
    id: "m0-a-u5",
    titleEn: "Evaluation that survives scrutiny",
    titleSw: "Tathmini inayostahimili ukaguzi",
    cards: [
      note(
        "Demo day is not a test",
        "Siku ya onyesho si jaribio",
        `A system that impresses a visiting delegation can still fail the people who will live with its errors. Expert evaluation answers four questions in writing, with numbers from data the model has never trained on, collected in the places the system will be used.

Held-out local tests. Split by time, place or person — not at random among near-duplicate rows from one week in Nairobi. If you trained on Machakos and Kitui photos, hold out Makueni. If you trained on 2023 loans, test 2024. If you trained on one teacher's marking, test another's. The point of "held out" is that nobody on the team tuned the system while looking at those examples.

Who is harmed by which error. Every system has two directions of being wrong. A leaf model that misses disease leaves a farmer spraying late. A leaf model that cries disease on a healthy plant pushes a farmer toward a chemical they did not need — and toward PCPB-label questions they may not have asked. A loan list that misses a member in trouble withholds help. A loan list that flags a member who is fine costs dignity and staff time, and can become discrimination if the extra flags concentrate on one estate, language or gender. Write both harms. Decide which you will tolerate more, with the people who bear them, not only with the vendor.

Metrics that match the job. Accuracy on a balanced classroom set is the wrong number for a rare disease. Report how many true cases you catch, how many false alarms you create, and how that looks in each county, language and device type. Latency on a Westlands connection is the wrong number for a Trans Nzoia farm. If the job is retrieval, measure whether the cited passage is the right one, not whether the prose is fluent.

Process that survives a board or a journalist. Name the sample size, the dates, who labelled the test, whether they could see the model's answer while labelling (they should not), and what you will do if a subgroup is worse. Keep the test set. You will need it in unit 6 when the world drifts.

Kenya's AI Strategy 2025–2030 puts agriculture, health, education, public services, finance and MSMEs in the foreground. Those are exactly the sectors where a pretty demo and a harmful error live close together. Your reputation as an expert is the held-out table, not the projector.`,
        `Mfumo unaovutia wajumbe wanaotembelea bado unaweza kuwashindwa watu watakaokaa na makosa yake. Tathmini ya mtaalamu inajibu maswali manne kwa maandishi, kwa namba kutoka data ambayo modeli haijawahi kufunzwa, iliyokusanywa katika sehemu mfumo utakapotumika.

Majaribio ya ndani yaliyowekwa kando. Gawanya kwa muda, mahali au mtu — si kwa bahati kati ya mistari inayofanana kutoka wiki moja Nairobi. Ulifunza kwa picha za Machakos na Kitui, weka kando Makueni. Ulifunza kwa mikopo ya 2023, jaribu 2024. Ulifunza kwa kuweka alama kwa mwalimu mmoja, jaribu wa mwingine. Maana ya "kando" ni kwamba hakuna katika timu aliyerekebisha mfumo akiangalia mifano hiyo.

Nani anadhurika kwa kosa lipi. Kila mfumo una mwelekeo miwili ya kukosea. Modeli ya jani inayokosa ugonjwa inamwacha mkulima akipulizia kuchelewa. Modeli ya jani inayolia ugonjwa kwenye mmea mzima inamsukuma mkulima kwenye kemikali ambayo hakuhitaji — na maswali ya lebo ya PCPB ambayo huenda hakujiuliza. Orodha ya mkopo inayomkosa mwanachama aliye na shida inazuia msaada. Orodha inayomweka alama mwanachama aliye sawa inagharimu heshima na muda wa wafanyakazi, na inaweza kuwa ubaguzi alama za ziada zikijikita katika kitongoji, lugha au jinsia moja. Andika madhara yote mawili. Amua ni lipi utavumilia zaidi, pamoja na watu wanaoyabeba, si muuzaji peke yake.

Vipimo vinavyolingana na kazi. Usahihi kwenye seti ya darasa iliyosawazishwa ni namba mbaya kwa ugonjwa adimu. Ripoti kesi halisi unazonasa ngapi, kengele za uongo unazounda ngapi, na jinsi inavyoonekana katika kila kaunti, lugha na aina ya kifaa. Ucheleweshaji kwenye muunganisho wa Westlands ni namba mbaya kwa shamba Trans Nzoia. Kazi ikiwa urejeshaji, pima kama kifungu kilichonukuliwa ni sahihi, si kama lugha ni laini.

Mchakato unaostahimili bodi au mwandishi wa habari. Taja ukubwa wa sampuli, tarehe, nani aliweka lebo ya jaribio, kama waliweza kuona jibu la modeli wakati wa kuweka lebo (hawapaswi), na utafanya nini kikundi kidogo kikiwa kibaya zaidi. Hifadhi seti ya jaribio. Utaihitaji katika somo la 6 dunia inapoteleza.

Mkakati wa AI wa Kenya 2025–2030 unaweka kilimo, afya, elimu, huduma za umma, fedha na biashara ndogo mbele. Hizo ndizo sekta ambapo onyesho zuri na kosa lenye madhara vinaishi karibu. Sifa yako kama mtaalamu ni jedwali lililowekwa kando, si projekta.`
      ),
      reveal([
        {
          termEn: "Held-out test",
          termSw: "Jaribio lililowekwa kando",
          defEn: "Examples the team must not use for training or tuning, drawn from the places and times of real use.",
          defSw: "Mifano ambayo timu hapaswi kutumia kwa mafunzo au kurekebisha, iliyotolewa kutoka sehemu na nyakati za matumizi halisi.",
        },
        {
          termEn: "False negative",
          termSw: "Kosa la kukosa (false negative)",
          defEn: "The system said no (healthy, safe, repay) when the truth was yes. Often the farmer, patient or member who needed a flag.",
          defSw: "Mfumo ulisema hapana (zima, salama, atalipa) wakati ukweli ulikuwa ndiyo. Mara nyingi mkulima, mgonjwa au mwanachama aliyestahili alama.",
        },
        {
          termEn: "False positive",
          termSw: "Kosa la kengele ya uongo (false positive)",
          defEn: "The system said yes (diseased, risky, cheat) when the truth was no. Costs time, chemicals, dignity or exclusion.",
          defSw: "Mfumo ulisema ndiyo (ugonjwa, hatari, udanganyifu) wakati ukweli ulikuwa hapana. Inagharimu muda, kemikali, heshima au kutengwa.",
        },
        {
          termEn: "Subgroup slice",
          termSw: "Kipande cha kikundi",
          defEn: "The same metrics, reported separately for a county, language, gender, device or school type.",
          defSw: "Vipimo vile vile, vinavyoripotiwa kando kwa kaunti, lugha, jinsia, kifaa au aina ya shule.",
        },
        {
          termEn: "Label leakage",
          termSw: "Uvujaji wa lebo",
          defEn: "Labellers seeing the model's answer while marking the test, which inflates scores. Blind labels or you do not have a test.",
          defSw: "Waweka lebo wakiona jibu la modeli wakati wa kuweka alama kwenye jaribio, kunavyovimba alama. Lebo za siri au huna jaribio.",
        },
      ]),
      note(
        "Worked example: three counties of maize photos",
        "Mfano kamili: kaunti tatu za picha za mahindi",
        `Imagine Green Ridge, a fictional extension project. It has 6,000 maize-leaf photos from Machakos and Kitui, labelled by two agronomists. A vendor demos 94% accuracy on a laptop, using photos from those same folders. Visitors clap.

Your evaluation plan:

- Hold out 1,200 photos the vendor never received, including 400 from Makueni collected later, on farmers' own phones, dust and all.
- Blind labels: a third agronomist marks the hold-out without seeing the model's output.
- Report, for each county: of the truly diseased leaves, how many did we catch; of the leaves we called diseased, how many were healthy.
- Report by phone type if you can. A model that only works on a new flagship phone is not a smallholder tool.
- Sit with two farmers and an agrovet. Ask which error they fear more this season: missing armyworm, or spraying a healthy crop. Write their answer into the spec as the operating point (how aggressive the flag is).

Suppose Machakos/Kitui hold-out looks acceptable, and Makueni catch-rate collapses. You do not average the three counties into one cheerful number. You either collect Makueni training data and re-test, or you do not deploy in Makueni. That sentence is evaluation that survives scrutiny.

Link to real practice: tools such as Agrika are built around field photos and offline use. Your job is not to quote a marketing accuracy. It is to demand a held-out Kenyan slice that matches the county you will handover to.`,
        `Fikiria Green Ridge, mradi wa ugani wa kubuni. Una picha 6,000 za majani ya mahindi kutoka Machakos na Kitui, zilizo na lebo za wataalamu wawili wa kilimo. Muuzaji anaonyesha usahihi wa asilimia 94 kwenye kompyuta ndogo, akitumia picha kutoka folda zilezile. Wageni wanapiga makofi.

Mpango wako wa tathmini:

- Weka kando picha 1,200 ambazo muuzaji hakuwahi kupokea, ikiwa ni pamoja na 400 kutoka Makueni zilizokusanywa baadaye, kwenye simu za wakulima wenyewe, vumbi na vyote.
- Lebo za siri: mtaalamu wa tatu anaweka alama kwenye seti iliyowekwa kando bila kuona tokeo la modeli.
- Ripoti, kwa kila kaunti: kati ya majani yenye ugonjwa kweli, tulipata mangapi; kati ya majani tuliita yenye ugonjwa, mangapi yalikuwa mazima.
- Ripoti kwa aina ya simu ukiweza. Modeli inayofanya kazi tu kwenye simu mpya ya bei juu si zana ya mkulima mdogo.
- Kaa na wakulima wawili na agrovet. Uliza ni kosa lipi wanaogopa zaidi msimu huu: kukosa viwavijeshi, au kupulizia zao zima. Andika jibu lao kwenye maelezo kama kiwango cha kufanya kazi (alama iwe mkali kiasi gani).

Tuseme hold-out ya Machakos/Kitui inaonekana inakubalika, na kiwango cha kunasa cha Makueni kinaanguka. Hufanyi wastani wa kaunti tatu kuwa namba moja ya furaha. Ama unakusanya data ya mafunzo ya Makueni na kujaribu tena, au huendi Makueni. Sentensi hiyo ni tathmini inayostahimili ukaguzi.

Unganisha na mazoezi halisi: zana kama Agrika zinajengwa kuzunguka picha shambani na matumizi bila mtandao. Kazi yako si kunukuu usahihi wa masoko. Ni kudai kipande cha Kenya kilichowekwa kando kinacholingana na kaunti utakayokabidhi.`
      ),
      quiz(
        "Which evaluation would survive a county assembly question?",
        "Ni tathmini ipi ingestahimili swali la bunge la kaunti?",
        [
          "The vendor's demo laptop showed 94% on photos they chose that morning.",
          "A held-out set from the deploying counties, labelled blind, with false-negative and false-positive rates by county, plus a written choice of which error farmers prefer to avoid.",
          "A fluent chatbot praised by three directors in a boardroom.",
          "An online leaderboard score from another continent.",
        ],
        [
          "Kompyuta ndogo ya onyesho ya muuzaji ilionyesha asilimia 94 kwenye picha walizochagua asubuhi hiyo.",
          "Seti iliyowekwa kando kutoka kaunti zinazotumika, yenye lebo za siri, pamoja na viwango vya kukosa na kengele za uongo kwa kaunti, na uamuzi ulioandikwa wa kosa lipi wakulima wanapendelea kuepuka.",
          "Chatbot laini iliyosifiwa na wakurugenzi watatu katika chumba cha bodi.",
          "Alama ya ubao wa mtandao kutoka bara jingine.",
        ],
        1,
        "Scrutiny wants local, blind, sliced numbers and an explicit harm trade-off. Demos, praise and foreign leaderboards do not describe your farmers' errors.",
        "Ukaguzi unataka namba za ndani, za siri, zilizogawanywa na mabadilishano wazi ya madhara. Maonyesho, sifa na ubao wa kigeni hazielezi makosa ya wakulima wako."
      ),
      scenario({
        titleEn: "Scenario: the Makueni slice is worse",
        titleSw: "Hali halisi: kipande cha Makueni ni kibaya zaidi",
        situationEn:
          "Green Ridge's overall catch-rate is 80%. Makueni's is 52%. The vendor says 'launch everywhere, we will improve later, the average is fine.' A visitors' day is on Friday.",
        situationSw:
          "Kiwango cha kunasa cha Green Ridge kwa ujumla ni asilimia 80. Cha Makueni ni asilimia 52. Muuzaji anasema 'zindua kila mahali, tutaboresha baadaye, wastani uko sawa.' Siku ya wageni ni Ijumaa.",
        questionEn: "What do you handover to the county?",
        questionSw: "Unakabidhi nini kwa kaunti?",
        optionsEn: [
          "Launch everywhere; averages are what funders read.",
          "Do not deploy in Makueni until a new local sample is collected, the model is retrained or the process is changed, and the held-out Makueni slice is re-tested. Visitors can be shown the honest table.",
          "Delete the Makueni numbers so the report is cleaner.",
          "Replace farmers' phones with the demo laptop model of phone.",
        ],
        optionsSw: [
          "Zindua kila mahali; wastani ndicho wafadhili wanasoma.",
          "Usiendelee Makueni hadi sampuli mpya ya ndani imekusanywa, modeli imefunzwa upya au mchakato umebadilishwa, na kipande cha Makueni kilichowekwa kando kimejaribiwa tena. Wageni wanaweza kuonyeshwa jedwali la kweli.",
          "Futa namba za Makueni ili ripoti iwe safi.",
          "Badilisha simu za wakulima na aina ya simu ya kompyuta ndogo ya onyesho.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Funders who only read averages will still meet Makueni farmers. You will own the missed disease.",
          "Correct. Subgroup failure is a go/no-go, not a footnote. Honesty with visitors is part of governance.",
          "Deleting slices is fabrication. It will not survive scrutiny; it will create it.",
          "Changing people's devices to match a demo is not an agricultural programme. It is an admission the model does not fit the field.",
        ],
        hintsSw: [
          "Wafadhili wanaosoma wastani tu bado watakutana na wakulima wa Makueni. Wewe ndiye utakayemiliki ugonjwa uliokosa.",
          "Sahihi. Kushindwa kwa kikundi ni ndiyo/hapana, si tanbihi. Ukweli kwa wageni ni sehemu ya utawala.",
          "Kufuta vipande ni uzushi. Hatostahimili ukaguzi; utauumba.",
          "Kubadilisha vifaa vya watu ili vilingane na onyesho si programu ya kilimo. Ni kukiri modeli haifai shambani.",
        ],
        explainEn:
          "An average that hides a county is not an evaluation. Restrict deployment, repair the slice, re-test. That is what you can defend after launch.",
        explainSw:
          "Wastani unaoficha kaunti si tathmini. Zuia uenezaji, rekebisha kipande, jaribu tena. Ndivyo unavyoweza kutetea baada ya uzinduzi.",
      }),
      note(
        "Try it: write the harm table",
        "Jaribu: andika jedwali la madhara",
        `Pick a system (clinic flag, loan list, leaf photo, homework helper). Draw two columns: Wrong in this direction / Wrong in that direction. For each, write who is harmed, how you will measure it on a held-out local set, and which one the operators prefer to avoid.

Carry forward:
- If you cannot produce a held-out local table, you do not have an expert evaluation.
- Unit 6: a table that was true in March can lie in October. Failure after launch has a name: drift, new places, and confident nonsense.`,
        `Chagua mfumo (alama ya kliniki, orodha ya mkopo, picha ya jani, kisaidizi cha kazi za nyumbani). Chora safu mbili: Kosa upande huu / Kosa upande ule. Kwa kila moja, andika nani anadhurika, utapimaje kwenye seti ya ndani iliyowekwa kando, na lipi waendeshaji wanapendelea kuepuka.

Kumbuka:
- Usiweze kutoa jedwali la ndani lililowekwa kando, huna tathmini ya mtaalamu.
- Somo la 6: jedwali lililokuwa kweli Machi linaweza kusema uongo Oktoba. Kushindwa baada ya uzinduzi lina jina: mtelezo, sehemu mpya, na upuuzi wenye uhakika.`
      ),
    ],
  },
  {
    id: "m0-a-u6",
    titleEn: "Failure after launch",
    titleSw: "Kushindwa baada ya kuzindua",
    cards: [
      note(
        "The world moves; the model does not, unless you do",
        "Dunia inasonga; modeli haisongi, usiposonga wewe",
        `Unit 5 gave you a held-out table. That table is a photograph of one season, one set of counties, one product list. After launch, three failures show up again and again in Kenyan deployments. Name them in the runbook, or you will call them "the AI became stupid" and freeze.

Drift. The inputs change. A new maize variety looks different on a phone camera. Long rains arrive late. A SACCO adds a daily-repayment boda product the 2023 model never saw. CHPs start recording a new vaccine. The model's numbers still come out. They describe last year's world. You notice drift only if someone compares predictions with what really happened, on a schedule, by county.

New counties, new sites. A tool evaluated in Nyeri is not evaluated in Garissa. Language, crop mix, phone quality, clinic workflow and fraud patterns differ. Expanding coverage is a new test, not a copy-paste of the old score. If you cannot fund a local hold-out, you do not expand. You say so.

Confident nonsense. Generative assistants produce fluent sentences that are not in your documents and not true. After launch this gets worse when staff stop checking because the prose sounds like an expert. Retrieval that is allowed to abstain (unit 3) is a control. A person who must tick "I checked the source" on anything that touches chemicals, doses, money or discipline is a control. Removing the tick to "save time" is how nonsense becomes policy.

FarmerAI's 2025 potato-cycle pilot (DigiFarm, SMS, WhatsApp; weather, fertiliser, pests, prices) is a reminder that agriculture is seasonal by nature. Advice that was fair in one potato cycle can be wrong in the next. Your monitoring plan should be seasonal on purpose: after the rains, after a new pest alert from KALRO, after a county joins.

Expert governance is a calendar, not a feeling. Who looks at the numbers, on which day, against which held-out refresh, and what threshold pauses the system? Unit 11 will add rollback. This unit is the reason rollback gets used.`,
        `Somo la 5 lilikupa jedwali lililowekwa kando. Jedwali hilo ni picha ya msimu mmoja, seti moja ya kaunti, orodha moja ya bidhaa. Baada ya uzinduzi, kushindwa kutatu kunajitokeza tena na tena katika uenezaji Kenya. Yataje kwenye mwongozo wa uendeshaji, la sivyo utayaita "AI imekuwa mjinga" na kuganda.

Mtelezo (drift). Ingizo zinabadilika. Aina mpya ya mahindi inaonekana tofauti kwenye kamera ya simu. Mvua za masika zinachelewa. SACCO inaongeza bidhaa ya malipo ya kila siku ya boda ambayo modeli ya 2023 haikuiona. CHP wanaanza kurekodi chanjo mpya. Namba za modeli bado zinatoka. Zinaeleza dunia ya mwaka jana. Unatambua mtelezo tu kama mtu analinganisha utabiri na kilichotokea kweli, kwa ratiba, kwa kaunti.

Kaunti mpya, vituo vipya. Zana iliyotathminiwa Nyeri haitathminiwi Garissa. Lugha, mchanganyiko wa mazao, ubora wa simu, mtiririko wa kliniki na ruwaza za ulaghai ni tofauti. Kupanua wigo ni jaribio jipya, si kunakili alama ya zamani. Usiweze kufadhili hold-out ya ndani, hupanui. Unasema hivyo.

Upuuzi wenye uhakika. Wasaidizi wanaozalisha maandishi hutoa sentensi laini ambazo haziko kwenye nyaraka zako na si kweli. Baada ya uzinduzi hii inazidi wafanyakazi wanapoacha kukagua kwa sababu lugha inasikika kama mtaalamu. Urejeshaji unaoruhusiwa kukataa kujibu (somo la 3) ni udhibiti. Mtu ambaye lazima atiki "nimekagua chanzo" kwa chochote kinachogusa kemikali, kipimo, pesa au nidhamu ni udhibiti. Kuondoa tiki "kuokoa muda" ndiyo jinsi upuuzi unavyokuwa sera.

Majaribio ya mzunguko wa viazi ya FarmerAI ya 2025 (DigiFarm, SMS, WhatsApp; hali ya hewa, mbolea, wadudu, bei) ni kikumbusho kwamba kilimo ni cha misimu kwa asili. Ushauri uliokuwa wa haki katika mzunguko mmoja wa viazi unaweza kuwa na kosa katika unaofuata. Mpango wako wa ufuatiliaji unapaswa kuwa wa msimu kwa makusudi: baada ya mvua, baada ya tahadhari mpya ya wadudu kutoka KALRO, baada ya kaunti kujiunga.

Utawala wa mtaalamu ni kalenda, si hisia. Nani anaangalia namba, siku gani, dhidi ya kiburudisho kipi cha hold-out, na kizingiti gani kinasimamisha mfumo? Somo la 11 litaongeza kurudi nyuma. Somo hili ndiyo sababu kurudi nyuma kunatumiwa.`
      ),
      reveal([
        {
          termEn: "Drift",
          termSw: "Mtelezo (drift)",
          defEn: "The live world no longer matches the world the model or documents were evaluated on.",
          defSw: "Dunia hai inafanana tena na dunia ambayo modeli au nyaraka zilitathminiwa.",
        },
        {
          termEn: "Geographic shift",
          termSw: "Mabadiliko ya eneo",
          defEn: "Performance drops in a new county, language or clinic workflow that was not in the test.",
          defSw: "Utendaji unashuka katika kaunti, lugha au mtiririko mpya wa kliniki ambao haukuwa kwenye jaribio.",
        },
        {
          termEn: "Confident nonsense",
          termSw: "Upuuzi wenye uhakika",
          defEn: "Fluent output that is not supported by your sources and is treated as true because it sounds expert.",
          defSw: "Tokeo laini lisilo na msaada wa vyanzo vyako na linalochukuliwa kuwa kweli kwa sababu linasikika kama mtaalamu.",
        },
        {
          termEn: "Monitoring cadence",
          termSw: "Ratiba ya ufuatiliaji",
          defEn: "Who checks which numbers, how often, and what threshold pauses the system.",
          defSw: "Nani anakagua namba zipi, mara ngapi, na kizingiti gani kinasimamisha mfumo.",
        },
        {
          termEn: "Operating point",
          termSw: "Kiwango cha kufanya kazi",
          defEn: "How aggressive the flag is — the trade-off you chose in unit 5, which you may need to move after drift.",
          defSw: "Alama ilivyo mkali — mabadilishano uliyochagua katika somo la 5, ambalo huenda ukahitaji kulisogeza baada ya mtelezo.",
        },
      ]),
      note(
        "Worked example: potato advice after a wet month",
        "Mfano kamili: ushauri wa viazi baada ya mwezi wa mvua",
        `Imagine Lelan Fresh, a fictional farmer group in Elgeyo Marakwet, using an SMS advisor for potato blight risk. In the first season the messages matched what the agronomist saw. In the second season, after unusual wet weeks, the messages still say "low risk" while fields show blight. Officers are embarrassed. Farmers say the phone is lying.

Failure analysis, not blame:

- Drift: weather and disease pressure left the training and document window. A held-out table from last season cannot certify this week.
- Confident nonsense risk: if the channel is a generative assistant without retrieval of this week's KALRO or county alert, it may keep a calm tone while being wrong. If it is retrieval, the document store may be stale — same failure, different fix.
- People: officers stopped walking fields because SMS "was working". Monitoring was not a calendar item.

What you write in the incident note:

1. Pause automatic blight-risk SMS in the affected wards this week; officers revert to the old calling list.
2. Compare last 14 days of messages with agronomist field notes (even 40 fields is better than none).
3. Refresh the source of truth (county alert, KALRO guidance) and only then resume.
4. Add a seasonal trigger: after a wet-week threshold, a person must re-certify the messages.
5. Tell farmers, in Kiswahili, that the tool was paused because the weather changed, not because they did something wrong.

That is governance. Shipping a cheerful apology from a chatbot without pausing is not.`,
        `Fikiria Lelan Fresh, kundi la wakulima la kubuni Elgeyo Marakwet, linalotumia mshauri wa SMS kuhusu hatari ya blight ya viazi. Katika msimu wa kwanza ujumbe ulilingana na kile mtaalamu wa kilimo aliona. Katika msimu wa pili, baada ya wiki za mvua zisizo za kawaida, ujumbe bado unasema "hatari ndogo" huku mashamba yakionyesha blight. Maafisa wanaona aibu. Wakulima wanasema simu inasema uongo.

Uchambuzi wa kushindwa, si lawama:

- Mtelezo: hali ya hewa na shinikizo la ugonjwa viliondoka dirisha la mafunzo na nyaraka. Jedwali lililowekwa kando la msimu jana haliwezi kuhakikisha wiki hii.
- Hatari ya upuuzi wenye uhakika: kituo kikiwa msaada unaozalisha bila urejeshaji wa tahadhari ya KALRO au kaunti ya wiki hii, linaweza kuweka sauti tulivu huku likiwa na kosa. Ikiwa ni urejeshaji, hifadhi ya nyaraka huenda imepitwa na wakati — kushindwa kulekule, marekebisho tofauti.
- Watu: maafisa waliacha kutembea mashamba kwa sababu SMS "ilikuwa inafanya kazi". Ufuatiliaji haukuwa kipengele cha kalenda.

Unachoandika kwenye dokezo la tukio:

1. Simamisha SMS za kiotomatiki za hatari ya blight katika wadi zilizoathirika wiki hii; maafisa warudi kwenye orodha ya zamani ya kupiga simu.
2. Linganisha ujumbe wa siku 14 zilizopita na dokezo za shambani za mtaalamu (hata mashamba 40 ni bora kuliko hakuna).
3. Burudisha chanzo cha ukweli (tahadhari ya kaunti, mwongozo wa KALRO) na kisha uendelee.
4. Ongeza kichochezi cha msimu: baada ya kizingiti cha wiki ya mvua, mtu lazima athibitishe ujumbe tena.
5. Waambie wakulima, kwa Kiswahili, kwamba zana ilisimamishwa kwa sababu hali ya hewa ilibadilika, si kwa sababu walifanya kosa.

Huo ni utawala. Kutuma radhi yenye furaha kutoka chatbot bila kusimamisha si hivyo.`
      ),
      quiz(
        "A school helper starts inventing CBC strand names after a curriculum circular. Staff still trust the fluent answers. First control?",
        "Kisaidizi cha shule kinaanza kuumba majina ya strand za CBC baada ya waraka wa mtaala. Wafanyakazi bado wanaamini majibu laini. Udhibiti wa kwanza?",
        [
          "Add more confident wording so pupils feel sure.",
          "Pause unsupervised answers, retrieve only the new circular, require abstain if the strand is not in the fetched text, and sample-check a week's logs.",
          "Fine-tune overnight on whatever is on the open internet.",
          "Tell teachers the Kenya AI Strategy forbids pausing tools.",
        ],
        [
          "Ongeza maneno yenye uhakika ili wanafunzi wahisi uhakika.",
          "Simamisha majibu yasiyosimamiwa, rejelea waraka mpya tu, hitaji kukataa kujibu strand isipokuwa kwenye maandishi yaliyoletwa, na kagua sampuli ya logi za wiki.",
          "Fanya fine-tune usiku kucha kwa chochote kilicho mtandaoni.",
          "Waambie walimu Mkakati wa AI wa Kenya unakataza kusimamisha zana.",
        ],
        1,
        "This is document drift plus confident nonsense. Pause, refresh retrieval, abstain, sample logs. Confidence wording makes harm smoother. The strategy does not ban pause.",
        "Huu ni mtelezo wa nyaraka pamoja na upuuzi wenye uhakika. Simamisha, burudisha urejeshaji, kataa kujibu, kagua logi. Maneno ya uhakika yanatengeneza madhara laini. Mkakati haukatazi kusimamisha."
      ),
      scenario({
        titleEn: "Scenario: expand to a new county",
        titleSw: "Hali halisi: panua hadi kaunti mpya",
        situationEn:
          "A health-flag tool did well in Kisumu clinics. The ministry wants it in Mandera next month. No Mandera hold-out exists. CHPs there work in different languages. A dashboard still shows last quarter's Kisumu score.",
        situationSw:
          "Zana ya alama ya afya ilifanya vizuri katika kliniki za Kisumu. Wizara inaitaka Mandera mwezi ujao. Hakuna hold-out ya Mandera. CHP huko wanafanya kazi kwa lugha tofauti. Dashibodi bado inaonyesha alama ya Kisumu ya robo iliopita.",
        questionEn: "What do you specify?",
        questionSw: "Unaeleza nini?",
        optionsEn: [
          "Copy the Kisumu score onto the Mandera slide; the model is the same file.",
          "Treat Mandera as a new evaluation: local sample, language check, CHP workflow, then a go/no-go. Keep Kisumu running if its own monitoring is still healthy.",
          "Switch off Kisumu so nobody can accuse you of favouring one county.",
          "Replace CHPs in Mandera with the chatbot so language is no longer an issue.",
        ],
        optionsSw: [
          "Nakili alama ya Kisumu kwenye slaidi ya Mandera; modeli ni faili lilelile.",
          "Chukulia Mandera kama tathmini mpya: sampuli ya ndani, ukaguzi wa lugha, mtiririko wa CHP, kisha ndiyo/hapana. Kisumu iendelee ufuatiliaji wake ukiwa bado mzima.",
          "Zima Kisumu ili mtu yeyote asishutumu kupendelea kaunti moja.",
          "Badilisha CHP Mandera na chatbot ili lugha isiwe tena suala.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Same file, different world. Geographic shift is a new test.",
          "Correct. Expansion is evaluation plus language plus workflow. Do not punish a working site to hide an untested one.",
          "Turning off a monitored success does not create a Mandera test.",
          "Replacing CHPs with a bot deletes the people who catch confident nonsense. Language becomes more of an issue, not less.",
        ],
        hintsSw: [
          "Faili lilelile, dunia tofauti. Mabadiliko ya eneo ni jaribio jipya.",
          "Sahihi. Upanuzi ni tathmini pamoja na lugha pamoja na mtiririko. Usiadhibu kituo kinachofanya kazi ili kuficha kitu ambacho hakijajaribiwa.",
          "Kuzima mafanikio yanayofuatiliwa hakuzali jaribio la Mandera.",
          "Kubadilisha CHP na bot kunaondoa watu wanaonasa upuuzi wenye uhakika. Lugha inakuwa suala zaidi, si pungufu.",
        ],
        explainEn:
          "New counties need new held-out evidence. Dashboards that display old geography are a governance failure waiting for a journalist.",
        explainSw:
          "Kaunti mpya zinahitaji ushahidi mpya uliowekwa kando. Dashibodi zinazoonyesha jiografia ya zamani ni kushindwa kwa utawala vinavyosubiri mwandishi wa habari.",
      }),
      note(
        "Try it: write a pause rule",
        "Jaribu: andika kanuni ya kusimamisha",
        `For your system, write four lines that a duty officer could follow at 6 a.m.:

- Metric and threshold that pause sending or scoring.
- Who they phone.
- What users are told, in which language.
- What is still allowed (for example, viewing last week's list, not generating new advice).

Carry forward:
- Drift, new places, and confident nonsense are expected. A pause rule is part of the spec.
- Unit 7: some failures are not the weather. They are people leaking data into prompts, or talking a bot out of its rules.`,
        `Kwa mfumo wako, andika mistari minne ambayo afisa wa zamu angeweza kufuata saa kumi na mbili asubuhi:

- Kipimo na kizingiti vinavyosimamisha kutuma au kutoa alama.
- Wampigia nani simu.
- Watumiaji wanaambiwa nini, kwa lugha ipi.
- Nini bado kinaruhusiwa (kwa mfano, kuona orodha ya wiki jana, si kuzalisha ushauri mpya).

Kumbuka:
- Mtelezo, sehemu mpya, na upuuzi wenye uhakika vinatarajiwa. Kanuni ya kusimamisha ni sehemu ya maelezo.
- Somo la 7: kushindwa kukusa si hali ya hewa. Ni watu wanaovujisha data kwenye prompt, au wanaozungumza bot itoke kwenye sheria zake.`
      ),
    ],
  },
  {
    id: "m0-a-u7",
    titleEn: "Security in plain language",
    titleSw: "Usalama kwa lugha rahisi",
    cards: [
      note(
        "Two failures you must specify without turning into an attacker",
        "Kushindwa kutatu ambavyo lazima ueleze bila kuwa mshambuliaji",
        `This unit is conceptual. It does not teach how to break a system. It teaches two ways AI systems leak or disobey in ordinary Kenyan workplaces, and the controls you write into a spec. You do not need exploit steps, payloads, or recipes. If someone asks you for those, you refuse.

Failure A: leaking data in prompts. A CHP, teller, or teacher pastes a list of names, phone numbers, ID numbers, marks, or clinic notes into an assistant that runs on someone else's computer. The model does not need to be "hacked". The staff member sent the data. The vendor may store prompts. Another staff member may see a shared chat. A lost phone may show the last paste. The Data Protection Act, 2019 still applies: that paste is processing of personal data, often sensitive, sometimes children's.

Controls you can name without attacking anyone: do not put personal identifiers into prompts; use class codes and ticket numbers; run local or county-hosted tools for health and pupil data; disable prompt storage in the contract; log who sent what without copying the body to a group chat; train staff that "the box on the internet is not your notebook".

Failure B: people tricking a bot to ignore rules. If you put a policy in a prompt ("never give chemical doses", "never approve a loan", "never tell a pupil another pupil's marks"), a determined person will try to talk the bot into ignoring that policy. You should assume this will be attempted. You should not collect or practise the wording they use.

Controls: the bot must not be the place where the forbidden action can actually happen. Payments, prescriptions, loan approvals, and releasing marks must require a human confirmation in a separate system with its own password and log. Retrieval should quote documents, not invent permissions. Over-permissioned tools (a bot that can send M-Pesa, write to the student information system, or change a SACCO ledger) turn a conversation into a transaction. Remove those powers. If a vendor says "our model is aligned, so it will never disobey", write: "We still will not give it the keys."

What you tell a board: security here is mostly about not sending secrets into chats, and not letting a chat hold the keys to money, medicine, or records. Fancy training clusters do not replace those two sentences.`,
        `Somo hili ni la dhana. Halifundishi jinsi ya kuvunja mfumo. Linafundisha njia mbili ambazo mifumo ya AI huvuja au kuasi katika sehemu za kazi za kawaida Kenya, na udhibiti unaoandika kwenye maelezo. Huhitaji hatua za exploit, payload, au mapishi. Mtu akiwaomba hayo, unakataa.

Kushindwa A: kuvujisha data kwenye prompt. CHP, karani, au mwalimu anapachika orodha ya majina, namba za simu, vitambulisho, alama, au dokezo za kliniki kwenye msaada unaoendeshwa kwenye kompyuta ya mtu mwingine. Modeli haihitaji "kudukuliwa". Mfanyakazi alituma data. Muuzaji anaweza kuhifadhi prompt. Mfanyakazi mwingine anaweza kuona gumzo linaloshirikiwa. Simu iliyopotea inaweza kuonyesha ubandike wa mwisho. Sheria ya Ulinzi wa Data, 2019 bado inatumika: ubandike huo ni uchakataji wa data binafsi, mara nyingi nyeti, wakati mwingine ya watoto.

Udhibiti unaweza kutaja bila kushambulia mtu: usiweke vitambulisho binafsi kwenye prompt; tumia misimbo ya darasa na namba za tiketi; endesha zana za ndani au za kaunti kwa data ya afya na wanafunzi; zima uhifadhi wa prompt katika mkataba; rekodi nani alituma nini bila kunakili kiini kwenye kundi; funza wafanyakazi kwamba "kisanduku mtandaoni si daftari lako".

Kushindwa B: watu kudanganya bot ili ipuuze sheria. Ukiweka sera kwenye prompt ("usitoe vipimo vya kemikali", "usikubali mkopo", "usimwambie mwanafunzi alama za mwenzake"), mtu mwenye azimio atajaribu kuizungumza bot ipuuze sera hiyo. Unapaswa kudhani hii itajaribiwa. Usikusanye wala kuzoea maneno wanayotumia.

Udhibiti: bot isiwepo mahali kitendo kilichokatazwa kinaweza kutokea kweli. Malipo, maagizo ya dawa, idhini za mikopo, na kutoa alama lazima zihitaji uthibitisho wa mwanadamu katika mfumo tofauti wenye nenosiri na logi yake. Urejeshaji unapaswa kunukuu nyaraka, si kuumba ruhusa. Zana zenye ruhusa nyingi (bot inayoweza kutuma M-Pesa, kuandika kwenye mfumo wa wanafunzi, au kubadilisha daftari la SACCO) hugeuza mazungumzo kuwa muamala. Ondoa nguvu hizo. Muuzaji akisema "modeli yetu imewekwa sawa, kwa hiyo haitawahi kuasi", andika: "Bado hatutampa funguo."

Unachoambia bodi: usalama hapa ni zaidi kuhusu kutotuma siri kwenye gumzo, na kutomruhusu gumzo lishike funguo za pesa, dawa, au rekodi. Makundi ya mafunzo ya kisasa hayachukui nafasi ya sentensi hizo mbili.`
      ),
      reveal([
        {
          termEn: "Prompt leak",
          termSw: "Uvujaji wa prompt",
          defEn: "Personal or confidential text sent into an assistant, where staff, vendor storage, or a lost device can expose it.",
          defSw: "Maandishi binafsi au ya siri yaliyotumwa kwenye msaada, ambapo wafanyakazi, hifadhi ya muuzaji, au kifaa kilichopotea vinaweza kuyafichua.",
        },
        {
          termEn: "Policy bypass (conceptual)",
          termSw: "Kupitisha sera (dhana)",
          defEn: "A person trying to talk a bot into ignoring written limits. Assume it will be tried. Do not rehearse how.",
          defSw: "Mtu anayejaribu kuizungumza bot ipuuze mipaka iliyoandikwa. Dhani itajaribiwa. Usizoee jinsi.",
        },
        {
          termEn: "Human gate",
          termSw: "Mlango wa mwanadamu",
          defEn: "A separate confirmation by a person, in a system that can actually move money, records or medicine.",
          defSw: "Uthibitisho tofauti wa mtu, katika mfumo unaoweza kusogeza pesa, rekodi au dawa kweli.",
        },
        {
          termEn: "Least data in the prompt",
          termSw: "Data ndogo kwenye prompt",
          defEn: "Send only the codes and facts needed for this answer. No ID lists, no full clinic notes, no marks sheets.",
          defSw: "Tuma misimbo na ukweli unaohitajika kwa jibu hili tu. Hakuna orodha za vitambulisho, dokezo kamili za kliniki, wala karatasi za alama.",
        },
        {
          termEn: "Least power for the bot",
          termSw: "Nguvu ndogo kwa bot",
          defEn: "The assistant can draft or fetch. It cannot pay, prescribe, expel, or overwrite the ledger by itself.",
          defSw: "Msaada unaweza kuandaa rasimu au kuleta. Haiwezi kulipa, kuagiza dawa, kufukuza, au kufuta daftari peke yake.",
        },
      ]),
      note(
        "Worked example: CHP notes and a shared phone",
        "Mfano kamili: dokezo za CHP na simu inayoshirikiwa",
        `Kacheliba Ward again. A CHP, Amina, wants help turning messy handwritten notes into a tidy Kiswahili summary for the monthly meeting. A colleague says, "Paste the page into the assistant; it is fast." The page has children's ages, household names, and symptoms. The phone is shared with Amina's brother. The assistant is a large remote model. Prompt storage is on by default in the vendor's terms.

Specify the safe path:

- Amina does not paste the page. She copies counts only: "12 households visited, 3 missed immunisation, 1 referral, no names." The assistant may help tidy the counts into a poster.
- If individual follow-up is needed, it stays in the county paper register or an approved offline app that does not send notes abroad.
- The vendor contract for any office drafting tool: no training on our prompts, storage off or 24-hour deletion, no shared team inbox of chats.
- Staff briefing, 15 minutes, in Kiswahili: the internet box is not the register. A lost or shared phone is a leak. Nobody will be punished for working slowly on paper; people will be stopped for pasting names.

M-Kliniki Nia shows that health assistants can be designed around English and Kiswahili and around existing telemedicine and M-Pesa rails. That is an architecture lesson. It is not permission to paste a CHP page into a generic remote chat.

Handover sentence: "We treat prompt paste as a data incident waiting to happen. The bot drafts from counts. The register stays the register."`,
        `Wadi ya Kacheliba tena. CHP, Amina, anataka msaada kugeuza dokezo za mkono zisizo na taratibu kuwa muhtasari safi wa Kiswahili kwa mkutano wa mwezi. Mwenzake anasema, "Bandika ukurasa kwenye msaada; ni haraka." Ukurasa una umri wa watoto, majina ya kaya, na dalili. Simu inashirikiwa na kaka ya Amina. Msaada ni modeli kubwa ya mbali. Uhifadhi wa prompt uko wazi kwa chaguo-msingi katika masharti ya muuzaji.

Eleza njia salama:

- Amina habandiki ukurasa. Ananakili hesabu tu: "kaya 12 zilitembelewa, 3 zilikosa chanjo, rufaa 1, hakuna majina." Msaada unaweza kusaidia kupanga hesabu kuwa bango.
- Ufuatiliaji wa mtu binafsi ukihitajika, unabaki kwenye daftari la karatasi la kaunti au programu iliyoidhinishwa ya offline isiyotuma dokezo nje ya nchi.
- Mkataba wa muuzaji kwa zana yoyote ya kuandaa rasimu ofisini: hakuna mafunzo kwa prompt zetu, hifadhi imezimwa au kufutwa kwa masaa 24, hakuna kisanduku cha pamoja cha gumzo.
- Maelezo kwa wafanyakazi, dakika 15, kwa Kiswahili: kisanduku cha mtandao si daftari. Simu iliyopotea au inayoshirikiwa ni uvujaji. Hakuna atakayeadhibiwa kwa kufanya kazi polepole kwenye karatasi; watu watasimamishwa kwa kubandika majina.

M-Kliniki Nia inaonyesha kwamba wasaidizi wa afya wanaweza kupangwa kuzunguka Kiingereza na Kiswahili na njia zilizopo za telemedicine na M-Pesa. Hilo ni funzo la usanifu. Si ruhusa ya kubandika ukurasa wa CHP kwenye gumzo la mbali la jumla.

Sentensi ya kukabidhi: "Tunachukulia kubandika prompt kama tukio la data linalosubiri kutokea. Bot inaandaa rasimu kutoka hesabu. Daftari linabaki daftari."`
      ),
      quiz(
        "A SACCO wants a bot that can both answer by-laws and push M-Pesa loans. What is the expert security specification?",
        "SACCO inataka bot inayoweza kujibu kanuni na kusukuma mikopo ya M-Pesa. Maelezo ya usalama ya mtaalamu ni yapi?",
        [
          "Allow both in one chat so members are not delayed.",
          "The bot may retrieve by-laws. Any payment or loan change needs a human gate in the existing M-Pesa and core-banking process, with no wallet keys in the assistant.",
          "Paste the full member ledger into the prompt so answers are personal.",
          "Publish a list of example trick questions so youth groups can practise them.",
        ],
        [
          "Ruhusu zote katika gumzo moja ili wanachama wasicheleweshwe.",
          "Bot inaweza kurejelea kanuni. Mabadiliko yoyote ya malipo au mkopo yanahitaji mlango wa mwanadamu katika mchakato uliopo wa M-Pesa na benki msingi, bila funguo za pochi kwenye msaada.",
          "Bandika daftari kamili la wanachama kwenye prompt ili majibu yawe ya kibinafsi.",
          "Chapisha orodha ya maswali ya ujanja ili vikundi vya vijana vizoee.",
        ],
        1,
        "Least power and least data. Combining advice and payment in one chat is how a talked-around rule becomes a transfer. Practising trick questions is not this course.",
        "Nguvu ndogo na data ndogo. Kuunganisha ushauri na malipo katika gumzo moja ndiyo jinsi sheria iliyozungumzwa inavyokuwa uhamisho. Kuzoea maswali ya ujanja si kozi hii."
      ),
      scenario({
        titleEn: "Scenario: the intern and the shared chat",
        titleSw: "Hali halisi: mwanafunzi wa kazi na gumzo linaloshirikiwa",
        situationEn:
          "An intern at a county education office pastes a spreadsheet of bursary applicants (names, ID numbers, marks) into a shared staff assistant to 'sort the deserving'. A director asks you whether this is clever use of AI.",
        situationSw:
          "Mwanafunzi wa kazi katika ofisi ya elimu ya kaunti anabandika jedwali la waombaji bursary (majina, vitambulisho, alama) kwenye msaada wa pamoja wa wafanyakazi ili 'kupanga wanaostahili'. Mkurugenzi anakwuliza kama hii ni matumizi werevu ya AI.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Praise the intern; ranking is what AI is for.",
          "Treat it as a data incident: stop the paste, remove the file from the chat if you can, do not spread screenshots, report to the controller, and redesign the job as a person-plus-spreadsheet or a local tool that never needed IDs in a prompt.",
          "Ask the intern to write down exactly how they phrased any attempts to bypass the assistant's rules, for training.",
          "Forward the spreadsheet to a larger remote model so the ranking is 'more accurate'.",
        ],
        optionsSw: [
          "Msifu mwanafunzi; upangaji ndiyo kazi ya AI.",
          "Chukulia kama tukio la data: simamisha ubandike, ondoa faili kwenye gumzo ukiweza, usisambaze picha za skrini, ripoti kwa mdhibiti, na ubuni kazi upya kama mtu-na-jedwali au zana ya ndani ambayo haikuhitaji vitambulisho kwenye prompt.",
          "Mwombe mwanafunzi aandike jinsi alivyotunga majaribio yoyote ya kupitisha sheria za msaada, kwa mafunzo.",
          "Sambaza jedwali kwa modeli kubwa zaidi ya mbali ili upangaji uwe 'sahihi zaidi'.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Clever is not lawful. IDs and marks of applicants in a shared remote chat are a leak and a fairness problem.",
          "Correct. Contain, notify, redesign. Ranking deserving students is a human policy job, not a paste.",
          "Do not collect bypass recipes. That is the opposite of this unit.",
          "Forwarding duplicates the leak. Accuracy of a ranker is not the incident.",
        ],
        hintsSw: [
          "Werevu si halali. Vitambulisho na alama za waombaji katika gumzo la mbali linaloshirikiwa ni uvujaji na tatizo la haki.",
          "Sahihi. Zuia, julisha, buni upya. Kupanga wanafunzi wanaostahili ni kazi ya sera ya binadamu, si ubandike.",
          "Usikusanye mapishi ya kupitisha. Hicho ni kinyume cha somo hili.",
          "Kusambaza kunanakili uvujaji. Usahihi wa mpangaji si tukio.",
        ],
        explainEn:
          "Security for this track is contain-the-paste and never-give-the-bot-the-keys. Ranking bursaries belongs with a documented human process, not a shared prompt.",
        explainSw:
          "Usalama kwa mfululizo huu ni kuzuia-ubandike na kutokupa-bot-funguo. Kupanga bursary ni ya mchakato wa binadamu ulioandikwa, si prompt inayoshirikiwa.",
      }),
      note(
        "Try it: two rules on the wall",
        "Jaribu: kanuni mbili ukutani",
        `Write two sentences, in the language staff actually use, suitable for a clinic, SACCO or staffroom wall:

1. What must never go into a prompt.
2. What the assistant is never allowed to do by itself (pay, prescribe, change marks, change the ledger).

Carry forward:
- If the keys are not in the chat, many 'tricks' stop mattering. If the register is not in the prompt, many leaks never start.
- Unit 8: when a vendor sells you the chat, you need ten questions before a county, SACCO or school signs.`,
        `Andika sentensi mbili, kwa lugha ambayo wafanyakazi wanatumia kweli, zinazofaa ukuta wa kliniki, SACCO au chumba cha walimu:

1. Nini hapaswi kuingia kwenye prompt kamwe.
2. Msaada hauruhusiwi kufanya nini peke yake (kulipa, kuagiza dawa, kubadilisha alama, kubadilisha daftari).

Kumbuka:
- Funguo zisipo katika gumzo, 'ujanja' mwingi unaacha kuwa na maana. Daftari lisipo kwenye prompt, uvujaji mwingi hauanzi.
- Somo la 8: muuzaji akikuuzia gumzo, unahitaji maswali kumi kabla kaunti, SACCO au shule haitii saini.`
      ),
    ],
  },
  {
    id: "m0-a-u8",
    titleEn: "Buying or adopting vendor AI",
    titleSw: "Kununua au kupokea AI ya muuzaji",
    cards: [
      note(
        "Ten questions before a county, SACCO or school signs",
        "Maswali kumi kabla kaunti, SACCO au shule haitii saini",
        `Most Kenyan organisations will not build a model. They will be sold one. Expert work is a buying conversation that a director can repeat without you in the room. Write these ten questions into the request for quotations. If a vendor cannot answer in plain language, you do not have a partner. You have a demo.

1. What job does this tool do, in one sentence, and which of the five kinds of system in unit 1 is it?
2. What data of ours will it use, who is controller and processor, and where will that data live — including prompts and logs?
3. Will any personal data leave Kenya, and what is the lawful basis for that transfer?
4. On whose people was it evaluated? Show held-out results for Kenyan users, our counties, and our languages — not only a foreign leaderboard.
5. When it is wrong, who is harmed, and what are the false-negative and false-positive rates on a local slice?
6. Can a staff member override it, is that override logged, and can the bot take an irreversible action (pay, lock a record, send a chemical name) without a human gate?
7. What do we pay in month 13, per seat, per SMS, per photo, or per token, when the pilot gift ends?
8. If you leave Kenya, raise prices, or shut the service, how do we export our documents, logs and models, and keep the work going for 12 months?
9. Who trains our staff, in which languages, on which days, and whom do we call at 9 p.m. when the clinic queue is still there?
10. Which of our laws and policies must this satisfy (Data Protection Act, 2019; sector rules such as PCPB for chemicals; school rules for children), and will you sign them as a processor?

Kenya's AI Strategy 2025–2030 names public services and MSMEs among priority sectors. That is an invitation to procure carefully, not to skip the ten questions because a national document exists.

You may also adopt a tool that is already in the market rather than run a tender: FarmerAI on channels farmers use; Agrika for photo detection and PCPB-tied stock; M-Kliniki Nia for bilingual health assistance with telemedicine and M-Pesa. Adoption still needs the ten questions. A known brand is not a held-out test on your ward.`,
        `Mashirika mengi Kenya hayatajenga modeli. Yatauza. Kazi ya mtaalamu ni mazungumzo ya ununuzi ambayo mkurugenzi anaweza kurudia bila wewe chumbani. Andika maswali haya kumi kwenye ombi la bei. Muuzaji asipoweza kujibu kwa lugha rahisi, huna mwenzi. Una onyesho.

1. Zana hii inafanya kazi gani, kwa sentensi moja, na ni aina ipi kati ya tano katika somo la 1?
2. Data gani yetu itatumia, mdhibiti na mchakataji ni nani, na data hiyo itaishi wapi — ikiwa ni pamoja na prompt na logi?
3. Je, data binafsi yoyote itaondoka Kenya, na msingi halali wa uhamisho huo ni nini?
4. Imetathminiwa kwa watu wa nani? Onyesha matokeo yaliyowekwa kando kwa watumiaji wa Kenya, kaunti zetu, na lugha zetu — si ubao wa kigeni tu.
5. Inapokosea, nani anadhurika, na viwango vya kukosa na kengele za uongo kwenye kipande cha ndani ni vipi?
6. Je, mfanyakazi anaweza kuibatilisha, je, kubatilisha kunarekodiwa, na je, bot inaweza kuchukua hatua isiyoweza kurudishwa (kulipa, kufunga rekodi, kutuma jina la kemikali) bila mlango wa mwanadamu?
7. Tunalipa nini mwezi wa 13, kwa kiti, kwa SMS, kwa picha, au kwa tokeni, zawadi ya majaribio ikishaisha?
8. Mkiondoka Kenya, mkipandisha bei, au mkifunga huduma, tunatoa nje vipi nyaraka, logi na modeli zetu, na kuendeleza kazi kwa miezi 12?
9. Nani anawafunza wafanyakazi wetu, kwa lugha zipi, siku zipi, na twampigia nani saa tatu usiku kliniki ikiwa bado na foleni?
10. Ni sheria na sera zipi zetu ambazo hii lazima itimize (Sheria ya Ulinzi wa Data, 2019; kanuni za sekta kama PCPB kwa kemikali; kanuni za shule kwa watoto), na je, mtatia saini kama mchakataji?

Mkakati wa AI wa Kenya 2025–2030 unataja huduma za umma na biashara ndogo kati ya sekta za kipaumbele. Huo ni mwaliko wa kununua kwa uangalifu, si kuruka maswali kumi kwa sababu waraka wa kitaifa upo.

Unaweza pia kupokea zana ambayo tayari iko sokoni badala ya zabuni: FarmerAI kwenye njia wakulima wanazotumia; Agrika kwa utambuzi wa picha na hisa iliyofungwa na PCPB; M-Kliniki Nia kwa msaada wa afya wa lugha mbili pamoja na telemedicine na M-Pesa. Kupokea bado kunahitaji maswali kumi. Chapa inayojulikana si jaribio lililowekwa kando kwenye wadi yako.`
      ),
      reveal([
        {
          termEn: "Pilot gift",
          termSw: "Zawadi ya majaribio",
          defEn: "Free months that train your staff to depend on a tool before year-two prices appear.",
          defSw: "Miezi ya bure inayowazoeza wafanyakazi kutegemea zana kabla bei za mwaka wa pili hazijaonekana.",
        },
        {
          termEn: "Processor agreement",
          termSw: "Makubaliano ya mchakataji",
          defEn: "A written contract that binds the vendor to your purposes, location, retention and deletion duties.",
          defSw: "Mkataba ulioandikwa unaomfunga muuzaji kwa madhumuni, mahali, uhifadhi na wajibu wa kufuta.",
        },
        {
          termEn: "Exit clause",
          termSw: "Kifungu cha kutoka",
          defEn: "How you get your data and keep operating if the vendor leaves, raises prices, or shuts down.",
          defSw: "Jinsi unavyopata data yako na kuendelea kufanya kazi muuzaji akiondoka, akipandisha bei, au akifunga.",
        },
        {
          termEn: "Local eval slice",
          termSw: "Kipande cha tathmini ya ndani",
          defEn: "Held-out results on your people, languages and devices — the only scores that belong in a county paper.",
          defSw: "Matokeo yaliyowekwa kando kwa watu, lugha na vifaa vyako — alama pekee zinazostahili karatasi ya kaunti.",
        },
        {
          termEn: "Override log",
          termSw: "Kumbukumbu ya kubatilisha",
          defEn: "A record of when a person rejected the system's output, with reason. Needed for drift and for fairness questions.",
          defSw: "Rekodi ya wakati mtu alipokataa tokeo la mfumo, pamoja na sababu. Inahitajika kwa mtelezo na maswali ya haki.",
        },
      ]),
      note(
        "Worked example: county homework helper tender",
        "Mfano kamili: zabuni ya kisaidizi cha kazi za nyumbani cha kaunti",
        `Imagine County X education office (fictional) wants a CBC-aligned helper for 40 schools. Three vendors demo fluent Kiswahili. Your scoring sheet is the ten questions, not the demo.

Vendor A: general remote chatbot, data on servers abroad, no Kenyan held-out, free for a term, then a per-pupil fee that exceeds the meals budget, no processor agreement, staff training is "a PDF in English".

Vendor B: retrieval over teacher-approved notes hosted in Kenya, prompts stored 14 days then deleted, evaluation on two Kenyan schools with a language slice, human teachers remain the markers, year-two price in the paper, exit export in 30 days, training in Kiswahili in each sub-county, signs as processor under the Data Protection Act, 2019.

Vendor C: fine-tuned on "millions of essays" of unnamed origin, claims UNESCO alignment by quoting nothing, wants pupil essays from County X to "keep improving", can message parents on M-Pesa automatically.

You recommend B, with a written condition that children's data stays out of any further training, and that a third school is a held-out go-live test. You reject A on data path, cost and eval. You reject C on purpose limitation, children's data, and a bot that can message money channels.

That recommendation is the expert deliverable. "They all look smart" is not.`,
        `Fikiria ofisi ya elimu ya Kaunti X (ya kubuni) inataka kisaidizi kinacholingana na CBC kwa shule 40. Wauzaji watatu wanaonyesha Kiswahili laini. Karatasi yako ya alama ni maswali kumi, si onyesho.

Muuzaji A: chatbot ya jumla ya mbali, data kwenye seva nje ya nchi, hakuna hold-out ya Kenya, bure kwa muhula, kisha ada kwa kila mwanafunzi inayozidi bajeti ya milo, hakuna makubaliano ya mchakataji, mafunzo ya wafanyakazi ni "PDF kwa Kiingereza".

Muuzaji B: urejeshaji juu ya dokezo yaliyoidhinishwa na walimu yaliyohifadhiwa Kenya, prompt zinahifadhiwa siku 14 kisha kufutwa, tathmini katika shule mbili za Kenya pamoja na kipande cha lugha, walimu wanabaki wawekaji alama, bei ya mwaka wa pili kwenye karatasi, uhamisho wa kutoka kwa siku 30, mafunzo kwa Kiswahili katika kila kaunti ndogo, anatia saini kama mchakataji chini ya Sheria ya Ulinzi wa Data, 2019.

Muuzaji C: fine-tune kwa "mamilioni ya insha" ya asili isiyotajwa, anadai ulinganifu wa UNESCO bila kunukuu chochote, anataka insha za wanafunzi kutoka Kaunti X "kuendelea kuboresha", anaweza kuwaturumia wazazi kwenye M-Pesa kiotomatiki.

Unapendekeza B, kwa sharti lililoandikwa kwamba data ya watoto inabaki nje ya mafunzo yoyote zaidi, na kwamba shule ya tatu ni jaribio la hold-out kabla ya kuanza. Unakataa A kwa njia ya data, gharama na tathmini. Unakataa C kwa kikomo cha madhumuni, data ya watoto, na bot inayoweza kutuma kwenye njia za pesa.

Pendekezo hilo ndilo tokeo la mtaalamu. "Wote wanaonekana werevu" si hivyo.`
      ),
      quiz(
        "Which vendor answer should stop a SACCO signing this week?",
        "Ni jibu lipi la muuzaji linapaswa kuzuia SACCO kutia saini wiki hii?",
        [
          "Year-two price is in the quote, per member message.",
          "We cannot say where prompts are stored, and we will not sign as a processor.",
          "Held-out results include Kiswahili member queries from two branches.",
          "Officers can override a flag and the override is logged.",
        ],
        [
          "Bei ya mwaka wa pili iko kwenye nukuu, kwa kila ujumbe wa mwanachama.",
          "Hatuwezi kusema prompt zinahifadhiwa wapi, na hatutati saini kama mchakataji.",
          "Matokeo yaliyowekwa kando yanajumuisha maswali ya wanachama kwa Kiswahili kutoka matawi mawili.",
          "Maafisa wanaweza kubatilisha alama na kubatilisha kunarekodiwa.",
        ],
        1,
        "Unknown storage plus refusal to be a processor means you cannot meet the Data Protection Act, 2019. The other answers are what you want to hear.",
        "Hifadhi isiyojulikana pamoja na kukataa kuwa mchakataji inamaanisha huwezi kutimiza Sheria ya Ulinzi wa Data, 2019. Majibu mengine ndiyo unayotaka kusikia."
      ),
      scenario({
        titleEn: "Scenario: the director already shook hands",
        titleSw: "Hali halisi: mkurugenzi tayari amepeana mkono",
        situationEn:
          "A county director shook hands with Vendor A after a visitors' day. No paper answers the ten questions. Staff have started pasting pupil names into the demo login. The director says questioning the vendor is 'anti-innovation' and cites the KICC strategy launch.",
        situationSw:
          "Mkurugenzi wa kaunti alipeana mkono na Muuzaji A baada ya siku ya wageni. Hakuna karatasi inayojibu maswali kumi. Wafanyakazi wameanza kubandika majina ya wanafunzi kwenye kuingia kwa onyesho. Mkurugenzi anasema kuuliza muuzaji ni 'kupinga uvumbuzi' na anataja uzinduzi wa mkakati wa KICC.",
        questionEn: "What is the expert move?",
        questionSw: "Hatua ya mtaalamu ni ipi?",
        optionsEn: [
          "Stay silent; the handshake is a contract.",
          "Write a one-page briefing: the strategy launch on 27 March 2025 at KICC does not replace procurement or the Data Protection Act; halt name-paste; require the ten answers before any paid order; offer to sit with the director and the vendor.",
          "Leak the demo password to the press so the project dies.",
          "Replace Vendor A with a fine-tune cluster the county will run this month.",
        ],
        optionsSw: [
          "Kaa kimya; kupeana mkono ni mkataba.",
          "Andika maelezo ya ukurasa mmoja: uzinduzi wa mkakati tarehe 27 Machi 2025 katika KICC hauchukui nafasi ya ununuzi wala Sheria ya Ulinzi wa Data; simamisha kubandika majina; hitaji majibu kumi kabla ya oda yoyote ya malipo; jitolee kukaa na mkurugenzi na muuzaji.",
          "Vujisha nenosiri la onyesho kwa waandishi ili mradi ufe.",
          "Badilisha Muuzaji A na kundi la fine-tune ambalo kaunti itaendesha mwezi huu.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A handshake is not a processor agreement. Silence makes you part of the paste.",
          "Correct. Govern in writing. The national strategy is context, not a waiver. Stopping a leak is protection, not anti-innovation.",
          "Press leaks of passwords are not a handover. They create a second incident.",
          "You cannot stand up a training cluster this month to escape a contract conversation.",
        ],
        hintsSw: [
          "Kupeana mkono si makubaliano ya mchakataji. Kimya kinakufanya sehemu ya ubandike.",
          "Sahihi. Tawala kwa maandishi. Mkakati wa kitaifa ni muktadha, si msamaha. Kusimamisha uvujaji ni ulinzi, si kupinga uvumbuzi.",
          "Uvujaji wa manenosiri kwa waandishi si kukabidhi. Unaunda tukio la pili.",
          "Huwezi kusimamisha kundi la mafunzo mwezi huu ili kuepuka mazungumzo ya mkataba.",
        ],
        explainEn:
          "The strategy is a reason to ask better questions, not fewer. Halt the leak, put the ten questions on paper, then buy or walk away.",
        explainSw:
          "Mkakati ni sababu ya kuuliza maswali bora, si machache. Simamisha uvujaji, weka maswali kumi kwenye karatasi, kisha nunua au ondoka.",
      }),
      note(
        "Try it: score a real offer",
        "Jaribu: pima ofa halisi",
        `Find a brochure, email or memory of an AI offer to a Kenyan organisation. Score it 0 or 1 on each of the ten questions. A score under 7 is a pause. Write one sentence you would send back: "Please answer questions 2, 4, 7 and 8 in writing before we schedule a second demo."

Carry forward:
- Buying is specification plus evaluation plus contract. Fluency is not a score.
- Unit 9: if question 4 had no language slice, you do not have a Kenyan system yet.`,
        `Tafuta broshua, barua pepe au kumbukumbu ya ofa ya AI kwa shirika la Kenya. Ipime 0 au 1 kwa kila moja ya maswali kumi. Alama chini ya 7 ni kusimama. Andika sentensi moja unayoweza kurudisha: "Tafadhali jibu maswali 2, 4, 7 na 8 kwa maandishi kabla hatujapanga onyesho la pili."

Kumbuka:
- Kununua ni maelezo pamoja na tathmini pamoja na mkataba. Ulaini si alama.
- Somo la 9: swali la 4 likikosa kipande cha lugha, bado huna mfumo wa Kenya.`
      ),
    ],
  },
  {
    id: "m0-a-u9",
    titleEn: "Kenyan languages as a design requirement",
    titleSw: "Lugha za Kenya kama sharti la muundo",
    cards: [
      note(
        "If it only works in English, it does not work here",
        "Ikiwa inafanya kazi kwa Kiingereza tu, haifanyi kazi hapa",
        `Language is not a coat of paint you add after the model is "done". It is part of who can use the system, who is harmed by errors, and whether retrieval finds the right document.

Design requirement, not afterthought, means you write into the spec:

- Which languages the user may speak or type (Kiswahili, English, and the languages of this county — for example Dholuo, Kikamba, Somali, Kalenjin, or Sheng in a Nairobi shop).
- Which language the source of truth is in. A KALRO leaflet in English retrieved for a Kiswahili question is a translation job, not magic.
- How you will evaluate: a held-out set of real questions in those languages, scored by people who speak them, not by a director who speaks English in the boardroom.
- What happens when the user mixes languages in one SMS, as people do.
- Voice: if farmers or patients will speak, you need noise, accents, and cheap phones in the test, not a quiet studio.

Translation afterthought is the common failure. A team builds in English, runs a cheap translate step, and ships. Medical and chemical words go wrong. Tone becomes rude. Sheng is treated as error. Older users are told to "switch to English". That is exclusion with a progress report.

Real Kenyan products already treat language as a rail, like M-Pesa is a rail. M-Kliniki Nia is an agentic health assistant in English and Kiswahili, built to sit with telemedicine and M-Pesa. Agrika uses Swahili voice agents around agrovet search. FarmerAI reaches people on SMS and WhatsApp — channels where Kiswahili is ordinary. Your spec should sound like those choices, not like an export demo.

UNESCO's 2024 AI competency frameworks for teachers and students treat understanding and creating with AI as something people learn in their education systems. For Kenya that includes CBC classrooms where Kiswahili and English already share the day. A helper that only explains in one language is not curriculum-aligned, however fluent it is.

Expert test: give the system the same request in English and in Kiswahili (and a third language you actually need). If the English answer is usable and the other is nonsense or missing, you do not have a finished system. You have a prototype of inequality.`,
        `Lugha si rangi unayoongeza modeli "ikimalizika". Ni sehemu ya nani anaweza kutumia mfumo, nani anadhurika kwa makosa, na kama urejeshaji unapata waraka sahihi.

Sharti la muundo, si baada ya kufikiri, inamaanisha unaandika kwenye maelezo:

- Ni lugha zipi mtumiaji anaweza kuongea au kuandika (Kiswahili, Kiingereza, na lugha za kaunti hii — kwa mfano Dholuo, Kikamba, Kisomali, Kalenjin, au Sheng katika duka la Nairobi).
- Chanzo cha ukweli kiko katika lugha ipi. Kijitabu cha KALRO kwa Kiingereza kilicholetwa kwa swali la Kiswahili ni kazi ya tafsiri, si uchawi.
- Utatathminije: seti iliyowekwa kando ya maswali halisi katika lugha hizo, yaliyowekwa alama na watu wanaoyazungumza, si mkurugenzi anayeongea Kiingereza katika bodi.
- Nini hutokea mtumiaji anapochanganya lugha katika SMS moja, kama watu hufanya.
- Sauti: wakulima au wagonjwa watakapoongea, unahitaji kelele, lafudhi, na simu za bei nafuu kwenye jaribio, si studio tulivu.

Tafsiri baada ya kufikiri ndiyo kushindwa kwa kawaida. Timu inajenga kwa Kiingereza, inaendesha hatua ya tafsiri ya bei nafuu, na inatuma. Maneno ya tiba na kemikali yanakosea. Sauti inakuwa ya jeuri. Sheng inachukuliwa kama kosa. Watumiaji wazee wanaambiwa "badilisha Kiingereza". Huo ni utengaji wenye ripoti ya maendeleo.

Bidhaa halisi za Kenya tayari zinachukulia lugha kama njia, kama M-Pesa ni njia. M-Kliniki Nia ni msaada wa afya wa kiagent kwa Kiingereza na Kiswahili, uliojengwa kukaa na telemedicine na M-Pesa. Agrika hutumia mawakala wa sauti wa Kiswahili kuzunguka utafutaji wa agrovet. FarmerAI inawafikia watu kwenye SMS na WhatsApp — njia ambazo Kiswahili ni cha kawaida. Maelezo yako yanapaswa kusikika kama chaguzi hizo, si kama onyesho la kuuza nje.

Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi inachukulia kuelewa na kuunda na AI kama kitu watu hujifunza katika mifumo yao ya elimu. Kwa Kenya hiyo inajumuisha madarasa ya CBC ambapo Kiswahili na Kiingereza tayari vinashiriki siku. Kisaidizi kinachoeleza kwa lugha moja tu hakilingani na mtaala, hata kikiwa laini.

Jaribio la mtaalamu: pa mfumo ombi lilelile kwa Kiingereza na Kiswahili (na lugha ya tatu unayohitaji kweli). Jibu la Kiingereza likiwa linafaa na lile jingine likiwa upuuzi au linakosekana, huna mfumo uliomalizika. Una mfano wa ukosefu wa usawa.`
      ),
      reveal([
        {
          termEn: "Language of use",
          termSw: "Lugha ya matumizi",
          defEn: "The languages real users will speak or type, including mixed SMS, not the language of the demo.",
          defSw: "Lugha ambazo watumiaji halisi wataongea au kuandika, ikiwa ni pamoja na SMS mchanganyiko, si lugha ya onyesho.",
        },
        {
          termEn: "Language of record",
          termSw: "Lugha ya kumbukumbu",
          defEn: "The language of the trusted documents (policy, label, protocol). Retrieval must respect it or translate with a human check.",
          defSw: "Lugha ya nyaraka zinazoaminika (sera, lebo, itifaki). Urejeshaji lazima uiheshimu au utafsiri kwa ukaguzi wa mwanadamu.",
        },
        {
          termEn: "Language slice",
          termSw: "Kipande cha lugha",
          defEn: "Held-out evaluation reported separately per language, marked by speakers of that language.",
          defSw: "Tathmini iliyowekwa kando inayoripotiwa kando kwa kila lugha, yenye alama za wasemaji wa lugha hiyo.",
        },
        {
          termEn: "Code-switching",
          termSw: "Kubadilisha msimbo wa lugha",
          defEn: "Mixing languages in one message. Treat it as normal input, not as user error.",
          defSw: "Kuchanganya lugha katika ujumbe mmoja. Chukulia kama ingizo la kawaida, si kosa la mtumiaji.",
        },
        {
          termEn: "Translation afterthought",
          termSw: "Tafsiri baada ya kufikiri",
          defEn: "Building in one language then running a cheap translate step. Common, and often harmful for health, chemicals and tone.",
          defSw: "Kujenga kwa lugha moja kisha kuendesha hatua ya tafsiri ya bei nafuu. Ni kawaida, na mara nyingi hatari kwa afya, kemikali na sauti.",
        },
      ]),
      note(
        "Worked example: maternal health SMS in Kisumu",
        "Mfano kamili: SMS za afya ya uzazi Kisumu",
        `Amani Clinic is fictional, on the Kisumu–Siaya border. Nurses want appointment reminders and answers to five repeated questions (what to bring, when to come, when to call the clinic). Mothers text in Kiswahili, Dholuo, and mixes of both. The first vendor delivers perfect English SMS and a Kiswahili that a Nairobi intern wrote without a Luo speaker.

Specification:

- Languages of use: Kiswahili, Dholuo, English. Mixed messages are valid.
- Language of record: the clinic's five answers, written by nurses in Kiswahili and Dholuo, signed by the in-charge. Retrieval only. No generative advice about danger signs without a human.
- Evaluation: 50 real anonymised past texts in each language, labelled by two staff who speak them. Success is "the fetched answer matches the nurse sheet", not "the SMS sounds warm".
- Voice, if added later: test with market noise and the phones mothers actually own.
- Staffing: a Luo-speaking nurse signs the Dholuo sheet. An intern in Nairobi does not.

If the Dholuo slice fails, you do not launch Dholuo messages. You launch Kiswahili and English if those slices pass, and you say so. Inequality postponed is still a specification, not a secret.

M-Pesa remains the payment rail if any paid service is attached; language does not replace that rail, and the bot still does not hold the keys (unit 7).`,
        `Amani Clinic ni ya kubuni, mpakani wa Kisumu–Siaya. Wauguzi wanataka vikumbusho vya miadi na majibu ya maswali tano yanayojirudia (nini cha kuleta, lini kuja, lini kupigia kliniki). Akina mama wanatuma SMS kwa Kiswahili, Dholuo, na mchanganyiko wa zote. Muuzaji wa kwanza anatoa SMS kamili za Kiingereza na Kiswahili ambacho mwanafunzi wa Nairobi aliandika bila msemaji wa Kijaluo.

Maelezo:

- Lugha za matumizi: Kiswahili, Dholuo, Kiingereza. Ujumbe mchanganyiko ni halali.
- Lugha ya kumbukumbu: majibu tano ya kliniki, yaliyoandikwa na wauguzi kwa Kiswahili na Dholuo, yaliyotiwa saini na msimamizi. Urejeshaji tu. Hakuna ushauri unaozalishwa kuhusu dalili za hatari bila mwanadamu.
- Tathmini: SMS 50 halisi zilizofichwa utambulisho kwa kila lugha, zenye lebo za wafanyakazi wawili wanaozungumza. Mafanikio ni "jibu lililoletwa linafanana na karatasi ya muuguzi", si "SMS inasikika ya joto".
- Sauti, ikiongezwa baadaye: jaribu kwa kelele za soko na simu ambazo akina mama wanazo kweli.
- Wafanyakazi: muuguzi anayeongea Kijaluo anatia saini karatasi ya Dholuo. Mwanafunzi Nairobi hafanyi hivyo.

Kipande cha Dholuo kikishindwa, huzindui ujumbe wa Dholuo. Unazindua Kiswahili na Kiingereza vipande hivyo vikipita, na unasema hivyo. Ukosefu wa usawa ulioahirishwa bado ni maelezo, si siri.

M-Pesa inabaki njia ya malipo huduma yoyote ya kulipia ikishikamana; lugha haichukui nafasi ya njia hiyo, na bot bado haishiki funguo (somo la 7).`
      ),
      quiz(
        "A vendor says the model 'supports African languages' but will not show a Kiswahili held-out slice. You should:",
        "Muuzaji anasema modeli 'inasaidia lugha za Afrika' lakini hataonyesha kipande cha Kiswahili kilichowekwa kando. Unapaswa:",
        [
          "Accept the claim; Africa is one language family for testing purposes.",
          "Treat missing language slices as missing evaluation. Do not buy for Kiswahili users until speakers mark a local test.",
          "Run an English test and translate the score.",
          "Switch the whole county to English-only service to make evaluation easier.",
        ],
        [
          "Kubali dai; Afrika ni familia moja ya lugha kwa madhumuni ya majaribio.",
          "Chukulia vipande vya lugha vinavyokosekana kama tathmini inayokosekana. Usinunue kwa watumiaji wa Kiswahili hadi wasemaji waweke alama kwenye jaribio la ndani.",
          "Endesha jaribio la Kiingereza na utafsiri alama.",
          "Badilisha kaunti nzima kuwa huduma ya Kiingereza tu ili tathmini iwe rahisi.",
        ],
        1,
        "African languages are many. A slogan is not a slice. Translating an English score hides the failure you must measure. Forcing English is exclusion.",
        "Lugha za Afrika ni nyingi. Kauli mbiu si kipande. Kutafsiri alama ya Kiingereza huficha kushindwa unakopaswa kupima. Kulazimisha Kiingereza ni utengaji."
      ),
      scenario({
        titleEn: "Scenario: Sheng at the agrovet",
        titleSw: "Hali halisi: Sheng kwenye agrovet",
        situationEn:
          "Baraka Agrovet's young customers ask in Sheng for products. The retrieval pack is formal Kiswahili and English labels (PCPB). The bot either says it does not understand or invents a slang chemical name. The owner wants to 'ban Sheng in the shop'.",
        situationSw:
          "Wateja vijana wa Baraka Agrovet wanauliza kwa Sheng bidhaa. Pakiti ya urejeshaji ni lebo rasmi za Kiswahili na Kiingereza (PCPB). Bot ama inasema haielewi ama inaumba jina la kemikali la slang. Mwenye duka anataka 'kukataza Sheng dukani'.",
        questionEn: "What do you specify?",
        questionSw: "Unaeleza nini?",
        optionsEn: [
          "Ban Sheng; customers must learn label language.",
          "Keep PCPB labels as the language of record; add a small, staff-checked map of common Sheng product nicknames to retrieval; abstain if the nickname is unknown; never let the bot invent a chemical name.",
          "Let the generative model freely translate Sheng into chemistry.",
          "Fine-tune on social media comments until the bot sounds like a tout.",
        ],
        optionsSw: [
          "Kataza Sheng; wateja lazima wajifunze lugha ya lebo.",
          "Weka lebo za PCPB kama lugha ya kumbukumbu; ongeza ramani ndogo, iliyokaguliwa na wafanyakazi, ya majina ya utani ya Sheng ya bidhaa kwenye urejeshaji; kataa kujibu jina la utani lisipojulikana; usiruhusu bot iumbe jina la kemikali.",
          "Acha modeli inayozalisha itafsiri Sheng kuwa kemia kwa uhuru.",
          "Fanya fine-tune kwa maoni ya mitandao ya kijamii hadi bot iongee kama mchapakazi.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Banning how customers speak is not a safety control. It is losing the sale and the chance to show the real label.",
          "Correct. Language of use can be Sheng; language of record stays the regulated label. Unknown nicknames abstain. No invented chemistry.",
          "Free generative chemistry from slang is how confident nonsense meets PCPB.",
          "Social-media fine-tunes are not a register of licensed products.",
        ],
        hintsSw: [
          "Kukataza jinsi wateja wanavyoongea si udhibiti wa usalama. Ni kupoteza uuzaji na nafasi ya kuonyesha lebo halisi.",
          "Sahihi. Lugha ya matumizi inaweza kuwa Sheng; lugha ya kumbukumbu inabaki lebo inayodhibitiwa. Majina ya utani yasiyojulikana yakatae kujibu. Hakuna kemia iliyoumbwa.",
          "Kemia huru inayozalishwa kutoka slang ndiyo jinsi upuuzi wenye uhakika unavyokutana na PCPB.",
          "Fine-tune za mitandao ya kijamii si daftari la bidhaa zenye leseni.",
        ],
        explainEn:
          "Design for how people talk, retrieve from what the law recognises, abstain when the map is missing. That is language as a requirement.",
        explainSw:
          "Buni kwa jinsi watu wanavyoongea, rejelea kile sheria inatambua, kataa kujibu ramani inapokosekana. Hiyo ndiyo lugha kama sharti.",
      }),
      note(
        "Try it: three-language test card",
        "Jaribu: kadi ya jaribio la lugha tatu",
        `Write one real request your system will get. Put it in English, Kiswahili, and a third language or mix used in that place. For each, write the expected source document and whether today's tool would fetch it, fail, or invent.

Carry forward:
- Language slices belong next to county slices in the evaluation table.
- Unit 10: even a well-languaged system changes who is paid and who is watched. Specify the work.`,
        `Andika ombi moja halisi ambalo mfumo wako utapata. Liweke kwa Kiingereza, Kiswahili, na lugha ya tatu au mchanganyiko unatumika mahali hapo. Kwa kila moja, andika waraka chanzo unaotarajiwa na kama zana ya leo ingeleta, kushindwa, au kuumba.

Kumbuka:
- Vipande vya lugha viko kando ya vipande vya kaunti kwenye jedwali la tathmini.
- Somo la 10: hata mfumo wenye lugha nzuri unabadilisha nani analipwa na nani anatazamwa. Eleza kazi.`
      ),
    ],
  },
  {
    id: "m0-a-u10",
    titleEn: "Work and value",
    titleSw: "Kazi na thamani",
    cards: [
      note(
        "Who is automated, who is paid, what you tell staff",
        "Nani anawekwa kiotomatiki, nani analipwa, unawaambia nini wafanyakazi",
        `AI systems do not land on empty land. They land on people who already do the work: CHPs, tellers, clerks, teachers, extension officers, jua kali artisans, casuals who enter data. Kenya's AI Strategy 2025–2030 names MSMEs among priority sectors. Jua kali — the informal workshops and trades that employ much of urban Kenya — is where "efficiency" often means someone loses a wage this month.

Expert specification includes a work map.

Who is automated. Name the tasks, not the job titles. "Drafting the first Kiswahili SMS" is a task. "Being the loans officer" is a job. Automating a task can free time. Automating a job without a plan is a dismissal by software.

Who is paid. If a model needs labelled photos, who photographs and who marks, and at what rate? If a chatbot deflects agrovet questions, does the counter assistant still earn the same, or are they now 'supervising a bot' for less? If a school helper marks drafts, do you still pay teachers for the hours of checking the helper requires — because unit 5 said you must check.

Who is watched. Scoring staff by how often they agree with the model punishes the people who catch its errors. Log overrides as a signal of drift (unit 6), not as a loyalty score.

What you tell staff, early, in the language of the workplace. Hidden pilots destroy trust. A decent briefing says: which tasks the tool will try; which decisions remain human; that pasting personal data is forbidden; that nobody is dismissed by a demo; how suggestions for improving the tool are collected; and what happens if the tool is paused.

Value is not only a donor slide. Value is: time returned to visits, fewer wasted chemicals, fewer missed appointments, a clerk who still has a wage, a workshop that still invoices. If the only number that improves is "messages sent", you have not specified value. You have specified activity.

Jua kali example to keep in your head: a metal workshop in Kariobangi may want help writing quotations in English for a county tender. That can be a drafting assistant with a human stamp. Replacing the person who knows which gauge of steel was used last time is not a drafting job. It is deleting the memory of the firm.`,
        `Mifumo ya AI haishuki kwenye ardhi tupu. Inashuki kwenye watu ambao tayari wanafanya kazi: CHP, makarani, walimu, maafisa wa ugani, mafundi wa jua kali, vibarua wanaoingiza data. Mkakati wa AI wa Kenya 2025–2030 unataja biashara ndogo kati ya sekta za kipaumbele. Jua kali — warsha na biashara zisizo rasmi zinazoajiri sehemu kubwa ya Kenya ya mijini — ndipo "ufanisi" mara nyingi unamaanisha mtu anapoteza mshahara mwezi huu.

Maelezo ya mtaalamu yanajumuisha ramani ya kazi.

Nani anawekwa kiotomatiki. Taja kazi ndogo, si vyeo. "Kuandaa SMS ya kwanza ya Kiswahili" ni kazi ndogo. "Kuwa afisa wa mikopo" ni kazi. Kuweka kazi ndogo kiotomatiki kunaweza kutoa muda. Kuweka kazi kiotomatiki bila mpango ni kufukuza kwa programu.

Nani analipwa. Modeli ikihitaji picha zenye lebo, nani anapiga picha na nani anaweka alama, na kwa kiwango gani? Chatbot ikielekeza maswali ya agrovet, je, msaidizi wa kaunta bado anapata sawa, au sasa 'anasimamia bot' kwa pungufu? Kisaidizi cha shule kikiweka alama rasimu, je, bado unawalipa walimu kwa saa za kukagua ambazo kisaidizi kinahitaji — kwa sababu somo la 5 lilisema lazima ukague.

Nani anatazamwa. Kuwapa alama wafanyakazi kwa mara ngapi wanakubaliana na modeli kunaadhibu watu wanaonasa makosa yake. Rekodi ubatilishaji kama ishara ya mtelezo (somo la 6), si kama alama ya uaminifu.

Unawaambia nini wafanyakazi, mapema, kwa lugha ya sehemu ya kazi. Majaribio yaliyofichwa yanaharibu imani. Maelezo mazuri yanasema: ni kazi ndogo zipi zana itajaribu; ni maamuzi yapi yanabaki ya binadamu; kwamba kubandika data binafsi kumekatazwa; kwamba hakuna anayefukuzwa na onyesho; jinsi mapendekezo ya kuboresha zana yanavyokusanywa; na nini hutokea zana ikisimamishwa.

Thamani si slaidi ya mfadhili tu. Thamani ni: muda uliorejeshwa kwa ziara, kemikali chache zilizopotea, miadi michache iliyokosa, karani ambaye bado ana mshahara, warsha ambayo bado inatoa ankara. Ikiwa namba pekee inayoboreka ni "ujumbe uliotumwa", hujieleza thamani. Umeeleza shughuli.

Mfano wa jua kali wa kuweka kichwani: warsha ya chuma Kariobangi inaweza kutaka msaada kuandika nukuu kwa Kiingereza kwa zabuni ya kaunti. Hiyo inaweza kuwa msaada wa rasimu wenye muhuri wa mwanadamu. Kuchukua nafasi ya mtu anayejua gauge gani ya chuma ilitumiwa mara ya mwisho si kazi ya rasimu. Ni kufuta kumbukumbu ya kampuni.`
      ),
      reveal([
        {
          termEn: "Task versus job",
          termSw: "Kazi ndogo dhidi ya kazi",
          defEn: "A task is a step (draft SMS). A job is a role with judgement and relationships. Specify which you are touching.",
          defSw: "Kazi ndogo ni hatua (andaa SMS). Kazi ni nafasi yenye uamuzi na mahusiano. Eleza unayogusa ipi.",
        },
        {
          termEn: "Jua kali",
          termSw: "Jua kali",
          defEn: "Kenya's informal trades and workshops. AI specs that ignore their wages and knowledge will extract value without paying it.",
          defSw: "Biashara na warsha zisizo rasmi za Kenya. Maelezo ya AI yanayopuuza mishahara na maarifa yao yatachukua thamani bila kuitlipa.",
        },
        {
          termEn: "Hidden pilot",
          termSw: "Majaribio yaliyofichwa",
          defEn: "Running a tool on staff or clients without telling them. Destroys trust and often breaks consent.",
          defSw: "Kuendesha zana juu ya wafanyakazi au wateja bila kuwaambia. Kunaharibu imani na mara nyingi kunavunja ridhaa.",
        },
        {
          termEn: "Override-as-loyalty",
          termSw: "Kubatilisha kama uaminifu",
          defEn: "Punishing staff for disagreeing with the model. Hides drift and trains people to rubber-stamp errors.",
          defSw: "Kuadhibu wafanyakazi kwa kutokubaliana na modeli. Huficha mtelezo na kuwafunza watu kupiga muhuri makosa.",
        },
        {
          termEn: "Value metric",
          termSw: "Kipimo cha thamani",
          defEn: "A number about the work (visits completed, chemicals not wasted, wages kept), not only messages sent.",
          defSw: "Namba kuhusu kazi (ziara zilizokamilika, kemikali zisizopotea, mishahara iliyohifadhiwa), si ujumbe uliotumwa tu.",
        },
      ]),
      note(
        "Worked example: Kariobangi quotations",
        "Mfano kamili: nukuu za Kariobangi",
        `Ushindi Metal is fictional, a five-person jua kali workshop. A county tender portal expects typed English quotations. Only one person, Mama Njeri, writes those. A youth volunteer offers a generative assistant "so you do not need her".

Work map:

- Task that may be assisted: turning Mama Njeri's Kiswahili notes and a price list into a first English draft.
- Job that must not be deleted: knowing last season's steel prices, which gauge was accepted, and who at the county returns calls. That is not in the model.
- Who is paid: if the assistant saves two hours, those hours still belong to Mama Njeri unless she chooses otherwise. The volunteer does not become the new owner of the firm's voice.
- What you tell the five: we will try drafts on last year's winning quotation (no new client names in the prompt). Mama Njeri stamps every outgoing document. If the tool is useless, we drop it. Nobody is being replaced this quarter.

Value metric: quotations submitted on time, and Mama Njeri's wage unchanged. Not: number of prompts.

If a donor wants "jobs created in AI" as the headline, write the truth: this workshop needed a drafting aid and a person who already held the knowledge. Creating a prompt-engineer title by firing Mama Njeri is not MSME development.`,
        `Ushindi Metal ni ya kubuni, warsha ya jua kali ya watu watano. Lango la zabuni la kaunti linatarajia nukuu zilizochapishwa kwa Kiingereza. Mtu mmoja tu, Mama Njeri, ndiye anaziandika. Kijana wa kujitolea anatoa msaada unaozalisha "ili msimhitaji".

Ramani ya kazi:

- Kazi ndogo inayoweza kusaidiwa: kugeuza dokezo za Kiswahili za Mama Njeri na orodha ya bei kuwa rasimu ya kwanza ya Kiingereza.
- Kazi isiyopaswa kufutwa: kujua bei za chuma za msimu jana, gauge gani ilikubaliwa, na nani katika kaunti anarudisha simu. Hiyo haiko kwenye modeli.
- Nani analipwa: msaada ukiokoa saa mbili, saa hizo bado ni za Mama Njeri isipokuwa yeye achague vinginevyo. Kujitolea hakuwi mmiliki mpya wa sauti ya kampuni.
- Unachoambia watano: tutajaribu rasimu kwenye nukuu iliyoshinda mwaka jana (hakuna majina mapya ya wateja kwenye prompt). Mama Njeri anapiga muhuri kila waraka unaotoka. Zana ikikosa faida, tunaiacha. Hakuna anayebadilishwa robo hii.

Kipimo cha thamani: nukuu zilizowasilishwa kwa wakati, na mshahara wa Mama Njeri haujabadilika. Si: idadi ya prompt.

Mfadhili akitaka "kazi zilizoundwa katika AI" kama kichwa, andika ukweli: warsha hii ilihitaji msaada wa rasimu na mtu ambaye tayari alikuwa na maarifa. Kuunda cheo cha prompt-engineer kwa kumfukuza Mama Njeri si maendeleo ya biashara ndogo.`
      ),
      quiz(
        "A clinic scores CHPs on 'percentage of visits matching the model's route'. High scorers get airtime. This is likely to:",
        "Kliniki inawapa alama CHP kwa 'asilimia ya ziara zinazofanana na njia ya modeli'. Wenye alama za juu wanapata airtime. Hii inaweza:",
        [
          "Prove the model is fair.",
          "Train CHPs to hide necessary overrides, so drift and local knowledge disappear from the record.",
          "Satisfy the Data Protection Act automatically.",
          "Replace the need for a held-out test.",
        ],
        [
          "Kudhibitisha modeli ni ya haki.",
          "Kuwafunza CHP kuficha ubatilishaji unaohitajika, ili mtelezo na maarifa ya eneo yatoweke kwenye rekodi.",
          "Kutimiza Sheria ya Ulinzi wa Data kiotomatiki.",
          "Kuchukua nafasi ya hitaji la jaribio lililowekwa kando.",
        ],
        1,
        "Paying people to agree with the model is override-as-loyalty. You lose the signal unit 6 needs. Fairness, DPA and evaluation are not solved by airtime.",
        "Kuwalipa watu wakubaliane na modeli ni kubatilisha-kama-uaminifu. Unapoteza ishara ambayo somo la 6 linahitaji. Haki, DPA na tathmini hazitatuliwi na airtime."
      ),
      scenario({
        titleEn: "Scenario: the hidden teller pilot",
        titleSw: "Hali halisi: majaribio yaliyofichwa ya karani",
        situationEn:
          "A SACCO IT officer turns on a loan-flag model for two tellers 'to see if they complain'. The tellers are not told. Members are not told. One teller notices the screen pushing her to refuse a market trader she has known for years. She is afraid to say no to the screen.",
        situationSw:
          "Afisa wa TE wa SACCO anawasha modeli ya alama ya mkopo kwa makarani wawili 'kuona kama wanalalamika'. Makarani hawajaambiwa. Wanachama hawajaambiwa. Karani mmoja anaona skrini inamsukuma kumkataa mfanyabiashara wa soko ambae amemfahamu kwa miaka. Anaogopa kusema hapana kwa skrini.",
        questionEn: "What should happen this week?",
        questionSw: "Nini kifanyike wiki hii?",
        optionsEn: [
          "Keep the hidden pilot; fear means the model is working.",
          "Switch the pilot to disclosed: tell the two tellers and the affected members' process owners; make override normal and logged; pause auto-refusal; brief all tellers on task versus job.",
          "Dismiss the teller who hesitated; she is anti-innovation.",
          "Publish the traders' names as a success story.",
        ],
        optionsSw: [
          "Endelea na majaribio yaliyofichwa; hofu inamaanisha modeli inafanya kazi.",
          "Badilisha majaribio kuwa ya wazi: waambie makarani wawili na wamiliki wa mchakato wa wanachama walioathirika; fanya kubatilisha kuwa kawaida na kunarekodiwa; simamisha kukataa kiotomatiki; eleza makarani wote kazi ndogo dhidi ya kazi.",
          "Fukuza karani aliyesita; anapinga uvumbuzi.",
          "Chapisha majina ya wafanyabiashara kama hadithi ya mafanikio.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Fear is not a metric of value. Hidden scoring of members is a rights and work failure together.",
          "Correct. Disclose, restore human refusal, log overrides as healthy. The job of judging a known member is not a task you silently automate.",
          "Punishing hesitation is how you buy a model that nobody dares to correct.",
          "Publishing names is another leak and humiliation. It is not communication.",
        ],
        hintsSw: [
          "Hofu si kipimo cha thamani. Kutoa alama kwa siri kwa wanachama ni kushindwa kwa haki na kazi pamoja.",
          "Sahihi. Fichua, rudisha kukataa kwa binadamu, rekodi ubatilishaji kama mzima. Kazi ya kumhukumu mwanachama anayefahamika si kazi ndogo unayoweka kiotomatiki kimya.",
          "Kuadhibu kusita ndiyo jinsi unavyonunua modeli ambayo hakuna anayethubutu kusahihisha.",
          "Kuchapisha majina ni uvujaji mwingine na fedheha. Si mawasiliano.",
        ],
        explainEn:
          "Work and rights meet here: people must know they are in a pilot, and they must be allowed to keep the judgement that is their job.",
        explainSw:
          "Kazi na haki zinakutana hapa: watu lazima wajue wako kwenye majaribio, na lazima waruhusiwe kuweka uamuzi ambao ni kazi yao.",
      }),
      note(
        "Try it: the staff briefing card",
        "Jaribu: kadi ya maelezo kwa wafanyakazi",
        `Write a 8-line briefing you could read aloud in Kiswahili or English:

- What task the tool will try.
- What job stays human.
- What must not be pasted.
- How to override, without punishment.
- How value will be measured (not message count alone).
- When you will meet again to decide keep, change, or drop.

Carry forward:
- If you cannot say this aloud, you are not ready to launch.
- Unit 11: saying it once is not running it next year. You still need logs, rollback, trained humans, and an exit.`,
        `Andika maelezo ya mistari 8 ambayo ungeweza kusoma kwa sauti kwa Kiswahili au Kiingereza:

- Ni kazi ndogo ipi zana itajaribu.
- Ni kazi ipi inabaki ya binadamu.
- Nini hapaswi kubandikwa.
- Jinsi ya kubatilisha, bila adhabu.
- Thamani itapimwa vipi (si hesabu ya ujumbe peke yake).
- Mtakutana tena lini kuamua weka, badilisha, au acha.

Kumbuka:
- Usiweze kusema hii kwa sauti, hujaiva kuzindua.
- Somo la 11: kusema mara moja si kuiendesha mwaka ujao. Bado unahitaji logi, kurudi nyuma, binadamu waliofunzwa, na njia ya kutoka.`
      ),
    ],
  },
  {
    id: "m0-a-u11",
    titleEn: "Running it next year",
    titleSw: "Kuiendesha mwaka ujao",
    cards: [
      note(
        "Logs, rollback, trained humans, and a door out",
        "Logi, kurudi nyuma, binadamu waliofunzwa, na mlango wa kutoka",
        `Launch is a date. Next year is a system. Expert handover answers four operational questions so a county, SACCO or school can still work if you, the vendor, or the network disappear.

Logs. You need a record of what the system saw (at the level allowed by unit 4 — codes, not unnecessary names), what it output, who overrode, and which document version retrieval used. Logs are how you investigate a wrong SMS, a biased flag, or a leak. Logs are themselves personal data: retain them on purpose, then delete. "We do not keep logs so we are private" means you cannot govern.

Rollback. There must be a previous version of the prompt, the document pack, the model, and the sending switch. A duty officer at 6 a.m. can revert without a developer in Berlin. Unit 6's pause rule is useless if the only copy is "whatever the vendor pushed last night". Write the rollback drill and practise it once before go-live.

Training the humans. New staff arrive. UNESCO's 2024 teacher and student AI competency frameworks are orientation: people need to know what the tool is for, how it fails, and how to check it — not how to worship it. Your training is local: 45 minutes, in workplace language, with the two wall rules from unit 7, the override path, and a sample of confident nonsense to reject. Repeat after staff turnover. A PDF in English is not training.

Exit if the vendor leaves. This is question 8 of unit 8, now as a runbook. Export of documents, of evaluation sets, of logs you are allowed to keep. A 12-month ability to send the old template SMS, look up the PCPB list, or print the Monday loan list without that vendor. If the tool only exists as a remote login, you do not run it next year. You rent it until the rent stops.

Compute, briefly: you do not need a GPU cluster to be operationally serious. You need backups, named owners, and a paper or spreadsheet fallback that already worked in unit 1. The fallback is part of the AI system, not an embarrassment.`,
        `Uzinduzi ni tarehe. Mwaka ujao ni mfumo. Kukabidhi kwa mtaalamu kunajibu maswali manne ya uendeshaji ili kaunti, SACCO au shule iweze bado kufanya kazi wewe, muuzaji, au mtandao vikitoweka.

Logi. Unahitaji rekodi ya kile mfumo uliona (kwa kiwango kinachoruhusiwa na somo la 4 — misimbo, si majina yasiyohitajika), kile kilichotoa, nani alibatilisha, na toleo lipi la waraka urejeshaji ulitumia. Logi ndiyo jinsi unavyochunguza SMS yenye kosa, alama yenye upendeleo, au uvujaji. Logi zenyewe ni data binafsi: zihifadhi kwa madhumuni, kisha ufute. "Hatuweki logi ili tuwe na faragha" inamaanisha huwezi kutawala.

Kurudi nyuma (rollback). Lazima kuwe na toleo la awali la prompt, pakiti ya nyaraka, modeli, na swichi ya kutuma. Afisa wa zamu saa kumi na mbili asubuhi anaweza kurejesha bila msanidi Berlin. Kanuni ya kusimamisha ya somo la 6 haina faida kama nakala pekee ni "kile muuzaji aliposukuma jana usiku". Andika zoezi la kurudi nyuma na ulifanyie mazoezi mara moja kabla ya kuanza.

Kufunza binadamu. Wafanyakazi wapya wanafika. Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi ni mwongozo: watu wanahitaji kujua zana ni ya nini, inashindwa vipi, na jinsi ya kuikagua — si jinsi ya kuiabudu. Mafunzo yako ni ya ndani: dakika 45, kwa lugha ya kazi, pamoja na kanuni mbili za ukuta kutoka somo la 7, njia ya kubatilisha, na sampuli ya upuuzi wenye uhakika wa kukataa. Rudia baada ya mabadiliko ya wafanyakazi. PDF kwa Kiingereza si mafunzo.

Kutoka muuzaji akiondoka. Hili ni swali la 8 la somo la 8, sasa kama mwongozo wa uendeshaji. Utoaji nje wa nyaraka, seti za tathmini, logi unazoruhusiwa kuweka. Uwezo wa miezi 12 wa kutuma SMS ya kiolezo cha zamani, kutafuta orodha ya PCPB, au kuchapisha orodha ya mkopo ya Jumatatu bila muuzaji huyo. Zana ikikuwepo tu kama kuingia kwa mbali, huiendeshi mwaka ujao. Unakodi hadi kodi inaposimama.

Kuhusu compute, kwa ufupi: huhitaji kundi la GPU kuwa mzito kiendeshaji. Unahitaji nakala rudufu, wamiliki wenye majina, na mbadala wa karatasi au jedwali ambao tayari ulifanya kazi katika somo la 1. Mbadala ni sehemu ya mfumo wa AI, si aibu.`
      ),
      reveal([
        {
          termEn: "Operational log",
          termSw: "Logi ya uendeshaji",
          defEn: "A minimal, lawful record of inputs, outputs, overrides and document versions, with a deletion date.",
          defSw: "Rekodi ndogo, halali ya ingizo, matokeo, ubatilishaji na matoleo ya nyaraka, yenye tarehe ya kufuta.",
        },
        {
          termEn: "Rollback",
          termSw: "Kurudi nyuma (rollback)",
          defEn: "Restoring the last known-good prompt, pack, model and send-switch without waiting for the vendor.",
          defSw: "Kurejesha prompt, pakiti, modeli na swichi ya kutuma iliyojulikana kuwa nzuri, bila kusubiri muuzaji.",
        },
        {
          termEn: "Human training loop",
          termSw: "Mzunguko wa mafunzo ya binadamu",
          defEn: "Short, repeated workplace sessions so new staff can check, override and pause the tool.",
          defSw: "Vipindi vifupi, vinavyojirudia kazini ili wafanyakazi wapya waweze kukagua, kubatilisha na kusimamisha zana.",
        },
        {
          termEn: "Vendor exit",
          termSw: "Kutoka kwa muuzaji",
          defEn: "Export plus a 12-month way to keep the core job running on templates, files or another processor.",
          defSw: "Utoaji nje pamoja na njia ya miezi 12 ya kuendeleza kazi msingi kwa violezo, faili au mchakataji mwingine.",
        },
        {
          termEn: "Fallback",
          termSw: "Mbadala",
          defEn: "The spreadsheet, SMS template or calling list that still works when the model does not.",
          defSw: "Jedwali, kiolezo cha SMS au orodha ya kupiga simu ambayo bado inafanya kazi modeli isipofanya.",
        },
      ]),
      note(
        "Worked example: a SACCO vendor leaves Kenya",
        "Mfano kamili: muuzaji wa SACCO anaondoka Kenya",
        `Umoja SACCO (fictional, Nyeri) has used a vendor flag list for a year. In March the vendor emails that the East Africa team is closing. Login will die on 30 April. Officers panic because Monday mornings "are the AI now".

If you specified operations, this is uncomfortable but possible:

- Logs of the last 12 months of flags and overrides are already exported weekly to a county-hosted folder the SACCO controls (member numbers, not extra ID copies), retained under the SACCO policy.
- Rollback/fallback: the pre-AI calling list rules (missed two payments → call) are still in a spreadsheet Mama Wambui owns. Monday 5 May still happens.
- Document pack of by-laws never lived only in the vendor. Retrieval sources are the SACCO's files.
- Training: two officers can train a new hire in 45 minutes using the wall rules. They do not need the vendor's webinar.
- Exit clause: the contract required a 90-day export and a readable flag history. Legal can enforce what you wrote; they cannot enforce what you only demoed.

If you did not specify operations, April is a cliff: no list, no logs, no lawful copy, staff who only know the login, members waiting.

Handover pack for the board: owner of fallback, date of last rollback drill, date of last staff refresh, export location, deletion calendar, 9 p.m. phone tree. That pack is more valuable than a GPU diagram.`,
        `Umoja SACCO (ya kubuni, Nyeri) imetumia orodha ya alama ya muuzaji kwa mwaka. Machi muuzaji anatuma barua pepe kwamba timu ya Afrika Mashariki inafunga. Kuingia kutakufa tarehe 30 Aprili. Maafisa wanaogopa kwa sababu asubuhi za Jumatatu "sasa ni AI".

Ukieleza uendeshaji, hii ni ngumu lakini inawezekana:

- Logi za miezi 12 za alama na ubatilishaji tayari zinahamishwa kila wiki kwenye folda inayohifadhiwa na kaunti ambayo SACCO inadhibiti (namba za wanachama, si nakala za ziada za vitambulisho), zinahifadhiwa chini ya sera ya SACCO.
- Kurudi nyuma/mbadala: sheria za orodha ya kupiga simu kabla ya AI (kukosa malipo mawili → piga) bado ziko kwenye jedwali Mama Wambui anamiliki. Jumatatu 5 Mei bado inatokea.
- Pakiti ya nyaraka za kanuni hakuwahi kuishi kwa muuzaji tu. Vyanzo vya urejeshaji ni faili za SACCO.
- Mafunzo: maafisa wawili wanaweza kumfunza mwajiriwa mpya kwa dakika 45 kwa kanuni za ukuta. Hawahitaji semina ya mtandao ya muuzaji.
- Kifungu cha kutoka: mkataba ulihitaji uhamisho wa siku 90 na historia ya alama inayosomeka. Sheria inaweza kutekeleza ulichoandika; haiwezi kutekeleza ulichoonyesha tu.

Usipoeleza uendeshaji, Aprili ni mwamba: hakuna orodha, hakuna logi, hakuna nakala halali, wafanyakazi wanaojua kuingia tu, wanachama wanasubiri.

Kifurushi cha kukabidhi kwa bodi: mwenye mbadala, tarehe ya zoezi la mwisho la kurudi nyuma, tarehe ya burudisho la mwisho la wafanyakazi, mahali pa uhamisho, kalenda ya kufuta, mti wa simu saa tatu usiku. Kifurushi hicho ni cha thamani kuliko mchoro wa GPU.`
      ),
      quiz(
        "Which item must be in a one-page operational handover?",
        "Ni kipengele kipi lazima kiwe katika kukabidhi kwa ukurasa mmoja wa uendeshaji?",
        [
          "The vendor's marketing slogan in English only.",
          "Named fallback owner, last rollback drill date, log export location with retention, and the 9 p.m. contact.",
          "A promise that GPUs will be bought next year.",
          "Staff loyalty scores versus the model.",
        ],
        [
          "Kauli mbiu ya masoko ya muuzaji kwa Kiingereza tu.",
          "Mwenye mbadala mwenye jina, tarehe ya zoezi la mwisho la kurudi nyuma, mahali pa uhamisho wa logi pamoja na uhifadhi, na mwasiliani wa saa tatu usiku.",
          "Ahadi kwamba GPU zitanunuliwa mwaka ujao.",
          "Alama za uaminifu za wafanyakazi dhidi ya modeli.",
        ],
        1,
        "Operations are owners, drills, exports, contacts. Slogans, GPU promises and loyalty scores do not restart Monday morning.",
        "Uendeshaji ni wamiliki, mazoezi, uhamisho, mawasiliano. Kauli mbiu, ahadi za GPU na alama za uaminifu hazianzishi asubuhi ya Jumatatu."
      ),
      scenario({
        titleEn: "Scenario: the send-switch at 6 a.m.",
        titleSw: "Hali halisi: swichi ya kutuma saa kumi na mbili asubuhi",
        situationEn:
          "After a wet week, Lelan Fresh's blight SMS is wrong (unit 6). The duty agronomist wants to pause. The vendor app has no obvious pause. The only documented path is an email to support in another time zone.",
        situationSw:
          "Baada ya wiki ya mvua, SMS ya blight ya Lelan Fresh ina kosa (somo la 6). Mtaalamu wa kilimo wa zamu anataka kusimamisha. Programu ya muuzaji haina pause inayoonekana. Njia pekee iliyoandikwa ni barua pepe kwa msaada katika saa za eneo jingine.",
        questionEn: "What should have been in the spec, and what do you do this morning?",
        questionSw: "Nini kilipaswa kuwa kwenye maelezo, na unafanya nini asubuhi hii?",
        optionsEn: [
          "Nothing; agronomists should not touch live systems.",
          "The spec needed a local send-switch and rollback drill. This morning: stop sending by the fallback channel you still control (do not blast SMS from a personal phone book of names), notify farmers in Kiswahili that messages are paused, and file the missing-switch as a contract defect.",
          "Keep sending; support will reply on Monday.",
          "Tell farmers the strategy forbids pausing, so keep sending until the vendor emails back.",
        ],
        optionsSw: [
          "Hakuna; wataalamu wa kilimo hapaswi kugusa mifumo hai.",
          "Maelezo yalihitaji swichi ya kutuma ya ndani na zoezi la kurudi nyuma. Asubuhi hii: acha kutuma kwa kituo mbadala ambacho bado unadhibiti (usipulize SMS kutoka daftari binafsi la majina), wajulishe wakulima kwa Kiswahili kwamba ujumbe umesimamishwa, na uandike swichi inayokosekana kama kasoro ya mkataba.",
          "Endelea kutuma; msaada utajibu Jumatatu.",
          "Waambie wakulima mkakati unakataza kusimamisha, kwa hiyo endelea kutuma hadi muuzaji atume barua pepe.",
        ],
        correctIndex: 1,
        hintsEn: [
          "Duty officers must be able to pause. That is operations, not meddling.",
          "Correct. Local switch belongs in the spec. Today you use what you still control, tell people, and record the defect. You do not create a new leak from a personal phone book.",
          "Continuing known-wrong blight advice is a field harm, not patience.",
          "The strategy launch does not forbid a pause. Waiting on a vendor email leaves farmers with known-wrong advice.",
        ],
        hintsSw: [
          "Maafisa wa zamu lazima waweze kusimamisha. Huo ni uendeshaji, si kuingilia.",
          "Sahihi. Swichi ya ndani iko kwenye maelezo. Leo unatumia kile bado unadhibiti, waambie watu, na urekodi kasoro. Huundi uvujaji mpya kutoka daftari binafsi la simu.",
          "Kuendelea na ushauri wa blight unaojulikana kuwa na kosa ni madhara shambani, si uvumilivu.",
          "Uzinduzi wa mkakati haukatazi kusimamisha. Kusubiri barua pepe ya muuzaji huwaacha wakulima na ushauri unaojulikana kuwa na kosa.",
        ],
        explainEn:
          "Next year means a pause button you own. Email to another time zone is not a runbook.",
        explainSw:
          "Mwaka ujao unamaanisha kitufe cha kusimamisha unachomiliki. Barua pepe kwa saa za eneo jingine si mwongozo wa uendeshaji.",
      }),
      note(
        "Try it: one-page runbook",
        "Jaribu: mwongozo wa ukurasa mmoja",
        `Fill these headings for your system:

- Fallback and its owner.
- Pause / rollback steps a duty officer can complete in 10 minutes.
- Log: what is stored, where, until when.
- Training: who, language, last date, next date.
- Exit: export location and 12-month plan if the vendor is gone.
- 9 p.m. contacts.

Carry forward:
- If this page does not exist, you specified a demo, not a system.
- Unit 12: put units 1–11 on one page as a responsible Kenyan AI specification.`,
        `Jaza vichwa hivi kwa mfumo wako:

- Mbadala na mwenyewe.
- Hatua za kusimamisha / kurudi nyuma ambazo afisa wa zamu anaweza kumaliza kwa dakika 10.
- Logi: nini kinahifadhiwa, wapi, hadi lini.
- Mafunzo: nani, lugha, tarehe ya mwisho, tarehe inayofuata.
- Kutoka: mahali pa uhamisho na mpango wa miezi 12 muuzaji akiwa hayupo.
- Mawasiliano saa tatu usiku.

Kumbuka:
- Ukurasa huu usipokuwepo, ulieleza onyesho, si mfumo.
- Somo la 12: weka masomo 1–11 kwenye ukurasa mmoja kama maelezo ya AI ya Kenya yenye uwajibikaji.`
      ),
    ],
  },
  {
    id: "m0-a-u12",
    titleEn: "Expert capstone: a one-page spec",
    titleSw: "Mradi wa mtaalamu: maelezo ya ukurasa mmoja",
    cards: [
      note(
        "You are specifying, not performing a demo",
        "Unaeleza kazi, si kufanya onyesho",
        `This capstone is the job the rest of the track trained: write a one-page specification that a Kenyan board can accept, a vendor can be scored against, and a duty officer can run next year.

The page is not a vision poster. It has blocks you have already practised:

- Job in one sentence: input, output, who acts, what happens when it is wrong.
- Kind of system (unit 1) and where it runs (unit 2).
- Prompt, retrieval, or fine-tune — and why the cheaper ones were not enough (unit 3).
- Rights: controller, processor, purpose, retention, children, data path (unit 4).
- Evaluation: held-out local slice, both harms, language slice (units 5 and 9).
- After launch: drift triggers, new-county rule, confident-nonsense control (unit 6).
- Security in two sentences: least data in prompts, least power for the bot (unit 7).
- Vendor: answers to the ten questions, or "we are not buying" (unit 8).
- Work: task versus job, who is paid, what staff are told (unit 10).
- Operations: logs, rollback, training, fallback, exit (unit 11).
- Grounding: Kenya AI Strategy 2025–2030 (KICC, 27 March 2025) as context for why agriculture, health, education, public services, finance and MSMEs need this discipline — not as a waiver. UNESCO 2024 teacher and student AI competency frameworks as orientation for training people, not as fake permission quotes.

You may use a generative assistant to help tidy the page. You may not let it invent evaluation numbers, legal conclusions, or partner claims. FarmerAI, Agrika and M-Kliniki Nia may appear only as real orientation (channels, offline photos, bilingual health and M-Pesa rails). Fictional organisations are fine for the rest.

When this page is honest, you can handover. When it is fluent but empty, you are back on demo day.`,
        `Mradi huu ndio kazi ambayo mfululizo uliofunza: andika maelezo ya ukurasa mmoja ambayo bodi ya Kenya inaweza kukubali, muuzaji anaweza kupimwa kwayo, na afisa wa zamu anaweza kuendesha mwaka ujao.

Ukurasa si bango la maono. Una sehemu ambazo tayari umezofanya mazoezi:

- Kazi kwa sentensi moja: ingizo, tokeo, nani anafanya, nini hutokea kunapokuwa na kosa.
- Aina ya mfumo (somo la 1) na inakoendeshwa (somo la 2).
- Prompt, urejeshaji, au fine-tune — na kwa nini za bei nafuu hazikutosha (somo la 3).
- Haki: mdhibiti, mchakataji, madhumuni, uhifadhi, watoto, njia ya data (somo la 4).
- Tathmini: kipande cha ndani kilichowekwa kando, madhara yote mawili, kipande cha lugha (masomo ya 5 na 9).
- Baada ya uzinduzi: vichochezi vya mtelezo, kanuni ya kaunti mpya, udhibiti wa upuuzi wenye uhakika (somo la 6).
- Usalama kwa sentensi mbili: data ndogo kwenye prompt, nguvu ndogo kwa bot (somo la 7).
- Muuzaji: majibu ya maswali kumi, au "hatununui" (somo la 8).
- Kazi: kazi ndogo dhidi ya kazi, nani analipwa, wafanyakazi wanaambiwa nini (somo la 10).
- Uendeshaji: logi, kurudi nyuma, mafunzo, mbadala, kutoka (somo la 11).
- Msingi: Mkakati wa AI wa Kenya 2025–2030 (KICC, 27 Machi 2025) kama muktadha wa kwa nini kilimo, afya, elimu, huduma za umma, fedha na biashara ndogo zinahitaji nidhamu hii — si kama msamaha. Mifumo ya UNESCO ya 2024 ya ujuzi wa AI kwa walimu na wanafunzi kama mwongozo wa kufunza watu, si kama nukuu bandia za ruhusa.

Unaweza kutumia msaada unaozalisha kusaidia kupanga ukurasa. Huwezi kuuacha uumbe namba za tathmini, hitimisho za kisheria, au madai ya washirika. FarmerAI, Agrika na M-Kliniki Nia zinaweza kuonekana tu kama mwongozo halisi (njia, picha bila mtandao, afya ya lugha mbili na njia za M-Pesa). Mashirika ya kubuni ni sawa kwa yaliyobaki.

Ukurasa huu ukiwa wa kweli, unaweza kukabidhi. Ukiwa laini lakini mtupu, umerudi siku ya onyesho.`
      ),
      pb({
        titleEn: "Assemble the one-page spec",
        titleSw: "Panga maelezo ya ukurasa mmoja",
        introEn:
          "You are writing a specification for a responsible Kenyan AI system. Tap the blocks that must appear on the page. Do not invent numbers. Do not skip rights, evaluation, language, work, or exit.",
        introSw:
          "Unaandika maelezo ya mfumo wa AI wa Kenya wenye uwajibikaji. Gusa vipande ambavyo lazima vionekane kwenye ukurasa. Usiumbe namba. Usiruke haki, tathmini, lugha, kazi, au kutoka.",
        goalEn:
          "A board-ready page that names the job, the kind of system, data rights, local evaluation and harm, languages, human gates, staff briefing, and next-year operations.",
        goalSw:
          "Ukurasa ulio tayari kwa bodi unaotaja kazi, aina ya mfumo, haki za data, tathmini ya ndani na madhara, lugha, milango ya binadamu, maelezo kwa wafanyakazi, na uendeshaji wa mwaka ujao.",
        blocksEn: [
          "Job in one sentence: input, output, who acts, what we do when it is wrong.",
          "Kind of system (rules / spreadsheet-plus-person / retrieval / predictive model / generative assistant) and where it runs (local, remote, mixed).",
          "Adaptation: prompt, retrieval, or fine-tune — cheaper options tried first; source of truth named (for example KALRO or PCPB or our by-laws).",
          "Rights: controller and processor; purpose and refused reuse; retention; children's data if any; whether personal data leaves Kenya.",
          "Evaluation: held-out local slice; false-negative and false-positive harms; language slice marked by speakers; demo day is not the test.",
          "After launch: drift and new-county pause rules; control for fluent but unsupported answers; logs of overrides without punishing staff.",
          "Security: no personal identifiers in prompts; bot cannot pay, prescribe, or overwrite records; human gate in the existing M-Pesa or register system.",
          "Vendor and operations: ten buying questions; year-two cost; fallback owner; rollback drill; staff training language; 12-month exit if the vendor leaves.",
          "Work and value: task versus job; who is paid; what we tell staff this week; value metric that is not 'messages sent'.",
        ],
        blocksSw: [
          "Kazi kwa sentensi moja: ingizo, tokeo, nani anafanya, tunafanya nini kunapokuwa na kosa.",
          "Aina ya mfumo (sheria / jedwali-na-mtu / urejeshaji / modeli ya utabiri / msaada unaozalisha) na inakoendeshwa (ndani, mbali, mchanganyiko).",
          "Urekebishaji: prompt, urejeshaji, au fine-tune — chaguzi za bei nafuu zilijaribiwa kwanza; chanzo cha ukweli kimetajwa (kwa mfano KALRO au PCPB au kanuni zetu).",
          "Haki: mdhibiti na mchakataji; madhumuni na matumizi yanayokataliwa; uhifadhi; data ya watoto kama ipo; kama data binafsi inaondoka Kenya.",
          "Tathmini: kipande cha ndani kilichowekwa kando; madhara ya kukosa na kengele za uongo; kipande cha lugha chenye alama za wasemaji; siku ya onyesho si jaribio.",
          "Baada ya uzinduzi: kanuni za kusimamisha mtelezo na kaunti mpya; udhibiti wa majibu laini yasiyo na msaada; logi za kubatilisha bila kuadhibu wafanyakazi.",
          "Usalama: hakuna vitambulisho binafsi kwenye prompt; bot haiwezi kulipa, kuagiza dawa, au kufuta rekodi; mlango wa mwanadamu katika mfumo uliopo wa M-Pesa au daftari.",
          "Muuzaji na uendeshaji: maswali kumi ya ununuzi; gharama ya mwaka wa pili; mwenye mbadala; zoezi la kurudi nyuma; lugha ya mafunzo ya wafanyakazi; kutoka kwa miezi 12 muuzaji akiondoka.",
          "Kazi na thamani: kazi ndogo dhidi ya kazi; nani analipwa; tunawaambia nini wafanyakazi wiki hii; kipimo cha thamani ambacho si 'ujumbe uliotumwa'.",
        ],
        required: [0, 1, 3, 4, 6, 7],
        sampleEn:
          "Job in one sentence: input, output, who acts, what we do when it is wrong. Kind of system (rules / spreadsheet-plus-person / retrieval / predictive model / generative assistant) and where it runs (local, remote, mixed). Rights: controller and processor; purpose and refused reuse; retention; children's data if any; whether personal data leaves Kenya. Evaluation: held-out local slice; false-negative and false-positive harms; language slice marked by speakers; demo day is not the test. Security: no personal identifiers in prompts; bot cannot pay, prescribe, or overwrite records; human gate in the existing M-Pesa or register system. Vendor and operations: ten buying questions; year-two cost; fallback owner; rollback drill; staff training language; 12-month exit if the vendor leaves.",
        sampleSw:
          "Kazi kwa sentensi moja: ingizo, tokeo, nani anafanya, tunafanya nini kunapokuwa na kosa. Aina ya mfumo na inakoendeshwa. Haki: mdhibiti na mchakataji; madhumuni na matumizi yanayokataliwa; uhifadhi; data ya watoto; kama data inaondoka Kenya. Tathmini: kipande cha ndani kilichowekwa kando; madhara mawili; kipande cha lugha; siku ya onyesho si jaribio. Usalama: hakuna vitambulisho kwenye prompt; bot haiwezi kulipa wala kufuta rekodi; mlango wa mwanadamu. Muuzaji na uendeshaji: maswali kumi; gharama ya mwaka wa pili; mbadala; kurudi nyuma; mafunzo; kutoka kwa miezi 12.",
      }),
      scenario({
        titleEn: "Scenario: the board wants a shorter page",
        titleSw: "Hali halisi: bodi inataka ukurasa mfupi zaidi",
        situationEn:
          "A board chair likes your spec but says: 'Delete evaluation, languages, staff briefing and exit. Keep the vendor logo and the strategy quote. We need something that looks national.' A visitors' day is on Friday.",
        situationSw:
          "Mwenyekiti wa bodi anapenda maelezo yako lakini anasema: 'Futa tathmini, lugha, maelezo kwa wafanyakazi na kutoka. Weka nembo ya muuzaji na nukuu ya mkakati. Tunahitaji kitu kinachoonekana cha kitaifa.' Siku ya wageni ni Ijumaa.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Delete those blocks; the strategy launch at KICC covers them.",
          "Keep the blocks. Offer a one-paragraph cover note that cites the 27 March 2025 KICC launch as the reason those blocks exist. Visitors can see an honest spec.",
          "Replace the spec with a chatbot conversation printed as a screenshot.",
          "Invent held-out scores so the page looks complete after the deletions.",
        ],
        optionsSw: [
          "Futa sehemu hizo; uzinduzi wa mkakati katika KICC unazifunika.",
          "Weka sehemu. Toa dokezo la aya moja linalotaja uzinduzi wa 27 Machi 2025 katika KICC kama sababu sehemu hizo zipo. Wageni wanaweza kuona maelezo ya kweli.",
          "Badilisha maelezo na mazungumzo ya chatbot yaliyochapishwa kama picha ya skrini.",
          "Umba alama zilizowekwa kando ili ukurasa uonekane kamili baada ya kufuta.",
        ],
        correctIndex: 1,
        hintsEn: [
          "A national strategy is not a held-out test, a language slice, or an exit clause. Deleting them returns you to jargon stubs.",
          "Correct. The launch is context for rigour, not a substitute. Expert handover is the full page.",
          "A screenshot is demo day. You already know that is not evaluation.",
          "Invented scores are fabrication. They will not survive scrutiny; they will create it.",
        ],
        hintsSw: [
          "Mkakati wa kitaifa si jaribio lililowekwa kando, kipande cha lugha, wala kifungu cha kutoka. Kuzifuta kunakurudisha kwenye mabaki ya jargon.",
          "Sahihi. Uzinduzi ni muktadha wa nidhamu, si mbadala. Kukabidhi kwa mtaalamu ni ukurasa kamili.",
          "Picha ya skrini ni siku ya onyesho. Tayari unajua hiyo si tathmini.",
          "Alama zilizoumbwa ni uzushi. Hazitastahimili ukaguzi; zitauumba.",
        ],
        explainEn:
          "The capstone is the page that still works when the visitors have gone. Strategy quotes without evaluation, language, staff and exit are the old stubs in a nicer font.",
        explainSw:
          "Mradi ni ukurasa ambao bado unafanya kazi wageni wakiishaondoka. Nukuu za mkakati bila tathmini, lugha, wafanyakazi na kutoka ni mabaki ya zamani kwa herufi nzuri zaidi.",
      }),
      quiz(
        "A complete expert spec for a Kenyan organisation must include:",
        "Maelezo kamili ya mtaalamu kwa shirika la Kenya lazima yajumuishe:",
        [
          "GPU cluster diagrams and a promise to train a frontier model.",
          "The job, system kind, data rights, held-out local and language evaluation, human gates, staff work, and a next-year exit.",
          "Only a vendor logo and a fluency demo.",
          "Open-ended medical or legal decisions with no person in the loop.",
        ],
        [
          "Michoro ya kundi la GPU na ahadi ya kufunza modeli ya mbele.",
          "Kazi, aina ya mfumo, haki za data, tathmini ya ndani na ya lugha iliyowekwa kando, milango ya binadamu, kazi ya wafanyakazi, na kutoka kwa mwaka ujao.",
          "Nembo ya muuzaji na onyesho la ulaini tu.",
          "Maamuzi ya tiba au kisheria yasiyo na kikomo bila mtu katika mzunguko.",
        ],
        1,
        "This track's skill is specify, evaluate, govern, handover. Frontier training and logo demos are not that skill. Unattended high-stakes decisions are out of scope.",
        "Ujuzi wa mfululizo huu ni kueleza, kutathmini, kutawala, kukabidhi. Mafunzo ya mbele na maonyesho ya nembo si ujuzi huo. Maamuzi makubwa bila mtu hayako katika wigo."
      ),
      quiz(
        "Which reuse of a clinic reminder system would you refuse on this page?",
        "Ni matumizi yapi ya mfumo wa kikumbusho cha kliniki ambayo ungekataa kwenye ukurasa huu?",
        [
          "Sending the same template SMS in Kiswahili about appointment time.",
          "Training a marketing chatbot on HIV appointment lists because the vendor asked to improve the model.",
          "Logging overrides so officers can study drift next season.",
          "Keeping a spreadsheet fallback if the vendor login dies.",
        ],
        [
          "Kutuma SMS ya kiolezo ileile kwa Kiswahili kuhusu saa ya miadi.",
          "Kufunza chatbot ya masoko kwa orodha za miadi ya VVU kwa sababu muuzaji aliomba kuboresha modeli.",
          "Kurekodi ubatilishaji ili maafisa wajifunze mtelezo msimu ujao.",
          "Kuweka jedwali mbadala kuingia kwa muuzaji kukifa.",
        ],
        1,
        "Purpose limitation and sensitive health data. Improving a vendor model is a new purpose you refuse unless a separate lawful process exists — and marketing is the wrong process.",
        "Kikomo cha madhumuni na data nyeti ya afya. Kuboresha modeli ya muuzaji ni madhumuni mapya unayokataa isipokuwa mchakato tofauti halali upo — na masoko ni mchakato mbaya."
      ),
      note(
        "Carry forward: you can sit with a board",
        "Kumbuka: unaweza kukaa na bodi",
        `You have finished the expert track of Module 0.

You can specify a system by kind and placement, not by fashion. You can choose prompt, retrieval or fine-tune in a defensible order. You can put ODPC-facing duties on the page without pretending to be counsel. You can refuse a demo as evaluation. You can name drift, leaks, and vendor exit before they happen. You can treat Kiswahili and other Kenyan languages as design. You can tell jua kali staff the truth about tasks and wages. You can handover a runbook.

The Kenya AI Strategy 2025–2030 will keep being quoted. Your job is to make sure the quote is attached to a page that still works in a ward with 2G, a SACCO on Monday morning, and a classroom under CBC.

If you take one line into the next module: do not train a frontier model from scratch unless that is genuinely the job — and for almost every Kenyan organisation you will meet, it is not.`,
        `Umemaliza mfululizo wa mtaalamu wa Moduli 0.

Unaweza kueleza mfumo kwa aina na mahali, si kwa mtindo. Unaweza kuchagua prompt, urejeshaji au fine-tune kwa mpangilio unaotetewa. Unaweza kuweka wajibu unaoelekea ODPC kwenye ukurasa bila kujifanya wakili. Unaweza kukataa onyesho kama tathmini. Unaweza kutaja mtelezo, uvujaji, na kutoka kwa muuzaji kabla havijatokea. Unaweza kuchukulia Kiswahili na lugha nyingine za Kenya kama muundo. Unaweza kuwaambia wafanyakazi wa jua kali ukweli kuhusu kazi ndogo na mishahara. Unaweza kukabidhi mwongozo wa uendeshaji.

Mkakati wa AI wa Kenya 2025–2030 utaendelea kunukuliwa. Kazi yako ni kuhakikisha nukuu imeambatanishwa na ukurasa ambao bado unafanya kazi katika wadi yenye 2G, SACCO asubuhi ya Jumatatu, na darasa chini ya CBC.

Ukichukua mstari mmoja kwenda moduli inayofuata: usifunze modeli ya mbele kutoka mwanzo isipokuwa hiyo ni kazi kweli — na kwa karibu kila shirika la Kenya utakalokutana nalo, si hivyo.`
      ),
    ],
  },
];
