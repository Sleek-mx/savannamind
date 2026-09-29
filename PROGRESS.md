# PROGRESS — Savanna Mind production release

## Current goal — 2026-09-29

Release reviewed auth, email, and Learn cloud-sync source from `main` to Git-connected Vercel project `macsinjobs-6649/savannamind`. Canonical URL: `https://savannamind-ashy.vercel.app` until the short `savannamind.vercel.app` hostname can be reclaimed. Never commit `.env.local` or sync `SUPABASE_ACCESS_TOKEN` to Vercel.

## Verified so far

- Git remote is `https://github.com/Sleek-mx/savannamind.git`; `main` matched `origin/main` at initial audit, but the large local auth/cloud change set was uncommitted.
- Supabase project `epotmrwulmdpgqzuodwp` has private `learner-data` bucket plus `profiles` and `learner_progress` tables; all had zero rows/users at audit. No `demo@savannamind.com` user exists.
- Supabase Auth Site URL is the ashy URL; redirect allow list includes it; Google provider and Resend SMTP are enabled. Resend key is send-only, so the domain list could not be read through that key.
- Vercel project is Git-connected to `Sleek-mx/savannamind` on `main`, and its project domains list includes `savannamind-ashy.vercel.app`. Existing CLI deployments used dirty local files under the old Git SHA.
- Current public ashy `/en/signup` and `/en/login` return 200; logged-out `/en/learn/studio` redirects to login. Short hostname `/en/signup` returns 404.
- BrowserSkill reports no connected browser, so signed-in UI click-through is currently blocked. `npm run qa:learn` passed before this release's additional source edits.
- Vercel production variables were refreshed with `node scripts/sync-vercel-env.mjs`; its allowlist excludes `SUPABASE_ACCESS_TOKEN`.
- Supabase confirmation initially failed because the SMTP sender was `info@savannamind.com`. After changing it to `onboarding@resend.dev`, a confirmation email reached the connected `macsinjobs@gmail.com` inbox. The test account confirmed and password login succeeded through Supabase Auth. Google OAuth initiation redirects to Google with Supabase's callback URI; completing Google account sign-in remains untested.
- Resend test mode rejects `info@savannamind.com` as a recipient (403) and accepts only `macsinjobs@gmail.com`. `.env.local` and Vercel production env now route contact/waitlist notifications to the connected owner inbox temporarily. Verify a sending domain and switch `RESEND_FROM`, Supabase SMTP sender, and `CONTACT_INBOX_EMAIL` together before using the business inbox.
- Cloud safety code now validates PUT data, surfaces Storage/table failures, and binds local cache to an account. `npm run qa:learn`, `npx tsc --noEmit`, and full `npm run build` passed. A local production server returned 401 for unsigned Learn state calls; a fresh confirmed test user got 200 empty state, malformed PUT 400, valid PUT 200, and reload GET 200 with matching XP/card. Storage object and both tables reflected saved state. The temporary fresh-user account and its data were removed.
- UptimeRobot account has five monitors against a 50-monitor limit, and active email (`titusmuhihu@gmail.com`) and phone (`Macsie's S22+`) contacts. Connected UptimeRobot add-monitor API returned 403 `access_denied` even with minimal fields; no Savanna monitor exists yet. It needs a write-capable connection or dashboard access.

## Next

1. Review the bounded Learn cloud-safety worker changes, then finish auth/API fixes and run a clean build.
2. Link the repo to the intended Vercel project, sync production env from `.env.local` without pulling env, commit and push to `main`.
3. Verify the Git-triggered production deployment, then smoke-test auth, email, APIs, cloud state, and UptimeRobot monitoring. Report any flow that cannot be verified because BrowserSkill is disconnected or mail cannot be received.

## Historical Learn Studio checkpoint (2026-09-28)

The prior instruction against committing or deploying applied to that earlier audit. The current user explicitly authorized a reviewed push to `main` and a production release.

Repo: `/Volumes/Macsie_SSD/Github/SleekMX/savannamind`
Branch: `feat/savannamind-full-rebuild`
No commit, push, deploy, or branch switch. Preserve all existing dirty/untracked files.

## Current goal

Continue QA and refinement of the implemented Learn Studio. This audit started at 97% five-hour usage and made no feature edits; stop here and resume only in a fresh authorized session. User explicitly superseded earlier request to play MP4 on entry: no entry video.

## Implemented

- Studio entry has existing background/logo, staged logo fade → logo lift → “Learn AI to solve real problems” → supplied-style Get Started button. CTA zoom transitions into existing onboarding for new learners and dashboard for returning learners. `public/learn/studio-intro.mp4` removed.
- Real onboarding remains language first and retains actual age, career, level, guardian, nickname state/validation and saved-draft resume. Added Back navigation plus animated numbered medallions/progress and step transitions.
- Dashboard is now LearnHub directly after onboarding/returning entry; locked modules remain greyed, Continue is available, and Exit to website links to locale homepage. Legacy `?hub=1` still resolves dashboard.
- Lesson header provides Back to dashboard. Existing unit sidebar remains left. Card navigation includes Go back in bottom-right of card; first card is coded disabled. Flashcard Next advances card; meanings use Tap to reveal; Kibo starts closed and opens by click.
- Remediation videos stay hidden in first quiz iteration and appear in video-notes remediation. Kids video fallback, clearer EN/SW fraud scenario, and prior curriculum/quiz/token/motion fixes preserved.
- QA updated for new entry and routing; obsolete MP4 asset assertion removed.

## Verification after final source edits

- `npm run qa:learn` — all 24 checks pass.
- `npx tsc --noEmit` — pass.
- `npm run build` — last recorded pass; 35 routes generated before the CSS-only layout correction below. Do not treat a fresh post-CSS build as verified until rerun.
- BrowserSkill Chrome instance `20d7189b`, session `snbr` (stopped cleanly): production localhost `http://localhost:3714/en/learn/studio` showed logo then requested headline and Get Started; clicking Get Started for the existing returning profile opened Dashboard directly with locked modules and Exit to website; clicking unlocked Foundations opened lesson with Back to dashboard; Go back changed visible progress from Card 2 / 111 to Card 1 / 111.
- Browser saw existing profile, so new-learner language-first onboarding was not clicked through in browser. Browser observation at Card 1 did not report a `[disabled]` marker despite source `disabled={cardIndex === 0}`; verify first-card disabled state on next browser pass. Previous unit-quiz/remediation video playback was not re-tested this pass; historical source/automated evidence only.
- Current audit found two Next 14 servers with this repo as cwd: PID 49223 on port 3714 and PID 93819 on port 3715. Do not kill either without confirming ownership and user intent. The old exec-session number 45424 is stale metadata, not proof of the current PID.
- Unrelated Next 16 `study-command-center` remains on port 3000 (PID 82075); leave it untouched.

## Next work (cold start)

1. Check Codex limits first. This audit reached 97% five-hour / 81% weekly, so no implementation or rebuild was started. Resume only in a fresh authorized turn with adequate remaining usage.
2. Inspect `components/learn/lesson-player.tsx` previous-card index and rendered disabled attribute; verify first card cannot move backward, without clearing/overwriting user's existing browser profile.
3. If practical, verify fresh onboarding path using a safe non-destructive test setup and click language → age → Back/Next → finish → dashboard. Do not reset the user's existing learner state.
4. Re-run `npm run qa:learn`, `npx tsc --noEmit`, and `npm run build` after any changes. Use a verified same-repo server PID and free port; do not rely on session 45424.

## Resume audit — 2026-09-28

- Read client handoff first. Actual repo is substantially ahead of older notes: Studio entry, onboarding, dashboard, curriculum, lesson routes, certificate preview, Kibo tutor route, QA scripts, bilingual assets, and 35 recorded routes exist.
- No OpenCode worker was active during this audit. Only Next servers were present. No source files were changed.
- Usage at audit: 97% of five-hour window and 81% of weekly window. Stop implementation now.
- Last known automated status: `npm run qa:learn` 24/24 pass, `npx tsc --noEmit` pass, `npm run build` pass before the latest CSS cascade correction. Fresh BrowserSkill verification is still needed for first-card disabled behavior, new learner onboarding, and post-CSS desktop lesson layout.
- Tutor remains a release risk: prior evidence recorded model-name/404 trouble. Verify the current `BAI_MODEL` and end-to-end `/api/learn/tutor` response in a low-usage session before claiming Kibo works.

## Lesson layout follow-up — 2026-09-28

- Checked the client handoff at `/Volumes/Macsie_SSD/Mac Archive/Documents/Clientele/Savanna Mind/progress.md` and inspected Learn Studio in the existing BrowserSkill session `gewo`.
- Browser observation on the lesson page showed the unit list, lesson-card area, and Kibo launcher. Source inspection found the desktop grid’s two-column rule was overridden later by `.learn-lesson-grid:has(.learn-lesson-kibo) { grid-template-columns: 1fr; }`.
- Fixed only the desktop cascade in `app/learn-studio.css`: when the floating Kibo wrapper is present, desktop now restores the intended unit-sidebar + lesson-content columns. The existing fixed bottom-right Kibo launcher/panel styles are retained.
- Existing curriculum slicing remains Kids 9 / Youth 12 / Adults 18 units (the Learn QA check confirms those counts for Foundations beginner). Lesson notes and quiz-linked content were not shortened or altered.
- Post-edit checks: `npm run qa:learn` passed all checks; `npx tsc --noEmit` passed.
- Did not run `npm run build` or reload the browser: the existing preview on port 3714 uses `.next`, and rebuilding/reloading it could disrupt the running preview. Therefore the CSS correction is source-checked and automated-tested but not yet visually verified in a fresh build.
- BrowserSkill session `gewo` was stopped cleanly. Preserve the existing preview server.

## Historical evidence only

Older initial-verification and prior BrowserSkill notes above the current work were replaced by this checkpoint. Any MP4 intro observations from earlier iterations are obsolete and must not be reported as current behavior.
