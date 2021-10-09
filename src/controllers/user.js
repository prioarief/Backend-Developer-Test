const DateFormat = require("../helpers/DateFormat");
const { getUsers, createUser, getUser, deleteUser, editUser } = require("../services/user");
const { getRent } = require("../services/rent");

class UserController {
  async editUser(req, res) {
    try {
      let data = req.validated
      let users = await getUser(data);
      if (!users) return res.status(404).json({ message: "User not found" });
      await editUser(data)
      data = DateFormat.index(data, "DD-MMMM-YYYY", "dob");
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async deleteUser(req, res) {
    try {
      let users = await getUser(req.validated);
      if (!users) return res.status(404).json({ message: "User not found" });
      await deleteUser(req.validated)
      return res.status(200).json({message: `data ${users.name} berhasil di delete`});
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async getUser(req, res) {
    try {
      let users = await getUser(req.validated);
      if (!users) return res.status(404).json({ message: "User not found" });
      users = DateFormat.index(users, "DD-MMMM-YYYY", "dob");
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async getUsers(req, res) {
    try {
      let users = await getUsers();
      users = DateFormat.index(users, "DD-MMMM-YYYY", "dob");
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async createUser(req, res) {
    try {
      let data = req.validated;
      await createUser(data);
      data = DateFormat.index(data, "DD-MMMM-YYYY", "dob");
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
  async getRentByUser(req, res) {
    try {
      let data = req.validated;
      const user = await getUser(data)
      const rent = await getRent(data)
      const response = {
        id: user.id,
        name: user.name,
        books: rent
      }
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
