import Hero from "./components/hero";
import FeaturedArticles from "./components/featuredArticles";
import FeaturedQuote from "./components/FeaturedQuote";
import FeaturedTopics from "./components/FeaturedTopics";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 transition-colors dark:bg-black dark:text-white">
  <Hero />
  <FeaturedQuote />
  <FeaturedArticles />
  <FeaturedTopics />
</main>
  );
}