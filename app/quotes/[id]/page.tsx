import Link from "next/link";
import { quotes } from "../../data/quotes";
import QuoteBlock from "../../components/QuoteBlock";

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
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Quote not found
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/quotes"
        className="text-blue-600 hover:underline"
      >
        ← Back to Quotes
      </Link>

      <div className="mt-10">
        <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm">
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
      className="text-blue-600 hover:underline"
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
    </main>
  );
}