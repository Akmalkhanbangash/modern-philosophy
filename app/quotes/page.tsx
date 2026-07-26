import QuoteCard from "../components/QuoteCard";
import { quotes } from "../data/quotes";

export default function QuotesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 transition-colors dark:bg-black">
  <div className="mx-auto max-w-6xl">
      <h1 className="text-5xl font-bold text-gray-900 transition-colors dark:text-white">
        Quotes
      </h1>

    <p className="mt-4 text-xl text-gray-600 transition-colors dark:text-gray-300">
        Ideas that stay with you long after you've read them.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {quotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            {...quote}
          />
        ))}
      </div>
      </div>
    </main>
  );
}
