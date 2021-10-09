const joi = require("joi");
const userService = require("../services/user")
const bookService = require("../services/book")

class UserRequest {
  async create(req, res, next) {
    try {
        const schema = joi.object({
            book_id: joi.number().required(),
            user_id: joi.number().required(),
          });
      
          const { value, error } = schema.validate(req.body);
          if (error) {
            return res.status(400).json({ message: error.message });
          }
          req.validated = value;
          const userCheck = await userService.getUser({id: value.user_id})
          if(!userCheck) return res.status(404).json({ message: "User not found" });

          const bookCheck = await bookService.getBook({id: value.book_id})
          if(!bookCheck) return res.status(404).json({ message: "Book not found" });
          next();
    } catch (error) {
        console.log(error)
    }
  }
}

module.exports = new UserRequest();
