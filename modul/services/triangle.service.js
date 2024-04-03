const Triangle = require('../models/triangle.model');

exports.createTriangle = async (cathetusA, cathetusB, hypotenuse, area) => {
  return Triangle.create({
    cathetusA: parseFloat(cathetusA),
    cathetusB: parseFloat(cathetusB),
    hypotenuse: parseFloat(hypotenuse),
    area: parseFloat(area),
    createdAt: new Date(),
  });
};
