import { Router } from 'express'
import { success } from '../../network/response.js'

const router = Router()

router.get('/', (req, res) => {
  console.log(req.headers)
  success(req, res, 'lista de mensajes')
})

router.post('/', (req, res) => {
  console.log(req.body)
  success(req, res, 'Mensaje añadido correctamente', 201)
})

export default router
