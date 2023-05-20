import { Message } from './model.js'

export const addMessage = (message) => {
  const myMessage = new Message(message)
  myMessage.save()
}

export const getMessages = async (filterUser) => {
  let filter = {}
  if (filterUser !== null) {
    filter = { user: filterUser }
  }
  const messages = await Message.find(filter).populate('user')
  return messages
}

export const updateMessage = async (id, message) => {
  const foundMessage = await Message.findById(id)

  foundMessage.message = message
  const newMessage = await foundMessage.save()

  return newMessage
}

export const deleteMessage = async (id) => {
  await Message.findByIdAndDelete(id)
  return {
    message: `Mensaje con id ${id} eliminado`
  }
}
