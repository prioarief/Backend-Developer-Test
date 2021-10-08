const { getBooks, getBook, deleteBook, editBook, createBook } = require("../services/book");

class BookController {
  async getBook(req, res) {
    try {
      const book = await getBook(req.validated);
      if (!book) return res.status(404).json({ message: "Book not found" });
      return res.status(200).json(book);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async deleteBook(req, res) {
    try {
      const data = req.validated
      const book = await getBook(data);
      if (!book) return res.status(404).json({ message: "Book not found" });
      await deleteBook(data)
      return res.status(200).json({message: `Buku ${book.title} berhasil di delete`});
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async editBook(req, res) {
    try {
      const data = req.validated
      const book = await getBook(data);
      if (!book) return res.status(404).json({ message: "Book not found" });
      await editBook(data)
      return res.status(200).json(data)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async createBook(req, res) {
    try {
      const data = req.validated
      await createBook(data)
      return res.status(200).json(data)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
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
