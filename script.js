let displayValue = '';
let operator = '';
let previousValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

function chooseOperator(op) {
    if (displayValue === '') return;
    if (previousValue !== '') {
        calculate();
    }
    operator = op;
    previousValue = displayValue;
    displayValue = '';
}

function calculate() {
    if (operator === '' || displayValue === '') return;

    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);

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
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
