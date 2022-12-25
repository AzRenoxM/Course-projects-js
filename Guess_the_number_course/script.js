"use strict";

function lose_points() {
   let actual_sco = Number(document.querySelector(".score").textContent);
   document.querySelector(".score").textContent = actual_sco - 1;
}
const lose_game_0 = () =>
   (document.querySelector(".message").textContent = "Lose, 0 points");

const too_high = function (number_inp) {
   if (random_nr < number_inp) {
      document.querySelector(".message").textContent = "Too high!!!";
   }
};
const too_low = function (number_inp) {
   if (random_nr > number_inp) {
      document.querySelector(".message").textContent = "Too low!!!";
   }
};

const some = number_inp =>
   random_nr < number_inp ? "Too high!!!" : "Too low!!!";
// Random number
let random_nr = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = String(random_nr);

// After a click on check
document.querySelector(".check").addEventListener("click", function () {
   const number_some = Number(document.querySelector(".guess").value);

   // When someone don't know how to put numbers
   if (!number_some) {
      document.querySelector(".message").textContent = "Bro some number";
      console.log("number_some");
      lose_points();
      if (Number(document.querySelector(".score").textContent) <= 0) {
         lose_game_0();
      }
   }
   //Win of the game
   if (number_some === random_nr) {
      document.querySelector(".message").textContent = "Congratualtion!!!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = random_nr;

      //Score is better
      if (
         Number(document.querySelector(".highscore").textContent) <
         Number(document.querySelector(".score").textContent)
      ) {
         document.querySelector(".highscore").textContent =
            document.querySelector(".score").textContent;
      }
   } else {
      //Lose a point
      document.querySelector(".message").textContent = "Try again";
      lose_points();
      too_high(Number(document.querySelector(".guess").value));
      too_low(Number(document.querySelector(".guess").value));

      // Lose a game_0
      if (Number(document.querySelector(".score").textContent) <= 0) {
         lose_game_0();
      }
   }
});
// After a click on again
document.querySelector(".again").addEventListener("click", function () {
   // Random
   random_nr = Math.trunc(Math.random() * 20) + 1;

   // Reset colors
   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".number").style.width = "15rem";
   document.querySelector(".score").textContent = "20";
   document.querySelector(".number").textContent = "?";
});
