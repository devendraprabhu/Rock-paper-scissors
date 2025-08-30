const choices=["rock","paper","scissors"];
const playerdisplay=document.getElementById("PlayerDisplay");
const computerdisplay=document.getElementById("ComputerDisplay");
const resultdisplay=document.getElementById("Result");
const player=document.getElementById("playerScore");
const computer=document.getElementById("computerScore");
let playerpoint=0;
let computerpoint=0;

function playGame(playerschoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerschoice===computerchoice){
        result="It's a tie!";

    }

    else{
        switch(playerschoice){
            case "rock":
                result=(computerchoice==="scissors")?"you Win!":"you Lose!";
                break;
            case "paper":
                result=(computerchoice==="rock")?"you Win!":"you Lose!";
                break;
            case "scissors":
                result=(computerchoice==="paper")?"you Win!":"you Lose!";
                break;
                
                

                
        }
    }
    playerdisplay.textContent=`Player : ${playerschoice}`
    computerdisplay.textContent=`Computer : ${computerchoice}`
    resultdisplay.textContent=`Result : ${result}`
    resultdisplay.classList.remove("winner","lose");

    switch(result)
    {
        case "you Win!":
            resultdisplay.classList.add("winner");
            playerpoint++;
            player.textContent=playerpoint
            break;
        case "you Lose!":
            resultdisplay.classList.add("lose");
            computerpoint++;
            computer.textContent=computerpoint;
            break;
         
    }
}