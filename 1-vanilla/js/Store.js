import { createNextId } from "./helpers.js";
import { TabType } from "./views/TabView.js";

const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log(tag);

    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchkeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
  }
  search(keyword) {
    this.searchkeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
    this.pushHistoryList(keyword);
  }
  getKeywordList() {
    return this.storage.keywordData;
  }
  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }
  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (v) => v.keyword !== keyword
    );
  }
  pushHistoryList(keyword) {
    if (this._hasKeyword(keyword)) {
      this.removeHistory(keyword);
      this.storage.historyData.push({
        id: createNextId(this.storage.historyData),
        keyword,
        date: new Date(),
      });
    } else {
      this.storage.historyData.push({
        id: createNextId(this.storage.historyData),
        keyword,
        date: new Date(),
      });
    }
  }
  _hasKeyword(keyword) {
    const isKeyword = this.storage.historyData.filter(
      (v) => v.keyword === keyword
    );
    return isKeyword.length > 0 ? true : false;
  }
  _sortHistory(history1, history2) {
    return history2.date - history1.date;
  }
}
