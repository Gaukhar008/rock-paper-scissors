function computerPlay() {
    let list = ['rock','paper','scissors'];
    let randomSelection = list[Math.floor(Math.random() * list.length)];
    return randomSelection;
    
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    result = "";

    if (playerSelection === computerSelection) {
        result = ("The result was a tie!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        result = ("You Lose! Paper beats Rock" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result = ("You Win! Paper beats Rock!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        result = ("You Lose! Rock beats Scissors!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result = ("You Win! Rock beats Scissors!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        result = ("You Lose! Scissors beats Paper!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result = ("You Win! Scissors beats Paper!" + "<br><br>Player's score: " + playerScore + "<br>Computer score: " + computerScore);
    }

    if(playerScore == 5) {
        result += "<br><br>You won the game! Reload the page to play again!";
        disableButtons();
    } else if(computerScore == 5) {
        result += "<br><br>Computer won the game! Reload the page to play again!";
        disableButtons();
    }

    document.getElementById('result').innerHTML = result
    return
}

const buttons = document.querySelectorAll('#input');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    });
})

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

