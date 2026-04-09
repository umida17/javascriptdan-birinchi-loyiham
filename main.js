let container = document.getElementById("container");
let searchInput = document.getElementById("input");
 
let datas = [
  {
    id: 1,
    title: "O'zbek Qizi (2023)",
    genre: "Drama / Harbiy",
    year: 2023,
    rating: 8.5,
    video: "https://www.youtube.com/embed/QZU7GZ4lnDk"
  },
  {
    id: 2,
    title: "Isnod (Uzbek kino)",
    genre: "Drama",
    year: 2023,
    rating: 7.8,
    video: "https://www.youtube.com/embed/or6Dg3EUdRs"
  },
  {
    id: 3,
    title: "Virus (Uzbek kino)",
    genre: "Drama",
    year: 2016,
    rating: 8.0,
    video: "https://www.youtube.com/embed/LnMI7MH8Pfg"
  },
  {
    id: 4,
    title: "Yuzsiz (Uzbek kino)",
    genre: "Drama",
    year: 2017,
    rating: 7.4,
    video: "https://www.youtube.com/embed/QvRudWUd15o"
  },
  {
    id: 5,
    title: "Begunoh (Uzbek kino)",
    genre: "Drama",
    year: 2018,
    rating: 7.2,
    video: "https://www.youtube.com/embed/epZSw9O9-74"
  },
  {
    id: 6,
    title: "O'g'ri (Uzbek kino)",
    genre: "Drama / Triller",
    year: 2016,
    rating: 7.0,
    video: "https://www.youtube.com/embed/u-l5nf9ueGg"
  },
  {
    id: 7,
    title: "Kaysarginam (Uzbek kino)",
    genre: "Drama / Komediya",
    year: 2021,
    rating: 7.8,
    video: "https://www.youtube.com/embed/bZZclwJ3SwY"
  },
  {
    id: 8,
    title: "Qaysarginam 2 (Uzbek kino)",
    genre: "Drama / Komediya",
    year: 2022,
    rating: 8.1,
    video: "https://www.youtube.com/embed/bZZclwJ3SwY"
  },
  {
    id: 9,
    title: "Istanbullik Milliarder (Uzbek kino)",
    genre: "Komediya",
    year: 2019,
    rating: 8.3,
    video: "https://www.youtube.com/embed/bZZclwJ3SwY"
  },
  {
    id: 10,
    title: "Mahallada duv‑duv gap (klassik)",
    genre: "Komediy / Klassik",
    year: 1960,
    rating: 9.0,
    video: "https://www.youtube.com/embed/bZZclwJ3SwY"
  }
];


function renderUser(data) {
    container.innerHTML = data.map(el => `
        <div class="card">
         <iframe width="200" height="200"
                src="${el.video}"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <h1>${el.title}</h1>
            <p>${el.genre}</p>
            <a href="#">${el.year}</a>
        </div>
    `).join("")
}
renderUser(datas)


let categories = [
  { name: "Musiqa", color: "#040404" },
  { name: "Kino", color: "#050505" },
  { name: "Multfilim", color: "#030303" },
  { name: "Drama", color: "#000000" },
  { name: "Komediya", color: "#050505" },
  { name: "Fantastika", color: "#040404" },
  { name: "Tarixiy", color: "#000000" },
  { name: "Triller", color: "#060606" },
  { name: "Sarguzasht", color: "#000000" },
  { name: "Romantika", color: "#000000" }
];

let categoriesContainer = document.getElementById("categories");

function renderCategories(categories) {
    categoriesContainer.innerHTML = categories.map(cat => `
        <button class="button" style="
            background:${cat.color};
            border:none;
            color:white;
            padding:10px 15px;
            border-radius:6px;
            cursor:pointer;
        ">
            ${cat.name}
        </button>
    `).join("");
}

renderCategories(categories);
 