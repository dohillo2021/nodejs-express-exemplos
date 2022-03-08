import {Router} from 'express'
import { signup } from './userService'


const router = Router()
router.post('/signup', (req, res) => {
  const answer = signup()
  res.send(answer)
})

router.post('/login', (req, res) => {
  res.send('LOGIN /')
})


export default router

