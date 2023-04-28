//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt-sync')();

const num = parseInt(prompt('Enter a number: '));

if(num === 1) {
  console.log('Unit');
} else if(num === 10) {
  console.log('Ten');
} else if(num === 100) {
  console.log('Hundred');
} else if(num === 1000) {
  console.log('Thousand');
} else if(num === 10000) {
  console.log('Ten thousand');
} else if(num === 100000) {
  console.log('Lakh');
} else {
  console.log('Invalid input');
}
