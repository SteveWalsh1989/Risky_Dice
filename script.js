/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score ge


*/

// Variables
var scores, roundScore, activePlayer;

totalScores = [0,0];
roundScore = [0,0];
activePlayer = 0;  // P1 goes first 

// hide dice on game start 
document.querySelector('.dice').style.display = 'none';

// Set first player
//document.querySelector('#current-' + activePlayer).textContent = dice;



// Get roll button click
document.querySelector('.btn-roll').addEventListener('click', function(){
    // Set dice val
    var dice_val = Math.floor(Math.random() * 6) + 1;

    // Set display value on dice
    var dice_obj = document.querySelector('.dice')
    
    dice_obj.style.display = 'block';
    dice_obj.src = "dice-" + dice_val + ".png";
    
    // Update round score if value is NOT 1


    
 
});