let celsius;
let convertedFahrenheit;
function celsiusToFahrenheit(celsius) {
	convertedFahrenheit = (celsius * 9) / 5 + 32;
}
celsiusToFahrenheit(20);
console.log(`${convertedFahrenheit} degrees fahrenheit.`);

let fahrenheit;
let convertedCelsius;
function FahrenheitToCelsius(fahrenheit) {
	convertedCelsius = ((fahrenheit - 32) * 5) / 9;
}
FahrenheitToCelsius(68);
console.log(`${convertedCelsius} degrees celsius.`);
