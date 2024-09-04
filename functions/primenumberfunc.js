let Prime;
let number;
function isPrime(num) {
	Prime = true;
	for (let i = 2; i <= num / 2; i++) {
		let remainder = num % i;
		if (remainder == 0) {
			Prime = false;
		}
	}
}
isPrime(17);
console.log(Prime);
