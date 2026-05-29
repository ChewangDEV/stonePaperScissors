const choices = ["rock", "paper", "scissors"];
const score = document.querySelectorAll(".scores p");
const btn = document.querySelector("#play");
const p = document.querySelector("#choose");
const img = document.querySelectorAll("img");
const h2 = document.querySelector("#result-text");

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

document.querySelector("#stone").addEventListener("click", () => {
  playerChoice = "rock";
  p.innerHTML = "You chose Rock!";
  img[0].src = "./hand.png";
});

document.querySelector("#paper").addEventListener("click", () => {
  playerChoice = "paper";
  p.innerHTML = "You chose Paper!";
  img[0].src = "./hand-paper.png";
});

document.querySelector("#scissors").addEventListener("click", () => {
  playerChoice = "scissors";
  p.innerHTML = "You chose Scissors!";
  img[0].src = "./scissors.png";
});

btn.addEventListener("click", () => {
  img[1].src = "./hand-paper.png";
  img[1].classList.remove("animation");
  img[1].offsetWidth; // Trigger reflow to restart animation
  img[1].classList.add("animation");
  h2.innerHTML = "Computer is choosing...";
  btn.disabled = true;
  const interval = setTimeout(() => {
    const computerChoiceImg = choices[Math.floor(Math.random() * 3)];

    if (computerChoiceImg === "rock") {
      img[1].src = "./hand.png";
    } else if (computerChoiceImg === "paper") {
      img[1].src = "./hand-paper.png";
    } else {
      img[1].src = "./scissors.png";
    }

    if (playerChoice === computerChoiceImg) {
      h2.innerHTML = `<span id= 'draw'>It's a tie!</span> Computer also chose ${computerChoiceImg}`;
    } else if (
      (playerChoice === "rock" && computerChoiceImg === "scissors") ||
      (playerChoice === "paper" && computerChoiceImg === "rock") ||
      (playerChoice === "scissors" && computerChoiceImg === "paper")
    ) {
      h2.innerHTML = `<span id='win'>You win!</span> Computer chose ${computerChoiceImg}`;
      playerScore++;
      score[0].innerHTML = `Player: ${playerScore}`;
    } else {
      h2.innerHTML = `<span id='lose'>You lose!</span> Computer chose ${computerChoiceImg}`;
      computerScore++;
      score[1].innerHTML = `Computer: ${computerScore}`;
    }
    img[1].classList.remove("animation");
    btn.disabled = false;
  }, 1000);
});
