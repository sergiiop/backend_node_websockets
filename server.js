import express, { json } from 'express'
import router from './network/routes.js'
import mongoose from 'mongoose'
import dbConnection from './database/config.js'

const app = express()

dbConnection()

app.use(json())

router(app)
// app.use('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/app', express.static('public'))

mongoose.connection.on('open', () => {
  console.log('Mongoose: Connected')
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
  })
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose: Error', err)
})
