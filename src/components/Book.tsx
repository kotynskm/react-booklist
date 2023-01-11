import { useState } from "react";

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
    localStorage.setItem("book" + Math.floor(Math.random() * 10), book);
    window.location.reload();
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
