import axios from "axios"

// will need to be changed for production
const api = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 10000,
})

export default api
