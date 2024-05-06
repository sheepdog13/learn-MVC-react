export const input = (type, id, text) => {
  const span = document.createElement("span");
  span.setAttribute("class", "form_elem");

  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("placeholder", text);
  span.appendChild(input);
  document.getElementById("grepp_form").appendChild(span);
};
