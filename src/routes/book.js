const { getBooks, getBook, deleteBook, editBook, createBook } = require("../controllers/book");
const { get, update, create } = require("../requests/book");

const router = require("express").Router();

router.get("/", getBooks);
router.get("/:id", get, getBook);
router.delete("/:id", get, deleteBook);
router.put("/:id", update, editBook);
router.post("/", create, createBook);

module.exports = router;
