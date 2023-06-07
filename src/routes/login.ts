import { NextFunction, Request, Response } from "express";

//const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
import express from 'express';
import jwt from "jsonwebtoken";
import passport from "passport";

const router = express.Router();

type User = {
  email: string
};

router.post( '/login',
    async (req: Request, res: Response, next: NextFunction) => {
      passport.authenticate(
        'login',
        async (err: Error, user: User) => {
          try {
            if (err || !user) {
              const error = new Error('An error occurred.');
  
              return next(error);
            }
  
            req.login(
              user,
              { session: false },
              async (error) => {
                if (error) return next(error);
  
                const body = { email: user.email };
                const token = jwt.sign({ user: body }, process.env.APP_KEY!);
  
                return res.json({ token });
              }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
  );
  
  module.exports = router;