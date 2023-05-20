import { Schema, model } from 'mongoose'

const chatSchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User'
  }]
})

export const Chat = model('Chat', chatSchema)
