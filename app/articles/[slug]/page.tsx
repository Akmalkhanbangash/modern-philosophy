import Link from "next/link";
import { articles } from "../../lib/articles";

export default function Articles() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold">Articles</h1>

      <div className="mt-8 space-y-4">

        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="block border border-gray-700 p-4 rounded hover:bg-gray-900"
          >
            {article.title}
          </Link>
        ))}

      </div>

    </main>
  );
}