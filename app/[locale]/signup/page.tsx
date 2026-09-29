"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { getSiteUrl } from "@/lib/supabase/env";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import {
  AuthOrDivider,
  AuthSocialButtons,
  AuthSplitLayout,
} from "@/components/auth/auth-split-layout";

export default function SignupPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const isSw = locale === "sw";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (password.length < 8) {
      setErrorMsg(
        isSw
          ? "Nenosiri lazima liwe na angalau herufi 8."
          : "Password must be at least 8 characters long."
      );
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const origin =
        typeof window !== "undefined" ? window.location.origin : getSiteUrl();
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: `${origin}/auth/callback?next=${encodeURIComponent(`/${locale}/learn/studio?hub=1`)}`,
          data: {
            full_name: fullName.trim() || email.split("@")[0],
          },
        },
      });

      if (error) {
        setErrorMsg(error.message || "Failed to create account. Please try again.");
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push(`/${locale}/learn/studio?hub=1`);
      } else {
        setErrorMsg(
          isSw
            ? "Angalia barua pepe yako kuthibitisha akaunti, kisha ingia."
            : "Check your email to confirm your account, then sign in."
        );
        setLoading(false);
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

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const supabase = createClient();
      const origin =
        typeof window !== "undefined" ? window.location.origin : getSiteUrl();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(`/${locale}/learn/studio?hub=1`)}`,
        },
      });
      if (error) throw error;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Google sign-in error";
      setErrorMsg(msg);
      setGoogleLoading(false);
    }
  };

  return (
    <AuthSplitLayout locale={locale} mode="signup">
      <AuthSocialButtons
        locale={locale}
        onGoogle={handleGoogleSignup}
        googleLoading={googleLoading}
      />
      <AuthOrDivider locale={locale} />

      {errorMsg ? <div className="auth-split__error" role="alert">{errorMsg}</div> : null}

      <form onSubmit={handleSignup}>
        <div className="auth-split__field">
          <label htmlFor="signup-name">{isSw ? "Jina kamili" : "Full name"}</label>
          <div className="auth-split__input-wrap">
            <User className="auth-split__input-icon" size={18} aria-hidden="true" />
            <input
              id="signup-name"
              type="text"
              required
              autoComplete="name"
              className="auth-split__input"
              placeholder={isSw ? "Jina lako kamili" : "Your full name"}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>

        <div className="auth-split__field">
          <label htmlFor="signup-email">{isSw ? "Barua pepe" : "Email address"}</label>
          <div className="auth-split__input-wrap">
            <Mail className="auth-split__input-icon" size={18} aria-hidden="true" />
            <input
              id="signup-email"
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
          <label htmlFor="signup-password">{isSw ? "Nenosiri" : "Password"}</label>
          <div className="auth-split__input-wrap">
            <Lock className="auth-split__input-icon" size={18} aria-hidden="true" />
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="new-password"
              className="auth-split__input"
              placeholder={isSw ? "Unda nenosiri" : "Create a password"}
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
        </div>

        <button type="submit" className="auth-split__submit" disabled={loading}>
          {loading
            ? isSw
              ? "Inaunda…"
              : "Creating account…"
            : isSw
              ? "Fungua akaunti →"
              : "Create account →"}
        </button>
      </form>
    </AuthSplitLayout>
  );
}
