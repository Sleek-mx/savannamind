import { note, quiz, reveal } from "@/lib/learn/curriculum/helpers";
import type { CurriculumUnit } from "@/lib/learn/curriculum/types";

function U(
  id: string,
  titleEn: string,
  titleSw: string,
  bodyEn: string,
  bodySw: string,
  terms: { termEn: string; termSw: string; defEn: string; defSw: string }[],
  qEn: string,
  qSw: string,
  optsEn: string[],
  optsSw: string[],
  correct: number
): CurriculumUnit {
  return {
    id,
    titleEn,
    titleSw,
    cards: [
      note(titleEn, titleSw, bodyEn, bodySw),
      ...(terms.length ? [reveal(terms)] : []),
      quiz(qEn, qSw, optsEn, optsSw, correct),
    ],
  };
}

const healthTitles = [
  ["Triage scores", "Alama za triage", "Tools can score how urgent symptoms seem. That is inference—not a diagnosis. Clinicians decide.", "Zana zinaweza kupima uharaka wa dalili. Hiyo ni inference—si utambuzi. Wataalamu wanaamua."],
  ["Medical images", "Picha za afya", "X-rays go through a vision model to flag areas for review. Humans read the final call.", "Eksirei hupitia mfano wa kuona kuonyesha maeneo ya ukaguzi. Binadamu husoma uamuzi wa mwisho."],
  ["Visit notes", "Maandishi ya ziara", "Summaries must stay tied to real records. Prompt for SOAP format and forbid invented medicines.", "Muhtasari lazima ubaki kwenye rekodi halisi. Omba muundo SOAP na kataza dawa bandia."],
  ["Community visits", "Ziara za jamii", "CHPs must not paste patient names into public chatbots. Use approved tools only.", "CHP wasibandike majina ya wagonjwa kwenye chatbot za umma. Tumia zana zilizoidhinishwa."],
  ["Forecasts", "Utabiri", "Hospitals forecast beds and stock from past data. Plans use ranges, not certainties.", "Hospitali hutabiri vitanda na stoo kutoka data ya zamani. Mipango hutumia masafa, si uhakika."],
  ["Offline kits", "Vifaa nje ya mtandao", "Edge inference helps when connectivity fails. Updates ship with app releases.", "Inference ya ukingo inasaidia mtandao ukishindwa. Sasisho huja na programu."],
  ["Fair testing", "Tathmini ya usawa", "Test models on local populations. Skin tone and language bias hurt real patients.", "Jaribu mifano kwa watu wa ndani. Upendeleo wa rangi na lugha unawadhuru wagonjwa."],
  ["Data centres", "Vituo vya data", "Batch imaging inference often runs overnight on GPUs. Know where data is stored.", "Inference ya picha mara nyingi usiku kwenye GPU. Jua data inahifadhiwa wapi."],
  ["Wrong doses", "Dozi zisizo sahihi", "Chat text can hallucinate drugs. Never act without pharmacist or doctor review.", "Maandishi ya chat yanaweza kutunga dawa. Usitende bila daktari au duka la dawa."],
  ["Your workflow", "Mtiririko wako", "Draw one CHP flow: symptoms in → score → human approval → no IDs in public APIs.", "Chora mtiririko mmoja: dalili → alama → idhini ya mwanadamu → hakuna vitambulisho kwenye API za umma."],
];

export const hltBeginnerUnits: CurriculumUnit[] = healthTitles.map((t, i) =>
  U(
    `hlt-b-u${i + 1}`,
    t[0],
    t[1],
    t[2],
    t[3],
    i === 0
      ? [
          {
            termEn: "Triage",
            termSw: "Triage",
            defEn: "Sorting patients by urgency—not final treatment.",
            defSw: "Kupanga wagonjwa kwa uharaka—si matibabu ya mwisho.",
          },
        ]
      : [],
    "Health AI outputs require:",
    "Matokeo ya AI ya afya yanahitaji:",
    ["No human ever", "Licensed human review for decisions", "Public ID sharing", "Only emojis"],
    ["Hakuna mwanadamu", "Ukaguzi wa mtaalamu aliyehitimu", "Kushiriki vitambulisho", "Emoji tu"],
    1
  )
);

const eduTitles = [
  ["Study help", "Msaada wa kusoma", "AI can explain ideas if prompts are clear. You still write submissions in your words.", "AI inaweza kueleza ikiwa prompt ni wazi. Bado unaandika kazi kwa maneno yako."],
  ["Adaptive quizzes", "Maswali adaptivu", "Platforms infer the next question from your answers. That is inference during practice.", "Mifumo hutabiri swali linalofuata kutoka majibu yako."],
  ["Essay scoring", "Alama za insha", "Automated scores are controversial. Humans must appeal and local tests matter.", "Alama za kiotomatiki zinabishana. Wanadamu wanapaswa kurudiwa na majaribio ya ndani."],
  ["Integrity", "Uadilifu", "Brainstorm with AI; verify facts; cite sources. Submitting raw AI text is misconduct.", "Tumia AI kwa mawazo; thibitisha; nunua vyanzo. Kuwasilisha maandishi ya AI ni ukiukaji."],
  ["Kiswahili tools", "Zana za Kiswahili", "Tokenisation affects Swahili. Evaluate tools on local set books.", "Tokenisation huathiri Kiswahili. Tathmini kwa vitabu vya ndani."],
  ["Lab photos", "Picha za maabara", "Vision can hint at lab setup errors—teachers still grade.", "Kuona kunaweza kuonyesha makosa ya mpangilio—walimu bado wanapima."],
  ["Student privacy", "Faragha ya mwanafunzi", "Minimise data under Kenya law. No names in public prompts.", "Punguza data chini ya sheria. Hakuna majina kwenye prompt za umma."],
  ["School servers", "Seva za shule", "Some schools run smaller models on LAN for drafts. Cheaper than huge cloud bills.", "Shule zingine hutumia mifano midogo kwenye LAN."],
  ["Detectors", "Vichunguzi", "AI detectors are imperfect signals—use with human review.", "Vichunguzi vya AI si kamili—tumia na ukaguzi wa mwanadamu."],
  ["Lesson with sources", "Somo na vyanzo", "Retrieve curriculum chunks, generate questions, teacher edits—classic RAG pattern.", "Retrieve vipande vya mtaala, zalia maswali, mwalimu ahariri—mfumo wa RAG."],
];

export const eduBeginnerUnits: CurriculumUnit[] = eduTitles.map((t, i) =>
  U(`edu-b-u${i + 1}`, t[0], t[1], t[2], t[3], [], "School AI should be grounded in:", "AI shuleni inapaswa kuwa na msingi:", ["Random blogs", "Approved curriculum sources", "Student IDs", "Exam keys"], ["Blogu nasibu", "Vyanzo vya mtaala vilivyoidhinishwa", "Vitambulisho", "Funguo za mtihani"], 1)
);

const bizTitles = [
  ["Sales forecast", "Utabiri wa mauzo", "Past receipts predict next week—tabular inference, not chat magic.", "Risiti za zamani hutabiri wiki ijayo—inference ya jedwali."],
  ["Customer messages", "Ujumbe wa wateja", "Support bots use prompts + FAQ retrieval. Escalate disputes to humans.", "Bot hutumia prompt + FAQ. Migogoro kwa wanadamu."],
  ["Prompt library", "Maktaba ya prompt", "Save reusable prompts for product text in Kiswahili and English.", "Hifadhi prompt zinazoweza kutumika tena."],
  ["Fraud alerts", "Arifa za ulaghai", "Banks classify odd transactions in milliseconds—human queues review blocks.", "Benki huainisha miamala isiyo ya kawaida—wanadamu wanakagua."],
  ["Marketing drafts", "Rasimu za uuzaji", "Draft SMS, human verifies price and claims.", "Andika SMS, binadamu anathibitisha bei."],
  ["Product search", "Utafutaji wa bidhaa", "Embeddings match meaning, not only spelling.", "Embeddings hulinganisha maana, si herufi tu."],
  ["Shop agents", "Mawakala wa duka", "Agents calling APIs need limits—approve payments manually.", "Mawakala wanahitaji vikomo—idhini ya malipo kwa mkono."],
  ["Token costs", "Gharama za tokeni", "API bills scale with length—compress prompts.", "Bili huongezeka na urefu—fupisha prompt."],
  ["Credit scores", "Alama za mkopo", "Scores can harm informal workers—audit fairness.", "Alama zinaweza kuwadhuru wafanyakazi wa informal."],
  ["Playbook", "Kitabu cha mchezo", "Document forecast + SMS + fraud handoff with human steps.", "Andika utabiri + SMS + ulaghai na hatua za mwanadamu."],
];

export const bizBeginnerUnits: CurriculumUnit[] = bizTitles.map((t, i) =>
  U(`biz-b-u${i + 1}`, t[0], t[1], t[2], t[3], [], "SME AI should keep humans for:", "AI ya SME inapaswa kuweka wanadamu kwa:", ["Nothing", "Payments and policy decisions", "Deleting records", "Sharing PINs"], ["Hakuna", "Malipo na sera", "Kufuta rekodi", "Kushiriki PIN"], 1)
);

const capTitles = [
  ["Choose a problem", "Chagua tatizo", "Name one real issue in your area. AI is only useful if the problem is clear.", "Taja tatizo moja halisi. AI ina maana ikiwa tatizo ni wazi."],
  ["Collect fairly", "Kusanya kwa haki", "Consent, minimisation, fair pay for participants.", "Idhini, kupunguza data, malipo ya haki."],
  ["Pick the approach", "Chagua njia", "Rules, tabular ML, vision, or RAG+prompt—match tool to task.", "Sheria, jedwali, kuona, au RAG—linganisha zana na kazi."],
  ["Deploy plan", "Mpango wa uzinduzi", "Edge vs cloud, latency on 3G, fallback if API fails.", "Ukingo dhidi ya wingu, latency, mbadala."],
  ["Measure success", "Pima mafanikio", "Metrics + held-out local tests, not demo hype.", "Vipimo + majaribio ya ndani."],
  ["Tell stakeholders", "Waeleze wadau", "Explain training vs inference in plain language.", "Eleza mafunzo dhidi ya inference kwa lugha rahisi."],
  ["Monitor drift", "Fuatilia drift", "Retrain or update prompts when behaviour changes.", "Funza upya au sasisha prompt tabia ikibadilika."],
  ["Energy", "Nishati", "Prefer smaller models when possible—climate matters.", "Pendelea mifano midogo inapowezekana."],
  ["Partners", "Washirika", "Clarify data ownership and exit plan with county ICT.", "Fafanua umiliki wa data na mpango wa kutoka."],
  ["Present", "Wasilisha", "10-minute briefing with architecture and harms analysis.", "Wasilisho la dakika 10 na uchambuzi wa madhara."],
];

export const capBeginnerUnits: CurriculumUnit[] = capTitles.map((t, i) =>
  U(`cap-b-u${i + 1}`, t[0], t[1], t[2], t[3], [], "A responsible capstone documents:", "Mradi wenye uwajibikaji unaandika:", ["Only slogans", "Data, inference, evaluation, harms", "API keys", "Skipped consent"], ["Maneno matupu", "Data, inference, tathmini, madhara", "API keys", "Kuruka idhini"], 1)
);
