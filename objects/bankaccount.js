let bankAccount = {
	accountNumber: 123456789,
	balance: 5000,
	deposit: function () {
		let depositFunc = 1500;
		this.balance = this.balance + depositFunc;
		console.log(`After your deposit, your balance is now ${this.balance}$`);
		return this.balance;
	},
	withdraw: function () {
		let withdrawFunc = 3000;
		this.balance = this.balance - withdrawFunc;
		if (this.balance >= 0) {
			console.log(
				`After your withdrawal, your balance is now ${this.balance}$`,
			);
		} else {
			console.log("insufficient funds, withdrawal failed");
			this.balance = this.balance + withdrawFunc;
		}
		return this.balance;
	},
	checkBalance: function () {
		console.log(`Your balance is ${this.balance}$`);
	},
};
bankAccount.deposit();
bankAccount.withdraw();
bankAccount.checkBalance();
