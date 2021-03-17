const router = require('express').Router();
const employeeController = require('../../controllers/employeeController');

// matches with api/employee
router.route('/find')
    .get(employeeController.findAll)

router.route('/remove/:email')
    .delete(employeeController.remove)

module.exports = router;