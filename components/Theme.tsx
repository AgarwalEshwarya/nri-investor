"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const THEMES = {
  saffronIndigo: {
    name: "Saffron & Indigo",
    primary: "#e76f00",
    accent: "#1e3a8a",
    bg: "#0b1220",
    fg: "#e6edf6",
    card: "#111a2b",
    muted: "#152036",
    ring: "#334155",
  },
  tealSlate: {
    name: "Teal & Slate",
    primary: "#14b8a6",
    accent: "#475569",
    bg: "#0b1324",
    fg: "#e2e8f0",
    card: "#0f1b34",
    muted: "#142240",
    ring: "#334155",
  },
  emeraldCharcoal: {
    name: "Emerald & Charcoal",
    primary: "#10b981",
    accent: "#94a3b8",
    bg: "#0b0f14",
    fg: "#e5e7eb",
    card: "#111827",
    muted: "#1f2937",
    ring: "#374151",
  },
} as const;

export type ThemeKey = keyof typeof THEMES;

type ThemeCtx = {
  key: ThemeKey;
  setKey: (k: ThemeKey) => void;
  theme: (typeof THEMES)[ThemeKey];
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState<ThemeKey>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("nri_theme") as ThemeKey) || "saffronIndigo";
    }
    return "saffronIndigo";
  });

  const theme = useMemo(() => THEMES[key], [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nri_theme", key);
    }
  }, [key]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--bg", theme.bg);
    root.style.setProperty("--fg", theme.fg);
    root.style.setProperty("--card", theme.card);
    root.style.setProperty("--muted", theme.muted);
    root.style.setProperty("--ring", theme.ring);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ key, setKey, theme }}>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--primary)] selection:text-white">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
