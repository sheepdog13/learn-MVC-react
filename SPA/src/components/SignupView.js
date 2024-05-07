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
      ["", "백엔드", "프론트엔드", "풀스택"],
      ["직군을 선택해주세요", "백엔드", "프론트엔드", "풀스택"],
      "직군",
      true
    );
    select("mbti", mbtiValList, mbtiTxtList, "mbti");
    button("submit", "등록");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let nameVal = e.target.name.value;
      let emailVal = e.target.email.value;
      let nicknameVal = e.target.nickname.value;
      let roleVal = e.target.role.value;
      let mbtiVal = e.target.mbti.value;

      const submitInfo = {
        name: nameVal,
        email: emailVal,
        nickname: nicknameVal,
        role: roleVal,
        mbti: mbtiVal,
      };
      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
      personalInfo.push(submitInfo);
      localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    });
  }
}
