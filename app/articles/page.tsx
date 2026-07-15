import Link from "next/link";
import { articles } from "../data/articles";

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold">Articles</h1>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block rounded-lg border p-6 hover:bg-gray-100"
          >
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <p className="mt-2 text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}