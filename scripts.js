function capitalize(text)
{
    return text.charAt(0).toUpperCase() + text.substr(1);
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10) % 3;
    
    if(choice === 0) { return 'rock'; }
    else if(choice === 1) { return 'paper'; }
    return "scissors";
}

function getPlayerChoice()
{
    let choice = null;
    while(!choice){
        choice = prompt("Rock/Paper/Scissors?");
        if(!choice)
        {
            continue;
        }

        choice = choice.toLowerCase();

        if(choice === 'rock' || choice === 'paper' || choice === 'scissors')
        {
            return choice;
        }

        choice = null;
    }
}

function check(player, computer)
{
    if((player === "rock" && computer === 'paper')
        || (player === "paper" && computer === 'scissors')
        || (player === "scissors" && computer === 'rock'))
    {
        ++computerScore;
        return `You lose! ${capitalize(computer)} beats ${player}!`;
    } 
    else if((computer === "rock" && player === 'paper')
    || (computer === "paper" && player === 'scissors')
    || (computer === "scissors" && player === 'rock'))
    {
        ++playerScore;
        return `You win! ${capitalize(player)} beats ${computer}!`;
    }
    else
    {
        return "Draw!";
    }
}

function updateResult(roundResult)
{
    const res = document.querySelector('.round-result');
    res.textContent = roundResult;
}


function playRound()
{
    let player = getPlayerChoice();
    let computer = getComputerChoice();

    let roundResult = check(player, computer);
    updateResult(roundResult);
}

const buttons = document.querySelectorAll('.btn');
console.log(buttons);
buttons.forEach((button) => { 
    button.addEventListener("click", playRound);
});

let playerScore = 0;
let computerScore = 0;