let monthlyIncome = 300;
let savings = 0.1;
let taxes = 0.12;
let expenses = 0.5;
let savingsCost = monthlyIncome * savings;
let taxesCost = monthlyIncome * taxes;
let expensesCost = monthlyIncome * expenses;
console.log("My savings cost is " + savingsCost + "$");
console.log("My taxes cost is " + taxesCost + "$");
console.log("My expenses cost is " + expensesCost + "$");
let discretionarySpending =
	monthlyIncome - (savingsCost + taxesCost + expensesCost);
console.log("My discretionary spending left is " + discretionarySpending + "$");
