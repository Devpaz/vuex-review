import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})
const { get, post, put, patch, delete: destroy } = service
export { get, post, put, patch, destroy }
