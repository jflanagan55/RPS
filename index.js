
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const docBody = document.querySelector('#results');

let compScore = 0;
let playerScore = 0;



rockBtn.addEventListener('click' , () => {
    playRound("Rock", computerPlay());
})

paperBtn.addEventListener('click' , () => {
    playRound("Paper", computerPlay());
})

scissorsBtn.addEventListener('click' , () => {
    playRound("Scissors", computerPlay());
})





function computerPlay(){
    let selection = Math.floor(Math.random()* 3);
    if(selection===0){
        return "Rock"
    }
    else if (selection===1){
        return "Scissors"
    }
    else (selection===2)
        return "Paper"
    
}
function playRound(playerSelection, computerSelection){
    if(computerSelection === "Rock"){
        if(playerSelection === "Scissors"){
            let result = document.querySelector('#results');
            result.textContent = "Computer Wins"
            compScore++;
            displayScore (playerScore, compScore)
            
        }
        else if(playerSelection === "Paper"){
            let result = document.querySelector('#results');
            result.textContent = "Player wins"
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else{
            let result = document.querySelector('#results');
            result.textContent = "It's a tie"
        }
    }
    else if(computerSelection === "Paper"){
        if(playerSelection === "Scissors"){
            let result = document.querySelector('#results');
            result.textContent = "Player wins"
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else if(playerSelection === "Rock"){
            let result = document.querySelector('#results');
            result.textContent = "Computer Wins"
            compScore++;
            displayScore (playerScore, compScore)
        }
        else{
            let result = document.querySelector('#results');
            result.textContent = "It's a tie"
        }
    }
    else{
        if(playerSelection === "Rock"){
            let result = document.querySelector('#results');
            result.textContent = "Player wins"
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else if(playerSelection === "Paper"){
            let result = document.querySelector('#results');
            result.textContent = "Computer Wins"
            compScore++;
            displayScore (playerScore, compScore)
        }
        else{
            let result = document.querySelector('#results');
            result.textContent = "It's a tie"
        }
    }
}




function displayScore (playerScore, compScore){
   let playDisplay = document.querySelector('#playScore')
   let compDisplay = document.querySelector('#compScore')
   playDisplay.innerText = playerScore
   compDisplay.innerText = compScore
 
    if(playerScore === 5){
        let playerWinner =document.querySelector('#results')
        playerWinner.innerText = "Player has reached 5 points and has won the game"
        playDisplay.innerText = '0';
        compDisplay.innerText = '0';
        ResetCounters();
       


    }
    else if (compScore === 5){
        let compWinner = document.querySelector('#results');
        compWinner.innerText = "Computer has reached 5 points and has won the game"
        playDisplay.innerText = '0';
        compDisplay.innerText = '0';
        ResetCounters();
    
    }
    else {}
    
} 

function ResetCounters(){
    playerScore = 0;
    compScore = 0;
}
