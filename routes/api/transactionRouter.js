const router = require('express').Router();
const transactionController = require('../../controllers/transactionController');

// route /api/transaction
router.route('/')
    .post(transactionController.create)
    .get(transactionController.findAll)



module.exports = router;