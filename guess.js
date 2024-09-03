const randomNumber = Math.ceil(Math.random() * 20);
let prompt = require("prompt-sync")();
let triesTaken = 0;
console.log("Number Guessing Game!!");
let numberChosen = prompt("Choose a number 1-20: ");
while (numberChosen > randomNumber) {
	console.log("Your number is too high! Choose a smaller number.");
	numberChosen = prompt("Choose a number 1-20: ");
	triesTaken++;
}
while (numberChosen < randomNumber) {
	console.log("Your number is too low! Choose a larger number.");
	numberChosen = prompt("Choose a number 1-20: ");
	triesTaken++;
}
if (triesTaken == 0) {
	console.log("You are awesome!! You got it first try!!");
} else if (numberChosen == randomNumber) {
	triesTaken++;
	console.log("You won!!! The number was " + randomNumber + "!");
	console.log(
		"It only took you " +
			triesTaken +
			" tries. You can do better than that!",
	);
}
