import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Why NRI Investor?</h1>
        <p className="mt-4 opacity-90 text-sm leading-relaxed">
          I’m <strong>Eshwarya</strong>, a London-based analytics leader (ex–Director of Insights & Analytics at an EdTech subscription business). Over 13 years, I’ve worked across FX, SWIFT messaging, nostro accounts, and partner bank management—plus data-driven pricing and renewal models.
        </p>
        <p className="mt-3 opacity-90 text-sm leading-relaxed">NRI Investor blends that execution-first mindset with clear, example-led content so you can make better decisions across borders.</p>
      </main>
      <Footer />
    </>
  );
}
