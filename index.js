require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./app/router')

app.get('',(req,res) => {
  res.json('Welcome to API ShopShop')
})
app.use(router)

app.listen(process.env.PORT,() => {
  console.log('server is running...')
})