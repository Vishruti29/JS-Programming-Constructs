// 3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

const prompt = require('prompt-sync')();
let year = parseInt(prompt("Enter a year: "));

if (year % 4 === 0) {

  if (year % 100 === 0) {

    if (year % 400 === 0) {

      console.log(`${year} is a leap year`);

    } else {
      console.log(`${year} is not a leap year`);
    }

  } else {
    console.log(`${year} is a leap year`);
  }
  
} else {
  console.log(`${year} is not a leap year`);
}