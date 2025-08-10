import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nri-investor.com";
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/articles`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/subscribe`, lastModified: new Date() },
  ];

  getAllPosts().forEach((p) => {
    items.push({ url: `${base}/articles/${p.slug}`, lastModified: new Date(p.date) });
  });

  return items;
}
