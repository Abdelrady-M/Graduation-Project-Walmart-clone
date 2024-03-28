import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://walmart-api-zl4b.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
