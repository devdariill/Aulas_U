import { Router } from 'express'
import {
  setCookie,
  getCookie,
  deleteCookie
} from '../controllers/cookies.controlles.js'
const router = Router()
router.get('/cookies/login', setCookie)
router.get('/cookies', getCookie)
router.get('/cookies/:nitter', deleteCookie)
export default router
