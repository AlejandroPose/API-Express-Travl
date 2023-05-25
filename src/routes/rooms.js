var express = require('express');
var router = express.Router();

//const rooms_controller = require("../controllers/roomsController");

router.get('/', async (req, res) => {
  res.send("Getting Rooms");
});

router.post('/', async (req, res) => {
  res.send('Posting Room');
});

router.put('/', async (req, res) => {
  res.send('Editing Room');
});

router.delete('/', async (req, res) => {
  res.send('Deleting Room');
});

module.exports = router;