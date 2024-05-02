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
  }
}
