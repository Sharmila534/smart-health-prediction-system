const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request for user signup
router.post('/signup', authController.signup);

// POST request for user login
router.post('/login', authController.login);

module.exports = router;
