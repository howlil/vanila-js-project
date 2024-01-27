// Variables to store inputs and operation
let currentInput = '';
let previousInput = '';
let operation = null;

// Function to append a value to the display
function appendToDisplay(value) {
    if (value === 'hapus') {
        clearDisplay();
    } else if (value === '=') {
        calculate();
    } else if (['+', '-', 'x', '/', '%'].includes(value)) {
        setOperation(value);
    } else {
        currentInput += value;
    }
    updateDisplay();
}

// Update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${previousInput} ${operation || ''} ${currentInput}`.trim();
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Set the operation
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Perform calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Division by zero is not allowed");
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
}

// Call this function when the page loads
updateDisplay();



//dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeButton');
    const icon = darkModeButton.querySelector('i');

    body.classList.toggle('dark-mode');

    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Switch to sun icon
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Switch back to moon icon
    }
}


