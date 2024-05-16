import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";
import KeywordListView from "./views/KeywordListView.js";
import HistoryListView from "./views/HistoryListView.js";

const tag = "[main]";

document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(tag);
  const store = new Store(storage);

  const searchFormView = new SearchFormView();
  const searchResultView = new SearchResultView();
  const tabView = new TabView();
  const keywordListView = new KeywordListView();
  const historyListView = new HistoryListView();

  const views = {
    searchFormView,
    searchResultView,
    tabView,
    keywordListView,
    historyListView,
  };

  new Controller(store, views);
}
