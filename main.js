let options = ['rock', 'paper', 'scissor'];
let computerSelection = computerPlay();
let playerChoice = prompt("Please, enter your selection", "a");

function computerPlay() {
   let rand = Math.floor(Math.random() * (options.length));
   return options[rand];
}


let playerSelection = playerChoice.toLowerCase();  


function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection){
      alert("It is a draw")
   } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
      alert(`You win, ${playerSelection} beats ${computerSelection}`)
   } else {
      alert(`You lose, ${computerSelection} beats ${playerSelection}`)
   }
}

playRound(playerSelection, computerSelection);