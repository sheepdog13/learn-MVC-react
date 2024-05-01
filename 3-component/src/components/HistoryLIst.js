import React from "react";
import List from "./List";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

export default class HistoryList extends List {
  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    const data = store.getHistoryList();
    this.setState({ data });
  }

  componentDidMount() {
    const data = store.getHistoryList();
    this.setState({ data });
  }

  renderItem({ id, keyword, date }, index) {
    return (
      <>
        <span>{keyword}</span>
        <span className="date">{formatRelativeDate(date)}</span>
        <button
          className="btn-remove"
          onClick={(event) => {
            this.handleClickRemoveHistory(event, keyword);
          }}
        ></button>
      </>
    );
  }
}
