// symptomRoutes.js
const express = require('express');
const router = express.Router();
const symptomController = require('../controllers/symptomController');

// POST route to handle exercise recommendation requests
router.post('/exercise-recommendation', symptomController.getExerciseRecommendation);

// You can add additional routes here as needed (e.g., for symptom checking, etc.)

module.exports = router;

