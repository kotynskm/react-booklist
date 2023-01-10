import img1 from "./images/verity.jpg";
import img2 from "./images/the-wife-before.jpg";
import img3 from "./images/twenty-years-later.jpg";
import img4 from "./images/the-new-couple.jpg";

interface BookObject {
  title: string;
  author: string;
  image: string;
  id: number;
}

let bookObjectList: BookObject[] = [
  {
    title: "Verity",
    author: "Colleen Hoover",
    image: img1,
    id: 1,
  },
  {
    title: "The Wife Before",
    author: "Shanora Williams",
    image: img2,
    id: 2,
  },
  {
    title: "Twenty Years Later",
    author: "Charlie Donlea",
    image: img3,
    id: 3,
  },
  {
    title: "The New Couple",
    author: "Alison James",
    image: img4,
    id: 4,
  },
];

export default bookObjectList;
