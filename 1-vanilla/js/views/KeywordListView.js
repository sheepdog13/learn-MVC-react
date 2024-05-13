import { qs } from "../helpers.js";
import View from "./View.js";

export default class KeywordListView extends View {
  constructor() {
    super(qs("#keyword-list-view"));

    this.templete = new Templete();
  }
  show(data = []) {
    this.element.innerHTML = data.length > 0 && this.templete.getList(data);

    super.show();
  }
}

class Templete {
  getList(data = []) {
    return `
    <ul class="list">
    ${data.map((list) => this._getItem(list)).join("")}
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
