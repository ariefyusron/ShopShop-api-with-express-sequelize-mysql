const models = require('../../models')

exports.index = (req,res) => {
  models.Orders.findAll({include: [{model: models.Products},{model: models.Transactions}]})
    .then((results) => {
      res.json(results)
    })
}

exports.store = (req,res,next) => {
  models.Orders.create(req.body)
    .then((results) => {
      res.json(results)
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}

exports.update = (req,res) => {
  res.json('Update order: '+req.params.id)
}

exports.delete = (req,res) => {
  res.json('Delete order: '+req.params.id)
}