import Link from "next/link";

type QuoteCardProps = {
  id: number;
  text: string;
  author: string;
  topic: string;
};

export default function QuoteCard({
  id,
  text,
  author,
  topic,
}: QuoteCardProps) {
  return (
    <Link
      href={`/quotes/${id}`}
      className="block rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors dark:bg-gray-800 dark:text-gray-300">
        {topic}
      </span>

      <p className="mt-4 text-xl italic leading-relaxed text-gray-900 transition-colors dark:text-white">
        "{text}"
      </p>

      <p className="mt-6 text-right text-gray-600 transition-colors dark:text-gray-300">
        — {author}
      </p>
    </Link>
  );
}