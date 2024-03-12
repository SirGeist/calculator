// Functions to add, subtract, multiply, and divide
let getNum1 = "0";
let getNum2 = "0";
let getOperator = "";
let result = "";

const display = document.querySelector(".display");

const updateDisplay = () => {
  display.textContent =
    parseFloat(getNum2) || parseFloat(getNum1) || parseFloat("0"); // Display getNum2 if available, then getNum1, or 0
};

let calc = (num1, num2, operator) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
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
      return "ERROR";
  }
};

// Creating an array of symbols to iterate over later
const buttonLabels = [
  "C",
  "+/-",
  "%",
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

const handleButtonClick = (btnText) => {
  if (!isNaN(parseFloat(btnText))) {
    // If the button text is a number
    if (getOperator) {
      if (getNum2 === 0) {
        getNum2 = btnText; // Replace "0" with the new number
      } else {
        getNum2 += btnText; // Append the new number
      }
    } else {
      if (getNum1 === 0) {
        getNum1 = btnText; // Replace "0" with the new number
      } else {
        getNum1 += btnText; // Append the new number
      }
    }
  } else if (btnText === ".") {
    // Handling decimal point
    if (getOperator && !getNum2.includes(".")) {
      getNum2 += btnText;
    } else if (!getOperator && !getNum1.includes(".")) {
      getNum1 += btnText;
    }
  } else if (["+", "-", "X", "/"].includes(btnText)) {
    // If the button is an operator
    if (getNum1 && !getOperator) {
      getOperator = btnText;
    } else if (getNum1 && getNum2) {
      result = calc(getNum1, getNum2, getOperator);
      getNum1 = result.toString(); // Convert the result back to string for further operations
      getNum2 = "";
      getOperator = btnText;
    }
  } else if (btnText === "=" && getNum1 && getNum2 && getOperator) {
    // If the button is "="
    result = calc(getNum1, getNum2, getOperator);
    getNum1 = result.toString();
    getNum2 = "";
    getOperator = "";
  } else if (btnText === "C") {
    // Clear button
    getNum1 = "";
    getNum2 = "";
    getOperator = "";
    result = "";
  }
  updateDisplay(); // Update the display after every button click
};

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

  btn.addEventListener("click", () => {
    handleButtonClick(btn.textContent);
  });

  fragment.appendChild(btn);
}

// Styling the equals button
const equalsButton = fragment.querySelector("button:nth-child(19)");
equalsButton.style.width = "calc(50% - 20px)";
equalsButton.style.height = "calc(20% - 10px)";
equalsButton.style.marginLeft = "5px";
updateDisplay();
calcContainer.appendChild(fragment);
