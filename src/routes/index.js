const router = require("express").Router();
const bookRouter = require("./book");
const userRouter = require("./user");
const rentRouter = require("./rent");

router.use("/books", bookRouter);
router.use("/users", userRouter);
router.use("/rents", rentRouter);

module.exports = router;
