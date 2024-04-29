import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
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
    console.log("TODO: search", searchKeyword);
  }

  render() {
    return (
      <>
        <Header title="검색" />
        <SearchForm
          value={this.state.searchKeyword}
          onChange={(value) => this.handleChangeInput(value)}
          onSubmit={(searchKeyword) => this.search(searchKeyword)}
          onReset={() => this.reset()}
        />
        <SearchResult onclick />
      </>
    );
  }
}
