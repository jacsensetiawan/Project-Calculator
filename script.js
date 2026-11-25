const add = function(a, b) {
    let c = a + b;
    return c;
};

const subtract = function(a, b) {
    let c = a - b;
    return c;
};

const multiply = function(a, b) {
    let c = a * b;
    return c;
};

const divide = function(a, b) {
    let c = a / b;
    return c;
};

let firstNumber = null;
let operator = "";
let secondNumber = null;

const operate = function(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } 
};

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display p");
let currentNumber = "";
let isCalculated = false;

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(isCalculated === true){
            currentNumber = "";
            isCalculated = false;
        }
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        firstNumber = currentNumber;
        currentNumber = "";
        operator = button.textContent;
    });
});

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    if (currentNumber === "" || operator === "") {
        return;
    };

    if (currentNumber === "0" && operator === "/") {
        return display.textContent = "ERROR";
    }

    secondNumber = currentNumber;
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.textContent = result;
    isCalculated = true;
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    currentNumber = "";
    operator ="";
    firstNumber = null;
    secondNumber = null;
    isCalculated = false;
    display.textContent = "";
});