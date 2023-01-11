export const ReadingList = () => {
  const data = { ...localStorage };

  const handleClick = (e: any) => {
    const key = e.target.value;
    localStorage.removeItem(bookTitles[key]);
    window.location.reload();
  };

  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  const bookTitles = Object.keys(data);

  console.log(data);
  return (
    <div className="reading-list">
      <h1 className="reading-title">My Reading List</h1>
      <button onClick={handleClear}>Clear List</button>
      <ul>
        {bookTitles.map((book, index) => {
          return (
            <li>
              {data[book]}
              <button value={index} onClick={handleClick}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
