"use strict";

let number = Math.trunc(Math.random() * 20 + 1);
let score = 200;
let highestscore = 0;
console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".result").textContent = "NO Nmber...";
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".result").textContent = "Too High...";
      score--;
      document.querySelector(".score").textContent = `score:${score}`;
      if (score === 1) {
        alert("One Chance Left....");
      }
    } else {
      score--;
      document.querySelector(".score").textContent = `score:${score}`;
      document.querySelector(".result").textContent = "You Lost...";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".result").textContent = "Too Low...";
      score--;
      document.querySelector(".score").textContent = `score:${score}`;
      if (score === 1) {
        alert("One Chance Left....");
      }
    } else {
      score--;
      document.querySelector(".score").textContent = `score:${score}`;
      document.querySelector(".result").textContent = "You Lost...";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".result").textContent = "Success...";
    document.querySelector("body").style.backgroundColor = "lightgreen";
    if (score > highestscore) {
      document.querySelector(".highscore").innerHTML = `Highest Score:${score}`;
    }
  } else {
    document.querySelector(".result").textContent = "You Lost...";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".result").textContent = "Start Processing ......";
  document.querySelector(".score").textContent = "score:20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "white";
});
