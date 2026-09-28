import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HeartPulse,
  Languages,
  Wifi,
  Briefcase,
  Sprout,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { isLocale, p, shellCopy, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "Our Projects",
    title: "AI Solutions Built for African Realities",
    lead: "At SavannaMind, we develop and pilot cutting-edge AI projects that address real-world challenges across healthcare, language equity, school connectivity, employment, agriculture, and adaptive education.",
    getInvolvedHeading: "Get Involved in Our Projects",
    getInvolvedLead: "We're always looking for partners, researchers, and contributors to help advance these projects. Whether you're interested in research, development, funding, or implementation, there are opportunities to get involved.",
    ctaContact: "Contact Us About Projects",
    projects: [
      {
        id: "chai",
        title: "Community Health AI (CHAI)",
        category: "Healthcare",
        icon: HeartPulse,
        desc: "CHAI develops AI-driven tools to enhance community health services and clinical outcomes across Africa. The project focuses on creating accessible healthcare solutions that operate reliably in low-resource clinics.",
        features: [
          "AI-powered diagnostic assistance for common and infectious diseases",
          "Telemedicine integration for remote medical consultations",
          "Health data analytics for community public health planning",
          "Mobile-first offline capability for rural healthcare workers",
        ],
      },
      {
        id: "ai-low-resource-languages",
        title: "AI and Low Resource Languages",
        category: "Language Equity",
        icon: Languages,
        desc: "Addresses the critical challenge of developing AI models for indigenous African languages with limited digital text resources, ensuring millions of native speakers are not excluded from modern technology.",
        features: [
          "Development of specialized language models for indigenous African languages",
          "Creation of open-source conversational datasets and tokenizers",
          "Local translation and cross-lingual natural language processing capabilities",
          "Speech-to-text engines adapted to regional accents and vernaculars",
        ],
      },
      {
        id: "network-optimization",
        title: "AI-Driven Network Optimization for School Connectivity",
        category: "Connectivity & EdTech",
        icon: Wifi,
        desc: "Enhances internet connectivity in under-resourced schools through AI-based bandwidth management and caching, enabling smooth digital learning experiences under tight network constraints.",
        features: [
          "Dynamic bandwidth allocation prioritizing active educational portals",
          "Predictive maintenance for rural satellite and wireless infrastructure",
          "Cost optimization reducing ISP data bills for educational institutions",
          "Offline-first local caching of verified learning materials",
        ],
      },
      {
        id: "ai-future-of-work",
        title: "AI and the Future of Work in Africa (AIFUW)",
        category: "Workforce & Policy",
        icon: Briefcase,
        desc: "Explores the impact of automated intelligence on employment and workforce transitions in Africa, formulating upskilling pathways and policy recommendations so adoption empowers local workers.",
        features: [
          "Empirical research on AI adoption impacts across African labor markets",
          "Technical skills gap analysis and structured reskilling roadmaps",
          "Data-driven policy recommendations for regional governments",
          "Apprenticeships bridging university learners into AI engineering",
        ],
      },
      {
        id: "precision-agriculture",
        title: "Precision Agriculture AI",
        category: "Agriculture & Food",
        icon: Sprout,
        desc: "Deploys machine learning to optimize smallholder farming practices, increase crop yields, and reinforce food security through real-time soil, pest, and climate monitoring.",
        features: [
          "Crop health monitoring via drone imagery and satellite feeds",
          "Predictive analytics for localized weather extremes and pest outbreaks",
          "Precision resource guidance for drip irrigation and organic fertilizer use",
          "Fair-value market price forecasting for smallholder harvests",
        ],
      },
      {
        id: "ai-educational-platforms",
        title: "AI-Powered Educational Platforms",
        category: "Adaptive Education",
        icon: GraduationCap,
        desc: "Creates intelligent tutoring engines that adapt to student pacing across Africa, bridging severe teacher shortages and unequal access to textbooks.",
        features: [
          "Adaptive pedagogical pathways responding to student mastery and gaps",
          "Bilingual English/Kiswahili curriculum delivery",
          "Ultra-lightweight offline-capable learning modules",
          "Continuous progress tracking aligned with national education frameworks",
        ],
      },
    ],
  },
  sw: {
    eyebrow: "Miradi Yetu",
    title: "Suluhisho za Akili Bandia kwa Mazingira Halisi ya Afrika",
    lead: "Katika SavannaMind, tunaunda na kufanya majaribio ya miradi ya kisasa ya Akili Bandia inayoshughulikia changamoto halisi katika afya, usawa wa lugha, mtandao wa shule, ajira, kilimo, na elimu maalum.",
    getInvolvedHeading: "Shiriki Katika Miradi Yetu",
    getInvolvedLead: "Daima tunatafuta washirika, watafiti, na wafadhili kusaidia kusonga mbele miradi hii. Iwe una nia ya utafiti, maendeleo, ufadhili, au utekelezaji, kuna fursa nyingi za kushirikiana.",
    ctaContact: "Wasiliana Nasi Kuhusu Miradi",
    projects: [
      {
        id: "chai",
        title: "Community Health AI (CHAI)",
        category: "Afya ya Jamii",
        icon: HeartPulse,
        desc: "CHAI inaunda zana za Akili Bandia ili kuboresha huduma za afya ya jamii na matokeo ya kliniki barani Afrika, ikilenga vituo vya afya vya vijijini vinavyokosa vifaa vya kutosha.",
        features: [
          "Uchunguzi wa kusaidiwa na Akili Bandia kwa magonjwa ya kawaida na ya kuambukiza",
          "Ushauri wa kimatibabu mtandaoni kwa jamii za mbali",
          "Uchambuzi wa data za afya kusaidia mipango ya afya ya umma",
          "Uwezo wa kufanya kazi bila mtandao kupitia simu za wahudumu wa afya",
        ],
      },
      {
        id: "ai-low-resource-languages",
        title: "Akili Bandia na Lugha za Asili",
        category: "Usawa wa Lugha",
        icon: Languages,
        desc: "Inashughulikia changamoto ya kuunda mifano ya Akili Bandia kwa lugha za asili za Kiafrika zenye rasilimali chache mtandaoni, ili mamilioni wasitengwe kiteknolojia.",
        features: [
          "Uundaji wa mifano ya lugha maalum kwa lugha za asili za Kiafrika",
          "Kuweka wazi seti za data na zana za wazi kwa jamii ya watengenezaji",
          "Tafsiri ya papo hapo na usindikaji wa lugha ya asili",
          "Injini za utambuzi wa sauti zilizobinafsishwa kwa lafudhi za mitaa",
        ],
      },
      {
        id: "network-optimization",
        title: "Uboreshaji wa Mtandao wa Shule kwa Akili Bandia",
        category: "Mtandao na Elimu",
        icon: Wifi,
        desc: "Inaboresha muunganisho wa mtandao katika shule kupitia usimamizi wa data wa Akili Bandia, ikiruhusu ujifunzaji laini hata kwa kasi ya chini ya data.",
        features: [
          "Ugawaji wa data unaozingatia masomo ya wanafunzi kwanza",
          "Utabiri wa hitilafu za miundombinu ya satelaiti vijijini",
          "Kupunguza gharama za data kwa taasisi za elimu",
          "Uhifadhi wa nyenzo za kujifunzia kwenye kifaa ili zifunguke bila mtandao",
        ],
      },
      {
        id: "ai-future-of-work",
        title: "Akili Bandia na Mustakabali wa Kazi Barani Afrika (AIFUW)",
        category: "Nguvukazi na Sera",
        icon: Briefcase,
        desc: "Inachunguza jinsi Akili Bandia inavyoathiri soko la ajira barani Afrika, ikitengeneza njia za kukuza ujuzi na miongozo ya kisera kumnufaisha mfanyakazi.",
        features: [
          "Utafiti wa kina juu ya athari za Akili Bandia katika soko la ajira",
          "Uchambuzi wa mapengo ya ujuzi na mafunzo maalum",
          "Mapendekezo ya kisera kwa serikali na taasisi za umma",
          "Programu za mafunzo kazini kuunganisha wahitimu na soko",
        ],
      },
      {
        id: "precision-agriculture",
        title: "Kilimo cha Usahihi cha Akili Bandia",
        category: "Kilimo na Chakula",
        icon: Sprout,
        desc: "Inatumia Akili Bandia kuboresha shughuli za kilimo kwa wakulima wadogo, kuongeza mavuno na kuimarisha usalama wa chakula.",
        features: [
          "Ufuatiliaji wa afya ya mimea kupitia picha za satelaiti na ndege zisizo na rubani",
          "Utabiri wa hali ya hewa na milipuko ya wadudu waharibifu",
          "Miongozo sahihi ya matumizi ya maji na mbolea",
          "Utabiri wa bei halisi za soko kumlinda mkulima mdogo",
        ],
      },
      {
        id: "ai-educational-platforms",
        title: "Majukwaa ya Elimu Yanayoendeshwa na Akili Bandia",
        category: "Elimu Shirikishi",
        icon: GraduationCap,
        desc: "Inaunda majukwaa ya kujifunzia yanayobadilika kulingana na uwezo wa kila mwanafunzi, ikiziba pengo la uhaba wa walimu na vitabu.",
        features: [
          "Njia za kujifunzia zinazobadilika kulingana na uelewa wa mwanafunzi",
          "Maudhui yanayopatikana kwa Kiingereza na Kiswahili",
          "Moduli nyepesi zinazofanya kazi hata pasipo na mtandao",
          "Ufuatiliaji wa maendeleo unaoendana na mifumo ya kitaifa ya elimu",
        ],
      },
    ],
  },
};

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];
  const shell = shellCopy(locale);

  return (
    <article className="projects-page">
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 className="hero__title">{t.title}</h1>
            <span className="hero__rule" aria-hidden="true" />
            <p className="prose hero__lead">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-6)" }}>
            {t.projects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <div
                  key={proj.id}
                  id={proj.id}
                  className="surface"
                  style={{
                    padding: "var(--space-6)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-4)" }}>
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-gold)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                        }}
                      >
                        {proj.category}
                      </span>
                      <Icon size={24} strokeWidth={1.75} style={{ color: "var(--color-teal-bright)" }} />
                    </div>
                    <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)", color: "var(--color-text)" }}>
                      {proj.title}
                    </h2>
                    <p className="prose" style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>
                      {proj.desc}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--border)", paddingTop: "var(--space-4)" }}>
                      {proj.features.map((feat, fidx) => (
                        <li
                          key={fidx}
                          style={{
                            fontSize: "var(--text-xs)",
                            color: "var(--color-muted)",
                            marginBottom: "var(--space-2)",
                            display: "flex",
                            gap: "var(--space-2)",
                            alignItems: "flex-start",
                          }}
                        >
                          <CheckCircle2 size={14} style={{ color: "var(--color-teal-bright)", flexShrink: 0, marginTop: "2px" }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginTop: "var(--space-5)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--border)" }}>
                    <Link href={p(locale, "/contact")} className="text-link" style={{ fontSize: "var(--text-xs)" }}>
                      {t.ctaContact}
                      <ArrowRight size={14} strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section join">
        <div className="container">
          <div className="surface join__panel">
            <h2 className="join__title">{t.getInvolvedHeading}</h2>
            <p className="prose join__body">{t.getInvolvedLead}</p>
            <div className="cluster">
              <Link href={p(locale, "/contact")} className="btn btn--gold">
                {shell.contactCta}
              </Link>
              <Link href={p(locale, "/resources")} className="btn btn--ghost">
                {shell.exploreResources}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
