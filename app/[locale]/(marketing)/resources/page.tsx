import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Database,
  ExternalLink,
  Code,
  Users,
  Video,
  ArrowRight,
} from "lucide-react";
import { isLocale, p, shellCopy, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "Resources & Knowledge Hub",
    title: "Research, Open Datasets & Learning Materials",
    lead: "Access peer-reviewed publications, open-source models for African languages, community toolkits, and curated educational resources.",
    sections: {
      publications: "Publications & Policy",
      training: "Education & Certifications",
      openSource: "Open Source Tools & Datasets",
      platforms: "Training & Collaborative Platforms",
    },
    publicationsList: [
      {
        title: "AI in African Healthcare: Low-Resource Clinical Models",
        type: "Research Paper",
        desc: "Empirical evaluation of offline computer-vision diagnostic aids in sub-Saharan public clinics.",
      },
      {
        title: "Ethical AI Governance Frameworks for Africa",
        type: "Policy Brief",
        desc: "Operational guidelines for data sovereignty, child protections, and inclusive algorithm audits.",
      },
      {
        title: "School Connectivity Optimization via Smart Caching",
        type: "Project Report",
        desc: "Field metrics and bandwidth cost reductions across 40 connected secondary schools.",
      },
    ],
    trainingList: [
      {
        title: "Machine Learning Foundations for Africa",
        type: "Online Course",
        desc: "Practical curriculum from Python essentials to supervised models with real regional datasets.",
      },
      {
        title: "Hands-On AI Engineering Bootcamp",
        type: "Intensive Program",
        desc: "12-week hybrid bootcamp pairing learners with active industry projects across Nairobi and remote.",
      },
      {
        title: "Savanna Certified AI Practitioner",
        type: "Professional Certification",
        desc: "Standardized credential validating practical deployment competency and ethical AI adherence.",
      },
    ],
    openSourceList: [
      {
        title: "African Vernacular Language Embeddings",
        type: "Pre-trained Models",
        desc: "Open weights and tokenizers fine-tuned for low-resource regional dialects.",
      },
      {
        title: "Open Agri-Vision Dataset",
        type: "Curated Dataset",
        desc: "Over 50,000 labeled images of local crop blights, soil profiles, and pest varieties.",
      },
      {
        title: "Savanna Edge-Infer Toolkit",
        type: "Developer Framework",
        desc: "Ultra-compact inference runtime designed for low-power ARM devices and feature phones.",
      },
    ],
    platformsList: [
      { title: "SavannaMind Learning Hub", desc: "Interactive student portal with guided tracks and autograded exercises.", icon: GraduationCap },
      { title: "Developer Community Forums", desc: "Peer-to-peer technical exchange, mentoring, and code assistance.", icon: Users },
      { title: "Public Code Repositories", desc: "Open-source reference implementations, starter notebooks, and API clients.", icon: Code },
      { title: "Monthly Research Webinars", desc: "Live masterclasses hosted by leading African and global AI scientists.", icon: Video },
    ],
    ctaTitle: "Access Premium Datasets & Co-Authorship",
    ctaBody: "Academic institutions, NGOs, and enterprise researchers can request specialized data cohorts and joint research access.",
  },
  sw: {
    eyebrow: "Rasilimali na Kituo cha Maarifa",
    title: "Utafiti, Seti Huria za Data na Nyenzo za Kujifunzia",
    lead: "Pata machapisho ya kitaaluma, mifano ya wazi ya lugha za Kiafrika, zana za jamii, na nyenzo za elimu zilizochaguliwa kwa uangalifu.",
    sections: {
      publications: "Machapisho na Sera",
      training: "Elimu na Cheti",
      openSource: "Zana Huria na Seti za Data",
      platforms: "Majukwaa ya Mafunzo na Ushirikiano",
    },
    publicationsList: [
      {
        title: "Akili Bandia katika Afya ya Afrika: Mifumo ya Kliniki za Vijijini",
        type: "Karatasi ya Utafiti",
        desc: "Tathmini ya kiutendaji ya zana za uchunguzi wa picha za kimatibabu zinazofanya kazi bila mtandao.",
      },
      {
        title: "Mfumo wa Usimamizi wa Maadili ya Akili Bandia kwa Afrika",
        type: "Mwongozo wa Kisera",
        desc: "Miongozo ya ulinzi wa data za watoto, uhuru wa kidijitali, na ukaguzi wa algoritemu.",
      },
      {
        title: "Uboreshaji wa Mtandao wa Shule Kupitia Uhifadhi wa Karibu",
        type: "Ripoti ya Mradi",
        desc: "Matokeo ya uwanjani na upunguzaji wa gharama za mtandao katika shule 40 za upili.",
      },
    ],
    trainingList: [
      {
        title: "Misingi ya Kujifunza kwa Mashine kwa Afrika",
        type: "Kozi ya Mtandaoni",
        desc: "Mtaala wa vitendo kuanzia misingi ya Python hadi ujenzi wa mifano kwa data za ndani.",
      },
      {
        title: "Kambi ya Mafunzo ya Uhandisi wa Akili Bandia",
        type: "Programu ya Kina",
        desc: "Kambi ya wiki 12 inayowaunganisha wanafunzi na miradi halisi ya kiviwanda Nairobi na kote nchini.",
      },
      {
        title: "Mtaalamu Aliyeidhinishwa wa Akili Bandia (Savanna)",
        type: "Cheti cha Kitaalamu",
        desc: "Cheti cha kitaifa kinachothibitisha umahiri wa utekelezaji na maadili ya Akili Bandia.",
      },
    ],
    openSourceList: [
      {
        title: "Mifano ya Lugha za Asili za Kiafrika",
        type: "Mifano Iliyofunzwa",
        desc: "Data wazi za maneno na sarufi zilizoboreshwa kwa lahaja za kienyeji zenye rasilimali chache mtandaoni.",
      },
      {
        title: "Seti ya Data ya Picha za Kilimo",
        type: "Seti Huria ya Data",
        desc: "Zaidi ya picha 50,000 za magonjwa ya mazao, udongo, na wadudu waharibifu barani Afrika.",
      },
      {
        title: "Zana ya Uendeshaji Nyepesi ya Savanna",
        type: "Mfumo wa Watengenezaji",
        desc: "Injini nyepesi iliyoundwa kufanya kazi kwenye vifaa vyenye uwezo mdogo na simu za kawaida.",
      },
    ],
    platformsList: [
      { title: "Jukwaa la Mafunzo la SavannaMind", desc: "Lango la wanafunzi lenye mafunzo maalum na mitihani inayojirekebisha yenyewe.", icon: GraduationCap },
      { title: "Mijadala ya Jamii ya Watengenezaji", desc: "Mawasiliano na ushauri wa kitaalamu kati ya wanafunzi na wahandisi.", icon: Users },
      { title: "Hifadhi ya Kanuni Huria (Code)", desc: "Mifano ya kanuni, miongozo ya kuanzia, na nyaraka za kiufundi.", icon: Code },
      { title: "Semina za Kila Mwezi za Utafiti", desc: "Vipindi vya moja kwa moja na wanasayansi wakuu wa Akili Bandia barani na kimataifa.", icon: Video },
    ],
    ctaTitle: "Pata Upatikanaji wa Seti Maalum za Data na Ushirikiano wa Utafiti",
    ctaBody: "Vyuo vikuu, mashirika yasiyo ya kiserikali, na watafiti wa kibiashara wanaweza kuomba data maalum na ushirikiano.",
  },
};

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];
  const shell = shellCopy(locale);

  return (
    <article className="resources-page">
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

      {/* Publications */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.sections.publications}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-5)" }}>
            {t.publicationsList.map((item, idx) => (
              <div key={idx} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                  {item.type}
                </span>
                <h3 style={{ fontSize: "var(--text-base)", margin: "var(--space-2) 0 var(--space-3)", color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="prose" style={{ fontSize: "var(--text-sm)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Certs */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{shell.solutionsLabel}</p>
            <h2>{t.sections.training}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-5)" }}>
            {t.trainingList.map((item, idx) => (
              <div key={idx} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-teal-bright)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                  {item.type}
                </span>
                <h3 style={{ fontSize: "var(--text-base)", margin: "var(--space-2) 0 var(--space-3)", color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="prose" style={{ fontSize: "var(--text-sm)", marginBottom: "var(--space-4)" }}>{item.desc}</p>
                <Link href={p(locale, "/learn")} className="text-link" style={{ fontSize: "var(--text-xs)" }}>
                  {shell.startLearning}
                  <ArrowRight size={13} strokeWidth={2} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Datasets & Tools */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.sections.openSource}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-5)" }}>
            {t.openSourceList.map((item, idx) => (
              <div key={idx} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                  {item.type}
                </span>
                <h3 style={{ fontSize: "var(--text-base)", margin: "var(--space-2) 0 var(--space-3)", color: "var(--color-text)" }}>
                  {item.title}
                </h3>
                <p className="prose" style={{ fontSize: "var(--text-sm)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{shell.solutionsLabel}</p>
            <h2>{t.sections.platforms}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)" }}>
            {t.platformsList.map((plat, idx) => {
              const Icon = plat.icon;
              return (
                <div key={idx} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                  <Icon size={24} strokeWidth={1.75} style={{ color: "var(--color-teal-bright)", marginBottom: "var(--space-3)" }} />
                  <h3 style={{ fontSize: "var(--text-base)", marginBottom: "var(--space-2)" }}>{plat.title}</h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>{plat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section join">
        <div className="container">
          <div className="surface join__panel">
            <h2 className="join__title">{t.ctaTitle}</h2>
            <p className="prose join__body">{t.ctaBody}</p>
            <div className="cluster">
              <Link href={p(locale, "/contact")} className="btn btn--gold">
                {shell.contactCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
