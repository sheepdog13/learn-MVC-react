import { input } from "./Form.js";

export default class SignupView {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const div = document.createElement("div");
    div.setAttribute("id", "form_container");

    const form = document.createElement("form");
    form.setAttribute("id", "grepp_form");
    div.appendChild(form);
    this.$main.appendChild(div);

    input("text", "name", "이름");
  }
}
