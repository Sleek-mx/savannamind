"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/supabase/env";
import { safeAuthNextPath } from "@/lib/auth/redirect";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import {
  AuthOrDivider,
  AuthSocialButtons,
  AuthSplitLayout,
} from "@/components/auth/auth-split-layout";

export default function LoginPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const isSw = locale === "sw";
  const [nextPath, setNextPath] = useState(`/${locale}/learn/studio?hub=1`);

  useEffect(() => {
    const n = new URLSearchParams(window.location.search).get("next");
    if (n) setNextPath(safeAuthNextPath(n, `/${locale}/learn/studio?hub=1`));
  }, [locale]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(
          isSw
            ? "Barua pepe au nenosiri si sahihi. Tafadhali jaribu tena."
            : error.message || "Failed to log in. Please check your credentials."
        );
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push(nextPath);
      }
    } catch {
      setErrorMsg(
        isSw
          ? "Hitilafu imetokea. Tafadhali thibitisha muunganisho wako."
          : "An unexpected error occurred. Please check your connection."
      );
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const supabase = createClient();
      const origin =
        typeof window !== "undefined" ? window.location.origin : getSiteUrl();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`,
        },
      });
      if (error) throw error;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Google sign-in error";
      setErrorMsg(msg);
      setGoogleLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      setErrorMsg(
        isSw
          ? "Andika barua pepe yako kwanza, kisha bofya tena umesahau nenosiri."
          : "Enter your email first, then tap forgot password again."
      );
      return;
    }
    const supabase = createClient();
    const origin =
      typeof window !== "undefined" ? window.location.origin : getSiteUrl();
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(`/${locale}/reset-password`)}`,
    });
    if (error) {
      setErrorMsg(error.message);
      return;
    }
    setErrorMsg(
      isSw
        ? "Tumekutumia kiungo cha kubadilisha nenosiri kwenye barua pepe yako."
        : "Check your email for a password reset link."
    );
  };

  return (
    <AuthSplitLayout locale={locale} mode="login">
      <AuthSocialButtons
        locale={locale}
        onGoogle={handleGoogleLogin}
        googleLoading={googleLoading}
      />
      <AuthOrDivider locale={locale} />

      {errorMsg ? <div className="auth-split__error" role="alert">{errorMsg}</div> : null}

      <form onSubmit={handleLogin}>
        <div className="auth-split__field">
          <label htmlFor="login-email">{isSw ? "Barua pepe" : "Email address"}</label>
          <div className="auth-split__input-wrap">
            <Mail className="auth-split__input-icon" size={18} aria-hidden="true" />
            <input
              id="login-email"
              type="email"
              required
              autoComplete="email"
              className="auth-split__input"
              placeholder={isSw ? "wewe@mfano.com" : "you@example.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="auth-split__field">
          <label htmlFor="login-password">{isSw ? "Nenosiri" : "Password"}</label>
          <div className="auth-split__input-wrap">
            <Lock className="auth-split__input-icon" size={18} aria-hidden="true" />
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              className="auth-split__input"
              placeholder={isSw ? "Nenosiri lako" : "Your password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="auth-split__toggle-pw"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <button type="button" className="auth-split__forgot" onClick={handleForgotPassword}>
            {isSw ? "Umesahau nenosiri?" : "Forgot password?"}
          </button>
        </div>

        <button type="submit" className="auth-split__submit" disabled={loading}>
          {loading ? (isSw ? "Inaingia…" : "Signing in…") : isSw ? "Ingia →" : "Sign in →"}
        </button>
      </form>
    </AuthSplitLayout>
  );
}
