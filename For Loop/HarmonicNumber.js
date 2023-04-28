//2. Write a program that takes a command-line argument n and prints the nth harmonic number

const prompt = require('prompt-sync')(); // import prompt-sync module

let n = prompt("Enter a number: ");

let harmonic = 0;

for (let i = 1; i <= n; i++) {
  harmonic += 1 / i;
}

console.log(`The ${n}th harmonic number is ${harmonic}`);

