import express from 'express'
import router from './network/routes.js'
import mongoose from 'mongoose'
import dbConnection from './database/config.js'

const app = express()

app.use(express.json())
app.use('/app', express.static('public'))

router(app)

// app.use('/', (req, res) => {
//   res.send('Hello World!')
// })
console.log('here')

dbConnection()
mongoose.connection.on('open', () => {
  console.log('Mongoose: Connected')
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose: Error', err)
})
