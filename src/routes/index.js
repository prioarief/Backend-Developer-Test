const router = require("express").Router();
const bookRouter = require("./book");
const userRouter = require("./user");

router.use("/books", bookRouter);
router.use("/users", userRouter);

module.exports = router;
