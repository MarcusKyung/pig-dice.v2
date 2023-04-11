//Imports
import { swapPlayers, rolledOne, hold, checkGameOver } from './business-logic.js';

import { player1, player2} from './business-logic.js';

//User Logic
function diceCalculation() {
  return Math.floor(Math.random() * 6) + 1; 
}

function rollDice() {
  const currentRoll = diceCalculation();
  console.log(currentRoll);
  document.getElementById("currentDiceRoll").innerText = "You rolled a: " + currentRoll;
  if (player1.isActive === true){
    if (currentRoll !== 1) {
      player1.turnScore = player1.turnScore + currentRoll;
      document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
    } else {
      player1.turnScore = 0;
      document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
      rolledOne();
    }
  } else if (player1.isActive === false) {
    if (currentRoll !== 1) {
      player2.turnScore = player2.turnScore + currentRoll;
      document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
    } else {
      player2.turnScore = 0;
      document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
      rolledOne();
    }
  }
}

window.addEventListener("load", function (){
  document.querySelector("div#rollOption").addEventListener("click", rollDice);
  document.querySelector("div#holdOption").addEventListener("click", hold);
});