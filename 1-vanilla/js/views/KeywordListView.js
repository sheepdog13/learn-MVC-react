import { delegate, qs } from "../helpers.js";
import View from "./View.js";

export default class KeywordListView extends View {
  constructor() {
    super(qs("#keyword-list-view"));

    this.templete = new Templete();

    this.bindEvent();
  }
  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.templete.getList(data)
        : this.templete.getEmptyMessage();
    super.show();
  }
  bindEvent() {
    delegate(this.element, "click", "li", (event) => this.handleClick(event));
  }
  handleClick(event) {
    const value = event.target.dataset.keyword;
    this.emit("@click", { value });
  }
}

class Templete {
  getEmptyMessage() {
    return `
    <div class="empty-box">추천 검색어가 없습니다.</div>
    `;
  }

  getList(data = []) {
    return `
        <ul class="list">
            ${data.map(this._getItem).join("")}
        </ul>
    `;
  }
  _getItem({ id, keyword }) {
    return `
        <li data-keyword="${keyword}">
            <span class="number">${id}</span>
            ${keyword}
        </li>
    `;
  }
}
