require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./app/router')

app.get('',(req,res) => {
  res.json('Welcome to API ShopShop')
})
app.use(bodyParser.json())
app.use(router)

app.listen(process.env.PORT,() => {
  console.log('Listening on '+process.env.PORT)
})