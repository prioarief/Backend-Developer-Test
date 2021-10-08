const { users } = require("../../models");

class UserService {
  async editUser(data) {
    const id = data.id;
    // delete data.id
    return await users.update(data, { where: { id } });
  }
  async deleteUser(data) {
    const id = data.id;
    return await users.destroy({ where: {id} });
  }
  async getUser(data) {
    const id = data.id;
    return await users.findOne({ raw: true, where: {id} });
  }
  async getUsers() {
    return await users.findAll({ raw: true });
  }
  async createUser(data) {
    return await users.create(data);
  }
}

module.exports = new UserService();
