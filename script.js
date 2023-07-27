let firstNumber = "";
let operator = "";
let secondNumber = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

function updateDisplay(value) {
  document.querySelector(".display").textContent = value;
}

function roundNumber(number) {
  return Math.round(number * 1000) / 1000;
}

function clearCalculator() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  updateDisplay("0");
}

document.querySelectorAll(".number").forEach(button => {
  button.addEventListener("click", function () {
    if (!operator) {
      firstNumber += this.textContent;
      updateDisplay(firstNumber);
    } else {
      secondNumber += this.textContent;
      updateDisplay(secondNumber);
    }
  });
});

document.querySelectorAll(".operator").forEach(button => {
  button.addEventListener("click", function () {
    if (firstNumber && operator && secondNumber) {
      const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
      firstNumber = roundNumber(result).toString();
      updateDisplay(firstNumber);
      operator = "";
      secondNumber = "";
    }
    operator = this.textContent;
  });
});

document.querySelector(".equals").addEventListener("click", function () {
  if (firstNumber && operator && secondNumber) {
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    firstNumber = roundNumber(result).toString();
    updateDisplay(firstNumber);
    operator = "";
    secondNumber = "";
  }
});

document.querySelector(".clear").addEventListener("click", clearCalculator);
