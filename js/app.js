const selector = document.querySelector('#dropdown')

for (let i = 1; i <= 50; i++) {
    const option = document.createElement('option');
    option.append(i)
    selector.append(option)
}

const playerOne = document.querySelector('#p1Button')
const playerTwo = document.querySelector('#p2Button')
const reset = document.querySelector('#resetButton')

const p1Display = document.querySelector('#p1Score')
const p2Display = document.querySelector('#p2Score')
const h1 = document.querySelector('#score')


const footer = document.querySelector('.card-footer')






let score1 = 0
let score2 = 0
p1Display.innerText = `${score1}`
p2Display.innerText = `${score2}`

// reset score function
const resetFunc = () => {
    score1 = 0
    score2 = 0
    p1Display.innerText = `${score1}`
    p2Display.innerText = `${score2}`
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
    playerOne.disabled = false
    playerTwo.disabled = false
}

// style disabler function

const disableButtons = () => {
    playerOne.disabled = true
    playerTwo.disabled = true
    // Bulma built in features
}

// Event Listener for adding and resetting score
footer.addEventListener('click', (e) => {
    e.preventDefault()

    if (score1 !== parseInt(selector.value) && score2 !== parseInt(selector.value)) {
        if (e.target === playerOne) {
            score1 += 1
        }
        else if (e.target === playerTwo) {
            score2 += 1
        }
    }

    
    if (e.target === reset) {
        resetFunc()
    }

    p1Display.innerText = `${score1}`
    p2Display.innerText = `${score2}`

    if(score1 === parseInt(selector.value)){
        p1Display.classList.add('winner')
        p2Display.classList.add('loser')
        disableButtons()

    }
    else if(score2 === parseInt(selector.value)){
        p2Display.classList.add('winner')
        p1Display.classList.add('loser')
        disableButtons()
    }
    
})

selector.addEventListener('change', (e) => {
    resetFunc()
})

