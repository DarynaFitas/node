const Joi = require('joi');

const skolaCreateSchema = Joi.object({

    skolaId: Joi.string()
        .min(1)
        .max(20),


    lastName: Joi.string()
        .min(2)
        .max(60),

    gender: Joi.string()
        .min(4)
        .max(6),

    class: Joi.string()
        .min(4)
        .max(5),
    
    mark1: Joi.string()
        .min(0)
        .max(100),
    
    mark2: Joi.string()
        .min(0)
        .max(100),
});

const skolaUpdateSchema = Joi.object({

    skolaId: Joi.string()
        .min(1)
        .max(20),

    lastName: Joi.string()
        .min(2)
        .max(60),

    gender: Joi.string()
        .min(4)
        .max(6),

    class: Joi.string()
        .min(4)
        .max(5),
    
    mark1: Joi.string()
        .min(0)
        .max(100),
    
    mark2: Joi.string()
        .min(0)
        .max(100),
});

module.exports = {
    skolaCreateSchema,
    skolaUpdateSchema,
};