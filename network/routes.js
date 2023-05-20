import { Router } from 'express'
import message from '../components/message/network.js'
import user from '../components/user/network.js'
import chat from '../components/chat/network.js'

const routes = (server) => {
  const router = Router()

  server.use('/api/v1', router)
  router.use('/message', message)
  router.use('/user', user)
  router.use('/chat', chat)
}

export default routes
