import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CloudSun,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Microscope,
  Shield,
  Sprout,
} from "lucide-react";
import {
  focusAreas,
  isLocale,
  p,
  shellCopy,
  type Locale,
} from "@/components/site-header";
import { routing } from "@/i18n/routing";

type Copy = typeof en;

const en = {
  heroEyebrow: "Savanna Mind",
  heroTitle: "AI Literacy for Every African",
  heroLead:
    "An African initiative harnessing AI to solve the continent's unique developmental challenges—responsibly and inclusively.",
  stats: {
    eyebrow: "Our targets",
    heading: "Where we are headed",
    items: [
      { value: "1,000+", label: "Lives Impacted (Target)" },
      { value: "100+", label: "Certifications Issued (Target)" },
      { value: "20%", label: "Faster Diagnosis (Target)" },
    ],
  },
  modules: {
    heading: "Our Platform Modules",
    intro: "Comprehensive AI solutions organized into focused platforms",
    items: [
      {
        title: "Learn",
        body: "Courses, bootcamps, certifications",
        href: "/learn",
      },
      {
        title: "Research",
        body: "Publications, projects, datasets",
        href: "/resources",
      },
      {
        title: "Innovation Lab",
        body: "Startups, pilots, AI solutions",
        href: "/projects",
      },
      {
        title: "Responsible AI",
        body: "Ethical AI frameworks",
        href: "/about",
      },
    ],
  },
  focus: {
    heading: "Our Focus Areas",
    intro: "Driving AI innovation across key sectors in Africa",
    seeHow: "See How",
    allAreas: "Explore all focus areas",
  },
  projects: {
    heading: "Projects",
    intro: "Innovative AI solutions making a difference",
    items: [
      { id: "chai", title: "Community Health AI (CHAI)" },
      { id: "languages", title: "AI and Low Resource Languages" },
      {
        id: "network",
        title: "AI-Driven Network Optimization for School Connectivity",
      },
    ],
    viewAll: "View All Projects",
  },
  join: {
    eyebrow: "Join Our Mission",
    heading: "Join Us in Advancing AI for Africa",
    body: "Whether you're a researcher, entrepreneur, or organization, there's a place for you in our mission.",
  },
};

const sw: Copy = {
  heroEyebrow: "Savanna Mind",
  heroTitle: "Elimu ya AI kwa Kila Mwafrika",
  heroLead:
    "Mpango wa Kiafrika unaotumia Akili Bandia kutatua changamoto za kipekee za maendeleo bara hili—kwa weledi na kujumuisha wote.",
  stats: {
    eyebrow: "Malengo Yetu",
    heading: "Tunakoelekea",
    items: [
      { value: "1,000+", label: "Maisha Yaliyoguswa (Lengo)" },
      { value: "100+", label: "Cheti Zilizotolewa (Lengo)" },
      { value: "20%", label: "Uchunguzi wa Haraka Zaidi (Lengo)" },
    ],
  },
  modules: {
    heading: "Moduli za Jukwaa Letu",
    intro: "Suluhisho kamili za Akili Bandia zilizopangwa katika majukwaa maalum",
    items: [
      { title: "Jifunze", body: "Kozi, kambi za mafunzo, cheti", href: "/learn" },
      { title: "Utafiti", body: "Machapisho, miradi, seti za data", href: "/resources" },
      {
        title: "Maabara ya Ubunifu",
        body: "Wanaoanzisha biashara, majaribio, suluhisho za Akili Bandia",
        href: "/projects",
      },
      {
        title: "Akili Bandia Yenye Maadili",
        body: "Mifumo ya Akili Bandia ya kimaadili",
        href: "/about",
      },
    ],
  },
  focus: {
    heading: "Maeneo Yetu ya Msisitizo",
    intro: "Kuendesha uvumbuzi wa Akili Bandia katika sekta kuu za Afrika",
    seeHow: "Tazama Jinsi",
    allAreas: "Tazama maeneo yote ya msisitizo",
  },
  projects: {
    heading: "Miradi",
    intro: "Suluhisho za Akili Bandia zenye ubunifu zinazoleta mabadiliko",
    items: [
      { id: "chai", title: "Community Health AI (CHAI)" },
      { id: "languages", title: "AI and Low Resource Languages" },
      {
        id: "network",
        title: "AI-Driven Network Optimization for School Connectivity",
      },
    ],
    viewAll: "Tazama Miradi Yote",
  },
  join: {
    eyebrow: "Jiunge na Dhamira Yetu",
    heading: "Jiunge Nasi Kuendeleza Akili Bandia kwa Afrika",
    body: "Iwe wewe ni mtafiti, mwanzilishi wa biashara, au taasisi—kuna nafasi kwako katika dhamira yetu.",
  },
};

const dictionaries: Record<Locale, Copy> = { en, sw };

const moduleIcons = [GraduationCap, Microscope, Lightbulb, Shield] as const;
const sectorIcons = {
  health: HeartPulse,
  climate: CloudSun,
  food: Sprout,
} as const;

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) {
    notFound();
  }
  const locale = params.locale as Locale;
  const t = dictionaries[locale];
  const shell = shellCopy(locale);
  const sectors = focusAreas(locale);

  return (
    <>
      {/* Hero — copy-first, restrained CSS graphic (no learner photo) */}
      <section id="home" className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1 className="hero__title">{t.heroTitle}</h1>
            <span className="hero__rule" aria-hidden="true" />
            <p className="prose hero__lead">{t.heroLead}</p>
            <div className="hero__actions cluster">
              <Link href={p(locale, "/learn")} className="btn btn--gold">
                {shell.startLearning}
              </Link>
              <Link href={p(locale, "/resources")} className="btn btn--ghost">
                {shell.exploreResources}
              </Link>
              <Link href={p(locale, "/contact")} className="btn btn--quiet">
                {shell.contactCta}
              </Link>
            </div>
          </div>
          <div className="hero__media" aria-hidden="true">
            <div className="hero__graphic">
              <span className="hero__graphic-ring hero__graphic-ring--1" />
              <span className="hero__graphic-ring hero__graphic-ring--2" />
              <span className="hero__graphic-ring hero__graphic-ring--3" />
              <span className="hero__graphic-core">
                  <HeartPulse size={40} strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="stats" aria-labelledby="stats-heading">
        <div className="container">
          <h2 id="stats-heading" className="visually-hidden">
            {t.stats.heading}
          </h2>
          <ul className="stats__grid">
            {t.stats.items.map((item) => (
              <li key={item.label} className="stats__item">
                <span className="stats__value">{item.value}</span>
                <span className="stats__label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions / modules */}
      <section id="solutions" className="section" aria-labelledby="solutions-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{shell.solutionsLabel}</p>
            <h2 id="solutions-heading">{t.modules.heading}</h2>
            <p className="prose section-lead">{t.modules.intro}</p>
          </div>
          <div className="module-grid">
            {t.modules.items.map((module, index) => {
              const Icon = moduleIcons[index];
              return (
                <Link
                  key={module.href}
                  href={p(locale, module.href)}
                  className={`surface module-card module-card--${index + 1}`}
                >
                  <span className="module-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3>{module.title}</h3>
                  <p>{module.body}</p>
                  <span className="module-card__cta" aria-hidden="true">
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus areas — exactly the three documented sectors */}
      <section id="focus" className="section focus" aria-labelledby="focus-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{shell.nav.focus}</p>
            <h2 id="focus-heading">{t.focus.heading}</h2>
            <p className="prose section-lead">{t.focus.intro}</p>
          </div>
          <div className="focus__list">
            {sectors.map((sector, index) => {
              const Icon = sectorIcons[sector.icon];
              return (
                <article key={sector.id} id={sector.id} className="focus-item">
                  <span className="focus-item__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="focus-item__body">
                    <h3 className="focus-item__title">
                      <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                      {sector.title}
                    </h3>
                    <p className="prose">{sector.body}</p>
                    <p className="focus-item__support">{sector.support}</p>
                    <Link
                      href={p(locale, `/focus-areas#${sector.id}`)}
                      className="text-link"
                    >
                      {t.focus.seeHow}
                      <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="section-foot">
            <Link href={p(locale, "/focus-areas")} className="btn btn--ghost">
              {t.focus.allAreas}
            </Link>
          </p>
        </div>
      </section>

      {/* Projects preview */}
      <section id="projects" className="section" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{shell.nav.projects}</p>
            <h2 id="projects-heading">{t.projects.heading}</h2>
            <p className="prose section-lead">{t.projects.intro}</p>
          </div>
          <div className="project-grid">
            {t.projects.items.map((project, index) => (
              <Link
                key={project.id}
                href={p(locale, "/projects")}
                className={`surface project-card project-card--${index + 1}`}
              >
                <div className="project-card__top">
                  <span className="project-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="module-card__icon" aria-hidden="true">
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>
                <h3>{project.title}</h3>
              </Link>
            ))}
          </div>
          <p className="section-foot">
            <Link href={p(locale, "/projects")} className="btn btn--ghost">
              {t.projects.viewAll}
            </Link>
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section id="contact" className="section join" aria-labelledby="join-heading">
        <div className="container">
          <div className="surface join__panel">
            <p className="eyebrow">{t.join.eyebrow}</p>
            <h2 id="join-heading" className="join__title">
              {t.join.heading}
            </h2>
            <p className="prose join__body">{t.join.body}</p>
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
    </>
  );
}
