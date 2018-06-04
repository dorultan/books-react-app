const base_url = 'https://www.googleapis.com/books/v1/volumes?q=';

const bookService = {

	get: (query) => {
		
		let promise = new Promise((resolve, reject) => {

			fetch(`${base_url}${query}`, {
				method: "GET"
			})

			.then((res) => {
				res.json()

				.then((data) => {

					if(data.totalItems > 0 ) {
						resolve(data);
					}
					else {
						reject({message: `I couldn't find anything with the keywords ${query}`})
					}
				})

				.catch((err) => {
					reject(err);
				})
			})

			.catch((err) => {
				reject(err);
			})

		})

		return promise;
	}
};


export default bookService;
