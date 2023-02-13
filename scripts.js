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

    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#ai-score').textContent = computerScore;

}


function reset()
{
    playerScore = computerScore = 0;

    document.querySelector("#final-results").style.visibility = "hidden";
    document.querySelector("#round-result").textContent = `Play the game to see the result!`;
    document.querySelector("#ai-score").textContent = `0`;
    document.querySelector("#player-score").textContent = `0`;

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
        finalResult.textContent = "Oh no! You lose!";
    }
    else { return; }
    
    buttons.forEach((button) => { button.disabled = true; });

    document.querySelector("#final-results").style.visibility = "visible";

}

function removeStyleSelect(e)
{
    this.classList.remove('select');
}


function playRound()
{
    this.classList.add("select");

    let player = null;

    switch(this.id)
    {
        case 'btn-paper': player = 'paper'; break;
        case 'btn-rock': player = 'rock'; break;
        case 'btn-scissors': player = 'scissors'; break;
    }

    let computer = getComputerChoice();
    const computerButton = document.querySelectorAll('.ai-button');
    computerButton.forEach((button) =>  {
        if(button.textContent.toLowerCase() === computer) button.classList.add('select'); 
    });

    let roundResult = resolveRound(player, computer);
    displayResult(roundResult);
    check();
}


let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => { 
    button.addEventListener("click", playRound);
    button.addEventListener("transitionend", removeStyleSelect);
});

const aiButtons = document.querySelectorAll('.ai-button');
aiButtons.forEach((button) => button.addEventListener("transitionend", removeStyleSelect));


const resetButton = document.querySelector("#btn-reset");
resetButton.addEventListener("click", reset);

document.querySelector("#final-results").style.visibility = "hidden";