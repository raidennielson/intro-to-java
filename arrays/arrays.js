//concatenating two arrays
let oddNumbers = [1, 3, 5];
let evenNumbers = [2, 4, 6];
let combinedNumbers = oddNumbers.concat(evenNumbers);
console.log(combinedNumbers);

//Filtering an Array of Numbers
let numbers = [1, 23, 42, 56, 33, 17, 8, 90];
let filteredNumbers = numbers.filter((number) => number > 20);
console.log("Numbers greater than 20: " + filteredNumbers);

//Sorting an Array of Strings
let cities = ["London", "Paris", "New York", "Tokyo"];
cities.sort();
console.log(cities);

//Summing up Elements of an Array
let expenses = [200, 150, 300, 250];
let initialValue = 0;
let totalExpense = expenses.reduce(
	(sum, element) => sum + element,
	initialValue,
);
console.log(`Total Expense: ${totalExpense}`);

//Managing a Todo List
let todos = [" Buy milk", " Attend meeting", " Read a book"];
let i = 1;
todos.push(" Learn Javascript");
todos.splice(1, 1);
console.log(todos);
todos.shift();
todos.unshift(" Buy OJ");
todos.forEach((element) => {
	console.log(`To do list: #${i}${element}`);
	i++;
});
