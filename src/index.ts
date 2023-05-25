import express, { Application } from "express";
var cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./auth/auth');

var usersRoutes = require('./routes/users');
var roomsRoutes = require('./routes/rooms');
var bookingsRoutes = require('./routes/bookings');
var contactsRoutes = require('./routes/contacts');
var loginRoutes = require('./routes/login');

const PORT = 3000;
const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', loginRoutes);
app.use('/users', passport.authenticate('jwt', { session: false }), usersRoutes);
app.use('/rooms', passport.authenticate('jwt', { session: false }), roomsRoutes);
app.use('/bookings', passport.authenticate('jwt', { session: false }), bookingsRoutes);
app.use('/contacts', passport.authenticate('jwt', { session: false }), contactsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});