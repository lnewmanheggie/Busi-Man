const router = require('express').Router();
const inventoryRoutes = require('./inventoryRouter');
const transactionRoutes = require('./transactionRouter');
const employeeRoutes = require('./employeeRouter');
const announcementRoutes = require('./announcementRouter');

router.use('/inventory', inventoryRoutes);

router.use('/transaction', transactionRoutes);

router.use('/employee', employeeRoutes);

router.use('/announcement', announcementRoutes);



module.exports = router;
