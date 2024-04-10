const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView }) {
    console.log(tag);
    this.store = store;

    this.searchFormView = searchFormView;

    this.subscribleViewEvents();
  }
  subscribleViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (event) => this.reset(event));
  }
  search(keyword) {
    console.log(tag, keyword);
  }
  reset() {
    console.log(tag, "reset");
  }
}
