//3. Write a program that takes a input and determines if the number is a prime.

const prompt = require('prompt-sync')(); // for taking user input

let num = parseInt(prompt('Enter a number: ')); // take user input and convert it to integer

let isPrime = true;

if (num === 1) {
  console.log(num + ' is not a prime number.');
} else if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num + ' is a prime number.');
  } else {
    console.log(num + ' is not a prime number.');
  }
} else {
  console.log('Invalid input');
}
