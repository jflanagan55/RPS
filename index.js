
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
            let div = document.createElement('div');
            div.textContent = "Computer Wins"
            docBody.append(div);
            compScore++;
            displayScore (playerScore, compScore)
            
        }
        else if(playerSelection === "Paper"){
            let div = document.createElement('div');
            div.textContent = "Player wins"
            docBody.append(div);
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else{
            let div = document.createElement('div');
            div.textContent = "It's a tie"
            docBody.append(div);
        }
    }
    else if(computerSelection === "Paper"){
        if(playerSelection === "Scissors"){
            let div = document.createElement('div');
            div.textContent = "Player wins"
            docBody.append(div);
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else if(playerSelection === "Rock"){
            let div = document.createElement('div');
            div.textContent = "Computer Wins"
            docBody.append(div);
            compScore++;
            displayScore (playerScore, compScore)
        }
        else{
            let div = document.createElement('div');
            div.textContent = "It's a tie"
            docBody.append(div);
        }
    }
    else{
        if(playerSelection === "Rock"){
            let div = document.createElement('div');
            div.textContent = "Player wins"
            docBody.append(div);
            playerScore++;
            displayScore (playerScore, compScore);
        }
        else if(playerSelection === "Paper"){
            let div = document.createElement('div');
            div.textContent = "Computer Wins"
            docBody.append(div);
            compScore++;
            displayScore (playerScore, compScore)
        }
        else{
            let div = document.createElement('div');
            div.textContent = "It's a tie"
            docBody.append(div);
        }
    }
}

playDisplay = document.querySelector('#playScore')
compDisplay = document.querySelector('#compScore')


function displayScore (playerScore, compScore){
    
    playDisplay.innerText = playerScore;
    compDisplay.innerText = compScore;
 
    if(playerScore === 5){
        playWinner = document.createElement('div');
        playWinner.innerText = "Player has reached 5 points and has won the game"
        docBody.append(playWinner);

    }
    else if (compScore === 5){
        compWinner = document.createElement('div');
        compWinner.innerText = "Computer has reached 5 points and has won the game"
        docBody.append(compWinner);

    }
    else {}



}
