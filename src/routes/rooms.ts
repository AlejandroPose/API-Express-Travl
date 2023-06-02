import { rooms_createOne, rooms_deleteOne, rooms_editOne, rooms_getAll, rooms_getUnique } from "../controllers/roomsController";

var express = require('express');
var router = express.Router();

router.get('/', rooms_getAll);
router.get('/:id', rooms_getUnique);

router.post('/', rooms_createOne);

router.put('/:id', rooms_editOne);

router.delete('/:id', rooms_deleteOne);

module.exports = router;