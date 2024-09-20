// Example 1: Employee and Manager Classes with Inheritance

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

//Example 2: Polymorphism with Shape Classes

class Shape {
	area() {
		let area1 = 0;
		return area1;
	}
}
class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}
	area() {
		this.area1 = 3.14159 * (this.radius * this.radius);
		return this.area1;
	}
}
class Square extends Shape {
	constructor(height, length) {
		super();
		this.height = height;
		this.length = length;
	}
	area() {
		this.area1 = this.height * this.length;
		return this.area1;
	}
}
function displayArea(Shape) {
	console.log(`The area of the ${Shape} is ${Shape.area()}`);
}
let shapes = [new Circle(2), new Square(4, 4)];
for (let i = 0; i < shapes.length; i++) {
	displayArea(shapes[i]);
}
