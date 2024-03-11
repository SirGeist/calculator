// Functions to add, subtract, multiply, and divide
let calc = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("Error when calculating value");
  }
};

const calcContainer = document.querySelector(".btn-container");
const fragment = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
  const btn = document.createElement("button");
  btn.setAttribute(
    "style",
    "display: flex; justify-content: space-between; height: 20px; align-items: center; padding: 20px;"
  );
  fragment.appendChild(btn);
}

calcContainer.appendChild(fragment);
