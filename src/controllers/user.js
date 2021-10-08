const DateFormat = require("../helpers/DateFormat");
const { getUsers, createUser } = require("../services/user");

class UserController {
  async getUser(req, res) {
    try {
      let users = await getUsers();
      users = DateFormat.index(users, "DD-MMMM-YYYY", "dob")
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async getUsers(req, res) {
    try {
      let users = await getUsers();
      users = DateFormat.index(users, "DD-MMMM-YYYY", "dob")
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async createUser(req, res) {
    try {
      let data = req.validated
      await createUser(data);
      data = DateFormat.index(data, "DD-MMMM-YYYY", "dob")
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
