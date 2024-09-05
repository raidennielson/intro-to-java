function isPrime(num) {
	let prime = true;
	for (let i = 2; i <= num / 2; i++) {
		let remainder = num % i;
		if (remainder == 0) {
			prime = false;
		}
	}
	return prime;
}

console.log(isPrime(17));
