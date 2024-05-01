import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import store from "./Store";
import Tabs, { TabType } from "./components/Tabs";
import KeywordList from "./components/KeywordList";
import HistoryList from "./components/HistoryLIst";

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
    this.setState({
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    });
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) this.reset();
    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchKeyword, searchResult, submitted: true });
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
            <>
              <Tabs
                selectedTab={selectedTab}
                onClick={(tabType) => this.setState({ selectedTab: tabType })}
              />
              {selectedTab === TabType.KEYWORD && (
                <KeywordList onClick={(keyword) => this.search(keyword)} />
              )}
              {selectedTab === TabType.HISTORY && (
                <HistoryList onClick={(keyword) => this.search(keyword)} />
              )}
            </>
          )}
        </div>
      </>
    );
  }
}
