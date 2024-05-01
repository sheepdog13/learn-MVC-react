import React from "react";
import List from "./List";
import store from "../Store.js";

export default class KeywordList extends List {
  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ data: keywordList });
  }

  renderItem(item, index) {
    return (
      <>
        <span className="number">{index + 1}</span>
        {item.keyword}
      </>
    );
  }
}
