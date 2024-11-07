// dietRoutes.js
const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController');

// Route for fetching personalized diet plan
router.post('/personalized-diet', dietController.getPersonalizedDietPlan);

module.exports = router;
