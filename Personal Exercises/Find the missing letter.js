'use strict';
/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)
*/

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const input = ['a', 'b', 'c', 'e'];

// This function only accepts small case characters!
function find(input) {
    let nextLetter;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (input[i] === alphabet[j]) {
                nextLetter = alphabet[j+1];
                if (input[i+1] !== nextLetter) {
                    console.log(`The missing letter is: ${nextLetter}`);
                    return;
                }
            }
        }
    }
}

function findBetter(input) {
    for (let i = 0; i < input.length; i++) {
        let currentCharCode = input[i].charCodeAt(0);
        let nextCharCode = input[i+1].charCodeAt(0);
        if (nextCharCode - currentCharCode > 1) {
            console.log(`The missing letter is: ${String.fromCharCode(currentCharCode + 1)}`);
            break;
        }
    }
}

find(input); // O(n * 26) complexity
findBetter(input); // O(n) complexity
