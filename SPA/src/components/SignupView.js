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

    input("text", "name", "이름", true);
    input("email", "email", "이메일", true);
    input("text", "nickname", "닉네임");
    const mbtiValList = [
      "",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];
    const mbtiTxtList = [
      "MBTI를 선택해주세요",
      "ENFJ",
      "ENTJ",
      "ENFP",
      "ENTP",
      "ESFJ",
      "ESTJ",
      "ESFP",
      "ESTP",
      "INFJ",
      "INTJ",
      "INFP",
      "INTP",
      "ISFJ",
      "ISTJ",
      "ISFP",
      "ISTP",
    ];
    select(
      "role",
      ["", "backend", "frontend", "fullstack"],
      ["직군을 선택해주세요", "백엔드", "프론트엔드", "풀스택"],
      "직군",
      true
    );
    select("mbti", mbtiValList, mbtiTxtList, "mbti");
    button("submit", "등록");
  }
}
