import {Router} from 'express'

const router = Router()

router.post('/ ', (req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', (req, res) => {
  //DUAS OPÇÔES: LISTAR TODOS OU EPENAS UM
  res.send('GET POST /')
})


export default router