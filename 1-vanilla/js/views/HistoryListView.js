import { delegate, formatRelativeDate, qs } from "../helpers.js";
import KeywordListView from "./KeywordListView.js";

export default class HistoryListView extends KeywordListView {
  constructor() {
    super(qs("#history-list-view"), new Templete());
  }
  bindEvents() {
    delegate(this.element, "click", "button.btn-reset", (e) =>
      this.handleClickRemoveButton(e)
    );
    super.bindEvents();
  }
  handleClickRemoveButton(e) {
    const value = e.target.parentElement.dataset.keyword;

    this.emit("@remove", { value });
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
  _getItem({ id, keyword, date }) {
    return `
        <li data-keyword="${keyword}">
          ${keyword}
          <span class="date">${formatRelativeDate(date)}</span>
          <button class="btn-reset"></button>
        </li>
        `;
  }
}
