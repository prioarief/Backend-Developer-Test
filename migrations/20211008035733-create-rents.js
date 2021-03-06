"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      book_id: {
        type: Sequelize.INTEGER,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rents");
  },
};
