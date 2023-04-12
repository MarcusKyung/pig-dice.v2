import { checkGameOver } from './../src/business-logic.js';
import { diceCalculation } from './../src/business-logic.js';


describe("checkGameOver", () => {
  it("returns 'gameOver, player1 wins' when player1.gameScore is equal to or greater than 100", () => {
    const player1 = { gameScore: 100 };
    const player2 = { gameScore: 50 };
    expect(checkGameOver(player1, player2)).toEqual("gameOver, player1 wins");
  });

  it("returns 'gameOver, player2 wins' when player2.gameScore is equal to or greater than 100", () => {
    const player1 = { gameScore: 50 };
    const player2 = { gameScore: 100 };
    expect(checkGameOver(player1, player2)).toEqual("gameOver, player2 wins");
  });

  it("returns undefined when neither player has a gameScore of 100 or more", () => {
    const player1 = { gameScore: 50 };
    const player2 = { gameScore: 75 };
    expect(checkGameOver(player1, player2)).toBeUndefined();
  });
});

describe("diceCalculation", () => {
  it("generates a random number between 1 and 6" , () => {
    const result = diceCalculation();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });    
});