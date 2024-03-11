const mockData = require('../helpers/mock-data');

function _generateId() {
    const crypto = require("crypto");
    return crypto.randomBytes(16).toString("hex");
}

async function create(teacher) {
    const newTeacher = { id: _generateId(), ...teacher };
    mockData.teachers.push(newTeacher);

    return newTeacher;
}

async function find({ searchString = '', page = 1, perPage = Number.MAX_SAFE_INTEGER }) {
    searchString = searchString?.toLowerCase();
    const searchResult = mockData.teachers.filter(t => t.surname?.toLowerCase().includes(searchString));

    return {
        items: searchResult.slice((page - 1) * perPage, page * perPage),
        count: searchResult.length,
    }
}

async function findById(id) {
    return mockData.teachers.find(t => t.id === id);
}

async function update(teacherId, teacherData) {
    const index = mockData.teachers.findIndex(t => t.id === teacherId);

    if (index === -1) return;

    const updatedTeacher = { ...mockData.teachers[index], ...teacherData, id: teacherId };

    mockData.teachers[index] = updatedTeacher;
};

async function remove(id) {
    mockData.teachers = mockData.teachers.filter(t => t.id !== id);
};

module.exports = {
    create,
    find,
    findById,
    update,
    remove,
}; 

