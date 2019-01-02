'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    product_id: {
      type: DataTypes.INTEGER,
      validator: {
        isInt: true
      }
    },
    transaction_id: {
      type: DataTypes.INTEGER,
      validator: {
        isInt: true
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      validator: {
        isInt: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validator: {
        isInt: true
      }
    }
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Products, {
      foreignKey:'product_id'
    }),
    Orders.belongsTo(models.Transactions, {
      foreignKey:'transaction_id'
    })
  };
  return Orders;
};