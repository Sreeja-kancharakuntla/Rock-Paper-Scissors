let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}


const drawGame=()=>{
    msg.innerText="Game was Draw!!!Play again.";
    msg.style.backgroundColor="yellow";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        //you win
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won!!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        //you lose
        msg.innerText=`You Lost!!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;

    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    //generating computer choice
    if(userChoice===compChoice){
        //draw output
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
        console.log('choice is clicked',userChoice);
        playGame(userChoice);
    });
});
