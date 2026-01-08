import Image from "next/image";
import type { Book } from "../lib/books";

type Props = {
    books: Book[];
};

export default function RecommendedForYou({ books}: Props) {
    return (
      <section>
        <h2 className="text-xl font-semibold text-slate-900">
          Recommended For You
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          We think you’ll like these
        </p>

        <div className="mt-6 flex gap-6 overflow-x-auto pb-2">
          {books.map((book) => (
            <div key={book.id} className="w-[160px] shrink-0">
              <div className="relative h-[220px] w-full overflow-hidden rounded bg-slate-100">
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-sm font-semibold leading-snug">
                {book.title}
              </p>
              <p className="mt-1 text-xs text-slate-600">{book.author}</p>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <span>{book.minutes} mins</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}