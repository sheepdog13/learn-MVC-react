import React from "react";

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  renderItem(item, index) {}

  render() {
    return (
      <>
        <ul className="list">
          {this.state.data.map((item, index) => {
            return (
              <li
                key={item.id}
                onClick={() => this.props.onClick(item.keyword)}
              >
                {this.renderItem(item, index)}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
