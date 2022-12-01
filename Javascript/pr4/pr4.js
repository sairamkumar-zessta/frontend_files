let userInput = document.getElementById('userInput')
let req = Math.round(Math.random()*100)
let gameResult = document.getElementById("gameResult")
function checkGuess(){
    let num = parseInt(userInput.value)
    console.log(num)
    console.log(req)
    if (num > req) {
        gameResult.textContent = "Guessing number greater than required"

    }

    else if (num < req){

        gameResult.textContent = "Guessing number less than required"

    }

    else if (num == req){
        gameResult.textContent = "You won the game congrats!!!"
    }
}