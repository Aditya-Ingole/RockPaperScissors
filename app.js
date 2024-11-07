let userScore = 0;
let compScore = 0;

const chioses = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//show draw
const draw = (userChoice,compChoice) => {
  console.log("game was draw");
  msg.innerText = `game was draw. ${userChoice} = ${compChoice}`;
  msg.style.backgroundColor = "#081b31";

};

//show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Win...");
    msg.innerText = `You win... Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("You Loose...");
    msg.innerText = `You Loose... ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// game logic
const playGame = (userChoice) => {
  console.log("user choice ", userChoice);

  //generate compture choice
  const compChoice = genCompChoice();
  console.log("computer chioce ", compChoice);
  // draw
  if (userChoice == compChoice) {
    draw(userChoice,compChoice);
  } else {
    let userWin = true;

    if (userChoice == "rock") {
      //scissor, paper
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      //scissor , rock
      userWin = compChoice == "scissor" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice == "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// user choice
chioses.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    // console.log("event was clicked", userChoice);
    playGame(userChoice);
  });
});
