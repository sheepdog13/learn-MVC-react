import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from "./Store";
import Tabs from "./components/Tabs";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  }

  reset() {
    console.log("Reset");
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) this.reset();
    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult, submitted: true });
  }

  render() {
    const { searchKeyword, submitted, searchResult, selectedTab } = this.state;
    return (
      <>
        <Header title="검색" />
        <SearchForm
          value={searchKeyword}
          onChange={(value) => this.handleChangeInput(value)}
          onSubmit={() => this.search(searchKeyword)}
          onReset={() => this.reset()}
        />
        <div className="container">
          {submitted ? (
            <SearchResult searchResult={searchResult} />
          ) : (
            <Tabs
              selectedTab={selectedTab}
              onClick={(tabType) => this.setState({ selectedTab: tabType })}
            />
          )}
        </div>
      </>
    );
  }
}
