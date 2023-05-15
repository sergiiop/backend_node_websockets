import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MessageSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date
})

export const model = mongoose.model('Message', MessageSchema)
