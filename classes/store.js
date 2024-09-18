class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
class Cart {
	constructor(products = []) {
		this.products = products;
	}
	addProduct(product) {
		this.products.push(product);
		console.log(`Added ${product.name} to your cart.`);
	}
	getTotal() {
		let total = 0;
		for (let i = 0; i < this.products.length; i++) {
			total = total + this.products[i].price;
		}
		return total;
	}
}
let apple = new Product("apple", 1);
let bread = new Product("bread", 2);
let newCart = new Cart();
newCart.addProduct(apple);
newCart.addProduct(bread);
console.log(newCart.getTotal() + " dollars");
