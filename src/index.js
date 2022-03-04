const express = require('express')
const { listen } = require('express/lib/application')
const res = require('express/lib/response')


const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))
