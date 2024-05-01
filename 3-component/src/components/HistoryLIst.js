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

  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation();
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
          renderItem={(item) => {
            return (
              <>
                <span>{item.keyword}</span>
                <span className="date">{formatRelativeDate(item.date)}</span>
                <button
                  className="btn-remove"
                  onClick={(event) => {
                    this.handleClickRemoveHistory(event, item.keyword);
                  }}
                ></button>
              </>
            );
          }}
        />
      </>
    );
  }
}
