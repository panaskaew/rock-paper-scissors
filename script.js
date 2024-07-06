let humanScore = 0;
let computerScore = 0;
const body = document.querySelector('body')
const matchResult = document.querySelector('.match-result')
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const comScore = document.getElementById('computer-score')
const humScore = document.getElementById('human-score')
const resetButton = document.getElementById('reset')
const winner = document.querySelector('.winner')
comScore.textContent = computerScore
humScore.textContent = humanScore;
winner.textContent = 'whos gonna win?'

rockButton.addEventListener('click',function() {
    playGame('rock');
})
paperButton.addEventListener('click',function() {
    playGame('paper');
})
scissorsButton.addEventListener('click',function() {
    playGame('scissors');
})
resetButton.addEventListener('click', function() {
    resetGame()
})

function playGame(choice) {
    if (humanScore >= 5) {
        // console.log(`ppl win ppl score ${humanScore} com score ${computerScore}`);
        winner.textContent = 'HUMAN WINS'
        resetGame()
    } else if (computerScore >= 5) {
        // console.log(`com win ppl score ${humanScore} com score ${computerScore}`);
        winner.textContent = 'COMPUTER WINS'
        resetGame()
    } else {
        playRound(choice)
        winner.textContent = 'whos gonna win?'
    }
}

function playRound(choice) {
    let humanChoice = choice
    let computerChoice = getComputerChoice()
    // console.log(`human picked ${humanChoice}!`)
    // console.log(`computer picked ${computerChoice}!`)
    if (computerChoice == humanChoice) {
        // console.log(`DRAW! human picked ${humanChoice}, computer picked ${computerChoice}.`)
        matchResult.textContent = `DRAW! human picked ${humanChoice}, computer picked ${computerChoice}.`
        comScore.style.color = 'black'
        humScore.style.color = 'black'
        // console.log(' ');
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'paper' && humanChoice == 'rock' || computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore = computerScore + 1
        // console.log(`LOST! ${computerChoice} beats ${humanChoice}.`)
        comScore.textContent = computerScore
        matchResult.textContent = `LOST! ${computerChoice} beats ${humanChoice}.`
        comScore.style.color = 'green'
        humScore.style.color = 'red'
        // console.log(' ');
    } else {
        humanScore = humanScore + 1
        // console.log(`WON! ${humanChoice} beats ${computerChoice}.`)
        humScore.textContent = humanScore
        matchResult.textContent = `WON! ${humanChoice} beats ${computerChoice}.`
        comScore.style.color = 'red'
        humScore.style.color = 'green'
        // console.log(' ');
    }

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice <= 0.33333) {
        return 'rock'
    } else if (computerChoice <= 0.66666) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

}
function resetGame() {
    humanScore = 0;
    computerScore = 0;

    comScore.textContent = computerScore
    humScore.textContent = humanScore
    comScore.style.color = 'black'
    humScore.style.color = 'black'
    matchResult.textContent = 'Match has been reset'
}