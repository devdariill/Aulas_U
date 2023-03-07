import { Router } from 'express'
import {
  getAulas,
  createAula,
  getAula,
  deleteAula,
  updateAula
} from '../controllers/aulas.controllers.js'
const router = Router()
// router.post('/aulas/search', searchaulas)
// router.get('/aulas/last', getLastProducto)
router.get('/aulas', getAulas)
router.get('/aulas/:id', getAula)
router.post('/aulas', createAula)
router.put('/aulas/:id', updateAula)
router.delete('/aulas/:id', deleteAula)
export default router
