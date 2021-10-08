const router = require("express").Router();
const bookRouter = require("./book");
const userRouter = require("./user");

router.use("/book", bookRouter);
router.use("/user", userRouter);

module.exports = router;
