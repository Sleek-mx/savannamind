import { createBrowserClient } from "@supabase/ssr";

function sanitizeSupabaseUrl(url: string | undefined): string {
  if (!url) return "https://epotmrwulmdpgqzuodwp.supabase.co";
  let clean = url.trim();
  // Strip /rest/v1, /auth/v1, /v1, or trailing slashes that cause "Invalid path specified in request URL"
  clean = clean.replace(/\/rest\/v1\/?$/, "");
  clean = clean.replace(/\/auth\/v1\/?$/, "");
  clean = clean.replace(/\/v1\/?$/, "");
  clean = clean.replace(/\/+$/, "");
  return clean;
}

export function createClient() {
  const supabaseUrl = sanitizeSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseAnonKey = (
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwb3Rtcnd1bG1kcGdxenVvZHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0OTIyOTUsImV4cCI6MjEwNjA2ODI5NX0.hnhUY8d6rjUnZeTsWAIcuStU__SB3vyXRewpZqvpBHY"
  ).trim();

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
