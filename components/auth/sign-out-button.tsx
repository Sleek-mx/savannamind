"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/supabase/auth-context";

type SignOutButtonProps = {
  locale: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "gold" | "outline";
  className?: string;
  label?: string;
};

/**
 * Shared sign-out control. Ends the Supabase session, then returns the visitor
 * to the auth entry screen for the current locale.
 */
export function SignOutButton({
  locale,
  size = "sm",
  variant = "outline",
  className,
  label,
}: SignOutButtonProps) {
  const { signOut } = useAuth();
  const [busy, setBusy] = useState(false);
  const isSw = locale === "sw";

  const handleSignOut = useCallback(() => {
    if (busy) return;
    setBusy(true);
    void signOut()
      .then(() => {
        window.location.href = `/${locale}/login`;
      })
      .catch(() => {
        setBusy(false);
      });
  }, [busy, locale, signOut]);

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={handleSignOut}
      disabled={busy}
    >
      {busy ? (isSw ? "Inatoka…" : "Signing out…") : label ?? (isSw ? "Toka" : "Sign out")}
    </Button>
  );
}
