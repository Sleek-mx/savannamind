# AGENTS.md

Savanna Mind is a live Next.js 14 app with English and Kiswahili routes, Supabase auth, and Learn Studio. Vercel deploys production from `main`. Canonical host: https://savannamind-ashy.vercel.app.

## Leave the live app alone

- Do not change runtime behavior, UI, API routes, auth, curriculum content, or deploy config unless the task explicitly asks for that.
- Keep `eslint.ignoreDuringBuilds` in `next.config.mjs`. Lint must not fail `next build`, or production deploys break.
- GitHub Actions (`.github/workflows/ci.yml`) runs on pull requests only. It does not deploy and it does not run on `main`.
- Never commit `.env.local`, service keys, or other secrets. `.env.example` is the key list only.
- Do not run `vercel env pull` over `.env.local`.
- Do not mass-format existing source. Prettier is limited to the tooling files listed in `npm run format`.

## Commands

- `npm ci` — install from the lockfile
- `npm run dev` — local app at http://localhost:3000/en
- `npm test` — unit and smoke tests; no network and no secrets
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint; advisory. CI keeps this step non-blocking. One existing Learn Studio local is named `module`, so `@next/next/no-assign-module-variable` is a warning. Do not rename it unless you are already editing that screen.
- `npm run format:check` — Prettier on tooling files only
- `npm run qa:learn` — existing curriculum and studio content checks
- `npm run build` — production build (`prebuild` syncs public learn JSON first)

## Tests

`tests/` covers pure helpers only:

- `safeAuthNextPath` — auth return links stay on this site
- `deriveLearnerName` — display name from auth metadata
- Supabase URL cleanup and site URL fallback

These tests do not call Supabase, Resend, or the tutor API.

## Layout

- `app/` — routes and API handlers
- `components/` — UI
- `lib/` — domain helpers
- `scripts/` — content sync and QA
- `.github/workflows/ci.yml` — pull-request checks
