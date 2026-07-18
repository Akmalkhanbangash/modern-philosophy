import Link from "next/link";
import TopicCard from "./topicCard";
import { articles } from "../data/articles";

export default function FeaturedTopics() {
  const categories = [...new Set(articles.map((article) => article.category))];

  const featuredCategories = categories.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
    <div>
      <h2 className="text-4xl font-bold">
        Explore by Topic
      </h2>

      <p className="mt-3 max-w-2xl text-gray-600">
        Every great journey begins with a single idea.
        Choose a topic and start exploring.
      </p>
    </div>

    <Link
      href="/topics"
      className="text-blue-600 hover:underline"
    >
      View All →
    </Link>
  </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuredCategories.map((category) => {
          const count = articles.filter(
            (article) => article.category === category
          ).length;

          return (
            <Link
              key={category}
              href={`/topics/${category?.toLowerCase()}`}
            >
              <TopicCard
                title={category ?? "General"}
                description={`${count} article${count > 1 ? "s" : ""}`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}