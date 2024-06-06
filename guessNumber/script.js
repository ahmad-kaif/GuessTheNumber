let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
// console.log(randomNumber);
// const form = document.querySelector('form');

const submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let lastResult = document.querySelector('.lastResult')
let loworhigh = document.querySelector(".loworhigh");
let result = document.querySelector(".result");


let p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // if vaule is invalid 
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1 || guess>100){
        alert("Please enter a number within the range")
    }else{
        prevGuess.push(guess);
        if(numGuess > 10){
            displayGuess(guess);
            displayMsg(`Game Over, Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // if input is >, < random number
    if(guess === randomNumber){
        displayMsg(`You guessed it Right`);
        endGame();
    }else if(guess < randomNumber){
        displayMsg(`Number is too low`);
    }else{
        displayMsg(`Number is too high`)
    }
}


function displayGuess(guess){
    userInput.value = '';
    guessSlot.style.display='block'
    guessSlot.style.flexdirection = 'column';
    guessSlot.innerHTML += `${guess}    `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message){
    loworhigh.innerHTML = `<h1>${message}</h1>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    result.appendChild(p);
    document.querySelector("#newGame").style.display = 'flex';
    document.querySelector("#newGame").style.justifyContent = 'center';
    document.querySelector("#newGame").style.alignItems = 'center';
    document.querySelector("#newGame").style.cursor = 'pointer';
    document.querySelector("#newGame").style.border = '2px solid black';
    playGame = false;
    newGame();


}


function newGame(){
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', function(e){
        let min = 1;
        let max = 100;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // resetting all the value
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled','')
        result.removeChild(p)
        playGame = true;
    })


}