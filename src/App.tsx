import { BookList } from "./components/BookList";
import { ReadingList } from "./components/ReadingList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Best Selling Books</h1>
      <BookList />
      <ReadingList />
    </div>
  );
}

export default App;
