import {Router} from 'express'

import { verifyAccessToken } from '../../utils/auth'

import { createPost, getPosts } from './postService'

const router = Router()

router.post('/', verifyAccessToken, (req, res) => {
  try {
    const post = createPost(req.body, req.user)
    res.status(200).send(post)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken, (req, res) => {
    try {
      const posts = getPosts(req.params.id)//pegamos o id no params se ela existir a variavel se nao vai dar undefined
      res.status(200).send(posts)
    } catch (err) {
      if (err.message === 'post_nao_existe')
        return res.status(400).send(err.message)
      
      return res.status(500).send(err.message)
    }  
  })
  
export default router

//FINALIZADO PROJETO