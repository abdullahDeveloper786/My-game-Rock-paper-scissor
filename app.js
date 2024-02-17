let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
   //rock, paper, scissors
}

const drawGame = () => {
    msg.innerText = "Game was Draw. play again."
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const PlayGame = (userChoice) => {

  //Generate computer chouce
  const compChoice = genCompChoice();



 if(userChoice === compChoice) {
    //Draw Game
    drawGame();
 }else {
    let userwin = true;
    if(userChoice === "rock"){
        //scissors, paper
        userwin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
        //rock, scissors
        userwin = compChoice === "scissors" ? false : true
    } else {
        //rock, paper
        userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, compChoice);
 }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
       PlayGame(userChoice);
    });
});