"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  isTestTurnstileSiteKey,
  missingProductionSiteKeyMessage,
  testSiteKeyInProductionMessage,
} from "@/lib/security/turnstile-public";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: (error: unknown) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoaded?: () => void;
  }
}

interface TurnstileGateProps {
  locale?: "en" | "sw";
  onVerified: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  notice?: string | null;
}

const DEFAULT_TEST_SITE_KEY = "1x00000000000000000000AA";

export function TurnstileGate({
  locale = "en",
  onVerified,
  onCancel,
  isOpen,
  notice = null,
}: TurnstileGateProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);

  const configuredSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const productionBuild = process.env.NODE_ENV === "production";
  const siteKeyProblem = productionBuild
    ? !configuredSiteKey
      ? missingProductionSiteKeyMessage()
      : isTestTurnstileSiteKey(configuredSiteKey)
        ? testSiteKeyInProductionMessage()
        : null
    : null;
  const siteKey = siteKeyProblem ? "" : configuredSiteKey || DEFAULT_TEST_SITE_KEY;

  const handleVerifyToken = async (token: string) => {
    setVerifying(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        onVerified();
      } else {
        setError(
          typeof data.error === "string" && data.error
            ? data.error
            : locale === "sw"
              ? "Ukaguzi haukufanikiwa. Tafadhali jaribu tena."
              : "Verification failed. Please try again."
        );
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      }
    } catch {
      setError(
        locale === "sw"
          ? "Hitilafu ya mtandao wakati wa ukaguzi."
          : "Network error during verification. Please retry."
      );
    } finally {
      setVerifying(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    if (siteKeyProblem) {
      setError(siteKeyProblem);
      setLoading(false);
      return;
    }
    if (notice) setError(notice);
  }, [isOpen, notice, siteKeyProblem]);

  useEffect(() => {
    if (!isOpen || !siteKey) return;

    let isMounted = true;

    function renderWidget() {
      if (!containerRef.current || !window.turnstile) return;
      if (widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            if (isMounted) handleVerifyToken(token);
          },
          "error-callback": () => {
            if (isMounted) {
              setError(
                locale === "sw"
                  ? "Hitilafu ya kijenzi cha usalama. Bofya ili kujaribu tena."
                  : "Captcha widget error. Click to retry."
              );
            }
          },
          "expired-callback": () => {
            if (isMounted) {
              setError(
                locale === "sw"
                  ? "Ukaguzi umepitwa na wakati. Tafadhali thibitisha upya."
                  : "Verification expired. Please re-verify."
              );
            }
          },
          theme: "light",
        });
        widgetIdRef.current = id;
        setLoading(false);
      } catch (err) {
        console.error("Turnstile render error", err);
        setLoading(false);
      }
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      const existingScript = document.getElementById("cf-turnstile-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "cf-turnstile-script";
        script.src =
          "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          renderWidget();
        };
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener("load", renderWidget);
      }
    }

    return () => {
      isMounted = false;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isOpen, siteKey, locale]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {locale === "sw" ? "Ukaguzi wa Haraka wa Kibinadamu" : "Quick Human Check"}
        </h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          {locale === "sw"
            ? "Thibitisha wewe ni mtu halisi kabla ya kufungua moduli za masomo."
            : "Confirm you're human before opening your learning modules."}
        </p>

        {/* Turnstile Container */}
        <div className="min-h-[75px] flex items-center justify-center py-2">
          <div ref={containerRef} className="inline-block" />
          {loading && !verifying && Boolean(siteKey) && (
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              {locale === "sw" ? "Inapakia ukaguzi…" : "Loading check…"}
            </div>
          )}
          {verifying && (
            <div className="text-xs text-teal-600 font-medium flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              {locale === "sw" ? "Inathibitisha…" : "Verifying with server…"}
            </div>
          )}
        </div>

        {error && (
          <div className="mt-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 text-left">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Test bypass fallback for local offline dev if Turnstile script is blocked */}
        {process.env.NODE_ENV !== "production" && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleVerifyToken("dev-mock-pass")}
              className="text-xs text-slate-500 hover:text-slate-700"
            >
              [Local Dev Bypass Pass]
            </Button>
          </div>
        )}

        {onCancel && (
          <div className="mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              {locale === "sw" ? "Ghairi" : "Cancel"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
