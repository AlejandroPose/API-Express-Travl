var express = require('express');
var router = express.Router();

//const bookings_controller = require("../controllers/bookingsController");

router.get('/', async (req, res) => {
  res.send("Getting Bookings");
});

router.post('/', async (req, res) => {
  res.send('Posting Booking');
});

router.put('/', async (req, res) => {
  res.send('Editing Booking');
});

router.delete('/', async (req, res) => {
  res.send('Deleting Booking');
});

module.exports = router;