import { Schema, model } from 'mongoose'

const messageSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date
})

export const Message = model('Message', messageSchema)
