function GetComputerChoice() {
    const numberselect = Math.floor(Math.random() * 3)
    if (numberselect === 1) {
        return "paper";
    }
    else if (numberselect === 2){
        return "rock";
    }
    else {
        return "scissors";
    }
}
function PlayerSeletion() {
    while(true) {
        const PlayerPrompt = prompt("Enter Rock, Paper or Scissors").toLowerCase();
        
        if (PlayerPrompt === "rock" || PlayerPrompt === "paper" || PlayerPrompt === "scissors"){
            return PlayerPrompt;
        }
        else {
            alert("Invalid choice");
        }
    }
}
function PlayRound(human, computer) {
    if (human === computer){
        return("tie");
    }
    else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
    ){
        return("win");
    } else {
        return("lose");
    }
}

function game(){
    let playerscore = 0;
    let computerscore = 0;

    for (let i = 0; i < 5; i++){
        const player = PlayerSeletion();
        const thecomputer = GetComputerChoice();
        const round = PlayRound(player, thecomputer);
        
        if (round === "win"){
            playerscore ++;
            alert("You won this round");
        } else if (round === "lose"){
            computerscore ++;
            alert("You lost the round");
        } else {
            alert("It's a tie");
        }
        }
        if (playerscore > computerscore){
            alert("You won the game");
        } else if (playerscore < computerscore) {
            alert("You lost the game")
        } else {
            alert("It's a tie")
        }
    }
    game()
   