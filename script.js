const add = function(a, b) {
    c = a + b;
    return c;
};

const subtract = function(a, b) {
    c = a - b;
    return c;
};

const multiply = function(a, b) {
    c = a * b;
    return c;
};

const divide = function(a, b) {
    c = a / b;
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

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {

    });
});