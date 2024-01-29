let displayValue = '0';
let firstNumber = null;
let operator = null;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
  }
  updateDisplay();
}

function appendOperator(selectedOperator) {
  if (operator !== null) {
    calculate();
  }
  firstNumber = parseFloat(displayValue);
  operator = selectedOperator;
  displayValue = '0';
}

function calculate() {
  const secondNumber = parseFloat(displayValue);
  if (operator !== null) {
    switch (operator) {
      case '+':
        displayValue = (firstNumber + secondNumber).toString();
        break;
      case '-':
        displayValue = (firstNumber - secondNumber).toString();
        break;
      case '*':
        displayValue = (firstNumber * secondNumber).toString();
        break;
      case '/':
        if (secondNumber === 0) {
          displayValue = "Error: Cannot divide by zero";
        } else {
          displayValue = (firstNumber / secondNumber).toString();
        }
        break;
      default:
        break;
    }
    firstNumber = parseFloat(displayValue);
    operator = null;
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '0';
  firstNumber = null;
  operator = null;
  updateDisplay();
}

updateDisplay();
