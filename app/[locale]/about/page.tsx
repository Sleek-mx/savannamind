import Link from "next/link";
import { notFound } from "next/navigation";
import {
  GraduationCap,
  Microscope,
  Lightbulb,
  Shield,
  HeartHandshake,
  Target,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";
import { isLocale, p, shellCopy, type Locale } from "@/components/site-header";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const copy = {
  en: {
    eyebrow: "About SavannaMind",
    title: "Driving AI Innovation for Africa’s Development",
    lead: "SavannaMind is an African initiative dedicated to leveraging AI to solve Africa's unique developmental challenges—from climate resilience to healthcare access—through responsible, inclusive innovation.",
    vision: {
      heading: "Our Vision",
      body: "To be an African leader in AI and development, while advancing AI for Africa's future. We envision a continent where AI technology is harnessed to solve unique developmental challenges, creating sustainable solutions that improve the lives of millions across Africa.",
    },
    mission: {
      heading: "Our Mission",
      body: "We believe that AI has the power to transform Africa's future, and we are committed to ensuring that this transformation benefits all Africans.",
      points: [
        "Building Africa's AI talent through accessible education and training programs",
        "Developing AI solutions tailored to Africa's specific needs and contexts",
        "Fostering innovation and entrepreneurship in the AI space",
        "Advocating for ethical and responsible AI that reflects African values",
        "Creating partnerships that drive sustainable development across the continent",
      ],
    },
    pillarsHeading: "What We Do",
    pillarsIntro: "Four key focus areas designed to address critical aspects of AI development and deployment in Africa:",
    pillars: [
      {
        title: "Education & Training",
        body: "Comprehensive AI education including courses, bootcamps, scholarships, and mentorship opportunities to build a strong pipeline of talent across Africa.",
        icon: GraduationCap,
      },
      {
        title: "Research & Development",
        body: "Developing contextually relevant AI solutions that address Africa's unique challenges in healthcare, education, agriculture, and climate action.",
        icon: Microscope,
      },
      {
        title: "Innovation & Enterprise",
        body: "Supporting African AI startups through innovation hubs, funding access, incubators, and expert guidance to transform ideas into sustainable businesses.",
        icon: Lightbulb,
      },
      {
        title: "Ethical & Responsible AI",
        body: "Advocating for AI systems that are inclusive, ethical, and transparent, reflecting African values and promoting equity and fairness.",
        icon: Shield,
      },
    ],
    impactHeading: "Our Impact",
    impact: [
      { value: "1,000+", label: "Certifications Issued Annually" },
      { value: "10+", label: "AI Startups Launched Annually" },
      { value: "20%", label: "Faster Diagnosis in Healthcare" },
      { value: "15%", label: "Higher Yields in Agriculture" },
    ],
    valuesHeading: "Our Values",
    values: [
      { name: "Inclusivity", desc: "AI should benefit all Africans, regardless of background or location.", icon: Users },
      { name: "Innovation", desc: "Creative solutions to Africa's unique developmental challenges.", icon: Sparkles },
      { name: "Integrity", desc: "Operating with absolute transparency and ethical principles.", icon: Shield },
      { name: "Impact", desc: "Measuring success by positive change created in communities.", icon: Target },
      { name: "Partnership", desc: "Collaborating with diverse stakeholders to achieve shared goals.", icon: HeartHandshake },
    ],
    ctaHeading: "Join Us in Advancing AI for Africa",
    ctaBody: "Whether you're a researcher, entrepreneur, or organization, there's a place for you in our mission.",
  },
  sw: {
    eyebrow: "Kuhusu SavannaMind",
    title: "Kuendesha Uvumbuzi wa Akili Bandia kwa Maendeleo ya Afrika",
    lead: "SavannaMind ni mpango wa Kiafrika unaojitolea kutumia Akili Bandia kutatua changamoto za kipekee za maendeleo ya Afrika—kuanzia ustahimilivu wa tabianchi hadi upatikanaji wa afya—kupitia uvumbuzi wa uwajibikaji na shirikishi.",
    vision: {
      heading: "Maono Yetu",
      body: "Kuwa kiongozi wa Kiafrika katika Akili Bandia na maendeleo, huku tukiendeleza Akili Bandia kwa mustakabali wa Afrika. Tunalenga bara ambapo teknolojia ya Akili Bandia inatumiwa kutatua changamoto za kipekee za kimaendeleo, na kujenga suluhisho endelevu zinazoboresha maisha ya mamilioni ya Waafrika.",
    },
    mission: {
      heading: "Dhamira Yetu",
      body: "Tunaamini kwamba Akili Bandia ina uwezo wa kubadilisha mustakabali wa Afrika, na tumejitolea kuhakikisha kuwa mabadiliko haya yananufaisha Waafrika wote.",
      points: [
        "Kujenga vipaji vya Akili Bandia barani Afrika kupitia elimu na programu za mafunzo zinazofikika",
        "Kukuza suluhisho za Akili Bandia zilizoundwa mahsusi kulingana na mazingira na mahitaji ya Afrika",
        "Kukuza uvumbuzi na ujasiriamali katika uwanja wa Akili Bandia",
        "Kutetea Akili Bandia yenye maadili na uwajibikaji inayoakisi maadili ya Kiafrika",
        "Kujenga ushirikiano unaoendesha maendeleo endelevu katika bara zima",
      ],
    },
    pillarsHeading: "Tunachofanya",
    pillarsIntro: "Maeneo manne makuu yaliyoundwa kushughulikia vipengele muhimu vya maendeleo na utekelezaji wa Akili Bandia barani Afrika:",
    pillars: [
      {
        title: "Elimu na Mafunzo",
        body: "Elimu kamili ya Akili Bandia ikijumuisha kozi, kambi za mafunzo, ufadhili wa masomo, na fursa za ushauri ili kujenga vipaji dhabiti kote Afrika.",
        icon: GraduationCap,
      },
      {
        title: "Utafiti na Maendeleo",
        body: "Kukuza suluhisho za Akili Bandia zinazolenga changamoto za kipekee za Afrika katika afya, elimu, kilimo, na hatua za tabianchi.",
        icon: Microscope,
      },
      {
        title: "Uvumbuzi na Biashara",
        body: "Kusaidia kampuni changa za Akili Bandia za Kiafrika kupitia vituo vya uvumbuzi, ufadhili, na ushauri wa kitaalamu.",
        icon: Lightbulb,
      },
      {
        title: "Akili Bandia Yenye Maadili",
        body: "Kutetea mifumo ya Akili Bandia iliyo shirikishi, yenye maadili, na ya wazi, inayoakisi maadili ya Kiafrika na usawa.",
        icon: Shield,
      },
    ],
    impactHeading: "Athari Yetu",
    impact: [
      { value: "1,000+", label: "Cheti Zilizotolewa Kila Mwaka" },
      { value: "10+", label: "Kampuni Changa Zilizozinduliwa Kila Mwaka" },
      { value: "20%", label: "Uchunguzi wa Haraka Zaidi katika Afya" },
      { value: "15%", label: "Mavuno ya Juu Zaidi katika Kilimo" },
    ],
    valuesHeading: "Maadili Yetu",
    values: [
      { name: "Ujumuishi", desc: "Akili Bandia inapaswa kuwanufaisha Waafrika wote bila kujali asili au eneo.", icon: Users },
      { name: "Uvumbuzi", desc: "Suluhisho za kibunifu kwa changamoto za kipekee za kimaendeleo za Afrika.", icon: Sparkles },
      { name: "Uadilifu", desc: "Kufanya kazi kwa uwazi kamili na misingi ya kimaadili.", icon: Shield },
      { name: "Athari", desc: "Kupima mafanikio kwa mabadiliko chanya yanayoletwa katika jamii.", icon: Target },
      { name: "Ushirikiano", desc: "Kushirikiana na wadau mbalimbali kufikia malengo ya pamoja.", icon: HeartHandshake },
    ],
    ctaHeading: "Jiunge Nasi Kuendeleza Akili Bandia kwa Afrika",
    ctaBody: "Iwe wewe ni mtafiti, mwanzilishi wa biashara, au taasisi—kuna nafasi kwako katika dhamira yetu.",
  },
};

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = copy[locale];
  const shell = shellCopy(locale);

  return (
    <article className="about-page">
      {/* Editorial Header */}
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

      {/* Vision & Mission Split */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-6)" }}>
            <div className="surface" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-md)" }}>
              <p className="eyebrow">{t.vision.heading}</p>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>
                {t.vision.heading}
              </h2>
              <p className="prose">{t.vision.body}</p>
            </div>

            <div className="surface" style={{ padding: "var(--space-6)", borderRadius: "var(--radius-md)" }}>
              <p className="eyebrow">{t.mission.heading}</p>
              <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>
                {t.mission.heading}
              </h2>
              <p className="prose" style={{ marginBottom: "var(--space-4)" }}>{t.mission.body}</p>
              <ul style={{ listStyle: "disc", paddingLeft: "var(--space-5)", color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>
                {t.mission.points.map((pt, i) => (
                  <li key={i} style={{ marginBottom: "var(--space-2)" }}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars / What We Do */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.pillarsHeading}</h2>
            <p className="prose section-lead">{t.pillarsIntro}</p>
          </div>
          <div className="module-grid">
            {t.pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`surface module-card module-card--${idx + 1}`}>
                  <span className="module-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Measured Impact */}
      <section className="stats" style={{ margin: "var(--space-8) 0" }}>
        <div className="container">
          <h2 className="visually-hidden">{t.impactHeading}</h2>
          <ul className="stats__grid">
            {t.impact.map((stat, i) => (
              <li key={i} className="stats__item">
                <span className="stats__value">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.valuesHeading}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-5)" }}>
            {t.values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} className="surface" style={{ padding: "var(--space-5)", borderRadius: "var(--radius-md)" }}>
                  <span style={{ color: "var(--color-gold)", display: "inline-block", marginBottom: "var(--space-3)" }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </span>
                  <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>{val.name}</h3>
                  <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Join */}
      <section className="section join">
        <div className="container">
          <div className="surface join__panel">
            <h2 className="join__title">{t.ctaHeading}</h2>
            <p className="prose join__body">{t.ctaBody}</p>
            <div className="cluster">
              <Link href={p(locale, "/contact")} className="btn btn--gold">
                {shell.contactCta}
              </Link>
              <Link href={p(locale, "/projects")} className="btn btn--ghost">
                {shell.nav.projects}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
