// Get elements from the DOM
const COMPUTER_CHOICE = document.getElementById('computer-choice');
const USER_CHOICE = document.getElementById('user-choice');
const ROUND_RESULT = document.getElementById('result');
const AVAILABLE_CHOICES = document.querySelectorAll('button');
const PLAYER_SCORE = document.getElementById("player-score")
const COMPUTER_SCORE = document.getElementById("computer-score")
const FINAL_RESULT = document.getElementById("final-result");
const RESTART_GAME = document.getElementById("restart-game");

// Initialize variables for user and computer choices and scores
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

// Event listener to restart the game
RESTART_GAME.addEventListener("click", function() {
  playerScore = 0;
  computerScore = 0;
  PLAYER_SCORE.innerHTML = 0;
  COMPUTER_SCORE.innerHTML = 0;
  FINAL_RESULT.innerHTML = "Let´s play again!"
  USER_CHOICE.innerHTML = "";
  COMPUTER_CHOICE.innerHTML = "";
  ROUND_RESULT.innerHTML = "";
})

// Function to interact with the player based on their score
function interactWithPlayer() {
  if (playerScore >= 6 && computerScore <=4) {
    FINAL_RESULT.innerHTML = `<span class="green"> You are doing well! </span>`;
    return;
  } else if (computerScore >=6 && playerScore <=4) {
    FINAL_RESULT.innerHTML = `<span class="red"> You need to do better!! </span>`;
    return;
  }
}  

// Event listener for each of the available choices
AVAILABLE_CHOICES.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  if (playerScore >= 10) {
    FINAL_RESULT.innerHTML = `Game over! <span class="green"> You Win!</span> Player: ${playerScore} - Computer:  ${computerScore}`;
    return;
  } else if (computerScore >= 10){
    FINAL_RESULT.innerHTML = `Game over! <span class="red"> You Lose!</span> Player: ${playerScore} - Computer: ${computerScore}`;
    return;
  }
  
  userChoice = e.target.id;
  USER_CHOICE.innerHTML = userChoice.toUpperCase();
  generateComputerChoice();
  getResult();
  updateScores();
  interactWithPlayer();
}));

// Function to generate a random computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
 }
   COMPUTER_CHOICE.innerHTML =  computerChoice.toUpperCase();
}

// Function to compare choose in between player and computer
function getResult() {
  switch (computerChoice + userChoice) {
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      result = `<span class="green"> You Win!! </span>`;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      result = `<span class="yellow"> It's a draw! </span>`;
      break;
    default:
      result = `<span class="red"> You Lose!! </span>`;
  }
  ROUND_RESULT.innerHTML = result;
}


// Function to update the player and computer scores
function updateScores() {
  switch (result) {
    case `<span class="green"> You Win!! </span>`:
      playerScore++;
      PLAYER_SCORE.innerHTML = playerScore;
      break;
    case `<span class="red"> You Lose!! </span>`:
      computerScore++;
      COMPUTER_SCORE.innerHTML = computerScore;
      break;
  }
}



