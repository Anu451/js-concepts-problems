const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/users',
];

// using Promise.all

async function fetchAll(urls) {
	try {
		const response = await Promise.all(
			urls.map((url) => {
				return fetch(url);
			})
		);
		console.log(response);
		const data = await Promise.all(
			response.map((res) => {
				return res.json();
			})
		);

		console.log(data);
	} catch (error) { 
		console.log(error);
	}
}

fetchAll(urls);

async function processUrlsSequentially(urls) {
	for (let url of urls) {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error fetching URL:', url, error.message);
		}
	}
}

processUrlsSequentially([
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/users',
]);
