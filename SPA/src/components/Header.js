export default class Header {
  constructor($app) {
    this.$app = $app;
  }
  createMenuElem(divClass, spanClass, spanId, menuText) {
    const div = document.createElement("div");
    div.setAttribute("class", divClass);

    const span = document.createElement("span");
    span.setAttribute("id", spanId);
    span.setAttribute("class", spanClass);
    span.appendChild(document.createTextNode(menuText));

    div.appendChild(span);
    return div;
  }

  render() {
    const header = document.createElement("header");
    const homeMenuElem = this.createMenuElem(
      "header header_left",
      "menu_name",
      "menu_home",
      "HOME"
    );
    const signMenuElem = this.createMenuElem(
      "header header_right",
      "menu_name",
      "menu_signup",
      "SIGNUP"
    );

    header.appendChild(homeMenuElem);
    header.appendChild(signMenuElem);

    this.$app.appendChild(header);

    homeMenuElem.addEventListener("click", () => {
      window.history.pushState("", "", "/1-vanilla/index.html/web/");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/1-vanilla/index.html/web/" },
      });
      document.dispatchEvent(urlChange);
    });

    // SIGNUP 메뉴 클릭 이벤트
    signMenuElem.addEventListener("click", () => {
      window.history.pushState("", "", "/1-vanilla/index.html/web/signup");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/web/signup" },
      });
      document.dispatchEvent(urlChange);
    });
  }
}
