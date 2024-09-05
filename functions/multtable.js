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
