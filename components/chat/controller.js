import { addNewChat as add, getChats as list, deleteChat as remove } from './store.js'

export const addChat = (users) => {
  return new Promise((resolve, reject) => {
    if (!users || !Array.isArray(users)) {
      console.error('[messageController] No hay usuario o mensaje')
      reject(new Error('Los datos son incorrectos'))
    }

    const newChat = {
      users
    }
    add(newChat)
    resolve(newChat)
  })
}

export const getChats = async (user) => {
  return new Promise((resolve, reject) => {
    resolve(list(user))
  })
}

// export const updateMessage = async (id, message) => {
//   try {
//     if (!id || !message) {
//       throw new Error('Invalid data')
//     }
//     const messageUpdated = await update(id, message)
//     return messageUpdated
//   } catch (error) {
//     console.error(error)
//     throw new Error('Error en el controlador')
//   }
// }

export const deleteChat = async (id) => {
  try {
    if (!id) {
      throw new Error('Invalid data')
    }
    const chatDeleted = await remove(id)
    return chatDeleted
  } catch (error) {
    console.error(error)
    throw new Error('Error en el controlador')
  }
}
