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

function resolveRound(player, computer)
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
    const res = document.querySelector('#round-result');
    res.textContent = roundResult;

    const score = document.querySelector('#scores');
    score.textContent = `Player: ${playerScore}; Computer: ${computerScore}`

}


function reset()
{
    playerScore = computerScore = 0;

    document.querySelector("body").removeChild(document.querySelector("#btn_reset"));
    document.querySelector("#round-result").textContent = `Play the game to see the result!`;
    document.querySelector("#scores").textContent = `Player: 0 Computer 0`;
    document.querySelector("h3").textContent = ``;

    buttons.forEach((button) => button.disabled = false );
}

function check()
{
    if(playerScore == 5)
    {
        const finalResult = document.querySelector('h3');
        finalResult.textContent = "Congratulations! You win!";
    }
    else if(computerScore == 5)
    {
        const finalResult = document.querySelector('h3');
        finalResult.textContent = "Oh no!";
    }
    else { return; }
    
    buttons.forEach((button) => { button.disabled = true; });

    const body = document.querySelector("body");
    let resetButton = document.createElement("button");
    resetButton.id = "btn_reset";
    resetButton.textContent = "Play again!";
    resetButton.addEventListener("click", reset);
    body.appendChild(resetButton);
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

    let roundResult = resolveRound(player, computer);
    displayResult(roundResult);
    check();
}

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => { 
    button.addEventListener("click", playRound);
});

let playerScore = 0;
let computerScore = 0;