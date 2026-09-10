import Link from "next/link";
import { articles } from "../../data/articles";
import QuoteBlock from "../../components/QuoteBlock";
import NotFoundCard from "../../components/NotFoundCard";
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
    <NotFoundCard
      title="Article Not Found"
      message="The article you're looking for doesn't exist or may have been removed."
      backHref="/articles"
      backLabel="← Back to Articles"
    />
  );
}

  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
  <div className="mx-auto max-w-4xl">
      <Link
      href="/articles"
      className="mb-8 inline-block text-sm font-medium text-blue-600 transition-colors hover:underline dark:text-blue-400"
    >
      ← Back to Articles
    </Link>
      <div className="mb-8">
  <span className="
inline-block
rounded-full
bg-gray-100
px-4
py-1
text-sm
font-medium
text-gray-700

dark:bg-gray-800
dark:text-gray-300
">
    {article.category}
  </span>

  <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
    {article.title}
  </h1>

  <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
    <span>By {article.author ?? "Modern Philosophy"}</span>
    <span>•</span>
    <span>{article.readTime}</span>
  </div>

  <p className="mt-8 text-xl leading-8 text-gray-700 dark:text-gray-300">
    {article.description}
  </p>
</div>
{article.quote && article.quoteAuthor && (
  <QuoteBlock
    quote={article.quote}
    author={article.quoteAuthor}
  />
)}
     <article
  className="
    prose
    prose-lg
    mt-12
    max-w-none

    leading-8

    text-gray-800
    dark:text-gray-300

    dark:prose-headings:text-white
    dark:prose-strong:text-white
    dark:prose-p:text-gray-300
  "
>
  {article.content.map((block, index) =>
  block.type === "heading" ? (
    <h2
  key={index}
  className="mt-12 mb-5 text-3xl font-bold text-gray-900 dark:text-white"
>
  {block.text}
</h2>
  ) : (
    <p key={index}>{block.text}</p>
  )
)}
</article>
<section className="mt-16 rounded-xl border border-gray-200 bg-white p-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    Key Takeaways
  </h2>

  <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-700 dark:text-gray-300">
    <li>Understand the central philosophical idea.</li>
    <li>Think about how it applies to daily life.</li>
    <li>Reflect before moving on to the next article.</li>
  </ul>
</section>
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
          className="
block
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
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
  {related.title}
</h3>

<div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
  <span>By {related.author ?? "Modern Philosophy"}</span>
  <span>•</span>
  <span>{related.readTime}</span>
</div>

<p className="mt-3 text-gray-600 dark:text-gray-300">
  {related.description}
</p>
        </Link>
      ))}
    </div>
  </section>
)}
</div>
    </main>
  );
}