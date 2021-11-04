const API = "https://rickandmortyapi.com/api/character/";

//get number of characters
const count = async () => {
  try {
    const reponse = await fetch(API);
    const data = await reponse.json();
    const count = data.info.count;
    return count;
  } catch (e) {}
};
//get individual  character information
const getdata = async (character) => {
  try {
    const response = await fetch(`${API}${character}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
//template of character
const card = async (i) => {
  const object = await getdata(i);
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
  const characters = document.getElementById("characters");
  const length = await count();
  console.log(length);
  //iterates over the number of characters
  for (let i = 1; i <= 20; i++) {
    const data = await card(i);
    characters.appendChild(data);
  }
})();
