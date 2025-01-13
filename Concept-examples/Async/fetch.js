async function fetchData() {
	try {
		console.log('fetching data');

		// async always returns promise, await keyword is used to resolve/reject the promise

		let response = await fetch('https://jsonplaceholder.typicode.com/posts');
		let data = await response.json();

		console.log('fetched data', data);
	} catch (error) {
		console.log('Error', error);
	}
}

fetchData();

fetch('https://api.example.com/data')
	.then((response) => response.json())
	.then((data) => console.log('data 2', data))
	.catch((error) => console.error(error));
