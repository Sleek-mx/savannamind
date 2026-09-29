import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Community capstone — intermediate.
 * A measured mini-project: frame a local problem with checkable numbers, plan data
 * and consent under the Data Protection Act, 2019, pick an approach, pilot with
 * about ten people, and report honestly (including people who dropped out).
 * Ages 11–13 see u1–u8. All people, stalls, schools and counts are fictional.
 */
export const capIntermediateUnits: CurriculumUnit[] = [
  {
    id: "cap-i-u1",
    titleEn: "Frame the problem with numbers you can check",
    titleSw: "Weka tatizo kwa namba unazoweza kukagua",
    cards: [
      note(
        "A slogan is not a problem statement",
        "Kauli si taarifa ya tatizo",
        `A community project starts when a vague wish becomes a sentence with a number you could go and check this week. "Help mama mboga" is a wish. "Ten vegetable traders at Kondele market throw away about 8 kg of tomatoes each between Friday evening and Saturday morning, and we will check that with their own stall notes" is a problem statement.

A usable statement names five things:

- The place.
- The people.
- The current burden, as a number with a unit (minutes, kilograms, shillings, failed video loads).
- How you will check that number (count, weigh, copy from notes people already keep).
- What "better" would look like in the same unit, without promising a miracle.

If you cannot check the number without inventing it, you do not yet have a project. Asking a chatbot "how much tomato waste is there in Kisumu?" is not a check. Standing with a trader and a spring scale is a check.

This is the same discipline you used in Foundations: a prediction is not a fact. Here the first fact belongs to the community, not to a model.`,
        `Mradi wa jamii unaanza wakati hamu isiyo wazi inakuwa sentensi yenye namba unayoweza kwenda kuikagua wiki hii. "Saidia mama mboga" ni hamu. "Wafanyabiashara kumi wa mboga kwenye soko la Kondele hutupa takriban kg 8 za nyanya kila mmoja kati ya Ijumaa jioni na Jumamosi asubuhi, na tutakagua hilo kwa maelezo yao wenyewe ya duka" ni taarifa ya tatizo.

Taarifa inayotumika inataja mambo matano:

- Mahali.
- Watu.
- Mzigo wa sasa, kama namba yenye kipimo (dakika, kilogramu, shilingi, video zilizoshindwa kupakia).
- Jinsi utakavyokagua namba hiyo (hesabu, pima, nakili kutoka maelezo watu tayari wanayoweka).
- "Bora" ingeonekanaje kwa kipimo kile kile, bila kuahidi muujiza.

Ukiwa huwezi kukagua namba bila kuibuni, bado huna mradi. Kuuliza chatbot "upotevu wa nyanya Kisumu ni kiasi gani?" si ukaguzi. Kusimama na mfanyabiashara na mizani ni ukaguzi.

Huu ni nidhamu uleule uliotumia katika Misingi: utabiri si ukweli. Hapa ukweli wa kwanza ni wa jamii, si wa modeli.`,
        "/learn/content/cap/community-capstone-demo.jpg"
      ),
      reveal([
        {
          termEn: "Problem statement",
          termSw: "Taarifa ya tatizo",
          defEn: "One sentence with a place, people, a number you can check, and a unit.",
          defSw: "Sentensi moja yenye mahali, watu, namba unayoweza kukagua, na kipimo.",
        },
        {
          termEn: "Baseline",
          termSw: "Mstari wa msingi",
          defEn: "The 'before' measurement, taken the same way you will measure 'after'.",
          defSw: "Kipimo cha 'kabla', kinachochukuliwa kwa njia ileile utakavyopima 'baada'.",
        },
        {
          termEn: "Unit",
          termSw: "Kipimo",
          defEn: "What the number is counted in: kg, minutes, KES, failed loads. Without it, numbers cannot be compared.",
          defSw: "Kile namba inahesabiwa kwacho: kg, dakika, KES, upakiaji ulioshindwa. Bila hicho, namba hazilinganishiki.",
        },
        {
          termEn: "Checkable",
          termSw: "Inayoweza kukaguliwa",
          defEn: "A claim someone else could repeat this week with the same notebook method.",
          defSw: "Dai ambalo mtu mwingine angeweza kurudia wiki hii kwa mbinu ileile ya daftari.",
        },
      ]),
      note(
        "Worked example: from 'help mama mboga' to 8 kg",
        "Mfano: kutoka 'saidia mama mboga' hadi kg 8",
        `A youth group in Kisumu wanted "AI to reduce waste". In week one they asked a chatbot for a percentage. It replied "about 40% of vegetables are wasted in African markets." That number had no stall, no day, and no method. They threw it out.

In week two, with the market clerk's knowledge, they sat with ten tomato traders who already keep a small notebook. For three Fridays they copied, with consent, two lines the traders already write: kilograms bought in the morning, kilograms left unsold at closing. They did not copy phone numbers.

Median leftover on Friday was 8 kg per stall (range 3 kg to 15 kg). At a made-up example price of KES 80 per kg, that is about KES 640 a week leaving the stall as waste for the median trader — money, and food, and a smell that neighbours complain about.

Now they can write: "Reduce Friday leftover tomatoes among ten consenting stalls at Kondele, from a baseline median of 8 kg toward 5 kg, without collecting names, by testing one ordering helper."

That sentence can be attacked, which is a compliment. A number you cannot attack is usually a number you invented.`,
        `Kikundi cha vijana Kisumu kilitaka "AI ipunguze upotevu". Wiki ya kwanza waliuliza chatbot asilimia. Ilijibu "takriban 40% ya mboga hupotea katika masoko ya Afrika." Namba hiyo haikuwa na duka, wala siku, wala mbinu. Waliitupa.

Wiki ya pili, kwa maarifa ya karani wa soko, walikaa na wafanyabiashara kumi wa nyanya ambao tayari wana daftari dogo. Kwa Ijumaa tatu walnakili, kwa idhini, mistari miwili wafanyabiashara tayari wanaandika: kilogramu zilizonunuliwa asubuhi, kilogramu zilizobaki zisizouzwa wakati wa kufunga. Hawakukopoa namba za simu.

Wastani wa kati wa kilichobaki Ijumaa ulikuwa kg 8 kwa kila duka (kutoka kg 3 hadi kg 15). Kwa bei ya mfano ya KES 80 kwa kg, hiyo ni takriban KES 640 kwa wiki inayoondoka dukani kama taka kwa mfanyabiashara wa wastani wa kati — pesa, na chakula, na harufu majirani wanaolalamika.

Sasa wanaweza kuandika: "Punguza nyanya zilizobaki Ijumaa miongoni mwa maduka kumi yenye idhini Kondele, kutoka wastani wa kati wa kg 8 kuelekea kg 5, bila kukusanya majina, kwa kujaribu msaidizi mmoja wa kuagiza."

Sentensi hiyo inaweza kushambuliwa, ambayo ni pongezi. Namba isiyoweza kushambuliwa kwa kawaida ni namba uliyobuni.`
      ),
      scenario({
        titleEn: "Scenario: the unverifiable 40 percent",
        titleSw: "Hali: asilimia 40 isiyothibitishwa",
        situationEn:
          "A school club in Kakamega wants to work on the borehole queue. A member pastes a chatbot answer into the group: 'Rural water queues last 40% too long.' No source, no hour, no borehole.",
        situationSw:
          "Klabu ya shule Kakamega inataka kufanya kazi kwenye foleni ya kisima. Mwanachama anabandika jibu la chatbot kwenye kundi: 'Foleni za maji vijijini hudumu 40% zaidi.' Hakuna chanzo, wala saa, wala kisima.",
        questionEn: "What is the correct next step?",
        questionSw: "Hatua sahihi inayofuata ni ipi?",
        optionsEn: [
          "Put 40% on the poster because it sounds researched",
          "Discard the 40%, stand at your borehole with a notebook, and write minutes and jerrycan counts for a few days",
          "Ask the chatbot to make the percentage more precise, such as 41.2%",
          "Use 40% but add the words 'approximately' so it becomes true",
        ],
        optionsSw: [
          "Weka 40% kwenye bango kwa sababu inasikika ilitafitiwa",
          "Tupa 40%, simama kwenye kisima chenu na daftari, na uandike dakika na hesabu za daba kwa siku chache",
          "Omba chatbot ifanye asilimia iwe sahihi zaidi, kama 41.2%",
          "Tumia 40% lakini ongeza neno 'takriban' ili iwe kweli",
        ],
        correctIndex: 1,
        hintsEn: [
          "A researched sound is not a check. You still cannot say whose wait.",
          "Correct. Your borehole, your minutes, your unit. That is a frame.",
          "False precision is worse than a round invented number.",
          "'Approximately' does not turn an unchecked claim into a baseline.",
        ],
        hintsSw: [
          "Sauti ya utafiti si ukaguzi. Bado huwezi kusema kusubiri ni kwa nani.",
          "Sahihi. Kisima chenu, dakika zenu, kipimo chenu. Huo ni mfumo.",
          "Usahihi wa uongo ni mbaya kuliko namba ya kubuni iliyozungushwa.",
          "'Takriban' haigeuzi dai lisilokaguliwa kuwa mstari wa msingi.",
        ],
        explainEn: "Frame the problem with a number you could re-count this week. Chatbot percentages are not baselines.",
        explainSw: "Weka tatizo kwa namba unayoweza kuhesabu tena wiki hii. Asilimia za chatbot si mistari ya msingi.",
      }),
      quiz(
        "Which problem statement is ready for a pilot?",
        "Ni taarifa gani ya tatizo iko tayari kwa jaribio?",
        [
          "Use AI for the community",
          "At Ward Primary, Grade 6 videos failed to load in 7 of 10 recorded lesson hours last week; we will log the same way for two more weeks",
          "Waste is a national crisis",
          "Traders lose a lot, according to social media",
        ],
        [
          "Tumia AI kwa jamii",
          "Shule ya Ward Primary, video za Darasa la 6 zilishindwa kupakia katika saa 7 kati ya 10 za somo zilizorekodiwa wiki iliyopita; tutaandika kwa njia ileile kwa wiki mbili zaidi",
          "Taka ni janga la kitaifa",
          "Wafanyabiashara wanapoteza mengi, kulingana na mitandao ya kijamii",
        ],
        1,
        "Place, people, unit, method and a repeatable count. The others cannot be checked this week.",
        "Mahali, watu, kipimo, mbinu na hesabu inayoweza kurudiwa. Nyingine haziwezi kukaguliwa wiki hii."
      ),
      note(
        "Try it: write a checkable sentence",
        "Jaribu: andika sentensi inayoweza kukaguliwa",
        `Fill this template for a place you can actually visit:

"At [place], [who] currently [burden with number and unit]. We will check this by [method] on [days]. Better would mean [same unit, modest target]."

If any square bracket is still a slogan, you are not ready to pick a tool.`,
        `Jaza kiolezo hiki kwa mahali unapoweza kutembelea kweli:

"Katika [mahal], [nani] kwa sasa [mzigo wenye namba na kipimo]. Tutakagua hili kwa [mbinu] siku [siku]. Bora ingemaanisha [kipimo kile kile, lengo la kiasi]."

Kibano chochote kikiwa bado kauli, bado huja tayari kuchagua zana.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A problem statement has a place, people, a unit and a method you could repeat.
- Chatbot percentages are not baselines.
- Next: write what you will refuse to solve, so the project stays shippable.`,
        `- Taarifa ya tatizo ina mahali, watu, kipimo na mbinu unayoweza kurudia.
- Asilimia za chatbot si mistari ya msingi.
- Ifuatayo: andika usichotatua, ili mradi ubaki unaoweza kukamilika.`
      ),
    ],
  },
  {
    id: "cap-i-u2",
    titleEn: "Boundaries: what you will not solve",
    titleSw: "Mipaka: usichotatua",
    cards: [
      note(
        "A boundary is a design decision",
        "Mpaka ni uamuzi wa muundo",
        `Projects fail more often from extra promises than from missing tools. A boundary is a written list of jobs you will not take this month, even if someone asks.

Typical boundaries for a ten-person pilot:

- We will not set prices, diagnose disease, or discipline learners.
- We will not replace the market clerk, the water committee, or the teacher on duty.
- We will not collect identity documents "for completeness".
- We will not scale to other wards until this stall, this tap, or this classroom has a measured result.

Boundaries protect people and they protect you. If a trader wants a tool that tells her what her neighbour charged yesterday, that is a different project with a different harm. If a parent wants a school tool that ranks children, say no.

Write boundaries in public language. If you cannot read them aloud at a baraza, they are not yet honest.`,
        `Miradi inashindwa mara nyingi zaidi kwa ahadi za ziada kuliko kwa zana zinazokosekana. Mpaka ni orodha iliyoandikwa ya kazi usizochukua mwezi huu, hata mtu akiomba.

Mipaka ya kawaida kwa jaribio la watu kumi:

- Hatutaweka bei, kutambua magonjwa, wala kuadhibu wanafunzi.
- Hatutachukua nafasi ya karani wa soko, kamati ya maji, wala mwalimu wa zamu.
- Hatutakusanya vitambulisho "kwa ukamilifu".
- Hatutaeneza kwa wadi nyingine hadi duka hili, bomba hili, au darasa hili liwe na matokeo yaliyopimwa.

Mipaka inalinda watu na inakulinda wewe. Mfanyabiashara akitaka zana inayomwambia jirani alichozisha jana, huo ni mradi tofauti wenye madhara tofauti. Mzazi akitaka zana ya shule inayowapanga watoto, sema hapana.

Andika mipaka kwa lugha ya umma. Ukiwa huwezi kuyasoma kwa sauti barazani, bado si ya kweli.`
      ),
      reveal([
        {
          termEn: "Scope",
          termSw: "Wigo",
          defEn: "The job you will try, written small enough to finish.",
          defSw: "Kazi utakayojaribu, iliyoandikwa ndogo kiasi cha kumaliza.",
        },
        {
          termEn: "Out of scope",
          termSw: "Nje ya wigo",
          defEn: "The nearby jobs you refuse this month, even if they sound impressive.",
          defSw: "Kazi za karibu unazokataa mwezi huu, hata zikisikika za kuvutia.",
        },
        {
          termEn: "Replacement risk",
          termSw: "Hatari ya kubadilisha watu",
          defEn: "When a tool is talked about as if committees, clerks or teachers were no longer needed.",
          defSw: "Wakati zana inazungumzwa kana kwamba kamati, makarani au walimu hawahitajiki tena.",
        },
      ]),
      note(
        "Worked example: tomatoes, not the whole market",
        "Mfano: nyanya, si soko zima",
        `The Kisumu group listed out of scope on the same page as the 8 kg baseline:

- Not fish, not charcoal, not the whole market.
- Not a public leaderboard of whose leftover is worst.
- Not a chatbot that invents wholesale prices from the internet.
- Not advice on pesticides.
- Not talking to county revenue about individual stalls.

They kept one in-scope job: a next-day tomato order hint from each stall's own notes, shown only to that stall, with a human still deciding what to buy.

When a visitor asked them to "just add mangoes and a public dashboard", they pointed to the list. The visitor was annoyed. The traders were safer. That is a successful boundary.`,
        `Kundi la Kisumu liliandika nje ya wigo kwenye ukurasa uleule wa mstari wa msingi wa kg 8:

- Si samaki, si mkaa, si soko zima.
- Si ubao wa umma wa nani ana mabaki mabaya zaidi.
- Si chatbot inayobuni bei za jumla kutoka intaneti.
- Si ushauri wa dawa za wadudu.
- Si kuongea na mapato ya kaunti kuhusu maduka binafsi.

Walibaki na kazi moja iliyo ndani ya wigo: kidokezo cha kuagiza nyanya za kesho kutoka maelezo ya duka lenyewe, linaloonyeshwa duka hilo tu, na binadamu bado anaamua nini akanunue.

Mgeni alipowaomba "ongezeni maembe na dashibodi ya umma", walionyesha orodha. Mgeni alikereka. Wafanyabiashara walikuwa salama. Huo ni mpaka uliofanikiwa.`
      ),
      scenario({
        titleEn: "Scenario: the head teacher wants rankings",
        titleSw: "Hali: mwalimu mkuu anataka nafasi",
        situationEn:
          "Your school-connectivity pilot logs whether a Grade 6 video loaded. The head teacher asks you to add learner names and rank who 'wastes data'.",
        situationSw:
          "Jaribio lako la muunganisho wa shule linaandika kama video ya Darasa la 6 ilipakia. Mwalimu mkuu anakwomba uongeze majina ya wanafunzi na kupanga nani 'anapoteza data'.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Add names, because the head teacher asked",
          "Keep the boundary: lesson-hour load success only, no learner identities, and explain the harm of ranking",
          "Add names but hide the file in a personal email",
          "Rank classes instead of learners, still using names",
        ],
        optionsSw: [
          "Ongeza majina, kwa sababu mwalimu mkuu aliomba",
          "Weka mpaka: mafanikio ya kupakia saa ya somo tu, bila vitambulisho vya wanafunzi, na eleza madhara ya kupanga nafasi",
          "Ongeza majina lakini ficha faili kwenye barua pepe binafsi",
          "Panga madarasa badala ya wanafunzi, bado ukitumia majina",
        ],
        correctIndex: 1,
        hintsEn: [
          "A request from authority does not cancel data protection or fairness.",
          "Correct. Connectivity is a school system problem. Ranking children creates harm the helper does not need.",
          "A personal email is a leak waiting to happen.",
          "Class rankings with names still point at children.",
        ],
        hintsSw: [
          "Ombi kutoka mamlaka halifuti ulinzi wa data wala haki.",
          "Sahihi. Muunganisho ni tatizo la mfumo wa shule. Kupanga watoto kunaunda madhara msaidizi asiyohitaji.",
          "Barua pepe binafsi ni uvujaji unaosubiri.",
          "Nafasi za darasa zenye majina bado zinaelekeza kwa watoto.",
        ],
        explainEn: "Boundaries exist for the moment someone with power asks for extra. That is when you need them written.",
        explainSw: "Mipaka ipo kwa wakati mtu mwenye mamlaka anapoomba kiongezeo. Ndipo unahitaji iwe imeandikwa.",
      }),
      quiz(
        "A good out-of-scope line does which job?",
        "Mstari mzuri wa nje ya wigo unafanya kazi gani?",
        [
          "Hides the real plan from stakeholders",
          "Names a tempting extra job you refuse this month, in words you can read aloud",
          "Promises to add every extra after the pilot succeeds",
          "Replaces the need for consent",
        ],
        [
          "Unaficha mpango halisi kutoka kwa wadau",
          "Unataja kazi ya ziada ya kuvutia unayokataa mwezi huu, kwa maneno unayoweza kusoma kwa sauti",
          "Unaahidi kuongeza kila kiongezeo jaribio likifaulu",
          "Unachukua nafasi ya hitaji la idhini",
        ],
        1,
        "If you cannot say the refusal in public, it will collapse the first time a visitor is excited.",
        "Ukiwa huwezi kusema kukataa hadharani, kitaanguka mara ya kwanza mgeni atakaposisimka."
      ),
      note(
        "Try it: five refusals",
        "Jaribu: kukataa tano",
        `Under your problem statement, write five jobs you will not do this month. Include one that a powerful person might ask for (rankings, names, public shaming, invented prices).

Read them to a partner. If they laugh and say you would never keep that line, rewrite it until you would.`,
        `Chini ya taarifa yako ya tatizo, andika kazi tano usizofanya mwezi huu. Jumlisha moja ambayo mtu mwenye mamlaka anaweza kuomba (nafasi, majina, aibu ya umma, bei zilizobuniwa).

Zisome kwa mwenzi. Wakicheka na kusema usingeweza kushika mstari huo, uandike upya hadi ungeweza.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Scope is what you will try. Out of scope is what you will refuse while smiling.
- Do not replace clerks, committees or teachers.
- Next: a data plan that matches the scope, not the visitor's excitement.`,
        `- Wigo ni utakachojaribu. Nje ya wigo ni utakachokataa ukitabasamu.
- Usichukue nafasi ya makarani, kamati au walimu.
- Ifuatayo: mpango wa data unaolingana na wigo, si msisimko wa mgeni.`
      ),
    ],
  },
  {
    id: "cap-i-u3",
    titleEn: "A data plan you can defend",
    titleSw: "Mpango wa data unaoweza kutetea",
    cards: [
      note(
        "Plan the facts before you plan the model",
        "Panga ukweli kabla ya kupanga modeli",
        `A data plan answers six questions on one page:

- What facts will we collect?
- From whom, and how will they know?
- Where will the facts live (paper notebook, shared organisational sheet, not a personal chat)?
- Who can see them?
- When will we delete or return them?
- What will we never collect?

If any answer is "we will decide later", you are not ready to pilot. Later is how names end up in a class group.

Prefer facts people already keep, with permission, over new surveillance. Traders' own leftover kilograms beat a hidden camera. A teacher’s lesson-hour tick sheet beats logging every child's clicks.

County stakeholders may already hold related lists. Copying a county list into a school project is still collection. It needs a purpose and a yes.`,
        `Mpango wa data unajibu maswali sita kwenye ukurasa mmoja:

- Tutakusanya ukweli gani?
- Kutoka kwa nani, na watajuaje?
- Ukweli utaishi wapi (daftari la karatasi, jedwali la shirika, si gumzo binafsi)?
- Nani anaweza kuuona?
- Tutafuta au kurudisha lini?
- Hatutakusanya nini kamwe?

Jibu lolote likiwa "tutaamua baadaye", bado huja tayari kujaribu. Baadaye ndivyo majina yanavyoishia kwenye kundi la darasa.

Pendelea ukweli watu tayari wanauweka, kwa ruhusa, kuliko upelelezi mpya. Kilogramu za mabaki za wafanyabiashara wenyewe zinashinda kamera iliyofichwa. Karatasi ya mwalimu ya saa ya somo inashinda kurekodi kila bonyeza la mtoto.

Wadau wa kaunti huenda tayari wana orodha zinazohusiana. Kunakili orodha ya kaunti kwenye mradi wa shule bado ni ukusanyaji. Unahitaji madhumuni na ndiyo.`
      ),
      reveal([
        {
          termEn: "Data plan",
          termSw: "Mpango wa data",
          defEn: "A one-page record of what you collect, where it lives, who sees it, and when it dies.",
          defSw: "Rekodi ya ukurasa mmoja ya unachokusanya, unakoishi, nani anaona, na linakufa lini.",
        },
        {
          termEn: "Retention",
          termSw: "Uhifadhi",
          defEn: "How long you keep the facts, with a delete or return date.",
          defSw: "Muda gani unahifadhi ukweli, na tarehe ya kufuta au kurudisha.",
        },
        {
          termEn: "Access list",
          termSw: "Orodha ya ufikiaji",
          defEn: "The named roles allowed to see the facts — as short as you can make it.",
          defSw: "Majukumu yaliyotajwa yanayoruhusiwa kuona ukweli — mafupi kama unavyoweza.",
        },
        {
          termEn: "Purpose",
          termSw: "Madhumuni",
          defEn: "The one job the facts are for. Other uses are out of scope.",
          defSw: "Kazi moja ambayo ukweli ni kwa ajili yake. Matumizi mengine ni nje ya wigo.",
        },
      ]),
      note(
        "Worked example: a tomato notebook that can be lost on a matatu",
        "Mfano: daftari la nyanya linaloweza kupotea kwenye matatu",
        `The Kisumu group designed the notebook as if it would be lost.

Each row: stall code (T1 to T10, not a name), date, kg bought, kg leftover, whether the trader used the helper that day (yes/no). No phones. No national IDs. The mapping from code to stall lived on one paper kept by the market clerk, not in the youth group chat.

Storage: the coded notebook stayed with the clerk at close of market. The youth group photographed only the coded page, never the mapping. They deleted the photo after entering totals on paper for the week.

Retention: coded rows kept for six weeks after the pilot, then shredded. Mapping paper stays with the clerk.

If the matatu ate a photocopy, a finder would see that T4 had 9 kg leftover, not that Achieng of stall 12 should be taxed or copied.

That is a data plan you can defend at a baraza.`,
        `Kundi la Kisumu lilibuni daftari kana kwamba litapotea.

Kila safu: msimbo wa duka (T1 hadi T10, si jina), tarehe, kg zilizonunuliwa, kg zilizobaki, kama mfanyabiashara alitumia msaidizi siku hiyo (ndiyo/hapana). Hakuna simu. Hakuna vitambulisho. Ramani kutoka msimbo hadi duka iliishi kwenye karatasi moja iliyowekwa na karani wa soko, si kwenye gumzo la vijana.

Hifadhi: daftari lenye misimbo lilikaa kwa karani kufunga soko. Kikundi cha vijana kilipiga picha ukurasa wenye misimbo tu, kamwe ramani. Walifuta picha baada ya kuingiza jumla kwenye karatasi kwa wiki.

Uhifadhi: safu zenye misimbo zimewekwa wiki sita baada ya jaribio, kisha zikapasuliwa. Karatasi ya ramani inabaki kwa karani.

Matatu ikila nakala, mvumbuzi angeona T4 ilikuwa na kg 9 zilizobaki, si kwamba Achieng wa duka 12 apaswa kutoza ushuru au kunakiliwa.

Huo ni mpango wa data unaoweza kutetea barazani.`
      ),
      scenario({
        titleEn: "Scenario: put it in the class group",
        titleSw: "Hali: iweke kwenye kundi la darasa",
        situationEn:
          "A member says the coded tomato rows should be pasted into a 40-person class chat 'for transparency' and 'so we do not lose the notebook'.",
        situationSw:
          "Mwanachama anasema safu za nyanya zenye misimbo zipachikwe kwenye gumzo la darasa la watu 40 'kwa uwazi' na 'ili daftari lisipotee'.",
        questionEn: "What is the right call?",
        questionSw: "Uamuzi sahihi ni upi?",
        optionsEn: [
          "Paste them; transparency always comes first",
          "Refuse the chat: 40 extra viewers, no delete control, and codes can be re-identified by anyone who knows the market",
          "Paste names as well, so the codes are not a secret",
          "Paste them, then ask traders tomorrow",
        ],
        optionsSw: [
          "Zipachike; uwazi huja kwanza kila mara",
          "Kataa gumzo: watazamaji 40 wa ziada, hakuna udhibiti wa kufuta, na misimbo inaweza kutambulishwa tena na yeyote anayejua soko",
          "Pachika majina pia, ili misimbo zisiwe siri",
          "Zipachike, kisha waulize wafanyabiashara kesho",
        ],
        correctIndex: 1,
        hintsEn: [
          "Transparency to 40 classmates is not transparency to the traders. It is a leak.",
          "Correct. Access lists should shrink, not grow for convenience.",
          "Names plus codes is worse.",
          "Collection before consent is the same error as Unit 6 of the beginner track, only with a group chat.",
        ],
        hintsSw: [
          "Uwazi kwa wanafunzi wenzako 40 si uwazi kwa wafanyabiashara. Ni uvujaji.",
          "Sahihi. Orodha za ufikiaji zipungue, zisiongezeke kwa urahisi.",
          "Majina pamoja na misimbo ni mbaya zaidi.",
          "Ukusanyaji kabla ya idhini ni kosa lilelile la Somo 6 la ngazi ya mwanzoni, tu kwa gumzo la kundi.",
        ],
        explainEn: "If a chat is how you avoid losing paper, you need a clerk's drawer, not 40 extra copies.",
        explainSw: "Gumzo likiwa njia ya kuepuka kupoteza karatasi, unahitaji droo ya karani, si nakala 40 za ziada.",
      }),
      quiz(
        "The data plan question you must be able to answer in one sentence is:",
        "Swali la mpango wa data ambalo lazima uweze kulijibu kwa sentensi moja ni:",
        [
          "Which foreign company built the model",
          "What we collect, where it lives, who sees it, and when it is destroyed",
          "How exciting the dashboard looks",
          "How many followers the project has",
        ],
        [
          "Kampuni gani ya kigeni ilijenga modeli",
          "Tunakusanya nini, kunaishi wapi, nani anaona, na linaharibiwa lini",
          "Dashibodi inasisimua kiasi gani",
          "Mradi una wafuasi wangapi",
        ],
        1,
        "Those four clauses are the whole plan. Brand names and follower counts are not data protection.",
        "Vifungu hivyo vinne ndivyo mpango mzima. Majina ya chapa na idadi ya wafuasi si ulinzi wa data."
      ),
      note(
        "Try it: six boxes",
        "Jaribu: visanduku sita",
        `Draw six boxes for your project: facts, from whom, where stored, who sees, delete date, never collect.

Fill them as if the notebook will be lost tomorrow. If a box is empty, you do not have a plan yet.`,
        `Chora visanduku sita kwa mradi wako: ukweli, kutoka kwa nani, mahali pa kuhifadhi, nani anaona, tarehe ya kufuta, hatutakusanya kamwe.

Vijaze kana kwamba daftari litapotea kesho. Kisanduku kikiwa tupu, bado huna mpango.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Prefer facts people already keep.
- Store as if the notebook will be lost.
- Next: turn the plan into consent people can refuse, under the Data Protection Act, 2019.`,
        `- Pendelea ukweli watu tayari wanauweka.
- Hifadhi kana kwamba daftari litapotea.
- Ifuatayo: geuza mpango kuwa idhini watu wanaoweza kukataa, chini ya Sheria ya Ulinzi wa Data, 2019.`
      ),
    ],
  },
  {
    id: "cap-i-u4",
    titleEn: "Consent under the Data Protection Act",
    titleSw: "Idhini chini ya Sheria ya Ulinzi wa Data",
    cards: [
      note(
        "A yes that can still be a no",
        "Ndiyo ambayo bado inaweza kuwa hapana",
        `Kenya's Data Protection Act, 2019 expects personal data to be collected for a specified purpose, with a lawful basis, and with data minimisation. For a community pilot that uses stall notes, names, phones or photos, consent is the basis you can actually explain at a baraza.

Consent is informed, specific, and withdrawable. Informed means the person hears, in Kiswahili or the language they use at the stall, what you will take, why, where it lives, who sees it, and when it dies. Specific means tomato leftovers for six weeks is not a blank cheque for "any future AI". Withdrawable means they can leave the pilot and still use the market, the tap, or the school.

Children need extra care. A school connectivity pilot should not hide behind a general school notice if you are logging identifiable learners. Explain to guardians and to learners in plain words.

The Office of the Data Protection Commissioner (ODPC) is the national regulator. You are not expected to file a heavy registration for a classroom paper pilot, but you are expected not to pretend the Act does not exist.

County ICT and sector officers are stakeholders when data may later sit on a county system. Tell them early if that is even a maybe. Do not surprise a county with a spreadsheet of traders.`,
        `Sheria ya Ulinzi wa Data, 2019 inatarajia data ya mtu ikusanywe kwa madhumuni maalum, kwa msingi halali, na kwa kupunguza data. Kwa jaribio la jamii linalotumia maelezo ya duka, majina, simu au picha, idhini ndiyo msingi unaoweza kueleza barazani.

Idhini ni yenye taarifa, mahususi, na inayoweza kuvutwa. Yenye taarifa inamaanisha mtu anasikia, kwa Kiswahili au lugha anayotumia dukani, utakachochukua, kwa nini, kunaishi wapi, nani anaona, na linakufa lini. Mahususi inamaanisha mabaki ya nyanya kwa wiki sita si hundi tupu ya "AI yoyote ya baadaye". Inayoweza kuvutwa inamaanisha wanaweza kuacha jaribio na bado watumie soko, bomba, au shule.

Watoto wanahitaji uangalifu zaidi. Jaribio la muunganisho wa shule halipaswi kujificha nyuma ya ilani ya jumla ya shule kama unarekodi wanafunzi wanaoweza kutambulika. Eleza walezi na wanafunzi kwa maneno rahisi.

Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) ndiyo mdhibiti wa kitaifa. Hutarajiwi kuwasilisha usajili mzito kwa jaribio la karatasi la darasa, lakini unatarajiwa usijifanye Sheria haipo.

ICT ya kaunti na maafisa wa sekta ni wadau data inapoweza baadaye kukaa kwenye mfumo wa kaunti. Waambie mapema hiyo ikiwa hata huenda. Usishangaze kaunti na jedwali la wafanyabiashara.`
      ),
      reveal([
        {
          termEn: "Lawful basis",
          termSw: "Msingi halali",
          defEn: "The legal reason you may process personal data; for a small pilot this is usually consent.",
          defSw: "Sababu ya kisheria inayokuruhusu kuchakata data ya mtu; kwa jaribio dogo kwa kawaida ni idhini.",
        },
        {
          termEn: "Withdraw",
          termSw: "Vuta idhini",
          defEn: "To leave the project later; the helper must still be usable without punishment.",
          defSw: "Kuacha mradi baadaye; msaidizi bado atumike bila adhabu.",
        },
        {
          termEn: "ODPC",
          termSw: "ODPC",
          defEn: "The Office of the Data Protection Commissioner, Kenya's data protection regulator.",
          defSw: "Ofisi ya Kamishna wa Ulinzi wa Data, mdhibiti wa ulinzi wa data nchini Kenya.",
        },
        {
          termEn: "Informed",
          termSw: "Yenye taarifa",
          defEn: "The person understands purpose, storage, viewers, deletion and the right to say no.",
          defSw: "Mtu anaelewa madhumuni, hifadhi, wanaoona, kufuta na haki ya kusema hapana.",
        },
      ]),
      note(
        "Worked example: two traders refuse, and the tool still works",
        "Mfano: wafanyabiashara wawili wanakataa, na zana bado inafanya kazi",
        `Ten traders hear the same script at opening time, in Dholuo and Kiswahili, with the market clerk present.

Eight say yes to coded leftover kilograms for six weeks. Two say no: one fears county tax, one fears neighbours copying her stock.

The group does not plead. They do not copy the two notebooks "just for the model". The helper is designed so a stall can use a paper tip sheet without joining the dataset. The two who refused still get a one-page explanation of quiet wholesale hours the clerk already announces publicly — no personal leftover numbers.

If the project had required all ten, the two refusals would have been punished. That would not have been consent. It would have been a condition of staying in the in-group.

The eight who said yes can still withdraw on Friday. Their rows would be shredded that afternoon. The baseline would then be described as "eight stalls, two declined, none punished."`,
        `Wafanyabiashara kumi wanasikia maandishi yale yale wakati wa kufungua, kwa Dholuo na Kiswahili, karani wa soko akiwepo.

Wanane wanasema ndiyo kwa kilogramu za mabaki zenye misimbo kwa wiki sita. Wawili wanasema hapana: mmoja anaogopa ushuru wa kaunti, mwingine anaogopa majirani watanakili stoo yake.

Kundi halisihi. Halinakili madaftari hayo mawili "kwa ajili ya modeli tu". Msaidizi umebuniwa ili duka liweze kutumia karatasi ya vidokezo bila kujiunga na seti ya data. Wawili waliokataa bado wanapata ukurasa mmoja wa maelezo ya saa za jumla za shwari ambazo karani tayari anatangaza hadharani — hakuna namba binafsi za mabaki.

Mradi ukiwahitaji wote kumi, kukataa kwa wawili kungeadhibiwa. Hiyo isingekuwa idhini. Ingekuwa sharti la kubaki kwenye kundi la ndani.

Wanane waliosema ndiyo bado wanaweza kuvuta idhini Ijumaa. Safu zao zingepasuliwa alasiri hiyo. Mstari wa msingi ungelezwa kama "maduka nane, wawili walikataa, hakuna aliyeadhibiwa."`
      ),
      scenario({
        titleEn: "Scenario: consent as a doorway",
        titleSw: "Hali: idhini kama mlango",
        situationEn:
          "A borehole committee says households may use a new queue board only if they hand over names and phone numbers 'for the AI'. Two households without phones would lose the shorter-wait information.",
        situationSw:
          "Kamati ya kisima inasema kaya zinaweza kutumia ubao mpya wa foleni tu zikitoa majina na namba za simu 'kwa AI'. Kaya mbili zisizo na simu zingepoteza taarifa ya kusubiri fupi.",
        questionEn: "How should the design change?",
        questionSw: "Muundo unapaswa kubadilikaje?",
        optionsEn: [
          "Keep names as the price of using the board",
          "Make the board usable without joining any dataset, and collect numbers only from people who opt in",
          "Collect names from the chief's office instead",
          "Photograph the two households so they can be added later",
        ],
        optionsSw: [
          "Weka majina kama bei ya kutumia ubao",
          "Fanya ubao utumike bila kujiunga na seti yoyote ya data, na kusanya namba tu kutoka kwa wanaojitia",
          "Kusanya majina kutoka ofisi ya chifu badala yake",
          "Piga picha kaya hizo mbili ili ziongezwe baadaye",
        ],
        correctIndex: 1,
        hintsEn: [
          "A service people need cannot be the bait for personal data.",
          "Correct. Consent is free only if the public helper still works after a no.",
          "The chief's list is not your consent.",
          "Photos of households are a new harm.",
        ],
        hintsSw: [
          "Huduma watu wanayohitaji haiwezi kuwa chambo cha data ya mtu.",
          "Sahihi. Idhini ni ya hiari tu kama msaidizi wa umma bado anafanya kazi baada ya hapana.",
          "Orodha ya chifu si idhini yako.",
          "Picha za kaya ni madhara mapya.",
        ],
        explainEn: "If saying no costs you water information, the yes was never free.",
        explainSw: "Kusema hapana kukikugharimu taarifa ya maji, ndiyo haikuwa ya hiari kamwe.",
      }),
      pb({
        titleEn: "Build a consent-notice prompt",
        titleSw: "Jenga maagizo ya ilani ya idhini",
        introEn:
          "You want a writing helper to draft a one-page consent notice for traders. The prompt must stop invented legal claims and stop pressure.",
        introSw:
          "Unataka msaidizi wa kuandika aandike ilani ya ukurasa mmoja ya idhini kwa wafanyabiashara. Maagizo lazima yazue madai ya kisheria yaliyobuniwa na yazue shinikizo.",
        goalEn:
          "Your prompt must fix the audience and language, list purpose-storage-viewers-deletion-refusal, and forbid pretending this is a county order.",
        goalSw:
          "Maagizo yako lazima yaweke hadhira na lugha, orodhesha madhumuni-hifadhi-wanaoona-kufuta-kukataa, na yakataze kujifanya hii ni amri ya kaunti.",
        blocksEn: [
          "Audience: tomato traders at Kondele market, read aloud in Kiswahili, one page",
          "Must include: purpose, what we collect, where it lives, who sees it, delete date, how to say no",
          "Rule: do not invent ODPC case numbers, county orders, or benefits we have not measured",
          "Tone: respectful, no threat of losing a stall",
          "Mark any sentence that still needs a lawyer as 'not legal advice'",
        ],
        blocksSw: [
          "Hadhira: wafanyabiashara wa nyanya soko la Kondele, somo kwa sauti kwa Kiswahili, ukurasa mmoja",
          "Lazima iwe na: madhumuni, tunakusanya nini, kunaishi wapi, nani anaona, tarehe ya kufuta, jinsi ya kusema hapana",
          "Kanuni: usibuni namba za kesi za ODPC, amri za kaunti, wala manufaa ambayo hatujapima",
          "Mtindo: wa heshima, hakuna tishio la kupoteza duka",
          "Weka alama kwenye sentensi yoyote bado inayohitaji wakili kama 'si ushauri wa kisheria'",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Audience: tomato traders at Kondele market, read aloud in Kiswahili, one page. Must include: purpose, what we collect, where it lives, who sees it, delete date, how to say no. Rule: do not invent ODPC case numbers, county orders, or benefits we have not measured. Tone: respectful, no threat of losing a stall. Mark any sentence that still needs a lawyer as 'not legal advice'.",
        sampleSw:
          "Hadhira: wafanyabiashara wa nyanya soko la Kondele, somo kwa sauti kwa Kiswahili, ukurasa mmoja. Lazima iwe na: madhumuni, tunakusanya nini, kunaishi wapi, nani anaona, tarehe ya kufuta, jinsi ya kusema hapana. Kanuni: usibuni namba za kesi za ODPC, amri za kaunti, wala manufaa ambayo hatujapima. Mtindo: wa heshima, hakuna tishio la kupoteza duka. Weka alama kwenye sentensi yoyote bado inayohitaji wakili kama 'si ushauri wa kisheria'.",
      }),
      quiz(
        "Consent under the Data Protection Act, 2019 is not valid when:",
        "Idhini chini ya Sheria ya Ulinzi wa Data, 2019 si halali wakati:",
        [
          "It is explained in Kiswahili",
          "Saying no means you lose a stall, a tap turn, or a classroom service",
          "It names a delete date",
          "A clerk is present as a witness",
        ],
        [
          "Imeelezwa kwa Kiswahili",
          "Kusema hapana kunamaanisha unapoteza duka, zamu ya bomba, au huduma ya darasa",
          "Inataja tarehe ya kufuta",
          "Karani yupo kama shahidi",
        ],
        1,
        "A yes extracted by fear of losing a public or market service is not free, so it is not consent.",
        "Ndiyo iliyotolewa kwa hofu ya kupoteza huduma ya umma au soko si ya hiari, kwa hiyo si idhini."
      ),
      note(
        "Try it: a refusal that still serves",
        "Jaribu: kukataa ambako bado kunahudumia",
        `Write two columns: If they say yes / If they say no.

The no column must still offer a public, non-personal version of the helper (a board, a clerk announcement, an offline lesson card). If the no column is empty, redesign before you collect anything.`,
        `Andika safu mbili: Wakisema ndiyo / Wakisema hapana.

Safu ya hapana bado ipe toleo la umma, lisilo la kibinafsi, la msaidizi (ubao, tangazo la karani, kadi ya somo nje ya mtandao). Safu ya hapana ikiwa tupu, buni upya kabla hujakusanya chochote.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Consent is informed, specific, withdrawable, and free of punishment.
- County ICT is a stakeholder if data might land on a county system.
- Next: pick an approach — rules, machine learning, or a chatbot — that fits the data you actually have.`,
        `- Idhini ni yenye taarifa, mahususi, inayoweza kuvutwa, na bila adhabu.
- ICT ya kaunti ni mdau data ikiweza kuishia kwenye mfumo wa kaunti.
- Ifuatayo: chagua njia — kanuni, ujifunzaji wa mashine, au chatbot — inayofaa data uliyo nayo kweli.`
      ),
    ],
  },
  {
    id: "cap-i-u5",
    titleEn: "Rules, machine learning, or a chatbot",
    titleSw: "Kanuni, ujifunzaji wa mashine, au chatbot",
    cards: [
      note(
        "Match the tool to the job and to the data",
        "Linganisha zana na kazi na data",
        `Three common approaches get confused in community pitches.

A rule helper encodes something you can write as if-then: if leftover on Friday was above 8 kg two weeks in a row, suggest ordering 2 kg less. You can read every line. You need almost no data.

A machine learning helper finds patterns you did not write, from many labelled examples: leaf photos, past sales with known leftovers, lesson-hour logs with known load failures. It needs enough local examples, and it still outputs a guess. Ten stalls for three Fridays is usually too little to train a serious model. It may be enough to test a rule.

A chatbot helper answers in words. It is useful for explaining a tip sheet in Kiswahili. It is dangerous when it is allowed to invent a price, a quiet hour, or a medical step that was never in your notes. If you use one, you constrain it to a script of facts you collected, and you force "I do not know".

Pick the smallest approach that can do the in-scope job. Small is not a lack of ambition. Small is how you stay honest with ten people.`,
        `Njia tatu za kawaida huchanganyikiwa katika maelezo ya jamii.

Msaidizi wa kanuni anaandika kitu unachoweza kuandika kama ikiwa-basi: ikiwa mabaki ya Ijumaa yalikuwa juu ya kg 8 wiki mbili mfululizo, pendekeza kuagiza kg 2 pungufu. Unaweza kusoma kila mstari. Unahitaji karibu data ndogo.

Msaidizi wa ujifunzaji wa mashine hupata mifumo usiyoandika, kutoka mifano mingi yenye lebo: picha za majani, mauzo ya zamani yenye mabaki yanayojulikana, kumbukumbu za saa za somo zenye kushindwa kupakia kunakojulikana. Unahitaji mifano ya kutosha ya eneo, na bado inatoa makisio. Maduka kumi kwa Ijumaa tatu kwa kawaida ni machache mno kufunza modeli nzito. Yanaweza kutosha kujaribu kanuni.

Msaidizi wa chatbot anajibu kwa maneno. Ni muhimu kueleza karatasi ya vidokezo kwa Kiswahili. Ni hatari inaporuhusiwa kubuni bei, saa ya shwari, au hatua ya kitabibu ambayo haikuwa kwenye maelezo yako. Ukitumia moja, unaifunga kwenye maandishi ya ukweli uliokusanya, na unalazimisha "Sijui".

Chagua njia ndogo zaidi inayoweza kufanya kazi iliyo ndani ya wigo. Ndogo si ukosefu wa tamaa. Ndogo ndivyo unavyobaki mwaminifu kwa watu kumi.`
      ),
      reveal([
        {
          termEn: "Rule-based helper",
          termSw: "Msaidizi wa kanuni",
          defEn: "If-then logic you can read and check against the notebook.",
          defSw: "Mantiki ya ikiwa-basi unayoweza kusoma na kukagua dhidi ya daftari.",
        },
        {
          termEn: "Machine learning (ML)",
          termSw: "Ujifunzaji wa mashine (ML)",
          defEn: "A model that guesses from many labelled local examples; ten short rows are rarely enough.",
          defSw: "Modeli inayokisia kutoka mifano mingi ya eneo yenye lebo; safu kumi fupi huwa hazitoshi.",
        },
        {
          termEn: "Constrained chatbot",
          termSw: "Chatbot iliyofungwa",
          defEn: "A word helper allowed to use only your collected facts, and required to say when it does not know.",
          defSw: "Msaidizi wa maneno anayeruhusiwa kutumia tu ukweli uliokusanya, na analazimika kusema asipojua.",
        },
        {
          termEn: "Overfit story",
          termSw: "Hadithi ya kufaa mno",
          defEn: "When a tiny dataset is treated as if it proved a general AI system.",
          defSw: "Wakati seti ndogo ya data inachukuliwa kana kwamba ilithibitisha mfumo wa jumla wa AI.",
        },
      ]),
      note(
        "Worked example: the same 8 kg, three tools",
        "Mfano: kg 8 zilezile, zana tatu",
        `The Kisumu group scored three options against the data they actually had: 30 stall-days of leftover kilograms, no photos, no long history.

Rules: if last two Fridays leftover was above 8 kg, print "consider 2 kg less". Readable. Fits the data. A trader can argue with it.

ML: a demand model would want seasons, weather, funerals, school calendars, and far more stalls. With 30 rows it would mostly memorise noise. They parked ML.

Chatbot: useful to read the tip in Kiswahili, but only if the prompt forbids new numbers. Their test prompt that allowed free answers invented a wholesale price of KES 40 that no stall had paid.

They chose rules plus an optional constrained chatbot that may only rephrase the printed tip. The named risk stayed "wrong guess treated as a fact", which a free chatbot would have made worse.`,
        `Kundi la Kisumu liliweka alama njia tatu dhidi ya data walikuwa nayo kweli: siku 30 za duka za kilogramu za mabaki, hakuna picha, hakuna historia ndefu.

Kanuni: ikiwa Ijumaa mbili zilizopita mabaki yalikuwa juu ya kg 8, chapisha "fikiria kg 2 pungufu". Inasomeka. Inafaa data. Mfanyabiashara anaweza kubishana nayo.

ML: modeli ya mahitaji ingetaka misimu, hali ya hewa, mazishi, kalenda za shule, na maduka mengi zaidi. Kwa safu 30 ingekaribia kukariri kelele. Waliweka ML kando.

Chatbot: muhimu kusoma kidokezo kwa Kiswahili, lakini tu kama maagizo yanakataza namba mpya. Maagizo yao ya majaribio yaliyoruhusu majibu huria yalibuni bei ya jumla ya KES 40 ambayo hakuna duka lililokuwa limelipa.

Walichagua kanuni pamoja na chatbot ya hiari iliyofungwa inayoweza tu kueleza upya kidokezo kilichochapishwa. Hatari iliyotajwa ilibaki "makisio mabaya yanayochukuliwa kama ukweli", ambayo chatbot huria ingeizidisha.`
      ),
      scenario({
        titleEn: "Scenario: 'we need ML or it is not AI'",
        titleSw: "Hali: 'tunahitaji ML au si AI'",
        situationEn:
          "A visitor tells your water-queue group that a painted board is 'not innovation' and that you must train a model on phone photos of the line.",
        situationSw:
          "Mgeni anaiambia kundi lenu la foleni ya maji kwamba ubao uliopakwa 'si uvumbuzi' na kwamba lazima mfunze modeli kwa picha za simu za foleni.",
        questionEn: "What is the responsible choice?",
        questionSw: "Chaguo lenye uwajibikaji ni lipi?",
        optionsEn: [
          "Train on queue photos so the project counts as AI",
          "Keep the smallest approach that helps, and refuse face photos that the job does not need",
          "Add ML in secret while keeping the board for show",
          "Abandon the borehole because boards are old-fashioned",
        ],
        optionsSw: [
          "Funza kwa picha za foleni ili mradi uhesabiwe kama AI",
          "Weka njia ndogo zaidi inayosaidia, na ukatae picha za nyuso ambazo kazi haihitaji",
          "Ongeza ML kwa siri huku ukiweka ubao kwa onyesho",
          "Acha kisima kwa sababu mbao ni za kizamani",
        ],
        correctIndex: 1,
        hintsEn: [
          "Counting as AI is not a community outcome.",
          "Correct. Photos of queues are a privacy harm. A board can still use AI thinking: counts, guesses, and a rule about uncertainty.",
          "Secret extra tools destroy consent.",
          "Old-fashioned and useful beats fashionable and harmful.",
        ],
        hintsSw: [
          "Kuhesabiwa kama AI si matokeo ya jamii.",
          "Sahihi. Picha za foleni ni madhara ya faragha. Ubao bado unaweza kutumia mawazo ya AI: hesabu, makisio, na kanuni kuhusu kutokuwa na uhakika.",
          "Zana za ziada za siri zinaharibu idhini.",
          "Ya kizamani na yenye manufaa inashinda ya mtindo na yenye madhara.",
        ],
        explainEn: "Approach follows data and harm, not a visitor's fashion test.",
        explainSw: "Njia inafuata data na madhara, si mtihani wa mtindo wa mgeni.",
      }),
      quiz(
        "You have 30 stall-days of leftover kilograms and no photos. The best first approach is usually:",
        "Una siku 30 za duka za kilogramu za mabaki na hakuna picha. Njia bora ya kwanza kwa kawaida ni:",
        [
          "A large model trained from scratch",
          "A readable rule, with a chatbot only if it is forbidden from inventing numbers",
          "A public ranking of traders",
          "Scraping foreign wholesale sites",
        ],
        [
          "Modeli kubwa iliyofunzwa kutoka mwanzo",
          "Kanuni inayosomeka, na chatbot tu ikiwa imekatazwa kubuni namba",
          "Orodha ya umma ya wafanyabiashara",
          "Kununua tovuti za jumla za kigeni",
        ],
        1,
        "Small local tables support rules. They rarely support serious ML, and unconstrained chatbots invent facts.",
        "Jedwali ndogo za eneo zinasaidia kanuni. Huwa hazitoshelezi ML nzito, na chatbot zisizofungwa zinabuni ukweli."
      ),
      note(
        "Try it: score three approaches",
        "Jaribu: weka alama njia tatu",
        `For your problem, write Rules / ML / Chatbot. For each, write: data we actually have, harm if it is wrong, whether a ten-person pilot can test it.

Circle the smallest one that can do the in-scope job. If you circled ML, list the labelled examples you already have. If the list is short, circle again.`,
        `Kwa tatizo lako, andika Kanuni / ML / Chatbot. Kwa kila moja, andika: data tuliyo nayo kweli, madhara ikiwa ni kosa, kama jaribio la watu kumi linaweza kujaribu.

Zungusha ndogo zaidi inayoweza kufanya kazi iliyo ndani ya wigo. Ukiizungusha ML, orodhesha mifano yenye lebo ambayo tayari una. Orodha ikiwa fupi, zungusha tena.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Smallest approach that does the job.
- Chatbots need a script and an allowed 'I do not know'.
- Next: freeze one helper and one named risk before you meet ten people.`,
        `- Njia ndogo zaidi inayofanya kazi.
- Chatbot zinahitaji maandishi na 'Sijui' inayoruhusiwa.
- Ifuatayo: gandisha msaidizi mmoja na hatari moja iliyotajwa kabla ya kukutana na watu kumi.`
      ),
    ],
  },
  {
    id: "cap-i-u6",
    titleEn: "One helper, one named risk",
    titleSw: "Msaada mmoja, hatari moja iliyotajwa",
    cards: [
      note(
        "Freeze the pair before the pilot",
        "Gandisha jozi kabla ya jaribio",
        `By now you have a number, a boundary, a data plan, consent, and an approach. Freeze one helper sentence and one risk sentence. If either sentence still contains "and also", you are carrying two projects into a ten-person week.

The risk must be the one this helper could realistically cause, not a generic poster about "AI ethics". For leftover tomatoes, a realistic risk is a wrong order hint that leaves a stall short on a funeral Saturday, or leftover numbers that leak and shame a trader. For a borehole, a realistic risk is sending people at the actually busy hour. For school connectivity, a realistic risk is blaming a child for a network failure.

Write what you will do when the risk happens. A helper without a response plan is a wish.`,
        `Kufikia sasa una namba, mpaka, mpango wa data, idhini, na njia. Gandisha sentensi moja ya msaidizi na sentensi moja ya hatari. Sentensi yoyote bado ikiwa na "na pia", unabeba miradi miwili kwenye wiki ya watu kumi.

Hatari lazima iwe ile msaidizi huyu anaweza kusababisha kweli, si bango la jumla kuhusu "maadili ya AI". Kwa nyanya zilizobaki, hatari halisi ni kidokezo kibaya cha kuagiza kinachoacha duka kikiwa na upungufu Jumamosi ya mazishi, au namba za mabaki zinazovuja na kumwaibisha mfanyabiashara. Kwa kisima, hatari halisi ni kuwapeleka watu saa ambayo kweli kuna msongamano. Kwa muunganisho wa shule, hatari halisi ni kulaumu mtoto kwa kushindwa kwa mtandao.

Andika utakachofanya hatari inapotokea. Msaidizi bila mpango wa majibu ni hamu.`
      ),
      reveal([
        {
          termEn: "Named risk",
          termSw: "Hatari iliyotajwa",
          defEn: "The specific harm this helper could cause in this place, written in ordinary words.",
          defSw: "Madhara mahususi ambayo msaidizi huyu anaweza kusababisha mahali hapa, yaliyoandikwa kwa maneno ya kawaida.",
        },
        {
          termEn: "Response plan",
          termSw: "Mpango wa majibu",
          defEn: "What you will do in the first hour after the harm: take the helper down, tell people, correct the number.",
          defSw: "Utakachofanya katika saa ya kwanza baada ya madhara: tanda msaidizi, waambie watu, sahihisha namba.",
        },
        {
          termEn: "Human in charge",
          termSw: "Binadamu msimamizi",
          defEn: "The trader, teacher or committee member who can ignore the helper without being punished.",
          defSw: "Mfanyabiashara, mwalimu au mjumbe wa kamati anayeweza kumpuuza msaidizi bila kuadhibiwa.",
        },
      ]),
      note(
        "Worked example: a short-stall Saturday",
        "Mfano: Jumamosi ya duka lenye upungufu",
        `Helper sentence: "Each Friday evening we hand stall T1–T8 a paper tip: if leftover was above 8 kg on the last two Fridays, consider buying 2 kg less tomorrow. The trader decides."

Named risk: "A funeral Saturday can empty a stall that followed the Friday tip, and neighbours may blame the youth group for lost sales."

Response plan: the paper says "funerals and public holidays break this tip". If a trader reports a short stall, the group notes it the same day, stops handing tips for a week if two stalls are short, and does not hide the event in the baraza report.

Human in charge: the trader. Anyone who treats the tip as an order has misunderstood the helper.

They freeze this pair on the same page as the consent script. The pilot is not allowed to add mangoes mid-week.`,
        `Sentensi ya msaidizi: "Kila Ijumaa jioni tunawapa maduka T1–T8 kidokezo cha karatasi: mabaki yakiwa juu ya kg 8 Ijumaa mbili zilizopita, fikiria kununua kg 2 pungufu kesho. Mfanyabiashara anaamua."

Hatari iliyotajwa: "Jumamosi ya mazishi inaweza kumaliza duka lililofuata kidokezo cha Ijumaa, na majirani wanaweza kulaumu kundi la vijana kwa mauzo yaliyopotea."

Mpango wa majibu: karatasi inasema "mazishi na sikukuu za umma vinavunja kidokezo hiki". Mfanyabiashara akiripoti duka lenye upungufu, kundi linaandika siku hiyo, linaacha kutoa vidokezo kwa wiki ikiwa maduka mawili yana upungufu, na halifichi tukio katika ripoti ya baraza.

Binadamu msimamizi: mfanyabiashara. Yeyote anayechukulia kidokezo kama amri hajamwelewa msaidizi.

Wanagandisha jozi hii kwenye ukurasa uleule wa maandishi ya idhini. Jaribio haliruhusiwi kuongeza maembe katikati ya wiki.`
      ),
      scenario({
        titleEn: "Scenario: add a second helper because there is time",
        titleSw: "Hali: ongeza msaidizi wa pili kwa sababu kuna muda",
        situationEn:
          "Mid-pilot, a member wants to add a public chalkboard of each stall's leftover kilograms 'for motivation'.",
        situationSw:
          "Katikati ya jaribio, mwanachama anataka kuongeza ubao wa umma wa kilogramu za mabaki za kila duka 'kwa motisha'.",
        questionEn: "What should the group do?",
        questionSw: "Kundi linapaswa kufanya nini?",
        optionsEn: [
          "Add it; motivation is extra impact",
          "Refuse: it is a new helper with a new shame risk, outside the frozen pair and outside consent",
          "Add it only for stalls that are doing badly",
          "Add it in English so fewer people read it",
        ],
        optionsSw: [
          "Liongeze; motisha ni athari ya ziada",
          "Kataa: ni msaidizi mpya wenye hatari mpya ya aibu, nje ya jozi iliyogandishwa na nje ya idhini",
          "Liongeze tu kwa maduka yanayofanya vibaya",
          "Liongeze kwa Kiingereza ili watu wachache walisome",
        ],
        correctIndex: 1,
        hintsEn: [
          "Extra impact that shames people is extra harm.",
          "Correct. New helper, new risk, new consent. Not a mid-week extra.",
          "Showing only struggling stalls is targeted shame.",
          "Language as a hide is not minimisation.",
        ],
        hintsSw: [
          "Athari ya ziada inayoaibisha watu ni madhara ya ziada.",
          "Sahihi. Msaidizi mpya, hatari mpya, idhini mpya. Si kiongezeo cha katikati ya wiki.",
          "Kuonyesha maduka yanayohangaika tu ni aibu iliyolengwa.",
          "Lugha kama kuficha si kupunguza data.",
        ],
        explainEn: "The frozen pair is a safety device. Mid-pilot extras are how consent dies.",
        explainSw: "Jozi iliyogandishwa ni kifaa cha usalama. Viongezeo vya katikati ya jaribio ndivyo idhini inavyokufa.",
      }),
      quiz(
        "A named risk is useful only if:",
        "Hatari iliyotajwa ni ya manufaa tu ikiwa:",
        [
          "It sounds impressive to funders",
          "It matches this helper in this place, and you have a first-hour response",
          "It copies a generic ethics poster",
          "It is kept secret from the people in the pilot",
        ],
        [
          "Inasikika ya kuvutia kwa wafadhili",
          "Inalingana na msaidizi huyu mahali hapa, na una majibu ya saa ya kwanza",
          "Inanakili bango la jumla la maadili",
          "Imehifadhiwa siri kutoka kwa watu walio kwenye jaribio",
        ],
        1,
        "Generic posters do not tell you what to do on a funeral Saturday. A local risk plus a response does.",
        "Mabango ya jumla hayakuambii nini ufanye Jumamosi ya mazishi. Hatari ya eneo pamoja na majibu inakuambia."
      ),
      note(
        "Try it: freeze two sentences",
        "Jaribu: gandisha sentensi mbili",
        `Write Helper: ... and Risk: ... and Response: ...

Read them to someone who will not flatter you. If they cannot tell what you will do on a bad day, the response is still a slogan.`,
        `Andika Msaidizi: ... na Hatari: ... na Majibu: ...

Zisome kwa mtu ambaye hatakubembeleza. Akiwa hawezi kusema utakachofanya siku mbaya, majibu bado ni kauli.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- One helper, one risk, one first-hour response, one human in charge.
- No mid-pilot extras.
- Next: run a ten-person pilot without turning it into a launch.`,
        `- Msaidizi mmoja, hatari moja, majibu ya saa ya kwanza, binadamu mmoja msimamizi.
- Hakuna viongezeo vya katikati ya jaribio.
- Ifuatayo: endesha jaribio la watu kumi bila kuligeuza kuwa uzinduzi.`
      ),
    ],
  },
  {
    id: "cap-i-u7",
    titleEn: "Pilot with ten people",
    titleSw: "Jaribio na watu kumi",
    cards: [
      note(
        "Ten is a test, not a launch",
        "Kumi ni mtihani, si uzinduzi",
        `A pilot is time-boxed, place-boxed, and success-boxed before anyone starts. For this course, about ten people (or ten stalls, ten households, ten lesson hours counted as separate uses) is the right size.

Before day one, write:

- Start and end dates.
- Who is in, who declined, who is on the public fallback.
- The frozen helper and risk.
- How you will collect the same baseline unit during the pilot.
- The stop rule: what harm makes you take the helper down this afternoon.

During the week, do not recruit extra people to make the numbers prettier. Do not post photos of the pilot as advertising. Do not call it a county programme.

Ten people can still be harmed. Treat the week with the same care you would want if your own stall, tap or classroom were inside it.`,
        `Jaribio lina muda, mahali, na mafanikio yaliyowekwa kabla mtu yeyote kuanza. Kwa kozi hii, takriban watu kumi (au maduka kumi, kaya kumi, saa kumi za somo zinazohesabiwa kama matumizi tofauti) ndiyo ukubwa unaofaa.

Kabla ya siku ya kwanza, andika:

- Tarehe za kuanza na kuisha.
- Nani yumo, nani alikataa, nani yuko kwenye mbadala wa umma.
- Msaidizi na hatari vilivyogandishwa.
- Jinsi utakavyokusanya kipimo kile kile cha mstari wa msingi wakati wa jaribio.
- Kanuni ya kusimama: madhara gani yanakufanya utoe msaidizi alasiri hii.

Wakati wa wiki, usiajiri watu wa ziada ili namba zionekane nzuri. Usichapishe picha za jaribio kama matangazo. Usiite programu ya kaunti.

Watu kumi bado wanaweza kudhurika. Tendea wiki kwa uangalifu uleule ungependa kama duka lako, bomba au darasa lingekuwa ndani yake.`
      ),
      reveal([
        {
          termEn: "Pilot",
          termSw: "Jaribio dogo",
          defEn: "A small, dated, real trial with agreed stop rules, not a quiet launch.",
          defSw: "Jaribio halisi dogo lenye tarehe na kanuni za kusimama zilizokubaliwa, si uzinduzi wa kimya.",
        },
        {
          termEn: "Stop rule",
          termSw: "Kanuni ya kusimama",
          defEn: "The harm that ends the trial the same day, written before day one.",
          defSw: "Madhara yanayomaliza jaribio siku ileile, yaliyoandikwa kabla ya siku ya kwanza.",
        },
        {
          termEn: "Time-box",
          termSw: "Kipindi kilichowekwa",
          defEn: "A start and an end, so the pilot cannot quietly become permanent.",
          defSw: "Mwanzo na mwisho, ili jaribio lisiwe la kudumu kwa kimya.",
        },
      ]),
      note(
        "Worked example: two Fridays, eight stalls, two declined",
        "Mfano: Ijumaa mbili, maduka nane, wawili walikataa",
        `Pilot window: two Fridays and the Saturdays that follow. In: eight consenting stalls. Declined: two, still receiving the public clerk announcement. Helper: Friday paper tip. Stop rule: two stalls report being short on Saturday, or any leftover list appears in a chat.

Friday 1: six of eight collect a tip. Two are too busy. Saturday 1: median leftover 7 kg (baseline was 8). One stall is short after a funeral; they logged it the same day and did not hide it.

Friday 2: the funeral line is printed larger. Five stalls collect a tip. One withdraws consent; her rows are shredded that afternoon. Saturday 2: median leftover 6 kg among the remaining seven.

Nothing here is a launch. It is a week of notes. The stop rule was not triggered (one short stall, not two), but the funeral event goes into the honest report.

Calling this "AI rolled out to Kisumu markets" would be a lie.`,
        `Dirisha la jaribio: Ijumaa mbili na Jumamosi zinazofuata. Ndani: maduka nane yenye idhini. Walikataa: wawili, bado wanapokea tangazo la umma la karani. Msaidizi: kidokezo cha karatasi cha Ijumaa. Kanuni ya kusimama: maduka mawili yaripoti upungufu Jumamosi, au orodha yoyote ya mabaki ikitokea kwenye gumzo.

Ijumaa 1: sita kati ya nane wanachukua kidokezo. Wawili wana shughuli nyingi. Jumamosi 1: wastani wa kati wa mabaki kg 7 (mstari wa msingi ulikuwa 8). Duka moja lina upungufu baada ya mazishi; waliandika siku hiyo na hawakuficha.

Ijumaa 2: mstari wa mazishi umechapishwa mkubwa. Maduka matano yanachukua kidokezo. Moja linavuta idhini; safu zake zinapasuliwa alasiri hiyo. Jumamosi 2: wastani wa kati kg 6 miongoni mwa saba yaliyobaki.

Hakuna hapa ni uzinduzi. Ni wiki ya maelezo. Kanuni ya kusimama haikuanzishwa (duka moja lenye upungufu, si mawili), lakini tukio la mazishi linaingia kwenye ripoti ya kweli.

Kuita hii "AI imeenezwa katika masoko ya Kisumu" kungekuwa uongo.`
      ),
      scenario({
        titleEn: "Scenario: add twenty more stalls because it is going well",
        titleSw: "Hali: ongeza maduka ishirini kwa sababu inaenda vizuri",
        situationEn:
          "After one quiet Friday, a member wants to hand tips to twenty extra stalls that never heard the consent script.",
        situationSw:
          "Baada ya Ijumaa moja shwari, mwanachama anataka kutoa vidokezo kwa maduka ishirini ya ziada ambayo hayakusikia maandishi ya idhini.",
        questionEn: "What should happen?",
        questionSw: "Nini kifanyike?",
        optionsEn: [
          "Add them; momentum matters",
          "Hold the time-box: finish the ten-person design, including decliners, then decide",
          "Add them but skip leftover numbers",
          "Add them and post a victory photo",
        ],
        optionsSw: [
          "Waongeze; kasi ina maana",
          "Shika kipindi: maliza muundo wa watu kumi, wakiwemo waliokataa, kisha amua",
          "Waongeze lakini ruka namba za mabaki",
          "Waongeze na chapisha picha ya ushindi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Momentum without consent is just a wider unmeasured risk.",
          "Correct. A pilot that grows mid-week is a launch in disguise.",
          "Skipping numbers does not skip the need for agreement.",
          "Victory photos of traders can be a privacy harm.",
        ],
        hintsSw: [
          "Kasi bila idhini ni hatari pana isiyopimwa.",
          "Sahihi. Jaribio linalokua katikati ya wiki ni uzinduzi uliofichwa.",
          "Kuruka namba hakuruki hitaji la makubaliano.",
          "Picha za ushindi za wafanyabiashara zinaweza kuwa madhara ya faragha.",
        ],
        explainEn: "Ten people is the point. Extra stalls belong in a later decision after honest measurement.",
        explainSw: "Watu kumi ndio maana. Maduka ya ziada ni ya uamuzi wa baadaye baada ya kipimo cha kweli.",
      }),
      quiz(
        "A stop rule is written:",
        "Kanuni ya kusimama inaandikwa:",
        [
          "After the first success story",
          "Before day one, naming the harm that ends the trial the same day",
          "Only if a funder asks",
          "Never, because stopping looks weak",
        ],
        [
          "Baada ya hadithi ya kwanza ya mafanikio",
          "Kabla ya siku ya kwanza, ikitajia madhara yanayomaliza jaribio siku ileile",
          "Tu kama mfadhili anauliza",
          "Kamwe, kwa sababu kusimama kunaonekana dhaifu",
        ],
        1,
        "You cannot invent a stop rule after the harm. Write it when you are still calm.",
        "Huwezi kubuni kanuni ya kusimama baada ya madhara. Iandike ungali mtulivu."
      ),
      note(
        "Try it: a one-week card",
        "Jaribu: kadi ya wiki moja",
        `On one card: dates, who is in, who declined, helper, risk, stop rule, baseline unit.

If the card needs a second card, your pilot is still a launch plan. Cut.`,
        `Kwenye kadi moja: tarehe, nani yumo, nani alikataa, msaidizi, hatari, kanuni ya kusimama, kipimo cha mstari wa msingi.

Kadi ikihitaji kadi ya pili, jaribio lako bado ni mpango wa uzinduzi. Kata.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Ten is a test. Write the stop rule first.
- Do not grow the group to pretty the numbers.
- Next: measure including people who dropped out or never started.`,
        `- Kumi ni mtihani. Andika kanuni ya kusimama kwanza.
- Usikuze kundi ili namba zionekane nzuri.
- Ifuatayo: pima wakiwemo walioacha au wasioanza.`
      ),
    ],
  },
  {
    id: "cap-i-u8",
    titleEn: "Measure honestly, including dropouts",
    titleSw: "Pima kwa uaminifu, wakiwemo walioacha",
    cards: [
      note(
        "The denominator includes people who left",
        "Kigawanyo kinajumuisha watu walioondoka",
        `Honest measurement uses the same unit as the baseline, and it uses the people you invited, not only the people who stayed to clap.

If you invited ten and two declined, your story starts with ten, not eight. If one of the eight withdrew, the leftover kilograms of the remaining seven are not "the pilot result" unless you also say who left and why.

Survivorship bias is the habit of judging a tool only by people who kept using it. The unhappy often leave first. If you quote only fans, you will scale a tool that quietly failed for the people who most needed a kind design.

Also log confounders: a funeral, a rain that emptied the market, a pump repaired mid-week, a school generator that appeared on Thursday. If you hide them, your 2 kg improvement is not yours.

Teens finishing this stretch should be able to stand up and say the full fraction: helped, confused, declined, withdrew, walked past.`,
        `Kipimo cha kweli kinatumia kipimo kile kile cha mstari wa msingi, na kinatumia watu uliowaalika, si tu waliobaki kupiga makofi.

Ukiwaalika kumi na wawili wakakataa, hadithi yako inaanza na kumi, si nane. Mmoja wa nane akivuta idhini, kilogramu za mabaki za saba waliobaki si "matokeo ya jaribio" isipokuwa pia unasema nani aliondoka na kwa nini.

Upendeleo wa waliofanikiwa ni tabia ya kuhukumu zana kwa watu walioendelea kuitumia tu. Wenye kutoridhika mara nyingi huondoka kwanza. Ukinukuu mashabiki tu, utaeneza zana iliyoshindwa kimya kwa watu waliohitaji muundo mwema zaidi.

Pia andika vichanganyiko: mazishi, mvua iliyomwaga soko, pampu iliyorekebishwa katikati ya wiki, jenereta ya shule iliyotokea Alhamisi. Ukiyaficha, uboreshaji wako wa kg 2 si wako.

Vijana wanaomaliza sehemu hii wanapaswa kuweza kusimama na kusema sehemu kamili: waliosaidiwa, waliochanganyikiwa, waliokataa, waliovuta, waliopita.`
      ),
      reveal([
        {
          termEn: "Denominator",
          termSw: "Kigawanyo",
          defEn: "Everyone you invited or intended to serve, including people who said no or left.",
          defSw: "Kila mtu uliyemwalika au uliyekusudia kumhudumia, wakiwemo waliosema hapana au walioondoka.",
        },
        {
          termEn: "Survivorship bias",
          termSw: "Upendeleo wa waliofanikiwa",
          defEn: "Judging success only from people who kept using the helper.",
          defSw: "Kuhukumu mafanikio kutoka kwa watu walioendelea kutumia msaidizi tu.",
        },
        {
          termEn: "Confounder",
          termSw: "Kichanganyiko",
          defEn: "Something else that changed during the trial and could explain the result.",
          defSw: "Kitu kingine kilichobadilika wakati wa jaribio na kinaweza kueleza matokeo.",
        },
        {
          termEn: "Full fraction",
          termSw: "Sehemu kamili",
          defEn: "Helped / confused / declined / withdrew / walked past, said in one breath.",
          defSw: "Waliosaidiwa / waliochanganyikiwa / waliokataa / waliovuta / waliopita, yamesemwa pumzi moja.",
        },
      ]),
      note(
        "Worked example: 6 kg is not 10 out of 10",
        "Mfano: kg 6 si 10 kati ya 10",
        `After two Fridays the group could have said, "Leftovers fell from 8 kg to 6 kg. Success."

The honest paragraph:

"We invited 10 stalls. 2 declined (tax fear, copy fear) and still heard the public announcement. 8 joined. 1 withdrew after Friday 1; her data was shredded. Among 7 remaining, median leftover moved from 8 kg to 6 kg. 1 stall was short on a funeral Saturday. 2 stalls were too busy to pick up a tip on Friday 1. We cannot claim the 2 kg for Kisumu. We can claim a small, mixed, local signal that a rule-based tip is understandable, with a real harm path on funeral days."

That paragraph is how you stay welcome in the market next month.

A baraza that hears only "6 kg, success" will fund a wider rollout that repeats the funeral failure at scale.`,
        `Baada ya Ijumaa mbili kundi lingeweza kusema, "Mabaki yalishuka kutoka kg 8 hadi kg 6. Mafanikio."

Aya ya kweli:

"Tuliwaalika maduka 10. 2 yalikataa (hofu ya ushuru, hofu ya kunakili) na bado yalisikia tangazo la umma. 8 yalijiunga. 1 lilivuta idhini baada ya Ijumaa 1; data yake ilipasuliwa. Miongoni mwa 7 yaliyobaki, wastani wa kati wa mabaki ulisogea kutoka kg 8 hadi kg 6. Duka 1 lilikuwa na upungufu Jumamosi ya mazishi. Maduka 2 yalikuwa na shughuli nyingi kuchukua kidokezo Ijumaa 1. Hatuwezi kudai kg 2 kwa Kisumu. Tunaweza kudai ishara ndogo, mchanganyiko, ya eneo kwamba kidokezo cha kanuni kinaeleweka, chenye njia halisi ya madhara siku za mazishi."

Aya hiyo ndiyo unavyobaki ukikaribishwa sokoni mwezi ujao.

Baraza linalosikia tu "kg 6, mafanikio" litafadhili uenezaji mpana utakaorudia kushindwa kwa mazishi kwa kiwango kikubwa.`
      ),
      scenario({
        titleEn: "Scenario: the six who stayed",
        titleSw: "Hali: sita waliobaki",
        situationEn:
          "Your borehole pilot invited 10 households. 4 stopped fetching at that tap (one quarrel, three unexplained). The remaining 6 say wait-time fell. You are due at the chiefs' baraza tomorrow.",
        situationSw:
          "Jaribio lako la kisima liliwaalika kaya 10. 4 ziliacha kuchota kwenye bomba hilo (ugomvi mmoja, tatu bila maelezo). 6 zilizobaki zinasema muda wa kusubiri ulishuka. Unapaswa kuwa barazani kesho.",
        questionEn: "What must you say?",
        questionSw: "Lazima useme nini?",
        optionsEn: [
          "Wait-time fell for users — the 4 do not count",
          "We invited 10; 4 left, including a quarrel; 6 report shorter waits; we do not yet know if the helper caused harm or help overall",
          "Only the chief's household matters",
          "Replace the 4 with new households tonight so the slide shows 10",
        ],
        optionsSw: [
          "Muda wa kusubiri ulishuka kwa watumiaji — 4 hazihesabiwi",
          "Tuliwaalika 10; 4 ziliondoka, pamoja na ugomvi; 6 zinaripoti kusubiri fupi; bado hatujui kama msaidizi alisababisha madhara au msaada kwa ujumla",
          "Kaya ya chifu tu ndiyo inayo maana",
          "Badilisha 4 na kaya mpya usiku huu ili slaidi ionyeshe 10",
        ],
        correctIndex: 1,
        hintsEn: [
          "The 4 are the story you are most tempted to hide, which means they are the story you must tell.",
          "Correct. Overall effect is unknown until dropouts are understood.",
          "One household is not a denominator.",
          "Replacing people to fill a slide is fabrication.",
        ],
        hintsSw: [
          "4 ndizo hadithi unayojaribiwa zaidi kuficha, ambayo inamaanisha ndizo hadithi lazima ueseme.",
          "Sahihi. Athari ya jumla haijulikani hadi walioacha waeleweke.",
          "Kaya moja si kigawanyo.",
          "Kubadilisha watu ili kujaza slaidi ni uzushi.",
        ],
        explainEn: "A quarrel in the dropout column can be the most important result. Hide it and you will scale a fight.",
        explainSw: "Ugomvi katika safu ya walioacha unaweza kuwa matokeo muhimu zaidi. Ufiche na utaeneza ugomvi.",
      }),
      quiz(
        "The cheapest trustworthy evaluation for a ten-person community pilot is:",
        "Tathmini ya kuaminika na ya nafuu zaidi kwa jaribio la jamii la watu kumi ni:",
        [
          "A national randomised trial",
          "The same baseline unit, the full fraction including dropouts, and named confounders",
          "A screenshot of downloads",
          "Friends' compliments in a chat",
        ],
        [
          "Jaribio la kitaifa la nasibu",
          "Kipimo kile kile cha mstari wa msingi, sehemu kamili ikiwa na walioacha, na vichanganyiko vilivyotajwa",
          "Picha ya skrini ya vipakuliwaji",
          "Pongezi za marafiki kwenye gumzo",
        ],
        1,
        "Small projects earn the next yes with fractions and confounders, not with theatre.",
        "Miradi midogo inapata ndiyo inayofuata kwa sehemu na vichanganyiko, si kwa maonyesho."
      ),
      note(
        "Try it: say the full fraction aloud",
        "Jaribu: sema sehemu kamili kwa sauti",
        `Fill and read:

"We invited __. Declined __. Joined __. Withdrew __. Helped __. Confused __. Walked past __. Confounders: __. We will / will not claim success because __."

If you cannot fill the blanks, you are not ready to tell stakeholders. If you are a teen finishing this track, this spoken paragraph plus your data plan is your project.`,
        `Jaza na soma:

"Tuliwaalika __. Walikataa __. Walijiunga __. Walivuta __. Waliosaidiwa __. Waliochanganyikiwa __. Walipita __. Vichanganyiko: __. Tutadai / hatutadai mafanikio kwa sababu __."

Ukiwa huwezi kujaza mapengo, bado huja tayari kuwaambia wadau. Ukiwa kijana unayemaliza ngazi hii, aya hii inayosemwa pamoja na mpango wako wa data ndio mradi wako.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Denominator = invited, not remaining fans.
- Name confounders. Do not pocket their effect.
- Next (older learners): tell stakeholders the full fraction without theatre.`,
        `- Kigawanyo = walioalikwa, si mashabiki waliobaki.
- Taja vichanganyiko. Usifukie athari yao.
- Ifuatayo (wanafunzi wakubwa): waambie wadau sehemu kamili bila maonyesho.`
      ),
    ],
  },
  {
    id: "cap-i-u9",
    titleEn: "Tell the stakeholders",
    titleSw: "Waambie wadau",
    cards: [
      note(
        "The baraza is not a demo day",
        "Baraza si siku ya maonyesho",
        `Stakeholders for a community pilot usually include: the people who joined, the people who declined, the committee or clerk, a parent or teacher if learners were involved, and the county officer whose desk this would land on if anyone talked about scale (water, environment, education, trade, ICT).

Your job is to report the full fraction, the named risk that did or did not fire, and what you will delete and when. Your job is not to impress them with a dashboard.

Bring one page, not twelve. If you use a writing helper to draft it, constrain the helper: no invented statistics, no "the county has endorsed this", no hiding of dropouts.

If a stakeholder asks to scale this week, your answer is a process, not a thrill: more consent, more measurement, more support, or a no.`,
        `Wadau wa jaribio la jamii kwa kawaida ni: watu waliojiunga, waliokataa, kamati au karani, mzazi au mwalimu wanafunzi wakiwa walijumuishwa, na afisa wa kaunti ambaye dawati lake hii ingeangukia kama mtu angeongea kuhusu kueneza (maji, mazingira, elimu, biashara, ICT).

Kazi yako ni kuripoti sehemu kamili, hatari iliyotajwa iliyowaka au isiyowaka, na utakachofuta na lini. Kazi yako si kuwavutia kwa dashibodi.

Leta ukurasa mmoja, si kumi na mbili. Ukitumia msaidizi wa kuandika kuandaa, mfungie: hakuna takwimu zilizobuniwa, hakuna "kaunti imeidhinisha hii", hakuna kuficha walioacha.

Mdau akiomba kueneza wiki hii, jibu lako ni mchakato, si msisimko: idhini zaidi, kipimo zaidi, msaada zaidi, au hapana.`
      ),
      reveal([
        {
          termEn: "Stakeholder report",
          termSw: "Ripoti ya wadau",
          defEn: "A short, checkable account of who was invited, what changed, what broke, and what will be deleted.",
          defSw: "Maelezo mafupi yanayoweza kukaguliwa ya nani alialikwa, nini kilbadilika, nini kilivunjika, na nini kitafutwa.",
        },
        {
          termEn: "Endorsement fiction",
          termSw: "Hadithi ya idhini",
          defEn: "Claiming a chief, county or school has adopted the tool when they only heard a pitch.",
          defSw: "Kudai chifu, kaunti au shule wamechukua zana waliposikia tu maelezo.",
        },
        {
          termEn: "County desk",
          termSw: "Dawati la kaunti",
          defEn: "The officer who would inherit a mess if you scaled without them.",
          defSw: "Afisa ambaye angerithi fujo ukieneza bila yeye.",
        },
      ]),
      note(
        "Worked example: five minutes with the clerk and the youth office",
        "Mfano: dakika tano na karani na ofisi ya vijana",
        `The group does not hire a hall. They meet the market clerk and one officer from the county youth office at the stall lane.

They read: invited 10, declined 2, withdrew 1, median leftover 8 kg to 6 kg among 7, one funeral short-stall, no chat leaks, shredding in four weeks, no request to become a county system.

The officer asks whether they can "put this in ten markets". They say not on this evidence, and not without trade and ICT desks, and not without a support person who is not a volunteer with a personal phone.

The clerk asks them to keep the public announcement for the two who declined. They agree. That is a stakeholder outcome: a boundary held in public.`,
        `Kundi halikodi ukumbi. Wanakutana na karani wa soko na afisa mmoja kutoka ofisi ya vijana ya kaunti kwenye njia ya maduka.

Wanasoma: walioalikwa 10, walikataa 2, walivuta 1, wastani wa kati kg 8 hadi kg 6 miongoni mwa 7, duka moja lenye upungufu wa mazishi, hakuna uvujaji wa gumzo, kuparua baada ya wiki nne, hakuna ombi la kuwa mfumo wa kaunti.

Afisa anauliza kama wanaweza "kuweka hii kwenye masoko kumi". Wanasema si kwa ushahidi huu, na si bila dawati za biashara na ICT, na si bila mtu wa msaada ambaye si mjitoleaji mwenye simu binafsi.

Karani anawaomba waendelee na tangazo la umma kwa wawili waliokataa. Wanakubali. Hiyo ni matokeo ya wadau: mpaka ulioshikwa hadharani.`
      ),
      scenario({
        titleEn: "Scenario: 'the county has endorsed us'",
        titleSw: "Hali: 'kaunti imetuidhinisha'",
        situationEn:
          "After a polite listening session, a member drafts a social post: 'County government endorses our AI market tool.' The officer only said thank you.",
        situationSw:
          "Baada ya kikao cha kusikiliza kwa heshima, mwanachama anaandaa chapisho: 'Serikali ya kaunti inaidhinisha zana yetu ya AI ya soko.' Afisa alisema asante tu.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Post it; thank you is basically an endorsement",
          "Delete the claim; report only what was said, and offer the officer a chance to correct the written note",
          "Post it in English so local officers will not see it",
          "Add the county logo to the tip sheet",
        ],
        optionsSw: [
          "Chapisha; asante ni karibu idhini",
          "Futa dai; ripoti tu yaliyosemwa, na umpe afisa nafasi ya kurekebisha maelezo yaliyoandikwa",
          "Chapisha kwa Kiingereza ili maafisa wa eneo wasione",
          "Ongeza nembo ya kaunti kwenye karatasi ya vidokezo",
        ],
        correctIndex: 1,
        hintsEn: [
          "Thank you is manners, not a decision.",
          "Correct. Endorsement fiction burns the next meeting.",
          "Language as a hide is still a false claim.",
          "Logos are a kind of invented endorsement.",
        ],
        hintsSw: [
          "Asante ni adabu, si uamuzi.",
          "Sahihi. Hadithi ya idhini inachoma kikao kijacho.",
          "Lugha kama kuficha bado ni dai la uongo.",
          "Nembo ni aina ya idhini iliyobuniwa.",
        ],
        explainEn: "Say only what the stakeholder said. Everything else is fiction that will follow you.",
        explainSw: "Sema tu kile mdau alisema. Kila kitu kingine ni hadithi itakayokufuata.",
      }),
      pb({
        titleEn: "Build a stakeholder-briefing prompt",
        titleSw: "Jenga maagizo ya muhtasari wa wadau",
        introEn:
          "You want a writing helper to turn your pilot notes into a one-page briefing for the market clerk and county youth office.",
        introSw:
          "Unataka msaidizi wa kuandika ageuze maelezo ya jaribio kuwa muhtasari wa ukurasa mmoja kwa karani wa soko na ofisi ya vijana ya kaunti.",
        goalEn:
          "Your prompt must force the full fraction, forbid invented endorsements and invented numbers, and include deletion and dropouts.",
        goalSw:
          "Maagizo yako lazima yalazimishe sehemu kamili, yakataze idhini zilizobuniwa na namba zilizobuniwa, na yajumuishe kufuta na walioacha.",
        blocksEn: [
          "Audience: market clerk and county youth officer, one page, Kiswahili and English headings",
          "Structure: invited / declined / withdrew / result in kg / confounders / named risk / delete date",
          "Use only numbers from our two-Friday notebook; mark anything else as unknown",
          "Forbidden: claiming county endorsement, hiding dropouts, adding mangoes or other markets",
          "Close with one ask: keep the public fallback for people who said no",
        ],
        blocksSw: [
          "Hadhira: karani wa soko na afisa wa vijana wa kaunti, ukurasa mmoja, vichwa vya Kiswahili na Kiingereza",
          "Muundo: walioalikwa / walikataa / walivuta / matokeo kwa kg / vichanganyiko / hatari iliyotajwa / tarehe ya kufuta",
          "Tumia tu namba kutoka daftari letu la Ijumaa mbili; weka alama nyingine kama hazijulikani",
          "Katazwa: kudai idhini ya kaunti, kuficha walioacha, kuongeza maembe au masoko mengine",
          "Funga kwa ombi moja: weka mbadala wa umma kwa waliosema hapana",
        ],
        required: [0, 1, 2, 3],
        sampleEn:
          "Audience: market clerk and county youth officer, one page, Kiswahili and English headings. Structure: invited / declined / withdrew / result in kg / confounders / named risk / delete date. Use only numbers from our two-Friday notebook; mark anything else as unknown. Forbidden: claiming county endorsement, hiding dropouts, adding mangoes or other markets. Close with one ask: keep the public fallback for people who said no.",
        sampleSw:
          "Hadhira: karani wa soko na afisa wa vijana wa kaunti, ukurasa mmoja, vichwa vya Kiswahili na Kiingereza. Muundo: walioalikwa / walikataa / walivuta / matokeo kwa kg / vichanganyiko / hatari iliyotajwa / tarehe ya kufuta. Tumia tu namba kutoka daftari letu la Ijumaa mbili; weka alama nyingine kama hazijulikani. Katazwa: kudai idhini ya kaunti, kuficha walioacha, kuongeza maembe au masoko mengine. Funga kwa ombi moja: weka mbadala wa umma kwa waliosema hapana.",
      }),
      quiz(
        "When you tell county stakeholders about a pilot, you should:",
        "Unapowaambia wadau wa kaunti kuhusu jaribio, unapaswa:",
        [
          "Hide dropouts so they stay excited",
          "Give the full fraction, the risk, the delete date, and no invented endorsement",
          "Ask them to post the county logo today",
          "Hand them traders' phone numbers as a gift",
        ],
        [
          "Ficha walioacha ili wabaki wamesisimka",
          "Toa sehemu kamili, hatari, tarehe ya kufuta, na hakuna idhini iliyobuniwa",
          "Waombe wachapishe nembo ya kaunti leo",
          "Wape namba za simu za wafanyabiashara kama zawadi",
        ],
        1,
        "County desks inherit both success and mess. Give them the mess while it is still small.",
        "Dawati za kaunti hurithi mafanikio na fujo. Wape fujo ungali ndogo.",
      ),
      note(
        "Try it: one page, five listeners",
        "Jaribu: ukurasa mmoja, wasikilizaji watano",
        `List five stakeholders by role. Write one sentence each would need that the others might not (clerk: fallback; youth office: no endorsement fiction; traders: shred date; declined people: they were not punished; ICT: nothing is going on a county server yet).

Practise the page in three minutes.`,
        `Orodhesha wadau watano kwa jukumu. Andika sentensi moja kila mmoja angehitaji ambayo wengine huenda hawahitaji (karani: mbadala; ofisi ya vijana: hakuna hadithi ya idhini; wafanyabiashara: tarehe ya kuparua; waliokataa: hawakuadhibiwa; ICT: hakuna kinachoenda seva ya kaunti bado).

Fanya mazoezi ya ukurasa kwa dakika tatu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Report the full fraction. Never invent an endorsement.
- County ICT is a listener even when you are still on paper.
- Next: change the helper from evidence, including evidence you dislike.`,
        `- Ripoti sehemu kamili. Usibuni idhini.
- ICT ya kaunti ni msikilizaji hata ungali kwenye karatasi.
- Ifuatayo: badilisha msaidizi kutoka ushahidi, pamoja na ushahidi usiopenda.`
      ),
    ],
  },
  {
    id: "cap-i-u10",
    titleEn: "Change the plan from evidence",
    titleSw: "Badilisha mpango kutoka ushahidi",
    cards: [
      note(
        "A mixed result is a successful pilot",
        "Matokeo mchanganyiko ni jaribio lililofanikiwa",
        `If the numbers moved a little and a harm path appeared, you won information. The failure is refusing to change.

Typical honest changes:

- Print the exception larger (funerals, rain, generator days).
- Drop the chatbot that invented a price.
- Move from ten stalls to the same ten for another month, not to ten markets.
- Shred sooner because people were nervous.
- Kill the helper because dropouts were the real result.

Sunk-cost thinking says, "We already made the poster, so we must continue." Community care says the poster was a hypothesis.

Write the change as a new frozen pair. Old helper plus new extra is how risks stack.`,
        `Namba zikisogea kidogo na njia ya madhara ikatokea, umeshinda taarifa. Kushindwa ni kukataa kubadilika.

Mabadiliko ya kawaida ya kweli:

- Chapisha kighairi kubwa zaidi (mazishi, mvua, siku za jenereta).
- Tupa chatbot iliyobuni bei.
- Sogea kutoka maduka kumi hadi yale yale kumi kwa mwezi mwingine, si masoko kumi.
- Parua mapema kwa sababu watu walikuwa na wasiwasi.
- Ua msaidizi kwa sababu walioacha ndiyo matokeo halisi.

Mawazo ya gharama iliyozama yasema, "Tayari tulitengeneza bango, kwa hiyo lazima tuendelee." Uangalifu wa jamii unasema bango lilikuwa dhana.

Andika mabadiliko kama jozi mpya iliyogandishwa. Msaidizi wa zamani pamoja na kiongezeo kipya ndivyo hatari zinavyorundika.`
      ),
      reveal([
        {
          termEn: "Iterate",
          termSw: "Boresha kwa mzunguko",
          defEn: "Change one thing on purpose because of evidence, then freeze again.",
          defSw: "Badilisha kitu kimoja kwa makusudi kwa sababu ya ushahidi, kisha gandisha tena.",
        },
        {
          termEn: "Kill the helper",
          termSw: "Ua msaidizi",
          defEn: "Stop the tool on purpose because harm or uselessness is the result.",
          defSw: "Simamisha zana kwa makusudi kwa sababu madhara au kutokuwa na faida ndiyo matokeo.",
        },
        {
          termEn: "Sunk cost",
          termSw: "Gharama iliyozama",
          defEn: "The work you already did, which must not decide whether people stay safe.",
          defSw: "Kazi ambayo tayari umefanya, ambayo isiamue kama watu wanabaki salama.",
        },
      ]),
      note(
        "Worked example: they kill the chatbot and keep the rule",
        "Mfano: wanaua chatbot na kuweka kanuni",
        `After the baraza, the group looks at two extras they had been proud of.

The constrained chatbot had still slipped a number in a test when a member pasted a sloppy prompt. They kill it for the next month. Kiswahili explanation will be a human reading the paper tip.

The rule stays, with a larger funeral exception, same eight-minus-one stalls, same shred date.

They write a new freeze line: "No word helper until we have a prompt that fails closed on three people who try to trick it." That is iteration. It is also humility.

A visitor calls this "going backwards". The traders call it "finally listening".`,
        `Baada ya baraza, kundi linaangalia viongezeo viwili walivyokuwa wakivijivunia.

Chatbot iliyofungwa bado iliteleza namba katika jaribio mwanachama alipobandika maagizo ya ovyo. Wanaiua kwa mwezi ujao. Maelezo ya Kiswahili yatakuwa binadamu anayesoma kidokezo cha karatasi.

Kanuni inabaki, na kighairi kubwa zaidi ya mazishi, maduka yale yale nane kutoa moja, tarehe ileile ya kuparua.

Wanaandika mstari mpya wa kugandisha: "Hakuna msaidizi wa maneno hadi tuwe na maagizo yanayoshindwa kwa kufunga kwa watu watatu wanaojaribu kuyadanganya." Huo ni kurudiuboresha. Pia ni unyenyekevu.

Mgeni anaita hii "kurudi nyuma". Wafanyabiashara wanaita "hatimaye kusikiliza".`
      ),
      scenario({
        titleEn: "Scenario: the poster is already printed",
        titleSw: "Hali: bango tayari limechapishwa",
        situationEn:
          "Dropouts show the helper caused a quarrel at the tap. A member says the posters cost KES 2,000 so the pilot must continue for a month.",
        situationSw:
          "Walioacha wanaonyesha msaidizi ulisababisha ugomvi kwenye bomba. Mwanachama anasema mabango yaligharimu KES 2,000 kwa hiyo jaribio lazima liendelee kwa mwezi.",
        questionEn: "What should happen?",
        questionSw: "Nini kifanyike?",
        optionsEn: [
          "Continue, to get value from the printing",
          "Stop or redesign now; printed paper does not outrank a quarrel",
          "Continue but only at night",
          "Blame the people who quarrelled",
        ],
        optionsSw: [
          "Endelea, ili kupata thamani kutoka uchapishaji",
          "Simama au buni upya sasa; karatasi iliyochapishwa haizidi ugomvi",
          "Endelea lakini usiku tu",
          "Laumu watu waliogombana",
        ],
        correctIndex: 1,
        hintsEn: [
          "KES 2,000 is sunk. Safety is not.",
          "Correct. Kill or change. Do not rent harm on an instalment plan.",
          "Night hours can hide harm, not repair it.",
          "Blaming dropouts is survivorship in moral clothing.",
        ],
        hintsSw: [
          "KES 2,000 zimezama. Usalama haujazama.",
          "Sahihi. Ua au badilisha. Usikodi madhara kwa malipo.",
          "Saa za usiku zinaweza kuficha madhara, si kuyarekebisha.",
          "Kulaumu walioacha ni upendeleo wa waliofanikiwa kwa mavazi ya maadili.",
        ],
        explainEn: "Money already spent cannot decide whether people keep getting hurt.",
        explainSw: "Pesa zilizotumika haziwezi kuamua kama watu wanaendelea kuumia.",
      }),
      quiz(
        "Iteration in a community pilot means:",
        "Kuboresha kwa mzunguko katika jaribio la jamii kunamaanisha:",
        [
          "Adding every extra people asked for",
          "Changing one thing because of evidence, then freezing again",
          "Restarting with a bigger model",
          "Keeping the helper the same so the poster stays true",
        ],
        [
          "Kuongeza kila kiongezeo watu walichoombwa",
          "Kubadilisha kitu kimoja kwa sababu ya ushahidi, kisha kugandisha tena",
          "Kuanza upya na modeli kubwa",
          "Kuweka msaidizi vilevile ili bango libaki kweli",
        ],
        1,
        "Posters follow evidence. Evidence does not follow posters.",
        "Mabango yanafuata ushahidi. Ushahidi haufuati mabango."
      ),
      note(
        "Try it: one change memo",
        "Jaribu: memo ya mabadiliko moja",
        `Write five lines: What we believed. What the full fraction showed. What we will change (only one thing). What we will stop. New freeze date.

If you cannot name a stop, you are still adding.`,
        `Andika mistari mitano: Tulichoamini. Sehemu kamili ilichoonyesha. Tutakachobadilisha (kitu kimoja tu). Tutakachoacha. Tarehe mpya ya kugandisha.

Ukiwa huwezi kutaja kuacha, bado unaongeza.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Mixed results are information. Sunk costs are not orders.
- Freeze again after one change.
- Next: put the new freeze on a one-page action plan.`,
        `- Matokeo mchanganyiko ni taarifa. Gharama zilizozama si amri.
- Gandisha tena baada ya mabadiliko moja.
- Ifuatayo: weka kugandisha mpya kwenye mpango wa ukurasa mmoja.`
      ),
    ],
  },
  {
    id: "cap-i-u11",
    titleEn: "One-page action plan",
    titleSw: "Mpango wa ukurasa mmoja",
    cards: [
      note(
        "The plan after evidence is different from the plan before",
        "Mpango baada ya ushahidi ni tofauti na kabla",
        `Adults finishing this track write a one-page plan that could be handed to a county desk without embarrassment.

Headings:

1. Checkable problem (number, unit, method).
2. Scope and out of scope.
3. Data plan and consent (Act named, refusal still served).
4. Approach chosen, and why smaller beat fashionable.
5. Frozen helper, named risk, response.
6. Full fraction from the pilot, with confounders.
7. Next 30 days: owner, delete date, one change, no extra markets.

If heading 6 is empty, you are writing fiction. Go back to measurement.`,
        `Watu wazima wanaomaliza ngazi hii wanaandika mpango wa ukurasa mmoja unaoweza kutolewa kwa dawati la kaunti bila aibu.

Vichwa:

1. Tatizo linaloweza kukaguliwa (namba, kipimo, mbinu).
2. Wigo na nje ya wigo.
3. Mpango wa data na idhini (Sheria imetajwa, kukataa bado kunahudumiwa).
4. Njia iliyochaguliwa, na kwa nini ndogo ilishinda ya mtindo.
5. Msaidizi aliyegandishwa, hatari iliyotajwa, majibu.
6. Sehemu kamili kutoka jaribio, na vichanganyiko.
7. Siku 30 zijazo: mmiliki, tarehe ya kufuta, mabadiliko moja, hakuna masoko ya ziada.

Kichwa cha 6 kikiwa tupu, unaandika hadithi. Rudi kwenye kipimo.`
      ),
      reveal([
        {
          termEn: "Post-pilot plan",
          termSw: "Mpango baada ya jaribio",
          defEn: "The one-pager that includes what actually happened, not only what you hoped.",
          defSw: "Ukurasa mmoja unaojumuisha yaliyotokea kweli, si tu uliyotarajia.",
        },
        {
          termEn: "Owner",
          termSw: "Mmiliki",
          defEn: "A role with a date, not 'the youth'.",
          defSw: "Jukumu lenye tarehe, si 'vijana'.",
        },
      ]),
      note(
        "Worked example: the Kisumu page after two Fridays",
        "Mfano: ukurasa wa Kisumu baada ya Ijumaa mbili",
        `Problem: Kondele tomato stalls, Friday leftover median 8 kg (three-week notebook, consented).

Out of scope: public rankings, mangoes, tax lists, unconstrained chatbots.

Data: coded kg only; mapping with clerk; shred six weeks from start; two declined, one withdrew.

Approach: rule tip, chatbot killed after a number slipped.

Helper and risk: 2 kg less hint; funeral short-stall; stop if two shorts.

Fraction: 10 invited, 2 declined, 8 joined, 1 withdrew, 7 remaining, 8→6 kg, 1 funeral short.

Next 30 days: Brian owns larger exception print; clerk owns fallback announcement; no tenth market; youth office receives the page, not a logo request.

That is an adult finish.`,
        `Tatizo: maduka ya nyanya Kondele, wastani wa kati wa mabaki ya Ijumaa kg 8 (daftari la wiki tatu, kwa idhini).

Nje ya wigo: nafasi za umma, maembe, orodha za ushuru, chatbot zisizofungwa.

Data: kg zenye misimbo tu; ramani kwa karani; parua wiki sita tangu kuanza; wawili walikataa, mmoja alivuta.

Njia: kidokezo cha kanuni, chatbot iliua baada ya namba kuteleza.

Msaidizi na hatari: kidokezo cha kg 2 pungufu; upungufu wa mazishi; simama kama shorts mbili.

Sehemu: 10 walioalikwa, 2 walikataa, 8 walijiunga, 1 alivuta, 7 waliosalia, 8→6 kg, upungufu 1 wa mazishi.

Siku 30: Brian anamiliki chapisho kubwa la kighairi; karani anamiliki tangazo la mbadala; hakuna soko la kumi; ofisi ya vijana inapokea ukurasa, si ombi la nembo.

Huo ni mwisho wa mtu mzima.`
      ),
      scenario({
        titleEn: "Scenario: hide heading 6 so it looks ready",
        titleSw: "Hali: ficha kichwa cha 6 ili ionekane tayari",
        situationEn:
          "A member deletes the dropout line so the one-pager 'looks fundable'.",
        situationSw:
          "Mwanachama anafuta mstari wa walioacha ili ukurasa mmoja 'uonekane unaoweza kufadhiliwa'.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Allow it; funders hate mixed results",
          "Put the full fraction back; mixed results are how serious desks decide",
          "Move dropouts to a secret annex",
          "Replace dropouts with a chatbot paragraph",
        ],
        optionsSw: [
          "Ruhusu; wafadhili huchukia matokeo mchanganyiko",
          "Rudisha sehemu kamili; matokeo mchanganyiko ndivyo dawati za uzito zinavyoamua",
          "Hamisha walioacha kwenye kiambatisho cha siri",
          "Badilisha walioacha na aya ya chatbot",
        ],
        correctIndex: 1,
        hintsEn: [
          "Funders who hate honesty will also hate the quarrel you scaled.",
          "Correct. Heading 6 is the adult part of the page.",
          "Secret annexes are how trust dies later.",
          "A chatbot paragraph is not a denominator.",
        ],
        hintsSw: [
          "Wafadhili wanaochukia uaminifu watachukia pia ugomvi ulioeneza.",
          "Sahihi. Kichwa cha 6 ndicho sehemu ya watu wazima ya ukurasa.",
          "Viambatisho vya siri ndivyo uaminifu unavyokufa baadaye.",
          "Aya ya chatbot si kigawanyo.",
        ],
        explainEn: "If the page is only fundable with dropouts removed, the project is not fundable.",
        explainSw: "Ukurasa ukiwa unaoweza kufadhiliwa tu walioacha wakiwa wameondolewa, mradi hauwezi kufadhiliwa.",
      }),
      quiz(
        "An intermediate one-page plan is ready when it includes:",
        "Mpango wa ukurasa mmoja wa ngazi ya kati uko tayari unapojumuisha:",
        [
          "Only hopes for ten counties",
          "A checkable number, consent that can be a no, a frozen risk, and the full fraction",
          "Traders' ID numbers",
          "A claim that the helper never fails",
        ],
        [
          "Matumaini tu ya kaunti kumi",
          "Namba inayoweza kukaguliwa, idhini inayoweza kuwa hapana, hatari iliyogandishwa, na sehemu kamili",
          "Namba za kitambulisho za wafanyabiashara",
          "Dai kwamba msaidizi hashindwi kamwe",
        ],
        1,
        "Readiness is evidence plus care, not geographic ambition.",
        "Utayari ni ushahidi pamoja na uangalifu, si tamaa ya kijiografia."
      ),
      note(
        "Try it: write the post-pilot page",
        "Jaribu: andika ukurasa baada ya jaribio",
        `Fill the seven headings on one leaf. Read it in three minutes. Hand it to someone who was not in the group. Ask them to repeat the fraction and the delete date. If they cannot, cut decoration, not evidence.`,
        `Jaza vichwa saba kwenye ukurasa mmoja. Lisome kwa dakika tatu. Mpe mtu ambaye hakuwa kwenye kundi. Waombe warudia sehemu na tarehe ya kufuta. Wakiwa hawawezi, kata mapambo, si ushahidi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- The adult page includes what happened, not only what was hoped.
- Next: a checkpoint that refuses silent scaling.`,
        `- Ukurasa wa mtu mzima unajumuisha yaliyotokea, si tu yaliyotarajiwa.
- Ifuatayo: kituo kinachokataa kueneza kimya.`
      ),
    ],
  },
  {
    id: "cap-i-u12",
    titleEn: "Checkpoint: a measured community trial",
    titleSw: "Kituo: jaribio la jamii lililopimwa",
    cards: [
      note(
        "You are ready when a stranger could audit you",
        "Uko tayari mgeni anapoweza kukukagua",
        `An intermediate capstone is not a slogan about community AI. It is a file a stranger could audit:

- A number they could re-count.
- A boundary they could hear you keep under pressure.
- A data plan that survives a lost notebook.
- Consent that still serves a no, under the Data Protection Act, 2019.
- An approach that fits the data, not the fashion.
- A ten-person (or ten-stall) pilot with a stop rule.
- A full fraction, including dropouts and confounders.
- A stakeholder sentence without invented endorsements.

If any item is missing, you are still in the beginner poster, which is an honourable place to stay until the audit would pass.`,
        `Mradi wa ngazi ya kati si kauli kuhusu AI ya jamii. Ni faili ambalo mgeni angeweza kulikagua:

- Namba angeweza kuhesabu tena.
- Mpaka angeweza kukusikia ukishika chini ya shinikizo.
- Mpango wa data unaostahimili daftari lililopotea.
- Idhini ambayo bado inahudumia hapana, chini ya Sheria ya Ulinzi wa Data, 2019.
- Njia inayofaa data, si mtindo.
- Jaribio la watu kumi (au maduka kumi) lenye kanuni ya kusimama.
- Sehemu kamili, wakiwemo walioacha na vichanganyiko.
- Sentensi ya wadau bila idhini zilizobuniwa.

Kipengele chochote kikiwa hakipo, bado uko kwenye bango la mwanzoni, ambalo ni mahali pa heshima kukaa hadi ukaguzi ungapita.`
      ),
      reveal([
        {
          termEn: "Audit",
          termSw: "Ukaguzi",
          defEn: "A stranger checking whether your claims match notebooks, consent and dropouts.",
          defSw: "Mgeni anayekagua kama madai yako yanalingana na madaftari, idhini na walioacha.",
        },
        {
          termEn: "Silent scaling",
          termSw: "Kueneza kimya",
          defEn: "Growing the helper to new people without new consent or new measurement.",
          defSw: "Kukuza msaidizi kwa watu wapya bila idhini mpya au kipimo kipya.",
        },
      ]),
      note(
        "Worked example: the audit the clerk could run",
        "Mfano: ukaguzi karani angeweza kuendesha",
        `The market clerk could, without the youth group present:

- Re-count Friday leftovers on two stalls against the coded notebook.
- Point to the two declined stalls and see they still get a public announcement.
- Ask who holds the mapping paper (it should be the clerk).
- Ask when shredding happens.
- Ask whether a social post claimed county endorsement (it must not).

If any of those checks would fail, the group is not at the checkpoint. They go back.

Passing the clerk's audit is a better prize than a dashboard.`,
        `Karani wa soko angeweza, bila kundi la vijana kuwepo:

- Kuhesabu tena mabaki ya Ijumaa kwenye maduka mawili dhidi ya daftari lenye misimbo.
- Kuonyesha maduka mawili yaliyokataa na kuona bado yanapata tangazo la umma.
- Kuuliza nani anashikilia karatasi ya ramani (paswa kuwa karani).
- Kuuliza kuparua kunatokea lini.
- Kuuliza kama chapisho lili dai idhini ya kaunti (lisidai).

Ukaguzi wowote kati ya huo ukishindwa, kundi si kwenye kituo. Wanarudi.

Kupita ukaguzi wa karani ni tuzo bora kuliko dashibodi.`
      ),
      scenario({
        titleEn: "Scenario: silent scaling over the holiday",
        titleSw: "Hali: kueneza kimya wakati wa likizo",
        situationEn:
          "While the group is away, a member hands the same tip sheet to another market 'as a gift', without new consent or a new baseline.",
        situationSw:
          "Kundi likiwa mbali, mwanachama anatoa karatasi ileile ya vidokezo kwa soko lingine 'kama zawadi', bila idhini mpya wala mstari mpya wa msingi.",
        questionEn: "What should the group do on return?",
        questionSw: "Kundi linapaswa kufanya nini wanaporudi?",
        optionsEn: [
          "Celebrate the extra reach",
          "Stop the extra market, tell both clerks, and treat it as a consent failure",
          "Leave it, because gifts cannot be harmful",
          "Add a chatbot to make the gift look official",
        ],
        optionsSw: [
          "Sherehekea ufikiaji wa ziada",
          "Simamisha soko la ziada, waambie makarani wote wawili, na lichukulie kama kushindwa kwa idhini",
          "Liache, kwa sababu zawadi haziwezi kuwa na madhara",
          "Ongeza chatbot ili zawadi ionekane rasmi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Reach without consent is not a gift.",
          "Correct. Silent scaling is a checkpoint failure even if leftover kilograms fall.",
          "Gifts that move personal-adjacent data still need a yes.",
          "Official-looking tools make the failure wider.",
        ],
        hintsSw: [
          "Ufikiaji bila idhini si zawadi.",
          "Sahihi. Kueneza kimya ni kushindwa kwa kituo hata kilogramu za mabaki zikishuka.",
          "Zawadi zinazosogeza data iliyo karibu na ya mtu bado zinahitaji ndiyo.",
          "Zana zinazoonekana rasmi zinafanya kushindwa kuwa pana.",
        ],
        explainEn: "The checkpoint forbids quiet growth. Fix the breach in public.",
        explainSw: "Kituo kinakataza ukuaji wa kimya. Rekebisha uvunjaji hadharani.",
      }),
      quiz(
        "An intermediate community capstone is complete when:",
        "Mradi wa jamii wa ngazi ya kati unakamilika wakati:",
        [
          "Software is installed in many markets",
          "A stranger could audit the number, the consent, the dropouts and the delete date",
          "A chatbot always answers",
          "The poster uses many colours",
        ],
        [
          "Programu imewekwa katika masoko mengi",
          "Mgeni angeweza kukagua namba, idhini, walioacha na tarehe ya kufuta",
          "Chatbot inajibu kila mara",
          "Bango linatumia rangi nyingi",
        ],
        1,
        "Completion is auditability. Installation without an audit is just a wider guess.",
        "Ukamilifu ni uwezo wa kukaguliwa. Usakinishaji bila ukaguzi ni makisio mapana tu."
      ),
      note(
        "Try it: clerk's audit list",
        "Jaribu: orodha ya ukaguzi ya karani",
        `Write five checks a clerk, teacher or water chair could run without you in the room. If any check needs your personal phone, the plan still has a single point of failure.

You have finished the intermediate capstone when those checks would pass.`,
        `Andika ukaguzi tano ambao karani, mwalimu au mwenyekiti wa maji angeweza kuendesha bila wewe chumbani. Ukaguzi wowote ukihitaji simu yako binafsi, mpango bado una sehemu moja ya kushindwa.

Umemaliza mradi wa ngazi ya kati ukaguzi huo ungepita.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Audit beats theatre.
- Silent scaling is a failure even when numbers look good.
- If you continue to advanced, you will design evaluation, handover, county data ownership, energy cost and a ten-minute briefing.`,
        `- Ukaguzi unashinda maonyesho.
- Kueneza kimya ni kushindwa hata namba zikionekana nzuri.
- Ukiendelea kwenye ngazi ya juu, utabuni tathmini, kuhamisha, umiliki wa data wa kaunti, gharama ya nishati na wasilisho la dakika kumi.`
      ),
    ],
  },
];
