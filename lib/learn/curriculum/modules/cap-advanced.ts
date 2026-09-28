import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Community capstone — advanced.
 * Evaluation, handover, responsible scaling, county data ownership, energy and
 * cost, partnership agreements, and a ten-minute briefing. Kenya's Data Protection
 * Act, 2019 is named in learner copy. Sustainable-development framing stays in the
 * problem, not as a brand. All organisations and figures are fictional.
 */
export const capAdvancedUnits: CurriculumUnit[] = [
  {
    id: "cap-a-u1",
    titleEn: "Evaluation design that survives scrutiny",
    titleSw: "Tathmini inayostahili ukaguzi",
    cards: [
      note(
        "Comparison, not applause",
        "Ulinganisho, si makofi",
        `A community tool is evaluated by comparing two states: with the helper and without it, or before and after, using a measure you froze before anyone saw a dashboard. Applause after a launch is not evaluation. People praise gifts.

A design that survives scrutiny writes four things in advance:

- The primary measure (queue minutes at noon; leftover kilograms on Friday; lesson videos that loaded).
- The comparison (the same tap last month; a neighbouring stall that declined the tool; the same classroom on generator days versus grid days).
- The smallest improvement that would count, and the harm that would stop the work.
- A reviewer who does not get a bonus if the number looks good.

You are not required to run a university trial. You are required not to fool yourself. Pre-register the measure on paper, date it, and keep it even when the first week is disappointing.`,
        `Zana ya jamii hupimwa kwa kulinganisha hali mbili: na msaidizi na bila, au kabla na baada, kwa kipimo ulichogandisha kabla mtu yeyote kuona dashibodi. Makofi baada ya uzinduzi si tathmini. Watu husifu zawadi.

Usanifu unaostahili ukaguzi huandika mambo manne mapema:

- Kipimo kikuu (dakika za foleni saa sita; kilogramu za mabaki Ijumaa; video za somo zilizopakia).
- Ulinganisho (bomba lilelile mwezi uliopita; duka jirani lililokataa zana; darasa lilelile siku za jenereta dhidi ya siku za umeme).
- Uboreshaji mdogo zaidi ambao ungehesabiwa, na madhara yatakayosimamisha kazi.
- Mtathmini asiyepata bonus namba ikionekana nzuri.

Hulazimishwi kuendesha jaribio la chuo kikuu. Unalazimishwa usijidanganye. Sajili kipimo mapema kwenye karatasi, weka tarehe, na ukishike hata wiki ya kwanza ikikatisha tamaa.`
      ),
      reveal([
        {
          termEn: "Pre-registration",
          termSw: "Usajili wa mapema",
          defEn: "Writing the measure, comparison and stop rule before you see the results.",
          defSw: "Kuandika kipimo, ulinganisho na kanuni ya kusimama kabla ya kuona matokeo.",
        },
        {
          termEn: "Primary measure",
          termSw: "Kipimo kikuu",
          defEn: "The one number you will not quietly replace when it fails to move.",
          defSw: "Namba moja usiyobadilisha kimya inaposhindwa kusogea.",
        },
        {
          termEn: "Independent reviewer",
          termSw: "Mtathmini huru",
          defEn: "Someone who can say the project failed without losing face or pay.",
          defSw: "Mtu anayeweza kusema mradi umeshindwa bila kupoteza heshima au malipo.",
        },
      ]),
      note(
        "Worked example: school videos in Turkana, with a generator confounder",
        "Mfano: video za shule Turkana, na kichanganyiko cha jenereta",
        `A county education office pilots an offline-lesson helper in one Grade 6 class at a fictional school in Turkana. Pre-registered measure: share of recorded lesson hours in which the planned video loaded within five minutes. Baseline over two weeks: 3 of 10 hours. Success threshold: 6 of 10 hours in the two trial weeks, same logging method. Stop rule: any identifiable learner log, or the teacher saying the helper is used to shame children.

Week one: 7 of 10 hours load. The office is ready to celebrate. The teacher notes that a generator was borrowed from Thursday. Without Thursday and Friday, the week is 3 of 8 — unchanged.

The evaluation survives because the generator was logged as a confounder, not because the 7 of 10 was pretty. The honest write-up says: "Apparent improvement coincides with borrowed power. We do not yet attribute success to the helper."

A weaker team would have changed the primary measure to "teacher satisfaction", which was high because someone brought a generator.`,
        `Ofisi ya elimu ya kaunti inajaribu msaidizi wa masomo nje ya mtandao katika darasa moja la Darasa la 6 katika shule ya kubuni Turkana. Kipimo kilichosajiliwa mapema: sehemu ya saa za somo zilizorekodiwa ambapo video iliyopangwa ilipakia ndani ya dakika tano. Mstari wa msingi kwa wiki mbili: saa 3 kati ya 10. Kikomo cha mafanikio: saa 6 kati ya 10 katika wiki mbili za jaribio, mbinu ileile ya kuandika. Kanuni ya kusimama: kumbukumbu yoyote inayomtambulisha mwanafunzi, au mwalimu kusema msaidizi unatumiwa kuwaaibisha watoto.

Wiki ya kwanza: saa 7 kati ya 10 zinapakia. Ofisi iko tayari kusherehekea. Mwalimu anaandika jenereta ilikopwa kuanzia Alhamisi. Bila Alhamisi na Ijumaa, wiki ni 3 kati ya 8 — haijabadilika.

Tathmini inastahimili kwa sababu jenereta iliandikwa kama kichanganyiko, si kwa sababu 7 kati ya 10 ilikuwa nzuri. Andiko la kweli linasema: "Uboreshaji unaoonekana unaambatana na umeme uliokopwa. Bado hatutii mafanikio kwa msaidizi."

Timu dhaifu ingebadilisha kipimo kikuu kuwa "kuridhika kwa mwalimu", ambako kulikuwa juu kwa sababu mtu alileta jenereta.`
      ),
      scenario({
        titleEn: "Scenario: change the measure after a bad week",
        titleSw: "Hali: badilisha kipimo baada ya wiki mbaya",
        situationEn:
          "Your water-point predictor misses its pre-registered 20% wait-time cut. A colleague suggests switching the headline to 'community excitement' because a survey of remaining users is glowing.",
        situationSw:
          "Kitabiri chako cha kituo cha maji kinakosa punguzo la 20% la muda wa kusubiri lililosajiliwa mapema. Mwenzako anapendekeza kubadilisha kichwa kuwa 'msisimko wa jamii' kwa sababu uchunguzi wa watumiaji waliosalia unaangaza.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Switch the headline; excitement is a kind of success",
          "Keep the primary measure, report the miss, and treat remaining-user surveys as biased extras",
          "Delete the pre-registration page",
          "Average wait-time with excitement into one score",
        ],
        optionsSw: [
          "Badilisha kichwa; msisimko ni aina ya mafanikio",
          "Weka kipimo kikuu, ripoti kukosa, na zichukulie uchunguzi wa watumiaji waliosalia kama viongezeo vyenye upendeleo",
          "Futa ukurasa wa usajili wa mapema",
          "Wastani muda wa kusubiri na msisimko kuwa alama moja",
        ],
        correctIndex: 1,
        hintsEn: [
          "Excitement among people who stayed is survivorship, not the frozen measure.",
          "Correct. Scrutiny means the measure you named in week zero still governs week four.",
          "Destroying the paper is how you become unauditable.",
          "Combining unlike numbers hides the miss.",
        ],
        hintsSw: [
          "Msisimko miongoni mwa waliobaki ni upendeleo wa waliofanikiwa, si kipimo kilichogandishwa.",
          "Sahihi. Ukaguzi unamaanisha kipimo ulichotaja wiki ya sifuri bado kinatawala wiki ya nne.",
          "Kuharibu karatasi ndivyo unavyokuwa usiyeweza kukaguliwa.",
          "Kuchanganya namba zisizofanana kunaficha kukosa.",
        ],
        explainEn: "If you can change the exam after marking, you are not evaluating. You are marketing.",
        explainSw: "Ukiweza kubadilisha mtihani baada ya kuhakiki, hutathmini. Unauza.",
      }),
      quiz(
        "A confounder in a community evaluation is:",
        "Kichanganyiko katika tathmini ya jamii ni:",
        [
          "The community leader's approval",
          "Another change during the trial that could explain the result, such as a repaired pump or a borrowed generator",
          "Your laptop model",
          "The number of volunteers on the poster",
        ],
        [
          "Idhini ya kiongozi wa jamii",
          "Mabadiliko mengine wakati wa jaribio yanayoweza kueleza matokeo, kama pampu iliyorekebishwa au jenereta iliyokopwa",
          "Mfano wa kompyuta yako",
          "Idadi ya wajitolea kwenye bango",
        ],
        1,
        "Confounders are disclosed, measured where possible, and never silently ignored.",
        "Vichanganyiko hufichuliwa, kupimwa pale inapowezekana, na kamwe kupuuzwa kimya."
      ),
      note(
        "Try it: pre-register one page",
        "Jaribu: sajili ukurasa mmoja mapema",
        `Before you look at any 'after' numbers, write: primary measure, comparison, success threshold, stop rule, reviewer who does not benefit, confounders you already expect (weather, funerals, power, market day).

Date the page. If you already saw the after numbers, you cannot pre-register this round. You can only pre-register the next one.`,
        `Kabla hujaangalia namba zozote za 'baada', andika: kipimo kikuu, ulinganisho, kikomo cha mafanikio, kanuni ya kusimama, mtathmini asiyenufaika, vichanganyiko unavyotazamia (hali ya hewa, mazishi, umeme, siku ya soko).

Weka tarehe kwenye ukurasa. Ikiwa tayari umeona namba za baada, huwezi kusajili mapema mzunguko huu. Unaweza kusajili ujao tu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Freeze the measure before the dashboard.
- Log confounders as carefully as successes.
- Next: baselines, fairness across groups, and why accuracy headlines mislead.`,
        `- Gandisha kipimo kabla ya dashibodi.
- Andika vichanganyiko kwa makini kama mafanikio.
- Ifuatayo: mistari ya msingi, haki kati ya makundi, na kwa nini vichwa vya usahihi vinapotosha.`
      ),
    ],
  },
  {
    id: "cap-a-u2",
    titleEn: "Baselines, confounders and fair metrics",
    titleSw: "Mstari wa msingi, vichanganyiko na vipimo vya haki",
    cards: [
      note(
        "A fair metric asks who the number is about",
        "Kipimo cha haki kinauliza namba ni kuhusu nani",
        `Averages hide people. If wait-time falls for motorbike carriers with phones and rises for older neighbours without phones, a single average can still look like success.

Fair metrics slice the same primary measure by groups you named at the start: with phone / without; morning / after school; girls' class / boys' class only when that slice is necessary and not a ranking of children; stalls that declined / stalls that joined.

You also need a baseline taken with the same instrument. A phone GPS wait-time is not comparable to a notebook of remembered minutes. Choose one instrument and keep it.

When a condition is rare, a tool can look accurate while catching nobody. You met this logic in other modules: a high accuracy number is not the meaning of a positive result. In a community project, "90% of remaining users are happy" can be the same trick.`,
        `Wastani huficha watu. Muda wa kusubiri ukishuka kwa wabebaji wa pikipiki wenye simu na ukapanda kwa majirani wazee wasio na simu, wastani mmoja bado unaweza kuonekana kama mafanikio.

Vipimo vya haki vinakata kipimo kikuu kile kile kwa makundi uliyotaja mwanzoni: wenye simu / wasio na; asubuhi / baada ya shule; darasa la wasichana / la wavulana tu kama kipande hicho ni lazima na si orodha ya watoto; maduka yaliyokataa / yaliyojiunga.

Pia unahitaji mstari wa msingi uliochukuliwa kwa chombo kile kile. Muda wa kusubiri wa GPS ya simu hauligani na daftari la dakika za kukumbuka. Chagua chombo kimoja na ukishike.

Hali ikiwa nadra, zana inaweza kuonekana sahihi huku isiyomgundua mtu. Ulikutana na mantiki hii katika moduli nyingine: namba ya juu ya usahihi si maana ya matokeo chanya. Katika mradi wa jamii, "90% ya watumiaji waliosalia wana furaha" inaweza kuwa ujanja uleule.`
      ),
      reveal([
        {
          termEn: "Slice",
          termSw: "Kipande",
          defEn: "The same measure reported for a named group, not only for everyone mixed together.",
          defSw: "Kipimo kile kile kinachoripotiwa kwa kundi lililotajwa, si kwa kila mtu aliyechanganywa tu.",
        },
        {
          termEn: "Instrument",
          termSw: "Chombo",
          defEn: "How you measure: notebook, clock, scale, tick sheet. Changing it mid-trial breaks the comparison.",
          defSw: "Jinsi unavyopima: daftari, saa, mizani, karatasi ya tiki. Kuibadilisha katikati ya jaribio kunavunja ulinganisho.",
        },
        {
          termEn: "Fairness check",
          termSw: "Ukaguzi wa haki",
          defEn: "Asking whether the helper helped the people who already waited longest or paid most.",
          defSw: "Kuuliza kama msaidizi aliwasaidia watu ambao tayari walisubiri kwa muda mrefu au walilipa zaidi.",
        },
      ]),
      note(
        "Worked example: two slices at the same borehole",
        "Mfano: vipande viwili kwenye kisima kile kile",
        `A ward in Kisumu pre-registers noon wait-time. Overall, noon wait falls from 40 minutes to 30. The baraza hears "25% faster".

Slices:

- Households with a smartphone: 35 minutes to 18.
- Households without: 48 minutes to 52.

The helper was a chat tip about quiet hours. People without phones never saw it. The average improved because the already-connected group moved, and because two older households stopped using that tap (dropout).

A fair report leads with the without-phone slice and the dropouts, not with 25%. The design change is a painted board, not a more fluent chatbot.`,
        `Wadi huko Kisumu inasajili mapema muda wa kusubiri saa sita. Kwa jumla, kusubiri saa sita kunashuka kutoka dakika 40 hadi 30. Baraza linasikia "kasi 25% zaidi".

Vipande:

- Kaya zenye simu mahiri: dakika 35 hadi 18.
- Kaya zisizo na: dakika 48 hadi 52.

Msaidizi ulikuwa kidokezo cha gumzo kuhusu saa za shwari. Watu wasio na simu hawakukiona. Wastani uliboreka kwa sababu kundi lililokuwa na muunganisho lilisogea, na kwa sababu kaya mbili za wazee ziliacha kutumia bomba hilo (walioacha).

Ripoti ya haki inaanza na kipande cha wasio na simu na walioacha, si 25%. Mabadiliko ya muundo ni ubao uliopakwa, si chatbot yenye ufasaha zaidi.`
      ),
      scenario({
        titleEn: "Scenario: accuracy of a waste classifier",
        titleSw: "Hali: usahihi wa ainishaji wa taka",
        situationEn:
          "A photo tool that flags blocked paths is '92% accurate' on estate streets where blockages are rare. Community health volunteers say it misses the dump behind the shops, where most harm is.",
        situationSw:
          "Zana ya picha inayoonyesha njia zilizozibwa ni 'sahihi 92%' kwenye mitaa ya estate ambapo kuziba ni nadra. Wahamasishaji wa afya ya jamii wanasema inakosa dampo nyuma ya maduka, palipo madhara mengi.",
        questionEn: "Which evaluation question comes first?",
        questionSw: "Ni swali lipi la tathmini linakuja kwanza?",
        optionsEn: [
          "Can we raise accuracy to 99% on the same estate streets?",
          "What are sensitivity and false alarms at the dump, and who is harmed when we miss it?",
          "How many likes did the demo video get?",
          "Does the model have a large parameter count?",
        ],
        optionsSw: [
          "Tunaweza kupandisha usahihi hadi 99% kwenye mitaa ileile ya estate?",
          "Unyeti na tahadhari za uongo kwenye dampo ni nini, na nani anadhuriwa tunapokosa?",
          "Video ya onyesho ilipata kupenda ngapi?",
          "Je, modeli ina idadi kubwa ya vigezo?",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accuracy on easy streets is the trap you already know.",
          "Correct. Evaluate where the harm is, with the groups who live with the smell.",
          "Attention is not a fairness metric.",
          "Parameter count is not a community outcome.",
        ],
        hintsSw: [
          "Usahihi kwenye mitaa rahisi ndio mtego ambao tayari unaujua.",
          "Sahihi. Tathmini palipo madhara, na makundi yanayoishi na harufu.",
          "Umakini si kipimo cha haki.",
          "Idadi ya vigezo si matokeo ya jamii.",
        ],
        explainEn: "Fair evaluation follows the people who already carry the burden, not the streets that make the tool look clever.",
        explainSw: "Tathmini ya haki inafuata watu ambao tayari wana mzigo, si mitaa inayofanya zana ionekane werevu.",
      }),
      quiz(
        "You should slice a community metric when:",
        "Unapaswa kukata kipimo cha jamii wakati:",
        [
          "A funder asks for more slides",
          "An average could hide that the helper missed the people who waited longest",
          "You want to rank children",
          "You have no baseline",
        ],
        [
          "Mfadhili anaomba slaidi zaidi",
          "Wastani ungeweza kuficha kwamba msaidizi aliwakosa watu waliosubiri kwa muda mrefu zaidi",
          "Unataka kuwapanga watoto",
          "Huna mstari wa msingi",
        ],
        1,
        "Slices are for fairness, not for ranking people who cannot consent to being ranked.",
        "Vipande ni kwa haki, si kwa kuwapanga watu wasioweza kuidhinisha kupangwa."
      ),
      note(
        "Try it: two slices on your primary measure",
        "Jaribu: vipande viwili kwenye kipimo chako kikuu",
        `Name the people who already carry the heaviest burden. Write how the primary measure will be reported for them and for the easier group. If you cannot collect the slice without new personal data, pick a coarser slice (morning versus afternoon) rather than adding names.`,
        `Taja watu ambao tayari wana mzigo mzito zaidi. Andika jinsi kipimo kikuu kitaripotiwa kwao na kwa kundi rahisi. Ukiwa huwezi kukusanya kipande bila data mpya ya mtu, chagua kipande kibaya zaidi (asubuhi dhidi ya alasiri) badala ya kuongeza majina.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Averages can hide the people you claimed to help.
- Same instrument for before and after.
- Next: handover and maintenance, so the evaluation is not stranded on one volunteer's phone.`,
        `- Wastani vinaweza kuficha watu uliodai kusaidia.
- Chombo kile kile kabla na baada.
- Ifuatayo: kuhamisha na kutunza, ili tathmini isiachwe kwenye simu ya mjitoleaji mmoja.`
      ),
    ],
  },
  {
    id: "cap-a-u3",
    titleEn: "Handover and maintenance",
    titleSw: "Kuhamisha na kutunza",
    cards: [
      note(
        "A tool lives only as long as the community can touch it",
        "Zana inaishi tu kadiri jamii inavyoweza kuigusa",
        `Handover is the work of making sure the helper does not leave with the volunteer. Maintenance is the monthly labour after the applause: who pays the airtime, who updates the rule when the market calendar changes, who deletes data on the promised date, who holds the organisational login.

Design handover before launch:

- Accounts in an organisation's name, not a student's personal email.
- Two people trained, not one hero.
- A one-page data-flow diagram a committee can read.
- A monthly checklist: backup, delete-by date, cost, known breakage.
- Secrets (API keys, passwords) never written in the handover pack itself — only where they live and who may ask for them.

If any of those lines still say "Brian's phone", you have not handed over. You have lent the community a person.`,
        `Kuhamisha ni kazi ya kuhakikisha msaidizi haondoki na mjitoleaji. Matunzo ni kazi ya kila mwezi baada ya makofi: nani analipa salio, nani anasasisha kanuni kalenda ya soko inapobadilika, nani anafuta data tarehe iliyoahidiwa, nani anashikilia kuingia kwa shirika.

Buni kuhamisha kabla ya uzinduzi:

- Akaunti kwa jina la shirika, si barua pepe binafsi ya mwanafunzi.
- Watu wawili waliofunzwa, si shujaa mmoja.
- Mchoro wa ukurasa mmoja wa mtiririko wa data ambao kamati inaweza kusoma.
- Orodha ya kila mwezi: nakala, tarehe ya kufuta, gharama, uvunjaji unaojulikana.
- Siri (funguo za API, nenosiri) zisiandikwe kwenye mfuko wa kuhamisha lenyewe — tu ziko wapi na nani anaweza kuzitaka.

Mstari wowote kati ya huo bado ukisema "simu ya Brian", hujahamisha. Umekopesha jamii mtu.`
      ),
      reveal([
        {
          termEn: "Handover pack",
          termSw: "Mfuko wa kuhamisha",
          defEn: "The documents and trained people that let the work continue without the founder.",
          defSw: "Nyaraka na watu waliofunzwa vinavyoruhusu kazi kuendelea bila mwanzilishi.",
        },
        {
          termEn: "Single point of failure",
          termSw: "Sehemu moja ya kushindwa",
          defEn: "One person, phone or password whose absence kills the helper.",
          defSw: "Mtu mmoja, simu au nenosiri ambaye kutokuwepo kwake kunaua msaidizi.",
        },
        {
          termEn: "Organisational account",
          termSw: "Akaunti ya shirika",
          defEn: "A login owned by a school, CBO or county desk, not by a volunteer personally.",
          defSw: "Kuingia kunakomilikiwa na shule, CBO au dawati la kaunti, si na mjitoleaji binafsi.",
        },
      ]),
      note(
        "Worked example: the dashboard that died with the intern",
        "Mfano: dashibodi iliyokufa na mwanafunzi wa mazoezi",
        `A market-price board in Nakuru ran on an intern's personal cloud login and a prepaid modem in her backpack. Traders liked it. After six months she left for campus. The key expired. Data entry stopped. The board showed last April.

A handover designed on day one would have put the login with the market CBO, trained the clerk and one trader, written a monthly cost of KES 1,200 airtime, and marked "RISK: one owner" until those two people could open the board without her.

The intern did not fail morally. The project failed at design. Continuity is a feature, not a farewell speech.`,
        `Ubao wa bei za soko Nakuru uliendeshwa kwa kuingia binafsi kwa wingu kwa mwanafunzi wa mazoezi na modem ya malipo ya awali kwenye mkoba wake. Wafanyabiashara walipenda. Baada ya miezi sita aliondoka kwenda chuo. Ufunguo uliisha. Kuingiza data kulisimama. Ubao ulionyesha Aprili iliyopita.

Kuhamisha kubuniwa siku ya kwanza kungeweka kuingia kwa CBO ya soko, kufunza karani na mfanyabiashara mmoja, kuandika gharama ya kila mwezi ya KES 1,200 ya salio, na kuweka alama "HATARI: mmiliki mmoja" hadi watu hao wawili wangeweza kufungua ubao bila yeye.

Mwanafunzi wa mazoezi hakushindwa kimaadili. Mradi ulishindwa kwenye muundo. Kuendelea ni kipengele, si hotuba ya kuaga.`
      ),
      scenario({
        titleEn: "Scenario: the project that left with the volunteer",
        titleSw: "Hali: mradi ulioondoka na mjitoleaji",
        situationEn:
          "A volunteer builds a market-price dashboard the community loves. After six months they relocate; the key they personally owned expires, data entry stops, and the dashboard dies.",
        situationSw:
          "Mjitoleaji anajenga dashibodi ya bei za soko jamii inayoipenda. Miezi sita baadaye anahamia; ufunguo alioumiliki binafsi unaisha, kuingiza data kunaacha, dashibodi inakufa.",
        questionEn: "What should have been designed from day one?",
        questionSw: "Nini kilipaswa kupangwa kutoka siku ya kwanza?",
        optionsEn: [
          "A better laptop",
          "Shared ownership: organisational accounts, documented data flow, two trained people, and a simple monthly maintenance checklist",
          "More volunteers without structure",
          "No documentation, to keep it secret",
        ],
        optionsSw: [
          "Kompyuta bora",
          "Umiliki wa pamoja: akaunti za shirika, mtiririko wa data ulioandikwa, watu wawili waliofunzwa, na orodha rahisi ya matunzo ya mwezi",
          "Wajitoleaji zaidi bila muundo",
          "Hakuna nyaraka, ili kuficha",
        ],
        correctIndex: 1,
        hintsEn: [
          "Hardware was not the failure; concentrated knowledge and access were.",
          "Correct. Continuity is designed: shared accounts, documents, and two trained people.",
          "More volunteers without structure multiplies the same failure.",
          "Secrecy guarantees the death of community tools.",
        ],
        hintsSw: [
          "Vifaa vilikuwa si sehemu ya kushindwa; maarifa na ufunguo mikononi mwa mtu mmoja ndipo.",
          "Sahihi. Kuendelea hupangwa: akaunti za pamoja, nyaraka, na watu wawili waliofunzwa.",
          "Wajitoleaji zaidi bila muundo huongeza kushindwa kule kule.",
          "Siri huhakikisha kifo cha zana za jamii.",
        ],
        explainEn: "A community tool's lifespan equals the community's access to it. Design handover before launch.",
        explainSw: "Maisha ya zana ya jamii ni sawa na ufikiaji wa jamii. Panga kuhamisha kabla ya kuzindua.",
      }),
      pb({
        titleEn: "Build a handover-pack prompt",
        titleSw: "Jenga maagizo ya mfuko wa kuhamisha",
        introEn:
          "Draft the handover pack with a writing helper. The prompt must force completeness and honesty about what is fragile.",
        introSw:
          "Andaa mfuko wa kuhamisha kwa msaidizi wa kuandika. Maagizo lazima yalazimishe ukamilifu na uwazi kuhusu kile kilicho dhaifu.",
        goalEn:
          "Your prompt must list required sections (accounts, data flow, costs, risks) and require marking anything that depends on one person.",
        goalSw:
          "Maagizo yako lazima yataje sehemu (akaunti, mtiririko wa data, gharama, hatari) na yaombe kuweka alama kwa kila kitu kinachotegemea mtu mmoja.",
        blocksEn: [
          "Sections: accounts and keys (no secrets in the doc), data-flow diagram, monthly cost, known risks",
          "Rule: mark every single-person dependency as 'RISK: one owner'",
          "Audience: the community committee, not developers",
          "Keep: two pages maximum, plain language",
        ],
        blocksSw: [
          "Sehemu: akaunti na funguo (hakuna siri kwenye waraka), mchoro wa mtiririko wa data, gharama ya mwezi, hatari zinazojulikana",
          "Kanuni: weka alama kwa kila utegemeo wa mtu mmoja kama 'HATARI: mmiliki mmoja'",
          "Hadhira: kamati ya jamii, si wasanidi",
          "Weka: kurasa mbili hadi, lugha rahisi",
        ],
        required: [0, 1, 2],
        sampleEn:
          "Sections: accounts and keys (no secrets in the doc), data-flow diagram, monthly cost, known risks. Rule: mark every single-person dependency as 'RISK: one owner'. Audience: the community committee, not developers. Keep: two pages maximum, plain language.",
        sampleSw:
          "Sehemu: akaunti na funguo (hakuna siri kwenye waraka), mchoro wa mtiririko wa data, gharama ya mwezi, hatari zinazojulikana. Kanuni: alama 'HATARI: mmiliki mmoja' kwa kila utegemeo. Hadhira: kamati ya jamii, si wasanidi. Weka: kurasa mbili hadi, lugha rahisi.",
      }),
      quiz(
        "The first sign a handover is incomplete is:",
        "Ishara ya kwanza kwamba kuhamisha hakujakamilika ni:",
        [
          "The poster is not colourful",
          "A critical login, key or notebook still lives on one volunteer's personal device",
          "The committee asked questions",
          "The monthly cost is written down",
        ],
        [
          "Bango si la rangi",
          "Kuingia muhimu, ufunguo au daftari bado vinaishi kwenye kifaa binafsi cha mjitoleaji mmoja",
          "Kamati iliuliza maswali",
          "Gharama ya mwezi imeandikwa",
        ],
        1,
        "If one suitcase leaving town would kill the helper, you have not handed over.",
        "Suti kesi moja inayoondoka mjini ingeua msaidizi, hujahamisha."
      ),
      note(
        "Try it: mark every one-owner line",
        "Jaribu: weka alama kila mstari wa mmiliki mmoja",
        `List logins, notebooks, modems, relationships with a clerk, and who knows the delete date. Write "RISK: one owner" on each that is still a person. You are not done until two named roles can do each line.`,
        `Orodhesha kuingia, madaftari, modem, mahusiano na karani, na nani anajua tarehe ya kufuta. Andika "HATARI: mmiliki mmoja" kwenye kila kimoja ambacho bado ni mtu. Hujamaliza hadi majukumu mawili yaliyotajwa yaweze kufanya kila mstari.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Design continuity before praise.
- Two people, organisational accounts, monthly checklist.
- Next: refuse scale until support, not only software, is funded.`,
        `- Buni kuendelea kabla ya sifa.
- Watu wawili, akaunti za shirika, orodha ya mwezi.
- Ifuatayo: kataa kueneza hadi msaada, si programu tu, uwe umefadhiliwa.`
      ),
    ],
  },
  {
    id: "cap-a-u4",
    titleEn: "Responsible scaling",
    titleSw: "Kueneza kwa uwajibikaji",
    cards: [
      note(
        "Scale multiplies whatever already exists, including gaps",
        "Kueneza huzidisha kilichopo, pamoja na mapengo",
        `Scaling is not a prize. It is a decision to copy a helper into new places, which copies the support load, the consent work, the failure modes and the monthly cost.

Scale readiness means those things are proven at the current size, not hoped for after growth. Sunset criteria are the conditions under which you will stop, written before attachment grows.

A funder who wants ten counties in three months with two volunteers and no maintenance budget is offering a wider failure. The responsible reply is a counter-proposal: fund staffing, a delete-and-audit routine, and two phases with evaluation between them.

Cost per beneficiary — total running cost divided by people actually served — is the honest efficiency number. Downloads and "reached" figures that count everyone who saw a poster are not.`,
        `Kueneza si tuzo. Ni uamuzi wa kunakili msaidizi katika mahali pya, ambao unanakili mzigo wa msaada, kazi ya idhini, njia za kushindwa na gharama ya kila mwezi.

Utayari wa kueneza unamaanisha mambo hayo yamethibitishwa kwa ukubwa wa sasa, si kutarajiwa baada ya ukuaji. Vigezo vya kufunga ni masharti ambayo chini yake utasimama, yaliyoandikwa kabla upendo kuongezeka.

Mfadhili anayetaka kaunti kumi katika miezi mitatu kwa wajitoleaji wawili na bila bajeti ya matunzo anatoa kushindwa panapopanuka. Jibu lenye uwajibikaji ni pendekezo pinzani: fadhili wafanyakazi, taratibu ya kufuta-na-kukagua, na hatua mbili na tathmini katikati.

Gharama kwa mnufaika — jumla ya gharama ya kuendesha ikigawanywa na watu wanaohudumiwa kweli — ndiyo namba ya ufanisi ya kweli. Vipakuliwaji na takwimu za "kufikiwa" zinazohesabu kila aliyeona bango si hivyo.`
      ),
      reveal([
        {
          termEn: "Scale readiness",
          termSw: "Utayari wa kueneza",
          defEn: "Support, data flow and maintenance proven at current size.",
          defSw: "Msaada, mtiririko wa data na matunzo yaliyothibitishwa kwa ukubwa wa sasa.",
        },
        {
          termEn: "Sunset criteria",
          termSw: "Vigezo vya kufunga",
          defEn: "Pre-agreed conditions that stop or pause the tool.",
          defSw: "Masharti yaliyokubaliwa mapema yanayosimamisha au kupumzisha zana.",
        },
        {
          termEn: "Cost per beneficiary",
          termSw: "Gharama kwa mnufaika",
          defEn: "Running cost divided by people actually served, not people who saw a poster.",
          defSw: "Gharama ya kuendesha ikigawanywa na watu wanaohudumiwa kweli, si waliiona bango.",
        },
      ]),
      note(
        "Worked example: ten counties in ninety days",
        "Mfano: kaunti kumi katika siku tisini",
        `A funder offers to copy a borehole wait-board to ten counties in three months. Current support: two volunteers, one personal phone line, no maintenance budget, evaluation still entangled with a generator confounder in the first school site.

The team counters: phase one funds a paid coordinator, organisational numbers, and a repeat of the evaluation in two new sites of similar size. Phase two, only if slices for people without phones also improve, copies to three more sites — not ten counties.

They write sunset criteria: stop if two sites show longer waits for people without phones, or if county ICT will not accept data-ownership terms.

The funder is free to walk. Walking is cheaper than ten quiet failures.`,
        `Mfadhili anapenda kunakili ubao wa kusubiri wa kisima kwa kaunti kumi katika miezi mitatu. Msaada wa sasa: wajitoleaji wawili, mstari mmoja wa simu binafsi, hakuna bajeti ya matunzo, tathmini bado imechanganyika na kichanganyiko cha jenereta kwenye tovuti ya kwanza ya shule.

Timu inapendekeza pinzani: hatua ya kwanza inafadhili mratibu anayelipwa, namba za shirika, na kurudia tathmini katika tovuti mbili mpya za ukubwa sawa. Hatua ya pili, tu kama vipande vya watu wasio na simu pia vinaboreka, inanakili kwa tovuti tatu zaidi — si kaunti kumi.

Wanaandika vigezo vya kufunga: simama tovuti mbili zikionyesha kusubiri kwa muda mrefu kwa wasio na simu, au ICT ya kaunti isipokubali masharti ya umiliki wa data.

Mfadhili yuko huru kuondoka. Kuondoka ni nafuu kuliko kushindwa kumi kwa kimya.`
      ),
      scenario({
        titleEn: "Scenario: the funder wants ten counties",
        titleSw: "Hali: mfadhili anataka kaunti kumi",
        situationEn:
          "A funder offers to scale your borehole predictor to ten counties within three months. Your support is currently two volunteers, one phone line, and no maintenance budget.",
        situationSw:
          "Mfadhili anapenda kueneza kitabiri chako cha kisima kaunti kumi ndani ya miezi mitatu. Msaada wako ni wajitoleaji wawili, mstari mmoja wa simu, na hakuna bajeti ya matunzo.",
        questionEn: "The responsible reply is:",
        questionSw: "Jibu lenye uwajibikaji ni:",
        optionsEn: [
          "Accept — reject nothing offered to communities",
          "Counter-propose: fund the support structure first, then scale in two phases with evaluation between",
          "Accept and hope",
          "Refuse all funding forever",
        ],
        optionsSw: [
          "Kubali — kataa chochote kinachotolewa kwa jamii",
          "Pendekeza pinzani: fadhili muundo wa msaada kwanza, kisha kueneza kwa hatua mbili na tathmini katikati",
          "Kubali na kutarajia",
          "Kataa ufadhili wote milele",
        ],
        correctIndex: 1,
        hintsEn: [
          "Accepting without capacity creates a wider failure.",
          "Correct. Support capacity precedes scale; phases protect funder and community.",
          "Hope is not an operations plan.",
          "Refusing everything abandons real opportunity; the skill is shaping the terms.",
        ],
        hintsSw: [
          "Kukubali bila uwezo huunda kushindwa kwa upana zaidi.",
          "Sahihi. Uwezo wa msaada hutokea kabla ya kueneza; hatua zinalinda mfadhili na jamii.",
          "Kutarajia si mpango wa shughuli.",
          "Kukataa yote huacha fursa halisi; ujuzi ni kuunda masharti.",
        ],
        explainEn: "Scaling multiplies gaps. Fund the structure, then the reach.",
        explainSw: "Kueneza huzidisha mapengo. Fadhili muundo, kisha uenezi.",
      }),
      quiz(
        "Sunset criteria are best decided:",
        "Vigezo vya kufunga ni bora kuamuliwa:",
        [
          "After the tool becomes popular",
          "Before launch, by the people accountable for it",
          "Never — tools should live forever",
          "By the funder alone",
        ],
        [
          "Zana ikiwa maarufu",
          "Kabla ya kuzindua, na watu wanaowajibika kwake",
          "Kamwe — zana zisife",
          "Na mfadhili pekee",
        ],
        1,
        "Deciding stop-conditions before attachment grows keeps the decision professional instead of emotional.",
        "Kuamua masharti ya kusimamisha kabla upendo huongezeka kunabaki uamuzi kuwa wa kitaalamu, si wa hisia."
      ),
      note(
        "Try it: a two-phase counter-proposal",
        "Jaribu: pendekezo pinzani la hatua mbili",
        `Write phase 1 (what must be true in two sites), the evaluation gate, phase 2 (how many new sites), and two sunset lines. If phase 2 is still "the whole country", you have not counter-proposed. You have daydreamed.`,
        `Andika hatua ya 1 (nini lazima kiwe kweli katika tovuti mbili), lango la tathmini, hatua ya 2 (tovuti mpya ngapi), na mistari miwili ya kufunga. Hatua ya 2 ikiwa bado "nchi nzima", hujapendekeza pinzani. Umeota.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Scale copies support costs and failure modes.
- Sunset criteria are written while you can still be calm.
- Next: who owns the data when a county ICT desk is in the room.`,
        `- Kueneza kunanakili gharama za msaada na njia za kushindwa.
- Vigezo vya kufunga vinaandikwa ungali mtulivu.
- Ifuatayo: nani anamiliki data dawati la ICT ya kaunti linapokuwa chumbani.`
      ),
    ],
  },
  {
    id: "cap-a-u5",
    titleEn: "Data ownership with county ICT",
    titleSw: "Umiliki wa data na ICT ya kaunti",
    cards: [
      note(
        "If it might land on a county server, say so in week one",
        "Ikiweza kuishia seva ya kaunti, sema wiki ya kwanza",
        `County ICT desks inherit tools that students, NGOs and vendors leave behind. They also inherit complaints under the Data Protection Act, 2019. Ownership is not a slogan on a slide. It is answers to: who is the data controller, where is the data hosted, can the county export it, what happens if the vendor leaves, and who answers an ODPC query.

For a school connectivity log or a borehole wait notebook that may become a county dashboard, agree in writing:

- The county (or the school Board of Management) is the controller for personal data, unless a different controller is named and accepted.
- A student group is not a safe long-term controller.
- Hosting in another country is a cross-border transfer that needs a lawful basis and extra care.
- "We will think about ownership at scale" is how a spreadsheet of traders ends up in a personal drive.

If the county cannot accept the terms, do not put personal data on a path that leads there. Keep the helper on paper.`,
        `Dawati za ICT za kaunti hurithi zana ambazo wanafunzi, asasi na wachuuzi huacha. Pia hurithi malalamiko chini ya Sheria ya Ulinzi wa Data, 2019. Umiliki si kauli kwenye slaidi. Ni majibu ya: nani ni mdhibiti wa data, data inahifadhiwa wapi, kaunti inaweza kuituma nje, nini kinatokea mchuuzi akiondoka, na nani anajibu swali la ODPC.

Kwa kumbukumbu ya muunganisho wa shule au daftari la kusubiri la kisima linaloweza kuwa dashibodi ya kaunti, kubaliana kwa maandishi:

- Kaunti (au Bodi ya Usimamizi ya shule) ndiye mdhibiti wa data ya mtu, isipokuwa mdhibiti mwingine ametajwa na kukubaliwa.
- Kikundi cha wanafunzi si mdhibiti salama wa muda mrefu.
- Kuhifadhi katika nchi nyingine ni uhamisho wa mipaka unaohitaji msingi halali na uangalifu wa ziada.
- "Tutafikiri kuhusu umiliki wakati wa kueneza" ndivyo jedwali la wafanyabiashara linavyoishia kwenye diski binafsi.

Kaunti isipoweza kukubali masharti, usiweke data ya mtu kwenye njia inayoenda huko. Weka msaidizi kwenye karatasi.`
      ),
      reveal([
        {
          termEn: "Data controller",
          termSw: "Mdhibiti wa data",
          defEn: "The organisation that decides why and how personal data is processed, and answers for it.",
          defSw: "Shirika linaloamua kwa nini na jinsi data ya mtu inavyochakatwa, na linalojibu kwayo.",
        },
        {
          termEn: "Processor",
          termSw: "Mchakataji",
          defEn: "Someone who handles data on the controller's instructions, such as a hosting vendor.",
          defSw: "Mtu anayeshughulikia data kwa maelekezo ya mdhibiti, kama mchuuzi wa uhifadhi.",
        },
        {
          termEn: "Cross-border transfer",
          termSw: "Uhamisho wa mipaka",
          defEn: "Personal data leaving Kenya, including when a cloud account is hosted abroad.",
          defSw: "Data ya mtu inayoondoka Kenya, pamoja na akaunti ya wingu inapohifadhiwa nje.",
        },
        {
          termEn: "Portability",
          termSw: "Uhamishaji",
          defEn: "The county's ability to export the data and keep working if a vendor leaves.",
          defSw: "Uwezo wa kaunti kutoa data nje na kuendelea kufanya kazi mchuuzi akiondoka.",
        },
      ]),
      note(
        "Worked example: wait-times that almost went to a foreign classroom account",
        "Mfano: nyakati za kusubiri zilizo karibu kwenda akaunti ya darasa ya kigeni",
        `A student team logs borehole wait-times in a free foreign classroom spreadsheet because it was easy. They invite a county water officer to "view". That invitation can turn the officer into a co-controller of personal-adjacent data (household timing patterns) without a processing agreement, without a delete date, and with hosting outside Kenya.

The ICT desk, when finally told, asks them to stop. The lawful path is: anonymised daily totals on paper to the water office; no household rows; no foreign classroom account; if a county system is needed later, ICT names the controller and the processor in a short agreement first.

Ease is not a lawful basis.`,
        `Timu ya wanafunzi inaandika nyakati za kusubiri za kisima kwenye jedwali huria la darasa la kigeni kwa sababu ilikuwa rahisi. Wanamwalika afisa wa maji wa kaunti "kuona". Mwaliko huo unaweza kumfanya afisa kuwa mdhibiti mwenza wa data iliyo karibu na ya mtu (mifumo ya nyakati za kaya) bila makubaliano ya uchakataji, bila tarehe ya kufuta, na kwa uhifadhi nje ya Kenya.

Dawati la ICT, linapoambiwa hatimaye, linawaomba wasimame. Njia halali ni: jumla za kila siku zisizo na majina kwenye karatasi kwa ofisi ya maji; hakuna safu za kaya; hakuna akaunti ya darasa ya kigeni; mfumo wa kaunti ukihitajika baadaye, ICT inataja mdhibiti na mchakataji katika makubaliano mafupi kwanza.

Urahisi si msingi halali.`
      ),
      scenario({
        titleEn: "Scenario: surprise spreadsheet",
        titleSw: "Hali: jedwali la ghafla",
        situationEn:
          "An NGO emails county ICT a spreadsheet of 400 market traders' names and numbers 'so you can scale our chatbot', with no prior agreement.",
        situationSw:
          "Asasi inatuma barua pepe kwa ICT ya kaunti jedwali la majina na namba za wafanyabiashara 400 wa soko 'ili mweze kueneza chatbot yetu', bila makubaliano ya awali.",
        questionEn: "What should ICT do first?",
        questionSw: "ICT inapaswa kufanya nini kwanza?",
        optionsEn: [
          "Load it onto the county server to be helpful",
          "Refuse the file, ask whether traders consented to this disclosure, and require a controller-processor conversation before any copy is kept",
          "Forward it to all sub-counties",
          "Publish it for transparency",
        ],
        optionsSw: [
          "Iweke kwenye seva ya kaunti ili kusaidia",
          "Kataa faili, uliza kama wafanyabiashara walidhinisha ufichuzi huu, na hitaji mazungumzo ya mdhibiti-mchakataji kabla ya nakala yoyote kuwekwa",
          "Isambaze kwa kaunti ndogo zote",
          "Ichapishe kwa uwazi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Helpfulness is how unlawful collections spread inside government.",
          "Correct. Receiving can be processing. ICT should not become an accidental controller of a surprise list.",
          "Forwarding multiplies the disclosure.",
          "Publishing traders' numbers is a harm, not transparency.",
        ],
        hintsSw: [
          "Usaidizi ndivyo ukusanyaji usio halali unavyoenea ndani ya serikali.",
          "Sahihi. Kupokea kunaweza kuwa uchakataji. ICT isije mdhibiti wa bahati mbaya wa orodha ya ghafla.",
          "Kusambaza kunazidisha ufichuzi.",
          "Kuchapisha namba za wafanyabiashara ni madhara, si uwazi.",
        ],
        explainEn: "County ICT is a stakeholder from week one, and a brake when data arrives without a controller story.",
        explainSw: "ICT ya kaunti ni mdau kutoka wiki ya kwanza, na breki data inapofika bila hadithi ya mdhibiti.",
      }),
      quiz(
        "A student group is usually a poor long-term data controller because:",
        "Kikundi cha wanafunzi kwa kawaida ni mdhibiti duni wa muda mrefu kwa sababu:",
        [
          "Students cannot count",
          "Members leave, personal accounts expire, and nobody is mandated to answer an ODPC query",
          "The Act does not apply to young people",
          "Counties are not allowed to work with schools",
        ],
        [
          "Wanafunzi hawawezi kuhesabu",
          "Wanachama huondoka, akaunti binafsi zinaisha, na hakuna aliyepewa jukumu la kujibu swali la ODPC",
          "Sheria haitumiki kwa vijana",
          "Kaunti haziruhusiwi kufanya kazi na shule",
        ],
        1,
        "Controllers need continuity and a public mandate. Student energy is not that mandate.",
        "Wadhibiti wanahitaji kuendelea na mamlaka ya umma. Nguvu za wanafunzi si mamlaka hayo."
      ),
      note(
        "Try it: four ownership sentences",
        "Jaribu: sentensi nne za umiliki",
        `Write: controller, processor (if any), hosting location, and what happens if we leave. If any sentence is "to be confirmed at scale", move personal data off that path today.`,
        `Andika: mdhibiti, mchakataji (kama yupo), mahali pa uhifadhi, na nini kinatokea tukienda. Sentensi yoyote ikiwa "itathibitishwa wakati wa kueneza", ondosa data ya mtu kwenye njia hiyo leo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Name the controller before the spreadsheet exists.
- Cross-border hosting is a legal event, not a convenience.
- Next: processing agreements and lawful basis in writing.`,
        `- Taja mdhibiti kabla jedwali kuwepo.
- Uhifadhi kuvuka mipaka ni tukio la kisheria, si urahisi.
- Ifuatayo: makubaliano ya uchakataji na msingi halali kwa maandishi.`
      ),
    ],
  },
  {
    id: "cap-a-u6",
    titleEn: "Processing agreements and lawful basis",
    titleSw: "Makubaliano ya uchakataji na msingi halali",
    cards: [
      note(
        "Instructions on paper, not in a chat",
        "Maelekezo kwenye karatasi, si kwenye gumzo",
        `When a county, school or CBO is the controller and a student team, NGO or vendor handles the data, Kenya's Data Protection Act, 2019 expects a processing relationship that can be shown: purpose, types of data, security, sub-processors, delete or return on end, and no use of the data for the processor's own model-training unless that is an explicit, consented purpose.

Lawful basis for a small community pilot is usually consent. Public-task arguments for a county dashboard need the county, not the students, to own that argument. "The chief said we could" is not a basis you can take to ODPC.

Do not ask a writing helper to invent a contract number or to pretend you have counsel. Mark legal drafts as drafts. The agreement can be two pages if it is true.`,
        `Kaunti, shule au CBO inapokuwa mdhibiti na timu ya wanafunzi, asasi au mchuuzi inashughulikia data, Sheria ya Ulinzi wa Data, 2019 inatarajia uhusiano wa uchakataji unaoweza kuonyeshwa: madhumuni, aina za data, usalama, wachakataji wadogo, kufuta au kurudisha mwishoni, na kutotumia data kwa kufunza modeli ya mchakataji mwenyewe isipokuwa hiyo ni madhumuni yaliyo wazi na yaliyoidhinishwa.

Msingi halali kwa jaribio dogo la jamii kwa kawaida ni idhini. Hoja za kazi ya umma kwa dashibodi ya kaunti zinahitaji kaunti, si wanafunzi, kuimiliki hoja hiyo. "Chifu alisema tunaweza" si msingi unaoweza kupeleka ODPC.

Usiombe msaidizi wa kuandika ubuni namba ya mkataba au ujifanye una wakili. Weka rasimu za kisheria kama rasimu. Makubaliano yanaweza kuwa kurasa mbili yakikiwa kweli.`
      ),
      reveal([
        {
          termEn: "Processing agreement",
          termSw: "Makubaliano ya uchakataji",
          defEn: "A written instruction from controller to processor about what may be done with the data.",
          defSw: "Maelekezo yaliyoandikwa kutoka mdhibiti kwenda mchakataji kuhusu yanayoruhusiwa kufanywa na data.",
        },
        {
          termEn: "Sub-processor",
          termSw: "Mchakataji mdogo",
          defEn: "A further vendor the processor uses, such as a foreign host, that the controller must know about.",
          defSw: "Mchuuzi zaidi ambaye mchakataji anamitumia, kama mwenyeji wa kigeni, ambaye mdhibiti lazima amjue.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kikomo cha madhumuni",
          defEn: "Using the data only for the job named in the agreement, not for extra training or marketing.",
          defSw: "Kutumia data tu kwa kazi iliyotajwa katika makubaliano, si kwa mafunzo au uuzaji wa ziada.",
        },
      ]),
      note(
        "Worked example: an NGO that wanted stall notes to train its own model",
        "Mfano: asasi iliyotaka maelezo ya maduka kufunza modeli yake",
        `A vendor offers a free chatbot to a market CBO if leftover kilograms can be "used to improve our product". That is a second purpose. Traders who consented to a six-week local tip did not consent to training a company's model.

The CBO's two-page instruction says: process coded kilograms to print Friday tips; no copies to the vendor's training set; no sub-processor outside Kenya without written yes; delete on week six; security is a locked cabinet and a county-hosted sheet if ICT agrees.

The vendor walks away. The CBO keeps the paper rule. That walk-away is a successful negotiation.`,
        `Mchuuzi anatoa chatbot huria kwa CBO ya soko kama kilogramu za mabaki "zitumiwe kuboresha bidhaa yetu". Hiyo ni madhumuni ya pili. Wafanyabiashara walioidhinisha kidokezo cha eneo cha wiki sita hawakuidhinisha kufunza modeli ya kampuni.

Maelekezo ya kurasa mbili ya CBO yasema: chakata kilogramu zenye misimbo kuchapisha vidokezo vya Ijumaa; hakuna nakala kwenye seti ya mafunzo ya mchuuzi; hakuna mchakataji mdogo nje ya Kenya bila ndiyo iliyoandikwa; futa wiki ya sita; usalama ni kabati iliyofungwa na jedwali linalohifadhiwa kaunti ICT ikikubali.

Mchuuzi anaondoka. CBO inaweka kanuni ya karatasi. Kuondoka huko ni mazungumzo yaliyofanikiwa.`
      ),
      scenario({
        titleEn: "Scenario: 'the chief said we could'",
        titleSw: "Hali: 'chifu alisema tunaweza'",
        situationEn:
          "Your team wants learner names in a connectivity log. A chief at a baraza said the school should 'support innovation'. There is no Board of Management minute and no guardian consent.",
        situationSw:
          "Timu yako inataka majina ya wanafunzi kwenye kumbukumbu ya muunganisho. Chifu barazani alisema shule ipaswa 'kusaidia uvumbuzi'. Hakuna kumbukumbu ya Bodi ya Usimamizi wala idhini ya mlezi.",
        questionEn: "What is the lawful path?",
        questionSw: "Njia halali ni ipi?",
        optionsEn: [
          "Treat the chief's sentence as consent for named learners",
          "Drop names; if the school is controller it must record a real basis — usually guardian and learner-informed consent — before any identifiers",
          "Put names only in English so children cannot read them",
          "Ask the vendor to store names abroad so the school is not responsible",
        ],
        optionsSw: [
          "Chukulia sentensi ya chifu kama idhini ya wanafunzi waliotajwa",
          "Ondoa majina; shule ikiwa mdhibiti lazima irekodi msingi halisi — kwa kawaida idhini ya mlezi na mwanafunzi yenye taarifa — kabla ya vitambulisho vyovyote",
          "Weka majina kwa Kiingereza tu ili watoto wasisome",
          "Omba mchuuzi ahifadhi majina nje ili shule isiwe na jukumu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A baraza cheer is not a specified, informed, withdrawable yes from a guardian.",
          "Correct. Public-task or consent must be the school's recorded basis, not a visiting team's excitement.",
          "Language as a hide is still processing of a child's data.",
          "Exporting does not delete responsibility; it can add a transfer problem.",
        ],
        hintsSw: [
          "Kelele za baraza si ndiyo mahususi, yenye taarifa, inayoweza kuvutwa kutoka kwa mlezi.",
          "Sahihi. Kazi ya umma au idhini lazima iwe msingi uliorekodiwa wa shule, si msisimko wa timu ya wageni.",
          "Lugha kama kuficha bado ni uchakataji wa data ya mtoto.",
          "Kuhamisha nje hakufuti jukumu; kunaweza kuongeza tatizo la uhamisho.",
        ],
        explainEn: "Lawful basis is recorded by the controller. Visitors cannot borrow a chief's sentence as a blank cheque.",
        explainSw: "Msingi halali unarekodiwa na mdhibiti. Wageni hawawezi kukopa sentensi ya chifu kama hundi tupu.",
      }),
      quiz(
        "A processor may use community data to train its own model only if:",
        "Mchakataji anaweza kutumia data ya jamii kufunza modeli yake tu ikiwa:",
        [
          "The model will be famous",
          "That extra purpose is explicit, consented, and written in the agreement",
          "The data is already on a laptop",
          "The chief clapped",
        ],
        [
          "Modeli itajulikana",
          "Madhumuni hayo ya ziada ni wazi, yaliyoidhinishwa, na yameandikwa katika makubaliano",
          "Data tayari iko kwenye kompyuta ndogo",
          "Chifu alipiga makofi",
        ],
        1,
        "Purpose limitation is the difference between a helper and a harvest of other people's notes.",
        "Kikomo cha madhumuni ndiyo tofauti kati ya msaidizi na mavuno ya maelezo ya watu wengine."
      ),
      note(
        "Try it: two-page instruction skeleton",
        "Jaribu: mifupa ya maelekezo ya kurasa mbili",
        `Headings: parties, purpose, data types, lawful basis, hosting, sub-processors, security, delete or return, extra purposes (default: none), who answers data subjects. Fill with your real pilot. Leave blanks visible rather than inventing clause numbers.`,
        `Vichwa: wahusika, madhumuni, aina za data, msingi halali, uhifadhi, wachakataji wadogo, usalama, kufuta au kurudisha, madhumuni ya ziada (chaguo-msingi: hakuna), nani anajibu wahusika wa data. Jaza kwa jaribio lako halisi. Acha mapengo yaonekane badala ya kubuni namba za vifungu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Controllers instruct. Processors do not harvest extra purposes.
- Next: energy, money and why a smaller model is often the responsible model.`,
        `- Wadhibiti wanaelekeza. Wachakataji hawaharidi madhumuni ya ziada.
- Ifuatayo: nishati, pesa na kwa nini modeli ndogo mara nyingi ndiyo yenye uwajibikaji.`
      ),
    ],
  },
  {
    id: "cap-a-u7",
    titleEn: "Energy, cost and smaller models",
    titleSw: "Nishati, gharama na modeli ndogo",
    cards: [
      note(
        "A larger model is a bill, not a virtue",
        "Modeli kubwa ni bili, si fadhila",
        `Training and running large models burns electricity and money. Inference — the guess at use-time — has a unit cost per request. A constrained rule on paper has a unit cost of marker ink.

For a Kenyan community helper, ask whether a  small specialised model, a rule, or an offline card solves the job before you rent distant GPUs. Climate and county budgets are part of the same decision. A borehole board that needs a generator to query a huge remote model has failed twice: once on power, once on cost.

Write three lines in the handover pack: monthly money (airtime, hosting, human review), monthly energy assumptions you actually know, and the cheaper fallback when the bill or the grid fails.

Human review is often the largest cost in health and school tools. Budget it. Do not hide it under "the AI will do that".`,
        `Kufunza na kuendesha modeli kubwa kunatumia umeme na pesa. Inference — makisio wakati wa matumizi — ina gharama kwa kila ombi. Kanuni iliyofungwa kwenye karatasi ina gharama ya wino wa kalamu.

Kwa msaidizi wa jamii Kenya, uliza kama modeli ndogo maalum, kanuni, au kadi nje ya mtandao inatatua kazi kabla ya kukodi GPU za mbali. Tabianchi na bajeti za kaunti ni sehemu ya uamuzi uleule. Ubao wa kisima unaohitaji jenereta kuuliza modeli kubwa ya mbali umeshindwa mara mbili: kwa umeme, na kwa gharama.

Andika mistari mitatu kwenye mfuko wa kuhamisha: pesa za mwezi (salio, uhifadhi, ukaguzi wa binadamu), mawazo ya nishati ya mwezi unayoyajua kweli, na mbadala nafuu bili au gridi inaposhindwa.

Ukaguzi wa binadamu mara nyingi ni gharama kubwa katika zana za afya na shule. Iweke kwenye bajeti. Usifiche chini ya "AI itafanya hivyo".`
      ),
      reveal([
        {
          termEn: "Inference cost",
          termSw: "Gharama ya inference",
          defEn: "What you pay each time the helper makes a guess, in money and in energy.",
          defSw: "Unacholipa kila mara msaidizi anapokisia, kwa pesa na kwa nishati.",
        },
        {
          termEn: "Fallback",
          termSw: "Mbadala",
          defEn: "The paper or rule version that still works when the grid, the bill or the API fails.",
          defSw: "Toleo la karatasi au kanuni ambalo bado linafanya kazi gridi, bili au API inaposhindwa.",
        },
        {
          termEn: "Human review labour",
          termSw: "Kazi ya ukaguzi wa binadamu",
          defEn: "The staff time to check guesses; often larger than the compute bill.",
          defSw: "Muda wa wafanyakazi kukagua makisio; mara nyingi mkubwa kuliko bili ya compute.",
        },
      ]),
      note(
        "Worked example: KES 18,000 a month to guess wait-times",
        "Mfano: KES 18,000 kwa mwezi kukisia nyakati za kusubiri",
        `A vendor quotes KES 12,000 a month for a remote model plus KES 6,000 estimated teacher and clerk time to check answers, to tell a school when videos will fail. A paper tick sheet plus a radio weather bulletin costs KES 0 in API fees and 20 minutes of teacher time.

The remote model still needs a generator on weak-grid days, which is the very day the school needed the guess. The team keeps the tick sheet as the helper and uses a writing tool only to turn the week's ticks into a Kiswahili paragraph for the Board — on a machine already on, with no extra model rental.

They record in the pack: "We refused KES 18,000/month because the fallback was the actual solution." That sentence is climate policy at ward scale.`,
        `Mchuuzi ananukuu KES 12,000 kwa mwezi kwa modeli ya mbali pamoja na KES 6,000 za kukadiria muda wa mwalimu na karani kukagua majibu, kuambia shule video zitakaposhindwa. Karatasi ya tiki pamoja na taarifa ya redio ya hali ya hewa inagharimu KES 0 za ada za API na dakika 20 za muda wa mwalimu.

Modeli ya mbali bado inahitaji jenereta siku za gridi dhaifu, ambayo ndiyo siku shule ilihitaji makisio. Timu inaweka karatasi ya tiki kama msaidizi na inatumia zana ya kuandika tu kugeuza tiki za wiki kuwa aya ya Kiswahili kwa Bodi — kwenye mashine ambayo tayari imewashwa, bila kukodi modeli ya ziada.

Wanaandika kwenye mfuko: "Tulikataa KES 18,000/mwezi kwa sababu mbadala ndiyo ilikuwa suluhisho halisi." Sentensi hiyo ni sera ya tabianchi kwa kiwango cha wadi.`
      ),
      scenario({
        titleEn: "Scenario: generator for the model, not for the classroom",
        titleSw: "Hali: jenereta kwa modeli, si kwa darasa",
        situationEn:
          "A school can afford generator fuel for two hours a day. A vendor wants those hours to keep a large remote model reachable. The teacher wants the hours for lights and a projector.",
        situationSw:
          "Shule inaweza kumudu mafuta ya jenereta kwa saa mbili kwa siku. Mchuuzi anataka saa hizo ziweke modeli kubwa ya mbali inayofikika. Mwalimu anataka saa hizo kwa taa na projekta.",
        questionEn: "What is the responsible allocation?",
        questionSw: "Mgao wenye uwajibikaji ni upi?",
        optionsEn: [
          "Give the hours to the model, because AI is the future",
          "Give the hours to teaching; pick a helper that still works when the model is unreachable",
          "Split the two hours equally without a fallback",
          "Buy a larger model so it needs less fuel",
        ],
        optionsSw: [
          "Peana saa kwa modeli, kwa sababu AI ndiyo baadaye",
          "Peana saa kwa kufundisha; chagua msaidizi ambaye bado anafanya kazi modeli isiyofikika",
          "Gawanya saa mbili sawa bila mbadala",
          "Nunua modeli kubwa ili ihitaji mafuta pungufu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A future that turns the lights off is not a school project.",
          "Correct. Energy is a teaching resource first. Helpers must degrade to paper.",
          "Splitting without a fallback still leaves both jobs half-done.",
          "Larger models usually need more, not less, energy.",
        ],
        hintsSw: [
          "Baadaye inayozima taa si mradi wa shule.",
          "Sahihi. Nishati ni rasilimali ya kufundisha kwanza. Wasaidizi lazima washuke hadi karatasi.",
          "Kugawanya bila mbadala bado kunaacha kazi zote nusu.",
          "Modeli kubwa kwa kawaida zinahitaji nishati zaidi, si pungufu.",
        ],
        explainEn: "If the helper competes with lamps, the helper is the wrong size.",
        explainSw: "Msaidizi akishindana na taa, msaidizi ni ukubwa usiofaa.",
      }),
      quiz(
        "A reason to prefer a smaller specialised helper is:",
        "Sababu ya kupendelea msaidizi mdogo maalum ni:",
        [
          "Small tools never need data",
          "Lower inference cost and easier use when power and budgets are tight",
          "They remove the Data Protection Act",
          "They end wrong guesses completely",
        ],
        [
          "Zana ndogo hazihitaji data kamwe",
          "Gharama ndogo ya inference na matumizi rahisi umeme na bajeti zikiwa finyu",
          "Zinaondoa Sheria ya Ulinzi wa Data",
          "Zinamaliza makisio mabaya kabisa",
        ],
        1,
        "Smaller is about cost, energy and fallback, not about magical safety.",
        "Ndogo inahusu gharama, nishati na mbadala, si usalama wa miujiza."
      ),
      note(
        "Try it: three-line energy budget",
        "Jaribu: bajeti ya nishati ya mistari mitatu",
        `Write monthly money, what happens on a blackout, and the paper fallback. If the fallback cannot do the in-scope job, either shrink the job or you are not ready to depend on the model.`,
        `Andika pesa za mwezi, nini kinatokea kukatika umeme, na mbadala wa karatasi. Mbadala usioweza kufanya kazi iliyo ndani ya wigo, ama fupisha kazi au bado huja tayari kutegemea modeli.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Bills and generators are evaluation data.
- Prefer the smallest helper that does the job.
- Next: partnership agreements that survive a pretty memorandum.`,
        `- Bili na jenereta ni data ya tathmini.
- Pendelea msaidizi mdogo zaidi anayefanya kazi.
- Ifuatayo: makubaliano ya ushirikiano yanayostahimili memorandum nzuri.`
      ),
    ],
  },
  {
    id: "cap-a-u8",
    titleEn: "Partnership agreements",
    titleSw: "Makubaliano ya ushirikiano",
    cards: [
      note(
        "A photograph of a handshake is not an agreement",
        "Picha ya kushikana mikono si makubaliano",
        `Community AI projects collect partners: a CBO, a school Board, a county desk, a vendor, a funder, a university intern. Each partner needs a short written agreement covering money, data, branding, exit, and who speaks to the press.

Dangerous clauses, even when they sound kind:

- Exclusive use of community data for the vendor's model.
- A logo that implies county endorsement before a decision exists.
- "Perpetual licence" to household or learner data.
- Exit terms that leave the county unable to export.
- Students personally guaranteeing a service level they cannot keep.

Kind clauses: time-box, delete-by date, no extra purposes, two named contacts per side, a dispute path that starts with the committee — not with a foreign court the community cannot reach.

If a partner will not sign two pages of plain language, they are not yet a partner. They are an audience.`,
        `Miradi ya AI ya jamii hukusanya washirika: CBO, Bodi ya shule, dawati la kaunti, mchuuzi, mfadhili, mwanafunzi wa chuo. Kila mshirika anahitaji makubaliano mafupi yaliyoandikwa yanayoshughulikia pesa, data, chapa, kutoka, na nani anazungumza na vyombo vya habari.

Vifungu hatari, hata visikiike vya fadhili:

- Matumizi ya kipekee ya data ya jamii kwa modeli ya mchuuzi.
- Nembo inayomaanisha idhini ya kaunti kabla uamuzi kuwepo.
- "Leseni ya milele" kwa data ya kaya au mwanafunzi.
- Masharti ya kutoka yanayoacha kaunti isiyoweza kutoa data nje.
- Wanafunzi kuhakikisha binafsi kiwango cha huduma wasichoweza kushika.

Vifungu vya fadhili: kipindi, tarehe ya kufuta, hakuna madhumuni ya ziada, anwani mbili kwa kila upande, njia ya mgogoro inayoanza na kamati — si mahakama ya kigeni jamii isiyoweza kuifikia.

Mshirika asiyetaka kusaini kurasa mbili za lugha rahisi bado si mshirika. Ni hadhira.`
      ),
      reveal([
        {
          termEn: "Exit terms",
          termSw: "Masharti ya kutoka",
          defEn: "What each side keeps, deletes and can still access when the partnership ends.",
          defSw: "Kile kila upande unachoweka, kufuta na bado kufikia ushirikiano unapoisha.",
        },
        {
          termEn: "Brand use",
          termSw: "Matumizi ya chapa",
          defEn: "Whether anyone may print a county, school or CBO mark — default is no until a minute says yes.",
          defSw: "Kama mtu yeyote anaweza chapisha alama ya kaunti, shule au CBO — chaguo-msingi ni hapana hadi kumbukumbu iseme ndiyo.",
        },
        {
          termEn: "Service promise",
          termSw: "Ahadi ya huduma",
          defEn: "Uptime, support hours and fallback; students should not personally guarantee these.",
          defSw: "Muda wa kufanya kazi, saa za msaada na mbadala; wanafunzi wasihakikishe haya binafsi.",
        },
      ]),
      note(
        "Worked example: the memorandum that implied a county programme",
        "Mfano: memorandum iliyomaanisha programu ya kaunti",
        `A funder drafts a one-paragraph memorandum of understanding with a county logo in the header "for visibility". The youth group has only met an officer who said thank you.

If they circulate the page, traders will believe a county programme exists. ICT will spend months denying it. The honest rewrite removes the logo, names the officer as a listener not a signatory, time-boxes 90 days, and forbids press claims of endorsement.

The funder finds the rewrite "unambitious". The county finds it survivable. Ambition that forges a signature is not a partnership.`,
        `Mfadhili anaandaa aya moja ya memorandum ya maelewano na nembo ya kaunti kwenye kichwa "kwa mwonekano". Kikundi cha vijana kimekutana tu na afisa aliyesema asante.

Wakisambaza ukurasa, wafanyabiashara wataamini programu ya kaunti ipo. ICT itatumia miezi kuikanusha. Uandishi wa kweli unaondoa nembo, unamtaja afisa kama msikilizaji si msignaji, unaweka kipindi cha siku 90, na unakataza madai ya vyombo vya habari ya idhini.

Mfadhili anaona uandishi "hauna tamaa". Kaunti inaona unaweza kustahimili. Tamaa inayotengeneza sahihi si ushirikiano.`
      ),
      scenario({
        titleEn: "Scenario: perpetual licence in the small print",
        titleSw: "Hali: leseni ya milele kwenye maandishi madogo",
        situationEn:
          "A vendor's standard terms grant a perpetual licence to 'improve services' using all logs, including children's connectivity ticks.",
        situationSw:
          "Masharti ya kawaida ya mchuuzi yanatoa leseni ya milele 'kuboresha huduma' kwa kutumia kumbukumbu zote, pamoja na tiki za muunganisho za watoto.",
        questionEn: "What should the school Board do?",
        questionSw: "Bodi ya shule inapaswa kufanya nini?",
        optionsEn: [
          "Sign; standard terms are normal",
          "Refuse; children's logs cannot be a perpetual vendor asset, and extra purposes need a real basis",
          "Sign but ask the vendor to be kind",
          "Let the student intern sign personally",
        ],
        optionsSw: [
          "Saini; masharti ya kawaida ni ya kawaida",
          "Kataa; kumbukumbu za watoto haziwezi kuwa mali ya milele ya mchuuzi, na madhumuni ya ziada yanahitaji msingi halisi",
          "Saini lakini omba mchuuzi awe mwema",
          "Mwache mwanafunzi wa mazoezi asaini binafsi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Standard is not the same as lawful or kind.",
          "Correct. Perpetual extra purposes fail purpose limitation and fail children.",
          "Kindness is not a clause you can audit.",
          "Interns must not be the school's legal surface.",
        ],
        hintsSw: [
          "Kawaida si sawa na halali au fadhili.",
          "Sahihi. Madhumuni ya ziada ya milele yanashindwa kikomo cha madhumuni na yanawashindwa watoto.",
          "Wema si kifungu unachoweza kukagua.",
          "Wanafunzi wa mazoezi wasiwe uso wa kisheria wa shule.",
        ],
        explainEn: "If the small print harvests children, the partnership is the risk, not the helper.",
        explainSw: "Maandishi madogo yakivuna watoto, ushirikiano ndio hatari, si msaidizi.",
      }),
      quiz(
        "A partnership document should forbid, unless a minute exists:",
        "Waraka wa ushirikiano unapaswa kukataza, isipokuwa kumbukumbu ipo:",
        [
          "Naming a delete date",
          "Using a county or school logo as if the tool were adopted",
          "Training two people",
          "Writing monthly cost",
        ],
        [
          "Kutaja tarehe ya kufuta",
          "Kutumia nembo ya kaunti au shule kana kwamba zana imechukuliwa",
          "Kufunza watu wawili",
          "Kuandika gharama ya mwezi",
        ],
        1,
        "Logos are endorsements. Endorsements need decisions, not visibility needs.",
        "Nembo ni idhini. Idhini zinahitaji maamuzi, si mahitaji ya mwonekano."
      ),
      note(
        "Try it: five clauses on one page",
        "Jaribu: vifungu vitano kwenye ukurasa mmoja",
        `Write: money, data purposes, logo rules, exit and export, who speaks. Read it to someone who will look for a trap. If they find a perpetual extra purpose, you found the real partner test.`,
        `Andika: pesa, madhumuni ya data, kanuni za nembo, kutoka na kutoa nje, nani anazungumza. Lisome kwa mtu atakayetafuta mtego. Akipata madhumuni ya ziada ya milele, umepata mtihani halisi wa mshirika.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Partners sign plain pages, not photo opportunities.
- Next: watch for harm after launch, including the harm you did not pre-register.`,
        `- Washirika wanasaini kurasa rahisi, si nafasi za picha.
- Ifuatayo: angalia madhara baada ya uzinduzi, pamoja na madhara usiyosajili mapema.`
      ),
    ],
  },
  {
    id: "cap-a-u9",
    titleEn: "Harm monitoring after launch",
    titleSw: "Kufuatilia madhara baada ya kuzindua",
    cards: [
      note(
        "Launch is when new harms start arriving",
        "Uzinduzi ndipo madhara mapya yanapoanza kufika",
        `Pre-registered risks are not the only risks. After launch, people invent uses you did not intend: a wait-board becomes a way to police who fetched water; a connectivity log becomes a way to blame a child; a waste photo tool becomes a way to shame a household.

Harm monitoring is a scheduled, owned habit: a monthly hour where two people read complaints, dropouts, stop-rule triggers, and any new use. They write what they will change or stop. They do not wait for a journalist.

Channels must be reachable without a smartphone if the helper serves people without phones: a paper box at the clerk's stall, a named person at the tap, a teacher hour.

If nobody owns the monthly hour, you do not have monitoring. You have hope.`,
        `Hatari zilizosajiliwa mapema si hatari pekee. Baada ya uzinduzi, watu wanabuni matumizi usiyokusudia: ubao wa kusubiri unakuwa njia ya kuwapolisi nani alichota maji; kumbukumbu ya muunganisho inakuwa njia ya kulaumu mtoto; zana ya picha ya taka inakuwa njia ya kuaibisha kaya.

Ufuatiliaji wa madhara ni tabia yenye ratiba na mmiliki: saa ya kila mwezi ambapo watu wawili wanasoma malalamiko, walioacha, vianzishi vya kanuni ya kusimama, na matumizi mapya yoyote. Wanaandika watakachobadilisha au kusimamisha. Hawasubiri mwandishi wa habari.

Njia lazima zifikiwe bila simu mahiri kama msaidizi anawahudumia wasio na simu: sanduku la karatasi kwenye duka la karani, mtu aliyetajwa kwenye bomba, saa ya mwalimu.

Kama hakuna anayemiliki saa ya mwezi, huna ufuatiliaji. Una tumaini.`
      ),
      reveal([
        {
          termEn: "Unintended use",
          termSw: "Matumizi yasiyokusudiwa",
          defEn: "A way people employ the helper that you did not design, often a new harm.",
          defSw: "Njia watu wanavyotumia msaidizi ambayo hukubuni, mara nyingi madhara mapya.",
        },
        {
          termEn: "Complaint channel",
          termSw: "Njia ya malalamiko",
          defEn: "How someone tells you to stop, including without a phone.",
          defSw: "Jinsi mtu anavyokuambia usimame, pamoja na bila simu.",
        },
        {
          termEn: "Incident log",
          termSw: "Daftari la matukio",
          defEn: "Dated notes of harms, near-harms and what you changed.",
          defSw: "Maelezo yenye tarehe ya madhara, karibu-madhara na ulichobadilisha.",
        },
      ]),
      note(
        "Worked example: the board that became a roll-call",
        "Mfano: ubao uliokuwa orodha ya majina",
        `Three months after a borehole board launched, a nyumba kumi member starts writing who arrived late, "to teach discipline". That was not in the helper. It is a new harm: public shaming using a tool meant to share quiet hours.

The monthly hour catches it because an older neighbour uses the paper complaint box. The team takes names off any side list the same day, reprints the rule "no names", and tells the committee the board comes down if names return.

They add the incident to the briefing pack. Hiding it would have trained the next site to copy the roll-call.`,
        `Miezi mitatu baada ya ubao wa kisima kuzinduliwa, mjumbe wa nyumba kumi anaanza kuandika nani alichelewa, "kufundisha nidhamu". Hiyo haikuwa kwenye msaidizi. Ni madhara mapya: aibu ya umma kwa kutumia zana iliyokusudiwa kushiriki saa za shwari.

Saa ya mwezi inayakamata kwa sababu jirani mzee anatumia sanduku la malalamiko la karatasi. Timu inaondoa majina kwenye orodha yoyote ya kando siku hiyo, inachapisha tena kanuni "hakuna majina", na inaiambia kamati ubao unashuka majina yakirudi.

Wanaongeza tukio kwenye mfuko wa wasilisho. Kulificha kungefundisha tovuti inayofuata kunakili orodha ya majina.`
      ),
      scenario({
        titleEn: "Scenario: wait for the newspaper",
        titleSw: "Hali: subiri gazeti",
        situationEn:
          "Teachers whisper that a connectivity helper is being used to accuse children of wasting data. There is no incident log. A member says, 'If it were serious, it would be in the paper.'",
        situationSw:
          "Walimu wananong'ona kwamba msaidizi wa muunganisho unatumiwa kuwashtaki watoto kwa kupoteza data. Hakuna daftari la matukio. Mwanachama anasema, 'Ikiwa ingekuwa nzito, ingekuwa gazetini.'",
        questionEn: "What should happen this week?",
        questionSw: "Nini kifanyike wiki hii?",
        optionsEn: [
          "Wait for a journalist",
          "Open the monthly hour now, talk to teachers, freeze identifiers, and be willing to switch the helper off",
          "Add more AI so accusations become automatic",
          "Delete the whispers from memory",
        ],
        optionsSw: [
          "Subiri mwandishi wa habari",
          "Fungua saa ya mwezi sasa, ongea na walimu, gandisha vitambulisho, na uwe tayari kuzima msaidizi",
          "Ongeza AI zaidi ili mashtaka yawe ya kiotomatiki",
          "Futa minong'ono kwenye kumbukumbu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Journalists are not your monitoring plan.",
          "Correct. Whispers are data. Identifiers off. Off-switch ready.",
          "Automation would scale the accusation.",
          "Memory-holing is how harms become culture.",
        ],
        hintsSw: [
          "Waandishi wa habari si mpango wako wa ufuatiliaji.",
          "Sahihi. Minong'ono ni data. Vitambulisho zimwe. Swichi ya kuzima iwe tayari.",
          "Otomatiki ingeeneza shtaka.",
          "Kufuta kumbukumbu ndivyo madhara yanavyokuwa utamaduni.",
        ],
        explainEn: "Monitoring is scheduled listening plus the power to stop. Newspapers are too late.",
        explainSw: "Ufuatiliaji ni kusikiliza kwa ratiba pamoja na uwezo wa kusimama. Magazeti ni kuchelewa mno.",
      }),
      quiz(
        "Harm monitoring is real only if:",
        "Ufuatiliaji wa madhara ni wa kweli tu ikiwa:",
        [
          "A slogan about ethics is on the poster",
          "A named pair of people have a monthly hour, a no-phone channel, and the authority to stop",
          "The funder is copied on happy emails",
          "The model is large",
        ],
        [
          "Kauli kuhusu maadili iko kwenye bango",
          "Jozi iliyotajwa ya watu ina saa ya mwezi, njia isiyo na simu, na mamlaka ya kusimama",
          "Mfadhili ananakiwa kwenye barua pepe za furaha",
          "Modeli ni kubwa",
        ],
        1,
        "Ownership, a channel people can actually use, and an off-switch. Otherwise it is decoration.",
        "Umiliki, njia watu wanaweza kutumia kweli, na swichi ya kuzima. Vinginevyo ni mapambo."
      ),
      note(
        "Try it: the monthly hour card",
        "Jaribu: kadi ya saa ya mwezi",
        `Write who, when, where the paper box lives, what counts as an incident, and who can take the helper down the same day. Put the card in the handover pack.`,
        `Andika nani, lini, sanduku la karatasi linaishi wapi, nini vinahesabiwa kama tukio, na nani anaweza kushusha msaidizi siku ileile. Weka kadi kwenye mfuko wa kuhamisha.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- New uses are new harms until proven otherwise.
- Listen on paper, not only on phones.
- Next: a ten-minute briefing a county desk can survive.`,
        `- Matumizi mapya ni madhara mapya hadi kuthibitishwa vinginevyo.
- Sikiliza kwenye karatasi, si simu tu.
- Ifuatayo: wasilisho la dakika kumi ambalo dawati la kaunti linaweza kustahimili.`
      ),
    ],
  },
  {
    id: "cap-a-u10",
    titleEn: "The ten-minute briefing",
    titleSw: "Wasilisho la dakika kumi",
    cards: [
      note(
        "Ten minutes, no theatre",
        "Dakika kumi, hakuna maonyesho",
        `A briefing for a chief, a Board of Management, or a county ICT desk is ten minutes because that is the attention you will actually get. Structure:

1. Problem number (60 seconds).
2. Helper and named risk (90 seconds).
3. Evaluation: primary measure, slices, confounders, dropouts (150 seconds).
4. Data: controller, hosting, delete date, Act named (90 seconds).
5. Support: two people, monthly cost, energy fallback (60 seconds).
6. Ask: one decision, not five (60 seconds).
7. Silence for questions (remaining time).

Forbidden: logos you do not have, numbers you did not measure, "AI will transform the county", vendor brand names, and skipping dropouts to keep the mood.

If you need slides, you need fewer words, not more slides.`,
        `Wasilisho kwa chifu, Bodi ya Usimamizi, au dawati la ICT ya kaunti ni dakika kumi kwa sababu huo ndio umakini utakaopata kweli. Muundo:

1. Namba ya tatizo (sekunde 60).
2. Msaidizi na hatari iliyotajwa (sekunde 90).
3. Tathmini: kipimo kikuu, vipande, vichanganyiko, walioacha (sekunde 150).
4. Data: mdhibiti, uhifadhi, tarehe ya kufuta, Sheria imetajwa (sekunde 90).
5. Msaada: watu wawili, gharama ya mwezi, mbadala wa nishati (sekunde 60).
6. Ombi: uamuzi mmoja, si mitano (sekunde 60).
7. Kimya kwa maswali (muda uliobaki).

Katazwa: nembo usizo nazo, namba usizopima, "AI itabadilisha kaunti", majina ya chapa za wachuuzi, na kuruka walioacha ili kuhifadhi hali.

Ukihitaji slaidi, unahitaji maneno pungufu, si slaidi zaidi.`
      ),
      reveal([
        {
          termEn: "One ask",
          termSw: "Ombi moja",
          defEn: "The single decision you want in the room: pause, fund support, refuse a vendor clause, or continue the same size.",
          defSw: "Uamuzi mmoja unayotaka chumbani: pumzisha, fadhili msaada, kataa kifungu cha mchuuzi, au endelea kwa ukubwa uleule.",
        },
        {
          termEn: "Architecture in plain words",
          termSw: "Muundo kwa maneno rahisi",
          defEn: "Where data goes, who guesses, who decides — without fashion words.",
          defSw: "Data inakwenda wapi, nani anakisia, nani anaamua — bila maneno ya mtindo.",
        },
      ]),
      note(
        "Worked example: six minutes that told the truth",
        "Mfano: dakika sita zilizosema ukweli",
        `At a county education briefing the team says: Grade 6 videos loaded in 3 of 10 hours; after a helper plus a borrowed generator, 7 of 10, of which two hours are confounders; no learner names; controller is the Board; hosting is a locked cupboard plus a county sheet only if ICT agrees; monthly cost of the rejected vendor was KES 18,000; paper tick sheet remains the helper; one ask: do not sign a perpetual log licence.

The director does not clap. The director asks ICT to refuse the licence. That is a successful briefing.

A weaker briefing would have said "70% success, county-ready AI" and left ICT to discover the generator in a complaint.`,
        `Katika wasilisho la elimu ya kaunti timu inasema: video za Darasa la 6 zilipakia katika saa 3 kati ya 10; baada ya msaidizi pamoja na jenereta iliyokopwa, 7 kati ya 10, kati yake saa mbili ni vichanganyiko; hakuna majina ya wanafunzi; mdhibiti ni Bodi; uhifadhi ni kabati iliyofungwa pamoja na jedwali la kaunti tu ICT ikikubali; gharama ya mwezi ya mchuuzi aliyekataliwa ilikuwa KES 18,000; karatasi ya tiki inabaki msaidizi; ombi moja: usisaini leseni ya milele ya kumbukumbu.

Mkurugenzi hapigi makofi. Mkurugenzi anaomba ICT ikatae leseni. Huo ni wasilisho lililofanikiwa.

Wasilisho dhaifu lingeweza kusema "mafanikio 70%, AI tayari kwa kaunti" na kuacha ICT igundue jenereta katika lalamiko.`
      ),
      scenario({
        titleEn: "Scenario: the twelve-slide transformation",
        titleSw: "Hali: mabadiliko ya slaidi kumi na mbili",
        situationEn:
          "A partner wants twelve slides on 'transforming the county with AI' and no dropout slide. You have ten minutes with ICT.",
        situationSw:
          "Mshirika anataka slaidi kumi na mbili kuhusu 'kubadilisha kaunti kwa AI' bila slaidi ya walioacha. Una dakika kumi na ICT.",
        questionEn: "What do you take into the room?",
        questionSw: "Unachukua nini chumbani?",
        optionsEn: [
          "The twelve slides, to keep the partner happy",
          "One page plus the ten-minute structure, with dropouts and the one ask",
          "A live demo that needs the generator",
          "Nothing on paper, so you can be flexible",
        ],
        optionsSw: [
          "Slaidi kumi na mbili, ili mshirika afurahi",
          "Ukurasa mmoja pamoja na muundo wa dakika kumi, wenye walioacha na ombi moja",
          "Onyesho la moja kwa moja linalohitaji jenereta",
          "Hakuna kwenye karatasi, ili uwe rahisi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Partner happiness is not the decision-maker's job.",
          "Correct. ICT can audit a page. They cannot audit a mood.",
          "Demos that need extra power are confounders in costume.",
          "Flexibility without paper is how numbers get invented in the room.",
        ],
        hintsSw: [
          "Furaha ya mshirika si kazi ya mtoa uamuzi.",
          "Sahihi. ICT inaweza kukagua ukurasa. Haiwezi kukagua hisia.",
          "Maonyesho yanayohitaji umeme wa ziada ni vichanganyiko vya mavazi.",
          "Urahisi bila karatasi ndivyo namba zinavyobuniwa chumbani.",
        ],
        explainEn: "Ten minutes is a filter. If it cannot fit, it is not ready for a county desk.",
        explainSw: "Dakika kumi ni kichujio. Iisipofaa, haijawa tayari kwa dawati la kaunti.",
      }),
      pb({
        titleEn: "Build a ten-minute briefing prompt",
        titleSw: "Jenga maagizo ya wasilisho la dakika kumi",
        introEn:
          "You want a writing helper to draft spoken notes for an ICT desk briefing. The prompt must ban theatre.",
        introSw:
          "Unataka msaidizi wa kuandika aandike maelezo ya kusema kwa wasilisho la dawati la ICT. Maagizo lazima yakataze maonyesho.",
        goalEn:
          "Your prompt must enforce the seven-part timing, the full fraction, the Act, and a single ask.",
        goalSw:
          "Maagizo yako lazima yalazimishe muda wa sehemu saba, sehemu kamili, Sheria, na ombi moja.",
        blocksEn: [
          "Audience: county ICT and education officers, spoken English and Kiswahili headings, ten minutes",
          "Include: primary measure, confounders, dropouts, controller, hosting, delete date, Data Protection Act 2019",
          "Forbidden: invented endorsements, vendor brands, 'transformation' claims, hiding the generator",
          "One ask: refuse perpetual licence on learner logs",
          "Format: timed bullets, not slides, mark unknowns as unknown",
        ],
        blocksSw: [
          "Hadhira: maafisa wa ICT na elimu ya kaunti, vichwa vya Kiingereza na Kiswahili vinavyosemwa, dakika kumi",
          "Jumlisha: kipimo kikuu, vichanganyiko, walioacha, mdhibiti, uhifadhi, tarehe ya kufuta, Sheria ya Ulinzi wa Data 2019",
          "Katazwa: idhini zilizobuniwa, chapa za wachuuzi, madai ya 'mabadiliko', kuficha jenereta",
          "Ombi moja: kataa leseni ya milele kwenye kumbukumbu za wanafunzi",
          "Muundo: pointi zenye muda, si slaidi, weka visivyojulikana kama visivyojulikana",
        ],
        required: [0, 1, 2, 3],
        sampleEn:
          "Audience: county ICT and education officers, spoken English and Kiswahili headings, ten minutes. Include: primary measure, confounders, dropouts, controller, hosting, delete date, Data Protection Act 2019. Forbidden: invented endorsements, vendor brands, 'transformation' claims, hiding the generator. One ask: refuse perpetual licence on learner logs. Format: timed bullets, not slides, mark unknowns as unknown.",
        sampleSw:
          "Hadhira: maafisa wa ICT na elimu ya kaunti, vichwa vya Kiingereza na Kiswahili vinavyosemwa, dakika kumi. Jumlisha: kipimo kikuu, vichanganyiko, walioacha, mdhibiti, uhifadhi, tarehe ya kufuta, Sheria ya Ulinzi wa Data 2019. Katazwa: idhini zilizobuniwa, chapa za wachuuzi, madai ya 'mabadiliko', kuficha jenereta. Ombi moja: kataa leseni ya milele kwenye kumbukumbu za wanafunzi. Muundo: pointi zenye muda, si slaidi, weka visivyojulikana kama visivyojulikana.",
      }),
      quiz(
        "The one ask in a ten-minute briefing should be:",
        "Ombi moja katika wasilisho la dakika kumi linapaswa kuwa:",
        [
          "Five unrelated favours",
          "A single decision the people in the room can actually take",
          "A request for a logo on the spot",
          "A demand to ignore dropouts",
        ],
        [
          "Fadhili tano zisizohusiana",
          "Uamuzi mmoja ambao watu walio chumbani wanaweza kuchukua kweli",
          "Ombi la nembo papo hapo",
          "Mahitaji ya kupuuza walioacha",
        ],
        1,
        "One decision. Everything else is a memo they can read later.",
        "Uamuzi mmoja. Kila kitu kingine ni memo wanaweza kusoma baadaye."
      ),
      note(
        "Try it: time yourself",
        "Jaribu: jipime muda",
        `Speak the seven parts to a wall, with a clock. Cut until it fits, including silence. Write the one ask at the top of the page so you cannot bury it.`,
        `Sema sehemu saba ukutani, na saa. Kata hadi ifae, pamoja na kimya. Andika ombi moja juu ya ukurasa ili usizike.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Ten minutes, full fraction, one ask.
- Next: freeze the briefing into a one-page action plan a successor can run.`,
        `- Dakika kumi, sehemu kamili, ombi moja.
- Ifuatayo: gandisha wasilisho kuwa mpango wa ukurasa mmoja mrithi anayeweza kuendesha.`
      ),
    ],
  },
  {
    id: "cap-a-u11",
    titleEn: "One-page action plan",
    titleSw: "Mpango wa ukurasa mmoja",
    cards: [
      note(
        "The page a successor can run in month two",
        "Ukurasa mrithi anayeweza kuendesha mwezi wa pili",
        `Advanced one-pagers are operating documents. A new coordinator should be able to run month two without calling you.

Headings:

1. Problem number and instrument.
2. Helper, risk, stop rule, unintended-use watch.
3. Evaluation: primary measure, slices, confounders.
4. Controller, processor, hosting, delete date, Act.
5. Two named maintainers, monthly money, energy fallback.
6. Partners: logo rules, extra purposes (none), exit.
7. Next 30 days and sunset criteria.

If heading 5 still lists a personal phone, the page is not advanced. It is a volunteer diary.`,
        `Kurasa moja za ngazi ya juu ni nyaraka za uendeshaji. Mratibu mpya anapaswa kuweza kuendesha mwezi wa pili bila kukupigia.

Vichwa:

1. Namba ya tatizo na chombo.
2. Msaidizi, hatari, kanuni ya kusimama, uangalizi wa matumizi yasiyokusudiwa.
3. Tathmini: kipimo kikuu, vipande, vichanganyiko.
4. Mdhibiti, mchakataji, uhifadhi, tarehe ya kufuta, Sheria.
5. Watunzaji wawili waliotajwa, pesa za mwezi, mbadala wa nishati.
6. Washirika: kanuni za nembo, madhumuni ya ziada (hakuna), kutoka.
7. Siku 30 zijazo na vigezo vya kufunga.

Kichwa cha 5 kikiwa bado kinaorodhesha simu binafsi, ukurasa si wa ngazi ya juu. Ni shajara ya mjitoleaji.`
      ),
      reveal([
        {
          termEn: "Operating page",
          termSw: "Ukurasa wa uendeshaji",
          defEn: "A one-pager a successor can follow without the founder in the room.",
          defSw: "Ukurasa mmoja ambao mrithi anaweza kufuata bila mwanzilishi chumbani.",
        },
        {
          termEn: "Successor test",
          termSw: "Mtihani wa mrithi",
          defEn: "If this person disappeared for a month, would the helper still be kind and legal?",
          defSw: "Mtu huyu akitoweka kwa mwezi, je msaidizi bado ungekuwa mwema na halali?",
        },
      ]),
      note(
        "Worked example: the Turkana school page",
        "Mfano: ukurasa wa shule ya Turkana",
        `Problem: 3/10 Grade 6 video hours loaded; instrument is the teacher's tick sheet.

Helper: offline activity card when the video fails; risk is blaming children; stop if identifiers appear.

Evaluation: same tick sheet; slice generator versus grid days; generator is a confounder.

Controller: Board of Management. Processor: none. Hosting: cupboard. Delete: not applicable (no personal rows). Act named in the briefing.

Maintainers: deputy head and ICT champion. Money: KES 0 API, generator fuel stays with teaching. Fallback: the card.

Partners: no logos. Next 30 days: refuse vendor licence. Sunset: stop if cards are used for punishment.

A successor can run that. That is the point.`,
        `Tatizo: saa 3/10 za video za Darasa la 6 zilipakia; chombo ni karatasi ya tiki ya mwalimu.

Msaidizi: kadi ya shughuli nje ya mtandao video inaposhindwa; hatari ni kulaumu watoto; simama vitambulisho vikitokea.

Tathmini: karatasi ileile ya tiki; kipande cha jenereta dhidi ya siku za gridi; jenereta ni kichanganyiko.

Mdhibiti: Bodi ya Usimamizi. Mchakataji: hakuna. Uhifadhi: kabati. Futa: haitumiki (hakuna safu za mtu). Sheria imetajwa kwenye wasilisho.

Watunzaji: naibu mkuu na bingwa wa ICT. Pesa: KES 0 API, mafuta ya jenereta yanabaki na ufundishaji. Mbadala: kadi.

Washirika: hakuna nembo. Siku 30: kataa leseni ya mchuuzi. Kufunga: simama kadi zikitumiwa kwa adhabu.

Mrithi anaweza kuendesha hiyo. Ndiyo maana.`
      ),
      scenario({
        titleEn: "Scenario: founder on a bus to campus",
        titleSw: "Hali: mwanzilishi katika basi kwenda chuo",
        situationEn:
          "You leave for eight weeks. The only delete date lives in your head. The only organisational login is your personal email.",
        situationSw:
          "Unaondoka kwa wiki nane. Tarehe pekee ya kufuta inaishi kichwani mwako. Kuingia pekee kwa shirika ni barua pepe yako binafsi.",
        questionEn: "Is the action plan ready?",
        questionSw: "Je, mpango wa hatua uko tayari?",
        optionsEn: [
          "Yes, because the poster is beautiful",
          "No: move the login and the delete date onto named roles before you board",
          "Yes, if you promise to answer chat",
          "Yes, if a chatbot remembers for you",
        ],
        optionsSw: [
          "Ndiyo, kwa sababu bango ni zuri",
          "Hapana: hamisha kuingia na tarehe ya kufuta kwa majukumu yaliyotajwa kabla ya kupanda",
          "Ndiyo, ukiahidi kujibu gumzo",
          "Ndiyo, chatbot ikikukumbukia",
        ],
        correctIndex: 1,
        hintsEn: [
          "Beauty is not continuity.",
          "Correct. The successor test fails until roles, not heads, hold the dates.",
          "Chat is not a controller.",
          "A writing helper is not a data protection officer.",
        ],
        hintsSw: [
          "Urembo si kuendelea.",
          "Sahihi. Mtihani wa mrithi unashindwa hadi majukumu, si vichwa, yashike tarehe.",
          "Gumzo si mdhibiti.",
          "Msaidizi wa kuandika si afisa wa ulinzi wa data.",
        ],
        explainEn: "If the plan dies when you board a bus, it was never handed over.",
        explainSw: "Mpango ukifa unapopanda basi, haukuwahi kuhamishwa.",
      }),
      quiz(
        "An advanced one-page plan is complete when:",
        "Mpango wa ukurasa mmoja wa ngazi ya juu unakamilika wakati:",
        [
          "It names ten counties",
          "A successor can run month two: measure, consent, cost, off-switch and sunset",
          "It hides dropouts",
          "It includes a vendor logo",
        ],
        [
          "Unataja kaunti kumi",
          "Mrithi anaweza kuendesha mwezi wa pili: kipimo, idhini, gharama, swichi ya kuzima na kufunga",
          "Unaficha walioacha",
          "Unajumuisha nembo ya mchuuzi",
        ],
        1,
        "Completion is operability without the founder, not geographic ambition.",
        "Ukamilifu ni uendeshaji bila mwanzilishi, si tamaa ya kijiografia."
      ),
      note(
        "Try it: successor read-through",
        "Jaribu: usomaji wa mrithi",
        `Hand the page to someone who was not in the project. Ask them to say what they would do next Tuesday, and what they would stop if a name list appeared. If they cannot, the page still needs you in the room.`,
        `Mpe ukurasa mtu ambaye hakuwa kwenye mradi. Waombe waseme wangefanya nini Jumanne ijayo, na wangesimamisha nini orodha ya majina ikitokea. Wakiwa hawawezi, ukurasa bado unahitaji wewe chumbani.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Operating page, successor test, no personal phone as infrastructure.
- Next: the final checkpoint — ready to hand over, or ready to stop.`,
        `- Ukurasa wa uendeshaji, mtihani wa mrithi, hakuna simu binafsi kama miundombinu.
- Ifuatayo: kituo cha mwisho — tayari kuhamisha, au tayari kusimama.`
      ),
    ],
  },
  {
    id: "cap-a-u12",
    titleEn: "Checkpoint: ready to hand over",
    titleSw: "Kituo: tayari kuhamisha",
    cards: [
      note(
        "The last honesty is knowing when to stop",
        "Uaminifu wa mwisho ni kujua lini kusimama",
        `An advanced community capstone is ready to hand over when evaluation would survive scrutiny, two people can maintain the helper, county ICT could name the controller, energy and money are written, partners cannot harvest extra purposes, harms are monitored on a calendar, and a ten-minute briefing tells the full fraction.

It is also ready when the honest decision is to stop. Stopping with a shred date, a public note, and no forged endorsement is a complete project. Scaling a quarrel is not.

You trained to use a helper for a local burden — water, waste, a classroom without a video, a stall throwing tomatoes — without branding the work as a global slogan, and without treating a guess as a government.

If a stranger from ICT and a neighbour without a phone would both still be safer after you leave, you are done.`,
        `Mradi wa jamii wa ngazi ya juu uko tayari kuhamisha tathmini inapoweza kustahimili ukaguzi, watu wawili wanaweza kutunza msaidizi, ICT ya kaunti ingeweza kutaja mdhibiti, nishati na pesa zimeandikwa, washirika hawawezi kuvuna madhumuni ya ziada, madhara yanafuatiliwa kwenye kalenda, na wasilisho la dakika kumi linasema sehemu kamili.

Pia uko tayari uamuzi wa kweli unapokuwa kusimama. Kusimama na tarehe ya kuparua, ujumbe wa umma, na bila idhini bandia ni mradi kamili. Kueneza ugomvi si hivyo.

Umefunzwa kutumia msaidizi kwa mzigo wa eneo — maji, taka, darasa bila video, duka linalotupa nyanya — bila kutia chapa kazi kama kauli ya dunia, na bila kuchukulia makisio kama serikali.

Mgeni kutoka ICT na jirani asiye na simu wote bado wakiwa salama baada ya wewe kuondoka, umemaliza.`
      ),
      reveal([
        {
          termEn: "Ready to hand over",
          termSw: "Tayari kuhamisha",
          defEn: "The helper can be kind and lawful for a month without you.",
          defSw: "Msaidizi anaweza kuwa mwema na halali kwa mwezi bila wewe.",
        },
        {
          termEn: "Ready to stop",
          termSw: "Tayari kusimama",
          defEn: "You can end the helper in public, delete what you promised, and not pretend it is still a programme.",
          defSw: "Unaweza kumaliza msaidizi hadharani, kufuta ulichoahidi, na usijifanye bado ni programu.",
        },
      ]),
      note(
        "Worked example: two complete endings",
        "Mfano: miisho miwili kamili",
        `Ending A — handover: the Board runs the tick-sheet helper, ICT refused the vendor licence, generator confounders stay in the file, two staff own the monthly hour, the intern's email is gone from every login.

Ending B — stop: leftover tips at Kondele end on the shred date because funeral shorts repeated; the clerk keeps a public announcement; no social post claims a county fruit-waste programme; traders who declined are thanked, not listed.

Both endings pass the checkpoint. A third ending — silent continuation on a personal laptop — fails.`,
        `Mwisho A — kuhamisha: Bodi inaendesha msaidizi wa karatasi ya tiki, ICT ilikataa leseni ya mchuuzi, vichanganyiko vya jenereta vinabaki kwenye faili, wafanyakazi wawili wanamiliki saa ya mwezi, barua pepe ya mwanafunzi wa mazoezi imeondoka kwenye kila kuingia.

Mwisho B — kusimama: vidokezo vya mabaki Kondele vinaisha tarehe ya kuparua kwa sababu upungufu wa mazishi ulirudiwa; karani anaweka tangazo la umma; hakuna chapisho linalodai programu ya kaunti ya upotevu wa matunda; wafanyabiashara waliokataa wanashukuriwa, si kuorodheshwa.

Miisho yote miwili inapita kituo. Mwisho wa tatu — kuendelea kimya kwenye kompyuta ndogo binafsi — unashindwa.`
      ),
      scenario({
        titleEn: "Scenario: keep it alive on a laptop",
        titleSw: "Hali: iweke hai kwenye kompyuta ndogo",
        situationEn:
          "Partners have drifted. You are tempted to keep a named learner log 'just in case the project returns' on your personal laptop.",
        situationSw:
          "Washirika wametawanyika. Unatamani kuweka kumbukumbu ya wanafunzi waliotajwa 'ikiwa mradi utarudi' kwenye kompyuta yako ndogo binafsi.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Keep it; future-you might need it",
          "Delete it on the promised date; a personal laptop is not a county archive",
          "Email it to yourself in three places",
          "Hand it to a journalist for safekeeping",
        ],
        optionsSw: [
          "Iweke; wewe wa baadaye unaweza kuhitaji",
          "Ifute tarehe iliyoahidiwa; kompyuta ndogo binafsi si kumbukumbu ya kaunti",
          "Jitume barua pepe katika sehemu tatu",
          "Mpe mwandishi wa habari kuhifadhi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Just in case is how personal data becomes immortal.",
          "Correct. Promised deletion is part of completion.",
          "Copies are the opposite of deletion.",
          "Journalists are not your processor.",
        ],
        hintsSw: [
          "Ikiwa ndivyo data ya mtu inavyokuwa ya milele.",
          "Sahihi. Kufuta kulikoahidiwa ni sehemu ya ukamilifu.",
          "Nakala ni kinyume cha kufuta.",
          "Waandishi wa habari si mchakataji wako.",
        ],
        explainEn: "Completion includes the delete. A souvenir file of children is not a capstone.",
        explainSw: "Ukamilifu unajumuisha kufuta. Faili la ukumbusho la watoto si mradi.",
      }),
      quiz(
        "An advanced community capstone is complete when:",
        "Mradi wa jamii wa ngazi ya juu unakamilika wakati:",
        [
          "A large model is running in ten counties",
          "You can hand over or stop, with evaluation, ownership, cost and monitoring that do not depend on you",
          "A chatbot always answers",
          "A logo implies a county programme",
        ],
        [
          "Modeli kubwa inaenda katika kaunti kumi",
          "Unaweza kuhamisha au kusimama, kwa tathmini, umiliki, gharama na ufuatiliaji visivyokutegemea wewe",
          "Chatbot inajibu kila mara",
          "Nembo inamaanisha programu ya kaunti",
        ],
        1,
        "Done means the community is safer with you gone, whether the helper continues or stops.",
        "Kumaliza kunamaanisha jamii iko salama wewe umeondoka, msaidizi akiendelea au akisimama."
      ),
      note(
        "Try it: ICT stranger and neighbour test",
        "Jaribu: mtihani wa mgeni wa ICT na jirani",
        `Write two paragraphs. Paragraph 1: what a county ICT officer would find if they arrived tomorrow. Paragraph 2: what a neighbour without a phone would still be able to use, or be protected from.

If either paragraph still requires your personal device, you are not at the checkpoint.`,
        `Andika aya mbili. Aya ya 1: afisa wa ICT ya kaunti angepata nini akifika kesho. Aya ya 2: jirani asiye na simu bado angeweza kutumia nini, au kulindwa na nini.

Aya yoyote bado ikihitaji kifaa chako binafsi, bado huja kwenye kituo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Hand over or stop. Do not haunt a community from a personal laptop.
- Helper plus rule, measured, owned, and kind to people who said no.
- That is the whole capstone.`,
        `- Kuhamisha au kusimama. Usisumbue jamii kutoka kompyuta ndogo binafsi.
- Msaidizi pamoja na kanuni, vilivyopimwa, vilivyomilikiwa, na vya fadhili kwa waliosema hapana.
- Huo ndio mradi mzima.`
      ),
    ],
  },
];
