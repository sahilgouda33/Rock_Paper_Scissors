let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    // console.log("game was draw.")
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoic) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoic}`;
        msg.style.backgroundColor="green";
    }else{
        // console.log("You loss!")
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoic} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const palyGame=(userChoice)=>{
    // console.log("user choice =",userChoice);
    // Generate computer choice ->modular way fo program
    const compChoic=genCompChoice();
    // console.log("comp choice =",compChoic);
    if(userChoice==compChoic){
        // Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoic === "paper"?false:true;
        }else if(userChoice === "paper"){
            //rock,scissors
          userWin=compChoic === "scissors"?false:true;
        }else if(userChoice === "scissors"){
            //rock,paper
            userWin=compChoic === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoic);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        palyGame(userChoice);
    })
})