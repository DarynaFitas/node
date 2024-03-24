const { Schema, model } = require('mongoose');
const cursesEnum = require('../enums/curses.enum');

const teachersSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    surname: {
        type: String,
        trim: true,
    },
    position: {
        type: String,
        trim: true,
    },
    degree: {
        type: String,
        trim: true,
    },
    auditory: {
        type: String,
        trim: true,
    },
    curses: {
        type: String,
        enum: Object.values(cursesEnum),
    },
}, {
    timestamps: true,
});

module.exports = model('teachers', teachersSchema);