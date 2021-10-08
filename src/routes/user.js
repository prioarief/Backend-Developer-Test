const { getUsers, createUser } = require("../controllers/user");
const {create, get} = require("../requests/user");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/:id", get, getUsers);
router.post("/", create, createUser);

module.exports = router;
