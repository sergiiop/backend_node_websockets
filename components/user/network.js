import { Router } from 'express'
import { success, errorMessage } from '../../network/response.js'
import { addUser, deleteUser, getUsers, updateUser } from './controller.js'

const router = Router()

router.get('/', async (req, res) => {
  const filterMessages = req.query.name || null
  const messageList = await getUsers(filterMessages)
  success(req, res, messageList, 200)
})

router.post('/', async (req, res) => {
  try {
    const { name } = req.body
    const fullMessage = await addUser(name)
    success(req, res, fullMessage, 201)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Información inválida', 400, 'Error en el controlador')
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const userUpdated = await updateUser(id, name)

    success(req, res, userUpdated, 200)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Error interno', 500, 'Error en el controlador')
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const userDeleted = await deleteUser(id)

    success(req, res, userDeleted, 200)
  } catch (error) {
    console.error(error)
    errorMessage(req, res, 'Error interno', 500, 'Error en el controlador')
  }
})

export default router
