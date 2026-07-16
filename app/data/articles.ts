export type Article = {
   id: number;
  slug: string;
  title: string;
  description: string;
  readTime: string;
  author: string;
  category: string;
  content: string;
};

export const articles: Article[] = [
  {
  id: 1,
  slug: "meaning-of-life",
  title: "The Meaning of Life",
  description: "Exploring one of humanity's oldest philosophical questions.",
  readTime: "5 min read",
  author: "Malik Akmal Khan",
  category: "Philosophy",

  content:
    "The search for meaning has inspired philosophers for thousands of years and continues to shape how we understand our purpose."
},
  {
    id: 2,
  slug: "ai-and-ethics",
  title: "Artificial Intelligence & Ethics",
  description: "Can AI make moral decisions? A look at modern ethical debates.",
  readTime: "7 min read",
  author: "Malik Akmal Khan",
  category: "AI",
  content:
    "As AI systems become more advanced, they are increasingly involved in making decisions that have ethical implications."
},
 
  {
  id: 3,
  slug: "stoicism-in-modern-life",
  title: "Stoicism in Modern Life",
  description: "Ancient wisdom for dealing with stress and uncertainty today.",
  readTime: "6 min read",
  author: "Malik Akmal Khan",
  category: "Philosophy",
  content:
    "Stoicism teaches us to focus on what we can control, accept what we cannot, and develop resilience in everyday life."
}
];