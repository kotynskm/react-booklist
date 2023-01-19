import { useState } from "react";
import swal from "sweetalert";

const data = { ...localStorage };

type BookProps = {
  title: string;
  author: string;
  image: string;
  number: number;
};

export const Book = (props: BookProps) => {
  const [books, setBooks] = useState([] as any);

  const handleClick = () => {
    let book = props.title;

    if (localStorage.length === 0) {
      localStorage.setItem(`${book}`, book);
      window.location.reload();
    } else {
      if (localStorage.getItem(book) === book) {
        swal("Book already in reading list!");
      } else {
        localStorage.setItem(`${book}`, book);
        window.location.reload();
      }
    }
  };

  return (
    <div className="book">
      <span className="number">#{props.number + 1}</span>
      <button onClick={handleClick}>Add to Reading List</button>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <img src={props.image}></img>
    </div>
  );
};
