import { note, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Community capstone — beginner.
 * A guided mini-project: one helper idea and one named risk (privacy or a wrong guess).
 * Ages 8–10 see u1–u5 and finish with a poster. Later units deepen consent, a paper trial,
 * and a one-page action plan. All people, places and counts in examples are fictional.
 */
export const capBeginnerUnits: CurriculumUnit[] = [
  {
    id: "cap-b-u1",
    titleEn: "Notice a problem in your community",
    titleSw: "Ona tatizo katika jamii yako",
    cards: [
      note(
        "A problem you can see more than once",
        "Tatizo unaloweza kuliona zaidi ya mara moja",
        `A community problem is something that makes life harder for people near you, and that you can see or count. It is not a slogan such as "help everyone". It is a scene you can point to: the tap where people wait, the pile of waste at the corner, the classroom that cannot open the lesson videos, the market stall that throws unsold tomatoes.

Good problems for this project share three traits:

- You can watch them happen more than once, not only on one bad day.
- You can say who is standing there, waiting, walking extra kilometres, or losing money.
- You can imagine one small helper, not a whole new government.

A helper in this course is a simple idea that uses counting, a clear rule, or an AI guess to make one task easier. AI is software that learns patterns from examples and then guesses about a new case. A guess can help people plan. A guess can also be wrong. That is why this project always pairs one helper with one rule.

You do not need a phone to start. You need eyes, a notebook, and a trusted adult to walk with you. If you cannot visit a place safely, pick a problem you already see on the way to school or at home.`,
        `Tatizo la jamii ni kitu kinachofanya maisha yawe magumu kwa watu walio karibu nawe, na unachoweza kuona au kuhesabu. Si kauli kama "saidia kila mtu". Ni mandhari unayoweza kuonyesha: bomba ambalo watu wanasubiri, rundo la taka kwenye kona, darasa lisiloweza kufungua video za somo, duka la soko linalotupa nyanya zisizouzwa.

Matatizo mazuri kwa mradi huu yana sifa tatu:

- Unaweza kuyaona yakijitokeza zaidi ya mara moja, si siku mbaya moja tu.
- Unaweza kusema nani amesimama hapo, anasubiri, anatembea kilometre za ziada, au anapoteza pesa.
- Unaweza kufikiria msaada mmoja mdogo, si serikali mpya yote.

Msaidizi katika kozi hii ni wazo rahisi linalotumia kuhesabu, kanuni wazi, au makisio ya akili bandia (AI) kufanya kazi moja iwe rahisi. AI ni programu inayojifunza mifumo kutokana na mifano kisha kukisia kuhusu hali mpya. Makisio yanaweza kusaidia watu kupanga. Makisio yanaweza pia kuwa makosa. Ndiyo sababu mradi huu huunganisha msaada mmoja na kanuni moja.

Huhitaji simu kuanza. Unahitaji macho, daftari, na mtu mzima unayemwamini atembee nawe. Ikiwa huwezi kutembelea mahali kwa usalama, chagua tatizo ambalo tayari unalionia njiani kwenda shuleni au nyumbani.`,
        "/learn/content/cap/community-baraza.jpg"
      ),
      reveal([
        {
          termEn: "Community",
          termSw: "Jamii",
          defEn: "The people who share a place you know: a village, an estate, a school, a market, a water point.",
          defSw: "Watu wanaoshiriki mahali unapojua: kijiji, estate, shule, soko, au kituo cha maji.",
        },
        {
          termEn: "Community problem",
          termSw: "Tatizo la jamii",
          defEn: "A difficulty you can see or count more than once, that makes life harder for people near you.",
          defSw: "Ugumu unaoweza kuona au kuhesabu zaidi ya mara moja, unaoufanya maisha yawe magumu kwa watu walio karibu nawe.",
        },
        {
          termEn: "Count",
          termSw: "Hesabu",
          defEn: "A number you write down, such as how many jerrycans are in the queue, or how many minutes people wait.",
          defSw: "Namba unayoandika, kama daba ngapi ziko kwenye foleni, au dakika ngapi watu wanasubiri.",
        },
        {
          termEn: "Trusted adult",
          termSw: "Mtu mzima unayemwamini",
          defEn: "A parent, guardian, teacher, or other grown-up who looks after you and can walk with you in public.",
          defSw: "Mzazi, mlezi, mwalimu, au mtu mzima mwingine anayekutunza na anayeweza kutembea nawe hadharani.",
        },
        {
          termEn: "Helper",
          termSw: "Msaidizi",
          defEn: "One small idea that could make the problem a little easier, not a promise to end it.",
          defSw: "Wazo moja dogo linaloweza kufanya tatizo liwe rahisi kidogo, si ahadi ya kulimaliza.",
        },
      ]),
      note(
        "Worked example: Amina counts the tap queue",
        "Mfano: Amina anahesabu foleni ya bomba",
        `Imagine Amina, age 9, who lives near a community tap in Kisumu. After school she walks with her mother. They each carry a 20-litre jerrycan. On Monday they join a line of 12 jerrycans. Amina looks at her mother's phone clock when they join, and again when they fill. They wait 45 minutes.

On Wednesday they come at the same time. This time there are 15 jerrycans and they wait 50 minutes. On Friday they come later, near 5 pm. There are 4 jerrycans and they wait 10 minutes.

Amina writes three lines in her notebook:

- Monday, after school: 12 jerrycans, 45 minutes.
- Wednesday, after school: 15 jerrycans, 50 minutes.
- Friday, near 5 pm: 4 jerrycans, 10 minutes.

That is a community problem she can see. She has not "solved water". She has noticed that after school is a busy time, and that later in the afternoon is quieter. A helper might one day tell neighbours those quiet times. First she needed a problem she could count.

Where a weaker choice would fail: if Amina had written "Kenya needs better water", she would have nothing to draw, nothing to count, and nothing a child-sized project could try.`,
        `Fikiria Amina, umri wa miaka 9, anayeishi karibu na bomba la jamii huko Kisumu. Baada ya shule anatembea na mama yake. Kila mmoja anabeba daba ya lita 20. Jumatatu wanaingia kwenye foleni ya daba 12. Amina anaangalia saa ya simu ya mama yake wanapojiunga, na tena wanapojaza. Wanasubiri dakika 45.

Jumatano wanakuja saa ileile. Wakati huu kuna daba 15 na wanasubiri dakika 50. Ijumaa wanakuja baadaye, karibu saa 11 jioni. Kuna daba 4 na wanasubiri dakika 10.

Amina anaandika mistari mitatu kwenye daftari lake:

- Jumatatu, baada ya shule: daba 12, dakika 45.
- Jumatano, baada ya shule: daba 15, dakika 50.
- Ijumaa, karibu saa 11 jioni: daba 4, dakika 10.

Hilo ni tatizo la jamii analoweza kuliona. Hajatatua "maji". Ameona kwamba baada ya shule ni wakati wa msongamano, na kwamba baadaye alasiri ni shwari zaidi. Msaidizi siku moja anaweza kuwaambia majirani nyakati hizo za shwari. Kwanza alihitaji tatizo analoweza kuhesabu.

Mahali chaguo dhaifu lingeshindwa: kama Amina angeandika "Kenya inahitaji maji bora", hangekuwa na kitu cha kuchora, wala cha kuhesabu, wala mradi wa mtoto ungeweza kujaribu.`
      ),
      scenario({
        titleEn: "Practice: which problem can you work on?",
        titleSw: "Mazoezi: ni tatizo gani unaweza kulifanyia kazi?",
        situationEn:
          "Otieno is 10. His teacher asks the class to pick one community problem for a poster. He writes four ideas in his book.",
        situationSw:
          "Otieno ana miaka 10. Mwalimu wake anaomba darasa lichague tatizo moja la jamii kwa bango. Anaandika mawazo manne kwenye daftari.",
        questionEn: "Which idea is the best starting problem?",
        questionSw: "Ni wazo lipi lililo tatizo bora la kuanzia?",
        optionsEn: [
          "Fix all problems in Kenya with one tool",
          "At our school gate, parents wait a long time at 5 pm, and I can count the cars",
          "Invent a robot that never makes a mistake",
          "Make a beautiful drawing with no problem named",
        ],
        optionsSw: [
          "Tatua matatizo yote Kenya kwa zana moja",
          "Langoni pa shule yetu, wazazi husubiri muda mrefu saa 11 jioni, na ninaweza kuhesabu magari",
          "Buni roboti isiyokosa kamwe",
          "Tengeneza mchoro mzuri bila kutaja tatizo",
        ],
        correctIndex: 1,
        hintsEn: [
          "That is too big. A poster project needs one place you can see.",
          "Right. He named a place, a time, the people waiting, and something he can count.",
          "A helper that never makes a mistake is not honest. This course always names one danger.",
          "A drawing without a problem cannot show a helper or a rule.",
        ],
        hintsSw: [
          "Hilo ni kubwa mno. Mradi wa bango unahitaji mahali pamoja unapoweza kuona.",
          "Sawa. Ametaja mahali, wakati, watu wanaosubiri, na kitu anachoweza kuhesabu.",
          "Msaidizi asiyekosa kamwe si wa kweli. Kozi hii hutaja hatari moja kila mara.",
          "Mchoro bila tatizo hauwezi kuonyesha msaidizi wala kanuni.",
        ],
        explainEn: "Start with one place, one time, and a number you can write down. Big slogans cannot become a children's project.",
        explainSw: "Anza na mahali pamoja, wakati mmoja, na namba unayoweza kuandika. Kauli kubwa haziwezi kuwa mradi wa watoto.",
      }),
      quiz(
        "What makes a community problem a good start for this project?",
        "Nini hufanya tatizo la jamii liwe mwanzo mzuri kwa mradi huu?",
        [
          "It is famous on the radio",
          "You can see or count it more than once, and you can name who is affected",
          "It needs a new law this week",
          "It can only be fixed by a very large computer",
        ],
        [
          "Linajulikana redioni",
          "Unaweza kuliona au kulihesabu zaidi ya mara moja, na unaweza kutaja nani anaathiriwa",
          "Linahitaji sheria mpya wiki hii",
          "Linaweza kutatuliwa tu na kompyuta kubwa sana",
        ],
        1,
        "Fame, new laws and huge computers are not required. A problem you can watch and count is enough to start.",
        "Umaarufu, sheria mpya na kompyuta kubwa si lazima. Tatizo unaloweza kuangalia na kuhesabu linatosha kuanza."
      ),
      note(
        "Try it: three problems you can see",
        "Jaribu: matatizo matatu unayoweza kuona",
        `Walk with a trusted adult, or sit somewhere you already go: the tap, the market, the school gate, the path home.

Write three problems. For each one, write:

- The place.
- What you saw.
- One number if you can (minutes, people, jerrycans, bags of waste).

Put a star next to the problem you might keep for your poster. Keep this page. You will add people, a helper and a rule to it.`,
        `Tembea na mtu mzima unayemwamini, au kaa mahali ambapo tayari unaenda: bomba, soko, lango la shule, njia ya nyumbani.

Andika matatizo matatu. Kwa kila moja, andika:

- Mahali.
- Ulichoona.
- Namba moja kama unaweza (dakika, watu, daba, mifuko ya taka).

Weka nyota kando ya tatizo ambalo huenda ukalihifadhi kwa bango lako. Hifadhi ukurasa huu. Utaongeza watu, msaidizi na kanuni.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A community problem is something you can see or count more than once.
- Write a place, a time and a number. Do not start with a slogan.
- Next: name who is affected, including people who wait the longest.`,
        `- Tatizo la jamii ni kitu unachoweza kuona au kuhesabu zaidi ya mara moja.
- Andika mahali, wakati na namba. Usianze na kauli tupu.
- Ifuatayo: taja nani anaathiriwa, wakiwemo wanaosubiri kwa muda mrefu zaidi.`
      ),
    ],
  },
  {
    id: "cap-b-u2",
    titleEn: "Who is affected",
    titleSw: "Nani anaathiriwa",
    cards: [
      note(
        "Name the people, not only the place",
        "Taja watu, si mahali peke yake",
        `A problem is not finished when you name a tap or a dump. You still need to name who feels it. Different people can share one place and still be affected in different ways.

Ask four questions:

- Who waits, walks extra, pays extra, or loses food or time?
- Who is most often there at the difficult hour, such as before school?
- Who might be missed if you only talk to people with phones?
- Who already tries to help, such as a water committee, a teacher on duty, or a market clerk?

Fairness matters here. If your helper only works for people who own a smartphone, it may leave out the very people who wait the longest. If you only ask boys in your class, you may miss mothers who fetch water at dawn.

You do not need surnames. You need groups you can describe with respect: "children walking to school at 7 am", "older neighbours who cannot carry two jerrycans", "traders who must open stalls by 8 am".`,
        `Tatizo halijakamilika unapotaja bomba au dampo. Bado unahitaji kutaja nani analihisi. Watu tofauti wanaweza kushiriki mahali pamoja na bado kuathiriwa tofauti.

Uliza maswali manne:

- Nani anasubiri, anatembea zaidi, analipa zaidi, au anapoteza chakula au muda?
- Nani huwepo mara nyingi zaidi saa ngumu, kama kabla ya shule?
- Nani anaweza kukosa kama ukiongea tu na watu walio na simu mahiri?
- Nani tayari anajaribu kusaidia, kama kamati ya maji, mwalimu wa zamu, au karani wa soko?

Haki ina maana hapa. Msaidizi wako akifanya kazi tu kwa walio na simu mahiri, unaweza kuwaacha watu wanaosubiri kwa muda mrefu zaidi. Ukiwauliza wavulana wa darasa lako tu, unaweza kukosa akina mama wanaochota maji alfajiri.

Huhitaji majina ya ukoo. Unahitaji makundi unayoweza kueleza kwa heshima: "watoto wanaotembea shuleni saa 1 asubuhi", "majirani wazee wasioweza kubeba daba mbili", "wafanyabiashara ambao lazima wafungue maduka kufikia saa 2 asubuhi".`
      ),
      reveal([
        {
          termEn: "Affected person",
          termSw: "Mtu anayeathiriwa",
          defEn: "Someone who waits, pays, walks extra, loses time, or is left out because of the problem.",
          defSw: "Mtu anayesubiri, kulipa, kutembea zaidi, kupoteza muda, au kuachwa nje kwa sababu ya tatizo.",
        },
        {
          termEn: "Fairness",
          termSw: "Haki",
          defEn: "Checking that your helper does not only serve the people who are easiest to reach.",
          defSw: "Kukagua kwamba msaidizi wako hawahudumii tu watu walio rahisi kuwafikia.",
        },
        {
          termEn: "Burden",
          termSw: "Mzigo",
          defEn: "The extra time, money, walking or worry the problem puts on someone.",
          defSw: "Muda, pesa, kutembea au wasiwasi wa ziada ambao tatizo linamwekea mtu.",
        },
        {
          termEn: "Committee",
          termSw: "Kamati",
          defEn: "A small group already trusted to look after a shared thing, such as a water point or a market.",
          defSw: "Kundi dogo linaloaminika kuangalia kitu cha pamoja, kama kituo cha maji au soko.",
        },
      ]),
      note(
        "Worked example: who waits at Amina's tap",
        "Mfano: nani anasubiri kwenye bomba la Amina",
        `Amina goes back to the tap with her mother on Saturday morning. She does not write names. She writes groups.

From 7 am to 8 am she counts:

- 8 women carrying jerrycans, some with small children.
- 3 school-age children sent to fetch water before class.
- 1 older man who sits on a stone and waits for someone to help lift the can.

From 4 pm to 5 pm she counts:

- 11 people, mostly after work or after school.
- 2 motorbike riders filling several cans for households that pay them.

The heaviest burden is not the motorbike riders. They are paid. The heaviest burden is the children who may be late for assembly, and the older neighbour who cannot lift a full can.

Amina also notices who is missing from a phone idea: the older man has no smartphone. Any helper that lives only inside an app would skip him unless someone reads it aloud or writes it on a board.

She adds a line to her notebook: "People affected: mothers, school children before 8 am, older neighbours. Water committee already keeps the tap." That line will go on her poster.`,
        `Amina anarudi kwenye bomba na mama yake Jumamosi asubuhi. Haandiki majina. Anaandika makundi.

Kutoka saa 1 hadi saa 2 asubuhi anahesabu:

- Wanawake 8 wanaobeba daba, wengine wakiwa na watoto wadogo.
- Watoto 3 wa umri wa shule waliotumwa kuchota maji kabla ya darasa.
- Mzee 1 anayekaa kwenye jiwe na kusubiri mtu amsaidie kuinua daba.

Kutoka saa 10 hadi saa 11 jioni anahesabu:

- Watu 11, wengi baada ya kazi au baada ya shule.
- Waendeshaji 2 wa pikipiki wanaojaza daba kadhaa kwa kaya zinazowalipa.

Mzigo mzito si waendeshaji wa pikipiki. Wanalipwa. Mzigo mzito ni watoto wanaoweza kuchelewa mkutanoni, na jirani mzee asiyeweza kuinua daba iliyojaa.

Amina pia anaona nani anakosa kwenye wazo la simu: mzee hana simu mahiri. Msaidizi yeyote anayeishi ndani ya programu peke yake angemruka isipokuwa mtu asome kwa sauti au aandike kwenye ubao.

Anaongeza mstari kwenye daftari: "Watu wanaoathiriwa: akina mama, watoto wa shule kabla ya saa 2, majirani wazee. Kamati ya maji tayari inatunza bomba." Mstari huo utaenda kwenye bango lake.`
      ),
      scenario({
        titleEn: "Practice: the helper that skips people",
        titleSw: "Mazoezi: msaidizi anayeruka watu",
        situationEn:
          "A class project in Nakuru wants to help with a long waste skip behind the shops. One learner says, 'Let us make a phone tool only. Everyone has a phone.'",
        situationSw:
          "Mradi wa darasa huko Nakuru unataka kusaidia kuhusu skip refu la taka nyuma ya maduka. Mwanafunzi mmoja anasema, 'Tengeneze zana ya simu tu. Kila mtu ana simu.'",
        questionEn: "What should the group check first?",
        questionSw: "Kundi linapaswa kukagua nini kwanza?",
        optionsEn: [
          "Whether the tool can use bright colours",
          "Who dumps waste there, who lives next to the smell, and who has no phone",
          "Whether they can skip asking any adult",
          "Whether the skip looks messy in photos",
        ],
        optionsSw: [
          "Kama zana inaweza kutumia rangi angavu",
          "Nani anaweka taka hapo, nani anaishi karibu na harufu, na nani hana simu",
          "Kama wanaweza kuruka kuomba mtu mzima yeyote",
          "Kama skip inaonekana chafu kwenye picha",
        ],
        correctIndex: 1,
        hintsEn: [
          "Colour can wait. First you need to know who the problem belongs to.",
          "Right. Naming who is affected, including people without phones, stops a helper from serving only the easy group.",
          "Adults who look after the place still matter. Skipping them is not a shortcut.",
          "Messy photos do not tell you who suffers or who can act.",
        ],
        hintsSw: [
          "Rangi inaweza kusubiri. Kwanza unahitaji kujua tatizo ni la nani.",
          "Sawa. Kutaja nani anaathiriwa, wakiwemo wasio na simu, kunazuia msaidizi kuhudumia kundi rahisi tu.",
          "Watu wazima wanaotunza mahali bado ni muhimu. Kuwaruka si njia fupi.",
          "Picha chafu hazikuambii nani anateseka wala nani anaweza kuchukua hatua.",
        ],
        explainEn: "A helper that only reaches people with phones can miss the people who live with the smell all day.",
        explainSw: "Msaidizi anayewafikia tu watu wenye simu anaweza kukosa watu wanaoishi na harufu mchana kutwa.",
      }),
      quiz(
        "Why should you write groups of people, not full names, on a children's poster?",
        "Kwa nini uandike makundi ya watu, si majina kamili, kwenye bango la watoto?",
        [
          "Because groups are more famous",
          "Because the poster should show who is affected without spreading private names",
          "Because names make the poster look empty",
          "Because only chiefs' names are allowed",
        ],
        [
          "Kwa sababu makundi yanajulikana zaidi",
          "Kwa sababu bango lionyeshe nani anaathiriwa bila kueneza majina ya faragha",
          "Kwa sababu majina yanafanya bango lionekane tupu",
          "Kwa sababu majina ya machifu tu ndiyo yanaruhusiwa",
        ],
        1,
        "Respect and privacy start early. Describe groups. Do not publish neighbours' names.",
        "Heshima na faragha zinaanza mapema. Eleza makundi. Usichapishe majina ya majirani."
      ),
      note(
        "Try it: four people around your problem",
        "Jaribu: watu wanne kuhusu tatizo lako",
        `Take the starred problem from Unit 1. Draw four boxes:

- Who waits or loses time.
- Who might be late for school or work.
- Who has no phone, or cannot read a screen easily.
- Who already looks after this place (committee, teacher, market clerk, parent).

Write one line in each box. No surnames. Keep the page for your poster.`,
        `Chukua tatizo uliloweka nyota katika Somo 1. Chora visanduku vinne:

- Nani anasubiri au anapoteza muda.
- Nani anaweza kuchelewa shuleni au kazini.
- Nani hana simu, au hawezi kusoma skrini kwa urahisi.
- Nani tayari anatunza mahali hapa (kamati, mwalimu, karani wa soko, mzazi).

Andika mstari mmoja katika kila kisanduku. Hakuna majina ya ukoo. Hifadhi ukurasa kwa bango lako.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Name groups of people, not private surnames.
- Check who would be missed by a phone-only helper.
- Next: choose one helper idea that could make the burden a little smaller.`,
        `- Taja makundi ya watu, si majina ya ukoo ya faragha.
- Kagua nani angekosa kwa msaidizi wa simu tu.
- Ifuatayo: chagua wazo moja la msaada linaloweza kupunguza mzigo kidogo.`
      ),
    ],
  },
  {
    id: "cap-b-u3",
    titleEn: "One helper idea",
    titleSw: "Wazo moja la msaada",
    cards: [
      note(
        "One helper, not a magic machine",
        "Msaidizi mmoja, si mashine ya miujiza",
        `A helper is one idea that could make the problem a little easier. It is not a machine that ends waiting forever. In this project you pick one helper, then you will pick one danger to match it.

Helpers you might choose:

- A counting helper: people already count, and a board shows the quiet hours.
- A rule helper: if it is after 4 pm, the board says "usually shorter wait".
- An AI helper: a chatbot answers "when is the tap less busy?" using notes someone typed, or a photo tool guesses which waste pile is blocking a path.

AI can help when the job is a guess from patterns: busy times, similar photos, short answers in Kiswahili. AI cannot walk to the tap, lift a jerrycan, or promise that today will match last week.

The best beginner helper is small enough to draw. If you cannot show it in one picture, it is still too big.`,
        `Msaidizi ni wazo moja linaloweza kufanya tatizo liwe rahisi kidogo. Si mashine inayomaliza kusubiri milele. Katika mradi huu unachagua msaidizi mmoja, kisha utachagua hatari moja inayolingana nayo.

Wasaidizi unaoweza kuchagua:

- Msaidizi wa kuhesabu: watu tayari wanahesabu, na ubao unaonyesha saa za shwari.
- Msaidizi wa kanuni: ikiwa ni baada ya saa 10 jioni, ubao unasema "kwa kawaida foleni ni fupi".
- Msaidizi wa AI: chatbot inajibu "bomba lipo shwari lini?" kwa kutumia maelezo mtu aliyoandika, au zana ya picha inakisia rundo gani la taka linaziba njia.

AI inaweza kusaidia kazi ikiwa ni makisio kutoka mifumo: nyakati za msongamano, picha zinazofanana, majibu mafupi kwa Kiswahili. AI haiwezi kutembea hadi bomba, kuinua daba, wala kuahidi kwamba leo itafanana na wiki iliyopita.

Msaidizi bora wa mwanzoni ni mdogo kiasi cha kuchorwa. Ukiwa huwezi kuuonyesha kwenye picha moja, bado ni mkubwa mno.`
      ),
      reveal([
        {
          termEn: "Helper idea",
          termSw: "Wazo la msaada",
          defEn: "One small way counting, a rule, or an AI guess could make a community task easier.",
          defSw: "Njia moja ndogo ambayo kuhesabu, kanuni, au makisio ya AI yanaweza kufanya kazi ya jamii iwe rahisi.",
        },
        {
          termEn: "Guess",
          termSw: "Makisio",
          defEn: "The answer a tool gives from patterns. It can be useful and still be wrong today.",
          defSw: "Jibu zana inayotoa kutokana na mifumo. Linaweza kusaidia na bado kuwa kosa leo.",
        },
        {
          termEn: "Chatbot",
          termSw: "Chatbot",
          defEn: "A tool that answers in written or spoken words. It can invent a confident wrong answer.",
          defSw: "Zana inayojibu kwa maneno yaliyoandikwa au kusemwa. Inaweza kubuni jibu la uongo lenye uhakika.",
        },
        {
          termEn: "Rule board",
          termSw: "Ubao wa kanuni",
          defEn: "A sign people can read without a phone, such as 'after 4 pm the wait is often shorter'.",
          defSw: "Alama watu wanaoweza kusoma bila simu, kama 'baada ya saa 10 jioni kusubiri mara nyingi ni fupi'.",
        },
      ]),
      note(
        "Worked example: three helpers for the same tap",
        "Mfano: wasaidizi watatu kwa bomba lilelile",
        `Amina and her mother look at the notebook and try three helper ideas. Only one will go on the poster.

Helper A — a painted board. Each Saturday a committee member writes: "This week, after-school wait was long. Later afternoon was shorter." No phone needed. The older neighbour can see it.

Helper B — a chatbot. Someone types last week's counts. A neighbour asks, "When should I come?" The chatbot answers in Kiswahili. That can help, but it might invent a time that was never counted.

Helper C — a photo app that looks at the queue and says how many minutes you will wait. It sounds clever. It needs a phone, a clear photo, and it can be wrong if people stand outside the picture.

They choose Helper A as the poster helper, because children can draw it, people without phones can use it, and it still uses the counts. They keep Helper B as a "maybe later" idea for older learners. Helper C is refused for now: it takes pictures of people in a public line.

The lesson: pick the helper that fits the people you named, not the helper that sounds most like a film.`,
        `Amina na mama yake wanaangalia daftari na kujaribu mawazo matatu ya msaada. Moja tu litaenda kwenye bango.

Msaidizi A — ubao uliopakwa rangi. Kila Jumamosi mjumbe wa kamati anaandika: "Wiki hii, kusubiri baada ya shule kulikuwa kurefu. Alasiri ya baadaye ilikuwa fupi." Hakuna simu inayohitajika. Jirani mzee anaweza kuona.

Msaidizi B — chatbot. Mtu anaandika hesabu za wiki iliyopita. Jirani anauliza, "Nije lini?" Chatbot inajibu kwa Kiswahili. Hiyo inaweza kusaidia, lakini inaweza kubuni saa ambayo haijawahi kuhesabiwa.

Msaidizi C — programu ya picha inayoangalia foleni na kusema utasubiri dakika ngapi. Inasikika kuwa werevu. Inahitaji simu, picha wazi, na inaweza kukosa watu wakisimama nje ya picha.

Wanachagua Msaidizi A kama msaidizi wa bango, kwa sababu watoto wanaweza kuuchora, watu wasio na simu wanaweza kuutumia, na bado unatumia hesabu. Wanaweka Msaidizi B kama wazo la "huenda baadaye" kwa wanafunzi wakubwa. Msaidizi C unakataliwa kwa sasa: unapiga picha za watu kwenye foleni ya umma.

Funzo: chagua msaidizi anayefaa watu uliowataja, si msaidizi anayesikika kama filamu.`
      ),
      scenario({
        titleEn: "Practice: the helper that promises too much",
        titleSw: "Mazoezi: msaidizi anayeahidi mno",
        situationEn:
          "A learner in Machakos wants to help a school whose lesson videos fail when the connection drops. He writes on his draft poster: 'My AI helper will make the internet never fail.'",
        situationSw:
          "Mwanafunzi huko Machakos anataka kusaidia shule ambayo video za masomo zinashindwa muunganisho unapokatika. Anaandika kwenye rasimu ya bango: 'Msaidizi wangu wa AI atafanya intaneti isishindwe kamwe.'",
        questionEn: "What is a better helper sentence?",
        questionSw: "Sentensi gani ya msaada ni bora?",
        optionsEn: [
          "Keep the promise, because posters should sound exciting",
          "Write: a helper that suggests an offline activity when the video will not load, and a person still chooses",
          "Delete the whole project because internet problems cannot be helped",
          "Replace the school with a new satellite from the poster",
        ],
        optionsSw: [
          "Weka ahadi, kwa sababu mabango yanapaswa kusikika ya kusisimua",
          "Andika: msaidizi anayependekeza shughuli nje ya mtandao video isipopakue, na mtu bado anachagua",
          "Futa mradi wote kwa sababu matatizo ya intaneti hayawezi kusaidiwa",
          "Badilisha shule na satelaiti mpya kutoka kwenye bango",
        ],
        correctIndex: 1,
        hintsEn: [
          "Excitement that cannot come true teaches the wrong lesson.",
          "Right. One helper, one job, and a person still in charge. That can be drawn.",
          "Too far. A small helper can still reduce wasted lesson time.",
          "A poster cannot launch a satellite. Stay with one classroom job.",
        ],
        hintsSw: [
          "Msisimko usioweza kutimia unafundisha somo lisilo sahihi.",
          "Sawa. Msaidizi mmoja, kazi moja, na mtu bado yuko msimamizi. Hilo linaweza kuchorwa.",
          "Umezidi. Msaidizi mdogo bado anaweza kupunguza muda wa somo unaopotea.",
          "Bango haliwezi kuzindua satelaiti. Kaa kwenye kazi moja ya darasa.",
        ],
        explainEn: "A helper does one job and still leaves a person in charge. Promises to end a whole network are not a project.",
        explainSw: "Msaidizi hufanya kazi moja na bado anaacha mtu msimamizi. Ahadi za kumaliza mtandao mzima si mradi.",
      }),
      quiz(
        "Which helper is the best fit for a children's poster?",
        "Ni msaidizi yupi anayefaa zaidi bango la watoto?",
        [
          "A secret tool that nobody can explain",
          "One idea you can draw, that helps the people you named",
          "A tool that replaces the water committee",
          "A tool that needs every neighbour's full name",
        ],
        [
          "Zana ya siri ambayo hakuna anayeweza kuieleza",
          "Wazo moja unaloweza kuchora, linalosaidia watu uliowataja",
          "Zana inayochukua nafasi ya kamati ya maji",
          "Zana inayohitaji jina kamili la kila jirani",
        ],
        1,
        "If you can draw it and name who it helps, it is the right size. Secrets, replacements for trusted people, and name lists are the wrong size.",
        "Ukiweza kuichora na kutaja nani inasaidia, ndiyo ukubwa unaofaa. Siri, kuchukua nafasi ya watu wanaoaminika, na orodha za majina ni ukubwa usiofaa."
      ),
      note(
        "Try it: one sentence for your helper",
        "Jaribu: sentensi moja ya msaidizi wako",
        `Finish this sentence on your project page:

"My helper will ________ so that ________ can ________."

Example: "My helper will show quiet hours on a board so that children walking to school can fetch water with a shorter wait."

If you cannot finish the sentence, your helper is still too big. Shrink it until the sentence is true.`,
        `Kamilisha sentensi hii kwenye ukurasa wa mradi wako:

"Msaidizi wangu atafanya ________ ili ________ waweze ________."

Mfano: "Msaidizi wangu ataonyesha saa za shwari kwenye ubao ili watoto wanaokwenda shuleni wachote maji kwa kusubiri fupi."

Ukiwa huwezi kukamilisha sentensi, msaidizi wako bado ni mkubwa. Ufupishe hadi sentensi iwe kweli.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- One helper. One job. People stay in charge.
- Choose a helper the people you named can actually use.
- Next: name one danger, then write one rule that guards against it.`,
        `- Msaidizi mmoja. Kazi moja. Watu wanabaki wasimamizi.
- Chagua msaidizi ambaye watu uliowataja wanaweza kutumia kweli.
- Ifuatayo: taja hatari moja, kisha andika kanuni moja inayolinda dhidi yake.`
      ),
    ],
  },
  {
    id: "cap-b-u4",
    titleEn: "One danger, one rule",
    titleSw: "Hatari moja, kanuni moja",
    cards: [
      note(
        "Every helper has a danger",
        "Kila msaidizi ana hatari",
        `A danger is a way your helper could hurt someone, even if you meant well. In this course you will always name one. Two dangers appear again and again.

Privacy danger: the helper collects or shows something that should stay private. Examples: a photo of faces in a queue, a list of who fetched water, a child's full name on a public poster, a voice recording of a neighbour.

Wrong-guess danger: the helper states a guess as if it were a fact. Examples: a chatbot invents a quiet hour that was never counted, a photo tool says a path is clear when waste still blocks it, a board shows last week's times as if they were a promise for today.

Your rule is one sentence that blocks that danger. Good rules are short enough to paint on a poster:

- "We count jerrycans, not faces."
- "A guess is not an order. Check the line with your eyes."
- "No names on the board."

If you cannot name a danger, you do not yet understand the helper.`,
        `Hatari ni njia ambayo msaidizi wako anaweza kumdhuru mtu, hata kama ulikuwa na nia njema. Katika kozi hii utataja moja kila mara. Hatari mbili zinarudi tena na tena.

Hatari ya faragha: msaidizi anakusanya au kuonyesha kitu kinachopaswa kubaki siri. Mifano: picha ya nyuso kwenye foleni, orodha ya nani alichota maji, jina kamili la mtoto kwenye bango la umma, rekodi ya sauti ya jirani.

Hatari ya makisio mabaya: msaidizi anasema makisio kana kwamba ni ukweli. Mifano: chatbot inabuni saa ya shwari ambayo haijawahi kuhesabiwa, zana ya picha inasema njia iko wazi ingawa taka bado inaziba, ubao unaonyesha saa za wiki iliyopita kana kwamba ni ahadi ya leo.

Kanuni yako ni sentensi moja inayozuia hatari hiyo. Kanuni nzuri ni fupi kiasi cha kupakwa kwenye bango:

- "Tunahesabu daba, si nyuso."
- "Makisio si amri. Kagua foleni kwa macho yako."
- "Hakuna majina kwenye ubao."

Ukiwa huwezi kutaja hatari, bado hujamwelewa msaidizi.`
      ),
      reveal([
        {
          termEn: "Privacy",
          termSw: "Faragha",
          defEn: "Keeping personal things — names, faces, phone numbers, home details — from being shown or stored without a good reason.",
          defSw: "Kuweka mambo ya mtu — majina, nyuso, namba za simu, maelezo ya nyumbani — yasionyeshwe au kuhifadhiwa bila sababu nzuri.",
        },
        {
          termEn: "Wrong guess",
          termSw: "Makisio mabaya",
          defEn: "When a tool's answer does not match what is happening, but is said with confidence.",
          defSw: "Wakati jibu la zana halilingani na linaloendelea, lakini linasemwa kwa uhakika.",
        },
        {
          termEn: "Harm",
          termSw: "Madhara",
          defEn: "The real hurt that can follow, such as shame, a wasted trip, a late child, or a fight in the queue.",
          defSw: "Jeraha halisi linaloweza kufuata, kama aibu, safari iliyopotea, mtoto aliyechelewa, au ugomvi kwenye foleni.",
        },
        {
          termEn: "Rule",
          termSw: "Kanuni",
          defEn: "One short sentence that blocks the danger you named.",
          defSw: "Sentensi moja fupi inayozuia hatari uliyotaja.",
        },
      ]),
      note(
        "Worked example: two dangers at the same tap",
        "Mfano: hatari mbili kwenye bomba lilelile",
        `Amina tries two bad ideas so she can see the harm, then she writes a rule.

Bad idea 1 — photograph the queue every afternoon to "prove" it is long. The photos show faces of neighbours, school uniforms, and a woman who did not want to be on a classroom wall. Harm: shame and a broken trust. Even if the photo was meant to help, it used people's faces without asking.

Bad idea 2 — ask a chatbot "When is the Kisumu tap quiet?" without giving it Amina's counts. It answers, "Come at 2 pm, the line is always short." At Amina's tap, 2 pm is after school and is the busy time. Harm: a neighbour walks in the sun and still waits 50 minutes. The guess was invented.

Amina picks one danger for the poster: a wrong guess treated as a fact. Her rule: "The board shows last week's counts. It is not a promise. Look at the line today."

She also writes a smaller privacy line she will keep for later units: "No faces, no names." For the children's poster, one clear rule is enough, as long as it matches the helper.`,
        `Amina anajaribu mawazo mawili mabaya ili aone madhara, kisha anaandika kanuni.

Wazo baya 1 — piga picha ya foleni kila alasiri ili "thibitisha" ni ndefu. Picha zinaonyesha nyuso za majirani, sare za shule, na mwanamke ambaye hakutaka kuwa ukutani wa darasa. Madhara: aibu na uaminifu uliovunjika. Hata kama picha ilikusudiwa kusaidia, ilitumia nyuso za watu bila kuomba.

Wazo baya 2 — uliza chatbot "Bomba la Kisumu lipo shwari lini?" bila kupa hesabu za Amina. Inajibu, "Njoo saa 8 mchana, foleni huwa fupi kila mara." Kwenye bomba la Amina, saa 8 mchana ni baada ya shule na ni wakati wa msongamano. Madhara: jirani anatembea kwenye jua na bado anasubiri dakika 50. Makisio yalibuniwa.

Amina anachagua hatari moja kwa bango: makisio mabaya yanayochukuliwa kama ukweli. Kanuni yake: "Ubao unaonyesha hesabu za wiki iliyopita. Si ahadi. Angalia foleni leo."

Pia anaandika mstari mdogo wa faragha atakaouweka kwa masomo ya baadaye: "Hakuna nyuso, hakuna majina." Kwa bango la watoto, kanuni moja wazi inatosha, mradi inalingana na msaidizi.`
      ),
      scenario({
        titleEn: "Practice: a classmate wants to film the queue",
        titleSw: "Mazoezi: mwanafunzi mwenzako anataka kurekodi foleni",
        situationEn:
          "Wanjiku is making a poster about the same tap. A classmate says, 'Let us film people's faces so the teacher believes the wait is real.'",
        situationSw:
          "Wanjiku anatengeneza bango kuhusu bomba lilelile. Mwanafunzi mwenzako anasema, 'Turekodi nyuso za watu ili mwalimu aamini kusubiri ni kweli.'",
        questionEn: "What should Wanjiku do?",
        questionSw: "Wanjiku anapaswa kufanya nini?",
        optionsEn: [
          "Film everyone, because proof needs faces",
          "Refuse the faces: count jerrycans and minutes instead, and ask a trusted adult before any photo of a place with no people",
          "Film only small children, because they will not mind",
          "Hide the camera in a bag",
        ],
        optionsSw: [
          "Warekodi wote, kwa sababu ushahidi unahitaji nyuso",
          "Kataa nyuso: hesabu daba na dakika badala yake, na muulize mtu mzima unayemwamini kabla ya picha yoyote ya mahali pasipo watu",
          "Rekodi watoto wadogo tu, kwa sababu hawatagali",
          "Ficha kamera kwenye mfuko",
        ],
        correctIndex: 1,
        hintsEn: [
          "Faces are not required to prove a wait. Counts are enough and they protect neighbours.",
          "Right. Numbers do the proof. Faces create a privacy danger. Hidden filming is worse.",
          "Children's faces need even more care, not less.",
          "A hidden camera is a privacy harm, not a clever trick.",
        ],
        hintsSw: [
          "Nyuso si lazima kuthibitisha kusubiri. Hesabu zinatosha na zinalinda majirani.",
          "Sawa. Namba ndizo ushahidi. Nyuso zinaunda hatari ya faragha. Kurekodi kwa siri ni mbaya zaidi.",
          "Nyuso za watoto zinahitaji uangalifu zaidi, si pungufu.",
          "Kamera iliyofichwa ni madhara ya faragha, si ujanja.",
        ],
        explainEn: "Counts can prove a wait. Faces on a classroom wall can shame people who never agreed.",
        explainSw: "Hesabu zinaweza kuthibitisha kusubiri. Nyuso ukutani wa darasa zinaweza kuwaaibisha watu ambao hawakukubali.",
      }),
      quiz(
        "A good rule on a beginner poster should do which job?",
        "Kanuni nzuri kwenye bango la mwanzoni inapaswa kufanya kazi gani?",
        [
          "List every law in Kenya",
          "Block the one danger you named, in one short sentence",
          "Promise that the helper is never wrong",
          "Tell people to ignore the water committee",
        ],
        [
          "Orodhesha kila sheria Kenya",
          "Zuia hatari moja uliyotaja, kwa sentensi moja fupi",
          "Ahidi kwamba msaidizi hakosi kamwe",
          "Waambie watu wapuuze kamati ya maji",
        ],
        1,
        "One danger, one short rule. That is enough for a poster and honest enough to keep.",
        "Hatari moja, kanuni moja fupi. Hiyo inatosha kwa bango na ni ya kweli kiasi cha kuishika."
      ),
      note(
        "Try it: write your rule",
        "Jaribu: andika kanuni yako",
        `On your project page, write two lines:

- Danger: (privacy or wrong guess — pick one and say how it could happen with your helper)
- Rule: (one sentence that blocks that danger)

Read the rule aloud. If a younger child cannot repeat it, shorten it.`,
        `Kwenye ukurasa wa mradi wako, andika mistari miwili:

- Hatari: (faragha au makisio mabaya — chagua moja na sema inaweza vipi kutokea kwa msaidizi wako)
- Kanuni: (sentensi moja inayozuia hatari hiyo)

Soma kanuni kwa sauti. Mtoto mdogo asipoweza kuirudia, ifupishe.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Every helper needs one named danger and one short rule.
- Privacy and wrong guesses are the two dangers this project watches first.
- Next: put problem, people, helper and rule on one poster, and show who must agree.`,
        `- Kila msaidizi anahitaji hatari moja iliyotajwa na kanuni moja fupi.
- Faragha na makisio mabaya ndizo hatari mbili mradi huu unazoangalia kwanza.
- Ifuatayo: weka tatizo, watu, msaidizi na kanuni kwenye bango moja, na onyesha nani lazima akubali.`
      ),
    ],
  },
  {
    id: "cap-b-u5",
    titleEn: "Draw your poster",
    titleSw: "Chora bango lako",
    cards: [
      note(
        "Four boxes and one permission line",
        "Visanduku vinne na mstari mmoja wa ruhusa",
        `Your poster is the project for this first stretch of the course. If you are 8, 9 or 10, this is the finish line you can be proud of. Older learners will keep going, but they still need this poster as the heart of the work.

Draw four boxes, large enough to read from a few steps away:

1. Problem — the place and the number you counted.
2. Who is affected — groups, not surnames.
3. Helper — one idea, one picture.
4. Rule — one sentence that blocks your danger.

Under the boxes, add a permission line: "Who must agree before we try this?" Write at least one trusted adult and, if you know it, the group that already looks after the place (water committee, teacher on duty, market clerk, parent).

Do not put real phone numbers, ID numbers, or photos of faces on the poster. A drawing of a tap, a skip, a classroom or a stall is enough.

A poster is not a decoration. It is a promise about how you will treat people.`,
        `Bango lako ndio mradi wa sehemu hii ya kwanza ya kozi. Ukiwa na miaka 8, 9 au 10, hii ndiyo mwisho unaoweza kujivunia. Wanafunzi wakubwa wataendelea, lakini bado wanahitaji bango hili kama moyo wa kazi.

Chora visanduku vinne, vikubwa kiasi cha kusomwa kutoka hatua chache:

1. Tatizo — mahali na namba uliyohesabu.
2. Nani anaathiriwa — makundi, si majina ya ukoo.
3. Msaidizi — wazo moja, picha moja.
4. Kanuni — sentensi moja inayozuia hatari yako.

Chini ya visanduku, ongeza mstari wa ruhusa: "Nani lazima akubali kabla hatujajaribu hivi?" Andika angalau mtu mzima mmoja unayemwamini na, ukijua, kundi linalotunza mahali (kamati ya maji, mwalimu wa zamu, karani wa soko, mzazi).

Usiweke namba halisi za simu, namba za kitambulisho, wala picha za nyuso kwenye bango. Mchoro wa bomba, skip, darasa au duka unatosha.

Bango si mapambo. Ni ahadi kuhusu jinsi utakavyowatendea watu.`
      ),
      reveal([
        {
          termEn: "Poster",
          termSw: "Bango",
          defEn: "One page that shows the problem, the people, the helper and the rule so others can understand the project.",
          defSw: "Ukurasa mmoja unaoonyesha tatizo, watu, msaidizi na kanuni ili wengine waelewe mradi.",
        },
        {
          termEn: "Permission line",
          termSw: "Mstari wa ruhusa",
          defEn: "The names of roles — not secrets — of people who must agree before you try the helper in public.",
          defSw: "Majina ya majukumu — si siri — ya watu ambao lazima wakubali kabla hujajaribu msaidizi hadharani.",
        },
        {
          termEn: "Title",
          termSw: "Kichwa",
          defEn: "A short name for the project, such as 'Quiet hours at our tap'.",
          defSw: "Jina fupi la mradi, kama 'Saa za shwari kwenye bomba letu'.",
        },
        {
          termEn: "Public place",
          termSw: "Mahali pa umma",
          defEn: "A space other people share, so your poster and your helper must treat them with care.",
          defSw: "Nafasi ambayo watu wengine wanashiriki, kwa hiyo bango lako na msaidizi wako lazima wawatendee kwa uangalifu.",
        },
      ]),
      note(
        "Worked example: Amina's finished poster",
        "Mfano: bango lililokamilika la Amina",
        `Amina's title is "Quiet hours at our tap".

Box 1 — Problem: "Our community tap in Kisumu. After school we counted 12 to 15 jerrycans and waited about 45 to 50 minutes. Later afternoon we counted 4 jerrycans and waited 10 minutes."

Box 2 — Who: "Mothers, school children before assembly, older neighbours. Motorbike carriers also come, but they are paid."

Box 3 — Helper: a drawing of a wooden board beside the tap. The board says "Last week: after school was busy. Later afternoon was shorter."

Box 4 — Rule: "The board is last week's count, not a promise. Look at the line today. No faces. No names."

Permission line: "Mum, and the water committee, must agree before we put any board up."

She uses pencil and one colour of marker. The poster is readable. It is not fancy. When she shows it to her teacher, the teacher can repeat the helper and the rule without looking twice. That is the test.`,
        `Kichwa cha Amina ni "Saa za shwari kwenye bomba letu".

Kisanduku 1 — Tatizo: "Bomba letu la jamii Kisumu. Baada ya shule tulihesabu daba 12 hadi 15 na tukasubiri takriban dakika 45 hadi 50. Alasiri ya baadaye tulihesabu daba 4 na tukasubiri dakika 10."

Kisanduku 2 — Nani: "Akina mama, watoto wa shule kabla ya mkutano, majirani wazee. Wabebaji wa pikipiki pia huja, lakini wanalipwa."

Kisanduku 3 — Msaidizi: mchoro wa ubao wa mbao kando ya bomba. Ubao unasema "Wiki iliyopita: baada ya shule palikuwa na msongamano. Alasiri ya baadaye ilikuwa fupi."

Kisanduku 4 — Kanuni: "Ubao ni hesabu ya wiki iliyopita, si ahadi. Angalia foleni leo. Hakuna nyuso. Hakuna majina."

Mstari wa ruhusa: "Mama, na kamati ya maji, lazima wakubali kabla hatujaweka ubao wowote."

Anatumia penseli na rangi moja ya kalamu. Bango linasomeka. Si la mapambo. Anapomwonyesha mwalimu, mwalimu anaweza kurudia msaidizi na kanuni bila kuangalia mara mbili. Huo ndio mtihani.`
      ),
      scenario({
        titleEn: "Practice: a pretty poster with no rule",
        titleSw: "Mazoezi: bango zuri lisilo na kanuni",
        situationEn:
          "Brian finishes a colourful poster about waste near his estate shops. It has a drawing of a skip and the words 'AI will clean our area'. There is no rule box and no permission line.",
        situationSw:
          "Brian anamaliza bango lenye rangi kuhusu taka karibu na maduka ya estate yake. Lina mchoro wa skip na maneno 'AI itasafisha eneo letu'. Hakuna kisanduku cha kanuni wala mstari wa ruhusa.",
        questionEn: "What is missing before this can count as the project?",
        questionSw: "Nini kinakosekana kabla hii ihesabiwe kama mradi?",
        optionsEn: [
          "More glitter so people notice it",
          "A real helper sentence, one danger-and-rule box, and who must agree",
          "The surnames of every neighbour",
          "A promise that waste will disappear this week",
        ],
        optionsSw: [
          "Mng'aro zaidi ili watu walione",
          "Sentensi halisi ya msaidizi, kisanduku kimoja cha hatari-na-kanuni, na nani lazima akubali",
          "Majina ya ukoo ya kila jirani",
          "Ahadi kwamba taka zitatoweka wiki hii",
        ],
        correctIndex: 1,
        hintsEn: [
          "Decoration is not the project.",
          "Right. Without a helper, a rule and permission, it is a slogan on paper.",
          "Surnames would add a privacy danger.",
          "A promise you cannot keep is another kind of wrong guess.",
        ],
        hintsSw: [
          "Mapambo si mradi.",
          "Sawa. Bila msaidizi, kanuni na ruhusa, ni kauli kwenye karatasi.",
          "Majina ya ukoo yangeongeza hatari ya faragha.",
          "Ahadi usiyoweza kuitimiza ni aina nyingine ya makisio mabaya.",
        ],
        explainEn: "The project is helper plus rule, shown so a trusted adult can agree. Colour is optional.",
        explainSw: "Mradi ni msaidizi pamoja na kanuni, unaoonyeshwa ili mtu mzima unayemwamini akubali. Rangi ni hiari.",
      }),
      quiz(
        "What must a finished beginner poster include?",
        "Bango lililokamilika la mwanzoni lazima liwe na nini?",
        [
          "Only a drawing of a robot",
          "Problem, who is affected, one helper, one rule, and who must agree",
          "Every neighbour's phone number",
          "A claim that the helper never fails",
        ],
        [
          "Mchoro wa roboti tu",
          "Tatizo, nani anaathiriwa, msaidizi mmoja, kanuni moja, na nani lazima akubali",
          "Namba ya simu ya kila jirani",
          "Dai kwamba msaidizi hashindwi kamwe",
        ],
        1,
        "Those five parts are the whole children's project. Phones and perfect promises do not belong on the poster.",
        "Sehemu hizo tano ndizo mradi mzima wa watoto. Simu na ahadi kamilifu hazifai kwenye bango."
      ),
      note(
        "Try it: make the poster",
        "Jaribu: tengeneza bango",
        `On a clean page, write a short title, then fill the four boxes and the permission line.

Read it to a trusted adult. Ask them to repeat the helper and the rule. If they cannot, enlarge those two boxes and shorten the sentences.

If you are 8 to 10, you have finished the project for this module. Keep the poster. You did real community thinking: one helper, one rule.`,
        `Kwenye ukurasa safi, andika kichwa kifupi, kisha jaza visanduku vinne na mstari wa ruhusa.

Lisome kwa mtu mzima unayemwamini. Waombe warudia msaidizi na kanuni. Wakiwa hawawezi, panua visanduku hivyo viwili na fupisha sentensi.

Ukiwa na miaka 8 hadi 10, umemaliza mradi wa moduli hii. Hifadhi bango. Umefanya mawazo halisi ya jamii: msaidizi mmoja, kanuni moja.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Younger learners stop here with a poster they can explain.
- Older learners keep the poster and go next to who must agree in more detail, including Kenya's data protection rules.
- The heart of the project stays the same: one helper, one rule.`,
        `- Wanafunzi wadogo wanasimama hapa na bango wanaweza kueleza.
- Wanafunzi wakubwa wanaweka bango na kuendelea kwa nani lazima akubali kwa undani zaidi, pamoja na sheria za Kenya za ulinzi wa data.
- Moyo wa mradi unabaki uleule: msaidizi mmoja, kanuni moja.`
      ),
    ],
  },
  {
    id: "cap-b-u6",
    titleEn: "Who must agree",
    titleSw: "Nani lazima akubali",
    cards: [
      note(
        "Agreement is not a stamp at the end",
        "Makubaliano si muhuri mwishoni",
        `If you are older than the first five units, your poster still needs a real yes from the people who look after the place and the people whose information you might touch.

In Kenya, personal data is protected by the Data Protection Act, 2019. Personal data is information that can point to a living person: a name, a phone number, a face in a photo, a home, an ID number. You generally need a clear reason to collect it, and you need the person (or a parent or guardian, if they are a child) to agree in a way they understand.

For a community mini-project, agreement usually means several yeses, not one:

- A parent or guardian, if you are under 18.
- The people who already look after the place: water committee, head teacher, market clerk, nyumba kumi, chief's office.
- The people you will count or speak to, in words they can refuse.

A yes that cannot be a no is not agreement. If someone will lose access to water, a stall or a classroom because they refused your project, you have used pressure, not consent.

County officers are stakeholders when the work touches a public service. You do not need a long letter yet. You do need to know whose job you are walking into.`,
        `Ukiwa mkubwa kuliko masomo matano ya kwanza, bango lako bado linahitaji ndiyo halisi kutoka kwa watu wanaotunza mahali na watu ambao taarifa zao unaweza kugusa.

Nchini Kenya, data ya mtu inalindwa na Sheria ya Ulinzi wa Data, 2019. Data ya mtu ni taarifa inayoweza kuelekeza kwa mtu aliye hai: jina, namba ya simu, uso kwenye picha, nyumba, namba ya kitambulisho. Kwa kawaida unahitaji sababu wazi ya kuikusanya, na unahitaji mtu (au mzazi au mlezi, ikiwa ni mtoto) akubali kwa njia anayoelewa.

Kwa mradi mdogo wa jamii, makubaliano kwa kawaida yanamaanisha ndiyo kadhaa, si moja:

- Mzazi au mlezi, ikiwa una chini ya miaka 18.
- Watu ambao tayari wanatunza mahali: kamati ya maji, mwalimu mkuu, karani wa soko, nyumba kumi, ofisi ya chifu.
- Watu utakaowahesabu au kuongea nao, kwa maneno wanayoweza kukataa.

Ndiyo isiyoweza kuwa hapana si makubaliano. Mtu akipoteza maji, duka au darasa kwa sababu alikataa mradi wako, umetumia shinikizo, si idhini.

Maafisa wa kaunti ni wadau kazi inapogusa huduma ya umma. Huhitaji barua ndefu bado. Unahitaji kujua kazi ya nani unayoingia.`
      ),
      reveal([
        {
          termEn: "Consent",
          termSw: "Idhini",
          defEn: "A clear yes, given freely, after the person understands what you will do and can say no without punishment.",
          defSw: "Ndiyo wazi, inayotolewa kwa hiari, baada ya mtu kuelewa utakachofanya na anaweza kusema hapana bila adhabu.",
        },
        {
          termEn: "Personal data",
          termSw: "Data ya mtu",
          defEn: "Information that can point to a living person, such as a name, face, phone number or home.",
          defSw: "Taarifa inayoweza kuelekeza kwa mtu aliye hai, kama jina, uso, namba ya simu au nyumba.",
        },
        {
          termEn: "Data Protection Act, 2019",
          termSw: "Sheria ya Ulinzi wa Data, 2019",
          defEn: "Kenya's law that sets rules for collecting and using personal data.",
          defSw: "Sheria ya Kenya inayoweka kanuni za kukusanya na kutumia data ya mtu.",
        },
        {
          termEn: "Guardian",
          termSw: "Mlezi",
          defEn: "The adult who may agree on behalf of a child, in addition to explaining the project to the child in plain words.",
          defSw: "Mtu mzima anayeweza kukubali kwa niaba ya mtoto, pamoja na kumweleza mtoto mradi kwa maneno rahisi.",
        },
        {
          termEn: "Stakeholder",
          termSw: "Mdau",
          defEn: "Someone whose work, duty or daily life is touched by the project, including county officers for public services.",
          defSw: "Mtu ambaye kazi, wajibu au maisha yake ya kila siku yanaguswa na mradi, wakiwemo maafisa wa kaunti kwa huduma za umma.",
        },
      ]),
      note(
        "Worked example: Amina asks before she counts names — and then does not count names",
        "Mfano: Amina anaomba kabla ya kuhesabu majina — kisha hahesabu majina",
        `Amina's older cousin, Brian, wants to help. He suggests writing each neighbour's name and the time they arrived, "so the chatbot can learn".

Before anyone writes a name, they visit the water committee chair with Amina's mother. They show the poster. The chair says: you may count jerrycans and minutes on three afternoons if you stand to the side and do not block the line. You may not write names. You may not photograph faces. If anyone asks you to stop, you stop.

That is agreement with a boundary. Brian's chatbot idea needed personal data it did not have permission to take. The board helper can still work on anonymous counts.

They also tell the class teacher, because the poster will hang in school. The teacher agrees on the condition that no child's surname appears.

If they had counted first and asked later, neighbours would have been right to be angry. Agreement comes before collection.`,
        `Binamu mkubwa wa Amina, Brian, anataka kusaidia. Anapendekeza kuandika jina la kila jirani na saa aliyofika, "ili chatbot ijifunze".

Kabla mtu yeyote hajaandika jina, wanamtembelea mwenyekiti wa kamati ya maji pamoja na mama ya Amina. Wanaonyesha bango. Mwenyekiti anasema: mnaweza kuhesabu daba na dakika alasiri tatu mkiwa kando na hamzibi foleni. Hamnaandiki majina. Hampigi picha za nyuso. Mtu yeyote akiwaomba muache, mnaacha.

Hayo ni makubaliano yenye mpaka. Wazo la chatbot la Brian lilihitaji data ya mtu ambalo halikuwa na ruhusa ya kuchukua. Msaidizi wa ubao bado unaweza kufanya kazi kwa hesabu zisizo na majina.

Pia wanamwambia mwalimu wa darasa, kwa sababu bango litantungwa shuleni. Mwalimu anakubali kwa sharti kwamba jina la ukoo la mtoto yeyote lisitokee.

Kama wangehesabu kwanza na kuomba baadaye, majirani wangekuwa na haki ya kukasirika. Makubaliano yanakuja kabla ya ukusanyaji.`
      ),
      scenario({
        titleEn: "Practice: start now, ask later",
        titleSw: "Mazoezi: anza sasa, uliza baadaye",
        situationEn:
          "A youth group wants to record market prices on their phones. One member says, 'Let us copy stall names and phone numbers from the county list tonight, then tell the clerk tomorrow.'",
        situationSw:
          "Kikundi cha vijana kinataka kurekodi bei za soko kwenye simu zao. Mwanachama mmoja anasema, 'Tunakili majina ya maduka na namba za simu kutoka orodha ya kaunti usiku huu, kisha tumwambie karani kesho.'",
        questionEn: "What should they do?",
        questionSw: "Wanapaswa kufanya nini?",
        optionsEn: [
          "Copy the list first, because it is already written somewhere",
          "Stop, speak to the market clerk and traders, explain what they will store, and accept refusals before any copy",
          "Copy only the phone numbers, not the names",
          "Post the list in a class group so more people can 'help'",
        ],
        optionsSw: [
          "Nakili orodha kwanza, kwa sababu tayari imeandikwa mahali",
          "Simama, ongea na karani wa soko na wafanyabiashara, eleza watakachohifadhi, na kubali kukataa kabla ya nakala yoyote",
          "Nakili namba za simu tu, si majina",
          "Chapisha orodha kwenye kundi la darasa ili watu wengi zaidi 'wasaidie'",
        ],
        correctIndex: 1,
        hintsEn: [
          "Written somewhere is not the same as agreed for your project.",
          "Right. County and trader lists are personal or business data. Ask, explain, and allow a no.",
          "Phone numbers still point to people.",
          "Spreading the list creates more copies you cannot control.",
        ],
        hintsSw: [
          "Kuandikwa mahali si sawa na kukubaliwa kwa mradi wako.",
          "Sawa. Orodha za kaunti na wafanyabiashara ni data ya mtu au biashara. Omba, eleza, na ruhusu hapana.",
          "Namba za simu bado zinaelekeza kwa watu.",
          "Kueneza orodha kunaunda nakala nyingi usizoweza kudhibiti.",
        ],
        explainEn: "Consent is asked before you copy. A county list is not a free pass for a school project.",
        explainSw: "Idhini inaombwa kabla ya kunakili. Orodha ya kaunti si ruhusa huria kwa mradi wa shule.",
      }),
      quiz(
        "Under Kenya's Data Protection Act, 2019, a children's project should treat a neighbour's name and face as:",
        "Chini ya Sheria ya Ulinzi wa Data, 2019, mradi wa watoto unapaswa kushughulikia jina na uso wa jirani kama:",
        [
          "Free decoration for the poster",
          "Personal data that needs a clear reason and a free yes",
          "Something only foreigners must protect",
          "Safe to collect if the queue is long",
        ],
        [
          "Mapambo ya bure kwa bango",
          "Data ya mtu inayohitaji sababu wazi na ndiyo ya hiari",
          "Kitu wageni tu wanapaswa kulinda",
          "Salama kukusanya kama foleni ni ndefu",
        ],
        1,
        "Names and faces point to living people. The law expects a purpose and consent, even for a small project.",
        "Majina na nyuso vinaelekeza kwa watu walio hai. Sheria inatarajia madhumuni na idhini, hata kwa mradi mdogo."
      ),
      note(
        "Try it: three yeses on paper",
        "Jaribu: ndiyo tatu kwenye karatasi",
        `Add a small table under your poster notes:

- Who must agree (role, not a private phone number).
- What you will ask them.
- What they can refuse.

Fill three rows: a parent or guardian, the person who looks after the place, and one group of people you might count or speak to.

If you cannot fill the refusal column, your ask is still pressure.`,
        `Ongeza jedwali dogo chini ya maelezo ya bango lako:

- Nani lazima akubali (jukumu, si namba ya simu ya faragha).
- Utawauliza nini.
- Wanaweza kukataa nini.

Jaza safu tatu: mzazi au mlezi, mtu anayetunza mahali, na kundi moja la watu unaoweza kuhesabu au kuongea nao.

Ukiwa huwezi kujaza safu ya kukataa, ombi lako bado ni shinikizo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Ask before you collect. A no must be safe.
- The Data Protection Act, 2019 treats names, faces and phone numbers as personal data.
- Next: write the data you will refuse to collect, even if it would make a tool look clever.`,
        `- Omba kabla ya kukusanya. Hapana lazima iwe salama.
- Sheria ya Ulinzi wa Data, 2019 inachukulia majina, nyuso na namba za simu kama data ya mtu.
- Ifuatayo: andika data utakayokataa kukusanya, hata kama ingefanya zana ionekane werevu.`
      ),
    ],
  },
  {
    id: "cap-b-u7",
    titleEn: "Data you will not collect",
    titleSw: "Data usiyokusanya",
    cards: [
      note(
        "The clever-looking extra is often the harm",
        "Kiongezeo kinachoonekana werevu mara nyingi ndicho madhara",
        `Data minimisation means collecting only what you need for the helper you chose. Everything else is extra risk: more to lose, more to leak, more to explain.

For a tap-queue helper, you need something like: day, rough time of day, number of jerrycans, minutes waited. You do not need: names, ID numbers, phone numbers, house numbers, school names on uniforms, faces, voice clips, M-Pesa messages.

For a waste helper, you may need: place of the pile, approximate size, whether it blocks a path. You do not need photos of people dumping, or a list of who lives in which plot.

For a school-connection helper, you may need: "video loaded / did not load" for a lesson hour. You do not need learner marks, admission numbers, or home addresses.

Write a will-not list in the same ink as the helper. If a tool asks for the will-not list in order to "work better", that is a reason to pick a smaller tool, not a reason to hand the list over.`,
        `Kupunguza data kunamaanisha kukusanya tu kile unachohitaji kwa msaidizi uliyemchagua. Kila kitu kingine ni hatari ya ziada: zaidi ya kupoteza, zaidi ya kuvuja, zaidi ya kueleza.

Kwa msaidizi wa foleni ya bomba, unahitaji kitu kama: siku, takriban saa, idadi ya daba, dakika zilizosubiriwa. Huhitaji: majina, namba za kitambulisho, namba za simu, namba za nyumba, majina ya shule kwenye sare, nyuso, klipu za sauti, ujumbe wa M-Pesa.

Kwa msaidizi wa taka, unaweza kuhitaji: mahali pa rundo, ukubwa takriban, kama linaziba njia. Huhitaji picha za watu wanaotupa, wala orodha ya nani anaishi kipande kipi.

Kwa msaidizi wa muunganisho wa shule, unaweza kuhitaji: "video ilipakia / haikupakia" kwa saa ya somo. Huhitaji alama za wanafunzi, namba za kujiunga, wala anwani za nyumbani.

Andika orodha ya "hatutakusanya" kwa wino uleule wa msaidizi. Zana ikitaka orodha hiyo ili "ifanye kazi vizuri", hiyo ni sababu ya kuchagua zana ndogo, si sababu ya kutoa orodha.`
      ),
      reveal([
        {
          termEn: "Data minimisation",
          termSw: "Kupunguza data",
          defEn: "Collecting only the facts the helper needs, and refusing the rest.",
          defSw: "Kukusanya tu ukweli ambao msaidizi anahitaji, na kukataa vilivyobaki.",
        },
        {
          termEn: "Anonymous count",
          termSw: "Hesabu isiyo na jina",
          defEn: "A number that cannot be traced back to a person, such as '14 jerrycans at 4 pm'.",
          defSw: "Namba isiyoweza kufuatwa hadi kwa mtu, kama 'daba 14 saa 10 jioni'.",
        },
        {
          termEn: "Will-not list",
          termSw: "Orodha ya hatutakusanya",
          defEn: "The personal details you refuse in advance, written next to the helper.",
          defSw: "Maelezo ya mtu unayokataa mapema, yaliyoandikwa kando ya msaidizi.",
        },
        {
          termEn: "Leak",
          termSw: "Uvujaji",
          defEn: "When data you stored reaches someone you did not mean to show, including a class chat.",
          defSw: "Wakati data uliyohifadhi inafikia mtu usiyekusudia kumwonyesha, pamoja na gumzo la darasa.",
        },
      ]),
      note(
        "Worked example: the notebook with two columns",
        "Mfano: daftari lenye safu mbili",
        `Brian draws two columns for the tap project.

Will collect:

- Date.
- Morning or after school or later afternoon.
- Number of jerrycans.
- Minutes from joining the line to filling.

Will not collect:

- Names.
- Faces.
- Phone numbers.
- House plots.
- What anyone said in the queue.
- Children's school names.

On Wednesday a neighbour offers, "Write my number so you can tell me when it is quiet." Brian thanks her and does not write it. If the notebook is lost on the matatu, there is nothing that can be used to bother her.

The helper still works. Quiet hours can be shown from counts. The extra column would have made the notebook dangerous without making the board more useful.`,
        `Brian anachora safu mbili kwa mradi wa bomba.

Tutakusanya:

- Tarehe.
- Asubuhi au baada ya shule au alasiri ya baadaye.
- Idadi ya daba.
- Dakika kutoka kuingia foleni hadi kujaza.

Hatutakusanya:

- Majina.
- Nyuso.
- Namba za simu.
- Viwanja vya nyumba.
- Kile mtu yeyote alisema kwenye foleni.
- Majina ya shule za watoto.

Jumatano jirani anasema, "Andika namba yangu ili uniambie linapokuwa shwari." Brian anamshukuru na haandiki. Daftari likipotea kwenye matatu, hakuna kitakachotumika kumsumbua.

Msaidizi bado anafanya kazi. Saa za shwari zinaweza kuonyeshwa kutoka hesabu. Safu ya ziada ingelifanya daftari liwe hatari bila kufanya ubao uwe na manufaa zaidi.`
      ),
      scenario({
        titleEn: "Practice: ID numbers for accuracy",
        titleSw: "Mazoezi: namba za kitambulisho kwa usahihi",
        situationEn:
          "A group tracking waste piles wants each household to give an ID number 'so nobody reports twice'. They already have street and pile size.",
        situationSw:
          "Kundi linalofuatilia marundo ya taka linataka kila kaya itoe namba ya kitambulisho 'ili mtu asiripoti mara mbili'. Tayari wana mtaa na ukubwa wa rundo.",
        questionEn: "What is the responsible choice?",
        questionSw: "Chaguo lenye uwajibikaji ni lipi?",
        optionsEn: [
          "Collect ID numbers and store them in a class phone",
          "Refuse ID numbers; one report per pile per day is enough, without knowing who sent it",
          "Collect ID numbers but hide them under a sticker",
          "Take ID numbers only from people who cannot read",
        ],
        optionsSw: [
          "Kusanya namba za kitambulisho na uzhifadhi kwenye simu ya darasa",
          "Kataa namba za kitambulisho; ripoti moja kwa rundo kwa siku inatosha, bila kujua nani alituma",
          "Kusanya namba za kitambulisho lakini uzifiche chini ya stika",
          "Chukua namba za kitambulisho tu kutoka kwa wasioweza kusoma",
        ],
        correctIndex: 1,
        hintsEn: [
          "A class phone is an easy leak. ID numbers are high-harm personal data.",
          "Right. Duplicate piles can be spotted by place and day. You do not need to know who spoke.",
          "A sticker is not protection.",
          "Taking more data from people with less power is the opposite of fairness.",
        ],
        hintsSw: [
          "Simu ya darasa ni uvujaji rahisi. Namba za kitambulisho ni data ya mtu yenye madhara makubwa.",
          "Sawa. Marundo marudufu yanaweza kuonekana kwa mahali na siku. Huhitaji kujua nani aliongea.",
          "Stika si ulinzi.",
          "Kuchukua data zaidi kutoka kwa watu wenye nguvu pungufu ni kinyume cha haki.",
        ],
        explainEn: "If the helper can work without a fact, that fact belongs on the will-not list.",
        explainSw: "Msaidizi akiweza kufanya kazi bila ukweli fulani, ukweli huo unafaa kwenye orodha ya hatutakusanya.",
      }),
      quiz(
        "Which set of facts is enough for a quiet-hours tap board?",
        "Seti gani ya ukweli inatosha kwa ubao wa saa za shwari kwenye bomba?",
        [
          "Names, faces and phone numbers of everyone in line",
          "Day, time of day, jerrycan count and minutes waited",
          "ID numbers and house plots",
          "Children's marks and admission numbers",
        ],
        [
          "Majina, nyuso na namba za simu za kila mtu kwenye foleni",
          "Siku, wakati wa siku, idadi ya daba na dakika zilizosubiriwa",
          "Namba za kitambulisho na viwanja vya nyumba",
          "Alama za watoto na namba za kujiunga",
        ],
        1,
        "Anonymous counts are enough to show busy and quiet hours. Personal identifiers add harm without helping the board.",
        "Hesabu zisizo na majina zinatosha kuonyesha saa za msongamano na shwari. Vitambulisho vya mtu vinaongeza madhara bila kusaidia ubao."
      ),
      note(
        "Try it: two columns",
        "Jaribu: safu mbili",
        `On your project page, draw Will collect and Will not collect.

Write at least four items in the will-not column. Include names, faces and phone numbers unless you have a rare, agreed reason that a trusted adult has approved.

If the will-collect column is longer than the will-not column, you are probably still collecting extras. Cut until the helper still works.`,
        `Kwenye ukurasa wa mradi wako, chora Tutakusanya na Hatutakusanya.

Andika angalau vitu vinne kwenye safu ya hatutakusanya. Jumlisha majina, nyuso na namba za simu isipokuwa una sababu adimu iliyokubaliwa ambayo mtu mzima unayemwamini ameidhinisha.

Safu ya tutakusanya ikiwa ndefu kuliko hatutakusanya, huenda bado unakusanya viongezeo. Kata hadi msaidizi bado anafanya kazi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- If the helper works without a fact, do not collect that fact.
- Names, faces, phones and ID numbers are first on the will-not list.
- Next: present the whole plan to a trusted adult and change it from their questions.`,
        `- Msaidizi akifanya kazi bila ukweli fulani, usikusanye ukweli huo.
- Majina, nyuso, simu na namba za kitambulisho ni vya kwanza kwenye orodha ya hatutakusanya.
- Ifuatayo: wasilisha mpango mzima kwa mtu mzima unayemwamini na ubadilishe kutokana na maswali yake.`
      ),
    ],
  },
  {
    id: "cap-b-u8",
    titleEn: "Present to a trusted adult",
    titleSw: "Wasilisha kwa mtu mzima unayemwamini",
    cards: [
      note(
        "A three-minute talk is the test",
        "Mazungumzo ya dakika tatu ndiyo mtihani",
        `A trusted adult is not only there to clap. They are there to spot a danger you missed and to say whether the helper is kind enough to try.

Prepare four spoken lines, each about 20 seconds:

1. The problem and one number.
2. Who is affected, including who has no phone.
3. The helper.
4. The rule, the will-not list, and who must still agree.

Then stop talking. Ask: "What would you change?" Write their answer even if you dislike it.

If they say no to a public trial, that is a successful presentation. You learned a boundary. If they say yes, write what they agreed to, and what they did not agree to.

Do not present only to a friend who will praise you. Present to someone who can actually say no: a parent, a teacher, a committee member.`,
        `Mtu mzima unayemwamini hayupo tu kupiga makofi. Yupo kuona hatari uliyoikosa na kusema kama msaidizi ni mwema kiasi cha kujaribiwa.

Andaa mistari minne ya kusema, kila moja kama sekunde 20:

1. Tatizo na namba moja.
2. Nani anaathiriwa, wakiwemo wasio na simu.
3. Msaidizi.
4. Kanuni, orodha ya hatutakusanya, na nani bado lazima akubali.

Kisha acha kuongea. Uliza: "Ungebadilisha nini?" Andika jibu lake hata kama hulipendi.

Akisema hapana kwa jaribio la umma, huo ni uwasilishaji uliofanikiwa. Umejifunza mpaka. Akisema ndiyo, andika kile alichokubali, na kile asichokubali.

Usiwasilishe tu kwa rafiki atakayekupongeza. Wasilisha kwa mtu anayeweza kusema hapana: mzazi, mwalimu, mjumbe wa kamati.`
      ),
      reveal([
        {
          termEn: "Presentation",
          termSw: "Wasilisho",
          defEn: "A short spoken explanation of the problem, helper, rule and permissions, followed by listening.",
          defSw: "Maelezo mafupi yanayosemwa ya tatizo, msaidizi, kanuni na ruhusa, yakifuatwa na kusikiliza.",
        },
        {
          termEn: "Feedback",
          termSw: "Maoni",
          defEn: "A change or warning from the adult, which you write down even when it is uncomfortable.",
          defSw: "Mabadiliko au onyo kutoka kwa mtu mzima, unayoandika hata yakiwa hayapendezi.",
        },
        {
          termEn: "Boundary",
          termSw: "Mpaka",
          defEn: "A clear no, such as 'no photos' or 'not at the tap during the morning rush'.",
          defSw: "Hapana wazi, kama 'hakuna picha' au 'si kwenye bomba wakati wa msongamano wa asubuhi'.",
        },
      ]),
      note(
        "Worked example: the adult who spots the face problem",
        "Mfano: mtu mzima anayeona tatizo la uso",
        `Amina practises her four lines with her mother, then presents to the water committee chair.

She says the after-school wait was 45 to 50 minutes with 12 to 15 jerrycans. She names mothers, school children and older neighbours. She shows the board helper. She reads the rule and the will-not list.

The chair agrees to a paper board on one Saturday, then asks: "Your drawing shows people in the line. If this hangs at school, take the people out of the drawing."

Amina had not seen that. A drawing of faces can still point to neighbours. She erases the people and draws jerrycans only.

That change is the value of the presentation. The helper stayed. The rule got stronger. The adult was not an enemy of the project. The adult was part of the project.`,
        `Amina anafanya mazoezi ya mistari yake minne na mama yake, kisha anawasilisha kwa mwenyekiti wa kamati ya maji.

Anasema kusubiri baada ya shule kulikuwa dakika 45 hadi 50 na daba 12 hadi 15. Anataja akina mama, watoto wa shule na majirani wazee. Anaonyesha msaidizi wa ubao. Anasoma kanuni na orodha ya hatutakusanya.

Mwenyekiti anakubali ubao wa karatasi Jumamosi moja, kisha anauliza: "Mchoro wako unaonyesha watu kwenye foleni. Bango hili likitungwa shuleni, ondoa watu kwenye mchoro."

Amina hakuwa ameona hilo. Mchoro wa nyuso bado unaweza kuelekeza kwa majirani. Anafuta watu na kuchora daba tu.

Mabadiliko hayo ndiyo faida ya wasilisho. Msaidizi alibaki. Kanuni ilikuwa imara zaidi. Mtu mzima hakuwa adui wa mradi. Mtu mzima alikuwa sehemu ya mradi.`
      ),
      scenario({
        titleEn: "Practice: skip the adult",
        titleSw: "Mazoezi: ruka mtu mzima",
        situationEn:
          "A learner in Eldoret wants to put a 'quiet hours' note on a shop wall about the waste skip. He says, 'If I ask the shopkeeper she will say no, so I will stick it up after closing.'",
        situationSw:
          "Mwanafunzi huko Eldoret anataka kuweka ujumbe wa 'saa za shwari' ukutani wa duka kuhusu skip la taka. Anasema, 'Nikiuliza mmiliki wa duka atasema hapana, kwa hiyo nitaambatisha baada ya kufunga.'",
        questionEn: "What should he do?",
        questionSw: "Anapaswa kufanya nini?",
        optionsEn: [
          "Stick it up after closing, because the idea is good",
          "Ask first, accept a no, and if needed change the helper so it does not need that wall",
          "Ask a friend to stick it up so he is not blamed",
          "Print many copies so that removing one does not matter",
        ],
        optionsSw: [
          "Ambatanisha baada ya kufunga, kwa sababu wazo ni zuri",
          "Uliza kwanza, kubali hapana, na ikihitajika badilisha msaidizi ili usihitaji ukuta huo",
          "Mwombe rafiki aambatishe ili yeye asilaumiwe",
          "Chapisha nakala nyingi ili kuondoa moja visije vikaathiri",
        ],
        correctIndex: 1,
        hintsEn: [
          "A good idea done in secret is still a harm to trust.",
          "Right. Permission is part of the project. A no can send you to a smaller helper.",
          "Using a friend hides the same wrong.",
          "More copies multiply the disrespect.",
        ],
        hintsSw: [
          "Wazo zuri linalofanywa kwa siri bado ni madhara kwa uaminifu.",
          "Sawa. Ruhusa ni sehemu ya mradi. Hapana inaweza kukuelekeza kwa msaidizi mdogo.",
          "Kumtumia rafiki kunaficha kosa lilelile.",
          "Nakala nyingi zinaongeza kutoheshimu.",
        ],
        explainEn: "Presenting includes the risk of a no. Secret posting is not community work.",
        explainSw: "Wasilisho linajumuisha hatari ya hapana. Kubandika kwa siri si kazi ya jamii.",
      }),
      quiz(
        "After a trusted adult gives feedback, you should:",
        "Baada ya mtu mzima unayemwamini kutoa maoni, unapaswa:",
        [
          "Ignore it if your poster already looks finished",
          "Write it down and change the helper, the rule, or the permission line if needed",
          "Argue until they agree you were right",
          "Delete the project in anger",
        ],
        [
          "Yapuuze kama bango lako tayari linaonekana limekamilika",
          "Yaandike na ubadilishe msaidizi, kanuni, au mstari wa ruhusa ikihitajika",
          "Bishana hadi wakubali ulikuwa sahihi",
          "Futa mradi kwa hasira",
        ],
        1,
        "Feedback is data about harm you missed. Write it. Change the plan. Do not treat a finished look as more important than safety.",
        "Maoni ni data kuhusu madhara uliyokosa. Andika. Badilisha mpango. Usichukulie muonekano uliokamilika kuwa muhimu kuliko usalama."
      ),
      note(
        "Try it: give the three-minute talk",
        "Jaribu: toa mazungumzo ya dakika tatu",
        `Stand up and say the four lines to a trusted adult. Time yourself. Then ask what they would change.

Write three notes:

- What they repeated correctly.
- What they asked you to change.
- Whether you may try a paper version in public, or only on the kitchen table.

If you are a teen finishing this stretch of the course, this talk plus your poster is your project. Keep both.`,
        `Simama na useme mistari minne kwa mtu mzima unayemwamini. Pima muda. Kisha uliza wangebadilisha nini.

Andika maelezo matatu:

- Walichorudia kwa usahihi.
- Walichokuomba ubadilishe.
- Kama unaweza kujaribu toleo la karatasi hadharani, au mezani jikoni tu.

Ukiwa kijana unayemaliza sehemu hii ya kozi, mazungumzo haya pamoja na bango lako ndio mradi wako. Hifadhi yote mawili.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Four lines, then listen. A no is useful.
- Change the poster when the adult names a harm.
- Next (adults and older teens): try a paper prototype before any software.`,
        `- Mistari minne, kisha sikiliza. Hapana ni yenye manufaa.
- Badilisha bango mtu mzima anapotaja madhara.
- Ifuatayo (watu wazima na vijana wakubwa): jaribu mfano wa karatasi kabla ya programu yoyote.`
      ),
    ],
  },
  {
    id: "cap-b-u9",
    titleEn: "Try a paper prototype",
    titleSw: "Jaribu mfano wa karatasi",
    cards: [
      note(
        "Paper first, software later if at all",
        "Karatasi kwanza, programu baadaye kama itahitajika",
        `A paper prototype is a fake version of the helper made of card, marker and tape. You use it with real people for a few minutes to see whether the idea is understandable.

Why paper:

- It costs almost nothing.
- You can change it in one minute when someone is confused.
- It does not collect personal data by accident inside an app.
- It shows whether people without phones can still use the helper.

For the tap, the prototype is a cardboard board with last week's counts and the rule written at the bottom. For a chatbot idea, the prototype is a person holding a paper "screen" and answering only from a written script of real counts. If the script has no answer, they must say "I do not know" instead of inventing.

If the paper version already causes confusion or arguments, a phone version will not magically be kinder.`,
        `Mfano wa karatasi ni toleo bandia la msaidizi lililotengenezwa kwa kadibodi, kalamu na tepe. Unalitumiwa na watu halisi kwa dakika chache ili kuona kama wazo linaeleweka.

Kwa nini karatasi:

- Inagharimu karibu chochote.
- Unaweza kuibadilisha kwa dakika moja mtu anapochanganyikiwa.
- Haikusanyi data ya mtu kwa bahati mbaya ndani ya programu.
- Inaonyesha kama watu wasio na simu bado wanaweza kutumia msaidizi.

Kwa bomba, mfano ni ubao wa kadibodi wenye hesabu za wiki iliyopita na kanuni iliyoandikwa chini. Kwa wazo la chatbot, mfano ni mtu anayeshikilia "skrini" ya karatasi na kujibu tu kutoka maandishi ya hesabu halisi. Maandishi yakiwa hayana jibu, lazima waseme "Sijui" badala ya kubuni.

Toleo la karatasi likisha sababisha mkanganyiko au mabishano, toleo la simu halitakuwa la fadhili kimuujiza.`
      ),
      reveal([
        {
          termEn: "Paper prototype",
          termSw: "Mfano wa karatasi",
          defEn: "A handmade stand-in for the helper, used to test understanding before any software.",
          defSw: "Mbadala uliotengenezwa kwa mkono wa msaidizi, unaotumika kujaribu uelewa kabla ya programu yoyote.",
        },
        {
          termEn: "Script",
          termSw: "Maandishi",
          defEn: "The only answers a pretend chatbot may give, copied from real counts.",
          defSw: "Majibu pekee ambayo chatbot ya kufanya inaweza kutoa, yaliyonakiliwa kutoka hesabu halisi.",
        },
        {
          termEn: "Fallback",
          termSw: "Mbadala",
          defEn: "What you say when you do not know, such as 'look at the line' or 'ask the committee'.",
          defSw: "Unachosema usipojua, kama 'angalia foleni' au 'uliza kamati'.",
        },
      ]),
      note(
        "Worked example: cardboard Saturday",
        "Mfano: Jumamosi ya kadibodi",
        `With the chair's yes, Amina and Brian tape a cardboard board to a stool beside the tap for one hour on Saturday. The board shows last week's three counts and the rule: "Not a promise. Look at the line today. No names."

They stand to the side. They do not ask for names. They watch.

Three people read the board and nod. One person asks, "Does this mean I must come at 5 pm?" Brian points to the rule. One person ignores the board and asks them personally, which is fine. One older neighbour cannot read the small writing. Amina writes the same words larger.

The prototype taught them a real change: the letters were too small. It also taught them that some people will hear a board as an order. The rule must be the largest line, not the smallest.

They still have no app. They already have a better helper.`,
        `Kwa ndiyo ya mwenyekiti, Amina na Brian wanabandika ubao wa kadibodi kwenye kiti kando ya bomba kwa saa moja Jumamosi. Ubao unaonyesha hesabu tatu za wiki iliyopita na kanuni: "Si ahadi. Angalia foleni leo. Hakuna majina."

Wanasimama kando. Hawaombi majina. Wanaangalia.

Watu watatu wanasoma ubao na kusinzia kichwa. Mtu mmoja anauliza, "Hii inamaanisha lazima nije saa 11 jioni?" Brian anaonyesha kanuni. Mtu mmoja anapuuza ubao na kuwauliza binafsi, ambayo ni sawa. Jirani mzee mmoja hawezi kusoma maandishi madogo. Amina anaandika maneno yale yale makubwa zaidi.

Mfano uliwafundisha mabadiliko halisi: herufi zilikuwa ndogo mno. Pia uliwafundisha kwamba watu wengine watasikia ubao kama amri. Kanuni lazima iwe mstari mkubwa zaidi, si mdogo zaidi.

Bado hawana programu. Tayari wana msaidizi bora.`
      ),
      scenario({
        titleEn: "Practice: build the app this weekend",
        titleSw: "Mazoezi: jenga programu wikendi hii",
        situationEn:
          "A student with a laptop wants to skip paper and launch a market-price chatbot for ten traders by Monday, using whatever numbers the model invents if traders have not shared notes.",
        situationSw:
          "Mwanafunzi mwenye kompyuta ndogo anataka kuruka karatasi na kuzindua chatbot ya bei za soko kwa wafanyabiashara kumi kufikia Jumatatu, akitumia namba zozote modeli itakazobuni wafanyabiashara wasiposhiriki maelezo.",
        questionEn: "What should happen first?",
        questionSw: "Nini kifanyike kwanza?",
        optionsEn: [
          "Launch on Monday so the project looks advanced",
          "Paper-test with a script of real prices, and refuse invented numbers",
          "Invent prices so the chatbot always has an answer",
          "Skip traders and scrape a website instead",
        ],
        optionsSw: [
          "Zindua Jumatatu ili mradi uonekane wa hali ya juu",
          "Jaribu kwa karatasi na maandishi ya bei halisi, na ukatae namba zilizobuniwa",
          "Buni bei ili chatbot iwe na jibu kila mara",
          "Ruka wafanyabiashara na kunakili tovuti badala yake",
        ],
        correctIndex: 1,
        hintsEn: [
          "Looking advanced is not the same as being useful or safe.",
          "Right. Paper plus real numbers shows whether the helper helps. Invented prices are a wrong-guess harm.",
          "Invented prices can send a trader to buy or sell at the wrong moment.",
          "Copying a website can be both a wrong source and a rights problem.",
        ],
        hintsSw: [
          "Kuonekana wa hali ya juu si sawa na kuwa na manufaa au salama.",
          "Sawa. Karatasi pamoja na namba halisi vinaonyesha kama msaidizi anasaidia. Bei zilizobuniwa ni madhara ya makisio mabaya.",
          "Bei zilizobuniwa zinaweza kumtuma mfanyabiashara kununua au kuuza wakati usiofaa.",
          "Kununua tovuti kunaweza kuwa chanzo kibaya na tatizo la haki.",
        ],
        explainEn: "A paper script that says 'I do not know' is more honest than software that invents a price.",
        explainSw: "Maandishi ya karatasi yasemayo 'Sijui' ni ya uaminifu zaidi kuliko programu inayobuni bei.",
      }),
      quiz(
        "The main reason to paper-prototype a community helper is:",
        "Sababu kuu ya kujaribu msaidizi wa jamii kwa karatasi ni:",
        [
          "Paper looks more traditional on a wall",
          "You learn whether people understand it, without collecting extra data inside an app",
          "Paper cannot show a rule",
          "Teachers only mark paper",
        ],
        [
          "Karatasi inaonekana ya jadi zaidi ukutani",
          "Unajifunza kama watu wanaelewa, bila kukusanya data ya ziada ndani ya programu",
          "Karatasi haiwezi kuonyesha kanuni",
          "Walimu huweka alama kwenye karatasi tu",
        ],
        1,
        "Understanding and safety come before software. Paper is a test, not a decoration.",
        "Uelewa na usalama vinakuja kabla ya programu. Karatasi ni jaribio, si mapambo."
      ),
      note(
        "Try it: build the fake helper",
        "Jaribu: tengeneza msaidizi bandia",
        `Make the paper version today:

- If your helper is a board, write the counts and the rule large.
- If your helper is a chatbot, write a one-page script of real facts and the line "I do not know — look with your eyes."
- If your helper is about waste or school connection, make a card people can point to: blocked / not blocked, loaded / did not load.

Do not add name fields. Show it to one trusted adult before any public hour.`,
        `Tengeneza toleo la karatasi leo:

- Msaidizi wako akiwa ubao, andika hesabu na kanuni kwa herufi kubwa.
- Msaidizi wako akiwa chatbot, andika ukurasa mmoja wa ukweli halisi na mstari "Sijui — angalia kwa macho yako."
- Msaidizi wako ukihusu taka au muunganisho wa shule, tengeneza kadi watu wanaweza kuonyesha: imeziba / haijaziba, imepakia / haikupakia.

Usiongeze sehemu za majina. Mwonyeshe mtu mzima mmoja unayemwamini kabla ya saa yoyote ya umma.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Paper shows confusion cheaply.
- Scripts must be allowed to say 'I do not know'.
- Next: try the prototype with a few people and write what broke, including people who walked past.`,
        `- Karatasi inaonyesha mkanganyiko kwa gharama ndogo.
- Maandishi lazima yaruhusiwe kusema 'Sijui'.
- Ifuatayo: jaribu mfano na watu wachache na uandike kilichovunjika, wakiwemo waliopita tu.`
      ),
    ],
  },
  {
    id: "cap-b-u10",
    titleEn: "What the trial taught you",
    titleSw: "Kile jaribio lilichokufundisha",
    cards: [
      note(
        "Write the people who walked past",
        "Andika watu waliopita tu",
        `A trial is a short, agreed try in real life. For this course, five people is enough. You are not proving that the helper "works for Kenya". You are learning whether this helper, in this place, is understandable and kind.

Write four kinds of notes:

- People who used it and said it helped.
- People who used it and were confused or annoyed.
- People who saw it and walked past.
- Anything that broke: rain on cardboard, letters too small, a guess treated as an order.

The people who walked past matter. If you only quote the two friends who liked it, you are telling a half-story. Adults who fund or approve projects hear half-stories every week. Your job is to be the person who also writes the quiet no.

If two of five people were confused, change the paper before you talk about phones.`,
        `Jaribio ni kujaribu kwa muda mfupi, kwa makubaliano, katika maisha halisi. Kwa kozi hii, watu watano wanatosha. Huthibitishi kwamba msaidizi "anafanya kazi Kenya nzima". Unajifunza kama msaidizi huyu, mahali hapa, unaeleweka na ni mwema.

Andika aina nne za maelezo:

- Watu walioutumia na kusema ulisaidia.
- Watu walioutumia na kuchanganyikiwa au kukereka.
- Watu walioona na kupita tu.
- Cho chote kilichovunjika: mvua kwenye kadibodi, herufi ndogo, makisio yaliyochukuliwa kama amri.

Watu waliopita tu wana maana. Ukinukuu tu marafiki wawili walioipenda, unasimulia nusu ya hadithi. Watu wazima wanaofadhili au kuidhinisha miradi husikia nusu za hadithi kila wiki. Kazi yako ni kuwa mtu anayeandika pia hapana tulivu.

Watu wawili kati ya watano wakichanganyikiwa, badilisha karatasi kabla ya kuongea kuhusu simu.`
      ),
      reveal([
        {
          termEn: "Trial",
          termSw: "Jaribio",
          defEn: "A short, agreed test with real people, with notes written the same day.",
          defSw: "Mtihani mfupi uliokubaliwa na watu halisi, na maelezo yaliyoandikwa siku ileile.",
        },
        {
          termEn: "Dropout",
          termSw: "Aliyeacha / aliyepita",
          defEn: "Someone who saw the helper and did not use it, or started and then stopped.",
          defSw: "Mtu aliyemwona msaidizi na hakumtumia, au alianza kisha akaacha.",
        },
        {
          termEn: "Honest note",
          termSw: "Maelezo ya kweli",
          defEn: "A sentence that includes confusion and walk-pasts, not only praise.",
          defSw: "Sentensi inayojumuisha mkanganyiko na waliopita, si sifa tu.",
        },
      ]),
      note(
        "Worked example: five neighbours, two walk-pasts",
        "Mfano: majirani watano, wawili walipita",
        `In the Saturday hour, five people come close enough to count as a trial.

- Two read the board and say they already knew later afternoon was quieter, but they like seeing a number.
- One asks if the board is an order from the county. They are annoyed until the rule is pointed out.
- Two look, do not stop, and fill their cans as usual.

Brian's first draft says, "Everyone loved it (2/2)." That is a half-story. The honest note is: "2 said it was useful, 1 was annoyed until the rule was large, 2 walked past. Letters were too small for one older neighbour. Rain would have ruined the card."

They change three things: larger rule, a line "this is not a county order", and a plan to take the board down if it rains.

Nothing was a failure. The trial did its job.`,
        `Katika saa ya Jumamosi, watu watano wanakaribia kiasi cha kuhesabiwa kama jaribio.

- Wawili wanasoma ubao na kusema tayari walijua alasiri ya baadaye huwa shwari, lakini wanapenda kuona namba.
- Mmoja anauliza kama ubao ni amri kutoka kaunti. Anakereka hadi kanuni inapoonyeshwa.
- Wawili wanaangalia, hawasimami, na wanajaza daba zao kama kawaida.

Rasimu ya kwanza ya Brian inasema, "Kila mtu aliipenda (2/2)." Hiyo ni nusu ya hadithi. Maelezo ya kweli ni: "2 walisema ilikuwa na manufaa, 1 alikereka hadi kanuni ilipokuwa kubwa, 2 walipita. Herufi zilikuwa ndogo kwa jirani mzee mmoja. Mvua ingeharibu kadi."

Wanabadilisha mambo matatu: kanuni kubwa, mstari "hii si amri ya kaunti", na mpango wa kuondoa ubao ikinyesha.

Hakuna kilichokuwa kushindwa. Jaribio lilifanya kazi yake.`
      ),
      scenario({
        titleEn: "Practice: only report the fans",
        titleSw: "Mazoezi: ripoti mashabiki tu",
        situationEn:
          "After a paper trial at a market stall, 3 of 8 traders liked the price board. 2 were confused. 3 refused to look. The group chat says, 'Post that 100% of testers loved it.'",
        situationSw:
          "Baada ya jaribio la karatasi kwenye duka la soko, wafanyabiashara 3 kati ya 8 walipenda ubao wa bei. 2 walichanganyikiwa. 3 walikataa kuangalia. Gumzo la kundi linasema, 'Chapisha kwamba 100% ya waliojaribu waliipenda.'",
        questionEn: "What should they write instead?",
        questionSw: "Wanapaswa kuandika nini badala yake?",
        optionsEn: [
          "100% loved it, because the three who liked it are the real users",
          "3 of 8 liked it, 2 were confused, 3 did not take part; here is what we will change",
          "Delete the 5 who did not like it from the notes",
          "Wait until they find 8 people who all like it, then report",
        ],
        optionsSw: [
          "100% waliipenda, kwa sababu watatu walioipenda ndio watumiaji halisi",
          "3 kati ya 8 waliipenda, 2 walichanganyikiwa, 3 hawakushiriki; haya ndiyo tutakayobadilisha",
          "Futa 5 wasiopenda kutoka kwenye maelezo",
          "Subiri hadi wapate watu 8 wote wanaopenda, kisha ripoti",
        ],
        correctIndex: 1,
        hintsEn: [
          "Calling only fans 'real users' hides the people you failed.",
          "Right. Honest counts include confusion and refusals.",
          "Deleting notes is a kind of lie.",
          "Shopping for praise is not a trial.",
        ],
        hintsSw: [
          "Kuita mashabiki tu 'watumiaji halisi' kunawaficha watu ulioshindwa.",
          "Sawa. Hesabu za kweli zinajumuisha mkanganyiko na kukataa.",
          "Kufuta maelezo ni aina ya uongo.",
          "Kutafuta sifa si jaribio.",
        ],
        explainEn: "A trial that hides dropouts cannot guide the next change, and it trains you to overclaim.",
        explainSw: "Jaribio linaloficha walioacha haliwezi kuongoza mabadiliko yafuatayo, na linakufundisha kudai mno.",
      }),
      quiz(
        "You tried the helper with five people. Two walked past. Your notes should:",
        "Ulijaribu msaidizi na watu watano. Wawili walipita. Maelezo yako yanapaswa:",
        [
          "Leave the two out, so the score looks better",
          "Count them, and ask what would make the helper usable for people like them",
          "Call the trial a failure and stop thinking",
          "Replace them with two friends who already agree with you",
        ],
        [
          "Waache nje, ili alama ionekane bora",
          "Wawahesabu, na uulize nini kingefanya msaidizi atumike kwa watu kama wao",
          "Uiite jaribio kushindwa na uache kufikiri",
          "Wabadilishe na marafiki wawili ambao tayari wanakubaliana nawe",
        ],
        1,
        "Walk-pasts are part of the result. They often tell you about language, print size, trust or timing.",
        "Waliopita ni sehemu ya matokeo. Mara nyingi wanakwambia kuhusu lugha, ukubwa wa herufi, uaminifu au muda."
      ),
      note(
        "Try it: a one-hour note",
        "Jaribu: maelezo ya saa moja",
        `If you have permission, try the paper helper for a short public hour. If you do not, try it at home with five people who will not only praise you.

Fill:

- Helped:
- Confused:
- Walked past or refused:
- One change we will make:

Keep this page. It feeds the one-page action plan.`,
        `Ukiwa na ruhusa, jaribu msaidizi wa karatasi kwa saa fupi ya umma. Ukiwa huna, jaribu nyumbani na watu watano ambao hawatakupongeza tu.

Jaza:

- Waliosaidiwa:
- Waliochanganyikiwa:
- Walipita au walikataa:
- Mabadiliko moja tutakayofanya:

Hifadhi ukurasa huu. Unalisha mpango wa ukurasa mmoja.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Count users, confused people and walk-pasts.
- Change the paper before you talk about scale.
- Next: turn the whole project into one page an adult can act on.`,
        `- Hesabu watumiaji, waliochanganyikiwa na waliopita.
- Badilisha karatasi kabla ya kuongea kuhusu kueneza.
- Ifuatayo: geuza mradi mzima kuwa ukurasa mmoja ambao mtu mzima anaweza kutendea.`
      ),
    ],
  },
  {
    id: "cap-b-u11",
    titleEn: "Your one-page action plan",
    titleSw: "Mpango wako wa ukurasa mmoja",
    cards: [
      note(
        "One page adults can use",
        "Ukurasa mmoja watu wazima wanaoweza kutumia",
        `An action plan is not an essay. It is one page that tells a busy adult what the problem is, what you will try, what you will not collect, who must agree, and what happens in the next 30 days.

Use seven headings, each with two to four lines:

1. Problem and one number.
2. Who is affected.
3. Helper.
4. Rule (the danger you are blocking).
5. Will not collect.
6. Who agrees, and who can still say no.
7. Next 30 days: owner, dates, and how you will know it helped — including people who drop out.

If the page needs a second sheet, you are still writing a slogan or you are still trying to solve three problems. Cut until it fits.

County stakeholders belong in heading 6 when the place is a public service: water office, environment officer, education officer, market administrator. Write the role, not a private mobile number.`,
        `Mpango wa hatua si insha. Ni ukurasa mmoja unaomwambia mtu mzima mwenye shughuli tatizo ni nini, utakachojaribu, usichokusanya, nani lazima akubali, na nini kinatokea katika siku 30 zijazo.

Tumia vichwa saba, kila kimoja chenye mistari miwili hadi minne:

1. Tatizo na namba moja.
2. Nani anaathiriwa.
3. Msaidizi.
4. Kanuni (hatari unayozuia).
5. Hatutakusanya.
6. Nani anakubali, na nani bado anaweza kusema hapana.
7. Siku 30 zijazo: mmiliki, tarehe, na jinsi utakavyojua kilisaidia — wakiwemo wanaoacha.

Ukurasa ukihitaji karatasi ya pili, bado unaandika kauli au bado unajaribu kutatua matatizo matatu. Kata hadi ufae.

Wadau wa kaunti wanafaa kwenye kichwa cha 6 mahali palipo huduma ya umma: ofisi ya maji, afisa wa mazingira, afisa wa elimu, msimamizi wa soko. Andika jukumu, si namba ya simu ya faragha.`
      ),
      reveal([
        {
          termEn: "Action plan",
          termSw: "Mpango wa hatua",
          defEn: "One page that turns the poster and the trial into dates, owners and a fair test.",
          defSw: "Ukurasa mmoja unaogeuza bango na jaribio kuwa tarehe, wamiliki na mtihani wa haki.",
        },
        {
          termEn: "Owner",
          termSw: "Mmiliki",
          defEn: "The person who will do the next task, named by role, with a date.",
          defSw: "Mtu atakayefanya kazi inayofuata, aliyetajwa kwa jukumu, na tarehe.",
        },
        {
          termEn: "Success check",
          termSw: "Ukaguzi wa mafanikio",
          defEn: "The number you will look at after 30 days, including people who did not use the helper.",
          defSw: "Namba utakayoangalia baada ya siku 30, wakiwemo watu wasiotumia msaidizi.",
        },
      ]),
      note(
        "Worked example: Amina's one page",
        "Mfano: ukurasa mmoja wa Amina",
        `Problem: community tap, Kisumu. After school, 12 to 15 jerrycans, 45 to 50 minutes wait. Later afternoon, 4 jerrycans, 10 minutes.

Who: mothers, school children, older neighbours. Phone-only tools would skip the older neighbour.

Helper: a board of last week's anonymous counts.

Rule: not a promise; look at today's line; no faces; no names.

Will not collect: names, faces, phones, plots.

Who agrees: mother; water committee chair (Saturday paper board only); class teacher (poster without people in the drawing). County water office to be told if the board stays more than four Saturdays.

Next 30 days: Brian paints larger letters this week. Amina and her mother put the board up on two more Saturdays if the chair still agrees. Success check: whether 5 people can repeat the rule, and whether walk-pasts fall, not only whether friends like the paint.

That page can travel to a baraza without a slide deck.`,
        `Tatizo: bomba la jamii, Kisumu. Baada ya shule, daba 12 hadi 15, kusubiri dakika 45 hadi 50. Alasiri ya baadaye, daba 4, dakika 10.

Nani: akina mama, watoto wa shule, majirani wazee. Zana za simu tu zingemruka jirani mzee.

Msaidizi: ubao wa hesabu za wiki iliyopita zisizo na majina.

Kanuni: si ahadi; angalia foleni ya leo; hakuna nyuso; hakuna majina.

Hatutakusanya: majina, nyuso, simu, viwanja.

Nani anakubali: mama; mwenyekiti wa kamati ya maji (ubao wa karatasi Jumamosi tu); mwalimu wa darasa (bango bila watu kwenye mchoro). Ofisi ya maji ya kaunti iambiewe ubao ukikaa zaidi ya Jumamosi nne.

Siku 30 zijazo: Brian anapakia herufi kubwa wiki hii. Amina na mama yake wataweka ubao Jumamosi mbili zaidi mwenyekiti akibaki amekubali. Ukaguzi wa mafanikio: kama watu 5 wanaweza kurudia kanuni, na kama waliopita wanapungua, si kama marafiki wanapenda rangi tu.

Ukurasa huo unaweza kwenda barazani bila slaidi.`
      ),
      scenario({
        titleEn: "Practice: the twelve-page plan",
        titleSw: "Mazoezi: mpango wa kurasa kumi na mbili",
        situationEn:
          "A college student writes twelve pages about 'transforming community water with AI' and no 30-day owner. The chief asks, 'What happens this month, and what will you not collect?'",
        situationSw:
          "Mwanafunzi wa chuo anaandika kurasa kumi na mbili kuhusu 'kubadilisha maji ya jamii kwa AI' bila mmiliki wa siku 30. Chifu anauliza, 'Nini kinatokea mwezi huu, na hutakusanya nini?'",
        questionEn: "What should the student hand over instead?",
        questionSw: "Mwanafunzi anapaswa kutoa nini badala yake?",
        optionsEn: [
          "The twelve pages, because length shows seriousness",
          "One page with problem number, helper, rule, will-not list, consents and a 30-day owner",
          "A slogan and a drawing of a satellite",
          "Nothing, because chiefs are not stakeholders",
        ],
        optionsSw: [
          "Kurasa kumi na mbili, kwa sababu urefu unaonyesha uzito",
          "Ukurasa mmoja wenye namba ya tatizo, msaidizi, kanuni, orodha ya hatutakusanya, idhini na mmiliki wa siku 30",
          "Kauli na mchoro wa satelaiti",
          "Hakuna, kwa sababu machifu si wadau",
        ],
        correctIndex: 1,
        hintsEn: [
          "Length without an owner is not seriousness.",
          "Right. Busy adults need one page they can check.",
          "Slogans skip the rule and the will-not list.",
          "Local leaders are stakeholders for public places.",
        ],
        hintsSw: [
          "Urefu bila mmiliki si uzito.",
          "Sawa. Watu wazima wenye shughuli wanahitaji ukurasa mmoja wanaoweza kukagua.",
          "Kauli zinaruka kanuni na orodha ya hatutakusanya.",
          "Viongozi wa eneo ni wadau kwa mahali pa umma.",
        ],
        explainEn: "If a chief cannot see the next 30 days and the will-not list, the plan is not ready.",
        explainSw: "Chifu asipoweza kuona siku 30 zijazo na orodha ya hatutakusanya, mpango hauko tayari.",
      }),
      quiz(
        "Heading 7 of the action plan must include:",
        "Kichwa cha 7 cha mpango wa hatua lazima kiwe na:",
        [
          "A promise that everyone will love the helper",
          "An owner, dates, and a success check that includes people who drop out",
          "Every neighbour's ID number",
          "A list of foreign software brands",
        ],
        [
          "Ahadi kwamba kila mtu atapenda msaidizi",
          "Mmiliki, tarehe, na ukaguzi wa mafanikio unaojumuisha wanaoacha",
          "Namba ya kitambulisho ya kila jirani",
          "Orodha ya chapa za programu za kigeni",
        ],
        1,
        "Dates and an owner turn a poster into work. Dropouts keep the check honest.",
        "Tarehe na mmiliki hugeuza bango kuwa kazi. Wanaoacha wanaweka ukaguzi kuwa wa kweli."
      ),
      note(
        "Try it: write the page",
        "Jaribu: andika ukurasa",
        `Copy the seven headings onto one leaf of paper. Fill them from your poster, your will-not list, your adult feedback and your trial notes.

Read it aloud in under three minutes. If you cannot, cut words, not headings.

This page is the adult finish line of the beginner project.`,
        `Nakili vichwa saba kwenye ukurasa mmoja. Vijaze kutoka bango lako, orodha ya hatutakusanya, maoni ya mtu mzima na maelezo ya jaribio.

Lisome kwa sauti chini ya dakika tatu. Ukiwa huwezi, kata maneno, si vichwa.

Ukurasa huu ndio mwisho wa mtu mzima wa mradi wa mwanzoni.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Seven headings. One page. One owner for the next 30 days.
- Include county roles when the place is a public service.
- Next: a checkpoint that tests whether helper and rule still travel together.`,
        `- Vichwa saba. Ukurasa mmoja. Mmiliki mmoja kwa siku 30 zijazo.
- Jumlisha majukumu ya kaunti mahali palipo huduma ya umma.
- Ifuatayo: kituo kinachopima kama msaidizi na kanuni bado unasafiri pamoja.`
      ),
    ],
  },
  {
    id: "cap-b-u12",
    titleEn: "Checkpoint: helper plus rule",
    titleSw: "Kituo: msaidizi na kanuni",
    cards: [
      note(
        "The project is only complete when both travel together",
        "Mradi unakamilika tu vyote viwili vinaposafiri pamoja",
        `Look back across the whole beginner path.

You noticed a problem you could count. You named who is affected, including people without phones. You chose one helper, not a magic machine. You named one danger — privacy or a wrong guess — and you wrote one rule. Younger learners stopped at a poster with those parts and a permission line. Older learners asked who must agree, wrote a will-not list under the Data Protection Act, 2019, presented to a trusted adult, tried paper, wrote dropouts, and put the rest on one page.

The checkpoint is simple. If someone copies only your helper and drops your rule, they should feel that they stole half a project. If they copy only your rule and have no helper, they have a warning with nothing to try.

You are not required to build software. You are required to leave people safer than a confident guess would have left them.`,
        `Angalia nyuma njia yote ya mwanzoni.

Umeona tatizo uliloweza kuhesabu. Umetaja nani anaathiriwa, wakiwemo wasio na simu. Umechagua msaidizi mmoja, si mashine ya miujiza. Umetaja hatari moja — faragha au makisio mabaya — na umeandika kanuni moja. Wanafunzi wadogo walisimama kwenye bango lenye sehemu hizo na mstari wa ruhusa. Wanafunzi wakubwa waliuliza nani lazima akubali, wakaandika orodha ya hatutakusanya chini ya Sheria ya Ulinzi wa Data, 2019, wakawasilisha kwa mtu mzima unayemwamini, wakajaribu karatasi, wakaandika walioacha, na wakaweka vilivyobaki kwenye ukurasa mmoja.

Kituo ni rahisi. Mtu akinakili msaidizi wako tu na akaacha kanuni, apaswa kuhisi kuwa aliiba nusu ya mradi. Akinakili kanuni tu bila msaidizi, ana onyo lisilo na kitu cha kujaribu.

Hulazimishwi kujenga programu. Unalazimishwa kuwaacha watu salama kuliko makisio yenye uhakika yangewaacha.`
      ),
      reveal([
        {
          termEn: "Checkpoint",
          termSw: "Kituo",
          defEn: "A pause to test whether the helper and the rule are both strong enough to show other people.",
          defSw: "Pumziko la kupima kama msaidizi na kanuni vyote vina nguvu ya kutosha kuwaonyesha watu wengine.",
        },
        {
          termEn: "Half-project",
          termSw: "Nusu mradi",
          defEn: "A helper without a rule, or a rule without a helper.",
          defSw: "Msaidizi bila kanuni, au kanuni bila msaidizi.",
        },
        {
          termEn: "Safer leaving",
          termSw: "Kuondoka kwa usalama zaidi",
          defEn: "Neighbours are not more exposed, and not more misled, than before you started.",
          defSw: "Majirani hawajawekwa wazi zaidi, wala hawajapotezwa zaidi, kuliko kabla hujanza.",
        },
      ]),
      note(
        "Worked example: a checklist against Amina's page",
        "Mfano: orodha ya kukagua ukurasa wa Amina",
        `Amina's group reads their page against six checks:

- Can a child point to the problem number? Yes: 45 to 50 minutes after school.
- Can they name who would be missed by a phone-only tool? Yes: the older neighbour.
- Is there one helper? Yes: the board.
- Is there one rule that blocks a named danger? Yes: not a promise; no faces; no names.
- Did a real person agree, with a no still possible? Yes: the chair allowed Saturday paper only.
- Did the trial include walk-pasts? Yes: 2 of 5.

If any check had failed, they would not present at the baraza yet. The missing piece would go back onto the poster first.

That is what a checkpoint is for: not a celebration, a gate.`,
        `Kundi la Amina linasoma ukurasa wao dhidi ya ukaguzi sita:

- Mtoto anaweza kuonyesha namba ya tatizo? Ndiyo: dakika 45 hadi 50 baada ya shule.
- Wanaweza kutaja nani angekosa kwa zana ya simu tu? Ndiyo: jirani mzee.
- Kuna msaidizi mmoja? Ndiyo: ubao.
- Kuna kanuni moja inayozuia hatari iliyotajwa? Ndiyo: si ahadi; hakuna nyuso; hakuna majina.
- Mtu halisi alikubali, hapana bado ikiwezekana? Ndiyo: mwenyekiti aliruhusu karatasi ya Jumamosi tu.
- Jaribio lilijumuisha waliopita? Ndiyo: 2 kati ya 5.

Ukaguzi wowote ukishindwa, hawangeenda barazani bado. Kipande kilichokosekana kingerudi kwenye bango kwanza.

Ndiyo maana ya kituo: si sherehe, ni lango.`
      ),
      scenario({
        titleEn: "Practice: ten villages next week",
        titleSw: "Mazoezi: vijiji kumi wiki ijayo",
        situationEn:
          "After one Saturday of cardboard, a visitor says, 'This is so good we should put boards in ten villages next week, and add a chatbot that always answers.'",
        situationSw:
          "Baada ya Jumamosi moja ya kadibodi, mgeni anasema, 'Hii ni nzuri sana tunapaswa kuweka mbao katika vijiji kumi wiki ijayo, na tuongeze chatbot inayojibu kila mara.'",
        questionEn: "What is the responsible reply?",
        questionSw: "Jibu lenye uwajibikaji ni lipi?",
        optionsEn: [
          "Accept, because bigger is always kinder",
          "Keep the helper and the rule together, refuse invented always-answers, and grow only where people have agreed",
          "Add the chatbot first, rules later",
          "Photograph every queue in ten villages to prove the need",
        ],
        optionsSw: [
          "Kubali, kwa sababu kubwa huwa fadhili kila mara",
          "Weka msaidizi na kanuni pamoja, kataa majibu ya kubuni ya kila mara, na kua tu mahali watu walipokubali",
          "Ongeza chatbot kwanza, kanuni baadaye",
          "Piga picha kila foleni katika vijiji kumi ili kuthibitisha haja",
        ],
        correctIndex: 1,
        hintsEn: [
          "Bigger without agreement multiplies harm.",
          "Right. Scale is a later question. Helper and rule stay paired. Always-answers invent guesses.",
          "Rules later is how privacy and wrong guesses spread.",
          "Faces in ten villages are a privacy disaster, not proof.",
        ],
        hintsSw: [
          "Kubwa bila makubaliano kunazidisha madhara.",
          "Sawa. Kueneza ni swali la baadaye. Msaidizi na kanuni vinabaki pamoja. Majibu ya kila mara yanabuni makisio.",
          "Kanuni baadaye ndivyo faragha na makisio mabaya vinavyoenea.",
          "Nyuso katika vijiji kumi ni janga la faragha, si ushahidi.",
        ],
        explainEn: "A beginner capstone earns the right to stay small and honest. Growth without consent is not success.",
        explainSw: "Mradi wa mwanzoni unastahili kubaki mdogo na wa kweli. Ukuaji bila idhini si mafanikio.",
      }),
      quiz(
        "A beginner community project is complete when:",
        "Mradi wa jamii wa mwanzoni unakamilika wakati:",
        [
          "Software has been installed on many phones",
          "One helper and one rule can be shown, with agreement and without extra personal data",
          "Every neighbour has been named on a poster",
          "The helper is described as never wrong",
        ],
        [
          "Programu imewekwa kwenye simu nyingi",
          "Msaidizi mmoja na kanuni moja vinaweza kuonyeshwa, kwa makubaliano na bila data ya ziada ya mtu",
          "Kila jirani ametajwa kwenye bango",
          "Msaidizi anaelezwa kama asiyekosa kamwe",
        ],
        1,
        "Completion is honesty and care, not installation. Helper plus rule, with a yes that could have been a no.",
        "Ukamilifu ni uaminifu na uangalifu, si usakinishaji. Msaidizi pamoja na kanuni, na ndiyo ambayo ingeweza kuwa hapana."
      ),
      note(
        "Try it: six-check gate",
        "Jaribu: lango la ukaguzi sita",
        `Mark yes or not yet:

- Problem with a number.
- People affected, including who a phone would skip.
- One helper.
- One rule for a named danger.
- Agreement that can still be a no.
- Notes that include walk-pasts (if you ran a trial).

Any "not yet" goes back onto the poster or the one-page plan. Do not add a new village until the checks are yes.`,
        `Weka ndiyo au bado:

- Tatizo lenye namba.
- Watu wanaoathiriwa, wakiwemo ambao simu ingewaruka.
- Msaidizi mmoja.
- Kanuni moja kwa hatari iliyotajwa.
- Makubaliano ambayo bado yanaweza kuwa hapana.
- Maelezo yanayojumuisha waliopita (ikiwa ulifanya jaribio).

"Bado" yoyote inarudi kwenye bango au mpango wa ukurasa mmoja. Usiongeze kijiji kipya hadi ukaguzi uwe ndiyo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Helper and rule travel together.
- Younger learners: your poster is the project.
- Older learners: your talk, paper trial and one-page plan are the project.
- If you continue to the intermediate track, you will put numbers, consent paperwork and a ten-person pilot around the same heart.`,
        `- Msaidizi na kanuni vinasafiri pamoja.
- Wanafunzi wadogo: bango lako ndio mradi.
- Wanafunzi wakubwa: mazungumzo yako, jaribio la karatasi na mpango wa ukurasa mmoja ndio mradi.
- Ukiendelea kwenye ngazi ya kati, utaweka namba, karatasi za idhini na jaribio la watu kumi kuzunguka moyo uleule.`
      ),
    ],
  },
];
