// import axios from 'axios'
import json from '@/assets/database.json'

// const apiClient = axios.create({
// 	baseURL: 'http://localhost:8000/api',
// 	withCredentials: false,
// 	headers: {
// 		Accept: 'application/json',
// 		'Content-Type': 'application/json',
// 	},
// })

export default {
	getCatalog() {
		// return apiClient.get('/events')
		return json
	},
	getProduct(id) {
		// return apiClient.get('/events/' + id)
		return json.find((p) => p.id === id)
	},
}
