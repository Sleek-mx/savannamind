"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GetStartedButton({
  children = "Get Started",
  onClick,
  disabled,
}: {
  children?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group relative overflow-hidden"
      size="lg"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">{children}</span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black-500" aria-hidden="true">
        <ChevronRight size={16} strokeWidth={2} />
      </i>
    </Button>
  );
}
