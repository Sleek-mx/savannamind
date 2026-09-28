# Savanna Mind — Cursor Continuation Prompt

Copy everything below this line into a fresh Cursor session.

---

## Project location and current state (verified 2026-09-27 — do not re-derive, do not contradict)

- Repo: `/Volumes/Macsie_SSD/Github/SleekMX/savannamind`
- Branch: `feat/savannamind-full-rebuild` — stay on this branch. Never switch, never force-push, never rebase or reset.
- Remote: `origin https://github.com/Sleek-mx/savannamind.git`
- Stack: Next.js 14.2.35 (App Router), React 18.3.1, next-intl 3.26.5, Tailwind CSS 3.4.17, TypeScript 5.9.3, lucide-react 1.48.0. Node scripts: `npm run dev`, `npm run build`, `npm run lint`.
- Status: rebuild in progress. Committed so far: `SPECIFICATION.md`, `README.md`, legacy `index.html`, `kibo_3d.jpg`, `logo.png`, `vercel.json`. Everything else is untracked work-in-progress: `app/`, `components/`, `i18n/`, `middleware.ts`, `package.json`, `package-lock.json`, `next.config.mjs`, `postcss.config.js`, `tsconfig.json`, `.gitignore`, `public/` (logo-mark.png, logo-full.png, kibo-3d.jpg, hero-section.png). `vercel.json` has uncommitted edits. Unprotected work — commit checkpoints are mandatory (see Working rules).
- Routes built (untracked): `app/[locale]/page.tsx` (home), `about`, `projects`, `resources`, `contact`, `focus-areas`, `learn` — each rendered for locales `en` and `sw` via `generateStaticParams`. Root `app/page.tsx` redirects to `/en`. Shared server components in `components/site-header.tsx` (SiteHeader, SiteFooter, isLocale). Locale scaffolding in `i18n/routing.ts` (en/sw, localePrefix "always"), `i18n/request.ts`, `middleware.ts`.
- Vercel project is linked locally (`.vercel/project.json`) but nothing has been deployed from this Next.js app yet.
- Product source of truth: `SPECIFICATION.md` (AI-literacy platform, Kenya-context, child audiences, AI tutor guardrails, child safety). `README.md` describes the superseded static site — treat as stale for the Next.js app.

## Start here: current build blocker (reproduced 2026-09-27)

`npm run build` fails during static generation of `/en/contact` (page generation times out after 3 attempts) with:

```
Error: Event handlers cannot be passed to Client Component props.
  {onSubmit: function onSubmit, style: ..., children: ...}
```

Cause: inline `onSubmit` handlers in Server Components at:
- `app/[locale]/contact/page.tsx` line 123 (contact form)
- `app/[locale]/learn/page.tsx` line 261 (waitlist form)

Next action (do this first, before anything else):
1. Extract each form into a small client component in `components/` (e.g. `components/contact-form.tsx`, `components/waitlist-form.tsx`) marked `"use client"`, moving the handler and any local state there. Keep the pages as Server Components.
2. Re-run `npm run build`. It must complete with zero errors before any other feature work.

## Constraints

### Design
- Dark savanna-teal system defined by CSS variables in `app/globals.css` (`:root`): page `#0b1f26`, raised surface `#0f2a33`, primary teal `#0b5f62`, accent teal `#26a9ab`, signature gold `#faab36`, text `#eaf3f2`, muted `#9db8bc`. Use the existing tokens (`var(--space-*)`, `var(--text-*)`, `var(--radius-*)`) instead of hard-coded values.
- Zero-emoji UI (project rule). No emoji anywhere in code, copy, or comments.
- Kibo 3D mascot assets live in `public/` (`kibo-3d.jpg`, `logo-mark.png`, `logo-full.png`, `hero-section.png`). Do not regenerate or replace brand assets.
- Layout primitives: `site-shell`, `surface`, `section`, `container`, `prose`, `skip-link` classes in `globals.css`. Match existing page structure when adding sections.

### i18n
- Locales: `en` (default) and `sw`, prefix always present (`/en/...`, `/sw/...`). Every new route needs `generateStaticParams` over `routing.locales` and entries in both languages.
- Current pattern: per-page local dictionary objects (`const t = ...`) keyed by locale, plus the SEO dict in `app/[locale]/layout.tsx`. Keep this pattern for now — do not migrate mid-stream.
- Known latent gap: `i18n/request.ts` imports `../messages/${locale}.json` but no `messages/` directory exists, and nothing yet consumes `useTranslations`. Do not invoke that code path; if you wire next-intl providers later, create `messages/en.json` and `messages/sw.json` first and verify the build.
- Swahili copy: keep existing strings as-is; new strings must be real Swahili, not machine-flavored filler. When unsure of a translation, leave a `TODO(i18n):` comment and flag it in progress.md instead of inventing.

### Integration
- Keep pages as Server Components by default. Add `"use client"` only to the smallest interactive leaf (forms, toggles). Never pass functions, event handlers, or non-serializable props from Server to Client Components.
- `metadataBase` is `https://savannamind.com`. Keep SEO metadata, Open Graph (`/hero-section.png`), and icons (`/logo-mark.png`) consistent when adding pages.
- No new dependencies without stating the reason and the exact pinned version in progress.md first. `next.config.mjs` uses `images: { unoptimized: true }` — do not switch on the image optimizer.

### Content
- Brand voice: "savanna mind — Where Algorithms Serve Communities". Kenya- and Africa-specific, non-generic; align with personas and curriculum axes in `SPECIFICATION.md` (sections 2–6).
- Audience includes children (starting band ages 8–10). Child-safety rules in SPECIFICATION.md sections 7–8 are binding for any copy, forms, or tutor surfaces: data minimization, no collecting more than needed, guardrails before interactivity.
- Do not invent statistics, partner names, or claims. Placeholder content must be marked `TODO(content):` and logged in progress.md.

### Deployment
- Do not deploy. No `vercel` deploy commands, no production pushes, no domain/DNS changes.
- `vercel.json` is stale: it still builds the legacy static `index.html` via `@vercel/static` (with uncommitted edits removing the `name` field). Before any future deploy it must be replaced with a Next.js-appropriate config (or removed) and the legacy `index.html` at repo root must be consciously kept, moved, or deleted — record the decision in progress.md, but do not act on deployment now.
- `.gitignore` currently lacks a `.env` entry. If any env var is ever introduced, add `.env*` to `.gitignore` first and never commit values.

### Verification (definition of "works")
- `npm run build` completes with zero errors — this is the primary gate. Run it after every functional change, not just at the end.
- `npm run lint` runs clean or pre-existing issues are listed in progress.md with reasons.
- All seven routes render for both locales without runtime errors: `/en`, `/en/about`, `/en/projects`, `/en/resources`, `/en/contact`, `/en/focus-areas`, `/en/learn` (and `/sw` equivalents). `<html lang>` must match the active locale (langSync script in `app/[locale]/layout.tsx`).
- Forms: submitting shows the existing confirmation behavior without console errors.
- Report only checks you actually ran. Never claim "build passes", "deployed", or "done" without having run and observed it.

## Working rules

- Checkpoints: maintain `progress.md` at repo root (create it if missing — it does not exist yet). After each completed unit of work, append a dated entry: what changed, files touched, build status, next step. Commit small, reversible checkpoints on the current branch with clear conventional-commit messages (e.g. `fix: extract contact/learn forms into client components`). Never amend or rewrite existing commits.
- Process safety: kill only processes you started, by PID. If a dev server is needed, note its PID and stop exactly that PID when done. Never `pkill node`, never kill-system-wide, never touch unrelated Vercel, git, or editor processes.
- Git safety: no branch switches, no force-push, no reset/rebase, no `git clean`, no deleting committed history. Deleting untracked scratch files you created yourself is fine.
- Secrets: none are stored in this repo and none are needed. Never create, read, or commit `.env` files, API keys, or tokens. If a feature seems to need a key, stop and note it in progress.md.
- Do not claim completion prematurely. "Done" for this session means: build blocker fixed, `npm run build` green, all routes verified for both locales, progress.md updated, checkpoints committed. Deployment is explicitly out of scope until the user approves it and the live URL has been checked.

---

End of prompt.
