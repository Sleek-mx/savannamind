"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex w-full items-center gap-2.5 px-2 py-1.5", className)}
      {...props}
    />
  )
);
Item.displayName = "Item";

export interface ItemMediaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemMedia = React.forwardRef<HTMLDivElement, ItemMediaProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex shrink-0 items-center justify-center", className)}
      {...props}
    />
  )
);
ItemMedia.displayName = "ItemMedia";

export interface ItemContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ItemContent = React.forwardRef<HTMLDivElement, ItemContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-1 flex-col text-left", className)}
      {...props}
    />
  )
);
ItemContent.displayName = "ItemContent";

export interface ItemTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export const ItemTitle = React.forwardRef<HTMLHeadingElement, ItemTitleProps>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "text-sm font-semibold text-learn-ink leading-tight",
        className
      )}
      {...props}
    />
  )
);
ItemTitle.displayName = "ItemTitle";

export interface ItemDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  ItemDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-xs text-learn-muted mt-0.5 line-clamp-1 leading-snug",
      className
    )}
    {...props}
  />
));
ItemDescription.displayName = "ItemDescription";
