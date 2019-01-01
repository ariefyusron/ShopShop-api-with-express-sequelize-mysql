'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    total: DataTypes.INTEGER
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};