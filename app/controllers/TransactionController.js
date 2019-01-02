exports.store = (req,res) => {
  res.json('Store transaction')
}

exports.show = (req,res) => {
  res.json('transaction: '+req.params.id)
}