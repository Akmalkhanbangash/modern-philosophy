type QuoteBlockProps = {
  quote: string;
  author: string;
};

export default function QuoteBlock({
  quote,
  author,
}: QuoteBlockProps) {
  return (
    <blockquote className="my-12 rounded-xl border-l-4 border-gray-900 bg-gray-50 p-8">
      <p className="text-2xl italic leading-relaxed text-gray-800">
        "{quote}"
      </p>

      <footer className="mt-6 text-right text-gray-600">
        — {author}
      </footer>
    </blockquote>
  );
}