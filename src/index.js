
const clickInput = () => {
  const inputText = document.getElementById("addText").value;
  alert(inputText);
};

document
  .getElementById("inputButton")
  .addEventListener("click", () => clickInput());
