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

let firstNumber = 3;
let operator = "+";
let secondNumber = 5;

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