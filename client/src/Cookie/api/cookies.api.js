import axios from '../../libs/axios'

export const loginCookieRequest = async () => await axios.get('/cookies/login')

export const deleteCookieRequest = async () => await axios.get('/cookies')

export const getCookieRequest = async () => await axios.get('/cookies')
