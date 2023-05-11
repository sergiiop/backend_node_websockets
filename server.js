import express, { json } from 'express'
import router from './network/routes.js'

const app = express()

app.use(json())

router(app)
// app.use('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/app', express.static('public'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
