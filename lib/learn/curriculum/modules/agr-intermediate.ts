import { note, pb, quiz, reveal, scenario } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

/**
 * Food and farming — intermediate (skilled practitioner).
 * Prediction vs action, local data, confidence, scouting, costs, climate,
 * labour, co-ops, and honest pilots. Fictional farms and numbers are labelled as such.
 */
export const agrIntermediateUnits: CurriculumUnit[] = [
  {
    id: "agr-i-u1",
    titleEn: "Prediction is not action",
    titleSw: "Utabiri si kitendo",
    cards: [
      note(
        "A score can raise a visit. It cannot open a knapsack sprayer",
        "Alama inaweza kuongeza ziara. Haiwezi kufungua pampu ya kunyunyizia",
        "In Foundations you learned the machine learning lifecycle: problem, data, train, evaluate, deploy, monitor. On a Kenyan farm the dangerous shortcut is to treat the model's output as the next farm operation.\n\nA prediction is a number about the world: chance of rain, chance this leaf is fall armyworm, chance tomato prices rise next week. An action is what you do with seed, labour, cash, animals or spray. Between them sits a decision rule that people must write down: if the score is above this line, we scout; if scouting finds this count, we call the afisa wa ugani; only then might a PCPB-labelled product be considered.\n\nPrecision agriculture, in the sense of right input, right place, right time, is this chain — not a drone by itself. Most Kenyan smallholders are rain-fed. A variable-rate fertiliser map from another country does not know your 0.8 acre, your hired labour day, or your cash this week.\n\nFarmerAI (Safaricom and Opportunity International, on DigiFarm, SMS and WhatsApp) and photo tools such as Agrika can shorten the noticing step. They do not own the action step. If your workflow has no box that says who may spend money, the prediction has already become an unaccountable order.",
        "Katika Misingi ulijifunza mzunguko wa ujifunzaji wa mashine: tatizo, data, kufunza, tathmini, kuweka kazini, kufuatilia. Shambani Kenya njia fupi hatari ni kuchukulia matokeo ya modeli kama kazi inayofuata ya shamba.\n\nUtabiri ni namba kuhusu dunia: uwezekano wa mvua, uwezekano jani hili ni viwavijeshi vamizi, uwezekano bei ya nyanya itapanda wiki ijayo. Kitendo ni unachofanya kwa mbegu, vibarua, pesa, wanyama au unyunyizaji. Katikati kuna kanuni ya uamuzi ambayo watu lazima waiandike: alama ikiwa juu ya mstari huu, tunakagua shamba; ukaguzi ukipata hesabu hii, tunampiga afisa wa ugani; ndipo tu bidhaa yenye lebo ya PCPB inaweza kuzingatiwa.\n\nKilimo cha usahihi, kwa maana ya pembejeo sahihi, mahali sahihi, wakati sahihi, ni mnyororo huu — si drone pekee. Wakulima wadogo wengi Kenya hutegemea mvua. Ramani ya mbolea ya kiwango kinachobadilika kutoka nchi nyingine haijui ekari yako 0.8, siku yako ya vibarua, wala pesa zako wiki hii.\n\nFarmerAI (Safaricom na Opportunity International, kwenye DigiFarm, SMS na WhatsApp) na zana za picha kama Agrika zinaweza kufupisha hatua ya kuona. Havimiliki hatua ya kitendo. Mtiririko wako ukikosa kisanduku kinachosema nani anaweza kutumia pesa, utabiri tayari umekuwa agizo lisilo na uwajibikaji.",
        "/learn/content/agr/smart-crop-monitoring.jpg"
      ),
      reveal([
        {
          termEn: "Prediction",
          termSw: "Utabiri",
          defEn: "A model's estimate about a future or unseen case. It is not a work order.",
          defSw: "Makadirio ya modeli kuhusu kesi ijayo au isiyoonekana. Si agizo la kazi.",
        },
        {
          termEn: "Action",
          termSw: "Kitendo",
          defEn: "Spending labour, cash, seed, feed or a registered product. A person is accountable for it.",
          defSw: "Kutumia vibarua, pesa, mbegu, chakula cha mifugo au bidhaa iliyosajiliwa. Mtu anawajibika kwake.",
        },
        {
          termEn: "Decision rule",
          termSw: "Kanuni ya uamuzi",
          defEn: "The written if-then that turns a score into scout / wait / call extension — never into spray-from-the-phone.",
          defSw: "Ikiwa-basi iliyoandikwa inayogeuza alama kuwa kagua / subiri / piga ugani — si kunyunyiza-kutoka-simuni kamwe.",
        },
        {
          termEn: "Human in the loop",
          termSw: "Binadamu anabaki kwenye uamuzi",
          defEn: "A named person who can stop or change the plan after the model speaks.",
          defSw: "Mtu aliye tajiwa anayeweza kusimamisha au kubadilisha mpango baada ya modeli kuongea.",
        },
      ]),
      note(
        "Worked example: 72% in three days, two different farms",
        "Mfano: 72% kwa siku tatu, mashamba mawili",
        "Imagine an advisory that texts maize farmers in Trans Nzoia: fall armyworm risk 72% within 3 days. The figure is made up for the lesson.\n\nFarm A has no decision rule. The farmer buys a bottle the same afternoon because the number felt high. Nobody scouts. The bottle may not be labelled for this crop and pest. Cash leaves; the prediction is treated as an order.\n\nFarm B writes a rule before the season: if a risk message is 60% or above, walk 20 plants the same day; if 5 or more are damaged, call the afisa wa ugani with photos; chemical use only after that visit and a PCPB label at the agrovet. Today they count 2 of 20 with old holes. They wait, and they log that the 72% did not match this plot.\n\nSame prediction, opposite actions. The model did not fail Farm A. The missing decision rule did. Logging the miss also gives Farm B evidence about whether this service is calibrated for their ward — the next units pick that up.",
        "Fikiria ushauri unaotumia SMS kwa wakulima wa mahindi Trans Nzoia: hatari ya viwavijeshi vamizi 72% ndani ya siku 3. Namba ni ya kubuni kwa somo.\n\nShamba A halina kanuni ya uamuzi. Mkulima ananunua chupa mchana uleule kwa sababu namba ilionekana kubwa. Hakuna anayekagua. Chupa huenda haina lebo ya zao na wadudu hawa. Pesa zinatokwa; utabiri unachukuliwa kama agizo.\n\nShamba B linaandika kanuni kabla ya msimu: ujumbe wa hatari ukiwa 60% au zaidi, tembea mimea 20 siku ileile; 5 au zaidi zikiwa zimeharibiwa, piga afisa wa ugani na picha; matumizi ya dawa tu baada ya ziara hiyo na lebo ya PCPB kwenye agrovet. Leo wanahesabu 2 kati ya 20 zenye matundu ya zamani. Wanasubiri, na wanarekodi kwamba 72% haikulingana na kipande hiki.\n\nUtabiri uleule, vitendo kinyume. Modeli haikushindwa Shamba A. Kanuni ya uamuzi iliyokosekana ndiyo. Kurekodi kukosa pia kunapa Shamba B ushahidi kama huduma hii imewekwa sawa kwa wadi yao — masomo yanayofuata yanashika hilo."
      ),
      scenario({
        titleEn: "Scenario: the app offers to schedule spraying",
        titleSw: "Hali: programu inajitolea kupanga unyunyizaji",
        situationEn: "A vendor demo in a county hall says their tool will auto-schedule spraying when pest risk exceeds 70%, and dispatch a spray gang via the app. No afisa wa ugani is in the loop. They ask you, as a co-op lead, to switch it on for 400 members.",
        situationSw: "Onyesho la muuzaji katika ukumbi wa kaunti linasema zana yao itapanga yenyewe unyunyizaji hatari ya wadudu inapozidi 70%, na kutuma kikosi cha kunyunyiza kupitia programu. Hakuna afisa wa ugani kwenye mnyororo. Wanakuomba, kama kiongozi wa co-op, uiwashe kwa wanachama 400.",
        questionEn: "What is the responsible response?",
        questionSw: "Jibu lenye uwajibikaji ni lipi?",
        optionsEn: [
          "Switch it on — automation is what precision agriculture means",
          "Refuse automatic spraying: keep the score as a scout-and-call trigger, with chemical use only after extension and a PCPB label",
          "Switch it on only for members with smartphones",
          "Ask the model to lower the threshold to 40% so more fields get sprayed, which must be safer",
        ],
        optionsSw: [
          "Iwasha — otomatiki ndiyo maana ya kilimo cha usahihi",
          "Kataa unyunyizaji otomatiki: weka alama kama kichocheo cha kukagua-na-kupiga, matumizi ya dawa tu baada ya ugani na lebo ya PCPB",
          "Iwasha tu kwa wanachama wenye simu janja",
          "Omba modeli ishuke kizingiti hadi 40% ili mashamba zaidi yanyunyizwe, ambayo lazima iwe salama zaidi",
        ],
        correctIndex: 1,
        hintsEn: [
          "Precision without a human decision is just remote control of a hazardous job. Kenya does not register chatbots as spray authorities.",
          "Correct. The prediction can queue scouting. Action that puts product in the air stays with people and the label.",
          "Phones are an access issue, not a safety design. Automatic spraying is still automatic.",
          "A lower threshold means more false alarms and more unnecessary product, not more safety.",
        ],
        hintsSw: [
          "Usahihi bila uamuzi wa binadamu ni kudhibiti kazi hatari kwa mbali. Kenya haisajili chatbot kama mamlaka ya kunyunyiza.",
          "Sahihi. Utabiri unaweza kuweka foleni ya ukaguzi. Kitendo kinachoweka bidhaa angani kinabaki kwa watu na lebo.",
          "Simu ni suala la ufikiaji, si usanifu wa usalama. Kunyunyiza otomatiki bado ni otomatiki.",
          "Kizingiti cha chini kinamaanisha tahadhari za uongo nyingi zaidi na bidhaa isiyohitajika, si usalama zaidi.",
        ],
        explainEn: "Write the decision rule first. If the rule is the model sprays, stop. If the rule is the model flags and people decide, continue.",
        explainSw: "Andika kanuni ya uamuzi kwanza. Kanuni ikiwa modeli inanyunyiza, simama. Kanuni ikiwa modeli inaashiria na watu wanaamua, endelea.",
      }),
      quiz(
        "Which sentence correctly separates prediction from action on a dairy route?",
        "Sentensi ipi inatenganisha vizuri utabiri na kitendo kwenye njia ya maziwa?",
        [
          "A mastitis risk of 0.81 means start antibiotics in the bulk tank tonight",
          "A mastitis risk of 0.81 means strip and inspect that cow this morning, then call the vet if signs are there",
          "A mastitis risk of 0.81 is a fact about the cow, so recording it is optional",
          "If the model is 81% sure, the co-op may skip the vet to save the call-out fee",
        ],
        [
          "Hatari ya mastitis ya 0.81 inamaanisha anza antibiotiki kwenye tangi usiku huu",
          "Hatari ya mastitis ya 0.81 inamaanisha kama na kuchunguza ng'ombe huyo asubuhi hii, kisha mpigie daktari wa mifugo dalili zikiwepo",
          "Hatari ya mastitis ya 0.81 ni ukweli kuhusu ng'ombe, kwa hiyo kuirekodi ni hiari",
          "Modeli ikiwa na uhakika 81%, co-op inaweza kuruka daktari wa mifugo kuokoa ada ya ziara",
        ],
        1,
        "0.81 is a prediction. Looking is the cheap action. Medicine is a vet's action. Skipping the professional to honour a percentage is how residues and missed diseases happen.",
        "0.81 ni utabiri. Kuangalia ni kitendo cha bei nafuu. Dawa ni kitendo cha daktari wa mifugo. Kuruka mtaalamu kuheshimu asilimia ndivyo mabaki na magonjwa yanavyokosekana."
      ),
      note(
        "Try it: write one decision rule",
        "Jaribu: andika kanuni moja ya uamuzi",
        "Pick one prediction you already meet (weather SMS, leaf app, heat collar, price message).\n\nOn one page write:\n\n- The prediction, in one line.\n- The threshold at which you will look (not act).\n- Who looks, and what they count.\n- Who may authorise spending or chemical use (must be a person plus label or vet).\n- What you will log if prediction and field disagree.\n\nIf you cannot name the last two lines, you are not ready to connect that tool to money.",
        "Chagua utabiri mmoja unayokutana nao tayari (SMS ya hali ya hewa, programu ya majani, kola ya joto, ujumbe wa bei).\n\nKwenye ukurasa mmoja andika:\n\n- Utabiri, kwa mstari mmoja.\n- Kizingiti ambacho utaangalia (si kuchukua hatua ya pesa).\n- Nani anaangalia, na anahesabu nini.\n- Nani anaweza kuruhusu matumizi ya pesa au dawa (lazima awe mtu pamoja na lebo au daktari wa mifugo).\n- Utarekodi nini utabiri na shamba vikitofautiana.\n\nHuwezi kutaja mistari miwili ya mwisho, bado huja wa tayari kuunganisha zana hiyo na pesa."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Predictions estimate; actions spend. Write the rule that sits between them.\n- Auto-spray is not precision agriculture.\n- Next: why a leaf model trained somewhere else often fails on your photos.",
        "- Utabiri hukadiria; vitendo hutumia. Andika kanuni iliyo katikati.\n- Kunyunyiza otomatiki si kilimo cha usahihi.\n- Ifuatayo: kwa nini modeli ya majani iliyofunzwa mahali pengine mara nyingi inashindwa kwenye picha zako."
      ),
    ],
  },
  {
    id: "agr-i-u2",
    titleEn: "Local photos versus imported ones",
    titleSw: "Picha za eneo dhidi ya zilizoletwa",
    cards: [
      note(
        "A leaf in Iowa is not a leaf in Kitui",
        "Jani la Iowa si jani la Kitui",
        "A crop-disease classifier learns the pixels it was shown. If most labelled photos came from research stations, irrigated plots, or another country, the model learned those lighting conditions, those varieties, those soils, and those diseases. Deploying it on a rain-fed smallholder plot is a distribution shift: the new photos are not from the same world as the training set.\n\nLocal versus imported is not only about national borders. Photos from Trans Nzoia long rains can fail in a dry Kitui season. Hybrid maize can fail on a local landrace. Station photos taken at noon with a DSLR fail on a scratched Android in open shade — or they fail the other way, as you saw at beginner level with glare.\n\nKALRO and county teams sometimes have Kenyan labelled sets. Agrika-style tools that train on local leaves and run offline are aiming at this problem. That still does not make them universal. Ask, before you trust a demo: which crops, which counties, which season, how many photos, and was the test set from farms the trainers never saw?\n\nYou cannot fix a geography gap by buying a bigger model. You fix it with labelled photos from the place you will use it, and with a person who can say when the leaf is not in the training list at all.",
        "Ainishaji wa magonjwa ya mazao hujifunza pikseli alizoonyeshwa. Picha nyingi zenye lebo zikitoka vituo vya utafiti, vipande vya umwagiliaji, au nchi nyingine, modeli ilijifunza hali hizo za mwanga, aina hizo, udongo huo, na magonjwa hayo. Kuitumia kwenye kipande cha mkulima mdogo wa mvua ni mabadiliko ya usambazaji (distribution shift): picha mpya si kutoka dunia ileile ya seti ya mafunzo.\n\nZa eneo dhidi ya zilizoletwa si mipaka ya nchi tu. Picha za mvua ndefu Trans Nzoia zinaweza kushindwa msimu kavu Kitui. Mahindi ya hybrid yanaweza kushindwa kwenye kienyeji. Picha za kituo zilizopigwa adhuhuri kwa DSLR zinashindwa kwenye Android iliyokwaruzwa kwenye kivuli wazi — au kinyume, kama ulivyoona katika kiwango cha kuanzia na mng'ao.\n\nKALRO na timu za kaunti wakati mwingine zina seti za Kenya zenye lebo. Zana za aina ya Agrika zinazofunza kwa majani ya eneo na kufanya kazi bila intaneti zinalenga tatizo hili. Hiyo bado haizifanyi kuwa za kila mahali. Uliza, kabla ya kuamini onyesho: mazao gani, kaunti gani, msimu gani, picha ngapi, na je seti ya jaribio ilitoka mashamba wakufunzi hawakuwahi kuona?\n\nHuwezi kufunga pengo la jiografia kwa kununua modeli kubwa. Unalifunga kwa picha zenye lebo kutoka mahali utakapotumia, na kwa mtu anayeweza kusema jani lisipo katika orodha ya mafunzo hata kidogo."
      ),
      reveal([
        {
          termEn: "Distribution shift",
          termSw: "Mabadiliko ya usambazaji",
          defEn: "New photos differ from training photos in place, season, variety, camera or light, so accuracy drops.",
          defSw: "Picha mpya zinatofautiana na za mafunzo kwa mahali, msimu, aina, kamera au mwanga, kwa hiyo usahihi unashuka.",
        },
        {
          termEn: "External validation",
          termSw: "Uthibitishaji wa nje",
          defEn: "Testing on farms, cameras and seasons that were not in the training set.",
          defSw: "Kujaribu kwenye mashamba, kamera na misimu ambayo hayakuwepo kwenye seti ya mafunzo.",
        },
        {
          termEn: "Labelled local set",
          termSw: "Seti ya eneo yenye lebo",
          defEn: "Photos from your county with names agreed by people who know the crop, kept with consent.",
          defSw: "Picha kutoka kaunti yako zenye majina yaliyokubaliwa na watu wanaolifahamu zao, zikiwekwa kwa ridhaa.",
        },
        {
          termEn: "Out-of-class leaf",
          termSw: "Jani nje ya darasa",
          defEn: "A problem the model never saw, such as herbicide burn. It will still name something. That name is a forced guess.",
          defSw: "Tatizo modeli haijawahi kuona, kama kuungua kwa dawa ya magugu. Bado itataja kitu. Jina hilo ni makisio ya kulazimishwa.",
        },
      ]),
      note(
        "Worked example: 88% on station, 61% in the next county",
        "Mfano: 88% kituoni, 61% kaunti jirani",
        "Imagine a county team trains a maize leaf classifier on 2,000 labelled photos from Trans Nzoia research and demo plots. On a held-out slice of those same plots it scores 88% accuracy. They take the same app to a drier county. On 200 farm photos from smallholders it scores 61%. The numbers are made up; the pattern is the usual one.\n\nWhy 61%? The dry-county leaves are paler, the varieties differ, dust sits on the lamina, and farmers photograph at different distances. Several photos are nutrient shortage that the station set barely contained, so the model maps them onto the nearest pest name.\n\nWhat does not fix it: a larger imported model trained on even more Iowa or European leaves. What can fix it:  a few hundred well-labelled photos from the dry county, a test set from farms not used in training, and a refuse option when confidence is low or the leaf is out of class. Until then, 88% is a station number. Quoting it in the dry county is misleading.",
        "Fikiria timu ya kaunti inafunza ainishaji wa majani ya mahindi kwa picha 2,000 zenye lebo kutoka viwanja vya utafiti na maonyesho Trans Nzoia. Kwenye sehemu iliyotengwa ya viwanja vilevile inapata usahihi 88%. Wanachukua programu ileile kaunti kavu zaidi. Kwenye picha 200 za mashamba ya wakulima wadogo inapata 61%. Namba ni za kubuni; muundo ni wa kawaida.\n\nKwa nini 61%? Majani ya kaunti kavu ni mepesi zaidi, aina zinatofautiana, vumbi liko kwenye uso wa jani, na wakulima hupiga kwa umbali tofauti. Picha kadhaa ni upungufu wa lishe ambao seti ya kituo haikuwa nao, kwa hiyo modeli inazielekeza kwenye jina la wadudu lililo karibu.\n\nKisichorekebisha: modeli kubwa iliyoletwa iliyofunzwa kwa majani mengi zaidi ya Iowa au Ulaya. Kinachoweza kurekebisha: picha mia chache zenye lebo nzuri kutoka kaunti kavu, seti ya jaribio kutoka mashamba yasiyotumika kwenye mafunzo, na chaguo la kukataa uhakika ukiwa chini au jani likiwa nje ya darasa. Hadi hapo, 88% ni namba ya kituo. Kuitaja katika kaunti kavu ni kupotosha."
      ),
      scenario({
        titleEn: "Scenario: the imported demo day",
        titleSw: "Hali: siku ya onyesho lililoletwa",
        situationEn: "A vendor shows 94% accuracy on a tablet using a photo they brought. Your ward grows rain-fed potatoes. They have no Kenyan potato photos in the brochure. They want a county letter of support this afternoon.",
        situationSw: "Muuzaji anaonyesha usahihi 94% kwenye kishikwambi akitumia picha aliyoileta. Wadi yako inalima viazi vya mvua. Hawana picha za viazi vya Kenya kwenye brosha. Wanataka barua ya kaunti ya kuunga mkono mchana huu.",
        questionEn: "What should you require first?",
        questionSw: "Unapaswa kuhitaji nini kwanza?",
        optionsEn: [
          "The letter, because 94% is already excellent",
          "A test on local potato photos from farms not chosen by the vendor, with results split by ward, plus a plan for out-of-class leaves",
          "More European photos to raise the 94% further",
          "Support only if the app auto-sprays, to prove it works in the field",
        ],
        optionsSw: [
          "Barua, kwa sababu 94% tayari ni bora",
          "Jaribio kwenye picha za viazi vya eneo kutoka mashamba ambayo muuzaji hakuchagua, matokeo yakigawanywa kwa wadi, pamoja na mpango wa majani nje ya darasa",
          "Picha zaidi za Ulaya kuongeza 94% zaidi",
          "Unga mkono tu programu ikinyunyiza yenyewe, ili kuthibitisha inafanya kazi shambani",
        ],
        correctIndex: 1,
        hintsEn: [
          "94% on the vendor's photo is a rehearsal, not a field result for your crop.",
          "Correct. Local, vendor-blind photos and a refuse path are the minimum before any letter.",
          "More foreign leaves widen the shift. They do not close it.",
          "Auto-spray would multiply a wrong class across the ward. That is the opposite of proof.",
        ],
        hintsSw: [
          "94% kwenye picha ya muuzaji ni mazoezi, si tokeo la shamba kwa zao lako.",
          "Sahihi. Picha za eneo muuzaji asizochagua na njia ya kukataa ni kiwango cha chini kabla ya barua yoyote.",
          "Majani zaidi ya nje yanaongeza mabadiliko. Hayafungi pengo.",
          "Kunyunyiza otomatiki kungeongeza darasa potovu katika wadi. Huo ni kinyume cha uthibitisho.",
        ],
        explainEn: "Accuracy travels only as far as the photos. No local test, no support letter.",
        explainSw: "Usahihi unasafiri umbali wa picha tu. Hakuna jaribio la eneo, hakuna barua ya kuunga mkono.",
      }),
      quiz(
        "The most likely reason a maize disease app falls from 88% in one county to 61% in another is:",
        "Sababu yenye uwezekano mkubwa programu ya magonjwa ya mahindi inashuka kutoka 88% kaunti moja hadi 61% nyingine ni:",
        [
          "Farmers in the second county are careless with weeding",
          "Training photos did not cover the second county's varieties, season and cameras",
          "The app needs a larger phone screen",
          "AI cannot work in Africa",
        ],
        [
          "Wakulima wa kaunti ya pili ni wazembe wa kupalilia",
          "Picha za mafunzo hazikufunika aina, msimu na kamera za kaunti ya pili",
          "Programu inahitaji skrini kubwa zaidi ya simu",
          "AI haiwezi kufanya kazi Afrika",
        ],
        1,
        "Models repeat the pixels they were shown. Geography, season and device are the usual gap. Carelessness and continent myths are not mechanisms.",
        "Modeli hurudia pikseli zilizoonyeshwa. Jiografia, msimu na kifaa ndio pengo la kawaida. Uzembe na hadithi za bara si mifumo."
      ),
      note(
        "Try it: audit one photo app's geography",
        "Jaribu: kagua jiografia ya programu moja ya picha",
        "Open a crop photo tool (or its website / Play Store text) and write four lines:\n\n- Crops it claims.\n- Countries or counties it names for training, or 'not stated'.\n- Whether it says offline / Kiswahili (Agrika-style claims are an example of stating this).\n- One photo you would add from your own ward if you were allowed to, and who would label it (you plus afisa wa ugani, not a chat).\n\nIf training place is not stated, treat every accuracy number as unfinished.",
        "Fungua zana ya picha za mazao (au tovuti / maandishi ya Play Store) na andika mistari minne:\n\n- Mazao inayodai.\n- Nchi au kaunti inazotaja kwa mafunzo, au haijaelezwa.\n- Kama inasema bila intaneti / Kiswahili (dai za aina ya Agrika ni mfano wa kueleza hivi).\n- Picha moja ungeongeza kutoka wadi yako kama ungeruhusiwa, na nani angeweka lebo (wewe pamoja na afisa wa ugani, si gumzo).\n\nMahali pa mafunzo hakikuwekwa, chukulia kila namba ya usahihi kama haijakamilika."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Accuracy is about the photos you trained on, not a global talent of the model.\n- Demand local, vendor-blind tests and an out-of-class refuse.\n- Next: what a confidence score on that guess actually means in the field.",
        "- Usahihi unahusu picha ulizofunza, si talanta ya dunia ya modeli.\n- Dai majaribio ya eneo muuzaji asiyochagua na kukataa jani nje ya darasa.\n- Ifuatayo: alama ya uhakika kwenye makisio hayo inamaanisha nini hasa shambani."
      ),
    ],
  },
  {
    id: "agr-i-u3",
    titleEn: "Reading a confidence score",
    titleSw: "Kusoma alama ya uhakika",
    cards: [
      note(
        "72% sure is not 72% of the field",
        "Uhakika 72% si asilimia 72 ya shamba",
        "A confidence score is the model's own estimate of how sure it is about this one case. It is not the share of your plants that are sick, not the chance you will profit, and not a promise the name is correct.\n\nIf the app says fall armyworm, 72%, it is saying: among cases that looked like this to me, I would often pick this name. Whether that 72 is honest depends on calibration. Calibration means that when the model says 70–80%, it is actually right about 70–80 times in 100 of those guesses. Many field tools are over-confident: they print 90% and are right 60% of the time on real farms.\n\nYou cannot read calibration from one photo. You read it from a log: for a month, write the score, the guess, and what the afisa wa ugani later confirmed. Then group the scores. If ten guesses sat near 70% and only four were confirmed, the 70s are not 70s on your ward.\n\nLow confidence is useful. It is a refuse signal: take another photo, scout more plants, or stop. High confidence without local calibration is theatre. Combine the score with Unit 1's decision rule: perhaps scout above 50%, call extension above 50% plus a field count, and never treat the score as a dose.",
        "Alama ya uhakika ni makadirio ya modeli kuhusu jinsi ilivyo na uhakika kwenye kesi hii moja. Si sehemu ya mimea yako iliyo mgonjwa, si nafasi utakayopata faida, wala si ahadi kwamba jina ni sahihi.\n\nProgramu ikisema viwavijeshi vamizi, 72%, inasema: kati ya kesi zilizofanana nami hivi, mara nyingi ningechagua jina hili. Kama 72 hiyo ni ya uaminifu kunategemea urekebishaji (calibration). Urekebishaji unamaanisha modeli inaposema 70–80%, kwa kweli iko sahihi takriban mara 70–80 kati ya 100 za makisio hayo. Zana nyingi za shamba zina uhakika mno: zinachapisha 90% na ziko sahihi 60% ya wakati kwenye mashamba halisi.\n\nHuwezi kusoma urekebishaji kutoka picha moja. Unausoma kutoka kumbukumbu: kwa mwezi, andika alama, makisio, na afisa wa ugani alichothibitisha baadaye. Kisha panga alama. Makisio kumi yakiwa karibu 70% na manne tu yakathibitishwa, zile 70 si 70 kwenye wadi yako.\n\nUhakika wa chini una manufaa. Ni ishara ya kukataa: piga picha nyingine, kagua mimea zaidi, au simama. Uhakika wa juu bila urekebishaji wa eneo ni maonyesho. Unganisha alama na kanuni ya uamuzi ya Somo la 1: labda kagua juu ya 50%, piga ugani juu ya 50% pamoja na hesabu ya shamba, na usichukulie alama kama kipimo kamwe."
      ),
      reveal([
        {
          termEn: "Confidence score",
          termSw: "Alama ya uhakika",
          defEn: "The model's estimate of sureness for this one guess — not a field percentage and not a promise.",
          defSw: "Makadirio ya modeli ya uhakika kwa makisio haya moja — si asilimia ya shamba wala si ahadi.",
        },
        {
          termEn: "Calibration",
          termSw: "Urekebishaji (calibration)",
          defEn: "When 70% guesses are right about 70% of the time. Uncalibrated tools print high numbers they have not earned.",
          defSw: "Makisio ya 70% yakiwa sahihi takriban 70% ya wakati. Zana zisizorekebishwa huchapisha namba kubwa hazijastahili.",
        },
        {
          termEn: "Over-confidence",
          termSw: "Uhakika uliozidi",
          defEn: "Scores sit higher than actual hit rates on real farm photos.",
          defSw: "Alama ziko juu kuliko kiwango halisi cha kupata sahihi kwenye picha za shamba.",
        },
        {
          termEn: "Refuse threshold",
          termSw: "Kizingiti cha kukataa",
          defEn: "A score below which the tool should say I do not know instead of forcing a name.",
          defSw: "Alama ambayo chini yake zana inapaswa kusema sijui badala ya kulazimisha jina.",
        },
      ]),
      note(
        "Worked example: twenty guesses in a notebook",
        "Mfano: makisio ishirini kwenye daftari",
        "Imagine a lead farmer in Bungoma logs 20 photo-app guesses in one month. After the afisa wa ugani visits, 11 names match the field. The numbers are made up.\n\nShe splits the log. Eight guesses had scores of 80% or more; five of those eight matched (about 62%, not 80%). Seven guesses sat between 50% and 79%; four matched. Five guesses were below 50%; two matched, and those two were lucky — the officer said the leaf was a mixed problem.\n\nTwo lessons. First, the high scores are over-confident on this ward: treat 80 as closer to 60 until the vendor recalibrates or you collect more local photos (Unit 2). Second, below 50% the name is almost noise; use those days to scout, not to shop. She sets a personal rule: I will not even discuss a product unless the score is above 50% and my own count is above the scout line. The score never buys the bottle.",
        "Fikiria mkulima kiongozi huko Bungoma anarekodi makisio 20 ya programu ya picha kwa mwezi mmoja. Baada ya afisa wa ugani kutembelea, majina 11 yanalingana na shamba. Namba ni za kubuni.\n\nAnagawanya kumbukumbu. Makisio nane yalikuwa na alama 80% au zaidi; tano kati ya hayo nane yalingana (takriban 62%, si 80%). Makisio saba yalikuwa kati ya 50% na 79%; manne yalingana. Makisio lima yalikuwa chini ya 50%; mawili yalingana, na hayo mawili yalikuwa bahati — afisa alisema jani lilikuwa tatizo mchanganyiko.\n\nMafunzo mawili. Kwanza, alama za juu zina uhakika uliozidi kwenye wadi hii: chukulia 80 kama karibu 60 hadi muuzaji arekebishe au ukusanye picha zaidi za eneo (Somo la 2). Pili, chini ya 50% jina ni karibu kelele; tumia siku hizo kukagua, si kununua. Anaweka kanuni ya kibinafsi: sitazungumza hata bidhaa isipokuwa alama iko juu ya 50% na hesabu yangu iko juu ya mstari wa ukaguzi. Alama haiungi chupa kamwe."
      ),
      scenario({
        titleEn: "Scenario: 91% on a glare photo",
        titleSw: "Hali: 91% kwenye picha yenye mng'ao",
        situationEn: "Your intern photographs one shiny maize leaf at noon. The app returns nutrient deficiency, 91% sure. Your own walk this morning found window-pane damage and frass on many plants.",
        situationSw: "Mwanafunzi wako wa kazi anapiga picha ya jani moja la mahindi lenye mng'ao adhuhuri. Programu inarudisha upungufu wa lishe, uhakika 91%. Tembezi yako asubuhi ilipata uharibifu kama dirisha na kinyesi kwenye mimea mingi.",
        questionEn: "How do you read the 91%?",
        questionSw: "Unaisomaje 91%?",
        optionsEn: [
          "Believe it — 91% outranks what one person saw on a walk",
          "Treat it as over-confident on a bad photo: reshoot in shade, count plants, and take both the new score and the count to extension",
          "Average 91% with your gut feeling and spray a compromise mix",
          "Delete the app for printing a high number",
        ],
        optionsSw: [
          "Iamini — 91% inashinda kile mtu mmoja aliona akitembea",
          "Ichukulie kama uhakika uliozidi kwenye picha mbaya: piga upya kivulini, hesabu mimea, na uchukue alama mpya pamoja na hesabu kwa ugani",
          "Wastanisha 91% na hisia yako na unyunyize mchanganyiko wa katikati",
          "Futa programu kwa kuchapisha namba kubwa",
        ],
        correctIndex: 1,
        hintsEn: [
          "A score cannot outrank holes and frass you can touch. 91% on glare is a property of the photo, not the field.",
          "Correct. Fix capture, add a count, then a person. Mixing bottles is not a reading of confidence.",
          "A compromise mix is two unconfirmed products. Confidence does not license chemistry.",
          "One bad capture is not a reason to throw away a tool. Recalibrate how you use it.",
        ],
        hintsSw: [
          "Alama haiwezi kushinda matundu na kinyesi unachoweza kugusa. 91% kwenye mng'ao ni sifa ya picha, si ya shamba.",
          "Sahihi. Rekabilisha upigaji, ongeza hesabu, kisha mtu. Kuchanganya chupa si kusoma uhakika.",
          "Mchanganyiko wa katikati ni bidhaa mbili zisizothibitishwa. Uhakika hauruhusu kemia.",
          "Upigaji mmoja mbaya si sababu ya kutupa zana. Rekabilisha jinsi unavyoitumia.",
        ],
        explainEn: "Read a confidence score next to capture quality and a plant count. High numbers on poor photos are a warning about the score, not about your eyes.",
        explainSw: "Soma alama ya uhakika kando ya ubora wa picha na hesabu ya mimea. Namba kubwa kwenye picha dhaifu ni onyo kuhusu alama, si kuhusu macho yako.",
      }),
      quiz(
        "You logged 10 guesses that the app marked about 70% sure. The officer confirmed 4. The 70% was:",
        "Ulirekodi makisio 10 ambayo programu iliweka uhakika wa takriban 70%. Afisa alithibitisha 4. Ile 70% ilikuwa:",
        [
          "Correct, because 70% means it can fail 3 times in 10, and 6 failures is close enough",
          "Over-confident on this ward: 4 in 10 is 40%, so treat those 70s as weaker than they look",
          "Proof the officer is biased against the app",
          "A sign you should spray whenever the score is 70% to catch the 4 true cases",
        ],
        [
          "Sahihi, kwa sababu 70% inamaanisha inaweza kushindwa mara 3 kati ya 10, na kushindwa 6 ni karibu vya kutosha",
          "Yenye uhakika uliozidi kwenye wadi hii: 4 kati ya 10 ni 40%, kwa hiyo chukulia zile 70 kama dhaifu kuliko zinavyoonekana",
          "Uthibitisho afisa ana upendeleo dhidi ya programu",
          "Ishara unapaswa kunyunyiza kila alama ikiwa 70% ili kupata kesi 4 halisi",
        ],
        1,
        "4 in 10 is 40%, not 70%. That is the definition of over-confidence. Spraying on an uncalibrated 70% is how false alarms become product in the air.",
        "4 kati ya 10 ni 40%, si 70%. Ndiyo maana ya uhakika uliozidi. Kunyunyiza kwa 70% isiyorekebishwa ndivyo tahadhari za uongo zinavyokuwa bidhaa angani."
      ),
      note(
        "Try it: a one-week calibration strip",
        "Jaribu: ukanda wa urekebishaji wa wiki moja",
        "Make four columns: Date, Guess and score, My scout count, Officer or vet later (yes / no / not yet).\n\nLog every photo or livestock flag this week. Do not treat from the log.\n\nAt the end, circle scores that failed. If you have fewer than five rows, keep going. Calibration is a habit, not a one-shot quiz.",
        "Tengeneza safu nne: Tarehe, Makisio na alama, Hesabu yangu ya ukaguzi, Afisa au daktari wa mifugo baadaye (ndiyo / hapana / bado).\n\nRekodi kila picha au ishara ya mifugo wiki hii. Usitibu kutoka kwenye kumbukumbu.\n\nMwishoni, zungushia alama zilizoshindwa. Ukiwa na mistari chini ya mitano, endelea. Urekebishaji ni tabia, si jaribio la mara moja."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Confidence is sureness about one guess, not a map of the field.\n- Log scores against confirmation; expect over-confidence.\n- Next: scouting — the field is the test the score must face.",
        "- Uhakika ni uhakika kuhusu makisio moja, si ramani ya shamba.\n- Rekodi alama dhidi ya uthibitisho; tarajia uhakika uliozidi.\n- Ifuatayo: ukaguzi wa shamba — shamba ndilo jaribio ambalo alama lazima ikabiliane nalo."
      ),
    ],
  },
  {
    id: "agr-i-u4",
    titleEn: "Scouting: the field is the test",
    titleSw: "Ukaguzi wa shamba: shamba ndilo jaribio",
    cards: [
      note(
        "Ground truth is a walk with a count, not a screenshot",
        "Ukweli wa shamba ni tembezi yenye hesabu, si picha ya skrini",
        "Scouting is a planned walk to estimate how common a problem is. It is how you collect ground truth: what is actually happening, against which every prediction is judged.\n\nA simple pattern many extension teams use: walk a W through the plot, stop at five points, look at a fixed number of plants at each stop (for example four, which is 20 plants), and write damaged / not damaged. Do not start at the worst corner and call that the farm. Do not photograph only the ugly leaf (beginner Unit 4) and call that a prevalence.\n\nWhy this matters for AI. The model sees one frame. Scouting sees a sample. If 2 of 20 plants are damaged, a 80% confident pest name is a fact about a photo, not about the acre. Economic thresholds used by agronomists are counts, not confidence scores. You will not learn a spray threshold from this course — those come from KALRO, PCPB labels and the afisa wa ugani — but you will learn that without a count you have no threshold at all.\n\nLog the count next to the app's guess. That pair is the beginning of Unit 5's confusion matrix.",
        "Ukaguzi wa shamba ni tembezi iliyopangwa kukadiria jinsi tatizo lilivyo la kawaida. Ndivyo unavyokusanya ukweli wa shamba: kinachotokea kweli, ambacho kila utabiri hupimwa nacho.\n\nMuundo rahisi timu nyingi za ugani hutumia: tembea umbo la W kwenye kipande, simama sehemu tano, angalia idadi maalum ya mimea kila kusimama (kwa mfano nne, yaani mimea 20), na andika imeharibiwa / haijaharibiwa. Usianze kwenye kona mbaya na kuiita hiyo shamba. Usipige picha ya jani baya tu (Somo la 4 la kuanzia) na kuiita hiyo kuenea.\n\nKwa nini hii ni muhimu kwa AI. Modeli inaona fremu moja. Ukaguzi unaona sampuli. Mimea 2 kati ya 20 ikiwa imeharibiwa, jina la wadudu lenye uhakika 80% ni ukweli kuhusu picha, si kuhusu ekari. Vikomo vya kiuchumi vinavyotumiwa na wataalamu wa kilimo ni hesabu, si alama za uhakika. Hutajifunza kizingiti cha kunyunyiza kutoka kozi hii — hivyo vinatoka KALRO, lebo za PCPB na afisa wa ugani — lakini utajifunza kwamba bila hesabu huna kizingiti kamwe.\n\nRekodi hesabu kando ya makisio ya programu. Jozi hiyo ndiyo mwanzo wa matriki ya kuchanganyikiwa ya Somo la 5."
      ),
      reveal([
        {
          termEn: "Ground truth",
          termSw: "Ukweli wa shamba",
          defEn: "What is actually in the field, checked by looking and counting, used as the standard for every guess.",
          defSw: "Kilichopo shambani kweli, kilichokaguliwa kwa kuangalia na kuhesabu, kinachotumika kama kipimo cha kila makisio.",
        },
        {
          termEn: "W-walk",
          termSw: "Tembezi ya W",
          defEn: "A path that samples corners and the middle instead of only the worst patch by the path.",
          defSw: "Njia inayochukua sampuli za pembe na katikati badala ya sehemu mbaya tu kando ya njia.",
        },
        {
          termEn: "Prevalence",
          termSw: "Kuenea",
          defEn: "The share of plants (or animals) with the problem, for example 7 of 20.",
          defSw: "Sehemu ya mimea (au wanyama) yenye tatizo, kwa mfano 7 kati ya 20.",
        },
        {
          termEn: "Economic threshold",
          termSw: "Kizingiti cha kiuchumi",
          defEn: "A count at which action may pay, set by agronomy — not by an app percentage. Confirm with extension.",
          defSw: "Hesabu ambayo hatua inaweza kulipa, iliyowekwa na agronomia — si kwa asilimia ya programu. Thibitisha na ugani.",
        },
      ]),
      note(
        "Worked example: 80% on one leaf, 2 in 20 on the walk",
        "Mfano: 80% kwenye jani moja, 2 kati ya 20 kwenye tembezi",
        "Imagine Mary in Kakamega. The app says bean fly, 80% sure, from a close-up. She walks a W and inspects 20 plants: 2 have the tunnelling the officer showed her last season. 2 in 20 is 10% of the sample, not 80% of the field.\n\nShe writes both numbers. She does not buy a product. She asks the afisa wa ugani what count, for this crop and this stage, would justify considering a registered option. That question is agronomy, not machine learning.\n\nIf she had treated 80% as prevalence she might have spent a day's labour and a bottle on a problem that is still rare. If she had ignored the app entirely she might have missed the 2 plants as the start of a patch. Scouting holds both: the flag told her to walk; the walk told her the size.",
        "Fikiria Mary huko Kakamega. Programu inasema nzi wa maharagwe, uhakika 80%, kutoka picha ya karibu. Anatembea W na kukagua mimea 20: 2 zina njia ndani ya shina alizoonyeshwa na afisa msimu uliopita. 2 kati ya 20 ni 10% ya sampuli, si 80% ya shamba.\n\nAnaandika namba zote mbili. Hanunui bidhaa. Anamuuliza afisa wa ugani ni hesabu gani, kwa zao hili na hatua hii, ingehalalisha kuzingatia chaguo lililosajiliwa. Swali hilo ni agronomia, si ujifunzaji wa mashine.\n\nKama angechukulia 80% kama kuenea angeweza kutumia siku ya vibarua na chupa kwenye tatizo ambalo bado ni nadra. Kama angepuuza programu kabisa angeweza kukosa mimea 2 kama mwanzo wa sehemu. Ukaguzi unashika yote: ishara ilimwambia atembee; tembezi ilimwambia ukubwa."
      ),
      scenario({
        titleEn: "Scenario: scouting only the roadside strip",
        titleSw: "Hali: kukagua ukanda wa barabara tu",
        situationEn: "A youth intern scouts only the 15 plants along the path where visitors walk. All 15 look healthy. The photo app, used on a plant in the far corner, said blight 74%. The farmer wants a yes/no on calling extension.",
        situationSw: "Kijana mwanafunzi anakagua mimea 15 tu kando ya njia ambapo wageni hutembea. Yote 15 yanaonekana mizima. Programu ya picha, iliyotumika kwenye mmea kwenye kona ya mbali, ilisema blight 74%. Mkulima anataka ndiyo/hapana ya kumpiga ugani.",
        questionEn: "What is wrong with the intern's scout, and what should happen?",
        questionSw: "Nini kibaya na ukaguzi wa mwanafunzi, na nini kifanyike?",
        optionsEn: [
          "Nothing — 15 healthy plants beat one photo",
          "The path is a biased sample; redo a W that includes the far corner, count, then call extension with both the new count and the photo",
          "Believe the 74% and skip walking, to save labour",
          "Pull up the far-corner plant so the next intern cannot be confused",
        ],
        optionsSw: [
          "Hakuna — mimea 15 mizima inashinda picha moja",
          "Njia ni sampuli yenye upendeleo; fanya W upya inayojumlisha kona ya mbali, hesabu, kisha piga ugani na hesabu mpya pamoja na picha",
          "Amini 74% na ruka kutembea, kuokoa vibarua",
          "Ng'oa mmea wa kona ya mbali ili mwanafunzi anayefuata asichanganyike",
        ],
        correctIndex: 1,
        hintsEn: [
          "Plants next to the path are the ones the farmer already sees. They are not a random sample of the plot.",
          "Correct. A biased walk can hide a corner outbreak. Include it, count, then a person.",
          "Labour saved now can become a plot lost. The score is a reason to walk better, not less.",
          "Destroying evidence does not measure prevalence. You need the count, not a cleaner path.",
        ],
        hintsSw: [
          "Mimea kando ya njia ndiyo mkulima tayari anaiona. Si sampuli ya nasibu ya kipande.",
          "Sahihi. Tembezi yenye upendeleo inaweza kuficha mlipuko wa kona. Ijumlishe, hesabu, kisha mtu.",
          "Vibarua vilivyookolewa sasa vinaweza kuwa kipande kilichopotea. Alama ni sababu ya kutembea vizuri, si kidogo.",
          "Kuharibu ushahidi kupimi kuenea. Unahitaji hesabu, si njia safi.",
        ],
        explainEn: "Scout where the problem might hide, not only where guests walk. Then take the count to a person.",
        explainSw: "Kagua pale tatizo lingeweza kujificha, si pale wageni wanapopita tu. Kisha chukua hesabu kwa mtu.",
      }),
      quiz(
        "An app is 85% sure a pest is present. You counted 1 damaged plant in 20. The most accurate statement is:",
        "Programu ina uhakika 85% wadudu wapo. Ulihesabu mmea 1 ulioharibiwa kati ya 20. Kauli sahihi zaidi ni:",
        [
          "85% of the field is infested",
          "The photo looks like that pest to the model; about 5% of your sample shows damage — these are different facts",
          "1 in 20 means the app is broken and should be banned",
          "You should spray because 85 is higher than 5",
        ],
        [
          "Asilimia 85 ya shamba imeathirika",
          "Picha inafanana na wadudu hao kwa modeli; takriban 5% ya sampuli yako inaonyesha uharibifu — hizi ni ukweli tofauti",
          "1 kati ya 20 inamaanisha programu imevunjika na inapaswa kupigwa marufuku",
          "Unapaswa kunyunyiza kwa sababu 85 ni kubwa kuliko 5",
        ],
        1,
        "Confidence and prevalence answer different questions. Comparing 85 with 5 as if they were the same unit is how people reach for a bottle.",
        "Uhakika na kuenea hujibu maswali tofauti. Kulinganisha 85 na 5 kana kwamba ni kipimo kimoja ndivyo watu wanavyoelekea chupa."
      ),
      note(
        "Try it: one W, twenty plants",
        "Jaribu: W moja, mimea ishirini",
        "On a plot or school garden, walk a W. At five stops look at four plants each. Write damaged / not for a problem you can see (holes, spots, wilt) or healthy if none.\n\nWrite prevalence as n of 20. If you use a photo app, attach one score to the page. Do not treat. If n is more than zero, your next step is a person, not a chat dose.",
        "Kwenye kipande au bustani ya shule, tembea W. Kwenye vituo vitano angalia mimea minne kila kimoja. Andika imeharibiwa / hapana kwa tatizo unaloweza kuona (matundu, mabaka, kunyauka) au mzima kama hakuna.\n\nAndika kuenea kama n kati ya 20. Ukitumia programu ya picha, ambatisha alama moja kwenye ukurasa. Usitibu. n ikiwa zaidi ya sifuri, hatua inayofuata ni mtu, si kipimo cha gumzo."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Ground truth is a counted sample, not the ugliest leaf.\n- Confidence is not prevalence.\n- Next: put counts and guesses into a confusion matrix, and price the two kinds of error.",
        "- Ukweli wa shamba ni sampuli iliyohesabiwa, si jani baya zaidi.\n- Uhakika si kuenea.\n- Ifuatayo: weka hesabu na makisio kwenye matriki ya kuchanganyikiwa, na kadiria aina mbili za kosa."
      ),
    ],
  },
  {
    id: "agr-i-u5",
    titleEn: "False alarms, missed pests, and input costs",
    titleSw: "Tahadhari za uongo, wadudu walioachwa, na gharama za pembejeo",
    cards: [
      note(
        "Every yes/no tool has four boxes — and each box costs someone",
        "Zana kila ndiyo/hapana ina visanduku vinne — na kila kisanduku kinamgharimu mtu",
        "When a diagnosis app says present or absent, and scouting plus an officer later say what was true, you get four counts:\n\n- True positive (TP): pest or disease was there, tool said yes.\n- False positive (FP): it was not there, tool said yes.\n- False negative (FN): it was there, tool said no.\n- True negative (TN): it was not there, tool said no.\n\nAccuracy is (TP+TN) / all. It hides the cost of the two errors. A false negative can let fall armyworm move through a maize plot while you wait. A false positive can send you to the agrovet for a product you did not need, using cash, labour and exposing people and bees.\n\nThose costs are not equal, and they are not paid by the model. Input costs — seed, fertiliser, labour, registered products, transport to town — sit in your notebook from beginner Unit 2. A tool that never sees KES will happily print yes. Your decision rule must price FP and FN in KES and in risk, then choose a threshold with extension, not with a vendor slide.\n\nThis unit closes the mini-course: you can now refuse automatic action (Unit 1), demand local photos (Unit 2), read scores as uncalibrated guesses (Unit 3), scout (Unit 4), and cost the two errors before anyone shops.",
        "Programu ya utambuzi inaposemaipo au hapana, na ukaguzi pamoja na afisa baadaye wakisema kilichokuwa kweli, unapata hesabu nne:\n\n- Chanya halisi (TP): wadudu au ugonjwa ulikuwepo, zana ilisema ndiyo.\n- Chanya ya uongo (FP): haukuwepo, zana ilisema ndiyo.\n- Hasi ya uongo (FN): ulikuwepo, zana ilisema hapana.\n- Hasi halisi (TN): haukuwepo, zana ilisema hapana.\n\nUsahihi ni (TP+TN) / yote. Huficha gharama ya makosa mawili. Hasi ya uongo inaweza kuacha viwavijeshi vamizi wapite kwenye kipande cha mahindi unaposubiri. Chanya ya uongo inaweza kukutuma agrovet kwa bidhaa usiyohitaji, ukitumia pesa, vibarua na kuweka watu na nyuki hatarini.\n\nGharama hizo si sawa, na si modeli inayozilipa. Gharama za pembejeo — mbegu, mbolea, vibarua, bidhaa zilizosajiliwa, usafiri mjini — ziko kwenye daftari lako kutoka Somo la 2 la kuanzia. Zana isiyoona KES itachapisha ndiyo kwa furaha. Kanuni yako ya uamuzi lazima iweke bei ya FP na FN kwa KES na kwa hatari, kisha uchague kizingiti na ugani, si kwa slaidi ya muuzaji.\n\nSomo hili linafunga kozi fupi: sasa unaweza kukataa kitendo otomatiki (Somo la 1), kudai picha za eneo (Somo la 2), kusoma alama kama makisio yasiyorekebishwa (Somo la 3), kukagua (Somo la 4), na kugharimia makosa mawili kabla mtu yeyote hajenda dukani."
      ),
      reveal([
        {
          termEn: "Confusion matrix",
          termSw: "Matriki ya kuchanganyikiwa",
          defEn: "The four-box count of TP, FP, FN, TN after you compare guesses with ground truth.",
          defSw: "Hesabu ya visanduku vinne vya TP, FP, FN, TN baada ya kulinganisha makisio na ukweli wa shamba.",
        },
        {
          termEn: "False positive cost",
          termSw: "Gharama ya chanya ya uongo",
          defEn: "Money, labour and risk spent because the tool cried pest when the field was clean.",
          defSw: "Pesa, vibarua na hatari zilizotumika kwa sababu zana ililia wadudu shamba lilipokuwa safi.",
        },
        {
          termEn: "False negative cost",
          termSw: "Gharama ya hasi ya uongo",
          defEn: "Damage that grows because the tool said all clear while the problem was present.",
          defSw: "Uharibifu unaokua kwa sababu zana ilisema kila kitu sawa tatizo lilipokuwepo.",
        },
        {
          termEn: "Precision (PPV)",
          termSw: "Usahihi chanya (PPV)",
          defEn: "Of the tool's yeses, how many were real: TP / (TP+FP).",
          defSw: "Kati ya ndiyo za zana, ngapi zilikuwa halisi: TP / (TP+FP).",
        },
      ]),
      note(
        "Worked example: 1,000 leaves and a KES bill",
        "Mfano: majani 1,000 na bili ya KES",
        "Imagine a ward trial of a leaf app. Officers later confirm disease on 100 of 1,000 plants (10% prevalence). The app, using a high-sensitivity setting, flags 90 of those 100 (TP=90, FN=10) and also flags 135 healthy plants (FP=135, TN=765). Accuracy is (90+765)/1000 = 85.5%. It looks fine on a slide.\n\nNow price it. Suppose, fictionally, a false-positive trip to town plus a product you did not need costs about KES 800 in cash and labour. 135 FPs would be about KES 108,000 of wasted motion if every flag were treated — which is why you must not treat every flag. A false negative that misses an early patch is harder to price; it is not zero, and it is not a licence to spray the 135.\n\nPrecision is 90 / (90+135) = 40%. So 6 of 10 yeses are false. The honest report to the co-op is: this setting catches most true cases in the trial and floods you with false yeses; use it to queue scouting, not shopping. We will not publish 85.5% without the four boxes and the KES.",
        "Fikiria jaribio la wadi la programu ya majani. Maafisa baadaye wanathibitisha ugonjwa kwenye 100 kati ya mimea 1,000 (kuenea 10%). Programu, kwa mpangilio wa unyeti wa juu, inaashiria 90 kati ya 100 (TP=90, FN=10) na pia inaashiria mimea 135 mizima (FP=135, TN=765). Usahihi ni (90+765)/1000 = 85.5%. Inaonekana vizuri kwenye slaidi.\n\nSasa weka bei. Tuseme, kwa kubuni, ziara ya chanya ya uongo mjini pamoja na bidhaa usiyohitaji inagharimu takriban KES 800 kwa pesa na vibarua. FP 135 zingekuwa takriban KES 108,000 za mwendo wa bure kila ishara ikitibiwa — ndiyo sababu hapaswi kutibu kila ishara. Hasi ya uongo inayokosa sehemu ya mapema ni ngumu zaidi kuweka bei; si sifuri, na si leseni ya kunyunyiza 135.\n\nPPV ni 90 / (90+135) = 40%. Kwa hiyo ndiyo 6 kati ya 10 ni za uongo. Ripoti ya uaminifu kwa co-op ni: mpangilio huu unapata kesi nyingi halisi katika jaribio na unakufurikisha kwa ndiyo za uongo; utumie kuweka foleni ya ukaguzi, si ununuzi. Hatutachapisha 85.5% bila visanduku vinne na KES."
      ),
      scenario({
        titleEn: "Scenario: the vendor quotes 96% accuracy",
        titleSw: "Hali: muuzaji anataja usahihi 96%",
        situationEn: "A sales sheet says 96% accurate on Kenyan maize. You ask for the four boxes. They have not split false positives from false negatives. They say farmers love it. They want you to pre-order product packs tied to each yes.",
        situationSw: "Karatasi ya mauzo inasema sahihi 96% kwenye mahindi ya Kenya. Unaomba visanduku vinne. Hawajagawanya chanya za uongo na hasi za uongo. Wanasema wakulima wanapenda. Wanataka uagize mapema pakiti za bidhaa zinazofungamana na kila ndiyo.",
        questionEn: "What do you do?",
        questionSw: "Unafanya nini?",
        optionsEn: [
          "Pre-order — 96% plus farmer love is enough",
          "Refuse the bundle: no four boxes, no costed FP/FN, and no product tied to an app yes",
          "Pre-order half the packs to be cautious",
          "Ask them to raise accuracy to 99% by hiding false negatives",
        ],
        optionsSw: [
          "Agiza mapema — 96% pamoja na upendo wa wakulima inatosha",
          "Kataa kifurushi: hakuna visanduku vinne, hakuna FP/FN zenye gharama, na hakuna bidhaa iliyofungamana na ndiyo ya programu",
          "Agiza nusu ya pakiti kuwa mwangalifu",
          "Waombe waongeze usahihi hadi 99% kwa kuficha hasi za uongo",
        ],
        correctIndex: 1,
        hintsEn: [
          "Love and a single percentage are marketing. Tied product packs turn every false yes into inventory you will be pushed to use.",
          "Correct. Mini-course complete: no matrix, no purchase, and never a bottle on the back of a yes.",
          "Half a bad bundle is still a bundle that spends on false yeses.",
          "Hiding FN to pretty the number is the worst reporting sin. You will meet it again in Unit 11.",
        ],
        hintsSw: [
          "Upendo na asilimia moja ni masoko. Pakiti za bidhaa zilizofungamana hugeuza kila ndiyo ya uongo kuwa bidhaa utakayosukumwa kuitumia.",
          "Sahihi. Kozi fupi imekamilika: hakuna matriki, hakuna ununuzi, na hakuna chupa mgongoni mwa ndiyo.",
          "Nusu ya kifurushi kibaya bado ni kifurushi kinachotumia kwa ndiyo za uongo.",
          "Kuficha FN kupamba namba ni dhambi mbaya zaidi ya kuripoti. Utaikutana tena Somo la 11.",
        ],
        explainEn: "Without TP, FP, FN, TN and a KES price on errors, 96% is not information. Tying sales to yeses is a conflict of interest.",
        explainSw: "Bila TP, FP, FN, TN na bei ya KES ya makosa, 96% si taarifa. Kufunga mauzo na ndiyo ni mgongano wa kimaslahi.",
      }),
      quiz(
        "Prevalence is 10%. Of 1,000 plants, TP=90, FP=135, FN=10, TN=765. Precision (PPV) is about:",
        "Kuenea ni 10%. Kati ya mimea 1,000, TP=90, FP=135, FN=10, TN=765. PPV ni takriban:",
        ["85.5%", "90%", "40%", "10%"],
        ["85.5%", "90%", "40%", "10%"],
        2,
        "PPV is TP/(TP+FP)=90/225=40%. 85.5% is accuracy, 90% is recall on the diseased plants, 10% is prevalence. Do not mix them.",
        "PPV ni TP/(TP+FP)=90/225=40%. 85.5% ni usahihi, 90% ni unyeti kwenye mimea yenye ugonjwa, 10% ni kuenea. Usichanganye."
      ),
      note(
        "Try it: price one false yes and one missed yes",
        "Jaribu: weka bei ya ndiyo moja ya uongo na ndiyo moja iliyokosekana",
        "For one crop you know, write two lines in KES (best guesses, labelled as guesses):\n\n- FP: trip to agrovet, labour, and a product you did not need — do not name a dose, just a pack price you have seen on a shelf.\n- FN: what a week of delay might cost in extra scouting time or lost plants, as a range, not a fake precise yield %.\n\nThen write which error you fear more this month, and therefore whether your rule should scout more easily (catch FN) or require a stronger count before anyone shops (limit FP). Confirm that judgement with the afisa wa ugani. Do not spray from this page.",
        "Kwa zao moja unalolijua, andika mistari miwili kwa KES (makisio bora, yaliyoandikwa kama makisio):\n\n- FP: ziara ya agrovet, vibarua, na bidhaa usiyohitaji — usitaje kipimo, bei ya pakiti uliyoona rafu tu.\n- FN: wiki ya kuchelewa ingegharimu nini kwa muda wa ziada wa ukaguzi au mimea iliyopotea, kama kipimo, si asilimia bandia ya mavuno.\n\nKisha andika kosa unalohofia zaidi mwezi huu, na kwa hiyo kama kanuni yako inapaswa kufanya ukaguzi uwe rahisi zaidi (shika FN) au kuhitaji hesabu imara kabla mtu hajenda dukani (zuia FP). Thibitisha uamuzi huo na afisa wa ugani. Usinyunyize kutoka ukurasa huu."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Accuracy hides FP and FN. Price both in KES and in risk.\n- Never tie a product pack to an app yes.\n- Units 1–5 are a complete, safe practice: predict, localise, read scores, scout, cost errors — people still decide.\n- Next: climate variability, which breaks models that assumed a stable season.",
        "- Usahihi huficha FP na FN. Weka bei ya zote kwa KES na hatari.\n- Usifunge pakiti ya bidhaa na ndiyo ya programu.\n- Masomo 1–5 ni mazoezi kamili na salama: tabiri, weka eneo, soma alama, kagua, gharimia makosa — watu bado wanaamua.\n- Ifuatayo: kubadilika kwa tabianchi, kunakovunja modeli zilizodhani msimu utulivu."
      ),
    ],
  },
  {
    id: "agr-i-u6",
    titleEn: "Climate variability breaks last year's model",
    titleSw: "Kubadilika kwa tabianchi kunavunja modeli ya mwaka jana",
    cards: [
      note(
        "A season is not a repeat of the training year",
        "Msimu si marudio ya mwaka wa mafunzo",
        "Climate variability means the timing, amount and dry spells of rain change from year to year. Kenya's long rains and short rains already differ by region. On top of that, a wet training season produces different maize leaves, different disease pressure and different NDMA bulletins than a late, weak season.\n\nA model fitted on last year's planting dates, or a price model fitted on last year's harvest glut, will look precise on paper and then fail. That is seasonal drift in everyday clothes. Satellite vegetation indices such as NDVI from Sentinel-2 (free 10 m images, about every five days) can show greening, but clouds during the long rains often block optical images — another year-shaped hole in the data.\n\nWhat to do as a practitioner: treat KMD seasonal outlooks and NDMA early warning as first-class inputs; do not let a phone app's daily 90% cancel a below-normal season (beginner Unit 7); plan staged planting and varieties with extension; and when you evaluate a tool, split results by season, not only by county. A single accuracy number that mixes a wet year and a dry year is a blended fiction.",
        "Kubadilika kwa tabianchi kunamaanisha muda, kiasi na vipindi kavu vya mvua vinabadilika mwaka hadi mwaka. Mvua ndefu na mvua fupi za Kenya tayari zinatofautiana kwa eneo. Juu ya hilo, msimu wa mafunzo wenye mvua hutoa majani tofauti ya mahindi, shinikizo tofauti la magonjwa na taarifa tofauti za NDMA kuliko msimu wa kuchelewa na dhaifu.\n\nModeli iliyolinganishwa na tarehe za kupanda za mwaka jana, au modeli ya bei iliyolinganishwa na wingi wa mavuno wa mwaka jana, itaonekana sahihi kwenye karatasi kisha ikashindwa. Huo ni mabadiliko ya msimu kwa mavazi ya kila siku. Fahirasa za mimea za satelaiti kama NDVI kutoka Sentinel-2 (picha za bure za m 10, takriban kila siku tano) zinaweza kuonyesha kijani, lakini mawingu wakati wa mvua ndefu mara nyingi huzuia picha za macho — tundu jingine lenye umbo la mwaka katika data.\n\nUnachofanya kama mtaalamu: chukulia mitazamo ya msimu ya KMD na onyo la mapema la NDMA kama ingizo la daraja la kwanza; usiache 90% ya kila siku ya programu ya simu ifute msimu wa chini ya kawaida (Somo la 7 la kuanzia); panga kupanda kwa hatua na aina na ugani; na unapopima zana, gawanya matokeo kwa msimu, si kaunti tu. Namba moja ya usahihi inayochanganya mwaka wa mvua na mwaka kavu ni hadithi iliyochanganywa."
      ),
      reveal([
        {
          termEn: "Seasonal drift",
          termSw: "Mabadiliko ya msimu",
          defEn: "Performance drops because this season's weather, pests and prices are not last season's training world.",
          defSw: "Utendaji unashuka kwa sababu hali ya hewa, wadudu na bei za msimu huu si dunia ya mafunzo ya msimu uliopita.",
        },
        {
          termEn: "NDVI",
          termSw: "NDVI",
          defEn: "A vegetation index from satellite bands that tracks greening. Clouds hide it in rainy months.",
          defSw: "Faharasa ya mimea kutoka bendi za satelaiti inayofuatilia kijani. Mawingu huyaficha miezi ya mvua.",
        },
        {
          termEn: "Season split",
          termSw: "Mgawanyo wa msimu",
          defEn: "Reporting tool results separately for long rains, short rains and dry spells instead of one average.",
          defSw: "Kuripoti matokeo ya zana kando kwa mvua ndefu, mvua fupi na vipindi kavu badala ya wastani mmoja.",
        },
      ]),
      note(
        "Worked example: a planting-date model after a late onset",
        "Mfano: modeli ya tarehe ya kupanda baada ya kuanza kuchelewa",
        "Imagine a spreadsheet model, fitted on five years of a co-op's maize records in Kisumu, that suggests planting around 15 March. The numbers are made up. This year KMD says onset may be late and NDMA still has a dry-spell warning. An SMS weather product says 80% rain on 12 March after one shower.\n\nIf the co-op treats 15 March as a rule learned by AI, members plant, a false start dries the seed, and the model is blamed. If they treat 15 March as last years' pattern, they hold seed, ask extension which variety still finishes in a short window, and they log that this year the fitted date was a poor prior.\n\nThey do not publish 'our AI improved yields'. They do not have that evidence. They publish: model date vs actual successful planting date, this season, with weather context. That is evaluation under variability, not a victory slide.",
        "Fikiria modeli ya jedwali, iliyolinganishwa na rekodi tano za mahindi za co-op Kisumu, inayopendekeza kupanda karibu tarehe 15 Machi. Namba ni za kubuni. Mwaka huu KMD inasema kuanza kunaweza kuchelewa na NDMA bado ina onyo la kipindi kavu. Bidhaa ya SMS ya hali ya hewa inasema mvua 80% tarehe 12 Machi baada ya mvua moja.\n\nCo-op ikichukulia 15 Machi kama kanuni iliyojifunzwa na AI, wanachama wanapanda, mwanzo wa uongo unakausha mbegu, na modeli inalaumiwa. Wakichukulia 15 Machi kama muundo wa miaka iliyopita, wanabakiza mbegu, waulize ugani ni aina ipi bado inakomaa katika dirisha fupi, na wanarekodi kwamba mwaka huu tarehe iliyolinganishwa ilikuwa prior dhaifu.\n\nHawachapishi AI yetu iliboresha mavuno. Hawana ushahidi huo. Wanachapisha: tarehe ya modeli dhidi ya tarehe halisi ya kupanda iliyofanikiwa, msimu huu, pamoja na muktadha wa hali ya hewa. Hiyo ni tathmini chini ya kubadilika, si slaidi ya ushindi."
      ),
      scenario({
        titleEn: "Scenario: one accuracy for two seasons",
        titleSw: "Hali: usahihi mmoja kwa misimu miwili",
        situationEn: "A vendor reports 84% disease-app accuracy for your county. You discover the test set is 90% long-rains photos and 10% short-rains. This year the short rains matter more to your members.",
        situationSw: "Muuzaji anaripoti usahihi 84% wa programu ya magonjwa kwa kaunti yako. Unagundua seti ya jaribio ni 90% picha za mvua ndefu na 10% za mvua fupi. Mwaka huu mvua fupi zinawagusa wanachama wako zaidi.",
        questionEn: "What do you ask for?",
        questionSw: "Unaomba nini?",
        optionsEn: [
          "Nothing — 84% is already county-level",
          "Accuracy and the four boxes split by season, plus a warning that this year is not the long-rains test set",
          "A single higher number that includes more long-rains photos",
          "Permission to auto-spray in the short rains because data is thin",
        ],
        optionsSw: [
          "Hakuna — 84% tayari ni ya kaunti",
          "Usahihi na visanduku vinne vilivyogawanywa kwa msimu, pamoja na onyo kwamba mwaka huu si seti ya jaribio ya mvua ndefu",
          "Namba moja kubwa zaidi inayojumlisha picha zaidi za mvua ndefu",
          "Ruhusa ya kunyunyiza otomatiki katika mvua fupi kwa sababu data ni chache",
        ],
        correctIndex: 1,
        hintsEn: [
          "County averages that hide a season are the same trick as overall 96% without a matrix.",
          "Correct. Split, warn, and do not fill a data hole with automation.",
          "More of the well-sampled season pretty the number and starve the season you care about.",
          "Thin data is a reason to scout more, not to automate chemistry.",
        ],
        hintsSw: [
          "Wastani wa kaunti unaoficha msimu ni ujanja uleule wa 96% bila matriki.",
          "Sahihi. Gawanya, onya, na usijaze tundu la data kwa otomatiki.",
          "Zaidi ya msimu ulio na sampuli nzuri hupamba namba na kunyima msimu unaojali.",
          "Data chache ni sababu ya kukagua zaidi, si kuotomatiki kemia.",
        ],
        explainEn: "Demand season splits. A county figure that is almost all one rain is not ready for the other rain.",
        explainSw: "Dai mgawanyo wa msimu. Namba ya kaunti ambayo ni karibu mvua moja tu haijawa tayari kwa mvua nyingine.",
      }),
      quiz(
        "Sentinel-2 NDVI is missing for three weeks of the long rains. The most honest move is:",
        "NDVI ya Sentinel-2 inakosekana kwa wiki tatu za mvua ndefu. Hatua ya uaminifu zaidi ni:",
        [
          "Fill the gap with last year's NDVI so the dashboard looks continuous",
          "Say the optical series is cloud-blocked, use rainfall notes and scouting, and do not invent greening",
          "Assume NDVI would have been high because it is the long rains",
          "Switch the whole advisory to auto-fertilise using the last clear image",
        ],
        [
          "Jaza pengo kwa NDVI ya mwaka jana ili dashibodi ionekane endelevu",
          "Sema mfululizo wa macho umezuiwa na mawingu, tumia kumbukumbu za mvua na ukaguzi, na usibuni kijani",
          "Chukulia NDVI ingekuwa juu kwa sababu ni mvua ndefu",
          "Geuza ushauri wote kuwa mbolea otomatiki ukitumia picha ya mwisho iliyo wazi",
        ],
        1,
        "Invented continuity is fake data. Clouds are a known limit of optical satellites in Kenya's long rains. Say so and fall back to field notes.",
        "Muendelezo wa kubuni ni data bandia. Mawingu ni kizuizi kinachojulikana cha satelaiti za macho katika mvua ndefu za Kenya. Sema hivyo na rudi kwenye kumbukumbu za shamba."
      ),
      note(
        "Try it: two-column season card",
        "Jaribu: kadi ya msimu ya safu mbili",
        "Draw last season vs this season for one crop: onset week, dry spells you remember, and one pest or disease that showed up.\n\nWrite one line: a tool trained only on last season would get this wrong because…\n\nShare with the afisa wa ugani. Do not turn the card into a spray plan.",
        "Chora msimu uliopita dhidi ya huu kwa zao moja: wiki ya kuanza, vipindi kavu unavyokumbuka, na wadudu au ugonjwa mmoja uliojitokeza.\n\nAndika mstari mmoja: zana iliyofunzwa msimu uliopita tu ingekosea hapa kwa sababu…\n\nShiriki na afisa wa ugani. Usigeuze kadi kuwa mpango wa kunyunyiza."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Split evaluation by season. Do not invent satellite gaps.\n- Daily SMS cannot cancel a KMD/NDMA seasonal warning.\n- Next: who actually does the labour a tool assumes is free.",
        "- Gawanya tathmini kwa msimu. Usibuni mapengo ya satelaiti.\n- SMS ya kila siku haiwezi kufuta onyo la msimu la KMD/NDMA.\n- Ifuatayo: nani kweli anafanya kazi zana inayodhani ni ya bure."
      ),
    ],
  },
  {
    id: "agr-i-u7",
    titleEn: "Women's labour the dashboard never sees",
    titleSw: "Kazi ya wanawake ambayo dashibodi haioni",
    cards: [
      note(
        "If the SMS lands on the husband's phone, the weeder never got the advice",
        "SMS ikitua kwenye simu ya mume, mpallia hakuwahi kupata ushauri",
        "Many Kenyan smallholder plots run on women's labour: weeding, fetching water, milking, carrying to the road, keeping records in a book the project never asked for. Many digital tools assume a farmer is one person with one smartphone, time to scout a W, and cash to act the same day.\n\nIf pest alerts go to a number registered in a man's name, and the people in the rows are his wife and a hired woman, the prediction never reached the action. If a 'labour-saving' app asks for daily leaf photos, it may add unpaid time to the person who already weeds. If a co-op trains only the chair — often a man — on the leaf app, the people who would capture local photos (Unit 2) are not in the room.\n\nFair agri-AI is not a slogan. It is whose phone, whose time, whose name on the M-Pesa till, and who can refuse a data request. Kenya's AI Strategy names inclusion; your design either matches the people in the field or it quietly taxes them. Measure time in hours, not only accuracy in percent.",
        "Vipande vingi vya wakulima wadogo Kenya vinaendeshwa kwa kazi ya wanawake: kupalilia, kuchota maji, kukama, kubeba barabarani, kuweka rekodi kwenye daftari ambalo mradi haukuwahi kuuliza. Zana nyingi za kidijitali hudhani mkulima ni mtu mmoja wenye simu janja moja, muda wa kukagua W, na pesa za kuchukua hatua siku ileile.\n\nTahadhari za wadudu zikienda kwa namba iliyosajiliwa kwa jina la mwanamume, na watu kwenye mistari ni mkewe na mwanamke aliyeajiriwa, utabiri haukuwahi kufika kitendoni. Programu ya kuokoa kazi ikionba picha za majani kila siku, inaweza kuongeza muda usiolipwa kwa mtu ambaye tayari anapalilia. Co-op ikifundisha mwenyekiti tu — mara nyingi mwanamume — kwenye programu ya majani, watu ambao wangepiga picha za eneo (Somo la 2) hawako chumbani.\n\nAI ya kilimo yenye usawa si kauli mbiu. Ni simu ya nani, muda wa nani, jina la nani kwenye till ya M-Pesa, na nani anaweza kukataa ombi la data. Mkakati wa AI wa Kenya unataja ujumuishaji; usanifu wako unafanana na watu shambani au unawatoza kimya. Pima muda kwa saa, si usahihi kwa asilimia tu."
      ),
      reveal([
        {
          termEn: "Registered user vs labourer",
          termSw: "Mtumiaji aliyesajiliwa dhidi ya mfanyakazi",
          defEn: "The name on the SIM or app is often not the person who weeds, milks or photographs the leaf.",
          defSw: "Jina kwenye SIM au programu mara nyingi si mtu anayepalilia, kukama au kupiga picha ya jani.",
        },
        {
          termEn: "Time tax",
          termSw: "Kodi ya muda",
          defEn: "Extra unpaid hours a 'digital' workflow loads onto the people already working the plot.",
          defSw: "Saa za ziada zisizolipwa ambazo mtiririko wa kidijitali unapakia kwa watu tayari wanaofanya kazi kipande.",
        },
        {
          termEn: "Inclusion",
          termSw: "Ujumuishaji",
          defEn: "Designing for the phones, languages, hours and names of the people who actually do the task.",
          defSw: "Kubuni kwa simu, lugha, saa na majina ya watu wanaofanya kazi kweli.",
        },
      ]),
      note(
        "Worked example: 15 extra minutes, 80 women",
        "Mfano: dakika 15 za ziada, wanawake 80",
        "Imagine a potato co-op in Nyandarua asks 80 members to upload a leaf photo every Monday. The chair reports high 'engagement'. You sit with six women members. Each says the photo takes about 15 minutes once walking, shade, and waiting for data are included. 80 x 15 minutes is 20 hours a week of unpaid capture, mostly from the people who also weed.\n\nThe app is Agrika-like: useful, offline-capable, Kiswahili. The workflow still failed inclusion: it treated labour as free. A fair redesign might be one trained scout per village (paid or rotating), photos from a W-walk not from every household, and SMS to the numbers that actually sit in the rows — including second SIMs, not only the registered chair.\n\nYou do not claim the app cut women's hours. You have no such measurement yet. You start measuring hours before you praise digitisation.",
        "Fikiria co-op ya viazi Nyandarua inawaomba wanachama 80 wapakie picha ya jani kila Jumatatu. Mwenyekiti anaripoti ushiriki wa juu. Unakaa na wanachama wanawake sita. Kila mmoja anasema picha inachukua takriban dakika 15 mara tu kutembea, kivuli, na kusubiri data vikiwemo. 80 x dakika 15 ni saa 20 kwa wiki za upigaji usiolipwa, hasa kutoka kwa watu ambao pia wanalilia.\n\nProgramu ni kama Agrika: yenye manufaa, inayoweza kufanya kazi bila intaneti, Kiswahili. Mtiririko bado ulishindwa ujumuishaji: ulichukulia kazi kama ya bure. Usanifu wa haki ungekuwa mkaguzi mmoja aliyefunzwa kwa kijiji (analipwa au anazunguka), picha kutoka tembezi ya W si kutoka kila kaya, na SMS kwa namba zinazokaa kweli kwenye mistari — pamoja na SIM za pili, si mwenyekiti aliyesajiliwa tu.\n\nHudai programu ilipunguza saa za wanawake. Huna kipimo kama hicho bado. Unaanza kupima saa kabla ya kusifu kidijitali."
      ),
      scenario({
        titleEn: "Scenario: training only the chairs",
        titleSw: "Hali: kufundisha wenyeviti tu",
        situationEn: "A county project will train 30 co-op chairs on a leaf app. Twenty-eight chairs are men. Weeding in those co-ops is mostly done by women. The project asks you if the training list is fine.",
        situationSw: "Mradi wa kaunti utafundisha wenyeviti 30 wa co-op kwenye programu ya majani. Wenyeviti 28 ni wanaume. Kupalilia katika co-op hizo hufanywa zaidi na wanawake. Mradi unakuuliza kama orodha ya mafunzo ni sawa.",
        questionEn: "What do you recommend?",
        questionSw: "Unapendekeza nini?",
        optionsEn: [
          "Keep the list — chairs will cascade the skill at home",
          "Add the people who weed and photograph: at least one woman per co-op with her own login, Kiswahili materials, and a time stipend if extra hours are required",
          "Train only youth with smartphones, regardless of who farms",
          "Skip training and print posters of confidence scores",
        ],
        optionsSw: [
          "Weka orodha — wenyeviti wataeneza stadi nyumbani",
          "Ongeza watu wanaopalilia na kupiga picha: angalau mwanamke mmoja kwa co-op wenye kuingia kwake, vifaa vya Kiswahili, na posho ya muda saa za ziada zikihitajika",
          "Fundisha vijana wenye simu janja tu, bila kujali nani analima",
          "Ruka mafunzo na chapisha mabango ya alama za uhakika",
        ],
        correctIndex: 1,
        hintsEn: [
          "Cascade is a hope, not a design. Phones, PINs and logins often stay with the trainee.",
          "Correct. Put the labourers in the loop, with language and time accounted for.",
          "Youth access matters, but it is not a substitute for the people in the rows.",
          "Posters of percentages without people who can scout are decoration.",
        ],
        hintsSw: [
          "Kueneza ni matumaini, si usanifu. Simu, PIN na kuingia mara nyingi vinabaki kwa aliyefunzwa.",
          "Sahihi. Weka wafanyakazi kwenye mnyororo, na lugha na muda vikihesabiwa.",
          "Ufikiaji wa vijana ni muhimu, lakini si mbadala wa watu kwenye mistari.",
          "Mabango ya asilimia bila watu wanaoweza kukagua ni mapambo.",
        ],
        explainEn: "Train the people who will capture photos and walk the W, not only the people who attend county meetings.",
        explainSw: "Fundisha watu watakaopiga picha na kutembea W, si wale wanaohudhuria mikutano ya kaunti tu.",
      }),
      quiz(
        "The fairest metric to add beside accuracy for a photo-scout app is:",
        "Kipimo chenye usawa zaidi kuongeza kando ya usahihi kwa programu ya picha-ukaguzi ni:",
        [
          "Number of chairs who liked the launch post",
          "Hours per week asked of the people who weed, split by sex, and whether they were paid",
          "How often the model used English botanical names",
          "Download count from the capital city",
        ],
        [
          "Idadi ya wenyeviti waliopenda chapisho la uzinduzi",
          "Saa kwa wiki zinazoulizwa kwa watu wanaopalilia, zikigawanywa kwa jinsia, na kama walilipwa",
          "Mara ngapi modeli ilitumia majina ya kibiolojia ya Kiingereza",
          "Idadi ya upakuaji kutoka mji mkuu",
        ],
        1,
        "Accuracy without a time tax is an incomplete score. Sex-split hours tell you who paid for the digits.",
        "Usahihi bila kodi ya muda ni alama isiyokamilika. Saa zilizogawanywa kwa jinsia zinakuambia nani alilipia tarakimu."
      ),
      note(
        "Try it: map one task to one person",
        "Jaribu: oanisha kazi moja na mtu mmoja",
        "For weeding, milking, or photographing, write: who does it this week, whose phone would get the SMS, whose M-Pesa would pay, and how many extra minutes a daily app would take.\n\nIf those four names are not the same person, your workflow needs a redesign before a pilot.",
        "Kwa kupalilia, kukama, au kupiga picha, andika: nani anafanya wiki hii, simu ya nani ingepata SMS, M-Pesa ya nani ingelipa, na dakika ngapi za ziada programu ya kila siku ingechukua.\n\nMajina hayo manne yakiwa si mtu mmoja, mtiririko wako unahitaji usanifu upya kabla ya majaribio."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Measure hours and whose phone, not only percent correct.\n- Train the people in the rows.\n- Next: the co-operative as the unit that can own data and advice together.",
        "- Pima saa na simu ya nani, si asilimia sahihi tu.\n- Fundisha watu kwenye mistari.\n- Ifuatayo: co-operative kama kitengo kinachoweza kumiliki data na ushauri pamoja."
      ),
    ],
  },
  {
    id: "agr-i-u8",
    titleEn: "Cooperatives as data and advice units",
    titleSw: "Co-operative kama vitengo vya data na ushauri",
    cards: [
      note(
        "One notebook is a start; a co-op sheet can become a dataset",
        "Daftari moja ni mwanzo; karatasi ya co-op inaweza kuwa seti ya data",
        "A co-operative can do what one smallholder cannot: agree columns, collect the same records, store them, and bargain as a group. That dataset — milk deliveries, potato crates, maize bags with units — is how you later train or check a tool. It is also how you protect members: the co-op, not a random app, can be the place data lives.\n\nBuilding it is unglamorous. Same bag size, same date format, consent before names go on a shared sheet, a lock on the laptop, and a rule that a vendor does not walk out with the file. Data Protection Act duties apply when records identify members. Minimisation: a disease photo library may not need national IDs.\n\nAdvice then runs through the co-op: FarmerAI-style SMS can go to members who opted in; Agrika-style photo days can use one scout kit; the afisa wa ugani meets a committee instead of 400 separate rumours. The co-op still must not automate spraying or set prices from a bot. It can refuse a vendor who wants the whole member list 'to personalise'.",
        "Co-operative inaweza kufanya kile mkulima mmoja mdogo hawezi: kukubaliana safu, kukusanya rekodi zile zile, kuzihifadhi, na kubarghini kama kundi. Seti hiyo ya data — uwasilishaji wa maziwa, kreti za viazi, magunia ya mahindi yenye vipimo — ndivyo baadaye unavyofunza au kukagua zana. Ndivyo pia unavyowalinda wanachama: co-op, si programu ovyo, inaweza kuwa mahali data inapoishi.\n\nKuijenga si ya kuvutia. Ukubwa uleule wa gunia, muundo uleule wa tarehe, ridhaa kabla majina hayajaingia karatasi ya pamoja, kufuli kwenye kompyuta ndogo, na kanuni kwamba muuzaji hatoki na faili. Wajibu wa Sheria ya Ulinzi wa Data unatumika rekodi zinapowatambulisha wanachama. Kupunguza data: maktaba ya picha za magonjwa huenda isihitaji vitambulisho vya taifa.\n\nUshauri kisha unaenda kupitia co-op: SMS ya aina ya FarmerAI inaweza kwenda kwa waliochagua; siku za picha za aina ya Agrika zinaweza kutumia seti moja ya mkaguzi; afisa wa ugani anakutana na kamati badala ya uvumi 400 tofauti. Co-op bado hapaswi kunyunyiza otomatiki wala kuweka bei kutoka roboti. Inaweza kumkataa muuzaji anayetaka orodha yote ya wanachama ili kubinafsisha."
      ),
      reveal([
        {
          termEn: "Shared schema",
          termSw: "Mpangilio wa pamoja",
          defEn: "Agreed columns and units so one member's 90 kg bag is not another's 50 kg bag.",
          defSw: "Safu na vipimo vilivyokubaliwa ili gunia la kg 90 la mwanachama mmoja lisiwe la kg 50 la mwingine.",
        },
        {
          termEn: "Lawful basis",
          termSw: "Msingi wa kisheria",
          defEn: "A clear, allowed reason under the Data Protection Act to hold member records — not 'the vendor asked'.",
          defSw: "Sababu wazi inayoruhusiwa chini ya Sheria ya Ulinzi wa Data kushika rekodi za wanachama — si muuzaji aliomba.",
        },
        {
          termEn: "Data steward",
          termSw: "Mlezi wa data",
          defEn: "A named co-op role who keeps the file, logs who copies it, and answers members' access requests.",
          defSw: "Wajibu ulio tajiwa wa co-op anayeshika faili, kurekodi nani anakinakili, na kujibu maombi ya wanachama ya kufikia.",
        },
      ]),
      note(
        "Worked example: 240 dairy members, one sheet",
        "Mfano: wanachama 240 wa maziwa, karatasi moja",
        "Imagine a fictional dairy co-op in Nyandarua with 240 members. Morning litres are already written at the cooler. You add four columns: date, member code (not ID number), litres, and mastitis flag from the receiver (yes/no, human-observed). After three months you have a dataset that could later support a simple alert: members whose litres dropped sharply.\n\nA vendor wants names, GPS of homesteads and M-Pesa numbers to 'improve the model'. You refuse those fields. The steward keeps codes. Alerts go to the extension desk and the member, not to a public dashboard. Nobody auto-doses cows. The value of the co-op dataset was consistency and consent, not extra surveillance.",
        "Fikiria co-op ya kubuni ya maziwa Nyandarua yenye wanachama 240. Lita za asubuhi tayari zinaandikwa kwenye kipoezaji. Unaongeza safu nne: tarehe, msimbo wa mwanachama (si namba ya kitambulisho), lita, na ishara ya mastitis kutoka mpokeaji (ndiyo/hapana, iliyoonekana na binadamu). Baada ya miezi mitatu una seti ya data ambayo baadaye ingeweza kusaidia tahadhari rahisi: wanachama ambao lita zao zilishuka kwa kasi.\n\nMuuzaji anataka majina, GPS za nyumbani na namba za M-Pesa ili kuboresha modeli. Unakataa sehemu hizo. Mlezi anashika misimbo. Tahadhari zinaenda dawati la ugani na mwanachama, si dashibodi ya umma. Hakuna anayetoa dawa otomatiki kwa ng'ombe. Thamani ya seti ya co-op ilikuwa uthabiti na ridhaa, si upelelezi wa ziada."
      ),
      scenario({
        titleEn: "Scenario: the spreadsheet on a vendor's USB",
        titleSw: "Hali: jedwali kwenye USB ya muuzaji",
        situationEn: "After a demo, you notice the sales person copied the member delivery sheet onto a USB 'to show the engineers'. Nobody minuted consent for that copy.",
        situationSw: "Baada ya onyesho, unaona muuzaji alinakili karatasi ya uwasilishaji wa wanachama kwenye USB ili kuwaonyesha wahandisi. Hakuna aliyerekodi ridhaa ya nakala hiyo.",
        questionEn: "What is the steward's job right now?",
        questionSw: "Kazi ya mlezi sasa hivi ni nini?",
        optionsEn: [
          "Let it go — engineers need real data",
          "Demand deletion of the copy, log the incident, and stop sharing identifiable sheets pending a written agreement",
          "Publish the sheet to all members as transparency",
          "Offer the national ID column as well, to be helpful",
        ],
        optionsSw: [
          "Wacha tu — wahandisi wanahitaji data halisi",
          "Dai kufutwa kwa nakala, rekodi tukio, na acha kushiriki karatasi zinazotambulisha hadi kuna makubaliano yaliyoandikwa",
          "Chapisha karatasi kwa wanachama wote kama uwazi",
          "Toa pia safu ya kitambulisho cha taifa, ili kusaidia",
        ],
        correctIndex: 1,
        hintsEn: [
          "Engineers can work on de-identified samples under a contract. A silent USB is not that.",
          "Correct. Contain, log, contract. This is DPA practice, not hostility to tools.",
          "Broadcasting deliveries can shame members and leak buyer patterns.",
          "More identifiers make a breach worse.",
        ],
        hintsSw: [
          "Wahandisi wanaweza kufanya kazi kwenye sampuli zisizotambulisha chini ya mkataba. USB ya kimya si hiyo.",
          "Sahihi. Zuia, rekodi, mkataba. Hii ni mazoezi ya DPA, si uadui kwa zana.",
          "Kutangaza uwasilishaji kunaweza kuwaibisha wanachama na kuvuja mifumo ya wanunuzi.",
          "Vitambulisho zaidi vinafanya uvunjaji kuwa mbaya zaidi.",
        ],
        explainEn: "Co-op data leaves the room only with a written purpose, minimisation and a named steward log.",
        explainSw: "Data ya co-op inaondoka chumbani tu kwa lengo lililoandikwa, kupunguza, na kumbukumbu ya mlezi aliye tajiwa.",
      }),
      quiz(
        "Which column set best respects minimisation for a co-op leaf library?",
        "Seti ipi ya safu inaheshimu zaidi kupunguza data kwa maktaba ya majani ya co-op?",
        [
          "Name, ID photo, GPS of homestead, leaf photo",
          "Member code, ward, crop, date, leaf photo, officer-confirmed label",
          "M-Pesa PIN so only real farmers upload",
          "Every field the vendor's form listed, just in case",
        ],
        [
          "Jina, picha ya kitambulisho, GPS ya nyumbani, picha ya jani",
          "Msimbo wa mwanachama, wadi, zao, tarehe, picha ya jani, lebo iliyothibitishwa na afisa",
          "PIN ya M-Pesa ili wakulima halisi tu wapakie",
          "Kila sehemu fomu ya muuzaji iliyoorodhesha, kwa tahadhari",
        ],
        1,
        "A leaf library needs a picture, a place at ward grain, a crop and a label. IDs, pins and PINs do not improve a classifier.",
        "Maktaba ya majani inahitaji picha, mahali kwa kiwango cha wadi, zao na lebo. Vitambulisho, alama na PIN haziboreshi ainishaji."
      ),
      note(
        "Try it: draft a one-page data rule",
        "Jaribu: andaa kanuni ya data ya ukurasa mmoja",
        "For a co-op or school garden club, write: what is collected, why, who holds it, how long, who it is not given to (unknown apps, USB after demos), and how a member sees their row.\n\nRead it aloud to one other person. If they cannot repeat the 'not given to' line, shorten it.",
        "Kwa co-op au klabu ya bustani ya shule, andika: nini kinakusanywa, kwa nini, nani anakishika, muda gani, nani hakipewi (programu zisizojulikana, USB baada ya maonyesho), na jinsi mwanachama anavyoona mstari wake.\n\nIsome kwa sauti kwa mtu mwingine. Akiweza kurudia mstari wa hakipewi, fupisha."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Co-ops can own consistent, consented datasets.\n- Stewards, schemas and no silent USBs.\n- Next: the channels that actually reach members — SMS, USSD, WhatsApp, voice.",
        "- Co-op zinaweza kumiliki seti thabiti zenye ridhaa.\n- Walezi, mipangilio na hakuna USB za kimya.\n- Ifuatayo: njia zinazowafikia wanachama kweli — SMS, USSD, WhatsApp, sauti."
      ),
    ],
  },
  {
    id: "agr-i-u9",
    titleEn: "Advice that reaches the farm: SMS, USSD, voice",
    titleSw: "Ushauri unaofika shambani: SMS, USSD, sauti",
    cards: [
      note(
        "The model is useless if the message never arrives in a language people use",
        "Modeli haifai ujumbe usipofika kwa lugha watu wanayotumia",
        "Kenyan farmers already live on SMS, USSD, missed calls and WhatsApp. FarmerAI was announced by Safaricom and Opportunity International to ride DigiFarm, SMS and WhatsApp — channels people have, not a new app store account. Agrika's Kiswahili voice and offline photos aim at the same constraint: bundles are expensive, 2G drops, and English menus exclude.\n\nDesign for the basic phone first. A 160-character SMS cannot hold a spray recipe — and should not. It can hold: ward, crop, 'check plants this week', and a number for the afisa wa ugani. USSD can collect a planting date without a smartphone. Voice can read a KALRO leaflet in Kiswahili. WhatsApp can carry a photo to a co-op scout.\n\nGrounding matters on these channels too. If a chatbot drafts the SMS, the facts must come from an extension manual, a KMD bulletin or a PCPB-aligned product list — not from fluent guessing. Out-of-scope questions (what do I spray, how many ml) must refuse and point to a person. A pretty Kiswahili sentence that invents a product is worse than a clumsy English sentence that says ask the officer.",
        "Wakulima wa Kenya tayari wanaishi kwa SMS, USSD, simu zilizokosa na WhatsApp. FarmerAI ilitangazwa na Safaricom na Opportunity International kutumia DigiFarm, SMS na WhatsApp — njia watu walizo nazo, si akaunti mpya ya duka la programu. Sauti ya Kiswahili ya Agrika na picha bila intaneti zinalenga kizuizi kileile: fujo ni ghali, 2G inakatika, na menyu za Kiingereza zinawatenga.\n\nBuni kwa simu ya kawaida kwanza. SMS ya herufi 160 haiwezi kushika mapishi ya kunyunyiza — na hapaswi. Inaweza kushika: wadi, zao, kagua mimea wiki hii, na namba ya afisa wa ugani. USSD inaweza kukusanya tarehe ya kupanda bila simu janja. Sauti inaweza kusoma kijitabu cha KALRO kwa Kiswahili. WhatsApp inaweza kubeba picha kwa mkaguzi wa co-op.\n\nKuweka msingi ni muhimu kwenye njia hizi pia. Chatbot ikiandaa SMS, ukweli lazima utoke kwenye mwongozo wa ugani, taarifa ya KMD au orodha ya bidhaa inayolingana na PCPB — si kukisia kwa ufasaha. Maswali nje ya wigo (ninyunyize nini, mililita ngapi) lazima yakatae na kuelekeza kwa mtu. Sentensi nzuri ya Kiswahili inayobuni bidhaa ni mbaya kuliko sentensi ngumu ya Kiingereza inayosema muulize afisa."
      ),
      reveal([
        {
          termEn: "Grounding",
          termSw: "Kuweka msingi (grounding)",
          defEn: "Making the model answer from named documents (manuals, bulletins, labels) instead of free invention.",
          defSw: "Kufanya modeli ijibu kutoka nyaraka zilizotajwa (miongozo, taarifa, lebo) badala ya kubuni huria.",
        },
        {
          termEn: "USSD",
          termSw: "USSD",
          defEn: "Star-code menus on basic phones that can collect simple facts without internet.",
          defSw: "Menyu za msimbo wa nyota kwenye simu za kawaida zinazoweza kukusanya taarifa rahisi bila intaneti.",
        },
        {
          termEn: "Refusal",
          termSw: "Kukataa",
          defEn: "The required answer when asked for a dose, a diagnosis, or a guaranteed price: I cannot; ask this person.",
          defSw: "Jibu linalohitajika unapoulizwa kipimo, utambuzi, au bei ya dhamana: siwezi; muulize mtu huyu.",
        },
      ]),
      note(
        "Worked example: 140 characters that do not spray",
        "Mfano: herufi 140 zisizonyunyiza",
        "A co-op wants a weekly WhatsApp blast during fall armyworm season. A chatbot drafts: Spray product X at 20 ml per 20 litres this week, 72% risk in your ward. That draft is unusable.\n\nYou ground it in three facts you actually have: KALRO/extension are reminding maize farmers to scout; your scout log shows 3 of 20 in two sampled plots; the officer's number is 07xx. The SMS becomes: Maize, ward X: scout 20 plants this week (holes, frass in whorl). Our sample 3/20. Call afisa wa ugani 07xx before any product. Do not spray from this message.\n\nKiswahili version goes out too. Members on USSD get a shorter code that only records 'I have scouts / I need a visit'. Nobody receives a millilitre. FarmerAI-style channels can carry this if the content is yours and grounded. The channel is not the authority.",
        "Co-op inataka blast ya kila wiki ya WhatsApp wakati wa msimu wa viwavijeshi vamizi. Chatbot inaandaa: Nyunyiza bidhaa X kwa mililita 20 kwa lita 20 wiki hii, hatari 72% wadi yako. Rasimu hiyo haitumiki.\n\nUnaweka msingi katika ukweli tatu ulio nao: KALRO/ugani wanawakumbusha wakulima wa mahindi kukagua; kumbukumbu yako ya ukaguzi inaonyesha 3 kati ya 20 katika vipande viwili; namba ya afisa ni 07xx. SMS inakuwa: Mahindi, wadi X: kagua mimea 20 wiki hii (matundu, kinyesi kwenye kipepeo). Sampuli yetu 3/20. Piga afisa wa ugani 07xx kabla ya bidhaa yoyote. Usinyunyize kutoka ujumbe huu.\n\nToleo la Kiswahili linatoka pia. Wanachama wa USSD wanapata msimbo mfupi unaorekodi nimekagua / nahitaji ziara tu. Hakuna anayepokea mililita. Njia za aina ya FarmerAI zinaweza kubeba hivi maudhui yakiwa yako na yenye msingi. Njia si mamlaka."
      ),
      scenario({
        titleEn: "Scenario: the voice agent that likes to be helpful",
        titleSw: "Hali: wakala wa sauti anayependa kusaidia",
        situationEn: "A Kiswahili voice agent, meant to search agrovet stock of PCPB-registered products, is asked Ninyunyize nini? and starts reading a dose. You are the product owner.",
        situationSw: "Wakala wa sauti wa Kiswahili, uliokusudiwa kutafuta stock ya agrovet ya bidhaa zilizosajiliwa na PCPB, unaulizwa Ninyunyize nini? na unaanza kusoma kipimo. Wewe ni mmiliki wa bidhaa.",
        questionEn: "What must the agent do?",
        questionSw: "Wakala lazima afanye nini?",
        optionsEn: [
          "Finish the dose — helpfulness is inclusion",
          "Stop, refuse the dose, and route to agrovet plus PCPB label plus afisa wa ugani",
          "Read the dose only in Kiswahili, not English, to keep it local",
          "Ask for the farm GPS first, then read the dose",
        ],
        optionsSw: [
          "Maliza kipimo — kusaidia ni ujumuishaji",
          "Simama, kataa kipimo, na elekeza kwa agrovet pamoja na lebo ya PCPB pamoja na afisa wa ugani",
          "Soma kipimo kwa Kiswahili tu, si Kiingereza, ili kiwe cha eneo",
          "Omba GPS ya shamba kwanza, kisha soma kipimo",
        ],
        correctIndex: 1,
        hintsEn: [
          "Helpfulness that recites millilitres is harm with good manners. Inclusion does not mean a voice that sprays.",
          "Correct. Stock search and label pointers are in scope. Doses are not.",
          "Language does not make a dose legal. PCPB labels do.",
          "GPS plus a dose is more data and the same unsafe answer.",
        ],
        hintsSw: [
          "Usaidizi unaosomea mililita ni madhara yenye adabu. Ujumuishaji haimaanishi sauti inayonyunyiza.",
          "Sahihi. Utafutaji wa stock na vidokezo vya lebo viko ndani ya wigo. Vipimo haviko.",
          "Lugha haifanyi kipimo kuwa halali. Lebo za PCPB ndizo.",
          "GPS pamoja na kipimo ni data zaidi na jibu lileile lisilo salama.",
        ],
        explainEn: "Voice and Kiswahili are access. They do not expand the tool's right to prescribe.",
        explainSw: "Sauti na Kiswahili ni ufikiaji. Havidhinishi zana kuagiza dawa.",
      }),
      pb({
        titleEn: "Build a grounded SMS prompt",
        titleSw: "Jenga maagizo ya SMS yenye msingi",
        introEn: "You will ask a language model to draft a 2-language SMS. It must use only facts you supply and must refuse spraying.",
        introSw: "Utaomba modeli ya lugha iandae SMS ya lugha mbili. Lazima itumie ukweli ulioutoa tu na ikatae kunyunyiza.",
        goalEn: "Supply facts, demand Kiswahili plus English, ban doses, and name the officer.",
        goalSw: "Toa ukweli, taka Kiswahili pamoja na Kiingereza, kataza vipimo, na taja afisa.",
        blocksEn: [
          "Facts only: maize, Bungoma ward, scout reminder, sample 3 of 20 plants with holes this week, officer number 07xx",
          "Write one SMS in English and one in Kiswahili, each under 160 characters",
          "Rule: use only the facts above; if something is missing write not provided",
          "Ban: product names, millilitres, mixing recipes, guaranteed yields, guaranteed rain",
          "End: do not spray from this message; confirm with afisa wa ugani",
        ],
        blocksSw: [
          "Ukweli tu: mahindi, wadi ya Bungoma, kikumbusho cha ukaguzi, sampuli 3 kati ya 20 zenye matundu wiki hii, namba ya afisa 07xx",
          "Andika SMS moja kwa Kiingereza na moja kwa Kiswahili, kila moja chini ya herufi 160",
          "Kanuni: tumia ukweli ulio hapo juu tu; kitu kikikosekana andika hakijatolewa",
          "Kataza: majina ya bidhaa, mililita, mapishi ya kuchanganya, mavuno ya dhamana, mvua ya dhamana",
          "Maliza: usinyunyize kutoka ujumbe huu; thibitisha na afisa wa ugani",
        ],
        required: [0, 2, 3, 4],
        sampleEn: "Facts only: maize, Bungoma ward, scout reminder, sample 3 of 20 plants with holes this week, officer number 07xx. Write one SMS in English and one in Kiswahili, each under 160 characters. Rule: use only the facts above; if something is missing write not provided. Ban: product names, millilitres, mixing recipes, guaranteed yields, guaranteed rain. End: do not spray from this message; confirm with afisa wa ugani.",
        sampleSw: "Ukweli tu: mahindi, wadi ya Bungoma, kikumbusho cha ukaguzi, sampuli 3 kati ya 20 zenye matundu wiki hii, namba ya afisa 07xx. Andika SMS moja kwa Kiingereza na moja kwa Kiswahili, kila moja chini ya herufi 160. Kanuni: tumia ukweli ulio hapo juu tu; kitu kikikosekana andika hakijatolewa. Kataza: majina ya bidhaa, mililita, mapishi, mavuno ya dhamana, mvua ya dhamana. Maliza: usinyunyize kutoka ujumbe huu; thibitisha na afisa wa ugani.",
      }),
      note(
        "Carry forward",
        "Beba mbele",
        "- Channels farmers have beat apps they cannot install.\n- Ground and refuse; never SMS a dose.\n- Next: honest reporting of pilots — no invented yield percentages.",
        "- Njia wakulima walizo nazo zinashinda programu wasioweza kusakinisha.\n- Weka msingi na kataa; usitume kipimo kwa SMS kamwe.\n- Ifuatayo: kuripoti majaribio kwa uaminifu — hakuna asilimia za mavuno za kubuni."
      ),
    ],
  },
  {
    id: "agr-i-u10",
    titleEn: "Honest reporting of pilots",
    titleSw: "Kuripoti majaribio kwa uaminifu",
    cards: [
      note(
        "A pilot is a test. It is not a harvest miracle",
        "Majaribio ni jaribio. Si muujiza wa mavuno",
        "FarmerAI's early work was announced as a potato-cycle pilot aiming at hundreds of smallholders, not as a nationwide yield law. That is the right scale of claim: who joined, which channel, which crop, which weeks. Agri-AI in Kenya is full of launch photos and empty of comparison groups.\n\nHonest reporting needs a baseline (what members did and harvested before, with units), a comparison (similar farms without the tool, or last season with weather named), and the numbers you did not like (drop-offs, false positives, wards where it failed). It does not need a made-up '30% yield increase' to look modern. This course forbids inventing those percentages as proven results — including in your own slide.\n\nIf rain was better this year, you may not credit the app. If only smartphone chairs joined, you may not generalise to women who weed (Unit 7). If you measured scouting time and messages sent, say that. Process metrics are real. Miracle yields without a denominator are not.",
        "Kazi ya awali ya FarmerAI ilitangazwa kama majaribio ya mzunguko wa viazi yaliyolenga mamia ya wakulima wadogo, si sheria ya mavuno ya nchi nzima. Huo ndio ukubwa sahihi wa dai: nani alijiunga, njia ipi, zao lipi, wiki zipi. AI ya kilimo Kenya imejaa picha za uzinduzi na tupu ya makundi ya kulinganisha.\n\nKuripoti kwa uaminifu kunahitaji msingi (wanachama walifanya na kuvuna nini kabla, pamoja na vipimo), kulinganisha (mashamba sawa bila zana, au msimu uliopita hali ya hewa ikiwa imetajwa), na namba usizozipenda (walioacha, chanya za uongo, wadi zilishindwa). Hakuhitaji asilimia 30 ya kubuni ya ongezeko la mavuno ili ionekane ya kisasa. Kozi hii inakataza kubuni asilimia hizo kama matokeo yaliyothibitishwa — hata kwenye slaidi yako.\n\nMvua ikiwa bora mwaka huu, huwezi kupa programu sifa. Wenyeviti wenye simu janja tu wakijiunga, huwezi kuhalalisha kwa wanawake wanaopalilia (Somo la 7). Ukipima muda wa ukaguzi na jumbe zilizotumwa, sema hivyo. Vipimo vya mchakato ni halisi. Mavuno ya muujiza bila kihesabu si."
      ),
      reveal([
        {
          termEn: "Baseline",
          termSw: "Msingi (baseline)",
          defEn: "The measured situation before the tool: yields with units, scouting habits, costs in KES.",
          defSw: "Hali iliyopimwa kabla ya zana: mavuno yenye vipimo, tabia za ukaguzi, gharama kwa KES.",
        },
        {
          termEn: "Comparison group",
          termSw: "Kundi la kulinganisha",
          defEn: "Similar farms or a prior season, named, so you can see what might have happened anyway.",
          defSw: "Mashamba sawa au msimu uliopita, yaliyotajwa, ili uone nini kingetokea hata hivyo.",
        },
        {
          termEn: "Process metric",
          termSw: "Kipimo cha mchakato",
          defEn: "Something the tool actually changed that you counted: messages delivered, photos labelled, visits made.",
          defSw: "Kitu zana ilichobadilisha kweli ulichohesabu: jumbe zilizofika, picha zenye lebo, ziara zilizofanywa.",
        },
      ]),
      note(
        "Worked example: two ways to write the same potato pilot",
        "Mfano: njia mbili za kuandika majaribio yale yale ya viazi",
        "Imagine 400 potato farmers in Nyandarua got SMS for one cycle. 280 read at least one message. 90 sent a photo to a scout. Officers confirmed blight in 12 of 40 visited plots. Harvest was 8% higher than last year in the county average — weather was also wetter. The figures are made up.\n\nDishonest slide: Our AI increased potato yields 8% for 400 farmers.\n\nHonest page: Channel SMS; invited 400; 280 reached; 90 photos; 12 of 40 visits confirmed blight; county harvest up about 8% vs last year, rain also higher, so we do not attribute yield to the tool. What we know: more scouting conversations happened. What we do not know: yield effect.\n\nThe second page can still justify continuing — if the goal was scouting, not a miracle. FarmerAI's public description as a pilot is closer to page two than to page one. Copy that humility.",
        "Fikiria wakulima 400 wa viazi Nyandarua walipata SMS kwa mzunguko mmoja. 280 walisoma angalau ujumbe mmoja. 90 walituma picha kwa mkaguzi. Maafisa walithibitisha blight katika 12 kati ya vipande 40 vilivyotembelewa. Mavuno yalikuwa 8% juu kuliko mwaka jana kwa wastani wa kaunti — hali ya hewa pia ilikuwa na mvua zaidi. Namba ni za kubuni.\n\nSlaidi isiyo ya uaminifu: AI yetu iliongeza mavuno ya viazi 8% kwa wakulima 400.\n\nUkurasa wa uaminifu: Njia SMS; walialikwa 400; 280 walifikiwa; picha 90; 12 kati ya ziara 40 zilithibitisha blight; mavuno ya kaunti juu takriban 8% dhidi ya mwaka jana, mvua pia juu, kwa hiyo hatutoi sifa ya mavuno kwa zana. Tunachojua: mazungumzo zaidi ya ukaguzi yalitokea. Tusichojua: athari ya mavuno.\n\nUkurasa wa pili bado unaweza kuhalalisha kuendelea — lengo likiwa ukaguzi, si muujiza. Maelezo ya umma ya FarmerAI kama majaribio yako karibu na ukurasa wa pili kuliko wa kwanza. Nakili unyenyekevu huo."
      ),
      scenario({
        titleEn: "Scenario: the governor wants a percentage",
        titleSw: "Hali: gavana anataka asilimia",
        situationEn: "County communications ask you to supply a single yield-improvement percent for a press release on your leaf-app pilot. You have process metrics only.",
        situationSw: "Mawasiliano ya kaunti yanakuomba utoe asilimia moja ya kuboresha mavuno kwa taarifa kwa vyombo vya habari kuhusu majaribio yako ya programu ya majani. Una vipimo vya mchakato tu.",
        questionEn: "What do you send?",
        questionSw: "Unatuma nini?",
        optionsEn: [
          "25%, because other countries' apps quote numbers like that",
          "A short statement of who joined, what was counted, what is unknown, and an explicit refusal to invent a yield percent",
          "The accuracy of the model (88%) labelled as a yield increase",
          "No comment, so they will invent the number without you",
        ],
        optionsSw: [
          "25%, kwa sababu programu za nchi nyingine zinanukuu namba kama hizo",
          "Tamko fupi la nani alijiunga, nini kilihesabiwa, nini haijulikani, na kukataa wazi kubuni asilimia ya mavuno",
          "Usahihi wa modeli (88%) uliowekwa lebo kama ongezeko la mavuno",
          "Hakuna maoni, ili wabuni namba bila wewe",
        ],
        correctIndex: 1,
        hintsEn: [
          "Copying a foreign marketing percent is fabricating evidence. This course bans that.",
          "Correct. Honest process plus unknown yield is still news. Invented yield is a lie.",
          "88% accuracy is not yield. Relabelling it is the same sin as 25%.",
          "Silence lets a worse number run. Send the refusal in writing.",
        ],
        hintsSw: [
          "Kununua asilimia ya masoko ya nje ni kubuni ushahidi. Kozi hii inakataza hilo.",
          "Sahihi. Mchakato wa uaminifu pamoja na mavuno yasiyojulikana bado ni habari. Mavuno ya kubuni ni uongo.",
          "Usahihi 88% si mavuno. Kuweka lebo upya ni dhambi ileile ya 25%.",
          "Kimya kinaacha namba mbaya zaidi iende. Tuma kukataa kwa maandishi.",
        ],
        explainEn: "Press officers can live with 'we do not yet know yield'. They cannot ethically live with a number you minted.",
        explainSw: "Maafisa wa habari wanaweza kuishi na bado hatujui mavuno. Hawawezi kiadili kuishi na namba uliyoumba.",
      }),
      quiz(
        "Which report is honest for a DigiFarm-style SMS pilot?",
        "Ripoti ipi ni ya uaminifu kwa majaribio ya SMS ya aina ya DigiFarm?",
        [
          "Yields rose 40% because of AI",
          "320 of 500 numbers received the message; 40 requested an extension visit; yield effect not measured",
          "The model is 99% accurate, therefore farms prospered",
          "All members loved it, so measurement is unnecessary",
        ],
        [
          "Mavuno yalipanda 40% kwa sababu ya AI",
          "Namba 320 kati ya 500 zilipokea ujumbe; 40 ziliomba ziara ya ugani; athari ya mavuno haikupimwa",
          "Modeli ni sahihi 99%, kwa hiyo mashamba yalistawi",
          "Wanachama wote walipenda, kwa hiyo kipimo si lazima",
        ],
        1,
        "Counts of delivery and visits are process metrics you can defend. Yield % without measurement, accuracy-as-prosperity, and love-as-evidence are not.",
        "Hesabu za uwasilishaji na ziara ni vipimo vya mchakato unavyoweza kutetea. Asilimia ya mavuno bila kipimo, usahihi-kama-ustawi, na upendo-kama-ushahidi si."
      ),
      note(
        "Try it: write the 'we do not know' paragraph",
        "Jaribu: andika aya ya hatujui",
        "For a real or imagined pilot, write five lines: who was invited, who was reached, what you counted, what rain or prices also did, and one sentence starting We do not yet know…\n\nKeep it. That paragraph is the core of Unit 12's brief.",
        "Kwa majaribio halisi au ya kubuni, andika mistari mitano: nani alialikwa, nani alifikiwa, nini ulihesabu, mvua au bei zilifanya nini pia, na sentensi moja inayoanza Bado hatujui…\n\nIhifadhi. Aya hiyo ndiyo kiini cha muhtasari wa Somo la 12."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- Pilots report process and unknowns. They do not mint yield percents.\n- Weather and who joined confound harvest stories.\n- Next: specify an advisory service for a co-op using the whole track.",
        "- Majaribio yanaripoti mchakato na visivyojulikana. Hayatengenezi asilimia za mavuno.\n- Hali ya hewa na nani alijiunga vinachanganya hadithi za mavuno.\n- Ifuatayo: bainisha huduma ya ushauri kwa co-op ukitumia kozi yote."
      ),
    ],
  },
  {
    id: "agr-i-u11",
    titleEn: "When the comparison group is missing",
    titleSw: "Kundi la kulinganisha linapokosekana",
    cards: [
      note(
        "Before you specify a service, know what evidence you still lack",
        "Kabla ya kubainisha huduma, jua ushahidi ambao bado unakosa",
        "Unit 10 asked for honesty after a pilot. This unit is the design habit before you spend: name the comparison you will need, or admit you are running a demonstration, not an impact study.\n\nA demonstration can still be worth it: 90 members learned to scout, photos were labelled, the officer's visits were better prepared. Call it skills and process. An impact claim (this SMS changed harvest) needs a comparison group or another serious counterfactual. Without one, you may only specify a service that notices and queues humans — which is enough, and is what Units 1–5 already justified.\n\nWrite the evaluation plan on the same page as the features. If you cannot afford a comparison, you cannot afford a yield claim. You can still afford an advisory that refuses doses, logs disagreements, and reports season splits.",
        "Somo la 10 liliomba uaminifu baada ya majaribio. Somo hili ni tabia ya usanifu kabla hujatumia pesa: taja kulinganisha utakakohitaji, au kubali unaendesha onyesho, si utafiti wa athari.\n\nOnyesho bado linaweza kustahili: wanachama 90 walijifunza kukagua, picha ziliwekwa lebo, ziara za afisa ziliandaliwa vizuri. Liite stadi na mchakato. Dai la athari (SMS hii ilibadilisha mavuno) linahitaji kundi la kulinganisha au counterfactual nyingine nzito. Bila hiyo, unaweza kubainisha tu huduma inayoona na kuweka watu kwenye foleni — ambayo inatosha, na ndiyo Masomo 1–5 yaliyohalalisha.\n\nAndika mpango wa tathmini kwenye ukurasa uleule na vipengele. Huwezi kumudu kulinganisha, huwezi kumudu dai la mavuno. Bado unaweza kumudu ushauri unaokataa vipimo, kurekodi kutokubaliana, na kuripoti mgawanyo wa msimu."
      ),
      reveal([
        {
          termEn: "Demonstration",
          termSw: "Onyesho",
          defEn: "A run that shows the workflow works. It cannot prove harvest impact.",
          defSw: "Majaribio yanayoonyesha mtiririko unafanya kazi. Hayawezi kuthibitisha athari ya mavuno.",
        },
        {
          termEn: "Counterfactual",
          termSw: "Kile kingetokea",
          defEn: "What would likely have happened without the tool, estimated via comparison farms or a well-described prior season.",
          defSw: "Kile kingetokea bila zana, kinachokadiriwa kupitia mashamba ya kulinganisha au msimu uliopita ulioelezwa vizuri.",
        },
        {
          termEn: "Pre-registered metric",
          termSw: "Kipimo kilichosajiliwa mapema",
          defEn: "The success number you wrote down before launch, so you cannot hunt for a pretty one afterwards.",
          defSw: "Namba ya mafanikio uliyoandika kabla ya uzinduzi, ili usije ukatafuta nzuri baadaye.",
        },
      ]),
      note(
        "Worked example: pre-register scouting, not yield",
        "Mfano: sajili ukaguzi mapema, si mavuno",
        "A tea factory in Kericho wants 'AI weather' for fertiliser timing. You pre-register: we will count how many blocks delay top-dressing until soil is moist, compared with last year, and we will publish rain notes. We will not pre-register a yield percent. After the season, rain was heavy and yield was up everywhere, including blocks that ignored the SMS. You still report the delay count. You do not slide into yield credit. The specification held.",
        "Kiwanda cha chai Kericho kinataka hali ya hewa ya AI kwa muda wa mbolea. Unasajili mapema: tutahesabu vizuizi vingapi vinachelewesha mbolea ya kukuzia hadi udongo una unyevu, tukilinganisha na mwaka jana, na tutachapisha kumbukumbu za mvua. Hatusajili asilimia ya mavuno. Baada ya msimu, mvua ilikuwa nyingi na mavuno yalipanda kila mahali, pamoja na vizuizi vilivyopuuza SMS. Bado unaripoti hesabu ya kuchelewesha. Huingii sifa ya mavuno. Maelezo yalishika."
      ),
      scenario({
        titleEn: "Scenario: success was not defined",
        titleSw: "Hali: mafanikio hayakufafanuliwa",
        situationEn: "Six months into a leaf-app project nobody wrote down what success was. The vendor now says success is 10,000 downloads. Extension says success is fewer wasted bottles. Members say success is not being spammed.",
        situationSw: "Miezi sita katika mradi wa programu ya majani hakuna aliyeandika mafanikio ni nini. Muuzaji sasa anasema mafanikio ni upakuaji 10,000. Ugani unasema mafanikio ni chupa chache za bure. Wanachama wanasema mafanikio ni kutopokea spam.",
        questionEn: "What should have happened in month zero?",
        questionSw: "Nini kilipaswa kutokea mwezi wa sifuri?",
        optionsEn: [
          "Agree the vendor's download target to keep the relationship",
          "Write one primary process metric with the co-op and extension, plus explicit non-goals (no yield percent, no auto-spray)",
          "Let each party keep a private definition and compare at the end",
          "Use downloads as a proxy for fewer wasted bottles",
        ],
        optionsSw: [
          "Kubali lengo la upakuaji la muuzaji ili uhusiano udumu",
          "Andika kipimo kimoja kikuu cha mchakato pamoja na co-op na ugani, pamoja na visivyo malengo (hakuna asilimia ya mavuno, hakuna unyunyizaji otomatiki)",
          "Kila upande ushike ufafanuzi wa siri na mlinganishe mwishoni",
          "Tumia upakuaji kama mbadala wa chupa chache za bure",
        ],
        correctIndex: 1,
        hintsEn: [
          "Downloads measure marketing, not agronomy or spam.",
          "Correct. One written metric and named non-goals prevent this fight.",
          "Private definitions guarantee three victory slides and one confused county.",
          "A proxy that does not track bottles will not reduce bottles.",
        ],
        hintsSw: [
          "Upakuaji unapima masoko, si agronomia wala spam.",
          "Sahihi. Kipimo kimoja kilichoandikwa na visivyo malengo vilivyotajwa vinazuia vita hii.",
          "Ufafanuzi wa siri unahakikisha slaidi tatu za ushindi na kaunti moja yenye kuchanganyikiwa.",
          "Mbadala usiofuatilia chupa hautapunguza chupa.",
        ],
        explainEn: "Specify success and non-goals before the first SMS. Downloads are not agronomy.",
        explainSw: "Bainisha mafanikio na visivyo malengo kabla ya SMS ya kwanza. Upakuaji si agronomia.",
      }),
      quiz(
        "You cannot fund a comparison group. You should:",
        "Huwezi kufadhili kundi la kulinganisha. Unapaswa:",
        [
          "Claim impact anyway, at half the usual percentage",
          "Specify a demonstration with process metrics and forbid yield-impact language",
          "Skip evaluation entirely",
          "Use the vendor's overseas impact number",
        ],
        [
          "Dai athari hata hivyo, kwa nusu ya asilimia ya kawaida",
          "Bainisha onyesho lenye vipimo vya mchakato na ukataze lugha ya athari ya mavuno",
          "Ruka tathmini kabisa",
          "Tumia namba ya athari ya muuzaji ya ng'ambo",
        ],
        1,
        "No comparison means no impact claim. A demonstration with process metrics is still a professional specification.",
        "Hakuna kulinganisha kunamaanisha hakuna dai la athari. Onyesho lenye vipimo vya mchakato bado ni maelezo ya kitaalamu."
      ),
      note(
        "Try it: non-goals list",
        "Jaribu: orodha ya visivyo malengo",
        "Write four things your next farm tool will not claim: auto-spray, yield percent without a comparison, PIN collection, and one more of your own.\n\nPin it on the spec you will write in Unit 12.",
        "Andika mambo manne zana yako ijayo ya shamba haitadai: unyunyizaji otomatiki, asilimia ya mavuno bila kulinganisha, ukusanyaji wa PIN, na moja zaidi yako.\n\nIbana kwenye maelezo utakayoandika Somo la 12."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- No comparison, no impact claim.\n- Pre-register process metrics and non-goals.\n- Next: a full design brief for a co-op advisory.",
        "- Hakuna kulinganisha, hakuna dai la athari.\n- Sajili mapema vipimo vya mchakato na visivyo malengo.\n- Ifuatayo: muhtasari kamili wa usanifu wa ushauri wa co-op."
      ),
    ],
  },
  {
    id: "agr-i-u12",
    titleEn: "Design brief: a co-op advisory that stays honest",
    titleSw: "Muhtasari: ushauri wa co-op unaobaki wa uaminifu",
    cards: [
      note(
        "Pull the track into one service specification",
        "Vuta kozi kwenye maelezo moja ya huduma",
        "You are ready to specify — not to code — an AI-assisted advisory for a Kenyan co-op. The service may notice (photos, weather SMS, milk drops), prepare questions, and queue the afisa wa ugani. It may not spray, dose, set prices, or mint yield percentages.\n\nYour brief must name: crop and county; channel (SMS, USSD, WhatsApp, offline photo as in Agrika; DigiFarm-style where members already are); whose labour and whose phone (Unit 7); local photos and season splits (Units 2 and 6); a decision rule from score to scout to person (Units 1, 3, 4); the four boxes and KES costs you will report (Unit 5); data fields and steward (Unit 8); grounding and refusals (Unit 9); evaluation as demonstration or comparison (Units 10–11).\n\nKALRO, PCPB, county extension, KMD and NDMA stay in the loop as sources and as people. FarmerAI and Agrika are examples of channels and capture styles, not proof that your brief will raise harvests.",
        "Uko tayari kubainisha — si kuandika msimbo — ushauri unaosaidiwa na AI kwa co-op ya Kenya. Huduma inaweza kuona (picha, SMS ya hali ya hewa, kushuka kwa maziwa), kuandaa maswali, na kuweka afisa wa ugani kwenye foleni. Haiwezi kunyunyiza, kutoa kipimo, kuweka bei, wala kuumba asilimia za mavuno.\n\nMuhtasari wako lazima utaje: zao na kaunti; njia (SMS, USSD, WhatsApp, picha bila intaneti kama Agrika; aina ya DigiFarm pale wanachama walipo); kazi ya nani na simu ya nani (Somo la 7); picha za eneo na mgawanyo wa msimu (Masomo 2 na 6); kanuni ya uamuzi kutoka alama hadi ukaguzi hadi mtu (Masomo 1, 3, 4); visanduku vinne na gharama za KES utakazoripoti (Somo la 5); sehemu za data na mlezi (Somo la 8); msingi na kukataa (Somo la 9); tathmini kama onyesho au kulinganisha (Masomo 10–11).\n\nKALRO, PCPB, ugani wa kaunti, KMD na NDMA wanabaki kwenye mnyororo kama vyanzo na kama watu. FarmerAI na Agrika ni mifano ya njia na mitindo ya kukamata, si uthibitisho kwamba muhtasari wako utainua mavuno."
      ),
      reveal([
        {
          termEn: "Specification",
          termSw: "Maelezo (specification)",
          defEn: "A written description of who, what, channel, refusals, data and evaluation — enough to brief a builder or a county.",
          defSw: "Maelezo yaliyoandikwa ya nani, nini, njia, kukataa, data na tathmini — ya kutosha kumweleza mjengaji au kaunti.",
        },
        {
          termEn: "Non-goal",
          termSw: "Sio lengo",
          defEn: "A named thing the service will not do, such as auto-spray or a yield-impact claim without comparison.",
          defSw: "Kitu kilichotajwa huduma haitafanya, kama unyunyizaji otomatiki au dai la athari ya mavuno bila kulinganisha.",
        },
        {
          termEn: "Escalation",
          termSw: "Kupandisha (escalation)",
          defEn: "When the tool must stop and a named human takes the case: officer, vet, agrovet plus label.",
          defSw: "Zana inapolazimika kusimama na binadamu aliye tajiwa anachukua kesi: afisa, daktari wa mifugo, agrovet pamoja na lebo.",
        },
      ]),
      note(
        "Worked example: a one-page potato brief (fictional co-op)",
        "Mfano: muhtasari wa ukurasa mmoja wa viazi (co-op ya kubuni)",
        "Who: 180 potato members in Nyandarua, rain-fed, mostly women weeding, SIMs often in men's names.\n\nChannel: weekly Kiswahili/English SMS plus one paid village scout with an offline photo kit; WhatsApp only for the scout to the officer.\n\nDecision rule: photo score is for the scout's queue; 20-plant W before any call; chemical talk only after afisa wa ugani and PCPB label at agrovet.\n\nData: member code, ward, date, count, photo; no PIN, no homestead GPS, no ID. Steward: secretary. Vendor USB: forbidden.\n\nEvaluation: demonstration. Pre-registered metric: number of officer visits that arrived with a count and photos. Non-goals: yield percent, auto-spray, price-setting.\n\nUnknowns to print: effect on harvest, calibration of scores in short rains.\n\nThat page is stricter than a vendor brochure and more useful to a county than a slogan.",
        "Nani: wanachama 180 wa viazi Nyandarua, wa mvua, wanawake wengi wanalilia, SIM mara nyingi kwa majina ya wanaume.\n\nNjia: SMS ya kila wiki Kiswahili/Kiingereza pamoja na mkaguzi mmoja wa kijiji anayelipwa na seti ya picha bila intaneti; WhatsApp tu kutoka mkaguzi kwenda afisa.\n\nKanuni ya uamuzi: alama ya picha ni kwa foleni ya mkaguzi; W ya mimea 20 kabla ya simu yoyote; mazungumzo ya dawa tu baada ya afisa wa ugani na lebo ya PCPB kwenye agrovet.\n\nData: msimbo wa mwanachama, wadi, tarehe, hesabu, picha; hakuna PIN, hakuna GPS ya nyumbani, hakuna kitambulisho. Mlezi: katibu. USB ya muuzaji: imekatazwa.\n\nTathmini: onyesho. Kipimo kilichosajiliwa mapema: idadi ya ziara za afisa zilizofika na hesabu na picha. Visivyo malengo: asilimia ya mavuno, unyunyizaji otomatiki, kuweka bei.\n\nVisivyojulikana vya kuchapisha: athari kwa mavuno, urekebishaji wa alama katika mvua fupi.\n\nUkurasa huo ni mkali kuliko brosha ya muuzaji na una manufaa zaidi kwa kaunti kuliko kauli mbiu."
      ),
      scenario({
        titleEn: "Scenario: the brief vs the sales appendix",
        titleSw: "Hali: muhtasari dhidi ya kiambatisho cha mauzo",
        situationEn: "Your co-op committee approves the potato brief. The vendor's appendix adds auto-dispatch of spray gangs at 70% confidence and a promised 20% yield lift in the first season.",
        situationSw: "Kamati ya co-op yako inaidhinisha muhtasari wa viazi. Kiambatisho cha muuzaji kinaongeza kutuma otomatiki vikosi vya kunyunyiza kwa uhakika 70% na ahadi ya kuinua mavuno 20% msimu wa kwanza.",
        questionEn: "What happens to the appendix?",
        questionSw: "Kiambatisho kinaenda wapi?",
        optionsEn: [
          "Accept it — vendors know scale",
          "Strike both additions: they violate the decision rule and the honest-reporting non-goal",
          "Accept the spray dispatch but drop the 20%",
          "Accept the 20% if they write approximately",
        ],
        optionsSw: [
          "Kikubali — wauzaji wanajua kupanua",
          "Futa nyongeza zote mbili: zinavunja kanuni ya uamuzi na sio lengo la kuripoti kwa uaminifu",
          "Kubali kutuma unyunyizaji lakini acha 20%",
          "Kubali 20% wakiandika takriban",
        ],
        correctIndex: 1,
        hintsEn: [
          "Scale that auto-sprays is scaled harm. The brief exists to stop this.",
          "Correct. The specification is the contract. Appendix features that break it are not extras; they are refusals.",
          "Dispatch is the more dangerous half. Neither addition survives.",
          "Approximately does not turn an unmeasured 20% into evidence.",
        ],
        hintsSw: [
          "Kupanua kunakonyunyiza otomatiki ni madhara yaliyopanuliwa. Muhtasari upo kusimamisha hivi.",
          "Sahihi. Maelezo ni mkataba. Vipengele vya kiambatisho vinavyouvunja si nyongeza; ni vya kukataa.",
          "Kutuma ni nusu hatari zaidi. Nyongeza yoyote haishi.",
          "Takriban hageuzi 20% isiyopimwa kuwa ushahidi.",
        ],
        explainEn: "If the brief and the appendix fight, the brief wins or you do not buy. Auto-spray and minted yields are out.",
        explainSw: "Muhtasari na kiambatisho vikipigana, muhtasari unashinda au hununui. Kunyunyiza otomatiki na mavuno ya kubuni viko nje.",
      }),
      quiz(
        "Which line belongs in every agr-advisory specification in this course?",
        "Mstari upi unatakiwa kuwepo katika kila maelezo ya ushauri wa kilimo katika kozi hii?",
        [
          "The model may dispatch spraying when confidence exceeds 70%",
          "Chemical use is decided with the afisa wa ugani, the agrovet and the PCPB label — never by the model",
          "Yield will improve by a double-digit percent in season one",
          "Members must submit M-Pesa PINs to prove they are farmers",
        ],
        [
          "Modeli inaweza kutuma unyunyizaji uhakika unapozidi 70%",
          "Matumizi ya dawa yanaamuliwa na afisa wa ugani, agrovet na lebo ya PCPB — si kwa modeli kamwe",
          "Mavuno yataboresha kwa asilimia ya tarakimu mbili msimu wa kwanza",
          "Wanachama lazima watoe PIN za M-Pesa kuthibitisha ni wakulima",
        ],
        1,
        "That sentence is the spine of beginner through intermediate. The other three lines are the failures the track exists to stop.",
        "Sentensi hiyo ndiyo uti wa mgongo kutoka kuanzia hadi kati. Mistari mingine mitatu ni kushindwa kozi iliyopo kusimamisha."
      ),
      note(
        "Try it: write the brief",
        "Jaribu: andika muhtasari",
        "One page, your co-op or a fictional one:\n\n- Who, crop, county, whose phone, whose labour\n- Channel and language\n- Decision rule (score to scout to person)\n- Data fields and steward\n- Escalation (officer / vet / label)\n- Evaluation metric and three non-goals\n- One We do not yet know… sentence\n\nRead it to someone who farms. If they think the tool will spray or raise yield by magic, rewrite until they do not.",
        "Ukurasa mmoja, co-op yako au ya kubuni:\n\n- Nani, zao, kaunti, simu ya nani, kazi ya nani\n- Njia na lugha\n- Kanuni ya uamuzi (alama hadi ukaguzi hadi mtu)\n- Sehemu za data na mlezi\n- Kupandisha (afisa / daktari wa mifugo / lebo)\n- Kipimo cha tathmini na visivyo malengo vitatu\n- Sentensi moja ya Bado hatujui…\n\nIsome kwa mtu anayelima. Akidhani zana itanyunyiza au kuinua mavuno kwa uchawi, andika upya hadi asidhani."
      ),
      note(
        "Carry forward",
        "Beba mbele",
        "- You can specify farm AI that notices and queues people.\n- You will not specify auto-spray, PINs, or invented yield percents.\n- Advanced work starts at imaging pipelines, offline deployment, drift, vendor demos and data ownership — still with humans in charge of chemistry.",
        "- Unaweza kubainisha AI ya shamba inayoona na kuweka watu kwenye foleni.\n- Hutabainisha unyunyizaji otomatiki, PIN, wala asilimia za mavuno za kubuni.\n- Kazi ya juu inaanza na mifumo ya picha, kuweka kazini bila intaneti, mabadiliko, maonyesho ya wauzaji na umiliki wa data — bado binadamu wakiwa na dawa."
      ),
    ],
  },
];
