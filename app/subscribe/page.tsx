import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Subscribe" };

export default function SubscribePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Subscribe</h1>
        <p className="mt-3 opacity-80">Get one practical money play each week. No spam.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! You'll hear from us soon."); }}>
          <input required type="email" placeholder="you@example.com" className="px-4 py-3 rounded-xl border w-full sm:w-96 bg-transparent" style={{ borderColor: "var(--ring)", color: "var(--fg)" }} />
          <button className="px-5 py-3 rounded-xl font-medium" style={{ background: "var(--primary)", color: "white" }}>Subscribe</button>
        </form>
        <p className="mt-2 text-xs opacity-60">We’ll wire this to Buttondown/Substack/Mailchimp when you choose a provider.</p>
      </main>
      <Footer />
    </>
  );
}
