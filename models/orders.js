'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    product_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};