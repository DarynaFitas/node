const mongoose = require('mongoose');

const triangleSchema = new mongoose.Schema({
  cathetusA: Number,
  cathetusB: Number,
  hypotenuse: Number,
  area: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Triangle', triangleSchema);
