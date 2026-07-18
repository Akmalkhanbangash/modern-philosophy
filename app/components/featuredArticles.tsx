import Link from "next/link";
import { articles } from "../data/articles";


export default function FeaturedArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Articles
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
  Explore carefully selected articles on philosophy, ethics, and modern life.
</p>

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
         <Link
  key={article.slug}
  href={`/articles/${article.slug}`}
  className="rounded-xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg block"
>
            <h3 className="mb-3 text-2xl font-semibold">
              {article.title}
            </h3>

            <p className="mb-4 text-gray-600">
              {article.description}
            </p>

            <span className="text-sm text-gray-500">
              {article.readTime}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}