export default function Footer() {
  return (
    <footer className="mt-12 border-t" style={{ borderColor: "var(--ring)" }}>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center font-black tracking-tight"
                 style={{ background: "var(--primary)", color: "white" }}>NI</div>
            <div className="text-lg font-semibold">NRI Investor</div>
          </div>
          <p className="mt-3 text-sm opacity-80">Clear, actionable money guidance for NRIs across UK and India.</p>
        </div>
        <div>
          <h5 className="font-semibold">Content</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><a href="/articles">Playbooks</a></li>
            <li><a href="/articles">Tax</a></li>
            <li><a href="/articles">Investing</a></li>
            <li><a href="/articles">FX & Transfers</a></li>
            <li><a href="/articles">Property</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Stay in the loop</h5>
          <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }}>
            <input required type="email" placeholder="you@example.com" className="px-3 py-2 rounded-xl border flex-1 bg-transparent" style={{ borderColor: "var(--ring)", color: "var(--fg)" }} />
            <button className="px-3 py-2 rounded-xl font-medium" style={{ background: "var(--primary)", color: "white" }}>Join</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs opacity-60">© {new Date().getFullYear()} NRI Investor. All rights reserved.</div>
    </footer>
  );
}
