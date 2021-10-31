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

// Carousel

let next = document.querySelector(".carousel .next");

let prev = document.querySelector(".carousel .prev");

let slides = document.querySelectorAll(".carousel>div");

let index = 1;

next.addEventListener("click", function () {
  if (index == 1) {
    slides[0].style.transform = "translateX(-100%)";
    slides[1].style.transform = "translateX(0%)";
    index = 2;
  }
  if (index == 2) {
  }
  if (index == 0) {
    slides[2].style.transform = "translateX(-100%)";
    slides[0].style.transform = "translateX(0%)";
    index = 1;
  }
});

prev.addEventListener("click", function () {
  if (index == 1) {
    slides[0].style.transform = "translateX(100%)";
    slides[2].style.transform = "translateX(0%)";
    index = 0;
  }

  if (index == 0) {
  }

  if (index == 2) {
    slides[1].style.transform = "translateX(100%)";
    slides[0].style.transform = "translateX(0%)";
    index = 1;
  }
});
