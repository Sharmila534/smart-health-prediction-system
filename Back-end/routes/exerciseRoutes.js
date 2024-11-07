const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

// POST route for exercise recommendations
router.post('/exercise-recommendation', exerciseController.getExerciseRecommendation);

module.exports = router;
