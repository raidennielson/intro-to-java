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
