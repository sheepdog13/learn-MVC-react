import store from "./js/store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
    };
  }
  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
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
  }
  search(keyword) {
    const searchResult = store.search(keyword);
    this.setState({
      searchResult,
      keyword,
      submitted: true,
    });
  }

  render() {
    const searchForm = (
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
    const searchResult =
      this.state.searchResult.length > 0 ? (
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
      );

    const keywordList = (
      <ul className="list">
        {this.state.keywordList.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                this.search(item.keyword);
              }}
            >
              <span className="number">{item.id}</span>
              {item.keyword}
            </li>
          );
        })}
      </ul>
    );
    const tabs = (
      <>
        <ui className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li
                className={this.state.selectedTab === tabType ? "active" : ""}
                onClick={() => this.setState({ selectedTab: tabType })}
                key={tabType}
              >
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ui>
        {this.state.selectedTab === "KEYWORD" && keywordList}
        {this.state.selectedTab === "HISTORY" && <>history</>}
      </>
    );

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">{searchForm}</div>
        <div className="container">
          {this.state.submitted ? searchResult : tabs}
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app")); // 7
