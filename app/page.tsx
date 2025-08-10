"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionTitle, Chip } from "@/components/ui";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Globe2, PiggyBank, Landmark, Building2, Calculator, BookOpenCheck, ArrowUp } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

const CATEGORIES = [
  {
    title: "Getting Started",
    icon: BookOpenCheck,
    desc: "Quick primers to cut through jargon and start right.",
  },
  { title: "UK Taxes for NRIs", icon: Landmark, desc: "CGT, dividend, interest, SA returns—made simple with examples." },
  { title: "Investing in India", icon: PiggyBank, desc: "From LRS to brokers to tax—your practical, step-by-step guides." },
  { title: "FX & Transfers", icon: Globe2, desc: "Reduce costs, understand spreads, and move money with confidence." },
  { title: "Property & Real Estate", icon: Building2, desc: "Buy, rent, manage, and repatriate—rules, docs, and tips." },
  { title: "Tools & Calculators", icon: Calculator, desc: "PSR, CGT, and cost calculators (coming soon)." },
];

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(1000px 500px at 10% 0%, rgba(231,111,0,0.15), transparent), radial-gradient(800px 400px at 90% 0%, rgba(30,58,138,0.15), transparent)" }} />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                      className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                Practical money frameworks for <span className="px-2 rounded" style={{ background: "var(--primary)", color: "white" }}>NRIs</span>
              </h1>
              <p className="mt-4 text-lg opacity-90">
                No fluff. Just playbooks, checklists, and tools for taxes, investing, property, FX, and more—built from real operator experience in cross-border payments and analytics.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/articles" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium"
                   style={{ background: "var(--primary)", color: "white" }}>
                  Start reading <ArrowRight size={18} />
                </Link>
                <Link href="/subscribe" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium border"
                   style={{ borderColor: "var(--ring)" }}>
                  Subscribe
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--primary)" }} /> Actionable templates</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--primary)" }} /> Clear examples</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "var(--primary)" }} /> Updated for 2025</div>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border overflow-hidden shadow-2xl"
                   style={{ borderColor: "var(--ring)", background: "linear-gradient(135deg, var(--primary), var(--accent))" }}>
                <div className="p-6 md:p-10 h-full grid grid-rows-3 gap-4 md:gap-6">
                  <div className="bg-white/15 rounded-xl" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-xl" />
                    <div className="bg-white/10 rounded-xl" />
                    <div className="bg-white/10 rounded-xl" />
                  </div>
                  <div className="bg-white/10 rounded-xl" />
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 px-4 py-2 rounded-xl border text-xs backdrop-blur"
                   style={{ borderColor: "var(--ring)", background: "rgba(17,24,39,0.6)" }}>
                Prototype • Home page
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 md:py-18">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            kicker="Explore"
            title="Topics we write about"
            sub="Focused on UK–India NRI needs: clarity first, action next."
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="group relative rounded-2xl border overflow-hidden"
                   style={{ borderColor: "var(--ring)", background: "var(--card)" }}>
                <div className="p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl flex items-center justify-center"
                           style={{ background: "var(--muted)" }}>
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                    </div>
                    <ChevronRight size={18} className="opacity-50 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="mt-3 text-sm opacity-80">{desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1" style={{ background: "var(--primary)", opacity: 0.8 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="py-14 md:py-18 border-t" style={{ borderColor: "var(--ring)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle kicker="Fresh Reads" title="Latest articles" sub="Short, example-led, and bookmarkable." />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl overflow-hidden border flex flex-col"
                       style={{ borderColor: "var(--ring)", background: "var(--card)" }}>
                <div className="aspect-[16/9] bg-gradient-to-br from-[var(--accent)] to-[var(--primary)]" />
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <Chip>{p.tag}</Chip>
                    <span className="opacity-60">{new Date(p.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm opacity-80 flex-1">{p.excerpt}</p>
                  <Link href={`/articles/${p.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-medium"
                        style={{ color: "var(--primary)" }}>
                    Read more <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-2xl border p-6 md:p-10 text-center"
               style={{ borderColor: "var(--ring)", background: "linear-gradient(180deg, rgba(20,24,38,0.6), rgba(20,24,38,0.6)), radial-gradient(800px 300px at 50% -20%, rgba(231,111,0,0.12), transparent)" }}>
            <h3 className="text-2xl md:text-3xl font-semibold">Get one practical money play each week</h3>
            <p className="mt-2 opacity-80">Actionable tips for UK–India NRIs: investing, taxes, FX, and property. No spam.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => { e.preventDefault(); alert("Thanks! You'll hear from us soon."); }}>
              <input required type="email" placeholder="you@example.com"
                     className="px-4 py-3 rounded-xl border w-full sm:w-96 bg-transparent"
                     style={{ borderColor: "var(--ring)", color: "var(--fg)" }} />
              <button className="px-5 py-3 rounded-xl font-medium"
                      style={{ background: "var(--primary)", color: "white" }}>
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs opacity-60">Join early to get the NRI Checklists Pack free when it launches.</p>
          </div>
        </div>
      </section>

      {/* Footer + Back to top */}
      <Footer />
      <a href="#" className="fixed bottom-5 right-5 p-3 rounded-full border shadow-lg"
         style={{ borderColor: "var(--ring)", background: "var(--card)" }} aria-label="Back to top">
        <ArrowUp size={18} />
      </a>
    </>
  );
}
