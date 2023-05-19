import { addMessage as add, getMessages as list, updateMessage as update } from './store.js'

export const addMessage = (user, message) => {
  console.log('🚀 ~ file: controller.js:4 ~ addMessage ~ message:', message)
  console.log('🚀 ~ file: controller.js:4 ~ addMessage ~ user:', user)
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje')
      reject(new Error('Los datos son incorrectos'))
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    }
    add(fullMessage)
    resolve(fullMessage)
  })
}

export const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(list(filterUser))
  })
}

export const updateMessage = async (id, message) => {
  try {
    if (!id || !message) {
      throw new Error('Invalid data')
    }
    const messageUpdated = await update(id, message)
    return messageUpdated
  } catch (error) {
    console.error(error)
    throw new Error('Error en el controlador')
  }
}
