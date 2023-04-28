//4.program to simulate a coin flip and print out "Heads" or "Tails" accordingly

const coinFlip = Math.round(Math.random()); //// Generate a random number between 0 and 1

// Check if the random number is 0 (heads) or 1 (tails)
if (coinFlip === 0) {
  console.log("Heads");
} else {
  console.log("Tails");
}