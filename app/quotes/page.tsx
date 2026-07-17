import QuoteCard from "../components/QuoteCard";
import { quotes } from "../data/quotes";

export default function QuotesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Quotes
      </h1>

      <p className="mt-4 text-xl text-gray-600">
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
    </main>
  );
}