const express = require('express');
const triangleSchema = require('../joi_validation_schemas/triangle.schemas')
const { calculateTriangle } = require('../controllers/triangleController');


const router = express.Router();

router.get('/calculate', calculateTriangle);

module.exports = router;
