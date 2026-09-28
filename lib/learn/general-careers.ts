import type { CareerId } from "./types";

export type GeneralCareer = {
  id: CareerId;
  avatar: string;
  fallback: string;
  labels: {
    en: string;
    sw: string;
  };
  descriptions: {
    en: string;
    sw: string;
  };
};

export const GENERAL_CAREERS: GeneralCareer[] = [
  {
    id: "farmer",
    avatar: "/learn/careers/agriculture.jpg",
    fallback: "AG",
    labels: {
      en: "Agriculture & Food Production",
      sw: "Kilimo na Uzalishaji Chakula",
    },
    descriptions: {
      en: "Farming, livestock, agribusiness & food markets",
      sw: "Kilimo, ufugaji, na biashara ya chakula",
    },
  },
  {
    id: "teacher_primary",
    avatar: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&auto=format&fit=crop&q=60",
    fallback: "ED",
    labels: {
      en: "Education & Teaching",
      sw: "Elimu na Ualimu",
    },
    descriptions: {
      en: "Primary, secondary, university & vocational training",
      sw: "Shule za msingi, sekondari, vyuo na ualimu",
    },
  },
  {
    id: "nurse",
    avatar: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=100&auto=format&fit=crop&q=60",
    fallback: "HL",
    labels: {
      en: "Healthcare & Medicine",
      sw: "Afya na Matibabu",
    },
    descriptions: {
      en: "Clinical care, nursing & community health",
      sw: "Huduma za afya, uuguzi na matibabu",
    },
  },
  {
    id: "shop_owner",
    avatar: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=100&auto=format&fit=crop&q=60",
    fallback: "BIZ",
    labels: {
      en: "Business, Trade & Finance",
      sw: "Biashara na Fedha",
    },
    descriptions: {
      en: "Retail shops, finance, logistics & artisan crafts",
      sw: "Maduka, mawakala wa fedha, uchukuzi na ufundi",
    },
  },
  {
    id: "tech",
    avatar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=100&auto=format&fit=crop&q=60",
    fallback: "IT",
    labels: {
      en: "Technology & Software",
      sw: "Teknolojia na Programu",
    },
    descriptions: {
      en: "Software development, data, IT & digital tools",
      sw: "Ukuzaji wa programu, data na mifumo ya kidijitali",
    },
  },
  {
    id: "creative",
    avatar: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=100&auto=format&fit=crop&q=60",
    fallback: "CR",
    labels: {
      en: "Creative Arts & Media",
      sw: "Sanaa na Vyombo vya Habari",
    },
    descriptions: {
      en: "Design, content creation, journalism & arts",
      sw: "Ubunifu, uzalishaji wa maudhui na uandishi",
    },
  },
  {
    id: "government",
    avatar: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=100&auto=format&fit=crop&q=60",
    fallback: "GOV",
    labels: {
      en: "Public Service & Community",
      sw: "Utumishi wa Umma na Jamii",
    },
    descriptions: {
      en: "County & national government, NGOs & legal work",
      sw: "Serikali, mashirika yasiyo ya kiserikali na sheria",
    },
  },
  {
    id: "exploring",
    avatar: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&auto=format&fit=crop&q=60",
    fallback: "EX",
    labels: {
      en: "Still Exploring / Career Change",
      sw: "Kuchunguza Njia Mpya",
    },
    descriptions: {
      en: "Learning versatile AI skills for any future career",
      sw: "Kujifunza ujuzi wa AI kwa mwelekeo wowote ujao",
    },
  },
];
