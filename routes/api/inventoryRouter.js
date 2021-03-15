const router = require('express').Router();
const inventoryController = require('../../controllers/inventoryController');

// Matches with '/api/inventory'
router.route('/get')
  .get(inventoryController.findAll)

router.route('/')
  .post(inventoryController.create)

router.route('/add')
  .put(inventoryController.updateAdd)

router.route('/remove')
  .put(inventoryController.updateRemove)

// Matches with '/api/inventory/:barcode'
router.route('/:barcode')
  .delete(inventoryController.remove)

module.exports = router;