var express = require('express');
var router = express.Router();

//const contacts_controller = require("../controllers/contactsController");

router.get('/', async (req, res) => {
  res.send("Getting Contacts");
});

router.post('/', async (req, res) => {
  res.send('Posting Contact');
});

router.put('/:id', async (req, res) => {
  res.send('Editing Contact');
});

router.delete('/:id', async (req, res) => {
  res.send('Deleting Contact');
});

module.exports = router;