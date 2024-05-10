const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag);
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.tabView.show();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (e) => this.search(e.detail.value))
      .on("@reset", () => this.reset());
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
  render() {
    if (this.store.searchkeyword.length > 0) {
      this.tabView.hide();
      this.searchResultView.show(this.store.searchResult);
      return;
    }
    this.searchResultView.hide();
    this.tabView.show();
  }
}
