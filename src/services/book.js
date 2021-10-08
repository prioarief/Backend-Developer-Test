const {books} = require("../../models")

class BookService {
  async deleteBook(data) {
    const {id} = data
    return await books.destroy({where: {id}})
  }
  async getBook(data) {
    const {id} = data
    return await books.findOne({raw: true, where: {id}})
  }
  async createBook(data) {
    return await books.create(data)
  }
  async editBook(data) {
    const {id} = data
    return await books.update(data, {where: {id}})
  }
  async getBooks() {
    return await books.findAll({raw: true})
  }
}

module.exports = new BookService();
