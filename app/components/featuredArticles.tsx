import { articles } from "../data/articles";


export default function FeaturedArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Featured Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.title}
            className="rounded-xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
          </div>
        ))}
      </div>
    </section>
  );
}