"use strict";
//selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

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

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
};

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
    switchPlayer();
  }
});

btnHold.addEventListener("click", function () {
  //add current score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //check if player score >= 100

  //switch to the next score
  switchPlayer();
});
