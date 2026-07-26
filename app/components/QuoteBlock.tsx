type QuoteBlockProps = {
  quote: string;
  author: string;
};

export default function QuoteBlock({
  quote,
  author,
}: QuoteBlockProps) {
  return (
    <blockquote
  className="
    my-12
    rounded-xl
    border
    p-8
    transition-colors

    bg-white
    border-gray-200

    dark:bg-gray-900
    dark:border-gray-700
  "
>
      <p className="
text-3xl
italic
leading-relaxed
text-gray-900
dark:text-white
">
        "{quote}"
      </p>

      <footer className="
mt-6
text-right
text-gray-600
dark:text-gray-400
">
        — {author}
      </footer>
    </blockquote>
  );
}