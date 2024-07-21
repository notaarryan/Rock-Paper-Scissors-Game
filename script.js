let choices = document.querySelectorAll(".choices");
let text = document.querySelector("#instruction");
let playerPt = document.querySelector("#playerPoint");
let computerPt = document.querySelector("#computerPoint");
let playerChoice = "";
let computerChoice = "";
let arr = ["rock", "paper", "scissors"];
let playerScr = 0;
let computerScr = 0;

const generateChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return arr[random];
};

const pointUpdate = () => {
  playerPt.innerText = `${playerScr}`;
  computerPt.innerText = `${computerScr}`;
};

const checkWin = () => {
  if (playerChoice == computerChoice) {
    text.innerText = "Draw";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScr += 1;
    text.innerText = "Computer chose SCISSORS! Player Wins";
    text.style.color = "#556b2f";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    computerScr += 1;
    text.innerText = "Computer chose PAPER! Computer Wins";
    text.style.color = "#800000";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    playerScr += 1;
    text.innerText = "Computer chose ROCK! Player Wins";
    text.style.color = "#556b2f";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScr += 1;
    text.innerText = "Computer chose SCISSORS! Computer Wins";
    text.style.color = "#800000";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScr += 1;
    text.innerText = "Computer chose PAPER! Player Wins";
    text.style.color = "#556b2f";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScr += 1;
    text.innerText = "Computer chose ROCK! Computer Wins";
    text.style.color = "#800000";
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playerChoice = choice.getAttribute("id");
    computerChoice = generateChoice();
    checkWin();
    pointUpdate();
  });
});
