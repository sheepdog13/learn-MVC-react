import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }
  handleChange(e) {
    const searchKeyword = e.target.value;
    this.setState({
      searchKeyword,
    });
  }
  render() {
    return (
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            autoFocus
            value={this.state.searchKeyword}
            onChange={(event) => this.handleChange(event)}
          />
          {this.state.searchKeyword.length > 0 && (
            <button type="reset" className="btn-reset"></button>
          )}
        </form>
      </div>
    );
  }
}
