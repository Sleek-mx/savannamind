import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const buttonClass = (
  variant: ButtonProps["variant"],
  size: ButtonProps["size"],
  className?: string
) =>
  cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-learn-teal-bright disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary" &&
            "bg-learn-teal text-white hover:bg-learn-night shadow-md",
          variant === "gold" &&
            "bg-learn-gold text-learn-night hover:brightness-105 shadow-md",
          variant === "secondary" &&
            "bg-white text-learn-night border border-learn-teal/20 hover:border-learn-teal/40",
          variant === "outline" &&
            "bg-white text-learn-night border border-learn-teal/30 hover:border-learn-teal",
          variant === "ghost" && "bg-transparent text-learn-teal hover:bg-learn-teal/10",
          size === "sm" && "text-sm px-4 py-2 rounded-pill",
          size === "md" && "text-base px-6 py-3 rounded-pill",
          size === "lg" && "text-lg px-8 py-4 rounded-pill",
          className
        );

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    if (href) {
      const { type: _t, ...linkProps } = props;
      return (
        <Link href={href} className={buttonClass(variant, size, className)} {...(linkProps as object)}>
          {props.children}
        </Link>
      );
    }
    return (
      <button
        ref={ref}
        className={buttonClass(variant, size, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
