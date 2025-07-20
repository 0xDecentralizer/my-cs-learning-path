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
