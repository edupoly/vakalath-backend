const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getProfile,
  // forgotPassword,
  // resetPassword
} = require('../controllers/userController');

// Routes
router.post('/signup', register);
router.post('/login', login);
router.get('/profile/:token',getProfile)
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password", resetPassword);

module.exports = router;
