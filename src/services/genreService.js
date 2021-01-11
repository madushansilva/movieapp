export const genres = [
  { _id: "1", name: "Action" },
  { _id: "2", name: "Animation" },
  { _id: "3", name: "Adventure" },
  { _id: "4", name: "Comedy" },
  { _id: "5", name: "Fantasy" },
 
];

export function getGenres() {
  return genres.filter(g => g);
}
