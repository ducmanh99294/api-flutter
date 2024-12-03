const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Route lấy tất cả các trip
router.get('/trips', tripController.getAllTrips);

module.exports = router;
