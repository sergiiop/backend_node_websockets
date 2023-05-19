import { adduser as add, getUsers as list, updateUser as update, deleteUser as remove } from './store.js'

export const addUser = async (name) => {
  try {
    if (!name) {
      console.error('[messageController] No hay nombre')
      throw new Error('Los datos son incorrectos')
    }

    const user = {
      name
    }
    const newUser = add(user)
    return newUser
  } catch (error) {
    console.error(error)
    throw new Error('Error en el controlador')
  }
}

export const getUsers = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(list(filterUser))
  })
}

export const updateUser = async (id, name) => {
  try {
    if (!id || !name) {
      throw new Error('Invalid data')
    }
    const userUpdated = await update(id, name)
    return userUpdated
  } catch (error) {
    console.error(error)
    throw new Error('Error en el controlador')
  }
}

export const deleteUser = async (id) => {
  try {
    if (!id) {
      throw new Error('Invalid data')
    }
    const userDeleted = await remove(id)
    return userDeleted
  } catch (error) {
    console.error(error)
    throw new Error('Error en el controlador')
  }
}
