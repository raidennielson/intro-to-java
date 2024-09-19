class Employee {
	constructor(name, department) {
		this.name = name;
		this.department = department;
	}
}
class Manager extends Employee {
	constructor(name, department, reports = []) {
		super();
		this.name = name;
		this.department = department;
		this.reports = reports;
	}
	addReport(employee) {
		this.reports.push(employee);
	}
	getReportDetails() {
		console.log(Manager.reports);
	}
}
let raiden = new Employee("raiden", "Raiden INC.");
let squidward = new Manager("Squidward", "Raiden INC.");
let Manager1 = new Manager();
Manager1.addReport(raiden);
console.log(Manager1.reports);
