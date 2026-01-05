export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  tags: string[];
  minutes: number;
};

export const BOOK_PILLS = [
  "All",
  "Self-help",
  "Business",
  "Health",
  "Psychology",
  "Productivity",
];

export const BOOKS: Book[] = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    description: "Tiny changes, remarkable results. Build better habits.",
    coverUrl: "/covers/atomic-habits.jpg",
    tags: ["Self-help", "Productivity"],
    minutes: 15,
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    coverUrl: "/covers/deep-work.jpg",
    tags: ["Productivity", "Business"],
    minutes: 18,
  },
  {
    id: "psychology-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    coverUrl: "/covers/psychology-of-money.jpg",
    tags: ["Business", "Psychology"],
    minutes: 16,
  },
];
