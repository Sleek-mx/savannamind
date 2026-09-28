# Savanna Mind Learn — Curriculum Blueprint

The binding syllabus for every track in `lib/learn/curriculum/modules/`. Tracks are authored from this file; change the blueprint first, then the track.

## 1. What the course does

Takes a Kenyan learner from never having used AI to being able to build, evaluate, deploy and govern AI systems responsibly, using problems they recognise: farms, clinics, classrooms, dukas, matatus, chamas, county offices.

Three levels, each a full course on its own:

| Level | Learner becomes | Can do at the end |
|---|---|---|
| Beginner | **AI-literate user** | Explains what AI is and is not; uses chatbots and AI apps productively; writes clear prompts; verifies answers; protects personal data; spots AI-powered scams, deepfakes and bias; applies AI safely to their own work. |
| Intermediate | **Skilled practitioner** | Explains how models are built and measured; frames problems for ML; collects and labels data lawfully; reads accuracy, precision, recall and confusion matrices; uses advanced prompting, grounding (RAG) and no-code tools; designs human-in-the-loop workflows; runs a small pilot honestly. |
| Advanced | **Expert builder and leader** | Understands the maths of learning; writes Python to clean data, train and evaluate models; understands neural networks, transformers and embeddings; builds LLM applications with retrieval, evaluation and guardrails; adapts models to Kiswahili and low-resource settings; deploys under Kenyan constraints (cost, bandwidth, power); audits fairness and security; leads governance under the Data Protection Act and Kenya's AI Strategy. |

Six modules. **Foundations (m0)** is the technical spine and goes deepest on AI itself. The five domain modules apply the same ladder to a sector, adding sector-specific data, law, risks and projects. Domain tracks must not re-teach m0 content at length; they reference it in one line and go straight to the domain.

## 2. Structure rules

- Every track has **exactly 12 units**, ids `{module}-{b|i|a}-u{1..12}` (e.g. `hlt-i-u7`).
- File per track: `modules/{module}-{level}.ts`, exporting `{module}{Level}Units` (e.g. `hltIntermediateUnits`). Import helpers from `@/lib/learn/curriculum/helpers`.
- Age slicing shows the **first N units**: 8–10 → 5, 11–13 → 8, 14+ → 12. So **units 1–5 of every track must stand alone as a complete, safe mini-course** (for beginner tracks this means verifying answers and protecting privacy are both inside units 1–5). Units 1–5 of beginner tracks use short sentences and concrete examples a 9-year-old can follow, without talking down to adults.
- Units build on each other. Unit 12 of every track is a synthesis: a realistic scenario or project brief that uses everything in the track.

### Unit pattern (5–8 cards)

1. **Definition first** — `note`. Name the idea, define it plainly, say why it matters here. Then explain the mechanism: how it actually works, not slogans.
2. **Key terms** — `reveal`, 3–5 terms with one-sentence definitions.
3. **Worked Kenyan example** — `note`. Step by step, with real numbers in KES, kg, km, counts. Show the reasoning, including where it goes wrong.
4. **Practice** — at least one `scenario` (situation + question + a remediation hint for **every** option explaining why it is right or wrong) and at least one `quiz` concept check with `explain`.
5. **Do it** — one of: `pb` prompt-builder; a "Try it" `note` with an activity the learner can do today (offline wherever possible); or, at advanced level, a code walk-through `note`.
6. **Carry forward** — optional closing `note`: 3–5 bullet lines (`- `) of what to remember and how it connects to the next unit.

Quizzes test understanding and judgement, not recall of trivia. Wrong options must be plausible mistakes a real learner makes, never jokes ("Only emojis", "Cry", "Magic").

### Note formatting (rendered by the lesson player)

- Paragraphs separated by a blank line (`\n\n`).
- A paragraph whose every line starts with `- ` renders as a bullet list.
- A paragraph starting with ```` ``` ```` renders as a code block. Code blocks **must not contain blank lines**. Keep code short (≤ 25 lines), correct, runnable Python 3 with pandas / scikit-learn / numpy where used. Code is identical in the Kiswahili body; comments may be translated.
- Plain text only otherwise: no markdown headings, bold or links.

## 3. Voice and accuracy

- Speak to the learner as "you". Warm, direct, teacherly. Definitions before jargon; every technical term is defined the first time it is used in a track.
- Kenyan context is the default, not decoration: KES, counties, KCSE/CBC, M-Pesa, SACCOs and chamas, boda boda, matatu stages, mama mboga, jua kali, dukas, CHPs, agrovets, long and short rains.
- **No invented statistics, studies, quotes or product claims.** Use the fact bank (section 5). Anything else is a clearly fictional example: "Imagine a dairy co-operative in Nyandarua with 240 members…". Numbers inside fictional worked examples are fine and must add up.
- No AI vendor or chatbot brand names (say "a chatbot", "a language model"). General tools may be named: Python, pandas, scikit-learn, Google Colab, Teachable Machine, Excel / Google Sheets, WhatsApp, SMS, USSD.
- Never position AI as the final authority on medical, legal, financial or safety decisions. Emergencies: 999 or 112.
- Zero emoji. Brand is "Savanna Mind" (never "Savannah").
- No video cards (IDs could not be verified).

## 4. Kiswahili rules

Every card ships full, natural Standard Kiswahili — translate meaning, not word order. Keep sentences short. Where Kenyan professionals normally use the English term, write the Kiswahili explanation and keep the English term in brackets the first time, e.g. "modeli (model)".

Fixed glossary (use consistently):

| English | Kiswahili |
|---|---|
| artificial intelligence | akili bandia (AI) |
| machine learning | ujifunzaji wa mashine |
| model | modeli |
| data / dataset | data / seti ya data |
| training / to train | mafunzo / kufunza |
| prediction / to predict | utabiri / kutabiri |
| label | lebo |
| feature | sifa |
| accuracy | usahihi |
| error / mistake | kosa |
| bias | upendeleo |
| fairness | usawa |
| privacy | faragha |
| personal data | data binafsi |
| consent | ridhaa |
| verify | thibitisha |
| prompt | maagizo (prompt) |
| chatbot | chatbot / roboti ya mazungumzo |
| language model | modeli ya lugha |
| hallucination | kubuni majibu (hallucination) |
| algorithm | algoriti |
| neural network | mtandao wa neva (neural network) |
| token | tokeni |
| evaluation | tathmini |
| deployment | kuweka kazini (deployment) |
| agricultural extension officer | afisa wa ugani |
| community health promoter | mhamasishaji wa afya ya jamii (CHP) |
| scam / fraud | utapeli / ulaghai |
| deepfake | video au sauti bandia (deepfake) |
| workflow | mtiririko wa kazi |
| human in the loop | binadamu anabaki kwenye uamuzi |

Never write "afisa wa ugavi" (that means supply officer).

## 5. Fact bank (safe to state)

Law and policy
- Kenya National Artificial Intelligence Strategy 2025–2030, launched in March 2025 by the Ministry of Information, Communications and the Digital Economy. Priority areas include agriculture, health, education, public services, finance and MSMEs; it stresses skills, data, infrastructure and ethics.
- Data Protection Act, 2019 — protects personal data; special rules for sensitive personal data (health, biometrics, ethnicity, children's data); rights to be informed, access, correct and delete; principles of lawfulness, purpose limitation, data minimisation, accuracy, storage limitation and security. Enforced by the Office of the Data Protection Commissioner (ODPC), which registers data controllers and processors and handles complaints. Data Protection (General) Regulations, 2021.
- Computer Misuse and Cybercrimes Act, 2018.
- Health Act, 2017 (patient confidentiality). Pharmacy and Poisons Board regulates medicines and health products.
- Central Bank of Kenya regulates digital credit providers (licensing since 2022).
- Competition Authority of Kenya handles consumer protection and misleading advertising.
- KRA eTIMS for electronic tax invoices.
- NACOSTI issues research licences; research on people needs ethics review.

Institutions and systems
- KALRO (agricultural research), Pest Control Products Board (PCPB, pesticide registration and labels), Kenya Meteorological Department (KMD), National Drought Management Authority (NDMA, drought early warning), KEBS, KNBS, KICD (curriculum, CBC), KNEC (national exams, KCSE), TSC, TVET institutions, Social Health Authority (SHA, replaced NHIF in 2024), Community Health Promoters (CHPs), Kenya Health Information System (KHIS, built on DHIS2), eCitizen, Huduma Centres, Konza Technopolis, Kenya Red Cross (1199), emergency 999 / 112.
- M-Pesa, Fuliza, Lipa na M-Pesa tills and paybills, SACCOs, chamas, DigiFarm.

Events and science
- Fall armyworm reached Kenya around 2017; desert locust upsurge in East Africa 2019–2021.
- Sentinel-2 satellites (European Space Agency) provide free 10 m imagery roughly every 5 days; clouds during the long rains block optical images.
- Masakhane is a grassroots African NLP research community.
- CBC senior school pathways: STEM; Social Sciences; Arts and Sports Science.
- Reporting guidelines for clinical AI studies: TRIPOD-AI, CONSORT-AI, SPIRIT-AI. Health data exchange standard: HL7 FHIR.
- Techniques: logistic regression, decision trees, random forests, gradient boosting, k-means, CNNs, transformers, attention, embeddings, retrieval-augmented generation (RAG), fine-tuning, LoRA, quantisation, knowledge distillation, federated learning, differential privacy, Bayesian knowledge tracing.

## 6. Syllabus

Format: `u# Title — objective | Kenyan anchor | practice`.

### m0 Foundations

**Beginner — AI-literate user**
- u1 What AI is, and what it is not — define AI; rule-following software vs learning software; AI as a tool made by people | autocorrect in SMS, M-Pesa fraud alerts, map routes to a matatu stage | sort 8 everyday tools into "rules" vs "learned".
- u2 Data and patterns — data, examples, labels, patterns; how a model learns from examples | a mama mboga's sales book; sorting ripe vs unripe mangoes | pattern game, quiz.
- u3 Predictions can be wrong — prediction vs fact; confidence; why fluent answers can be false; the verify-first habit (who to check with) | a weather app says 70% rain in Kisumu | scenario: act on or check an AI claim.
- u4 Your data, your privacy — personal data; what never to share (ID number, M-Pesa PIN, KRA PIN, passwords, health details, children's photos); Data Protection Act in one paragraph | a chatbot asks for your ID "to help" | scenario.
- u5 Stop, Check, Tell — AI-powered scams: fake SMS, cloned voice notes, fake investment bots; the Stop–Check–Tell routine | "Safaricom" SMS asking for PIN; relative's voice note asking for money | scenario with remediation.
- u6 The kinds of AI you meet — recommendation, classification, speech and translation, generative AI | video feeds, crop photo apps, Kiswahili voice typing | match-the-kind quiz.
- u7 How chatbots write — language models predict the next word; training vs using; why they sound sure; knowledge cut-off | ask about last week's fuel prices | quiz on why answers go wrong.
- u8 Talking to AI: prompts — role, task, context, format, limits; iterate | KCSE revision plan; duka price-list SMS | prompt-builder.
- u9 Checking answers like a pro — hallucination; cross-checking with official sources; asking for reasons; spotting invented references | KALRO, MOH, KNBS, eCitizen as sources | scenario.
- u10 Fairness and bias — biased data leads to biased outputs; language and accent gaps (Kiswahili, Sheng, Dholuo); who gets left out | a voice assistant that fails on a Luo accent; loan apps and rural users | scenario.
- u11 AI and work in Kenya — tasks vs jobs; augmentation; new skills; the National AI Strategy's goals | boda rider, teacher, jua kali welder, clerk | quiz; reflection note.
- u12 My AI charter — synthesis: personal rules for safe, useful AI | a week of real situations | multi-part scenario + write-your-rules activity.

**Intermediate — skilled practitioner**
- u1 The machine learning lifecycle — problem, data, train, evaluate, deploy, monitor, retire | a SACCO wants to predict loan defaults | order-the-steps quiz.
- u2 Framing a problem — classification, regression, clustering, generation; when not to use AI | 6 Kenyan problems to frame | scenario.
- u3 Collecting data lawfully — sampling, representativeness, consent, minimisation | survey of boda riders across 3 counties | scenario on consent.
- u4 Labelling and data quality — labelling guides, disagreement between labellers, noisy labels | labelling maize leaf photos | try it: label 10 items with a friend, compare.
- u5 Features and cleaning — features, missing values, units (debe, gorogoro, kg), outliers, spreadsheets | cleaning a co-op milk delivery sheet | worked example.
- u6 Training and testing honestly — train/test split, overfitting, data leakage, validation | a model "99% accurate" on the data it trained on | scenario.
- u7 Measuring performance — accuracy, precision, recall, F1, confusion matrix; base rates | TB screening of 1,000 people with worked numbers; M-Pesa fraud flags | calculation quizzes.
- u8 Inside a language model — tokens, context window, temperature, training data, why Kiswahili can cost more tokens, instruction tuning | same question at two temperatures | quiz.
- u9 Advanced prompting — few-shot examples, step-by-step reasoning, structured output (tables), self-critique, prompt chains | extract fields from 20 customer SMS into a table | prompt-builder.
- u10 Grounding answers in documents (RAG) — why models need sources; retrieval explained without code; citing; limits | county bylaw Q&A assistant | scenario.
- u11 No-code AI — Teachable Machine, spreadsheet AI features, forms plus chatbots; testing your own model | train an offline leaf or sound classifier | try it.
- u12 Designing a human-in-the-loop workflow — where AI drafts, where humans decide, logs, escalation, failure plans | redesign a Huduma-style enquiry desk | project brief scenario.

**Advanced — expert builder and leader**
- u1 The maths you need — vectors, matrices, dot products, probability, expected value, with KES examples | representing a farmer as a vector | calculation quizzes.
- u2 How learning works — loss functions, gradient descent step by step, learning rate, local minima | fitting a line to maize price vs rainfall by hand for 3 steps | worked numeric example.
- u3 Python for data — notebooks (Colab), pandas: load, filter, group, plot; reproducibility | analyse a CSV of market prices | code walk-through.
- u4 Classical machine learning — logistic regression, decision trees, random forests, gradient boosting; cross-validation; scikit-learn pipeline | predict loan repayment | code walk-through + quiz on reading results.
- u5 Neural networks — neurons, layers, activations, backpropagation, CNNs for images | why a leaf-disease CNN needs thousands of photos | worked example.
- u6 Transformers and embeddings — tokenisation, embeddings, attention, pre-training, why scale matters, semantic search | Kiswahili and English sentences near each other in embedding space | quiz.
- u7 Building LLM applications — APIs, system prompts, RAG pipeline (chunk, embed, retrieve, generate), structured outputs, tool calls, cost per 1,000 requests in KES | a KRA-style FAQ assistant | architecture scenario + code sketch.
- u8 Adapting models: fine-tuning and low-resource languages — transfer learning, fine-tuning vs RAG, LoRA, data for Kiswahili, Sheng, Dholuo, Kikuyu; community datasets (Masakhane) | building a Kiswahili agriculture Q&A set | scenario.
- u9 Evaluation, fairness audits and red-teaming — eval sets, slice metrics by county, gender, language; prompt injection; jailbreaks | audit a CV-screening model | scenario + calculation.
- u10 Deploying in Kenyan conditions — latency, cost, offline and edge (quantisation, distillation), low-end Android, USSD/SMS/WhatsApp interfaces, power cuts | a clinic tool that must work without internet | design scenario.
- u11 MLOps and monitoring — versioning data and models, drift, feedback loops, incident response, model cards | a price model that breaks after a fuel price shock | scenario.
- u12 Governance and leadership — DPA compliance and DPIAs, ODPC registration, Kenya AI Strategy alignment, procurement questions, building teams, career paths (ML engineer, data scientist, AI product manager, AI policy) | brief a county executive on an AI proposal | capstone scenario.

### agr Food and farming

**Beginner**
- u1 AI on the farm — what AI can and cannot do for a smallholder | extension SMS, photo apps | quiz.
- u2 Farm records are data — yields, planting dates, rainfall, costs | a 1-acre maize record in a notebook | try it: start a record.
- u3 Weather forecasts and probability — what "60% chance of rain" means; KMD forecasts vs apps | planting after the onset of long rains | scenario.
- u4 Photo diagnosis apps — how they learn from photos; taking a good photo; why results can be wrong | fall armyworm vs nutrient deficiency | scenario.
- u5 Check before you spray — verify with the afisa wa ugani, agrovet, PCPB label; never share farm finances or ID with unknown apps | chemical dose advice | scenario (units 1–5 complete safe path).
- u6 Asking AI for farm advice — good prompts: crop, stage, location, symptom, budget | prompt-builder.
- u7 Market prices and middlemen — price apps, what forecasts miss, selling decisions | tomatoes at Wakulima Market | scenario.
- u8 Livestock and dairy — heat detection, feeding, mastitis signs, AI suggestions vs the vet | dairy cow in Nyandarua | quiz.
- u9 Scams that target farmers — fake seed, fake subsidy SMS, fake input bots | fertiliser subsidy SMS | scenario.
- u10 Your farm data rights — who collects it, consent, co-ops and apps | a buyer app wants your location and M-Pesa records | scenario.
- u11 Drought and climate early warning — NDMA bulletins, climate variability, AI forecasts | pastoralists in Marsabit | quiz.
- u12 My season plan — synthesis: one AI-assisted habit per stage of the season | scenario.

**Intermediate**
- u1 Precision agriculture — right input, right place, right time; where data comes from.
- u2 Building a co-operative dataset — fields, consistency, consent, storage.
- u3 Train a crop disease classifier (no code) — collect, label, train, test with Teachable Machine.
- u4 Evaluating a diagnosis app — confusion matrix with worked numbers; costs of false negatives vs false positives.
- u5 Yield estimation in a spreadsheet — simple regression, trend lines, uncertainty.
- u6 Satellites and NDVI — what vegetation indices show; Sentinel-2; clouds in the long rains.
- u7 Price forecasting and uncertainty — ranges, seasonality, shocks.
- u8 Advisory chatbots — grounding in extension manuals, refusing out-of-scope questions.
- u9 Reaching farmers: SMS, USSD, voice, local languages — design for basic phones.
- u10 Co-op data governance — consent, sharing agreements, DPA duties.
- u11 Running a pilot — baseline, comparison group, measuring impact honestly.
- u12 Design brief — an AI-assisted advisory service for a co-op.

**Advanced**
- u1 Remote-sensing pipelines — imagery, cloud masking, time series, field boundaries.
- u2 Transfer learning for crop disease — code walk-through, augmentation, external validation.
- u3 Edge deployment — quantisation, offline inference on low-end Android, updating models.
- u4 Soil and yield modelling — features, spatial cross-validation, avoiding leakage.
- u5 Pest outbreak early warning — time series, fall armyworm and locust lessons.
- u6 Livestock and pastoral analytics — sensors, index-based insurance concepts, basis risk.
- u7 An agronomy RAG assistant — sources, chunking, citations, Kiswahili answers, evaluation set.
- u8 Fairness in agri-AI — smallholders vs large farms, women farmers, marginal counties.
- u9 Farmer data governance — data co-operatives, benefit sharing, DPA, cross-border transfer.
- u10 Business models and unit economics — cost per farmer in KES, who pays.
- u11 Field trials and evaluation — design, sample size intuition, reporting.
- u12 Capstone brief — design, evaluate and govern an agri-AI service end to end.

### hlt Health and care

**Beginner**
- u1 AI in Kenyan health care — a helper, never the doctor.
- u2 Health data is sensitive — why health details get extra protection under the DPA.
- u3 Symptom checkers and chatbots — what they can do, what they cannot; emergencies 999 / 112.
- u4 Health misinformation — WhatsApp forwards, checking with a facility or MOH.
- u5 Privacy for patients and CHPs — never paste names, HIV status, ID numbers into public tools (units 1–5 complete safe path).
- u6 Triage and risk scores explained — urgency is not diagnosis.
- u7 Screening with images — how computer-aided TB chest X-ray reading assists clinicians.
- u8 Medicines and wrong doses — always a pharmacist or clinician; Pharmacy and Poisons Board.
- u9 Mental health chatbots — support limits, crisis help (Kenya Red Cross 1199, 999).
- u10 Reminders and follow-up — SMS for clinic visits and immunisation (concept).
- u11 Asking AI to explain health information in plain Kiswahili — prompt-builder with safety limits.
- u12 My safe-use rules — as patient, caregiver or health worker.

**Intermediate**
- u1 Clinical decision support — how it is built and where it sits in care.
- u2 Sensitivity, specificity, PPV — worked TB screening numbers.
- u3 Base rates and false alarms — why a 95% accurate test can mislead.
- u4 Documentation assistants — SOAP summaries grounded in the record; never invented findings.
- u5 Digital tools for CHPs — household visits, referrals, data quality.
- u6 Forecasting stock-outs — demand, lead times, human review.
- u7 Bias in health AI — skin tone, language, sex, rural data gaps.
- u8 Consent and data protection in health — DPA sensitive data, Health Act confidentiality, DPIA basics.
- u9 Designing a safe health chatbot — scope, escalation, refusals.
- u10 Evaluating a vendor tool — questions to ask before buying.
- u11 Piloting in a facility — baseline, logging overrides, patient safety.
- u12 Workflow brief — AI support for a sub-county referral pathway.

**Advanced**
- u1 Health data standards — KHIS/DHIS2, HL7 FHIR, interoperability.
- u2 Building a clinical risk model — logistic regression, calibration, code walk-through.
- u3 Medical imaging deep learning — CNNs, transfer learning, external validation.
- u4 Clinical language models — notes in English and Kiswahili; RAG over national guidelines.
- u5 Evaluation — ROC/AUC, calibration, subgroup analysis.
- u6 Clinical validation — study design, prospective evaluation, TRIPOD-AI and CONSORT-AI.
- u7 Regulation and ethics — software as a medical device, PPB, ethics review, NACOSTI.
- u8 Privacy engineering — de-identification, federated learning, secure hosting, cross-border transfer.
- u9 Safety — hallucination in clinical use, red-teaming, guardrails.
- u10 Deployment in low-resource facilities — offline, power, devices, integration.
- u11 Post-deployment monitoring — drift, incident reporting, feedback.
- u12 Leading health AI — governance committee, capstone brief.

### edu Schools and learning

**Beginner**
- u1 AI in school and learning.
- u2 AI as a study partner — explain and quiz me, not do it for me.
- u3 Honesty and integrity — why submitting AI work as yours is cheating; exam rules.
- u4 Checking AI against your textbook and teacher.
- u5 Staying safe and private as a learner (units 1–5 complete safe path).
- u6 Prompts for learning — explain simply, make a quiz, check my reasoning (prompt-builder).
- u7 Learning in Kiswahili and mother tongues with AI.
- u8 Fake sources and invented references.
- u9 AI for teachers — lesson ideas, differentiation, always reviewed.
- u10 CBC competencies and digital literacy.
- u11 AI and careers — CBC pathways and future work.
- u12 My learning-with-AI plan.

**Intermediate**
- u1 How adaptive learning systems work.
- u2 Designing assessments with AI — Bloom's levels, error hunting.
- u3 Rubrics and AI feedback — the teacher decides marks.
- u4 Differentiation and inclusion — learners with disabilities, language support.
- u5 A classroom AI-use policy — disclosure, allowed and banned uses.
- u6 Over-reliance and unreliable AI detectors.
- u7 Learner data protection — children's data, parental consent, DPA.
- u8 Low-connectivity classrooms — offline tools, shared devices.
- u9 Teaching AI unplugged — activities without computers.
- u10 Evaluating edtech products.
- u11 Action research — measuring whether a tool helps.
- u12 Teacher professional learning plan.

**Advanced**
- u1 Learning science meets AI — retrieval practice, spacing, feedback.
- u2 Knowledge tracing — Bayesian knowledge tracing, code walk-through.
- u3 Learning analytics — dashboards, ethics, misuse.
- u4 A curriculum-grounded tutor — RAG over approved materials, licensing, age safety.
- u5 Kiswahili and local-language NLP for education.
- u6 Automated essay feedback — validity and fairness.
- u7 Evaluation — RCTs, A/B tests, effect sizes.
- u8 Child safety by design — moderation, age-appropriate design.
- u9 Scaling in Kenyan schools — cost per learner, devices, teacher training.
- u10 School and county AI policy and procurement.
- u11 Designing an AI and computing curriculum progression.
- u12 Capstone brief.

### biz Work and livelihoods

**Beginner**
- u1 AI for your hustle or shop.
- u2 Your records are data — sales book, M-Pesa statements.
- u3 Customer messages and promotions — AI drafts, you check prices and promises.
- u4 Scams that target businesses — fake till confirmations, fake suppliers, cloned boss voice.
- u5 Customer data and privacy — never paste customer lists (units 1–5 complete safe path).
- u6 Prompt-builder — supplier SMS or price list.
- u7 Simple stock forecasting — moving average by hand.
- u8 AI for job seekers — CVs, cover letters, interviews, honesty.
- u9 Online and gig work — how AI changes it, fraud warnings.
- u10 What AI tools cost in KES — bundles, subscriptions, time.
- u11 AI for boda, matatu and transport work — routes, earnings, safety.
- u12 My business AI plan.

**Intermediate**
- u1 Mapping workflows to find AI opportunities.
- u2 Customer service assistants on WhatsApp — scope and human handoff.
- u3 Sales and inventory analytics in spreadsheets.
- u4 Demand forecasting and uncertainty.
- u5 Marketing with AI — brand voice, truthful advertising, Competition Authority.
- u6 Digital lending and credit scoring — how it works, fairness, CBK rules.
- u7 Fraud detection basics — anomalies and alerts.
- u8 Data protection for SMEs — ODPC registration, consent, retention.
- u9 Records and tax — AI drafts, eTIMS, verification.
- u10 Choosing and costing tools — return on investment in KES.
- u11 Piloting and measuring.
- u12 SME AI roadmap brief.

**Advanced**
- u1 AI strategy and competitive advantage.
- u2 Demand forecasting model — time series, code walk-through.
- u3 Customer segmentation — k-means, code walk-through.
- u4 A WhatsApp or SMS assistant architecture — RAG, handoff, logs.
- u5 Credit and risk modelling responsibly — explainability, adverse decisions.
- u6 Automation and AI agents in operations — approvals and limits.
- u7 Unit economics of an AI product in Kenya.
- u8 Security — prompt injection, social engineering, Computer Misuse and Cybercrimes Act.
- u9 Legal and regulatory — DPA, consumer protection, contracts, intellectual property.
- u10 Building and managing an AI team and vendors.
- u11 Measuring impact and scaling.
- u12 Venture capstone — pitch and responsible launch.

### cap Your community project

The capstone rule: every idea names **one way AI helps and one risk** (privacy or a wrong guess) and how that risk is managed.

**Beginner**
- u1 What makes a good community problem.
- u2 Listening to people — interviews and consent.
- u3 Mapping the problem — who, where, how often.
- u4 Could AI help, or not? — non-AI solutions first.
- u5 One help, one risk (units 1–5 complete safe path).
- u6 The data you would need and who owns it.
- u7 Sketch your idea — paper prototype.
- u8 Test with people.
- u9 Who is left out — women, older people, people with disabilities, no smartphone.
- u10 Tell the story — poster or pitch.
- u11 Partners — chief, ward administrator, school, clinic, SACCO, CBO.
- u12 Your project card.

**Intermediate**
- u1 Problem statement and success measure.
- u2 Stakeholder map and consent plan.
- u3 Data plan — collection, minimisation, storage.
- u4 Build a no-code prototype.
- u5 Tool and prompt design with guardrails.
- u6 Pilot design — baseline and small group.
- u7 Measuring results honestly — small samples, who dropped out.
- u8 Risk register.
- u9 Inclusion and access — USSD/SMS, voice, Kiswahili.
- u10 Budget in KES and sustainability.
- u11 Reporting back to the community.
- u12 Project dossier.

**Advanced**
- u1 Problem validation and theory of change.
- u2 System design.
- u3 Data governance and DPIA.
- u4 Build — model or LLM application.
- u5 Evaluation protocol and metrics.
- u6 Fairness and safety audit.
- u7 Field pilot and ethics — NACOSTI and ethics review where research.
- u8 Deployment and operations in low connectivity.
- u9 Monitoring and feedback.
- u10 Funding, partnerships and county plans (CIDP).
- u11 Scale and handover.
- u12 Final defence — present your project.

## 7. Definition of done for a track

- `node scripts/check-curriculum.cjs lib/learn/curriculum/modules/{file}.ts` passes.
- 12 units following the syllabus above, in order.
- Every quiz option has a remediation hint where it is a scenario; every quiz has an explanation.
- Kiswahili read back as natural, correct Kiswahili with the glossary terms.
- No invented facts outside the fact bank.
