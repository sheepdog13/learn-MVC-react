import { qs } from "../helpers.js";
import View from "./View.js";

const TabType = {
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
