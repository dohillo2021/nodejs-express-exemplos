import * as express from 'express'
<<<<<<< HEAD

const app = express()

import userController from './modules/user/userController'

import postController from  './modules/post/postController'
=======
import * as cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

import userController from './modules/user/userController'

import postController from './modules/post/postController'
>>>>>>> 9dd8634b02e9b3a6b8aab0d7a7589e6d62c2b2b2


app.use('/user', userController)
app.use('/post', postController)

<<<<<<< HEAD


app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))
=======
app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))
>>>>>>> 9dd8634b02e9b3a6b8aab0d7a7589e6d62c2b2b2
