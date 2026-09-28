import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/** Foundations — beginner: the AI-literate user. Units 1–5 are a complete safe mini-course. */
export const m0BeginnerUnits: CurriculumUnit[] = [
  {
    id: "m0-b-u1",
    titleEn: "What AI is, and what it is not",
    titleSw: "AI ni nini, na si nini",
    cards: [
      note(
        "Meet artificial intelligence",
        "Kutana na akili bandia",
        `Artificial intelligence, or AI, is computer software that does jobs we used to think needed a human mind. It can find a face in a photo. It can turn your voice into text. It can suggest the next word when you type an SMS.

AI is not a person. It does not feel, want or understand things the way you do. It is a tool, like a jembe or a calculator, but a very clever one. People build it. People choose what it learns from. People are responsible for how it is used.

There are two big ways to make software.

- Rule-following software: a person writes every step. "If the PIN is correct, open the account. If it is wrong, say no."
- Learning software: a person gives the computer many examples. The computer finds the pattern by itself and keeps it.

A pattern is something that repeats, so you can guess what comes next. Most of what people call AI today is learning software. A calculator only follows rules, so we do not usually call it AI.`,
        `Akili bandia (AI) ni programu za kompyuta zinazofanya kazi ambazo zamani tulidhani zinahitaji akili ya binadamu. Inaweza kutambua uso kwenye picha. Inaweza kugeuza sauti yako kuwa maandishi. Inaweza kupendekeza neno linalofuata unapoandika SMS.

AI si mtu. Haina hisia, haitamani kitu, na haielewi mambo jinsi wewe unavyoelewa. Ni chombo, kama jembe au kikokotoo, ila ni chombo chenye ujanja mwingi. Watu ndio huitengeneza. Watu ndio huchagua inachojifunza. Watu ndio huwajibika kwa jinsi inavyotumiwa.

Kuna njia mbili kuu za kutengeneza programu.

- Programu inayofuata sheria: mtu anaandika kila hatua. "PIN ikiwa sahihi, fungua akaunti. Ikiwa si sahihi, kataa."
- Programu inayojifunza: mtu anaipa kompyuta mifano mingi. Kompyuta inatafuta ruwaza (pattern) yenyewe na kuihifadhi.

Ruwaza ni kitu kinachojirudia, hivyo unaweza kukisia kitakachofuata. Sehemu kubwa ya kile watu huita AI leo ni programu inayojifunza. Kikokotoo hufuata sheria tu, kwa hiyo kwa kawaida hatukiiti AI.`,
        "/learn/content/m0/meet-ai.jpg"
      ),
      note(
        "How learning software learns",
        "Jinsi programu inayojifunza inavyojifunza",
        `Let us watch learning happen, step by step, with a phone keyboard.

Imagine you typed the word "Habari" 50 times this year. After it, you typed "yako" 40 times and "gani" 10 times.

- Step 1, examples: the keyboard keeps a note of each time you typed "Habari" and the word that came next.
- Step 2, pattern: it counts. "yako" came next 40 times out of 50. "gani" came next 10 times out of 50.
- Step 3, prediction: next time you type "Habari", it suggests "yako" first, because that happened most often.

Nobody wrote a rule that says "after Habari, suggest yako". The keyboard found it in your examples. That is the heart of machine learning: the computer finds patterns in examples and uses them to guess what comes next.

What the computer keeps after learning is called a model. The model is the stored pattern. Real keyboards use much bigger models than this, but the idea is the same.

Notice one more thing. If you start a new habit tomorrow, the keyboard will keep suggesting "yako" for a while. It only knows your past. That is why AI can be wrong.`,
        `Hebu tuone jinsi kujifunza kunavyotokea, hatua kwa hatua, kwa kutumia kibodi ya simu.

Fikiria umeandika neno "Habari" mara 50 mwaka huu. Baada yake, uliandika "yako" mara 40 na "gani" mara 10.

- Hatua ya 1, mifano: kibodi inakumbuka kila mara ulipoandika "Habari" na neno lililofuata.
- Hatua ya 2, ruwaza: inahesabu. "yako" lilifuata mara 40 kati ya 50. "gani" lilifuata mara 10 kati ya 50.
- Hatua ya 3, utabiri: wakati ujao ukiandika "Habari", inapendekeza "yako" kwanza, kwa sababu ndilo lililotokea mara nyingi zaidi.

Hakuna mtu aliyeandika sheria inayosema "baada ya Habari, pendekeza yako". Kibodi iliigundua kwenye mifano yako. Huo ndio moyo wa ujifunzaji wa mashine: kompyuta inatafuta ruwaza kwenye mifano na kuzitumia kukisia kitakachofuata.

Kile ambacho kompyuta inahifadhi baada ya kujifunza kinaitwa modeli. Modeli ni ruwaza iliyohifadhiwa. Kibodi halisi hutumia modeli kubwa zaidi, lakini wazo ni lilelile.

Angalia jambo moja zaidi. Ukianza mazoea mapya kesho, kibodi itaendelea kupendekeza "yako" kwa muda. Inajua mambo yako ya zamani tu. Ndiyo sababu AI inaweza kukosea.`,
        "/learn/content/m0/keyboard-learning.jpg"
      ),
      reveal([
        {
          termEn: "Artificial intelligence (AI)",
          termSw: "Akili bandia (AI)",
          defEn: "Computer software that does tasks we used to think needed a human mind, such as recognising faces or voices.",
          defSw: "Programu za kompyuta zinazofanya kazi ambazo tulidhani zinahitaji akili ya binadamu, kama kutambua nyuso au sauti.",
        },
        {
          termEn: "Rule-following software",
          termSw: "Programu inayofuata sheria",
          defEn: "Software where a person wrote every step. It does the same thing every time and never learns.",
          defSw: "Programu ambayo mtu aliandika kila hatua yake. Hufanya jambo lilelile kila mara na haijifunzi kamwe.",
        },
        {
          termEn: "Machine learning",
          termSw: "Ujifunzaji wa mashine",
          defEn: "A way of building software where the computer finds patterns in many examples instead of following only written rules.",
          defSw: "Njia ya kutengeneza programu ambapo kompyuta inatafuta ruwaza kwenye mifano mingi badala ya kufuata sheria zilizoandikwa tu.",
        },
        {
          termEn: "Pattern",
          termSw: "Ruwaza (pattern)",
          defEn: "Something that repeats in the examples, so you can make a good guess about what comes next.",
          defSw: "Kitu kinachojirudia kwenye mifano, hivyo unaweza kukisia vizuri kitakachofuata.",
        },
        {
          termEn: "Model",
          termSw: "Modeli",
          defEn: "What the computer keeps after learning: the stored pattern it uses to make guesses later.",
          defSw: "Kile ambacho kompyuta inahifadhi baada ya kujifunza: ruwaza iliyohifadhiwa ambayo inaitumia kukisia baadaye.",
        },
      ]),
      note(
        "Three tools you already meet",
        "Zana tatu unazokutana nazo tayari",
        `Look at three tools from everyday Kenyan life. Ask of each one: did a person write the exact rule, or did the tool learn the pattern from examples?

- A mobile-money safety check. A mobile-money service learns that one shop usually receives many daytime payments between KES 100 and KES 2,000. Its model then notices several KES 10 payments arriving after midnight. It flags the unusual pattern for a person to check; the alert does not prove anyone stole money. The shop owner checks the official transaction record before handing over goods. If a real late-night sale caused the alert, the person can confirm it. The model spotted a difference; a person checked what happened.
- A map route to the matatu stage. A map app learns from many past trips. At 7:30 a.m. the trip to the stage usually takes 25 minutes. At 11 a.m. it takes 10 minutes. So it tells you to leave early in the morning. Where it goes wrong: on the day a lorry breaks down on the road, the app is late to notice until new trips show the jam.
- A school bell. The bell rings at 8:00 because someone set it to ring at 8:00. It follows a rule. It never learns anything. That is ordinary software, not AI.

The first two are learning tools. The third is a rule-following tool. Both kinds are useful. Only one kind learns, and that kind can surprise you.`,
        `Angalia zana tatu za maisha ya kila siku nchini Kenya. Kwa kila moja uliza: je, mtu aliandika sheria kamili, au zana ilijifunza ruwaza kutokana na mifano?

- Ukaguzi wa usalama wa pesa kwa simu. Huduma ya pesa kwa simu imejifunza kuwa duka moja hupokea malipo mengi ya mchana ya kati ya KES 100 na KES 2,000. Modeli yake kisha inaona malipo kadhaa ya KES 10 baada ya usiku wa manane. Inaashiria tofauti hiyo ili mtu akague; tahadhari haithibitishi kuwa mtu ameiba pesa. Mwenye duka hukagua rekodi rasmi ya miamala kabla ya kukabidhi bidhaa. Ikiwa mauzo halisi ya usiku yalisababisha tahadhari, mtu anaweza kuyathibitisha. Modeli iliona tofauti; mtu akakagua kilichotokea.
- Njia ya ramani kwenda stegi ya matatu. Programu ya ramani hujifunza kutokana na safari nyingi za zamani. Saa 1:30 asubuhi, safari ya kwenda stegi kwa kawaida huchukua dakika 25. Saa 5 asubuhi huchukua dakika 10. Kwa hiyo inakushauri uondoke mapema asubuhi. Inapokosea: siku lori linapoharibika barabarani, programu inachelewa kutambua mpaka safari mpya zionyeshe msongamano.
- Kengele ya shule. Kengele inalia saa 2:00 asubuhi kwa sababu mtu aliiweka ilie saa hiyo. Inafuata sheria. Haijifunzi chochote. Hiyo ni programu ya kawaida, si AI.

Zana mbili za kwanza ni zana zinazojifunza. Ya tatu ni zana inayofuata sheria. Aina zote mbili zina manufaa. Aina moja tu ndiyo hujifunza, na aina hiyo inaweza kukushangaza.`,
        "/learn/content/m0/everyday-tools.jpg"
      ),
      scenario({
        titleEn: "Is there a person inside the phone?",
        titleSw: "Je, kuna mtu ndani ya simu?",
        situationEn: "Your younger brother Brian, aged 8, uses voice typing on the family phone. He says in Kiswahili, and the words appear on the screen. He tells you: \"There is a very clever person living inside the phone. They know everything, so they are never wrong.\"",
        situationSw: "Mdogo wako Brian, mwenye miaka 8, anatumia kuandika kwa sauti kwenye simu ya familia. Anaongea kwa Kiswahili, na maneno yanatokea kwenye skrini. Anakuambia: \"Kuna mtu mwerevu sana anayeishi ndani ya simu. Anajua kila kitu, kwa hiyo hakosei kamwe.\"",
        questionEn: "What is the best way to explain it to him?",
        questionSw: "Ni ipi njia bora ya kumweleza?",
        optionsEn: [
          "It is a tool made by people. It learned the pattern of speech from many recordings, so it is often right, but it can still make mistakes.",
          "Yes, there is a clever person inside who types for you, so you can trust everything it writes.",
          "It follows a written rule for every single word anyone could ever say.",
          "Nobody can understand how it works, so it is best to just trust it.",
        ],
        optionsSw: [
          "Ni chombo kilichotengenezwa na watu. Kilijifunza ruwaza ya usemi kutokana na rekodi nyingi, kwa hiyo mara nyingi kiko sahihi, lakini bado kinaweza kukosea.",
          "Ndiyo, kuna mtu mwerevu ndani anayekuandikia, kwa hiyo unaweza kuamini kila kitu anachoandika.",
          "Kinafuata sheria iliyoandikwa kwa kila neno ambalo mtu yeyote anaweza kusema.",
          "Hakuna anayeweza kuelewa jinsi kinavyofanya kazi, kwa hiyo ni bora ukiamini tu.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. It is a learning tool built by people. Learning from examples makes it good, not perfect.",
          "No person is inside. Believing that makes children trust the tool too much. It learned patterns and can mishear words.",
          "Nobody could write a rule for every word and every voice. Voice typing works because it learned from many recordings.",
          "You can understand the main idea: examples, pattern, guess. Blind trust is the habit we want to avoid.",
        ],
        hintsSw: [
          "Sahihi. Ni zana inayojifunza iliyotengenezwa na watu. Kujifunza kutokana na mifano kunaifanya iwe nzuri, si kamilifu.",
          "Hakuna mtu ndani. Kuamini hivyo kunawafanya watoto waiamini zana kupita kiasi. Ilijifunza ruwaza na inaweza kusikia maneno vibaya.",
          "Hakuna anayeweza kuandika sheria kwa kila neno na kila sauti. Kuandika kwa sauti hufanya kazi kwa sababu kulijifunza kutokana na rekodi nyingi.",
          "Unaweza kuelewa wazo kuu: mifano, ruwaza, makisio. Kuamini bila kufikiri ndiyo tabia tunayotaka kuepuka.",
        ],
        explainEn: "Voice typing is learning software. People trained it on many recordings of speech, and it guesses which words you said. Because it guesses, it can mishear, especially with noise or an accent it heard less often.",
        explainSw: "Kuandika kwa sauti ni programu inayojifunza. Watu waliifunza kwa rekodi nyingi za usemi, nayo inakisia ni maneno gani uliyosema. Kwa sababu inakisia, inaweza kusikia vibaya, hasa kukiwa na kelele au lafudhi ambayo haikuisikia mara nyingi.",
      }),
      quiz(
        "Which of these is learning software rather than rule-following software?",
        "Ipi kati ya hizi ni programu inayojifunza badala ya programu inayofuata sheria?",
        [
          "A phone alarm set to ring at 6:00 a.m. every day",
          "A calculator that adds up a duka's sales",
          "A video app that picks the next video based on what you watched before",
          "A traffic light that changes colour every 60 seconds",
        ],
        [
          "Kengele ya simu iliyowekwa kulia saa 12:00 asubuhi kila siku",
          "Kikokotoo kinachojumlisha mauzo ya duka",
          "Programu ya video inayochagua video inayofuata kulingana na ulichotazama awali",
          "Taa ya barabarani inayobadilisha rangi kila baada ya sekunde 60",
        ],
        2,
        "The video app studies examples of what you watched and finds a pattern in your taste. The alarm, the calculator and the traffic light each follow a rule a person set, and they behave the same way tomorrow as today.",
        "Programu ya video huchunguza mifano ya ulichotazama na kutafuta ruwaza ya unachopenda. Kengele, kikokotoo na taa ya barabarani kila kimoja hufuata sheria ambayo mtu aliweka, na vitafanya vivyo hivyo kesho kama leo."
      ),
      note(
        "Try it: sort eight tools",
        "Jaribu: panga zana nane",
        `Take a piece of paper. Draw two columns. Write "Rules" on one side and "Learned" on the other. Put each tool below in a column. Use this test question: did a person write the exact rule, or did the tool find the pattern in many examples?

- 1. A calculator
- 2. A phone alarm
- 3. Keyboard word suggestions
- 4. Voice typing in Kiswahili
- 5. A video app choosing your next video
- 6. The check that your PIN is correct
- 7. A photo app that finds faces in your pictures
- 8. A school bell timer

Now check your answers. Rules: 1, 2, 6 and 8. Learned: 3, 4, 5 and 7.

Did you put the PIN check under "Learned"? Many people do, because it feels clever. But it only compares two numbers: the one you typed and the one saved. That is a rule. Show your list to someone at home and explain one tool from each column.`,
        `Chukua karatasi. Chora safu mbili. Andika "Sheria" upande mmoja na "Imejifunza" upande mwingine. Weka kila zana iliyo hapa chini kwenye safu yake. Tumia swali hili la kupima: je, mtu aliandika sheria kamili, au zana ilipata ruwaza kwenye mifano mingi?

- 1. Kikokotoo
- 2. Kengele ya simu
- 3. Mapendekezo ya maneno kwenye kibodi
- 4. Kuandika kwa sauti kwa Kiswahili
- 5. Programu ya video inayokuchagulia video inayofuata
- 6. Ukaguzi kwamba PIN yako ni sahihi
- 7. Programu ya picha inayotambua nyuso kwenye picha zako
- 8. Kipima muda cha kengele ya shule

Sasa kagua majibu yako. Sheria: 1, 2, 6 na 8. Imejifunza: 3, 4, 5 na 7.

Je, uliweka ukaguzi wa PIN chini ya "Imejifunza"? Watu wengi hufanya hivyo, kwa sababu unaonekana kuwa wa kijanja. Lakini unalinganisha namba mbili tu: uliyoandika na iliyohifadhiwa. Hiyo ni sheria. Mwonyeshe mtu wa nyumbani orodha yako na umweleze zana moja kutoka kila safu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- AI is software that does tasks we thought needed a human mind. It is a tool made by people, not a person.
- Rule-following software does what a person wrote. Learning software finds patterns in examples.
- A model is the stored pattern. It uses the past to guess the future, so it can be wrong.
- Next unit: what examples are made of, and how a model learns from them.`,
        `- AI ni programu inayofanya kazi tulizodhani zinahitaji akili ya binadamu. Ni chombo kilichotengenezwa na watu, si mtu.
- Programu inayofuata sheria hufanya kile mtu alichoandika. Programu inayojifunza hutafuta ruwaza kwenye mifano.
- Modeli ni ruwaza iliyohifadhiwa. Hutumia yaliyopita kukisia yajayo, kwa hiyo inaweza kukosea.
- Somo lijalo: mifano imeundwa na nini, na modeli hujifunza vipi kutokana nayo.`
      ),
    ],
  },
  {
    id: "m0-b-u2",
    titleEn: "Data and patterns",
    titleSw: "Data na ruwaza",
    cards: [
      note(
        "What a model learns from",
        "Modeli hujifunza kutokana na nini",
        `Data is information that has been collected: numbers, words, photos or sounds. One piece of data about one thing is called an example. A big collection of examples is called a dataset.

Many examples come with a label. A label is the right answer, written by a person. A photo of a mango is the example. The word "ripe" written next to it is the label.

Each example also has clues. A clue that a model can measure is called a feature. For a mango, the features might be its colour, how soft it feels and how it smells.

Here is how a model learns from labelled examples:

- It looks at many examples, each with its features and its label.
- It searches for a pattern that links the features to the label. For example: "yellow and soft usually means ripe."
- It keeps that pattern as the model.
- When a new mango arrives with no label, it checks the features and makes a guess, called a prediction.

So a model is only as good as its examples. Good, varied, correctly labelled examples teach a good pattern. Few, one-sided or wrongly labelled examples teach a bad one.`,
        `Data ni taarifa zilizokusanywa: namba, maneno, picha au sauti. Kipande kimoja cha data kuhusu kitu kimoja kinaitwa mfano. Mkusanyiko mkubwa wa mifano unaitwa seti ya data.

Mifano mingi huja na lebo. Lebo ni jibu sahihi, lililoandikwa na mtu. Picha ya embe ndiyo mfano. Neno "limeiva" lililoandikwa kando yake ndilo lebo.

Kila mfano pia una vidokezo. Kidokezo ambacho modeli inaweza kukipima kinaitwa sifa. Kwa embe, sifa zinaweza kuwa rangi yake, ulaini wake unapoligusa na harufu yake.

Hivi ndivyo modeli inavyojifunza kutokana na mifano yenye lebo:

- Inaangalia mifano mingi, kila mmoja na sifa zake na lebo yake.
- Inatafuta ruwaza inayounganisha sifa na lebo. Kwa mfano: "njano na laini kwa kawaida humaanisha limeiva."
- Inahifadhi ruwaza hiyo kama modeli.
- Embe jipya lisilo na lebo likifika, inaangalia sifa zake na kukisia. Makisio hayo yanaitwa utabiri.

Kwa hiyo modeli ni nzuri kadiri mifano yake ilivyo mizuri. Mifano mizuri, ya aina mbalimbali na yenye lebo sahihi hufundisha ruwaza nzuri. Mifano michache, ya upande mmoja au yenye lebo zisizo sahihi hufundisha ruwaza mbaya.`
      ),
      reveal([
        {
          termEn: "Data",
          termSw: "Data",
          defEn: "Information that has been collected, such as numbers, words, photos or sounds.",
          defSw: "Taarifa zilizokusanywa, kama namba, maneno, picha au sauti.",
        },
        {
          termEn: "Example and dataset",
          termSw: "Mfano na seti ya data",
          defEn: "An example is one piece of data about one thing. A dataset is a collection of many examples.",
          defSw: "Mfano ni kipande kimoja cha data kuhusu kitu kimoja. Seti ya data ni mkusanyiko wa mifano mingi.",
        },
        {
          termEn: "Label",
          termSw: "Lebo",
          defEn: "The right answer a person writes on an example, such as \"ripe\" or \"unripe\".",
          defSw: "Jibu sahihi ambalo mtu anaandika kwenye mfano, kama \"limeiva\" au \"halijaiva\".",
        },
        {
          termEn: "Feature",
          termSw: "Sifa",
          defEn: "A clue about an example that a model can measure, such as colour, size or the day of the week.",
          defSw: "Kidokezo kuhusu mfano ambacho modeli inaweza kupima, kama rangi, ukubwa au siku ya wiki.",
        },
        {
          termEn: "Prediction",
          termSw: "Utabiri",
          defEn: "The model's best guess about a new example it has not seen before.",
          defSw: "Makisio bora ya modeli kuhusu mfano mpya ambao haijawahi kuuona.",
        },
      ]),
      note(
        "Worked example: Mama Atieno's sales book",
        "Mfano kamili: daftari la mauzo la Mama Atieno",
        `Mama Atieno is a mama mboga in Kakamega. Every evening she writes in a small book how many kilograms of tomatoes she sold. Her book is data. Each day is one example. The day of the week is a feature. The kilograms sold is what she wants to predict.

Here are four weeks from her book:

- Mondays: 10 kg, 12 kg, 14 kg, 12 kg. Total 48 kg. Average 48 divided by 4 = 12 kg.
- Saturdays: 28 kg, 32 kg, 30 kg, 30 kg. Total 120 kg. Average 120 divided by 4 = 30 kg.

The pattern is clear: she sells about 30 kg on Saturday, when people shop for the week, and about 12 kg on Monday.

Now she uses the pattern. She buys tomatoes at KES 60 per kg. If she bought 30 kg for a Monday, about 18 kg would be left over. That is 18 x 60 = KES 1,080 of tomatoes that could go soft. So she buys about 12 kg for Monday and about 30 kg for Saturday. The pattern saves her money. This is exactly what a sales model would do, only with more data.

Where it goes wrong:

- New situations. The pattern only knows normal weeks. On a Saturday during a big funeral in the village, or a week of heavy rain, sales may be very different.
- Bad records. If one evening she wrote 3 kg instead of 30 kg, the average drops. Wrong data teaches a wrong pattern.
- Too few examples. Four weeks is a small dataset. One strange week can pull the average up or down a lot.`,
        `Mama Atieno ni mama mboga huko Kakamega. Kila jioni anaandika kwenye daftari dogo ni kilo ngapi za nyanya alizouza. Daftari lake ni data. Kila siku ni mfano mmoja. Siku ya wiki ni sifa. Kilo alizouza ndicho anachotaka kutabiri.

Hizi ni wiki nne kutoka kwenye daftari lake:

- Jumatatu: kilo 10, kilo 12, kilo 14, kilo 12. Jumla kilo 48. Wastani ni 48 gawanya kwa 4 = kilo 12.
- Jumamosi: kilo 28, kilo 32, kilo 30, kilo 30. Jumla kilo 120. Wastani ni 120 gawanya kwa 4 = kilo 30.

Ruwaza iko wazi: anauza takriban kilo 30 Jumamosi, watu wanaponunua mahitaji ya wiki, na takriban kilo 12 Jumatatu.

Sasa anaitumia ruwaza hiyo. Ananunua nyanya kwa KES 60 kwa kilo. Kama angenunua kilo 30 kwa ajili ya Jumatatu, takriban kilo 18 zingebaki. Hiyo ni 18 x 60 = KES 1,080 za nyanya zinazoweza kuoza. Kwa hiyo ananunua takriban kilo 12 kwa Jumatatu na takriban kilo 30 kwa Jumamosi. Ruwaza inamwokolea pesa. Hivi ndivyo hasa modeli ya mauzo ingefanya, ila kwa data nyingi zaidi.

Inapokosea:

- Hali mpya. Ruwaza inajua wiki za kawaida tu. Jumamosi yenye mazishi makubwa kijijini, au wiki ya mvua kubwa, mauzo yanaweza kuwa tofauti sana.
- Rekodi mbaya. Kama jioni moja aliandika kilo 3 badala ya kilo 30, wastani unashuka. Data isiyo sahihi hufundisha ruwaza isiyo sahihi.
- Mifano michache mno. Wiki nne ni seti ndogo ya data. Wiki moja isiyo ya kawaida inaweza kuvuta wastani juu au chini sana.`
      ),
      note(
        "Sorting mangoes: what the examples leave out",
        "Kupanga maembe: kile ambacho mifano inaacha",
        `Kevin wants a phone app that sorts mangoes into "ripe" and "unripe". He takes 40 photos from his family's trees: 20 ripe mangoes, all yellow, and 20 unripe mangoes, all green. He labels each photo and trains a model.

The model finds the easiest pattern in his examples: yellow means ripe, green means unripe. On Kevin's own mangoes it works well.

Then his aunt brings a different kind of mango that stays green even when it is ripe and sweet. The model says "unripe". It is wrong, and it is wrong with confidence.

Why? The model never saw a green ripe mango. It cannot know what its examples did not show it. The problem is not the phone or the camera. The problem is the dataset.

Kevin fixes it in two ways:

- He adds 20 photos of the green type, labelled correctly, some ripe and some unripe.
- He adds a second feature: a note of whether the mango feels soft when gently pressed.

Now the model has to learn softness as well as colour, and its guesses improve. The lesson: missing examples become missing knowledge.`,
        `Kevin anataka programu ya simu inayopanga maembe kuwa "limeiva" na "halijaiva". Anapiga picha 40 za maembe kutoka kwenye miti ya familia yao: maembe 20 yaliyoiva, yote ya njano, na maembe 20 ambayo hayajaiva, yote ya kijani. Anaweka lebo kwenye kila picha na kufunza modeli.

Modeli inapata ruwaza rahisi zaidi kwenye mifano yake: njano humaanisha limeiva, kijani humaanisha halijaiva. Kwa maembe ya Kevin mwenyewe, inafanya kazi vizuri.

Kisha shangazi yake analeta aina nyingine ya embe ambalo hubaki kijani hata likiwa limeiva na tamu. Modeli inasema "halijaiva". Imekosea, na imekosea ikiwa na uhakika.

Kwa nini? Modeli haikuwahi kuona embe la kijani lililoiva. Haiwezi kujua kile ambacho mifano yake haikuionyesha. Tatizo si simu wala kamera. Tatizo ni seti ya data.

Kevin analirekebisha kwa njia mbili:

- Anaongeza picha 20 za aina hiyo ya kijani, zenye lebo sahihi, baadhi yameiva na baadhi hayajaiva.
- Anaongeza sifa ya pili: kumbukumbu ya kama embe ni laini likibonyezwa kwa upole.

Sasa modeli inalazimika kujifunza ulaini pamoja na rangi, na makisio yake yanaboreka. Funzo: mifano inayokosekana huwa maarifa yanayokosekana.`
      ),
      quiz(
        "Kevin's first model calls a ripe green mango \"unripe\". What is the main reason?",
        "Modeli ya kwanza ya Kevin inaliita embe la kijani lililoiva \"halijaiva\". Sababu kuu ni ipi?",
        [
          "The phone camera was not good enough to see the mango clearly",
          "Its examples had no ripe green mangoes, so it learned \"green means unripe\"",
          "The model did not try hard enough on that mango",
          "It needed a faster internet connection to get the answer right",
        ],
        [
          "Kamera ya simu haikuwa nzuri ya kutosha kuona embe waziwazi",
          "Mifano yake haikuwa na maembe ya kijani yaliyoiva, kwa hiyo ilijifunza \"kijani humaanisha halijaiva\"",
          "Modeli haikujitahidi vya kutosha kwa embe hilo",
          "Ilihitaji mtandao wenye kasi zaidi ili ipate jibu sahihi",
        ],
        1,
        "A model learns only the patterns inside its examples. Every green mango it saw was unripe, so colour became its rule. A model does not \"try\" like a person, and a clear photo or fast internet cannot add knowledge the dataset never contained.",
        "Modeli hujifunza ruwaza zilizo ndani ya mifano yake tu. Kila embe la kijani iliyoliona halikuwa limeiva, kwa hiyo rangi ikawa sheria yake. Modeli \"haijitahidi\" kama mtu, na picha iliyo wazi au mtandao wenye kasi hauwezi kuongeza maarifa ambayo seti ya data haikuwa nayo."
      ),
      scenario({
        titleEn: "A Saturday that is not normal",
        titleSw: "Jumamosi isiyo ya kawaida",
        situationEn: "Mama Atieno's four-week pattern says she sells about 30 kg of tomatoes on Saturdays. This coming Saturday, the nearby boarding school closes for the holidays and many families will travel upcountry. Her neighbour says, \"Your book says 30 kg, so buy 30 kg.\"",
        situationSw: "Ruwaza ya wiki nne ya Mama Atieno inasema anauza takriban kilo 30 za nyanya siku ya Jumamosi. Jumamosi hii ijayo, shule ya bweni iliyo karibu inafungwa kwa likizo na familia nyingi zitasafiri mashambani. Jirani yake anasema, \"Daftari lako linasema kilo 30, kwa hiyo nunua kilo 30.\"",
        questionEn: "What is the wisest plan?",
        questionSw: "Ni mpango upi wenye busara zaidi?",
        optionsEn: [
          "Buy 30 kg, because the pattern from her data is always right",
          "Use the pattern as a starting point, then lower the amount because this Saturday is different, and write down what actually happens",
          "Throw away the sales book, because patterns are useless",
          "Buy 60 kg, because holidays always mean more sales",
        ],
        optionsSw: [
          "Anunue kilo 30, kwa sababu ruwaza ya data yake iko sahihi kila mara",
          "Atumie ruwaza kama mahali pa kuanzia, kisha apunguze kiasi kwa sababu Jumamosi hii ni tofauti, na aandike kinachotokea kweli",
          "Atupe daftari la mauzo, kwa sababu ruwaza hazina faida",
          "Anunue kilo 60, kwa sababu likizo daima humaanisha mauzo zaidi",
        ],
        correctIndex: 1,
        hintsEn: [
          "The pattern came from normal weeks. It has never seen a holiday Saturday, so it cannot account for families leaving.",
          "Right. Data gives a good starting guess. Your knowledge of what is new this week adjusts it. Writing down the result adds a new example for next time.",
          "The book saved her KES 1,080 on Mondays. One unusual week does not make the data useless; it shows its limits.",
          "Nothing in her data says holidays bring more sales. Here families are leaving, so this guess is not based on any evidence.",
        ],
        hintsSw: [
          "Ruwaza ilitokana na wiki za kawaida. Haijawahi kuona Jumamosi ya likizo, kwa hiyo haiwezi kuzingatia familia zinazoondoka.",
          "Sahihi. Data inatoa makisio mazuri ya kuanzia. Ujuzi wako wa kilicho kipya wiki hii unayarekebisha. Kuandika matokeo kunaongeza mfano mpya kwa wakati ujao.",
          "Daftari lilimwokolea KES 1,080 siku za Jumatatu. Wiki moja isiyo ya kawaida haifanyi data kukosa faida; inaonyesha mipaka yake.",
          "Hakuna kitu kwenye data yake kinachosema likizo huleta mauzo zaidi. Hapa familia zinaondoka, kwa hiyo makisio haya hayana ushahidi wowote.",
        ],
        explainEn: "Patterns describe the past. When today is unlike the examples, a person who knows what has changed must adjust the guess. Recording what happens makes the data better next time.",
        explainSw: "Ruwaza zinaeleza yaliyopita. Leo ikiwa tofauti na mifano, mtu anayejua kilichobadilika lazima arekebishe makisio. Kurekodi kinachotokea kunaifanya data iwe bora wakati ujao.",
      }),
      note(
        "Try it: the seven-day pattern game",
        "Jaribu: mchezo wa ruwaza wa siku saba",
        `You can find a pattern in real data this week, with only a pencil.

- Choose one thing to count every day for 7 days. Ideas: eggs your hens lay, matatus that pass your gate between 7:00 and 7:15 a.m., cups of tea your family drinks, or minutes it takes you to walk to school.
- Each day, write the day and the number. That is your dataset. Each line is one example.
- On day 7, look for a pattern. Is one day higher? Is there a normal range, such as 4 to 6 eggs?
- Predict day 8 before it happens. Write your prediction down.
- On day 8, compare your prediction with what really happened.

If you were close, your pattern was useful. If you were far off, ask why. Did something new happen, like rain or a visitor? That is the same question people ask when a real model gets it wrong.`,
        `Unaweza kupata ruwaza kwenye data halisi wiki hii, ukiwa na penseli tu.

- Chagua kitu kimoja cha kuhesabu kila siku kwa siku 7. Mawazo: mayai wanayotaga kuku wako, matatu zinazopita langoni kwenu kati ya saa 1:00 na saa 1:15 asubuhi, vikombe vya chai ambavyo familia yako hunywa, au dakika unazotumia kutembea kwenda shuleni.
- Kila siku, andika siku na namba. Hiyo ndiyo seti yako ya data. Kila mstari ni mfano mmoja.
- Siku ya 7, tafuta ruwaza. Je, kuna siku moja iliyo juu zaidi? Je, kuna kiwango cha kawaida, kama mayai 4 hadi 6?
- Tabiri siku ya 8 kabla haijafika. Andika utabiri wako.
- Siku ya 8, linganisha utabiri wako na kilichotokea kweli.

Kama ulikaribia, ruwaza yako ilikuwa na manufaa. Kama ulikuwa mbali, uliza kwa nini. Je, kulitokea jambo jipya, kama mvua au mgeni? Hilo ndilo swali ambalo watu huuliza modeli halisi inapokosea.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Data is collected information. An example is one piece; a dataset is many.
- A label is the right answer. A feature is a clue the model can measure.
- A model learns the pattern linking features to labels, then predicts for new examples.
- Missing, wrong or too few examples teach a weak pattern.
- Next unit: why every prediction can be wrong, and how to check before you act.`,
        `- Data ni taarifa zilizokusanywa. Mfano ni kipande kimoja; seti ya data ni mifano mingi.
- Lebo ni jibu sahihi. Sifa ni kidokezo ambacho modeli inaweza kupima.
- Modeli hujifunza ruwaza inayounganisha sifa na lebo, kisha hutabiri kwa mifano mipya.
- Mifano inayokosekana, isiyo sahihi au michache mno hufundisha ruwaza dhaifu.
- Somo lijalo: kwa nini kila utabiri unaweza kukosea, na jinsi ya kuthibitisha kabla ya kutenda.`
      ),
    ],
  },
  {
    id: "m0-b-u3",
    titleEn: "Predictions can be wrong",
    titleSw: "Utabiri unaweza kukosea",
    cards: [
      note(
        "A prediction is a guess, not a fact",
        "Utabiri ni makisio, si ukweli",
        `A fact is something that has been checked and is true. "Kisumu is on the shore of Lake Victoria" is a fact.

A prediction is a best guess about something we do not know yet. "It will rain in Kisumu tomorrow" is a prediction. It might happen. It might not.

Everything an AI model gives you is a prediction. The model looks at the pattern it learned and guesses. Even when the guess is good, it is still a guess.

Some tools tell you how sure they are. This is called confidence, and it is often shown as a percentage. 90% confidence means: in cases like this one, the model is right about 9 times out of 10. So it is wrong about 1 time out of 10. High confidence is not a promise.

Chatbots bring a special problem. A chatbot is a program you can type or talk to, and it answers in full sentences. It learned from a huge amount of writing how good sentences sound. So its answers are smooth, polite and sure, even when they are false. A smooth answer tells you about the writing style. It does not tell you whether the answer is true.

That is why we build one habit before anything else: verify first. To verify means to check with a trusted person or a trusted source before you act on an answer.`,
        `Ukweli ni jambo lililokaguliwa na ni kweli. "Kisumu iko kando ya Ziwa Viktoria" ni ukweli.

Utabiri ni makisio bora kuhusu jambo ambalo bado hatulijui. "Kesho kutanyesha Kisumu" ni utabiri. Inaweza kutokea. Inaweza isitokee.

Kila kitu ambacho modeli ya AI inakupa ni utabiri. Modeli inaangalia ruwaza iliyojifunza na kukisia. Hata makisio yakiwa mazuri, bado ni makisio.

Baadhi ya zana hukuambia zina uhakika kiasi gani. Hiki kinaitwa kiwango cha uhakika (confidence), na mara nyingi huonyeshwa kwa asilimia. Uhakika wa asilimia 90 humaanisha: kwa hali kama hii, modeli huwa sahihi takriban mara 9 kati ya 10. Kwa hiyo hukosea takriban mara 1 kati ya 10. Uhakika mkubwa si ahadi.

Chatbot huleta tatizo maalum. Chatbot (roboti ya mazungumzo) ni programu unayoweza kuiandikia au kuongea nayo, nayo hujibu kwa sentensi kamili. Ilijifunza kutokana na maandishi mengi sana jinsi sentensi nzuri zinavyosikika. Kwa hiyo majibu yake ni laini, ya adabu na ya uhakika, hata yakiwa ya uongo. Jibu laini linakuambia kuhusu mtindo wa uandishi. Halikuambii kama jibu ni la kweli.

Ndiyo sababu tunajenga tabia moja kabla ya kitu kingine chochote: thibitisha kwanza. Kuthibitisha ni kukagua kwa mtu wa kuaminika au chanzo cha kuaminika kabla ya kutenda kulingana na jibu.`
      ),
      reveal([
        {
          termEn: "Fact",
          termSw: "Ukweli",
          defEn: "Something that has been checked and is true.",
          defSw: "Jambo lililokaguliwa na ni kweli.",
        },
        {
          termEn: "Prediction",
          termSw: "Utabiri",
          defEn: "A best guess about something we do not know yet. Every AI output is a prediction.",
          defSw: "Makisio bora kuhusu jambo ambalo bado hatulijui. Kila tokeo la AI ni utabiri.",
        },
        {
          termEn: "Confidence",
          termSw: "Kiwango cha uhakika (confidence)",
          defEn: "How sure a tool is about its guess, often as a percentage. 90% still means wrong about 1 time in 10.",
          defSw: "Jinsi zana ilivyo na uhakika kuhusu makisio yake, mara nyingi kwa asilimia. Asilimia 90 bado humaanisha kukosea takriban mara 1 kati ya 10.",
        },
        {
          termEn: "Chatbot",
          termSw: "Chatbot / roboti ya mazungumzo",
          defEn: "A program you type or talk to that answers in full sentences. It sounds sure even when it is wrong.",
          defSw: "Programu unayoiandikia au kuongea nayo inayojibu kwa sentensi kamili. Husikika na uhakika hata ikiwa imekosea.",
        },
        {
          termEn: "Verify",
          termSw: "Thibitisha",
          defEn: "To check an answer with a trusted person or source before you act on it.",
          defSw: "Kukagua jibu kwa mtu au chanzo cha kuaminika kabla ya kutenda kulingana nalo.",
        },
      ]),
      note(
        "Worked example: 70% chance of rain in Kisumu",
        "Mfano kamili: uwezekano wa asilimia 70 wa mvua Kisumu",
        `A weather app says: "Kisumu tomorrow: 70% chance of rain."

What does 70% mean? Imagine 10 days that look just like tomorrow. On about 7 of them it rains. On about 3 it stays dry. So rain is likely, but a dry day would not mean the app was broken.

Now watch two people use the same prediction.

Otieno, 11, is deciding whether to carry an umbrella to school. If he carries it and it stays dry, he loses nothing. If he leaves it and it rains, he gets wet. The cost of being wrong is small. He can act on the prediction: he carries the umbrella.

His aunt Akinyi farms sukuma wiki. She planned to spray her crop tomorrow morning. The spray costs KES 1,500. If heavy rain falls soon after spraying, the spray can wash off, and the KES 1,500 is lost. The cost of being wrong is bigger. So she does not act on the app alone:

- She checks the forecast from the Kenya Meteorological Department (KMD) on the radio.
- She asks the afisa wa ugani, the agricultural extension officer, how long the spray needs before rain.
- She decides to wait one day, when both sources expect a drier morning.

Same prediction. Different decisions. The bigger the cost of a mistake, the more you verify before you act.`,
        `Programu ya hali ya hewa inasema: "Kisumu kesho: uwezekano wa asilimia 70 wa mvua."

Asilimia 70 inamaanisha nini? Fikiria siku 10 zinazofanana kabisa na kesho. Katika takriban siku 7 kati yake, mvua inanyesha. Katika takriban siku 3, hakunyeshi. Kwa hiyo mvua ina uwezekano mkubwa, lakini siku kavu haingemaanisha kuwa programu imeharibika.

Sasa tazama watu wawili wakitumia utabiri huohuo.

Otieno, mwenye miaka 11, anaamua kama abebe mwavuli kwenda shuleni. Akiubeba na hakunyeshi, hapotezi kitu. Akiuacha na mvua ikanyesha, analowa. Gharama ya kukosea ni ndogo. Anaweza kutenda kulingana na utabiri: anabeba mwavuli.

Shangazi yake Akinyi analima sukuma wiki. Alipanga kunyunyizia dawa shamba lake kesho asubuhi. Dawa hiyo inagharimu KES 1,500. Mvua kubwa ikinyesha muda mfupi baada ya kunyunyizia, dawa inaweza kusombwa, na KES 1,500 zikapotea. Gharama ya kukosea ni kubwa zaidi. Kwa hiyo hatendi kulingana na programu peke yake:

- Anasikiliza utabiri wa Idara ya Hali ya Hewa ya Kenya (KMD) kwenye redio.
- Anamuuliza afisa wa ugani dawa inahitaji muda gani kabla ya mvua.
- Anaamua kusubiri siku moja, wakati vyanzo vyote viwili vinatarajia asubuhi kavu zaidi.

Utabiri uleule. Maamuzi tofauti. Kadiri gharama ya kukosea inavyokuwa kubwa, ndivyo unavyopaswa kuthibitisha zaidi kabla ya kutenda.`
      ),
      note(
        "The verify-first habit: who to check with",
        "Tabia ya kuthibitisha kwanza: ukague kwa nani",
        `Before you act on any AI answer, ask yourself three questions.

- How big is this decision? Carrying an umbrella is small. Medicine, money, exams and safety are big.
- Who really knows? A person or office whose job is this topic.
- Can I check before I act? Usually yes. A short wait is cheaper than a big mistake.

Here is who to check with in Kenya:

- Weather and rain: the Kenya Meteorological Department (KMD) forecast.
- Health and medicine: a nurse, a doctor, a pharmacist, a clinic or your community health promoter (CHP). In an emergency, call 999 or 112.
- School work and exams: your teacher and your textbook.
- Money, loans and accounts: your bank or SACCO, using the official number you already know, never a number from a message.
- Farming: the afisa wa ugani or a registered agrovet.
- Government services: eCitizen or a Huduma Centre.

If you are a child, the first person to check with is always a parent, guardian or teacher. Showing them what the app said is never a silly thing to do.`,
        `Kabla ya kutenda kulingana na jibu lolote la AI, jiulize maswali matatu.

- Uamuzi huu ni mkubwa kiasi gani? Kubeba mwavuli ni jambo dogo. Dawa, pesa, mitihani na usalama ni mambo makubwa.
- Nani anajua kweli? Mtu au ofisi ambayo kazi yake ni mada hii.
- Je, ninaweza kukagua kabla ya kutenda? Kwa kawaida ndiyo. Kusubiri kidogo ni nafuu kuliko kosa kubwa.

Hawa ndio wa kukagua nao nchini Kenya:

- Hali ya hewa na mvua: utabiri wa Idara ya Hali ya Hewa ya Kenya (KMD).
- Afya na dawa: muuguzi, daktari, mfamasia, kliniki au mhamasishaji wa afya ya jamii (CHP). Ikiwa ni dharura, piga 999 au 112.
- Kazi ya shule na mitihani: mwalimu wako na kitabu chako cha kiada.
- Pesa, mikopo na akaunti: benki yako au SACCO, ukitumia namba rasmi unayoijua tayari, kamwe si namba kutoka kwa ujumbe.
- Kilimo: afisa wa ugani au muuzaji wa pembejeo (agrovet) aliyesajiliwa.
- Huduma za serikali: eCitizen au Kituo cha Huduma.

Kama wewe ni mtoto, mtu wa kwanza wa kukagua naye ni mzazi, mlezi au mwalimu kila mara. Kuwaonyesha kile programu ilisema si jambo la kijinga kamwe.`
      ),
      scenario({
        titleEn: "The bursary deadline",
        titleSw: "Tarehe ya mwisho ya basari",
        situationEn: "Baraka, in Form 2, asks a chatbot when the ward bursary forms are due. The chatbot answers in a clear, friendly paragraph: \"Bursary applications close at the end of next month, so you have plenty of time.\" It does not say where this information comes from.",
        situationSw: "Baraka, aliye kidato cha pili, anauliza chatbot fomu za basari za wadi zinatakiwa lini. Chatbot inajibu kwa aya iliyo wazi na ya kirafiki: \"Maombi ya basari yanafungwa mwishoni mwa mwezi ujao, kwa hiyo una muda mwingi.\" Haisemi taarifa hii imetoka wapi.",
        questionEn: "What should Baraka do?",
        questionSw: "Baraka afanye nini?",
        optionsEn: [
          "Relax and apply next month, because the answer was clear and confident",
          "Check the real deadline with his school office or the ward administrator's official notice this week",
          "Ask the chatbot the same question again, and trust it if it gives the same answer",
          "Forget the bursary, because he cannot know the deadline",
        ],
        optionsSw: [
          "Atulie na aombe mwezi ujao, kwa sababu jibu lilikuwa wazi na la uhakika",
          "Ahakikishe tarehe halisi ya mwisho kwenye ofisi ya shule yake au tangazo rasmi la msimamizi wa wadi wiki hii",
          "Aiulize chatbot swali lilelile tena, na aiamini ikitoa jibu lilelile",
          "Aachane na basari, kwa sababu hawezi kujua tarehe ya mwisho",
        ],
        correctIndex: 1,
        hintsEn: [
          "A clear, friendly tone is writing style, not evidence. The chatbot named no source, and a missed deadline could cost him the bursary.",
          "Right. The office that runs the bursary knows the real date. Missing it is a big cost, so checking is worth a short trip or call.",
          "A chatbot can repeat the same wrong answer. Asking twice checks the chatbot against itself, not against the truth.",
          "He can know. The people who run the bursary publish the date. Giving up is as unhelpful as trusting blindly.",
        ],
        hintsSw: [
          "Sauti iliyo wazi na ya kirafiki ni mtindo wa uandishi, si ushahidi. Chatbot haikutaja chanzo, na kukosa tarehe ya mwisho kunaweza kumpotezea basari.",
          "Sahihi. Ofisi inayosimamia basari inajua tarehe halisi. Kuikosa ni gharama kubwa, kwa hiyo kuhakikisha kunastahili safari fupi au simu.",
          "Chatbot inaweza kurudia jibu lilelile lisilo sahihi. Kuuliza mara mbili ni kuikagua chatbot dhidi yake yenyewe, si dhidi ya ukweli.",
          "Anaweza kujua. Wanaosimamia basari hutangaza tarehe. Kukata tamaa hakusaidii, sawa na kuamini bila kukagua.",
        ],
        explainEn: "When a chatbot gives a fact that matters, such as a date, a price or a rule, and names no source, treat it as a prediction. Check it with the office that owns the information before you plan around it.",
        explainSw: "Chatbot inapotoa jambo muhimu, kama tarehe, bei au kanuni, bila kutaja chanzo, lichukulie kama utabiri. Lithibitishe kwa ofisi inayomiliki taarifa hiyo kabla ya kupanga mambo yako kulingana nalo.",
      }),
      quiz(
        "A weather app said 90% chance of rain in Eldoret. The day stayed dry. What does this show?",
        "Programu ya hali ya hewa ilisema uwezekano wa asilimia 90 wa mvua Eldoret. Siku ikabaki kavu. Hii inaonyesha nini?",
        [
          "The app is broken and should never be used again",
          "90% is not certain: on about 1 day in 10 like this, it stays dry",
          "The app lied on purpose",
          "The app was right, because it must have rained somewhere in the world",
        ],
        [
          "Programu imeharibika na isitumike tena kamwe",
          "Asilimia 90 si uhakika kamili: katika takriban siku 1 kati ya 10 kama hii, hakunyeshi",
          "Programu ilidanganya kwa makusudi",
          "Programu ilikuwa sahihi, kwa sababu lazima mvua ilinyesha mahali fulani duniani",
        ],
        1,
        "A confidence of 90% expects about 1 miss in every 10 similar days. One dry day does not prove the tool is useless or dishonest. It reminds you that every prediction can be wrong. The forecast was about Eldoret, so rain elsewhere does not count.",
        "Uhakika wa asilimia 90 unatarajia kukosa takriban mara 1 katika kila siku 10 zinazofanana. Siku moja kavu haithibitishi kwamba zana haina faida au si ya kweli. Inakukumbusha kwamba kila utabiri unaweza kukosea. Utabiri ulihusu Eldoret, kwa hiyo mvua mahali pengine haihesabiki."
      ),
      note(
        "Try it: a five-day forecast diary",
        "Jaribu: shajara ya utabiri ya siku tano",
        `For the next 5 days, keep a small diary about the weather. You can use the radio, a phone app or a TV forecast.

- Each morning, write the forecast and its chance of rain, for example "Rain 60%".
- Each evening, write what really happened: rain or no rain.
- After 5 days, count. How many times did a high chance, 60% or more, come with rain? How many times not?

You will probably find that the forecast was usually right but not always. That is what a good prediction looks like. Now think of one decision in your home that is too big to make on a forecast alone, and write down who you would check with.`,
        `Kwa siku 5 zijazo, weka shajara ndogo kuhusu hali ya hewa. Unaweza kutumia redio, programu ya simu au utabiri wa televisheni.

- Kila asubuhi, andika utabiri na uwezekano wake wa mvua, kwa mfano "Mvua asilimia 60".
- Kila jioni, andika kilichotokea kweli: mvua au hakuna mvua.
- Baada ya siku 5, hesabu. Ni mara ngapi uwezekano mkubwa, asilimia 60 au zaidi, ulikuja na mvua? Ni mara ngapi haukuja nayo?

Huenda utaona kwamba utabiri mara nyingi ulikuwa sahihi lakini si kila mara. Hivyo ndivyo utabiri mzuri unavyoonekana. Sasa fikiria uamuzi mmoja nyumbani kwenu ulio mkubwa mno kufanywa kwa utabiri peke yake, na uandike ungekagua kwa nani.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A fact has been checked. A prediction is a guess. Every AI output is a prediction.
- Confidence tells you how often a tool is right in similar cases, never that it is right this time.
- Chatbots sound sure because they learned how good writing sounds, not because they checked.
- Verify first. The bigger the cost of a mistake, the more you check, and with the right person.
- Next unit: how to talk to an AI tool, and what a prompt is.`,
        `- Ukweli umekaguliwa. Utabiri ni makisio. Kila tokeo la AI ni utabiri.
- Kiwango cha uhakika kinakuambia zana huwa sahihi mara ngapi kwa hali zinazofanana, si kwamba iko sahihi wakati huu.
- Chatbot husikika na uhakika kwa sababu zilijifunza jinsi uandishi mzuri unavyosikika, si kwa sababu zilikagua.
- Thibitisha kwanza. Kadiri gharama ya kukosea inavyokuwa kubwa, ndivyo unavyokagua zaidi, na kwa mtu sahihi.
- Somo lijalo: jinsi ya kuongea na zana ya AI, na prompt ni nini.`
      ),
    ],
  },
  {
    id: "m0-b-u4",
    titleEn: "Talking to AI: what a prompt is",
    titleSw: "Kuongea na AI: prompt ni nini",
    cards: [
      note(
        "A prompt is an instruction, not a magic word",
        "Prompt ni maelekezo, si neno la miujiza",
        `When you ask a classmate for help, you do not just say "maize". You say who you need them to be, what the job is, and how the answer should look: "Please explain, in two minutes, why maize needs rain after planting. I am writing a Grade 6 science paragraph."

A prompt is that kind of instruction, written for a chatbot or another AI tool. The tool only sees the words you type. It does not know your classroom, your crop, or your age unless you put those facts in the prompt. It has not walked around Kitale. It predicts likely next words from patterns it learned.

Four parts make a prompt useful.

- Role: who should the tool speak as? "You are a Grade 6 science teacher" sets the voice and the level.
- Task: the job. Explain, list, compare, draft or summarise. One job is clearer than five mixed together.
- Context: the facts the tool needs. Which crop, which town, which class, which language.
- Constraints: the limits. "Six short sentences." "Simple English." "Do not invent a book or a website." "Do not ask for my name."

A weak prompt is "Tell me about maize." The tool must guess who you are and what you want. You may get a long lecture, or a story about farms in a country you have never seen.

A strong prompt names all four parts. Example: "You are a Grade 6 science teacher in Kitale. Explain in five short sentences why maize needs rain in the first weeks after planting. Use simple English. Do not give chemical names. End by telling me to ask my teacher if I am still unsure."

Clear prompts help. They do not make the answer true. The tool is still guessing, the same way you learned in the last unit. You still check with a person who knows.

If you are a child, write prompts with a parent, guardian or teacher nearby. Treat the chatbot like a public noticeboard: people you do not know may read what you type. You do not need your real name for a good prompt.`,
        `Unapomwomba mwenzako msaada, husemi "mahindi" tu. Unamweleza awe nani, kazi ni nini, na jibu lionekane vipi: "Tafadhali nieleze, kwa dakika mbili, kwa nini mahindi yanahitaji mvua baada ya kupandwa. Ninaandika aya ya sayansi ya Gredi ya 6."

Prompt ni maelekezo ya namna hiyo, yanayoandikwa kwa chatbot au zana nyingine ya AI. Zana inaona maneno uliyoandika tu. Haijui darasa lako, zao lako, wala umri wako, isipokuwa ukeyaweka kwenye prompt. Haijatembea Kitale. Inakisia maneno yanayoweza kufuata kutokana na ruwaza iliyojifunza.

Sehemu nne hufanya prompt iwe na manufaa.

- Nafasi (role): zana iongee kama nani? "Wewe ni mwalimu wa sayansi wa Gredi ya 6" huweka sauti na kiwango.
- Kazi (task): kazi yenyewe. Eleza, orodhesha, linganisha, andika rasimu au fupisha. Kazi moja ni wazi kuliko tano zilizochanganywa.
- Muktadha (context): ukweli ambao zana inahitaji. Zao lipi, mji upi, darasa lipi, lugha ipi.
- Masharti (constraints): mipaka. "Sentensi sita fupi." "Kiingereza rahisi." "Usibuni kitabu wala tovuti." "Usinilize jina langu."

Prompt dhaifu ni "Niambie kuhusu mahindi." Zana inalazimika kukisia wewe ni nani na unataka nini. Unaweza kupata somo refu, au hadithi ya mashamba ya nchi ambayo hujawahi kuona.

Prompt imara inataja sehemu zote nne. Mfano: "Wewe ni mwalimu wa sayansi wa Gredi ya 6 Kitale. Eleza kwa sentensi tano fupi kwa nini mahindi yanahitaji mvua wiki za kwanza baada ya kupandwa. Tumia Kiingereza rahisi. Usitoe majina ya kemikali. Maliza kwa kuniambia nimwulize mwalimu wangu nikiwa bado sina uhakika."

Prompt zilizo wazi zinasaidia. Hazifanyi jibu kuwa la kweli. Zana bado inakisia, kama ulivyojifunza somo lililopita. Bado unakagua kwa mtu anayejua.

Kama wewe ni mtoto, andika prompt ukiwa karibu na mzazi, mlezi au mwalimu. Chukulia chatbot kama ubao wa matangazo hadharani: watu usiowajua wanaweza kusoma ulichoandika. Huhitaji jina lako halisi ili upate prompt nzuri.`
      ),
      reveal([
        {
          termEn: "Prompt",
          termSw: "Prompt (maelekezo)",
          defEn: "The instruction you type or say to a chatbot or other AI tool, telling it what to do.",
          defSw: "Maelekezo unayoiandikia au kuambia chatbot au zana nyingine ya AI, yakiiambia ifanye nini.",
        },
        {
          termEn: "Role",
          termSw: "Nafasi (role)",
          defEn: "Who you ask the tool to speak as, such as a Grade 6 science teacher or a market trader explaining prices.",
          defSw: "Unamwomba zana iongee kama nani, kama mwalimu wa sayansi wa Gredi ya 6 au mfanyabiashara wa soko anayeeleza bei.",
        },
        {
          termEn: "Task",
          termSw: "Kazi (task)",
          defEn: "The job you want done: explain, list, compare, draft or summarise. One clear job is better than many mixed jobs.",
          defSw: "Kazi unayotaka ifanywe: eleza, orodhesha, linganisha, andika rasimu au fupisha. Kazi moja iliyo wazi ni bora kuliko kazi nyingi zilizochanganywa.",
        },
        {
          termEn: "Context",
          termSw: "Muktadha (context)",
          defEn: "The facts the tool needs in order to be useful, such as the crop, the town, the class or the language.",
          defSw: "Ukweli ambao zana inahitaji ili iwe na manufaa, kama zao, mji, darasa au lugha.",
        },
        {
          termEn: "Constraint",
          termSw: "Sharti (constraint)",
          defEn: "A limit you set on the answer, such as length, language, or \"do not invent a source\".",
          defSw: "Kikomo unachoweka kwenye jibu, kama urefu, lugha, au \"usibuni chanzo\".",
        },
        {
          termEn: "Strong prompt",
          termSw: "Prompt imara",
          defEn: "A prompt that names the role, the task, the context and the constraints, so the tool has less to guess.",
          defSw: "Prompt inayotaja nafasi, kazi, muktadha na masharti, ili zana iwe na mambo machache ya kukisia.",
        },
      ]),
      note(
        "Worked example: Wanjiku's speech in Nakuru",
        "Mfano kamili: hotuba ya Wanjiku Nakuru",
        `Wanjiku is in Grade 6 at a public school in Nakuru. Her teacher asked the class to give a one-minute speech on saving water at home. Wanjiku opens a chatbot on the family's phone.

First she types: "Write a speech about water."

The answer is long. It talks about melting ice and a river in another country. It uses words her classmates will not know. It never mentions a tap, a jerrycan or a shamba. The tool guessed a different Wanjiku.

She tries again, with the four parts:

- Role: "You are a Grade 6 teacher in Nakuru."
- Task: "Draft a one-minute speech."
- Context: "The audience is my classmates. We fetch water in jerrycans. We grow sukuma wiki."
- Constraints: "Ten short sentences in simple English. Do not invent a law or a famous person. End by telling me to practise the speech with my teacher."

The second answer talks about closing a tap, reusing rinse water on the kitchen garden, and checking a leaking pipe. That is closer to her life. It is still a draft, not her speech. She reads it aloud to her teacher, crosses out two sentences that are not true for her home, and adds one sentence of her own.

The lesson: the first prompt made the tool guess. The second prompt gave it a job it could try. A person who knows Nakuru still had to finish the work.`,
        `Wanjiku yuko Gredi ya 6 katika shule ya umma Nakuru. Mwalimu aliwaomba wanafunzi watoe hotuba ya dakika moja kuhusu kuokoa maji nyumbani. Wanjiku anafungua chatbot kwenye simu ya familia.

Kwanza anaandika: "Andika hotuba kuhusu maji."

Jibu ni refu. Linaongea kuhusu barafu inayoyeyuka na mto wa nchi nyingine. Linatumia maneno ambayo wanafunzi wenzake hawataelewa. Halitaji bomba, ndoo wala shamba. Zana ilikisia Wanjiku mwingine.

Anajaribu tena, akiwa na sehemu nne:

- Nafasi: "Wewe ni mwalimu wa Gredi ya 6 Nakuru."
- Kazi: "Andika rasimu ya hotuba ya dakika moja."
- Muktadha: "Hadhira ni wanafunzi wenzangu. Tunachota maji kwa ndoo. Tunalima sukuma wiki."
- Masharti: "Sentensi kumi fupi kwa Kiingereza rahisi. Usibuni sheria wala mtu maarufu. Maliza kwa kuniambia nizoeze hotuba na mwalimu wangu."

Jibu la pili linaongea kuhusu kufunga bomba, kutumia maji ya kuoshea vyombo kwenye bustani ya jikoni, na kukagua bomba linalovuja. Hilo liko karibu na maisha yake. Bado ni rasimu, si hotuba yake. Anaisoma kwa sauti mbele ya mwalimu, anafuta sentensi mbili ambazo si kweli nyumbani kwao, na anaongeza sentensi moja yake mwenyewe.

Funzo: prompt ya kwanza ilifanya zana ikisie. Ya pili ilipa kazi inayoweza kujaribiwa. Mtu anayejua Nakuru bado alilazimika kumaliza kazi.`
      ),
      pb({
        titleEn: "Build Wanjiku a strong prompt",
        titleSw: "Mtengenezee Wanjiku prompt imara",
        introEn:
          "A chatbot can help a Grade 5 class understand compost, but only if the prompt is clear. Tap the blocks that give a role, a task, Kenyan context and useful limits. Leave out anything that names a real child or school.",
        introSw:
          "Chatbot inaweza kusaidia darasa la Gredi ya 5 kuelewa mboji, lakini prompt ikawa wazi. Gusa vipande vinavyotoa nafasi, kazi, muktadha wa Kenya na mipaka yenye manufaa. Acha chochote kinachotaja mtoto au shule halisi.",
        goalEn: "Your prompt must include role, task, context and two constraints. Do not include a real name or school.",
        goalSw: "Prompt yako lazima iwe na nafasi, kazi, muktadha na masharti mawili. Usijumuishe jina au shule halisi.",
        blocksEn: [
          "Role: You are a Grade 5 science teacher in Kitale.",
          "Task: Explain how compost helps a small kitchen garden.",
          "Context: The learners are about 10 years old and grow sukuma wiki.",
          "Constraint: Write 6 short sentences in simple English.",
          "Constraint: Do not name shops, brands or chemicals.",
          "Add: My name is Mercy and I study at Green Hill Primary.",
        ],
        blocksSw: [
          "Nafasi: Wewe ni mwalimu wa sayansi wa Gredi ya 5 Kitale.",
          "Kazi: Eleza jinsi mboji inavyosaidia bustani ndogo ya jikoni.",
          "Muktadha: Wanafunzi wana takriban miaka 10 na wanalima sukuma wiki.",
          "Sharti: Andika sentensi 6 fupi kwa Kiingereza rahisi.",
          "Sharti: Usitaje maduka, chapa au kemikali.",
          "Ongeza: Jina langu ni Mercy na ninasoma Green Hill Primary.",
        ],
        required: [0, 1, 2, 3, 4],
        sampleEn:
          "Role: You are a Grade 5 science teacher in Kitale. Task: Explain how compost helps a small kitchen garden. Context: The learners are about 10 years old and grow sukuma wiki. Write 6 short sentences in simple English. Do not name shops, brands or chemicals.",
        sampleSw:
          "Nafasi: Wewe ni mwalimu wa sayansi wa Gredi ya 5 Kitale. Kazi: Eleza jinsi mboji inavyosaidia bustani ndogo ya jikoni. Muktadha: Wanafunzi wana takriban miaka 10 na wanalima sukuma wiki. Andika sentensi 6 fupi kwa Kiingereza rahisi. Usitaje maduka, chapa au kemikali.",
      }),
      scenario({
        titleEn: "Homework in one word",
        titleSw: "Kazi ya nyumbani kwa neno moja",
        situationEn: "Daniel, aged 9, in Kisumu, wants help with a CBC homework task: write four sentences about how bees help a shamba. He types one word into a chatbot: \"Homework.\" His older sister says that is enough, because the tool is clever.",
        situationSw: "Daniel, mwenye miaka 9, Kisumu, anataka msaada wa kazi ya nyumbani ya CBC: andika sentensi nne kuhusu jinsi nyuki wanavyosaidia shamba. Anaandika neno moja kwenye chatbot: \"Homework.\" Dada yake mkubwa anasema hiyo inatosha, kwa sababu zana ni werevu.",
        questionEn: "What should Daniel type instead?",
        questionSw: "Daniel aandike nini badala yake?",
        optionsEn: [
          "You are a Grade 4 teacher in Kisumu. Write four short sentences on how bees help a shamba. Simple English. Do not invent a scientist. Remind me to check the sentences with my teacher.",
          "Homework, because a clever tool already knows his class, his town and his teacher.",
          "Write a university essay about insects in every country, with long words.",
          "Give me the answers and do not tell me to check with anyone.",
        ],
        optionsSw: [
          "Wewe ni mwalimu wa Gredi ya 4 Kisumu. Andika sentensi nne fupi kuhusu jinsi nyuki wanavyosaidia shamba. Kiingereza rahisi. Usibuni mwanasayansi. Nikumbushe nizikague sentensi na mwalimu wangu.",
          "Homework, kwa sababu zana werevu tayari inajua darasa lake, mji wake na mwalimu wake.",
          "Andika insha ya chuo kuhusu wadudu katika kila nchi, kwa maneno marefu.",
          "Nipe majibu na usiniambie nikague kwa mtu yeyote.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. The prompt names a role, a small task, Kisumu and Grade 4, plus limits and a check with a teacher. That is a strong prompt.",
          "The tool cannot see his homework book. One word forces it to guess, so the answer may be for the wrong class or country.",
          "A university essay is the wrong level and the wrong length. Constraints should match the real job.",
          "Skipping the teacher removes the verify-first habit. The chatbot is still guessing.",
        ],
        hintsSw: [
          "Sahihi. Prompt inataja nafasi, kazi ndogo, Kisumu na Gredi ya 4, pamoja na mipaka na ukaguzi kwa mwalimu. Hiyo ni prompt imara.",
          "Zana haiwezi kuona daftari lake la kazi. Neno moja inalazimisha kukisia, kwa hiyo jibu linaweza kuwa la darasa au nchi isiyo sahihi.",
          "Insha ya chuo ni kiwango kibaya na urefu usiofaa. Masharti yanapaswa kuendana na kazi halisi.",
          "Kumwacha mwalimu kunaondoa tabia ya kuthibitisha kwanza. Chatbot bado inakisia.",
        ],
        explainEn: "A one-word prompt leaves the tool to invent the job. Naming the role, the task, the place and the limits gives a draft you can check with a teacher. The draft is still not the finished homework.",
        explainSw: "Prompt ya neno moja inawacha zana ibuni kazi. Kutaja nafasi, kazi, mahali na mipaka kunatoa rasimu unayoweza kukagua na mwalimu. Rasimu bado si kazi kamili ya nyumbani.",
      }),
      quiz(
        "Which prompt is the strongest for a short school answer?",
        "Prompt ipi ni imara zaidi kwa jibu fupi la shule?",
        [
          "Tell me everything about trees.",
          "You are a Grade 5 teacher in Kericho. List five ways a tea farm benefits from trees, in simple English, in eight short sentences. Do not invent a law. Tell me to check this with my teacher.",
          "Trees please, and make it sound clever.",
          "Give me the exam answer key for next week.",
        ],
        [
          "Niambie kila kitu kuhusu miti.",
          "Wewe ni mwalimu wa Gredi ya 5 Kericho. Orodhesha njia tano shamba la chai linavyofaidika na miti, kwa Kiingereza rahisi, kwa sentensi nane fupi. Usibuni sheria. Niambie nikague hii na mwalimu wangu.",
          "Miti tafadhali, na ionekane ya werevu.",
          "Nipe ufunguo wa majibu ya mtihani wa wiki ijayo.",
        ],
        1,
        "The second prompt names a role, a clear list-task, Kericho tea farms, a length limit, a ban on invented laws, and a check with a teacher. \"Everything about trees\" is too wide. Sounding clever is not a task. An exam key is cheating, and a chatbot cannot know next week's paper.",
        "Prompt ya pili inataja nafasi, kazi wazi ya orodha, mashamba ya chai Kericho, kikomo cha urefu, katazo la sheria zilizobuniwa, na ukaguzi kwa mwalimu. \"Kila kitu kuhusu miti\" ni pana mno. Kuonekana werevu si kazi. Ufunguo wa mtihani ni kudanganya, na chatbot haiwezi kujua karatasi ya wiki ijayo."
      ),
      note(
        "Try it: two prompts on paper",
        "Jaribu: prompt mbili kwenye karatasi",
        `You do not need a phone for this.

- Pick one small job, such as "four sentences on how to wash hands before cooking" or "a list of five items for a market day stall".
- On the left of a page, write a weak prompt of three words or fewer.
- On the right, write a strong prompt with role, task, context and at least one constraint. Do not write your real name or school.
- Read both aloud to a parent, guardian or teacher. Ask them which one would help a classmate who has never been to your town.
- Keep the strong prompt. You will use this shape again in the next units.`,
        `Huhitaji simu kwa zoezi hili.

- Chagua kazi ndogo moja, kama "sentensi nne kuhusu kunawa mikono kabla ya kupika" au "orodha ya vitu vitano vya stendi ya siku ya soko".
- Upande wa kushoto wa ukurasa, andika prompt dhaifu yenye maneno matatu au chini.
- Upande wa kulia, andika prompt imara yenye nafasi, kazi, muktadha na sharti angalau moja. Usiandike jina lako halisi wala shule.
- Zisome zote kwa sauti kwa mzazi, mlezi au mwalimu. Waulize ni ipi ingemsaidia mwanafunzi mwenzako ambaye hajawahi kufika mji wenu.
- Iweke prompt imara. Utatumia umbo hili tena katika masomo yajayo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A prompt is the instruction you give an AI tool. The tool only sees those words.
- Role, task, context and constraints make the guess more useful.
- A strong prompt still produces a prediction. Check it with a person who knows.
- You do not need your real name for a good prompt.
- Next unit: your personal data, and what never to type into a public chatbot.`,
        `- Prompt ni maelekezo unayompa zana ya AI. Zana inaona maneno hayo tu.
- Nafasi, kazi, muktadha na masharti hufanya makisio yawe na manufaa zaidi.
- Prompt imara bado inatoa utabiri. Ikague kwa mtu anayejua.
- Huhitaji jina lako halisi ili upate prompt nzuri.
- Somo lijalo: data binafsi yako, na kile ambacho hupaswi kuandika kwenye chatbot ya hadhara kamwe.`
      ),
    ],
  },
  {
    id: "m0-b-u5",
    titleEn: "Your data stays yours",
    titleSw: "Data yako inabaki yako",
    cards: [
      note(
        "Personal data is anything that points to you",
        "Data binafsi ni chochote kinachokuelekeza wewe",
        `Personal data is information that can point to you or your family. Your full name. The name of your school. Your home or the stage you alight at. Your phone number. A national ID or birth-certificate number. A photo of your face. Your M-Pesa PIN or any other PIN. The fact that you are home alone.

A public chatbot is not a locked diary. It is closer to speaking in a crowded matatu. You do not know who can store the words, copy them, or see them later. Once you type a PIN or an ID number, you cannot pull those digits back out of the phone.

Kenya has a law for this. The Data Protection Act 2019 says organisations should collect only what they need, tell people why, keep the information safe, and not share it without a good reason. The Office of the Data Protection Commissioner, the ODPC, is the government office that watches how this law is used. You do not need to memorise the Act. You need the plain meaning: your information is not free for every app to take.

If you are a child, a parent, guardian or teacher should decide what is shared. You can still use a chatbot for school work. You do it without handing over the keys to your life.

Never type these into a public chatbot:

- Your full name together with your school
- Any PIN, password or M-Pesa code
- An ID number, birth-certificate number or passport number
- Your exact home, or "I am home alone"
- Photos of your face, your classmates or your house, unless a grown-up you trust has said yes
- Someone else's private information. Their data is not yours to give away.

Safe wording is general. Write "a Grade 5 learner in Kenya" instead of your name and school. Write "a market in Kisii" instead of the stall number. The tool can still do the job. It never needed the extra facts.`,
        `Data binafsi ni taarifa zinazoweza kukuelekeza wewe au familia yako. Jina lako kamili. Jina la shule yako. Nyumba yako au stegi unayoshukia. Namba yako ya simu. Namba ya kitambulisho au cheti cha kuzaliwa. Picha ya uso wako. PIN ya M-Pesa au PIN nyingine yoyote. Habari kwamba uko nyumbani peke yako.

Chatbot ya hadhara si shajara yenye kufuli. Iko karibu na kuongea ndani ya matatu iliyojaa. Hujui nani anaweza kuhifadhi maneno, kuyanukuu, au kuyaona baadaye. Ukishaandika PIN au namba ya kitambulisho, huwezi kuvuta tarakimu hizo tena nje ya simu.

Kenya ina sheria kuhusu hili. Sheria ya Ulinzi wa Data ya 2019 inasema mashirika yachukue tu kile yanachohitaji, wayambie watu kwa nini, yahifadhi taarifa salama, na yalisisambaze bila sababu nzuri. Ofisi ya Kamishna wa Ulinzi wa Data, ODPC, ndiyo ofisi ya serikali inayotazama jinsi sheria hii inavyotumiwa. Huhitaji kukariri sheria. Unahitaji maana yake rahisi: taarifa yako si mali huria kwa kila programu.

Kama wewe ni mtoto, mzazi, mlezi au mwalimu ndiye anayeamua nini kishirikiwe. Bado unaweza kutumia chatbot kwa kazi ya shule. Unafanya hivyo bila kutoa funguo za maisha yako.

Usiandike hivi kwenye chatbot ya hadhara kamwe:

- Jina lako kamili pamoja na shule yako
- PIN yoyote, nenosiri au msimbo wa M-Pesa
- Namba ya kitambulisho, cheti cha kuzaliwa au pasipoti
- Nyumba yako kamili, au "niko nyumbani peke yangu"
- Picha za uso wako, wanafunzi wenzako au nyumba yenu, isipokuwa mtu mzima unayemwamini amesema ndiyo
- Taarifa binafsi za mtu mwingine. Data yake si yako kutoa.

Maneno salama ni ya jumla. Andika "mwanafunzi wa Gredi ya 5 nchini Kenya" badala ya jina na shule yako. Andika "soko Kisii" badala ya namba ya stendi. Zana bado inaweza kufanya kazi. Haikuhitaji ukweli wa ziada.`
      ),
      reveal([
        {
          termEn: "Personal data",
          termSw: "Data binafsi",
          defEn: "Information that can point to you or your family, such as a name, school, phone number, ID, photo, PIN or exact home.",
          defSw: "Taarifa zinazoweza kukuelekeza wewe au familia yako, kama jina, shule, namba ya simu, kitambulisho, picha, PIN au nyumba kamili.",
        },
        {
          termEn: "Public chatbot",
          termSw: "Chatbot ya hadhara",
          defEn: "An AI tool on the open internet that you type to. Treat it like a crowded matatu, not a locked diary.",
          defSw: "Zana ya AI kwenye intaneti ya wazi unayoandikia. Ichukulie kama matatu iliyojaa, si shajara yenye kufuli.",
        },
        {
          termEn: "PIN",
          termSw: "PIN",
          defEn: "A secret number that opens money or an account, such as an M-Pesa PIN. Nobody who helps you needs it, and you never type it into a chatbot.",
          defSw: "Namba ya siri inayofungua pesa au akaunti, kama PIN ya M-Pesa. Hakuna anayekusaidia anayeihitaji, na huiandiki kwenye chatbot kamwe.",
        },
        {
          termEn: "Data Protection Act 2019",
          termSw: "Sheria ya Ulinzi wa Data ya 2019",
          defEn: "Kenya's law that says organisations should collect only what they need, explain why, keep it safe, and not share it without a good reason.",
          defSw: "Sheria ya Kenya inayosema mashirika yachukue tu kile yanachohitaji, yaeleze kwa nini, yahifadhi salama, na yalisisambaze bila sababu nzuri.",
        },
        {
          termEn: "ODPC",
          termSw: "ODPC (Ofisi ya Kamishna wa Ulinzi wa Data)",
          defEn: "The Kenyan government office that watches how personal data is collected and used.",
          defSw: "Ofisi ya serikali ya Kenya inayotazama jinsi data binafsi inavyokusanywa na kutumiwa.",
        },
        {
          termEn: "Safe wording",
          termSw: "Maneno salama",
          defEn: "General words that still do the job, such as \"a Grade 5 learner in Kenya\", without your name, school or PIN.",
          defSw: "Maneno ya jumla ambayo bado yanaweza kufanya kazi, kama \"mwanafunzi wa Gredi ya 5 nchini Kenya\", bila jina lako, shule au PIN.",
        },
      ]),
      note(
        "Worked example: Amina's composition in Nyeri",
        "Mfano kamili: insha ya Amina Nyeri",
        `Amina is 9. She lives in Nyeri. She wants a chatbot to help her outline a composition about market day.

The unsafe outline she almost typed:

"My name is Amina Wanjiru. I am in Grade 4 at Hilltop Primary. My mother is called Grace and her phone is 07xx xxx xxx. We live near the Catholic church on the road to Mweiga. Help me write about Saturday market."

That message is a map to a child. A name plus a school plus a home plus a phone number is enough for a stranger to pretend they know the family.

The safe outline she typed instead:

"Help me outline a composition about market day for a Grade 4 learner in Kenya. Use simple English. Include a mama mboga, a matatu stage and a jerrycan of water. Do not ask for my name or school. Remind me to read the outline to my teacher."

The second prompt still has role (implied helper), task (outline), context (Grade 4, Kenya, market) and constraints. It does not hand over Amina.

Her mother sat with her while she typed. That is the right picture for a child: a grown-up nearby, general words on the screen, and the real names staying in the house.`,
        `Amina ana miaka 9. Anaishi Nyeri. Anataka chatbot imsaidie kuandaa mfumo wa insha kuhusu siku ya soko.

Mfumo usio salama aliokaribia kuandika:

"Jina langu ni Amina Wanjiru. Niko Gredi ya 4 Hilltop Primary. Mama yangu anaitwa Grace na simu yake ni 07xx xxx xxx. Tunaishi karibu na kanisa Katoliki kwenye barabara ya Mweiga. Nisaidie kuandika kuhusu soko la Jumamosi."

Ujumbe huo ni ramani ya mtoto. Jina pamoja na shule pamoja na nyumba pamoja na namba ya simu vinatosha mgeni ajifanye anafahamu familia.

Mfumo salama aliouandika badala yake:

"Nisaidie kuandaa mfumo wa insha kuhusu siku ya soko kwa mwanafunzi wa Gredi ya 4 nchini Kenya. Tumia Kiingereza rahisi. Jumlisha mama mboga, stegi ya matatu na ndoo ya maji. Usinilize jina wala shule. Nikumbushe nisome mfumo kwa mwalimu wangu."

Prompt ya pili bado ina nafasi (msaada), kazi (mfumo), muktadha (Gredi ya 4, Kenya, soko) na masharti. Haimkabidhi Amina.

Mama yake alikaa naye alipoandika. Hiyo ndiyo picha sahihi kwa mtoto: mtu mzima karibu, maneno ya jumla kwenye skrini, na majina halisi yakibaki nyumbani.`
      ),
      scenario({
        titleEn: "The class list on the phone",
        titleSw: "Orodha ya darasa kwenye simu",
        situationEn: "A classmate, Brian, aged 10, wants a chatbot to write birthday cards for the whole class. He has a paper list with every child's full name, and some have phone numbers of parents. He says, \"If I paste the whole list, the cards will be personal.\"",
        situationSw: "Mwanafunzi mwenzake, Brian, mwenye miaka 10, anataka chatbot iandike kadi za siku ya kuzaliwa kwa darasa zima. Ana orodha ya karatasi yenye jina kamili la kila mtoto, na baadhi wana namba za simu za wazazi. Anasema, \"Nikinakili orodha yote, kadi zitakuwa za kibinafsi.\"",
        questionEn: "What should you tell Brian?",
        questionSw: "Umweleze Brian nini?",
        optionsEn: [
          "Do not paste the list. Ask a teacher or parent. Use a general prompt such as \"Draft a short birthday card for a Grade 4 classmate in Kenya\", then write each child's name by hand.",
          "Paste the list. Cards sound nicer when the tool knows every name and number.",
          "Paste only the phone numbers, because names are the private part.",
          "Paste the list at night, when fewer people are online, so it is safer.",
        ],
        optionsSw: [
          "Usinakili orodha. Mwulize mwalimu au mzazi. Tumia prompt ya jumla kama \"Andika kadi fupi ya siku ya kuzaliwa kwa mwanafunzi mwenzako wa Gredi ya 4 nchini Kenya\", kisha andika jina la kila mtoto kwa mkono.",
          "Nakili orodha. Kadi zinasikika vizuri zana inapojua kila jina na namba.",
          "Nakili namba za simu tu, kwa sababu majina ndiyo sehemu ya faragha.",
          "Nakili orodha usiku, watu wachache wakiwa mtandaoni, ili iwe salama zaidi.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. Other children's names and parent numbers are not Brian's to upload. A general card plus names written by hand keeps the list in the classroom.",
          "A personal card is not worth putting twenty children on a public chatbot. Their families did not agree to that.",
          "Phone numbers are personal data too, often more dangerous than names. Neither belongs in the chatbot.",
          "The time of day does not lock the tool. Public is public at noon and at midnight.",
        ],
        hintsSw: [
          "Sahihi. Majina ya watoto wengine na namba za wazazi si mali ya Brian kupakia. Kadi ya jumla pamoja na majina yaliyoandikwa kwa mkono inaweka orodha darasani.",
          "Kadi ya kibinafsi si sababu ya kutosha kuweka watoto ishirini kwenye chatbot ya hadhara. Familia zao hazikukubali.",
          "Namba za simu nazo ni data binafsi, mara nyingi hatari kuliko majina. Hakuna kati yake inayostahili kuwa kwenye chatbot.",
          "Saa ya siku haifungi zana. Hadhara ni hadhara adhuhuri na usiku.",
        ],
        explainEn: "You may share your own general school work. You may not upload other people's names, numbers or photos to a public chatbot. A teacher or parent is the person who decides about a class list.",
        explainSw: "Unaweza kushiriki kazi yako ya shule kwa maneno ya jumla. Huwezi kupakia majina, namba au picha za watu wengine kwenye chatbot ya hadhara. Mwalimu au mzazi ndiye anayeamua kuhusu orodha ya darasa.",
      }),
      quiz(
        "Which line is safe to type into a public chatbot?",
        "Mstari upi ni salama kuandika kwenye chatbot ya hadhara?",
        [
          "My name is Amina, I am at Hilltop Primary, PIN 1234, help me.",
          "Explain market day for a Grade 4 learner in Kenya, in five short sentences. Do not ask for my name.",
          "Here is a photo of my classmates and our home. Caption it.",
          "My mother is not home. Call her on this number if I get stuck.",
        ],
        [
          "Jina langu ni Amina, niko Hilltop Primary, PIN 1234, nisaidie.",
          "Eleza siku ya soko kwa mwanafunzi wa Gredi ya 4 nchini Kenya, kwa sentensi tano fupi. Usinilize jina.",
          "Hii ni picha ya wanafunzi wenzangu na nyumba yetu. Ipe maelezo.",
          "Mama hayuko nyumbani. Mpigie simu kwa namba hii nikikwama.",
        ],
        1,
        "The second line does the school job with general words and a constraint not to ask for a name. The others hand over a child, a PIN, other children's faces, or the fact that a child is unsupervised.",
        "Mstari wa pili unafanya kazi ya shule kwa maneno ya jumla na sharti la kutoomba jina. Mengine yanakabidhi mtoto, PIN, nyuso za watoto wengine, au habari kwamba mtoto hayuko chini ya usimamizi."
      ),
      note(
        "Try it: the never-share card",
        "Jaribu: kadi ya usishiriki kamwe",
        `Take a piece of paper. Fold it in half. On the front write "NEVER SHARE" and "USISHIRIKI KAMWE".

Inside, copy this list in your own handwriting:

- Full name + school
- PIN or password
- ID or birth-certificate number
- Exact home or "I am alone"
- Photos of faces, unless a grown-up said yes
- Other people's private information

On the back, write one safe sentence you can reuse: "I am a Grade ___ learner in Kenya." Stick the card on the fridge, or keep it in your homework book. Show it to a parent, guardian or teacher and ask them to add one extra rule for your home.`,
        `Chukua karatasi. Ikunje katikati. Mbele andika "NEVER SHARE" na "USISHIRIKI KAMWE".

Ndani, nakili orodha hii kwa mwandiko wako:

- Jina kamili + shule
- PIN au nenosiri
- Namba ya kitambulisho au cheti cha kuzaliwa
- Nyumba kamili au "niko peke yangu"
- Picha za nyuso, isipokuwa mtu mzima alisema ndiyo
- Taarifa binafsi za watu wengine

Nyuma, andika sentensi moja salama unayoweza kutumia tena: "Mimi ni mwanafunzi wa Gredi ya ___ nchini Kenya." Bandika kadi kwenye friji, au iweke kwenye daftari la kazi. Mwonyeshe mzazi, mlezi au mwalimu na umwombe aongeze sheria moja ya ziada kwa nyumba yenu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Personal data points to you or your family. Names, school, PIN, ID, photos and exact location stay out of a public chatbot.
- Kenya's Data Protection Act 2019 and the ODPC exist to keep organisations in line. Children still need a grown-up beside them.
- Safe wording still does the school job.
- If you are 8 to 10, you now have a complete first course: what AI is, how it learns, why it can be wrong, how to prompt, and how to keep your data.
- Next unit: how to check an answer when the sentences sound sure but may be false.`,
        `- Data binafsi inakuelekeza wewe au familia yako. Majina, shule, PIN, kitambulisho, picha na mahali kamili vinaachwa nje ya chatbot ya hadhara.
- Sheria ya Ulinzi wa Data ya 2019 na ODPC zipo kuweka mashirika kwenye mstari. Watoto bado wanahitaji mtu mzima kando yao.
- Maneno salama bado yanaweza kufanya kazi ya shule.
- Ukiwa na miaka 8 hadi 10, sasa una kozi kamili ya kwanza: AI ni nini, inajifunza vipi, kwa nini inaweza kukosea, jinsi ya kuandika prompt, na jinsi ya kulinda data yako.
- Somo lijalo: jinsi ya kukagua jibu sentensi zinaposikika na uhakika lakini zikiwa za uongo.`
      ),
    ],
  },
  {
    id: "m0-b-u6",
    titleEn: "Checking answers",
    titleSw: "Kukagua majibu",
    cards: [
      note(
        "Smooth sentences can still be false",
        "Sentensi laini bado zinaweza kuwa za uongo",
        `You already know that every AI output is a prediction. This unit names two ways that prediction goes wrong, and what you do next.

A hallucination is an answer that sounds finished and sure, but is not true. The chatbot may invent a date, a person, a clinic, a chemical or a law. It does this because it is guessing likely next words, not because it opened a file in an office in Nairobi. Polite language is a writing style. It is not a stamp of truth.

A missing source is the second warning. If the answer names no person, no office, no book, no date you can check, you are holding a guess with no handle. "Experts say" is not a source. "A ministry circular" is not a source until you can see the circular.

Your job is not to argue with the chatbot. Your job is to verify. Verify means: check with a trusted person or a trusted office before you act.

Who to check with in Kenya, again, now with this new lens:

- School facts and homework: your teacher and your textbook.
- Health: a nurse, a doctor, a pharmacist, a clinic or a community health promoter (CHP). Emergency: 999 or 112.
- Farming: the afisa wa ugani, a registered agrovet, or guidance from KALRO. For a pesticide, check that the product is allowed under PCPB rules.
- Money and accounts: the bank or SACCO number you already know, never a number inside the chatbot's paragraph.
- Government dates and forms: eCitizen, a Huduma Centre, or the office that runs the service.
- Weather: the Kenya Meteorological Department forecast.

If you are a child, the first check is still a parent, guardian or teacher. Showing them the screen is part of the work, not a sign that you failed.`,
        `Tayari unajua kwamba kila tokeo la AI ni utabiri. Somo hili linataja njia mbili utabiri unapokosea, na unachofanya baadaye.

Hallucination ni jibu linalosikika limekamilika na lina uhakika, lakini si la kweli. Chatbot inaweza kubuni tarehe, mtu, kliniki, kemikali au sheria. Hufanya hivyo kwa sababu inakisia maneno yanayoweza kufuata, si kwa sababu ilifungua faili katika ofisi Nairobi. Lugha ya adabu ni mtindo wa uandishi. Si muhuri wa ukweli.

Chanzo kinachokosekana ni onyo la pili. Jibu likikosa kutaja mtu, ofisi, kitabu au tarehe unayoweza kukagua, unashika makisio yasiyo na kipini. "Wataalamu wanasema" si chanzo. "Waraka wa wizara" si chanzo mpaka uweze kuuona waraka.

Kazi yako si kubishana na chatbot. Kazi yako ni kuthibitisha. Kuthibitisha ni: kukagua kwa mtu wa kuaminika au ofisi ya kuaminika kabla ya kutenda.

Wa kukagua nao nchini Kenya, tena, sasa kwa jicho hili jipya:

- Mambo ya shule na kazi ya nyumbani: mwalimu wako na kitabu chako cha kiada.
- Afya: muuguzi, daktari, mfamasia, kliniki au mhamasishaji wa afya ya jamii (CHP). Dharura: 999 au 112.
- Kilimo: afisa wa ugani, muuzaji wa pembejeo aliyesajiliwa, au mwongozo kutoka KALRO. Kwa dawa ya wadudu, hakikisha bidhaa inaruhusiwa chini ya kanuni za PCPB.
- Pesa na akaunti: namba ya benki au SACCO unayoijua tayari, kamwe si namba iliyo ndani ya aya ya chatbot.
- Tarehe na fomu za serikali: eCitizen, Kituo cha Huduma, au ofisi inayosimamia huduma.
- Hali ya hewa: utabiri wa Idara ya Hali ya Hewa ya Kenya.

Kama wewe ni mtoto, ukaguzi wa kwanza bado ni mzazi, mlezi au mwalimu. Kuwaonyesha skrini ni sehemu ya kazi, si ishara kwamba umeshindwa.`
      ),
      reveal([
        {
          termEn: "Hallucination",
          termSw: "Hallucination (makosa yanayosikika kuwa ya kweli)",
          defEn: "An AI answer that sounds complete and sure but is not true, such as an invented date, person or law.",
          defSw: "Jibu la AI linalosikika limekamilika na lina uhakika lakini si la kweli, kama tarehe, mtu au sheria iliyobuniwa.",
        },
        {
          termEn: "Source",
          termSw: "Chanzo",
          defEn: "A named person, office, book or date you can actually check. \"Experts say\" is not a source.",
          defSw: "Mtu, ofisi, kitabu au tarehe iliyotajwa ambayo unaweza kukagua kweli. \"Wataalamu wanasema\" si chanzo.",
        },
        {
          termEn: "Missing source",
          termSw: "Chanzo kinachokosekana",
          defEn: "An answer that gives no handle to check: no office, no document, no date you can look up.",
          defSw: "Jibu lisilo na kipini cha kukagua: hakuna ofisi, waraka wala tarehe unayoweza kutafuta.",
        },
        {
          termEn: "Verify",
          termSw: "Thibitisha",
          defEn: "To check an answer with a trusted person or office before you act on it.",
          defSw: "Kukagua jibu kwa mtu au ofisi ya kuaminika kabla ya kutenda kulingana nalo.",
        },
        {
          termEn: "Trusted office",
          termSw: "Ofisi ya kuaminika",
          defEn: "The place whose job is that topic, such as a school office, a clinic, KALRO, a Huduma Centre or KMD.",
          defSw: "Mahali ambapo kazi yake ni mada hiyo, kama ofisi ya shule, kliniki, KALRO, Kituo cha Huduma au KMD.",
        },
      ]),
      note(
        "Worked example: Otieno and the exam date in Kisii",
        "Mfano kamili: Otieno na tarehe ya mtihani Kisii",
        `Otieno is in Grade 8 in Kisii. He asks a chatbot, "When is the national exam this year?" The answer arrives in a calm paragraph: "The exam begins on 14 October. Candidates should report to their centres by 7:00 a.m. This follows the ministry timetable." It names no circular, no year, and no office website.

Otieno almost texts his cousin "We start 14 October." Then he remembers: a date is a fact that matters. Missing the real day would waste a year.

He does three checks, none of them inside the chatbot:

- He asks the school deputy, who keeps the official notice on the staff-room board.
- He looks at the printed timetable the school already issued.
- He does not call any phone number the chatbot invented.

The deputy shows him a different week. The chatbot had produced a fluent, wrong date. That is a hallucination with a missing source. Otieno lost ten minutes, not a year.

The same pattern works for a pesticide name, a bursary deadline, or a clinic opening time. Smooth writing is not evidence. The office that owns the fact is evidence.`,
        `Otieno yuko Gredi ya 8 Kisii. Anauliza chatbot, "Mtihani wa kitaifa ni lini mwaka huu?" Jibu linakuja kwa aya tulivu: "Mtihani unaanza tarehe 14 Oktoba. Watahiniwa wafike vituo vyao saa 1:00 asubuhi. Hii inafuata ratiba ya wizara." Haitaji waraka, mwaka, wala tovuti ya ofisi.

Otieno karibu amtumie binamu yake ujumbe "Tunaanza 14 Oktoba." Kisha anakumbuka: tarehe ni ukweli unaohusu. Kukosa siku halisi kungepoteza mwaka.

Anafanya ukaguzi tatu, hakuna ulio ndani ya chatbot:

- Anamuuliza naibu wa shule, anayeweka tangazo rasmi kwenye ubao wa chumba cha walimu.
- Anaangalia ratiba iliyochapishwa ambayo shule tayari ilitoa.
- Hapigi namba yoyote ya simu ambayo chatbot ilibuni.

Naibu anamwonyesha wiki tofauti. Chatbot ilitoa tarehe laini, isiyo sahihi. Hiyo ni hallucination yenye chanzo kinachokosekana. Otieno alipoteza dakika kumi, si mwaka.

Ruwaza ileile inafanya kazi kwa jina la dawa ya wadudu, tarehe ya mwisho ya basari, au saa ya kufungua kliniki. Uandishi laini si ushahidi. Ofisi inayomiliki ukweli ndiyo ushahidi.`
      ),
      scenario({
        titleEn: "A circular that nobody can find",
        titleSw: "Waraka ambao hakuna anayeweza kuupata",
        situationEn: "A chatbot tells Faith, in Form 2 in Kakamega, that \"Ministry Circular 12/2024\" changed the ward bursary rules, and she should wait until December. The message is polite and uses official-sounding words. It does not give a page, a stamp or a place to read the circular.",
        situationSw: "Chatbot inamwambia Faith, aliye kidato cha pili Kakamega, kwamba \"Waraka wa Wizara 12/2024\" umebadilisha kanuni za basari za wadi, na astahili kusubiri hadi Desemba. Ujumbe ni wa adabu na unatumia maneno yanayosikika rasmi. Hautoi ukurasa, muhuri wala mahali pa kusoma waraka.",
        questionEn: "What should Faith do this week?",
        questionSw: "Faith afanye nini wiki hii?",
        optionsEn: [
          "Ask the school office or the ward administrator for the real notice, and ignore a circular she cannot see.",
          "Wait until December, because the wording sounded official.",
          "Ask the chatbot for a second circular number, and trust it if the number looks longer.",
          "Post the chatbot's paragraph in the class WhatsApp group as the new rule.",
        ],
        optionsSw: [
          "Aulize ofisi ya shule au msimamizi wa wadi tangazo halisi, na asijali waraka ambao hawezi kuuona.",
          "Asubiri hadi Desemba, kwa sababu maneno yalisikika rasmi.",
          "Aombe chatbot namba ya pili ya waraka, na aiamini namba ikionekana ndefu zaidi.",
          "Aweke aya ya chatbot kwenye kikundi cha WhatsApp cha darasa kama kanuni mpya.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. A circular you cannot see is a missing source. The office that runs the bursary holds the real rule.",
          "Official tone is style, not a stamp. Waiting on a guessed date can cost her the bursary.",
          "A longer invented number is still invented. Checking the chatbot against itself is not verification.",
          "Sharing a guess makes the hallucination travel. Classmates may miss the real deadline because of her forward.",
        ],
        hintsSw: [
          "Sahihi. Waraka usioonekana ni chanzo kinachokosekana. Ofisi inayosimamia basari ndiyo inayoshika kanuni halisi.",
          "Sauti rasmi ni mtindo, si muhuri. Kusubiri tarehe iliyokisiwa kunaweza kumpotezea basari.",
          "Namba ndefu iliyobuniwa bado ni iliyobuniwa. Kuikagua chatbot dhidi yake yenyewe si uthibitisho.",
          "Kushiriki makisio kunafanya hallucination isafiri. Wanafunzi wenzake wanaweza kukosa tarehe halisi kwa sababu ya ujumbe wake.",
        ],
        explainEn: "When an AI tool names a document you cannot find, treat the whole claim as a prediction with a missing source. Check the office that owns the rule before you change your plans.",
        explainSw: "Zana ya AI inapotaja waraka ambao huwezi kuupata, chukulia dai zima kama utabiri wenye chanzo kinachokosekana. Kagua ofisi inayomiliki kanuni kabla ya kubadilisha mipango yako.",
      }),
      quiz(
        "A chatbot names a pesticide and says a neighbour in Meru already uses it. What is the main problem?",
        "Chatbot inataja dawa ya wadudu na kusema jirani Meru tayari anaitumia. Tatizo kuu ni lipi?",
        [
          "The sentences are too short to be useful",
          "It gives no source you can check, and a pesticide choice must be confirmed with an agrovet or PCPB-aligned advice, not a neighbour the tool invented",
          "Meru is too far from Nairobi for AI to work",
          "Pesticides can only be discussed in English",
        ],
        [
          "Sentensi ni fupi mno kuwa na manufaa",
          "Haitoi chanzo unachoweza kukagua, na chaguo la dawa lazima lithibitishwe na agrovet au ushauri unaoendana na PCPB, si jirani ambaye zana ilimbuni",
          "Meru iko mbali mno na Nairobi kwa AI kufanya kazi",
          "Dawa za wadudu zinaweza kuzungumziwa kwa Kiingereza tu",
        ],
        1,
        "A named neighbour you cannot phone is a missing source, and may be a hallucination. Crop chemicals are a high-cost mistake. PCPB alignment and a registered agrovet are the check, not fluent chat.",
        "Jirani aliyetajwa ambaye huwezi kumpigia simu ni chanzo kinachokosekana, na huenda ni hallucination. Kemikali za mazao ni kosa lenye gharama kubwa. Ulinganifu wa PCPB na agrovet aliyesajiliwa ndiyo ukaguzi, si mazungumzo laini."
      ),
      note(
        "Try it: the three-column check",
        "Jaribu: ukaguzi wa safu tatu",
        `On paper, draw three columns. Label them "Claim", "Source named?" and "Who I will ask".

Find any three claims this week. They can come from a chatbot, a WhatsApp forward, or a rumour at the stage. For each one, fill the row.

- If the source column is empty, write "none".
- In the third column, write a real person or office: teacher, CHP, agrovet, Huduma Centre, parent.

Do not act on any row whose source is "none" until the third column has been asked. That is the whole habit in one page.`,
        `Kwenye karatasi, chora safu tatu. Ziite "Dai", "Chanzo kimetajwa?" na "Nitakayemwuliza".

Tafuta madai matatu wiki hii. Yanaweza kutoka kwa chatbot, ujumbe wa WhatsApp, au uvumi kwenye stegi. Kwa kila moja, jaza mstari.

- Safu ya chanzo ikiwa tupu, andika "hakuna".
- Katika safu ya tatu, andika mtu au ofisi halisi: mwalimu, CHP, agrovet, Kituo cha Huduma, mzazi.

Usitende kulingana na mstari wowote ambao chanzo ni "hakuna" mpaka safu ya tatu iwe imeulizwa. Hiyo ndiyo tabia yote katika ukurasa mmoja.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A hallucination is a fluent false answer. A missing source is a guess with no handle.
- Verify with the person or office whose job is that fact.
- Next unit: scams and fakes, including M-Pesa messages that AI tools can help to write.`,
        `- Hallucination ni jibu laini la uongo. Chanzo kinachokosekana ni makisio yasiyo na kipini.
- Thibitisha kwa mtu au ofisi ambayo kazi yake ni ukweli huo.
- Somo lijalo: ulaghai na bandia, pamoja na ujumbe wa M-Pesa ambao zana za AI zinaweza kusaidia kuandika.`
      ),
    ],
  },
  {
    id: "m0-b-u7",
    titleEn: "Scams, fakes, and M-Pesa",
    titleSw: "Ulaghai, bandia, na M-Pesa",
    cards: [
      note(
        "Stop, check, tell",
        "Simama, kagua, eleza",
        `A scam is a trick that tries to take your money, your PIN, or your trust. Older scams often had broken English and odd spelling. That was a clue. AI tools can now write polite, correct English and Kiswahili. A well-written SMS is no longer proof that the sender is real.

The habit is three words: Stop. Check. Tell.

- Stop. Do not tap the link. Do not send money. Do not type a PIN. Do not reply with your ID number. A short pause is cheaper than a lost account.
- Check. Use a number or a shop you already know. Call the person on the contact you saved last month, not on the number inside the new message. For M-Pesa, use the official Safaricom channels you already use, not a number that arrived with the threat.
- Tell. Show a parent, guardian, teacher, or the real company. Shame helps the scammer. Talking helps you.

M-Pesa rules you can keep on one line: nobody who works for the real service needs your PIN. Nobody needs you to "confirm" an account by sending money to a till you do not recognise. If a message says your line will close this hour unless you pay, that urgency is part of the trick.

Photos and voices can be copied or faked too. If a "uncle" sends a voice note asking for airtime or a school-fee rescue, stop. Call the uncle on the number already in the phone. The voice on the note is not a witness.

You do not need to understand how the fake was made. You need the pause. AI makes the writing smoother. It does not make the stranger honest.`,
        `Ulaghai ni hila inayojaribu kuchukua pesa yako, PIN yako, au imani yako. Ulaghai wa zamani mara nyingi ulikuwa na Kiingereza kilichovunjika na tahajia ya ajabu. Huo ulikuwa kidokezo. Zana za AI sasa zinaweza kuandika Kiingereza na Kiswahili cha adabu na sahihi. SMS iliyoandikwa vizuri si uthibitisho tena kwamba mtumaji ni wa kweli.

Tabia ni maneno matatu: Simama. Kagua. Eleza.

- Simama. Usibonye kiungo. Usitume pesa. Usiandike PIN. Usijibu kwa namba ya kitambulisho. Kusimama kidogo ni nafuu kuliko akaunti iliyopotea.
- Kagua. Tumia namba au duka unalolijua tayari. Mpigie mtu simu kwa anwani uliyohifadhi mwezi uliopita, si namba iliyo ndani ya ujumbe mpya. Kwa M-Pesa, tumia njia rasmi za Safaricom unazotumia tayari, si namba iliyofika na tishio.
- Eleza. Mwonyeshe mzazi, mlezi, mwalimu, au kampuni halisi. Aibu inamsaidia mwizi. Kuongea kunakusaidia wewe.

Kanuni za M-Pesa unazoweza kuweka kwenye mstari mmoja: hakuna anayefanya kazi kwa huduma halisi anayehitaji PIN yako. Hakuna anayehitaji "uthibitishe" akaunti kwa kutuma pesa kwa till usiyoijua. Ujumbe ukisema laini itafungwa saa hii usipolipa, haraka hiyo ni sehemu ya hila.

Picha na sauti nazo zinaweza kunukuliwa au kubandika. "Mjomba" akituma ujumbe wa sauti akiomba airtime au kuokoa karo, simama. Mpigie mjomba simu kwa namba iliyo tayari kwenye simu. Sauti kwenye ujumbe si shahidi.

Huhitaji kuelewa bandia ilitengenezwaje. Unahitaji kusimama. AI inafanya uandishi uwe laini. Haimfanyi mgeni kuwa mkweli.`
      ),
      reveal([
        {
          termEn: "Scam",
          termSw: "Ulaghai",
          defEn: "A trick that tries to take your money, PIN, identity or trust, often by pretending to be a person or company you know.",
          defSw: "Hila inayojaribu kuchukua pesa, PIN, utambulisho au imani yako, mara nyingi kwa kujifanya mtu au kampuni unayemfahamu.",
        },
        {
          termEn: "Stop-Check-Tell",
          termSw: "Simama-Kagua-Eleza",
          defEn: "The three-step habit: pause, verify on a channel you already trust, then show a parent, teacher or the real company.",
          defSw: "Tabia ya hatua tatu: simama, thibitisha kwa njia unayoiamini tayari, kisha mwonyeshe mzazi, mwalimu au kampuni halisi.",
        },
        {
          termEn: "Urgency trick",
          termSw: "Hila ya haraka",
          defEn: "A message that says you must pay or share a PIN this hour, so you skip checking.",
          defSw: "Ujumbe unaosema lazima ulipe au ushiriki PIN saa hii, ili uruke kukagua.",
        },
        {
          termEn: "Fake",
          termSw: "Bandia",
          defEn: "A photo, voice, video or letter made to look real. A familiar voice on a note is not proof of the sender.",
          defSw: "Picha, sauti, video au barua iliyotengenezwa ionekane ya kweli. Sauti ya kawaida kwenye ujumbe si uthibitisho wa mtumaji.",
        },
        {
          termEn: "Official channel",
          termSw: "Njia rasmi",
          defEn: "The number, shop or app you already used with that company, not a new number that arrived with the warning.",
          defSw: "Namba, duka au programu ambayo tayari ulitumia na kampuni hiyo, si namba mpya iliyofika na onyo.",
        },
      ]),
      note(
        "Worked example: Mama Chebet and the polite SMS in Eldoret",
        "Mfano kamili: Mama Chebet na SMS ya adabu Eldoret",
        `Mama Chebet sells milk in Eldoret. At 8:40 p.m. she gets an SMS in clean Kiswahili. It says her M-Pesa will be closed by morning unless she sends her PIN to "confirm she is the owner". The grammar is perfect. It uses her first name.

Ten years ago she would have laughed at the spelling. Tonight the spelling is not a clue.

She uses Stop-Check-Tell.

- Stop. She does not reply. She does not type the PIN. She puts the phone face down for one minute.
- Check. She does not call the number on the SMS. She uses the Safaricom path she already knows, and she asks her son, who is in Form 3, to sit with her. Together they see that a real service never asks for a PIN by SMS.
- Tell. In the morning she shows the message to the agent at the shop she uses every week, so the agent can warn other customers.

The PIN stayed in her head. The account stayed hers. The polite language had been the bait, not the proof.`,
        `Mama Chebet anauza maziwa Eldoret. Saa 2:40 usiku anapokea SMS kwa Kiswahili safi. Inasema M-Pesa yake itafungwa kufikia asubuhi asipotuma PIN yake "kuthibitisha kuwa yeye ndiye mmiliki". Sarufi ni kamilifu. Inatumia jina lake la kwanza.

Miaka kumi iliyopita angecheka tahajia. Usiku huu tahajia si kidokezo.

Anatumia Simama-Kagua-Eleza.

- Simama. Hajibu. Haandiki PIN. Anaweka simu chini kwa dakika moja.
- Kagua. Hapigi namba iliyo kwenye SMS. Anatumia njia ya Safaricom anayoijua tayari, na anamwomba mwanawe, aliye kidato cha tatu, aketi naye. Pamoja wanaona kwamba huduma halisi haiombi PIN kwa SMS kamwe.
- Eleza. Asubuhi anamwonyesha ujumbe wakala wa duka analotumia kila wiki, ili wakala aonye wateja wengine.

PIN ilibaki kichwani mwake. Akaunti ilibaki yake. Lugha ya adabu ilikuwa chambo, si uthibitisho.`
      ),
      scenario({
        titleEn: "A teacher who wants M-Pesa",
        titleSw: "Mwalimu anayetaka M-Pesa",
        situationEn: "You are 12. A WhatsApp message arrives from a new number, written in perfect English: \"This is your class teacher. Buy the set books today from this till or you will miss the exam. Send the M-Pesa message when you have paid. Do not tell your parents, they will only delay you.\"",
        situationSw: "Una miaka 12. Ujumbe wa WhatsApp unafika kutoka namba mpya, umeandikwa kwa Kiingereza kamilifu: \"Mimi ni mwalimu wako wa darasa. Nunua vitabu vya seti leo kutoka till hii la sivyo utakosa mtihani. Tuma ujumbe wa M-Pesa ukishalipa. Usiwaambie wazazi, watakuchelewesha tu.\"",
        questionEn: "What is the right move?",
        questionSw: "Hatua sahihi ni ipi?",
        optionsEn: [
          "Stop. Do not pay. Check with your real teacher or parent on a number you already have. Tell a grown-up about the message.",
          "Pay quickly, because the English is perfect so it must be the school.",
          "Send your PIN only, not the money, as a compromise.",
          "Reply and ask the sender to switch to Kiswahili, then pay if they can.",
        ],
        optionsSw: [
          "Simama. Usilipe. Kagua na mwalimu wako halisi au mzazi kwa namba unayo nayo tayari. Mwambie mtu mzima kuhusu ujumbe.",
          "Lipa haraka, kwa sababu Kiingereza ni kamilifu hivyo lazima ni shule.",
          "Tuma PIN yako tu, si pesa, kama njia ya kati.",
          "Jibu na umwombe mtumaji abadili kuwa Kiswahili, kisha ulipe akiweza.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. A real teacher does not ban parents or demand a new till by private chat. Stop-Check-Tell protects the money and the child.",
          "Perfect English is cheap for an AI tool. Urgency plus secrecy is the scam pattern, not the school pattern.",
          "A PIN is the key to the money. Sending it is not a smaller gift. It is the whole gift.",
          "Language tests do not prove identity. A scammer can switch to Kiswahili in one tap.",
        ],
        hintsSw: [
          "Sahihi. Mwalimu halisi hawakai wazazi wala kuomba till mpya kwa siri. Simama-Kagua-Eleza inalinda pesa na mtoto.",
          "Kiingereza kamilifu ni rahisi kwa zana ya AI. Haraka pamoja na siri ni ruwaza ya ulaghai, si ruwaza ya shule.",
          "PIN ni ufunguo wa pesa. Kuituma si zawadi ndogo. Ni zawadi yote.",
          "Mtihani wa lugha hauthibitishi utambulisho. Mwizi anaweza kubadili Kiswahili kwa mguso mmoja.",
        ],
        explainEn: "A message that wants money, a PIN, or silence from parents is a scam pattern even when the grammar is perfect. Check on a channel you already trust.",
        explainSw: "Ujumbe unaotaka pesa, PIN, au kimya kutoka kwa wazazi ni ruwaza ya ulaghai hata sarufi ikiwa kamilifu. Kagua kwa njia unayoiamini tayari.",
      }),
      quiz(
        "Which M-Pesa message is safest to ignore until you check on an official channel?",
        "Ujumbe upi wa M-Pesa ni salama zaidi kuuacha mpaka ukague kwa njia rasmi?",
        [
          "Your own confirmation SMS after you just paid a till you can see in front of you",
          "A new-number SMS that says your account will close tonight unless you send your PIN",
          "A balance check you started yourself in the official app or USSD you already use",
          "A receipt printed at the shop after you asked the agent to cash in",
        ],
        [
          "SMS yako ya uthibitisho baada ya kulipa till unayoiona mbele yako",
          "SMS kutoka namba mpya inayosema akaunti yako itafungwa usiku huu usipotuma PIN",
          "Ukaguzi wa salio ulioanzisha mwenyewe kwenye programu rasmi au USSD unayotumia tayari",
          "Risiti iliyochapishwa dukani baada ya kumuomba wakala akuingizie pesa",
        ],
        1,
        "A threat plus a request for a PIN from a new number is the urgency trick. Your own receipts and balances, started by you on a known channel, are different.",
        "Tishio pamoja na ombi la PIN kutoka namba mpya ni hila ya haraka. Risiti na salio ulivyoanzisha mwenyewe kwa njia unayoijua ni tofauti."
      ),
      note(
        "Try it: the family Stop-Check-Tell drill",
        "Jaribu: zoezi la familia la Simama-Kagua-Eleza",
        `Sit with a parent, guardian or older sibling. Write three fake messages on paper. Keep them obviously practice: draw a box labelled "PRACTICE" at the top. Ideas:

- "Your M-Pesa closes in one hour. Send PIN."
- "I am your aunt. Send 2,000 for an emergency. Do not call."
- "This is the school. Pay this till and do not tell anyone."

Take turns. One person reads a message. The other must say out loud: Stop (what they will not do), Check (which real number or shop they will use), Tell (which grown-up they will show).

When you finish, tear up the practice page so nobody later thinks the numbers were real.`,
        `Keti na mzazi, mlezi au ndugu mkubwa. Andika ujumbe bandia tatu kwenye karatasi. Uweke wazi kuwa ni mazoezi: chora kisanduku kiitwacho "MAZOEZI" juu. Mawazo:

- "M-Pesa yako inafungwa saa moja. Tuma PIN."
- "Mimi ni shangazi yako. Tuma 2,000 kwa dharura. Usipige simu."
- "Hii ni shule. Lipa till hii na usimwambie mtu."

Pishana. Mtu mmoja asome ujumbe. Mwingine aseme kwa sauti: Simama (hatofanya nini), Kagua (namba au duka gani halisi atatumia), Eleza (mtu mzima yupi atamwonyesha).

Mkishamaliza, rarua ukurasa wa mazoezi ili mtu yeyote baadaye asidhani namba zilikuwa za kweli.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- AI can write convincing scams. Perfect language is not proof.
- Stop. Check on a channel you already trust. Tell a grown-up or the real company.
- Nobody needs your PIN. Urgency and secrecy are clues.
- Next unit: language — Kiswahili, Sheng, and whose examples the model saw.`,
        `- AI inaweza kuandika ulaghai unaoshawishi. Lugha kamilifu si uthibitisho.
- Simama. Kagua kwa njia unayoiamini tayari. Mwambie mtu mzima au kampuni halisi.
- Hakuna anayehitaji PIN yako. Haraka na siri ni vidokezo.
- Somo lijalo: lugha — Kiswahili, Sheng, na mifano ya nani modeli iliona.`
      ),
    ],
  },
  {
    id: "m0-b-u8",
    titleEn: "Language: Kiswahili, Sheng, and whose examples",
    titleSw: "Lugha: Kiswahili, Sheng, na mifano ya nani",
    cards: [
      note(
        "A model speaks the languages it saw most",
        "Modeli huongea lugha zilizoiona mara nyingi",
        `Remember Kevin's mangoes: a model cannot know what its examples did not show. Language works the same way.

Most large chatbots learned from writing on the internet. That pile has far more English than Kiswahili. It has more news English from big cities than Sheng from Eastlands, or Dholuo from a lakeside market, or Gikuyu from a tea farm. So the tool is often fluent in English, stiffer in Kiswahili, and lost in Sheng. It may mix languages without warning. It may translate a proverb word by word until the meaning dies.

Whose examples also means whose world. If the training writing talked about winter, dollars and lockers at school, the model will reach for those pictures. A Kenyan composition about "seasons" may come back with snow. A price may arrive in the wrong currency. A "shop" may look like a supermarket, not a kiosk or a jua kali stall.

You can help without pretending the tool became Kenyan overnight.

- Put the language in the prompt: "Answer in simple Kiswahili." or "Use short English a Grade 6 learner can read."
- Put the place in the prompt: "Use Kenyan examples: matatu, sukuma wiki, M-Pesa, CBC."
- If you use Sheng, add a plain Kiswahili or English restatement of the same request, so the task is not carried by slang the model barely saw.
- Read the answer for foreign furniture. Snow in Kisumu is a clue that the examples were from somewhere else.

UNESCO has published AI competency frameworks for learners and teachers. Countries, Kenya included, are working out how to teach these skills. You do not need a page number. You need the habit: name your language and your place, then check the draft with a person who lives here.

A good Kiswahili prompt still produces a prediction. A teacher who marks CBC work, or a parent who speaks the language at home, is still the check.`,
        `Kumbuka maembe ya Kevin: modeli haiwezi kujua kile ambacho mifano yake haikuionyesha. Lugha inafanya kazi vivyo hivyo.

Chatbot kubwa nyingi zilijifunza kutokana na maandishi ya intaneti. Lundo hilo lina Kiingereza kingi mno kuliko Kiswahili. Lina Kiingereza cha habari za miji mikubwa kuliko Sheng ya Eastlands, au Dholuo ya soko kando ya ziwa, au Gikuyu ya shamba la chai. Kwa hiyo zana mara nyingi ni laini kwa Kiingereza, ngumu zaidi kwa Kiswahili, na inapotea kwa Sheng. Inaweza kuchanganya lugha bila onyo. Inaweza kutafsiri methali neno kwa neno hadi maana ikafa.

Mifano ya nani humaanisha pia dunia ya nani. Ikiwa maandishi ya mafunzo yaliongea kuhusu majira ya baridi, dola na kabati za shule, modeli itafikia picha hizo. Insha ya Kenya kuhusu "majira" inaweza kurudi na theluji. Bei inaweza kuja kwa sarafu isiyo sahihi. "Duka" linaweza kuonekana kama supermarket, si kiosk au stendi ya jua kali.

Unaweza kusaidia bila kujifanya zana imekuwa ya Kenya usiku mmoja.

- Weka lugha kwenye prompt: "Jibu kwa Kiswahili rahisi." au "Tumia Kiingereza kifupi ambacho mwanafunzi wa Gredi ya 6 anaweza kusoma."
- Weka mahali kwenye prompt: "Tumia mifano ya Kenya: matatu, sukuma wiki, M-Pesa, CBC."
- Ukitumia Sheng, ongeza ombi lilelile kwa Kiswahili wazi au Kiingereza, ili kazi isichukuliwe na mtaani ambao modeli haikuona sana.
- Soma jibu ukitafuta samani za nchi nyingine. Theluji Kisumu ni kidokezo kwamba mifano ilitoka mahali pengine.

UNESCO imechapisha mifumo ya umahiri wa AI kwa wanafunzi na walimu. Nchi, Kenya ikiwemo, zinafanya kazi ya jinsi ya kufundisha stadi hizi. Huhitaji namba ya ukurasa. Unahitaji tabia: taja lugha yako na mahali pako, kisha kagua rasimu kwa mtu anayeishi hapa.

Prompt nzuri ya Kiswahili bado inatoa utabiri. Mwalimu anayesahihisha kazi ya CBC, au mzazi anayeongea lugha nyumbani, bado ndiye ukaguzi.`
      ),
      reveal([
        {
          termEn: "Training examples",
          termSw: "Mifano ya mafunzo",
          defEn: "The writing, photos or sounds a model learned from. What was rare in that pile stays weak in the model.",
          defSw: "Maandishi, picha au sauti ambazo modeli ilijifunza nazo. Kilichokuwa nadra kwenye lundo hilo kinabaki dhaifu kwenye modeli.",
        },
        {
          termEn: "Sheng",
          termSw: "Sheng",
          defEn: "A shifting street mix of Kiswahili, English and other Kenyan languages. Many chatbots saw little of it, so they guess badly.",
          defSw: "Mchanganyiko wa mitaani wa Kiswahili, Kiingereza na lugha nyingine za Kenya unaobadilika. Chatbot nyingi hazikuona mengi yake, kwa hiyo zinakisia vibaya.",
        },
        {
          termEn: "Language constraint",
          termSw: "Sharti la lugha",
          defEn: "A line in your prompt that names the language and the level, such as \"simple Kiswahili for Grade 5\".",
          defSw: "Mstari kwenye prompt yako unaotaja lugha na kiwango, kama \"Kiswahili rahisi kwa Gredi ya 5\".",
        },
        {
          termEn: "Foreign furniture",
          termSw: "Samani za nchi nyingine",
          defEn: "Details that belong to another country, such as snow, dollars or lockers, in an answer about Kenyan life.",
          defSw: "Maelezo ya nchi nyingine, kama theluji, dola au kabati za shule, ndani ya jibu kuhusu maisha ya Kenya.",
        },
        {
          termEn: "Restatement",
          termSw: "Kurudia kwa lugha wazi",
          defEn: "Saying the same request again in plain Kiswahili or English, so slang is not the only instruction.",
          defSw: "Kusema ombi lilelile tena kwa Kiswahili wazi au Kiingereza, ili mtaani usiwe maelekezo pekee.",
        },
      ]),
      note(
        "Worked example: Brian's Sheng homework in Mombasa",
        "Mfano kamili: kazi ya Sheng ya Brian Mombasa",
        `Brian, 13, in Mombasa, types a Sheng request: "Bro nisaidie tu nitoe points za hiyo essay ya climate, iwe fiti kwa mtaani."

The chatbot replies in stiff textbook Kiswahili mixed with English about polar bears and central heating. It has almost none of Mombasa: no heat, no monsoon, no coconut, no matatu. It missed the slang, then filled the gap with examples it saw more often.

Brian rewrites the prompt without throwing Sheng away. He keeps a short Sheng line for himself, then adds a clear restatement:

"Answer in simple Kiswahili a Form 1 learner can read. I live in Mombasa, Kenya. Give five short points for a school composition on how a hotter climate can affect a coastal town: heat, rain, fishing, and water. Do not talk about snow or polar bears. Do not use my name. Remind me to check the points with my geography teacher."

The second draft talks about heat on the island, rain that floods the estate, and fishers watching the sea. One sentence is still odd. Brian shows the page to his teacher, who crosses out the odd line and keeps the rest as a plan, not as the finished composition.

Sheng was not "wrong". It was rare in the model's examples. Plain language plus Kenyan context did the job. The teacher still owned the last mark.`,
        `Brian, mwenye miaka 13, Mombasa, anaandika ombi kwa Sheng: "Bro nisaidie tu nitoe points za hiyo essay ya climate, iwe fiti kwa mtaani."

Chatbot inajibu kwa Kiswahili kigumu cha vitabu kilichochanganywa na Kiingereza kuhusu dubu wa polar na joto la nyumba. Haina karibu chochote cha Mombasa: hakuna joto, masika, nazi wala matatu. Ilikosa mtaani, kisha ikajaza pengo kwa mifano iliyoiona mara nyingi.

Brian anaandika prompt upya bila kutupa Sheng. Anaweka mstari mfupi wa Sheng kwa ajili yake, kisha anaongeza kurudia kwa lugha wazi:

"Jibu kwa Kiswahili rahisi ambacho mwanafunzi wa kidato cha kwanza anaweza kusoma. Ninaishi Mombasa, Kenya. Nipe hoja tano fupi za insha ya shule kuhusu jinsi hali ya hewa yenye joto zaidi inavyoweza kuathiri mji wa pwani: joto, mvua, uvuvi na maji. Usizungumzie theluji wala dubu wa polar. Usitumie jina langu. Nikumbushe nizikague hoja na mwalimu wa jiografia."

Rasimu ya pili inazungumzia joto kisiwani, mvua inayofurika estate, na wavuvi wanaotazama bahari. Sentensi moja bado ni ya ajabu. Brian anamwonyesha ukurasa mwalimu, ambaye anafuta mstari wa ajabu na kuweka iliyobaki kama mpango, si insha kamili.

Sheng haikuwa "mbaya". Ilikuwa nadra kwenye mifano ya modeli. Lugha wazi pamoja na muktadha wa Kenya ndiyo iliyofanya kazi. Mwalimu bado alikuwa na alama ya mwisho.`
      ),
      scenario({
        titleEn: "Winter in a Kenyan composition",
        titleSw: "Majira ya baridi katika insha ya Kenya",
        situationEn: "A chatbot drafts a CBC composition titled \"The four seasons\" for a Grade 6 class in Nyahururu. The draft describes heavy snow, central heating, and children ice-skating to school. The learner likes the long words.",
        situationSw: "Chatbot inaandaa rasimu ya insha ya CBC iitwayo \"Majira manne\" kwa darasa la Gredi ya 6 Nyahururu. Rasimu inaeleza theluji nyingi, joto la nyumba, na watoto wakiteleza kwa barafu kwenda shuleni. Mwanafunzi anapenda maneno marefu.",
        questionEn: "What is the wisest next step?",
        questionSw: "Hatua yenye busara zaidi ni ipi?",
        optionsEn: [
          "Rewrite the prompt to ask for Kenyan weather the class actually knows, then check the new draft with the teacher before copying any sentence.",
          "Copy the snow paragraph, because long words raise the mark.",
          "Assume Nyahururu is cold enough that snow must be accurate.",
          "Translate the snow paragraph into Sheng and hand it in.",
        ],
        optionsSw: [
          "Andika prompt upya kuomba hali ya hewa ya Kenya ambayo darasa linaijua kweli, kisha kagua rasimu mpya na mwalimu kabla ya kunakili sentensi yoyote.",
          "Nakili aya ya theluji, kwa sababu maneno marefu yanainua alama.",
          "Chukulia Nyahururu ni baridi ya kutosha kwamba theluji lazima iwe sahihi.",
          "Tafsiri aya ya theluji kuwa Sheng na uiwasilishe.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. Snow and ice-skating are foreign furniture. Name Kenyan seasons and places in the prompt, then let a teacher check the facts.",
          "Long words are style. A composition full of weather the class has never seen is still wrong, and it is not the learner's work.",
          "Nyahururu is high and can be cold. That still does not make ice-skating to school a Kenyan Grade 6 fact. Check with a person who lives there.",
          "Sheng does not fix a false picture. It only changes the jacket on the same wrong examples.",
        ],
        hintsSw: [
          "Sahihi. Theluji na kuteleza kwa barafu ni samani za nchi nyingine. Taja majira na sehemu za Kenya kwenye prompt, kisha mwalimu akague ukweli.",
          "Maneno marefu ni mtindo. Insha yenye hali ya hewa ambayo darasa halijawahi kuona bado ni potovu, na si kazi ya mwanafunzi.",
          "Nyahururu iko juu na inaweza kuwa baridi. Hiyo bado haifanyi kuteleza kwa barafu kwenda shule kuwa ukweli wa Gredi ya 6 Kenya. Kagua na mtu anayeishi huko.",
          "Sheng hairekebishi picha ya uongo. Inabadilisha koti tu juu ya mifano ileile potovu.",
        ],
        explainEn: "When a draft is full of another country's life, the model is using the examples it saw most. Put language and place in the prompt, then verify with someone who knows the local weather and the CBC task.",
        explainSw: "Rasimu inapojaa maisha ya nchi nyingine, modeli inatumia mifano iliyoiona mara nyingi. Weka lugha na mahali kwenye prompt, kisha thibitisha na mtu anayejua hali ya hewa ya huko na kazi ya CBC.",
      }),
      quiz(
        "You want a chatbot to explain a proverb to a Grade 5 class in Kisumu. Which prompt part matters most for language?",
        "Unataka chatbot ieleze methali kwa darasa la Gredi ya 5 Kisumu. Sehemu ipi ya prompt ni muhimu zaidi kwa lugha?",
        [
          "Ask it to \"sound smart\" so the class is impressed",
          "Name the language and level, name Kisumu, and forbid word-for-word translation if it kills the meaning",
          "Write the whole request in Sheng only, with no restatement",
          "Ask for dollars and winter so the answer looks international",
        ],
        [
          "Iombe \"ionekane werevu\" ili darasa livutiwe",
          "Taja lugha na kiwango, taja Kisumu, na ukataze tafsiri neno kwa neno ikiua maana",
          "Andika ombi lote kwa Sheng tu, bila kurudia kwa lugha wazi",
          "Omba dola na majira ya baridi ili jibu lionekane la kimataifa",
        ],
        1,
        "Language and place belong in the prompt. Sheng-only requests are easy to miss, and foreign furniture does not help a Kisumu class understand a proverb.",
        "Lugha na mahali vinaingia kwenye prompt. Maombi ya Sheng pekee ni rahisi kukosa, na samani za nchi nyingine hazisaidii darasa la Kisumu kuelewa methali."
      ),
      note(
        "Try it: the foreign-furniture hunt",
        "Jaribu: uwindaji wa samani za nchi nyingine",
        `Ask a parent, teacher or older sibling to help you look at any one AI draft, or even a copied WhatsApp explanation.

On paper, list every detail that does not fit your town: currency, weather, school objects, food, jobs, street names.

Then write one replacement line the draft should have used instead, from your own life: matatu, uji, jua kali, sukuma wiki, M-Pesa, a Huduma Centre.

If you have no AI draft this week, take a paragraph from a foreign storybook and do the same hunt. The skill is the eye, not the phone.`,
        `Mwombe mzazi, mwalimu au ndugu mkubwa akusaidie kuangalia rasimu moja ya AI, au hata maelezo yaliyonakiliwa kutoka WhatsApp.

Kwenye karatasi, orodhesha kila undani usioendana na mji wako: sarafu, hali ya hewa, vitu vya shule, chakula, kazi, majina ya mitaa.

Kisha andika mstari mmoja wa badala ambao rasimu ingepaswa kutumia, kutoka maisha yako: matatu, uji, jua kali, sukuma wiki, M-Pesa, Kituo cha Huduma.

Kama huna rasimu ya AI wiki hii, chukua aya kutoka hadithi ya nchi nyingine na ufanye uwindaji uleule. Stadi ni jicho, si simu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Models are stronger in languages and worlds they saw most. Kiswahili and Sheng often need extra help in the prompt.
- Name the language, the level and the Kenyan place. Restate Sheng in plain words.
- Next unit: AI already in Kenyan daily life — SMS, keyboards, and farm or health advice — and the rule that people still decide.`,
        `- Modeli ni imara zaidi katika lugha na dunia zilizoiona mara nyingi. Kiswahili na Sheng mara nyingi zinahitaji msaada wa ziada kwenye prompt.
- Taja lugha, kiwango na mahali pa Kenya. Rudia Sheng kwa maneno wazi.
- Somo lijalo: AI tayari iko katika maisha ya kila siku nchini Kenya — SMS, kibodi, na ushauri wa shamba au afya — na kanuni kwamba watu bado ndio wanaamua.`
      ),
    ],
  },
  {
    id: "m0-b-u9",
    titleEn: "AI already in Kenyan daily life",
    titleSw: "AI tayari iko katika maisha ya kila siku nchini Kenya",
    cards: [
      note(
        "The tool suggests. A person decides.",
        "Zana inapendekeza. Mtu anaamua.",
        `You have already met learning software on a phone: a keyboard that guesses the next word, a map that guesses the time to the stage, maybe a camera that finds a face. Those tools did not arrive from another planet. They are already in Kenyan pockets.

Some newer tools speak more like a helper.

FarmerAI, launched in February 2025 by Safaricom and Opportunity International, reaches farmers through DigiFarm, SMS and WhatsApp. It began with a small potato-cycle pilot. A farmer can ask about a crop in the same channels they already use for money and messages. The tool can suggest. It cannot stand in the shamba and see the soil for you.

Agrika is built around a photo of a leaf. It can work without a strong internet signal. It speaks Kiswahili. Payments can ride on M-Pesa. Product suggestions are meant to stay in line with PCPB, the office that regulates pest-control products in Kenya. A photo is a clue, not a harvest. A registered agrovet or an afisa wa ugani still has to look at the plant, the weather and the money in the tin.

M-Kliniki Nia is an English and Kiswahili health assistant with rails into telemedicine and M-Pesa. It can help you prepare questions. It is not a doctor, a nurse or a CHP. A clinician decides about a body.

On 27 March 2025, Kenya launched the Kenya National AI Strategy 2025-2030 at KICC in Nairobi. The country is writing down how it wants these tools used. Strategy is not a magic shield. It is a sign that the work is public, not only private.

The through-line is small and sharp: tools help; people decide. A suggestion on SMS is a starting guess. The farmer, the clinician, the parent or the jua kali fundi still owns the next move. If the cost of a mistake is a crop, a body, or a week's takings, the person who lives with that cost must be the one who says yes.`,
        `Tayari umekutana na programu inayojifunza kwenye simu: kibodi inayokisia neno linalofuata, ramani inayokisia muda wa kufika stegi, huenda kamera inayotambua uso. Zana hizo hazikutoka sayari nyingine. Tayari ziko mifuniko ya Kenya.

Baadhi ya zana mpya zaidi zinaongea kama msaidizi.

FarmerAI, iliyozinduliwa Februari 2025 na Safaricom na Opportunity International, inawafikia wakulima kupitia DigiFarm, SMS na WhatsApp. Ilianza kwa jaribio dogo la mzunguko wa viazi. Mkulima anaweza kuuliza kuhusu zao kwa njia zilezile anazotumia tayari kwa pesa na ujumbe. Zana inaweza kupendekeza. Haiwezi kusimama shambani na kuona udongo kwa ajili yako.

Agrika imejengwa kuzunguka picha ya jani. Inaweza kufanya kazi bila mtandao imara. Inaongea Kiswahili. Malipo yanaweza kupita M-Pesa. Mapendekezo ya bidhaa yanalenga kuendana na PCPB, ofisi inayosimamia bidhaa za kudhibiti wadudu nchini Kenya. Picha ni kidokezo, si mavuno. Agrovet aliyesajiliwa au afisa wa ugani bado anatakiwa kuangalia mmea, hali ya hewa na pesa kwenye kopo.

M-Kliniki Nia ni msaidizi wa afya wa Kiingereza na Kiswahili wenye njia za telemedicine na M-Pesa. Inaweza kukusaidia kuandaa maswali. Si daktari, muuguzi wala CHP. Mtaalamu wa tiba ndiye anayeamua kuhusu mwili.

Tarehe 27 Machi 2025, Kenya ilizindua Mkakati wa Kitaifa wa AI 2025-2030 kwenye KICC Nairobi. Nchi inaandika jinsi inavyotaka zana hizi zitumike. Mkakati si ngao ya miujiza. Ni ishara kwamba kazi ni ya umma, si ya faragha tu.

Uzi unaounganisha ni mdogo na mkali: zana zinasaidia; watu wanaamua. Pendekezo kwenye SMS ni makisio ya kuanzia. Mkulima, mtaalamu wa tiba, mzazi au fundi wa jua kali bado ndiye mwenye hatua inayofuata. Gharama ya kukosea ikiwa ni zao, mwili, au mapato ya wiki, mtu anayeishi na gharama hiyo ndiye anayesema ndiyo.`
      ),
      reveal([
        {
          termEn: "Suggestion",
          termSw: "Pendekezo",
          defEn: "What an AI tool offers as a next step. It is a prediction, not an order.",
          defSw: "Kile zana ya AI inachotoa kama hatua inayofuata. Ni utabiri, si amri.",
        },
        {
          termEn: "FarmerAI",
          termSw: "FarmerAI",
          defEn: "A 2025 Safaricom and Opportunity International helper for farmers on DigiFarm, SMS and WhatsApp, begun as a small potato-cycle pilot.",
          defSw: "Msaidizi wa 2025 wa Safaricom na Opportunity International kwa wakulima kwenye DigiFarm, SMS na WhatsApp, ulioanza kama jaribio dogo la mzunguko wa viazi.",
        },
        {
          termEn: "Agrika",
          termSw: "Agrika",
          defEn: "A Kenyan tool that reads a photo of a leaf, can work offline, speaks Kiswahili, can take M-Pesa, and aims at PCPB-aligned products.",
          defSw: "Zana ya Kenya inayosoma picha ya jani, inaweza kufanya kazi bila mtandao, inaongea Kiswahili, inaweza kupokea M-Pesa, na inalenga bidhaa zinazoendana na PCPB.",
        },
        {
          termEn: "M-Kliniki Nia",
          termSw: "M-Kliniki Nia",
          defEn: "An English and Kiswahili health assistant with telemedicine and M-Pesa rails. It helps you prepare; a clinician decides.",
          defSw: "Msaidizi wa afya wa Kiingereza na Kiswahili wenye njia za telemedicine na M-Pesa. Inakusaidia kuandaa; mtaalamu wa tiba anaamua.",
        },
        {
          termEn: "Kenya National AI Strategy 2025-2030",
          termSw: "Mkakati wa Kitaifa wa AI 2025-2030",
          defEn: "Kenya's public plan for AI, launched on 27 March 2025 at KICC. It is a direction, not a guarantee that every tool is safe.",
          defSw: "Mpango wa umma wa Kenya kuhusu AI, uliozinduliwa tarehe 27 Machi 2025 kwenye KICC. Ni mwelekeo, si dhamana kwamba kila zana ni salama.",
        },
        {
          termEn: "Human decision",
          termSw: "Uamuzi wa binadamu",
          defEn: "The yes or no that belongs to the person who will live with the result, such as a farmer, a clinician or a parent.",
          defSw: "Ndiyo au hapana inayomilikiwa na mtu atakayeishi na matokeo, kama mkulima, mtaalamu wa tiba au mzazi.",
        },
      ]),
      note(
        "Worked example: Njeri's potato SMS in Nyandarua",
        "Mfano kamili: SMS ya viazi ya Njeri Nyandarua",
        `Njeri grows potatoes in Nyandarua. An SMS helper in the FarmerAI style tells her the crop may need a certain action this week. The message is short, in Kiswahili, and arrives on the same phone she uses for M-Pesa.

She does not plant or spray on the SMS alone.

- She walks the shamba and looks at the leaves herself.
- She asks a neighbour who planted a week earlier what they are seeing.
- She takes one leaf to a registered agrovet and asks whether any product the app named is PCPB-aligned and right for her field.
- If she is still unsure, she looks for the afisa wa ugani on the next market day.

The SMS saved her a starting idea. The neighbour and the agrovet saved her from treating a guess as an order. That is the whole unit in one afternoon: the channel can be modern; the decision stays human.

Where it would have gone wrong: if she had forwarded the SMS to a group as "the government has spoken", or if she had typed her ID and PIN into a reply box the message created.`,
        `Njeri analima viazi Nyandarua. Msaidizi wa SMS wa mtindo wa FarmerAI anamwambia zao linaweza kuhitaji hatua fulani wiki hii. Ujumbe ni mfupi, kwa Kiswahili, na unafika kwenye simu ileile anayotumia M-Pesa.

Hapandi wala kunyunyizia kwa SMS peke yake.

- Anatembea shambani na kuangalia majani mwenyewe.
- Anamuuliza jirani aliyepanda wiki moja mapema anachoona.
- Anachukua jani moja kwa agrovet aliyesajiliwa na kuuliza kama bidhaa yoyote programu iliyotaja inaendana na PCPB na inafaa shamba lake.
- Bado akiwa hana uhakika, anamtafuta afisa wa ugani siku ya soko inayofuata.

SMS ilimwokolea wazo la kuanzia. Jirani na agrovet walimwokoa asichukulie makisio kama amri. Hicho ndicho somo zima katika mchana mmoja: njia inaweza kuwa ya kisasa; uamuzi unabaki wa kibinadamu.

Ingekwenda kombo: kama angetuma SMS kwa kikundi kama "serikali imesema", au kama angeandika kitambulisho na PIN kwenye kisanduku cha kujibu kilichotengenezwa na ujumbe.`
      ),
      scenario({
        titleEn: "The leaf photo and the agrovet",
        titleSw: "Picha ya jani na agrovet",
        situationEn: "Samuel in Kitale takes a photo of a maize leaf with holes. An Agrika-style app, working offline, names a pest and a product it says is PCPB-aligned. The nearby agrovet looks at the same leaf and says the pattern is different, and he will not sell that spray this week. Samuel's brother says, \"The phone has seen more leaves than the shop. Spray.\"",
        situationSw: "Samuel Kitale anapiga picha ya jani la mahindi lenye mashimo. Programu ya mtindo wa Agrika, inayofanya kazi bila mtandao, inataja mdudu na bidhaa inayosema inaendana na PCPB. Agrovet wa karibu anaangalia jani lilelile na kusema ruwaza ni tofauti, na hatauza dawa hiyo wiki hii. Kaka wa Samuel anasema, \"Simu imeona majani mengi kuliko duka. Nyunyizia.\"",
        questionEn: "What should Samuel do?",
        questionSw: "Samuel afanye nini?",
        optionsEn: [
          "Treat the app as a suggestion, keep the photo, and follow the agrovet this week, or ask the afisa wa ugani if the two still disagree.",
          "Spray tonight, because an offline app must be more scientific than a shop.",
          "Throw the phone away and never use a leaf photo again.",
          "Paste the agrovet's name, till number and the photo into a public chatbot to settle the argument.",
        ],
        optionsSw: [
          "Chukulia programu kama pendekezo, iweke picha, na ufuate agrovet wiki hii, au muulize afisa wa ugani wawili wakiwa bado hawakubaliani.",
          "Nyunyizia usiku huu, kwa sababu programu isiyo na mtandao lazima iwe ya kisayansi kuliko duka.",
          "Tupa simu na usitumie picha ya jani tena kamwe.",
          "Nakili jina la agrovet, namba ya till na picha kwenye chatbot ya hadhara ili kumaliza mzozo.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. The app can be useful and still wrong on this leaf. A person who sees the field and sells PCPB-aligned products owns the decision this week.",
          "Offline is a design feature, not a proof of truth. One photo is a thin dataset.",
          "One disagreement does not make leaf photos useless. It shows why a person still decides.",
          "The agrovet's till and name are not yours to upload, and a public chatbot cannot see the shamba.",
        ],
        hintsSw: [
          "Sahihi. Programu inaweza kuwa na manufaa na bado ikose kwenye jani hili. Mtu anayeona shamba na kuuza bidhaa zinazoendana na PCPB ndiye mwenye uamuzi wiki hii.",
          "Kufanya kazi bila mtandao ni sifa ya kubuni, si uthibitisho wa ukweli. Picha moja ni seti nyembamba ya data.",
          "Kutokubaliana mara moja hakufanyi picha za majani kukosa faida. Kunaonyesha kwa nini mtu bado anaamua.",
          "Till na jina la agrovet si vyako kupakia, na chatbot ya hadhara haiwezi kuona shamba.",
        ],
        explainEn: "Farm tools can read a photo. They cannot carry the cost of a wrong spray. Compare the suggestion with a person who knows the crop, then decide.",
        explainSw: "Zana za kilimo zinaweza kusoma picha. Haziwezi kubeba gharama ya dawa isiyo sahihi. Linganisha pendekezo na mtu anayejua zao, kisha uamue.",
      }),
      quiz(
        "M-Kliniki Nia helps a parent write questions before a clinic visit. Who should decide the medicine?",
        "M-Kliniki Nia inamsaidia mzazi kuandika maswali kabla ya kwenda kliniki. Nani anapaswa kuamua dawa?",
        [
          "The chatbot, because it speaks Kiswahili and English",
          "The clinician at the clinic, using the child's body and history; the tool only helped prepare questions",
          "The M-Pesa agent who processed the telemedicine payment",
          "Whoever writes the longest message in the family WhatsApp group",
        ],
        [
          "Chatbot, kwa sababu inaongea Kiswahili na Kiingereza",
          "Mtaalamu wa tiba kwenye kliniki, akitumia mwili na historia ya mtoto; zana ilisaidia kuandaa maswali tu",
          "Wakala wa M-Pesa aliyeshughulikia malipo ya telemedicine",
          "Yeyote anayeandika ujumbe mrefu zaidi kwenye kikundi cha WhatsApp cha familia",
        ],
        1,
        "Language and a payment rail do not turn a helper into a prescriber. The clinician decides. The tool's job was the questions.",
        "Lugha na njia ya malipo hazigeuzi msaidizi kuwa muagizaji wa dawa. Mtaalamu wa tiba anaamua. Kazi ya zana ilikuwa maswali."
      ),
      note(
        "Try it: suggestion versus decision",
        "Jaribu: pendekezo dhidi ya uamuzi",
        `Draw two columns. Write "Suggestion" and "Decision".

List four tools you already meet: keyboard, map, SMS farm or health helper, video app, or a chatbot.

For each one, write one suggestion it makes, and who should decide whether to follow it. Example: keyboard suggests "yako"; you decide the word. SMS suggests a farm action; the farmer and agrovet decide.

Circle every row where a wrong yes would cost money, health, or safety. Those rows are the ones you will practise again in the next unit.`,
        `Chora safu mbili. Andika "Pendekezo" na "Uamuzi".

Orodhesha zana nne unazokutana nazo tayari: kibodi, ramani, msaidizi wa SMS wa shamba au afya, programu ya video, au chatbot.

Kwa kila moja, andika pendekezo moja inalotoa, na nani anapaswa kuamua kama atafuata. Mfano: kibodi inapendekeza "yako"; wewe unaamua neno. SMS inapendekeza hatua ya shamba; mkulima na agrovet wanaamua.

Zungushia kila mstari ambapo ndiyo isiyo sahihi ingegharimu pesa, afya au usalama. Hiyo ndiyo mistari utakayozidi kufanyia mazoezi somo lijalo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Kenyan tools already suggest on SMS, photos, keyboards and health chat. FarmerAI, Agrika and M-Kliniki Nia are helpers, not bosses.
- The Kenya National AI Strategy 2025-2030, launched 27 March 2025 at KICC, is the public plan around this work.
- Tools help. People decide.
- Next unit: the decisions a person must keep — health, money, law and safety.`,
        `- Zana za Kenya tayari zinapendekeza kwenye SMS, picha, kibodi na mazungumzo ya afya. FarmerAI, Agrika na M-Kliniki Nia ni wasaidizi, si mabosi.
- Mkakati wa Kitaifa wa AI 2025-2030, uliozinduliwa 27 Machi 2025 kwenye KICC, ndio mpango wa umma kuzunguka kazi hii.
- Zana zinasaidia. Watu wanaamua.
- Somo lijalo: maamuzi ambayo mtu lazima ayashike — afya, pesa, sheria na usalama.`
      ),
    ],
  },
  {
    id: "m0-b-u10",
    titleEn: "When a person must decide",
    titleSw: "Wakati mtu lazima aamue",
    cards: [
      note(
        "Four rooms a chatbot does not enter alone",
        "Vyumba vinne chatbot haingii peke yake",
        `Some questions are small: which word comes after Habari, whether to carry an umbrella. Some questions are not small. If a wrong yes can hurt a body, empty a wallet, put someone on the wrong side of the law, or leave a child unsafe, a person who can be held responsible must decide.

Think of four rooms.

Health. A chatbot or a helper such as M-Kliniki Nia can list questions to take to a clinic, or explain a word on a leaflet. It must not name a disease as yours, set a dose, or tell you to skip the CHP. A nurse, a doctor, a pharmacist or a CHP looks at the actual person. In an emergency you call 999 or 112, you do not wait for a paragraph.

Money. Drafting a polite message to a SACCO is fine. Sending M-Pesa, taking a loan, or changing a PIN because a chatbot said so is not. The person whose name is on the account decides, using a channel they already trust.

Law. A tool can explain a word in a tenancy note in simpler language. It cannot tell you to sign, to ignore a police summons, or to "write a statement that will win". A Huduma Centre, a police station, or a lawyer who has read the real paper owns that room.

Safety. "Should I meet this person? Is this road safe tonight? Can I stay home alone?" These are not puzzle questions. A parent, guardian, or someone who is physically with you decides. A fluent answer from a phone is not a companion.

School work sits next to these rooms. CBC wants you to understand. A chatbot may help you practise explaining photosynthesis. It may not sit the exam. The learner still has to know the thing.

The test is one sentence: who will live with the result? That person, or the professional whose job is that room, says yes or no. The tool stays in the corridor, holding a draft.`,
        `Baadhi ya maswali ni madogo: neno gani linafuata Habari, kama ubebe mwavuli. Baadhi si madogo. Ndiyo isiyo sahihi ikiweza kuumiza mwili, kumwaga mkoba, kumuweka mtu upande usio sahihi wa sheria, au kumwacha mtoto bila usalama, mtu anayeweza kuwajibika lazima aamue.

Fikiria vyumba vinne.

Afya. Chatbot au msaidizi kama M-Kliniki Nia inaweza kuorodhesha maswali ya kupeleka kliniki, au kueleza neno kwenye kijitabu. Haipaswi kuita ugonjwa kuwa wako, kuweka dozi, wala kukuambia umruke CHP. Muuguzi, daktari, mfamasia au CHP anaangalia mtu halisi. Dharurini unapiga 999 au 112, husubiri aya.

Pesa. Kuandika ujumbe wa adabu kwa SACCO ni sawa. Kutuma M-Pesa, kuchukua mkopo, au kubadilisha PIN kwa sababu chatbot ilisema hivyo si sawa. Mtu ambaye jina lake liko kwenye akaunti ndiye anaamua, akitumia njia anayoiamini tayari.

Sheria. Zana inaweza kueleza neno kwenye notisi ya kupanga kwa lugha rahisi. Haiwezi kukuambia utie sahihi, upuuze wito wa polisi, au "andika taarifa itakayoshinda". Kituo cha Huduma, kituo cha polisi, au wakili aliyesoma karatasi halisi ndiye mwenye chumba hicho.

Usalama. "Nikutane na mtu huyu? Barabara hii ni salama usiku huu? Naweza kukaa nyumbani peke yangu?" Haya si maswali ya fumbo. Mzazi, mlezi, au mtu aliye nawe kimwili ndiye anaamua. Jibu laini kutoka simu si mwenzako.

Kazi ya shule inakaa kando ya vyumba hivi. CBC inataka uelewe. Chatbot inaweza kukusaidia kufanya mazoezi ya kueleza usanisinuru (photosynthesis). Haiwezi kufanya mtihani. Mwanafunzi bado anatakiwa kujua kitu.

Kipimo ni sentensi moja: nani ataishi na matokeo? Mtu huyo, au mtaalamu ambaye kazi yake ni chumba hicho, ndiye anayesema ndiyo au hapana. Zana inabaki koridoni, ikiwa na rasimu.`
      ),
      reveal([
        {
          termEn: "High-stakes decision",
          termSw: "Uamuzi wa hatari kubwa",
          defEn: "A choice where a wrong yes can hurt a body, empty a wallet, break the law, or leave someone unsafe.",
          defSw: "Chaguo ambalo ndiyo isiyo sahihi inaweza kuumiza mwili, kumwaga mkoba, kuvunja sheria, au kumwacha mtu bila usalama.",
        },
        {
          termEn: "Dose",
          termSw: "Dozi",
          defEn: "How much medicine to take, and when. Only a clinician or pharmacist who sees the person may set this.",
          defSw: "Dawa kiasi gani ya kuchukua, na lini. Ni mtaalamu wa tiba au mfamasia anayeona mtu ndiye anayeweza kuiweka.",
        },
        {
          termEn: "Responsible person",
          termSw: "Mtu anayewajibika",
          defEn: "The adult or professional who will live with the result, or whose job is that room: parent, clinician, officer, fundi, teacher.",
          defSw: "Mtu mzima au mtaalamu atakayeishi na matokeo, au ambaye kazi yake ni chumba hicho: mzazi, mtaalamu wa tiba, afisa, fundi, mwalimu.",
        },
        {
          termEn: "Draft",
          termSw: "Rasimu",
          defEn: "A starting text or list from an AI tool. A draft is allowed. An un-checked action in a high-stakes room is not.",
          defSw: "Maandishi au orodha ya kuanzia kutoka zana ya AI. Rasimu inaruhusiwa. Hatua isiyokaguliwa katika chumba cha hatari kubwa hairuhusiwi.",
        },
        {
          termEn: "Emergency numbers",
          termSw: "Namba za dharura",
          defEn: "In Kenya, 999 or 112. You call a person. You do not wait for a chatbot paragraph.",
          defSw: "Nchini Kenya, 999 au 112. Unampigia mtu simu. Husubiri aya ya chatbot.",
        },
      ]),
      note(
        "Worked example: Kamau's oil in Industrial Area",
        "Mfano kamili: mafuta ya Kamau Industrial Area",
        `Kamau runs a small jua kali garage off Enterprise Road in Nairobi's Industrial Area. A chatbot, asked "Which oil for this engine?", names a grade and a brand in a confident paragraph. It cites "mechanics' forums" and no manual.

Oil is money and safety. The wrong grade can spoil an engine that a customer needs this week.

Kamau treats the paragraph as a draft, not a decision.

- He opens the vehicle handbook, the paper one in the glove box.
- He asks the older fundi at the next stall, who has rebuilt this engine type for years.
- He does not pour from a jerry can because a sentence sounded sure.

The handbook and the fundi agree on one grade. The chatbot had named another. Kamau uses the handbook. He still learned a useful question from the tool: "What does the handbook say, and who has rebuilt this engine?" That is a good use of AI in jua kali work. The person with grease on their hands decides.

If the question had been medicine for his child, he would have walked to a clinic, not to a forum the tool invented.`,
        `Kamau ana gara ndogo ya jua kali karibu na Enterprise Road, Industrial Area Nairobi. Chatbot, ikiulizwa "Mafuta gani kwa injini hii?", inataja daraja na chapa kwa aya yenye uhakika. Inataja "mabaraza ya mekanika" bila mwongozo.

Mafuta ni pesa na usalama. Daraja lisilo sahihi linaweza kuharibu injini ambayo mteja anaihitaji wiki hii.

Kamau anaichukulia aya kama rasimu, si uamuzi.

- Anafungua kitabu cha gari, kile cha karatasi kwenye sanduku la glove.
- Anamuuliza fundi mkubwa kwenye stendi jirani, ambaye ameunda upya aina hii ya injini kwa miaka.
- Hamimimini kutoka kopo kwa sababu sentensi ilisikika na uhakika.

Kitabu na fundi wanakubaliana daraja moja. Chatbot ilikuwa imetaja lingine. Kamau anatumia kitabu. Bado alijifunza swali lenye manufaa kutoka zana: "Kitabu kinasema nini, na nani ameunda injini hii upya?" Hiyo ndiyo matumizi mazuri ya AI katika kazi ya jua kali. Mtu mwenye grisi mikononi ndiye anaamua.

Swali likiwa dawa ya mtoto wake, angetembea kliniki, si baraza ambalo zana ilibuni.`
      ),
      scenario({
        titleEn: "A fever and a dose",
        titleSw: "Homa na dozi",
        situationEn: "Your cousin, aged 7, has a fever. A chatbot names a medicine and a dose \"for a child of that age\", in calm Kiswahili, and says the nearest clinic is probably closed. A neighbour says, \"Just give what the phone said.\"",
        situationSw: "Binamu yako, mwenye miaka 7, ana homa. Chatbot inataja dawa na dozi \"kwa mtoto wa umri huo\", kwa Kiswahili tulivu, na inasema kliniki ya karibu huenda imefungwa. Jirani anasema, \"Tu mpe kile simu ilisema.\"",
        questionEn: "What must happen next?",
        questionSw: "Ni nini lazima kifanyike sasa?",
        optionsEn: [
          "A parent or guardian takes the child to a clinician, pharmacist or CHP, or calls 999 or 112 if the child is getting worse. Nobody gives a chatbot dose.",
          "Give the dose, because the Kiswahili was calm and specific.",
          "Wait until morning and ask the chatbot again, hoping for a different paragraph.",
          "Post the child's full name, age and symptoms in a public group so strangers can vote.",
        ],
        optionsSw: [
          "Mzazi au mlezi ampeleke mtoto kwa mtaalamu wa tiba, mfamasia au CHP, au apige 999 au 112 mtoto akizidi kuwa mbaya. Hakuna anayetoa dozi ya chatbot.",
          "Mpe dozi, kwa sababu Kiswahili kilikuwa tulivu na mahususi.",
          "Subiri hadi asubuhi na uiulize chatbot tena, ukitumaini aya tofauti.",
          "Weka jina kamili la mtoto, umri na dalili kwenye kikundi cha hadhara ili wageni wapige kura.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. Dose and diagnosis are a clinician's room. Calm language is not a stethoscope. Emergency numbers exist for a reason.",
          "Specific is not the same as true. A guessed dose can harm a child.",
          "A fever can change in the night. Asking the same tool twice is not care.",
          "A child's name and symptoms are personal data, and a vote is not medicine.",
        ],
        hintsSw: [
          "Sahihi. Dozi na utambuzi ni chumba cha mtaalamu wa tiba. Lugha tulivu si stetoskopu. Namba za dharura zipo kwa sababu.",
          "Mahususi si sawa na kweli. Dozi iliyokisiwa inaweza kumdhuru mtoto.",
          "Homa inaweza kubadilika usiku. Kuiuliza zana ileile mara mbili si matibabu.",
          "Jina na dalili za mtoto ni data binafsi, na kura si dawa.",
        ],
        explainEn: "Health is a high-stakes room. An AI helper may help you list questions. A person who can see the child decides the care. Never type a child's identity into a public chatbot while you wait.",
        explainSw: "Afya ni chumba cha hatari kubwa. Msaidizi wa AI anaweza kukusaidia kuorodhesha maswali. Mtu anayeweza kumuona mtoto ndiye anayeamua matunzo. Usiandike utambulisho wa mtoto kwenye chatbot ya hadhara unaposubiri.",
      }),
      quiz(
        "Which job is fair for a chatbot, and which must stay with a person?",
        "Kazi ipi inafaa chatbot, na ipi lazima ibaki kwa mtu?",
        [
          "Fair: send the M-Pesa. Person: check the spelling of a SACCO letter.",
          "Fair: draft questions for a clinic visit. Person: choose the medicine.",
          "Fair: decide if a night road is safe. Person: suggest a proverb.",
          "Fair: sign a tenancy note. Person: explain a hard word in it.",
        ],
        [
          "Sawa kwa chatbot: tuma M-Pesa. Kwa mtu: kagua tahajia ya barua ya SACCO.",
          "Sawa kwa chatbot: andaa maswali ya ziara ya kliniki. Kwa mtu: chagua dawa.",
          "Sawa kwa chatbot: amua kama barabara ya usiku ni salama. Kwa mtu: pendekeza methali.",
          "Sawa kwa chatbot: tia sahihi kwenye notisi ya kupanga. Kwa mtu: eleza neno gumu ndani yake.",
        ],
        1,
        "Drafting questions is a corridor job. Medicine, money transfers, night safety and signatures are rooms a person must keep.",
        "Kuandaa maswali ni kazi ya korido. Dawa, kutuma pesa, usalama wa usiku na saini ni vyumba ambavyo mtu lazima avishike."
      ),
      note(
        "Try it: label the four rooms",
        "Jaribu: tia lebo kwenye vyumba vinne",
        `Fold a page into four squares. Label them Health, Money, Law, Safety.

In each square write:

- One question a chatbot may help you draft.
- One action only a person may take.
- The name of the person or office you would actually ask in your town (CHP, agrovet, parent, Huduma Centre, police station, teacher, fundi).

Read the page to a grown-up. Ask them to add one extra line to any square that is thin. Keep the page in your homework book. You will use it in the practice studio next.`,
        `Kunja ukurasa kuwa miraba minne. Ipe lebo Afya, Pesa, Sheria, Usalama.

Katika kila mraba andika:

- Swali moja chatbot inaweza kukusaidia kuandaa.
- Hatua moja ambayo mtu peke yake anaweza kuchukua.
- Jina la mtu au ofisi ambayo ungeuliza kweli mji wako (CHP, agrovet, mzazi, Kituo cha Huduma, kituo cha polisi, mwalimu, fundi).

Usome ukurasa kwa mtu mzima. Mwombe aongeze mstari moja kwenye mraba wowote ulio mwembamba. Uweke ukurasa kwenye daftari la kazi. Utautumia katika studio ya mazoezi inayofuata.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Health, money, law and safety are rooms a person must keep. AI may hold a draft in the corridor.
- Who will live with the result? That person decides.
- Next unit: practice studio — assemble a strong prompt and a verification plan.`,
        `- Afya, pesa, sheria na usalama ni vyumba ambavyo mtu lazima avishike. AI inaweza kushika rasimu koridoni.
- Nani ataishi na matokeo? Mtu huyo anaamua.
- Somo lijalo: studio ya mazoezi — unda prompt imara na mpango wa uthibitisho.`
      ),
    ],
  },
  {
    id: "m0-b-u11",
    titleEn: "Practice studio: prompt and verification",
    titleSw: "Studio ya mazoezi: prompt na uthibitisho",
    cards: [
      note(
        "One job, done in four steps",
        "Kazi moja, kwa hatua nne",
        `This unit is a workshop, not a new theory. You already have the pieces: a strong prompt, no personal data, a prediction you do not worship, and a person who must decide.

Put them in order.

- Step 1. Write the prompt. Name the role, the task, the Kenyan context and the constraints. Use general words. No full name, no school, no PIN, no ID, no exact home.
- Step 2. Read the answer as a prediction. Hunt for hallucinations, missing sources and foreign furniture.
- Step 3. Write a verification plan before you act. Who will you ask? Which office? What exactly will you check? If the job sits in health, money, law or safety, the plan is the work. You do not skip to action.
- Step 4. Act only if the cost of being wrong is small, and only after the check. If the cost is a body, a wallet, a court paper or a child's safety, stop at the check.

A verification plan is not "I will be careful". It is a name and a place. "I will ask Mr Mwangi, the agriculture teacher, on Tuesday, whether these compost steps match what we do in the school garden." That sentence is the difference between a studio and a wish.

If you cannot name the person, you are not ready to use the answer.`,
        `Somo hili ni warsha, si nadharia mpya. Tayari una vipande: prompt imara, bila data binafsi, utabiri usiopaswa kuaminiwa bila kukaguliwa, na mtu ambaye lazima aamue.

Viweke kwa mpangilio.

- Hatua ya 1. Andika prompt. Taja nafasi, kazi, muktadha wa Kenya na masharti. Tumia maneno ya jumla. Hakuna jina kamili, shule, PIN, kitambulisho wala nyumba kamili.
- Hatua ya 2. Soma jibu kama utabiri. Winda hallucination, vyanzo vinavyokosekana na samani za nchi nyingine.
- Hatua ya 3. Andika mpango wa uthibitisho kabla ya kutenda. Utamwuliza nani? Ofisi ipi? Utakagua nini hasa? Kazi ikiwa katika afya, pesa, sheria au usalama, mpango ndiyo kazi. Usiruke moja kwa moja kwenye kutenda.
- Hatua ya 4. Tenda tu kama gharama ya kukosea ni ndogo, na tu baada ya ukaguzi. Gharama ikiwa ni mwili, mkoba, karatasi ya mahakama au usalama wa mtoto, simama kwenye ukaguzi.

Mpango wa uthibitisho si "nitakuwa mwangalifu". Ni jina na mahali. "Nitamwuliza Bw Mwangi, mwalimu wa kilimo, Jumanne, kama hatua hizi za mboji zinaendana na tunachofanya bustanini shuleni." Sentensi hiyo ndiyo tofauti kati ya studio na matakwa.

Usipoweza kutaja mtu huyo, bado hujaiva kutumia jibu.`
      ),
      reveal([
        {
          termEn: "Verification plan",
          termSw: "Mpango wa uthibitisho",
          defEn: "A named person or office, a time, and the exact thing you will check before you act on an AI answer.",
          defSw: "Mtu au ofisi iliyotajwa, muda, na kitu kamili utakachokagua kabla ya kutenda kulingana na jibu la AI.",
        },
        {
          termEn: "Studio cycle",
          termSw: "Mzunguko wa studio",
          defEn: "Prompt, read as prediction, plan the check, then act only if the cost of a mistake is small.",
          defSw: "Prompt, soma kama utabiri, panga ukaguzi, kisha tenda tu kama gharama ya kukosea ni ndogo.",
        },
        {
          termEn: "General words",
          termSw: "Maneno ya jumla",
          defEn: "Wording that does the job without personal data, such as \"a Form 2 learner in Kisumu\".",
          defSw: "Maneno yanayofanya kazi bila data binafsi, kama \"mwanafunzi wa kidato cha pili Kisumu\".",
        },
        {
          termEn: "Ready-to-act test",
          termSw: "Kipimo cha utayari wa kutenda",
          defEn: "You may act when a trusted person has checked, and when a wrong yes would not harm health, money, law or safety.",
          defSw: "Unaweza kutenda mtu wa kuaminika alishakagua, na ndiyo isiyo sahihi isingeumiza afya, pesa, sheria wala usalama.",
        },
      ]),
      note(
        "Worked example: Faith's compost poster in Kisumu",
        "Mfano kamili: bango la mboji la Faith Kisumu",
        `Faith is in Form 1 in Kisumu. The 4-K club wants a one-page poster on compost for the school garden. She will use a chatbot for a first draft, then a teacher for the truth.

Her prompt (general words):

"You are an agriculture teacher in Kisumu. Draft ten short bullet lines for a school poster on making compost from kitchen waste and dry leaves. Simple English a Form 1 learner can read. Use Kenyan materials: sukuma stalks, maize cobs, dry grass. Do not name a shop, a brand or a chemical. Do not ask for my name or school. End by listing three things I should confirm with an agriculture teacher before we print."

The draft comes back fluent. One line names a powder she has never seen. One line talks about "autumn leaves". Those are a hallucination and foreign furniture.

Her verification plan, written before she likes the poster:

- Who: Mr Omondi, agriculture teacher, staff room, Wednesday.
- What: Do these steps match our garden? Which line should be deleted? May we print?
- Until he answers: no poster on the wall, no sharing in the class group.

Mr Omondi keeps six lines, kills the powder, replaces autumn with "dry season grass", and adds a reminder not to compost cooked meat. Faith copies the checked lines by hand onto manila paper. The chatbot saved time. The teacher saved the club from teaching a false step.`,
        `Faith yuko kidato cha kwanza Kisumu. Klabu ya 4-K inataka bango la ukurasa mmoja kuhusu mboji kwa bustani ya shule. Atatumia chatbot kwa rasimu ya kwanza, kisha mwalimu kwa ukweli.

Prompt yake (maneno ya jumla):

"Wewe ni mwalimu wa kilimo Kisumu. Andika mistari kumi fupi ya bango la shule kuhusu kutengeneza mboji kutoka taka za jikoni na majani makavu. Kiingereza rahisi ambacho mwanafunzi wa kidato cha kwanza anaweza kusoma. Tumia vifaa vya Kenya: mabua ya sukuma, magunzi ya mahindi, nyasi kavu. Usitaje duka, chapa au kemikali. Usinilize jina wala shule. Maliza kwa kuorodhesha mambo matatu ninayopaswa kuthibitisha na mwalimu wa kilimo kabla hatujachapisha."

Rasimu inarudi laini. Mstari mmoja unataja unga ambao hajawahi kuuona. Mstari mmoja unazungumzia "majani ya autumn". Hiyo ni hallucination na samani za nchi nyingine.

Mpango wake wa uthibitisho, ulioandikwa kabla hajapenda bango:

- Nani: Bw Omondi, mwalimu wa kilimo, chumba cha walimu, Jumatano.
- Nini: Je, hatua hizi zinaendana na bustani yetu? Mstari upi ufutwe? Tunaweza kuchapisha?
- Mpaka ajibu: hakuna bango ukutani, hakuna kushiriki kwenye kikundi cha darasa.

Bw Omondi anaweka mistari sita, anaua unga, anabadilisha autumn kuwa "nyasi za kiangazi", na anaongeza ukumbusho wa kutoa nyama iliyopikwa kwenye mboji. Faith ananakili mistari iliyokaguliwa kwa mkono kwenye manila. Chatbot iliokoa muda. Mwalimu aliokoa klabu isifundishe hatua potovu.`
      ),
      pb({
        titleEn: "Assemble Faith's prompt",
        titleSw: "Unda prompt ya Faith",
        introEn:
          "Build a prompt that could go to a chatbot for a school compost poster. Include role, task, Kenyan context, limits, no personal data, and a request for what to verify with a teacher. Leave out the block that names a real learner.",
        introSw:
          "Tengeneza prompt inayoweza kwenda kwa chatbot kwa bango la mboji la shule. Jumlisha nafasi, kazi, muktadha wa Kenya, mipaka, bila data binafsi, na ombi la kile cha kuthibitisha na mwalimu. Acha kipande kinachotaja mwanafunzi halisi.",
        goalEn: "Include role, task, Kisumu context, constraints, a ban on personal data, and a verification request. Do not include a real name.",
        goalSw: "Jumlisha nafasi, kazi, muktadha wa Kisumu, masharti, katazo la data binafsi, na ombi la uthibitisho. Usijumuishe jina halisi.",
        blocksEn: [
          "Role: You are an agriculture teacher in Kisumu.",
          "Task: Draft ten short bullet lines for a school compost poster.",
          "Context: Form 1 learners; materials are sukuma stalks, maize cobs and dry grass.",
          "Constraint: Simple English. No shops, brands or chemicals.",
          "Constraint: Do not ask for anyone's name, school, PIN or home.",
          "Ask: List three things I must confirm with the agriculture teacher before we print.",
          "Add: I am Faith Achieng, Adm No. 1842, Kisumu Day Secondary.",
        ],
        blocksSw: [
          "Nafasi: Wewe ni mwalimu wa kilimo Kisumu.",
          "Kazi: Andika mistari kumi fupi ya bango la mboji la shule.",
          "Muktadha: Wanafunzi wa kidato cha kwanza; vifaa ni mabua ya sukuma, magunzi ya mahindi na nyasi kavu.",
          "Sharti: Kiingereza rahisi. Hakuna maduka, chapa wala kemikali.",
          "Sharti: Usinilize jina, shule, PIN wala nyumba ya mtu yeyote.",
          "Omba: Orodhesha mambo matatu lazima nithibitishe na mwalimu wa kilimo kabla hatujachapisha.",
          "Ongeza: Mimi ni Faith Achieng, Namba ya usajili 1842, Kisumu Day Secondary.",
        ],
        required: [0, 1, 2, 3, 4, 5],
        sampleEn:
          "Role: You are an agriculture teacher in Kisumu. Task: Draft ten short bullet lines for a school compost poster. Context: Form 1 learners; materials are sukuma stalks, maize cobs and dry grass. Simple English. No shops, brands or chemicals. Do not ask for anyone's name, school, PIN or home. List three things I must confirm with the agriculture teacher before we print.",
        sampleSw:
          "Nafasi: Wewe ni mwalimu wa kilimo Kisumu. Kazi: Andika mistari kumi fupi ya bango la mboji la shule. Muktadha: Wanafunzi wa kidato cha kwanza; vifaa ni mabua ya sukuma, magunzi na nyasi kavu. Kiingereza rahisi. Hakuna maduka, chapa wala kemikali. Usinilize jina, shule, PIN wala nyumba. Orodhesha mambo matatu lazima nithibitishe na mwalimu wa kilimo kabla hatujachapisha.",
      }),
      scenario({
        titleEn: "Print it today",
        titleSw: "Chapisha leo",
        situationEn: "Faith's classmate wants to paste the chatbot poster into the class WhatsApp group this afternoon, including two lines the teacher has not seen: a powder name and a claim that \"KALRO requires this mix\". Faith has not yet met Mr Omondi.",
        situationSw: "Mwanafunzi mwenzake wa Faith anataka kuweka bango la chatbot kwenye kikundi cha WhatsApp cha darasa mchana huu, pamoja na mistari miwili mwalimu hajayaona: jina la unga na dai kwamba \"KALRO inahitaji mchanganyiko huu\". Faith bado hajakutana na Bw Omondi.",
        questionEn: "What should Faith do?",
        questionSw: "Faith afanye nini?",
        optionsEn: [
          "Hold the poster. Remove the un-checked lines. Meet the teacher with the verification plan before anyone prints or forwards.",
          "Post it now, because the group will correct any mistakes in the comments.",
          "Change KALRO to UNESCO so it sounds more international, then post.",
          "Add her admission number so the teacher can find her faster after it is posted.",
        ],
        optionsSw: [
          "Zuia bango. Ondoa mistari ambayo haijakaguliwa. Kutana na mwalimu ukiwa na mpango wa uthibitisho kabla mtu yeyote hajachapisha au kutuma.",
          "Iweke sasa, kwa sababu kikundi kitasahihisha makosa kwenye maoni.",
          "Badilisha KALRO iwe UNESCO ili ionekane ya kimataifa zaidi, kisha iweke.",
          "Ongeza namba yake ya usajili ili mwalimu ampate haraka baada ya kuwekwa.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. A named institution without a document is a missing source. The group is not a verification plan. The teacher is.",
          "Comments after a forward spread the mistake first. Checking comes before sharing.",
          "Swapping one famous name for another is still an invented source. UNESCO frameworks exist; they do not bless this powder.",
          "An admission number is personal data. It does not make an un-checked poster safe.",
        ],
        hintsSw: [
          "Sahihi. Taasisi iliyotajwa bila waraka ni chanzo kinachokosekana. Kikundi si mpango wa uthibitisho. Mwalimu ndiye.",
          "Maoni baada ya kutuma yanaeneza kosa kwanza. Kukagua kunakuja kabla ya kushiriki.",
          "Kubadilisha jina maarufu kwa lingine bado ni chanzo kilichobuniwa. Mifumo ya UNESCO ipo; haibariki unga huu.",
          "Namba ya usajili ni data binafsi. Haifanyi bango lisilokaguliwa kuwa salama.",
        ],
        explainEn: "A strong prompt is only half the studio. The verification plan must run before print, forward, or wall. Invented institutions and personal data both fail the test.",
        explainSw: "Prompt imara ni nusu ya studio tu. Mpango wa uthibitisho lazima uende kabla ya chapisho, ujumbe au ukuta. Taasisi zilizobuniwa na data binafsi zote zinashindwa kipimo.",
      }),
      quiz(
        "What makes a verification plan real, rather than a wish?",
        "Nini hufanya mpango wa uthibitisho kuwa wa kweli, si matakwa?",
        [
          "The sentence \"I will be careful\" written three times",
          "A named person or office, the thing you will check, and no action until that check is done",
          "Asking the chatbot to confirm its own poster",
          "Posting first so that errors can be found in public",
        ],
        [
          "Sentensi \"nitakuwa mwangalifu\" iliyoandikwa mara tatu",
          "Mtu au ofisi iliyotajwa, kitu utakachokagua, na hakuna hatua mpaka ukaguzi uwe umefanyika",
          "Kuomba chatbot ithibitishe bango lake lenyewe",
          "Kuweka kwanza ili makosa yapatikane hadharani",
        ],
        1,
        "A plan needs a name, a check, and a pause. Carefulness as a feeling, self-checking chatbots, and public trial-and-error are not verification.",
        "Mpango unahitaji jina, ukaguzi na kusimama. Uangalifu kama hisia, chatbot kujikagua, na kujaribu hadharani si uthibitisho."
      ),
      note(
        "Try it: prompt plus plan on one page",
        "Jaribu: prompt pamoja na mpango kwenye ukurasa mmoja",
        `Pick one small, low-stakes job from real life this week: a club poster, a market list, a speech outline, a list of questions for a clinic visit. Not medicine. Not M-Pesa. Not a legal paper.

On the top half, write a strong prompt: role, task, Kenyan context, constraints, no personal data.

On the bottom half, write the verification plan: who, where, what you will check, and what you will not do until they answer.

Read both halves to a parent or teacher. If they cannot tell who will check, rewrite the bottom half. Keep the page. You will need those habits for the last unit.`,
        `Chagua kazi moja ndogo, yenye hatari ndogo, kutoka maisha halisi wiki hii: bango la klabu, orodha ya soko, mfumo wa hotuba, orodha ya maswali ya ziara ya kliniki. Si dawa. Si M-Pesa. Si karatasi ya kisheria.

Nusu ya juu, andika prompt imara: nafasi, kazi, muktadha wa Kenya, masharti, bila data binafsi.

Nusu ya chini, andika mpango wa uthibitisho: nani, wapi, utakagua nini, na hutofanya nini mpaka wajibu.

Soma nusu zote kwa mzazi au mwalimu. Wakishindwa kuona nani atakagua, andika nusu ya chini upya. Iweke karatasi. Utahitaji tabia hizo kwa somo la mwisho.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Studio cycle: strong prompt, read as prediction, named verification plan, then act only if the cost is small.
- Personal data stays out. Invented offices stay out.
- Next unit: checkpoint — the habits of an AI-literate Kenyan.`,
        `- Mzunguko wa studio: prompt imara, soma kama utabiri, mpango wa uthibitisho wenye jina, kisha tenda tu kama gharama ni ndogo.
- Data binafsi inabaki nje. Ofisi zilizobuniwa zinabaki nje.
- Somo lijalo: kituo cha kukagua — tabia za Mkenya anayefahamu AI.`
      ),
    ],
  },
  {
    id: "m0-b-u12",
    titleEn: "Checkpoint: habits of an AI-literate Kenyan",
    titleSw: "Kituo cha kukagua: tabia za Mkenya anayefahamu AI",
    cards: [
      note(
        "A day that uses the whole course",
        "Siku inayotumia kozi yote",
        `Akinyi is 16, in Kisumu. She wants to use AI tools without handing them her life, her money, or her school honour.

In the morning the keyboard suggests "yako" after "Habari". She knows it learned a pattern from her past, so she can reject the guess. That is unit 1 and 2 in one tap.

At break a classmate wants a chatbot to "do the chemistry homework". Akinyi writes a strong prompt instead: a Form 2 teacher in Kisumu, five short sentences on how soap works, simple English, no invented scientist, no names or school, and a reminder to check the textbook. The draft is a prediction. She compares it with the CBC book and her teacher. That is prompt, hallucination watch, and a person deciding.

A WhatsApp note claims her M-Pesa will close unless she sends a PIN. The Kiswahili is perfect. She stops, checks on the channel the family already uses, and tells her mother. Perfect language was the bait.

In the afternoon an SMS in the FarmerAI style offers potato advice for an uncle in Nyandarua. The uncle still walks the shamba and asks an agrovet. The tool helped. The farmer decided.

She did not need slogans. She needed habits:

- Treat AI as a tool made by people, not a person inside the phone.
- Remember that a model knows only the examples it saw, including whose language and whose world.
- Read every output as a prediction. Smooth sentences can be false. Missing sources have no handle.
- Write prompts with role, task, context and constraints, in general words.
- Keep names, school, PIN, ID, photos and exact location out of a public chatbot. The Data Protection Act 2019 and the ODPC exist; a grown-up still sits beside a child.
- Stop-Check-Tell when money, urgency or secrecy appear.
- Let a person keep the rooms of health, money, law and safety.

UNESCO has published AI competency frameworks. Kenya launched the National AI Strategy 2025-2030 at KICC on 27 March 2025. Papers set a direction. You carry the habits into farm, clinic, classroom and workshop.`,
        `Akinyi ana miaka 16, Kisumu. Anataka kutumia zana za AI bila kuzikabidhi maisha yake, pesa yake, au heshima ya shule.

Asubuhi kibodi inapendekeza "yako" baada ya "Habari". Anajua ilijifunza ruwaza kutoka yaliyopita, kwa hiyo anaweza kukataa makisio. Hiyo ni somo la 1 na 2 kwa mguso mmoja.

Kati ya vipindi mwanafunzi mwenzake anataka chatbot "ifanye kazi ya kemia". Akinyi anaandika prompt imara badala yake: mwalimu wa kidato cha pili Kisumu, sentensi tano fupi kuhusu sabuni inavyofanya kazi, Kiingereza rahisi, bila mwanasayansi aliyebuniwa, bila majina wala shule, na ukumbusho wa kukagua kitabu cha kiada. Rasimu ni utabiri. Anailinganisha na kitabu cha CBC na mwalimu wake. Hiyo ni prompt, kuwinda hallucination, na mtu kuamua.

Ujumbe wa WhatsApp unasema M-Pesa yake itafungwa asipotuma PIN. Kiswahili ni kamilifu. Anasimama, anakagua kwa njia familia tayari inaitumia, na anamweleza mama yake. Lugha kamilifu ilikuwa chambo.

Mchana SMS ya mtindo wa FarmerAI inatoa ushauri wa viazi kwa mjomba Nyandarua. Mjomba bado anatembea shambani na kuuliza agrovet. Zana ilisaidia. Mkulima aliamua.

Hakutaka kauli mbiu. Alihitaji tabia:

- Chukulia AI kama chombo kilichotengenezwa na watu, si mtu ndani ya simu.
- Kumbuka modeli inajua mifano iliyoiona tu, pamoja na lugha ya nani na dunia ya nani.
- Soma kila tokeo kama utabiri. Sentensi laini zinaweza kuwa za uongo. Vyanzo vinavyokosekana havina kipini.
- Andika prompt zenye nafasi, kazi, muktadha na masharti, kwa maneno ya jumla.
- Weka majina, shule, PIN, kitambulisho, picha na mahali kamili nje ya chatbot ya hadhara. Sheria ya Ulinzi wa Data ya 2019 na ODPC zipo; mtu mzima bado anakaa kando ya mtoto.
- Simama-Kagua-Eleza pesa, haraka au siri zinapotokea.
- Acha mtu ashike vyumba vya afya, pesa, sheria na usalama.

Mifumo ya umahiri wa AI ya UNESCO ipo kwa wanafunzi na walimu. Kenya ilizindua Mkakati wa Kitaifa wa AI 2025-2030 kwenye KICC tarehe 27 Machi 2025. Karatasi hizo zinaweka mwelekeo. Tabia zako ndizo unazobeba shambani, kliniki, darasani na warshani.`
      ),
      reveal([
        {
          termEn: "AI-literate",
          termSw: "Mwenye elimu ya AI",
          defEn: "A person who can use AI tools with clear prompts, without giving away personal data, and who checks before they act.",
          defSw: "Mtu anayeweza kutumia zana za AI kwa prompt zilizo wazi, bila kutoa data binafsi, na anayekagua kabla ya kutenda.",
        },
        {
          termEn: "Habit",
          termSw: "Tabia",
          defEn: "Something you do every time, not a slogan you recite once: prompt, protect data, verify, stop on scams, let people decide.",
          defSw: "Kitu unachofanya kila mara, si kauli mbiu unayoita mara moja: prompt, linda data, thibitisha, simama kwenye ulaghai, watu waamue.",
        },
        {
          termEn: "Public papers",
          termSw: "Karatasi za umma",
          defEn: "Kenya's National AI Strategy 2025-2030 and UNESCO's AI competency frameworks. They set a direction. They do not replace your check.",
          defSw: "Mkakati wa Kitaifa wa AI 2025-2030 wa Kenya na mifumo ya umahiri wa AI ya UNESCO. Zinaweka mwelekeo. Hazibadilishi ukaguzi wako.",
        },
        {
          termEn: "Corridor versus room",
          termSw: "Korido dhidi ya chumba",
          defEn: "The tool may hold a draft in the corridor. Health, money, law and safety stay rooms a person must keep.",
          defSw: "Zana inaweza kushika rasimu koridoni. Afya, pesa, sheria na usalama yanabaki vyumba ambavyo mtu lazima avishike.",
        },
        {
          termEn: "Carry the habits",
          termSw: "Beba tabia",
          defEn: "Using these habits in the next modules — farming, health, school and work — instead of leaving them in this course.",
          defSw: "Kutumia tabia hizi katika moduli zijazo — kilimo, afya, shule na kazi — badala ya kuziacha katika kozi hii.",
        },
      ]),
      note(
        "Worked example: Akinyi's club minutes",
        "Mfano kamili: kumbukumbu za klabu ya Akinyi",
        `Akinyi's science club needs minutes of a one-hour meeting about a kitchen-garden project. She uses the studio cycle on paper first, then the phone.

Prompt, general words: "You are a Form 2 science teacher in Kisumu. Turn these notes into one-page minutes in simple English: we agreed to start a compost heap, we need six jerrycans, we will ask the agriculture teacher before buying anything. Do not invent attendance. Do not ask for names or a school. List what I must check with the club chair and the teacher."

The draft invents three people who were not in the room and a "KES 8,000 grant from a foundation". That is a hallucination plus a missing source. She deletes both.

Verification plan: club chair tonight; agriculture teacher tomorrow; no money moves; no names added from memory.

The chair confirms attendance from the paper register. The teacher confirms the compost steps. Akinyi writes the final minutes by hand. The chatbot saved her the shape of a page. The people who were in the room saved the truth.

That is what an AI-literate Kenyan looks like on an ordinary Tuesday: not a person who never uses a tool, and not a person who pastes whatever the tool sang.`,
        `Klabu ya sayansi ya Akinyi inahitaji kumbukumbu za mkutano wa saa moja kuhusu mradi wa bustani ya jikoni. Anatumia mzunguko wa studio kwenye karatasi kwanza, kisha simu.

Prompt, maneno ya jumla: "Wewe ni mwalimu wa sayansi wa kidato cha pili Kisumu. Geuza madokezo haya kuwa kumbukumbu za ukurasa mmoja kwa Kiingereza rahisi: tulikubali kuanza lundo la mboji, tunahitaji ndoo sita, tutamuuliza mwalimu wa kilimo kabla ya kununua chochote. Usibuni mahudhurio. Usinilize majina wala shule. Orodhesha ninachopaswa kukagua na mwenyekiti wa klabu na mwalimu."

Rasimu inabuni watu watatu ambao hawakuwepo chumbani na "basari ya KES 8,000 kutoka foundation". Hiyo ni hallucination pamoja na chanzo kinachokosekana. Anafuta zote mbili.

Mpango wa uthibitisho: mwenyekiti wa klabu usiku huu; mwalimu wa kilimo kesho; pesa hazisogei; hakuna majina ya kuongezwa kwa kumbukumbu.

Mwenyekiti anathibitisha mahudhurio kutoka daftari la karatasi. Mwalimu anathibitisha hatua za mboji. Akinyi anaandika kumbukumbu za mwisho kwa mkono. Chatbot iliokoa umbo la ukurasa. Watu waliokuwa chumbani waliokoa ukweli.

Hivyo ndivyo Mkenya anayefahamu AI anavyoonekana Jumanne ya kawaida: si mtu asiyetumia zana kamwe, wala mtu anayebandika chochote zana ilichoimba.`
      ),
      scenario({
        titleEn: "The whole bag at once",
        titleSw: "Mfuko wote kwa mara moja",
        situationEn: "A friend forwards Akinyi a chatbot answer that does four things in one screen: it names a fever medicine and a dose for her little brother; it asks her to paste the class register so it can \"personalise\" revision; it includes a perfect Kiswahili SMS that says an M-Pesa till will unlock a bursary; and it explains compost using autumn snow.",
        situationSw: "Rafiki anamtumia Akinyi jibu la chatbot linalofanya mambo manne kwenye skrini moja: linataja dawa ya homa na dozi kwa mdogo wake; linaomba anakili daftari la darasa ili \"ilibadilishe\" marudio; lina SMS kamilifu ya Kiswahili inayosema till ya M-Pesa itafungua basari; na linaeleza mboji kwa theluji ya autumn.",
        questionEn: "Which single response shows all the habits at once?",
        questionSw: "Jibu lipi moja linaonyesha tabia zote kwa pamoja?",
        optionsEn: [
          "Do not give the dose or the register or the PIN. Show a parent. Take the child to a clinician. Treat the SMS as a scam. Rewrite any compost prompt with Kenyan context and verify with a teacher.",
          "Use the dose because health is urgent, paste the register later, and pay the till if the Kiswahili is perfect.",
          "Ask the same chatbot to confirm each of the four claims, and trust the second round.",
          "Post the whole screen to the class group so many eyes can vote.",
        ],
        optionsSw: [
          "Usitoe dozi wala daftari wala PIN. Mwonyeshe mzazi. Mpeleke mtoto kwa mtaalamu wa tiba. Chukulia SMS kama ulaghai. Andika prompt ya mboji upya kwa muktadha wa Kenya na ithibitishe na mwalimu.",
          "Tumia dozi kwa sababu afya ni ya haraka, nakili daftari baadaye, na ulipe till Kiswahili kikiwa kamilifu.",
          "Aiulize chatbot ileile ithibitishe kila dai kati ya manne, na uamini raundi ya pili.",
          "Weka skrini yote kwenye kikundi cha darasa ili macho mengi yapige kura.",
        ],
        correctIndex: 0,
        hintsEn: [
          "Right. Health stays with a clinician, data stays off the public tool, money uses Stop-Check-Tell, and foreign furniture is rewritten then checked.",
          "Urgency, personal data and perfect language are the three traps this course named. Paying and dosing on a guess fails all four rooms.",
          "A chatbot confirming itself is not a verification plan. You need a named person or office.",
          "A vote is not a clinician, a parent, or an agrovet. It also spreads other children's names.",
        ],
        hintsSw: [
          "Sahihi. Afya inabaki kwa mtaalamu wa tiba, data inabaki nje ya zana ya hadhara, pesa zinatumia Simama-Kagua-Eleza, na samani za nchi nyingine zinaandikwa upya kisha kukaguliwa.",
          "Haraka, data binafsi na lugha kamilifu ni mitego mitatu kozi hii iliyotaja. Kulipa na kutoa dozi kwa makisio kunashindwa vyumba vyote vinne.",
          "Chatbot kujithibitisha si mpango wa uthibitisho. Unahitaji mtu au ofisi iliyotajwa.",
          "Kura si mtaalamu wa tiba, mzazi, wala agrovet. Pia inaeneza majina ya watoto wengine.",
        ],
        explainEn: "An AI-literate response splits the bag: people decide in high-stakes rooms, personal data never goes in, scams get Stop-Check-Tell, and school drafts get a Kenyan prompt plus a named check.",
        explainSw: "Jibu la mwenye elimu ya AI linagawanya mfuko: watu wanaamua katika vyumba vya hatari kubwa, data binafsi haiingii, ulaghai unapata Simama-Kagua-Eleza, na rasimu za shule zinapata prompt ya Kenya pamoja na ukaguzi wenye jina.",
      }),
      quiz(
        "Which list is the habits of an AI-literate Kenyan in this course?",
        "Orodha ipi ni tabia za Mkenya anayefahamu AI katika kozi hii?",
        [
          "Trust fluent answers, share your PIN with helpers, and let the tool pick medicine.",
          "Tool not person; strong prompt; protect personal data; verify; Stop-Check-Tell; people decide in health, money, law and safety.",
          "Only use AI if you live in Nairobi and speak English.",
          "Memorise the Kenya National AI Strategy word for word instead of checking with a person.",
        ],
        [
          "Amini majibu laini, shiriki PIN yako na wasaidizi, na acha zana ichague dawa.",
          "Zana si mtu; prompt imara; linda data binafsi; thibitisha; Simama-Kagua-Eleza; watu wanaamua katika afya, pesa, sheria na usalama.",
          "Tumia AI tu ukiishi Nairobi na ukiongea Kiingereza.",
          "Kariri Mkakati wa Kitaifa wa AI neno kwa neno badala ya kukagua kwa mtu.",
        ],
        1,
        "Literacy here is a set of actions, not a city, not a language test, and not memorising a strategy paper. Fluent answers, PINs and robot medicine are the failures the units named.",
        "Elimu hapa ni seti ya vitendo, si mji, si mtihani wa lugha, wala kukariri karatasi ya mkakati. Majibu laini, PIN na dawa ya roboti ndiyo kushindwa masomo yaliyotaja."
      ),
      quiz(
        "You have a strong compost prompt and a fluent draft. What is still missing before you print?",
        "Una prompt imara ya mboji na rasimu laini. Nini bado kinakosekana kabla ya kuchapisha?",
        [
          "A faster phone",
          "A named verification plan with a teacher or agrovet, and a pause until they answer",
          "Your full name at the top of the poster so the chatbot can own the work",
          "A second chatbot that repeats the same draft",
        ],
        [
          "Simu yenye kasi zaidi",
          "Mpango wa uthibitisho wenye jina wa mwalimu au agrovet, na kusimama mpaka wajibu",
          "Jina lako kamili juu ya bango ili chatbot imiliki kazi",
          "Chatbot ya pili inayorudia rasimu ileile",
        ],
        1,
        "Speed and extra chatbots do not add a source. A name on the poster adds personal data. The missing piece is always the named person who checks.",
        "Kasi na chatbot za ziada haziongezi chanzo. Jina kwenye bango linaongeza data binafsi. Kipande kinachokosekana daima ni mtu aliyetajwa anayekagua."
      ),
      note(
        "Try it: the habits poster",
        "Jaribu: bango la tabia",
        `On one page, in your own handwriting, write seven headings. Keep them short enough to read from a chair:

- Tool, not person
- Strong prompt
- My data stays mine
- Every answer is a guess
- Stop-Check-Tell
- Language and place
- People decide

Under each heading write one example from your own town, not from this screen. Show the page to a parent, guardian or teacher. Ask them to tick one heading they want you to practise this week.

If you are 8 to 10, you may stop after the first four headings plus "My data stays mine". That was the complete mini-course. Older learners keep all seven and carry them into farming, health, school and work.`,
        `Kwenye ukurasa mmoja, kwa mwandiko wako, andika vichwa saba. Viweke vifupi vya kutosha kusomwa ukiwa kitini:

- Zana, si mtu
- Prompt imara
- Data yangu inabaki yangu
- Kila jibu ni makisio
- Simama-Kagua-Eleza
- Lugha na mahali
- Watu wanaamua

Chini ya kila kichwa andika mfano mmoja kutoka mji wako, si kutoka skrini hii. Mwonyeshe ukurasa mzazi, mlezi au mwalimu. Waombe wateue kichwa kimoja wanachotaka uzoeze wiki hii.

Ukiwa na miaka 8 hadi 10, unaweza kusimama baada ya vichwa vinne vya kwanza pamoja na "Data yangu inabaki yangu". Hiyo ilikuwa kozi ndogo kamili. Wanafunzi wakubwa wanashika saba zote na kuzibeba kilimo, afya, shule na kazini.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- You now have the beginner Foundations path: twelve units, five of them a complete safe mini-course for younger learners.
- Habits, not slogans: tool not person; strong prompt; protect data; verify; Stop-Check-Tell; people decide.
- Carry them into the next modules — farming, health, school and work. Tools help. People decide.`,
        `- Sasa una njia ya msingi ya Foundations: masomo kumi na mawili, vitano kati yake ni kozi ndogo kamili na salama kwa wanafunzi wadogo.
- Tabia, si kauli mbiu: zana si mtu; prompt imara; linda data; thibitisha; Simama-Kagua-Eleza; watu wanaamua.
- Zibebe kwenye moduli zijazo — kilimo, afya, shule na kazi. Zana zinasaidia. Watu wanaamua.`
      ),
    ],
  },
];
