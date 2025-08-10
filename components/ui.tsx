import Link from "next/link";
import React from "react";

export const SectionTitle = ({ kicker, title, sub }:{ kicker?: string; title: string; sub?: string }) => (
  <div className="max-w-3xl mx-auto text-center">
    {kicker && (
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border mb-3"
           style={{ borderColor: "var(--ring)", color: "var(--accent)" }}>
        {kicker}
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight" style={{ color: "var(--fg)" }}>{title}</h2>
    {sub && <p className="mt-3 text-sm md:text-base opacity-80" style={{ color: "var(--fg)" }}>{sub}</p>}
  </div>
);

export const Chip = ({ children }:{ children: React.ReactNode }) => (
  <span className="inline-flex items-center text-xs px-2 py-1 rounded-full border"
        style={{ borderColor: "var(--ring)", color: "var(--accent)" }}>{children}</span>
);

export const NavLink = ({ href = "#", children }:{
  href?: string; children: React.ReactNode
}) => {
  const isInternal = href.startsWith("/");
  return isInternal ? (
    <Link href={href} className="px-3 py-2 rounded-md text-sm hover:opacity-100 opacity-80"
      style={{ color: "var(--fg)" }}>
      {children}
    </Link>
  ) : (
    <a href={href} className="px-3 py-2 rounded-md text-sm hover:opacity-100 opacity-80"
      style={{ color: "var(--fg)" }}>
      {children}
    </a>
  );
};