function greet(name) {
	console.log(`hello im ${name}`);
}

const interval = setInterval(greet, 1000, 'anushka');

setTimeout(() => {
	clearTimeout(interval);
}, 5000);
