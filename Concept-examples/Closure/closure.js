// => A closure is a combination of a function and its lexical environment (the scope in which the function was created).
// => It allows a function to access variables from its outer scope even after the outer function has executed.

// 	Key Characteristics of Closures:

// => Scope Retention: Closures "remember" the variables of their outer function even if the outer function has finished execution.
// => Private Variables: Closures are often used to create private variables that can only be accessed or modified by specific functions.
// => Higher-Order Functions: Closures are commonly seen in callback functions, event handlers, or functions returned by other functions.

// basic example

// as the function is getting returned even the lexical env is also returned

function outer() {
	const outerVar = 'im outer';

	return function inner() {
		console.log(outerVar);
	};
}

const outerFun = outer();
outerFun();
