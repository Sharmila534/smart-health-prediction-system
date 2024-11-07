const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Secret key used to sign the JWT (make sure this is secure and stored safely in your .env file)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  // Get the token from Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using JWT secret key
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the decoded user data to the request object (e.g., user ID)
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authMiddleware;
