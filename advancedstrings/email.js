let email = "user@example.com";
let checker = /@/;
let checker1 = /./;
let isValidEmail = false;
if (checker.test(email) === true && checker1.test(email) === true) {
	isValidEmail = true;
	console.log("Is the email valid? " + isValidEmail);
} else console.log("Is the email valid? " + isValidEmail);
