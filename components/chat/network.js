import { Router } from 'express'
import { success, errorMessage } from '../../network/response.js'
import { addChat, deleteChat, getChats } from './controller.js'

const router = Router()

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId
  if (!userId) return errorMessage(req, res, 'Falta el id del usuario', 400, 'Error en el controlador')
  const messageList = await getChats(userId)
  success(req, res, messageList, 200)
})

router.post('/', async (req, res) => {
  try {
    const { users } = req.body
    const fullMessage = await addChat(users)
    success(req, res, fullMessage, 201)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Información inválida', 400, 'Error en el controlador')
  }
})

// router.patch('/:id', async (req, res) => {
//   const { id } = req.params
//   const { message } = req.body

//   try {
//     const messageUpdated = await addChat(id, message)

//     success(req, res, messageUpdated, 200)
//   } catch (error) {
//     console.error(error)
//     errorMessage(req, res, 'Error interno', 500, 'Error en el controlador')
//   }
// })

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const messageDeleted = await deleteChat(id)

    success(req, res, messageDeleted, 200)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Error interno', 500, 'Error en el controlador')
  }
})

export default router
