'use strict';

// Selecting Elements
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
    // Generate random number 
    const dice = Math.floor(Math.random() * 6 + 1); 
    
    // Display it 
    diceEl.classList.remove('hidden');
    diceEl.setAttribute('src', `dice-${dice}.png`)
    
    // Check if it's 1, switch to other player
    if (dice === 1) {
        current0El.textContent = 0;
        dice.setAttribute('box-shadow', '0 0rem 5rem rgba(255, 0, 0, 0.582)');
        // dice. 
    } else {
        current0El.textContent = +current0El.textContent + dice;
    }
    // score0El.textContent = dice;
    
});