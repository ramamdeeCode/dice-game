"use strict";
//selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//Starting concdition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display the dice
  diceElement.classList.remove("hidden");
  //check for rolled 1 if true switch to next player
  diceElement.src = `dice-${dice}.png`;
});
