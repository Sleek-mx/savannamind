import Link from "next/link";
import { routing, type Locale } from "@/i18n/routing";
import { LangSwitch } from "@/components/lang-switch";

export { routing };
export type { Locale };

export const CONTACT_EMAIL = "info@savannamind.com";
export const CONTACT_PHONE = "+254 746 125 181";
export const CONTACT_PHONE_HREF = "tel:+254746125181";
export const OFFICE_ADDRESS = "Delta Riverside Office Park, Nairobi, Kenya";
export const DIRECTIONS_HREF =
  "https://maps.google.com/?q=Delta+Riverside+Office+Park+Nairobi";

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

/** Localized route path: p("en", "/about") -> "/en/about", p("sw", "/") -> "/sw" */
export function p(locale: Locale, path = "/"): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

type ShellCopy = typeof enShell;

const enShell = {
  langAttribute: "en",
  langName: "English",
  wordmark: "savanna mind",
  tagline: "Where Algorithms Serve Communities",
  skipToMain: "Skip to main content",
  menuLabel: "Menu",
  closeLabel: "Close menu",
  langSwitchLabel: "Change language",
  siteNavLabel: "Primary",
  sectionNavLabel: "Sections",
  solutionsLabel: "Solutions",
  startLearning: "Start Learning",
  exploreResources: "Explore Resources",
  contactCta: "Contact Us",
  nav: {
    home: "Home",
    about: "About Us",
    focus: "Focus Areas",
    projects: "Projects",
    resources: "Resources",
    contact: "Contact Us",
  },
  solutions: [
    { title: "Learn", body: "Courses, bootcamps, certifications", href: "/learn" },
    { title: "Research", body: "Publications, projects, datasets", href: "/resources" },
    { title: "Innovation Lab", body: "Startups, pilots, AI solutions", href: "/projects" },
    { title: "Responsible AI", body: "Ethical AI frameworks", href: "/about" },
  ],
  footer: {
    blurb:
      "Advancing AI for Africa's Future through research, education, and innovation.",
    quickLinks: "Quick Links",
    popularLinks: "Popular Links",
    contactTitle: "Contact",
    partnerships: "Partnerships",
    supportUs: "Support Us",
    sustainability: "Sustainability Goals",
    faqs: "FAQs",
    rights: "© 2026 SavannaMind. All Rights Reserved.",
  },
};

const swShell: ShellCopy = {
  langAttribute: "sw",
  langName: "Kiswahili",
  wordmark: "savanna mind",
  tagline: "Ambapo Algoritemu Hutumikia Jamii",
  skipToMain: "Ruka hadi maudhui makuu",
  menuLabel: "Menyu",
  closeLabel: "Funga menyu",
  langSwitchLabel: "Badilisha lugha",
  siteNavLabel: "Urambazaji Mkuu",
  sectionNavLabel: "Sehemu",
  solutionsLabel: "Suluhisho",
  startLearning: "Anza Kujifunza",
  exploreResources: "Tazama Rasilimali",
  contactCta: "Wasiliana Nasi",
  nav: {
    home: "Nyumbani",
    about: "Kuhusu Sisi",
    focus: "Maeneo ya Msisitizo",
    projects: "Miradi",
    resources: "Rasilimali",
    contact: "Wasiliana Nasi",
  },
  solutions: [
    { title: "Jifunze", body: "Kozi, kambi za mafunzo, cheti", href: "/learn" },
    { title: "Utafiti", body: "Machapisho, miradi, seti za data", href: "/resources" },
    {
      title: "Maabara ya Ubunifu",
      body: "Wanaoanzisha biashara, majaribio, suluhisho za Akili Bandia",
      href: "/projects",
    },
    { title: "Akili Bandia Yenye Maadili", body: "Mifumo ya Akili Bandia ya kimaadili", href: "/about" },
  ],
  footer: {
    blurb:
      "Kuendeleza Akili Bandia kwa Mustakabali wa Afrika kupitia utafiti, elimu, na uvumbuzi.",
    quickLinks: "Viungo vya Haraka",
    popularLinks: "Viungo Maarufu",
    contactTitle: "Wasiliano",
    partnerships: "Ushirikiano",
    supportUs: "Tusaidie",
    sustainability: "Lengo za Uendelevu",
    faqs: "Maswali Yanayoulizwa Mara Kwa Mara",
    rights: "© 2026 SavannaMind. Haki zote zimehifadhiwa.",
  },
};

const shells: Record<Locale, ShellCopy> = { en: enShell, sw: swShell };

export function shellCopy(locale: Locale): ShellCopy {
  return shells[locale];
}

/**
 * Progressive enhancement only (no framework state):
 * <details> navigation closes after a link is used or Escape is pressed.
 */
const shellEnhancements = `
(function () {
  var OPEN = document.querySelectorAll("details.nav-disclosure");
  for (var d = 0; d < OPEN.length; d++) {
    (function (el) {
      var anchors = el.querySelectorAll("a");
      for (var j = 0; j < anchors.length; j++) {
        anchors[j].addEventListener("click", function () {
          el.removeAttribute("open");
        });
      }
    })(OPEN[d]);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    for (var k = 0; k < OPEN.length; k++) {
      OPEN[k].removeAttribute("open");
    }
  });
})();
`;

/* ------------------------------------------------------------------ */
/* Shared focus-area copy — the three documented areas, verbatim EN.   */
/* ------------------------------------------------------------------ */

export type FocusSector = {
  id: string;
  title: string;
  body: string;
  support: string;
  icon: "health" | "climate" | "food";
};

const focusEn: FocusSector[] = [
  {
    id: "healthcare-access",
    title: "Healthcare Access",
    icon: "health",
    body: "Across Africa, millions lack access to quality healthcare. Our AI solutions—from TB and pneumonia detection to telemedicine platforms—are transforming healthcare delivery, enabling faster diagnoses and saving lives in communities that need it most.",
    support:
      "AI diagnostic tools, telemedicine platforms, health data analytics, and mobile-first healthcare delivery.",
  },
  {
    id: "climate-vulnerability",
    title: "Climate Vulnerability",
    icon: "climate",
    body: "Climate change hits Africa hardest—droughts, floods, and extreme weather threaten millions. Our AI models predict climate risks, power early warning systems, and help communities build resilience before disasters strike.",
    support:
      "Climate prediction models, early warning systems, disaster response coordination, and community resilience tools.",
  },
  {
    id: "food-insecurity",
    title: "Food Insecurity",
    icon: "food",
    body: "Over 250 million Africans face food insecurity. Our AI tools give farmers real-time insights on soil health, weather, and pest threats—boosting yields, reducing waste, and building sustainable livelihoods for farming communities.",
    support:
      "Smart crop monitoring, pest and disease prediction, precision irrigation, and market price forecasting.",
  },
];

const focusSw: FocusSector[] = [
  {
    id: "healthcare-access",
    title: "Ufikiaji wa Huduma za Afya",
    icon: "health",
    body: "Kote barani Afrika, mamilioni hawapati huduma bora za afya. Suluhisho zetu za Akili Bandia—kuanzia ugunduzi wa TB na nimonia hadi majukwaa ya tiba mtandaoni—zimebadilisha utoaji wa huduma za afya, zikiruhusu uchunguzi wa haraka na kuokoa maisha katika jamii zinazohitaji msaada zaidi.",
    support:
      "Zana za uchunguzi za Akili Bandia, majukwaa ya tiba mtandaoni, uchambuzi wa data za afya, na utoaji wa huduma za afya unaopewa kipaumbele simu.",
  },
  {
    id: "climate-vulnerability",
    title: "Udhaifu wa Mabadiliko ya Tabianchi",
    icon: "climate",
    body: "Mabadiliko ya tabianchi yanaathiri Afrika zaidi—ukame, mafuriko, na hali kali za hewa vinaweka mamilioni katika hatari. Mifano yetu ya Akili Bandia inatabiri hatari za tabianchi, inakuza mifumo ya tahadhari ya mapema, na kusaidia jamii kujenga uwezo wa kustahimili kabla ya majanga kutokea.",
    support:
      "Mifumo ya utabiri wa tabianchi, mifumo ya tahadhari ya mapema, uratibu wa majibu ya maafa, na zana za uwezo wa jamii.",
  },
  {
    id: "food-insecurity",
    title: "Uhaba wa Chakula",
    icon: "food",
    body: "Zaidi ya Waafrika milioni 250 wanakabiliwa na ukosefu wa chakula. Zana zetu za Akili Bandia zinawapa wakulaji maarifa ya wakati halisi kuhusu afya ya udongo, hali ya hewa, na vitisho vya wadudu—zikiongeza mavuno, zikipunguza upotevu, na kujenga maisha endelevu kwa jamii za kilimo.",
    support:
      "Ufuatiliaji wa akili wa mazao, utabiri wa wadudu na magonjwa, umwagiliaji sahihi, na utabiri wa bei za soko.",
  },
];

export function focusAreas(locale: Locale): FocusSector[] {
  return locale === "en" ? focusEn : focusSw;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = shellCopy(locale);
  const simpleNav = [
    { label: t.nav.home, href: p(locale, "/") },
    { label: t.nav.about, href: p(locale, "/about") },
    { label: t.nav.focus, href: p(locale, "/focus-areas") },
    { label: t.nav.projects, href: p(locale, "/projects") },
    { label: t.nav.resources, href: p(locale, "/resources") },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          href={p(locale, "/")}
          className="brand"
          aria-label={`${t.wordmark} — ${t.nav.home}`}
        >
          <img
            src="/logo-full.png"
            alt=""
            width={34}
            height={34}
            className="brand__mark"
          />
          <span className="brand__word">{t.wordmark}</span>
        </Link>

        <nav className="main-nav" aria-label={t.siteNavLabel}>
          <ul className="main-nav__list">
            <li>
              <Link href={p(locale, "/")} className="main-nav__link">
                {t.nav.home}
              </Link>
            </li>
            <li className="nav-solutions">
              <details className="nav-disclosure">
                <summary className="main-nav__link main-nav__summary">
                  {t.solutionsLabel}
                </summary>
                <div className="nav-solutions__panel">
                  <ul className="nav-solutions__list">
                    {t.solutions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={p(locale, item.href)}
                          className="nav-solutions__link"
                        >
                          <span className="nav-solutions__title">
                            {item.title}
                          </span>
                          <span className="nav-solutions__body">
                            {item.body}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
            {simpleNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="main-nav__link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={p(locale, "/contact")}
                className="main-nav__link main-nav__link--contact"
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <LangSwitch locale={locale} label={t.langSwitchLabel} />
          <Link
            href={p(locale, "/login")}
            className="text-sm font-semibold text-white/90 hover:text-[#FAAB36] px-2.5 py-1.5 transition-colors hidden sm:inline-block"
          >
            {locale === "sw" ? "Ingia" : "Log In"}
          </Link>
          <Link href={p(locale, "/signup")} className="btn btn--gold site-header__cta">
            {locale === "sw" ? "Jisajili" : "Sign Up"}
          </Link>
          <details className="nav-mobile nav-disclosure">
            <summary className="nav-mobile__trigger">{t.menuLabel}</summary>
            <div className="nav-mobile__panel">
              <nav aria-label={t.sectionNavLabel}>
                <ul className="nav-mobile__list">
                  {simpleNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="nav-mobile__link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <span className="nav-mobile__heading">{t.solutionsLabel}</span>
                    <ul className="nav-mobile__sublist">
                      {t.solutions.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={p(locale, item.href)}
                            className="nav-mobile__link nav-mobile__link--sub"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link href={p(locale, "/contact")} className="nav-mobile__link">
                      {t.nav.contact}
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="nav-mobile__actions">
                <Link href={p(locale, "/signup")} className="btn btn--gold">
                  {locale === "sw" ? "Jisajili Bure" : "Sign Up Free"}
                </Link>
                <Link href={p(locale, "/login")} className="btn btn--ghost">
                  {locale === "sw" ? "Ingia kwenye Akaunti" : "Log In to Account"}
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: shellEnhancements }} />
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = shellCopy(locale);
  const quickLinks = [
    { label: t.nav.about, href: p(locale, "/about") },
    { label: t.nav.focus, href: p(locale, "/focus-areas") },
    { label: t.nav.projects, href: p(locale, "/projects") },
    { label: t.nav.resources, href: p(locale, "/resources") },
    { label: t.nav.contact, href: p(locale, "/contact") },
    { label: t.startLearning, href: p(locale, "/learn") },
  ];
  const popularLinks = [
    { label: t.footer.partnerships, href: p(locale, "/contact") },
    { label: t.footer.supportUs, href: p(locale, "/contact") },
    { label: t.footer.sustainability, href: p(locale, "/focus-areas") },
    { label: t.footer.faqs, href: p(locale, "/contact") },
  ];

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link
            href={p(locale, "/")}
            className="brand"
            aria-label={`${t.wordmark} — ${t.nav.home}`}
          >
            <img src="/logo-full.png" alt="" width={30} height={30} className="brand__mark" />
            <span className="brand__word">{t.wordmark}</span>
          </Link>
          <p className="site-footer__tagline">{t.footer.blurb}</p>
        </div>
        <nav className="site-footer__nav" aria-label={t.footer.quickLinks}>
          <h2 className="site-footer__heading">{t.footer.quickLinks}</h2>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <h2 className="site-footer__heading">{t.footer.popularLinks}</h2>
          <ul>
            {popularLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer__contact">
          <h2 className="site-footer__heading">{t.footer.contactTitle}</h2>
          <p className="site-footer__tagline">{OFFICE_ADDRESS}</p>
          <p>
            <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <div className="site-footer__lang">
            <LangSwitch locale={locale} label={t.langSwitchLabel} />
          </div>
        </div>
      </div>
      <div className="container site-footer__legal">
        <small>{t.footer.rights}</small>
      </div>
    </footer>
  );
}
