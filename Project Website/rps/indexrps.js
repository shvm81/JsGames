
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') //Lets us use the buttons from HTML in javascript
const computerScoreDisplay = document.getElementById('computer-score')
const playerScoreDisplay = document.getElementById('player1-score')
let userChoice //saves userChoice globally

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber == 1) {
        computerChoice = ' Rock'
    }
    if (randomNumber == 2) {
        computerChoice = ' Paper'
    }
    if (randomNumber == 3) {
        computerChoice = ' Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice)
        result = ' Tie!'

    if (computerChoice === ' Rock' && userChoice === ' Paper')
        result = ' You Win'

    if (computerChoice === ' Rock' && userChoice === ' Scissors')
        result = ' You Lose'

    if (computerChoice === ' Paper' && userChoice === ' Scissors')
        result = ' You Win'

    if (computerChoice === ' Paper' && userChoice === ' Rock')
        result = ' You Lose'

    if (computerChoice === ' Scissors' && userChoice === ' Rock')
        result = ' You Win'

    if (computerChoice === ' Scissors' && userChoice === ' Paper')
        result = ' You Lose'

    resultDisplay.innerHTML = result
}






// function scoreBoard() {
    //     if (result == ' You Win')
    //         computerScoreDisplay += 1
    //     if (result == ' You Lose')
    //     playerScoreDisplayplayerScoreDisplay += 1
    //     if (result == ' Tie!')
    //         computerScoreDisplay += 0
    
    //     console.log(scoreBoard)
    //     playerScoreDisplay += 0
    //     computerScoreDisplay.innerHTML = computerScoreDisplay
    //     playerScoreDisplay.innerHTML = playerScoreDisplay
    // }
    
//e stands for an event. An event can be something the browser does or something a user does. HTML events are "things" that happen to HTML Elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

//e.target.id enables JavaScript to get the id of the button (target) the user presses

//innerHTML displays the text content of the elements, including all spacing and inner HTML tags. In this case it lets us display the id from the buttons as text.

//Types of data: strings, numbers, booleans, undefined, and null.
