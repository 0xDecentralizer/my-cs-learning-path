// SPDX-License-Identifier: BSD-2-Clause
pragma solidity ^0.8.16;

contract Kata {
  function solution(uint256 n) public pure returns (string memory) {
    require (n > 0 && n < 4000, 'Invalid number!');

    string[13] memory romans = [
        "M", "CM", "D", "CD", "C", "XC", "L",
        "XL", "X", "IX","V", "IV", "I"
    ];
    uint16[13] memory values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    string memory res = "";
    for (uint256 i = 0; i < 13; i++) {
        while (n >= values[i]) {
            res = string(abi.encodePacked(res, romans[i]));
            n -= values[i];
        }
    }
    return res;
  }
}