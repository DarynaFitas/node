const { checkNumberSequence } = require('../services/numberService');

exports.checkNumber = (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: 'Number is required' });
  }

  const result = checkNumberSequence(Number(number));
  res.status(200).json({ isSequence: result });
};
