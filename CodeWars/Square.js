'use strict';


// const drawSquare = (n) => {
//     // for (let i = 0; i < n; i++) {
//     //     for (let j = 0; j < n; j++) {
//     //         if (i === 0 && j === 0) console.log("*".repeat(n));
//     //         console.log("*", " ".repeat(n-4), "*");
//     //     }
//     // }
//         // for (let j = 0; j < n; j++) {
//         //     if (j === 0) console.log("*".repeat(n));
//         //     console.log("*", " ".repeat(n), "*");
//         //     if (j === n-1) console.log("*".repeat(n));
//         // }
// }


/*
*****           11111           0,0 0,1 0,2 0,3 0,4
*   *           10001           1,0 1,4
*   *     =>    10001     =>    2,0 2,4
*   *           10001           3,0 3,4
*****           11111           4,0 4,1 4,2 4,3 4,4
*/

// const drawSquare = (n) => {
//     console.log("*".repeat(n));
//     for (let j = 2; j < n; j++) {
//         console.log("*" + " ".repeat(n-2) + "*");
//     }
//     console.log("*".repeat(n));
// }

// drawSquare(10);

const n = +require('fs').readFileSync(0, 'utf-8');

const drawSquare = (n) => {
    console.log("*".repeat(n));
    for (let j = 0; j < n-2; j++) {
        console.log("*" + " ".repeat(n-2) + "*");
    }
    console.log("*".repeat(n));
}
drawSquare(n);