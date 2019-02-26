const Joi = require("joi");
module.exports = {
  validateUser: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      next();
    };
  },
  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    }),
    userSchema: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .alphanum()
        .min(6)
        .max(10)
        .required()
    })
  }
};
