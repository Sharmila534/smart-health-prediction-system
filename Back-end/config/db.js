const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables from .env

// Create a MySQL connection pool for better performance under load
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Wait for connections to be established
  connectionLimit: 10,      // Max number of connections allowed in the pool
  queueLimit: 0             // No limit on the number of requests waiting for a connection
});

// Check if the connection pool is working
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    // You may want to throw or log the error based on your needs
    process.exit(1); // Exit the process if the DB connection fails
  }

  if (connection) {
    console.log('Connected to the MySQL database.');
    connection.release(); // Release the connection back to the pool
  }
});

// Export the connection pool for use in other parts of the app
module.exports = db;
