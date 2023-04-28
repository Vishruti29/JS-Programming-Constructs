//4. Extend the program to take a range of number as input and output the Prime Numbers in that range.

const prompt = require('prompt-sync')();

// Take user input for range
const start = parseInt(prompt('Enter starting number of range: '));
const end = parseInt(prompt('Enter ending number of range: '));

// Loop through the range and check for prime numbers
for (let i = start; i <= end; i++) {
  let flag = true;
  
  // Check if the number is prime or not
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  
  // If the number is prime, output it
  if (i > 1 && flag) {
    console.log(i);
  }
}
