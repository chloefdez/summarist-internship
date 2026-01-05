import SelectedBook from "@/app/components/SelectedBook";
import { BOOKS } from "../../lib/books";

export default function ForYouPage() {
  const selectedBook = BOOKS[0];

  return (
    <div className="space-y-10">
      <SelectedBook book={selectedBook} />
    </div>
  )
}