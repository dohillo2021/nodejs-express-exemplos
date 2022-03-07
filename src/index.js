import * as express from 'express'
const { listen } = require('express/lib/application')
const res = require('express/lib/response')


const app = express()

app.get('/', (req, res) => {
    res.send('GET /')
})

app.post('/', (req, res) => {
    res.status(201).send('POST /')
})

app.put('/', (req, res) => {
    res.status(400).send('PUT /')
})

app.delete('/', (req, res) => {
    res.send('DELETE /')
})

app.patch('/', (req, res) => {
    res.send('PATCH/')
})

app.listen(3000, () => console.log(`ONLINE http://localhost:3000`))
