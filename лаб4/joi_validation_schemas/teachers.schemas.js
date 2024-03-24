const Joi = require('joi');
const genderEnum = require('../enums/curses.enum');

const TeachersCreateSchema = Joi.object({
    id: Joi.string()
        .min(1)
        .max(100),

    surname: Joi.string()
        .min(2)
        .max(60),

    position: Joi.string()
        .min(2)
        .max(60),

    degree: Joi.string()
        .min(2)
        .max(100),

    auditory: Joi.string()
        .min(1)
        .max(1000),

    curses: Joi.string()
        .valid(...Object.values(cursesEnum)),
});

const TeachersUpdateSchema = Joi.object({
    id: Joi.string()
        .min(1)
        .max(100),

    surname: Joi.string()
        .min(2)
        .max(60),

    position: Joi.string()
        .min(2)
        .max(60),

    degree: Joi.string()
        .min(2)
        .max(100),

    auditory: Joi.string()
        .min(1)
        .max(1000),

    curses: Joi.string()
        .valid(...Object.values(cursesEnum)),
});

module.exports = {
    TeachersCreateSchema,
    TeachersUpdateSchema,
};