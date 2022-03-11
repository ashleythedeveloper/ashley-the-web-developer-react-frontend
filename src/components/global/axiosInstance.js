import axios from 'axios';

const baseURL = 'https://api.ashleythewebdeveloper.com.au/api/';
// const baseURL = 'http://localhost:5000/api/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export default axiosInstance;