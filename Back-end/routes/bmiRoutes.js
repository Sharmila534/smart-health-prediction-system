const express = require('express');
const router = express.Router();
const bmiController = require('../controllers/bmiController');

// POST request for calculating BMI
router.post('/bmi', bmiController.calculateBMI);

module.exports = router;
