const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag);
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (e) => this.search(e.detail.value))
      .on("@reset", () => this.reset());
    this.tabView.on("@change", (e) => this.change(e.detail.value));
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
  }
  renderSearchResult() {
    this.tabView.hide();
    this.searchResultView.show(this.store.searchResult);
  }
}
