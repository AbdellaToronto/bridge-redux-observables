const BASE_REQUEST_URL = `https://api.edamam.com/search?q=${SEARCH_TERM}`
const API_ENDPOINT = `app_id=${APP_ID}&app_key=${API_KEY}`
const APP_ID = "d039bda9"
const API_KEY = "8df7d59e3361bfea7cd3095121aac7b7"

const recipesEndpoint = generateURL(searchTerm)

const get = (endpoint) => {
	return fetch(endpoint)
	.then(response => {
		return response.json()
	})
	.catch(error => {
		console.log('Error: ', error)
	})
}

const generateURL = (searchTerm) => {
	return BASE_REQUEST_URL + `q={searchTerm}` + "&" + API_ENDPOINT
}

const getRecipes = (searchTerm) => {
	getRecipes(recipesEndpoint)
}

export { getRecipes }
