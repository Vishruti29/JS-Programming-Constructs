//1. Write a program that takes a command-line argument n and prints a
// table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

const prompt = require('prompt-sync')(); // require prompt-sync module

let n = parseInt(prompt('Enter a number: ')); // take user input
let power = 1; // initialize power to 1

while (power <= 256 && power <= Math.pow(2, n)) { // loop till power is less than or equal to 256 or 2^n
    console.log(power); // print the power of 2
    power *= 2; // increment power by multiplying with 2
}
