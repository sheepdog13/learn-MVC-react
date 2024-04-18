import store from "./js/store.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      searchResult: [],
      submitted: false,
    };
  }
  handleReset() {
    this.setState({ keyword: "", submitted: false });
  }
  handleChange(event) {
    if (event.target.value.length <= 0 && this.state.submitted) {
      return this.handleReset();
    }
    this.setState({
      keyword: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.keyword);
    this.setState({
      submitted: true,
    });
  }
  search(keyword) {
    const searchResult = store.search(keyword);
    this.setState({
      searchResult,
    });
  }
  render() {
    const SearchForm = (
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
    );
    const SearchResult =
      this.state.submitted &&
      (this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt="사진" />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색결과가 없습니다.</div>
      ));
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">{SearchForm}</div>
        <div className="container">{SearchResult}</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app")); // 7
