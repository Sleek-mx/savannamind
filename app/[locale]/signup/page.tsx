"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { User as UserIcon, Lock, Mail, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as "en" | "sw") || "en";
  const isSw = locale === "sw";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ageBand, setAgeBand] = useState<"kids" | "youth" | "adult">("youth");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (password.length < 6) {
      setErrorMsg(
        isSw
          ? "Nenosiri lazima liwe na angalau herufi 6."
          : "Password must be at least 6 characters."
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
            full_name: fullName,
            age_band: ageBand,
          },
        },
      });

      if (error) {
        setErrorMsg(
          isSw
            ? "Imeshindikana kusajili. Huenda barua pepe hii inatumika tayari."
            : error.message || "Failed to create account. Please try again."
        );
        setLoading(false);
        return;
      }

      if (data.session) {
        router.push(`/${locale}/learn/studio?hub=1`);
      } else {
        // If email confirmation is required by Supabase defaults
        router.push(`/${locale}/learn/studio?hub=1`);
      }
    } catch {
      setErrorMsg(
        isSw
          ? "Hitilafu imetokea. Tafadhali thibitisha muunganisho wako."
          : "An unexpected error occurred. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-[#0B1F26]">
      <div className="w-full max-w-md bg-[#112B35] border border-[#26A9AB]/30 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#26A9AB]/20 text-[#26A9AB] mb-3">
            <Sparkles size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {isSw ? "Jiunge na SavannaMind" : "Join SavannaMind"}
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            {isSw
              ? "Unda akaunti yako ya bure kuanza kujifunza AI kwa jamii"
              : "Create your free learning account to master AI for real problems"}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-300 text-sm">
            <AlertCircle size={18} className="shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              {isSw ? "Jina Kamili" : "Full Name"}
            </label>
            <div className="relative">
              <UserIcon
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={isSw ? "Mfano: Wanjiku Mwangi" : "e.g. Wanjiku Mwangi"}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1F26] border border-[#26A9AB]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FAAB36] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              {isSw ? "Barua Pepe" : "Email Address"}
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1F26] border border-[#26A9AB]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FAAB36] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              {isSw ? "Nenosiri" : "Password"}
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-[#0B1F26] border border-[#26A9AB]/40 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FAAB36] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
              {isSw ? "Kikundi cha Umri" : "Learner Age Group"}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "kids", labelEn: "Kids (6-12)", labelSw: "Watoto" },
                { id: "youth", labelEn: "Youth (13-18)", labelSw: "Vijana" },
                { id: "adult", labelEn: "Adult (19+)", labelSw: "Watu Wazima" },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setAgeBand(b.id as "kids" | "youth" | "adult")}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                    ageBand === b.id
                      ? "bg-[#26A9AB] text-white border-[#26A9AB] shadow"
                      : "bg-[#0B1F26] text-gray-300 border-[#26A9AB]/30 hover:border-[#26A9AB]"
                  }`}
                >
                  {isSw ? b.labelSw : b.labelEn}
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="gold"
            size="lg"
            type="submit"
            disabled={loading}
            className="w-full font-bold shadow-lg mt-2"
          >
            {loading ? (
              isSw ? "Inasajili..." : "Creating Account..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                {isSw ? "Anza Kujifunza Sasa" : "Create Account & Start Learning"}
                <ArrowRight size={18} />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#26A9AB]/20 text-center text-sm text-gray-400">
          {isSw ? "Tayari una akaunti? " : "Already have an account? "}
          <Link
            href={`/${locale}/login`}
            className="text-[#FAAB36] font-semibold hover:underline"
          >
            {isSw ? "Ingia hapa" : "Log in here"}
          </Link>
        </div>
      </div>
    </div>
  );
}
