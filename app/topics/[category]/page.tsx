import Link from "next/link";
import { articles } from "../../data/articles";

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

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold capitalize">
        {category}
      </h1>

      <p className="mt-4 text-gray-600">
        Articles related to {category}
      </p>
      <div className="mt-10 space-y-4">
  {filteredArticles.map((article) => (
    <div
  key={article.id}
  className="rounded-lg border p-4"
>
  <Link
    href={`/articles/${article.slug}`}
    className="text-xl font-semibold hover:underline"
  >
    {article.title}
  </Link>

  <p className="mt-2 text-gray-600">
    {article.description}
  </p>
</div>
  ))}
</div>
    </main>
  );
}