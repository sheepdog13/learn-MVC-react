import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    {
      searchFormView,
      searchResultView,
      TabView,
      keywordListView,
      HistoryListView,
    }
  ) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.TabView = TabView;
    this.keywordListView = keywordListView;
    this.HistoryListView = HistoryListView;

    this.subscribleViewEvents();
    this.render();
  }
  subscribleViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (event) => this.reset(event));
    this.TabView.on("@change", (event) => this.changeTab(event.detail.value));
    this.keywordListView.on("@click", (event) =>
      this.search(event.detail.value)
    );

    this.HistoryListView.on("@click", (event) =>
      this.search(event.detail.value)
    ).on("@remove", (event) => this.removeHistory(event.detail.value));
  }
  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }
  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }

    this.TabView.show(this.store.selectedTab);
    if (this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
      this.HistoryListView.hide();
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
      this.HistoryListView.show(this.store.getHistoryList());
    } else {
      throw "사용할 수 없는 탭입니다.";
    }
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.searchFormView.show(this.store.searchKeyword);
    this.TabView.hide();
    this.keywordListView.hide();
    this.HistoryListView.hide();
    this.searchResultView.show(this.store.searchResult);
  }
  changeTab(tab) {
    console.log(tag, tab);
    this.store.selectedTab = tab;
    this.render();
  }
  removeHistory(keyword) {
    this.store.removeHistory(keyword);
    this.render();
  }
}
