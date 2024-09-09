const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('<h1>Hellow from twitter!!<h1/>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1>Hellow from youtube!!<h1/>')
})

app.get('/instagram', (req, res) => {
  res.send('<h1>Hellow from istagram!!<h1/>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})