// Bank Account With Private Members
class BankAccount {
	#accountNumber;
	#balance;
	constructor(accountNumber, balance) {
		this.#accountNumber = accountNumber;
		this.#balance = balance;
	}
	deposit(amount) {
		this.#balance = this.#balance + amount;
	}
	withdraw(amount) {
		if (this.#balance < amount) {
			console.log("insufficient funds");
		} else {
			this.#balance = this.#balance - amount;
			return withdrawal;
		}
	}
	get balance() {
		return this.#balance;
	}
}
let account = new BankAccount(1234, 500);
account.deposit(500);
console.log(account.accountNumber);

// Product and Cart Classes
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

// Book and Library Classes
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
class Library {
	constructor(library = []) {
		this.library = library;
	}
	addBook(book) {
		this.library.push(book);
		console.log(`${book} added to your library`);
	}
	findBook(isbn) {
		for (let i = 0; i < this.library.length; i++) {
			if (this.library[i].isbn == isbn) {
				return this.library[i];
			}
		}
		return null;
	}
}
let addedBook = new Book("coding", "raiden", 1234);
let addedBook1 = new Book("javascript", "raiden", 1235);
let library = new Library();
library.addBook(addedBook);
library.addBook(addedBook1);
console.log(library);
console.log(library.findBook(1234));
