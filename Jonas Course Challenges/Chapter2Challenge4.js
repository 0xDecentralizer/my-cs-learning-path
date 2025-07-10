/*
023 CHALLENGE #4
Instructions
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

- Create an array called bills containing all 10 test bill values.

- Create empty arrays for the tips and the totals (tips and totals)

- Use the calcTip function we wrote before (included in the starter code) to calculate tips 
and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill) {
    for (let i = 0; i < bill.length; i++) {
        const tip = bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
        tips.push(tip);
        totals[i] = Math.trunc(tip + bill[i]);
        console.log(`Tip: ${tips[i]}, Bill: ${bill[i]}, Total value: ${totals[i]}
            ------`);
    }
}

calcTip(bills);