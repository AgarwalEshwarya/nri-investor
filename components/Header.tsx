"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { href: "/articles", label: "Articles" },
  { href: "/about",    label: "About" },
  { href: "/subscribe",label: "Subscribe" },
  { href: "/contact",  label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30"
            style={{ borderBottom: "1px solid var(--ring)" }}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* If you saved PNG instead, change src to "/logo.png" */}
          <Image src="/logo.png" alt="NRI Investor" width={34} height={34} priority />
          <span className="font-semibold text-base md:text-lg tracking-tight">NRI Investor</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm opacity-90 hover:opacity-100">
              {n.label}
            </Link>
          ))}
          <Link href="/articles"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium"
                style={{ background: "var(--primary)", color: "white" }}>
            Start reading
          </Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border"
                aria-label="Open menu" style={{ borderColor: "var(--ring)" }}>
          <div className="space-y-1.5">
            <span className="block h-[2px] w-5" style={{ background: "var(--fg)" }} />
            <span className="block h-[2px] w-5" style={{ background: "var(--fg)" }} />
            <span className="block h-[2px] w-5" style={{ background: "var(--fg)" }} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "var(--ring)", background: "rgba(0,0,0,0.5)" }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                    className="px-2 py-2 rounded-lg hover:bg-white/5">
                {n.label}
              </Link>
            ))}
            <Link href="/articles" onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium self-start"
                  style={{ background: "var(--primary)", color: "white" }}>
              Start reading
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
