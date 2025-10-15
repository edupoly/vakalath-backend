const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getProfile
} = require('../controllers/userController');

// Routes
router.post('/signup', register);
router.post('/login', login);
router.get('/profile/:token',getProfile)

module.exports = router;
