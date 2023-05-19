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
  console.log('🚀 ~ file: store.js:12 ~ getMessages ~ filter:', filter)

  const messages = await Message.find(filter)
  return messages
}

export const updateMessage = async (id, message) => {
  const foundMessage = await Message.findById(id)

  foundMessage.message = message
  const newMessage = await foundMessage.save()

  return newMessage
}
