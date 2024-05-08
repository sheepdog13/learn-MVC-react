import { on, qs } from "../helpers.js";
import View from "./View.js";

export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
    this.bindEvent();
  }
  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    this.on("submit", (e) => this.handleSubmit(e));
    on(this.resetElement, "click", () => this.handleReset());
  }
  handleKeyup() {
    let { value } = this.inputElement;
    this.showResetButton(value.length > 0);
    if (value.length <= 0) this.handleReset();
  }
  handleSubmit(e) {
    e.preventDefault();
    let { value } = this.inputElement;
    this.emit("@submit", { value });
  }
  handleReset() {
    this.inputElement.value = "";
    this.emit("@reset");
  }
}
