
let messageEl = document.getElementById('message-el')
console.log(messageEl)


let firstCard = 10;
let secondCard = 10;

let sum = firstCard + secondCard
let message = ""

let hasBlackJack = false

let isAlive = true

let cardEl = document.getElementById("card-el")

let sumEl = document.querySelector("#sum-el")



function renderGame() {

        sumEl.textContent = "Sum:" + sum

        cardEl.textContent = "Cards:"+ firstCard+","+secondCard

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {

        message = "You've got Blackjack!"
        hasBlackJack = true
        
    }
    else {
        message = "You're out of game "
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
    let display = "Drawing a new card from the deck"

    messageEl.textContent = display

    let cardElemnt = 2

    sum = firstCard + secondCard + cardElemnt

    renderGame()
}