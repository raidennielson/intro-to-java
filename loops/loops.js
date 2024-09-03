console.log("Simple Interest Calculation");
let principle = 1000;
let rate = 5;
let years = 1;
while (years <= 5) {
	let interest = (principle * rate * years) / 100;
	console.log(`Year ${years}: ${interest}$`);
	years++;
}

console.log("Theater Seating Arrangement");
for (let i = 1; i <= 5; i++) {
	let seatsInRow = "";
	for (let j = 1; j <= 10; j++) {
		seatsInRow += `${i}-${j} `;
	}
	console.log(seatsInRow);
}

console.log("Prime Number Between 2 and 30");
for (let number = 2; number <= 30; number++) {
	let isPrime = true;
	for (let i = 2; i <= number / 2; i++) {
		let remainder = number % i;
		if (remainder == 0) {
			isPrime = false;
			break;
		}
	}
	if (isPrime) {
		console.log(number);
	}
}
