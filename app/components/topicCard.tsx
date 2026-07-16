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
      className="block rounded-xl border p-6 transition hover:shadow-md hover:bg-gray-50"
    >
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </Link>
  );
}