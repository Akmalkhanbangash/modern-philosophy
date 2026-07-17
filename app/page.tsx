import Hero from "./components/hero";
import FeaturedArticles from "./components/featuredArticles";
import FeaturedQuote from "./components/FeaturedQuote";

export default function Home() {
  return (
    <main>
      <Hero />
       <FeaturedQuote />
      <FeaturedArticles />
    </main>
  );
}