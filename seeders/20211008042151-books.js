"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('books', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "books",
      [
        {
          title: "Things Fall Apart",
        },
        {
          title: "Fairy tales",
        },
        {
          title: "The Divine Comedy",
        },
        {
          title: "The Epic Of Gilgamesh",
        },
        {
          title: "The Book Of Job",
        },
        {
          title: "One Thousand and One Nights",
        },
        {
          title: "Nj\u00e1l's Saga",
        },
        {
          title: "Pride and Prejudice",
        },
        {
          title: "Le P\u00e8re Goriot",
        },
        {
          title: "Molloy, Malone Dies, The Unnamable, the trilogy",
        },
        {
          title: "The Decameron",
        },
        {
          title: "Ficciones",
        },
        {
          title: "Wuthering Heights",
        },
        {
          title: "The Stranger",
        },
        {
          title: "Poems",
        },
        {
          title: "Journey to the End of the Night",
        },
        {
          title: "Don Quijote De La Mancha",
        },
        {
          title: "The Canterbury Tales",
        },
        {
          title: "Stories",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('books', null, {});
     */
    await queryInterface.bulkDelete("books", null, {});
  },
};
