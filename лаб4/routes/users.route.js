const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teachers.controller');
const middleware = require('../middlewares/teachers.middleware');

router.route('/')
    .get(teacherController.getTeachers)
    .post(teacherController.createTeacher);

router.route('/:teacherId')
    .get(middleware.teacherByIdValidation, controller.getTeacher)
    .patch(middleware.teacherByIdValidation, controller.updateTeacher)
    .delete(middleware.teacherByIdValidation, controller.deleteTeacher);

module.exports = router; 
