const express = require('express');
// const auth = require('registry-auth-token');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

// routes for /auth
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/user', authMiddleware.checkUser);
router.post('/passwordchange', authController.changePassword);
router.get('/:company', employeeController.checkCompany);

module.exports = router;