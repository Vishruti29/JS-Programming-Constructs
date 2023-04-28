//5. Write a program that computes a factorial of a number taken as input. 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require("prompt-sync")();

// take input from user
const num = parseInt(prompt("Enter a number: "));

// compute factorial
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}

// print result
console.log(`Factorial of ${num} is ${fact}`);
