let humanScore = 0;
let computerScore = 0;
let gameRound = 1;
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
function getHumanChoice() {
    let humanChoice = prompt('rock paper scissors')
    return humanChoice.toLowerCase()
}
function playRound() {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    console.log(`human picked ${humanChoice}!`)
    console.log(`computer picked ${computerChoice}!`)
    if (computerChoice == humanChoice) {
        gameRound = gameRound + 1
        humanScore = humanScore + 1
        computerScore = computerScore + 1
        console.log(`draw! human picked ${humanChoice}, computer picked ${computerChoice}. it is now round ${gameRound}`)
        return ' '
    } else if (computerChoice == 'rock' && humanChoice == 'scissors' || computerChoice == 'paper' && humanChoice == 'rock' || computerChoice == 'scissors' && humanChoice == 'paper') {
        gameRound = gameRound + 1
        computerScore = computerScore + 1
        console.log(`lost! ${computerChoice} beats ${humanChoice}. it is now round ${gameRound}`)
        return ' '
    } else {
        gameRound = gameRound + 1
        humanScore = humanScore + 1
        console.log(`won! ${humanChoice} beats ${computerChoice}. it is now round ${gameRound}`)
        return ' '
    }
}
function playGame() {
    for (let i = 0; i <= 6; i++) {
    if (gameRound >= 6 && humanScore > computerScore) {
        gameRound = 1;
        return `game over. human won! with a score of ${humanScore}. while the computer has ${computerScore}`
    } else if (gameRound >= 6 && humanScore > computerScore) {
        gameRound = 1;
        return `game over. computer won! with a score of ${humanScore}. while the human has ${computerScore}`
    }
    else {
        console.log(playRound())
    }
}
}