import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t" style={{ borderColor: "var(--ring)" }}>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl flex items-center justify-center font-black tracking-tight"
              style={{ background: "var(--primary)", color: "white" }}
            >
              NI
            </div>
            <div className="text-lg font-semibold">NRI Investor</div>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Clear, actionable money guidance for NRIs across UK and India.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Content</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link href="/articles">Playbooks</Link></li>
            <li><Link href="/articles">Tax</Link></li>
            <li><Link href="/articles">Investing</Link></li>
            <li><Link href="/articles">FX & Transfers</Link></li>
            <li><Link href="/articles">Property</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Stay in the loop</h5>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
          >
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded-xl border flex-1 bg-transparent"
              style={{ borderColor: "var(--ring)", color: "var(--fg)" }}
            />
            <button
              className="px-3 py-2 rounded-xl font-medium"
              style={{ background: "var(--primary)", color: "white" }}
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} NRI Investor. All rights reserved.
      </div>
    </footer>
  );
}
