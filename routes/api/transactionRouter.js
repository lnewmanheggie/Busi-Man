const router = require('express').Router();
const transactionController = require('../../controllers/transactionController');

// route /api/transaction
router.route('/get')
    .post(transactionController.create)


module.exports = router;