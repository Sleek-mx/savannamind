#!/usr/bin/env node
/**
 * Reminder: after `vercel link`, choose NO when asked to pull env vars
 * (it wipes .env.local). Push instead:
 *
 *   node scripts/sync-vercel-env.mjs
 *   vercel --prod
 */

console.log(`
If .env.local was overwritten by Vercel pull, restore from Obsidian:
  08 - Credentials & Keys/AI & API Keys.md (savanna supabase, Resend, Google, b.ai)

Then run:
  node scripts/sync-vercel-env.mjs
`);
