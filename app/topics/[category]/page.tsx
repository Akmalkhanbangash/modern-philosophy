import Link from "next/link";
import { articles } from "../../data/articles";
import NotFoundCard from "@/app/components/NotFoundCard";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function TopicPage({ params }: Props) {
  const { category } = await params;
  const filteredArticles = articles.filter(
  (article) =>
    article.category?.toLowerCase() === category.toLowerCase()
);
if (filteredArticles.length === 0) {
  return (
    <NotFoundCard
      title="Topic Not Found"
      message="We couldn't find any articles in this topic."
      backHref="/topics"
      backLabel="← Back to Topics"
    />
  );
}

  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
  <section className="mb-16">
  <h1 className="text-5xl font-bold capitalize text-gray-900 dark:text-white">
    {category}
  </h1>
  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
  {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
</p>

  <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
    Explore thoughtful articles about <strong>{category}</strong>. Discover key ideas, practical insights, and timeless perspectives that connect philosophy with everyday life.
  </p>
</section>
      <div className="mt-10 space-y-4">
  {filteredArticles.map((article) => (
    <div
  key={article.id}
  className="
rounded-xl
border
border-gray-200
bg-white
p-6

transition-all
duration-300

hover:-translate-y-1
hover:shadow-lg

dark:border-gray-800
dark:bg-gray-900
">
  <Link
    href={`/articles/${article.slug}`}
    className="text-xl font-semibold text-gray-900 hover:underline dark:text-white"
  >
    {article.title}
  </Link>
  <div className="mt-2 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
  <span>By {article.author ?? "Modern Philosophy"}</span>
  <span>•</span>
  <span>{article.readTime}</span>
</div>

  <p className="mt-2 text-gray-600 dark:text-gray-300">
    {article.description}
  </p>
</div>
  ))}
</div>
    </main>
  );
}