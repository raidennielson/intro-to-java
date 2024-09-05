let todos = [" Buy milk", " Attend meeting", " Read a book"];
todos.push(" Learn Javascript");
todos.splice(1, 1);
console.log(todos);
todos.shift();
todos.unshift(" Buy OJ");
todos.forEach((element) => {
	console.log(`To do list: ${todos}`);
});
