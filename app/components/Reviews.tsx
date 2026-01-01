"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faLeaf, faStar } from "@fortawesome/free-solid-svg-icons";

const REVIEW_CARDS = [
  {
    icon: faCrown,
    big: "3 Million",
    small: "Downloads on all platforms",
  },
  {
    icon: faStar,
    big: "4.5 Stars",
    small: "Average ratings on iOS and Google Play",
    stars: 5,
  },
  {
    icon: faLeaf,
    big: "97%",
    small: "Of Summarist members create a better reading habit",
  },
];

export default function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
        Start growing with Summarist now
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {REVIEW_CARDS.map((card) => (
          <div
            key={card.big}
            className="mx-auto w-full max-w-[320px] rounded-xl bg-[#dbe9ff] px-10 py-10 text-center"
          >
            <div className="flex justify-center">
              <FontAwesomeIcon
                icon={card.icon}
                className="text-blue-600 text-2xl"
              />
            </div>

            {/* only show stars on the “4.5 Stars” card */}
            {card.stars ? (
              <div className="mt-3 flex justify-center gap-1">
                {Array.from({ length: card.stars }).map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="text-blue-600 text-sm"
                  />
                ))}
              </div>
            ) : (
              <div className="mt-3" />
            )}

            <p className="mt-4 text-3xl font-semibold text-slate-900">
              {card.big}
            </p>
            <p className="mt-2 text-sm text-slate-700">{card.small}</p>
          </div>
        ))}
      </div>
    </section>
  );
}