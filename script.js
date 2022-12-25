"use strict";

const close = function () {
   modal.classList.add("hidden");
   overlay.classList.add("hidden");
};

const show_modal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < show_modal.length; i++) {
   show_modal[i].addEventListener("click", function () {
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
   });
}

close_modal.addEventListener("click", function () {
   close();
});
overlay.addEventListener("click", function () {
   close();
});
document.addEventListener("keydown", function (pre) {
   console.log(pre.key);
   if (pre.key == "Escape") {
      if (!modal.classList.contains("hidden")) {
         close();
      }
   }
});
