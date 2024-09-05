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
