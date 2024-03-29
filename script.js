// A function to ask the user between rock paper and scissor
/*
function playerSelection(){
    let playerChoice = 'rock'; //prompt("Pick between rock, paper, and scissors");
    playerChoice.toLowerCase();
    return playerChoice;
}*/
//btnTry.style.display = 'none';
document.getElementById('btnTry').style.display = 'none';
let playerScore = 0;
let computerScore = 0;

const playerPicks = document.createElement('p');
const computerPicks = document.createElement('p');
const score = document.createElement('p');
const finalScore = document.createElement('p');
const currentScore = document.createElement('p');
const results = document.querySelector('.results');
results.innerHTML = '';

const startBtn = document.querySelector('#startBtn');


const btn1 = document.querySelector('#btnRck');
btn1.addEventListener('click', () => {
playRound('rock', getComputerChoice());
});

const btn2 = document.querySelector('#btnPpr');
btn2.addEventListener('click', () => {
playRound('paper', getComputerChoice());
});

const btn3 = document.querySelector('#btnSci');
btn3.addEventListener('click', () => {
playRound('scissor', getComputerChoice());
});

function getComputerChoice(){
    let rps = ['rock', 'paper', 'scissor']; 
    let randNum = Math.floor(Math.random() * rps.length);
    let computerChoice = rps[randNum];
    return computerChoice;
}

function playRound(playerPick, computerPick){
    
    playerPicks.textContent = "You chose: " + playerPick + " vs Opponent chose: " + computerPick;
    //computerPicks.textContent = ;
    results.appendChild(playerPicks);
    //results.appendChild(computerPicks);
    //console.log("You chose: " + playerPick + " and Opponent chose: " + computerPick);
    
    if (playerPick == computerPick){
        score.textContent = `Its a Tie!
                             Current Score: ${playerScore} vs ${computerScore}`;;
        results.appendChild(score);
    }else if(playerPick == 'rock' && computerPick == 'scissor' || playerPick == 'paper' && computerPick == 'rock' || playerPick == 'scissor' && computerPick == 'paper'){
        ++playerScore;
        score.textContent = `You won!
                             Current Score: ${playerScore} vs ${computerScore}`;
        results.appendChild(score);
    }else{
        ++computerScore;
        score.textContent = `You lost!
                             Current Score: ${playerScore} vs ${computerScore}`;
        results.appendChild(score);
    }

    if(playerScore === 5 || computerScore === 5){
        if(playerScore > computerScore){
            finalScore.textContent =  "Score is " + playerScore + " - " + computerScore;
            results.appendChild(finalScore);
        }else if(computerScore > playerScore){
            finalScore.textContent =  "Score is " + playerScore + " - " + computerScore;
            results.appendChild(finalScore);
        }else {
        finalScore.textContent =  "Score is " + playerScore + " - " + computerScore;
        results.appendChild(finalScore);
        }
        
        playerScore = 0;
        computerScore = 0;
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btnTry.style.display = 'block';
    }
}

const btnTry = document.querySelector('#btnTry');
    btnTry.addEventListener('click', () => {
        btnTry.style.display = 'none';
        tryAgain();
    })

function tryAgain(){

    playerScore = 0;
    computerScore = 0;

    results.innerHTML = '';
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
}