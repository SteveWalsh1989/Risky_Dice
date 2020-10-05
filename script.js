/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score ge


*/

// Variables
var scores, roundScore, activePlayer, dice;

totalScores = [0,0];
roundScore = [0,0];
activePlayer = 0;  // P1 goes first 

// hide dice on game start 
document.querySelector('.dice').style.display = 'none';

// get dice val
dice = Math.floor(Math.random() * 7);
 
// change value for active player per
document.querySelector('#current-' + activePlayer).textContent = dice;


