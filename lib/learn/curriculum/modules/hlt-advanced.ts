import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Health and care — advanced (expert builder and leader).
 * Governance and specification, not medical-device claims.
 * No exploit, attack, or jailbreak content. All facilities and counts are fictional
 * unless named as reported pilots without performance numbers.
 */
export const hltAdvancedUnits: CurriculumUnit[] = [
  // ------------------------------------------------------------------ u1
  {
    id: "hlt-a-u1",
    titleEn: "Governing health AI in a county",
    titleSw: "Kusimamia AI ya afya katika kaunti",
    cards: [
      note(
        "A committee, a purpose, a stop switch",
        "Kamati, kusudi, swichi ya kusimamisha",
        `Health AI governance is the set of people, papers and stop-rules that decide whether a tool may touch care. It is not a logo on a slide. Kenya's National Artificial Intelligence Strategy 2025–2030 names health as a priority and stresses skills, data, infrastructure and ethics. The Data Protection Act, 2019 and the Health Act, 2017 still bind every county system. The Pharmacy and Poisons Board regulates medicines and health products. None of that makes a chatbot a clinician.

A workable county committee includes: medical superintendent or county director of health, nursing and CHP representation, pharmacy, records / KHIS, the county data protection lead, and someone who can read a contract. They meet on a calendar, not only when a vendor demos.

The committee's first product is a one-page purpose: which decision the tool supports, who is accountable, which MOH pathway it must not skip, and the stop switch — who can pause it after a safety incident. Without a named pause-holder, you have a hobby, not governance.

This track will not claim that any product is a medical device, and it will not invent clinical accuracy. AmeriAfriAI and Zendawa may be mentioned only as reported pilots.`,
        `Usimamizi wa AI ya afya ni seti ya watu, karatasi na kanuni za kusimamisha zinazoamua kama zana inaweza kugusa huduma. Si nembo kwenye slaidi. Mkakati wa Taifa wa Akili Bandia 2025–2030 unataja afya kama kipaumbele na unasisitiza ujuzi, data, miundombinu na maadili. Sheria ya Ulinzi wa Data, 2019 na Sheria ya Afya, 2017 bado zinawafunga kila mfumo wa kaunti. Bodi ya Famasia na Sumu inasimamia dawa na bidhaa za afya. Hayo hayafanyi chatbot kuwa mhudumu.

Kamati inayofanya kazi ya kaunti inajumuisha: msimamizi wa matibabu au mkurugenzi wa afya wa kaunti, uwakilishi wa wauguzi na CHP, famasia, rekodi / KHIS, kiongozi wa ulinzi wa data wa kaunti, na mtu anayeweza kusoma mkataba. Wanakutana kwa kalenda, si tu muuzaji anapoonyesha.

Bidhaa ya kwanza ya kamati ni kusudi la ukurasa mmoja: uamuzi gani zana inasaidia, nani anawajibika, njia ipi ya MOH isipaswi kuruka, na swichi ya kusimamisha — nani anaweza kuisimamisha baada ya tukio la usalama. Bila mtu aliye na jina wa kusimamisha, una hobby, si usimamizi.

Somo hili haledai bidhaa yoyote ni kifaa cha tiba, wala halibuni usahihi wa kitabibu. AmeriAfriAI na Zendawa zinaweza kutajwa tu kama majaribio yaliyoripotiwa.`,
        "/learn/content/hlt/clinical-imaging-review.jpg"
      ),
      reveal([
        {
          termEn: "Governance committee",
          termSw: "Kamati ya usimamizi",
          defEn: "The named group that approves, reviews and can pause a health AI tool.",
          defSw: "Kundi lenye majina linaloidhinisha, kupitia na kuweza kusimamisha zana ya AI ya afya.",
        },
        {
          termEn: "Purpose statement",
          termSw: "Tamko la kusudi",
          defEn: "One page: the decision supported, the accountable role, the pathway, the stop switch.",
          defSw: "Ukurasa mmoja: uamuzi unaosaidiwa, wajibu unaowajibika, njia, swichi ya kusimamisha.",
        },
        {
          termEn: "Stop switch",
          termSw: "Swichi ya kusimamisha",
          defEn: "A person and a procedure that can take the tool out of care the same day.",
          defSw: "Mtu na utaratibu unaoweza kuondoa zana kwenye huduma siku hiyo.",
        },
        {
          termEn: "Accountable clinician",
          termSw: "Mhudumu anayewajibika",
          defEn: "The human whose name sits on the decision the tool merely drafted or scored.",
          defSw: "Binadamu ambaye jina lake liko kwenye uamuzi ambao zana iliuandaa au kuupima tu.",
        },
      ]),
      note(
        "Worked example: a demo without a pause-holder",
        "Mfano: onyesho bila mtu wa kusimamisha",
        `A fictional county in Embu runs a two-week vendor demo of a deterioration score on a 40-bed ward. Nobody is named to pause it. On day nine, nurses notice the score treating missing oximetry as normal. There is no agenda item, no log, and the vendor contact is a marketing number.

Step 1. The night in-charge wants to switch the banners off. IT says only the vendor can. The vendor is closed.

Step 2. Two days later the county committee, hastily formed, writes the missing page: purpose (support, not discharge), accountable (consultant on call), pathway (ward escalation, not home), stop switch (medical superintendent plus IT, same day, local flag).

Step 3. They pause the demo until missing oximetry is treated as "unknown", not "reassuring". They do not publish a success rate.

Governance arrived late. The lesson is to write the page before the login.`,
        `Kaunti ya kubuni huko Embu inaendesha onyesho la wiki mbili la muuzaji wa alama ya kuzidiwa kwenye wodi yenye vitanda 40. Hakuna aliyepewa jina la kuisimamisha. Siku ya tisa, wauguzi wanaona alama inachukulia kukosa oksimetri kama kawaida. Hakuna ajenda, hakuna kumbukumbu, na anwani ya muuzaji ni namba ya masoko.

Hatua ya 1. Msimamizi wa usiku anataka kuzima mabango. IT inasema ni muuzaji tu anayeweza. Muuzaji amefungwa.

Hatua ya 2. Siku mbili baadaye kamati ya kaunti, iliyoundwa haraka, inaandika ukurasa uliokosekana: kusudi (msaada, si kuruhusu kwenda), anayewajibika (mshauri aliye zamu), njia (kupandisha kesi wodini, si nyumbani), swichi (msimamizi wa matibabu pamoja na IT, siku hiyo, bendera ya eneo).

Hatua ya 3. Wanasimamisha onyesho hadi kukosa oksimetri kuchukuliwe kama "hajulikani", si "faraja". Hawachapishi kiwango cha mafanikio.

Usimamizi ulifika umechelewa. Funzo ni kuandika ukurasa kabla ya kuingia.`
      ),
      scenario({
        titleEn: "Scenario: strategy slide as approval",
        titleSw: "Hali: slaidi ya mkakati kama idhini",
        situationEn:
          "A vendor tells the county assembly that because the National AI Strategy lists health as a priority, the county is already authorised to put their chatbot on CHP phones for diagnosis.",
        situationSw:
          "Muuzaji anaambia bunge la kaunti kwamba kwa sababu Mkakati wa Taifa wa AI unataja afya kama kipaumbele, kaunti tayari imeruhusiwa kuweka chatbot yao kwenye simu za CHP kwa utambuzi.",
        questionEn: "What should the health committee answer?",
        questionSw: "Kamati ya afya ijibu nini?",
        optionsEn: [
          "Agree; a national strategy is a licence to diagnose",
          "The strategy is a priority list, not a clinical licence; CHPs refer along MOH pathways; a committee purpose page and DPA duties still apply; no diagnosis by chatbot",
          "Agree only if the vendor quotes a 99% accuracy figure",
          "Transfer the decision to a public chatbot to save meeting time",
        ],
        optionsSw: [
          "Kubali; mkakati wa taifa ni leseni ya kutambua magonjwa",
          "Mkakati ni orodha ya vipaumbele, si leseni ya kitabibu; CHP hutoa rufaa kwenye njia za MOH; ukurasa wa kusudi wa kamati na wajibu wa DPA bado unatumika; hakuna utambuzi kwa chatbot",
          "Kubali tu muuzaji akinukuu namba ya usahihi ya 99%",
          "Hamisha uamuzi kwa chatbot ya umma kuokoa muda wa mkutano",
        ],
        correctIndex: 1,
        hintsEn: [
          "A strategy document does not examine patients or register a processor.",
          "Correct. Priority is not permission to replace CHP referral or invent diagnosis.",
          "Invented accuracy is not governance.",
          "A public bot cannot hold county accountability.",
        ],
        hintsSw: [
          "Hati ya mkakati haichunguzi wagonjwa wala kusajili msindikaji.",
          "Sahihi. Kipaumbele si ruhusa ya kuchukua nafasi ya rufaa ya CHP au kubuni utambuzi.",
          "Usahihi uliobuniwa si usimamizi.",
          "Bot ya umma haiwezi kubeba uwajibikaji wa kaunti.",
        ],
        explainEn:
          "National strategy sets direction. County governance, MOH pathways and the DPA still decide what may run.",
        explainSw:
          "Mkakati wa taifa unaweka mwelekeo. Usimamizi wa kaunti, njia za MOH na DPA bado vinaamua nini kiweze kuendeshwa.",
      }),
      quiz(
        "What is the minimum set for a county health-AI purpose page?",
        "Ni seti gani ya chini kabisa ya ukurasa wa kusudi wa AI ya afya ya kaunti?",
        [
          "A vendor logo and a launch date",
          "The decision supported, the accountable role, the MOH pathway it must not skip, and who can pause it",
          "A claim that the tool is a registered medical device",
          "AmeriAfriAI performance percentages",
        ],
        [
          "Nembo ya muuzaji na tarehe ya uzinduzi",
          "Uamuzi unaosaidiwa, wajibu unaowajibika, njia ya MOH isipaswi kuruka, na nani anaweza kuisimamisha",
          "Dai kwamba zana ni kifaa cha tiba kilichosajiliwa",
          "Asilimia za utendaji za AmeriAfriAI",
        ],
        1,
        "Purpose, accountability, pathway and pause. Device claims and invented pilot maths are out of scope here.",
        "Kusudi, uwajibikaji, njia na kusimamisha. Madai ya vifaa na hisabati ya majaribio iliyobuniwa viko nje ya wigo hapa."
      ),
      note(
        "Try it: name the committee",
        "Jaribu: taja kamati",
        `For a county you know, write seven seats around a table, each with a role not a celebrity name. Mark which seat holds the stop switch, which seat reads the DPA contract, and which seat represents CHPs.

If two seats are the same person in real life, write that risk down: concentration of power is a governance finding, not a convenience.`,
        `Kwa kaunti unayoijua, andika viti saba kuzunguka meza, kila kimoja chenye wajibu si jina la mtu maarufu. Tia alama kiti kipi kinashika swichi ya kusimamisha, kipi kinasoma mkataba wa DPA, na kipi kinawakilisha CHP.

Viti viwili vikiwa mtu yule yule maishani, andika hatari hiyo: mkusanyiko wa madaraka ni ugunduzi wa usimamizi, si urahisi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Strategy is direction. Committees, purpose pages and stop switches are control.
- No medical-device claims and no invented accuracy.
- Next: equity as a governance duty, not a slogan on the same page.`,
        `- Mkakati ni mwelekeo. Kamati, kurasa za kusudi na swichi za kusimamisha ni udhibiti.
- Hakuna madai ya vifaa vya tiba wala usahihi uliobuniwa.
- Ifuatayo: usawa kama wajibu wa usimamizi, si kauli kwenye ukurasa uleule.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u2
  {
    id: "hlt-a-u2",
    titleEn: "Equity as a design constraint",
    titleSw: "Usawa kama kikomo cha kubuni",
    cards: [
      note(
        "Who is found, who waits, who is in the training set",
        "Nani anapatikana, nani anasubiri, nani yuko kwenye seti ya mafunzo",
        `At advanced level, equity is a specification item, not a later apology. Intermediate Unit 7 showed how pooled sensitivity can hide a rural miss. Here you decide, before procurement, which slices must be reported and what happens if a slice is worse.

Typical slices for a Kenyan county: rural public versus town private or mission; sex; age band; language of the note (English, Kiswahili, other); CHP-referred versus walk-in; complete versus missing vitals. You do not need a published national disparity percentage. You need a contract clause: no slice, no go-live.

Imaging and language fail in patterned ways: cameras and lighting in a bright private OPD versus a dark rural room; English discharge summaries versus Kiswahili CHP notes. If the vendor cannot say how blanks are treated, assume blanks will be treated as normal — which punishes the facility that shares one pulse oximeter.

The governance response is operational as much as statistical: extra observation rounds, bilingual forms, different thresholds by site, human review that is actually staffed. A fairness slogan on a slide without those operations is decoration.`,
        `Katika kiwango cha juu, usawa ni kipengele cha maelezo, si radhi ya baadaye. Somo la 7 la kati lilionyesha jinsi unyeti wa pamoja unavyoweza kuficha kukosa kwa vijijini. Hapa unaamua, kabla ya ununuzi, vipande vipi lazima viripotiwe na nini kinatokea kipande kikiwa kibaya zaidi.

Vipande vya kawaida vya kaunti ya Kenya: umma wa vijijini dhidi ya kibinafsi au kimisheni mjini; jinsia; kundi la umri; lugha ya dokezo (Kiingereza, Kiswahili, nyingine); rufaa ya CHP dhidi ya kuja mwenyewe; dalili muhimu kamili dhidi ya zilizokosekana. Huhitaji asilimia ya taifa ya ukosefu wa usawa iliyochapishwa. Unahitaji kifungu cha mkataba: hakuna kipande, hakuna kuanza kazi.

Picha na lugha zinashindwa kwa njia zenye mfumo: kamera na mwanga katika OPD angavu ya kibinafsi dhidi ya chumba cheusi cha vijijini; muhtasari wa Kiingereza dhidi ya dokezo za CHP za Kiswahili. Muuzaji asipoweza kusema tupu zinachukuliwaje, chukulia tupu zitachukuliwa kama kawaida — jambo linaloadhibu kituo kinachoshiriki kipima oksijeni kimoja.

Jibu la usimamizi ni la operesheni kama lilivyo la takwimu: mizunguko ya ziada ya vipimo, fomu za lugha mbili, vikomo tofauti kwa kituo, ukaguzi wa binadamu ambao kweli una wafanyakazi. Kauli ya usawa kwenye slaidi bila operesheni hizo ni mapambo.`
      ),
      reveal([
        {
          termEn: "Slice gate",
          termSw: "Lango la kipande",
          defEn: "A go-live rule: the tool does not enter care until named slices are reported.",
          defSw: "Kanuni ya kuanza: zana haiingii huduma hadi vipande vilivyotajwa viripotiwe.",
        },
        {
          termEn: "Blank-as-normal",
          termSw: "Tupu-kama-kawaida",
          defEn: "When missing inputs are treated as reassuring. This harms under-equipped sites.",
          defSw: "Maingizo yaliyokosekana yanapochukuliwa kama faraja. Hii inadhuru vituo visivyo na vifaa vya kutosha.",
        },
        {
          termEn: "Site-specific threshold",
          termSw: "Kikomo cha kituo",
          defEn: "Different alert cut-offs where recording and case-mix differ, reviewed on a calendar.",
          defSw: "Vikomo tofauti vya tahadhari pale kurekodi na mchanganyiko wa visa vinapotofautiana, vinavyopitiwa kwa kalenda.",
        },
        {
          termEn: "Staffed review",
          termSw: "Ukaguzi wenye watu",
          defEn: "Human override time that exists on the roster, not only in the protocol PDF.",
          defSw: "Muda wa ubatilishaji wa binadamu ulioko kwenye ratiba, si kwenye PDF ya itifaki tu.",
        },
      ]),
      note(
        "Worked example: the missing oximeter slice",
        "Mfano: kipande cha kipima oksijeni kilichokosekana",
        `A fictional county hospital and a rural health centre share one vendor score. After a silent month the records officer brings counts, no names: town site, oximetry present on 92% of rows, 18 of 20 deteriorations flagged; rural site, oximetry present on 48% of rows, 11 of 20 flagged.

The committee does not invent a national "bias index". It writes three design changes: treat missing oximetry as unknown and raise urgency, fund a second sensor for the rural site, and keep a lower threshold there until the next quarterly slice review.

They also refuse the vendor's offer to "impute a normal value" for missing fields. Imputation would make the rural dashboard look complete while hiding the equipment gap.

Equity here was a purchase of a sensor plus a threshold, not a press statement.`,
        `Hospitali ya kaunti ya kubuni na kituo cha afya cha vijijini vinashiriki alama moja ya muuzaji. Baada ya mwezi kimya afisa wa rekodi analeta idadi, bila majina: kituo cha mji, oksimetri ipo kwenye 92% ya safu, 18 kati ya 20 waliozidiwa walionyeshwa; kituo cha vijijini, oksimetri ipo kwenye 48%, 11 kati ya 20 walionyeshwa.

Kamati haibuni "kielezo cha upendeleo" cha taifa. Inaandika mabadiliko matatu ya kubuni: chukulia kukosa oksimetri kama haijulikani na pandisha uharaka, fadhili kipima cha pili kwa kituo cha vijijini, na weka kikomo cha chini huko hadi mapitio ya kipande ya robo.

Pia wanakataa ofa ya muuzaji ya "kujazia thamani ya kawaida" kwa sehemu tupu. Kujazia kungelfanya dashibodi ya vijijini ionekane kamili huku ikificha pengo la vifaa.

Usawa hapa ulikuwa ununuzi wa kipima pamoja na kikomo, si taarifa kwa vyombo vya habari.`
      ),
      scenario({
        titleEn: "Scenario: one threshold for a tidy dashboard",
        titleSw: "Hali: kikomo kimoja kwa dashibodi nadhifu",
        situationEn:
          "The county ICT lead wants one alert threshold in every facility so the executive dashboard has a single colour. Rural overrides are already high because of missing vitals.",
        situationSw:
          "Kiongozi wa ICT wa kaunti anataka kikomo kimoja cha tahadhari katika kila kituo ili dashibodi ya mtendaji iwe na rangi moja. Ubatilishaji wa vijijini tayari ni wa juu kwa sababu ya dalili muhimu zilizokosekana.",
        questionEn: "What should the governance committee require?",
        questionSw: "Kamati ya usimamizi ihitaji nini?",
        optionsEn: [
          "One threshold, because executives cannot read more than one number",
          "Slice reports and site-specific thresholds with staffed review, even if the dashboard has more than one colour",
          "Turn rural sites off until their data looks like the private hospital",
          "Publish a 99% fairness score to close the item",
        ],
        optionsSw: [
          "Kikomo kimoja, kwa sababu watendaji hawawezi kusoma namba zaidi ya moja",
          "Ripoti za vipande na vikomo vya kituo pamoja na ukaguzi wenye watu, hata dashibodi ikiwa na rangi zaidi ya moja",
          "Zima vituo vya vijijini hadi data yao ionekane kama hospitali ya kibinafsi",
          "Chapisha alama ya usawa ya 99% kufunga ajenda",
        ],
        correctIndex: 1,
        hintsEn: [
          "A tidy colour that misses rural patients is an equity failure, not a UX win.",
          "Correct. Dashboards serve the committee. Patients do not owe the dashboard uniformity.",
          "Switching rural care off to make data pretty punishes the under-equipped.",
          "Invented fairness percentages are out of scope in this course.",
        ],
        hintsSw: [
          "Rangi nadhifu inayokosa wagonjwa wa vijijini ni kushindwa kwa usawa, si ushindi wa kiolesura.",
          "Sahihi. Dashibodi zinatumikia kamati. Wagonjwa hawana deni la uthabiti wa dashibodi.",
          "Kuzima huduma ya vijijini ili data iwe nadhifu kunawaadhibu wasio na vifaa.",
          "Asilimia za usawa zilizobuniwa ziko nje ya wigo katika kozi hii.",
        ],
        explainEn:
          "Equity is slice gates plus operations. Uniform dashboards are not a clinical standard.",
        explainSw:
          "Usawa ni milango ya vipande pamoja na operesheni. Dashibodi sawa si kiwango cha kitabibu.",
      }),
      quiz(
        "A vendor cannot explain how missing vital signs are treated. You should assume:",
        "Muuzaji hawezi kueleza dalili muhimu zilizokosekana zinachukuliwaje. Unapaswa kuchukulia:",
        [
          "Missing values will be handled fairly by default",
          "Blanks may be treated as normal, which will under-flag under-equipped sites, so this is a slice-gate failure",
          "Missing values prove the model is robust",
          "Kiswahili interfaces fix missing oximetry",
        ],
        [
          "Thamani zilizokosekana zitashughulikiwa kwa usawa kwa chaguo-msingi",
          "Tupu huenda zikachukuliwa kama kawaida, jambo litakalopunguza kuonyesha vituo visivyo na vifaa, kwa hiyo hili ni kushindwa kwa lango la kipande",
          "Thamani zilizokosekana zinathibitisha modeli ni imara",
          "Kiolesura cha Kiswahili kinarekebisha kukosa oksimetri",
        ],
        1,
        "Unknown handling of blanks is a design risk for rural sites. Language buttons do not fill a sensor gap.",
        "Kutokujua jinsi tupu zinavyoshughulikiwa ni hatari ya kubuni kwa vituo vya vijijini. Vitufe vya lugha havijazi pengo la kipima."
      ),
      note(
        "Try it: write the slice gate",
        "Jaribu: andika lango la kipande",
        `Draft a six-line contract clause for a county you know. Name five slices, say that go-live needs a table of counts (not a slogan), and say that missing-as-normal for vitals is not acceptable.

Keep it fictional as a template. No invented percentages.`,
        `Andaa kifungu cha mkataba cha mistari sita kwa kaunti unayoijua. Taja vipande vitano, sema kuanza kazi kunahitaji jedwali la idadi (si kauli), na sema tupu-kama-kawaida kwa dalili muhimu haikubaliki.

Iache kama kiolezo cha kubuni. Hakuna asilimia zilizobuniwa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Equity is a go-live gate: slices, blanks, staffing of review.
- Do not invent disparity statistics.
- Next: imaging support — flags for a radiologist or clinician, not a diagnosis and not a device claim.`,
        `- Usawa ni lango la kuanza: vipande, tupu, wafanyakazi wa ukaguzi.
- Usibuni takwimu za ukosefu wa usawa.
- Ifuatayo: msaada wa picha — alama kwa radiolojisti au mhudumu, si utambuzi wala dai la kifaa.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u3
  {
    id: "hlt-a-u3",
    titleEn: "Imaging support has limits",
    titleSw: "Msaada wa picha una mipaka",
    cards: [
      note(
        "A flag is not a read, and a read is not a device claim",
        "Bendera si usomaji, na usomaji si dai la kifaa",
        `Computer-aided reading of images — for example chest X-rays in TB programmes — can draw a box or a score for a human to review. That is support. The clinician or radiographer who can see the patient and the film still issues the report. This course does not claim any product is a medical device, and it does not invent sensitivity numbers.

Limits are where most harm lives. Training images from one machine, one hospital lighting, one age mix, will not automatically work on another. Portable machines, paediatric films, and images taken with a phone of a light-box are different data. External validation means testing on images from sites that were not in training, with the same four boxes you used in Intermediate: true and false positives and negatives, plus calibration of any score.

A "normal" flag on a poor-quality film is not reassurance. The protocol should say "unreadable, repeat or refer", not "AI says clear". Do not send the image plus a patient name to a public chatbot for a second look. Approved systems and named reviewers only.

Reported rural pilots that mention point-of-care reading, including AmeriAfriAI as described for rapid tests with offline analysis, remain pilots in this course: no performance figure is supplied or to be invented.`,
        `Usomaji wa picha kwa msaada wa kompyuta — kwa mfano X-ray ya kifua katika programu za TB — unaweza kuchora kisanduku au alama kwa binadamu kupitia. Huo ni msaada. Mhudumu au radiografa anayeweza kumwona mgonjwa na filamu bado anatoa ripoti. Kozi hii haidai bidhaa yoyote ni kifaa cha tiba, wala haibuni namba za unyeti.

Mipaka ndipo madhara mengi yapo. Picha za mafunzo kutoka mashine moja, mwanga mmoja wa hospitali, mchanganyiko mmoja wa umri, hazitafanya kazi kiotomatiki kwenye nyingine. Mashine za kubebeka, filamu za watoto, na picha za simu ya light-box ni data tofauti. Uthibitishaji wa nje unamaanisha kupima kwenye picha kutoka vituo ambavyo havikuwa kwenye mafunzo, kwa visanduku vinne ulivyotumia katika Kiwango cha kati: chanya na hasi za kweli na bandia, pamoja na urekebishaji wa alama yoyote.

Bendera ya "kawaida" kwenye filamu duni si faraja. Itifaki inapaswa kusema "haisomeki, rudia au rufaa", si "AI inasema safi". Usitume picha pamoja na jina la mgonjwa kwenye chatbot ya umma kwa mtazamo wa pili. Mifumo iliyoidhinishwa na wapitiaji wenye majina tu.

Majaribio yaliyoripotiwa ya vijijini yanayotaja usomaji mahali pa huduma, ikiwemo AmeriAfriAI kama ilivyoelezwa kwa vipimo vya haraka na uchambuzi nje ya mtandao, yanabaki majaribio katika kozi hii: hakuna namba ya utendaji inayotolewa wala kubuniwa.`
      ),
      reveal([
        {
          termEn: "Computer-aided reading",
          termSw: "Usomaji kwa msaada wa kompyuta",
          defEn: "Software that flags regions or scores an image for a trained human to review.",
          defSw: "Programu inayoonyesha maeneo au kutoa alama kwenye picha ili binadamu aliyefunzwa apitie.",
        },
        {
          termEn: "External validation",
          termSw: "Uthibitishaji wa nje",
          defEn: "Testing on images from places and machines that were not in the training set.",
          defSw: "Kupima kwenye picha kutoka mahali na mashine ambazo hazikuwa kwenye seti ya mafunzo.",
        },
        {
          termEn: "Unreadable",
          termSw: "Haisomeki",
          defEn: "A quality failure. The honest output is repeat or refer, not 'normal'.",
          defSw: "Kushindwa kwa ubora. Tokeo la uaminifu ni kurudia au rufaa, si 'kawaida'.",
        },
        {
          termEn: "Human report",
          termSw: "Ripoti ya binadamu",
          defEn: "The signed clinical reading. The flag is not a substitute for it.",
          defSw: "Usomaji wa kitabibu uliosainiwa. Bendera si mbadala wake.",
        },
      ]),
      note(
        "Worked example: the phone photo of a film",
        "Mfano: picha ya simu ya filamu",
        `A fictional health centre in Turkana has no digitiser. A clinician photographs a chest film on a viewing box with glare, pastes it into a public chatbot, and asks "TB or not, name included for the file".

Count the failures: glare and crop are a new image domain; the public bot is not an approved reader; the name is an identifier leak; the question asks for a diagnosis the bot cannot examine.

The committee's rule is written the same afternoon: no phone-to-public-bot imaging; unreadable films go to the county hospital with the patient or the film; any future computer-aided tool must be validated on this machine's images, with unreadable as its own class, and a named radiographer or clinician still signs.

They do not add a sentence claiming the future tool is a registered device. Evaluation and pathway first.`,
        `Kituo cha afya cha kubuni huko Turkana hakina digitiser. Mhudumu anapiga picha ya filamu ya kifua kwenye sanduku la kuona lenye mwanga mkali, anabandika kwenye chatbot ya umma, na anauliza "TB au hapana, jina limejumuishwa kwa faili".

Hesabu kushindwa: mwanga na kukata ni kikoa kipya cha picha; bot ya umma si msomaji aliyeruhusiwa; jina ni uvujaji wa kitambulishi; swali linaomba utambuzi ambao bot haiwezi kuchunguza.

Kanuni ya kamati inaandikwa mchana uleule: hakuna picha kutoka simu hadi bot ya umma; filamu zisizosomeka ziende hospitali ya kaunti na mgonjwa au filamu; zana yoyote ya baadaye ya msaada wa kompyuta lazima ithibitishwe kwenye picha za mashine hii, haisomeki ikiwa darasa lake, na radiografa au mhudumu mwenye jina bado anasaini.

Hawaongezi sentensi inayodai zana ya baadaye ni kifaa kilichosajiliwa. Tathmini na njia kwanza.`
      ),
      scenario({
        titleEn: "Scenario: 'normal, no need to wait for the radiologist'",
        titleSw: "Hali: 'kawaida, hakuna haja ya kusubiri radiolojisti'",
        situationEn:
          "A weekend officer wants to discharge a patient because the imaging helper showed no box on a slightly rotated film. The radiologist returns Monday.",
        situationSw:
          "Afisa wa wikendi anataka kumruhusu mgonjwa aende kwa sababu msaidizi wa picha hakuonyesha kisanduku kwenye filamu iliyozungushwa kidogo. Radiolojisti anarudi Jumatatu.",
        questionEn: "What is the sound rule?",
        questionSw: "Kanuni yenye busara ni ipi?",
        optionsEn: [
          "Discharge; no box means no disease",
          "Do not treat an absent flag on a poor or rotated film as clearance; follow the clinical pathway and the human report",
          "Paste the film into a second public bot to break the tie",
          "Claim the helper is a medical device so discharge is legally safer",
        ],
        optionsSw: [
          "Ruhusu aende; hakuna kisanduku kunamaanisha hakuna ugonjwa",
          "Usichukulie kukosa bendera kwenye filamu duni au iliyozungushwa kama kibali; fuata njia ya kitabibu na ripoti ya binadamu",
          "Bandika filamu kwenye bot ya pili ya umma kutatua fungo",
          "Dai msaidizi ni kifaa cha tiba ili kuruhusu iwe salama kisheria",
        ],
        correctIndex: 1,
        hintsEn: [
          "Absence of a box is not a negative exam, especially on a rotated film.",
          "Correct. Support tools do not close a case. Quality failure means wait or refer.",
          "A second public bot adds a leak and still cannot examine the patient.",
          "This course does not authorise device claims as a discharge argument.",
        ],
        hintsSw: [
          "Kukosa kisanduku si kipimo hasi, hasa kwenye filamu iliyozungushwa.",
          "Sahihi. Zana za msaada hazifungi kisa. Kushindwa kwa ubora kunamaanisha subiri au rufaa.",
          "Bot ya pili ya umma inaongeza uvujaji na bado haiwezi kumchunguza mgonjwa.",
          "Kozi hii hairuhusu madai ya kifaa kama hoja ya kuruhusu kwenda.",
        ],
        explainEn:
          "Imaging AI flags. Humans report. Unreadable or off-domain images are not 'normal'.",
        explainSw:
          "AI ya picha inaweka bendera. Binadamu wanaripoti. Picha zisizosomeka au nje ya kikoa si 'kawaida'.",
      }),
      quiz(
        "External validation for an imaging helper should include:",
        "Uthibitishaji wa nje kwa msaidizi wa picha unapaswa kujumuisha:",
        [
          "Only the vendor's training hospital, because that is where the model is best",
          "Images from local machines and populations not in training, with unreadable as a class, and a human still reporting",
          "A public chatbot's opinion of ten screenshots",
          "A single invented sensitivity of 99%",
        ],
        [
          "Hospitali ya mafunzo ya muuzaji tu, kwa sababu ndipo modeli ilipo bora",
          "Picha kutoka mashine na watu wa eneo wasiokuwa kwenye mafunzo, haisomeki ikiwa darasa, na binadamu bado anaripoti",
          "Maoni ya chatbot ya umma kuhusu skrini kumi",
          "Unyeti mmoja uliobuniwa wa 99%",
        ],
        1,
        "Local, off-training images plus an unreadable class. Invented percentages and public bots do not validate.",
        "Picha za eneo nje ya mafunzo pamoja na darasa la haisomeki. Asilimia zilizobuniwa na bot za umma hazithibitishi."
      ),
      note(
        "Try it: quality states",
        "Jaribu: hali za ubora",
        `List four imaging quality states you would require a helper to output: readable, rotated, too dark, paediatric (or other local mix). Next to each, write the human action: report, repeat, refer.

If a vendor can only output "TB / not TB" with no quality state, they have not met this unit.`,
        `Orodhesha hali nne za ubora wa picha ungehitaji msaidizi azitoe: inasomeka, imezungushwa, nyeusi mno, ya mtoto (au mchanganyiko mwingine wa eneo). Kando ya kila moja, andika hatua ya binadamu: ripoti, rudia, rufaa.

Muuzaji akiweza kutoa "TB / si TB" tu bila hali ya ubora, hajakutana na somo hili.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Flags support a human report. They are not clearance and not a device claim.
- Unreadable beats a false normal.
- Next: evaluating a vendor for a county hospital without brochure maths.`,
        `- Bendera zinaunga mkono ripoti ya binadamu. Si kibali wala dai la kifaa.
- Haisomeki inashinda kawaida ya uongo.
- Ifuatayo: kutathmini muuzaji kwa hospitali ya kaunti bila hisabati ya kijitabu.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u4
  {
    id: "hlt-a-u4",
    titleEn: "Evaluating a vendor for a county hospital",
    titleSw: "Kutathmini muuzaji kwa hospitali ya kaunti",
    cards: [
      note(
        "Questions that survive a demo",
        "Maswali yanayostahimili onyesho",
        `A county hospital evaluation is a written pack, not a handshake after a glowing screen. You already have the measurement language from Intermediate: four boxes, base rates, calibration, slices, override logs. Advanced evaluation adds: who is the processor under the DPA, where data lives, whether the tool works when the wide-area link dies, how updates are shipped, who trains staff, what a year costs in KES including connectivity, and the stop switch.

Refuse a single accuracy figure. Ask for the study setting and whether it looks like your OPD. Ask what happens to names, SHA numbers and HIV status — they must not flow to a public model. Ask for a failure mode: unreadable images, missing vitals, Kiswahili notes.

Reported pilots (AmeriAfriAI, Zendawa) are not substitutes for your pack. They may be named as reported. They may not be given invented percentages to close the tender.

Do not ask vendors how to attack, jailbreak or penetrate another hospital's system. Evaluation is about your contract, your pathway and your patients.`,
        `Tathmini ya hospitali ya kaunti ni faili lililoandikwa, si salamu baada ya skrini inayong'aa. Tayari una lugha ya kipimo kutoka Kiwango cha kati: visanduku vinne, viwango vya msingi, urekebishaji, vipande, kumbukumbu za ubatilishaji. Tathmini ya juu inaongeza: nani ni msindikaji chini ya DPA, data inaishi wapi, kama zana inafanya kazi kiungo cha eneo kikiwa kimekufa, sasisho zinatumwaje, nani anawafunza wafanyakazi, mwaka unagharimu kiasi gani kwa KES pamoja na muunganisho, na swichi ya kusimamisha.

Kataa namba moja ya usahihi. Uliza mazingira ya utafiti na kama yanafanana na OPD yako. Uliza nini kinatokea kwa majina, namba za SHA na hali ya VVU — visipitishwe kwenye modeli ya umma. Uliza hali ya kushindwa: picha zisizosomeka, dalili muhimu zilizokosekana, dokezo za Kiswahili.

Majaribio yaliyoripotiwa (AmeriAfriAI, Zendawa) si mbadala wa faili lako. Yanaweza kutajwa kama yaliyoripotiwa. Yasipewe asilimia zilizobuniwa kufunga zabuni.

Usiwaulize wauzaji jinsi ya kushambulia, kuvunja ulinzi au kupenya mfumo wa hospitali nyingine. Tathmini inahusu mkataba wako, njia yako na wagonjwa wako.`
      ),
      reveal([
        {
          termEn: "Evaluation pack",
          termSw: "Faili la tathmini",
          defEn: "The written questions, sample data rules, cost sheet and pathway map used to compare vendors.",
          defSw: "Maswali yaliyoandikwa, kanuni za data ya sampuli, karatasi ya gharama na ramani ya njia zinazotumika kulinganisha wauzaji.",
        },
        {
          termEn: "Processor contract",
          termSw: "Mkataba wa msindikaji",
          defEn: "The DPA-facing agreement on instructions, storage, subprocessors and deletion.",
          defSw: "Mkataba unaoelekea DPA kuhusu maagizo, uhifadhi, wasindikaji wadogo na kufuta.",
        },
        {
          termEn: "Total cost",
          termSw: "Gharama kamili",
          defEn: "KES for licences, devices, connectivity, training and staff time, not only the sticker price.",
          defSw: "KES za leseni, vifaa, muunganisho, mafunzo na muda wa wafanyakazi, si bei ya stika tu.",
        },
        {
          termEn: "Walk-away clause",
          termSw: "Kifungu cha kuondoka",
          defEn: "How you export your data and switch the tool off without paying a hostage fee.",
          defSw: "Jinsi unavyotoa data yako na kuzima zana bila kulipa ada ya mateka.",
        },
      ]),
      note(
        "Worked example: scoring three bids without a magic number",
        "Mfano: kuweka alama zabuni tatu bila namba ya uchawi",
        `A fictional county hospital in Nakuru scores three bids on a sheet of 12 lines: pathway fit, four-box evidence from a similar setting, calibration plan, slice gates, override log, DPA hosting, offline behaviour, Kiswahili notes, training days, year-one KES, stop switch, walk-away.

Bid A has a glowing demo and one "95% accurate" line, no slice table, data hosted without a processor clause. Score: fail on DPA and measurement.

Bid B is quieter: offers to run a 6-week silent period logging scores against outcomes on this ward, names a Kenyan hosting option, includes a pause procedure. No device claim. Score: proceed to silent period.

Bid C names Zendawa and AmeriAfriAI as if those pilots were this hospital's results. Score: fail for borrowed glory.

The committee minutes record the sheet, not a feeling. Tender fairness is part of governance.`,
        `Hospitali ya kaunti ya kubuni huko Nakuru inaweka alama zabuni tatu kwenye karatasi ya mistari 12: kufaa kwa njia, ushahidi wa visanduku vinne kutoka mazingira yanayofanana, mpango wa urekebishaji, milango ya vipande, kumbukumbu ya ubatilishaji, uhifadhi wa DPA, tabia nje ya mtandao, dokezo za Kiswahili, siku za mafunzo, KES za mwaka wa kwanza, swichi ya kusimamisha, kuondoka.

Zabuni A ina onyesho linalong'aa na mstari mmoja "sahihi kwa 95%", hakuna jedwali la vipande, data inahifadhiwa bila kifungu cha msindikaji. Alama: kushindwa kwa DPA na kipimo.

Zabuni B ni tulivu: inajitolea kuendesha kipindi cha wiki 6 kimya ikirekodi alama dhidi ya matokeo kwenye wodi hii, inataja chaguo la uhifadhi nchini Kenya, inajumuisha utaratibu wa kusimamisha. Hakuna dai la kifaa. Alama: endelea na kipindi kimya.

Zabuni C inataja Zendawa na AmeriAfriAI kama majaribio hayo yalikuwa matokeo ya hospitali hii. Alama: kushindwa kwa utukufu wa kukopa.

Kumbukumbu za kamati zinarekodi karatasi, si hisia. Usawa wa zabuni ni sehemu ya usimamizi.`
      ),
      scenario({
        titleEn: "Scenario: 'sign before the financial year ends'",
        titleSw: "Hali: 'saini kabla mwaka wa fedha haujaisha'",
        situationEn:
          "Procurement says the budget will lapse in ten days. The preferred vendor still has not answered where identifiers are stored or how to pause the tool.",
        situationSw:
          "Ununuzi unasema bajeti itaisha kwa siku kumi. Muuzaji anayependekezwa bado hajajibu vitambulishi vinahifadhiwa wapi wala jinsi ya kusimamisha zana.",
        questionEn: "What should the committee do?",
        questionSw: "Kamati ifanye nini?",
        optionsEn: [
          "Sign; a lapsed budget is worse than an unanswered hosting question",
          "Do not sign; hosting, pause and pathway answers are go-live gates, and a lapsed line is not a clinical reason",
          "Sign and paste a sample of real SHA numbers to 'test later'",
          "Ask the vendor for a jailbreak demonstration to prove security",
        ],
        optionsSw: [
          "Saini; bajeti iliyoisha ni baya kuliko swali la uhifadhi lisilojibiwa",
          "Usisaini; majibu ya uhifadhi, kusimamisha na njia ni milango ya kuanza, na mstari wa bajeti ulioisha si sababu ya kitabibu",
          "Saini na ubandike sampuli ya namba halisi za SHA 'kujaribu baadaye'",
          "Mwombe muuzaji onyesho la kuvunja ulinzi kuthibitisha usalama",
        ],
        correctIndex: 1,
        hintsEn: [
          "Money calendars do not create a lawful processor or a stop switch.",
          "Correct. Unanswered hosting and pause are enough to wait. Real identifiers are not test toys.",
          "SHA numbers in a rush test are a DPA incident waiting to happen.",
          "This course does not include exploit or attack demonstrations.",
        ],
        hintsSw: [
          "Kalenda za pesa hazizuii msindikaji halali wala swichi ya kusimamisha.",
          "Sahihi. Uhifadhi na kusimamisha visivyojibiwa vinatosha kusubiri. Vitambulishi halisi si vitu vya kuchezea majaribio.",
          "Namba za SHA katika jaribio la haraka ni tukio la DPA linalosubiri kutokea.",
          "Kozi hii haijumuishi maonyesho ya exploit au mashambulizi.",
        ],
        explainEn:
          "Budget deadlines are not a DPA basis and not a reason to skip pause procedures. Security evaluation is not an attack demo.",
        explainSw:
          "Tarehe za mwisho za bajeti si msingi wa DPA wala sababu ya kuruka taratibu za kusimamisha. Tathmini ya usalama si onyesho la mashambulizi.",
      }),
      quiz(
        "Which line belongs in a county hospital vendor score sheet?",
        "Ni mstari upi unaofaa kwenye karatasi ya alama ya muuzaji wa hospitali ya kaunti?",
        [
          "How closely the demo resembled a science-fiction film",
          "Four-box evidence from a similar setting, DPA hosting, offline behaviour, year-one KES, stop switch",
          "Borrowed AmeriAfriAI percentages",
          "Willingness to diagnose without a clinician",
        ],
        [
          "Jinsi onyesho lilivyofanana na filamu ya sayansi",
          "Ushahidi wa visanduku vinne kutoka mazingira yanayofanana, uhifadhi wa DPA, tabia nje ya mtandao, KES za mwaka wa kwanza, swichi ya kusimamisha",
          "Asilimia za AmeriAfriAI zilizokopwa",
          "Nia ya kutambua ugonjwa bila mhudumu",
        ],
        1,
        "Measurement, law, operations and cost. Cinema, borrowed pilots and diagnosis-without-clinician fail the sheet.",
        "Kipimo, sheria, operesheni na gharama. Sinema, majaribio yaliyokopwa na utambuzi-bila-mhudumu vinashindwa kwenye karatasi."
      ),
      note(
        "Try it: twelve-line sheet",
        "Jaribu: karatasi ya mistari kumi na miwili",
        `Copy the 12 lines from the worked example onto paper for a hospital you know. Mark three lines you would refuse to leave blank even if the financial year were ending.

That refusal list is the start of your evaluation policy.`,
        `Nakili mistari 12 kutoka mfano kwenye karatasi kwa hospitali unayoijua. Tia alama mistari mitatu usingekubali kuacha tupu hata mwaka wa fedha ukiwa unaisha.

Orodha hiyo ya kukataa ndiyo mwanzo wa sera yako ya tathmini.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Score vendors on pathway, measurement, DPA, cost and pause — not demos.
- Do not invent or borrow pilot percentages.
- Next: offline kits as a concept — what must work when the link is dead.`,
        `- Weka alama wauzaji kwa njia, kipimo, DPA, gharama na kusimamisha — si maonyesho.
- Usibuni wala usikope asilimia za majaribio.
- Ifuatayo: vifaa nje ya mtandao kama dhana — nini lazima kifanye kazi kiungo kikiwa kimekufa.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u5
  {
    id: "hlt-a-u5",
    titleEn: "Offline kits, conceptually",
    titleSw: "Vifaa nje ya mtandao, kama dhana",
    cards: [
      note(
        "Care cannot wait for a bar of signal",
        "Huduma haiwezi kusubiri alama ya mtandao",
        `An offline kit, in this course, is a design idea, not a shopping list or a medical device. It means: the CHP or ward can still record, still see the last agreed protocol, and still refer, when the wide-area network is down. Sync happens later, into an approved system, without dumping names into a public chatbot as a workaround.

Conceptually you separate three stores: (1) the on-device forms and last-known protocol, (2) a queue of records waiting to sync, (3) the facility or county server. Power cuts, 2G, and shared phones are the Kenyan default, not an edge case.

What must not go offline-uncontrolled: a public language model that needs the internet and stores prompts; automatic orders to a supplier with no pharmacist; imaging "second opinions" via screenshots.

Updates to protocols should travel with a supervised app release, not a random file on WhatsApp. When sync returns, duplicates and conflict (two edits to the same household) need a human rule: the CHP supervisor decides, the model does not.

This unit will not tell you how to bypass security, intercept traffic, or attack a server. Offline is a care requirement, not an exploit topic.`,
        `Kifaa nje ya mtandao, katika kozi hii, ni wazo la kubuni, si orodha ya ununuzi wala kifaa cha tiba. Kinamaanisha: CHP au wodi bado inaweza kurekodi, bado kuona itifaki ya mwisho iliyokubaliwa, na bado kutoa rufaa, mtandao wa eneo ukiwa umezimwa. Usawazishaji unafanyika baadaye, kwenye mfumo ulioidhinishwa, bila kumpa majina chatbot ya umma kama njia ya mkato.

Kwa dhana unatenganisha hifadhi tatu: (1) fomu kwenye kifaa na itifaki ya mwisho iliyojulikana, (2) foleni ya rekodi zinazosubiri kusawazishwa, (3) seva ya kituo au kaunti. Kukatika kwa umeme, 2G, na simu zinazoshirikiwa ndiyo kawaida ya Kenya, si kisa cha pembeni.

Kisichopaswa kwenda nje ya mtandao bila udhibiti: modeli ya lugha ya umma inayohitaji intaneti na kuhifadhi maagizo; maagizo kiotomatiki kwa msambazaji bila mfamasia; "maoni ya pili" ya picha kupitia skrini.

Sasisho za itifaki zipite na toleo la programu linalosimamiwa, si faili nasibu kwenye WhatsApp. Usawazishaji unaporudi, rudufu na mgongano (hariri mbili za kaya ileile) zinahitaji kanuni ya binadamu: msimamizi wa CHP anaamua, modeli haiamui.

Somo hili halitakuambia jinsi ya kupita ulinzi, kukatiza mawasiliano, au kushambulia seva. Nje ya mtandao ni hitaji la huduma, si mada ya exploit.`
      ),
      reveal([
        {
          termEn: "Sync queue",
          termSw: "Foleni ya kusawazisha",
          defEn: "Records stored on the device until a safe connection to the approved server exists.",
          defSw: "Rekodi zilizohifadhiwa kwenye kifaa hadi muunganisho salama kwa seva iliyoidhinishwa upo.",
        },
        {
          termEn: "Last-known protocol",
          termSw: "Itifaki ya mwisho iliyojulikana",
          defEn: "The MOH or county guidance cached on the device, with a visible date.",
          defSw: "Mwongozo wa MOH au kaunti uliohifadhiwa kwenye kifaa, wenye tarehe inayoonekana.",
        },
        {
          termEn: "Conflict rule",
          termSw: "Kanuni ya mgongano",
          defEn: "Who wins if two offline edits of the same household both sync: a named supervisor, not the model.",
          defSw: "Nani anashinda hariri mbili nje ya mtandao za kaya ileile zikisawazishwa: msimamizi mwenye jina, si modeli.",
        },
        {
          termEn: "Supervised update",
          termSw: "Sasisho linalosimamiwa",
          defEn: "Protocol and model files that arrive through the official app channel, not a chat attachment.",
          defSw: "Faili za itifaki na modeli zinazofika kupitia kituo rasmi cha programu, si kiambatisho cha gumzo.",
        },
      ]),
      note(
        "Worked example: the outreach day without bars",
        "Mfano: siku ya ufikiaji bila alama za mtandao",
        `A fictional CHP team in Marsabit runs an outreach 40 km from the health centre. Signal dies after the first ridge.

Step 1. Their kit, conceptually: paper backup plus a phone form that still opens, showing last week's immunisation list as counts by village, not a spreadsheet of names emailed to a personal account.

Step 2. They record today's visits locally. Danger signs still go down the pathway: escort, 719 if needed. They do not wait to "ask the cloud".

Step 3. That evening at the centre, sync runs into the approved system. Two CHPs recorded the same household. The supervisor merges using the conflict rule. Nobody pastes the queue into a public bot "to clean it".

Step 4. A vendor later offers an always-online-only chatbot. The committee marks the bid as unfit for this catchment.`,
        `Timu ya kubuni ya CHP huko Marsabit inaendesha ufikiaji kilomita 40 kutoka kituo cha afya. Mtandao unakufa baada ya ukingo wa kwanza.

Hatua ya 1. Kifaa chao, kwa dhana: nakala ya karatasi pamoja na fomu ya simu ambayo bado inafunguka, inayoonyesha orodha ya chanjo ya wiki iliyopita kama idadi kwa kijiji, si jedwali la majina lililotumwa kwa akaunti binafsi.

Hatua ya 2. Wanarekodi ziara za leo kwenye kifaa. Dalili za hatari bado zinaenda kwenye njia: kusindikiza, 719 ikihitajika. Hawasubiri "kuuliza wingu".

Hatua ya 3. Jioni kituoni, usawazishaji unaingia kwenye mfumo ulioidhinishwa. CHP wawili walirekodi kaya ileile. Msimamizi anaunganisha kwa kanuni ya mgongano. Hakuna anayebandika foleni kwenye bot ya umma "kuisafisha".

Hatua ya 4. Muuzaji baadaye anatoa chatbot ya mtandaoni-daima tu. Kamati inaweka zabuni kama isiyofaa kwa eneo hili.`
      ),
      scenario({
        titleEn: "Scenario: WhatsApp the protocol PDF",
        titleSw: "Hali: tuma PDF ya itifaki kwa WhatsApp",
        situationEn:
          "When the app store is blocked, a well-meaning officer wants to send the new IMCI-style danger-sign file to 80 CHP phones as a WhatsApp attachment, including a worksheet with last month's names.",
        situationSw:
          "Duka la programu linapozuiwa, afisa mwenye nia njema anataka kutuma faili mpya ya dalili za hatari kwa simu 80 za CHP kama kiambatisho cha WhatsApp, pamoja na jedwali lenye majina ya mwezi uliopita.",
        questionEn: "What should happen?",
        questionSw: "Nini kifanyike?",
        optionsEn: [
          "Send it; offline care justifies any channel",
          "Do not send named worksheets on WhatsApp; use paper or a supervised update without identifiers, and keep the protocol date visible",
          "Paste the names into a public chatbot to strip them, then forward",
          "Ask CHPs to jailbreak phones so the official store is not needed",
        ],
        optionsSw: [
          "Tuma; huduma nje ya mtandao inahalalisha kituo chochote",
          "Usitume jedwali zenye majina kwenye WhatsApp; tumia karatasi au sasisho linalosimamiwa bila vitambulishi, na weka tarehe ya itifaki ionekane",
          "Bandika majina kwenye chatbot ya umma kuyafuta, kisha tuma mbele",
          "Waombe CHP wavunje ulinzi wa simu ili duka rasmi lisihitajike",
        ],
        correctIndex: 1,
        hintsEn: [
          "Offline need is real. WhatsApp-plus-names is still a leak.",
          "Correct. Protocol can move on paper or official channels. Identifiers cannot hitch a ride.",
          "A public bot is not your redaction officer.",
          "This course does not include bypassing device security.",
        ],
        hintsSw: [
          "Hitaji nje ya mtandao ni halisi. WhatsApp-pamoja-na-majina bado ni uvujaji.",
          "Sahihi. Itifaki inaweza kusafiri kwa karatasi au vituo rasmi. Vitambulishi haviwezi kupanda lift.",
          "Bot ya umma si afisa wako wa kufuta vitambulishi.",
          "Kozi hii haijumuishi kupita ulinzi wa kifaa.",
        ],
        explainEn:
          "Offline design uses approved queues and paper. It does not use public bots, named chat files, or security bypass.",
        explainSw:
          "Kubuni nje ya mtandao kunatumia foleni zilizoidhinishwa na karatasi. Hakutumii bot za umma, faili za gumzo zenye majina, wala kupita ulinzi.",
      }),
      quiz(
        "What is the honest job of an on-device sync queue?",
        "Kazi ya uaminifu ya foleni ya kusawazisha kwenye kifaa ni ipi?",
        [
          "To send prompts to a public chatbot until signal returns",
          "To hold records until they can enter the approved server, with a human conflict rule",
          "To auto-order medicines without a pharmacist",
          "To store HIV status in an unnamed cloud folder",
        ],
        [
          "Kutuma maagizo kwa chatbot ya umma hadi mtandao urudi",
          "Kushikilia rekodi hadi ziweze kuingia seva iliyoidhinishwa, pamoja na kanuni ya mgongano ya binadamu",
          "Kuagiza dawa kiotomatiki bila mfamasia",
          "Kuhifadhi hali ya VVU kwenye folda ya wingu isiyo na jina",
        ],
        1,
        "Queues bridge a dead link to an approved system. They are not a licence for public models, auto-orders or stray clouds.",
        "Foleni zinavuka kiungo kilichokufa hadi mfumo ulioidhinishwa. Si leseni ya modeli za umma, maagizo kiotomatiki wala mawingu yaliyopotea."
      ),
      note(
        "Try it: three stores on one page",
        "Jaribu: hifadhi tatu kwenye ukurasa mmoja",
        `Draw three boxes: device, queue, server. Write what each may hold (forms, counts, identified records) and what each must not hold (public-bot prompts, unnamed clouds).

Add a fourth box: paper. If you cannot fill the paper box, your offline kit is not serious yet.`,
        `Chora visanduku vitatu: kifaa, foleni, seva. Andika kila kimoja kinaweza kushikilia nini (fomu, idadi, rekodi zenye vitambulishi) na kile kisichopaswa kushikilia (maagizo ya bot ya umma, mawingu yasiyo na jina).

Ongeza kisanduku cha nne: karatasi. Huwezi ukikijaza kisanduku cha karatasi, kifaa chako nje ya mtandao bado si cha dhati.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Offline is a care requirement: device, queue, server, paper.
- No public-bot workaround, no attack content.
- Next: consent architecture when tools process sensitive health data.`,
        `- Nje ya mtandao ni hitaji la huduma: kifaa, foleni, seva, karatasi.
- Hakuna njia ya mkato ya bot ya umma, hakuna maudhui ya mashambulizi.
- Ifuatayo: usanifu wa ridhaa zana zinaposindika data nyeti za afya.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u6
  {
    id: "hlt-a-u6",
    titleEn: "Consent architecture for health tools",
    titleSw: "Usanifu wa ridhaa kwa zana za afya",
    cards: [
      note(
        "Separate care, optional extras, and training",
        "Tenganisha huduma, nyongeza za hiari, na mafunzo",
        `Consent architecture is how your screens, contracts and refusals match the Data Protection Act. Intermediate Unit 11 introduced DPIA and purpose limitation. Here you design the stack.

Layer 1: care records. Often the lawful basis is providing health services, with confidentiality under the Health Act. Layer 2: operational quality, such as override logs without extra identifiers. Layer 3: any training of a vendor model. Layer 3 is optional, off by default, explained in Kiswahili and English, and must not block malaria treatment if refused.

Architecture choices: collect the minimum fields; keep HIV status and IDs in the approved system only; never send prompts to a public chatbot; name processors; say whether there is cross-border transfer; give a path to the ODPC.

Children's data needs extra care. A CHP tick on a household phone is not automatically parental consent for a vendor's global model.

Do not use a public bot to generate a patient's "consent" with their file attached. Draft notices in general language; a person authorised by the facility signs them off.`,
        `Usanifu wa ridhaa ni jinsi skrini, mikataba na kukataa kwako kunavyolingana na Sheria ya Ulinzi wa Data. Somo la 11 la kati lilileta DPIA na kikomo cha kusudi. Hapa unabuni tabaka.

Tabaka 1: rekodi za huduma. Mara nyingi msingi halali ni kutoa huduma za afya, pamoja na usiri chini ya Sheria ya Afya. Tabaka 2: ubora wa operesheni, kama kumbukumbu za ubatilishaji bila vitambulishi vya ziada. Tabaka 3: mafunzo yoyote ya modeli ya muuzaji. Tabaka 3 ni la hiari, limezimwa kwa chaguo-msingi, linaelezwa kwa Kiswahili na Kiingereza, na lisizuie tiba ya malaria likikataliwa.

Chaguzi za usanifu: kusanya sehemu chache; weka hali ya VVU na vitambulisho katika mfumo ulioidhinishwa tu; usitume maagizo kwa chatbot ya umma; taja wasindikaji; sema kama kuna uhamisho kuvuka mpaka; toa njia ya ODPC.

Data za watoto zinahitaji uangalifu zaidi. Tiki ya CHP kwenye simu ya kaya si kiotomatiki ridhaa ya mzazi kwa modeli ya kimataifa ya muuzaji.

Usitumie bot ya umma kutengeneza "ridhaa" ya mgonjwa faili yake ikiwa imeambatishwa. Andaa taarifa kwa lugha ya jumla; mtu aliyeidhinishwa na kituo anazisaini.`
      ),
      reveal([
        {
          termEn: "Layered purpose",
          termSw: "Kusudi lenye tabaka",
          defEn: "Care, operations and model-training are three purposes, not one tick.",
          defSw: "Huduma, operesheni na kufunza modeli ni madhumuni matatu, si tiki moja.",
        },
        {
          termEn: "Default off",
          termSw: "Zimwa kwa chaguo-msingi",
          defEn: "Optional processing starts unchecked. Silence is not a yes.",
          defSw: "Usindikaji wa hiari unaanza bila tiki. Kimya si ndiyo.",
        },
        {
          termEn: "Cross-border transfer",
          termSw: "Uhamisho kuvuka mpaka",
          defEn: "Data leaving Kenya. It must be disclosed and given a lawful mechanism.",
          defSw: "Data inayotoka Kenya. Lazima ielezwe na ipewe utaratibu halali.",
        },
        {
          termEn: "Refusal without penalty",
          termSw: "Kukataa bila adhabu",
          defEn: "Saying no to model-training still gets the same clinical pathway.",
          defSw: "Kusema hapana kwa kufunza modeli bado kunapata njia ileile ya kitabibu.",
        },
      ]),
      note(
        "Worked example: three screens, one visit",
        "Mfano: skrini tatu, ziara moja",
        `A fictional maternity unit designs registration.

Screen 1, care: name, SHA number, visit reason, inside the facility system. Notice: "We record this to treat you. Staff on duty can see it. Complaints: in-charge or ODPC."

Screen 2, not shown unless needed: quality review of de-identified override counts. No extra tick required from the mother.

Screen 3, optional, default off: "May we use de-identified notes to improve this facility's helper? This is not required for your delivery. You may say no." Training a global vendor model is not on this screen at all until a DPIA exists.

A vendor wants Screen 3 pre-ticked and bundled with Screen 1. The committee deletes the pre-tick. Two mothers saying no still get a bed.`,
        `Kitengo cha kubuni cha uzazi kinabuni usajili.

Skrini 1, huduma: jina, namba ya SHA, sababu ya ziara, ndani ya mfumo wa kituo. Taarifa: "Tunarekodi hii kukutibu. Wafanyakazi walio zamu wanaweza kuiona. Malalamiko: msimamizi au ODPC."

Skrini 2, haionyeshwi isipokuwa inahitajika: mapitio ya ubora ya idadi za ubatilishaji zisizo na vitambulishi. Hakuna tiki ya ziada inayohitajika kutoka kwa mama.

Skrini 3, ya hiari, zimwa kwa chaguo-msingi: "Tunaweza kutumia dokezo zisizo na vitambulishi kuboresha msaidizi wa kituo hiki? Hii si sharti kwa kujifungua kwako. Unaweza kusema hapana." Kufunza modeli ya muuzaji wa kimataifa hakuko kwenye skrini hii kabisa hadi DPIA ipo.

Muuzaji anataka Skrini 3 iwe na tiki tayari na ifungwe na Skrini 1. Kamati inafuta tiki ya awali. Mama wawili wanaosema hapana bado wanapata kitanda.`
      ),
      scenario({
        titleEn: "Scenario: no treatment without the research tick",
        titleSw: "Hali: hakuna tiba bila tiki ya utafiti",
        situationEn:
          "A partner clinic's SOP says the AI helper will not open the visit form unless the patient agrees that notes may train a global model.",
        situationSw:
          "SOP ya kliniki mshirika inasema msaidizi wa AI hatafungua fomu ya ziara isipokuwa mgonjwa akubali dokezo zifunze modeli ya kimataifa.",
        questionEn: "What must the county require?",
        questionSw: "Kaunti ihitaji nini?",
        optionsEn: [
          "Keep the lock; otherwise the model will starve",
          "Uncouple care from training; treatment forms open without the research tick; training stays optional and default off after a DPIA",
          "Move the tick to Kiswahili only, which counts as informed",
          "Paste each refusal into a public chatbot for legal wording",
        ],
        optionsSw: [
          "Weka kufuli; vinginevyo modeli itanoga",
          "Tenganisha huduma na mafunzo; fomu za tiba zifunguke bila tiki ya utafiti; mafunzo yabaki ya hiari na zimwa baada ya DPIA",
          "Hamisha tiki kwa Kiswahili tu, ambayo inahesabiwa kama yenye taarifa",
          "Bandika kila kukataa kwenye chatbot ya umma kwa maneno ya kisheria",
        ],
        correctIndex: 1,
        hintsEn: [
          "A hungry model is not a lawful basis for withholding care.",
          "Correct. Architecture is the uncoupling. Language alone does not make a bundled tick free.",
          "Translation helps understanding; it does not fix coercion.",
          "Public bots plus refusal records are a new leak.",
        ],
        hintsSw: [
          "Modeli yenye njaa si msingi halali wa kuzuia huduma.",
          "Sahihi. Usanifu ni kutenganisha. Lugha peke yake haifanyi tiki iliyofungwa kuwa huru.",
          "Tafsiri inasaidia uelewa; hairekebishi kulazimisha.",
          "Bot za umma pamoja na rekodi za kukataa ni uvujaji mpya.",
        ],
        explainEn:
          "Care must open without optional training. That is consent architecture, not a slogan.",
        explainSw:
          "Huduma lazima ifunguke bila mafunzo ya hiari. Huo ni usanifu wa ridhaa, si kauli.",
      }),
      quiz(
        "Which design matches the DPA for an optional training purpose?",
        "Ni muundo upi unaolingana na DPA kwa kusudi la hiari la mafunzo?",
        [
          "Pre-ticked, bundled with treatment, explained only in English",
          "Separate screen, default off, bilingual explanation, refusal does not change the pathway, DPIA first",
          "Hidden in the app terms that nobody reads",
          "Implied because the National AI Strategy mentions health",
        ],
        [
          "Tiki tayari, limefungwa na tiba, linaelezwa kwa Kiingereza tu",
          "Skrini tofauti, zimwa kwa chaguo-msingi, maelezo ya lugha mbili, kukataa hakubadilishi njia, DPIA kwanza",
          "Imefichwa katika masharti ya programu ambayo hakuna anayesoma",
          "Inadhaniwa kwa sababu Mkakati wa Taifa wa AI unataja afya",
        ],
        1,
        "Separate, default off, bilingual, no penalty, DPIA. Strategy documents and buried terms are not informed consent.",
        "Tofauti, zimwa, lugha mbili, bila adhabu, DPIA. Hati za mkakati na masharti yaliyofichwa si ridhaa yenye taarifa."
      ),
      note(
        "Try it: map three layers",
        "Jaribu: chora tabaka tatu",
        `For a CHP tool you might specify, write Layer 1 fields (care), Layer 2 fields (operations), Layer 3 (training — or 'none until DPIA').

Circle any field that appears in Layer 3 but is not needed in Layer 1. Those circles are the minimisation cuts.`,
        `Kwa zana ya CHP ungeyeweza kubainisha, andika sehemu za Tabaka 1 (huduma), Tabaka 2 (operesheni), Tabaka 3 (mafunzo — au 'hakuna hadi DPIA').

Zungusha sehemu yoyote iliyo kwenye Tabaka 3 lakini haihitajiki kwenye Tabaka 1. Mizunguko hiyo ndiyo kata za upunguzaji.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Three layers: care, operations, optional training. Default off. No penalty.
- Next: audit trails that show who saw what, without turning logs into public gossip.`,
        `- Tabaka tatu: huduma, operesheni, mafunzo ya hiari. Zimwa kwa chaguo-msingi. Hakuna adhabu.
- Ifuatayo: nyayo za ukaguzi zinazoonyesha nani aliona nini, bila kugeuza kumbukumbu kuwa umbea wa umma.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u7
  {
    id: "hlt-a-u7",
    titleEn: "Audit trails without gossip",
    titleSw: "Nyayo za ukaguzi bila umbea",
    cards: [
      note(
        "Who saw what, when, and why",
        "Nani aliona nini, lini, na kwa nini",
        `An audit trail is a record of access and decisions: who opened a file, who changed a field, who overrode a score, who exported a list. It is how a county answers an ODPC complaint and how a mortality review sees whether a tool was even on.

A good trail is append-only inside the approved system, tied to a named login, with a reason for sensitive opens (HIV-related files, children's records). It is not a WhatsApp screenshot collection, and it is not a prompt history sitting with a public chatbot vendor.

What the trail must not become: a staff entertainment feed. Viewing a neighbour's delivery notes "out of interest" is an incident. The committee should sample access logs the way they sample overrides.

This unit does not cover how to bypass, delete, or tamper with logs. If a vendor cannot show you an access report for a fictional case number, they have not met the specification.`,
        `Nyayo za ukaguzi ni rekodi ya ufikiaji na maamuzi: nani alifungua faili, nani alibadilisha sehemu, nani alibatilisha alama, nani alitoa orodha. Ndivyo kaunti inavyojibu malalamiko ya ODPC na jinsi mapitio ya vifo yanavyoona kama zana ilikuwa imewashwa.

Nyayo nzuri zinaongezwa tu ndani ya mfumo ulioidhinishwa, zimefungwa kwa kuingia kwa jina, zenye sababu ya ufunguzi nyeti (faili zinazohusiana na VVU, rekodi za watoto). Si mkusanyiko wa picha za skrini za WhatsApp, wala si historia ya maagizo iliyokaa kwa muuzaji wa chatbot ya umma.

Nyayo zisigeuke: kijiswaga cha wafanyakazi. Kuangalia dokezo za kujifungua za jirani "kwa hamu" ni tukio. Kamati inapaswa kuchukua sampuli za kumbukumbu za ufikiaji kama inavyochukua ubatilishaji.

Somo hili halifundishi jinsi ya kupita, kufuta, au kuharibu kumbukumbu. Muuzaji asipoweza kukuonyesha ripoti ya ufikiaji kwa namba ya kisa ya kubuni, hajakutana na maelezo.`
      ),
      reveal([
        {
          termEn: "Audit trail",
          termSw: "Nyayo za ukaguzi",
          defEn: "A time-stamped record of who accessed or changed what, inside an approved system.",
          defSw: "Rekodi yenye saa ya nani alifikia au kubadilisha nini, ndani ya mfumo ulioidhinishwa.",
        },
        {
          termEn: "Named login",
          termSw: "Kuingia kwa jina",
          defEn: "Shared 'nurse1' passwords destroy trails. Each person has an account.",
          defSw: "Nenosiri za 'nurse1' zinazoshirikiwa zinaharibu nyayo. Kila mtu ana akaunti.",
        },
        {
          termEn: "Sensitive open",
          termSw: "Ufunguzi nyeti",
          defEn: "Opening files that carry extra stigma or child data, which should require a reason code.",
          defSw: "Kufungua faili zenye unyanyapaa wa ziada au data za watoto, ambazo zinapaswa kuhitaji msimbo wa sababu.",
        },
        {
          termEn: "Export event",
          termSw: "Tukio la kutoa data",
          defEn: "A logged leaving of a list from the system — the moment leaks usually start.",
          defSw: "Kutoka kwa orodha kutoka mfumo kunakorekodiwa — wakati uvujaji mara nyingi huanza.",
        },
      ]),
      note(
        "Worked example: the shared tablet",
        "Mfano: kibao kinachoshirikiwa",
        `A fictional postnatal ward uses one tablet logged in as "midwife". Six people use it. An ODPC-style complaint arrives: a relative says a staff member discussed a named mother's status in a matatu.

Step 1. The trail cannot say who opened the file. The login was shared. The committee treats this as a finding against the hospital, not only against "someone".

Step 2. They issue named logins, forbid public-bot pastes, and add a reason code for opening HIV-related and adolescent files.

Step 3. Next month they sample 20 sensitive opens. Three have no clinical need on the roster that day. Those are incidents, handled as HR and DPA issues, not as gossip in the staff group.

The trail became useful only after names existed on logins.`,
        `Wodi ya kubuni ya baada ya kujifungua inatumia kibao kimoja kilichoingia kama "mkunga". Watu sita wanakitumia. Malalamiko ya mtindo wa ODPC yanafika: ndugu anasema mfanyakazi alijadili hali ya mama aliye na jina kwenye matatu.

Hatua ya 1. Nyayo haziwezi kusema nani alifungua faili. Kuingia kulishirikiwa. Kamati inachukulia hili kama ugunduzi dhidi ya hospitali, si dhidi ya "mtu" tu.

Hatua ya 2. Wanatoa kuingia kwa majina, wanakataza kubandika kwenye bot za umma, na wanaongeza msimbo wa sababu kwa kufungua faili zinazohusiana na VVU na za vijana.

Hatua ya 3. Mwezi unaofuata wanachukua sampuli ya ufunguzi 20 nyeti. Tatu hazina haja ya kitabibu kwenye ratiba siku hiyo. Hiyo ni visa, yanashughulikiwa kama HR na DPA, si kama umbea kwenye kikundi cha wafanyakazi.

Nyayo zilikuwa na manufaa tu baada ya majina kuwepo kwenye kuingia.`
      ),
      scenario({
        titleEn: "Scenario: export to 'work at home'",
        titleSw: "Hali: toa data 'kufanya kazi nyumbani'",
        situationEn:
          "A records officer wants a weekend export of 400 rows with names and diagnoses to a personal laptop, promising to delete it on Monday. The audit log can record the export if it happens.",
        situationSw:
          "Afisa wa rekodi anataka toleo la wikendi la safu 400 zenye majina na utambuzi kwa kompyuta ndogo binafsi, akiahidi kufuta Jumatatu. Kumbukumbu ya ukaguzi inaweza kurekodi toleo likitokea.",
        questionEn: "What should policy say?",
        questionSw: "Sera iseme nini?",
        optionsEn: [
          "Allow it if the log captures the export, because logging equals permission",
          "Forbid personal-device exports; if weekend work exists it stays in the approved system; logging a bad export does not make it lawful",
          "Allow it for HIV files only, because those need extra attention",
          "Paste the 400 rows into a public chatbot to 'anonymise overnight'",
        ],
        optionsSw: [
          "Ruhusu kumbukumbu ikinasa toleo, kwa sababu kurekodi ni sawa na ruhusa",
          "Kataza utoaji kwa vifaa binafsi; kazi ya wikendi ikipo ibaki katika mfumo ulioidhinishwa; kurekodi toleo baya hakulifanyi kuwa halali",
          "Ruhusu kwa faili za VVU tu, kwa sababu zinahitaji uangalifu zaidi",
          "Bandika safu 400 kwenye chatbot ya umma 'kuficha vitambulishi usiku kucha'",
        ],
        correctIndex: 1,
        hintsEn: [
          "A camera at a crime does not authorise the crime. Logs record; policy forbids.",
          "Correct. Trails support prohibition. They are not a hall pass for laptops.",
          "HIV files need stricter, not looser, export rules.",
          "A public bot is the opposite of anonymisation.",
        ],
        hintsSw: [
          "Kamera kwenye kosa haidhinishi kosa. Kumbukumbu zinarekodi; sera inakataza.",
          "Sahihi. Nyayo zinaunga mkono marufuku. Si pasi ya mabweni ya kompyuta ndogo.",
          "Faili za VVU zinahitaji kanuni kali zaidi za kutoa, si huru zaidi.",
          "Bot ya umma ni kinyume cha kuficha vitambulishi.",
        ],
        explainEn:
          "Audit trails make exports visible. Policy must still forbid personal devices and public bots.",
        explainSw:
          "Nyayo za ukaguzi zinaonyesha utoaji. Sera bado lazima ikataze vifaa binafsi na bot za umma.",
      }),
      quiz(
        "Why do shared logins fail as an audit trail?",
        "Kwa nini kuingia kunakoshirikiwa kunashindwa kama nyayo za ukaguzi?",
        [
          "Because tablets cannot stay charged",
          "Because the trail can no longer attach an action to one accountable person",
          "Because the DPA bans all tablets",
          "Because Kiswahili cannot be logged",
        ],
        [
          "Kwa sababu vibao haviwezi kubaki na chaji",
          "Kwa sababu nyayo haziwezi tena kufunga kitendo kwa mtu mmoja anayewajibika",
          "Kwa sababu DPA inakataza vibao vyote",
          "Kwa sababu Kiswahili hakiwezi kurekodiwa",
        ],
        1,
        "Accountability needs a name. Shared 'midwife' accounts erase the name. Language and charging are separate issues.",
        "Uwajibikaji unahitaji jina. Akaunti za 'mkunga' zinazoshirikiwa zinafuta jina. Lugha na chaji ni mambo tofauti."
      ),
      note(
        "Try it: sample the log",
        "Jaribu: chukua sampuli ya kumbukumbu",
        `Write a monthly ritual of eight lines: who pulls the access report, how many sensitive opens are sampled, what reason codes are acceptable, who receives incidents, and a ban on discussing sampled names in the staff WhatsApp.

If you cannot name the puller, you do not yet have a trail. You have a database.`,
        `Andika desturi ya kila mwezi ya mistari minane: nani anatoa ripoti ya ufikiaji, ufunguzi nyeti ngapi unachukuliwa kama sampuli, misimbo gani ya sababu inakubalika, nani anapokea visa, na marufuku ya kujadili majina ya sampuli kwenye WhatsApp ya wafanyakazi.

Huwezi ukimtaja anayetoa, bado huna nyayo. Una hifadhidata.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Trails need named logins, sampled sensitive opens, and a ban on personal exports.
- Logging is not permission.
- Next: specify a CHP-support tool that uses everything in this track.`,
        `- Nyayo zinahitaji kuingia kwa majina, sampuli za ufunguzi nyeti, na marufuku ya utoaji binafsi.
- Kurekodi si ruhusa.
- Ifuatayo: bainisha zana ya kusaidia CHP inayotumia kila kitu katika somo hili.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u8
  {
    id: "hlt-a-u8",
    titleEn: "Specifying a CHP-support tool",
    titleSw: "Kubainisha zana ya kusaidia CHP",
    cards: [
      note(
        "Write the tool before you buy it",
        "Andika zana kabla hujainunua",
        `A specification is a county document that says what a CHP-support tool may do, must refuse, and how it will be judged. It is not a vendor brochure. CHPs under UHC visit households, educate, and refer along MOH pathways. The tool may draft education and referral notes, organise visit lists as counts, and work offline conceptually. It may not diagnose, name medicines, skip 719 / 999 / 112, or take identifiers to a public model.

The spec lists: users (CHP, supervisor, facility in-charge); languages (Kiswahili and English, Sheng not faked by a model); data fields (minimum); offline queue; override reason codes; audit logins; DPIA; slice gates if any score exists; review before education goes out.

You will finish this specification in Unit 12. This unit starts the skeleton so procurement cannot fill the blanks with a demo.`,
        `Maelezo ni hati ya kaunti inayosema zana ya kusaidia CHP inaweza kufanya nini, lazima ikatae nini, na itahukumiwaje. Si kijitabu cha muuzaji. CHP chini ya UHC wanatembelea kaya, kuelimisha, na kutoa rufaa kwenye njia za MOH. Zana inaweza kuandaa elimu na dokezo za rufaa, kupanga orodha za ziara kama idadi, na kufanya kazi nje ya mtandao kwa dhana. Haiwezi kutambua ugonjwa, kutaja dawa, kuruka 719 / 999 / 112, wala kupeleka vitambulishi kwenye modeli ya umma.

Maelezo yanaorodhesha: watumiaji (CHP, msimamizi, msimamizi wa kituo); lugha (Kiswahili na Kiingereza, Sheng isiyobuniwa na modeli); sehemu za data (chache); foleni nje ya mtandao; misimbo ya sababu ya ubatilishaji; kuingia kwa ukaguzi; DPIA; milango ya vipande alama ikiwepo; ukaguzi kabla elimu haijatoka.

Utamaliza maelezo haya katika Somo la 12. Somo hili linaanza mifupa ili ununuzi usijaze pengo kwa onyesho.`
      ),
      reveal([
        {
          termEn: "Specification",
          termSw: "Maelezo (specification)",
          defEn: "The county's written requirements a vendor must meet, including refusals.",
          defSw: "Mahitaji yaliyoandikwa ya kaunti ambayo muuzaji lazima ayafikie, pamoja na kukataa.",
        },
        {
          termEn: "Must-refuse list",
          termSw: "Orodha ya lazima-kataa",
          defEn: "Diagnosis, doses, public-bot identifiers, locked alerts, kiosk destinations.",
          defSw: "Utambuzi, dozi, vitambulishi kwenye bot ya umma, tahadhari zilizofungwa, mwisho wa kioski.",
        },
        {
          termEn: "Acceptance test",
          termSw: "Jaribio la kukubali",
          defEn: "A scene you will walk in a facility before go-live, with pass/fail, not a feeling.",
          defSw: "Tukio utakalotembea kituoni kabla ya kuanza, lenye faulu/shindwa, si hisia.",
        },
        {
          termEn: "Non-goal",
          termSw: "Si-lengo",
          defEn: "What success is not: replacing CHPs, claiming device status, quoting invented accuracy.",
          defSw: "Mafanikio si nini: kuchukua nafasi ya CHP, kudai hadhi ya kifaa, kunukuu usahihi uliobuniwa.",
        },
      ]),
      note(
        "Worked example: six acceptance tests",
        "Mfano: majaribio sita ya kukubali",
        `A fictional county writes six pass/fail walks.

1. CHP enters a danger sign: tool must suggest health centre today, not home.
2. Offline for two hours: form still opens; sync later does not duplicate without a supervisor merge.
3. Education draft: no name, no dose; supervisor must tap review.
4. Override: reason code required; appears in the weekly sample.
5. Language: Kiswahili danger-sign sentence is not filed as 'tired'.
6. Identifiers: attempt to export a named list to a personal chat is blocked or at least logged as an incident.

If a vendor fails 1 or 3, the spec says stop. No medical-device sentence is added to rescue the bid.`,
        `Kaunti ya kubuni inaandika matembezi sita ya faulu/shindwa.

1. CHP anaingiza dalili ya hatari: zana lazima ipendekeze kituo cha afya leo, si nyumbani.
2. Nje ya mtandao kwa saa mbili: fomu bado inafunguka; kusawazisha baadaye hakurudufu bila kuunganisha kwa msimamizi.
3. Rasimu ya elimu: hakuna jina, hakuna dozi; msimamizi lazima aguse ukaguzi.
4. Ubatilishaji: msimbo wa sababu unahitajika; unaonekana katika sampuli ya kila wiki.
5. Lugha: sentensi ya Kiswahili ya dalili ya hatari haiwekwi kama 'amechoka'.
6. Vitambulishi: jaribio la kutoa orodha yenye majina kwa gumzo binafsi linazuiwa au angalau linaandikwa kama tukio.

Muuzaji akishindwa 1 au 3, maelezo yanasema simama. Hakuna sentensi ya kifaa cha tiba inayoongezwa kuokoa zabuni.`
      ),
      scenario({
        titleEn: "Scenario: the vendor rewrites your spec",
        titleSw: "Hali: muuzaji anaandika upya maelezo yako",
        situationEn:
          "A bidder returns your specification with diagnosis added, 'to be more useful', and with a 99% accuracy line from another country.",
        situationSw:
          "Mzabuni anarudisha maelezo yako yakiwa na utambuzi ulioongezwa, 'kuwa na manufaa zaidi', na mstari wa usahihi wa 99% kutoka nchi nyingine.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Accept; usefulness is the point of AI",
          "Keep your must-refuse list; reject invented accuracy; CHPs refer, they do not diagnose",
          "Accept diagnosis only in Sheng",
          "Ask them to demonstrate an exploit against a neighbouring county's server",
        ],
        optionsSw: [
          "Kubali; manufaa ndiyo maana ya AI",
          "Weka orodha yako ya lazima-kataa; kataa usahihi uliobuniwa; CHP hutoa rufaa, hawatambui magonjwa",
          "Kubali utambuzi kwa Sheng tu",
          "Waombe waonyeshe exploit dhidi ya seva ya kaunti jirani",
        ],
        correctIndex: 1,
        hintsEn: [
          "Useful-looking diagnosis on a CHP phone is still out of role and out of pathway.",
          "Correct. The spec belongs to the county. Brochures do not overwrite MOH.",
          "Language does not create a diagnostic licence.",
          "No exploit or attack content in this course.",
        ],
        hintsSw: [
          "Utambuzi unaoonekana wenye manufaa kwenye simu ya CHP bado uko nje ya wajibu na nje ya njia.",
          "Sahihi. Maelezo ni ya kaunti. Vijitabu havifuti MOH.",
          "Lugha haizuii leseni ya utambuzi.",
          "Hakuna maudhui ya exploit au mashambulizi katika kozi hii.",
        ],
        explainEn:
          "Counties write specifications. Vendors meet them. They do not add diagnosis or invented maths.",
        explainSw:
          "Kaunti zinaandika maelezo. Wauzaji wanayakutana. Hawazongezi utambuzi wala hisabati iliyobuniwa.",
      }),
      pb({
        titleEn: "Build the must-refuse block of the spec",
        titleSw: "Jenga kipande cha lazima-kataa cha maelezo",
        introEn:
          "Assemble the refusal paragraph that every bidder must accept in writing.",
        introSw:
          "Kusanya aya ya kukataa ambayo kila mzabuni lazima akubali kwa maandishi.",
        goalEn:
          "Include: no diagnosis, no doses, no public-bot identifiers, no locked alerts, emergencies to 719/999/112, education reviewed.",
        goalSw:
          "Jumuisha: hakuna utambuzi, hakuna dozi, hakuna vitambulishi kwenye bot ya umma, hakuna tahadhari zilizofungwa, dharura kwa 719/999/112, elimu inakaguliwa.",
        blocksEn: [
          "The tool drafts education and referral notes; it does not diagnose",
          "No medicine names or doses from the model",
          "No names, SHA numbers, HIV status or household photos in any public chatbot",
          "Alerts remain overridable with a reason code",
          "Danger signs follow MOH pathways; emergencies use 719, 999 or 112",
          "Education messages leave the device only after supervisor review",
          "The tool may replace the CHP when scores are high",
        ],
        blocksSw: [
          "Zana inaandaa elimu na dokezo za rufaa; haitambui ugonjwa",
          "Hakuna majina ya dawa wala dozi kutoka modeli",
          "Hakuna majina, namba za SHA, hali ya VVU wala picha za kaya kwenye chatbot yoyote ya umma",
          "Tahadhari zinabaki zinaweza kubatilishwa na msimbo wa sababu",
          "Dalili za hatari zinafuata njia za MOH; dharura zinatumia 719, 999 au 112",
          "Jumbe za elimu zinatoka kwenye kifaa tu baada ya ukaguzi wa msimamizi",
          "Zana inaweza kuchukua nafasi ya CHP alama zikiwa juu",
        ],
        required: [0, 1, 2, 3, 4, 5],
        sampleEn:
          "The tool drafts education and referral notes; it does not diagnose. No medicine names or doses from the model. No names, SHA numbers, HIV status or household photos in any public chatbot. Alerts remain overridable with a reason code. Danger signs follow MOH pathways; emergencies use 719, 999 or 112. Education messages leave the device only after supervisor review.",
        sampleSw:
          "Zana inaandaa elimu na dokezo za rufaa; haitambui ugonjwa. Hakuna majina ya dawa wala dozi kutoka modeli. Hakuna majina, namba za SHA, hali ya VVU wala picha za kaya kwenye chatbot yoyote ya umma. Tahadhari zinabaki zinaweza kubatilishwa na msimbo wa sababu. Dalili za hatari zinafuata njia za MOH; dharura zinatumia 719, 999 au 112. Jumbe za elimu zinatoka kwenye kifaa tu baada ya ukaguzi wa msimamizi.",
      }),
      quiz(
        "What is a non-goal of a CHP-support tool in this course?",
        "Ni nini si-lengo la zana ya kusaidia CHP katika kozi hii?",
        [
          "Drafting a bilingual education message for review",
          "Replacing CHPs or claiming medical-device status with invented accuracy",
          "Queuing records until the approved server is reachable",
          "Logging overrides with reason codes",
        ],
        [
          "Kuandaa ujumbe wa elimu wa lugha mbili kwa ukaguzi",
          "Kuchukua nafasi ya CHP au kudai hadhi ya kifaa cha tiba kwa usahihi uliobuniwa",
          "Kuweka rekodi kwenye foleni hadi seva iliyoidhinishwa ifikiwe",
          "Kurekodi ubatilishaji na misimbo ya sababu",
        ],
        1,
        "Support, queue, log. Do not replace CHPs or invent device claims.",
        "Msaada, foleni, kumbukumbu. Usichukue nafasi ya CHP wala kubuni madai ya kifaa."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- The spec is the county's. Must-refuse lists protect pathways.
- Unit 12 completes the document.
- Next: records that can talk to KHIS without leaking names.`,
        `- Maelezo ni ya kaunti. Orodha za lazima-kataa zinalinda njia.
- Somo la 12 linakamilisha hati.
- Ifuatayo: rekodi zinazoweza kuongea na KHIS bila kuvuja majina.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u9
  {
    id: "hlt-a-u9",
    titleEn: "Talking to KHIS without leaking names",
    titleSw: "Kuongea na KHIS bila kuvuja majina",
    cards: [
      note(
        "Counts up, identifiers in",
        "Idadi juu, vitambulishi ndani",
        `Kenya's public facilities report through the Kenya Health Information System (KHIS), built on DHIS2. Health data exchange standards such as HL7 FHIR exist so systems can describe visits in a common shape. In this course those names are enough: you need a way for a CHP tool to send counts and approved aggregate reports upward, while identified records stay in the facility or county store that is allowed to hold them.

Interoperability is not an excuse to open a public API with SHA numbers on it. It is a mapped set of fields, a named processor, and a rule: what leaves the facility is what KHIS already expects, not a novel dump of household photos.

Do not attempt to probe, scrape, or attack KHIS, DHIS2 or any hospital server. If you need access, you ask the records officer through the official process.

M-Kliniki Nia is mentioned only as a Kenyan example of scheduling and records in English and Kiswahili, not as a claimed integration partner with invented uptime.`,
        `Vituo vya umma nchini Kenya vinaripoti kupitia Mfumo wa Taarifa za Afya wa Kenya (KHIS), uliojengwa juu ya DHIS2. Viwango vya kubadilishana data za afya kama HL7 FHIR vipo ili mifumo ieleze ziara kwa umbo moja. Katika kozi hii majina hayo yanatosha: unahitaji njia ya zana ya CHP kutuma idadi na ripoti za jumla zilizoidhinishwa juu, huku rekodi zenye vitambulishi zikikaa katika hifadhi ya kituo au kaunti inayoruhusiwa kuzishikilia.

Kuunganisha mifumo si udhuru wa kufungua API ya umma yenye namba za SHA. Ni seti ya sehemu zilizopangwa, msindikaji mwenye jina, na kanuni: kinachotoka kituoni ni kile KHIS tayari inatarajia, si dampo jipya la picha za kaya.

Usijaribu kuchunguza, kukwangua, au kushambulia KHIS, DHIS2 au seva yoyote ya hospitali. Ukihitaji ufikiaji, muulize afisa wa rekodi kupitia utaratibu rasmi.

M-Kliniki Nia inatajwa tu kama mfano wa Kenya wa upangaji wa miadi na rekodi kwa Kiingereza na Kiswahili, si kama mshirika wa kuunganisha aliye na muda wa kufanya kazi uliobuniwa.`
      ),
      reveal([
        {
          termEn: "Aggregate report",
          termSw: "Ripoti ya jumla",
          defEn: "Counts of events, not a row per named person, suitable for KHIS-style planning.",
          defSw: "Idadi za matukio, si safu kwa kila mtu aliye na jina, inayofaa kwa mipango ya mtindo wa KHIS.",
        },
        {
          termEn: "Identified store",
          termSw: "Hifadhi yenye vitambulishi",
          defEn: "The approved system that may hold names and SHA numbers for care.",
          defSw: "Mfumo ulioidhinishwa unaoweza kushikilia majina na namba za SHA kwa huduma.",
        },
        {
          termEn: "Field map",
          termSw: "Ramani ya sehemu",
          defEn: "A table: our field, their field, whether it is a count or an identifier.",
          defSw: "Jedwali: sehemu yetu, sehemu yao, kama ni idadi au kitambulishi.",
        },
        {
          termEn: "Official access",
          termSw: "Ufikiaji rasmi",
          defEn: "Credentials and permission from records staff. Not a workaround.",
          defSw: "Vitambulisho na ruhusa kutoka kwa wafanyakazi wa rekodi. Si njia ya mkato.",
        },
      ]),
      note(
        "Worked example: a field map with a red column",
        "Mfano: ramani ya sehemu yenye safu nyekundu",
        `A fictional CHP tool wants to help the sub-county report immunisation. The map has three columns: our field, KHIS-style aggregate, identifier?

Village unit, number vaccinated this week, no.
Vaccine type, count, no.
Child name, — , yes, never leave the identified store.
Photo of booklet, — , yes, never.
HIV-related note, — , yes, never.

The vendor proposes sending the yes-column "temporarily" to their cloud to "clean the data". The committee marks that row as a specification fail. Cleaning happens inside the identified store or not at all.

They also refuse a request to "just try the KHIS login" from a personal laptop.`,
        `Zana ya kubuni ya CHP inataka kusaidia kaunti ndogo kuripoti chanjo. Ramani ina safu tatu: sehemu yetu, jumla ya mtindo wa KHIS, kitambulishi?

Kitengo cha kijiji, idadi waliochanjwa wiki hii, hapana.
Aina ya chanjo, idadi, hapana.
Jina la mtoto, — , ndiyo, lisitoke kwenye hifadhi yenye vitambulishi.
Picha ya kitabu, — , ndiyo, kamwe.
Dokezo linalohusiana na VVU, — , ndiyo, kamwe.

Muuzaji anapendekeza kutuma safu ya ndiyo "kwa muda" kwenye wingu lao "kusafisha data". Kamati inaweka safu hiyo kama kushindwa kwa maelezo. Usafishaji unafanyika ndani ya hifadhi yenye vitambulishi au hafanyiki.

Pia wanakataa ombi la "jaribu kuingia KHIS" kutoka kompyuta ndogo binafsi.`
      ),
      scenario({
        titleEn: "Scenario: 'FHIR means we can open the API to the internet'",
        titleSw: "Hali: 'FHIR inamaanisha tunaweza kufungua API kwenye intaneti'",
        situationEn:
          "A developer on the vendor team says that because FHIR is a standard, the county should publish patient resources on a public URL for 'innovation'.",
        situationSw:
          "Msanidi kwenye timu ya muuzaji anasema kwa sababu FHIR ni kiwango, kaunti inapaswa kuchapisha rasilimali za wagonjwa kwenye URL ya umma kwa 'ubunifu'.",
        questionEn: "What does the specification say?",
        questionSw: "Maelezo yanasema nini?",
        optionsEn: [
          "Agree; standards exist to be public",
          "Standards describe shape, not permission; identified resources stay in authorised systems; only approved aggregates go upward",
          "Agree if the URL is in Kiswahili",
          "Ask for a penetration test write-up that includes exploit steps",
        ],
        optionsSw: [
          "Kubali; viwango vipo ili viwe vya umma",
          "Viwango vinaeleza umbo, si ruhusa; rasilimali zenye vitambulishi zinabaki katika mifumo iliyoidhinishwa; jumla zilizoidhinishwa tu ndizo zinazokwenda juu",
          "Kubali URL ikiwa kwa Kiswahili",
          "Omba andiko la jaribio la kupenya linalojumuisha hatua za exploit",
        ],
        correctIndex: 1,
        hintsEn: [
          "A common data shape is not an open door. KHIS reporting is not a public patient API.",
          "Correct. FHIR-like structure, DPA permission. Language of the URL is irrelevant.",
          "Kiswahili does not anonymise a patient resource.",
          "This course does not include exploit or attack procedures.",
        ],
        hintsSw: [
          "Umbo la pamoja la data si mlango wazi. Ripoti ya KHIS si API ya umma ya wagonjwa.",
          "Sahihi. Muundo kama FHIR, ruhusa ya DPA. Lugha ya URL haijalishi.",
          "Kiswahili hakifichi rasilimali ya mgonjwa.",
          "Kozi hii haijumuishi taratibu za exploit au mashambulizi.",
        ],
        explainEn:
          "Interoperability standards organise fields. They do not authorise public identified APIs or attack write-ups.",
        explainSw:
          "Viwango vya kuunganisha vinapanga sehemu. Havidhinishi API za umma zenye vitambulishi wala maandiko ya mashambulizi.",
      }),
      quiz(
        "What may a CHP-support tool send toward KHIS-style reporting?",
        "Zana ya kusaidia CHP inaweza kutuma nini kuelekea ripoti za mtindo wa KHIS?",
        [
          "Household photos and SHA numbers for 'completeness'",
          "Approved aggregate counts mapped in a field table, with identifiers remaining in the care store",
          "Whatever a public chatbot extracts from pasted registers",
          "A copy of the midwife shared login",
        ],
        [
          "Picha za kaya na namba za SHA kwa 'ukamilifu'",
          "Idadi za jumla zilizoidhinishwa zilizopangwa kwenye jedwali la sehemu, vitambulishi vikibaki kwenye hifadhi ya huduma",
          "Chochote chatbot ya umma inachotoa kutoka daftari zilizobandikwa",
          "Nakala ya kuingia kunakoshirikiwa kwa mkunga",
        ],
        1,
        "Aggregates up, identifiers in. Photos, public bots and shared logins fail the map.",
        "Jumla juu, vitambulishi ndani. Picha, bot za umma na kuingia kunakoshirikiwa vinashindwa kwenye ramani."
      ),
      note(
        "Try it: red/green field table",
        "Jaribu: jedwali la sehemu nyekundu/kijani",
        `Make a two-colour table of ten fields a CHP tool might have. Green: may aggregate. Red: never leave the identified store.

If a field is both (for example village), write the rule: "village as a count of visits, never as a named household list."`,
        `Tengeneza jedwali la rangi mbili la sehemu kumi zana ya CHP inaweza kuwa nazo. Kijani: inaweza kujumlishwa. Nyekundu: isitoke kwenye hifadhi yenye vitambulishi.

Sehemu ikiwa vyote (kwa mfano kijiji), andika kanuni: "kijiji kama idadi ya ziara, si kama orodha ya kaya zenye majina."`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- KHIS needs counts. Care systems hold names.
- Standards are shape, not a public door. No attack content.
- Next: putting the tool into low-resource facilities without believing the demo network.`,
        `- KHIS inahitaji idadi. Mifumo ya huduma inashikilia majina.
- Viwango ni umbo, si mlango wa umma. Hakuna maudhui ya mashambulizi.
- Ifuatayo: kuweka zana katika vituo visivyo na rasilimali nyingi bila kuamini mtandao wa onyesho.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u10
  {
    id: "hlt-a-u10",
    titleEn: "Deployment in low-resource facilities",
    titleSw: "Kuweka kazini katika vituo visivyo na rasilimali nyingi",
    cards: [
      note(
        "Power, devices, people, paper",
        "Umeme, vifaa, watu, karatasi",
        `Deployment is the week the tool meets the roster, the socket and the rain. Low-resource here means shared Android phones, load-shedding, 2G, one records clerk, and a paper register that still legally exists. Your specification's offline kit, bilingual forms and staffed review either survive that week or they were fiction.

A go-live checklist that is honest: named logins exist; paper backup is on the desk; 719 / 999 / 112 is on the wall; supervisor knows the pause switch; CHPs have been paid for the extra hour of training; the silent period (scores logged, not yet driving destinations) has a calendar end.

Do not go live on a demo network the vendor brought in a suitcase. Do not skip the rural site because it would spoil the launch photo.

Cost in KES must include airtime, replacement of a cracked screen, and the clerk's overtime. If those lines are zero, the budget is a wish.`,
        `Kuweka kazini ni wiki ambayo zana inakutana na ratiba, soketi na mvua. Rasilimali chache hapa inamaanisha simu za Android zinazoshirikiwa, kukatika kwa umeme, 2G, karani mmoja wa rekodi, na daftari la karatasi ambalo bado lipo kisheria. Kifaa nje ya mtandao cha maelezo yako, fomu za lugha mbili na ukaguzi wenye watu vinaishi wiki hiyo au vilikuwa vya kubuni.

Orodha ya kuanza iliyo ya uaminifu: kuingia kwa majina kipo; nakala ya karatasi iko mezani; 719 / 999 / 112 iko ukutani; msimamizi anajua swichi ya kusimamisha; CHP wamelipwa saa ya ziada ya mafunzo; kipindi kimya (alama zinarekodiwa, bado haziongozi mwisho) kina mwisho wa kalenda.

Usianze kwenye mtandao wa onyesho ambao muuzaji alileta kwenye suti. Usiruke kituo cha vijijini kwa sababu kingeharibu picha ya uzinduzi.

Gharama kwa KES lazima ijumuishe airtime, kubadilisha skrini iliyopasuka, na overtime ya karani. Mistari hiyo ikiwa sifuri, bajeti ni matakwa.`
      ),
      reveal([
        {
          termEn: "Silent period",
          termSw: "Kipindi kimya",
          defEn: "The tool runs and logs; it does not yet change destinations or orders.",
          defSw: "Zana inaenda na kurekodi; bado haibadilishi mwisho wala maagizo.",
        },
        {
          termEn: "Paper backup",
          termSw: "Nakala ya karatasi",
          defEn: "The register that still works when the tablet does not.",
          defSw: "Daftari ambalo bado linafanya kazi kibao kishindwapo.",
        },
        {
          termEn: "Rostered time",
          termSw: "Muda ulio kwenye ratiba",
          defEn: "Training and review hours that appear on the duty sheet, not as unpaid goodwill.",
          defSw: "Saa za mafunzo na ukaguzi zinazoonekana kwenye karatasi ya zamu, si kama wema usiolipwa.",
        },
        {
          termEn: "Launch photo risk",
          termSw: "Hatari ya picha ya uzinduzi",
          defEn: "Choosing the easiest facility so the event looks good, leaving the rural site unsupported.",
          defSw: "Kuchagua kituo rahisi ili tukio lionekane zuri, kikiacha kituo cha vijijini bila msaada.",
        },
      ]),
      note(
        "Worked example: go-live postponed by a socket",
        "Mfano: kuanza kucheleweshwa na soketi",
        `A fictional health centre in Isiolo schedules go-live on a Friday. On Thursday the only socket near the records desk fails. The vendor suggests using a phone hotspot from a staff personal line and skipping paper "just for the weekend".

The in-charge postpones. Paper remains. CHPs keep the old referral book. The silent period is extended one week after a new socket and a power strip are in the budget.

Minutes record: "Deployment failed a physical test, not a model test." That sentence protects the county more than a ribbon-cutting.

No one pastes the weekend's named visits into a chatbot to "keep momentum".`,
        `Kituo cha afya cha kubuni huko Isiolo kinapanga kuanza Ijumaa. Alhamisi soketi pekee karibu na meza ya rekodi inashindwa. Muuzaji anapendekeza kutumia hotspot ya simu kutoka laini binafsi ya mfanyakazi na kuruka karatasi "wikendi tu".

Msimamizi anaahirisha. Karatasi inabaki. CHP wanaweka daftari la zamani la rufaa. Kipindi kimya kinaongezwa wiki moja baada ya soketi mpya na kamba ya umeme kuwa kwenye bajeti.

Kumbukumbu zinasema: "Kuweka kazini kulishindwa jaribio la kimwili, si jaribio la modeli." Sentensi hiyo inalinda kaunti kuliko kukata utepe.

Hakuna aliye bandika ziara zenye majina za wikendi kwenye chatbot "kuweka kasi".`
      ),
      scenario({
        titleEn: "Scenario: skip the rural site for the camera",
        titleSw: "Hali: ruka kituo cha vijijini kwa kamera",
        situationEn:
          "Communications wants to launch only at the county hospital, where wifi is stable, and 'add CHPs later'. The spec's equity slice gate included the rural health centre.",
        situationSw:
          "Mawasiliano yanataka kuzindua hospitali ya kaunti tu, ambako wifi ni thabiti, na 'ongeza CHP baadaye'. Lango la kipande cha usawa la maelezo lilijumuisha kituo cha afya cha vijijini.",
        questionEn: "What should the committee do?",
        questionSw: "Kamati ifanye nini?",
        optionsEn: [
          "Launch in town; cameras need wifi",
          "Keep the slice gate: no full go-live until the rural site has completed silent period and paper backup, even if the photo waits",
          "Launch in town and send household names to a public model to simulate rural data",
          "Claim a medical-device exemption for the town site only",
        ],
        optionsSw: [
          "Zindua mjini; kamera zinahitaji wifi",
          "Weka lango la kipande: hakuna kuanza kamili hadi kituo cha vijijini kimemaliza kipindi kimya na nakala ya karatasi, hata picha ikisubiri",
          "Zindua mjini na utume majina ya kaya kwenye modeli ya umma kuiga data ya vijijini",
          "Dai msamaha wa kifaa cha tiba kwa kituo cha mji tu",
        ],
        correctIndex: 1,
        hintsEn: [
          "A launch photo is not a slice. Equity was a gate in Unit 2.",
          "Correct. Rural silent period and paper are part of deployment, not a sequel.",
          "Simulating rural patients with named public-model prompts is a leak and a lie.",
          "This course does not use device claims as site exemptions.",
        ],
        hintsSw: [
          "Picha ya uzinduzi si kipande. Usawa ulikuwa lango katika Somo la 2.",
          "Sahihi. Kipindi kimya cha vijijini na karatasi ni sehemu ya kuweka kazini, si mfululizo.",
          "Kuiga wagonjwa wa vijijini kwa maagizo ya modeli ya umma yenye majina ni uvujaji na uongo.",
          "Kozi hii haitumii madai ya kifaa kama misamaha ya kituo.",
        ],
        explainEn:
          "Deployment includes the hard site. Cameras wait. Identifiers never simulate a missing catchment.",
        explainSw:
          "Kuweka kazini kunajumuisha kituo kigumu. Kamera zinasubiri. Vitambulishi havifanyi kuiga eneo lililokosekana.",
      }),
      quiz(
        "Which line must be non-zero in a deployment budget?",
        "Ni mstari upi lazima usiwe sifuri katika bajeti ya kuweka kazini?",
        [
          "Ribbon-cutting flowers",
          "Airtime, device repair, rostered training time, and paper backup",
          "A fee to quote AmeriAfriAI as if it were this hospital's result",
          "A public-chatbot subscription for weekend catch-up notes",
        ],
        [
          "Maua ya kukata utepe",
          "Airtime, ukarabati wa kifaa, muda wa mafunzo ulio kwenye ratiba, na nakala ya karatasi",
          "Ada ya kunukuu AmeriAfriAI kama ilikuwa matokeo ya hospitali hii",
          "Usajili wa chatbot ya umma kwa dokezo za kufukuzana za wikendi",
        ],
        1,
        "Sockets, airtime, people and paper are deployment. Flowers, borrowed pilots and public bots are not.",
        "Soketi, airtime, watu na karatasi ni kuweka kazini. Maua, majaribio yaliyokopwa na bot za umma si hivyo."
      ),
      note(
        "Try it: Friday checklist",
        "Jaribu: orodha ya Ijumaa",
        `Write a 10-line go-live checklist for a facility you know, including socket, paper, 719, named logins, pause holder, silent-period end date, and a rural site line.

Tick which lines would fail this Friday. Those ticks are your real deployment date.`,
        `Andika orodha ya mistari 10 ya kuanza kwa kituo unachokijua, ikiwemo soketi, karatasi, 719, kuingia kwa majina, mwenye kusimamisha, tarehe ya mwisho ya kipindi kimya, na mstari wa kituo cha vijijini.

Tiki mistari gani ingeshindwa Ijumaa hii. Tiki hizo ndizo tarehe yako halisi ya kuweka kazini.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Deployment is sockets, rosters, paper and silent periods.
- Rural sites are not a later season of the launch.
- Next: watching the tool after go-live — drift and incidents, not attacks.`,
        `- Kuweka kazini ni soketi, ratiba, karatasi na vipindi vya kimya.
- Vituo vya vijijini si msimu wa baadaye wa uzinduzi.
- Ifuatayo: kuangalia zana baada ya kuanza — mchepuko na visa, si mashambulizi.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u11
  {
    id: "hlt-a-u11",
    titleEn: "After go-live: drift and incidents",
    titleSw: "Baada ya kuanza: mchepuko na visa",
    cards: [
      note(
        "The world moves; the model may not",
        "Dunia inasogea; modeli huenda isisogee",
        `Post-deployment monitoring is the calendar that keeps a live tool honest. Drift is when the patients, recording habits or disease mix change so that last quarter's calibration no longer holds — a new malaria season, a neighbouring facility closed, a pulse oximeter broken for a month.

You already have the instruments: score-band counts, slice tables, override reason codes, stock forecast versus issues, access-log samples. Monitoring is putting them on a date: monthly for overrides, quarterly for slices, same week for any incident.

An incident is a patient-safety or DPA event: a danger sign sent home by the tool, a named list on WhatsApp, a missing-oximetry-as-normal pattern that lasted unnoticed. The stop switch from Unit 1 is used, then a written note: what happened, who was affected (counts, not a gossip list), what changes.

Monitoring is not red-teaming a neighbour's server, not jailbreaking the CHP phone, and not a public post of patient files "for transparency".`,
        `Ufuatiliaji baada ya kuweka kazini ni kalenda inayoweka zana hai kuwa ya uaminifu. Mchepuko (drift) ni wagonjwa, tabia za kurekodi au mchanganyiko wa magonjwa unapobadilika kiasi kwamba urekebishaji wa robo iliyopita haushikilii tena — msimu mpya wa malaria, kituo jirani kilifungwa, kipima oksijeni kimeharibika kwa mwezi.

Tayari una vyombo: hesabu za makundi ya alama, jedwali za vipande, misimbo ya sababu ya ubatilishaji, utabiri wa stoo dhidi ya matumizi, sampuli za kumbukumbu za ufikiaji. Ufuatiliaji ni kuviweka kwenye tarehe: kila mwezi kwa ubatilishaji, kila robo kwa vipande, wiki ileile kwa tukio lolote.

Tukio ni kisa cha usalama wa mgonjwa au DPA: dalili ya hatari iliyopelekwa nyumbani na zana, orodha yenye majina kwenye WhatsApp, mfumo wa kukosa-oksimetri-kama-kawaida uliodumu bila kuonekana. Swichi ya kusimamisha ya Somo la 1 inatumiwa, kisha dokezo lililoandikwa: nini kilitokea, nani aliathirika (idadi, si orodha ya umbea), mabadiliko gani.

Ufuatiliaji si red-teaming seva ya jirani, si kuvunja ulinzi wa simu ya CHP, wala si chapisho la umma la faili za wagonjwa "kwa uwazi".`
      ),
      reveal([
        {
          termEn: "Drift",
          termSw: "Mchepuko (drift)",
          defEn: "When live data no longer match the data the tool was judged on.",
          defSw: "Data ya moja kwa moja isipofananisha tena data ambayo zana ilihukumiwa kwayo.",
        },
        {
          termEn: "Incident note",
          termSw: "Dokezo la tukio",
          defEn: "A dated description of a safety or DPA event, with counts and actions, without a gossip list.",
          defSw: "Maelezo yenye tarehe ya tukio la usalama au DPA, yenye idadi na hatua, bila orodha ya umbea.",
        },
        {
          termEn: "Retire",
          termSw: "Kustaafisha",
          defEn: "Taking a tool out of care when monitoring shows it cannot be made safe here.",
          defSw: "Kuondoa zana kwenye huduma ufuatiliaji unapoonyesha haiwezi kufanywa salama hapa.",
        },
        {
          termEn: "Feedback loop",
          termSw: "Kitanzu cha maoni",
          defEn: "Using override logs and outcomes to change thresholds or forms — carefully, so you do not chase noise.",
          defSw: "Kutumia kumbukumbu za ubatilishaji na matokeo kubadilisha vikomo au fomu — kwa makini, ili usifuate kelele.",
        },
      ]),
      note(
        "Worked example: the broken sensor season",
        "Mfano: msimu wa kipima kilichoharibika",
        `For six weeks a fictional rural health centre's oximeter is in repair. Missing-as-unknown was specified, but a software update quietly imputed "normal". Override codes for "missing input" jump from 4 a week to 22. Slice sensitivity is not computed because nobody runs the quarterly table early.

A CHP refers a child with chest in-drawing anyway. Good. The dashboard still looks green.

The monitoring officer, on the monthly override sample, sees the jump, pauses the score at that site (stop switch), writes an incident note with counts not names, and rolls back the update.

They do not publish "AI failed 22 times" as a national statistic. They do put "imputation of missing vitals forbidden" back in the spec in bold.

The child was saved by a human pathway, not by the dashboard colour.`,
        `Kwa wiki sita kipima oksijeni cha kituo cha afya cha kubuni cha vijijini kiko kutengenezwa. Kukosa-kama-haijulikani kulielezwa, lakini sasisho la programu lilijazia "kawaida" kimya. Misimbo ya ubatilishaji ya "ingizo lililokosekana" inaruka kutoka 4 kwa wiki hadi 22. Unyeti wa kipande haukokotolewi kwa sababu hakuna anayeendesha jedwali la robo mapema.

CHP anatoa rufaa kwa mtoto mwenye kuvutika kwa kifua hata hivyo. Vizuri. Dashibodi bado inaonekana kijani.

Afisa wa ufuatiliaji, kwenye sampuli ya kila mwezi ya ubatilishaji, anaona kuruka, anasimamisha alama kituoni (swichi), anaandika dokezo la tukio lenye idadi si majina, na anarudisha sasisho.

Hachapishi "AI ilishindwa mara 22" kama takwimu ya taifa. Anaweka "kujazia dalili muhimu zilizokosekana kumekatazwa" tena kwenye maelezo kwa herufi nzito.

Mtoto aliokolewa na njia ya binadamu, si rangi ya dashibodi.`
      ),
      scenario({
        titleEn: "Scenario: transparency by posting files",
        titleSw: "Hali: uwazi kwa kuweka faili",
        situationEn:
          "After a rumour that 'the AI is killing patients', a communications officer wants to post a week of named records and model scores on a public page 'to show we have nothing to hide'.",
        situationSw:
          "Baada ya uvumi kwamba 'AI inawaua wagonjwa', afisa wa mawasiliano anataka kuweka rekodi za wiki zenye majina na alama za modeli kwenye ukurasa wa umma 'kuonyesha hatuna cha kuficha'.",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Post the files; sunlight is the best disinfectant",
          "Refuse: publish counts, incident process and pathway reminders instead; named records stay in the system; rumours are corrected as in Intermediate",
          "Post only HIV-related rows, since those rumours are loudest",
          "Invite the public to try jailbreaking the model for 'openness'",
        ],
        optionsSw: [
          "Weka faili; mwanga wa jua ndio dawa bora",
          "Kataa: chapisha idadi, mchakato wa tukio na vikumbusho vya njia badala yake; rekodi zenye majina zinabaki kwenye mfumo; uvumi unarekebishwa kama katika Kiwango cha kati",
          "Weka safu zinazohusiana na VVU tu, kwa sababu uvumi huo ndio wenye kelele",
          "Alika umma kujaribu kuvunja ulinzi wa modeli kwa 'uwazi'",
        ],
        correctIndex: 1,
        hintsEn: [
          "Sunlight on named health files is a DPA incident, not disinfectant.",
          "Correct. Transparency is process and counts. Identifiers and attack invitations are not.",
          "HIV rows are the last thing to post, not the first.",
          "No jailbreak or exploit content.",
        ],
        hintsSw: [
          "Mwanga wa jua kwenye faili za afya zenye majina ni tukio la DPA, si dawa.",
          "Sahihi. Uwazi ni mchakato na idadi. Vitambulishi na mialiko ya mashambulizi si hivyo.",
          "Safu za VVU ni kitu cha mwisho kuweka, si cha kwanza.",
          "Hakuna maudhui ya jailbreak au exploit.",
        ],
        explainEn:
          "Monitoring reports counts and actions. It does not publish patients or invite attacks.",
        explainSw:
          "Ufuatiliaji unaripoti idadi na hatua. Hauchapishi wagonjwa wala kualika mashambulizi.",
      }),
      quiz(
        "Override codes for 'missing input' jump four-fold in a month. First action?",
        "Misimbo ya ubatilishaji ya 'ingizo lililokosekana' inaruka mara nne katika mwezi. Hatua ya kwanza?",
        [
          "Ignore it; overrides mean the humans are awake",
          "Investigate inputs and recent updates, pause the site score if missing values are being treated as normal, write an incident note with counts",
          "Lock overrides so the dashboard turns green again",
          "Post patient names with their scores to prove drift",
        ],
        [
          "Puuzia; ubatilishaji unamaanisha binadamu wako macho",
          "Chunguza maingizo na sasisho za hivi karibuni, simamisha alama ya kituo thamani zilizokosekana zikichukuliwa kama kawaida, andika dokezo la tukio lenye idadi",
          "Funga ubatilishaji ili dashibodi igeuke kijani tena",
          "Weka majina ya wagonjwa pamoja na alama zao kuthibitisha mchepuko",
        ],
        1,
        "A jump in missing-input overrides is a sensor or software smell. Pause, count, write. Do not lock or leak.",
        "Kuruka kwa ubatilishaji wa ingizo lililokosekana ni harufu ya kipima au programu. Simamisha, hesabu, andika. Usifunge wala usivuje."
      ),
      note(
        "Try it: monitoring calendar",
        "Jaribu: kalenda ya ufuatiliaji",
        `On one page, place four repeating events: weekly tracer stock-out days, monthly override sample, quarterly slice table, same-day incident pause.

Assign a role, not a hero, to each. If two events share the only records clerk, write that as a risk.`,
        `Kwenye ukurasa mmoja, weka matukio manne yanayojirudia: siku za upungufu wa vitu vya kufuatilia kila wiki, sampuli ya ubatilishaji kila mwezi, jedwali la vipande kila robo, kusimamisha tukio siku ileile.

Kabidhi wajibu, si shujaa, kwa kila kimoja. Matukio mawili yakimshiriki karani pekee wa rekodi, andika hilo kama hatari.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Drift is a calendar problem. Incidents use the stop switch and counts.
- No public files, no attack exercises.
- Next: finish the CHP-support specification as the capstone.`,
        `- Mchepuko ni tatizo la kalenda. Visa vinatumia swichi ya kusimamisha na idadi.
- Hakuna faili za umma, hakuna mazoezi ya mashambulizi.
- Ifuatayo: kamilisha maelezo ya zana ya kusaidia CHP kama kazi kuu.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u12
  {
    id: "hlt-a-u12",
    titleEn: "Capstone: specify and govern a CHP-support tool",
    titleSw: "Kazi kuu: bainisha na simamia zana ya kusaidia CHP",
    cards: [
      note(
        "One document that could enter a county file",
        "Hati moja inayoweza kuingia faili la kaunti",
        `This capstone asks you to finish the specification begun in Unit 8, using every lock in the advanced track.

You will name: committee and stop switch (Unit 1); slice gates (Unit 2); imaging out of scope or flagged only with human report (Unit 3); vendor score sheet (Unit 4); offline stores (Unit 5); consent layers (Unit 6); named audit logins (Unit 7); must-refuse list (Unit 8); KHIS aggregates only (Unit 9); deployment checklist (Unit 10); monitoring calendar (Unit 11).

You will not: claim a medical device, invent AmeriAfriAI or Zendawa percentages, put names in a public bot, write exploit steps, or let the tool diagnose.`,
        `Kazi kuu hii inakuuliza ukamilishe maelezo yaliyoanza katika Somo la 8, ukitumia kila kufuli katika somo la juu.

Utataja: kamati na swichi ya kusimamisha (Somo la 1); milango ya vipande (Somo la 2); picha nje ya wigo au zenye bendera na ripoti ya binadamu tu (Somo la 3); karatasi ya alama ya muuzaji (Somo la 4); hifadhi nje ya mtandao (Somo la 5); tabaka za ridhaa (Somo la 6); kuingia kwa majina kwa ukaguzi (Somo la 7); orodha ya lazima-kataa (Somo la 8); jumla za KHIS tu (Somo la 9); orodha ya kuweka kazini (Somo la 10); kalenda ya ufuatiliaji (Somo la 11).

Hutadai kifaa cha tiba, hutabuni asilimia za AmeriAfriAI au Zendawa, hutaweka majina kwenye bot ya umma, hutaandika hatua za exploit, wala hutaacha zana itambue ugonjwa.`
      ),
      reveal([
        {
          termEn: "Capstone brief",
          termSw: "Muhtasari wa kazi kuu",
          defEn: "A county-ready specification plus governance page, written in both languages.",
          defSw: "Maelezo yaliyo tayari kwa kaunti pamoja na ukurasa wa usimamizi, yaliyoandikwa kwa lugha zote mbili.",
        },
        {
          termEn: "In-scope",
          termSw: "Ndani ya wigo",
          defEn: "Education drafts, referral notes, visit organisation, offline queue, bilingual UI.",
          defSw: "Rasimu za elimu, dokezo za rufaa, kupanga ziara, foleni nje ya mtandao, kiolesura cha lugha mbili.",
        },
        {
          termEn: "Out-of-scope",
          termSw: "Nje ya wigo",
          defEn: "Diagnosis, doses, public models, locked alerts, device claims, attacks.",
          defSw: "Utambuzi, dozi, modeli za umma, tahadhari zilizofungwa, madai ya kifaa, mashambulizi.",
        },
        {
          termEn: "Defence",
          termSw: "Utetezi",
          defEn: "Reading the brief aloud to a colleague who tries to add diagnosis or a fake percentage.",
          defSw: "Kusoma muhtasari kwa sauti kwa mwenzako anayejaribu kuongeza utambuzi au asilimia ya uongo.",
        },
      ]),
      note(
        "Worked example: two pages that survive a meeting",
        "Mfano: kurasa mbili zinazostahimili mkutano",
        `A fictional county in Kilifi prints two pages.

Page 1, purpose and pathway: CHP household to dispensary to health centre; 719 / 999 / 112; helper drafts notes; humans refer; stop switch is the county director of health plus IT same day.

Page 2, locks: must-refuse list; three consent layers, training default off; named logins; offline device-queue-server-paper; KHIS counts only; silent period 6 weeks including one rural site; monthly override sample; no AmeriAfriAI or Zendawa numbers; no device claim.

In the meeting, a member asks to add diagnosis "because UHC". The authors point at page 2. The brief holds.

That is leadership: paper that refuses a fashionable harm.`,
        `Kaunti ya kubuni huko Kilifi inachapisha kurasa mbili.

Ukurasa 1, kusudi na njia: kaya ya CHP hadi zahanati hadi kituo cha afya; 719 / 999 / 112; msaidizi anaandaa dokezo; binadamu hutoa rufaa; swichi ni mkurugenzi wa afya wa kaunti pamoja na IT siku hiyo.

Ukurasa 2, kufuli: orodha ya lazima-kataa; tabaka tatu za ridhaa, mafunzo zimwa; kuingia kwa majina; kifaa-foleni-seva-karatasi nje ya mtandao; idadi za KHIS tu; kipindi kimya wiki 6 kikiwemo kituo kimoja cha vijijini; sampuli ya ubatilishaji kila mwezi; hakuna namba za AmeriAfriAI au Zendawa; hakuna dai la kifaa.

Katika mkutano, mjumbe anaomba kuongeza utambuzi "kwa sababu ya UHC". Waandishi wanaelekeza ukurasa wa 2. Muhtasari unashika.

Huo ni uongozi: karatasi inayokataa madhara yenye mtindo.`
      ),
      scenario({
        titleEn: "Scenario: the last tempting add-on",
        titleSw: "Hali: nyongeza ya mwisho yenye vishawishi",
        situationEn:
          "On the morning of the defence, a partner offers free imaging-on-the-phone diagnosis and a slide that says 'Zendawa-level stock accuracy, 98%'. Your brief is otherwise complete.",
        situationSw:
          "Asubuhi ya utetezi, mshirika anatoa utambuzi wa bure wa picha kwenye simu na slaidi inayosema 'usahihi wa stoo wa kiwango cha Zendawa, 98%'. Muhtasari wako vinginevyo umekamilika.",
        questionEn: "What do you take into the room?",
        questionSw: "Unachukua nini ndani ya chumba?",
        optionsEn: [
          "Add both; free and 98% will impress the executive",
          "Leave them out: imaging diagnosis is out of scope, 98% is an invented borrowed number, the two-page brief stands",
          "Add imaging only, as a medical device you just declared",
          "Add a section on attacking a rival vendor's API",
        ],
        optionsSw: [
          "Ongeza zote; bure na 98% zitavutia mtendaji",
          "Ziacha nje: utambuzi wa picha uko nje ya wigo, 98% ni namba iliyobuniwa iliyokopwa, muhtasari wa kurasa mbili unasimama",
          "Ongeza picha tu, kama kifaa cha tiba umetangaza sasa",
          "Ongeza sehemu ya kushambulia API ya muuzaji mpinzani",
        ],
        correctIndex: 1,
        hintsEn: [
          "Free and fluent numbers are how specifications die on the last morning.",
          "Correct. Out-of-scope and invented stats stay out. That is the defence.",
          "You do not declare device status in this course.",
          "No exploit or attack content.",
        ],
        hintsSw: [
          "Bure na namba fasaha ndivyo maelezo yanavyokufa asubuhi ya mwisho.",
          "Sahihi. Nje ya wigo na takwimu zilizobuniwa zinabaki nje. Huo ndio utetezi.",
          "Hutangazi hadhi ya kifaa katika kozi hii.",
          "Hakuna maudhui ya exploit au mashambulizi.",
        ],
        explainEn:
          "The capstone is the refusals you still make when a gift arrives. Imaging diagnosis and fake 98% do not enter the file.",
        explainSw:
          "Kazi kuu ni kukataa unakofanya zawadi inapofika. Utambuzi wa picha na 98% ya uongo haviingii kwenye faili.",
      }),
      quiz(
        "Which set is the complete advanced health-AI charter?",
        "Ni seti ipi iliyo mkataba kamili wa AI ya afya ya kiwango cha juu?",
        [
          "Demo first, invent accuracy, diagnose on the CHP phone, skip DPA if UHC is busy",
          "Committee and pause; slice gates; imaging as flags only; vendor pack; offline stores; layered consent; named trails; CHP spec with must-refuse; KHIS counts; monitored drift — no device claims, no exploits, no public-bot identifiers",
          "AmeriAfriAI 99% plus Zendawa 98% as the evaluation",
          "Open FHIR patient URLs for innovation",
        ],
        [
          "Onyesho kwanza, buni usahihi, tambua ugonjwa kwenye simu ya CHP, ruka DPA UHC ikiwa na shughuli",
          "Kamati na kusimamisha; milango ya vipande; picha kama bendera tu; faili la muuzaji; hifadhi nje ya mtandao; ridhaa yenye tabaka; nyayo zenye majina; maelezo ya CHP yenye lazima-kataa; idadi za KHIS; mchepuko unaofuatiliwa — hakuna madai ya kifaa, hakuna exploit, hakuna vitambulishi kwenye bot ya umma",
          "AmeriAfriAI 99% pamoja na Zendawa 98% kama tathmini",
          "Fungua URL za wagonjwa za FHIR kwa ubunifu",
        ],
        1,
        "The charter is governance plus specification plus monitoring. Demos, invented pilots, public identified APIs and CHP diagnosis fail it.",
        "Mkataba ni usimamizi pamoja na maelezo pamoja na ufuatiliaji. Maonyesho, majaribio yaliyobuniwa, API za umma zenye vitambulishi na utambuzi wa CHP vinaushindwa."
      ),
      note(
        "Try it: defend the two pages",
        "Jaribu: tetee kurasa mbili",
        `Write the two pages in English and Kiswahili. Read them to a colleague who is instructed to tempt you with diagnosis, a fake percentage, a public-bot shortcut, or a device claim.

If you can refuse all four temptations without adding a line, the advanced track is complete.`,
        `Andika kurasa mbili kwa Kiingereza na Kiswahili. Zisome kwa mwenzako aliyeagizwa kukushawishi kwa utambuzi, asilimia ya uongo, njia ya mkato ya bot ya umma, au dai la kifaa.

Ukikataa vishawishi vyote vinne bila kuongeza mstari, somo la juu limekamilika.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- You can specify and govern health AI without becoming the doctor and without inventing numbers.
- CHPs remain referrers on MOH pathways. AI drafts. Committees pause.
- Keep the two pages. They are the point of the advanced track.`,
        `- Unaweza kubainisha na kusimamia AI ya afya bila kuwa daktari na bila kubuni namba.
- CHP wanabaki watoa rufaa kwenye njia za MOH. AI inaandaa. Kamati zinasimamisha.
- Weka kurasa mbili. Ndiyo maana ya somo la juu.`
      ),
    ],
  },
];
