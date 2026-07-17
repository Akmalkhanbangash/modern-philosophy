import Link from "next/link";
import { articles } from "../../data/articles";
import QuoteBlock from "../../components/QuoteBlock";
//import {relatedArticles} from "../../components/featuredArticles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  const relatedArticles = articles.filter(
  (a) =>
    a.slug !== article?.slug &&
    a.category === article?.category
);

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
      <div className="mb-8">
  <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
    {article.category}
  </span>

  <h1 className="mt-6 text-5xl font-bold leading-tight">
    {article.title}
  </h1>

  <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
    <span>By {article.author ?? "Modern Philosophy"}</span>
    <span>•</span>
    <span>{article.readTime}</span>
  </div>

  <p className="mt-8 text-xl leading-8 text-gray-700">
    {article.description}
  </p>
</div>
{article.quote && article.quoteAuthor && (
  <QuoteBlock
    quote={article.quote}
    author={article.quoteAuthor}
  />
)}
     <article className="prose prose-lg mt-12 max-w-none leading-8 text-gray-800">
  <p>{article.content}</p>
</article>
{relatedArticles.length > 0 && (
  <section className="mt-16">
    <h2 className="text-3xl font-bold">
      Related Articles
    </h2>

    <div className="mt-8 space-y-4">
      {relatedArticles.map((related) => (
        <Link
          key={related.id}
          href={`/articles/${related.slug}`}
          className="block rounded-xl border p-6 transition hover:shadow-md"
        >
          <h3 className="text-xl font-semibold">
  {related.title}
</h3>

<div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
  <span>By {related.author ?? "Modern Philosophy"}</span>
  <span>•</span>
  <span>{related.readTime}</span>
</div>

<p className="mt-3 text-gray-600">
  {related.description}
</p>
        </Link>
      ))}
    </div>
  </section>
)}
    </main>
  );
}