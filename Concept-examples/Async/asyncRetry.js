async function retryFunc(url, retry = 3) {
	while (retry > 0) {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log('data', data);
			return; // Exit the function on success
		} catch (error) {
			retry--;
			console.log(`Retries attempts left: ${retry}`);
			if (retry === 0) {
				console.error('All retries failed. Error:', error.message);
				throw error; // Rethrow the error if retries are exhausted
			}
		}
	}
}

retryFunc('https://jsonplaceholder.typicode.com/posts')
	.then(() => console.log('Fetch successful'))
	.catch((err) => console.error('Fetch failed:', err.message));
