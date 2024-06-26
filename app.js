let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgCont = document.querySelector(".msgCont");
const userScorePara=document.querySelector("#user-score");
const CompScorePara=document.querySelector("#comp-score");

const showWinner = (userWin, userChoiceId, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoiceId} beats ${compChoice}`;
        msgCont.style.backgroundColor = "Green";
        userScorePara.innerText=userScore;
    } else {
        compScore++;
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoiceId}`;
        msgCont.style.backgroundColor = "Red";
        CompScorePara.innerText=compScore;
    }
    console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
}

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a Draw!";
    msgCont.style.backgroundColor = "Yellow";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const playgame = (userChoiceId) => {
    userChoiceId = userChoiceId.trim().toLowerCase(); // Normalize user input
    console.log("User Choice = ", userChoiceId);
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoiceId === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoiceId === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoiceId, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoiceId = choice.getAttribute("id");
        playgame(userChoiceId);
    });
});