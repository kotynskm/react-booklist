import { Book } from "./Book";

interface BookObject {
  title: string;
  author: string;
  image: string;
}

let bookObjectList: BookObject[] = [
  {
    title: "Reminders of Him",
    author: "Colleen Hoover",
    image: "https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg",
  },
  {
    title: "The Wife Before",
    author: "Shanora Williams",
    image: "https://m.media-amazon.com/images/I/81Ivt18vkzL._AC_UL320_.jpg",
  },
  {
    title: "Twenty Years Later",
    author: "Charlie Donlea",
    image: "https://m.media-amazon.com/images/I/91HFUglJsjL._AC_UL320_.jpg",
  },
  {
    title: "The New Couple",
    author: "Alison James",
    image: "https://m.media-amazon.com/images/I/61uKmK-YKwL._AC_UL320_.jpg",
  },
];

export const BookList = () => {
  return (
    <section className="book-list">
      {bookObjectList.map((book) => {
        return (
          <Book title={book.title} author={book.author} image={book.image} />
        );
      })}
    </section>
  );
};
