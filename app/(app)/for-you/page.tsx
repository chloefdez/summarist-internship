import SelectedBook from "@/app/components/SelectedBook";
import RecommendedForYou from "@/app/components/RecommendedForYou";
import SuggestedBooks from "@/app/components/SuggestedBooks";
import {
  BOOKS,
  getBooksByIds,
  RECOMMENDED_BOOK_IDS,
  SUGGESTED_BOOK_IDS,
} from "@/app/lib/books";

export default function ForYouPage() {
  const selectedBook = BOOKS[0];

  const recommendedBooks = getBooksByIds(RECOMMENDED_BOOK_IDS);
  const suggestedBooks = getBooksByIds(SUGGESTED_BOOK_IDS);

  return (
    <main>
      <SelectedBook book={selectedBook} />

      <div className="mt-12">
        <RecommendedForYou books={recommendedBooks} />
      </div>

      <div className="mt-12">
        <SuggestedBooks books={suggestedBooks} />
      </div>
    </main>
  );
}
