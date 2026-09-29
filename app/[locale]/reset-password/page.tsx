"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter();
  const isSw = locale === "sw";
  const [ready, setReady] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    void createClient().auth.getSession().then(({ data }) => {
      if (active) setReady(Boolean(data.session));
    });
    return () => { active = false; };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password.length < 8) {
      setError(isSw ? "Tumia angalau herufi 8." : "Use at least 8 characters.");
      return;
    }
    setSaving(true);
    setError(null);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }
    await supabase.auth.signOut();
    router.replace(`/${locale}/login?reset=success`);
  }

  return (
    <AuthSplitLayout locale={locale} mode="reset">
      {ready === null ? (
        <p role="status">{isSw ? "Tunaangalia kiungo chako…" : "Checking your reset link…"}</p>
      ) : !ready ? (
        <p role="status">{isSw ? "Kiungo kimeisha au si sahihi. Omba kiungo kipya kwenye ukurasa wa kuingia." : "This reset link is invalid or expired. Request a new one from the sign-in page."}</p>
      ) : (
        <form onSubmit={submit}>
          {error ? <p className="auth-split__error" role="alert">{error}</p> : null}
          <div className="auth-split__field">
            <label htmlFor="new-password">{isSw ? "Nenosiri jipya" : "New password"}</label>
            <div className="auth-split__input-wrap">
              <Lock className="auth-split__input-icon" size={18} aria-hidden="true" />
              <input id="new-password" type="password" autoComplete="new-password" required minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} className="auth-split__input" />
            </div>
          </div>
          <button type="submit" className="auth-split__submit" disabled={saving}>
            {saving ? (isSw ? "Inahifadhi…" : "Saving…") : (isSw ? "Hifadhi nenosiri" : "Save password")}
          </button>
        </form>
      )}
    </AuthSplitLayout>
  );
}
