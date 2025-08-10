"use client";

import React from "react";
import { ThemeProvider } from "@/components/Theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
