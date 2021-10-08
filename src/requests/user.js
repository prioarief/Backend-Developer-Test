const joi = require("joi");
class UserRequest {
  create(req, res, next) {
    const schema = joi.object({
      name: joi.string().required(),
      dob: joi.date().required(),
      gender: joi.string().valid("man", "woman"),
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    req.validated = value;
    next();
  }
  get(req, res, next) {
    const schema = joi.object({
      id: joi.number().required(),
    });

    const { value, error } = schema.validate(req.params);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    console.log(value);
    req.validated = value;
    next();
  }
}

module.exports = new UserRequest();
