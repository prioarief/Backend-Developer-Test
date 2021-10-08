const {users} = require("../../models")

class UserService {
  async getUsers() {
    return await users.findAll({raw: true})
  }
}

module.exports = new UserService();
