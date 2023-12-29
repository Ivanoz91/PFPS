function getComputerChoice() {
    let Computerchoice = Math.floor(Math.random() * 3) + 1;
    if (Computerchoice === 1){
        return "Rock"
    }
    else if (Computerchoice === 2){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}
console.log(getComputerChoice())