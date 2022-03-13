function computerPlay() {
    let list = ['Rock','Paper','Scissors'];
    let randomSelection = list[Math.floor(Math.random() * list.length)];
    alert("Computer's choice: " + randomSelection);
    return randomSelection;
    
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "The result was a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors beats Paper!";
    } else {
        return "Incorrect input";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Your choice?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    alert("Your score is " + playerScore + " and the computer's score is " + computerScore);
    if (playerScore > computerScore) {
        alert("You won this game!")
    } else if (computerScore > playerScore) {
        alert("Computer won this game!")
    } else if (computerScore === playerScore) {
        alert("There is no winner, try again!")
    }
}

game();
