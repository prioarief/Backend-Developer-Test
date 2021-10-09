const { createRent } = require("../controllers/rent");
const { create } = require("../requests/rent");

const router = require("express").Router();

router.post("/", create, createRent);

module.exports = router;
