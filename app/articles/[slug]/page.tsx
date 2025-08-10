import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.nri-investor.com/articles/${post.slug}`,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="text-xs opacity-70">{new Date(post.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-1">{post.title}</h1>
        <p className="mt-2 opacity-80">{post.excerpt}</p>
        <div className="prose prose-invert mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </main>
      <Footer />
    </>
  );
}
