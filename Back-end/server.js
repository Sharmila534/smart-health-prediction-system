const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MySQL Connection Pooling
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Smart Health Prediction System Backend');
});

// User Login Route with JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ?';
  
  db.query(query, [username], (err, results) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    if (results.length === 0) {
      return res.status(400).send('User not found');
    }
    
    const user = results[0];
    
    // Compare password with hash
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        res.status(500).send('Error during password comparison');
        return;
      }
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
      
      // Generate JWT token
      const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

// Example of a prediction route
app.post('/predict', (req, res) => {
  const { userData } = req.body;
  // Implement prediction logic here
  const prediction = 'Predicted result based on user data';
  res.json({ prediction });
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
