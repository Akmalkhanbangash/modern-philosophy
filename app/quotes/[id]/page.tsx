import Link from "next/link";
import { quotes } from "../../data/quotes";
import QuoteBlock from "../../components/QuoteBlock";
import NotFoundCard from "@/app/components/NotFoundCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuotePage({ params }: Props) {
  const { id } = await params;

  const quote = quotes.find((q) => q.id === Number(id));
  const currentIndex = quotes.findIndex(
  (q) => q.id === Number(id)
);

const previousQuote = quotes[currentIndex - 1];
const nextQuote = quotes[currentIndex + 1];

  if (!quote) {
  return (
    <NotFoundCard
      title="Quote Not Found"
      message="The quote you're looking for doesn't exist or may have been removed."
      backHref="/quotes"
      backLabel="← Back to Quotes"
    />
  );
}

  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
  <div className="mx-auto max-w-4xl">
      <Link
        href="/quotes"
        className="font-medium text-blue-600 transition-colors hover:underline dark:text-blue-400"
      >
        ← Back to Quotes
      </Link>

      <div className="mt-10">
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700 transition-colors dark:bg-gray-800 dark:text-gray-300">
          {quote.topic}
        </span>

        <QuoteBlock
          quote={quote.text}
          author={quote.author}
        />
        <div className="mt-12 flex justify-between">
  {previousQuote ? (
    <Link
      href={`/quotes/${previousQuote.id}`}
      className="font-medium text-blue-600 transition-colors hover:underline dark:text-blue-400"
    >
      ← Previous Quote
    </Link>
  ) : (
    <div />
  )}

  {nextQuote ? (
    <Link
      href={`/quotes/${nextQuote.id}`}
      className="text-blue-600 hover:underline"
    >
      Next Quote →
    </Link>
  ) : (
    <div />
  )}
</div>
      </div>
      <section className="mt-16 rounded-xl border border-gray-200 bg-white p-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
    Reflection
  </h2>

  <p className="mt-4 text-gray-600 dark:text-gray-300">
    Take a moment before moving on.
    Ask yourself:
  </p>

  <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-700 dark:text-gray-300">
    <li>How does this idea relate to my own life?</li>
    <li>What assumption does this quote challenge?</li>
    <li>What is one small action I can take today?</li>
  </ul>
</section>
      </div>
    </main>
  );
}