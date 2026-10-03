export type QuestionDomain =
  | "profile_language"
  | "profile_age"
  | "profile_career"
  | "foundations"
  | "prompting"
  | "data_ethics"
  | "applications";

export type PlacementQuestion = {
  id: string;
  domain: QuestionDomain;
  isProfileMeta?: boolean;
  question: {
    en: string;
    sw: string;
  };
  options: {
    id: string;
    text: {
      en: string;
      sw: string;
    };
    description?: {
      en: string;
      sw: string;
    };
  }[];
  correctOptionId?: string;
};

export const UNIFIED_15_QUESTIONS: PlacementQuestion[] = [
  // —— Question 1: Language
  {
    id: "pq-1-lang",
    domain: "profile_language",
    isProfileMeta: true,
    question: {
      en: "Which language do you prefer for your learning?",
      sw: "Unapendelea lugha gani kwa mafunzo yako?",
    },
    options: [
      {
        id: "en",
        text: {
          en: "English",
          sw: "Kiingereza (English)",
        },
        description: {
          en: "Learn all modules and flashcards in English.",
          sw: "Jifunze moduli zote kwa Kiingereza.",
        },
      },
      {
        id: "sw",
        text: {
          en: "Kiswahili",
          sw: "Kiswahili",
        },
        description: {
          en: "Jifunze moduli zote kwa Kiswahili fasaha.",
          sw: "Jifunze moduli zote kwa Kiswahili fasaha.",
        },
      },
    ],
  },

  // —— Question 2: Age Band
  {
    id: "pq-2-age",
    domain: "profile_age",
    isProfileMeta: true,
    question: {
      en: "What is your age bracket?",
      sw: "Kikundi chako cha umri ni kipi?",
    },
    options: [
      {
        id: "kids",
        text: {
          en: "Kids (Ages 8–13)",
          sw: "Watoto (Miaka 8–13)",
        },
        description: {
          en: "Foundational, interactive lessons tailored for young explorers.",
          sw: "Masomo ya kimsingi na ya kusisimua kwa wavumbuzi wachanga.",
        },
      },
      {
        id: "youth",
        text: {
          en: "Youths (Ages 14–20)",
          sw: "Vijana (Miaka 14–20)",
        },
        description: {
          en: "High school, KCSE, college prep and real practical AI tools.",
          sw: "Maandalizi ya shule, chuo na zana halisi za kidijitali za AI.",
        },
      },
      {
        id: "adult",
        text: {
          en: "Adults (Ages 21+)",
          sw: "Watu Wazima (Miaka 21+)",
        },
        description: {
          en: "Career-focused, workplace productivity and professional depth.",
          sw: "Mafunzo ya kukuza kazi, tija kazini na taaluma.",
        },
      },
    ],
  },

  // —— Question 3: Career Track
  {
    id: "pq-3-career",
    domain: "profile_career",
    isProfileMeta: true,
    question: {
      en: "Which career track or field interests you most?",
      sw: "Ni uwanja gani au kazi inayokuvutia zaidi?",
    },
    options: [
      {
        id: "tech",
        text: {
          en: "Technology & Software",
          sw: "Teknolojia na Programu",
        },
        description: {
          en: "Coding, software development, data and digital tools.",
          sw: "Kutengeneza mifumo, programu na data.",
        },
      },
      {
        id: "farmer",
        text: {
          en: "Agriculture & Food Production",
          sw: "Kilimo na Uzalishaji Chakula",
        },
        description: {
          en: "Farming, livestock, pest detection and modern agribusiness.",
          sw: "Kilimo cha kisasa, mifugo na biashara ya chakula.",
        },
      },
      {
        id: "shop_owner",
        text: {
          en: "Business, Trade & Finance",
          sw: "Biashara, Uchuuzi na Fedha",
        },
        description: {
          en: "Retail, accounting, logistics, marketing and trade.",
          sw: "Maduka, mauzo, uwekaji hesabu na masoko.",
        },
      },
      {
        id: "nurse",
        text: {
          en: "Healthcare & Medicine",
          sw: "Afya na Matibabu",
        },
        description: {
          en: "Clinical care, patient education and community health.",
          sw: "Uuguzi, elimu ya wagonjwa na huduma za afya.",
        },
      },
      {
        id: "teacher_primary",
        text: {
          en: "Education & Teaching",
          sw: "Elimu na Ualimu",
        },
        description: {
          en: "Lesson planning, personalized teaching and school tools.",
          sw: "Kuandaa masomo na kusaidia wanafunzi kujifunza.",
        },
      },
      {
        id: "creative",
        text: {
          en: "Creative Arts & Media",
          sw: "Sanaa na Vyombo vya Habari",
        },
        description: {
          en: "Design, storytelling, content creation and visual media.",
          sw: "Ubunifu wa picha, maandishi na hadithi.",
        },
      },
      {
        id: "government",
        text: {
          en: "Public Service & Community",
          sw: "Utumishi wa Umma na Jamii",
        },
        description: {
          en: "Community development, policy, NGOs and public service.",
          sw: "Maendeleo ya jamii na mashirika ya kiraia.",
        },
      },
      {
        id: "exploring",
        text: {
          en: "Still Exploring / Career Transition",
          sw: "Kuchunguza Njia Mpya",
        },
        description: {
          en: "Versatile, all-round AI knowledge for any career path.",
          sw: "Ujuzi wa jumla unaofaa mwelekeo wowote ujao.",
        },
      },
    ],
  },

  // —— Question 4 (AI Foundations 1)
  {
    id: "pq-4-ai-learn",
    domain: "foundations",
    question: {
      en: "What best describes how modern AI systems learn?",
      sw: "Ni maelezo yapi yanayofafanua vizuri jinsi mifumo ya kisasa ya AI inavyojifunza?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Humans write every single decision rule manually into the code.",
          sw: "Wanadamu wanaandika kila kanuni ya uamuzi kwa mkono kwenye msimbo.",
        },
      },
      {
        id: "b",
        text: {
          en: "Algorithms identify patterns in large amounts of example data.",
          sw: "Algoriti zinatambua ruwaza na mifumo katika data nyingi ya mifano.",
        },
      },
      {
        id: "c",
        text: {
          en: "Computers gain human consciousness instantly upon booting.",
          sw: "Kompyuta hupata fahamu za kibinadamu papo hapo zinapowashwa.",
        },
      },
      {
        id: "d",
        text: {
          en: "They only look up words from a static offline dictionary.",
          sw: "Zinahifadhi tu maneno kutoka kwa kamusi ya nje ya mtandao.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 5 (AI Foundations 2)
  {
    id: "pq-5-gen-ai",
    domain: "foundations",
    question: {
      en: "Which of the following is an example of Generative AI?",
      sw: "Ni kipi kati ya vifuatavyo ni mfano wa AI ya Uzalishaji (Generative AI)?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A digital stopwatch counting seconds on a wrist watch.",
          sw: "Saa ya dijitali inayopima sekunde mkononi.",
        },
      },
      {
        id: "b",
        text: {
          en: "A system drafting an original story or realistic image from text.",
          sw: "Mfumo unaotunga hadithi mpya au kutoa picha halisi kutokana na maandishi.",
        },
      },
      {
        id: "c",
        text: {
          en: "A supermarket barcode laser reader scanning a cereal box.",
          sw: "Kisomaji cha misimbo (barcode) kinachochanganua bei dukani.",
        },
      },
      {
        id: "d",
        text: {
          en: "A mechanical thermostat clicking on when room temp drops.",
          sw: "Kidhibiti joto cha mekanika kinachowasha kiyoyozi.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 6 (Prompting 1)
  {
    id: "pq-6-prompt-def",
    domain: "prompting",
    question: {
      en: "In AI tools, what is a 'prompt'?",
      sw: "Katika zana za AI, neno 'prompt' linamaanisha nini?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "The hardware cooling fan inside a computer chassis.",
          sw: "Feni ya kupoza mashine ndani ya seva ya kompyuta.",
        },
      },
      {
        id: "b",
        text: {
          en: "The input instructions, query, or text provided to an AI model.",
          sw: "Maelekezo au swali unalopeana kwa mtindo wa AI ili utoe jibu.",
        },
      },
      {
        id: "c",
        text: {
          en: "A paid subscription license key required to log in.",
          sw: "Nenosiri la leseni ya mwaka linalohitajika kuingia kwenye akaunti.",
        },
      },
      {
        id: "d",
        text: {
          en: "An error popup warning of low device battery.",
          sw: "Arifa inayoonya kuwa chaji ya simu imeshuka.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 7 (Foundations 3)
  {
    id: "pq-7-hallucination",
    domain: "foundations",
    question: {
      en: "What does it mean when an AI model 'hallucinates'?",
      sw: "Inamaanisha nini mtindo wa AI unaposemekana 'unapiga soga / kudanganya' (hallucinates)?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "It generates fluent, confident statements that are factually incorrect or fabricated.",
          sw: "Inazalisha taarifa zinazosikika kuwa sahihi sana lakini si za kweli au zimebuniwa.",
        },
      },
      {
        id: "b",
        text: {
          en: "The monitor screen displays bright rainbow colors.",
          sw: "Kioo cha kompyuta kinaanza kuwaka rangi za upinde wa mvua.",
        },
      },
      {
        id: "c",
        text: {
          en: "The AI goes to sleep when users ask difficult math questions.",
          sw: "AI inalala watumiaji wanapouliza maswali magumu ya hisabati.",
        },
      },
      {
        id: "d",
        text: {
          en: "It translates words from English into Swahili automatically.",
          sw: "Inatafsiri maneno kutoka Kiingereza kwenda Kiswahili kiotomatiki.",
        },
      },
    ],
    correctOptionId: "a",
  },

  // —— Question 8 (Prompting 2)
  {
    id: "pq-8-reliable-prompts",
    domain: "prompting",
    question: {
      en: "How can you get high-quality, reliable outputs from an AI model?",
      sw: "Unawezaje kupata majibu bora na ya kuaminika kutoka kwa mfumo wa AI?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Use vague single-word commands without any background details.",
          sw: "Tumia maagizo mafupi ya neno moja bila maelezo ya kina.",
        },
      },
      {
        id: "b",
        text: {
          en: "Provide clear context, role, target audience, format constraints, and examples.",
          sw: "Weka muktadha wazi, nafasi, walengwa, muundo unaotakiwa, na mifano halisi.",
        },
      },
      {
        id: "c",
        text: {
          en: "Type your query in ALL CAPITAL LETTERS repeatedly.",
          sw: "Andika swali lako kwa HERUFI KUBWA mara kumi mfululizo.",
        },
      },
      {
        id: "d",
        text: {
          en: "Restart your router every time before sending a request.",
          sw: "Zima na uwashe modemu ya mtandao kila kabla ya kuuliza.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 9 (Applications 1)
  {
    id: "pq-9-computer-vision",
    domain: "applications",
    question: {
      en: "Which AI field enables systems to recognize objects in photos and video feeds?",
      sw: "Ni uwanja gani wa AI unaowezesha kompyuta kutambua vitu kwenye picha na video?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Computer Vision",
          sw: "Uoni wa Kompyuta (Computer Vision)",
        },
      },
      {
        id: "b",
        text: {
          en: "Spreadsheet cell formatting",
          sw: "Upangaji wa mistari kwenye Excel au lahajedwali",
        },
      },
      {
        id: "c",
        text: {
          en: "Magnetic tape backup indexing",
          sw: "Kuhifadhi kumbukumbu kwenye kanda za sumaku",
        },
      },
      {
        id: "d",
        text: {
          en: "FM radio transmission modulation",
          sw: "Urekebishaji wa masafa ya redio ya FM",
        },
      },
    ],
    correctOptionId: "a",
  },

  // —— Question 10 (Data & Ethics 1)
  {
    id: "pq-10-bias",
    domain: "data_ethics",
    question: {
      en: "Why can an AI tool exhibit social or cultural bias?",
      sw: "Kwa nini zana ya AI inaweza kuonyesha upendeleo usio wa haki wa kijamii au kiutamaduni?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Computer microchips develop their own personal opinions over time.",
          sw: "Vipande vya kielektroniki vinajenga hisia na maoni binafsi baada ya muda.",
        },
      },
      {
        id: "b",
        text: {
          en: "If the training dataset has historical prejudices or underrepresented groups.",
          sw: "Ikiwa data iliyotumika kuifundisha ina upendeleo wa kihistoria au ukosefu wa uwakilishi.",
        },
      },
      {
        id: "c",
        text: {
          en: "It is deliberately programmed to dislike certain geographic regions.",
          sw: "Inatengenezwa makusudi ili kutopenda maeneo fulani ya dunia.",
        },
      },
      {
        id: "d",
        text: {
          en: "It only occurs when internet speeds exceed 100 Mbps.",
          sw: "Hutokea tu kasi ya mtandao inapozidi 100 Mbps.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 11 (Data & Ethics 2)
  {
    id: "pq-11-privacy",
    domain: "data_ethics",
    question: {
      en: "What should you protect and never paste into public online AI tools?",
      sw: "Ni kipi unapaswa kulinda na kutoingiza kamwe kwenye zana za umma za AI?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Personal identification numbers, passwords, bank pins, and confidential records.",
          sw: "Nambari za vitambulisho, manenosiri, pini za benki, na siri za kibinafsi.",
        },
      },
      {
        id: "b",
        text: {
          en: "Public recipes and general historical dates.",
          sw: "Mapishi ya chakula na tarehe za kihistoria za umma.",
        },
      },
      {
        id: "c",
        text: {
          en: "Questions about world geography.",
          sw: "Maswali kuhusu jiografia ya dunia.",
        },
      },
      {
        id: "d",
        text: {
          en: "Standard English grammar exercises.",
          sw: "Mazoezi ya kawaida ya sarufi ya lugha.",
        },
      },
    ],
    correctOptionId: "a",
  },

  // —— Question 12 (Foundations 4)
  {
    id: "pq-12-tokens",
    domain: "foundations",
    question: {
      en: "In Large Language Models (LLMs), what is a 'token'?",
      sw: "Katika Mifumo Mikubwa ya Lugha (LLMs), 'token' ni nini?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "A physical plastic badge awarded for finishing a course.",
          sw: "Baji ya plastiki unayopewa baada ya kuhitimu kozi.",
        },
      },
      {
        id: "b",
        text: {
          en: "A basic unit of text (a word or piece of a word) the model reads and predicts.",
          sw: "Kipande cha msingi cha maandishi (neno au sehemu ya neno) modeli inayosoma na kutabiri.",
        },
      },
      {
        id: "c",
        text: {
          en: "A hardware charging cable for a mobile phone.",
          sw: "Waya unaotumika kuchaji simu ya rununu.",
        },
      },
      {
        id: "d",
        text: {
          en: "A prepaid electricity meter voucher.",
          sw: "Vocha ya mita ya umeme ya kulipia kabla.",
        },
      },
    ],
    correctOptionId: "b",
  },

  // —— Question 13 (Prompting 3)
  {
    id: "pq-13-few-shot",
    domain: "prompting",
    question: {
      en: "What technique is 'Few-Shot Prompting'?",
      sw: "Mbinu ya 'Few-Shot Prompting' inahusisha nini?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "Including 2–3 sample input-and-output pairs in your prompt to show the desired pattern.",
          sw: "Kuweka mifano 2–3 ya ingizo na tokeo kwenye maelekezo yako ili kuonyesha mpangilio unaotaka.",
        },
      },
      {
        id: "b",
        text: {
          en: "Submitting only 3 words in your entire request.",
          sw: "Kutuma maneno matatu tu kwenye ombi lako lote.",
        },
      },
      {
        id: "c",
        text: {
          en: "Snapping photos of your monitor with a smartphone camera.",
          sw: "Kupiga picha kioo cha kompyuta kwa kutumia kamera ya simu.",
        },
      },
      {
        id: "d",
        text: {
          en: "Deleting the conversation history every five minutes.",
          sw: "Kufuta historia ya gumzo kila baada ya dakika tano.",
        },
      },
    ],
    correctOptionId: "a",
  },

  // —— Question 14 (Applications 2)
  {
    id: "pq-14-agriculture",
    domain: "applications",
    question: {
      en: "How can AI models directly help farmers diagnose crop problems?",
      sw: "AI inawezaje kumsaidia mkulima moja kwa moja kutambua matatizo ya mazao?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "By analyzing leaf photos to identify blights/pests and suggesting verified interventions.",
          sw: "Kwa kuchanganua picha ya jani kutambua wadudu au magonjwa na kupendekeza tiba iliyothibitishwa.",
        },
      },
      {
        id: "b",
        text: {
          en: "By manually digging irrigation trenches without physical workers.",
          sw: "Kwa kuchimba mifereji ya maji shambani bila kutumia wafanyakazi.",
        },
      },
      {
        id: "c",
        text: {
          en: "By controlling rainfall schedules across the county.",
          sw: "Kwa kudhibiti siku na saa ambazo mvua itanyesha.",
        },
      },
      {
        id: "d",
        text: {
          en: "By replacing sunlight with computer screen glare.",
          sw: "Kwa kubadilisha mwangaza wa jua na mwanga wa simu.",
        },
      },
    ],
    correctOptionId: "a",
  },

  // —— Question 15 (Ethics & Validation)
  {
    id: "pq-15-hitl",
    domain: "data_ethics",
    question: {
      en: "Why is human verification ('Human-in-the-Loop') critical in medical and legal AI?",
      sw: "Kwa nini ukaguzi wa mwanadamu ('Human-in-the-Loop') ni muhimu katika AI ya afya na sheria?",
    },
    options: [
      {
        id: "a",
        text: {
          en: "To verify advice for factual safety, accuracy, and ethics before high-stakes decisions.",
          sw: "Kuhakiki usahihi, usalama na maadili ya majibu kabla ya kutekeleza maamuzi nyeti ya maisha.",
        },
      },
      {
        id: "b",
        text: {
          en: "Because AI cannot function unless a human clicks Enter continuously.",
          sw: "Kwa sababu kompyuta haiwezi kufanya kazi bila mtu kubonyeza Enter bila kukoma.",
        },
      },
      {
        id: "c",
        text: {
          en: "To slow down the algorithm so power bills stay low.",
          sw: "Ili kupunguza kasi ya programu ili gharama ya umeme iwe ndogo.",
        },
      },
      {
        id: "d",
        text: {
          en: "It is only required for video games and music apps.",
          sw: "Inahitajika tu kwa ajili ya michezo ya video na muziki.",
        },
      },
    ],
    correctOptionId: "a",
  },
];

export function computePlacementLevel(score: number): "beginner" | "intermediate" | "advanced" {
  if (score >= 9) return "advanced";
  if (score >= 5) return "intermediate";
  return "beginner";
}
