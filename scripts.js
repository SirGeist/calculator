// Functions to add, subtract, multiply, and divide
let getNum1 = "0";
let getNum2 = "";
let getOperator = "";
let result = "";

// Flag checks whether the num1 needs to change after a calculation has occurred
let flag = 0;

const display = document.querySelector(".display");

const updateDisplay = () => {
  let displayText = "";
  if (getOperator) {
    if (getNum2 == "0") {
      displayText = getNum1 + getOperator + getNum2;
    }
    displayText = getNum1 + getOperator + getNum2;
  } else {
    displayText = getNum1 || "0"; // Display getNum1 or "0" if getNum1 is empty
  }
  display.textContent = displayText;
};

let calc = (num1, num2, operator) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let total;
  switch (operator) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "X":
      total = num1 * num2;
      break;
    case "÷":
      total = num1 / num2;
      break;
    default:
      return "ERROR";
  }

  return total % 1 !== 0 ? total.toFixed(2) : total.toFixed(0);
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
      getNum2 += btnText;
    } else {
      if (getNum1 === "0" || flag) {
        getNum1 = btnText; // Replace "0" with the new number
        flag = 0;
      } else {
        getNum1 += btnText; // Append the new number
      }
    }
  } else if (btnText === ".") {
    // Handling decimal point
    if (!getOperator && !getNum2.includes(".") && !getNum1.includes(".")) {
      getNum1 = ".";
    } else if (getOperator && !getNum2.includes(".")) {
      getNum2 += btnText;
    } else if (!getOperator && !getNum1.includes(".")) {
      getNum1 += btnText;
    }
  } else if (["+", "-", "X", "÷"].includes(btnText)) {
    // If we have num1 but no operator, assign that operator
    if (getNum1 && !getOperator) {
      getOperator = btnText;
    } else if (getNum1 && getNum2) {
      // If we get here, we should have all of the components to do math
      result = calc(getNum1, getNum2, getOperator);
      getNum1 = result.toString(); // Convert the result back to string for further operations
      getNum2 = "";
      getOperator = btnText;
      flag = 1;
    }
  } else if (btnText === "=" && getNum1 && getNum2 && getOperator) {
    // Same idea for operators but we do not append that another operator at the end
    // If the button is "="
    result = calc(getNum1, getNum2, getOperator);
    getNum1 = result.toString();
    getNum2 = "";
    getOperator = "";
    flag = 1;
  } else if (btnText === "+/-") {
    // Multiply the number by -1 to make it positive/negative
    if (getNum1 && !getOperator) {
      getNum1 = (parseFloat(getNum1) * -1).toString();
    } else if (getNum2 && getOperator) {
      getNum2 = (parseFloat(getNum2) * -1).toString();
    }
  } else if (btnText === "%") {
    if (getNum1 && !getOperator) {
      getNum1 = (parseFloat(getNum1) * 0.01).toString();
    } else if (getNum2 && getOperator) {
      getNum2 = (parseFloat(getNum2) * 0.01).toString();
    }
  } else if (btnText === "C") {
    // Clear button
    getNum1 = "";
    getNum2 = "";
    getOperator = "";
    result = "";
    flag = 0;
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
