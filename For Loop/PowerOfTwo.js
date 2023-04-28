// 1. Write a program that takes a command-line argument n and prints a table of the
// powers of 2 that are less than or equal to 2^n.

const prompt = require('prompt-sync')(); //for taking user input
let n = parseInt(prompt("Enter the value of n: ")); //take user input

for(let i=0; i<=n; i++){
    console.log("2^"+i+" = "+ Math.pow(2, i));
}
