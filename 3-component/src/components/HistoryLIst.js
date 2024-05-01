import React from "react";
import List from "./List";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

export default class HistoryLIst extends React.Component {
  constructor() {
    super();

    this.state = {
      historylist: [],
    };
  }

  componentDidMount() {
    const historylist = store.getHistoryList();
    this.setState({ historylist });
  }

  onRemove(keyword) {
    store.removeHistory(keyword);
    const historylist = store.getHistoryList();
    this.setState({ historylist });
  }

  render() {
    return (
      <>
        <List
          data={this.state.historylist}
          onClick={this.props.onClick}
          onRemove={(keyword) => this.onRemove(keyword)}
          isDate
        />
      </>
    );
  }
}
