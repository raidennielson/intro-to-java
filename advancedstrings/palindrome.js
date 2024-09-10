let phrase = "racecar";
let phrase1 = phrase.split("");
let reversed = phrase1.reverse().join("");
let reverseTruth = false;
if (phrase === reversed) {
	reverseTruth = true;
	console.log(`Is the phrase a palindrome?: ${reverseTruth}`);
} else console.log(`Is the phrase a palindrome?: ${reverseTruth}`);
