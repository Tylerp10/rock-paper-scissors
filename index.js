const choices = ['rock', 'paper', 'scissors'];

function game() {
    for (let i = 1; i < 6; i++) {
        playRound(i);
    }
}

function playRound(round){
    const compSelection = compChoice();
    const playerSelection = playerChoice();
    const winner = checkWinner(playerSelection, compSelection);
    logRound(compSelection, playerSelection, winner, round);
}


function compChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice() {
    let input = prompt('Select Rock, Paper, or Scissors')
    input = input.toLowerCase();
    return input;
}

function checkWinner(choiceP, choiceC) {
    if (choiceC === choiceP) {
        return "It's a Tie";
    } else if (
        (choiceC === 'rock' && choiceP === 'paper') || 
        (choiceC === 'paper' && choiceP === 'scissors') || 
        (choiceC === 'scissors' && choiceP === 'rock')
    ) {
        return "Player Wins!"
      } else {
        return "Computer Wins"
    }
}


function logRound(compChoice, playerChoice, checkWinner, round){
    console.log('Round:', round);
    console.log('Computer Selected:', compChoice);
    console.log('Player Seleced:', playerChoice);
    console.log(checkWinner);
    console.log('-------------------------------------------------')
}


game();