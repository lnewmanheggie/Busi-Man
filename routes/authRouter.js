const express = require('express');
// const auth = require('registry-auth-token');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/user', authMiddleware.checkUser);
// router.get('/logout', authController.logoutUser);

module.exports = router;