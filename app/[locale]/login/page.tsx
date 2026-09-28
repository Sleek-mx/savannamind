"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as "en" | "sw") || "en";
  const isSw = locale === "sw";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
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
          : "An error occurred. Please check your connection and try again."
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
            {isSw ? "Karibu Tena" : "Welcome Back"}
          </h1>
          <p className="text-sm text-gray-300 mt-2">
            {isSw
              ? "Ingia ili uendelee na safari yako ya kujifunza AI"
              : "Sign in to continue your community AI learning journey"}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-300 text-sm">
            <AlertCircle size={18} className="shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
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
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
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

          <Button
            variant="gold"
            size="lg"
            type="submit"
            disabled={loading}
            className="w-full font-bold shadow-lg"
          >
            {loading ? (
              isSw ? "Inaingia..." : "Signing In..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                {isSw ? "Ingia kwenye Dashibodi" : "Log In to Dashboard"}
                <ArrowRight size={18} />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#26A9AB]/20 text-center text-sm text-gray-400">
          {isSw ? "Huna akaunti bado? " : "Don't have an account yet? "}
          <Link
            href={`/${locale}/signup`}
            className="text-[#FAAB36] font-semibold hover:underline"
          >
            {isSw ? "Jisajili hapa" : "Sign up here"}
          </Link>
        </div>
      </div>
    </div>
  );
}
