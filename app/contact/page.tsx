import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
        <p className="mt-4 opacity-80">Email: <a className="underline" href="mailto:hello@nri-investor.com">hello@nri-investor.com</a></p>
      </main>
      <Footer />
    </>
  );
}
