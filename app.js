let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#computerScore");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userStats=document.querySelector("#yourStats");
const compStats=document.querySelector("#compStats");

const computerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}

const drawGame=()=>{
    msg.innerText="Match DRAW! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You WIN! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You LOSE! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=computerChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    userStats.innerText=`${userChoice}`;
    compStats.innerText=`${compChoice}`;
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})



