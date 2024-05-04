export const setPersonalInfo = async () => {
  const response = await fetch("./src/data/new_data.json");
  const data = await response.json();

  const arrString = JSON.stringify(data);

  if (!localStorage.getItem("personalInfo")) {
    localStorage.setItem("personalInfo", arrString);
  }
};

export const setCardStatus = () => {
  if (!localStorage.getItem("cardStatus")) {
    localStorage.setItem("cardStatus", JSON.stringify([]));
  }
};
