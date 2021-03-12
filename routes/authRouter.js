const express = require('express');
// const auth = require('registry-auth-token');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
// router.get('/logout', authController.logoutUser);

module.exports = router;