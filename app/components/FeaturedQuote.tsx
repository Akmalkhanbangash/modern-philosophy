import Link from "next/link";
import { quotes } from "../data/quotes";

export default function FeaturedQuote() {
  const featuredQuote = quotes[0];

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Today's Thought
      </p>

      <blockquote className="mt-6 text-3xl italic leading-relaxed">
        “{featuredQuote.text}”
      </blockquote>

      <p className="mt-6 text-gray-600">
        — {featuredQuote.author}
      </p>

      <Link
        href={`/quotes/${featuredQuote.id}`}
        className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90"
      >
        Explore This Idea
      </Link>
    </section>
  );
}