'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    },
    image_url: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true
      }
    }
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};