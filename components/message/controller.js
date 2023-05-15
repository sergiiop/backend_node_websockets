import { addMessage as add, getMessages as list } from './store.js'

export const addMessage = (user, message) => {
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

export const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(list())
  })
}
