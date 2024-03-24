const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const userService = require('../services/teachers.service');

async function teacherByIdValidation(req, res, next) {
    try {
        const { userId } = req.params;

        if (!ObjectId.isValid(userId)) {
            throw createError.BadRequest("Teacher id is not valid");
        }

        const user = await userService.findById(userId);

        if (!user) {
            throw createError.NotFound("Teacher with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    userByIdValidation,
};