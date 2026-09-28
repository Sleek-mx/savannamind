"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Check, AlertCircle, ArrowRight } from "lucide-react";

export default function TrialSignupPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as "en" | "sw") || "en";
  const isSw = locale === "sw";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [productEmails, setProductEmails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Hide marketing site-header and site-footer
  useEffect(() => {
    document.body.classList.add("auth-route");
    return () => {
      document.body.classList.remove("auth-route");
    };
  }, []);

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
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            company,
            product_emails: productEmails,
            full_name: email.split("@")[0],
          },
        },
      });

      if (error) {
        setErrorMsg(
          isSw
            ? "Imeshindikana kuunda akaunti. Huenda barua pepe hii inatumika tayari."
            : error.message || "Failed to create account. Please check details."
        );
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push(`/${locale}/learn/studio?hub=1`);
      } else {
        router.push(`/${locale}/learn/studio?hub=1`);
      }
    } catch {
      setErrorMsg(
        isSw
          ? "Hitilafu imetokea. Tafadhali angalia muunganisho wako."
          : "An unexpected error occurred. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/${locale}/learn/studio?hub=1`,
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Google sign-in error";
      setErrorMsg(msg);
      setGoogleLoading(false);
    }
  };

  return (
    <div className="standalone-auth min-h-screen bg-white text-neutral-900 grid grid-cols-1 lg:grid-cols-12">
      {/* Left Column: Form on White */}
      <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-16 xl:p-20 max-w-xl mx-auto w-full">
        <div>
          {/* Wordmark */}
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-8 sm:mb-12">
            <Image
              src="/logo-full.png"
              alt="savanna mind"
              width={140}
              height={36}
              priority
              style={{ height: 32, width: "auto" }}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
            {isSw ? "Anza jaribio lako la bure" : "Start your free trial"}
          </h1>

          {/* Muted line with link */}
          <p className="mt-2 text-sm text-neutral-500">
            {isSw ? "Tayari una akaunti? " : "Already have an account? "}
            <Link
              href={`/${locale}/login`}
              className="font-semibold text-neutral-900 hover:underline"
            >
              {isSw ? "Ingia hapa" : "Log in"}
            </Link>
          </p>

          {errorMsg && (
            <div className="mt-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-red-800 text-sm">
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="work-email"
                className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
              >
                {isSw ? "Barua pepe ya kazi" : "Work email"}
              </label>
              <input
                id="work-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B1F26] text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-neutral-700"
                >
                  {isSw ? "Nenosiri" : "Password"}
                </label>
                <span className="text-xs text-neutral-400">
                  {isSw ? "Angalau herufi 8" : "At least 8 characters"}
                </span>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B1F26] text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
              >
                {isSw ? "Kampuni au Shirika" : "Company"}
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={isSw ? "Mfano: Baraza la Kilimo au Duka" : "Acme Corp or Community Group"}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0B1F26] text-sm"
              />
            </div>

            {/* Checkbox for product emails (unticked by default) */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={productEmails}
                  onChange={(e) => setProductEmails(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-[#0B1F26] focus:ring-[#0B1F26]"
                />
                <span className="text-xs text-neutral-600 leading-normal">
                  {isSw
                    ? "Nitumie taarifa za mara kwa mara kuhusu masomo mapya ya AI na mbinu za jamii."
                    : "Send me occasional product updates, AI research briefings, and community case studies."}
                </span>
              </label>
            </div>

            {/* Dark full-width button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-[#0B1F26] hover:bg-[#14323c] text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-sm disabled:opacity-50 text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                isSw ? "Inapakia..." : "Setting up your trial..."
              ) : (
                <>
                  <span>{isSw ? "Anza jaribio la bure" : "Start free trial"}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <span className="relative bg-white px-3 text-xs uppercase tracking-wider text-neutral-400 font-medium">
              {isSw ? "au endelea na" : "or continue with"}
            </span>
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={googleLoading}
            className="w-full border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2.5"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: 18, height: 18, minWidth: 18, minHeight: 18, flexShrink: 0 }}
            >
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
            <span>{isSw ? "Jiunge kwa Google" : "Continue with Google"}</span>
          </button>
        </div>

        {/* Footer legal note */}
        <p className="mt-8 text-xs text-neutral-400">
          {isSw ? "Kwa kujisajili, unakubali sera zetu za faragha na sheria za huduma." : "By signing up, you agree to SavannaMind terms and data privacy policies."}
        </p>
      </div>

      {/* Right Column: Neutral-50 Summary Panel (Sticky from lg up) */}
      <div className="lg:col-span-5 bg-neutral-50 border-t lg:border-t-0 lg:border-l border-neutral-200/80 p-6 sm:p-10 lg:p-12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between overflow-y-auto">
        <div className="space-y-6 max-w-md mx-auto lg:max-w-none w-full">
          {/* Top Label & Plan */}
          <div>
            <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-neutral-200/80 text-neutral-700">
              {isSw ? "Jaribio lako" : "Your trial"}
            </span>
            <h2 className="mt-3 text-xl font-bold text-neutral-900">
              {isSw ? "Kifurushi cha Mafunzo ya AI" : "SavannaMind Full Learning Pass"}
            </h2>
            <p className="mt-1 text-sm font-medium text-neutral-600">
              {isSw
                ? "Siku kumi na nne bure, kisha KES 1,500 kwa mwezi"
                : "Fourteen days free, then KES 1,500 / $12 per month"}
            </p>
          </div>

          {/* Bordered white card with 4 included items */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-5 shadow-sm space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              {isSw ? "Kilichojumuishwa:" : "Included in your trial:"}
            </h3>
            <ul className="space-y-3">
              {[
                isSw
                  ? "Ufikiaji kamili wa moduli 22 za kisekta na mitaala ya CBC"
                  : "Full interactive access to all 22 career-aligned AI learning tracks",
                isSw
                  ? "Mkufunzi wa AI wa Kibo masaa 24/7 kwa lugha asili"
                  : "24/7 personalized 1-on-1 AI tutoring with Kibo",
                isSw
                  ? "Vyeti rasmi vya kidijitali ukifaulu miradi ya mwisho"
                  : "Verified certificate of completion upon capstone pass",
                isSw
                  ? "Miongozo ya kuandika prompt na nyaraka za kupakua nje ya mtandao"
                  : "Downloadable offline notes, prompt templates & tools",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#26A9AB]/15 text-[#26A9AB]">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Small timeline of 3 dated bullets */}
          <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
              {isSw ? "Ratiba ya jaribio:" : "Trial timeline:"}
            </h3>
            <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-200">
              <div className="relative">
                <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-[#0B1F26]" />
                <p className="text-xs font-bold text-neutral-900">
                  {isSw ? "Leo (Siku ya 1)" : "Today"}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {isSw
                    ? "Ufikiaji wa papo hapo kwa masomo yote na msaidizi Kibo"
                    : "Immediate full platform access & Kibo tutor activation"}
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-neutral-400" />
                <p className="text-xs font-bold text-neutral-900">
                  {isSw ? "Siku ya 11" : "Day 11"}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {isSw
                    ? "Ukumbusho wa jaribio na muhtasari wa maendeleo yako"
                    : "Helpful trial check-in & personalized progress summary"}
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full bg-neutral-400" />
                <p className="text-xs font-bold text-neutral-900">
                  {isSw ? "Siku ya 14" : "Day 14"}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {isSw
                    ? "Kipindi cha jaribio kinakamilika — unahifadhi XP na vyeti vyote"
                    : "Trial ends — keep all earned XP, notes, and certificates"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom muted line */}
        <div className="pt-8 border-t border-neutral-200/80 mt-6 max-w-md mx-auto lg:max-w-none w-full">
          <p className="text-xs text-neutral-500 leading-relaxed">
            {isSw
              ? "Hakuna kadi ya benki inayohitajika. Jaribio halibadiliki kiotomatiki kuwa malipo."
              : "No credit card required. Your trial does not convert automatically."}
          </p>
        </div>
      </div>
    </div>
  );
}
