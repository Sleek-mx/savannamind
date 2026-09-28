"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export interface QuestionnaireProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export function Questionnaire({
  className,
  onSubmit,
  children,
  ...props
}: QuestionnaireProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("w-full flex flex-col gap-6", className)}
      {...props}
    >
      {children}
    </form>
  );
}

export interface QuestionnaireProgressState {
  current: number;
  total: number;
}

export interface QuestionnaireProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  current?: number;
  total?: number;
  render?: (
    props: React.HTMLAttributes<HTMLDivElement>,
    state: QuestionnaireProgressState
  ) => React.ReactNode;
}

export function QuestionnaireProgress({
  current = 1,
  total = 5,
  render,
  className,
  ...props
}: QuestionnaireProgressProps) {
  const state: QuestionnaireProgressState = { current, total };

  if (render) {
    return <>{render({ className, ...props }, state)}</>;
  }

  return (
    <div className={cn("flex flex-col gap-2 mb-4 self-start w-full", className)} {...props}>
      <div className="flex items-center gap-1.5 w-full">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              i < current
                ? "bg-learn-teal"
                : i === current - 1
                ? "bg-learn-teal"
                : "bg-learn-teal/15"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-[#4a585e] text-learn-muted">
        Checkpoint {current} of {total}
      </span>
    </div>
  );
}

export function QuestionnaireItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { name?: string }) {
  return (
    <div className={cn("w-full flex flex-col gap-5", className)} {...props}>
      {children}
    </div>
  );
}

export function QuestionnaireTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl font-bold tracking-tight text-[#1e2a2e] text-learn-ink leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function QuestionnaireDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm sm:text-base text-[#4a585e] text-learn-muted -mt-2 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function QuestionnaireChoices({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid grid-cols-1 gap-3 my-2", className)} {...props}>
      {children}
    </div>
  );
}

export interface QuestionnaireChoiceProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  selected?: boolean;
  onSelectValue?: (value: string) => void;
  children: React.ReactNode;
}

export function QuestionnaireChoice({
  value,
  selected = false,
  onSelectValue,
  onClick,
  className,
  children,
  disabled,
  ...props
}: QuestionnaireChoiceProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
    onSelectValue?.(value);
  };

  return (
    <button
      type="button"
      value={value}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "group relative flex items-center justify-between w-full px-5 py-4 text-left rounded-xl border transition-all duration-200",
        "bg-white shadow-sm hover:shadow-md",
        selected
          ? "border-learn-teal bg-learn-teal/5 text-learn-ink ring-2 ring-learn-teal/20 font-semibold"
          : "border-learn-teal/15 text-learn-ink hover:border-learn-teal/40 hover:bg-learn-cream/60",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span className="text-sm sm:text-base">{children}</span>
      <span
        className={cn(
          "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ml-3",
          selected
            ? "border-learn-teal bg-learn-teal text-white"
            : "border-learn-teal/30 group-hover:border-learn-teal/60"
        )}
      >
        {selected ? <Check size={12} strokeWidth={3} /> : null}
      </span>
    </button>
  );
}

export function QuestionnaireActions({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3 pt-6 mt-4 border-t border-learn-teal/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface QuestionnaireNavButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export function QuestionnairePrevious({
  label = "Back",
  onClick,
  disabled,
  className,
}: QuestionnaireNavButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="md"
      onClick={onClick}
      disabled={disabled}
      className={cn("gap-2", className)}
    >
      <ArrowLeft size={16} />
      <span>{label}</span>
    </Button>
  );
}

export function QuestionnaireNext({
  label = "Next",
  onClick,
  disabled,
  className,
}: QuestionnaireNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn("uiverse-continue-btn ml-auto", className)}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="34"
        width="34"
        aria-hidden="true"
      >
        <circle strokeWidth="3" stroke="currentColor" r="35.5" cy="37" cx="37" />
        <path
          strokeWidth="3"
          stroke="currentColor"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        />
      </svg>
    </button>
  );
}

export function QuestionnaireSubmit({
  label = "Continue",
  onClick,
  disabled,
  className,
}: QuestionnaireNavButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={cn("uiverse-continue-btn ml-auto", className)}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="34"
        width="34"
        aria-hidden="true"
      >
        <circle strokeWidth="3" stroke="currentColor" r="35.5" cy="37" cx="37" />
        <path
          strokeWidth="3"
          stroke="currentColor"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        />
      </svg>
    </button>
  );
}
