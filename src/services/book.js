const {books} = require("../../models")

class BookService {
  async getBooks() {
    return await books.findAll({raw: true})
  }
}

module.exports = new BookService();
