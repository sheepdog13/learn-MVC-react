import CardView from "../components/CardView.js";
import ContentTitle from "../components/ContentTitle.js";

export default class HomePage {
  constructor($main, $title) {
    this.$main = $main;
    this.$title = $title;
  }

  render() {
    const title = new ContentTitle(this.$main, "홈");

    title.render();

    // const cardView = new CardView(this.$main);

    // cardView.render();
  }
}
