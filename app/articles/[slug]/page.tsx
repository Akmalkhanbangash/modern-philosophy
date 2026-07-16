import Link from "next/link";
import { articles } from "../../data/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Article not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link
      href="/articles"
      className="mb-8 inline-block text-sm text-blue-600 hover:underline"
    >
      ← Back to Articles
    </Link>
      <h1 className="text-5xl font-bold">{article.title}</h1>

      <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
  <span>By {article.author}</span>
  <span>•</span>
  <span>{article.readTime}</span>
</div>

<p className="mt-4 text-xl leading-8 text-gray-700">
  {article.description}
</p>
     <article className="prose prose-lg mt-10 max-w-none">
  <p>{article.content}</p>
</article>
    </main>
  );
}