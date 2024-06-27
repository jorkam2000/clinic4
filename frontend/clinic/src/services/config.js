import axios from 'axios'

const api = axios.create({
  baseURL: 'https://clinic4.onrender.com/api/',
})

export default api
