import * as express from 'express'
const { listen } = require('express/lib/application')
const res = require('express/lib/response')


const app = express()

import userController from './controller/userController'

import postController from './controller/postController'


app.use('/user', userController)
app.use('/post', postController)

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))
