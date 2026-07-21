import Link from "next/link";

type TopicCardProps = {
  title: string;
  description: string;
};

export default function TopicCard({
  title,
  description,
}: TopicCardProps) {
  return (
    <Link
      href={`/topics/${title.toLowerCase()}`}
      className="block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      <h2 className="text-xl font-semibold text-gray-900 transition-colors dark:text-white">{title}</h2>

      <p className="mt-2 text-gray-600 transition-colors dark:text-gray-300">
        {description}
      </p>
      <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
  Explore →
</p>
    </Link>
  );
}