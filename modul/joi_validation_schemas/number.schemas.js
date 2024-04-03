const Joi = require('joi');

const numberSchema = Joi.object({
  number: Joi.number().integer().positive().required()
});

module.exports = numberSchema;
