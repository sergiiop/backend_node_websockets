import { Router } from 'express'
import { success, errorMessage } from '../../network/response.js'
import { addMessage, getMessages } from './controller.js'

const router = Router()

router.get('/', async (req, res) => {
  const messageList = await getMessages()
  success(req, res, messageList, 200)
})

router.post('/', async (req, res) => {
  try {
    const { user, message } = req.body
    console.log('🚀 ~ file: network.js:16 ~ router.post ~ message:', message)
    console.log('🚀 ~ file: network.js:16 ~ router.post ~ user:', user)
    const fullMessage = await addMessage(user, message)
    success(req, res, fullMessage, 201)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Información inválida', 400, 'Error en el controlador')
  }
})

export default router
