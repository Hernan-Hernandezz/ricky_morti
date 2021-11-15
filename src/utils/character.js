const API = "https://rickandmortyapi.com/api/character";

const pages = async () => {
  const response = await fetch(API);
  const data = await response.json();
  const pages = await data.info.pages;
  return pages;
};

//const addItem = (i) => {
//const pages = document.querySelector("#pages");
//const option = document.createElement("option");
//const text = document.createTextNode(`${i}`);
//option.appendChild(text);
//pages.appendChild(option);
//};
//get number of characters
const people = async (page) => {
  try {
    const reponse = await fetch(`${API}?page=${page}`);
    const data = await reponse.json();
    const people = await data.results;
    await people.forEach(async (i) => {
      const characters = document.getElementById("characters");
      const data = await card(i);
      characters.appendChild(data);
    });
  } catch (e) {}
};
//template of character
const card = async (i) => {
  const object = await i;
  const { name, image, id, status, gender, species } = object;
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <div class="card__main">
        <p class="card__main--status"><span class="${status}">${status}</span></p>
        <img src="${image}" class="card__main--image"></img>
        <h2 class="card__main--name">${name}</h2>
        </div>
      <div class="card__dates">
        <p><strong>id api:</strong></br>${id}</p>
        <p><strong>gender:</strong></br>${gender}</p>
        <p><strong>species:</strong></br>${species}</p>
      </div>
  `;
  return div;
};

(async function App() {
  const count = await pages();
  for (let i = 1; i <= count; i++) {
    people(i);
  }
})();
