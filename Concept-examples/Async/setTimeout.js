function greet(name) {
	console.log(`hello im ${name}`);
}

const timeout = setTimeout(greet, 2000, 'Anushka');


// cancel func before its executes
clearTimeout(timeout);
