"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AuthSplitLayoutProps = {
  locale: string;
  mode: "login" | "signup" | "reset";
  children: ReactNode;
};

const copy = {
  en: {
    login: {
      switchPrompt: "Don't have an account?",
      switchLink: "Sign up",
      title: "Sign in",
      subtitle:
        "Sign in to Savanna Mind and continue your practical AI learning journey.",
    },
    signup: {
      switchPrompt: "Already have an account?",
      switchLink: "Log in",
      title: "Create your account",
      subtitle:
        "Join Savanna Mind and start your journey into practical AI skills for a brighter Africa.",
    },
    reset: {
      switchPrompt: "Remember your password?",
      switchLink: "Log in",
      title: "Set a new password",
      subtitle: "Choose a new password for your Savanna Mind account.",
    },
    or: "OR",
    terms:
      "By creating an account, you agree to our Terms of Service and Privacy Policy.",
    termsLogin:
      "By signing in, you agree to our Terms of Service and Privacy Policy.",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    and: "and",
  },
  sw: {
    login: {
      switchPrompt: "Huna akaunti?",
      switchLink: "Jisajili",
      title: "Karibu tena",
      subtitle:
        "Ingia kwenye Savanna Mind uendelee safari yako ya kujifunza AI kwa vitendo.",
    },
    signup: {
      switchPrompt: "Tayari una akaunti?",
      switchLink: "Ingia",
      title: "Fungua akaunti yako",
      subtitle:
        "Jiunge na Savanna Mind uanze safari yako ya ujuzi wa AI kwa mustakabali bora wa Afrika.",
    },
    reset: {
      switchPrompt: "Unakumbuka nenosiri lako?",
      switchLink: "Ingia",
      title: "Weka nenosiri jipya",
      subtitle: "Chagua nenosiri jipya la akaunti yako ya Savanna Mind.",
    },
    or: "AU",
    terms:
      "Kwa kufungua akaunti, unakubali Masharti ya Huduma na Sera ya Faragha.",
    termsLogin:
      "Kwa kuingia, unakubali Masharti ya Huduma na Sera ya Faragha.",
  },
} as const;

export function AuthSplitLayout({ locale, mode, children }: AuthSplitLayoutProps) {
  const isSw = locale === "sw";
  const t = isSw ? copy.sw : copy.en;
  const block = mode === "login" ? t.login : t.signup;
  const otherPath = mode === "login" ? "signup" : "login";

  return (
    <div className="auth-split standalone-auth">
      <div className="auth-split__hero" aria-hidden="true">
        <Image
          src="/auth/signup-hero.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 200vw, 116vw"
          className="auth-split__hero-img"
        />
        <div className="auth-split__hero-scrim" />
      </div>

      <div className="auth-split__panel">
        <div className="auth-split__card">
          <div className="auth-split__top">
            <Link href={`/${locale}`} className="auth-split__logo" aria-label="Savanna Mind home">
              <Image src="/logo-mark.png" alt="" width={44} height={44} priority />
            </Link>
            <p className="auth-split__switch">
              <span>{block.switchPrompt} </span>
              <Link href={`/${locale}/${otherPath}`}>{block.switchLink}</Link>
            </p>
          </div>

          <h1 className="auth-split__title">{block.title}</h1>
          <p className="auth-split__subtitle">{block.subtitle}</p>

          {children}

          {mode !== "reset" ? (
            <p className="auth-split__legal">
              {isSw ? "Una swali kuhusu faragha au akaunti yako?" : "Questions about privacy or your account?"}{" "}
              <Link href={`/${locale}/contact`}>
                {isSw ? "Wasiliana nasi" : "Contact us"}
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AuthOrDivider({ locale }: { locale: string }) {
  const isSw = locale === "sw";
  return (
    <div className="auth-split__or" role="separator">
      <span>{isSw ? "AU" : "OR"}</span>
    </div>
  );
}

export function AuthSocialButtons({
  locale,
  onGoogle,
  googleLoading,
}: {
  locale: string;
  onGoogle: () => void;
  googleLoading: boolean;
}) {
  const isSw = locale === "sw";
  return (
    <div className="auth-split__social">
      <button
        type="button"
        className="auth-split__social-btn"
        onClick={onGoogle}
        disabled={googleLoading}
      >
        <GoogleIcon />
        <span>{isSw ? "Endelea kwa Google" : "Continue with Google"}</span>
      </button>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}
