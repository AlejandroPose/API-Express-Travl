import { Request, Response } from "express";

var express = require('express');
var router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send({
    info: 'Travl Dashboard', 
    array: [
      {
        type: '/users -> private',
        getAll: '/ -> get all users',
        getUnique: '/id -> get user with id',
        post: '/ -> create user',
        put: '/id -> edit user with id',
        delete: '/id -> delete user with id'
      },
      {
        type: '/bookings -> private',
        getAll: '/ -> get all bookings',
        getUnique: '/id -> get booking with id',
        post: '/ -> create booking',
        put: '/id -> edit booking with id',
        delete: '/id -> delete booking with id'
      },
      {
        type: '/rooms -> private',
        getAll: '/ -> get all rooms',
        getUnique: '/id -> get room with id',
        post: '/ -> create room',
        put: '/id -> edit room with id',
        delete: '/id -> delete room with id'
      },
      {
        type: '/login -> public',
        post: 'with correct info generates a token'
      }
    ]
  });
});

module.exports = router;