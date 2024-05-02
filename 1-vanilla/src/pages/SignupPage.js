import ContentTitle from "../components/ContentTitle.js";

export default class SignupPage {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }

  render() {
    const title = new ContentTitle(this.$main, "sign up");

    title.render();
  }
}
