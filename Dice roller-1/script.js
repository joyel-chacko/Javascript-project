
function roleDice() {

    const numOfDice = document.getElementById("numOfDice").value
    const diceResult = document.getElementById("diceResult")
    const diceImage = document.getElementById("diceImage")
    const values = []
    const images = []


    for (let i = 0; i < numOfDice; i++) {

        let randomNum = Math.floor(Math.random() * 6 ) + 1
        values.push(randomNum)
        diceResult.textContent = "Dice:"+ values

        images.push(`<img src="Dice_images/${randomNum}.png">`)
        diceImage.innerHTML = images
    }

}