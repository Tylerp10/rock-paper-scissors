const buttons = document.querySelectorAll(".buttons")
const playerText = document.querySelector(".pChoice")
const compText = document.querySelector(".compChoice")
const resultText = document.querySelector(".result")
const playerScoreText = document.querySelector(".playerScore")
const compScoreText = document.querySelector(".compScore")
const reset = document.querySelector(".reset")

const choices = ["Rock", "Paper", "Scissors"]

let player;
let computer;
let result;
let computerScore = 0;
let playerScore = 0;



buttons.forEach(button => {
     button.addEventListener("click", ()=>{
        player = button.textContent
        compSelection();
        playerText.textContent = "Player Chose: " + player;
        compText.textContent = "Computer Chose: " + computer;
        resultText.textContent = "Results: " + checkWinner();
        playerScoreText.textContent = "Player Score: " + pScoreUpdate()
        compScoreText.textContent = "Computer Score: " + cScoreUpdate()
    })
})

reset.addEventListener("click", ()=>{
    playerText.textContent = "Player Chose: " 
    compText.textContent = "Computer Chose: " 
    resultText.textContent = "Results: " 
    computerScore = 0
    playerScore = 0
    playerScoreText.textContent = "Player Score: 0" 
    compScoreText.textContent = "Computer Score: 0" 
})

function compSelection(){
    let randNum = Math.floor(Math.random() * 3)
    computer = choices[randNum]
}

function checkWinner() {
    if(player == computer){
        return "It's a Draw!"
    } else if (player == "Rock" && computer == "Scissors" ||player == "Paper" && computer == "Rock" || player == "Scissors" && computer == "Paper") {
        return "Player Wins!"
    } else 
        return "Computer Wins :("
}

function pScoreUpdate() {
    if (resultText.textContent === "Results: Player Wins!") {
        playerScore += 1
        return playerScore
    } else {
        return playerScore
    } 
}

function cScoreUpdate() {
    if (resultText.textContent === "Results: Computer Wins :(") {
        computerScore += 1
        return computerScore
    } else {
        return computerScore
    } 
}