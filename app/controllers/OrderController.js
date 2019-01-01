const express = require('express')

exports.index = (req,res) => {
  res.json('orders')
}

exports.store = (req,res) => {
  res.json('Store Order')
}

exports.update = (req,res) => {
  res.json('Update order: '+req.params.id)
}

exports.delete = (req,res) => {
  res.json('Delete order: '+req.params.id)
}