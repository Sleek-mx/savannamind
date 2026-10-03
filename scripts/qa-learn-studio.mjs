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

function lessonPlayerIncludesVoice(file) {
  return readFileSync(file, "utf8").includes("VoicePlayer");
}

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
import { getModuleGate } from './lib/learn/curriculum/modules/index.ts';
const levels=['beginner','intermediate','advanced'];
const slots=['s1','s2','s3','s4','s5'];
for (const level of levels) {
  for (const slot of slots) {
    const mod=getCurriculumModule(slot,'adult',level);
    if (!mod || mod.units.length!==4) { console.error('units',slot,level,mod&&mod.units.length); process.exit(1); }
    const videos=mod.units.map(u=>u.cards.filter(c=>c.type==='video').length);
    if (videos.join(',')!=='0,1,1,0') { console.error('videos',slot,level,videos); process.exit(1); }
    for (const unit of [mod.units[1], mod.units[2]]) {
      const video=unit.cards.find(c=>c.type==='video');
      if (!video || !video.checks || video.checks.length!==3) { console.error('checks',slot,level,unit.id); process.exit(1); }
    }
    const gate=getModuleGate(slot, level);
    if (!gate || gate.passCount!==4 || gate.items.length!==5) { console.error('gate',slot,level); process.exit(1); }
  }
}
console.log('short course ok');`,
  ],
  { cwd: root, encoding: "utf8" }
);
if (bandCheck.status === 0) ok("Each level has 5 modules, 4 units, videos on specific notes and application, quiz pass 4 of 5");
else fail(`short curriculum shape: ${bandCheck.stderr || bandCheck.stdout}`);

const gateUi = readFileSync(join(learnComponents, "module-gate-quiz.tsx"), "utf8");
if (
  gateUi.includes("Whoops! you have not managed to pass this module. Please relook the notes, specifically:") &&
  gateUi.includes("When ready, come back to this page.") &&
  gateUi.includes("Go Back To Notes") &&
  gateUi.includes("Am ready TO retry")
) {
  ok("module quiz fail screen uses the approved wording and buttons");
} else fail("module quiz fail screen wording drifted");

const youtubeGate = readFileSync(join(learnComponents, "gated-youtube.tsx"), "utf8");
if (youtubeGate.includes("event.data === 0") && youtubeGate.includes("Rewatch from")) {
  ok("video checks unlock on the YouTube ended state and send a miss back to its timestamp");
} else fail("video question lock is not tied to the player ended state");

const hub = readFileSync(join(learnComponents, "learn-hub.tsx"), "utf8");
if (
  !hub.includes("Gain is not in yet.") &&
  !hub.includes("Gain against the pre-check") &&
  hub.includes("onStartPrecheck") &&
  hub.includes("outcomeBestScore") &&
  hub.includes("learn-hub-pie") &&
  hub.includes("learn-hub-text-card")
) {
  ok("dashboard hides the gain card, charts module progress and XP, and shows level, age, and career as text");
} else fail("dashboard gain card is still shown or the stat layout drifted");

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
if (
  studioApp.includes("proceedWithCaptchaCheck(\"home\")") &&
  studioApp.includes("onStartPrecheck") &&
  studioApp.includes("<LearnHub") &&
  studioApp.includes("PreAssessmentQuiz") &&
  studioApp.includes("TurnstileGate")
) {
  ok("Get Started opens the locked dashboard; pre-check still uses the existing quiz after Turnstile");
} else fail("studio entry does not route new learners to the locked dashboard");

const flashcards = readFileSync(join(learnComponents, "flashcard-bullets.tsx"), "utf8");
if (flashcards.includes("Next card") && flashcards.includes("onClick={onComplete}")) {
  ok("flashcard Next advances to the next card after bullets reveal");
} else fail("flashcard Next does not advance the card");
const precheck = readFileSync(join(learnComponents, "pre-assessment-quiz.tsx"), "utf8");
if (precheck.includes('setStage("calibrating")') && precheck.includes("level_revealed") && precheck.includes("<Loader")) {
  ok("pre-check still uses the calibrating loader and level-reveal stage");
} else fail("pre-check calibrating animation missing");
if (lessonPlayerIncludesVoice(join(learnComponents, "lesson-player.tsx"))) {
  ok("voice player still mounts in the lesson");
} else fail("voice player missing from the lesson");

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

if (hub.includes("deriveLearnerName") && hub.includes("displayName")) {
  ok("dashboard receives auto-derived learner name");
} else fail("dashboard does not display derived learner name");

const certificate = readFileSync(join(learnComponents, "certificate-view.tsx"), "utf8");
if (
  certificate.includes("deriveLearnerName") &&
  certificate.includes("courseCertificateReady") &&
  certificate.includes("Dr. Tawfiq Bashir") &&
  certificate.includes("/api/learn/certificate") &&
  !certificate.includes("Preview certificate") &&
  !certificate.includes("Layout preview")
) {
  ok("certificate is offered with the learner name only after the end-of-course check");
} else fail("certificate preview is still offered before the end-of-course check");

const certificatePdf = readFileSync(join(root, "lib/learn/certificate-pdf.ts"), "utf8");
const certificateRoute = readFileSync(join(root, "app/api/learn/certificate/route.ts"), "utf8");
if (
  certificatePdf.includes("Savanna Mind") &&
  certificatePdf.includes("Dr. Tawfiq Bashir") &&
  certificatePdf.includes("embedPng") &&
  certificateRoute.includes("courseCertificateReady") &&
  certificateRoute.includes("assessTurnstile") &&
  certificateRoute.includes("buildCertificatePdf")
) {
  ok("certificate PDF names Savanna Mind and Dr. Tawfiq Bashir after the course check");
} else fail("certificate PDF is missing a signatory or the completion gate");

const lessonPlayerCert = readFileSync(join(learnComponents, "lesson-player.tsx"), "utf8");
if (!lessonPlayerCert.includes("View certificate") && !lessonPlayerCert.includes("Angalia cheti")) {
  ok("lesson player does not offer the certificate before the end-of-course check");
} else fail("lesson player still offers a certificate");

const tutorRoute = readFileSync(join(root, "app/api/learn/tutor/route.ts"), "utf8");
const captchaRoute = readFileSync(join(root, "app/api/auth/verify-captcha/route.ts"), "utf8");
const turnstileLib = readFileSync(join(root, "lib/security/turnstile.ts"), "utf8");
const publicTurnstile = readFileSync(join(root, "lib/security/turnstile-public.ts"), "utf8");
const stateRoute = readFileSync(join(root, "app/api/learn/state/route.ts"), "utf8");
const middlewareSrc = readFileSync(join(root, "middleware.ts"), "utf8");
if (
  !captchaRoute.includes('|| "1x0000000000000000000000000000000AA"') &&
  !captchaRoute.includes("sm_turnstile_verified") &&
  turnstileLib.includes('token.startsWith("XXXX")') &&
  publicTurnstile.includes("TURNSTILE_SECRET_KEY") &&
  publicTurnstile.includes("missing from the Vercel Production environment") &&
  stateRoute.includes("assessTurnstile") &&
  tutorRoute.includes("assessTurnstile") &&
  middlewareSrc.includes("LESSON_PATH") &&
  middlewareSrc.includes("assessTurnstile")
) {
  ok("Turnstile is verified on the server and fails closed without TURNSTILE_SECRET_KEY");
} else fail("Turnstile still accepts a test secret or does not gate learn state");

const gateCheck = spawnSync("npx", ["--yes", "tsx", "scripts/check-turnstile-certificate.ts"], {
  cwd: root,
  encoding: "utf8",
});
if (gateCheck.status === 0) ok("production Turnstile rejects test tokens and the certificate PDF renders");
else fail(`turnstile/certificate behavior: ${gateCheck.stderr || gateCheck.stdout}`);
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
