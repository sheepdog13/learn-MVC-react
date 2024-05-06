import ContentTitle from "../components/ContentTitle.js";
import SignupView from "../components/SignupView.js";

export default class SignupPage {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }

  render() {
    const title = new ContentTitle(this.$main, "sign up");

    title.render();

    const signupView = new SignupView(this.$main);

    signupView.render();
  }
}
