import {Router} from 'express'

const router = Router()
app.post('/signup', (req, res) => {
  res.send('SIGNUP /')
})

app.post('/login', (req, res) => {
  res.send('LOGIN /')
})


export default router