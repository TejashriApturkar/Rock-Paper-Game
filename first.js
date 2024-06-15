let userScore = 0;
let botscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
};

const drawGame= () => {
    msg.innerText = "Oh no! It's a Draw! Play Again";
    msg.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "Hurray! You Win!";
        msg.backgroundColor = "green";
    } else {
        botscore++;
        botScorePara.innerText = botscore;
        msg.innerText = "You lose";
        msg.computedStyleMap.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});