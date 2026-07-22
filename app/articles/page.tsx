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
    <main className="min-h-screen bg-white transition-colors dark:bg-black">
  <div className="mx-auto max-w-4xl px-6 pt-24 pb-20">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white transition-colors">Articles</h1>
      <input
  type="text"
  placeholder="Search articles..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="
    mb-8
    w-full
    rounded-lg
    border
    border-gray-300
    bg-white
    px-4
    py-3
    text-gray-900
    placeholder:text-gray-500
    outline-none
    focus:ring-2
    focus:ring-black
    dark:border-gray-700
    dark:bg-gray-900
    dark:text-white
    dark:placeholder:text-gray-400
    dark:focus:ring-white
  "
/>

      <div className="space-y-4">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{article.title}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{article.description}</p>
          </Link>
        ))}
        {filteredArticles.length === 0 && (
  <div className="
rounded-xl
border
border-dashed
border-gray-300
p-10
text-center

dark:border-gray-700
">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
      No articles found
    </h2>

    <p className="mt-2 text-gray-600 dark:text-gray-300">
      Try a different search term.
    </p>
  </div>
)}
      </div>
      </div>
    </main>
  );
}