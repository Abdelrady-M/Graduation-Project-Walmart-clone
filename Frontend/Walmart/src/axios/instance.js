import axios from 'axios'

const instance = axios.create({
    baseUrl: 'https://walmart-api-zl4b.onrender.com'
})

export default instance