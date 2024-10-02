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
