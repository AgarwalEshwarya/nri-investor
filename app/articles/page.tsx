import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { Chip } from "@/components/ui";

export const metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  const posts = getAllPosts();
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">All Articles</h1>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--ring)", background: "var(--card)" }}>
              <div className="aspect-[16/9] bg-gradient-to-br from-[var(--accent)] to-[var(--primary)]" />
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 text-xs">
                  <Chip>{p.tag}</Chip>
                  <span className="opacity-60">{new Date(p.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  <Link href={`/articles/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="mt-2 text-sm opacity-80">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
