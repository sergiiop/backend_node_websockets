import { User } from './model.js'

export const addUser = (user) => {
  const myUser = new User(user)
  return myUser.save()
}

export const getUsers = async (filterUsers) => {
  let filter = {}
  if (filterUsers !== null) {
    filter = { name: filterUsers }
  }
  console.log('🚀 ~ file: store.js:12 ~ getMessages ~ filter:', filter)

  const users = await User.find(filter)
  return users
}

export const updateUser = async (id, name) => {
  const foundUser = await User.findById(id)

  foundUser.name = name
  const newUser = await foundUser.save()

  return newUser
}

export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id)
  return {
    message: `User con id ${id} eliminado`
  }
}
