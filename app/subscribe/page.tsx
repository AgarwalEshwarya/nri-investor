import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata = { title: "Subscribe" };

export default function SubscribePage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Subscribe</h1>
        <p className="mt-3 opacity-80">Get one practical money play each week. No spam.</p>
        <SubscribeForm />
        <p className="mt-2 text-xs opacity-60">
          We’ll wire this to Buttondown/Substack/Mailchimp when you choose a provider.
        </p>
      </main>
      <Footer />
    </>
  );
}
