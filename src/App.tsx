import { useState } from "react";
import { BookList } from "./components/BookList";

function App() {
  return (
    <div className="App">
      <h1>My Book List</h1>
      <BookList />
    </div>
  );
}

export default App;
