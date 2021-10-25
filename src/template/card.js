const card = async (API, numberCharacter) => {
  const object = await getdata(API, numberCharacter);
  const { name, image, id, status, gender, species } = object;
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <div class="card__main">
        <img src="${image}" class="card__main--image"></img>
        <h2 class="card__main--name">${name}</h2>
        </div>
      <div class="card__dates">
        <p><strong>id api:</strong></br>${id}</p>
        <p><strong>status:</strong></br>${status}</p>
        <p><strong>gender:</strong></br>${gender}</p>
        <p><strong>species:</strong></br>${species}</p>
      </div>
  `;
  return div;
};

export default card;
