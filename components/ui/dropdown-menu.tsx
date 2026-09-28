"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuContextValue {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(
  null
);

export function useDropdownMenu() {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) {
    throw new Error("useDropdownMenu must be used within DropdownMenu");
  }
  return ctx;
}

export interface DropdownMenuProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DropdownMenu({
  children,
  open: controlledOpen,
  onOpenChange,
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const setOpen = React.useCallback(
    (action: React.SetStateAction<boolean>) => {
      const next = typeof action === "function" ? action(open) : action;
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, open, onOpenChange]
  );

  React.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        contentRef.current &&
        !contentRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  return (
    <DropdownMenuContext.Provider
      value={{ open, setOpen, triggerRef, contentRef }}
    >
      <div className="relative inline-block w-full">{children}</div>
    </DropdownMenuContext.Provider>
  );
}

export interface DropdownMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  render?: React.ReactElement;
}

export const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(({ className, children, render, onClick, ...props }, forwardedRef) => {
  const { open, setOpen, triggerRef } = useDropdownMenu();

  const handleRef = (node: HTMLButtonElement | null) => {
    (triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setOpen((prev) => !prev);
  };

  if (render) {
    return React.cloneElement(render, {
      ref: handleRef,
      onClick: handleClick,
      "aria-haspopup": "menu",
      "aria-expanded": open,
      className: cn(render.props.className, className),
      children: children ?? render.props.children,
      ...props,
    });
  }

  return (
    <button
      ref={handleRef}
      type="button"
      onClick={handleClick}
      aria-haspopup="menu"
      aria-expanded={open}
      className={cn(
        "inline-flex items-center justify-between gap-2 rounded-xl border border-learn-teal/20 bg-white px-4 py-3 text-base font-medium text-learn-ink shadow-sm transition hover:bg-learn-cream/40 focus:outline-none focus:ring-2 focus:ring-learn-teal w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export interface DropdownMenuContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end";
}

export const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, align = "start", children, ...props }, forwardedRef) => {
  const { open, contentRef } = useDropdownMenu();

  if (!open) return null;

  const handleRef = (node: HTMLDivElement | null) => {
    (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
    if (typeof forwardedRef === "function") forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  };

  const alignClass =
    align === "end"
      ? "right-0"
      : align === "center"
      ? "left-1/2 -translate-x-1/2"
      : "left-0";

  return (
    <div
      ref={handleRef}
      role="menu"
      className={cn(
        "absolute z-50 mt-2 max-h-80 min-w-[14rem] overflow-y-auto rounded-2xl border border-learn-teal/15 bg-white/95 p-1.5 shadow-learn-lg backdrop-blur-md animate-in fade-in zoom-in-95 duration-150 focus:outline-none",
        alignClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";

export function DropdownMenuGroup({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="group" className={cn("flex flex-col gap-0.5", className)} {...props}>
      {children}
    </div>
  );
}

export interface DropdownMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void;
  disabled?: boolean;
}

export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ className, children, onSelect, onClick, disabled, ...props }, ref) => {
  const { setOpen } = useDropdownMenu();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onClick?.(e);
    onSelect?.();
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      role="menuitem"
      aria-disabled={disabled}
      onClick={handleClick}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-xl px-2 py-1.5 text-sm outline-none transition-colors hover:bg-learn-teal-soft/80 hover:text-learn-night focus:bg-learn-teal-soft data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";
