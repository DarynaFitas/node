const teacherService = require('../services/teachers.service');

async function createTeacher(req, res) {
    try {
       const newTeacher = await teacherService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newTeacher,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getTeachers(req, res) {
    try {
        res.status(200).json({
            status: 200,
            data: await teacherService.find(req.query),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getTeacher(req, res) {
    try {
        const { teacherId } = req.params;
        const teacher = await teacherService.findById(teacherId);

        if (!teacher) {
            return res.status(400).json({
                status: 400,
                message: 'Teacher not found.',
            });
        }

        res.status(200).json({
            status: 200,
            data: teacher,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function updateTeacher(req, res) {
    try {
        const { teacherId } = req.params;
        const teacherData = req.body;
        await teacherService.update(teacherId, teacherData);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function deleteTeacher(req, res) {
    try {
        const { teacherId } = req.params;
        await teacherService.remove(teacherId);

        res.status(200).json({
            status: 200,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

module.exports = {
    createTeacher,
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher,
};
