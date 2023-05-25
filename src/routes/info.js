var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
  res.send("Getting Info");
});

module.exports = router;