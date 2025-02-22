let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstNumber = null;

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(op) {
    firstNumber = parseFloat(display.innerText);
    operator = op;
    display.innerText = "";
}

function clearDisplay() {
    display.innerText = "0";
    currentInput = "";
    operator = null;
    firstNumber = null;
}

function calculateResult() {
    let secondNumber = parseFloat(display.innerText);
    let result = 0;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    }

    display.innerText = result;
    firstNumber = result;
}