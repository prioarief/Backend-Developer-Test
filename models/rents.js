'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rents.belongsTo(models.books, {foreignKey: 'book_id'})
      rents.belongsTo(models.users, {foreignKey: 'user_id'})
      // define association here
    }
  };
  rents.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rents',
    timestamps: false
  });
  return rents;
};