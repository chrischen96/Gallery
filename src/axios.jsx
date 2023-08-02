import axios from 'axios';
import jwt_decode from 'jwt-decode';

const baseURL = 'https://mygallery-production.up.railway.app/';
// const baseURL = 'http://localhost:8000/';

console.log('requesting from: ' + baseURL)

const token = localStorage.getItem('access');
let decoded = null;
if (token) {
    decoded = jwt_decode(token);
    console.log(decoded);
    const exp = decoded.exp;
    const orig_iat = decoded.iat;
    const now = Date.now() / 1000;
    console.log(exp);
    console.log(orig_iat);
    console.log(now);
    if (exp - now < 0) {
        console.log('token expired');
        console.log(localStorage.getItem('refresh'));
        if (localStorage.getItem('refresh') !== 'undefined' && localStorage.getItem('refresh') !== null) {
            axios
                .post(baseURL + 'api/token/refresh/', {
                    refresh: localStorage.getItem('refresh'),
                })
                .then((res) => {
                    localStorage.setItem('access', res.data.access);
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log('no refresh token');
            localStorage.removeItem('access');
        }
    }
}

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