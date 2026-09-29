"use client";

import { AuthProvider } from "@/lib/supabase/auth-context";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
