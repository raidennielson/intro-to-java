function compareDates(date1, date2) {
	if (date1 == date2) {
		console.log("These dates are the same");
	} else if (date1.setFullYear != date2.setFullYear) {
		console.log("The dates have different years");
	} else if (date1.setMonth != date2.setMonth) {
		console.log("These dates have a different month");
	} else {
		console.log("These dates have a different day");
	}
}
let date = new Date(Date.now());
let date1 = new Date(date);
date1.setFullYear(2015);
date1.setMonth(9);
date1.setDate(26);

let date2 = new Date(date);
date2.setFullYear(2015);
date2.setMonth(9);
date2.setDate(26);

compareDates(date1, date2);
