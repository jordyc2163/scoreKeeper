const selector = document.querySelector('#dropdown')
const reset = document.querySelector('#resetButton')
const h1 = document.querySelector('#score')
const footer = document.querySelector('.card-footer')


for (let i = 1; i <= 50; i++) {
    const option = document.createElement('option');
    option.append(i)
    selector.append(option)
}

// creating player Objects
const playerOne = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}
const playerTwo = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}




// reset score function
const resetFunc = () => {
    for(let p of [playerOne, playerTwo]){
        p.score = 0
        p.display.innerText = p.score
        p.display.classList.remove('winner', 'loser')
        p.button.disabled = false
    }
}

// style disabler function

const disableButtons = (player, opponent) => {
    player.button.disabled = true
    opponent.button.disabled = true
    // Bulma built in features
}

// score updater function
const updateScore = (player, opponent) => {
    player.score += 1
    player.display.innerText = player.score
    opponent.display.innerText = opponent.score
    if(player.score === parseInt(selector.value)){
        player.display.classList.add('winner')
        opponent.display.classList.add('loser')
        disableButtons(player, opponent)
    }
}


playerOne.display.innerText = playerOne.score
playerTwo.display.innerText = playerTwo.score

// Event Listener for adding and resetting score
footer.addEventListener('click', (e) => {
    e.preventDefault()

    if (playerOne.score !== parseInt(selector.value) && playerTwo.score !== parseInt(selector.value)) {
        if (e.target === playerOne.button) {
            updateScore(playerOne, playerTwo)
        }
        else if (e.target === playerTwo.button) {
            updateScore(playerTwo, playerOne)
        }
    }

    
    if (e.target === reset) {
        resetFunc()
    }
})

selector.addEventListener('change', (e) => {
    resetFunc()
})

