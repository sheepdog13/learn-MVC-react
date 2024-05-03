import { cardDiv, cardPlane } from "./Card.js";

export default class CardView {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");

    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    for (let i = 0; i < personalInfo.length; i++) {
      const card = cardDiv(i);
      card.appendChild(cardPlane("front", personalInfo[i].name));
      card.appendChild(cardPlane("back", personalInfo[i].mbti));
      containerDiv.appendChild(card);
    }

    this.$main.appendChild(containerDiv);
  }
}
