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

function displayResult(roundResult)
{
    const res = document.querySelector('.round-result');
    res.textContent = roundResult;
}


function playRound()
{
    let player = null;

    switch(this.id)
    {
        case 'btn_paper': player = 'paper'; break;
        case 'btn_rock': player = 'rock'; break;
        case 'btn_scissors': player = 'scissors'; break;
    }

    let computer = getComputerChoice();

    let roundResult = check(player, computer);
    displayResult(roundResult);
}

const buttons = document.querySelectorAll('.buttons');
console.log(buttons);
buttons.forEach((button) => { 
    button.addEventListener("click", playRound);
});

let playerScore = 0;
let computerScore = 0;