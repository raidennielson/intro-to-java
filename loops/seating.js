console.log("Theater Seating Arrangement");
for (let i = 1; i <= 5; i++) {
	let seatsInRow = "";
	for (let j = 1; j <= 10; j++) {
		seatsInRow += `${i}-${j} `;
	}
	console.log(seatsInRow);
}
