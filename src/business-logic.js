
//Game setup/variables:
export let player1 = {
  turnScore: 0,
  gameScore: 0,
  isActive: true,
};

export let player2 = {
  turnScore: 0,
  gameScore: 0,
  isActive: false,
};

//Business Logic
export function checkGameOver(player1, player2) {
  if (player1.gameScore >= 100) {
    // document.getElementById("gameOver").innerText = "Game Over! Player 1 wins!";
    // document.querySelector("div#rollOption").removeEventListener("click", rollDice);
    // document.querySelector("div#holdOption").removeEventListener("click", hold);
    return "gameOver, player1 wins";
  } 
  else if (player2.gameScore >= 100) {
    // document.getElementById("gameOver").innerText = "Game Over! Player 2 wins!";
    // document.querySelector("div#rollOption").removeEventListener("click", rollDice);
    // document.querySelector("div#holdOption").removeEventListener("click", hold);
    return "gameOver, player2 wins";
  }
}

// export function swapPlayers(player1, player2){
//   if (player1.isActive === true) {
//     player1.isActive = false;
//     player2.isActive = true;
//   } else if (player1.isActive === false) {
//     player1.isActive = true;
//     player2.isActive = false;
//   }
// }

// export function hold(){
//   if (player1.isActive === true) {
//     player1.gameScore = player1.gameScore + player1.turnScore;
//     document.getElementById("p1Total").innerText = "Player 1 Game Total: " + player1.gameScore;
//     player1.turnScore = 0;
//     document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
//     swapPlayers(player1, player2);
//     checkGameOver(player1, player2);
//   } else if (player2.isActive === true) {
//     player2.gameScore = player2.gameScore + player2.turnScore;
//     document.getElementById("p2Total").innerText = "Player 2 Game Total: " + player2.gameScore;
//     player2.turnScore = 0;
//     document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
//     swapPlayers(player1, player2);
//     checkGameOver(player1, player2);
//   }
// } 

// export function rolledOne(){
//   if (player1.isActive === true) {
//     player1.gameScore = player1.gameScore + player1.turnScore;
//     document.getElementById("p1Total").innerText = "Player 1 Game Total: "+ player1.gameScore;
//     swapPlayers(player1, player2);
//     checkGameOver(player1, player2);
//   } else if (player1.isActive === false) {
//     player2.gameScore = player2.gameScore + player2.turnScore;
//     document.getElementById("p2Total").innerText = "Player 2 Game Total: "+ player2.gameScore;
//     swapPlayers(player1, player2);
//     checkGameOver(player1, player2);
//   } 
// }

export function diceCalculation() {
  return Math.floor(Math.random() * 6) + 1; 
}

// export function rollDice() {
//   const currentRoll = diceCalculation();
//   document.getElementById("currentDiceRoll").innerText = "You rolled a: " + currentRoll;
//   if (player1.isActive === true){
//     if (currentRoll !== 1) {
//       player1.turnScore = player1.turnScore + currentRoll;
//       document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
//     } else {
//       player1.turnScore = 0;
//       document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
//       rolledOne();
//     }
//   } else if (player1.isActive === false) {
//     if (currentRoll !== 1) {
//       player2.turnScore = player2.turnScore + currentRoll;
//       document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
//     } else {
//       player2.turnScore = 0;
//       document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
//       rolledOne();
//     }
//   }
// }