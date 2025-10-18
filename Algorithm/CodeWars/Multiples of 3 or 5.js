/*
Multiples of 3 or 5: https://www.codewars.com/kata/514b92a657cdc65150000006/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

const findAndSum = (num) => {
    let sum = 0;
    if (num < 0) return 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        } 
    }

    return sum;
}

console.log(findAndSum(100)); // O(n) complexity


// ******** A BETTER SOLUTION ********

const findAndSum2 = (num) => {
    if (num < 0) return 0;

    const sumMultiples = (factor) => {
        const count = Math.floor((num - 1) / factor); 
        return factor * count * (count + 1) / 2;
    }

    return sumMultiples(3) + sumMultiples(5) - sumMultiples(15);
}

console.log(findAndSum2(100)); // O(1) complexity :)