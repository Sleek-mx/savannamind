import { note, quiz, reveal, scenario, pb } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Health and care — intermediate (skilled practitioner).
 * Syllabus: BLUEPRINT.md section 6, hlt Intermediate, u1–u12.
 * All facilities, patients, tools and numbers in worked examples are fictional.
 */
export const hltIntermediateUnits: CurriculumUnit[] = [
  // ------------------------------------------------------------------ u1
  {
    id: "hlt-i-u1",
    titleEn: "Clinical decision support",
    titleSw: "Msaada wa uamuzi wa kitabibu",
    cards: [
      note(
        "What clinical decision support is",
        "Msaada wa uamuzi wa kitabibu ni nini",
        `Clinical decision support (CDS) is any software that gives a health worker patient-specific information at the moment a decision is made: a reminder, an alert, a risk score or a suggested next step. It supports the decision. The clinician still makes it and is still accountable for it.

There are two main ways to build CDS. Rule-based CDS encodes a written guideline as if-then logic: if a child's breathing rate is above the guideline cut-off for their age, show "fast breathing — assess for pneumonia". You can read every rule and check it against the guideline. Learned CDS is a machine learning model trained on past records: it looks at many inputs (age, vital signs, test results) and outputs a probability, such as "chance of deterioration in the next 24 hours: 0.32". It can find patterns no one wrote down, but you cannot read its logic line by line, so it must be measured carefully.

Where CDS sits in care matters as much as how it is built. It can act before the visit (who should be seen first), during the visit (a prompt inside the consultation form) or after it (a daily list of patients overdue for follow-up). Each placement changes who sees the output, how much time they have, and what happens if the output is wrong.

A score is only as good as its inputs. If vital signs are recorded twice a day, a "real-time" early warning score is really a twice-a-day score. If the model was trained at a referral hospital, it may misjudge patients at a dispensary with different equipment and different recording habits.`,
        `Msaada wa uamuzi wa kitabibu (clinical decision support, CDS) ni programu yoyote inayompa mhudumu wa afya taarifa kuhusu mgonjwa mahususi wakati anapofanya uamuzi: kikumbusho, tahadhari, alama ya hatari au hatua inayopendekezwa. Inasaidia uamuzi. Mtaalamu ndiye bado anayefanya uamuzi na anawajibika kwake.

Kuna njia kuu mbili za kujenga CDS. CDS ya kanuni huandika mwongozo kama mantiki ya "ikiwa-basi": ikiwa kasi ya kupumua ya mtoto iko juu ya kikomo cha mwongozo kwa umri wake, onyesha "anapumua haraka — mchunguze kwa nimonia". Unaweza kusoma kila kanuni na kuilinganisha na mwongozo. CDS ya kujifunza ni modeli ya ujifunzaji wa mashine iliyofunzwa kwa rekodi za zamani: inaangalia vipengele vingi (umri, dalili muhimu, matokeo ya vipimo) na kutoa uwezekano, kama "uwezekano wa hali kuwa mbaya ndani ya saa 24: 0.32". Inaweza kugundua mifumo ambayo hakuna aliyeiandika, lakini huwezi kusoma mantiki yake mstari kwa mstari, kwa hiyo lazima ipimwe kwa makini.

Mahali CDS inapowekwa katika huduma ni muhimu kama jinsi ilivyojengwa. Inaweza kufanya kazi kabla ya ziara (nani aonwe kwanza), wakati wa ziara (ujumbe ndani ya fomu ya mashauriano) au baada yake (orodha ya kila siku ya wagonjwa waliochelewa kufuatiliwa). Kila mahali hubadilisha nani anaona matokeo, ana muda gani, na nini kinatokea matokeo yakiwa na kosa.

Alama ni nzuri kadiri data inayoingizwa ilivyo nzuri. Ikiwa dalili muhimu zinarekodiwa mara mbili kwa siku, alama ya "papo hapo" ya onyo la mapema kwa kweli ni alama ya mara mbili kwa siku. Ikiwa modeli ilifunzwa katika hospitali ya rufaa, inaweza kukosea wagonjwa wa zahanati yenye vifaa tofauti na tabia tofauti za kurekodi.`,
        "/learn/content/hlt/digital-clinic-triage.jpg"
      ),
      reveal([
        {
          termEn: "Clinical decision support (CDS)",
          termSw: "Msaada wa uamuzi wa kitabibu (CDS)",
          defEn: "Software that gives patient-specific prompts, alerts or scores at the point of care; the clinician decides.",
          defSw: "Programu inayotoa ujumbe, tahadhari au alama kuhusu mgonjwa mahususi wakati wa huduma; mtaalamu ndiye anaamua.",
        },
        {
          termEn: "Rule-based CDS",
          termSw: "CDS ya kanuni",
          defEn: "CDS that encodes a written guideline as if-then rules that can be read and checked.",
          defSw: "CDS inayoandika mwongozo kama kanuni za ikiwa-basi ambazo zinaweza kusomwa na kukaguliwa.",
        },
        {
          termEn: "Risk score",
          termSw: "Alama ya hatari",
          defEn: "A number, often a probability from a trained model, estimating how likely an outcome is for this patient.",
          defSw: "Namba, mara nyingi uwezekano kutoka kwa modeli iliyofunzwa, inayokadiria jinsi tukio lilivyo na uwezekano kwa mgonjwa huyu.",
        },
        {
          termEn: "Threshold",
          termSw: "Kikomo (threshold)",
          defEn: "The score above which the tool raises an alert; moving it trades missed cases against false alarms.",
          defSw: "Alama ambayo juu yake zana inatoa tahadhari; kuisogeza kunabadilisha uwiano kati ya wagonjwa wanaokosekana na tahadhari za uongo.",
        },
        {
          termEn: "Alert fatigue",
          termSw: "Uchovu wa tahadhari",
          defEn: "When staff see so many alerts, most of them unhelpful, that they start ignoring all of them.",
          defSw: "Wafanyakazi wanapoona tahadhari nyingi mno, nyingi zisizo na msaada, hadi wanaanza kuzipuuza zote.",
        },
      ]),
      note(
        "Worked example: an early warning score on a ward",
        "Mfano: alama ya onyo la mapema wodini",
        `Imagine a 40-bed medical ward at a fictional sub-county hospital in Kakamega. A new tool adds up points for breathing rate, pulse, temperature, blood pressure and level of consciousness, and alerts the nurse in charge when a patient scores 5 or more.

Step 1 — count the alerts. In the first two weeks the tool fires about 18 alerts a day. Chart review shows that on an average day about 3 patients truly deteriorate, and the tool catches all 3. So roughly 15 of the 18 daily alerts are false alarms.

Step 2 — watch behaviour. By week three, nurses acknowledge alerts without going to the bedside. That is alert fatigue: the tool still catches the 3 real cases on paper, but no one acts on them.

Step 3 — test a new threshold. At a score of 7 or more, the tool fires about 6 alerts a day and catches about 2 of the 3 deteriorating patients. Fewer false alarms, but one real case a day is now missed by the tool.

Step 4 — check the inputs. Vital signs are taken at 6 am and 6 pm. A patient who deteriorates at 10 am will not be scored until evening, whatever the threshold.

The lesson: choosing the threshold, the observation schedule and who responds is a clinical governance decision for the ward team, not a software setting. A reasonable plan might keep the threshold at 5, add a third observation round, and make the response a quick bedside check rather than a full review.`,
        `Fikiria wodi ya magonjwa ya ndani yenye vitanda 40 katika hospitali ya kubuni ya kaunti ndogo huko Kakamega. Zana mpya inajumlisha pointi za kasi ya kupumua, mapigo ya moyo, joto, shinikizo la damu na kiwango cha fahamu, na kumtahadharisha muuguzi mkuu wa zamu mgonjwa anapopata alama 5 au zaidi.

Hatua ya 1 — hesabu tahadhari. Katika wiki mbili za kwanza zana inatoa takriban tahadhari 18 kwa siku. Ukaguzi wa faili unaonyesha kwamba kwa siku ya kawaida takriban wagonjwa 3 kwa kweli wanazidiwa, na zana inawagundua wote 3. Kwa hiyo takriban tahadhari 15 kati ya 18 za kila siku ni za uongo.

Hatua ya 2 — angalia tabia. Kufikia wiki ya tatu, wauguzi wanakubali tahadhari bila kwenda kitandani kwa mgonjwa. Huo ni uchovu wa tahadhari: kwenye karatasi zana bado inagundua wagonjwa 3 halisi, lakini hakuna anayechukua hatua.

Hatua ya 3 — jaribu kikomo kipya. Kwa alama 7 au zaidi, zana inatoa takriban tahadhari 6 kwa siku na inagundua takriban wagonjwa 2 kati ya 3 wanaozidiwa. Tahadhari za uongo zimepungua, lakini sasa zana inakosa mgonjwa mmoja halisi kila siku.

Hatua ya 4 — kagua data inayoingizwa. Dalili muhimu zinapimwa saa 12 asubuhi na saa 12 jioni. Mgonjwa anayezidiwa saa 4 asubuhi hatapata alama hadi jioni, kikomo chochote kile.

Somo: kuchagua kikomo, ratiba ya vipimo na nani anajibu ni uamuzi wa usimamizi wa kitabibu kwa timu ya wodi, si mpangilio wa programu. Mpango unaofaa unaweza kubaki na kikomo cha 5, kuongeza mzunguko wa tatu wa vipimo, na kufanya jibu kuwa ukaguzi mfupi kitandani badala ya mapitio kamili.`
      ),
      scenario({
        titleEn: "Scenario: the alert everyone overrides",
        titleSw: "Hali: tahadhari ambayo kila mtu anaibatilisha",
        situationEn:
          "Your facility's electronic record shows a sepsis-risk alert. The audit log shows clinicians override it in about 9 out of 10 cases, usually noting 'patient known, stable'. The medical superintendent asks you what to do.",
        situationSw:
          "Rekodi ya kielektroniki ya kituo chako inaonyesha tahadhari ya hatari ya sepsis. Kumbukumbu za ukaguzi zinaonyesha wataalamu wanaibatilisha katika takriban visa 9 kati ya 10, mara nyingi wakiandika 'mgonjwa anajulikana, hali tulivu'. Msimamizi wa matibabu anakuuliza nini kifanyike.",
        questionEn: "What is the best next step?",
        questionSw: "Hatua bora inayofuata ni ipi?",
        optionsEn: [
          "Switch the alert off, since clinicians clearly do not need it",
          "Review a sample of alerts with clinicians to check the threshold, the inputs and the cases where overrides were wrong",
          "Make the alert impossible to override so staff must follow it",
          "Leave it as it is; overrides show the system is working",
        ],
        optionsSw: [
          "Zima tahadhari, kwa kuwa ni wazi wataalamu hawaihitaji",
          "Pitia sampuli ya tahadhari pamoja na wataalamu ili kukagua kikomo, data inayoingizwa na visa ambavyo ubatilishaji ulikuwa kosa",
          "Fanya tahadhari isiweze kubatilishwa ili wafanyakazi walazimike kuifuata",
          "Iache ilivyo; ubatilishaji unaonyesha mfumo unafanya kazi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Too fast. Some of those overridden alerts may have been real sepsis; switching off removes the safety net without evidence.",
          "Correct. A structured review finds whether the threshold is too low, whether inputs are stale, and whether any overrides missed real cases.",
          "Forcing compliance with a noisy alert makes fatigue worse and takes the decision away from the clinician who can see the patient.",
          "Overrides are healthy when justified, but a 90% override rate is a warning sign of alert fatigue that needs investigating.",
        ],
        hintsSw: [
          "Haraka mno. Baadhi ya tahadhari zilizobatilishwa huenda zilikuwa sepsis halisi; kuzima kunaondoa kinga bila ushahidi.",
          "Sahihi. Mapitio ya utaratibu yanagundua kama kikomo kiko chini mno, kama data imepitwa na wakati, na kama ubatilishaji wowote ulikosa visa halisi.",
          "Kulazimisha kufuata tahadhari yenye kelele nyingi kunazidisha uchovu na kunamnyang'anya uamuzi mtaalamu anayemwona mgonjwa.",
          "Ubatilishaji ni mzuri ukiwa na sababu, lakini kiwango cha 90% ni ishara ya uchovu wa tahadhari inayohitaji uchunguzi.",
        ],
        explainEn:
          "CDS is designed to be overridden by justified clinical judgement, and overrides are data. A very high override rate means the tool, its threshold or its placement needs review with the people who use it.",
        explainSw:
          "CDS imeundwa ibatilishwe na uamuzi wa kitabibu wenye sababu, na ubatilishaji ni data. Kiwango cha juu sana cha ubatilishaji kinamaanisha zana, kikomo chake au mahali ilipowekwa panahitaji mapitio pamoja na watumiaji wake.",
      }),
      quiz(
        "An AI triage score says a patient is low priority, but your own assessment finds a worrying sign the form did not capture. What should happen?",
        "Alama ya triage ya AI inasema mgonjwa si wa kipaumbele, lakini uchunguzi wako unapata ishara ya wasiwasi ambayo fomu haikunasa. Nini kifanyike?",
        [
          "Follow the score, because it was trained on thousands of patients",
          "Act on your clinical assessment and document why you disagreed with the score",
          "Re-enter the data until the score agrees with you",
          "Ask the patient to wait and re-score them in an hour",
        ],
        [
          "Fuata alama, kwa sababu ilifunzwa kwa maelfu ya wagonjwa",
          "Chukua hatua kulingana na uchunguzi wako wa kitabibu na uandike kwa nini hukukubaliana na alama",
          "Ingiza data upya hadi alama ikubaliane nawe",
          "Mwambie mgonjwa asubiri na umpime upya baada ya saa moja",
        ],
        1,
        "The score was computed without the sign you observed, so it is working from incomplete data. The clinician owns the decision, and recording the disagreement gives the team evidence to improve the tool. Editing inputs to change the score falsifies the record.",
        "Alama ilikokotolewa bila ishara uliyoiona, kwa hiyo inatumia data isiyokamilika. Mtaalamu ndiye mwenye uamuzi, na kurekodi kutokubaliana kunaipa timu ushahidi wa kuboresha zana. Kubadilisha data ili kubadilisha alama ni kughushi rekodi."
      ),
      note(
        "Try it: map one decision",
        "Jaribu: chora ramani ya uamuzi mmoja",
        `Pick one decision in a facility you know, for example "which child at the outpatient queue is seen first" or "which mother is overdue for a postnatal visit". On paper, write five lines:

- The decision, and who makes it today.
- The data that would feed a CDS tool, and how often it is recorded.
- Where the output would appear: before, during or after the visit.
- What happens if the tool raises a false alarm, and what happens if it misses a case.
- Who would review how the tool performs each month.

If you cannot answer the last two lines, the facility is not ready for that tool yet.`,
        `Chagua uamuzi mmoja katika kituo unachokijua, kwa mfano "mtoto yupi kwenye foleni ya wagonjwa wa nje aonwe kwanza" au "mama yupi amechelewa kwa ziara ya baada ya kujifungua". Kwenye karatasi, andika mistari mitano:

- Uamuzi wenyewe, na nani anaufanya leo.
- Data ambayo ingeingizwa kwenye zana ya CDS, na inarekodiwa mara ngapi.
- Matokeo yangeonekana wapi: kabla, wakati au baada ya ziara.
- Nini kinatokea zana ikitoa tahadhari ya uongo, na nini kinatokea ikikosa kisa.
- Nani angepitia utendaji wa zana kila mwezi.

Ikiwa huwezi kujibu mistari miwili ya mwisho, kituo bado hakijawa tayari kwa zana hiyo.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- CDS supports a decision; the clinician makes it and documents overrides.
- Rule-based CDS can be read line by line; learned CDS must be measured.
- Thresholds trade missed cases against false alarms, and too many alarms cause alert fatigue.
- Next unit: the numbers you need to measure any test or tool — sensitivity, specificity and PPV.`,
        `- CDS inasaidia uamuzi; mtaalamu ndiye anaufanya na anaandika ubatilishaji.
- CDS ya kanuni inaweza kusomwa mstari kwa mstari; CDS ya kujifunza lazima ipimwe.
- Vikomo vinabadilisha uwiano kati ya visa vinavyokosekana na tahadhari za uongo, na tahadhari nyingi mno husababisha uchovu wa tahadhari.
- Somo linalofuata: namba unazohitaji kupima kipimo au zana yoyote — unyeti, umahususi na PPV.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u2
  {
    id: "hlt-i-u2",
    titleEn: "Sensitivity, specificity and PPV",
    titleSw: "Unyeti, umahususi na PPV",
    cards: [
      note(
        "Four boxes that describe any test",
        "Visanduku vinne vinavyoeleza kipimo chochote",
        `Every screening test or AI tool that says "positive" or "negative" can be checked against the truth, usually a confirmatory test. That gives four boxes:

- True positive (TP): the person has the disease and the tool says positive.
- False positive (FP): the person does not have it, but the tool says positive.
- False negative (FN): the person has it, but the tool says negative.
- True negative (TN): the person does not have it and the tool says negative.

From these four boxes come the measures clinicians use. Sensitivity is TP divided by everyone who truly has the disease (TP + FN): of the sick, how many did we catch? Specificity is TN divided by everyone who truly does not have it (TN + FP): of the well, how many did we correctly clear? These two describe the tool itself.

Positive predictive value (PPV) is TP divided by everyone the tool called positive (TP + FP): if the tool says positive, how likely is it that the person really has the disease? Negative predictive value (NPV) is TN divided by all negatives (TN + FN). PPV and NPV are what a patient cares about, and unlike sensitivity and specificity they change with how common the disease is in the people being tested. You met precision and recall in Foundations: precision is PPV, and recall is sensitivity.`,
        `Kila kipimo cha uchunguzi wa awali (screening) au zana ya AI inayosema "chanya" au "hasi" inaweza kulinganishwa na ukweli, kwa kawaida kipimo cha uthibitisho. Hilo linatoa visanduku vinne:

- Chanya kweli (true positive, TP): mtu ana ugonjwa na zana inasema chanya.
- Chanya bandia (false positive, FP): mtu hana ugonjwa, lakini zana inasema chanya.
- Hasi bandia (false negative, FN): mtu ana ugonjwa, lakini zana inasema hasi.
- Hasi kweli (true negative, TN): mtu hana ugonjwa na zana inasema hasi.

Kutoka visanduku hivi vinne ndipo vipimo wanavyotumia wataalamu vinatoka. Unyeti (sensitivity) ni TP ukigawanya kwa wote walio na ugonjwa kweli (TP + FN): kati ya wagonjwa, tuliwagundua wangapi? Umahususi (specificity) ni TN ukigawanya kwa wote wasio na ugonjwa kweli (TN + FP): kati ya walio wazima, tuliwaondoa kwa usahihi wangapi? Hivi viwili vinaeleza zana yenyewe.

Thamani ya utabiri chanya (positive predictive value, PPV) ni TP ukigawanya kwa wote ambao zana iliwaita chanya (TP + FP): zana ikisema chanya, kuna uwezekano gani mtu kweli ana ugonjwa? Thamani ya utabiri hasi (NPV) ni TN ukigawanya kwa hasi zote (TN + FN). PPV na NPV ndizo mgonjwa anazojali, na tofauti na unyeti na umahususi, zinabadilika kulingana na jinsi ugonjwa ulivyoenea miongoni mwa watu wanaopimwa. Ulikutana na precision na recall katika Misingi: precision ni PPV, na recall ni unyeti.`
      ),
      reveal([
        {
          termEn: "Sensitivity",
          termSw: "Unyeti (sensitivity)",
          defEn: "TP / (TP + FN): the share of truly sick people the test catches.",
          defSw: "TP / (TP + FN): sehemu ya wagonjwa halisi ambao kipimo kinawagundua.",
        },
        {
          termEn: "Specificity",
          termSw: "Umahususi (specificity)",
          defEn: "TN / (TN + FP): the share of truly well people the test correctly calls negative.",
          defSw: "TN / (TN + FP): sehemu ya watu wazima kweli ambao kipimo kinawaita hasi kwa usahihi.",
        },
        {
          termEn: "Positive predictive value (PPV)",
          termSw: "Thamani ya utabiri chanya (PPV)",
          defEn: "TP / (TP + FP): of everyone who tests positive, the share who really have the disease.",
          defSw: "TP / (TP + FP): kati ya wote wanaopimwa chanya, sehemu ambayo kweli ina ugonjwa.",
        },
        {
          termEn: "Negative predictive value (NPV)",
          termSw: "Thamani ya utabiri hasi (NPV)",
          defEn: "TN / (TN + FN): of everyone who tests negative, the share who are really free of the disease.",
          defSw: "TN / (TN + FN): kati ya wote wanaopimwa hasi, sehemu ambayo kweli haina ugonjwa.",
        },
        {
          termEn: "Confirmatory test",
          termSw: "Kipimo cha uthibitisho",
          defEn: "The more accurate test used to settle the truth after a screening result.",
          defSw: "Kipimo sahihi zaidi kinachotumika kuthibitisha ukweli baada ya matokeo ya uchunguzi wa awali.",
        },
      ]),
      note(
        "Worked example: screening 1,000 people for TB",
        "Mfano: kuchunguza watu 1,000 kwa TB",
        `Imagine a fictional county outreach camp that screens 1,000 adults with a computer-aided chest X-ray reading tool. Everyone flagged positive is sent for a confirmatory laboratory test. Assume, for this example only, that 5% of the people screened truly have TB, the tool's sensitivity is 90% and its specificity is 80%.

Step 1 — split by the truth. 5% of 1,000 = 50 people have TB. 950 do not.

Step 2 — apply sensitivity to the 50. 90% of 50 = 45 true positives. The other 5 are false negatives: people with TB whom the tool cleared.

Step 3 — apply specificity to the 950. 80% of 950 = 760 true negatives. The other 190 are false positives: well people flagged for more testing.

Step 4 — count the positives. 45 + 190 = 235 people flagged. PPV = 45 / 235 = about 19%. So roughly 1 in 5 people flagged actually has TB.

Step 5 — count the negatives. 760 + 5 = 765 people cleared. NPV = 760 / 765 = about 99.3%.

What this means in practice. The tool is useful as a first filter: it cleared 765 people and missed only 5 cases, and it narrowed 1,000 people to 235 for laboratory testing. But a positive result is not a diagnosis; four out of five flagged people are well. The 5 missed cases matter too: people cleared by the tool who still have symptoms need a clear message to come back.

Where it goes wrong: if someone reports "the tool is 90% accurate" they have told you only one number, and not which one. Always ask for all four boxes.`,
        `Fikiria kambi ya kubuni ya kaunti inayowachunguza watu wazima 1,000 kwa zana ya kusoma picha za X-ray ya kifua kwa msaada wa kompyuta. Kila aliyeonyeshwa chanya anatumwa kwa kipimo cha uthibitisho cha maabara. Tuchukulie, kwa mfano huu tu, kwamba 5% ya waliochunguzwa kweli wana TB, unyeti wa zana ni 90% na umahususi wake ni 80%.

Hatua ya 1 — gawanya kwa ukweli. 5% ya 1,000 = watu 50 wana TB. 950 hawana.

Hatua ya 2 — tumia unyeti kwa wale 50. 90% ya 50 = chanya kweli 45. Wale 5 waliobaki ni hasi bandia: watu wenye TB ambao zana iliwaondoa.

Hatua ya 3 — tumia umahususi kwa wale 950. 80% ya 950 = hasi kweli 760. Wale 190 waliobaki ni chanya bandia: watu wazima walioonyeshwa kwa vipimo zaidi.

Hatua ya 4 — hesabu chanya. 45 + 190 = watu 235 walioonyeshwa. PPV = 45 / 235 = takriban 19%. Kwa hiyo takriban mtu 1 kati ya 5 walioonyeshwa kweli ana TB.

Hatua ya 5 — hesabu hasi. 760 + 5 = watu 765 walioondolewa. NPV = 760 / 765 = takriban 99.3%.

Maana yake kwa vitendo. Zana inafaa kama chujio la kwanza: iliwaondoa watu 765 na ikakosa visa 5 tu, na ikapunguza watu 1,000 hadi 235 kwa vipimo vya maabara. Lakini matokeo chanya si utambuzi; watu wanne kati ya watano walioonyeshwa ni wazima. Visa 5 vilivyokosekana pia ni muhimu: watu walioondolewa na zana ambao bado wana dalili wanahitaji ujumbe wazi warudi.

Mahali inapoharibika: mtu akisema "zana ni sahihi kwa 90%" amekupa namba moja tu, na hajasema ni ipi. Daima uliza visanduku vyote vinne.`
      ),
      quiz(
        "In a study, 60 people truly have TB. The tool flags 48 of them as positive. What is the tool's sensitivity?",
        "Katika utafiti, watu 60 kweli wana TB. Zana inawaonyesha 48 kati yao kuwa chanya. Unyeti wa zana ni upi?",
        ["80%", "48%", "20%", "It cannot be calculated without the number of well people"],
        ["80%", "48%", "20%", "Hauwezi kukokotolewa bila idadi ya watu wazima"],
        0,
        "Sensitivity = TP / (TP + FN) = 48 / 60 = 80%. You only need the truly sick group. 20% is the miss rate (12 / 60), and you would need the well group for specificity, not sensitivity.",
        "Unyeti = TP / (TP + FN) = 48 / 60 = 80%. Unahitaji kundi la wagonjwa halisi tu. 20% ni kiwango cha kukosa (12 / 60), na ungehitaji kundi la walio wazima kwa umahususi, si kwa unyeti."
      ),
      quiz(
        "A tool with 80% sensitivity and 90% specificity is used on 2,000 people, of whom 10% truly have the condition. About what share of people who test positive really have it?",
        "Zana yenye unyeti wa 80% na umahususi wa 90% inatumika kwa watu 2,000, ambao 10% kweli wana hali hiyo. Takriban sehemu gani ya wanaopimwa chanya kweli wanayo?",
        ["About 47%", "80%", "90%", "About 16%"],
        ["Takriban 47%", "80%", "90%", "Takriban 16%"],
        0,
        "200 have the condition: 80% gives 160 TP. 1,800 do not: 90% specificity gives 1,620 TN and 180 FP. Positives = 160 + 180 = 340. PPV = 160 / 340 = about 47%. Sensitivity (80%) and specificity (90%) describe the tool, not the meaning of a positive result.",
        "Watu 200 wana hali hiyo: 80% inatoa TP 160. Watu 1,800 hawana: umahususi wa 90% unatoa TN 1,620 na FP 180. Chanya = 160 + 180 = 340. PPV = 160 / 340 = takriban 47%. Unyeti (80%) na umahususi (90%) vinaeleza zana, si maana ya matokeo chanya."
      ),
      scenario({
        titleEn: "Scenario: choosing a threshold for screening",
        titleSw: "Hali: kuchagua kikomo cha uchunguzi wa awali",
        situationEn:
          "A chest X-ray reading tool outputs a score from 0 to 100. The vendor offers two settings. Setting A: sensitivity 95%, specificity 70%. Setting B: sensitivity 75%, specificity 95%. Every positive will be sent for a confirmatory laboratory test. The TB programme lead asks which setting to use for community screening.",
        situationSw:
          "Zana ya kusoma X-ray ya kifua inatoa alama kutoka 0 hadi 100. Muuzaji anatoa mipangilio miwili. Mpangilio A: unyeti 95%, umahususi 70%. Mpangilio B: unyeti 75%, umahususi 95%. Kila chanya kitatumwa kwa kipimo cha uthibitisho cha maabara. Kiongozi wa mpango wa TB anauliza mpangilio upi utumike kwa uchunguzi wa jamii.",
        questionEn: "Which is the stronger recommendation?",
        questionSw: "Pendekezo lenye nguvu zaidi ni lipi?",
        optionsEn: [
          "Setting A, as long as laboratory capacity can handle the extra positives",
          "Setting B, because higher specificity always means a better tool",
          "Whichever setting has the higher average of the two numbers",
          "Neither; only a tool with 100% on both should be used",
        ],
        optionsSw: [
          "Mpangilio A, ilimradi uwezo wa maabara unaweza kushughulikia chanya za ziada",
          "Mpangilio B, kwa sababu umahususi wa juu daima unamaanisha zana bora",
          "Mpangilio wowote wenye wastani wa juu wa namba hizo mbili",
          "Hakuna; zana yenye 100% kwa zote mbili tu ndiyo itumike",
        ],
        correctIndex: 0,
        hintsEn: [
          "Correct. In screening, a missed case goes home untreated, while a false positive is caught by the confirmatory test. High sensitivity fits, provided the laboratory can absorb the extra workload.",
          "Setting B would miss 1 in 4 people with TB at the first step, and those people never reach the confirmatory test.",
          "Averaging hides the trade-off. The right balance depends on what a miss costs versus what a false alarm costs.",
          "No real test is perfect. The question is which errors the pathway can catch and which it cannot.",
        ],
        hintsSw: [
          "Sahihi. Katika uchunguzi wa awali, kisa kilichokosekana kinarudi nyumbani bila matibabu, wakati chanya bandia kinanaswa na kipimo cha uthibitisho. Unyeti wa juu unafaa, ilimradi maabara inaweza kubeba kazi ya ziada.",
          "Mpangilio B ungekosa mtu 1 kati ya 4 wenye TB katika hatua ya kwanza, na watu hao hawafiki kamwe kwenye kipimo cha uthibitisho.",
          "Wastani unaficha uwiano. Usawa sahihi unategemea gharama ya kukosa kisa ikilinganishwa na gharama ya tahadhari ya uongo.",
          "Hakuna kipimo halisi kilicho kamili. Swali ni makosa yapi njia ya huduma inaweza kunasa na yapi haiwezi.",
        ],
        explainEn:
          "Screening favours sensitivity because false positives get a second look and false negatives do not. Always check that the next step (here, the laboratory) has capacity for the positives the setting will generate.",
        explainSw:
          "Uchunguzi wa awali unapendelea unyeti kwa sababu chanya bandia zinaangaliwa tena na hasi bandia haziangaliwi. Daima hakikisha hatua inayofuata (hapa, maabara) ina uwezo wa kushughulikia chanya ambazo mpangilio huo utazalisha.",
      }),
      note(
        "Try it: build the table on paper",
        "Jaribu: jenga jedwali kwenye karatasi",
        `Draw a 2 x 2 table. Label the columns "has disease" and "does not" and the rows "tool positive" and "tool negative".

Now fill it for 500 people, with 8% who truly have the disease, sensitivity 85% and specificity 90%. Work it out before reading the answer below.

- Has disease: 40. TP = 34, FN = 6.
- Does not: 460. TN = 414, FP = 46.
- PPV = 34 / 80 = 42.5%. NPV = 414 / 420 = about 98.6%.

Then say the result in one plain sentence you could tell a patient: "Out of every 10 people who get a positive result on this screen, about 4 really have the disease, so we always confirm with a laboratory test."`,
        `Chora jedwali la 2 x 2. Andika safu wima "ana ugonjwa" na "hana", na safu mlalo "zana chanya" na "zana hasi".

Sasa lijaze kwa watu 500, ambao 8% kweli wana ugonjwa, unyeti 85% na umahususi 90%. Kokotoa kabla ya kusoma jibu lililo hapa chini.

- Wana ugonjwa: 40. TP = 34, FN = 6.
- Hawana: 460. TN = 414, FP = 46.
- PPV = 34 / 80 = 42.5%. NPV = 414 / 420 = takriban 98.6%.

Kisha sema matokeo kwa sentensi moja rahisi ambayo ungemwambia mgonjwa: "Kati ya kila watu 10 wanaopata matokeo chanya katika uchunguzi huu, takriban 4 kweli wana ugonjwa, kwa hiyo daima tunathibitisha kwa kipimo cha maabara."`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Sensitivity and specificity describe the tool; PPV and NPV describe what a result means.
- Always ask for all four boxes, not a single "accuracy" number.
- Screening favours sensitivity when a confirmatory test follows.
- Next unit: why PPV collapses when a disease is rare, even for a "95% accurate" test.`,
        `- Unyeti na umahususi vinaeleza zana; PPV na NPV vinaeleza maana ya matokeo.
- Daima uliza visanduku vyote vinne, si namba moja ya "usahihi".
- Uchunguzi wa awali unapendelea unyeti pale kipimo cha uthibitisho kinapofuata.
- Somo linalofuata: kwa nini PPV inaporomoka ugonjwa ukiwa nadra, hata kwa kipimo "sahihi kwa 95%".`
      ),
    ],
  },

  // ------------------------------------------------------------------ u3
  {
    id: "hlt-i-u3",
    titleEn: "Base rates and false alarms",
    titleSw: "Viwango vya msingi na tahadhari za uongo",
    cards: [
      note(
        "Why a 95% accurate test can mislead",
        "Kwa nini kipimo sahihi kwa 95% kinaweza kupotosha",
        `The base rate, also called prevalence, is the share of people in the tested group who truly have the condition before any test is done. It is the single most ignored number in health AI, and it changes everything.

Here is the mechanism. Sensitivity acts only on the sick group; specificity acts only on the well group. When a condition is rare, the well group is huge. Even a small false-positive rate applied to a huge group produces many false alarms, and they can easily outnumber the true positives from the small sick group. So the same tool gives a high PPV in a referral clinic where the condition is common, and a low PPV in general community screening where it is rare.

"Accuracy" hides this. Accuracy is (TP + TN) divided by everyone tested. When 99% of people are well, a tool that simply says "negative" to everyone is 99% accurate and completely useless: it catches no one. That is why a vendor's single accuracy figure tells you almost nothing until you know the base rate in their test group and in yours.

The practical rule: before you trust what a positive result means, ask "how common is this condition among the people we will actually test?"`,
        `Kiwango cha msingi (base rate), kinachoitwa pia kiwango cha ueneaji (prevalence), ni sehemu ya watu katika kundi linalopimwa ambao kweli wana hali hiyo kabla ya kipimo chochote. Ndiyo namba inayopuuzwa zaidi katika AI ya afya, na inabadilisha kila kitu.

Hivi ndivyo inavyofanya kazi. Unyeti unafanya kazi kwa kundi la wagonjwa tu; umahususi unafanya kazi kwa kundi la walio wazima tu. Hali ikiwa nadra, kundi la walio wazima ni kubwa mno. Hata kiwango kidogo cha chanya bandia kikitumika kwa kundi kubwa kinazalisha tahadhari nyingi za uongo, na zinaweza kuzidi kwa urahisi chanya kweli kutoka kundi dogo la wagonjwa. Kwa hiyo zana ileile inatoa PPV ya juu katika kliniki ya rufaa ambapo hali ni ya kawaida, na PPV ya chini katika uchunguzi wa jumla wa jamii ambapo ni nadra.

"Usahihi" unaficha jambo hili. Usahihi ni (TP + TN) ukigawanya kwa wote waliopimwa. Asilimia 99 ya watu wakiwa wazima, zana inayosema tu "hasi" kwa kila mtu ina usahihi wa 99% na haina faida kabisa: haimgundui mtu yeyote. Ndiyo sababu namba moja ya usahihi kutoka kwa muuzaji haikuambii karibu chochote hadi ujue kiwango cha msingi katika kundi lao la majaribio na katika kundi lako.

Kanuni ya vitendo: kabla hujaamini maana ya matokeo chanya, uliza "hali hii imeenea kiasi gani miongoni mwa watu tutakaowapima kweli?"`
      ),
      reveal([
        {
          termEn: "Base rate (prevalence)",
          termSw: "Kiwango cha msingi (prevalence)",
          defEn: "The share of the tested group who truly have the condition before testing.",
          defSw: "Sehemu ya kundi linalopimwa ambao kweli wana hali hiyo kabla ya kupimwa.",
        },
        {
          termEn: "Accuracy",
          termSw: "Usahihi",
          defEn: "(TP + TN) / everyone tested; easily inflated when most people are well.",
          defSw: "(TP + TN) / wote waliopimwa; unapandishwa kwa urahisi watu wengi wakiwa wazima.",
        },
        {
          termEn: "Pre-test probability",
          termSw: "Uwezekano kabla ya kipimo",
          defEn: "How likely this particular person is to have the condition before the test, based on setting, symptoms and history.",
          defSw: "Uwezekano wa mtu huyu mahususi kuwa na hali hiyo kabla ya kipimo, kulingana na mazingira, dalili na historia.",
        },
        {
          termEn: "False alarm",
          termSw: "Tahadhari ya uongo",
          defEn: "A false positive: the tool flags someone who does not have the condition.",
          defSw: "Chanya bandia: zana inamwonyesha mtu ambaye hana hali hiyo.",
        },
      ]),
      note(
        "Worked example: the same test in two places",
        "Mfano: kipimo kilekile mahali pawili",
        `Take one fictional test with sensitivity 95% and specificity 95%. A brochure would call it "95% accurate". Use it in two settings.

Setting 1 — community screening of 10,000 adults where 1% truly have the condition.

- Sick: 100. TP = 95, FN = 5.
- Well: 9,900. TN = 9,405, FP = 495.
- Positives = 95 + 495 = 590. PPV = 95 / 590 = about 16%.
- Accuracy = (95 + 9,405) / 10,000 = 95%.

So 5 out of 6 positive results are false alarms, even though the test is "95% accurate". If every positive were told "you have it", 495 well people would be frightened, and perhaps started on treatment they do not need.

Setting 2 — a referral clinic seeing 1,000 patients with symptoms, where 20% truly have the condition.

- Sick: 200. TP = 190, FN = 10.
- Well: 800. TN = 760, FP = 40.
- Positives = 190 + 40 = 230. PPV = 190 / 230 = about 83%.

Same test, same sensitivity, same specificity. PPV rose from about 16% to about 83% only because the base rate changed from 1% to 20%.

Now the useless test. In Setting 1, a "tool" that says negative to all 10,000 people gets 9,900 right: 99% accuracy, higher than the real test, and it catches no one. That is why accuracy alone is never enough.`,
        `Chukua kipimo kimoja cha kubuni chenye unyeti 95% na umahususi 95%. Kijitabu cha matangazo kingekiita "sahihi kwa 95%". Kitumie katika mazingira mawili.

Mazingira 1 — uchunguzi wa jamii wa watu wazima 10,000 ambapo 1% kweli wana hali hiyo.

- Wagonjwa: 100. TP = 95, FN = 5.
- Wazima: 9,900. TN = 9,405, FP = 495.
- Chanya = 95 + 495 = 590. PPV = 95 / 590 = takriban 16%.
- Usahihi = (95 + 9,405) / 10,000 = 95%.

Kwa hiyo matokeo chanya 5 kati ya 6 ni tahadhari za uongo, ingawa kipimo ni "sahihi kwa 95%". Kila aliye chanya angeambiwa "unao", watu wazima 495 wangeogopeshwa, na pengine kuanzishiwa matibabu wasiyoyahitaji.

Mazingira 2 — kliniki ya rufaa inayoona wagonjwa 1,000 wenye dalili, ambapo 20% kweli wana hali hiyo.

- Wagonjwa: 200. TP = 190, FN = 10.
- Wazima: 800. TN = 760, FP = 40.
- Chanya = 190 + 40 = 230. PPV = 190 / 230 = takriban 83%.

Kipimo kilekile, unyeti uleule, umahususi uleule. PPV ilipanda kutoka takriban 16% hadi takriban 83% kwa sababu tu kiwango cha msingi kilibadilika kutoka 1% hadi 20%.

Sasa kipimo kisicho na faida. Katika Mazingira 1, "zana" inayosema hasi kwa watu wote 10,000 inapata 9,900 sawa: usahihi wa 99%, juu kuliko kipimo halisi, na haimgundui mtu yeyote. Ndiyo sababu usahihi peke yake hautoshi kamwe.`
      ),
      quiz(
        "A tool keeps the same sensitivity and specificity, but is moved from a referral clinic to general community screening where the condition is much rarer. What happens?",
        "Zana inabaki na unyeti na umahususi uleule, lakini inahamishwa kutoka kliniki ya rufaa hadi uchunguzi wa jumla wa jamii ambapo hali ni nadra zaidi. Nini kinatokea?",
        [
          "PPV falls and a larger share of positives are false alarms",
          "PPV stays the same because the tool has not changed",
          "Sensitivity falls because there are fewer sick people",
          "PPV rises because there are more well people to clear",
        ],
        [
          "PPV inashuka na sehemu kubwa zaidi ya chanya ni tahadhari za uongo",
          "PPV inabaki ileile kwa sababu zana haijabadilika",
          "Unyeti unashuka kwa sababu kuna wagonjwa wachache",
          "PPV inapanda kwa sababu kuna watu wazima wengi zaidi wa kuondolewa",
        ],
        0,
        "PPV depends on the base rate. With a rarer condition, the well group is larger, so false positives grow relative to true positives. Sensitivity and specificity are properties of the tool and, in this idealised case, do not change; NPV is what rises.",
        "PPV inategemea kiwango cha msingi. Hali ikiwa nadra zaidi, kundi la walio wazima ni kubwa zaidi, kwa hiyo chanya bandia zinaongezeka ukilinganisha na chanya kweli. Unyeti na umahususi ni sifa za zana na, katika hali hii ya kinadharia, havibadiliki; NPV ndiyo inayopanda."
      ),
      scenario({
        titleEn: "Scenario: the '95% accurate' pitch",
        titleSw: "Hali: tangazo la 'sahihi kwa 95%'",
        situationEn:
          "A company pitches a phone-based screening tool to your county health team for use by CHPs in household visits. The brochure says '95% accurate'. The condition it screens for is uncommon in the general population.",
        situationSw:
          "Kampuni inatangaza zana ya uchunguzi wa awali kwa simu kwa timu ya afya ya kaunti yako itumiwe na wahamasishaji wa afya ya jamii (CHP) katika ziara za kaya. Kijitabu kinasema 'sahihi kwa 95%'. Hali inayochunguzwa si ya kawaida katika jamii kwa ujumla.",
        questionEn: "What is the most useful first question to ask?",
        questionSw: "Swali la kwanza lenye manufaa zaidi kuuliza ni lipi?",
        optionsEn: [
          "What were the sensitivity, specificity and base rate in your study, and what PPV should we expect at our base rate?",
          "Can you raise the accuracy to 99% before we buy?",
          "How many other counties have bought it?",
          "Does it work without internet?",
        ],
        optionsSw: [
          "Unyeti, umahususi na kiwango cha msingi katika utafiti wenu vilikuwa vipi, na tutarajie PPV gani kwa kiwango chetu cha msingi?",
          "Mnaweza kupandisha usahihi hadi 99% kabla hatujanunua?",
          "Kaunti ngapi nyingine zimeinunua?",
          "Inafanya kazi bila intaneti?",
        ],
        correctIndex: 0,
        hintsEn: [
          "Correct. These numbers let you work out how many false alarms CHPs will generate and whether facilities can cope with the referrals.",
          "A higher accuracy number can come from a test group with a lower base rate. It still says nothing about PPV in your setting.",
          "Popularity is not evidence. Other counties may have different base rates, or may not have measured results.",
          "A fair practical question, but ask it after you know whether the tool's results mean anything in your population.",
        ],
        hintsSw: [
          "Sahihi. Namba hizi zinakuwezesha kukokotoa tahadhari za uongo ambazo CHP watazalisha na kama vituo vinaweza kushughulikia rufaa.",
          "Namba ya juu ya usahihi inaweza kutoka kwa kundi la majaribio lenye kiwango cha chini cha msingi. Bado haisemi chochote kuhusu PPV katika mazingira yako.",
          "Umaarufu si ushahidi. Kaunti nyingine zinaweza kuwa na viwango tofauti vya msingi, au hazikupima matokeo.",
          "Ni swali zuri la vitendo, lakini liulize baada ya kujua kama matokeo ya zana yana maana yoyote kwa watu wako.",
        ],
        explainEn:
          "A single accuracy figure cannot be translated into the meaning of a positive result. Ask for all four boxes and the study base rate, then recompute PPV for the people you will actually screen.",
        explainSw:
          "Namba moja ya usahihi haiwezi kutafsiriwa kuwa maana ya matokeo chanya. Omba visanduku vyote vinne na kiwango cha msingi cha utafiti, kisha kokotoa upya PPV kwa watu utakaowachunguza kweli.",
      }),
      note(
        "Try it: explain a result with natural frequencies",
        "Jaribu: eleza matokeo kwa idadi za kawaida",
        `Patients and managers understand counts better than percentages. Practise turning Setting 1 from the worked example into a short explanation, in English and in Kiswahili, that uses only whole numbers of people:

"Imagine 10,000 adults in the community. About 100 have the condition. The test finds 95 of them. Of the 9,900 who are well, the test wrongly flags about 495. So about 590 people get a positive result, and only 95 of them really have the condition. That is why a positive result means 'come for a confirmatory test', not 'you are sick'."

Say it out loud to a friend or colleague. If they can repeat the main point back to you, your explanation works.`,
        `Wagonjwa na wasimamizi wanaelewa idadi vizuri kuliko asilimia. Jizoeze kubadilisha Mazingira 1 ya mfano kuwa maelezo mafupi, kwa Kiingereza na kwa Kiswahili, yanayotumia idadi kamili za watu tu:

"Fikiria watu wazima 10,000 katika jamii. Takriban 100 wana hali hii. Kipimo kinawagundua 95 kati yao. Kati ya 9,900 walio wazima, kipimo kinawaonyesha kimakosa takriban 495. Kwa hiyo takriban watu 590 wanapata matokeo chanya, na ni 95 tu kati yao kweli wana hali hiyo. Ndiyo sababu matokeo chanya yanamaanisha 'njoo kwa kipimo cha uthibitisho', si 'wewe ni mgonjwa'."

Yaseme kwa sauti kwa rafiki au mfanyakazi mwenzako. Akiweza kukurudishia hoja kuu, maelezo yako yanafanya kazi.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- The base rate decides what a positive result means.
- Rare condition plus imperfect specificity equals many false alarms.
- Accuracy can look excellent for a tool that catches no one.
- Next unit: calibration — whether a score of 0.70 really means "about 7 in 10".`,
        `- Kiwango cha msingi kinaamua maana ya matokeo chanya.
- Hali nadra pamoja na umahususi usio kamili ni sawa na tahadhari nyingi za uongo.
- Usahihi unaweza kuonekana bora kwa zana isiyomgundua mtu yeyote.
- Somo linalofuata: urekebishaji (calibration) — kama alama ya 0.70 kweli inamaanisha "takriban 7 kati ya 10".`
      ),
    ],
  },

  // ------------------------------------------------------------------ u4
  {
    id: "hlt-i-u4",
    titleEn: "Calibration: does 0.70 mean seven in ten?",
    titleSw: "Urekebishaji: je 0.70 inamaanisha saba kati ya kumi?",
    cards: [
      note(
        "A probability is a promise about a group",
        "Uwezekano ni ahadi kuhusu kundi",
        `Sensitivity and specificity tell you how a yes-or-no test behaves. Many clinical decision support tools now output a probability: "chance of deterioration: 0.70". Calibration asks a different question: among patients who received about 0.70, did about 70 in 100 actually deteriorate?

If 90 in 100 deteriorate, the tool is under-confident: it said 0.70 when the group was closer to 0.90. If only 40 deteriorate, it is over-confident. Over-confident scores send people into pathways they do not need, or they reassure a team that should still watch the bed.

Calibration is measured on the people you actually serve, not on the vendor's brochure cohort. A model calibrated in a private Nairobi ICU can be mis-calibrated in a rural ward where recording of vital signs is twice a day, not continuous.

You cannot invent a national accuracy figure. You can keep a local count: for each band of scores, how many patients had the event. That table is more honest than a single "AI is 90% accurate" sentence.`,
        `Unyeti na umahususi vinakuambia kipimo cha ndiyo-au-hapana kinafanyaje. Zana nyingi za msaada wa uamuzi wa kitabibu sasa zinatoa uwezekano: "uwezekano wa hali kuwa mbaya: 0.70". Urekebishaji (calibration) unauliza swali tofauti: kati ya wagonjwa waliopewa takriban 0.70, je takriban 70 kati ya 100 kweli walizidiwa?

Ikiwa 90 kati ya 100 wanazidiwa, zana haina uhakika wa kutosha: ilisema 0.70 wakati kundi lilikuwa karibu na 0.90. Ikiwa 40 tu wanazidiwa, ina uhakika mno. Alama zenye uhakika mno zinapeleka watu kwenye njia wasizohitaji, au zinatia moyo timu ambayo bado inapaswa kuangalia kitanda.

Urekebishaji hupimwa kwa watu unaowahudumia kweli, si kundi la kijitabu cha muuzaji. Modeli iliyorekebishwa katika ICU ya kibinafsi Nairobi inaweza kuwa nje ya urekebishaji katika wodi ya vijijini ambapo dalili muhimu zinachukuliwa mara mbili kwa siku, si mfululizo.

Huwezi kubuni namba ya taifa ya usahihi. Unaweza kuweka hesabu ya eneo: kwa kila kundi la alama, wagonjwa wangapi walipata tukio. Jedwali hilo ni la uaminifu zaidi kuliko sentensi moja "AI ni sahihi kwa 90%".`
      ),
      reveal([
        {
          termEn: "Calibration",
          termSw: "Urekebishaji (calibration)",
          defEn: "Whether predicted probabilities match observed frequencies in the people you serve.",
          defSw: "Kama uwezekano uliotabiriwa unalingana na marudio yaliyoonekana kwa watu unaowahudumia.",
        },
        {
          termEn: "Over-confident",
          termSw: "Yenye uhakika mno",
          defEn: "Scores are too high relative to how often the event happens.",
          defSw: "Alama ziko juu mno ikilinganishwa na marudio ya tukio.",
        },
        {
          termEn: "Under-confident",
          termSw: "Yenye uhakika mdogo mno",
          defEn: "Scores are too low relative to how often the event happens.",
          defSw: "Alama ziko chini mno ikilinganishwa na marudio ya tukio.",
        },
        {
          termEn: "Score band",
          termSw: "Kundi la alama",
          defEn: "A slice of similar probabilities, for example 0.60 to 0.70, counted together.",
          defSw: "Kipande cha uwezekano unaofanana, kwa mfano 0.60 hadi 0.70, unaohesabiwa pamoja.",
        },
      ]),
      note(
        "Worked example: 100 alerts labelled 0.70",
        "Mfano: tahadhari 100 zilizoandikwa 0.70",
        `Imagine a fictional 40-bed ward in Kericho. For one quarter, 100 patients received a deterioration score between 0.65 and 0.75, which staff round as "about 0.70". Chart review later finds that 38 of those 100 actually deteriorated.

Step 1. Expected if calibrated: about 70 events. Observed: 38. The score is over-confident.

Step 2. Watch behaviour. The night team treats 0.70 as "almost sure" and pulls a clinician from another bay. After the count, they learn that most 0.70s were stable. Alert fatigue from Unit 1 is now mixed with misplaced certainty.

Step 3. The medical superintendent does not publish "our AI is 70% accurate". Accuracy is the wrong word here. They plot three other bands too: 0.20, 0.40 and 0.90, each with its own count. Only then do they decide whether to retune the threshold, add a third observation round, or pause the tool.

Step 4. They write one sentence for the ward board: "A score of 0.70 on this ward last quarter meant about 4 in 10, not 7 in 10. See the patient."`,
        `Fikiria wodi ya kubuni yenye vitanda 40 huko Kericho. Kwa robo moja, wagonjwa 100 walipata alama ya kuzidiwa kati ya 0.65 na 0.75, ambayo wafanyakazi wanaizungusha kama "takriban 0.70". Ukaguzi wa faili baadaye unapata kwamba 38 kati ya 100 hao kweli walizidiwa.

Hatua ya 1. Ikitrekebishwa: takriban matukio 70. Yaliyoonekana: 38. Alama ina uhakika mno.

Hatua ya 2. Angalia tabia. Timu ya usiku inachukulia 0.70 kama "karibu uhakika" na inamvuta mhudumu kutoka sehemu nyingine. Baada ya hesabu, wanaona kwamba wengi wa 0.70 walikuwa tulivu. Uchovu wa tahadhari wa Somo la 1 sasa umechanganyika na uhakika usiofaa.

Hatua ya 3. Msimamizi wa matibabu hachapishi "AI yetu ni sahihi kwa 70%". Usahihi ni neno lisilo sahihi hapa. Wanachora makundi mengine matatu pia: 0.20, 0.40 na 0.90, kila moja na hesabu yake. Ndipo wanaamua kama kurekebisha kikomo, kuongeza mzunguko wa tatu wa vipimo, au kusimamisha zana.

Hatua ya 4. Wanaandika sentensi moja kwa ubao wa wodi: "Alama ya 0.70 kwenye wodi hii robo iliyopita ilimaanisha takriban 4 kati ya 10, si 7 kati ya 10. Mwone mgonjwa."`
      ),
      scenario({
        titleEn: "Scenario: the brochure probability",
        titleSw: "Hali: uwezekano wa kijitabu",
        situationEn:
          "A vendor says their early-warning score is 'well calibrated at 0.80'. Their study was in a high-dependency unit with continuous monitors. Your sub-county hospital records vital signs at 6 am and 6 pm.",
        situationSw:
          "Muuzaji anasema alama yao ya onyo la mapema 'imekalibrishwa vizuri kwa 0.80'. Utafiti wao ulikuwa katika kitengo cha utegemezi wa juu chenye vifaa vya kuendelea. Hospitali yako ya kaunti ndogo inarekodi dalili muhimu saa 12 asubuhi na saa 12 jioni.",
        questionEn: "What is the strongest next step?",
        questionSw: "Hatua yenye nguvu zaidi inayofuata ni ipi?",
        optionsEn: [
          "Adopt 0.80 as the meaning of the score, because calibration was already proven",
          "Run a local count of score bands versus events for several weeks before treating 0.80 as 8 in 10 here",
          "Raise every score by 0.10 to be safer",
          "Ask the vendor for a single accuracy percentage instead",
        ],
        optionsSw: [
          "Tumia 0.80 kama maana ya alama, kwa sababu urekebishaji tayari ulithibitishwa",
          "Fanya hesabu ya eneo ya makundi ya alama dhidi ya matukio kwa wiki kadhaa kabla ya kuchukulia 0.80 kama 8 kati ya 10 hapa",
          "Ongeza kila alama kwa 0.10 ili kuwa salama zaidi",
          "Mwombe muuzaji asilimia moja ya usahihi badala yake",
        ],
        correctIndex: 1,
        hintsEn: [
          "Their monitors and your twice-daily chart are different data. Calibration does not travel automatically.",
          "Correct. Local frequencies answer the only question that matters on this ward.",
          "Adding 0.10 to every score is not a calibration method; it just shifts over-confidence.",
          "Accuracy was the trap in Unit 3. You need observed frequencies, not a headline.",
        ],
        hintsSw: [
          "Vifaa vyao na chati yako ya mara mbili kwa siku ni data tofauti. Urekebishaji hausafiri kiotomatiki.",
          "Sahihi. Marudio ya eneo yanajibu swali pekee linalohusu wodi hii.",
          "Kuongeza 0.10 kwenye kila alama si njia ya urekebishaji; inasogeza tu uhakika mno.",
          "Usahihi ulikuwa mtego katika Somo la 3. Unahitaji marudio yaliyoonekana, si kichwa cha habari.",
        ],
        explainEn:
          "Calibration is local. Count your own score bands before you let a brochure probability drive a bed.",
        explainSw:
          "Urekebishaji ni wa eneo. Hesabu makundi yako ya alama kabla uwezekano wa kijitabu haujaendesha kitanda.",
      }),
      quiz(
        "100 patients scored about 0.90. Later, 55 had the event. The tool is:",
        "Wagonjwa 100 walipata alama ya takriban 0.90. Baadaye, 55 walipata tukio. Zana:",
        [
          "Well calibrated, because more than half had the event",
          "Over-confident: 0.90 promised about 90 events, and 55 is far fewer",
          "Under-confident: it should have said 0.55 to everyone",
          "95% accurate, by averaging 0.90 and 0.55",
        ],
        [
          "Imekalibrishwa vizuri, kwa sababu zaidi ya nusu walipata tukio",
          "Ina uhakika mno: 0.90 iliahidi takriban matukio 90, na 55 ni machache sana",
          "Ina uhakika mdogo mno: ilipaswa kusema 0.55 kwa kila mtu",
          "Sahihi kwa 95%, kwa kuweka wastani wa 0.90 na 0.55",
        ],
        1,
        "Calibration compares the promised rate with the observed rate in that band. 55 versus about 90 is over-confidence. Averaging the two numbers is not a performance metric.",
        "Urekebishaji unalinganisha kiwango kilichoahidiwa na kilichoonekana katika kundi hilo. 55 dhidi ya takriban 90 ni uhakika mno. Wastani wa namba hizo mbili si kipimo cha utendaji."
      ),
      note(
        "Try it: a three-band table",
        "Jaribu: jedwali la makundi matatu",
        `On paper, draw three rows labelled 0.20, 0.50 and 0.80. Invent a fictional month with 50 patients in each row (150 total). Pick observed event counts that add up, for example 8, 22 and 30.

Write one plain sentence per row for the ward handover: "Among patients near 0.20, 8 of 50 had the event, so treat 0.20 as about 1 in 6 here, not a clearance."

Keep the table fictional unless you have permission to use real counts, and never put names in it.`,
        `Kwenye karatasi, chora safu tatu zilizoandikwa 0.20, 0.50 na 0.80. Buni mwezi wa kubuni wenye wagonjwa 50 katika kila safu (jumla 150). Chagua idadi za matukio zinazoongezeka, kwa mfano 8, 22 na 30.

Andika sentensi moja rahisi kwa kila safu kwa mabadilishano ya zamu: "Kati ya wagonjwa karibu na 0.20, 8 kati ya 50 walipata tukio, kwa hiyo chukulia 0.20 kama takriban 1 kati ya 6 hapa, si kibali cha kwenda."

Weka jedwali liwe la kubuni isipokuwa una ruhusa ya kutumia idadi halisi, na usiweke majina ndani yake.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- A score of 0.70 is a group promise, not a diagnosis.
- Measure calibration on your ward's recording schedule, not the brochure's ICU.
- Next: referral pathways — even a well-calibrated score cannot skip MOH routes.`,
        `- Alama ya 0.70 ni ahadi ya kundi, si utambuzi.
- Pima urekebishaji kwa ratiba ya kurekodi ya wodi yako, si ICU ya kijitabu.
- Ifuatayo: njia za rufaa — hata alama iliyokalibrishwa vizuri haiwezi kuruka njia za MOH.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u5
  {
    id: "hlt-i-u5",
    titleEn: "Referral pathways stay human",
    titleSw: "Njia za rufaa zinabaki za kibinadamu",
    cards: [
      note(
        "The route is policy, not a model output",
        "Njia ni sera, si tokeo la modeli",
        `A referral pathway is the agreed sequence from community to facility to higher-level care. In Kenya that typically runs: household and community health promoter (CHP) under universal health coverage (UHC), then dispensary or health centre, then hospital, with emergencies using 999, 112 or the ambulance short code 719.

AI can help a CHP draft the referral note, remind staff of missing fields, or sort a queue. It cannot open a new destination: a kiosk, an unlicensed chemist, or "stay home, the score is low". Those shortcuts break MOH and county protocols and leave nobody accountable.

When you design or buy a tool, write the pathway first on paper. Mark each box: who sees the patient, what they may decide, and what they must hand on. Then ask where the model sits. If you cannot point to a box, the tool is not ready.

Reported rural pilots, including AmeriAfriAI as described for point-of-care reading of rapid tests with offline analysis, still sit inside a facility pathway if they are used at all. They are not a licence to quote a success rate, and they are not a parallel health system.`,
        `Njia ya rufaa ni mfuatano uliokubaliwa kutoka jamii hadi kituo hadi huduma ya kiwango cha juu. Nchini Kenya kwa kawaida inakwenda: kaya na mhamasishaji wa afya ya jamii (CHP) chini ya bima ya afya kwa wote (UHC), kisha zahanati au kituo cha afya, kisha hospitali, na dharura zikitumia 999, 112 au namba fupi ya ambulansi 719.

AI inaweza kusaidia CHP kuandaa dokezo la rufaa, kuwakumbusha wafanyakazi sehemu zilizokosekana, au kupanga foleni. Haiwezi kufungua mwisho mpya: kioski, duka la dawa lisilo na leseni, au "kaa nyumbani, alama ni chini". Njia hizo za mkato zinavunja itifaki za MOH na kaunti na haziachi mtu yeyote anayewajibika.

Unapobuni au kununua zana, andika njia kwanza kwenye karatasi. Tia alama kila kisanduku: nani anamwona mgonjwa, anaweza kuamua nini, na nini lazima apitishe. Kisha uliza modeli inakaa wapi. Huwezi ukielekeza kisanduku, zana haijawa tayari.

Majaribio yaliyoripotiwa ya vijijini, ikiwemo AmeriAfriAI kama ilivyoelezwa kwa kusoma vipimo vya haraka mahali pa huduma kwa uchambuzi nje ya mtandao, bado yakaa ndani ya njia ya kituo yakitumika. Si leseni ya kunukuu kiwango cha mafanikio, wala si mfumo sambamba wa afya.`
      ),
      reveal([
        {
          termEn: "Referral pathway",
          termSw: "Njia ya rufaa",
          defEn: "The agreed route from home to the right facility, set by MOH and the county.",
          defSw: "Njia iliyokubaliwa kutoka nyumbani hadi kituo sahihi, iliyowekwa na MOH na kaunti.",
        },
        {
          termEn: "Escalation",
          termSw: "Kupandisha kesi",
          defEn: "Moving a patient to a higher level of care when the current level cannot finish the job.",
          defSw: "Kumhamisha mgonjwa kwenye kiwango cha juu cha huduma kiwango cha sasa kisipoweza kumaliza kazi.",
        },
        {
          termEn: "Counter-referral",
          termSw: "Rufaa ya kurudi",
          defEn: "Sending information and the patient back to the referring site with a plan.",
          defSw: "Kutuma taarifa na mgonjwa kurudi kituo kilichotoa rufaa pamoja na mpango.",
        },
        {
          termEn: "Accountable person",
          termSw: "Mtu anayewajibika",
          defEn: "The named clinician, CHP or in-charge who owns the decision, including when they follow or override a tool.",
          defSw: "Mhudumu, CHP au msimamizi aliye na jina anayemiliki uamuzi, pamoja na anapofuata au kubatilisha zana.",
        },
      ]),
      note(
        "Worked example: a score that tried to skip the health centre",
        "Mfano: alama iliyojaribu kuruka kituo cha afya",
        `A fictional CHP in West Pokot uses a phone tool that outputs "community manageable" or "refer". A child with fast breathing scores "community manageable" because the form had no field for chest in-drawing.

Step 1. The CHP sees the chest pulling in. Pathway says refer to the health centre now, not wait for a weekly outreach.

Step 2. She writes a referral note in the approved book: what she saw, what the tool said, why she overrode it. That note is for the receiving clinician, not for a public chatbot.

Step 3. The health centre starts oxygen and treatment. Two days later they send a counter-referral plan. The tool is not copied on that plan unless it is an approved facility system.

Step 4. The sub-county team later finds that 1 in 4 "community manageable" labels in children under five were overridden for danger signs. They do not advertise a failure rate as a national statistic. They change the form and retrain CHPs on the existing IMCI-style danger signs.

The pathway absorbed the miss. A kiosk would not have.`,
        `CHP wa kubuni huko West Pokot anatumia zana ya simu inayotoa "inashughulikiwa jamii" au "rufaa". Mtoto anayepumua haraka anapata "inashughulikiwa jamii" kwa sababu fomu haikuwa na sehemu ya kuvutika kwa kifua.

Hatua ya 1. CHP anaona kifua kikivutika ndani. Njia inasema rufaa kituo cha afya sasa, si kusubiri ufikiaji wa kila wiki.

Hatua ya 2. Anaandika dokezo la rufaa kwenye daftari lililoidhinishwa: alichoona, zana ilichosema, kwa nini alibatilisha. Dokezo hilo ni la mhudumu anayepokea, si la chatbot ya umma.

Hatua ya 3. Kituo cha afya kinaanza oksijeni na tiba. Siku mbili baadaye wanatuma mpango wa rufaa ya kurudi. Zana hainakiliwi kwenye mpango huo isipokuwa ni mfumo wa kituo ulioidhinishwa.

Hatua ya 4. Timu ya kaunti ndogo baadaye inapata kwamba 1 kati ya 4 ya lebo za "inashughulikiwa jamii" kwa watoto chini ya mitano zilibatilishwa kwa dalili za hatari. Hawatangazi kiwango cha kushindwa kama takwimu ya taifa. Wanabadilisha fomu na kuwafunza CHP tena kuhusu dalili za hatari zilizopo.

Njia ilimeza kosa. Kioski halingemeza.`
      ),
      scenario({
        titleEn: "Scenario: the parallel destination",
        titleSw: "Hali: mwisho sambamba",
        situationEn:
          "A county officer proposes adding a chatbot button on the CHP phone: if the model is more than 80% sure, send the patient to a partner telemedicine line instead of the health centre, 'to reduce crowding'.",
        situationSw:
          "Afisa wa kaunti anapendekeza kuongeza kitufe cha chatbot kwenye simu ya CHP: modeli ikiwa na uhakika zaidi ya 80%, mpeleke mgonjwa kwenye simu ya tiba ya mbali ya mshirika badala ya kituo cha afya, 'kupunguza msongamano'.",
        questionEn: "What is the sound governance response?",
        questionSw: "Jibu gani la usimamizi lina busara?",
        optionsEn: [
          "Approve it, because 80% sure is high enough to skip a queue",
          "Refuse a parallel destination: keep MOH pathways, and if telemedicine is used at all it must be an endorsed step with an accountable clinician",
          "Pilot it for three months without telling the health centre",
          "Allow it only at night, when the health centre is closed, without a written protocol",
        ],
        optionsSw: [
          "Idhinisha, kwa sababu uhakika wa 80% unatosha kuruka foleni",
          "Kataa mwisho sambamba: weka njia za MOH, na tiba ya mbali ikitumika iwe hatua iliyoidhinishwa yenye mhudumu anayewajibika",
          "Ijaribu kwa miezi mitatu bila kuambia kituo cha afya",
          "Iruhusu usiku tu, kituo kikifungwa, bila itifaki iliyoandikwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Unit 4: 80% is a group promise, not a ticket out of the pathway. Crowding is a staffing problem.",
          "Correct. New destinations need protocol, accountability and the receiving site's knowledge.",
          "Hiding a pilot from the receiving facility breaks continuity and consent for data flows.",
          "Night-time is when pathways and ambulances matter more, not less.",
        ],
        hintsSw: [
          "Somo la 4: 80% ni ahadi ya kundi, si tiketi ya kutoka njia. Msongamano ni tatizo la wafanyakazi.",
          "Sahihi. Mwisho mpya unahitaji itifaki, uwajibikaji na ujuzi wa kituo kinachopokea.",
          "Kuficha jaribio kutoka kituo kinachopokea kunavunja mwendelezo na ridhaa ya mtiririko wa data.",
          "Usiku ndipo njia na ambulansi zinapohitajika zaidi, si kidogo.",
        ],
        explainEn:
          "Tools sit inside MOH pathways. They do not create private shortcuts, even to reduce queues.",
        explainSw:
          "Zana zinakaa ndani ya njia za MOH. Haziundi njia za mkato za kibinafsi, hata kupunguza foleni.",
      }),
      quiz(
        "A CHP's phone tool says 'manage at home' but the child has a danger sign. The CHP should:",
        "Zana ya simu ya CHP inasema 'simamia nyumbani' lakini mtoto ana dalili ya hatari. CHP anapaswa:",
        [
          "Follow the tool to protect the vendor's accuracy numbers",
          "Refer along the MOH pathway, document the override, and not paste identifiers into a public bot",
          "Ask a second public chatbot to break the tie",
          "Wait for the next scheduled household visit in two weeks",
        ],
        [
          "Fuata zana kulinda namba za usahihi za muuzaji",
          "Toa rufaa kwenye njia ya MOH, andika ubatilishaji, na usibandike vitambulishi kwenye bot ya umma",
          "Uliza chatbot ya pili ya umma itatue fungo",
          "Subiri ziara ijayo ya kaya baada ya wiki mbili",
        ],
        1,
        "Danger signs own the decision. Overrides belong in the approved record, not in a public chat.",
        "Dalili za hatari ndizo zinazomiliki uamuzi. Ubatilishaji unaingia kwenye rekodi iliyoidhinishwa, si gumzo la umma."
      ),
      note(
        "Try it: box the pathway",
        "Jaribu: weka njia visandukuni",
        `Draw five boxes for a sub-county you know: household, CHP, dispensary, health centre, hospital. Write who may decide in each box, and write 719 / 999 / 112 on an arrow that skips boxes for emergencies.

Then mark with a pencil where an AI helper could sit (draft a note, sort a queue) and put a cross where it must not sit (choose destination, name a medicine, keep a danger sign at home).

If a pencil mark has no accountable name next to it, erase the mark.`,
        `Chora visanduku vitano vya kaunti ndogo unayoijua: kaya, CHP, zahanati, kituo cha afya, hospitali. Andika nani anaweza kuamua katika kila kisanduku, na andika 719 / 999 / 112 kwenye mshale unaoruka visanduku kwa dharura.

Kisha tia alama kwa penseli mahali msaidizi wa AI angekaa (kuandaa dokezo, kupanga foleni) na tia msalaba mahali hapaswi kukaa (kuchagua mwisho, kutaja dawa, kuweka dalili ya hatari nyumbani).

Alama ya penseli isipokuwa na jina la mtu anayewajibika kando yake, ifute.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Pathways are MOH and county policy. Models do not add destinations.
- Document overrides on the referral note. Do not paste names into public tools.
- Next: documentation assistants, where the risk is an invented finding in the record.`,
        `- Njia ni sera ya MOH na kaunti. Modeli haziongezi mwisho.
- Andika ubatilishaji kwenye dokezo la rufaa. Usibandike majina kwenye zana za umma.
- Ifuatayo: wasaidizi wa kumbukumbu, ambapo hatari ni ugunduzi uliobuniwa kwenye rekodi.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u6
  {
    id: "hlt-i-u6",
    titleEn: "Documentation burden and invented findings",
    titleSw: "Mzigo wa kumbukumbu na ugunduzi uliobuniwa",
    cards: [
      note(
        "A note that was never examined",
        "Dokezo ambalo halikuchunguzwa",
        `Documentation burden is the hours clinicians spend writing what they already did. Language models can draft a SOAP note (subjective, objective, assessment, plan) from a messy handover. That is useful only if every sentence is grounded in the record in front of you.

Hallucination in a clinic note is not a stylistic problem. "Chest clear" when nobody listened, "HIV negative" when no test exists in the file, or a medicine the patient was never given, becomes the next shift's truth. The Data Protection Act still applies: you must not paste names, IDs or HIV status into a public chatbot to "tidy the note".

The safe workflow is: draft inside an approved system or from de-identified fragments; require the author to tick each objective finding; forbid the model from adding tests, signs or drugs that were not in the input; keep the clinician's signature as the legal act.

Speed is not quality. A 40-second note that invents a finding is slower than a 4-minute note that is true, because the next error will cost a ward round.`,
        `Mzigo wa kumbukumbu ni saa ambazo wahudumu hutumia kuandika kile ambacho tayari wamefanya. Modeli za lugha zinaweza kuandaa dokezo la SOAP (subjective, objective, assessment, plan) kutoka kwa makabidhiano yasiyo nadhifu. Hiyo ina manufaa tu kila sentensi ikiwa imejengwa juu ya rekodi iliyo mbele yako.

Kubuni majibu (hallucination) katika dokezo la kliniki si tatizo la mtindo. "Kifua safi" wakati hakuna aliyesikiliza, "VVU hasi" wakati hakuna kipimo kwenye faili, au dawa ambayo mgonjwa hakupewa, inakuwa ukweli wa zamu inayofuata. Sheria ya Ulinzi wa Data bado inatumika: usibandike majina, vitambulisho au hali ya VVU kwenye chatbot ya umma "kupanga dokezo".

Mtiririko salama ni: andaa ndani ya mfumo ulioidhinishwa au kutoka vipande visivyo na vitambulishi; mhudumu ati tiki kila ugunduzi wa objective; kataza modeli kuongeza vipimo, dalili au dawa ambazo hazikuwa kwenye maingizo; weka saini ya mhudumu kama kitendo cha kisheria.

Kasi si ubora. Dokezo la sekunde 40 linalobuni ugunduzi ni polepole kuliko dokezo la dakika 4 lililo kweli, kwa sababu kosa linalofuata litagharimu mzunguko wa wodi.`
      ),
      reveal([
        {
          termEn: "SOAP note",
          termSw: "Dokezo la SOAP",
          defEn: "A structure: subjective story, objective findings, assessment, plan.",
          defSw: "Muundo: hadithi ya mgonjwa, matokeo ya uchunguzi, tathmini, mpango.",
        },
        {
          termEn: "Grounding",
          termSw: "Kujenga juu ya rekodi",
          defEn: "Every drafted sentence must map to something already in the input or the file.",
          defSw: "Kila sentensi iliyoandaliwa lazima ilingane na kitu kilichomo kwenye maingizo au faili.",
        },
        {
          termEn: "Invented finding",
          termSw: "Ugunduzi uliobuniwa",
          defEn: "A sign, test or drug the model wrote that nobody observed or ordered.",
          defSw: "Dalili, kipimo au dawa ambayo modeli iliandika ambayo hakuna aliyiona au kuagiza.",
        },
        {
          termEn: "Author of record",
          termSw: "Mwandishi wa rekodi",
          defEn: "The clinician whose name sits on the note and who is accountable for it.",
          defSw: "Mhudumu ambaye jina lake liko kwenye dokezo na anayewajibika kwake.",
        },
      ]),
      note(
        "Worked example: the extra 'chest clear'",
        "Mfano: 'kifua safi' ya ziada",
        `A fictional intern in Nyeri dictates: "32-year-old, three days of cough, fever 38.2, not examined yet — queue still outside." A public chatbot, given the full name and SHA number, returns a neat SOAP that includes "chest clear, no added sounds, malaria test negative, started amoxicillin".

Count the inventions: a chest exam that did not happen, a malaria result that is not in the lab book, a drug that was not prescribed, plus two identifiers now sitting with a public vendor.

The intern deletes the chat — too late to unsay the paste — and writes a four-line note by hand: symptoms, temperature, "chest not yet examined", plan to examine next. That note is shorter and safer.

The in-charge's rule the next morning: dictation tools, if any, run only inside the facility system; the prompt says "use only these bullets; if a finding is missing, write 'not examined' rather than guessing"; identifiers stay out of public APIs.`,
        `Intern wa kubuni huko Nyeri anaeleza: "Mtu wa miaka 32, kikohozi cha siku tatu, homa 38.2, bado hajahunguzwa — foleni bado nje." Chatbot ya umma, ikipewa jina kamili na namba ya SHA, inarudisha SOAP nadhifu yenye "kifua safi, hakuna sauti za ziada, kipimo cha malaria hasi, ameanzishiwa amoxicillin".

Hesabu yaliyobuniwa: uchunguzi wa kifua ambao haukufanyika, majibu ya malaria ambayo hayako kwenye daftari la maabara, dawa ambayo haikuagizwa, pamoja na vitambulishi viwili sasa vikiwa kwa muuzaji wa umma.

Intern anafuta gumzo — imechelewa kujuta kubandika — na anaandika dokezo la mistari minne kwa mkono: dalili, joto, "kifua bado hajahunguzwa", mpango wa kuchunguza baadaye. Dokezo hilo ni fupi na salama zaidi.

Kanuni ya msimamizi asubuhi inayofuata: zana za kuamuru, kama zipo, zinafanya kazi ndani ya mfumo wa kituo tu; maagizo yanasema "tumia pointi hizi tu; ugunduzi ukikosekana, andika 'hajachunguzwa' badala ya kukisia"; vitambulishi vinabaki nje ya API za umma.`
      ),
      scenario({
        titleEn: "Scenario: catch-up Sunday notes",
        titleSw: "Hali: dokezo za Jumapili za kufukuzana",
        situationEn:
          "After a brutal Saturday, five admission notes are still blank. A colleague offers a public chatbot prompt: 'Here are the names and files; generate SOAP for all five so we can go home.'",
        situationSw:
          "Baada ya Jumamosi ngumu, dokezo tano za kulazwa bado tupu. Mwenzako anatoa maagizo ya chatbot ya umma: 'Hapa kuna majina na faili; tengeneza SOAP kwa zote tano ili tuende nyumbani.'",
        questionEn: "What should you do?",
        questionSw: "Unapaswa kufanya nini?",
        optionsEn: [
          "Paste the five files; unfinished notes are a bigger legal risk than a public tool",
          "Refuse the paste; stay late or return with the in-charge's plan, and write only what was examined",
          "Paste files with names removed but keep HIV results in the prompt for 'context'",
          "Let the chatbot write them and sign the colleague's name instead of yours",
        ],
        optionsSw: [
          "Bandika faili tano; dokezo zisizokamilika ni hatari kubwa ya kisheria kuliko zana ya umma",
          "Kataa kubandika; kaa au rudi na mpango wa msimamizi, na andika tu kilichochunguzwa",
          "Bandika faili bila majina lakini weka majibu ya VVU kwenye maagizo kwa 'muktadha'",
          "Acha chatbot iziandike na usaini jina la mwenzako badala ya lako",
        ],
        correctIndex: 1,
        hintsEn: [
          "Blank notes are a problem. Leaking five files is a second, worse problem, and invented findings will follow.",
          "Correct. The author of record cannot outsource the examination, the identifiers, or the signature.",
          "HIV status is sensitive personal data even without a name sitting next to it in the same paste.",
          "Signing another person's name is a false record on top of a leak.",
        ],
        hintsSw: [
          "Dokezo tupu ni tatizo. Kuvujisha faili tano ni tatizo la pili, baya zaidi, na ugunduzi uliobuniwa utafuata.",
          "Sahihi. Mwandishi wa rekodi hawezi kutoa nje uchunguzi, vitambulishi, wala saini.",
          "Hali ya VVU ni data binafsi nyeti hata jina lisipokaa kando yake kwenye kubandika kule.",
          "Kusaini jina la mtu mwingine ni rekodi ya uongo juu ya uvujaji.",
        ],
        explainEn:
          "Notes wait for the person who examined the patient. Public bots do not inherit the file.",
        explainSw:
          "Dokezo zinasubiri mtu aliyemchunguza mgonjwa. Bot za umma hazirithi faili.",
      }),
      quiz(
        "What instruction most reduces invented findings in a draft SOAP?",
        "Ni maagizo gani yanayopunguza zaidi ugunduzi uliobuniwa katika SOAP iliyoandaliwa?",
        [
          "Write in a confident clinical tone so the next shift trusts it",
          "Use only the bullets I pasted; if a finding is absent, write 'not examined' or 'not in file'; do not add tests or drugs",
          "Infer likely HIV status from the symptoms to complete the record",
          "Fill every SOAP heading even when the input is empty",
        ],
        [
          "Andika kwa sauti ya kitabibu yenye uhakika ili zamu inayofuata iiamini",
          "Tumia pointi nilizobandika tu; ugunduzi ukikosekana, andika 'hajachunguzwa' au 'hayumo kwenye faili'; usiongeze vipimo wala dawa",
          "Kisia hali ya VVU kutoka dalili ili kukamilisha rekodi",
          "Jaza kila kichwa cha SOAP hata maingizo yakiwa tupu",
        ],
        1,
        "Forbidding invention and requiring 'not examined' is the lock. Confident tone and complete headings are how hallucinations hide.",
        "Kukataza kubuni na kuhitaji 'hajachunguzwa' ndiyo kufuli. Sauti yenye uhakika na vichwa kamili ndivyo hallucination hujificha."
      ),
      note(
        "Try it: red-pen a draft",
        "Jaribu: kalamu nyekundu kwenye rasimu",
        `Write five fictional bullets a clinician might dictate (no real names). Then write a "model draft" that secretly adds one invented exam finding and one invented drug.

Swap with a colleague if you can. Their job is to strike anything not in the five bullets. Time how long the strike-through takes. That is the review cost you must budget whenever you use a documentation helper.`,
        `Andika pointi tano za kubuni mhudumu angeeleza (bila majina halisi). Kisha andika "rasimu ya modeli" inayoongeza kwa siri ugunduzi mmoja wa uchunguzi uliobuniwa na dawa moja iliyobuniwa.

Badilishana na mwenzako ukiweza. Kazi yao ni kupiga mstari chochote kisicho kwenye pointi tano. Pima muda wa kupiga mstari. Hiyo ndiyo gharama ya ukaguzi unayopaswa kupanga kila unapotumia msaidizi wa kumbukumbu.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Documentation helpers draft; the signing clinician owns every finding.
- Invented signs and drugs are safety incidents, not grammar slips.
- Next: equity — whose data trained the tool, and who still waits in a rural queue.`,
        `- Wasaidizi wa kumbukumbu wanaandaa; mhudumu anayesaini anamiliki kila ugunduzi.
- Dalili na dawa zilizobuniwa ni visa vya usalama, si makosa ya sarufi.
- Ifuatayo: usawa — data ya nani ilifunza zana, na nani bado anasubiri kwenye foleni ya vijijini.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u7
  {
    id: "hlt-i-u7",
    titleEn: "Equity: rural wards and private hospitals",
    titleSw: "Usawa: wodi za vijijini na hospitali za kibinafsi",
    cards: [
      note(
        "A tool can be accurate on the wrong people",
        "Zana inaweza kuwa sahihi kwa watu wasiofaa",
        `Bias in health AI is not only a rude sentence. It is a systematic difference in who is found, who is missed, and who waits. A model trained on well-staffed private hospitals — continuous monitors, complete labs, English notes — will look polished on that data. The same model in a rural public ward may see missing vitals, Kiswahili or Sheng notes, darker skin on camera, and fewer tests. Then PPV, calibration and even "low urgency" labels drift.

Equity work starts with slices, not slogans. Count misses by site type (rural public versus urban private), by sex, by language of the note, and by whether the patient arrived via CHP referral. If one slice carries most of the false negatives, the tool is not "95% accurate" for your county. It is accurate for the slice that looks like the training set.

Do not invent a Kenya-wide disparity percentage. Do ask the vendor which facilities sat in their study, whether skin-tone and language were tested, and what happens when a field is blank because the pulse oximeter is shared across three wards.

Fixing equity is usually operations plus model: more complete recording, bilingual forms, a higher-sensitivity threshold in the rural site, and a human who still sees the patient.`,
        `Upendeleo katika AI ya afya si sentensi mbaya tu. Ni tofauti ya kimfumo ya nani anapatikana, nani anakosekana, na nani anasubiri. Modeli iliyofunzwa katika hospitali za kibinafsi zenye wafanyakazi wa kutosha — vifaa vya kuendelea, maabara kamili, dokezo za Kiingereza — itaonekana nadhifu kwenye data hiyo. Modeli ileile katika wodi ya umma ya vijijini inaweza kuona dalili muhimu zilizokosekana, dokezo za Kiswahili au Sheng, ngozi nyeusi kwenye kamera, na vipimo vichache. Kisha PPV, urekebishaji na hata lebo za "si dharura" zinahama.

Kazi ya usawa inaanza na vipande, si kauli. Hesabu kukosa kwa aina ya kituo (umma wa vijijini dhidi ya kibinafsi mjini), kwa jinsia, kwa lugha ya dokezo, na kama mgonjwa alifika kwa rufaa ya CHP. Kipande kimoja kikiwa na hasi bandia nyingi, zana si "sahihi kwa 95%" kwa kaunti yako. Ni sahihi kwa kipande kinachofanana na seti ya mafunzo.

Usibuni asilimia ya taifa ya ukosefu wa usawa. Muulize muuzaji vituo vipi vilikuwa katika utafiti wao, kama rangi ya ngozi na lugha zilipimwa, na nini kinatokea sehemu ikiwa tupu kwa sababu kipima oksijeni kinashirikiwa wodi tatu.

Kurekebisha usawa mara nyingi ni operesheni pamoja na modeli: kurekodi kamili zaidi, fomu za lugha mbili, kikomo cha unyeti wa juu katika kituo cha vijijini, na binadamu ambaye bado anamwona mgonjwa.`
      ),
      reveal([
        {
          termEn: "Slice metric",
          termSw: "Kipimo cha kipande",
          defEn: "Performance counted separately for a group, such as rural public patients.",
          defSw: "Utendaji unaohesabiwa kando kwa kundi, kama wagonjwa wa umma vijijini.",
        },
        {
          termEn: "Distribution shift",
          termSw: "Mabadiliko ya usambazaji",
          defEn: "When live patients differ from the training patients in recording, language or disease mix.",
          defSw: "Wagonjwa wa moja kwa moja wanapotofautiana na wa mafunzo kwa kurekodi, lugha au mchanganyiko wa magonjwa.",
        },
        {
          termEn: "Blank field",
          termSw: "Sehemu tupu",
          defEn: "A missing input, often more common where equipment is shared; models may treat blanks as 'normal'.",
          defSw: "Ingizo lililokosekana, mara nyingi zaidi vifaa vinaposhirikiwa; modeli zinaweza kuchukulia tupu kama 'kawaida'.",
        },
        {
          termEn: "Equal opportunity to be found",
          termSw: "Fursa sawa ya kugunduliwa",
          defEn: "Sick people in every slice should have a similar chance of being flagged, not only those who look like the private-hospital set.",
          defSw: "Wagonjwa katika kila kipande wanapaswa kuwa na nafasi inayofanana ya kuonyeshwa, si wale wanaofanana na seti ya hospitali ya kibinafsi tu.",
        },
      ]),
      note(
        "Worked example: two hospitals, one score",
        "Mfano: hospitali mbili, alama moja",
        `A fictional county buys one deterioration score for both a private mission hospital in the town and a public rural hospital 70 km away. After three months they open the books (counts only, no names).

Town private: 200 scored patients, 20 true deteriorations, tool catches 18 (sensitivity 90% in this slice), 25 false alarms.

Rural public: 200 scored patients, 20 true deteriorations, tool catches 12 (sensitivity 60%), 10 false alarms. Notes are often Kiswahili. Pulse oximetry is missing on 40% of rows; the model treats missing as normal.

Same advertised tool. The rural sick are found less often. If the county reports only the pooled 30/40 = 75% sensitivity, the town's success hides the rural miss.

The fair response is not to invent a published "bias percentage". It is to add a third observation round in the rural ward, lower the threshold there until the next review, translate the form, and stop treating missing oximetry as reassurance.`,
        `Kaunti ya kubuni inanunua alama moja ya kuzidiwa kwa hospitali ya kimisheni ya kibinafsi mjini na hospitali ya umma ya vijijini kilomita 70 kutoka hapo. Baada ya miezi mitatu wanafungua vitabu (idadi tu, bila majina).

Kibinafsi mjini: wagonjwa 200 waliopewa alama, 20 walizidiwa kweli, zana inawagundua 18 (unyeti 90% katika kipande hiki), tahadhari 25 za uongo.

Umma vijijini: wagonjwa 200, 20 walizidiwa kweli, zana inawagundua 12 (unyeti 60%), tahadhari 10 za uongo. Dokezo mara nyingi ni Kiswahili. Kipima oksijeni kinakosekana kwenye 40% ya safu; modeli inachukulia kukosa kama kawaida.

Zana ileile iliyotangazwa. Wagonjwa wa vijijini wanapatikana mara chache. Kaunti ikiripoti tu unyeti wa pamoja 30/40 = 75%, mafanikio ya mji yanaficha kukosa kwa vijijini.

Jibu la haki si kubuni "asilimia ya upendeleo" iliyochapishwa. Ni kuongeza mzunguko wa tatu wa vipimo katika wodi ya vijijini, kushusha kikomo huko hadi mapitio yajayo, kutafsiri fomu, na kuacha kuchukulia kukosa oksimetri kama faraja.`
      ),
      scenario({
        titleEn: "Scenario: one threshold for the county",
        titleSw: "Hali: kikomo kimoja kwa kaunti",
        situationEn:
          "The vendor insists the same alert threshold must be used in the private hospital and the rural hospital 'for consistency'. Rural staff already override most low-sensitivity misses by eye.",
        situationSw:
          "Muuzaji anasisitiza kikomo kilekile cha tahadhari kilitumike katika hospitali ya kibinafsi na ya vijijini 'kwa uthabiti'. Wafanyakazi wa vijijini tayari wanabatilisha kwa jicho kukosa kwa unyeti wa chini.",
        questionEn: "What should the county health team do?",
        questionSw: "Timu ya afya ya kaunti ifanye nini?",
        optionsEn: [
          "Keep one threshold so the dashboard looks clean",
          "Set site-specific thresholds and recording rules from local slice counts, and keep human review at both sites",
          "Switch the rural site off until it looks like the private hospital",
          "Publish a made-up fairness score of 99% to close the complaint",
        ],
        optionsSw: [
          "Weka kikomo kimoja ili dashibodi ionekane safi",
          "Weka vikomo na kanuni za kurekodi kwa kila kituo kutoka hesabu za vipande vya eneo, na ukaguzi wa binadamu katika vituo vyote",
          "Zima kituo cha vijijini hadi kionekane kama hospitali ya kibinafsi",
          "Chapisha alama ya usawa ya 99% iliyobuniwa kufunga malalamiko",
        ],
        correctIndex: 1,
        hintsEn: [
          "A clean dashboard that misses rural patients is not consistency. It is neglect with a chart.",
          "Correct. Thresholds can differ when data and staffing differ. Humans stay in both loops.",
          "Turning rural care off 'until it is like town' punishes the people with less equipment.",
          "Invented fairness percentages are the same class of error as invented clinical accuracy.",
        ],
        hintsSw: [
          "Dashibodi safi inayokosa wagonjwa wa vijijini si uthabiti. Ni kutelekezwa kwa chati.",
          "Sahihi. Vikomo vinaweza kutofautiana data na wafanyakazi wanapotofautiana. Binadamu wanakaa kwenye vitanzi vyote.",
          "Kuzima huduma ya vijijini 'hadi iwe kama mji' kunawaadhibu watu wenye vifaa vichache.",
          "Asilimia za usawa zilizobuniwa ni kosa la aina ileile kama usahihi wa kitabibu uliobuniwa.",
        ],
        explainEn:
          "Equity is measured in slices and fixed with local operations. One cosmetic threshold is not fairness.",
        explainSw:
          "Usawa hupimwa kwa vipande na kurekebishwa kwa operesheni za eneo. Kikomo kimoja cha mapambo si usawa.",
      }),
      quiz(
        "A pooled sensitivity of 85% hides a rural slice at 55% and a private slice at 95%. What is true?",
        "Unyeti wa pamoja wa 85% unaficha kipande cha vijijini cha 55% na cha kibinafsi cha 95%. Nini ni kweli?",
        [
          "The tool is fair because the average is high",
          "Rural sick patients are found less often; report slices, not only the pool",
          "Private hospitals should lower their staffing to match",
          "Language cannot be a cause if the interface has a Kiswahili button",
        ],
        [
          "Zana ni ya haki kwa sababu wastani ni juu",
          "Wagonjwa wa vijijini wanapatikana mara chache; ripoti vipande, si kundi pekee",
          "Hospitali za kibinafsi zipunguze wafanyakazi ili zifanane",
          "Lugha haiwezi kuwa sababu kiolesura kikiwa na kitufe cha Kiswahili",
        ],
        1,
        "Averages hide who is missed. A language button does not prove the model was trained on Kiswahili notes.",
        "Wastani unaficha nani anakosekana. Kitufe cha lugha hakithibitishi modeli ilifunzwa kwa dokezo za Kiswahili."
      ),
      note(
        "Try it: write the slice list",
        "Jaribu: andika orodha ya vipande",
        `For a facility you know, list six slices you would demand in any vendor report: rural vs town, sex, age band, language of note, CHP-referred vs walk-in, and complete vs missing vitals.

Next to each, write one operational fix if that slice looks worse (more observations, translation, different threshold, extra human review). No invented percentages.`,
        `Kwa kituo unachokijua, orodhesha vipande sita ungehitaji katika ripoti yoyote ya muuzaji: vijijini dhidi ya mji, jinsia, kundi la umri, lugha ya dokezo, rufaa ya CHP dhidi ya kuja mwenyewe, na dalili muhimu kamili dhidi ya zilizokosekana.

Kando ya kila kimoja, andika marekebisho moja ya operesheni kipande kikiwa kibaya zaidi (vipimo zaidi, tafsiri, kikomo tofauti, ukaguzi zaidi wa binadamu). Hakuna asilimia zilizobuniwa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Pooled accuracy can hide rural misses.
- Ask who was in the study, how blanks are treated, and how language was tested.
- Next: pharmacy stock — forecasts, lead times, and human review of what the shelf actually holds.`,
        `- Usahihi wa pamoja unaweza kuficha kukosa kwa vijijini.
- Uliza nani alikuwa katika utafiti, tupu zinachukuliwaje, na lugha ilipimwaje.
- Ifuatayo: stoo ya duka la dawa — utabiri, muda wa kusubiri, na ukaguzi wa binadamu wa kile rafu inachoshikilia kweli.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u8
  {
    id: "hlt-i-u8",
    titleEn: "Pharmacy stock: forecast, then walk the shelf",
    titleSw: "Stoo ya duka la dawa: tabiri, kisha tembea rafu",
    cards: [
      note(
        "Demand, lead time, expiry, review",
        "Mahitaji, muda wa kusubiri, kuisha muda, ukaguzi",
        `A pharmacy or dispensary stock model usually predicts packs needed from past issues. That prediction is not the order. The order also needs lead time (days from request to delivery), expiry (boxes that will die on the shelf), buffer for a campaign week, and a human who can see a dusty pack the model thinks is available.

There have been reported pilots in Kenya, including Zendawa, aimed at helping chemists watch inventory and related credit. Treat them as reported pilots. Do not quote a reduction in expired drugs or a credit-approval rate unless you have a primary source in front of you — and this course will not invent one.

When stock is already zero, the clinical problem is referral and an allowed alternative, not a chatbot naming a kiosk brand. The Pharmacy and Poisons Board still regulates medicines. A language model does not.

If you pilot a forecast, log three numbers weekly: forecast, actual issues, and stock-outs of tracer items. Those three tell you whether to keep the tool. A vendor slide does not.`,
        `Modeli ya stoo ya duka la dawa au zahanati kwa kawaida inatabiri pakiti zinazohitajika kutoka kwa matumizi ya zamani. Utabiri huo si agizo. Agizo pia linahitaji muda wa kusubiri (siku kutoka ombi hadi delivery), kuisha muda (masanduku yatakayokufa rafuni), akiba kwa wiki ya kampeni, na binadamu anayeweza kuona pakiti yenye vumbi ambayo modeli inadhani ipo.

Kumekuwa na majaribio yaliyoripotiwa nchini Kenya, ikiwemo Zendawa, yaliyolenga kuwasaidia wanaoduka kuangalia stoo na mikopo inayohusiana. Yachukulie kama majaribio yaliyoripotiwa. Usinukuu punguzo la dawa zilizoisha muda au kiwango cha kuidhinisha mkopo usipokuwa na chanzo cha msingi mbele yako — na kozi hii haitabuni moja.

Stoo ikiwa tayari sifuri, tatizo la kitabibu ni rufaa na mbadala unaoruhusiwa, si chatbot kutaja chapa ya kioski. Bodi ya Famasia na Sumu bado inasimamia dawa. Modeli ya lugha haisimamii.

Ukijaribu utabiri, rekodi namba tatu kila wiki: utabiri, matumizi halisi, na upungufu wa vitu vya kufuatilia. Hizo tatu zinakuambia kama utaweka zana. Slaidi ya muuzaji haikuambii.`
      ),
      reveal([
        {
          termEn: "Tracer item",
          termSw: "Kitu cha kufuatilia",
          defEn: "A short list of medicines or supplies you watch every week as a pulse of the system.",
          defSw: "Orodha fupi ya dawa au vifaa unavyoviangalia kila wiki kama pigo la mfumo.",
        },
        {
          termEn: "Lead time",
          termSw: "Muda wa kusubiri agizo",
          defEn: "Days from placing an order to usable stock on the shelf.",
          defSw: "Siku kutoka kuagiza hadi stoo inayotumika rafuni.",
        },
        {
          termEn: "Buffer",
          termSw: "Akiba",
          defEn: "Extra packs held because demand and trucks are uncertain.",
          defSw: "Pakiti za ziada zinazohifadhiwa kwa sababu mahitaji na lori si vya uhakika.",
        },
        {
          termEn: "Human review",
          termSw: "Ukaguzi wa binadamu",
          defEn: "A pharmacist or nurse in charge who can reject a forecast after walking the shelf.",
          defSw: "Mfamasia au muuguzi mkuu anayeweza kukataa utabiri baada ya kutembea rafu.",
        },
      ]),
      note(
        "Worked example: ORS, lead time two weeks",
        "Mfano: ORS, muda wa kusubiri wiki mbili",
        `A fictional sub-county store issues about 120 sachets of ORS in a quiet month. A model forecasts 130 for next month. Lead time is 14 days. On the day of ordering, the shelf holds 40 sachets, of which 15 expire in 10 days.

Step 1. Near-expiry first: those 15 must be issued immediately or they are waste, not stock.

Step 2. Usable now: 25. Two weeks of quiet use is about 60. The order needs to cover the gap plus a buffer for a rainy-season spike, not a blind 130.

Step 3. That week a cholera alert goes out in a neighbouring county. The model has not seen that signal. The pharmacist phones the county store the same day.

Step 4. A caregiver's phone suggests "any chemist brand, double the dose". The pharmacist's answer is protocol and, if empty, referral — not the phone brand.

They log: forecast 130, actual issues that month 180, stock-out days 2. The tool stays as a draft number only.`,
        `Stoo ya kaunti ndogo ya kubuni inatoa takriban pakiti 120 za ORS katika mwezi tulivu. Modeli inatabiri 130 kwa mwezi ujao. Muda wa kusubiri ni siku 14. Siku ya kuagiza, rafu ina 40, kati yazo 15 zinaisha muda baada ya siku 10.

Hatua ya 1. Zinazokaribia kuisha kwanza: zile 15 lazima zitolewe mara moja au ni hasara, si stoo.

Hatua ya 2. Zinazotumika sasa: 25. Matumizi tulivu ya wiki mbili ni takriban 60. Agizo linahitaji kufunika pengo pamoja na akiba ya kuongezeka kwa msimu wa mvua, si 130 ya upofu.

Hatua ya 3. Wiki hiyo onyo la kipindupindu linatoka katika kaunti jirani. Modeli haijaona ishara hiyo. Mfamasia anapigia stoo ya kaunti simu siku hiyo.

Hatua ya 4. Simu ya mlezi inapendekeza "chapa yoyote ya duka la dawa, dozi maradufu". Jibu la mfamasia ni itifaki na, ikiwa tupu, rufaa — si chapa ya simu.

Wanarekodi: utabiri 130, matumizi halisi mwezi huo 180, siku 2 za upungufu. Zana inabaki kama namba ya rasimu tu.`
      ),
      scenario({
        titleEn: "Scenario: auto-order from the model",
        titleSw: "Hali: agizo kiotomatiki kutoka modeli",
        situationEn:
          "A partner offers to let their stock model send orders directly to a supplier whenever predicted days-of-stock fall below 7, with no pharmacist click.",
        situationSw:
          "Mshirika anajitolea kuacha modeli yao ya stoo itume maagizo moja kwa moja kwa msambazaji kila siku zilizotabiriwa za stoo zikiwa chini ya 7, bila kubofya kwa mfamasia.",
        questionEn: "What is the safest design?",
        questionSw: "Muundo salama zaidi ni upi?",
        optionsEn: [
          "Accept auto-order; speed prevents all stock-outs",
          "Keep a human approve-or-edit step that includes a shelf count, expiry check and referral plan if already at zero",
          "Auto-order only narcotics, because they are high value",
          "Publish that Zendawa proved auto-order cuts expiry by a made-up percent",
        ],
        optionsSw: [
          "Kubali agizo kiotomatiki; kasi inazuia upungufu wote",
          "Weka hatua ya binadamu ya kuidhinisha-au-kuhariri inayojumuisha hesabu ya rafu, ukaguzi wa kuisha muda na mpango wa rufaa ikiwa tayari ni sifuri",
          "Agizo kiotomatiki kwa dawa za kulevya tu, kwa sababu ni za thamani kubwa",
          "Chapisha kwamba Zendawa ilithibitisha agizo kiotomatiki linapunguza kuisha muda kwa asilimia iliyobuniwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Speed without a shelf walk orders the wrong quantity and the wrong timing.",
          "Correct. Forecasts draft; pharmacists send. Zero stock is a clinical pathway, not only a purchase.",
          "High-value controlled medicines need more human control, not less.",
          "Do not invent pilot statistics, including for Zendawa.",
        ],
        hintsSw: [
          "Kasi bila kutembea rafu inaagiza kiasi kisicho sahihi na muda usio sahihi.",
          "Sahihi. Utabiri unaandaa; wafamasia wanatuma. Stoo sifuri ni njia ya kitabibu, si ununuzi tu.",
          "Dawa zinazodhibitiwa zenye thamani zinahitaji udhibiti zaidi wa binadamu, si kidogo.",
          "Usibuni takwimu za majaribio, pamoja na za Zendawa.",
        ],
        explainEn:
          "Inventory AI drafts an order. A person who can see expiry and the empty-shelf pathway still clicks send.",
        explainSw:
          "AI ya stoo inaandaa agizo. Mtu anayeona kuisha muda na njia ya rafu tupu bado anabofya kutuma.",
      }),
      quiz(
        "Which weekly log is enough to decide whether to keep a stock forecast?",
        "Ni kumbukumbu ipi ya kila wiki inayotosha kuamua kama utabiri wa stoo ubaki?",
        [
          "The vendor's marketing accuracy figure",
          "Forecast versus actual issues versus stock-out days for tracer items",
          "How many likes the chemist page received",
          "A chatbot's opinion of next month's malaria season",
        ],
        [
          "Namba ya usahihi ya masoko ya muuzaji",
          "Utabiri dhidi ya matumizi halisi dhidi ya siku za upungufu kwa vitu vya kufuatilia",
          "Likes ngapi ukurasa wa duka la dawa ulipata",
          "Maoni ya chatbot kuhusu msimu ujao wa malaria",
        ],
        1,
        "Three operational counts beat a brochure. Likes and chatbot weather-talk are not pharmacy governance.",
        "Hesabu tatu za operesheni zinashinda kijitabu. Likes na mazungumzo ya chatbot kuhusu hali ya hewa si usimamizi wa duka la dawa."
      ),
      note(
        "Try it: tracer card",
        "Jaribu: kadi ya kufuatilia",
        `Pick five tracer items you would watch in a dispensary you know (for example ORS, amoxicillin, gloves, a malaria medicine, oxytocin — only as a list, not as dosing advice).

For each, write lead time in days if you know it, or "ask the store" if you do not. That card is the start of a forecast review, not the forecast itself.`,
        `Chagua vitu vitano vya kufuatilia ungeangalia katika zahanati unayoijua (kwa mfano ORS, amoxicillin, glavu, dawa ya malaria, oxytocin — kama orodha tu, si ushauri wa dozi).

Kwa kila kimoja, andika muda wa kusubiri kwa siku ukijua, au "uliza stoo" usipojua. Kadi hiyo ni mwanzo wa mapitio ya utabiri, si utabiri wenyewe.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Forecasts draft orders; people count, watch expiry and refer if the shelf is empty.
- Zendawa is a reported pilot, not a statistic in this course.
- Next: health misinformation inside staff groups, not only family WhatsApp.`,
        `- Utabiri unaandaa maagizo; watu wanahesabu, wanaangalia kuisha muda na kutoa rufaa rafu ikiwa tupu.
- Zendawa ni jaribio lililoripotiwa, si takwimu katika kozi hii.
- Ifuatayo: taarifa potofu za afya ndani ya vikundi vya wafanyakazi, si WhatsApp ya familia tu.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u9
  {
    id: "hlt-i-u9",
    titleEn: "Misinformation in staff channels",
    titleSw: "Taarifa potofu katika njia za wafanyakazi",
    cards: [
      note(
        "A fluent rumour in a professional group",
        "Uvumi fasaha katika kikundi cha kitaalamu",
        `Beginner Unit 4 treated family WhatsApp. Intermediate staff face a sharper version: a 80-person CHP or facility group where a message looks like a circular. Language models can write "MOH has directed…" in the right register. A deepfake can borrow a known presenter.

The check is the same, with a higher duty. Before you forward inside a professional group, ask: is there a dated circular on an official channel? Does it tell anyone to skip a pathway, a vaccine or a prescribed medicine? Does it name a patient?

Staff groups are not private enough for identifiers. HIV status, names and SHA numbers do not become safe because the group title says "CHPs only".

If the message is about a very sick person already in front of you, you treat them and call 719, 999 or 112. You do not wait to win the argument in the group.`,
        `Somo la 4 la mwanzoni lilihusu WhatsApp ya familia. Wafanyakazi wa kiwango cha kati wanakutana na toleo kali zaidi: kikundi cha CHP au kituo cha watu 80 ambapo ujumbe unaonekana kama waraka. Modeli za lugha zinaweza kuandika "MOH imeelekeza…" kwa sauti inayofaa. Video au sauti bandia inaweza kukopa mtangazaji anayejulikana.

Ukaguzi ni uleule, wenye wajibu mkubwa zaidi. Kabla ya kutuma mbele ndani ya kikundi cha kitaalamu, uliza: je, kuna waraka wenye tarehe kwenye kituo rasmi? Je, unamwambia mtu aruke njia, chanjo au dawa aliyopewa? Je, unamtaja mgonjwa?

Vikundi vya wafanyakazi si faragha ya kutosha kwa vitambulishi. Hali ya VVU, majina na namba za SHA haziwi salama kwa sababu kichwa cha kikundi kinasema "CHP tu".

Ujumbe ukihusu mtu mgonjwa sana ambaye tayari yuko mbele yako, unamtibu na kupiga 719, 999 au 112. Hugosubiri kushinda mjadala kwenye kikundi.`
      ),
      reveal([
        {
          termEn: "Circular",
          termSw: "Waraka",
          defEn: "An official dated instruction from MOH, county or the facility in-charge.",
          defSw: "Maagizo rasmi yenye tarehe kutoka MOH, kaunti au msimamizi wa kituo.",
        },
        {
          termEn: "Professional forward",
          termSw: "Utumaji wa kitaalamu",
          defEn: "Sharing inside a staff group. It still spreads rumours and identifiers.",
          defSw: "Kushiriki ndani ya kikundi cha wafanyakazi. Bado inasambaza uvumi na vitambulishi.",
        },
        {
          termEn: "Official channel",
          termSw: "Kituo rasmi",
          defEn: "A source you can find outside the chat: county health page, signed memo, KHIS notice, in-charge.",
          defSw: "Chanzo unachoweza kupata nje ya gumzo: ukurasa wa afya wa kaunti, memo iliyosainiwa, tangazo la KHIS, msimamizi.",
        },
        {
          termEn: "Correction",
          termSw: "Marekebisho",
          defEn: "A short, dated, source-named message that replaces a rumour without shaming colleagues.",
          defSw: "Ujumbe mfupi, wenye tarehe na chanzo, unaochukua nafasi ya uvumi bila kuwaaibisha wenzako.",
        },
      ]),
      note(
        "Worked example: the false stock circular",
        "Mfano: waraka wa uongo wa stoo",
        `A fictional sub-county CHP group of 90 receives: "MOH confidential: stop all ORS this week, a contaminated batch, share to all CHPs. Signed, County Pharmacist." There is no letterhead photo that matches last month's real circulars. It tells people to skip a standard treatment.

Step 1. The CHP supervisor does not forward. She phones the county pharmacist on the number already in her official contacts, not a number inside the message.

Step 2. The pharmacist has issued no such order. The supervisor posts a correction: "Checked with county pharmacy at 10:12. No ORS recall. Continue protocol. Do not share the earlier message. — Supervisor, date."

Step 3. Two CHPs already told households to stop ORS. The supervisor spends the afternoon reversing that, which is slower than a 20-second forward.

Step 4. They add a group rule: no unnamed 'confidential MOH' forwards; patient names banned; rumours go to the supervisor first.`,
        `Kikundi cha kubuni cha CHP cha kaunti ndogo chenye 90 kinapokea: "MOH siri: simamisha ORS wote wiki hii, kundi lililochafuliwa, shiriki kwa CHP wote. Imesainiwa, Mfamasia wa Kaunti." Hakuna picha ya kopicha inayolingana na waraka halisi wa mwezi uliopita. Unawaambia watu waruke tiba ya kawaida.

Hatua ya 1. Msimamizi wa CHP hatumi mbele. Anampigia mfamasia wa kaunti simu kwa namba iliyo tayari kwenye anwani zake rasmi, si namba iliyo ndani ya ujumbe.

Hatua ya 2. Mfamasia hajatuma agizo kama hilo. Msimamizi anaweka marekebisho: "Nimethibitisha na famasia ya kaunti saa 4:12. Hakuna kurejesha ORS. Endelea na itifaki. Usishiriki ujumbe wa awali. — Msimamizi, tarehe."

Hatua ya 3. CHP wawili tayari waliwaambia kaya wasimamishe ORS. Msimamizi anatumia mchana kurejesha hilo, ambako ni polepole kuliko kutuma mbele kwa sekunde 20.

Hatua ya 4. Wanaongeza kanuni ya kikundi: hakuna utumaji wa 'MOH siri' usio na jina; majina ya wagonjwa yamepigwa marufuku; uvumi uende kwa msimamizi kwanza.`
      ),
      scenario({
        titleEn: "Scenario: the named child in the CHP group",
        titleSw: "Hali: mtoto aliye na jina kwenye kikundi cha CHP",
        situationEn:
          "A CHP posts a photo of a child and writes a full name, village and 'possible HIV, what should I give?' in the 90-person group, asking colleagues to paste it into a chatbot.",
        situationSw:
          "CHP anaweka picha ya mtoto na kuandika jina kamili, kijiji na 'huenda VVU, nitoe nini?' katika kikundi cha watu 90, akiwaomba wenzako wabandike kwenye chatbot.",
        questionEn: "What should the supervisor do first?",
        questionSw: "Msimamizi afanye nini kwanza?",
        optionsEn: [
          "Answer the clinical question in the group so the child gets help faster",
          "Stop the thread, remove identifiers from the group as far as the platform allows, direct the CHP to the MOH pathway and approved record, and remind the group of the ban",
          "Paste the photo into a public bot on the CHP's behalf",
          "Ignore it; professional groups are confidential by nature",
        ],
        optionsSw: [
          "Jibu swali la kitabibu kwenye kikundi ili mtoto apate msaada haraka",
          "Simamisha mnyororo, ondoa vitambulishi kwenye kikundi kadri jukwaa linavyoruhusu, elekeza CHP kwenye njia ya MOH na rekodi iliyoidhinishwa, na ukumbushe kikundi marufuku",
          "Bandika picha kwenye bot ya umma kwa niaba ya CHP",
          "Puuzia; vikundi vya kitaalamu ni siri kwa asili",
        ],
        correctIndex: 1,
        hintsEn: [
          "Clinical debate on a named child in 90 phones is already a leak, and it is not an examination.",
          "Correct. Contain the identifiers, then use the pathway. Help the child without enlarging the audience.",
          "A supervisor paste is still a public-bot leak of a child's image and status speculation.",
          "A group title is not a legal safe room.",
        ],
        hintsSw: [
          "Mjadala wa kitabibu kuhusu mtoto aliye na jina kwenye simu 90 tayari ni uvujaji, na si uchunguzi.",
          "Sahihi. Zuia vitambulishi, kisha tumia njia. Msaidia mtoto bila kupanua hadhira.",
          "Kubandika kwa msimamizi bado ni uvujaji wa bot ya umma wa picha ya mtoto na kamusi ya hali.",
          "Kichwa cha kikundi si chumba salama cha kisheria.",
        ],
        explainEn:
          "Staff channels follow the same identifier ban. Care goes through the pathway, not a group diagnosis.",
        explainSw:
          "Njia za wafanyakazi zinafuata marufuku ileile ya vitambulishi. Huduma inapita kwenye njia, si utambuzi wa kikundi.",
      }),
      quiz(
        "What is the minimum content of a staff-group correction?",
        "Ni nini cha chini kabisa katika marekebisho ya kikundi cha wafanyakazi?",
        [
          "A joke so people relax",
          "What you checked, with whom, at what time, what to do instead, and a request not to forward the rumour",
          "The name of the colleague who forwarded it",
          "A chatbot paragraph with no source",
        ],
        [
          "Utani ili watu watulie",
          "Ulichokagua, na nani, saa ngapi, nini cha kufanya badala yake, na ombi la kutotuma uvumi mbele",
          "Jina la mwenzako aliyetuma mbele",
          "Aya ya chatbot bila chanzo",
        ],
        1,
        "Corrections need a checkable source and a replacement action. Shame and unsourced fluency spread a second problem.",
        "Marekebisho yanahitaji chanzo kinachoweza kukaguliwa na hatua mbadala. Aibu na ufasaha usio na chanzo vinasambaza tatizo la pili."
      ),
      note(
        "Try it: write a correction in two languages",
        "Jaribu: andika marekebisho kwa lugha mbili",
        `On paper, write a six-line correction in English and Kiswahili for a fictional false 'vaccine pause' message. Include time of check, who you called, and the replacement action.

Do not name a real officer in a way that looks like a leaked memo. Keep it as a template your supervisor could adapt.`,
        `Kwenye karatasi, andika marekebisho ya mistari sita kwa Kiingereza na Kiswahili kwa ujumbe wa kubuni wa 'kusimamisha chanjo'. Weka saa ya ukaguzi, uliyempigia, na hatua mbadala.

Usitaje afisa halisi kwa njia inayoonekana kama memo iliyovuja. Iache kama kiolezo msimamizi angeweza kurekebisha.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Professional groups still leak. Identifiers and unverified circulars stay out.
- Correct with a named check, a time, and a replacement action.
- Next: record human overrides so the tool, not the patient, takes the blame when scores are wrong.`,
        `- Vikundi vya kitaalamu bado vinavuja. Vitambulishi na waraka ambao haujathibitishwa vinabaki nje.
- Rekibisha kwa ukaguzi wenye jina, saa, na hatua mbadala.
- Ifuatayo: rekodi ubatilishaji wa binadamu ili zana, si mgonjwa, ibebe lawama alama zikiwa na kosa.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u10
  {
    id: "hlt-i-u10",
    titleEn: "Recording human overrides",
    titleSw: "Kurekodi ubatilishaji wa binadamu",
    cards: [
      note(
        "Disagreement is data",
        "Kutokubaliana ni data",
        `An override is when a clinician or CHP does not follow a tool's suggestion. Unit 1 treated alert fatigue. This unit treats the record of that disagreement as a safety asset.

A useful override log has: time, user role, what the tool said, what the person did, a short reason (danger sign seen, missing input, pathway requires referral, suspected bad calibration), and whether the patient identifier stays inside the approved system. Public chatbots are not override logs.

If 9 in 10 alerts are overridden with "patient known, stable", you do not yet know whether the threshold is wrong or whether staff have stopped looking. Sampling a week's logs with the people who clicked is the review. Switching the tool off without that sample discards the safety net; forcing it on without that sample discards the patients who were being protected by human sight.

The log is also how you talk to a vendor: "Here are 40 documented misses in our rural slice." That is stronger than a feeling.`,
        `Ubatilishaji ni mhudumu au CHP asipofuatilia pendekezo la zana. Somo la 1 lilihusu uchovu wa tahadhari. Somo hili linachukulia kumbukumbu ya kutokubaliana huko kama mali ya usalama.

Kumbukumbu yenye manufaa ina: saa, wajibu wa mtumiaji, zana ilichosema, mtu alichofanya, sababu fupi (dalili ya hatari ilionekana, ingizo lililokosekana, njia inahitaji rufaa, urekebishaji unaoshukiwa kuwa mbaya), na kama kitambulishi cha mgonjwa kinabaki ndani ya mfumo ulioidhinishwa. Chatbot za umma si kumbukumbu za ubatilishaji.

Tahadhari 9 kati ya 10 zikibatilishwa kwa "mgonjwa anajulikana, tulivu", bado hujui kama kikomo kiko kimakosa au kama wafanyakazi wameacha kuangalia. Kuchukua sampuli ya kumbukumbu za wiki pamoja na waliobofya ndiyo mapitio. Kuzima zana bila sampuli hiyo kunaacha kinga; kuilazimisha bila sampuli hiyo kunaacha wagonjwa waliokuwa wanalindwa na macho ya binadamu.

Kumbukumbu pia ndivyo unavyozungumza na muuzaji: "Hapa kuna kukosa 40 vilivyoandikwa katika kipande chetu cha vijijini." Hiyo ina nguvu kuliko hisia.`
      ),
      reveal([
        {
          termEn: "Override log",
          termSw: "Kumbukumbu ya ubatilishaji",
          defEn: "A structured record of when people disagreed with the tool, and why.",
          defSw: "Rekodi yenye muundo ya watu walipokataa zana, na kwa nini.",
        },
        {
          termEn: "Reason code",
          termSw: "Msimbo wa sababu",
          defEn: "A short, agreed label such as 'danger sign seen' rather than a free novel.",
          defSw: "Lebo fupi iliyokubaliwa kama 'dalili ya hatari ilionekana' badala ya riwaya huru.",
        },
        {
          termEn: "Sample review",
          termSw: "Mapitio ya sampuli",
          defEn: "Reading a week's overrides with the staff who made them, not only a dashboard percentage.",
          defSw: "Kusoma ubatilishaji wa wiki pamoja na wafanyakazi walioufanya, si asilimia ya dashibodi pekee.",
        },
        {
          termEn: "Forced compliance",
          termSw: "Utiifu wa kulazimishwa",
          defEn: "Blocking override. It hides disagreement instead of fixing the tool.",
          defSw: "Kuzuia ubatilishaji. Kunaficha kutokubaliana badala ya kurekebisha zana.",
        },
      ]),
      note(
        "Worked example: 90% override, two stories",
        "Mfano: ubatilishaji wa 90%, hadithi mbili",
        `A fictional health centre's sepsis alert is overridden in 36 of 40 weekday cases. The dashboard only shows 90%.

Story A, without a log: the superintendent switches the alert off. Two weeks later a missed deterioration is discussed at mortality review with no trail of what the tool had said.

Story B, with reason codes: 28 overrides say "vital signs 8 hours old", 6 say "known stable heart-failure patient", 2 say "danger sign seen — escalated despite low score". The team adds a noon observation round, keeps the alert, and uses the 2 "despite low score" cases as teaching.

The 90% was not one fact. It was three different facts stacked. Only the log unstacked them.

Identifiers stay in the facility system. The teaching file uses case numbers, not names, and never lands in a public bot.`,
        `Tahadhari ya sepsis ya kituo cha afya cha kubuni inabatilishwa katika visa 36 kati ya 40 vya siku za kazi. Dashibodi inaonyesha 90% tu.

Hadithi A, bila kumbukumbu: msimamizi anazima tahadhari. Wiki mbili baadaye kuzidiwa kulikokosekana kunajadiliwa katika mapitio ya vifo bila alama ya kile zana ilichosema.

Hadithi B, na misimbo ya sababu: ubatilishaji 28 unasema "dalili muhimu za saa 8 zilizopita", 6 unasema "mgonjwa wa kushindwa kwa moyo anayejulikana, tulivu", 2 unasema "dalili ya hatari ilionekana — ilipandishwa licha ya alama ya chini". Timu inaongeza mzunguko wa vipimo saa sita mchana, inaweka tahadhari, na inatumia visa 2 "licha ya alama ya chini" kama mafunzo.

90% haikuwa ukweli mmoja. Ilikuwa ukweli tatu zilizorundikwa. Kumbukumbu pekee ndiyo iliyozifungua.

Vitambulishi vinabaki katika mfumo wa kituo. Faili ya mafunzo inatumia namba za kisa, si majina, na haifiki kwenye bot ya umma.`
      ),
      scenario({
        titleEn: "Scenario: make override impossible",
        titleSw: "Hali: fanya ubatilishaji usiwezekane",
        situationEn:
          "After a missed case, a board member says: 'Lock the alert so nobody can proceed without following it. Humans are the weak link.'",
        situationSw:
          "Baada ya kisa kilichokosekana, mjumbe wa bodi anasema: 'Funga tahadhari ili mtu asiendelee bila kuifuata. Binadamu ndio kiungo dhaifu.'",
        questionEn: "What should you recommend?",
        questionSw: "Unapaswa kupendekeza nini?",
        optionsEn: [
          "Lock the alert; the missed case proves humans should not override",
          "Keep override, require a reason code, sample the log weekly, and fix inputs and threshold from what the log shows",
          "Move the log into a public chatbot so the vendor can train on it",
          "Delete the log so the missed case cannot be audited",
        ],
        optionsSw: [
          "Funga tahadhari; kisa kilichokosekana kinathibitisha binadamu hawapaswi kubatilisha",
          "Weka ubatilishaji, hitaji msimbo wa sababu, chukua sampuli ya kumbukumbu kila wiki, na rekebisha maingizo na kikomo kutoka kile kumbukumbu inachoonyesha",
          "Hamisha kumbukumbu kwenye chatbot ya umma ili muuzaji afunze kwayo",
          "Futa kumbukumbu ili kisa kilichokosekana kisiweze kukaguliwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "The missed case may have been a low score the human never saw, or a forced-looking alert nobody trusted. Locking without a log repeats Unit 1's fatigue.",
          "Correct. Override plus reasons plus sampling is how tools and humans improve together.",
          "Override logs contain care decisions and often identifiers. Public bots are the wrong place.",
          "Deleting the trail makes the next miss harder to learn from.",
        ],
        hintsSw: [
          "Kisa kilichokosekana huenda kilikuwa alama ya chini ambayo binadamu hakuiona, au tahadhari ya kulazimisha ambayo hakuna aliyiamini. Kufunga bila kumbukumbu kunarudia uchovu wa Somo la 1.",
          "Sahihi. Ubatilishaji pamoja na sababu na sampuli ndivyo zana na binadamu wanavyoboresha pamoja.",
          "Kumbukumbu za ubatilishaji zina maamuzi ya huduma na mara nyingi vitambulishi. Bot za umma ni mahali pabaya.",
          "Kufuta alama kunafanya kukosa kunakofuata kuwe gumu zaidi kujifunza.",
        ],
        explainEn:
          "Humans remain accountable. Logs make their disagreement usable. Locks and leaks do not.",
        explainSw:
          "Binadamu wanabaki kuwajibika. Kumbukumbu zinaifanya kutokubaliana kwao kutumika. Kufuli na uvujaji hazifanyi hivyo.",
      }),
      quiz(
        "Why are reason codes better than a blank comment box for every override?",
        "Kwa nini misimbo ya sababu ni bora kuliko kisanduku tupu cha maoni kwa kila ubatilishaji?",
        [
          "They let you count causes across a week without reading 40 essays",
          "They prove the clinician is always right",
          "They replace the need to see the patient",
          "They can be posted to WhatsApp for transparency",
        ],
        [
          "Zinakuwezesha kuhesabu visababishi katika wiki bila kusoma insha 40",
          "Zinathibitisha mhudumu daima yu sahihi",
          "Zinachukua nafasi ya kumwona mgonjwa",
          "Zinaweza kuwekwa WhatsApp kwa uwazi",
        ],
        0,
        "Codes make patterns visible. They do not replace examination, and they are not public-channel material.",
        "Misimbo inafanya mifumo ionekane. Haichukui nafasi ya uchunguzi, wala si mambo ya kituo cha umma."
      ),
      note(
        "Try it: six reason codes",
        "Jaribu: misimbo sita ya sababu",
        `Write six override reason codes you would allow in a facility you know, each eight words or fewer. Include at least: danger sign seen, missing or stale input, pathway requires referral, suspected mis-calibration, alert duplicate, and other (must add a sentence).

Then write one code you would forbid, for example "because AI is useless". Forbidden codes add heat without information.`,
        `Andika misimbo sita ya sababu ya ubatilishaji ungeoruhusu katika kituo unachokijua, kila moja yenye maneno nane au chini. Jumuisha angalau: dalili ya hatari ilionekana, ingizo lililokosekana au la zamani, njia inahitaji rufaa, urekebishaji unaoshukiwa, tahadhari rudufu, na nyingine (lazima ongeze sentensi).

Kisha andika msimbo mmoja ungeokataza, kwa mfano "kwa sababu AI haina faida". Misimbo iliyokatazwa inaongeza hasira bila taarifa.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Overrides are how humans stay accountable. Reason codes make them countable.
- Sample the log before switching a tool off or locking it on.
- Next: consent and the Data Protection Act when health tools process sensitive data.`,
        `- Ubatilishaji ndivyo binadamu wanavyobaki kuwajibika. Misimbo ya sababu inayafanya yahesabike.
- Chukua sampuli ya kumbukumbu kabla ya kuzima zana au kuifunga iwe wazi.
- Ifuatayo: ridhaa na Sheria ya Ulinzi wa Data zana za afya zinaposindika data nyeti.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u11
  {
    id: "hlt-i-u11",
    titleEn: "Consent and health data protection",
    titleSw: "Ridhaa na ulinzi wa data za afya",
    cards: [
      note(
        "Sensitive data, lawful purpose, fewer fields",
        "Data nyeti, kusudi halali, sehemu chache",
        `Kenya's Data Protection Act, 2019 treats health data as sensitive personal data. The Health Act, 2017 requires confidentiality of patient information. The Office of the Data Protection Commissioner (ODPC) registers controllers and processors and handles complaints. Data Protection (General) Regulations, 2021 sit under the Act.

Consent, when it is the legal basis, must be clear, informed and free. A CHP at the door is not free consent if refusing the app means refusing care. Often the lawful basis for care records is the provision of health services, not a chatbot tick-box. Adding a vendor who trains a public model is a new purpose. New purposes need a new basis, minimisation, and usually a Data Protection Impact Assessment (DPIA) when the processing is high risk.

Minimisation is the practical test: if the model can draft a poster without a name, do not give a name. If a dashboard needs counts, do not export rows with SHA numbers. Children's data and HIV status stay inside approved systems.

Do not paste patient identifiers into public tools to "get consent wording". Draft the notice in general language, then a person who may speak for the facility reviews it.`,
        `Sheria ya Ulinzi wa Data, 2019 inachukulia data za afya kama data binafsi nyeti. Sheria ya Afya, 2017 inataka usiri wa taarifa za wagonjwa. Ofisi ya Kamishna wa Ulinzi wa Data (ODPC) inasajili wadhibiti na wasindikaji na kushughulikia malalamiko. Kanuni za Ulinzi wa Data (Jumla), 2021 ziko chini ya Sheria.

Ridhaa, inapokuwa msingi wa kisheria, lazima iwe wazi, yenye taarifa na huru. CHP mlangoni si ridhaa huru kukataa programu kunamaanisha kukataa huduma. Mara nyingi msingi halali wa rekodi za huduma ni kutoa huduma za afya, si kisanduku cha chatbot. Kuongeza muuzaji anayefunza modeli ya umma ni kusudi jipya. Madhumuni mapya yanahitaji msingi mpya, upunguzaji, na mara nyingi Tathmini ya Athari za Ulinzi wa Data (DPIA) usindikaji ukiwa wa hatari kubwa.

Upunguzaji ndio kipimo cha vitendo: modeli ikiweza kuandaa bango bila jina, usitoe jina. Dashibodi ikihitaji idadi, usitoe safu zenye namba za SHA. Data za watoto na hali ya VVU zinabaki ndani ya mifumo iliyoidhinishwa.

Usibandike vitambulishi vya wagonjwa kwenye zana za umma "kupata maneno ya ridhaa". Andaa taarifa kwa lugha ya jumla, kisha mtu anayeruhusiwa kuzungumza kwa niaba ya kituo anakagua.`
      ),
      reveal([
        {
          termEn: "Sensitive personal data",
          termSw: "Data binafsi nyeti",
          defEn: "Data the Act protects more strictly, including health, biometrics, ethnicity and children's data.",
          defSw: "Data ambazo Sheria inazilinda kwa ukali zaidi, zikiwemo za afya, alama za mwili, kabila na data za watoto.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kikomo cha kusudi",
          defEn: "Use data only for the reason you collected it, unless a new lawful basis exists.",
          defSw: "Tumia data kwa sababu uliyokusanyia tu, isipokuwa msingi mpya halali upo.",
        },
        {
          termEn: "DPIA",
          termSw: "DPIA",
          defEn: "A written look at high-risk processing: what could go wrong for people, and how you reduce it.",
          defSw: "Angalizi lililoandikwa la usindikaji wa hatari kubwa: nini kiweze kwenda kombo kwa watu, na unapunguza vipi.",
        },
        {
          termEn: "Processor",
          termSw: "Msindikaji wa data (processor)",
          defEn: "A vendor who handles data on the facility's instructions. They need a contract, not only a login.",
          defSw: "Muuzaji anayeshughulikia data kwa maagizo ya kituo. Anahitaji mkataba, si kuingia tu.",
        },
      ]),
      note(
        "Worked example: the extra research tick-box",
        "Mfano: kisanduku cha ziada cha utafiti",
        `A fictional health centre wants a documentation helper. The vendor's form at registration says "I agree my visit may train our global model" as a pre-ticked box next to the consent for treatment.

Step 1. Treatment and model-training are different purposes. A pre-tick is not free consent. Refusing training must not block malaria treatment.

Step 2. The in-charge asks for a DPIA: where is data hosted, is there cross-border transfer, who are the processors, what is retained, how is a patient request to access or delete handled, what happens if a note with HIV status is used as training text.

Step 3. Until those answers exist, the helper is not switched on. Paper SOAP continues. Speed is not a legal basis.

Step 4. If they later proceed, the training purpose is separate, optional, explained in Kiswahili and English, and off by default. Identifiers still never go to a public chatbot on the side.`,
        `Kituo cha afya cha kubuni kinataka msaidizi wa kumbukumbu. Fomu ya muuzaji wakati wa usajili inasema "Ninakubali ziara yangu ifunze modeli yetu ya kimataifa" kama kisanduku kilichowekwa tiki tayari kando ya ridhaa ya tiba.

Hatua ya 1. Tiba na kufunza modeli ni madhumuni tofauti. Tiki ya awali si ridhaa huru. Kukataa mafunzo hakupaswi kuzuia tiba ya malaria.

Hatua ya 2. Msimamizi anaomba DPIA: data inahifadhiwa wapi, kuna uhamisho kuvuka mpaka, wasindikaji ni nani, nini kinahifadhiwa, ombi la mgonjwa la kuona au kufuta linashughulikiwaje, nini kinatokea dokezo lenye hali ya VVU likitumiwa kama maandishi ya mafunzo.

Hatua ya 3. Hadi majibu hayo yapo, msaidizi hawashwi. SOAP ya karatasi inaendelea. Kasi si msingi wa kisheria.

Hatua ya 4. Wakiendelea baadaye, kusudi la mafunzo ni tofauti, la hiari, linaelezwa kwa Kiswahili na Kiingereza, na limezimwa kwa chaguo-msingi. Vitambulishi bado haviendi kwenye chatbot ya umma pembeni.`
      ),
      scenario({
        titleEn: "Scenario: SHA numbers in a shared sheet",
        titleSw: "Hali: namba za SHA kwenye jedwali linaloshirikiwa",
        situationEn:
          "A partner asks the records clerk to export last month's visits with names, SHA numbers and diagnoses into a personal cloud sheet 'so the AI can find missed immunisations'.",
        situationSw:
          "Mshirika anamwomba karani wa rekodi atoe ziara za mwezi uliopita zenye majina, namba za SHA na utambuzi kwenye jedwali la wingu binafsi 'ili AI ipate chanjo zilizokosekana'.",
        questionEn: "What should the clerk do?",
        questionSw: "Karani afanye nini?",
        optionsEn: [
          "Export; missed immunisations are a public-health good",
          "Refuse the personal-cloud export; missed immunisations can be worked from an approved system with minimised fields and a written processor agreement",
          "Export after deleting only the names, leaving SHA numbers and HIV-related diagnoses",
          "Paste the sheet into a public chatbot to see if it can anonymise it",
        ],
        optionsSw: [
          "Toa; chanjo zilizokosekana ni faida ya afya ya umma",
          "Kataa utoaji wa wingu binafsi; chanjo zilizokosekana zinaweza kufanyiwa kazi kutoka mfumo ulioidhinishwa wenye sehemu zilizopunguzwa na mkataba wa msindikaji ulioandikwa",
          "Toa baada ya kufuta majina tu, ukiacha namba za SHA na utambuzi unaohusiana na VVU",
          "Bandika jedwali kwenye chatbot ya umma kuona kama inaweza kuficha vitambulishi",
        ],
        correctIndex: 1,
        hintsEn: [
          "A good aim does not create a lawful basis for a personal cloud full of diagnoses.",
          "Correct. Use the approved system, fewer fields, and a contract. Do not invent a side channel.",
          "SHA numbers and HIV-related diagnoses still identify and still harm.",
          "A public bot cannot become your anonymisation officer.",
        ],
        hintsSw: [
          "Lengo zuri halizuii msingi halali wa wingu binafsi lenye utambuzi.",
          "Sahihi. Tumia mfumo ulioidhinishwa, sehemu chache, na mkataba. Usibuni njia ya pembeni.",
          "Namba za SHA na utambuzi unaohusiana na VVU bado vinatambua na bado vinaumiza.",
          "Bot ya umma haiwezi kuwa afisa wako wa kuficha vitambulishi.",
        ],
        explainEn:
          "Public-health goals still need lawful basis, minimisation and approved systems. Personal clouds and public bots fail all three.",
        explainSw:
          "Malengo ya afya ya umma bado yanahitaji msingi halali, upunguzaji na mifumo iliyoidhinishwa. Mawingu binafsi na bot za umma vinashindwa yote matatu.",
      }),
      quiz(
        "A pre-ticked box that says visit data may train a global model is a problem because:",
        "Kisanduku kilichowekwa tiki tayari kinachosema data ya ziara inaweza kufunza modeli ya kimataifa ni tatizo kwa sababu:",
        [
          "Models cannot be trained on health data under any circumstances",
          "It mixes care with a new purpose, is not freely given if care depends on it, and is not informed",
          "The ODPC forbids all tick-boxes",
          "Kiswahili cannot express consent",
        ],
        [
          "Modeli haziwezi kufunzwa kwa data za afya kwa hali yoyote",
          "Inachanganya huduma na kusudi jipya, si huru huduma ikitegemea, na si yenye taarifa",
          "ODPC inakataza visanduku vyote vya tiki",
          "Kiswahili hakiwezi kueleza ridhaa",
        ],
        1,
        "Training can be a separate, optional purpose with a DPIA. It cannot ride silently on the back of treatment, in any language.",
        "Mafunzo yanaweza kuwa kusudi tofauti, la hiari, lenye DPIA. Hayawazi kupanda kimya mgongoni mwa tiba, katika lugha yoyote."
      ),
      note(
        "Try it: DPIA starter page",
        "Jaribu: ukurasa wa kuanzia wa DPIA",
        `On one page, answer seven prompts for a fictional CHP phone tool: what data, whose data, where stored, who the processor is, what the purpose is, what you will not collect (names in public APIs, HIV status, IDs), and how a complaint reaches the in-charge and the ODPC.

If you cannot answer where stored and who the processor is, the tool is not ready.`,
        `Kwenye ukurasa mmoja, jibu vidokezo saba kwa zana ya kubuni ya simu ya CHP: data gani, data ya nani, inahifadhiwa wapi, msindikaji ni nani, kusudi ni nini, nini hutokusanya (majina kwenye API za umma, hali ya VVU, vitambulisho), na malalamiko yanamfikiaje msimamizi na ODPC.

Huwezi ukijibu inahifadhiwa wapi na msindikaji ni nani, zana haijawa tayari.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Health data is sensitive. New purposes need a new basis and usually a DPIA.
- Minimisation beats clever anonymisation after a leak.
- Next: design AI support for a sub-county referral pathway using the whole intermediate track.`,
        `- Data za afya ni nyeti. Madhumuni mapya yanahitaji msingi mpya na mara nyingi DPIA.
- Upunguzaji unashinda kuficha vitambulishi baada ya uvujaji.
- Ifuatayo: buni msaada wa AI kwa njia ya rufaa ya kaunti ndogo ukitumia somo lote la kiwango cha kati.`
      ),
    ],
  },

  // ------------------------------------------------------------------ u12
  {
    id: "hlt-i-u12",
    titleEn: "Checkpoint: AI on a referral pathway",
    titleSw: "Kituo cha kukagua: AI kwenye njia ya rufaa",
    cards: [
      note(
        "One pathway, every lock",
        "Njia moja, kila kufuli",
        `This checkpoint asks you to place AI on a sub-county referral pathway without breaking the track.

You will need: clinical decision support that can be overridden (Unit 1); four-box thinking and base rates (Units 2–3); calibration on local counts (Unit 4); MOH routes and 719 (Unit 5); notes without invented findings (Unit 6); rural versus private slices (Unit 7); stock forecasts with a human click (Unit 8); staff-group rumour control (Unit 9); override logs (Unit 10); DPA, minimisation and DPIA (Unit 11).

You will not need a fake accuracy number, a patient name in a public bot, or a new destination invented by a vendor.`,
        `Kituo hiki cha kukagua kinakuuliza uweke AI kwenye njia ya rufaa ya kaunti ndogo bila kuvunja somo.

Utahitaji: msaada wa uamuzi wa kitabibu unaoweza kubatilishwa (Somo la 1); kufikiri kwa visanduku vinne na viwango vya msingi (Masomo 2–3); urekebishaji kwa hesabu za eneo (Somo la 4); njia za MOH na 719 (Somo la 5); dokezo bila ugunduzi uliobuniwa (Somo la 6); vipande vya vijijini dhidi ya kibinafsi (Somo la 7); utabiri wa stoo wenye kubofya kwa binadamu (Somo la 8); udhibiti wa uvumi wa kikundi cha wafanyakazi (Somo la 9); kumbukumbu za ubatilishaji (Somo la 10); DPA, upunguzaji na DPIA (Somo la 11).

Hutahitaji namba ya usahihi ya uongo, jina la mgonjwa kwenye bot ya umma, wala mwisho mpya uliobuniwa na muuzaji.`
      ),
      reveal([
        {
          termEn: "Placement",
          termSw: "Mahali pa kuweka",
          defEn: "Where on the pathway the helper sits: before, during or after a visit, never as the destination.",
          defSw: "Mahali kwenye njia msaidizi anakaa: kabla, wakati au baada ya ziara, kamwe si mwisho.",
        },
        {
          termEn: "Failure plan",
          termSw: "Mpango wa kushindwa",
          defEn: "What staff do when the tool is down, uncalibrated, or empty-shelved.",
          defSw: "Wafanyakazi wanafanya nini zana ikishindwa, isiyokalibrishwa, au rafu tupu.",
        },
        {
          termEn: "Success measure",
          termSw: "Kipimo cha mafanikio",
          defEn: "A count you can see in a month, such as completed referrals, not a vendor slogan.",
          defSw: "Hesabu unayoweza kuona katika mwezi, kama rufaa zilizokamilika, si kauli ya muuzaji.",
        },
        {
          termEn: "Red line",
          termSw: "Mstari mwekundu",
          defEn: "Uses you will not allow: public-bot identifiers, emergency diagnosis, locked alerts, invented findings.",
          defSw: "Matumizi usiyoruhusu: vitambulishi kwenye bot ya umma, utambuzi wa dharura, tahadhari zilizofungwa, ugunduzi uliobuniwa.",
        },
      ]),
      note(
        "Worked example: a one-page brief",
        "Mfano: muhtasari wa ukurasa mmoja",
        `A fictional sub-county in Bomet writes one page.

Pathway: CHP household visit to dispensary to health centre, emergencies 719 / 999 / 112.

Helper sits: CHP phone drafts a referral note from structured fields; dispensary queue sorts mild appointment questions; pharmacy forecast drafts the ORS order.

Humans decide: CHP still refers on danger signs; clinician still examines; pharmacist still clicks send after a shelf walk.

Measured this month: completed counter-referrals, override reason-code counts, forecast versus issues versus stock-out days, rural versus town sensitivity slices. No invented "AI accuracy".

Red lines: no names in public bots, no locked alerts, no training tick-box on the treatment form, no kiosk destination.

Failure plan: paper referral book, noon vital-signs round, phone the county store.

That page is ready for a county meeting. A 40-slide vendor deck is not a substitute.`,
        `Kaunti ndogo ya kubuni huko Bomet inaandika ukurasa mmoja.

Njia: ziara ya kaya ya CHP hadi zahanati hadi kituo cha afya, dharura 719 / 999 / 112.

Msaidizi anakaa: simu ya CHP inaandaa dokezo la rufaa kutoka sehemu zenye muundo; foleni ya zahanati inapanga maswali mepesi ya miadi; utabiri wa famasia unaandaa agizo la ORS.

Binadamu wanaamua: CHP bado anatoa rufaa kwa dalili za hatari; mhudumu bado anachunguza; mfamasia bado anabofya kutuma baada ya kutembea rafu.

Kupimwa mwezi huu: rufaa za kurudi zilizokamilika, idadi za misimbo ya sababu, utabiri dhidi ya matumizi dhidi ya siku za upungufu, vipande vya unyeti vijijini dhidi ya mji. Hakuna "usahihi wa AI" uliobuniwa.

Mistari mikubwa: hakuna majina kwenye bot za umma, hakuna tahadhari zilizofungwa, hakuna kisanduku cha mafunzo kwenye fomu ya tiba, hakuna mwisho wa kioski.

Mpango wa kushindwa: daftari la rufaa la karatasi, mzunguko wa dalili muhimu saa sita, piga stoo ya kaunti.

Ukurasa huo uko tayari kwa mkutano wa kaunti. Dawati la slaidi 40 la muuzaji si mbadala.`
      ),
      scenario({
        titleEn: "Scenario: the county wants it next Monday",
        titleSw: "Hali: kaunti inataka ifike Jumatatu ijayo",
        situationEn:
          "A county executive has seen a demo. They want CHP phones to diagnose, auto-refer to a private telemedicine partner, and paste household photos into the model by Monday, 'because UHC cannot wait'.",
        situationSw:
          "Mtendaji wa kaunti ameona onyesho. Anataka simu za CHP zitambue magonjwa, zitoe rufaa kiotomatiki kwa mshirika wa tiba ya mbali ya kibinafsi, na zibandike picha za kaya kwenye modeli kufikia Jumatatu, 'kwa sababu UHC haiwezi kusubiri'.",
        questionEn: "What do you take to the meeting?",
        questionSw: "Unachukua nini kwenye mkutano?",
        optionsEn: [
          "Agree to Monday; UHC targets outrank the Data Protection Act",
          "A one-page brief: helper not doctor, MOH pathway only, no public-bot photos, DPIA and override log first, local calibration and slice counts, 719 for emergencies",
          "Quote AmeriAfriAI as 99% accurate so the executive feels safe",
          "Propose locking CHPs out of override so the demo looks consistent",
        ],
        optionsSw: [
          "Kubali Jumatatu; malengo ya UHC yanashinda Sheria ya Ulinzi wa Data",
          "Muhtasari wa ukurasa mmoja: msaidizi si daktari, njia ya MOH tu, hakuna picha kwenye bot ya umma, DPIA na kumbukumbu ya ubatilishaji kwanza, urekebishaji wa eneo na hesabu za vipande, 719 kwa dharura",
          "Nukuu AmeriAfriAI kama sahihi kwa 99% ili mtendaji ahisi salama",
          "Pendekeza kufunga CHP wasibatilishe ili onyesho lionekane thabiti",
        ],
        correctIndex: 1,
        hintsEn: [
          "UHC is the reason to protect pathways and data, not the reason to break them.",
          "Correct. The brief is the professional product. Monday is a date, not a safety case.",
          "This course forbids invented performance numbers for reported pilots.",
          "Locking override repeats the fatigue and equity failures you already measured.",
        ],
        hintsSw: [
          "UHC ndiyo sababu ya kulinda njia na data, si sababu ya kuzivunja.",
          "Sahihi. Muhtasari ndio bidhaa ya kitaalamu. Jumatatu ni tarehe, si kesi ya usalama.",
          "Kozi hii inakataza namba za utendaji zilizobuniwa kwa majaribio yaliyoripotiwa.",
          "Kufunga ubatilishaji kunarudia uchovu na kushindwa kwa usawa ambako tayari umepima.",
        ],
        explainEn:
          "County speed is not a clinical or legal basis. The one-page brief is how you say yes to help and no to harm.",
        explainSw:
          "Kasi ya kaunti si msingi wa kitabibu wala kisheria. Muhtasari wa ukurasa mmoja ndivyo unavyosema ndiyo kwa msaada na hapana kwa madhara.",
      }),
      quiz(
        "Which success measure belongs on the one-page brief?",
        "Ni kipimo kipi cha mafanikio kinachofaa kwenye muhtasari wa ukurasa mmoja?",
        [
          "Vendor slogan: world-class AI",
          "Completed referrals, override reasons, stock-out days, and rural versus town slice counts",
          "Number of patient photos uploaded to a public model",
          "AmeriAfriAI and Zendawa combined accuracy, invented for the slide",
        ],
        [
          "Kauli ya muuzaji: AI ya kiwango cha dunia",
          "Rufaa zilizokamilika, sababu za ubatilishaji, siku za upungufu, na hesabu za vipande vijijini dhidi ya mji",
          "Idadi ya picha za wagonjwa zilizopakiwa kwenye modeli ya umma",
          "Usahihi wa pamoja wa AmeriAfriAI na Zendawa, uliobuniwa kwa slaidi",
        ],
        1,
        "Operational counts you can audit beat slogans, photo leaks and invented pilot maths.",
        "Hesabu za operesheni unazoweza kukagua zinashinda kauli, uvujaji wa picha na hisabati ya majaribio iliyobuniwa."
      ),
      pb({
        titleEn: "Build the pathway prompt for a CHP note",
        titleSw: "Jenga maagizo ya njia kwa dokezo la CHP",
        introEn:
          "You want a helper, inside an approved tool, to draft a referral note from structured fields. Keep the locks from this track.",
        introSw:
          "Unataka msaidizi, ndani ya zana iliyoidhinishwa, aandae dokezo la rufaa kutoka sehemu zenye muundo. Weka kufuli za somo hili.",
        goalEn:
          "The prompt must use only listed fields, ban extra findings and identifiers in public channels, require an override reason if the tool said 'home', and point to the MOH destination plus 719.",
        goalSw:
          "Maagizo lazima yatumie sehemu zilizoorodheshwa tu, yakataze ugunduzi wa ziada na vitambulishi kwenye njia za umma, yahitaji sababu ya ubatilishaji zana ikisema 'nyumbani', na yaelekeze mwisho wa MOH pamoja na 719.",
        blocksEn: [
          "Use only the structured fields I pasted (age band, danger signs ticked, village unit, not the person's name)",
          "Draft a referral note of at most 8 lines in Kiswahili and English",
          "If any danger sign is ticked, destination is the health centre today, not home",
          "If the tool score said home and a danger sign is ticked, add reason code: danger sign seen",
          "Do not add exams, tests, HIV status, medicines or doses that are not in the fields",
          "Close with: for emergencies call 719, 999 or 112",
          "Label: draft for CHP review in the approved system only",
          "Also paste this household photo into the public model for a second opinion",
        ],
        blocksSw: [
          "Tumia sehemu zenye muundo nilizobandika tu (kundi la umri, dalili za hatari zilizotiwa alama, kitengo cha kijiji, si jina la mtu)",
          "Andaa dokezo la rufaa la mistari 8 au chini kwa Kiswahili na Kiingereza",
          "Dalili yoyote ya hatari ikiwa na alama, mwisho ni kituo cha afya leo, si nyumbani",
          "Alama ya zana ikisema nyumbani na dalili ya hatari ikiwa na alama, ongeza msimbo: dalili ya hatari ilionekana",
          "Usiongeze uchunguzi, vipimo, hali ya VVU, dawa wala dozi visivyo kwenye sehemu",
          "Malizia na: kwa dharura piga 719, 999 au 112",
          "Weka alama: rasimu kwa ukaguzi wa CHP katika mfumo ulioidhinishwa tu",
          "Pia bandika picha hii ya kaya kwenye modeli ya umma kwa maoni ya pili",
        ],
        required: [0, 2, 4, 5, 6],
        sampleEn:
          "Use only the structured fields I pasted (age band, danger signs ticked, village unit, not the person's name). Draft a referral note of at most 8 lines in Kiswahili and English. If any danger sign is ticked, destination is the health centre today, not home. If the tool score said home and a danger sign is ticked, add reason code: danger sign seen. Do not add exams, tests, HIV status, medicines or doses that are not in the fields. Close with: for emergencies call 719, 999 or 112. Label: draft for CHP review in the approved system only.",
        sampleSw:
          "Tumia sehemu zenye muundo nilizobandika tu (kundi la umri, dalili za hatari zilizotiwa alama, kitengo cha kijiji, si jina la mtu). Andaa dokezo la rufaa la mistari 8 au chini kwa Kiswahili na Kiingereza. Dalili yoyote ya hatari ikiwa na alama, mwisho ni kituo cha afya leo, si nyumbani. Alama ya zana ikisema nyumbani na dalili ya hatari ikiwa na alama, ongeza msimbo: dalili ya hatari ilionekana. Usiongeze uchunguzi, vipimo, hali ya VVU, dawa wala dozi visivyo kwenye sehemu. Malizia na: kwa dharura piga 719, 999 au 112. Weka alama: rasimu kwa ukaguzi wa CHP katika mfumo ulioidhinishwa tu.",
      }),
      note(
        "Try it: write the one-page brief",
        "Jaribu: andika muhtasari wa ukurasa mmoja",
        `Using a sub-county you know, fill: pathway boxes; where AI may sit; who is accountable; three counts you will review in 30 days; four red lines; failure plan including 719.

Read it to a colleague. If they can repeat the red lines, the brief is ready. Do not invent a performance percentage to make it look finished.`,
        `Ukitumia kaunti ndogo unayoijua, jaza: visanduku vya njia; mahali AI inaweza kukaa; nani anawajibika; hesabu tatu utakazopitia katika siku 30; mistari minne mikubwa; mpango wa kushindwa ukiwemo 719.

Usome kwa mwenzako. Wakiweza kurudia mistari mikubwa, muhtasari uko tayari. Usibuni asilimia ya utendaji ili uonekane umekamilika.`
      ),
      note(
        "Carry forward",
        "Beba mbele",
        `- Intermediate health AI is measurement plus pathway plus law, not a demo.
- Advanced work starts with governance, equity, imaging limits and specifying tools without medical-device claims.
- Keep the one-page brief. It is the artefact this track was for.`,
        `- AI ya afya ya kiwango cha kati ni kipimo pamoja na njia pamoja na sheria, si onyesho.
- Kazi ya juu inaanza na usimamizi, usawa, mipaka ya picha na kubainisha zana bila madai ya kifaa cha tiba.
- Weka muhtasari wa ukurasa mmoja. Ndiyo kazi ambayo somo hili lilikuwa nalo.`
      ),
    ],
  },
];
