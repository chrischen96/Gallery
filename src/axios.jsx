import axios from 'axios';

const baseURL = 'https://mygallery-production.up.railway.app/';
// const baseURL = 'http://localhost:8000/';

console.log('requesting from: ' + baseURL)

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        Authorization: localStorage.getItem('access')
            ? 'JWT ' + localStorage.getItem('access')
            : null,
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

export default axiosInstance;