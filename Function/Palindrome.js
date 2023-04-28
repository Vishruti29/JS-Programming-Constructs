//2. Write a function to check if the two numbers are Palindromes

const prompt = require('prompt-sync')(); // require prompt-sync module
// Take input from the user
const num1 = prompt("Enter the first number: ");
const num2 = prompt("Enter the second number: ");

// Function to check if a number is palindrome
function isPalindrome(num) {
  const strNum = num.toString();
  const reversedNum = strNum.split('').reverse().join('');
  return strNum === reversedNum;
}

// Check if both numbers are palindromes
if (isPalindrome(num1) && isPalindrome(num2)) {
  console.log(`Both ${num1} and ${num2} are palindromes`);
} else {
  console.log(`At least one of ${num1} and ${num2} is not a palindrome`);
}
