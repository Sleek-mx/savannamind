# Savanna Mind

Next.js 14 site with English and Kiswahili routes, Supabase authentication, and Learn Studio cloud progress.

## Production

Canonical URL: **https://savannamind-ashy.vercel.app**. Use this host for links and auth redirects. `savannamind.vercel.app` belongs to another Vercel project and its locale/auth routes return 404. The app is connected to `Sleek-mx/savannamind` on Vercel project `macsinjobs-6649/savannamind`; pushes to `main` trigger production builds.

## Local setup

1. Run `npm ci`.
2. Populate `.env.local` from the private credential vault using `.env.example` as the key list. Never commit `.env.local`.
3. Run `npm run dev`, then open `http://localhost:3000/en`.

Supabase project `epotmrwulmdpgqzuodwp` holds authentication, private `learner-data` Storage, `profiles`, and `learner_progress`. Supabase Auth Site URL must match the canonical production host. Google OAuth's authorized redirect URI is `https://epotmrwulmdpgqzuodwp.supabase.co/auth/v1/callback`.

## Release checks

1. Run `npm run qa:learn` and `npm run build`.
2. After any local environment change, run `node scripts/sync-vercel-env.mjs`. It excludes `SUPABASE_ACCESS_TOKEN`. Never run `vercel env pull` over `.env.local`.
3. Commit reviewed source and push `main`, then verify the Git-triggered deployment and public routes. Use `vercel --prod` only if Git deployment fails, and reconcile the Git connection afterward.

Resend currently uses `onboarding@resend.dev`, which can send only to its account owner's address. Contact and waitlist notifications temporarily go to that owner inbox. To use `info@savannamind.com`, verify a sending domain in Resend, then update `RESEND_FROM`, `CONTACT_INBOX_EMAIL`, and Supabase SMTP sender together and repeat live mail checks.
