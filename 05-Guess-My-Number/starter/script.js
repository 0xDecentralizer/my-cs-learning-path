'use strict';


let randomNumber;
let score = 0;
let highScore = 0;

const randomNumGenerator = function() {
    return Math.floor(Math.random() * 20 + 1);
}

const resetInitialValues = function () {
    randomNumber = randomNumGenerator();
    score = 20
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
}
resetInitialValues();

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(randomNumber); 
    
    if (!guess) {
        console.log('Invalid input!');
        document.querySelector('.message').textContent = 'Invalid input!';
    } else if (guess < 1 || guess > 20) {
        console.log('Invalid number!');
        document.querySelector('.message').textContent = 'Invalid number!';
    } else if (guess > randomNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too high ↑';
    }  else if (guess < randomNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Too low ↓';
    } else if (guess === randomNumber) {
        document.querySelector('.message').textContent = 'CONGRATS!! ;)';
        document.querySelector('.number').textContent = guess;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        console.log('CONGRATS!!');
    }
});

document.querySelector('.again').addEventListener('click', function() {
    resetInitialValues();
});