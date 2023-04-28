//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let min = 999;

let max = 100;

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 900) + 100; // generates a random three-digit number
  console.log(`Random number ${i+1}: ${randomNumber}`);
  if (randomNumber < min) {
    min = randomNumber;
  }
  if (randomNumber > max) {
    max = randomNumber;
  }
}
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);

