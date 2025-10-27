'use strict';

// Game data
let currentScore = 0;
let currentPlayer = 0;
let player0TotalScore = 0;
let player1TotalScore = 0;

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Functionality
btnRoll.addEventListener('click', function() {
    // Reset the dice shadow
    diceEl.classList.remove('diceOne');

    // Generate random number 
    const dice = Math.floor(Math.random() * 6 + 1); 
    
    // Display it 
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`)
    

    // Check if it's 1, switch to other player
    if (dice !== 1) {
        currentScore += dice;
        if (currentPlayer === 0)
            current0El.textContent = currentScore;
        else
            current1El.textContent = currentScore; 
    } else {
        currentScore = 0;
        if (currentPlayer === 0) {
            current0El.textContent = currentScore;
            player0El.classList.remove('player--active');
            player1El.classList.add('player--active');
        } else {
            current1El.textContent = currentScore;
            player1El.classList.remove('player--active');
            player0El.classList.add('player--active');
        }
        currentPlayer = currentPlayer ^ 1;
        diceEl.classList.add('diceOne')
    }
});

btnHold.addEventListener('click', function() {
    if (currentPlayer === 0) {
        player0TotalScore += currentScore;
        if (player0TotalScore >= 100) alert('Player 1 Win =)');

        current0El.textContent = 0;
        score0El.textContent = player0TotalScore;
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
        
        currentPlayer = currentPlayer ^ 1;
        currentScore = 0;
    } else {
        player1TotalScore += currentScore;
        if (player0TotalScore >= 100) alert('Player 2 Win =)');
        
        current1El.textContent = 0;
        score1El.textContent = player1TotalScore;
        player1El.classList.remove('player--active');
        player0El.classList.add('player--active');
        
        currentPlayer = currentPlayer ^ 1;
        currentScore = 0;
    }
});