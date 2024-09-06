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
