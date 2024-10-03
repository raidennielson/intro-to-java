// complex date comparison
function compareDates(date1, date2) {
	if (
		date1Year == date2Year &&
		date1Month == date2Month &&
		date1Date == date2Date
	) {
		console.log("These dates are the same");
	} else if (date1Year > date2Year) {
		console.log("date 1 is after date 2");
	} else if (date1Month > date2Month) {
		console.log("date 1 is after date 2");
	} else if (date1Date > date2Date) {
		console.log("date 1 is after date 2");
	} else if (date1Year < date2Year) {
		console.log("date 1 is after date 2");
	} else if (date1Month < date2Month) {
		console.log("date 1 is after date 2");
	} else if (date1Date < date2Date) {
		console.log("date 1 is after date 2");
	}
}
let date = new Date(Date.now());
let date1 = new Date(date);
let date1Year = date1.setFullYear(2015);
let date1Month = date1.setMonth(9);
let date1Date = date1.setDate(26);

let date2 = new Date(date);
let date2Year = date2.setFullYear(2015);
let date2Month = date2.setMonth(9);
let date2Date = date2.setDate(26);

compareDates(date1, date2);

// currency formatting
function formatUSCurrency(amount) {
	amount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
	console.log(amount);
	return amount;
}
formatUSCurrency(1201239.12398);

//generating user id
function generateUserID(length) {
	let possibleCharacters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0",
	];
	let userID = [];
	for (let i = 0; i <= length; i++) {
		let randomNumber = Math.ceil(Math.random() * possibleCharacters.length);
		userID.push(possibleCharacters[randomNumber]);
	}
	userID = userID.join("");
	console.log(`Your user ID: ${userID}`);
	return userID;
}
generateUserID(10);

//calculating time difference
let difference = 0;
let differenceFormattedHours;
let differenceFormattedMinutes;
function timeDifference(startTime, endTime) {
	if (startTime == endTime) {
		console.log("These dates are at the same time");
	} else {
		difference = endTime - startTime;
		differenceFormattedHours = Math.floor(difference / 3600000);
		differenceFormattedMinutes = (difference % 3600000) / 60000;
		console.log(
			`These dates are ${differenceFormattedHours} hours and ${differenceFormattedMinutes} minutes from each other.`,
		);
		return difference;
	}
}
let date3 = new Date(Date.now());
let date4 = new Date(date);
date1.setFullYear(2024);
date1.setMonth(10);
date1.setDate(1);
date1.setHours(2);
date1.setMinutes(34);
date1.setSeconds(23);

let date5 = new Date(date);
date2.setFullYear(2024);
date2.setMonth(10);
date2.setDate(1);
date2.setHours(2);
date2.setMinutes(31);
date2.setSeconds(23);

timeDifference(date5, date4);
