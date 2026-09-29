"use client";

import { useEffect } from "react";

/** Scopes Learn Studio styles via `body.learn-studio-route` in learn-studio.css */
export function LearnStudioRoute({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("learn-studio-route");
    return () => document.body.classList.remove("learn-studio-route");
  }, []);

  return children;
}
