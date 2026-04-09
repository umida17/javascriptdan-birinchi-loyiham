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
  id: 11,
  title: "Majnun (Uzbek kino, treyler)",
  genre: "Drama / Romantika",
  year: 2016,
  rating: 7.4,
  video: "https://www.youtube.com/embed/_-Q5OByVuik" // Majnun treyler :contentReference[oaicite:0]{index=0}
},
{
  id: 12,
  title: "Darbadar (Uzbek kino, treyler)",
  genre: "Drama / Komediya",
  year: 2017,
  rating: 7.1,
  video: "https://www.youtube.com/embed/i_1RxAHo6yc" // Darbadar treyler :contentReference[oaicite:1]{index=1}
},
{
  id: 13,
  title: "Zulmat (Uzbek kino, treyler)",
  genre: "Triller / Drama",
  year: 2017,
  rating: 7.8,
  video: "https://www.youtube.com/embed/n4FwyXSulWI" // Zulmat treyler :contentReference[oaicite:2]{index=2}
},
{
  id: 14,
  title: "Hechkimga Aytma (Uzbek kino, treyler)",
  genre: "Komediya / Drama",
  year: 2023,
  rating: 8.1,
  video: "https://www.youtube.com/embed/HaiCSeBuW4g" // Hechkimga Aytma treyler :contentReference[oaicite:3]{index=3}
},

{
  id: 15,
  title: "Maktab hayotim (Uzbek kino)",
  genre: "Drama / Komediya",
  year: 2025,
  rating: 7.0,
  video: "https://www.youtube.com/embed/0AJb7KFSy_M"
}, 
{
  id: 16,
  title: "Ota rozi (Uzbek kino)",
  genre: "Komediya",
  year: 2018,
  rating: 7.9,
  video: "https://www.youtube.com/embed/lKOxLNGeG3Q"
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
 


searchInput.addEventListener("input", function(e) {
   let malumot = e.target.value.toLowerCase();
  const filterData = datas.filter(user => 
    user.title.toLowerCase().includes(malumot)
  );
  renderUser(filterData)
})
renderUser(datas)