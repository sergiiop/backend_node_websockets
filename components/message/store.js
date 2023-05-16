import { Message } from './model.js'

export const addMessage = (message) => {
  // list.push(message)
  const myMessage = new Message(message)
  myMessage.save()
}

export const getMessages = async () => {
  // return list
  const messages = await Message.find()
  return messages
}
