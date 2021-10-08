const joi = require("joi");
class UserRequest {
  update(req, res, next) {
    const schema = joi.object({
      id: joi.number().required(),
      title: joi.string().required(),
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
      title: joi.string().required(),
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
