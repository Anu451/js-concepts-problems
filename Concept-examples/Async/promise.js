// promise object represents the eventual completion/failure of an async operation
// promise will be in one of these 3 states => pending, fulfilled, rejected

// understanding creation of promise

const promiseOne = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('Async task was completed');
	}, 1000);
});

// consumption of promise

promiseOne.then(() => {
	console.log('Promise was consumesd');
});

// here async task was completed will be displayed, coz then and resolve was connected its needs to be called

const promiseTwo = new Promise((res, rej) => {
	setTimeout(() => {
		console.log('Async task 2 was completed');
		res();
	}, 1000);
});

promiseTwo.then(() => {
	console.log('Promise 2 was consumesd');
});
