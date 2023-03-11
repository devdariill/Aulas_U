import { createContext, useContext } from 'react'
import {
  loginCookieRequest,
  deleteCookieRequest,
  getCookieRequest
} from '../api/cookies.api'
export const CookieContext = createContext()
export const useCookies = () => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error('useCookies debe estar dentro de un CookieContextProvider')
  }
  return context
}
export const CookieContextProvider = ({ children }) => {
  const loginCookie = async () => {
    try {
      return await loginCookieRequest()
    } catch (error) {
      console.log(
        '🚀 ~ file: CookieContext.jsx ~ line 8 ~ loginCookie ~ error',
        error
      )
    }
  }
  const getCookie = async () => {
    try {
      const res = await getCookieRequest()
      console.log('Cookie', res)
    } catch (error) {
      console.log('🚀 ~ file: CookieContext.jsx:33 ~ getCookir ~ error', error)
    }
  }
  return (
    <CookieContext.Provider value={{ loginCookie, getCookie }}>
      {children}
    </CookieContext.Provider>
  )
}
