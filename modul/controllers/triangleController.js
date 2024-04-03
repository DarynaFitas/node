const Triangle = require('../models/triangle.model');

exports.calculateHypotenuse = async (req, res) => {
  try {
    const { cathetusA, cathetusB } = req.query;

    const hypotenuse = Math.sqrt(cathetusA ** 2 + cathetusB ** 2);

    const triangle = new Triangle({
      cathetusA: parseFloat(cathetusA),
      cathetusB: parseFloat(cathetusB),
      hypotenuse: parseFloat(hypotenuse.toFixed(2)),
      createdAt: new Date(),
    });

    await triangle.save();

    res.json({ hypotenuse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.calculateArea = async (req, res) => {
  try {
    const { cathetusA, cathetusB } = req.query;

    const area = (cathetusA * cathetusB) / 2;

    const triangle = new Triangle({
      cathetusA: parseFloat(cathetusA),
      cathetusB: parseFloat(cathetusB),
      area: parseFloat(area.toFixed(2)),
      createdAt: new Date(),
    });

    await triangle.save();

    res.json({ area });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
