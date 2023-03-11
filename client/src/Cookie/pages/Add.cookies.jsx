import { useCookies } from '../context/CookieContext'
import { useAuthStore } from '../../store/auth'
import { loginCookieRequest } from '../api/cookies.api'
import axios from '../../libs/axios'
// import axios from 'axios'
function Add () {
  // const authApi = axios.create({
  //   baseURL: 'http://192.168.1.101:3000/api',
  //   withCredentials: true
  // })
  // authApi.interceptors.request.use((config) => {
  //   const token = useAuthStore.getState().token
  //   config.headers = {
  //     Authorization: `Bearer ${token}`
  //   }
  //   return config
  // })
  // const loginCookie = async () => {
  //   await axios.get('/cookies/login')
  // }
  const loginCookie = async () => {
    await loginCookieRequest()
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <button onClick={() => loginCookie()}>Login</button>
    </div>
  )
}

export default Add

// const authApi = axios.create({
//   baseURL: 'http://192.168.1.101:3000/api',
//   withCredentials: true
// })
// authApi.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().token
//   config.headers = {
//     Authorization: `Bearer ${token}`
//   }
//   return config
// })
// const loginCookie = async () => {
//   const res = await axios.get('http://localhost:3000/api/cookies/login')
//   console.log(res)
// }
