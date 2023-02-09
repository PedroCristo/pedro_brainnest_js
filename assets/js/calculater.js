// Get the DOM elements with ID
const DISPLAY_VALUE = document.getElementById('output-value');
const HISTORY_VALUE = document.getElementById('history-value');

// Get all button elements
const KEY_BUTTONS = document.querySelectorAll('button');

// Function to add two numbers
const OPERATOR_ADD = (a, b) => a + b;

// Function to subtract two numbers
const OPERATOR_SUBTRACT = (a, b) => a - b;

// Function to multiply two numbers
const OPERATOR_MULTIPLY = (a, b) => a * b;

// Function to divide two numbers
const OPERATOR_DEVIDE = (a, b) => a / b;

// Variables to store the first number, operator and calculation history
let firstNumber = null;
let operator = null;
let calculation = [];

// Function to perform operations based on the operator
const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return OPERATOR_ADD(a, b);
    case "-":
      return OPERATOR_SUBTRACT(a, b);
    case "*":
      return OPERATOR_MULTIPLY(a, b);
    case "/":
      return OPERATOR_DEVIDE(a, b);
  } 
};

// Loop through all the buttons and add event listener for click
KEY_BUTTONS.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Get the inner text of the clicked button
    const value = event.target.innerText;
      // If the button text is 'C', reset all values
      if (value === "C") {
        firstNumber = null;
        operator = null;
        calculation = [];
        DISPLAY_VALUE.innerText = "0";
        HISTORY_VALUE.innerText = " ";
        return;
    }
      // If the button text is 'CE', reset the display value
      else if (value === "CE") {
        DISPLAY_VALUE.innerText = "0";
        return;
    }
      // If the button text is '%', calculate the percentage of the history value
      else if (value === "%") {
        DISPLAY_VALUE.innerText = (parseFloat(HISTORY_VALUE.innerText).toFixed(1) / 100) + "%";
        return;
    }
      // If the button text is an operator, store the operator and first number
      else if (value === "+" || value === "-" || value === "*" || value === "/") {
        operator = value;
        firstNumber = parseFloat(DISPLAY_VALUE.innerText);
        calculation.push(firstNumber, operator);
        HISTORY_VALUE.innerText = calculation.join(' ');
        DISPLAY_VALUE.innerText = "0";
        return;
    } 
      // If the button text is '=', perform the operation and display the result
      else if (value === "=") {
        // Return if either first number or operator is not set
        if (!firstNumber || !operator) return;
        
        // Store the value of the second number entered by the user
        const secondNumber = parseFloat(DISPLAY_VALUE.innerText);
        calculation.push(secondNumber);
        HISTORY_VALUE.innerText = calculation.join(" ");
        
        // Use the operate function to perform the calculation
        const result = operate(operator, firstNumber, secondNumber);

        DISPLAY_VALUE.innerText = result.toFixed(1);
        firstNumber = result;
        operator = null;
        calculation = [];
        return;
    }     
      // Prevent entering more than 16 numbers
      else if (DISPLAY_VALUE.innerText.length >= 16) {
        alert("Sorry, but you can't add more than 16 numbers!");
      return;
    } 
      // If the button text is ".", add it to the display value if it does not already contain a decimal point
      else if (value === ".") {
        if (!DISPLAY_VALUE.innerText.includes(".")) {
          DISPLAY_VALUE.innerText += value;
        }
        return;
    }
      // If the display value is '0', replace it with the value of the clicked button
      else if (DISPLAY_VALUE.innerText === "0" || DISPLAY_VALUE.innerText === "." ) {
        DISPLAY_VALUE.innerText = value;
    } 
      // If the display value is not '0', concatenate the value of the clicked button to the display value
      else {
        DISPLAY_VALUE.innerText += value;
    }
  });
});
        
