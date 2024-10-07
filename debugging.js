let prompt = require("prompt-sync")();

let randNum = Math.ceil(Math.random() * 20);
let numGuesses = 1;

console.log();
let guess = prompt("Pick a number between 1 and 20: ");
while (guess != randNum) {
	if (guess > randNum) {
		console.log("Too high! Try guessing lower!");
	} else if (guess < randNum) {
		console.log("Too low! Try guessing higher!");
	}
	console.log();
	guess = prompt("Pick a number between 1 and 20: ");
	numGuesses++;
}

console.log(
	`Correct! The value was ${randNum}. It took you ${numGuesses} guesses.`,
);
console.log();
