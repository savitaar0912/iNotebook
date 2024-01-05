const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key';
const fetchuser = require('../middleware/fetchuser');

// Validation middlewares
const validateUserInput = [
  body('name', 'Enter a valid name').notEmpty(),
  body('email', 'Enter a valid email').isEmail().normalizeEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
];

const validateLogin = [
  body('email', 'Enter a valid email').isEmail().normalizeEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
];

// Route handler for user registration
router.post('/createuser', validateUserInput, async (req, res) => {
  try {
    // Validate user input
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    // Check if a user with the same email already exists
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);

    return res.status(200).json({ user: newUser, token });
  }
  catch (error) {
    console.error('Error 53:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route handler for user login
router.post('/login', validateLogin, async (req, res) => {
  try {
    // Validate user input
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    return res.status(200).json({ user, token });
  }
  catch (error) {
    console.error('Error 86:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route handler for gettif user details
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.userId
    console.log("userId:", userId)
    const user = await User.findById(userId).select("-password")
    res.send(user)
  }
  catch (error) {
    console.error('Error 99:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
