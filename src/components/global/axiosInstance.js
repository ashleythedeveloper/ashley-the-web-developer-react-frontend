import axios from 'axios';

const baseURL = 'http://192.168.1.4:5000/api/';
const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export default axiosInstance;