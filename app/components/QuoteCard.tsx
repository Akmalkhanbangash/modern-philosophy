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
      className="block rounded-xl border p-6 transition hover:shadow-md"
    >
      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
        {topic}
      </span>

      <p className="mt-4 text-xl italic leading-relaxed">
        "{text}"
      </p>

      <p className="mt-6 text-right text-gray-600">
        — {author}
      </p>
    </Link>
  );
}