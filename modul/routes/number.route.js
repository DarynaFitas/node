const express = require('express');
const { validateInput } = require('../middlewares/number.middleware');
const { checkNumber } = require('../controllers/numberController');
const numberSchema = require('../joi_validation_schemas/number.schemas');

const router = express.Router();

router.get('/check', (req, res, next) => {
  const { error } = numberSchema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}, checkNumber);

module.exports = router;
