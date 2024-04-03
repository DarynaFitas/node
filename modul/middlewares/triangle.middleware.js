const { Joi } = require('joi');

exports.validateInput = (req, res, next) => {
  const schema = Joi.object({
    cathetusA: Joi.number().positive().required(),
    cathetusB: Joi.number().positive().required(),
  });

  const { error } = schema.validate(req.query);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};
