//4. Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
// 1. a + b * c 
// 2. a % b + c 
// 3. c + a / b
// 4. a * b + c

const prompt = require('prompt-sync')();

// read three input numbers
const a = parseFloat(prompt('Enter first number: '));
const b = parseFloat(prompt('Enter second number: '));
const c = parseFloat(prompt('Enter third number: '));

// perform four arithmetic operations
const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

// find maximum and minimum
const maxResult = Math.max(op1, op2, op3, op4);
const minResult = Math.min(op1, op2, op3, op4);

// display results
console.log(`The maximum result is: ${maxResult}`);
console.log(`The minimum result is: ${minResult}`);
