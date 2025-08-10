"use client";

import { Palette, Search } from "lucide-react";
import { useTheme, THEMES, ThemeKey } from "./Theme";
import { NavLink } from "./ui";

export default function Header() {
  const { key, setKey } = useTheme();

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-transparent/60 border-b" style={{ borderColor: "var(--ring)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center font-black tracking-tight"
               style={{ background: "var(--primary)", color: "white" }}>NI</div>
          <div>
            <div className="text-lg font-semibold leading-tight">NRI Investor</div>
            <div className="text-xs opacity-70">Make smarter money moves across borders</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center">
          <NavLink href="/articles">Playbooks</NavLink>
          <NavLink href="/articles">Tax</NavLink>
          <NavLink href="/articles">Investing</NavLink>
          <NavLink href="/articles">FX</NavLink>
          <NavLink href="/articles">Property</NavLink>
          <NavLink href="/subscribe">Tools</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border" style={{ borderColor: "var(--ring)", background: "var(--card)" }}>
            <Search size={16} className="opacity-70" />
            <input placeholder="Search articles (soon)" className="bg-transparent outline-none text-sm w-40" />
          </div>

          <div className="relative">
            <select
              value={key}
              onChange={(e) => setKey(e.target.value as ThemeKey)}
              className="appearance-none bg-[var(--card)] border rounded-xl pl-8 pr-3 py-2 text-sm"
              style={{ borderColor: "var(--ring)", color: "var(--fg)" }}
              title="Theme"
            >
              {Object.entries(THEMES).map(([k, v]) => (
                <option key={k} value={k}>{v.name}</option>
              ))}
            </select>
            <Palette size={16} className="absolute left-2 top-2.5 opacity-70" />
          </div>
        </div>
      </div>
    </header>
  );
}
