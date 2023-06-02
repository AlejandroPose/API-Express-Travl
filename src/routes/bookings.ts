import { bookings_createOne, bookings_deleteOne, bookings_editOne, bookings_getAll, bookings_getUnique } from "../controllers/bookingsController";

var express = require('express');
var router = express.Router();

router.get('/', bookings_getAll);
router.get('/:id', bookings_getUnique);

router.post('/', bookings_createOne);

router.put('/:id', bookings_editOne);

router.delete('/:id', bookings_deleteOne);

module.exports = router;