for (var i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

// solution
// => use let instead of var, as its block scoped each iteration a new scope is created
// => 2) use closures => immeditely invoked func

for (var i = 0; i < 5; i++) {
	(function (val) {
		setTimeout(function () {
			console.log(val);
		}, 1000);
	})(i);
}
