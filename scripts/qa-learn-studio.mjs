#!/usr/bin/env node
/**
 * Automated checks aligned with BUILD-SESSION-HANDOFF verification (not a substitute for manual UX QA).
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = 0;

function ok(msg) {
  console.log(`OK  ${msg}`);
}
function fail(msg) {
  console.error(`FAIL ${msg}`);
  failed++;
}

const publicAssets = [
  "public/learn/timed-quizzes.json",
  "public/learn/learn-careers.json",
  "public/learn/learn-videos-by-band.json",
];
for (const p of publicAssets) {
  if (existsSync(join(root, p))) ok(`exists ${p}`);
  else fail(`missing ${p} (run npm run sync:learn)`);
}

const careers = JSON.parse(
  readFileSync(join(root, "lib/learn/learn-careers.json"), "utf8")
);
if (careers.careers?.length === 22) ok("22 career IDs in learn-careers.json");
else fail(`expected 22 careers, got ${careers.careers?.length}`);

const studioCss = readFileSync(join(root, "app/learn-studio.css"), "utf8");
if (studioCss.includes("--learn-cream")) ok("learn-studio cream tokens present");
else fail("learn-studio.css missing cream tokens");

const studioLayout = readFileSync(
  join(root, "app/[locale]/learn/studio/layout.tsx"),
  "utf8"
);
if (studioLayout.includes("learn-studio-route")) {
  ok("studio layout sets learn-studio-route (hides marketing chrome)");
} else fail("studio layout missing learn-studio-route boot");

const globals = readFileSync(join(root, "app/globals.css"), "utf8");
if (globals.includes("--color-night") && globals.includes("#0b1f26")) {
  ok("marketing dark teal tokens in globals.css");
} else fail("globals.css marketing tokens");

const learnComponents = join(root, "components/learn");
for (const name of ["learn-studio-app.tsx", "lesson-player.tsx", "timed-quiz-runner.tsx"]) {
  const text = readFileSync(join(learnComponents, name), "utf8");
  if (/SDG/i.test(text)) fail(`${name} mentions SDG in learner UI`);
  else ok(`no SDG string in ${name}`);
}

const bandCheck = spawnSync(
  "npx",
  [
    "--yes",
    "tsx",
    "-e",
    `import { getCurriculumModule } from './lib/learn/curriculum/resolve.ts';
const t=[['kids',9],['youth',12],['adult',18]];
for (const [b,w] of t) {
  const n=getCurriculumModule('m0',b,'beginner')!.units.length;
  if (n!==w) { console.error('band',b,n); process.exit(1); }
}
console.log('bands ok');`,
  ],
  { cwd: root, encoding: "utf8" }
);
if (bandCheck.status === 0) ok("Kids 9 / Youth 12 / Adult 18 units on m0 beginner");
else fail(`band unit counts: ${bandCheck.stderr || bandCheck.stdout}`);

const timed = JSON.parse(
  readFileSync(join(root, "lib/learn/timed-quizzes.json"), "utf8")
);
if (timed.passMarkPercent === 80) ok("timed-quizzes.json passMarkPercent 80");
else fail(`timed-quizzes passMarkPercent expected 80, got ${timed.passMarkPercent}`);

const sampleUnit = timed.unitQuizzes?.["m0-b-u1"];
const variants = sampleUnit?.variants;
if (
  variants?.A?.length === 5 &&
  variants?.B?.length === 5 &&
  variants?.C?.length === 5 &&
  sampleUnit?.timeLimitMinutes === 20
) {
  ok("sample unit quiz m0-b-u1: 3×5 questions, 20 min");
} else {
  fail("unit quiz shape invalid for m0-b-u1");
}

const sampleExam = timed.moduleExams?.["m0|beginner"];
const examVariants = sampleExam?.variants;
if (
  examVariants?.["M-A"]?.length === 10 &&
  examVariants?.["M-B"]?.length === 10 &&
  sampleExam?.timeLimitMinutes === 35
) {
  ok("sample module exam m0|beginner: 3×10 questions, 35 min");
} else {
  fail("module exam shape invalid for m0|beginner");
}

const kibo = readFileSync(join(learnComponents, "kibo-assistant.tsx"), "utf8");
if (kibo.includes("kidsBand") && kibo.includes("!embedded")) {
  ok("Kibo Kids chips-only guard in embedded layout");
} else fail("kibo-assistant.tsx missing Kids embedded input guard");

const studioApp = readFileSync(join(learnComponents, "learn-studio-app.tsx"), "utf8");
if (studioApp.includes("Learn AI to solve real problems") && studioApp.includes("GetStartedButton") && studioApp.includes("setIntroStage(4)") && studioApp.includes("introStage > 1 ? -48 : 0")) {
  ok("logo intro reveals requested headline and Get Started before onboarding/dashboard routing");
} else fail("Studio logo intro sequence or CTA missing");
if (!studioApp.includes("studio-intro.mp4") && !existsSync(join(root, "public/learn/studio-intro.mp4"))) {
  ok("obsolete intro MP4 removed");
} else fail("obsolete intro MP4 still referenced or present");
if (studioApp.includes('profile?.onboardingComplete ? "home" : "onboarding"') && studioApp.includes("<LearnHub profile={profile}")) {
  ok("new learners onboard; returning learners open dashboard directly");
} else fail("studio entry does not route to onboarding/dashboard correctly");

const flashcards = readFileSync(join(learnComponents, "flashcard-bullets.tsx"), "utf8");
if (flashcards.includes("Next card") && flashcards.includes("onClick={onComplete}")) {
  ok("flashcard Next advances to the next card after bullets reveal");
} else fail("flashcard Next does not advance the card");
if (studioApp.includes("goBack") && studioApp.includes("language: null") && studioApp.includes("PREVIOUS_STEP")) {
  ok("real onboarding remains language-first and supports backward navigation");
} else fail("onboarding language-first/back navigation missing");

if (
  !studioApp.includes("finishNickname") &&
  !studioApp.includes('step === "nickname" &&') &&
  studioApp.includes("deriveLearnerName")
) {
  ok("nickname questionnaire removed; learner name derived from auth");
} else fail("nickname onboarding step still present or auth name derivation missing");

const copySrc = readFileSync(join(root, "lib/learn/copy.ts"), "utf8");
if (
  copySrc.includes('"language"') &&
  copySrc.includes('"guardian"') &&
  !copySrc.includes('"nickname"')
) {
  ok("onboarding step list no longer includes nickname");
} else fail("copy.ts onboarding steps still include nickname");

const nameCheck = spawnSync(
  "npx",
  [
    "--yes",
    "tsx",
    "-e",
    `import { deriveLearnerName } from './lib/learn/learner-name.ts';
const a = deriveLearnerName({ user_metadata: { full_name: 'Amina Wanjiku' }, email: 'x@y.com' });
const b = deriveLearnerName({ user_metadata: { name: 'Otieno' }, email: 'x@y.com' });
const c = deriveLearnerName({ user_metadata: {}, email: 'kibo@example.com' });
const d = deriveLearnerName(null, 'Learner');
if (a !== 'Amina Wanjiku' || b !== 'Otieno' || c !== 'kibo' || d !== 'Learner') {
  console.error(JSON.stringify({ a, b, c, d }));
  process.exit(1);
}
console.log('names ok');`,
  ],
  { cwd: root, encoding: "utf8" }
);
if (nameCheck.status === 0) ok("deriveLearnerName prefers full_name, then name, then email prefix");
else fail(`deriveLearnerName fallbacks: ${nameCheck.stderr || nameCheck.stdout}`);

const hub = readFileSync(join(learnComponents, "learn-hub.tsx"), "utf8");
if (hub.includes("deriveLearnerName") && hub.includes("displayName")) {
  ok("dashboard receives auto-derived learner name");
} else fail("dashboard does not display derived learner name");

const certificate = readFileSync(join(learnComponents, "certificate-view.tsx"), "utf8");
if (certificate.includes("deriveLearnerName")) {
  ok("certificate receives auto-derived learner name");
} else fail("certificate does not use derived learner name");

const tutorRoute = readFileSync(join(root, "app/api/learn/tutor/route.ts"), "utf8");
if (
  kibo.includes("learnerName") &&
  tutorRoute.includes("learnerName") &&
  tutorRoute.includes("The learner's name is")
) {
  ok("Kibo tutor receives auto-derived learner name");
} else fail("Kibo tutor does not receive learner name");

const definitions = readFileSync(join(learnComponents, "definition-flip-cards.tsx"), "utf8");
if (definitions.includes("Tap to reveal") && definitions.includes("aria-expanded={isRevealed}") && definitions.includes("isRevealed && <p")) {
  ok("definition cards disclose meanings on tap");
} else fail("definition cards do not implement tap-to-reveal");

const lessonPlayer = readFileSync(join(learnComponents, "lesson-player.tsx"), "utf8");
if (lessonPlayer.includes("cardIndex === 0 && isVideoNotesMode(module.id, unit.id)")) {
  ok("remediation videos appear only in video-notes iterations");
} else fail("remediation video visibility is not gated by video-notes mode");

const kiboAssistant = readFileSync(join(learnComponents, "kibo-assistant.tsx"), "utf8");
if (kiboAssistant.includes("useState(embedded)") && !kiboAssistant.includes("if (struggleNudge) {\n      setOpen(true)")) {
  ok("floating Kibo stays closed until learner interaction");
} else fail("Kibo can open without learner interaction");

const videoData = JSON.parse(readFileSync(join(root, "lib/learn/learn-videos-by-band.json"), "utf8"));
const kidsVideoIds = videoData.bands?.kids?.pool?.map((video) => video.youtube) ?? [];
if (!kidsVideoIds.includes("JMUxm6yrhJM") && kidsVideoIds.includes("IFlllNEDbNE")) {
  ok("Kids pool excludes confirmed unavailable source and includes verified public source");
} else fail("Kids video pool still contains confirmed unavailable source");

console.log(failed ? `\n${failed} check(s) failed` : "\nAll automated Learn Studio checks passed.");
process.exit(failed ? 1 : 0);
