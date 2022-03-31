import { Router } from 'express'
import { verifyAccessToken } from '../../utils/auth'

import { createPost } from './postService'

const router = Router()

router.post('/ ', verifyAccessToken, (req, res) => {
  try {
    createPost(req.body, req.usert)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  //DUAS OPÇÕES: LISTAR TODOS OU APENAS UM
  res.send('GET POST /')
})


export default router