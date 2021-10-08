'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.belongsTo(models.rents, {foreignKey: 'book_id'})
    }
  };
  books.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books'
  });
  return books;
};