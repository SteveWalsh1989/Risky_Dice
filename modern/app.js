'use strict';


// Main elements 
const p0_El = document.querySelector('.player0')
const p1_El = document.querySelector('.player1')

const score_p0_El = document.getElementById('score-p0')
const score_p1_El = document.getElementById('score-p1')

const current_p0_El = document.getElementById('current-p0')
const current_p1_El = document.getElementById('current-p1')


const dice_El = document.querySelector('.dice')
const btn_roll = document.querySelector('.btn-roll')
const btn_new = document.querySelector('.btn-new')
const btn_hold = document.querySelector('.btn-hold')



// variables
let scores, currentScore, activePlayer, playing;


//---------------
// Functions
//---------------


// Starting game 
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;  // player 1 starts 
    playing = true;
    // set UI                                                                                                                                  
    score_p0_El.textContent = 0
    score_p1_El.textContent = 0 
    dice_El.classList.add('hidden')
}
init()




const rollDice = () =>{
    if (playing){
        let diceRoll = Math.floor(Math.random() * 6 ) + 1
        
        // test 
        console.log(`R Player: ${activePlayer}`)
        console.log(`R Dice value: ${diceRoll}`)


        // dislay dice 
        dice_El.classList.remove('hidden')
        dice_El.src = `images/dice-${diceRoll}.png`

        if(diceRoll !== 1 ) {
            // add dice value to score
            currentScore = currentScore + diceRoll
            document.getElementById(`current-p${activePlayer}`).textContent = currentScore

        } else {
            switchPlayer()
        }
    }
}


const holdScore = () => {
    
    if (playing){
        console.log(`before scores[activePlayer]: ${  scores[activePlayer]}`)
        scores[activePlayer] += currentScore
        document.getElementById(`score-p${activePlayer}`).textContent = scores[activePlayer]
        // check if won
        if (currentScore >= 20){
            // end game 
            playing = false
            dice_El.classList.add('hidden')
            document.querySelector(`player${activePlayer}`).classList.add('player-winner')
            document.querySelector(`player${activePlayer}`).classList.remove('player-active')
        } else {
            // switch player
            switchPlayer()
        }
    }
}

const switchPlayer = () =>{

    // drop score
    document.getElementById(`current-p${activePlayer}`).textContent = 0
    currentScore = 0

    //switch player 
    activePlayer = activePlayer === 0 ? 1 : 0
    p0_El.classList.toggle('player-active')
    p1_El.classList.toggle('player-active')


}



//---------------
// event handlers 
//---------------

btn_roll.addEventListener('click', rollDice)
btn_new.addEventListener('click', init)
btn_hold.addEventListener('click', holdScore)

