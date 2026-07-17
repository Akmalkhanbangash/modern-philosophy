export type Quote = {
  id: number;
  text: string;
  author: string;
  topic: string;
};

export const quotes: Quote[] = [
  {
    id: 1,
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    topic: "Purpose",
  },
  {
    id: 2,
    text: "We suffer more in imagination than in reality.",
    author: "Seneca",
    topic: "Mindset",
  },
  {
    id: 3,
    text: "The obstacle is the way.",
    author: "Marcus Aurelius",
    topic: "Discipline",
  },
];