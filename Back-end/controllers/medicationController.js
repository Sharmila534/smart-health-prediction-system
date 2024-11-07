// controllers/medicationController.js
const db = require('../config/db');

// Add a new medication
const addMedication = (req, res) => {
  const { name, dosage, schedule, user_id } = req.body;
  
  const query = `INSERT INTO medications (name, dosage, schedule, user_id) VALUES (?, ?, ?, ?)`;
  db.query(query, [name, dosage, schedule, user_id], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding medication');
    }
    res.status(200).send('Medication added successfully');
  });
};

// Get medications for a user
const getMedications = (req, res) => {
  const userId = req.params.user_id;
  
  const query = `SELECT * FROM medications WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching medications');
    }
    res.json(results);
  });
};

// Log side effects
const logSideEffect = (req, res) => {
  const { medication_id, note, user_id } = req.body;

  const query = `INSERT INTO side_effects (medication_id, user_id, note) VALUES (?, ?, ?)`;
  db.query(query, [medication_id, user_id, note], (err, result) => {
    if (err) {
      return res.status(500).send('Error logging side effect');
    }
    res.status(200).send('Side effect logged successfully');
  });
};

// Check for drug interactions
const checkDrugInteractions = (req, res) => {
  const medications = req.body.medications; // Array of medication IDs
  
  const query = `
    SELECT * FROM drug_interactions 
    WHERE drug1_id IN (?) AND drug2_id IN (?);
  `;
  db.query(query, [medications, medications], (err, interactions) => {
    if (err) {
      return res.status(500).send('Error checking interactions');
    }
    res.json(interactions);
  });
};

module.exports = {
  addMedication,
  getMedications,
  logSideEffect,
  checkDrugInteractions
};
