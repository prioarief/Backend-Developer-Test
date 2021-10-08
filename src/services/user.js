const {users} = require("../../models")

class UserService {
  async getUsers() {
    return await users.findAll({raw: true})
  }
  async createUser(data) {
    return await users.create(data)
  }
}

module.exports = new UserService();
