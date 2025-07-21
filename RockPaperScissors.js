let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const gameDraw = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw :| Play Again";
    msg.style.backgroundColor = "#081b31";
}

const gencompChoice =() =>{
    const option = ["rock", "paper", "scissors"];
    const randomIdx =  Math.floor(Math.random()*3);
    return option[randomIdx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
     userScore++;
     userscorePara.innerText = userScore;
     msg.innerText = `You Win :). Your ${userChoice} beats ${compChoice}`;
     msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You Lost :(. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice : ",userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice : ",compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        // scissors, paper
        if(userChoice === "rock"){
       userWin =  compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
    // rock, scissors
       userWin = compChoice === "scissors" ? false : true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
  }
};

choices.forEach((choice) =>{
   choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);


   });
});