"use client";
import Link from "next/link";
import { articles } from "../data/articles";
import { useState } from "react";

export default function ArticlesPage() {
  const [search, setSearch] = useState("");
  const filteredArticles = articles.filter((article) =>
  article.title.toLowerCase().includes(search.toLowerCase()) ||
  article.description.toLowerCase().includes(search.toLowerCase())
);
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">Articles</h1>
      <input
  type="text"
  placeholder="Search articles..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-8 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-black"
/>

      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block rounded-lg border p-6 hover:bg-gray-100"
          >
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="mt-2 text-gray-600">{article.description}</p>
          </Link>
        ))}
        {filteredArticles.length === 0 && (
  <div className="rounded-lg border border-dashed p-8 text-center">
    <h2 className="text-2xl font-semibold">
      No articles found
    </h2>

    <p className="mt-2 text-gray-600">
      Try a different search term.
    </p>
  </div>
)}
      </div>
    </main>
  );
}