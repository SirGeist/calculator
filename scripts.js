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

// Creating an array of symbols to iterate over later
const buttonLabels = [
  "CE",
  "C",
  "+/-",
  "÷",
  "7",
  "8",
  "9",
  "X",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

// Main container
const calcContainer = document.querySelector(".btn-container");
const fragment = document.createDocumentFragment();

// Iterating through each label
for (let label of buttonLabels) {
  const btn = document.createElement("button");
  btn.textContent = label;
  btn.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; padding: 20px; border-radius: 15px; border-color: #343434; border-width: 5px; font-size: 30px; font-weight: bold"
  );

  fragment.appendChild(btn);
}

// Styling the equals button
const equalsButton = fragment.querySelector("button:nth-child(19)");
equalsButton.style.width = "calc(50% - 20px)";
equalsButton.style.height = "calc(20% - 10px)";
equalsButton.style.marginLeft = "5px";

calcContainer.appendChild(fragment);
