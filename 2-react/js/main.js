class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
    };
  }
  handleReset() {
    this.setState(
      () => {
        return { keyword: "" };
      },
      () => {
        console.log("reset");
      }
    );
  }
  handleChange(event) {
    if (event.target.value.length <= 0) {
      return this.handleReset();
    }
    this.setState({
      keyword: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.keyword);
  }
  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.keyword}
              onChange={(event) => this.handleChange(event)}
            />
            {this.state.keyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )}
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app")); // 7
