import type { PlacementQuestion } from "@/lib/learn/placement-questions";

/**
 * End-of-course check. Same 12 scored skills as the pre-check (pq-4 through pq-15),
 * with new wording. Language, age, and career are not part of this score.
 */
export const OUTCOME_12_QUESTIONS: PlacementQuestion[] = [
  {
    id: "oc-1-learn",
    domain: "foundations",
    question: {
      en: "A photo tool starts calling ripe mangoes unripe after it is shown thousands of labelled photos. What is the best account of that change?",
      sw: "Zana ya picha inaanza kuita maembe mbivu kuwa mbichi baada ya kuonyeshwa maelfu ya picha zenye lebo. Ni maelezo gani bora ya mabadiliko hayo?",
    },
    options: [
      { id: "a", text: { en: "Someone typed a fresh rule for every mango by hand.", sw: "Mtu aliandika kanuni mpya kwa kila embe kwa mkono." } },
      { id: "b", text: { en: "It picked up a pattern from the example photos.", sw: "Ilichukua ruwaza kutoka picha za mfano." } },
      { id: "c", text: { en: "The phone became conscious and changed its mind.", sw: "Simu ilipata fahamu na kubadili nia." } },
      { id: "d", text: { en: "It looked the word 'ripe' up in a fixed dictionary.", sw: "Ilitafuta neno 'mbivu' katika kamusi isiyobadilika." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-2-gen",
    domain: "foundations",
    question: {
      en: "Which job is generative AI doing?",
      sw: "Ni kazi ipi AI zalishi inafanya?",
    },
    options: [
      { id: "a", text: { en: "A till that adds the same prices a cashier typed.", sw: "Till inayojumlisha bei zile zile keshia aliandika." } },
      { id: "b", text: { en: "A tool that writes a new market notice from a short instruction.", sw: "Zana inayoandika tangazo jipya la soko kutoka agizo fupi." } },
      { id: "c", text: { en: "A padlock that opens with one saved PIN.", sw: "Kufuli inayofunguka kwa PIN moja iliyohifadhiwa." } },
      { id: "d", text: { en: "A paper timetable pinned on a noticeboard.", sw: "Ratiba ya karatasi iliyobandikwa bondoni." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-3-prompt",
    domain: "prompting",
    question: {
      en: "In this course, the prompt is which part of working with a model?",
      sw: "Katika kozi hii, maagizo (prompt) ni sehemu ipi ya kufanya kazi na modeli?",
    },
    options: [
      { id: "a", text: { en: "The fan that cools the laptop.", sw: "Feni inayopoza kompyuta ndogo." } },
      { id: "b", text: { en: "The instruction or question you give the model.", sw: "Agizo au swali unalompa modeli." } },
      { id: "c", text: { en: "The receipt number from a till.", sw: "Nambari ya risiti kutoka till." } },
      { id: "d", text: { en: "A low-battery warning.", sw: "Onyo la chaji ndogo." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-4-hallucination",
    domain: "foundations",
    question: {
      en: "A chatbot names a KALRO bulletin that the library cannot find, in smooth sentences. What happened?",
      sw: "Chatbot inataja taarifa ya KALRO ambayo maktaba haiwezi kuipata, kwa sentensi laini. Nini kilitokea?",
    },
    options: [
      { id: "a", text: { en: "It produced confident text that is not backed by a real source.", sw: "Ilitoa maandishi ya uhakika yasiyoungwa mkono na chanzo halisi." } },
      { id: "b", text: { en: "The screen changed colour.", sw: "Skrini ilibadili rangi." } },
      { id: "c", text: { en: "It refused the question because it was hard.", sw: "Ilikataa swali kwa sababu lilikuwa gumu." } },
      { id: "d", text: { en: "It translated the bulletin into Kiswahili and nothing else.", sw: "Ilitafsiri taarifa kwa Kiswahili na hakuna kingine." } },
    ],
    correctOptionId: "a",
  },
  {
    id: "oc-5-prompt-quality",
    domain: "prompting",
    question: {
      en: "Which request is most likely to get a useful, checkable answer?",
      sw: "Ombi lipi lina uwezekano mkubwa wa kupata jibu la manufaa linaloweza kukaguliwa?",
    },
    options: [
      { id: "a", text: { en: "A single word, with no audience or format.", sw: "Neno moja, bila hadhira wala muundo." } },
      { id: "b", text: { en: "A role, the task, who it is for, the format, a limit, and one example.", sw: "Nafasi, kazi, ni kwa nani, muundo, kikomo, na mfano mmoja." } },
      { id: "c", text: { en: "The same sentence typed in capital letters.", sw: "Sentensi ile ile iliyoandikwa kwa herufi kubwa." } },
      { id: "d", text: { en: "Restarting the router before every question.", sw: "Kuwasha upya modemu kabla ya kila swali." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-6-vision",
    domain: "applications",
    question: {
      en: "A clinic tool flags a shadow on a scan for a person to review. Which field is that?",
      sw: "Zana ya kliniki inaashiria kivuli kwenye skani ili mtu akague. Huo ni uwanja upi?",
    },
    options: [
      { id: "a", text: { en: "Computer vision.", sw: "Uoni wa kompyuta (computer vision)." } },
      { id: "b", text: { en: "Changing the width of a spreadsheet column.", sw: "Kubadilisha upana wa safu ya lahajedwali." } },
      { id: "c", text: { en: "Labelling a box of paper files.", sw: "Kuandika lebo kwenye sanduku la faili za karatasi." } },
      { id: "d", text: { en: "Tuning an FM radio.", sw: "Kurekebisha redio ya FM." } },
    ],
    correctOptionId: "a",
  },
  {
    id: "oc-7-bias",
    domain: "data_ethics",
    question: {
      en: "A voice tool fails for a Luo accent after it was trained mostly on other accents. Why?",
      sw: "Zana ya sauti inashindwa kwa lafudhi ya Kijaluo baada ya kufunzwa zaidi kwa lafudhi nyingine. Kwa nini?",
    },
    options: [
      { id: "a", text: { en: "The chip formed a personal dislike.", sw: "Kipande cha kielektroniki kiliunda chuki ya kibinafsi." } },
      { id: "b", text: { en: "The examples it learned from left that accent out, so the pattern is unfair.", sw: "Mifano iliyojifunza iliacha lafudhi hiyo nje, kwa hiyo ruwaza si ya haki." } },
      { id: "c", text: { en: "It was written to reject one county on purpose.", sw: "Iliandikwa kukataa kaunti moja kwa makusudi." } },
      { id: "d", text: { en: "It only happens on a very fast connection.", sw: "Hutokea tu kwa muunganiko wa kasi sana." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-8-privacy",
    domain: "data_ethics",
    question: {
      en: "A public chatbot asks for a detail so it can 'personalise' a farm plan. Which detail stays out?",
      sw: "Chatbot ya umma inaomba undani ili 'ibinafsishe' mpango wa shamba. Undani upi unabaki nje?",
    },
    options: [
      { id: "a", text: { en: "An M-Pesa PIN, a national ID number, or a patient's diagnosis.", sw: "PIN ya M-Pesa, nambari ya kitambulisho, au utambuzi wa mgonjwa." } },
      { id: "b", text: { en: "The public name of a market.", sw: "Jina la umma la soko." } },
      { id: "c", text: { en: "A question about the long rains.", sw: "Swali kuhusu mvua ndefu." } },
      { id: "d", text: { en: "A request for a shorter explanation.", sw: "Ombi la maelezo mafupi zaidi." } },
    ],
    correctOptionId: "a",
  },
  {
    id: "oc-9-token",
    domain: "foundations",
    question: {
      en: "When a language model 'reads' a sentence, a token is…",
      sw: "Modeli ya lugha 'inaposoma' sentensi, tokeni ni…",
    },
    options: [
      { id: "a", text: { en: "A plastic badge for finishing a module.", sw: "Beji ya plastiki ya kumaliza moduli." } },
      { id: "b", text: { en: "A chunk of text, a word or part of a word, that the model uses to predict what comes next.", sw: "Kipande cha maandishi, neno au sehemu ya neno, ambacho modeli hutumia kutabiri kinachofuata." } },
      { id: "c", text: { en: "The charging cable.", sw: "Waya wa kuchaji." } },
      { id: "d", text: { en: "A prepaid electricity token from the shop.", sw: "Tokeni ya umeme ya kulipia kabla kutoka dukani." } },
    ],
    correctOptionId: "b",
  },
  {
    id: "oc-10-few-shot",
    domain: "prompting",
    question: {
      en: "You paste two finished examples of a price SMS, then ask for a third in the same shape. What is that called?",
      sw: "Unabandika mifano miwili iliyokamilika ya SMS ya bei, kisha kuomba ya tatu kwa umbo lile. Hiyo inaitwaje?",
    },
    options: [
      { id: "a", text: { en: "Few-shot prompting: the examples show the pattern you want.", sw: "Few-shot: mifano inaonyesha ruwaza unayotaka." } },
      { id: "b", text: { en: "Sending only three words in total.", sw: "Kutuma maneno matatu tu kwa jumla." } },
      { id: "c", text: { en: "Photographing the screen.", sw: "Kupiga picha skrini." } },
      { id: "d", text: { en: "Deleting the chat every few minutes.", sw: "Kufuta mazungumzo kila dakika chache." } },
    ],
    correctOptionId: "a",
  },
  {
    id: "oc-11-farm",
    domain: "applications",
    question: {
      en: "How can a model help a farmer with a sick-looking leaf, without becoming the final decision?",
      sw: "Modeli inawezaje kumsaidia mkulima na jani linaloonekana mgonjwa, bila kuwa uamuzi wa mwisho?",
    },
    options: [
      { id: "a", text: { en: "It can read the photo and suggest a possible pest or disease for an officer or label to confirm.", sw: "Inaweza kusoma picha na kupendekeza mdudu au ugonjwa unaowezekana ili afisa au lebo ithibitishe." } },
      { id: "b", text: { en: "It can dig the canals itself.", sw: "Inaweza kuchimba mifereji yenyewe." } },
      { id: "c", text: { en: "It can set the date of the long rains.", sw: "Inaweza kuweka tarehe ya mvua ndefu." } },
      { id: "d", text: { en: "It can replace sunlight.", sw: "Inaweza kuchukua nafasi ya mwanga wa jua." } },
    ],
    correctOptionId: "a",
  },
  {
    id: "oc-12-hitl",
    domain: "data_ethics",
    question: {
      en: "A ward tool suggests a patient is getting worse. Why must a person still decide?",
      sw: "Zana ya wodi inapendekeza mgonjwa anazidi kuwa mbaya. Kwa nini mtu bado lazima aamue?",
    },
    options: [
      { id: "a", text: { en: "High-stakes health and legal calls need a human to check safety, accuracy, and ethics before anyone acts.", sw: "Maamuzi ya hatari ya afya na sheria yanahitaji binadamu kukagua usalama, usahihi, na maadili kabla ya mtu kutenda." } },
      { id: "b", text: { en: "The model stops unless someone holds the Enter key down.", sw: "Modeli husimama isipokuwa mtu abonyeze Enter bila kukoma." } },
      { id: "c", text: { en: "A person is only there to keep the power bill down.", sw: "Mtu yuko tu ili kuweka bili ya umeme chini." } },
      { id: "d", text: { en: "Human review is only for games.", sw: "Ukaguzi wa binadamu ni kwa michezo tu." } },
    ],
    correctOptionId: "a",
  },
];

export function scoreOutcome(answers: Record<string, string>): number {
  let score = 0;
  for (const question of OUTCOME_12_QUESTIONS) {
    if (question.correctOptionId && answers[question.id] === question.correctOptionId) {
      score += 1;
    }
  }
  return score;
}
