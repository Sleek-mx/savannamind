"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const steps = (locale: "en" | "sw") =>
  locale === "sw"
    ? [
        {
          title: "Dashibodi",
          body: "Kadi ya “Endelea” inakuonyesha somo na kitengo ulikofika. XP na vitengo vinaonekana juu.",
        },
        {
          title: "Vitengo na kadi",
          body: "Kila moduli ina vitengo — vifuate kwa mpangilio. Kwenye simu, tumia ukanda wa vitengo juu ya kadi.",
        },
        {
          title: "Mazoezi",
          body: "Jaribio hukupa marekebisho kwa kila jibu lisilo sahihi — lazima usahihi kabla kuendelea. Zoezi la prompt hukusaidia kujenga maombi halisi.",
        },
        {
          title: "Kibo",
          body: "Uliza swali lolote (chini kulia). Historia yako inabaki kwenye kifaa tu — unaweza kuifuta wakati wowote.",
        },
      ]
    : [
        {
          title: "Dashboard",
          body: "The “Continue” card shows your exact lesson and unit. XP and units sit right at the top.",
        },
        {
          title: "Units and cards",
          body: "Each module has units — follow them in order. On mobile, use the unit strip above the lesson card.",
        },
        {
          title: "Practice",
          body: "Quizzes give specific remediation for every wrong answer — you must get it right before moving on. Prompt-builder exercises have you assemble real requests.",
        },
        {
          title: "Kibo",
          body: "Ask anything (bottom-right). Your history stays on this device only — clear it anytime.",
        },
      ];

export function ProductTutorial({
  locale,
  onDone,
}: {
  locale: "en" | "sw";
  onDone: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] bg-learn-night/55 flex items-center justify-center p-4">
      <div className="bg-white rounded-card max-w-md w-full p-6 shadow-learn-lg border border-learn-teal/10">
        <Image
          src="/learn/learn-empty-state-tutorial.png"
          alt=""
          width={400}
          height={225}
          className="w-full rounded-xl mb-4"
        />
        <h2 className="text-xl font-bold mb-2">
          {locale === "sw" ? "Karibu kwenye Learn Studio" : "Welcome to Learn Studio"}
        </h2>
        <ul className="space-y-3 mb-6 text-sm text-learn-muted">
          {steps(locale).map((s) => (
            <li key={s.title}>
              <strong className="text-learn-night">{s.title}:</strong> {s.body}
            </li>
          ))}
        </ul>
        <Button variant="gold" className="w-full" onClick={onDone}>
          {locale === "sw" ? "Anza kujifunza" : "Start learning"}
        </Button>
      </div>
    </div>
  );
}
