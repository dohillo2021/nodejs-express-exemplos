import * as express from 'express'

const app = express()

import userController from './modules/user/userController'

import postController from  './modules/post/postController'


app.use('/user', userController)
app.use('/post', postController)



app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))