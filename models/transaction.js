'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    total: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};