const DateFormat = require("../helpers/DateFormat");
const { getUsers } = require("../services/user");

class UserController {
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
}

module.exports = new UserController();
