// multiplication table function
function printMultiplicationTable(num, limit) {
	let result = "";
	for (let i = 1; i <= limit; i++) {
		let answer = num * i;
		result += `${num} * ${i} = ${answer}\n`;
	}
	return result;
}
let result = printMultiplicationTable(7, 10);
console.log(result);

//prime number function
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

//temperature conversion function
function celsiusToFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
let convertedFahrenheit = celsiusToFahrenheit(20);
console.log(`${convertedFahrenheit} degrees fahrenheit.`);

function fahrenheitToCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
let convertedCelsius = fahrenheitToCelsius(68);
console.log(`${convertedCelsius} degrees celsius.`);
