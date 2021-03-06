const models = require('../../models')

exports.store = (req,res) => {
  models.Transactions.create(req.body)
    .then((results) => {
      res.json(results)
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}

exports.show = (req,res) => {
  models.Transactions.findAll({
    where:{
      id: req.params.id
    },
    include: [{
      model: models.Orders,
      include: [
        models.Products
      ]
    }]
  })
    .then((results) => {
      res.json(results)
    })
}