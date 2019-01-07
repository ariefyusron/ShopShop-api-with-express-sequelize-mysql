const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT

const router = require('./app/router')

app.get('',(req,res) => {
  res.json('Welcome to API ShopShop')
})
app.use(bodyParser.json())
app.use(router)

app.listen(port,() => {
  console.log('Listening on '+port)
})