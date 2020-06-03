export function colorization(id) {
	return fetch(process.env.API_URL + `/colorization/`, {
		method: 'POST',
		body: JSON.stringify({
			"id": id
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
}