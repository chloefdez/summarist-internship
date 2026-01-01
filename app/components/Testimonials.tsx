"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";

const TESTIMONIALS = [
  {
    name: "Hanna M.",
    text: "This app has been a game-changer for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers.",
    rating: 5,
  },
  {
    name: "David B.",
    text: "I love this app! It provides concise and accurate summaries of books in a way that is easy to understand. It's also very user-friendly and intuitive.",
    rating: 5,
  },
  {
    name: "Nathan S.",
    text: "This app is a great way to get the main takeaways from a book without having to read the entire thing. The summaries are well-written and informative. Definitely worth downloading.",
    rating: 5,
  },
  {
    name: "Ryan R.",
    text: "If you're a busy person who loves reading but doesn't have the time to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        What our members say
      </h2>

      <div className="mt-10 space-y-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="mx-auto max-w-[520px] rounded-md bg-[#fbf2d6] px-6 py-4 text-left"
          >
            <div className="flex items-center gap-3">
              <p className="font-medium text-slate-800">{t.name}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-blue-600 text-sm"
                  />
                ))}
              </div>
            </div>

            <p className="mt-2 text-slate-700 text-sm leading-relaxed">
              {t.text}
            </p>
          </div>
        ))}
      </div>

      {/* We'll make this dynamic later */}
      <LoginButton className="mt-10 w-full max-w-[260px] rounded-md bg-[#2cd97c] py-3 font-medium hover:bg-[#27c96f] hover:shadow-md">
        Login
      </LoginButton>
    </section>
  );
}
