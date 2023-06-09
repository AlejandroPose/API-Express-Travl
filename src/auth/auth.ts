import { JwtPayload } from 'jsonwebtoken';
import UserSchema from '../data/UserSchema';

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use( 'login',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email: string, password: string, done: Function) => {
        try {
          const usersDB = await UserSchema.find();
          const user = usersDB.find( user => user.email === email);
  
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }

          const validate = await bcrypt.compare(password, user.password);
  
          if (!validate) {
            return done(null, false, { message: 'Wrong Password' });
          }
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          return done(error);
        }
      }
    )
);

passport.use(
    new JWTstrategy(
      {
        secretOrKey: process.env.APP_KEY, //TODO: take from param by url
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('secret_token')
      },
      async (token: JwtPayload, done: Function) => {
        try {
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }
    )
);