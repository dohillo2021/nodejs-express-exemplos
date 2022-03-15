import {Router} from 'express'

import { signup } from './userService'

const router = Router()
router.post('/signup', (req, res) => {
  const answer = signup(req.body)
  res.send(answer)
})

router.post('/login', (req, res) => {
  res.send('LOGIN /')
})


export default router

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
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send( )
  }catch (err) {
    if(err.message === 'email_mao_encontrado' || err.message === 'senha_incorreta')
    return res.status(400).send(err.message)

    res.status(500).send( )
  }
})


export default router


