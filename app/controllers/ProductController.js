const models = require('../../models')

exports.index = (req,res) => {
  models.Products.findAll()
    .then((results) => {
      res.json(results)
    })
}

exports.store = (req,res,next) => {
  models.Products.create(req.body)
    .then((results) => {
      res.json(results)
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}