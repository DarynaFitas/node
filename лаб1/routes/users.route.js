const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teachers.controller');

router.route('/')
    .get(teacherController.getTeachers)
    .post(teacherController.createTeacher);

router.route('/:teacherId')
    .get(teacherController.getTeacher)
    .patch(teacherController.updateTeacher)
    .delete(teacherController.deleteTeacher);

module.exports = router; 
