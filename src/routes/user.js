const { getUsers, createUser, getUser, deleteUser, editUser } = require("../controllers/user");
const {create, get, update} = require("../requests/user");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/:id", get, getUser);
router.delete("/:id", get, deleteUser);
router.put("/:id", update, editUser);
router.post("/", create, createUser);

module.exports = router;
