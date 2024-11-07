// routes/dietRoutes.js
const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController');

// Route to serve the health risk assessment page
router.get('/health-risk-assessment', dietController.getHealthRiskAssessment);

// Route to handle health risk assessment submission (AJAX POST request)
router.post('/submit-health-risk', dietController.submitHealthRiskAssessment);

module.exports = router;
