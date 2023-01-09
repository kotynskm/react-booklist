type BookProps = {
  title: string;
  author: string;
  image: string;
};

export const Book = (props: BookProps) => {
  return (
    <div className="book">
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <img src={props.image}></img>
    </div>
  );
};
