const { getBooks } = require("../services/book");

class BookController {
  async getBooks(req, res) {
    try {
      const books = await getBooks();
      return res.status(200).json(books);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new BookController();
