let currentNumber = "0";
let previousNumber = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

function updateDisplay() {
    currentDisplay.textContent = currentNumber;
    previousDisplay.textContent =
        operator ? `${previousNumber} ${operator}` : "";
}

function appendNumber(number) {

    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (currentNumber === "0" && number !== ".") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

    updateDisplay();
}

function chooseOperator(selectedOperator) {

    if (operator !== null) {
        calculate();
    }

    previousNumber = currentNumber;
    currentNumber = "0";
    operator = selectedOperator;

    updateDisplay();
}

function calculate() {

    if (operator === null || previousNumber === "") {
        return;
    }

    const first = parseFloat(previousNumber);
    const second = parseFloat(currentNumber);

    let result;

    switch (operator) {

        case "+":
            result = first + second;
            break;

        case "-":
            result = first - second;
            break;

        case "*":
            result = first * second;
            break;

        case "/":
            if (second === 0) {
                currentNumber = "Error";
                previousNumber = "";
                operator = null;
                updateDisplay();
                return;
            }
            result = first / second;
            break;
    }

    currentNumber = String(result);
    previousNumber = "";
    operator = null;

    updateDisplay();
}

function clearDisplay() {

    currentNumber = "0";
    previousNumber = "";
    operator = null;

    updateDisplay();
}

function deleteNumber() {

    if (currentNumber.length === 1) {
        currentNumber = "0";
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }

    updateDisplay();
}

function percentage() {

    currentNumber = String(parseFloat(currentNumber) / 100);

    updateDisplay();
}
