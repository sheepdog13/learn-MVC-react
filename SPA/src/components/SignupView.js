import { button, input, select } from "./Form.js";

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
    input("email", "email", "이메일");
    input("text", "nickname", "닉네임");
    select(
      "role",
      ["", "backend", "frontend", "fullstack"],
      ["직군을 선택해주세요", "백엔드", "프론트엔드", "풀스택"]
    );
    button("submit", "등록");
  }
}
