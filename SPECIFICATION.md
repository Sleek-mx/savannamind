# Savannah Mind Learn — AI-Literacy Platform Product Specification

**Status:** Draft v0.1 for review
**Date:** 2026-09-27
**Owner:** Savannah Mind (Dr. Tawfiq Bashir, Founder & CEO)
**Scope:** Product specification only. No website code or prototype is included. This is not a legal or curriculum-approval document.

---

## 0. Source Documents and Evidence Base

| Source | Status | Notes |
|---|---|---|
| `Savannamind 26.09.26. .pptx` (14 slides) | ✅ Present in workspace, reviewed | Primary brand and strategy source. All Savannah Mind facts in this spec trace to it. |
| Companion PDF version of the deck | ❌ **Absent** | No PDF appeared in the initial workspace file listing, and no PDF exists in the workspace directory. Brand and content signals below are drawn from the `.pptx` only. If a PDF variant carries additional content (speaker notes, appendix), it should be supplied and this spec re-checked. |
| User brief (requirements conversation) | ✅ Applied | Requirements quoted in Section 1.3. |
| Live web checks (2026-09-27) | ✅ / ⚠️ | Public Savanna Mind pages and official hosting/ODPC sources reviewed. Legal implementation still needs review by Kenyan counsel before launch. |

### 0.1 Brand signals extracted from the deck (facts, not inventions)

- **Name/wordmark:** lowercase `savannamind`.
- **Tagline:** "Where Algorithms Serve Communities."
- **Positioning:** "a visionary initiative dedicated to advancing artificial intelligence research, education and innovation across the African continent" (slide 2).
- **Four strategic pillars** (slide 5): **Learn**, Research & Development, Innovation & Enterprise, Responsible AI. The Learn pillar is the platform's home: *"Build a skilled workforce through accessible AI courses, bootcamps and scholarships."*
- **Six development challenges targeted** (slide 3): food insecurity, healthcare access, education gaps, unemployment, tech infrastructure, climate vulnerability. These are used below as the platform's contextualization anchors.
- **Deck-cited market figure** (slide 4, source line included in the deck): Africa AI market ~$16.5B by 2030, 27.4% CAGR 2025–2030 (Statista Market Insights, cited in Mastercard, "Harnessing the transformative power of AI in Africa," Aug 2025; 2026–2029 interpolated at stated CAGR).
- **2026 KPI targets** (slide 6, explicitly labeled "Targets, not results to date"): 1,000+ AI/ML certifications a year; 10+ startups; 20+ papers; $1M+ research funding; 10+ solutions deployed; 1M+ beneficiaries reached a year. The platform should report against the certifications and beneficiaries lines.
- **Research portfolio usable as learning context** (slide 7): Community Health AI (CHAI), AI and Low-Resource Languages, Network Optimization for School Connectivity, AI and the Future of Work in Africa (AIFUW), AI and the Future of Energy, Pan-African Genetic Data Platform.
- **Colors visible in slide artwork:** dark teal `#0B1F26` / `#0A1F25`; teal `#26A9AB` and `#0B5F62`; warm gold `#FAAB36`; blue `#0284C7`; white `#FFFFFF`; pale blue-gray `#E2ECEE`. Supporting accents include violet `#3F1486` and `#7C3AED`. Use dark teal, teal, and gold as primary interface colors; reserve violet and blue for secondary accents.
- **Typography observed:** serif wordmark with clean sans-serif presentation text. Confirm exact brand font files before production; do not assume the Office theme font is the web brand font.
- The live site’s Learners page displays **85% employment** and **40% average salary increase** claims that do not appear in the deck. Verify source, cohort, owner, and date before reusing these claims in Learn.

### 0.2 Live site baseline

The homepage links its Learn module to `/learners`. That page currently describes courses, bootcamps, certifications, and mentorship, but presents as a program overview rather than an interactive learning experience: review found no learner sign-up, age-based onboarding, playable lesson, progress dashboard, or tutor flow. The new platform should therefore be treated as a distinct product experience, linked from this page after the company approves its route and release plan.

---

## 1. Product Overview

### 1.1 One-line definition

**Savannah Mind Learn** is a self-serve, age-aware, gamified AI-literacy learning platform that teaches children (from Grade 3), teens, and adults in Kenya and across Africa what AI is, how to use it well, and how to stay safe with it — through interactive missions, a guided character companion, and an always-available AI side-question tutor, contextualized to Kenyan and African life.

### 1.2 Strategic fit (from the deck)

- Delivers the **Learn pillar** directly and the **Responsible AI** pillar implicitly (every learner meets fairness, transparency and safety concepts from their first missions).
- Feeds the flywheel described on slide 5: trained talent → research → products → funding → more training.
- Advances the deck's **education gaps** and **unemployment** challenge areas (slide 3) and can showcase portfolio projects (slide 7) as case material.
- Reports against deck KPIs: certifications issued and beneficiaries reached (slide 6).

### 1.3 User requirements (as given; restated verbatim in substance)

1. Age-based onboarding starting at Grade 3 (roughly ages 8–10).
2. Differentiated learning for children, teens, and adults.
3. Adults profiled by career.
4. Beginner / intermediate / advanced curriculum levels, Kenyan/African-contextualized.
5. Interactive, Duolingo-like missions with a character guide.
6. AI side-question tutor plus proactive help when the learner goes inactive.
7. Independent, self-serve operation (no trainer-in-the-loop required for daily use).
8. Prototype-first scope; assess Cloudflare, Vercel, and Netlify hosting.

---

## 2. Users and Personas

### 2.1 Persona A — Child (starting band: ages 8–10, around Grade 3)

- **Onboarding:** select the 8–10 band and start a guardian-consent flow before storing a learner profile. Use a nickname and coarse age band; avoid exact birth date and school name. Consent details and verification method require legal review (Section 8).
- **Goal:** recognize AI in daily life, build safe-use habits, and learn that AI can make mistakes.
- **Interaction style:** short 3–5 minute missions, audio-supported text, large touch targets, minimal typing, no free-text chat with the AI tutor at the youngest band — the tutor answers **within mission context** and is content-filtered (Section 7.3).
- **Kenyan context examples:** classify fictional mobile-money scam messages; compare a weather prediction with what happens on a fictional farm; discuss why language tools may perform unevenly. Use synthetic examples and avoid claims about a specific service's internal AI.

### 2.2 Persona B — Older child and teen (ages 11–17)

- **Onboarding:** choose an 11–13 or 14–17 learning band. Do not collect school or location for the prototype. Guardian consent and age-appropriate safeguards apply until legal review confirms the production flow.
- **Goal:** practical AI-assisted study skills (revision, research, coding clubs), academic integrity awareness, and pathways toward AI careers.
- **Interaction style:** guided missions and integrity checkpoints. Any free-text AI tutor for under-18 learners is gated on guardian consent, age-appropriate moderation, privacy review, and provider approval; a safer first version uses curated question buttons.
- **Kenyan context examples:** using AI to summarize a set-book chapter (and why hallucinated quotes happen); a career mission mapping KCSE subject choices to AI-adjacent jobs; exploring Kiswahili/Sheng representation in language models from the Low-Resource Languages project (slide 9).

### 2.3 Persona C — Adult (18+, career-profiled)

- **Onboarding:** only after the learner selects 18+, offer an optional career picker (farmer, community health promoter, teacher, small-business owner, civil servant, developer, student, other) and self-assessed level. This tunes examples and mission order; do not use it for high-stakes profiling.
- **Goal:** applied AI for livelihood and work; certificates aligned to the deck's 1,000+ certifications/year target.
- **Kenyan context examples per career:**
  - **Farmer:** reason about a fictional crop/weather prediction and verify advice with a qualified agricultural source.
  - **Community Health Promoter (CHP):** use synthetic training notes to practise summarization and privacy; never offer diagnosis or enter patient details.
  - **Small-business owner:** draft a customer message or stock plan from fictional shop data; do not upload customer/payment records.
  - **Teacher:** draft a quiz from generic learning objectives, then verify against official materials and protect learner information.
  - **Developer/civil servant:** prompt design, evaluation, and responsible handling of public-service data.

### 2.4 Cross-cutting access assumptions

- Primary device: Android smartphone; secondary: shared/laptop and school-lab devices. Low-bandwidth tolerance is a design constraint (Section 9.2).
- Bilingual aspiration (English + Kiswahili UI/ scaffolding) is **later-scope**, not MVP (Section 10).

---

## 3. User Journeys

### 3.1 Journey A — Grade 4 learner ("Amina", age 9, Nakuru)

1. **Onboard:** Guardian reviews a plain-language consent notice and completes the approved consent step; child selects the 8–10 band and a nickname. Do not store the profile until the consent flow is approved.
2. **Meet the guide (~1 min):** The character guide welcomes Amina, plays a 30-second animated intro: "AI is a clever helper that learns from examples — and it can make mistakes."
3. **First mission (~4 min):** "Spot the Bot" — classify six clearly labeled fictional messages as person-written or automated examples; two are M-PESA-style promos and do not reproduce real messages. Earn a demo badge.
4. **Side question:** Amina taps a suggested question; the tutor returns a short, lesson-grounded answer. Avoid open chat in this age band.
5. **Inactivity nudge:** After a pause on an active question, show one optional in-app hint. Do not send automatic email or send inactivity data to the AI service.
6. **Checkpoint:** A badge marks demonstrated learning; any guardian progress report is opt-in and subject to the approved consent and privacy design.

### 3.2 Journey B — Teen learner ("Brian", age 16, Kisumu)

1. **Onboard:** Selects the 14–17 band and takes an optional short placement quiz; no school field.
2. **Placed:** Intermediate band, "AI for Study & Skills" track.
3. **Mission:** "Cite It or Skip It" — given an AI-generated paragraph with one fabricated citation, Brian must identify why the source doesn't exist. Pass condition includes writing one verification step.
4. **Side-question tutor:** chooses a guided question about using AI for assignments; the tutor explains academic integrity and gives a brainstorm-only workflow.
5. **Project mission:** build a simple rule-based weather bot in Scratch/JS with a club; demonstrate it in the lesson without uploading a recording of the learner.
6. **Certificate:** "Foundations of AI — Teen" issued; counts toward platform certification metrics.

### 3.3 Journey C — Adult learner ("Mama Njeri", small-business owner, Nairobi)

1. **Onboard:** Selects 18+, chooses small-business owner as an optional career context, and self-rates as Beginner.
2. **Career-tuned track:** First mission uses a fictional scam-message example; teaches a "stop–check–report" habit and where automated filters might help or fail.
3. **Applied missions:** Draft a price-list message with an AI assistant, then critique two drafts, one containing an invented mobile-money fee — hallucination-spotting is the graded skill.
4. **Side-question tutor:** asks about customer privacy; answer routes to a plain-language data-handling lesson (Section 8).
5. **Certificate + next step:** "AI at Work — Small Business" certificate; in-product invitation to the intermediate track and to bootcamp announcements (Learn pillar continuity).

### 3.4 Journey D — Re-engagement (all ages)

- Learners who opt into reminders can see a short, dismissible return prompt. Do not email learners or profile them based on inactivity in the prototype.
- Learner fails the same checkpoint twice → difficulty auto-eases one step and the guide offers a worked example before retry. No public leaderboards in MVP (Section 7.5).

---

## 4. Curriculum Architecture

### 4.1 Structure: three axes

```
AGE BAND (child | teen | adult-career)   → tone, interaction mode, consent layer
LEVEL (beginner | intermediate | advanced) → depth and prerequisites
THEME (contextualization domain)          → examples and case material
```

Use four onboarding bands: **8–10**, **11–13**, **14–17**, and **18+**. Ask for a band, not a full date of birth. Only the 18+ path asks an optional career profile. Learning level is established separately, so an adult may start at beginner and a teen may progress to advanced material.

### 4.2 Level definitions

| Level | Child track (ages 8–10, roughly Grade 3) | Older learner track (ages 11–17) | Adult track (18+) |
|---|---|---|---|
| **Beginner** — "Meet AI" | What AI is/isn't; AI in phones, TV, shops; safe messaging habits | How models learn from data; prompt basics; detecting AI content | AI at work for the learner's career; tool walkthroughs; scam resilience |
| **Intermediate** — "Use AI Well" | Guided play with curated tools; asking good questions; spotting wrong answers | Research workflows, study skills, first coding missions, academic integrity | Career projects: forecasting, document drafting, evaluation of AI output |
| **Advanced** — "Think with AI" | (capstone-lite) Present an "AI in my community" mini-project | Capstone project; intro to data ethics and Kiswahili/language-tech issues; career pathways | Applied capstone per career; responsible-AI practice; train-the-trainer option |

### 4.3 Contextualization themes (anchored to deck slide 3/7)

Every level draws its examples from these six themes, matching Savannah Mind's stated challenge areas:

1. **Agriculture & food security** — weather predictions, pest triage, market-price forecasting.
2. **Health** — CHP workflows, clinic stock prediction, mental-health app caveats.
3. **Education** — study skills, connectivity planning (slide 10 case), classroom integrity.
4. **Work & enterprise** — future-of-work framing from AIFUW (slide 11), gig work, small business.
5. **Infrastructure & energy** — grid optimization intuitions (slide 12), school connectivity.
6. **Language & culture** — low-resource languages (slide 9), Kiswahili/Sheng in models, cultural preservation.

### 4.4 Mission anatomy (Duolingo-like)

Each mission (3–7 minutes) contains: a 30–60s guide intro → 4–8 interaction cards (tap-match, sort, swipe, drag, one-question-check, mini-quiz) → immediate feedback with the guide → XP + streak credit → optional side-question hook. Units of 4–6 missions end in a themed checkpoint; three checkpoints form a badge; badges stack into the level certificate.

Progression mechanics (MVP): XP, optional streaks, badges, and a weekly learner recap. No lives, cooldowns, or streak-loss pressure in child flows; mistakes lead to hints and another attempt. Explicitly deferred: leaderboards, social feeds, streak-freeze monetization (Section 10).

---

## 5. The Character Guide

- **Role:** persistent companion who opens missions, gives feedback, models "healthy skepticism" (the guide itself sometimes says "I'm not sure — let's check"), and is the face of the side-question tutor.
- **Naming:** the deck contains no character or mascot. Name and final identity require founder sign-off; do not treat a placeholder as an approved brand asset.
- **Personality per band:** child band = playful, simple sentences, asks the learner to repeat the safety rule back; teen = candid, a bit wry, treats the learner as a colleague; adult = respectful peer, career-aware.
- **Consistency rule:** the guide never role-plays certainty about facts; every factual claim routes through the tutor service with source-style attribution (Section 7.2).

---

## 6. Content Examples (Kenya/Africa-specific, non-generic)

Ten illustrative mission seeds (prototype content pool):

1. **"Spot the Bot" (Child/Beginner):** classify six clearly labeled fictional messages (person-written vs automated); includes a fictional M-PESA-style promotion.
2. **"Weather or Not" (Child/Beginner):** a farming app predicts rain; learner learns predictions can be wrong; introduce "confidence."
3. **"Teach the Machine" (Child/Intermediate):** drag-and-drop training of a fruit/animal classifier on Kenyan produce photos; see what happens with too few examples.
4. **"The Case of the Missing Source" (Teen/Intermediate):** find the fabricated citation in an AI essay about Lake Victoria fisheries; verify with two independent checks.
5. **"Sheng Check" (Teen/Intermediate):** test how well a public chatbot handles a Sheng sentence; discuss low-resource languages (deck slide 9) and why models underperform.
6. **"CHP Copilot" (Adult/Intermediate — health):** a CHP drafts a community-visit summary with AI assistance; mission grades redaction of patient identifiers and deference to clinical judgment (CHAI context, slide 8).
7. **"Duka Forecast" (Adult/Beginner — enterprise):** predict weekly stock for a shop using a simple spreadsheet model; learn what data the model does/doesn't see.
8. **"Grid Intuition" (Adult/Advanced — energy):** explain in plain language how an optimization model might reduce outages; identify three data sources needed (slide 12 context).
9. **"Prompt Clinic" (Adult/Intermediate):** rewrite one vague prompt three ways for a work task; graded on specificity, constraints, and verification step.
10. **"Consent Matters" (All/Beginner):** what personal data is; who may collect it in Kenya; what to do when an app asks for too much. Links to Section 8's plain-language rights summary.

---

## 7. AI Tutor Design and Guardrails

### 7.1 Two-tutor surface model

- **Side-question tutor:** learner-initiated, docked panel available inside missions. Ages 8–10 use curated question buttons. Ages 11–17 use guided questions unless reviewed guardian consent, moderation, privacy, and provider controls explicitly permit free text. Adults may use free text with input/output checks.
- **Proactive helper:** fires on inactivity (Section 7.4) and on repeated checkpoint failure (worked example, not the answer).

### 7.2 Hallucination controls (design-level, not aspirational)

1. **Grounded answering:** tutor answers are constrained to a curated knowledge base of lesson content + approved explainer snippets; retrieval-first, generation-second. Out-of-scope questions get "I don't know — here's who to ask," never improvised answers.
2. **Citations in-band:** factual claims render with a lesson reference or "verified source" tag; anything unverifiable renders as opinion/guide-talk, clearly labeled.
3. **No homework production:** the tutor will not produce full essays, assignment answers, or past-paper solutions; it explains, hints, and demonstrates on examples it generates itself and labels as examples.
4. **Answer verification loop (production path):** second-pass model check against the knowledge base before display; mismatch → fallback template. (Prototype: manual answer linter + short allow-list.)
5. **Human escalation:** every tutor surface has a one-tap "this seems wrong" report that logs the exchange for editorial review.

### 7.3 Child safety in the tutor

- Hard content filters on input and output (violence, sexual content, self-harm, ideology, personal-advice categories).
- No requests for the child's personal information; the tutor declines and explains.
- Do not retain children's open-ended tutor conversations by default. Any safety logging or guardian visibility needs a documented purpose, access limits, retention rule, and legal review (Section 8).
- Crisis-style queries (self-harm signals) trigger an immediate scripted response pointing to a guardian/known helpline and flag for human review. **Exact helpline numbers and protocol to be confirmed with Kenyan child-safety resources before launch — flagged for local verification.**

### 7.4 Proactive help — anti-annoyance rules

- Triggers: a pause on an active question, repeated failure, or an explicit "I'm stuck" action. Long-term return prompts require opt-in and must not infer sensitive traits.
- Caps: at most one dismissible hint per active question; never block the lesson or pressure the learner about streak loss.
- Every proactive message is dismissible in one tap and never blocks content.

### 7.5 Overreliance and healthy-skepticism curriculum

- Skepticism is graded content, not a disclaimer: every level includes at least one "AI got it wrong" mission (see Section 6, items 2, 4, 6).
- The tutor regularly models uncertainty ("I'm not sure — let's verify") and teaches the verify-first habit (second source, ask an adult/teacher, check the primary source).
- Adults get an explicit module on when *not* to use AI (safety-critical, legal, medical decisions).
- No dark-pattern engagement mechanics: no loss-aversion streak threats for children, no leaderboards in MVP.

---

## 8. Data, Privacy, and Safety (Kenyan Context)

> ⚠️ **This section identifies obligations and design responses; it is not legal advice and not a compliance sign-off. All legal statements are marked for local verification and must be confirmed with Kenyan counsel and the Office of the Data Protection Commissioner (ODPC) before launch.**

### 8.1 Legal landscape (to verify locally)

| Item | Requirement / question | Pointer |
|---|---|---|
| Data Protection Act, 2019 and ODPC children's-data guidance | The ODPC's 2025 guidance says children's data processing must follow data-protection principles, use an appropriate lawful basis, obtain parental/guardian consent where required, and use proportionate, privacy-preserving age checks. Confirm exact applicability and implementation with Kenyan counsel. | [ODPC Guidance Notes for Processing Children's Data (2025)](https://www.odpc.go.ke/wp-content/uploads/2025/11/ODPC-%E2%80%93-Guidance-Note-for-Processing-Childrens-Data.pdf); [Kenya Law](https://new.kenyalaw.org/) |
| Children Act, 2022 | Children's data-protection provisions and duties toward children online | Kenya Law / ODPC — verify current consolidated text |
| ODPC registration thresholds | Whether the planned data-controller/data-processor roles require registration, and what fees apply. Do not assume an exemption or requirement without checking current rules. | ODPC registration portal — verify |
| Consent for minors | Confirm what guardian-consent and verification process applies to this service and data flow. The ODPC guidance is the starting point, not a substitute for legal review. | ODPC guidance linked above; verify with counsel |
| Cross-border transfer | Confirm where each selected host and model provider processes or stores account data, logs, and prompts, then review any cross-border transfer requirements. | DPA 2019 transfer provisions — verify with counsel |
| Curriculum materials | Whether any school-facing use requires KICD review/approval of learning materials | Kenya Institute of Curriculum Development — <https://kicd.ac.ke> — verify |

### 8.2 Data minimization by design

- **Prototype:** collect no real learner information. Use a demo profile in the browser and label tutor responses as simulated.
- **Production:** collect only fields needed for the approved service: age band, an adult career choice if volunteered, progress data, and the minimum guardian contact/consent record required for the lawful flow. Avoid exact birth date, school name, location, learner photos, and audio unless a reviewed requirement justifies each one.
- Do not persist children's raw tutor conversations by default. Set any retention period and guardian access from a documented purpose, risk assessment, and legal review before launch; do not retain logs indefinitely by default.
- Analytics: privacy-respecting product analytics with IP truncation; no third-party ad trackers anywhere in the product.

### 8.3 Child account model (subject to legal and security review)

- Do not finalize an account or recovery mechanism until consent and identity-verification requirements are reviewed. A guardian-managed account with a child nickname may be evaluated; do not assume a PIN alone is sufficient protection.
- Provide a clear guardian route to review consent, request access/correction/deletion where applicable, and contact the service.

### 8.4 Safety operations

- Published reporting channel (in-product and a staffed contact route).
- Define an owner and response process for tutor reports and child-safety incidents before public launch. Response-time targets must match staffing and escalation partners.
- Content authorization process: every mission and tutor knowledge-base article carries an author + reviewer field before release.

### 8.5 Self-service operating boundary

Routine learning, hinting, progress, and course completion should work without a staff member helping each learner. The service still needs an assigned owner for course review, AI-provider configuration, safeguarding incidents, and platform maintenance. “Self-contained” means no routine trainer-in-the-loop; it does not remove governance or safety ownership.

---

## 9. Technical Architecture

### 9.1 Prototype-first principle

The prototype must prove three bets cheaply: (a) children/teens/adults each find their onboarding and missions clear; (b) the grounded tutor gives correct, safe answers in-scope; (c) a self-serve loop re-engages inactive learners. Everything else waits.

### 9.2 Prototype architecture (recommended)

```
Static frontend (React/Vite or another agreed stack; optional PWA and offline-cached lesson JSON)
        │
        ├─ Lesson content: versioned JSON/MDX in the repo (no CMS in prototype)
        ├─ Server-side API (only after provider and child-safety review):
        │     /api/tutor   → input checks → curated lesson retrieval → model call → output checks → answer
        │     /api/progress→ minimal progress persistence
        │     /api/consent → approved guardian-consent flow
        ├─ LLM provider behind one adapter interface (swap-friendly; provider TBD — open question)
        └─ Analytics: privacy-respecting, IP-truncated
```

For a demo, use synthetic profiles and scripted tutor replies; do not claim it is connected to an AI API. For a real learner pilot, keep provider credentials server-side, disclose tutor limits, ground answers in reviewed course material, and complete legal, safety, and provider review first.

### 9.3 Production architecture (explicitly out of prototype scope; direction only)

- Auth and a managed database selected after guardian consent, retention, hosting, and data-transfer requirements are confirmed.
- Content pipeline: authoring CMS or Git-based review flow with two-person sign-off; localization layer for Kiswahili.
- Observability: tutor-quality dashboard (answer review rate, fallback rate, flag rate), engagement funnel, re-engagement lift.
- Certificate issuance with verification IDs (supporting the deck's certifications KPI).
- Capacity planning for school-lab use (whole-class concurrent sessions).

### 9.4 Hosting evaluation (Cloudflare vs Vercel vs Netlify)

Checked against live product/pricing pages on 2026-09-27. Figures below are **as-published on those dates and must be re-verified at decision time** — platform pricing changes frequently.

| Criterion | Cloudflare Pages + Workers | Vercel (Hobby) | Netlify (Free) |
|---|---|---|---|
| Product status (verified) | Active product; docs at developers.cloudflare.com/pages | Active; limits page verified 2026-09-16 per page stamp | Active; pricing page verified 2026-09-27 |
| Free-tier shape | Static asset requests are free/unlimited; Functions consume Workers plan limits. Confirm current limits before launch. | Hobby is restricted to non-commercial personal use; commercial use requires Pro or Enterprise. | Credit-based Free currently includes 300 monthly credits with a hard limit; sites may pause when limits are reached. |
| Fit for prototype | Strong fit for a static preview and later Worker API; confirm account and terms. | Good developer experience, but do not assume Hobby is eligible for a client/company project. | Usable for a static demo; monitor credit limits and possible project pauses. |
| Fit for production | Strong (Workers/D1/R2 full-stack path) | Strong (Pro tier; functions duration limits relevant for long LLM calls — streaming mitigates) | Fine, but credit accounting adds operational overhead |
| Main risk | Workers tooling and data-transfer/legal review for learner data. | Commercial-use restriction on Hobby; paid plan cost. | Credit limits and metered functions; projects may pause at the free limit. |

**Recommendation:** use a Cloudflare Pages preview URL for a static, non-sensitive demo if the company approves an account. Do not connect the company domain or store learner data yet. For a later API-backed pilot, evaluate a Worker and database after privacy, consent, provider, and cost decisions are made. Vercel remains an option on an eligible paid plan; Hobby is for non-commercial personal use. Netlify is viable, but its current Free credit cap makes ongoing usage worth monitoring. Recheck plan terms and limits at implementation time.

---

## 10. MVP Scope vs Later

### 10.1 MVP (first demonstrable learning slice; estimate schedule after scope decisions)

1. Age-band onboarding (child / teen / adult) with career picker for adults.
2. A reviewed guardian-consent and child-access flow before real child data is collected.
3. One fully-built unit per level/band (≈15 missions total, drawn from Section 6 seeds).
4. Character guide in static form (illustrated, scripted lines — no animation pipeline).
5. Tutor experience: scripted answers for a demo; API-backed, grounded answers only after provider and safeguards are approved. Suggested questions for younger learners.
6. Optional, dismissible in-lesson help; no automatic learner email for the demo.
7. Placement quiz (6 questions) and XP/streak/badge mechanics (no leaderboards).
8. A review-only preview URL if approved; no production domain, real learner accounts, or real learner data.

### 10.2 Explicitly deferred

- Kiswahili/local-language UI and mission localization.
- Full CMS, real auth, Postgres, school/teacher dashboards, class management.
- Certificates with verification IDs; bootcamp integrations.
- Offline-first download of mission packs; SMS/WhatsApp channel (notable Kenya-channel opportunity — later).
- Leaderboards, social features, avatars customization, monetization of any kind.
- Voice interaction and speech UI.

### 10.3 Sequencing rule

No production investment (auth, CMS, payments) until prototype validates: onboarding comprehension ≥ benchmark, tutor in-scope answer accuracy ≥ benchmark, and measurable re-engagement from nudges. Success thresholds set in Section 11.

---

## 11. Success Metrics

**Proposed validation gates (targets to set with the project owner before a consented pilot):**

- Onboarding completion (no drop before first mission): ≥ 80% per band.
- First-mission completion: ≥ 70% per band.
- Tutor in-scope answer accuracy in editorial audit: ≥ 95% of sampled answers judged correct and safe; zero child-safety filter failures.
- Re-engagement: ≥ 25% of nudged inactive learners return within 72h (and nudge opt-outs < 5%).
- Guardian trust: ≥ 80% of child guardians consent and ≥ 60% open the first progress recap.
- Data: 100% of tutor flags reviewed within 48h during prototype.

**Later, tied to deck KPIs (slide 6):** certifications issued (feeds "1,000+ AI/ML certifications a year"), beneficiaries reached (feeds "1M+ beneficiaries reached a year"), completed-advanced-track rate per career profile, and — qualitatively — learner-reported skepticism behaviors ("I checked before I trusted").

---

## 12. Assumptions and Open Questions

### 12.1 Assumptions (challenge if wrong)

1. Learners may have intermittent smartphone access; design for low bandwidth and test on representative Android devices.
2. A practical guardian-consent channel is not yet selected; email is one option and must be evaluated for the target audience.
3. English-first content is acceptable for the four age bands in the first learning slice.
4. An LLM API with adequate cost/latency for a Kenyan learner base is available within prototype budget (provider TBD).
5. The platform operates under the Savannah Mind brand with no separate legal entity (verify).
6. No KICD approval is required while content stays self-serve and non-school-mandated (verify — Section 8.1).

### 12.2 Open questions (unresolved decisions)

1. **Brand system:** confirm these extracted deck colors and approve web typography and contrast tokens before implementation.
2. **Character guide identity:** name, species/shape, voice, and illustration style — founder sign-off required; the deck has no mascot.
3. **LLM provider and data-routing posture:** which provider(s), and whether learner Q&A may transit foreign infrastructure under the DPA transfer rules (verify with counsel).
4. **ODPC registration:** required category, timeline, and fee — before public launch, not prototype.
5. **Child crisis-response protocol:** exact helpline partners and script for Kenya — before any child-band public release.
6. **Certification recognition:** who recognizes the platform's certificates (internal? partners? deck implies bootcamps — unclear).
7. **Monetization:** deck mentions scholarships and bootcamps but no pricing; out of prototype scope but shapes the account model later.
8. **Missing PDF:** if a PDF version of the deck exists with richer content (notes/appendix KPI framework referenced on slide 6), supply it for spec reconciliation.

---

## 13. Sources

**From the deck (primary):** all Savannah Mind facts, figures, KPIs, project names, and quotes — `Savannamind 26.09.26. .pptx`, slides 1–14. Deck-internal citation for market data: Statista Market Insights, cited in Mastercard, "Harnessing the transformative power of AI in Africa" (Aug 2025).

**Verified live 2026-09-27:**
- Savanna Mind homepage and Learners page: <https://www.savannamind.com/> and <https://www.savannamind.com/learners>.
- Cloudflare Pages Functions pricing: <https://developers.cloudflare.com/pages/functions/pricing/>; Workers pricing: <https://developers.cloudflare.com/workers/platform/pricing/>; Git integration: <https://developers.cloudflare.com/pages/configuration/git-integration/>.
- Vercel commercial-use restriction: <https://vercel.com/docs/limits/fair-use-guidelines>.
- Netlify credit-based plans and Functions billing: <https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans> and <https://docs.netlify.com/build/functions/usage-and-billing/>.
- ODPC Guidance Notes for Processing Children's Data (2025): <https://www.odpc.go.ke/wp-content/uploads/2025/11/ODPC-%E2%80%93-Guidance-Note-for-Processing-Childrens-Data.pdf>.

**Requires Kenyan legal review before launch:**
- Applicability of the Data Protection Act, 2019; ODPC registration; consent verification; any DPIA; cross-border transfers; and retention requirements for the proposed learner/tutor data flows. Start with the ODPC guidance above and Kenya Law: <https://new.kenyalaw.org/>; confirm with qualified Kenyan counsel.
- Whether KICD review applies to any school-facing or curriculum-aligned materials: <https://kicd.ac.ke>.
- Child safeguarding contacts and crisis-response protocol must be confirmed with qualified Kenyan partners before a public child-facing release.

---

*End of spec. Reviewer notes welcome; changes to Sections 7, 8, and 9.4 require re-review after the open questions in 12.2 are answered.*
