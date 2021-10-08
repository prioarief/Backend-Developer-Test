const { getBooks } = require("../controllers/book");

const router = require("express").Router();

router.get("/", getBooks);

module.exports = router;
