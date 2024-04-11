const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, TabView }) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.TabView = TabView;

    this.subscribleViewEvents();
    this.render();
  }
  subscribleViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (event) => this.reset(event));
    this.TabView.on("@change", (event) => this.changeTab(event.detail.value));
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
    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.TabView.hide();
    this.searchResultView.show(this.store.searchResult);
  }
  changeTab(tab) {
    console.log(tag, tab);
    this.store.selectedTab = tab;
    this.render();
  }
}
