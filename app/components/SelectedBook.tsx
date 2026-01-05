import Image from "next/image";
import type { Book } from "../lib/books";

type Props = {
  book: Book;
};

export default function SelectedBook({ book }: Props) {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-slate-900">
        Selected just for you
      </h1>

      <div className="mt-6 rounded-md bg-[#fbf2d6] px-8 py-6">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_220px_1fr]">
          {/* Left */}
          <p className="text-sm font-semibold text-slate-900">
            {book.description}
          </p>

          {/* Middle */}
          <div className="flex justify-center">
            <div className="relative h-[160px] w-[120px] overflow-hidden rounded">
              <Image
                src={book.coverUrl}
                alt={book.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-base font-semibold">{book.title}</p>
            <p className="text-sm text-slate-600">{book.author}</p>

            <div className="mt-4 flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                ▶
              </button>
              <span className="text-sm">{book.minutes} mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}