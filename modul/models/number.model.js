const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
});

const NumberModel = mongoose.model('Number', numberSchema);

module.exports = NumberModel;
