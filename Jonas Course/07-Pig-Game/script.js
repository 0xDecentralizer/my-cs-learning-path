'use strict';

// Game data
let currentScore = 0;
let currentPlayer = 0;
const scores = [0, 0];


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

const switchPlayer = function() {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentPlayer = currentPlayer ^ 1;
    currentScore = 0;
};

// Rolling Functionality
btnRoll.addEventListener('click', function() {
    if (scores[0] >= 100 || scores[1] >= 100) {
        alert('Start a new game =P');
        breake;
    }
    
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
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore; 
    } else {
        switchPlayer();
        diceEl.classList.add('diceOne');
    }
});

btnHold.addEventListener('click', function() {
    if (scores[0] >= 100 || scores[1] >= 100) {
        alert('Start a new game =P');
        breake;
    }
    
    scores[currentPlayer] += currentScore;
    if (scores[currentPlayer] >= 100) alert(`Player ${currentPlayer+1} Win =)`);
    
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];
    switchPlayer();    
});

btnNew.addEventListener('click', function() {
    
    document.getElementById(`current--${currentPlayer}`).textContent = 0; 
    scores[0] = 0;
    scores[1] = 0;
    currentPlayer = 0;
    currentScore = 0;
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
});