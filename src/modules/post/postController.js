import {Router} from 'express'

import { verifyAccessToken } from '../../utils/auth'

import { createPost } from './postService'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  try {
    createPost(req.body, req.user)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken, (req, res) => {
  // Duas opções: listar todos ou apenas um
})


export default router