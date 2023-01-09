type BookProps = {
  title: string;
  author: string;
  image: string;
};

export const Book = (props: BookProps) => {
  return (
    <div className="book">
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <img src={props.image}></img>
    </div>
  );
};
