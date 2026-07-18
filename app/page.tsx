import Hero from "./components/hero";
import FeaturedArticles from "./components/featuredArticles";
import FeaturedQuote from "./components/FeaturedQuote";
import FeaturedTopics from "./components/FeaturedTopics";

export default function Home() {
  return (
    <main>
      <Hero />
       <FeaturedQuote />
      <FeaturedArticles />
      <FeaturedTopics />
    </main>
  );
}