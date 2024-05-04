export const cardDiv = (index) => {
  const card_div = document.createElement("div");
  card_div.setAttribute("idx", index);
  let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));
  if (!cardStorage[index]) {
    card_div.setAttribute("class", "card");
    cardStorage.push({
      idx: index,
      status: "card",
    });
    localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
  } else {
    card_div.setAttribute("class", cardStorage[index].status);
  }

  card_div.addEventListener("click", (e) => {
    card_div.classList.toggle("is-flipped");

    const targetInx = e.target.parentElement.getAttribute("idx");
    const targetStatus = e.target.parentElement.getAttribute("class");

    let cardStorage = JSON.parse(localStorage.getItem("cardStatus"));
    cardStorage[targetInx].status = targetStatus;

    localStorage.setItem("cardStatus", JSON.stringify(cardStorage));
  });

  return card_div;
};

export const cardPlane = (side, data) => {
  const cardPlane_div = document.createElement("div");
  cardPlane_div.setAttribute("class", "card_plane card_plane--" + side);
  cardPlane_div.appendChild(document.createTextNode(data));

  return cardPlane_div;
};
