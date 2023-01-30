// Assignment (Conditional Statements & Loops) "Two Intgers":
function findResult() {
let num1 = parseInt(prompt("Please, enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

    // Validates if the user inputs a valid number
    while (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        num1 = parseInt(prompt("Enter first number:"));
        num2 = parseInt(prompt("Enter second number:"));
    }
    
    // Compare the numbers and displays a message saying which number is the larger or if they are both the same
    if (num1 > num2) {
        document.getElementById("output").innerHTML = (`The number <p class="green">${num1}</p> is larger than <p class="red">${num2}</p>`);
    } else if (num1 < num2) {
        document.getElementById("output").innerHTML = (`The number <p class="green">${num2}</p> is larger than <p class="red">${num1}</p>`);
    } else {
        document.getElementById("output").innerHTML = (`Both numbers are equal! <p class="green">(${num2})`);
    }
}