const router = require('express').Router();
const announcementController = require('../../controllers/announcementController');

// matches with /api/announcement

router.route('/find')
    .get(announcementController.findAll)

router.route('/post')
    .post(announcementController.create)

module.exports = router;