import Link from "next/link";
import { quotes } from "../data/quotes";

export default function FeaturedQuote() {
  const featuredQuote = quotes[0];

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center transition-colors">
      <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Today's Thought
      </p>

      <blockquote className="mt-6 text-3xl italic leading-relaxed text-gray-900 transition-colors dark:text-white">
        “{featuredQuote.text}”
      </blockquote>

      <p className="mt-6 text-gray-600 transition-colors dark:text-gray-300">
        — {featuredQuote.author}
      </p>

      <Link
        href={`/quotes/${featuredQuote.id}`}
        className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white transition-all duration-300 hover:opacity-90 dark:bg-white dark:text-black"
      >
        Explore This Idea
      </Link>
    </section>
  );
}