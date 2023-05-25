var express = require('express');
var router = express.Router();

//const users_controller = require("../controllers/usersController");

router.get('/', async (req, res) => {
  res.send("Getting Users");
});

router.post('/', async (req, res) => {
  res.send('Posting User');
});

router.put('/', async (req, res) => {
  res.send('Editing User');
});

router.delete('/', async (req, res) => {
  res.send('Deleting User');
});

module.exports = router;