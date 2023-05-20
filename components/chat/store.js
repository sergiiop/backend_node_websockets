import { Chat } from './model.js'

export const addNewChat = (users) => {
  const newChat = new Chat(users)
  return newChat.save()
}

export const getChats = async (userId) => {
  let filter = {}
  if (userId) {
    filter = { users: userId }
  }
  const chats = await Chat.find(filter).populate('users')
  return chats
}

// export const updateMessage = async (id, message) => {
//   const foundMessage = await Chat.findById(id)

//   foundMessage.message = message
//   const newMessage = await foundMessage.save()

//   return newMessage
// }

export const deleteChat = async (id) => {
  await Chat.findByIdAndDelete(id)
  return {
    message: `Mensaje con id ${id} eliminado`
  }
}
