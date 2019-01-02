const models = require('../../models')

exports.index = (req,res) => {
  models.Orders.findAll({
    include: [
      models.Products,
      models.Transactions
    ]
  })
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
  models.Orders.findById(req.params.id)
    .then((order) => {
      if(!order){
        res.status(404).json({
          message: 'Data not found to update'
        })
      }

      order.update(req.body)
        .then((result) => {
          res.json(result)
        })
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}

exports.delete = (req,res) => {
  models.Orders.findById(req.params.id)
    .then((order) => {
      if(!order){
        res.status(404).json({
          message: 'Data not found to delete'
        })
      }

      order.destroy(req.params.id)
        .then((result) => {
          res.json(result)
        })
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}