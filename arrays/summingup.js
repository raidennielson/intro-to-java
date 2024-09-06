let expenses = [200, 150, 300, 250];
let initialValue = 0;
let totalExpense = expenses.reduce(
	(sum, element) => sum + element,
	initialValue,
);
console.log(`Total Expense: ${totalExpense}`);
