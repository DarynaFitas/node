const express = require('express');
const router = express.Router();
const skolaController = require('../controllers/skola.controller');

router.post('/upload', skolaController.uploadFile);

module.exports = router;