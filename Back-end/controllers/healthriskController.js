// controllers/dietController.js
const mysql = require('mysql');
const db = require('../config/db');

// Function to calculate the health risk based on BMI and age
function assessRisk(age, bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
}

// Save user's health risk assessment to database (optional)
function saveHealthRiskAssessment(userId, age, weight, height, bmi, riskLevel, steps) {
    const query = "INSERT INTO health_risk_assessments (user_id, age, weight, height, bmi, risk_level, steps) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(query, [userId, age, weight, height, bmi, riskLevel, steps], (err, result) => {
        if (err) {
            console.error('Error saving health risk assessment:', err);
        } else {
            console.log('Health risk assessment saved:', result);
        }
    });
}

// Route handler for the health risk assessment (GET)
exports.getHealthRiskAssessment = (req, res) => {
    res.render('health-risk-assessment');  // Render the health-risk-assessment page
};

// Route handler for POST request (submit health risk data)
exports.submitHealthRiskAssessment = (req, res) => {
    const { age, weight, height, steps, userId } = req.body;

    const bmi = weight / ((height / 100) ** 2);
    const riskLevel = assessRisk(age, bmi);

    // Optionally save the assessment to the database
    saveHealthRiskAssessment(userId, age, weight, height, bmi, riskLevel, steps);

    // Send the result back to the client
    res.json({
        bmi: bmi.toFixed(2),
        riskLevel,
        steps: parseInt(steps),
    });
};
