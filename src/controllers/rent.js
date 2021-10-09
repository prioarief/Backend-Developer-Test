const { createRent } = require("../services/rent");

class RentController {
  async createRent(req, res) {
    try {
      const data = req.validated
      const insert = await createRent(data)
      return res.status(200).json(insert.dataValues)
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

module.exports = new RentController();
