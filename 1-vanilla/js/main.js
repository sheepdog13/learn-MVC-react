import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag);
  const store = new Store(storage);

  const searchFormView = new SearchFormView();
  const searchResultView = new SearchResultView();

  const views = { searchFormView, searchResultView };

  new Controller(store, views);
}
