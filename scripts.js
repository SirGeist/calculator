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
for (let i = 0; i < 19; i++) {
  const btn = document.createElement("button");
  btn.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; padding: 40px;"
  );
  btn.textContent = i;

  // Last button is supposed to be the equal sign
  if (i === 18) {
    btn.textContent = "=";
    btn.style.width = "calc(50% - 20px)";
    btn.style.height = "calc(20% - 10px)";
    btn.style.marginLeft = "5px";
    btn.setAttribute("colspan", "2");
  }
  fragment.appendChild(btn);
}

calcContainer.appendChild(fragment);
