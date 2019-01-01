const express = require('express')

exports.index = (req,res) => {
  res.json('Products')
}

exports.store = (req,res) => {
  res.json('Store Product')
}