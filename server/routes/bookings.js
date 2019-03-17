const express = require('express');
const BookingCtrl = require('../controllers/booking');
const UserCtrl = require('../controllers/user');
const router = express.Router();

router.post('', UserCtrl.authMiddleware, BookingCtrl.createBooking);

module.exports = router;