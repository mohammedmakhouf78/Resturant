let burger = document.querySelector("nav .burger");
let ul = document.querySelector("nav ul");

let closeBtn = document.querySelector("nav ul button");

let blackBg = document.querySelector(".black-bg");

burger.addEventListener("click", function () {
  ul.classList.toggle("active");
  blackBg.classList.toggle("black-bg-active");
});

closeBtn.addEventListener("click", function () {
  ul.classList.toggle("active");
  blackBg.classList.toggle("black-bg-active");
});

blackBg.addEventListener("click", function () {
  ul.classList.toggle("active");
  blackBg.classList.toggle("black-bg-active");
});
