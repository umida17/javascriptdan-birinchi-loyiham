let container = document.getElementById("container");
let searchInput = document.getElementById("input");

let datas = [
  {
    id: 1,
    title: "Inception",
    genre: "Fantastika",
    year: 2010,
    rating: 8.8,
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    title: "Titanic",
    genre: "Drama",
    year: 1997,
    rating: 7.9,
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Jangari",
    year: 2008,
    rating: 9.0,
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Fantastika",
    year: 2014,
    rating: 8.6,
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    genre: "Jangari",
    year: 2019,
    rating: 8.4,
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Fantastika",
    year: 1999,
    rating: 8.7,
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },
  {
    id: 8,
    title: "Gladiator",
    genre: "Tarixiy",
    year: 2000,
    rating: 8.5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 9,
    title: "Joker",
    genre: "Drama",
    year: 2019,
    rating: 8.4,
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 10,
    title: "Avatar",
    genre: "Fantastika",
    year: 2009,
    rating: 7.8,
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }
];


function renderUser(data) {
    container.innerHTML = data.map(el => `
        <div class="card">
            <video width="200" height="200" controls>
                <source src="${el.video}" type="video/mp4">
            </video>
            <h1>${el.title}</h1>
            <p>${el.genre}</p>
            <a href="#">${el.year}</a>
        </div>
    `).join("")
}