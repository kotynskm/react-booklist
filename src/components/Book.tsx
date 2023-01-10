type BookProps = {
  title: string;
  author: string;
  image: string;
  number: number;
};

export const Book = (props: BookProps) => {
  return (
    <div className="book">
      <span className="number">#{props.number + 1}</span>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <img src={props.image}></img>
    </div>
  );
};
