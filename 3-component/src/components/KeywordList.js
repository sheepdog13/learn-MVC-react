import React from "react";
import store from "../Store.js";
import List from "./List.js";

export default class KeywordList extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    return (
      <>
        <List
          data={this.state.keywordList}
          onClick={this.props.onClick}
          renderItem={(item) => {
            return (
              <>
                <span className="number">{item.id}</span>
                {item.keyword}
              </>
            );
          }}
        />
      </>
    );
  }
}
