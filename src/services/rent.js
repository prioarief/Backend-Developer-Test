const { rents, books } = require('../../models');
const {col} = require("sequelize")

class RentService {
	async createRent(data) {
		return await rents.create(data);
	}
	async getRent(data) {
		return await rents.findAll({
      attributes: [[col('book.id'), 'id'], [col('book.title'), 'title']],
			where: { user_id: data.id },
			include: [{ model: books, attributes: [] }],
		});
	}
}

module.exports = new RentService();
