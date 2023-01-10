import { Book } from "./Book";
import bookObjectList from "../books";

export const BookList = () => {
  return (
    <section className="book-list">
      {bookObjectList.map((book, index) => {
        return (
          <Book
            // instead of typing out each prop, we can use the spread operator on the book object itself to access those values
            {...book}
            // title={book.title}
            // author={book.author}
            // image={book.image}
            number={index}
            key={book.id}
          />
        );
      })}
    </section>
  );
};
