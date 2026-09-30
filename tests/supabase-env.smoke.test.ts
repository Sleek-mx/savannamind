import { expect, test } from "vitest";
import {
  getSiteUrl,
  getSupabaseAnonKey,
  getSupabaseUrl,
  sanitizeSupabaseUrl,
} from "../lib/supabase/env";

const keys = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "NEXT_PUBLIC_SITE_URL",
  "VERCEL_URL",
] as const;

function withEnv(
  updates: Partial<Record<(typeof keys)[number], string | undefined>>,
  run: () => void
) {
  const saved = keys.map((key) => [key, process.env[key]] as const);
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(updates, key)) {
      const value = updates[key];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
  try {
    run();
  } finally {
    for (const [key, value] of saved) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("strips Supabase REST and auth suffixes", () => {
  expect(sanitizeSupabaseUrl(undefined)).toBe("");
  expect(sanitizeSupabaseUrl("  https://proj.supabase.co/rest/v1/  ")).toBe(
    "https://proj.supabase.co"
  );
  expect(sanitizeSupabaseUrl("https://proj.supabase.co/auth/v1")).toBe("https://proj.supabase.co");
  expect(sanitizeSupabaseUrl("https://proj.supabase.co/v1/")).toBe("https://proj.supabase.co");
  expect(sanitizeSupabaseUrl("https://proj.supabase.co///")).toBe("https://proj.supabase.co");
});

test("site URL falls back without secrets", () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: undefined, VERCEL_URL: undefined }, () => {
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  withEnv({ NEXT_PUBLIC_SITE_URL: undefined, VERCEL_URL: "preview.example.com" }, () => {
    expect(getSiteUrl()).toBe("https://preview.example.com");
  });

  withEnv({ NEXT_PUBLIC_SITE_URL: "https://savannamind-ashy.vercel.app/" }, () => {
    expect(getSiteUrl()).toBe("https://savannamind-ashy.vercel.app");
  });
});

test("supabase accessors throw when public env is missing", () => {
  withEnv({ NEXT_PUBLIC_SUPABASE_URL: undefined, NEXT_PUBLIC_SUPABASE_ANON_KEY: undefined }, () => {
    expect(() => getSupabaseUrl()).toThrow(/NEXT_PUBLIC_SUPABASE_URL/);
    expect(() => getSupabaseAnonKey()).toThrow(/NEXT_PUBLIC_SUPABASE_ANON_KEY/);
  });
});
