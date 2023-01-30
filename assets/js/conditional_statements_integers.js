// Assignment (Conditional Statements & Loops) "Two Intgers":
function findResult() {
let num1 = parseInt(prompt("Please, enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

    // Validates if the user inputs a valid number or if the number length is not over 8 characters
    while (isNaN(num1) || num1.toString().length > 8 || isNaN(num2) || num2.toString().length > 8) {
        let errorMessage = "Please enter valid numbers";
        if (isNaN(num1)) {
            errorMessage = "First number is not a valid number";
        } else if (num1.toString().length > 8) {
            errorMessage = "First number should have 8 digits or less";
        } else if (isNaN(num2)) {
            errorMessage = "Second number is not a valid number";
        } else if (num2.toString().length > 8) {
            errorMessage = "Second number should have 8 digits or less";
        }
        alert(errorMessage);
        num1 = parseInt(prompt("Enter first number:"));
        num2 = parseInt(prompt("Enter second number:"));
    }
        
    // Compare the numbers and displays a message saying which number is the larger or if they are both the same
    if (num1 > num2) {
        document.getElementById("output").innerHTML = (`The number <p class="green">${num1}</p> is larger than <p class="red">${num2}</p>`);
    } else if (num1 < num2) {
        document.getElementById("output").innerHTML = (`The number <p class="green">${num2}</p> is larger than <p class="red">${num1}</p>`);
    } else {
        document.getElementById("output").innerHTML = (`Both numbers are equal! <p class="green">${num2}</p>`);
    }
}