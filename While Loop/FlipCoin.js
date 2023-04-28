//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  let coinFlip = Math.floor(Math.random() * 2);

  if (coinFlip === 0) {
    headsCount++;
    console.log("Heads");
  } else {
    tailsCount++;
    console.log("Tails");
  }
}

if (headsCount === 11) {
  console.log("Heads wins!");
} else {
  console.log("Tails wins!");
}
