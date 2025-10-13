'use strict';

/** 
 * When provided with a letter, return its position in the alphabet.
 * Input :: "a"
 * Output :: "Position of alphabet: 1"
 * Note: Only lowercased English letters are tested
*/


let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const position = (char) => {
    let res = alphabet.indexOf(char);
    console.log(r);
    return `Position of alphabet: ${res+1}`;
}
