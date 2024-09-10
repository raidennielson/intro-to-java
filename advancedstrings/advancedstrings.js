//Example 3: Extracting Domain Name from URL
let url = "https://www.example.com/page";
let splitUrl = url.split("/");
let domain = splitUrl[3];
console.log(`Domain Name: ${domain}`);
//Example 1: Basic Email Validation
let email = "user@example.com";
let checker = /@/;
let checker1 = /./;
let isValidEmail = false;
if (checker.test(email) === true && checker1.test(email) === true) {
	isValidEmail = true;
	console.log("Is the email valid? " + isValidEmail);
} else console.log("Is the email valid? " + isValidEmail);
//Example 2: Formatting a User-Entered Date
let enteredDate = "2021-04-30";
let date = enteredDate.split("-");
date.reverse();
let formattedDate = date.join("/");
console.log(formattedDate);
//Example 5: Checking for Palindromes
let phrase = "racecar";
let phrase1 = phrase.split("");
let reversed = phrase1.reverse().join("");
let reverseTruth = false;
if (phrase === reversed) {
	reverseTruth = true;
	console.log(`Is the phrase a palindrome?: ${reverseTruth}`);
} else console.log(`Is the phrase a palindrome?: ${reverseTruth}`);
//Example 4: Reversing a String
let string = "JavaScript";
let string1 = string.split("");
let reversed1 = string1.toReversed();
console.log(`Reversed String: ${reversed1}`);
