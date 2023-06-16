import express, { Application } from "express";
import mongoose from "mongoose";
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

const PORT = process.env.APP_PORT;
const app: Application = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded());

app.use('/', loginRoutes);
app.use('/info', infoRoutes);
app.use('/users', passport.authenticate('jwt', { session: false }), usersRoutes);
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRoutes);
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRoutes);
app.use('/contacts', passport.authenticate('jwt', { session: false }), contactsRoutes);

const URL_LOCAL = process.env.APP_URL_LOCAL;
mongoose.connect(URL_LOCAL!);//ATLAS

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});