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
