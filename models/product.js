'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image_url: DataTypes.TEXT
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};