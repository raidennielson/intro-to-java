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
