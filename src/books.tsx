interface BookObject {
  title: string;
  author: string;
  image: string;
  id: number;
}

let bookObjectList: BookObject[] = [
  {
    title: "Reminders of Him",
    author: "Colleen Hoover",
    image: "https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg",
    id: 1,
  },
  {
    title: "The Wife Before",
    author: "Shanora Williams",
    image: "https://m.media-amazon.com/images/I/81Ivt18vkzL._AC_UL320_.jpg",
    id: 2,
  },
  {
    title: "Twenty Years Later",
    author: "Charlie Donlea",
    image: "https://m.media-amazon.com/images/I/91HFUglJsjL._AC_UL320_.jpg",
    id: 3,
  },
  {
    title: "The New Couple",
    author: "Alison James",
    image: "https://m.media-amazon.com/images/I/61uKmK-YKwL._AC_UL320_.jpg",
    id: 4,
  },
];

export default bookObjectList;
