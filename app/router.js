const express = require('express')
const router = express.Router()

const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')
const TransactionController = require('./controllers/TransactionController')

router.get('/products',ProductController.index)
router.post('/product',ProductController.store)

router.get('/orders',OrderController.index)
router.post('/order',OrderController.store)
router.patch('/order/:id',OrderController.update)
router.delete('/order/:id',OrderController.delete)

router.post('/transaction',TransactionController.store)
router.get('/transaction/:id',TransactionController.show)

module.exports = router