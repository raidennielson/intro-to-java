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
