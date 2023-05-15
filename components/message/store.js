import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/telegrom', {
  useNewUrlParser: true
})

console.log('[db] conectada con exito')

export const addMessage = (message) => {
  // list.push(message)
}

export const getMessages = () => {
  // return list
}
