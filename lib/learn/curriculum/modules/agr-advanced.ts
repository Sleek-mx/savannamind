import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Food and farming — advanced (builder and leader).
 * Conceptual imaging pipelines, offline deployment, drift, vendor evaluation,
 * co-op data ownership, and when not to automate spraying.
 * Fictional counties and numbers are labelled as such. No invented yield %.
 */
export const agrAdvancedUnits: CurriculumUnit[] = [
  {
    id: "agr-a-u1",
    titleEn: "Imaging pipelines, conceptually",
    titleSw: "Mifumo ya picha, kwa dhana",
    cards: [
      note(
        "Most field failures live in capture, not in the last layer",
        "Kushindwa shambani mara nyingi kuko kwenye upigaji, si kwenye safu ya mwisho",
        "An imaging pipeline is the chain from a photon hitting a sensor to a score a person can refuse. Conceptually it has stages: capture (phone or, rarely, drone; light, distance, one leaf or canopy), ingest (compress, strip GPS if policy says so), preprocess (crop, resize, colour), inference (on-device or server), and decision support (ranked names plus a refuse, never a spray instruction).\n\nStation photos and farm photos differ at capture: glare, dusty lenses, children holding the plant, flash. If you skip a capture protocol, you will spend months 'improving the model' when the distribution shift is in the photographer's elbow. Agrika-style offline photo tools succeed or fail here before they succeed or fail at convolution.\n\nRemote sensing is a parallel pipeline: Sentinel-2 tiles, cloud masks, vegetation indices, field boundaries, time series. Clouds in the long rains break optical series (intermediate Unit 6). Do not stitch last year's NDVI into the hole. Leaders specify which pipeline they are buying — leaf CNN vs satellite index — because the failure modes are different and the human who confirms is different (afisa wa ugani with a plant vs an agronomist with a map).",
        "Mfumo wa picha ni mnyororo kutoka fotoni inayogonga kitambuzi hadi alama mtu anayeweza kukataa. Kwa dhana una hatua: kupiga (simu au, nadra, drone; mwanga, umbali, jani moja au kuba), kuingiza (kukandamiza, kuondoa GPS sera ikisema), kuandaa (kukata, kubadilisha ukubwa, rangi), utabiri (kifaa au seva), na msaada wa uamuzi (majina yaliyopangwa pamoja na kukataa, si maelekezo ya kunyunyiza kamwe).\n\nPicha za kituo na za shamba zinatofautiana kwenye upigaji: mng'ao, lenzi zenye vumbi, watoto wakishika mmea, flash. Ukiruka itifaki ya kupiga, utatumia miezi kuboresha modeli mabadiliko ya usambazaji yalipo kwenye kigumba cha mpiga picha. Zana za picha bila intaneti za aina ya Agrika zinafaulu au kushindwa hapa kabla ya kufaulu au kushindwa kwenye convolution.\n\nUtambuzi wa mbali ni mfumo sambamba: vigae vya Sentinel-2, vinyago vya mawingu, faharasa za mimea, mipaka ya mashamba, mfululizo wa wakati. Mawingu katika mvua ndefu yanavunja mfululizo wa macho (Somo la 6 la kati). Usishone NDVI ya mwaka jana kwenye tundu. Viongozi wanabainisha mfumo gani wananunua — CNN ya majani dhidi ya faharasa ya satelaiti — kwa sababu namna za kushindwa ni tofauti na binadamu anayethibitisha ni tofauti (afisa wa ugani na mmea dhidi ya mtaalamu wa kilimo na ramani)."
      ),
      reveal([
        {
          termEn: "Capture protocol",
          termSw: "Itifaki ya kupiga",
          defEn: "Written rules for light, distance, whole plant vs close-up, and how many plants — before any model runs.",
          defSw: "Kanuni zilizoandikwa za mwanga, umbali, mmea mzima dhidi ya karibu, na mimea mingapi — kabla modeli yoyote haijaendesha.",
        },
        {
          termEn: "Cloud mask",
          termSw: "Kinaga cha mawingu",
          defEn: "A layer that marks which satellite pixels are cloud, so you do not treat cloud as soil or crop.",
          defSw: "Safu inayoashiria pikseli zipi za satelaiti ni wingu, ili usichukulie wingu kama udongo au zao.",
        },
        {
          termEn: "Field boundary",
          termSw: "Mpaka wa shamba",
          defEn: "The polygon you claim is one plot. Wrong boundaries mix neighbours into your NDVI.",
          defSw: "Poligoni unayodai ni kipande kimoja. Mipaka potovu inachanganya majirani kwenye NDVI yako.",
        },
        {
          termEn: "Decision support output",
          termSw: "Matokeo ya msaada wa uamuzi",
          defEn: "Ranked guesses plus refuse. Not a work order to a spray gang.",
          defSw: "Makisio yaliyopangwa pamoja na kukataa. Si agizo la kazi kwa kikosi cha kunyunyiza.",
        },
      ]),
      note(
        "Worked example: 91% on station, 70% on farm, 85% after protocol",
        "Mfano: 91% kituoni, 70% shambani, 85% baada ya itifaki",
        "Imagine a cassava-disease CNN scores 91% on station photos. On-farm in a coastal county it drops to 70% until the team standardises capture: same hand distance, indirect light, one leaf per frame, three plants per plot. Accuracy recovers to 85% without retraining. The numbers are made up; the lesson is pipeline discipline beating model complexity.\n\nThey still do not auto-spray at 85%. They attach the capture checklist to the app screen and log when users skip it. The remaining 15% includes out-of-class leaves. Those go to the officer, not to a forced name.",
        "Fikiria CNN ya magonjwa ya muhogo inapata 91% kwenye picha za kituo. Shambani katika kaunti ya pwani inashuka 70% hadi timu inasanifisha upigaji: umbali uleule wa mkono, mwanga usio wa moja kwa moja, jani moja kwa fremu, mimea mitatu kwa kipande. Usahihi unarudi 85% bila kufunza upya. Namba ni za kubuni; funzo ni nidhamu ya mfumo inashinda utata wa modeli.\n\nBado hawanunyizi otomatiki kwa 85%. Wanaambatisha orodha ya upigaji kwenye skrini ya programu na kurekodi watumiaji wanaporuka. 15% iliyobaki inajumuisha majani nje ya darasa. Hayo yanaenda kwa afisa, si kwa jina la kulazimishwa."
      ),
      scenario({
        titleEn: "Scenario: the engineer wants a bigger backbone",
        titleSw: "Hali: mhandisi anataka backbone kubwa",
        situationEn: "On-farm accuracy dropped. The ML engineer proposes swapping in a larger pretrained network. The field officer says photos are still taken at noon with flash. You chair the review.",
        situationSw: "Usahihi shambani umeshuka. Mhandisi wa ML anapendekeza kubadilisha mtandao mkubwa uliofunzwa awali. Afisa wa shamba anasema picha bado zinapigwa adhuhuri kwa flash. Wewe unasimamia mapitio.",
        questionEn: "What do you fund first?",
        questionSw: "Unafadhili nini kwanza?",
        optionsEn: [
          "The larger backbone — capacity fixes everything",
          "A capture-protocol sprint and a re-test on the same farms before any architecture change",
          "Drone imagery for all members this month",
          "Auto-spray so accuracy matters less",
        ],
        optionsSw: [
          "Backbone kubwa — uwezo unarekebisha kila kitu",
          "Mbio ya itifaki ya kupiga na jaribio upya kwenye mashamba yale yale kabla ya mabadiliko yoyote ya usanifu",
          "Picha za drone kwa wanachama wote mwezi huu",
          "Kunyunyiza otomatiki ili usahihi usiwe na maana sana",
        ],
        correctIndex: 1,
        hintsEn: [
          "Capacity on bad capture overfits glare. You will pay GPU bills for a photographer problem.",
          "Correct. Audit the pipeline before the model. That is leadership, not anti-ML.",
          "Drones add a second pipeline you cannot operate. They do not fix flash at noon.",
          "Automation would scale the 70%. That is the wrong direction.",
        ],
        hintsSw: [
          "Uwezo kwenye upigaji mbaya unaoverfit mng'ao. Utalipa bili za GPU kwa tatizo la mpiga picha.",
          "Sahihi. Kagua mfumo kabla ya modeli. Huo ni uongozi, si uadui wa ML.",
          "Drone zinaongeza mfumo wa pili usioweza kuuendesha. Hazirekebishi flash adhuhuri.",
          "Otomatiki ingepanua 70%. Huo ni mwelekeo potovu.",
        ],
        explainEn: "Pipeline first. Architecture second. Chemistry never from the score.",
        explainSw: "Mfumo kwanza. Usanifu pili. Kemia kamwe kutoka alama.",
      }),
      quiz(
        "The first audit when on-farm accuracy drops despite a strong station model is:",
        "Ukaguzi wa kwanza usahihi shambani unaposhuka licha ya modeli imara ya kituo ni:",
        [
          "The model's licence file",
          "Capture conditions: light, distance, framing, across real users",
          "The programming language",
          "Whether the app icon is green",
        ],
        [
          "Faili ya leseni ya modeli",
          "Masharti ya kupiga: mwanga, umbali, umbo, kwa watumiaji halisi",
          "Lugha ya programu",
          "Kama ikoni ya programu ni kijani",
        ],
        1,
        "Distribution shift between station capture and field capture is the top suspect. Audit the pipeline before the backbone.",
        "Mabadiliko ya usambazaji kati ya upigaji wa kituo na wa shamba ndiyo shaka kuu. Kagua mfumo kabla ya backbone."
      ),
      note(
        "Try it: draw the pipeline on one page",
        "Jaribu: chora mfumo kwenye ukurasa mmoja",
        "Boxes: capture, ingest (GPS stripped?), preprocess, infer (where?), output (refuse + person).\n\nMark the box where your last field failure probably lived. Circle the human who can stop the chain. If no human is on the page, add one before you meet a vendor.",
        "Visanduku: kupiga, kuingiza (GPS imeondolewa?), kuandaa, kutabiri (wapi?), matokeo (kukataa + mtu).\n\nAshiria kisanduku ambapo kushindwa kwako kwa mwisho shambani kunaweza kuwa kiliishi. Zungushia binadamu anayeweza kusimamisha mnyororo. Binadamu hakiko kwenye ukurasa, ongeza moja kabla ya kukutana na muuzaji."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Specify capture before you specify layers.\n- Leaf pipelines and satellite pipelines fail differently.\n- Next: adapting a pretrained vision model without pretending Iowa is Kitui.",
        "- Bainisha upigaji kabla ya kubainisha safu.\n- Mifumo ya majani na ya satelaiti hushindwa tofauti.\n- Ifuatayo: kurekebisha modeli ya maono iliyofunzwa awali bila kudhani Iowa ni Kitui."
      ),
    ],
  },
  {
    id: "agr-a-u2",
    titleEn: "Transfer learning for Kenyan leaves",
    titleSw: "Ujifunzaji wa kuhamisha kwa majani ya Kenya",
    cards: [
      note(
        "Start from a backbone, prove yourself on local photos",
        "Anza kwa backbone, jithibitishe kwenye picha za eneo",
        "Transfer learning means you take a network pretrained on a large image set, keep early layers that detect edges and textures, and train a small head on your labelled leaves. It is how a county team can work with thousands of photos instead of millions. It is not magic that makes Iowa maize into Kitui maize. The head can only learn classes you labelled. Out-of-class leaves still need a refuse.\n\nAugmentation (flips, modest colour jitter) helps a little with camera mess; it does not replace a capture protocol (Unit 1). External validation means the test photos come from farms, weeks and phones the trainers did not see. If you test on a random split of the station set, you are grading your own homework.\n\nThe sketch below freezes a small MobileNet and replaces the classifier. Comments may be translated; code stays the same in both languages. It is a teaching skeleton, not a production trainer.",
        "Ujifunzaji wa kuhamisha unamaanisha unachukua mtandao uliofunzwa awali kwenye seti kubwa ya picha, unaweka safu za mapema zinazotambua kingo na maandiko, na unafunza kichwa kidogo kwenye majani yako yenye lebo. Ndivyo timu ya kaunti inavyoweza kufanya kazi na maelfu ya picha badala ya mamilioni. Si uchawi unaofanya mahindi ya Iowa kuwa ya Kitui. Kichwa kinaweza kujifunza darasa ulizoita lebo tu. Majani nje ya darasa bado yanahitaji kukataa.\n\nUongezaji (augmentation: kugeuza, mabadiliko madogo ya rangi) unasaidia kidogo kwenye fujo ya kamera; haichukui nafasi ya itifaki ya kupiga (Somo la 1). Uthibitishaji wa nje unamaanisha picha za jaribio zinatoka mashamba, wiki na simu wakufunzi hawakuona. Ukijaribu kwenye mgao wa nasibu wa seti ya kituo, unajisahihisha kazi yako mwenyewe.\n\nMchoro hapa chini unafanda MobileNet ndogo na kubadilisha ainishaji. Maelezo yanaweza kutafsiriwa; msimbo unabaki sawa katika lugha zote mbili. Ni mifupa ya kufundishia, si mkufunzi wa uzalishaji."
      ),
      reveal([
        {
          termEn: "Backbone",
          termSw: "Backbone",
          defEn: "The pretrained layers that extract visual features; often frozen at first.",
          defSw: "Safu zilizofunzwa awali zinazotoa sifa za kuona; mara nyingi hufandwa mwanzoni.",
        },
        {
          termEn: "Head",
          termSw: "Kichwa (head)",
          defEn: "The last layers you train for your classes, for example five leaf names plus unknown.",
          defSw: "Safu za mwisho unazofunza kwa darasa lako, kwa mfano majina matano ya majani pamoja na haijulikani.",
        },
        {
          termEn: "External validation",
          termSw: "Uthibitishaji wa nje",
          defEn: "A test set from farms and phones not used in training or tuning.",
          defSw: "Seti ya jaribio kutoka mashamba na simu zisizotumika kwenye mafunzo au kurekebisha.",
        },
      ]),
      note(
        "Code walk-through: freeze, then a head",
        "Mchoro wa msimbo: fanda, kisha kichwa",
        "```\nimport torch.nn as nn\nfrom torchvision.models import mobilenet_v3_small, MobileNet_V3_Small_Weights\nweights = MobileNet_V3_Small_Weights.DEFAULT\nmodel = mobilenet_v3_small(weights=weights)\nfor p in model.parameters():\n    p.requires_grad = False\nin_f = model.classifier[-1].in_features\n# 5 named leaf classes + 1 unknown/refuse\nmodel.classifier[-1] = nn.Linear(in_f, 6)\n```\n\nAfter this you would unfreeze later blocks if the local set is large enough, always keeping a farm-held test set. Do not read a training accuracy of 99% as field readiness. Do not connect the six outputs to a sprayer GPIO.",
        "```\nimport torch.nn as nn\nfrom torchvision.models import mobilenet_v3_small, MobileNet_V3_Small_Weights\nweights = MobileNet_V3_Small_Weights.DEFAULT\nmodel = mobilenet_v3_small(weights=weights)\nfor p in model.parameters():\n    p.requires_grad = False\nin_f = model.classifier[-1].in_features\n# madarasa 5 ya majani + 1 haijulikani/kukataa\nmodel.classifier[-1] = nn.Linear(in_f, 6)\n```\n\nBaada ya hapa ungeondoa fanda kwenye visanduku vya baadaye seti ya eneo ikiwa kubwa vya kutosha, ukishika kila mara seti ya jaribio ya shamba. Usisome usahihi wa mafunzo wa 99% kama utayari wa shamba. Usiunganishe matokeo sita na GPIO ya pampu ya kunyunyizia."
      ),
      scenario({
        titleEn: "Scenario: 99% on the training folder",
        titleSw: "Hali: 99% kwenye folda ya mafunzo",
        situationEn: "A student intern reports 99% accuracy. You learn they tested on the same photos they trained on, all from one KALRO station in the long rains.",
        situationSw: "Mwanafunzi wa kazi anaripoti usahihi 99%. Unagundua walijaribu kwenye picha zilezile walizofunza, zote kutoka kituo kimoja cha KALRO katika mvua ndefu.",
        questionEn: "How do you treat the 99%?",
        questionSw: "Unaichukuliaje 99%?",
        optionsEn: [
          "Ship — 99% is excellent",
          "Reject as a field number: demand a farm-and-season held-out set and an unknown class",
          "Ship only if they unfreeze the whole backbone",
          "Ship into auto-spray because high accuracy reduces risk",
        ],
        optionsSw: [
          "Safirisha — 99% ni bora",
          "Kataa kama namba ya shamba: dai seti iliyotengwa ya shamba-na-msimu na darasa la haijulikani",
          "Safirisha tu wakiweka backbone yote wazi",
          "Safirisha kwenye unyunyizaji otomatiki kwa sababu usahihi wa juu unapunguza hatari",
        ],
        correctIndex: 1,
        hintsEn: [
          "99% on train is the definition of not yet evaluated.",
          "Correct. External validation and a refuse class are the bar, not a bigger thaw.",
          "Unfreezing without a real test set overfits the station harder.",
          "High untested accuracy plus automation is confident harm.",
        ],
        hintsSw: [
          "99% kwenye mafunzo ndiyo maana ya bado haijatathminiwa.",
          "Sahihi. Uthibitishaji wa nje na darasa la kukataa ndio kizingiti, si kuyeyusha kubwa.",
          "Kuondoa fanda bila seti halisi ya jaribio kunaoverfit kituo zaidi.",
          "Usahihi wa juu usiojaribiwa pamoja na otomatiki ni madhara yenye uhakika.",
        ],
        explainEn: "Transfer learning still needs a farm test set and a refuse class. Training accuracy is not a shipping metric.",
        explainSw: "Ujifunzaji wa kuhamisha bado unahitaji seti ya jaribio ya shamba na darasa la kukataa. Usahihi wa mafunzo si kipimo cha kusafirisha.",
      }),
      quiz(
        "The unknown/refuse class exists so that:",
        "Darasa la haijulikani/kukataa lipo ili:",
        [
          "The model can still name something when it is lost",
          "Out-of-class leaves can stop the pipeline instead of becoming a forced pest name",
          "Accuracy on the training set stays at 99%",
          "The sprayer has a sixth chemical channel",
        ],
        [
          "Modeli bado iweze kutaja kitu inapopotea",
          "Majani nje ya darasa yaweze kusimamisha mfumo badala ya kuwa jina la wadudu lililolazimishwa",
          "Usahihi kwenye seti ya mafunzo ubaki 99%",
          "Pampu iwe na kituo cha sita cha dawa",
        ],
        1,
        "A forced name on a herbicide burn is how pipelines cause shopping trips. Refuse is a feature.",
        "Jina lililolazimishwa kwenye kuungua kwa dawa ya magugu ndivyo mifumo inavyosababisha ziara za duka. Kukataa ni kipengele."
      ),
      note(
        "Try it: label guide for six buckets",
        "Jaribu: mwongozo wa lebo kwa visanduku sita",
        "Write six class names you would allow for one crop, including unknown. For each, one sentence of what the photo must show, and who confirms the label (you plus afisa wa ugani).\n\nIf you cannot name the confirmer, you are not ready to train.",
        "Andika majina sita ya darasa ungeyoruhusu kwa zao moja, pamoja na haijulikani. Kwa kila moja, sentensi moja ya kile picha lazima ionyeshe, na nani anathibitisha lebo (wewe pamoja na afisa wa ugani).\n\nHuwezi kutaja mthibitishaji, bado huja wa tayari kufunza."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Transfer learning is a head on a backbone, plus farm-held tests and a refuse class.\n- Next: running that model where the network fails.",
        "- Ujifunzaji wa kuhamisha ni kichwa kwenye backbone, pamoja na majaribio ya shamba na darasa la kukataa.\n- Ifuatayo: kuendesha modeli hiyo pale mtandao unaposhindwa."
      ),
    ],
  },
  {
    id: "agr-a-u3",
    titleEn: "Offline deployment on the phones people have",
    titleSw: "Kuweka kazini bila intaneti kwenye simu watu walizo nazo",
    cards: [
      note(
        "Offline-first is a requirement, not a nicety",
        "Bila intaneti kwanza ni sharti, si pupa",
        "Rural Kenyan wards live on intermittent 2G, expensive bundles and power cuts. A cloud-only advisory that dies at a field day is not a product. Offline-first means capture and inference work without a radio: on-device models (quantised, sometimes distilled), queued photos, sync when the hill has signal.\n\nQuantisation shrinks weights so a low-end Android can run a small CNN. Distillation trains a small student to mimic a larger teacher. Both trade a little accuracy for a device that works in the rows. Agrika-style offline photo detection is this idea in a product. FarmerAI-style SMS is the other extreme: almost no on-device model, all the intelligence in a message the tower can carry.\n\nUpdating models is part of deployment. A silent cloud swap that changes classes during peak fall armyworm season is an incident. Version the model, stage updates, keep last-known-good on disk, and never let an update enable auto-actuation of a sprayer — there should be no such pin to enable.",
        "Wadi za vijijini Kenya zinaishi kwa 2G inayokatika, fujo ghali na kukatika kwa umeme. Ushauri wa wingu tu unaokufa siku ya shamba si bidhaa. Bila intaneti kwanza kunamaanisha upigaji na utabiri vinafanya kazi bila redio: modeli kwenye kifaa (zilizopunguzwa, wakati mwingine distilled), picha kwenye foleni, kusawazisha kilima kinapokuwa na mawimbi.\n\nKupunguza (quantisation) kunafanya uzito kuwa mdogo ili Android ya bei nafuu iendeshe CNN ndogo. Distillation hufunza mwanafunzi mdogo kuiga mwalimu mkubwa. Vyote vinabadilisha usahihi kidogo kwa kifaa kinachofanya kazi kwenye mistari. Utambuzi wa picha bila intaneti wa aina ya Agrika ni wazo hili katika bidhaa. SMS ya aina ya FarmerAI ni upande mwingine: karibu hakuna modeli kwenye kifaa, akili yote kwenye ujumbe mnara unaoweza kubeba.\n\nKusasisha modeli ni sehemu ya kuweka kazini. Kubadilisha kimya mawinguni kunakobadilisha darasa wakati wa kilele cha viwavijeshi vamizi ni tukio. Weka toleo la modeli, sasisha kwa hatua, weka iliyojulikana-sawa mwisho kwenye diski, na usiruhusu sasisho liwezeshe kuendesha pampu otomatiki — hapaswi kuwa na pini kama hiyo ya kuwezesha."
      ),
      reveal([
        {
          termEn: "Quantisation",
          termSw: "Kupunguza uzito (quantisation)",
          defEn: "Storing weights in smaller integers so inference fits a cheap phone, with some accuracy cost.",
          defSw: "Kuhifadhi uzito katika namba nzima ndogo ili utabiri utoshee simu nafuu, kwa gharama fulani ya usahihi.",
        },
        {
          termEn: "Last-known-good",
          termSw: "Iliyo-sawa-mwisho",
          defEn: "The previous model kept on disk so a bad update can be rolled back in the field.",
          defSw: "Modeli iliyopita iliyohifadhiwa kwenye diski ili sasisho baya lirudishwe shambani.",
        },
        {
          termEn: "Sync-later",
          termSw: "Sawazisha baadaye",
          defEn: "Queue photos and logs offline; upload when signal returns, without blocking capture.",
          defSw: "Weka picha na kumbukumbu kwenye foleni bila intaneti; pakia mawimbi yanaporudi, bila kuzuia upigaji.",
        },
      ]),
      note(
        "Worked example: the field-day that died on 2G",
        "Mfano: siku ya shamba iliyokufa kwenye 2G",
        "A cloud-only demo in a ward with intermittent 2G fails live. A farmer asks why you brought a tool that needs what her village does not have. The engineering answer is not blame the telco. It is on-device inference, offline capture, sync later, and a paper fallback (the W-walk card) when the phone is dead.\n\nCost: a quantised student might drop station accuracy from 90% to 86% in a made-up test, and still beat a cloud tool that is down 40% of farm hours. You report both numbers. You do not hide the 86, and you do not call the cloud tool 90% in this ward.",
        "Onyesho la wingu tu katika wadi yenye 2G inayokatika linashindwa live. Mkulima anauliza kwa nini ulileta zana inayohitaji kile kijiji chake hakina. Jibu la uhandisi si kulaumu mtoa huduma. Ni utabiri kwenye kifaa, upigaji bila intaneti, kusawazisha baadaye, na mbadala wa karatasi (kadi ya tembezi ya W) simu ikiwa imekufa.\n\nGharama: mwanafunzi aliyepunguzwa anaweza kushusha usahihi wa kituo kutoka 90% hadi 86% katika jaribio la kubuni, na bado kushinda zana ya wingu ambayo haipo 40% ya saa za shamba. Unaripoti namba zote. Hufichi 86, wala huitii zana ya wingu 90% katika wadi hii."
      ),
      scenario({
        titleEn: "Scenario: the silent model swap",
        titleSw: "Hali: kubadilisha modeli kimya",
        situationEn: "Overnight the vendor pushes a new class list to phones that could connect. Phones that could not still run last week's classes. Officers start seeing different names for the same leaf.",
        situationSw: "Usiku muuzaji anasukuma orodha mpya ya darasa kwa simu zilizoweza kuunganisha. Simu zisizoweza bado zinaendesha darasa la wiki iliyopita. Maafisa wanaanza kuona majina tofauti kwa jani lilelile.",
        questionEn: "What is the operational response?",
        questionSw: "Jibu la uendeshaji ni lipi?",
        optionsEn: [
          "Tell officers to trust whichever name is newer",
          "Freeze updates, roll back to last-known-good, version every result with model id, and re-stage the release",
          "Delete offline mode so everyone is forced to the cloud",
          "Enable auto-spray only on the new model to speed adoption",
        ],
        optionsSw: [
          "Waambie maafisa waamini jina lolote lililo jipya",
          "Simamisha sasisho, rudi kwa iliyo-sawa-mwisho, weka toleo kwenye kila tokeo na kitambulisho cha modeli, na sasisha tena kwa hatua",
          "Futa hali ya bila intaneti ili kila mtu alazimishwe mawinguni",
          "Wezesha unyunyizaji otomatiki kwenye modeli mpya tu kuharakisha kupitisha",
        ],
        correctIndex: 1,
        hintsEn: [
          "Newer is not a protocol. Split-brain names destroy the confusion matrix.",
          "Correct. Versioning and rollback are MLOps, not luxury.",
          "Punishing offline users punishes the people the product was for.",
          "Automation on an inconsistent class list is indefensible.",
        ],
        hintsSw: [
          "Jipya si itifaki. Majina ya ubongo-mgawanyiko yanaharibu matriki ya kuchanganyikiwa.",
          "Sahihi. Toleo na kurudisha ni MLOps, si anasa.",
          "Kuwaadhibu watumiaji wa bila intaneti ni kuwaadhibu watu bidhaa ilikuwa yao.",
          "Otomatiki kwenye orodha ya darasa isiyolingana haiwezi kutetelewa.",
        ],
        explainEn: "Offline fleets drift unless you version, stage and roll back. Never 'fix' drift with actuation.",
        explainSw: "Meli za bila intaneti zinazama usipoweka toleo, hatua na kurudisha. Usirekebishe mabadiliko kwa kuendesha pampu.",
      }),
      quiz(
        "The default architecture for most Kenyan field imaging is:",
        "Usanifu wa kawaida kwa picha nyingi za shamba Kenya ni:",
        [
          "Cloud-only inference with no queue",
          "On-device or cached inference, offline capture, sync when connected",
          "Desktop tower in the county HQ as the only node",
          "SMS that contains a millilitre dose",
        ],
        [
          "Utabiri wa wingu tu bila foleni",
          "Utabiri kwenye kifaa au kwenye kumbukumbu, upigaji bila intaneti, kusawazisha ukiunganishwa",
          "Mnara wa dawati katika makao makuu ya kaunti kama nodi pekee",
          "SMS yenye kipimo cha mililita",
        ],
        1,
        "Offline-first, sync-later matches 2G and bundle reality. Doses still do not belong on any channel.",
        "Bila intaneti kwanza, sawazisha baadaye inafanana na ukweli wa 2G na fujo. Vipimo bado haviko kwenye njia yoyote."
      ),
      note(
        "Try it: two-mode failure table",
        "Jaribu: jedwali la kushindwa kwa hali mbili",
        "Columns: No signal, Phone dead, Update half-applied. Rows: what the farmer can still do, what is logged, who they call.\n\nIf any cell is 'wait for the vendor', redesign.",
        "Safu: Hakuna mawimbi, Simu imekufa, Sasisho limetumika nusu. Mistari: mkulima bado anaweza kufanya nini, nini kinarekodiwa, nani wanapiga.\n\nKisanduku chochote kikiwa subiri muuzaji, buni upya."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Quantise, queue, version, roll back.\n- Offline is for capture and inference, not for silent chemistry.\n- Next: seasons will still move the data under you.",
        "- Punguza, weka foleni, toleo, rudi nyuma.\n- Bila intaneti ni kwa upigaji na utabiri, si kwa kemia ya kimya.\n- Ifuatayo: misimu bado itasogeza data chini yako."
      ),
    ],
  },
  {
    id: "agr-a-u4",
    titleEn: "Seasonal drift as routine maintenance",
    titleSw: "Mabadiliko ya msimu kama matunzo ya kawaida",
    cards: [
      note(
        "Agriculture is seasonal; your monitor must be too",
        "Kilimo ni cha misimu; kimonita chako lazima kiwe hivyo pia",
        "Data drift is when input patterns shift so yesterday's accuracy no longer holds: new weather, new varieties, new cameras, a new pest generation. Fall armyworm reached Kenya around 2017 and did not stay a one-season curiosity. A disease CNN trained before a wet year will meet different lesions after it.\n\nConceptually you watch three things: the inputs (are photos paler, dustier, later in the day?), the outputs (is the unknown class suddenly 40% of guesses?), and a labelled slice when officers confirm. Champion–challenger means a new model runs quietly beside the live one and is promoted only when it beats the live model on real farm labels — not on a vendor laptop.\n\nFeedback loops matter. If advisories change planting, next season's data is partly your own advice. You can silently retrain on your own words. Keep a hold-out of plots that did not follow the tool, if ethics and consent allow, or at least tag which records were influenced.",
        "Mabadiliko ya data ni pale mifumo ya ingizo inaposogea hivi kwamba usahihi wa jana hautoshi: hali ya hewa mpya, aina mpya, kamera mpya, kizazi kipya cha wadudu. Viwavijeshi vamizi vilifika Kenya karibu 2017 na havikubaki udadisi wa msimu mmoja. CNN ya magonjwa iliyofunzwa kabla ya mwaka wa mvua itakutana na vidonda tofauti baada yake.\n\nKwa dhana unaangalia mambo matatu: ingizo (picha ni mepesi, vumbi, za baadaye mchana?), matokeo (darasa la haijulikani ghafla ni 40% ya makisio?), na kipande chenye lebo maafisa wanapothibitisha. Bingwa–mchangani unamaanisha modeli mpya inafanya kazi kimya pembeni ya ile hai na inatangazwa tu inaposhinda ile hai kwenye lebo halisi za shamba — si kwenye kompyuta ndogo ya muuzaji.\n\nMizunguko ya maoni ni muhimu. Ushauri ukibadilisha kupanda, data ya msimu ujao ni sehemu ushauri wako. Unaweza kufunza kimya kwa maneno yako. Shika kipande cha mashamba ambayo hayakufuata zana, maadili na ridhaa zikiruhusu, au angalau tia alama rekodi zipi ziliathiriwa."
      ),
      reveal([
        {
          termEn: "Data drift",
          termSw: "Mabadiliko ya data",
          defEn: "Inputs shift over time so the live model's error profile is no longer the one you certified.",
          defSw: "Ingizo linasogea kadri muda unavyopita hivi kwamba wasifu wa kosa la modeli hai si ule ulioidhinisha.",
        },
        {
          termEn: "Champion–challenger",
          termSw: "Bingwa–mchangani",
          defEn: "A candidate model scores quietly beside the live one and replaces it only on better farm labels.",
          defSw: "Modeli mpya inapata alama kimya pembeni ya ile hai na kuibadilisha tu kwa lebo bora za shamba.",
        },
        {
          termEn: "Feedback loop",
          termSw: "Mzunguko wa maoni",
          defEn: "The tool's advice changes future data, which can retrain the tool on itself.",
          defSw: "Ushauri wa zana unabadilisha data ijayo, ambayo inaweza kufunza zana kwa yenyewe.",
        },
      ]),
      note(
        "Worked example: unknown class jumps after the short rains",
        "Mfano: darasa la haijulikani linaruka baada ya mvua fupi",
        "Live model unknown-rate sits near 8% through the long rains. After a delayed short rains it sits at 31% for two weeks. Officers confirm many of those leaves are a nutrient pattern rare in the training set. You do not lower the refuse threshold to 'fix' the dashboard. You collect labelled locals, train a challenger, and compare four boxes on a fresh farm slice. Yield language stays out of the incident report.",
        "Kiwango cha haijulikani cha modeli hai kiko karibu 8% katika mvua ndefu. Baada ya mvua fupi zilizochelewa kiko 31% kwa wiki mbili. Maafisa wanathibitisha majani mengi ya hayo ni muundo wa lishe uliokuwa nadra kwenye seti ya mafunzo. Hushushi kizingiti cha kukataa kurekebisha dashibodi. Unakusanya za eneo zenye lebo, unafunza mchangani, na unalinganisha visanduku vinne kwenye kipande kipya cha shamba. Lugha ya mavuno inakaa nje ya ripoti ya tukio."
      ),
      scenario({
        titleEn: "Scenario: retrain on last week's yeses",
        titleSw: "Hali: funza upya kwa ndiyo za wiki iliyopita",
        situationEn: "An engineer proposes retraining weekly using every leaf the app named, treating the model's own yes as the label, to 'keep up with the season'.",
        situationSw: "Mhandisi anapendekeza kufunza upya kila wiki ukitumia kila jani programu ililotaja, akichukulia ndiyo ya modeli kama lebo, ili kuendana na msimu.",
        questionEn: "Why is this unsafe?",
        questionSw: "Kwa nini hii si salama?",
        optionsEn: [
          "Weekly training is always too expensive",
          "You would be labelling the world with the model's own mistakes and amplifying drift",
          "Seasons do not affect leaves",
          "It is unsafe only if you also auto-spray",
        ],
        optionsSw: [
          "Mafunzo ya kila wiki huwa ghali mno kila mara",
          "Ungekuwa unaweka lebo duniani kwa makosa ya modeli yenyewe na kukuza mabadiliko",
          "Misimu haiathiri majani",
          "Si salama tu kama pia unanyunyiza otomatiki",
        ],
        correctIndex: 1,
        hintsEn: [
          "Cost is real but not the safety bug. Self-labelling is.",
          "Correct. Ground truth remains officer-confirmed photos, not the model's echo.",
          "Seasons are exactly why you retrain — with real labels.",
          "Self-training is already unsafe. Auto-spray would make it catastrophic. You still refuse both.",
        ],
        hintsSw: [
          "Gharama ni halisi lakini si hitilafu ya usalama. Kujiwekea lebo ndiyo.",
          "Sahihi. Ukweli wa shamba unabakia picha zilizothibitishwa na afisa, si mwangwi wa modeli.",
          "Misimu ndiyo sababu unafunza upya — kwa lebo halisi.",
          "Kujifunza mwenyewe tayari si salama. Kunyunyiza otomatiki kungefanya kuwa janga. Bado unakataa vyote.",
        ],
        explainEn: "Retrain on confirmed labels, as a challenger, on a schedule. Never on the model's own yeses.",
        explainSw: "Funza upya kwa lebo zilizothibitishwa, kama mchangani, kwa ratiba. Si kwa ndiyo za modeli yenyewe kamwe.",
      }),
      quiz(
        "After one rainy season your classifier's field accuracy falls. The most likely cause is:",
        "Baada ya msimu mmoja wa mvua, usahihi wa ainishaji wako shambani unashuka. Sababu yenye uwezekano mkubwa ni:",
        [
          "Users became lazier",
          "Data drift: weather and disease patterns the training set never saw",
          "The API key expired",
          "Farmers deleted the app",
        ],
        [
          "Watumiaji wamelegea",
          "Mabadiliko ya data: hali ya hewa na magonjwa seti ya mafunzo haijawahi kuona",
          "Ufunguo wa API uliisha",
          "Wakulima walifuta programu",
        ],
        1,
        "Plan periodic retraining with fresh local, confirmed samples as maintenance, not as an emergency.",
        "Panga kufunza upya kwa mifano mipya ya eneo iliyothibitishwa kama matunzo, si dharura."
      ),
      note(
        "Try it: a drift dashboard on paper",
        "Jaribu: dashibodi ya mabadiliko kwenye karatasi",
        "Three weekly numbers you would plot: unknown-rate, share of photos failing the capture checklist, officer disagreement rate.\n\nWrite the threshold at which you freeze promotion of a challenger. If you have no officer disagreement line, you are flying blind.",
        "Namba tatu za kila wiki ungechora: kiwango cha haijulikani, sehemu ya picha zinazoshindwa orodha ya upigaji, kiwango cha kutokubaliana na afisa.\n\nAndika kizingiti ambacho unasimamisha kutangaza mchangani. Huna mstari wa kutokubaliana na afisa, unaruka kipofu."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Watch inputs, unknown-rate and confirmed slices.\n- Challengers beat champions only on farm labels.\n- Next: the hard stop — when not to automate spraying.",
        "- Angalia ingizo, kiwango cha haijulikani na vipande vilivyothibitishwa.\n- Wachangani wanashinda mabingwa tu kwenye lebo za shamba.\n- Ifuatayo: kituo kigumu — lini usinyunyize otomatiki."
      ),
    ],
  },
  {
    id: "agr-a-u5",
    titleEn: "When not to automate spraying",
    titleSw: "Lini usinyunyize otomatiki",
    cards: [
      note(
        "There is no safe GPIO from a leaf score to a nozzle",
        "Hakuna GPIO salama kutoka alama ya jani hadi pua ya pampu",
        "Closed-loop spraying — a model that directly triggers a drone, boom or hired gang — fails every duty this course taught. Chemical use in Kenya is a human decision using a PCPB label, an agrovet, and the afisa wa ugani. A score has no legal product, no pre-harvest interval, no protective clothing, no bee awareness, no budget, and no liability.\n\nWhen not to automate (which is: do not):\n\n- Any pesticide, herbicide or fungicide actuation from a confidence number.\n- Any mixing recipe generated by a language model.\n- Any dispatch that bypasses the officer because 'the model is 91%'.\n- Any system that hides the refuse class to keep the gang busy.\n\nWhat you may automate: queues (this plot is next for a walk), reminders, translation of a leaflet the officer already chose, stock search of PCPB-registered products at an agrovet (Agrika-style) without choosing the dose. Units 1–5 of this advanced track are a complete warning: even a beautiful pipeline, transferred, offline and monitored, stops before chemistry. Younger learners on the beginner track already met this rule. You, as a builder, must encode it as a hard refusal, not as a settings checkbox.",
        "Kunyunyiza kwa mzunguko funge — modeli inayowasha moja kwa moja drone, boom au kikosi kilichoajiriwa — inashindwa kila wajibu kozi hii ilifundisha. Matumizi ya dawa Kenya ni uamuzi wa binadamu ukitumia lebo ya PCPB, agrovet, na afisa wa ugani. Alama haina bidhaa ya kisheria, kipindi kabla ya mavuno, mavazi ya kujikinga, uangalifu wa nyuki, bajeti, wala dhima.\n\nLini usinyunyize otomatiki (yaani: usifanye):\n\n- Kuendesha dawa yoyote ya wadudu, magugu au kuvu kutoka namba ya uhakika.\n- Mapishi yoyote ya kuchanganya yaliyotengenezwa na modeli ya lugha.\n- Kutuma kunakopitisha afisa kwa sababu modeli ni 91%.\n- Mfumo wowote unaoficha darasa la kukataa kuweka kikosi kikiwa na kazi.\n\nUnachoweza kuotomatiki: foleni (kipande hiki ni kinachofuata kwa tembezi), vikumbusho, tafsiri ya kijitabu afisa alichochagua tayari, utafutaji wa stock wa bidhaa zilizosajiliwa na PCPB kwenye agrovet (aina ya Agrika) bila kuchagua kipimo. Masomo 1–5 ya kozi hii ya juu ni onyo kamili: hata mfumo mzuri, uliohamishwa, bila intaneti na unaofuatiliwa, unasimama kabla ya kemia. Wanafunzi wadogo kwenye kozi ya kuanzia tayari walikutana na kanuni hii. Wewe, kama mjengaji, lazima uandike kama kukataa gumu, si kisanduku cha mipangilio."
      ),
      reveal([
        {
          termEn: "Closed loop",
          termSw: "Mzunguko funge",
          defEn: "Model output directly drives a machine or a gang without a named human who can stop it.",
          defSw: "Matokeo ya modeli yanaendesha moja kwa moja mashine au kikosi bila binadamu aliye tajiwa anayeweza kusimamisha.",
        },
        {
          termEn: "Hard refusal",
          termSw: "Kukataa gumu",
          defEn: "A product rule that cannot be toggled by a sales flag: no dose, no dispatch, no GPIO.",
          defSw: "Kanuni ya bidhaa isiyoweza kuzimwa na bendera ya mauzo: hakuna kipimo, hakuna kutuma, hakuna GPIO.",
        },
        {
          termEn: "Open loop",
          termSw: "Mzunguko wazi",
          defEn: "The model queues a human. The human reads the label. That is the allowed architecture.",
          defSw: "Modeli inaweka binadamu kwenye foleni. Binadamu anasoma lebo. Huo ndio usanifu unaoruhusiwa.",
        },
      ]),
      note(
        "Worked example: the drone appendix",
        "Mfano: kiambatisho cha drone",
        "A vendor offers 'precision spraying drones triggered at 70% pest confidence'. In the made-up demo they show a lush station plot. You ask: which PCPB products, which buffer from water, who holds the licence, what happens at 69%, who is liable if the class is wrong. They say the AI is the licence.\n\nYou write a one-line architectural decision: no actuation pin exists in our deployment. Drones, if any, are flown by licensed operators after an officer's written plan, not by a softmax. The county letter of support is withheld. This is not fear of drones. It is refusal to launder a pesticide decision through a probability.",
        "Muuzaji anatoa drone za kunyunyiza kwa usahihi zinazowashwa kwa uhakika 70% wa wadudu. Katika onyesho la kubuni wanaonyesha kipande kizuri cha kituo. Unauliza: bidhaa zipi za PCPB, buffer gani kutoka maji, nani ana leseni, nini kinatokea kwa 69%, nani ana dhima darasa likiwa potovu. Wanasema AI ndiyo leseni.\n\nUnaandika uamuzi mmoja wa usanifu: hakuna pini ya kuendesha katika uwekaji wetu kazini. Drone, kama zipo, hurushwa na waendeshaji wenye leseni baada ya mpango wa afisa ulioandikwa, si kwa softmax. Barua ya kaunti ya kuunga mkono inazuiliwa. Hii si hofu ya drone. Ni kukataa kuficha uamuzi wa dawa kupitia uwezekano."
      ),
      scenario({
        titleEn: "Scenario: the checkbox called 'expert mode'",
        titleSw: "Hali: kisanduku kiitwacho hali ya mtaalamu",
        situationEn: "Engineering added an Expert mode toggle that lets a co-op chair enable auto-dispatch of a spray gang. It is off by default. Sales wants it on in the demo.",
        situationSw: "Uhandisi uliongeza kigezo cha hali ya mtaalamu kinachomruhusu mwenyekiti wa co-op kuwezesha kutuma otomatiki kikosi cha kunyunyiza. Kimezimwa kwa kawaida. Mauzo yanataka kiwashwe kwenye onyesho.",
        questionEn: "Your call as product lead?",
        questionSw: "Uamuzi wako kama kiongozi wa bidhaa?",
        optionsEn: [
          "Leave the toggle; default off is responsible enough",
          "Remove the toggle and the dispatch API; expert users still go through officer plus label",
          "Enable it for the demo then disable it",
          "Rename it to 'precision agriculture' so the county likes it",
        ],
        optionsSw: [
          "Acha kigezo; kuzimwa kwa kawaida kunatosha kuwajibika",
          "Ondoa kigezo na API ya kutuma; watumiaji wataalamu bado wanapitia afisa pamoja na lebo",
          "Kiwashe kwa onyesho kisha uzime",
          "Kiite kilimo cha usahihi ili kaunti ipende",
        ],
        correctIndex: 1,
        hintsEn: [
          "A toggle will be switched on the day a pest rumour hits the group. Defaults are not a safety case.",
          "Correct. Hard refusal means the capability is absent, not hidden.",
          "Demo-on is how features become production. Do not.",
          "Renaming a hazard is still the hazard.",
        ],
        hintsSw: [
          "Kigezo kitawashwa siku uvumi wa wadudu unapopiga kikundi. Chaguo-msingi si kesi ya usalama.",
          "Sahihi. Kukataa gumu kunamaanisha uwezo haupo, si umefichwa.",
          "Kuweka kwenye onyesho ndivyo vipengele vinavyokuwa uzalishaji. Usifanye.",
          "Kupa hatari jina jipya bado ni hatari.",
        ],
        explainEn: "If the gang can be dispatched from software, someone will. Delete the capability.",
        explainSw: "Kikosi kikiweza kutumwa kutoka programu, mtu atafanya. Futa uwezo."
      }),
      quiz(
        "Which automation is in scope for a Kenyan farm-advice system in this course?",
        "Otomatiki ipi iko ndani ya wigo kwa mfumo wa ushauri wa shamba Kenya katika kozi hii?",
        [
          "Triggering a UAV sprayer at 80% confidence",
          "Queuing a scout walk and drafting questions for the afisa wa ugani",
          "Generating millilitres per litre from a chatbot",
          "Locking the agrovet till until the model is obeyed",
        ],
        [
          "Kuweka drone ya kunyunyiza kwa uhakika 80%",
          "Kuweka tembezi ya mkaguzi kwenye foleni na kuandaa maswali kwa afisa wa ugani",
          "Kutengeneza mililita kwa lita kutoka chatbot",
          "Kufuli till ya agrovet hadi modeli itiwe",
        ],
        1,
        "Queue and draft are open-loop. Actuation, doses and coercion are out. That is the mini-course stop.",
        "Foleni na kuandaa ni mzunguko wazi. Kuendesha, vipimo na kulazimisha viko nje. Hicho ndicho kituo cha kozi fupi."
      ),
      note(
        "Try it: write the hard-refusal clause",
        "Jaribu: andika kifungu cha kukataa gumu",
        "Four sentences for a contract or model card: no actuation, no doses, no dispatch API, liability stays with the human who reads the PCPB label.\n\nIf a vendor will not sign it, they are not your vendor.",
        "Sentensi nne kwa mkataba au model card: hakuna kuendesha, hakuna vipimo, hakuna API ya kutuma, dhima inabaki kwa binadamu anayesoma lebo ya PCPB.\n\nMuuzaji asipoweka saini, si muuzaji wako."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Open loop only: queue humans, never nozzles.\n- Toggles are not safety. Absence of the API is.\n- Next: reading a satellite series without inventing clouds away.",
        "- Mzunguko wazi tu: weka binadamu kwenye foleni, si pua za pampu.\n- Vigezo si usalama. Kukosa API ndiyo.\n- Ifuatayo: kusoma mfululizo wa satelaiti bila kubuni mawingu mbali."
      ),
    ],
  },
  {
    id: "agr-a-u6",
    titleEn: "Satellites, clouds and field polygons",
    titleSw: "Satelaiti, mawingu na poligoni za mashamba",
    cards: [
      note(
        "A green pixel is not a yield, and a cloud is not soil",
        "Pikseli kijani si mavuno, na wingu si udongo",
        "Optical satellites such as Sentinel-2 give free 10 m imagery about every five days. A vegetation index (NDVI and cousins) summarises how red vs near-infrared a pixel looks; greening often raises it. That is a canopy hint, not a bag count, not a pest name, and not a fertiliser dose.\n\nCloud masking is not optional in Kenya's long rains. If you skip it, clouds become 'bare soil' or 'failed crop' in the time series. Do not backfill with last year. Radar can see through some cloud but is a different pipeline with its own mistakes; do not bluff that you have fused them if you have not.\n\nField boundaries decide whose green you are measuring. A polygon that swallows the neighbour's tea into a maize field will invent a crop the farmer does not grow. Smallholder plots are often smaller than a few pixels; 10 m is coarse for a 0.25 acre kitchen garden. Say so in the model card. Use satellite series to queue walks, not to skip them.",
        "Satelaiti za macho kama Sentinel-2 hutoa picha za bure za m 10 takriban kila siku tano. Faharasa ya mimea (NDVI na jamaa) inafupisha jinsi pikseli inavyoonekana nyekundu dhidi ya infrared ya karibu; kijani mara nyingi huipandisha. Hiyo ni kidokezo cha kuba, si hesabu ya magunia, si jina la wadudu, wala si kipimo cha mbolea.\n\nKinaga cha mawingu si hiari katika mvua ndefu za Kenya. Ukiruka, mawingu yanakuwa udongo uchi au zao lililoshindwa katika mfululizo wa wakati. Usijaze kwa mwaka jana. Radar inaweza kuona kupitia wingu fulani lakini ni mfumo tofauti wenye makosa yake; usidanganye umeunganisha usipokuwa umefanya.\n\nMipaka ya shamba inaamua kijani cha nani unapima. Poligoni inayomeza chai ya jirani kwenye mahindi itabuni zao mkulima asalimi. Vipande vya wakulima wadogo mara nyingi ni vidogo kuliko pikseli chache; m 10 ni mchafu kwa bustani ya ekari 0.25. Sema hivyo kwenye model card. Tumia mfululizo wa satelaiti kuweka tembezi kwenye foleni, si kuziruka."
      ),
      reveal([
        {
          termEn: "NDVI",
          termSw: "NDVI",
          defEn: "A greenness index from optical bands. Useful for greening trends; useless as a harvest certificate.",
          defSw: "Faharasa ya kijani kutoka bendi za macho. Yenye manufaa kwa mwelekeo wa kijani; si cheti cha mavuno.",
        },
        {
          termEn: "Mixed pixel",
          termSw: "Pikseli mchanganyiko",
          defEn: "One 10 m cell that covers two crops, a path and a roof — common on smallholder mosaics.",
          defSw: "Seli moja ya m 10 inayofunika mazao mawili, njia na paa — ya kawaida kwenye mozaiki ya wakulima wadogo.",
        },
        {
          termEn: "Spatial leakage",
          termSw: "Uvujaji wa nafasi",
          defEn: "Training and testing on overlapping nearby pixels so the model memorises the neighbourhood, not the crop.",
          defSw: "Kufunza na kujaribu kwenye pikseli jirani zinazoingiliana ili modeli ikariri jirani, si zao.",
        },
      ]),
      note(
        "Worked example: leakage across the fence",
        "Mfano: uvujaji kuvuka uzio",
        "A yield model is trained on 80% of pixels in a ward and tested on a random 20%. Accuracy looks high. Those test pixels sit five metres from training pixels in the same field. That is spatial leakage. A honest split holds out whole farms or whole sub-locations. After you do that, the number drops — and becomes real. You still do not publish it as a proven harvest gain. You publish: index tracks greening; bags still come from the notebook.",
        "Modeli ya mavuno inafunzwa kwenye 80% ya pikseli za wadi na kujaribiwa kwenye 20% ya nasibu. Usahihi unaonekana juu. Pikseli hizo za jaribio ziko mita tano kutoka pikseli za mafunzo kwenye shamba lilelile. Huo ni uvujaji wa nafasi. Mgao wa uaminifu unatenga mashamba yote au maeneo madogo yote. Ukifanya hivyo, namba inashuka — na inakuwa halisi. Bado huchapishi kama faida ya mavuno iliyothibitishwa. Unachapisha: faharasa inafuatilia kijani; magunia bado yanatoka daftari."
      ),
      scenario({
        titleEn: "Scenario: NDVI says the maize failed",
        titleSw: "Hali: NDVI inasema mahindi yameshindwa",
        situationEn: "A dashboard flags a member's polygon as failed crop. She says she planted beans this season, and last week's images were cloudy. The polygon still has last year's maize label.",
        situationSw: "Dashibodi inaashiria poligoni ya mwanachama kama zao lililoshindwa. Anasema alipanda maharagwe msimu huu, na picha za wiki iliyopita zilikuwa na mawingu. Poligoni bado ina lebo ya mahindi ya mwaka jana.",
        questionEn: "What should the operations lead do?",
        questionSw: "Kiongozi wa uendeshaji afanye nini?",
        optionsEn: [
          "Keep the failed-crop flag — NDVI does not lie",
          "Treat it as a data incident: stale crop label plus unmasked cloud; send a person; do not trigger any input purchase",
          "Recommend a fertiliser pack to recover the maize",
          "Delete her from the co-op for arguing with the satellite",
        ],
        optionsSw: [
          "Weka bendera ya zao lililoshindwa — NDVI hasemi uongo",
          "Ichukulie kama tukio la data: lebo ya zao iliyopitwa pamoja na wingu lisilofunikwa; tuma mtu; usichochee ununuzi wowote wa pembejeo",
          "Pendekeza pakiti ya mbolea kurejesha mahindi",
          "Mfute kwenye co-op kwa kubishana na satelaiti",
        ],
        correctIndex: 1,
        hintsEn: [
          "NDVI lies whenever the mask or the crop label lies. Both did.",
          "Correct. Fix labels and masks; walk the plot; no shopping from a pixel.",
          "Fertiliser for a crop she did not plant is the satellite shopping for her.",
          "Members correcting labels are the ground truth. Do not punish them.",
        ],
        hintsSw: [
          "NDVI inasema uongo kinyago au lebo ya zao inaposema uongo. Vyote vilifanya.",
          "Sahihi. Rekabilisha lebo na vinyago; tembea kipande; hakuna ununuzi kutoka pikseli.",
          "Mbolea kwa zao asilolipanda ni satelaiti inayomnunulia.",
          "Wanachama wanaosahihisha lebo ndio ukweli wa shamba. Usiwaadhibu.",
        ],
        explainEn: "Stale polygons and clouds are pipeline bugs. People, not pixels, decide inputs.",
        explainSw: "Poligoni zilizopitwa na mawingu ni hitilafu za mfumo. Watu, si pikseli, wanaamua pembejeo.",
      }),
      quiz(
        "The honest limitation to print on a smallholder NDVI product is:",
        "Kizuizi cha uaminifu kuchapisha kwenye bidhaa ya NDVI ya mkulima mdogo ni:",
        [
          "10 m pixels often mix crops and paths; clouds block long rains; greening is not bags",
          "Sentinel-2 cannot work in Africa",
          "NDVI replaces extension walks",
          "Yield is proven to rise 15% when NDVI is shown",
        ],
        [
          "Pikseli za m 10 mara nyingi huchanganya mazao na njia; mawingu huzuia mvua ndefu; kijani si magunia",
          "Sentinel-2 haiwezi kufanya kazi Afrika",
          "NDVI inachukua nafasi ya tembezi za ugani",
          "Mavuno yamethibitishwa kupanda 15% NDVI inapoonyeshwa",
        ],
        0,
        "State resolution, clouds and the non-equivalence with harvest. Do not invent a yield percent or a continental impossibility.",
        "Eleza azimio, mawingu na kutokuwa sawa na mavuno. Usibuni asilimia ya mavuno wala kutowezekana kwa bara."
      ),
      note(
        "Try it: one polygon critique",
        "Jaribu: ukosoaji wa poligoni moja",
        "On a printed satellite screenshot or a memory of a plot you know, list three things inside one 10 m idea of a pixel (crop, path, tree, roof).\n\nWrite whether NDVI for that cell could be trusted as 'the farm'. Then write who would walk it.",
        "Kwenye picha ya satelaiti iliyochapishwa au kumbukumbu ya kipande unachokijua, orodhesha vitu vitatu ndani ya wazo moja la pikseli ya m 10 (zao, njia, mti, paa).\n\nAndika kama NDVI ya seli hiyo ingeaminika kama shamba. Kisha andika nani angetembea."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Mask clouds, hold out whole farms, do not mint yield from greenness.\n- Next: outbreak early warning — time series without turning a flag into a spray week.",
        "- Funga mawingu, tenga mashamba yote, usitengeneze mavuno kutoka kijani.\n- Ifuatayo: onyo la mapema la mlipuko — mfululizo wa wakati bila kugeuza ishara kuwa wiki ya kunyunyiza."
      ),
    ],
  },
  {
    id: "agr-a-u7",
    titleEn: "Outbreak early warning without a spray week",
    titleSw: "Onyo la mapema la mlipuko bila wiki ya kunyunyiza",
    cards: [
      note(
        "A rising curve is a reason to look, not a calendar of bottles",
        "Mviringo unaopanda ni sababu ya kuangalia, si kalenda ya chupa",
        "Fall armyworm reached Kenya around 2017. Desert locusts surged in East Africa in 2019–2021. Early warning systems combine traps, scouting counts, weather, sometimes satellite greenness, and models that forecast spread. Those models are time series with huge uncertainty. They are useful when they move officers and community scouts earlier. They are harmful when a ministry dashboard becomes a national spray week with no labels and no thresholds from agronomy.\n\nYour job as a builder is to put confidence intervals and a human playbook on the chart: if predicted risk rises, we inspect N traps and M W-walks per ward; if counts pass the officer's line, they — not the chart — consider registered options. Locust operations have their own command structures; do not freelance a chatbot into them.\n\nDo not claim a model 'prevented' an outbreak unless you have a serious counterfactual. Process metrics (hours-to-first-scout after a flag) are the honest ones.",
        "Viwavijeshi vamizi vilifika Kenya karibu 2017. Nzige wa jangwani waliongezeka Afrika Mashariki 2019–2021. Mifumo ya onyo la mapema huchanganya mitego, hesabu za ukaguzi, hali ya hewa, wakati mwingine kijani cha satelaiti, na modeli zinazotabiri kuenea. Modeli hizo ni mfululizo wa wakati wenye mashaka makubwa. Zina manufaa zinaposogeza maafisa na wakaguzi wa jamii mapema. Ni hatari dashibodi ya wizara inapokuwa wiki ya kitaifa ya kunyunyiza bila lebo na bila vikomo kutoka agronomia.\n\nKazi yako kama mjengaji ni kuweka vipimo vya uhakika na playbook ya binadamu kwenye chati: hatari inayotabiriwa ikipanda, tunakagua mitego N na tembezi M za W kwa wadi; hesabu zikipita mstari wa afisa, wao — si chati — wanazingatia chaguo zilizosajiliwa. Operesheni za nzige zina miundo yao ya amri; usiingize chatbot kwa hiari yako.\n\nUsidai modeli ilizuia mlipuko usipokuwa na counterfactual nzito. Vipimo vya mchakato (saa-hadi-ukaguzi-wa-kwanza baada ya ishara) ndivyo vya uaminifu."
      ),
      reveal([
        {
          termEn: "Trap count",
          termSw: "Hesabu ya mtego",
          defEn: "Insects caught in a standard trap — a ground-truth series the model must be scored against.",
          defSw: "Wadudu waliokamatwa kwenye mtego wa kawaida — mfululizo wa ukweli wa shamba modeli lazima ipimwe nao.",
        },
        {
          termEn: "Lead time",
          termSw: "Muda wa kuongoza",
          defEn: "Hours or days between a useful flag and the first confirmed field count.",
          defSw: "Saa au siku kati ya ishara yenye manufaa na hesabu ya kwanza ya shamba iliyothibitishwa.",
        },
        {
          termEn: "Playbook",
          termSw: "Playbook",
          defEn: "Pre-agreed human steps at each risk band, written with extension, not with a vendor.",
          defSw: "Hatua za binadamu zilizokubaliwa awali kwa kila bendi ya hatari, zilizoandikwa na ugani, si na muuzaji.",
        },
      ]),
      note(
        "Worked example: 72% in three days, again, now as a system",
        "Mfano: 72% kwa siku tatu, tena, sasa kama mfumo",
        "A county FAW model texts 72% risk in 3 days. The playbook, written with officers, says: same-day W-walks in 10 sentinel plots; if 5 of 20 plants show fresh damage in 3 or more plots, call a ward huddle; products only via PCPB labels after that huddle. The text message contains no product name. After a month you report median lead time 6 hours and 2 huddles. You do not report that AI saved the maize. You do not have that proof.",
        "Modeli ya FAW ya kaunti inatuma SMS hatari 72% kwa siku 3. Playbook, iliyoandikwa na maafisa, inasema: tembezi za W siku ileile katika vipande 10 vya sentinel; mimea 5 kati ya 20 ikionyesha uharibifu mpya katika vipande 3 au zaidi, piga mkutano wa wadi; bidhaa tu kupitia lebo za PCPB baada ya mkutano huo. Ujumbe hauna jina la bidhaa. Baada ya mwezi unaripoti wastani wa muda wa kuongoza saa 6 na mikutano 2. Huripoti kwamba AI iliokoa mahindi. Huna uthibitisho huo."
      ),
      scenario({
        titleEn: "Scenario: national spray week from a dashboard",
        titleSw: "Hali: wiki ya kitaifa ya kunyunyiza kutoka dashibodi",
        situationEn: "A national dashboard turns red. A political office wants a spray week announced tomorrow for all maize counties, using whatever bottles are in stores.",
        situationSw: "Dashibodi ya kitaifa inakuwa nyekundu. Ofisi ya kisiasa inataka wiki ya kunyunyiza itangazwe kesho kwa kaunti zote za mahindi, kutumia chupa zilizo dukani.",
        questionEn: "What do you advise in writing?",
        questionSw: "Unashauri nini kwa maandishi?",
        optionsEn: [
          "Agree — red means spray",
          "Refuse a blanket week: risk is not presence; playbooks are local; products must be PCPB-labelled for the pest and crop after officer confirmation",
          "Agree only if drones do it, for precision",
          "Publish a 40% yield-save estimate to justify the week",
        ],
        optionsSw: [
          "Kubali — nyekundu inamaanisha kunyunyiza",
          "Kataa wiki ya blanketi: hatari si uwepo; playbook ni za eneo; bidhaa lazima ziwe na lebo ya PCPB kwa wadudu na zao baada ya uthibitisho wa afisa",
          "Kubali tu drone zikifanya, kwa usahihi",
          "Chapisha makadirio ya kuokoa mavuno 40% kuhalalisha wiki",
        ],
        correctIndex: 1,
        hintsEn: [
          "Red is a model state. Presence is a count. Bottles in stores may not match the pest.",
          "Correct. Early warning escalates looking. It does not nationalise chemistry.",
          "Drones do not fix the legal and agronomic gap. They scale it.",
          "A minted 40% is forbidden twice: as evidence and as politics.",
        ],
        hintsSw: [
          "Nyekundu ni hali ya modeli. Uwepo ni hesabu. Chupa dukani huenda zisifanane na wadudu.",
          "Sahihi. Onyo la mapema linapandisha kuangalia. Halifanyi kemia kuwa ya kitaifa.",
          "Drone hazifungi pengo la kisheria na agronomia. Zinapanua.",
          "40% ya kubuni imekatazwa mara mbili: kama ushahidi na kama siasa.",
        ],
        explainEn: "Dashboards escalate scouting playbooks. They do not authorise national unlabelled spraying.",
        explainSw: "Dashibodi zinapandisha playbook za ukaguzi. Haziruhusu kunyunyiza kitaifa bila lebo.",
      }),
      quiz(
        "The best primary metric for an FAW warning pilot is:",
        "Kipimo kikuu bora kwa majaribio ya onyo la FAW ni:",
        [
          "Yield percent saved versus last year",
          "Hours from flag to first confirmed scout count, plus false-alarm rate of flags",
          "Number of bottles sold in the county",
          "Social media reach of the red map",
        ],
        [
          "Asilimia ya mavuno yaliyookolewa dhidi ya mwaka jana",
          "Saa kutoka ishara hadi hesabu ya kwanza ya ukaguzi iliyothibitishwa, pamoja na kiwango cha tahadhari za uongo",
          "Idadi ya chupa zilizouzwa kauntini",
          "Ufikiaji wa mitandao ya kijamii wa ramani nyekundu",
        ],
        1,
        "Lead time and false alarms are process metrics you can own. Yield-save, bottle sales and virality are not outbreak evaluation.",
        "Muda wa kuongoza na tahadhari za uongo ni vipimo vya mchakato unavyoweza kumiliki. Kuokoa mavuno, mauzo ya chupa na virality si tathmini ya mlipuko."
      ),
      note(
        "Try it: three-band playbook",
        "Jaribu: playbook ya bendi tatu",
        "Write Low / Watch / High for one pest you know. Each band: who looks, what they count, who they call, and the sentence We do not spray from this band.\n\nHigh still ends at the officer and the label, not at a bottle name you typed.",
        "Andika Chini / Angalia / Juu kwa wadudu mmoja unayemjua. Kila bendi: nani anaangalia, anahesabu nini, nani anapiga, na sentensi Hatunyunyizi kutoka bendi hii.\n\nJuu bado inaishia kwa afisa na lebo, si kwa jina la chupa uliloandika."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Warning systems buy lead time for scouts.\n- They do not buy national spray weeks.\n- Next: sitting through a vendor demo in a county hall with a scorecard.",
        "- Mifumo ya onyo inanunua muda wa kuongoza kwa wakaguzi.\n- Hainunui wiki za kitaifa za kunyunyiza.\n- Ifuatayo: kukaa kwenye onyesho la muuzaji katika ukumbi wa kaunti na kadi ya alama."
      ),
    ],
  },
  {
    id: "agr-a-u8",
    titleEn: "Evaluating a vendor demo in a county hall",
    titleSw: "Kutathmini onyesho la muuzaji katika ukumbi wa kaunti",
    cards: [
      note(
        "A live demo is a theatre. Your scorecard is the play",
        "Onyesho live ni maonyesho. Kadi yako ya alama ndiyo mchezo",
        "Vendors will bring station photos, a generator, and a percentage. Your job as a county or co-op lead is to run a protocol they did not write. Before the hall: agree the crop, the refuse rules, and that no letter of support is signed today. During: they photograph plants they did not bring, on farms they did not choose, in the light that exists, offline if they claim offline. After: four boxes, season note, whose labour, where data goes, and the hard-refusal clause on spraying.\n\nFarmerAI-style SMS demos should show a message that refuses doses. Agrika-style photo demos should work with the radio off and in Kiswahili. Anyone quoting a yield percent as a proven result fails the demo. Anyone asking for PINs or a blanket endorsement fails it. You may still like the capture UX. Liking is not procurement.",
        "Wauzaji wataleta picha za kituo, jenereta, na asilimia. Kazi yako kama kiongozi wa kaunti au co-op ni kuendesha itifaki wao hawakuandika. Kabla ya ukumbi: kubaliana zao, kanuni za kukataa, na kwamba hakuna barua ya kuunga mkono inatiwa saini leo. Wakati: wanapiga mimea wao hawakuleta, kwenye mashamba wao hawakuchagua, kwenye mwanga uliopo, bila intaneti wakidai bila intaneti. Baada: visanduku vinne, kumbukumbu ya msimu, kazi ya nani, data inaenda wapi, na kifungu cha kukataa gumu kuhusu kunyunyiza.\n\nMaonyesho ya SMS ya aina ya FarmerAI yanapaswa kuonyesha ujumbe unaokataa vipimo. Maonyesho ya picha ya aina ya Agrika yanapaswa kufanya kazi redio ikiwa imezimwa na kwa Kiswahili. Yeyote anayenukuu asilimia ya mavuno kama tokeo lililothibitishwa anashindwa onyesho. Yeyote anayeomba PIN au idhini ya blanketi anashindwa. Bado unaweza kupenda UX ya upigaji. Kupenda si ununuzi."
      ),
      reveal([
        {
          termEn: "Vendor-blind photos",
          termSw: "Picha muuzaji asizochagua",
          defEn: "Leaves picked by extension that morning, not the tablet gallery from HQ.",
          defSw: "Majani yaliyochaguliwa na ugani asubuhi hiyo, si galeria ya kishikwambi kutoka makao.",
        },
        {
          termEn: "Letter of support",
          termSw: "Barua ya kuunga mkono",
          defEn: "A political asset. It follows a scoped evaluation, never a buffet lunch.",
          defSw: "Mali ya kisiasa. Inafuata tathmini yenye wigo, si chakula cha mchana.",
        },
        {
          termEn: "Scorecard",
          termSw: "Kadi ya alama",
          defEn: "The pre-printed questions you fill in the hall so memory cannot be rewritten in the car.",
          defSw: "Maswali yaliyochapishwa awali unayojaza ukumbini ili kumbukumbu isitungwe upya gari.",
        },
      ]),
      note(
        "Worked example: ten photos, two radios",
        "Mfano: picha kumi, redio mbili",
        "You bring 10 maize leaves from three smallholder plots, labelled later by the officer, not shown to the vendor. Radio off: 6 of 10 named, 2 refused, 2 wrong vs the officer. Radio on: the same. They quote 94% from a brochure. You write 6/10 named, 4 not correctly useful, offline claim holds, yield claim absent (good), dispatch-of-gangs mentioned (fail). No letter. A second day with 50 photos might be commissioned. That is evaluation, not hostility.",
        "Unaleta majani 10 ya mahindi kutoka vipande vitatu vya wakulima wadogo, yaliyowekwa lebo baadaye na afisa, hayakuonyeshwa muuzaji. Redio zima: 6 kati ya 10 yalitajwa, 2 yakakataa, 2 potovu dhidi ya afisa. Redio washa: vilevile. Wananukuu 94% kutoka brosha. Unaandika 6/10 yalitajwa, 4 si yenye manufaa sahihi, dai la bila intaneti linashika, dai la mavuno halipo (vizuri), kutuma vikosi kulitajwa (kushindwa). Hakuna barua. Siku ya pili yenye picha 50 inaweza kuagizwa. Hiyo ni tathmini, si uadui."
      ),
      scenario({
        titleEn: "Scenario: sign now, evaluate later",
        titleSw: "Hali: tia saini sasa, tathmini baadaye",
        situationEn: "The CEC wants a signature before the visitors leave, 'to show the county is open to AI'. The scorecard is half empty.",
        situationSw: "CEC anataka saini kabla wageni hawajaondoka, kuonyesha kaunti iko wazi kwa AI. Kadi ya alama imejaa nusu.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Sign a full endorsement to protect the relationship",
          "Offer a dated 'demo observed' note only, with no endorsement, and a date for a vendor-blind test",
          "Sign if they add a 20% yield clause",
          "Refuse to write anything, including the half-empty scorecard",
        ],
        optionsSw: [
          "Tia saini idhini kamili kulinda uhusiano",
          "Toa kumbukumbu yenye tarehe onyesho lilionekana tu, bila idhini, na tarehe ya jaribio muuzaji asilolichagua",
          "Tia saini wakiweka kifungu cha mavuno 20%",
          "Kataa kuandika chochote, pamoja na kadi iliyojaa nusu",
        ],
        correctIndex: 1,
        hintsEn: [
          "Openness is not a blank cheque. Endorsement without boxes will be screenshot forever.",
          "Correct. Courtesy without procurement. The Kenya AI Strategy wants skills and evidence, not signatures for their own sake.",
          "A yield clause is a second failure mode.",
          "The scorecard is your only contemporaneous record. Finish it.",
        ],
        hintsSw: [
          "Uwazi si hundi tupu. Idhini bila visanduku itapigwa picha milele.",
          "Sahihi. Adabu bila ununuzi. Mkakati wa AI wa Kenya unataka stadi na ushahidi, si saini kwa ajili yake.",
          "Kifungu cha mavuno ni namna ya pili ya kushindwa.",
          "Kadi ya alama ndiyo rekodi yako ya wakati mmoja. Imalize.",
        ],
        explainEn: "Observe in writing. Endorse after vendor-blind tests. Never on the hall floor.",
        explainSw: "Andika ulichoona. Unga mkono baada ya majaribio muuzaji asiyochagua. Si kwenye sakafu ya ukumbi kamwe.",
      }),
      quiz(
        "Which demo result is enough to buy for the whole county this afternoon?",
        "Tokeo lipi la onyesho linatosha kununua kwa kaunti nzima mchana huu?",
        [
          "A generator, 94% on HQ photos, and a free lunch",
          "None — afternoon signatures are not an evaluation",
          "The CEC liked the colour of the dashboard",
          "The model named fall armyworm once, correctly",
        ],
        [
          "Jenereta, 94% kwenye picha za makao, na chakula cha bure",
          "Hakuna — saini za mchana si tathmini",
          "CEC alipenda rangi ya dashibodi",
          "Modeli ilitaja viwavijeshi vamizi mara moja, sahihi",
        ],
        1,
        "Procurement follows a protocol, not an afternoon. One correct name is an anecdote.",
        "Ununuzi unafuata itifaki, si mchana. Jina moja sahihi ni hadithi."
      ),
      note(
        "Try it: print a 12-line scorecard",
        "Jaribu: chapisha kadi ya mistari 12",
        "Include: crop, offline trial, vendor-blind photos, four boxes empty, Kiswahili, whose data, PIN asked? (must be no), spray dispatch mentioned? (must be no), yield % claimed? (must be no), labour hours, model version, next test date.\n\nKeep it in the glove box.",
        "Jumlisha: zao, jaribio bila intaneti, picha muuzaji asizochagua, visanduku vinne tupu, Kiswahili, data ya nani, PIN iliombwa? (lazima hapana), kutuma unyunyizaji kulitajwa? (lazima hapana), asilimia ya mavuno ilidaiwa? (lazima hapana), saa za kazi, toleo la modeli, tarehe ya jaribio lijalo.\n\nIhifadhi kwenye glavu."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Vendor-blind, offline, four boxes, no letter today.\n- Next: who owns the photos and the member codes after the demo leaves.",
        "- Muuzaji asiyochagua, bila intaneti, visanduku vinne, hakuna barua leo.\n- Ifuatayo: nani anamiliki picha na misimbo ya wanachama onyesho linapoondoka."
      ),
    ],
  },
  {
    id: "agr-a-u9",
    titleEn: "Data ownership with a co-operative",
    titleSw: "Umiliki wa data na co-operative",
    cards: [
      note(
        "If the vendor holds the only copy, the co-op does not own a dataset",
        "Muuzaji akishika nakala pekee, co-op haimiliki seti ya data",
        "Ownership here is not a slogan. It is: who has a usable copy, who may train, who may delete, who gets paid if a model trained on members' leaves is sold on, and what happens at contract end. Kenya's Data Protection Act, 2019 requires lawful basis, purpose limitation, minimisation, security and member rights of access and deletion. Agricultural data that identifies a person (phone, location, member number plus plot) is personal data. Cross-border transfer to a vendor's region needs extra care and ODPC-facing honesty.\n\nA healthy pattern is a data co-operative clause: the co-op keeps the canonical photos and codes; the vendor gets a licence to process for a named purpose; models trained on that set are jointly described; at exit, the vendor deletes identifiable copies and the co-op keeps the archive. Benefit sharing is written, even if the benefit is 'free inference this season' rather than cash. Silent USB copies (intermediate Unit 8) are breaches, not hustle.",
        "Umiliki hapa si kauli mbiu. Ni: nani ana nakala inayotumika, nani anaweza kufunza, nani anaweza kufuta, nani analipwa modeli iliyofunzwa kwa majani ya wanachama ikuzwa, na nini kinatokea mkataba ukiisha. Sheria ya Ulinzi wa Data, 2019 inataka msingi wa kisheria, kuzuia lengo, kupunguza, usalama na haki za wanachama za kufikia na kufuta. Data ya kilimo inayomtambulisha mtu (simu, mahali, namba ya mwanachama pamoja na kipande) ni data binafsi. Uhamisho kuvuka mpaka kwenda eneo la muuzaji unahitaji uangalifu zaidi na uaminifu unaoelekea ODPC.\n\nMuundo mzuri ni kifungu cha co-operative ya data: co-op inashika picha na misimbo kuu; muuzaji anapata leseni ya kuchakata kwa lengo lililotajwa; modeli zilizofunzwa kwenye seti hiyo zinaelezwa pamoja; kutoka, muuzaji anafuta nakala zinazotambulisha na co-op inashika kumbukumbu. Ugawaji wa manufaa umeandikwa, hata manufaa yakiwa utabiri wa bure msimu huu badala ya pesa. Nakala za USB za kimya (Somo la 8 la kati) ni uvunjaji, si hustle."
      ),
      reveal([
        {
          termEn: "Canonical copy",
          termSw: "Nakala kuu",
          defEn: "The co-op's archive that would still exist if the vendor vanished tomorrow.",
          defSw: "Kumbukumbu ya co-op ambayo bado ingekuwepo muuzaji akitoweka kesho.",
        },
        {
          termEn: "Purpose limitation",
          termSw: "Kuzuia lengo",
          defEn: "Photos collected to diagnose cassava may not quietly become a credit-scoring product.",
          defSw: "Picha zilizokusanywa kutambua muhogo zisiwe kimya bidhaa ya kukadiria mkopo.",
        },
        {
          termEn: "Exit clause",
          termSw: "Kifungu cha kutoka",
          defEn: "What is deleted, what is returned, and who certifies it, on a date.",
          defSw: "Nini kinafutwa, nini kinarudishwa, na nani anathibitisha, katika tarehe.",
        },
      ]),
      note(
        "Worked example: 8,000 leaves, one missing archive",
        "Mfano: majani 8,000, kumbukumbu moja inayokosekana",
        "A fictional co-op let a vendor collect 8,000 potato photos 'for the model'. Two years later the vendor's app dies. Members have no copy. A second vendor wants to start from zero. The first vendor says the weights are their IP and the photos are gone.\n\nThe failure was not AI. It was the missing canonical copy and exit clause. A repaired contract would have stored codes plus photos on the co-op laptop (encrypted, stewarded), licensed processing, and required certified deletion plus return of the archive. Benefit: members could have retrained a small head (Unit 2) with a local student. Without the archive, they buy the same capture labour again.",
        "Co-op ya kubuni ilimwacha muuzaji akusanye picha 8,000 za viazi kwa modeli. Miaka miwili baadaye programu ya muuzaji inakufa. Wanachama hawana nakala. Muuzaji wa pili anataka kuanza kutoka sifuri. Wa kwanza anasema uzito ni IP yao na picha zimepotea.\n\nKushindwa hakukuwa AI. Ilikuwa nakala kuu na kifungu cha kutoka vilivyokosekana. Mkataba uliorekebishwa ungekuwa umehifadhi misimbo pamoja na picha kwenye kompyuta ndogo ya co-op (iliyosimbwa, yenye mlezi), kuleseni uchakataji, na kuhitaji kufuta kunakothibitishwa pamoja na kurudisha kumbukumbu. Manufaa: wanachama wangeweza kufunza kichwa kidogo (Somo la 2) na mwanafunzi wa eneo. Bila kumbukumbu, wananunua kazi ileile ya upigaji tena."
      ),
      scenario({
        titleEn: "Scenario: photos for diagnosis, later a loan score",
        titleSw: "Hali: picha za utambuzi, baadaye alama ya mkopo",
        situationEn: "The vendor's parent company wants to reuse leaf photos and yields to score members for input loans, across the border, without a new consent.",
        situationSw: "Kampuni mama ya muuzaji inataka kutumia tena picha za majani na mavuno kukadiria wanachama kwa mikopo ya pembejeo, kuvuka mpaka, bila ridhaa mpya.",
        questionEn: "What is the defensible position?",
        questionSw: "Nafasi inayoweza kujilinda ni ipi?",
        optionsEn: [
          "Allow it — more products help farmers",
          "Refuse: new purpose, likely sensitive profiling, cross-border — needs a new lawful basis, new consent, and a committee decision",
          "Allow if they knock 1% off the app fee",
          "Allow on condition they auto-approve every loan",
        ],
        optionsSw: [
          "Ruhusu — bidhaa zaidi zinawasaidia wakulima",
          "Kataa: lengo jipya, huenda ni uainishaji nyeti, kuvuka mpaka — linahitaji msingi mpya wa kisheria, ridhaa mpya, na uamuzi wa kamati",
          "Ruhusu wakipunguza ada ya programu 1%",
          "Ruhusu kwa sharti waidhinishe kila mkopo otomatiki",
        ],
        correctIndex: 1,
        hintsEn: [
          "Helpful is not a lawful basis. Credit scoring is a different harm profile.",
          "Correct. Purpose limitation and DPA duties are the job. ODPC exists for a reason.",
          "A fee discount does not buy a new purpose.",
          "Auto-loans from leaf photos are a second forbidden automation.",
        ],
        hintsSw: [
          "Kusaidia si msingi wa kisheria. Kukadiria mkopo ni wasifu mwingine wa madhara.",
          "Sahihi. Kuzuia lengo na wajibu wa DPA ndiyo kazi. ODPC ipo kwa sababu.",
          "Punguzo la ada halinunui lengo jipya.",
          "Mikopo otomatiki kutoka picha za majani ni otomatiki ya pili iliyokatazwa.",
        ],
        explainEn: "Diagnosis photos stay diagnosis photos until members say otherwise in a process you can show ODPC.",
        explainSw: "Picha za utambuzi zinabaki za utambuzi hadi wanachama waseme vinginevyo katika mchakato unaoweza kuonyesha ODPC.",
      }),
      quiz(
        "At contract end the co-op should still have:",
        "Mkataba ukiisha co-op bado inapaswa kuwa na:",
        [
          "Only a thank-you email from the vendor",
          "The canonical photos and codes, plus certified deletion of identifiable vendor copies",
          "The vendor's unquantised GPU weights and nothing else",
          "Members' M-Pesa PINs as a souvenir",
        ],
        [
          "Barua pepe ya asante tu kutoka kwa muuzaji",
          "Picha na misimbo kuu, pamoja na kufuta kunakothibitishwa kwa nakala za muuzaji zinazotambulisha",
          "Uzito wa GPU wa muuzaji usiopunguzwa na hakuna kingine",
          "PIN za M-Pesa za wanachama kama kumbukumbu",
        ],
        1,
        "Ownership is the archive you can retrain from and the deletion you can prove. PINs never belong in the archive.",
        "Umiliki ni kumbukumbu unayoweza kufunza tena kutoka kwayo na kufuta unakoweza kuthibitisha. PIN haziko kwenye kumbukumbu kamwe."
      ),
      pb({
        titleEn: "Build a model-card prompt that cannot invent clauses",
        titleSw: "Jenga maagizo ya model card yasiyoweza kubuni vifungu",
        introEn: "You will ask a language model to draft a model card. It must use only facts you supply.",
        introSw: "Utaomba modeli ya lugha iandae model card. Lazima itumie ukweli ulioutoa tu.",
        goalEn: "Facts, required sections, ban on invented percents, audience officers.",
        goalSw: "Ukweli, sehemu zinazohitajika, marufuku ya asilimia za kubuni, hadhira maafisa.",
        blocksEn: [
          "Facts: maize leaf classifier, 8,000 photos from 3 Kenyan counties, field accuracy not yet evaluated this short rains, co-op holds canonical copy",
          "Sections: intended use, out of scope (no spray, no credit scoring), data, evaluation, drift plan, exit",
          "Rule: use only the facts above; if a section lacks data write not yet evaluated",
          "Ban: yield-improvement percentages, auto-spray claims, overseas accuracy as local accuracy",
          "Audience: county extension officers, plain language, Kiswahili and English headings",
        ],
        blocksSw: [
          "Ukweli: ainishaji wa majani ya mahindi, picha 8,000 kutoka kaunti 3 za Kenya, usahihi shambani bado haujatathminiwa mvua fupi hizi, co-op inashika nakala kuu",
          "Sehemu: matumizi yaliyokusudiwa, nje ya wigo (hakuna unyunyizaji, hakuna kukadiria mkopo), data, tathmini, mpango wa mabadiliko, kutoka",
          "Kanuni: tumia ukweli ulio hapo juu tu; sehemu ikikosa data andika haijatathminiwa",
          "Kataza: asilimia za kuboresha mavuno, dai za kunyunyiza otomatiki, usahihi wa ng'ambo kama usahihi wa eneo",
          "Hadhira: maafisa wa ugani wa kaunti, lugha rahisi, vichwa vya Kiswahili na Kiingereza",
        ],
        required: [0, 1, 2, 3],
        sampleEn: "Facts: maize leaf classifier, 8,000 photos from 3 Kenyan counties, field accuracy not yet evaluated this short rains, co-op holds canonical copy. Sections: intended use, out of scope (no spray, no credit scoring), data, evaluation, drift plan, exit. Rule: use only the facts above; if a section lacks data write not yet evaluated. Ban: yield-improvement percentages, auto-spray claims, overseas accuracy as local accuracy. Audience: county extension officers, plain language, Kiswahili and English headings.",
        sampleSw: "Ukweli: ainishaji wa majani ya mahindi, picha 8,000 kutoka kaunti 3 za Kenya, usahihi shambani bado haujatathminiwa mvua fupi hizi, co-op inashika nakala kuu. Sehemu: matumizi, nje ya wigo (hakuna unyunyizaji, hakuna kukadiria mkopo), data, tathmini, mpango wa mabadiliko, kutoka. Kanuni: tumia ukweli ulio hapo juu tu; sehemu ikikosa data andika haijatathminiwa. Kataza: asilimia za mavuno, dai za kunyunyiza otomatiki, usahihi wa ng'ambo kama wa eneo. Hadhira: maafisa wa ugani wa kaunti, lugha rahisi, vichwa vya Kiswahili na Kiingereza.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        "- Canonical copy, purpose limit, exit, benefit written down.\n- Next: who the average hides — smallholders, women, thin counties.",
        "- Nakala kuu, kuzuia lengo, kutoka, manufaa yaliyoandikwa.\n- Ifuatayo: nani wastani anaficha — wakulima wadogo, wanawake, kaunti nyembamba."
      ),
    ],
  },
  {
    id: "agr-a-u10",
    titleEn: "Fairness: smallholders, women, thin counties",
    titleSw: "Usawa: wakulima wadogo, wanawake, kaunti nyembamba",
    cards: [
      note(
        "An 86% county average can hide a ward that never works",
        "Wastani wa kaunti wa 86% unaweza kuficha wadi isiyowahi kufanya kazi",
        "Fairness in agri-AI is measurable: slice accuracy, unknown-rate and time-tax by farm size, sex of the labourer, language, device, and county. Training sets that come from two irrigated stations will fail rain-fed margins. Voice agents that assume English will fail the Kiswahili and Sheng Agrika-style users who needed them most. SMS that hit the husband's SIM will miss the weeder (intermediate Unit 7).\n\nSubgroup evaluation is not optional decoration. If the model works in Trans Nzoia and fails in a drier county, you restrict deployment, retrain, or withdraw — you do not quote 86%. Kenya's AI Strategy's inclusion language is operational here: who pays hours, who is scored worse, who cannot go offline. Do not 'fix' a failing slice by automating spray there. That would concentrate harm.",
        "Usawa katika AI ya kilimo unapimika: gawanya usahihi, kiwango cha haijulikani na kodi ya muda kwa ukubwa wa shamba, jinsia ya mfanyakazi, lugha, kifaa, na kaunti. Seti za mafunzo zinazotoka vituo viwili vya umwagiliaji zitashindwa kwenye pembe za mvua. Wakala wa sauti wanaodhani Kiingereza watashindwa watumiaji wa Kiswahili na Sheng wa aina ya Agrika waliowahitaji zaidi. SMS zinazogonga SIM ya mume zitamkosa mpallia (Somo la 7 la kati).\n\nTathmini kwa kikundi si mapambo ya hiari. Modeli ikifanya kazi Trans Nzoia na kushindwa kaunti kavu, unazuia uwekaji kazini, kufunza upya, au kuondoa — hunukuu 86%. Lugha ya ujumuishaji ya Mkakati wa AI wa Kenya ni ya uendeshaji hapa: nani analipa saa, nani anapimwa vibaya, nani hawezi kwenda bila intaneti. Usirekebishe kipande kinachoshindwa kwa kunyunyiza otomatiki pale. Kungekusanya madhara."
      ),
      reveal([
        {
          termEn: "Slice metric",
          termSw: "Kipimo cha kipande",
          defEn: "Performance reported separately per group, not only as an average.",
          defSw: "Utendaji unaoripotiwa kando kwa kila kundi, si wastani tu.",
        },
        {
          termEn: "Access gap",
          termSw: "Pengo la ufikiaji",
          defEn: "A tool that assumes smartphones, English or idle hours excludes the people in the rows.",
          defSw: "Zana inayodhani simu janja, Kiingereza au saa za ziada inawatenga watu kwenye mistari.",
        },
        {
          termEn: "Restricted deployment",
          termSw: "Uwekaji kazini uliozuiliwa",
          defEn: "Shipping only where slices pass, with a public map of where they do not.",
          defSw: "Kusafirisha tu pale vipande vinapopita, na ramani ya umma ya palipo hapana.",
        },
      ]),
      note(
        "Worked example: 86% countywide, a remote ward at 54%",
        "Mfano: 86% kaunti nzima, wadi ya mbali 54%",
        "A maternal-health analogy is well known; the farm version is the same shape. A maize model reports 86% countywide. A scout from a remote ward says it never works. Training photos were almost all from two peri-urban demo plots. You slice: remote ward 54%, demo wards 91%. You restrict the app to the demo wards pending local photos, and you pay women scouts in the remote ward to build the set. You do not tell the scout that 86% means she is wrong.",
        "Mfanano wa afya ya uzazi unajulikana; toleo la shamba lina umbo lilelile. Modeli ya mahindi inaripoti 86% kaunti nzima. Mkaguzi kutoka wadi ya mbali anasema haifanyi kazi kamwe. Picha za mafunzo zilikuwa karibu zote kutoka viwanja viwili vya maonyesho pembeni mwa mji. Unagawanya: wadi ya mbali 54%, wadi za maonyesho 91%. Unazuia programu kwenye wadi za maonyesho hadi picha za eneo, na unawalipa wakaguzi wanawake katika wadi ya mbali kujenga seti. Humwambii mkaguzi kwamba 86% inamaanisha amekosea."
      ),
      scenario({
        titleEn: "Scenario: fix the failing ward with drones",
        titleSw: "Hali: rekabilisha wadi inayoshindwa kwa drone",
        situationEn: "A failing pastoral ward has almost no labelled leaves. A donor offers spray drones 'so they are not left behind'.",
        situationSw: "Wadi ya ufugaji inayoshindwa haina karibu majani yenye lebo. Mfadhili anatoa drone za kunyunyiza ili wasiachwe nyuma.",
        questionEn: "What is the equitable next step?",
        questionSw: "Hatua yenye usawa inayofuata ni ipi?",
        optionsEn: [
          "Accept the drones — equity means the same machines everywhere",
          "Refuse drones as a substitute: fund local labels, Kiswahili/voice or SMS playbooks, and officer time; restricted deployment until slices pass",
          "Quote the 86% average in the pastoral ward so they feel included",
          "Turn the model off everywhere so no one has an advantage",
        ],
        optionsSw: [
          "Kubali drone — usawa unamaanisha mashine zile zile kila mahali",
          "Kataa drone kama mbadala: fadhili lebo za eneo, playbook za Kiswahili/sauti au SMS, na muda wa afisa; uwekaji kazini uliozuiliwa hadi vipande vipite",
          "Nukuu wastani wa 86% katika wadi ya ufugaji ili wahisi wamejumuishwa",
          "Zima modeli kila mahali ili mtu yeyote asipate faida",
        ],
        correctIndex: 1,
        hintsEn: [
          "The same machine in a data-poor, labelled-poor place is not equity. It is exporting a failure mode.",
          "Correct. Inclusion is local data, language and humans — not concentrating unlabelled chemistry.",
          "Quoting the average at a failing slice is gaslighting, not inclusion.",
          "Withdrawing a working slice does not lift a failing one. Restrict and retrain.",
        ],
        hintsSw: [
          "Mashine ileile mahali penye data na lebo chache si usawa. Ni kusafirisha namna ya kushindwa.",
          "Sahihi. Ujumuishaji ni data ya eneo, lugha na binadamu — si kukusanya kemia isiyo na lebo.",
          "Kununua wastani kwenye kipande kinachoshindwa ni kuwapotosha, si ujumuishaji.",
          "Kuondoa kipande kinachofanya kazi hainyanyui kinachoshindwa. Zuia na funza upya.",
        ],
        explainEn: "Equity is slice metrics plus local capture, not identical hardware and not drones as consolation.",
        explainSw: "Usawa ni vipimo vya kipande pamoja na upigaji wa eneo, si vifaa sawa wala drone kama faraja.",
      }),
      quiz(
        "The most equitable interface for a low-literacy rural scout is:",
        "Kiolesura chenye usawa zaidi kwa mkaguzi wa vijijini mwenye kusoma kidogo ni:",
        [
          "An English-only dashboard",
          "Voice or icon-driven output in a local language, with officer confirmation",
          "No tool at all, forever",
          "A printed English manual of softmax tables",
        ],
        [
          "Dashibodi ya Kiingereza tu",
          "Matokeo ya sauti au ikoni kwa lugha ya eneo, na uthibitisho wa afisa",
          "Hakuna zana kamwe, milele",
          "Mwongozo wa Kiingereza uliochapishwa wa majedwali ya softmax",
        ],
        1,
        "Language and modality are equity decisions equal to the backbone. Forever-nothing is not a fairness policy.",
        "Lugha na njia ni maamuzi ya usawa sawa na backbone. Kutokuwepo milele si sera ya usawa."
      ),
      note(
        "Try it: four slices on one page",
        "Jaribu: vipande vinne kwenye ukurasa mmoja",
        "For a tool you know, write expected performance (guess) for: large vs small farm, woman vs man labourer, Kiswahili vs English UI, your county vs a drier one.\n\nMark which slice you have evidence for. The unmarked ones are the evaluation you still owe.",
        "Kwa zana unayoijua, andika utendaji unaotarajiwa (makisio) kwa: shamba kubwa dhidi ya dogo, mfanyakazi mwanamke dhidi ya mwanamume, UI ya Kiswahili dhidi ya Kiingereza, kaunti yako dhidi ya kavu zaidi.\n\nAshiria kipande kipi una ushahidi. Visivyo na alama ndivyo tathmini ambayo bado unadaiwa."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Slice, restrict, retrain. Do not quote averages at failing wards.\n- Next: what the service costs per farmer in KES, and who pays.",
        "- Gawanya, zuia, funza upya. Usinukuu wastani kwenye wadi zinazoshindwa.\n- Ifuatayo: huduma inagharimu nini kwa mkulima kwa KES, na nani analipa."
      ),
    ],
  },
  {
    id: "agr-a-u11",
    titleEn: "Unit economics before the slogan",
    titleSw: "Hesabu za kitengo kabla ya kauli mbiu",
    cards: [
      note(
        "If you cannot say cost per farmer per season, you cannot specify the system",
        "Huwezi kusema gharama kwa mkulima kwa msimu, huwezi kubainisha mfumo",
        "A farm-advice system has a bill: on-device inference, SMS, officer time, scout stipends, labelling, phones, and the hours women already give (Unit 10 / intermediate Unit 7). Write KES per member per season, with a range. Who pays — members, co-op levy, county, donor — changes behaviour. A free app with a hidden SMS shortcode bill on the husband's line is not free.\n\nSpecification starts here: budget the open loop (queue, walk, officer) before you budget GPUs. If the honest number only works by deleting scouts, the architecture is wrong. If it only works by auto-spraying, it is forbidden. FarmerAI riding SMS and WhatsApp on DigiFarm is a cost bet on channels people already pay for. Judge your design the same way, without inventing that it will pay for itself via a yield percent you do not have.",
        "Mfumo wa ushauri wa shamba una bili: utabiri kwenye kifaa, SMS, muda wa afisa, posho za mkaguzi, kuweka lebo, simu, na saa wanawake tayari wanatoa (Somo la 10 / Somo la 7 la kati). Andika KES kwa mwanachama kwa msimu, na kipimo. Nani analipa — wanachama, tozo ya co-op, kaunti, mfadhili — inabadilisha tabia. Programu ya bure yenye bili ya siri ya shortcode ya SMS kwenye laini ya mume si bure.\n\nMaelezo yanaanza hapa: weka bajeti ya mzunguko wazi (foleni, tembezi, afisa) kabla ya bajeti ya GPU. Namba ya uaminifu ikifanya kazi tu kwa kufuta wakaguzi, usanifu ni potovu. Ikitumika tu kwa kunyunyiza otomatiki, imekatazwa. FarmerAI inayotumia SMS na WhatsApp kwenye DigiFarm ni dau la gharama kwenye njia watu tayari wanalipia. Hukumu usanifu wako vivyo, bila kubuni kwamba utajilipa kupitia asilimia ya mavuno usiyo nayo."
      ),
      reveal([
        {
          termEn: "Cost per farmer-season",
          termSw: "Gharama kwa mkulima-msimu",
          defEn: "All cash and valued time to serve one member for one season, as a range.",
          defSw: "Pesa zote na muda uliothaminiwa kumhudumia mwanachama mmoja kwa msimu mmoja, kama kipimo.",
        },
        {
          termEn: "Who pays",
          termSw: "Nani analipa",
          defEn: "The named pocket. Hidden bills on family SIMs are still paid by someone.",
          defSw: "Mfuko ulio tajiwa. Bili zilizofichwa kwenye SIM za familia bado zinalipwa na mtu.",
        },
        {
          termEn: "Deadline of honesty",
          termSw: "Tarehe ya mwisho ya uaminifu",
          defEn: "The date you will publish process metrics or stop claiming the pilot is 'going well'.",
          defSw: "Tarehe utakayochapisha vipimo vya mchakato au kuacha kudai majaribio yanaenda vizuri.",
        },
      ]),
      note(
        "Worked example: KES 340–520, not a yield story",
        "Mfano: KES 340–520, si hadithi ya mavuno",
        "A fictional potato co-op of 180 members budgets: SMS KES 40, scout stipend shared KES 120, officer days allocated KES 90, labelling KES 50, device wear KES 40–80, unpaid extra photo time valued at KES 0 in cash but 15 minutes a week (logged as hours, not hidden). Range about KES 340–520 per member per season, paid from a levy plus a county line. They do not subtract a fantasy harvest gain. If the levy is politically impossible, they cut photos to one scout kit, not safety.",
        "Co-op ya kubuni ya viazi ya wanachama 180 inaweka bajeti: SMS KES 40, posho ya mkaguzi iliyoshirikiwa KES 120, siku za afisa KES 90, lebo KES 50, uchakavu wa kifaa KES 40–80, muda wa ziada wa picha usiolipwa wenye thamani ya KES 0 taslimu lakini dakika 15 kwa wiki (zilizorekodiwa kama saa, si zilizofichwa). Kipimo takriban KES 340–520 kwa mwanachama kwa msimu, kinacholipwa kutoka tozo pamoja na mstari wa kaunti. Hawatoi faida ya mavuno ya ndoto. Tozo ikiwa haiwezekani kisiasa, wanapunguza picha hadi seti moja ya mkaguzi, si usalama."
      ),
      scenario({
        titleEn: "Scenario: the GPU line item ate the scouts",
        titleSw: "Hali: mstari wa GPU uliwala wakaguzi",
        situationEn: "A donor budget funds a large cloud model. To fit it, the proposal deletes village scout stipends and officer fuel.",
        situationSw: "Bajeti ya mfadhili inafadhili modeli kubwa ya wingu. Ili itoshee, pendekezo linafuta posho za wakaguzi wa vijiji na mafuta ya maafisa.",
        questionEn: "What do you cut instead?",
        questionSw: "Unakata nini badala yake?",
        optionsEn: [
          "The scouts — models replace people",
          "The oversized cloud line: keep scouts and fuel, use an on-device student if anything",
          "The hard-refusal clause, to 'add value' via dispatch",
          "Kiswahili, because translation is expensive",
        ],
        optionsSw: [
          "Wakaguzi — modeli zinachukua nafasi ya watu",
          "Mstari mkubwa wa wingu: weka wakaguzi na mafuta, tumia mwanafunzi kwenye kifaa kama kitu chochote",
          "Kifungu cha kukataa gumu, ili kuongeza thamani kupitia kutuma",
          "Kiswahili, kwa sababu tafsiri ni ghali",
        ],
        correctIndex: 1,
        hintsEn: [
          "Deleting the ground truth budget deletes the product. Models do not walk a W.",
          "Correct. Unit economics serve the open loop first. GPUs are optional; scouts are not.",
          "Selling safety to afford GPUs is the wrong business model.",
          "Language is access. Cutting it taxes the people you claimed to include.",
        ],
        hintsSw: [
          "Kufuta bajeti ya ukweli wa shamba ni kufuta bidhaa. Modeli hazitembei W.",
          "Sahihi. Hesabu za kitengo zinahudumia mzunguko wazi kwanza. GPU ni hiari; wakaguzi si.",
          "Kuuza usalama kumudu GPU ni mfano potovu wa biashara.",
          "Lugha ni ufikiaji. Kuikata kunawatoza watu uliodai kuwajumuisha.",
        ],
        explainEn: "Pay for looking. Do not pay for a backbone by firing the people who generate labels.",
        explainSw: "Lipa kuangalia. Usilipe backbone kwa kuwafukuza watu wanaozalisha lebo.",
      }),
      quiz(
        "Which sentence belongs in a specification's money section?",
        "Sentensi ipi inatakiwa kuwepo katika sehemu ya pesa ya maelezo?",
        [
          "The system will pay for itself with 25% more yield",
          "KES 340–520 per member per season, levy plus county, scouts retained; no yield-offset booked",
          "Members will not notice SMS costs",
          "PINs will be stored to bill M-Pesa automatically",
        ],
        [
          "Mfumo utajilipa kwa mavuno 25% zaidi",
          "KES 340–520 kwa mwanachama kwa msimu, tozo pamoja na kaunti, wakaguzi wanabaki; hakuna kuondoa mavuno kwenye vitabu",
          "Wanachama hawatatambua gharama za SMS",
          "PIN zitahifadhiwa ili kutozwa M-Pesa otomatiki",
        ],
        1,
        "Ranges, named payers, scouts kept, no invented yield offset. Hidden SMS and stored PINs are disqualifying.",
        "Vipimo, walipaji waliotajwa, wakaguzi wanabaki, hakuna kuondoa mavuno ya kubuni. SMS zilizofichwa na PIN zilizohifadhiwa vinakataza."
      ),
      note(
        "Try it: a five-line budget",
        "Jaribu: bajeti ya mistari mitano",
        "Channel, scout time, officer time, devices, hidden user time. Put KES or hours on each. Circle who pays.\n\nIf hidden user time is zero because you did not ask women, rewrite.",
        "Njia, muda wa mkaguzi, muda wa afisa, vifaa, muda wa mtumiaji uliofichwa. Weka KES au saa kwenye kila moja. Zungushia nani analipa.\n\nMuda wa mtumiaji uliofichwa ukiwa sifuri kwa sababu hukuwauliza wanawake, andika upya."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Cost the open loop in KES and hours. Name the payer.\n- Do not book invented yield as revenue.\n- Next: specify the whole farm-advice system end to end.",
        "- Gharimia mzunguko wazi kwa KES na saa. Taja mlipaji.\n- Usiweke mavuno ya kubuni kama mapato.\n- Ifuatayo: bainisha mfumo mzima wa ushauri wa shamba kuanzia mwanzo hadi mwisho."
      ),
    ],
  },
  {
    id: "agr-a-u12",
    titleEn: "Specify a farm-advice system, then stop",
    titleSw: "Bainisha mfumo wa ushauri wa shamba, kisha simama",
    cards: [
      note(
        "The capstone is a specification a county could refuse or fund",
        "Kilele ni maelezo kaunti inayoweza kukataa au kufadhili",
        "Pull the advanced track into one artefact: a farm-advice system for a named Kenyan crop and county. It must include the imaging or SMS pipeline (capture protocol, offline, versioning), transfer-learning plan with refuse class and farm-held tests, drift monitors, outbreak playbook if relevant, vendor scorecard, co-op data ownership and exit, slice metrics, unit economics, and the hard refusal of closed-loop spraying.\n\nSources you may name as facts: KALRO, PCPB, county extension, KMD, NDMA, FarmerAI as a DigiFarm/SMS/WhatsApp channel example, Agrika as a photo-offline-Kiswahili-M-Pesa-PCPB example. You may not name a chatbot vendor as an authority, and you may not write a yield-improvement percent as a proven result.\n\nWhen the page is done, stop. Implementation without this page is how GPIO appears. Implementation that ignores a signed hard-refusal is how people get hurt. You are the person who can keep the loop open.",
        "Vuta kozi ya juu kwenye kitu kimoja: mfumo wa ushauri wa shamba kwa zao na kaunti vilivyotajwa vya Kenya. Lazima ujumuishe mfumo wa picha au SMS (itifaki ya kupiga, bila intaneti, toleo), mpango wa ujifunzaji wa kuhamisha wenye darasa la kukataa na majaribio ya shamba, vimonita vya mabadiliko, playbook ya mlipuko kama inahusika, kadi ya muuzaji, umiliki wa data wa co-op na kutoka, vipimo vya kipande, hesabu za kitengo, na kukataa gumu kwa kunyunyiza kwa mzunguko funge.\n\nVyanzo unavyoweza kutaja kama ukweli: KALRO, PCPB, ugani wa kaunti, KMD, NDMA, FarmerAI kama mfano wa njia ya DigiFarm/SMS/WhatsApp, Agrika kama mfano wa picha-bila intaneti-Kiswahili-M-Pesa-PCPB. Hutasitaja muuzaji wa chatbot kama mamlaka, wala huandiki asilimia ya kuboresha mavuno kama tokeo lililothibitishwa.\n\nUkurasa ukiisha, simama. Utekelezaji bila ukurasa huu ndivyo GPIO inavyotokea. Utekelezaji unaopuuza kukataa gumu kulikotiwa saini ndivyo watu wanavyoumizwa. Wewe ndiye mtu anayeweza kuweka mzunguko wazi."
      ),
      reveal([
        {
          termEn: "Artefact",
          termSw: "Kitu kilichoandikwa",
          defEn: "The specification, model card, scorecard and budget as documents, not a slide of logos.",
          defSw: "Maelezo, model card, kadi ya alama na bajeti kama nyaraka, si slaidi ya nembo.",
        },
        {
          termEn: "Open loop (final)",
          termSw: "Mzunguko wazi (ya mwisho)",
          defEn: "Every path ends at a named human plus PCPB label or vet. No remaining toggle.",
          defSw: "Kila njia inaishia kwa binadamu aliye tajiwa pamoja na lebo ya PCPB au daktari wa mifugo. Hakuna kigezo kilichobaki.",
        },
        {
          termEn: "Stop",
          termSw: "Simama",
          defEn: "Do not implement actuation 'just to see'. The course ends with refusal as a designed feature.",
          defSw: "Usitekeleze kuendesha tu kuona. Kozi inaisha na kukataa kama kipengele kilichobuniwa.",
        },
      ]),
      note(
        "Worked example: the page a CEC can stamp",
        "Mfano: ukurasa CEC anayeweza kupiga muhuri",
        "Crop/county: rain-fed maize, Bungoma. Channel: offline photo scout kit plus weekly SMS. Model: MobileNet student, 6 classes including unknown, farm-held test, last-known-good on device. Playbook: W-walk, officer huddle, PCPB at agrovet. Data: co-op canonical copy, no PIN, no homestead GPS, exit in 30 days. Slices: sex of scout, two drier wards, Kiswahili UI. Money: KES 400–600 per member-season, levy plus county, scouts paid. Non-goals: yield %, auto-spray, credit scoring. Evaluation: lead time and four boxes, no harvest claim. Vendor clause: demo scorecard before any letter. Stamp line: I have read the hard refusal.\n\nThat is a system. It is also a stop.",
        "Zao/kaunti: mahindi ya mvua, Bungoma. Njia: seti ya mkaguzi wa picha bila intaneti pamoja na SMS ya kila wiki. Modeli: mwanafunzi wa MobileNet, darasa 6 pamoja na haijulikani, jaribio la shamba, iliyo-sawa-mwisho kwenye kifaa. Playbook: tembezi ya W, mkutano wa afisa, PCPB kwenye agrovet. Data: nakala kuu ya co-op, hakuna PIN, hakuna GPS ya nyumbani, kutoka kwa siku 30. Vipande: jinsia ya mkaguzi, wadi mbili kavu, UI ya Kiswahili. Pesa: KES 400–600 kwa mwanachama-msimu, tozo pamoja na kaunti, wakaguzi wanalipwa. Visivyo malengo: asilimia ya mavuno, unyunyizaji otomatiki, kukadiria mkopo. Tathmini: muda wa kuongoza na visanduku vinne, hakuna dai la mavuno. Kifungu cha muuzaji: kadi ya onyesho kabla ya barua yoyote. Mstari wa muhuri: Nimesoma kukataa gumu.\n\nHuo ni mfumo. Pia ni kusimama."
      ),
      scenario({
        titleEn: "Scenario: implementation wants a little closed loop",
        titleSw: "Hali: utekelezaji unataka mzunguko funge kidogo",
        situationEn: "After your spec is stamped, an engineer asks to wire a 'preview dispatch' that only messages the spray gang, not the drones, when confidence is 95%, as a dry run.",
        situationSw: "Maelezo yako yakiisha kupigwa muhuri, mhandisi anaomba kuunganisha kutuma kwa kutanadhari kunakotumia ujumbe kwa kikosi cha kunyunyiza tu, si drone, uhakika ukiwa 95%, kama mazoezi.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Allow the dry run — 95% is almost certain and it is only a message",
          "Refuse: messaging a gang from a score is dispatch; the spec's hard refusal covers it; keep queues to scouts and officers only",
          "Allow if the message says please confirm",
          "Allow in one ward as a fairness experiment",
        ],
        optionsSw: [
          "Ruhusu mazoezi — 95% ni karibu hakika na ni ujumbe tu",
          "Kataa: kutumia ujumbe kwa kikosi kutoka alama ni kutuma; kukataa gumu kwa maelezo kunafunika; weka foleni kwa wakaguzi na maafisa tu",
          "Ruhusu ujumbe ukisema tafadhali thibitisha",
          "Ruhusu katika wadi moja kama jaribio la usawa",
        ],
        correctIndex: 1,
        hintsEn: [
          "Gangs treat messages as work orders. 95% uncalibrated is still a number. Dry runs become wet.",
          "Correct. The capstone is the refusal holding under implementation pressure.",
          "Please confirm is how dispatch sneaks in. Officers confirm; gangs do not parse hedges.",
          "A failing or succeeding slice does not get chemistry via software. Fairness is not a loophole.",
        ],
        hintsSw: [
          "Vikosi vinachukulia jumbe kama maagizo ya kazi. 95% isiyorekebishwa bado ni namba. Mazoezi yanakuwa ya maji.",
          "Sahihi. Kilele ni kukataa kunakoshika chini ya shinikizo la utekelezaji.",
          "Tafadhali thibitisha ndivyo kutuma kunavyoingia. Maafisa wanathibitisha; vikosi havichambui mashaka.",
          "Kipande kinachoshindwa au kufaulu hakipati kemia kupitia programu. Usawa si tundu.",
        ],
        explainEn: "Specification without enforcement is a brochure. You stop the wire.",
        explainSw: "Maelezo bila utekelezaji ni brosha. Unasimamisha waya.",
      }),
      quiz(
        "A complete Kenyan farm-advice specification must include:",
        "Maelezo kamili ya ushauri wa shamba Kenya lazima yajumuishe:",
        [
          "A guaranteed double-digit yield increase and a dispatch API",
          "Pipeline, refuse class, offline plan, drift, ownership, slices, KES costs, and a hard no to closed-loop spraying",
          "The founder's favourite chatbot brand",
          "A requirement that members deposit PINs",
        ],
        [
          "Ongezeko la dhamana la mavuno la tarakimu mbili na API ya kutuma",
          "Mfumo, darasa la kukataa, mpango wa bila intaneti, mabadiliko, umiliki, vipande, gharama za KES, na hapana gumu kwa kunyunyiza kwa mzunguko funge",
          "Chapa ya chatbot anayopenda mwanzilishi",
          "Sharti kwamba wanachama waweke PIN",
        ],
        1,
        "That list is the track. Brands, PINs, minted yields and dispatch APIs are the anti-list.",
        "Orodha hiyo ndiyo kozi. Chapa, PIN, mavuno ya kubuni na API za kutuma ni anti-orodha."
      ),
      note(
        "Try it: stamp your own page",
        "Jaribu: pigia muhuri ukurasa wako",
        "Write the one-page spec for a real or fictional co-op. Include the stamp line: I have read the hard refusal — chemical use stays with afisa wa ugani, agrovet and PCPB label (or the vet). No GPIO. No yield percent as proof.\n\nRead it to someone who farms and someone who writes software. If either thinks a gang will be messaged from a score, you are not finished.",
        "Andika maelezo ya ukurasa mmoja kwa co-op halisi au ya kubuni. Jumlisha mstari wa muhuri: Nimesoma kukataa gumu — matumizi ya dawa yanabaki kwa afisa wa ugani, agrovet na lebo ya PCPB (au daktari wa mifugo). Hakuna GPIO. Hakuna asilimia ya mavuno kama uthibitisho.\n\nIsome kwa mtu anayelima na mtu anayeandika programu. Yeyote akidhani kikosi kitatumiwa ujumbe kutoka alama, bado hujamaliza."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- You can design, evaluate and govern agri-AI under Kenyan constraints.\n- Open loop, local data, offline, honest numbers, owned archives, paid scouts.\n- People decide chemistry. The system stops before the nozzle. That is the course.",
        "- Unaweza kubuni, kutathmini na kutawala AI ya kilimo chini ya vikwazo vya Kenya.\n- Mzunguko wazi, data ya eneo, bila intaneti, namba za uaminifu, kumbukumbu zinazomilikiwa, wakaguzi wanaolipwa.\n- Watu wanaamua kemia. Mfumo unasimama kabla ya pua ya pampu. Hiyo ndiyo kozi."
      ),
    ],
  },
];
