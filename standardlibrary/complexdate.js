function compareDates(date1, date2) {
	if (
		date1Year == date2Year &&
		date1Month == date2Month &&
		date1Date == date2Date
	) {
		console.log("These dates are the same");
	} else if (date1Year > date2Year) {
		console.log("date 1 is after date 2");
	} else if (date1Month > date2Month) {
		console.log("date 1 is after date 2");
	} else if (date1Date > date2Date) {
		console.log("date 1 is after date 2");
	} else if (date1Year < date2Year) {
		console.log("date 1 is after date 2");
	} else if (date1Month < date2Month) {
		console.log("date 1 is after date 2");
	} else if (date1Date < date2Date) {
		console.log("date 1 is after date 2");
	}
}
let date = new Date(Date.now());
let date1 = new Date(date);
let date1Year = date1.setFullYear(2015);
let date1Month = date1.setMonth(9);
let date1Date = date1.setDate(26);

let date2 = new Date(date);
let date2Year = date2.setFullYear(2015);
let date2Month = date2.setMonth(9);
let date2Date = date2.setDate(26);

compareDates(date1, date2);
