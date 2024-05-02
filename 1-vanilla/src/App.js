import Header from "./components/Header.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  render() {
    const header = new Header(this.$app);
    header.render();
  }
}
