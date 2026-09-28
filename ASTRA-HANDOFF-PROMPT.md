# Savanna Mind — Astra continuation prompt

Copy everything below the line into a fresh Cursor chat. Open the **code repo** as the workspace (`/Volumes/Macsie_SSD/Github/SleekMX/savannamind`), not this client folder.

---

## Mission

Complete the Savanna Mind website rebuild and Learn Studio prototype so it is **honest, bilingual, demo-ready, and visually consistent** — without deploying, without inventing production backend, and without treating 2026 KPI targets as proven results.

You are continuing a live, dirty working tree. Read the repo first. Do not trust older prompts.

**Ignore** `/Volumes/Macsie_SSD/Github/SleekMX/savannamind/CONTINUATION-PROMPT.md` — it is stale. The Contact/Learn `onSubmit` Server Component build blocker is already fixed.

**Ignore** `README.md` as a product spec — it still describes the superseded static `index.html`.

**Product spec (binding):** `SPECIFICATION.md` in the repo (same content as `LEARN_PLATFORM_SPEC.md` in the client folder). Follow sections 2–8 for personas, missions, tutor guardrails, and Kenyan privacy. Spec status still says “no website code”; that sentence is outdated — the Next app exists.

---

## Two folders (do not mix them)

### 1. Code repo (work here)

`/Volumes/Macsie_SSD/Github/SleekMX/savannamind`

- Branch: `feat/savannamind-full-rebuild` — stay on it. No switch, reset, rebase, force-push, `git clean`.
- Remote: `origin https://github.com/Sleek-mx/savannamind.git`
- Stack: Next.js **14.2.35** App Router, React **18.3.1**, next-intl **3.26.5**, Tailwind **3.4.17**, TypeScript **5.9.3**, lucide-react **1.48.0**, motion **13.4.4**, clsx, tailwind-merge.
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Local preview (if still up): `http://localhost:3711` — PID may have changed. If 3711 is busy, pick another free port. **Never** pass `--hostname 127.0.0.1`. Never `pkill`/`killall`. Kill only a Savanna PID whose cwd is this repo. Leave unrelated Next apps alone (there has been a `study-command-center` on port 3000).

**Git is intentionally dirty.** Committed so far: `SPECIFICATION.md`, `README.md`, legacy `index.html`, `kibo_3d.jpg`, `logo.png`, `vercel.json`. Almost the entire Next app is **untracked**: `app/`, `components/`, `i18n/`, `lib/`, `middleware.ts`, `package.json`, `package-lock.json`, `next.config.mjs`, `postcss.config.js`, `tsconfig.json`, `.gitignore`, `public/`, `screenshots/`, `.env.example`, `CONTINUATION-PROMPT.md`. `vercel.json` has uncommitted edits. Do not discard this work.

### 2. Client / source-of-truth docs (read-only unless asked)

`/Volumes/Macsie_SSD/Mac Archive/Documents/Clientele/Savanna Mind`

| File | Role |
|---|---|
| `Savannamind 26.09.26. .pptx` | Brand + strategy deck (14 slides). Primary facts. |
| `LEARN_PLATFORM_SPEC.md` | Product spec (duplicate of repo `SPECIFICATION.md`). |
| `progress.md` | Last marketing-site checkpoint (forms, i18n, screenshots). Partially stale vs Learn Studio. |
| `hero section.png` | Learner photo — used on Learn / studio, **not** the marketing home hero. |
| `Savanna mind logo.png` | Full wordmark source. |
| `assets-savannamind-logo.png` | Smaller logo used in curriculum PDF. |
| `design-inspo/` | Generated Learn images + `IMAGE-GENERATION-BRIEF.md`. Already copied into `public/learn/`. |
| `screenshots/` | Older marketing screenshots. Repo `screenshots/` is newer. |
| `.site-copy/*.md` | Scrapes of live savannamind.com (reference, not to paste blindly). |
| `sources/` | UNESCO / OECD / Kenya National AI Strategy PDFs for curriculum grounding. |
| `build_curriculum_pdf.py` | Full English curriculum PDF generator. |
| `Savanna Mind AI Curriculum.pdf` | Generated EN curriculum. |
| `build_bilingual_curriculum_pdf.py` | Stub EN/SW PDF — currently a thin outline, not the real curriculum. |
| `Savanna Mind AI Curriculum - EN SW.pdf` | Stub output. |

Do not overwrite originals. Do not produce `.pptx`. Do not send personal data or credentials to external services.

---

## What is already built

### Marketing site (dark teal)

Routes for locales `en` and `sw` (`localePrefix: "always"`):

- `/` → 307 to `/en`
- `/en`, `/sw`
- `/[locale]/about`
- `/[locale]/projects`
- `/[locale]/resources`
- `/[locale]/contact`
- `/[locale]/focus-areas`
- `/[locale]/learn` — marketing Learn page + waitlist preview
- `/[locale]/learn/studio` — interactive product
- `/[locale]/learn/studio/lesson/[moduleId]` — `m0 | agr | hlt | edu | biz | cap`
- `/[locale]/learn/studio/certificate`

Shared chrome: `components/site-header.tsx` (header + footer + `p()`, `isLocale`, contact constants), `components/lang-switch.tsx` (Client; preserves path + hash), `components/contact-inquiry-form.tsx`, `components/learn-waitlist-form.tsx`.

Forms are **honest previews**. Submit does not store or send. Copy points to `info@savannamind.com` / `+254 746 125 181`.

i18n pattern: per-page `en`/`sw` dictionaries. **Do not** call `getTranslations` yet. `i18n/request.ts` imports `../messages/${locale}.json` and that folder **does not exist**. Creating messages JSON is optional later, not required to finish the demo.

`npm run build` was green after the form extract (18 static pages). Re-run after your changes; studio routes may have increased the page count.

### Learn Studio (cream / light)

Client-side prototype. Profile + progress live in **localStorage only**:

- `savannamind-learn-profile-v1`
- `savannamind-learn-progress-v1`

Flow: splash → onboarding (language, age, career, level, guardian if under 18, nickname) → “cooking path” loader → dashboard → lesson cards (note / video / quiz) → XP → certificate when all six modules complete.

Key files:

```
app/[locale]/learn/studio/page.tsx
app/[locale]/learn/studio/layout.tsx          # wraps .learn-studio, loads learn-studio.css
app/[locale]/learn/studio/lesson/[moduleId]/page.tsx
app/[locale]/learn/studio/certificate/page.tsx
app/api/learn/tutor/route.ts                  # B.AI chat completions; 503 if no BAI_API_KEY
app/learn-studio.css
app/globals.css                               # marketing tokens
components/learn/learn-studio-app.tsx         # onboarding state machine
components/learn/learn-dashboard.tsx
components/learn/lesson-player.tsx
components/learn/learn-lesson-shell.tsx
components/learn/kibo-assistant.tsx           # suggestion chips → /api/learn/tutor
components/learn/certificate-view.tsx         # labelled preview, not a national credential
components/learn/onboarding-step-loop.tsx
components/learn/onboarding-locale-switch.tsx
components/learn/product-tutorial.tsx
components/ui/button.tsx
components/ui/onboarding-choice-panel.tsx
lib/learn/types.ts
lib/learn/copy.ts
lib/learn/storage.ts
lib/learn/progress.ts
lib/learn/modules.ts                          # catalog + career reorder
lib/learn/curriculum/types.ts
lib/learn/curriculum/helpers.ts               # note(), quiz(), video()
lib/learn/curriculum/resolve.ts               # slices units by age band
lib/learn/curriculum/modules/index.ts
lib/learn/curriculum/modules/m0-beginner.ts
lib/learn/curriculum/modules/m0-intermediate.ts
lib/learn/curriculum/modules/m0-advanced.ts
lib/learn/curriculum/modules/agr-beginner.ts
lib/learn/curriculum/modules/career-beginners.ts  # hlt, edu, biz, cap beginner
```

Age bands: `8-10 | 11-13 | 14-17 | 18+`. Units shown: 5 / 6 / 8 / 10 via `unitCountForAge`.

Careers: `farmer | health | teacher | business | transport | tech | government | student | exploring`.

Levels: `beginner | intermediate | advanced`.

Studio layout hides marketing header/footer via `body.learn-studio-route`.

### Curriculum gap (important)

`moduleCurricula` in `lib/learn/curriculum/modules/index.ts`:

- **m0** has real beginner / intermediate / advanced tracks.
- **agr** has a real beginner track; intermediate/advanced **reuse m0** tracks (`careerIntermediate` / `careerAdvanced`).
- **hlt, edu, biz, cap** beginner units live in `career-beginners.ts`; intermediate/advanced also **reuse m0**.

So a farmer on Advanced currently gets M0 advanced content, not agriculture-specific advanced content. Completing the project means writing unique intermediate + advanced tracks for agr, hlt, edu, biz, and cap (and preferably deepening beginner if under the 3,000-word EN target per track).

Helpers: `note()`, `quiz()`, `video(youtubeId)`. Every card is bilingual EN + SW. Style: Kenya-contextual, SDG-linked, verify-first, no medical/legal/financial final authority.

Grounding sources (client folder `sources/`):

- UNESCO AI Competency Framework for Students (2024)
- UNESCO AI Competency Framework for Teachers (2024)
- UNESCO Guidance on Generative AI in Education (2023)
- OECD-EU Empowering Learners with AI Literacy Framework (2026)
- Kenya National AI Strategy 2025–2030

Also use Kenyan examples already in `build_curriculum_pdf.py` (FarmerAI, Agrika, M-Kliniki Nia, DPA 2019, informal/jua kali economy). Do not invent partner logos or unverified stats.

---

## Design systems (two palettes — keep both)

### A. Marketing site — dark editorial

Defined in `app/globals.css` `:root`. **Use CSS variables, not new hexes.**

| Token | Hex | Use |
|---|---|---|
| `--color-night` | `#0b1f26` | Page background |
| `--color-night-soft` | `#0f2a33` | Raised surface |
| `--color-teal-deep` | `#0b5f62` | Primary teal |
| `--color-teal-bright` | `#26a9ab` | Accent teal |
| `--color-gold` | `#faab36` | Signature gold |
| `--color-text` | `#eaf3f2` | Text |
| `--color-muted` | `#9db8bc` | Secondary text |

Supporting accents from the deck (use sparingly): blue `#0284C7`, violet `#3F1486`. Pale `#E2ECEE`.

Layout primitives already in CSS: `site-shell`, `site-header`, `surface`, `section`, `container`, `prose`, `skip-link`. Fluid type via `--text-*`. Space via `--space-*`. Radius `--radius-sm/md/lg`. Motion `--ease-editorial`.

Typography: **system fonts only**. No Google Fonts, no downloaded brand font until the founder supplies files. Display and body share the same sans stack.

Home hero is a **CSS graphic**, not `hero-section.png`. The learner photo belongs on Learn / studio.

### B. Learn Studio — cream product UI

Tailwind is **scoped to studio only**:

```js
// tailwind.config.js
important: ".learn-studio"
content: ["./app/**/learn/studio/**/*.{ts,tsx}", "./components/learn/**/*.{ts,tsx}", "./components/ui/**/*.{ts,tsx}"]
corePlugins: { preflight: false }
```

Studio colors: cream `#F9F9F6`, night `#0B1F26`, teal `#0B5F62`, bright `#26A9AB`, gold `#FAAB36`, muted `#5C6B73`. Extra CSS in `app/learn-studio.css`.

**Do not** add a global Tailwind `content` glob that injects preflight onto the marketing site. That would restyle the dark pages.

### Brand rules

- Wordmark: lowercase **savanna mind** (two words in UI chrome). Domain/legal: savannamind.com. Do not write “Savannah” in UI.
- Tagline: “Where Algorithms Serve Communities.”
- **Zero emoji** in UI, copy, and comments. Lucide icons only.
- Do not put provider names (B.AI, Qwen, OpenAI, DeepSeek) in UI copy.
- Do not regenerate or replace: `public/logo-mark.png`, `public/logo-full.png`, `public/kibo-3d.jpg`, `public/hero-section.png`, or files in `public/learn/`.
- Kibo: 3D mascot at `public/kibo-3d.jpg`. Marketing Learn copy and alt text still say **lion**; the crop reads as a **cheetah**. Confirm with the user before changing species wording. Until then, prefer “Kibo” without asserting species in new copy.
- Images: `next.config.mjs` has `images: { unoptimized: true }`. Do not enable the optimizer.

### Public Learn assets (already in repo)

```
public/learn/hero-section.png
public/learn/learn-onboarding-bg-desktop.png
public/learn/learn-onboarding-bg-mobile.png
public/learn/learn-module-placeholder-agri.png
public/learn/learn-module-placeholder-health.png
public/learn/learn-module-placeholder-education.png
public/learn/learn-module-placeholder-enterprise.png
public/learn/learn-cooking-loader-illustration.png
public/learn/learn-empty-state-tutorial.png
```

Sources and prompts: client `design-inspo/IMAGE-GENERATION-BRIEF.md`. Generate more only if a needed slot is empty; save there first, then copy to `public/learn/` with the same kebab-case `learn-` names.

---

## Hard constraints

1. **No deploy.** No `vercel --prod`, no production push, no DNS, no binding `savannamind.com`. Vercel is linked locally (`.vercel/`) but unused for this Next app.
2. **Leave `vercel.json` as-is** until a Next deploy is approved. It still builds legacy `index.html` via `@vercel/static`.
3. **No guessed backend.** No Supabase migrations, no other cloud project, no inventing auth. Profile/progress stay in localStorage for this prototype.
4. **Do not commit `.env.local`.** `.gitignore` already lists it. `.env.example` documents `BAI_API_KEY`, `BAI_BASE_URL`, `BAI_MODEL` — do not print secrets, do not put keys in chat or repo.
5. **Child safety (spec 7–8):** ages 8–10 should use curated question buttons only (studio already does chips, no free-text box — keep it that way). Do not collect DOB, school, location, photos. Guardian step is a local checkbox, not a legal consent product — do not claim ODPC compliance as done.
6. **Honesty:** Contact/Learn forms must not claim delivery. Certificates must stay labelled preview. Do not issue real credentials.
7. **KPI honesty:** Deck slide 6 figures are **2026 targets, not results**. Home currently shows “1,000+ Lives Impacted”, “100+ Certifications Issued”, “20% Faster Diagnosis” as if measured. About shows “1,000+ Certifications Issued Annually”, “10+ AI Startups”, “20% Faster Diagnosis”, “15% Higher Yields”. Relabel as targets or remove unverified claims. Live site’s 85% employment / 40% salary increase must **not** be copied — they are not in the deck.
8. **No new dependencies** unless you log why and pin the version.
9. **Pages stay Server Components** by default. `"use client"` only on interactive leaves. Never pass functions from Server to Client.
10. **Git:** small conventional commits on the current branch only if the user asks to commit. Never amend, never force-push. If you commit, do not include `.env.local` or credentials.
11. **Process safety:** kill only PIDs you started, after verifying cwd.

---

## Ordered work to complete the prototype

Do these in order. Re-run `npm run build` after each functional cluster.

### 1. Align marketing Learn page with the real product

`app/[locale]/learn/page.tsx` still sells ML bootcamps (“Foundations of Machine Learning”, “AI in Clinical Healthcare”, etc.) and calls Kibo a lion. Studio is an age-banded AI-literacy product with six SDG modules.

Rewrite Learn as an **honest preview**:

- Hero title direction from earlier brief: **“AI Literacy for Every African”** (EN) + real Kiswahili equivalent.
- Sections: How it works, age/career tracks, Kibo companion, onboarding, catalog of the six modules, lesson viewer direction, certificate direction.
- CTA to `/[locale]/learn/studio`.
- Keep waitlist as non-storing preview.
- Do not present draft courses as published cohorts.

### 2. Fix remaining marketing polish

- Desktop header: Home sits too tight against the wordmark (`app/globals.css` + `components/site-header.tsx`).
- Home/About impact numbers: label as 2026 targets or replace with qualitative mission copy. Cite the deck, do not invent new numbers.
- Kiswahili: no leftover English UI strings (`AI Guided Learning`, `Zero-Emoji Interface`, mixed “unadream job” in `lib/learn/copy.ts` career step, etc.). Real Swahili, not calques. If unsure, `TODO(i18n):` and flag rather than fake fluency.
- Mobile wordmark already hides below 480px — keep that.

### 3. Finish unique curriculum tracks

For **agr, hlt, edu, biz, cap**: write intermediate and advanced unit files (do not keep reusing m0). Follow existing `CurriculumUnit` / `LessonCard` shape. Mix notes, YouTube checkpoints, quizzes. Target ≥3,000 words EN per level track where possible; always ship matching `bodySw`.

Wire them in `lib/learn/curriculum/modules/index.ts`. Keep `resolve.ts` age slicing.

Capstone (`cap`) should be a community mini-project: one AI help + one risk (privacy/wrong guess), Kenya-local.

Optional: regenerate a fuller bilingual PDF from the live TS modules into the client folder (do not clobber `Savanna Mind AI Curriculum.pdf` without a new filename). `build_bilingual_curriculum_pdf.py` currently looks for a non-existent `data.ts`.

### 4. Harden Kibo tutor (still prototype)

`app/api/learn/tutor/route.ts` calls B.AI if `BAI_API_KEY` is set. Spec wants retrieval-first, lesson-grounded answers. Minimum viable:

- Keep suggestion-chip UX (no free-text for 8–10).
- Ground the system prompt in the current module’s titles/notes when the client can pass `moduleId`.
- Out-of-scope → “I don’t know — here’s who to ask.”
- No homework production, no IDs/passwords/patient names.
- If key missing, keep the existing 503 copy. Do not fake a live AI.

Idle nudge is 90s in `kibo-assistant.tsx` (spec mentioned ~14s in README — README is not binding; keep anti-annoyance: one dismissible hint).

### 5. Studio UX completeness

Walk `/en/learn/studio` and `/sw/learn/studio` as a learner:

- Onboarding loop + cooking loader art.
- Dashboard module order by career (`modulesForProfile`).
- Locked modules until previous complete.
- Lesson player wrong-answer streak → Kibo nudge.
- Certificate only after six modules; keep “preview / not official” disclaimer.
- Reset button is a test affordance — fine for prototype.

Fix anything broken, empty, English-on-SW, or clipped on 390px and desktop.

### 6. Verification (definition of done)

- `npm run build` exit 0.
- `git diff --check` clean.
- Hit every marketing route EN + SW (200). `/` redirects to `/en`.
- Studio: complete onboarding, one lesson, language switch, certificate gate.
- No emoji in `app/` or `components/`.
- No provider names or secrets in UI source.
- Screenshot only if you change visible UI; save under repo `screenshots/` with new names. Do not reuse old prototype shots.
- Update `/Volumes/Macsie_SSD/Mac Archive/Documents/Clientele/Savanna Mind/progress.md` with date, files, build status, remaining blockers.

**Out of scope until the user explicitly says so:** production auth, database, domain, UptimeRobot, ODPC registration, KICD, real certificates, pushing the branch.

---

## Contact and office (canonical)

- Email: `info@savannamind.com`
- Phone: `+254 746 125 181`
- Office: Delta Riverside Office Park, Nairobi, Kenya
- Founder (spec owner): Dr. Tawfiq Bashir

Live production still serves a different Next app at https://www.savannamind.com — do not treat it as this branch. This rebuild is local-only until approved.

---

## First actions in the new chat

1. `cd /Volumes/Macsie_SSD/Github/SleekMX/savannamind && git status -sb && git branch --show-current`
2. Confirm you are on `feat/savannamind-full-rebuild` with untracked `app/` still present. If the tree is clean, stop — something went wrong.
3. Read `SPECIFICATION.md` sections 1–8, `app/globals.css` tokens, `lib/learn/curriculum/modules/index.ts`, `app/[locale]/learn/page.tsx`.
4. Then execute work items 1→6 above.

Start with item 1 (Learn marketing page alignment) unless the user points you at curriculum or a bug.
