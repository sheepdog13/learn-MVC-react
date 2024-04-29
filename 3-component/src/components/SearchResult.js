import React, { Component } from "react";

export default class SearchResult extends Component {
  constructor() {
    super();

    this.state = {
      searchResult: [],
    };
  }
  render() {
    return (
      this.state.searchResult && (
        <ul>
          {this.state.searchResult.map((v) => {
            return;
          })}
        </ul>
      )
    );
  }
}
