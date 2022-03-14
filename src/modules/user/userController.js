import {Router} from 'express'
import { signup } from './userService'


const router = Router()
router.post('/signup', (req, res) => {
  try {
    const answer = signup(req.body)
  res.send(answer)
  } catch (err) {
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)
    res.status(500).send(err.message)
  }
})

router.post('/login', (req, res) => {
  res.send('LOGIN /')
})


export default router

