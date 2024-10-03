let difference = 0;
let differenceFormattedHours;
let differenceFormattedMinutes;
function timeDifference(startTime, endTime) {
	if (startTime == endTime) {
		console.log("These dates are at the same time");
	} else {
		difference = endTime - startTime;
		differenceFormattedHours = Math.floor(difference / 3600000);
		differenceFormattedMinutes = (difference % 3600000) / 60000;
		console.log(
			`These dates are ${differenceFormattedHours} hours and ${differenceFormattedMinutes} minutes from each other.`,
		);
		return difference;
	}
}
let date = new Date(Date.now());
let date1 = new Date(date);
date1.setFullYear(2024);
date1.setMonth(10);
date1.setDate(1);
date1.setHours(2);
date1.setMinutes(34);
date1.setSeconds(23);

let date2 = new Date(date);
date2.setFullYear(2024);
date2.setMonth(10);
date2.setDate(1);
date2.setHours(2);
date2.setMinutes(31);
date2.setSeconds(23);

timeDifference(date2, date1);
