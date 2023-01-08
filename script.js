"use strict";
//selecting elements
const score0Element = document.querySelector("#score--0");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting concdition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display the dice
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${dice}.png`;

  //check for rolled 1 if true switch to next player
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
