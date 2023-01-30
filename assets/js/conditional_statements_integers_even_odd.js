// Assignment (Conditional Statements & Loops) "Even/Odd":
function findResult() {
    let num1 = parseInt(prompt("Please, enter a number:"));
    
        // Validates if the user inputs a valid number or if the number length is not over 10 characters
        while (isNaN(num1) || num1.toString().length > 10) {
            if (isNaN(num1)) {
                alert("Please enter valid number");
        }  else {
                alert("Keep the number length to 10 digits or less");
        }
        num1 = parseInt(prompt("Enter a number:"));
        }
         
        // Checks if there is a remainder when the number is divided by 2
        if (num1 % 2 === 0) {
            document.getElementById("output").innerHTML = (`The number <p class="green">${num1}</p> is even`);
        } else {
            document.getElementById("output").innerHTML = (`The number <p class="green">${num1}</p> is odd`);
        } 

}
    