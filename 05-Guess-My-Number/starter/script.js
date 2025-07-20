'use strict';


let randomNumber;
let score = 0;
let highScore = 0;

const randomNumGenerator = function() {
    return Math.floor(Math.random() * 20 + 1);
}
// randomNumber = randomNumGenerator();

const resetInitialValues = function () {
    randomNumber = randomNumGenerator();
    score = 20
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
    }
});