import CardView from "./components/CardView.js";
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js";
import SignupPage from "./pages/SignupPage.js";
import { setPersonalInfo } from "./storage.js";

export default class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  async render() {
    const header = new Header(this.$app);
    header.render();

    const main = document.createElement("div");
    main.setAttribute("id", "page_content");

    this.$app.appendChild(main);

    const homePage = new HomePage(main);
    const signupPage = new SignupPage(main);

    signupPage.render();

    await setPersonalInfo();

    document.addEventListener("urlchange", (e) => {
      let pathname = e.detail.href;

      switch (pathname) {
        case "/1-vanilla/index.html/web/":
          homePage.render();
          break;
        case "/1-vanilla/index.html/web/signup":
          signupPage.render();
          break;
        default:
      }
    });
  }
}
