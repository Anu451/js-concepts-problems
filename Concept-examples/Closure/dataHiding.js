// encapsulation

function balanceSheet(initialVal) {
	let balance = initialVal;

	return {
		addMoney: function (amount) {
			balance += amount;
			console.log(balance);
		},
		subMoney: function (amount) {
			balance -= amount;
			console.log(balance);
		},
	};
}

const initalAmount = balanceSheet(1000);

initalAmount.addMoney(200);
