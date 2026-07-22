import TopicCard from "../components/topicCard";
import { articles } from "../data/articles";
const topics = [...new Set(articles.map((article) => article.category))];

export default function TopicsPage() {
  return (
    <main className="min-h-screen bg-white transition-colors dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white transition-colors">Topics</h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 transition-colors">
        Browse articles by topic.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
  <TopicCard
    key={topic}
    title={topic}
    description={`Explore articles about ${topic}.`}
  />
))}
      </div>
      </div>
    </main>
  );
}