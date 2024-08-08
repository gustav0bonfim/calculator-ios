let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function inputValue(value) {
    if (value === '+/-') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
        return;
    }
    if (value === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
        return;
    }
    if (operator && previousInput && !currentInput) {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}

function calculateResult() {
    if (!operator || !previousInput || !currentInput) return;
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}

function inputValue(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput) {
            if (previousInput) {
                calculateResult();
            } else {
                previousInput = currentInput;
                currentInput = '';
            }
        }
        operator = value;
    } else {
        if (operator && !currentInput) {
            currentInput = value;
        } else {
            currentInput += value;
        }
    }
    updateDisplay();
}
