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
export function swapPlayers(){
  if (player1.isActive === true) {
    player1.isActive = false;
    player2.isActive = true;
  } else if (player1.isActive === false) {
    player1.isActive = true;
    player2.isActive = false;
  }
}

export function rolledOne(){
  if (player1.isActive === true) {
    player1.gameScore = player1.gameScore + player1.turnScore;
    document.getElementById("p1Total").innerText = "Player 1 Game Total: "+ player1.gameScore;
    swapPlayers();
    checkGameOver();
  } else if (player1.isActive === false) {
    player2.gameScore = player2.gameScore + player2.turnScore;
    document.getElementById("p2Total").innerText = "Player 2 Game Total: "+ player2.gameScore;
    swapPlayers();
    checkGameOver();
  } 
}

export function hold(){
  if (player1.isActive === true) {
  player1.gameScore = player1.gameScore + player1.turnScore;
  document.getElementById("p1Total").innerText = "Player 1 Game Total: " + player1.gameScore;
  player1.turnScore = 0;
  document.getElementById("p1Turn").innerText = "Player 1 Turn Total: "+ player1.turnScore;
  swapPlayers();
  checkGameOver();
  } else if (player2.isActive === true) {
    player2.gameScore = player2.gameScore + player2.turnScore;
    document.getElementById("p2Total").innerText = "Player 2 Game Total: " + player2.gameScore;
    player2.turnScore = 0;
    document.getElementById("p2Turn").innerText = "Player 2 Turn Total: "+ player2.turnScore;
    swapPlayers();
    checkGameOver();
  }
} 

export function checkGameOver() {
  if (player1.gameScore >= 100) {
    document.getElementById("gameOver").innerText = "Game Over! Player 1 wins!";
    document.querySelector("div#rollOption").removeEventListener("click", rollDice);
    document.querySelector("div#holdOption").removeEventListener("click", hold);
  } 
  else if (player2.gameScore >= 100) {
    document.getElementById("gameOver").innerText = "Game Over! Player 2 wins!";
    document.querySelector("div#rollOption").removeEventListener("click", rollDice);
    document.querySelector("div#holdOption").removeEventListener("click", hold);
  }
}