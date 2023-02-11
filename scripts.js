function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10) % 3;
    
    if(choice === 0) { return 'rock'; }
    else if(choice === 1) { return 'paper'; }
    return "scissors";
}

function getPlayerChoice()
{
    while(true){
    let choice = prompt("Rock/Paper/Scissors?");
    choice = choice.toLowerCase();

        if(!(choice != 'rock' && choice != 'paper' && choice != 'scissors'))
        {
            return choice;
        }
    }
}