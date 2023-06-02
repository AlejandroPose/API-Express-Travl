import { users_createOne, users_deleteOne, users_editOne, users_getAll, users_getUnique } from "../controllers/usersController";

var express = require('express');
var router = express.Router();

router.get('/', users_getAll);

router.get('/:id', users_getUnique);

router.post('/', users_createOne);

router.put('/:id', users_editOne);

router.delete('/:id', users_deleteOne);

module.exports = router;