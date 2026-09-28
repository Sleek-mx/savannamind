"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GENERAL_CAREERS } from "@/lib/learn/general-careers";
import type { CareerId } from "@/lib/learn/types";

export interface SectorCardDropdownProps {
  selectedId: CareerId | null;
  onSelect: (id: CareerId) => void;
  locale: "en" | "sw";
  className?: string;
}

export function SectorCardDropdown({
  selectedId,
  onSelect,
  locale,
  className,
}: SectorCardDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedSector = React.useMemo(
    () => GENERAL_CAREERS.find((c) => c.id === selectedId),
    [selectedId]
  );

  React.useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={cn(
        "uiverse-card-dropdown",
        isOpen && "is-open",
        className
      )}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((prev) => !prev)}
        className="uiverse-card-dropdown-trigger"
      >
        {selectedSector ? (
          <div className="flex items-center gap-3 text-left flex-1 min-w-0">
            <Avatar className="size-10 ring-1 ring-learn-teal/20 shrink-0">
              <AvatarImage
                src={selectedSector.avatar}
                alt={selectedSector.labels[locale]}
              />
              <AvatarFallback>{selectedSector.fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-base font-bold text-[#1e2a2e] leading-snug truncate">
                {selectedSector.labels[locale]}
              </span>
              <span className="text-xs text-[#4a585e] leading-tight line-clamp-1">
                {selectedSector.descriptions[locale]}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-base font-medium text-[#4a585e]">
            {locale === "sw" ? "— Chagua sekta yako —" : "— Select your sector —"}
          </span>
        )}
        <span className="uiverse-card-dropdown-chevron">
          <ChevronDown size={20} strokeWidth={2.2} />
        </span>
      </button>

      <ul
        role="listbox"
        aria-label={locale === "sw" ? "Sekta za kazi" : "Career sectors"}
        className="uiverse-card-dropdown-list"
      >
        {GENERAL_CAREERS.map((item) => {
          const isSelected = selectedId === item.id;
          return (
            <li key={item.id} role="option" aria-selected={isSelected} className="uiverse-card-dropdown-item">
              <button
                type="button"
                onClick={() => {
                  onSelect(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "uiverse-card-dropdown-article",
                  isSelected && "is-selected"
                )}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <Avatar className="size-10 ring-1 ring-learn-teal/15 shrink-0">
                    <AvatarImage src={item.avatar} alt={item.labels[locale]} />
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-bold text-[#1e2a2e] leading-snug truncate">
                      {item.labels[locale]}
                    </span>
                    <span className="text-xs text-[#4a585e] leading-tight line-clamp-1">
                      {item.descriptions[locale]}
                    </span>
                  </div>
                </div>
                {isSelected ? (
                  <span className="size-6 rounded-full bg-learn-teal text-white flex items-center justify-center shrink-0 ml-2 shadow-sm">
                    <Check size={14} strokeWidth={3} />
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
