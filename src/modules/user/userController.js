import {Router} from 'express'

import { signup, login } from './userService'

const AUTH_COOKIE_NAME = 'authorization'

const router = Router()
router.post('/signup', (req, res) => {
  try {
    const token = signup(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(201).send( )
  } catch (err) {
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)

    res.status(500).send(err.message)
  }
})

router.post('/login', (req, res) => {
  try {
    const token = login(req.body)
<<<<<<< HEAD
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send()
  }catch (err) {
=======
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send( )
  }catch (err) {

>>>>>>> 2d6d919c27ae6819a80a0d61465de4066bffd500
    if (err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')

    return res.status(400).send(err.message)

<<<<<<< HEAD
    res.status(500).send()
=======
    res.status(500).send( )
>>>>>>> 2d6d919c27ae6819a80a0d61465de4066bffd500
  }
})


export default router