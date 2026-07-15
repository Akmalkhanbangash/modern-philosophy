export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "meaning-of-life",
    title: "The Meaning of Life",
    description: "Exploring one of humanity's oldest philosophical questions.",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "ai-and-ethics",
    title: "Artificial Intelligence & Ethics",
    description: "Can AI make moral decisions? A look at modern ethical debates.",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "stoicism-in-modern-life",
    title: "Stoicism in Modern Life",
    description: "Ancient wisdom for dealing with stress and uncertainty today.",
    readTime: "6 min read",
  },
];