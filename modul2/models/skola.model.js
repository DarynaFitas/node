const { Schema, model } = require('mongoose');

const skolaSchema = new Schema({
    skolaId: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    class: {
        type: String,
        trim: true,
    },
    mark1: {
        type: Number, 
        min: 0,
        max: 100,
    },
    mark2: {
        type: Number,
        min: 0,
        max: 100,
    },
}, {
    timestamps: true,
});

module.exports = model('Skola', skolaSchema);
