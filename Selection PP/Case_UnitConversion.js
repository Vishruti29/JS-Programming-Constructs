//4. Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

const prompt = require('prompt-sync')(); // import prompt-sync module

// take user inputs
const num = parseFloat(prompt('Enter a number: '));
const unit = prompt('Enter a unit (feet, inch, meter): ');

// convert units
switch (unit) {
  case 'feet':
    console.log(`${num} feet = ${num * 12} inches`);
    console.log(`${num} feet = ${num * 0.3048} meters`);
    break;
  case 'inch':
    console.log(`${num} inches = ${num / 12} feet`);
    console.log(`${num} inches = ${num * 0.0254} meters`);
    break;
  case 'meter':
    console.log(`${num} meters = ${num * 3.28084} feet`);
    console.log(`${num} meters = ${num / 0.0254} inches`);
    break;
  default:
    console.log('Invalid input!');
    break;
}
