import { JwtPayload } from 'jsonwebtoken';

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
            //Fake Users Database
            const psw = await bcrypt.hash('0000', 10);
            const users = [{
                email: 'aldrosposirah@gmail.com',
                password: psw
            }];//BBDD

            const user = users.find( user => user.email === email);
  
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