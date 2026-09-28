"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

export default function LoginPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const isSw = locale === "sw";

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
        router.push(`/${locale}/learn/studio?hub=1`);
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
        typeof window !== "undefined"
          ? window.location.origin
          : "https://savannamind-ashy.vercel.app";
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${origin}/${locale}/learn/studio?hub=1`,
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
    <div className="standalone-auth min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#ECE8F5]">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-6">
        {/* Floating Sign-in Card */}
        <div className="w-full max-w-[450px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(70,50,110,0.15)] p-8 sm:p-11 border border-white/80 relative z-10">
          {/* Card Top Row: Logo mark on left, Signup link on right */}
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} aria-label="SavannaMind Home" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/logo-mark.png"
                alt="SavannaMind Logo"
                width={40}
                height={40}
                priority
                style={{ width: 40, height: 40 }}
                className="w-10 h-10 object-contain"
              />
            </Link>
            <div className="text-xs text-neutral-500 font-medium">
              <span>{isSw ? "Huna akaunti? " : "No account? "}</span>
              <Link
                href={`/${locale}/signup`}
                className="text-[#4C82E6] font-semibold hover:underline"
              >
                {isSw ? "Jisajili" : "Sign up"}
              </Link>
            </div>
          </div>

          {/* Large Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-7 mb-6">
            {isSw ? "Ingia" : "Sign in"}
          </h1>

          {/* Top Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full bg-[#4C82E6] hover:bg-[#3D73D7] active:scale-[0.99] text-white font-medium py-3 px-4 rounded-2xl transition-all shadow-sm text-sm flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
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
            </span>
            <span className="font-semibold">{isSw ? "Ingia kwa Google" : "Sign in with Google"}</span>
          </button>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-2.5 text-red-800 text-xs">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
              <span className="leading-relaxed">{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-semibold text-neutral-600 mb-1.5"
              >
                {isSw ? "Barua pepe au Jina la Mtumiaji" : "Username or Email Address"}
              </label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  colorScheme: "light",
                }}
                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#22c55e] focus:outline-none text-neutral-900 placeholder:text-neutral-400 text-sm font-medium transition-colors bg-white shadow-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="login-password"
                  className="block text-xs font-semibold text-neutral-600"
                >
                  {isSw ? "Nenosiri" : "Password"}
                </label>
                <button
                  type="button"
                  onClick={() => alert(isSw ? "Tafadhali wasiliana na info@savannamind.com kubadilisha nenosiri." : "Please contact info@savannamind.com to reset your password.")}
                  className="text-xs text-[#4C82E6] font-semibold hover:underline"
                >
                  {isSw ? "Umesahau nenosiri?" : "Forgot password?"}
                </button>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#111827",
                    colorScheme: "light",
                  }}
                  className="w-full px-4 py-3 pr-11 rounded-xl border-2 border-neutral-200 focus:border-[#22c55e] focus:outline-none text-neutral-900 placeholder:text-neutral-400 text-sm font-medium transition-colors bg-white shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-[#1F2128] hover:bg-[#121316] active:scale-[0.99] text-white font-semibold py-3.5 px-6 rounded-2xl transition-all shadow-md disabled:opacity-50 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>{isSw ? "Inaingia..." : "Signing in..."}</span>
              ) : (
                <span>{isSw ? "Ingia" : "Sign in"}</span>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Kibo Mascot Illustration (Side by side on desktop) */}
        <div className="hidden lg:flex flex-col items-center justify-center relative w-[420px] select-none">
          {/* Soft floating pebble / cloud background shapes underneath Kibo */}
          <div className="w-80 h-24 bg-[#D8CEEE]/70 rounded-full blur-xl absolute bottom-0 -z-10" />
          <div className="w-64 h-16 bg-[#C4B7E5]/50 rounded-full blur-md absolute bottom-4 -z-10" />

          {/* Kibo character */}
          <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/learn/kibo-2d.png"
              alt="Kibo AI study companion"
              width={360}
              height={360}
              priority
              style={{ width: 340, height: "auto" }}
              className="w-[340px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Mascot Label Tag */}
          <div className="mt-4 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm border border-white/60 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-xs font-semibold text-neutral-700 tracking-wide">
              {isSw ? "Kibo — Rafiki Yako wa Masomo ya AI" : "Kibo — Your Personal AI Study Buddy"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
