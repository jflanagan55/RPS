
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
            return "Computer Wins";
        }
        else if(playerSelection === "Paper"){
            return "Player wins"
        }
        else{
            return "It's a tie"
        }
    }
    else if(computerSelection === "Paper"){
        if(playerSelection === "Scissors"){
            return "Player Wins";
        }
        else if(playerSelection === "Rock"){
            return "Computer wins"
        }
        else{
            return "It's a tie"
        }
    }
    else{
        if(playerSelection === "Rock"){
            return "Player wins"
        }
        else if(playerSelection === "Paper"){
            return "Computer wins"
        }
        else{
            return "It's a tie"
        }
    }
}
function game (){
    let compCount = 0;
    let playerCount = 0;
    for(let i =0; i<5; i++){
        playerSelection = prompt("Rock, Paper or Scissors");
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i+1}: `)
        console.log(result);
        if(result === "Player wins"){
            playerCount++;
        }
        else if(result === "Computer Wins"){
            compCount++;
        }
        else{}
    }
    if(compCount > playerCount){
        console.log("Computer wins best of 5");
    }
    else if(playerCount > compCount){
        console.log("Player wins best of 5");
    }
    else{
        console.log("best of 5 results in a tie");
    }
    
}
game();