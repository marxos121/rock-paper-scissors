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

function capitalize(text)
{
    return text.charAt(0).toUpperCase() + text.substr(1);
}

function playRound()
{
    let player = getPlayerChoice();
    let computer = getComputerChoice();

    if((player === "rock" && computer === 'paper')
        || (player === "paper" && computer === 'scissors')
        || (player === "scissors" && computer === 'rock'))
    {
        return `You lose! ${capitalize(computer)} beats ${player}!`;
    } 

    else if((computer === "rock" && player === 'paper')
    || (computer === "paper" && player === 'scissors')
    || (computer === "scissors" && player === 'rock'))
    {
        return `You win! ${capitalize(player)} beats ${computer}!`;
    }

    else
    {
        return "Draw!";
    }
}

function game()
{
    for(let i = 0; i != 5; ++i)
    {
        console.log(playRound());
    }
}