import { qs } from "../helpers.js";
import View from "./View.js";

export default class SearchResultView extends View {
  constructor() {
    super(qs("#search-result-view"));

    this.templete = new Templete();
  }
  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.templete.getList(data)
        : this.templete.getEmptyMessage();
    super.show();
  }
}

class Templete {
  getEmptyMessage() {
    return `
      <div class="empty-box">검색결과가 없습니다</div>
    `;
  }
  getList(data = []) {
    return `
      <ul class="result">
        ${data.map((item) => this._getitem(item)).join("")}
      </ul>
    `;
  }
  _getitem({ imageUrl, name }) {
    return `
      <li>
        <img src="${imageUrl}" alt="${name}" />
        <p>${name}</p>
      </li> 
    `;
  }
}
