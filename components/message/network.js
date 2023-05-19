import { Router } from 'express'
import { success, errorMessage } from '../../network/response.js'
import { addMessage, getMessages, updateMessage } from './controller.js'

const router = Router()

router.get('/', async (req, res) => {
  const filterMessages = req.query.user || null
  const messageList = await getMessages(filterMessages)
  success(req, res, messageList, 200)
})

router.post('/', async (req, res) => {
  try {
    const { user, message } = req.body
    const fullMessage = await addMessage(user, message)
    success(req, res, fullMessage, 201)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Información inválida', 400, 'Error en el controlador')
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { message } = req.body

  try {
    const messageUpdated = await updateMessage(id, message)

    success(req, res, messageUpdated, 200)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Error interno', 500, 'Error en el controlador')
  }
})

export default router
