//Preguntar app_key en JWTstrategy dentro de auth

import express, { Application } from "express";
var cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
require('dotenv').config();

require('./auth/auth');

const usersRoutes = require('./routes/users');
const roomsRoutes = require('./routes/rooms');
const bookingsRoutes = require('./routes/bookings');
const contactsRoutes = require('./routes/contacts');
const loginRoutes = require('./routes/login');
const infoRoutes = require('./routes/info');

const PORT = 3000;
const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', loginRoutes);
app.use('/info', infoRoutes);
app.use('/users', passport.authenticate('jwt', { session: false }), usersRoutes);
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRoutes);
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRoutes);
app.use('/contacts', passport.authenticate('jwt', { session: false }), contactsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});