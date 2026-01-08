// fake backend file for now

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
    coverUrl: "/book-covers/atomic_habits.png",
    tags: ["Self-help", "Productivity"],
    minutes: 15,
  },
  {
    id: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    coverUrl: "/book-covers/deep-work.png",
    tags: ["Productivity", "Business"],
    minutes: 18,
  },
  {
    id: "cant-hurt-me",
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master Your Mind and Defy the Odds",
    coverUrl: "/book-covers/cant-hurt-me.png",
    tags: ["Business", "Psychology"],
    minutes: 4,
  },
];

export const RECOMMENDED_BOOK_IDS = [
  "atomic-habits",
  "deep-work",
  "cant-hurt-me",
];

export const SUGGESTED_BOOK_IDS = [
  "atomic-habits",
  "deep-work",
  "cant-hurt-me",
];

export const getBooksByIds = (ids: string[]): Book[] => {
  return ids
    .map((id) => BOOKS.find((b) => b.id === id))
    .filter((b): b is Book => Boolean(b));
};
