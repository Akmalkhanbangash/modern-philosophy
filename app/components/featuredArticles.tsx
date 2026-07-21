import Link from "next/link";
import { articles } from "../data/articles";


export default function FeaturedArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold text-gray-900 transition-colors dark:text-white">
  Featured Articles
</h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300 transition-colors">
  Explore carefully selected articles on philosophy, ethics, and modern life.
</p>

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
         <Link
  key={article.slug}
  href={`/articles/${article.slug}`}
  className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
              {article.title}
            </h3>

            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {article.description}
            </p>

            <span className="text-sm text-gray-500 dark:text-gray-300">
              {article.readTime}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}