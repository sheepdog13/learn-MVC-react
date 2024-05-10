import { delegate, qs, qsAll } from "../helpers.js";
import View from "./View.js";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};
const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class TabView extends View {
  constructor() {
    super(qs("#tab-view"));

    this.templete = new Templete();
    this.bindEvent();
  }
  bindEvent() {
    delegate(this.element, "click", "li", (e) => this.handleClick(e));
  }
  handleClick(e) {
    console.log("실행");
    const value = e.target.dataset.tab;
    this.emit("@change", { value });
  }

  show(selectedTab) {
    this.element.innerHTML = this.templete.getTabList(TabType);
    qsAll("li", this.element).forEach((li) => {
      li.className = li.dataset.tab === selectedTab ? "active" : "";
    });
    super.show();
  }
}

class Templete {
  getTabList(TabType) {
    return `
      <ul class="tabs">
        ${Object.values(TabType)
          .map((tabType) => ({
            tabType,
            tabLabel: TabLabel[tabType],
          }))
          .map((tab) => this._getTab(tab))
          .join("")}
      </ul>
    `;
  }
  _getTab({ tabType, tabLabel }) {
    return `
    <li data-tab="${tabType}">${tabLabel}</li>
    `;
  }
}
