import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    {
      searchFormView,
      searchResultView,
      tabView,
      keywordListView,
      historyListView,
    }
  ) {
    console.log(tag);
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;
    this.historyListView = historyListView;

    this.subscribeViewEvents();
    this.render();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (e) => this.search(e.detail.value))
      .on("@reset", () => this.reset());
    this.tabView.on("@change", (e) => this.change(e.detail.value));
    this.keywordListView.on("@keyword", (e) => this.search(e.detail.value));
    this.historyListView
      .on("@keyword", (e) => this.search(e.detail.value))
      .on("@remove", (e) => this.removeHistory(e.detail.value));
  }
  removeHistory(keyword) {
    this.store.removeHistory(keyword);
    this.render();
  }

  search(keyword) {
    this.store.search(keyword);
    this.render();
  }

  reset() {
    this.store.searchkeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  change(tab) {
    this.store.selectedTab = tab;
    this.render();
  }

  render() {
    if (this.store.searchkeyword.length > 0) {
      return this.renderSearchResult();
    }
    this.searchResultView.hide();
    this.tabView.show(this.store.selectedTab);
    if (this.store.selectedTab === TabType.KEYWORD) {
      this.historyListView.hide();
      this.keywordListView.show(this.store.getKeywordList());
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
      this.historyListView.show(this.store.getHistoryList());
    } else throw "사용할 수 없는 탭입니다";
  }
  renderSearchResult() {
    this.searchFormView.show(this.store.searchkeyword);
    this.tabView.hide();
    this.keywordListView.hide();
    this.historyListView.hide();
    this.searchResultView.show(this.store.searchResult);
  }
}
