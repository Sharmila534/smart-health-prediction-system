// routes/medicationRoutes.js
const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

// Endpoint to add a medication
router.post('/add', medicationController.addMedication);

// Endpoint to get all medications for a user
router.get('/:user_id', medicationController.getMedications);

// Endpoint to log side effects
router.post('/logSideEffect', medicationController.logSideEffect);

// Endpoint to check for drug interactions
router.post('/checkInteractions', medicationController.checkDrugInteractions);

module.exports = router;
