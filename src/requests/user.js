const joi = require("joi");
class UserRequest {
  update(req, res, next) {
    const schema = joi.object({
      id: joi.number().required(),
      name: joi.string().required(),
      dob: joi.date().required(),
      gender: joi.string().valid("man", "woman"),
    });

    const { value, error } = schema.validate({...req.body, ...req.params});
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    req.validated = value;
    next();
  }
  create(req, res, next) {
    const schema = joi.object({
      name: joi.string().required(),
      dob: joi.date().required(),
      gender: joi.string().valid("man", "woman"),
    });

    const { value, error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
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
      return res.status(400).json({ message: error.message });
    }
    req.validated = value;
    next();
  }
}

module.exports = new UserRequest();
