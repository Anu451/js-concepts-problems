// higher order func either takes function as argument or returns a function

// function as argument

function multiply10(num) {
	return num * 10;
}

function multiplyfun(fuc, num) {
	console.log(fuc(num));
}

multiplyfun(multiply10, 2);

// return a function

function multiply(x) {
	return function result(y) {
		console.log(x * y);
	};
}

let multiply5 = multiply(5);
let result5 = multiply5(10);
