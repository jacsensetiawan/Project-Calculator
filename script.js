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
            firstNumber = null;
            operator = "";
            secondNumber = null;
            isCalculated = false;
        }
        currentNumber += button.textContent;
        display.textContent = currentNumber;
    });
});

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber !== null && operator !== "" && currentNumber !== "") {
            secondNumber = currentNumber;

              if (Number(currentNumber) === 0 && operator === "/") {
                firstNumber = null;
                operator = "";
                secondNumber = null;
                currentNumber = "";
                isCalculated = false;
                return display.textContent = "ERROR";
            }

            const result = operate(operator, Number(firstNumber), Number(secondNumber));
            const roundedResult = Number(result.toFixed(2));
            display.textContent = roundedResult;
            firstNumber = roundedResult;
        } else if(firstNumber === null && currentNumber !== "") {
            firstNumber = currentNumber;
        }
        
        currentNumber = "";
        operator = button.textContent;
        isCalculated = false;
    });
});

const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
    if (currentNumber === "" || operator === "" || firstNumber === null) {
        return;
    };

    if (Number(currentNumber) === 0 && operator === "/") {
        firstNumber = null;
        operator = "";
        secondNumber = null;
        currentNumber = "";
        isCalculated = false;
        return display.textContent = "ERROR";
    }

    secondNumber = currentNumber;
    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    const roundedResult = Number(result.toFixed(2));
    display.textContent = roundedResult;
    isCalculated = true;
    firstNumber = roundedResult;
    currentNumber = "";
    
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