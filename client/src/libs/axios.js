import axios from 'axios'
import { useAuthStore } from '../store/auth'
// http
// const authApi = axios.create ({
//   baseURL: "https://192.168.1.101:3000/api",
//   withCredentials: true,
// });
// https
const URL = window.location.href.includes('localhost')
  ? 'http://localhost'
  : 'http://192.168.1.101'
window.location.href.includes('https') &&
  console.error('🚀 ~ file: axios.js:11 ~ ', 'CONFIG HTTPS URL')
const authApi = axios.create({
  baseURL: `${URL}:3000/api`,
  // baseURL: "https://192.168.1.101:3000/api", // TODO: FOR HTTPS
  // baseURL: import.meta.env.VITE_ENV,
  withCredentials: true
})
authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token
  config.headers = {
    Authorization: `Bearer ${token}`
  }
  return config
})
export default authApi
