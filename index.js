const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./app/router')

app.get('',(req,res) => {
  res.json('Welcome to API ShopShop')
})
app.use(router)

app.listen(port,() => {
  console.log('server is running...')
})